module.exports = {
    env: process.env.NODE_ENV || 'development',
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || '',
    vaultUri: process.env.VAULT_URI || '',
    sqlSecretName: process.env.SQL_SECRET_NAME || '',
    tenantId: process.env.TENANT_ID || '',
    authorizationUrl: process.env.AUTHORIZATION_URL || '',
    tokenUrl: process.env.TOKEN_URL || '',
    callbackUrl: process.env.CALLBACK_URL || ''
}