const {Telegraf, Telegram} = require("telegraf")
const config = require("./config")
const db = require("./db")
const fs = require("fs")
const bot = new Telegram(config.token, {polling: true})
const sekil = './pluginler/sekil'

sekil(bot)
