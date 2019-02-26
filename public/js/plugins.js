
      



! function(t) {
    "use strict";
    t.fn.succinct = function(e) {
        var i = t.extend({
            size: 240,
            omission: "...",
            ignore: !0
        }, e);
        return this.each(function() {
            var e, o, n = t(this),
                r = /[!-\/:-@\[-`{-~]$/,
                s = function() {
                    n.each(function() {
                        e = t(this).html(), e.length > i.size && (o = t.trim(e).substring(0, i.size).split(" ").slice(0, -1).join(" "), i.ignore && (o = o.replace(r, "")), t(this).html(o + i.omission))
                    })
                };
            s()
        })
    }
}(jQuery), window.CSbuttons = window.CSbuttons || {}, CSbuttons.cache = {
        shareButtons: $(".social-sharing")
    }, CSbuttons.init = function() {
        CSbuttons.socialSharing()
    }, CSbuttons.socialSharing = function() {
        var t = CSbuttons.cache.shareButtons,
            e = t.attr("data-permalink"),
            i = t.find("a"),
            o = (t.find("span.share-count"), $(".share-facebook")),
            n = $(".share-twitter"),
            r = $(".share-pinterest"),
            s = $(".share-google");
        o.length && $.getJSON("https://graph.facebook.com/?id=" + e + "&callback=?", function(t) {
            t.shares ? o.find(".share-count").text(t.shares).addClass("is-loaded") : o.find(".share-count").remove()
        }), n.length && $.getJSON("https://cdn.api.twitter.com/1/urls/count.json?url=" + e + "&callback=?", function(t) {
            t.count > 0 ? n.find(".share-count").text(t.count).addClass("is-loaded") : n.find(".share-count").remove()
        }), r.length && $.getJSON("https://api.pinterest.com/v1/urls/count.json?url=" + e + "&callback=?", function(t) {
            t.count > 0 ? r.find(".share-count").text(t.count).addClass("is-loaded") : r.find(".share-count").remove()
        }), s.length && s.find(".share-count").addClass("is-loaded"), i.on("click", function(t) {
            t.preventDefault();
            var e = $(this),
                i = e.attr("class").replace("-", "_"),
                o = e.attr("href"),
                n = 700,
                r = 400;
            switch (i) {
                case "share-twitter":
                    r = 300;
                    break;
                case "share-fancy":
                    n = 480, r = 720;
                    break;
                case "share-google":
                    n = 500
            }
            window.open(o, i, "width=" + n + ", height=" + r)
        })
    }, $(function() {
        window.CSbuttons.init()
    }),
    function(t) {
        t.fn.succinct = function(e) {
            var i = {
                    size: 240,
                    omission: "...",
                    ignore: !0
                },
                e = t.extend(i, e);
            return this.each(function() {
                var i, o, n = t(this),
                    r = /[!-\/:-@\[-`{-~]$/,
                    s = function() {
                        n.each(function() {
                            i = t(this).text(), i.length > e.size && (o = t.trim(i).substring(0, e.size).split(" ").slice(0, -1).join(" "), e.ignore && (o = o.replace(r, "")), t(this).text(o + e.omission))
                        })
                    },
                    a = function() {
                        s()
                    };
                a()
            })
        }
    }(jQuery), ! function(t) {
        var e = function() {
                var e, i = [],
                    o = !1,
                    n = function() {
                        clearTimeout(e), e = setTimeout(r, 100)
                    },
                    r = function() {
                        for (var t = 0, e = i.length; e > t; t++) i[t].apply()
                    };
                return {
                    register: function(e) {
                        i.push(e), o === !1 && (t(window).bind("resize", n), o = !0)
                    },
                    unregister: function(t) {
                        for (var e = 0, o = i.length; o > e; e++)
                            if (i[e] == t) {
                                delete i[e];
                                break
                            }
                    }
                }
            }(),
            i = function(i, o) {
                this.element = t(i), this.dropdown = t('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#">' + o.text + ' <b class="caret"></b></a><ul class="dropdown-menu"></ul></li>').prependTo(this.element), this.element.parent().is(".tabs-below") && this.dropdown.addClass("dropup"), e.register(t.proxy(this.layout, this)), this.layout()
            };
        i.prototype = {
            constructor: i,
            layout: function() {
                var e = [];
                this.dropdown.removeClass("hide"), this.element.append(this.dropdown.find("li")).find(">li").not(".tabdrop").each(function() {
                    this.offsetTop > 0 && e.push(this)
                }), e.length > 0 ? (e = t(e), this.dropdown.find("ul").empty().append(e), 1 == this.dropdown.find(".active").length ? this.dropdown.addClass("active") : this.dropdown.removeClass("active")) : this.dropdown.addClass("hide")
            }
        }, t.fn.tabdrop = function(e) {
            return this.each(function() {
                var o = t(this),
                    n = o.data("tabdrop"),
                    r = "object" == typeof e && e;
                n || o.data("tabdrop", n = new i(this, t.extend({}, t.fn.tabdrop.defaults, r))), "string" == typeof e && n[e]()
            })
        }, t.fn.tabdrop.defaults = {
            text: '<i class="icon-align-justify"></i>'
        }, t.fn.tabdrop.Constructor = i
    }(window.jQuery), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(t) {
        var e, i, o, n, r, s, a = "Close",
            u = "BeforeClose",
            p = "AfterClose",
            l = "BeforeAppend",
            c = "MarkupParse",
            d = "Open",
            f = "Change",
            h = "mfp",
            m = "." + h,
            y = "mfp-ready",
            g = "mfp-removing",
            v = "mfp-prevent-close",
            b = function() {},
            I = !!window.jQuery,
            w = t(window),
            _ = function(t, i) {
                e.ev.on(h + t + m, i)
            },
            x = function(e, i, o, n) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, o && (r.innerHTML = o), n ? i && i.appendChild(r) : (r = t(r), i && r.appendTo(i)), r
            },
            C = function(i, o) {
                e.ev.triggerHandler(h + i, o), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(o) ? o : [o]))
            },
            z = function(i) {
                return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = i), e.currTemplate.closeBtn
            },
            E = function() {
                t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
            },
            S = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        b.prototype = {
            constructor: b,
            init: function() {
                var i = navigator.appVersion;
                e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = S(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var n;
                if (i.isObj === !1) {
                    e.items = i.items.toArray(), e.index = 0;
                    var s, a = i.items;
                    for (n = 0; n < a.length; n++)
                        if (s = a[n], s.parsed && (s = s.el[0]), s === i.el[0]) {
                            e.index = n;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], r = "", e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = x("bg").on("click" + m, function() {
                    e.close()
                }), e.wrap = x("wrap").attr("tabindex", -1).on("click" + m, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = x("container", e.wrap)), e.contentContainer = x("content"), e.st.preloader && (e.preloader = x("preloader", e.container, e.st.tLoading));
                var u = t.magnificPopup.modules;
                for (n = 0; n < u.length; n++) {
                    var p = u[n];
                    p = p.charAt(0).toUpperCase() + p.slice(1), e["init" + p].call(e)
                }
                C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (_(c, function(t, e, i, o) {
                    i.close_replaceWith = z(o.type)
                }), r += " mfp-close-btn-in") : e.wrap.append(z())), e.st.alignTop && (r += " mfp-align-top"), e.wrap.css(e.fixedContentPos ? {
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                } : {
                    top: w.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: o.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && o.on("keyup" + m, function(t) {
                    27 === t.keyCode && e.close()
                }), w.on("resize" + m, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                var l = e.wH = w.height(),
                    f = {};
                if (e.fixedContentPos && e._hasScrollBar(l)) {
                    var h = e._getScrollbarSize();
                    h && (f.marginRight = h)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var g = e.st.mainClass;
                return e.isIE7 && (g += " mfp-ie7"), g && e._addClassToMFP(g), e.updateItemHTML(), C("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(y), e._setFocus()) : e.bgOverlay.addClass(y), o.on("focusin" + m, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(l), C(d), i
            },
            close: function() {
                e.isOpen && (C(u), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(g), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                C(a);
                var i = g + " " + y + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var n = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
                }
                o.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(p)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        o = window.innerHeight * i;
                    e.wrap.css("height", o), e.wH = o
                } else e.wH = t || w.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var o = i.type;
                if (C("BeforeChange", [e.currItem ? e.currItem.type : "", o]), e.currItem = i, !e.currTemplate[o]) {
                    var r = e.st[o] ? e.st[o].markup : !1;
                    C("FirstMarkupParse", r), e.currTemplate[o] = r ? t(r) : !0
                }
                n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
                var s = e["get" + o.charAt(0).toUpperCase() + o.slice(1)](i, e.currTemplate[o]);
                e.appendContent(s, o), i.preloaded = !0, C(f, i), n = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(z()) : e.content = t : e.content = "", C(l), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var o, n = e.items[i];
                if (n.tagName ? n = {
                        el: t(n)
                    } : (o = n.type, n = {
                        data: n,
                        src: n.src
                    }), n.el) {
                    for (var r = e.types, s = 0; s < r.length; s++)
                        if (n.el.hasClass("mfp-" + r[s])) {
                            o = r[s];
                            break
                        }
                    n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = o || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, C("ElementParse", n), e.items[i]
            },
            addGroup: function(t, i) {
                var o = function(o) {
                    o.mfpEl = this, e._openClick(o, t, i)
                };
                i || (i = {});
                var n = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(n).on(n, o)) : (i.isObj = !1, i.delegate ? t.off(n).on(n, i.delegate, o) : (i.items = t, t.off(n).on(n, o)))
            },
            _openClick: function(i, o, n) {
                var r = void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick;
                if (r || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                    var s = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0
                        } else if (w.width() < s) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), n.el = t(i.mfpEl), n.delegate && (n.items = o.find(n.delegate)), e.open(n)
                }
            },
            updateStatus: function(t, o) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), o || "loading" !== t || (o = e.st.tLoading);
                    var n = {
                        status: t,
                        text: o
                    };
                    C("UpdateStatus", n), t = n.status, o = n.text, e.preloader.html(o), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(v)) {
                    var o = e.st.closeOnContentClick,
                        n = e.st.closeOnBgClick;
                    if (o && n) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (o) return !0
                    } else if (n && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || w.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function(e, i, o) {
                var n;
                o.data && (i = t.extend(o.data, i)), C(c, [e, i, o]), t.each(i, function(t, i) {
                    if (void 0 === i || i === !1) return !0;
                    if (n = t.split("_"), n.length > 1) {
                        var o = e.find(m + "-" + n[0]);
                        if (o.length > 0) {
                            var r = n[1];
                            "replaceWith" === r ? o[0] !== i[0] && o.replaceWith(i) : "img" === r ? o.is("img") ? o.attr("src", i) : o.replaceWith('<img src="' + i + '" class="' + o.attr("class") + '" />') : o.attr(n[1], i)
                        }
                    } else e.find(m + "-" + t).html(i)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: b.prototype,
            modules: [],
            open: function(e, i) {
                return E(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, t.fn.magnificPopup = function(i) {
            E();
            var o = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var n, r = I ? o.data("magnificPopup") : o[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    r.items ? n = r.items[s] : (n = o, r.delegate && (n = n.find(r.delegate)), n = n.eq(s)), e._openClick({
                        mfpEl: n
                    }, o, r)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), I ? o.data("magnificPopup", i) : o[0].magnificPopup = i, e.addGroup(o, i);
            return o
        };
        var T, L, O, k = "inline",
            M = function() {
                O && (L.after(O.addClass(T)).detach(), O = null)
            };
        t.magnificPopup.registerModule(k, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(k), _(a + "." + k, function() {
                        M()
                    })
                },
                getInline: function(i, o) {
                    if (M(), i.src) {
                        var n = e.st.inline,
                            r = t(i.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (L || (T = n.hiddenClass, L = x(T), T = "mfp-" + T), O = r.after(L).detach().removeClass(T)), e.updateStatus("ready")
                        } else e.updateStatus("error", n.tNotFound), r = t("<div>");
                        return i.inlineElement = r, r
                    }
                    return e.updateStatus("ready"), e._parseMarkup(o, {}, i), o
                }
            }
        });
        var P, j = "ajax",
            W = function() {
                P && t(document.body).removeClass(P)
            },
            R = function() {
                W(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(j, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(j), P = e.st.ajax.cursor, _(a + "." + j, R), _("BeforeChange." + j, R)
                },
                getAjax: function(i) {
                    P && t(document.body).addClass(P), e.updateStatus("loading");
                    var o = t.extend({
                        url: i.src,
                        success: function(o, n, r) {
                            var s = {
                                data: o,
                                xhr: r
                            };
                            C("ParseAjax", s), e.appendContent(t(s.data), j), i.finished = !0, W(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(y)
                            }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                        },
                        error: function() {
                            W(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(o), ""
                }
            }
        });
        var B, A = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var o = e.st.image.titleSrc;
            if (o) {
                if (t.isFunction(o)) return o.call(e, i);
                if (i.el) return i.el.attr(o) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        o = ".image";
                    e.types.push("image"), _(d + o, function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }), _(a + o, function() {
                        i.cursor && t(document.body).removeClass(i.cursor), w.off("resize" + m)
                    }), _("Resize" + o, e.resizeImage), e.isLowIE && _("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, B && clearInterval(B), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        o = t.img[0],
                        n = function(r) {
                            B && clearInterval(B), B = setInterval(function() {
                                return o.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(B), i++, void(3 === i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)))
                            }, r)
                        };
                    n(1)
                },
                getImage: function(i, o) {
                    var n = 0,
                        r = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (n++, 200 > n ? setTimeout(r, 100) : s()))
                        },
                        s = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        u = o.find(".mfp-img");
                    if (u.length) {
                        var p = document.createElement("img");
                        p.className = "mfp-img", i.el && i.el.find("img").length && (p.alt = i.el.find("img").attr("alt")), i.img = t(p).on("load.mfploader", r).on("error.mfploader", s), p.src = i.src, u.is("img") && (i.img = i.img.clone()), p = i.img[0], p.naturalWidth > 0 ? i.hasSize = !0 : p.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(o, {
                        title: A(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (B && clearInterval(B), i.loadError ? (o.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (o.removeClass("mfp-loading"), e.updateStatus("ready")), o) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, o.addClass("mfp-loading"), e.findImageSize(i)), o)
                }
            }
        });
        var H, F = function() {
            return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        o = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var n, r, s = i.duration,
                            p = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    o = "all " + i.duration / 1e3 + "s " + i.easing,
                                    n = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return n["-webkit-" + r] = n["-moz-" + r] = n["-o-" + r] = n[r] = o, e.css(n), e
                            },
                            l = function() {
                                e.content.css("visibility", "visible")
                            };
                        _("BuildControls" + o, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void l();
                                r = p(t), r.css(e._getOffset()), e.wrap.append(r), n = setTimeout(function() {
                                    r.css(e._getOffset(!0)), n = setTimeout(function() {
                                        l(), setTimeout(function() {
                                            r.remove(), t = r = null, C("ZoomAnimationEnded")
                                        }, 16)
                                    }, s)
                                }, 16)
                            }
                        }), _(u + o, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.st.removalDelay = s, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    r = p(t)
                                }
                                r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    r.css(e._getOffset())
                                }, 16)
                            }
                        }), _(a + o, function() {
                            e._allowZoom() && (l(), r && r.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1
                },
                _getOffset: function(i) {
                    var o;
                    o = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var n = o.offset(),
                        r = parseInt(o.css("padding-top"), 10),
                        s = parseInt(o.css("padding-bottom"), 10);
                    n.top -= t(window).scrollTop() - r;
                    var a = {
                        width: o.width(),
                        height: (I ? o.innerHeight() : o[0].offsetHeight) - s - r
                    };
                    return F() ? a["-moz-transform"] = a.transform = "translate(" + n.left + "px," + n.top + "px)" : (a.left = n.left, a.top = n.top), a
                }
            }
        });
        var q = "iframe",
            D = "//about:blank",
            N = function(t) {
                if (e.currTemplate[q]) {
                    var i = e.currTemplate[q].find("iframe");
                    i.length && (t || (i[0].src = D), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(q, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(q), _("BeforeChange", function(t, e, i) {
                        e !== i && (e === q ? N() : i === q && N(!0))
                    }), _(a + "." + q, function() {
                        N()
                    })
                },
                getIframe: function(i, o) {
                    var n = i.src,
                        r = e.st.iframe;
                    t.each(r.patterns, function() {
                        return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
                    });
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = n), e._parseMarkup(o, s, i), e.updateStatus("ready"), o
                }
            }
        });
        var U = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t
            },
            Y = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        n = ".mfp-gallery",
                        s = Boolean(t.fn.mfpFastClick);
                    return e.direction = !0, i && i.enabled ? (r += " mfp-gallery", _(d + n, function() {
                        i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), o.on("keydown" + n, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), _("UpdateStatus" + n, function(t, i) {
                        i.text && (i.text = Y(i.text, e.currItem.index, e.items.length))
                    }), _(c + n, function(t, o, n, r) {
                        var s = e.items.length;
                        n.counter = s > 1 ? Y(i.tCounter, r.index, s) : ""
                    }), _("BuildControls" + n, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var o = i.arrowMarkup,
                                n = e.arrowLeft = t(o.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(v),
                                r = e.arrowRight = t(o.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(v),
                                a = s ? "mfpFastClick" : "click";
                            n[a](function() {
                                e.prev()
                            }), r[a](function() {
                                e.next()
                            }), e.isIE7 && (x("b", n[0], !1, !0), x("a", n[0], !1, !0), x("b", r[0], !1, !0), x("a", r[0], !1, !0)), e.container.append(n.add(r))
                        }
                    }), _(f + n, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void _(a + n, function() {
                        o.off(n), e.wrap.off("click" + n), e.arrowLeft && s && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    e.direction = !0, e.index = U(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = U(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        o = Math.min(i[0], e.items.length),
                        n = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = U(i), !e.items[i].preloaded) {
                        var o = e.items[i];
                        o.parsed || (o = e.parseEl(i)), C("LazyLoad", o), "image" === o.type && (o.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            o.hasSize = !0
                        }).on("error.mfploader", function() {
                            o.hasSize = !0, o.loadError = !0, C("LazyLoadError", o)
                        }).attr("src", o.src)), o.preloaded = !0
                    }
                }
            }
        });
        var Q = "retina";
        t.magnificPopup.registerModule(Q, {
                options: {
                    replaceSrc: function(t) {
                        return t.src.replace(/\.\w+$/, function(t) {
                            return "@2x" + t
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var t = e.st.retina,
                                i = t.ratio;
                            i = isNaN(i) ? i() : i, i > 1 && (_("ImageHasSize." + Q, function(t, e) {
                                e.img.css({
                                    "max-width": e.img[0].naturalWidth / i,
                                    width: "100%"
                                })
                            }), _("ElementParse." + Q, function(e, o) {
                                o.src = t.replaceSrc(o, i)
                            }))
                        }
                    }
                }
            }),
            function() {
                var e = 1e3,
                    i = "ontouchstart" in window,
                    o = function() {
                        w.off("touchmove" + r + " touchend" + r)
                    },
                    n = "mfpFastClick",
                    r = "." + n;
                t.fn.mfpFastClick = function(n) {
                    return t(this).each(function() {
                        var s, a = t(this);
                        if (i) {
                            var u, p, l, c, d, f;
                            a.on("touchstart" + r, function(t) {
                                c = !1, f = 1, d = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], p = d.clientX, l = d.clientY, w.on("touchmove" + r, function(t) {
                                    d = t.originalEvent ? t.originalEvent.touches : t.touches, f = d.length, d = d[0], (Math.abs(d.clientX - p) > 10 || Math.abs(d.clientY - l) > 10) && (c = !0, o())
                                }).on("touchend" + r, function(t) {
                                    o(), c || f > 1 || (s = !0, t.preventDefault(), clearTimeout(u), u = setTimeout(function() {
                                        s = !1
                                    }, e), n())
                                })
                            })
                        }
                        a.on("click" + r, function() {
                            s || n()
                        })
                    })
                }, t.fn.destroyMfpFastClick = function() {
                    t(this).off("touchstart" + r + " click" + r), i && w.off("touchmove" + r + " touchend" + r)
                }
            }(), E()
    }),
    function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function n(e, i) {
                t.fn[e] = function(n) {
                    if ("string" == typeof n) {
                        for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                            var p = this[a],
                                l = t.data(p, e);
                            if (l)
                                if (t.isFunction(l[n]) && "_" !== n.charAt(0)) {
                                    var c = l[n].apply(l, s);
                                    if (void 0 !== c) return c
                                } else r("no such method '" + n + "' for " + e + " instance");
                            else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + n + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var o = t.data(this, e);
                        o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                    })
                }
            }
            if (t) {
                var r = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), n(t, e)
                }, t.bridget
            }
        }
        var o = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            o = function() {};
        i.addEventListener ? o = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (o = function(t, i, o) {
            t[i + o] = o.handleEvent ? function() {
                var i = e(t);
                o.handleEvent.call(o, i)
            } : function() {
                var i = e(t);
                o.call(t, i)
            }, t.attachEvent("on" + i, t[i + o])
        });
        var n = function() {};
        i.removeEventListener ? n = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (n = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (o) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: o,
            unbind: n
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(window),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var o = t.prototype,
            n = this,
            r = n.EventEmitter;
        o.getListeners = function(t) {
            var e, i, o = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
            } else e = o[t] || (o[t] = []);
            return e
        }, o.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, o.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, o.addListener = function(t, i) {
            var o, n = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
                listener: i,
                once: !1
            });
            return this
        }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
            return this.getListeners(t), this
        }, o.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, o.removeListener = function(t, i) {
            var o, n, r = this.getListenersAsObject(t);
            for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
            return this
        }, o.off = i("removeListener"), o.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, o.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, o.manipulateListeners = function(t, e, i) {
            var o, n, r = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (o = i.length; o--;) r.call(this, e, i[o]);
            else
                for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
            return this
        }, o.removeEvent = function(t) {
            var e, i = typeof t,
                o = this._getEvents();
            if ("string" === i) delete o[t];
            else if (t instanceof RegExp)
                for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
            else delete this._events;
            return this
        }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
            var i, o, n, r, s = this.getListenersAsObject(t);
            for (n in s)
                if (s.hasOwnProperty(n))
                    for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, o.trigger = i("emitEvent"), o.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, o.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, o._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, o._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return n.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function o() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var o = s[e];
                t[o] = 0
            }
            return t
        }

        function n(i) {
            function n() {
                if (!d) {
                    d = !0;
                    var o = t.getComputedStyle;
                    if (p = function() {
                            var t = o ? function(t) {
                                return o(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), l = i("boxSizing")) {
                        var n = document.createElement("div");
                        n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[l] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(n);
                        var a = p(n);
                        c = 200 === e(a.width), s.removeChild(n)
                    }
                }
            }

            function a(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = p(t);
                    if ("none" === i.display) return o();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var a = r.isBorderBox = !(!l || !i[l] || "border-box" !== i[l]), d = 0, f = s.length; f > d; d++) {
                        var h = s[d],
                            m = i[h];
                        m = u(t, m);
                        var y = parseFloat(m);
                        r[h] = isNaN(y) ? 0 : y
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        b = r.marginLeft + r.marginRight,
                        I = r.marginTop + r.marginBottom,
                        w = r.borderLeftWidth + r.borderRightWidth,
                        _ = r.borderTopWidth + r.borderBottomWidth,
                        x = a && c,
                        C = e(i.width);
                    C !== !1 && (r.width = C + (x ? 0 : g + w));
                    var z = e(i.height);
                    return z !== !1 && (r.height = z + (x ? 0 : v + _)), r.innerWidth = r.width - (g + w), r.innerHeight = r.height - (v + _), r.outerWidth = r.width + b, r.outerHeight = r.height + I, r
                }
            }

            function u(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var o = e.style,
                    n = o.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
            }
            var p, l, c, d = !1;
            return a
        }
        var r = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || o()
        }

        function o() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var o = s[t];
                o()
            }
        }

        function n(n) {
            return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
        }
        var r = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function o(t, e) {
            i(t);
            for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)
                if (o[n] === t) return !0;
            return !1
        }

        function n(t, o) {
            return i(t), e(t, o)
        }
        var r, s = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
                var n = e[i],
                    r = n + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                u = e(a, "div");
            r = u ? e : n
        } else r = o;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, o) {
            return e(t, i, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var o = {};
        o.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, o.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var n = Object.prototype.toString;
        o.isArray = function(t) {
            return "[object Array]" == n.call(t)
        }, o.makeArray = function(t) {
            var e = [];
            if (o.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, o.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e) return i;
            return -1
        }, o.removeFrom = function(t, e) {
            var i = o.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, o.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), o.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, o.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, o.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.filterFindElements = function(t, e) {
            t = o.makeArray(t);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r];
                if (o.isElement(a))
                    if (e) {
                        i(a, e) && n.push(a);
                        for (var u = a.querySelectorAll(e), p = 0, l = u.length; l > p; p++) n.push(u[p])
                    } else n.push(a)
            }
            return n
        }, o.debounceMethod = function(t, e, i) {
            var o = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[n] = setTimeout(function() {
                    o.apply(r, e), delete r[n]
                }, i || 100)
            }
        }, o.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var r = t.console;
        return o.htmlInit = function(i, n) {
            e(function() {
                for (var e = o.toDashed(n), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", u = 0, p = s.length; p > u; u++) {
                    var l, c = s[u],
                        d = c.getAttribute(a);
                    try {
                        l = d && JSON.parse(d)
                    } catch (f) {
                        r && r.error("Error parsing " + a + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + f);
                        continue
                    }
                    var h = new i(c, l),
                        m = t.jQuery;
                    m && m.data(c, n, h)
                }
            })
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, o, n, r) {
            return e(t, i, o, n, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, o, n) {
        function r(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function s(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var a = t.getComputedStyle,
            u = a ? function(t) {
                return a(t, null)
            } : function(t) {
                return t.currentStyle
            },
            p = o("transition"),
            l = o("transform"),
            c = p && l,
            d = !!o("perspective"),
            f = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[p],
            h = ["transform", "transition", "transitionDuration", "transitionProperty"],
            m = function() {
                for (var t = {}, e = 0, i = h.length; i > e; e++) {
                    var n = h[e],
                        r = o(n);
                    r && r !== n && (t[n] = r)
                }
                return t
            }();
        n.extend(s.prototype, e.prototype), s.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.getSize = function() {
            this.size = i(this.element)
        }, s.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var o = m[i] || i;
                e[o] = t[i]
            }
        }, s.prototype.getPosition = function() {
            var t = u(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                o = e.isOriginTop,
                n = parseInt(t[i ? "left" : "right"], 10),
                r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
            var s = this.layout.size;
            n -= i ? s.paddingLeft : s.paddingRight, r -= o ? s.paddingTop : s.paddingBottom, this.position.x = n, this.position.y = r
        }, s.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                n = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[o];
            s = e.percentPosition && !e.isHorizontal ? 100 * (s / t.width) + "%" : s + "px", i[n] = s, i[r] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                u = e.isOriginTop ? "top" : "bottom",
                p = e.isOriginTop ? "bottom" : "top",
                l = this.position.y + t[a];
            l = e.percentPosition && e.isHorizontal ? 100 * (l / t.height) + "%" : l + "px", i[u] = l, i[p] = "", this.css(i), this.emitEvent("layout", [this])
        };
        var y = d ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        s.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                r = parseInt(e, 10),
                s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                u = e - o,
                p = {},
                l = this.layout.options;
            a = l.isOriginLeft ? a : -a, u = l.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                to: p,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, s.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, s.prototype.moveTo = c ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, s.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, s.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var g = l && n.toDashed(l) + ",opacity";
        s.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: g,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(f, this, !1))
        }, s.prototype.transition = s.prototype[p ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, s.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var v = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        s.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var o = e.onEnd[i];
                    o.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, s.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
        }, s.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var b = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return s.prototype.removeTransitionStyles = function() {
            this.css(b)
        }, s.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, s.prototype.remove = function() {
            if (!p || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, s.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, s.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, s.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, s.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, r, s) {
            return e(t, i, o, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, o, n, r) {
        function s(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++l;
            this.element.outlayerGUID = o, c[o] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            u = t.jQuery,
            p = function() {},
            l = 0,
            c = {};
        return s.namespace = "outlayer", s.Item = r, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, n.extend(s.prototype, i.prototype), s.prototype.option = function(t) {
            n.extend(this.options, t)
        }, s.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, s.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, s.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n],
                    a = new i(s, this);
                o.push(a)
            }
            return o
        }, s.prototype._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, s.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, s.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() {
            this.getSize()
        }, s.prototype.getSize = function() {
            this.size = o(this.element)
        }, s.prototype._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : n.isElement(r) && (i = r), this[t] = i ? o(i)[e] : r) : this[t] = 0
        }, s.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, s.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, s.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], o = 0, n = t.length; n > o; o++) {
                    var r = t[o],
                        s = this._getItemLayoutPosition(r);
                    s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
                }
                this._processLayoutQueue(i)
            }
        }, s.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, s.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, s.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, s.prototype._postLayout = function() {
            this.resizeContainer()
        }, s.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, s.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                n.emitEvent(t + "Complete", [e])
            }

            function o() {
                s++, s === r && i()
            }
            var n = this,
                r = e.length;
            if (!e || !r) return void i();
            for (var s = 0, a = 0, u = e.length; u > a; a++) {
                var p = e[a];
                p.once(t, o)
            }
        }, s.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, s.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, s.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, s.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n.removeFrom(this.stamps, o), this.unignore(o)
                }
        }, s.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
        }, s.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, s.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                n = o(t),
                r = {
                    left: e.left - i.left - n.marginLeft,
                    top: e.top - i.top - n.marginTop,
                    right: i.right - e.right - n.marginRight,
                    bottom: i.bottom - e.bottom - n.marginBottom
                };
            return r
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, s.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, s.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, s.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, s.prototype.needsResizeLayout = function() {
            var t = o(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, s.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, s.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, s.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, s.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var o = t[i];
                o.reveal()
            }
        }, s.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var o = t[i];
                o.hide()
            }
        }, s.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, s.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, s.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t) return o
            }
        }, s.prototype.getItems = function(t) {
            t = n.makeArray(t);
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var r = t[i],
                    s = this.getItem(r);
                s && e.push(s)
            }
            return e
        }, s.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, o = e.length; o > i; i++) {
                    var r = e[i];
                    r.remove(), n.removeFrom(this.items, r)
                }
        }, s.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize();
            var n = this.element.outlayerGUID;
            delete c[n], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && c[e]
        }, s.create = function(t, e) {
            function i() {
                s.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(s.prototype) : n.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() {
                r.apply(this, arguments)
            }, i.Item.prototype = new r, n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
        }, s.Item = r, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                r = n / o,
                s = o - n % o,
                a = s && 1 > s ? "round" : "floor";
            r = Math[a](r), this.cols = Math.max(r, 1)
        }, o.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                o = e && 1 > e ? "round" : "ceil",
                n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i.indexOf(r, s), u = {
                    x: this.columnWidth * a,
                    y: s
                }, p = s + t.size.outerHeight, l = this.cols + 1 - r.length, c = 0; l > c; c++) this.colYs[a + c] = p;
            return u
        }, o.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function(t) {
            var i = e(t),
                o = this._getElementOffset(t),
                n = this.options.isOriginLeft ? o.left : o.right,
                r = n + i.outerWidth,
                s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var o = t.create("masonry"),
            n = o.prototype._getElementOffset,
            r = o.prototype.layout,
            s = o.prototype._getMeasurement;
        i(o.prototype, e.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, r, s, a) {
            return e(t, i, o, n, r, s, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, o, n, r, s) {
        function a(t, e) {
            return function(i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n],
                        a = i.sortData[s],
                        u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e,
                            l = p ? 1 : -1;
                        return (a > u ? 1 : -1) * l
                    }
                }
                return 0
            }
        }
        var u = t.jQuery,
            p = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            l = document.documentElement,
            c = l.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = r, d.LayoutMode = s, d.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in s.modes) this._initLayoutMode(t)
        }, d.prototype.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, d.prototype._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d.prototype._initLayoutMode = function(t) {
            var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, d.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.prototype.arrange = function(t) {
            function e() {
                o.reveal(i.needReveal), o.hide(i.needHide)
            }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var o = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, d.prototype._bindArrangeComplete = function() {
            function t() {
                e && i && o && n.emitEvent("arrangeComplete", [n.filteredItems])
            }
            var e, i, o, n = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                o = !0, t()
            })
        }, d.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
                var u = t[s];
                if (!u.isIgnored) {
                    var p = r(u);
                    p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u)
                }
            }
            return {
                matches: i,
                needReveal: o,
                needHide: n
            }
        }, d.prototype._getFilterTest = function(t) {
            return u && this.options.isJQueryFiltering ? function(e) {
                return u(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return o(e.element, t)
            }
        }, d.prototype.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        }, d.prototype._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var o = t[i];
                o.updateSortData()
            }
        };
        var f = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = p(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    r = n && n[1],
                    s = e(r, o),
                    a = d.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(s(t))
                } : function(t) {
                    return t && s(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && c(i)
                }
            }
            return t
        }();
        d.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, d.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d.prototype._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, d.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d.prototype._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                var r = this._filter(e).matches;
                for (i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var h = d.prototype.remove;
        return d.prototype.remove = function(t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            h.call(this, t);
            var i = e && e.length;
            if (i)
                for (var o = 0; i > o; o++) {
                    var r = e[o];
                    n.removeFrom(this.filteredItems, r)
                }
        }, d.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, d.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, d
    }),
    function(t) {
        "use strict";
        t.fn.fitVids = function(e) {
            var i = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var o = document.head || document.getElementsByTagName("head")[0],
                    n = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    r = document.createElement("div");
                r.innerHTML = '<p>x</p><style id="fit-vids-style">' + n + "</style>", o.appendChild(r.childNodes[1])
            }
            return e && t.extend(i, e), this.each(function() {
                var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var o = ".fitvidsignore";
                i.ignore && (o = o + ", " + i.ignore);
                var n = t(this).find(e.join(","));
                n = n.not("object object"), n = n.not(o), n.each(function(e) {
                    var i = t(this);
                    if (!(i.parents(o).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                        i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                        var n = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                            r = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
                            s = n / r;
                        if (!i.attr("id")) {
                            var a = "fitvid" + e;
                            i.attr("id", a)
                        }
                        i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * s + "%"), i.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto);
  
