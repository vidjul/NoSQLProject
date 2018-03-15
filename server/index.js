const elasticsearch = require('elasticsearch');

// Initialize client connection instance

const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

client.search({
    index: 'reuters',
    type: 'article',
    body: {
        query: {
            match: {
                "fields.text.title": "RED LION"
            }
        }
    }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});