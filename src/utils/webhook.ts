interface FormData {
  nome: string;
  email: string;
  telefone: string;
  nomeEmpresa: string;
}

// URLs dos webhooks
const WEBHOOK_TEST = 'https://n8n.blueoceansem.com/webhook-test/lpnemocrm2';
const WEBHOOK_PRODUCTION = 'https://webhook.blueoceansem.com/webhook/lpnemocrm2';

// Determina qual webhook usar baseado no ambiente
// Em desenvolvimento, usa test. Em produção, usa production
const getWebhookUrl = (): string => {
  // Se estiver em localhost ou desenvolvimento, usa test
  if (import.meta.env.DEV || window.location.hostname === 'localhost') {
    return WEBHOOK_TEST;
  }
  // Em produção, usa o webhook de produção
  return WEBHOOK_PRODUCTION;
};

export const sendToWebhook = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    const webhookUrl = getWebhookUrl();
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar: ${response.status} ${response.statusText}`);
    }

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

