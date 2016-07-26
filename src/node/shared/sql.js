var sql = require('mssql');
var env = require('./env');
var keyVault = require('./keyvault');

keyVault.getSecret(env.sqlSecretName).then(function (result) {
    var config = result.value;

    sql.connect(config).then(function () {
        new sql.Request().query("SELECT * FROM SOME_TABLE'").then(function (recordSet) {
            console.log(recordSet);
        }).catch(function (err) {
            console.error(err);
        });
    }).catch(function (err) {
        console.error(err);
    });
});

module.exports = {

}