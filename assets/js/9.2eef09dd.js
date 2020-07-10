(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{359:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bot-配置说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bot-配置说明"}},[t._v("#")]),t._v(" Bot 配置说明")]),t._v(" "),s("h2",{attrs:{id:"核心配置-bot-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心配置-bot-config-js"}},[t._v("#")]),t._v(" 核心配置 "),s("code",[t._v("bot.config.js")])]),t._v(" "),s("p",[t._v("本配置文件仅对 Bot 核心进程生效，运行时变更的数据不会保存到这里。")]),t._v(" "),s("p",[t._v("模板参照："),s("a",{attrs:{href:"https://github.com/danmaqua/danmaqua-telegrambot/blob/master/bot.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/danmaqua/danmaqua-telegrambot/blob/master/bot.config.js"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这一段仅用于说明，实际使用请基于上面的模板进行修改。")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dataDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataSaveInterval"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    logsDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./data/logs/bot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    botToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12345678:AAAAAAAAAAAAA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    botProxy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:10801'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    botAdmins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("107484754")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    danmakuSources"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("dataDir")]),t._v("：数据库位置")])]),t._v(" "),s("p",[t._v("运行时管理员设定的弹幕转发规则，会保存在这个目录的 "),s("code",[t._v("global.json")]),t._v(" 和 "),s("code",[t._v("chats")]),t._v(" 文件夹中。")]),t._v(" "),s("p",[t._v("同时 Bot 与用户交互的状态信息会保存在 "),s("code",[t._v("user_states.json")]),t._v("。")]),t._v(" "),s("p",[t._v("默认值："),s("code",[t._v("./data")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("dataSaveInterval")]),t._v("：数据库保存间隔")])]),t._v(" "),s("p",[t._v("数据库定期保存到文件中，单位为毫秒。")]),t._v(" "),s("p",[t._v("默认值："),s("code",[t._v("10000")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("botToken")]),t._v("：Bot Token 密钥")])]),t._v(" "),s("p",[t._v("Telegram Bot API 需要这个 Token 来进行认证登录，你可以在 "),s("code",[t._v("@BotFather")]),t._v(" 获取。")]),t._v(" "),s("p",[t._v("请不要留空，否则无法连接。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("botProxy")]),t._v("：Bot 代理服务器")])]),t._v(" "),s("p",[t._v("Telegram Bot API 连接时所使用的代理服务器，支持 HTTP 代理。")]),t._v(" "),s("p",[t._v("留空则代表直接连接，如 "),s("code",[t._v("http://127.0.0.1:8080")]),t._v(" 则代表通过 HTTP 代理 "),s("code",[t._v("127.0.0.1:8080")]),t._v(" 连接。")]),t._v(" "),s("p",[t._v("默认值："),s("code",[t._v("null")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("botAdmins")]),t._v("：Bot 管理员列表")])]),t._v(" "),s("p",[t._v("可以在 Telegram 中使用 Bot 命令管理弹幕转发等操作的管理员列表。")]),t._v(" "),s("p",[t._v("不支持 "),s("code",[t._v("@username")]),t._v(" 形式，请使用第三方客户端或 ID 查询机器人进行获取自己的 ID。")]),t._v(" "),s("p",[t._v("请不要留空，否则无法管理控制。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("danmakuSources")]),t._v("：弹幕源支持列表")])]),t._v(" "),s("p",[t._v("弹幕源服务端实现了直播平台弹幕协议的连接，向 Bot 核心部分提供标准化的弹幕数据。")]),t._v(" "),s("p",[t._v("你需要按照格式进行接入弹幕源，请参照"),s("a",{attrs:{href:"#%E5%BC%B9%E5%B9%95%E6%BA%90%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F"}},[t._v("弹幕源客户端配置格式")])]),t._v(" "),s("h3",{attrs:{id:"弹幕源客户端配置格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹幕源客户端配置格式"}},[t._v("#")]),t._v(" 弹幕源客户端配置格式")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bilibili'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'哔哩哔哩直播弹幕'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'common-danmaku-ws'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost:8001'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        basicAuth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testPassword'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("id")]),t._v("：唯一标识")])]),t._v(" "),s("p",[t._v("在 Bot 中设置弹幕转发规则时，选择弹幕源将通过 id 来辨别。")]),t._v(" "),s("p",[t._v("如默认实现中哔哩哔哩弹幕源 id 为 "),s("code",[t._v("bilibili")]),t._v("，注册转发时命令为 "),s("code",[t._v("/register_chat 123 123 bilibili")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("description")]),t._v("：描述")])]),t._v(" "),s("p",[t._v("描述这个弹幕源连接的是哪一个直播平台，用于用户在 Bot 查询弹幕源支持列表时显示，可留空。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("type")]),t._v("：弹幕源类型")])]),t._v(" "),s("p",[t._v("目前仅支持 "),s("code",[t._v("common-danmaku-ws")]),t._v(" 类型，即目前实现的 "),s("RouterLink",{attrs:{to:"/bot/dmsrc_api.html"}},[t._v("WebSocket 协议")]),t._v("。")],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("value")]),t._v("：弹幕源配置值")])]),t._v(" "),s("p",[t._v("配置值格式取决于你所使用的弹幕源。")]),t._v(" "),s("p",[t._v("如 "),s("code",[t._v("common-danmaku-ws")]),t._v("，支持两种格式：")]),t._v(" "),s("p",[t._v("如果 WebSocket 服务端允许直接连接，可以直接填入 WebSocket 服务端地址：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost:8001'")]),t._v("\n")])])]),s("p",[t._v("如果 WebSocket 服务端配置了 Basic Auth，则按以下格式填入：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost:8001'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    basicAuth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testPassword'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"自带弹幕源配置-dmsrc-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自带弹幕源配置-dmsrc-config-js"}},[t._v("#")]),t._v(" 自带弹幕源配置 "),s("code",[t._v("dmsrc.config.js")])]),t._v(" "),s("p",[t._v("本配置文件仅对项目附带的哔哩哔哩弹幕源和斗鱼弹幕源服务端生效，Bot 核心部分不会读取这个文件获取弹幕源列表。对于你自行创建的弹幕源服务端，读取本配置不是必须的。")]),t._v(" "),s("p",[t._v("模板参照："),s("a",{attrs:{href:"https://github.com/danmaqua/danmaqua-telegrambot/blob/master/dmsrc.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/danmaqua/danmaqua-telegrambot/blob/master/dmsrc.config.js"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);