var async = require('async');
var adalNode = require('adal-node'); // Used for authentication 
var azureKeyVault = require('azure-keyvault');

var env = require('./env');
var clientId = env.clientId;
var clientSecret = env.clientSecret;

var credentials = new azureKeyVault.KeyVaultCredentials(authenticator);
var client = new azureKeyVault.KeyVaultClient(credentials);

var vaultUri = env.vaultUri;

function getSecret(secretId) {
	return new Promise(function (resolve, reject) {
		client.getSecret(env.vaultUri + '/secrets/' + secretId, function (err, result) {
			if (err) reject(err);
			resolve(result);
		});
	});
}

function authenticator(challenge, callback) {
	// Create a new authentication context. 
	var context = new adalNode.AuthenticationContext(challenge.authorization);
	// Use the context to acquire an authentication token.
	return context.acquireTokenWithClientCredentials(challenge.resource, clientId, clientSecret, function (err, tokenResponse) {
		if (err) throw err;
		// Calculate the value to be set in the request's Authorization header and resume the call. 
		var authorizationValue = tokenResponse.tokenType + ' ' + tokenResponse.accessToken;
		return callback(null, authorizationValue);
	});
}

module.exports = {
    getSecret: getSecret
}