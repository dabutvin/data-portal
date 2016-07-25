var env = process.env.NODE_ENV || 'development';
var clientId = process.env.CLIENT_ID || '';
var clientSecret = process.env.CLIENT_SECRET || '';
var vaultUri = process.env.VAULT_URI || '';

module.exports = {
    env: env,
    clientId: clientId,
    clientSecret: clientSecret,
    vaultUri: vaultUri
}