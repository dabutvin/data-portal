var express = require('express');
var router = express.Router();
var db = require('../shared/db');
var sql = require('mssql');

var mssql;

router.get('/', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .execute('GetHome')
            .then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.put('/', function (req, res) {
    db.sendRequest(function (cp) {
        var data = req.body;
        new sql.Request(cp)
            .input('HomeName', data.homeName)
            .input('FirstName', data.firstName)
            .input('LastName', data.lastName)
            .input('NumberofNonDependentYouth', data.numberOfNonDependentYouth)
            .input('PhoneNumber', data.phoneNumber)
            .input('EmailAddress', data.emailAddress)
            .input('Address1', data.address1)
            .input('Address2', data.address2)
            .input('City', data.city)
            .input('StateProvinceId', data.stateProvinceId)
            .input('PostalCode', data.postalCode)
            .input('StartDate', data.startDate)
            .input('ConstellationId', data.constellationId)
            .input('HostAgencyId', data.hostAgencyId)
            .input('isHub', data.isHub)
            .input('Notes', data.notes)
            .input('CreatedBy', data.createdBy)
            .execute('PutHome')
            .then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

module.exports = router;