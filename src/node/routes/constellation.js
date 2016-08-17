var express = require('express');
var router = express.Router();
var db = require('../shared/db');
var sql = require('mssql');

var mssql;

// define the home page route
router.get('/:constellationId/overview/:reportDateId', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDateId', req.params.reportDateId)
            .execute('GetConstellationOverview').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/activities/:reportDateId', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDateId', req.params.reportDateId)
            .execute('GetConstellationActivities').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/home-support/:reportDateId', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDateId', req.params.reportDateId)
            .execute('GetConstellationHomeSupport').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/homes/:reportDateId', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDateId', req.params.reportDateId)
            .execute('GetHomesInConstellation').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/youth/:reportDateId', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDateId', req.params.reportDateId)
            .execute('GetYouthInConstellation').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

module.exports = router;