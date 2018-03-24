module.exports = {
  "index": "reuters",
  "type": "article",
  "body": {
    "properties": {
      "fields.text.title": {
        "type": "text",
        "fielddata": true
      },
      "fields.text.body": {
        "type": "text",
        "fielddata": true
      },
      "fields.places": {
        "type": "text",
        "fielddata": true
      },
      "fields.people": {
        "type": "text",
        "fielddata": true
      },
      "fields.topics": {
        "type": "text",
        "fielddata": true
      }
    }
  }
}