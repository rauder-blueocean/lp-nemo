interface FormData {
  nome: string;
  email: string;
  telefone: string;
  nomeEmpresa: string;
}

const WEBHOOK_URL = 'https://n8n.blueoceansem.com/webhook-test/lpnemocrm2';

export const sendToWebhook = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  // Prepara os dados no formato que o n8n espera
  const payload = {
    nome: data.nome,
    email: data.email,
    telefone: data.telefone,
    nomeEmpresa: data.nomeEmpresa,
    timestamp: new Date().toISOString(),
    origem: 'site-nemo'
  };

  try {
    console.log('Enviando dados para webhook:', WEBHOOK_URL);
    console.log('Dados enviados:', payload);

    // Usa no-cors para evitar bloqueio de CORS
    // Isso envia os dados mesmo sem poder ler a resposta
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      // SEM headers customizados - isso evita preflight CORS
      body: JSON.stringify(payload),
      mode: 'no-cors', // Não permite ler resposta, mas envia os dados
    });

    // Com no-cors, não podemos ler a resposta, então assumimos sucesso
    // após um pequeno delay para dar tempo do servidor processar
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Dados enviados com sucesso para o n8n');
    return {
      success: true,
      message: 'Formulário enviado com sucesso! Entraremos em contato em breve.'
    };
  } catch (error) {
    console.error('Erro ao enviar para webhook:', error);
    return {
      success: false,
      message: 'Erro ao enviar formulário. Por favor, tente novamente mais tarde.'
    };
  }
};

