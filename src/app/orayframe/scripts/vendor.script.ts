export const theVendorScript = `
!function(b, M) {
    function c(t) {
        return rt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    function m(t) {
        var e, i, n;
        return He[t] || (e = it.body,
        n = (i = rt("<" + t + ">").appendTo(e)).css("display"),
        i.remove(),
        "none" !== n && "" !== n || (Re || ((Re = it.createElement("iframe")).frameBorder = Re.width = Re.height = 0),
        e.appendChild(Re),
        ze && Re.createElement || ((ze = (Re.contentWindow || Re.contentDocument).document).write((rt.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
        ze.close()),
        i = ze.createElement(t),
        ze.body.appendChild(i),
        n = rt.css(i, "display"),
        e.removeChild(Re)),
        He[t] = n),
        He[t]
    }
    function a(t, e) {
        var i = {};
        return rt.each(Xe.concat.apply([], Xe.slice(0, e)), function() {
            i[this] = t
        }),
        i
    }
    function t() {
        Fe = M
    }
    function l() {
        return setTimeout(t, 0),
        Fe = rt.now()
    }
    function e() {
        try {
            return new b.XMLHttpRequest
        } catch (M) {}
    }
    function i(t, e) {
        var i, n, s = rt.ajaxSettings.flatOptions || {};
        for (i in e)
            e[i] !== M && ((s[i] ? t : n = n || {})[i] = e[i]);
        n && rt.extend(!0, t, n)
    }
    function S(t, e, i, n, s, r) {
        (r = r || {})[s = s || e.dataTypes[0]] = !0;
        for (var o, a = t[s], l = 0, h = a ? a.length : 0, c = t === Ae; l < h && (c || !o); l++)
            "string" == typeof (o = a[l](e, i, n)) && (o = !c || r[o] ? M : (e.dataTypes.unshift(o),
            S(t, e, i, n, o, r)));
        return !c && o || r["*"] || (o = S(t, e, i, n, "*", r)),
        o
    }
    function n(a) {
        return function(t, e) {
            if ("string" != typeof t && (e = t,
            t = "*"),
            rt.isFunction(e))
                for (var i, n, s = t.toLowerCase().split(Te), r = 0, o = s.length; r < o; r++)
                    i = s[r],
                    (n = /^\\+/.test(i)) && (i = i.substr(1) || "*"),
                    (a[i] = a[i] || [])[n ? "unshift" : "push"](e)
        }
    }
    function s(t, e, i) {
        var n = "width" === e ? t.offsetWidth : t.offsetHeight
          , s = "width" === e ? 1 : 0;
        if (0 < n) {
            if ("border" !== i)
                for (; s < 4; s += 2)
                    i || (n -= parseFloat(rt.css(t, "padding" + he[s])) || 0),
                    "margin" === i ? n += parseFloat(rt.css(t, i + he[s])) || 0 : n -= parseFloat(rt.css(t, "border" + he[s] + "Width")) || 0;
            return n + "px"
        }
        if (((n = Jt(t, e)) < 0 || null == n) && (n = t.style[e]),
        re.test(n))
            return n;
        if (n = parseFloat(n) || 0,
        i)
            for (; s < 4; s += 2)
                n += parseFloat(rt.css(t, "padding" + he[s])) || 0,
                "padding" !== i && (n += parseFloat(rt.css(t, "border" + he[s] + "Width")) || 0),
                "margin" === i && (n += parseFloat(rt.css(t, i + he[s])) || 0);
        return n + "px"
    }
    function w(t) {
        var e = (t.nodeName || "").toLowerCase();
        "input" === e ? r(t) : "script" !== e && "undefined" != typeof t.getElementsByTagName && rt.grep(t.getElementsByTagName("input"), r)
    }
    function r(t) {
        "checkbox" !== t.type && "radio" !== t.type || (t.defaultChecked = t.checked)
    }
    function h(t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll("*") : []
    }
    function d(t, e) {
        var i;
        1 === e.nodeType && (e.clearAttributes && e.clearAttributes(),
        e.mergeAttributes && e.mergeAttributes(t),
        "object" === (i = e.nodeName.toLowerCase()) ? e.outerHTML = t.outerHTML : "input" !== i || "checkbox" !== t.type && "radio" !== t.type ? "option" === i ? e.selected = t.defaultSelected : "input" === i || "textarea" === i ? e.defaultValue = t.defaultValue : "script" === i && e.text !== t.text && (e.text = t.text) : (t.checked && (e.defaultChecked = e.checked = t.checked),
        e.value !== t.value && (e.value = t.value)),
        e.removeAttribute(rt.expando),
        e.removeAttribute("_submit_attached"),
        e.removeAttribute("_change_attached"))
    }
    function u(t, e) {
        if (1 === e.nodeType && rt.hasData(t)) {
            var i, n, s, r = rt._data(t), o = rt._data(e, r), a = r.events;
            if (a)
                for (i in delete o.handle,
                o.events = {},
                a)
                    for (n = 0,
                    s = a[i].length; n < s; n++)
                        rt.event.add(e, i, a[i][n]);
            o.data && (o.data = rt.extend({}, o.data))
        }
    }
    function k(t) {
        var e = zt.split("|")
          , i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length; )
                i.createElement(e.pop());
        return i
    }
    function o(t, i, n) {
        if (i = i || 0,
        rt.isFunction(i))
            return rt.grep(t, function(t, e) {
                return !!i.call(t, e, t) === n
            });
        if (i.nodeType)
            return rt.grep(t, function(t, e) {
                return t === i === n
            });
        if ("string" == typeof i) {
            var e = rt.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (Dt.test(i))
                return rt.filter(i, e, !n);
            i = rt.filter(i, e)
        }
        return rt.grep(t, function(t, e) {
            return 0 <= rt.inArray(t, i) === n
        })
    }
    function p(t) {
        return !t || !t.parentNode || 11 === t.parentNode.nodeType
    }
    function f() {
        return !0
    }
    function g() {
        return !1
    }
    function y(t, e, i) {
        var n = e + "defer"
          , s = e + "queue"
          , r = e + "mark"
          , o = rt._data(t, n);
        !o || "queue" !== i && rt._data(t, s) || "mark" !== i && rt._data(t, r) || setTimeout(function() {
            rt._data(t, s) || rt._data(t, r) || (rt.removeData(t, n, !0),
            o.fire())
        }, 0)
    }
    function v(t) {
        for (var e in t)
            if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function x(t, e, i) {
        if (i === M && 1 === t.nodeType) {
            var n = "data-" + e.replace(ct, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : rt.isNumeric(i) ? +i : ht.test(i) ? rt.parseJSON(i) : i)
                } catch (ot) {}
                rt.data(t, e, i)
            } else
                i = M
        }
        return i
    }
    var T, C, A, L, P, O, E, N, D, _, I, R, z, B, F, H, j, W, X, Y, G, $, q, V, U, K, Z, J, Q, tt, et, it = b.document, nt = b.navigator, st = b.location, rt = (P = function(t, e) {
        return new P.fn.init(t,e,T)
    }
    ,
    O = b.jQuery,
    E = b.$,
    N = /^(?:[^#<]*(<[\\w\\W]+>)[^>]*$|#([\\w\\-]*)$)/,
    D = /\\S/,
    _ = /^\\s+/,
    I = /\\s+$/,
    R = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>)?$/,
    z = /^[\\],:{}\\s]*$/,
    B = /\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
    F = /"[^"\\\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,
    H = /(?:^|:|,)(?:\\s*\\[)+/g,
    j = /(webkit)[ \\/]([\\w.]+)/,
    W = /(opera)(?:.*version)?[ \\/]([\\w.]+)/,
    X = /(msie) ([\\w.]+)/,
    Y = /(mozilla)(?:.*? rv:([\\w.]+))?/,
    G = /-([a-z]|[0-9])/gi,
    $ = /^-ms-/,
    q = function(t, e) {
        return (e + "").toUpperCase()
    }
    ,
    V = nt.userAgent,
    U = Object.prototype.toString,
    K = Object.prototype.hasOwnProperty,
    Z = Array.prototype.push,
    J = Array.prototype.slice,
    Q = String.prototype.trim,
    tt = Array.prototype.indexOf,
    et = {},
    P.fn = P.prototype = {
        constructor: P,
        init: function(t, e, i) {
            var n, s, r, o;
            if (!t)
                return this;
            if (t.nodeType)
                return this.context = this[0] = t,
                this.length = 1,
                this;
            if ("body" === t && !e && it.body)
                return this.context = it,
                this[0] = it.body,
                this.selector = t,
                this.length = 1,
                this;
            if ("string" != typeof t)
                return P.isFunction(t) ? i.ready(t) : (t.selector !== M && (this.selector = t.selector,
                this.context = t.context),
                P.makeArray(t, this));
            if (!(n = "<" !== t.charAt(0) || ">" !== t.charAt(t.length - 1) || t.length < 3 ? N.exec(t) : [null, t, null]) || !n[1] && e)
                return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1])
                return o = (e = e instanceof P ? e[0] : e) ? e.ownerDocument || e : it,
                (r = R.exec(t)) ? P.isPlainObject(e) ? (t = [it.createElement(r[1])],
                P.fn.attr.call(t, e, !0)) : t = [o.createElement(r[1])] : t = ((r = P.buildFragment([n[1]], [o])).cacheable ? P.clone(r.fragment) : r.fragment).childNodes,
                P.merge(this, t);
            if ((s = it.getElementById(n[2])) && s.parentNode) {
                if (s.id !== n[2])
                    return i.find(t);
                this.length = 1,
                this[0] = s
            }
            return this.context = it,
            this.selector = t,
            this
        },
        selector: "",
        jquery: "3.3.0",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return J.call(this, 0)
        },
        get: function(t) {
            return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
        },
        pushStack: function(t, e, i) {
            var n = this.constructor();
            return P.isArray(t) ? Z.apply(n, t) : P.merge(n, t),
            n.prevObject = this,
            n.context = this.context,
            "find" === e ? n.selector = this.selector + (this.selector ? " " : "") + i : e && (n.selector = this.selector + "." + e + "(" + i + ")"),
            n
        },
        each: function(t, e) {
            return P.each(this, t, e)
        },
        ready: function(t) {
            return P.bindReady(),
            A.add(t),
            this
        },
        eq: function(t) {
            return -1 === (t = +t) ? this.slice(t) : this.slice(t, t + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments), "slice", J.call(arguments).join(","))
        },
        map: function(i) {
            return this.pushStack(P.map(this, function(t, e) {
                return i.call(t, e, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: [].sort,
        splice: [].splice
    },
    P.fn.init.prototype = P.fn,
    P.extend = P.fn.extend = function() {
        var t, e, i, n, s, r, o = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof o && (h = o,
        o = arguments[1] || {},
        a = 2),
        "object" == typeof o || P.isFunction(o) || (o = {}),
        l === a && (o = this,
        --a); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    i = o[e],
                    o !== (n = t[e]) && (h && n && (P.isPlainObject(n) || (s = P.isArray(n))) ? (r = s ? (s = !1,
                    i && P.isArray(i) ? i : []) : i && P.isPlainObject(i) ? i : {},
                    o[e] = P.extend(h, r, n)) : n !== M && (o[e] = n));
        return o
    }
    ,
    P.extend({
        noConflict: function(t) {
            return b.$ === P && (b.$ = E),
            t && b.jQuery === P && (b.jQuery = O),
            P
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? P.readyWait++ : P.ready(!0)
        },
        ready: function(t) {
            if (!0 === t && !--P.readyWait || !0 !== t && !P.isReady) {
                if (!it.body)
                    return setTimeout(P.ready, 1);
                if ((P.isReady = !0) !== t && 0 < --P.readyWait)
                    return;
                A.fireWith(it, [P]),
                P.fn.trigger && P(it).trigger("ready").off("ready")
            }
        },
        bindReady: function() {
            if (!A) {
                if (A = P.Callbacks("once memory"),
                "complete" === it.readyState)
                    return setTimeout(P.ready, 1);
                if (it.addEventListener)
                    it.addEventListener("DOMContentLoaded", L, !1),
                    b.addEventListener("load", P.ready, !1);
                else if (it.attachEvent) {
                    it.attachEvent("onreadystatechange", L),
                    b.attachEvent("onload", P.ready);
                    var t = !1;
                    try {
                        t = null == b.frameElement
                    } catch (nt) {}
                    it.documentElement.doScroll && t && at()
                }
            }
        },
        isFunction: function(t) {
            return "function" === P.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === P.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : et[U.call(t)] || "object"
        },
        isPlainObject: function(t) {
            if (!t || "object" !== P.type(t) || t.nodeType || P.isWindow(t))
                return !1;
            try {
                if (t.constructor && !K.call(t, "constructor") && !K.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (it) {
                return !1
            }
            for (var e in t)
                ;
            return e === M || K.call(t, e)
        },
        isEmptyObject: function(t) {
            for (var e in t)
                return !1;
            return !0
        },
        error: function(t) {
            throw new Error(t)
        },
        parseJSON: function(t) {
            return "string" == typeof t && t ? (t = P.trim(t),
            b.JSON && b.JSON.parse ? b.JSON.parse(t) : z.test(t.replace(B, "@").replace(F, "]").replace(H, "")) ? new Function("return " + t)() : void P.error("Invalid JSON: " + t)) : null
        },
        parseXML: function(t) {
            if ("string" != typeof t || !t)
                return null;
            var e;
            try {
                b.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                e.loadXML(t))
            } catch (E) {
                e = M
            }
            return e && e.documentElement && !e.getElementsByTagName("parsererror").length || P.error("Invalid XML: " + t),
            e
        },
        noop: function() {},
        globalEval: function(t) {
            t && D.test(t) && (b.execScript || function(t) {
                b.eval.call(b, t)
            }
            )(t)
        },
        camelCase: function(t) {
            return t.replace($, "ms-").replace(G, q)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase()
        },
        each: function(t, e, i) {
            var n, s = 0, r = t.length, o = r === M || P.isFunction(t);
            if (i)
                if (o) {
                    for (n in t)
                        if (!1 === e.apply(t[n], i))
                            break
                } else
                    for (; s < r && !1 !== e.apply(t[s++], i); )
                        ;
            else if (o) {
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n]))
                        break
            } else
                for (; s < r && !1 !== e.call(t[s], s, t[s++]); )
                    ;
            return t
        },
        trim: Q ? function(t) {
            return null == t ? "" : Q.call(t)
        }
        : function(t) {
            return null == t ? "" : (t + "").replace(_, "").replace(I, "")
        }
        ,
        makeArray: function(t, e) {
            var i, n = e || [];
            return null != t && (i = P.type(t),
            null == t.length || "string" === i || "function" === i || "regexp" === i || P.isWindow(t) ? Z.call(n, t) : P.merge(n, t)),
            n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (tt)
                    return tt.call(e, t, i);
                for (n = e.length,
                i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in e && e[i] === t)
                        return i
            }
            return -1
        },
        merge: function(t, e) {
            var i = t.length
              , n = 0;
            if ("number" == typeof e.length)
                for (var s = e.length; n < s; n++)
                    t[i++] = e[n];
            else
                for (; e[n] !== M; )
                    t[i++] = e[n++];
            return t.length = i,
            t
        },
        grep: function(t, e, i) {
            var n = [];
            i = !!i;
            for (var s = 0, r = t.length; s < r; s++)
                i !== !!e(t[s], s) && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s, r = [], o = 0, a = t.length;
            if (t instanceof P || a !== M && "number" == typeof a && (0 < a && t[0] && t[a - 1] || 0 === a || P.isArray(t)))
                for (; o < a; o++)
                    null != (n = e(t[o], o, i)) && (r[r.length] = n);
            else
                for (s in t)
                    null != (n = e(t[s], s, i)) && (r[r.length] = n);
            return r.concat.apply([], r)
        },
        guid: 1,
        proxy: function(t, e) {
            var i;
            if ("string" == typeof e && (i = t[e],
            e = t,
            t = i),
            !P.isFunction(t))
                return M;
            var n = J.call(arguments, 2)
              , s = function() {
                return t.apply(e, n.concat(J.call(arguments)))
            };
            return s.guid = t.guid = t.guid || s.guid || P.guid++,
            s
        },
        access: function(t, e, i, n, s, r, o) {
            var a, l = null == i, h = 0, c = t.length;
            if (i && "object" == typeof i) {
                for (h in i)
                    P.access(t, e, h, i[h], 1, r, n);
                s = 1
            } else if (n !== M) {
                if (a = o === M && P.isFunction(n),
                l && (e = a ? (a = e,
                function(t, e, i) {
                    return a.call(P(t), i)
                }
                ) : (e.call(t, n),
                null)),
                e)
                    for (; h < c; h++)
                        e(t[h], i, a ? n.call(t[h], h, e(t[h], i)) : n, o);
                s = 1
            }
            return s ? t : l ? e.call(t) : c ? e(t[0], i) : r
        },
        now: function() {
            return (new Date).getTime()
        },
        uaMatch: function(t) {
            t = t.toLowerCase();
            var e = j.exec(t) || W.exec(t) || X.exec(t) || t.indexOf("compatible") < 0 && Y.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        },
        sub: function() {
            function i(t, e) {
                return new i.fn.init(t,e)
            }
            P.extend(!0, i, this),
            i.superclass = this,
            i.fn = i.prototype = this(),
            (i.fn.constructor = i).sub = this.sub,
            i.fn.init = function(t, e) {
                return e && e instanceof P && !(e instanceof i) && (e = i(e)),
                P.fn.init.call(this, t, e, n)
            }
            ,
            i.fn.init.prototype = i.fn;
            var n = i(it);
            return i
        },
        browser: {}
    }),
    P.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) {
        et["[object " + e + "]"] = e.toLowerCase()
    }),
    (C = P.uaMatch(V)).browser && (P.browser[C.browser] = !0,
    P.browser.version = C.version),
    P.browser.webkit && (P.browser.safari = !0),
    // eslint-disable-next-line no-irregular-whitespace
    // eslint-disable-next-line no-irregular-whitespace
    D.test(" ") && (_ = /^[\\s\xA0]+/,
    I = /[\\s\xA0]+$/),
    T = P(it),
    it.addEventListener ? L = function() {
        it.removeEventListener("DOMContentLoaded", L, !1),
        P.ready()
    }
    : it.attachEvent && (L = function() {
        "complete" === it.readyState && (it.detachEvent("onreadystatechange", L),
        P.ready())
    }
    ),
    P), ot = {};
    function at() {
        if (!P.isReady) {
            try {
                it.documentElement.doScroll("left")
            } catch (b) {
                return void setTimeout(at, 1)
            }
            P.ready()
        }
    }
    rt.Callbacks = function(r) {
        r = r ? ot[r] || function(t) {
            for (var e = ot[t] = {}, i = 0, n = (t = t.split(/\\s+/)).length; i < n; i++)
                e[t[i]] = !0;
            return e
        }(r) : {};
        var i, n, s, o, a, l, h = [], c = [], d = function(t) {
            for (var e, i, n = 0, s = t.length; n < s; n++)
                e = t[n],
                "array" === (i = rt.type(e)) ? d(e) : "function" !== i || r.unique && p.has(e) || h.push(e)
        }, u = function(t, e) {
            for (e = e || [],
            i = !r.memory || [t, e],
            s = n = !0,
            l = o || 0,
            o = 0,
            a = h.length; h && l < a; l++)
                if (!1 === h[l].apply(t, e) && r.stopOnFalse) {
                    i = !0;
                    break
                }
            s = !1,
            h && (r.once ? !0 === i ? p.disable() : h = [] : c && c.length && (i = c.shift(),
            p.fireWith(i[0], i[1])))
        }, p = {
            add: function() {
                var t;
                return h && (t = h.length,
                d(arguments),
                s ? a = h.length : i && !0 !== i && (o = t,
                u(i[0], i[1]))),
                this
            },
            remove: function() {
                if (h)
                    for (var t = arguments, e = 0, i = t.length; e < i; e++)
                        for (var n = 0; n < h.length && (t[e] !== h[n] || (s && n <= a && (a--,
                        n <= l && l--),
                        h.splice(n--, 1),
                        !r.unique)); n++)
                            ;
                return this
            },
            has: function(t) {
                if (h)
                    for (var e = 0, i = h.length; e < i; e++)
                        if (t === h[e])
                            return !0;
                return !1
            },
            empty: function() {
                return h = [],
                this
            },
            disable: function() {
                return h = c = i = M,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return c = M,
                i && !0 !== i || p.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(t, e) {
                return c && (s ? r.once || c.push([t, e]) : r.once && i || u(t, e)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return p
    }
    ;
    var lt = [].slice;
    rt.extend({
        Deferred: function(t) {
            var e, i = rt.Callbacks("once memory"), n = rt.Callbacks("once memory"), s = rt.Callbacks("memory"), r = "pending", o = {
                resolve: i,
                reject: n,
                notify: s
            }, a = {
                done: i.add,
                fail: n.add,
                progress: s.add,
                state: function() {
                    return r
                },
                isResolved: i.fired,
                isRejected: n.fired,
                then: function(t, e, i) {
                    return l.done(t).fail(e).progress(i),
                    this
                },
                always: function() {
                    return l.done.apply(l, arguments).fail.apply(l, arguments),
                    this
                },
                pipe: function(t, e, i) {
                    return rt.Deferred(function(r) {
                        rt.each({
                            done: [t, "resolve"],
                            fail: [e, "reject"],
                            progress: [i, "notify"]
                        }, function(t, e) {
                            var i, n = e[0], s = e[1];
                            rt.isFunction(n) ? l[t](function() {
                                (i = n.apply(this, arguments)) && rt.isFunction(i.promise) ? i.promise().then(r.resolve, r.reject, r.notify) : r[s + "With"](this === l ? r : this, [i])
                            }) : l[t](r[s])
                        })
                    }).promise()
                },
                promise: function(t) {
                    if (null == t)
                        t = a;
                    else
                        for (var e in a)
                            t[e] = a[e];
                    return t
                }
            }, l = a.promise({});
            for (e in o)
                l[e] = o[e].fire,
                l[e + "With"] = o[e].fireWith;
            return l.done(function() {
                r = "resolved"
            }, n.disable, s.lock).fail(function() {
                r = "rejected"
            }, i.disable, s.lock),
            t && t.call(l, l),
            l
        },
        when: function(t) {
            var i = lt.call(arguments, 0)
              , e = 0
              , n = i.length
              , s = Array(n)
              , r = n
              , o = n <= 1 && t && rt.isFunction(t.promise) ? t : rt.Deferred()
              , a = o.promise();
            if (1 < n) {
                for (; e < n; e++)
                    i[e] && i[e].promise && rt.isFunction(i[e].promise) ? i[e].promise().then(function(e) {
                        return function(t) {
                            i[e] = 1 < arguments.length ? lt.call(arguments, 0) : t,
                            --r || o.resolveWith(o, i)
                        }
                    }(e), o.reject, function(e) {
                        return function(t) {
                            s[e] = 1 < arguments.length ? lt.call(arguments, 0) : t,
                            o.notifyWith(a, s)
                        }
                    }(e)) : --r;
                r || o.resolveWith(o, i)
            } else
                o !== t && o.resolveWith(o, n ? [t] : []);
            return a
        }
    }),
    rt.support = function() {
        var d, t, e, i, n, s, r, u, o, a, p, f = it.createElement("div");
        it.documentElement;
        if (f.setAttribute("className", "t"),
        f.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        t = f.getElementsByTagName("*"),
        e = f.getElementsByTagName("a")[0],
        !t || !t.length || !e)
            return {};
        n = (i = it.createElement("select")).appendChild(it.createElement("option")),
        s = f.getElementsByTagName("input")[0],
        d = {
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: "/a" === e.getAttribute("href"),
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: n.selected,
            getSetAttribute: "t" !== f.className,
            enctype: !!it.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        },
        rt.boxModel = d.boxModel = "CSS1Compat" === it.compatMode,
        s.checked = !0,
        d.noCloneChecked = s.cloneNode(!0).checked,
        i.disabled = !0,
        d.optDisabled = !n.disabled;
        try {
            delete f.test
        } catch (yt) {
            d.deleteExpando = !1
        }
        if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", function() {
            d.noCloneEvent = !1
        }),
        f.cloneNode(!0).fireEvent("onclick")),
        (s = it.createElement("input")).value = "t",
        s.setAttribute("type", "radio"),
        d.radioValue = "t" === s.value,
        s.setAttribute("checked", "checked"),
        s.setAttribute("name", "t"),
        f.appendChild(s),
        (r = it.createDocumentFragment()).appendChild(f.lastChild),
        d.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.appendChecked = s.checked,
        r.removeChild(s),
        r.appendChild(f),
        f.attachEvent)
            for (a in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                (p = (o = "on" + a)in f) || (f.setAttribute(o, "return;"),
                p = "function" == typeof f[o]),
                d[a + "Bubbles"] = p;
        return r.removeChild(f),
        r = i = f = s = null,
        rt(function() {
            var t, e, i, n, s, r, o, a, l, h, c = it.getElementsByTagName("body")[0];
            c && (l = (h = "padding:0;margin:0;border:") + "0;visibility:hidden;",
            o = "style='" + (a = "position:absolute;top:0;left:0;width:1px;height:1px;") + h + "5px solid #000;",
            (t = it.createElement("div")).style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:1px",
            c.insertBefore(t, c.firstChild),
            f = it.createElement("div"),
            t.appendChild(f),
            f.innerHTML = "<table><tr><td style='" + h + "0;display:none'></td><td>t</td></tr></table>",
            u = f.getElementsByTagName("td"),
            p = 0 === u[0].offsetHeight,
            u[0].style.display = "",
            u[1].style.display = "none",
            d.reliableHiddenOffsets = p && 0 === u[0].offsetHeight,
            b.getComputedStyle && (f.innerHTML = "",
            (r = it.createElement("div")).style.width = "0",
            r.style.marginRight = "0",
            f.style.width = "2px",
            f.appendChild(r),
            d.reliableMarginRight = 0 === (parseInt((b.getComputedStyle(r, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)),
            "undefined" != typeof f.style.zoom && (f.innerHTML = "",
            f.style.width = f.style.padding = "1px",
            f.style.border = 0,
            f.style.overflow = "hidden",
            f.style.display = "inline",
            f.style.zoom = 1,
            d.inlineBlockNeedsLayout = 3 === f.offsetWidth,
            f.style.display = "block",
            f.style.overflow = "visible",
            f.innerHTML = "<div style='width:5px;'></div>",
            d.shrinkWrapBlocks = 3 !== f.offsetWidth),
            f.style.cssText = a + l,
            f.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
            i = (e = f.firstChild).firstChild,
            n = e.nextSibling.firstChild.firstChild,
            s = {
                doesNotAddBorder: 5 !== i.offsetTop,
                doesAddBorderForTableAndCells: 5 === n.offsetTop
            },
            i.style.position = "fixed",
            i.style.top = "20px",
            s.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop,
            i.style.position = i.style.top = "",
            e.style.overflow = "hidden",
            e.style.position = "relative",
            s.subtractsBorderForOverflowNotVisible = -5 === i.offsetTop,
            s.doesNotIncludeMarginInBodyOffset = 1 !== c.offsetTop,
            b.getComputedStyle && (f.style.marginTop = "1%",
            d.pixelMargin = "1%" !== (b.getComputedStyle(f, null) || {
                marginTop: 0
            }).marginTop),
            "undefined" != typeof t.style.zoom && (t.style.zoom = 1),
            c.removeChild(t),
            r = f = t = null,
            rt.extend(d, s))
        }),
        d
    }();
    var ht = /^(?:\\{.*\\}|\\[.*\\])$/
      , ct = /([A-Z])/g;
    rt.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (rt.fn.jquery + Math.random()).replace(/\\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando]) && !v(t)
        },
        data: function(t, e, i, n) {
            if (rt.acceptData(t)) {
                var s, r, o, a = rt.expando, l = "string" == typeof e, h = t.nodeType, c = h ? rt.cache : t, d = h ? t[a] : t[a] && a, u = "events" === e;
                if (!(d && c[d] && (u || n || c[d].data) || !l || i !== M))
                    return;
                return (d || (h ? t[a] = d = ++rt.uuid : d = a),
                c[d] || (c[d] = {},
                h || (c[d].toJSON = rt.noop)),
                "object" != typeof e && "function" != typeof e || (n ? c[d] = rt.extend(c[d], e) : c[d].data = rt.extend(c[d].data, e)),
                s = r = c[d],
                n || (r.data || (r.data = {}),
                r = r.data),
                i !== M && (r[rt.camelCase(e)] = i),
                u && !r[e]) ? s.events : (l ? null == (o = r[e]) && (o = r[rt.camelCase(e)]) : o = r,
                o)
            }
        },
        removeData: function(t, e, i) {
            if (rt.acceptData(t)) {
                var n, s, r, o = rt.expando, a = t.nodeType, l = a ? rt.cache : t, h = a ? t[o] : o;
                if (!l[h])
                    return;
                if (e && (n = i ? l[h] : l[h].data)) {
                    rt.isArray(e) || (e = e in n ? [e] : (e = rt.camelCase(e))in n ? [e] : e.split(" "));
                    for (s = 0,
                    r = e.length; s < r; s++)
                        delete n[e[s]];
                    if (!(i ? v : rt.isEmptyObject)(n))
                        return
                }
                if (!i && (delete l[h].data,
                !v(l[h])))
                    return;
                rt.support.deleteExpando || !l.setInterval ? delete l[h] : l[h] = null,
                a && (rt.support.deleteExpando ? delete t[o] : t.removeAttribute ? t.removeAttribute(o) : t[o] = null)
            }
        },
        _data: function(t, e, i) {
            return rt.data(t, e, i, !0)
        },
        acceptData: function(t) {
            if (t.nodeName) {
                var e = rt.noData[t.nodeName.toLowerCase()];
                if (e)
                    return !0 !== e && t.getAttribute("classid") === e
            }
            return !0
        }
    }),
    rt.fn.extend({
        data: function(i, t) {
            var n, s, e, r, o, a = this[0], l = 0, h = null;
            if (i !== M)
                return "object" == typeof i ? this.each(function() {
                    rt.data(this, i)
                }) : ((n = i.split(".", 2))[1] = n[1] ? "." + n[1] : "",
                s = n[1] + "!",
                rt.access(this, function(e) {
                    return e === M ? ((h = this.triggerHandler("getData" + s, [n[0]])) === M && a && (h = rt.data(a, i),
                    h = x(a, i, h)),
                    h === M && n[1] ? this.data(n[0]) : h) : (n[1] = e,
                    void this.each(function() {
                        var t = rt(this);
                        t.triggerHandler("setData" + s, n),
                        rt.data(this, i, e),
                        t.triggerHandler("changeData" + s, n)
                    }))
                }, null, t, 1 < arguments.length, null, !1));
            if (this.length && (h = rt.data(a),
            1 === a.nodeType && !rt._data(a, "parsedAttrs"))) {
                for (o = (e = a.attributes).length; l < o; l++)
                    0 === (r = e[l].name).indexOf("data-") && (r = rt.camelCase(r.substring(5)),
                    x(a, r, h[r]));
                rt._data(a, "parsedAttrs", !0)
            }
            return h
        },
        removeData: function(t) {
            return this.each(function() {
                rt.removeData(this, t)
            })
        }
    }),
    rt.extend({
        _mark: function(t, e) {
            t && (e = (e || "fx") + "mark",
            rt._data(t, e, (rt._data(t, e) || 0) + 1))
        },
        _unmark: function(t, e, i) {
            var n, s;
            !0 !== t && (i = e,
            e = t,
            t = !1),
            e && (n = (i = i || "fx") + "mark",
            (s = t ? 0 : (rt._data(e, n) || 1) - 1) ? rt._data(e, n, s) : (rt.removeData(e, n, !0),
            y(e, i, "mark")))
        },
        queue: function(t, e, i) {
            var n;
            if (t)
                return e = (e || "fx") + "queue",
                n = rt._data(t, e),
                i && (!n || rt.isArray(i) ? n = rt._data(t, e, rt.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = rt.queue(t, e)
              , n = i.shift()
              , s = {};
            "inprogress" === n && (n = i.shift()),
            n && ("fx" === e && i.unshift("inprogress"),
            rt._data(t, e + ".run", s),
            n.call(t, function() {
                rt.dequeue(t, e)
            }, s)),
            i.length || (rt.removeData(t, e + "queue " + e + ".run", !0),
            y(t, e, "queue"))
        }
    }),
    rt.fn.extend({
        queue: function(e, i) {
            var t = 2;
            return "string" != typeof e && (i = e,
            e = "fx",
            t--),
            arguments.length < t ? rt.queue(this[0], e) : i === M ? this : this.each(function() {
                var t = rt.queue(this, e, i);
                "fx" === e && "inprogress" !== t[0] && rt.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t)
            })
        },
        delay: function(n, t) {
            return n = rt.fx && rt.fx.speeds[n] || n,
            t = t || "fx",
            this.queue(t, function(t, e) {
                var i = setTimeout(t, n);
                e.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            function i() {
                --a || s.resolveWith(r, [r])
            }
            "string" != typeof t && (e = t,
            t = M),
            t = t || "fx";
            for (var n, s = rt.Deferred(), r = this, o = r.length, a = 1, l = t + "defer", h = t + "queue", c = t + "mark"; o--; )
                (n = rt.data(r[o], l, M, !0) || (rt.data(r[o], h, M, !0) || rt.data(r[o], c, M, !0)) && rt.data(r[o], l, rt.Callbacks("once memory"), !0)) && (a++,
                n.add(i));
            return i(),
            s.promise(e)
        }
    });
    var dt, ut, pt, ft = /[\\n\\t\\r]/g, gt = /\\s+/, mt = /\\r/g, yt = /^(?:button|input)$/i, vt = /^(?:button|input|object|select|textarea)$/i, xt = /^a(?:rea)?$/i, bt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, wt = rt.support.getSetAttribute;
    rt.fn.extend({
        attr: function(t, e) {
            return rt.access(this, rt.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return rt.access(this, rt.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = rt.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = M,
                    delete this[t]
                } catch (it) {}
            })
        },
        addClass: function(e) {
            var t, i, n, s, r, o, a;
            if (rt.isFunction(e))
                return this.each(function(t) {
                    rt(this).addClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e)
                for (t = e.split(gt),
                i = 0,
                n = this.length; i < n; i++)
                    if (1 === (s = this[i]).nodeType)
                        if (s.className || 1 !== t.length) {
                            for (r = " " + s.className + " ",
                            o = 0,
                            a = t.length; o < a; o++)
                                ~r.indexOf(" " + t[o] + " ") || (r += t[o] + " ");
                            s.className = rt.trim(r)
                        } else
                            s.className = e;
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, r, o, a;
            if (rt.isFunction(e))
                return this.each(function(t) {
                    rt(this).removeClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e || e === M)
                for (t = (e || "").split(gt),
                i = 0,
                n = this.length; i < n; i++)
                    if (1 === (s = this[i]).nodeType && s.className)
                        if (e) {
                            for (r = (" " + s.className + " ").replace(ft, " "),
                            o = 0,
                            a = t.length; o < a; o++)
                                r = r.replace(" " + t[o] + " ", " ");
                            s.className = rt.trim(r)
                        } else
                            s.className = "";
            return this
        },
        toggleClass: function(r, o) {
            var a = typeof r
              , l = "boolean" == typeof o;
            return rt.isFunction(r) ? this.each(function(t) {
                rt(this).toggleClass(r.call(this, t, this.className, o), o)
            }) : this.each(function() {
                if ("string" == a)
                    for (var t, e = 0, i = rt(this), n = o, s = r.split(gt); t = s[e++]; )
                        n = l ? n : !i.hasClass(t),
                        i[n ? "addClass" : "removeClass"](t);
                else
                    "undefined" != a && "boolean" != a || (this.className && rt._data(this, "__className__", this.className),
                    this.className = !this.className && !1 !== r && rt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && -1 < (" " + this[i].className + " ").replace(ft, " ").indexOf(e))
                    return !0;
            return !1
        },
        val: function(n) {
            var s, t, r, e = this[0];
            return arguments.length ? (r = rt.isFunction(n),
            this.each(function(t) {
                var e, i = rt(this);
                1 === this.nodeType && (null == (e = r ? n.call(this, t, i.val()) : n) ? e = "" : "number" == typeof e ? e += "" : rt.isArray(e) && (e = rt.map(e, function(t) {
                    return null == t ? "" : t + ""
                })),
                (s = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()]) && "set"in s && s.set(this, e, "value") !== M || (this.value = e))
            })) : e ? (s = rt.valHooks[e.type] || rt.valHooks[e.nodeName.toLowerCase()]) && "get"in s && (t = s.get(e, "value")) !== M ? t : "string" == typeof (t = e.value) ? t.replace(mt, "") : null == t ? "" : t : void 0
        }
    }),
    rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, s, r = t.selectedIndex, o = [], a = t.options, l = "select-one" === t.type;
                    if (r < 0)
                        return null;
                    for (i = l ? r : 0,
                    n = l ? r + 1 : a.length; i < n; i++)
                        if ((s = a[i]).selected && (rt.support.optDisabled ? !s.disabled : null === s.getAttribute("disabled")) && (!s.parentNode.disabled || !rt.nodeName(s.parentNode, "optgroup"))) {
                            if (e = rt(s).val(),
                            l)
                                return e;
                            o.push(e)
                        }
                    return l && !o.length && a.length ? rt(a[r]).val() : o
                },
                set: function(t, e) {
                    var i = rt.makeArray(e);
                    return rt(t).find("option").each(function() {
                        this.selected = 0 <= rt.inArray(rt(this).val(), i)
                    }),
                    i.length || (t.selectedIndex = -1),
                    i
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(t, e, i, n) {
            var s, r, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)
                return n && e in rt.attrFn ? rt(t)[e](i) : "undefined" == typeof t.getAttribute ? rt.prop(t, e, i) : ((o = 1 !== a || !rt.isXMLDoc(t)) && (e = e.toLowerCase(),
                r = rt.attrHooks[e] || (bt.test(e) ? ut : dt)),
                i !== M ? null === i ? void rt.removeAttr(t, e) : r && "set"in r && o && (s = r.set(t, i, e)) !== M ? s : (t.setAttribute(e, "" + i),
                i) : !(r && "get"in r && o && null !== (s = r.get(t, e))) && null === (s = t.getAttribute(e)) ? M : s)
        },
        removeAttr: function(t, e) {
            var i, n, s, r, o, a = 0;
            if (e && 1 === t.nodeType)
                for (r = (n = e.toLowerCase().split(gt)).length; a < r; a++)
                    (s = n[a]) && (i = rt.propFix[s] || s,
                    (o = bt.test(s)) || rt.attr(t, s, ""),
                    t.removeAttribute(wt ? s : i),
                    o && i in t && (t[i] = !1))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (yt.test(t.nodeName) && t.parentNode)
                        rt.error("type property can't be changed");
                    else if (!rt.support.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            },
            value: {
                get: function(t, e) {
                    return dt && rt.nodeName(t, "button") ? dt.get(t, e) : e in t ? t.value : null
                },
                set: function(t, e, i) {
                    if (dt && rt.nodeName(t, "button"))
                        return dt.set(t, e, i);
                    t.value = e
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r)
                return (1 !== r || !rt.isXMLDoc(t)) && (e = rt.propFix[e] || e,
                s = rt.propHooks[e]),
                i !== M ? s && "set"in s && (n = s.set(t, i, e)) !== M ? n : t[e] = i : s && "get"in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = t.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : vt.test(t.nodeName) || xt.test(t.nodeName) && t.href ? 0 : M
                }
            }
        }
    }),
    rt.attrHooks.tabindex = rt.propHooks.tabIndex,
    ut = {
        get: function(t, e) {
            var i, n = rt.prop(t, e);
            return !0 === n || "boolean" != typeof n && (i = t.getAttributeNode(e)) && !1 !== i.nodeValue ? e.toLowerCase() : M
        },
        set: function(t, e, i) {
            var n;
            return !1 === e ? rt.removeAttr(t, i) : ((n = rt.propFix[i] || i)in t && (t[n] = !0),
            t.setAttribute(i, i.toLowerCase())),
            i
        }
    },
    wt || (pt = {
        name: !0,
        id: !0,
        coords: !0
    },
    dt = rt.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && (pt[e] ? "" !== i.nodeValue : i.specified) ? i.nodeValue : M
        },
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || (n = it.createAttribute(i),
            t.setAttributeNode(n)),
            n.nodeValue = e + ""
        }
    },
    rt.attrHooks.tabindex.set = dt.set,
    rt.each(["width", "height"], function(t, i) {
        rt.attrHooks[i] = rt.extend(rt.attrHooks[i], {
            set: function(t, e) {
                if ("" === e)
                    return t.setAttribute(i, "auto"),
                    e
            }
        })
    }),
    rt.attrHooks.contenteditable = {
        get: dt.get,
        set: function(t, e, i) {
            "" === e && (e = "false"),
            dt.set(t, e, i)
        }
    }),
    rt.support.hrefNormalized || rt.each(["href", "src", "width", "height"], function(t, i) {
        rt.attrHooks[i] = rt.extend(rt.attrHooks[i], {
            get: function(t) {
                var e = t.getAttribute(i, 2);
                return null === e ? M : e
            }
        })
    }),
    rt.support.style || (rt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText.toLowerCase() || M
        },
        set: function(t, e) {
            return t.style.cssText = "" + e
        }
    }),
    rt.support.optSelected || (rt.propHooks.selected = rt.extend(rt.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        }
    })),
    rt.support.enctype || (rt.propFix.enctype = "encoding"),
    rt.support.checkOn || rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }),
    rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = rt.extend(rt.valHooks[this], {
            set: function(t, e) {
                if (rt.isArray(e))
                    return t.checked = 0 <= rt.inArray(rt(t).val(), e)
            }
        })
    });
    var kt = /^(?:textarea|input|select)$/i
      , Tt = /^([^\\.]*)?(?:\\.(.+))?$/
      , St = /(?:^|\\s)hover(\\.\\S+)?\\b/
      , Mt = /^key/
      , Ct = /^(?:mouse|contextmenu)|click/
      , At = /^(?:focusinfocus|focusoutblur)$/
      , Lt = /^(\\w*)(?:#([\\w\\-]+))?(?:\\.([\\w\\-]+))?$/
      , Pt = function(t) {
        return rt.event.special.hover ? t : t.replace(St, "mouseenter$1 mouseleave$1")
    };
    rt.event = {
        add: function(t, e, i, n, s) {
            var r, o, a, l, h, c, d, u, p, f, g, m, y;
            if (3 !== t.nodeType && 8 !== t.nodeType && e && i && (r = rt._data(t))) {
                for (i.handler && (i = (p = i).handler,
                s = p.selector),
                i.guid || (i.guid = rt.guid++),
                (a = r.events) || (r.events = a = {}),
                (o = r.handle) || (r.handle = o = function(t) {
                    return void 0 === rt || t && rt.event.triggered === t.type ? M : rt.event.dispatch.apply(o.elem, arguments)
                }
                ,
                o.elem = t),
                e = rt.trim(Pt(e)).split(" "),
                l = 0; l < e.length; l++)
                    c = (h = Tt.exec(e[l]) || [])[1],
                    d = (h[2] || "").split(".").sort(),
                    g = rt.event.special[c] || {},
                    c = (s ? g.delegateType : g.bindType) || c,
                    g = rt.event.special[c] || {},
                    u = rt.extend({
                        type: c,
                        origType: h[1],
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        quick: s && (m = s,
                        y = void 0,
                        (y = Lt.exec(m)) && (y[1] = (y[1] || "").toLowerCase(),
                        y[3] = y[3] && new RegExp("(?:^|\\\\s)" + y[3] + "(?:\\\\s|$)")),
                        y),
                        namespace: d.join(".")
                    }, p),
                    (f = a[c]) || ((f = a[c] = []).delegateCount = 0,
                    g.setup && !1 !== g.setup.call(t, n, d, o) || (t.addEventListener ? t.addEventListener(c, o, !1) : t.attachEvent && t.attachEvent("on" + c, o))),
                    g.add && (g.add.call(t, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                    s ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    rt.event.global[c] = !0;
                t = null
            }
        },
        global: {},
        remove: function(t, e, i, n, s) {
            var r, o, a, l, h, c, d, u, p, f, g, m, y = rt.hasData(t) && rt._data(t);
            if (y && (u = y.events)) {
                for (e = rt.trim(Pt(e || "")).split(" "),
                r = 0; r < e.length; r++)
                    if (a = l = (o = Tt.exec(e[r]) || [])[1],
                    h = o[2],
                    a) {
                        for (p = rt.event.special[a] || {},
                        c = (g = u[a = (n ? p.delegateType : p.bindType) || a] || []).length,
                        h = h ? new RegExp("(^|\\\\.)" + h.split(".").sort().join("\\\\.(?:.*\\\\.)?") + "(\\\\.|$)") : null,
                        d = 0; d < g.length; d++)
                            m = g[d],
                            !s && l !== m.origType || i && i.guid !== m.guid || h && !h.test(m.namespace) || n && n !== m.selector && ("**" !== n || !m.selector) || (g.splice(d--, 1),
                            m.selector && g.delegateCount--,
                            p.remove && p.remove.call(t, m));
                        0 === g.length && c !== g.length && (p.teardown && !1 !== p.teardown.call(t, h) || rt.removeEvent(t, a, y.handle),
                        delete u[a])
                    } else
                        for (a in u)
                            rt.event.remove(t, a + e[r], i, n, !0);
                rt.isEmptyObject(u) && ((f = y.handle) && (f.elem = null),
                rt.removeData(t, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(t, e, i, n) {
            if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                var s, r, o, a, l, h, c, d, u, p, f = t.type || t, g = [];
                if (At.test(f + rt.event.triggered))
                    return;
                if (0 <= f.indexOf("!") && (f = f.slice(0, -1),
                r = !0),
                0 <= f.indexOf(".") && (f = (g = f.split(".")).shift(),
                g.sort()),
                (!i || rt.event.customEvent[f]) && !rt.event.global[f])
                    return;
                if ((t = "object" == typeof t ? t[rt.expando] ? t : new rt.Event(f,t) : new rt.Event(f)).type = f,
                t.isTrigger = !0,
                t.exclusive = r,
                t.namespace = g.join("."),
                t.namespace_re = t.namespace ? new RegExp("(^|\\\\.)" + g.join("\\\\.(?:.*\\\\.)?") + "(\\\\.|$)") : null,
                h = f.indexOf(":") < 0 ? "on" + f : "",
                !i) {
                    for (o in s = rt.cache)
                        s[o].events && s[o].events[f] && rt.event.trigger(t, e, s[o].handle.elem, !0);
                    return
                }
                if (t.result = M,
                t.target || (t.target = i),
                (e = null != e ? rt.makeArray(e) : []).unshift(t),
                (c = rt.event.special[f] || {}).trigger && !1 === c.trigger.apply(i, e))
                    return;
                if (u = [[i, c.bindType || f]],
                !n && !c.noBubble && !rt.isWindow(i)) {
                    for (p = c.delegateType || f,
                    a = At.test(p + f) ? i : i.parentNode,
                    l = null; a; a = a.parentNode)
                        u.push([a, p]),
                        l = a;
                    l && l === i.ownerDocument && u.push([l.defaultView || l.parentWindow || b, p])
                }
                for (o = 0; o < u.length && !t.isPropagationStopped(); o++)
                    a = u[o][0],
                    t.type = u[o][1],
                    (d = (rt._data(a, "events") || {})[t.type] && rt._data(a, "handle")) && d.apply(a, e),
                    (d = h && a[h]) && rt.acceptData(a) && !1 === d.apply(a, e) && t.preventDefault();
                return t.type = f,
                n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(i.ownerDocument, e) || "click" === f && rt.nodeName(i, "a") || !rt.acceptData(i) || !h || !i[f] || ("focus" === f || "blur" === f) && 0 === t.target.offsetWidth || rt.isWindow(i) || ((l = i[h]) && (i[h] = null),
                i[rt.event.triggered = f](),
                rt.event.triggered = M,
                l && (i[h] = l)),
                t.result
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t || b.event);
            var e, i, n, s, r, o, a, l, h, c, d, u, p, f = (rt._data(this, "events") || {})[t.type] || [], g = f.delegateCount, m = [].slice.call(arguments, 0), y = !t.exclusive && !t.namespace, v = rt.event.special[t.type] || {}, x = [];
            if ((m[0] = t).delegateTarget = this,
            !v.preDispatch || !1 !== v.preDispatch.call(this, t)) {
                if (g && (!t.button || "click" !== t.type))
                    for ((s = rt(this)).context = this.ownerDocument || this,
                    n = t.target; n != this; n = n.parentNode || this)
                        if (!0 !== n.disabled) {
                            for (o = {},
                            l = [],
                            s[0] = n,
                            e = 0; e < g; e++)
                                o[c = (h = f[e]).selector] === M && (o[c] = h.quick ? (d = n,
                                u = h.quick,
                                p = void 0,
                                p = d.attributes || {},
                                (!u[1] || d.nodeName.toLowerCase() === u[1]) && (!u[2] || (p.id || {}).value === u[2]) && (!u[3] || u[3].test((p["class"] || {}).value))) : s.is(c)),
                                o[c] && l.push(h);
                            l.length && x.push({
                                elem: n,
                                matches: l
                            })
                        }
                for (f.length > g && x.push({
                    elem: this,
                    matches: f.slice(g)
                }),
                e = 0; e < x.length && !t.isPropagationStopped(); e++)
                    for (a = x[e],
                    t.currentTarget = a.elem,
                    i = 0; i < a.matches.length && !t.isImmediatePropagationStopped(); i++)
                        h = a.matches[i],
                        (y || !t.namespace && !h.namespace || t.namespace_re && t.namespace_re.test(h.namespace)) && (t.data = h.data,
                        t.handleObj = h,
                        (r = ((rt.event.special[h.origType] || {}).handle || h.handler).apply(a.elem, m)) === M || !1 === (t.result = r) && (t.preventDefault(),
                        t.stopPropagation()));
                return v.postDispatch && v.postDispatch.call(this, t),
                t.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, r = e.button, o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || it).documentElement,
                s = i.body,
                t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0),
                t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)),
                !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o),
                t.which || r === M || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                t
            }
        },
        fix: function(t) {
            if (t[rt.expando])
                return t;
            var e, i, n = t, s = rt.event.fixHooks[t.type] || {}, r = s.props ? this.props.concat(s.props) : this.props;
            for (t = rt.Event(n),
            e = r.length; e; )
                t[i = r[--e]] = n[i];
            return t.target || (t.target = n.srcElement || it),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey === M && (t.metaKey = t.ctrlKey),
            s.filter ? s.filter(t, n) : t
        },
        special: {
            ready: {
                setup: rt.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(t, e, i) {
                    rt.isWindow(this) && (this.onbeforeunload = i)
                },
                teardown: function(t, e) {
                    this.onbeforeunload === e && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = rt.extend(new rt.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? rt.event.trigger(s, null, e) : rt.event.dispatch.call(e, s),
            s.isDefaultPrevented() && i.preventDefault()
        }
    },
    rt.event.handle = rt.event.dispatch,
    rt.removeEvent = it.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }
    : function(t, e, i) {
        t.detachEvent && t.detachEvent("on" + e, i)
    }
    ,
    rt.Event = function(t, e) {
        if (!(this instanceof rt.Event))
            return new rt.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? f : g) : this.type = t,
        e && rt.extend(this, e),
        this.timeStamp = t && t.timeStamp || rt.now(),
        this[rt.expando] = !0
    }
    ,
    rt.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = f;
            var t = this.originalEvent;
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = f;
            var t = this.originalEvent;
            t && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = f,
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    },
    rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, s) {
        rt.event.special[t] = {
            delegateType: s,
            bindType: s,
            handle: function(t) {
                var e, i = t.relatedTarget, n = t.handleObj;
                n.selector;
                return i && (i === this || rt.contains(this, i)) || (t.type = n.origType,
                e = n.handler.apply(this, arguments),
                t.type = s),
                e
            }
        }
    }),
    rt.support.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            if (rt.nodeName(this, "form"))
                return !1;
            rt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target
                  , i = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : M;
                i && !i._submit_attached && (rt.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }),
                i._submit_attached = !0)
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble,
            this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            if (rt.nodeName(this, "form"))
                return !1;
            rt.event.remove(this, "._submit")
        }
    }),
    rt.support.changeBubbles || (rt.event.special.change = {
        setup: function() {
            if (kt.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (rt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }),
                rt.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1,
                    rt.event.simulate("change", this, t, !0))
                })),
                !1;
            rt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                kt.test(e.nodeName) && !e._change_attached && (rt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                }),
                e._change_attached = !0)
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return rt.event.remove(this, "._change"),
            kt.test(this.nodeName)
        }
    }),
    rt.support.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = 0
          , n = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t), !0)
        };
        rt.event.special[e] = {
            setup: function() {
                0 == i++ && it.addEventListener(t, n, !0)
            },
            teardown: function() {
                0 == --i && it.removeEventListener(t, n, !0)
            }
        }
    }),
    rt.fn.extend({
        on: function(t, e, i, n, s) {
            var r, o;
            if ("object" == typeof t) {
                for (o in "string" != typeof e && (i = i || e,
                e = M),
                t)
                    this.on(o, e, i, t[o], s);
                return this
            }
            if (null == i && null == n ? (n = e,
            i = e = M) : null == n && ("string" == typeof e ? (n = i,
            i = M) : (n = i,
            i = e,
            e = M)),
            !1 === n)
                n = g;
            else if (!n)
                return this;
            return 1 === s && (r = n,
            (n = function(t) {
                return rt().off(t),
                r.apply(this, arguments)
            }
            ).guid = r.guid || (r.guid = rt.guid++)),
            this.each(function() {
                rt.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            if (t && t.preventDefault && t.handleObj) {
                var n = t.handleObj;
                return rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this
            }
            if ("object" != typeof t)
                return !1 !== e && "function" != typeof e || (i = e,
                e = M),
                !1 === i && (i = g),
                this.each(function() {
                    rt.event.remove(this, t, i, e)
                });
            for (var s in t)
                this.off(s, e, t[s]);
            return this
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        live: function(t, e, i) {
            return rt(this.context).on(t, this.selector, e, i),
            this
        },
        die: function(t, e) {
            return rt(this.context).off(t, this.selector || "**", e),
            this
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 == arguments.length ? this.off(t, "**") : this.off(e, t, i)
        },
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            if (this[0])
                return rt.event.trigger(t, e, this[0], !0)
        },
        toggle: function(i) {
            var n = arguments
              , t = i.guid || rt.guid++
              , s = 0
              , e = function(t) {
                var e = (rt._data(this, "lastToggle" + i.guid) || 0) % s;
                return rt._data(this, "lastToggle" + i.guid, 1 + e),
                t.preventDefault(),
                n[e].apply(this, arguments) || !1
            };
            for (e.guid = t; s < n.length; )
                n[s++].guid = t;
            return this.click(e)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
        rt.fn[i] = function(t, e) {
            return null == e && (e = t,
            t = null),
            0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
        ,
        rt.attrFn && (rt.attrFn[i] = !0),
        Mt.test(i) && (rt.event.fixHooks[i] = rt.event.keyHooks),
        Ct.test(i) && (rt.event.fixHooks[i] = rt.event.mouseHooks)
    }),
    function() {
        function o(t, e, i, n, s, r) {
            for (var o = 0, a = n.length; o < a; o++) {
                if (h = n[o]) {
                    for (var l = !1, h = h[t]; h; ) {
                        if (h[c] === i) {
                            l = n[h.sizset];
                            break
                        }
                        if (1 === h.nodeType)
                            if (r || (h[c] = i,
                            h.sizset = o),
                            "string" != typeof e) {
                                if (h === e) {
                                    l = !0;
                                    break
                                }
                            } else if (0 < x.filter(e, [h]).length) {
                                l = h;
                                break
                            }
                        h = h[t]
                    }
                    n[o] = l
                }
            }
        }
        function a(t, e, i, n, s, r) {
            for (var o = 0, a = n.length; o < a; o++) {
                if (h = n[o]) {
                    for (var l = !1, h = h[t]; h; ) {
                        if (h[c] === i) {
                            l = n[h.sizset];
                            break
                        }
                        if (1 !== h.nodeType || r || (h[c] = i,
                        h.sizset = o),
                        h.nodeName.toLowerCase() === e) {
                            l = h;
                            break
                        }
                        h = h[t]
                    }
                    n[o] = l
                }
            }
        }
        var y = /((?:\\((?:\\([^()]+\\)|[^()]+)+\\)|\\[(?:\\[[^\\[\\]]*\\]|['"][^'"]*['"]|[^\\[\\]'"]+)+\\]|\\\\.|[^ >+~,(\\[\\\\]+)+|[>+~])(\\s*,\\s*)?((?:.|\\r|\\n)*)/g
          , c = "sizcache" + (Math.random() + "").replace(".", "")
          , l = 0
          , v = Object.prototype.toString
          , d = !1
          , i = !0
          , u = /\\\\/g
          , r = /\\r\\n/g
          , h = /\\W/;
        [0, 0].sort(function() {
            return i = !1,
            0
        });
        var x = function(t, e, i, n) {
            i = i || [];
            var s = e = e || it;
            if (1 !== e.nodeType && 9 !== e.nodeType)
                return [];
            if (!t || "string" != typeof t)
                return i;
            var r, o, a, l, h, c, d, u, p = !0, f = x.isXML(e), g = [], m = t;
            do {
                if (y.exec(""),
                (r = y.exec(m)) && (m = r[3],
                g.push(r[1]),
                r[2])) {
                    l = r[3];
                    break
                }
            } while (r);
            if (1 < g.length && w.exec(t))
                if (2 === g.length && b.relative[g[0]])
                    o = S(g[0] + g[1], e, n);
                else
                    for (o = b.relative[g[0]] ? [e] : x(g.shift(), e); g.length; )
                        t = g.shift(),
                        b.relative[t] && (t += g.shift()),
                        o = S(t, o, n);
            else if (!n && 1 < g.length && 9 === e.nodeType && !f && b.match.ID.test(g[0]) && !b.match.ID.test(g[g.length - 1]) && (e = (h = x.find(g.shift(), e, f)).expr ? x.filter(h.expr, h.set)[0] : h.set[0]),
            e)
                for (o = (h = n ? {
                    expr: g.pop(),
                    set: T(n)
                } : x.find(g.pop(), 1 !== g.length || "~" !== g[0] && "+" !== g[0] || !e.parentNode ? e : e.parentNode, f)).expr ? x.filter(h.expr, h.set) : h.set,
                0 < g.length ? a = T(o) : p = !1; g.length; )
                    d = c = g.pop(),
                    b.relative[c] ? d = g.pop() : c = "",
                    null == d && (d = e),
                    b.relative[c](a, d, f);
            else
                a = g = [];
            if ((a = a || o) || x.error(c || t),
            "[object Array]" === v.call(a))
                if (p)
                    if (e && 1 === e.nodeType)
                        for (u = 0; null != a[u]; u++)
                            a[u] && (!0 === a[u] || 1 === a[u].nodeType && x.contains(e, a[u])) && i.push(o[u]);
                    else
                        for (u = 0; null != a[u]; u++)
                            a[u] && 1 === a[u].nodeType && i.push(o[u]);
                else
                    i.push.apply(i, a);
            else
                T(a, i);
            return l && (x(l, s, i, n),
            x.uniqueSort(i)),
            i
        };
        x.uniqueSort = function(t) {
            if (n && (d = i,
            t.sort(n),
            d))
                for (var e = 1; e < t.length; e++)
                    t[e] === t[e - 1] && t.splice(e--, 1);
            return t
        }
        ,
        x.matches = function(t, e) {
            return x(t, null, null, e)
        }
        ,
        x.matchesSelector = function(t, e) {
            return 0 < x(e, null, null, [t]).length
        }
        ,
        x.find = function(t, e, i) {
            var n, s, r, o, a, l;
            if (!t)
                return [];
            for (s = 0,
            r = b.order.length; s < r; s++)
                if (a = b.order[s],
                (o = b.leftMatch[a].exec(t)) && (l = o[1],
                o.splice(1, 1),
                "\\\\" !== l.substr(l.length - 1) && (o[1] = (o[1] || "").replace(u, ""),
                null != (n = b.find[a](o, e, i))))) {
                    t = t.replace(b.match[a], "");
                    break
                }
            return {
                set: n = n || ("undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : []),
                expr: t
            }
        }
        ,
        x.filter = function(t, e, i, n) {
            for (var s, r, o, a, l, h, c, d, u, p = t, f = [], g = e, m = e && e[0] && x.isXML(e[0]); t && e.length; ) {
                for (o in b.filter)
                    if (null != (s = b.leftMatch[o].exec(t)) && s[2]) {
                        if (h = b.filter[o],
                        c = s[1],
                        r = !1,
                        s.splice(1, 1),
                        "\\\\" === c.substr(c.length - 1))
                            continue;
                        if (g === f && (f = []),
                        b.preFilter[o])
                            if (s = b.preFilter[o](s, g, i, f, n, m)) {
                                if (!0 === s)
                                    continue
                            } else
                                r = a = !0;
                        if (s)
                            for (d = 0; null != (l = g[d]); d++)
                                l && (u = n ^ (a = h(l, s, d, g)),
                                i && null != a ? u ? r = !0 : g[d] = !1 : u && (f.push(l),
                                r = !0));
                        if (a !== M) {
                            if (i || (g = f),
                            t = t.replace(b.match[o], ""),
                            !r)
                                return [];
                            break
                        }
                    }
                if (t === p) {
                    if (null != r)
                        break;
                    x.error(t)
                }
                p = t
            }
            return g
        }
        ,
        x.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ;
        var p, f = x.getText = function(t) {
            var e, i, n = t.nodeType, s = "";
            if (n) {
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    if ("string" == typeof t.innerText)
                        return t.innerText.replace(r, "");
                    for (t = t.firstChild; t; t = t.nextSibling)
                        s += f(t)
                } else if (3 === n || 4 === n)
                    return t.nodeValue
            } else
                for (e = 0; i = t[e]; e++)
                    8 !== i.nodeType && (s += f(i));
            return s
        }
        , b = x.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\\w\u00c0-\uFFFF\\-]|\\\\.)+)/,
                CLASS: /\\.((?:[\\w\u00c0-\uFFFF\\-]|\\\\.)+)/,
                NAME: /\\[name=['"]*((?:[\\w\u00c0-\uFFFF\\-]|\\\\.)+)['"]*\\]/,
                ATTR: /\\[\\s*((?:[\\w\u00c0-\uFFFF\\-]|\\\\.)+)\\s*(?:(\\S?=)\\s*(?:(['"])(.*?)\\3|(#?(?:[\\w\u00c0-\uFFFF\\-]|\\\\.)*)|)|)\\s*\\]/,
                TAG: /^((?:[\\w\u00c0-\uFFFF\\*\\-]|\\\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\\(\\s*(even|odd|(?:[+\\-]?\\d+|(?:[+\\-]?\\d*)?n\\s*(?:[+\\-]\\s*\\d+)?))\\s*\\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\))?(?=[^\\-]|$)/,
                PSEUDO: /:((?:[\\w\u00c0-\uFFFF\\-]|\\\\.)+)(?:\\((['"]?)((?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\2\\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(t) {
                    return t.getAttribute("href")
                },
                type: function(t) {
                    return t.getAttribute("type")
                }
            },
            relative: {
                "+": function(t, e) {
                    var i = "string" == typeof e
                      , n = i && !h.test(e)
                      , s = i && !n;
                    n && (e = e.toLowerCase());
                    for (var r, o = 0, a = t.length; o < a; o++)
                        if (r = t[o]) {
                            for (; (r = r.previousSibling) && 1 !== r.nodeType; )
                                ;
                            t[o] = s || r && r.nodeName.toLowerCase() === e ? r || !1 : r === e
                        }
                    s && x.filter(e, t, !0)
                },
                ">": function(t, e) {
                    var i, n, s = "string" == typeof e, r = 0, o = t.length;
                    if (s && !h.test(e))
                        for (e = e.toLowerCase(); r < o; r++) {
                            (n = t[r]) && (i = n.parentNode,
                            t[r] = i.nodeName.toLowerCase() === e && i)
                        }
                    else {
                        for (; r < o; r++)
                            (n = t[r]) && (t[r] = s ? n.parentNode : n.parentNode === e);
                        s && x.filter(e, t, !0)
                    }
                },
                "": function(t, e, i) {
                    var n, s = l++, r = o;
                    "string" != typeof e || h.test(e) || (n = e = e.toLowerCase(),
                    r = a),
                    r("parentNode", e, s, t, n, i)
                },
                "~": function(t, e, i) {
                    var n, s = l++, r = o;
                    "string" != typeof e || h.test(e) || (n = e = e.toLowerCase(),
                    r = a),
                    r("previousSibling", e, s, t, n, i)
                }
            },
            find: {
                ID: function(t, e, i) {
                    if ("undefined" != typeof e.getElementById && !i) {
                        var n = e.getElementById(t[1]);
                        return n && n.parentNode ? [n] : []
                    }
                },
                NAME: function(t, e) {
                    if ("undefined" != typeof e.getElementsByName) {
                        for (var i = [], n = e.getElementsByName(t[1]), s = 0, r = n.length; s < r; s++)
                            n[s].getAttribute("name") === t[1] && i.push(n[s]);
                        return 0 === i.length ? null : i
                    }
                },
                TAG: function(t, e) {
                    if ("undefined" != typeof e.getElementsByTagName)
                        return e.getElementsByTagName(t[1])
                }
            },
            preFilter: {
                CLASS: function(t, e, i, n, s, r) {
                    if (t = " " + t[1].replace(u, "") + " ",
                    r)
                        return t;
                    for (var o, a = 0; null != (o = e[a]); a++)
                        o && (s ^ (o.className && 0 <= (" " + o.className + " ").replace(/[\\t\\n\\r]/g, " ").indexOf(t)) ? i || n.push(o) : i && (e[a] = !1));
                    return !1
                },
                ID: function(t) {
                    return t[1].replace(u, "")
                },
                TAG: function(t, e) {
                    return t[1].replace(u, "").toLowerCase()
                },
                CHILD: function(t) {
                    var e;
                    return "nth" === t[1] ? (t[2] || x.error(t[0]),
                    t[2] = t[2].replace(/^\\+|\\s*/g, ""),
                    e = /(-?)(\\d*)(?:n([+\\-]?\\d*))?/.exec(("even" === t[2] ? "2n" : "odd" === t[2] && "2n+1") || !/\\D/.test(t[2]) && "0n+" + t[2] || t[2]),
                    t[2] = +(e[1] + (e[2] || 1)),
                    t[3] = +e[3]) : t[2] && x.error(t[0]),
                    t[0] = l++,
                    t
                },
                ATTR: function(t, e, i, n, s, r) {
                    var o = t[1] = t[1].replace(u, "");
                    return !r && b.attrMap[o] && (t[1] = b.attrMap[o]),
                    t[4] = (t[4] || t[5] || "").replace(u, ""),
                    "~=" === t[2] && (t[4] = " " + t[4] + " "),
                    t
                },
                PSEUDO: function(t, e, i, n, s) {
                    if ("not" === t[1]) {
                        if (!(1 < (y.exec(t[3]) || "").length || /^\\w/.test(t[3]))) {
                            var r = x.filter(t[3], e, i, !0 ^ s);
                            return i || n.push.apply(n, r),
                            !1
                        }
                        t[3] = x(t[3], null, null, e)
                    } else if (b.match.POS.test(t[0]) || b.match.CHILD.test(t[0]))
                        return !0;
                    return t
                },
                POS: function(t) {
                    return t.unshift(!0),
                    t
                }
            },
            filters: {
                enabled: function(t) {
                    return !1 === t.disabled && "hidden" !== t.type
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    return !0 === t.checked
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                parent: function(t) {
                    return !!t.firstChild
                },
                empty: function(t) {
                    return !t.firstChild
                },
                has: function(t, e, i) {
                    return !!x(i[3], t).length
                },
                header: function(t) {
                    return /h\\d/i.test(t.nodeName)
                },
                text: function(t) {
                    var e = t.getAttribute("type")
                      , i = t.type;
                    return "input" === t.nodeName.toLowerCase() && "text" === i && (e === i || null === e)
                },
                radio: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "radio" === t.type
                },
                checkbox: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "checkbox" === t.type
                },
                file: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "file" === t.type
                },
                password: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "password" === t.type
                },
                submit: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && "submit" === t.type
                },
                image: function(t) {
                    return "input" === t.nodeName.toLowerCase() && "image" === t.type
                },
                reset: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && "reset" === t.type
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                input: function(t) {
                    return /input|select|textarea|button/i.test(t.nodeName)
                },
                focus: function(t) {
                    return t === t.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(t, e) {
                    return 0 === e
                },
                last: function(t, e, i, n) {
                    return e === n.length - 1
                },
                even: function(t, e) {
                    return e % 2 == 0
                },
                odd: function(t, e) {
                    return e % 2 == 1
                },
                lt: function(t, e, i) {
                    return e < +i[3]
                },
                gt: function(t, e, i) {
                    return e > +i[3]
                },
                nth: function(t, e, i) {
                    return +i[3] === e
                },
                eq: function(t, e, i) {
                    return +i[3] === e
                }
            },
            filter: {
                PSEUDO: function(t, e, i, n) {
                    var s = e[1]
                      , r = b.filters[s];
                    if (r)
                        return r(t, i, e, n);
                    if ("contains" === s)
                        return 0 <= (t.textContent || t.innerText || f([t]) || "").indexOf(e[3]);
                    if ("not" === s) {
                        for (var o = e[3], a = 0, l = o.length; a < l; a++)
                            if (o[a] === t)
                                return !1;
                        return !0
                    }
                    x.error(s)
                },
                CHILD: function(t, e) {
                    var i, n, s, r, o, a, l = e[1], h = t;
                    switch (l) {
                    case "only":
                    case "first":
                        for (; h = h.previousSibling; )
                            if (1 === h.nodeType)
                                return !1;
                        if ("first" === l)
                            return !0;
                        h = t;
                    case "last":
                        for (; h = h.nextSibling; )
                            if (1 === h.nodeType)
                                return !1;
                        return !0;
                    case "nth":
                        if (i = e[2],
                        n = e[3],
                        1 === i && 0 === n)
                            return !0;
                        if (s = e[0],
                        (r = t.parentNode) && (r[c] !== s || !t.nodeIndex)) {
                            for (o = 0,
                            h = r.firstChild; h; h = h.nextSibling)
                                1 === h.nodeType && (h.nodeIndex = ++o);
                            r[c] = s
                        }
                        return a = t.nodeIndex - n,
                        0 === i ? 0 == a : a % i == 0 && 0 <= a / i
                    }
                },
                ID: function(t, e) {
                    return 1 === t.nodeType && t.getAttribute("id") === e
                },
                TAG: function(t, e) {
                    return "*" === e && 1 === t.nodeType || !!t.nodeName && t.nodeName.toLowerCase() === e
                },
                CLASS: function(t, e) {
                    return -1 < (" " + (t.className || t.getAttribute("class")) + " ").indexOf(e)
                },
                ATTR: function(t, e) {
                    var i = e[1]
                      , n = x.attr ? x.attr(t, i) : b.attrHandle[i] ? b.attrHandle[i](t) : null != t[i] ? t[i] : t.getAttribute(i)
                      , s = n + ""
                      , r = e[2]
                      , o = e[4];
                    return null == n ? "!=" === r : !r && x.attr ? null != n : "=" === r ? s === o : "*=" === r ? 0 <= s.indexOf(o) : "~=" === r ? 0 <= (" " + s + " ").indexOf(o) : o ? "!=" === r ? s !== o : "^=" === r ? 0 === s.indexOf(o) : "$=" === r ? s.substr(s.length - o.length) === o : "|=" === r && (s === o || s.substr(0, o.length + 1) === o + "-") : s && !1 !== n
                },
                POS: function(t, e, i, n) {
                    var s = e[2]
                      , r = b.setFilters[s];
                    if (r)
                        return r(t, i, e, n)
                }
            }
        }, w = b.match.POS, t = function(t, e) {
            return "\\\\" + (+e + 1)
        };
        for (p in b.match)
            b.match[p] = new RegExp(b.match[p].source + /(?![^\\[]*\\])(?![^\\(]*\\))/.source),
            b.leftMatch[p] = new RegExp(/(^(?:.|\\r|\\n)*?)/.source + b.match[p].source.replace(/\\\\(\\d+)/g, t));
        b.match.globalPOS = w;
        var n, g, e, s, m, k, T = function(t, e) {
            return t = Array.prototype.slice.call(t, 0),
            e ? (e.push.apply(e, t),
            e) : t
        };
        try {
            Array.prototype.slice.call(it.documentElement.childNodes, 0)[0].nodeType
        } catch (xt) {
            T = function(t, e) {
                var i = 0
                  , n = e || [];
                if ("[object Array]" === v.call(t))
                    Array.prototype.push.apply(n, t);
                else if ("number" == typeof t.length)
                    for (var s = t.length; i < s; i++)
                        n.push(t[i]);
                else
                    for (; t[i]; i++)
                        n.push(t[i]);
                return n
            }
        }
        it.documentElement.compareDocumentPosition ? n = function(t, e) {
            return t === e ? (d = !0,
            0) : t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
        }
        : (n = function(t, e) {
            if (t === e)
                return d = !0,
                0;
            if (t.sourceIndex && e.sourceIndex)
                return t.sourceIndex - e.sourceIndex;
            var i, n, s = [], r = [], o = t.parentNode, a = e.parentNode, l = o;
            if (o === a)
                return g(t, e);
            if (!o)
                return -1;
            if (!a)
                return 1;
            for (; l; )
                s.unshift(l),
                l = l.parentNode;
            for (l = a; l; )
                r.unshift(l),
                l = l.parentNode;
            i = s.length,
            n = r.length;
            for (var h = 0; h < i && h < n; h++)
                if (s[h] !== r[h])
                    return g(s[h], r[h]);
            return h === i ? g(t, r[h], -1) : g(s[h], e, 1)
        }
        ,
        g = function(t, e, i) {
            if (t === e)
                return i;
            for (var n = t.nextSibling; n; ) {
                if (n === e)
                    return -1;
                n = n.nextSibling
            }
            return 1
        }
        ),
        s = it.createElement("div"),
        m = "script" + (new Date).getTime(),
        k = it.documentElement,
        s.innerHTML = "<a name='" + m + "'/>",
        k.insertBefore(s, k.firstChild),
        it.getElementById(m) && (b.find.ID = function(t, e, i) {
            if ("undefined" != typeof e.getElementById && !i) {
                var n = e.getElementById(t[1]);
                return n ? n.id === t[1] || "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id").nodeValue === t[1] ? [n] : M : []
            }
        }
        ,
        b.filter.ID = function(t, e) {
            var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
            return 1 === t.nodeType && i && i.nodeValue === e
        }
        ),
        k.removeChild(s),
        k = s = null,
        (e = it.createElement("div")).appendChild(it.createComment("")),
        0 < e.getElementsByTagName("*").length && (b.find.TAG = function(t, e) {
            var i = e.getElementsByTagName(t[1]);
            if ("*" === t[1]) {
                for (var n = [], s = 0; i[s]; s++)
                    1 === i[s].nodeType && n.push(i[s]);
                i = n
            }
            return i
        }
        ),
        e.innerHTML = "<a href='#'></a>",
        e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (b.attrHandle.href = function(t) {
            return t.getAttribute("href", 2)
        }
        ),
        e = null,
        it.querySelectorAll && function() {
            var d = x
              , t = it.createElement("div");
            if (t.innerHTML = "<p class='TEST'></p>",
            !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                for (var e in x = function(t, e, i, n) {
                    if (e = e || it,
                    !n && !x.isXML(e)) {
                        var s = /^(\\w+$)|^\\.([\\w\\-]+$)|^#([\\w\\-]+$)/.exec(t);
                        if (s && (1 === e.nodeType || 9 === e.nodeType)) {
                            if (s[1])
                                return T(e.getElementsByTagName(t), i);
                            if (s[2] && b.find.CLASS && e.getElementsByClassName)
                                return T(e.getElementsByClassName(s[2]), i)
                        }
                        if (9 === e.nodeType) {
                            if ("body" === t && e.body)
                                return T([e.body], i);
                            if (s && s[3]) {
                                var r = e.getElementById(s[3]);
                                if (!r || !r.parentNode)
                                    return T([], i);
                                if (r.id === s[3])
                                    return T([r], i)
                            }
                            try {
                                return T(e.querySelectorAll(t), i)
                            } catch (u) {}
                        } else if (1 === e.nodeType && "object" !== e.nodeName.toLowerCase()) {
                            var o = e
                              , a = e.getAttribute("id")
                              , l = a || "__sizzle__"
                              , h = e.parentNode
                              , c = /^\\s*[+~]/.test(t);
                            a ? l = l.replace(/'/g, "\\\\$&") : e.setAttribute("id", l),
                            c && h && (e = e.parentNode);
                            try {
                                if (!c || h)
                                    return T(e.querySelectorAll("[id='" + l + "'] " + t), i)
                            } catch (p) {} finally {
                                a || o.removeAttribute("id")
                            }
                        }
                    }
                    return d(t, e, i, n)
                }
                ,
                d)
                    x[e] = d[e];
                t = null
            }
        }(),
        function() {
            var t = it.documentElement
              , n = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector;
            if (n) {
                var s = !n.call(it.createElement("div"), "div")
                  , r = !1;
                try {
                    n.call(it.documentElement, "[test!='']:sizzle")
                } catch (rt) {
                    r = !0
                }
                x.matchesSelector = function(t, e) {
                    if (e = e.replace(/\\=\\s*([^'"\\]]*)\\s*\\]/g, "='$1']"),
                    !x.isXML(t))
                        try {
                            if (r || !b.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                var i = n.call(t, e);
                                if (i || !s || t.document && 11 !== t.document.nodeType)
                                    return i
                            }
                        } catch (v) {}
                    return 0 < x(e, null, null, [t]).length
                }
            }
        }(),
        function() {
            var t = it.createElement("div");
            if (t.innerHTML = "<div class='test e'></div><div class='test'></div>",
            t.getElementsByClassName && 0 !== t.getElementsByClassName("e").length) {
                if (t.lastChild.className = "e",
                1 === t.getElementsByClassName("e").length)
                    return;
                b.order.splice(1, 0, "CLASS"),
                b.find.CLASS = function(t, e, i) {
                    if ("undefined" != typeof e.getElementsByClassName && !i)
                        return e.getElementsByClassName(t[1])
                }
                ,
                t = null
            }
        }(),
        it.documentElement.contains ? x.contains = function(t, e) {
            return t !== e && (!t.contains || t.contains(e))
        }
        : it.documentElement.compareDocumentPosition ? x.contains = function(t, e) {
            return !!(16 & t.compareDocumentPosition(e))
        }
        : x.contains = function() {
            return !1
        }
        ,
        x.isXML = function(t) {
            var e = (t ? t.ownerDocument || t : 0).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ;
        var S = function(t, e, i) {
            for (var n, s = [], r = "", o = e.nodeType ? [e] : e; n = b.match.PSEUDO.exec(t); )
                r += n[0],
                t = t.replace(b.match.PSEUDO, "");
            t = b.relative[t] ? t + "*" : t;
            for (var a = 0, l = o.length; a < l; a++)
                x(t, o[a], s, i);
            return x.filter(r, s)
        };
        x.attr = rt.attr,
        x.selectors.attrMap = {},
        rt.find = x,
        rt.expr = x.selectors,
        rt.expr[":"] = rt.expr.filters,
        rt.unique = x.uniqueSort,
        rt.text = x.getText,
        rt.isXMLDoc = x.isXML,
        rt.contains = x.contains
    }();
    var Ot = /Until$/
      , Et = /^(?:parents|prevUntil|prevAll)/
      , Nt = /,/
      , Dt = /^.[^:#\\[\\.,]*$/
      , _t = Array.prototype.slice
      , It = rt.expr.match.globalPOS
      , Rt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    rt.fn.extend({
        find: function(t) {
            var e = this;
            if ("string" != typeof t)
                return rt(t).filter(function() {
                    for (o = 0,
                    a = e.length; o < a; o++)
                        if (rt.contains(e[o], this))
                            return !0
                });
            for (var i, n, s, r = this.pushStack("", "find", t), o = 0, a = this.length; o < a; o++)
                if (i = r.length,
                rt.find(t, this[o], r),
                0 < o)
                    for (n = i; n < r.length; n++)
                        for (s = 0; s < i; s++)
                            if (r[s] === r[n]) {
                                r.splice(n--, 1);
                                break
                            }
            return r
        },
        has: function(t) {
            var i = rt(t);
            return this.filter(function() {
                for (var t = 0, e = i.length; t < e; t++)
                    if (rt.contains(this, i[t]))
                        return !0
            })
        },
        not: function(t) {
            return this.pushStack(o(this, t, !1), "not", t)
        },
        filter: function(t) {
            return this.pushStack(o(this, t, !0), "filter", t)
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? It.test(t) ? 0 <= rt(t, this.context).index(this[0]) : 0 < rt.filter(t, this).length : 0 < this.filter(t).length)
        },
        closest: function(t, e) {
            var i = []
              , n = this[0];
            if (rt.isArray(t)) {
                for (var s = 1; n && n.ownerDocument && n !== e; ) {
                    for (o = 0; o < t.length; o++)
                        rt(n).is(t[o]) && i.push({
                            selector: t[o],
                            elem: n,
                            level: s
                        });
                    n = n.parentNode,
                    s++
                }
                return i
            }
            for (var r = It.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0, o = 0, a = this.length; o < a; o++)
                for (n = this[o]; n; ) {
                    if (r ? -1 < r.index(n) : rt.find.matchesSelector(n, t)) {
                        i.push(n);
                        break
                    }
                    if (!(n = n.parentNode) || !n.ownerDocument || n === e || 11 === n.nodeType)
                        break
                }
            return i = 1 < i.length ? rt.unique(i) : i,
            this.pushStack(i, "closest", t)
        },
        index: function(t) {
            return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(t, e) {
            var i = "string" == typeof t ? rt(t, e) : rt.makeArray(t && t.nodeType ? [t] : t)
              , n = rt.merge(this.get(), i);
            return this.pushStack(p(i[0]) || p(n[0]) ? n : rt.unique(n))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return rt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return rt.dir(t, "parentNode", i)
        },
        next: function(t) {
            return rt.nth(t, 2, "nextSibling")
        },
        prev: function(t) {
            return rt.nth(t, 2, "previousSibling")
        },
        nextAll: function(t) {
            return rt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return rt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return rt.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return rt.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return rt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return rt.sibling(t.firstChild)
        },
        contents: function(t) {
            return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.makeArray(t.childNodes)
        }
    }, function(n, s) {
        rt.fn[n] = function(t, e) {
            var i = rt.map(this, s, t);
            return Ot.test(n) || (e = t),
            e && "string" == typeof e && (i = rt.filter(e, i)),
            i = 1 < this.length && !Rt[n] ? rt.unique(i) : i,
            (1 < this.length || Nt.test(e)) && Et.test(n) && (i = i.reverse()),
            this.pushStack(i, n, _t.call(arguments).join(","))
        }
    }),
    rt.extend({
        filter: function(t, e, i) {
            return i && (t = ":not(" + t + ")"),
            1 === e.length ? rt.find.matchesSelector(e[0], t) ? [e[0]] : [] : rt.find.matches(t, e)
        },
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (i === M || 1 !== s.nodeType || !rt(s).is(i)); )
                1 === s.nodeType && n.push(s),
                s = s[e];
            return n
        },
        nth: function(t, e, i, n) {
            e = e || 1;
            for (var s = 0; t && (1 !== t.nodeType || ++s !== e); t = t[i])
                ;
            return t
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Bt = / jQuery\\d+="(?:\\d+|null)"/g
      , Ft = /^\\s+/
      , Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi
      , jt = /<([\\w:]+)/
      , Wt = /<tbody/i
      , Xt = /<|&#?\\w+;/
      , Yt = /<(?:script|style)/i
      , Gt = /<(?:script|object|embed|option|style)/i
      , $t = new RegExp("<(?:" + zt + ")[\\\\s/>]","i")
      , qt = /checked\\s*(?:[^=]|=\\s*.checked.)/i
      , Vt = /\\/(java|ecma)script/i
      , Ut = /^\\s*<!(?:\\[CDATA\\[|\\-\\-)/
      , Kt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , Zt = k(it);
    Kt.optgroup = Kt.option,
    Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead,
    Kt.th = Kt.td,
    rt.support.htmlSerialize || (Kt._default = [1, "div<div>", "</div>"]),
    rt.fn.extend({
        text: function(t) {
            return rt.access(this, function(t) {
                return t === M ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function(e) {
            return rt.isFunction(e) ? this.each(function(t) {
                rt(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = rt(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                    t = t.firstChild;
                return t
            }).append(this)),
            this);
            var t
        },
        wrapInner: function(i) {
            return rt.isFunction(i) ? this.each(function(t) {
                rt(this).wrapInner(i.call(this, t))
            }) : this.each(function() {
                var t = rt(this)
                  , e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function(e) {
            var i = rt.isFunction(e);
            return this.each(function(t) {
                rt(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                1 === this.nodeType && this.appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                1 === this.nodeType && this.insertBefore(t, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this)
                });
            if (arguments.length) {
                var t = rt.clean(arguments);
                return t.push.apply(t, this.toArray()),
                this.pushStack(t, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this.nextSibling)
                });
            if (arguments.length) {
                var t = this.pushStack(this, "after", arguments);
                return t.push.apply(t, rt.clean(arguments)),
                t
            }
        },
        remove: function(t, e) {
            for (var i, n = 0; null != (i = this[n]); n++)
                t && !rt.filter(t, [i]).length || (e || 1 !== i.nodeType || (rt.cleanData(i.getElementsByTagName("*")),
                rt.cleanData([i])),
                i.parentNode && i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                for (1 === t.nodeType && rt.cleanData(t.getElementsByTagName("*")); t.firstChild; )
                    t.removeChild(t.firstChild);
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return rt.clone(this, t, e)
            })
        },
        html: function(t) {
            return rt.access(this, function(t) {
                var e = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (t === M)
                    return 1 === e.nodeType ? e.innerHTML.replace(Bt, "") : null;
                if ("string" == typeof t && !Yt.test(t) && (rt.support.leadingWhitespace || !Ft.test(t)) && !Kt[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ht, "<$1></$2>");
                    try {
                        for (; i < n; i++)
                            1 === (e = this[i] || {}).nodeType && (rt.cleanData(e.getElementsByTagName("*")),
                            e.innerHTML = t);
                        e = 0
                    } catch (ot) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function(n) {
            return this[0] && this[0].parentNode ? rt.isFunction(n) ? this.each(function(t) {
                var e = rt(this)
                  , i = e.html();
                e.replaceWith(n.call(this, t, i))
            }) : ("string" != typeof n && (n = rt(n).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , e = this.parentNode;
                rt(this).remove(),
                t ? rt(t).before(n) : rt(e).append(n)
            })) : this.length ? this.pushStack(rt(rt.isFunction(n) ? n() : n), "replaceWith", n) : this
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(i, n, s) {
            var t, e, r, o, a, l = i[0], h = [];
            if (!rt.support.checkClone && 3 === arguments.length && "string" == typeof l && qt.test(l))
                return this.each(function() {
                    rt(this).domManip(i, n, s, !0)
                });
            if (rt.isFunction(l))
                return this.each(function(t) {
                    var e = rt(this);
                    i[0] = l.call(this, t, n ? e.html() : M),
                    e.domManip(i, n, s)
                });
            if (this[0]) {
                if (o = l && l.parentNode,
                e = 1 === (r = (t = rt.support.parentNode && o && 11 === o.nodeType && o.childNodes.length === this.length ? {
                    fragment: o
                } : rt.buildFragment(i, this, h)).fragment).childNodes.length ? r = r.firstChild : r.firstChild) {
                    n = n && rt.nodeName(e, "tr");
                    for (var c = 0, d = this.length, u = d - 1; c < d; c++)
                        s.call(n ? (a = this[c],
                        rt.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a) : this[c], t.cacheable || 1 < d && c < u ? rt.clone(r, !0, !0) : r)
                }
                h.length && rt.each(h, function(t, e) {
                    e.src ? rt.ajax({
                        type: "GET",
                        global: !1,
                        url: e.src,
                        async: !1,
                        dataType: "script"
                    }) : rt.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Ut, "/*$0*/")),
                    e.parentNode && e.parentNode.removeChild(e)
                })
            }
            return this
        }
    }),
    rt.buildFragment = function(t, e, i) {
        var n, s, r, o, a = t[0];
        return e && e[0] && (o = e[0].ownerDocument || e[0]),
        o.createDocumentFragment || (o = it),
        !(1 === t.length && "string" == typeof a && a.length < 512 && o === it && "<" === a.charAt(0)) || Gt.test(a) || !rt.support.checkClone && qt.test(a) || !rt.support.html5Clone && $t.test(a) || (s = !0,
        (r = rt.fragments[a]) && 1 !== r && (n = r)),
        n || (n = o.createDocumentFragment(),
        rt.clean(t, o, n, i)),
        s && (rt.fragments[a] = r ? n : 1),
        {
            fragment: n,
            cacheable: s
        }
    }
    ,
    rt.fragments = {},
    rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, l) {
        rt.fn[a] = function(t) {
            var e = []
              , i = rt(t)
              , n = 1 === this.length && this[0].parentNode;
            if (n && 11 === n.nodeType && 1 === n.childNodes.length && 1 === i.length)
                return i[l](this[0]),
                this;
            for (var s = 0, r = i.length; s < r; s++) {
                var o = (0 < s ? this.clone(!0) : this).get();
                rt(i[s])[l](o),
                e = e.concat(o)
            }
            return this.pushStack(e, a, i.selector)
        }
    }),
    rt.extend({
        clone: function(t, e, i) {
            var n, s, r, o, a, l = rt.support.html5Clone || rt.isXMLDoc(t) || !$t.test("<" + t.nodeName + ">") ? t.cloneNode(!0) : (o = t,
            a = it.createElement("div"),
            Zt.appendChild(a),
            a.innerHTML = o.outerHTML,
            a.firstChild);
            if (!(rt.support.noCloneEvent && rt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                for (d(t, l),
                n = h(t),
                s = h(l),
                r = 0; n[r]; ++r)
                    s[r] && d(n[r], s[r]);
            if (e && (u(t, l),
            i))
                for (n = h(t),
                s = h(l),
                r = 0; n[r]; ++r)
                    u(n[r], s[r]);
            return n = s = null,
            l
        },
        clean: function(t, e, i, n) {
            var s, r = [];
            "undefined" == typeof (e = e || it).createElement && (e = e.ownerDocument || e[0] && e[0].ownerDocument || it);
            for (var o, a, l = 0; null != (o = t[l]); l++)
                if ("number" == typeof o && (o += ""),
                o) {
                    if ("string" == typeof o)
                        if (Xt.test(o)) {
                            o = o.replace(Ht, "<$1></$2>");
                            var h, c = (jt.exec(o) || ["", ""])[1].toLowerCase(), d = Kt[c] || Kt._default, u = d[0], p = e.createElement("div"), f = Zt.childNodes;
                            for (e === it ? Zt.appendChild(p) : k(e).appendChild(p),
                            p.innerHTML = d[1] + o + d[2]; u--; )
                                p = p.lastChild;
                            if (!rt.support.tbody)
                                for (var g = Wt.test(o), m = "table" !== c || g ? "<table>" !== d[1] || g ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes, y = m.length - 1; 0 <= y; --y)
                                    rt.nodeName(m[y], "tbody") && !m[y].childNodes.length && m[y].parentNode.removeChild(m[y]);
                            !rt.support.leadingWhitespace && Ft.test(o) && p.insertBefore(e.createTextNode(Ft.exec(o)[0]), p.firstChild),
                            o = p.childNodes,
                            p && (p.parentNode.removeChild(p),
                            0 < f.length && ((h = f[f.length - 1]) && h.parentNode && h.parentNode.removeChild(h)))
                        } else
                            o = e.createTextNode(o);
                    if (!rt.support.appendChecked)
                        if (o[0] && "number" == typeof (a = o.length))
                            for (y = 0; y < a; y++)
                                w(o[y]);
                        else
                            w(o);
                    o.nodeType ? r.push(o) : r = rt.merge(r, o)
                }
            if (i)
                for (s = function(t) {
                    return !t.type || Vt.test(t.type)
                }
                ,
                l = 0; r[l]; l++) {
                    var v, x = r[l];
                    n && rt.nodeName(x, "script") && (!x.type || Vt.test(x.type)) ? n.push(x.parentNode ? x.parentNode.removeChild(x) : x) : (1 === x.nodeType && (v = rt.grep(x.getElementsByTagName("script"), s),
                    r.splice.apply(r, [l + 1, 0].concat(v))),
                    i.appendChild(x))
                }
            return r
        },
        cleanData: function(t) {
            for (var e, i, n, s = rt.cache, r = rt.event.special, o = rt.support.deleteExpando, a = 0; null != (n = t[a]); a++)
                if ((!n.nodeName || !rt.noData[n.nodeName.toLowerCase()]) && (i = n[rt.expando])) {
                    if ((e = s[i]) && e.events) {
                        for (var l in e.events)
                            r[l] ? rt.event.remove(n, l) : rt.removeEvent(n, l, e.handle);
                        e.handle && (e.handle.elem = null)
                    }
                    o ? delete n[rt.expando] : n.removeAttribute && n.removeAttribute(rt.expando),
                    delete s[i]
                }
        }
    });
    var Jt, Qt, te, ee = /alpha\\([^)]*\\)/i, ie = /opacity=([^)]*)/, ne = /([A-Z]|^ms)/g, se = /^[\\-+]?(?:\\d*\\.)?\\d+$/i, re = /^-?(?:\\d*\\.)?\\d+(?!px)[^\\d\\s]+$/i, oe = /^([\\-+])=([\\-+.\\de]+)/, ae = /^margin/, le = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, he = ["Top", "Right", "Bottom", "Left"];
    rt.fn.css = function(t, e) {
        return rt.access(this, function(t, e, i) {
            return i !== M ? rt.style(t, e, i) : rt.css(t, e)
        }, t, e, 1 < arguments.length)
    }
    ,
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Jt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                    return t.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": rt.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o = rt.camelCase(e), a = t.style, l = rt.cssHooks[o];
                if (e = rt.cssProps[o] || o,
                i === M)
                    return l && "get"in l && (s = l.get(t, !1, n)) !== M ? s : a[e];
                if ("string" === (r = typeof i) && (s = oe.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(rt.css(t, e)),
                r = "number"),
                null == i || "number" === r && isNaN(i))
                    return;
                if ("number" !== r || rt.cssNumber[o] || (i += "px"),
                !(l && "set"in l && (i = l.set(t, i)) === M))
                    try {
                        a[e] = i
                    } catch (x) {}
            }
        },
        css: function(t, e, i) {
            var n, s;
            return e = rt.camelCase(e),
            s = rt.cssHooks[e],
            "cssFloat" === (e = rt.cssProps[e] || e) && (e = "float"),
            s && "get"in s && (n = s.get(t, !0, i)) !== M ? n : Jt ? Jt(t, e) : void 0
        },
        swap: function(t, e, i) {
            var n, s, r = {};
            for (s in e)
                r[s] = t.style[s],
                t.style[s] = e[s];
            for (s in n = i.call(t),
            e)
                t.style[s] = r[s];
            return n
        }
    }),
    rt.curCSS = rt.css,
    it.defaultView && it.defaultView.getComputedStyle && (Qt = function(t, e) {
        var i, n, s, r, o = t.style;
        return e = e.replace(ne, "-$1").toLowerCase(),
        (n = t.ownerDocument.defaultView) && (s = n.getComputedStyle(t, null)) && ("" !== (i = s.getPropertyValue(e)) || rt.contains(t.ownerDocument.documentElement, t) || (i = rt.style(t, e))),
        !rt.support.pixelMargin && s && ae.test(e) && re.test(i) && (r = o.width,
        o.width = i,
        i = s.width,
        o.width = r),
        i
    }
    ),
    it.documentElement.currentStyle && (te = function(t, e) {
        var i, n, s, r = t.currentStyle && t.currentStyle[e], o = t.style;
        return null == r && o && (s = o[e]) && (r = s),
        re.test(r) && (i = o.left,
        (n = t.runtimeStyle && t.runtimeStyle.left) && (t.runtimeStyle.left = t.currentStyle.left),
        o.left = "fontSize" === e ? "1em" : r,
        r = o.pixelLeft + "px",
        o.left = i,
        n && (t.runtimeStyle.left = n)),
        "" === r ? "auto" : r
    }
    ),
    Jt = Qt || te,
    rt.each(["height", "width"], function(t, n) {
        rt.cssHooks[n] = {
            get: function(t, e, i) {
                if (e)
                    return 0 !== t.offsetWidth ? s(t, n, i) : rt.swap(t, le, function() {
                        return s(t, n, i)
                    })
            },
            set: function(t, e) {
                return se.test(e) ? e + "px" : e
            }
        }
    }),
    rt.support.opacity || (rt.cssHooks.opacity = {
        get: function(t, e) {
            return ie.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style
              , n = t.currentStyle
              , s = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , r = n && n.filter || i.filter || "";
            (i.zoom = 1) <= e && "" === rt.trim(r.replace(ee, "")) && (i.removeAttribute("filter"),
            n && !n.filter) || (i.filter = ee.test(r) ? r.replace(ee, s) : r + " " + s)
        }
    }),
    rt(function() {
        rt.support.reliableMarginRight || (rt.cssHooks.marginRight = {
            get: function(t, e) {
                return rt.swap(t, {
                    display: "inline-block"
                }, function() {
                    return e ? Jt(t, "margin-right") : t.style.marginRight
                })
            }
        })
    }),
    rt.expr && rt.expr.filters && (rt.expr.filters.hidden = function(t) {
        var e = t.offsetWidth
          , i = t.offsetHeight;
        return 0 === e && 0 === i || !rt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || rt.css(t, "display"))
    }
    ,
    rt.expr.filters.visible = function(t) {
        return !rt.expr.filters.hidden(t)
    }
    ),
    rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, r) {
        rt.cssHooks[s + r] = {
            expand: function(t) {
                for (var e = "string" == typeof t ? t.split(" ") : [t], i = {}, n = 0; n < 4; n++)
                    i[s + he[n] + r] = e[n] || e[n - 2] || e[0];
                return i
            }
        }
    });
    var ce, de, ue = /%20/g, pe = /\\[\\]$/, fe = /\\r?\\n/g, ge = /#.*$/, me = /^(.*?):[ \\t]*([^\\r\\n]*)\\r?$/gm, ye = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, ve = /^(?:GET|HEAD)$/, xe = /^\\/\\//, be = /\\?/, we = /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, ke = /^(?:select|textarea)/i, Te = /\\s+/, Se = /([?&])_=[^&]*/, Me = /^([\\w\\+\\.\\-]+:)(?:\\/\\/([^\\/?#:]*)(?::(\\d+))?)?/, Ce = rt.fn.load, Ae = {}, Le = {}, Pe = ["*/"] + ["*"];
    try {
        ce = st.href
    } catch (qe) {
        (ce = it.createElement("a")).href = "",
        ce = ce.href
    }
    de = Me.exec(ce.toLowerCase()) || [],
    rt.fn.extend({
        load: function(t, e, n) {
            if ("string" != typeof t && Ce)
                return Ce.apply(this, arguments);
            if (!this.length)
                return this;
            var s, i = t.indexOf(" ");
            0 <= i && (s = t.slice(i, t.length),
            t = t.slice(0, i));
            var r = "GET";
            e && (rt.isFunction(e) ? (n = e,
            e = M) : "object" == typeof e && (e = rt.param(e, rt.ajaxSettings.traditional),
            r = "POST"));
            var o = this;
            return rt.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e,
                complete: function(t, e, i) {
                    i = t.responseText,
                    t.isResolved() && (t.done(function(t) {
                        i = t
                    }),
                    o.html(s ? rt("<div>").append(i.replace(we, "")).find(s) : i)),
                    n && o.each(n, [i, e, t])
                }
            }),
            this
        },
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? rt.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ke.test(this.nodeName) || ye.test(this.type))
            }).map(function(t, i) {
                var e = rt(this).val();
                return null == e ? null : rt.isArray(e) ? rt.map(e, function(t, e) {
                    return {
                        name: i.name,
                        value: t.replace(fe, "\\r\\n")
                    }
                }) : {
                    name: i.name,
                    value: e.replace(fe, "\\r\\n")
                }
            }).get()
        }
    }),
    rt.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    rt.each(["get", "post"], function(t, s) {
        rt[s] = function(t, e, i, n) {
            return rt.isFunction(e) && (n = n || i,
            i = e,
            e = M),
            rt.ajax({
                type: s,
                url: t,
                data: e,
                success: i,
                dataType: n
            })
        }
    }),
    rt.extend({
        getScript: function(t, e) {
            return rt.get(t, M, e, "script")
        },
        getJSON: function(t, e, i) {
            return rt.get(t, e, i, "json")
        },
        ajaxSetup: function(t, e) {
            return e ? i(t, rt.ajaxSettings) : (e = t,
            t = rt.ajaxSettings),
            i(t, e),
            t
        },
        ajaxSettings: {
            url: ce,
            isLocal: /^(?:about|app|app\\-storage|.+\\-extension|file|res|widget):$/.test(de[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Pe
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: n(Ae),
        ajaxTransport: n(Le),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                if (2 !== k) {
                    k = 2,
                    f && clearTimeout(f),
                    p = M,
                    u = n || "",
                    T.readyState = 0 < t ? 4 : 0;
                    var s, r, o, a, l, h = e, c = i ? function(t, e, i) {
                        var n, s, r, o, a = t.contents, l = t.dataTypes, h = t.responseFields;
                        for (s in h)
                            s in i && (e[h[s]] = i[s]);
                        for (; "*" === l[0]; )
                            l.shift(),
                            n === M && (n = t.mimeType || e.getResponseHeader("content-type"));
                        if (n)
                            for (s in a)
                                if (a[s] && a[s].test(n)) {
                                    l.unshift(s);
                                    break
                                }
                        if (l[0]in i)
                            r = l[0];
                        else {
                            for (s in i) {
                                if (!l[0] || t.converters[s + " " + l[0]]) {
                                    r = s;
                                    break
                                }
                                o = o || s
                            }
                            r = r || o
                        }
                        if (r)
                            return r !== l[0] && l.unshift(r),
                            i[r]
                    }(m, T, i) : M;
                    if (200 <= t && t < 300 || 304 === t)
                        if (m.ifModified && ((a = T.getResponseHeader("Last-Modified")) && (rt.lastModified[d] = a),
                        (l = T.getResponseHeader("Etag")) && (rt.etag[d] = l)),
                        304 === t)
                            h = "notmodified",
                            s = !0;
                        else
                            try {
                                r = function(t, e) {
                                    t.dataFilter && (e = t.dataFilter(e, t.dataType));
                                    for (var i, n, s, r, o, a, l, h = t.dataTypes, c = {}, d = h.length, u = h[0], p = 1; p < d; p++) {
                                        if (1 === p)
                                            for (i in t.converters)
                                                "string" == typeof i && (c[i.toLowerCase()] = t.converters[i]);
                                        if (s = u,
                                        "*" === (u = h[p]))
                                            u = s;
                                        else if ("*" !== s && s !== u) {
                                            if (!(o = c[r = s + " " + u] || c["* " + u]))
                                                for (a in l = M,
                                                c)
                                                    if (((n = a.split(" "))[0] === s || "*" === n[0]) && (l = c[n[1] + " " + u])) {
                                                        !0 === (a = c[a]) ? o = l : !0 === l && (o = a);
                                                        break
                                                    }
                                            o || l || rt.error("No conversion from " + r.replace(" ", " to ")),
                                            !0 !== o && (e = o ? o(e) : l(a(e)))
                                        }
                                    }
                                    return e
                                }(m, c),
                                h = "success",
                                s = !0
                            } catch (Tt) {
                                h = "parsererror",
                                o = Tt
                            }
                    else
                        (o = h) && !t || (h = "error",
                        t < 0 && (t = 0));
                    T.status = t,
                    T.statusText = "" + (e || h),
                    s ? x.resolveWith(y, [r, h, T]) : x.rejectWith(y, [T, h, o]),
                    T.statusCode(w),
                    w = M,
                    g && v.trigger("ajax" + (s ? "Success" : "Error"), [T, m, s ? r : o]),
                    b.fireWith(y, [T, h]),
                    g && (v.trigger("ajaxComplete", [T, m]),
                    --rt.active || rt.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof t && (e = t,
            t = M),
            e = e || {};
            var d, u, n, p, f, s, g, r, o, a, m = rt.ajaxSetup({}, e), y = m.context || m, v = y !== m && (y.nodeType || y instanceof rt) ? rt(y) : rt.event, x = rt.Deferred(), b = rt.Callbacks("once memory"), w = m.statusCode || {}, l = {}, h = {}, k = 0, T = {
                readyState: 0,
                setRequestHeader: function(t, e) {
                    var i;
                    return k || (i = t.toLowerCase(),
                    t = h[i] = h[i] || t,
                    l[t] = e),
                    this
                },
                getAllResponseHeaders: function() {
                    return 2 === k ? u : null
                },
                getResponseHeader: function(t) {
                    var e;
                    if (2 === k) {
                        if (!n)
                            for (n = {}; e = me.exec(u); )
                                n[e[1].toLowerCase()] = e[2];
                        e = n[t.toLowerCase()]
                    }
                    return e === M ? null : e
                },
                overrideMimeType: function(t) {
                    return k || (m.mimeType = t),
                    this
                },
                abort: function(t) {
                    return t = t || "abort",
                    p && p.abort(t),
                    i(0, t),
                    this
                }
            };
            if (x.promise(T),
            T.success = T.done,
            T.error = T.fail,
            T.complete = b.add,
            T.statusCode = function(t) {
                if (t)
                    if (k < 2)
                        for (var e in t)
                            w[e] = [w[e], t[e]];
                    else
                        e = t[T.status],
                        T.then(e, e);
                return this
            }
            ,
            m.url = ((t || m.url) + "").replace(ge, "").replace(xe, de[1] + "//"),
            m.dataTypes = rt.trim(m.dataType || "*").toLowerCase().split(Te),
            null == m.crossDomain && (s = Me.exec(m.url.toLowerCase()),
            m.crossDomain = !(!s || s[1] == de[1] && s[2] == de[2] && (s[3] || ("http:" === s[1] ? 80 : 443)) == (de[3] || ("http:" === de[1] ? 80 : 443)))),
            m.data && m.processData && "string" != typeof m.data && (m.data = rt.param(m.data, m.traditional)),
            S(Ae, m, e, T),
            2 === k)
                return !1;
            for (r in g = m.global,
            m.type = m.type.toUpperCase(),
            m.hasContent = !ve.test(m.type),
            g && 0 == rt.active++ && rt.event.trigger("ajaxStart"),
            m.hasContent || (m.data && (m.url += (be.test(m.url) ? "&" : "?") + m.data,
            delete m.data),
            d = m.url,
            !1 === m.cache && (o = rt.now(),
            a = m.url.replace(Se, "$1_=" + o),
            m.url = a + (a === m.url ? (be.test(m.url) ? "&" : "?") + "_=" + o : ""))),
            (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && T.setRequestHeader("Content-Type", m.contentType),
            m.ifModified && (d = d || m.url,
            rt.lastModified[d] && T.setRequestHeader("If-Modified-Since", rt.lastModified[d]),
            rt.etag[d] && T.setRequestHeader("If-None-Match", rt.etag[d])),
            T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Pe + "; q=0.01" : "") : m.accepts["*"]),
            m.headers)
                T.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(y, T, m) || 2 === k))
                return T.abort(),
                !1;
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[r](m[r]);
            if (p = S(Le, m, e, T)) {
                T.readyState = 1,
                g && v.trigger("ajaxSend", [T, m]),
                m.async && 0 < m.timeout && (f = setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    k = 1,
                    p.send(l, i)
                } catch (kt) {
                    if (!(k < 2))
                        throw kt;
                    i(-1, kt)
                }
            } else
                i(-1, "No Transport");
            return T
        },
        param: function(t, e) {
            var i = []
              , n = function(t, e) {
                e = rt.isFunction(e) ? e() : e,
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (e === M && (e = rt.ajaxSettings.traditional),
            rt.isArray(t) || t.jquery && !rt.isPlainObject(t))
                rt.each(t, function() {
                    n(this.name, this.value)
                });
            else
                for (var s in t)
                    !function r(i, t, n, s) {
                        if (rt.isArray(t))
                            rt.each(t, function(t, e) {
                                n || pe.test(i) ? s(i, e) : r(i + "[" + ("object" == typeof e ? t : "") + "]", e, n, s)
                            });
                        else if (n || "object" !== rt.type(t))
                            s(i, t);
                        else
                            for (var e in t)
                                r(i + "[" + e + "]", t[e], n, s)
                    }(s, t[s], e, n);
            return i.join("&").replace(ue, "+")
        }
    }),
    rt.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Oe = rt.now()
      , Ee = /(\\=)\\?(&|$)|\\?\\?/i;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return rt.expando + "_" + Oe++
        }
    }),
    rt.ajaxPrefilter("json jsonp", function(t, e, i) {
        var n = "string" == typeof t.data && /^application\\/x\\-www\\-form\\-urlencoded/.test(t.contentType);
        if ("jsonp" === t.dataTypes[0] || !1 !== t.jsonp && (Ee.test(t.url) || n && Ee.test(t.data))) {
            var s, r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o = b[r], a = t.url, l = t.data, h = "$1" + r + "$2";
            return !1 !== t.jsonp && (a = a.replace(Ee, h),
            t.url === a && (n && (l = l.replace(Ee, h)),
            t.data === l && (a += (/\\?/.test(a) ? "&" : "?") + t.jsonp + "=" + r))),
            t.url = a,
            t.data = l,
            b[r] = function(t) {
                s = [t]
            }
            ,
            i.always(function() {
                b[r] = o,
                s && rt.isFunction(o) && b[r](s[0])
            }),
            t.converters["script json"] = function() {
                return s || rt.error(r + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            "script"
        }
    }),
    rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t),
                t
            }
        }
    }),
    rt.ajaxPrefilter("script", function(t) {
        t.cache === M && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    rt.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, s = it.head || it.getElementsByTagName("head")[0] || it.documentElement;
            return {
                send: function(t, i) {
                    (n = it.createElement("script")).async = "async",
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(t, e) {
                        !e && n.readyState && !/loaded|complete/.test(n.readyState) || (n.onload = n.onreadystatechange = null,
                        s && n.parentNode && s.removeChild(n),
                        n = M,
                        e || i(200, "success"))
                    }
                    ,
                    s.insertBefore(n, s.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Ne, De, _e = !!b.ActiveXObject && function() {
        for (var t in Ne)
            Ne[t](0, 1)
    }
    , Ie = 0;
    rt.ajaxSettings.xhr = b.ActiveXObject ? function() {
        return !this.isLocal && e() || function() {
            try {
                return new b.ActiveXObject("Microsoft.XMLHTTP")
            } catch (M) {}
        }()
    }
    : e,
    De = rt.ajaxSettings.xhr(),
    rt.extend(rt.support, {
        ajax: !!De,
        cors: !!De && "withCredentials"in De
    }),
    rt.support.ajax && rt.ajaxTransport(function(c) {
        var d;
        if (!c.crossDomain || rt.support.cors)
            return {
                send: function(t, a) {
                    var l, e, h = c.xhr();
                    if (c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async),
                    c.xhrFields)
                        for (e in c.xhrFields)
                            h[e] = c.xhrFields[e];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    c.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (e in t)
                            h.setRequestHeader(e, t[e])
                    } catch (ct) {}
                    h.send(c.hasContent && c.data || null),
                    d = function(t, e) {
                        var i, n, s, r, o;
                        try {
                            if (d && (e || 4 === h.readyState))
                                if (d = M,
                                l && (h.onreadystatechange = rt.noop,
                                _e && delete Ne[l]),
                                e)
                                    4 !== h.readyState && h.abort();
                                else {
                                    i = h.status,
                                    s = h.getAllResponseHeaders(),
                                    r = {},
                                    (o = h.responseXML) && o.documentElement && (r.xml = o);
                                    try {
                                        r.text = h.responseText
                                    } catch (t) {}
                                    try {
                                        n = h.statusText
                                    } catch (ft) {
                                        n = ""
                                    }
                                    i || !c.isLocal || c.crossDomain ? 1223 === i && (i = 204) : i = r.text ? 200 : 404
                                }
                        } catch (gt) {
                            e || a(-1, gt)
                        }
                        r && a(i, n, r, s)
                    }
                    ,
                    c.async && 4 !== h.readyState ? (l = ++Ie,
                    _e && (Ne || (Ne = {},
                    rt(b).unload(_e)),
                    Ne[l] = d),
                    h.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
    });
    var Re, ze, Be, Fe, He = {}, je = /^(?:toggle|show|hide)$/, We = /^([+\\-]=)?([\\d+.\\-]+)([a-z%]*)$/i, Xe = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    rt.fn.extend({
        show: function(t, e, i) {
            var n, s;
            if (t || 0 === t)
                return this.animate(a("show", 3), t, e, i);
            for (var r = 0, o = this.length; r < o; r++)
                (n = this[r]).style && (s = n.style.display,
                rt._data(n, "olddisplay") || "none" !== s || (s = n.style.display = ""),
                ("" !== s || "none" !== rt.css(n, "display")) && rt.contains(n.ownerDocument.documentElement, n) || rt._data(n, "olddisplay", m(n.nodeName)));
            for (r = 0; r < o; r++)
                (n = this[r]).style && ("" !== (s = n.style.display) && "none" !== s || (n.style.display = rt._data(n, "olddisplay") || ""));
            return this
        },
        hide: function(t, e, i) {
            if (t || 0 === t)
                return this.animate(a("hide", 3), t, e, i);
            for (var n, s, r = 0, o = this.length; r < o; r++)
                (n = this[r]).style && ("none" === (s = rt.css(n, "display")) || rt._data(n, "olddisplay") || rt._data(n, "olddisplay", s));
            for (r = 0; r < o; r++)
                this[r].style && (this[r].style.display = "none");
            return this
        },
        _toggle: rt.fn.toggle,
        toggle: function(e, t, i) {
            var n = "boolean" == typeof e;
            return rt.isFunction(e) && rt.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || n ? this.each(function() {
                var t = n ? e : rt(this).is(":hidden");
                rt(this)[t ? "show" : "hide"]()
            }) : this.animate(a("toggle", 3), e, t, i),
            this
        },
        fadeTo: function(t, e, i, n) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(f, t, e, i) {
            function n() {
                !1 === g.queue && rt._mark(this);
                var t, e, i, n, s, r, o, a, l, h, c, d = rt.extend({}, g), u = 1 === this.nodeType, p = u && rt(this).is(":hidden");
                for (i in d.animatedProperties = {},
                f)
                    if (i !== (t = rt.camelCase(i)) && (f[t] = f[i],
                    delete f[i]),
                    (s = rt.cssHooks[t]) && "expand"in s)
                        for (i in r = s.expand(f[t]),
                        delete f[t],
                        r)
                            i in f || (f[i] = r[i]);
                for (t in f) {
                    if (e = f[t],
                    rt.isArray(e) ? (d.animatedProperties[t] = e[1],
                    e = f[t] = e[0]) : d.animatedProperties[t] = d.specialEasing && d.specialEasing[t] || d.easing || "swing",
                    "hide" === e && p || "show" === e && !p)
                        return d.complete.call(this);
                    !u || "height" !== t && "width" !== t || (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    "inline" === rt.css(this, "display") && "none" === rt.css(this, "float") && (rt.support.inlineBlockNeedsLayout && "inline" !== m(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                for (i in null != d.overflow && (this.style.overflow = "hidden"),
                f)
                    n = new rt.fx(this,d,i),
                    e = f[i],
                    je.test(e) ? (c = rt._data(this, "toggle" + i) || ("toggle" === e ? p ? "show" : "hide" : 0)) ? (rt._data(this, "toggle" + i, "show" === c ? "hide" : "show"),
                    n[c]()) : n[e]() : (o = We.exec(e),
                    a = n.cur(),
                    o ? (l = parseFloat(o[2]),
                    "px" !== (h = o[3] || (rt.cssNumber[i] ? "" : "px")) && (rt.style(this, i, (l || 1) + h),
                    a = (l || 1) / n.cur() * a,
                    rt.style(this, i, a + h)),
                    o[1] && (l = ("-=" === o[1] ? -1 : 1) * l + a),
                    n.custom(a, l, h)) : n.custom(a, e, ""));
                return !0
            }
            var g = rt.speed(t, e, i);
            return rt.isEmptyObject(f) ? this.each(g.complete, [!1]) : (f = rt.extend({}, f),
            !1 === g.queue ? this.each(n) : this.queue(g.queue, n))
        },
        stop: function(r, t, o) {
            return "string" != typeof r && (o = t,
            t = r,
            r = M),
            t && !1 !== r && this.queue(r || "fx", []),
            this.each(function() {
                function t(t, e, i) {
                    var n = e[i];
                    rt.removeData(t, i, !0),
                    n.stop(o)
                }
                var e, i = !1, n = rt.timers, s = rt._data(this);
                if (o || rt._unmark(!0, this),
                null == r)
                    for (e in s)
                        s[e] && s[e].stop && e.indexOf(".run") === e.length - 4 && t(this, s, e);
                else
                    s[e = r + ".run"] && s[e].stop && t(this, s, e);
                for (e = n.length; e--; )
                    n[e].elem !== this || null != r && n[e].queue !== r || (o ? n[e](!0) : n[e].saveState(),
                    i = !0,
                    n.splice(e, 1));
                o && i || rt.dequeue(this, r)
            })
        }
    }),
    rt.each({
        slideDown: a("show", 1),
        slideUp: a("hide", 1),
        slideToggle: a("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        rt.fn[t] = function(t, e, i) {
            return this.animate(n, t, e, i)
        }
    }),
    rt.extend({
        speed: function(t, e, i) {
            var n = t && "object" == typeof t ? rt.extend({}, t) : {
                complete: i || !i && e || rt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !rt.isFunction(e) && e
            };
            return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default,
            null != n.queue && !0 !== n.queue || (n.queue = "fx"),
            n.old = n.complete,
            n.complete = function(t) {
                rt.isFunction(n.old) && n.old.call(this),
                n.queue ? rt.dequeue(this, n.queue) : !1 !== t && rt._unmark(this)
            }
            ,
            n
        },
        easing: {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return -Math.cos(t * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(t, e, i) {
            this.options = e,
            this.elem = t,
            this.prop = i,
            e.orig = e.orig || {}
        }
    }),
    rt.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (rt.fx.step[this.prop] || rt.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
                return this.elem[this.prop];
            var t, e = rt.css(this.elem, this.prop);
            return isNaN(t = parseFloat(e)) ? e && "auto" !== e ? e : 0 : t
        },
        custom: function(t, e, i) {
            function n(t) {
                return s.step(t)
            }
            var s = this
              , r = rt.fx;
            this.startTime = Fe || l(),
            this.end = e,
            this.now = this.start = t,
            this.pos = this.state = 0,
            this.unit = i || this.unit || (rt.cssNumber[this.prop] ? "" : "px"),
            n.queue = this.options.queue,
            n.elem = this.elem,
            n.saveState = function() {
                rt._data(s.elem, "fxshow" + s.prop) === M && (s.options.hide ? rt._data(s.elem, "fxshow" + s.prop, s.start) : s.options.show && rt._data(s.elem, "fxshow" + s.prop, s.end))
            }
            ,
            n() && rt.timers.push(n) && !Be && (Be = setInterval(r.tick, r.interval))
        },
        show: function() {
            var t = rt._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = t || rt.style(this.elem, this.prop),
            this.options.show = !0,
            t !== M ? this.custom(this.cur(), t) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
            rt(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = rt._data(this.elem, "fxshow" + this.prop) || rt.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(t) {
            var e, i, n, s = Fe || l(), r = !0, o = this.elem, a = this.options;
            if (t || s >= a.duration + this.startTime) {
                for (e in this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                a.animatedProperties[this.prop] = !0,
                a.animatedProperties)
                    !0 !== a.animatedProperties[e] && (r = !1);
                if (r) {
                    if (null == a.overflow || rt.support.shrinkWrapBlocks || rt.each(["", "X", "Y"], function(t, e) {
                        o.style["overflow" + e] = a.overflow[t]
                    }),
                    a.hide && rt(o).hide(),
                    a.hide || a.show)
                        for (e in a.animatedProperties)
                            rt.style(o, e, a.orig[e]),
                            rt.removeData(o, "fxshow" + e, !0),
                            rt.removeData(o, "toggle" + e, !0);
                    (n = a.complete) && (a.complete = !1,
                    n.call(o))
                }
                return !1
            }
            return a.duration == Infinity ? this.now = s : (i = s - this.startTime,
            this.state = i / a.duration,
            this.pos = rt.easing[a.animatedProperties[this.prop]](this.state, i, 0, 1, a.duration),
            this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    rt.extend(rt.fx, {
        tick: function() {
            for (var t, e = rt.timers, i = 0; i < e.length; i++)
                (t = e[i])() || e[i] !== t || e.splice(i--, 1);
            e.length || rt.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(Be),
            Be = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(t) {
                rt.style(t.elem, "opacity", t.now)
            },
            _default: function(t) {
                t.elem.style && null != t.elem.style[t.prop] ? t.elem.style[t.prop] = t.now + t.unit : t.elem[t.prop] = t.now
            }
        }
    }),
    rt.each(Xe.concat.apply([], Xe), function(t, e) {
        e.indexOf("margin") && (rt.fx.step[e] = function(t) {
            rt.style(t.elem, e, Math.max(0, t.now) + t.unit)
        }
        )
    }),
    rt.expr && rt.expr.filters && (rt.expr.filters.animated = function(e) {
        return rt.grep(rt.timers, function(t) {
            return e === t.elem
        }).length
    }
    );
    var Ye = /^t(?:able|d|h)$/i
      , Ge = /^(?:body|html)$/i
      , $e = "getBoundingClientRect"in it.documentElement ? function(t, e, i, n) {
        try {
            n = t.getBoundingClientRect()
        } catch (st) {}
        if (!n || !rt.contains(i, t))
            return n ? {
                top: n.top,
                left: n.left
            } : {
                top: 0,
                left: 0
            };
        var s = e.body
          , r = c(e)
          , o = i.clientTop || s.clientTop || 0
          , a = i.clientLeft || s.clientLeft || 0
          , l = r.pageYOffset || rt.support.boxModel && i.scrollTop || s.scrollTop
          , h = r.pageXOffset || rt.support.boxModel && i.scrollLeft || s.scrollLeft;
        return {
            top: n.top + l - o,
            left: n.left + h - a
        }
    }
    : function(t, e, i) {
        for (var n, s = t.offsetParent, r = e.body, o = e.defaultView, a = o ? o.getComputedStyle(t, null) : t.currentStyle, l = t.offsetTop, h = t.offsetLeft; (t = t.parentNode) && t !== r && t !== i && (!rt.support.fixedPosition || "fixed" !== a.position); )
            n = o ? o.getComputedStyle(t, null) : t.currentStyle,
            l -= t.scrollTop,
            h -= t.scrollLeft,
            t === s && (l += t.offsetTop,
            h += t.offsetLeft,
            !rt.support.doesNotAddBorder || rt.support.doesAddBorderForTableAndCells && Ye.test(t.nodeName) || (l += parseFloat(n.borderTopWidth) || 0,
            h += parseFloat(n.borderLeftWidth) || 0),
            s = t.offsetParent),
            rt.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (l += parseFloat(n.borderTopWidth) || 0,
            h += parseFloat(n.borderLeftWidth) || 0),
            a = n;
        return "relative" !== a.position && "static" !== a.position || (l += r.offsetTop,
        h += r.offsetLeft),
        rt.support.fixedPosition && "fixed" === a.position && (l += Math.max(i.scrollTop, r.scrollTop),
        h += Math.max(i.scrollLeft, r.scrollLeft)),
        {
            top: l,
            left: h
        }
    }
    ;
    rt.fn.offset = function(e) {
        if (arguments.length)
            return e === M ? this : this.each(function(t) {
                rt.offset.setOffset(this, e, t)
            });
        var t = this[0]
          , i = t && t.ownerDocument;
        return i ? t === i.body ? rt.offset.bodyOffset(t) : $e(t, i, i.documentElement) : null
    }
    ,
    rt.offset = {
        bodyOffset: function(t) {
            var e = t.offsetTop
              , i = t.offsetLeft;
            return rt.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(rt.css(t, "marginTop")) || 0,
            i += parseFloat(rt.css(t, "marginLeft")) || 0),
            {
                top: e,
                left: i
            }
        },
        setOffset: function(t, e, i) {
            var n = rt.css(t, "position");
            "static" === n && (t.style.position = "relative");
            var s, r, o = rt(t), a = o.offset(), l = rt.css(t, "top"), h = rt.css(t, "left"), c = {}, d = ("absolute" === n || "fixed" === n) && -1 < rt.inArray("auto", [l, h]) ? (r = (s = o.position()).top,
            s.left) : (r = parseFloat(l) || 0,
            parseFloat(h) || 0);
            rt.isFunction(e) && (e = e.call(t, i, a)),
            null != e.top && (c.top = e.top - a.top + r),
            null != e.left && (c.left = e.left - a.left + d),
            "using"in e ? e.using.call(t, c) : o.css(c)
        }
    },
    rt.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var t = this[0]
              , e = this.offsetParent()
              , i = this.offset()
              , n = Ge.test(e[0].nodeName) ? {
                top: 0,
                left: 0
            } : e.offset();
            return i.top -= parseFloat(rt.css(t, "marginTop")) || 0,
            i.left -= parseFloat(rt.css(t, "marginLeft")) || 0,
            n.top += parseFloat(rt.css(e[0], "borderTopWidth")) || 0,
            n.left += parseFloat(rt.css(e[0], "borderLeftWidth")) || 0,
            {
                top: i.top - n.top,
                left: i.left - n.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || it.body; t && !Ge.test(t.nodeName) && "static" === rt.css(t, "position"); )
                    t = t.offsetParent;
                return t
            })
        }
    }),
    rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, s) {
        var r = /Y/.test(s);
        rt.fn[e] = function(t) {
            return rt.access(this, function(t, e, i) {
                var n = c(t);
                if (i === M)
                    return n ? s in n ? n[s] : rt.support.boxModel && n.document.documentElement[e] || n.document.body[e] : t[e];
                n ? n.scrollTo(r ? rt(n).scrollLeft() : i, r ? i : rt(n).scrollTop()) : t[e] = i
            }, e, t, arguments.length, null)
        }
    }),
    rt.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        var a = "client" + t
          , l = "scroll" + t
          , h = "offset" + t;
        rt.fn["inner" + t] = function() {
            var t = this[0];
            return t ? t.style ? parseFloat(rt.css(t, i, "padding")) : this[i]() : null
        }
        ,
        rt.fn["outer" + t] = function(t) {
            var e = this[0];
            return e ? e.style ? parseFloat(rt.css(e, i, t ? "margin" : "border")) : this[i]() : null
        }
        ,
        rt.fn[i] = function(t) {
            return rt.access(this, function(t, e, i) {
                var n, s, r, o;
                return rt.isWindow(t) ? (s = (n = t.document).documentElement[a],
                rt.support.boxModel && s || n.body && n.body[a] || s) : 9 === t.nodeType ? (n = t.documentElement)[a] >= n[l] ? n[a] : Math.max(t.body[l], n[l], t.body[h], n[h]) : i === M ? (r = rt.css(t, e),
                o = parseFloat(r),
                rt.isNumeric(o) ? o : r) : void rt(t).css(e, i)
            }, i, t, arguments.length, null)
        }
    }),
    b.jQuery = b.$ = rt,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return rt
    })
}(window),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(c) {
    c.fn.addBack = c.fn.addBack || c.fn.andSelf,
    c.fn.extend({
        actual: function(t, e) {
            if (!this[t])
                throw '$.actual => The jQuery method "' + t + '" you called does not exist';
            var n, i, s, r, o, a = c.extend({
                absolute: !1,
                clone: !1,
                includeMargin: !1,
                display: "block"
            }, e), l = this.eq(0);
            o = !0 === a.clone ? (r = function() {
                l = l.clone().attr("style", "position: absolute !important; top: -1000 !important; ").appendTo("body")
            }
            ,
            function() {
                l.remove()
            }
            ) : (n = [],
            i = "",
            r = function() {
                s = l.parents().addBack().filter(":hidden"),
                i += "visibility: hidden !important; display: " + a.display + " !important; ",
                !0 === a.absolute && (i += "position: absolute !important; "),
                s.each(function() {
                    var t = c(this)
                      , e = t.attr("style");
                    n.push(e),
                    t.attr("style", e ? e + ";" + i : i)
                })
            }
            ,
            function() {
                s.each(function(t) {
                    var e = c(this)
                      , i = n[t];
                    i === undefined ? e.removeAttr("style") : e.attr("style", i)
                })
            }
            ),
            r();
            var h = /(outer)/.test(t) ? l[t](a.includeMargin) : l[t]();
            return o(),
            h
        }
    })
}),
function(h) {
    var c = h.fn.drag = function(t) {
        if (!1 === t)
            return this.unbind("mousedown", o);
        function o(t) {
            var e, i, n = this, s = t.data || {}, r = s.options || {};
            if (s.elem)
                n = s.elem,
                t.cursorOffsetX = s.pageX - s.left,
                t.cursorOffsetY = s.pageY - s.top,
                t.offsetX = t.pageX - t.cursorOffsetX,
                t.offsetY = t.pageY - t.cursorOffsetY;
            else if (c.dragging || 0 < r.which && t.which != r.which || h(t.target).is(r.not))
                return;
            switch (t.type) {
            case "mousedown":
                if (r.handle && h(n).find(r.handle).size() && !h(t.target).is(r.handle) && !h(t.target).parents(r.handle).size())
                    return;
                return h.extend(s, h(n).offset(), {
                    elem: n,
                    target: t.target,
                    pageX: t.pageX,
                    pageY: t.pageY
                }),
                h.event.add(document, "mousemove mouseup", o, s),
                l(n, !1),
                !1;
            case !c.dragging && "mousemove":
                if (a(t.pageX - s.pageX) + a(t.pageY - s.pageY) < r.distance)
                    break;
                if (t.target = s.target,
                r.dragstart && !1 === r.dragstart.apply(n, [t]))
                    break;
                c.dragging = !0;
            case c.dragging && "mousemove":
                if (r.dragging && !1 === r.dragging.apply(n, [t]))
                    break;
                if (r.constrain && (t.offsetX < 0 && (t.offsetX = 0),
                t.offsetY < 0 && (t.offsetY = 0),
                e = document.body.scrollWidth - n.offsetWidth,
                i = document.body.offsetHeight - n.offsetHeight,
                t.offsetX > e && (t.offsetX = e),
                t.offsetY > i && (t.offsetY = i)),
                !1 !== r.drag.apply(n, [t]))
                    break;
                t.type = "mouseup";
            case "mouseup":
                h.event.remove(document, "mousemove mouseup", o),
                c.dragging && r.dragend && r.dragend.apply(n, [t]),
                l(n, !0),
                c.dragging = s.elem = null
            }
        }
        function a(t) {
            return Math.pow(t, 2)
        }
        function l(t, e) {
            t && (t.unselectable = e ? "off" : "on",
            t.onselectstart = function() {
                return e
            }
            ,
            document.selection && document.selection.empty && document.selection.empty(),
            t.style && (t.style.MozUserSelect = e ? "" : "none"))
        }
        (t = h.extend({
            not: ":input",
            handle: ".handle",
            distance: 0,
            which: 1,
            constrain: !0,
            drag: function(t) {
                h(this).css({
                    top: t.offsetY,
                    left: t.offsetX
                })
            }
        }, t || {})).distance = a(t.distance),
        this.bind("mousedown", {
            options: t
        }, o)
    }
}(jQuery),
$.select = function(t, e) {
    this.init(t, e)
}
,
$.select.defaultSettings = {
    inputable: !0,
    searchable: !0,
    wrapClass: "select-box",
    listClass: "option-list",
    menuHeight: 260,
    inputClass: "text",
    placeholder: ""
},
$.select.prototype = {
    init: function(t, e) {
        this._select = $(t),
        e = e || {};
        var i, n = {};
        for (i in $.select.defaultSettings)
            n[i] = undefined != e[i] ? e[i] : $.select.defaultSettings[i];
        this._settings = n;
        var s = this._select.actual("outerWidth") - 31;
        return this._el = $('<div class="' + this._settings.wrapClass + '"><span><i class="iconfont">&#xe660;</i></span></div>'),
        this._menu = $('<div class="' + this._settings.listClass + '" style="display:none"></div>'),
        this._optionsList = $("<ul></ul>"),
        this._settings.inputable ? this._input = $('<input type="text" class="' + this._settings.inputClass + '" style=" width:' + s + 'px; padding-right:20px;">') : this._input = $('<input type="text" readonly="readonly" class="' + this._settings.inputClass + '" style=" width:' + s + 'px; padding-right:20px;">'),
        this._menu.append(this._optionsList),
        this._el.append(this._input).append(this._menu),
        this._disabled = !1,
        this._options = [],
        this
    },
    addOption: function(t, e, i, n) {
        var s = (i = void 0 !== i ? '<img border="0" src="' + i + '" />&nbsp;' : "") + "<span>" + e + "</span>" + (n = void 0 !== n ? '&nbsp;<img border="0" src="' + n + '" />' : "");
        return this._options.push({
            value: t,
            text: e
        }),
        this._optionsList.append('<li data-value="' + t + '" data-index="' + (this._options.length - 1) + '"><a href="javascript:void(0)"><span>' + s + "</span></a></li>"),
        this
    },
    select: function(t) {
        var e = this._select.find("option:selected").val();
        this._select.val(t);
        for (var i = 0, n = this._options.length; i < n; i++)
            if (t == this._options[i].value) {
                this.updateSelectText(this._options[i]),
                this._select[0].selectedIndex = i;
                break
            }
        return e != t && this._select.trigger("change"),
        this
    },
    selectByText: function(t) {
        t = t || this._input.text();
        for (var e = 0, i = this._options.length; e < i; e++)
            if (t == this._options[e].text)
                return this._select.val(this._options[e].value),
                this._select[0].selectedIndex = e,
                this.updateSelectText(this._options[e]),
                this;
        return this._select.val(""),
        this
    },
    selectByIndex: function(t) {
        if (undefined !== this._options[t]) {
            var e = this._select.find("option[selected]").val()
              , i = this._select.find("option:eq(" + t + ")").val();
            return this._select.val(i),
            this.updateSelectText(this._options[t]),
            this._select[0].selectedIndex = t,
            e != i && this._select.trigger("change"),
            this
        }
    },
    search: function(t) {
        if (!(t = t || this._input.val()))
            return this._optionsList.find("li:not([_hidden])").show();
        for (var e = 0, i = this._options.length; e < i; e++)
            -1 !== this._options[e].text.indexOf(t) ? this._optionsList.find('li[data-index="' + e + '"]:not([_hidden])').show() : this._optionsList.find('li[data-index="' + e + '"]').hide();
        return this
    },
    updateSelectText: function(t) {
        return this._input && this._input.val(t.text),
        this
    },
    refresh: function(t) {
        this._options = [],
        this._optionsList.empty();
        var n = this;
        return this._select.find("option").each(function() {
            var t = $(this)
              , e = ""
              , i = "";
            t.data("str") && (e = t.data("str")),
            t.data("suffix") && (i = t.data("suffix")),
            n.addOption(t.attr("value"), t.text(), e, i),
            t.attr("selected") && n.select(t.attr("value"))
        }),
        t && this._options.length && this.select(this._options[0].value),
        this
    },
    showMenu: function() {
        return this._optionsList.find("li:not([_hidden])").show(),
        this._menu.show(),
        this._el.css("z-index", 3),
        this._menu.height() > this._settings.menuHeight && this._menu.css({
            height: this._settings.menuHeight + "px",
            "overflow-y": "auto"
        }),
        this
    },
    hideMenu: function() {
        return this._el.css("z-index", 1),
        this._menu.hide(),
        this
    },
    getMenu: function() {
        return this._menu ? this._menu : null
    },
    hideOption: function(t) {
        return this._menu.find("li").each(function() {
            undefined !== t && t != $(this).data("value") || $(this).hide().attr("_hidden", "hidden")
        }),
        this
    },
    showOption: function(t) {
        return this._menu.find("li").each(function() {
            undefined !== t && t != $(this).data("value") || $(this).show().removeAttr("_hidden")
        }),
        this
    },
    disabled: function() {
        this._disabled = !0,
        this._input.attr("disabled", "disabled"),
        this._select.attr("disabled", "disabled")
    },
    enabled: function() {
        this._disabled = !1,
        this._input.removeAttr("disabled"),
        this._select.removeAttr("disabled")
    },
    show: function(t) {
        return this._el.show(t),
        this
    },
    hide: function(t) {
        return this._el.hide(t),
        this
    },
    val: function() {
        return this._select.val()
    },
    render: function() {
        var n = this;
        return this._hoverMenu = !1,
        this._select.find("option").each(function() {
            var t = $(this)
              , e = ""
              , i = "";
            t.data("str") && (e = t.data("str")),
            t.data("suffix") && (i = t.data("suffix")),
            n.addOption(t.attr("value"), t.text(), e, i),
            "" != n._settings.placeholder ? n._input.attr("placeholder", n._settings.placeholder) : t.attr("selected") && n.select(t.attr("value"))
        }),
        this._select.attr("disabled") && n.disabled(),
        this._el.find("input, i").bind("mouseenter mouseleave click", function(t) {
            "mouseenter" == t.type ? n._hoverMenu = !0 : "mouseleave" == t.type ? n._hoverMenu = !1 : n._disabled || n._input.focus()
        }),
        this._settings.inputable || this._input.attr("readonly", !0),
        this._input.bind("focus blur keyup", function(t) {
            var e;
            "focus" == t.type ? n._disabled || n.showMenu() : "blur" == t.type ? n._hoverMenu || setTimeout(function() {
                n.hideMenu()
            }, 300) : !n._settings.searchable || (65 <= (e = t.keyCode ? t.keyCode : t.which) || 8 == e || 16 == e) && n.search()
        }),
        this._menu.bind("mouseenter mouseleave click", function(t) {
            var e;
            "mouseenter" == t.type ? n._hoverMenu = !0 : "mouseleave" == t.type ? n._hoverMenu = !1 : (!(e = t.srcElement ? $(t.srcElement) : $(t.target)).is("li") && e.parents("li").size() && (e = e.parents("li")),
            e.is("li") && (n.select(e.data("value")),
            n.hideMenu()),
            e.is("li") && "javascript:void(0)" == e.find("a").attr("href") && t.preventDefault())
        }),
        this._el.insertAfter(this._select),
        this._select.hide(),
        this
    }
},
$.fn.select = function(t) {
    return new $.select(this,t || {}).render()
}
,
function(n) {
    n.window = function(t) {
        var e = this;
        if (this.opts = n.extend({}, n.window.defaults, t),
        this.fixIE = n.browser.msie && n.browser.version < 7,
        this.id = Math.random(),
        this.opts.applyTo) {
            var i = n(this.opts.applyTo).css({
                zIndex: 8001
            });
            return this.dialog = {
                container: i,
                header: i.find(".window-header"),
                body: i.find(".window-body"),
                footer: i.find(".window-footer")
            },
            this.bh = n("#fix-height"),
            this.bh.size() || (this.bh = n("<div>").attr("id", "fix-height").css({
                position: "absolute",
                height: "100%",
                width: 1,
                left: -100,
                top: 0
            }).appendTo(document.body)),
            this.fn = {
                show: this.opts.show,
                close: this.opts.close
            },
            this.fixIE && (this.iframe = n('<iframe src="javascript:false;">').css({
                opacity: 0,
                position: "absolute",
                zIndex: 1e3,
                width: "100%",
                top: 0,
                left: 0
            }).hide().appendTo("body")),
            this.opts.center && (this.opts.draggable = !1),
            this.opts.draggable && n.fn.drag && this.dialog.container.drag(this.opts.drag),
            n(".mask").size() ? this.mask = n(".mask") : this.mask = n('<div class="mask">').css({
                zIndex: 8e3
            }).appendTo(document.body).hide(),
            this.dialog.container.hide().appendTo(document.body),
            this.dialog.container.find("." + this.opts.closeCls).live("click", function(t) {
                t.preventDefault(),
                e.close()
            }),
            this.dialog.container.css({
                height: this.opts.height,
                width: this.opts.width
            }),
            this
        }
    }
    ,
    n.window.prototype = {
        show: function() {
            this.iframe && this.iframe.show(),
            n(document.body).find(".mask").size() || (this.mask = n('<div class="mask">').css({
                zIndex: 8e3
            }).appendTo(document.body).hide()),
            n("#fix-height").size() || (this.bh = n("<div>").attr("id", "fix-height").css({
                position: "absolute",
                height: "100%",
                width: 1,
                left: -100,
                top: 0
            }).appendTo(document.body)),
            this.mask.show(),
            this.resizeMask(),
            this.dialog.container.show(),
            this.dialog.container.removeClass("window-scale-in window-scale-out").addClass("window-scale-in"),
            this.center(),
            n.isFunction(this.fn.show) && this.fn.show.apply(this, [this.dialog]),
            this.bindEvents()
        },
        close: function() {
            this.iframe && this.iframe.hide(),
            this.dialog.container.removeClass("window-scale-in window-scale-out").addClass("window-scale-out");
            var t = this;
            this.timeout && clearTimeout(this.timeout),
            this.timeout = setTimeout(function() {
                t.mask.hide(),
                t.dialog.container.hide(),
                clearTimeout(t.timeout)
            }, 300),
            n.isFunction(this.fn.close) && this.fn.close.apply(this, [this.dialog]),
            this.unbindEvents();
            this.opts.destroy && this.destroy()
        },
        resizeMask: function() {
            var t, e;
            this.fixIE ? (t = Math.max(document.body.offsetHeight, this.bh.height()),
            e = document.body.offsetWidth,
            this.mask.css({
                height: t,
                width: e
            }),
            this.iframe && this.iframe.css({
                height: t,
                width: e
            })) : this.mask.css("position", "fixed")
        },
        center: function() {
            var t = (document.body.offsetWidth - n(this.dialog.container).width()) / 2
              , e = (Math.min(this.bh.height(), document.documentElement.offsetHeight) - this.dialog.container.height()) / 2 + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            this.dialog.container.css({
                left: t,
                top: e
            }),
            this.dialog.container.offset().top < 0 && this.dialog.container.css({
                top: "0px"
            })
        },
        esc: function(t) {
            var e = window.event || t;
            !this.opts.esc && 27 == e.keyCode || 27 != e.keyCode && 27 != e.which || (this.close(),
            this.opts.destroy && this.destroy())
        },
        bindEvents: function() {
            var e = this;
            n(document).bind("keydown click", function(t) {
                "click" == t.type ? e.opts.blankCls && 0 == n(t.target).closest(e.opts.blankCls).size() && e.dialog.container.is(":visible") && e.close() : e.esc(t)
            }),
            this.opts.center && n(window).bind("resize scroll", function() {
                e.center()
            }),
            this.fixIE && n(window).bind("resize", function() {
                e.resizeMask()
            })
        },
        unbindEvents: function() {
            var e = this;
            n(document).unbind("keydown click", function(t) {
                "click" == t.type ? e.opts.blankCls && 0 == n(t.target).closest(e.opts.blankCls).size() && e.dialog.container.is(":visible") && e.close() : e.esc(t)
            }),
            this.opts.center && n(window).unbind("resize scroll", function() {
                e.center()
            }),
            this.fixIE && n(window).unbind("resize", function() {
                e.resizeMask()
            })
        },
        destroy: function() {
            return this.iframe && this.iframe.remove(),
            this.mask.remove(),
            this.bh.remove(),
            this.dialog.container.remove(),
            null
        },
        find: function(t) {
            return this.dialog.container.find(t)
        }
    },
    n.fn.window = function(t) {
        if (this.length) {
            var e = n.data(this[0], "window");
            return e ? e : (e = new n.window(n.extend(t, {
                applyTo: this[0],
                id: this[0].id
            })),
            n.data(this[0], "window", e),
            e)
        }
        t && t.debug && e.console && console.warn("nothing selected, can't open window, returning nothing")
    }
    ,
    n.window.defaults = {
        id: "window",
        width: !1,
        height: !1,
        closeCls: "close",
        blankCls: null,
        draggable: !1,
        center: !1,
        destroy: !1,
        show: null,
        close: null,
        esc: !0
    }
}(jQuery),
function() {
    var p = function() {
        var s = [].slice.call(arguments);
        return s.push(p.options),
        s[0].match(/^\\s*#([\\w:\\-\\.]+)\\s*$/gim) && s[0].replace(/^\\s*#([\\w:\\-\\.]+)\\s*$/gim, function(t, e) {
            var i = document
              , n = i && i.getElementById(e);
            s[0] = n ? n.value || n.innerHTML : t
        }),
        p.documentHTML && (p.compile.call(p, p.documentHTML),
        p.documentHTML = ""),
        1 == arguments.length ? p.compile.apply(p, s) : 2 <= arguments.length ? p.to_html.apply(p, s) : void 0
    }
      , e = {
        escapehash: {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2f;"
        },
        escapereplace: function(t) {
            return e.escapehash[t]
        },
        escaping: function(t) {
            return "string" != typeof t ? t : t.replace(/[&<>"']/gim, this.escapereplace)
        },
        detection: function(t) {
            return void 0 === t ? "" : t
        }
    }
      , o = function(t) {
        if ("undefined" != typeof console) {
            if (console.warn)
                return void console.warn(t);
            if (console.log)
                return void console.log(t)
        }
        throw t
    }
      , a = function(t, e) {
        if ((t = t !== Object(t) ? {} : t).__proto__)
            return t.__proto__ = e,
            t;
        var i, n = function() {}, s = Object.create ? Object.create(e) : (n.prototype = e,
        new n);
        for (i in t)
            t.hasOwnProperty(i) && (s[i] = t[i]);
        return s
    };
    p.__cache = {},
    p.version = "0.6.15",
    p.settings = {},
    p.documentHTML = "",
    p.tags = {
        operationOpen: "{@",
        operationClose: "}",
        interpolateOpen: "\\\\\${",
        interpolateClose: "}",
        noneencodeOpen: "\\$\\\${",
        noneencodeClose: "}",
        commentOpen: "\\{#",
        commentClose: "\\}"
    },
    p.options = {
        cache: !0,
        strip: !0,
        errorhandling: !0,
        detection: !0,
        _method: a({
            __escapehtml: e,
            __throw: o,
            __juicer: p
        }, {})
    },
    p.tagInit = function() {
        var t = p.tags.operationOpen + "each\\\\s*([^}]*?)\\\\s*as\\\\s*(\\\\w*?)\\\\s*(,\\\\s*\\\\w*?)?" + p.tags.operationClose
          , e = p.tags.operationOpen + "\\\\/each" + p.tags.operationClose
          , i = p.tags.operationOpen + "if\\\\s*([^}]*?)" + p.tags.operationClose
          , n = p.tags.operationOpen + "\\\\/if" + p.tags.operationClose
          , s = p.tags.operationOpen + "else" + p.tags.operationClose
          , r = p.tags.operationOpen + "else if\\\\s*([^}]*?)" + p.tags.operationClose
          , o = p.tags.interpolateOpen + "([\\\\s\\\\S]+?)" + p.tags.interpolateClose
          , a = p.tags.noneencodeOpen + "([\\\\s\\\\S]+?)" + p.tags.noneencodeClose
          , l = p.tags.commentOpen + "[^}]*?" + p.tags.commentClose
          , h = p.tags.operationOpen + "each\\\\s*(\\\\w*?)\\\\s*in\\\\s*range\\\\(([^}]+?)\\\\s*,\\\\s*([^}]+?)\\\\)" + p.tags.operationClose
          , c = p.tags.operationOpen + "include\\\\s*([^}]*?)\\\\s*,\\\\s*([^}]*?)" + p.tags.operationClose
          , d = p.tags.operationOpen + "helper\\\\s*([^}]*?)\\\\s*" + p.tags.operationClose
          , u = p.tags.operationOpen + "\\\\/helper" + p.tags.operationClose;
        p.settings.forstart = new RegExp(t,"igm"),
        p.settings.forend = new RegExp(e,"igm"),
        p.settings.ifstart = new RegExp(i,"igm"),
        p.settings.ifend = new RegExp(n,"igm"),
        p.settings.elsestart = new RegExp(s,"igm"),
        p.settings.elseifstart = new RegExp(r,"igm"),
        p.settings.interpolate = new RegExp(o,"igm"),
        p.settings.noneencode = new RegExp(a,"igm"),
        p.settings.inlinecomment = new RegExp(l,"igm"),
        p.settings.rangestart = new RegExp(h,"igm"),
        p.settings.include = new RegExp(c,"igm"),
        p.settings.helperRegister = new RegExp(d + "([\\\\s\\\\S]*?)" + u,"igm")
    }
    ,
    p.tagInit(),
    p.set = function(t, e) {
        var n = this
          , i = function(t, e) {
            var i = t.match(/^tag::(.*)$/i);
            return i ? (n.tags[i[1]] = e.replace(/[\\$\\(\\)\\[\\]\\+\\^\\{\\}\\?\\*\\|\\.]/gim, function(t) {
                return "\\\\" + t
            }),
            void n.tagInit()) : void (n.options[t] = e)
        };
        if (2 !== arguments.length) {
            if (t === Object(t))
                for (var s in t)
                    t.hasOwnProperty(s) && i(s, t[s])
        } else
            i(t, e)
    }
    ,
    p.register = function(t, e) {
        var i = this.options._method;
        return !i.hasOwnProperty(t) && (i[t] = e)
    }
    ,
    p.unregister = function(t) {
        var e = this.options._method;
        if (e.hasOwnProperty(t))
            return delete e[t]
    }
    ,
    p.template = function(t) {
        var n = this;
        this.options = t,
        this.__interpolate = function(t, e, i) {
            var n, s = t.split("|"), r = s[0] || "";
            return 1 < s.length && (t = s.shift(),
            r = "_method." + (n = s.shift().split(",")).shift() + ".call(this, " + [t].concat(n) + ")"),
            "<%= " + (e ? "_method.__escapehtml.escaping" : "") + "(" + (i && !1 === i.detection ? "" : "_method.__escapehtml.detection") + "(" + r + ")) %>"
        }
        ,
        this.__removeShell = function(t, i) {
            var r = 0;
            return t = t.replace(p.settings.helperRegister, function(t, e, i) {
                var n = function(t) {
                    var e, i, n, s = /,/, r = /^\\s*(_?)(\\S+?)\\1\\s*$/, o = [];
                    "function" == typeof t ? t.length && (e = t.toString()) : "string" == typeof t && (e = t),
                    n = (e = e.trim()).match(/^function\\s*[^\\(]*\\(\\s*([^\\)]*)\\)/m),
                    i = e.match(/^function[^{]+{([\\s\\S]*)}/m)[1].trim();
                    for (var a = 0; a < n[1].split(s).length; a++) {
                        n[1].split(s)[a].replace(r, function(t, e, i) {
                            o.push(i)
                        })
                    }
                    return [o, i]
                }(i)
                  , s = n[0]
                  , r = n[1]
                  , o = new Function(s.join(","),r);
                return p.register(e, o),
                t
            }).replace(p.settings.forstart, function(t, e, i, n) {
                var i = i || "value"
                  , n = n && n.substr(1)
                  , s = "i" + r++;
                return "<% ~function() {for(var " + s + " in " + e + ") {if(" + e + ".hasOwnProperty(" + s + ")) {var " + i + "=" + e + "[" + s + "];" + (n ? "var " + n + "=" + s + ";" : "") + " %>"
            }).replace(p.settings.forend, "<% }}}(); %>").replace(p.settings.ifstart, function(t, e) {
                return "<% if(" + e + ") { %>"
            }).replace(p.settings.ifend, "<% } %>").replace(p.settings.elsestart, function(t) {
                return "<% } else { %>"
            }).replace(p.settings.elseifstart, function(t, e) {
                return "<% } else if(" + e + ") { %>"
            }).replace(p.settings.noneencode, function(t, e) {
                return n.__interpolate(e, !1, i)
            }).replace(p.settings.interpolate, function(t, e) {
                return n.__interpolate(e, !0, i)
            }).replace(p.settings.inlinecomment, "").replace(p.settings.rangestart, function(t, e, i, n) {
                var s = "j" + r++;
                return "<% ~function() {for(var " + s + "=" + i + ";" + s + "<" + n + ";" + s + "++) {{var " + e + "=" + s + "; %>"
            }).replace(p.settings.include, function(t, e, i) {
                return e.match(/^file\\:\\/\\//gim) ? t : "<%= _method.__juicer(" + e + ", " + i + "); %>"
            }),
            i && !1 === i.errorhandling || (t = "<% try { %>" + t,
            t += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'),
            t
        }
        ,
        this.__toNative = function(t, e) {
            return this.__convert(t, !e || e.strip)
        }
        ,
        this.__lexicalAnalyze = function(t) {
            var i = []
              , n = []
              , e = ""
              , s = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"]
              , r = function(t, e) {
                if (Array.prototype.indexOf && t.indexOf === Array.prototype.indexOf)
                    return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }
              , o = function(t, e) {
                if (e = e.match(/\\w+/gim)[0],
                -1 === r(i, e) && -1 === r(s, e) && -1 === r(n, e)) {
                    if ("undefined" != typeof window && "function" == typeof window[e] && window[e].toString().match(/^\\s*?function \\w+\\(\\) \\{\\s*?\\[native code\\]\\s*?\\}\\s*?$/i))
                        return t;
                    if ("undefined" != typeof global && "function" == typeof global[e] && global[e].toString().match(/^\\s*?function \\w+\\(\\) \\{\\s*?\\[native code\\]\\s*?\\}\\s*?$/i))
                        return t;
                    if ("function" == typeof p.options._method[e] || p.options._method.hasOwnProperty(e))
                        return n.push(e),
                        t;
                    if (e.match(/^\\d+/gim))
                        return t;
                    i.push(e)
                }
                return t
            };
            t.replace(p.settings.forstart, o).replace(p.settings.interpolate, o).replace(p.settings.ifstart, o).replace(p.settings.elseifstart, o).replace(p.settings.include, o).replace(/[\\+\\-\\*\\/%!\\?\\|\\^&~<>=,\\(\\)\\[\\]]\\s*([A-Za-z_0-9]+)/gim, o);
            for (var a = 0; a < i.length; a++)
                e += "var " + i[a] + "=_." + i[a] + ";";
            for (a = 0; a < n.length; a++)
                e += "var " + n[a] + "=_method." + n[a] + ";";
            return "<% " + e + " %>"
        }
        ,
        this.__convert = function(t, e) {
            var i = [].join("");
            return i += "'use strict';",
            i += "var _=_||{};",
            (i += "var _out='';_out+='") + (!1 !== e ? t.replace(/\\\\/g, "\\\\\\\\").replace(/[\\r\\t\\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\\t").split("'").join("\\\\'").split("\\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : t.replace(/\\\\/g, "\\\\\\\\").replace(/[\\r]/g, "\\\\r").replace(/[\\t]/g, "\\\\t").replace(/[\\n]/g, "\\\\n").replace(/'(?=[^%]*%>)/g, "\\t").split("'").join("\\\\'").split("\\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\\\r\\\\n]\\\\s+[\\\\r\\\\n]/g, '\\\\r\\\\n');")
        }
        ,
        this.parse = function(t, e) {
            var i = this;
            return e && !1 === e.loose || (t = this.__lexicalAnalyze(t) + t),
            t = this.__removeShell(t, e),
            t = this.__toNative(t, e),
            this._render = new Function("_, _method",t),
            this.render = function(t, e) {
                return e && e === n.options._method || (e = a(e, n.options._method)),
                i._render.call(this, t, e)
            }
            ,
            this
        }
    }
    ,
    p.compile = function(t, i) {
        i && i === this.options || (i = a(i, this.options));
        var n = this
          , e = function(t) {
            return i.cachestore ? i.cachestore.get(t) : n.__cache[t]
        }
          , s = function(t, e) {
            return i.cachestore ? i.cachestore.set(t, e) : n.__cache[t] = e
        };
        try {
            var r = e(t) ? e(t) : new this.template(this.options).parse(t, i);
            return i && !1 === i.cache || s(t, r),
            r
        } catch (t) {
            return o("Juicer Compile Exception: " + t.message),
            {
                render: function() {}
            }
        }
    }
    ,
    p.to_html = function(t, e, i) {
        return i && i === this.options || (i = a(i, this.options)),
        this.compile(t, i).render(e, i._method)
    }
    ,
    "undefined" != typeof global && "undefined" == typeof window && p.set("cache", !1),
    "undefined" != typeof document && document.body && (p.documentHTML = document.body.innerHTML),
    "undefined" != typeof module && module.exports ? module.exports = p : this.juicer = p
}();
var hexcase = 0
  , b64pad = ""
  , chrsz = 8;
function hex_md5(t) {
    return binl2hex(core_md5(str2binl(t), t.length * chrsz))
}
function b64_md5(t) {
    return binl2b64(core_md5(str2binl(t), t.length * chrsz))
}
function str_md5(t) {
    return binl2str(core_md5(str2binl(t), t.length * chrsz))
}
function hex_hmac_md5(t, e) {
    return binl2hex(core_hmac_md5(t, e))
}
function b64_hmac_md5(t, e) {
    return binl2b64(core_hmac_md5(t, e))
}
function str_hmac_md5(t, e) {
    return binl2str(core_hmac_md5(t, e))
}
function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}
function core_md5(t, e) {
    t[e >> 5] |= 128 << e % 32,
    t[14 + (e + 64 >>> 9 << 4)] = e;
    for (var i = 1732584193, n = -271733879, s = -1732584194, r = 271733878, o = 0; o < t.length; o += 16) {
        var a = i
          , l = n
          , h = s
          , c = r
          , i = md5_ff(i, n, s, r, t[o + 0], 7, -680876936)
          , r = md5_ff(r, i, n, s, t[o + 1], 12, -389564586)
          , s = md5_ff(s, r, i, n, t[o + 2], 17, 606105819)
          , n = md5_ff(n, s, r, i, t[o + 3], 22, -1044525330);
        i = md5_ff(i, n, s, r, t[o + 4], 7, -176418897),
        r = md5_ff(r, i, n, s, t[o + 5], 12, 1200080426),
        s = md5_ff(s, r, i, n, t[o + 6], 17, -1473231341),
        n = md5_ff(n, s, r, i, t[o + 7], 22, -45705983),
        i = md5_ff(i, n, s, r, t[o + 8], 7, 1770035416),
        r = md5_ff(r, i, n, s, t[o + 9], 12, -1958414417),
        s = md5_ff(s, r, i, n, t[o + 10], 17, -42063),
        n = md5_ff(n, s, r, i, t[o + 11], 22, -1990404162),
        i = md5_ff(i, n, s, r, t[o + 12], 7, 1804603682),
        r = md5_ff(r, i, n, s, t[o + 13], 12, -40341101),
        s = md5_ff(s, r, i, n, t[o + 14], 17, -1502002290),
        i = md5_gg(i, n = md5_ff(n, s, r, i, t[o + 15], 22, 1236535329), s, r, t[o + 1], 5, -165796510),
        r = md5_gg(r, i, n, s, t[o + 6], 9, -1069501632),
        s = md5_gg(s, r, i, n, t[o + 11], 14, 643717713),
        n = md5_gg(n, s, r, i, t[o + 0], 20, -373897302),
        i = md5_gg(i, n, s, r, t[o + 5], 5, -701558691),
        r = md5_gg(r, i, n, s, t[o + 10], 9, 38016083),
        s = md5_gg(s, r, i, n, t[o + 15], 14, -660478335),
        n = md5_gg(n, s, r, i, t[o + 4], 20, -405537848),
        i = md5_gg(i, n, s, r, t[o + 9], 5, 568446438),
        r = md5_gg(r, i, n, s, t[o + 14], 9, -1019803690),
        s = md5_gg(s, r, i, n, t[o + 3], 14, -187363961),
        n = md5_gg(n, s, r, i, t[o + 8], 20, 1163531501),
        i = md5_gg(i, n, s, r, t[o + 13], 5, -1444681467),
        r = md5_gg(r, i, n, s, t[o + 2], 9, -51403784),
        s = md5_gg(s, r, i, n, t[o + 7], 14, 1735328473),
        i = md5_hh(i, n = md5_gg(n, s, r, i, t[o + 12], 20, -1926607734), s, r, t[o + 5], 4, -378558),
        r = md5_hh(r, i, n, s, t[o + 8], 11, -2022574463),
        s = md5_hh(s, r, i, n, t[o + 11], 16, 1839030562),
        n = md5_hh(n, s, r, i, t[o + 14], 23, -35309556),
        i = md5_hh(i, n, s, r, t[o + 1], 4, -1530992060),
        r = md5_hh(r, i, n, s, t[o + 4], 11, 1272893353),
        s = md5_hh(s, r, i, n, t[o + 7], 16, -155497632),
        n = md5_hh(n, s, r, i, t[o + 10], 23, -1094730640),
        i = md5_hh(i, n, s, r, t[o + 13], 4, 681279174),
        r = md5_hh(r, i, n, s, t[o + 0], 11, -358537222),
        s = md5_hh(s, r, i, n, t[o + 3], 16, -722521979),
        n = md5_hh(n, s, r, i, t[o + 6], 23, 76029189),
        i = md5_hh(i, n, s, r, t[o + 9], 4, -640364487),
        r = md5_hh(r, i, n, s, t[o + 12], 11, -421815835),
        s = md5_hh(s, r, i, n, t[o + 15], 16, 530742520),
        i = md5_ii(i, n = md5_hh(n, s, r, i, t[o + 2], 23, -995338651), s, r, t[o + 0], 6, -198630844),
        r = md5_ii(r, i, n, s, t[o + 7], 10, 1126891415),
        s = md5_ii(s, r, i, n, t[o + 14], 15, -1416354905),
        n = md5_ii(n, s, r, i, t[o + 5], 21, -57434055),
        i = md5_ii(i, n, s, r, t[o + 12], 6, 1700485571),
        r = md5_ii(r, i, n, s, t[o + 3], 10, -1894986606),
        s = md5_ii(s, r, i, n, t[o + 10], 15, -1051523),
        n = md5_ii(n, s, r, i, t[o + 1], 21, -2054922799),
        i = md5_ii(i, n, s, r, t[o + 8], 6, 1873313359),
        r = md5_ii(r, i, n, s, t[o + 15], 10, -30611744),
        s = md5_ii(s, r, i, n, t[o + 6], 15, -1560198380),
        n = md5_ii(n, s, r, i, t[o + 13], 21, 1309151649),
        i = md5_ii(i, n, s, r, t[o + 4], 6, -145523070),
        r = md5_ii(r, i, n, s, t[o + 11], 10, -1120210379),
        s = md5_ii(s, r, i, n, t[o + 2], 15, 718787259),
        n = md5_ii(n, s, r, i, t[o + 9], 21, -343485551),
        i = safe_add(i, a),
        n = safe_add(n, l),
        s = safe_add(s, h),
        r = safe_add(r, c)
    }
    return Array(i, n, s, r)
}
function md5_cmn(t, e, i, n, s, r) {
    return safe_add(bit_rol(safe_add(safe_add(e, t), safe_add(n, r)), s), i)
}
function md5_ff(t, e, i, n, s, r, o) {
    return md5_cmn(e & i | ~e & n, t, e, s, r, o)
}
function md5_gg(t, e, i, n, s, r, o) {
    return md5_cmn(e & n | i & ~n, t, e, s, r, o)
}
function md5_hh(t, e, i, n, s, r, o) {
    return md5_cmn(e ^ i ^ n, t, e, s, r, o)
}
function md5_ii(t, e, i, n, s, r, o) {
    return md5_cmn(i ^ (e | ~n), t, e, s, r, o)
}
function core_hmac_md5(t, e) {
    var i = str2binl(t);
    16 < i.length && (i = core_md5(i, t.length * chrsz));
    for (var n = Array(16), s = Array(16), r = 0; r < 16; r++)
        n[r] = 909522486 ^ i[r],
        s[r] = 1549556828 ^ i[r];
    var o = core_md5(n.concat(str2binl(e)), 512 + e.length * chrsz);
    return core_md5(s.concat(o), 640)
}
function safe_add(t, e) {
    var i = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
}
function bit_rol(t, e) {
    return t << e | t >>> 32 - e
}
function str2binl(t) {
    for (var e = Array(), i = (1 << chrsz) - 1, n = 0; n < t.length * chrsz; n += chrsz)
        e[n >> 5] |= (t.charCodeAt(n / chrsz) & i) << n % 32;
    return e
}
function binl2str(t) {
    for (var e = "", i = (1 << chrsz) - 1, n = 0; n < 32 * t.length; n += chrsz)
        e += String.fromCharCode(t[n >> 5] >>> n % 32 & i);
    return e
}
function binl2hex(t) {
    for (var e = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * t.length; n++)
        i += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
    return i
}
function binl2b64(t) {
    for (var e = "", i = 0; i < 4 * t.length; i += 3)
        for (var n = (t[i >> 2] >> i % 4 * 8 & 255) << 16 | (t[i + 1 >> 2] >> (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >> 2] >> (i + 2) % 4 * 8 & 255, s = 0; s < 4; s++)
            8 * i + 6 * s > 32 * t.length ? e += b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - s) & 63);
    return e
}
!function(t) {
    t.OR = t.OR || {},
    t.OR.Bar = {
        style: {
            main: "position:relative;margin: 20px 0",
            "pc-bar-box": "position: relative;overflow: hidden;height: 15px;width: 300px;background-color: #F2F2F2;border: 1px #E4E4E4 solid;margin: 0 auto;",
            "pc-slider": "position: absolute;height: 15px;width: 300px;left: -300px;background-color: #1AFA29;",
            "pc-schedule-memo": "width: 300px;margin: 0 auto;font-size: 12px;",
            "mb-bar-box": "width: 100px;height: 100px;position: relative;",
            "wrapper-right": "width: 50px;height: 100px;position: absolute;top:0;overflow: hidden;right:0;",
            "wrapper-left": "width: 50px;height: 100px;position: absolute;top:0;overflow: hidden;left:0;",
            "right-circle": "width: 80px;height: 80px;border-radius: 50%;position: absolute;top:0;border-top: 10px solid #1AFA29;border-right: 10px solid #1AFA29;border-bottom:10px solid #F2F2F2;border-left:10px solid #F2F2F2;right:0;transform: rotate(-135deg); -webkit-transform: rotate(-135deg);",
            "left-circle": "width: 80px;height: 80px;border-radius: 50%;position: absolute;top:0;border-top: 10px solid #1AFA29;border-right: 10px solid #1AFA29;border-bottom:10px solid #F2F2F2;border-left:10px solid #F2F2F2;left:0;transform: rotate(45deg); -webkit-transform: rotate(45deg);",
            "perc-box": "position: absolute;top: 10px; left: 10px;height: 80px;width: 80px;line-height: 80px;text-align: center;font-size: 25px;color: #1AFA29;"
        },
        speed: 2,
        stopSpot: 0,
        perc: 0,
        el: null,
        device: "pc",
        timer: null,
        moveSlider: null,
        getRotate: function(t) {
            var e = /^rotate\\((-?\\d+)(\\.\\d+)?deg\\)?/.exec(t);
            if (null !== e)
                return e[2] ? parseFloat(e[1] + e[2], 10) : parseFloat(e[1], 10)
        },
        init: function(t, e) {
            var i, n, s, r, o, a, l;
            null == this.el && (this.el = document.getElementById(t),
            this.device = e),
            "pc" == e && (this.el.style.cssText = this.style.main,
            (i = document.getElementById("bar_box")) || ((i = document.createElement("div")).id = "bar_box"),
            i.style.cssText = this.style["pc-bar-box"],
            (n = document.createElement("div")).id = "slider",
            n.style.cssText = this.style["pc-slider"],
            i.innerHTML = n.outerHTML,
            this.el.innerHTML = i.outerHTML,
            null == this.moveSlider && (this.moveSlider = function(t) {
                t = parseFloat(t, 10) || 1;
                var e = document.getElementById("slider")
                  , i = parseFloat(e.style.left, 10) + t;
                i >= OR.Bar.stopSpot && (i = OR.Bar.stopSpot,
                clearInterval(OR.Bar.timer)),
                e.style.left = i + "px"
            }
            ),
            this.setStopSpot(-20)),
            "mb" == e && (this.el.style.cssText = this.style["mb-bar-box"],
            document.getElementById("left_slider") && document.getElementById("right_slider") ? (document.getElementById("left_slider").style.cssText = this.style["left-circle"],
            document.getElementById("right_slider").style.cssText = this.style["right-circle"]) : (s = document.createElement("div"),
            r = document.createElement("div"),
            o = document.createElement("div"),
            a = document.createElement("div"),
            s.style.cssText = this.style["wrapper-left"],
            r.style.cssText = this.style["wrapper-right"],
            o.style.cssText = this.style["left-circle"],
            a.style.cssText = this.style["right-circle"],
            o.id = "left_slider",
            a.id = "right_slider",
            s.appendChild(o),
            r.appendChild(a),
            this.el.appendChild(s),
            this.el.appendChild(r),
            (l = document.createElement("div")).style.cssText = this.style["perc-box"],
            l.id = "perc",
            this.el.appendChild(l)),
            null == this.moveSlider && (this.moveSlider = function(t) {
                t = parseFloat(t, 10) || 1;
                var e, i, n = document.getElementById("left_slider"), s = document.getElementById("right_slider"), r = OR.Bar.getRotate(s.style.transform);
                45 <= r ? ((e = OR.Bar.getRotate(n.style.transform) + t) > OR.Bar.stopSpot && (e = OR.Bar.stopSpot,
                clearInterval(OR.Bar.timer)),
                n.style.transform = "rotate(" + e + "deg)",
                this.perc = Math.round((e + 135) / 360 * 100)) : 45 < r + t ? (s.style.transform = "rotate(45deg)",
                (e = OR.Bar.getRotate(n.style.transform) + t - 45 + r) > OR.Bar.stopSpot && (e = OR.Bar.stopSpot,
                clearInterval(OR.Bar.timer)),
                n.style.transform = "rotate(" + e + "deg)",
                this.perc = Math.round((e + 135) / 360 * 100)) : ((i = r + t) > OR.Bar.stopSpot && (i = OR.Bar.stopSpot,
                clearInterval(OR.Bar.timer)),
                s.style.transform = "rotate(" + i + "deg)",
                this.perc = Math.round((i + 135) / 360 * 100)),
                document.getElementById("perc").innerText = OR.Bar.getPerc()
            }
            ),
            this.setStopSpot(225))
        },
        create: function(t, e, i) {
            return this.init(t, e),
            i = i || 200,
            this.begin(i),
            this
        },
        setSpeed: function(t) {
            return this.speed = t,
            this
        },
        setStopSpot: function(t) {
            return this.stopSpot = t,
            this
        },
        setMemo: function(t) {
            var e;
            return document.getElementById("schedule_memo") ? (document.getElementById("schedule_memo").style.cssText = this.style["pc-schedule-memo"],
            document.getElementById("schedule_memo").innerText = t) : ((e = document.createElement("div")).id = "schedule_memo",
            e.style.cssText = this.style["pc-schedule-memo"],
            e.innerText = t,
            this.el.appendChild(e)),
            this
        },
        getPerc: function() {
            return this.perc + "%"
        },
        again: function(t) {
            return clearInterval(this.timer),
            this.timer = setInterval(function() {
                OR.Bar.moveSlider(OR.Bar.speed)
            }, t),
            this
        },
        stop: function(t) {
            clearInterval(this.timer),
            t !== undefined && t()
        },
        begin: function(t) {
            null !== this.timer && clearInterval(this.timer),
            this.timer = setInterval(function() {
                OR.Bar.moveSlider(OR.Bar.speed)
            }, t)
        },
        end: function(t, e) {
            var i, n;
            e = e || 1e3,
            "pc" == this.device && (n = 0 - parseFloat(document.getElementById("slider").style.left, 10),
            this.setStopSpot(0),
            this.setSpeed(n / (e / 20)),
            this.again(20)),
            "mb" == this.device && (45 <= (i = this.getRotate(document.getElementById("right_slider").style.transform)) && (i = this.getRotate(document.getElementById("left_slider").style.transform)),
            n = 225 - i,
            this.setStopSpot(225),
            this.setSpeed(n / (e / 20)),
            this.again(20)),
            setTimeout(function() {
                clearInterval(this.timer),
                t !== undefined && t()
            }, e)
        }
    }
}(window),
function(t, n) {
    var s = {}
      , o = {
        templateStatus: {},
        getTemplate: function(t, e) {
            var i, n, s, r = (i = t,
            n = document.createElement("iframe"),
            s = "./templates/" + i + "/index.html?" + Math.random(),
            n.id = "template_" + i,
            n.src = s,
            n.style.display = "none",
            n);
            $("body").append(r),
            o.templateStatus[t] = 0,
            $(r).on("load", function() {
                o.templateStatus[t] = 1,
                o.watch($("#template_" + t)[0].contentWindow.templateExport, function(t) {
                    "function" == typeof e && e(t)
                })
            })
        },
        watch: function(t, e) {
            if ("function" != typeof e)
                return console.error(fun + " is not a function!");
            s[t] = {
                val: n,
                func: e
            }
        },
        getData: function(t) {
            return s[t] === n ? console.error(t + " does not exist!") : s[t].val
        },
        setData: function(t, e) {
            if (s[t] === n)
                return console.error(t + " does not exist!");
            var i = s[t].val;
            s[t].val = e,
            s[t].func(e, i)
        },
        bind: function(t) {
            var e = [].slice.call(arguments, 1);
            "function" == typeof t && t.apply(top, e)
        }
    };
    t.store = t.parent.store || o
}(window),
function(t, e) {
    "object" == typeof module && module.exports ? module.exports = t.document ? e(t) : e : t.Highcharts = e(t)
}("undefined" != typeof window ? window : this, function(t) {
    var e, i, n, s, r, o, a, l, h, c, d, u, p, f, N, g, m, y, M, v, x, C, b, D, w, k, A, _, I, T, L, S, P, O, E, R, z, B, F, H, j, W, X, Y, G, $, q, V, U, K, Z, J, Q, tt, et, it, nt, st, rt, ot, at, lt, ht, ct, dt, ut, pt, ft, gt, mt, yt, vt, xt, bt, wt, kt, Tt, St, Mt, Ct, At, Lt, Pt, Ot, Et, Nt = (e = void 0 === t ? window : t,
    i = e.document,
    n = e.navigator && e.navigator.userAgent || "",
    s = i && i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
    r = /(edge|msie|trident)/i.test(n) && !e.opera,
    o = -1 !== n.indexOf("Firefox"),
    a = -1 !== n.indexOf("Chrome"),
    l = o && parseInt(n.split("Firefox/")[1], 10) < 4,
    e.Highcharts ? e.Highcharts.error(16, !0) : {
        product: "Highcharts",
        version: "6.1.0",
        deg2rad: 2 * Math.PI / 360,
        doc: i,
        hasBidiBug: l,
        hasTouch: i && void 0 !== i.documentElement.ontouchstart,
        isMS: r,
        isWebKit: -1 !== n.indexOf("AppleWebKit"),
        isFirefox: o,
        isChrome: a,
        isSafari: !a && -1 !== n.indexOf("Safari"),
        isTouchDevice: /(Mobile|Android|Windows Phone)/.test(n),
        SVG_NS: "http://www.w3.org/2000/svg",
        chartCount: 0,
        seriesTypes: {},
        symbolSizes: {},
        svg: s,
        win: e,
        marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        noop: function() {},
        charts: []
    });
    !function(y) {
        y.timers = [];
        var t, e, i = y.charts, h = y.doc, l = y.win;
        y.error = function(t, e) {
            if (t = y.isNumber(t) ? "Highcharts error #" + t + ": www.highcharts.com/errors/" + t : t,
            e)
                throw Error(t);
            l.console && console.log(t)
        }
        ,
        y.Fx = function(t, e, i) {
            this.options = e,
            this.elem = t,
            this.prop = i
        }
        ,
        y.Fx.prototype = {
            dSetter: function() {
                var t, e = this.paths[0], i = this.paths[1], n = [], s = this.now, r = e.length;
                if (1 === s)
                    n = this.toD;
                else if (r === i.length && s < 1)
                    for (; r--; )
                        t = parseFloat(e[r]),
                        n[r] = isNaN(t) ? i[r] : s * parseFloat(i[r] - t) + t;
                else
                    n = i;
                this.elem.attr("d", n, null, !0)
            },
            update: function() {
                var t = this.elem
                  , e = this.prop
                  , i = this.now
                  , n = this.options.step;
                this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit,
                n && n.call(t, i, this)
            },
            run: function(t, e, i) {
                var n = this
                  , s = n.options
                  , r = function(t) {
                    return !r.stopped && n.step(t)
                }
                  , o = l.requestAnimationFrame || function(t) {
                    setTimeout(t, 13)
                }
                  , a = function() {
                    for (var t = 0; t < y.timers.length; t++)
                        y.timers[t]() || y.timers.splice(t--, 1);
                    y.timers.length && o(a)
                };
                t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date,
                this.start = t,
                this.end = e,
                this.unit = i,
                this.now = this.start,
                this.pos = 0,
                r.elem = this.elem,
                r.prop = this.prop,
                r() && 1 === y.timers.push(r) && o(a)) : (delete s.curAnim[this.prop],
                s.complete && 0 === y.keys(s.curAnim).length && s.complete.call(this.elem))
            },
            step: function(t) {
                var e, i = +new Date, n = this.options, s = this.elem, r = n.complete, o = n.duration, a = n.curAnim;
                return t = !(s.attr && !s.element) && (t || i >= o + this.startTime ? (this.now = this.end,
                this.pos = 1,
                this.update(),
                e = a[this.prop] = !0,
                y.objectEach(a, function(t) {
                    !0 !== t && (e = !1)
                }),
                e && r && r.call(s),
                !1) : (this.pos = n.easing((i - this.startTime) / o),
                this.now = this.start + (this.end - this.start) * this.pos,
                this.update(),
                !0))
            },
            initPath: function(t, e, i) {
                function n(t) {
                    var e, i;
                    for (h = t.length; h--; )
                        e = "M" === t[h] || "L" === t[h],
                        i = /[a-zA-Z]/.test(t[h + 3]),
                        e && i && t.splice(h + 1, 0, t[h + 1], t[h + 2], t[h + 1], t[h + 2])
                }
                function s(t, e) {
                    for (; t.length < a; ) {
                        t[0] = e[a - t.length];
                        var i = t.slice(0, p);
                        [].splice.apply(t, [0, 0].concat(i)),
                        g && (i = t.slice(t.length - p),
                        [].splice.apply(t, [t.length, 0].concat(i)),
                        h--)
                    }
                    t[0] = "M"
                }
                function r(t, e) {
                    for (var i = (a - t.length) / p; 0 < i && i--; )
                        (l = t.slice().splice(t.length / m - p, p * m))[0] = e[a - p - i * p],
                        u && (l[p - 6] = l[p - 2],
                        l[p - 5] = l[p - 1]),
                        [].splice.apply(t, [t.length / m, 0].concat(l)),
                        g && i--
                }
                e = e || "";
                var o, a, l, h, c = t.startX, d = t.endX, u = -1 < e.indexOf("C"), p = u ? 7 : 3;
                e = e.split(" "),
                i = i.slice();
                var f, g = t.isArea, m = g ? 2 : 1;
                if (u && (n(e),
                n(i)),
                c && d) {
                    for (h = 0; h < c.length; h++) {
                        if (c[h] === d[0]) {
                            o = h;
                            break
                        }
                        if (c[0] === d[d.length - c.length + h]) {
                            o = h,
                            f = !0;
                            break
                        }
                    }
                    void 0 === o && (e = [])
                }
                return e.length && y.isNumber(o) && (a = i.length + o * m * p,
                f ? (s(e, i),
                r(i, e)) : (s(i, e),
                r(e, i))),
                [e, i]
            }
        },
        y.Fx.prototype.fillSetter = y.Fx.prototype.strokeSetter = function() {
            this.elem.attr(this.prop, y.color(this.start).tweenTo(y.color(this.end), this.pos), null, !0)
        }
        ,
        y.merge = function() {
            var t, e, i = arguments, n = {}, s = function(i, n) {
                return "object" != typeof i && (i = {}),
                y.objectEach(n, function(t, e) {
                    !y.isObject(t, !0) || y.isClass(t) || y.isDOMElement(t) ? i[e] = n[e] : i[e] = s(i[e] || {}, t)
                }),
                i
            };
            for (!0 === i[0] && (n = i[1],
            i = Array.prototype.slice.call(i, 2)),
            e = i.length,
            t = 0; t < e; t++)
                n = s(n, i[t]);
            return n
        }
        ,
        y.pInt = function(t, e) {
            return parseInt(t, e || 10)
        }
        ,
        y.isString = function(t) {
            return "string" == typeof t
        }
        ,
        y.isArray = function(t) {
            return "[object Array]" === (t = Object.prototype.toString.call(t)) || "[object Array Iterator]" === t
        }
        ,
        y.isObject = function(t, e) {
            return !(!t || "object" != typeof t || e && y.isArray(t))
        }
        ,
        y.isDOMElement = function(t) {
            return y.isObject(t) && "number" == typeof t.nodeType
        }
        ,
        y.isClass = function(t) {
            var e = t && t.constructor;
            return !(!y.isObject(t, !0) || y.isDOMElement(t) || !e || !e.name || "Object" === e.name)
        }
        ,
        y.isNumber = function(t) {
            return "number" == typeof t && !isNaN(t) && Infinity > t && -Infinity < t
        }
        ,
        y.erase = function(t, e) {
            for (var i = t.length; i--; )
                if (t[i] === e) {
                    t.splice(i, 1);
                    break
                }
        }
        ,
        y.defined = function(t) {
            return null != t
        }
        ,
        y.attr = function(i, t, e) {
            var n;
            return y.isString(t) ? y.defined(e) ? i.setAttribute(t, e) : i && i.getAttribute && ((n = i.getAttribute(t)) || "class" !== t || (n = i.getAttribute(t + "Name"))) : y.defined(t) && y.isObject(t) && y.objectEach(t, function(t, e) {
                i.setAttribute(e, t)
            }),
            n
        }
        ,
        y.splat = function(t) {
            return y.isArray(t) ? t : [t]
        }
        ,
        y.syncTimeout = function(t, e, i) {
            if (e)
                return setTimeout(t, e, i);
            t.call(0, i)
        }
        ,
        y.clearTimeout = function(t) {
            y.defined(t) && clearTimeout(t)
        }
        ,
        y.extend = function(t, e) {
            for (var i in t = t || {},
            e)
                t[i] = e[i];
            return t
        }
        ,
        y.pick = function() {
            for (var t, e = arguments, i = e.length, n = 0; n < i; n++)
                if (null != (t = e[n]))
                    return t
        }
        ,
        y.css = function(t, e) {
            y.isMS && !y.svg && e && void 0 !== e.opacity && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"),
            y.extend(t.style, e)
        }
        ,
        y.createElement = function(t, e, i, n, s) {
            t = h.createElement(t);
            var r = y.css;
            return e && y.extend(t, e),
            s && r(t, {
                padding: 0,
                border: "none",
                margin: 0
            }),
            i && r(t, i),
            n && n.appendChild(t),
            t
        }
        ,
        y.extendClass = function(t, e) {
            var i = function() {};
            return i.prototype = new t,
            y.extend(i.prototype, e),
            i
        }
        ,
        y.pad = function(t, e, i) {
            return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || 0) + t
        }
        ,
        y.relativeLength = function(t, e, i) {
            return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
        }
        ,
        y.wrap = function(t, e, n) {
            var s = t[e];
            t[e] = function() {
                var t = Array.prototype.slice.call(arguments)
                  , e = arguments
                  , i = this;
                return i.proceed = function() {
                    s.apply(i, arguments.length ? arguments : e)
                }
                ,
                t.unshift(s),
                t = n.apply(this, t),
                i.proceed = null,
                t
            }
        }
        ,
        y.formatSingle = function(t, e, i) {
            var n = y.defaultOptions.lang;
            return /f$/.test(t) ? (i = (i = t.match(/\\.([0-9])/)) ? i[1] : -1,
            null !== e && (e = y.numberFormat(e, i, n.decimalPoint, -1 < t.indexOf(",") ? n.thousandsSep : ""))) : e = (i || y.time).dateFormat(t, e),
            e
        }
        ,
        y.format = function(t, e, i) {
            for (var n, s, r, o, a, l = "{", h = !1, c = []; t && -1 !== (l = t.indexOf(l)); ) {
                if (n = t.slice(0, l),
                h) {
                    for (o = (s = (n = n.split(":")).shift().split(".")).length,
                    a = e,
                    r = 0; r < o; r++)
                        a = a && a[s[r]];
                    n.length && (a = y.formatSingle(n.join(":"), a, i)),
                    c.push(a)
                } else
                    c.push(n);
                t = t.slice(l + 1),
                l = (h = !h) ? "}" : "{"
            }
            return c.push(t),
            c.join("")
        }
        ,
        y.getMagnitude = function(t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
        }
        ,
        y.normalizeTickInterval = function(t, e, i, n, s) {
            var r = t
              , o = t / (i = y.pick(i, 1));
            for (e || (e = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10],
            !1 === n && (1 === i ? e = y.grep(e, function(t) {
                return 0 == t % 1
            }) : i <= .1 && (e = [1 / i]))),
            n = 0; n < e.length && (r = e[n],
            !(s && t <= r * i || !s && o <= (e[n] + (e[n + 1] || e[n])) / 2)); n++)
                ;
            return y.correctFloat(r * i, -Math.round(Math.log(.001) / Math.LN10))
        }
        ,
        y.stableSort = function(t, i) {
            for (var n, e = t.length, s = 0; s < e; s++)
                t[s].safeI = s;
            for (t.sort(function(t, e) {
                return 0 === (n = i(t, e)) ? t.safeI - e.safeI : n
            }),
            s = 0; s < e; s++)
                delete t[s].safeI
        }
        ,
        y.arrayMin = function(t) {
            for (var e = t.length, i = t[0]; e--; )
                t[e] < i && (i = t[e]);
            return i
        }
        ,
        y.arrayMax = function(t) {
            for (var e = t.length, i = t[0]; e--; )
                t[e] > i && (i = t[e]);
            return i
        }
        ,
        y.destroyObjectProperties = function(i, n) {
            y.objectEach(i, function(t, e) {
                t && t !== n && t.destroy && t.destroy(),
                delete i[e]
            })
        }
        ,
        y.discardElement = function(t) {
            var e = (e = y.garbageBin) || y.createElement("div");
            t && e.appendChild(t),
            e.innerHTML = ""
        }
        ,
        y.correctFloat = function(t, e) {
            return parseFloat(t.toPrecision(e || 14))
        }
        ,
        y.setAnimation = function(t, e) {
            e.renderer.globalAnimation = y.pick(t, e.options.chart.animation, !0)
        }
        ,
        y.animObject = function(t) {
            return y.isObject(t) ? y.merge(t) : {
                duration: t ? 500 : 0
            }
        }
        ,
        y.timeUnits = {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 24192e5,
            year: 314496e5
        },
        y.numberFormat = function(t, e, i, n) {
            t = +t || 0,
            e = +e;
            var s, r, o = y.defaultOptions.lang, a = (t.toString().split(".")[1] || "").split("e")[0].length, l = t.toString().split("e");
            return -1 === e ? e = Math.min(a, 20) : y.isNumber(e) ? e && l[1] && l[1] < 0 && (0 <= (s = e + +l[1]) ? (l[0] = (+l[0]).toExponential(s).split("e")[0],
            e = s) : (l[0] = l[0].split(".")[0] || 0,
            t = e < 20 ? (l[0] * Math.pow(10, l[1])).toFixed(e) : 0,
            l[1] = 0)) : e = 2,
            r = (Math.abs(l[1] ? l[0] : t) + Math.pow(10, -Math.max(e, a) - 1)).toFixed(e),
            s = 3 < (a = String(y.pInt(r))).length ? a.length % 3 : 0,
            i = y.pick(i, o.decimalPoint),
            n = y.pick(n, o.thousandsSep),
            t = (t < 0 ? "-" : "") + (s ? a.substr(0, s) + n : ""),
            t += a.substr(s).replace(/(\\d{3})(?=\\d)/g, "$1" + n),
            e && (t += i + r.slice(-e)),
            l[1] && 0 != +t && (t += "e" + l[1]),
            t
        }
        ,
        Math.easeInOutSine = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }
        ,
        y.getStyle = function(t, e, i) {
            return "width" === e ? Math.min(t.offsetWidth, t.scrollWidth) - y.getStyle(t, "padding-left") - y.getStyle(t, "padding-right") : "height" === e ? Math.min(t.offsetHeight, t.scrollHeight) - y.getStyle(t, "padding-top") - y.getStyle(t, "padding-bottom") : (l.getComputedStyle || y.error(27, !0),
            (t = l.getComputedStyle(t, void 0)) && (t = t.getPropertyValue(e),
            y.pick(i, "opacity" !== e) && (t = y.pInt(t))),
            t)
        }
        ,
        y.inArray = function(t, e, i) {
            return (y.indexOfPolyfill || Array.prototype.indexOf).call(e, t, i)
        }
        ,
        y.grep = function(t, e) {
            return (y.filterPolyfill || Array.prototype.filter).call(t, e)
        }
        ,
        y.find = Array.prototype.find ? function(t, e) {
            return t.find(e)
        }
        : function(t, e) {
            for (var i = t.length, n = 0; n < i; n++)
                if (e(t[n], n))
                    return t[n]
        }
        ,
        y.some = function(t, e, i) {
            return (y.somePolyfill || Array.prototype.some).call(t, e, i)
        }
        ,
        y.map = function(t, e) {
            for (var i = [], n = 0, s = t.length; n < s; n++)
                i[n] = e.call(t[n], t[n], n, t);
            return i
        }
        ,
        y.keys = function(t) {
            return (y.keysPolyfill || Object.keys).call(void 0, t)
        }
        ,
        y.reduce = function(t, e, i) {
            return (y.reducePolyfill || Array.prototype.reduce).call(t, e, i)
        }
        ,
        y.offset = function(t) {
            var e = h.documentElement;
            return {
                top: (t = t.parentElement ? t.getBoundingClientRect() : {
                    top: 0,
                    left: 0
                }).top + (l.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: t.left + (l.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        }
        ,
        y.stop = function(t, e) {
            for (var i = y.timers.length; i--; )
                y.timers[i].elem !== t || e && e !== y.timers[i].prop || (y.timers[i].stopped = !0)
        }
        ,
        y.each = function(t, e, i) {
            return (y.forEachPolyfill || Array.prototype.forEach).call(t, e, i)
        }
        ,
        y.objectEach = function(t, e, i) {
            for (var n in t)
                t.hasOwnProperty(n) && e.call(i || t[n], t[n], n, t)
        }
        ,
        y.addEvent = function(t, e, i) {
            var n = t.addEventListener || y.addEventListenerPolyfill
              , s = "function" == typeof t && t.prototype ? t.prototype.protoEvents = t.prototype.protoEvents || {} : t.hcEvents = t.hcEvents || {};
            return n && n.call(t, e, i, !1),
            s[e] || (s[e] = []),
            s[e].push(i),
            function() {
                y.removeEvent(t, e, i)
            }
        }
        ,
        y.removeEvent = function(s, r, i) {
            function o(t, e) {
                var i = s.removeEventListener || y.removeEventListenerPolyfill;
                i && i.call(s, t, e, !1)
            }
            function n(i) {
                var t, n;
                s.nodeName && (r ? (t = {})[r] = !0 : t = i,
                y.objectEach(t, function(t, e) {
                    if (i[e])
                        for (n = i[e].length; n--; )
                            o(e, i[e][n])
                }))
            }
            var a, l;
            y.each(["protoEvents", "hcEvents"], function(t) {
                var e = s[t];
                e && (r ? (a = e[r] || [],
                i ? (-1 < (l = y.inArray(i, a)) && (a.splice(l, 1),
                e[r] = a),
                o(r, i)) : (n(e),
                e[r] = [])) : (n(e),
                s[t] = {}))
            })
        }
        ,
        y.fireEvent = function(e, i, n, t) {
            var s, r, o, a, l;
            n = n || {},
            h.createEvent && (e.dispatchEvent || e.fireEvent) ? ((s = h.createEvent("Events")).initEvent(i, !0, !0),
            y.extend(s, n),
            e.dispatchEvent ? e.dispatchEvent(s) : e.fireEvent(i, s)) : y.each(["protoEvents", "hcEvents"], function(t) {
                if (e[t])
                    for (r = e[t][i] || [],
                    o = r.length,
                    n.target || y.extend(n, {
                        preventDefault: function() {
                            n.defaultPrevented = !0
                        },
                        target: e,
                        type: i
                    }),
                    a = 0; a < o; a++)
                        (l = r[a]) && !1 === l.call(e, n) && n.preventDefault()
            }),
            t && !n.defaultPrevented && t.call(e, n)
        }
        ,
        y.animate = function(i, n, s) {
            var r, o, a, t, l = "";
            y.isObject(s) || (s = {
                duration: (t = arguments)[2],
                easing: t[3],
                complete: t[4]
            }),
            y.isNumber(s.duration) || (s.duration = 400),
            s.easing = "function" == typeof s.easing ? s.easing : Math[s.easing] || Math.easeInOutSine,
            s.curAnim = y.merge(n),
            y.objectEach(n, function(t, e) {
                y.stop(i, e),
                a = new y.Fx(i,s,e),
                o = null,
                "d" === e ? (a.paths = a.initPath(i, i.d, n.d),
                a.toD = n.d,
                r = 0,
                o = 1) : i.attr ? r = i.attr(e) : (r = parseFloat(y.getStyle(i, e)) || 0,
                "opacity" !== e && (l = "px")),
                (o = o || t) && o.match && o.match("px") && (o = o.replace(/px/g, "")),
                a.run(r, o, l)
            })
        }
        ,
        y.seriesType = function(t, e, i, n, s) {
            var r = y.getOptions()
              , o = y.seriesTypes;
            return r.plotOptions[t] = y.merge(r.plotOptions[e], i),
            o[t] = y.extendClass(o[e] || function() {}
            , n),
            o[t].prototype.type = t,
            s && (o[t].prototype.pointClass = y.extendClass(y.Point, s)),
            o[t]
        }
        ,
        y.uniqueKey = (t = Math.random().toString(36).substring(2, 9),
        e = 0,
        function() {
            return "highcharts-" + t + "-" + e++
        }
        ),
        l.jQuery && (l.jQuery.fn.highcharts = function() {
            var t = [].slice.call(arguments);
            if (this[0])
                return t[0] ? (new y[y.isString(t[0]) ? t.shift() : "Chart"](this[0],t[0],t[1]),
                this) : i[y.attr(this[0], "data-highcharts-chart")]
        }
        )
    }(Nt),
    c = (h = Nt).each,
    d = h.isNumber,
    u = h.map,
    p = h.merge,
    f = h.pInt,
    h.Color = function(t) {
        if (!(this instanceof h.Color))
            return new h.Color(t);
        this.init(t)
    }
    ,
    h.Color.prototype = {
        parsers: [{
            regex: /rgba\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]?(?:\\.[0-9]+)?)\\s*\\)/,
            parse: function(t) {
                return [f(t[1]), f(t[2]), f(t[3]), parseFloat(t[4], 10)]
            }
        }, {
            regex: /rgb\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)/,
            parse: function(t) {
                return [f(t[1]), f(t[2]), f(t[3]), 1]
            }
        }],
        names: {
            none: "rgba(255,255,255,0)",
            white: "#ffffff",
            black: "#000000"
        },
        init: function(t) {
            var e, i, n, s;
            if ((this.input = t = this.names[t && t.toLowerCase ? t.toLowerCase() : ""] || t) && t.stops)
                this.stops = u(t.stops, function(t) {
                    return new h.Color(t[1])
                });
            else if (t && t.charAt && "#" === t.charAt() && (e = t.length,
            t = parseInt(t.substr(1), 16),
            7 === e ? i = [(16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 1] : 4 === e && (i = [(3840 & t) >> 4 | (3840 & t) >> 8, (240 & t) >> 4 | 240 & t, (15 & t) << 4 | 15 & t, 1])),
            !i)
                for (n = this.parsers.length; n-- && !i; )
                    (e = (s = this.parsers[n]).regex.exec(t)) && (i = s.parse(e));
            this.rgba = i || []
        },
        get: function(i) {
            var n, t = this.input, e = this.rgba;
            return this.stops ? ((n = p(t)).stops = [].concat(n.stops),
            c(this.stops, function(t, e) {
                n.stops[e] = [n.stops[e][0], t.get(i)]
            })) : n = e && d(e[0]) ? "rgb" === i || !i && 1 === e[3] ? "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")" : "a" === i ? e[3] : "rgba(" + e.join(",") + ")" : t,
            n
        },
        brighten: function(e) {
            var t, i = this.rgba;
            if (this.stops)
                c(this.stops, function(t) {
                    t.brighten(e)
                });
            else if (d(e) && 0 !== e)
                for (t = 0; t < 3; t++)
                    i[t] += f(255 * e),
                    i[t] < 0 && (i[t] = 0),
                    255 < i[t] && (i[t] = 255);
            return this
        },
        setOpacity: function(t) {
            return this.rgba[3] = t,
            this
        },
        tweenTo: function(t, e) {
            var i = this.rgba
              , n = t.rgba;
            return e = n.length && i && i.length ? ((t = 1 !== n[3] || 1 !== i[3]) ? "rgba(" : "rgb(") + Math.round(n[0] + (i[0] - n[0]) * (1 - e)) + "," + Math.round(n[1] + (i[1] - n[1]) * (1 - e)) + "," + Math.round(n[2] + (i[2] - n[2]) * (1 - e)) + (t ? "," + (n[3] + (i[3] - n[3]) * (1 - e)) : "") + ")" : t.input || "none"
        }
    },
    h.color = function(t) {
        return new h.Color(t)
    }
    ,
    m = (N = Nt).addEvent,
    y = N.animate,
    M = N.attr,
    v = N.charts,
    x = N.color,
    C = N.css,
    b = N.createElement,
    D = N.defined,
    w = N.deg2rad,
    k = N.destroyObjectProperties,
    A = N.doc,
    _ = N.each,
    I = N.extend,
    T = N.erase,
    L = N.grep,
    S = N.hasTouch,
    P = N.inArray,
    O = N.isArray,
    E = N.isFirefox,
    R = N.isMS,
    z = N.isObject,
    B = N.isString,
    F = N.isWebKit,
    H = N.merge,
    j = N.noop,
    W = N.objectEach,
    X = N.pick,
    Y = N.pInt,
    G = N.removeEvent,
    $ = N.stop,
    q = N.svg,
    V = N.SVG_NS,
    U = N.symbolSizes,
    K = N.win,
    Z = N.SVGElement = function() {
        return this
    }
    ,
    I(Z.prototype, {
        opacity: 1,
        SVG_NS: V,
        textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
        init: function(t, e) {
            this.element = "span" === e ? b(e) : A.createElementNS(this.SVG_NS, e),
            this.renderer = t
        },
        animate: function(t, e, i) {
            return 0 !== (e = N.animObject(X(e, this.renderer.globalAnimation, !0))).duration ? (i && (e.complete = i),
            y(this, t, e)) : (this.attr(t, null, i),
            e.step && e.step.call(this)),
            this
        },
        complexColor: function(t, e, i) {
            var n, s, r, o, a, l, h, c, d, u, p, f, g = this.renderer, m = [];
            N.fireEvent(this.renderer, "complexColor", {
                args: arguments
            }, function() {
                t.radialGradient ? s = "radialGradient" : t.linearGradient && (s = "linearGradient"),
                s && (r = t[s],
                a = g.gradients,
                h = t.stops,
                u = i.radialReference,
                O(r) && (t[s] = r = {
                    x1: r[0],
                    y1: r[1],
                    x2: r[2],
                    y2: r[3],
                    gradientUnits: "userSpaceOnUse"
                }),
                "radialGradient" === s && u && !D(r.gradientUnits) && (r = H(o = r, g.getRadialAttr(u, o), {
                    gradientUnits: "userSpaceOnUse"
                })),
                W(r, function(t, e) {
                    "id" !== e && m.push(e, t)
                }),
                W(h, function(t) {
                    m.push(t)
                }),
                m = m.join(","),
                a[m] ? p = a[m].attr("id") : (r.id = p = N.uniqueKey(),
                a[m] = l = g.createElement(s).attr(r).add(g.defs),
                l.radAttr = o,
                l.stops = [],
                _(h, function(t) {
                    d = 0 === t[1].indexOf("rgba") ? (n = N.color(t[1]),
                    c = n.get("rgb"),
                    n.get("a")) : (c = t[1],
                    1),
                    t = g.createElement("stop").attr({
                        offset: t[0],
                        "stop-color": c,
                        "stop-opacity": d
                    }).add(l),
                    l.stops.push(t)
                })),
                f = "url(" + g.url + "#" + p + ")",
                i.setAttribute(e, f),
                i.gradient = m,
                t.toString = function() {
                    return f
                }
                )
            })
        },
        applyTextOutline: function(t) {
            var e, i, n, s, r, o = this.element;
            if (-1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(o.style.fill))),
            t = t.split(" "),
            i = t[t.length - 1],
            (n = t[0]) && "none" !== n && N.svg) {
                for (this.fakeTS = !0,
                t = [].slice.call(o.getElementsByTagName("tspan")),
                this.ySetter = this.xSetter,
                n = n.replace(/(^[\\d\\.]+)(.*?)$/g, function(t, e, i) {
                    return 2 * e + i
                }),
                r = t.length; r--; )
                    "highcharts-text-outline" === (e = t[r]).getAttribute("class") && T(t, o.removeChild(e));
                s = o.firstChild,
                _(t, function(t, e) {
                    0 === e && (t.setAttribute("x", o.getAttribute("x")),
                    e = o.getAttribute("y"),
                    t.setAttribute("y", e || 0),
                    null === e && o.setAttribute("y", 0)),
                    t = t.cloneNode(1),
                    M(t, {
                        "class": "highcharts-text-outline",
                        fill: i,
                        stroke: i,
                        "stroke-width": n,
                        "stroke-linejoin": "round"
                    }),
                    o.insertBefore(t, s)
                })
            }
        },
        attr: function(i, t, e, n) {
            var s, r, o, a, l = this.element, h = this;
            return "string" == typeof i && void 0 !== t && (s = i,
            (i = {})[s] = t),
            "string" == typeof i ? h = (this[i + "Getter"] || this._defaultGetter).call(this, i, l) : (W(i, function(t, e) {
                o = !1,
                n || $(this, e),
                this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(e) && (r || (this.symbolAttr(i),
                r = !0),
                o = !0),
                !this.rotation || "x" !== e && "y" !== e || (this.doTransform = !0),
                o || ((a = this[e + "Setter"] || this._defaultSetter).call(this, t, e, l),
                this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(e) && this.updateShadows(e, t, a))
            }, this),
            this.afterSetters()),
            e && e.call(this),
            h
        },
        afterSetters: function() {
            this.doTransform && (this.updateTransform(),
            this.doTransform = !1)
        },
        updateShadows: function(t, e, i) {
            for (var n = this.shadows, s = n.length; s--; )
                i.call(n[s], "height" === t ? Math.max(e - (n[s].cutHeight || 0), 0) : "d" === t ? this.d : e, t, n[s])
        },
        addClass: function(t, e) {
            var i = this.attr("class") || "";
            return -1 === i.indexOf(t) && (e || (t = (i + (i ? " " : "") + t).replace("  ", " ")),
            this.attr("class", t)),
            this
        },
        hasClass: function(t) {
            return -1 !== P(t, (this.attr("class") || "").split(" "))
        },
        removeClass: function(t) {
            return this.attr("class", (this.attr("class") || "").replace(t, ""))
        },
        symbolAttr: function(e) {
            var i = this;
            _("x y r start end width height innerR anchorX anchorY".split(" "), function(t) {
                i[t] = X(e[t], i[t])
            }),
            i.attr({
                d: i.renderer.symbols[i.symbolName](i.x, i.y, i.width, i.height, i)
            })
        },
        clip: function(t) {
            return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
        },
        crisp: function(t, e) {
            var i;
            return e = e || t.strokeWidth || 0,
            i = Math.round(e) % 2 / 2,
            t.x = Math.floor(t.x || this.x || 0) + i,
            t.y = Math.floor(t.y || this.y || 0) + i,
            t.width = Math.floor((t.width || this.width || 0) - 2 * i),
            t.height = Math.floor((t.height || this.height || 0) - 2 * i),
            D(t.strokeWidth) && (t.strokeWidth = e),
            t
        },
        css: function(t) {
            var e, i, n = this.styles, s = {}, r = this.element, o = "", a = !n, l = ["textOutline", "textOverflow", "width"];
            return t && t.color && (t.fill = t.color),
            n && W(t, function(t, e) {
                t !== n[e] && (s[e] = t,
                a = !0)
            }),
            a && (n && (t = I(n, s)),
            e = this.textWidth = t && t.width && "auto" !== t.width && "text" === r.nodeName.toLowerCase() && Y(t.width),
            this.styles = t,
            e && !q && this.renderer.forExport && delete t.width,
            r.namespaceURI === this.SVG_NS ? (i = function(t, e) {
                return "-" + e.toLowerCase()
            }
            ,
            W(t, function(t, e) {
                -1 === P(e, l) && (o += e.replace(/([A-Z])/g, i) + ":" + t + ";")
            }),
            o && M(r, "style", o)) : C(r, t),
            this.added && ("text" === this.element.nodeName && this.renderer.buildText(this),
            t && t.textOutline && this.applyTextOutline(t.textOutline))),
            this
        },
        strokeWidth: function() {
            return this["stroke-width"] || 0
        },
        on: function(t, e) {
            var i = this
              , n = i.element;
            return S && "click" === t ? (n.ontouchstart = function(t) {
                i.touchEventFired = Date.now(),
                t.preventDefault(),
                e.call(n, t)
            }
            ,
            n.onclick = function(t) {
                (-1 === K.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (i.touchEventFired || 0)) && e.call(n, t)
            }
            ) : n["on" + t] = e,
            this
        },
        setRadialReference: function(t) {
            var e = this.renderer.gradients[this.element.gradient];
            return this.element.radialReference = t,
            e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
            this
        },
        translate: function(t, e) {
            return this.attr({
                translateX: t,
                translateY: e
            })
        },
        invert: function(t) {
            return this.inverted = t,
            this.updateTransform(),
            this
        },
        updateTransform: function() {
            var t = this.translateX || 0
              , e = this.translateY || 0
              , i = this.scaleX
              , n = this.scaleY
              , s = this.inverted
              , r = this.rotation
              , o = this.matrix
              , a = this.element;
            s && (t += this.width,
            e += this.height),
            t = ["translate(" + t + "," + e + ")"],
            D(o) && t.push("matrix(" + o.join(",") + ")"),
            s ? t.push("rotate(90) scale(-1,1)") : r && t.push("rotate(" + r + " " + X(this.rotationOriginX, a.getAttribute("x"), 0) + " " + X(this.rotationOriginY, a.getAttribute("y") || 0) + ")"),
            (D(i) || D(n)) && t.push("scale(" + X(i, 1) + " " + X(n, 1) + ")"),
            t.length && a.setAttribute("transform", t.join(" "))
        },
        toFront: function() {
            var t = this.element;
            return t.parentNode.appendChild(t),
            this
        },
        align: function(t, e, i) {
            var n, s, r, o, a = {}, l = this.renderer, h = l.alignedObjects;
            return t ? (this.alignOptions = t,
            this.alignByTranslate = e,
            i && !B(i) || (this.alignTo = n = i || "renderer",
            T(h, this),
            h.push(this),
            i = null)) : (t = this.alignOptions,
            e = this.alignByTranslate,
            n = this.alignTo),
            i = X(i, l[n], l),
            n = t.align,
            l = t.verticalAlign,
            h = (i.x || 0) + (t.x || 0),
            s = (i.y || 0) + (t.y || 0),
            "right" === n ? r = 1 : "center" === n && (r = 2),
            r && (h += (i.width - (t.width || 0)) / r),
            a[e ? "translateX" : "x"] = Math.round(h),
            "bottom" === l ? o = 1 : "middle" === l && (o = 2),
            o && (s += (i.height - (t.height || 0)) / o),
            a[e ? "translateY" : "y"] = Math.round(s),
            this[this.placed ? "animate" : "attr"](a),
            this.placed = !0,
            this.alignAttr = a,
            this
        },
        getBBox: function(t, e) {
            var i, n, s, r = this.renderer, o = this.element, a = this.styles, l = this.textStr, h = r.cache, c = r.cacheKeys, d = (e = X(e, this.rotation)) * w, u = a && a.fontSize;
            if (D(l) && (-1 === (s = l.toString()).indexOf("<") && (s = s.replace(/[0-9]/g, "0")),
            s += ["", e || 0, u, this.textWidth, a && a.textOverflow].join()),
            s && !t && (i = h[s]),
            !i) {
                if (o.namespaceURI === this.SVG_NS || r.forExport) {
                    try {
                        (n = this.fakeTS && function(e) {
                            _(o.querySelectorAll(".highcharts-text-outline"), function(t) {
                                t.style.display = e
                            })
                        }
                        ) && n("none"),
                        i = o.getBBox ? I({}, o.getBBox()) : {
                            width: o.offsetWidth,
                            height: o.offsetHeight
                        },
                        n && n("")
                    } catch (p) {}
                    (!i || i.width < 0) && (i = {
                        width: 0,
                        height: 0
                    })
                } else
                    i = this.htmlGetBBox();
                if (r.isSVG && (t = i.width,
                r = i.height,
                a && "11px" === a.fontSize && 17 === Math.round(r) && (i.height = r = 14),
                e && (i.width = Math.abs(r * Math.sin(d)) + Math.abs(t * Math.cos(d)),
                i.height = Math.abs(r * Math.cos(d)) + Math.abs(t * Math.sin(d)))),
                s && 0 < i.height) {
                    for (; 250 < c.length; )
                        delete h[c.shift()];
                    h[s] || c.push(s),
                    h[s] = i
                }
            }
            return i
        },
        show: function(t) {
            return this.attr({
                visibility: t ? "inherit" : "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(t) {
            var e = this;
            e.animate({
                opacity: 0
            }, {
                duration: t || 150,
                complete: function() {
                    e.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(t) {
            var e, i = this.renderer, n = this.element;
            return t && (this.parentGroup = t),
            this.parentInverted = t && t.inverted,
            void 0 !== this.textStr && i.buildText(this),
            this.added = !0,
            t && !t.handleZ && !this.zIndex || (e = this.zIndexSetter()),
            e || (t ? t.element : i.box).appendChild(n),
            this.onAdd && this.onAdd(),
            this
        },
        safeRemoveChild: function(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        },
        destroy: function() {
            var i = this
              , t = i.element || {}
              , e = i.renderer.isSVG && "SPAN" === t.nodeName && i.parentGroup
              , n = t.ownerSVGElement
              , s = i.clipPath;
            if (t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null,
            $(i),
            s && n && (_(n.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t) {
                var e = t.getAttribute("clip-path")
                  , i = s.element.id;
                (-1 < e.indexOf("(#" + i + ")") || -1 < e.indexOf('("#' + i + '")')) && t.removeAttribute("clip-path")
            }),
            i.clipPath = s.destroy()),
            i.stops) {
                for (n = 0; n < i.stops.length; n++)
                    i.stops[n] = i.stops[n].destroy();
                i.stops = null
            }
            for (i.safeRemoveChild(t),
            i.destroyShadows(); e && e.div && 0 === e.div.childNodes.length; )
                t = e.parentGroup,
                i.safeRemoveChild(e.div),
                delete e.div,
                e = t;
            return i.alignTo && T(i.renderer.alignedObjects, i),
            W(i, function(t, e) {
                delete i[e]
            }),
            null
        },
        shadow: function(t, e, i) {
            var n, s, r, o, a, l, h = [], c = this.element;
            if (t) {
                if (!this.shadows) {
                    for (o = X(t.width, 3),
                    a = (t.opacity || .15) / o,
                    l = this.parentInverted ? "(-1,-1)" : "(" + X(t.offsetX, 1) + ", " + X(t.offsetY, 1) + ")",
                    n = 1; n <= o; n++)
                        s = c.cloneNode(0),
                        r = 2 * o + 1 - 2 * n,
                        M(s, {
                            isShadow: "true",
                            stroke: t.color || "#000000",
                            "stroke-opacity": a * n,
                            "stroke-width": r,
                            transform: "translate" + l,
                            fill: "none"
                        }),
                        i && (M(s, "height", Math.max(M(s, "height") - r, 0)),
                        s.cutHeight = r),
                        e ? e.element.appendChild(s) : c.parentNode && c.parentNode.insertBefore(s, c),
                        h.push(s);
                    this.shadows = h
                }
            } else
                this.destroyShadows();
            return this
        },
        destroyShadows: function() {
            _(this.shadows || [], function(t) {
                this.safeRemoveChild(t)
            }, this),
            this.shadows = void 0
        },
        xGetter: function(t) {
            return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")),
            this._defaultGetter(t)
        },
        _defaultGetter: function(t) {
            return t = X(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0),
            /^[\\-0-9\\.]+$/.test(t) && (t = parseFloat(t)),
            t
        },
        dSetter: function(t, e, i) {
            t && t.join && (t = t.join(" ")),
            /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
            this[e] !== t && (i.setAttribute(e, t),
            this[e] = t)
        },
        dashstyleSetter: function(t) {
            var e, i = this["stroke-width"];
            if ("inherit" === i && (i = 1),
            t = t && t.toLowerCase()) {
                for (e = (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",")).length; e--; )
                    t[e] = Y(t[e]) * i;
                t = t.join(",").replace(/NaN/g, "none"),
                this.element.setAttribute("stroke-dasharray", t)
            }
        },
        alignSetter: function(t) {
            this.alignValue = t,
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[t])
        },
        opacitySetter: function(t, e, i) {
            this[e] = t,
            i.setAttribute(e, t)
        },
        titleSetter: function(t) {
            var e = this.element.getElementsByTagName("title")[0];
            e || (e = A.createElementNS(this.SVG_NS, "title"),
            this.element.appendChild(e)),
            e.firstChild && e.removeChild(e.firstChild),
            e.appendChild(A.createTextNode(String(X(t), "").replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
        },
        textSetter: function(t) {
            t !== this.textStr && (delete this.bBox,
            this.textStr = t,
            this.added && this.renderer.buildText(this))
        },
        fillSetter: function(t, e, i) {
            "string" == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
        },
        visibilitySetter: function(t, e, i) {
            "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t),
            this[e] = t
        },
        zIndexSetter: function(t, e) {
            var i, n, s, r = this.renderer, o = this.parentGroup, a = (o || r).element || r.box, l = this.element, r = a === r.box, h = this.added;
            if (D(t) && (t = +(l.zIndex = t),
            this[e] === t && (h = !1),
            this[e] = t),
            h) {
                for ((t = this.zIndex) && o && (o.handleZ = !0),
                s = (e = a.childNodes).length - 1; 0 <= s && !i; s--)
                    h = (o = e[s]).zIndex,
                    n = !D(h),
                    o !== l && (t < 0 && n && !r && !s ? (a.insertBefore(l, e[s]),
                    i = !0) : (Y(h) <= t || n && (!D(t) || 0 <= t)) && (a.insertBefore(l, e[s + 1] || null),
                    i = !0));
                i || (a.insertBefore(l, e[r ? 3 : 0] || null),
                i = !0)
            }
            return i
        },
        _defaultSetter: function(t, e, i) {
            i.setAttribute(e, t)
        }
    }),
    Z.prototype.yGetter = Z.prototype.xGetter,
    Z.prototype.translateXSetter = Z.prototype.translateYSetter = Z.prototype.rotationSetter = Z.prototype.verticalAlignSetter = Z.prototype.rotationOriginXSetter = Z.prototype.rotationOriginYSetter = Z.prototype.scaleXSetter = Z.prototype.scaleYSetter = Z.prototype.matrixSetter = function(t, e) {
        this[e] = t,
        this.doTransform = !0
    }
    ,
    Z.prototype["stroke-widthSetter"] = Z.prototype.strokeSetter = function(t, e, i) {
        this[e] = t,
        this.stroke && this["stroke-width"] ? (Z.prototype.fillSetter.call(this, this.stroke, "stroke", i),
        i.setAttribute("stroke-width", this["stroke-width"]),
        this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"),
        this.hasStroke = !1)
    }
    ,
    g = N.SVGRenderer = function() {
        this.init.apply(this, arguments)
    }
    ,
    I(g.prototype, {
        Element: Z,
        SVG_NS: V,
        init: function(t, e, i, n, s, r) {
            var o, a = (n = this.createElement("svg").attr({
                version: "1.1",
                "class": "highcharts-root"
            }).css(this.getStyle(n))).element;
            t.appendChild(a),
            M(t, "dir", "ltr"),
            -1 === t.innerHTML.indexOf("xmlns") && M(a, "xmlns", this.SVG_NS),
            this.isSVG = !0,
            this.box = a,
            this.boxWrapper = n,
            this.alignedObjects = [],
            this.url = (E || F) && A.getElementsByTagName("base").length ? K.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\\('\\)])/g, "\\\\$1").replace(/ /g, "%20") : "",
            this.createElement("desc").add().element.appendChild(A.createTextNode("Created with Highcharts 6.1.0")),
            this.defs = this.createElement("defs").add(),
            this.allowHTML = r,
            this.forExport = s,
            this.gradients = {},
            this.cache = {},
            this.cacheKeys = [],
            this.imgCount = 0,
            this.setSize(e, i, !1),
            E && t.getBoundingClientRect && ((e = function() {
                C(t, {
                    left: 0,
                    top: 0
                }),
                o = t.getBoundingClientRect(),
                C(t, {
                    left: Math.ceil(o.left) - o.left + "px",
                    top: Math.ceil(o.top) - o.top + "px"
                })
            }
            )(),
            this.unSubPixelFix = m(K, "resize", e))
        },
        getStyle: function(t) {
            return this.style = I({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, t)
        },
        setStyle: function(t) {
            this.boxWrapper.css(this.getStyle(t))
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var t = this.defs;
            return this.box = null,
            this.boxWrapper = this.boxWrapper.destroy(),
            k(this.gradients || {}),
            this.gradients = null,
            t && (this.defs = t.destroy()),
            this.unSubPixelFix && this.unSubPixelFix(),
            this.alignedObjects = null
        },
        createElement: function(t) {
            var e = new this.Element;
            return e.init(this, t),
            e
        },
        draw: j,
        getRadialAttr: function(t, e) {
            return {
                cx: t[0] - t[2] / 2 + e.cx * t[2],
                cy: t[1] - t[2] / 2 + e.cy * t[2],
                r: e.r * t[2]
            }
        },
        getSpanWidth: function(t) {
            return t.getBBox(!0).width
        },
        applyEllipsis: function(t, e, i, n) {
            var s, r, o, a = t.rotation, l = 0, h = i.length, c = function(t) {
                e.removeChild(e.firstChild),
                t && e.appendChild(A.createTextNode(t))
            };
            if (t.rotation = 0,
            o = n < this.getSpanWidth(t, e)) {
                for (; l <= h; )
                    r = Math.ceil((l + h) / 2),
                    c(i.substring(0, r) + "…"),
                    s = this.getSpanWidth(t, e),
                    l === h ? l = h + 1 : n < s ? h = r - 1 : l = r;
                0 === h && c("")
            }
            return t.rotation = a,
            o
        },
        escapes: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        },
        buildText: function(u) {
            var p, f, g = u.element, m = this, y = m.forExport, t = X(u.textStr, "").toString(), e = -1 !== t.indexOf("<"), i = g.childNodes, v = M(g, "x"), n = u.styles, x = u.textWidth, s = n && n.lineHeight, r = n && n.textOutline, b = n && "ellipsis" === n.textOverflow, w = n && "nowrap" === n.whiteSpace, o = n && n.fontSize, a = i.length, n = x && !u.added && this.box, k = function(t) {
                var e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : o || m.style.fontSize || 12;
                return s ? Y(s) : m.fontMetrics(e, t.getAttribute("style") ? t : g).h
            }, T = function(i, n) {
                return W(m.escapes, function(t, e) {
                    n && -1 !== P(t, n) || (i = i.toString().replace(new RegExp(t,"g"), e))
                }),
                i
            }, S = function(t, e) {
                var i = t.indexOf("<");
                if (-1 !== (i = (t = t.substring(i, t.indexOf(">") - i)).indexOf(e + "=")) && (i = i + e.length + 1,
                '"' === (e = t.charAt(i)) || "'" === e))
                    return (t = t.substring(i + 1)).substring(0, t.indexOf(e))
            }, l = [t, b, w, s, r, o, x].join();
            if (l !== u.textCache) {
                for (u.textCache = l; a--; )
                    g.removeChild(i[a]);
                e || r || b || x || -1 !== t.indexOf(" ") ? (n && n.appendChild(g),
                t = e ? t.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [t],
                t = L(t, function(t) {
                    return "" !== t
                }),
                _(t, function(t, h) {
                    var c, d = 0;
                    t = t.replace(/^\\s+|\\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\\/span>/g, "</span>|||"),
                    c = t.split("|||"),
                    _(c, function(t) {
                        if ("" !== t || 1 === c.length) {
                            var e, i, n = {}, s = A.createElementNS(m.SVG_NS, "tspan");
                            if ((e = S(t, "class")) && M(s, "class", e),
                            (e = S(t, "style")) && (e = e.replace(/(;| |^)color([ :])/, "$1fill$2"),
                            M(s, "style", e)),
                            (i = S(t, "href")) && !y && (M(s, "onclick", 'location.href="' + i + '"'),
                            M(s, "class", "highcharts-anchor"),
                            C(s, {
                                cursor: "pointer"
                            })),
                            " " !== (t = T(t.replace(/<[a-zA-Z\\/](.|\\n)*?>/g, "") || " "))) {
                                if (s.appendChild(A.createTextNode(t)),
                                d ? n.dx = 0 : h && null !== v && (n.x = v),
                                M(s, n),
                                g.appendChild(s),
                                !d && f && (!q && y && C(s, {
                                    display: "block"
                                }),
                                M(s, "dy", k(s))),
                                x) {
                                    n = t.replace(/([^\\^])-/g, "$1- ").split(" "),
                                    i = 1 < c.length || h || 1 < n.length && !w;
                                    var r, o = [], a = k(s), l = u.rotation;
                                    for (b && (p = m.applyEllipsis(u, s, t, x)); !b && i && (n.length || o.length); )
                                        u.rotation = 0,
                                        r = m.getSpanWidth(u, s),
                                        t = x < r,
                                        void 0 === p && (p = t),
                                        t && 1 !== n.length ? (s.removeChild(s.firstChild),
                                        o.unshift(n.pop())) : (n = o,
                                        o = [],
                                        n.length && !w && (s = A.createElementNS(V, "tspan"),
                                        M(s, {
                                            dy: a,
                                            x: v
                                        }),
                                        e && M(s, "style", e),
                                        g.appendChild(s)),
                                        x < r && (x = r)),
                                        n.length && s.appendChild(A.createTextNode(n.join(" ").replace(/- /g, "-")));
                                    u.rotation = l
                                }
                                d++
                            }
                        }
                    }),
                    f = f || g.childNodes.length
                }),
                p && u.attr("title", T(u.textStr, ["&lt;", "&gt;"])),
                n && n.removeChild(g),
                r && u.applyTextOutline && u.applyTextOutline(r)) : g.appendChild(A.createTextNode(T(t)))
            }
        },
        getContrast: function(t) {
            return 510 < (t = x(t).rgba)[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
        },
        button: function(t, e, i, n, s, r, o, a, l) {
            var h, c, d, u, p = this.label(t, e, i, l, null, null, null, null, "button"), f = 0;
            return p.attr(H({
                padding: 8,
                r: 2
            }, s)),
            s = H({
                fill: "#f7f7f7",
                stroke: "#cccccc",
                "stroke-width": 1,
                style: {
                    color: "#333333",
                    cursor: "pointer",
                    fontWeight: "normal"
                }
            }, s),
            h = s.style,
            delete s.style,
            r = H(s, {
                fill: "#e6e6e6"
            }, r),
            c = r.style,
            delete r.style,
            o = H(s, {
                fill: "#e6ebf5",
                style: {
                    color: "#000000",
                    fontWeight: "bold"
                }
            }, o),
            d = o.style,
            delete o.style,
            a = H(s, {
                style: {
                    color: "#cccccc"
                }
            }, a),
            u = a.style,
            delete a.style,
            m(p.element, R ? "mouseover" : "mouseenter", function() {
                3 !== f && p.setState(1)
            }),
            m(p.element, R ? "mouseout" : "mouseleave", function() {
                3 !== f && p.setState(f)
            }),
            p.setState = function(t) {
                1 !== t && (p.state = f = t),
                p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]),
                p.attr([s, r, o, a][t || 0]).css([h, c, d, u][t || 0])
            }
            ,
            p.attr(s).css(I({
                cursor: "default"
            }, h)),
            p.on("click", function(t) {
                3 !== f && n.call(p, t)
            })
        },
        crispLine: function(t, e) {
            return t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - e % 2 / 2),
            t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + e % 2 / 2),
            t
        },
        path: function(t) {
            var e = {
                fill: "none"
            };
            return O(t) ? e.d = t : z(t) && I(e, t),
            this.createElement("path").attr(e)
        },
        circle: function(t, e, i) {
            return t = z(t) ? t : {
                x: t,
                y: e,
                r: i
            },
            (e = this.createElement("circle")).xSetter = e.ySetter = function(t, e, i) {
                i.setAttribute("c" + e, t)
            }
            ,
            e.attr(t)
        },
        arc: function(t, e, i, n, s, r) {
            return z(t) ? (e = (n = t).y,
            i = n.r,
            t = n.x) : n = {
                innerR: n,
                start: s,
                end: r
            },
            (t = this.symbol("arc", t, e, i, i, n)).r = i,
            t
        },
        rect: function(t, e, i, n, s, r) {
            s = z(t) ? t.r : s;
            var o = this.createElement("rect");
            return t = z(t) ? t : void 0 === t ? {} : {
                x: t,
                y: e,
                width: Math.max(i, 0),
                height: Math.max(n, 0)
            },
            void 0 !== r && (t.strokeWidth = r,
            t = o.crisp(t)),
            t.fill = "none",
            s && (t.r = s),
            o.rSetter = function(t, e, i) {
                M(i, {
                    rx: t,
                    ry: t
                })
            }
            ,
            o.attr(t)
        },
        setSize: function(t, e, i) {
            var n = this.alignedObjects
              , s = n.length;
            for (this.width = t,
            this.height = e,
            this.boxWrapper.animate({
                width: t,
                height: e
            }, {
                step: function() {
                    this.attr({
                        viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                    })
                },
                duration: X(i, !0) ? void 0 : 0
            }); s--; )
                n[s].align()
        },
        g: function(t) {
            var e = this.createElement("g");
            return t ? e.attr({
                "class": "highcharts-" + t
            }) : e
        },
        image: function(e, t, i, n, s, r) {
            var o, a = {
                preserveAspectRatio: "none"
            }, l = function(t, e) {
                t.setAttributeNS ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : t.setAttribute("hc-svg-href", e)
            };
            return 1 < arguments.length && I(a, {
                x: t,
                y: i,
                width: n,
                height: s
            }),
            o = this.createElement("image").attr(a),
            r ? (l(o.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
            a = new K.Image,
            m(a, "load", function(t) {
                l(o.element, e),
                r.call(o, t)
            }),
            a.src = e) : l(o.element, e),
            o
        },
        symbol: function(t, e, i, n, s, r) {
            var o, a, l, h = this, c = /^url\\((.*?)\\)$/, d = c.test(t), u = !d && (this.symbols[t] ? t : "circle"), p = u && this.symbols[u], f = D(e) && p && p.call(this.symbols, Math.round(e), Math.round(i), n, s, r);
            return p ? ((o = this.path(f)).attr("fill", "none"),
            I(o, {
                symbolName: u,
                x: e,
                y: i,
                width: n,
                height: s
            }),
            r && I(o, r)) : d && (a = t.match(c)[1],
            (o = this.image(a)).imgwidth = X(U[a] && U[a].width, r && r.width),
            o.imgheight = X(U[a] && U[a].height, r && r.height),
            l = function() {
                o.attr({
                    width: o.width,
                    height: o.height
                })
            }
            ,
            _(["width", "height"], function(t) {
                o[t + "Setter"] = function(t, e) {
                    var i = {}
                      , n = this["img" + e]
                      , s = "width" === e ? "translateX" : "translateY";
                    this[e] = t,
                    D(n) && (this.element && this.element.setAttribute(e, n),
                    this.alignByTranslate || (i[s] = ((this[e] || 0) - n) / 2,
                    this.attr(i)))
                }
            }),
            D(e) && o.attr({
                x: e,
                y: i
            }),
            o.isImg = !0,
            D(o.imgwidth) && D(o.imgheight) ? l() : (o.attr({
                width: 0,
                height: 0
            }),
            b("img", {
                onload: function() {
                    var t = v[h.chartIndex];
                    0 === this.width && (C(this, {
                        position: "absolute",
                        top: "-999em"
                    }),
                    A.body.appendChild(this)),
                    U[a] = {
                        width: this.width,
                        height: this.height
                    },
                    o.imgwidth = this.width,
                    o.imgheight = this.height,
                    o.element && l(),
                    this.parentNode && this.parentNode.removeChild(this),
                    h.imgCount--,
                    !h.imgCount && t && t.onload && t.onload()
                },
                src: a
            }),
            this.imgCount++)),
            o
        },
        symbols: {
            circle: function(t, e, i, n) {
                return this.arc(t + i / 2, e + n / 2, i / 2, n / 2, {
                    start: 0,
                    end: 2 * Math.PI,
                    open: !1
                })
            },
            square: function(t, e, i, n) {
                return ["M", t, e, "L", t + i, e, t + i, e + n, t, e + n, "Z"]
            },
            triangle: function(t, e, i, n) {
                return ["M", t + i / 2, e, "L", t + i, e + n, t, e + n, "Z"]
            },
            "triangle-down": function(t, e, i, n) {
                return ["M", t, e, "L", t + i, e, t + i / 2, e + n, "Z"]
            },
            diamond: function(t, e, i, n) {
                return ["M", t + i / 2, e, "L", t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
            },
            arc: function(t, e, i, n, s) {
                var r = s.start
                  , o = s.r || i
                  , a = s.r || n || i
                  , l = s.end - .001;
                i = s.innerR,
                n = X(s.open, Math.abs(s.end - s.start - 2 * Math.PI) < .001);
                var h = Math.cos(r)
                  , c = Math.sin(r)
                  , d = Math.cos(l)
                  , l = Math.sin(l)
                  , o = ["M", t + o * h, e + a * c, "A", o, a, 0, s = s.end - r - Math.PI < .001 ? 0 : 1, 1, t + o * d, e + a * l];
                return D(i) && o.push(n ? "M" : "L", t + i * d, e + i * l, "A", i, i, 0, s, 0, t + i * h, e + i * c),
                o.push(n ? "" : "Z"),
                o
            },
            callout: function(t, e, i, n, s) {
                var r, o = Math.min(s && s.r || 0, i, n), a = o + 6, l = s && s.anchorX;
                return s = s && s.anchorY,
                r = ["M", t + o, e, "L", t + i - o, e, "C", t + i, e, t + i, e, t + i, e + o, "L", t + i, e + n - o, "C", t + i, e + n, t + i, e + n, t + i - o, e + n, "L", t + o, e + n, "C", t, e + n, t, e + n, t, e + n - o, "L", t, e + o, "C", t, e, t, e, t + o, e],
                l && i < l ? e + a < s && s < e + n - a ? r.splice(13, 3, "L", t + i, s - 6, t + i + 6, s, t + i, s + 6, t + i, e + n - o) : r.splice(13, 3, "L", t + i, n / 2, l, s, t + i, n / 2, t + i, e + n - o) : l && l < 0 ? e + a < s && s < e + n - a ? r.splice(33, 3, "L", t, s + 6, t - 6, s, t, s - 6, t, e + o) : r.splice(33, 3, "L", t, n / 2, l, s, t, n / 2, t, e + o) : s && n < s && t + a < l && l < t + i - a ? r.splice(23, 3, "L", l + 6, e + n, l, e + n + 6, l - 6, e + n, t + o, e + n) : s && s < 0 && t + a < l && l < t + i - a && r.splice(3, 3, "L", l - 6, e, l, e - 6, l + 6, e, i - o, e),
                r
            }
        },
        clipRect: function(t, e, i, n) {
            var s = N.uniqueKey()
              , r = this.createElement("clipPath").attr({
                id: s
            }).add(this.defs);
            return (t = this.rect(t, e, i, n, 0).add(r)).id = s,
            t.clipPath = r,
            t.count = 0,
            t
        },
        text: function(t, e, i, n) {
            var s = {};
            return !n || !this.allowHTML && this.forExport ? (s.x = Math.round(e || 0),
            i && (s.y = Math.round(i)),
            !t && 0 !== t || (s.text = t),
            t = this.createElement("text").attr(s),
            n || (t.xSetter = function(t, e, i) {
                for (var n, s = i.getElementsByTagName("tspan"), r = i.getAttribute(e), o = 0; o < s.length; o++)
                    (n = s[o]).getAttribute(e) === r && n.setAttribute(e, t);
                i.setAttribute(e, t)
            }
            ),
            t) : this.html(t, e, i)
        },
        fontMetrics: function(t, e) {
            return t = t || e && e.style && e.style.fontSize || this.style && this.style.fontSize,
            {
                h: e = (t = /px/.test(t) ? Y(t) : /em/.test(t) ? parseFloat(t) * (e ? this.fontMetrics(null, e.parentNode).f : 16) : 12) < 24 ? t + 3 : Math.round(1.2 * t),
                b: Math.round(.8 * e),
                f: t
            }
        },
        rotCorr: function(t, e, i) {
            var n = t;
            return e && i && (n = Math.max(n * Math.cos(e * w), 4)),
            {
                x: -t / 3 * Math.sin(e * w),
                y: n
            }
        },
        label: function(t, e, i, n, s, r, o, a, l) {
            var h, c, d, u, p, f, g, m, y, v, x, b, w, k = this, T = k.g("button" !== l && "label"), S = T.text = k.text("", 0, 0, o).attr({
                zIndex: 1
            }), M = 0, C = 3, A = 0, L = {}, P = /^url\\((.*?)\\)$/.test(n), O = P;
            l && T.addClass("highcharts-" + l),
            O = P,
            v = function() {
                return (m || 0) % 2 / 2
            }
            ,
            x = function() {
                var t = S.element.style
                  , e = {};
                c = (void 0 === d || void 0 === u || g) && D(S.textStr) && S.getBBox(),
                T.width = (d || c.width || 0) + 2 * C + A,
                T.height = (u || c.height || 0) + 2 * C,
                y = C + k.fontMetrics(t && t.fontSize, S).b,
                O && (h || (T.box = h = k.symbols[n] || P ? k.symbol(n) : k.rect(),
                h.addClass(("button" === l ? "" : "highcharts-label-box") + (l ? " highcharts-" + l + "-box" : "")),
                h.add(T),
                t = v(),
                e.x = t,
                e.y = (a ? -y : 0) + t),
                e.width = Math.round(T.width),
                e.height = Math.round(T.height),
                h.attr(I(e, L)),
                L = {})
            }
            ,
            b = function() {
                var t = A + C
                  , e = a ? 0 : y;
                D(d) && c && ("center" === g || "right" === g) && (t += {
                    center: .5,
                    right: 1
                }[g] * (d - c.width)),
                t === S.x && e === S.y || (S.attr("x", t),
                void 0 !== e && S.attr("y", e)),
                S.x = t,
                S.y = e
            }
            ,
            w = function(t, e) {
                h ? h.attr(t, e) : L[t] = e
            }
            ,
            T.onAdd = function() {
                S.add(T),
                T.attr({
                    text: t || 0 === t ? t : "",
                    x: e,
                    y: i
                }),
                h && D(s) && T.attr({
                    anchorX: s,
                    anchorY: r
                })
            }
            ,
            T.widthSetter = function(t) {
                d = N.isNumber(t) ? t : null
            }
            ,
            T.heightSetter = function(t) {
                u = t
            }
            ,
            T["text-alignSetter"] = function(t) {
                g = t
            }
            ,
            T.paddingSetter = function(t) {
                D(t) && t !== C && (C = T.padding = t,
                b())
            }
            ,
            T.paddingLeftSetter = function(t) {
                D(t) && t !== A && (A = t,
                b())
            }
            ,
            T.alignSetter = function(t) {
                (t = {
                    left: 0,
                    center: .5,
                    right: 1
                }[t]) !== M && (M = t,
                c && T.attr({
                    x: p
                }))
            }
            ,
            T.textSetter = function(t) {
                void 0 !== t && S.textSetter(t),
                x(),
                b()
            }
            ,
            T["stroke-widthSetter"] = function(t, e) {
                t && (O = !0),
                m = this["stroke-width"] = t,
                w(e, t)
            }
            ,
            T.strokeSetter = T.fillSetter = T.rSetter = function(t, e) {
                "r" !== e && ("fill" === e && t && (O = !0),
                T[e] = t),
                w(e, t)
            }
            ,
            T.anchorXSetter = function(t, e) {
                s = T.anchorX = t,
                w(e, Math.round(t) - v() - p)
            }
            ,
            T.anchorYSetter = function(t, e) {
                r = T.anchorY = t,
                w(e, t - f)
            }
            ,
            T.xSetter = function(t) {
                T.x = t,
                M && (t -= M * ((d || c.width) + 2 * C),
                T["forceAnimate:x"] = !0),
                p = Math.round(t),
                T.attr("translateX", p)
            }
            ,
            T.ySetter = function(t) {
                f = T.y = Math.round(t),
                T.attr("translateY", f)
            }
            ;
            var E = T.css;
            return I(T, {
                css: function(e) {
                    var i;
                    return e && (i = {},
                    e = H(e),
                    _(T.textProps, function(t) {
                        void 0 !== e[t] && (i[t] = e[t],
                        delete e[t])
                    }),
                    S.css(i),
                    "width"in i && x()),
                    E.call(T, e)
                },
                getBBox: function() {
                    return {
                        width: c.width + 2 * C,
                        height: c.height + 2 * C,
                        x: c.x - C,
                        y: c.y - C
                    }
                },
                shadow: function(t) {
                    return t && (x(),
                    h && h.shadow(t)),
                    T
                },
                destroy: function() {
                    G(T.element, "mouseenter"),
                    G(T.element, "mouseleave"),
                    S = S && S.destroy(),
                    h = h && h.destroy(),
                    Z.prototype.destroy.call(T),
                    T = k = x = b = w = null
                }
            })
        }
    }),
    N.Renderer = g,
    J = Nt.attr,
    Q = Nt.createElement,
    tt = Nt.css,
    et = Nt.defined,
    it = Nt.each,
    nt = Nt.extend,
    st = Nt.isFirefox,
    rt = Nt.isMS,
    ot = Nt.isWebKit,
    at = Nt.pick,
    lt = Nt.pInt,
    ht = Nt.SVGRenderer,
    ct = Nt.win,
    dt = Nt.wrap,
    nt(Nt.SVGElement.prototype, {
        htmlCss: function(t) {
            var e = this.element;
            return (e = t && "SPAN" === e.tagName && t.width) && (delete t.width,
            this.textWidth = e,
            this.htmlUpdateTransform()),
            t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap",
            t.overflow = "hidden"),
            this.styles = nt(this.styles, t),
            tt(this.element, t),
            this
        },
        htmlGetBBox: function() {
            var t = this.element;
            return {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        },
        htmlUpdateTransform: function() {
            var e, i, n, s, t, r, o, a, l, h, c, d, u;
            this.added ? (e = this.renderer,
            i = this.element,
            n = this.translateX || 0,
            s = this.translateY || 0,
            t = this.x || 0,
            r = this.y || 0,
            a = {
                left: 0,
                center: .5,
                right: 1
            }[o = this.textAlign || "left"],
            l = (h = this.styles) && h.whiteSpace,
            tt(i, {
                marginLeft: n,
                marginTop: s
            }),
            this.shadows && it(this.shadows, function(t) {
                tt(t, {
                    marginLeft: n + 1,
                    marginTop: s + 1
                })
            }),
            this.inverted && it(i.childNodes, function(t) {
                e.invertChild(t, i)
            }),
            "SPAN" === i.tagName && (h = this.rotation,
            c = this.textWidth && lt(this.textWidth),
            d = [h, o, i.innerHTML, this.textWidth, this.textAlign].join(),
            (u = c !== this.oldTextWidth) && !(u = c > this.oldTextWidth) && ((u = this.textPxLength) || (tt(i, {
                width: "",
                whiteSpace: l || "nowrap"
            }),
            u = i.offsetWidth),
            u = c < u),
            u && /[ \\-]/.test(i.textContent || i.innerText) && (tt(i, {
                width: c + "px",
                display: "block",
                whiteSpace: l || "normal"
            }),
            this.oldTextWidth = c),
            d !== this.cTT && (l = e.fontMetrics(i.style.fontSize).b,
            et(h) && h !== (this.oldRotation || 0) && this.setSpanRotation(h, a, l),
            this.getSpanCorrection(!et(h) && this.textPxLength || i.offsetWidth, l, a, h, o)),
            tt(i, {
                left: t + (this.xCorr || 0) + "px",
                top: r + (this.yCorr || 0) + "px"
            }),
            this.cTT = d,
            this.oldRotation = h)) : this.alignOnAdd = !0
        },
        setSpanRotation: function(t, e, i) {
            var n = {}
              , s = this.renderer.getTransformKey();
            n[s] = n.transform = "rotate(" + t + "deg)",
            n[s + (st ? "Origin" : "-origin")] = n.transformOrigin = 100 * e + "% " + i + "px",
            tt(this.element, n)
        },
        getSpanCorrection: function(t, e, i) {
            this.xCorr = -t * i,
            this.yCorr = -e
        }
    }),
    nt(ht.prototype, {
        getTransformKey: function() {
            return rt && !/Edge/.test(ct.navigator.userAgent) ? "-ms-transform" : ot ? "-webkit-transform" : st ? "MozTransform" : ct.opera ? "-o-transform" : ""
        },
        html: function(t, e, i) {
            var l = this.createElement("span")
              , n = l.element
              , s = l.renderer
              , r = s.isSVG
              , h = function(e, s) {
                it(["opacity", "visibility"], function(t) {
                    dt(e, t + "Setter", function(t, e, i, n) {
                        t.call(this, e, i, n),
                        s[i] = e
                    })
                }),
                e.addedSetters = !0
            };
            return l.textSetter = function(t) {
                t !== n.innerHTML && delete this.bBox,
                this.textStr = t,
                n.innerHTML = at(t, ""),
                l.doTransform = !0
            }
            ,
            r && h(l, l.element.style),
            l.xSetter = l.ySetter = l.alignSetter = l.rotationSetter = function(t, e) {
                "align" === e && (e = "textAlign"),
                l[e] = t,
                l.doTransform = !0
            }
            ,
            l.afterSetters = function() {
                this.doTransform && (this.htmlUpdateTransform(),
                this.doTransform = !1)
            }
            ,
            l.attr({
                text: t,
                x: Math.round(e),
                y: Math.round(i)
            }).css({
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize,
                position: "absolute"
            }),
            n.style.whiteSpace = "nowrap",
            l.css = l.htmlCss,
            r && (l.add = function(t) {
                var r, o = s.box.parentNode, a = [];
                if (this.parentGroup = t) {
                    if (!(r = t.div)) {
                        for (; t; )
                            a.push(t),
                            t = t.parentGroup;
                        it(a.reverse(), function(i) {
                            function t(t, e) {
                                i[e] = t,
                                "translateX" === e ? n.left = t + "px" : n.top = t + "px",
                                i.doTransform = !0
                            }
                            var n, e, s = (s = J(i.element, "class")) && {
                                className: s
                            };
                            r = i.div = i.div || Q("div", s, {
                                position: "absolute",
                                left: (i.translateX || 0) + "px",
                                top: (i.translateY || 0) + "px",
                                display: i.display,
                                opacity: i.opacity,
                                pointerEvents: i.styles && i.styles.pointerEvents
                            }, r || o),
                            n = r.style,
                            nt(i, {
                                classSetter: (e = r,
                                function(t) {
                                    this.element.setAttribute("class", t),
                                    e.className = t
                                }
                                ),
                                on: function() {
                                    return a[0].div && l.on.apply({
                                        element: a[0].div
                                    }, arguments),
                                    i
                                },
                                translateXSetter: t,
                                translateYSetter: t
                            }),
                            i.addedSetters || h(i, n)
                        })
                    }
                } else
                    r = o;
                return r.appendChild(n),
                l.added = !0,
                l.alignOnAdd && l.htmlUpdateTransform(),
                l
            }
            ),
            l
        }
    }),
    pt = (ut = Nt).defined,
    ft = ut.each,
    gt = ut.extend,
    mt = ut.merge,
    yt = ut.pick,
    vt = ut.timeUnits,
    xt = ut.win,
    ut.Time = function(t) {
        this.update(t, !1)
    }
    ,
    ut.Time.prototype = {
        defaultOptions: {},
        update: function(t) {
            var e = yt(t && t.useUTC, !0)
              , s = this;
            this.options = t = mt(!0, this.options || {}, t),
            this.Date = t.Date || xt.Date,
            this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset,
            this.getTimezoneOffset = this.timezoneOffsetFunction(),
            (this.variableTimezone = !(e && !t.getTimezoneOffset && !t.timezone)) || this.timezoneOffset ? (this.get = function(t, e) {
                var i = e.getTime()
                  , n = i - s.getTimezoneOffset(e);
                return e.setTime(n),
                t = e["getUTC" + t](),
                e.setTime(i),
                t
            }
            ,
            this.set = function(t, e, i) {
                var n;
                -1 !== ut.inArray(t, ["Milliseconds", "Seconds", "Minutes"]) ? e["set" + t](i) : (n = s.getTimezoneOffset(e),
                n = e.getTime() - n,
                e.setTime(n),
                e["setUTC" + t](i),
                t = s.getTimezoneOffset(e),
                n = e.getTime() + t,
                e.setTime(n))
            }
            ) : e ? (this.get = function(t, e) {
                return e["getUTC" + t]()
            }
            ,
            this.set = function(t, e, i) {
                return e["setUTC" + t](i)
            }
            ) : (this.get = function(t, e) {
                return e["get" + t]()
            }
            ,
            this.set = function(t, e, i) {
                return e["set" + t](i)
            }
            )
        },
        makeTime: function(t, e, i, n, s, r) {
            var o, a, l;
            return this.useUTC ? (o = this.Date.UTC.apply(0, arguments),
            o += a = this.getTimezoneOffset(o),
            a !== (l = this.getTimezoneOffset(o)) ? o += l - a : a - 36e5 !== this.getTimezoneOffset(o - 36e5) || ut.isSafari || (o -= 36e5)) : o = new this.Date(t,e,yt(i, 1),yt(n, 0),yt(s, 0),yt(r, 0)).getTime(),
            o
        },
        timezoneOffsetFunction: function() {
            var t = this
              , e = this.options
              , i = xt.moment;
            if (!this.useUTC)
                return function(t) {
                    return 6e4 * new Date(t).getTimezoneOffset()
                }
                ;
            if (e.timezone) {
                if (i)
                    return function(t) {
                        return 6e4 * -i.tz(t, e.timezone).utcOffset()
                    }
                    ;
                ut.error(25)
            }
            return this.useUTC && e.getTimezoneOffset ? function(t) {
                return 6e4 * e.getTimezoneOffset(t)
            }
            : function() {
                return 6e4 * (t.timezoneOffset || 0)
            }
        },
        dateFormat: function(i, n, t) {
            if (!ut.defined(n) || isNaN(n))
                return ut.defaultOptions.lang.invalidDate || "";
            i = ut.pick(i, "%Y-%m-%d %H:%M:%S");
            var s = this
              , e = new this.Date(n)
              , r = this.get("Hours", e)
              , o = this.get("Day", e)
              , a = this.get("Date", e)
              , l = this.get("Month", e)
              , h = this.get("FullYear", e)
              , c = ut.defaultOptions.lang
              , d = c.weekdays
              , u = c.shortWeekdays
              , p = ut.pad
              , e = ut.extend({
                a: u ? u[o] : d[o].substr(0, 3),
                A: d[o],
                d: p(a),
                e: p(a, 2, " "),
                w: o,
                b: c.shortMonths[l],
                B: c.months[l],
                m: p(l + 1),
                y: h.toString().substr(2, 2),
                Y: h,
                H: p(r),
                k: r,
                I: p(r % 12 || 12),
                l: r % 12 || 12,
                M: p(s.get("Minutes", e)),
                p: r < 12 ? "AM" : "PM",
                P: r < 12 ? "am" : "pm",
                S: p(e.getSeconds()),
                L: p(Math.round(n % 1e3), 3)
            }, ut.dateFormats);
            return ut.objectEach(e, function(t, e) {
                for (; -1 !== i.indexOf("%" + e); )
                    i = i.replace("%" + e, "function" == typeof t ? t.call(s, n) : t)
            }),
            t ? i.substr(0, 1).toUpperCase() + i.substr(1) : i
        },
        getTimeTicks: function(t, e, i, n) {
            var s, r, o = this, a = [], l = {}, h = new o.Date(e), c = t.unitRange, d = t.count || 1;
            if (pt(e)) {
                o.set("Milliseconds", h, c >= vt.second ? 0 : d * Math.floor(o.get("Milliseconds", h) / d)),
                c >= vt.second && o.set("Seconds", h, c >= vt.minute ? 0 : d * Math.floor(o.get("Seconds", h) / d)),
                c >= vt.minute && o.set("Minutes", h, c >= vt.hour ? 0 : d * Math.floor(o.get("Minutes", h) / d)),
                c >= vt.hour && o.set("Hours", h, c >= vt.day ? 0 : d * Math.floor(o.get("Hours", h) / d)),
                c >= vt.day && o.set("Date", h, c >= vt.month ? 1 : d * Math.floor(o.get("Date", h) / d)),
                c >= vt.month && (o.set("Month", h, c >= vt.year ? 0 : d * Math.floor(o.get("Month", h) / d)),
                s = o.get("FullYear", h)),
                c >= vt.year && o.set("FullYear", h, s - s % d),
                c === vt.week && o.set("Date", h, o.get("Date", h) - o.get("Day", h) + yt(n, 1)),
                s = o.get("FullYear", h),
                n = o.get("Month", h);
                var u = o.get("Date", h)
                  , p = o.get("Hours", h);
                for (e = h.getTime(),
                o.variableTimezone && (r = i - e > 4 * vt.month || o.getTimezoneOffset(e) !== o.getTimezoneOffset(i)),
                h = h.getTime(),
                e = 1; h < i; )
                    a.push(h),
                    h = c === vt.year ? o.makeTime(s + e * d, 0) : c === vt.month ? o.makeTime(s, n + e * d) : !r || c !== vt.day && c !== vt.week ? r && c === vt.hour && 1 < d ? o.makeTime(s, n, u, p + e * d) : h + c * d : o.makeTime(s, n, u + e * d * (c === vt.day ? 1 : 7)),
                    e++;
                a.push(h),
                c <= vt.hour && a.length < 1e4 && ft(a, function(t) {
                    0 == t % 18e5 && "000000000" === o.dateFormat("%H%M%S%L", t) && (l[t] = "day")
                })
            }
            return a.info = gt(t, {
                higherRanks: l,
                totalRange: c * d
            }),
            a
        }
    },
    wt = (bt = Nt).color,
    kt = bt.merge,
    bt.defaultOptions = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {},
        time: bt.Time.prototype.defaultOptions,
        chart: {
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            resetZoomButton: {
                theme: {
                    zIndex: 6
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            },
            width: null,
            height: null,
            borderColor: "#335cad",
            backgroundColor: "#ffffff",
            plotBorderColor: "#cccccc"
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            widthAdjust: -44
        },
        subtitle: {
            text: "",
            align: "center",
            widthAdjust: -44
        },
        plotOptions: {},
        labels: {
            style: {
                position: "absolute",
                color: "#333333"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            alignColumns: !0,
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: {
                activeColor: "#003399",
                inactiveColor: "#cccccc"
            },
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold",
                textOverflow: "ellipsis"
            },
            itemHoverStyle: {
                color: "#000000"
            },
            itemHiddenStyle: {
                color: "#cccccc"
            },
            shadow: !1,
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            squareSymbol: !0,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "#ffffff",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: bt.svg,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            padding: 8,
            snap: bt.isTouchDevice ? 25 : 10,
            backgroundColor: wt("#f7f7f7").setOpacity(.85).get(),
            borderWidth: 1,
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#999999",
                fontSize: "9px"
            },
            text: "Highcharts.com"
        }
    },
    bt.setOptions = function(t) {
        return bt.defaultOptions = kt(!0, bt.defaultOptions, t),
        bt.time.update(kt(bt.defaultOptions.global, bt.defaultOptions.time), !1),
        bt.defaultOptions
    }
    ,
    bt.getOptions = function() {
        return bt.defaultOptions
    }
    ,
    bt.defaultPlotOptions = bt.defaultOptions.plotOptions,
    bt.time = new bt.Time(kt(bt.defaultOptions.global, bt.defaultOptions.time)),
    bt.dateFormat = function(t, e, i) {
        return bt.time.dateFormat(t, e, i)
    }
    ,
    St = (Tt = Nt).correctFloat,
    Mt = Tt.defined,
    Ct = Tt.destroyObjectProperties,
    At = Tt.fireEvent,
    Lt = Tt.isNumber,
    Pt = Tt.merge,
    Ot = Tt.pick,
    Et = Tt.deg2rad,
    Tt.Tick = function(t, e, i, n) {
        this.axis = t,
        this.pos = e,
        this.type = i || "",
        this.isNewLabel = this.isNew = !0,
        i || n || this.addLabel()
    }
    ,
    Tt.Tick.prototype = {
        addLabel: function() {
            var t, e = this.axis, i = e.options, n = e.chart, s = e.categories, r = e.names, o = this.pos, a = i.labels, l = o === (c = e.tickPositions)[0], h = o === c[c.length - 1], r = s ? Ot(s[o], r[o], o) : o, s = this.label, c = c.info;
            e.isDatetimeAxis && c && (t = i.dateTimeLabelFormats[c.higherRanks[o] || c.unitName]),
            this.isFirst = l,
            this.isLast = h,
            i = e.labelFormatter.call({
                axis: e,
                chart: n,
                isFirst: l,
                isLast: h,
                dateTimeLabelFormat: t,
                value: e.isLog ? St(e.lin2log(r)) : r,
                pos: o
            }),
            Mt(s) ? s && s.attr({
                text: i
            }) : ((this.label = s = Mt(i) && a.enabled ? n.renderer.text(i, 0, 0, a.useHTML).css(Pt(a.style)).add(e.labelGroup) : null) && (s.textPxLength = s.getBBox().width),
            this.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(t) {
            var e, i = this.axis, n = i.options.labels, s = t.x, r = i.chart.chartWidth, o = i.chart.spacing, a = Ot(i.labelLeft, Math.min(i.pos, o[3])), o = Ot(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, r - o[1])), l = this.label, h = this.rotation, c = {
                left: 0,
                center: .5,
                right: 1
            }[i.labelAlign || l.attr("align")], d = l.getBBox().width, u = i.getSlotWidth(), p = u, f = 1, g = {};
            h || !1 === n.overflow ? h < 0 && s - c * d < a ? e = Math.round(s / Math.cos(h * Et) - a) : 0 < h && o < s + c * d && (e = Math.round((r - s) / Math.cos(h * Et))) : (r = s + (1 - c) * d,
            s - c * d < a ? p = t.x + p * (1 - c) - a : o < r && (p = o - t.x + p * c,
            f = -1),
            (p = Math.min(u, p)) < u && "center" === i.labelAlign && (t.x += f * (u - p - c * (u - Math.min(d, p)))),
            (p < d || i.autoRotation && (l.styles || {}).width) && (e = p)),
            e && (g.width = e,
            (n.style || {}).textOverflow || (g.textOverflow = "ellipsis"),
            l.css(g))
        },
        getPosition: function(t, e, i, n) {
            var s = this.axis
              , r = s.chart
              , o = n && r.oldChartHeight || r.chartHeight;
            return t = {
                x: t ? Tt.correctFloat(s.translate(e + i, null, null, n) + s.transB) : s.left + s.offset + (s.opposite ? (n && r.oldChartWidth || r.chartWidth) - s.right - s.left : 0),
                y: t ? o - s.bottom + s.offset - (s.opposite ? s.height : 0) : Tt.correctFloat(o - s.translate(e + i, null, null, n) - s.transB)
            },
            At(this, "afterGetPosition", {
                pos: t
            }),
            t
        },
        getLabelPosition: function(t, e, i, n, s, r, o, a) {
            var l = this.axis
              , h = l.transA
              , c = l.reversed
              , d = l.staggerLines
              , u = l.tickRotCorr || {
                x: 0,
                y: 0
            }
              , p = s.y
              , f = n || l.reserveSpaceDefault ? 0 : -l.labelOffset * ("center" === l.labelAlign ? .5 : 1)
              , g = {};
            return Mt(p) || (p = 0 === l.side ? i.rotation ? -8 : -i.getBBox().height : 2 === l.side ? u.y + 8 : Math.cos(i.rotation * Et) * (u.y - i.getBBox(!1, 0).height / 2)),
            t = t + s.x + f + u.x - (r && n ? r * h * (c ? -1 : 1) : 0),
            e = e + p - (r && !n ? r * h * (c ? 1 : -1) : 0),
            d && (i = o / (a || 1) % d,
            l.opposite && (i = d - i - 1),
            e += l.labelOffset / d * i),
            g.x = t,
            g.y = Math.round(e),
            At(this, "afterGetLabelPosition", {
                pos: g
            }),
            g
        },
        getMarkPath: function(t, e, i, n, s, r) {
            return r.crispLine(["M", t, e, "L", t + (s ? 0 : -i), e + (s ? i : 0)], n)
        },
        renderGridLine: function(t, e, i) {
            var n = this.axis
              , s = n.options
              , r = this.gridLine
              , o = {}
              , a = this.pos
              , l = this.type
              , h = n.tickmarkOffset
              , c = n.chart.renderer
              , d = l ? l + "Grid" : "grid"
              , u = s[d + "LineWidth"]
              , p = s[d + "LineColor"]
              , s = s[d + "LineDashStyle"];
            r || (o.stroke = p,
            o["stroke-width"] = u,
            s && (o.dashstyle = s),
            l || (o.zIndex = 1),
            t && (o.opacity = 0),
            this.gridLine = r = c.path().attr(o).addClass("highcharts-" + (l ? l + "-" : "") + "grid-line").add(n.gridGroup)),
            !t && r && (t = n.getPlotLinePath(a + h, r.strokeWidth() * i, t, !0)) && r[this.isNew ? "attr" : "animate"]({
                d: t,
                opacity: e
            })
        },
        renderMark: function(t, e, i) {
            var n = this.axis
              , s = n.options
              , r = n.chart.renderer
              , o = this.type
              , a = o ? o + "Tick" : "tick"
              , l = n.tickSize(a)
              , h = this.mark
              , c = !h
              , d = t.x;
            t = t.y;
            var u = Ot(s[a + "Width"], !o && n.isXAxis ? 1 : 0)
              , s = s[a + "Color"];
            l && (n.opposite && (l[0] = -l[0]),
            c && (this.mark = h = r.path().addClass("highcharts-" + (o ? o + "-" : "") + "tick").add(n.axisGroup),
            h.attr({
                stroke: s,
                "stroke-width": u
            })),
            h[c ? "attr" : "animate"]({
                d: this.getMarkPath(d, t, l[0], h.strokeWidth() * i, n.horiz, r),
                opacity: e
            }))
        },
        renderLabel: function(t, e, i, n) {
            var s = (h = this.axis).horiz
              , r = h.options
              , o = this.label
              , a = r.labels
              , l = a.step
              , h = h.tickmarkOffset
              , c = !0
              , d = t.x;
            t = t.y,
            o && Lt(d) && (o.xy = t = this.getLabelPosition(d, t, o, s, a, h, n, l),
            this.isFirst && !this.isLast && !Ot(r.showFirstLabel, 1) || this.isLast && !this.isFirst && !Ot(r.showLastLabel, 1) ? c = !1 : !s || a.step || a.rotation || e || 0 === i || this.handleOverflow(t),
            l && n % l && (c = !1),
            c && Lt(t.y) ? (t.opacity = i,
            o[this.isNewLabel ? "attr" : "animate"](t),
            this.isNewLabel = !1) : (o.attr("y", -9999),
            this.isNewLabel = !0))
        },
        render: function(t, e, i) {
            var n = (a = this.axis).horiz
              , s = this.getPosition(n, this.pos, a.tickmarkOffset, e)
              , r = s.x
              , o = s.y
              , a = n && r === a.pos + a.len || !n && o === a.pos ? -1 : 1;
            i = Ot(i, 1),
            this.isActive = !0,
            this.renderGridLine(e, i, a),
            this.renderMark(s, i, a),
            this.renderLabel(s, e, i, t),
            this.isNew = !1,
            Tt.fireEvent(this, "afterRender")
        },
        destroy: function() {
            Ct(this, this.axis)
        }
    };
    var Dt, _t, It, Rt, zt, Bt, Ft, Ht, jt, Wt, Xt, Yt, Gt, $t, qt, Vt, Ut, Kt, Zt, Jt, Qt, te, ee, ie, ne, se, re, oe, ae, le, he, ce, de, ue, pe, fe, ge, me, ye, ve, xe, be, we, ke, Te, Se, Me, Ce, Ae, Le, Pe, Oe, Ee, Ne, De, _e, Ie, Re, ze, Be, Fe, He, je, We, Xe, Ye, Ge, $e, qe, Ve, Ue, Ke, Ze, Je, Qe, ti, ei, ii, ni, si, ri, oi, ai, li, hi, ci, di, ui, pi, fi, gi, mi, yi, vi, xi, bi, wi, ki, Ti, Si, Mi, Ci, Ai, Li, Pi, Oi, Ei, Ni, Di, _i, Ii, Ri, zi, Bi, Fi, Hi, ji, Wi, Xi, Yi, Gi, $i, qi, Vi, Ui, Ki, Zi, Ji, Qi, tn, en, nn, sn, rn, on, an, ln, hn, cn, dn, un, pn, fn, gn, mn, yn, vn, xn, bn, wn, kn, Tn, Sn, Mn, Cn, An, Ln, Pn, On, En, Nn, Dn, _n, In, Rn, zn, Bn, Fn, Hn, jn, Wn, Xn, Yn, Gn, $n, qn, Vn, Un, Kn, Zn, Jn, Qn, ts, es, is, ns, ss, rs, os, as, ls, hs, cs, ds, us, ps, fs, gs, ms, ys, vs, xs, bs, ws, ks, Ts, Ss, Ms, Cs, As, Ls, Ps, Os, Es, Ns, Ds, _s, Is, Rs, zs, Bs, Fs, Hs, js, Ws, Xs, Ys, Gs, $s, qs, Vs, Us, Ks, Zs, Js, Qs, tr, er, ir, nr, sr, rr, or, ar, lr, hr, cr, dr, ur, pr, fr, gr, mr, yr, vr, xr, br, wr, kr, Tr, Sr, Mr, Cr, Ar, Lr, Pr, Or, Er, Nr, Dr, _r, Ir, Rr, zr, Br, Fr, Hr, jr, Wr, Xr, Yr, Gr, $r, qr, Vr, Ur, Kr, Zr, Jr, Qr, to, eo, io, no, so, ro, oo, ao, lo, ho, co, uo, po, fo, go, mo, yo, vo, xo, bo, wo = (_t = (Dt = Nt).addEvent,
    It = Dt.animObject,
    Rt = Dt.arrayMax,
    zt = Dt.arrayMin,
    Bt = Dt.color,
    Ft = Dt.correctFloat,
    Ht = Dt.defaultOptions,
    jt = Dt.defined,
    Wt = Dt.deg2rad,
    Xt = Dt.destroyObjectProperties,
    Yt = Dt.each,
    Gt = Dt.extend,
    $t = Dt.fireEvent,
    qt = Dt.format,
    Vt = Dt.getMagnitude,
    Ut = Dt.grep,
    Kt = Dt.inArray,
    Zt = Dt.isArray,
    Jt = Dt.isNumber,
    Qt = Dt.isString,
    te = Dt.merge,
    ee = Dt.normalizeTickInterval,
    ie = Dt.objectEach,
    ne = Dt.pick,
    se = Dt.removeEvent,
    re = Dt.splat,
    oe = Dt.syncTimeout,
    ae = Dt.Tick,
    le = function() {
        this.init.apply(this, arguments)
    }
    ,
    Dt.extend(le.prototype, {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            labels: {
                enabled: !0,
                style: {
                    color: "#666666",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0
            },
            maxPadding: .01,
            minorTickLength: 2,
            minorTickPosition: "outside",
            minPadding: .01,
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#666666"
                }
            },
            type: "linear",
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#ccd6eb",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            tickColor: "#ccd6eb"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8
            },
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                allowOverlap: !1,
                enabled: !1,
                formatter: function() {
                    return Dt.numberFormat(this.total, -1)
                },
                style: {
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "#000000",
                    textOutline: "1px contrast"
                }
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        init: function(t, e) {
            var i = e.isX
              , n = this;
            n.chart = t,
            n.horiz = t.inverted && !n.isZAxis ? !i : i,
            n.isXAxis = i,
            n.coll = n.coll || (i ? "xAxis" : "yAxis"),
            $t(this, "init", {
                userOptions: e
            }),
            n.opposite = e.opposite,
            n.side = e.side || (n.horiz ? n.opposite ? 0 : 2 : n.opposite ? 1 : 3),
            n.setOptions(e);
            var s = this.options
              , r = s.type;
            n.labelFormatter = s.labels.formatter || n.defaultLabelFormatter,
            n.userOptions = e,
            n.minPixelPadding = 0,
            n.reversed = s.reversed,
            n.visible = !1 !== s.visible,
            n.zoomEnabled = !1 !== s.zoomEnabled,
            n.hasNames = "category" === r || !0 === s.categories,
            n.categories = s.categories || n.hasNames,
            n.names || (n.names = [],
            n.names.keys = {}),
            n.plotLinesAndBandsGroups = {},
            n.isLog = "logarithmic" === r,
            n.isDatetimeAxis = "datetime" === r,
            n.positiveValuesOnly = n.isLog && !n.allowNegativeLog,
            n.isLinked = jt(s.linkedTo),
            n.ticks = {},
            n.labelEdge = [],
            n.minorTicks = {},
            n.plotLinesAndBands = [],
            n.alternateBands = {},
            n.len = 0,
            n.minRange = n.userMinRange = s.minRange || s.maxZoom,
            n.range = s.range,
            n.offset = s.offset || 0,
            n.stacks = {},
            n.oldStacks = {},
            n.stacksTouched = 0,
            n.max = null,
            n.min = null,
            n.crosshair = ne(s.crosshair, re(t.options.tooltip.crosshairs)[i ? 0 : 1], !1),
            e = n.options.events,
            -1 === Kt(n, t.axes) && (i ? t.axes.splice(t.xAxis.length, 0, n) : t.axes.push(n),
            t[n.coll].push(n)),
            n.series = n.series || [],
            t.inverted && !n.isZAxis && i && void 0 === n.reversed && (n.reversed = !0),
            ie(e, function(t, e) {
                _t(n, e, t)
            }),
            n.lin2log = s.linearToLogConverter || n.lin2log,
            n.isLog && (n.val2lin = n.log2lin,
            n.lin2val = n.lin2log),
            $t(this, "afterInit")
        },
        setOptions: function(t) {
            this.options = te(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], te(Ht[this.coll], t)),
            $t(this, "afterSetOptions", {
                userOptions: t
            })
        },
        defaultLabelFormatter: function() {
            var t, e = this.axis, i = this.value, n = e.chart.time, s = e.categories, r = this.dateTimeLabelFormat, o = (a = Ht.lang).numericSymbols, a = a.numericSymbolMagnitude || 1e3, l = o && o.length, h = e.options.labels.format, e = e.isLog ? Math.abs(i) : e.tickInterval;
            if (h)
                t = qt(h, this, n);
            else if (s)
                t = i;
            else if (r)
                t = n.dateFormat(r, i);
            else if (l && 1e3 <= e)
                for (; l-- && void 0 === t; )
                    (n = Math.pow(a, l + 1)) <= e && 0 == 10 * i % n && null !== o[l] && 0 !== i && (t = Dt.numberFormat(i / n, -1) + o[l]);
            return void 0 === t && (t = 1e4 <= Math.abs(i) ? Dt.numberFormat(i, -1) : Dt.numberFormat(i, -1, void 0, "")),
            t
        },
        getSeriesExtremes: function() {
            var s = this
              , r = s.chart;
            $t(this, "getSeriesExtremes", null, function() {
                s.hasVisibleSeries = !1,
                s.dataMin = s.dataMax = s.threshold = null,
                s.softThreshold = !s.isXAxis,
                s.buildStacks && s.buildStacks(),
                Yt(s.series, function(t) {
                    var e, i, n;
                    !t.visible && r.options.chart.ignoreHiddenSeries || (i = (e = t.options).threshold,
                    s.hasVisibleSeries = !0,
                    s.positiveValuesOnly && i <= 0 && (i = null),
                    s.isXAxis ? (e = t.xData).length && (t = zt(e),
                    n = Rt(e),
                    Jt(t) || t instanceof Date || (e = Ut(e, Jt),
                    t = zt(e),
                    n = Rt(e)),
                    e.length && (s.dataMin = Math.min(ne(s.dataMin, e[0], t), t),
                    s.dataMax = Math.max(ne(s.dataMax, e[0], n), n))) : (t.getExtremes(),
                    n = t.dataMax,
                    t = t.dataMin,
                    jt(t) && jt(n) && (s.dataMin = Math.min(ne(s.dataMin, t), t),
                    s.dataMax = Math.max(ne(s.dataMax, n), n)),
                    jt(i) && (s.threshold = i),
                    e.softThreshold && !s.positiveValuesOnly || (s.softThreshold = !1)))
                })
            }),
            $t(this, "afterGetSeriesExtremes")
        },
        translate: function(t, e, i, n, s, r) {
            var o = this.linkedParent || this
              , a = 1
              , l = 0
              , h = n ? o.oldTransA : o.transA;
            n = n ? o.oldMin : o.min;
            var c = o.minPixelPadding;
            return s = (o.isOrdinal || o.isBroken || o.isLog && s) && o.lin2val,
            h = h || o.transA,
            i && (a *= -1,
            l = o.len),
            o.reversed && (l -= (a *= -1) * (o.sector || o.len)),
            e ? (t = (t * a + l - c) / h + n,
            s && (t = o.lin2val(t))) : (s && (t = o.val2lin(t)),
            t = Jt(n) ? a * (t - n) * h + l + a * c + (Jt(r) ? h * r : 0) : void 0),
            t
        },
        toPixels: function(t, e) {
            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
        },
        toValue: function(t, e) {
            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(t, e, i, n, s) {
            var r, o, a = this.chart, l = this.left, h = this.top, c = i && a.oldChartHeight || a.chartHeight, d = i && a.oldChartWidth || a.chartWidth, u = this.transB, p = function(t, e, i) {
                return (t < e || i < t) && (n ? t = Math.min(Math.max(e, t), i) : o = !0),
                t
            };
            return s = ne(s, this.translate(t, null, null, i)),
            s = Math.min(Math.max(-1e5, s), 1e5),
            t = i = Math.round(s + u),
            u = r = Math.round(c - s - u),
            Jt(s) ? this.horiz ? (u = h,
            r = c - this.bottom,
            t = i = p(t, l, l + this.width)) : (t = l,
            i = d - this.right,
            u = r = p(u, h, h + this.height)) : n = !(o = !0),
            o && !n ? null : a.renderer.crispLine(["M", t, u, "L", i, r], e || 1)
        },
        getLinearTickPositions: function(t, e, i) {
            var n, s = Ft(Math.floor(e / t) * t);
            i = Ft(Math.ceil(i / t) * t);
            var r, o = [];
            if (Ft(s + t) === s && (r = 20),
            this.single)
                return [e];
            for (e = s; e <= i && (o.push(e),
            (e = Ft(e + t, r)) !== n); )
                n = e;
            return o
        },
        getMinorTickInterval: function() {
            var t = this.options;
            return !0 === t.minorTicks ? ne(t.minorTickInterval, "auto") : !1 === t.minorTicks ? null : t.minorTickInterval
        },
        getMinorTickPositions: function() {
            var n = this
              , t = n.options
              , e = n.tickPositions
              , s = n.minorTickInterval
              , r = []
              , i = n.pointRangePadding || 0
              , o = n.min - i
              , a = (i = n.max + i) - o;
            if (a && a / s < n.len / 3)
                if (n.isLog)
                    Yt(this.paddedTicks, function(t, e, i) {
                        e && r.push.apply(r, n.getLogTickPositions(s, i[e - 1], i[e], !0))
                    });
                else if (n.isDatetimeAxis && "auto" === this.getMinorTickInterval())
                    r = r.concat(n.getTimeTicks(n.normalizeTimeTickInterval(s), o, i, t.startOfWeek));
                else
                    for (t = o + (e[0] - o) % s; t <= i && t !== r[0]; t += s)
                        r.push(t);
            return 0 !== r.length && n.trimTicks(r),
            r
        },
        adjustForMinRange: function() {
            var t, e, i, n, s, r, o, a = this.options, l = this.min, h = this.max;
            this.isXAxis && void 0 === this.minRange && !this.isLog && (jt(a.min) || jt(a.max) ? this.minRange = null : (Yt(this.series, function(t) {
                for (r = t.xData,
                n = t.xIncrement ? 1 : r.length - 1; 0 < n; n--)
                    s = r[n] - r[n - 1],
                    (void 0 === i || s < i) && (i = s)
            }),
            this.minRange = Math.min(5 * i, this.dataMax - this.dataMin))),
            h - l < this.minRange && (e = this.dataMax - this.dataMin >= this.minRange,
            t = [l - (t = ((o = this.minRange) - h + l) / 2), ne(a.min, l - t)],
            e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin),
            h = [(l = Rt(t)) + o, ne(a.max, l + o)],
            e && (h[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax),
            (h = zt(h)) - l < o && (t[0] = h - o,
            t[1] = ne(a.min, h - o),
            l = Rt(t))),
            this.min = l,
            this.max = h
        },
        getClosest: function() {
            var n;
            return this.categories ? n = 1 : Yt(this.series, function(t) {
                var e = t.closestPointRange
                  , i = t.visible || !t.chart.options.chart.ignoreHiddenSeries;
                !t.noSharedTooltip && jt(e) && i && (n = jt(n) ? Math.min(n, e) : e)
            }),
            n
        },
        nameToX: function(t) {
            var e, i = Zt(this.categories), n = i ? this.categories : this.names, s = t.options.x;
            return t.series.requireSorting = !1,
            jt(s) || (s = !1 === this.options.uniqueNames ? t.series.autoIncrement() : i ? Kt(t.name, n) : ne(n.keys[t.name], -1)),
            -1 === s ? i || (e = n.length) : e = s,
            void 0 !== e && (this.names[e] = t.name,
            this.names.keys[t.name] = e),
            e
        },
        updateNames: function() {
            var s = this
              , e = this.names;
            0 < e.length && (Yt(Dt.keys(e.keys), function(t) {
                delete e.keys[t]
            }),
            e.length = 0,
            this.minRange = this.userMinRange,
            Yt(this.series || [], function(n) {
                n.xIncrement = null,
                n.points && !n.isDirtyData || (n.processData(),
                n.generatePoints()),
                Yt(n.points, function(t, e) {
                    var i;
                    !t.options || void 0 !== (i = s.nameToX(t)) && i !== t.x && (t.x = i,
                    n.xData[e] = i)
                })
            }))
        },
        setAxisTranslation: function(t) {
            var i, n = this, e = n.max - n.min, s = n.axisPointRange || 0, r = 0, o = 0, a = n.linkedParent, l = !!n.categories, h = n.transA, c = n.isXAxis;
            (c || l || s) && (i = n.getClosest(),
            a ? (r = a.minPointOffset,
            o = a.pointRangePadding) : Yt(n.series, function(t) {
                var e = l ? 1 : c ? ne(t.options.pointRange, i, 0) : n.axisPointRange || 0;
                t = t.options.pointPlacement,
                s = Math.max(s, e),
                n.single || (r = Math.max(r, Qt(t) ? 0 : e / 2),
                o = Math.max(o, "on" === t ? 0 : e))
            }),
            a = n.ordinalSlope && i ? n.ordinalSlope / i : 1,
            n.minPointOffset = r *= a,
            n.pointRangePadding = o *= a,
            n.pointRange = Math.min(s, e),
            c && (n.closestPointRange = i)),
            t && (n.oldTransA = h),
            n.translationSlope = n.transA = h = n.options.staticScale || n.len / (e + o || 1),
            n.transB = n.horiz ? n.left : n.bottom,
            n.minPixelPadding = h * r,
            $t(this, "afterSetAxisTranslation")
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(t) {
            var e, i, n, s, r = this, o = r.chart, a = r.options, l = r.isLog, h = r.isDatetimeAxis, c = r.isXAxis, d = r.isLinked, u = a.maxPadding, p = a.minPadding, f = a.tickInterval, g = a.tickPixelInterval, m = r.categories, y = Jt(r.threshold) ? r.threshold : null, v = r.softThreshold;
            h || m || d || this.getTickAmount(),
            n = ne(r.userMin, a.min),
            s = ne(r.userMax, a.max),
            d ? (r.linkedParent = o[r.coll][a.linkedTo],
            o = r.linkedParent.getExtremes(),
            r.min = ne(o.min, o.dataMin),
            r.max = ne(o.max, o.dataMax),
            a.type !== r.linkedParent.options.type && Dt.error(11, 1)) : (!v && jt(y) && (r.dataMin >= y ? (e = y,
            p = 0) : r.dataMax <= y && (i = y,
            u = 0)),
            r.min = ne(n, e, r.dataMin),
            r.max = ne(s, i, r.dataMax)),
            l && (r.positiveValuesOnly && !t && Math.min(r.min, ne(r.dataMin, r.min)) <= 0 && Dt.error(10, 1),
            r.min = Ft(r.log2lin(r.min), 15),
            r.max = Ft(r.log2lin(r.max), 15)),
            r.range && jt(r.max) && (r.userMin = r.min = n = Math.max(r.dataMin, r.minFromRange()),
            r.userMax = s = r.max,
            r.range = null),
            $t(r, "foundExtremes"),
            r.beforePadding && r.beforePadding(),
            r.adjustForMinRange(),
            !(m || r.axisPointRange || r.usePercentage || d) && jt(r.min) && jt(r.max) && (o = r.max - r.min) && (!jt(n) && p && (r.min -= o * p),
            !jt(s) && u && (r.max += o * u)),
            Jt(a.softMin) && !Jt(r.userMin) && (r.min = Math.min(r.min, a.softMin)),
            Jt(a.softMax) && !Jt(r.userMax) && (r.max = Math.max(r.max, a.softMax)),
            Jt(a.floor) && (r.min = Math.max(r.min, a.floor)),
            Jt(a.ceiling) && (r.max = Math.min(r.max, a.ceiling)),
            v && jt(r.dataMin) && (y = y || 0,
            !jt(n) && r.min < y && r.dataMin >= y ? r.min = y : !jt(s) && r.max > y && r.dataMax <= y && (r.max = y)),
            r.tickInterval = r.min === r.max || void 0 === r.min || void 0 === r.max ? 1 : d && !f && g === r.linkedParent.options.tickPixelInterval ? f = r.linkedParent.tickInterval : ne(f, this.tickAmount ? (r.max - r.min) / Math.max(this.tickAmount - 1, 1) : void 0, m ? 1 : (r.max - r.min) * g / Math.max(r.len, g)),
            c && !t && Yt(r.series, function(t) {
                t.processData(r.min !== r.oldMin || r.max !== r.oldMax)
            }),
            r.setAxisTranslation(!0),
            r.beforeSetTickPositions && r.beforeSetTickPositions(),
            r.postProcessTickInterval && (r.tickInterval = r.postProcessTickInterval(r.tickInterval)),
            r.pointRange && !f && (r.tickInterval = Math.max(r.pointRange, r.tickInterval)),
            t = ne(a.minTickInterval, r.isDatetimeAxis && r.closestPointRange),
            !f && r.tickInterval < t && (r.tickInterval = t),
            h || l || f || (r.tickInterval = ee(r.tickInterval, null, Vt(r.tickInterval), ne(a.allowDecimals, !(.5 < r.tickInterval && r.tickInterval < 5 && 1e3 < r.max && r.max < 9999)), !!this.tickAmount)),
            this.tickAmount || (r.tickInterval = r.unsquish()),
            this.setTickPositions()
        },
        setTickPositions: function() {
            var t = this.options
              , e = t.tickPositions
              , i = this.getMinorTickInterval()
              , n = t.tickPositioner
              , s = t.startOnTick
              , r = t.endOnTick;
            this.tickmarkOffset = this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0,
            this.minorTickInterval = "auto" === i && this.tickInterval ? this.tickInterval / 5 : i,
            this.single = this.min === this.max && jt(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== t.allowDecimals),
            this.tickPositions = i = e && e.slice(),
            !i && ((i = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max)).length > this.len && ((i = [i[0], i.pop()])[0] === i[1] && (i.length = 1)),
            this.tickPositions = i,
            n = n && n.apply(this, [this.min, this.max])) && (this.tickPositions = i = n),
            this.paddedTicks = i.slice(0),
            this.trimTicks(i, s, r),
            this.isLinked || (this.single && i.length < 2 && (this.min -= .5,
            this.max += .5),
            e || n || this.adjustTickAmount()),
            $t(this, "afterSetTickPositions")
        },
        trimTicks: function(t, e, i) {
            var n = t[0]
              , s = t[t.length - 1]
              , r = this.minPointOffset || 0;
            if (!this.isLinked) {
                if (e && -Infinity !== n)
                    this.min = n;
                else
                    for (; this.min - r > t[0]; )
                        t.shift();
                if (i)
                    this.max = s;
                else
                    for (; this.max + r < t[t.length - 1]; )
                        t.pop();
                0 === t.length && jt(n) && !this.options.tickPositions && t.push((s + n) / 2)
            }
        },
        alignToOthers: function() {
            var i, n = {}, t = this.options;
            return !1 === this.chart.options.chart.alignTicks || !1 === t.alignTicks || !1 === t.startOnTick || !1 === t.endOnTick || this.isLog || Yt(this.chart[this.coll], function(t) {
                var e = t.options
                  , e = [t.horiz ? e.left : e.top, e.width, e.height, e.pane].join();
                t.series.length && (n[e] ? i = !0 : n[e] = 1)
            }),
            i
        },
        getTickAmount: function() {
            var t = this.options
              , e = t.tickAmount
              , i = t.tickPixelInterval;
            !jt(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2),
            !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1),
            e < 4 && (this.finalTickAmt = e,
            e = 5),
            this.tickAmount = e
        },
        adjustTickAmount: function() {
            var t = this.tickInterval
              , e = this.tickPositions
              , i = this.tickAmount
              , n = this.finalTickAmt
              , s = e && e.length
              , r = ne(this.threshold, this.softThreshold ? 0 : null);
            if (this.hasData()) {
                if (s < i) {
                    for (; e.length < i; )
                        e.length % 2 || this.min === r ? e.push(Ft(e[e.length - 1] + t)) : e.unshift(Ft(e[0] - t));
                    this.transA *= (s - 1) / (i - 1),
                    this.min = e[0],
                    this.max = e[e.length - 1]
                } else
                    i < s && (this.tickInterval *= 2,
                    this.setTickPositions());
                if (jt(n)) {
                    for (t = i = e.length; t--; )
                        (3 === n && 1 == t % 2 || n <= 2 && 0 < t && t < i - 1) && e.splice(t, 1);
                    this.finalTickAmt = void 0
                }
            }
        },
        setScale: function() {
            var e, t;
            this.oldMin = this.min,
            this.oldMax = this.max,
            this.oldAxisLength = this.len,
            this.setAxisSize(),
            t = this.len !== this.oldAxisLength,
            Yt(this.series, function(t) {
                (t.isDirtyData || t.isDirty || t.xAxis.isDirty) && (e = !0)
            }),
            t || e || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(),
            this.forceRedraw = !1,
            this.getSeriesExtremes(),
            this.setTickInterval(),
            this.oldUserMin = this.userMin,
            this.oldUserMax = this.userMax,
            this.isDirty || (this.isDirty = t || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks(),
            $t(this, "afterSetScale")
        },
        setExtremes: function(t, e, i, n, s) {
            var r = this
              , o = r.chart;
            i = ne(i, !0),
            Yt(r.series, function(t) {
                delete t.kdTree
            }),
            s = Gt(s, {
                min: t,
                max: e
            }),
            $t(r, "setExtremes", s, function() {
                r.userMin = t,
                r.userMax = e,
                r.eventArgs = s,
                i && o.redraw(n)
            })
        },
        zoom: function(t, e) {
            var i = this.dataMin
              , n = this.dataMax
              , s = this.options
              , r = Math.min(i, ne(s.min, i))
              , s = Math.max(n, ne(s.max, n));
            return t === this.min && e === this.max || (this.allowZoomOutside || (jt(i) && (t < r && (t = r),
            s < t && (t = s)),
            jt(n) && (e < r && (e = r),
            s < e && (e = s))),
            this.displayBtn = void 0 !== t || void 0 !== e,
            this.setExtremes(t, e, !1, void 0, {
                trigger: "zoom"
            })),
            !0
        },
        setAxisSize: function() {
            var t = this.chart
              , e = (o = this.options).offsets || [0, 0, 0, 0]
              , i = this.horiz
              , n = this.width = Math.round(Dt.relativeLength(ne(o.width, t.plotWidth - e[3] + e[1]), t.plotWidth))
              , s = this.height = Math.round(Dt.relativeLength(ne(o.height, t.plotHeight - e[0] + e[2]), t.plotHeight))
              , r = this.top = Math.round(Dt.relativeLength(ne(o.top, t.plotTop + e[0]), t.plotHeight, t.plotTop))
              , o = this.left = Math.round(Dt.relativeLength(ne(o.left, t.plotLeft + e[3]), t.plotWidth, t.plotLeft));
            this.bottom = t.chartHeight - s - r,
            this.right = t.chartWidth - n - o,
            this.len = Math.max(i ? n : s, 0),
            this.pos = i ? o : r
        },
        getExtremes: function() {
            var t = this.isLog;
            return {
                min: t ? Ft(this.lin2log(this.min)) : this.min,
                max: t ? Ft(this.lin2log(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(t) {
            var e = (i = this.isLog) ? this.lin2log(this.min) : this.min
              , i = i ? this.lin2log(this.max) : this.max;
            return null === t || -Infinity === t ? t = e : Infinity === t ? t = i : t < e ? t = e : i < t && (t = i),
            this.translate(t, 0, 1, 0, 1)
        },
        autoLabelAlign: function(t) {
            return 15 < (t = (ne(t, 0) - 90 * this.side + 720) % 360) && t < 165 ? "right" : 195 < t && t < 345 ? "left" : "center"
        },
        tickSize: function(t) {
            var e = this.options
              , i = e[t + "Length"]
              , n = ne(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
            if (n && i)
                return "inside" === e[t + "Position"] && (i = -i),
                [i, n]
        },
        labelMetrics: function() {
            var t = this.tickPositions && this.tickPositions[0] || 0;
            return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
        },
        unsquish: function() {
            var i, n, t, e = this.options.labels, s = this.horiz, r = this.tickInterval, o = r, a = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / r), l = e.rotation, h = this.labelMetrics(), c = Number.MAX_VALUE, d = function(t) {
                return t = 1 < (t /= a || 1) ? Math.ceil(t) : 1,
                Ft(t * r)
            };
            return s ? (t = !e.staggerLines && !e.step && (jt(l) ? [l] : a < ne(e.autoRotationLimit, 80) && e.autoRotation)) && Yt(t, function(t) {
                var e;
                !(t === l || t && -90 <= t && t <= 90) || (e = (n = d(Math.abs(h.h / Math.sin(Wt * t)))) + Math.abs(t / 360)) < c && (c = e,
                i = t,
                o = n)
            }) : e.step || (o = d(h.h)),
            this.autoRotation = t,
            this.labelRotation = ne(i, l),
            o
        },
        getSlotWidth: function() {
            var t = this.chart
              , e = this.horiz
              , i = this.options.labels
              , n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1)
              , s = t.margin[3];
            return e && (i.step || 0) < 2 && !i.rotation && (this.staggerLines || 1) * this.len / n || !e && (i.style && parseInt(i.style.width, 10) || s && s - t.spacing[3] || .33 * t.chartWidth)
        },
        renderUnsquish: function() {
            var n, s, t, e = this.chart, i = e.renderer, r = this.tickPositions, o = this.ticks, a = this.options.labels, l = this.horiz, h = this.getSlotWidth(), c = Math.max(1, Math.round(h - 2 * (a.padding || 5))), d = {}, u = this.labelMetrics(), p = a.style && a.style.textOverflow, f = 0;
            if (Qt(a.rotation) || (d.rotation = a.rotation || 0),
            Yt(r, function(t) {
                (t = o[t]) && t.label && t.label.textPxLength > f && (f = t.label.textPxLength)
            }),
            this.maxLabelLength = f,
            this.autoRotation)
                c < f && f > u.h ? d.rotation = this.labelRotation : this.labelRotation = 0;
            else if (h && (n = c,
            !p))
                for (s = "clip",
                c = r.length; !l && c--; )
                    t = r[c],
                    (t = o[t].label) && (t.styles && "ellipsis" === t.styles.textOverflow ? t.css({
                        textOverflow: "clip"
                    }) : t.textPxLength > h && t.css({
                        width: h + "px"
                    }),
                    t.getBBox().height > this.len / r.length - (u.h - u.f) && (t.specificTextOverflow = "ellipsis"));
            d.rotation && (n = f > .5 * e.chartHeight ? .33 * e.chartHeight : e.chartHeight,
            p || (s = "ellipsis")),
            (this.labelAlign = a.align || this.autoLabelAlign(this.labelRotation)) && (d.align = this.labelAlign),
            Yt(r, function(t) {
                var e = (t = o[t]) && t.label
                  , i = {};
                e && (e.attr(d),
                !n || a.style && a.style.width || !(n < e.textPxLength || "SPAN" === e.element.tagName) || (i.width = n,
                p || (i.textOverflow = e.specificTextOverflow || s),
                e.css(i)),
                delete e.specificTextOverflow,
                t.rotation = d.rotation)
            }),
            this.tickRotCorr = i.rotCorr(u.b, this.labelRotation || 0, 0 !== this.side)
        },
        hasData: function() {
            return this.hasVisibleSeries || jt(this.min) && jt(this.max) && this.tickPositions && 0 < this.tickPositions.length
        },
        addTitle: function(t) {
            var e, i = this.chart.renderer, n = this.horiz, s = this.opposite, r = this.options.title;
            this.axisTitle || ((e = r.textAlign) || (e = (n ? {
                low: "left",
                middle: "center",
                high: "right"
            } : {
                low: s ? "right" : "left",
                middle: "center",
                high: s ? "left" : "right"
            })[r.align]),
            this.axisTitle = i.text(r.text, 0, 0, r.useHTML).attr({
                zIndex: 7,
                rotation: r.rotation || 0,
                align: e
            }).addClass("highcharts-axis-title").css(te(r.style)).add(this.axisGroup),
            this.axisTitle.isNew = !0),
            r.style.width || this.isRadial || this.axisTitle.css({
                width: this.len
            }),
            this.axisTitle[t ? "show" : "hide"](!0)
        },
        generateTick: function(t) {
            var e = this.ticks;
            e[t] ? e[t].addLabel() : e[t] = new ae(this,t)
        },
        getOffset: function() {
            var t, e, i = this, n = (m = i.chart).renderer, s = i.options, r = i.tickPositions, o = i.ticks, a = i.horiz, l = i.side, h = m.inverted && !i.isZAxis ? [1, 0, 3, 2][l] : l, c = 0, d = 0, u = s.title, p = s.labels, f = 0, g = m.axisOffset, m = m.clipOffset, y = [-1, 1, 1, -1][l], v = s.className, x = i.axisParent, b = this.tickSize("tick"), w = i.hasData();
            i.showAxis = t = w || ne(s.showEmpty, !0),
            i.staggerLines = i.horiz && p.staggerLines,
            i.axisGroup || (i.gridGroup = n.g("grid").attr({
                zIndex: s.gridZIndex || 1
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (v || "")).add(x),
            i.axisGroup = n.g("axis").attr({
                zIndex: s.zIndex || 2
            }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (v || "")).add(x),
            i.labelGroup = n.g("axis-labels").attr({
                zIndex: p.zIndex || 7
            }).addClass("highcharts-" + i.coll.toLowerCase() + "-labels " + (v || "")).add(x)),
            w || i.isLinked ? (Yt(r, function(t, e) {
                i.generateTick(t, e)
            }),
            i.renderUnsquish(),
            i.reserveSpaceDefault = 0 === l || 2 === l || {
                1: "left",
                3: "right"
            }[l] === i.labelAlign,
            ne(p.reserveSpace, "center" === i.labelAlign || null, i.reserveSpaceDefault) && Yt(r, function(t) {
                f = Math.max(o[t].getLabelSize(), f)
            }),
            i.staggerLines && (f *= i.staggerLines),
            i.labelOffset = f * (i.opposite ? -1 : 1)) : ie(o, function(t, e) {
                t.destroy(),
                delete o[e]
            }),
            u && u.text && !1 !== u.enabled && (i.addTitle(t),
            t && !1 !== u.reserveSpace && (i.titleOffset = c = i.axisTitle.getBBox()[a ? "height" : "width"],
            e = u.offset,
            d = jt(e) ? 0 : ne(u.margin, a ? 5 : 10))),
            i.renderLine(),
            i.offset = y * ne(s.offset, g[l]),
            i.tickRotCorr = i.tickRotCorr || {
                x: 0,
                y: 0
            },
            n = 0 === l ? -i.labelMetrics().h : 2 === l ? i.tickRotCorr.y : 0,
            d = Math.abs(f) + d,
            f && (d = d - n + y * (a ? ne(p.y, i.tickRotCorr.y + 8 * y) : p.x)),
            i.axisTitleMargin = ne(e, d),
            g[l] = Math.max(g[l], i.axisTitleMargin + c + y * i.offset, d, w && r.length && b ? b[0] + y * i.offset : 0),
            s = s.offset ? 0 : 2 * Math.floor(i.axisLine.strokeWidth() / 2),
            m[h] = Math.max(m[h], s)
        },
        getLinePath: function(t) {
            var e = this.chart
              , i = this.opposite
              , n = this.offset
              , s = this.horiz
              , r = this.left + (i ? this.width : 0) + n
              , n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
            return i && (t *= -1),
            e.renderer.crispLine(["M", s ? this.left : r, s ? n : this.top, "L", s ? e.chartWidth - this.right : r, s ? n : e.chartHeight - this.bottom], t)
        },
        renderLine: function() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
            this.axisLine.attr({
                stroke: this.options.lineColor,
                "stroke-width": this.options.lineWidth,
                zIndex: 7
            }))
        },
        getTitlePosition: function() {
            var t = this.horiz
              , e = this.left
              , i = this.top
              , n = this.len
              , s = this.options.title
              , r = t ? e : i
              , o = this.opposite
              , a = this.offset
              , l = s.x || 0
              , h = s.y || 0
              , c = this.axisTitle
              , d = this.chart.renderer.fontMetrics(s.style && s.style.fontSize, c)
              , c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0)
              , n = {
                low: r + (t ? 0 : n),
                middle: r + n / 2,
                high: r + (t ? n : 0)
            }[s.align]
              , e = (t ? i + this.height : e) + (t ? 1 : -1) * (o ? -1 : 1) * this.axisTitleMargin + [-c, c, d.f, -c][this.side];
            return {
                x: t ? n + l : e + (o ? this.width : 0) + a + l,
                y: t ? e + h - (o ? this.height : 0) + a : n + h
            }
        },
        renderMinorTick: function(t) {
            var e = this.chart.hasRendered && Jt(this.oldMin)
              , i = this.minorTicks;
            i[t] || (i[t] = new ae(this,t,"minor")),
            e && i[t].isNew && i[t].render(null, !0),
            i[t].render(null, !1, 1)
        },
        renderTick: function(t, e) {
            var i = this.isLinked
              , n = this.ticks
              , s = this.chart.hasRendered && Jt(this.oldMin);
            (!i || t >= this.min && t <= this.max) && (n[t] || (n[t] = new ae(this,t)),
            s && n[t].isNew && n[t].render(e, !0, .1),
            n[t].render(e))
        },
        render: function() {
            var i, n, s = this, r = s.chart, t = s.options, o = s.isLog, e = s.isLinked, a = s.tickPositions, l = s.axisTitle, h = s.ticks, c = s.minorTicks, d = s.alternateBands, u = t.stackLabels, p = t.alternateGridColor, f = s.tickmarkOffset, g = s.axisLine, m = s.showAxis, y = It(r.renderer.globalAnimation);
            s.labelEdge.length = 0,
            s.overlap = !1,
            Yt([h, c, d], function(t) {
                ie(t, function(t) {
                    t.isActive = !1
                })
            }),
            (s.hasData() || e) && (s.minorTickInterval && !s.categories && Yt(s.getMinorTickPositions(), function(t) {
                s.renderMinorTick(t)
            }),
            a.length && (Yt(a, function(t, e) {
                s.renderTick(t, e)
            }),
            f && (0 === s.min || s.single) && (h[-1] || (h[-1] = new ae(s,-1,null,!0)),
            h[-1].render(-1))),
            p && Yt(a, function(t, e) {
                n = void 0 !== a[e + 1] ? a[e + 1] + f : s.max - f,
                0 == e % 2 && t < s.max && n <= s.max + (r.polar ? -f : f) && (d[t] || (d[t] = new Dt.PlotLineOrBand(s)),
                i = t + f,
                d[t].options = {
                    from: o ? s.lin2log(i) : i,
                    to: o ? s.lin2log(n) : n,
                    color: p
                },
                d[t].render(),
                d[t].isActive = !0)
            }),
            s._addedPlotLB || (Yt((t.plotLines || []).concat(t.plotBands || []), function(t) {
                s.addPlotBandOrLine(t)
            }),
            s._addedPlotLB = !0)),
            Yt([h, c, d], function(t) {
                var e, i = [], n = y.duration;
                ie(t, function(t, e) {
                    t.isActive || (t.render(e, !1, 0),
                    t.isActive = !1,
                    i.push(e))
                }),
                oe(function() {
                    for (e = i.length; e--; )
                        t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(),
                        delete t[i[e]])
                }, t !== d && r.hasRendered && n ? n : 0)
            }),
            g && (g[g.isPlaced ? "animate" : "attr"]({
                d: this.getLinePath(g.strokeWidth())
            }),
            g.isPlaced = !0,
            g[m ? "show" : "hide"](!0)),
            l && m && (t = s.getTitlePosition(),
            Jt(t.y) ? (l[l.isNew ? "attr" : "animate"](t),
            l.isNew = !1) : (l.attr("y", -9999),
            l.isNew = !0)),
            u && u.enabled && s.renderStackTotals(),
            s.isDirty = !1,
            $t(this, "afterRender")
        },
        redraw: function() {
            this.visible && (this.render(),
            Yt(this.plotLinesAndBands, function(t) {
                t.render()
            })),
            Yt(this.series, function(t) {
                t.isDirty = !0
            })
        },
        keepProps: "extKey hcEvents names series userMax userMin".split(" "),
        destroy: function(t) {
            var e, i = this, n = i.stacks, s = i.plotLinesAndBands;
            if ($t(this, "destroy", {
                keepEvents: t
            }),
            t || se(i),
            ie(n, function(t, e) {
                Xt(t),
                n[e] = null
            }),
            Yt([i.ticks, i.minorTicks, i.alternateBands], function(t) {
                Xt(t)
            }),
            s)
                for (t = s.length; t--; )
                    s[t].destroy();
            for (e in Yt("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function(t) {
                i[t] && (i[t] = i[t].destroy())
            }),
            i.plotLinesAndBandsGroups)
                i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
            ie(i, function(t, e) {
                -1 === Kt(e, i.keepProps) && delete i[e]
            })
        },
        drawCrosshair: function(t, e) {
            var i, n, s = this.crosshair, r = ne(s.snap, !0), o = this.cross;
            if ($t(this, "drawCrosshair", {
                e: t,
                point: e
            }),
            t = t || this.cross && this.cross.e,
            this.crosshair && !1 !== (jt(e) || !r)) {
                if (r ? jt(e) && (n = ne(e.crosshairPos, this.isXAxis ? e.plotX : this.len - e.plotY)) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos),
                jt(n) && (i = this.getPlotLinePath(e && (this.isXAxis ? e.x : ne(e.stackY, e.y)), null, null, null, n) || null),
                !jt(i))
                    return void this.hideCrosshair();
                r = this.categories && !this.isRadial,
                o || (this.cross = o = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (r ? "category " : "thin ") + s.className).attr({
                    zIndex: ne(s.zIndex, 2)
                }).add(),
                o.attr({
                    stroke: s.color || (r ? Bt("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                    "stroke-width": ne(s.width, 1)
                }).css({
                    "pointer-events": "none"
                }),
                s.dashStyle && o.attr({
                    dashstyle: s.dashStyle
                })),
                o.show().attr({
                    d: i
                }),
                r && !s.width && o.attr({
                    "stroke-width": this.transA
                }),
                this.cross.e = t
            } else
                this.hideCrosshair();
            $t(this, "afterDrawCrosshair", {
                e: t,
                point: e
            })
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    }),
    Dt.Axis = le);
    return he = Nt.Axis,
    ce = Nt.getMagnitude,
    de = Nt.normalizeTickInterval,
    ue = Nt.timeUnits,
    he.prototype.getTimeTicks = function() {
        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
    }
    ,
    he.prototype.normalizeTimeTickInterval = function(t, e) {
        for (var i = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], n = ue[(e = i[i.length - 1])[0]], s = e[1], r = 0; r < i.length && (n = ue[(e = i[r])[0]],
        s = e[1],
        !(i[r + 1] && t <= (n * s[s.length - 1] + ue[i[r + 1][0]]) / 2)); r++)
            ;
        return n === ue.year && t < 5 * n && (s = [1, 2, 5]),
        {
            unitRange: n,
            count: t = de(t / n, s, "year" === e[0] ? Math.max(ce(t / n), 1) : 1),
            unitName: e[0]
        }
    }
    ,
    pe = Nt.Axis,
    fe = Nt.getMagnitude,
    ge = Nt.map,
    me = Nt.normalizeTickInterval,
    ye = Nt.pick,
    pe.prototype.getLogTickPositions = function(t, e, i, n) {
        var s = this.options
          , r = this.len
          , o = [];
        if (n || (this._minorAutoInterval = null),
        .5 <= t)
            t = Math.round(t),
            o = this.getLinearTickPositions(t, e, i);
        else if (.08 <= t)
            for (var a, l, h, c, d, r = Math.floor(e), s = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; r < i + 1 && !d; r++)
                for (l = s.length,
                a = 0; a < l && !d; a++)
                    e < (h = this.log2lin(this.lin2log(r) * s[a])) && (!n || c <= i) && void 0 !== c && o.push(c),
                    i < c && (d = !0),
                    c = h;
        else
            e = this.lin2log(e),
            i = this.lin2log(i),
            t = n ? this.getMinorTickInterval() : s.tickInterval,
            t = ye("auto" === t ? null : t, this._minorAutoInterval, s.tickPixelInterval / (n ? 5 : 1) * (i - e) / ((n ? r / this.tickPositions.length : r) || 1)),
            t = me(t, null, fe(t)),
            o = ge(this.getLinearTickPositions(t, e, i), this.log2lin),
            n || (this._minorAutoInterval = t / 5);
        return n || (this.tickInterval = t),
        o
    }
    ,
    pe.prototype.log2lin = function(t) {
        return Math.log(t) / Math.LN10
    }
    ,
    pe.prototype.lin2log = function(t) {
        return Math.pow(10, t)
    }
    ,
    xe = wo,
    be = (ve = Nt).arrayMax,
    we = ve.arrayMin,
    ke = ve.defined,
    Te = ve.destroyObjectProperties,
    Se = ve.each,
    Me = ve.erase,
    Ce = ve.merge,
    Ae = ve.pick,
    ve.PlotLineOrBand = function(t, e) {
        this.axis = t,
        e && (this.options = e,
        this.id = e.id)
    }
    ,
    ve.PlotLineOrBand.prototype = {
        render: function() {
            var i = this
              , t = i.axis
              , e = t.horiz
              , n = i.options
              , s = n.label
              , r = i.label
              , o = n.to
              , a = n.from
              , l = n.value
              , h = ke(a) && ke(o)
              , c = ke(l)
              , d = i.svgElem
              , u = !d
              , p = []
              , f = n.color
              , g = Ae(n.zIndex, 0)
              , m = n.events
              , p = {
                "class": "highcharts-plot-" + (h ? "band " : "line ") + (n.className || "")
            }
              , y = {}
              , v = t.chart.renderer
              , x = h ? "bands" : "lines";
            if (t.isLog && (a = t.log2lin(a),
            o = t.log2lin(o),
            l = t.log2lin(l)),
            c ? (p = {
                stroke: f,
                "stroke-width": n.width
            },
            n.dashStyle && (p.dashstyle = n.dashStyle)) : h && (f && (p.fill = f),
            n.borderWidth && (p.stroke = n.borderColor,
            p["stroke-width"] = n.borderWidth)),
            x += "-" + (y.zIndex = g),
            (f = t.plotLinesAndBandsGroups[x]) || (t.plotLinesAndBandsGroups[x] = f = v.g("plot-" + x).attr(y).add()),
            u && (i.svgElem = d = v.path().attr(p).add(f)),
            c)
                p = t.getPlotLinePath(l, d.strokeWidth());
            else {
                if (!h)
                    return;
                p = t.getPlotBandPath(a, o, n)
            }
            return u && p && p.length ? (d.attr({
                d: p
            }),
            m && ve.objectEach(m, function(t, e) {
                d.on(e, function(t) {
                    m[e].apply(i, [t])
                })
            })) : d && (p ? (d.show(),
            d.animate({
                d: p
            })) : (d.hide(),
            r && (i.label = r = r.destroy()))),
            s && ke(s.text) && p && p.length && 0 < t.width && 0 < t.height && !p.flat ? (s = Ce({
                align: e && h && "center",
                x: e ? !h && 4 : 10,
                verticalAlign: !e && h && "middle",
                y: e ? h ? 16 : 10 : h ? 6 : -4,
                rotation: e && !h && 90
            }, s),
            this.renderLabel(s, p, h, g)) : r && r.hide(),
            i
        },
        renderLabel: function(t, e, i, n) {
            var s = this.label
              , r = this.axis.chart.renderer;
            s || ((s = {
                align: t.textAlign || t.align,
                rotation: t.rotation,
                "class": "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || "")
            }).zIndex = n,
            this.label = s = r.text(t.text, 0, 0, t.useHTML).attr(s).add(),
            s.css(t.style)),
            n = e.xBounds || [e[1], e[4], i ? e[6] : e[1]],
            e = e.yBounds || [e[2], e[5], i ? e[7] : e[2]],
            i = we(n),
            r = we(e),
            s.align(t, !1, {
                x: i,
                y: r,
                width: be(n) - i,
                height: be(e) - r
            }),
            s.show()
        },
        destroy: function() {
            Me(this.axis.plotLinesAndBands, this),
            delete this.axis,
            Te(this)
        }
    },
    ve.extend(xe.prototype, {
        getPlotBandPath: function(t, e) {
            var i, n = this.getPlotLinePath(e, null, null, !0), s = this.getPlotLinePath(t, null, null, !0), r = [], o = this.horiz, a = 1;
            if (t = t < this.min && e < this.min || t > this.max && e > this.max,
            s && n)
                for (t && (i = s.toString() === n.toString(),
                a = 0),
                t = 0; t < s.length; t += 6)
                    o && n[t + 1] === s[t + 1] ? (n[t + 1] += a,
                    n[t + 4] += a) : o || n[t + 2] !== s[t + 2] || (n[t + 2] += a,
                    n[t + 5] += a),
                    r.push("M", s[t + 1], s[t + 2], "L", s[t + 4], s[t + 5], n[t + 4], n[t + 5], n[t + 1], n[t + 2], "z"),
                    r.flat = i;
            return r
        },
        addPlotBand: function(t) {
            return this.addPlotBandOrLine(t, "plotBands")
        },
        addPlotLine: function(t) {
            return this.addPlotBandOrLine(t, "plotLines")
        },
        addPlotBandOrLine: function(t, e) {
            var i = new ve.PlotLineOrBand(this,t).render()
              , n = this.userOptions;
            return i && (e && (n[e] = n[e] || [],
            n[e].push(t)),
            this.plotLinesAndBands.push(i)),
            i
        },
        removePlotBandOrLine: function(e) {
            for (var t = this.plotLinesAndBands, i = this.options, n = this.userOptions, s = t.length; s--; )
                t[s].id === e && t[s].destroy();
            Se([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function(t) {
                for (s = t.length; s--; )
                    t[s].id === e && Me(t, t[s])
            })
        },
        removePlotBand: function(t) {
            this.removePlotBandOrLine(t)
        },
        removePlotLine: function(t) {
            this.removePlotBandOrLine(t)
        }
    }),
    Pe = (Le = Nt).each,
    Oe = Le.extend,
    Ee = Le.format,
    Ne = Le.isNumber,
    De = Le.map,
    _e = Le.merge,
    Ie = Le.pick,
    Re = Le.splat,
    ze = Le.syncTimeout,
    Be = Le.timeUnits,
    Le.Tooltip = function() {
        this.init.apply(this, arguments)
    }
    ,
    Le.Tooltip.prototype = {
        init: function(t, e) {
            this.chart = t,
            this.options = e,
            this.crosshairs = [],
            this.now = {
                x: 0,
                y: 0
            },
            this.isHidden = !0,
            this.split = e.split && !t.inverted,
            this.shared = e.shared || this.split
        },
        cleanSplit: function(i) {
            Pe(this.chart.series, function(t) {
                var e = t && t.tt;
                e && (!e.isActive || i ? t.tt = e.destroy() : e.isActive = !1)
            })
        },
        getLabel: function() {
            var t = this.chart.renderer
              , e = this.options;
            return this.label || (this.split ? this.label = t.g("tooltip") : (this.label = t.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                padding: e.padding,
                r: e.borderRadius
            }),
            this.label.attr({
                fill: e.backgroundColor,
                "stroke-width": e.borderWidth
            }).css(e.style).shadow(e.shadow)),
            this.label.attr({
                zIndex: 8
            }).add()),
            this.label
        },
        update: function(t) {
            this.destroy(),
            _e(!0, this.chart.options.tooltip.userOptions, t),
            this.init(this.chart, _e(!0, this.options, t))
        },
        destroy: function() {
            this.label && (this.label = this.label.destroy()),
            this.split && this.tt && (this.cleanSplit(this.chart, !0),
            this.tt = this.tt.destroy()),
            Le.clearTimeout(this.hideTimer),
            Le.clearTimeout(this.tooltipTimeout)
        },
        move: function(t, e, i, n) {
            var s = this
              , r = s.now
              , o = !1 !== s.options.animation && !s.isHidden && (1 < Math.abs(t - r.x) || 1 < Math.abs(e - r.y))
              , a = s.followPointer || 1 < s.len;
            Oe(r, {
                x: o ? (2 * r.x + t) / 3 : t,
                y: o ? (r.y + e) / 2 : e,
                anchorX: a ? void 0 : o ? (2 * r.anchorX + i) / 3 : i,
                anchorY: a ? void 0 : o ? (r.anchorY + n) / 2 : n
            }),
            s.getLabel().attr(r),
            o && (Le.clearTimeout(this.tooltipTimeout),
            this.tooltipTimeout = setTimeout(function() {
                s && s.move(t, e, i, n)
            }, 32))
        },
        hide: function(t) {
            var e = this;
            Le.clearTimeout(this.hideTimer),
            t = Ie(t, this.options.hideDelay, 500),
            this.isHidden || (this.hideTimer = ze(function() {
                e.getLabel()[t ? "fadeOut" : "hide"](),
                e.isHidden = !0
            }, t))
        },
        getAnchor: function(t, e) {
            var i, n, s = this.chart, r = s.inverted, o = s.plotTop, a = s.plotLeft, l = 0, h = 0, c = (t = Re(t))[0].tooltipPos;
            return this.followPointer && e && (void 0 === e.chartX && (e = s.pointer.normalize(e)),
            c = [e.chartX - s.plotLeft, e.chartY - o]),
            c || (Pe(t, function(t) {
                i = t.series.yAxis,
                n = t.series.xAxis,
                l += t.plotX + (!r && n ? n.left - a : 0),
                h += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && i ? i.top - o : 0)
            }),
            l /= t.length,
            h /= t.length,
            c = [r ? s.plotWidth - h : l, this.shared && !r && 1 < t.length && e ? e.chartY - o : r ? s.plotHeight - l : h]),
            De(c, Math.round)
        },
        getPosition: function(t, e, i) {
            var n, s = this.chart, h = this.distance, c = {}, d = s.inverted && i.h || 0, r = ["y", s.chartHeight, e, i.plotY + s.plotTop, s.plotTop, s.plotTop + s.plotHeight], o = ["x", s.chartWidth, t, i.plotX + s.plotLeft, s.plotLeft, s.plotLeft + s.plotWidth], u = !this.followPointer && Ie(i.ttBelow, !s.inverted == !!i.negative), a = function(t) {
                var e = r;
                r = o,
                o = e,
                n = t
            }, l = function() {
                !1 !== function(t, e, i, n, s, r) {
                    var o = i < n - h
                      , a = n + h + i < e
                      , l = n - h - i;
                    if (n += h,
                    u && a)
                        c[t] = n;
                    else if (!u && o)
                        c[t] = l;
                    else if (o)
                        c[t] = Math.min(r - i, l - d < 0 ? l : l - d);
                    else {
                        if (!a)
                            return !1;
                        c[t] = Math.max(s, e < n + d + i ? n : n + d)
                    }
                }
                .apply(0, r) ? !1 !== function(t, e, i, n) {
                    var s;
                    return n < h || e - h < n ? s = !1 : c[t] = n < i / 2 ? 1 : e - i / 2 < n ? e - i - 2 : n - i / 2,
                    s
                }
                .apply(0, o) || n || (a(!0),
                l()) : n ? c.x = c.y = 0 : (a(!0),
                l())
            };
            return (s.inverted || 1 < this.len) && a(),
            l(),
            c
        },
        defaultFormatter: function(t) {
            var e = this.points || Re(this)
              , i = [t.tooltipFooterHeaderFormatter(e[0])];
            return (i = i.concat(t.bodyFormatter(e))).push(t.tooltipFooterHeaderFormatter(e[0], !0)),
            i
        },
        refresh: function(t, e) {
            var i, n, s, r = this.options, o = t, a = {}, l = [], h = r.formatter || this.defaultFormatter, a = this.shared;
            r.enabled && (Le.clearTimeout(this.hideTimer),
            this.followPointer = Re(o)[0].series.tooltipOptions.followPointer,
            e = (n = this.getAnchor(o, e))[0],
            i = n[1],
            !a || o.series && o.series.noSharedTooltip ? a = o.getLabelConfig() : (Pe(o, function(t) {
                t.setState("hover"),
                l.push(t.getLabelConfig())
            }),
            (a = {
                x: o[0].category,
                y: o[0].y
            }).points = l,
            o = o[0]),
            this.len = l.length,
            a = h.call(a, this),
            s = o.series,
            this.distance = Ie(s.tooltipOptions.distance, 16),
            !1 === a ? this.hide() : (h = this.getLabel(),
            this.isHidden && h.attr({
                opacity: 1
            }).show(),
            this.split ? this.renderSplit(a, Re(t)) : (r.style.width || h.css({
                width: this.chart.spacingBox.width
            }),
            h.attr({
                text: a && a.join ? a.join("") : a
            }),
            h.removeClass(/highcharts-color-[\\d]+/g).addClass("highcharts-color-" + Ie(o.colorIndex, s.colorIndex)),
            h.attr({
                stroke: r.borderColor || o.color || s.color || "#666666"
            }),
            this.updatePosition({
                plotX: e,
                plotY: i,
                negative: o.negative,
                ttBelow: o.ttBelow,
                h: n[2] || 0
            })),
            this.isHidden = !1))
        },
        renderSplit: function(t, o) {
            var a = this
              , l = []
              , h = this.chart
              , c = h.renderer
              , d = !0
              , u = this.options
              , p = 0
              , f = this.getLabel();
            Le.isString(t) && (t = [!1, t]),
            Pe(t.slice(0, o.length + 1), function(t, e) {
                var i, n, s, r;
                !1 !== t && (n = (i = (e = o[e - 1] || {
                    isHeader: !0,
                    plotX: o[0].plotX
                }).series || a).tt,
                s = e.series || {},
                r = "highcharts-color-" + Ie(e.colorIndex, s.colorIndex, "none"),
                n || (i.tt = n = c.label(null, null, null, "callout", null, null, u.useHTML).addClass("highcharts-tooltip-box " + r).attr({
                    padding: u.padding,
                    r: u.borderRadius,
                    fill: u.backgroundColor,
                    stroke: u.borderColor || e.color || s.color || "#333333",
                    "stroke-width": u.borderWidth
                }).add(f)),
                n.isActive = !0,
                n.attr({
                    text: t
                }),
                n.css(u.style).shadow(u.shadow),
                s = (t = n.getBBox()).width + n.strokeWidth(),
                (s = e.isHeader ? (p = t.height,
                Math.max(0, Math.min(e.plotX + h.plotLeft - s / 2, h.chartWidth - s))) : e.plotX + h.plotLeft - Ie(u.distance, 16) - s) < 0 && (d = !1),
                t = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0),
                t -= h.plotTop,
                l.push({
                    target: e.isHeader ? h.plotHeight + p : t,
                    rank: e.isHeader ? 1 : 0,
                    size: i.tt.getBBox().height + 1,
                    point: e,
                    x: s,
                    tt: n
                }))
            }),
            this.cleanSplit(),
            Le.distribute(l, h.plotHeight + p),
            Pe(l, function(t) {
                var e = t.point
                  , i = e.series;
                t.tt.attr({
                    visibility: void 0 === t.pos ? "hidden" : "inherit",
                    x: d || e.isHeader ? t.x : e.plotX + h.plotLeft + Ie(u.distance, 16),
                    y: t.pos + h.plotTop,
                    anchorX: e.isHeader ? e.plotX + h.plotLeft : e.plotX + i.xAxis.pos,
                    anchorY: e.isHeader ? t.pos + h.plotTop - 15 : e.plotY + i.yAxis.pos
                })
            })
        },
        updatePosition: function(t) {
            var e = this.chart
              , i = this.getLabel()
              , i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
            this.move(Math.round(i.x), Math.round(i.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
        },
        getDateFormat: function(t, e, i, n) {
            var s, r, o = this.chart.time, a = o.dateFormat("%m-%d %H:%M:%S.%L", e), l = {
                millisecond: 15,
                second: 12,
                minute: 9,
                hour: 6,
                day: 3
            }, h = "millisecond";
            for (r in Be) {
                if (t === Be.week && +o.dateFormat("%w", e) === i && "00:00:00.000" === a.substr(6)) {
                    r = "week";
                    break
                }
                if (Be[r] > t) {
                    r = h;
                    break
                }
                if (l[r] && a.substr(l[r]) !== "01-01 00:00:00.000".substr(l[r]))
                    break;
                "week" !== r && (h = r)
            }
            return r && (s = n[r]),
            s
        },
        getXDateFormat: function(t, e, i) {
            e = e.dateTimeLabelFormats;
            var n = i && i.closestPointRange;
            return (n ? this.getDateFormat(n, t.x, i.options.startOfWeek, e) : e.day) || e.year
        },
        tooltipFooterHeaderFormatter: function(t, e) {
            e = e ? "footer" : "header";
            var i = t.series
              , n = i.tooltipOptions
              , s = n.xDateFormat
              , r = i.xAxis
              , o = r && "datetime" === r.options.type && Ne(t.key)
              , a = n[e + "Format"];
            return o && !s && (s = this.getXDateFormat(t, n, r)),
            o && s && Pe(t.point && t.point.tooltipDateKeys || ["key"], function(t) {
                a = a.replace("{point." + t + "}", "{point." + t + ":" + s + "}")
            }),
            Ee(a, {
                point: t,
                series: i
            }, this.chart.time)
        },
        bodyFormatter: function(t) {
            return De(t, function(t) {
                var e = t.series.tooltipOptions;
                return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"])
            })
        }
    },
    He = (Fe = Nt).addEvent,
    je = Fe.attr,
    We = Fe.charts,
    Xe = Fe.color,
    Ye = Fe.css,
    Ge = Fe.defined,
    $e = Fe.each,
    qe = Fe.extend,
    Ve = Fe.find,
    Ue = Fe.fireEvent,
    Ke = Fe.isNumber,
    Ze = Fe.isObject,
    Je = Fe.offset,
    Qe = Fe.pick,
    ti = Fe.splat,
    ei = Fe.Tooltip,
    Fe.Pointer = function(t, e) {
        this.init(t, e)
    }
    ,
    Fe.Pointer.prototype = {
        init: function(t, e) {
            this.options = e,
            this.chart = t,
            this.runChartClick = e.chart.events && !!e.chart.events.click,
            this.pinchDown = [],
            this.lastValidTouch = {},
            ei && (t.tooltip = new ei(t,e.tooltip),
            this.followTouchMove = Qe(e.tooltip.followTouchMove, !0)),
            this.setDOMEvents()
        },
        zoomOption: function(t) {
            var e = (n = this.chart).options.chart
              , i = e.zoomType || ""
              , n = n.inverted;
            /touch/.test(t.type) && (i = Qe(e.pinchType, i)),
            this.zoomX = t = /x/.test(i),
            this.zoomY = i = /y/.test(i),
            this.zoomHor = t && !n || i && n,
            this.zoomVert = i && !n || t && n,
            this.hasZoom = t || i
        },
        normalize: function(t, e) {
            var i = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t;
            return e || (this.chartPosition = e = Je(this.chart.container)),
            qe(t, {
                chartX: Math.round(i.pageX - e.left),
                chartY: Math.round(i.pageY - e.top)
            })
        },
        getCoordinates: function(e) {
            var i = {
                xAxis: [],
                yAxis: []
            };
            return $e(this.chart.axes, function(t) {
                i[t.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: t,
                    value: t.toValue(e[t.horiz ? "chartX" : "chartY"])
                })
            }),
            i
        },
        findNearestKDPoint: function(t, s, r) {
            var o;
            return $e(t, function(t) {
                var e, i, n = !(t.noSharedTooltip && s) && t.options.findNearestPointBy.indexOf("y") < 0;
                t = t.searchPoint(r, n),
                (n = Ze(t, !0)) && !(n = !Ze(o, !0)) && (n = o.distX - t.distX,
                e = o.dist - t.dist,
                i = (t.series.group && t.series.group.zIndex) - (o.series.group && o.series.group.zIndex),
                n = 0 < (0 !== n && s ? n : 0 != e ? e : 0 != i ? i : o.series.index > t.series.index ? -1 : 1)),
                n && (o = t)
            }),
            o
        },
        getPointFromEvent: function(t) {
            t = t.target;
            for (var e; t && !e; )
                e = t.point,
                t = t.parentNode;
            return e
        },
        getChartCoordinatesFromPoint: function(t, e) {
            var i = (n = t.series).xAxis
              , n = n.yAxis
              , s = Qe(t.clientX, t.plotX)
              , r = t.shapeArgs;
            return i && n ? e ? {
                chartX: i.len + i.pos - s,
                chartY: n.len + n.pos - t.plotY
            } : {
                chartX: s + i.pos,
                chartY: t.plotY + n.pos
            } : r && r.x && r.y ? {
                chartX: r.x,
                chartY: r.y
            } : void 0
        },
        getHoverData: function(t, e, i, n, s, r, o) {
            var a, l = [], h = o && o.isBoosting;
            return n = !(!n || !t),
            o = e && !e.stickyTracking ? [e] : Fe.grep(i, function(t) {
                return t.visible && !(!s && t.directTouch) && Qe(t.options.enableMouseTracking, !0) && t.stickyTracking
            }),
            e = (a = n ? t : this.findNearestKDPoint(o, s, r)) && a.series,
            a && (s && !e.noSharedTooltip ? (o = Fe.grep(i, function(t) {
                return t.visible && !(!s && t.directTouch) && Qe(t.options.enableMouseTracking, !0) && !t.noSharedTooltip
            }),
            $e(o, function(t) {
                var e = Ve(t.points, function(t) {
                    return t.x === a.x && !t.isNull
                });
                Ze(e) && (h && (e = t.getPoint(e)),
                l.push(e))
            })) : l.push(a)),
            {
                hoverPoint: a,
                hoverSeries: e,
                hoverPoints: l
            }
        },
        runPointActions: function(n, t) {
            var e = this.chart
              , i = e.tooltip && e.tooltip.options.enabled ? e.tooltip : void 0
              , s = !!i && i.shared
              , r = (o = t || e.hoverPoint) && o.series || e.hoverSeries
              , o = (r = this.getHoverData(o, r, e.series, !!t || r && r.directTouch && this.isDirectTouch, s, n, {
                isBoosting: e.isBoosting
            })).hoverPoint
              , a = r.hoverPoints;
            if (t = (r = r.hoverSeries) && r.tooltipOptions.followPointer,
            s = s && r && !r.noSharedTooltip,
            o && (o !== e.hoverPoint || i && i.isHidden)) {
                if ($e(e.hoverPoints || [], function(t) {
                    -1 === Fe.inArray(t, a) && t.setState()
                }),
                $e(a || [], function(t) {
                    t.setState("hover")
                }),
                e.hoverSeries !== r && r.onMouseOver(),
                e.hoverPoint && e.hoverPoint.firePointEvent("mouseOut"),
                !o.series)
                    return;
                o.firePointEvent("mouseOver"),
                e.hoverPoints = a,
                e.hoverPoint = o,
                i && i.refresh(s ? a : o, n)
            } else
                t && i && !i.isHidden && (o = i.getAnchor([{}], n),
                i.updatePosition({
                    plotX: o[0],
                    plotY: o[1]
                }));
            this.unDocMouseMove || (this.unDocMouseMove = He(e.container.ownerDocument, "mousemove", function(t) {
                var e = We[Fe.hoverChartIndex];
                e && e.pointer.onDocumentMouseMove(t)
            })),
            $e(e.axes, function(e) {
                var t = Qe(e.crosshair.snap, !0)
                  , i = t ? Fe.find(a, function(t) {
                    return t.series[e.coll] === e
                }) : void 0;
                i || !t ? e.drawCrosshair(n, i) : e.hideCrosshair()
            })
        },
        reset: function(e, t) {
            var i = this.chart
              , n = i.hoverSeries
              , s = i.hoverPoint
              , r = i.hoverPoints
              , o = i.tooltip
              , a = o && o.shared ? r : s;
            e && a && $e(ti(a), function(t) {
                t.series.isCartesian && void 0 === t.plotX && (e = !1)
            }),
            e ? o && a && (o.refresh(a),
            s && (s.setState(s.state, !0),
            $e(i.axes, function(t) {
                t.crosshair && t.drawCrosshair(null, s)
            }))) : (s && s.onMouseOut(),
            r && $e(r, function(t) {
                t.setState()
            }),
            n && n.onMouseOut(),
            o && o.hide(t),
            this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()),
            $e(i.axes, function(t) {
                t.hideCrosshair()
            }),
            this.hoverX = i.hoverPoints = i.hoverPoint = null)
        },
        scaleGroups: function(e, i) {
            var n, s = this.chart;
            $e(s.series, function(t) {
                n = e || t.getPlotBox(),
                t.xAxis && t.xAxis.zoomEnabled && t.group && (t.group.attr(n),
                t.markerGroup && (t.markerGroup.attr(n),
                t.markerGroup.clip(i ? s.clipRect : null)),
                t.dataLabelsGroup && t.dataLabelsGroup.attr(n))
            }),
            s.clipRect.attr(i || s.clipBox)
        },
        dragStart: function(t) {
            var e = this.chart;
            e.mouseIsDown = t.type,
            e.cancelClick = !1,
            e.mouseDownX = this.mouseDownX = t.chartX,
            e.mouseDownY = this.mouseDownY = t.chartY
        },
        drag: function(t) {
            var e, i = this.chart, n = i.options.chart, s = t.chartX, r = t.chartY, o = this.zoomHor, a = this.zoomVert, l = i.plotLeft, h = i.plotTop, c = i.plotWidth, d = i.plotHeight, u = this.selectionMarker, p = this.mouseDownX, f = this.mouseDownY, g = n.panKey && t[n.panKey + "Key"];
            u && u.touch || (s < l ? s = l : l + c < s && (s = l + c),
            r < h ? r = h : h + d < r && (r = h + d),
            this.hasDragged = Math.sqrt(Math.pow(p - s, 2) + Math.pow(f - r, 2)),
            10 < this.hasDragged && (e = i.isInsidePlot(p - l, f - h),
            i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && !u && (this.selectionMarker = u = i.renderer.rect(l, h, o ? 1 : c, a ? 1 : d, 0).attr({
                fill: n.selectionMarkerFill || Xe("#335cad").setOpacity(.25).get(),
                "class": "highcharts-selection-marker",
                zIndex: 7
            }).add()),
            u && o && (s -= p,
            u.attr({
                width: Math.abs(s),
                x: (0 < s ? 0 : s) + p
            })),
            u && a && (s = r - f,
            u.attr({
                height: Math.abs(s),
                y: (0 < s ? 0 : s) + f
            })),
            e && !u && n.panning && i.pan(t, n.panning)))
        },
        drop: function(s) {
            var r, t, o, a, l, h, c, d = this, e = this.chart, u = this.hasPinched;
            this.selectionMarker && (r = {
                originalEvent: s,
                xAxis: [],
                yAxis: []
            },
            t = this.selectionMarker,
            o = t.attr ? t.attr("x") : t.x,
            a = t.attr ? t.attr("y") : t.y,
            l = t.attr ? t.attr("width") : t.width,
            h = t.attr ? t.attr("height") : t.height,
            (this.hasDragged || u) && ($e(e.axes, function(t) {
                var e, i, n;
                t.zoomEnabled && Ge(t.min) && (u || d[{
                    xAxis: "zoomX",
                    yAxis: "zoomY"
                }[t.coll]]) && (n = t.horiz,
                e = "touchend" === s.type ? t.minPixelPadding : 0,
                i = t.toValue((n ? o : a) + e),
                n = t.toValue((n ? o + l : a + h) - e),
                r[t.coll].push({
                    axis: t,
                    min: Math.min(i, n),
                    max: Math.max(i, n)
                }),
                c = !0)
            }),
            c && Ue(e, "selection", r, function(t) {
                e.zoom(qe(t, u ? {
                    animation: !1
                } : null))
            })),
            Ke(e.index) && (this.selectionMarker = this.selectionMarker.destroy()),
            u && this.scaleGroups()),
            e && Ke(e.index) && (Ye(e.container, {
                cursor: e._cursor
            }),
            e.cancelClick = 10 < this.hasDragged,
            e.mouseIsDown = this.hasDragged = this.hasPinched = !1,
            this.pinchDown = [])
        },
        onContainerMouseDown: function(t) {
            2 !== (t = this.normalize(t)).button && (this.zoomOption(t),
            t.preventDefault && t.preventDefault(),
            this.dragStart(t))
        },
        onDocumentMouseUp: function(t) {
            We[Fe.hoverChartIndex] && We[Fe.hoverChartIndex].pointer.drop(t)
        },
        onDocumentMouseMove: function(t) {
            var e = this.chart
              , i = this.chartPosition;
            t = this.normalize(t, i),
            !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
        },
        onContainerMouseLeave: function(t) {
            var e = We[Fe.hoverChartIndex];
            e && (t.relatedTarget || t.toElement) && (e.pointer.reset(),
            e.pointer.chartPosition = null)
        },
        onContainerMouseMove: function(t) {
            var e = this.chart;
            Ge(Fe.hoverChartIndex) && We[Fe.hoverChartIndex] && We[Fe.hoverChartIndex].mouseIsDown || (Fe.hoverChartIndex = e.index),
            (t = this.normalize(t)).returnValue = !1,
            "mousedown" === e.mouseIsDown && this.drag(t),
            !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || e.openMenu || this.runPointActions(t)
        },
        inClass: function(t, e) {
            for (var i; t; ) {
                if (i = je(t, "class")) {
                    if (-1 !== i.indexOf(e))
                        return !0;
                    if (-1 !== i.indexOf("highcharts-container"))
                        return !1
                }
                t = t.parentNode
            }
        },
        onTrackerMouseOut: function(t) {
            var e = this.chart.hoverSeries;
            t = t.relatedTarget || t.toElement,
            this.isDirectTouch = !1,
            !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
        },
        onContainerClick: function(t) {
            var e = this.chart
              , i = e.hoverPoint
              , n = e.plotLeft
              , s = e.plotTop;
            t = this.normalize(t),
            e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (Ue(i.series, "click", qe(t, {
                point: i
            })),
            e.hoverPoint && i.firePointEvent("click", t)) : (qe(t, this.getCoordinates(t)),
            e.isInsidePlot(t.chartX - n, t.chartY - s) && Ue(e, "click", t)))
        },
        setDOMEvents: function() {
            var e = this
              , t = e.chart.container
              , i = t.ownerDocument;
            t.onmousedown = function(t) {
                e.onContainerMouseDown(t)
            }
            ,
            t.onmousemove = function(t) {
                e.onContainerMouseMove(t)
            }
            ,
            t.onclick = function(t) {
                e.onContainerClick(t)
            }
            ,
            this.unbindContainerMouseLeave = He(t, "mouseleave", e.onContainerMouseLeave),
            Fe.unbindDocumentMouseUp || (Fe.unbindDocumentMouseUp = He(i, "mouseup", e.onDocumentMouseUp)),
            Fe.hasTouch && (t.ontouchstart = function(t) {
                e.onContainerTouchStart(t)
            }
            ,
            t.ontouchmove = function(t) {
                e.onContainerTouchMove(t)
            }
            ,
            Fe.unbindDocumentTouchEnd || (Fe.unbindDocumentTouchEnd = He(i, "touchend", e.onDocumentTouchEnd)))
        },
        destroy: function() {
            var i = this;
            i.unDocMouseMove && i.unDocMouseMove(),
            this.unbindContainerMouseLeave(),
            Fe.chartCount || (Fe.unbindDocumentMouseUp && (Fe.unbindDocumentMouseUp = Fe.unbindDocumentMouseUp()),
            Fe.unbindDocumentTouchEnd && (Fe.unbindDocumentTouchEnd = Fe.unbindDocumentTouchEnd())),
            clearInterval(i.tooltipTimeout),
            Fe.objectEach(i, function(t, e) {
                i[e] = null
            })
        }
    },
    ni = (ii = Nt).charts,
    si = ii.each,
    ri = ii.extend,
    oi = ii.map,
    ai = ii.noop,
    li = ii.pick,
    ri(ii.Pointer.prototype, {
        pinchTranslate: function(t, e, i, n, s, r) {
            this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, n, s, r),
            this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, n, s, r)
        },
        pinchTranslateDirection: function(t, e, i, n, s, r, o, a) {
            var l, h, c, d = this.chart, u = t ? "x" : "y", p = t ? "X" : "Y", f = "chart" + p, g = t ? "width" : "height", m = d["plot" + (t ? "Left" : "Top")], y = a || 1, v = d.inverted, x = d.bounds[t ? "h" : "v"], b = 1 === e.length, w = e[0][f], k = i[0][f], T = !b && e[1][f], S = !b && i[1][f];
            (i = function() {
                !b && 20 < Math.abs(w - T) && (y = a || Math.abs(k - S) / Math.abs(w - T)),
                h = (m - k) / y + w,
                l = d["plot" + (t ? "Width" : "Height")] / y
            }
            )(),
            (e = h) < x.min ? (e = x.min,
            c = !0) : e + l > x.max && (e = x.max - l,
            c = !0),
            c ? (k -= .8 * (k - o[u][0]),
            b || (S -= .8 * (S - o[u][1])),
            i()) : o[u] = [k, S],
            v || (r[u] = h - m,
            r[g] = l),
            r = v ? 1 / y : y,
            s[g] = l,
            s[u] = e,
            n[v ? t ? "scaleY" : "scaleX" : "scale" + p] = y,
            n["translate" + p] = r * m + (k - r * w)
        },
        pinch: function(t) {
            var e = this
              , o = e.chart
              , i = e.pinchDown
              , n = t.touches
              , s = n.length
              , r = e.lastValidTouch
              , a = e.hasZoom
              , l = e.selectionMarker
              , h = {}
              , c = 1 === s && (e.inClass(t.target, "highcharts-tracker") && o.runTrackerClick || e.runChartClick)
              , d = {};
            1 < s && (e.initiated = !0),
            a && e.initiated && !c && t.preventDefault(),
            oi(n, function(t) {
                return e.normalize(t)
            }),
            "touchstart" === t.type ? (si(n, function(t, e) {
                i[e] = {
                    chartX: t.chartX,
                    chartY: t.chartY
                }
            }),
            r.x = [i[0].chartX, i[1] && i[1].chartX],
            r.y = [i[0].chartY, i[1] && i[1].chartY],
            si(o.axes, function(t) {
                var e, i, n, s, r;
                t.zoomEnabled && (e = o.bounds[t.horiz ? "h" : "v"],
                i = t.minPixelPadding,
                n = t.toPixels(li(t.options.min, t.dataMin)),
                s = t.toPixels(li(t.options.max, t.dataMax)),
                r = Math.max(n, s),
                e.min = Math.min(t.pos, Math.min(n, s) - i),
                e.max = Math.max(t.pos + t.len, r + i))
            }),
            e.res = !0) : e.followTouchMove && 1 === s ? this.runPointActions(e.normalize(t)) : i.length && (l || (e.selectionMarker = l = ri({
                destroy: ai,
                touch: !0
            }, o.plotBox)),
            e.pinchTranslate(i, n, h, l, d, r),
            e.hasPinched = a,
            e.scaleGroups(h, d),
            e.res && (e.res = !1,
            this.reset(!1, 0)))
        },
        touch: function(t, e) {
            var i, n = this.chart;
            n.index !== ii.hoverChartIndex && this.onContainerMouseLeave({
                relatedTarget: !0
            }),
            ii.hoverChartIndex = n.index,
            1 === t.touches.length ? (t = this.normalize(t),
            n.isInsidePlot(t.chartX - n.plotLeft, t.chartY - n.plotTop) && !n.openMenu ? (e && this.runPointActions(t),
            "touchmove" === t.type && (i = !!(e = this.pinchDown)[0] && 4 <= Math.sqrt(Math.pow(e[0].chartX - t.chartX, 2) + Math.pow(e[0].chartY - t.chartY, 2))),
            li(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
        },
        onContainerTouchStart: function(t) {
            this.zoomOption(t),
            this.touch(t, !0)
        },
        onContainerTouchMove: function(t) {
            this.touch(t)
        },
        onDocumentTouchEnd: function(t) {
            ni[ii.hoverChartIndex] && ni[ii.hoverChartIndex].pointer.drop(t)
        }
    }),
    pi = (hi = Nt).addEvent,
    fi = hi.charts,
    gi = hi.css,
    mi = hi.doc,
    yi = hi.extend,
    vi = hi.noop,
    xi = hi.Pointer,
    bi = hi.removeEvent,
    wi = hi.win,
    ki = hi.wrap,
    hi.hasTouch || !wi.PointerEvent && !wi.MSPointerEvent || (ci = {},
    di = !!wi.PointerEvent,
    ui = function(t, e, i, n) {
        var s;
        "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !fi[hi.hoverChartIndex] || (n(t),
        (n = fi[hi.hoverChartIndex].pointer)[e]({
            type: i,
            target: t.currentTarget,
            preventDefault: vi,
            touches: ((s = []).item = function(t) {
                return this[t]
            }
            ,
            hi.objectEach(ci, function(t) {
                s.push({
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.target
                })
            }),
            s)
        }))
    }
    ,
    yi(xi.prototype, {
        onContainerPointerDown: function(t) {
            ui(t, "onContainerTouchStart", "touchstart", function(t) {
                ci[t.pointerId] = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.currentTarget
                }
            })
        },
        onContainerPointerMove: function(t) {
            ui(t, "onContainerTouchMove", "touchmove", function(t) {
                ci[t.pointerId] = {
                    pageX: t.pageX,
                    pageY: t.pageY
                },
                ci[t.pointerId].target || (ci[t.pointerId].target = t.currentTarget)
            })
        },
        onDocumentPointerUp: function(t) {
            ui(t, "onDocumentTouchEnd", "touchend", function(t) {
                delete ci[t.pointerId]
            })
        },
        batchMSEvents: function(t) {
            t(this.chart.container, di ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown),
            t(this.chart.container, di ? "pointermove" : "MSPointerMove", this.onContainerPointerMove),
            t(mi, di ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
        }
    }),
    ki(xi.prototype, "init", function(t, e, i) {
        t.call(this, e, i),
        this.hasZoom && gi(e.container, {
            "-ms-touch-action": "none",
            "touch-action": "none"
        })
    }),
    ki(xi.prototype, "setDOMEvents", function(t) {
        t.apply(this),
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(pi)
    }),
    ki(xi.prototype, "destroy", function(t) {
        this.batchMSEvents(bi),
        t.call(this)
    })),
    Si = (Ti = Nt).addEvent,
    Mi = Ti.css,
    Ci = Ti.discardElement,
    Ai = Ti.defined,
    Li = Ti.each,
    Pi = Ti.fireEvent,
    Oi = Ti.isFirefox,
    Ei = Ti.marginNames,
    Ni = Ti.merge,
    Di = Ti.pick,
    _i = Ti.setAnimation,
    Ii = Ti.stableSort,
    Ri = Ti.win,
    zi = Ti.wrap,
    Ti.Legend = function(t, e) {
        this.init(t, e)
    }
    ,
    Ti.Legend.prototype = {
        init: function(t, e) {
            this.chart = t,
            this.setOptions(e),
            e.enabled && (this.render(),
            Si(this.chart, "endResize", function() {
                this.legend.positionCheckboxes()
            }))
        },
        setOptions: function(t) {
            var e = Di(t.padding, 8);
            this.options = t,
            this.itemStyle = t.itemStyle,
            this.itemHiddenStyle = Ni(this.itemStyle, t.itemHiddenStyle),
            this.itemMarginTop = t.itemMarginTop || 0,
            this.padding = e,
            this.initialItemY = e - 5,
            this.symbolWidth = Di(t.symbolWidth, 16),
            this.pages = []
        },
        update: function(t, e) {
            var i = this.chart;
            this.setOptions(Ni(!0, this.options, t)),
            this.destroy(),
            i.isDirtyLegend = i.isDirtyBox = !0,
            Di(e, !0) && i.redraw(),
            Pi(this, "afterUpdate")
        },
        colorizeItem: function(t, e) {
            t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
            var i = this.options
              , n = t.legendItem
              , s = t.legendLine
              , r = t.legendSymbol
              , o = this.itemHiddenStyle.color
              , i = e ? i.itemStyle.color : o
              , a = e && t.color || o
              , l = t.options && t.options.marker
              , h = {
                fill: a
            };
            n && n.css({
                fill: i,
                color: i
            }),
            s && s.attr({
                stroke: a
            }),
            r && (l && r.isMarker && (h = t.pointAttribs(),
            e || (h.stroke = h.fill = o)),
            r.attr(h)),
            Pi(this, "afterColorizeItem", {
                item: t,
                visible: e
            })
        },
        positionItem: function(t) {
            var e = (i = this.options).symbolPadding
              , i = !i.rtl
              , n = (s = t._legendItemPos)[0]
              , s = s[1]
              , r = t.checkbox;
            (t = t.legendGroup) && t.element && t.translate(i ? n : this.legendWidth - n - 2 * e - 4, s),
            r && (r.x = n,
            r.y = s)
        },
        destroyItem: function(e) {
            var t = e.checkbox;
            Li(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(t) {
                e[t] && (e[t] = e[t].destroy())
            }),
            t && Ci(e.checkbox)
        },
        destroy: function() {
            function e(t) {
                this[t] && (this[t] = this[t].destroy())
            }
            Li(this.getAllItems(), function(t) {
                Li(["legendItem", "legendGroup"], e, t)
            }),
            Li("clipRect up down pager nav box title group".split(" "), e, this),
            this.display = null
        },
        positionCheckboxes: function() {
            var n, s = this.group && this.group.alignAttr, r = this.clipHeight || this.legendHeight, o = this.titleHeight;
            s && (n = s.translateY,
            Li(this.allItems, function(t) {
                var e, i = t.checkbox;
                i && (e = n + o + i.y + (this.scrollOffset || 0) + 3,
                Mi(i, {
                    left: s.translateX + t.checkboxOffset + i.x - 20 + "px",
                    top: e + "px",
                    display: n - 6 < e && e < n + r - 6 ? "" : "none"
                }))
            }, this))
        },
        renderTitle: function() {
            var t = this.options
              , e = this.padding
              , i = t.title
              , n = 0;
            i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({
                zIndex: 1
            }).css(i.style).add(this.group)),
            n = (t = this.title.getBBox()).height,
            this.offsetWidth = t.width,
            this.contentGroup.attr({
                translateY: n
            })),
            this.titleHeight = n
        },
        setText: function(t) {
            var e = this.options;
            t.legendItem.attr({
                text: e.labelFormat ? Ti.format(e.labelFormat, t, this.chart.time) : e.labelFormatter.call(t)
            })
        },
        renderItem: function(t) {
            var e = this.chart
              , i = e.renderer
              , n = this.options
              , s = this.symbolWidth
              , r = n.symbolPadding
              , o = this.itemStyle
              , a = this.itemHiddenStyle
              , l = "horizontal" === n.layout ? Di(n.itemDistance, 20) : 0
              , h = !n.rtl
              , c = t.legendItem
              , d = !t.series
              , u = !d && t.series.drawLegendSymbol ? t.series : t
              , p = u.options
              , l = s + r + l + ((p = this.createCheckboxForItem && p && p.showCheckbox) ? 20 : 0)
              , f = n.useHTML
              , g = t.options.className;
            c || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + t.colorIndex + (g ? " " + g : "") + (d ? " highcharts-series-" + t.index : "")).attr({
                zIndex: 1
            }).add(this.scrollGroup),
            t.legendItem = c = i.text("", h ? s + r : -r, this.baseline || 0, f).css(Ni(t.visible ? o : a)).attr({
                align: h ? "left" : "right",
                zIndex: 2
            }).add(t.legendGroup),
            this.baseline || (s = o.fontSize,
            this.fontMetrics = i.fontMetrics(s, c),
            this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop,
            c.attr("y", this.baseline)),
            this.symbolHeight = n.symbolHeight || this.fontMetrics.f,
            u.drawLegendSymbol(this, t),
            this.setItemEvents && this.setItemEvents(t, c, f),
            p && this.createCheckboxForItem(t)),
            this.colorizeItem(t, t.visible),
            o.width || c.css({
                width: (n.itemWidth || n.width || e.spacingBox.width) - l
            }),
            this.setText(t),
            e = c.getBBox(),
            t.itemWidth = t.checkboxOffset = n.itemWidth || t.legendItemWidth || e.width + l,
            this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth),
            this.totalItemWidth += t.itemWidth,
            this.itemHeight = t.itemHeight = Math.round(t.legendItemHeight || e.height || this.symbolHeight)
        },
        layoutItem: function(t) {
            var e = this.options
              , i = this.padding
              , n = "horizontal" === e.layout
              , s = t.itemHeight
              , r = e.itemMarginBottom || 0
              , o = this.itemMarginTop
              , a = n ? Di(e.itemDistance, 20) : 0
              , l = e.width
              , h = l || this.chart.spacingBox.width - 2 * i - e.x
              , e = e.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : t.itemWidth;
            n && this.itemX - i + e > h && (this.itemX = i,
            this.itemY += o + this.lastLineHeight + r,
            this.lastLineHeight = 0),
            this.lastItemY = o + this.itemY + r,
            this.lastLineHeight = Math.max(s, this.lastLineHeight),
            t._legendItemPos = [this.itemX, this.itemY],
            n ? this.itemX += e : (this.itemY += o + s + r,
            this.lastLineHeight = s),
            this.offsetWidth = l || Math.max((n ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i, this.offsetWidth)
        },
        getAllItems: function() {
            var i = [];
            return Li(this.chart.series, function(t) {
                var e = t && t.options;
                t && Di(e.showInLegend, !Ai(e.linkedTo) && void 0, !0) && (i = i.concat(t.legendItems || ("point" === e.legendType ? t.data : t)))
            }),
            Pi(this, "afterGetAllItems", {
                allItems: i
            }),
            i
        },
        getAlignment: function() {
            var t = this.options;
            return t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
        },
        adjustMargins: function(i, n) {
            var s = this.chart
              , r = this.options
              , o = this.getAlignment();
            o && Li([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(t, e) {
                t.test(o) && !Ai(i[e]) && (s[Ei[e]] = Math.max(s[Ei[e]], s.legend[(e + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][e] * r[e % 2 ? "x" : "y"] + Di(r.margin, 12) + n[e] + (0 === e && void 0 !== s.options.title.margin ? s.titleOffset + s.options.title.margin : 0)))
            })
        },
        render: function() {
            var t, e, i, n, s = this.chart, r = s.renderer, o = this.group, a = this.box, l = this.options, h = this.padding;
            this.itemX = h,
            this.itemY = this.initialItemY,
            this.lastItemY = this.offsetWidth = 0,
            o || (this.group = o = r.g("legend").attr({
                zIndex: 7
            }).add(),
            this.contentGroup = r.g().attr({
                zIndex: 1
            }).add(o),
            this.scrollGroup = r.g().add(this.contentGroup)),
            this.renderTitle(),
            t = this.getAllItems(),
            Ii(t, function(t, e) {
                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
            }),
            l.reversed && t.reverse(),
            this.allItems = t,
            this.display = e = !!t.length,
            this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0,
            Li(t, this.renderItem, this),
            Li(t, this.layoutItem, this),
            i = (l.width || this.offsetWidth) + h,
            n = this.lastItemY + this.lastLineHeight + this.titleHeight,
            n = this.handleOverflow(n),
            n += h,
            a || (this.box = a = r.rect().addClass("highcharts-legend-box").attr({
                r: l.borderRadius
            }).add(o),
            a.isNew = !0),
            a.attr({
                stroke: l.borderColor,
                "stroke-width": l.borderWidth || 0,
                fill: l.backgroundColor || "none"
            }).shadow(l.shadow),
            0 < i && 0 < n && (a[a.isNew ? "attr" : "animate"](a.crisp.call({}, {
                x: 0,
                y: 0,
                width: i,
                height: n
            }, a.strokeWidth())),
            a.isNew = !1),
            a[e ? "show" : "hide"](),
            this.legendWidth = i,
            this.legendHeight = n,
            Li(t, this.positionItem, this),
            e && (r = s.spacingBox,
            /(lth|ct|rth)/.test(this.getAlignment()) && (r = Ni(r, {
                y: r.y + s.titleOffset + s.options.title.margin
            })),
            o.align(Ni(l, {
                width: i,
                height: n
            }), !0, r)),
            s.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(t) {
            var r, o, e = this, i = (l = this.chart).renderer, n = this.options, s = n.y, a = this.padding, l = l.spacingBox.height + ("top" === n.verticalAlign ? -s : s) - a, s = n.maxHeight, h = this.clipRect, c = n.navigation, d = Di(c.animation, !0), u = c.arrowSize || 12, p = this.nav, f = this.pages, g = this.allItems, m = function(t) {
                "number" == typeof t ? h.attr({
                    height: t
                }) : h && (e.clipRect = h.destroy(),
                e.contentGroup.clip()),
                e.contentGroup.div && (e.contentGroup.div.style.clip = t ? "rect(" + a + "px,9999px," + (a + t) + "px,0)" : "auto")
            };
            return "horizontal" !== n.layout || "middle" === n.verticalAlign || n.floating || (l /= 2),
            s && (l = Math.min(l, s)),
            f.length = 0,
            l < t && !1 !== c.enabled ? (this.clipHeight = r = Math.max(l - 20 - this.titleHeight - a, 0),
            this.currentPage = Di(this.currentPage, 1),
            this.fullHeight = t,
            Li(g, function(t, e) {
                var i = t._legendItemPos[1]
                  , n = Math.round(t.legendItem.getBBox().height)
                  , s = f.length;
                (!s || i - f[s - 1] > r && (o || i) !== f[s - 1]) && (f.push(o || i),
                s++),
                t.pageIx = s - 1,
                o && (g[e - 1].pageIx = s - 1),
                e === g.length - 1 && i + n - f[s - 1] > r && (f.push(i),
                t.pageIx = s),
                i !== o && (o = i)
            }),
            h || (h = e.clipRect = i.clipRect(0, a, 9999, 0),
            e.contentGroup.clip(h)),
            m(r),
            p || (this.nav = p = i.g().attr({
                zIndex: 1
            }).add(this.group),
            this.up = i.symbol("triangle", 0, 0, u, u).on("click", function() {
                e.scroll(-1, d)
            }).add(p),
            this.pager = i.text("", 15, 10).addClass("highcharts-legend-navigation").css(c.style).add(p),
            this.down = i.symbol("triangle-down", 0, 0, u, u).on("click", function() {
                e.scroll(1, d)
            }).add(p)),
            e.scroll(0),
            t = l) : p && (m(),
            this.nav = p.destroy(),
            this.scrollGroup.attr({
                translateY: 1
            }),
            this.clipHeight = 0),
            t
        },
        scroll: function(t, e) {
            var i = this.pages
              , n = i.length;
            t = this.currentPage + t;
            var s = this.clipHeight
              , r = this.options.navigation
              , o = this.pager
              , a = this.padding;
            n < t && (t = n),
            0 < t && (void 0 !== e && _i(e, this.chart),
            this.nav.attr({
                translateX: a,
                translateY: s + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }),
            this.up.attr({
                "class": 1 === t ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
            }),
            o.attr({
                text: t + "/" + n
            }),
            this.down.attr({
                x: 18 + this.pager.getBBox().width,
                "class": t === n ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
            }),
            this.up.attr({
                fill: 1 === t ? r.inactiveColor : r.activeColor
            }).css({
                cursor: 1 === t ? "default" : "pointer"
            }),
            this.down.attr({
                fill: t === n ? r.inactiveColor : r.activeColor
            }).css({
                cursor: t === n ? "default" : "pointer"
            }),
            this.scrollOffset = -i[t - 1] + this.initialItemY,
            this.scrollGroup.animate({
                translateY: this.scrollOffset
            }),
            this.currentPage = t,
            this.positionCheckboxes())
        }
    },
    Ti.LegendSymbolMixin = {
        drawRectangle: function(t, e) {
            var i = t.symbolHeight
              , n = t.options.squareSymbol;
            e.legendSymbol = this.chart.renderer.rect(n ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, n ? i : t.symbolWidth, i, Di(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({
                zIndex: 3
            }).add(e.legendGroup)
        },
        drawLineMarker: function(t) {
            var e, i = this.options, n = i.marker, s = t.symbolWidth, r = t.symbolHeight, o = r / 2, a = this.chart.renderer, l = this.legendGroup;
            t = t.baseline - Math.round(.3 * t.fontMetrics.b),
            e = {
                "stroke-width": i.lineWidth || 0
            },
            i.dashStyle && (e.dashstyle = i.dashStyle),
            this.legendLine = a.path(["M", 0, t, "L", s, t]).addClass("highcharts-graph").attr(e).add(l),
            n && !1 !== n.enabled && (i = Math.min(Di(n.radius, o), o),
            0 === this.symbol.indexOf("url") && (n = Ni(n, {
                width: r,
                height: r
            }),
            i = 0),
            this.legendSymbol = n = a.symbol(this.symbol, s / 2 - i, t - i, 2 * i, 2 * i, n).addClass("highcharts-point").add(l),
            n.isMarker = !0)
        }
    },
    (/Trident\\/7\\.0/.test(Ri.navigator.userAgent) || Oi) && zi(Ti.Legend.prototype, "positionItem", function(t, e) {
        var i = this
          , n = function() {
            e._legendItemPos && t.call(i, e)
        };
        n(),
        setTimeout(n)
    }),
    Fi = (Bi = Nt).addEvent,
    Hi = Bi.animate,
    ji = Bi.animObject,
    Wi = Bi.attr,
    Xi = Bi.doc,
    Yi = Bi.Axis,
    Gi = Bi.createElement,
    $i = Bi.defaultOptions,
    qi = Bi.discardElement,
    Vi = Bi.charts,
    Ui = Bi.css,
    Ki = Bi.defined,
    Zi = Bi.each,
    Ji = Bi.extend,
    Qi = Bi.find,
    tn = Bi.fireEvent,
    en = Bi.grep,
    nn = Bi.isNumber,
    sn = Bi.isObject,
    rn = Bi.isString,
    on = Bi.Legend,
    an = Bi.marginNames,
    ln = Bi.merge,
    hn = Bi.objectEach,
    cn = Bi.Pointer,
    dn = Bi.pick,
    un = Bi.pInt,
    pn = Bi.removeEvent,
    fn = Bi.seriesTypes,
    gn = Bi.splat,
    mn = Bi.syncTimeout,
    yn = Bi.win,
    vn = Bi.Chart = function() {
        this.getArgs.apply(this, arguments)
    }
    ,
    Bi.chart = function(t, e, i) {
        return new vn(t,e,i)
    }
    ,
    Ji(vn.prototype, {
        callbacks: [],
        getArgs: function() {
            var t = [].slice.call(arguments);
            (rn(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()),
            this.init(t[0], t[1])
        },
        init: function(n, s) {
            var r, o, a = n.series, l = n.plotOptions || {};
            tn(this, "init", {
                args: arguments
            }, function() {
                for (o in n.series = null,
                (r = ln($i, n)).plotOptions)
                    r.plotOptions[o].tooltip = l[o] && ln(l[o].tooltip) || void 0;
                r.tooltip.userOptions = n.chart && n.chart.forExport && n.tooltip.userOptions || n.tooltip,
                r.series = n.series = a,
                this.userOptions = n;
                var t = r.chart
                  , e = t.events;
                this.margin = [],
                this.spacing = [],
                this.bounds = {
                    h: {},
                    v: {}
                },
                this.labelCollectors = [],
                this.callback = s,
                this.isResizing = 0,
                this.options = r,
                this.axes = [],
                this.series = [],
                this.time = n.time && Bi.keys(n.time).length ? new Bi.Time(n.time) : Bi.time,
                this.hasCartesianSeries = t.showAxes;
                var i = this;
                i.index = Vi.length,
                Vi.push(i),
                Bi.chartCount++,
                e && hn(e, function(t, e) {
                    Fi(i, e, t)
                }),
                i.xAxis = [],
                i.yAxis = [],
                i.pointCount = i.colorCounter = i.symbolCounter = 0,
                tn(i, "afterInit"),
                i.firstRender()
            })
        },
        initSeries: function(t) {
            var e = this.options.chart;
            return (e = fn[t.type || e.type || e.defaultSeriesType]) || Bi.error(17, !0),
            (e = new e).init(this, t),
            e
        },
        orderSeries: function(t) {
            var e = this.series;
            for (t = t || 0; t < e.length; t++)
                e[t] && (e[t].index = t,
                e[t].name = e[t].getName())
        },
        isInsidePlot: function(t, e, i) {
            var n = i ? e : t;
            return t = i ? t : e,
            0 <= n && n <= this.plotWidth && 0 <= t && t <= this.plotHeight
        },
        redraw: function(t) {
            tn(this, "beforeRedraw");
            var i, e, n, s = this.axes, r = this.series, o = this.pointer, a = this.legend, l = this.isDirtyLegend, h = this.hasCartesianSeries, c = this.isDirtyBox, d = this.renderer, u = d.isHidden(), p = [];
            for (this.setResponsive && this.setResponsive(!1),
            Bi.setAnimation(t, this),
            u && this.temporaryDisplay(),
            this.layOutTitles(),
            t = r.length; t--; )
                if ((n = r[t]).options.stacking && (i = !0,
                n.isDirty)) {
                    e = !0;
                    break
                }
            if (e)
                for (t = r.length; t--; )
                    (n = r[t]).options.stacking && (n.isDirty = !0);
            Zi(r, function(t) {
                t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(),
                l = !0),
                t.isDirtyData && tn(t, "updatedData")
            }),
            l && a.options.enabled && (a.render(),
            this.isDirtyLegend = !1),
            i && this.getStacks(),
            h && Zi(s, function(t) {
                t.updateNames(),
                t.setScale()
            }),
            this.getMargins(),
            h && (Zi(s, function(t) {
                t.isDirty && (c = !0)
            }),
            Zi(s, function(t) {
                var e = t.min + "," + t.max;
                t.extKey !== e && (t.extKey = e,
                p.push(function() {
                    tn(t, "afterSetExtremes", Ji(t.eventArgs, t.getExtremes())),
                    delete t.eventArgs
                })),
                (c || i) && t.redraw()
            })),
            c && this.drawChartBox(),
            tn(this, "predraw"),
            Zi(r, function(t) {
                (c || t.isDirty) && t.visible && t.redraw(),
                t.isDirtyData = !1
            }),
            o && o.reset(!0),
            d.draw(),
            tn(this, "redraw"),
            tn(this, "render"),
            u && this.temporaryDisplay(!0),
            Zi(p, function(t) {
                t.call()
            })
        },
        get: function(e) {
            function t(t) {
                return t.id === e || t.options && t.options.id === e
            }
            for (var i = this.series, n = Qi(this.axes, t) || Qi(this.series, t), s = 0; !n && s < i.length; s++)
                n = Qi(i[s].points || [], t);
            return n
        },
        getAxes: function() {
            var e = this
              , t = (i = this.options).xAxis = gn(i.xAxis || {})
              , i = i.yAxis = gn(i.yAxis || {});
            tn(this, "getAxes"),
            Zi(t, function(t, e) {
                t.index = e,
                t.isX = !0
            }),
            Zi(i, function(t, e) {
                t.index = e
            }),
            t = t.concat(i),
            Zi(t, function(t) {
                new Yi(e,t)
            }),
            tn(this, "afterGetAxes")
        },
        getSelectedPoints: function() {
            var e = [];
            return Zi(this.series, function(t) {
                e = e.concat(en(t.data || [], function(t) {
                    return t.selected
                }))
            }),
            e
        },
        getSelectedSeries: function() {
            return en(this.series, function(t) {
                return t.selected
            })
        },
        setTitle: function(t, e, i) {
            var r = this
              , n = (s = r.options).title = ln({
                style: {
                    color: "#333333",
                    fontSize: s.isStock ? "16px" : "18px"
                }
            }, s.title, t)
              , s = s.subtitle = ln({
                style: {
                    color: "#666666"
                }
            }, s.subtitle, e);
            Zi([["title", t, n], ["subtitle", e, s]], function(t, e) {
                var i = t[0]
                  , n = r[i]
                  , s = t[1];
                t = t[2],
                n && s && (r[i] = n = n.destroy()),
                t && !n && (r[i] = r.renderer.text(t.text, 0, 0, t.useHTML).attr({
                    align: t.align,
                    "class": "highcharts-" + i,
                    zIndex: t.zIndex || 4
                }).add(),
                r[i].update = function(t) {
                    r.setTitle(!e && t, e && t)
                }
                ,
                r[i].css(t.style))
            }),
            r.layOutTitles(i)
        },
        layOutTitles: function(t) {
            var e, s = 0, r = this.renderer, o = this.spacingBox;
            Zi(["title", "subtitle"], function(t) {
                var e, i = this[t], n = this.options[t];
                t = "title" === t ? -3 : n.verticalAlign ? 0 : s + 2,
                i && (e = n.style.fontSize,
                e = r.fontMetrics(e, i).b,
                i.css({
                    width: (n.width || o.width + n.widthAdjust) + "px"
                }).align(Ji({
                    y: t + e
                }, n), !1, "spacingBox"),
                n.floating || n.verticalAlign || (s = Math.ceil(s + i.getBBox(n.useHTML).height)))
            }, this),
            e = this.titleOffset !== s,
            this.titleOffset = s,
            !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e,
            this.hasRendered && dn(t, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var t = (e = this.options.chart).width
              , e = e.height
              , i = this.renderTo;
            Ki(t) || (this.containerWidth = Bi.getStyle(i, "width")),
            Ki(e) || (this.containerHeight = Bi.getStyle(i, "height")),
            this.chartWidth = Math.max(0, t || this.containerWidth || 600),
            this.chartHeight = Math.max(0, Bi.relativeLength(e, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
        },
        temporaryDisplay: function(t) {
            var e = this.renderTo;
            if (t)
                for (; e && e.style; )
                    e.hcOrigStyle && (Bi.css(e, e.hcOrigStyle),
                    delete e.hcOrigStyle),
                    e.hcOrigDetached && (Xi.body.removeChild(e),
                    e.hcOrigDetached = !1),
                    e = e.parentNode;
            else
                for (; e && e.style && (Xi.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0,
                Xi.body.appendChild(e)),
                "none" !== Bi.getStyle(e, "display", !1) && !e.hcOricDetached || (e.hcOrigStyle = {
                    display: e.style.display,
                    height: e.style.height,
                    overflow: e.style.overflow
                },
                t = {
                    display: "block",
                    overflow: "hidden"
                },
                e !== this.renderTo && (t.height = 0),
                Bi.css(e, t),
                e.offsetWidth || e.style.setProperty("display", "block", "important")),
                (e = e.parentNode) !== Xi.body); )
                    ;
        },
        setClassName: function(t) {
            this.container.className = "highcharts-container " + (t || "")
        },
        getContainer: function() {
            var t, e, i, n = this.options, s = n.chart, r = this.renderTo, o = Bi.uniqueKey();
            r || (this.renderTo = r = s.renderTo),
            rn(r) && (this.renderTo = r = Xi.getElementById(r)),
            r || Bi.error(13, !0),
            t = un(Wi(r, "data-highcharts-chart")),
            nn(t) && Vi[t] && Vi[t].hasRendered && Vi[t].destroy(),
            Wi(r, "data-highcharts-chart", this.index),
            r.innerHTML = "",
            s.skipClone || r.offsetWidth || this.temporaryDisplay(),
            this.getChartSize(),
            t = this.chartWidth,
            e = this.chartHeight,
            i = Ji({
                position: "relative",
                overflow: "hidden",
                width: t + "px",
                height: e + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, s.style),
            this.container = r = Gi("div", {
                id: o
            }, i, r),
            this._cursor = r.style.cursor,
            this.renderer = new (Bi[s.renderer] || Bi.Renderer)(r,t,e,null,s.forExport,n.exporting && n.exporting.allowHTML),
            this.setClassName(s.className),
            this.renderer.setStyle(s.style),
            this.renderer.chartIndex = this.index,
            tn(this, "afterGetContainer")
        },
        getMargins: function(t) {
            var e = this.spacing
              , i = this.margin
              , n = this.titleOffset;
            this.resetMargins(),
            n && !Ki(i[0]) && (this.plotTop = Math.max(this.plotTop, n + this.options.title.margin + e[0])),
            this.legend && this.legend.display && this.legend.adjustMargins(i, e),
            this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value),
            this.adjustPlotArea && this.adjustPlotArea(),
            t || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var i = this
              , n = i.axisOffset = [0, 0, 0, 0]
              , s = i.margin;
            i.hasCartesianSeries && Zi(i.axes, function(t) {
                t.visible && t.getOffset()
            }),
            Zi(an, function(t, e) {
                Ki(s[e]) || (i[t] += n[e])
            }),
            i.setChartSize()
        },
        reflow: function(t) {
            var e = this
              , i = e.options.chart
              , n = e.renderTo
              , s = Ki(i.width) && Ki(i.height)
              , r = i.width || Bi.getStyle(n, "width")
              , i = i.height || Bi.getStyle(n, "height")
              , n = t ? t.target : yn;
            s || e.isPrinting || !r || !i || n !== yn && n !== Xi || (r === e.containerWidth && i === e.containerHeight || (Bi.clearTimeout(e.reflowTimeout),
            e.reflowTimeout = mn(function() {
                e.container && e.setSize(void 0, void 0, !1)
            }, t ? 100 : 0)),
            e.containerWidth = r,
            e.containerHeight = i)
        },
        setReflow: function(t) {
            var e = this;
            !1 === t || this.unbindReflow ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = Fi(yn, "resize", function(t) {
                e.reflow(t)
            }),
            Fi(this, "destroy", this.unbindReflow))
        },
        setSize: function(t, e, i) {
            var n = this
              , s = n.renderer;
            n.isResizing += 1,
            Bi.setAnimation(i, n),
            n.oldChartHeight = n.chartHeight,
            n.oldChartWidth = n.chartWidth,
            void 0 !== t && (n.options.chart.width = t),
            void 0 !== e && (n.options.chart.height = e),
            n.getChartSize(),
            ((t = s.globalAnimation) ? Hi : Ui)(n.container, {
                width: n.chartWidth + "px",
                height: n.chartHeight + "px"
            }, t),
            n.setChartSize(!0),
            s.setSize(n.chartWidth, n.chartHeight, i),
            Zi(n.axes, function(t) {
                t.isDirty = !0,
                t.setScale()
            }),
            n.isDirtyLegend = !0,
            n.isDirtyBox = !0,
            n.layOutTitles(),
            n.getMargins(),
            n.redraw(i),
            n.oldChartHeight = null,
            tn(n, "resize"),
            mn(function() {
                n && tn(n, "endResize", null, function() {
                    --n.isResizing
                })
            }, ji(t).duration)
        },
        setChartSize: function(t) {
            var e, i, n, s, r = this.inverted, o = this.renderer, a = this.chartWidth, l = this.chartHeight, h = this.options.chart, c = this.spacing, d = this.clipOffset;
            this.plotLeft = e = Math.round(this.plotLeft),
            this.plotTop = i = Math.round(this.plotTop),
            this.plotWidth = n = Math.max(0, Math.round(a - e - this.marginRight)),
            this.plotHeight = s = Math.max(0, Math.round(l - i - this.marginBottom)),
            this.plotSizeX = r ? s : n,
            this.plotSizeY = r ? n : s,
            this.plotBorderWidth = h.plotBorderWidth || 0,
            this.spacingBox = o.spacingBox = {
                x: c[3],
                y: c[0],
                width: a - c[3] - c[1],
                height: l - c[0] - c[2]
            },
            this.plotBox = o.plotBox = {
                x: e,
                y: i,
                width: n,
                height: s
            },
            a = 2 * Math.floor(this.plotBorderWidth / 2),
            r = Math.ceil(Math.max(a, d[3]) / 2),
            o = Math.ceil(Math.max(a, d[0]) / 2),
            this.clipBox = {
                x: r,
                y: o,
                width: Math.floor(this.plotSizeX - Math.max(a, d[1]) / 2 - r),
                height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a, d[2]) / 2 - o))
            },
            t || Zi(this.axes, function(t) {
                t.setAxisSize(),
                t.setAxisTranslation()
            }),
            tn(this, "afterSetChartSize", {
                skipAxes: t
            })
        },
        resetMargins: function() {
            var s = this
              , r = s.options.chart;
            Zi(["margin", "spacing"], function(i) {
                var t = r[i]
                  , n = sn(t) ? t : [t, t, t, t];
                Zi(["Top", "Right", "Bottom", "Left"], function(t, e) {
                    s[i][e] = dn(r[i + t], n[e])
                })
            }),
            Zi(an, function(t, e) {
                s[t] = dn(s.margin[e], s.spacing[e])
            }),
            s.axisOffset = [0, 0, 0, 0],
            s.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var t, e, i = this.options.chart, n = this.renderer, s = this.chartWidth, r = this.chartHeight, o = this.chartBackground, a = this.plotBackground, l = this.plotBorder, h = this.plotBGImage, c = i.backgroundColor, d = i.plotBackgroundColor, u = i.plotBackgroundImage, p = this.plotLeft, f = this.plotTop, g = this.plotWidth, m = this.plotHeight, y = this.plotBox, v = this.clipRect, x = this.clipBox, b = "animate";
            o || (this.chartBackground = o = n.rect().addClass("highcharts-background").add(),
            b = "attr"),
            e = (t = i.borderWidth || 0) + (i.shadow ? 8 : 0),
            c = {
                fill: c || "none"
            },
            (t || o["stroke-width"]) && (c.stroke = i.borderColor,
            c["stroke-width"] = t),
            o.attr(c).shadow(i.shadow),
            o[b]({
                x: e / 2,
                y: e / 2,
                width: s - e - t % 2,
                height: r - e - t % 2,
                r: i.borderRadius
            }),
            b = "animate",
            a || (b = "attr",
            this.plotBackground = a = n.rect().addClass("highcharts-plot-background").add()),
            a[b](y),
            a.attr({
                fill: d || "none"
            }).shadow(i.plotShadow),
            u && (h ? h.animate(y) : this.plotBGImage = n.image(u, p, f, g, m).add()),
            v ? v.animate({
                width: x.width,
                height: x.height
            }) : this.clipRect = n.clipRect(x),
            b = "animate",
            l || (b = "attr",
            this.plotBorder = l = n.rect().addClass("highcharts-plot-border").attr({
                zIndex: 1
            }).add()),
            l.attr({
                stroke: i.plotBorderColor,
                "stroke-width": i.plotBorderWidth || 0,
                fill: "none"
            }),
            l[b](l.crisp({
                x: p,
                y: f,
                width: g,
                height: m
            }, -l.strokeWidth())),
            this.isDirtyBox = !1,
            tn(this, "afterDrawChartBox")
        },
        propFromSeries: function() {
            var e, i, n, s = this, r = s.options.chart, o = s.options.series;
            Zi(["inverted", "angular", "polar"], function(t) {
                for (e = fn[r.type || r.defaultSeriesType],
                n = r[t] || e && e.prototype[t],
                i = o && o.length; !n && i--; )
                    (e = fn[o[i].type]) && e.prototype[t] && (n = !0);
                s[t] = n
            })
        },
        linkSeries: function() {
            var i = this
              , t = i.series;
            Zi(t, function(t) {
                t.linkedSeries.length = 0
            }),
            Zi(t, function(t) {
                var e = t.options.linkedTo;
                rn(e) && (e = ":previous" === e ? i.series[t.index - 1] : i.get(e)) && e.linkedParent !== t && (e.linkedSeries.push(t),
                t.linkedParent = e,
                t.visible = dn(t.options.visible, e.options.visible, t.visible))
            }),
            tn(this, "afterLinkSeries")
        },
        renderSeries: function() {
            Zi(this.series, function(t) {
                t.translate(),
                t.render()
            })
        },
        renderLabels: function() {
            var s = this
              , r = s.options.labels;
            r.items && Zi(r.items, function(t) {
                var e = Ji(r.style, t.style)
                  , i = un(e.left) + s.plotLeft
                  , n = un(e.top) + s.plotTop + 12;
                delete e.left,
                delete e.top,
                s.renderer.text(t.html, i, n).attr({
                    zIndex: 2
                }).css(e).add()
            })
        },
        render: function() {
            var t, e, i, n = this.axes, s = this.renderer, r = this.options;
            this.setTitle(),
            this.legend = new on(this,r.legend),
            this.getStacks && this.getStacks(),
            this.getMargins(!0),
            this.setChartSize(),
            r = this.plotWidth,
            t = this.plotHeight = Math.max(this.plotHeight - 21, 0),
            Zi(n, function(t) {
                t.setScale()
            }),
            this.getAxisMargins(),
            e = 1.1 < r / this.plotWidth,
            i = 1.05 < t / this.plotHeight,
            (e || i) && (Zi(n, function(t) {
                (t.horiz && e || !t.horiz && i) && t.setTickInterval(!0)
            }),
            this.getMargins()),
            this.drawChartBox(),
            this.hasCartesianSeries && Zi(n, function(t) {
                t.visible && t.render()
            }),
            this.seriesGroup || (this.seriesGroup = s.g("series-group").attr({
                zIndex: 3
            }).add()),
            this.renderSeries(),
            this.renderLabels(),
            this.addCredits(),
            this.setResponsive && this.setResponsive(),
            this.hasRendered = !0
        },
        addCredits: function(t) {
            var e = this;
            (t = ln(!0, this.options.credits, t)).enabled && !this.credits && (this.credits = this.renderer.text(t.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                t.href && (yn.location.href = t.href)
            }).attr({
                align: t.position.align,
                zIndex: 8
            }).css(t.style).add().align(t.position),
            this.credits.update = function(t) {
                e.credits = e.credits.destroy(),
                e.addCredits(t)
            }
            )
        },
        destroy: function() {
            var t, i = this, e = i.axes, n = i.series, s = i.container, r = s && s.parentNode;
            for (tn(i, "destroy"),
            i.renderer.forExport ? Bi.erase(Vi, i) : Vi[i.index] = void 0,
            Bi.chartCount--,
            i.renderTo.removeAttribute("data-highcharts-chart"),
            pn(i),
            t = e.length; t--; )
                e[t] = e[t].destroy();
            for (this.scroller && this.scroller.destroy && this.scroller.destroy(),
            t = n.length; t--; )
                n[t] = n[t].destroy();
            Zi("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(t) {
                var e = i[t];
                e && e.destroy && (i[t] = e.destroy())
            }),
            s && (s.innerHTML = "",
            pn(s),
            r && qi(s)),
            hn(i, function(t, e) {
                delete i[e]
            })
        },
        firstRender: function() {
            var e = this
              , t = e.options;
            e.isReadyToRender && !e.isReadyToRender() || (e.getContainer(),
            e.resetMargins(),
            e.setChartSize(),
            e.propFromSeries(),
            e.getAxes(),
            Zi(t.series || [], function(t) {
                e.initSeries(t)
            }),
            e.linkSeries(),
            tn(e, "beforeRender"),
            cn && (e.pointer = new cn(e,t)),
            e.render(),
            !e.renderer.imgCount && e.onload && e.onload(),
            e.temporaryDisplay(!0))
        },
        onload: function() {
            Zi([this.callback].concat(this.callbacks), function(t) {
                t && void 0 !== this.index && t.apply(this, [this])
            }, this),
            tn(this, "load"),
            tn(this, "render"),
            Ki(this.index) && this.setReflow(this.options.chart.reflow),
            this.onload = null
        }
    }),
    bn = (xn = Nt).addEvent,
    wn = xn.Chart,
    kn = xn.each,
    bn(wn, "afterSetChartSize", function(t) {
        var e = this.options.chart.scrollablePlotArea;
        (e = e && e.minWidth) && (this.scrollablePixels = e = Math.max(0, e - this.chartWidth)) && (this.plotWidth += e,
        this.clipBox.width += e,
        t.skipAxes || kn(this.axes, function(i) {
            1 === i.side ? i.getPlotLinePath = function() {
                var t, e = this.right;
                return this.right = e - i.chart.scrollablePixels,
                t = xn.Axis.prototype.getPlotLinePath.apply(this, arguments),
                this.right = e,
                t
            }
            : (i.setAxisSize(),
            i.setAxisTranslation())
        }))
    }),
    bn(wn, "render", function() {
        this.scrollablePixels ? (this.setUpScrolling && this.setUpScrolling(),
        this.applyFixed()) : this.fixedDiv && this.applyFixed()
    }),
    wn.prototype.setUpScrolling = function() {
        this.scrollingContainer = xn.createElement("div", {
            className: "highcharts-scrolling"
        }, {
            overflowX: "auto",
            WebkitOverflowScrolling: "touch"
        }, this.renderTo),
        this.innerContainer = xn.createElement("div", {
            className: "highcharts-inner-container"
        }, null, this.scrollingContainer),
        this.innerContainer.appendChild(this.container),
        this.setUpScrolling = null
    }
    ,
    wn.prototype.applyFixed = function() {
        var e, i = this.container;
        this.fixedDiv || (this.fixedDiv = xn.createElement("div", {
            className: "highcharts-fixed"
        }, {
            position: "absolute",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 2
        }, null, !0),
        this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild),
        this.fixedRenderer = e = new xn.Renderer(this.fixedDiv,0,0),
        this.scrollableMask = e.path().attr({
            fill: xn.color(this.options.chart.backgroundColor || "#fff").setOpacity(.85).get(),
            zIndex: -1
        }).addClass("highcharts-scrollable-mask").add(),
        xn.each([this.inverted ? ".highcharts-xaxis" : ".highcharts-yaxis", this.inverted ? ".highcharts-xaxis-labels" : ".highcharts-yaxis-labels", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-subtitle", ".highcharts-title"], function(t) {
            xn.each(i.querySelectorAll(t), function(t) {
                e.box.appendChild(t),
                t.style.pointerEvents = "auto"
            })
        })),
        this.fixedRenderer.setSize(this.chartWidth, this.chartHeight),
        n = this.chartWidth + this.scrollablePixels,
        this.container.style.width = n + "px",
        this.renderer.boxWrapper.attr({
            width: n,
            height: this.chartHeight,
            viewBox: [0, 0, n, this.chartHeight].join(" ")
        }),
        (n = this.options.chart.scrollablePlotArea).scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * n.scrollPositionX);
        var t = this.axisOffset
          , n = this.plotTop - t[0] - 1
          , t = this.plotTop + this.plotHeight + t[2]
          , s = this.plotLeft + this.plotWidth - this.scrollablePixels;
        this.scrollableMask.attr({
            d: this.scrollablePixels ? ["M", 0, n, "L", this.plotLeft - 1, n, "L", this.plotLeft - 1, t, "L", 0, t, "Z", "M", s, n, "L", this.chartWidth, n, "L", this.chartWidth, t, "L", s, t, "Z"] : ["M", 0, 0]
        })
    }
    ,
    Mn = (Tn = Nt).each,
    Cn = Tn.extend,
    An = Tn.erase,
    Ln = Tn.fireEvent,
    Pn = Tn.format,
    On = Tn.isArray,
    En = Tn.isNumber,
    Nn = Tn.pick,
    Dn = Tn.removeEvent,
    Tn.Point = Sn = function() {}
    ,
    Tn.Point.prototype = {
        init: function(t, e, i) {
            return this.series = t,
            this.color = t.color,
            this.applyOptions(e, i),
            t.options.colorByPoint ? (e = t.options.colors || t.chart.options.colors,
            this.color = this.color || e[t.colorCounter],
            e = e.length,
            i = t.colorCounter,
            t.colorCounter++,
            t.colorCounter === e && (t.colorCounter = 0)) : i = t.colorIndex,
            this.colorIndex = Nn(this.colorIndex, i),
            t.chart.pointCount++,
            Ln(this, "afterInit"),
            this
        },
        applyOptions: function(t, e) {
            var i = this.series
              , n = i.options.pointValKey || i.pointValKey;
            return t = Sn.prototype.optionsToObject.call(this, t),
            Cn(this, t),
            this.options = this.options ? Cn(this.options, t) : t,
            t.group && delete this.group,
            n && (this.y = this[n]),
            this.isNull = Nn(this.isValid && !this.isValid(), null === this.x || !En(this.y, !0)),
            this.selected && (this.state = "select"),
            "name"in this && void 0 === e && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)),
            void 0 === this.x && i && (this.x = void 0 === e ? i.autoIncrement(this) : e),
            this
        },
        setNestedProperty: function(t, s, e) {
            return e = e.split("."),
            Tn.reduce(e, function(t, e, i, n) {
                return t[e] = n.length - 1 === i ? s : Tn.isObject(t[e], !0) ? t[e] : {},
                t[e]
            }, t),
            t
        },
        optionsToObject: function(t) {
            var e = {}
              , i = this.series
              , n = i.options.keys
              , s = n || i.pointArrayMap || ["y"]
              , r = s.length
              , o = 0
              , a = 0;
            if (En(t) || null === t)
                e[s[0]] = t;
            else if (On(t))
                for (!n && t.length > r && ("string" === (i = typeof t[0]) ? e.name = t[0] : "number" === i && (e.x = t[0]),
                o++); a < r; )
                    n && void 0 === t[o] || (0 < s[a].indexOf(".") ? Tn.Point.prototype.setNestedProperty(e, t[o], s[a]) : e[s[a]] = t[o]),
                    o++,
                    a++;
            else
                "object" == typeof t && ((e = t).dataLabels && (i._hasPointLabels = !0),
                t.marker && (i._hasPointMarkers = !0));
            return e
        },
        getClassName: function() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
        },
        getZone: function() {
            for (var t = (e = this.series).zones, e = e.zoneAxis || "y", i = 0, n = t[i]; this[e] >= n.value; )
                n = t[++i];
            return this.nonZonedColor || (this.nonZonedColor = this.color),
            this.color = n && n.color && !this.options.color ? n.color : this.nonZonedColor,
            n
        },
        destroy: function() {
            var t, e = this.series.chart, i = e.hoverPoints;
            for (t in e.pointCount--,
            i && (this.setState(),
            An(i, this),
            i.length || (e.hoverPoints = null)),
            this === e.hoverPoint && this.onMouseOut(),
            (this.graphic || this.dataLabel) && (Dn(this),
            this.destroyElements()),
            this.legendItem && e.legend.destroyItem(this),
            this)
                this[t] = null
        },
        destroyElements: function() {
            for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], i = 6; i--; )
                this[t = e[i]] && (this[t] = this[t].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                colorIndex: this.colorIndex,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(e) {
            var t = this.series
              , i = t.tooltipOptions
              , n = Nn(i.valueDecimals, "")
              , s = i.valuePrefix || ""
              , r = i.valueSuffix || "";
            return Mn(t.pointArrayMap || ["y"], function(t) {
                t = "{point." + t,
                (s || r) && (e = e.replace(RegExp(t + "}", "g"), s + t + "}" + r)),
                e = e.replace(RegExp(t + "}", "g"), t + ":,." + n + "f}")
            }),
            Pn(e, {
                point: this,
                series: this.series
            }, t.chart.time)
        },
        firePointEvent: function(t, e, i) {
            var n = this
              , s = this.series.options;
            (s.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(),
            "click" === t && s.allowPointSelect && (i = function(t) {
                n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
            }
            ),
            Ln(this, t, e, i)
        },
        visible: !0
    },
    In = (_n = Nt).addEvent,
    Rn = _n.animObject,
    zn = _n.arrayMax,
    Bn = _n.arrayMin,
    Fn = _n.correctFloat,
    Hn = _n.defaultOptions,
    jn = _n.defaultPlotOptions,
    Wn = _n.defined,
    Xn = _n.each,
    Yn = _n.erase,
    Gn = _n.extend,
    $n = _n.fireEvent,
    qn = _n.grep,
    Vn = _n.isArray,
    Un = _n.isNumber,
    Kn = _n.isString,
    Zn = _n.merge,
    Jn = _n.objectEach,
    Qn = _n.pick,
    ts = _n.removeEvent,
    es = _n.splat,
    is = _n.SVGElement,
    ns = _n.syncTimeout,
    ss = _n.win,
    _n.Series = _n.seriesType("line", null, {
        lineWidth: 2,
        allowPointSelect: !1,
        showCheckbox: !1,
        animation: {
            duration: 1e3
        },
        events: {},
        marker: {
            lineWidth: 0,
            lineColor: "#ffffff",
            enabledThreshold: 2,
            radius: 4,
            states: {
                normal: {
                    animation: !0
                },
                hover: {
                    animation: {
                        duration: 50
                    },
                    enabled: !0,
                    radiusPlus: 2,
                    lineWidthPlus: 1
                },
                select: {
                    fillColor: "#cccccc",
                    lineColor: "#000000",
                    lineWidth: 2
                }
            }
        },
        point: {
            events: {}
        },
        dataLabels: {
            align: "center",
            formatter: function() {
                return null === this.y ? "" : _n.numberFormat(this.y, -1)
            },
            style: {
                fontSize: "11px",
                fontWeight: "bold",
                color: "contrast",
                textOutline: "1px contrast"
            },
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            padding: 5
        },
        cropThreshold: 300,
        pointRange: 0,
        softThreshold: !0,
        states: {
            normal: {
                animation: !0
            },
            hover: {
                animation: {
                    duration: 50
                },
                lineWidthPlus: 1,
                marker: {},
                halo: {
                    size: 10,
                    opacity: .25
                }
            },
            select: {
                marker: {}
            }
        },
        stickyTracking: !0,
        turboThreshold: 1e3,
        findNearestPointBy: "x"
    }, {
        isCartesian: !0,
        pointClass: _n.Point,
        sorted: !0,
        requireSorting: !0,
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        coll: "series",
        init: function(t, e) {
            var i, n, s = this, r = t.series;
            s.chart = t,
            s.options = e = s.setOptions(e),
            s.linkedSeries = [],
            s.bindAxes(),
            Gn(s, {
                name: e.name,
                state: "",
                visible: !1 !== e.visible,
                selected: !0 === e.selected
            }),
            i = e.events,
            Jn(i, function(t, e) {
                In(s, e, t)
            }),
            (i && i.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0),
            s.getColor(),
            s.getSymbol(),
            Xn(s.parallelArrays, function(t) {
                s[t + "Data"] = []
            }),
            s.setData(e.data, !1),
            s.isCartesian && (t.hasCartesianSeries = !0),
            r.length && (n = r[r.length - 1]),
            s._i = Qn(n && n._i, -1) + 1,
            t.orderSeries(this.insert(r)),
            $n(this, "afterInit")
        },
        insert: function(t) {
            var e, i = this.options.index;
            if (Un(i)) {
                for (e = t.length; e--; )
                    if (i >= Qn(t[e].options.index, t[e]._i)) {
                        t.splice(e + 1, 0, this);
                        break
                    }
                -1 === e && t.unshift(this),
                e += 1
            } else
                t.push(this);
            return Qn(e, t.length - 1)
        },
        bindAxes: function() {
            var i, n = this, s = n.options, t = n.chart;
            Xn(n.axisTypes || [], function(e) {
                Xn(t[e], function(t) {
                    i = t.options,
                    (s[e] === i.index || void 0 !== s[e] && s[e] === i.id || void 0 === s[e] && 0 === i.index) && (n.insert(t.series),
                    (n[e] = t).isDirty = !0)
                }),
                n[e] || n.optionalAxis === e || _n.error(18, !0)
            })
        },
        updateParallelArrays: function(i, n) {
            var s = i.series
              , e = arguments
              , t = Un(n) ? function(t) {
                var e = "y" === t && s.toYData ? s.toYData(i) : i[t];
                s[t + "Data"][n] = e
            }
            : function(t) {
                Array.prototype[n].apply(s[t + "Data"], Array.prototype.slice.call(e, 2))
            }
            ;
            Xn(s.parallelArrays, t)
        },
        autoIncrement: function() {
            var t, e = this.options, i = this.xIncrement, n = e.pointIntervalUnit, s = this.chart.time, i = Qn(i, e.pointStart, 0);
            return this.pointInterval = t = Qn(this.pointInterval, e.pointInterval, 1),
            n && (e = new s.Date(i),
            "day" === n ? s.set("Date", e, s.get("Date", e) + t) : "month" === n ? s.set("Month", e, s.get("Month", e) + t) : "year" === n && s.set("FullYear", e, s.get("FullYear", e) + t),
            t = e.getTime() - i),
            this.xIncrement = i + t,
            i
        },
        setOptions: function(t) {
            var e = this.chart
              , i = e.options
              , n = i.plotOptions
              , s = (e.userOptions || {}).plotOptions || {}
              , r = n[this.type];
            return this.userOptions = t,
            e = Zn(r, n.series, t),
            this.tooltipOptions = Zn(Hn.tooltip, Hn.plotOptions.series && Hn.plotOptions.series.tooltip, Hn.plotOptions[this.type].tooltip, i.tooltip.userOptions, n.series && n.series.tooltip, n[this.type].tooltip, t.tooltip),
            this.stickyTracking = Qn(t.stickyTracking, s[this.type] && s[this.type].stickyTracking, s.series && s.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking),
            null === r.marker && delete e.marker,
            this.zoneAxis = e.zoneAxis,
            t = this.zones = (e.zones || []).slice(),
            !e.negativeColor && !e.negativeFillColor || e.zones || t.push({
                value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
                className: "highcharts-negative",
                color: e.negativeColor,
                fillColor: e.negativeFillColor
            }),
            t.length && Wn(t[t.length - 1].value) && t.push({
                color: this.color,
                fillColor: this.fillColor
            }),
            $n(this, "afterSetOptions", {
                options: e
            }),
            e
        },
        getName: function() {
            return this.name || "Series " + (this.index + 1)
        },
        getCyclic: function(t, e, i) {
            var n, s = this.chart, r = this.userOptions, o = t + "Index", a = t + "Counter", l = i ? i.length : Qn(s.options.chart[t + "Count"], s[t + "Count"]);
            e || (n = Qn(r[o], r["_" + o]),
            Wn(n) || (s.series.length || (s[a] = 0),
            r["_" + o] = n = s[a] % l,
            s[a] += 1),
            i && (e = i[n])),
            void 0 !== n && (this[o] = n),
            this[t] = e
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || jn[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
        },
        drawLegendSymbol: _n.LegendSymbolMixin.drawLineMarker,
        updateData: function(t) {
            var i, e, n, s = this.options, r = this.points, o = [], a = this.requireSorting;
            if (Xn(t, function(t) {
                var e = _n.defined(t) && this.pointClass.prototype.optionsToObject.call({
                    series: this
                }, t).x;
                Un(e) && (-1 === (e = _n.inArray(e, this.xData, n)) ? o.push(t) : t !== s.data[e] ? (r[e].update(t, !1, null, !1),
                r[e].touched = !0,
                a && (n = e)) : r[e] && (r[e].touched = !0),
                i = !0)
            }, this),
            i)
                for (t = r.length; t--; )
                    (e = r[t]).touched || e.remove(!1),
                    e.touched = !1;
            else {
                if (t.length !== r.length)
                    return !1;
                Xn(t, function(t, e) {
                    r[e].update && t !== s.data[e] && r[e].update(t, !1, null, !1)
                })
            }
            return Xn(o, function(t) {
                this.addPoint(t, !1)
            }, this),
            !0
        },
        setData: function(t, e, i, n) {
            var s, r = this, o = r.points, a = o && o.length || 0, l = r.options, h = r.chart, c = null, d = r.xAxis, u = l.turboThreshold, p = this.xData, f = this.yData, g = (m = r.pointArrayMap) && m.length, m = (t = t || []).length;
            if (e = Qn(e, !0),
            !1 !== n && m && a && !r.cropped && !r.hasGroupedData && r.visible && (s = this.updateData(t)),
            !s) {
                if (r.xIncrement = null,
                r.colorCounter = 0,
                Xn(this.parallelArrays, function(t) {
                    r[t + "Data"].length = 0
                }),
                u && u < m) {
                    for (i = 0; null === c && i < m; )
                        c = t[i],
                        i++;
                    if (Un(c))
                        for (i = 0; i < m; i++)
                            p[i] = this.autoIncrement(),
                            f[i] = t[i];
                    else if (Vn(c))
                        if (g)
                            for (i = 0; i < m; i++)
                                c = t[i],
                                p[i] = c[0],
                                f[i] = c.slice(1, g + 1);
                        else
                            for (i = 0; i < m; i++)
                                c = t[i],
                                p[i] = c[0],
                                f[i] = c[1];
                    else
                        _n.error(12)
                } else
                    for (i = 0; i < m; i++)
                        void 0 !== t[i] && (c = {
                            series: r
                        },
                        r.pointClass.prototype.applyOptions.apply(c, [t[i]]),
                        r.updateParallelArrays(c, i));
                for (f && Kn(f[0]) && _n.error(14, !0),
                r.data = [],
                r.options.data = r.userOptions.data = t,
                i = a; i--; )
                    o[i] && o[i].destroy && o[i].destroy();
                d && (d.minRange = d.userMinRange),
                r.isDirty = h.isDirtyBox = !0,
                r.isDirtyData = !!o,
                i = !1
            }
            "point" === l.legendType && (this.processData(),
            this.generatePoints()),
            e && h.redraw(i)
        },
        processData: function(t) {
            var e, i, n, s, r = this.xData, o = this.yData, a = r.length, l = 0, h = this.xAxis, c = (p = this.options).cropThreshold, d = this.getExtremesFromAll || p.getExtremesFromAll, u = this.isCartesian, p = h && h.val2lin, f = h && h.isLog, g = this.requireSorting;
            if (u && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !t)
                return !1;
            for (h && (n = (t = h.getExtremes()).min,
            s = t.max),
            u && this.sorted && !d && (!c || c < a || this.forceCrop) && (r[a - 1] < n || r[0] > s ? (r = [],
            o = []) : (r[0] < n || r[a - 1] > s) && (r = (l = this.cropData(this.xData, this.yData, n, s)).xData,
            o = l.yData,
            l = l.start,
            e = !0)),
            c = r.length || 1; --c; )
                0 < (a = f ? p(r[c]) - p(r[c - 1]) : r[c] - r[c - 1]) && (void 0 === i || a < i) ? i = a : a < 0 && g && (_n.error(15),
                g = !1);
            this.cropped = e,
            this.cropStart = l,
            this.processedXData = r,
            this.processedYData = o,
            this.closestPointRange = i
        },
        cropData: function(t, e, i, n, s) {
            var r, o = t.length, a = 0, l = o;
            for (s = Qn(s, this.cropShoulder, 1),
            r = 0; r < o; r++)
                if (t[r] >= i) {
                    a = Math.max(0, r - s);
                    break
                }
            for (i = r; i < o; i++)
                if (t[i] > n) {
                    l = i + s;
                    break
                }
            return {
                xData: t.slice(a, l),
                yData: e.slice(a, l),
                start: a,
                end: l
            }
        },
        generatePoints: function() {
            var t, e, i, n, s = (u = this.options).data, r = this.data, o = this.processedXData, a = this.processedYData, l = this.pointClass, h = o.length, c = this.cropStart || 0, d = this.hasGroupedData, u = u.keys, p = [];
            for (r || d || ((r = []).length = s.length,
            r = this.data = r),
            u && d && (this.options.keys = !1),
            n = 0; n < h; n++)
                e = c + n,
                d ? (i = (new l).init(this, [o[n]].concat(es(a[n])))).dataGroup = this.groupMap[n] : (i = r[e]) || void 0 === s[e] || (r[e] = i = (new l).init(this, s[e], o[n])),
                i && (i.index = e,
                p[n] = i);
            if (this.options.keys = u,
            r && (h !== (t = r.length) || d))
                for (n = 0; n < t; n++)
                    n !== c || d || (n += h),
                    r[n] && (r[n].destroyElements(),
                    r[n].plotX = void 0);
            this.data = r,
            this.points = p
        },
        getExtremes: function(t) {
            var e, i, n, s, r = this.yAxis, o = this.processedXData, a = [], l = 0, h = this.xAxis.getExtremes(), c = h.min, d = h.max, u = this.requireSorting ? 1 : 0;
            for (h = (t = t || this.stackedYData || this.processedYData || []).length,
            s = 0; s < h; s++)
                if (i = o[s],
                n = t[s],
                e = (Un(n, !0) || Vn(n)) && (!r.positiveValuesOnly || n.length || 0 < n),
                i = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (o[s + u] || i) >= c && (o[s - u] || i) <= d,
                e && i)
                    if (e = n.length)
                        for (; e--; )
                            "number" == typeof n[e] && (a[l++] = n[e]);
                    else
                        a[l++] = n;
            this.dataMin = Bn(a),
            this.dataMax = zn(a)
        },
        translate: function() {
            this.processedXData || this.processData(),
            this.generatePoints();
            var t, e, i, n = this.options, s = n.stacking, r = this.xAxis, o = r.categories, a = this.yAxis, l = this.points, h = l.length, c = !!this.modifyValue, d = n.pointPlacement, u = "between" === d || Un(d), p = n.threshold, f = n.startFromThreshold ? p : 0, g = Number.MAX_VALUE;
            for ("between" === d && (d = .5),
            Un(d) && (d *= Qn(n.pointRange || r.pointRange)),
            n = 0; n < h; n++) {
                var m, y = l[n], v = y.x, x = y.y, b = y.low, w = s && a.stacks[(this.negStacks && x < (f ? 0 : p) ? "-" : "") + this.stackKey];
                a.positiveValuesOnly && null !== x && x <= 0 && (y.isNull = !0),
                y.plotX = t = Fn(Math.min(Math.max(-1e5, r.translate(v, 0, 0, 0, 1, d, "flags" === this.type)), 1e5)),
                s && this.visible && !y.isNull && w && w[v] && (i = this.getStackIndicator(i, v, this.index),
                b = (x = (m = w[v]).points[i.key])[0],
                x = x[1],
                b === f && i.key === w[v].base && (b = Qn(Un(p) && p, a.min)),
                a.positiveValuesOnly && b <= 0 && (b = null),
                y.total = y.stackTotal = m.total,
                y.percentage = m.total && y.y / m.total * 100,
                y.stackY = x,
                m.setOffset(this.pointXOffset || 0, this.barW || 0)),
                y.yBottom = Wn(b) ? Math.min(Math.max(-1e5, a.translate(b, 0, 1, 0, 1)), 1e5) : null,
                c && (x = this.modifyValue(x, y)),
                y.plotY = b = "number" == typeof x && Infinity !== x ? Math.min(Math.max(-1e5, a.translate(x, 0, 1, 0, 1)), 1e5) : void 0,
                y.isInside = void 0 !== b && 0 <= b && b <= a.len && 0 <= t && t <= r.len,
                y.clientX = u ? Fn(r.translate(v, 0, 0, 0, 1, d)) : t,
                y.negative = y.y < (p || 0),
                y.category = o && void 0 !== o[y.x] ? o[y.x] : y.x,
                y.isNull || (void 0 !== e && (g = Math.min(g, Math.abs(t - e))),
                e = t),
                y.zone = this.zones.length && y.getZone()
            }
            this.closestPointRangePx = g,
            $n(this, "afterTranslate")
        },
        getValidPoints: function(t, e) {
            var i = this.chart;
            return qn(t || this.points || [], function(t) {
                return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) && !t.isNull
            })
        },
        setClip: function(t) {
            var e = this.chart
              , i = this.options
              , n = e.renderer
              , s = e.inverted
              , r = this.clipBox
              , o = r || e.clipBox
              , a = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, o.height, i.xAxis, i.yAxis].join()
              , l = e[a]
              , h = e[a + "m"];
            l || (t && (o.width = 0,
            s && (o.x = e.plotSizeX),
            e[a + "m"] = h = n.clipRect(s ? e.plotSizeX + 99 : -99, s ? -e.plotLeft : -e.plotTop, 99, s ? e.chartWidth : e.chartHeight)),
            e[a] = l = n.clipRect(o),
            l.count = {
                length: 0
            }),
            t && !l.count[this.index] && (l.count[this.index] = !0,
            l.count.length += 1),
            !1 !== i.clip && (this.group.clip(t || r ? l : e.clipRect),
            this.markerGroup.clip(h),
            this.sharedClipKey = a),
            t || (l.count[this.index] && (delete l.count[this.index],
            --l.count.length),
            0 === l.count.length && a && e[a] && (r || (e[a] = e[a].destroy()),
            e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())))
        },
        animate: function(t) {
            var e, i = this.chart, n = Rn(this.options.animation);
            t ? this.setClip(n) : ((t = i[e = this.sharedClipKey]) && t.animate({
                width: i.plotSizeX,
                x: 0
            }, n),
            i[e + "m"] && i[e + "m"].animate({
                width: i.plotSizeX + 99,
                x: 0
            }, n),
            this.animate = null)
        },
        afterAnimate: function() {
            this.setClip(),
            $n(this, "afterAnimate"),
            this.finishedAnimating = !0
        },
        drawPoints: function() {
            var t, e, i, n, s, r, o, a, l = this.points, h = this.chart, c = this.options.marker, d = this[this.specialGroup] || this.markerGroup, u = Qn(c.enabled, !!this.xAxis.isRadial || null, this.closestPointRangePx >= c.enabledThreshold * c.radius);
            if (!1 !== c.enabled || this._hasPointMarkers)
                for (t = 0; t < l.length; t++)
                    n = (e = l[t]).graphic,
                    s = e.marker || {},
                    r = !!e.marker,
                    i = u && void 0 === s.enabled || s.enabled,
                    o = e.isInside,
                    i && !e.isNull ? (i = Qn(s.symbol, this.symbol),
                    a = this.markerAttribs(e, e.selected && "select"),
                    n ? n[o ? "show" : "hide"](!0).animate(a) : o && (0 < a.width || e.hasImage) && (e.graphic = n = h.renderer.symbol(i, a.x, a.y, a.width, a.height, r ? s : c).add(d)),
                    n && n.attr(this.pointAttribs(e, e.selected && "select")),
                    n && n.addClass(e.getClassName(), !0)) : n && (e.graphic = n.destroy())
        },
        markerAttribs: function(t, e) {
            var i = this.options.marker
              , n = t.marker || {}
              , s = n.symbol || i.symbol
              , r = Qn(n.radius, i.radius);
            return e && (i = i.states[e],
            e = n.states && n.states[e],
            r = Qn(e && e.radius, i && i.radius, r + (i && i.radiusPlus || 0))),
            t.hasImage = s && 0 === s.indexOf("url"),
            t.hasImage && (r = 0),
            t = {
                x: Math.floor(t.plotX) - r,
                y: t.plotY - r
            },
            r && (t.width = t.height = 2 * r),
            t
        },
        pointAttribs: function(t, e) {
            var i = this.options.marker
              , n = (a = t && t.options) && a.marker || {}
              , s = this.color
              , r = a && a.color
              , o = t && t.color
              , a = Qn(n.lineWidth, i.lineWidth);
            return t = t && t.zone && t.zone.color,
            s = r || t || o || s,
            t = n.fillColor || i.fillColor || s,
            s = n.lineColor || i.lineColor || s,
            e && (i = i.states[e],
            e = n.states && n.states[e] || {},
            a = Qn(e.lineWidth, i.lineWidth, a + Qn(e.lineWidthPlus, i.lineWidthPlus, 0)),
            t = e.fillColor || i.fillColor || t,
            s = e.lineColor || i.lineColor || s),
            {
                stroke: s,
                "stroke-width": a,
                fill: t
            }
        },
        destroy: function() {
            var t, e, i, n = this, s = n.chart, r = /AppleWebKit\\/533/.test(ss.navigator.userAgent), o = n.data || [];
            for ($n(n, "destroy"),
            ts(n),
            Xn(n.axisTypes || [], function(t) {
                (i = n[t]) && i.series && (Yn(i.series, n),
                i.isDirty = i.forceRedraw = !0)
            }),
            n.legendItem && n.chart.legend.destroyItem(n),
            t = o.length; t--; )
                (e = o[t]) && e.destroy && e.destroy();
            n.points = null,
            _n.clearTimeout(n.animationTimeout),
            Jn(n, function(t, e) {
                t instanceof is && !t.survive && t[r && "group" === e ? "hide" : "destroy"]()
            }),
            s.hoverSeries === n && (s.hoverSeries = null),
            Yn(s.series, n),
            s.orderSeries(),
            Jn(n, function(t, e) {
                delete n[e]
            })
        },
        getGraphPath: function(r, o, a) {
            var t, l, h = this, c = h.options, d = c.step, u = [], p = [];
            return (t = (r = r || h.points).reversed) && r.reverse(),
            (d = {
                right: 1,
                center: 2
            }[d] || d && 3) && t && (d = 4 - d),
            !c.connectNulls || o || a || (r = this.getValidPoints(r)),
            Xn(r, function(t, e) {
                var i = t.plotX
                  , n = t.plotY
                  , s = r[e - 1];
                (t.leftCliff || s && s.rightCliff) && !a && (l = !0),
                l = t.isNull && !Wn(o) && 0 < e ? !c.connectNulls : !(!t.isNull || o) || (0 === e || l ? e = ["M", t.plotX, t.plotY] : h.getPointSpline ? e = h.getPointSpline(r, t, e) : d ? (e = 1 === d ? ["L", s.plotX, n] : 2 === d ? ["L", (s.plotX + i) / 2, s.plotY, "L", (s.plotX + i) / 2, n] : ["L", i, s.plotY]).push("L", i, n) : e = ["L", i, n],
                p.push(t.x),
                d && (p.push(t.x),
                2 === d && p.push(t.x)),
                u.push.apply(u, e),
                !1)
            }),
            u.xMap = p,
            h.graphPath = u
        },
        drawGraph: function() {
            var s = this
              , r = this.options
              , o = (this.gappedPath || this.getGraphPath).call(this)
              , t = [["graph", "highcharts-graph", r.lineColor || this.color, r.dashStyle]]
              , t = s.getZonesGraphs(t);
            Xn(t, function(t, e) {
                var i = t[0]
                  , n = s[i];
                n ? (n.endX = s.preventGraphAnimation ? null : o.xMap,
                n.animate({
                    d: o
                })) : o.length && (s[i] = s.chart.renderer.path(o).addClass(t[1]).attr({
                    zIndex: 1
                }).add(s.group),
                n = {
                    stroke: t[2],
                    "stroke-width": r.lineWidth,
                    fill: s.fillGraph && s.color || "none"
                },
                t[3] ? n.dashstyle = t[3] : "square" !== r.linecap && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"),
                n = s[i].attr(n).shadow(e < 2 && r.shadow)),
                n && (n.startX = o.xMap,
                n.isArea = o.isArea)
            })
        },
        getZonesGraphs: function(i) {
            return Xn(this.zones, function(t, e) {
                i.push(["zone-graph-" + e, "highcharts-graph highcharts-zone-graph-" + e + " " + (t.className || ""), t.color || this.color, t.dashStyle || this.options.dashStyle])
            }, this),
            i
        },
        applyZones: function() {
            var i, n, s, r, o, a, l, h, c, d = this, u = this.chart, p = u.renderer, t = this.zones, f = this.clips || [], g = this.graph, m = this.area, y = Math.max(u.chartWidth, u.chartHeight), v = this[(this.zoneAxis || "y") + "Axis"], x = u.inverted, b = !1;
            t.length && (g || m) && v && void 0 !== v.min && (o = v.reversed,
            a = v.horiz,
            g && !this.showLine && g.hide(),
            m && m.hide(),
            r = v.getExtremes(),
            Xn(t, function(t, e) {
                i = o ? a ? u.plotWidth : 0 : a ? 0 : v.toPixels(r.min),
                i = Math.min(Math.max(Qn(n, i), 0), y),
                n = Math.min(Math.max(Math.round(v.toPixels(Qn(t.value, r.max), !0)), 0), y),
                b && (i = n = v.toPixels(r.max)),
                l = Math.abs(i - n),
                h = Math.min(i, n),
                c = Math.max(i, n),
                v.isXAxis ? (s = {
                    x: x ? c : h,
                    y: 0,
                    width: l,
                    height: y
                },
                a || (s.x = u.plotHeight - s.x)) : (s = {
                    x: 0,
                    y: x ? c : h,
                    width: y,
                    height: l
                },
                a && (s.y = u.plotWidth - s.y)),
                x && p.isVML && (s = v.isXAxis ? {
                    x: 0,
                    y: o ? h : c,
                    height: s.width,
                    width: u.chartWidth
                } : {
                    x: s.y - u.plotLeft - u.spacingBox.x,
                    y: 0,
                    width: s.height,
                    height: u.chartHeight
                }),
                f[e] ? f[e].animate(s) : (f[e] = p.clipRect(s),
                g && d["zone-graph-" + e].clip(f[e]),
                m && d["zone-area-" + e].clip(f[e])),
                b = t.value > r.max,
                d.resetZones && 0 === n && (n = void 0)
            }),
            this.clips = f)
        },
        invertGroups: function(e) {
            function t() {
                Xn(["group", "markerGroup"], function(t) {
                    n[t] && (s.renderer.isVML && n[t].attr({
                        width: n.yAxis.len,
                        height: n.xAxis.len
                    }),
                    n[t].width = n.yAxis.len,
                    n[t].height = n.xAxis.len,
                    n[t].invert(e))
                })
            }
            var i, n = this, s = n.chart;
            n.xAxis && (i = In(s, "resize", t),
            In(n, "destroy", i),
            t(),
            n.invertGroups = t)
        },
        plotGroup: function(t, e, i, n, s) {
            var r = this[t]
              , o = !r;
            return o && (this[t] = r = this.chart.renderer.g().attr({
                zIndex: n || .1
            }).add(s)),
            r.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (Wn(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (r.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0),
            r.attr({
                visibility: i
            })[o ? "attr" : "animate"](this.getPlotBox()),
            r
        },
        getPlotBox: function() {
            var t = this.chart
              , e = this.xAxis
              , i = this.yAxis;
            return t.inverted && (e = i,
            i = this.xAxis),
            {
                translateX: e ? e.left : t.plotLeft,
                translateY: i ? i.top : t.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var t = this
              , e = t.chart
              , i = t.options
              , n = !!t.animate && e.renderer.isSVG && Rn(i.animation).duration
              , s = t.visible ? "inherit" : "hidden"
              , r = i.zIndex
              , o = t.hasRendered
              , a = e.seriesGroup
              , l = e.inverted
              , h = t.plotGroup("group", "series", s, r, a);
            t.markerGroup = t.plotGroup("markerGroup", "markers", s, r, a),
            n && t.animate(!0),
            h.inverted = !!t.isCartesian && l,
            t.drawGraph && (t.drawGraph(),
            t.applyZones()),
            t.drawDataLabels && t.drawDataLabels(),
            t.visible && t.drawPoints(),
            t.drawTracker && !1 !== t.options.enableMouseTracking && t.drawTracker(),
            t.invertGroups(l),
            !1 === i.clip || t.sharedClipKey || o || h.clip(e.clipRect),
            n && t.animate(),
            o || (t.animationTimeout = ns(function() {
                t.afterAnimate()
            }, n)),
            t.isDirty = !1,
            t.hasRendered = !0,
            $n(t, "afterRender")
        },
        redraw: function() {
            var t = this.chart
              , e = this.isDirty || this.isDirtyData
              , i = this.group
              , n = this.xAxis
              , s = this.yAxis;
            i && (t.inverted && i.attr({
                width: t.plotWidth,
                height: t.plotHeight
            }),
            i.animate({
                translateX: Qn(n && n.left, t.plotLeft),
                translateY: Qn(s && s.top, t.plotTop)
            })),
            this.translate(),
            this.render(),
            e && delete this.kdTree
        },
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(t, e) {
            var i = this.xAxis
              , n = this.yAxis
              , s = this.chart.inverted;
            return this.searchKDTree({
                clientX: s ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                plotY: s ? n.len - t.chartX + n.pos : t.chartY - n.pos
            }, e)
        },
        buildKDTree: function() {
            this.buildingKdTree = !0;
            var o = this
              , t = -1 < o.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            delete o.kdTree,
            ns(function() {
                o.kdTree = function r(t, e, i) {
                    var n, s;
                    if (s = t && t.length)
                        return n = o.kdAxisArray[e % i],
                        t.sort(function(t, e) {
                            return t[n] - e[n]
                        }),
                        {
                            point: t[s = Math.floor(s / 2)],
                            left: r(t.slice(0, s), e + 1, i),
                            right: r(t.slice(s + 1), e + 1, i)
                        }
                }(o.getValidPoints(null, !o.directTouch), t, t),
                o.buildingKdTree = !1
            }, o.options.kdNow ? 0 : 1)
        },
        searchKDTree: function(t, e) {
            var h = this
              , c = this.kdAxisArray[0]
              , d = this.kdAxisArray[1]
              , u = e ? "distX" : "dist";
            if (e = -1 < h.options.findNearestPointBy.indexOf("y") ? 2 : 1,
            this.kdTree || this.buildingKdTree || this.buildKDTree(),
            this.kdTree)
                return function p(t, e, i, n) {
                    var s = e.point
                      , r = h.kdAxisArray[i % n]
                      , o = s
                      , a = Wn(t[c]) && Wn(s[c]) ? Math.pow(t[c] - s[c], 2) : null
                      , l = Wn(t[d]) && Wn(s[d]) ? Math.pow(t[d] - s[d], 2) : null;
                    return l = (a || 0) + (l || 0),
                    s.dist = Wn(l) ? Math.sqrt(l) : Number.MAX_VALUE,
                    s.distX = Wn(a) ? Math.sqrt(a) : Number.MAX_VALUE,
                    a = (r = t[r] - s[r]) < 0 ? "right" : "left",
                    e[l = r < 0 ? "left" : "right"] && (o = (l = p(t, e[l], i + 1, n))[u] < o[u] ? l : s),
                    e[a] && Math.sqrt(r * r) < o[u] && (o = (t = p(t, e[a], i + 1, n))[u] < o[u] ? t : o),
                    o
                }(t, this.kdTree, e, e)
        }
    }),
    os = (rs = Nt).Axis,
    as = rs.Chart,
    ls = rs.correctFloat,
    hs = rs.defined,
    cs = rs.destroyObjectProperties,
    ds = rs.each,
    us = rs.format,
    ps = rs.objectEach,
    fs = rs.pick,
    gs = rs.Series,
    rs.StackItem = function(t, e, i, n, s) {
        var r = t.chart.inverted;
        this.axis = t,
        this.isNegative = i,
        this.options = e,
        this.x = n,
        this.total = null,
        this.points = {},
        this.stack = s,
        this.rightCliff = this.leftCliff = 0,
        this.alignOptions = {
            align: e.align || (r ? i ? "left" : "right" : "center"),
            verticalAlign: e.verticalAlign || (r ? "middle" : i ? "bottom" : "top"),
            y: fs(e.y, r ? 4 : i ? 14 : -6),
            x: fs(e.x, r ? i ? -6 : 6 : 0)
        },
        this.textAlign = e.textAlign || (r ? i ? "right" : "left" : "center")
    }
    ,
    rs.StackItem.prototype = {
        destroy: function() {
            cs(this, this.axis)
        },
        render: function(t) {
            var e = this.axis.chart
              , i = this.options
              , n = (n = i.format) ? us(n, this, e.time) : i.formatter.call(this);
            this.label ? this.label.attr({
                text: n,
                visibility: "hidden"
            }) : this.label = e.renderer.text(n, null, null, i.useHTML).css(i.style).attr({
                align: this.textAlign,
                rotation: i.rotation,
                visibility: "hidden"
            }).add(t)
        },
        setOffset: function(t, e) {
            var i = this.axis
              , n = i.chart
              , s = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1)
              , r = i.translate(0)
              , r = Math.abs(s - r);
            t = n.xAxis[0].translate(this.x) + t,
            i = this.getStackBox(n, this, t, s, e, r, i),
            (e = this.label) && (e.align(this.alignOptions, null, i),
            i = e.alignAttr,
            e[!1 === this.options.crop || n.isInsidePlot(i.x, i.y) ? "show" : "hide"](!0))
        },
        getStackBox: function(t, e, i, n, s, r, o) {
            var a = e.axis.reversed
              , l = t.inverted;
            return t = o.height + o.pos - t.plotTop,
            e = e.isNegative && !a || !e.isNegative && a,
            {
                x: l ? e ? n : n - r : i,
                y: l ? t - i - s : e ? t - n - r : t - n,
                width: l ? r : s,
                height: l ? s : r
            }
        }
    },
    as.prototype.getStacks = function() {
        var e = this;
        ds(e.yAxis, function(t) {
            t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
        }),
        ds(e.series, function(t) {
            !t.options.stacking || !0 !== t.visible && !1 !== e.options.chart.ignoreHiddenSeries || (t.stackKey = t.type + fs(t.options.stack, ""))
        })
    }
    ,
    os.prototype.buildStacks = function() {
        var t, e = this.series, i = fs(this.options.reversedStacks, !0), n = e.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1,
            t = n; t--; )
                e[i ? t : n - t - 1].setStackedPoints();
            for (t = 0; t < n; t++)
                e[t].modifyStacks()
        }
    }
    ,
    os.prototype.renderStackTotals = function() {
        var t = this.chart
          , e = t.renderer
          , i = this.stacks
          , n = this.stackTotalGroup;
        n || (this.stackTotalGroup = n = e.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add()),
        n.translate(t.plotLeft, t.plotTop),
        ps(i, function(t) {
            ps(t, function(t) {
                t.render(n)
            })
        })
    }
    ,
    os.prototype.resetStacks = function() {
        var n = this
          , t = n.stacks;
        n.isXAxis || ps(t, function(i) {
            ps(i, function(t, e) {
                t.touched < n.stacksTouched ? (t.destroy(),
                delete i[e]) : (t.total = null,
                t.cumulative = null)
            })
        })
    }
    ,
    os.prototype.cleanStacks = function() {
        var t;
        this.isXAxis || (this.oldStacks && (t = this.stacks = this.oldStacks),
        ps(t, function(t) {
            ps(t, function(t) {
                t.cumulative = t.total
            })
        }))
    }
    ,
    gs.prototype.setStackedPoints = function() {
        if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
            var t, e, i, n, s, r, o, a = this.processedXData, l = this.processedYData, h = [], c = l.length, d = (f = this.options).threshold, u = fs(f.startFromThreshold && d, 0), p = f.stack, f = f.stacking, g = this.stackKey, m = "-" + g, y = this.negStacks, v = this.yAxis, x = v.stacks, b = v.oldStacks;
            for (v.stacksTouched += 1,
            s = 0; s < c; s++)
                r = a[s],
                o = l[s],
                n = (t = this.getStackIndicator(t, r, this.index)).key,
                x[i = (e = y && o < (u ? 0 : d)) ? m : g] || (x[i] = {}),
                x[i][r] || (b[i] && b[i][r] ? (x[i][r] = b[i][r],
                x[i][r].total = null) : x[i][r] = new rs.StackItem(v,v.options.stackLabels,e,r,p)),
                i = x[i][r],
                null !== o ? (i.points[n] = i.points[this.index] = [fs(i.cumulative, u)],
                hs(i.cumulative) || (i.base = n),
                i.touched = v.stacksTouched,
                0 < t.index && !1 === this.singleStacks && (i.points[n][0] = i.points[this.index + "," + r + ",0"][0])) : i.points[n] = i.points[this.index] = null,
                "percent" === f ? (e = e ? g : m,
                y && x[e] && x[e][r] ? (e = x[e][r],
                i.total = e.total = Math.max(e.total, i.total) + Math.abs(o) || 0) : i.total = ls(i.total + (Math.abs(o) || 0))) : i.total = ls(i.total + (o || 0)),
                i.cumulative = fs(i.cumulative, u) + (o || 0),
                null !== o && (i.points[n].push(i.cumulative),
                h[s] = i.cumulative);
            "percent" === f && (v.usePercentage = !0),
            this.stackedYData = h,
            v.oldStacks = {}
        }
    }
    ,
    gs.prototype.modifyStacks = function() {
        var s, r = this, t = r.stackKey, o = r.yAxis.stacks, a = r.processedXData, l = r.options.stacking;
        r[l + "Stacker"] && ds([t, "-" + t], function(t) {
            for (var e, i, n = a.length; n--; )
                e = a[n],
                s = r.getStackIndicator(s, e, r.index, t),
                (i = (e = o[t] && o[t][e]) && e.points[s.key]) && r[l + "Stacker"](i, e, n)
        })
    }
    ,
    gs.prototype.percentStacker = function(t, e, i) {
        e = e.total ? 100 / e.total : 0,
        t[0] = ls(t[0] * e),
        t[1] = ls(t[1] * e),
        this.stackedYData[i] = t[1]
    }
    ,
    gs.prototype.getStackIndicator = function(t, e, i, n) {
        return !hs(t) || t.x !== e || n && t.key !== n ? t = {
            x: e,
            index: 0,
            key: n
        } : t.index++,
        t.key = [i, e, t.index].join(),
        t
    }
    ,
    ys = (ms = Nt).addEvent,
    vs = ms.animate,
    xs = ms.Axis,
    bs = ms.createElement,
    ws = ms.css,
    ks = ms.defined,
    Ts = ms.each,
    Ss = ms.erase,
    Ms = ms.extend,
    Cs = ms.fireEvent,
    As = ms.inArray,
    Ls = ms.isNumber,
    Ps = ms.isObject,
    Os = ms.isArray,
    Es = ms.merge,
    Ns = ms.objectEach,
    Ds = ms.pick,
    _s = ms.Point,
    Is = ms.Series,
    Rs = ms.seriesTypes,
    zs = ms.setAnimation,
    Bs = ms.splat,
    Ms(ms.Chart.prototype, {
        addSeries: function(t, e, i) {
            var n, s = this;
            return t && (e = Ds(e, !0),
            Cs(s, "addSeries", {
                options: t
            }, function() {
                n = s.initSeries(t),
                s.isDirtyLegend = !0,
                s.linkSeries(),
                Cs(s, "afterAddSeries"),
                e && s.redraw(i)
            })),
            n
        },
        addAxis: function(t, e, i, n) {
            var s = e ? "xAxis" : "yAxis"
              , r = this.options;
            return t = Es(t, {
                index: this[s].length,
                isX: e
            }),
            e = new xs(this,t),
            r[s] = Bs(r[s] || {}),
            r[s].push(t),
            Ds(i, !0) && this.redraw(n),
            e
        },
        showLoading: function(t) {
            var e = this
              , i = e.options
              , n = e.loadingDiv
              , s = i.loading
              , r = function() {
                n && ws(n, {
                    left: e.plotLeft + "px",
                    top: e.plotTop + "px",
                    width: e.plotWidth + "px",
                    height: e.plotHeight + "px"
                })
            };
            n || (e.loadingDiv = n = bs("div", {
                className: "highcharts-loading highcharts-loading-hidden"
            }, null, e.container),
            e.loadingSpan = bs("span", {
                className: "highcharts-loading-inner"
            }, null, n),
            ys(e, "redraw", r)),
            n.className = "highcharts-loading",
            e.loadingSpan.innerHTML = t || i.lang.loading,
            ws(n, Ms(s.style, {
                zIndex: 10
            })),
            ws(e.loadingSpan, s.labelStyle),
            e.loadingShown || (ws(n, {
                opacity: 0,
                display: ""
            }),
            vs(n, {
                opacity: s.style.opacity || .5
            }, {
                duration: s.showDuration || 0
            })),
            e.loadingShown = !0,
            r()
        },
        hideLoading: function() {
            var t = this.options
              , e = this.loadingDiv;
            e && (e.className = "highcharts-loading highcharts-loading-hidden",
            vs(e, {
                opacity: 0
            }, {
                duration: t.loading.hideDuration || 100,
                complete: function() {
                    ws(e, {
                        display: "none"
                    })
                }
            })),
            this.loadingShown = !1
        },
        propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
        propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
        update: function(t, e, n, i) {
            var s, r, o = this, a = {
                credits: "addCredits",
                title: "setTitle",
                subtitle: "setSubtitle"
            }, l = t.chart, h = [];
            Cs(o, "update", {
                options: t
            }),
            l && (Es(!0, o.options.chart, l),
            "className"in l && o.setClassName(l.className),
            "reflow"in l && o.setReflow(l.reflow),
            ("inverted"in l || "polar"in l) && (o.propFromSeries(),
            s = !0),
            "alignTicks"in l && (s = !0),
            Ns(l, function(t, e) {
                -1 !== As("chart." + e, o.propsRequireUpdateSeries) && (r = !0),
                -1 !== As(e, o.propsRequireDirtyBox) && (o.isDirtyBox = !0)
            }),
            "style"in l && o.renderer.setStyle(l.style)),
            t.colors && (this.options.colors = t.colors),
            t.plotOptions && Es(!0, this.options.plotOptions, t.plotOptions),
            Ns(t, function(t, e) {
                o[e] && "function" == typeof o[e].update ? o[e].update(t, !1) : "function" == typeof o[a[e]] && o[a[e]](t),
                "chart" !== e && -1 !== As(e, o.propsRequireUpdateSeries) && (r = !0)
            }),
            Ts("xAxis yAxis zAxis series colorAxis pane".split(" "), function(i) {
                t[i] && (Ts(Bs(t[i]), function(t, e) {
                    (e = ks(t.id) && o.get(t.id) || o[i][e]) && e.coll === i && (e.update(t, !1),
                    n && (e.touched = !0)),
                    !e && n && ("series" === i ? o.addSeries(t, !1).touched = !0 : "xAxis" !== i && "yAxis" !== i || (o.addAxis(t, "xAxis" === i, !1).touched = !0))
                }),
                n && Ts(o[i], function(t) {
                    t.touched ? delete t.touched : h.push(t)
                }))
            }),
            Ts(h, function(t) {
                t.remove(!1)
            }),
            s && Ts(o.axes, function(t) {
                t.update({}, !1)
            }),
            r && Ts(o.series, function(t) {
                t.update({}, !1)
            }),
            t.loading && Es(!0, o.options.loading, t.loading),
            s = l && l.width,
            l = l && l.height,
            Ls(s) && s !== o.chartWidth || Ls(l) && l !== o.chartHeight ? o.setSize(s, l, i) : Ds(e, !0) && o.redraw(i)
        },
        setSubtitle: function(t) {
            this.setTitle(void 0, t)
        }
    }),
    Ms(_s.prototype, {
        update: function(t, e, i, n) {
            function s() {
                o.applyOptions(t),
                null === o.y && l && (o.graphic = l.destroy()),
                Ps(t, !0) && (l && l.element && t && t.marker && void 0 !== t.marker.symbol && (o.graphic = l.destroy()),
                t && t.dataLabels && o.dataLabel && (o.dataLabel = o.dataLabel.destroy()),
                o.connector && (o.connector = o.connector.destroy())),
                r = o.index,
                a.updateParallelArrays(o, r),
                c.data[r] = Ps(c.data[r], !0) || Ps(t, !0) ? o.options : Ds(t, c.data[r]),
                a.isDirty = a.isDirtyData = !0,
                !a.fixedBox && a.hasCartesianSeries && (h.isDirtyBox = !0),
                "point" === c.legendType && (h.isDirtyLegend = !0),
                e && h.redraw(i)
            }
            var r, o = this, a = o.series, l = o.graphic, h = a.chart, c = a.options;
            e = Ds(e, !0),
            !1 === n ? s() : o.firePointEvent("update", {
                options: t
            }, s)
        },
        remove: function(t, e) {
            this.series.removePoint(As(this, this.series.data), t, e)
        }
    }),
    Ms(Is.prototype, {
        addPoint: function(t, e, i, n) {
            var s, r, o, a, l = this.options, h = this.data, c = this.chart, d = (d = this.xAxis) && d.hasNames && d.names, u = l.data, p = this.xData;
            if (e = Ds(e, !0),
            s = {
                series: this
            },
            this.pointClass.prototype.applyOptions.apply(s, [t]),
            a = s.x,
            o = p.length,
            this.requireSorting && a < p[o - 1])
                for (r = !0; o && p[o - 1] > a; )
                    o--;
            this.updateParallelArrays(s, "splice", o, 0, 0),
            this.updateParallelArrays(s, o),
            d && s.name && (d[a] = s.name),
            u.splice(o, 0, t),
            r && (this.data.splice(o, 0, null),
            this.processData()),
            "point" === l.legendType && this.generatePoints(),
            i && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(),
            this.updateParallelArrays(s, "shift"),
            u.shift())),
            this.isDirtyData = this.isDirty = !0,
            e && c.redraw(n)
        },
        removePoint: function(t, e, i) {
            var n = this
              , s = n.data
              , r = s[t]
              , o = n.points
              , a = n.chart
              , l = function() {
                o && o.length === s.length && o.splice(t, 1),
                s.splice(t, 1),
                n.options.data.splice(t, 1),
                n.updateParallelArrays(r || {
                    series: n
                }, "splice", t, 1),
                r && r.destroy(),
                n.isDirty = !0,
                n.isDirtyData = !0,
                e && a.redraw()
            };
            zs(i, a),
            e = Ds(e, !0),
            r ? r.firePointEvent("remove", null, l) : l()
        },
        remove: function(t, e, i) {
            function n() {
                s.destroy(),
                r.isDirtyLegend = r.isDirtyBox = !0,
                r.linkSeries(),
                Ds(t, !0) && r.redraw(e)
            }
            var s = this
              , r = s.chart;
            !1 !== i ? Cs(s, "remove", null, n) : n()
        },
        update: function(e, t) {
            var i, n = this, s = n.chart, r = n.userOptions, o = n.oldType || n.type, a = e.type || r.type || s.options.chart.type, l = Rs[o].prototype, h = ["group", "markerGroup", "dataLabelsGroup"], c = ["navigatorSeries", "baseSeries"], d = n.finishedAnimating && {
                animation: !1
            }, u = ["data", "name", "turboThreshold"], p = ms.keys(e), f = 0 < p.length;
            if (Ts(p, function(t) {
                -1 === As(t, u) && (f = !1)
            }),
            f)
                e.data && this.setData(e.data, !1),
                e.name && this.setName(e.name, !1);
            else {
                for (i in c = h.concat(c),
                Ts(c, function(t) {
                    c[t] = n[t],
                    delete n[t]
                }),
                e = Es(r, d, {
                    index: n.index,
                    pointStart: Ds(r.pointStart, n.xData[0])
                }, {
                    data: n.options.data
                }, e),
                n.remove(!1, null, !1),
                l)
                    n[i] = void 0;
                Rs[a || o] ? Ms(n, Rs[a || o].prototype) : ms.error(17, !0),
                Ts(c, function(t) {
                    n[t] = c[t]
                }),
                n.init(s, e),
                e.zIndex !== r.zIndex && Ts(h, function(t) {
                    n[t] && n[t].attr({
                        zIndex: e.zIndex
                    })
                }),
                n.oldType = o,
                s.linkSeries()
            }
            Cs(this, "afterUpdate"),
            Ds(t, !0) && s.redraw(!1)
        },
        setName: function(t) {
            this.name = this.options.name = this.userOptions.name = t,
            this.chart.isDirtyLegend = !0
        }
    }),
    Ms(xs.prototype, {
        update: function(t, e) {
            var i = this.chart;
            t = Es(this.userOptions, t),
            i.options[this.coll].indexOf && (i.options[this.coll][i.options[this.coll].indexOf(this.userOptions)] = t),
            this.destroy(!0),
            this.init(i, Ms(t, {
                events: void 0
            })),
            i.isDirtyBox = !0,
            Ds(e, !0) && i.redraw()
        },
        remove: function(t) {
            for (var e = this.chart, i = this.coll, n = this.series, s = n.length; s--; )
                n[s] && n[s].remove(!1);
            Ss(e.axes, this),
            Ss(e[i], this),
            Os(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i],
            Ts(e[i], function(t, e) {
                t.options.index = t.userOptions.index = e
            }),
            this.destroy(),
            e.isDirtyBox = !0,
            Ds(t, !0) && e.redraw()
        },
        setTitle: function(t, e) {
            this.update({
                title: t
            }, e)
        },
        setCategories: function(t, e) {
            this.update({
                categories: t
            }, e)
        }
    }),
    Hs = (Fs = Nt).color,
    js = Fs.each,
    Ws = Fs.map,
    Xs = Fs.pick,
    Ys = Fs.Series,
    (0,
    Fs.seriesType)("area", "line", {
        softThreshold: !1,
        threshold: 0
    }, {
        singleStacks: !1,
        getStackPoints: function(t) {
            var l, h, e = [], c = [], i = this.xAxis, n = this.yAxis, d = n.stacks[this.stackKey], u = {}, p = this.index, s = n.series, f = s.length, g = Xs(n.options.reversedStacks, !0) ? 1 : -1;
            if (t = t || this.points,
            this.options.stacking) {
                for (h = 0; h < t.length; h++)
                    t[h].leftNull = t[h].rightNull = null,
                    u[t[h].x] = t[h];
                Fs.objectEach(d, function(t, e) {
                    null !== t.total && c.push(e)
                }),
                c.sort(function(t, e) {
                    return t - e
                }),
                l = Ws(s, function() {
                    return this.visible
                }),
                js(c, function(s, r) {
                    var o, a, t = 0;
                    if (u[s] && !u[s].isNull)
                        e.push(u[s]),
                        js([-1, 1], function(t) {
                            var e = 1 === t ? "rightNull" : "leftNull"
                              , i = 0
                              , n = d[c[r + t]];
                            if (n)
                                for (h = p; 0 <= h && h < f; )
                                    (o = n.points[h]) || (h === p ? u[s][e] = !0 : l[h] && (a = d[s].points[h]) && (i -= a[1] - a[0])),
                                    h += g;
                            u[s][1 === t ? "rightCliff" : "leftCliff"] = i
                        });
                    else {
                        for (h = p; 0 <= h && h < f; ) {
                            if (o = d[s].points[h]) {
                                t = o[1];
                                break
                            }
                            h += g
                        }
                        t = n.translate(t, 0, 1, 0, 1),
                        e.push({
                            isNull: !0,
                            plotX: i.translate(s, 0, 0, 0, 1),
                            x: s,
                            plotY: t,
                            yBottom: t
                        })
                    }
                })
            }
            return e
        },
        getGraphPath: function(a) {
            var t, e, l, i, n = Ys.prototype.getGraphPath, h = (s = this.options).stacking, c = this.yAxis, d = [], u = [], p = this.index, f = c.stacks[this.stackKey], g = s.threshold, m = c.getThreshold(s.threshold), s = s.connectNulls || "percent" === h, r = function(t, e, i) {
                var n = a[t];
                t = h && f[n.x].points[p];
                var s = n[i + "Null"] || 0;
                i = n[i + "Cliff"] || 0;
                var r, o, n = !0;
                i || s ? (r = (s ? t[0] : t[1]) + i,
                o = t[0] + i,
                n = !!s) : !h && a[e] && a[e].isNull && (r = o = g),
                void 0 !== r && (u.push({
                    plotX: l,
                    plotY: null === r ? m : c.getThreshold(r),
                    isNull: n,
                    isCliff: !0
                }),
                d.push({
                    plotX: l,
                    plotY: null === o ? m : c.getThreshold(o),
                    doCurve: !1
                }))
            };
            for (a = a || this.points,
            h && (a = this.getStackPoints(a)),
            t = 0; t < a.length; t++)
                e = a[t].isNull,
                l = Xs(a[t].rectPlotX, a[t].plotX),
                i = Xs(a[t].yBottom, m),
                e && !s || (s || r(t, t - 1, "left"),
                e && !h && s || (u.push(a[t]),
                d.push({
                    x: t,
                    plotX: l,
                    plotY: i
                })),
                s || r(t, t + 1, "right"));
            return t = n.call(this, u, !0, !0),
            d.reversed = !0,
            (e = n.call(this, d, !0, !0)).length && (e[0] = "L"),
            e = t.concat(e),
            n = n.call(this, u, !1, s),
            e.xMap = t.xMap,
            this.areaPath = e,
            n
        },
        drawGraph: function() {
            this.areaPath = [],
            Ys.prototype.drawGraph.apply(this);
            var n = this
              , s = this.areaPath
              , r = this.options
              , i = [["area", "highcharts-area", this.color, r.fillColor]];
            js(this.zones, function(t, e) {
                i.push(["zone-area-" + e, "highcharts-area highcharts-zone-area-" + e + " " + t.className, t.color || n.color, t.fillColor || r.fillColor])
            }),
            js(i, function(t) {
                var e = t[0]
                  , i = n[e];
                i ? (i.endX = n.preventGraphAnimation ? null : s.xMap,
                i.animate({
                    d: s
                })) : (i = n[e] = n.chart.renderer.path(s).addClass(t[1]).attr({
                    fill: Xs(t[3], Hs(t[2]).setOpacity(Xs(r.fillOpacity, .75)).get()),
                    zIndex: 0
                }).add(n.group)).isArea = !0,
                i.startX = s.xMap,
                i.shiftUnit = r.step ? 2 : 1
            })
        },
        drawLegendSymbol: Fs.LegendSymbolMixin.drawRectangle
    }),
    $s = (Gs = Nt).pick,
    (Gs = Gs.seriesType)("spline", "line", {}, {
        getPointSpline: function(t, e, i) {
            var n, s, r, o, a, l = e.plotX, h = e.plotY, c = t[i - 1];
            return i = t[i + 1],
            !c || c.isNull || !1 === c.doCurve || e.isCliff || !i || i.isNull || !1 === i.doCurve || e.isCliff || (t = c.plotY,
            o = i.plotX,
            n = 0,
            r = (1.5 * h + t) / 2.5,
            a = (1.5 * h + (i = i.plotY)) / 2.5,
            (o = (1.5 * l + o) / 2.5) !== (s = (1.5 * l + c.plotX) / 2.5) && (n = (a - r) * (o - l) / (o - s) + h - a),
            a += n,
            t < (r += n) && h < r ? a = 2 * h - (r = Math.max(t, h)) : r < t && r < h && (a = 2 * h - (r = Math.min(t, h))),
            i < a && h < a ? r = 2 * h - (a = Math.max(i, h)) : a < i && a < h && (r = 2 * h - (a = Math.min(i, h))),
            e.rightContX = o,
            e.rightContY = a),
            e = ["C", $s(c.rightContX, c.plotX), $s(c.rightContY, c.plotY), $s(s, l), $s(r, h), l, h],
            c.rightContX = c.rightContY = null,
            e
        }
    }),
    qs = Nt.seriesTypes.area.prototype,
    (0,
    Nt.seriesType)("areaspline", "spline", Nt.defaultPlotOptions.area, {
        getStackPoints: qs.getStackPoints,
        getGraphPath: qs.getGraphPath,
        drawGraph: qs.drawGraph,
        drawLegendSymbol: Nt.LegendSymbolMixin.drawRectangle
    }),
    Vs = Nt.animObject,
    Us = Nt.color,
    Ks = Nt.each,
    Zs = Nt.extend,
    Js = Nt.isNumber,
    Qs = Nt.merge,
    tr = Nt.pick,
    er = Nt.Series,
    ir = Nt.seriesType,
    nr = Nt.svg,
    ir("column", "line", {
        borderRadius: 0,
        crisp: !0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                halo: !1,
                brightness: .1
            },
            select: {
                color: "#cccccc",
                borderColor: "#000000"
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0,
        borderColor: "#ffffff"
    }, {
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            er.prototype.init.apply(this, arguments);
            var e = this
              , t = e.chart;
            t.hasRendered && Ks(t.series, function(t) {
                t.type === e.type && (t.isDirty = !0)
            })
        },
        getColumnMetrics: function() {
            var s, r = this, t = r.options, e = r.xAxis, o = r.yAxis, i = e.reversed, a = {}, l = 0;
            !1 === t.grouping ? l = 1 : Ks(r.chart.series, function(t) {
                var e, i = t.options, n = t.yAxis;
                t.type !== r.type || !t.visible && r.chart.options.chart.ignoreHiddenSeries || o.len !== n.len || o.pos !== n.pos || (i.stacking ? (s = t.stackKey,
                void 0 === a[s] && (a[s] = l++),
                e = a[s]) : !1 !== i.grouping && (e = l++),
                t.columnIndex = e)
            });
            var n = Math.min(Math.abs(e.transA) * (e.ordinalSlope || t.pointRange || e.closestPointRange || e.tickInterval || 1), e.len)
              , h = n * t.groupPadding
              , c = (n - 2 * h) / (l || 1)
              , t = Math.min(t.maxPointWidth || e.len, tr(t.pointWidth, c * (1 - 2 * t.pointPadding)));
            return r.columnMetrics = {
                width: t,
                offset: (c - t) / 2 + (h + ((r.columnIndex || 0) + (i ? 1 : 0)) * c - n / 2) * (i ? -1 : 1)
            },
            r.columnMetrics
        },
        crispCol: function(t, e, i, n) {
            var s = this.chart
              , r = -((o = this.borderWidth) % 2 ? .5 : 0)
              , o = o % 2 ? .5 : 1;
            return s.inverted && s.renderer.isVML && (o += 1),
            this.options.crisp && (i = Math.round(t + i) + r,
            i -= t = Math.round(t) + r),
            n = Math.round(e + n) + o,
            r = Math.abs(e) <= .5 && .5 < n,
            n -= e = Math.round(e) + o,
            r && n && (--e,
            n += 1),
            {
                x: t,
                y: e,
                width: i,
                height: n
            }
        },
        translate: function() {
            var l = this
              , h = l.chart
              , t = l.options
              , e = l.dense = l.closestPointRange * l.xAxis.transA < 2
              , e = l.borderWidth = tr(t.borderWidth, e ? 0 : 1)
              , c = l.yAxis
              , d = t.threshold
              , u = l.translatedThreshold = c.getThreshold(d)
              , p = tr(t.minPointLength, 5)
              , i = l.getColumnMetrics()
              , f = i.width
              , g = l.barW = Math.max(f, 1 + 2 * e)
              , m = l.pointXOffset = i.offset;
            h.inverted && (u -= .5),
            t.pointPadding && (g = Math.ceil(g)),
            er.prototype.translate.apply(l),
            Ks(l.points, function(t) {
                var e, i = tr(t.yBottom, u), n = 999 + Math.abs(i), n = Math.min(Math.max(-n, t.plotY), c.len + n), s = t.plotX + m, r = g, o = Math.min(n, i), a = Math.max(n, i) - o;
                p && Math.abs(a) < p && (a = p,
                e = !c.reversed && !t.negative || c.reversed && t.negative,
                t.y === d && l.dataMax <= d && c.min < d && (e = !e),
                o = Math.abs(o - u) > p ? i - p : u - (e ? p : 0)),
                t.barX = s,
                t.pointWidth = f,
                t.tooltipPos = h.inverted ? [c.len + c.pos - h.plotLeft - n, l.xAxis.len - s - r / 2, a] : [s + r / 2, n + c.pos - h.plotTop, a],
                t.shapeType = "rect",
                t.shapeArgs = l.crispCol.apply(l, t.isNull ? [s, u, r, 0] : [s, o, r, a])
            })
        },
        getSymbol: Nt.noop,
        drawLegendSymbol: Nt.LegendSymbolMixin.drawRectangle,
        drawGraph: function() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
        },
        pointAttribs: function(t, e) {
            var i = this.options
              , n = (l = this.pointAttrToOptions || {}).stroke || "borderColor"
              , s = l["stroke-width"] || "borderWidth"
              , r = t && t.color || this.color
              , o = t && t[n] || i[n] || this.color || r
              , a = t && t[s] || i[s] || this[s] || 0
              , l = i.dashStyle;
            return t && this.zones.length && (r = t.getZone(),
            r = t.options.color || r && r.color || this.color),
            e && (e = (t = Qs(i.states[e], t.options.states && t.options.states[e] || {})).brightness,
            r = t.color || void 0 !== e && Us(r).brighten(t.brightness).get() || r,
            o = t[n] || o,
            a = t[s] || a,
            l = t.dashStyle || l),
            n = {
                fill: r,
                stroke: o,
                "stroke-width": a
            },
            l && (n.dashstyle = l),
            n
        },
        drawPoints: function() {
            var n, s = this, r = this.chart, o = s.options, a = r.renderer, l = o.animationLimit || 250;
            Ks(s.points, function(t) {
                var e = t.graphic
                  , i = e && r.pointCount < l ? "animate" : "attr";
                Js(t.plotY) && null !== t.y ? (n = t.shapeArgs,
                e ? e[i](Qs(n)) : t.graphic = e = a[t.shapeType](n).add(t.group || s.group),
                o.borderRadius && e.attr({
                    r: o.borderRadius
                }),
                e[i](s.pointAttribs(t, t.selected && "select")).shadow(o.shadow, null, o.stacking && !o.borderRadius),
                e.addClass(t.getClassName(), !0)) : e && (t.graphic = e.destroy())
            })
        },
        animate: function(t) {
            var i, n = this, s = this.yAxis, e = n.options, r = this.chart.inverted, o = {}, a = r ? "translateX" : "translateY";
            nr && (t ? (o.scaleY = .001,
            t = Math.min(s.pos + s.len, Math.max(s.pos, s.toPixels(e.threshold))),
            r ? o.translateX = t - s.len : o.translateY = t,
            n.group.attr(o)) : (i = n.group.attr(a),
            n.group.animate({
                scaleY: 1
            }, Zs(Vs(n.options.animation), {
                step: function(t, e) {
                    o[a] = i + e.pos * (s.pos - i),
                    n.group.attr(o)
                }
            })),
            n.animate = null))
        },
        remove: function() {
            var e = this
              , t = e.chart;
            t.hasRendered && Ks(t.series, function(t) {
                t.type === e.type && (t.isDirty = !0)
            }),
            er.prototype.remove.apply(e, arguments)
        }
    }),
    (0,
    Nt.seriesType)("bar", "column", null, {
        inverted: !0
    }),
    rr = (sr = Nt).Series,
    (sr = sr.seriesType)("scatter", "line", {
        lineWidth: 0,
        findNearestPointBy: "xy",
        marker: {
            enabled: !0
        },
        tooltip: {
            headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.85em"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    }, {
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        drawGraph: function() {
            this.options.lineWidth && rr.prototype.drawGraph.call(this)
        }
    }),
    or = Nt.deg2rad,
    ar = Nt.isNumber,
    lr = Nt.pick,
    hr = Nt.relativeLength,
    Nt.CenteredSeriesMixin = {
        getCenter: function() {
            for (var t, e = this.options, i = this.chart, n = 2 * (e.slicedOffset || 0), s = i.plotWidth - 2 * n, i = i.plotHeight - 2 * n, r = e.center, r = [lr(r[0], "50%"), lr(r[1], "50%"), e.size || "100%", e.innerSize || 0], o = Math.min(s, i), a = 0; a < 4; ++a)
                t = r[a],
                e = a < 2 || 2 === a && /%$/.test(t),
                r[a] = hr(t, [s, i, o, r[2]][a]) + (e ? n : 0);
            return r[3] > r[2] && (r[3] = r[2]),
            r
        },
        getStartAndEndRadians: function(t, e) {
            return t = ar(t) ? t : 0,
            e = ar(e) && t < e && e - t < 360 ? e : t + 360,
            {
                start: or * (t + -90),
                end: or * (e + -90)
            }
        }
    },
    dr = (cr = Nt).addEvent,
    ur = cr.CenteredSeriesMixin,
    pr = cr.defined,
    fr = cr.each,
    gr = cr.extend,
    mr = ur.getStartAndEndRadians,
    yr = cr.inArray,
    vr = cr.noop,
    xr = cr.pick,
    br = cr.Point,
    wr = cr.Series,
    kr = cr.seriesType,
    Tr = cr.setAnimation,
    kr("pie", "line", {
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.isNull ? void 0 : this.point.name
            },
            x: 0
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        },
        borderColor: "#ffffff",
        borderWidth: 1,
        states: {
            hover: {
                brightness: .1
            }
        }
    }, {
        isCartesian: !1,
        requireSorting: !1,
        directTouch: !0,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        axisTypes: [],
        pointAttribs: cr.seriesTypes.column.prototype.pointAttribs,
        animate: function(t) {
            var n = this
              , e = n.points
              , s = n.startAngleRad;
            t || (fr(e, function(t) {
                var e = t.graphic
                  , i = t.shapeArgs;
                e && (e.attr({
                    r: t.startR || n.center[3] / 2,
                    start: s,
                    end: s
                }),
                e.animate({
                    r: i.r,
                    start: i.start,
                    end: i.end
                }, n.options.animation))
            }),
            n.animate = null)
        },
        updateTotals: function() {
            for (var t, e = 0, i = this.points, n = i.length, s = this.options.ignoreHiddenPoint, r = 0; r < n; r++)
                t = i[r],
                e += s && !t.visible || t.isNull ? 0 : t.y;
            for (this.total = e,
            r = 0; r < n; r++)
                (t = i[r]).percentage = 0 < e && (t.visible || !s) ? t.y / e * 100 : 0,
                t.total = e
        },
        generatePoints: function() {
            wr.prototype.generatePoints.call(this),
            this.updateTotals()
        },
        translate: function(n) {
            this.generatePoints();
            var t, e, s, i, r, o, a = 0, l = (f = this.options).slicedOffset, h = l + (f.borderWidth || 0), c = mr(f.startAngle, f.endAngle), d = this.startAngleRad = c.start, c = (this.endAngleRad = c.end) - d, u = this.points, p = f.dataLabels.distance, f = f.ignoreHiddenPoint, g = u.length;
            for (n || (this.center = n = this.getCenter()),
            this.getX = function(t, e, i) {
                return s = Math.asin(Math.min((t - n[1]) / (n[2] / 2 + i.labelDistance), 1)),
                n[0] + (e ? -1 : 1) * Math.cos(s) * (n[2] / 2 + i.labelDistance)
            }
            ,
            r = 0; r < g; r++)
                (o = u[r]).labelDistance = xr(o.options.dataLabels && o.options.dataLabels.distance, p),
                this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, o.labelDistance),
                t = d + a * c,
                f && !o.visible || (a += o.percentage / 100),
                e = d + a * c,
                o.shapeType = "arc",
                o.shapeArgs = {
                    x: n[0],
                    y: n[1],
                    r: n[2] / 2,
                    innerR: n[3] / 2,
                    start: Math.round(1e3 * t) / 1e3,
                    end: Math.round(1e3 * e) / 1e3
                },
                (s = (e + t) / 2) > 1.5 * Math.PI ? s -= 2 * Math.PI : s < -Math.PI / 2 && (s += 2 * Math.PI),
                o.slicedTranslation = {
                    translateX: Math.round(Math.cos(s) * l),
                    translateY: Math.round(Math.sin(s) * l)
                },
                e = Math.cos(s) * n[2] / 2,
                i = Math.sin(s) * n[2] / 2,
                o.tooltipPos = [n[0] + .7 * e, n[1] + .7 * i],
                o.half = s < -Math.PI / 2 || s > Math.PI / 2 ? 1 : 0,
                o.angle = s,
                t = Math.min(h, o.labelDistance / 5),
                o.labelPos = [n[0] + e + Math.cos(s) * o.labelDistance, n[1] + i + Math.sin(s) * o.labelDistance, n[0] + e + Math.cos(s) * t, n[1] + i + Math.sin(s) * t, n[0] + e, n[1] + i, o.labelDistance < 0 ? "center" : o.half ? "right" : "left", s]
        },
        drawGraph: null,
        drawPoints: function() {
            var i, n, s, r, o = this, a = o.chart.renderer, l = o.options.shadow;
            l && !o.shadowGroup && (o.shadowGroup = a.g("shadow").add(o.group)),
            fr(o.points, function(t) {
                var e;
                n = t.graphic,
                t.isNull ? n && (t.graphic = n.destroy()) : (r = t.shapeArgs,
                i = t.getTranslate(),
                e = t.shadowGroup,
                l && !e && (e = t.shadowGroup = a.g("shadow").add(o.shadowGroup)),
                e && e.attr(i),
                s = o.pointAttribs(t, t.selected && "select"),
                n ? n.setRadialReference(o.center).attr(s).animate(gr(r, i)) : (t.graphic = n = a[t.shapeType](r).setRadialReference(o.center).attr(i).add(o.group),
                t.visible || n.attr({
                    visibility: "hidden"
                }),
                n.attr(s).attr({
                    "stroke-linejoin": "round"
                }).shadow(l, e)),
                n.addClass(t.getClassName()))
            })
        },
        searchPoint: vr,
        sortByAngle: function(t, i) {
            t.sort(function(t, e) {
                return void 0 !== t.angle && (e.angle - t.angle) * i
            })
        },
        drawLegendSymbol: cr.LegendSymbolMixin.drawRectangle,
        getCenter: ur.getCenter,
        getSymbol: vr
    }, {
        init: function() {
            br.prototype.init.apply(this, arguments);
            var t, e = this;
            return e.name = xr(e.name, "Slice"),
            t = function(t) {
                e.slice("select" === t.type)
            }
            ,
            dr(e, "select", t),
            dr(e, "unselect", t),
            e
        },
        isValid: function() {
            return cr.isNumber(this.y, !0) && 0 <= this.y
        },
        setVisible: function(e, t) {
            var i = this
              , n = i.series
              , s = n.chart
              , r = n.options.ignoreHiddenPoint;
            t = xr(t, r),
            e !== i.visible && (i.visible = i.options.visible = e = void 0 === e ? !i.visible : e,
            n.options.data[yr(i, n.data)] = i.options,
            fr(["graphic", "dataLabel", "connector", "shadowGroup"], function(t) {
                i[t] && i[t][e ? "show" : "hide"](!0)
            }),
            i.legendItem && s.legend.colorizeItem(i, e),
            e || "hover" !== i.state || i.setState(""),
            r && (n.isDirty = !0),
            t && s.redraw())
        },
        slice: function(t, e, i) {
            var n = this.series;
            Tr(i, n.chart),
            xr(e, !0),
            this.sliced = this.options.sliced = pr(t) ? t : !this.sliced,
            n.options.data[yr(this, n.data)] = this.options,
            this.graphic.animate(this.getTranslate()),
            this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
        },
        getTranslate: function() {
            return this.sliced ? this.slicedTranslation : {
                translateX: 0,
                translateY: 0
            }
        },
        haloPath: function(t) {
            var e = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                innerR: this.shapeArgs.r - 1,
                start: e.start,
                end: e.end
            })
        }
    }),
    Mr = (Sr = Nt).addEvent,
    Cr = Sr.arrayMax,
    Ar = Sr.defined,
    Lr = Sr.each,
    Pr = Sr.extend,
    Or = Sr.format,
    Er = Sr.map,
    Nr = Sr.merge,
    Dr = Sr.noop,
    _r = Sr.pick,
    Ir = Sr.relativeLength,
    Rr = Sr.Series,
    zr = Sr.seriesTypes,
    Br = Sr.some,
    Fr = Sr.stableSort,
    Sr.distribute = function(t, i, n) {
        function e(t, e) {
            return t.target - e.target
        }
        for (var s = !0, r = t, o = [], a = 0, l = r.reducedLen || i, h = t.length; h--; )
            a += t[h].size;
        if (l < a) {
            for (Fr(t, function(t, e) {
                return (e.rank || 0) - (t.rank || 0)
            }),
            a = h = 0; a <= l; )
                a += t[h].size,
                h++;
            o = t.splice(h - 1, t.length)
        }
        for (Fr(t, e),
        t = Er(t, function(t) {
            return {
                size: t.size,
                targets: [t.target],
                align: _r(t.align, .5)
            }
        }); s; ) {
            for (h = t.length; h--; )
                s = t[h],
                a = (Math.min.apply(0, s.targets) + Math.max.apply(0, s.targets)) / 2,
                s.pos = Math.min(Math.max(0, a - s.size * s.align), i - s.size);
            for (h = t.length,
            s = !1; h--; )
                0 < h && t[h - 1].pos + t[h - 1].size > t[h].pos && (t[h - 1].size += t[h].size,
                t[h - 1].targets = t[h - 1].targets.concat(t[h].targets),
                t[h - 1].align = .5,
                t[h - 1].pos + t[h - 1].size > i && (t[h - 1].pos = i - t[h - 1].size),
                t.splice(h, 1),
                s = !0)
        }
        r.push.apply(r, o),
        h = 0,
        Br(t, function(t) {
            var e = 0;
            if (Br(t.targets, function() {
                return r[h].pos = t.pos + e,
                Math.abs(r[h].pos - r[h].target) > n ? (Lr(r.slice(0, h + 1), function(t) {
                    delete t.pos
                }),
                r.reducedLen = (r.reducedLen || i) - .1 * i,
                r.reducedLen > .1 * i && Sr.distribute(r, i, n),
                !0) : (e += r[h].size,
                void h++)
            }))
                return !0
        }),
        Fr(r, e)
    }
    ,
    Rr.prototype.drawDataLabels = function() {
        var d, u, p, f, g = this, m = g.chart, y = g.options, v = y.dataLabels, t = g.points, e = g.hasRendered || 0, i = _r(v.defer, !!y.animation), x = m.renderer;
        (v.enabled || g._hasPointLabels) && (g.dlProcessOptions && g.dlProcessOptions(v),
        f = g.plotGroup("dataLabelsGroup", "data-labels", i && !e ? "hidden" : "visible", v.zIndex || 6),
        i && (f.attr({
            opacity: +e
        }),
        e || Mr(g, "afterAnimate", function() {
            g.visible && f.show(!0),
            f[y.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            })
        })),
        u = v,
        Lr(t, function(t) {
            var e, i, n, s, r, o, a, l = t.dataLabel, h = t.connector, c = !l;
            d = t.dlOptions || t.options && t.options.dataLabels,
            (e = _r(d && d.enabled, u.enabled) && !t.isNull) && (e = !0 == (r = t,
            !(a = (o = d || v).filter) || (o = a.operator,
            r = r[a.property],
            a = a.value,
            ">" === o && a < r || "<" === o && r < a || ">=" === o && a <= r || "<=" === o && r <= a || "==" === o && r == a || "===" === o && r === a))),
            e && (v = Nr(u, d),
            i = t.getLabelConfig(),
            s = v[t.formatPrefix + "Format"] || v.format,
            p = Ar(s) ? Or(s, i, m.time) : (v[t.formatPrefix + "Formatter"] || v.formatter).call(i, v),
            s = v.style,
            i = v.rotation,
            s.color = _r(v.color, s.color, g.color, "#000000"),
            "contrast" === s.color && (t.contrastColor = x.getContrast(t.color || g.color),
            s.color = v.inside || _r(t.labelDistance, v.distance) < 0 || y.stacking ? t.contrastColor : "#000000"),
            y.cursor && (s.cursor = y.cursor),
            n = {
                fill: v.backgroundColor,
                stroke: v.borderColor,
                "stroke-width": v.borderWidth,
                r: v.borderRadius || 0,
                rotation: i,
                padding: v.padding,
                zIndex: 1
            },
            Sr.objectEach(n, function(t, e) {
                void 0 === t && delete n[e]
            })),
            !l || e && Ar(p) ? e && Ar(p) && (l ? n.text = p : (l = t.dataLabel = i ? x.text(p, 0, -9999).addClass("highcharts-data-label") : x.label(p, 0, -9999, v.shape, null, null, v.useHTML, null, "data-label")).addClass(" highcharts-data-label-color-" + t.colorIndex + " " + (v.className || "") + (v.useHTML ? "highcharts-tracker" : "")),
            l.attr(n),
            l.css(s).shadow(v.shadow),
            l.added || l.add(f),
            g.alignDataLabel(t, l, v, null, c)) : (t.dataLabel = l = l.destroy(),
            h && (t.connector = h.destroy()))
        })),
        Sr.fireEvent(this, "afterDrawDataLabels")
    }
    ,
    Rr.prototype.alignDataLabel = function(t, e, i, n, s) {
        var r, o = this.chart, a = o.inverted, l = _r(t.dlBox && t.dlBox.centerX, t.plotX, -9999), h = _r(t.plotY, -9999), c = e.getBBox(), d = i.rotation, u = i.align, p = this.visible && (t.series.forceDL || o.isInsidePlot(l, Math.round(h), a) || n && o.isInsidePlot(l, a ? n.x + 1 : n.y + n.height - 1, a)), f = "justify" === _r(i.overflow, "justify");
        p && (r = i.style.fontSize,
        r = o.renderer.fontMetrics(r, e).b,
        n = Pr({
            x: a ? this.yAxis.len - h : l,
            y: Math.round(a ? this.xAxis.len - l : h),
            width: 0,
            height: 0
        }, n),
        Pr(i, {
            width: c.width,
            height: c.height
        }),
        d ? (f = !1,
        l = o.renderer.rotCorr(r, d),
        l = {
            x: n.x + i.x + n.width / 2 + l.x,
            y: n.y + i.y + {
                top: 0,
                middle: .5,
                bottom: 1
            }[i.verticalAlign] * n.height
        },
        e[s ? "attr" : "animate"](l).attr({
            align: u
        }),
        h = 180 < (h = (d + 720) % 360) && h < 360,
        "left" === u ? l.y -= h ? c.height : 0 : "center" === u ? (l.x -= c.width / 2,
        l.y -= c.height / 2) : "right" === u && (l.x -= c.width,
        l.y -= h ? 0 : c.height),
        e.placed = !0,
        e.alignAttr = l) : (e.align(i, null, n),
        l = e.alignAttr),
        f ? t.isLabelJustified = this.justifyDataLabel(e, i, l, c, n, s) : _r(i.crop, !0) && (p = o.isInsidePlot(l.x, l.y) && o.isInsidePlot(l.x + c.width, l.y + c.height)),
        i.shape && !d) && e[s ? "attr" : "animate"]({
            anchorX: a ? o.plotWidth - t.plotY : t.plotX,
            anchorY: a ? o.plotHeight - t.plotX : t.plotY
        }),
        p || (e.attr({
            y: -9999
        }),
        e.placed = !1)
    }
    ,
    Rr.prototype.justifyDataLabel = function(t, e, i, n, s, r) {
        var o, a = this.chart, l = e.align, h = e.verticalAlign, c = !t.box && t.padding || 0, d = i.x + c;
        return d < 0 && ("right" === l ? e.align = "left" : e.x = -d,
        o = !0),
        (d = i.x + n.width - c) > a.plotWidth && ("left" === l ? e.align = "right" : e.x = a.plotWidth - d,
        o = !0),
        (d = i.y + c) < 0 && ("bottom" === h ? e.verticalAlign = "top" : e.y = -d,
        o = !0),
        (d = i.y + n.height - c) > a.plotHeight && ("top" === h ? e.verticalAlign = "bottom" : e.y = a.plotHeight - d,
        o = !0),
        o && (t.placed = !r,
        t.align(e, null, s)),
        o
    }
    ,
    zr.pie && (zr.pie.prototype.drawDataLabels = function() {
        var a, i, l, h, c, d, u, p, f, g, m = this, t = m.data, y = m.chart, v = m.options.dataLabels, x = _r(v.connectorPadding, 10), n = _r(v.connectorWidth, 1), b = y.plotWidth, w = y.plotHeight, e = Math.round(y.chartWidth / 3), k = m.center, T = k[2] / 2, S = k[1], s = [[], []], M = [0, 0, 0, 0];
        m.visible && (v.enabled || m._hasPointLabels) && (Lr(t, function(t) {
            t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({
                width: "auto"
            }).css({
                width: "auto",
                textOverflow: "clip"
            }),
            t.dataLabel.shortened = !1)
        }),
        Rr.prototype.drawDataLabels.apply(m),
        Lr(t, function(t) {
            t.dataLabel && t.visible && (s[t.half].push(t),
            t.dataLabel._pos = null,
            !Ar(v.style.width) && !Ar(t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width) && t.dataLabel.getBBox().width > e && (t.dataLabel.css({
                width: .7 * e
            }),
            t.dataLabel.shortened = !0))
        }),
        Lr(s, function(t, e) {
            var i, n, s, r = t.length, o = [];
            if (r)
                for (m.sortByAngle(t, e - .5),
                0 < m.maxLabelDistance && (i = Math.max(0, S - T - m.maxLabelDistance),
                n = Math.min(S + T + m.maxLabelDistance, y.plotHeight),
                Lr(t, function(t) {
                    0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, S - T - t.labelDistance),
                    t.bottom = Math.min(S + T + t.labelDistance, y.plotHeight),
                    s = t.dataLabel.getBBox().height || 21,
                    t.positionsIndex = o.push({
                        target: t.labelPos[1] - t.top + s / 2,
                        size: s,
                        rank: t.y
                    }) - 1)
                }),
                i = n + s - i,
                Sr.distribute(o, i, i / 5)),
                g = 0; g < r; g++)
                    n = (a = t[g]).positionsIndex,
                    c = a.labelPos,
                    l = a.dataLabel,
                    f = !1 === a.visible ? "hidden" : "inherit",
                    p = i = c[1],
                    o && Ar(o[n]) && (void 0 === o[n].pos ? f = "hidden" : (d = o[n].size,
                    p = a.top + o[n].pos)),
                    delete a.positionIndex,
                    u = v.justify ? k[0] + (e ? -1 : 1) * (T + a.labelDistance) : m.getX(p < a.top + 2 || p > a.bottom - 2 ? i : p, e, a),
                    l._attr = {
                        visibility: f,
                        align: c[6]
                    },
                    l._pos = {
                        x: u + v.x + ({
                            left: x,
                            right: -x
                        }[c[6]] || 0),
                        y: p + v.y - 10
                    },
                    c.x = u,
                    c.y = p,
                    _r(v.crop, !0) && (h = l.getBBox().width,
                    i = null,
                    u - h < x && 1 === e ? (i = Math.round(h - u + x),
                    M[3] = Math.max(i, M[3])) : b - x < u + h && 0 === e && (i = Math.round(u + h - b + x),
                    M[1] = Math.max(i, M[1])),
                    p - d / 2 < 0 ? M[0] = Math.max(Math.round(d / 2 - p), M[0]) : w < p + d / 2 && (M[2] = Math.max(Math.round(p + d / 2 - w), M[2])),
                    l.sideOverflow = i)
        }),
        0 === Cr(M) || this.verifyDataLabelOverflow(M)) && (this.placeDataLabels(),
        n && Lr(this.points, function(t) {
            var e;
            i = t.connector,
            (l = t.dataLabel) && l._pos && t.visible && 0 < t.labelDistance ? (f = l._attr.visibility,
            (e = !i) && (t.connector = i = y.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(m.dataLabelsGroup),
            i.attr({
                "stroke-width": n,
                stroke: v.connectorColor || t.color || "#666666"
            })),
            i[e ? "attr" : "animate"]({
                d: m.connectorPath(t.labelPos)
            }),
            i.attr("visibility", f)) : i && (t.connector = i.destroy())
        }))
    }
    ,
    zr.pie.prototype.connectorPath = function(t) {
        var e = t.x
          , i = t.y;
        return _r(this.options.dataLabels.softConnector, !0) ? ["M", e + ("left" === t[6] ? 5 : -5), i, "C", e, i, 2 * t[2] - t[4], 2 * t[3] - t[5], t[2], t[3], "L", t[4], t[5]] : ["M", e + ("left" === t[6] ? 5 : -5), i, "L", t[2], t[3], "L", t[4], t[5]]
    }
    ,
    zr.pie.prototype.placeDataLabels = function() {
        Lr(this.points, function(t) {
            var e = t.dataLabel;
            e && t.visible && ((t = e._pos) ? (e.sideOverflow && (e._attr.width = e.getBBox().width - e.sideOverflow,
            e.css({
                width: e._attr.width + "px",
                textOverflow: this.options.dataLabels.style.textOverflow || "ellipsis"
            }),
            e.shortened = !0),
            e.attr(e._attr),
            e[e.moved ? "animate" : "attr"](t),
            e.moved = !0) : e && e.attr({
                y: -9999
            }))
        }, this)
    }
    ,
    zr.pie.prototype.alignDataLabel = Dr,
    zr.pie.prototype.verifyDataLabelOverflow = function(t) {
        var e, i = this.center, n = this.options, s = n.center, r = n.minSize || 80, o = null !== n.size;
        return o || (null !== s[0] ? e = Math.max(i[2] - Math.max(t[1], t[3]), r) : (e = Math.max(i[2] - t[1] - t[3], r),
        i[0] += (t[3] - t[1]) / 2),
        null !== s[1] ? e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), r) : (e = Math.max(Math.min(e, i[2] - t[0] - t[2]), r),
        i[1] += (t[0] - t[2]) / 2),
        e < i[2] ? (i[2] = e,
        i[3] = Math.min(Ir(n.innerSize || 0, e), e),
        this.translate(i),
        this.drawDataLabels && this.drawDataLabels()) : o = !0),
        o
    }
    ),
    zr.column && (zr.column.prototype.alignDataLabel = function(t, e, i, n, s) {
        var r = this.chart.inverted
          , o = t.series
          , a = t.dlBox || t.shapeArgs
          , l = _r(t.below, t.plotY > _r(this.translatedThreshold, o.yAxis.len))
          , h = _r(i.inside, !!this.options.stacking);
        a && ((n = Nr(a)).y < 0 && (n.height += n.y,
        n.y = 0),
        0 < (a = n.y + n.height - o.yAxis.len) && (n.height -= a),
        r && (n = {
            x: o.yAxis.len - n.y - n.height,
            y: o.xAxis.len - n.x - n.width,
            width: n.height,
            height: n.width
        }),
        h || (r ? (n.x += l ? 0 : n.width,
        n.width = 0) : (n.y += l ? n.height : 0,
        n.height = 0))),
        i.align = _r(i.align, !r || h ? "center" : l ? "right" : "left"),
        i.verticalAlign = _r(i.verticalAlign, r || h ? "middle" : l ? "top" : "bottom"),
        Rr.prototype.alignDataLabel.call(this, t, e, i, n, s),
        t.isLabelJustified && t.contrastColor && t.dataLabel.css({
            color: t.contrastColor
        })
    }
    ),
    jr = (Hr = Nt).Chart,
    Wr = Hr.each,
    Xr = Hr.objectEach,
    Yr = Hr.pick,
    (Hr = Hr.addEvent)(jr, "render", function() {
        var n = [];
        Wr(this.labelCollectors || [], function(t) {
            n = n.concat(t())
        }),
        Wr(this.yAxis || [], function(t) {
            t.options.stackLabels && !t.options.stackLabels.allowOverlap && Xr(t.stacks, function(t) {
                Xr(t, function(t) {
                    n.push(t.label)
                })
            })
        }),
        Wr(this.series || [], function(t) {
            var e = t.options.dataLabels
              , i = t.dataLabelCollections || ["dataLabel"];
            (e.enabled || t._hasPointLabels) && !e.allowOverlap && t.visible && Wr(i, function(e) {
                Wr(t.points, function(t) {
                    t[e] && (t[e].labelrank = Yr(t.labelrank, t.shapeArgs && t.shapeArgs.height),
                    n.push(t[e]))
                })
            })
        }),
        this.hideOverlappingLabels(n)
    }),
    jr.prototype.hideOverlappingLabels = function(t) {
        for (var e, i, n, s, r, o, a, l, h, c, d, u, p, f, g, m, y = t.length, v = 0; v < y; v++)
            (e = t[v]) && (e.oldOpacity = e.opacity,
            e.newOpacity = 1,
            e.width || (i = e.getBBox(),
            e.width = i.width,
            e.height = i.height));
        for (t.sort(function(t, e) {
            return (e.labelrank || 0) - (t.labelrank || 0)
        }),
        v = 0; v < y; v++)
            for (i = t[v],
            e = v + 1; e < y; ++e)
                n = t[e],
                i && n && i !== n && i.placed && n.placed && 0 !== i.newOpacity && 0 !== n.newOpacity && (s = i.alignAttr,
                r = n.alignAttr,
                o = i.parentGroup,
                a = n.parentGroup,
                l = 2 * (!i.box && i.padding || 0),
                h = s.x + o.translateX,
                c = s.y + o.translateY,
                d = i.width - l,
                u = i.height - l,
                p = r.x + a.translateX,
                f = r.y + a.translateY,
                g = n.width - l,
                m = n.height - l,
                !(h + d < p || p + g < h || c + u < f || f + m < c)) && ((i.labelrank < n.labelrank ? i : n).newOpacity = 0);
        Wr(t, function(t) {
            var e, i;
            t && (i = t.newOpacity,
            t.oldOpacity !== i && t.placed && (i ? t.show(!0) : e = function() {
                t.hide()
            }
            ,
            t.alignAttr.opacity = i,
            t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)),
            t.isOld = !0)
        })
    }
    ,
    $r = (Gr = Nt).addEvent,
    qr = Gr.Chart,
    Vr = Gr.createElement,
    Ur = Gr.css,
    Kr = Gr.defaultOptions,
    Zr = Gr.defaultPlotOptions,
    Jr = Gr.each,
    Qr = Gr.extend,
    to = Gr.fireEvent,
    eo = Gr.hasTouch,
    io = Gr.inArray,
    no = Gr.isObject,
    so = Gr.Legend,
    ro = Gr.merge,
    oo = Gr.pick,
    ao = Gr.Point,
    lo = Gr.Series,
    ho = Gr.seriesTypes,
    co = Gr.svg,
    uo = Gr.TrackerMixin = {
        drawTrackerPoint: function() {
            var e = this
              , i = e.chart.pointer
              , n = function(t) {
                var e = i.getPointFromEvent(t);
                void 0 !== e && (i.isDirectTouch = !0,
                e.onMouseOver(t))
            };
            Jr(e.points, function(t) {
                t.graphic && (t.graphic.element.point = t),
                t.dataLabel && (t.dataLabel.div ? t.dataLabel.div.point = t : t.dataLabel.element.point = t)
            }),
            e._hasTracking || (Jr(e.trackerGroups, function(t) {
                e[t] && (e[t].addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function(t) {
                    i.onTrackerMouseOut(t)
                }),
                eo && e[t].on("touchstart", n),
                e.options.cursor && e[t].css(Ur).css({
                    cursor: e.options.cursor
                }))
            }),
            e._hasTracking = !0),
            to(this, "afterDrawTracker")
        },
        drawTrackerGraph: function() {
            var t, e = this, i = e.options, n = i.trackByArea, s = [].concat(n ? e.areaPath : e.graphPath), r = s.length, o = e.chart, a = o.pointer, l = o.renderer, h = o.options.tooltip.snap, c = e.tracker, d = function() {
                o.hoverSeries !== e && e.onMouseOver()
            }, u = "rgba(192,192,192," + (co ? 1e-4 : .002) + ")";
            if (r && !n)
                for (t = r + 1; t--; )
                    "M" === s[t] && s.splice(t + 1, 0, s[t + 1] - h, s[t + 2], "L"),
                    (t && "M" === s[t] || t === r) && s.splice(t, 0, "L", s[t - 2] + h, s[t - 1]);
            c ? c.attr({
                d: s
            }) : e.graph && (e.tracker = l.path(s).attr({
                "stroke-linejoin": "round",
                visibility: e.visible ? "visible" : "hidden",
                stroke: u,
                fill: n ? u : "none",
                "stroke-width": e.graph.strokeWidth() + (n ? 0 : 2 * h),
                zIndex: 2
            }).add(e.group),
            Jr([e.tracker, e.markerGroup], function(t) {
                t.addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function(t) {
                    a.onTrackerMouseOut(t)
                }),
                i.cursor && t.css({
                    cursor: i.cursor
                }),
                eo && t.on("touchstart", d)
            })),
            to(this, "afterDrawTracker")
        }
    },
    ho.column && (ho.column.prototype.drawTracker = uo.drawTrackerPoint),
    ho.pie && (ho.pie.prototype.drawTracker = uo.drawTrackerPoint),
    ho.scatter && (ho.scatter.prototype.drawTracker = uo.drawTrackerPoint),
    Qr(so.prototype, {
        setItemEvents: function(i, t, e) {
            var n = this
              , s = n.chart.renderer.boxWrapper
              , r = "highcharts-legend-" + (i instanceof ao ? "point" : "series") + "-active";
            (e ? t : i.legendGroup).on("mouseover", function() {
                i.setState("hover"),
                s.addClass(r),
                t.css(n.options.itemHoverStyle)
            }).on("mouseout", function() {
                t.css(ro(i.visible ? n.itemStyle : n.itemHiddenStyle)),
                s.removeClass(r),
                i.setState()
            }).on("click", function(t) {
                var e = function() {
                    i.setVisible && i.setVisible()
                };
                s.removeClass(r),
                t = {
                    browserEvent: t
                },
                i.firePointEvent ? i.firePointEvent("legendItemClick", t, e) : to(i, "legendItemClick", t, e)
            })
        },
        createCheckboxForItem: function(e) {
            e.checkbox = Vr("input", {
                type: "checkbox",
                checked: e.selected,
                defaultChecked: e.selected
            }, this.options.itemCheckboxStyle, this.chart.container),
            $r(e.checkbox, "click", function(t) {
                to(e.series || e, "checkboxClick", {
                    checked: t.target.checked,
                    item: e
                }, function() {
                    e.select()
                })
            })
        }
    }),
    Kr.legend.itemStyle.cursor = "pointer",
    Qr(qr.prototype, {
        showResetZoom: function() {
            function t() {
                e.zoomOut()
            }
            var e = this
              , i = Kr.lang
              , n = e.options.chart.resetZoomButton
              , s = n.theme
              , r = s.states
              , o = "chart" === n.relativeTo ? null : "plotBox";
            to(this, "beforeShowResetZoom", null, function() {
                e.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, s, r && r.hover).attr({
                    align: n.position.align,
                    title: i.resetZoomTitle
                }).addClass("highcharts-reset-zoom").add().align(n.position, !1, o)
            })
        },
        zoomOut: function() {
            to(this, "selection", {
                resetSelection: !0
            }, this.zoom)
        },
        zoom: function(t) {
            var i, e, n = this.pointer, s = !1;
            !t || t.resetSelection ? (Jr(this.axes, function(t) {
                i = t.zoom()
            }),
            n.initiated = !1) : Jr(t.xAxis.concat(t.yAxis), function(t) {
                var e = t.axis;
                n[e.isXAxis ? "zoomX" : "zoomY"] && (i = e.zoom(t.min, t.max),
                e.displayBtn && (s = !0))
            }),
            e = this.resetZoomButton,
            s && !e ? this.showResetZoom() : !s && no(e) && (this.resetZoomButton = e.destroy()),
            i && this.redraw(oo(this.options.chart.animation, t && t.animation, this.pointCount < 100))
        },
        pan: function(h, t) {
            var c, d = this, e = d.hoverPoints;
            e && Jr(e, function(t) {
                t.setState()
            }),
            Jr("xy" === t ? [1, 0] : [1], function(t) {
                var e = (t = d[t ? "xAxis" : "yAxis"][0]).horiz
                  , i = h[e ? "chartX" : "chartY"]
                  , n = d[e = e ? "mouseDownX" : "mouseDownY"]
                  , s = (t.pointRange || 0) / 2
                  , r = t.reversed && !d.inverted || !t.reversed && d.inverted ? -1 : 1
                  , o = t.getExtremes()
                  , a = t.toValue(n - i, !0) + s * r
                  , l = (r = t.toValue(n + t.len - i, !0) - s * r) < a
                  , n = l ? r : a
                  , a = l ? a : r;
                0 < (l = (r = Math.min(o.dataMin, s ? o.min : t.toValue(t.toPixels(o.min) - t.minPixelPadding))) - n) && (a += l,
                n = r),
                0 < (l = a - (s = Math.max(o.dataMax, s ? o.max : t.toValue(t.toPixels(o.max) + t.minPixelPadding)))) && (a = s,
                n -= l),
                t.series.length && n !== o.min && a !== o.max && (t.setExtremes(n, a, !1, !1, {
                    trigger: "pan"
                }),
                c = !0),
                d[e] = i
            }),
            c && d.redraw(!1),
            Ur(d.container, {
                cursor: "move"
            })
        }
    }),
    Qr(ao.prototype, {
        select: function(t, e) {
            var i = this
              , n = i.series
              , s = n.chart;
            t = oo(t, !i.selected),
            i.firePointEvent(t ? "select" : "unselect", {
                accumulate: e
            }, function() {
                i.selected = i.options.selected = t,
                n.options.data[io(i, n.data)] = i.options,
                i.setState(t && "select"),
                e || Jr(s.getSelectedPoints(), function(t) {
                    t.selected && t !== i && (t.selected = t.options.selected = !1,
                    n.options.data[io(t, n.data)] = t.options,
                    t.setState(""),
                    t.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(t) {
            var e = this.series.chart
              , i = e.pointer;
            t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted),
            i.runPointActions(t, this)
        },
        onMouseOut: function() {
            var t = this.series.chart;
            this.firePointEvent("mouseOut"),
            Jr(t.hoverPoints || [], function(t) {
                t.setState()
            }),
            t.hoverPoints = t.hoverPoint = null
        },
        importEvents: function() {
            var i, t;
            this.hasImportedEvents || (t = ro((i = this).series.options.point, i.options).events,
            i.events = t,
            Gr.objectEach(t, function(t, e) {
                $r(i, e, t)
            }),
            this.hasImportedEvents = !0)
        },
        setState: function(t, e) {
            var i, n = Math.floor(this.plotX), s = this.plotY, r = this.series, o = r.options.states[t || "normal"] || {}, a = Zr[r.type].marker && r.options.marker, l = a && !1 === a.enabled, h = a && a.states && a.states[t || "normal"] || {}, c = !1 === h.enabled, d = r.stateMarkerGraphic, u = this.marker || {}, p = r.chart, f = r.halo, g = a && r.markerAttribs;
            (t = t || "") === this.state && !e || this.selected && "select" !== t || !1 === o.enabled || t && (c || l && !1 === h.enabled) || t && u.states && u.states[t] && !1 === u.states[t].enabled || (g && (i = r.markerAttribs(this, t)),
            this.graphic ? (this.state && this.graphic.removeClass("highcharts-point-" + this.state),
            t && this.graphic.addClass("highcharts-point-" + t),
            this.graphic.animate(r.pointAttribs(this, t), oo(p.options.chart.animation, o.animation)),
            i && this.graphic.animate(i, oo(p.options.chart.animation, h.animation, a.animation)),
            d && d.hide()) : (t && h && (a = u.symbol || r.symbol,
            d && d.currentSymbol !== a && (d = d.destroy()),
            d ? d[e ? "animate" : "attr"]({
                x: i.x,
                y: i.y
            }) : a && (r.stateMarkerGraphic = d = p.renderer.symbol(a, i.x, i.y, i.width, i.height).add(r.markerGroup),
            d.currentSymbol = a),
            d && d.attr(r.pointAttribs(this, t))),
            d && (d[t && p.isInsidePlot(n, s, p.inverted) ? "show" : "hide"](),
            d.element.point = this)),
            (n = o.halo) && n.size ? (f || (r.halo = f = p.renderer.path().add((this.graphic || d).parentGroup)),
            f.show()[e ? "animate" : "attr"]({
                d: this.haloPath(n.size)
            }),
            f.attr({
                "class": "highcharts-halo highcharts-color-" + oo(this.colorIndex, r.colorIndex) + (this.className ? " " + this.className : "")
            }),
            f.point = this,
            f.attr(Qr({
                fill: this.color || r.color,
                "fill-opacity": n.opacity,
                zIndex: -1
            }, n.attributes))) : f && f.point && f.point.haloPath && f.animate({
                d: f.point.haloPath(0)
            }, null, f.hide),
            this.state = t,
            to(this, "afterSetState"))
        },
        haloPath: function(t) {
            return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
        }
    }),
    Qr(lo.prototype, {
        onMouseOver: function() {
            var t = this.chart
              , e = t.hoverSeries;
            e && e !== this && e.onMouseOut(),
            this.options.events.mouseOver && to(this, "mouseOver"),
            this.setState("hover"),
            t.hoverSeries = this
        },
        onMouseOut: function() {
            var t = this.options
              , e = this.chart
              , i = e.tooltip
              , n = e.hoverPoint;
            e.hoverSeries = null,
            n && n.onMouseOut(),
            this && t.events.mouseOut && to(this, "mouseOut"),
            !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(),
            this.setState()
        },
        setState: function(e) {
            var i = this
              , t = i.options
              , n = i.graph
              , s = t.states
              , r = t.lineWidth
              , t = 0;
            if (e = e || "",
            i.state !== e && (Jr([i.group, i.markerGroup, i.dataLabelsGroup], function(t) {
                t && (i.state && t.removeClass("highcharts-series-" + i.state),
                e && t.addClass("highcharts-series-" + e))
            }),
            !s[i.state = e] || !1 !== s[e].enabled) && (e && (r = s[e].lineWidth || r + (s[e].lineWidthPlus || 0)),
            n && !n.dashstyle))
                for (r = {
                    "stroke-width": r
                },
                n.animate(r, oo(s[e || "normal"] && s[e || "normal"].animation, i.chart.options.chart.animation)); i["zone-graph-" + t]; )
                    i["zone-graph-" + t].attr(r),
                    t += 1
        },
        setVisible: function(e, t) {
            var i = this
              , n = i.chart
              , s = i.legendItem
              , r = n.options.chart.ignoreHiddenSeries
              , o = i.visible
              , a = (i.visible = e = i.options.visible = i.userOptions.visible = void 0 === e ? !o : e) ? "show" : "hide";
            Jr(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function(t) {
                i[t] && i[t][a]()
            }),
            n.hoverSeries !== i && (n.hoverPoint && n.hoverPoint.series) !== i || i.onMouseOut(),
            s && n.legend.colorizeItem(i, e),
            i.isDirty = !0,
            i.options.stacking && Jr(n.series, function(t) {
                t.options.stacking && t.visible && (t.isDirty = !0)
            }),
            Jr(i.linkedSeries, function(t) {
                t.setVisible(e, !1)
            }),
            r && (n.isDirtyBox = !0),
            !1 !== t && n.redraw(),
            to(i, a)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(t) {
            this.selected = t = void 0 === t ? !this.selected : t,
            this.checkbox && (this.checkbox.checked = t),
            to(this, t ? "select" : "unselect")
        },
        drawTracker: uo.drawTrackerGraph
    }),
    fo = (po = Nt).Chart,
    go = po.each,
    mo = po.inArray,
    yo = po.isArray,
    vo = po.isObject,
    xo = po.pick,
    bo = po.splat,
    fo.prototype.setResponsive = function(e) {
        var t = this.options.responsive
          , i = []
          , n = this.currentResponsive;
        t && t.rules && go(t.rules, function(t) {
            void 0 === t._id && (t._id = po.uniqueKey()),
            this.matchResponsiveRule(t, i, e)
        }, this);
        var s = po.merge.apply(0, po.map(i, function(e) {
            return po.find(t.rules, function(t) {
                return t._id === e
            }).chartOptions
        }));
        (i = i.toString() || void 0) !== (n && n.ruleIds) && (n && this.update(n.undoOptions, e),
        i ? (this.currentResponsive = {
            ruleIds: i,
            mergedOptions: s,
            undoOptions: this.currentOptions(s)
        },
        this.update(s, e)) : this.currentResponsive = void 0)
    }
    ,
    fo.prototype.matchResponsiveRule = function(t, e) {
        var i = t.condition;
        (i.callback || function() {
            return this.chartWidth <= xo(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= xo(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= xo(i.minWidth, 0) && this.chartHeight >= xo(i.minHeight, 0)
        }
        ).call(this) && e.push(t._id)
    }
    ,
    fo.prototype.currentOptions = function(t) {
        var e = {};
        return function o(t, i, n, s) {
            var r;
            po.objectEach(t, function(t, e) {
                if (!s && -1 < mo(e, ["series", "xAxis", "yAxis"]))
                    for (t = bo(t),
                    n[e] = [],
                    r = 0; r < t.length; r++)
                        i[e][r] && (n[e][r] = {},
                        o(t[r], i[e][r], n[e][r], s + 1));
                else
                    vo(t) ? (n[e] = yo(t) ? [] : {},
                    o(t, i[e] || {}, n[e], s + 1)) : n[e] = i[e] || null
            })
        }(t, this.options, e, 0),
        e
    }
    ,
    Nt
}),
function(t) {
    "object" == typeof module && module.exports ? module.exports = t : t(Highcharts)
}(function(t) {
    var s, p, d, e, i, l, f, u, r, m, y, g, v, x, o, a;
    (s = t).ajax = function(t) {
        var i = s.merge(!0, {
            url: !1,
            type: "GET",
            dataType: "json",
            success: !1,
            error: !1,
            data: !1,
            headers: {}
        }, t);
        t = {
            json: "application/json",
            xml: "application/xml",
            text: "text/plain",
            octet: "application/octet-stream"
        };
        var n = new XMLHttpRequest;
        if (!i.url)
            return !1;
        n.open(i.type.toUpperCase(), i.url, !0),
        n.setRequestHeader("Content-Type", t[i.dataType] || t.text),
        s.objectEach(i.headers, function(t, e) {
            n.setRequestHeader(e, t)
        }),
        n.onreadystatechange = function() {
            var t;
            if (4 === n.readyState) {
                if (200 === n.status) {
                    if (t = n.responseText,
                    "json" === i.dataType)
                        try {
                            t = JSON.parse(t)
                        } catch (e) {
                            return void (i.error && i.error(n, e))
                        }
                    return i.success && i.success(t)
                }
                i.error && i.error(n, n.responseText)
            }
        }
        ;
        try {
            i.data = JSON.stringify(i.data)
        } catch (e) {}
        n.send(i.data || !0)
    }
    ,
    e = (p = t).addEvent,
    i = p.Chart,
    l = p.win.document,
    f = p.each,
    u = p.objectEach,
    r = p.pick,
    m = p.inArray,
    y = p.isNumber,
    g = p.merge,
    v = p.splat,
    x = p.fireEvent,
    o = p.some,
    a = function(t, e, i) {
        this.init(t, e, i)
    }
    ,
    p.extend(a.prototype, {
        init: function(t, e, i) {
            var n, s = t.decimalPoint;
            e && (this.chartOptions = e),
            i && (this.chart = i),
            "." !== s && "," !== s && (s = void 0),
            this.options = t,
            this.columns = t.columns || this.rowsToColumns(t.rows) || [],
            this.firstRowAsNames = r(t.firstRowAsNames, this.firstRowAsNames, !0),
            this.decimalRegex = s && new RegExp("^(-?[0-9]+)" + s + "([0-9]+)$"),
            this.rawColumns = [],
            this.columns.length && (this.dataFound(),
            n = !0),
            !(n = (n = (n = (n = n || this.fetchLiveData()) || !!this.parseCSV().length) || !!this.parseTable().length) || this.parseGoogleSpreadsheet()) && t.afterComplete && t.afterComplete()
        },
        getColumnDistribution: function() {
            var s, r = this.chartOptions, t = this.options, e = [], o = function(t) {
                return (p.seriesTypes[t || "line"].prototype.pointArrayMap || [0]).length
            }, a = r && r.chart && r.chart.type, l = [], h = [], c = 0;
            f(r && r.series || [], function(t) {
                l.push(o(t.type || a))
            }),
            f(t && t.seriesMapping || [], function(t) {
                e.push(t.x || 0)
            }),
            0 === e.length && e.push(0),
            f(t && t.seriesMapping || [], function(t) {
                var i = new d
                  , e = l[c] || o(a)
                  , n = p.seriesTypes[((r && r.series || [])[c] || {}).type || a || "line"].prototype.pointArrayMap || ["y"];
                for (i.addColumnReader(t.x, "x"),
                u(t, function(t, e) {
                    "x" !== e && i.addColumnReader(t, e)
                }),
                s = 0; s < e; s++)
                    i.hasReader(n[s]) || i.addColumnReader(void 0, n[s]);
                h.push(i),
                c++
            }),
            void 0 === (t = p.seriesTypes[a || "line"].prototype.pointArrayMap) && (t = ["y"]),
            this.valueCount = {
                global: o(a),
                xColumns: e,
                individual: l,
                seriesBuilders: h,
                globalPointArrayMap: t
            }
        },
        dataFound: function() {
            this.options.switchRowsAndColumns && (this.columns = this.rowsToColumns(this.columns)),
            this.getColumnDistribution(),
            this.parseTypes(),
            !1 !== this.parsed() && this.complete()
        },
        parseCSV: function(t) {
            var h = this
              , c = t || this.options
              , e = c.csv;
            t = "undefined" != typeof c.startRow && c.startRow ? c.startRow : 0;
            var f, i, a, l, n = c.endRow || Number.MAX_VALUE, g = "undefined" != typeof c.startColumn && c.startColumn ? c.startColumn : 0, m = c.endColumn || Number.MAX_VALUE, s = 0, y = [], d = {
                ",": 0,
                ";": 0,
                "\\t": 0
            }, v = this.columns = [];
            if (e && c.beforeParse && (e = c.beforeParse.call(this, e)),
            e) {
                e = e.replace(/\\r\\n/g, "\\n").replace(/\\r/g, "\\n").split(c.lineDelimiter || "\\n"),
                (!t || t < 0) && (t = 0),
                (!n || n >= e.length) && (n = e.length - 1),
                f = c.itemDelimiter ? c.itemDelimiter : (f = null,
                l = a = 0,
                o(e, function(t, e) {
                    var i, n, s = !1, r = "";
                    if (13 < e)
                        return !0;
                    for (var o = 0; o < t.length && (e = t[o],
                    i = t[o + 1],
                    n = t[o - 1],
                    "#" !== e); o++) {
                        if ('"' === e)
                            if (s) {
                                if ('"' !== n && '"' !== i) {
                                    for (; " " === i && o < t.length; )
                                        i = t[++o];
                                    "undefined" != typeof d[i] && d[i]++,
                                    s = !1
                                }
                            } else
                                s = !0;
                        else
                            "undefined" != typeof d[e] ? (r = r.trim(),
                            isNaN(Date.parse(r)) && !isNaN(r) && isFinite(r) || d[e]++,
                            r = "") : r += e;
                        "," === e && l++,
                        "." === e && a++
                    }
                }),
                i = d[";"] > d[","] ? ";" : ",",
                c.decimalPoint || (c.decimalPoint = l < a ? "." : ",",
                h.decimalRegex = new RegExp("^(-?[0-9]+)" + c.decimalPoint + "([0-9]+)$")),
                i);
                for (var r = 0, s = t; s <= n; s++)
                    "#" === e[s][0] ? r++ : function(e, t, i, n) {
                        function s(t) {
                            l = e[t],
                            h = e[t - 1],
                            c = e[t + 1]
                        }
                        function r(t) {
                            y.length < p + 1 && y.push([t]),
                            y[p][y[p].length - 1] !== t && y[p].push(t)
                        }
                        function o() {
                            u < g || m < u ? (++u,
                            d = "") : (!isNaN(parseFloat(d)) && isFinite(d) ? (d = parseFloat(d),
                            r("number")) : isNaN(Date.parse(d)) ? r("string") : (d = d.replace(/\\//g, "-"),
                            r("date")),
                            v.length < p + 1 && v.push([]),
                            i || (v[p][t] = d),
                            d = "",
                            ++p,
                            ++u)
                        }
                        var a = 0
                          , l = ""
                          , h = ""
                          , c = ""
                          , d = ""
                          , u = 0
                          , p = 0;
                        if (e.trim().length && "#" !== e.trim()[0]) {
                            for (; a < e.length; a++) {
                                if (s(a),
                                "#" === l)
                                    return o();
                                if ('"' === l)
                                    for (s(++a); a < e.length && ('"' !== l || '"' === h || '"' === c); )
                                        ('"' !== l || '"' === l && '"' !== h) && (d += l),
                                        s(++a);
                                else
                                    n && n[l] ? n[l](l, d) && o() : l === f ? o() : d += l
                            }
                            o()
                        }
                    }(e[s], s - t - r);
                c.columnTypes && 0 !== c.columnTypes.length || !y.length || !y[0].length || "date" !== y[0][1] || c.dateFormat || (c.dateFormat = function(t, e) {
                    var i, n, s, r = 0, o = !1, a = [], l = [];
                    for ((!e || e > t.length) && (e = t.length); r < e; r++)
                        if ("undefined" != typeof t[r] && t[r] && t[r].length)
                            for (i = t[r].trim().replace(/\\//g, " ").replace(/\\-/g, " ").split(" "),
                            n = ["", "", ""],
                            s = 0; s < i.length; s++)
                                s < n.length && (i[s] = parseInt(i[s], 10),
                                i[s] && (l[s] = !l[s] || l[s] < i[s] ? i[s] : l[s],
                                "undefined" != typeof a[s] ? a[s] !== i[s] && (a[s] = !1) : a[s] = i[s],
                                31 < i[s] ? n[s] = i[s] < 100 ? "YY" : "YYYY" : 12 < i[s] && i[s] <= 31 ? (n[s] = "dd",
                                o = !0) : n[s].length || (n[s] = "mm")));
                    if (o) {
                        for (s = 0; s < a.length; s++)
                            !1 !== a[s] ? 12 < l[s] && "YY" !== n[s] && "YYYY" !== n[s] && (n[s] = "YY") : 12 < l[s] && "mm" === n[s] && (n[s] = "dd");
                        return 3 === n.length && "dd" === n[1] && "dd" === n[2] && (n[2] = "YY"),
                        t = n.join("/"),
                        (c.dateFormats || h.dateFormats)[t] ? t : (x("deduceDateFailed"),
                        "YYYY/mm/dd")
                    }
                    return "YYYY/mm/dd"
                }(v[0])),
                this.dataFound()
            }
            return v
        },
        parseTable: function() {
            var t = this.options
              , e = t.table
              , n = this.columns
              , s = t.startRow || 0
              , r = t.endRow || Number.MAX_VALUE
              , o = t.startColumn || 0
              , a = t.endColumn || Number.MAX_VALUE;
            return e && ("string" == typeof e && (e = l.getElementById(e)),
            f(e.getElementsByTagName("tr"), function(t, i) {
                s <= i && i <= r && f(t.children, function(t, e) {
                    ("TD" === t.tagName || "TH" === t.tagName) && o <= e && e <= a && (n[e - o] || (n[e - o] = []),
                    n[e - o][i - s] = t.innerHTML)
                })
            }),
            this.dataFound()),
            n
        },
        fetchLiveData: function() {
            var r = this.chart
              , o = this.options
              , a = 0
              , l = o.enablePolling
              , h = 1e3 * (o.dataRefreshRate || 2)
              , e = g(o);
            return !(!o || !(o.csvURL || o.rowsURL || o.columnsURL)) && (h < 1e3 && (h = 1e3),
            delete o.csvURL,
            delete o.rowsURL,
            delete o.columnsURL,
            function c(s) {
                function t(t, e, i) {
                    function n() {
                        l && r.liveDataURL === t && (r.liveDataTimeout = setTimeout(c, h))
                    }
                    return t && 0 === t.indexOf("http") ? (s && (clearTimeout(r.liveDataTimeout),
                    r.liveDataURL = t),
                    p.ajax({
                        url: t,
                        dataType: i || "json",
                        success: function(t) {
                            r && r.series && e(t),
                            n()
                        },
                        error: function(t, e) {
                            return ++a < 3 && n(),
                            o.error && o.error(e, t)
                        }
                    }),
                    1) : (t && o.error && o.error("Invalid URL"),
                    0)
                }
                t(e.csvURL, function(t) {
                    r.update({
                        data: {
                            csv: t
                        }
                    })
                }, "text") || t(e.rowsURL, function(t) {
                    r.update({
                        data: {
                            rows: t
                        }
                    })
                }) || t(e.columnsURL, function(t) {
                    r.update({
                        data: {
                            columns: t
                        }
                    })
                })
            }(!0),
            o && (o.csvURL || o.rowsURL || o.columnsURL))
        },
        parseGoogleSpreadsheet: function() {
            var i = this.options
              , n = i.googleSpreadsheetKey
              , l = this.chart
              , s = i.googleSpreadsheetWorksheet || 1
              , h = i.startRow || 0
              , c = i.endRow || Number.MAX_VALUE
              , d = i.startColumn || 0
              , u = i.endColumn || Number.MAX_VALUE;
            i.dataRefreshRate;
            return n && (delete i.googleSpreadsheetKey,
            function r(e) {
                var t = ["https://spreadsheets.google.com/feeds/cells", n, s, "public/values?alt=json"].join("/");
                p.ajax({
                    url: t,
                    dataType: "json",
                    success: function(t) {
                        e(t),
                        i.enablePolling && setTimeout(function() {
                            r(e)
                        }, i.dataRefreshRate)
                    },
                    error: function(t, e) {
                        return i.error && i.error(e, t)
                    }
                })
            }(function(t) {
                var e, i, n, s, r = [], o = ((t = t.feed.entry) || []).length, a = 0;
                if (!t || 0 === t.length)
                    return !1;
                for (s = 0; s < o; s++)
                    e = t[s],
                    a = Math.max(a, e.gs$cell.col);
                for (s = 0; s < a; s++)
                    d <= s && s <= u && (r[s - d] = []);
                for (s = 0; s < o; s++)
                    a = (e = t[s]).gs$cell.row - 1,
                    i = e.gs$cell.col - 1,
                    d <= i && i <= u && h <= a && a <= c && (n = e.gs$cell || e.content,
                    e = null,
                    n.numericValue ? e = 0 <= n.$t.indexOf("/") || 0 <= n.$t.indexOf("-") ? n.$t : 0 < n.$t.indexOf("%") ? 100 * parseFloat(n.numericValue) : parseFloat(n.numericValue) : n.$t && n.$t.length && (e = n.$t),
                    r[i - d][a - h] = e);
                f(r, function(t) {
                    for (s = 0; s < t.length; s++)
                        void 0 === t[s] && (t[s] = null)
                }),
                l && l.series && l.update({
                    data: {
                        columns: r
                    }
                })
            })),
            !1
        },
        trim: function(t, e) {
            return "string" == typeof t && (t = t.replace(/^\\s+|\\s+$/g, ""),
            e && /^[0-9\\s]+$/.test(t) && (t = t.replace(/\\s/g, "")),
            this.decimalRegex && (t = t.replace(this.decimalRegex, "$1.$2"))),
            t
        },
        parseTypes: function() {
            for (var t = this.columns, e = t.length; e--; )
                this.parseColumn(t[e], e)
        },
        parseColumn: function(t, e) {
            var i, n, s, r, o, a, l = this.rawColumns, h = this.columns, c = t.length, d = this.firstRowAsNames, u = -1 !== m(e, this.valueCount.xColumns), p = [], f = this.chartOptions, g = (this.options.columnTypes || [])[e], f = u && (f && f.xAxis && "category" === v(f.xAxis)[0].type || "string" === g);
            for (l[e] || (l[e] = []); c--; )
                i = p[c] || t[c],
                s = this.trim(i),
                r = this.trim(i, !0),
                n = parseFloat(r),
                void 0 === l[e][c] && (l[e][c] = s),
                f || 0 === c && d ? t[c] = "" + s : +r === n ? (31536e6 < (t[c] = n) && "float" !== g ? t.isDatetime = !0 : t.isNumeric = !0,
                void 0 !== t[c + 1] && (a = n > t[c + 1])) : (s && s.length && (o = this.parseDate(i)),
                u && y(o) && "float" !== g ? (p[c] = i,
                t[c] = o,
                t.isDatetime = !0,
                void 0 !== t[c + 1] && ((i = o > t[c + 1]) !== a && void 0 !== a && (this.alternativeFormat ? (this.dateFormat = this.alternativeFormat,
                c = t.length,
                this.alternativeFormat = this.dateFormats[this.dateFormat].alternative) : t.unsorted = !0),
                a = i)) : (t[c] = "" === s ? null : s,
                0 !== c && (t.isDatetime || t.isNumeric) && (t.mixed = !0)));
            if (u && t.mixed && (h[e] = l[e]),
            u && a && this.options.sort)
                for (e = 0; e < h.length; e++)
                    h[e].reverse(),
                    d && h[e].unshift(h[e].pop())
        },
        dateFormats: {
            "YYYY/mm/dd": {
                regex: /^([0-9]{4})[\\-\\/\\.]([0-9]{1,2})[\\-\\/\\.]([0-9]{1,2})$/,
                parser: function(t) {
                    return Date.UTC(+t[1], t[2] - 1, +t[3])
                }
            },
            "dd/mm/YYYY": {
                regex: /^([0-9]{1,2})[\\-\\/\\.]([0-9]{1,2})[\\-\\/\\.]([0-9]{4})$/,
                parser: function(t) {
                    return Date.UTC(+t[3], t[2] - 1, +t[1])
                },
                alternative: "mm/dd/YYYY"
            },
            "mm/dd/YYYY": {
                regex: /^([0-9]{1,2})[\\-\\/\\.]([0-9]{1,2})[\\-\\/\\.]([0-9]{4})$/,
                parser: function(t) {
                    return Date.UTC(+t[3], t[1] - 1, +t[2])
                }
            },
            "dd/mm/YY": {
                regex: /^([0-9]{1,2})[\\-\\/\\.]([0-9]{1,2})[\\-\\/\\.]([0-9]{2})$/,
                parser: function(t) {
                    var e = (e = +t[3]) > (new Date).getFullYear() - 2e3 ? e + 1900 : e + 2e3;
                    return Date.UTC(e, t[2] - 1, +t[1])
                },
                alternative: "mm/dd/YY"
            },
            "mm/dd/YY": {
                regex: /^([0-9]{1,2})[\\-\\/\\.]([0-9]{1,2})[\\-\\/\\.]([0-9]{2})$/,
                parser: function(t) {
                    return Date.UTC(+t[3] + 2e3, t[1] - 1, +t[2])
                }
            }
        },
        parseDate: function(t) {
            var e, i, n, s = this.options.parseDate, r = this.options.dateFormat || this.dateFormat;
            if (s)
                e = s(t);
            else if ("string" == typeof t) {
                if (r)
                    (s = this.dateFormats[r]) || (s = this.dateFormats["YYYY/mm/dd"]),
                    (n = t.match(s.regex)) && (e = s.parser(n));
                else
                    for (i in this.dateFormats)
                        if (s = this.dateFormats[i],
                        n = t.match(s.regex)) {
                            this.dateFormat = i,
                            this.alternativeFormat = s.alternative,
                            e = s.parser(n);
                            break
                        }
                n || ("object" == typeof (n = Date.parse(t)) && null !== n && n.getTime ? e = n.getTime() - 6e4 * n.getTimezoneOffset() : y(n) && (e = n - 6e4 * new Date(n).getTimezoneOffset()))
            }
            return e
        },
        rowsToColumns: function(t) {
            var e, i, n, s, r;
            if (t)
                for (r = [],
                i = t.length,
                e = 0; e < i; e++)
                    for (s = t[e].length,
                    n = 0; n < s; n++)
                        r[n] || (r[n] = []),
                        r[n][e] = t[e][n];
            return r
        },
        parsed: function() {
            if (this.options.parsed)
                return this.options.parsed.call(this, this.columns)
        },
        getFreeIndexes: function(t, e) {
            for (var i, n = [], s = [], r = 0; r < t; r += 1)
                n.push(!0);
            for (t = 0; t < e.length; t += 1)
                for (i = e[t].getReferencedColumnIndexes(),
                r = 0; r < i.length; r += 1)
                    n[i[r]] = !1;
            for (r = 0; r < n.length; r += 1)
                n[r] && s.push(r);
            return s
        },
        complete: function() {
            var t, e, i, n, s, r, o = this.columns, a = this.options, l = [];
            if (a.complete || a.afterComplete) {
                if (this.firstRowAsNames)
                    for (n = 0; n < o.length; n++)
                        o[n].name = o[n].shift();
                for (e = [],
                i = this.getFreeIndexes(o.length, this.valueCount.seriesBuilders),
                n = 0; n < this.valueCount.seriesBuilders.length; n++)
                    (r = this.valueCount.seriesBuilders[n]).populateColumns(i) && l.push(r);
                for (; 0 < i.length; ) {
                    for ((r = new d).addColumnReader(0, "x"),
                    -1 !== (n = m(0, i)) && i.splice(n, 1),
                    n = 0; n < this.valueCount.global; n++)
                        r.addColumnReader(void 0, this.valueCount.globalPointArrayMap[n]);
                    r.populateColumns(i) && l.push(r)
                }
                if (0 < l.length && 0 < l[0].readers.length && (void 0 !== (r = o[l[0].readers[0].columnIndex]) && (r.isDatetime ? t = "datetime" : r.isNumeric || (t = "category"))),
                "category" === t)
                    for (n = 0; n < l.length; n++)
                        for (r = l[n],
                        i = 0; i < r.readers.length; i++)
                            "x" === r.readers[i].configName && (r.readers[i].configName = "name");
                for (n = 0; n < l.length; n++) {
                    for (r = l[n],
                    i = [],
                    s = 0; s < o[0].length; s++)
                        i[s] = r.read(o, s);
                    e[n] = {
                        data: i
                    },
                    r.name && (e[n].name = r.name),
                    "category" === t && (e[n].turboThreshold = 0)
                }
                o = {
                    series: e
                },
                t && (o.xAxis = {
                    type: t
                },
                "category" === t && (o.xAxis.uniqueNames = !1)),
                a.complete && a.complete(o),
                a.afterComplete && a.afterComplete(o)
            }
        },
        update: function(t, e) {
            var i = this.chart;
            t && (t.afterComplete = function(t) {
                t.xAxis && i.xAxis[0] && t.xAxis.type === i.xAxis[0].options.type && delete t.xAxis,
                i.update(t, e, !0)
            }
            ,
            g(!0, this.options, t),
            this.init(this.options))
        }
    }),
    p.Data = a,
    p.data = function(t, e) {
        return new a(t,e)
    }
    ,
    e(i, "init", function(t) {
        var n = this
          , s = t.args[0]
          , r = t.args[1];
        s && s.data && !n.hasDataDef && (n.hasDataDef = !0,
        n.data = new a(p.extend(s.data, {
            afterComplete: function(t) {
                var e, i;
                if (s.hasOwnProperty("series"))
                    if ("object" == typeof s.series)
                        for (e = Math.max(s.series.length, t && t.series ? t.series.length : 0); e--; )
                            i = s.series[e] || {},
                            s.series[e] = g(i, t && t.series ? t.series[e] : {});
                    else
                        delete s.series;
                s = g(t, s),
                n.init(s, r)
            }
        }),s,n),
        t.preventDefault())
    }),
    (d = function() {
        this.readers = [],
        this.pointIsArray = !0
    }
    ).prototype.populateColumns = function(e) {
        var i = !0;
        return f(this.readers, function(t) {
            void 0 === t.columnIndex && (t.columnIndex = e.shift())
        }),
        f(this.readers, function(t) {
            void 0 === t.columnIndex && (i = !1)
        }),
        i
    }
    ,
    d.prototype.read = function(i, n) {
        var t, s = this.pointIsArray, r = s ? [] : {};
        return f(this.readers, function(t) {
            var e = i[t.columnIndex][n];
            s ? r.push(e) : 0 < t.configName.indexOf(".") ? p.Point.prototype.setNestedProperty(r, e, t.configName) : r[t.configName] = e
        }),
        void 0 === this.name && 2 <= this.readers.length && (2 <= (t = this.getReferencedColumnIndexes()).length && (t.shift(),
        t.sort(),
        this.name = i[t.shift()].name)),
        r
    }
    ,
    d.prototype.addColumnReader = function(t, e) {
        this.readers.push({
            columnIndex: t,
            configName: e
        }),
        "x" !== e && "y" !== e && void 0 !== e && (this.pointIsArray = !1)
    }
    ,
    d.prototype.getReferencedColumnIndexes = function() {
        for (var t, e = [], i = 0; i < this.readers.length; i += 1)
            void 0 !== (t = this.readers[i]).columnIndex && e.push(t.columnIndex);
        return e
    }
    ,
    d.prototype.hasReader = function(t) {
        for (var e = 0; e < this.readers.length; e += 1)
            if (this.readers[e].configName === t)
                return !0
    }
});
`;
