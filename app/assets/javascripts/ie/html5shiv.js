/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
(function (q, f) {
    function r() {
        var a = g.elements;
        return"string" == typeof a ? a.split(" ") : a
    }

    function i(a) {
        var b = s[a[t]];
        b || (b = {}, j++, a[t] = j, s[j] = b);
        return b
    }

    function u(a, b, c) {
        b || (b = f);
        if (h)return b.createElement(a);
        c || (c = i(b));
        b = c.cache[a] ? c.cache[a].cloneNode() : w.test(a) ? (c.cache[a] = c.createElem(a)).cloneNode() : c.createElem(a);
        return b.canHaveChildren && !x.test(a) ? c.frag.appendChild(b) : b
    }

    function v(a) {
        a || (a = f);
        var b = i(a);
        if (g.shivCSS && !k && !b.hasCSS) {
            var c, d = a;
            c = d.createElement("p");
            d = d.getElementsByTagName("head")[0] ||
                d.documentElement;
            c.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
            c = d.insertBefore(c.lastChild, d.firstChild);
            b.hasCSS = !!c
        }
        if (!h) {
            var e = a;
            b.cache || (b.cache = {}, b.createElem = e.createElement, b.createFrag = e.createDocumentFragment, b.frag = b.createFrag());
            e.createElement = function (a) {
                return!g.shivMethods ? b.createElem(a) : u(a, e, b)
            };
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                r().join().replace(/\w+/g, function (a) {
                    b.createElem(a);
                    b.frag.createElement(a);
                    return'c("' + a + '")'
                }) + ");return n}")(g, b.frag)
        }
        return a
    }

    var l = q.html5 || {}, x = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, w = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, k, t = "_html5shiv", j = 0, s = {}, h;
    try {
        var m = f.createElement("a");
        m.innerHTML = "<xyz></xyz>";
        k = "hidden"in m;
        var n;
        if (!(n = 1 == m.childNodes.length)) {
            f.createElement("a");
            var p = f.createDocumentFragment();
            n = "undefined" == typeof p.cloneNode || "undefined" == typeof p.createDocumentFragment || "undefined" == typeof p.createElement
        }
        h = n
    } catch (y) {
        h = k = !0
    }
    var g = {elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", version: "3.6.2pre", shivCSS: !1 !== l.shivCSS, supportsUnknownElements: h, shivMethods: !1 !== l.shivMethods, type: "default", shivDocument: v, createElement: u, createDocumentFragment: function (a, b) {
        a || (a = f);
        if (h)return a.createDocumentFragment();
        for (var b = b || i(a), c = b.frag.cloneNode(), d = 0, e = r(), g = e.length; d < g; d++)c.createElement(e[d]);
        return c
    }};
    q.html5 = g;
    v(f)
})(this, document);