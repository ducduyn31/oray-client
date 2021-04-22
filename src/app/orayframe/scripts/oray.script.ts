export const theScript = `
"use strict";
Function.prototype.bind || (Function.prototype.bind = function(e) {
    if ("function" != typeof this)
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var a = Array.prototype.slice.call(arguments, 1)
      , t = this
      , i = function() {}
      , n = function() {
        return t.apply(this instanceof i && e ? this : e, a.concat(Array.prototype.slice.call(arguments)))
    };
    return i.prototype = this.prototype,
    n.prototype = new i,
    n
}
),
function(f) {
    f.ajaxSetup({
        cache: !1
    }),
    f.cookie = function(e, a, t) {
        if (void 0 === a) {
            var i = null;
            if (document.cookie && "" != document.cookie)
                for (var n = document.cookie.split(";"), s = 0; s < n.length; s++) {
                    var o = f.trim(n[s]);
                    if (o.substring(0, e.length + 1) == e + "=") {
                        i = decodeURIComponent(o.substring(e.length + 1));
                        break
                    }
                }
            return i
        }
        t = t || {},
        null === a && (a = "",
        t.expires = -1);
        var r, c = "";
        t.expires && ("number" == typeof t.expires || t.expires.toUTCString) && ("number" == typeof t.expires ? (r = new Date).setTime(r.getTime() + 24 * t.expires * 60 * 60 * 1e3) : r = t.expires,
        c = "; expires=" + r.toUTCString());
        var d = t.path ? "; path=" + t.path : ""
          , p = t.domain ? "; domain=" + t.domain : ""
          , l = t.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(a), c, d, p, l].join("")
    }
    ,
    f.func = {
        isInt: function(e) {
            return /^\\d+$/.test(e)
        },
        isEmail: function(e) {
            return /^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_\`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_\`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?$/i.test(e)
        },
        isIp: function(e) {
            return /^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])(\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])){3}$/.test(e)
        },
        isMac: function(e) {
            return /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/.test(e)
        },
        isCloneMac: function(e) {
            var a = e.substr(1, 1);
            return 0 == (1 & parseInt(a, 16))
        },
        isValidDeviceName: function(e) {
            return new RegExp("^[-_0-9a-zA-Z.][-_0-9a-zA-Z.]*$").test(e)
        },
        hasCnChar: function(e) {
            return /[\\u3220-\\uFA29]/.test(e)
        },
        getQueryString: function(e) {
            var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
              , t = window.location.search.substr(1).match(a);
            return null != t ? this.html2Escape(unescape(t[2])) : null
        },
        html2Escape: function(e) {
            return e.replace(/[<>&"]/g, function(e) {
                return {
                    "<": "&lt;",
                    ">": "&gt;",
                    "&": "&amp;",
                    '"': "&quot;"
                }[e]
            })
        },
        stringify: function(e) {
            var a = typeof e;
            if ("object" != a || null === e)
                return "string" == a && (e = '"' + e + '"'),
                String(e);
            var t, i, n = [], s = e && e.constructor == Array;
            for (t in e)
                a = typeof (i = e[t]),
                e.hasOwnProperty(t) && ("string" == a ? i = '"' + i + '"' : "object" == a && null !== i && (i = f.func.stringify(i)),
                n.push((s ? "" : '"' + t + '":') + String(i)));
            return (s ? "[" : "{") + String(n) + (s ? "]" : "}")
        }
    }
}(jQuery),
function(e) {
    var t;
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.notifyWin = null,
    e.OrayBox.statusTimeout = null,
    e.OrayBox.intervalTmeout = null,
    e.OrayBox.sn = "",
    e.OrayBox.model = null,
    e.OrayBox.name = null,
    e.OrayBox.type = null,
    e.OrayBox.user = null,
    e.OrayBox.isMultiUser = !1,
    e.OrayBox.isRemindPwd = !1,
    e.OrayBox.remindTime = 0,
    e.OrayBox.isStopPending = !1,
    e.OrayBox.limitPrivilegeList = [],
    e.OrayBox.X6CallTab = {
        WAN1: "",
        WAN2: "",
        has_success: !1
    },
    e.OrayBox.failCode = {
        OK: "正常",
        FATAL_ERROR: "系统错误",
        USER_REQUEST: "停止拨号",
        INVALID_NETMASK: "掩码地址错误",
        INVALID_ADDRESS: "ip地址错误",
        INVALID_GATEWAY: "网关地址错误",
        LOCK_FAILED: "串口被锁住",
        OPEN_FAILED: "串口打开失败",
        NEGOTIATION_FAILED: "PPP协商失败",
        PEER_AUTH_FAILED: "用户名或密码错误",
        IDLE_TIMEOUT: "连接断开",
        CONNECT_TIME: "连接超时",
        PEER_DEAD: "连接失败",
        AUTH_TOPEER_FAILED: "宽带帐号或密码错误",
        TRAFFIC_LIMIT: "流量已用完",
        CNID_AUTH_FAILED: "用户名或密码错误",
        UNKNOWN_ERROR: "未知错误"
    },
    e.OrayBox.request = function(a, t, i, n, s, o, r, c, d) {
        n = "string" == typeof n ? n : "GET",
        s = "boolean" != typeof s || s,
        o = "boolean" == typeof o && o,
        c = "number" == typeof c ? c : 2,
        d = "number" == typeof d ? d : 3e3,
        $.ajax({
            url: "/cgi-bin/oraybox?_api=" + a,
            type: n,
            dataType: "json",
            data: t,
            cache: o,
            success: function(e) {
                return null == e ? 0 < c ? setTimeout(function() {
                    OrayBox.request(a, t, i, n, s, o, r, c, d)
                }, 1e3) : "function" == typeof i && i({
                    code: -1
                }) : s && 4 == e.code ? -1 !== $.inArray(OrayBox.model, ["P1-2111", "P5-1210", "P5-2210", "ORG-900"]) ? location.assign("http://pgybox.oray.com/passport/login?sn=" + OrayBox.sn) : location.assign("/oraybox/login.html?err=sesstimeout&redirect=" + location.pathname) : void ("function" == typeof i && i(e))
            },
            error: function() {
                if (0 === c)
                    return "function" == typeof r ? r() : "function" == typeof i && i({
                        code: -1
                    });
                0 < c && c--,
                setTimeout(function() {
                    OrayBox.request(a, t, i, n, s, o, r, c, d)
                }, d)
            }
        })
    }
    ,
    e.OrayBox.getSn = function(e) {
        OrayBox.request("sn_get", null, e)
    }
    ,
    e.OrayBox.getSession = function(e) {
        OrayBox.request("session_get", null, e)
    }
    ,
    e.OrayBox.init = function(t) {
        OrayBox.getSn(function(e) {
            var a;
            0 === e.code && ($.cookie("_sn_", e.sn),
            void 0 !== e.machine_name && (a = e.machine_name.split(" "),
            OrayBox.model = a[1]),
            void 0 !== e.machine_name && (OrayBox.type = e.machine_type),
            null != e.machine_display && (OrayBox.name = e.machine_display),
            ~~e.sn && (OrayBox.sn = e.sn),
            OrayBox.isMultiUser = !!e.multi_user),
            OrayBox.getSession(function(e) {
                0 === e.code && (OrayBox.user = e.user,
                OrayBox.isRemindPwd = e.need_remind_change_pwd,
                OrayBox.remindTime = e.remind_change_pwd_time,
                "admin" !== e.user && e.privilege_props && (OrayBox.limitPrivilegeList = e.privilege_props.privilege_list)),
                "function" == typeof t && t()
            })
        })
    }
    ,
    e.OrayBox.updateFooterTime = function() {
        0 < $("#footer span[data-time]").size() && $("#footer span[data-time]").text((new Date).getFullYear())
    }
    ,
    e.OrayBox.encodeSn = function(e) {
        return e.substr(0, 4) + "****" + e.substr(8, 11)
    }
    ,
    e.OrayBox.checkStatus = function(a) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/cgi-bin/oraybox?_api=sys_base_info",
            success: function(e) {
                0 == e.code && "function" == typeof a && a(e)
            }
        })
    }
    ,
    e.OrayBox.checkStatusV2 = function(e, a, t, i, n, s) {
        var o;
        n = "number" == typeof n ? n : -1,
        s = "number" == typeof s ? s : 15e3,
        (a = "boolean" != typeof a || a) && (o = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'].join(""),
        "string" == typeof t && (o = t),
        OrayBox.showNotify(o, !0, function() {
            0 < $('#notify-win span[data-name="timebox"]').size() && OrayBox.setCountDown($('#notify-win span[data-name="timebox"]'), $('#notify-win span[data-name="timebox"]').text(), function() {
                location.assign("/oraybox/login.html")
            })
        })),
        setTimeout(function() {
            OrayBox.request("sys_base_info", [], e, "GET", !1, !1, i, n, 5e3)
        }, s)
    }
    ,
    e.OrayBox.timeoutWork = function(a, e) {
        var t = !1
          , i = setTimeout(function() {
            return !t && void a(!(t = !0))
        }, e);
        return function(e) {
            return "run" === e ? (clearTimeout(i),
            !t && (a(t = !0),
            !0)) : "stop" === e ? (clearTimeout(i),
            !0) : void 0
        }
    }
    ,
    e.OrayBox.sortTask = function() {
        var e = Array.prototype.slice.apply(arguments)
          , p = !1
          , l = function(e, a, t, i) {
            var n = e[a]
              , s = a + 1
              , o = 0
              , r = function() {
                o--,
                !p && o <= 0 && l(e, s, t, !0)
            };
            if ("function" == typeof n)
                return t && !i || !e[s] ? n.call(this, t) : e[s] ? n.call(this, r) : n.call(this);
            if ("[object Array]" === Object.prototype.toString.call(n))
                for (var c = 0, d = n.length; c < d && (o++,
                l(n, c, r),
                "[object Array]" !== Object.prototype.toString.call(n[c])); c++)
                    ;
        };
        return {
            run: function() {
                l(e, 0)
            },
            stop: function() {
                p = !0
            },
            push: function() {
                return e = e.concat(Array.prototype.slice.apply(arguments)),
                this
            },
            reset: function() {
                return p = !(e = []),
                this
            }
        }
    }
    ,
    e.OrayBox.checkLimitPrivilege = (t = null,
    function(e) {
        var a = -1 !== $.inArray(e, OrayBox.limitPrivilegeList);
        return a && (null === t && ($(document.body).append(['<div id="limit-privilege-win" class="window-wrapper"><div class="window">', '<div class="window-opt"><a href="javascript:void(0)" class="iconfont close">&#xe61f;</a></div>', '<div class="window-header">提示</div>', '<div class="window-body" style="text-align:center;">', '<div class="fm-item"><p style="padding: 30px 0;">您暂无该功能设置权限！</p></div>', '<div class="fm-item"><button class="btn btn-primary btn-small close" type="submit">确定</button></div>', "</div></div></div>"].join("")),
        t = $("#limit-privilege-win").window({
            closeCls: "close",
            center: !0
        })),
        t.show()),
        !a
    }
    ),
    e.OrayBox.setCountDown = function(e, a, t) {
        e.html(a),
        a--;
        var i = setInterval(function() {
            !function() {
                0 == a && (clearInterval(i),
                "function" == typeof t && t.call());
                e.html(a),
                a--
            }()
        }, 1e3)
    }
    ,
    e.OrayBox.showNotify = function(e, a, t) {
        $("#notify-win").size() || $(document.body).append(['<div id="notify-win" class="window-wrapper">', '<div class="window"><div class="window-body" style="text-align:center;"></div></div>', "</div>"].join("")),
        this.notifyWin || (this.notifyWin = $("#notify-win").window({
            width: 650,
            closeCls: "close",
            draggable: !1,
            center: !0,
            esc: !1
        })),
        e && $("#notify-win .window-body").html(e),
        undefined === a || a ? this.notifyWin.show() : this.notifyWin.close(),
        undefined !== t && "function" == typeof t && t.call()
    }
    ,
    e.OrayBox.showMessage = function(e, a, t, i) {
        var n = $("#msg-info");
        if (n.size() || (n = $('<div id="msg-info" class="msg"><span></span></div>')).prependTo(document.body),
        n[0].timer && clearTimeout(n[0].timer),
        !e)
            return n.fadeOut();
        "number" != typeof t && (t = 6e3),
        n.toggleClass("error", !(a == undefined || a)),
        n.find("span:eq(0)").html(e),
        n.is(":hidden") && n.fadeIn(),
        0 < t && a && (n[0].timer = setTimeout(function() {
            n.fadeOut("normal", i)
        }, t))
    }
    ,
    e.OrayBox.checkArray = function(e, a) {
        for (var t = !1, i = 0, n = a.length; i < n; i++)
            if (a[i] == e) {
                t = !0;
                break
            }
        return t
    }
    ,
    e.OrayBox.checkOnline = function(a, t, i, n, s) {
        var e = {
            hostname: "oray.com"
        };
        if (i && (e["interface"] = i),
        s = "number" == typeof s ? s : 5e3,
        0 == (n = "number" == typeof n ? n : 3))
            return "function" == typeof t && t(i);
        0 < n && n--,
        OrayBox.request("ping", e, function(e) {
            return 0 != e.code ? setTimeout(function() {
                OrayBox.checkOnline(a, t, i, n)
            }, s) : "function" == typeof a && a(i)
        }, "GET", !1, !1, t, -1)
    }
    ,
    e.OrayBox.getInterfaces = function(a, t) {
        var i = {
            1: "wan"
        };
        $.getJSON("/cgi-bin/oraybox?_api=sys_base_info", function(e) {
            return null == e ? (OrayBox.getInterfaces(a, t),
            !1) : (4 == e.code && location.assign("/oraybox/login.html?err=sesstimeout"),
            0 == e.code && ("undefined" != typeof e.wan_if && (i[1] = e.wan_if),
            "X6" == OrayBox.type && "undefined" != typeof e.wan2_if && (i[2] = e.wan2_if),
            1 == t && "undefined" != typeof e.wan2_if && (i[2] = e.wan2_if)),
            void 0 === i[2] && "X6" == OrayBox.type && (i[2] = "wan2"),
            void a(i))
        })
    }
    ,
    e.OrayBox.getBaseInfo = function(e) {
        OrayBox.request("sys_base_info", {}, e)
    }
    ,
    e.OrayBox.getWan2lan = function(e) {
        OrayBox.request("get_wtl_status", {}, e)
    }
    ,
    e.OrayBox.getX86Wan2 = function(e) {
        OrayBox.request("x86_wan2_get", {}, e)
    }
    ,
    e.OrayBox.getDns = function(e, a) {
        OrayBox.request("dns_get", {
            "interface": a
        }, e)
    }
    ,
    e.OrayBox.getWifi = function(e, a) {
        a = "string" == typeof a ? a : "2.4G",
        OrayBox.request("wifi_get", {
            dev: a
        }, e)
    }
    ,
    e.OrayBox.getGuestWifi = function(e) {
        OrayBox.request("guest_wifi_get", {}, e)
    }
    ,
    e.OrayBox.restartService = function(e, a) {
        OrayBox.request("restart_service", {
            name: a
        }, e)
    }
    ,
    e.OrayBox.getWifiRepeater = function(a, t) {
        t = t || [],
        OrayBox.request("wifi_sta_get", {}, function(e) {
            "function" == typeof a && a.call(null, e, t[0], t[1])
        })
    }
    ,
    e.OrayBox.setWifiRepeater = function(e, a) {
        OrayBox.request("wifi_sta_set", a, e)
    }
    ,
    e.OrayBox.setNetworkSuccessCall = function(e) {
        var a = function() {
            OrayBox.setCountDown($("#time-sec"), 3, function() {
                location.assign("https://pgybox.oray.com/passport/login?sn=" + OrayBox.sn)
            })
        }
          , t = ['<p style="padding-top: 25px;font-size:18px;">已检测可以上网，即将跳转到蒲公英云管理</p>', '<p><span id="time-sec">3</span>秒</p>', '<p><a class="link" href="http://pgybox.oray.com/passport/login?sn=' + OrayBox.sn + '">立即跳转</a></p>'];
        if ("X6" == OrayBox.type) {
            if ("wan" == e ? OrayBox.X6CallTab.WAN1 = "已检测可以上网，可跳转到蒲公英云管理" : OrayBox.X6CallTab.WAN2 = "已检测可以上网，可跳转到蒲公英云管理",
            OrayBox.X6CallTab.has_success = !0,
            "" === OrayBox.X6CallTab.WAN1 || "" === OrayBox.X6CallTab.WAN2)
                return !1;
            t = ['<p style="padding-top: 25px;font-size:18px;text-align: left;padding-left: 115px;">WAN1：' + OrayBox.X6CallTab.WAN1 + "</p>", '<p style="padding-top: 5px;font-size:18px;text-align: left;padding-left: 115px;">WAN2：' + OrayBox.X6CallTab.WAN2 + "</p>"],
            OrayBox.X6CallTab.has_success && t.push('<a class="btn btn-small" href="http://pgybox.oray.com/passport/login?sn=' + OrayBox.sn + '" style="margin-right: 30px;margin-top: 30px;">云管理</a>'),
            t.push('<a class="btn btn-small ' + (OrayBox.X6CallTab.has_success ? "btn-cancel " : "") + 'close" href="javascript:void(0);" style="margin-top: 30px;">重新设置</a>'),
            a = null
        }
        OrayBox.showNotify(t.join(""), !0, a)
    }
    ,
    e.OrayBox.setNetworkFailCall = function(o) {
        OrayBox.diagnose(o, function(e) {
            var a = "当前无法连接网络，请检查设置是否正确";
            if (0 == e.code) {
                var t, i = [];
                for (t in e.result.errors) {
                    var n = OrayBox.failCode[e.result.errors[t].code];
                    void 0 !== n && i.push(n)
                }
                0 < i.length && (a = i.join())
            }
            var s = ['<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p>', '<p style="font-size:18px;">' + a + "</p>", '<a class="btn btn-small close" href="javascript:void(0);" style="margin-top: 40px;">返回重新设置</a>'];
            if ("X6" == OrayBox.type) {
                if ("wan" == o ? OrayBox.X6CallTab.WAN1 = a : OrayBox.X6CallTab.WAN2 = a,
                "" === OrayBox.X6CallTab.WAN1 || "" === OrayBox.X6CallTab.WAN2)
                    return !1;
                s = ['<p style="padding-top: 25px;font-size:18px;text-align: left;padding-left: 115px;">WAN1：' + OrayBox.X6CallTab.WAN1 + "</p>", '<p style="padding-top: 5px;font-size:18px;text-align: left;padding-left: 115px;">WAN2：' + OrayBox.X6CallTab.WAN2 + "</p>"],
                OrayBox.X6CallTab.has_success && s.push('<a class="btn btn-small" href="http://pgybox.oray.com/passport/login?sn=' + OrayBox.sn + '" style="margin-right: 30px;margin-top: 30px;">云管理</a>'),
                s.push('<a class="btn btn-small ' + (OrayBox.X6CallTab.has_success ? "btn-cancel " : "") + 'close" href="javascript:void(0);" style="margin-top: 30px;">返回重新设置</a>')
            }
            OrayBox.showNotify(s.join(""), !0)
        })
    }
    ,
    e.OrayBox.checkInterfaceDump = function(a, t, i) {
        if (OrayBox.isStopPending)
            return !1;
        OrayBox.request("interface_dump", {
            "interface": i
        }, function(e) {
            return e.result ? "undefined" != typeof e.result.errors ? "USER_REQUEST" === e.result.errors[0].code ? setTimeout(function() {
                OrayBox.checkInterfaceDump(a, t, i)
            }, 3e3) : "function" == typeof t ? t(e.result.errors) : "function" == typeof a && a(e) : e.result.pending ? setTimeout(function() {
                OrayBox.checkInterfaceDump(a, t, i)
            }, 3e3) : "function" == typeof a && a(e) : setTimeout(function() {
                OrayBox.checkInterfaceDump(a, t, i)
            }, 3e3)
        })
    }
    ,
    e.OrayBox.diagnose = function(e, a) {
        e = e || "wan",
        OrayBox.request("interface_dump", {
            "interface": e
        }, a, "GET", !1)
    }
    ,
    e.OrayBox.checkDeviceSN = function(e) {
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "http://" + e + "/cgi-bin/oraybox?_api=sn_ext_get",
            jsonpCallback: "x-callback",
            data: [{
                name: "callback",
                value: 'window.OrayBox.callbackLan(\${data},"' + e + '")'
            }],
            success: function(e) {},
            complete: function(e, a) {}
        })
    }
    ,
    e.OrayBox.callbackLan = function(e, a) {
        0 == e.code && (OrayBox.showMessage("局域网设置成功", !0),
        OrayBox.showNotify("", !1, function() {
            setTimeout(function() {
                location.assign("http://" + a + "/oraybox/login.html")
            }, 1e3)
        }))
    }
    ,
    e.OrayBox.formatRunTime = function(e) {
        var a = "";
        return 86400 <= e && (a += Math.floor(e / 86400) + "天",
        e %= 86400),
        3600 <= e && (a += Math.floor(e / 3600) + "小时",
        e %= 3600),
        60 <= e && (a += Math.floor(e / 60) + "分",
        e %= 60),
        1 <= e && (a += Math.floor(+e) + "秒",
        e %= 1),
        a
    }
    ,
    e.OrayBox.getMessage = function(e) {
        var a = "操作失败";
        switch (e) {
        case 0:
            a = "操作成功";
            break;
        case 1:
            a = "内部错误";
            break;
        case 2:
            a = "API不存在";
            break;
        case 3:
            a = "未指定API";
            break;
        case 4:
            a = "密码错误";
            break;
        case 100:
            a = "参数错误";
            break;
        case 101:
            a = "没有权限";
            break;
        case 102:
            a = "uci操作出错";
            break;
        case 103:
            a = "未实现";
            break;
        case 104:
            a = "设备不存在";
            break;
        case 105:
            a = "网络不通";
            break;
        case 106:
            a = "目标不存在";
            break;
        case 107:
            a = "目标重复";
            break;
        case 999:
            a = "未知错误"
        }
        return a
    }
    ,
    e.onload = e.onresize = e.OrayBox.resize = function() {
        $("#main-height").css("height", "auto");
        var e = $(window).height()
          , a = $("#main-height").outerHeight(!0)
          , t = $("#footer").outerHeight(!0)
          , i = e - $("#header").outerHeight(!0) - t - (0 < $("#pwd-remind").size() ? $("#pwd-remind").outerHeight(!0) : 0);
        i < a ? $("#main-height").css("height", "auto") : $("#main-height").css({
            height: i + "px",
            "box-sizing": "border-box"
        })
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.initCheck = function() {
        OrayBox.updateFooterTime(),
        OrayBox.init(function() {
            -1 < $.inArray(OrayBox.model, ["X1-1111", "X1-2111", "X4C-1141G", "X4C-2131G", "X4C-2123G", "X3-2151", "X3-3251", "X4-1123G"]) ? $.getJSON("/cgi-bin/oraybox?_api=init_get", function(e) {
                e && 0 == e.initialization ? $("#wrap-init").show() : location.assign("/oraybox/login.html")
            }) : ($("#wrap-network").show(),
            $.getJSON("/cgi-bin/oraybox?_api=ping&hostname=114.114.114.114&randcode=" + Math.random(), function(e) {
                0 == e.code ? setTimeout(function() {
                    location.assign("http://pgybox.oray.com/passport/login?sn=" + e.sn)
                }, 1e3) : $.getJSON("/cgi-bin/oraybox?_api=sys_base_info&_pwd=admin", function(e) {
                    0 == e.code ? $("#auto-form").submit() : location.assign("/oraybox/login.html")
                })
            }));
            var t = null;
            $(document).ready(function() {
                $.getJSON("/cgi-bin/oraybox?_api=ping&hostname=114.114.114.114&randcode=" + Math.random(), function(e) {
                    return t = e.code
                })
            }),
            OrayBox.init(function() {
                var e, a;
                e = 0,
                a = setInterval(function() {
                    100 == ++e && (clearInterval(a),
                    0 != t ? location.assign("/oraybox/guide.html") : location.assign("/oraybox/setpassword.html")),
                    $("#progressbar").width(e + "%")
                }, 30)
            }),
            $("#redirect").click(function() {
                $("#auto-form").submit()
            }),
            OrayBox.setCountDown($("#time-sec"), 3)
        })
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.Deploy = function() {
        function n(e) {
            var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
              , t = window.location.search.substr(1).match(a);
            return null != t ? decodeURI(t[2]) : null
        }
        OrayBox.updateFooterTime(),
        OrayBox.init(function() {
            var e = n("mamagepwd");
            OrayBox.request("restart_service", {
                name: "network",
                _pwd: e
            }, function(e) {
                var a, i;
                0 == e.code && (a = 0,
                i = setInterval(function() {
                    var t;
                    90 <= ++a && $("#deploying-text").text("配置完成，即将进入路由器本地管理..."),
                    100 == a && (clearInterval(i),
                    t = setInterval(function() {
                        $.getJSON("/cgi-bin/oraybox?_api=ping&hostname=114.114.114.114&randcode=" + Math.random(), function(e) {
                            var a;
                            e && 0 == e.code && (clearInterval(t),
                            a = n("mamagepwd"),
                            $("#auto-form input[name= 'password']").val(a),
                            $("#auto-form").submit())
                        }).error(function() {
                            $("#deploying-text").text("配置完成，建议连接到新的无线网络后继续")
                        })
                    }, 5e3)),
                    $("#progressbar").width(a + "%")
                }, 20))
            })
        })
    }
}(window);
var devBrand = {
    "48:ad:08": "huawei",
    "2c:ab:00": "huawei",
    "00:e0:fc": "huawei",
    "24:df:6a": "huawei",
    "00:9a:cd": "huawei",
    "00:cd:fe": "apple",
    "80:7a:bf": "htc",
    "18:af:61": "apple",
    "90:e7:c4": "htc",
    "74:a7:8e": "zte",
    "80:38:bc": "huawei",
    "d4:40:f0": "huawei",
    "64:a6:51": "huawei",
    "e8:cd:2d": "huawei",
    "ac:e2:15": "huawei",
    "ec:23:3d": "huawei",
    "78:f5:fd": "huawei",
    "80:b6:86": "huawei",
    "10:c6:1f": "huawei",
    "88:53:d4": "huawei",
    "0c:37:dc": "huawei",
    "bc:76:70": "huawei",
    "24:db:ac": "huawei",
    "84:74:2a": "zte",
    "68:1a:b2": "zte",
    "0c:45:ba": "huawei",
    "cc:44:63": "apple",
    "6c:72:e7": "apple",
    "cc:a2:23": "huawei",
    "e8:08:8b": "huawei",
    "60:e7:01": "huawei",
    "7c:61:93": "htc",
    "ac:85:3d": "huawei",
    "74:88:2a": "huawei",
    "78:d7:52": "huawei",
    "e0:24:7f": "huawei",
    "00:46:4b": "huawei",
    "70:7b:e8": "huawei",
    "54:89:98": "huawei",
    "08:19:a6": "huawei",
    "3c:f8:08": "huawei",
    "b4:15:13": "huawei",
    "28:31:52": "huawei",
    "dc:d2:fc": "huawei",
    "00:e0:18": "asus",
    "00:0c:6e": "asus",
    "00:1b:fc": "asus",
    "00:1e:8c": "asus",
    "00:15:f2": "asus",
    "00:23:54": "asus",
    "00:1f:c6": "asus",
    "28:5f:db": "huawei",
    "40:4d:8e": "huawei",
    "78:1d:ba": "huawei",
    "00:1e:10": "huawei",
    "cc:c7:60": "apple",
    "08:74:02": "apple",
    "28:5a:eb": "apple",
    "28:f0:76": "apple",
    "44:d8:84": "apple",
    "ec:85:2f": "apple",
    "28:6a:ba": "apple",
    "70:56:81": "apple",
    "7c:d1:c3": "apple",
    "f0:dc:e2": "apple",
    "b0:65:bd": "apple",
    "a8:20:66": "apple",
    "bc:67:78": "apple",
    "68:96:7b": "apple",
    "84:85:06": "apple",
    "b4:f0:ab": "apple",
    "10:dd:b1": "apple",
    "04:f7:e4": "apple",
    "34:c0:59": "apple",
    "f0:d1:a9": "apple",
    "f8:27:93": "apple",
    "ac:fd:ec": "apple",
    "d0:e1:40": "apple",
    "f8:32:e4": "asus",
    "8c:7c:92": "apple",
    "78:31:c1": "apple",
    "f4:37:b7": "apple",
    "54:ae:27": "apple",
    "64:76:ba": "apple",
    "84:b1:53": "apple",
    "78:3a:84": "apple",
    "2c:be:08": "apple",
    "24:e3:14": "apple",
    "60:fe:c5": "apple",
    "00:a0:40": "apple",
    "bc:3b:af": "apple",
    "78:6c:1c": "apple",
    "04:15:52": "apple",
    "38:48:4c": "apple",
    "70:11:24": "apple",
    "c8:6f:1d": "apple",
    "68:5b:35": "apple",
    "38:0f:4a": "apple",
    "30:10:e4": "apple",
    "04:db:56": "apple",
    "88:1f:a1": "apple",
    "04:e5:36": "apple",
    "10:9a:dd": "apple",
    "40:a6:d9": "apple",
    "7c:f0:5f": "apple",
    "a4:b1:97": "apple",
    "0c:74:c2": "apple",
    "40:30:04": "apple",
    "48:60:bc": "apple",
    "50:ea:d6": "apple",
    "28:e0:2c": "apple",
    "60:c5:47": "apple",
    "7c:11:be": "apple",
    "00:3e:e1": "apple",
    "68:d9:3c": "apple",
    "2c:f0:ee": "apple",
    "84:78:8b": "apple",
    "6c:94:f8": "apple",
    "70:3e:ac": "apple",
    "c0:1a:da": "apple",
    "34:36:3b": "apple",
    "c8:1e:e7": "apple",
    "9c:fc:01": "apple",
    "00:0d:93": "apple",
    "00:1c:b3": "apple",
    "64:b9:e8": "apple",
    "34:15:9e": "apple",
    "58:b0:35": "apple",
    "f0:b4:79": "apple",
    "c0:4a:09": "jia",
    "d0:3e:5c": "huawei",
    "ac:bc:32": "apple",
    "f8:98:b9": "huawei",
    "2c:cf:58": "huawei",
    "d4:45:e8": "jia",
    "88:1b:99": "jia",
    "e4:c2:d1": "huawei",
    "88:a2:d7": "huawei",
    "24:e5:aa": "philips",
    "3c:47:11": "huawei",
    "e8:f2:e2": "lg",
    "bc:6e:64": "sony",
    "6c:a7:5f": "zte",
    "70:9f:2d": "zte",
    "60:99:d1": "lenovo",
    "38:2c:4a": "asus",
    "60:c1:cb": "jia",
    "ec:1d:7f": "zte",
    "4c:26:e7": "lg",
    "74:c6:21": "jia",
    "34:de:34": "zte",
    "a4:81:ee": "nokia",
    "4c:7f:62": "nokia",
    "2c:8a:72": "htc",
    "c4:6b:b4": "yi",
    "a0:e4:53": "sony",
    "40:7a:80": "nokia",
    "98:ff:d0": "lenovo",
    "4c:cb:f5": "zte",
    "1c:7b:21": "sony",
    "78:e8:b6": "zte",
    "b0:ce:18": "jia",
    "50:3c:c4": "lenovo",
    "f8:2b:c8": "jia",
    "98:0d:2e": "htc",
    "60:a4:4c": "asus",
    "04:5f:a7": "yi",
    "04:4c:ef": "jia",
    "b4:98:42": "zte",
    "8c:e0:81": "zte",
    "dc:02:8e": "zte",
    "48:28:2f": "zte",
    "b0:c8:3f": "jia",
    "cc:14:a6": "yi",
    "98:d6:86": "yi",
    "a8:26:d9": "htc",
    "cc:c5:0a": "jia",
    "7c:94:b2": "philips",
    "b0:5c:e5": "nokia",
    "d4:20:6d": "htc",
    "54:cd:a7": "jia",
    "a4:99:81": "jia",
    "d4:c1:fc": "nokia",
    "48:dc:fb": "nokia",
    "18:8e:d5": "lg",
    "5c:17:d3": "lg",
    "e0:a6:70": "nokia",
    "6c:9b:02": "nokia",
    "2c:d2:e7": "nokia",
    "0c:dd:ef": "nokia",
    "c4:82:3f": "jia",
    "f0:c2:4c": "jia",
    "a0:3a:75": "lg",
    "00:27:17": "jia",
    "00:24:47": "zte",
    "00:24:92": "motorola",
    "00:24:fa": "lg",
    "00:23:c9": "yi",
    "00:1d:68": "lg",
    "00:1c:08": "360",
    "00:1a:83": "asus",
    "00:1a:a9": "jia",
    "00:19:81": "vivo",
    "00:18:e4": "yi",
    "00:19:4c": "jia",
    "00:15:2a": "nokia",
    "00:14:7f": "lg",
    "00:0e:1f": "tcl",
    "00:0a:0e": "vivo",
    "00:0a:28": "motorola",
    "00:06:1b": "lenovo",
    "00:05:fc": "asus",
    "00:06:55": "yi",
    "00:05:4e": "philips",
    "00:02:6c": "philips",
    "00:90:3e": "philips",
    "00:10:3f": "lg",
    "00:e0:03": "nokia",
    "00:e0:95": "lg",
    "00:20:21": "lg",
    "00:40:bc": "lg",
    "00:40:43": "nokia",
    "28:fa:a0": "vivo",
    "3c:a3:48": "vivo",
    "f4:29:81": "vivo",
    "80:6c:1b": "motorola",
    "a4:70:d6": "motorola",
    "14:14:4b": "jia",
    "00:1c:50": "tcl",
    "5c:36:b8": "tcl",
    "24:21:ab": "sony",
    "6c:23:b9": "sony",
    "58:17:0c": "sony",
    "b8:f9:34": "sony",
    "20:54:76": "sony",
    "30:39:26": "sony",
    "00:eb:2d": "sony",
    "00:13:a9": "sony",
    "00:21:9e": "sony",
    "00:1e:45": "sony",
    "00:18:13": "sony",
    "d0:d0:4b": "huawei",
    "34:37:59": "zte",
    "54:44:08": "nokia",
    "00:17:b0": "nokia",
    "00:1b:ee": "nokia",
    "18:86:ac": "nokia",
    "00:21:fe": "nokia",
    "00:22:66": "nokia",
    "c8:d1:0b": "nokia",
    "c8:97:9f": "nokia",
    "f4:f5:a5": "nokia",
    "3c:c2:43": "nokia",
    "00:15:a0": "nokia",
    "00:1a:16": "nokia",
    "00:22:fc": "nokia",
    "00:25:48": "nokia",
    "00:1d:fd": "nokia",
    "00:1e:a3": "nokia",
    "00:1d:98": "nokia",
    "00:11:9f": "nokia",
    "ac:61:ea": "apple",
    "38:b5:4d": "apple",
    "a4:f1:e8": "apple",
    "cc:d3:e2": "jia",
    "b8:05:ab": "zte",
    "9c:52:f8": "huawei",
    "90:03:25": "huawei",
    "dc:09:4c": "huawei",
    "dc:ee:06": "huawei",
    "ac:0d:1b": "lg",
    "80:19:fe": "jia",
    "58:60:5f": "huawei",
    "88:28:b3": "huawei",
    "c4:f0:81": "huawei",
    "80:13:82": "huawei",
    "90:c1:c6": "apple",
    "70:a2:b3": "apple",
    "4c:57:ca": "apple",
    "68:fb:7e": "apple",
    "14:c9:13": "lg",
    "3c:b6:b7": "vivo",
    "30:9b:ad": "bbk",
    "ac:9b:0a": "sony",
    "48:13:f3": "bbk",
    "48:3c:0c": "huawei",
    "60:e3:ac": "lg",
    "00:13:15": "sony",
    "00:1f:a7": "sony",
    "a8:e3:ee": "sony",
    "70:9e:29": "sony",
    "fc:0f:e6": "sony",
    "54:dc:1d": "yulong",
    "3c:bd:d8": "lg",
    "0c:48:85": "lg",
    "88:c9:d0": "lg",
    "70:05:14": "lg",
    "e8:92:a4": "lg",
    "a8:16:b2": "lg",
    "c4:43:8f": "lg",
    "20:21:a5": "lg",
    "6c:d6:8a": "lg",
    "00:1e:75": "lg",
    "00:26:e2": "lg",
    "00:1f:e3": "lg",
    "2c:54:cf": "lg",
    "f8:95:c7": "lg",
    "48:88:ca": "motorola",
    "74:b5:7e": "zte",
    "54:09:55": "zte",
    "2c:37:31": "yi",
    "2c:9d:1e": "huawei",
    "c8:8d:83": "huawei",
    "f0:43:47": "huawei",
    "9c:b2:b2": "huawei",
    "84:be:52": "huawei",
    "98:b0:39": "nokia",
    "84:26:2b": "nokia",
    "94:e9:8c": "nokia",
    "e4:81:84": "nokia",
    "bc:8d:0e": "nokia",
    "b0:75:4d": "nokia",
    "bc:6b:4d": "nokia",
    "a4:7b:2c": "nokia",
    "00:d0:f6": "nokia",
    "48:f8:e1": "nokia",
    "98:13:33": "zte",
    "f0:98:38": "huawei",
    "18:de:d7": "huawei",
    "9c:f4:8e": "apple",
    "fc:d8:48": "apple",
    "80:48:a5": "yi",
    "64:5d:92": "yi",
    "d4:41:65": "yi",
    "64:3a:b1": "yi",
    "94:b8:19": "nokia",
    "dc:0b:34": "lg",
    "f4:f5:24": "motorola",
    "18:f7:6b": "jia",
    "2c:59:8a": "lg",
    "e0:50:8b": "jia",
    "9c:99:a0": "xiaomi",
    "18:59:36": "xiaomi",
    "98:fa:e3": "xiaomi",
    "64:09:80": "xiaomi",
    "8c:be:be": "xiaomi",
    "f8:a4:5f": "xiaomi",
    "e4:b0:05": "yi",
    "70:4d:7b": "asus",
    "c8:0c:c8": "huawei",
    "04:25:c5": "huawei",
    "54:19:c8": "vivo",
    "54:fa:96": "nokia",
    "70:70:0d": "apple",
    "90:86:74": "yi",
    "04:5d:4b": "sony",
    "f8:a3:4f": "zte",
    "a0:a3:3b": "huawei",
    "dc:c6:4b": "huawei",
    "04:33:89": "huawei",
    "28:3f:69": "sony",
    "7c:50:49": "apple",
    "94:99:01": "yi",
    "98:9e:63": "apple",
    "dc:a9:04": "apple",
    "48:a1:95": "apple",
    "6c:ab:31": "apple",
    "50:32:37": "apple",
    "d4:61:9d": "apple",
    "b0:48:1a": "apple",
    "a0:08:6f": "huawei",
    "c4:ff:1f": "huawei",
    "c4:0b:cb": "xiaomi",
    "9c:32:a9": "yi",
    "60:14:66": "zte",
    "30:d3:86": "zte",
    "bc:3a:ea": "oppo",
    "8c:0e:e3": "oppo",
    "6c:5c:14": "oppo",
    "e8:bb:a8": "oppo",
    "d0:f8:8c": "motorola",
    "ec:f3:42": "oppo",
    "d4:c1:c8": "zte",
    "ec:23:7b": "zte",
    "88:d7:f6": "asus",
    "a8:ca:7b": "huawei",
    "ac:cf:85": "huawei",
    "0c:d7:46": "apple",
    "44:00:10": "apple",
    "e4:98:d6": "apple",
    "60:69:44": "apple",
    "18:87:96": "htc",
    "00:23:76": "htc",
    "ec:4d:47": "huawei",
    "88:cf:98": "huawei",
    "04:52:f3": "apple",
    "24:1e:eb": "apple",
    "f4:31:c3": "apple",
    "c8:7b:5b": "zte",
    "98:f5:37": "zte",
    "00:1e:73": "zte",
    "00:19:c6": "zte",
    "00:15:eb": "zte",
    "d8:49:0b": "huawei",
    "88:86:03": "huawei",
    "f8:e8:11": "huawei",
    "e0:97:96": "huawei",
    "cc:cc:81": "huawei",
    "10:1b:54": "huawei",
    "70:54:f5": "huawei",
    "d0:7a:b5": "huawei",
    "c4:05:28": "huawei",
    "3c:df:bd": "huawei",
    "14:b9:68": "huawei",
    "80:71:7a": "huawei",
    "f4:9f:f3": "huawei",
    "84:db:ac": "huawei",
    "c0:70:09": "huawei",
    "e0:19:1d": "huawei",
    "b8:bc:1b": "huawei",
    "24:1f:a0": "huawei",
    "50:a7:2b": "huawei",
    "c8:51:95": "huawei",
    "00:f8:1c": "huawei",
    "f4:55:9c": "huawei",
    "28:3c:e4": "huawei",
    "64:a5:c3": "apple",
    "08:e8:4f": "huawei",
    "04:bd:70": "huawei",
    "18:c5:8a": "huawei",
    "04:c0:6f": "huawei",
    "5c:4c:a9": "huawei",
    "4c:54:99": "huawei",
    "00:25:9e": "huawei",
    "00:18:82": "huawei",
    "00:11:2f": "asus",
    "00:11:d8": "asus",
    "00:17:31": "asus",
    "00:18:f3": "asus",
    "48:5b:39": "asus",
    "f4:6d:04": "asus",
    "30:85:a9": "asus",
    "cc:08:e0": "apple",
    "58:55:ca": "apple",
    "8c:7b:9d": "apple",
    "88:c6:63": "apple",
    "c8:2a:14": "apple",
    "98:03:d8": "apple",
    "8c:58:77": "apple",
    "34:51:c9": "apple",
    "e0:b9:ba": "apple",
    "d0:23:db": "apple",
    "b8:8d:12": "apple",
    "b8:17:c2": "apple",
    "68:a8:6d": "apple",
    "78:a3:e4": "apple",
    "bc:92:6b": "apple",
    "00:50:e4": "apple",
    "00:30:65": "apple",
    "00:0a:27": "apple",
    "00:14:51": "apple",
    "00:19:e3": "apple",
    "00:23:12": "apple",
    "00:23:32": "apple",
    "00:24:36": "apple",
    "00:25:4b": "apple",
    "00:26:bb": "apple",
    "e8:06:88": "apple",
    "98:5a:eb": "apple",
    "20:78:f0": "apple",
    "78:d7:5f": "apple",
    "e0:ac:cb": "apple",
    "98:e0:d9": "apple",
    "c0:ce:cd": "apple",
    "70:e7:2c": "apple",
    "d0:33:11": "apple",
    "c8:b5:b7": "apple",
    "a8:bb:cf": "apple",
    "90:b2:1f": "apple",
    "b8:e8:56": "apple",
    "14:99:e2": "apple",
    "b4:18:d1": "apple",
    "80:00:6e": "apple",
    "60:d9:c7": "apple",
    "c8:f6:50": "apple",
    "1c:1a:c0": "apple",
    "e0:66:78": "apple",
    "5c:8d:4e": "apple",
    "64:a3:cb": "apple",
    "44:fb:42": "apple",
    "f4:1b:a1": "apple",
    "3c:e0:72": "apple",
    "e8:8d:28": "apple",
    "cc:78:5f": "apple",
    "ac:3c:0b": "apple",
    "88:cb:87": "apple",
    "ec:35:86": "apple",
    "f0:c1:f1": "apple",
    "f4:f9:51": "apple",
    "18:af:8f": "apple",
    "c0:f2:fb": "apple",
    "00:f7:6f": "apple",
    "ac:87:a3": "apple",
    "48:43:7c": "apple",
    "34:a3:95": "apple",
    "9c:f3:87": "apple",
    "a8:5b:78": "apple",
    "90:8d:6c": "apple",
    "0c:15:39": "apple",
    "bc:4c:c4": "apple",
    "0c:bc:9f": "apple",
    "a4:5e:60": "apple",
    "68:09:27": "apple",
    "60:fa:cd": "apple",
    "1c:ab:a7": "apple",
    "8c:fa:ba": "apple",
    "5c:95:ae": "apple",
    "e0:c9:7a": "apple",
    "bc:52:b7": "apple",
    "14:10:9f": "apple",
    "54:26:96": "apple",
    "d8:d1:cb": "apple",
    "98:f4:28": "zte",
    "84:10:0d": "motorola",
    "d4:94:e8": "huawei",
    "40:40:a7": "sony",
    "54:be:53": "zte",
    "54:4e:90": "apple",
    "5c:ad:cf": "apple",
    "00:6d:52": "apple",
    "04:c2:3e": "htc",
    "30:0c:23": "zte",
    "5c:51:88": "motorola",
    "74:04:2b": "lenovo",
    "44:55:b1": "huawei",
    "e0:2c:b2": "lenovo",
    "30:f3:35": "huawei",
    "e8:91:20": "motorola",
    "1c:b7:2c": "asus",
    "40:b8:37": "sony",
    "18:44:e6": "zte",
    "ec:5a:86": "yulong",
    "c4:3a:be": "sony",
    "38:d8:2f": "zte",
    "d8:74:95": "zte",
    "30:75:12": "sony",
    "34:4d:ea": "zte",
    "3c:18:9f": "nokia",
    "70:72:0d": "lenovo",
    "40:16:7e": "asus",
    "84:85:0a": "zte",
    "dc:f1:10": "nokia",
    "2c:95:7f": "zte",
    "cc:89:fd": "nokia",
    "dc:c7:93": "nokia",
    "e0:3f:49": "asus",
    "00:ee:bd": "htc",
    "60:24:c1": "jia",
    "6c:5a:b5": "tcl",
    "b0:98:9f": "lg",
    "14:60:80": "zte",
    "98:6c:f5": "zte",
    "a4:77:60": "nokia",
    "cc:7b:35": "zte",
    "ec:22:57": "jia",
    "fc:60:18": "jia",
    "04:3d:98": "jia",
    "4c:21:d0": "sony",
    "8c:c7:d0": "jia",
    "d4:22:3f": "lenovo",
    "f8:df:a8": "zte",
    "ac:e6:4b": "jia",
    "50:46:5d": "asus",
    "34:e0:cf": "zte",
    "dc:9f:a4": "nokia",
    "34:c8:03": "nokia",
    "54:53:ed": "sony",
    "94:00:70": "nokia",
    "50:2d:1d": "nokia",
    "94:44:44": "lg",
    "ac:cf:23": "yi",
    "fc:45:5f": "jia",
    "38:28:ea": "jia",
    "28:d1:af": "nokia",
    "98:29:3f": "jia",
    "6c:a7:80": "nokia",
    "64:b6:4a": "vivo",
    "f0:bf:97": "sony",
    "40:8b:f6": "tcl",
    "78:ca:04": "nokia",
    "98:8e:34": "jia",
    "30:39:55": "jia",
    "a0:71:a9": "nokia",
    "44:7d:a5": "jia",
    "b8:d0:6f": "yi",
    "20:d6:07": "nokia",
    "b4:0e:dc": "lg",
    "a8:f4:70": "jia",
    "e8:5b:5b": "lg",
    "00:25:71": "jia",
    "00:25:1b": "philips",
    "00:1f:9f": "lg",
    "00:1e:24": "jia",
    "00:1e:cf": "philips",
    "00:1d:fb": "tcl",
    "00:1a:ee": "zte",
    "00:1a:e7": "zte",
    "00:1a:d6": "jia",
    "00:12:d6": "jia",
    "00:13:a0": "lg",
    "00:0e:c7": "motorola",
    "00:0c:b5": "lg",
    "00:07:14": "htc",
    "00:04:0f": "asus",
    "00:02:d1": "vivo",
    "00:d0:f8": "jia",
    "00:50:09": "philips",
    "00:90:02": "lg",
    "00:10:b3": "nokia",
    "00:e0:0c": "motorola",
    "00:20:75": "motorola",
    "08:00:7e": "lg",
    "88:07:4b": "lg",
    "10:f6:81": "vivo",
    "e0:98:61": "motorola",
    "f4:f1:e1": "motorola",
    "60:be:b5": "motorola",
    "20:93:4d": "jia",
    "40:2b:a1": "sony",
    "00:25:e7": "sony",
    "d0:51:62": "sony",
    "94:ce:2c": "sony",
    "00:1a:80": "sony",
    "00:24:be": "sony",
    "00:16:20": "sony",
    "00:12:ee": "sony",
    "74:5a:aa": "huawei",
    "7c:1c:f1": "huawei",
    "74:a5:28": "huawei",
    "d4:76:ea": "zte",
    "60:a8:fe": "nokia",
    "00:18:c5": "nokia",
    "80:50:1b": "nokia",
    "34:7e:39": "nokia",
    "a8:7e:33": "nokia",
    "00:24:7d": "nokia",
    "00:1b:af": "nokia",
    "00:1c:35": "nokia",
    "00:1c:d4": "nokia",
    "00:19:79": "nokia",
    "9c:18:74": "nokia",
    "00:21:fc": "nokia",
    "00:1f:5d": "nokia",
    "00:25:cf": "nokia",
    "00:25:d0": "nokia",
    "00:1f:de": "nokia",
    "1c:9e:46": "apple",
    "f0:1b:6c": "vivo",
    "e0:c7:67": "apple",
    "78:96:82": "zte",
    "d0:17:c2": "asus",
    "94:db:da": "huawei",
    "38:4c:4f": "huawei",
    "e4:a8:b6": "huawei",
    "24:4c:07": "huawei",
    "74:97:81": "zte",
    "94:fe:22": "huawei",
    "f8:23:b2": "huawei",
    "dc:d9:16": "huawei",
    "a8:60:b6": "apple",
    "24:f0:94": "apple",
    "90:b0:ed": "apple",
    "c4:b3:01": "apple",
    "e0:5f:45": "apple",
    "48:3b:38": "apple",
    "08:c0:21": "huawei",
    "48:43:5a": "huawei",
    "9c:e3:74": "huawei",
    "6c:0e:e6": "yi",
    "ac:37:43": "htc",
    "dc:1a:c5": "vivo",
    "d0:37:42": "yulong",
    "04:9f:ca": "huawei",
    "c8:1f:be": "huawei",
    "20:3d:b2": "huawei",
    "48:d5:39": "huawei",
    "84:c7:ea": "sony",
    "9c:fb:d5": "vivo",
    "14:a5:1a": "huawei",
    "90:02:a9": "jia",
    "f8:46:1c": "sony",
    "40:4d:7f": "apple",
    "7c:04:d0": "apple",
    "bc:9f:ef": "apple",
    "88:66:a5": "apple",
    "78:4f:43": "apple",
    "10:4f:a8": "sony",
    "6c:25:b9": "bbk",
    "48:6b:2c": "bbk",
    "b0:89:00": "huawei",
    "10:68:3f": "lg",
    "a0:39:f7": "lg",
    "64:bc:0c": "lg",
    "64:89:9a": "lg",
    "58:a2:b5": "lg",
    "74:a7:22": "lg",
    "00:1f:6b": "lg",
    "bc:60:a7": "sony",
    "8c:0d:76": "huawei",
    "00:5a:13": "huawei",
    "20:5d:47": "vivo",
    "10:e8:78": "nokia",
    "48:f7:f1": "nokia",
    "4c:c9:4f": "nokia",
    "1c:ea:1b": "nokia",
    "a4:c6:4f": "huawei",
    "48:7b:6b": "huawei",
    "88:e8:7f": "apple",
    "b8:53:ac": "apple",
    "2c:33:61": "apple",
    "78:b8:4b": "yi",
    "40:f4:20": "yi",
    "9c:61:21": "yi",
    "e0:7c:13": "zte",
    "58:e1:6c": "yi",
    "3c:ef:8c": "jia",
    "28:e3:1f": "xiaomi",
    "0c:1d:af": "xiaomi",
    "14:f6:5a": "xiaomi",
    "74:23:44": "xiaomi",
    "f0:b4:29": "xiaomi",
    "80:d4:a5": "huawei",
    "38:bc:01": "huawei",
    "04:b0:e7": "huawei",
    "44:6a:2e": "huawei",
    "a0:6f:aa": "lg",
    "74:61:4b": "jia",
    "68:9f:f0": "zte",
    "2c:55:d3": "huawei",
    "f4:4c:7f": "huawei",
    "14:30:04": "huawei",
    "7c:46:85": "motorola",
    "80:58:f8": "motorola",
    "f0:d7:aa": "motorola",
    "28:ff:3e": "zte",
    "88:6b:6e": "apple",
    "4c:74:bf": "apple",
    "70:f0:87": "apple",
    "14:a0:f8": "huawei",
    "28:b4:48": "huawei",
    "60:45:cb": "asus",
    "48:a7:4e": "zte",
    "b0:aa:36": "oppo",
    "2c:5b:b8": "oppo",
    "1c:48:ce": "oppo",
    "04:1b:6d": "lg",
    "dc:be:7a": "jia",
    "5c:f9:38": "apple",
    "38:71:de": "apple",
    "bc:54:36": "apple",
    "4c:fb:45": "huawei",
    "a4:ba:76": "huawei",
    "00:09:2d": "htc",
    "f8:db:7f": "htc",
    "e8:99:c4": "htc",
    "7c:b1:5d": "huawei",
    "18:68:6a": "zte",
    "78:f8:82": "lg",
    "34:cd:be": "huawei",
    "d4:6a:a8": "huawei",
    "54:39:df": "huawei",
    "48:46:fb": "huawei",
    "20:0b:c7": "huawei",
    "10:47:80": "huawei",
    "34:4b:50": "zte",
    "fc:c8:97": "zte",
    "9c:d2:4b": "zte",
    "c8:64:c7": "zte",
    "d0:15:4a": "zte",
    "88:e3:ab": "huawei",
    "00:66:4b": "huawei",
    "68:a0:f6": "huawei",
    "5c:f9:6a": "huawei",
    "b4:30:52": "huawei",
    "88:ce:fa": "huawei",
    "58:2a:f7": "huawei",
    "f4:8e:92": "huawei",
    "40:cb:a8": "huawei",
    "08:7a:4c": "huawei",
    "d4:6e:5c": "huawei",
    "24:69:a5": "huawei",
    "c8:d1:5e": "huawei",
    "f8:3d:ff": "huawei",
    "30:87:30": "huawei",
    "00:25:68": "huawei",
    "30:d1:7e": "huawei",
    "9c:28:ef": "huawei",
    "7c:60:97": "huawei",
    "60:de:44": "huawei",
    "34:00:a3": "huawei",
    "64:3e:8c": "huawei",
    "00:c6:10": "apple",
    "70:de:e2": "apple",
    "18:20:32": "apple",
    "6c:c2:6b": "apple",
    "10:40:f3": "apple",
    "fc:25:3f": "apple",
    "18:34:51": "apple",
    "c0:84:7a": "apple",
    "64:20:0c": "apple",
    "74:e1:b6": "apple",
    "0c:77:1a": "apple",
    "00:f4:b9": "apple",
    "c8:33:4b": "apple",
    "b8:f6:b1": "apple",
    "c0:9f:42": "apple",
    "18:9e:fc": "apple",
    "6c:3e:6d": "apple",
    "7c:fa:df": "apple",
    "10:1c:0c": "apple",
    "00:11:24": "apple",
    "00:1d:4f": "apple",
    "00:1e:52": "apple",
    "00:1f:5b": "apple",
    "00:1f:f3": "apple",
    "00:21:e9": "apple",
    "00:23:6c": "apple",
    "00:25:00": "apple",
    "60:fb:42": "apple",
    "14:da:e9": "asus",
    "f8:1e:df": "apple",
    "90:84:0d": "apple",
    "d8:a2:5e": "apple",
    "c8:bc:c8": "apple",
    "28:e7:cf": "apple",
    "d8:9e:3f": "apple",
    "04:0c:ce": "apple",
    "a4:d1:d2": "apple",
    "40:6c:8f": "apple",
    "00:0e:a6": "asus",
    "00:13:d4": "asus",
    "00:26:18": "asus",
    "00:24:8c": "asus",
    "64:9a:be": "apple",
    "94:e9:6a": "apple",
    "ac:29:3a": "apple",
    "10:41:7f": "apple",
    "70:14:a6": "apple",
    "a8:66:7f": "apple",
    "d0:25:98": "apple",
    "cc:29:f5": "apple",
    "6c:70:9f": "apple",
    "0c:3e:9f": "apple",
    "34:e2:fd": "apple",
    "60:92:17": "apple",
    "88:63:df": "apple",
    "80:e6:50": "apple",
    "00:61:71": "apple",
    "90:fd:61": "apple",
    "5c:97:f3": "apple",
    "6c:40:08": "apple",
    "24:a0:74": "apple",
    "f0:24:75": "apple",
    "20:a2:e4": "apple",
    "5c:f5:da": "apple",
    "28:e1:4c": "apple",
    "54:e4:3a": "apple",
    "c8:e0:eb": "apple",
    "a8:88:08": "apple",
    "90:72:40": "apple",
    "0c:4d:e9": "apple",
    "d8:96:95": "apple",
    "0c:30:21": "apple",
    "f0:f6:1c": "apple",
    "b0:34:95": "apple",
    "84:8e:0c": "apple",
    "8c:2d:aa": "apple",
    "44:4c:0c": "apple",
    "84:fc:fe": "apple",
    "e4:8b:7f": "apple",
    "5c:96:9d": "apple",
    "a8:fa:d8": "apple",
    "94:94:26": "apple",
    "e0:f5:c6": "apple",
    "ac:64:62": "zte",
    "e0:36:76": "huawei",
    "24:da:9b": "motorola",
    "50:a9:de": "lg",
    "b8:44:d9": "apple",
    "dc:2b:2a": "apple",
    "d8:ef:cd": "nokia",
    "1c:56:fe": "motorola",
    "7c:a2:3e": "huawei",
    "e8:bd:d1": "huawei",
    "f4:b8:a7": "zte",
    "90:d8:f3": "zte",
    "fc:e3:3c": "huawei",
    "e4:90:7e": "motorola",
    "80:01:84": "htc",
    "f8:cf:c5": "motorola",
    "24:9e:ab": "huawei",
    "10:78:73": "yi",
    "74:a0:63": "huawei",
    "c8:08:e9": "lg",
    "14:36:c6": "lenovo",
    "a4:8c:db": "lenovo",
    "78:31:2b": "zte",
    "4c:2c:83": "jia",
    "f4:fd:2b": "yi",
    "c8:02:10": "lg",
    "44:74:6c": "sony",
    "a4:7e:39": "zte",
    "a8:a6:68": "zte",
    "6c:5f:1c": "lenovo",
    "b4:2c:92": "jia",
    "3c:25:d7": "nokia",
    "30:a8:db": "sony",
    "bc:ee:7b": "asus",
    "0c:12:62": "zte",
    "18:20:12": "zte",
    "50:2e:5c": "htc",
    "28:47:aa": "nokia",
    "68:2d:dc": "jia",
    "70:8d:09": "nokia",
    "0c:f0:19": "lg",
    "a0:ec:80": "zte",
    "1c:08:c1": "lg",
    "84:7a:88": "htc",
    "84:c2:e4": "jia",
    "e0:c3:f3": "zte",
    "08:60:6e": "asus",
    "f4:6d:e2": "zte",
    "c8:3d:97": "nokia",
    "38:19:2f": "nokia",
    "a8:65:b2": "yi",
    "24:ee:3a": "yi",
    "14:9f:e8": "lenovo",
    "48:ea:63": "jia",
    "a0:f4:19": "nokia",
    "f4:8e:09": "nokia",
    "6c:e9:07": "nokia",
    "c8:60:00": "asus",
    "ac:81:f3": "nokia",
    "10:f9:ee": "nokia",
    "fc:00:12": "lg",
    "a8:e0:18": "nokia",
    "58:e4:76": "jia",
    "b4:35:f7": "jia",
    "94:20:53": "nokia",
    "78:66:ae": "zte",
    "f0:ed:1e": "lg",
    "8c:54:1d": "lg",
    "a0:18:59": "yi",
    "54:42:49": "sony",
    "3c:f7:2a": "nokia",
    "a8:93:e6": "jia",
    "00:26:44": "lg",
    "00:23:ec": "lg",
    "00:24:28": "yi",
    "00:22:ee": "lg",
    "00:22:a1": "huawei",
    "00:1e:b2": "lg",
    "00:19:2d": "nokia",
    "00:19:13": "yi",
    "00:17:8f": "yi",
    "00:17:88": "philips",
    "00:18:42": "nokia",
    "00:18:6d": "jia",
    "00:13:fd": "nokia",
    "00:0e:60": "360",
    "00:09:df": "yi",
    "00:05:c9": "lg",
    "00:02:61": "lg",
    "00:50:a9": "lg",
    "00:d0:de": "philips",
    "00:90:a1": "yi",
    "ec:df:3a": "vivo",
    "e4:5a:a2": "vivo",
    "9c:d9:17": "motorola",
    "90:68:c3": "motorola",
    "40:88:05": "motorola",
    "f8:f1:b6": "motorola",
    "54:f6:c5": "jia",
    "00:1d:ba": "sony",
    "00:0a:d9": "sony",
    "00:0f:de": "sony",
    "00:1e:dc": "sony",
    "00:19:63": "sony",
    "00:1b:59": "sony",
    "78:84:3c": "sony",
    "00:23:f1": "sony",
    "30:17:c8": "sony",
    "18:00:2d": "sony",
    "08:00:46": "sony",
    "00:26:75": "zte",
    "3c:59:1e": "tcl",
    "00:24:03": "nokia",
    "00:22:65": "nokia",
    "00:19:b7": "nokia",
    "00:24:04": "nokia",
    "00:02:ee": "nokia",
    "00:1c:9a": "nokia",
    "00:1f:01": "nokia",
    "00:0e:ed": "nokia",
    "00:1e:3a": "nokia",
    "00:1a:89": "nokia",
    "00:21:aa": "nokia",
    "00:26:69": "nokia",
    "00:22:fd": "nokia",
    "00:21:09": "nokia",
    "00:21:08": "nokia",
    "00:1d:6e": "nokia",
    "00:1b:33": "nokia",
    "ec:f3:5b": "nokia",
    "ec:9b:5b": "nokia",
    "bc:c6:db": "nokia",
    "9c:4f:da": "apple",
    "1c:5c:f2": "apple",
    "e4:9a:79": "apple",
    "28:a0:2b": "apple",
    "b4:4b:d2": "apple",
    "b4:8b:19": "apple",
    "14:d1:1f": "huawei",
    "54:51:1b": "huawei",
    "e4:7e:66": "huawei",
    "9c:74:1a": "huawei",
    "00:1d:08": "jia",
    "e0:a3:ac": "huawei",
    "ec:ad:b8": "apple",
    "98:01:a7": "apple",
    "2c:f0:a2": "apple",
    "04:27:58": "huawei",
    "c4:8f:07": "yi",
    "f4:5b:73": "jia",
    "c4:a3:66": "zte",
    "88:79:7e": "motorola",
    "68:3e:34": "meizu",
    "3c:07:71": "sony",
    "d8:d4:3c": "sony",
    "5c:a8:6a": "huawei",
    "90:f0:52": "meizu",
    "0c:fe:45": "sony",
    "f8:d0:ac": "sony",
    "00:d9:d1": "sony",
    "00:04:1f": "sony",
    "00:1d:0d": "sony",
    "00:e0:91": "lg",
    "6c:d0:32": "lg",
    "c0:41:f6": "lg",
    "00:21:fb": "lg",
    "8c:3a:e3": "lg",
    "30:76:6f": "lg",
    "f8:0c:f3": "lg",
    "00:16:6d": "yulong",
    "3c:91:57": "yulong",
    "48:fd:8e": "huawei",
    "24:44:27": "huawei",
    "f8:5c:4d": "nokia",
    "d0:13:fd": "lg",
    "18:d2:76": "huawei",
    "38:52:1a": "nokia",
    "84:db:fc": "nokia",
    "14:3e:60": "nokia",
    "d4:e3:3f": "nokia",
    "38:d5:47": "asus",
    "4c:f9:5d": "huawei",
    "84:21:f1": "huawei",
    "70:79:90": "huawei",
    "60:9a:c1": "apple",
    "f0:79:60": "apple",
    "9c:8b:a0": "apple",
    "e0:4f:bd": "yi",
    "4c:32:75": "apple",
    "ac:e7:7b": "yi",
    "fc:37:2b": "yi",
    "24:c4:4a": "zte",
    "3c:fa:43": "huawei",
    "14:5f:94": "huawei",
    "4c:11:bf": "jia",
    "64:db:43": "motorola",
    "d0:58:a8": "zte",
    "d0:71:c4": "zte",
    "d4:97:0b": "xiaomi",
    "64:cc:2e": "xiaomi",
    "b0:e2:35": "xiaomi",
    "38:a4:ed": "xiaomi",
    "f4:8b:32": "xiaomi",
    "c0:bf:c0": "huawei",
    "a0:8c:f8": "huawei",
    "5c:4a:1f": "yi",
    "e4:e4:ab": "apple",
    "58:40:4e": "apple",
    "dc:0c:5c": "apple",
    "2c:20:0b": "apple",
    "c8:94:bb": "huawei",
    "d0:ff:98": "huawei",
    "50:04:b8": "huawei",
    "10:b1:f8": "huawei",
    "3c:bd:3e": "xiaomi",
    "2c:4d:54": "asus",
    "f8:75:88": "huawei",
    "bc:3f:8f": "huawei",
    "50:40:61": "nokia",
    "dc:a4:ca": "apple",
    "8c:8f:e9": "apple",
    "f4:e4:ad": "zte",
    "98:10:e8": "apple",
    "b4:9c:df": "apple",
    "f4:70:ab": "vivo",
    "28:a6:db": "huawei",
    "44:04:44": "oppo",
    "c0:9f:05": "oppo",
    "cc:2d:83": "oppo",
    "38:29:5a": "oppo",
    "4c:1a:3d": "oppo",
    "a8:1b:5a": "oppo",
    "dc:6d:cd": "oppo",
    "18:52:07": "yi",
    "a8:b8:6e": "lg",
    "74:f6:1c": "htc",
    "6c:8d:c1": "apple",
    "38:ca:da": "apple",
    "64:16:f0": "huawei",
    "48:db:50": "huawei",
    "24:00:ba": "huawei",
    "68:db:ca": "apple",
    "04:4b:ed": "apple",
    "88:b8:d0": "oppo",
    "38:e7:d8": "htc",
    "d8:b3:77": "htc",
    "b4:ce:f6": "htc",
    "d4:0b:1a": "htc",
    "a0:8d:16": "huawei",
    "60:18:88": "zte",
    "e8:4d:d0": "huawei",
    "04:7d:50": "yi",
    "a4:d1:8c": "apple",
    "cc:25:ef": "apple",
    "24:09:95": "huawei",
    "24:7f:3c": "huawei",
    "1c:8e:5c": "huawei",
    "94:77:2b": "huawei",
    "f4:e3:fb": "huawei",
    "04:02:1f": "huawei",
    "00:34:fe": "huawei",
    "d0:2d:b3": "huawei",
    "08:63:61": "huawei",
    "f8:01:13": "huawei",
    "70:72:3c": "huawei",
    "5c:7d:5e": "huawei",
    "4c:8b:ef": "huawei",
    "20:f3:a3": "huawei",
    "ac:e8:7b": "huawei",
    "68:8f:84": "huawei",
    "4c:ac:0a": "zte",
    "00:26:ed": "zte",
    "00:22:93": "zte",
    "ec:cb:30": "huawei",
    "78:6a:89": "huawei",
    "20:08:ed": "huawei",
    "50:9f:27": "huawei",
    "cc:96:a0": "huawei",
    "54:a5:1b": "huawei",
    "f4:c7:14": "huawei",
    "28:6e:d4": "huawei",
    "04:f9:38": "huawei",
    "fc:48:ef": "huawei",
    "80:fb:06": "huawei",
    "d4:b1:10": "huawei",
    "cc:53:b5": "huawei",
    "90:e6:ba": "asus",
    "bc:ae:c5": "asus",
    "10:bf:48": "asus",
    "7c:c5:37": "apple",
    "70:cd:60": "apple",
    "24:ab:81": "apple",
    "58:1f:aa": "apple",
    "a4:67:06": "apple",
    "3c:07:54": "apple",
    "e4:ce:8f": "apple",
    "e8:04:0b": "apple",
    "b8:c7:5d": "apple",
    "40:3c:fc": "apple",
    "28:6a:b8": "apple",
    "7c:c3:a1": "apple",
    "b8:78:2e": "apple",
    "00:05:02": "apple",
    "00:10:fa": "apple",
    "00:03:93": "apple",
    "00:16:cb": "apple",
    "00:17:f2": "apple",
    "00:1b:63": "apple",
    "00:1e:c2": "apple",
    "00:26:08": "apple",
    "7c:6d:62": "apple",
    "40:d3:2d": "apple",
    "d8:30:62": "apple",
    "c4:2c:03": "apple",
    "78:9f:70": "apple",
    "dc:37:14": "apple",
    "40:33:1a": "apple",
    "94:f6:a3": "apple",
    "d8:1d:72": "apple",
    "70:ec:e4": "apple",
    "38:c9:86": "apple",
    "fc:fc:48": "apple",
    "a4:c3:61": "apple",
    "ac:7f:3e": "apple",
    "28:0b:5c": "apple",
    "90:b9:31": "apple",
    "24:a2:e1": "apple",
    "80:ea:96": "apple",
    "60:03:08": "apple",
    "04:f1:3e": "apple",
    "54:72:4f": "apple",
    "48:74:6e": "apple",
    "3c:ab:8e": "apple",
    "7c:6d:f8": "apple",
    "48:d7:05": "apple",
    "3c:d0:f8": "apple",
    "98:d6:bb": "apple",
    "4c:b1:99": "apple",
    "64:e6:82": "apple",
    "80:49:71": "apple",
    "98:fe:94": "apple",
    "d8:00:4d": "apple",
    "98:b8:e3": "apple",
    "80:92:9f": "apple",
    "88:53:95": "apple",
    "9c:04:eb": "apple",
    "78:fd:94": "apple",
    "c8:85:50": "apple",
    "d4:f4:6f": "apple",
    "78:7e:61": "apple",
    "60:f8:1d": "apple",
    "4c:7c:5f": "apple",
    "48:e9:f1": "apple",
    "fc:e9:98": "apple",
    "f0:99:bf": "apple",
    "68:64:4b": "apple",
    "a8:96:8a": "apple",
    "4c:8d:79": "apple",
    "20:7d:74": "apple",
    "f4:f1:5a": "apple",
    "04:26:65": "apple",
    "2c:b4:3a": "apple",
    "68:9c:70": "apple",
    "08:70:45": "apple",
    "34:69:87": "zte",
    "ec:38:8f": "huawei",
    "bc:9c:31": "huawei",
    "a0:32:99": "lenovo",
    "20:9b:cd": "apple",
    "f0:b0:e7": "apple",
    "cc:20:e8": "apple",
    "e4:35:c8": "huawei",
    "58:48:22": "sony",
    "f8:bf:09": "huawei",
    "58:70:c6": "yi",
    "5c:b3:95": "huawei",
    "44:f4:36": "zte",
    "c0:9a:71": "meitu",
    "9c:37:f4": "huawei",
    "f0:18:2b": "lg",
    "14:dd:a9": "asus",
    "08:62:66": "asus",
    "d0:5b:a8": "zte",
    "e4:ba:d9": "360",
    "ac:9e:17": "asus",
    "44:80:eb": "motorola",
    "f0:79:59": "asus",
    "e0:8e:3c": "zte",
    "54:a0:50": "asus",
    "d4:37:d7": "zte",
    "ac:38:70": "lenovo",
    "84:32:ea": "zte",
    "10:c3:7b": "asus",
    "5c:5b:c2": "yi",
    "ec:8a:4c": "zte",
    "78:24:af": "asus",
    "54:b7:53": "jia",
    "b0:61:c7": "lg",
    "fc:92:3b": "nokia",
    "cc:07:e4": "lenovo",
    "18:ff:2e": "yi",
    "20:89:86": "zte",
    "68:76:4f": "sony",
    "d8:50:e6": "asus",
    "9c:a9:e4": "zte",
    "e4:77:23": "zte",
    "60:4a:1c": "yi",
    "6c:8b:2f": "zte",
    "c8:dd:c9": "lenovo",
    "cc:1a:fa": "zte",
    "74:d0:2b": "asus",
    "4c:cc:34": "motorola",
    "f0:84:c9": "zte",
    "80:cf:41": "lenovo",
    "ec:89:f5": "lenovo",
    "e8:9a:ff": "jia",
    "2c:26:c5": "zte",
    "1c:5a:6b": "philips",
    "0c:c6:6a": "nokia",
    "b4:35:64": "jia",
    "e8:cb:a1": "nokia",
    "f8:5f:2a": "nokia",
    "1c:b0:94": "htc",
    "20:9b:a5": "jia",
    "a0:f4:50": "htc",
    "04:5a:95": "nokia",
    "c8:94:d2": "jia",
    "9c:ca:d9": "nokia",
    "b8:fd:32": "jia",
    "94:3a:f0": "nokia",
    "30:f9:ed": "sony",
    "ac:93:2f": "nokia",
    "90:cf:15": "nokia",
    "10:12:12": "vivo",
    "38:d1:35": "yi",
    "9c:4a:7b": "nokia",
    "c8:df:7c": "nokia",
    "18:14:56": "nokia",
    "f4:dc:da": "jia",
    "48:2c:ea": "motorola",
    "64:99:5d": "lg",
    "e4:ec:10": "nokia",
    "2c:3f:3e": "lg",
    "5c:57:c8": "nokia",
    "c0:38:f9": "nokia",
    "00:25:24": "htc",
    "00:24:37": "motorola",
    "00:23:dd": "lg",
    "00:23:9e": "jia",
    "00:22:a6": "sony",
    "00:22:de": "oppo",
    "00:1d:b0": "jia",
    "00:18:f6": "lg",
    "00:19:e9": "lg",
    "00:19:a1": "lg",
    "00:18:ac": "jia",
    "00:18:e3": "lg",
    "00:14:80": "lg",
    "00:13:0f": "lg",
    "00:12:fe": "lenovo",
    "00:13:52": "zte",
    "00:0f:bb": "nokia",
    "00:0e:50": "lg",
    "00:0b:e1": "nokia",
    "00:0b:29": "lg",
    "00:09:5c": "philips",
    "00:05:56": "360",
    "00:01:6b": "htc",
    "00:90:3f": "zte",
    "00:90:d0": "lg",
    "00:a0:bf": "motorola",
    "00:c0:0c": "lg",
    "08:00:41": "lg",
    "c4:66:99": "vivo",
    "ec:88:92": "motorola",
    "b0:79:94": "motorola",
    "14:1a:a3": "motorola",
    "cc:c3:ea": "motorola",
    "34:bb:26": "motorola",
    "40:78:6a": "motorola",
    "c4:09:38": "jia",
    "4c:14:a3": "tcl",
    "00:24:ef": "sony",
    "6c:0e:0d": "sony",
    "b4:52:7d": "sony",
    "e0:63:e5": "sony",
    "00:0e:07": "sony",
    "00:1a:75": "sony",
    "00:16:b8": "sony",
    "00:1d:28": "sony",
    "00:1f:e4": "sony",
    "00:22:98": "sony",
    "bc:62:0e": "huawei",
    "78:f5:57": "huawei",
    "e0:28:61": "huawei",
    "c4:47:3f": "huawei",
    "a8:44:81": "nokia",
    "88:44:f6": "nokia",
    "a8:7b:39": "nokia",
    "14:c1:26": "nokia",
    "4c:25:78": "nokia",
    "00:1e:a4": "nokia",
    "00:12:62": "nokia",
    "00:17:4b": "nokia",
    "00:25:47": "nokia",
    "00:1d:e9": "nokia",
    "00:1d:3b": "nokia",
    "00:14:a7": "nokia",
    "00:1c:d6": "nokia",
    "f4:5c:89": "apple",
    "9c:5c:8e": "asus",
    "bc:ec:5d": "apple",
    "dc:41:5f": "apple",
    "30:63:6b": "apple",
    "fc:1a:11": "vivo",
    "30:a9:de": "lg",
    "98:0c:a5": "motorola",
    "00:34:da": "lg",
    "d4:61:2e": "huawei",
    "1c:67:58": "huawei",
    "08:3f:bc": "zte",
    "bc:75:74": "huawei",
    "20:a6:80": "huawei",
    "0c:51:01": "apple",
    "08:6d:41": "apple",
    "04:d3:cf": "apple",
    "34:a2:a2": "huawei",
    "20:f1:7c": "huawei",
    "34:b3:54": "huawei",
    "74:9d:8f": "huawei",
    "34:6a:c2": "huawei",
    "60:73:bc": "zte",
    "68:c4:4d": "motorola",
    "38:bc:1a": "meizu",
    "e0:dd:c0": "vivo",
    "18:dc:56": "yulong",
    "50:01:6b": "huawei",
    "70:8b:cd": "asus",
    "88:6a:b1": "vivo",
    "40:7c:7d": "nokia",
    "bc:52:b4": "nokia",
    "fc:2f:aa": "nokia",
    "90:3a:a0": "nokia",
    "70:25:26": "nokia",
    "08:01:0f": "yi",
    "cc:a2:60": "yi",
    "20:3c:ae": "apple",
    "74:8d:08": "apple",
    "a0:3b:e3": "apple",
    "18:e2:9f": "vivo",
    "cc:61:e5": "motorola",
    "40:4e:36": "htc",
    "30:74:96": "huawei",
    "70:8a:09": "huawei",
    "14:9d:09": "huawei",
    "14:a7:8b": "jia",
    "d0:60:8c": "zte",
    "00:9e:c8": "xiaomi",
    "ac:f7:f3": "xiaomi",
    "10:2a:b3": "xiaomi",
    "58:44:98": "xiaomi",
    "a0:86:c6": "xiaomi",
    "7c:1d:d9": "xiaomi",
    "d4:36:db": "oppo",
    "68:8a:f0": "zte",
    "98:cf:53": "bbk",
    "f4:cb:52": "huawei",
    "44:6e:e5": "huawei",
    "2c:28:2d": "bbk",
    "80:41:4e": "bbk",
    "28:0d:fc": "sony",
    "00:15:c1": "sony",
    "00:19:c5": "sony",
    "98:93:cc": "lg",
    "3c:cd:93": "lg",
    "58:3f:54": "lg",
    "00:1c:62": "lg",
    "00:24:83": "lg",
    "40:b0:fa": "lg",
    "a0:91:69": "lg",
    "28:6c:07": "xiaomi",
    "34:fc:ef": "lg",
    "48:59:29": "lg",
    "50:55:27": "lg",
    "98:d6:f7": "lg",
    "a8:92:2c": "lg",
    "a8:c8:3a": "huawei",
    "84:9f:b5": "huawei",
    "00:4a:77": "zte",
    "9c:7d:a3": "huawei",
    "f0:2f:a7": "huawei",
    "88:3f:d3": "huawei",
    "34:1e:6b": "huawei",
    "ac:c1:ee": "xiaomi",
    "64:b0:a6": "apple",
    "84:fc:ac": "apple",
    "6c:19:c0": "apple",
    "20:ab:37": "apple",
    "18:65:90": "apple",
    "2c:63:73": "yi",
    "b0:e5:ed": "huawei",
    "c8:14:51": "huawei",
    "c4:86:e9": "huawei",
    "d8:c7:71": "huawei",
    "f0:c8:50": "huawei",
    "54:25:ea": "huawei",
    "08:23:b2": "vivo",
    "78:02:f8": "xiaomi",
    "b8:22:4f": "yi",
    "68:cc:6e": "huawei",
    "60:91:f3": "vivo",
    "bc:2f:3d": "vivo",
    "d4:dc:cd": "apple",
    "48:4b:aa": "apple",
    "f8:03:77": "apple",
    "14:bd:61": "apple",
    "c0:d0:12": "apple",
    "e8:c1:d7": "philips",
    "84:a9:c4": "huawei",
    "a0:f4:79": "huawei",
    "a4:3d:78": "oppo",
    "ec:01:ee": "oppo",
    "b8:37:65": "oppo",
    "c4:ab:b2": "vivo",
    "88:d2:74": "zte",
    "28:ed:6a": "apple",
    "34:ab:37": "apple",
    "60:a3:7d": "apple",
    "00:56:cd": "apple",
    "70:81:eb": "apple",
    "08:66:98": "apple",
    "2c:56:dc": "asus",
    "90:21:55": "htc",
    "64:a7:69": "htc",
    "bc:cf:cc": "htc",
    "7c:7d:3d": "huawei",
    "44:82:e5": "huawei",
    "54:27:58": "motorola",
    "90:60:f1": "apple",
    "b0:5b:67": "huawei",
    "38:f8:89": "huawei",
    "f4:dc:f9": "huawei",
    "90:4e:2b": "huawei",
    "0c:96:bf": "huawei",
    "9c:c1:72": "huawei",
    "38:46:08": "zte",
    "b4:b3:62": "zte",
    "b0:75:d5": "zte",
    "08:18:1a": "zte",
    "00:25:12": "zte",
    "70:a8:e3": "huawei",
    "f8:4a:bf": "huawei",
    "4c:b1:6c": "huawei",
    "4c:1f:cc": "huawei",
    "48:62:76": "huawei",
    "ac:4e:91": "huawei",
    "e4:68:a3": "huawei",
    "80:d0:9b": "huawei",
    "58:1f:28": "huawei",
    "8c:34:fd": "huawei",
    "90:67:1c": "huawei",
    "58:7f:66": "huawei",
    "bc:25:e0": "huawei",
    "c4:07:2f": "huawei",
    "0c:d6:bd": "huawei",
    "a4:99:47": "huawei",
    "34:6b:d3": "huawei",
    "1c:1d:67": "huawei",
    "84:a8:e4": "huawei",
    "20:2b:c1": "huawei",
    "74:1b:b2": "apple",
    "28:cf:e9": "apple",
    "10:51:72": "huawei",
    "90:17:ac": "huawei",
    "94:04:9c": "huawei",
    "00:1a:92": "asus",
    "00:1d:60": "asus",
    "00:22:15": "asus",
    "20:cf:30": "asus",
    "e0:cb:4e": "asus",
    "1c:87:2c": "asus",
    "e4:25:e7": "apple",
    "08:00:07": "apple",
    "00:0a:95": "apple",
    "00:22:41": "apple",
    "00:23:df": "apple",
    "00:25:bc": "apple",
    "00:26:4a": "apple",
    "00:26:b0": "apple",
    "04:1e:64": "apple",
    "d4:9a:20": "apple",
    "90:27:e4": "apple",
    "60:33:4b": "apple",
    "a4:31:35": "apple",
    "9c:35:eb": "apple",
    "50:7a:55": "apple",
    "a0:99:9b": "apple",
    "24:24:0e": "apple",
    "90:3c:92": "apple",
    "34:12:98": "apple",
    "9c:29:3f": "apple",
    "a8:8e:24": "apple",
    "e8:80:2e": "apple",
    "68:ae:20": "apple",
    "e0:b5:2d": "apple",
    "80:be:05": "apple",
    "d8:bb:2c": "apple",
    "d0:4f:7e": "apple",
    "2c:1f:23": "apple",
    "54:9f:13": "apple",
    "b8:09:8a": "apple",
    "f0:db:e2": "apple",
    "18:ee:69": "apple",
    "74:81:14": "apple",
    "18:f6:43": "apple",
    "d0:a6:37": "apple",
    "a0:18:28": "apple",
    "d0:03:4b": "apple",
    "5c:59:48": "apple",
    "78:ca:39": "apple",
    "18:e7:f4": "apple",
    "b8:ff:61": "apple",
    "dc:2b:61": "apple",
    "10:93:e9": "apple",
    "44:2a:60": "apple",
    "e0:f8:47": "apple",
    "14:5a:05": "apple",
    "28:cf:da": "apple",
    "14:8f:c6": "apple",
    "28:37:37": "apple",
    "04:54:53": "apple",
    "f0:cb:a1": "apple",
    "c0:63:94": "apple",
    "8c:00:6d": "apple",
    "b0:9f:ba": "apple",
    "dc:86:d8": "apple",
    "8c:29:37": "apple",
    "dc:9b:9c": "apple",
    "98:f0:ab": "apple",
    "f0:db:f8": "apple",
    "ac:cf:5c": "apple",
    "3c:15:c2": "apple",
    "04:48:9a": "apple",
    "d8:cf:9c": "apple",
    "30:f7:c5": "apple",
    "00:88:65": "apple",
    "40:b3:95": "apple",
    "30:90:ab": "apple",
    "1c:e6:2b": "apple",
    "a0:ed:cd": "apple",
    "a8:86:dd": "apple",
    "54:ea:a8": "apple",
    "e4:c6:3d": "apple",
    "84:38:35": "apple",
    "70:73:cb": "apple",
    "9c:20:7b": "apple",
    "84:29:99": "apple",
    "74:e2:f5": "apple",
    "20:c9:d0": "apple",
    "7c:01:91": "apple",
    "70:48:0f": "apple",
    "a4:b8:05": "apple",
    "58:7f:57": "apple",
    "80:d6:05": "apple",
    "68:a8:28": "huawei",
    "c8:69:cd": "apple",
    "bc:6c:21": "apple",
    "a4:dc:be": "huawei",
    "30:5a:3a": "asus",
    "04:69:f8": "apple",
    "68:89:c1": "huawei",
    "84:5b:12": "huawei",
    "14:3e:bf": "zte",
    "78:8e:33": "jia",
    "bc:eb:5f": "jia",
    "d4:f9:a1": "huawei",
    "94:a7:b7": "zte",
    "5c:b4:3e": "huawei",
    "3c:da:2a": "zte",
    "90:c3:5f": "jia",
    "c4:36:6c": "lg",
    "60:d9:a0": "lenovo",
    "8c:79:67": "zte",
    "d8:55:a3": "zte",
    "4c:16:f1": "zte",
    "f0:fe:6b": "yi",
    "84:8e:df": "sony",
    "08:eb:29": "jia",
    "20:76:93": "lenovo",
    "88:70:8c": "lenovo",
    "e8:15:0e": "nokia",
    "44:d4:e0": "sony",
    "d0:fa:1d": "360",
    "30:0d:2a": "jia",
    "d4:93:98": "nokia",
    "ec:2e:4e": "lg",
    "78:92:3e": "nokia",
    "f0:8a:28": "jia",
    "dc:3e:f8": "nokia",
    "c0:64:c6": "nokia",
    "b4:52:7e": "sony",
    "2c:5a:05": "nokia",
    "ac:22:0b": "asus",
    "54:22:f8": "zte",
    "94:9f:b4": "jia",
    "90:1d:27": "zte",
    "00:59:07": "lenovo",
    "30:f3:1d": "zte",
    "2c:e8:71": "lg",
    "b0:35:8d": "nokia",
    "4c:09:b4": "zte",
    "3c:36:3d": "nokia",
    "d0:db:32": "nokia",
    "a4:e7:31": "nokia",
    "e0:3c:5b": "jia",
    "3c:e6:24": "lg",
    "14:36:05": "nokia",
    "54:04:a6": "asus",
    "04:a8:2a": "nokia",
    "78:2e:ef": "nokia",
    "c4:d4:89": "jia",
    "d4:5d:42": "nokia",
    "fc:e5:57": "nokia",
    "b0:89:91": "lg",
    "60:9e:64": "vivo",
    "d8:2a:7e": "nokia",
    "30:38:55": "nokia",
    "08:76:ff": "lg",
    "d4:cb:af": "nokia",
    "d8:75:33": "nokia",
    "d8:71:57": "lenovo",
    "90:6d:c8": "lg",
    "00:25:e6": "lg",
    "00:24:17": "lg",
    "00:24:f1": "jia",
    "00:24:7a": "yi",
    "00:23:90": "lg",
    "00:21:58": "yi",
    "00:1f:6f": "jia",
    "00:1f:21": "yi",
    "00:1f:07": "zte",
    "00:1d:fa": "jia",
    "00:1d:de": "jia",
    "00:1d:d7": "lg",
    "00:1d:c5": "jia",
    "00:1b:3b": "yi",
    "00:19:86": "jia",
    "00:12:56": "lg",
    "00:11:06": "lg",
    "00:0d:dd": "yi",
    "00:0c:6c": "lg",
    "00:0c:57": "lg",
    "00:09:fb": "philips",
    "00:0b:00": "jia",
    "00:07:d4": "jia",
    "00:09:47": "zte",
    "00:08:c6": "philips",
    "00:06:e5": "jia",
    "00:06:d0": "lg",
    "00:02:58": "yi",
    "00:30:5a": "lg",
    "00:50:ce": "lg",
    "00:90:20": "philips",
    "00:00:95": "sony",
    "00:00:dd": "tcl",
    "08:00:6f": "philips",
    "f8:e0:79": "motorola",
    "14:30:c6": "motorola",
    "e0:75:7d": "motorola",
    "00:01:4a": "sony",
    "00:1c:a4": "sony",
    "00:23:45": "sony",
    "8c:64:22": "sony",
    "90:c1:15": "sony",
    "84:00:d2": "sony",
    "5c:b5:24": "sony",
    "00:30:0a": "zte",
    "04:fe:8d": "huawei",
    "48:00:31": "huawei",
    "74:4a:a4": "zte",
    "00:15:de": "nokia",
    "00:13:70": "nokia",
    "00:24:7c": "nokia",
    "00:23:b4": "nokia",
    "00:21:ab": "nokia",
    "00:1f:df": "nokia",
    "00:19:4f": "nokia",
    "00:18:8d": "nokia",
    "00:18:0f": "nokia",
    "54:79:75": "nokia",
    "2c:cc:15": "nokia",
    "00:bd:3a": "nokia",
    "00:26:cc": "nokia",
    "00:16:4e": "nokia",
    "00:16:bc": "nokia",
    "00:1a:dc": "nokia",
    "00:26:68": "nokia",
    "00:1f:5c": "nokia",
    "00:1f:00": "nokia",
    "00:1e:3b": "nokia",
    "a0:4e:04": "nokia",
    "20:76:8f": "apple",
    "9c:5c:f9": "sony",
    "c0:cc:f8": "apple",
    "80:ed:2c": "apple",
    "e8:b2:ac": "apple",
    "84:89:ad": "apple",
    "98:e7:f5": "huawei",
    "24:bc:f8": "huawei",
    "10:d0:ab": "zte",
    "fc:3f:7c": "huawei",
    "60:83:34": "huawei",
    "84:ad:58": "huawei",
    "90:c7:d8": "zte",
    "5c:70:a3": "lg",
    "34:97:f6": "asus",
    "50:68:0a": "huawei",
    "8c:8e:f2": "apple",
    "f4:0f:24": "apple",
    "84:a1:34": "apple",
    "1c:91:48": "apple",
    "60:08:10": "huawei",
    "ac:04:81": "jia",
    "fc:2d:5e": "zte",
    "ac:61:75": "huawei",
    "7c:11:cb": "huawei",
    "a4:ca:a0": "huawei",
    "44:ba:46": "yi",
    "50:01:d9": "huawei",
    "44:c3:46": "huawei",
    "88:44:77": "huawei",
    "04:75:03": "huawei",
    "68:df:dd": "xiaomi",
    "c4:6a:b7": "xiaomi",
    "fc:64:ba": "xiaomi",
    "20:82:c0": "xiaomi",
    "34:80:b3": "xiaomi",
    "74:51:ba": "xiaomi",
    "64:b4:73": "xiaomi",
    "88:66:39": "huawei",
    "8c:e1:17": "zte",
    "64:13:6c": "zte",
    "00:24:8d": "sony",
    "54:27:6c": "jia",
    "f8:a9:d0": "lg",
    "cc:fa:00": "lg",
    "bc:f5:ac": "lg",
    "00:aa:70": "lg",
    "f0:1c:13": "lg",
    "cc:2d:8c": "lg",
    "34:4d:f7": "lg",
    "c4:9a:02": "lg",
    "00:22:a9": "lg",
    "00:25:e5": "lg",
    "10:f9:6f": "lg",
    "a0:91:c8": "zte",
    "9c:a5:c0": "vivo",
    "a4:71:74": "huawei",
    "d4:a1:48": "huawei",
    "d0:65:ca": "huawei",
    "8c:eb:c6": "huawei",
    "b8:08:d7": "huawei",
    "fc:f1:52": "sony",
    "d8:4f:b8": "lg",
    "c4:08:4a": "nokia",
    "0c:54:b9": "nokia",
    "8c:90:d3": "nokia",
    "34:aa:99": "nokia",
    "70:2e:22": "zte",
    "5c:f7:e6": "apple",
    "a0:d7:95": "apple",
    "cc:08:8d": "apple",
    "f4:1f:88": "zte",
    "7c:cc:1f": "yi",
    "18:75:32": "yi",
    "80:5a:04": "lg",
    "b0:70:2d": "apple",
    "d0:c5:f3": "apple",
    "60:f4:45": "apple",
    "00:b3:62": "apple",
    "f8:62:14": "apple",
    "5c:af:06": "lg",
    "78:c1:a7": "zte",
    "b8:1d:aa": "lg",
    "40:7d:0f": "huawei",
    "50:82:d5": "apple",
    "9c:84:bf": "apple",
    "70:af:24": "lg",
    "04:95:73": "zte",
    "48:bf:6b": "apple",
    "24:5b:a7": "apple",
    "bc:a9:20": "apple",
    "54:e0:61": "yi",
    "1c:da:27": "vivo",
    "34:ce:00": "xiaomi",
    "68:26:2a": "yi",
    "3c:67:8c": "huawei",
    "d0:6f:82": "huawei",
    "84:47:65": "huawei",
    "70:d9:23": "vivo",
    "38:8c:50": "lg",
    "a0:93:47": "oppo",
    "c8:f2:30": "oppo",
    "1c:77:f6": "oppo",
    "e4:47:90": "oppo",
    "d4:50:3f": "oppo",
    "98:6c:5c": "jia",
    "88:d5:0c": "oppo"
};
!function(a) {
    a.OrayBox = a.OrayBox || {},
    a.OrayBox.initDevice = function() {
        OrayBox.init(function() {
            if (a.OrayBox.initHeader(OrayBox.sn),
            -1 !== $.inArray(OrayBox.model, ["P1-2111", "P5-1210", "P5-2210", "ORG-900"]))
                return location.assign("/oraybox/network.html")
        }),
        OrayBox.updateFooterTime(),
        $("#device-form").submit(function() {
            return !1
        });
        var l, s = !1, t = !0, r = [];
        function e() {
            $("#limit-speed-btn").attr("disabled", "disabled"),
            OrayBox.getDevices(function(e) {
                return 0 == e.code && void (0 < e.eth_data.length || 0 < e.wifi_data.length || 0 < e.wifi5g_data.length || 0 < e.guest_wifi_data.length ? (a = {
                    eth: e.eth_data,
                    wifi: e.wifi_data,
                    wifi5g: e.wifi5g_data,
                    guest: e.guest_wifi_data
                },
                OrayBox.getTc(function(u) {
                    return 0 == u.code && void OrayBox.getMacControl(function(p) {
                        if (0 != p.code)
                            return !1;
                        var e, l = [], f = [];
                        $.each(a, function(d, e) {
                            $.each(e, function(e, t) {
                                var i, a = "-" == t.hostname || "" == t.hostname || "*" == t.hostname || "unknow" == t.hostname ? "未知设备" : t.hostname, n = $.trim(t.mac).substr(0, 8), s = (devBrand[n] && devBrand[n],
                                1), o = 0, r = 0, c = 0;
                                t.alias = $.func.html2Escape($.trim(t.alias)),
                                "1" == p["switch"] && (i = [],
                                $.each(p.mac_addrs, function(e, a) {
                                    i.push(a.mac)
                                }),
                                ("0" == p.allow && -1 != $.inArray(t.mac, i) || "1" == p.allow && -1 == $.inArray(t.mac, i)) && (s = 0)),
                                "1" == u.config.base.enabled && $.each(u.config.shaping_list, function(e, a) {
                                    if ("1" == a.enabled && -1 != $.inArray(t.ip, a.address))
                                        return o = 1,
                                        r = h(a.upload),
                                        c = h(a.download),
                                        !1
                                }),
                                -1 === $.inArray(t.mac, f) && (l.push('<tr data-chart="0" data-mac="' + t.mac + '" data-type="' + d + '" data-downspeed="0" data-hostname="' + a + '" \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdata-ip="' + t.ip + '" data-alias="' + t.alias + '" data-allow="' + s + '"> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<a class="link" href="javascript:void(0)" title="' + (t.alias ? t.alias : a) + ' - 点击可修改" data-operate="hostname">' + (t.alias ? t.alias : a) + '</a> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<input style="width:100px;display:none;" name="hostname" value="' + (t.alias ? t.alias : a) + '" type="text" class="fm-text" maxlength="20" /> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td>' + ("wifi" == d ? "无线连接(2.4G)" : "wifi5g" == d ? "无线连接(5G)" : "guest" == d ? "无线连接(访客)" : "有线连接") + "</td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td>" + t.mac + "</td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td>" + t.ip + '</td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td><div class="speed-box" style="line-height:1.2;">' + (s ? '<p><i class="iconfont">&#xe64d;</i>0KB/s</p><p><i class="iconfont">&#xe64e;</i>0KB/s</p>' : "---") + '</div></td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td><div class="flow-box" style="line-height:1.2;"><a class="icon-flow" data-operate="showflow" href="javascript:void(0)" style="display: inline-block;vertical-align: top;margin-top: 2px;"></a><div style="display: inline-block;vertical-align: top;"><p><i class="iconfont">&#xe64d;</i><span class="send">0MB</span></p><p><i class="iconfont">&#xe64e;</i><span class="recv">0MB</span></p></div></div></td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td>' + ("guest" != d ? '<div class="limit-box" style="line-height:1.2;">' + (s ? '<a href="javascript:void(0);" data-switch="' + o + '" data-up="' + r + '" data-down="' + c + '" data-operate="speed-limit" class="link">' + (o ? "<p>上限：" + r + "KB/s</p><p>下限：" + c + "KB/s</p>" : "无限制") + "</a>" : "无限制") + "</div>" : "-") + '</td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<td align="right"><a href="javascript:void(0);" data-operate="maccontrol" class="btn-switch ' + (s ? "btn-switch-on" : "btn-switch-off") + '"><span></span></a></td> \\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</tr>'),
                                f.push(t.mac))
                            })
                        }),
                        $("#devices-list").html(l.join("")),
                        $("#limit-speed-btn").removeAttr("disabled"),
                        0 < $.trim($("#keyword").val()).length && i(),
                        OrayBox.resize(),
                        t && (t = !1,
                        m(),
                        OrayBox.getFlow(function(e) {
                            return 0 == e.code && void $.each(e.datas, function(e, a) {
                                var t = $('#devices-list tr[data-chart="0"][data-ip="' + a.ip + '"]');
                                if (t.size() <= 0)
                                    return !0;
                                var i = a.send_bytes
                                  , n = a.recv_bytes
                                  , s = "MB"
                                  , o = "MB";
                                0 < i && (i = (i / 1024 / 1024).toFixed(2)),
                                1024 < i && (i = (i / 1024).toFixed(2),
                                s = "GB"),
                                0 < n && (n = (n / 1024 / 1024).toFixed(2)),
                                1024 < n && (n = (n / 1024).toFixed(2),
                                o = "GB"),
                                t.find("div.flow-box .send").html(i + s),
                                t.find("div.flow-box .recv").html(n + o)
                            })
                        }, e))
                    })
                })) : ($("#devices-list").html('<tr class="nodevice" id="empty-device"><td colspan="8"><div style="padding: 80px 0;text-align:center;"><p>还没有设备接入该设备！</p></div></td></tr>'),
                OrayBox.resize()));
                var a
            })
        }
        function c(a, t, i) {
            OrayBox.request("tfs_one_day_get", {
                src_ip: a
            }, function(e) {
                var s = [];
                s.push("Day,上行流量,下行流量"),
                0 == e.code && (0 < e.datas[0].traffic.length ? $.each(e.datas[0].traffic, function(e, a) {
                    var t = a.time.slice(0, 5)
                      , i = a.recv_bytes;
                    0 < i && (i = (i / 1024 / 1024).toFixed(2));
                    var n = a.send_bytes;
                    0 < n && (n = (n / 1024 / 1024).toFixed(2)),
                    s.push(t + "," + n + "," + i)
                }) : s.push(",,")),
                s = s.join("\\n"),
                "function" == typeof i && i(a, t, s)
            })
        }
        function i() {
            var i = $.trim($("#keyword").val());
            $("#devices-list #empty-device").remove(),
            i.length <= 0 ? ($("#devices-list tr").show(),
            $("#search-form .if-search").html("&#xe62e;").data("isclear", 0)) : ($("#search-form .if-search").html("&#xe61f;").data("isclear", 1),
            i = i.toLowerCase(),
            $('#devices-list tr[data-chart="0"]').each(function() {
                var e = $(this).attr("data-ip")
                  , a = $(this).attr("data-hostname")
                  , t = $(this).attr("data-alias")
                  , a = a.toLowerCase()
                  , t = t.toLowerCase();
                e.indexOf(i) < 0 && t.indexOf(i) < 0 && a.indexOf(i) < 0 ? ($(this).hide(),
                $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').size() && $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').hide()) : ($(this).show(),
                $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').size() && $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').show())
            })),
            $("#devices-list tr:visible").size() <= 0 && ($('#devices-list tr[data-chart="0"]').hide(),
            $("#devices-list").append('<tr class="nodevice" id="empty-device"><td colspan="8"><div style="padding: 80px 0;text-align:center;"><p>无查询到相关设备！</p></div></td></tr>'))
        }
        function m(e) {
            OrayBox.getSpeed(function(e) {
                return 0 == e.code && void $.each(e.lan_data, function(e, a) {
                    var t = $('#devices-list tr[data-chart="0"][data-ip="' + a.ip + '"]')
                      , i = "---";
                    if (t.size() <= 0)
                        return !0;
                    1 == t.data("allow") && (i = '<p><i class="iconfont">&#xe64d;</i>' + a.up + 'KB/s</p><p><i class="iconfont">&#xe64e;</i>' + a.down + "KB/s</p>"),
                    t.attr("data-downspeed", a.down).find(".speed-box").html(i)
                })
            }, e)
        }
        function o(e) {
            var a = 0;
            return e = e.split("."),
            a = 256 * Number(e[0]) * 256 * 256 + 256 * Number(e[1]) * 256 + 256 * Number(e[2]) + Number(e[3]),
            a >>>= 0
        }
        function d() {
            $('#devices-list tr[data-chart="0"]').each(function() {
                var e = $(this).data("ip");
                $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').size() && $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').insertAfter($('tr[data-ip="' + e + '"][data-chart="0"]'))
            })
        }
        function h(e) {
            return /^([\\d.+e]+)(mbps|kbps|mbit|kbit)*$/.exec(e)[1]
        }
        e(),
        l = $("#speedlimit-win").window({
            width: 550,
            closeCls: "close",
            draggable: !0,
            drag: {
                handle: ".window-header",
                not: ":input,img,a",
                distance: 5,
                dragging: function(e) {
                    e.offsetX < 0 && (e.offsetX = 0),
                    e.offsetY < 0 && (e.offsetY = 0)
                }
            },
            center: !1
        }),
        $("#search-form .if-search").click(function() {
            $(this).data("isclear") && ($('#search-form [name="keyword"]').val(""),
            $("#search-form .if-search").html("&#xe62e;").data("isclear", 0)),
            $("#search-form").submit()
        }),
        $("#keyword").bind("blur, keyup", function() {
            i()
        }),
        $("#search-form").submit(function() {
            return i(),
            !1
        }),
        $('#search-form a[data-act="refresh"]').click(function() {
            $("#devices-list").html('<tr class="nodevice"><td colspan="8"><div style="padding: 80px 0;text-align:center;"><p><img src="./images/loading_big.gif" /></p><p>正在加载数据，请稍候...</p></div></td</tr>'),
            e()
        }),
        $("#limit-speed-btn").click(function() {
            return !!OrayBox.checkLimitPrivilege("oraytc_set") && ($('#speedlimit-form input[name="up"]').val("0"),
            $('#speedlimit-form input[name="down"]').val("0"),
            $('#speedlimit-form input[name="switch"]').val("0"),
            $('#speedlimit-form input[name="batch"]').val("1"),
            $('#speedlimit-form [data-operate="switch"]').removeClass("btn-switch-on").addClass("btn-switch-off"),
            $('#speedlimit-form input[name="up"], #speedlimit-form input[name="down"]').attr("disabled", "disabled"),
            void l.show())
        }),
        $("#device-form a[data-searchtype]").click(function() {
            "wifi" == $(this).data("searchtype") ? $(this).hasClass("wifi-selected") ? $(this).removeClass("wifi-selected").removeClass("selected").addClass("wifi-unselected") : $(this).removeClass("wifi-unselected").addClass("wifi-selected").addClass("selected") : $(this).hasClass("wire-selected") ? $(this).removeClass("wire-selected").removeClass("selected").addClass("wire-unselected") : $(this).removeClass("wire-unselected").addClass("wire-selected").addClass("selected"),
            $("#devices-list #empty-device").remove(),
            $("#device-form a[data-searchtype]").each(function() {
                "eth" == $(this).data("searchtype") && ($(this).hasClass("wire-selected") ? $('#devices-list tr[data-chart="0"][data-type="eth"]').show() : $('#devices-list tr[data-chart="0"][data-type="eth"]').hide()),
                "wifi" == $(this).data("searchtype") && ($(this).hasClass("wifi-selected") ? $('#devices-list tr[data-chart="0"][data-type^="wifi"]').show() : $('#devices-list tr[data-chart="0"][data-type^="wifi"]').hide())
            }),
            $('#devices-list tr[data-chart="0"]').each(function() {
                var e = $(this).data("ip");
                $('#devices-list tr[data-ip="' + e + '"][data-chart="0"]:visible').size() ? $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').show() : $('#devices-list tr[data-ip="' + e + '"][data-chart="1"]').hide()
            }),
            $("#devices-list tr:visible").size() <= 0 && ($('#devices-list tr[data-chart="0"]').hide(),
            $("#devices-list").append('<tr class="nodevice" id="empty-device"><td colspan="8"><div style="padding: 80px 0;text-align:center;"><p>无检索到相关设备！</p></div></td></tr>'))
        }),
        $("#device-form a[data-sortopt]").click(function() {
            var n, e = $(this).data("sorttype");
            "desc" == $(this).data("sort") ? $(this).data("sort", "asc").removeClass("sort-desc").addClass("sort-asc") : $(this).data("sort", "desc").removeClass("sort-asc").addClass("sort-desc"),
            n = e,
            $("#device-form a[data-sortopt]").each(function() {
                var e = $(this).data("sorttype")
                  , a = $(this).data("sort");
                if (void 0 !== n && e != n)
                    return !0;
                switch (e) {
                case "ip":
                    var t = [];
                    $('#devices-list tr[data-chart="0"]').each(function() {
                        t.push($(this).data("ip"))
                    }),
                    "desc" == a ? t.sort(function(e, a) {
                        return o(e) > o(a) ? 1 : -1
                    }) : t.sort(function(e, a) {
                        return o(e) < o(a) ? 1 : -1
                    }),
                    function(e) {
                        for (var a = $("#devices-list"), t = 0; t < e.length; t++) {
                            var i = e[t]
                              , n = a.find('tr[data-ip="' + i + '"][data-chart="0"]').clone();
                            a.find('tr[data-ip="' + i + '"][data-chart="0"]').remove(),
                            n.prependTo("#devices-list")
                        }
                        d()
                    }(t);
                    break;
                case "speed":
                    var i = [];
                    $('#devices-list tr[data-chart="0"]').each(function() {
                        var e = 0;
                        $(this).attr("data-downspeed") !== undefined && (e = $(this).attr("data-downspeed")),
                        i.push(e)
                    }),
                    "desc" == a ? i.sort(function(e, a) {
                        return a < e ? 1 : -1
                    }) : i.sort(function(e, a) {
                        return e < a ? 1 : -1
                    }),
                    function(e) {
                        for (var a = $("#devices-list"), t = 0; t < e.length; t++) {
                            var i = e[t]
                              , n = a.find('tr[data-downspeed="' + i + '"][data-chart="0"]').clone();
                            a.find('tr[data-downspeed="' + i + '"][data-chart="0"]').remove(),
                            n.prependTo("#devices-list")
                        }
                        d()
                    }(i)
                }
            })
        }),
        $("#devices-list a[data-operate]").live("click", function() {
            var e = $(this).data("operate")
              , a = $(this);
            switch (e) {
            case "speed-limit":
                if (!OrayBox.checkLimitPrivilege("oraytc_set"))
                    return !1;
                var t = a.data("up")
                  , i = a.data("down")
                  , n = a.data("switch")
                  , s = a.parents("tr").data("ip")
                  , o = a.parents("tr").attr("data-hostname")
                  , r = $("#speedlimit-form");
                r.find('input[name="up"]').val(t),
                r.find('input[name="down"]').val(i),
                r.find('input[name="ip"]').val(s),
                r.find('input[name="comment"]').val(o),
                r.find('input[name="switch"]').val(n),
                r.find('input[name="batch"]').val("0"),
                1 == n ? ($('#speedlimit-form [data-operate="switch"]').removeClass("btn-switch-off").addClass("btn-switch-on"),
                $('#speedlimit-form input[name="up"], #speedlimit-form input[name="down"]').removeAttr("disabled")) : ($('#speedlimit-form [data-operate="switch"]').removeClass("btn-switch-on").addClass("btn-switch-off"),
                $('#speedlimit-form input[name="up"], #speedlimit-form input[name="down"]').attr("disabled", "disabled")),
                l.show();
                break;
            case "hostname":
                if (!OrayBox.checkLimitPrivilege("lan_device_alias_set"))
                    return !1;
                a.hide(),
                a.next().show(),
                a.next().focus();
                break;
            case "maccontrol":
                if (!OrayBox.checkLimitPrivilege("mac_control_set"))
                    return !1;
                if (!confirm("您确定要修改此设备的上网连接吗？"))
                    return !1;
                var c = a.parents("tr").data("mac")
                  , d = 1 == (d = parseInt(a.parents("tr").data("allow"))) ? 0 : 1;
                OrayBox.setMacControl(function(e) {
                    var s;
                    0 == e.code && (OrayBox.showMessage("设置上网控制成功", !0),
                    a.attr("class", "btn-switch " + (d ? "btn-switch-on" : "btn-switch-off")).parents("tr").data("allow", d),
                    m(1),
                    0 == (s = $('#devices-list tr[data-chart="0"][data-mac="' + c + '"]')).data("allow") ? s.find(".limit-box").html("无限制") : OrayBox.getTc(function(e) {
                        if (0 != e.code)
                            return !1;
                        var t = 0
                          , i = 0
                          , n = 0;
                        "1" == e.config.base.enabled && $.each(e.config.shaping_list, function(e, a) {
                            if ("1" == a.enabled && -1 != $.inArray(s.data("ip"), a.address))
                                return t = 1,
                                i = h(a.upload),
                                n = h(a.download),
                                !1
                        }),
                        s.find(".limit-box").html('<a href="javascript:void(0);" data-switch="' + t + '" data-up="' + i + '" data-down="' + n + '" data-operate="speed-limit" class="link">' + (t ? "<p>上限：" + i + "KB/s</p><p>下限：" + n + "KB/s</p>" : "无限制") + "</a>")
                    }))
                }, c, d)
            }
        }),
        $('#devices-list input[name="hostname"]').live("blur", function() {
            var t = $.trim($(this).val());
            if (t.length <= 0)
                return OrayBox.showMessage("请输入设备名称", !1),
                $(this).focus(),
                !1;
            if (!$.func.isValidDeviceName(t))
                return OrayBox.showMessage("设备名称只支持英文字母、数字、中杠线、下划线、英文点字符", !1),
                $(this).focus(),
                !1;
            var e, a = $(this).parents("tr").attr("data-alias");
            if (t == a)
                return $(this).hide(),
                $(this).prev("a").show(),
                !1;
            if (a.length <= 0 && t == $(this).parents("tr").attr("data-hostname"))
                return $(this).hide(),
                $(this).prev("a").show(),
                !1;
            e = a.length <= 0 ? "create" : "update";
            var i = $(this).parents("tr").attr("data-mac");
            if (s)
                return !1;
            s = !0,
            OrayBox.setAlias(function(e) {
                var a;
                s = !1,
                0 == e.code && (OrayBox.showMessage("设置设备别名成功", !0),
                (a = $('#devices-list tr[data-chart="0"][data-mac="' + i + '"]')).find("input").hide(),
                a.find('a[data-operate="hostname"]').html(t).attr("title", t + " - 点击可修改").show(),
                a.attr("data-alias", t))
            }, e, i, t)
        }).live("keyup", function(e) {
            if (13 == e.which) {
                var t = $.trim($(this).val());
                if (t.length <= 0)
                    return OrayBox.showMessage("请输入设备名称", !1),
                    $(this).focus(),
                    !1;
                if (!$.func.isValidDeviceName(t))
                    return OrayBox.showMessage("设备名称只支持英文字母、数字、中杠线、下划线、英文点字符", !1),
                    $(this).focus(),
                    !1;
                var a, i = $(this).parents("tr").attr("data-alias");
                if (t == i)
                    return $(this).hide(),
                    $(this).prev("a").show(),
                    !1;
                if (i.length <= 0 && t == $(this).parents("tr").attr("data-hostname"))
                    return $(this).hide(),
                    $(this).prev("a").show(),
                    !1;
                a = i.length <= 0 ? "create" : "update";
                var n = $(this).parents("tr").attr("data-mac");
                if (s)
                    return !1;
                s = !0,
                OrayBox.setAlias(function(e) {
                    var a;
                    s = !1,
                    0 == e.code && (OrayBox.showMessage("设置设备别名成功", !0),
                    (a = $('#devices-list tr[data-chart="0"][data-mac="' + n + '"]')).find("input").hide(),
                    a.find('a[data-operate="hostname"]').html(t).attr("title", t + " - 点击可修改").show(),
                    a.attr("data-alias", t))
                }, a, n, t)
            }
        }),
        $('#speedlimit-form [data-operate="switch"]').click(function() {
            $(this).hasClass("btn-switch-off") ? ($(this).removeClass("btn-switch-off").addClass("btn-switch-on"),
            $('#speedlimit-form input[name="switch"]').val(1),
            $("#speedlimit-form input:text").removeAttr("disabled")) : ($(this).removeClass("btn-switch-on").addClass("btn-switch-off"),
            $('#speedlimit-form input[name="switch"]').val(0),
            $("#speedlimit-form input:text").attr("disabled", "disabled"))
        }),
        $("#speedlimit-form").bind("submit", function() {
            var n, e, s, a = $(this), o = a.find('button[type="submit"]'), r = parseInt($.trim(a.find('input[name="up"]').val())), c = parseInt($.trim(a.find('input[name="down"]').val())), d = a.find('input[name="switch"]').val(), p = a.find('input[name="batch"]').val();
            if ("1" == d) {
                if (!r || r <= 0 || 1024e3 < r)
                    return OrayBox.showMessage("请正确输入上传带宽范围[1-1024000]", !1),
                    a.find('input[name="up"]').focus(),
                    !1;
                if (!c || c <= 0 || 1024e3 < c)
                    return OrayBox.showMessage("请正确输入下载带宽范围[1-1024000]", !1),
                    a.find('input[name="down"]').focus(),
                    !1
            }
            if ("1" == p) {
                var t = $("#devices-list tr[data-ip]");
                if (t.length <= 0)
                    return OrayBox.showMessage("当前没有设备接入", !1),
                    !1;
                s = [],
                t.each(function() {
                    n = $(this).attr("data-ip"),
                    e = $(this).attr("data-hostname"),
                    s.push({
                        remark: e,
                        address: [n],
                        upload: r + "kbps",
                        download: c + "kbps",
                        enabled: d
                    })
                })
            } else
                n = $.trim(a.find('input[name="ip"]').val()),
                e = $.trim(a.find('input[name="comment"]').val()),
                s = {
                    remark: e,
                    address: [n],
                    upload: r + "kbps",
                    download: c + "kbps",
                    enabled: d
                };
            return o.attr("disabled", !0),
            OrayBox.showMessage("正在提交数据，请稍等...", !0),
            OrayBox.setTc(function(e) {
                if (0 != e.code)
                    return OrayBox.showMessage("设置IP[" + s.address + "]限速失败 ", !1),
                    !1;
                if (o.attr("disabled", !1),
                OrayBox.showMessage("设置IP限速成功", !0),
                "1" == p)
                    return setTimeout(function() {
                        location.reload()
                    }, 2e3);
                var a = "<p>上限：" + r + "KB/s<p></p>下限：" + c + "KB/s</p>"
                  , t = r
                  , i = c;
                "0" == d && (i = t = 0,
                a = "无限制"),
                $('#devices-list tr[data-ip="' + n + '"]').find('a[data-operate="speed-limit"]').data("up", t).data("down", i).data("switch", d).html(a),
                l.close()
            }, s),
            !1
        }),
        $('#devices-list a[data-operate="showflow"]').live("click", function() {
            if ($(this).hasClass("on"))
                return $(this).parents("tr").next().remove(),
                $(this).removeClass("on"),
                OrayBox.resize(),
                !1;
            var e = $(this).parents("tr").data("ip")
              , a = e.replace(/\\./g, "-");
            $('<tr data-ip="' + e + '" data-chart="1"><td colspan="8"><div id="flow-' + a + '" style="width: 100%;height: 200px;"></div></td></tr>').insertAfter($(this).parents("tr")),
            $(this).addClass("on"),
            setTimeout(function() {
                $("#flow-" + a).html('<p style="padding:80px 0;text-align:center;"><img src="./images/loading_big.gif" /></p>'),
                c(e, "flow-" + a, function(e, a, t) {
                    var i, n, s, o;
                    n = a,
                    s = t,
                    o = (i = e).replace(/\\./g, "-"),
                    r[o] = Highcharts.chart(n, {
                        data: {
                            csv: s
                        },
                        chart: {
                            type: "spline"
                        },
                        title: {
                            text: "过去24小时流量（MB）",
                            align: "left",
                            style: {
                                fontSize: "12px"
                            }
                        },
                        xAxis: {
                            tickWidth: 0,
                            labels: !1
                        },
                        yAxis: [{
                            title: {
                                text: null
                            },
                            labels: {
                                align: "left",
                                x: 3,
                                y: 16,
                                format: "{value:.,0f}"
                            },
                            gridLineWidth: 1,
                            showFirstLabel: !1
                        }],
                        legend: {
                            align: "right",
                            verticalAlign: "top",
                            floating: !0,
                            borderWidth: 0,
                            itemStyle: {
                                fontWeight: "normal"
                            }
                        },
                        tooltip: {
                            shared: !0,
                            crosshairs: !0
                        },
                        exporting: {
                            enabled: !1
                        },
                        credits: {
                            enabled: !1
                        },
                        plotOptions: {
                            series: {
                                cursor: "pointer",
                                lineWidth: 1,
                                marker: {
                                    enabled: !1
                                }
                            }
                        },
                        colors: ["#23cf01", "#1eaef5"]
                    }),
                    OrayBox.resize(),
                    setTimeout(function() {
                        c(i, "flow-" + o, function(e, a, t) {
                            !function n(e, a, t) {
                                {
                                    var i;
                                    $("#" + a).size() && (i = e.replace(/\\./g, "-"),
                                    r[i].update({
                                        data: {
                                            csv: t
                                        }
                                    }),
                                    setTimeout(function() {
                                        c(e, "flow-" + i, function(e, a, t) {
                                            n(e, a, t)
                                        })
                                    }, 3e3))
                                }
                            }(e, a, t)
                        })
                    }, 3e3)
                })
            }, 200)
        })
    }
    ,
    a.OrayBox.getDevices = function(e) {
        OrayBox.request("lan_device_get", {}, e)
    }
    ,
    a.OrayBox.getMacControl = function(e) {
        OrayBox.request("mac_control_get", {}, e)
    }
    ,
    a.OrayBox.getTc = function(e) {
        OrayBox.request("oraytc_get", {}, e)
    }
    ,
    a.OrayBox.getSpeed = function(a, t) {
        if (0 === (t = "number" == typeof t ? t : -1))
            return !1;
        0 < t && t--,
        OrayBox.request("flowrate_ip_get", {}, function(e) {
            "function" == typeof a && a(e),
            setTimeout(function() {
                OrayBox.getSpeed(a, t)
            }, 1e3)
        })
    }
    ,
    a.OrayBox.getFlow = function(a, t) {
        if (0 === (t = "number" == typeof t ? t : -1))
            return !1;
        0 < t && t--,
        OrayBox.request("tfs_one_day_get", {
            total_only: 1
        }, function(e) {
            "function" == typeof a && a(e),
            setTimeout(function() {
                OrayBox.getFlow(a, t)
            }, 6e4)
        })
    }
    ,
    a.OrayBox.setMacControl = function(a, s, o) {
        OrayBox.getMacControl(function(t) {
            var i, n, e;
            0 == t.code && (i = {},
            n = [],
            t.mac_addrs.push({
                mac: s
            }),
            $.each(t.mac_addrs, function(e, a) {
                1 == o ? 1 == t.allow && void 0 === i[a.mac] ? (i[a.mac] = 1,
                n.push(a.mac)) : 0 == t.allow && a.mac != s && n.push(a.mac) : 1 == t.allow && a.mac != s ? n.push(a.mac) : 0 == t.allow && void 0 === i[a.mac] && (i[a.mac] = 1,
                n.push(a.mac))
            }),
            e = {
                "switch": 1,
                allow: t.allow,
                mac_addrs: n.join("|")
            },
            OrayBox.request("mac_control_set", e, a, "POST"))
        })
    }
    ,
    a.OrayBox.setAlias = function(e, a, t, i) {
        var n = 1;
        switch (a) {
        case "create":
            n = 0;
            break;
        case "update":
            n = 2;
            break;
        case "delete":
            n = 1
        }
        var s = {
            type: n,
            mac: t,
            alias: i
        };
        OrayBox.request("lan_device_alias_set", s, e, "POST")
    }
    ,
    a.OrayBox.setTc = function(t, o) {
        $.isArray(o) || (o = [o]),
        OrayBox.getTc(function(e) {
            var i, n, s, a;
            0 == e.code && (i = [],
            n = {},
            s = [],
            0 < e.config.shaping_list.length && $.each(e.config.shaping_list, function(e, t) {
                n = t,
                $.each(o, function(e, a) {
                    if (a.address.toString() == t.address.toString())
                        return n = a,
                        s.push(a.address.toString()),
                        !1
                }),
                i.push(n)
            }),
            $.each(o, function(e, a) {
                -1 === $.inArray(a.address.toString(), s) && i.push(a)
            }),
            a = {
                shaping: $.func.stringify(i)
            },
            "0" == e.config.base.enabled && (a.base = $.func.stringify({
                enabled: "1"
            })),
            OrayBox.request("oraytc_set", a, t, "POST"))
        })
    }
}(window),
function(a) {
    a.OrayBox = a.OrayBox || {},
    a.OrayBox.initDiagnose = function() {
        OrayBox.init(function() {
            a.OrayBox.initHeader(OrayBox.sn)
        });
        var n = !1;
        function e() {
            n ? OrayBox.showMessage("正在诊断中，请等待前面的完成之后再进行...", !1, 0) : (n = !0,
            $(".result-wrap .issue-wrapper").html('<p style="padding:30px 0;font-size:18px;text-align:center;vertical-align: middle;height:80px;line-height:80px;"><img src="./images/loading.gif" border="0" style="vertical-align: middle;position:relative;top:-10px;" />正在诊断，请稍候...</p>'),
            $.getJSON("/cgi-bin/oraybox?_api=net_diagnose&randcode=" + Math.random(), function(e) {
                if (e.errors && 0 < e.errors.length) {
                    var a = e.errors;
                    (i = []).push("<strong>发现以下问题</strong>");
                    for (var t = 0; t < a.length; t++)
                        i.push("<dl>"),
                        i.push("<dt>" + function(e) {
                            var a = "未知链路";
                            1 == e ? a = "链路1" : 2 == e ? a = "链路2" : 3 == e ? a = "链路3" : 4 == e && (a = "云管理服务");
                            return a
                        }(a[t].link) + "</dt>"),
                        i.push("<dd>"),
                        i.push('<p class="issue"><i class="iconfont">&#xe756;</i>' + a[t].cause + "</p>"),
                        i.push("</dd>"),
                        i.push("</dl>");
                    $(".result-wrap .issue-wrapper").html(i.join(""))
                } else {
                    var i;
                    (i = []).push("<strong>诊断完毕</strong>"),
                    i.push('<p class="issue" style="padding: 10px 0;color: #0EAB00;">网络没有任何问题，可以连接到Internet</p>'),
                    $(".result-wrap .issue-wrapper").html(i.join(""))
                }
                n = !1
            }))
        }
        e(),
        $("#diagnose").click(function() {
            return e(),
            !1
        })
    }
}(window),
function(scope) {
    scope.OrayBox = scope.OrayBox || {},
    scope.OrayBox.initGuide = function() {
        var waySelect = $("#way_1").select({
            inputClass: "fm-text",
            searchable: !1,
            inputable: !1
        }), waySelect2 = $("#way_2").select({
            inputClass: "fm-text",
            searchable: !1,
            inputable: !1
        }), spareModeSelect, tipsWin = $("#tips-window").window({
            closeCls: "close",
            draggable: !0,
            drag: {
                handle: ".window-header",
                not: ":input,img,a",
                distance: 5,
                dragging: function(e) {
                    e.offsetX < 0 && (e.offsetX = 0),
                    e.offsetY < 0 && (e.offsetY = 0)
                }
            },
            center: !0,
            blankCls: ".window-wrapper"
        }), ssidSelect, loadingWifiList = !1, is3GNetwork = !1, x1SettingTips = null, linkStatusInterval = {}, apnAuthSelect1, apnModesSelect1, wifi = {
            ssid: "OrayBox",
            pwd: ""
        }, has5GWifi = !1, staWifiList = [], scanWifiMap = {}, isWan2lan = !1, form = $("#network-form"), button = $("#network-btn"), networkSetTask = OrayBox.sortTask(), lastSubmit = [], _ssidSelect, _apnAuthSelect, _apnModesSelect;
        function _initFormData() {
            var e;
            window.sessionStorage && (e = window.sessionStorage.getItem("_network_form_data")),
            e && _loadData(e)
        }
        function _loadData(jsonStr) {
            var obj = eval("(" + jsonStr + ")"), key, value, tagName, type, arr, x;
            for (x in obj)
                key = x,
                value = obj[x],
                $("[name='" + key + "'],[name='" + key + "[]']").each(function() {
                    tagName = $(this)[0].tagName,
                    type = $(this).attr("type"),
                    "INPUT" === tagName && "radio" !== type && "checkbox" !== type && $(this).val(value)
                })
        }
        function _leavePage() {
            var e, t;
            window.sessionStorage && (e = window.sessionStorage,
            t = {},
            $.each(form.serializeArray(), function(e, a) {
                t[a.name] = a.value
            }),
            e.setItem("_network_form_data", JSON.stringify(t)))
        }
        function compareVersion(e, a, t) {
            var i = toNum(e)
              , n = toNum(a)
              , s = !1;
            switch (t) {
            case "=":
                s = i == n;
                break;
            case ">=":
                s = i == n || n < i;
                break;
            case ">":
                s = n < i;
                break;
            case "<":
                s = i < n;
                break;
            case "<=":
                s = i == n || i < n
            }
            return s
        }
        function toNum(e) {
            for (var a = e.split("."), t = ["", "0", "00", "000", "0000"].reverse(), i = 0; i < a.length; i++) {
                var n = a[i].length;
                a[i] = t[n] + a[i]
            }
            return a.join("")
        }
        function _initApn() {
            $("#way_1").append('<option value="6">APN（4G）</option>'),
            waySelect.refresh(),
            $("#apn-btn_1").click(function() {
                $(this).prop("checked") ? ($("#apn-options_1").show(),
                $(".scroll-y").addClass("active")) : ($("#apn-options_1").hide(),
                $(".scroll-y").removeClass("active")),
                OrayBox.resize()
            }),
            apnAuthSelect1 = form.find('select[name="apn_auth_1"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "认证方式"
            }),
            apnModesSelect1 = form.find('select[name="apn_modes_1"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "网络模式"
            })
        }
        function _initReserveNet() {
            var a, t;
            -1 === $.inArray(OrayBox.model, ["X1-1111", "X1-2111", "ORH-180", "ORG-220", "ORH-100", "X6-1293P", "X6-2293P", "X6-3293P", "A500", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "V1000", "V2000-1260", "V3000-1460", "ORG-1100"]) && ($("#b_show-tipswin").click(function() {
                return tipsWin.show(),
                !1
            }),
            $("#b_show-more-set").show(),
            $("#b_show-more-set").click(function() {
                $("#b-service-name").show(),
                $("#b_close-more-set").show(),
                $("#b_show-more-set").hide()
            }),
            $("#b_close-more-set").click(function() {
                $("#b-service-name").hide(),
                $("#b_close-more-set").hide(),
                $("#b_show-more-set").show()
            }),
            a = null,
            $("#set-reserve-entry").show(),
            OrayBox.getWanSpare(function(e) {
                0 === e.code ? (a = e.mod,
                "usb" == (t = e).mod ? $('#way_1 option[value="5"]').remove() : "sim" == e.mod ? $('#way_1 option[value="6"]').remove() : "wifi_sta" == e.mod ? $('#way_1 option[value="4"]').remove() : ($('#way_1 option[value="1"]').remove(),
                $('#way_1 option[value="2"]').remove(),
                $('#way_1 option[value="3"]').remove()),
                waySelect.refresh(),
                $('#network-info [data-name="reserve-network_1"]').html('已设置<a class="link marl10" href="javascript:void(0)" data-act="show-set-reserve">查看详情</a><a class="link marl10" href="javascript:void(0)" data-act="set-reserve" data-op="3">取消设置</a>')) : $('#network-info [data-name="reserve-network_1"]').html('未设置<a class="link marl10" href="javascript:void(0)" data-act="show-set-reserve">立即设置</a>')
            }),
            $('[data-act="show-set-reserve"]').live("click", function() {
                if ($("#setting-info").hide(),
                $("#network-info").hide(),
                $("#reserve-setting-info").show(),
                $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300S-1151G", "X4-1123G", "X4-2123G", "X4C-1141G", "X4C-2131G", "E3-1141"]) <= -1 && $('#spare_mode option[value="sim"]').remove(),
                -1 != $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300S-1151G", "X4-1123G", "X4-2123G", "X4C-1141G", "X4C-2131G", "E3-1141"]) && $('#spare_mode option[value="usb"]').remove(),
                -1 != $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G5-1250", "G5-2250", "A500", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "P1-2111", "P5-1210", "P5-2210", "ORG-220", "ORG-900", "ORG-1100"]) && $('#spare_mode option[value="wifi_sta"]').remove(),
                !spareModeSelect) {
                    switch (spareModeSelect = $("#spare_mode").select({
                        inputClass: "fm-text",
                        searchable: !1,
                        inputable: !1
                    }),
                    a && spareModeSelect.select(a),
                    $("#spare_mode").val()) {
                    case "usb":
                        $("#reserve-setting-info .usb input").val("4G"),
                        $("#reserve-setting-info .usb").show();
                        break;
                    case "pppoe":
                        $("#reserve-setting-info .pppoe").show(),
                        $('input[name="b_account"]').val(t && t.user ? t.user : ""),
                        $('input[name="b_password"]').val(t && t.pwd ? t.pwd : ""),
                        $('input[name="b_service"]').val(t && t.service ? t.service : "");
                        break;
                    case "static":
                        $("#reserve-setting-info .static").show(),
                        $('input[name="b_ip"]').val(t && t.ip ? t.ip : ""),
                        $('input[name="b_mask"]').val(t && t.mask ? t.mask : ""),
                        $('input[name="b_gw"]').val(t && t.gateway ? t.gateway : "");
                        break;
                    case "wifi_sta":
                        $("#reserve-setting-info .wifi_sta").show(),
                        _initReserveStaWifi(),
                        t && t.sta_wifi && (t.sta_wifi.ssid && form.find('input[name="b_ssid"]').val(t.sta_wifi.ssid),
                        t.sta_wifi.key && form.find('input[name="b_ssid_pwd"]').val(t.sta_wifi.key),
                        $('#reserve-setting-info input[name="b_wifi_type"][value="' + t.sta_wifi.wifi_type + '"]').attr("checked", "checked"));
                        break;
                    case "sim":
                        $("#reserve-setting-info .sim").show(),
                        _initReserveSim(),
                        t && t.user && form.find('input[name="b_apn_user"]').val(t.user),
                        t && t.pwd && form.find('input[name="b_apn_pwd"]').val(t.pwd),
                        t && t.device && form.find('input[name="b_apn_device"]').val(t.device),
                        t && t.apn && form.find('input[name="b_apn_apn"]').val(t.apn),
                        t && t.pincode && form.find('input[name="b_apn_gw"]').val(t.pincode),
                        t && t.auth && _apnAuthSelect.select(t.auth),
                        t && t.modes && _apnModesSelect.select(t.modes),
                        t && t.delay && form.find('input[name="b_apn_delay"]').val(t.delay),
                        t && t.pdptype && form.find('input[name="b_apn_pdptype"]').val(t.pdptype),
                        t && t.plmn && form.find('input[name="b_apn_plmn"]').val(t.plmn)
                    }
                    OrayBox.resize(),
                    $("#spare_mode").change(function() {
                        switch (this.value) {
                        case "dhcp":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "usb":
                            $("#reserve-setting-info .usb input").val("4G"),
                            $("#reserve-setting-info .usb").show(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "pppoe":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").show(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "static":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").show(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "wifi_sta":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").show(),
                            $("#reserve-setting-info .sim").hide(),
                            _initReserveStaWifi();
                            break;
                        case "sim":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").show(),
                            _initReserveSim()
                        }
                        OrayBox.resize()
                    })
                }
            }),
            $('[data-act="renetwork"]').click(function() {
                $("#reserve-setting-info").hide(),
                $("#setting-info").hide(),
                $("#network-info").show()
            }),
            $('[data-act="set-reserve"]').live("click", function() {
                var e = $(this)
                  , a = e.attr("data-op");
                e.attr("disabled", "disabled");
                var t, i, n, s, o, r, c, d, p, l, f = $('select[name="spare_mode"]').val(), u = {
                    op: a,
                    mod: f
                };
                if (3 != a)
                    switch (f) {
                    case "pppoe":
                        u.user = $('input[name="b_account"]').val(),
                        u.pwd = $('input[name="b_password"]').val(),
                        u.service = $('input[name="b_service"]').val();
                        break;
                    case "static":
                        u.ip = $('input[name="b_ip"]').val(),
                        u.mask = $('input[name="b_mask"]').val(),
                        u.gateway = $('input[name="b_gw"]').val();
                        break;
                    case "wifi_sta":
                        var m = 0
                          , m = $("#reserve-setting-info .scan-box:visible").size() ? $.trim(_ssidSelect.val()) : $.trim(form.find('input[name="b_ssid"]').val())
                          , h = form.find('input[name="b_wifi_type"]:checked').val();
                        scanWifiMap[m] && (h = "wifi_scan_5g" === scanWifiMap[m].type ? "1" : "0");
                        var w = $.trim(form.find('input[name="b_ssid_pwd"]:not([disabled])').val());
                        u.sta_ssid = m,
                        u.wifi_type = h,
                        u.sta_bssid = scanWifiMap[m] ? scanWifiMap[m].mac : "",
                        u.sta_encryption = scanWifiMap[m] ? scanWifiMap[m].encryption : 0 < w.length ? "WPA2" : "none",
                        u.sta_channel = scanWifiMap[m] ? scanWifiMap[m].channel : "auto",
                        u.sta_key = w,
                        u.ap_encryption = "psk2",
                        OrayBox.getWifi(function(e) {
                            0 == e.code && (u.ap_ssid = e.ssid,
                            u.ap_key = e.pwd),
                            _submitReserve(u)
                        }, "1" === u.wifi_type ? "5G" : "2.4G");
                        break;
                    case "sim":
                        $("#b_apn-btn").prop("checked") && (t = $.trim(form.find('input[name="b_apn_user"]').val()),
                        i = $.trim(form.find('input[name="b_apn_pwd"]').val()),
                        n = $.trim(form.find('input[name="b_apn_device"]').val()),
                        s = $.trim(form.find('input[name="b_apn_apn"]').val()),
                        o = $.trim(form.find('input[name="b_apn_gw"]').val()),
                        r = _apnAuthSelect.val(),
                        c = _apnModesSelect.val(),
                        d = $.trim(form.find('input[name="b_apn_delay"]').val()),
                        p = $.trim(form.find('input[name="b_apn_pdptype"]').val()),
                        l = $.trim(form.find('input[name="b_apn_plmn"]').val()),
                        "auto" === c && (c = ""),
                        0 < t.length && (u.user = t),
                        0 < i.length && (u.pwd = i),
                        0 < n.length && (u.device = n),
                        0 < s.length && (u.apn = s),
                        0 < o.length && (u.pincode = o),
                        0 < r.length && (u.auth = r),
                        0 < c.length && (u.modes = c),
                        0 < d.length && (u.delay = d),
                        0 < p.length && (u.pdptype = p),
                        0 < l.length && (u.plmn = l))
                    }
                ("wifi_sta" != f || "wifi_sta" == f && 3 == a) && _submitReserve(u)
            }))
        }
        function _submitReserve(a) {
            OrayBox.setWanSpare(function(e) {
                return 0 !== e.code ? OrayBox.showMessage(("1" === a.op ? "设置" : "取消") + "备用网络失败", !1, 0) : void OrayBox.checkStatusV2(function() {
                    OrayBox.showMessage(("1" === a.op ? "设置" : "取消") + "备用网络成功", !0),
                    OrayBox.showNotify("", !1),
                    setTimeout(function() {
                        location.assign(location.href)
                    }, 2e3)
                }, !0)
            }, a)
        }
        function _initReserveSim() {
            "object" != typeof _apnAuthSelect && ($("#b_apn-btn").click(function() {
                $(this).prop("checked") ? $("#b_apn-options").show() : $("#b_apn-options").hide(),
                OrayBox.resize()
            }),
            _apnAuthSelect = form.find('select[name="b_apn_auth"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "认证方式"
            }),
            _apnModesSelect = form.find('select[name="b_apn_modes"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "网络模式"
            }))
        }
        function _initReserveStaWifi() {
            "object" != typeof _ssidSelect && (_ssidSelect = $("#b_ssid").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }),
            has5GWifi && $("#reserve-setting-info .wifi-type").show(),
            $("#b_show_pwd").click(function() {
                var e;
                this.checked ? (e = $('input[name="b_ssid_pwd"][type="password"]').val(),
                $('input[name="b_ssid_pwd"][type="password"]').attr("disabled", "disabled").hide(),
                $('input[name="b_ssid_pwd"][type="text"]').removeAttr("disabled").val(e).show()) : (e = $('input[name="b_ssid_pwd"][type="text"]').val(),
                $('input[name="b_ssid_pwd"][type="text"]').attr("disabled", "disabled").hide(),
                $('input[name="b_ssid_pwd"][type="password"]').removeAttr("disabled").val(e).show())
            }),
            $("#reserve-setting-info a[data-opt]").click(function() {
                var e = $(this).data("opt");
                "rescan" == e ? _reserveScanWifi() : "manual-entry" == e ? ($("#reserve-setting-info .manual-entry").show(),
                $("#reserve-setting-info .manual-entry input").removeAttr("disabled"),
                $("#b_ssid_mac, #b_ssid_encryption").val(""),
                $(this).parent().hide(),
                _ssidSelect.disabled(),
                has5GWifi && $("#reserve-setting-info .wifi-type").show()) : "auto-scan" == e && ($("#reserve-setting-info .manual-entry").hide(),
                $("#reserve-setting-info .wifi-type").hide(),
                $("#reserve-setting-info .manual-entry input").attr("disabled", "disabled"),
                $("#reserve-setting-info .scan-box").show(),
                _reserveScanWifi())
            }),
            $('select[name="b_ssid"]').change(function() {
                var e = this.value
                  , a = $(this).find('option[value="' + e + '"]').attr("data-mac")
                  , t = $(this).find('option[value="' + e + '"]').attr("data-encryption")
                  , i = $(this).find('option[value="' + e + '"]').attr("data-channel");
                $('#reserve-setting-info input[name="b_ssid_mac"]').val(a),
                $('#reserve-setting-info input[name="b_ssid_encryption"]').val(t),
                $('#reserve-setting-info input[name="b_ssid_channel"]').val(i),
                _ssidSelect.select(e)
            }))
        }
        function _reserveScanWifi() {
            var d = $('select[name="b_ssid"]');
            loadingWifiList = !0;
            var p = $('#reserve-setting-info a[data-act="set-reserve"]');
            OrayBox.showMessage("正在扫描WIFI列表，请耐心等待...", !0, 0),
            p && p.attr("disabled", !0),
            d.hide(),
            $('input[name="b_ssid_pwd"]').css({
                "border-top": "1px solid #e1e1e1"
            }),
            $('#reserve-setting-info [data-opt="rescan"], #reserve-setting-info [data-opt="manual-entry"]').hide(),
            d.parent().find("label.loading-tips").append('&nbsp;&nbsp;<img src="./images/loading_160421.gif" style="vertical-align:middle;" />&nbsp;正在扫描WIFI列表...').show(),
            OrayBox.getWifiScan(function(e) {
                if (_initScanWifi(e),
                loadingWifiList = !1,
                OrayBox.showMessage("", !0),
                staWifiList.length <= 0)
                    return $("#reserve-setting-info .loading-tips").html("抱歉，没有扫描到WIFI！"),
                    !1;
                for (var a = [], t = 0, i = staWifiList.length; t < i; t++) {
                    var n, s, o, r, c = staWifiList[t];
                    "" !== c && (s = "none" != (n = scanWifiMap[c].encryption) && "" != n ? "/oraybox/images/haspwd_" : "/oraybox/images/nopwd_",
                    o = parseInt(scanWifiMap[c].signal, 10),
                    s += 0 <= (o = Math.abs(o)) && o <= 55 ? "1.png" : 55 < o && o <= 70 ? "2.png" : 70 < o && o <= 85 ? "3.png" : "4.png",
                    r = "",
                    "wifi_scan_5g" === scanWifiMap[c].type && (r = "/oraybox/images/5g.png"),
                    a.push('<option value="' + scanWifiMap[c].ssid + '" data-mac="' + scanWifiMap[c].mac + '" data-str="' + s + '" data-channel="' + scanWifiMap[c].channel + '" data-encryption="' + n + '" data-scan="' + scanWifiMap[c].type + '" data-suffix="' + r + '">' + scanWifiMap[c].ssid + "</option>"))
                }
                d.html(a.join("")),
                "object" == typeof _ssidSelect ? (_ssidSelect.refresh(!0),
                _ssidSelect.enabled(),
                _ssidSelect.selectByIndex(0)) : (d.show(),
                _ssidSelect.enabled()),
                $('input[name="b_ssid_pwd"]').css({
                    "border-top": "none"
                }),
                $('#reserve-setting-info [data-opt="rescan"], #reserve-setting-info [data-opt="manual-entry"]').show(),
                $("#reserve-setting-info label.loading-tips").empty().hide(),
                p && p.removeAttr("disabled")
            })
        }
        function _initNetInfo() {
            $('[data-act="resetting"]').live("click", function() {
                $("#network-info").hide(),
                $("#reserve-setting-info").hide(),
                $("#setting-info").show(),
                isWan2lan && ($("#way_1-1").hide(),
                $("#way_1-3").hide(),
                $("#way_1-4").hide(),
                $("#way_1-5").hide())
            }),
            $('[data-act="switch_connect"]').live("click", function() {
                var a = $(this).data("op")
                  , t = $(this).data("ether");
                OrayBox.setInterfaceControl(function(e) {
                    return 0 !== e.code ? OrayBox.showMessage(("connect" === a ? "连接" : "断开") + "拨号失败", !1, 0) : "connect" === a ? (OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/pppoe_ing.gif" border="0" width="220" height="58" /></p>', '<p style="font-size:18px;">正在拨号，请稍候...</p>', '<p style="margin-top: 10px"><a class="link close" href="javascript:void(0);" data-act="switch_connect" data-op="disconnect" data-ether="' + t + '" style="margin-top: 40px;">停止拨号</a></p>'].join(""), !0),
                    OrayBox.isStopPending = !1,
                    OrayBox.checkInterfaceDump(function(e) {
                        var a = [];
                        e.result.up ? (a.push('<p><span class="iconfont" style="font-size:64px;color: #1AFA29;">&#xe624;</span></p>'),
                        a.push('<p style="font-size:18px;">拨号成功</p>')) : (a.push('<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p>'),
                        a.push('<p style="font-size:18px;">拨号失败</p>')),
                        a.push('<a class="btn btn-small close" href="javascript:void(0);" onclick="location.reload()" style="margin-top: 40px;">确定</a>'),
                        OrayBox.showNotify(a.join(""), !0)
                    }, function(e) {
                        OrayBox.showNotify(['<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p>', '<p style="font-size:18px;">拨号失败：' + OrayBox.failCode[e[0].code] + "</p>", '<a class="btn btn-small close" href="javascript:void(0);" data-act="resetting" style="margin-top: 40px;">返回重新设置</a>'].join(""), !0)
                    }, t)) : (OrayBox.isStopPending = !0,
                    void _getLinkStatus(t))
                }, t, a)
            })
        }
        function _initNetWay(e) {
            OrayBox.getInterfaces(function(e) {
                $.each(e, function(a, e) {
                    OrayBox.getDns(function(e) {
                        _initDns(a, e)
                    }, e),
                    _initNet(a)
                }),
                form.bind("submit", function() {
                    return OrayBox.checkLimitPrivilege("wan_set") && _filterForm(form, e) && (networkSetTask.reset(),
                    lastSubmit = [],
                    $.each(e, function(e, a) {
                        var t = $("select[name=way_" + e + "]").val();
                        if (("X1" == OrayBox.type || "P1" == OrayBox.type) && $("#current-way_" + e).val() != t)
                            return _showX1Tips(t, e, a);
                        5 == t ? lastSubmit.push(setUsb3G) : (4 == t ? staWifiSubmit : submitNetwork)(e, a)
                    }),
                    0 < lastSubmit.length && networkSetTask.push(lastSubmit).run()),
                    !1
                }),
                button.click(function() {
                    $(this).attr("disabled") || form.submit()
                }),
                $(document).on("keyup", function(e) {
                    13 != e.keyCode || $("#network-btn").attr("disabled") || form.submit()
                }),
                form.show(),
                $("#load-info").remove()
            }, e)
        }
        function _showX1Tips(e, a, t) {
            var i;
            switch (null == x1SettingTips && (x1SettingTips = $("#x1-setting-tips-window").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5
                },
                center: !0
            }),
            $("#x1-setting-tips-window button").click(function() {
                var e = $("select[name=way_" + a + "]").val();
                x1SettingTips.close(),
                5 == e ? lastSubmit.push(setUsb3G) : (4 == e ? staWifiSubmit : submitNetwork)(a, t),
                networkSetTask.push(lastSubmit).run()
            })),
            e = parseInt(e, 10)) {
            case 1:
                i = "宽带拨号方式上网，网口将作为WAN口使用";
                break;
            case 2:
                i = "动态IP方式上网，网口将作为WAN口使用";
                break;
            case 3:
                i = "静态IP方式上网，网口将作为WAN口使用";
                break;
            case 4:
                i = "无线中继方式上网，网口将作为LAN口使用";
                break;
            case 5:
                i = "3G/4G USB上网适配器方式上网，DHCP服务自动启动，网口将作为LAN口使用";
                break;
            default:
                i = "动态IP方式上网，网口将作为WAN口使用"
            }
            $("#setting-tips").text(i),
            x1SettingTips.show()
        }
        function _initNet(a) {
            $("#show-tipswin_" + a).click(function() {
                return tipsWin.show(),
                !1
            }),
            $("#show-more-set_" + a).show(),
            $("#show-more-set_" + a).click(function() {
                $("#service-name-" + a).show(),
                $("#close-more-set_" + a).show(),
                $("#show-more-set_" + a).hide()
            }),
            $("#close-more-set_" + a).click(function() {
                $("#service-name-" + a).hide(),
                $("#close-more-set_" + a).hide(),
                $("#show-more-set_" + a).show()
            }),
            $("#way_" + a).change(function() {
                var e = this.value
                  , e = parseInt(e, 10);
                $(".way_" + a + "-box").hide(),
                2 != e && ($("#way_" + a + "-" + e).show(),
                !loadingWifiList && 4 == e && $('select[name="ssid"] option').size() <= 0 && scanWifi(a)),
                1 == e || 2 == e || 3 == e ? $("#dns-box_" + a).show() : $("#dns-box_" + a).hide(),
                OrayBox.resize()
            })
        }
        function _initDns(i, a) {
            0 < $("#dns-box_" + i).size() && (OrayBox.request("wan_get", {}, function(e) {
                null != e.wan_dns ? ($("input[name=diydns_" + i + '][value="1"]').click(),
                $("#dns-box_" + i + ' input[name="maindns_' + i + '"]').val(a.dns),
                $("#current-dns_" + i).val(a.dns),
                $("#fill-dns_" + i).show()) : ($("input[name=diydns_" + i + '][value="0"]').click(),
                $("#fill-dns_" + i).hide())
            }),
            0 < a.backup_dns.length && ($("#dns-box_" + i + ' input[name="backupdns_' + i + '"]').val(a.backup_dns),
            $("#current-mdns_" + i).val(a.backup_dns)),
            $("#dns-box_" + i).find("input[name=diydns_" + i + "]").change(function() {
                1 == $(this).val() ? $("#fill-dns_" + i).show() : ($("#fill-dns_" + i + " input").val(""),
                $("#fill-dns_" + i).hide()),
                OrayBox.resize()
            }),
            $("#recommend-dns_" + i).click(function() {
                var e = $(this).data("maindns")
                  , a = $(this).data("backupdns")
                  , t = $("#dns-box_" + i);
                t.find('input[name="maindns_' + i + '"]').val(e),
                t.find('input[name="backupdns_' + i + '"]').val(a)
            }),
            OrayBox.resize()),
            $('#network-info [data-name="dns_' + i + '"]').text(a.dns || "-")
        }
        function _initUsb3G(e, a, t) {
            if (2 == e.code)
                return "function" == typeof a && a.apply(null, t),
                !1;
            var i, n = $("#proto").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }), s = $("#model").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }), o = $("#dev").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }), r = $("#company").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            $("#area").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }),
            $("#authorize").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            if ($("#way_1").append('<option value="5">3G/4G USB适配器</option>'),
            waySelect.refresh(),
            $("#custom-apn").bind("change", function() {
                $(this).prop("checked") ? $("#custom-apn-box").show() : $("#custom-apn-box").hide()
            }),
            $("#proto").bind("change", function() {
                "3g" == this.value ? ($("#3g-box").show(),
                $("#dhcp-box").hide()) : ($("#3g-box").hide(),
                $("#dhcp-box").show()),
                OrayBox.resize()
            }),
            0 == e.code) {
                if (e.usb_status.devices) {
                    for (var c = e.usb_status.devices, d = [], p = 0, l = 0; l < c.length; l++)
                        0 < c[l].length && d.push('<option value="' + c[l] + '">' + c[l] + "</option>"),
                        "/dev/ttyUSB0" == c[l] && (p = l);
                    $("#dev").append(d.join("")),
                    o.refresh(),
                    o.selectByIndex(p)
                }
                1 == e.wan_3g_setup.enabled && (setTimeout(function() {
                    waySelect.select("5")
                }, 500),
                $('#spare_mode option[value="usb"]').remove(),
                $("#current-way_1").val("5"),
                $("#dns-box_1").hide(),
                $(".way_1-box").hide(),
                $("#way_1-5").show(),
                "3g" == (i = e.wan_3g_setup).proto ? ($("#3g-box").show(),
                $("#dhcp-box").hide(),
                "ctnet" == i.apn || "cmnet/cmwap" == i.apn || "3gnet" == i.apn ? r.select(i.apn) : ($("#custom-apn-box").show(),
                $("#custom-apn").prop("checked", !0),
                $("#apn").val(i.apn),
                $("#dialnumber").val(i.dialnumber)),
                "undefined" != typeof i.username && 0 < i.username.length && $("#apn-user").val(i.username),
                "undefined" != typeof i.pwssword && 0 < i.pwssword.length && $("#apn-pwssword").val(i.pwssword),
                n.select("3g"),
                o.select(i.dev)) : ($("#dhcp-box").show(),
                $("#3g-box").hide(),
                i.ifname = "usb0" != i.ifname ? "eth1" : i.ifname,
                n.select("dhcp"),
                s.select(i.ifname)),
                $('#network-info [data-name="mod_1"]').text("3G/4G USB适配器"),
                OrayBox.getBaseInfo(function(e) {
                    $('#network-info [data-name="ip_1"]').text(e.wan_ip || "-"),
                    $('#network-info [data-name="mask_1"]').text(e.wan_mask || "-"),
                    $('#network-info [data-name="gateway_1"]').text(e.wan_gw || "-")
                }),
                _initReserveNet(),
                is3GNetwork = !0,
                OrayBox.resize())
            }
            "function" == typeof a && a.apply(null, t)
        }
        function _initWifiRepeater(e, a, t) {
            if (2 == e.code)
                return "function" == typeof a && a.apply(null, t),
                !1;
            if ($("#way_1").append('<option value="4">无线中继</option>'),
            waySelect.refresh(),
            $('a[data-opt="show-pwd"]').click(function() {
                var e;
                $(this).hasClass("encode") ? (e = $('input[name="ssid_pwd"][type="password"]').val(),
                $('input[name="ssid_pwd"][type="password"]').attr("disabled", "disabled").hide(),
                $('input[name="ssid_pwd"][type="text"]').removeAttr("disabled").val(e).show(),
                $(this).removeClass("encode").addClass("decode").html("&#xe754;")) : (e = $('input[name="ssid_pwd"][type="text"]').val(),
                $('input[name="ssid_pwd"][type="text"]').attr("disabled", "disabled").hide(),
                $('input[name="ssid_pwd"][type="password"]').removeAttr("disabled").val(e).show(),
                $(this).removeClass("decode").addClass("encode").html("&#xe753;"))
            }),
            $("#way_1-4 a[data-opt]").click(function() {
                var e = $(this).data("opt");
                "rescan" == e ? scanWifi(1) : "manual-entry" == e ? ($("#way_1-4 .manual-entry").show(),
                $("#way_1-4 .manual-entry input").removeAttr("disabled"),
                $("#ssid_mac, #ssid_encryption").val(""),
                $(".scan-box").hide(),
                $('#way_1-4 a[data-opt="manual-entry').hide(),
                $('#way_1-4 a[data-opt="rescan').hide(),
                $('#way_1-4 a[data-opt="auto-scan').show(),
                ssidSelect.disabled(),
                has5GWifi && $("#way_1-4 .wifi-type").show()) : "auto-scan" == e && ($("#way_1-4 .manual-entry").hide(),
                $("#way_1-4 .wifi-type").hide(),
                $("#way_1-4 .manual-entry input").attr("disabled", "disabled"),
                $(".scan-box").show(),
                $(this).hide(),
                scanWifi(1))
            }),
            $('select[name="ssid"]').change(function() {
                var e = this.value
                  , a = $(this).find('option[value="' + e + '"]').attr("data-mac")
                  , t = $(this).find('option[value="' + e + '"]').attr("data-encryption")
                  , i = $(this).find('option[value="' + e + '"]').attr("data-channel");
                $('#way_1-4 input[name="ssid_mac"]').val(a),
                $('#way_1-4 input[name="ssid_encryption"]').val(t),
                $('#way_1-4 input[name="ssid_channel"]').val(i),
                ssidSelect.select(e)
            }),
            is3GNetwork)
                return !0;
            if (0 == e.code && 1 == e.enabled) {
                loadingWifiList = !0,
                waySelect.select("4"),
                $('#spare_mode option[value="wifi_sta"]').remove(),
                $("#current-way_1").val("4"),
                $(".way_1-box").hide(),
                $("#way_1-4").show(),
                $("#dns-box_1").hide();
                e.sta_wifi.ssid;
                return $('input[name="cancelstawifi"]').val("1"),
                e.sta_wifi.wifi_type && $('input[name="wifi_type"][value="' + e.sta_wifi.wifi_type + '"]').prop("checked", "checked"),
                has5GWifi && $("#way_1-4 .wifi-type").show(),
                $("#way_1-4 .manual-entry").show(),
                $(".scan-box").hide(),
                $('#way_1-4 .manual-entry input[name="ssid"]').val(e.sta_wifi.ssid).removeAttr("disabled"),
                $('#way_1-4 .scan-box select[name="ssid"]').attr("disabled", "disabled"),
                $('#way_1-4 input[name="ssid_mac"]').val(e.sta_wifi.bssid),
                $('#way_1-4 input[name="ssid_encryption"]').val(e.sta_wifi.encryption),
                $('#way_1-4 input[name="ssid_pwd"]').val(e.sta_wifi.key),
                $('#network-info [data-name="mod_1"]').text("无线中继"),
                OrayBox.getBaseInfo(function(e) {
                    $('#network-info [data-name="ip_1"]').text(e.wan_ip || "-"),
                    $('#network-info [data-name="mask_1"]').text(e.wan_mask || "-"),
                    $('#network-info [data-name="gateway_1"]').text(e.wan_gw || "-")
                }),
                OrayBox.resize(),
                _initReserveNet(),
                !0
            }
            "function" == typeof a && a.apply(null, t)
        }
        function _initWiredNetwork(e) {
            if (is3GNetwork)
                return !0;
            0 == e.code && ("kp4g" != e.mod ? ($('#spare_mode option[value="pppoe"]').remove(),
            $('#spare_mode option[value="dhcp"]').remove(),
            $('#spare_mode option[value="static"]').remove()) : $('#spare_mode option[value="sim"]').remove(),
            "dhcp" == e.mod ? (waySelect.select("2"),
            $("#current-way_1").val("2"),
            $(".way_1-box").hide(),
            $('#network-info [data-name="mod_1"]').text("动态IP")) : "pppoe" == e.mod ? (waySelect.select("1"),
            $("#current-way_1").val("1"),
            $(".way_1-box").hide(),
            $("#way_1-1").show(),
            $('input[name="account_1"]').val(e.user),
            $('input[name="password_1"]').val(e.pwd),
            $('input[name="service_1"]').val(e.service),
            $('#network-info [data-name="mod_1"]').text("宽带拨号"),
            $('#network-info [data-name="user_1"]').text(e.user || "-").parent().show(),
            _getLinkStatus("wan")) : "static" == e.mod ? (waySelect.select("3"),
            $("#current-way_1").val("3"),
            $(".way_1-box").hide(),
            $("#way_1-3").show(),
            $('input[name="ip_1"]').val(e.ip),
            $('input[name="mask_1"]').val(e.mask),
            $('input[name="gw_1"]').val(e.gateway),
            $('#network-info [data-name="mod_1"]').text("静态IP")) : "kp4g" == e.mod && (waySelect.select("6"),
            $("#current-way_1").val("6"),
            $(".way_1-box").hide(),
            $("#way_1-6").show(),
            $("#dns-box_1").hide(),
            e.user && form.find('input[name="apn_user_1"]').val(e.user),
            e.pwd && form.find('input[name="apn_pwd_1"]').val(e.pwd),
            e.device && form.find('input[name="apn_device_1"]').val(e.device),
            e.apn && form.find('input[name="apn_apn_1"]').val(e.apn),
            e.pincode && form.find('input[name="apn_gw_1"]').val(e.pincode),
            e.auth && apnAuthSelect1.select(e.auth),
            e.modes && apnModesSelect1.select(e.modes),
            e.delay && form.find('input[name="apn_delay_1"]').val(e.delay),
            e.pdptype && form.find('input[name="apn_pdptype_1"]').val(e.pdptype),
            e.plmn && form.find('input[name="apn_plmn_1"]').val(e.plmn),
            $('#network-info [data-name="mod_1"]').text("APN（4G）")),
            "dhcp" == e.mod2 ? (waySelect2.select("2"),
            $("#current-way_2").val("2"),
            $(".way_2-box").hide(),
            $('#network-info [data-name="mod_2"]').text("动态IP")) : "pppoe" == e.mod2 ? (waySelect2.select("1"),
            $("#current-way_2").val("1"),
            $(".way_2-box").hide(),
            $("#way_2-1").show(),
            $("#dns-box_2").hide(),
            $('input[name="account_2"]').val(e.user2),
            $('input[name="password_2"]').val(e.pwd2),
            $('input[name="service_2"]').val(e.service),
            $('#network-info [data-name="mod_2"]').text("宽带拨号"),
            $('#network-info [data-name="user_2"]').text(e.user2 || "-").parent().show(),
            _getLinkStatus("wan2")) : "static" == e.mod2 ? (waySelect2.select("3"),
            $("#current-way_2").val("3"),
            $(".way_2-box").hide(),
            $("#way_2-3").show(),
            $('input[name="ip_2"]').val(e.ip2),
            $('input[name="mask_2"]').val(e.mask2),
            $('input[name="gw_2"]').val(e.gateway2),
            $('#network-info [data-name="mod_2"]').text("静态IP")) : "kp4g" == e.mod2 && (waySelect2.select("6"),
            $("#current-way_2").val("6"),
            $(".way_2-box").hide(),
            $("#way_2-6").show(),
            $('#network-info [data-name="mod_2"]').text("APN（4G）")),
            OrayBox.getBaseInfo(function(e) {
                $('#network-info [data-name="ip_1"]').text(e.wan_ip || "-"),
                $('#network-info [data-name="mask_1"]').text(e.wan_mask || "-"),
                $('#network-info [data-name="gateway_1"]').text(e.wan_gw || "-"),
                $('#network-info [data-name="ip_2"]').text(e.wan2_ip || "-"),
                $('#network-info [data-name="mask_2"]').text(e.wan2_mask || "-"),
                $('#network-info [data-name="gateway_2"]').text(e.wan2_gw || "-")
            }),
            "function" == typeof callback && callback.apply(null, callbackParams),
            _initReserveNet())
        }
        function _getLinkStatus(n) {
            linkStatusInterval[n] && clearTimeout(linkStatusInterval[n]),
            OrayBox.diagnose(n, function(e) {
                var a = '连接失败<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="connect" data-ether="' + n + '">立即连接</a>'
                  , t = 1
                  , i = !1;
                e.result && (e.result.errors ? (a = OrayBox.failCode[e.result.errors[0].code] || "设置错误",
                i = !0,
                "USER_REQUEST" === e.result.errors[0].code && (a += '<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="connect" data-ether="' + n + '">重新连接</a>')) : (e.result.pending && (a = '正在拨号中<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="disconnect" data-ether="' + n + '">断开</a>'),
                e.result.up && (a = '连接成功<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="disconnect" data-ether="' + n + '">断开</a>'))),
                "wan2" === n && (t = 2),
                $('#network-info [data-name="link-status_' + t + '"]').html(a).parent().show(),
                i || (linkStatusInterval[n] = setTimeout(function() {
                    _getLinkStatus(n)
                }, 2e3))
            })
        }
        function _filterForm(c, e) {
            var d = !0;
            return $.each(e, function(e) {
                var a = $("select[name=way_" + e + "]").val();
                if (1 == a) {
                    if ($.trim(c.find('input[name="account_' + e + '"]').val()).length <= 0)
                        return OrayBox.showMessage("请输入宽带帐号", !1, 0),
                        c.find('input[name="account_' + e + '"]').focus(),
                        d = !1;
                    if ($.trim(c.find('input[name="password_' + e + '"]').val()).length <= 0)
                        return OrayBox.showMessage("请输入宽带密码", !1, 0),
                        c.find('input[name="password_' + e + '"]').focus(),
                        d = !1
                } else if (3 == a) {
                    var t = $.trim(c.find('input[name="ip_' + e + '"]').val())
                      , i = $.trim(c.find('input[name="mask_' + e + '"]').val())
                      , n = $.trim(c.find('input[name="gw_' + e + '"]').val());
                    if (t.length <= 0)
                        return OrayBox.showMessage("请输入IP地址", !1, 0),
                        c.find('input[name="ip_' + e + '"]').focus(),
                        d = !1;
                    if (!$.func.isIp(t))
                        return OrayBox.showMessage("请输入正确IP地址", !1, 0),
                        c.find('input[name="ip_' + e + '"]').focus(),
                        d = !1;
                    if (i.length <= 0)
                        return OrayBox.showMessage("请输入子网掩码", !1, 0),
                        c.find('input[name="mask_' + e + '"]').focus(),
                        d = !1;
                    if (!$.func.isIp(i))
                        return OrayBox.showMessage("请输入正确子网掩码", !1, 0),
                        c.find('input[name="mask_' + e + '"]').focus(),
                        d = !1;
                    if (0 < n.length && !$.func.isIp(n))
                        return OrayBox.showMessage("请输入正确网关", !1, 0),
                        c.find('input[name="gw_' + e + '"]').focus(),
                        d = !1
                } else if (4 == a)
                    if (c.find('[name="ssid"]:not([disabled])').is("select")) {
                        if (c.find('select[name="ssid"] option').size() <= 0)
                            return OrayBox.showMessage("没有扫描到有效的WIFI列表，请重新扫描后选择！", !1, 0),
                            d = !1;
                        var s = $("#way_1-4 .scan-box .select-box input:eq(0)").val();
                        c.find('select[name="ssid"] option[value="' + s + '"]').val()
                    } else {
                        if ($.trim(c.find('input[name="ssid"]').val()).length <= 0)
                            return OrayBox.showMessage("请输入网络名称", !1, 0),
                            c.find('input[name="ssid"]').focus(),
                            d = !1
                    }
                if ((1 == a || 2 == a || 3 == a) && 1 == $("#dns-box_" + e).find("input[name=diydns_" + e + "]:checked").val()) {
                    var o = $.trim(c.find('input[name="maindns_' + e + '"]').val())
                      , r = $.trim(c.find('input[name="backupdns_' + e + '"]').val());
                    if (o.length <= 0)
                        return OrayBox.showMessage("请输入首选DNS", !1),
                        c.find('input[name="maindns_' + e + '"]').focus(),
                        d = !1;
                    if (!$.func.isIp(o))
                        return OrayBox.showMessage("请输入正确的首选DNS", !1),
                        c.find('input[name="maindns_' + e + '"]').focus(),
                        d = !1;
                    if (0 < r.length && !$.func.isIp(r))
                        return OrayBox.showMessage("请输入正确的备用DNS", !1),
                        c.find('input[name="backupdns_' + e + '"]').focus(),
                        d = !1
                }
            }),
            d
        }
        function _initScanWifi(e) {
            var i;
            e && (e.wifi_scan || e.wifi_scan_5g) && (i = [],
            delete e.code,
            $.each(e, function(t, e) {
                $.each(e, function(e, a) {
                    "" !== a.ssid && (a.type = t,
                    a.encryption = $.trim(a.encryption),
                    i.push(a))
                })
            }),
            i.sort(function(e, a) {
                return Math.abs(e.signal) < Math.abs(a.signal) ? -1 : 1
            }),
            $.each(i, function(e, a) {
                scanWifiMap[a.ssid] || (staWifiList.push(a.ssid),
                scanWifiMap[a.ssid] = a)
            }))
        }
        function submitNetwork(a, t) {
            "wan" == t && 1 == parseInt($('input[name="cancelstawifi"]').val(), 10) && networkSetTask.push(function(a) {
                $.getJSON("/cgi-bin/oraybox?_api=wifi_sta_set&_type=1", function(e) {
                    return 0 === e.code && $('input[name="cancelstawifi"]').val(0),
                    "function" == typeof a && a.call()
                })
            }),
            networkSetTask.push(function(e) {
                setDns(a, t).complete(function() {
                    return "function" == typeof e && e.call()
                })
            }),
            lastSubmit.push(submitForm.bind(this, a, t))
        }
        function setDns(a, e) {
            var t = ""
              , i = "";
            1 == form.find("input[name=diydns_" + a + "]:checked").val() && (t = $.trim(form.find('input[name="maindns_' + a + '"]').val()),
            i = $.trim(form.find('input[name="backupdns_' + a + '"]').val()));
            var n = {
                dns: t,
                backup_dns: i,
                "interface": e,
                no_restart_network: 1
            }
              , s = OrayBox.timeoutWork(function(e) {
                e && ($("#current-dns_" + a).val(t),
                $("#current-mdns_" + a).val(i)),
                $("#notify-win:visible").size()
            }, 8e3);
            return $.ajax({
                url: "/cgi-bin/oraybox?_api=dns_set",
                type: "post",
                dataType: "json",
                data: n,
                beforeSend: function() {
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    return !!e && (0 === e.code ? s("run") : 4 === e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : void 0)
                }
            })
        }
        function setUsb3G() {
            var e = {
                _api: "usb_3g_set",
                enabled: 1
            };
            e.proto = $("#proto").val();
            var a = $("#company").val();
            e.apn = a,
            e.dialnumber = $('#company option[value="' + a + '"]').attr("data-dialnumber");
            var t = $.trim($("#dialnumber").val())
              , i = $.trim($("#apn").val().toLowerCase())
              , n = $.trim($("#apn-user").val())
              , s = $.trim($("#apn-pwd").val());
            $("#custom-apn").prop("checked") && (0 < t.length && (e.dialnumber = t),
            0 < i.length && (e.apn = i),
            0 < s.length && (e.password = s),
            0 < n.length && (e.username = n)),
            "3g" == e.proto ? (e.dev = $("#dev").val(),
            "ctnet" == e.apn && (e.service = "evdo")) : "dhcp" == e.proto && (e.ifname = $("#model").val());
            var o = OrayBox.timeoutWork(function() {
                OrayBox.showMessage("", !0),
                $("#notify-win:visible").size() || OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在设置上网方式，请耐心等候...</p>'].join(""), !0),
                setTimeout(function() {
                    OrayBox.checkOnline(OrayBox.NetworkSuccessCall, function() {
                        OrayBox.showNotify('<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p><p style="font-size:18px;">当前无法连接网络，请检查设置是否正确</p><button class="btn btn-primary btn-small close" style="margin-top: 40px;">确定</button>', !0)
                    }, null, 6)
                }, 1e4)
            }, 8e3);
            return $.ajax({
                url: form.attr("action"),
                type: "post",
                dataType: "json",
                data: e,
                beforeSend: function() {
                    OrayBox.showMessage("正在提交数据...", !0, 0),
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    o("stop"),
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    return e && 0 !== e.code ? 4 === e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : void OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : o("run")
                }
            })
        }
        function setStaWifi(e, a) {
            var t = 0
              , t = $(".scan-box:visible").size() ? $.trim(ssidSelect.val()) : $.trim(form.find('input[name="ssid"]').val())
              , i = $.trim(form.find('input[name="ssid_pwd"]:not([disabled])').val())
              , n = form.find('input[name="wifi_type"]:checked').val();
            scanWifiMap[t] && (n = "wifi_scan_5g" === scanWifiMap[t].type ? "1" : "0");
            var s = {
                _api: "wifi_sta_set",
                _type: 0,
                sta_ssid: t,
                sta_bssid: scanWifiMap[t] ? scanWifiMap[t].mac : "",
                sta_encryption: scanWifiMap[t] ? scanWifiMap[t].encryption : 0 < i.length ? "WPA2" : "none",
                sta_channel: scanWifiMap[t] ? scanWifiMap[t].channel : "auto",
                sta_key: i,
                ap_ssid: wifi.ssid,
                ap_encryption: "psk2",
                ap_key: wifi.pwd,
                wifi_type: n,
                not_restart_net: 1
            }
              , o = OrayBox.timeoutWork(function() {
                $('input[name="cancelstawifi"]').val(1),
                OrayBox.showMessage("", !0),
                $("#notify-win:visible").size() || OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在设置上网方式，请耐心等候...</p>'].join(""), !0),
                location.assign("/oraybox/setpassword.html")
            }, 8e3);
            return $.ajax({
                url: form.attr("action"),
                type: "post",
                dataType: "json",
                data: s,
                beforeSend: function() {
                    $("#notify-win:visible").size() || OrayBox.showMessage("正在提交数据...", !0, 0),
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    o("stop"),
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    return e && 0 !== e.code ? 4 === e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : void OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : o("run")
                }
            })
        }
        function staWifiSubmit(e, a) {
            OrayBox.showMessage("正在提交数据...", !0, 0),
            button && button.attr("disabled", !0);
            var t = 0
              , t = $(".scan-box:visible").size() ? $.trim(ssidSelect.val()) : $.trim(form.find('input[name="ssid"]').val())
              , i = form.find('input[name="wifi_type"]:checked').val();
            scanWifiMap[t] && (i = "wifi_scan_5g" === scanWifiMap[t].type ? "1" : "0"),
            networkSetTask.push(function(a) {
                OrayBox.getWifi(function(e) {
                    0 == e.code && (wifi.ssid = e.ssid,
                    wifi.pwd = e.pwd),
                    "function" == typeof a && a.call()
                }, "1" === i ? "5G" : "2.4G")
            }),
            lastSubmit.push(setStaWifi.bind(this, e, a))
        }
        function submitForm(e, a) {
            var t, i, n, s, o, r, c, d, p, l, f = $("select[name=way_" + e + "]").val(), u = {
                _api: "wan_set",
                not_restart_net: 1
            }, m = 2 == e ? "2" : "";
            1 == f ? (u["mod" + m] = "pppoe",
            u["user" + m] = $.trim(form.find('input[name="account_' + e + '"]').val()),
            u["pwd" + m] = $.trim(form.find('input[name="password_' + e + '"]').val()),
            u["service" + m] = $.trim(form.find('input[name="service_' + e + '"]').val())) : 2 == f ? u["mod" + m] = "dhcp" : 3 == f ? (u["mod" + m] = "static",
            u["ip" + m] = $.trim(form.find('input[name="ip_' + e + '"]').val()),
            u["mask" + m] = $.trim(form.find('input[name="mask_' + e + '"]').val()),
            u["gateway" + m] = $.trim(form.find('input[name="gw_' + e + '"]').val())) : 6 == f && (u["mod" + m] = "kp4g",
            $("#apn-btn_" + e).prop("checked") && (t = $.trim(form.find('input[name="apn_user_' + e + '"]').val()),
            i = $.trim(form.find('input[name="apn_pwd_' + e + '"]').val()),
            n = $.trim(form.find('input[name="apn_device_' + e + '"]').val()),
            s = $.trim(form.find('input[name="apn_apn_' + e + '"]').val()),
            o = $.trim(form.find('input[name="apn_gw_' + e + '"]').val()),
            r = 1 == e ? apnAuthSelect1.val() : "",
            c = 1 == e ? apnModesSelect1.val() : "",
            d = $.trim(form.find('input[name="apn_delay_' + e + '"]').val()),
            p = $.trim(form.find('input[name="apn_pdptype_' + e + '"]').val()),
            l = $.trim(form.find('input[name="apn_plmn_' + e + '"]').val()),
            "auto" === c && (c = ""),
            0 < t.length && (u["user" + m] = t),
            0 < i.length && (u["pwd" + m] = i),
            0 < n.length && (u["device" + m] = n),
            0 < s.length && (u["apn" + m] = s),
            0 < o.length && (u["pincode" + m] = o),
            0 < r.length && (u["auth" + m] = r),
            0 < c.length && (u["modes" + m] = c),
            0 < d.length && (u["delay" + m] = d),
            0 < p.length && (u["pdptype" + m] = p),
            0 < l.length && (u["plmn" + m] = l)));
            OrayBox.timeoutWork(function() {
                "X6" === OrayBox.type && (OrayBox.X6CallTab = {
                    WAN1: "",
                    WAN2: "",
                    has_success: !1
                })
            }, 8e3);
            $.ajax({
                url: form.attr("action"),
                type: "post",
                dataType: "json",
                data: u,
                beforeSend: function() {
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    if (button && button.removeAttr("disabled"),
                    e && 0 !== e.code) {
                        if (4 === e.code)
                            return location.assign("/oraybox/login.html?err=sesstimeout");
                        var a = '<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p><p style="font-size:18px;">' + OrayBox.getMessage(e.code) + '</p><button class="btn btn-small close">返回重新设置</button>';
                        OrayBox.showNotify(a, !0)
                    } else
                        location.assign("/oraybox/setpassword.html")
                }
            })
        }
        function checkStaWifi(a) {
            var t = 0
              , t = $(".scan-box:visible").size() ? $.trim(ssidSelect.val()) : $.trim(form.find('input[name="ssid"]').val());
            if (scanWifiMap[t])
                return "function" == typeof a && a.call();
            OrayBox.getWifiScan(function(e) {
                return _initScanWifi(e),
                scanWifiMap[t] ? void ("function" == typeof a && a.call()) : (networkSetTask.stop(),
                button && button.removeAttr("disabled"),
                OrayBox.showMessage("无法搜索到该WiFi", !1, 0))
            })
        }
        function scanWifi(e) {
            var d = $('select[name="ssid"]');
            loadingWifiList = !0,
            OrayBox.showMessage("正在扫描WIFI列表，请耐心等待...", !0, 0),
            button && button.attr("disabled", !0),
            d.hide(),
            $("#way_" + e + "-4 .select-box").size() && $("#way_" + e + "-4 .select-box").hide(),
            $('input[name="ssid_pwd"]').css({
                "border-top": "1px solid #e1e1e1"
            }),
            $('[data-opt="rescan"], [data-opt="manual-entry"]').hide(),
            d.parent().find("label.loading-tips").append('&nbsp;&nbsp;<img src="./images/loading_160421.gif" style="vertical-align:middle;" />&nbsp;正在扫描WIFI列表...').show(),
            OrayBox.getWifiScan(function(e) {
                if (_initScanWifi(e),
                loadingWifiList = !1,
                OrayBox.showMessage("", !0),
                staWifiList.length <= 0)
                    return $(".loading-tips").html("抱歉，没有扫描到WIFI！"),
                    !1;
                for (var a = [], t = 0, i = staWifiList.length; t < i; t++) {
                    var n, s, o, r, c = staWifiList[t];
                    "" !== c && (s = "none" != (n = scanWifiMap[c].encryption) && "" != n ? "/oraybox/images/haspwd_" : "/oraybox/images/nopwd_",
                    o = parseInt(scanWifiMap[c].signal, 10),
                    s += 0 <= (o = Math.abs(o)) && o <= 55 ? "1.png" : 55 < o && o <= 70 ? "2.png" : 70 < o && o <= 85 ? "3.png" : "4.png",
                    r = "",
                    "wifi_scan_5g" === scanWifiMap[c].type && (r = "/oraybox/images/5g.png"),
                    a.push('<option value="' + scanWifiMap[c].ssid + '" data-mac="' + scanWifiMap[c].mac + '" data-str="' + s + '" data-channel="' + scanWifiMap[c].channel + '" data-encryption="' + n + '" data-scan="' + scanWifiMap[c].type + '" data-suffix="' + r + '">' + scanWifiMap[c].ssid + "</option>"))
                }
                d.html(a.join("")),
                "object" == typeof ssidSelect ? (ssidSelect.refresh(!0),
                ssidSelect.enabled(),
                ssidSelect.selectByIndex(0)) : (d.show(),
                (ssidSelect = d.select({
                    inputClass: "fm-text",
                    searchable: !1,
                    inputable: !1
                })).enabled()),
                $('input[name="ssid_pwd"]').css({
                    "border-top": "none"
                }),
                $('[data-opt="rescan"], [data-opt="manual-entry"]').show(),
                $("label.loading-tips").empty().hide(),
                $("#way_1-4 .select-box").show(),
                button && button.removeAttr("disabled")
            })
        }
        OrayBox.init(function() {
            switch ($("#way_1").change(function() {
                $("#apn-btn_1").is(":checked") && 6 == $("#way_1").val() ? $(".scroll-y").addClass("active") : $(".scroll-y").removeClass("active")
            }),
            has5GWifi = -1 !== $.inArray(OrayBox.type, ["X5", "X6"]) || -1 !== $.inArray(OrayBox.model, ["X3Pro-1153", "ORH-180"]),
            $.inArray(OrayBox.model, ["P1-2111", "P5-1210", "P5-2210", "ORG-900"]) <= -1 && ($("#manage-list").show(),
            $(".pop-win-icon").show()),
            -1 !== $.inArray(OrayBox.model, ["R300-1121G", "R300S-1151G", "X4-1123G", "X4-2123G", "E3-1141", "X4C-1141G", "X4C-2131G", "R300-2121G"]) && (_initApn(),
            "E3-1141" !== OrayBox.model && OrayBox.getWan2lan(function(e) {
                1 == e["switch"] && ($('#way_1 option[value="1"]').remove(),
                $('#way_1 option[value="2"]').remove(),
                $('#way_1 option[value="3"]').remove(),
                $("#dns-box_1").hide(),
                isWan2lan = !0,
                waySelect.refresh())
            })),
            OrayBox.model) {
            case "P1-2111":
            case "P5-1210":
            case "P5-2210":
            case "ORG-900":
                $("#manage-content .title").show(),
                $("#sub-title").css({
                    "padding-top": "20px"
                }),
                $('#way_1 option[value="1"]').remove(),
                $("#way_1-1").remove(),
                waySelect.refresh();
            case "X3-D1509":
            case "X3-D1509A":
            case "X5-1253":
            case "R300-1121G":
            case "R300-2121G":
            case "R300S-1151G":
            case "X4-1123G":
            case "X4-2123G":
            case "X4C-1141G":
            case "X4C-2131G":
                OrayBox.getWifiRepeater(_initWifiRepeater, [OrayBox.getWiredNetwork, [_initWiredNetwork]]);
                break;
            case "X1-1111":
            case "X1-2111":
            case "ORH-100":
            case "X3-2151":
            case "X3-3251":
            case "X3Pro-1153":
            case "E3-1141":
            case "X5-2253":
            case "X5-3353":
            case "X5-4253":
            case "X5-5255":
            case "X5-6256":
            case "ORH-180":
            case "ORH-260":
                OrayBox.getUsb3G(_initUsb3G, [OrayBox.getWifiRepeater, [_initWifiRepeater, [OrayBox.getWiredNetwork, [_initWiredNetwork]]]]);
                break;
            case "G5-1250":
            case "G5-2250":
            case "A500":
            case "ORG-220":
                OrayBox.getUsb3G(_initUsb3G, [OrayBox.getWiredNetwork, [_initWiredNetwork]]);
                break;
            case "G100Pro-2240":
                OrayBox.getUsb3G(_initUsb3G, [OrayBox.getWiredNetwork, [_initWiredNetwork]]);
            case "V1000":
            case "V2000-1260":
            case "V3000-1460":
            case "G100Pro-1240":
            case "G300Pro-1440":
            case "ORG-1100":
                OrayBox.getX86Wan2(function(e) {
                    1 === e["switch"] && ($("#X6-wan2").show(),
                    $("#sub-title").text("WAN1设置")),
                    OrayBox.getWiredNetwork(_initWiredNetwork),
                    _initNetWay(e["switch"])
                });
                break;
            case "X6-1293P":
            case "X6-2293P":
            case "X6-3293P":
                $("#X6-wan2").show(),
                $("#X6-net-tips, #X6-apwifi-tips").show(),
                $("#sub-title").text("WAN1设置"),
                OrayBox.getWifiRepeater(_initWifiRepeater, [OrayBox.getWiredNetwork, [_initWiredNetwork]])
            }
            $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"]) <= -1 && _initNetWay(0)
        }),
        _initNetInfo(),
        _initFormData(),
        OrayBox.updateFooterTime(),
        window.onbeforeunload = function() {
            _leavePage()
        }
    }
    ,
    scope.OrayBox.getUsb3G = function(a, t) {
        t = t || [],
        OrayBox.request("usb_3g_get", {}, function(e) {
            "function" == typeof a && a.call(null, e, t[0], t[1])
        })
    }
    ,
    scope.OrayBox.getWifiRepeater = function(a, t) {
        t = t || [],
        OrayBox.request("wifi_sta_get", {}, function(e) {
            "function" == typeof a && a.call(null, e, t[0], t[1])
        })
    }
    ,
    scope.OrayBox.getWiredNetwork = function(a) {
        OrayBox.request("wan_get", {}, function(e) {
            "function" == typeof a && a.call(null, e)
        })
    }
    ,
    scope.OrayBox.getWifiScan = function(e) {
        OrayBox.request("wifi_scan_get", {}, e)
    }
    ,
    scope.OrayBox.setInterfaceControl = function(e, a, t) {
        OrayBox.request("interface_control", {
            "interface": a,
            op: t
        }, e, "POST")
    }
    ,
    scope.OrayBox.getWanSpare = function(e) {
        OrayBox.request("wan_spare_get", {}, e)
    }
    ,
    scope.OrayBox.setWanSpare = function(e, a) {
        OrayBox.request("wan_spare_set", a, e, "POST")
    }
    ,
    scope.OrayBox.NetworkSuccessCall = function(e) {
        OrayBox.showNotify(function() {
            OrayBox.setCountDown($("#time-sec"), 3, function() {
                location.assign("/oraybox/setpassword.html")
            })
        })
    }
}(window),
function(o) {
    o.OrayBox = o.OrayBox || {},
    o.OrayBox.getSnCount = 0,
    o.OrayBox.initHeader = function(a) {
        var e, t, i, n, s;
        ~~a ? (e = OrayBox.encodeSn(a),
        $("#manage-list .active a").attr("target", "_blank").attr("href", "http://pgybox.oray.com/passport/login?sn=" + a),
        $('[data-name="sn"]').attr("data-sn", a).html(e),
        $.getJSON("/cgi-bin/oraybox?_api=orayboxsl_status", function(e) {
            if (0 == e.code)
                switch (e.status) {
                case "ONLINE":
                    $("#offline_tips").hide(),
                    $("#status_icon").prop("class", "online-icon"),
                    $("#question").attr("target", "_blank").attr("href", "http://pgybox.oray.com/passport/login?sn=" + a);
                    break;
                case "OFFLINE":
                    $("#offline_tips").show(),
                    $("#status_icon").prop("class", "offline-icon"),
                    $("#question").removeAttr("target").attr("href", "#")
                }
        }),
        setInterval(function() {
            $.getJSON("/cgi-bin/oraybox?_api=orayboxsl_status", function(e) {
                if (e && 0 == e.code)
                    switch (e.status) {
                    case "ONLINE":
                        $("#offline_tips").hide(),
                        $("#status_icon").prop("class", "online-icon"),
                        $("#question").attr("target", "_blank").attr("href", "http://pgybox.oray.com/passport/login?sn=" + a);
                        break;
                    case "OFFLINE":
                        $("#offline_tips").show(),
                        $("#status_icon").prop("class", "offline-icon"),
                        $("#question").removeAttr("target").attr("href", "#")
                    }
            })
        }, 1e4)) : ($('[data-name="sn"]').html('激活失败，请<a href="javascript:void(0);" class="restart" id="restart">重新激活</a>'),
        t = $("#restart-window").window({
            width: 600,
            closeCls: "close",
            draggable: !0,
            drag: {
                handle: ".window-header",
                not: ":input,img,a",
                distance: 5,
                dragging: function(e) {
                    e.offsetX < 0 && (e.offsetX = 0),
                    e.offsetY < 0 && (e.offsetY = 0)
                },
                close: function() {
                    location.reload(!0)
                }
            }
        }),
        i = function() {
            $.getJSON("/cgi-bin/oraybox?_api=restart_service&name=orayboxsn", function(e) {
                0 == e.code ? (o.OrayBox.getSnCount++,
                5 < o.OrayBox.getSnCount ? $("#error_box").show().siblings().hide() : $.getJSON("/cgi-bin/oraybox?_api=sn_get", function(e) {
                    ~~e.sn ? ($("#success_box").show().siblings().hide(),
                    setTimeout(function() {
                        location.reload(!0)
                    }, 2e3)) : i()
                })) : $("#error_box").show().siblings().hide()
            })
        }
        ,
        $("#restart, #restart_again").click(function() {
            $("#restart-begin").show().siblings().hide(),
            t.show(),
            OrayBox.getSnCount = 0,
            i()
        })),
        0 < $("#question").size() && (n = 0,
        $("#question").hover(function() {
            n && clearTimeout(n),
            $("#question_tips").show()
        }, function() {
            n = setTimeout(function() {
                $("#question_tips").hide()
            }, 200)
        }),
        0 < $("#answer-window").size() && (s = $("#answer-window").window({
            width: 600,
            closeCls: "close",
            draggable: !0,
            drag: {
                handle: ".window-header",
                not: ":input,img,a",
                distance: 5,
                dragging: function(e) {
                    e.offsetX < 0 && (e.offsetX = 0),
                    e.offsetY < 0 && (e.offsetY = 0)
                }
            }
        }),
        $("#question_btn").click(function() {
            s.show()
        }))),
        OrayBox.user && "A500" === OrayBox.model && ($("#privilege-entry").show(),
        $("#privilege-entry a").click(function() {
            "admin" === OrayBox.user ? location.assign("/oraybox/privilege_list.html") : location.assign("/oraybox/privilege.html")
        }),
        OrayBox.isRemindPwd && ($("#header").before('<div id="pwd-remind" class="pwd-remind">您已' + OrayBox.remindTime + '天未修改管理员密码，为保障您的帐号安全，请及时修改密码。<a class="link" href="/oraybox/privilege.html?name=' + OrayBox.user + '">立即修改</a></div>'),
        OrayBox.resize())),
        OrayBox.initExportLog(),
        OrayBox.moreFeatureTip()
    }
    ,
    o.OrayBox.initExportLog = function() {
        $('a[data-opt="export-log"]').click(function() {
            return !!OrayBox.checkLimitPrivilege("log_read") && void $.ajax({
                type: "GET",
                dataType: "json",
                url: "/cgi-bin/oraybox?_api=log_read",
                success: function(e) {
                    0 == e.code && function(e) {
                        try {
                            var a = document.createElement("iframe");
                            a.src = e,
                            a.style.display = "none",
                            document.body.appendChild(a)
                        } catch (t) {}
                    }(e.path)
                }
            })
        })
    }
    ,
    o.OrayBox.moreFeatureTip = function() {
        $("#manage-list .active .tips .iconfont").click(function() {
            $(this).parent(".tips").hide();
            var e = $("#manage-list .active .tips").css("display");
            return window.sessionStorage.setItem("tipsDisplay", e),
            !1
        }),
        "none" == window.sessionStorage.getItem("tipsDisplay") ? $("#manage-list .active .tips").hide() : $("#manage-list .active .tips").show()
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.initKod = function() {
        var i, e = null, o = null, r = {}, c = "46M";
        function a() {
            var s = $("#dest option:selected").text();
            OR.Bar.create("progressbar", "pc", 500).setStopSpot(-250).setMemo("正在格式化分区...");
            var e = "/dev/" + s.replace("usb_", "");
            function o() {
                return OR.Bar.stop(function() {
                    $("#error-tips").text("获取KOD下载包失败"),
                    $("#error-box").show().siblings().hide()
                }),
                !1
            }
            function r(e) {
                var a = 110 === e ? "下载PHP安装包失败" : "请检查网络或磁盘是否接触良好";
                return OR.Bar.stop(function() {
                    $("#error-tips").text(a),
                    $("#error-box").show().siblings().hide()
                }),
                !1
            }
            function c(e) {
                var a = 110 === e ? "下载KOD安装包失败" : "请检查网络或磁盘是否接触良好";
                return OR.Bar.stop(function() {
                    $("#error-tips").text(a),
                    $("#error-box").show().siblings().hide()
                }),
                !1
            }
            OrayBox.formatFile(function(e) {
                return 0 !== e.code ? (a = s,
                OR.Bar.stop(function() {
                    $("#error-tips").text("格式化[" + a + "]分区失败"),
                    $("#error-box").show().siblings().hide()
                }),
                !1) : (OR.Bar.setStopSpot(-220).again(200).setMemo("正在获取下载数据..."),
                void OrayBox.getBaseInfo(function(e) {
                    var a = ""
                      , t = e.sn
                      , i = ""
                      , n = "";
                    0 === e.code && (a = e.machine.split(" ")[1],
                    i = e.ver_main + "." + e.ver_sub + "." + e.ver_revision,
                    n = e.ver_type),
                    OrayBox.getKod(function(i) {
                        return 0 !== i.code || i.data.kod.length <= 0 ? o() : void OrayBox.checkPhpPkg(function(e) {
                            if (0 !== e.code) {
                                if (i.data.php.length <= 0)
                                    return o();
                                OR.Bar.setStopSpot(-180).again(300).setMemo("正在安装PHP扩展...");
                                var a = {
                                    url: i.data.php.downloadurl,
                                    dest: s,
                                    md5: i.data.php.md5,
                                    use_https: 0
                                };
                                OrayBox.installOraypkg(function(e) {
                                    if (0 !== e.code)
                                        return r(e.code);
                                    OR.Bar.setStopSpot(-10).again(600).setMemo("正在安装KOD扩展...");
                                    var a = {
                                        url: i.data.kod.downloadurl,
                                        dest: s,
                                        md5: i.data.kod.md5,
                                        use_https: 0
                                    };
                                    OrayBox.installOraypkg(function(e) {
                                        return 0 !== e.code ? c(e.code) : (OR.Bar.end(function() {
                                            $("#access-adress").text(location.origin + "/kod/"),
                                            $("#success-box").show().siblings().hide()
                                        }, 2e3),
                                        void OrayBox.restartHttpdService())
                                    }, a, c)
                                }, a, r)
                            } else {
                                OR.Bar.setStopSpot(-10).again(300).setMemo("正在安装KOD扩展...");
                                var t = {
                                    url: i.data.kod.downloadurl,
                                    dest: s,
                                    md5: i.data.kod.md5,
                                    use_https: 0
                                };
                                OrayBox.installOraypkg(function(e) {
                                    return 0 !== e.code ? c(e.code) : (OR.Bar.end(function() {
                                        $("#access-adress").text(location.origin + "/kod/"),
                                        $("#success-box").show().siblings().hide()
                                    }, 2e3),
                                    void OrayBox.restartHttpdService())
                                }, t, c)
                            }
                        })
                    }, {
                        sn: t,
                        model: a,
                        version: i,
                        type: n
                    }, o)
                }));
                var a
            }, e)
        }
        function t(e) {
            if (0 !== e.code)
                return $("#usb-tips").html('<div class="usb-tips">当前路由器不支持安装可道云</div>'),
                !1;
            if (!e.has_usb_disk)
                return $("#usb-tips").html('<div class="usb-tips">当前未检测到存储设备，请将USB存储设备连接到路由器</div>'),
                !1;
            for (var a in e.partitions)
                r[e.partitions[a].device] = e.partitions[a];
            OrayBox.getOraypkgDevices(n)
        }
        function n(e) {
            if (0 !== e.code)
                return $("#usb-tips").html('<div class="usb-tips">当前路由器不支持安装可道云</div>'),
                !1;
            var a, t = $("#dest");
            for (a in t.html(""),
            e.dest) {
                var i = "/dev/" + e.dest[a].name.replace("usb_", "");
                r[i] && t.append('<option value="' + e.dest[a].path + '">' + e.dest[a].name + "</option>")
            }
            function n(e) {
                var a = "/dev/" + e.replace("usb_", "")
                  , t = r[a].use_space
                  , i = r[a].total_space;
                $("#need_space").text(c),
                $("#used_space").text(t),
                $("#total_space").text(i),
                s(c) > s(i) ? ($("#install-window button").attr("disabled", "disabled"),
                $("#memory-tips").show()) : ($("#install-window button").removeAttr("disabled"),
                $("#memory-tips").hide())
            }
            function s(e) {
                var a = /([0-9.]+)([KMGTP])/i.exec(e);
                return a ? "K" === a[2] || "k" === a[2] ? +a[1] : "M" === a[2] || "m" === a[2] ? 1024 * a[1] : "G" === a[2] || "g" === a[2] ? 1024 * a[1] * 1024 : "T" === a[2] || "t" === a[2] ? 1024 * a[1] * 1024 * 1024 : "P" === a[2] || "p" === a[2] ? 1024 * a[1] * 1024 * 1024 * 1024 : void 0 : 0
            }
            null == o ? (o = t.select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }),
            t.change(function() {
                n($(this).find("option:selected").text())
            })) : o.refresh(),
            n(t.find("option:selected").text()),
            $("#install-box button").parent().show(),
            $("#install-box").show().siblings().hide()
        }
        $("#install").click(function() {
            null === e && (e = $("#install-window").window({
                closeCls: "close",
                center: !0
            }),
            $("#install-box button").click(function() {
                var e = $("#dest option:selected").text();
                $("#install-box").hide(),
                $("#tips-box").show().find("[data-device]").text(e),
                function(e, a) {
                    var t = e.find("[data-time]");
                    if (t.size() <= 0)
                        return;
                    e.attr("disabled", "disabled"),
                    t.text(a),
                    i && clearInterval(i);
                    i = setInterval(function() {
                        0 < --a ? t.text(a) : (clearInterval(i),
                        t.text(""),
                        e.removeAttr("disabled"))
                    }, 1e3)
                }($("#tips-box [data-confirm]"), 5)
            }),
            $("#error-box button").click(function() {
                $(this).parent().hide(),
                a()
            }),
            $("#success-box button").click(function() {
                location.assign("/kod/")
            }),
            $("#tips-box [data-confirm]").click(function() {
                $(this).parent().hide(),
                a()
            }),
            $("#tips-box [data-cancel]").click(function() {
                $("#install-box").show(),
                $("#tips-box").hide()
            })),
            $("#usb-tips").html('<img src="./images/loading_big.gif" />').show().siblings().hide(),
            OrayBox.getUsbInfo(t),
            e.show()
        }),
        OrayBox.init(),
        OrayBox.updateFooterTime()
    }
    ,
    e.OrayBox.checkPhpPkg = function(e) {
        OrayBox.request("package_upgrade_list", {
            package_name: "oray-php5-inside"
        }, e)
    }
    ,
    e.OrayBox.installOraypkg = function(e, a, t) {
        OrayBox.request("oray_pkg_install", a, e, "POST", !0, !1, t)
    }
    ,
    e.OrayBox.getKod = function(e, a, t) {
        $.ajax({
            url: "http://pgyboxmgr-api.oray.com/app/get-kod",
            type: "GET",
            dataType: "json",
            data: a,
            success: e,
            error: t
        })
    }
    ,
    e.OrayBox.getUsbInfo = function(e) {
        OrayBox.request("usb_file_samba_get_ex", {}, e)
    }
    ,
    e.OrayBox.getOraypkgDevices = function(e) {
        OrayBox.request("oray_pkg_dest_get", {}, e)
    }
    ,
    e.OrayBox.restartHttpdService = function() {
        OrayBox.request("restart_service", {
            name: "uhttpd"
        }, null, "POST", !0, !1, null, 0)
    }
    ,
    e.OrayBox.formatFile = function(e, a) {
        OrayBox.request("usb_file_format", {
            device: a
        }, e)
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.initLan = function() {
        OrayBox.init(function() {
            if (OrayBox.initHeader(OrayBox.sn),
            -1 !== $.inArray(OrayBox.model, ["P1-2111", "P5-1210", "P5-2210", "ORG-900"]))
                return location.assign("/oraybox/network.html")
        }),
        function() {
            var e;
            window.sessionStorage && (e = window.sessionStorage.getItem("_lan_form_data"));
            e ? ($("#ip").val(JSON.parse(e).ip),
            $("#mask").val(JSON.parse(e).mask)) : $.getJSON("/cgi-bin/oraybox?_api=lan_get", function(e) {
                4 == e.code && location.assign("/oraybox/login.html?err=sesstimeout"),
                0 == e.code && ($("#ip").val(e.ip),
                $("#mask").val(e.mask))
            });
            $("#lan-form").show(),
            $("#load-info").remove(),
            OrayBox.resize()
        }(),
        $("#lan-form").bind("submit", function() {
            if (!OrayBox.checkLimitPrivilege("lan_set"))
                return !1;
            var t = $("#ip").val()
              , e = $("#mask").val();
            if (!$.func.isIp(t))
                return OrayBox.showMessage("请输入正确的路由器IP地址", !1, 0),
                $("#ip").focus(),
                !1;
            if (!$.func.isIp(e))
                return OrayBox.showMessage("请输入正确的子网掩码", !1, 0),
                $("#mask").focus(),
                !1;
            var a = $("#lan-form")
              , i = $("#submit-form")
              , n = setTimeout(function() {
                $("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在重启网络，请耐心等候</p>'].join(""), !0, function() {
                    var e;
                    null == OrayBox.intervalTmeout && (e = 0,
                    OrayBox.intervalTmeout = setInterval(function() {
                        30 < e ? OrayBox.showNotify("", !1, function() {
                            OrayBox.showMessage("局域网设置失败", !1),
                            clearInterval(OrayBox.intervalTmeout)
                        }) : OrayBox.checkDeviceSN(t),
                        e++
                    }, 1e4))
                }))
            }, 15e3);
            return $.ajax({
                url: a.attr("action"),
                type: "get",
                dataType: "json",
                data: a.serializeArray(),
                beforeSend: function() {
                    OrayBox.showMessage("正在提交数据...", !0, 0),
                    i && i.attr("disabled", !0)
                },
                complete: function() {
                    i && i.removeAttr("disabled")
                },
                success: function(e) {
                    var a;
                    4 == e.code ? (clearTimeout(n),
                    location.assign("/oraybox/login.html?err=sesstimeout")) : 0 == e.code ? (clearTimeout(n),
                    $("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                    OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在重启网络，请耐心等候</p>'].join(""), !0, function() {
                        var e;
                        null == OrayBox.intervalTmeout && (e = 0,
                        OrayBox.intervalTmeout = setInterval(function() {
                            30 < e ? OrayBox.showNotify("", !1, function() {
                                OrayBox.showMessage("局域网设置失败", !1),
                                clearInterval(OrayBox.intervalTmeout)
                            }) : OrayBox.checkDeviceSN(t),
                            e++
                        }, 1e4))
                    }))) : e && e.code && (clearTimeout(n),
                    a = OrayBox.getMessage(e.code),
                    OrayBox.showMessage(a, !1, 0))
                },
                error: function(e) {
                    return i && i.removeAttr("disabled"),
                    !1
                }
            }),
            !1
        }),
        $("#submit-form").click(function() {
            return $("#lan-form").submit(),
            !1
        }),
        OrayBox.updateFooterTime(),
        window.onbeforeunload = function() {
            !function() {
                {
                    var e, a, t, i;
                    window.sessionStorage && (e = window.sessionStorage,
                    a = $("#ip").val(),
                    t = $("#mask").val(),
                    i = {
                        ip: a,
                        mask: t
                    },
                    e.setItem("_lan_form_data", JSON.stringify(i)))
                }
            }()
        }
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.initLogin = function() {
        var e = $("#tips")
          , a = $.func.getQueryString("err");
        a && 0 < a.length && ("sesstimeout" == a ? e.text("登录超时，请重新登录...").parent().show() : "pwd" == a && e.text("密码错误，请重新输入...").parent().show());
        var t = $.func.getQueryString("errcode")
          , i = $.func.getQueryString("left_time")
          , n = $.func.getQueryString("left_login_count");
        switch (t) {
        case "100":
        case "4":
            0 < n ? e.text("帐号或密码错误，您还可以尝试" + n + "次").parent().show() : e.text("密码错误，请重新输入...").parent().show();
            break;
        case "5":
            e.text("帐号或密码错误，您重试次数已用完").parent().show();
            break;
        case "6":
            e.text("您已超过错误次数，请" + i + "秒后再试").parent().show();
            break;
        case "7":
            e.text("当前IP禁止登录").parent().show()
        }
        var s = !1;
        $("#forget_pass").click(function() {
            $(".reset-tips").show(),
            s = !s
        }).mouseover(function() {
            $(".reset-tips").show()
        }).mouseout(function() {
            s || $(".reset-tips").hide()
        }),
        $(document).on("keyup", function(e) {
            13 === e.keyCode && $("#login-form").submit()
        }),
        OrayBox.init(function() {
            var e = OrayBox.encodeSn(OrayBox.sn);
            $('[data-name="sn"]').html(e),
            -1 !== $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"]) && $(".reset-tips").text("在U盘根目录新建一个名为orayReset的文件（无需输入后缀名），然后将U盘接入路由器即可恢复出厂设置");
            var a = !!OrayBox.name;
            switch (OrayBox.model) {
            case "X1-1111":
            case "X1-2111":
            case "P1-2111":
                $(".router-wrap").html('<img width="99" height="95" src="./images/router_x1.png">');
                break;
            case "X3-D1509":
                $(".router-wrap").html('<img width="99" height="95" src="./images/router_d1509.png">');
                break;
            case "X3-D1509A":
            case "X3-D1509B":
                $(".router-wrap").html('<img width="99" height="95" src="./images/router_x3.png">');
                break;
            case "X3-2151":
            case "X3-3251":
            case "X3Pro-1153":
                a ? $(".router-wrap").html('<img width="160" height="160" src="./images/router_x3-channel.png">') : $(".router-wrap").html('<img width="99" height="95" src="./images/router_x3.png">');
                break;
            case "E3-1141":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_e3.png">');
                break;
            case "X5-1253":
            case "X5-2253":
            case "X5-3353":
                $(".router-wrap").html('<img width="99" height="95" src="./images/router_x5.png">');
                break;
            case "X5-4253":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_x5-v2.png">');
                break;
            case "X5-5255":
            case "X5-6256":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_x5-v2.png">');
                break;
            case "X6-1293P":
            case "X6-2293P":
                a ? $(".router-wrap").html('<img width="160" height="160" src="./images/router_x6-channel.png">') : $(".router-wrap").html('<img width="99" height="95" src="./images/router_x6.png">');
                break;
            case "X6-3293P":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_x6-v2.png">');
                break;
            case "V1000":
                $(".router-wrap").html('<img width="150" height="95" src="./images/router_v5.png">');
                break;
            case "G5-1250":
                a ? $(".router-wrap").html('<img width="160" height="160" src="./images/router_g5-channel.png">') : $(".router-wrap").html('<img width="99" height="95" src="./images/router_g5.png">');
            case "G5-2250":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_g5_v2.png">');
                break;
            case "A500":
                $(".router-wrap").html('<img width="120" height="120" src="./images/router_a500.png" style="margin: 0;">');
                break;
            case "G100Pro-1240":
            case "G100Pro-2240":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_g100pro.png">');
                break;
            case "G300Pro-1440":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_g300pro.png">');
                break;
            case "V2000-1260":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_v2000.png">');
                break;
            case "V3000-1460":
                $(".router-wrap").html('<img width="100" height="100" src="./images/router_v3000.png">');
                break;
            case "ORH-180":
            case "ORH-260":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_x3-channel.png">');
                break;
            case "ORG-220":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_g5-channel.png">');
                break;
            case "ORG-900":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_org900.png">');
                break;
            case "ORG-1100":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_org1100.png">');
                break;
            case "ORH-100":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_orh100.png">');
                break;
            case "R300-1121G":
            case "R300-2121G":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_r300.png">');
                break;
            case "R300S-1151G":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_r300s.png">');
                break;
            case "R300A-1121G":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_r300a.png">');
                break;
            case "R300C-1121G":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_r300c.png">');
                break;
            case "X4-1123G":
            case "X4-2123G":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_x4.png">');
                break;
            case "X4C-1141G":
            case "X4C-2131G":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_x4c.png">');
                break;
            case "GBox-1230":
                $(".router-wrap").html('<img width="160" height="160" src="./images/router_gbox-1230.png">')
            }
            var t = a ? OrayBox.name : OrayBox.model;
            $('[data-name="machine-type"]').html("（" + t + "）"),
            OrayBox.isMultiUser ? ($("#login-form").bind("submit", function() {
                var e = $("#password")
                  , a = $("#username");
                return a.val().length <= 0 ? (OrayBox.showMessage("请输入登录帐号", !1, 0),
                a.focus(),
                !1) : e.val().length <= 0 ? (OrayBox.showMessage("请输入登录密码", !1, 0),
                e.focus(),
                !1) : void 0
            }),
            $("#login-btn").click(function() {
                return $("#login-form").submit(),
                !1
            }),
            $("#username").removeAttr("disabled").show().focus()) : ($("#login-form").bind("submit", function() {
                if ($("#password").val().length <= 0)
                    return OrayBox.showMessage("请输入设备登录密码", !1, 0),
                    $("#password").focus(),
                    !1
            }),
            $("#login-btn").click(function() {
                return $("#login-form").submit(),
                !1
            }),
            $("#password").focus())
        })
    }
}(window),
function(scope) {
    scope.OrayBox = scope.OrayBox || {},
    scope.OrayBox.initNetwork = function() {
        var waySelect = $("#way_1").select({
            inputClass: "fm-text",
            searchable: !1,
            inputable: !1
        }), waySelect2 = $("#way_2").select({
            inputClass: "fm-text",
            searchable: !1,
            inputable: !1
        }), spareModeSelect, tipsWin = $("#tips-window").window({
            closeCls: "close",
            draggable: !0,
            drag: {
                handle: ".window-header",
                not: ":input,img,a",
                distance: 5,
                dragging: function(e) {
                    e.offsetX < 0 && (e.offsetX = 0),
                    e.offsetY < 0 && (e.offsetY = 0)
                }
            },
            center: !0,
            blankCls: ".window-wrapper"
        }), ssidSelect, loadingWifiList = !1, is3GNetwork = !1, x1SettingTips = null, linkStatusInterval = {}, apnAuthSelect1, apnModesSelect1, apnAuthSelect1Sim2, apnModesSelect1Sim2, wifi = {
            ssid: "OrayBox",
            pwd: ""
        }, has5GWifi = !1, staWifiList = [], scanWifiMap = {}, isWan2lan = !1, form = $("#network-form"), button = $("#network-btn"), networkSetTask = OrayBox.sortTask(), lastSubmit = [], _ssidSelect, _apnAuthSelect, _apnModesSelect, _apnAuthSelectSim2, _apnModesSelectSim2;
        function _initFormData() {
            var e;
            window.sessionStorage && (e = window.sessionStorage.getItem("_network_form_data")),
            e && _loadData(e)
        }
        function _loadData(jsonStr) {
            var obj = eval("(" + jsonStr + ")"), key, value, tagName, type, arr, x;
            for (x in obj)
                key = x,
                value = obj[x],
                $("[name='" + key + "'],[name='" + key + "[]']").each(function() {
                    tagName = $(this)[0].tagName,
                    type = $(this).attr("type"),
                    "INPUT" === tagName && "radio" !== type && "checkbox" !== type && $(this).val(value)
                })
        }
        function _leavePage() {
            var e, t;
            window.sessionStorage && (e = window.sessionStorage,
            t = {},
            $.each(form.serializeArray(), function(e, a) {
                t[a.name] = a.value
            }),
            e.setItem("_network_form_data", JSON.stringify(t)))
        }
        function compareVersion(e, a, t) {
            var i = toNum(e)
              , n = toNum(a)
              , s = !1;
            switch (t) {
            case "=":
                s = i == n;
                break;
            case ">=":
                s = i == n || n < i;
                break;
            case ">":
                s = n < i;
                break;
            case "<":
                s = i < n;
                break;
            case "<=":
                s = i == n || i < n
            }
            return s
        }
        function toNum(e) {
            for (var a = e.split("."), t = ["", "0", "00", "000", "0000"].reverse(), i = 0; i < a.length; i++) {
                var n = a[i].length;
                a[i] = t[n] + a[i]
            }
            return a.join("")
        }
        function _initApn() {
            $("#way_1").append('<option value="6">APN（4G）</option>'),
            waySelect.refresh(),
            $("#apn-btn_1").click(function() {
                $(this).prop("checked") ? $("#apn-options_1").show() : $("#apn-options_1").hide(),
                OrayBox.resize()
            }),
            apnAuthSelect1 = form.find('select[name="apn_auth_1"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "认证方式"
            }),
            apnModesSelect1 = form.find('select[name="apn_modes_1"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "网络模式"
            }),
            apnAuthSelect1Sim2 = form.find('select[name="apn_auth_1_sim2"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "认证方式"
            }),
            apnModesSelect1Sim2 = form.find('select[name="apn_modes_1_sim2"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "网络模式"
            })
        }
        function _initApnTab() {
            $("#sim-box").show(),
            $("#b_sim-box").show(),
            $("#sim-tab").show(),
            $("#sim_options_1").addClass("sim-tab-btn-on"),
            $("#sim_options_1").click(function() {
                return $("#sim_options_2").removeClass("sim-tab-btn-on"),
                $("#sim_options_1").addClass("sim-tab-btn-on"),
                $("#sim-tab-1").show(),
                $("#sim-tab-2").hide(),
                !1
            }),
            $("#sim_options_2").click(function() {
                return $("#sim_options_1").removeClass("sim-tab-btn-on"),
                $("#sim_options_2").addClass("sim-tab-btn-on"),
                $("#sim-tab-2").show(),
                $("#sim-tab-1").hide(),
                !1
            }),
            $("#b_sim-tab").show(),
            $("#b_sim_options_1").addClass("sim-tab-btn-on"),
            $("#b_sim_options_1").click(function() {
                return $("#b_sim_options_2").removeClass("sim-tab-btn-on"),
                $("#b_sim_options_1").addClass("sim-tab-btn-on"),
                $("#b_sim-tab-1").show(),
                $("#b_sim-tab-2").hide(),
                !1
            }),
            $("#b_sim_options_2").click(function() {
                return $("#b_sim_options_1").removeClass("sim-tab-btn-on"),
                $("#b_sim_options_2").addClass("sim-tab-btn-on"),
                $("#b_sim-tab-2").show(),
                $("#b_sim-tab-1").hide(),
                !1
            })
        }
        function _initReserveNet() {
            var a, t;
            -1 === $.inArray(OrayBox.model, ["X1-1111", "ORH-180", "ORG-220", "ORH-100", "X6-1293P", "X6-2293P", "X6-3293P", "A500", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "V1000", "V2000-1260", "V3000-1460", "ORG-1100", "GBox-1230"]) && ($("#b_show-tipswin").click(function() {
                return tipsWin.show(),
                !1
            }),
            $("#b_show-more-set").show(),
            $("#b_show-more-set").click(function() {
                $("#b-service-name").show(),
                $("#b_close-more-set").show(),
                $("#b_show-more-set").hide()
            }),
            $("#b_close-more-set").click(function() {
                $("#b-service-name").hide(),
                $("#b_close-more-set").hide(),
                $("#b_show-more-set").show()
            }),
            a = null,
            $("#set-reserve-entry").show(),
            OrayBox.getWanSpare(function(e) {
                0 === e.code ? (a = e.mod,
                "usb" == (t = e).mod ? $('#way_1 option[value="5"]').remove() : "sim" == e.mod ? $('#way_1 option[value="6"]').remove() : "wifi_sta" == e.mod ? $('#way_1 option[value="4"]').remove() : ($('#way_1 option[value="1"]').remove(),
                $('#way_1 option[value="2"]').remove(),
                $('#way_1 option[value="3"]').remove()),
                waySelect.refresh(),
                $('#network-info [data-name="reserve-network_1"]').html('已设置<a class="link marl10" href="javascript:void(0)" data-act="show-set-reserve">查看详情</a><a class="link marl10" href="javascript:void(0)" data-act="set-reserve" data-op="3">取消设置</a>')) : $('#network-info [data-name="reserve-network_1"]').html('未设置<a class="link marl10" href="javascript:void(0)" data-act="show-set-reserve">立即设置</a>')
            }),
            $('[data-act="show-set-reserve"]').live("click", function() {
                if ($("#setting-info").hide(),
                $("#network-info").hide(),
                $("#reserve-setting-info").show(),
                $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300S-1151G", "R300A-1121G", "R300C-1121G", "X4-1123G", "X4-2123G", "X4C-1141G", "X4C-2131G", "E3-1141"]) <= -1 && $('#spare_mode option[value="sim"]').remove(),
                -1 != $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300S-1151G", "R300A-1121G", "R300C-1121G", "X4-1123G", "X4-2123G", "X4C-1141G", "X4C-2131G", "E3-1141"]) && $('#spare_mode option[value="usb"]').remove(),
                -1 != $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G5-1250", "G5-2250", "A500", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "P1-2111", "P5-1210", "P5-2210", "ORG-220", "ORG-900", "ORG-1100"]) && $('#spare_mode option[value="wifi_sta"]').remove(),
                !spareModeSelect) {
                    switch (spareModeSelect = $("#spare_mode").select({
                        inputClass: "fm-text",
                        searchable: !1,
                        inputable: !1
                    }),
                    a && spareModeSelect.select(a),
                    $("#spare_mode").val()) {
                    case "usb":
                        $("#reserve-setting-info .usb input").val("4G"),
                        $("#reserve-setting-info .usb").show();
                        break;
                    case "pppoe":
                        $("#reserve-setting-info .pppoe").show(),
                        $('input[name="b_account"]').val(t && t.user ? t.user : ""),
                        $('input[name="b_password"]').val(t && t.pwd ? t.pwd : ""),
                        $('input[name="b_service"]').val(t && t.service ? t.service : "");
                        break;
                    case "static":
                        $("#reserve-setting-info .static").show(),
                        $('input[name="b_ip"]').val(t && t.ip ? t.ip : ""),
                        $('input[name="b_mask"]').val(t && t.mask ? t.mask : ""),
                        $('input[name="b_gw"]').val(t && t.gateway ? t.gateway : "");
                        break;
                    case "wifi_sta":
                        $("#reserve-setting-info .wifi_sta").show(),
                        _initReserveStaWifi(),
                        t && t.sta_wifi && (t.sta_wifi.ssid && form.find('input[name="b_ssid"]').val(t.sta_wifi.ssid),
                        t.sta_wifi.key && form.find('input[name="b_ssid_pwd"]').val(t.sta_wifi.key),
                        $('#reserve-setting-info input[name="b_wifi_type"][value="' + t.sta_wifi.wifi_type + '"]').attr("checked", "checked"));
                        break;
                    case "sim":
                        $("#reserve-setting-info .sim").show(),
                        _initReserveSim(),
                        t && t.user && form.find('input[name="b_apn_user"]').val(t.user),
                        t && t.pwd && form.find('input[name="b_apn_pwd"]').val(t.pwd),
                        t && t.device && form.find('input[name="b_apn_device"]').val(t.device),
                        t && t.apn && form.find('input[name="b_apn_apn"]').val(t.apn),
                        t && t.pincode && form.find('input[name="b_apn_gw"]').val(t.pincode),
                        t && t.auth && _apnAuthSelect.select(t.auth),
                        t && t.modes && _apnModesSelect.select(t.modes),
                        t && t.delay && form.find('input[name="b_apn_delay"]').val(t.delay),
                        t && t.pdptype && form.find('input[name="b_apn_pdptype"]').val(t.pdptype),
                        t && t.plmn && form.find('input[name="b_apn_plmn"]').val(t.plmn)
                    }
                    OrayBox.resize(),
                    $("#spare_mode").change(function() {
                        switch (this.value) {
                        case "dhcp":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "usb":
                            $("#reserve-setting-info .usb input").val("4G"),
                            $("#reserve-setting-info .usb").show(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "pppoe":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").show(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "static":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").show(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").hide();
                            break;
                        case "wifi_sta":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").show(),
                            $("#reserve-setting-info .sim").hide(),
                            _initReserveStaWifi();
                            break;
                        case "sim":
                            $("#reserve-setting-info .usb").hide(),
                            $("#reserve-setting-info .pppoe").hide(),
                            $("#reserve-setting-info .static").hide(),
                            $("#reserve-setting-info .wifi_sta").hide(),
                            $("#reserve-setting-info .sim").show(),
                            _initReserveSim()
                        }
                        OrayBox.resize()
                    })
                }
            }),
            $('[data-act="renetwork"]').click(function() {
                $("#reserve-setting-info").hide(),
                $("#setting-info").hide(),
                $("#network-info").show()
            }),
            $('[data-act="set-reserve"]').live("click", function() {
                var e = $(this)
                  , a = e.attr("data-op");
                e.attr("disabled", "disabled");
                var t, i, n, s, o, r, c, d, p, l, f = $('select[name="spare_mode"]').val(), u = {
                    op: a,
                    mod: f
                };
                if (3 != a)
                    switch (f) {
                    case "pppoe":
                        u.user = $('input[name="b_account"]').val(),
                        u.pwd = $('input[name="b_password"]').val(),
                        u.service = $('input[name="b_service"]').val();
                        break;
                    case "static":
                        u.ip = $('input[name="b_ip"]').val(),
                        u.mask = $('input[name="b_mask"]').val(),
                        u.gateway = $('input[name="b_gw"]').val();
                        break;
                    case "wifi_sta":
                        var m = 0
                          , m = $("#reserve-setting-info .scan-box:visible").size() ? $.trim(_ssidSelect.val()) : $.trim(form.find('input[name="b_ssid"]').val())
                          , h = form.find('input[name="b_wifi_type"]:checked').val();
                        scanWifiMap[m] && (h = "wifi_scan_5g" === scanWifiMap[m].type ? "1" : "0");
                        var w = $.trim(form.find('input[name="b_ssid_pwd"]:not([disabled])').val());
                        u.sta_ssid = m,
                        u.wifi_type = h,
                        u.sta_bssid = scanWifiMap[m] ? scanWifiMap[m].mac : "",
                        u.sta_encryption = scanWifiMap[m] ? scanWifiMap[m].encryption : 0 < w.length ? "WPA2" : "none",
                        u.sta_channel = scanWifiMap[m] ? scanWifiMap[m].channel : "auto",
                        u.sta_key = w,
                        u.ap_encryption = "psk2",
                        OrayBox.getWifi(function(e) {
                            0 == e.code && (u.ap_ssid = e.ssid,
                            u.ap_key = e.pwd),
                            _submitReserve(u)
                        }, "1" === u.wifi_type ? "5G" : "2.4G");
                        break;
                    case "sim":
                        $("#b_apn-btn").prop("checked") && (t = $.trim(form.find('input[name="b_apn_user"]').val()),
                        i = $.trim(form.find('input[name="b_apn_pwd"]').val()),
                        n = $.trim(form.find('input[name="b_apn_device"]').val()),
                        s = $.trim(form.find('input[name="b_apn_apn"]').val()),
                        o = $.trim(form.find('input[name="b_apn_gw"]').val()),
                        r = _apnAuthSelect.val(),
                        c = _apnModesSelect.val(),
                        d = $.trim(form.find('input[name="b_apn_delay"]').val()),
                        p = $.trim(form.find('input[name="b_apn_pdptype"]').val()),
                        l = $.trim(form.find('input[name="b_apn_plmn"]').val()),
                        "auto" === c && (c = ""),
                        0 < t.length && (u.user = t),
                        0 < i.length && (u.pwd = i),
                        0 < n.length && (u.device = n),
                        0 < s.length && (u.apn = s),
                        0 < o.length && (u.pincode = o),
                        0 < r.length && (u.auth = r),
                        0 < c.length && (u.modes = c),
                        0 < d.length && (u.delay = d),
                        0 < p.length && (u.pdptype = p),
                        0 < l.length && (u.plmn = l)),
                        -1 != $.inArray(OrayBox.model, ["R300C-1121G"]) && (setSpareSimConfig(),
                        setSim(!0))
                    }
                ("wifi_sta" != f || "wifi_sta" == f && 3 == a) && _submitReserve(u)
            }))
        }
        function _submitReserve(a) {
            OrayBox.setWanSpare(function(e) {
                return 0 !== e.code ? OrayBox.showMessage(("1" === a.op ? "设置" : "取消") + "备用网络失败", !1, 0) : void OrayBox.checkStatusV2(function() {
                    OrayBox.showMessage(("1" === a.op ? "设置" : "取消") + "备用网络成功", !0),
                    OrayBox.showNotify("", !1),
                    setTimeout(function() {
                        location.assign(location.href)
                    }, 2e3)
                }, !0)
            }, a)
        }
        function _initReserveSim() {
            "object" != typeof _apnAuthSelect && ($("#b_apn-btn").click(function() {
                $(this).prop("checked") ? $("#b_apn-options").show() : $("#b_apn-options").hide(),
                OrayBox.resize()
            }),
            _apnAuthSelect = form.find('select[name="b_apn_auth"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "认证方式"
            }),
            _apnModesSelect = form.find('select[name="b_apn_modes"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "网络模式"
            }),
            _apnAuthSelectSim2 = form.find('select[name="b_apn_auth_sim2"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "认证方式"
            }),
            _apnModesSelectSim2 = form.find('select[name="b_apn_modes_sim2"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1,
                placeholder: "网络模式"
            }))
        }
        function _initReserveStaWifi() {
            "object" != typeof _ssidSelect && (_ssidSelect = $("#b_ssid").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }),
            has5GWifi && $("#reserve-setting-info .wifi-type").show(),
            $("#b_show_pwd").click(function() {
                var e;
                this.checked ? (e = $('input[name="b_ssid_pwd"][type="password"]').val(),
                $('input[name="b_ssid_pwd"][type="password"]').attr("disabled", "disabled").hide(),
                $('input[name="b_ssid_pwd"][type="text"]').removeAttr("disabled").val(e).show()) : (e = $('input[name="b_ssid_pwd"][type="text"]').val(),
                $('input[name="b_ssid_pwd"][type="text"]').attr("disabled", "disabled").hide(),
                $('input[name="b_ssid_pwd"][type="password"]').removeAttr("disabled").val(e).show())
            }),
            $("#reserve-setting-info a[data-opt]").click(function() {
                var e = $(this).data("opt");
                "rescan" == e ? _reserveScanWifi() : "manual-entry" == e ? ($("#reserve-setting-info .manual-entry").show(),
                $("#reserve-setting-info .manual-entry input").removeAttr("disabled"),
                $("#b_ssid_mac, #b_ssid_encryption").val(""),
                $(this).parent().hide(),
                _ssidSelect.disabled(),
                has5GWifi && $("#reserve-setting-info .wifi-type").show()) : "auto-scan" == e && ($("#reserve-setting-info .manual-entry").hide(),
                $("#reserve-setting-info .wifi-type").hide(),
                $("#reserve-setting-info .manual-entry input").attr("disabled", "disabled"),
                $("#reserve-setting-info .scan-box").show(),
                _reserveScanWifi())
            }),
            $('select[name="b_ssid"]').change(function() {
                var e = this.value
                  , a = $(this).find('option[value="' + e + '"]').attr("data-mac")
                  , t = $(this).find('option[value="' + e + '"]').attr("data-encryption")
                  , i = $(this).find('option[value="' + e + '"]').attr("data-channel");
                $('#reserve-setting-info input[name="b_ssid_mac"]').val(a),
                $('#reserve-setting-info input[name="b_ssid_encryption"]').val(t),
                $('#reserve-setting-info input[name="b_ssid_channel"]').val(i),
                _ssidSelect.select(e)
            }))
        }
        function _reserveScanWifi() {
            var d = $('select[name="b_ssid"]');
            loadingWifiList = !0;
            var p = $('#reserve-setting-info a[data-act="set-reserve"]');
            OrayBox.showMessage("正在扫描WIFI列表，请耐心等待...", !0, 0),
            p && p.attr("disabled", !0),
            d.hide(),
            $('input[name="b_ssid_pwd"]').css({
                "border-top": "1px solid #e1e1e1"
            }),
            $('#reserve-setting-info [data-opt="rescan"], #reserve-setting-info [data-opt="manual-entry"]').hide(),
            d.parent().find("label.loading-tips").append('&nbsp;&nbsp;<img src="./images/loading_160421.gif" style="vertical-align:middle;" />&nbsp;正在扫描WIFI列表...').show(),
            OrayBox.getWifiScan(function(e) {
                if (_initScanWifi(e),
                loadingWifiList = !1,
                OrayBox.showMessage("", !0),
                staWifiList.length <= 0)
                    return $("#reserve-setting-info .loading-tips").html("抱歉，没有扫描到WIFI！"),
                    !1;
                for (var a = [], t = 0, i = staWifiList.length; t < i; t++) {
                    var n, s, o, r, c = staWifiList[t];
                    "" !== c && (s = "none" != (n = scanWifiMap[c].encryption) && "" != n ? "/oraybox/images/haspwd_" : "/oraybox/images/nopwd_",
                    o = parseInt(scanWifiMap[c].signal, 10),
                    s += 0 <= (o = Math.abs(o)) && o <= 55 ? "1.png" : 55 < o && o <= 70 ? "2.png" : 70 < o && o <= 85 ? "3.png" : "4.png",
                    r = "",
                    "wifi_scan_5g" === scanWifiMap[c].type && (r = "/oraybox/images/5g.png"),
                    a.push('<option value="' + scanWifiMap[c].ssid + '" data-mac="' + scanWifiMap[c].mac + '" data-str="' + s + '" data-channel="' + scanWifiMap[c].channel + '" data-encryption="' + n + '" data-scan="' + scanWifiMap[c].type + '" data-suffix="' + r + '">' + scanWifiMap[c].ssid + "</option>"))
                }
                d.html(a.join("")),
                "object" == typeof _ssidSelect ? (_ssidSelect.refresh(!0),
                _ssidSelect.enabled(),
                _ssidSelect.selectByIndex(0)) : (d.show(),
                _ssidSelect.enabled()),
                $('input[name="b_ssid_pwd"]').css({
                    "border-top": "none"
                }),
                $('#reserve-setting-info [data-opt="rescan"], #reserve-setting-info [data-opt="manual-entry"]').show(),
                $("#reserve-setting-info label.loading-tips").empty().hide(),
                p && p.removeAttr("disabled")
            })
        }
        function _initNetInfo() {
            $('[data-act="resetting"]').live("click", function() {
                $("#network-info").hide(),
                $("#reserve-setting-info").hide(),
                $("#setting-info").show(),
                isWan2lan && ($("#way_1-1").hide(),
                $("#way_1-3").hide(),
                $("#way_1-4").hide(),
                $("#way_1-5").hide())
            }),
            $('[data-act="switch_connect"]').live("click", function() {
                var a = $(this).data("op")
                  , t = $(this).data("ether");
                OrayBox.setInterfaceControl(function(e) {
                    return 0 !== e.code ? OrayBox.showMessage(("connect" === a ? "连接" : "断开") + "拨号失败", !1, 0) : "connect" === a ? (OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/pppoe_ing.gif" border="0" width="220" height="58" /></p>', '<p style="font-size:18px;">正在拨号，请稍候...</p>', '<p style="margin-top: 10px"><a class="link close" href="javascript:void(0);" data-act="switch_connect" data-op="disconnect" data-ether="' + t + '" style="margin-top: 40px;">停止拨号</a></p>'].join(""), !0),
                    OrayBox.isStopPending = !1,
                    OrayBox.checkInterfaceDump(function(e) {
                        var a = [];
                        e.result.up ? (a.push('<p><span class="iconfont" style="font-size:64px;color: #1AFA29;">&#xe624;</span></p>'),
                        a.push('<p style="font-size:18px;">拨号成功</p>')) : (a.push('<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p>'),
                        a.push('<p style="font-size:18px;">拨号失败</p>')),
                        a.push('<a class="btn btn-small close" href="javascript:void(0);" onclick="location.reload()" style="margin-top: 40px;">确定</a>'),
                        OrayBox.showNotify(a.join(""), !0)
                    }, function(e) {
                        OrayBox.showNotify(['<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p>', '<p style="font-size:18px;">拨号失败：' + OrayBox.failCode[e[0].code] + "</p>", '<a class="btn btn-small close" href="javascript:void(0);" data-act="resetting" style="margin-top: 40px;">返回重新设置</a>'].join(""), !0)
                    }, t)) : (OrayBox.isStopPending = !0,
                    void _getLinkStatus(t))
                }, t, a)
            })
        }
        function _initNetWay(e) {
            OrayBox.getInterfaces(function(e) {
                $.each(e, function(a, e) {
                    OrayBox.getDns(function(e) {
                        _initDns(a, e)
                    }, e),
                    _initNet(a)
                }),
                form.bind("submit", function() {
                    return OrayBox.checkLimitPrivilege("wan_set") && _filterForm(form, e) && (networkSetTask.reset(),
                    lastSubmit = [],
                    $.each(e, function(e, a) {
                        var t = $("select[name=way_" + e + "]").val();
                        if (("X1" == OrayBox.type || "P1" == OrayBox.type) && $("#current-way_" + e).val() != t)
                            return _showX1Tips(t, e, a);
                        5 == t ? lastSubmit.push(setUsb3G) : (4 == t ? staWifiSubmit : submitNetwork)(e, a)
                    }),
                    0 < lastSubmit.length && networkSetTask.push(lastSubmit).run()),
                    !1
                }),
                button.click(function() {
                    $(this).attr("disabled") || form.submit()
                }),
                $(document).on("keyup", function(e) {
                    13 != e.keyCode || $("#network-btn").attr("disabled") || form.submit()
                }),
                form.show(),
                $("#load-info").remove()
            }, e)
        }
        function _showX1Tips(e, a, t) {
            var i;
            switch (null == x1SettingTips && (x1SettingTips = $("#x1-setting-tips-window").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5
                },
                center: !0
            }),
            $("#x1-setting-tips-window button").click(function() {
                var e = $("select[name=way_" + a + "]").val();
                x1SettingTips.close(),
                5 == e ? lastSubmit.push(setUsb3G) : (4 == e ? staWifiSubmit : submitNetwork)(a, t),
                networkSetTask.push(lastSubmit).run()
            })),
            e = parseInt(e, 10)) {
            case 1:
                i = "宽带拨号方式上网，网口将作为WAN口使用";
                break;
            case 2:
                i = "动态IP方式上网，网口将作为WAN口使用";
                break;
            case 3:
                i = "静态IP方式上网，网口将作为WAN口使用";
                break;
            case 4:
                i = "无线中继方式上网，网口将作为LAN口使用";
                break;
            case 5:
                i = "3G/4G USB上网适配器方式上网，DHCP服务自动启动，网口将作为LAN口使用";
                break;
            default:
                i = "动态IP方式上网，网口将作为WAN口使用"
            }
            $("#setting-tips").text(i),
            x1SettingTips.show()
        }
        function _initNet(a) {
            $("#show-tipswin_" + a).click(function() {
                return tipsWin.show(),
                !1
            }),
            $("#show-more-set_" + a).show(),
            $("#show-more-set_" + a).click(function() {
                $("#service-name-" + a).show(),
                $("#close-more-set_" + a).show(),
                $("#show-more-set_" + a).hide()
            }),
            $("#close-more-set_" + a).click(function() {
                $("#service-name-" + a).hide(),
                $("#close-more-set_" + a).hide(),
                $("#show-more-set_" + a).show()
            }),
            $("#way_" + a).change(function() {
                var e = this.value
                  , e = parseInt(e, 10);
                $(".way_" + a + "-box").hide(),
                2 != e && ($("#way_" + a + "-" + e).show(),
                !loadingWifiList && 4 == e && $('select[name="ssid"] option').size() <= 0 && scanWifi(a)),
                1 == e || 2 == e || 3 == e ? $("#dns-box_" + a).show() : $("#dns-box_" + a).hide(),
                OrayBox.resize()
            })
        }
        function _initDns(i, a) {
            0 < $("#dns-box_" + i).size() && (OrayBox.request("wan_get", {}, function(e) {
                null != e.wan_dns ? ($("input[name=diydns_" + i + '][value="1"]').click(),
                $("#dns-box_" + i + ' input[name="maindns_' + i + '"]').val(a.dns),
                $("#current-dns_" + i).val(a.dns),
                $("#fill-dns_" + i).show()) : ($("input[name=diydns_" + i + '][value="0"]').click(),
                $("#fill-dns_" + i).hide())
            }),
            0 < a.backup_dns.length && ($("#dns-box_" + i + ' input[name="backupdns_' + i + '"]').val(a.backup_dns),
            $("#current-mdns_" + i).val(a.backup_dns)),
            $("#dns-box_" + i).find("input[name=diydns_" + i + "]").change(function() {
                1 == $(this).val() ? $("#fill-dns_" + i).show() : ($("#fill-dns_" + i + " input").val(""),
                $("#fill-dns_" + i).hide()),
                OrayBox.resize()
            }),
            $("#recommend-dns_" + i).click(function() {
                var e = $(this).data("maindns")
                  , a = $(this).data("backupdns")
                  , t = $("#dns-box_" + i);
                t.find('input[name="maindns_' + i + '"]').val(e),
                t.find('input[name="backupdns_' + i + '"]').val(a)
            }),
            OrayBox.resize()),
            $('#network-info [data-name="dns_' + i + '"]').text(a.dns || "-")
        }
        function _initUsb3G(e, a, t) {
            if (2 == e.code)
                return "function" == typeof a && a.apply(null, t),
                !1;
            var i, n = $("#proto").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }), s = $("#model").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }), o = $("#dev").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }), r = $("#company").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            $("#area").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }),
            $("#authorize").select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            if ($("#way_1").append('<option value="5">3G/4G USB适配器</option>'),
            waySelect.refresh(),
            $("#custom-apn").bind("change", function() {
                $(this).prop("checked") ? $("#custom-apn-box").show() : $("#custom-apn-box").hide()
            }),
            $("#proto").bind("change", function() {
                "3g" == this.value ? ($("#3g-box").show(),
                $("#dhcp-box").hide()) : ($("#3g-box").hide(),
                $("#dhcp-box").show()),
                OrayBox.resize()
            }),
            0 == e.code) {
                if (e.usb_status.devices) {
                    for (var c = e.usb_status.devices, d = [], p = 0, l = 0; l < c.length; l++)
                        0 < c[l].length && d.push('<option value="' + c[l] + '">' + c[l] + "</option>"),
                        "/dev/ttyUSB0" == c[l] && (p = l);
                    $("#dev").append(d.join("")),
                    o.refresh(),
                    o.selectByIndex(p)
                }
                1 == e.wan_3g_setup.enabled && (setTimeout(function() {
                    waySelect.select("5")
                }, 500),
                $('#spare_mode option[value="usb"]').remove(),
                $("#current-way_1").val("5"),
                $("#dns-box_1").hide(),
                $(".way_1-box").hide(),
                $("#way_1-5").show(),
                "3g" == (i = e.wan_3g_setup).proto ? ($("#3g-box").show(),
                $("#dhcp-box").hide(),
                "ctnet" == i.apn || "cmnet/cmwap" == i.apn || "3gnet" == i.apn ? r.select(i.apn) : ($("#custom-apn-box").show(),
                $("#custom-apn").prop("checked", !0),
                $("#apn").val(i.apn),
                $("#dialnumber").val(i.dialnumber)),
                "undefined" != typeof i.username && 0 < i.username.length && $("#apn-user").val(i.username),
                "undefined" != typeof i.pwssword && 0 < i.pwssword.length && $("#apn-pwssword").val(i.pwssword),
                n.select("3g"),
                o.select(i.dev)) : ($("#dhcp-box").show(),
                $("#3g-box").hide(),
                i.ifname = "usb0" != i.ifname ? "eth1" : i.ifname,
                n.select("dhcp"),
                s.select(i.ifname)),
                $('#network-info [data-name="mod_1"]').text("3G/4G USB适配器"),
                OrayBox.getBaseInfo(function(e) {
                    $('#network-info [data-name="ip_1"]').text(e.wan_ip || "-"),
                    $('#network-info [data-name="mask_1"]').text(e.wan_mask || "-"),
                    $('#network-info [data-name="gateway_1"]').text(e.wan_gw || "-")
                }),
                _initReserveNet(),
                is3GNetwork = !0,
                OrayBox.resize())
            }
            "function" == typeof a && a.apply(null, t)
        }
        function _initWifiRepeater(e, a, t) {
            if (2 == e.code)
                return "function" == typeof a && a.apply(null, t),
                !1;
            if ($("#way_1").append('<option value="4">无线中继</option>'),
            waySelect.refresh(),
            $("#show_pwd").click(function() {
                var e;
                this.checked ? (e = $('input[name="ssid_pwd"][type="password"]').val(),
                $('input[name="ssid_pwd"][type="password"]').attr("disabled", "disabled").hide(),
                $('input[name="ssid_pwd"][type="text"]').removeAttr("disabled").val(e).show()) : (e = $('input[name="ssid_pwd"][type="text"]').val(),
                $('input[name="ssid_pwd"][type="text"]').attr("disabled", "disabled").hide(),
                $('input[name="ssid_pwd"][type="password"]').removeAttr("disabled").val(e).show())
            }),
            $("#way_1-4 a[data-opt]").click(function() {
                var e = $(this).data("opt");
                "rescan" == e ? scanWifi(1) : "manual-entry" == e ? ($("#way_1-4 .manual-entry").show(),
                $("#way_1-4 .manual-entry input").removeAttr("disabled"),
                $("#ssid_mac, #ssid_encryption").val(""),
                $(this).parent().hide(),
                ssidSelect.disabled(),
                has5GWifi && $("#way_1-4 .wifi-type").show()) : "auto-scan" == e && ($("#way_1-4 .manual-entry").hide(),
                $("#way_1-4 .wifi-type").hide(),
                $("#way_1-4 .manual-entry input").attr("disabled", "disabled"),
                $(".scan-box").show(),
                scanWifi(1))
            }),
            $('select[name="ssid"]').change(function() {
                var e = this.value
                  , a = $(this).find('option[value="' + e + '"]').attr("data-mac")
                  , t = $(this).find('option[value="' + e + '"]').attr("data-encryption")
                  , i = $(this).find('option[value="' + e + '"]').attr("data-channel");
                $('#way_1-4 input[name="ssid_mac"]').val(a),
                $('#way_1-4 input[name="ssid_encryption"]').val(t),
                $('#way_1-4 input[name="ssid_channel"]').val(i),
                ssidSelect.select(e)
            }),
            is3GNetwork)
                return !0;
            if (0 == e.code && 1 == e.enabled) {
                loadingWifiList = !0,
                waySelect.select("4"),
                $('#spare_mode option[value="wifi_sta"]').remove(),
                $("#current-way_1").val("4"),
                $(".way_1-box").hide(),
                $("#way_1-4").show(),
                $("#dns-box_1").hide();
                e.sta_wifi.ssid;
                return $('input[name="cancelstawifi"]').val("1"),
                e.sta_wifi.wifi_type && $('input[name="wifi_type"][value="' + e.sta_wifi.wifi_type + '"]').prop("checked", "checked"),
                has5GWifi && $("#way_1-4 .wifi-type").show(),
                $("#way_1-4 .manual-entry").show(),
                $(".scan-box").hide(),
                $('#way_1-4 .manual-entry input[name="ssid"]').val(e.sta_wifi.ssid).removeAttr("disabled"),
                $('#way_1-4 .scan-box select[name="ssid"]').attr("disabled", "disabled"),
                $('#way_1-4 input[name="ssid_mac"]').val(e.sta_wifi.bssid),
                $('#way_1-4 input[name="ssid_encryption"]').val(e.sta_wifi.encryption),
                $('#way_1-4 input[name="ssid_pwd"]').val(e.sta_wifi.key),
                $('#network-info [data-name="mod_1"]').text("无线中继"),
                OrayBox.getBaseInfo(function(e) {
                    $('#network-info [data-name="ip_1"]').text(e.wan_ip || "-"),
                    $('#network-info [data-name="mask_1"]').text(e.wan_mask || "-"),
                    $('#network-info [data-name="gateway_1"]').text(e.wan_gw || "-")
                }),
                OrayBox.resize(),
                _initReserveNet(),
                !0
            }
            "function" == typeof a && a.apply(null, t)
        }
        function _initWiredNetwork(e) {
            if (is3GNetwork)
                return !0;
            0 == e.code && ("kp4g" != e.mod ? ($('#spare_mode option[value="pppoe"]').remove(),
            $('#spare_mode option[value="dhcp"]').remove(),
            $('#spare_mode option[value="static"]').remove()) : $('#spare_mode option[value="sim"]').remove(),
            "dhcp" == e.mod ? (waySelect.select("2"),
            $("#current-way_1").val("2"),
            $(".way_1-box").hide(),
            $('#network-info [data-name="mod_1"]').text("动态IP")) : "pppoe" == e.mod ? (waySelect.select("1"),
            $("#current-way_1").val("1"),
            $(".way_1-box").hide(),
            $("#way_1-1").show(),
            $('input[name="account_1"]').val(e.user),
            $('input[name="password_1"]').val(e.pwd),
            $('input[name="service_1"]').val(e.service),
            $('#network-info [data-name="mod_1"]').text("宽带拨号"),
            $('#network-info [data-name="user_1"]').text(e.user || "-").parent().show(),
            _getLinkStatus("wan")) : "static" == e.mod ? (waySelect.select("3"),
            $("#current-way_1").val("3"),
            $(".way_1-box").hide(),
            $("#way_1-3").show(),
            $('input[name="ip_1"]').val(e.ip),
            $('input[name="mask_1"]').val(e.mask),
            $('input[name="gw_1"]').val(e.gateway),
            $('#network-info [data-name="mod_1"]').text("静态IP")) : "kp4g" == e.mod && (waySelect.select("6"),
            $("#current-way_1").val("6"),
            $(".way_1-box").hide(),
            $("#way_1-6").show(),
            $("#dns-box_1").hide(),
            e.user && form.find('input[name="apn_user_1"]').val(e.user),
            e.pwd && form.find('input[name="apn_pwd_1"]').val(e.pwd),
            e.device && form.find('input[name="apn_device_1"]').val(e.device),
            e.apn && form.find('input[name="apn_apn_1"]').val(e.apn),
            e.pincode && form.find('input[name="apn_gw_1"]').val(e.pincode),
            e.auth && apnAuthSelect1.select(e.auth),
            e.modes && apnModesSelect1.select(e.modes),
            e.delay && form.find('input[name="apn_delay_1"]').val(e.delay),
            e.pdptype && form.find('input[name="apn_pdptype_1"]').val(e.pdptype),
            e.plmn && form.find('input[name="apn_plmn_1"]').val(e.plmn),
            $('#network-info [data-name="mod_1"]').text("APN（4G）")),
            "dhcp" == e.mod2 ? (waySelect2.select("2"),
            $("#current-way_2").val("2"),
            $(".way_2-box").hide(),
            $('#network-info [data-name="mod_2"]').text("动态IP")) : "pppoe" == e.mod2 ? (waySelect2.select("1"),
            $("#current-way_2").val("1"),
            $(".way_2-box").hide(),
            $("#way_2-1").show(),
            $("#dns-box_2").hide(),
            $('input[name="account_2"]').val(e.user2),
            $('input[name="password_2"]').val(e.pwd2),
            $('input[name="service_2"]').val(e.service),
            $('#network-info [data-name="mod_2"]').text("宽带拨号"),
            $('#network-info [data-name="user_2"]').text(e.user2 || "-").parent().show(),
            _getLinkStatus("wan2")) : "static" == e.mod2 ? (waySelect2.select("3"),
            $("#current-way_2").val("3"),
            $(".way_2-box").hide(),
            $("#way_2-3").show(),
            $('input[name="ip_2"]').val(e.ip2),
            $('input[name="mask_2"]').val(e.mask2),
            $('input[name="gw_2"]').val(e.gateway2),
            $('#network-info [data-name="mod_2"]').text("静态IP")) : "kp4g" == e.mod2 && (waySelect2.select("6"),
            $("#current-way_2").val("6"),
            $(".way_2-box").hide(),
            $("#way_2-6").show(),
            $("#apn-btn_2").prop("checked", !0),
            $("#apn-options_2").show(),
            $('#network-info [data-name="mod_2"]').text("APN（4G）")),
            OrayBox.getBaseInfo(function(e) {
                $('#network-info [data-name="ip_1"]').text(e.wan_ip || "-"),
                $('#network-info [data-name="mask_1"]').text(e.wan_mask || "-"),
                $('#network-info [data-name="gateway_1"]').text(e.wan_gw || "-"),
                $('#network-info [data-name="ip_2"]').text(e.wan2_ip || "-"),
                $('#network-info [data-name="mask_2"]').text(e.wan2_mask || "-"),
                $('#network-info [data-name="gateway_2"]').text(e.wan2_gw || "-")
            }),
            "function" == typeof callback && callback.apply(null, callbackParams),
            _initReserveNet())
        }
        function _getLinkStatus(n) {
            linkStatusInterval[n] && clearTimeout(linkStatusInterval[n]),
            OrayBox.diagnose(n, function(e) {
                var a = '连接失败<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="connect" data-ether="' + n + '">立即连接</a>'
                  , t = 1
                  , i = !1;
                e.result && (e.result.errors ? (a = OrayBox.failCode[e.result.errors[0].code] || "设置错误",
                i = !0,
                "USER_REQUEST" === e.result.errors[0].code && (a += '<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="connect" data-ether="' + n + '">重新连接</a>')) : (e.result.pending && (a = '正在拨号中<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="disconnect" data-ether="' + n + '">断开</a>'),
                e.result.up && (a = '连接成功<a class="link marl10" href="javascript:void(0)" data-act="switch_connect" data-op="disconnect" data-ether="' + n + '">断开</a>'))),
                "wan2" === n && (t = 2),
                $('#network-info [data-name="link-status_' + t + '"]').html(a).parent().show(),
                i || (linkStatusInterval[n] = setTimeout(function() {
                    _getLinkStatus(n)
                }, 2e3))
            })
        }
        function _filterForm(c, e) {
            var d = !0;
            return $.each(e, function(e) {
                var a = $("select[name=way_" + e + "]").val();
                if (1 == a) {
                    if ($.trim(c.find('input[name="account_' + e + '"]').val()).length <= 0)
                        return OrayBox.showMessage("请输入宽带帐号", !1, 0),
                        c.find('input[name="account_' + e + '"]').focus(),
                        d = !1;
                    if ($.trim(c.find('input[name="password_' + e + '"]').val()).length <= 0)
                        return OrayBox.showMessage("请输入宽带密码", !1, 0),
                        c.find('input[name="password_' + e + '"]').focus(),
                        d = !1
                } else if (3 == a) {
                    var t = $.trim(c.find('input[name="ip_' + e + '"]').val())
                      , i = $.trim(c.find('input[name="mask_' + e + '"]').val())
                      , n = $.trim(c.find('input[name="gw_' + e + '"]').val());
                    if (t.length <= 0)
                        return OrayBox.showMessage("请输入IP地址", !1, 0),
                        c.find('input[name="ip_' + e + '"]').focus(),
                        d = !1;
                    if (!$.func.isIp(t))
                        return OrayBox.showMessage("请输入正确IP地址", !1, 0),
                        c.find('input[name="ip_' + e + '"]').focus(),
                        d = !1;
                    if (i.length <= 0)
                        return OrayBox.showMessage("请输入子网掩码", !1, 0),
                        c.find('input[name="mask_' + e + '"]').focus(),
                        d = !1;
                    if (!$.func.isIp(i))
                        return OrayBox.showMessage("请输入正确子网掩码", !1, 0),
                        c.find('input[name="mask_' + e + '"]').focus(),
                        d = !1;
                    if (0 < n.length && !$.func.isIp(n))
                        return OrayBox.showMessage("请输入正确网关", !1, 0),
                        c.find('input[name="gw_' + e + '"]').focus(),
                        d = !1
                } else if (4 == a)
                    if (c.find('[name="ssid"]:not([disabled])').is("select")) {
                        if (c.find('select[name="ssid"] option').size() <= 0)
                            return OrayBox.showMessage("没有扫描到有效的WIFI列表，请重新扫描后选择！", !1, 0),
                            d = !1;
                        var s = $("#way_1-4 .scan-box .select-box input:eq(0)").val();
                        c.find('select[name="ssid"] option[value="' + s + '"]').val()
                    } else {
                        if ($.trim(c.find('input[name="ssid"]').val()).length <= 0)
                            return OrayBox.showMessage("请输入网络名称", !1, 0),
                            c.find('input[name="ssid"]').focus(),
                            d = !1
                    }
                if ((1 == a || 2 == a || 3 == a) && 1 == $("#dns-box_" + e).find("input[name=diydns_" + e + "]:checked").val()) {
                    var o = $.trim(c.find('input[name="maindns_' + e + '"]').val())
                      , r = $.trim(c.find('input[name="backupdns_' + e + '"]').val());
                    if (o.length <= 0)
                        return OrayBox.showMessage("请输入首选DNS", !1),
                        c.find('input[name="maindns_' + e + '"]').focus(),
                        d = !1;
                    if (!$.func.isIp(o))
                        return OrayBox.showMessage("请输入正确的首选DNS", !1),
                        c.find('input[name="maindns_' + e + '"]').focus(),
                        d = !1;
                    if (0 < r.length && !$.func.isIp(r))
                        return OrayBox.showMessage("请输入正确的备用DNS", !1),
                        c.find('input[name="backupdns_' + e + '"]').focus(),
                        d = !1
                }
            }),
            d
        }
        function _initScanWifi(e) {
            var i;
            e && (e.wifi_scan || e.wifi_scan_5g) && (i = [],
            delete e.code,
            $.each(e, function(t, e) {
                $.each(e, function(e, a) {
                    "" !== a.ssid && (a.type = t,
                    a.encryption = $.trim(a.encryption),
                    i.push(a))
                })
            }),
            i.sort(function(e, a) {
                return Math.abs(e.signal) < Math.abs(a.signal) ? -1 : 1
            }),
            $.each(i, function(e, a) {
                scanWifiMap[a.ssid] || (staWifiList.push(a.ssid),
                scanWifiMap[a.ssid] = a)
            }))
        }
        function submitNetwork(a, t) {
            "wan" == t && 1 == parseInt($('input[name="cancelstawifi"]').val(), 10) && networkSetTask.push(function(a) {
                $.getJSON("/cgi-bin/oraybox?_api=wifi_sta_set&_type=1", function(e) {
                    return 0 === e.code && $('input[name="cancelstawifi"]').val(0),
                    "function" == typeof a && a.call()
                })
            }),
            networkSetTask.push(function(e) {
                setDns(a, t).complete(function() {
                    return "function" == typeof e && e.call()
                })
            }),
            lastSubmit.push(submitForm.bind(this, a, t))
        }
        function setDns(a, e) {
            var t = ""
              , i = "";
            1 == form.find("input[name=diydns_" + a + "]:checked").val() && (t = $.trim(form.find('input[name="maindns_' + a + '"]').val()),
            i = $.trim(form.find('input[name="backupdns_' + a + '"]').val()));
            var n = {
                dns: t,
                backup_dns: i,
                "interface": e,
                no_restart_network: 1
            }
              , s = OrayBox.timeoutWork(function(e) {
                e && ($("#current-dns_" + a).val(t),
                $("#current-mdns_" + a).val(i)),
                $("#notify-win:visible").size() || OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在设置上网方式，请耐心等候...</p>'].join(""), !0)
            }, 8e3);
            return $.ajax({
                url: "/cgi-bin/oraybox?_api=dns_set",
                type: "post",
                dataType: "json",
                data: n,
                beforeSend: function() {
                    OrayBox.showMessage("正在提交数据...", !0, 0),
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    OrayBox.showMessage("", !0),
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    return !!e && (0 === e.code ? s("run") : 4 === e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : void 0)
                }
            })
        }
        function setUsb3G() {
            var e = {
                _api: "usb_3g_set",
                enabled: 1
            };
            e.proto = $("#proto").val();
            var a = $("#company").val();
            e.apn = a,
            e.dialnumber = $('#company option[value="' + a + '"]').attr("data-dialnumber");
            var t = $.trim($("#dialnumber").val())
              , i = $.trim($("#apn").val().toLowerCase())
              , n = $.trim($("#apn-user").val())
              , s = $.trim($("#apn-pwd").val());
            $("#custom-apn").prop("checked") && (0 < t.length && (e.dialnumber = t),
            0 < i.length && (e.apn = i),
            0 < s.length && (e.password = s),
            0 < n.length && (e.username = n)),
            "3g" == e.proto ? (e.dev = $("#dev").val(),
            "ctnet" == e.apn && (e.service = "evdo")) : "dhcp" == e.proto && (e.ifname = $("#model").val());
            var o = OrayBox.timeoutWork(function() {
                OrayBox.showMessage("", !0),
                $("#notify-win:visible").size() || OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在设置上网方式，请耐心等候...</p>'].join(""), !0),
                setTimeout(function() {
                    OrayBox.checkOnline(OrayBox.setNetworkSuccessCall, function() {
                        OrayBox.showNotify('<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p><p style="font-size:18px;">当前无法连接网络，请检查设置是否正确</p><button class="btn btn-primary btn-small close" style="margin-top: 40px;">确定</button>', !0)
                    }, null, 6)
                }, 1e4)
            }, 8e3);
            return $.ajax({
                url: form.attr("action"),
                type: "post",
                dataType: "json",
                data: e,
                beforeSend: function() {
                    OrayBox.showMessage("正在提交数据...", !0, 0),
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    o("stop"),
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    return e && 0 !== e.code ? 4 === e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : void OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : o("run")
                }
            })
        }
        function setStaWifi(e, a) {
            var t = 0
              , t = $(".scan-box:visible").size() ? $.trim(ssidSelect.val()) : $.trim(form.find('input[name="ssid"]').val())
              , i = $.trim(form.find('input[name="ssid_pwd"]:not([disabled])').val())
              , n = form.find('input[name="wifi_type"]:checked').val();
            scanWifiMap[t] && (n = "wifi_scan_5g" === scanWifiMap[t].type ? "1" : "0");
            var s = {
                _api: "wifi_sta_set",
                _type: 0,
                sta_ssid: t,
                sta_bssid: scanWifiMap[t] ? scanWifiMap[t].mac : "",
                sta_encryption: scanWifiMap[t] ? scanWifiMap[t].encryption : 0 < i.length ? "WPA2" : "none",
                sta_channel: scanWifiMap[t] ? scanWifiMap[t].channel : "auto",
                sta_key: i,
                ap_ssid: wifi.ssid,
                ap_encryption: "psk2",
                ap_key: wifi.pwd,
                wifi_type: n
            }
              , o = OrayBox.timeoutWork(function() {
                $('input[name="cancelstawifi"]').val(1),
                OrayBox.showMessage("", !0),
                $("#notify-win:visible").size() || OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在设置上网方式，请耐心等候...</p>'].join(""), !0),
                setTimeout(function() {
                    OrayBox.checkOnline(OrayBox.setNetworkSuccessCall, OrayBox.setNetworkFailCall, a, 10, 8e3)
                }, 1e4)
            }, 8e3);
            return $.ajax({
                url: form.attr("action"),
                type: "post",
                dataType: "json",
                data: s,
                beforeSend: function() {
                    $("#notify-win:visible").size() || OrayBox.showMessage("正在提交数据...", !0, 0),
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    o("stop"),
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    return e && 0 !== e.code ? 4 === e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : void OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : o("run")
                }
            })
        }
        function setSim(e) {
            var a = e ? "b_simcard" : "simcard"
              , t = form.find('input[name="' + a + '"]:checked').val()
              , i = {
                sim1: 0 == t ? 1 : 0,
                sim2: t
            };
            OrayBox.setKp4gInfo(null, i)
        }
        function getSimConfig() {
            OrayBox.getSimCardConfig(function(e) {
                _initReserveSim();
                var a = !1;
                e.sim1 && (e.sim1.user && (a = !0,
                form.find('input[name="apn_user_1"]').val(e.sim1.user),
                form.find('input[name="b_apn_user"]').val(e.sim1.user)),
                e.sim1.pwd && (a = !0,
                form.find('input[name="apn_pwd_1"]').val(e.sim1.pwd),
                form.find('input[name="b_apn_pwd"]').val(e.sim1.pwd)),
                e.sim1.device && (a = !0,
                form.find('input[name="apn_device_1"]').val(e.sim1.device),
                form.find('input[name="b_apn_device"]').val(e.sim1.device)),
                e.sim1.apn && (a = !0,
                form.find('input[name="apn_apn_1"]').val(e.sim1.apn),
                form.find('input[name="b_apn_apn"]').val(e.sim1.apn)),
                e.sim1.pincode && (a = !0,
                form.find('input[name="apn_gw_1"]').val(e.sim1.pincode),
                form.find('input[name="b_apn_gw"]').val(e.sim1.pincode)),
                e.sim1.auth && (a = !0,
                apnAuthSelect1.select(e.sim1.auth),
                _apnAuthSelect.select(e.sim1.auth)),
                e.sim1.modes && (a = !0,
                apnModesSelect1.select(e.sim1.modes),
                _apnModesSelect.select(e.sim1.modes)),
                e.sim1.delay && (a = !0,
                form.find('input[name="apn_delay_1"]').val(e.sim1.delay),
                form.find('input[name="b_apn_delay"]').val(e.sim1.delay)),
                e.sim1.pdptype && (a = !0,
                form.find('input[name="apn_pdptype_1"]').val(e.sim1.pdptype),
                form.find('input[name="b_apn_pdptype"]').val(e.sim1.pdptype)),
                e.sim1.plmn && (a = !0,
                form.find('input[name="apn_plmn_1"]').val(e.sim1.plmn),
                form.find('input[name="b_apn_plmn"]').val(e.sim1.plmn))),
                e.sim2 && (e.sim2.user && (a = !0,
                form.find('input[name="apn_user_1_sim2"]').val(e.sim2.user),
                form.find('input[name="b_apn_user_sim2"]').val(e.sim2.user)),
                e.sim2.pwd && (a = !0,
                form.find('input[name="apn_pwd_1_sim2"]').val(e.sim2.pwd),
                form.find('input[name="b_apn_pwd_sim2"]').val(e.sim2.pwd)),
                e.sim2.device && (a = !0,
                form.find('input[name="apn_device_1_sim2"]').val(e.sim2.device),
                form.find('input[name="b_apn_device_sim2"]').val(e.sim2.device)),
                e.sim2.apn && (a = !0,
                form.find('input[name="apn_apn_1_sim2"]').val(e.sim2.apn),
                form.find('input[name="b_apn_apn_sim2"]').val(e.sim2.apn)),
                e.sim2.pincode && (a = !0,
                form.find('input[name="apn_gw_1_sim2"]').val(e.sim2.pincode),
                form.find('input[name="b_apn_gw_sim2"]').val(e.sim2.pincode)),
                e.sim2.auth && (a = !0,
                apnAuthSelect1Sim2.select(e.sim2.auth),
                _apnAuthSelectSim2.select(e.sim2.auth)),
                e.sim2.modes && (a = !0,
                apnModesSelect1Sim2.select(e.sim2.modes),
                _apnModesSelectSim2.select(e.sim2.modes)),
                e.sim2.delay && (a = !0,
                form.find('input[name="apn_delay_1_sim2"]').val(e.sim2.delay),
                form.find('input[name="b_apn_delay_sim2"]').val(e.sim2.delay)),
                e.sim2.pdptype && (a = !0,
                form.find('input[name="apn_pdptype_1_sim2"]').val(e.sim2.pdptype),
                form.find('input[name="b_apn_pdptype_sim2"]').val(e.sim2.pdptype)),
                e.sim2.plmn && (a = !0,
                form.find('input[name="apn_plmn_1_sim2"]').val(e.sim2.plmn),
                form.find('input[name="b_apn_plmn_sim2"]').val(e.sim2.plmn))),
                $("#apn-btn_1").prop("checked", a),
                $("#b_apn-btn").prop("checked", a),
                a && ($("#apn-options_1").show(),
                $("#b_apn-options").show())
            })
        }
        function setSimConfig(e) {
            if ($("#apn-btn_" + e).prop("checked"))
                for (var a = 1; a < 3; a++) {
                    var t = {
                        card: a
                    }
                      , i = 1 == a ? "" : "_sim2"
                      , n = $.trim(form.find('input[name="apn_user_' + e + i + '"]').val())
                      , s = $.trim(form.find('input[name="apn_pwd_' + e + i + '"]').val())
                      , o = $.trim(form.find('input[name="apn_device_' + e + i + '"]').val())
                      , r = $.trim(form.find('input[name="apn_apn_' + e + i + '"]').val())
                      , c = $.trim(form.find('input[name="apn_gw_' + e + i + '"]').val())
                      , d = 1 == e ? 1 == a ? apnAuthSelect1.val() : apnAuthSelect1Sim2.val() : ""
                      , p = 1 == e ? 1 == a ? apnModesSelect1.val() : apnModesSelect1Sim2.val() : ""
                      , l = $.trim(form.find('input[name="apn_delay_' + e + i + '"]').val())
                      , f = $.trim(form.find('input[name="apn_pdptype_' + e + i + '"]').val())
                      , u = $.trim(form.find('input[name="apn_plmn_' + e + i + '"]').val());
                    "auto" === p && (p = ""),
                    0 < n.length && (t.user = n),
                    0 < s.length && (t.pwd = s),
                    0 < o.length && (t.device = o),
                    0 < r.length && (t.apn = r),
                    0 < c.length && (t.pincode = c),
                    0 < d.length && (t.auth = d),
                    0 < p.length && (t.modes = p),
                    0 < l.length && (t.delay = l),
                    0 < f.length && (t.pdptype = f),
                    0 < u.length && (t.plmn = u),
                    OrayBox.setSimCardConfig(null, t)
                }
        }
        function setSpareSimConfig() {
            if ($("#b_apn-btn").prop("checked"))
                for (var e = 1; e < 3; e++) {
                    var a = {
                        card: e
                    }
                      , t = 1 == e ? "" : "_sim2"
                      , i = $.trim(form.find('input[name="b_apn_user' + t + '"]').val())
                      , n = $.trim(form.find('input[name="b_apn_pwd' + t + '"]').val())
                      , s = $.trim(form.find('input[name="b_apn_device' + t + '"]').val())
                      , o = $.trim(form.find('input[name="b_apn_apn' + t + '"]').val())
                      , r = $.trim(form.find('input[name="b_apn_gw' + t + '"]').val())
                      , c = 1 == e ? _apnAuthSelect.val() : _apnAuthSelectSim2.val()
                      , d = 1 == e ? _apnModesSelect.val() : _apnModesSelectSim2.val()
                      , p = $.trim(form.find('input[name="b_apn_delay' + t + '"]').val())
                      , l = $.trim(form.find('input[name="b_apn_pdptype' + t + '"]').val())
                      , f = $.trim(form.find('input[name="b_apn_plmn' + t + '"]').val());
                    "auto" === d && (d = ""),
                    0 < i.length && (a.user = i),
                    0 < n.length && (a.pwd = n),
                    0 < s.length && (a.device = s),
                    0 < o.length && (a.apn = o),
                    0 < r.length && (a.pincode = r),
                    0 < c.length && (a.auth = c),
                    0 < d.length && (a.modes = d),
                    0 < p.length && (a.delay = p),
                    0 < l.length && (a.pdptype = l),
                    0 < f.length && (a.plmn = f),
                    OrayBox.setSimCardConfig(null, a)
                }
        }
        function staWifiSubmit(e, a) {
            OrayBox.showMessage("正在提交数据...", !0, 0),
            button && button.attr("disabled", !0);
            var t = 0
              , t = $(".scan-box:visible").size() ? $.trim(ssidSelect.val()) : $.trim(form.find('input[name="ssid"]').val())
              , i = form.find('input[name="wifi_type"]:checked').val();
            scanWifiMap[t] && (i = "wifi_scan_5g" === scanWifiMap[t].type ? "1" : "0"),
            networkSetTask.push(function(a) {
                OrayBox.getWifi(function(e) {
                    0 == e.code && (wifi.ssid = e.ssid,
                    wifi.pwd = e.pwd),
                    "function" == typeof a && a.call()
                }, "1" === i ? "5G" : "2.4G")
            }),
            lastSubmit.push(setStaWifi.bind(this, e, a))
        }
        function submitForm(e, a) {
            var t, i, n, s, o, r, c, d, p, l, f, u = $("select[name=way_" + e + "]").val(), m = {
                _api: "wan_set"
            }, h = 2 == e ? "2" : "";
            1 == u ? (m["mod" + h] = "pppoe",
            m["user" + h] = $.trim(form.find('input[name="account_' + e + '"]').val()),
            m["pwd" + h] = $.trim(form.find('input[name="password_' + e + '"]').val()),
            m["service" + h] = $.trim(form.find('input[name="service_' + e + '"]').val())) : 2 == u ? m["mod" + h] = "dhcp" : 3 == u ? (m["mod" + h] = "static",
            m["ip" + h] = $.trim(form.find('input[name="ip_' + e + '"]').val()),
            m["mask" + h] = $.trim(form.find('input[name="mask_' + e + '"]').val()),
            m["gateway" + h] = $.trim(form.find('input[name="gw_' + e + '"]').val())) : 6 == u && (m["mod" + h] = "kp4g",
            t = 1 == form.find('input[name="simcard"]:checked').val(),
            $("#apn-btn_" + e).prop("checked") && !t && (i = $.trim(form.find('input[name="apn_user_' + e + '"]').val()),
            n = $.trim(form.find('input[name="apn_pwd_' + e + '"]').val()),
            s = $.trim(form.find('input[name="apn_device_' + e + '"]').val()),
            o = $.trim(form.find('input[name="apn_apn_' + e + '"]').val()),
            r = $.trim(form.find('input[name="apn_gw_' + e + '"]').val()),
            c = 1 == e ? apnAuthSelect1.val() : "",
            d = 1 == e ? apnModesSelect1.val() : "",
            p = $.trim(form.find('input[name="apn_delay_' + e + '"]').val()),
            l = $.trim(form.find('input[name="apn_pdptype_' + e + '"]').val()),
            f = $.trim(form.find('input[name="apn_plmn_' + e + '"]').val()),
            "auto" === d && (d = ""),
            0 < i.length && (m["user" + h] = i),
            0 < n.length && (m["pwd" + h] = n),
            0 < s.length && (m["device" + h] = s),
            0 < o.length && (m["apn" + h] = o),
            0 < r.length && (m["pincode" + h] = r),
            0 < c.length && (m["auth" + h] = c),
            0 < d.length && (m["modes" + h] = d),
            0 < p.length && (m["delay" + h] = p),
            0 < l.length && (m["pdptype" + h] = l),
            0 < f.length && (m["plmn" + h] = f)),
            -1 != $.inArray(OrayBox.model, ["R300C-1121G"]) && (setSimConfig(e),
            setSim(!1)));
            var w = OrayBox.timeoutWork(function() {
                var e;
                "X6" === OrayBox.type && (OrayBox.X6CallTab = {
                    WAN1: "",
                    WAN2: "",
                    has_success: !1
                }),
                e = 1 == u ? ['<p style="padding:10px 0 15px 0;"><img src="./images/pppoe_ing.gif" border="0" width="220" height="58" /></p>', '<p style="font-size:18px;">正在拨号，请稍候...</p>'] : ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在诊断网络，' + ("X6" == OrayBox.type ? "预计2分钟，" : "") + "请耐心等候...</p>"],
                OrayBox.showNotify(e.join(""), !0),
                setTimeout(function() {
                    OrayBox.checkOnline(OrayBox.setNetworkSuccessCall, OrayBox.setNetworkFailCall, a, 10, 8e3)
                }, 5e3)
            }, 8e3);
            $.ajax({
                url: form.attr("action"),
                type: "post",
                dataType: "json",
                data: m,
                beforeSend: function() {
                    $("#notify-win:visible").size() || OrayBox.showMessage("正在提交数据...", !0, 0),
                    button && button.attr("disabled", !0)
                },
                complete: function() {
                    OrayBox.showMessage("", !0),
                    button && button.removeAttr("disabled")
                },
                success: function(e) {
                    if (button && button.removeAttr("disabled"),
                    !e || 0 === e.code)
                        return w("run");
                    if (w("stop"),
                    4 === e.code)
                        return location.assign("/oraybox/login.html?err=sesstimeout");
                    var a = '<p><span class="iconfont" style="font-size:64px;color: #ff7200;">&#xe899;</span></p><p style="font-size:18px;">' + OrayBox.getMessage(e.code) + '</p><button class="btn btn-small close">返回重新设置</button>';
                    OrayBox.showNotify(a, !0)
                }
            })
        }
        function checkStaWifi(a) {
            var t = 0
              , t = $(".scan-box:visible").size() ? $.trim(ssidSelect.val()) : $.trim(form.find('input[name="ssid"]').val());
            if (scanWifiMap[t])
                return "function" == typeof a && a.call();
            OrayBox.getWifiScan(function(e) {
                return _initScanWifi(e),
                scanWifiMap[t] ? void ("function" == typeof a && a.call()) : (networkSetTask.stop(),
                button && button.removeAttr("disabled"),
                OrayBox.showMessage("无法搜索到该WiFi", !1, 0))
            })
        }
        function scanWifi(e) {
            var d = $('select[name="ssid"]');
            loadingWifiList = !0,
            OrayBox.showMessage("正在扫描WIFI列表，请耐心等待...", !0, 0),
            button && button.attr("disabled", !0),
            d.hide(),
            $("#way_" + e + "-4 .select-box").size() && $("#way_" + e + "-4 .select-box").hide(),
            $('input[name="ssid_pwd"]').css({
                "border-top": "1px solid #e1e1e1"
            }),
            $('[data-opt="rescan"], [data-opt="manual-entry"]').hide(),
            d.parent().find("label.loading-tips").append('&nbsp;&nbsp;<img src="./images/loading_160421.gif" style="vertical-align:middle;" />&nbsp;正在扫描WIFI列表...').show(),
            OrayBox.getWifiScan(function(e) {
                if (_initScanWifi(e),
                loadingWifiList = !1,
                OrayBox.showMessage("", !0),
                staWifiList.length <= 0)
                    return $(".loading-tips").html("抱歉，没有扫描到WIFI！"),
                    !1;
                for (var a = [], t = 0, i = staWifiList.length; t < i; t++) {
                    var n, s, o, r, c = staWifiList[t];
                    "" !== c && (s = "none" != (n = scanWifiMap[c].encryption) && "" != n ? "/oraybox/images/haspwd_" : "/oraybox/images/nopwd_",
                    o = parseInt(scanWifiMap[c].signal, 10),
                    s += 0 <= (o = Math.abs(o)) && o <= 55 ? "1.png" : 55 < o && o <= 70 ? "2.png" : 70 < o && o <= 85 ? "3.png" : "4.png",
                    r = "",
                    "wifi_scan_5g" === scanWifiMap[c].type && (r = "/oraybox/images/5g.png"),
                    a.push('<option value="' + scanWifiMap[c].ssid + '" data-mac="' + scanWifiMap[c].mac + '" data-str="' + s + '" data-channel="' + scanWifiMap[c].channel + '" data-encryption="' + n + '" data-scan="' + scanWifiMap[c].type + '" data-suffix="' + r + '">' + scanWifiMap[c].ssid + "</option>"))
                }
                d.html(a.join("")),
                "object" == typeof ssidSelect ? (ssidSelect.refresh(!0),
                ssidSelect.enabled(),
                ssidSelect.selectByIndex(0)) : (d.show(),
                (ssidSelect = d.select({
                    inputClass: "fm-text",
                    searchable: !1,
                    inputable: !1
                })).enabled()),
                $('input[name="ssid_pwd"]').css({
                    "border-top": "none"
                }),
                $('[data-opt="rescan"], [data-opt="manual-entry"]').show(),
                $("label.loading-tips").empty().hide(),
                $("#way_1-4 .select-box").show(),
                button && button.removeAttr("disabled")
            })
        }
        OrayBox.init(function() {
            switch (OrayBox.initHeader(OrayBox.sn),
            has5GWifi = -1 !== $.inArray(OrayBox.type, ["X5", "X6"]) || -1 !== $.inArray(OrayBox.model, ["X3Pro-1153", "ORH-180"]),
            $.inArray(OrayBox.model, ["P1-2111", "P5-1210", "P5-2210", "ORG-900"]) <= -1 && ($("#manage-list").show(),
            $(".pop-win-icon").show()),
            -1 !== $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300S-1151G", "R300A-1121G", "R300C-1121G", "X4-1123G", "X4-2123G", "E3-1141", "X4C-1141G", "X4C-2131G"]) && (_initApn(),
            "E3-1141" !== OrayBox.model && OrayBox.getWan2lan(function(e) {
                1 == e["switch"] && ($('#way_1 option[value="1"]').remove(),
                $('#way_1 option[value="2"]').remove(),
                $('#way_1 option[value="3"]').remove(),
                $("#dns-box_1").hide(),
                isWan2lan = !0,
                waySelect.refresh())
            }),
            "R300C-1121G" === OrayBox.model && (OrayBox.getKp4gInfo(function(e) {
                1 == e.sim2 && form.find('input[name="simcard"][value="1"]').click(),
                form.find('input[name="b_simcard"][value="1"]').click()
            }),
            getSimConfig(),
            _initApnTab())),
            OrayBox.model) {
            case "P1-2111":
            case "P5-1210":
            case "P5-2210":
            case "ORG-900":
                $("#manage-content .title").show(),
                $("#sub-title").css({
                    "padding-top": "20px"
                }),
                $('#way_1 option[value="1"]').remove(),
                $("#way_1-1").remove(),
                waySelect.refresh();
            case "X3-D1509":
            case "X3-D1509A":
            case "X5-1253":
            case "R300-1121G":
            case "R300-2121G":
            case "R300S-1151G":
            case "R300A-1121G":
            case "R300C-1121G":
            case "X4-1123G":
            case "X4-2123G":
            case "X4C-1141G":
            case "X4C-2131G":
                OrayBox.getWifiRepeater(_initWifiRepeater, [OrayBox.getWiredNetwork, [_initWiredNetwork]]);
                break;
            case "X1-1111":
            case "X1-2111":
            case "ORH-100":
            case "X3-2151":
            case "X3-3251":
            case "X3Pro-1153":
            case "E3-1141":
            case "X5-2253":
            case "X5-3353":
            case "X5-4253":
            case "X5-5255":
            case "X5-6256":
            case "ORH-180":
            case "ORH-260":
                OrayBox.getUsb3G(_initUsb3G, [OrayBox.getWifiRepeater, [_initWifiRepeater, [OrayBox.getWiredNetwork, [_initWiredNetwork]]]]);
                break;
            case "G5-1250":
            case "G5-2250":
            case "A500":
            case "ORG-220":
                OrayBox.getUsb3G(_initUsb3G, [OrayBox.getWiredNetwork, [_initWiredNetwork]]);
                break;
            case "G100Pro-2240":
                OrayBox.getUsb3G(_initUsb3G, [OrayBox.getWiredNetwork, [_initWiredNetwork]]);
            case "V1000":
            case "V2000-1260":
            case "V3000-1460":
            case "G100Pro-1240":
            case "G300Pro-1440":
            case "ORG-1100":
                OrayBox.getX86Wan2(function(e) {
                    1 === e["switch"] && ($("#X6-wan2").show(),
                    $("#sub-title").text("WAN1设置")),
                    OrayBox.getWiredNetwork(_initWiredNetwork),
                    _initNetWay(e["switch"])
                });
                break;
            case "X6-1293P":
            case "X6-2293P":
            case "X6-3293P":
                $("#X6-wan2").show(),
                $("#X6-net-tips, #X6-apwifi-tips").show(),
                $("#sub-title").text("WAN1设置"),
                OrayBox.getWifiRepeater(_initWifiRepeater, [OrayBox.getWiredNetwork, [_initWiredNetwork]]);
                break;
            case "GBox-1230":
                OrayBox.getWiredNetwork(_initWiredNetwork)
            }
            $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"]) <= -1 && _initNetWay(0)
        }),
        _initNetInfo(),
        _initFormData(),
        OrayBox.updateFooterTime(),
        window.onbeforeunload = function() {
            _leavePage()
        }
    }
    ,
    scope.OrayBox.getUsb3G = function(a, t) {
        t = t || [],
        OrayBox.request("usb_3g_get", {}, function(e) {
            "function" == typeof a && a.call(null, e, t[0], t[1])
        })
    }
    ,
    scope.OrayBox.getWifiRepeater = function(a, t) {
        t = t || [],
        OrayBox.request("wifi_sta_get", {}, function(e) {
            "function" == typeof a && a.call(null, e, t[0], t[1])
        })
    }
    ,
    scope.OrayBox.getWiredNetwork = function(a) {
        OrayBox.request("wan_get", {}, function(e) {
            "function" == typeof a && a.call(null, e)
        })
    }
    ,
    scope.OrayBox.getWifiScan = function(e) {
        OrayBox.request("wifi_scan_get", {}, e)
    }
    ,
    scope.OrayBox.setInterfaceControl = function(e, a, t) {
        OrayBox.request("interface_control", {
            "interface": a,
            op: t
        }, e, "POST")
    }
    ,
    scope.OrayBox.getWanSpare = function(e) {
        OrayBox.request("wan_spare_get", {}, e)
    }
    ,
    scope.OrayBox.setWanSpare = function(e, a) {
        OrayBox.request("wan_spare_set", a, e, "POST")
    }
    ,
    scope.OrayBox.getKp4gInfo = function(e) {
        OrayBox.request("kp4g_get", {}, e)
    }
    ,
    scope.OrayBox.setKp4gInfo = function(e, a) {
        OrayBox.request("kp4g_set", a, e, "POST")
    }
    ,
    scope.OrayBox.getSimCardConfig = function(e) {
        OrayBox.request("sim_config_get", {}, e)
    }
    ,
    scope.OrayBox.setSimCardConfig = function(e, a) {
        OrayBox.request("sim_config_set", a, e, "POST")
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.initPwd = function() {
        OrayBox.init(function() {
            $("#pwd-form").bind("submit", function() {
                var e = $(this)
                  , a = e.find('input[name="password"]').val();
                if (a.length <= 0)
                    return OrayBox.showMessage("请输入新的管理密码", !1, 0),
                    e.find('input[name="password"]').focus(),
                    !1;
                if (a.length < 8)
                    return OrayBox.showMessage("管理密码至少8位", !1, 0),
                    e.find('input[name="password"]').focus(),
                    !1;
                if (a == OrayBox.sn)
                    return OrayBox.showMessage("管理密码不能与设备SN码一致", !1, 0),
                    e.find('input[name="password"]').focus(),
                    !1;
                var t = e.find('input[name="repassword"]').val();
                if (t.length <= 0)
                    return OrayBox.showMessage("请输入确认密码", !1, 0),
                    e.find('input[name="repassword"]').focus(),
                    !1;
                if (a != t)
                    return OrayBox.showMessage("两次输入的密码不一致，请重新输入", !1, 0),
                    e.find('input[name="repassword"]').focus(),
                    !1;
                var i = $("#pwd-btn");
                return $.ajax({
                    url: e.attr("action"),
                    type: "post",
                    dataType: "json",
                    data: {
                        _api: "passwd",
                        old_pwd: "admin",
                        new_pwd: t
                    },
                    beforeSend: function() {
                        OrayBox.showMessage("正在提交数据...", !0, 0),
                        i && i.attr("disabled", !0)
                    },
                    complete: function() {
                        i && i.removeAttr("disabled")
                    },
                    success: function(e) {
                        var a;
                        4 == e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == e.code ? (OrayBox.showMessage("修改密码成功", !0),
                        location.assign("/oraybox/network.html")) : (a = OrayBox.getMessage(e.code),
                        OrayBox.showMessage(a, !1, 0))
                    },
                    error: function(e) {
                        return i && i.removeAttr("disabled"),
                        !1
                    }
                }),
                !1
            }),
            $("#pwd-btn").click(function() {
                return $("#pwd-form").submit(),
                !1
            })
        }),
        OrayBox.updateFooterTime(),
        OrayBox.resize()
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.target2Api = {
        ether_status: "ether_status_set",
        network_info: ["wan_mac_set", "dns_set", "mtu_set"],
        wifi_info: "wifi_set",
        router_info: ["reboot", "timing_reboot_set", "reset"],
        network: ["usb_3g_set", "wifi_sta_set", "wan_set"],
        lan: "lan_set",
        device: ["mac_control_set", "lan_device_alias_set", "oraytc_set"],
        log: "log_read"
    },
    e.OrayBox.api2Target = {
        ether_status_set: "ether_status",
        wan_mac_set: "network_info",
        dns_set: "network_info",
        mtu_set: "network_info",
        wifi_set: "wifi_info",
        reboot: "router_info",
        timing_reboot_set: "router_info",
        reset: "router_info",
        usb_3g_set: "network",
        wifi_sta_set: "network",
        wan_set: "network",
        lan_set: "lan",
        mac_control_set: "device",
        lan_device_alias_set: "device",
        oraytc_set: "device",
        log_read: "log"
    },
    e.OrayBox.initPrivilege = function() {
        var r = null
          , a = null
          , c = null
          , p = ["admin"]
          , l = $("#privilege-form")
          , e = $.func.getQueryString("name")
          , f = null !== e
          , t = !0;
        function i(e, a) {
            for (var t in e) {
                var i = e[t]
                  , n = l.find('input[name="' + i + '"]');
                if (!(n.size() <= 0)) {
                    var s = $.trim(n.val())
                      , o = s.length
                      , r = $("#" + i + "-tips")
                      , c = "";
                    if (o <= 0) {
                        switch (i) {
                        case "account":
                            c = "请输入登录帐号";
                            break;
                        case "old_password":
                            c = "请输入原登录密码";
                            break;
                        case "password":
                        case "confirm_pwd":
                            c = "请输入登录密码"
                        }
                        return r.text(c),
                        void (a && n.focus())
                    }
                    var d = !1;
                    switch (i) {
                    case "account":
                        if (f)
                            break;
                        if (/\\W/.test(s)) {
                            c = "帐号只能填写字母或数字下划线",
                            d = !0;
                            break
                        }
                        if (o < 6 || 20 < o) {
                            c = "帐号不能少于6位或大于20位",
                            d = !0;
                            break
                        }
                        if (-1 === $.inArray(s, p))
                            break;
                        c = "该帐号已存在，换一个试试",
                        d = !0;
                        break;
                    case "password":
                        if (/[\\'\\"]/.test(s)) {
                            c = "密码不能含有单引号或双引号",
                            d = !0;
                            break
                        }
                        if (o < 6 || 20 < o) {
                            c = "密码不能少于6位或大于20位",
                            d = !0;
                            break
                        }
                        break;
                    case "confirm_pwd":
                        if (s === $.trim(l.find('input[name="password"]').val()))
                            break;
                        c = "两次输入密码不同",
                        d = !0
                    }
                    if (d)
                        return r.text(c),
                        void (a && n.focus());
                    r.text("")
                }
            }
            return 1
        }
        function n() {
            var e = $.trim(l.find('input[name="account"]').val())
              , a = $.trim(l.find('input[name="password"]').val())
              , i = ["privilege_get", "privilege_set", "privilege_config_get", "privilege_config_set"]
              , n = []
              , s = l.find('input[name="target"]:checked');
            return $.each(OrayBox.target2Api, function(e, a) {
                var t = !1;
                if (s.each(function() {
                    if ($(this).val() === e)
                        return !(t = !0)
                }),
                t)
                    return !0;
                $.isArray(a) ? $.each(a, function(e, a) {
                    i.push(a)
                }) : i.push(a)
            }),
            $("#ip-content tr").each(function() {
                var e = $(this).attr("data-startip")
                  , a = $(this).attr("data-endip")
                  , t = e;
                0 < a.length && e !== a && (t += "-" + a),
                n.push(t)
            }),
            {
                user_name: e,
                user_pwd: a,
                privilege_mode: 1,
                privilege_list: i.join(" "),
                allow_ip_list: n.join(" ")
            }
        }
        function s() {
            r = $("#ip-win").window({
                closeCls: "close",
                center: !0
            }),
            $('#ip-win button[type="submit"]').click(function() {
                var e = $("#ip-tips")
                  , a = $('#ip-win input[name="startip"]')
                  , t = $('#ip-win input[name="endip"]')
                  , i = $('#ip-win input[name="action"]').val()
                  , n = $.trim(a.val())
                  , s = $.trim(t.val());
                if (n.length <= 0)
                    return e.text("开始IP不能为空"),
                    a.focus(),
                    !1;
                if (!$.func.isIp(n))
                    return e.text("开始IP地址输入格式错误"),
                    a.focus(),
                    !1;
                if (0 < s.length && !$.func.isIp(s))
                    return e.text("结束IP地址输入格式错误"),
                    t.focus(),
                    !1;
                e.text("");
                var o = d(n, s);
                "create" === i ? $("#ip-content").append(o) : c && c.replaceWith(o),
                r.close()
            })
        }
        function d(e, a) {
            return '<tr data-startip="' + e + '" data-endip="' + a + '" ><td align="center"><span>' + e + '</span></td><td align="center"><span>' + a + '</span></td><td align="center"><a href="javascript:void(0);" class="link" data-act="edit-ip">编辑</a> / <a href="javascript:void(0);" class="link" data-act="delete-ip">删除</a></td></tr>'
        }
        OrayBox.init(function() {
            OrayBox.initHeader(OrayBox.sn),
            e === OrayBox.user || "admin" !== OrayBox.user ? ($("#old_password-warp").show(),
            $("#privilege-title").text("编辑管理帐号"),
            l.find('input[name="account"]').val(OrayBox.user).attr("disabled", "disabled")) : ($("#privilege-box").show(),
            $("#ip-box").show(),
            t = !1),
            OrayBox.resize()
        }),
        OrayBox.getPrivilege(function(e) {
            0 === e.code && e.data && 0 < e.data.length && $.each(e.data, function(e, a) {
                p.push(a.name)
            })
        }),
        f && ($("#privilege-title").text("编辑管理帐号"),
        l.find('input[name="account"]').val(e).attr("disabled", "disabled"),
        OrayBox.getPrivilege(function(e) {
            0 === e.code && (l.find('input[name="password"]').val(e.data.pwd),
            l.find('input[name="confirm_pwd"]').val(e.data.pwd),
            e.data.privilege_list && (l.find('input[name="target"]').attr("checked", !0),
            $.each(e.data.privilege_list, function(e, a) {
                OrayBox.api2Target[a] && l.find('input[name="target"][value="' + OrayBox.api2Target[a] + '"]').removeAttr("checked")
            })),
            e.data.allow_ip_list && $.each(e.data.allow_ip_list, function(e, a) {
                var t = a.split("-")
                  , i = t[0]
                  , n = t[1];
                $("#ip-content").append(d(i, n || ""))
            }),
            OrayBox.resize())
        }, {
            user_name: e
        })),
        $("#ip-content").on("click", "a[data-act]", function() {
            var e = $(this).data("act");
            $(this).parents("tr").attr("data-startip"),
            $(this).parents("tr").attr("data-endip");
            switch (c = $(this).parents("tr"),
            e) {
            case "edit-ip":
                !function() {
                    null == r && s();
                    $('#ip-win input[name="action"]').val("update"),
                    $('#ip-win input[name="startip"]').val(startIp),
                    $('#ip-win input[name="endip"]').val(endIp),
                    r.show()
                }();
                break;
            case "delete-ip":
                !function() {
                    null == a && (a = $("#delete-ip-win").window({
                        closeCls: "close",
                        center: !0
                    }),
                    $('#delete-ip-win button[type="submit"]').click(function() {
                        c && c.remove(),
                        a.close()
                    }));
                    a.show()
                }()
            }
        }),
        $("#add-ip").click(function() {
            null == r && s(),
            $('#ip-win input[name="action"]').val("create"),
            $('#ip-win input[name="startip"]').val(""),
            $('#ip-win input[name="endip"]').val(""),
            r.show()
        }),
        l.find('input[name="account"], input[name="password"], input[name="confirm_pwd"], input[name="old_password"]').blur(function() {
            i([$(this).attr("name")])
        }),
        l.submit(function() {
            return t ? i(["account", "old_password", "password", "confirm_pwd"], !0) && OrayBox.setPassword(function(e) {
                if (0 !== e.code) {
                    var a = OrayBox.getMessage(e.code);
                    return 100 === e.code && (a = "您输入的原密码不正确，请重新输入",
                    l.find('input[name="old_password"]').focus()),
                    107 === e.code && (a = "原密码和新密码不能相同，请重新输入",
                    l.find('input[name="password"]').focus()),
                    OrayBox.showMessage(a, !1, 0)
                }
                OrayBox.showMessage("修改管理员密码成功"),
                setTimeout(function() {
                    window.history.back()
                }, 2e3)
            }, {
                old_pwd: l.find('input[name="old_password"]').val(),
                new_pwd: l.find('input[name="password"]').val()
            }) : i(["account", "password", "confirm_pwd"], !0) && (f ? OrayBox.updatePrivilege(function(e) {
                return 0 !== e.code ? OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : (OrayBox.showMessage("编辑管理帐号成功"),
                void setTimeout(function() {
                    window.history.back()
                }, 2e3))
            }, n()) : OrayBox.createPrivilege(function(e) {
                return 0 !== e.code ? OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : (OrayBox.showMessage("创建管理帐号成功"),
                void setTimeout(function() {
                    window.history.back()
                }, 2e3))
            }, n())),
            !1
        }),
        OrayBox.updateFooterTime()
    }
    ,
    e.OrayBox.initPrivilegeList = function() {
        var t = null;
        function n(e, a) {
            return '<tr data-name="' + a + '"><td align="center"><span>' + e + '</span></td><td align="center"><span>' + a.replace(/[<>&"]/g, function(e) {
                return {
                    "<": "&lt;",
                    ">": "&gt;",
                    "&": "&amp;",
                    '"': "&quot;"
                }[e]
            }) + '</span></td><td align="center"><span>' + ("admin" === a ? "超级管理员" : "普通管理员") + '</span></td><td align="center"><a href="/oraybox/privilege.html?name=' + a + '" class="link">编辑</a>' + ("admin" === a ? "" : ' / <a href="javascript:void(0);" class="link" data-act="delete">删除</a>') + "</td></tr>"
        }
        OrayBox.init(function() {
            e.OrayBox.initHeader(OrayBox.sn)
        }),
        OrayBox.getPrivilege(function(e) {
            return 101 === e.code ? history.back() : void (0 === e.code && (i = [n(t = 1, "admin")],
            $.each(e.data, function(e, a) {
                t++,
                i.push(n(t, a.name))
            }),
            $("#privilege-list").html(i.join("")),
            OrayBox.resize()));
            var t, i
        }),
        $("#privilege-list").on("click", "a[data-act]", function() {
            var e = $(this).data("act")
              , a = $(this).parents("tr").attr("data-name");
            if ("delete" === e)
                return function(e) {
                    null == t && (t = $("#delete-tips-win").window({
                        closeCls: "close",
                        center: !0
                    }),
                    $('#delete-tips-win button[type="submit"]').click(function() {
                        var a = $('#delete-tips-win input[name="username"]').val();
                        OrayBox.deletePrivilege(function(e) {
                            return 0 !== e.code ? OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : (OrayBox.showMessage("删除普通管理员" + a + "成功"),
                            $('#privilege-list tr[data-name="' + a + '"]').remove(),
                            void t.close())
                        }, {
                            user_name: a
                        })
                    }));
                    $('#delete-tips-win input[name="username"]').val(e),
                    $("#delete-name").text(e),
                    t.show()
                }(a)
        }),
        OrayBox.updateFooterTime()
    }
    ,
    e.OrayBox.initPrivilegeConfig = function() {
        OrayBox.init(function() {
            OrayBox.initHeader(OrayBox.sn)
        });
        var e = $("#privilege-form")
          , i = e.find('input[name="count"]')
          , n = e.find('input[name="time"]')
          , s = e.find('input[name="remind"]');
        $(".safe_tips").hover(function() {
            $(this).find(".safe-tips-content").show()
        }, function() {
            $(this).find(".safe-tips-content").hide()
        }),
        OrayBox.getPrivilegeConfig(function(e) {
            0 === e.code && (i.val(e.login_try_count || 0),
            n.val(e.login_disable_wait_time || 0),
            s.val(e.remind_change_pwd_time || 0))
        }),
        e.find('button[type="submit"]').click(function() {
            var e = i.val()
              , a = n.val()
              , t = s.val();
            return e.length <= 0 ? (OrayBox.showMessage("请输入无效登录次数", !1),
            i.focus()) : e < 0 || 99 < e ? (OrayBox.showMessage("无效登录次数只允许设置0~99", !1),
            i.focus()) : a.length <= 0 ? (OrayBox.showMessage("请输入帐号锁定时间", !1),
            n.focus()) : a < 0 || 99999 < a ? (OrayBox.showMessage("帐号锁定时间只允许设置0~99999", !1),
            n.focus()) : t.length <= 0 ? (OrayBox.showMessage("请输入提醒时间间隔", !1),
            s.focus()) : t < 0 || 9999 < t ? (OrayBox.showMessage("提醒时间间隔只允许设置0~9999", !1),
            s.focus()) : OrayBox.setPrivilegeConfig(function(e) {
                return 0 !== e.code ? OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0) : void OrayBox.showMessage("安全管理设置成功", !0)
            }, {
                login_try_count: e,
                login_disable_wait_time: a,
                remind_change_pwd_time: t
            }),
            !1
        }),
        OrayBox.updateFooterTime()
    }
    ,
    e.OrayBox.getPrivilege = function(e, a) {
        OrayBox.request("privilege_get", a, e)
    }
    ,
    e.OrayBox.createPrivilege = function(e, a) {
        a.optype = 1,
        OrayBox.request("privilege_set", a, e, "POST")
    }
    ,
    e.OrayBox.updatePrivilege = function(e, a) {
        a.optype = 2,
        OrayBox.request("privilege_set", a, e, "POST")
    }
    ,
    e.OrayBox.deletePrivilege = function(e, a) {
        a.optype = 3,
        OrayBox.request("privilege_set", a, e, "POST")
    }
    ,
    e.OrayBox.getPrivilegeConfig = function(e) {
        OrayBox.request("privilege_config_get", null, e)
    }
    ,
    e.OrayBox.setPrivilegeConfig = function(e, a) {
        OrayBox.request("privilege_config_set", a, e, "POST")
    }
    ,
    e.OrayBox.setPassword = function(e, a) {
        OrayBox.request("passwd", a, e, "POST")
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.initRetrieve = function() {
        OrayBox.init(function() {
            OrayBox.initHeader(OrayBox.sn),
            -1 < $.inArray(OrayBox.model, ["X1-1111", "X1-2111", "X4C-1141G", "X4C-2131G", "X4C-2123G", "X3-2151", "X3-3251", "X4-1123G"]) ? $("#backBtn").click(function() {
                $.getJSON("/cgi-bin/oraybox?_api=init_get", function(e) {
                    0 == e.initialization ? location.assign("/oraybox/guide.html") : location.assign("/oraybox/network.html")
                })
            }) : $("#backBtn").click(function() {
                location.assign("/oraybox/network.html")
            })
        }),
        $("#step-1 a").click(function() {
            $("#step-2").show().siblings().hide()
        }),
        $("#step-2 a").click(function() {
            $("#step-3").show().siblings().hide()
        }),
        $("#step-3 a, #step-error a").click(function() {
            $("#step-import").show().siblings().hide(),
            OrayBox.sniffePPPoePwd(function(e) {
                return 0 !== e.code ? ($("#error_tips").text(OrayBox.getMessage(e.code)),
                $("#step-error").show().siblings().hide(),
                !1) : e.mac ? ($('#pppoe-form input[name="account"]').val(e.uid),
                $('#pppoe-form input[name="password"]').val(e.pwd),
                void $("#step-result").show().siblings().hide()) : ($("#step-error").show().siblings().hide(),
                !1)
            }, 30)
        }),
        $("#step-result a").click(function() {
            return $(this).attr("disabled") || $("#pppoe-form").submit(),
            !1
        }),
        $("#pppoe-form").submit(function() {
            var e = $.trim($(this).find('input[name="account"]').val())
              , a = $.trim($(this).find('input[name="password"]').val())
              , t = $(this).find("a");
            if (e.length <= 0)
                return OrayBox.showMessage("请输入宽带帐号", !1, 0),
                $(this).find('input[name="account"]').focus(),
                !1;
            if (a.length <= 0)
                return OrayBox.showMessage("请输入宽带密码", !1, 0),
                $(this).find('input[name="password"]').focus(),
                !1;
            OrayBox.showMessage("正在提交数据...", !0, 0),
            t.attr("disabled", "disabled"),
            OrayBox.getWifiRepeater(function(e) {
                return (!e || 0 !== e.code || 0 != e.enabled) && void OrayBox.setWifiRepeater(null, {
                    _type: 1
                })
            });
            var i = OrayBox.timeoutWork(function() {
                "X6" === OrayBox.type && (OrayBox.X6CallTab = {
                    WAN1: "",
                    WAN2: "",
                    has_success: !1
                }),
                OrayBox.showMessage("", !0),
                $("#notify-win:visible").size() || OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在设置上网方式，请耐心等候...</p>'].join(""), !0),
                setTimeout(function() {
                    OrayBox.checkOnline(OrayBox.setNetworkSuccessCall, OrayBox.setNetworkFailCall)
                }, 1e4)
            }, 8e3);
            return OrayBox.setPPPoe(function(e) {
                return t.removeAttr("disabled"),
                0 !== e.code ? (i("stop"),
                OrayBox.showMessage(OrayBox.getMessage(e.code), !1, 0)) : i("run")
            }, e, a),
            !1
        }),
        $("#input-warp input").on("change keyup", function() {
            $(this).siblings("input").val($(this).val())
        }),
        $("#eye").click(function() {
            var e = $("#input-warp").find("input");
            e.hide(),
            $(this).hasClass("on") ? (e.filter('[type="password"]').show(),
            $(this).removeClass("on").addClass("off")) : (e.filter('[type="text"]').show(),
            $(this).removeClass("off").addClass("on"))
        }),
        OrayBox.updateFooterTime()
    }
    ,
    e.OrayBox.sniffePPPoePwd = function(e, a) {
        a = a || 10,
        OrayBox.request("sniffe_pppoe_pwd", {
            timeout: a
        }, e)
    }
    ,
    e.OrayBox.setPPPoe = function(e, a, t, i) {
        var n = {
            user: a,
            pwd: t
        };
        n[i = i || "mod"] = "pppoe",
        OrayBox.request("wan_set", n, e, "POST")
    }
}(window),
function(e) {
    e.OrayBox = e.OrayBox || {},
    e.OrayBox.setPwd = function() {
        OrayBox.updateFooterTime();
        var r = -1 !== $.inArray(OrayBox.model, ["X4-1123G"]);
        OrayBox.init(function() {
            OrayBox.getWifi(function(e) {
                0 == e.code && $("#pwdForm input[name= 'ssid']").val(e.ssid)
            }, "2.4G"),
            r && ($("#has5G").show(),
            OrayBox.getWifi(function(e) {
                0 == e.code && $("#pwdForm input[name= '5Gssid']").val(e.ssid)
            }, "5G")),
            $('a[data-opt="show-pwd"]').click(function(e) {
                var a;
                $(this).hasClass("encode") ? (a = $(this).siblings("input[type='password']").val(),
                $(this).siblings("input[type='password']").attr("disabled", "disabled").hide(),
                $(this).siblings("input[type='text']").removeAttr("disabled").val(a).show(),
                $(this).removeClass("encode").addClass("decode").html("&#xe754;")) : (a = $(this).siblings("input[type='text']").val(),
                $(this).siblings("input[type='text']").attr("disabled", "disabled").hide(),
                $(this).siblings("input[type='password']").removeAttr("disabled").val(a).show(),
                $(this).removeClass("decode").addClass("encode").html("&#xe753;"))
            }),
            $("#deploy-btn").click(function() {
                var e = $("#pwdForm input[name= 'ssid']").val()
                  , a = $("#pwdForm input[name= '5Gssid']").val()
                  , t = ""
                  , i = "";
                $("#pwdForm input[name= 'WIFIpwd']").each(function() {
                    $(this).is(":hidden") || (t = $(this).val())
                }),
                $("#pwdForm input[name= 'mamagepwd']").each(function() {
                    $(this).is(":hidden") || (i = $(this).val())
                });
                var n = {
                    dev: "2.4G",
                    ssid: e,
                    pwd: t,
                    "switch": 1,
                    hidden: 0,
                    level: 3,
                    channel: "auto",
                    htmode: "HT20",
                    is_restart_wifi: 0
                }
                  , s = {
                    dev: "5G",
                    ssid: a,
                    pwd: t,
                    "switch": 1,
                    hidden: 0,
                    level: 3,
                    channel: "auto",
                    htmode: "VHT20",
                    is_restart_wifi: 0
                }
                  , o = {
                    old_pwd: "admin",
                    new_pwd: i
                };
                e.length <= 0 || r && a.length <= 0 ? OrayBox.showMessage("请输入网络名称", !1, 0) : -1 !== e.indexOf(" ") || -1 !== a.indexOf(" ") ? OrayBox.showMessage("WiFi名称不能含有空格", !1, 0) : t.length <= 0 ? OrayBox.showMessage("请输入WiFi密码", !1, 0) : t.length < 8 ? OrayBox.showMessage("WiFi密码长度最少为8位", !1, 0) : /.*[\\u4e00-\\u9fa5]+.*$/.test(t) ? OrayBox.showMessage("WiFi密码不允许含有中文", !1, 0) : i.length <= 0 ? OrayBox.showMessage("请输入管理密码", !1, 0) : i.length < 8 || 16 < i.length ? OrayBox.showMessage("设备密码长度为8-16位", !1, 0) : ($("#deploy-btn").attr("disabled", "disabled"),
                r ? OrayBox.request("wifi_set", n, function(t) {
                    OrayBox.request("wifi_set", s, function(a) {
                        OrayBox.request("passwd", o, function(e) {
                            0 == t.code && a.code && 0 == e.code ? location.assign("/oraybox/deploy.html?mamagepwd=" + encodeURI(i)) : ($("#deploy-btn").removeAttr("disabled", "disabled"),
                            OrayBox.showMessage("配置失败", !1))
                        }, "POST")
                    }, "POST")
                }, "POST") : OrayBox.request("wifi_set", n, function(a) {
                    OrayBox.request("passwd", o, function(e) {
                        0 == a.code && 0 == e.code ? location.assign("/oraybox/deploy.html?mamagepwd=" + encodeURI(i)) : ($("#deploy-btn").removeAttr("disabled", "disabled"),
                        OrayBox.showMessage("配置失败", !1))
                    }, "POST")
                }, "POST"))
            })
        })
    }
}(window),
function(scope) {
    scope.OrayBox = scope.OrayBox || {},
    scope.OrayBox.initSysinfo = function() {
        var mtuWin = null
          , lanWin = null
          , dnsWin = null
          , dhcpWin = null
          , rentTimeUnitSel = null
          , recoverWin = null;
        function _getImei() {
            OrayBox.getImei(function(e) {
                0 == e.code && $('[data-name="imei"]').html(e.IMEI)
            })
        }
        function _initLan() {
            null == lanWin && (lanWin = $("#lan-win").window({
                width: 600,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            })),
            $('[data-opt="modify-lan"]').click(function() {
                lanWin.show()
            })
        }
        function _initDhcp() {
            null == dhcpWin && (dhcpWin = $("#dhcp-win").window({
                width: 650,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            }),
            $("#dhcpform").bind("submit", function() {
                var e = $(this)
                  , a = e.find("button")
                  , t = "1" == e.find('input[name="switch"]').val()
                  , i = {
                    _api: "dhcp_set",
                    "switch": $(this).find('input[name="switch"]').val()
                };
                if (t) {
                    var n = $.trim(e.find('input[name="startip"]').val())
                      , s = $.trim(e.find('input[name="endip"]').val())
                      , o = $.trim(e.find('input[name="time"]').val());
                    if (n.length <= 0 || s.length <= 0)
                        return OrayBox.showMessage("请输入IP地址范围", !1),
                        n.length <= 0 ? e.find('input[name="startip"]').focus() : e.find('input[name="endip"]').focus(),
                        !1;
                    if (parseInt(n, 10) < 0 || parseInt(n, 10) >= parseInt(s, 10) || 255 < parseInt(s, 10))
                        return OrayBox.showMessage("请输入正确IP地址范围", !1),
                        255 < s ? e.find('input[name="endip"]').focus() : e.find('input[name="startip"]').focus(),
                        !1;
                    if (o.length <= 0)
                        return OrayBox.showMessage("请输入租用时间", !1),
                        e.find('input[name="time"]').focus(),
                        !1;
                    if (!$.func.isInt(o))
                        return OrayBox.showMessage("请输入正整数的租用时间", !1),
                        e.find('input[name="time"]').focus(),
                        !1;
                    i.ip_start = e.find('input[name="startip"]').val(),
                    i.ip_end = e.find('input[name="endip"]').val(),
                    i.rent_time = e.find('input[name="time"]').val() + e.find('select[name="unit"]').val()
                }
                return $.ajax({
                    url: e.attr("action"),
                    type: "post",
                    dataType: "json",
                    data: i,
                    beforeSend: function() {
                        OrayBox.showMessage("正在提交数据...", !0, 0),
                        a && a.attr("disabled", !0)
                    },
                    complete: function() {
                        a && a.removeAttr("disabled")
                    },
                    success: function(e) {
                        var a;
                        4 == e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == e.code ? (OrayBox.showMessage("设置成功", !0),
                        t ? (dhcpWin.close(),
                        $('[data-name="dhcp-switch"]').removeClass("btn-switch-off").addClass("btn-switch-on")) : $('[data-name="dhcp-switch"]').removeClass("btn-switch-on").addClass("btn-switch-off")) : e && e.code && (a = OrayBox.getMessage(e.code),
                        OrayBox.showMessage(a, !1, 0))
                    }
                }),
                !1
            })),
            $('[data-name="dhcp-switch"]').click(function() {
                if ($(this).hasClass("btn-switch-on")) {
                    if (!confirm("确定要关闭DHCP吗？"))
                        return !1;
                    $("#dhcpform").find('input[name="switch"]').val(0),
                    $("#dhcpform").submit()
                } else
                    $("#dhcpform").find('input[name="switch"]').val(1),
                    dhcpWin.show()
            })
        }
        function _initBackup() {
            null == recoverWin && (recoverWin = $("#recover-win").window({
                width: 650,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            }),
            $('#recover-win input[name="file"]').change(function(e) {
                var a = e.target.files[0];
                a ? $('#recover-win input[name="filename"]').val(a.name) : $('#recover-win input[name="filename"]').val("")
            }),
            $('a[data-opt="recover"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("config_restore") && void recoverWin.show()
            }),
            $("#recover-form").bind("submit", function() {
                var file = $('#recover-win input[name="file"]');
                if (file[0].files.length <= 0)
                    return OrayBox.showMessage("请先选择要导入的备份文件", !1),
                    !1;
                if (204800 < file[0].files[0].size)
                    return OrayBox.showMessage("导入的备份文件太大", !1),
                    !1;
                var filename = file[0].files[0].name;
                if ("backup" !== filename.substring(filename.lastIndexOf(".") + 1))
                    return OrayBox.showMessage("导入的备份文件有误", !1),
                    !1;
                var button = $("#recover-form button")
                  , fileData = new FormData;
                return fileData.append("file", file[0].files[0]),
                $.ajax({
                    url: "/cgi-bin/oraybox_upload_file",
                    type: "post",
                    data: fileData,
                    cache: !1,
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        OrayBox.showMessage("正在上传文件...", !0, 0),
                        button && button.attr("disabled", !0)
                    },
                    complete: function() {
                        button && button.removeAttr("disabled")
                    },
                    success: function(ret) {
                        var result = eval("(" + ret + ")");
                        if (0 != result.code)
                            return OrayBox.showMessage("上传文件失败", !1),
                            !1;
                        _recoverOraybox(filename)
                    },
                    error: function() {
                        return OrayBox.showMessage("上传文件失败", !1),
                        !1
                    }
                }),
                !1
            })),
            $('a[data-opt="backup"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("config_backup") && void $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: "/cgi-bin/oraybox?_api=config_backup",
                    success: function(e) {
                        0 == e.code && _downloadBaockFile(e.path)
                    }
                })
            })
        }
        function _recoverOraybox(e) {
            var a = $("#recover-form button");
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "/cgi-bin/oraybox?_api=config_restore&is_upload_file=1&reboot=1&filename=" + e,
                beforeSend: function() {
                    OrayBox.showMessage("正在提交数据...", !0, 0),
                    a && a.attr("disabled", !0)
                },
                complete: function() {
                    a && a.removeAttr("disabled")
                },
                success: function(e) {
                    var a, t;
                    4 == e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == e.code ? (recoverWin.close(),
                    $("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                    a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在恢复设置，请耐心等候...</p>'],
                    setTimeout(function() {
                        OrayBox.showNotify(a.join(""), !0, function() {
                            null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                OrayBox.checkStatus(function(e) {
                                    e && 0 === e.code && (OrayBox.showMessage("恢复成功", !0),
                                    OrayBox.showNotify("", !1, function() {
                                        setTimeout(function() {
                                            location.assign(location.href)
                                        }, 300)
                                    }))
                                })
                            }, 1e4))
                        })
                    }, 500))) : e && e.code && (t = OrayBox.getMessage(e.code),
                    OrayBox.showMessage(t, !1, 0))
                },
                error: function() {
                    return a && a.removeAttr("disabled"),
                    !1
                }
            })
        }
        function _downloadBaockFile(e) {
            try {
                var a = (new Date).toISOString().substring(0, 10)
                  , t = document.createElement("a");
                t.href = e,
                t.download = "system_config_" + a + ".backup",
                document.body.appendChild(t),
                t.click(),
                document.body.removeChild(t)
            } catch (i) {}
        }
        function _getDeviceInfo() {
            OrayBox.getTotalInfo(function(e) {
                if (0 == e.code) {
                    switch (e.sys_base_machine.split(" ")[1]) {
                    case "X1-1111":
                    case "X1-2111":
                    case "ORH-100":
                    case "X3-D1509":
                    case "X3-D1509A":
                    case "X3-2151":
                    case "X3-3251":
                    case "X3Pro-1153":
                    case "E3-1141":
                    case "X5-1253":
                    case "X5-2253":
                    case "X5-3353":
                    case "X5-4253":
                    case "X5-5255":
                    case "X5-6256":
                    case "P1-2111":
                    case "ORH-180":
                    case "ORH-260":
                    case "R300-1121G":
                    case "R300-2121G":
                    case "R300S-1151G":
                    case "R300A-1121G":
                    case "R300C-1121G":
                    case "X4-1123G":
                    case "X4-2123G":
                    case "X4C-1141G":
                    case "X4C-2131G":
                        OrayBox.getWifi(_init4GInfo, "2.4G"),
                        OrayBox.getGuestWifi(_initGuestWifiInfo);
                    case "G5-1250":
                    case "G5-2250":
                    case "A500":
                    case "ORG-220":
                    case "GBox-1230":
                        _initDeviceInfo(e);
                        break;
                    case "V1000":
                    case "V2000-1260":
                    case "V3000-1460":
                    case "G100Pro-1240":
                    case "G100Pro-2240":
                    case "G300Pro-1440":
                    case "ORG-1100":
                        OrayBox.getX86Wan2(function(i) {
                            e.x86_wan2_switch = i["switch"],
                            e.x86_wan2_ether = i.wan2,
                            (1 == i["switch"] ? _initX6DeviceInfo : _initDeviceInfo)(e),
                            OrayBox.getInterfaces(function(e) {
                                $.each(e, function(a, t) {
                                    OrayBox.getDns(function(e) {
                                        e.x86_wan2_switch = i["switch"],
                                        _initDns(e, t, a)
                                    }, t),
                                    OrayBox.getMtu(function(e) {
                                        e.x86_wan2_switch = i["switch"],
                                        _initMtu(e, t, a)
                                    }, t)
                                })
                            }, i["switch"]),
                            OrayBox.resize()
                        });
                        break;
                    case "X6-2293P":
                    case "X6-1293P":
                    case "X6-3293P":
                        _initX6DeviceInfo(e),
                        OrayBox.getWifi(_init4GInfo, "2.4G"),
                        OrayBox.getGuestWifi(_initGuestWifiInfo)
                    }
                    -1 === $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"]) && OrayBox.getInterfaces(function(e) {
                        $.each(e, function(a, t) {
                            OrayBox.getDns(function(e) {
                                _initDns(e, t, a)
                            }, t),
                            OrayBox.getMtu(function(e) {
                                _initMtu(e, t, a)
                            }, t)
                        })
                    })
                }
                $("#sysinfo-box").show(),
                $("#load-info").remove(),
                OrayBox.resize()
            }, "2.4G")
        }
        function _initDns(e, i, a) {
            null == dnsWin && (dnsWin = $("#dns-win").window({
                width: 600,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            }),
            $("#recommend-dns").on("click", function() {
                var e = $(this).data("maindns")
                  , a = $(this).data("backupdns")
                  , t = $("#dnsform");
                t.find('input[name="maindns"]').val(e),
                t.find('input[name="backupdns"]').val(a)
            }),
            $("#dnsform").bind("submit", function() {
                var e = $(this)
                  , a = $.trim(e.find('input[name="maindns"]').val())
                  , t = e.find("button");
                if (a.length <= 0)
                    return OrayBox.showMessage("请输入首选DNS！", !1),
                    e.find('input[name="maindns"]').focus(),
                    !1;
                var i = {
                    dns: a,
                    backup_dns: $.trim(e.find('input[name="backupdns"]').val()),
                    "interface": $.trim(e.find('input[name="interface"]').val())
                };
                return $.ajax({
                    url: e.attr("action"),
                    type: "post",
                    dataType: "json",
                    data: i,
                    beforeSend: function() {
                        OrayBox.showMessage("正在提交数据...", !0, 0),
                        t && t.attr("disabled", !0)
                    },
                    complete: function() {
                        t && t.removeAttr("disabled")
                    },
                    success: function(e) {
                        var a, t;
                        4 == e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == e.code ? (dnsWin.close(),
                        $("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                        a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(a.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("DNS设置成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                location.assign(location.href)
                                            }, 300)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))) : e && e.code && (t = OrayBox.getMessage(e.code),
                        OrayBox.showMessage(t, !1, 0))
                    },
                    error: function(e) {
                        return t && t.removeAttr("disabled"),
                        !1
                    }
                }),
                !1
            }));
            var n = $('[data-name="dns"]')
              , s = $('[data-name="backup-dns"]')
              , t = $('a[data-opt="modify-dns"]');
            ("X6" == OrayBox.type || 1 == e.x86_wan2_switch && -1 !== $.inArray(OrayBox.model, ["A500", "V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"])) && (n = $('[data-name="wan' + a + '-dns"]'),
            s = $('[data-name="wan' + a + '-backup-dns"]'),
            t = $('a[data-opt="modify-dns' + a + '"]')),
            e.dns.length <= 0 ? n.html("未指定") : n.html(e.dns),
            e.backup_dns.length <= 0 ? s.html("未指定") : s.html(e.backup_dns),
            t.click(function() {
                if (!OrayBox.checkLimitPrivilege("dns_set"))
                    return !1;
                var e = $("#dnsform")
                  , a = n.text()
                  , t = s.text();
                "未指定" != a && e.find('input[name="maindns"]').val(a),
                "未指定" != t && e.find('input[name="backupdns"]').val(t),
                e.find('input[name="interface"]').val(i),
                dnsWin.show()
            })
        }
        function _initMtu(e, t, a) {
            null == mtuWin && (mtuWin = $("#mtu-win").window({
                width: 600,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            }),
            $("#mtuform").bind("submit", function() {
                var e = $(this)
                  , a = $.trim(e.find('input[name="mtu"]').val())
                  , t = e.find("button");
                if (a.length <= 0)
                    return OrayBox.showMessage("请输入MTU值！", !1),
                    e.find('input[name="mtu"]').focus(),
                    !1;
                if (!$.func.isInt(a) || 1500 < a || a < 500)
                    return OrayBox.showMessage("请输入正确MTU值[500-1500]！", !1),
                    e.find('input[name="mtu"]').focus(),
                    !1;
                var i = {
                    mtu: a,
                    "interface": $.trim(e.find('input[name="interface"]').val())
                };
                return $.ajax({
                    url: e.attr("action"),
                    type: "post",
                    dataType: "json",
                    data: i,
                    beforeSend: function() {
                        OrayBox.showMessage("正在提交数据...", !0, 0),
                        t && t.attr("disabled", !0)
                    },
                    complete: function() {
                        t && t.removeAttr("disabled")
                    },
                    success: function(e) {
                        var a, t;
                        4 == e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == e.code ? (mtuWin.close(),
                        $("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                        a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(a.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("MTU设置成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                location.assign(location.href)
                                            }, 300)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))) : e && e.code && (t = OrayBox.getMessage(e.code),
                        OrayBox.showMessage(t, !1, 0))
                    },
                    error: function(e) {
                        return t && t.removeAttr("disabled"),
                        !1
                    }
                }),
                !1
            }));
            var i = $('[data-name="mtu"]')
              , n = $('a[data-opt="modify-mtu"]');
            ("X6" == OrayBox.type || 1 == e.x86_wan2_switch && -1 !== $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"])) && (i = $('[data-name="wan' + a + '-mtu"]'),
            n = $('a[data-opt="modify-mtu' + a + '"]')),
            i.html(e.mtu),
            n.click(function() {
                if (!OrayBox.checkLimitPrivilege("mtu_set"))
                    return !1;
                var e = $("#mtuform")
                  , a = i.text();
                e.find('input[name="mtu"]').val(a),
                e.find('input[name="interface"]').val(t),
                mtuWin.show()
            })
        }
        function _initDeviceInfo(e) {
            var a = e.sys_base_machine.split(" ");
            $('[data-name="machine-name"]').html(a[1]),
            e.sys_base_machine_display != undefined && "" != e.sys_base_machine_display && $('[data-name="machine-name"]').html(e.sys_base_machine_display);
            var t = e.sys_base_ver_main + "." + e.sys_base_ver_sub + "." + e.sys_base_ver_revision + " ";
            "develop" == e.sys_base_ver_type ? t += "开发版" : t += "稳定版",
            "kp4g" == e.sys_base_wan_mode && ($('a[data-opt="clone-mac"]').hide(),
            -1 !== $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300S-1151G", "R300A-1121G", "R300C-1121G", "X4-1123G", "X4-2123G", "E3-1141", "X4C-1141G", "X4C-2131G"]) && setTimeout(function() {
                OrayBox.getKp4gInfo(function(e) {
                    var a;
                    0 == e.code && ($("#kp4g-info").show(),
                    a = _getSimIntensity(e.detail),
                    $("#sim-signal-val").html(a.text),
                    $("#sim-signal").css("background-position-y", _getSimIntensityIconY(a.level)))
                })
            }, 2e3)),
            $('[data-name="sysversion"]').html(t),
            $('[data-name="wan-ip"]').html(e.sys_base_wan_ip),
            $('[data-name="wan-mac"]').html(e.sys_base_wan_mac),
            $('[data-name="lan-ip"]').html(e.lan_ip),
            $('[data-name="lan-mask"]').html(e.lan_mask),
            $('[data-name="gateway"]').html(e.sys_base_wan_gw || "-"),
            $('[data-name="mask"]').html(e.sys_base_wan_mask || "-"),
            $('#dhcp-win input[name="startip"]').val(e.dhcp_ip_start),
            $('#dhcp-win input[name="endip"]').val(e.dhcp_ip_end);
            var i = e.dhcp_rent_time;
            rentTimeUnitSel = $('#dhcp-win select[name="unit"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            var n = i.substr(i.length - 1, 1)
              , s = i.replace(n, "");
            $('#dhcp-win input[name="time"]').val(s),
            rentTimeUnitSel.select(n),
            1 == e.dhcp_switch ? $('[data-name="dhcp-switch"]').addClass("btn-switch-on") : $('[data-name="dhcp-switch"]').addClass("btn-switch-off");
            var o = e.sys_base_os_run_time;
            setInterval(function() {
                o++;
                var e = OrayBox.formatRunTime(o);
                $('[data-name="run-time"]').html(e)
            }, 1e3);
            var r = OrayBox.formatRunTime(o);
            $('[data-name="run-time"]').html(r),
            _initCloneMac(e)
        }
        function _getSimIntensity(e) {
            var a, t = {
                text: "无",
                level: 1
            };
            return e.rsrp ? -65 < (a = e.rsrp) ? (t.text = "非常好（" + a + "dBm）",
            t.level = 4) : -75 <= a ? (t.text = "好（" + a + "dBm）",
            t.level = 4) : -85 <= a ? (t.text = "较好（" + a + "dBm）",
            t.level = 3) : -95 <= a ? (t.text = "一般（" + a + "dBm）",
            t.level = 3) : -105 <= a ? (t.text = "弱（" + a + "dBm）",
            t.level = 2) : (t.text = "非常弱（" + a + "dBm）",
            t.level = 1) : e.rsrq && (-6 < (a = e.rsrq) ? (t.text = "非常好（" + a + "dBm）",
            t.level = 4) : -8 <= a ? (t.text = "好（" + a + "dBm）",
            t.level = 4) : -11 <= a ? (t.text = "较好（" + a + "dBm）",
            t.level = 3) : -14 <= a ? (t.text = "一般（" + a + "dBm）",
            t.level = 3) : -17 <= a ? (t.text = "弱（" + a + "dBm）",
            t.level = 2) : (t.text = "非常弱（" + a + "dBm）",
            t.level = 1)),
            t
        }
        function _getSimIntensityIconY(e) {
            var a = "";
            switch (e) {
            case 1:
                a = "0px";
                break;
            case 2:
                a = "-17px";
                break;
            case 3:
                a = "-34px";
                break;
            case 4:
                a = "-51px";
                break;
            default:
                a = "0px"
            }
            return a
        }
        function _initX6DeviceInfo(e) {
            "undefined" != typeof e.sys_base_wan2_mode ? ("dhcp" == e.sys_base_wan2_mode ? $('[data-name="wan2-mod"]').html("动态IP") : "static" == e.sys_base_wan2_mode ? $('[data-name="wan2-mod"]').html("静态IP") : $('[data-name="wan2-mod"]').html("宽带拨号"),
            e.sys_base_wan2_ip && 0 < e.sys_base_wan2_ip.length ? ($('[data-name="wan2-ip"]').html(e.sys_base_wan2_ip),
            $('[data-name="wan2-status"]').html("已连接")) : ($('[data-name="wan2-ip"]').html("-"),
            $('[data-name="wan2-status"]').html("未连接").addClass("red")),
            $('[data-name="wan2-mac"]').html(e.sys_base_wan2_mac),
            $('[data-name="wan2-gateway"]').html(e.sys_base_wan2_gw),
            $('[data-name="wan2-mask"]').html(e.sys_base_wan2_mask)) : ($('[data-name="wan2-mod"]').html("-"),
            $('[data-name="wan2-status"]').html("未连接").addClass("red"),
            $('[data-name="wan2-mac"]').html("-"),
            $('[data-name="wan2-ip"]').html("-")),
            _checkWan1Mode(e),
            $("#net-info").hide(),
            $("#X6-net-info").show();
            var a = e.sys_base_machine.split(" ");
            $('[data-name="machine-name"]').html(a[1]);
            var t = e.sys_base_ver_main + "." + e.sys_base_ver_sub + "." + e.sys_base_ver_revision + " ";
            "develop" == e.sys_base_ver_type ? t += "开发版" : t += "稳定版",
            $('[data-name="sysversion"]').html(t),
            $('[data-name="lan-ip"]').html(e.lan_ip),
            $('[data-name="lan-mask"]').html(e.lan_mask),
            $('#dhcp-win input[name="startip"]').val(e.dhcp_ip_start),
            $('#dhcp-win input[name="endip"]').val(e.dhcp_ip_end);
            var i = e.dhcp_rent_time;
            rentTimeUnitSel = $('#dhcp-win select[name="unit"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            var n = i.substr(i.length - 1, 1)
              , s = i.replace(n, "");
            $('#dhcp-win input[name="time"]').val(s),
            rentTimeUnitSel.select(n),
            1 == e.dhcp_switch ? $('[data-name="dhcp-switch"]').addClass("btn-switch-on") : $('[data-name="dhcp-switch"]').addClass("btn-switch-off");
            var o = e.sys_base_os_run_time;
            setInterval(function() {
                o++;
                var e = OrayBox.formatRunTime(o);
                $('[data-name="run-time"]').html(e)
            }, 1e3);
            var r = OrayBox.formatRunTime(o);
            $('[data-name="run-time"]').html(r),
            $('a[data-opt="refresh-wan1"], a[data-opt="refresh-wan2"]').click(function() {
                var a = $(this);
                a.next("img").css("display", "inline-block"),
                a.hide(),
                $.getJSON("/cgi-bin/oraybox?_api=total_info&dev=2.4G", function(e) {
                    4 == e.code && location.assign("/oraybox/login.html?err=sesstimeout"),
                    0 == e.code && (_checkWan1Mode(e),
                    "undefined" != typeof e.sys_base_wan2_mode ? (e.sys_base_wan2_ip && 0 < e.sys_base_wan2_ip.length ? ($('[data-name="wan2-ip"]').html(e.sys_base_wan2_ip),
                    $('[data-name="wan2-status"]').html("已连接").removeClass("red")) : ($('[data-name="wan2-ip"]').html("-"),
                    $('[data-name="wan2-status"]').html("未连接").addClass("red")),
                    "dhcp" == e.sys_base_wan2_mode ? $('[data-name="wan2-mod"]').html("动态IP") : "static" == e.sys_base_wan2_mode ? $('[data-name="wan2-mod"]').html("静态IP") : $('[data-name="wan2-mod"]').html("宽带拨号")) : ($('[data-name="wan2-mod"]').html("-"),
                    $('[data-name="wan2-status"]').html("未连接").addClass("red"),
                    $('[data-name="wan2-mac"]').html("-"),
                    $('[data-name="wan2-ip"]').html("-"))),
                    a.next("img").hide(),
                    a.show()
                })
            }),
            _initCloneMac(e)
        }
        function _initWan1Info(e, a) {
            "undefined" != typeof e.sys_base_wan_mode ? (e.sys_base_wan_ip && 0 < e.sys_base_wan_ip.length ? ($('[data-name="wan1-ip"]').html(e.sys_base_wan_ip),
            $('[data-name="wan1-status"]').html("已连接").removeClass("red")) : ($('[data-name="wan1-ip"]').html("-"),
            $('[data-name="wan1-status"]').html("未连接").addClass("red")),
            a ? $('[data-name="wan1-mod"]').html("3G/4G USB适配器") : "dhcp" == e.sys_base_wan_mode ? $('[data-name="wan1-mod"]').html("动态IP") : "static" == e.sys_base_wan_mode ? $('[data-name="wan1-mod"]').html("静态IP") : "ap_wifi" == e.sys_base_wan_mode ? $('[data-name="wan1-mod"]').html("无线中继") : $('[data-name="wan1-mod"]').html("宽带拨号"),
            $('[data-name="wan1-mac"]').html(e.sys_base_wan_mac),
            $('[data-name="wan1-gateway"]').html(e.sys_base_wan_gw),
            $('[data-name="wan1-mask"]').html(e.sys_base_wan_mask)) : ($('[data-name="wan1-mod"]').html("-"),
            $('[data-name="wan1-status"]').html("未连接").addClass("red"),
            $('[data-name="wan1-mac"]').html("-"),
            $('[data-name="wan1-ip"]').html("-"))
        }
        function _checkWan1Mode(a) {
            -1 != $.inArray(OrayBox.model, ["X1-1111", "X1-2111", "ORH-100", "X3-2151", "X3-3251", "X3Pro-1153", "E3-1141", "X5-2253", "X5-3353", "X5-4253", "X5-5255", "X5-6256", "ORH-180", "ORH-260", "G5-1250", "G5-2250", "A500", "ORG-220", "G100Pro-2240"]) ? OrayBox.getUsb3GConnect(function(e) {
                0 == e.code && 1 == e.wan_3g_setup.enabled ? _initWan1Info(a, !0) : _initWan1Info(a, !1)
            }) : _initWan1Info(a, !1)
        }
        function _initGuestWifiInfo(l) {
            var f = $("#guestwifi-form")
              , u = $("#guestwifi-win").window({
                width: 650,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            });
            f.find('input[name="ssid"]').val(l.ssid),
            f.find('input[name="pwd"]').val(l.pwd),
            "" == l.pwd && (f.find('input[name="nopwd"]').prop("checked", "checked"),
            f.find('input[name="pwd"]').attr("disabled", "disabled")),
            1 == l.shaping_switch ? (f.find(".tc-switch").addClass("btn-switch-on"),
            f.find('input[name="upload"]').val(l.upload.replace("kbps", "")),
            f.find('input[name="download"]').val(l.download.replace("kbps", ""))) : (f.find(".tc-switch").addClass("btn-switch-off"),
            f.find('input[name="upload"], input[name="download"]').attr("disabled", "disabled")),
            1 == l["switch"] ? (f.find(".wifi-switch").addClass("btn-switch-on"),
            $('span[data-name="guestwifi-switch"]').html('开启（<span style="max-width: 130px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;vertical-align: middle;">' + l.ssid + "</span>）"),
            $('span[data-name="guestwifi-tcswitch"]').text("1" == l.shaping_switch ? "已开启" : "未开启")) : (f.find(".wifi-switch").addClass("btn-switch-off"),
            f.find(".tc-switch").addClass("btn-switch-off"),
            f.find('input[type="checkbox"], input[name="ssid"], input[name="pwd"], input[name="upload"], input[name="download"]').attr("disabled", "disabled"),
            $('span[data-name="guestwifi-switch"]').text("关闭"),
            $('span[data-name="guestwifi-tcswitch"]').text("-")),
            f.find('input[name="switch"]').val(l["switch"]),
            f.find('input[name="tcswitch"]').val(l.shaping_switch),
            $("#guestwifi-info").show(),
            f.find(".wifi-switch").click(function() {
                var e, a, t, i;
                $(this).hasClass("btn-switch-off") ? ($(this).attr("class", "btn-switch wifi-switch btn-switch-on"),
                $(this).find('input[type="hidden"]').val("1"),
                e = f.find('input[name="nopwd"]:checked').size(),
                f.find('input[type="checkbox"], input[name="ssid"]').removeAttr("disabled"),
                e ? f.find('input[name="pwd"]').attr("disabled", "disabled") : f.find('input[name="pwd"]').removeAttr("disabled"),
                (a = $.trim(f.find('input[name="ssid"]').val())).length <= 0 && ((t = $('#net-info span[data-name="wan-mac"]').text()).length <= 0 && (t = $('#X6-net-info span[data-name="wan1-mac"]').text()),
                a = "OrayBox-" + (t = (t = t.replace(/:/g, "")).substr(-4, 4).toUpperCase()) + "-SHARE",
                f.find('input[name="ssid"]').val(a)),
                i = f.find('.tc-switch input[type="hidden"]').val(),
                1 == parseInt(i, 10) ? f.find('input[name="upload"], input[name="download"]').removeAttr("disabled") : f.find('input[name="upload"], input[name="download"]').attr("disabled", "disabled")) : ($(this).attr("class", "btn-switch wifi-switch btn-switch-off"),
                $(this).find('input[type="hidden"]').val("0"),
                f.find(".tc-switch").removeClass("btn-switch-on").addClass("btn-switch-off"),
                f.find('.tc-switch input[type="hidden"]').val("0"),
                f.find('input[type="checkbox"], input[name="ssid"], input[name="pwd"], input[name="upload"], input[name="download"]').attr("disabled", "disabled"))
            }),
            f.find(".tc-switch").click(function() {
                var e = f.find('.wifi-switch input[type="hidden"]').val();
                1 == parseInt(e, 10) && ($(this).hasClass("btn-switch-off") ? ($(this).attr("class", "btn-switch tc-switch btn-switch-on"),
                $(this).find('input[type="hidden"]').val("1"),
                f.find('input[name="upload"], input[name="download"]').removeAttr("disabled")) : ($(this).attr("class", "btn-switch tc-switch btn-switch-off"),
                $(this).find('input[type="hidden"]').val("0"),
                f.find('input[name="upload"], input[name="download"]').attr("disabled", "disabled")))
            }),
            f.find('input[name="nopwd"]').click(function() {
                this.checked ? f.find('input[name="pwd"]').val("").attr("disabled", "disabled") : f.find('input[name="pwd"]').removeAttr("disabled")
            }),
            $('a[data-opt="modify-guestwifi"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("guest_wifi_set") && void u.show()
            }),
            f.bind("submit", function() {
                var e = parseInt(f.find('input[name="switch"]').val(), 10)
                  , a = parseInt(f.find('input[name="tcswitch"]').val(), 10);
                if (1 == e) {
                    var t = $.trim(f.find('input[name="ssid"]').val())
                      , i = $.trim(f.find('input[name="pwd"]').val())
                      , n = f.find('input[name="nopwd"]:checked').size();
                    if (t.length <= 0)
                        return OrayBox.showMessage("请输入访客WiFi名称", !1),
                        f.find('input[name="ssid"]').focus(),
                        !1;
                    if (/\\s/.test(t))
                        return OrayBox.showMessage("访客WiFi名称不能含有空格", !1),
                        f.find('input[name="ssid"]').focus(),
                        !1;
                    if (!n) {
                        if (i.length <= 0)
                            return OrayBox.showMessage("请输入访客WiFi密码", !1),
                            f.find('input[name="pwd"]').focus(),
                            !1;
                        if (i.length < 8)
                            return OrayBox.showMessage("访客WiFi密码长度不能少于8位", !1),
                            f.find('input[name="pwd"]').focus(),
                            !1;
                        if ($.func.hasCnChar(i) || /\\'|"/.test(i))
                            return OrayBox.showMessage("访客密码不允许含有“'（单引号）”/“\\"(双引号)”/中文", !1),
                            f.find('input[name="pwd"]').focus(),
                            !1
                    }
                }
                if (1 == a) {
                    var s = $.trim(f.find('input[name="upload"]').val())
                      , o = $.trim(f.find('input[name="download"]').val())
                      , r = /^[0-9]+.?[0-9]*$/;
                    if (s.length <= 0)
                        return OrayBox.showMessage("请输入上传带宽", !1),
                        f.find('input[name="upload"]').focus(),
                        !1;
                    if (!r.test(s))
                        return OrayBox.showMessage("上传带宽必须为数字", !1),
                        f.find('input[name="upload"]').focus(),
                        !1;
                    if (parseInt(s, 10) <= 0 || 1024e3 < parseInt(s, 10))
                        return OrayBox.showMessage("上传带宽限制范围[1-1024000]", !1),
                        f.find('input[name="upload"]').focus(),
                        !1;
                    if (o.length <= 0)
                        return OrayBox.showMessage("请输入下载带宽", !1),
                        f.find('input[name="download"]').focus(),
                        !1;
                    if (!r.test(o))
                        return OrayBox.showMessage("下载带宽必须为数字", !1),
                        f.find('input[name="download"]').focus(),
                        !1;
                    if (parseInt(o, 10) <= 0 || 1024e3 < parseInt(o, 10))
                        return OrayBox.showMessage("下载带宽限制范围[1-1024000]", !1),
                        f.find('input[name="download"]').focus(),
                        !1
                }
                var c = f.find("button")
                  , d = {
                    "switch": e,
                    ssid: t,
                    pwd: i,
                    autoconfig: 1
                }
                  , p = {
                    "switch": a,
                    upload: 1 == a ? s : 0,
                    download: 1 == a ? o : 0
                };
                return OrayBox.showMessage("正在设置访客WiFi，请稍候...", !0, 0),
                OrayBox.request("guest_wifi_set", d, function(e) {
                    var a;
                    4 == l.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == l.code ? OrayBox.request("guest_wifi_tc", p, function(e) {
                        var a;
                        4 == l.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == l.code ? OrayBox.request("restart_service", {
                            name: "network"
                        }, function(e) {
                            var a, t;
                            0 == l.code ? $("#notify-win:visible").size() || (u.close(),
                            c && c.removeAttr("disabled"),
                            a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请稍候...</p>'],
                            setTimeout(function() {
                                OrayBox.showNotify(a.join(""), !0, function() {
                                    null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                        OrayBox.checkStatus(function(e) {
                                            e && 0 === e.code && (OrayBox.showMessage("访客WiFi设置成功", !0),
                                            OrayBox.showNotify("", !1, function() {
                                                setTimeout(function() {
                                                    location.assign(location.href)
                                                }, 300)
                                            }))
                                        })
                                    }, 1e4))
                                })
                            }, 500)) : 4 == l.code ? location.assign("/oraybox/login.html?err=sesstimeout") : l && l.code && (t = OrayBox.getMessage(l.code),
                            OrayBox.showMessage(t, !1, 0),
                            c && c.removeAttr("disabled"))
                        }, "POST") : l && l.code && (a = OrayBox.getMessage(l.code),
                        OrayBox.showMessage(a, !1, 0),
                        c && c.removeAttr("disabled"))
                    }, "POST") : l && l.code && (a = OrayBox.getMessage(l.code),
                    OrayBox.showMessage(a, !1, 0),
                    c && c.removeAttr("disabled"))
                }, "POST"),
                !1
            }),
            OrayBox.resize()
        }
        function _init4GInfo(e) {
            var f = $("#wifi-win").window({
                width: 650,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            })
              , a = $('#wifiform select[name="intensity"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            })
              , t = $('#wifiform select[name="htmode"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            })
              , i = $('#wifiform select[name="channel"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            if ("1" == e["switch"]) {
                $('[data-name="wifi-switch"]').html('开启（<span style="max-width: 130px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;vertical-align: middle;">' + e.ssid + "</span>）");
                var n = "-";
                switch (e.level) {
                case 1:
                    n = "节能模式";
                    break;
                case 2:
                    n = "标准模式";
                    break;
                case 3:
                    n = "穿墙模式"
                }
                $('[data-name="wifi-intensity"]').html(n),
                $("#wifiform .btn-switch").addClass("btn-switch-on"),
                $('#wifiform input[name="ssid"]').val(e.ssid),
                "1" == e.hidden && $('#wifiform input[name="hidden"]').prop("checked", "checked"),
                $('#wifiform input[name="pwd"]').val(e.pwd),
                "" == e.pwd && ($('#wifiform input[name="nopwd"]').prop("checked", "checked"),
                $('#wifiform input[name="pwd"]').attr("disabled", "disabled")),
                a.select(e.level),
                i.select(e.channel),
                t.select(e.htmode)
            } else
                $('[data-name="wifi-switch"]').html("关闭"),
                $('[data-name="wifi-intensity"]').html("-"),
                $("#wifiform .btn-switch").addClass("btn-switch-off"),
                $("#wifiform").find('input[type="checkbox"], input[name="ssid"], input[name="pwd"]').attr("disabled", "disabled"),
                a.disabled(),
                i.disabled(),
                t.disabled();
            $('#wifiform input[name="switch"]').val(e["switch"]),
            $.getJSON("/cgi-bin/oraybox?_api=wifi_sta_get", function(e) {
                if (0 == e.code && 1 == e.enabled) {
                    if (e.sta_wifi && 1 == e.sta_wifi.wifi_type)
                        return;
                    i.disabled(),
                    $('#wifiform input[name="issta"]').val(1),
                    $('[data-name="wan1-mod"]').html("无线中继")
                }
            }),
            $('a[data-opt="modify-wifi"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("wifi_set") && void f.show()
            }),
            $('#wifiform input[name="nopwd"]').click(function() {
                this.checked ? $('#wifiform input[name="pwd"]').val("").attr("disabled", "disabled") : $('#wifiform input[name="pwd"]').removeAttr("disabled")
            }),
            $("#wifiform .btn-switch").click(function() {
                var e;
                $(this).data("type");
                $(this).hasClass("btn-switch-off") ? ($(this).attr("class", "btn-switch btn-switch-on"),
                $(this).find('input[type="hidden"]').val("1"),
                e = $('#wifiform input[name="nopwd"]:checked').size(),
                $("#wifiform").find('input[type="checkbox"], input[name="ssid"]').removeAttr("disabled"),
                e ? $('#wifiform input[name="pwd"]').attr("disabled", "disabled") : $('#wifiform input[name="pwd"]').removeAttr("disabled"),
                a.enabled(),
                t.enabled(),
                "0" == $('#wifiform input[name="issta"]').val() && i.enabled()) : ($(this).attr("class", "btn-switch btn-switch-off"),
                $(this).find('input[type="hidden"]').val("0"),
                $("#wifiform").find('input[type="checkbox"], input[name="ssid"], input[name="pwd"]').attr("disabled", "disabled"),
                a.disabled(),
                i.disabled(),
                t.disabled())
            }),
            $("#wifiform").bind("submit", function() {
                var e = $(this)
                  , a = parseInt(e.find('input[name="switch"]').val(), 10);
                if (1 == a) {
                    var t = $.trim(e.find('input[name="ssid"]').val())
                      , i = $.trim(e.find('input[name="pwd"]').val())
                      , n = e.find('input[name="nopwd"]:checked').size();
                    if (t.length <= 0)
                        return OrayBox.showMessage("请输入2.4G网络WiFi名称", !1),
                        e.find('input[name="ssid"]').focus(),
                        !1;
                    if (/\\s/.test(t))
                        return OrayBox.showMessage("WiFi名称不能含有空格", !1),
                        e.find('input[name="ssid"]').focus(),
                        !1;
                    if (!n) {
                        if (i.length <= 0)
                            return OrayBox.showMessage("请输入2.4G网络WiFi密码", !1),
                            e.find('input[name="pwd"]').focus(),
                            !1;
                        if (i.length < 8)
                            return OrayBox.showMessage("WiFi密码长度不能少于8位", !1),
                            e.find('input[name="pwd"]').focus(),
                            !1;
                        if ($.func.hasCnChar(i) || /\\'|"/.test(i))
                            return OrayBox.showMessage("密码不允许含有“'（单引号）”/“\\"(双引号)”/中文", !1),
                            e.find('input[name="pwd"]').focus(),
                            !1
                    }
                }
                switch ($(".intensity-box input").val()) {
                case "节能模式":
                    var s = 1;
                    break;
                case "标准模式":
                    s = 2;
                    break;
                case "穿墙模式":
                    s = 3
                }
                var o, r = $(".channel-box input").val();
                o = "自动" === r ? "auto" : r;
                var c = $(".ht-box select").val()
                  , d = {
                    "switch": a,
                    ssid: $.trim(e.find('input[name="ssid"]').val()),
                    level: s,
                    channel: o,
                    htmode: c,
                    hidden: 0,
                    hide: 0,
                    is_restart_wifi: 1,
                    dev: "2.4G",
                    _api: "wifi_set"
                };
                e.find('input[name="nopwd"]:checked').size() ? d.pwd = "" : d.pwd = $.trim(e.find('input[name="pwd"]').val()),
                e.find('input[name="hidden"]:checked').size() && (d.hidden = 1,
                d.hide = 1);
                var p = e.find("button")
                  , l = setTimeout(function() {
                    var e;
                    $("#notify-win:visible").size() || (f.close(),
                    e = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请重新连接WIFI...</p>'],
                    setTimeout(function() {
                        OrayBox.showNotify(e.join(""), !0, function() {
                            null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                OrayBox.checkStatus(function(e) {
                                    e && 0 === e.code && (OrayBox.showMessage("2.4GWIFI设置成功", !0),
                                    OrayBox.showNotify("", !1, function() {
                                        setTimeout(function() {
                                            location.assign(location.href)
                                        }, 300)
                                    }))
                                })
                            }, 1e4))
                        })
                    }, 500))
                }, 15e3);
                return $.ajax({
                    url: e.attr("action"),
                    type: "post",
                    dataType: "json",
                    data: d,
                    beforeSend: function() {
                        OrayBox.showMessage("若修改WiFi名称或密码，请重新连接修改后的WiFi", !0, 0),
                        p && p.attr("disabled", !0)
                    },
                    complete: function() {
                        p && p.removeAttr("disabled")
                    },
                    success: function(e) {
                        var a, t;
                        4 == e.code ? (clearTimeout(l),
                        location.assign("/oraybox/login.html?err=sesstimeout")) : 0 == e.code ? (f.close(),
                        clearTimeout(l),
                        $("#notify-win:visible").size() || (a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(a.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("2.4GWIFI设置成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                location.assign(location.href)
                                            }, 3e3)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))) : e && e.code && (clearTimeout(l),
                        t = OrayBox.getMessage(e.code),
                        OrayBox.showMessage(t, !1, 0))
                    },
                    error: function(e) {
                        var a, t = e.responseText.split("\\n");
                        return "undefined" != typeof t[3] ? '{"code":0}' == (e = t[3]) && (clearTimeout(l),
                        f.close(),
                        $("#notify-win:visible").size() || (a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(a.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("2.4GWIFI设置成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                location.assign(location.href)
                                            }, 3e3)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))) : p && p.removeAttr("disabled"),
                        !1
                    }
                }),
                !1
            }),
            $("#wifi-info").show(),
            OrayBox.resize()
        }
        function _init5GInfo(e) {
            var f = $("#wifi5g-win").window({
                width: 650,
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5,
                    dragging: function(e) {
                        e.offsetX < 0 && (e.offsetX = 0),
                        e.offsetY < 0 && (e.offsetY = 0)
                    }
                }
            })
              , a = $('#wifi5gform select[name="intensity"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            })
              , t = $('#wifi5gform select[name="htmode"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            })
              , i = $('#wifi5gform select[name="channel"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            if ("1" == e["switch"]) {
                $('[data-name="wifi5g-switch"]').html('开启（<span style="max-width: 130px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;vertical-align: middle;">' + e.ssid + "</span>）");
                var n = "-";
                switch (e.level) {
                case 1:
                    n = "节能模式";
                    break;
                case 2:
                    n = "标准模式";
                    break;
                case 3:
                    n = "穿墙模式"
                }
                $('[data-name="wifi5g-intensity"]').html(n),
                $("#wifi5gform .btn-switch").addClass("btn-switch-on"),
                $('#wifi5gform input[name="ssid"]').val(e.ssid),
                "1" == e.hidden && $('#wifi5gform input[name="hidden"]').prop("checked", "checked"),
                $('#wifi5gform input[name="pwd"]').val(e.pwd),
                "" == e.pwd && ($('#wifi5gform input[name="nopwd"]').prop("checked", "checked"),
                $('#wifi5gform input[name="pwd"]').attr("disabled", "disabled")),
                a.select(e.level),
                i.select(e.channel),
                t.select(e.htmode)
            } else
                $('[data-name="wifi5g-switch"]').html("关闭"),
                $('[data-name="wifi5g-intensity"]').html("-"),
                $("#wifi5gform .btn-switch").addClass("btn-switch-off"),
                $("#wifi5gform").find('input[type="checkbox"], input[name="ssid"], input[name="pwd"]').attr("disabled", "disabled"),
                a.disabled(),
                i.disabled(),
                t.disabled();
            $('#wifi5gform input[name="switch"]').val(e["switch"]),
            -1 === $.inArray(OrayBox.type, ["X6"]) && $.getJSON("/cgi-bin/oraybox?_api=wifi_sta_get", function(e) {
                0 == e.code && 1 == e.enabled && e.sta_wifi && 1 == e.sta_wifi.wifi_type && (i.disabled(),
                $('#wifi5gform input[name="issta"]').val(1))
            }),
            $('a[data-opt="modify-wifi5g"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("wifi_set") && void f.show()
            }),
            $('#wifi5gform input[name="nopwd"]').click(function() {
                this.checked ? $('#wifi5gform input[name="pwd"]').val("").attr("disabled", "disabled") : $('#wifi5gform input[name="pwd"]').removeAttr("disabled")
            }),
            $("#wifi5gform .btn-switch").click(function() {
                var e;
                $(this).data("type");
                $(this).hasClass("btn-switch-off") ? ($(this).attr("class", "btn-switch btn-switch-on"),
                $(this).find('input[type="hidden"]').val("1"),
                e = $('#wifi5gform input[name="nopwd"]:checked').size(),
                $("#wifi5gform").find('input[type="checkbox"], input[name="ssid"]').removeAttr("disabled"),
                e ? $('#wifi5gform input[name="pwd"]').attr("disabled", "disabled") : $('#wifi5gform input[name="pwd"]').removeAttr("disabled"),
                a.enabled(),
                t.enabled(),
                "0" == $('#wifi5gform input[name="issta"]').val() && i.enabled()) : ($(this).attr("class", "btn-switch btn-switch-off"),
                $(this).find('input[type="hidden"]').val("0"),
                $("#wifi5gform").find('input[type="checkbox"], input[name="ssid"], input[name="pwd"]').attr("disabled", "disabled"),
                a.disabled(),
                i.disabled(),
                t.disabled())
            }),
            $("#wifi5gform").bind("submit", function() {
                var e = $(this)
                  , a = parseInt(e.find('input[name="switch"]').val(), 10);
                if (1 == a) {
                    var t = $.trim(e.find('input[name="ssid"]').val())
                      , i = $.trim(e.find('input[name="pwd"]').val())
                      , n = e.find('input[name="nopwd"]:checked').size();
                    if (t.length <= 0)
                        return OrayBox.showMessage("请输入5G网络WiFi名称", !1),
                        e.find('input[name="ssid"]').focus(),
                        !1;
                    if (/\\s/.test(t))
                        return OrayBox.showMessage("WiFi名称不能含有空格", !1),
                        e.find('input[name="ssid"]').focus(),
                        !1;
                    if (!n) {
                        if (i.length <= 0)
                            return OrayBox.showMessage("请输入5G网络WiFi密码", !1),
                            e.find('input[name="pwd"]').focus(),
                            !1;
                        if (i.length < 8)
                            return OrayBox.showMessage("WiFi密码长度不能少于8位", !1),
                            e.find('input[name="pwd"]').focus(),
                            !1;
                        if ($.func.hasCnChar(i) || /\\'|"/.test(i))
                            return OrayBox.showMessage("密码不允许含有“'（单引号）”/“\\"(双引号)”/中文", !1),
                            e.find('input[name="pwd"]').focus(),
                            !1
                    }
                }
                switch ($(".intensity-5g-box input").val()) {
                case "节能模式":
                    var s = 1;
                    break;
                case "标准模式":
                    s = 2;
                    break;
                case "穿墙模式":
                    s = 3
                }
                var o, r = $(".channel-5g-box input").val();
                o = "自动" === r ? "auto" : r;
                var c = $(".vht-5g-box select").val()
                  , d = {
                    "switch": a,
                    ssid: $.trim(e.find('input[name="ssid"]').val()),
                    level: s,
                    channel: o,
                    htmode: c,
                    hidden: 0,
                    hide: 0,
                    is_restart_wifi: 1,
                    dev: "5G",
                    _api: "wifi_set"
                };
                e.find('input[name="nopwd"]:checked').size() ? d.pwd = "" : d.pwd = $.trim(e.find('input[name="pwd"]').val()),
                e.find('input[name="hidden"]:checked').size() && (d.hidden = 1,
                d.hide = 1);
                var p = e.find("button")
                  , l = setTimeout(function() {
                    var e;
                    $("#notify-win:visible").size() || (f.close(),
                    e = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请重新连接WIFI...</p>'],
                    setTimeout(function() {
                        OrayBox.showNotify(e.join(""), !0, function() {
                            null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                OrayBox.checkStatus(function(e) {
                                    e && 0 === e.code && (OrayBox.showMessage("5GWIFI设置成功", !0),
                                    OrayBox.showNotify("", !1, function() {
                                        setTimeout(function() {
                                            location.assign(location.href)
                                        }, 300)
                                    }))
                                })
                            }, 1e4))
                        })
                    }, 500))
                }, 15e3);
                return $.ajax({
                    url: e.attr("action"),
                    type: "post",
                    dataType: "json",
                    data: d,
                    beforeSend: function() {
                        OrayBox.showMessage("若修改WiFi名称或密码，请重新连接修改后的WiFi", !0, 0),
                        p && p.attr("disabled", !0)
                    },
                    complete: function() {
                        p && p.removeAttr("disabled")
                    },
                    success: function(e) {
                        var a, t;
                        4 == e.code ? (clearTimeout(l),
                        location.assign("/oraybox/login.html?err=sesstimeout")) : 0 == e.code ? (clearTimeout(l),
                        f.close(),
                        $("#notify-win:visible").size() || (a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(a.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("5GWIFI设置成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                location.assign(location.href)
                                            }, 3e3)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))) : e && e.code && (clearTimeout(l),
                        t = OrayBox.getMessage(e.code),
                        OrayBox.showMessage(t, !1, 0))
                    },
                    error: function(e) {
                        var a, t = e.responseText.split("\\n");
                        return "undefined" != typeof t[3] ? '{"code":0}' == (e = t[3]) && (clearTimeout(l),
                        f.close(),
                        $("#notify-win:visible").size() || (a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(a.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("5GWIFI设置成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                location.assign(location.href)
                                            }, 3e3)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))) : p && p.removeAttr("disabled"),
                        !1
                    }
                }),
                !1
            }),
            $("#5G-info").show(),
            OrayBox.resize()
        }
        function _initCloneMac(e) {
            var i = $("#mac-win").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a",
                    distance: 5
                }
            });
            "X6" == OrayBox.type || -1 !== $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"]) && 1 == e.x86_wan2_switch ? ($('a[data-opt="clone-wan1-mac"]').click(function() {
                if (!OrayBox.checkLimitPrivilege("wan_mac_set"))
                    return !1;
                var e = $(this).siblings('[data-name="wan1-mac"]').text();
                $("#mac-win").find('[data-name="mac"]').text(e || "-"),
                $("#macform").attr("action", "/cgi-bin/oraybox?_api=wan_mac_set"),
                i.show()
            }),
            $('a[data-opt="clone-wan2-mac"]').click(function() {
                if (!OrayBox.checkLimitPrivilege("wan2_mac_set"))
                    return !1;
                var e = $(this).siblings('[data-name="wan2-mac"]').text();
                $("#mac-win").find('[data-name="mac"]').text(e || "-"),
                $("#macform").attr("action", "/cgi-bin/oraybox?_api=wan2_mac_set"),
                i.show()
            })) : $('a[data-opt="clone-mac"]').click(function() {
                if (!OrayBox.checkLimitPrivilege("wan_mac_set"))
                    return !1;
                var e = $('[data-name="wan-mac"]').text();
                $("#mac-win").find('[data-name="mac"]').text(e || "-"),
                i.show()
            });
            var a = $("#macform")
              , t = a.find('button[type="submit"]');
            $("#reset-mac").click(function() {
                confirm("您确定要恢复出厂MAC地址吗？") && (a.find('input[name="type"]').val(1),
                a.find('input[name="mac"]').val("").attr("disabled", "disabled"),
                a.submit())
            }),
            a.bind("submit", function() {
                if (0 == parseInt(a.find('input[name="type"]').val(), 10)) {
                    var e = $.trim(a.find('input[name="mac"]').val());
                    if (e.length <= 0)
                        return OrayBox.showMessage("请输入MAC地址", !1),
                        a.find('input[name="mac"]').focus(),
                        !1;
                    if (!$.func.isMac(e))
                        return OrayBox.showMessage("请正确输入MAC地址", !1),
                        a.find('input[name="mac"]').focus(),
                        !1;
                    if (!$.func.isCloneMac(e))
                        return OrayBox.showMessage("MAC地址格式第一个字节的第二个数需为偶数", !1),
                        a.find('input[name="mac"]').focus(),
                        !1
                }
                return $.ajax({
                    url: a.attr("action"),
                    type: "post",
                    dataType: "json",
                    data: a.serializeArray(),
                    beforeSend: function() {
                        OrayBox.showMessage("正在提交数据...", !0, 0),
                        t && t.attr("disabled", !0)
                    },
                    complete: function() {
                        t && t.removeAttr("disabled")
                    },
                    success: function(e) {
                        var a, t;
                        4 == e.code ? location.assign("/oraybox/login.html?err=sesstimeout") : 0 == e.code ? (i.close(),
                        $("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                        a = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(a.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("MAC地址克隆成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                location.assign(location.href)
                                            }, 300)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))) : e && e.code && (t = OrayBox.getMessage(e.code),
                        OrayBox.showMessage(t, !1, 0))
                    },
                    error: function(e) {
                        return t && t.removeAttr("disabled"),
                        !1
                    }
                }),
                !1
            })
        }
        function _initReboot() {
            var e = $("#now-reboot")
              , n = $("#timing-reboot")
              , a = $("#reboot-window").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a"
                }
            })
              , t = n.find('select[data-name="type"]').change(function() {
                var e = n.find('[data-name="week-box"]');
                "week" === $(this).val() ? e.show() : e.hide()
            }).select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            t.disabled(),
            OrayBox.getTimeReboot(function(e) {
                0 == e.code && 1 == e.enabled && (n.find(".btn-switch").removeClass("btn-switch-off").addClass("btn-switch-on"),
                n.find('input[data-name="hour"], input[data-name="minute"]').removeAttr("disabled"),
                t.enabled(),
                n.find('input[data-name="switch"]').val("1"),
                n.find('input[data-name="hour"]').val(e.hour),
                n.find('input[data-name="minute"]').val(e.minute),
                0 < e.week && (t.select("week"),
                $("#week" + e.week).click()))
            }),
            n.find(".btn-switch").click(function() {
                $(this).hasClass("btn-switch-off") ? ($(this).attr("class", "btn-switch btn-switch-on"),
                $(this).find('input[data-name="switch"]').val("1"),
                n.find('input[data-name="hour"], input[data-name="minute"]').removeAttr("disabled"),
                t.enabled()) : ($(this).attr("class", "btn-switch btn-switch-off"),
                $(this).find('input[data-name="switch"]').val("0"),
                n.find('input[data-name="hour"], input[data-name="minute"]').attr("disabled", "disabled"),
                t.disabled())
            }),
            n.find('[data-name="select-week-box"] input').change(function() {
                $("#week" + $(this).val()).parent().addClass("current").siblings().removeClass("current")
            }),
            $('a[data-opt="now-reboot"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("reboot") && (e.show(),
                n.hide(),
                void a.show())
            }),
            $('a[data-opt="timing-reboot"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("timing_reboot_set") && (e.hide(),
                n.show(),
                void a.show())
            }),
            e.find("button").click(function() {
                return !!confirm("您确定要重启路由器吗？") && ($(this).attr("disabled", !0),
                void OrayBox.reboot(function(e) {
                    $(this).removeAttr("disabled"),
                    0 == e.code && ($("#reboot-window").hide(),
                    OrayBox.checkStatusV2(function() {
                        OrayBox.showMessage("路由器重启成功", !0),
                        setTimeout(function() {
                            location.assign("/oraybox/login.html")
                        }, 2e3)
                    }, !0, ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启，请勿断电</p>', '<p style="font-size:14px;">大约剩余<span data-name="timebox">120</span>秒</p>'].join(""), null, null, 2e4))
                }))
            }),
            n.find("button").click(function() {
                var e = n.find('input[data-name="switch"]').val()
                  , a = $.trim(n.find('input[data-name="hour"]').val())
                  , t = $.trim(n.find('input[data-name="minute"]').val())
                  , i = 0;
                return a.length <= 0 || !$.func.isInt(a) || a < 0 || 23 < a ? (OrayBox.showMessage("请输入正确的小时数", !1),
                n.find('input[data-name="hour"]').focus(),
                !1) : t.length <= 0 || !$.func.isInt(t) || t < 0 || 59 < t ? (OrayBox.showMessage("请输入正确的分钟数", !1),
                n.find('input[data-name="minute"]').focus(),
                !1) : ("week" === n.find('select[data-name="type"]').val() && (i = n.find('[data-name="select-week-box"] input:checked').val()),
                n.find("button").attr("disabled", "disabled"),
                void OrayBox.setTimeReboot(function() {
                    OrayBox.showMessage("设置路由器定时重启成功", !0),
                    setTimeout(function() {
                        location.assign(location.href)
                    }, 2e3)
                }, e, a, t, i))
            })
        }
        function _initReset() {
            var a = $("#reset-window").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a"
                }
            });
            $('a[data-opt="reset"]').click(function() {
                return !!OrayBox.checkLimitPrivilege("reset") && void a.show()
            }),
            a.dialog.body.find("button").click(function() {
                return !!confirm("您确定要恢复出厂设置吗？") && ($(this).attr("disabled", !0),
                void OrayBox.reset(function(e) {
                    $(this).removeAttr("disabled"),
                    0 == e.code && (a.dialog.container.hide(),
                    OrayBox.checkStatusV2(function(e) {
                        OrayBox.showMessage("路由器重置成功", !0),
                        setTimeout(function() {
                            location.assign("/oraybox/login.html")
                        }, 2e3)
                    }, !0, ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在恢复出厂设置，请勿断电</p>', '<p style="font-size:14px;">大约剩余<span data-name="timebox">120</span>秒</p>'].join(""), null, null, 2e4))
                }))
            })
        }
        _initLan(),
        _initDhcp(),
        OrayBox.init(function() {
            return OrayBox.initHeader(OrayBox.sn),
            -1 !== $.inArray(OrayBox.model, ["P1-2111", "P5-1210", "P5-2210", "ORG-900"]) ? location.assign("/oraybox/network.html") : ($('a[data-opt="show-sn"]').click(function() {
                var e, a = $('[data-name="sn"]').attr("data-sn");
                $(this).hasClass("encode") ? ($('[data-name="sn"]').html(a),
                $(this).removeClass("encode").addClass("decode").html("&#xe754;")) : (e = OrayBox.encodeSn(a),
                $('[data-name="sn"]').html(e),
                $(this).removeClass("decode").addClass("encode").html("&#xe753;"))
            }),
            store.getTemplate("ether_status", function(e) {
                return void 0 !== e && ($("#ether-status").html(e),
                void OrayBox.resize())
            }),
            -1 !== $.inArray(OrayBox.type, ["X5", "X6"]) && OrayBox.getWifi(_init5GInfo, "5G"),
            -1 !== $.inArray(OrayBox.model, ["X3Pro-1153", "ORH-180", "X4-1123G", "X4-2123G"]) && OrayBox.getWifi(_init5GInfo, "5G"),
            -1 !== $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300S-1151G", "R300A-1121G", "R300C-1121G", "X4-1123G", "X4-2123G", "E3-1141", "X4C-1141G", "X4C-2131G"]) ? ($("#base-imei-info").show(),
            _getImei()) : $("#base-info").show(),
            _getDeviceInfo(),
            OrayBox.resize(),
            void OrayBox.initLan())
        }),
        OrayBox.updateFooterTime(),
        _initBackup(),
        _initReboot(),
        _initReset()
    }
    ,
    scope.OrayBox.getUsb3GConnect = function(e) {
        OrayBox.request("usb_3g_get", {}, e)
    }
    ,
    scope.OrayBox.getKp4gInfo = function(e) {
        OrayBox.request("kp4g_get", {}, e)
    }
    ,
    scope.OrayBox.getMtu = function(e, a) {
        OrayBox.request("mtu_get", {
            "interface": a
        }, e)
    }
    ,
    scope.OrayBox.reboot = function(e) {
        OrayBox.request("reboot", {}, e)
    }
    ,
    scope.OrayBox.getImei = function(e) {
        OrayBox.request("imei_get", {}, e)
    }
    ,
    scope.OrayBox.getTimeReboot = function(e) {
        OrayBox.request("timing_reboot_get", {}, e)
    }
    ,
    scope.OrayBox.setTimeReboot = function(e, a, t, i, n) {
        var s = {
            enabled: a,
            hour: t,
            minute: i
        };
        n && 0 < n && (s.week = n),
        OrayBox.request("timing_reboot_set", s, e, "POST")
    }
    ,
    scope.OrayBox.reset = function(e) {
        OrayBox.request("reset", {}, e)
    }
    ,
    scope.OrayBox.getTotalInfo = function(e, a) {
        OrayBox.request("total_info", {
            dev: a
        }, e)
    }
    ,
    scope.OrayBox.initLan = function() {
        OrayBox.initHeader(OrayBox.sn),
        function() {
            var e;
            window.sessionStorage && (e = window.sessionStorage.getItem("_lan_form_data"));
            e ? ($("#ip").val(JSON.parse(e).ip),
            $("#mask").val(JSON.parse(e).mask)) : $.getJSON("/cgi-bin/oraybox?_api=lan_get", function(e) {
                4 == e.code && location.assign("/oraybox/login.html?err=sesstimeout"),
                0 == e.code && ($("#ip").val(e.ip),
                $("#mask").val(e.mask))
            });
            $("#lan-form").show(),
            OrayBox.resize()
        }(),
        $("#lan-form").bind("submit", function() {
            if (!OrayBox.checkLimitPrivilege("lan_set"))
                return !1;
            var t = $("#ip").val()
              , e = $("#mask").val();
            if (!$.func.isIp(t))
                return OrayBox.showMessage("请输入正确的路由器IP地址", !1, 0),
                $("#ip").focus(),
                !1;
            if (!$.func.isIp(e))
                return OrayBox.showMessage("请输入正确的子网掩码", !1, 0),
                $("#mask").focus(),
                !1;
            var a = $("#lan-form")
              , i = $("#submit-form")
              , n = setTimeout(function() {
                $("#notify-win:visible").size() || (lanWin.close(),
                OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在重启网络，请耐心等候</p>'].join(""), !0, function() {
                    var e;
                    null == OrayBox.intervalTmeout && (e = 0,
                    OrayBox.intervalTmeout = setInterval(function() {
                        30 < e ? OrayBox.showNotify("", !1, function() {
                            OrayBox.showMessage("局域网设置失败", !1),
                            clearInterval(OrayBox.intervalTmeout)
                        }) : OrayBox.checkDeviceSN(t),
                        e++
                    }, 1e4))
                }))
            }, 15e3);
            return $.ajax({
                url: a.attr("action"),
                type: "get",
                dataType: "json",
                data: a.serializeArray(),
                beforeSend: function() {
                    OrayBox.showMessage("正在提交数据...", !0, 0),
                    i && i.attr("disabled", !0)
                },
                complete: function() {
                    i && i.removeAttr("disabled")
                },
                success: function(e) {
                    var a;
                    4 == e.code ? (clearTimeout(n),
                    location.assign("/oraybox/login.html?err=sesstimeout")) : 0 == e.code ? ($("#lan-win").hide(),
                    clearTimeout(n),
                    $("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                    OrayBox.showNotify(['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">正在重启网络，请耐心等候</p>'].join(""), !0, function() {
                        var e;
                        null == OrayBox.intervalTmeout && (e = 0,
                        OrayBox.intervalTmeout = setInterval(function() {
                            30 < e ? OrayBox.showNotify("", !1, function() {
                                OrayBox.showMessage("局域网设置失败", !1),
                                clearInterval(OrayBox.intervalTmeout)
                            }) : OrayBox.checkDeviceSN(t),
                            e++
                        }, 1e4))
                    }))) : e && e.code && (clearTimeout(n),
                    a = OrayBox.getMessage(e.code),
                    OrayBox.showMessage(a, !1, 0))
                },
                error: function(e) {
                    return i && i.removeAttr("disabled"),
                    !1
                }
            }),
            !1
        }),
        $("#submit-form").click(function() {
            return $("#lan-form").submit(),
            !1
        }),
        window.onbeforeunload = function() {
            !function() {
                {
                    var e, a, t, i;
                    window.sessionStorage && (e = window.sessionStorage,
                    a = $("#ip").val(),
                    t = $("#mask").val(),
                    i = {
                        ip: a,
                        mask: t
                    },
                    e.setItem("_lan_form_data", JSON.stringify(i)))
                }
            }()
        }
    }
}(window),
function(m) {
    m.templateName = "ether_status",
    m.templateExport = "ether_status",
    m.data = {},
    m.OrayBox.initEtherStatus = function() {
        if (-1 !== $.inArray(OrayBox.model, ["X1-1111", "X1-2111", "ORH-100", "X3-D1509", "X6-1293P", "X6-2293P", "X6-3293P", "E3-1141"]))
            return !1;
        var s = -1 === $.inArray(OrayBox.model, ["A500", "V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100", "X4-1123G", "X4-2123G", "X5-6256"])
          , o = -1 !== $.inArray(OrayBox.model, ["V1000", "V2000-1260", "V3000-1460", "G100Pro-1240", "G100Pro-2240", "G300Pro-1440", "ORG-1100"])
          , r = -1 !== $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300A-1121G", "R300C-1121G", "X4-1123G", "X4-2123G"])
          , c = null;
        function d() {
            var a = this
              , t = a.$
              , e = t("#wan2lan-form")
              , i = e.find('select[name="wan2lan"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            })
              , n = t("#wan2lan-window").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a"
                }
            });
            e.submit(function() {
                return OrayBox.showMessage("正在设置网口设置，请稍候...", !0),
                OrayBox.setWan2lan(function(e) {
                    return 0 != e.code ? OrayBox.showMessage("设置网口设置失败", !1) : (OrayBox.showMessage("", !0),
                    void OrayBox.restartService(function() {
                        t("#wan2lan-window").hide(),
                        OrayBox.checkStatusV2(function() {
                            OrayBox.showMessage("设置网口设置成功", !0),
                            OrayBox.showNotify("", !1),
                            setTimeout(function() {
                                a.location.reload()
                            }, 2e3)
                        }, !0)
                    }, "network"))
                }, i.val()),
                !1
            }),
            OrayBox.getWan2lan(function(e) {
                1 == e["switch"] ? i.select(1) : i.select(0)
            }),
            t('a[data-opt="show-wan2lan"]').live("click", function() {
                return !!OrayBox.checkLimitPrivilege("ether_status_set") && void n.show()
            })
        }
        function p() {
            var t = this
              , i = t.$
              , n = i("#wan2-form")
              , s = i("#wan2-window").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a"
                }
            })
              , o = n.find('select[name="lan"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            });
            n.find("label.choice-item").live("click", function() {
                i(this).addClass("current").siblings().removeClass("current"),
                n.find("label.choice-item:eq(0)").hasClass("current") ? (o.disabled(),
                i("#wan2-window .wan2-box").hide()) : (o.enabled(),
                i("#wan2-window .wan2-box").show())
            }),
            i('a[data-opt="show-wan2"]').live("click", function() {
                n.find("label.choice-item").removeClass("current"),
                OrayBox.getX86Wan2(function(e) {
                    1 == e["switch"] ? (n.find("label.choice-item:eq(1)").addClass("current"),
                    n.find("label.choice-item:eq(1) input").prop("checked", "checked"),
                    o.enabled(),
                    o.select(e.wan2),
                    i("#wan2-window .wan2-box").show()) : (n.find("label.choice-item:eq(0)").addClass("current"),
                    n.find("label.choice-item:eq(0) input").prop("checked", "checked"),
                    o.disabled(),
                    i("#wan2-window .wan2-box").hide()),
                    s.show()
                })
            }),
            n.submit(function() {
                i(this).find("button").attr("disabled", !0),
                OrayBox.showMessage("正在设置X86双WAN，请稍候...", !0);
                var e = n.find("label.choice-item:eq(1)").hasClass("current") ? 1 : 0
                  , a = e ? o.val() : "";
                return clearInterval(c),
                OrayBox.setX86Wan2(function(e) {
                    0 == e.code && (OrayBox.showMessage("WAN口设置成功，正在重启网络，请稍候...", !0),
                    OrayBox.restartService(function() {
                        var e;
                        s.close(),
                        i("#notify-win:visible").size() || (OrayBox.showMessage("", !0),
                        e = ['<p style="padding:10px 0 15px 0;"><img src="./images/loading.gif" border="0" width="100" height="100" /></p>', '<p style="font-size:18px;">路由器正在重启网络，请耐心等候...</p>'],
                        setTimeout(function() {
                            OrayBox.showNotify(e.join(""), !0, function() {
                                null == OrayBox.intervalTmeout && (OrayBox.intervalTmeout = setInterval(function() {
                                    OrayBox.checkStatus(function(e) {
                                        e && 0 === e.code && (OrayBox.showMessage("WAN口设置成功", !0),
                                        OrayBox.showNotify("", !1, function() {
                                            setTimeout(function() {
                                                t.location.assign(t.location.href)
                                            }, 2e3)
                                        }))
                                    })
                                }, 1e4))
                            })
                        }, 500))
                    }, "network"))
                }, e, a),
                !1
            })
        }
        function l() {
            var i = this
              , n = i.$
              , s = n("#ether-form")
              , e = n("#ether-window").window({
                closeCls: "close",
                draggable: !0,
                drag: {
                    handle: ".window-header",
                    not: ":input,img,a"
                }
            })
              , o = (s.find('select[name="ether"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }),
            s.find('select[name="mode"]').select({
                inputClass: "fm-text",
                searchable: !1,
                inputable: !1
            }))
              , a = function() {
                var e = s.find('select[name="ether"]').val()
                  , a = m.data[e].speed
                  , t = m.data[e].mode;
                return o.select(0),
                "10M" == a && "half" == t ? (o.select(1),
                !1) : "10M" == a && "full" == t ? (o.select(2),
                !1) : "100M" == a && "half" == t ? (o.select(3),
                !1) : "100M" == a && "full" == t ? (o.select(4),
                !1) : void 0
            };
            s.find('select[name="ether"]').change(function() {
                a()
            }),
            s.submit(function() {
                n(this).find("button").attr("disabled", !0),
                OrayBox.showMessage("正在设置网络模式请稍等...", !0);
                var e = n(this).find('select[name="ether"]').val()
                  , a = null
                  , t = null;
                switch (n(this).find('select[name="mode"]').val()) {
                case "1":
                    a = 10,
                    t = "half";
                    break;
                case "2":
                    a = 10,
                    t = "full";
                    break;
                case "3":
                    a = 100,
                    t = "half";
                    break;
                case "4":
                    a = 100,
                    t = "full"
                }
                return OrayBox.setEtherStatus(function(e) {
                    0 == e.code && (OrayBox.showMessage("设置网络模式成功", !0),
                    setTimeout(function() {
                        i.location.assign(i.location.href)
                    }, 2e3))
                }, e, a, t),
                !1
            }),
            n('a[data-opt="show-ether"]').live("click", function() {
                return !!OrayBox.checkLimitPrivilege("ether_status_set") && (a(),
                void e.show())
            })
        }
        function f(a) {
            o ? OrayBox.getX86Wan2(function(e) {
                t(a, e)
            }) : t(a)
        }
        function t(s, o) {
            var r = function() {
                var e = [];
                switch (OrayBox.model) {
                case "X1-1111":
                case "X1-2111":
                case "ORH-100":
                    return !1;
                case "V1000":
                case "V2000-1260":
                case "V3000-1460":
                case "G100Pro-1240":
                case "G100Pro-2240":
                case "G300Pro-1440":
                case "ORG-1100":
                    e = [{
                        ether: "wan1",
                        name: "WAN",
                        index: "WAN",
                        classname: "f12"
                    }, {
                        ether: "lan1",
                        name: "LAN1",
                        index: "ETH1",
                        classname: "right-item f12"
                    }, {
                        ether: "lan2",
                        name: "LAN2",
                        index: "ETH2",
                        classname: "right-item f12"
                    }, {
                        ether: "lan3",
                        name: "LAN3",
                        index: "ETH3",
                        classname: "right-item f12"
                    }, {
                        ether: "lan4",
                        name: "LAN4",
                        index: "ETH4",
                        classname: "right-item f12"
                    }, {
                        ether: "lan5",
                        name: "LAN5",
                        index: "ETH5",
                        classname: "right-item f12"
                    }];
                    break;
                case "X3-D1509":
                    break;
                case "X3-D1509A":
                case "X3-2151":
                case "X3-3251":
                case "X3Pro-1153":
                case "E3-1141":
                case "X5-1253":
                case "X5-2253":
                case "X5-3353":
                case "X5-4253":
                case "X5-5255":
                case "X5-6256":
                case "G5-1250":
                case "G5-2250":
                case "A500":
                case "ORH-180":
                case "ORH-260":
                case "ORG-220":
                    e = [{
                        ether: "lan1",
                        name: "LAN4",
                        index: "4"
                    }, {
                        ether: "lan2",
                        name: "LAN3",
                        index: "3"
                    }, {
                        ether: "lan3",
                        name: "LAN2",
                        index: "2"
                    }, {
                        ether: "lan4",
                        name: "LAN1",
                        index: "1"
                    }, {
                        ether: "wan1",
                        name: "WAN",
                        index: "WAN",
                        classname: "right-item f12"
                    }];
                    break;
                case "R300S-1151G":
                    e = [{
                        ether: "wan1",
                        name: "WAN",
                        index: "WAN"
                    }, {
                        ether: "lan1",
                        name: "LAN1",
                        index: "1",
                        classname: "right-item f12"
                    }, {
                        ether: "lan2",
                        name: "LAN2",
                        index: "2"
                    }, {
                        ether: "lan3",
                        name: "LAN3",
                        index: "3"
                    }, {
                        ether: "lan4",
                        name: "LAN4",
                        index: "4"
                    }];
                    break;
                case "X6-1293P":
                case "X6-2293P":
                case "X6-3293P":
                    return !1;
                case "R300-1121G":
                case "R300-2121G":
                case "R300A-1121G":
                case "R300C-1121G":
                case "X4-1123G":
                case "X4-2123G":
                    e = [{
                        ether: "wol1",
                        index: "WAN/LAN",
                        name: "WAN/LAN",
                        classname: "f12"
                    }, {
                        ether: "lan1",
                        index: "LAN",
                        name: "LAN",
                        classname: "right-item f12"
                    }];
                    break;
                case "X4C-1141G":
                case "X4C-2131G":
                    e = [{
                        ether: "lan1",
                        name: "LAN2",
                        index: "2"
                    }, {
                        ether: "lan2",
                        name: "LAN1",
                        index: "1"
                    }, {
                        ether: "wan1",
                        index: "WAN",
                        name: "WAN",
                        classname: "right-item f12"
                    }];
                    break;
                case "GBox-1230":
                    e = [{
                        ether: "lan1",
                        name: "LAN1",
                        index: "1"
                    }, {
                        ether: "lan2",
                        name: "LAN2",
                        index: "2"
                    }, {
                        ether: "wan1",
                        index: "WAN",
                        name: "WAN",
                        classname: "right-item f12"
                    }]
                }
                return e
            }();
            r && OrayBox.getEtherStatus(function(e) {
                if (e && 0 == e.code) {
                    var a, t = e.ether_status, i = [];
                    for (a in r) {
                        var n = r[a].ether;
                        n && (t.lan && t.lan[n] ? i.push($.extend(r[a], {
                            link: t.lan[n].link,
                            speed: "1000Mbps" === t.lan[n].speed ? "1G" : t.lan[n].speed.replace("bps", ""),
                            mode: t.lan[n].mode,
                            iswan: o && 1 == o["switch"] && o.wan2 === n
                        })) : t.wan && t.wan[n] && i.push($.extend(r[a], {
                            link: t.wan[n].link,
                            speed: "1000Mbps" === t.wan[n].speed ? "1G" : t.wan[n].speed.replace("bps", ""),
                            mode: t.wan[n].mode,
                            iswan: !0
                        })))
                    }
                    if (-1 !== $.inArray(OrayBox.model, ["R300-1121G", "R300-2121G", "R300A-1121G", "R300C-1121G", "X4-1123G", "X4-2123G"]))
                        return OrayBox.getWan2lan(function(e) {
                            for (var a = 0, t = i.length; a < t; a++)
                                "wol1" === i[a].ether && (i[a].iswan = 1 != e["switch"]);
                            "function" == typeof s && s(i)
                        });
                    "function" == typeof s && s(i)
                }
            })
        }
        function u(e) {
            for (var a in e)
                m.data[e[a].ether] = {
                    speed: e[a].speed,
                    mode: e[a].mode
                }
        }
        juicer.set("cache", !1),
        f(function(e) {
            console.log(window.$("#ether-status-template").context.URL)
            var a = juicer($("#ether-status-template").html(), {
                items: e,
                hasset: s,
                haswan2lan: r,
                haswan2: o
            })
              , t = s ? juicer($("#ether-window-template").html(), {
                items: e
            }) : ""
              , i = o ? juicer($("#wan2-window-template").html(), {
                items: e
            }) : ""
              , n = r ? juicer($("#wan2lan-template").html(), {
                items: e
            }) : "";
            store.setData(m.templateExport, a + t + i + n),
            store.templateStatus[m.templateName] = 2,
            s && store.bind(l),
            o && store.bind(p),
            r && store.bind(d),
            u(e),
            c = setInterval(function() {
                f(function(e) {
                    a = juicer($("#ether-status-template").html(), {
                        items: e,
                        hasset: s,
                        haswan2lan: r,
                        haswan2: o
                    }),
                    store.setData(m.templateExport, a),
                    u(e)
                })
            }, 5e3),
            OrayBox.resize()
        })
    }
    ,
    m.OrayBox.getEtherStatus = function(e) {
        OrayBox.request("ether_status_get", [], e, null, null, null, null, 0)
    }
    ,
    m.OrayBox.setEtherStatus = function(e, a, t, i) {
        var n = {
            port: a
        };
        null != t && (n.speed = t),
        null != i && (n.mode = i),
        OrayBox.request("ether_status_set", n, e, "POST")
    }
    ,
    m.OrayBox.setX86Wan2 = function(e, a, t) {
        var i = {
            "switch": a
        };
        1 == a && (i.lan = t),
        OrayBox.request("x86_wan2_set", i, e, "POST")
    }
    ,
    m.OrayBox.setWan2lan = function(e, a) {
        OrayBox.request("wan_to_lan", {
            "switch": a
        }, e, "POST")
    }
}(window);
`;
