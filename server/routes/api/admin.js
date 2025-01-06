const express = require('express');
const router = express.Router();
const data = {};
data.admin = require('../../../data/admin.json')

router.route('/')
    .get((req, res) => {
        res.json(data.admin);
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.prams.id });
    });

module.exports = router;