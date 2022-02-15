const fs = require("fs")
const dbfile = "./db.json"

{
  "usage": {
    "ok": true,
    "url": "https://my-json-server.typicode.com/topkecleon/telegram-bot-bash/usage?",
    "description": "Testing of JSON responses for github.com/topkecleon/telegram-bot-bash, replace usage with the dataset you want to query"
  },
  "false": {
    "ok": false,
    "error_code": 404,
    "description": "Not Found"
  },
  "true": {
    "ok": true,
    "description": "Test for ok"
  },
  "getMe": {
    "ok": true,
    "result": {
      "id": 123456789,
      "is_bot": true,
      "first_name": "bashbot",
      "username": "TestBotBash"
    }
  }
}
