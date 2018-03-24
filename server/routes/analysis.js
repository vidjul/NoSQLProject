const express = require('express');
const queryJson = require('../queries/analysisQuery');
const client = require('../connection')

const router = express.Router();

// Route: BASE_URL/analysis

router.post('/', (req, res) => {

    let country;
    let data;
    
    if (req.body.country) {
        country = req.body.country
    }
    if (req.body.data) {
        data = `fields.${req.body.data}`
    }
    queryJson.body.query.bool.must[0].match_phrase["fields.places"] = country;
    queryJson.body.aggs.grouppedBy.terms.field = data;
    client.search(queryJson)
        .then((resp) => {
            res.send(resp.aggregations.grouppedBy.buckets)
        })
        .catch((err) => {
            res.send(err)
        });
});

module.exports = router;