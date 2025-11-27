interface FormData {
  nome: string;
  email: string;
  telefone: string;
  nomeEmpresa: string;
}

// URLs dos webhooks
const WEBHOOK_TEST = 'https://n8n.blueoceansem.com/webhook-test/lpnemocrm2';
const WEBHOOK_PRODUCTION = 'https://webhook.blueoceansem.com/webhook/lpnemocrm2';

// URLs do proxy (para desenvolvimento)
const PROXY_TEST = '/api/webhook-test';
const PROXY_PRODUCTION = '/api/webhook';

// Determina qual webhook usar baseado no ambiente
// Em desenvolvimento, usa proxy. Em produção, tenta direto primeiro
const getWebhookUrl = (useProduction: boolean = false): string => {
  const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost';
  
  // Se estiver em localhost ou desenvolvimento
  if (isDevelopment) {
    // Permite forçar uso do webhook de produção mesmo em dev (para testes)
    if (useProduction) {
      return PROXY_PRODUCTION; // Usa proxy para produção em dev
    }
    return PROXY_TEST; // Usa proxy para teste em dev
  }
  // Em produção, usa o webhook de produção direto
  return WEBHOOK_PRODUCTION;
};

// Função auxiliar para processar a resposta
async function handleResponse(response: Response): Promise<{ success: boolean; message: string }> {
  console.log('Status da resposta:', response.status);
  console.log('Status text:', response.statusText);
  console.log('Headers da resposta:', Object.fromEntries(response.headers.entries()));

  // Tenta ler o corpo da resposta
  let responseData;
  const contentType = response.headers.get('content-type');
  
  try {
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      const text = await response.text();
      responseData = text || null;
    }
    console.log('Resposta do servidor:', responseData);
  } catch (parseError) {
    console.log('Não foi possível ler a resposta:', parseError);
  }

  // Alguns webhooks retornam 200 mesmo com sucesso, outros podem retornar 201, 202, etc
  // Vamos considerar sucesso se o status for entre 200-299
  if (response.status >= 200 && response.status < 300) {
    return {
      success: true,
      message: 'Formulário enviado com sucesso! Entraremos em contato em breve.'
    };
  }

  // Se não for um status de sucesso, lança erro
  throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
}

export const sendToWebhook = async (data: FormData, useProductionWebhook: boolean = false): Promise<{ success: boolean; message: string }> => {
  // Prepara os dados no formato que o n8n espera
  // O n8n geralmente recebe os dados no body diretamente
  const payload = {
    nome: data.nome,
    email: data.email,
    telefone: data.telefone,
    nomeEmpresa: data.nomeEmpresa,
    timestamp: new Date().toISOString(),
    origem: 'site-nemo'
  };

  const isDevelopment = import.meta.env.DEV || window.location.hostname === 'localhost';
  const webhookUrl = getWebhookUrl(useProductionWebhook);
  
  console.log('Enviando dados para webhook:', webhookUrl);
  console.log('Dados enviados:', data);
  console.log('Ambiente:', isDevelopment ? 'desenvolvimento' : 'produção');
  console.log('Webhook:', useProductionWebhook ? 'PRODUÇÃO' : 'TESTE');

  try {
    // Em desenvolvimento, usa proxy (sem problemas de CORS)
    if (isDevelopment) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'cors',
      });

      return await handleResponse(response);
    }

    // Em produção, usa no-cors diretamente para evitar bloqueio de CORS
    // Isso envia os dados mesmo sem poder ler a resposta
    console.log('Usando no-cors em produção para evitar bloqueio de CORS');
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      mode: 'no-cors', // Não permite ler resposta, mas envia os dados
    });

    // Com no-cors, não podemos ler a resposta, então assumimos sucesso
    // após um pequeno delay para dar tempo do servidor processar
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Dados enviados com sucesso (modo no-cors)');
    return {
      success: true,
      message: 'Formulário enviado com sucesso! Entraremos em contato em breve.'
    };
  } catch (error) {
    console.error('Erro detalhado ao enviar para webhook:', error);
    
    // Mensagem mais específica baseada no tipo de erro
    let errorMessage = 'Erro ao enviar formulário. Por favor, tente novamente mais tarde.';
    
    if (error instanceof TypeError) {
      if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
        errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
        console.error('Possível problema de CORS ou rede:', error);
      } else {
        errorMessage = `Erro: ${error.message}`;
      }
    } else if (error instanceof Error) {
      // Se for um erro HTTP conhecido, mostra mais detalhes
      if (error.message.includes('HTTP')) {
        errorMessage = `Erro ao enviar: ${error.message}`;
      } else {
        errorMessage = `Erro: ${error.message}`;
      }
    }
    
    return {
      success: false,
      message: errorMessage
    };
  }
};
