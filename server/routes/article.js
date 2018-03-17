const express = require('express');
const queryJson = require('../queries/searchQuery');
const client = require('../connection')

const router = express.Router();

// Route: BASE_URL/article

router.post('/', (req, res) => {

    let shouldFields = [];
    let mustFields = [];

    let page = parseInt(req.query.page, 10);
    if (isNaN(page) || page < 1) {
        page = 1;
    }
    let limit = parseInt(req.query.limit, 10);
    if (isNaN(limit)) {
        limit = 10;
    } else if (limit > 50) {
        limit = 50;
    } else if (limit < 1) {
        limit = 1;
    }

    let offset = (page - 1) * limit;

    if (req.body.should) {
        req.body.should.forEach((elem) => {
            const field = `fields.${elem[0]}`;
            let res = {};
            if (elem[2]) {
                res.match_phrase = {}
                res.match_phrase[field] = elem[1];
            } else {
                res.match = {}
                res.match[field] = elem[1];
            }
            shouldFields.push(res);
        });
    }
    if (req.body.must) {
        req.body.must.forEach((elem) => {
            const field = `fields.${elem[0]}`;
            let res = {};
            if (elem[2]) {
                res.match_phrase = {}
                res.match_phrase[field] = elem[1];
            } else {
                res.match = {}
                res.match[field] = elem[1];
            }
            shouldFields.push(res);
        });
    }
    queryJson.body.query.bool.should = shouldFields;
    queryJson.body.query.bool.must = mustFields;
    queryJson.from = offset;
    queryJson.size = limit;
    client.search(queryJson)
        .then((resp) => {
            res.send(resp.hits.hits)
        })
        .catch((err) => {
            res.send(err)
        });
});

module.exports = router;