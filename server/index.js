const elasticsearch = require('elasticsearch');
const express = require('express');
const app = express();

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
})



// let match = {
//     "fields.text.title": "RED LION 2"
// };

// // let match = {
// //     'match_all': {}
// // }

// client.search({
//     'index': 'reuters',
//     'type': 'article',
//     'body': {
//         'query': {
//             match
//         },
//         'size': 5,
//         'aggs': {
//             "nb_distinct": {
//                 "cardinality": {
//                     "field": "fields.places.keyword"
//                 }
//             }
//         }
//     }
// }).then((resp) => {
//     var hits = resp.hits.hits.forEach((hit) => {
//         console.log(hit._source.fields.text.title);
//     });
//     console.log(resp.aggregations.nb_distinct.value);
// }, (err) => {
//     console.trace(err.message);
// });