var express = require('express');
var router = express.Router();
var db = require('../shared/db');

var mssql;

// define the home page route
router.get('/:constellationId/overview/:reportDate', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDate', req.params.reportDate)
            .execute('GetConstellationOverview').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/activities/:reportDate', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDate', req.params.reportDate)
            .execute('GetConstellationActivities').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/home-support/:reportDate', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDate', req.params.reportDate)
            .execute('GetConstellationHomeSupport').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/homes/:reportDate', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDate', req.params.reportDate)
            .execute('GetHomesInConstellation').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

router.get('/:constellationId/youth/:reportDate', function (req, res) {
    db.sendRequest(function (cp) {
        new sql.Request(cp)
            .input('Email', req.params.constellationId)
            .input('ReportDate', req.params.reportDate)
            .execute('GetYouthInConstellation').then(function (recordSet) {
                res.send(recordSet);
            }).catch(function (err) {
                console.error(err);
            });
    });
});

module.exports = router;