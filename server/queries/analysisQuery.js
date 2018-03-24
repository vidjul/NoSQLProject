module.exports = {
    "from": 0, "size": 1000,
    "index": "reuters",
    "type": "article",
    "body": {
        "query": {
            "bool": {
                "must": [
                    {
                        "match_phrase": {
                            "fields.places": ""
                        }
                    }
                ]
            }
        },
        "size": 0,
        "aggs": {
            "grouppedBy": {
                "terms": {
                    "field": "",
                    "size": 22000
                }
            }
        }
    }
};
