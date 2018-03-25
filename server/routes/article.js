const express = require('express');
const queryJson = require('../queries/searchQuery');
const mappingJson = require('../queries/mappingQuery');
const client = require('../connection')
const fs = require('fs');

const router = express.Router();

const reuters = JSON.parse(fs.readFileSync('reuters_elastic.json', 'utf8'));


// Route: BASE_URL/article

router.get('/populate', (req, res) => {
    client.indices.exists({ index: 'reuters' })
        .then((resp) => {
            if (!resp) {
                client.bulk({ body: reuters })
                    .then(() => client.indices.putMapping(mappingJson))
                    .then((resp) => res.send({
                        'message': 'Data has been populated!',
                        'status': 'exists'
                    }))
                    .catch((err) => res.send(err))
            }
            res.send({
                'message': 'Data exists',
                'status': 'exists'
            })
        })
        .catch((err) => res.send(err));

});

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
    } else if (limit > 21495) {
        limit = 21495;
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
            res.status(500).send(err)
        });
});

module.exports = router;