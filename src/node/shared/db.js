var sql = require('mssql');
var env = require('./env');
var keyVault = require('./keyvault');

var sqlConnection;

function sqlConnect() {
    
    return new Promise(function(resolve) {
        keyVault.getSecret(env.sqlSecretName).then(function (result) {
            var config = result.value;
            sqlConnection = new sql.Connection(config);

            sqlConnection.connect().then(function () {
                console.log('SQL Connected');
                resolve(null);
            }).catch(function (err) {
                console.error(err);
            });
        });
    });
}

function sendRequest(request) {
    request(sqlConnection);
}

module.exports = {
    sqlConnect: sqlConnect,
    sendRequest: sendRequest
}