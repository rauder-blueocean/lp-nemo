# Guia de Deploy para Produção

## Passos para fazer deploy no servidor de produção

### 1. Conectar ao servidor
Acesse seu servidor via SSH ou painel de controle.

### 2. Acessar o diretório do projeto
```bash
cd /caminho/para/seu/projeto
# Exemplo: cd /var/www/nemocrm.com
```

### 3. Atualizar o código do Git
```bash
git pull origin main
```

### 4. Instalar dependências (se necessário)
```bash
npm install
```

### 5. Fazer build do projeto
```bash
npm run build
```

Isso vai gerar os arquivos otimizados na pasta `dist/`.

### 6. Copiar arquivos para o servidor web

**Opção A - Se usar servidor web tradicional (Apache/Nginx):**
```bash
# Copiar conteúdo da pasta dist/ para o diretório público do servidor
cp -r dist/* /var/www/nemocrm.com/
# ou
rsync -av dist/ /var/www/nemocrm.com/
```

**Opção B - Se usar serviços de hospedagem (Vercel, Netlify, etc):**
- Esses serviços geralmente fazem o build automaticamente quando você faz push no Git
- Verifique se há integração automática configurada

### 7. Verificar se está funcionando
- Acesse https://nemocrm.com
- Teste o formulário
- Verifique no n8n se os dados estão chegando

## Nota Importante

O proxy do Vite (`vite.config.ts`) **só funciona em desenvolvimento**. 
Em produção, o código usa `no-cors` diretamente, então não precisa de configuração adicional no servidor.

## Troubleshooting

Se houver problemas:
1. Verifique os logs do navegador (F12 > Console)
2. Verifique se o build foi feito corretamente
3. Limpe o cache do navegador

