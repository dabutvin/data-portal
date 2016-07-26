var sql = require('mssql');
var env = require('./env');
var keyVault = require('./keyvault');

function sendRequest(request) {
    keyVault.getSecret(env.sqlSecretName).then(function (result) {
        var config = result.value;
        sql.connect(config).then(function () {
            request();
        }).catch(function (err) {
            console.error(err);
        });
    });
}

module.exports = {
    sendRequest: sendRequest
}