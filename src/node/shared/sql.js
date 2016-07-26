var sql = require('mssql');
var env = require('./env');
var keyVault = require('./keyvault');

keyVault.getSecret(env.sqlSecretName).then(function (result) {
    console.log(result);
    var config = result;
});

module.exports = {

}