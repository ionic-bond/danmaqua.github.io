(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{205:function(e,t,_){"use strict";_.r(t);var v=_(0),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"弹幕过滤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弹幕过滤"}},[e._v("#")]),e._v(" 弹幕过滤")]),e._v(" "),_("p",[e._v("要过滤掉无关翻译的弹幕留下同传的弹幕，首先需要同传有较固定的弹幕格式（例如： "),_("code",[e._v("【你好】")]),e._v(" 这样的弹幕），其次就是由使用对应的过滤规则（正则表达式）进行选择，选择完毕后我们的主界面和悬浮窗则只会显示你所关注的同传翻译弹幕。")]),e._v(" "),_("h2",{attrs:{id:"使用方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),_("p",[e._v("点击主界面底栏的 “过滤” 按钮，可以展开一个简化版的过滤设置面板，你能够在这控制过滤的开关和过滤规则的选择。当过滤打开时，只有符合过滤规则的正则表达式的弹幕文本才会被显示。")]),e._v(" "),_("p",[e._v("应用已经内置了一套过滤规则，通常你可以直接使用，或者在管理界面寻找其它在线更新的规则。如果在线规则仍不能满足你，你可以新建自定义规则，关于规则的编写下面会提到。")]),e._v(" "),_("p",[e._v("如果你还想屏蔽特定的文本、用户，还可以在完整的过滤设置界面中进行添加管理，你也可以在主界面的弹幕列表，长按想要屏蔽的弹幕，在弹出的菜单中选择是屏蔽文本还是弹幕发出的用户。")]),e._v(" "),_("h2",{attrs:{id:"编写规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编写规则"}},[e._v("#")]),e._v(" 编写规则")]),e._v(" "),_("blockquote",[_("p",[e._v("编写规则需要了解如何编写正则表达式，如果你不了解正则表达式，这里有一篇入门教程可供参考： "),_("a",{attrs:{href:"https://deerchao.net/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://deerchao.net/tutorials/regex/regex.htm"),_("OutboundLink")],1)])]),e._v(" "),_("p",[e._v("在过滤规则的管理界面，你可以手动添加规则，为它加上标题和正则表达式则可以保存然后选用了。")]),e._v(" "),_("p",[e._v("一般悬浮字幕会以第一个分组作为翻译正文，例如 "),_("code",[e._v("【你好】")]),e._v("，当规则为 "),_("code",[e._v("【(.*)】")]),e._v(" 时，第一个分组对应是两个中括号内的 "),_("code",[e._v("你好")]),e._v(" 二字，将会被提取出来。")]),e._v(" "),_("p",[e._v("在主播进行多人联动时，可能会出现类似 "),_("code",[e._v("阿夸【neee】")]),e._v(" 这样的格式，如果按照前面的规则，我们将会丢失发言人的名字信息，因此我们支持正则表达式中的命名组特性， "),_("code",[e._v("who")]),e._v(" 组代表人名， "),_("code",[e._v("text")]),e._v(" 组代表发言内容，我们可以编写一条规则为 "),_("code",[e._v("(?<who>[^【]*)【(?<text>[^】]*)】")]),e._v(" ，这样 "),_("code",[e._v("阿夸")]),e._v(" 和 "),_("code",[e._v("neee")]),e._v(" 就会被同时提取并识别为人名与内容。")]),e._v(" "),_("p",[e._v("通常预置规则会能够满足大多需求，你有更好的规则时，欢迎向我们提交贡献，分享给各位用户使用。")])])}),[],!1,null,null,null);t.default=r.exports}}]);