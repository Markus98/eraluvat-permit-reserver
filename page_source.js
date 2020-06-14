function updateValidityPeriod(e) {
    var t = e.closest("tr").prev("tr").find(".license-valid-day").val() + "T" + e.find(":selected").val(),
        a = e.closest("tr").prev("tr").find(".license-valid-thru");
    if (e.closest("tr").find(".license-duration").hasClass("duration-hours")) {
        var i = e.closest("tr").find(".license-duration.duration-hours").val();
        i = (i = i.split(":"))[0];
        var n = parseInt(60 * i, 10),
            r = new Date(moment(t).format()),
            s = new Date(moment(t).format());
        s.setMinutes(s.getMinutes() + n), setValidityPeriod(a, r, s)
    }
}

function setValidityPeriod(e, t, a) {
    var i = parseInt(t.getDate(), 10),
        n = parseInt(t.getMonth() + 1, 10),
        r = parseInt(t.getFullYear(), 10),
        s = parseInt(t.getHours(), 10),
        o = parseInt(t.getMinutes(), 10);
    i = i < 10 ? "0" + i : i, n = n < 10 ? "0" + n : n, s = s < 10 ? "0" + s : s, o = o < 10 ? "0" + o : o;
    var l = parseInt(a.getDate(), 10),
        c = parseInt(a.getMonth() + 1, 10),
        u = parseInt(a.getFullYear(), 10),
        d = parseInt(a.getHours(), 10),
        p = parseInt(a.getMinutes(), 10);
    l = l < 10 ? "0" + l : l, c = c < 10 ? "0" + c : c, d = d < 10 ? "0" + d : d, p = p < 10 ? "0" + p : p;
    var h = i + "." + n + "." + r + " " + Store.translations.time_at_short + " " + s + ":" + o + " - " + l + "." + c + "." + u + " " + Store.translations.time_at_short + " " + d + p;
    e.html(h)
}! function(e) {
    function t() {}

    function a(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }

    function i(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
    }

    function n(e, t) {
        for (; 3 === e._state;) e = e._value;
        return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void i._immediateFn(function() {
            var a = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== a) {
                var i;
                try {
                    i = a(e._value)
                } catch (e) {
                    return void s(t.promise, e)
                }
                r(t.promise, i)
            } else(1 === e._state ? r : s)(t.promise, e._value)
        }))
    }

    function r(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof i) return e._state = 3, e._value = t, void o(e);
                if ("function" == typeof n) return void c(a(n, t), e)
            }
            e._state = 1, e._value = t, o(e)
        } catch (t) {
            s(e, t)
        }
    }

    function s(e, t) {
        e._state = 2, e._value = t, o(e)
    }

    function o(e) {
        2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
            e._handled || i._unhandledRejectionFn(e._value)
        });
        for (var t = 0, a = e._deferreds.length; t < a; t++) n(e, e._deferreds[t]);
        e._deferreds = null
    }

    function l(e, t, a) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = a
    }

    function c(e, t) {
        var a = !1;
        try {
            e(function(e) {
                a || (a = !0, r(t, e))
            }, function(e) {
                a || (a = !0, s(t, e))
            })
        } catch (e) {
            if (a) return;
            a = !0, s(t, e)
        }
    }
    var u = setTimeout;
    i.prototype.catch = function(e) {
        return this.then(null, e)
    }, i.prototype.then = function(e, a) {
        var i = new this.constructor(t);
        return n(this, new l(e, a, i)), i
    }, i.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new i(function(e, a) {
            function i(r, s) {
                try {
                    if (s && ("object" == typeof s || "function" == typeof s)) {
                        var o = s.then;
                        if ("function" == typeof o) return void o.call(s, function(e) {
                            i(r, e)
                        }, a)
                    }
                    t[r] = s, 0 == --n && e(t)
                } catch (e) {
                    a(e)
                }
            }
            if (0 === t.length) return e([]);
            for (var n = t.length, r = 0; r < t.length; r++) i(r, t[r])
        })
    }, i.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
            t(e)
        })
    }, i.reject = function(e) {
        return new i(function(t, a) {
            a(e)
        })
    }, i.race = function(e) {
        return new i(function(t, a) {
            for (var i = 0, n = e.length; i < n; i++) e[i].then(t, a)
        })
    }, i._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        u(e, 0)
    }, i._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }, i._setImmediateFn = function(e) {
        i._immediateFn = e
    }, i._setUnhandledRejectionFn = function(e) {
        i._unhandledRejectionFn = e
    }, "undefined" != typeof module && module.exports ? module.exports = i : e.Promise || (e.Promise = i)
}(this),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(e) {
        for (var t, a; e.length && e[0] !== document;) {
            if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (a = parseInt(e.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
            e = e.parent()
        }
        return 0
    }

    function a() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(t) {
        var a = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", a, function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", a, n)
    }

    function n() {
        e.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function r(t, a) {
        e.extend(t, a);
        for (var i in a) null == a[i] && (t[i] = a[i]);
        return t
    }
    e.ui = e.ui || {}, e.ui.version = "1.12.1";
    var s = 0,
        o = Array.prototype.slice;
    e.cleanData = function(t) {
            return function(a) {
                var i, n, r;
                for (r = 0; null != (n = a[r]); r++) try {
                    (i = e._data(n, "events")) && i.remove && e(n).triggerHandler("remove")
                } catch (e) {}
                t(a)
            }
        }(e.cleanData), e.widget = function(t, a, i) {
            var n, r, s, o = {},
                l = t.split(".")[0],
                c = l + "-" + (t = t.split(".")[1]);
            return i || (i = a, a = e.Widget), e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))), e.expr[":"][c.toLowerCase()] = function(t) {
                return !!e.data(t, c)
            }, e[l] = e[l] || {}, n = e[l][t], r = e[l][t] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
            }, e.extend(r, n, {
                version: i.version,
                _proto: e.extend({}, i),
                _childConstructors: []
            }), s = new a, s.options = e.widget.extend({}, s.options), e.each(i, function(t, i) {
                return e.isFunction(i) ? void(o[t] = function() {
                    function e() {
                        return a.prototype[t].apply(this, arguments)
                    }

                    function n(e) {
                        return a.prototype[t].apply(this, e)
                    }
                    return function() {
                        var t, a = this._super,
                            r = this._superApply;
                        return this._super = e, this._superApply = n, t = i.apply(this, arguments), this._super = a, this._superApply = r, t
                    }
                }()) : void(o[t] = i)
            }), r.prototype = e.widget.extend(s, {
                widgetEventPrefix: n ? s.widgetEventPrefix || t : t
            }, o, {
                constructor: r,
                namespace: l,
                widgetName: t,
                widgetFullName: c
            }), n ? (e.each(n._childConstructors, function(t, a) {
                var i = a.prototype;
                e.widget(i.namespace + "." + i.widgetName, r, a._proto)
            }), delete n._childConstructors) : a._childConstructors.push(r), e.widget.bridge(t, r), r
        }, e.widget.extend = function(t) {
            for (var a, i, n = o.call(arguments, 1), r = 0, s = n.length; s > r; r++)
                for (a in n[r]) i = n[r][a], n[r].hasOwnProperty(a) && void 0 !== i && (t[a] = e.isPlainObject(i) ? e.isPlainObject(t[a]) ? e.widget.extend({}, t[a], i) : e.widget.extend({}, i) : i);
            return t
        }, e.widget.bridge = function(t, a) {
            var i = a.prototype.widgetFullName || t;
            e.fn[t] = function(n) {
                var r = "string" == typeof n,
                    s = o.call(arguments, 1),
                    l = this;
                return r ? this.length || "instance" !== n ? this.each(function() {
                    var a, r = e.data(this, i);
                    return "instance" === n ? (l = r, !1) : r ? e.isFunction(r[n]) && "_" !== n.charAt(0) ? (a = r[n].apply(r, s)) !== r && void 0 !== a ? (l = a && a.jquery ? l.pushStack(a.get()) : a, !1) : void 0 : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + n + "'")
                }) : l = void 0 : (s.length && (n = e.widget.extend.apply(null, [n].concat(s))), this.each(function() {
                    var t = e.data(this, i);
                    t ? (t.option(n || {}), t._init && t._init()) : e.data(this, i, new a(n, this))
                })), l
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(t, a) {
                a = e(a || this.defaultElement || this)[0], this.element = e(a), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, a !== this && (e.data(a, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === a && this.destroy()
                    }
                }), this.document = e(a.style ? a.ownerDocument : a.document || a), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function(e, a) {
                    t._removeClass(a, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, a) {
                var i, n, r, s = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                        for (n = s[t] = e.widget.extend({}, this.options[t]), r = 0; i.length - 1 > r; r++) n[i[r]] = n[i[r]] || {}, n = n[i[r]];
                        if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                        n[t] = a
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        s[t] = a
                    } return this._setOptions(s), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(t) {
                var a, i, n;
                for (a in t) n = this.classesElementLookup[a], t[a] !== this.options.classes[a] && n && n.length && (i = e(n.get()), this._removeClass(n, a), i.addClass(this._classes({
                    element: i,
                    keys: a,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(t) {
                function a(a, r) {
                    var s, o;
                    for (o = 0; a.length > o; o++) s = n.classesElementLookup[a[o]] || e(), s = e(t.add ? e.unique(s.get().concat(t.element.get())) : s.not(t.element).get()), n.classesElementLookup[a[o]] = s, i.push(a[o]), r && t.classes[a[o]] && i.push(t.classes[a[o]])
                }
                var i = [],
                    n = this;
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && a(t.keys.match(/\S+/g) || [], !0), t.extra && a(t.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function(t) {
                var a = this;
                e.each(a.classesElementLookup, function(i, n) {
                    -1 !== e.inArray(t.target, n) && (a.classesElementLookup[i] = e(n.not(t.target).get()))
                })
            },
            _removeClass: function(e, t, a) {
                return this._toggleClass(e, t, a, !1)
            },
            _addClass: function(e, t, a) {
                return this._toggleClass(e, t, a, !0)
            },
            _toggleClass: function(e, t, a, i) {
                i = "boolean" == typeof i ? i : a;
                var n = "string" == typeof e || null === e,
                    r = {
                        extra: n ? t : a,
                        keys: n ? e : t,
                        element: n ? this.element : e,
                        add: i
                    };
                return r.element.toggleClass(this._classes(r), i), this
            },
            _on: function(t, a, i) {
                var n, r = this;
                "boolean" != typeof t && (i = a, a = t, t = !1), i ? (a = n = e(a), this.bindings = this.bindings.add(a)) : (i = a, a = this.element, n = this.widget()), e.each(i, function(i, s) {
                    function o() {
                        return t || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : void 0
                    }
                    "string" != typeof s && (o.guid = s.guid = s.guid || o.guid || e.guid++);
                    var l = i.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + r.eventNamespace,
                        u = l[2];
                    u ? n.on(c, u, o) : a.on(c, o)
                })
            },
            _off: function(t, a) {
                a = (a || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(a).off(a), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                var a = this;
                return setTimeout(function() {
                    return ("string" == typeof e ? a[e] : e).apply(a, arguments)
                }, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(t, a, i) {
                var n, r, s = this.options[t];
                if (i = i || {}, a = e.Event(a), a.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), a.target = this.element[0], r = a.originalEvent)
                    for (n in r) n in a || (a[n] = r[n]);
                return this.element.trigger(a, i), !(e.isFunction(s) && !1 === s.apply(this.element[0], [a].concat(i)) || a.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, a) {
            e.Widget.prototype["_" + t] = function(i, n, r) {
                "string" == typeof n && (n = {
                    effect: n
                });
                var s, o = n ? !0 === n || "number" == typeof n ? a : n.effect || a : t;
                "number" == typeof(n = n || {}) && (n = {
                    duration: n
                }), s = !e.isEmptyObject(n), n.complete = r, n.delay && i.delay(n.delay), s && e.effects && e.effects.effect[o] ? i[t](n) : o !== t && i[o] ? i[o](n.duration, n.easing, r) : i.queue(function(a) {
                    e(this)[t](), r && r.call(i[0]), a()
                })
            }
        }), e.widget,
        function() {
            function t(e, t, a) {
                return [parseFloat(e[0]) * (d.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (d.test(e[1]) ? a / 100 : 1)]
            }

            function a(t, a) {
                return parseInt(e.css(t, a), 10) || 0
            }

            function i(t) {
                var a = t[0];
                return 9 === a.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(a) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : a.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: a.pageY,
                        left: a.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            var n, r = Math.max,
                s = Math.abs,
                o = /left|center|right/,
                l = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                u = /^\w+/,
                d = /%$/,
                p = e.fn.position;
            e.position = {
                scrollbarWidth: function() {
                    if (void 0 !== n) return n;
                    var t, a, i = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        r = i.children()[0];
                    return e("body").append(i), t = r.offsetWidth, i.css("overflow", "scroll"), a = r.offsetWidth, t === a && (a = i[0].clientWidth), i.remove(), n = t - a
                },
                getScrollInfo: function(t) {
                    var a = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        n = "scroll" === a || "auto" === a && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() : 0,
                        height: n ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var a = e(t || window),
                        i = e.isWindow(a[0]),
                        n = !!a[0] && 9 === a[0].nodeType;
                    return {
                        element: a,
                        isWindow: i,
                        isDocument: n,
                        offset: !i && !n ? e(t).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: a.scrollLeft(),
                        scrollTop: a.scrollTop(),
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    }
                }
            }, e.fn.position = function(n) {
                if (!n || !n.of) return p.apply(this, arguments);
                n = e.extend({}, n);
                var d, h, f, g, m, v, y = e(n.of),
                    _ = e.position.getWithinInfo(n.within),
                    w = e.position.getScrollInfo(_),
                    b = (n.collision || "flip").split(" "),
                    S = {};
                return v = i(y), y[0].preventDefault && (n.at = "left top"), h = v.width, f = v.height, g = v.offset, m = e.extend({}, g), e.each(["my", "at"], function() {
                    var e, t, a = (n[this] || "").split(" ");
                    1 === a.length && (a = o.test(a[0]) ? a.concat(["center"]) : l.test(a[0]) ? ["center"].concat(a) : ["center", "center"]), a[0] = o.test(a[0]) ? a[0] : "center", a[1] = l.test(a[1]) ? a[1] : "center", e = c.exec(a[0]), t = c.exec(a[1]), S[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [u.exec(a[0])[0], u.exec(a[1])[0]]
                }), 1 === b.length && (b[1] = b[0]), "right" === n.at[0] ? m.left += h : "center" === n.at[0] && (m.left += h / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), d = t(S.at, h, f), m.left += d[0], m.top += d[1], this.each(function() {
                    var i, o, l = e(this),
                        c = l.outerWidth(),
                        u = l.outerHeight(),
                        p = a(this, "marginLeft"),
                        v = a(this, "marginTop"),
                        x = c + p + a(this, "marginRight") + w.width,
                        k = u + v + a(this, "marginBottom") + w.height,
                        C = e.extend({}, m),
                        D = t(S.my, l.outerWidth(), l.outerHeight());
                    "right" === n.my[0] ? C.left -= c : "center" === n.my[0] && (C.left -= c / 2), "bottom" === n.my[1] ? C.top -= u : "center" === n.my[1] && (C.top -= u / 2), C.left += D[0], C.top += D[1], i = {
                        marginLeft: p,
                        marginTop: v
                    }, e.each(["left", "top"], function(t, a) {
                        e.ui.position[b[t]] && e.ui.position[b[t]][a](C, {
                            targetWidth: h,
                            targetHeight: f,
                            elemWidth: c,
                            elemHeight: u,
                            collisionPosition: i,
                            collisionWidth: x,
                            collisionHeight: k,
                            offset: [d[0] + D[0], d[1] + D[1]],
                            my: n.my,
                            at: n.at,
                            within: _,
                            elem: l
                        })
                    }), n.using && (o = function(e) {
                        var t = g.left - C.left,
                            a = t + h - c,
                            i = g.top - C.top,
                            o = i + f - u,
                            d = {
                                target: {
                                    element: y,
                                    left: g.left,
                                    top: g.top,
                                    width: h,
                                    height: f
                                },
                                element: {
                                    element: l,
                                    left: C.left,
                                    top: C.top,
                                    width: c,
                                    height: u
                                },
                                horizontal: 0 > a ? "left" : t > 0 ? "right" : "center",
                                vertical: 0 > o ? "top" : i > 0 ? "bottom" : "middle"
                            };
                        c > h && h > s(t + a) && (d.horizontal = "center"), u > f && f > s(i + o) && (d.vertical = "middle"), d.important = r(s(t), s(a)) > r(s(i), s(o)) ? "horizontal" : "vertical", n.using.call(this, e, d)
                    }), l.offset(e.extend(C, {
                        using: o
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var a, i = t.within,
                            n = i.isWindow ? i.scrollLeft : i.offset.left,
                            s = i.width,
                            o = e.left - t.collisionPosition.marginLeft,
                            l = n - o,
                            c = o + t.collisionWidth - s - n;
                        t.collisionWidth > s ? l > 0 && 0 >= c ? (a = e.left + l + t.collisionWidth - s - n, e.left += l - a) : e.left = c > 0 && 0 >= l ? n : l > c ? n + s - t.collisionWidth : n : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = r(e.left - o, e.left)
                    },
                    top: function(e, t) {
                        var a, i = t.within,
                            n = i.isWindow ? i.scrollTop : i.offset.top,
                            s = t.within.height,
                            o = e.top - t.collisionPosition.marginTop,
                            l = n - o,
                            c = o + t.collisionHeight - s - n;
                        t.collisionHeight > s ? l > 0 && 0 >= c ? (a = e.top + l + t.collisionHeight - s - n, e.top += l - a) : e.top = c > 0 && 0 >= l ? n : l > c ? n + s - t.collisionHeight : n : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = r(e.top - o, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var a, i, n = t.within,
                            r = n.offset.left + n.scrollLeft,
                            o = n.width,
                            l = n.isWindow ? n.scrollLeft : n.offset.left,
                            c = e.left - t.collisionPosition.marginLeft,
                            u = c - l,
                            d = c + t.collisionWidth - o - l,
                            p = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            h = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            f = -2 * t.offset[0];
                        0 > u ? (0 > (a = e.left + p + h + f + t.collisionWidth - o - r) || s(u) > a) && (e.left += p + h + f) : d > 0 && ((i = e.left - t.collisionPosition.marginLeft + p + h + f - l) > 0 || d > s(i)) && (e.left += p + h + f)
                    },
                    top: function(e, t) {
                        var a, i, n = t.within,
                            r = n.offset.top + n.scrollTop,
                            o = n.height,
                            l = n.isWindow ? n.scrollTop : n.offset.top,
                            c = e.top - t.collisionPosition.marginTop,
                            u = c - l,
                            d = c + t.collisionHeight - o - l,
                            p = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            h = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            f = -2 * t.offset[1];
                        0 > u ? (0 > (i = e.top + p + h + f + t.collisionHeight - o - r) || s(u) > i) && (e.top += p + h + f) : d > 0 && ((a = e.top - t.collisionPosition.marginTop + p + h + f - l) > 0 || d > s(a)) && (e.top += p + h + f)
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), e.ui.position, e.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, e.fn.extend({
            uniqueId: function() {
                var e = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.ui.safeActiveElement = function(e) {
            var t;
            try {
                t = e.activeElement
            } catch (a) {
                t = e.body
            }
            return t || (t = e.body), t.nodeName || (t = e.body), t
        }, e.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var a = e(t.target),
                            i = e(e.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && a.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), a.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var a = e(t.target).closest(".ui-menu-item"),
                                i = e(t.currentTarget);
                            a[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var a = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, a)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            !e.contains(this.element[0], e.ui.safeActiveElement(this.document[0])) && this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-caret") && t.remove()
                })
            },
            _keydown: function(t) {
                var a, i, n, r, s = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        s = !1, i = this.previousFilter || "", r = !1, n = t.keyCode >= 96 && 105 >= t.keyCode ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), n === i ? r = !0 : n = i + n, a = this._filterMenuItems(n), (a = r && -1 !== a.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : a).length || (n = String.fromCharCode(t.keyCode), a = this._filterMenuItems(n)), a.length ? (this.focus(t, a), this.previousFilter = n, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                s && t.preventDefault()
            },
            _activate: function(e) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var t, a, i, n, r = this,
                    s = this.options.icons.submenu,
                    o = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), a = o.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = e(this),
                        a = t.prev(),
                        i = e("<span>").data("ui-menu-submenu-caret", !0);
                    r._addClass(i, "ui-menu-icon", "ui-icon " + s), a.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", a.attr("id"))
                }), this._addClass(a, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = o.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                    var t = e(this);
                    r._isDivider(t) && r._addClass(t, "ui-menu-divider", "ui-widget-content")
                }), n = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(i, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                } [this.options.role]
            },
            _setOption: function(e, t) {
                if ("icons" === e) {
                    var a = this.element.find(".ui-menu-icon");
                    this._removeClass(a, null, this.options.icons.submenu)._addClass(a, null, t.submenu)
                }
                this._super(e, t)
            },
            _setOptionDisabled: function(e) {
                this._super(e), this.element.attr("aria-disabled", e + ""), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            focus: function(e, t) {
                var a, i, n;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (a = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(a), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var a, i, n, r, s, o;
                this._hasScroll() && (a = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - a - i, r = this.activeMenu.scrollTop(), s = this.activeMenu.height(), o = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(r + n) : n + o > s && this.activeMenu.scrollTop(r + n - s + o))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function(t) {
                var a = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(a)
            },
            collapseAll: function(t, a) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var i = a ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    i.length || (i = this.element), this._close(i), this.blur(t), this._removeClass(i.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = i
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(t) {
                return !e(t.target).closest(".ui-menu").length
            },
            _isDivider: function(e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(e, t)
                }))
            },
            next: function(e) {
                this._move("next", "first", e)
            },
            previous: function(e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(e, t, a) {
                var i;
                this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[t]()), this.focus(a, i)
            },
            nextPage: function(t) {
                var a, i, n;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return 0 > (a = e(this)).offset().top - i - n
                }), this.focus(t, a)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
            },
            previousPage: function(t) {
                var a, i, n;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return (a = e(this)).offset().top - i + n > 0
                }), this.focus(t, a)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var a = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, a)
            },
            _filterMenuItems: function(t) {
                var a = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    i = RegExp("^" + a, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return i.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), e.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, a, i, n = this.element[0].nodeName.toLowerCase(),
                    r = "textarea" === n,
                    s = "input" === n;
                this.isMultiLine = r || !s && this._isContentEditable(this.element), this.valueMethod = this.element[r || s ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) return t = !0, i = !0, void(a = !0);
                        t = !1, i = !1, a = !1;
                        var r = e.ui.keyCode;
                        switch (n.keyCode) {
                            case r.PAGE_UP:
                                t = !0, this._move("previousPage", n);
                                break;
                            case r.PAGE_DOWN:
                                t = !0, this._move("nextPage", n);
                                break;
                            case r.UP:
                                t = !0, this._keyEvent("previous", n);
                                break;
                            case r.DOWN:
                                t = !0, this._keyEvent("next", n);
                                break;
                            case r.ENTER:
                                this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case r.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case r.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                a = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(i) {
                        if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && i.preventDefault());
                        if (!a) {
                            var n = e.ui.keyCode;
                            switch (i.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", i);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", i);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", i);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", i)
                            }
                        }
                    },
                    input: function(e) {
                        return i ? (i = !1, void e.preventDefault()) : void this._searchTimeout(e)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
                    }
                }), this._initSource(), this.menu = e("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== e.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(t, a) {
                        var i, n;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            e(t.target).trigger(t.originalEvent)
                        })) : (n = a.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: n
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), void((i = a.item.attr("aria-label") || n.value) && e.trim(i).length && (this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))))
                    },
                    menuselect: function(t, a) {
                        var i = a.item.data("ui-autocomplete-item"),
                            n = this.previous;
                        this.element[0] !== e.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                            this.previous = n, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = e("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(t) {
                var a = this.menu.element[0];
                return t.target === this.element[0] || t.target === a || e.contains(a, t.target)
            },
            _closeOnClickOutside: function(e) {
                this._isEventTargetInWidget(e) || this.close()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, a, i = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(a, i) {
                    i(e.ui.autocomplete.filter(t, a.term))
                }) : "string" == typeof this.options.source ? (a = this.options.source, this.source = function(t, n) {
                    i.xhr && i.xhr.abort(), i.xhr = e.ajax({
                        url: a,
                        data: t,
                        dataType: "json",
                        success: function(e) {
                            n(e)
                        },
                        error: function() {
                            n([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        a = this.menu.element.is(":visible"),
                        i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !a && !i) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), --this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function(e) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var a = this.menu.element.empty();
                this._renderMenu(a, t), this.isNewMenu = !0, this.menu.refresh(), a.show(), this._resizeMenu(), a.position(e.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, a) {
                var i = this;
                e.each(a, function(e, a) {
                    i._renderItemData(t, a)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, a) {
                return e("<li>").append(e("<div>").text(a.label)).appendTo(t)
            },
            _move: function(e, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            },
            _isContentEditable: function(e) {
                if (!e.length) return !1;
                var t = e.prop("contentEditable");
                return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, a) {
                var i = RegExp(e.ui.autocomplete.escapeRegex(a), "i");
                return e.grep(t, function(e) {
                    return i.test(e.label || e.value || e)
                })
            }
        }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(e) {
                        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var a;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (a = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(a).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete, e.extend(e.ui, {
            datepicker: {
                version: "1.12.1"
            }
        });
    var l;
    e.extend(a.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, a) {
            var i, n, r;
            n = "div" === (i = t.nodeName.toLowerCase()) || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (r = this._newInst(e(t), n)).settings = e.extend({}, a || {}), "input" === i ? this._connectDatepicker(t, r) : n && this._inlineDatepicker(t, r)
        },
        _newInst: function(t, a) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: a,
                dpDiv: a ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, a) {
            var i = e(t);
            a.append = e([]), a.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, a), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(a), e.data(t, "datepicker", a), a.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, a) {
            var i, n, r, s = this._get(a, "appendText"),
                o = this._get(a, "isRTL");
            a.append && a.append.remove(), s && (a.append = e("<span class='" + this._appendClass + "'>" + s + "</span>"), t[o ? "before" : "after"](a.append)), t.off("focus", this._showDatepicker), a.trigger && a.trigger.remove(), ("focus" === (i = this._get(a, "showOn")) || "both" === i) && t.on("focus", this._showDatepicker), ("button" === i || "both" === i) && (n = this._get(a, "buttonText"), r = this._get(a, "buttonImage"), a.trigger = e(this._get(a, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: r,
                alt: n,
                title: n
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(r ? e("<img/>").attr({
                src: r,
                alt: n,
                title: n
            }) : n)), t[o ? "before" : "after"](a.trigger), a.trigger.on("click", function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, a, i, n, r = new Date(2009, 11, 20),
                    s = this._get(e, "dateFormat");
                s.match(/[DM]/) && (t = function(e) {
                    for (a = 0, i = 0, n = 0; e.length > n; n++) e[n].length > a && (a = e[n].length, i = n);
                    return i
                }, r.setMonth(t(this._get(e, s.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(t(this._get(e, s.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), e.input.attr("size", this._formatDate(e, r).length)
            }
        },
        _inlineDatepicker: function(t, a) {
            var i = e(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(a.dpDiv), e.data(t, "datepicker", a), this._setDate(a, this._getDefaultDate(a), !0), this._updateDatepicker(a), this._updateAlternate(a), a.settings.disabled && this._disableDatepicker(t), a.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, a, i, n, s) {
            var o, l, c, u, d, p = this._dialogInst;
            return p || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], "datepicker", p)), r(p.settings, n || {}), a = a && a.constructor === Date ? this._formatDate(p, a) : a, this._dialogInput.val(a), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", p), this
        },
        _destroyDatepicker: function(t) {
            var a, i = e(t),
                n = e.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (a = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === a ? (n.append.remove(), n.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === a || "span" === a) && i.removeClass(this.markerClassName).empty(), l === n && (l = null))
        },
        _enableDatepicker: function(t) {
            var a, i, n = e(t),
                r = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (a = t.nodeName.toLowerCase()) ? (t.disabled = !1, r.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === a || "span" === a) && ((i = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var a, i, n = e(t),
                r = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (a = t.nodeName.toLowerCase()) ? (t.disabled = !0, r.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === a || "span" === a) && ((i = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (e) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, a, i) {
            var n, s, o, l, c = this._getInst(t);
            return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : c ? "all" === a ? e.extend({}, c.settings) : this._get(c, a) : null : (n = a || {}, "string" == typeof a && (n = {}, n[a] = i), void(c && (this._curInst === c && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), r(c.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (c.settings.minDate = this._formatDate(c, o)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), c), this._autoSize(c), this._setDate(c, s), this._updateAlternate(c), this._updateDatepicker(c))))
        },
        _changeDatepicker: function(e, t, a) {
            this._optionDatepicker(e, t, a)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            a && (this._setDate(a, t), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            return a && !a.inline && this._setDateFromField(a, t), a ? this._getDate(a) : null
        },
        _doKeyDown: function(t) {
            var a, i, n, r = e.datepicker._getInst(t.target),
                s = !0,
                o = r.dpDiv.is(".ui-datepicker-rtl");
            if (r._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), s = !1;
                    break;
                case 13:
                    return (n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", r.dpDiv))[0] && e.datepicker._selectDay(t.target, r.selectedMonth, r.selectedYear, n[0]), (a = e.datepicker._get(r, "onSelect")) ? (i = e.datepicker._formatDate(r), a.apply(r.input ? r.input[0] : null, [i, r])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(r, "stepBigMonths") : -e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(r, "stepBigMonths") : +e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), s = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), s = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), s = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(r, "stepBigMonths") : -e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), s = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), s = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(r, "stepBigMonths") : +e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), s = t.ctrlKey || t.metaKey;
                    break;
                default:
                    s = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : s = !1;
            s && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var a, i, n = e.datepicker._getInst(t.target);
            return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > i || !a || a.indexOf(i) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var a = e.datepicker._getInst(t.target);
            if (a.input.val() !== a.lastVal) try {
                e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)) && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
            } catch (e) {}
            return !0
        },
        _showDatepicker: function(a) {
            if ("input" !== (a = a.target || a).nodeName.toLowerCase() && (a = e("input", a.parentNode)[0]), !e.datepicker._isDisabledDatepicker(a) && e.datepicker._lastInput !== a) {
                var i, n, s, o, l, c, u;
                i = e.datepicker._getInst(a), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), !1 !== (s = (n = e.datepicker._get(i, "beforeShow")) ? n.apply(a, [a, i]) : {}) && (r(i.settings, s), i.lastVal = null, e.datepicker._lastInput = a, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (a.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(a), e.datepicker._pos[1] += a.offsetHeight), o = !1, e(a).parents().each(function() {
                    return !(o |= "fixed" === e(this).css("position"))
                }), l = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), l = e.datepicker._checkOffset(i, l, o), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), i.inline || (c = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", t(e(a)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[c] ? i.dpDiv.show(c, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[c || "show"](c ? u : null), e.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, l = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var a, i = this._getNumberOfMonths(t),
                r = i[1],
                s = t.dpDiv.find("." + this._dayOverClass + " a");
            s.length > 0 && n.apply(s.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", 17 * r + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (a = t.yearshtml, setTimeout(function() {
                a === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), a = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, a, i) {
            var n = t.dpDiv.outerWidth(),
                r = t.dpDiv.outerHeight(),
                s = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
                c = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
            return a.left -= this._get(t, "isRTL") ? n - s : 0, a.left -= i && a.left === t.input.offset().left ? e(document).scrollLeft() : 0, a.top -= i && a.top === t.input.offset().top + o ? e(document).scrollTop() : 0, a.left -= Math.min(a.left, a.left + n > l && l > n ? Math.abs(a.left + n - l) : 0), a.top -= Math.min(a.top, a.top + r > c && c > r ? Math.abs(r + o) : 0), a
        },
        _findPos: function(t) {
            for (var a, i = this._getInst(t), n = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
            return a = e(t).offset(), [a.left, a.top]
        },
        _hideDatepicker: function(t) {
            var a, i, n, r, s = this._curInst;
            !s || t && s !== e.data(t, "datepicker") || this._datepickerShowing && (a = this._get(s, "showAnim"), i = this._get(s, "duration"), n = function() {
                e.datepicker._tidyDialog(s)
            }, e.effects && (e.effects.effect[a] || e.effects[a]) ? s.dpDiv.hide(a, e.datepicker._get(s, "showOptions"), i, n) : s.dpDiv["slideDown" === a ? "slideUp" : "fadeIn" === a ? "fadeOut" : "hide"](a ? i : null, n), a || n(), this._datepickerShowing = !1, (r = this._get(s, "onClose")) && r.apply(s.input ? s.input[0] : null, [s.input ? s.input.val() : "", s]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var a = e(t.target),
                    i = e.datepicker._getInst(a[0]);
                (a[0].id !== e.datepicker._mainDivId && 0 === a.parents("#" + e.datepicker._mainDivId).length && !a.hasClass(e.datepicker.markerClassName) && !a.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || a.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== i) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, a, i) {
            var n = e(t),
                r = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(r, a + ("M" === i ? this._get(r, "showCurrentAtPos") : 0), i), this._updateDatepicker(r))
        },
        _gotoToday: function(t) {
            var a, i = e(t),
                n = this._getInst(i[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (a = new Date, n.selectedDay = a.getDate(), n.drawMonth = n.selectedMonth = a.getMonth(), n.drawYear = n.selectedYear = a.getFullYear()), this._notifyChange(n), this._adjustDate(i)
        },
        _selectMonthYear: function(t, a, i) {
            var n = e(t),
                r = this._getInst(n[0]);
            r["selected" + ("M" === i ? "Month" : "Year")] = r["draw" + ("M" === i ? "Month" : "Year")] = parseInt(a.options[a.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(n)
        },
        _selectDay: function(t, a, i, n) {
            var r, s = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || (r = this._getInst(s[0]), r.selectedDay = r.currentDay = e("a", n).html(), r.selectedMonth = r.currentMonth = a, r.selectedYear = r.currentYear = i, this._selectDate(t, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
        },
        _clearDate: function(t) {
            var a = e(t);
            this._selectDate(a, "")
        },
        _selectDate: function(t, a) {
            var i, n = e(t),
                r = this._getInst(n[0]);
            a = null != a ? a : this._formatDate(r), r.input && r.input.val(a), this._updateAlternate(r), (i = this._get(r, "onSelect")) ? i.apply(r.input ? r.input[0] : null, [a, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var a, i, n, r = this._get(t, "altField");
            r && (a = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), n = this.formatDate(a, i, this._getFormatConfig(t)), e(r).val(n))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, a = new Date(e.getTime());
            return a.setDate(a.getDate() + 4 - (a.getDay() || 7)), t = a.getTime(), a.setMonth(0), a.setDate(1), Math.floor(Math.round((t - a) / 864e5) / 7) + 1
        },
        parseDate: function(t, a, i) {
            if (null == t || null == a) throw "Invalid arguments";
            if ("" == (a = "object" == typeof a ? "" + a : a + "")) return null;
            var n, r, s, o, l = 0,
                c = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                d = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (i ? i.dayNames : null) || this._defaults.dayNames,
                h = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (i ? i.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                v = -1,
                y = -1,
                _ = !1,
                w = function(e) {
                    var a = t.length > n + 1 && t.charAt(n + 1) === e;
                    return a && n++, a
                },
                b = function(e) {
                    var t = w(e),
                        i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        n = "y" === e ? i : 1,
                        r = RegExp("^\\d{" + n + "," + i + "}"),
                        s = a.substring(l).match(r);
                    if (!s) throw "Missing number at position " + l;
                    return l += s[0].length, parseInt(s[0], 10)
                },
                S = function(t, i, n) {
                    var r = -1,
                        s = e.map(w(t) ? n : i, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(s, function(e, t) {
                            var i = t[1];
                            return a.substr(l, i.length).toLowerCase() === i.toLowerCase() ? (r = t[0], l += i.length, !1) : void 0
                        }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + l
                },
                x = function() {
                    if (a.charAt(l) !== t.charAt(n)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (n = 0; t.length > n; n++)
                if (_) "'" !== t.charAt(n) || w("'") ? x() : _ = !1;
                else switch (t.charAt(n)) {
                    case "d":
                        v = b("d");
                        break;
                    case "D":
                        S("D", d, p);
                        break;
                    case "o":
                        y = b("o");
                        break;
                    case "m":
                        m = b("m");
                        break;
                    case "M":
                        m = S("M", h, f);
                        break;
                    case "y":
                        g = b("y");
                        break;
                    case "@":
                        g = (o = new Date(b("@"))).getFullYear(), m = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "!":
                        g = (o = new Date((b("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "'":
                        w("'") ? x() : _ = !0;
                        break;
                    default:
                        x()
                }
            if (a.length > l && (s = a.substr(l), !/^\s+/.test(s))) throw "Extra/unparsed characters found in date: " + s;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), y > -1)
                for (m = 1, v = y; !((r = this._getDaysInMonth(g, m - 1)) >= v);) m++, v -= r;
            if ((o = this._daylightSavingAdjust(new Date(g, m - 1, v))).getFullYear() !== g || o.getMonth() + 1 !== m || o.getDate() !== v) throw "Invalid date";
            return o
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, a) {
            if (!t) return "";
            var i, n = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
                r = (a ? a.dayNames : null) || this._defaults.dayNames,
                s = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (a ? a.monthNames : null) || this._defaults.monthNames,
                l = function(t) {
                    var a = e.length > i + 1 && e.charAt(i + 1) === t;
                    return a && i++, a
                },
                c = function(e, t, a) {
                    var i = "" + t;
                    if (l(e))
                        for (; a > i.length;) i = "0" + i;
                    return i
                },
                u = function(e, t, a, i) {
                    return l(e) ? i[t] : a[t]
                },
                d = "",
                p = !1;
            if (t)
                for (i = 0; e.length > i; i++)
                    if (p) "'" !== e.charAt(i) || l("'") ? d += e.charAt(i) : p = !1;
                    else switch (e.charAt(i)) {
                        case "d":
                            d += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), n, r);
                            break;
                        case "o":
                            d += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), s, o);
                            break;
                        case "y":
                            d += l("y") ? t.getFullYear() : (10 > t.getFullYear() % 100 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? d += "'" : p = !0;
                            break;
                        default:
                            d += e.charAt(i)
                    }
            return d
        },
        _possibleChars: function(e) {
            var t, a = "",
                i = !1,
                n = function(a) {
                    var i = e.length > t + 1 && e.charAt(t + 1) === a;
                    return i && t++, i
                };
            for (t = 0; e.length > t; t++)
                if (i) "'" !== e.charAt(t) || n("'") ? a += e.charAt(t) : i = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        a += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? a += "'" : i = !0;
                        break;
                    default:
                        a += e.charAt(t)
                }
            return a
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var a = this._get(e, "dateFormat"),
                    i = e.lastVal = e.input ? e.input.val() : null,
                    n = this._getDefaultDate(e),
                    r = n,
                    s = this._getFormatConfig(e);
                try {
                    r = this.parseDate(a, i, s) || n
                } catch (e) {
                    i = t ? "" : i
                }
                e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), e.currentDay = i ? r.getDate() : 0, e.currentMonth = i ? r.getMonth() : 0, e.currentYear = i ? r.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, a, i) {
            var n = null == a || "" === a ? i : "string" == typeof a ? function(a) {
                try {
                    return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), a, e.datepicker._getFormatConfig(t))
                } catch (e) {}
                for (var i = (a.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = i.getFullYear(), r = i.getMonth(), s = i.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = o.exec(a); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            s += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            s += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            r += parseInt(l[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(n, r));
                            break;
                        case "y":
                        case "Y":
                            n += parseInt(l[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(n, r))
                    }
                    l = o.exec(a)
                }
                return new Date(n, r, s)
            }(a) : "number" == typeof a ? isNaN(a) ? i : function(e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }(a) : new Date(a.getTime());
            return (n = n && "Invalid Date" == "" + n ? i : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, a) {
            var i = !t,
                n = e.selectedMonth,
                r = e.selectedYear,
                s = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = s.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = s.getMonth(), e.drawYear = e.selectedYear = e.currentYear = s.getFullYear(), n === e.selectedMonth && r === e.selectedYear || a || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _attachHandlers: function(t) {
            var a = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(i, -a, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(i, +a, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, a, i, n, r, s, o, l, c, u, d, p, h, f, g, m, v, y, _, w, b, S, x, k, C, D, T, M, F, $, P, I, O, E, A, L, z, j, R, N = new Date,
                H = this._daylightSavingAdjust(new Date(N.getFullYear(), N.getMonth(), N.getDate())),
                Y = this._get(e, "isRTL"),
                B = this._get(e, "showButtonPanel"),
                W = this._get(e, "hideIfNoPrevNext"),
                U = this._get(e, "navigationAsDateFormat"),
                V = this._getNumberOfMonths(e),
                q = this._get(e, "showCurrentAtPos"),
                G = this._get(e, "stepMonths"),
                X = 1 !== V[0] || 1 !== V[1],
                K = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                J = this._getMinMaxDate(e, "min"),
                Z = this._getMinMaxDate(e, "max"),
                Q = e.drawMonth - q,
                ee = e.drawYear;
            if (0 > Q && (Q += 12, ee--), Z)
                for (t = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - V[0] * V[1] + 1, Z.getDate())), t = J && J > t ? J : t; this._daylightSavingAdjust(new Date(ee, Q, 1)) > t;) 0 > --Q && (Q = 11, ee--);
            for (e.drawMonth = Q, e.drawYear = ee, a = this._get(e, "prevText"), a = U ? this.formatDate(a, this._daylightSavingAdjust(new Date(ee, Q - G, 1)), this._getFormatConfig(e)) : a, i = this._canAdjustMonth(e, -1, ee, Q) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + a + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + a + "</span></a>", n = this._get(e, "nextText"), n = U ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, Q + G, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, 1, ee, Q) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", s = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? K : H, s = U ? this.formatDate(s, o, this._getFormatConfig(e)) : s, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + s + "</button>" : "") + (Y ? "" : l) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), p = this._get(e, "dayNames"), h = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), g = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), _ = this._getDefaultDate(e), w = "", S = 0; V[0] > S; S++) {
                for (x = "", this.maxRows = 4, k = 0; V[1] > k; k++) {
                    if (C = this._daylightSavingAdjust(new Date(ee, Q, e.selectedDay)), D = " ui-corner-all", T = "", X) {
                        if (T += "<div class='ui-datepicker-group", V[1] > 1) switch (k) {
                            case 0:
                                T += " ui-datepicker-group-first", D = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case V[1] - 1:
                                T += " ui-datepicker-group-last", D = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", D = ""
                        }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === S ? Y ? r : i : "") + (/all|right/.test(D) && 0 === S ? Y ? i : r : "") + this._generateMonthYearHeader(e, Q, ee, J, Z, S > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", M = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++) F = (b + u) % 7, M += "<th scope='col'" + ((b + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + p[F] + "'>" + h[F] + "</span></th>";
                    for (T += M + "</tr></thead><tbody>", $ = this._getDaysInMonth(ee, Q), ee === e.selectedYear && Q === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, $)), P = (this._getFirstDayOfMonth(ee, Q) - u + 7) % 7, I = Math.ceil((P + $) / 7), O = X && this.maxRows > I ? this.maxRows : I, this.maxRows = O, E = this._daylightSavingAdjust(new Date(ee, Q, 1 - P)), A = 0; O > A; A++) {
                        for (T += "<tr>", L = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(E) + "</td>" : "", b = 0; 7 > b; b++) z = m ? m.apply(e.input ? e.input[0] : null, [E]) : [!0, ""], j = E.getMonth() !== Q, R = j && !y || !z[0] || J && J > E || Z && E > Z, L += "<td class='" + ((b + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (E.getTime() === C.getTime() && Q === e.selectedMonth && e._keyEvent || _.getTime() === E.getTime() && _.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + z[1] + (E.getTime() === K.getTime() ? " " + this._currentClass : "") + (E.getTime() === H.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + E.getMonth() + "' data-year='" + E.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + E.getDate() + "</span>" : "<a class='ui-state-default" + (E.getTime() === H.getTime() ? " ui-state-highlight" : "") + (E.getTime() === K.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + E.getDate() + "</a>") + "</td>", E.setDate(E.getDate() + 1), E = this._daylightSavingAdjust(E);
                        T += L + "</tr>"
                    }++Q > 11 && (Q = 0, ee++), x += T += "</tbody></table>" + (X ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                w += x
            }
            return w += c, e._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(e, t, a, i, n, r, s, o) {
            var l, c, u, d, p, h, f, g, m = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                _ = "<div class='ui-datepicker-title'>",
                w = "";
            if (r || !m) w += "<span class='ui-datepicker-month'>" + s[t] + "</span>";
            else {
                for (l = i && i.getFullYear() === a, c = n && n.getFullYear() === a, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= i.getMonth()) && (!c || n.getMonth() >= u) && (w += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + o[u] + "</option>");
                w += "</select>"
            }
            if (y || (_ += w + (!r && m && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", r || !v) _ += "<span class='ui-datepicker-year'>" + a + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), p = (new Date).getFullYear(), f = (h = function(e) {
                            var t = e.match(/c[+\-].*/) ? a + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? p + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? p : t
                        })(d[0]), g = Math.max(f, h(d[1] || "")), f = i ? Math.max(f, i.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === a ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", _ += e.yearshtml, e.yearshtml = null
                } return _ += this._get(e, "yearSuffix"), y && (_ += (!r && m && v ? "" : "&#xa0;") + w), _ += "</div>"
        },
        _adjustInstDate: function(e, t, a) {
            var i = e.selectedYear + ("Y" === a ? t : 0),
                n = e.selectedMonth + ("M" === a ? t : 0),
                r = Math.min(e.selectedDay, this._getDaysInMonth(i, n)) + ("D" === a ? t : 0),
                s = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, n, r)));
            e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), ("M" === a || "Y" === a) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max"),
                n = a && a > t ? a : t;
            return i && n > i ? i : n
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, a, i) {
            var n = this._getNumberOfMonths(e),
                r = this._daylightSavingAdjust(new Date(a, i + (0 > t ? t : n[0] * n[1]), 1));
            return 0 > t && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(e, r)
        },
        _isInRange: function(e, t) {
            var a, i, n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                s = null,
                o = null,
                l = this._get(e, "yearRange");
            return l && (a = l.split(":"), i = (new Date).getFullYear(), s = parseInt(a[0], 10), o = parseInt(a[1], 10), a[0].match(/[+\-].*/) && (s += i), a[1].match(/[+\-].*/) && (o += i)), (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime()) && (!s || t.getFullYear() >= s) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, a, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, a, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var a = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(a)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(a)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(a))
    }, e.datepicker = new a, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1", e.datepicker, e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var c = !1;
    e(document).on("mouseup", function() {
        c = !1
    }), e.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).on("click." + this.widgetName, function(a) {
                return !0 === e.data(a.target, t.widgetName + ".preventClickEvent") ? (e.removeData(a.target, t.widgetName + ".preventClickEvent"), a.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!c) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var a = this,
                    i = 1 === t.which,
                    n = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                return !(i && !n && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    a.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return a._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return a._mouseUp(e)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), c = !0, !0))
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, c = !1, t.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, a, i = this.options,
                n = this.element.find(".ui-slider-handle"),
                r = [];
            for (a = i.values && i.values.length || 1, n.length > a && (n.slice(a).remove(), n = n.slice(0, a)), t = n.length; a > t; t++) r.push("<span tabindex='0'></span>");
            this.handles = n.add(e(r.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var t = this.options;
            t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = e("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var a, i, n, r, s, o, l, c = this,
                u = this.options;
            return !u.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), a = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(a), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var a = Math.abs(i - c.values(t));
                (n > a || n === a && (t === c._lastChangedValue || c.values(t) === u.min)) && (n = a, r = e(this), s = t)
            }), !1 !== this._start(t, s) && (this._mouseSliding = !0, this._handleIndex = s, this._addClass(r, null, "ui-state-active"), r.trigger("focus"), o = r.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - o.left - r.width() / 2,
                top: t.pageY - o.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, s, i), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                a = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, a), !1
        },
        _mouseStop: function(e) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, a, i, n, r;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, a = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, a = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (i = a / t) > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), n = this._valueMax() - this._valueMin(), r = this._valueMin() + i * n, this._trimAlignValue(r)
        },
        _uiHash: function(e, t, a) {
            var i = {
                handle: this.handles[e],
                handleIndex: e,
                value: void 0 !== t ? t : this.value()
            };
            return this._hasMultipleValues() && (i.value = void 0 !== t ? t : this.values(e), i.values = a || this.values()), i
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(e, t) {
            return this._trigger("start", e, this._uiHash(t))
        },
        _slide: function(e, t, a) {
            var i, n = this.value(),
                r = this.values();
            this._hasMultipleValues() && (i = this.values(t ? 0 : 1), n = this.values(t), 2 === this.options.values.length && !0 === this.options.range && (a = 0 === t ? Math.min(i, a) : Math.max(i, a)), r[t] = a), a !== n && !1 !== this._trigger("slide", e, this._uiHash(t, a, r)) && (this._hasMultipleValues() ? this.values(t, a) : this.value(a))
        },
        _stop: function(e, t) {
            this._trigger("stop", e, this._uiHash(t))
        },
        _change: function(e, t) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)))
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(t, a) {
            var i, n, r;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(a), this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
            for (i = this.options.values, n = arguments[0], r = 0; i.length > r; r += 1) i[r] = this._trimAlignValue(n[r]), this._change(null, r);
            this._refreshValue()
        },
        _setOption: function(t, a) {
            var i, n = 0;
            switch ("range" === t && !0 === this.options.range && ("min" === a ? (this.options.value = this._values(0), this.options.values = null) : "max" === a && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), this._super(t, a), t) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(a), this.handles.css("horizontal" === a ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), i = n - 1; i >= 0; i--) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(e) {
            this._super(e), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, a, i;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this._hasMultipleValues()) {
                for (a = this.options.values.slice(), i = 0; a.length > i; i += 1) a[i] = this._trimAlignValue(a[i]);
                return a
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                a = (e - this._valueMin()) % t,
                i = e - a;
            return 2 * Math.abs(a) >= t && (i += a > 0 ? t : -t), parseFloat(i.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                a = this.options.step;
            (e = Math.round((e - t) / a) * a + t) > this.options.max && (e -= a), this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                a = t.indexOf(".");
            return -1 === a ? 0 : t.length - a - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(e) {
            "vertical" === e && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === e && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var t, a, i, n, r, s = this.options.range,
                o = this.options,
                l = this,
                c = !this._animateOff && o.animate,
                u = {};
            this._hasMultipleValues() ? this.handles.each(function(i) {
                a = (l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = a + "%", e(this).stop(1, 1)[c ? "animate" : "css"](u, o.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    left: a + "%"
                }, o.animate), 1 === i && l.range[c ? "animate" : "css"]({
                    width: a - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === i && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    bottom: a + "%"
                }, o.animate), 1 === i && l.range[c ? "animate" : "css"]({
                    height: a - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), t = a
            }) : (i = this.value(), n = this._valueMin(), r = this._valueMax(), a = r !== n ? (i - n) / (r - n) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = a + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](u, o.animate), "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: a + "%"
            }, o.animate), "max" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: 100 - a + "%"
            }, o.animate), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: a + "%"
            }, o.animate), "max" === s && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: 100 - a + "%"
            }, o.animate))
        },
        _handleEvents: {
            keydown: function(t) {
                var a, i, n, r = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(e(t.target), null, "ui-state-active"), !1 === this._start(t, r))) return
                }
                switch (n = this.options.step, a = i = this._hasMultipleValues() ? this.values(r) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(a + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(a - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (a === this._valueMax()) return;
                        i = this._trimAlignValue(a + n);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (a === this._valueMin()) return;
                        i = this._trimAlignValue(a - n)
                }
                this._slide(t, r, i)
            },
            keyup: function(t) {
                var a = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, a), this._change(t, a), this._removeClass(e(t.target), null, "ui-state-active"))
            }
        }
    })
}),
function() {
    "use strict";
    var e, t = function(i, n) {
        function r(e) {
            return Math.floor(e)
        }

        function s() {
            var e = b.params.autoplay,
                t = b.slides.eq(b.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || b.params.autoplay), b.autoplayTimeoutId = setTimeout(function() {
                b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? n.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b))
            }, e)
        }

        function o(t, a) {
            var i = e(t.target);
            if (!i.is(a))
                if ("string" == typeof a) i = i.parents(a);
                else if (a.nodeType) {
                var n;
                return i.parents().each(function(e, t) {
                    t === a && (n = a)
                }), n ? a : void 0
            }
            if (0 !== i.length) return i[0]
        }

        function l(e, t) {
            t = t || {};
            var a = new(window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                e.forEach(function(e) {
                    b.onResize(!0), b.emit("onObserverUpdate", b, e)
                })
            });
            a.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), b.observers.push(a)
        }

        function c(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === t || !b.isHorizontal() && 40 === t)) return !1;
            if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === t || !b.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var a = !1;
                    if (b.container.parents("." + b.params.slideClass).length > 0 && 0 === b.container.parents("." + b.params.slideActiveClass).length) return;
                    var i = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        n = window.innerWidth,
                        r = window.innerHeight,
                        s = b.container.offset();
                    b.rtl && (s.left = s.left - b.container[0].scrollLeft);
                    for (var o = [
                            [s.left, s.top],
                            [s.left + b.width, s.top],
                            [s.left, s.top + b.height],
                            [s.left + b.width, s.top + b.height]
                        ], l = 0; l < o.length; l++) {
                        var c = o[l];
                        c[0] >= i.left && c[0] <= i.left + n && c[1] >= i.top && c[1] <= i.top + r && (a = !0)
                    }
                    if (!a) return
                }
                b.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !b.rtl || 37 === t && b.rtl) && b.slideNext(), (37 === t && !b.rtl || 39 === t && b.rtl) && b.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && b.slideNext(), 38 === t && b.slidePrev())
            }
        }

        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0,
                a = b.rtl ? -1 : 1,
                i = d(e);
            if (b.params.mousewheelForceToAxis)
                if (b.isHorizontal()) {
                    if (!(Math.abs(i.pixelX) > Math.abs(i.pixelY))) return;
                    t = i.pixelX * a
                } else {
                    if (!(Math.abs(i.pixelY) > Math.abs(i.pixelX))) return;
                    t = i.pixelY
                }
            else t = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * a : -i.pixelY;
            if (0 !== t) {
                if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
                    var n = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity,
                        r = b.isBeginning,
                        s = b.isEnd;
                    if (n >= b.minTranslate() && (n = b.minTranslate()), n <= b.maxTranslate() && (n = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(n), b.updateProgress(), b.updateActiveIndex(), (!r && b.isBeginning || !s && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function() {
                            b.slideReset()
                        }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), b.emit("onScroll", b, e), b.params.autoplay && b.params.autoplayDisableOnInteraction && b.stopAutoplay(), 0 === n || n === b.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - b.mousewheel.lastScrollTime > 60)
                        if (t < 0)
                            if (b.isEnd && !b.params.loop || b.animating) {
                                if (b.params.mousewheelReleaseOnEdges) return !0
                            } else b.slideNext(), b.emit("onScroll", b, e);
                    else if (b.isBeginning && !b.params.loop || b.animating) {
                        if (b.params.mousewheelReleaseOnEdges) return !0
                    } else b.slidePrev(), b.emit("onScroll", b, e);
                    b.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function d(e) {
            var t = 0,
                a = 0,
                i = 0,
                n = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, n = 10 * a, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || n) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, n *= 40) : (i *= 800, n *= 800)), i && !t && (t = i < 1 ? -1 : 1), n && !a && (a = n < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: n
            }
        }

        function p(t, a) {
            t = e(t);
            var i, n, r, s = b.rtl ? -1 : 1;
            i = t.attr("data-swiper-parallax") || "0", n = t.attr("data-swiper-parallax-x"), r = t.attr("data-swiper-parallax-y"), n || r ? (n = n || "0", r = r || "0") : b.isHorizontal() ? (n = i, r = "0") : (r = i, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * a * s + "%" : n * a * s + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a + "%" : r * a + "px", t.transform("translate3d(" + n + ", " + r + ",0px)")
        }

        function h(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof t)) return new t(i, n);
        var f = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            g = n && n.virtualTranslate;
        n = n || {};
        var m = {};
        for (var v in n)
            if ("object" != typeof n[v] || null === n[v] || n[v].nodeType || n[v] === window || n[v] === document || void 0 !== a && n[v] instanceof a || "undefined" != typeof jQuery && n[v] instanceof jQuery) m[v] = n[v];
            else {
                m[v] = {};
                for (var y in n[v]) m[v][y] = n[v][y]
            } for (var _ in f)
            if (void 0 === n[_]) n[_] = f[_];
            else if ("object" == typeof n[_])
            for (var w in f[_]) void 0 === n[_][w] && (n[_][w] = f[_][w]);
        var b = this;
        if (b.params = n, b.originalParams = m, b.classNames = [], void 0 !== e && void 0 !== a && (e = a), (void 0 !== e || (e = void 0 === a ? window.Dom7 || window.Zepto || window.jQuery : a)) && (b.$ = e, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
                if (!b.params.breakpoints) return !1;
                var e, t = !1,
                    a = [];
                for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && a.push(e);
                a.sort(function(e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var i = 0; i < a.length; i++)(e = a[i]) >= window.innerWidth && !t && (t = e);
                return t || "max"
            }, b.setBreakpoint = function() {
                var e = b.getActiveBreakpoint();
                if (e && b.currentBreakpoint !== e) {
                    var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
                        a = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                    for (var i in t) b.params[i] = t[i];
                    b.currentBreakpoint = e, a && b.destroyLoop && b.reLoop(!0)
                }
            }, b.params.breakpoints && b.setBreakpoint(), b.container = e(i), 0 !== b.container.length)) {
            if (b.container.length > 1) {
                var S = [];
                return b.container.each(function() {
                    S.push(new t(this, n))
                }), S
            }
            b.container[0].swiper = b, b.container.data("swiper", b), b.classNames.push(b.params.containerModifierClass + b.params.direction), b.params.freeMode && b.classNames.push(b.params.containerModifierClass + "free-mode"), b.support.flexbox || (b.classNames.push(b.params.containerModifierClass + "no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push(b.params.containerModifierClass + "autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), b.params.touchReleaseOnEdges && (b.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push(b.params.containerModifierClass + "3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push(b.params.containerModifierClass + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0, b.params.setWrapperSize = !1), "fade" !== b.params.effect && "flip" !== b.params.effect || (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, b.params.spaceBetween = 0, b.params.setWrapperSize = !1, void 0 === g && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = e(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && b.paginationContainer.length > 1 && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass(b.params.paginationModifierClass + "clickable") : b.params.paginationClickable = !1, b.paginationContainer.addClass(b.params.paginationModifierClass + b.params.paginationType)), (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = e(b.params.nextButton), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && b.nextButton.length > 1 && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && (b.prevButton = e(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && b.prevButton.length > 1 && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), b.isHorizontal = function() {
                return "horizontal" === b.params.direction
            }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push(b.params.containerModifierClass + "rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), b.params.slidesPerColumn > 1 && b.classNames.push(b.params.containerModifierClass + "multirow"), b.device.android && b.classNames.push(b.params.containerModifierClass + "android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function() {
                b.params.allowSwipeToNext = !1, !1 === b.params.allowSwipeToPrev && b.params.grabCursor && b.unsetGrabCursor()
            }, b.lockSwipeToPrev = function() {
                b.params.allowSwipeToPrev = !1, !1 === b.params.allowSwipeToNext && b.params.grabCursor && b.unsetGrabCursor()
            }, b.lockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1, b.params.grabCursor && b.unsetGrabCursor()
            }, b.unlockSwipeToNext = function() {
                b.params.allowSwipeToNext = !0, !0 === b.params.allowSwipeToPrev && b.params.grabCursor && b.setGrabCursor()
            }, b.unlockSwipeToPrev = function() {
                b.params.allowSwipeToPrev = !0, !0 === b.params.allowSwipeToNext && b.params.grabCursor && b.setGrabCursor()
            }, b.unlockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0, b.params.grabCursor && b.setGrabCursor()
            }, b.setGrabCursor = function(e) {
                b.container[0].style.cursor = "move", b.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", b.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", b.container[0].style.cursor = e ? "grabbing" : "grab"
            }, b.unsetGrabCursor = function() {
                b.container[0].style.cursor = ""
            }, b.params.grabCursor && b.setGrabCursor(), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function(e, t, a, i, n, r) {
                function s() {
                    r && r()
                }
                var o;
                e.complete && n ? s() : t ? (o = new window.Image, o.onload = s, o.onerror = s, i && (o.sizes = i), a && (o.srcset = a), t && (o.src = t)) : s()
            }, b.preloadImages = function() {
                b.imagesToLoad = b.container.find("img");
                for (var e = 0; e < b.imagesToLoad.length; e++) b.loadImage(b.imagesToLoad[e], b.imagesToLoad[e].currentSrc || b.imagesToLoad[e].getAttribute("src"), b.imagesToLoad[e].srcset || b.imagesToLoad[e].getAttribute("srcset"), b.imagesToLoad[e].sizes || b.imagesToLoad[e].getAttribute("sizes"), !0, function() {
                    void 0 !== b && null !== b && b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
                })
            }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function() {
                return void 0 === b.autoplayTimeoutId && !!b.params.autoplay && !b.autoplaying && (b.autoplaying = !0, b.emit("onAutoplayStart", b), void s())
            }, b.stopAutoplay = function(e) {
                b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
            }, b.pauseAutoplay = function(e) {
                b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e ? (b.autoplayPaused = !1, s()) : b.wrapper.transitionEnd(function() {
                    b && (b.autoplayPaused = !1, b.autoplaying ? s() : b.stopAutoplay())
                }))
            }, b.minTranslate = function() {
                return -b.snapGrid[0]
            }, b.maxTranslate = function() {
                return -b.snapGrid[b.snapGrid.length - 1]
            }, b.updateAutoHeight = function() {
                var e, t = [],
                    a = 0;
                if ("auto" !== b.params.slidesPerView && b.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(b.params.slidesPerView); e++) {
                        var i = b.activeIndex + e;
                        if (i > b.slides.length) break;
                        t.push(b.slides.eq(i)[0])
                    } else t.push(b.slides.eq(b.activeIndex)[0]);
                for (e = 0; e < t.length; e++)
                    if (void 0 !== t[e]) {
                        var n = t[e].offsetHeight;
                        a = n > a ? n : a
                    } a && b.wrapper.css("height", a + "px")
            }, b.updateContainerSize = function() {
                var e, t;
                e = void 0 !== b.params.width ? b.params.width : b.container[0].clientWidth, t = void 0 !== b.params.height ? b.params.height : b.container[0].clientHeight, 0 === e && b.isHorizontal() || 0 === t && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), t = t - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = t, b.size = b.isHorizontal() ? b.width : b.height)
            }, b.updateSlidesSize = function() {
                b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];
                var e, t = b.params.spaceBetween,
                    a = -b.params.slidesOffsetBefore,
                    i = 0,
                    n = 0;
                if (void 0 !== b.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * b.size), b.virtualSize = -t, b.rtl ? b.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : b.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var s;
                    b.params.slidesPerColumn > 1 && (s = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (s = Math.max(s, b.params.slidesPerView * b.params.slidesPerColumn)));
                    var o, l = b.params.slidesPerColumn,
                        c = s / l,
                        u = c - (b.params.slidesPerColumn * c - b.slides.length);
                    for (e = 0; e < b.slides.length; e++) {
                        o = 0;
                        var d = b.slides.eq(e);
                        if (b.params.slidesPerColumn > 1) {
                            var p, h, f;
                            "column" === b.params.slidesPerColumnFill ? (h = Math.floor(e / l), f = e - h * l, (h > u || h === u && f === l - 1) && ++f >= l && (f = 0, h++), p = h + f * s / l, d.css({
                                "-webkit-box-ordinal-group": p,
                                "-moz-box-ordinal-group": p,
                                "-ms-flex-order": p,
                                "-webkit-order": p,
                                order: p
                            })) : (f = Math.floor(e / c), h = e - f * c), d.css("margin-" + (b.isHorizontal() ? "top" : "left"), 0 !== f && b.params.spaceBetween && b.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", f)
                        }
                        "none" !== d.css("display") && ("auto" === b.params.slidesPerView ? (o = b.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0), b.params.roundLengths && (o = r(o))) : (o = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView, b.params.roundLengths && (o = r(o)), b.isHorizontal() ? b.slides[e].style.width = o + "px" : b.slides[e].style.height = o + "px"), b.slides[e].swiperSlideSize = o, b.slidesSizesGrid.push(o), b.params.centeredSlides ? (a = a + o / 2 + i / 2 + t, 0 === e && (a = a - b.size / 2 - t), Math.abs(a) < .001 && (a = 0), n % b.params.slidesPerGroup == 0 && b.snapGrid.push(a), b.slidesGrid.push(a)) : (n % b.params.slidesPerGroup == 0 && b.snapGrid.push(a), b.slidesGrid.push(a), a = a + o + t), b.virtualSize += o + t, i = o, n++)
                    }
                    b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
                    var g;
                    if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
                            width: b.virtualSize + b.params.spaceBetween + "px"
                        }), b.support.flexbox && !b.params.setWrapperSize || (b.isHorizontal() ? b.wrapper.css({
                            width: b.virtualSize + b.params.spaceBetween + "px"
                        }) : b.wrapper.css({
                            height: b.virtualSize + b.params.spaceBetween + "px"
                        })), b.params.slidesPerColumn > 1 && (b.virtualSize = (o + b.params.spaceBetween) * s, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.isHorizontal() ? b.wrapper.css({
                            width: b.virtualSize + b.params.spaceBetween + "px"
                        }) : b.wrapper.css({
                            height: b.virtualSize + b.params.spaceBetween + "px"
                        }), b.params.centeredSlides)) {
                        for (g = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && g.push(b.snapGrid[e]);
                        b.snapGrid = g
                    }
                    if (!b.params.centeredSlides) {
                        for (g = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && g.push(b.snapGrid[e]);
                        b.snapGrid = g, Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 && b.snapGrid.push(b.virtualSize - b.size)
                    }
                    0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
                        marginLeft: t + "px"
                    }) : b.slides.css({
                        marginRight: t + "px"
                    }) : b.slides.css({
                        marginBottom: t + "px"
                    })), b.params.watchSlidesProgress && b.updateSlidesOffset()
                }
            }, b.updateSlidesOffset = function() {
                for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop
            }, b.currentSlidesPerView = function() {
                var e, t, a = 1;
                if (b.params.centeredSlides) {
                    var i, n = b.slides[b.activeIndex].swiperSlideSize;
                    for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slides[e] && !i && (n += b.slides[e].swiperSlideSize, a++, n > b.size && (i = !0));
                    for (t = b.activeIndex - 1; t >= 0; t--) b.slides[t] && !i && (n += b.slides[t].swiperSlideSize, a++, n > b.size && (i = !0))
                } else
                    for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slidesGrid[e] - b.slidesGrid[b.activeIndex] < b.size && a++;
                return a
            }, b.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = b.translate || 0), 0 !== b.slides.length) {
                    void 0 === b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                    var t = -e;
                    b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                    for (var a = 0; a < b.slides.length; a++) {
                        var i = b.slides[a],
                            n = (t + (b.params.centeredSlides ? b.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + b.params.spaceBetween);
                        if (b.params.watchSlidesVisibility) {
                            var r = -(t - i.swiperSlideOffset),
                                s = r + b.slidesSizesGrid[a];
                            (r >= 0 && r < b.size || s > 0 && s <= b.size || r <= 0 && s >= b.size) && b.slides.eq(a).addClass(b.params.slideVisibleClass)
                        }
                        i.progress = b.rtl ? -n : n
                    }
                }
            }, b.updateProgress = function(e) {
                void 0 === e && (e = b.translate || 0);
                var t = b.maxTranslate() - b.minTranslate(),
                    a = b.isBeginning,
                    i = b.isEnd;
                0 === t ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / t, b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1), b.isBeginning && !a && b.emit("onReachBeginning", b), b.isEnd && !i && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress)
            }, b.updateActiveIndex = function() {
                var e, t, a, i = b.rtl ? b.translate : -b.translate;
                for (t = 0; t < b.slidesGrid.length; t++) void 0 !== b.slidesGrid[t + 1] ? i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2 ? e = t : i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] && (e = t + 1) : i >= b.slidesGrid[t] && (e = t);
                b.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (a = Math.floor(e / b.params.slidesPerGroup)) >= b.snapGrid.length && (a = b.snapGrid.length - 1), e !== b.activeIndex && (b.snapIndex = a, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses(), b.updateRealIndex())
            }, b.updateRealIndex = function() {
                b.realIndex = parseInt(b.slides.eq(b.activeIndex).attr("data-swiper-slide-index") || b.activeIndex, 10)
            }, b.updateClasses = function() {
                b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass + " " + b.params.slideDuplicateActiveClass + " " + b.params.slideDuplicateNextClass + " " + b.params.slideDuplicatePrevClass);
                var t = b.slides.eq(b.activeIndex);
                t.addClass(b.params.slideActiveClass), n.loop && (t.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass));
                var a = t.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                b.params.loop && 0 === a.length && (a = b.slides.eq(0)).addClass(b.params.slideNextClass);
                var i = t.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                if (b.params.loop && 0 === i.length && (i = b.slides.eq(-1)).addClass(b.params.slidePrevClass), n.loop && (a.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass), i.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass)), b.paginationContainer && b.paginationContainer.length > 0) {
                    var r, s = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                    if (b.params.loop ? ((r = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)) > b.slides.length - 1 - 2 * b.loopedSlides && (r -= b.slides.length - 2 * b.loopedSlides), r > s - 1 && (r -= s), r < 0 && "bullets" !== b.params.paginationType && (r = s + r)) : r = void 0 !== b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && b.bullets.length > 0 && (b.bullets.removeClass(b.params.bulletActiveClass), b.paginationContainer.length > 1 ? b.bullets.each(function() {
                            e(this).index() === r && e(this).addClass(b.params.bulletActiveClass)
                        }) : b.bullets.eq(r).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(r + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(s)), "progress" === b.params.paginationType) {
                        var o = (r + 1) / s,
                            l = o,
                            c = 1;
                        b.isHorizontal() || (c = o, l = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + c + ")").transition(b.params.speed)
                    }
                    "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, r + 1, s)), b.emit("onPaginationRendered", b, b.paginationContainer[0]))
                }
                b.params.loop || (b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))))
            }, b.updatePagination = function() {
                if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === b.params.paginationType) {
                        for (var t = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, a = 0; a < t; a++) e += b.params.paginationBulletRender ? b.params.paginationBulletRender(b, a, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                        b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
                    }
                    "fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0])
                }
            }, b.update = function(e) {
                function t() {
                    b.rtl, b.translate, a = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(a), b.updateActiveIndex(), b.updateClasses()
                }
                if (b)
                    if (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e) {
                        var a;
                        b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (t(), b.params.autoHeight && b.updateAutoHeight()) : (("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0)) || t()
                    } else b.params.autoHeight && b.updateAutoHeight()
            }, b.onResize = function(e) {
                b.params.breakpoints && b.setBreakpoint();
                var t = b.params.allowSwipeToPrev,
                    a = b.params.allowSwipeToNext;
                b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
                var i = !1;
                if (b.params.freeMode) {
                    var n = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                    b.setWrapperTranslate(n), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight()
                } else b.updateClasses(), i = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                b.params.lazyLoading && !i && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = t, b.params.allowSwipeToNext = a
            }, b.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? b.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (b.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), b.touchEvents = {
                start: b.support.touch || !b.params.simulateTouch ? "touchstart" : b.touchEventsDesktop.start,
                move: b.support.touch || !b.params.simulateTouch ? "touchmove" : b.touchEventsDesktop.move,
                end: b.support.touch || !b.params.simulateTouch ? "touchend" : b.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), b.initEvents = function(e) {
                var t = e ? "off" : "on",
                    a = e ? "removeEventListener" : "addEventListener",
                    i = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
                    r = b.support.touch ? i : document,
                    s = !!b.params.nested;
                if (b.browser.ie) i[a](b.touchEvents.start, b.onTouchStart, !1), r[a](b.touchEvents.move, b.onTouchMove, s), r[a](b.touchEvents.end, b.onTouchEnd, !1);
                else {
                    if (b.support.touch) {
                        var o = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        i[a](b.touchEvents.start, b.onTouchStart, o), i[a](b.touchEvents.move, b.onTouchMove, s), i[a](b.touchEvents.end, b.onTouchEnd, o)
                    }(n.simulateTouch && !b.device.ios && !b.device.android || n.simulateTouch && !b.support.touch && b.device.ios) && (i[a]("mousedown", b.onTouchStart, !1), document[a]("mousemove", b.onTouchMove, s), document[a]("mouseup", b.onTouchEnd, !1))
                }
                window[a]("resize", b.onResize), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.nextButton[t]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.prevButton[t]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && i[a]("click", b.preventClicks, !0)
            }, b.attachEvents = function() {
                b.initEvents()
            }, b.detachEvents = function() {
                b.initEvents(!0)
            }, b.allowClick = !0, b.preventClicks = function(e) {
                b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, b.onClickNext = function(e) {
                e.preventDefault(), b.isEnd && !b.params.loop || b.slideNext()
            }, b.onClickPrev = function(e) {
                e.preventDefault(), b.isBeginning && !b.params.loop || b.slidePrev()
            }, b.onClickIndex = function(t) {
                t.preventDefault();
                var a = e(this).index() * b.params.slidesPerGroup;
                b.params.loop && (a += b.loopedSlides), b.slideTo(a)
            }, b.updateClickedSlide = function(t) {
                var a = o(t, "." + b.params.slideClass),
                    i = !1;
                if (a)
                    for (var n = 0; n < b.slides.length; n++) b.slides[n] === a && (i = !0);
                if (!a || !i) return b.clickedSlide = void 0, void(b.clickedIndex = void 0);
                if (b.clickedSlide = a, b.clickedIndex = e(a).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                    var r, s = b.clickedIndex,
                        l = "auto" === b.params.slidesPerView ? b.currentSlidesPerView() : b.params.slidesPerView;
                    if (b.params.loop) {
                        if (b.animating) return;
                        r = parseInt(e(b.clickedSlide).attr("data-swiper-slide-index"), 10), b.params.centeredSlides ? s < b.loopedSlides - l / 2 || s > b.slides.length - b.loopedSlides + l / 2 ? (b.fixLoop(), s = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            b.slideTo(s)
                        }, 0)) : b.slideTo(s) : s > b.slides.length - l ? (b.fixLoop(), s = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            b.slideTo(s)
                        }, 0)) : b.slideTo(s)
                    } else b.slideTo(s)
                }
            };
            var x, k, C, D, T, M, F, $, P, I, O = "input, select, textarea, button, video",
                E = Date.now(),
                A = [];
            b.animating = !1, b.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var L, z;
            b.onTouchStart = function(t) {
                if (t.originalEvent && (t = t.originalEvent), (L = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) {
                    if (b.params.noSwiping && o(t, "." + b.params.noSwipingClass)) return void(b.allowClick = !0);
                    if (!b.params.swipeHandler || o(t, b.params.swipeHandler)) {
                        var a = b.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                            i = b.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                        if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && a <= b.params.iOSEdgeSwipeThreshold)) {
                            if (x = !0, k = !1, C = !0, T = void 0, z = void 0, b.touches.startX = a, b.touches.startY = i, D = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, b.params.threshold > 0 && ($ = !1), "touchstart" !== t.type) {
                                var n = !0;
                                e(t.target).is(O) && (n = !1), document.activeElement && e(document.activeElement).is(O) && document.activeElement.blur(), n && t.preventDefault()
                            }
                            b.emit("onTouchStart", b, t)
                        }
                    }
                }
            }, b.onTouchMove = function(t) {
                if (t.originalEvent && (t = t.originalEvent), !L || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper) return b.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(b.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (b.params.onlyExternal) return b.allowClick = !1, void(x && (b.touches.startX = b.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, b.touches.startY = b.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, D = Date.now()));
                    if (L && b.params.touchReleaseOnEdges && !b.params.loop)
                        if (b.isHorizontal()) {
                            if (b.touches.currentX < b.touches.startX && b.translate <= b.maxTranslate() || b.touches.currentX > b.touches.startX && b.translate >= b.minTranslate()) return
                        } else if (b.touches.currentY < b.touches.startY && b.translate <= b.maxTranslate() || b.touches.currentY > b.touches.startY && b.translate >= b.minTranslate()) return;
                    if (L && document.activeElement && t.target === document.activeElement && e(t.target).is(O)) return k = !0, void(b.allowClick = !1);
                    if (C && b.emit("onTouchMove", b, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                        if (b.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, b.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === T) {
                            var a;
                            b.isHorizontal() && b.touches.currentY === b.touches.startY || !b.isHorizontal() && b.touches.currentX === b.touches.startX ? T = !1 : (a = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI, T = b.isHorizontal() ? a > b.params.touchAngle : 90 - a > b.params.touchAngle)
                        }
                        if (T && b.emit("onTouchMoveOpposite", b, t), void 0 === z && b.browser.ieTouch && (b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY || (z = !0)), x) {
                            if (T) return void(x = !1);
                            if (z || !b.browser.ieTouch) {
                                b.allowClick = !1, b.emit("onSliderMove", b, t), t.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && t.stopPropagation(), k || (n.loop && b.fixLoop(), F = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), I = !1, !b.params.grabCursor || !0 !== b.params.allowSwipeToNext && !0 !== b.params.allowSwipeToPrev || b.setGrabCursor(!0)), k = !0;
                                var i = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                                i *= b.params.touchRatio, b.rtl && (i = -i), b.swipeDirection = i > 0 ? "prev" : "next", M = i + F;
                                var r = !0;
                                if (i > 0 && M > b.minTranslate() ? (r = !1, b.params.resistance && (M = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + F + i, b.params.resistanceRatio))) : i < 0 && M < b.maxTranslate() && (r = !1, b.params.resistance && (M = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - F - i, b.params.resistanceRatio))), r && (t.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && M < F && (M = F), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && M > F && (M = F), b.params.threshold > 0) {
                                    if (!(Math.abs(i) > b.params.threshold || $)) return void(M = F);
                                    if (!$) return $ = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, M = F, void(b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY)
                                }
                                b.params.followFinger && ((b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === A.length && A.push({
                                    position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                    time: D
                                }), A.push({
                                    position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), b.updateProgress(M), b.setWrapperTranslate(M))
                            }
                        }
                    }
                }
            }, b.onTouchEnd = function(t) {
                if (t.originalEvent && (t = t.originalEvent), C && b.emit("onTouchEnd", b, t), C = !1, x) {
                    b.params.grabCursor && k && x && (!0 === b.params.allowSwipeToNext || !0 === b.params.allowSwipeToPrev) && b.setGrabCursor(!1);
                    var a = Date.now(),
                        i = a - D;
                    if (b.allowClick && (b.updateClickedSlide(t), b.emit("onTap", b, t), i < 300 && a - E > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                            b && (b.params.paginationHide && b.paginationContainer.length > 0 && !e(t.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, t))
                        }, 300)), i < 300 && a - E < 300 && (P && clearTimeout(P), b.emit("onDoubleTap", b, t))), E = Date.now(), setTimeout(function() {
                            b && (b.allowClick = !0)
                        }, 0), !x || !k || !b.swipeDirection || 0 === b.touches.diff || M === F) return void(x = k = !1);
                    x = k = !1;
                    var n;
                    if (n = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -M, b.params.freeMode) {
                        if (n < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                        if (n > -b.maxTranslate()) return void(b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                        if (b.params.freeModeMomentum) {
                            if (A.length > 1) {
                                var r = A.pop(),
                                    s = A.pop(),
                                    o = r.position - s.position,
                                    l = r.time - s.time;
                                b.velocity = o / l, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (l > 150 || (new window.Date).getTime() - r.time > 300) && (b.velocity = 0)
                            } else b.velocity = 0;
                            b.velocity = b.velocity * b.params.freeModeMomentumVelocityRatio, A.length = 0;
                            var c = 1e3 * b.params.freeModeMomentumRatio,
                                u = b.velocity * c,
                                d = b.translate + u;
                            b.rtl && (d = -d);
                            var p, h = !1,
                                f = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                            if (d < b.maxTranslate()) b.params.freeModeMomentumBounce ? (d + b.maxTranslate() < -f && (d = b.maxTranslate() - f), p = b.maxTranslate(), h = !0, I = !0) : d = b.maxTranslate();
                            else if (d > b.minTranslate()) b.params.freeModeMomentumBounce ? (d - b.minTranslate() > f && (d = b.minTranslate() + f), p = b.minTranslate(), h = !0, I = !0) : d = b.minTranslate();
                            else if (b.params.freeModeSticky) {
                                var g, m = 0;
                                for (m = 0; m < b.snapGrid.length; m += 1)
                                    if (b.snapGrid[m] > -d) {
                                        g = m;
                                        break
                                    } d = Math.abs(b.snapGrid[g] - d) < Math.abs(b.snapGrid[g - 1] - d) || "next" === b.swipeDirection ? b.snapGrid[g] : b.snapGrid[g - 1], b.rtl || (d = -d)
                            }
                            if (0 !== b.velocity) c = b.rtl ? Math.abs((-d - b.translate) / b.velocity) : Math.abs((d - b.translate) / b.velocity);
                            else if (b.params.freeModeSticky) return void b.slideReset();
                            b.params.freeModeMomentumBounce && h ? (b.updateProgress(p), b.setWrapperTransition(c), b.setWrapperTranslate(d), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
                                b && I && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(p), b.wrapper.transitionEnd(function() {
                                    b && b.onTransitionEnd()
                                }))
                            })) : b.velocity ? (b.updateProgress(d), b.setWrapperTransition(c), b.setWrapperTranslate(d), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                b && b.onTransitionEnd()
                            }))) : b.updateProgress(d), b.updateActiveIndex()
                        }
                        return void((!b.params.freeModeMomentum || i >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()))
                    }
                    var v, y = 0,
                        _ = b.slidesSizesGrid[0];
                    for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup) void 0 !== b.slidesGrid[v + b.params.slidesPerGroup] ? n >= b.slidesGrid[v] && n < b.slidesGrid[v + b.params.slidesPerGroup] && (y = v, _ = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]) : n >= b.slidesGrid[v] && (y = v, _ = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                    var w = (n - b.slidesGrid[y]) / _;
                    if (i > b.params.longSwipesMs) {
                        if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                        "next" === b.swipeDirection && (w >= b.params.longSwipesRatio ? b.slideTo(y + b.params.slidesPerGroup) : b.slideTo(y)), "prev" === b.swipeDirection && (w > 1 - b.params.longSwipesRatio ? b.slideTo(y + b.params.slidesPerGroup) : b.slideTo(y))
                    } else {
                        if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                        "next" === b.swipeDirection && b.slideTo(y + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(y)
                    }
                }
            }, b._slideTo = function(e, t) {
                return b.slideTo(e, t, !0, !0)
            }, b.slideTo = function(e, t, a, i) {
                void 0 === a && (a = !0), void 0 === e && (e = 0), e < 0 && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                var n = -b.snapGrid[b.snapIndex];
                if (b.params.autoplay && b.autoplaying && (i || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()), b.updateProgress(n), b.params.normalizeSlideIndex)
                    for (var r = 0; r < b.slidesGrid.length; r++) - Math.floor(100 * n) >= Math.floor(100 * b.slidesGrid[r]) && (e = r);
                return !(!b.params.allowSwipeToNext && n < b.translate && n < b.minTranslate() || !b.params.allowSwipeToPrev && n > b.translate && n > b.maxTranslate() && (b.activeIndex || 0) !== e || (void 0 === t && (t = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.updateRealIndex(), b.rtl && -n === b.translate || !b.rtl && n === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(n), 1) : (b.updateClasses(), b.onTransitionStart(a), 0 === t || b.browser.lteIE9 ? (b.setWrapperTranslate(n), b.setWrapperTransition(0), b.onTransitionEnd(a)) : (b.setWrapperTranslate(n), b.setWrapperTransition(t), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                    b && b.onTransitionEnd(a)
                }))), 0)))
            }, b.onTransitionStart = function(e) {
                void 0 === e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)))
            }, b.onTransitionEnd = function(e) {
                b.animating = !1, b.setWrapperTransition(0), void 0 === e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.history && b.history && b.history.setHistory(b.params.history, b.activeIndex), b.params.hashnav && b.hashnav && b.hashnav.setHash()
            }, b.slideNext = function(e, t, a) {
                return b.params.loop ? !b.animating && (b.fixLoop(), b.container[0].clientLeft, b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, a)) : b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, a)
            }, b._slideNext = function(e) {
                return b.slideNext(!0, e, !0)
            }, b.slidePrev = function(e, t, a) {
                return b.params.loop ? !b.animating && (b.fixLoop(), b.container[0].clientLeft, b.slideTo(b.activeIndex - 1, t, e, a)) : b.slideTo(b.activeIndex - 1, t, e, a)
            }, b._slidePrev = function(e) {
                return b.slidePrev(!0, e, !0)
            }, b.slideReset = function(e, t, a) {
                return b.slideTo(b.activeIndex, t, e)
            }, b.disableTouchControl = function() {
                return b.params.onlyExternal = !0, !0
            }, b.enableTouchControl = function() {
                return b.params.onlyExternal = !1, !0
            }, b.setWrapperTransition = function(e, t) {
                b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, t), b.emit("onSetTransition", b, e)
            }, b.setWrapperTranslate = function(e, t, a) {
                var i = 0,
                    n = 0;
                b.isHorizontal() ? i = b.rtl ? -e : e : n = e, b.params.roundLengths && (i = r(i), n = r(n)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + i + "px, " + n + "px, 0px)") : b.wrapper.transform("translate(" + i + "px, " + n + "px)")), b.translate = b.isHorizontal() ? i : n;
                var s = b.maxTranslate() - b.minTranslate();
                (0 === s ? 0 : (e - b.minTranslate()) / s) !== b.progress && b.updateProgress(e), t && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, a), b.emit("onSetTranslate", b, b.translate)
            }, b.getTranslate = function(e, t) {
                var a, i, n, r;
                return void 0 === t && (t = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (n = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), r = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = r.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = window.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), b.rtl && i && (i = -i), i || 0)
            }, b.getWrapperTranslate = function(e) {
                return void 0 === e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e)
            }, b.observers = [], b.initObservers = function() {
                if (b.params.observeParents)
                    for (var e = b.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                l(b.container[0], {
                    childList: !1
                }), l(b.wrapper[0], {
                    attributes: !1
                })
            }, b.disconnectObservers = function() {
                for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                b.observers = []
            }, b.createLoop = function() {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                var t = b.wrapper.children("." + b.params.slideClass);
                "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = t.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > t.length && (b.loopedSlides = t.length);
                var a, i = [],
                    n = [];
                for (t.each(function(a, r) {
                        var s = e(this);
                        a < b.loopedSlides && n.push(r), a < t.length && a >= t.length - b.loopedSlides && i.push(r), s.attr("data-swiper-slide-index", a)
                    }), a = 0; a < n.length; a++) b.wrapper.append(e(n[a].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                for (a = i.length - 1; a >= 0; a--) b.wrapper.prepend(e(i[a].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
            }, b.destroyLoop = function() {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index")
            }, b.reLoop = function(e) {
                var t = b.activeIndex - b.loopedSlides;
                b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1)
            }, b.fixLoop = function() {
                var e;
                b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
            }, b.appendSlide = function(e) {
                if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)
                    for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]);
                else b.wrapper.append(e);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0)
            }, b.prependSlide = function(e) {
                b.params.loop && b.destroyLoop();
                var t = b.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var a = 0; a < e.length; a++) e[a] && b.wrapper.prepend(e[a]);
                    t = b.activeIndex + e.length
                } else b.wrapper.prepend(e);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(t, 0, !1)
            }, b.removeSlide = function(e) {
                b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                var t, a = b.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++) t = e[i], b.slides[t] && b.slides.eq(t).remove(), t < a && a--;
                    a = Math.max(a, 0)
                } else t = e, b.slides[t] && b.slides.eq(t).remove(), t < a && a--, a = Math.max(a, 0);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(a + b.loopedSlides, 0, !1) : b.slideTo(a, 0, !1)
            }, b.removeAllSlides = function() {
                for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
                b.removeSlide(e)
            }, b.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < b.slides.length; e++) {
                            var t = b.slides.eq(e),
                                a = -t[0].swiperSlideOffset;
                            b.params.virtualTranslate || (a -= b.translate);
                            var i = 0;
                            b.isHorizontal() || (i = a, a = 0);
                            var n = b.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: n
                            }).transform("translate3d(" + a + "px, " + i + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            b.slides.transitionEnd(function() {
                                if (!t && b) {
                                    t = !0, b.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) b.wrapper.trigger(e[a])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t = 0; t < b.slides.length; t++) {
                            var a = b.slides.eq(t),
                                i = a[0].progress;
                            b.params.flip.limitRotation && (i = Math.max(Math.min(a[0].progress, 1), -1));
                            var n = -180 * i,
                                r = 0,
                                s = -a[0].swiperSlideOffset,
                                o = 0;
                            if (b.isHorizontal() ? b.rtl && (n = -n) : (o = s, s = 0, r = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(i)) + b.slides.length, b.params.flip.slideShadows) {
                                var l = b.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                    c = b.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), a.append(l)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(c)), l.length && (l[0].style.opacity = Math.max(-i, 0)), c.length && (c[0].style.opacity = Math.max(i, 0))
                            }
                            a.transform("translate3d(" + s + "px, " + o + "px, 0px) rotateX(" + r + "deg) rotateY(" + n + "deg)")
                        }
                    },
                    setTransition: function(t) {
                        if (b.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), b.params.virtualTranslate && 0 !== t) {
                            var a = !1;
                            b.slides.eq(b.activeIndex).transitionEnd(function() {
                                if (!a && b && e(this).hasClass(b.params.slideActiveClass)) {
                                    a = !0, b.animating = !1;
                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++) b.wrapper.trigger(t[i])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, a = 0;
                        b.params.cube.shadow && (b.isHorizontal() ? (0 === (t = b.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(t)), t.css({
                            height: b.width + "px"
                        })) : 0 === (t = b.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), b.container.append(t)));
                        for (var i = 0; i < b.slides.length; i++) {
                            var n = b.slides.eq(i),
                                r = 90 * i,
                                s = Math.floor(r / 360);
                            b.rtl && (r = -r, s = Math.floor(-r / 360));
                            var o = Math.max(Math.min(n[0].progress, 1), -1),
                                l = 0,
                                c = 0,
                                u = 0;
                            i % 4 == 0 ? (l = 4 * -s * b.size, u = 0) : (i - 1) % 4 == 0 ? (l = 0, u = 4 * -s * b.size) : (i - 2) % 4 == 0 ? (l = b.size + 4 * s * b.size, u = b.size) : (i - 3) % 4 == 0 && (l = -b.size, u = 3 * b.size + 4 * b.size * s), b.rtl && (l = -l), b.isHorizontal() || (c = l, l = 0);
                            var d = "rotateX(" + (b.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (b.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + u + "px)";
                            if (o <= 1 && o > -1 && (a = 90 * i + 90 * o, b.rtl && (a = 90 * -i - 90 * o)), n.transform(d), b.params.cube.slideShadows) {
                                var p = b.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                    h = b.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), n.append(p)), 0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(h)), p.length && (p[0].style.opacity = Math.max(-o, 0)), h.length && (h[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (b.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                "transform-origin": "50% 50% -" + b.size / 2 + "px"
                            }), b.params.cube.shadow)
                            if (b.isHorizontal()) t.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
                            else {
                                var f = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                    g = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                    m = b.params.cube.shadowScale,
                                    v = b.params.cube.shadowScale / g,
                                    y = b.params.cube.shadowOffset;
                                t.transform("scale3d(" + m + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + y) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)")
                            } var _ = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                        b.wrapper.transform("translate3d(0px,0," + _ + "px) rotateX(" + (b.isHorizontal() ? 0 : a) + "deg) rotateY(" + (b.isHorizontal() ? -a : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var t = b.translate, a = b.isHorizontal() ? -t + b.width / 2 : -t + b.height / 2, i = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, n = b.params.coverflow.depth, r = 0, s = b.slides.length; r < s; r++) {
                            var o = b.slides.eq(r),
                                l = b.slidesSizesGrid[r],
                                c = (a - o[0].swiperSlideOffset - l / 2) / l * b.params.coverflow.modifier,
                                u = b.isHorizontal() ? i * c : 0,
                                d = b.isHorizontal() ? 0 : i * c,
                                p = -n * Math.abs(c),
                                h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * c,
                                f = b.isHorizontal() ? b.params.coverflow.stretch * c : 0;
                            Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Math.abs(u) < .001 && (u = 0), Math.abs(d) < .001 && (d = 0);
                            var g = "translate3d(" + f + "px," + h + "px," + p + "px)  rotateX(" + d + "deg) rotateY(" + u + "deg)";
                            if (o.transform(g), o[0].style.zIndex = 1 - Math.abs(Math.round(c)), b.params.coverflow.slideShadows) {
                                var m = b.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                    v = b.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), o.append(m)), 0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(v)), m.length && (m[0].style.opacity = c > 0 ? c : 0), v.length && (v[0].style.opacity = -c > 0 ? -c : 0)
                            }
                        }
                        b.browser.ie && (b.wrapper[0].style.perspectiveOrigin = a + "px 50%")
                    },
                    setTransition: function(e) {
                        b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, b.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, a) {
                    if (void 0 !== t && (void 0 === a && (a = !0), 0 !== b.slides.length)) {
                        var i = b.slides.eq(t),
                            n = i.find("." + b.params.lazyLoadingClass + ":not(." + b.params.lazyStatusLoadedClass + "):not(." + b.params.lazyStatusLoadingClass + ")");
                        !i.hasClass(b.params.lazyLoadingClass) || i.hasClass(b.params.lazyStatusLoadedClass) || i.hasClass(b.params.lazyStatusLoadingClass) || (n = n.add(i[0])), 0 !== n.length && n.each(function() {
                            var t = e(this);
                            t.addClass(b.params.lazyStatusLoadingClass);
                            var n = t.attr("data-background"),
                                r = t.attr("data-src"),
                                s = t.attr("data-srcset"),
                                o = t.attr("data-sizes");
                            b.loadImage(t[0], r || n, s, o, !1, function() {
                                if (n ? (t.css("background-image", 'url("' + n + '")'), t.removeAttr("data-background")) : (s && (t.attr("srcset", s), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), r && (t.attr("src", r), t.removeAttr("data-src"))), t.addClass(b.params.lazyStatusLoadedClass).removeClass(b.params.lazyStatusLoadingClass), i.find("." + b.params.lazyPreloaderClass + ", ." + b.params.preloaderClass).remove(), b.params.loop && a) {
                                    var e = i.attr("data-swiper-slide-index");
                                    if (i.hasClass(b.params.slideDuplicateClass)) {
                                        var l = b.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                        b.lazy.loadImageInSlide(l.index(), !1)
                                    } else {
                                        var c = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        b.lazy.loadImageInSlide(c.index(), !1)
                                    }
                                }
                                b.emit("onLazyImageReady", b, i[0], t[0])
                            }), b.emit("onLazyImageLoad", b, i[0], t[0])
                        })
                    }
                },
                load: function() {
                    var t, a = b.params.slidesPerView;
                    if ("auto" === a && (a = 0), b.lazy.initialImageLoaded || (b.lazy.initialImageLoaded = !0), b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
                        b.lazy.loadImageInSlide(e(this).index())
                    });
                    else if (a > 1)
                        for (t = b.activeIndex; t < b.activeIndex + a; t++) b.slides[t] && b.lazy.loadImageInSlide(t);
                    else b.lazy.loadImageInSlide(b.activeIndex);
                    if (b.params.lazyLoadingInPrevNext)
                        if (a > 1 || b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1) {
                            var i = b.params.lazyLoadingInPrevNextAmount,
                                n = a,
                                r = Math.min(b.activeIndex + n + Math.max(i, n), b.slides.length),
                                s = Math.max(b.activeIndex - Math.max(n, i), 0);
                            for (t = b.activeIndex + a; t < r; t++) b.slides[t] && b.lazy.loadImageInSlide(t);
                            for (t = s; t < b.activeIndex; t++) b.slides[t] && b.lazy.loadImageInSlide(t)
                        } else {
                            var o = b.wrapper.children("." + b.params.slideNextClass);
                            o.length > 0 && b.lazy.loadImageInSlide(o.index());
                            var l = b.wrapper.children("." + b.params.slidePrevClass);
                            l.length > 0 && b.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function() {
                    b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
                },
                onTransitionEnd: function() {
                    b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
                }
            }, b.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = b.scrollbar,
                        a = (b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                        i = -b.minTranslate() * t.moveDivider,
                        n = -b.maxTranslate() * t.moveDivider;
                    a < i ? a = i : a > n && (a = n), a = -a / t.moveDivider, b.updateProgress(a), b.setWrapperTranslate(a, !0)
                },
                dragStart: function(e) {
                    var t = b.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), b.params.scrollbarHide && t.track.css("opacity", 1), b.wrapper.transition(100), t.drag.transition(100), b.emit("onScrollbarDragStart", b)
                },
                dragMove: function(e) {
                    var t = b.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), b.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), b.emit("onScrollbarDragMove", b))
                },
                dragEnd: function(e) {
                    var t = b.scrollbar;
                    t.isTouched && (t.isTouched = !1, b.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0), t.track.transition(400)
                    }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
                },
                draggableEvents: !1 !== b.params.simulateTouch || b.support.touch ? b.touchEvents : b.touchEventsDesktop,
                enableDraggable: function() {
                    var t = b.scrollbar,
                        a = b.support.touch ? t.track : document;
                    e(t.track).on(t.draggableEvents.start, t.dragStart), e(a).on(t.draggableEvents.move, t.dragMove), e(a).on(t.draggableEvents.end, t.dragEnd)
                },
                disableDraggable: function() {
                    var t = b.scrollbar,
                        a = b.support.touch ? t.track : document;
                    e(t.track).off(t.draggableEvents.start, t.dragStart), e(a).off(t.draggableEvents.move, t.dragMove), e(a).off(t.draggableEvents.end, t.dragEnd)
                },
                set: function() {
                    if (b.params.scrollbar) {
                        var t = b.scrollbar;
                        t.track = e(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && t.track.length > 1 && 1 === b.container.find(b.params.scrollbar).length && (t.track = b.container.find(b.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = b.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = b.size / b.virtualSize, t.moveDivider = t.divider * (t.trackSize / b.size), t.dragSize = t.trackSize * t.divider, b.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", b.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (b.params.scrollbar) {
                        var e, t = b.scrollbar,
                            a = (b.translate, t.dragSize);
                        e = (t.trackSize - t.dragSize) * b.progress, b.rtl && b.isHorizontal() ? (e = -e) > 0 ? (a = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e) : e < 0 ? (a = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = a + "px") : (b.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = a + "px"), b.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    b.params.scrollbar && b.scrollbar.drag.transition(e)
                }
            }, b.controller = {
                LinearSpline: function(e, t) {
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var a, i;
                    this.x.length, this.interpolate = function(e) {
                        return e ? (i = n(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
                    };
                    var n = function() {
                        var e, t, a;
                        return function(i, n) {
                            for (t = -1, e = i.length; e - t > 1;) i[a = e + t >> 1] <= n ? t = a : e = a;
                            return e
                        }
                    }()
                },
                getInterpolateFunction: function(e) {
                    b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, a) {
                    function i(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(t), r = -b.controller.spline.interpolate(-e)), r && "container" !== b.params.controlBy || (n = (t.maxTranslate() - t.minTranslate()) / (b.maxTranslate() - b.minTranslate()), r = (e - b.minTranslate()) * n + t.minTranslate()), b.params.controlInverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setWrapperTranslate(r, !1, b), t.updateActiveIndex()
                    }
                    var n, r, s = b.params.control;
                    if (b.isArray(s))
                        for (var o = 0; o < s.length; o++) s[o] !== a && s[o] instanceof t && i(s[o]);
                    else s instanceof t && a !== s && i(s)
                },
                setTransition: function(e, a) {
                    function i(t) {
                        t.setWrapperTransition(e, b), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                            r && (t.params.loop && "slide" === b.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                        }))
                    }
                    var n, r = b.params.control;
                    if (b.isArray(r))
                        for (n = 0; n < r.length; n++) r[n] !== a && r[n] instanceof t && i(r[n]);
                    else r instanceof t && a !== r && i(r)
                }
            }, b.hashnav = {
                onHashCange: function(e, t) {
                    var a = document.location.hash.replace("#", "");
                    a !== b.slides.eq(b.activeIndex).attr("data-hash") && b.slideTo(b.wrapper.children("." + b.params.slideClass + '[data-hash="' + a + '"]').index())
                },
                attachEvents: function(t) {
                    var a = t ? "off" : "on";
                    e(window)[a]("hashchange", b.hashnav.onHashCange)
                },
                setHash: function() {
                    if (b.hashnav.initialized && b.params.hashnav)
                        if (b.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + b.slides.eq(b.activeIndex).attr("data-hash") || "");
                        else {
                            var e = b.slides.eq(b.activeIndex),
                                t = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    if (b.params.hashnav && !b.params.history) {
                        b.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var t = 0, a = b.slides.length; t < a; t++) {
                                var i = b.slides.eq(t);
                                if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(b.params.slideDuplicateClass)) {
                                    var n = i.index();
                                    b.slideTo(n, 0, b.params.runCallbacksOnInit, !0)
                                }
                            }
                        b.params.hashnavWatchState && b.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    b.params.hashnavWatchState && b.hashnav.attachEvents(!0)
                }
            }, b.history = {
                init: function() {
                    if (b.params.history) {
                        if (!window.history || !window.history.pushState) return b.params.history = !1, void(b.params.hashnav = !0);
                        b.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, b.params.runCallbacksOnInit), b.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    b.history.paths = b.history.getPathValues(), b.history.scrollToSlide(b.params.speed, b.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function(e, t) {
                    if (b.history.initialized && b.params.history) {
                        var a = b.slides.eq(t),
                            i = this.slugify(a.attr("data-history"));
                        window.location.pathname.includes(e) || (i = e + "/" + i), b.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, a) {
                    if (t)
                        for (var i = 0, n = b.slides.length; i < n; i++) {
                            var r = b.slides.eq(i);
                            if (this.slugify(r.attr("data-history")) === t && !r.hasClass(b.params.slideDuplicateClass)) {
                                var s = r.index();
                                b.slideTo(s, e, a)
                            }
                        } else b.slideTo(0, e, a)
                }
            }, b.disableKeyboardControl = function() {
                b.params.keyboardControl = !1, e(document).off("keydown", c)
            }, b.enableKeyboardControl = function() {
                b.params.keyboardControl = !0, e(document).on("keydown", c)
            }, b.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, b.params.mousewheelControl && (b.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel",
                    t = e in document;
                if (!t) {
                    var a = document.createElement("div");
                    a.setAttribute(e, "return;"), t = "function" == typeof a[e]
                }
                return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel"), b.disableMousewheelControl = function() {
                if (!b.mousewheel.event) return !1;
                var t = b.container;
                return "container" !== b.params.mousewheelEventsTarged && (t = e(b.params.mousewheelEventsTarged)), t.off(b.mousewheel.event, u), !0
            }, b.enableMousewheelControl = function() {
                if (!b.mousewheel.event) return !1;
                var t = b.container;
                return "container" !== b.params.mousewheelEventsTarged && (t = e(b.params.mousewheelEventsTarged)), t.on(b.mousewheel.event, u), !0
            }, b.parallax = {
                setTranslate: function() {
                    b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        p(this, b.progress)
                    }), b.slides.each(function() {
                        var t = e(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            p(this, Math.min(Math.max(t[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var a = e(this),
                            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (i = 0), a.transition(i)
                    })
                }
            }, b.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: b.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        a = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageX,
                        n = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - a, 2))
                },
                onGestureStart: function(t) {
                    var a = b.zoom;
                    if (!b.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        a.gesture.scaleStart = a.getDistanceBetweenTouches(t)
                    }
                    return a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = e(this), 0 === a.gesture.slide.length && (a.gesture.slide = b.slides.eq(b.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + b.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || b.params.zoomMax, 0 !== a.gesture.imageWrap.length) ? (a.gesture.image.transition(0), void(a.isScaling = !0)) : void(a.gesture.image = void 0)
                },
                onGestureChange: function(e) {
                    var t = b.zoom;
                    if (!b.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (b.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < b.params.zoomMin && (t.scale = b.params.zoomMin + 1 - Math.pow(b.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = b.zoom;
                    !b.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), b.params.zoomMin), t.gesture.image.transition(b.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(e, t) {
                    var a = e.zoom;
                    a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === e.device.os && t.preventDefault(), a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, a.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(e) {
                    var t = b.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (b.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = b.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = b.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), b.rtl && (t.image.startX = -t.image.startX), b.rtl && (t.image.startY = -t.image.startY));
                        var a = t.image.width * t.scale,
                            i = t.image.height * t.scale;
                        if (!(a < t.gesture.slideWidth && i < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - a / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - i / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                if (b.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                if (!b.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, t) {
                    var a = e.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length) {
                        if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1, void(a.image.isMoved = !1);
                        a.image.isTouched = !1, a.image.isMoved = !1;
                        var i = 300,
                            n = 300,
                            r = a.velocity.x * i,
                            s = a.image.currentX + r,
                            o = a.velocity.y * n,
                            l = a.image.currentY + o;
                        0 !== a.velocity.x && (i = Math.abs((s - a.image.currentX) / a.velocity.x)), 0 !== a.velocity.y && (n = Math.abs((l - a.image.currentY) / a.velocity.y));
                        var c = Math.max(i, n);
                        a.image.currentX = s, a.image.currentY = l;
                        var u = a.image.width * a.scale,
                            d = a.image.height * a.scale;
                        a.image.minX = Math.min(a.gesture.slideWidth / 2 - u / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - d / 2, 0), a.image.maxY = -a.image.minY, a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX), a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY), a.gesture.imageWrap.transition(c).transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                },
                toggleZoom: function(t, a) {
                    var i = t.zoom;
                    if (i.gesture.slide || (i.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + t.params.zoomContainerClass)), i.gesture.image && 0 !== i.gesture.image.length) {
                        var n, r, s, o, l, c, u, d, p, h, f, g, m, v, y, _, w, b;
                        void 0 === i.image.touchesStart.x && a ? (n = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, r = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (n = i.image.touchesStart.x, r = i.image.touchesStart.y), i.scale && 1 !== i.scale ? (i.scale = i.currentScale = 1, i.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), i.gesture.slide = void 0) : (i.scale = i.currentScale = i.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, a ? (w = i.gesture.slide[0].offsetWidth, b = i.gesture.slide[0].offsetHeight, s = i.gesture.slide.offset().left, o = i.gesture.slide.offset().top, l = s + w / 2 - n, c = o + b / 2 - r, p = i.gesture.image[0].offsetWidth, h = i.gesture.image[0].offsetHeight, f = p * i.scale, g = h * i.scale, m = Math.min(w / 2 - f / 2, 0), v = Math.min(b / 2 - g / 2, 0), y = -m, _ = -v, u = l * i.scale, d = c * i.scale, u < m && (u = m), u > y && (u = y), d < v && (d = v), d > _ && (d = _)) : (u = 0, d = 0), i.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + d + "px,0)"), i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                    }
                },
                attachEvents: function(t) {
                    var a = t ? "off" : "on";
                    if (b.params.zoom) {
                        var i = (b.slides, !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        b.support.gestures ? (b.slides[a]("gesturestart", b.zoom.onGestureStart, i), b.slides[a]("gesturechange", b.zoom.onGestureChange, i), b.slides[a]("gestureend", b.zoom.onGestureEnd, i)) : "touchstart" === b.touchEvents.start && (b.slides[a](b.touchEvents.start, b.zoom.onGestureStart, i), b.slides[a](b.touchEvents.move, b.zoom.onGestureChange, i), b.slides[a](b.touchEvents.end, b.zoom.onGestureEnd, i)), b[a]("touchStart", b.zoom.onTouchStart), b.slides.each(function(t, i) {
                            e(i).find("." + b.params.zoomContainerClass).length > 0 && e(i)[a](b.touchEvents.move, b.zoom.onTouchMove)
                        }), b[a]("touchEnd", b.zoom.onTouchEnd), b[a]("transitionEnd", b.zoom.onTransitionEnd), b.params.zoomToggle && b.on("doubleTap", b.zoom.toggleZoom)
                    }
                },
                init: function() {
                    b.zoom.attachEvents()
                },
                destroy: function() {
                    b.zoom.attachEvents(!0)
                }
            }, b._plugins = [];
            for (var j in b.plugins) {
                var R = b.plugins[j](b, b.params[j]);
                R && b._plugins.push(R)
            }
            return b.callPlugins = function(e) {
                for (var t = 0; t < b._plugins.length; t++) e in b._plugins[t] && b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, b.emitterEventListeners = {}, b.emit = function(e) {
                b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (b.emitterEventListeners[e])
                    for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, b.on = function(e, t) {
                return e = h(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(t), b
            }, b.off = function(e, t) {
                var a;
                if (e = h(e), void 0 === t) return b.emitterEventListeners[e] = [], b;
                if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                    for (a = 0; a < b.emitterEventListeners[e].length; a++) b.emitterEventListeners[e][a] === t && b.emitterEventListeners[e].splice(a, 1);
                    return b
                }
            }, b.once = function(e, t) {
                e = h(e);
                var a = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, a)
                };
                return b.on(e, a), b
            }, b.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (e(t.target).is(b.params.nextButton) ? (b.onClickNext(t), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : e(t.target).is(b.params.prevButton) && (b.onClickPrev(t), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), e(t.target).is("." + b.params.bulletClass) && e(t.target)[0].click())
                },
                liveRegion: e('<span class="' + b.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = b.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                init: function() {
                    b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), e(b.container).append(b.a11y.liveRegion)
                },
                initPagination: function() {
                    b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
                        var t = e(this);
                        b.a11y.makeFocusable(t), b.a11y.addRole(t, "button"), b.a11y.addLabel(t, b.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function() {
                    b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove()
                }
            }, b.init = function() {
                b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.zoom && b.zoom && b.zoom.init(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnavReplaceState && (b.params.replaceState = b.params.hashnavReplaceState), b.params.history && b.history && b.history.init(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b)
            }, b.cleanupStyles = function() {
                b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && e(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && e(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
            }, b.destroy = function(e, t) {
                b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), t && b.cleanupStyles(), b.disconnectObservers(), b.params.zoom && b.zoom && b.zoom.destroy(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.params.history && !b.params.replaceState && window.removeEventListener("popstate", b.history.setHistoryPopState), b.params.hashnav && b.hashnav && b.hashnav.destroy(), b.emit("onDestroy"), !1 !== e && (b = null)
            }, b.init(), b
        }
    };
    t.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = window.navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = e.match(/(iPad).*OS\s([\d_]+)/),
                i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: a || n || i,
                android: t
            }
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++)
                    if (t[a] in e) return !0
            }(),
            observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in window
        },
        plugins: {}
    };
    for (var a = function() {
            var e = function(e) {
                    var t = this,
                        a = 0;
                    for (a = 0; a < e.length; a++) t[a] = e[a];
                    return t.length = e.length, this
                },
                t = function(t, a) {
                    var i = [],
                        n = 0;
                    if (t && !a && t instanceof e) return t;
                    if (t)
                        if ("string" == typeof t) {
                            var r, s, o = t.trim();
                            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                var l = "div";
                                for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (s = document.createElement(l)).innerHTML = t, n = 0; n < s.childNodes.length; n++) i.push(s.childNodes[n])
                            } else
                                for (r = a || "#" !== t[0] || t.match(/[ .<>:~]/) ? (a || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], n = 0; n < r.length; n++) r[n] && i.push(r[n])
                        } else if (t.nodeType || t === window || t === document) i.push(t);
                    else if (t.length > 0 && t[0].nodeType)
                        for (n = 0; n < t.length; n++) i.push(t[n]);
                    return new e(i)
                };
            return e.prototype = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var i = 0; i < this.length; i++) this[i].classList.add(t[a]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var i = 0; i < this.length; i++) this[i].classList.remove(t[a]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var i = 0; i < this.length; i++) this[i].classList.toggle(t[a]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var a = 0; a < this.length; a++)
                        if (2 === arguments.length) this[a].setAttribute(e, t);
                        else
                            for (var i in e) this[a][i] = e[i], this[a].setAttribute(i, e[i]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    if (void 0 !== t) {
                        for (var a = 0; a < this.length; a++) {
                            var i = this[a];
                            i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t
                        }
                        return this
                    }
                    if (this[0]) {
                        var n = this[0].getAttribute("data-" + e);
                        return n || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                    }
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var a = this[t].style;
                        a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var a = this[t].style;
                        a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
                    }
                    return this
                },
                on: function(e, a, i, n) {
                    function r(e) {
                        var n = e.target;
                        if (t(n).is(a)) i.call(n, e);
                        else
                            for (var r = t(n).parents(), s = 0; s < r.length; s++) t(r[s]).is(a) && i.call(r[s], e)
                    }
                    var s, o, l = e.split(" ");
                    for (s = 0; s < this.length; s++)
                        if ("function" == typeof a || !1 === a)
                            for ("function" == typeof a && (i = arguments[1], n = arguments[2] || !1), o = 0; o < l.length; o++) this[s].addEventListener(l[o], i, n);
                        else
                            for (o = 0; o < l.length; o++) this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []), this[s].dom7LiveListeners.push({
                                listener: i,
                                liveListener: r
                            }), this[s].addEventListener(l[o], r, n);
                    return this
                },
                off: function(e, t, a, i) {
                    for (var n = e.split(" "), r = 0; r < n.length; r++)
                        for (var s = 0; s < this.length; s++)
                            if ("function" == typeof t || !1 === t) "function" == typeof t && (a = arguments[1], i = arguments[2] || !1), this[s].removeEventListener(n[r], a, i);
                            else if (this[s].dom7LiveListeners)
                        for (var o = 0; o < this[s].dom7LiveListeners.length; o++) this[s].dom7LiveListeners[o].listener === a && this[s].removeEventListener(n[r], this[s].dom7LiveListeners[o].liveListener, i);
                    return this
                },
                once: function(e, t, a, i) {
                    function n(s) {
                        a(s), r.off(e, t, n, i)
                    }
                    var r = this;
                    "function" == typeof t && (t = !1, a = arguments[1], i = arguments[2]), r.on(e, t, n, i)
                },
                trigger: function(e, t) {
                    for (var a = 0; a < this.length; a++) {
                        var i;
                        try {
                            i = new window.CustomEvent(e, {
                                detail: t,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (a) {
                            (i = document.createEvent("Event")).initEvent(e, !0, !0), i.detail = t
                        }
                        this[a].dispatchEvent(i)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function t(r) {
                        if (r.target === this)
                            for (e.call(this, r), a = 0; a < i.length; a++) n.off(i[a], t)
                    }
                    var a, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        n = this;
                    if (e)
                        for (a = 0; a < i.length; a++) n.on(i[a], t);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            t = e.getBoundingClientRect(),
                            a = document.body,
                            i = e.clientTop || a.clientTop || 0,
                            n = e.clientLeft || a.clientLeft || 0,
                            r = window.pageYOffset || e.scrollTop,
                            s = window.pageXOffset || e.scrollLeft;
                        return {
                            top: t.top + r - i,
                            left: t.left + s - n
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var a;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (a = 0; a < this.length; a++)
                                for (var i in e) this[a].style[i] = e[i];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (a = 0; a < this.length; a++) this[a].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                    return this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++) this[t].textContent = e;
                    return this
                },
                is: function(a) {
                    if (!this[0]) return !1;
                    var i, n;
                    if ("string" == typeof a) {
                        var r = this[0];
                        if (r === document) return a === document;
                        if (r === window) return a === window;
                        if (r.matches) return r.matches(a);
                        if (r.webkitMatchesSelector) return r.webkitMatchesSelector(a);
                        if (r.mozMatchesSelector) return r.mozMatchesSelector(a);
                        if (r.msMatchesSelector) return r.msMatchesSelector(a);
                        for (i = t(a), n = 0; n < i.length; n++)
                            if (i[n] === this[0]) return !0;
                        return !1
                    }
                    if (a === document) return this[0] === document;
                    if (a === window) return this[0] === window;
                    if (a.nodeType || a instanceof e) {
                        for (i = a.nodeType ? [a] : a, n = 0; n < i.length; n++)
                            if (i[n] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                        return t
                    }
                },
                eq: function(t) {
                    if (void 0 === t) return this;
                    var a, i = this.length;
                    return t > i - 1 ? new e([]) : t < 0 ? (a = i + t, new e(a < 0 ? [] : [this[a]])) : new e([this[t]])
                },
                append: function(t) {
                    var a, i;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof t) {
                            var n = document.createElement("div");
                            for (n.innerHTML = t; n.firstChild;) this[a].appendChild(n.firstChild)
                        } else if (t instanceof e)
                        for (i = 0; i < t.length; i++) this[a].appendChild(t[i]);
                    else this[a].appendChild(t);
                    return this
                },
                prepend: function(t) {
                    var a, i;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof t) {
                            var n = document.createElement("div");
                            for (n.innerHTML = t, i = n.childNodes.length - 1; i >= 0; i--) this[a].insertBefore(n.childNodes[i], this[a].childNodes[0])
                        } else if (t instanceof e)
                        for (i = 0; i < t.length; i++) this[a].insertBefore(t[i], this[a].childNodes[0]);
                    else this[a].insertBefore(t, this[a].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var a = t(e), i = 0; i < this.length; i++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0]);
                        else if (a.length > 1)
                        for (var n = 0; n < a.length; n++) a[n].parentNode.insertBefore(this[i].cloneNode(!0), a[n])
                },
                insertAfter: function(e) {
                    for (var a = t(e), i = 0; i < this.length; i++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0].nextSibling);
                        else if (a.length > 1)
                        for (var n = 0; n < a.length; n++) a[n].parentNode.insertBefore(this[i].cloneNode(!0), a[n].nextSibling)
                },
                next: function(a) {
                    return new e(this.length > 0 ? a ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(a) {
                    var i = [],
                        n = this[0];
                    if (!n) return new e([]);
                    for (; n.nextElementSibling;) {
                        var r = n.nextElementSibling;
                        a ? t(r).is(a) && i.push(r) : i.push(r), n = r
                    }
                    return new e(i)
                },
                prev: function(a) {
                    return new e(this.length > 0 ? a ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(a) {
                    var i = [],
                        n = this[0];
                    if (!n) return new e([]);
                    for (; n.previousElementSibling;) {
                        var r = n.previousElementSibling;
                        a ? t(r).is(a) && i.push(r) : i.push(r), n = r
                    }
                    return new e(i)
                },
                parent: function(e) {
                    for (var a = [], i = 0; i < this.length; i++) e ? t(this[i].parentNode).is(e) && a.push(this[i].parentNode) : a.push(this[i].parentNode);
                    return t(t.unique(a))
                },
                parents: function(e) {
                    for (var a = [], i = 0; i < this.length; i++)
                        for (var n = this[i].parentNode; n;) e ? t(n).is(e) && a.push(n) : a.push(n), n = n.parentNode;
                    return t(t.unique(a))
                },
                find: function(t) {
                    for (var a = [], i = 0; i < this.length; i++)
                        for (var n = this[i].querySelectorAll(t), r = 0; r < n.length; r++) a.push(n[r]);
                    return new e(a)
                },
                children: function(a) {
                    for (var i = [], n = 0; n < this.length; n++)
                        for (var r = this[n].childNodes, s = 0; s < r.length; s++) a ? 1 === r[s].nodeType && t(r[s]).is(a) && i.push(r[s]) : 1 === r[s].nodeType && i.push(r[s]);
                    return new e(t.unique(i))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, a, i = this;
                    for (e = 0; e < arguments.length; e++) {
                        var n = t(arguments[e]);
                        for (a = 0; a < n.length; a++) i[i.length] = n[a], i.length++
                    }
                    return i
                }
            }, t.fn = e.prototype, t.unique = function(e) {
                for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
                return t
            }, t
        }(), i = ["jQuery", "Zepto", "Dom7"], n = 0; n < i.length; n++) window[i[n]] && function(e) {
        e.fn.swiper = function(a) {
            var i;
            return e(this).each(function() {
                var e = new t(this, a);
                i || (i = e)
            }), i
        }
    }(window[i[n]]);
    var r;
    (r = void 0 === a ? window.Dom7 || window.Zepto || window.jQuery : a) && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(e) {
        function t(r) {
            if (r.target === this)
                for (e.call(this, r), a = 0; a < i.length; a++) n.off(i[a], t)
        }
        var a, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            n = this;
        if (e)
            for (a = 0; a < i.length; a++) n.on(i[a], t);
        return this
    }), "transform" in r.fn || (r.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
        }
        return this
    }), "transition" in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
        }
        return this
    }), "outerWidth" in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        var t = function() {
                if (e && e.fn && e.fn.select2 && e.fn.select2.amd) t = e.fn.select2.amd;
                var t;
                return function() {
                        if (!t || !t.requirejs) {
                            t ? a = t : t = {};
                            var e, a, i;
                            ! function(t) {
                                function n(e, t) {
                                    return w.call(e, t)
                                }

                                function r(e, t) {
                                    var a, i, n, r, s, o, l, c, u, d, p, h = t && t.split("/"),
                                        f = y.map,
                                        g = f && f["*"] || {};
                                    if (e && "." === e.charAt(0))
                                        if (t) {
                                            for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && S.test(e[s]) && (e[s] = e[s].replace(S, "")), e = h.slice(0, h.length - 1).concat(e), u = 0; u < e.length; u += 1)
                                                if ("." === (p = e[u])) e.splice(u, 1), u -= 1;
                                                else if (".." === p) {
                                                if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                                u > 0 && (e.splice(u - 1, 2), u -= 2)
                                            }
                                            e = e.join("/")
                                        } else 0 === e.indexOf("./") && (e = e.substring(2));
                                    if ((h || g) && f) {
                                        for (u = (a = e.split("/")).length; u > 0; u -= 1) {
                                            if (i = a.slice(0, u).join("/"), h)
                                                for (d = h.length; d > 0; d -= 1)
                                                    if ((n = f[h.slice(0, d).join("/")]) && (n = n[i])) {
                                                        r = n, o = u;
                                                        break
                                                    } if (r) break;
                                            !l && g && g[i] && (l = g[i], c = u)
                                        }!r && l && (r = l, o = c), r && (a.splice(0, o, r), e = a.join("/"))
                                    }
                                    return e
                                }

                                function s(e, a) {
                                    return function() {
                                        var i = b.call(arguments, 0);
                                        return "string" != typeof i[0] && 1 === i.length && i.push(null), h.apply(t, i.concat([e, a]))
                                    }
                                }

                                function o(e) {
                                    return function(t) {
                                        return r(t, e)
                                    }
                                }

                                function l(e) {
                                    return function(t) {
                                        m[e] = t
                                    }
                                }

                                function c(e) {
                                    if (n(v, e)) {
                                        var a = v[e];
                                        delete v[e], _[e] = !0, p.apply(t, a)
                                    }
                                    if (!n(m, e) && !n(_, e)) throw new Error("No " + e);
                                    return m[e]
                                }

                                function u(e) {
                                    var t, a = e ? e.indexOf("!") : -1;
                                    return a > -1 && (t = e.substring(0, a), e = e.substring(a + 1, e.length)), [t, e]
                                }

                                function d(e) {
                                    return function() {
                                        return y && y.config && y.config[e] || {}
                                    }
                                }
                                var p, h, f, g, m = {},
                                    v = {},
                                    y = {},
                                    _ = {},
                                    w = Object.prototype.hasOwnProperty,
                                    b = [].slice,
                                    S = /\.js$/;
                                f = function(e, t) {
                                    var a, i = u(e),
                                        n = i[0];
                                    return e = i[1], n && (n = r(n, t), a = c(n)), n ? e = a && a.normalize ? a.normalize(e, o(t)) : r(e, t) : (e = r(e, t), i = u(e), n = i[0], e = i[1], n && (a = c(n))), {
                                        f: n ? n + "!" + e : e,
                                        n: e,
                                        pr: n,
                                        p: a
                                    }
                                }, g = {
                                    require: function(e) {
                                        return s(e)
                                    },
                                    exports: function(e) {
                                        var t = m[e];
                                        return void 0 !== t ? t : m[e] = {}
                                    },
                                    module: function(e) {
                                        return {
                                            id: e,
                                            uri: "",
                                            exports: m[e],
                                            config: d(e)
                                        }
                                    }
                                }, p = function(e, a, i, r) {
                                    var o, u, d, p, h, y, w = [],
                                        b = typeof i;
                                    if (r = r || e, "undefined" === b || "function" === b) {
                                        for (a = !a.length && i.length ? ["require", "exports", "module"] : a, h = 0; h < a.length; h += 1)
                                            if (p = f(a[h], r), "require" === (u = p.f)) w[h] = g.require(e);
                                            else if ("exports" === u) w[h] = g.exports(e), y = !0;
                                        else if ("module" === u) o = w[h] = g.module(e);
                                        else if (n(m, u) || n(v, u) || n(_, u)) w[h] = c(u);
                                        else {
                                            if (!p.p) throw new Error(e + " missing " + u);
                                            p.p.load(p.n, s(r, !0), l(u), {}), w[h] = m[u]
                                        }
                                        d = i ? i.apply(m[e], w) : void 0, e && (o && o.exports !== t && o.exports !== m[e] ? m[e] = o.exports : d === t && y || (m[e] = d))
                                    } else e && (m[e] = i)
                                }, e = a = h = function(e, a, i, n, r) {
                                    if ("string" == typeof e) return g[e] ? g[e](a) : c(f(e, a).f);
                                    if (!e.splice) {
                                        if ((y = e).deps && h(y.deps, y.callback), !a) return;
                                        a.splice ? (e = a, a = i, i = null) : e = t
                                    }
                                    return a = a || function() {}, "function" == typeof i && (i = n, n = r), n ? p(t, e, a, i) : setTimeout(function() {
                                        p(t, e, a, i)
                                    }, 4), h
                                }, h.config = function(e) {
                                    return h(e)
                                }, e._defined = m, (i = function(e, t, a) {
                                    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                    t.splice || (a = t, t = []), n(m, e) || n(v, e) || (v[e] = [e, t, a])
                                }).amd = {
                                    jQuery: !0
                                }
                            }(), t.requirejs = e, t.require = a, t.define = i
                        }
                    }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                        var t = e || $;
                        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                    }), t.define("select2/utils", ["jquery"], function(e) {
                        function t(e) {
                            var t = e.prototype,
                                a = [];
                            for (var i in t) "function" == typeof t[i] && "constructor" !== i && a.push(i);
                            return a
                        }
                        var a = {};
                        a.Extend = function(e, t) {
                            function a() {
                                this.constructor = e
                            }
                            var i = {}.hasOwnProperty;
                            for (var n in t) i.call(t, n) && (e[n] = t[n]);
                            return a.prototype = t.prototype, e.prototype = new a, e.__super__ = t.prototype, e
                        }, a.Decorate = function(e, a) {
                            function i() {
                                var t = Array.prototype.unshift,
                                    i = a.prototype.constructor.length,
                                    n = e.prototype.constructor;
                                i > 0 && (t.call(arguments, e.prototype.constructor), n = a.prototype.constructor), n.apply(this, arguments)
                            }
                            var n = t(a),
                                r = t(e);
                            a.displayName = e.displayName, i.prototype = new function() {
                                this.constructor = i
                            };
                            for (var s = 0; s < r.length; s++) {
                                var o = r[s];
                                i.prototype[o] = e.prototype[o]
                            }
                            for (var l = 0; l < n.length; l++) {
                                var c = n[l];
                                i.prototype[c] = function(e) {
                                    var t = function() {};
                                    e in i.prototype && (t = i.prototype[e]);
                                    var n = a.prototype[e];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
                                    }
                                }(c)
                            }
                            return i
                        };
                        var i = function() {
                            this.listeners = {}
                        };
                        return i.prototype.on = function(e, t) {
                            this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                        }, i.prototype.trigger = function(e) {
                            var t = Array.prototype.slice,
                                a = t.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == a && (a = []), 0 === a.length && a.push({}), a[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, i.prototype.invoke = function(e, t) {
                            for (var a = 0, i = e.length; i > a; a++) e[a].apply(this, t)
                        }, a.Observable = i, a.generateChars = function(e) {
                            for (var t = "", a = 0; e > a; a++) t += Math.floor(36 * Math.random()).toString(36);
                            return t
                        }, a.bind = function(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }, a._convertData = function(e) {
                            for (var t in e) {
                                var a = t.split("-"),
                                    i = e;
                                if (1 !== a.length) {
                                    for (var n = 0; n < a.length; n++) {
                                        var r = a[n];
                                        (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in i || (i[r] = {}), n == a.length - 1 && (i[r] = e[t]), i = i[r]
                                    }
                                    delete e[t]
                                }
                            }
                            return e
                        }, a.hasScroll = function(t, a) {
                            var i = e(a),
                                n = a.style.overflowX,
                                r = a.style.overflowY;
                            return (n !== r || "hidden" !== r && "visible" !== r) && ("scroll" === n || "scroll" === r || (i.innerHeight() < a.scrollHeight || i.innerWidth() < a.scrollWidth))
                        }, a.escapeMarkup = function(e) {
                            var t = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                                return t[e]
                            })
                        }, a.appendMany = function(t, a) {
                            if ("1.7" === e.fn.jquery.substr(0, 3)) {
                                var i = e();
                                e.map(a, function(e) {
                                    i = i.add(e)
                                }), a = i
                            }
                            t.append(a)
                        }, a
                    }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                        function a(e, t, i) {
                            this.$element = e, this.data = i, this.options = t, a.__super__.constructor.call(this)
                        }
                        return t.Extend(a, t.Observable), a.prototype.render = function() {
                            var t = e('<ul class="select2-results__options" role="tree"></ul>');
                            return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                        }, a.prototype.clear = function() {
                            this.$results.empty()
                        }, a.prototype.displayMessage = function(t) {
                            var a = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                n = this.options.get("translations").get(t.message);
                            i.append(a(n(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                        }, a.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }, a.prototype.append = function(e) {
                            this.hideLoading();
                            var t = [];
                            if (null != e.results && 0 !== e.results.length) {
                                e.results = this.sort(e.results);
                                for (var a = 0; a < e.results.length; a++) {
                                    var i = e.results[a],
                                        n = this.option(i);
                                    t.push(n)
                                }
                                this.$results.append(t)
                            } else 0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            })
                        }, a.prototype.position = function(e, t) {
                            t.find(".select2-results").append(e)
                        }, a.prototype.sort = function(e) {
                            return this.options.get("sorter")(e)
                        }, a.prototype.highlightFirstItem = function() {
                            var e = this.$results.find(".select2-results__option[aria-selected]"),
                                t = e.filter("[aria-selected=true]");
                            t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                        }, a.prototype.setClasses = function() {
                            var t = this;
                            this.data.current(function(a) {
                                var i = e.map(a, function(e) {
                                    return e.id.toString()
                                });
                                t.$results.find(".select2-results__option[aria-selected]").each(function() {
                                    var t = e(this),
                                        a = e.data(this, "data"),
                                        n = "" + a.id;
                                    null != a.element && a.element.selected || null == a.element && e.inArray(n, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                                })
                            })
                        }, a.prototype.showLoading = function(e) {
                            this.hideLoading();
                            var t = {
                                    disabled: !0,
                                    loading: !0,
                                    text: this.options.get("translations").get("searching")(e)
                                },
                                a = this.option(t);
                            a.className += " loading-results", this.$results.prepend(a)
                        }, a.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }, a.prototype.option = function(t) {
                            var a = document.createElement("li");
                            a.className = "select2-results__option";
                            var i = {
                                role: "treeitem",
                                "aria-selected": "false"
                            };
                            t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (a.id = t._resultId), t.title && (a.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);
                            for (var n in i) {
                                var r = i[n];
                                a.setAttribute(n, r)
                            }
                            if (t.children) {
                                var s = e(a),
                                    o = document.createElement("strong");
                                o.className = "select2-results__group", e(o), this.template(t, o);
                                for (var l = [], c = 0; c < t.children.length; c++) {
                                    var u = t.children[c],
                                        d = this.option(u);
                                    l.push(d)
                                }
                                var p = e("<ul></ul>", {
                                    class: "select2-results__options select2-results__options--nested"
                                });
                                p.append(l), s.append(o), s.append(p)
                            } else this.template(t, a);
                            return e.data(a, "data", t), a
                        }, a.prototype.bind = function(t, a) {
                            var i = this,
                                n = t.id + "-results";
                            this.$results.attr("id", n), t.on("results:all", function(e) {
                                i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), t.on("results:append", function(e) {
                                i.append(e.data), t.isOpen() && i.setClasses()
                            }), t.on("query", function(e) {
                                i.hideMessages(), i.showLoading(e)
                            }), t.on("select", function() {
                                t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), t.on("unselect", function() {
                                t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), t.on("open", function() {
                                i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                            }), t.on("close", function() {
                                i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                            }), t.on("results:toggle", function() {
                                var e = i.getHighlightedResults();
                                0 !== e.length && e.trigger("mouseup")
                            }), t.on("results:select", function() {
                                var e = i.getHighlightedResults();
                                if (0 !== e.length) {
                                    var t = e.data("data");
                                    "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                        data: t
                                    })
                                }
                            }), t.on("results:previous", function() {
                                var e = i.getHighlightedResults(),
                                    t = i.$results.find("[aria-selected]"),
                                    a = t.index(e);
                                if (0 !== a) {
                                    var n = a - 1;
                                    0 === e.length && (n = 0);
                                    var r = t.eq(n);
                                    r.trigger("mouseenter");
                                    var s = i.$results.offset().top,
                                        o = r.offset().top,
                                        l = i.$results.scrollTop() + (o - s);
                                    0 === n ? i.$results.scrollTop(0) : 0 > o - s && i.$results.scrollTop(l)
                                }
                            }), t.on("results:next", function() {
                                var e = i.getHighlightedResults(),
                                    t = i.$results.find("[aria-selected]"),
                                    a = t.index(e) + 1;
                                if (!(a >= t.length)) {
                                    var n = t.eq(a);
                                    n.trigger("mouseenter");
                                    var r = i.$results.offset().top + i.$results.outerHeight(!1),
                                        s = n.offset().top + n.outerHeight(!1),
                                        o = i.$results.scrollTop() + s - r;
                                    0 === a ? i.$results.scrollTop(0) : s > r && i.$results.scrollTop(o)
                                }
                            }), t.on("results:focus", function(e) {
                                e.element.addClass("select2-results__option--highlighted")
                            }), t.on("results:message", function(e) {
                                i.displayMessage(e)
                            }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                                var t = i.$results.scrollTop(),
                                    a = i.$results.get(0).scrollHeight - t + e.deltaY,
                                    n = e.deltaY > 0 && t - e.deltaY <= 0,
                                    r = e.deltaY < 0 && a <= i.$results.height();
                                n ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                                var a = e(this),
                                    n = a.data("data");
                                return "true" === a.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                                    originalEvent: t,
                                    data: n
                                }) : i.trigger("close", {})) : void i.trigger("select", {
                                    originalEvent: t,
                                    data: n
                                })
                            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                                var a = e(this).data("data");
                                i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                                    data: a,
                                    element: e(this)
                                })
                            })
                        }, a.prototype.getHighlightedResults = function() {
                            return this.$results.find(".select2-results__option--highlighted")
                        }, a.prototype.destroy = function() {
                            this.$results.remove()
                        }, a.prototype.ensureHighlightVisible = function() {
                            var e = this.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = this.$results.find("[aria-selected]").index(e),
                                    a = this.$results.offset().top,
                                    i = e.offset().top,
                                    n = this.$results.scrollTop() + (i - a),
                                    r = i - a;
                                n -= 2 * e.outerHeight(!1), 2 >= t ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || 0 > r) && this.$results.scrollTop(n)
                            }
                        }, a.prototype.template = function(t, a) {
                            var i = this.options.get("templateResult"),
                                n = this.options.get("escapeMarkup"),
                                r = i(t, a);
                            null == r ? a.style.display = "none" : "string" == typeof r ? a.innerHTML = n(r) : e(a).append(r)
                        }, a
                    }), t.define("select2/keys", [], function() {
                        return {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        }
                    }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, a) {
                        function i(e, t) {
                            this.$element = e, this.options = t, i.__super__.constructor.call(this)
                        }
                        return t.Extend(i, t.Observable), i.prototype.render = function() {
                            var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                        }, i.prototype.bind = function(e, t) {
                            var i = this,
                                n = (e.id, e.id + "-results");
                            this.container = e, this.$selection.on("focus", function(e) {
                                i.trigger("focus", e)
                            }), this.$selection.on("blur", function(e) {
                                i._handleBlur(e)
                            }), this.$selection.on("keydown", function(e) {
                                i.trigger("keypress", e), e.which === a.SPACE && e.preventDefault()
                            }), e.on("results:focus", function(e) {
                                i.$selection.attr("aria-activedescendant", e.data._resultId)
                            }), e.on("selection:update", function(e) {
                                i.update(e.data)
                            }), e.on("open", function() {
                                i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", n), i._attachCloseHandler(e)
                            }), e.on("close", function() {
                                i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
                            }), e.on("enable", function() {
                                i.$selection.attr("tabindex", i._tabindex)
                            }), e.on("disable", function() {
                                i.$selection.attr("tabindex", "-1")
                            })
                        }, i.prototype._handleBlur = function(t) {
                            var a = this;
                            window.setTimeout(function() {
                                document.activeElement == a.$selection[0] || e.contains(a.$selection[0], document.activeElement) || a.trigger("blur", t)
                            }, 1)
                        }, i.prototype._attachCloseHandler = function(t) {
                            e(document.body).on("mousedown.select2." + t.id, function(t) {
                                var a = e(t.target).closest(".select2");
                                e(".select2.select2-container--open").each(function() {
                                    var t = e(this);
                                    this != a[0] && t.data("element").select2("close")
                                })
                            })
                        }, i.prototype._detachCloseHandler = function(t) {
                            e(document.body).off("mousedown.select2." + t.id)
                        }, i.prototype.position = function(e, t) {
                            t.find(".selection").append(e)
                        }, i.prototype.destroy = function() {
                            this._detachCloseHandler(this.container)
                        }, i.prototype.update = function(e) {
                            throw new Error("The `update` method must be defined in child classes.")
                        }, i
                    }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, a, i) {
                        function n() {
                            n.__super__.constructor.apply(this, arguments)
                        }
                        return a.Extend(n, t), n.prototype.render = function() {
                            var e = n.__super__.render.call(this);
                            return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                        }, n.prototype.bind = function(e, t) {
                            var a = this;
                            n.__super__.bind.apply(this, arguments);
                            var i = e.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                                1 === e.which && a.trigger("toggle", {
                                    originalEvent: e
                                })
                            }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), e.on("focus", function(t) {
                                e.isOpen() || a.$selection.focus()
                            }), e.on("selection:update", function(e) {
                                a.update(e.data)
                            })
                        }, n.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, n.prototype.display = function(e, t) {
                            var a = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(a(e, t))
                        }, n.prototype.selectionContainer = function() {
                            return e("<span></span>")
                        }, n.prototype.update = function(e) {
                            if (0 !== e.length) {
                                var t = e[0],
                                    a = this.$selection.find(".select2-selection__rendered"),
                                    i = this.display(t, a);
                                a.empty().append(i), a.prop("title", t.title || t.text)
                            } else this.clear()
                        }, n
                    }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, a) {
                        function i(e, t) {
                            i.__super__.constructor.apply(this, arguments)
                        }
                        return a.Extend(i, t), i.prototype.render = function() {
                            var e = i.__super__.render.call(this);
                            return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                        }, i.prototype.bind = function(t, a) {
                            var n = this;
                            i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                                n.trigger("toggle", {
                                    originalEvent: e
                                })
                            }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                                if (!n.options.get("disabled")) {
                                    var a = e(this).parent().data("data");
                                    n.trigger("unselect", {
                                        originalEvent: t,
                                        data: a
                                    })
                                }
                            })
                        }, i.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, i.prototype.display = function(e, t) {
                            var a = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(a(e, t))
                        }, i.prototype.selectionContainer = function() {
                            return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                        }, i.prototype.update = function(e) {
                            if (this.clear(), 0 !== e.length) {
                                for (var t = [], i = 0; i < e.length; i++) {
                                    var n = e[i],
                                        r = this.selectionContainer(),
                                        s = this.display(n, r);
                                    r.append(s), r.prop("title", n.title || n.text), r.data("data", n), t.push(r)
                                }
                                var o = this.$selection.find(".select2-selection__rendered");
                                a.appendMany(o, t)
                            }
                        }, i
                    }), t.define("select2/selection/placeholder", ["../utils"], function(e) {
                        function t(e, t, a) {
                            this.placeholder = this.normalizePlaceholder(a.get("placeholder")), e.call(this, t, a)
                        }
                        return t.prototype.normalizePlaceholder = function(e, t) {
                            return "string" == typeof t && (t = {
                                id: "",
                                text: t
                            }), t
                        }, t.prototype.createPlaceholder = function(e, t) {
                            var a = this.selectionContainer();
                            return a.html(this.display(t)), a.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), a
                        }, t.prototype.update = function(e, t) {
                            var a = 1 == t.length && t[0].id != this.placeholder.id;
                            if (t.length > 1 || a) return e.call(this, t);
                            this.clear();
                            var i = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(i)
                        }, t
                    }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                        function a() {}
                        return a.prototype.bind = function(e, t, a) {
                            var i = this;
                            e.call(this, t, a), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                                i._handleClear(e)
                            }), t.on("keypress", function(e) {
                                i._handleKeyboardClear(e, t)
                            })
                        }, a.prototype._handleClear = function(e, t) {
                            if (!this.options.get("disabled")) {
                                var a = this.$selection.find(".select2-selection__clear");
                                if (0 !== a.length) {
                                    t.stopPropagation();
                                    for (var i = a.data("data"), n = 0; n < i.length; n++) {
                                        var r = {
                                            data: i[n]
                                        };
                                        if (this.trigger("unselect", r), r.prevented) return
                                    }
                                    this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                                }
                            }
                        }, a.prototype._handleKeyboardClear = function(e, a, i) {
                            i.isOpen() || (a.which == t.DELETE || a.which == t.BACKSPACE) && this._handleClear(a)
                        }, a.prototype.update = function(t, a) {
                            if (t.call(this, a), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === a.length)) {
                                var i = e('<span class="select2-selection__clear">&times;</span>');
                                i.data("data", a), this.$selection.find(".select2-selection__rendered").prepend(i)
                            }
                        }, a
                    }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, a) {
                        function i(e, t, a) {
                            e.call(this, t, a)
                        }
                        return i.prototype.render = function(t) {
                            var a = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = a, this.$search = a.find("input");
                            var i = t.call(this);
                            return this._transferTabIndex(), i
                        }, i.prototype.bind = function(e, t, i) {
                            var n = this;
                            e.call(this, t, i), t.on("open", function() {
                                n.$search.trigger("focus")
                            }), t.on("close", function() {
                                n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus")
                            }), t.on("enable", function() {
                                n.$search.prop("disabled", !1), n._transferTabIndex()
                            }), t.on("disable", function() {
                                n.$search.prop("disabled", !0)
                            }), t.on("focus", function(e) {
                                n.$search.trigger("focus")
                            }), t.on("results:focus", function(e) {
                                n.$search.attr("aria-activedescendant", e.id)
                            }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                                n.trigger("focus", e)
                            }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                                n._handleBlur(e)
                            }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                                if (e.stopPropagation(), n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented(), e.which === a.BACKSPACE && "" === n.$search.val()) {
                                    var t = n.$searchContainer.prev(".select2-selection__choice");
                                    if (t.length > 0) {
                                        var i = t.data("data");
                                        n.searchRemoveChoice(i), e.preventDefault()
                                    }
                                }
                            });
                            var r = document.documentMode,
                                s = r && 11 >= r;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                                return s ? void n.$selection.off("input.search input.searchcheck") : void n.$selection.off("keyup.search")
                            }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                                if (s && "input" === e.type) n.$selection.off("input.search input.searchcheck");
                                else {
                                    var t = e.which;
                                    t != a.SHIFT && t != a.CTRL && t != a.ALT && t != a.TAB && n.handleSearch(e)
                                }
                            })
                        }, i.prototype._transferTabIndex = function(e) {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                        }, i.prototype.createPlaceholder = function(e, t) {
                            this.$search.attr("placeholder", t.text)
                        }, i.prototype.update = function(e, t) {
                            var a = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), a && this.$search.focus()
                        }, i.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var e = this.$search.val();
                                this.trigger("query", {
                                    term: e
                                })
                            }
                            this._keyUpPrevented = !1
                        }, i.prototype.searchRemoveChoice = function(e, t) {
                            this.trigger("unselect", {
                                data: t
                            }), this.$search.val(t.text), this.handleSearch()
                        }, i.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var e = "";
                            e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                        }, i
                    }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                        function t() {}
                        return t.prototype.bind = function(t, a, i) {
                            var n = this,
                                r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                s = ["opening", "closing", "selecting", "unselecting"];
                            t.call(this, a, i), a.on("*", function(t, a) {
                                if (-1 !== e.inArray(t, r)) {
                                    a = a || {};
                                    var i = e.Event("select2:" + t, {
                                        params: a
                                    });
                                    n.$element.trigger(i), -1 !== e.inArray(t, s) && (a.prevented = i.isDefaultPrevented())
                                }
                            })
                        }, t
                    }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                        function a(e) {
                            this.dict = e || {}
                        }
                        return a.prototype.all = function() {
                            return this.dict
                        }, a.prototype.get = function(e) {
                            return this.dict[e]
                        }, a.prototype.extend = function(t) {
                            this.dict = e.extend({}, t.all(), this.dict)
                        }, a._cache = {}, a.loadPath = function(e) {
                            if (!(e in a._cache)) {
                                var i = t(e);
                                a._cache[e] = i
                            }
                            return new a(a._cache[e])
                        }, a
                    }), t.define("select2/diacritics", [], function() {
                        return {
                            "Ⓐ": "A",
                            "Ａ": "A",
                            "À": "A",
                            "Á": "A",
                            "Â": "A",
                            "Ầ": "A",
                            "Ấ": "A",
                            "Ẫ": "A",
                            "Ẩ": "A",
                            "Ã": "A",
                            "Ā": "A",
                            "Ă": "A",
                            "Ằ": "A",
                            "Ắ": "A",
                            "Ẵ": "A",
                            "Ẳ": "A",
                            "Ȧ": "A",
                            "Ǡ": "A",
                            "Ä": "A",
                            "Ǟ": "A",
                            "Ả": "A",
                            "Å": "A",
                            "Ǻ": "A",
                            "Ǎ": "A",
                            "Ȁ": "A",
                            "Ȃ": "A",
                            "Ạ": "A",
                            "Ậ": "A",
                            "Ặ": "A",
                            "Ḁ": "A",
                            "Ą": "A",
                            "Ⱥ": "A",
                            "Ɐ": "A",
                            "Ꜳ": "AA",
                            "Æ": "AE",
                            "Ǽ": "AE",
                            "Ǣ": "AE",
                            "Ꜵ": "AO",
                            "Ꜷ": "AU",
                            "Ꜹ": "AV",
                            "Ꜻ": "AV",
                            "Ꜽ": "AY",
                            "Ⓑ": "B",
                            "Ｂ": "B",
                            "Ḃ": "B",
                            "Ḅ": "B",
                            "Ḇ": "B",
                            "Ƀ": "B",
                            "Ƃ": "B",
                            "Ɓ": "B",
                            "Ⓒ": "C",
                            "Ｃ": "C",
                            "Ć": "C",
                            "Ĉ": "C",
                            "Ċ": "C",
                            "Č": "C",
                            "Ç": "C",
                            "Ḉ": "C",
                            "Ƈ": "C",
                            "Ȼ": "C",
                            "Ꜿ": "C",
                            "Ⓓ": "D",
                            "Ｄ": "D",
                            "Ḋ": "D",
                            "Ď": "D",
                            "Ḍ": "D",
                            "Ḑ": "D",
                            "Ḓ": "D",
                            "Ḏ": "D",
                            "Đ": "D",
                            "Ƌ": "D",
                            "Ɗ": "D",
                            "Ɖ": "D",
                            "Ꝺ": "D",
                            "Ǳ": "DZ",
                            "Ǆ": "DZ",
                            "ǲ": "Dz",
                            "ǅ": "Dz",
                            "Ⓔ": "E",
                            "Ｅ": "E",
                            "È": "E",
                            "É": "E",
                            "Ê": "E",
                            "Ề": "E",
                            "Ế": "E",
                            "Ễ": "E",
                            "Ể": "E",
                            "Ẽ": "E",
                            "Ē": "E",
                            "Ḕ": "E",
                            "Ḗ": "E",
                            "Ĕ": "E",
                            "Ė": "E",
                            "Ë": "E",
                            "Ẻ": "E",
                            "Ě": "E",
                            "Ȅ": "E",
                            "Ȇ": "E",
                            "Ẹ": "E",
                            "Ệ": "E",
                            "Ȩ": "E",
                            "Ḝ": "E",
                            "Ę": "E",
                            "Ḙ": "E",
                            "Ḛ": "E",
                            "Ɛ": "E",
                            "Ǝ": "E",
                            "Ⓕ": "F",
                            "Ｆ": "F",
                            "Ḟ": "F",
                            "Ƒ": "F",
                            "Ꝼ": "F",
                            "Ⓖ": "G",
                            "Ｇ": "G",
                            "Ǵ": "G",
                            "Ĝ": "G",
                            "Ḡ": "G",
                            "Ğ": "G",
                            "Ġ": "G",
                            "Ǧ": "G",
                            "Ģ": "G",
                            "Ǥ": "G",
                            "Ɠ": "G",
                            "Ꞡ": "G",
                            "Ᵹ": "G",
                            "Ꝿ": "G",
                            "Ⓗ": "H",
                            "Ｈ": "H",
                            "Ĥ": "H",
                            "Ḣ": "H",
                            "Ḧ": "H",
                            "Ȟ": "H",
                            "Ḥ": "H",
                            "Ḩ": "H",
                            "Ḫ": "H",
                            "Ħ": "H",
                            "Ⱨ": "H",
                            "Ⱶ": "H",
                            "Ɥ": "H",
                            "Ⓘ": "I",
                            "Ｉ": "I",
                            "Ì": "I",
                            "Í": "I",
                            "Î": "I",
                            "Ĩ": "I",
                            "Ī": "I",
                            "Ĭ": "I",
                            "İ": "I",
                            "Ï": "I",
                            "Ḯ": "I",
                            "Ỉ": "I",
                            "Ǐ": "I",
                            "Ȉ": "I",
                            "Ȋ": "I",
                            "Ị": "I",
                            "Į": "I",
                            "Ḭ": "I",
                            "Ɨ": "I",
                            "Ⓙ": "J",
                            "Ｊ": "J",
                            "Ĵ": "J",
                            "Ɉ": "J",
                            "Ⓚ": "K",
                            "Ｋ": "K",
                            "Ḱ": "K",
                            "Ǩ": "K",
                            "Ḳ": "K",
                            "Ķ": "K",
                            "Ḵ": "K",
                            "Ƙ": "K",
                            "Ⱪ": "K",
                            "Ꝁ": "K",
                            "Ꝃ": "K",
                            "Ꝅ": "K",
                            "Ꞣ": "K",
                            "Ⓛ": "L",
                            "Ｌ": "L",
                            "Ŀ": "L",
                            "Ĺ": "L",
                            "Ľ": "L",
                            "Ḷ": "L",
                            "Ḹ": "L",
                            "Ļ": "L",
                            "Ḽ": "L",
                            "Ḻ": "L",
                            "Ł": "L",
                            "Ƚ": "L",
                            "Ɫ": "L",
                            "Ⱡ": "L",
                            "Ꝉ": "L",
                            "Ꝇ": "L",
                            "Ꞁ": "L",
                            "Ǉ": "LJ",
                            "ǈ": "Lj",
                            "Ⓜ": "M",
                            "Ｍ": "M",
                            "Ḿ": "M",
                            "Ṁ": "M",
                            "Ṃ": "M",
                            "Ɱ": "M",
                            "Ɯ": "M",
                            "Ⓝ": "N",
                            "Ｎ": "N",
                            "Ǹ": "N",
                            "Ń": "N",
                            "Ñ": "N",
                            "Ṅ": "N",
                            "Ň": "N",
                            "Ṇ": "N",
                            "Ņ": "N",
                            "Ṋ": "N",
                            "Ṉ": "N",
                            "Ƞ": "N",
                            "Ɲ": "N",
                            "Ꞑ": "N",
                            "Ꞥ": "N",
                            "Ǌ": "NJ",
                            "ǋ": "Nj",
                            "Ⓞ": "O",
                            "Ｏ": "O",
                            "Ò": "O",
                            "Ó": "O",
                            "Ô": "O",
                            "Ồ": "O",
                            "Ố": "O",
                            "Ỗ": "O",
                            "Ổ": "O",
                            "Õ": "O",
                            "Ṍ": "O",
                            "Ȭ": "O",
                            "Ṏ": "O",
                            "Ō": "O",
                            "Ṑ": "O",
                            "Ṓ": "O",
                            "Ŏ": "O",
                            "Ȯ": "O",
                            "Ȱ": "O",
                            "Ö": "O",
                            "Ȫ": "O",
                            "Ỏ": "O",
                            "Ő": "O",
                            "Ǒ": "O",
                            "Ȍ": "O",
                            "Ȏ": "O",
                            "Ơ": "O",
                            "Ờ": "O",
                            "Ớ": "O",
                            "Ỡ": "O",
                            "Ở": "O",
                            "Ợ": "O",
                            "Ọ": "O",
                            "Ộ": "O",
                            "Ǫ": "O",
                            "Ǭ": "O",
                            "Ø": "O",
                            "Ǿ": "O",
                            "Ɔ": "O",
                            "Ɵ": "O",
                            "Ꝋ": "O",
                            "Ꝍ": "O",
                            "Ƣ": "OI",
                            "Ꝏ": "OO",
                            "Ȣ": "OU",
                            "Ⓟ": "P",
                            "Ｐ": "P",
                            "Ṕ": "P",
                            "Ṗ": "P",
                            "Ƥ": "P",
                            "Ᵽ": "P",
                            "Ꝑ": "P",
                            "Ꝓ": "P",
                            "Ꝕ": "P",
                            "Ⓠ": "Q",
                            "Ｑ": "Q",
                            "Ꝗ": "Q",
                            "Ꝙ": "Q",
                            "Ɋ": "Q",
                            "Ⓡ": "R",
                            "Ｒ": "R",
                            "Ŕ": "R",
                            "Ṙ": "R",
                            "Ř": "R",
                            "Ȑ": "R",
                            "Ȓ": "R",
                            "Ṛ": "R",
                            "Ṝ": "R",
                            "Ŗ": "R",
                            "Ṟ": "R",
                            "Ɍ": "R",
                            "Ɽ": "R",
                            "Ꝛ": "R",
                            "Ꞧ": "R",
                            "Ꞃ": "R",
                            "Ⓢ": "S",
                            "Ｓ": "S",
                            "ẞ": "S",
                            "Ś": "S",
                            "Ṥ": "S",
                            "Ŝ": "S",
                            "Ṡ": "S",
                            "Š": "S",
                            "Ṧ": "S",
                            "Ṣ": "S",
                            "Ṩ": "S",
                            "Ș": "S",
                            "Ş": "S",
                            "Ȿ": "S",
                            "Ꞩ": "S",
                            "Ꞅ": "S",
                            "Ⓣ": "T",
                            "Ｔ": "T",
                            "Ṫ": "T",
                            "Ť": "T",
                            "Ṭ": "T",
                            "Ț": "T",
                            "Ţ": "T",
                            "Ṱ": "T",
                            "Ṯ": "T",
                            "Ŧ": "T",
                            "Ƭ": "T",
                            "Ʈ": "T",
                            "Ⱦ": "T",
                            "Ꞇ": "T",
                            "Ꜩ": "TZ",
                            "Ⓤ": "U",
                            "Ｕ": "U",
                            "Ù": "U",
                            "Ú": "U",
                            "Û": "U",
                            "Ũ": "U",
                            "Ṹ": "U",
                            "Ū": "U",
                            "Ṻ": "U",
                            "Ŭ": "U",
                            "Ü": "U",
                            "Ǜ": "U",
                            "Ǘ": "U",
                            "Ǖ": "U",
                            "Ǚ": "U",
                            "Ủ": "U",
                            "Ů": "U",
                            "Ű": "U",
                            "Ǔ": "U",
                            "Ȕ": "U",
                            "Ȗ": "U",
                            "Ư": "U",
                            "Ừ": "U",
                            "Ứ": "U",
                            "Ữ": "U",
                            "Ử": "U",
                            "Ự": "U",
                            "Ụ": "U",
                            "Ṳ": "U",
                            "Ų": "U",
                            "Ṷ": "U",
                            "Ṵ": "U",
                            "Ʉ": "U",
                            "Ⓥ": "V",
                            "Ｖ": "V",
                            "Ṽ": "V",
                            "Ṿ": "V",
                            "Ʋ": "V",
                            "Ꝟ": "V",
                            "Ʌ": "V",
                            "Ꝡ": "VY",
                            "Ⓦ": "W",
                            "Ｗ": "W",
                            "Ẁ": "W",
                            "Ẃ": "W",
                            "Ŵ": "W",
                            "Ẇ": "W",
                            "Ẅ": "W",
                            "Ẉ": "W",
                            "Ⱳ": "W",
                            "Ⓧ": "X",
                            "Ｘ": "X",
                            "Ẋ": "X",
                            "Ẍ": "X",
                            "Ⓨ": "Y",
                            "Ｙ": "Y",
                            "Ỳ": "Y",
                            "Ý": "Y",
                            "Ŷ": "Y",
                            "Ỹ": "Y",
                            "Ȳ": "Y",
                            "Ẏ": "Y",
                            "Ÿ": "Y",
                            "Ỷ": "Y",
                            "Ỵ": "Y",
                            "Ƴ": "Y",
                            "Ɏ": "Y",
                            "Ỿ": "Y",
                            "Ⓩ": "Z",
                            "Ｚ": "Z",
                            "Ź": "Z",
                            "Ẑ": "Z",
                            "Ż": "Z",
                            "Ž": "Z",
                            "Ẓ": "Z",
                            "Ẕ": "Z",
                            "Ƶ": "Z",
                            "Ȥ": "Z",
                            "Ɀ": "Z",
                            "Ⱬ": "Z",
                            "Ꝣ": "Z",
                            "ⓐ": "a",
                            "ａ": "a",
                            "ẚ": "a",
                            "à": "a",
                            "á": "a",
                            "â": "a",
                            "ầ": "a",
                            "ấ": "a",
                            "ẫ": "a",
                            "ẩ": "a",
                            "ã": "a",
                            "ā": "a",
                            "ă": "a",
                            "ằ": "a",
                            "ắ": "a",
                            "ẵ": "a",
                            "ẳ": "a",
                            "ȧ": "a",
                            "ǡ": "a",
                            "ä": "a",
                            "ǟ": "a",
                            "ả": "a",
                            "å": "a",
                            "ǻ": "a",
                            "ǎ": "a",
                            "ȁ": "a",
                            "ȃ": "a",
                            "ạ": "a",
                            "ậ": "a",
                            "ặ": "a",
                            "ḁ": "a",
                            "ą": "a",
                            "ⱥ": "a",
                            "ɐ": "a",
                            "ꜳ": "aa",
                            "æ": "ae",
                            "ǽ": "ae",
                            "ǣ": "ae",
                            "ꜵ": "ao",
                            "ꜷ": "au",
                            "ꜹ": "av",
                            "ꜻ": "av",
                            "ꜽ": "ay",
                            "ⓑ": "b",
                            "ｂ": "b",
                            "ḃ": "b",
                            "ḅ": "b",
                            "ḇ": "b",
                            "ƀ": "b",
                            "ƃ": "b",
                            "ɓ": "b",
                            "ⓒ": "c",
                            "ｃ": "c",
                            "ć": "c",
                            "ĉ": "c",
                            "ċ": "c",
                            "č": "c",
                            "ç": "c",
                            "ḉ": "c",
                            "ƈ": "c",
                            "ȼ": "c",
                            "ꜿ": "c",
                            "ↄ": "c",
                            "ⓓ": "d",
                            "ｄ": "d",
                            "ḋ": "d",
                            "ď": "d",
                            "ḍ": "d",
                            "ḑ": "d",
                            "ḓ": "d",
                            "ḏ": "d",
                            "đ": "d",
                            "ƌ": "d",
                            "ɖ": "d",
                            "ɗ": "d",
                            "ꝺ": "d",
                            "ǳ": "dz",
                            "ǆ": "dz",
                            "ⓔ": "e",
                            "ｅ": "e",
                            "è": "e",
                            "é": "e",
                            "ê": "e",
                            "ề": "e",
                            "ế": "e",
                            "ễ": "e",
                            "ể": "e",
                            "ẽ": "e",
                            "ē": "e",
                            "ḕ": "e",
                            "ḗ": "e",
                            "ĕ": "e",
                            "ė": "e",
                            "ë": "e",
                            "ẻ": "e",
                            "ě": "e",
                            "ȅ": "e",
                            "ȇ": "e",
                            "ẹ": "e",
                            "ệ": "e",
                            "ȩ": "e",
                            "ḝ": "e",
                            "ę": "e",
                            "ḙ": "e",
                            "ḛ": "e",
                            "ɇ": "e",
                            "ɛ": "e",
                            "ǝ": "e",
                            "ⓕ": "f",
                            "ｆ": "f",
                            "ḟ": "f",
                            "ƒ": "f",
                            "ꝼ": "f",
                            "ⓖ": "g",
                            "ｇ": "g",
                            "ǵ": "g",
                            "ĝ": "g",
                            "ḡ": "g",
                            "ğ": "g",
                            "ġ": "g",
                            "ǧ": "g",
                            "ģ": "g",
                            "ǥ": "g",
                            "ɠ": "g",
                            "ꞡ": "g",
                            "ᵹ": "g",
                            "ꝿ": "g",
                            "ⓗ": "h",
                            "ｈ": "h",
                            "ĥ": "h",
                            "ḣ": "h",
                            "ḧ": "h",
                            "ȟ": "h",
                            "ḥ": "h",
                            "ḩ": "h",
                            "ḫ": "h",
                            "ẖ": "h",
                            "ħ": "h",
                            "ⱨ": "h",
                            "ⱶ": "h",
                            "ɥ": "h",
                            "ƕ": "hv",
                            "ⓘ": "i",
                            "ｉ": "i",
                            "ì": "i",
                            "í": "i",
                            "î": "i",
                            "ĩ": "i",
                            "ī": "i",
                            "ĭ": "i",
                            "ï": "i",
                            "ḯ": "i",
                            "ỉ": "i",
                            "ǐ": "i",
                            "ȉ": "i",
                            "ȋ": "i",
                            "ị": "i",
                            "į": "i",
                            "ḭ": "i",
                            "ɨ": "i",
                            "ı": "i",
                            "ⓙ": "j",
                            "ｊ": "j",
                            "ĵ": "j",
                            "ǰ": "j",
                            "ɉ": "j",
                            "ⓚ": "k",
                            "ｋ": "k",
                            "ḱ": "k",
                            "ǩ": "k",
                            "ḳ": "k",
                            "ķ": "k",
                            "ḵ": "k",
                            "ƙ": "k",
                            "ⱪ": "k",
                            "ꝁ": "k",
                            "ꝃ": "k",
                            "ꝅ": "k",
                            "ꞣ": "k",
                            "ⓛ": "l",
                            "ｌ": "l",
                            "ŀ": "l",
                            "ĺ": "l",
                            "ľ": "l",
                            "ḷ": "l",
                            "ḹ": "l",
                            "ļ": "l",
                            "ḽ": "l",
                            "ḻ": "l",
                            "ſ": "l",
                            "ł": "l",
                            "ƚ": "l",
                            "ɫ": "l",
                            "ⱡ": "l",
                            "ꝉ": "l",
                            "ꞁ": "l",
                            "ꝇ": "l",
                            "ǉ": "lj",
                            "ⓜ": "m",
                            "ｍ": "m",
                            "ḿ": "m",
                            "ṁ": "m",
                            "ṃ": "m",
                            "ɱ": "m",
                            "ɯ": "m",
                            "ⓝ": "n",
                            "ｎ": "n",
                            "ǹ": "n",
                            "ń": "n",
                            "ñ": "n",
                            "ṅ": "n",
                            "ň": "n",
                            "ṇ": "n",
                            "ņ": "n",
                            "ṋ": "n",
                            "ṉ": "n",
                            "ƞ": "n",
                            "ɲ": "n",
                            "ŉ": "n",
                            "ꞑ": "n",
                            "ꞥ": "n",
                            "ǌ": "nj",
                            "ⓞ": "o",
                            "ｏ": "o",
                            "ò": "o",
                            "ó": "o",
                            "ô": "o",
                            "ồ": "o",
                            "ố": "o",
                            "ỗ": "o",
                            "ổ": "o",
                            "õ": "o",
                            "ṍ": "o",
                            "ȭ": "o",
                            "ṏ": "o",
                            "ō": "o",
                            "ṑ": "o",
                            "ṓ": "o",
                            "ŏ": "o",
                            "ȯ": "o",
                            "ȱ": "o",
                            "ö": "o",
                            "ȫ": "o",
                            "ỏ": "o",
                            "ő": "o",
                            "ǒ": "o",
                            "ȍ": "o",
                            "ȏ": "o",
                            "ơ": "o",
                            "ờ": "o",
                            "ớ": "o",
                            "ỡ": "o",
                            "ở": "o",
                            "ợ": "o",
                            "ọ": "o",
                            "ộ": "o",
                            "ǫ": "o",
                            "ǭ": "o",
                            "ø": "o",
                            "ǿ": "o",
                            "ɔ": "o",
                            "ꝋ": "o",
                            "ꝍ": "o",
                            "ɵ": "o",
                            "ƣ": "oi",
                            "ȣ": "ou",
                            "ꝏ": "oo",
                            "ⓟ": "p",
                            "ｐ": "p",
                            "ṕ": "p",
                            "ṗ": "p",
                            "ƥ": "p",
                            "ᵽ": "p",
                            "ꝑ": "p",
                            "ꝓ": "p",
                            "ꝕ": "p",
                            "ⓠ": "q",
                            "ｑ": "q",
                            "ɋ": "q",
                            "ꝗ": "q",
                            "ꝙ": "q",
                            "ⓡ": "r",
                            "ｒ": "r",
                            "ŕ": "r",
                            "ṙ": "r",
                            "ř": "r",
                            "ȑ": "r",
                            "ȓ": "r",
                            "ṛ": "r",
                            "ṝ": "r",
                            "ŗ": "r",
                            "ṟ": "r",
                            "ɍ": "r",
                            "ɽ": "r",
                            "ꝛ": "r",
                            "ꞧ": "r",
                            "ꞃ": "r",
                            "ⓢ": "s",
                            "ｓ": "s",
                            "ß": "s",
                            "ś": "s",
                            "ṥ": "s",
                            "ŝ": "s",
                            "ṡ": "s",
                            "š": "s",
                            "ṧ": "s",
                            "ṣ": "s",
                            "ṩ": "s",
                            "ș": "s",
                            "ş": "s",
                            "ȿ": "s",
                            "ꞩ": "s",
                            "ꞅ": "s",
                            "ẛ": "s",
                            "ⓣ": "t",
                            "ｔ": "t",
                            "ṫ": "t",
                            "ẗ": "t",
                            "ť": "t",
                            "ṭ": "t",
                            "ț": "t",
                            "ţ": "t",
                            "ṱ": "t",
                            "ṯ": "t",
                            "ŧ": "t",
                            "ƭ": "t",
                            "ʈ": "t",
                            "ⱦ": "t",
                            "ꞇ": "t",
                            "ꜩ": "tz",
                            "ⓤ": "u",
                            "ｕ": "u",
                            "ù": "u",
                            "ú": "u",
                            "û": "u",
                            "ũ": "u",
                            "ṹ": "u",
                            "ū": "u",
                            "ṻ": "u",
                            "ŭ": "u",
                            "ü": "u",
                            "ǜ": "u",
                            "ǘ": "u",
                            "ǖ": "u",
                            "ǚ": "u",
                            "ủ": "u",
                            "ů": "u",
                            "ű": "u",
                            "ǔ": "u",
                            "ȕ": "u",
                            "ȗ": "u",
                            "ư": "u",
                            "ừ": "u",
                            "ứ": "u",
                            "ữ": "u",
                            "ử": "u",
                            "ự": "u",
                            "ụ": "u",
                            "ṳ": "u",
                            "ų": "u",
                            "ṷ": "u",
                            "ṵ": "u",
                            "ʉ": "u",
                            "ⓥ": "v",
                            "ｖ": "v",
                            "ṽ": "v",
                            "ṿ": "v",
                            "ʋ": "v",
                            "ꝟ": "v",
                            "ʌ": "v",
                            "ꝡ": "vy",
                            "ⓦ": "w",
                            "ｗ": "w",
                            "ẁ": "w",
                            "ẃ": "w",
                            "ŵ": "w",
                            "ẇ": "w",
                            "ẅ": "w",
                            "ẘ": "w",
                            "ẉ": "w",
                            "ⱳ": "w",
                            "ⓧ": "x",
                            "ｘ": "x",
                            "ẋ": "x",
                            "ẍ": "x",
                            "ⓨ": "y",
                            "ｙ": "y",
                            "ỳ": "y",
                            "ý": "y",
                            "ŷ": "y",
                            "ỹ": "y",
                            "ȳ": "y",
                            "ẏ": "y",
                            "ÿ": "y",
                            "ỷ": "y",
                            "ẙ": "y",
                            "ỵ": "y",
                            "ƴ": "y",
                            "ɏ": "y",
                            "ỿ": "y",
                            "ⓩ": "z",
                            "ｚ": "z",
                            "ź": "z",
                            "ẑ": "z",
                            "ż": "z",
                            "ž": "z",
                            "ẓ": "z",
                            "ẕ": "z",
                            "ƶ": "z",
                            "ȥ": "z",
                            "ɀ": "z",
                            "ⱬ": "z",
                            "ꝣ": "z",
                            "Ά": "Α",
                            "Έ": "Ε",
                            "Ή": "Η",
                            "Ί": "Ι",
                            "Ϊ": "Ι",
                            "Ό": "Ο",
                            "Ύ": "Υ",
                            "Ϋ": "Υ",
                            "Ώ": "Ω",
                            "ά": "α",
                            "έ": "ε",
                            "ή": "η",
                            "ί": "ι",
                            "ϊ": "ι",
                            "ΐ": "ι",
                            "ό": "ο",
                            "ύ": "υ",
                            "ϋ": "υ",
                            "ΰ": "υ",
                            "ω": "ω",
                            "ς": "σ"
                        }
                    }), t.define("select2/data/base", ["../utils"], function(e) {
                        function t(e, a) {
                            t.__super__.constructor.call(this)
                        }
                        return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                            throw new Error("The `current` method must be defined in child classes.")
                        }, t.prototype.query = function(e, t) {
                            throw new Error("The `query` method must be defined in child classes.")
                        }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, a) {
                            var i = t.id + "-result-";
                            return i += e.generateChars(4), i += null != a.id ? "-" + a.id.toString() : "-" + e.generateChars(4)
                        }, t
                    }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, a) {
                        function i(e, t) {
                            this.$element = e, this.options = t, i.__super__.constructor.call(this)
                        }
                        return t.Extend(i, e), i.prototype.current = function(e) {
                            var t = [],
                                i = this;
                            this.$element.find(":selected").each(function() {
                                var e = a(this),
                                    n = i.item(e);
                                t.push(n)
                            }), e(t)
                        }, i.prototype.select = function(e) {
                            var t = this;
                            if (e.selected = !0, a(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                            if (this.$element.prop("multiple")) this.current(function(i) {
                                var n = [];
                                (e = [e]).push.apply(e, i);
                                for (var r = 0; r < e.length; r++) {
                                    var s = e[r].id; - 1 === a.inArray(s, n) && n.push(s)
                                }
                                t.$element.val(n), t.$element.trigger("change")
                            });
                            else {
                                var i = e.id;
                                this.$element.val(i), this.$element.trigger("change")
                            }
                        }, i.prototype.unselect = function(e) {
                            var t = this;
                            if (this.$element.prop("multiple")) return e.selected = !1, a(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                                for (var n = [], r = 0; r < i.length; r++) {
                                    var s = i[r].id;
                                    s !== e.id && -1 === a.inArray(s, n) && n.push(s)
                                }
                                t.$element.val(n), t.$element.trigger("change")
                            })
                        }, i.prototype.bind = function(e, t) {
                            var a = this;
                            this.container = e, e.on("select", function(e) {
                                a.select(e.data)
                            }), e.on("unselect", function(e) {
                                a.unselect(e.data)
                            })
                        }, i.prototype.destroy = function() {
                            this.$element.find("*").each(function() {
                                a.removeData(this, "data")
                            })
                        }, i.prototype.query = function(e, t) {
                            var i = [],
                                n = this;
                            this.$element.children().each(function() {
                                var t = a(this);
                                if (t.is("option") || t.is("optgroup")) {
                                    var r = n.item(t),
                                        s = n.matches(e, r);
                                    null !== s && i.push(s)
                                }
                            }), t({
                                results: i
                            })
                        }, i.prototype.addOptions = function(e) {
                            t.appendMany(this.$element, e)
                        }, i.prototype.option = function(e) {
                            var t;
                            e.children ? (t = document.createElement("optgroup"), t.label = e.text) : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                            var i = a(t),
                                n = this._normalizeItem(e);
                            return n.element = t, a.data(t, "data", n), i
                        }, i.prototype.item = function(e) {
                            var t = {};
                            if (null != (t = a.data(e[0], "data"))) return t;
                            if (e.is("option")) t = {
                                id: e.val(),
                                text: e.text(),
                                disabled: e.prop("disabled"),
                                selected: e.prop("selected"),
                                title: e.prop("title")
                            };
                            else if (e.is("optgroup")) {
                                t = {
                                    text: e.prop("label"),
                                    children: [],
                                    title: e.prop("title")
                                };
                                for (var i = e.children("option"), n = [], r = 0; r < i.length; r++) {
                                    var s = a(i[r]),
                                        o = this.item(s);
                                    n.push(o)
                                }
                                t.children = n
                            }
                            return t = this._normalizeItem(t), t.element = e[0], a.data(e[0], "data", t), t
                        }, i.prototype._normalizeItem = function(e) {
                            a.isPlainObject(e) || (e = {
                                id: e,
                                text: e
                            });
                            var t = {
                                selected: !1,
                                disabled: !1
                            };
                            return null != (e = a.extend({}, {
                                text: ""
                            }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), a.extend({}, t, e)
                        }, i.prototype.matches = function(e, t) {
                            return this.options.get("matcher")(e, t)
                        }, i
                    }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, a) {
                        function i(e, t) {
                            var a = t.get("data") || [];
                            i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(a))
                        }
                        return t.Extend(i, e), i.prototype.select = function(e) {
                            var t = this.$element.find("option").filter(function(t, a) {
                                return a.value == e.id.toString()
                            });
                            0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                        }, i.prototype.convertToOptions = function(e) {
                            for (var i = this, n = this.$element.find("option"), r = n.map(function() {
                                    return i.item(a(this)).id
                                }).get(), s = [], o = 0; o < e.length; o++) {
                                var l = this._normalizeItem(e[o]);
                                if (a.inArray(l.id, r) >= 0) {
                                    var c = n.filter(function(e) {
                                            return function() {
                                                return a(this).val() == e.id
                                            }
                                        }(l)),
                                        u = this.item(c),
                                        d = a.extend(!0, {}, l, u),
                                        p = this.option(d);
                                    c.replaceWith(p)
                                } else {
                                    var h = this.option(l);
                                    if (l.children) {
                                        var f = this.convertToOptions(l.children);
                                        t.appendMany(h, f)
                                    }
                                    s.push(h)
                                }
                            }
                            return s
                        }, i
                    }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, a) {
                        function i(e, t) {
                            this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                        }
                        return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                            var t = {
                                data: function(e) {
                                    return a.extend({}, e, {
                                        q: e.term
                                    })
                                },
                                transport: function(e, t, i) {
                                    var n = a.ajax(e);
                                    return n.then(t), n.fail(i), n
                                }
                            };
                            return a.extend({}, t, e, !0)
                        }, i.prototype.processResults = function(e) {
                            return e
                        }, i.prototype.query = function(e, t) {
                            function i() {
                                var i = r.transport(r, function(i) {
                                    var r = n.processResults(i, e);
                                    n.options.get("debug") && window.console && console.error && (r && r.results && a.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(r)
                                }, function() {
                                    i.status && "0" === i.status || n.trigger("results:message", {
                                        message: "errorLoading"
                                    })
                                });
                                n._request = i
                            }
                            var n = this;
                            null != this._request && (a.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var r = a.extend({
                                type: "GET"
                            }, this.ajaxOptions);
                            "function" == typeof r.url && (r.url = r.url.call(this.$element, e)), "function" == typeof r.data && (r.data = r.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                        }, i
                    }), t.define("select2/data/tags", ["jquery"], function(e) {
                        function t(t, a, i) {
                            var n = i.get("tags"),
                                r = i.get("createTag");
                            void 0 !== r && (this.createTag = r);
                            var s = i.get("insertTag");
                            if (void 0 !== s && (this.insertTag = s), t.call(this, a, i), e.isArray(n))
                                for (var o = 0; o < n.length; o++) {
                                    var l = n[o],
                                        c = this._normalizeItem(l),
                                        u = this.option(c);
                                    this.$element.append(u)
                                }
                        }
                        return t.prototype.query = function(e, t, a) {
                            function i(e, r) {
                                for (var s = e.results, o = 0; o < s.length; o++) {
                                    var l = s[o],
                                        c = null != l.children && !i({
                                            results: l.children
                                        }, !0);
                                    if (l.text === t.term || c) return !r && (e.data = s, void a(e))
                                }
                                if (r) return !0;
                                var u = n.createTag(t);
                                if (null != u) {
                                    var d = n.option(u);
                                    d.attr("data-select2-tag", !0), n.addOptions([d]), n.insertTag(s, u)
                                }
                                e.results = s, a(e)
                            }
                            var n = this;
                            return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, a) : void e.call(this, t, i)
                        }, t.prototype.createTag = function(t, a) {
                            var i = e.trim(a.term);
                            return "" === i ? null : {
                                id: i,
                                text: i
                            }
                        }, t.prototype.insertTag = function(e, t, a) {
                            t.unshift(a)
                        }, t.prototype._removeOldTags = function(t) {
                            (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function() {
                                this.selected || e(this).remove()
                            })
                        }, t
                    }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                        function t(e, t, a) {
                            var i = a.get("tokenizer");
                            void 0 !== i && (this.tokenizer = i), e.call(this, t, a)
                        }
                        return t.prototype.bind = function(e, t, a) {
                            e.call(this, t, a), this.$search = t.dropdown.$search || t.selection.$search || a.find(".select2-search__field")
                        }, t.prototype.query = function(t, a, i) {
                            function n(e) {
                                r.trigger("select", {
                                    data: e
                                })
                            }
                            var r = this;
                            a.term = a.term || "";
                            var s = this.tokenizer(a, this.options, function(t) {
                                var a = r._normalizeItem(t);
                                if (!r.$element.find("option").filter(function() {
                                        return e(this).val() === a.id
                                    }).length) {
                                    var i = r.option(a);
                                    i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i])
                                }
                                n(a)
                            });
                            s.term !== a.term && (this.$search.length && (this.$search.val(s.term), this.$search.focus()), a.term = s.term), t.call(this, a, i)
                        }, t.prototype.tokenizer = function(t, a, i, n) {
                            for (var r = i.get("tokenSeparators") || [], s = a.term, o = 0, l = this.createTag || function(e) {
                                    return {
                                        id: e.term,
                                        text: e.term
                                    }
                                }; o < s.length;) {
                                var c = s[o];
                                if (-1 !== e.inArray(c, r)) {
                                    var u = s.substr(0, o),
                                        d = l(e.extend({}, a, {
                                            term: u
                                        }));
                                    null != d ? (n(d), s = s.substr(o + 1) || "", o = 0) : o++
                                } else o++
                            }
                            return {
                                term: s
                            }
                        }, t
                    }), t.define("select2/data/minimumInputLength", [], function() {
                        function e(e, t, a) {
                            this.minimumInputLength = a.get("minimumInputLength"), e.call(this, t, a)
                        }
                        return e.prototype.query = function(e, t, a) {
                            return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            }) : void e.call(this, t, a)
                        }, e
                    }), t.define("select2/data/maximumInputLength", [], function() {
                        function e(e, t, a) {
                            this.maximumInputLength = a.get("maximumInputLength"), e.call(this, t, a)
                        }
                        return e.prototype.query = function(e, t, a) {
                            return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            }) : void e.call(this, t, a)
                        }, e
                    }), t.define("select2/data/maximumSelectionLength", [], function() {
                        function e(e, t, a) {
                            this.maximumSelectionLength = a.get("maximumSelectionLength"), e.call(this, t, a)
                        }
                        return e.prototype.query = function(e, t, a) {
                            var i = this;
                            this.current(function(n) {
                                var r = null != n ? n.length : 0;
                                return i.maximumSelectionLength > 0 && r >= i.maximumSelectionLength ? void i.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: i.maximumSelectionLength
                                    }
                                }) : void e.call(i, t, a)
                            })
                        }, e
                    }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                        function a(e, t) {
                            this.$element = e, this.options = t, a.__super__.constructor.call(this)
                        }
                        return t.Extend(a, t.Observable), a.prototype.render = function() {
                            var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                        }, a.prototype.bind = function() {}, a.prototype.position = function(e, t) {}, a.prototype.destroy = function() {
                            this.$dropdown.remove()
                        }, a
                    }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e, t) {
                        function a() {}
                        return a.prototype.render = function(t) {
                            var a = t.call(this),
                                i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                            return this.$searchContainer = i, this.$search = i.find("input"), a.prepend(i), a
                        }, a.prototype.bind = function(t, a, i) {
                            var n = this;
                            t.call(this, a, i), this.$search.on("keydown", function(e) {
                                n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented()
                            }), this.$search.on("input", function(t) {
                                e(this).off("keyup")
                            }), this.$search.on("keyup input", function(e) {
                                n.handleSearch(e)
                            }), a.on("open", function() {
                                n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function() {
                                    n.$search.focus()
                                }, 0)
                            }), a.on("close", function() {
                                n.$search.attr("tabindex", -1), n.$search.val("")
                            }), a.on("focus", function() {
                                a.isOpen() && n.$search.focus()
                            }), a.on("results:all", function(e) {
                                null != e.query.term && "" !== e.query.term || (n.showSearch(e) ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide"))
                            })
                        }, a.prototype.handleSearch = function(e) {
                            if (!this._keyUpPrevented) {
                                var t = this.$search.val();
                                this.trigger("query", {
                                    term: t
                                })
                            }
                            this._keyUpPrevented = !1
                        }, a.prototype.showSearch = function(e, t) {
                            return !0
                        }, a
                    }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                        function e(e, t, a, i) {
                            this.placeholder = this.normalizePlaceholder(a.get("placeholder")), e.call(this, t, a, i)
                        }
                        return e.prototype.append = function(e, t) {
                            t.results = this.removePlaceholder(t.results), e.call(this, t)
                        }, e.prototype.normalizePlaceholder = function(e, t) {
                            return "string" == typeof t && (t = {
                                id: "",
                                text: t
                            }), t
                        }, e.prototype.removePlaceholder = function(e, t) {
                            for (var a = t.slice(0), i = t.length - 1; i >= 0; i--) {
                                var n = t[i];
                                this.placeholder.id === n.id && a.splice(i, 1)
                            }
                            return a
                        }, e
                    }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                        function t(e, t, a, i) {
                            this.lastParams = {}, e.call(this, t, a, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                        }
                        return t.prototype.append = function(e, t) {
                            this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                        }, t.prototype.bind = function(t, a, i) {
                            var n = this;
                            t.call(this, a, i), a.on("query", function(e) {
                                n.lastParams = e, n.loading = !0
                            }), a.on("query:append", function(e) {
                                n.lastParams = e, n.loading = !0
                            }), this.$results.on("scroll", function() {
                                var t = e.contains(document.documentElement, n.$loadingMore[0]);
                                !n.loading && t && n.$results.offset().top + n.$results.outerHeight(!1) + 50 >= n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1) && n.loadMore()
                            })
                        }, t.prototype.loadMore = function() {
                            this.loading = !0;
                            var t = e.extend({}, {
                                page: 1
                            }, this.lastParams);
                            t.page++, this.trigger("query:append", t)
                        }, t.prototype.showLoadingMore = function(e, t) {
                            return t.pagination && t.pagination.more
                        }, t.prototype.createLoadingMore = function() {
                            var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                a = this.options.get("translations").get("loadingMore");
                            return t.html(a(this.lastParams)), t
                        }, t
                    }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                        function a(t, a, i) {
                            this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, a, i)
                        }
                        return a.prototype.bind = function(e, t, a) {
                            var i = this,
                                n = !1;
                            e.call(this, t, a), t.on("open", function() {
                                i._showDropdown(), i._attachPositioningHandler(t), n || (n = !0, t.on("results:all", function() {
                                    i._positionDropdown(), i._resizeDropdown()
                                }), t.on("results:append", function() {
                                    i._positionDropdown(), i._resizeDropdown()
                                }))
                            }), t.on("close", function() {
                                i._hideDropdown(), i._detachPositioningHandler(t)
                            }), this.$dropdownContainer.on("mousedown", function(e) {
                                e.stopPropagation()
                            })
                        }, a.prototype.destroy = function(e) {
                            e.call(this), this.$dropdownContainer.remove()
                        }, a.prototype.position = function(e, t, a) {
                            t.attr("class", a.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                                position: "absolute",
                                top: -999999
                            }), this.$container = a
                        }, a.prototype.render = function(t) {
                            var a = e("<span></span>"),
                                i = t.call(this);
                            return a.append(i), this.$dropdownContainer = a, a
                        }, a.prototype._hideDropdown = function(e) {
                            this.$dropdownContainer.detach()
                        }, a.prototype._attachPositioningHandler = function(a, i) {
                            var n = this,
                                r = "scroll.select2." + i.id,
                                s = "resize.select2." + i.id,
                                o = "orientationchange.select2." + i.id,
                                l = this.$container.parents().filter(t.hasScroll);
                            l.each(function() {
                                e(this).data("select2-scroll-position", {
                                    x: e(this).scrollLeft(),
                                    y: e(this).scrollTop()
                                })
                            }), l.on(r, function(t) {
                                var a = e(this).data("select2-scroll-position");
                                e(this).scrollTop(a.y)
                            }), e(window).on(r + " " + s + " " + o, function(e) {
                                n._positionDropdown(), n._resizeDropdown()
                            })
                        }, a.prototype._detachPositioningHandler = function(a, i) {
                            var n = "scroll.select2." + i.id,
                                r = "resize.select2." + i.id,
                                s = "orientationchange.select2." + i.id;
                            this.$container.parents().filter(t.hasScroll).off(n), e(window).off(n + " " + r + " " + s)
                        }, a.prototype._positionDropdown = function() {
                            var t = e(window),
                                a = this.$dropdown.hasClass("select2-dropdown--above"),
                                i = this.$dropdown.hasClass("select2-dropdown--below"),
                                n = null,
                                r = this.$container.offset();
                            r.bottom = r.top + this.$container.outerHeight(!1);
                            var s = {
                                height: this.$container.outerHeight(!1)
                            };
                            s.top = r.top, s.bottom = r.top + s.height;
                            var o = {
                                    height: this.$dropdown.outerHeight(!1)
                                },
                                l = {
                                    top: t.scrollTop(),
                                    bottom: t.scrollTop() + t.height()
                                },
                                c = l.top < r.top - o.height,
                                u = l.bottom > r.bottom + o.height,
                                d = {
                                    left: r.left,
                                    top: s.bottom
                                },
                                p = this.$dropdownParent;
                            "static" === p.css("position") && (p = p.offsetParent());
                            var h = p.offset();
                            d.top -= h.top, d.left -= h.left, a || i || (n = "below"), u || !c || a ? !c && u && a && (n = "below") : n = "above", ("above" == n || a && "below" !== n) && (d.top = s.top - h.top - o.height), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(d)
                        }, a.prototype._resizeDropdown = function() {
                            var e = {
                                width: this.$container.outerWidth(!1) + "px"
                            };
                            this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                        }, a.prototype._showDropdown = function(e) {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                        }, a
                    }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function e(t) {
                            for (var a = 0, i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.children ? a += e(n.children) : a++
                            }
                            return a
                        }

                        function t(e, t, a, i) {
                            this.minimumResultsForSearch = a.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, a, i)
                        }
                        return t.prototype.showSearch = function(t, a) {
                            return !(e(a.data.results) < this.minimumResultsForSearch) && t.call(this, a)
                        }, t
                    }), t.define("select2/dropdown/selectOnClose", [], function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, a) {
                            var i = this;
                            e.call(this, t, a), t.on("close", function(e) {
                                i._handleSelectOnClose(e)
                            })
                        }, e.prototype._handleSelectOnClose = function(e, t) {
                            if (t && null != t.originalSelect2Event) {
                                var a = t.originalSelect2Event;
                                if ("select" === a._type || "unselect" === a._type) return
                            }
                            var i = this.getHighlightedResults();
                            if (!(i.length < 1)) {
                                var n = i.data("data");
                                null != n.element && n.element.selected || null == n.element && n.selected || this.trigger("select", {
                                    data: n
                                })
                            }
                        }, e
                    }), t.define("select2/dropdown/closeOnSelect", [], function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, a) {
                            var i = this;
                            e.call(this, t, a), t.on("select", function(e) {
                                i._selectTriggered(e)
                            }), t.on("unselect", function(e) {
                                i._selectTriggered(e)
                            })
                        }, e.prototype._selectTriggered = function(e, t) {
                            var a = t.originalEvent;
                            a && a.ctrlKey || this.trigger("close", {
                                originalEvent: a,
                                originalSelect2Event: t
                            })
                        }, e
                    }), t.define("select2/i18n/en", [], function() {
                        return {
                            errorLoading: function() {
                                return "The results could not be loaded."
                            },
                            inputTooLong: function(e) {
                                var t = e.input.length - e.maximum,
                                    a = "Please delete " + t + " character";
                                return 1 != t && (a += "s"), a
                            },
                            inputTooShort: function(e) {
                                return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                            },
                            loadingMore: function() {
                                return "Loading more results…"
                            },
                            maximumSelected: function(e) {
                                var t = "You can only select " + e.maximum + " item";
                                return 1 != e.maximum && (t += "s"), t
                            },
                            noResults: function() {
                                return "No results found"
                            },
                            searching: function() {
                                return "Searching…"
                            }
                        }
                    }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, a, i, n, r, s, o, l, c, u, d, p, h, f, g, m, v, y, _, w, b, S, x, k, C, D, T, M) {
                        function F() {
                            this.reset()
                        }
                        return F.prototype.apply = function(d) {
                            if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                                if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = h : d.dataAdapter = p, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, _)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), null != d.query) {
                                    var M = t(d.amdBase + "compat/query");
                                    d.dataAdapter = c.Decorate(d.dataAdapter, M)
                                }
                                if (null != d.initSelection) {
                                    var F = t(d.amdBase + "compat/initSelection");
                                    d.dataAdapter = c.Decorate(d.dataAdapter, F)
                                }
                            }
                            if (null == d.resultsAdapter && (d.resultsAdapter = a, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, x)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, D))), null == d.dropdownAdapter) {
                                if (d.multiple) d.dropdownAdapter = w;
                                else {
                                    var $ = c.Decorate(w, b);
                                    d.dropdownAdapter = $
                                }
                                if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                                    var P = t(d.amdBase + "compat/dropdownCss");
                                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, P)
                                }
                                d.dropdownAdapter = c.Decorate(d.dropdownAdapter, k)
                            }
                            if (null == d.selectionAdapter) {
                                if (d.multiple ? d.selectionAdapter = n : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                                    var I = t(d.amdBase + "compat/containerCss");
                                    d.selectionAdapter = c.Decorate(d.selectionAdapter, I)
                                }
                                d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                            }
                            if ("string" == typeof d.language)
                                if (d.language.indexOf("-") > 0) {
                                    var O = d.language.split("-")[0];
                                    d.language = [d.language, O]
                                } else d.language = [d.language];
                            if (e.isArray(d.language)) {
                                var E = new u;
                                d.language.push("en");
                                for (var A = d.language, L = 0; L < A.length; L++) {
                                    var z = A[L],
                                        j = {};
                                    try {
                                        j = u.loadPath(z)
                                    } catch (e) {
                                        try {
                                            z = this.defaults.amdLanguageBase + z, j = u.loadPath(z)
                                        } catch (e) {
                                            d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + z + '" could not be automatically loaded. A fallback will be used instead.');
                                            continue
                                        }
                                    }
                                    E.extend(j)
                                }
                                d.translations = E
                            } else {
                                var R = u.loadPath(this.defaults.amdLanguageBase + "en"),
                                    N = new u(d.language);
                                N.extend(R), d.translations = N
                            }
                            return d
                        }, F.prototype.reset = function() {
                            function t(e) {
                                return e.replace(/[^\u0000-\u007E]/g, function(e) {
                                    return d[e] || e
                                })
                            }

                            function a(i, n) {
                                if ("" === e.trim(i.term)) return n;
                                if (n.children && n.children.length > 0) {
                                    for (var r = e.extend(!0, {}, n), s = n.children.length - 1; s >= 0; s--) null == a(i, n.children[s]) && r.children.splice(s, 1);
                                    return r.children.length > 0 ? r : a(i, r)
                                }
                                var o = t(n.text).toUpperCase(),
                                    l = t(i.term).toUpperCase();
                                return o.indexOf(l) > -1 ? n : null
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: c.escapeMarkup,
                                language: M,
                                matcher: a,
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function(e) {
                                    return e
                                },
                                templateResult: function(e) {
                                    return e.text
                                },
                                templateSelection: function(e) {
                                    return e.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, F.prototype.set = function(t, a) {
                            var i = {};
                            i[e.camelCase(t)] = a;
                            var n = c._convertData(i);
                            e.extend(this.defaults, n)
                        }, new F
                    }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, a, i) {
                        function n(t, n) {
                            if (this.options = t, null != n && this.fromElement(n), this.options = a.apply(this.options), n && n.is("input")) {
                                var r = e(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r)
                            }
                        }
                        return n.prototype.fromElement = function(e) {
                            var a = ["select2"];
                            null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                            var n = {};
                            n = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                            var r = t.extend(!0, {}, n);
                            r = i._convertData(r);
                            for (var s in r) t.inArray(s, a) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], r[s]) : this.options[s] = r[s]);
                            return this
                        }, n.prototype.get = function(e) {
                            return this.options[e]
                        }, n.prototype.set = function(e, t) {
                            this.options[e] = t
                        }, n
                    }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, a, i) {
                        var n = function(e, a) {
                            null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), a = a || {}, this.options = new t(a, e), n.__super__.constructor.call(this);
                            var i = e.attr("tabindex") || 0;
                            e.data("old-tabindex", i), e.attr("tabindex", "-1");
                            var r = this.options.get("dataAdapter");
                            this.dataAdapter = new r(e, this.options);
                            var s = this.render();
                            this._placeContainer(s);
                            var o = this.options.get("selectionAdapter");
                            this.selection = new o(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                            var l = this.options.get("dropdownAdapter");
                            this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                            var c = this.options.get("resultsAdapter");
                            this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var u = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                                u.trigger("selection:update", {
                                    data: e
                                })
                            }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                        };
                        return a.Extend(n, a.Observable), n.prototype._generateId = function(e) {
                            var t = "";
                            return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + a.generateChars(2) : a.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
                        }, n.prototype._placeContainer = function(e) {
                            e.insertAfter(this.$element);
                            var t = this._resolveWidth(this.$element, this.options.get("width"));
                            null != t && e.css("width", t)
                        }, n.prototype._resolveWidth = function(e, t) {
                            var a = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == t) {
                                var i = this._resolveWidth(e, "style");
                                return null != i ? i : this._resolveWidth(e, "element")
                            }
                            if ("element" == t) {
                                var n = e.outerWidth(!1);
                                return 0 >= n ? "auto" : n + "px"
                            }
                            if ("style" == t) {
                                var r = e.attr("style");
                                if ("string" != typeof r) return null;
                                for (var s = r.split(";"), o = 0, l = s.length; l > o; o += 1) {
                                    var c = s[o].replace(/\s/g, "").match(a);
                                    if (null !== c && c.length >= 1) return c[1]
                                }
                                return null
                            }
                            return t
                        }, n.prototype._bindAdapters = function() {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                        }, n.prototype._registerDomEvents = function() {
                            var t = this;
                            this.$element.on("change.select2", function() {
                                t.dataAdapter.current(function(e) {
                                    t.trigger("selection:update", {
                                        data: e
                                    })
                                })
                            }), this.$element.on("focus.select2", function(e) {
                                t.trigger("focus", e)
                            }), this._syncA = a.bind(this._syncAttributes, this), this._syncS = a.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                            var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != i ? (this._observer = new i(function(a) {
                                e.each(a, t._syncA), e.each(a, t._syncS)
                            }), this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                        }, n.prototype._registerDataEvents = function() {
                            var e = this;
                            this.dataAdapter.on("*", function(t, a) {
                                e.trigger(t, a)
                            })
                        }, n.prototype._registerSelectionEvents = function() {
                            var t = this,
                                a = ["toggle", "focus"];
                            this.selection.on("toggle", function() {
                                t.toggleDropdown()
                            }), this.selection.on("focus", function(e) {
                                t.focus(e)
                            }), this.selection.on("*", function(i, n) {
                                -1 === e.inArray(i, a) && t.trigger(i, n)
                            })
                        }, n.prototype._registerDropdownEvents = function() {
                            var e = this;
                            this.dropdown.on("*", function(t, a) {
                                e.trigger(t, a)
                            })
                        }, n.prototype._registerResultsEvents = function() {
                            var e = this;
                            this.results.on("*", function(t, a) {
                                e.trigger(t, a)
                            })
                        }, n.prototype._registerEvents = function() {
                            var e = this;
                            this.on("open", function() {
                                e.$container.addClass("select2-container--open")
                            }), this.on("close", function() {
                                e.$container.removeClass("select2-container--open")
                            }), this.on("enable", function() {
                                e.$container.removeClass("select2-container--disabled")
                            }), this.on("disable", function() {
                                e.$container.addClass("select2-container--disabled")
                            }), this.on("blur", function() {
                                e.$container.removeClass("select2-container--focus")
                            }), this.on("query", function(t) {
                                e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(a) {
                                    e.trigger("results:all", {
                                        data: a,
                                        query: t
                                    })
                                })
                            }), this.on("query:append", function(t) {
                                this.dataAdapter.query(t, function(a) {
                                    e.trigger("results:append", {
                                        data: a,
                                        query: t
                                    })
                                })
                            }), this.on("keypress", function(t) {
                                var a = t.which;
                                e.isOpen() ? a === i.ESC || a === i.TAB || a === i.UP && t.altKey ? (e.close(), t.preventDefault()) : a === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : a === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : a === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : a === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (a === i.ENTER || a === i.SPACE || a === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                            })
                        }, n.prototype._syncAttributes = function() {
                            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                        }, n.prototype._syncSubtree = function(e, t) {
                            var a = !1,
                                i = this;
                            if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                                if (t)
                                    if (t.addedNodes && t.addedNodes.length > 0)
                                        for (var n = 0; n < t.addedNodes.length; n++) t.addedNodes[n].selected && (a = !0);
                                    else t.removedNodes && t.removedNodes.length > 0 && (a = !0);
                                else a = !0;
                                a && this.dataAdapter.current(function(e) {
                                    i.trigger("selection:update", {
                                        data: e
                                    })
                                })
                            }
                        }, n.prototype.trigger = function(e, t) {
                            var a = n.__super__.trigger,
                                i = {
                                    open: "opening",
                                    close: "closing",
                                    select: "selecting",
                                    unselect: "unselecting"
                                };
                            if (void 0 === t && (t = {}), e in i) {
                                var r = i[e],
                                    s = {
                                        prevented: !1,
                                        name: e,
                                        args: t
                                    };
                                if (a.call(this, r, s), s.prevented) return void(t.prevented = !0)
                            }
                            a.call(this, e, t)
                        }, n.prototype.toggleDropdown = function() {
                            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                        }, n.prototype.open = function() {
                            this.isOpen() || this.trigger("query", {})
                        }, n.prototype.close = function() {
                            this.isOpen() && this.trigger("close", {})
                        }, n.prototype.isOpen = function() {
                            return this.$container.hasClass("select2-container--open")
                        }, n.prototype.hasFocus = function() {
                            return this.$container.hasClass("select2-container--focus")
                        }, n.prototype.focus = function(e) {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                        }, n.prototype.enable = function(e) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                            var t = !e[0];
                            this.$element.prop("disabled", t)
                        }, n.prototype.data = function() {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var e = [];
                            return this.dataAdapter.current(function(t) {
                                e = t
                            }), e
                        }, n.prototype.val = function(t) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                            var a = t[0];
                            e.isArray(a) && (a = e.map(a, function(e) {
                                return e.toString()
                            })), this.$element.val(a).trigger("change")
                        }, n.prototype.destroy = function() {
                            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                        }, n.prototype.render = function() {
                            var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                        }, n
                    }), t.define("select2/compat/utils", ["jquery"], function(e) {
                        return {
                            syncCssClasses: function(t, a, i) {
                                var n, r, s = [];
                                (n = e.trim(t.attr("class"))) && (n = "" + n, e(n.split(/\s+/)).each(function() {
                                    0 === this.indexOf("select2-") && s.push(this)
                                })), (n = e.trim(a.attr("class"))) && (n = "" + n, e(n.split(/\s+/)).each(function() {
                                    0 !== this.indexOf("select2-") && null != (r = i(this)) && s.push(r)
                                })), t.attr("class", s.join(" "))
                            }
                        }
                    }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function(e, t) {
                        function a(e) {
                            return null
                        }

                        function i() {}
                        return i.prototype.render = function(i) {
                            var n = i.call(this),
                                r = this.options.get("containerCssClass") || "";
                            e.isFunction(r) && (r = r(this.$element));
                            var s = this.options.get("adaptContainerCssClass");
                            if (s = s || a, -1 !== r.indexOf(":all:")) {
                                r = r.replace(":all:", "");
                                var o = s;
                                s = function(e) {
                                    var t = o(e);
                                    return null != t ? t + " " + e : e
                                }
                            }
                            var l = this.options.get("containerCss") || {};
                            return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(n, this.$element, s), n.css(l), n.addClass(r), n
                        }, i
                    }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(e, t) {
                        function a(e) {
                            return null
                        }

                        function i() {}
                        return i.prototype.render = function(i) {
                            var n = i.call(this),
                                r = this.options.get("dropdownCssClass") || "";
                            e.isFunction(r) && (r = r(this.$element));
                            var s = this.options.get("adaptDropdownCssClass");
                            if (s = s || a, -1 !== r.indexOf(":all:")) {
                                r = r.replace(":all:", "");
                                var o = s;
                                s = function(e) {
                                    var t = o(e);
                                    return null != t ? t + " " + e : e
                                }
                            }
                            var l = this.options.get("dropdownCss") || {};
                            return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(n, this.$element, s), n.css(l), n.addClass(r), n
                        }, i
                    }), t.define("select2/compat/initSelection", ["jquery"], function(e) {
                        function t(e, t, a) {
                            a.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = a.get("initSelection"), this._isInitialized = !1, e.call(this, t, a)
                        }
                        return t.prototype.current = function(t, a) {
                            var i = this;
                            return this._isInitialized ? void t.call(this, a) : void this.initSelection.call(null, this.$element, function(t) {
                                i._isInitialized = !0, e.isArray(t) || (t = [t]), a(t)
                            })
                        }, t
                    }), t.define("select2/compat/inputData", ["jquery"], function(e) {
                        function t(e, t, a) {
                            this._currentData = [], this._valueSeparator = a.get("valueSeparator") || ",", "hidden" === t.prop("type") && a.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, a)
                        }
                        return t.prototype.current = function(t, a) {
                            function i(t, a) {
                                var n = [];
                                return t.selected || -1 !== e.inArray(t.id, a) ? (t.selected = !0, n.push(t)) : t.selected = !1, t.children && n.push.apply(n, i(t.children, a)), n
                            }
                            for (var n = [], r = 0; r < this._currentData.length; r++) {
                                var s = this._currentData[r];
                                n.push.apply(n, i(s, this.$element.val().split(this._valueSeparator)))
                            }
                            a(n)
                        }, t.prototype.select = function(t, a) {
                            if (this.options.get("multiple")) {
                                var i = this.$element.val();
                                i += this._valueSeparator + a.id, this.$element.val(i), this.$element.trigger("change")
                            } else this.current(function(t) {
                                e.map(t, function(e) {
                                    e.selected = !1
                                })
                            }), this.$element.val(a.id), this.$element.trigger("change")
                        }, t.prototype.unselect = function(e, t) {
                            var a = this;
                            t.selected = !1, this.current(function(e) {
                                for (var i = [], n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    t.id != r.id && i.push(r.id)
                                }
                                a.$element.val(i.join(a._valueSeparator)), a.$element.trigger("change")
                            })
                        }, t.prototype.query = function(e, t, a) {
                            for (var i = [], n = 0; n < this._currentData.length; n++) {
                                var r = this._currentData[n],
                                    s = this.matches(t, r);
                                null !== s && i.push(s)
                            }
                            a({
                                results: i
                            })
                        }, t.prototype.addOptions = function(t, a) {
                            var i = e.map(a, function(t) {
                                return e.data(t[0], "data")
                            });
                            this._currentData.push.apply(this._currentData, i)
                        }, t
                    }), t.define("select2/compat/matcher", ["jquery"], function(e) {
                        return function(t) {
                            return function(a, i) {
                                var n = e.extend(!0, {}, i);
                                if (null == a.term || "" === e.trim(a.term)) return n;
                                if (i.children) {
                                    for (var r = i.children.length - 1; r >= 0; r--) {
                                        var s = i.children[r];
                                        t(a.term, s.text, s) || n.children.splice(r, 1)
                                    }
                                    if (n.children.length > 0) return n
                                }
                                return t(a.term, i.text, i) ? n : null
                            }
                        }
                    }), t.define("select2/compat/query", [], function() {
                        function e(e, t, a) {
                            a.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, a)
                        }
                        return e.prototype.query = function(e, t, a) {
                            t.callback = a, this.options.get("query").call(null, t)
                        }, e
                    }), t.define("select2/dropdown/attachContainer", [], function() {
                        function e(e, t, a) {
                            e.call(this, t, a)
                        }
                        return e.prototype.position = function(e, t, a) {
                            a.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), a.addClass("select2-container--below")
                        }, e
                    }), t.define("select2/dropdown/stopPropagation", [], function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, a) {
                            e.call(this, t, a);
                            var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$dropdown.on(i.join(" "), function(e) {
                                e.stopPropagation()
                            })
                        }, e
                    }), t.define("select2/selection/stopPropagation", [], function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, a) {
                            e.call(this, t, a);
                            var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$selection.on(i.join(" "), function(e) {
                                e.stopPropagation()
                            })
                        }, e
                    }),
                    function(a) {
                        "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], a) : "object" == typeof exports ? module.exports = a : a(e)
                    }(function(e) {
                        function t(t) {
                            var s = t || window.event,
                                o = l.call(arguments, 1),
                                c = 0,
                                d = 0,
                                p = 0,
                                h = 0,
                                f = 0,
                                g = 0;
                            if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (p = -1 * s.detail), "wheelDelta" in s && (p = s.wheelDelta), "wheelDeltaY" in s && (p = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * p, p = 0), c = 0 === p ? d : p, "deltaY" in s && (p = -1 * s.deltaY, c = p), "deltaX" in s && (d = s.deltaX, 0 === p && (c = -1 * d)), 0 !== p || 0 !== d) {
                                if (1 === s.deltaMode) {
                                    var m = e.data(this, "mousewheel-line-height");
                                    c *= m, p *= m, d *= m
                                } else if (2 === s.deltaMode) {
                                    var v = e.data(this, "mousewheel-page-height");
                                    c *= v, p *= v, d *= v
                                }
                                if (h = Math.max(Math.abs(p), Math.abs(d)), (!r || r > h) && (r = h, i(s, h) && (r /= 40)), i(s, h) && (c /= 40, d /= 40, p /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), p = Math[p >= 1 ? "floor" : "ceil"](p / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var y = this.getBoundingClientRect();
                                    f = t.clientX - y.left, g = t.clientY - y.top
                                }
                                return t.deltaX = d, t.deltaY = p, t.deltaFactor = r, t.offsetX = f, t.offsetY = g, t.deltaMode = 0, o.unshift(t, c, d, p), n && clearTimeout(n), n = setTimeout(a, 200), (e.event.dispatch || e.event.handle).apply(this, o)
                            }
                        }

                        function a() {
                            r = null
                        }

                        function i(e, t) {
                            return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
                        }
                        var n, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            l = Array.prototype.slice;
                        if (e.event.fixHooks)
                            for (var c = s.length; c;) e.event.fixHooks[s[--c]] = e.event.mouseHooks;
                        var u = e.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function() {
                                if (this.addEventListener)
                                    for (var a = o.length; a;) this.addEventListener(o[--a], t, !1);
                                else this.onmousewheel = t;
                                e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
                            },
                            teardown: function() {
                                if (this.removeEventListener)
                                    for (var a = o.length; a;) this.removeEventListener(o[--a], t, !1);
                                else this.onmousewheel = null;
                                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                            },
                            getLineHeight: function(t) {
                                var a = e(t),
                                    i = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
                            },
                            getPageHeight: function(t) {
                                return e(t).height()
                            },
                            settings: {
                                adjustOldDeltas: !0,
                                normalizeOffset: !0
                            }
                        };
                        e.fn.extend({
                            mousewheel: function(e) {
                                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                            },
                            unmousewheel: function(e) {
                                return this.unbind("mousewheel", e)
                            }
                        })
                    }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, a, i) {
                        if (null == e.fn.select2) {
                            var n = ["open", "close", "destroy"];
                            e.fn.select2 = function(t) {
                                if ("object" == typeof(t = t || {})) return this.each(function() {
                                    var i = e.extend(!0, {}, t);
                                    new a(e(this), i)
                                }), this;
                                if ("string" == typeof t) {
                                    var i, r = Array.prototype.slice.call(arguments, 1);
                                    return this.each(function() {
                                        var a = e(this).data("select2");
                                        null == a && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = a[t].apply(a, r)
                                    }), e.inArray(t, n) > -1 ? this : i
                                }
                                throw new Error("Invalid arguments for Select2: " + t)
                            }
                        }
                        return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), a
                    }), {
                        define: t.define,
                        require: t.require
                    }
            }(),
            a = t.require("jquery.select2");
        return e.fn.select2.amd = t, a
    }),
    function(e, t, a, i) {
        "use strict";
        var n = a("html"),
            r = a(e),
            s = a(t),
            o = a.fancybox = function() {
                o.open.apply(this, arguments)
            },
            l = navigator.userAgent.match(/msie/i),
            c = null,
            u = t.createTouch !== i,
            d = function(e) {
                return e && e.hasOwnProperty && e instanceof a
            },
            p = function(e) {
                return e && "string" === a.type(e)
            },
            h = function(e) {
                return p(e) && e.indexOf("%") > 0
            },
            f = function(e) {
                return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
            },
            g = function(e, t) {
                var a = parseInt(e, 10) || 0;
                return t && h(e) && (a = o.getViewport()[t] / 100 * a), Math.ceil(a)
            },
            m = function(e, t) {
                return g(e, t) + "px"
            };
        a.extend(o, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !u,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: a.noop,
                beforeLoad: a.noop,
                afterLoad: a.noop,
                beforeShow: a.noop,
                afterShow: a.noop,
                beforeChange: a.noop,
                beforeClose: a.noop,
                afterClose: a.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                return e && (a.isPlainObject(t) || (t = {}), !1 !== o.close(!0)) ? (a.isArray(e) || (e = d(e) ? a(e).get() : [e]), a.each(e, function(n, r) {
                    var s, l, c, u, h, f, g, m = {};
                    "object" === a.type(r) && (r.nodeType && (r = a(r)), d(r) ? (m = {
                        href: r.data("fancybox-href") || r.attr("href"),
                        title: r.data("fancybox-title") || r.attr("title"),
                        isDom: !0,
                        element: r
                    }, a.metadata && a.extend(!0, m, r.metadata())) : m = r), s = t.href || m.href || (p(r) ? r : null), l = t.title !== i ? t.title : m.title || "", !(u = (c = t.content || m.content) ? "html" : t.type || m.type) && m.isDom && ((u = r.data("fancybox-type")) || (h = r.prop("class").match(/fancybox\.(\w+)/), u = h ? h[1] : null)), p(s) && (u || (o.isImage(s) ? u = "image" : o.isSWF(s) ? u = "swf" : "#" === s.charAt(0) ? u = "inline" : p(r) && (u = "html", c = r)), "ajax" === u && (f = s.split(/\s+/, 2), s = f.shift(), g = f.shift())), c || ("inline" === u ? s ? c = a(p(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : m.isDom && (c = r) : "html" === u ? c = s : u || s || !m.isDom || (u = "inline", c = r)), a.extend(m, {
                        href: s,
                        type: u,
                        content: c,
                        title: l,
                        selector: g
                    }), e[n] = m
                }), o.opts = a.extend(!0, {}, o.defaults, t), t.keys !== i && (o.opts.keys = !!t.keys && a.extend({}, o.defaults.keys, t.keys)), o.group = e, o._start(o.opts.index)) : void 0
            },
            cancel: function() {
                var e = o.coming;
                e && !1 !== o.trigger("onCancel") && (o.hideLoading(), o.ajaxLoad && o.ajaxLoad.abort(), o.ajaxLoad = null, o.imgPreload && (o.imgPreload.onload = o.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), o.coming = null, o.current || o._afterZoomOut(e))
            },
            close: function(e) {
                o.cancel(), !1 !== o.trigger("beforeClose") && (o.unbindEvents(), o.isActive && (o.isOpen && !0 !== e ? (o.isOpen = o.isOpened = !1, o.isClosing = !0, a(".fancybox-item, .fancybox-nav").remove(), o.wrap.stop(!0, !0).removeClass("fancybox-opened"), o.transitions[o.current.closeMethod]()) : (a(".fancybox-wrap").stop(!0).trigger("onReset").remove(), o._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(o.player.timer)
                    },
                    a = function() {
                        t(), o.current && o.player.isActive && (o.player.timer = setTimeout(o.next, o.current.playSpeed))
                    },
                    i = function() {
                        t(), s.unbind(".player"), o.player.isActive = !1, o.trigger("onPlayEnd")
                    };
                !0 === e || !o.player.isActive && !1 !== e ? o.current && (o.current.loop || o.current.index < o.group.length - 1) && (o.player.isActive = !0, s.bind({
                    "onCancel.player beforeClose.player": i,
                    "onUpdate.player": a,
                    "beforeLoad.player": t
                }), a(), o.trigger("onPlayStart")) : i()
            },
            next: function(e) {
                var t = o.current;
                t && (p(e) || (e = t.direction.next), o.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = o.current;
                t && (p(e) || (e = t.direction.prev), o.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, a) {
                var n = o.current;
                n && (e = g(e), o.direction = t || n.direction[e >= n.index ? "next" : "prev"], o.router = a || "jumpto", n.loop && (0 > e && (e = n.group.length + e % n.group.length), e %= n.group.length), n.group[e] !== i && (o.cancel(), o._start(e)))
            },
            reposition: function(e, t) {
                var i, n = o.current,
                    r = n ? n.wrap : null;
                r && (i = o._getPosition(t), e && "scroll" === e.type ? (delete i.position, r.stop(!0, !0).animate(i, 200)) : (r.css(i), n.pos = a.extend({}, n.dim, i)))
            },
            update: function(e) {
                var t = e && e.type,
                    a = !t || "orientationchange" === t;
                a && (clearTimeout(c), c = null), o.isOpen && !c && (c = setTimeout(function() {
                    var i = o.current;
                    i && !o.isClosing && (o.wrap.removeClass("fancybox-tmp"), (a || "load" === t || "resize" === t && i.autoResize) && o._setDimension(), "scroll" === t && i.canShrink || o.reposition(e), o.trigger("onUpdate"), c = null)
                }, a && !u ? 0 : 300))
            },
            toggle: function(e) {
                o.isOpen && (o.current.fitToView = "boolean" === a.type(e) ? e : !o.current.fitToView, u && (o.wrap.removeAttr("style").addClass("fancybox-tmp"), o.trigger("onUpdate")), o.update())
            },
            hideLoading: function() {
                s.unbind(".loading"), a("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                o.hideLoading(), e = a('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"), s.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), o.cancel())
                }), o.defaults.fixed || (t = o.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = o.current && o.current.locked || !1,
                    a = {
                        x: r.scrollLeft(),
                        y: r.scrollTop()
                    };
                return t ? (a.w = t[0].clientWidth, a.h = t[0].clientHeight) : (a.w = u && e.innerWidth ? e.innerWidth : r.width(), a.h = u && e.innerHeight ? e.innerHeight : r.height()), a
            },
            unbindEvents: function() {
                o.wrap && d(o.wrap) && o.wrap.unbind(".fb"), s.unbind(".fb"), r.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = o.current;
                t && (r.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), o.update), (e = t.keys) && s.bind("keydown.fb", function(n) {
                    var r = n.which || n.keyCode,
                        s = n.target || n.srcElement;
                    return (27 !== r || !o.coming) && void(n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || s && (s.type || a(s).is("[contenteditable]")) || a.each(e, function(e, s) {
                        return t.group.length > 1 && s[r] !== i ? (o[e](s[r]), n.preventDefault(), !1) : a.inArray(r, s) > -1 ? (o[e](), n.preventDefault(), !1) : void 0
                    }))
                }), a.fn.mousewheel && t.mouseWheel && o.wrap.bind("mousewheel.fb", function(e, i, n, r) {
                    for (var s = e.target || null, l = a(s), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = f(l[0]), l = a(l).parent();
                    0 === i || c || o.group.length > 1 && !t.canShrink && (r > 0 || n > 0 ? o.prev(r > 0 ? "down" : "left") : (0 > r || 0 > n) && o.next(0 > r ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var i, n = t || o.coming || o.current;
                if (n) {
                    if (a.isFunction(n[e]) && (i = n[e].apply(n, Array.prototype.slice.call(arguments, 1))), !1 === i) return !1;
                    n.helpers && a.each(n.helpers, function(t, i) {
                        i && o.helpers[t] && a.isFunction(o.helpers[t][e]) && o.helpers[t][e](a.extend(!0, {}, o.helpers[t].defaults, i), n)
                    }), s.trigger(e)
                }
            },
            isImage: function(e) {
                return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, i, n, r, s, l = {};
                if (e = g(e), !(t = o.group[e] || null)) return !1;
                if (l = a.extend(!0, {}, o.opts, t), r = l.margin, s = l.padding, "number" === a.type(r) && (l.margin = [r, r, r, r]), "number" === a.type(s) && (l.padding = [s, s, s, s]), l.modal && a.extend(!0, l, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = o.group, l.index = e, o.coming = l, !1 !== o.trigger("beforeLoad")) {
                    if (n = l.type, i = l.href, !n) return o.coming = null, !(!o.current || !o.router || "jumpto" === o.router) && (o.current.index = e, o[o.router](o.direction));
                    if (o.isActive = !0, ("image" === n || "swf" === n) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === n && (l.aspectRatio = !0), "iframe" === n && u && (l.scrolling = "scroll"), l.wrap = a(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), a.extend(l, {
                            skin: a(".fancybox-skin", l.wrap),
                            outer: a(".fancybox-outer", l.wrap),
                            inner: a(".fancybox-inner", l.wrap)
                        }), a.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                            l.skin.css("padding" + t, m(l.padding[e]))
                        }), o.trigger("onReady"), "inline" === n || "html" === n) {
                        if (!l.content || !l.content.length) return o._error("content")
                    } else if (!i) return o._error("href");
                    "image" === n ? o._loadImage() : "ajax" === n ? o._loadAjax() : "iframe" === n ? o._loadIframe() : o._afterLoad()
                } else o.coming = null
            },
            _error: function(e) {
                a.extend(o.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: o.coming.tpl.error
                }), o._afterLoad()
            },
            _loadImage: function() {
                var e = o.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, o.coming.width = this.width / o.opts.pixelRatio, o.coming.height = this.height / o.opts.pixelRatio, o._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, o._error("image")
                }, e.src = o.coming.href, !0 !== e.complete && o.showLoading()
            },
            _loadAjax: function() {
                var e = o.coming;
                o.showLoading(), o.ajaxLoad = a.ajax(a.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        o.coming && "abort" !== t ? o._error("ajax", e) : o.hideLoading()
                    },
                    success: function(t, a) {
                        "success" === a && (e.content = t, o._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = o.coming,
                    t = a(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : e.iframe.scrolling).attr("src", e.href);
                a(e.wrap).bind("onReset", function() {
                    try {
                        a(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (o.showLoading(), t.one("load", function() {
                    a(this).data("ready", 1), u || a(this).bind("load.fb", o.update), a(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), o._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || o._afterLoad()
            },
            _preloadImages: function() {
                var e, t, a = o.group,
                    i = o.current,
                    n = a.length,
                    r = i.preload ? Math.min(i.preload, n - 1) : 0;
                for (t = 1; r >= t; t += 1) "image" === (e = a[(i.index + t) % n]).type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, i, n, r, s, l = o.coming,
                    c = o.current,
                    u = "fancybox-placeholder";
                if (o.hideLoading(), l && !1 !== o.isActive) {
                    if (!1 === o.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void(o.coming = null);
                    switch (c && (o.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), o.unbindEvents(), e = l, t = l.content, i = l.type, n = l.scrolling, a.extend(o, {
                        wrap: e.wrap,
                        skin: e.skin,
                        outer: e.outer,
                        inner: e.inner,
                        current: e,
                        previous: c
                    }), r = e.href, i) {
                        case "inline":
                        case "ajax":
                        case "html":
                            e.selector ? t = a("<div>").html(t).find(e.selector) : d(t) && (t.data(u) || t.data(u, a('<div class="' + u + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                                a(this).find(t).length && t.hide().replaceAll(t.data(u)).data(u, !1)
                            }));
                            break;
                        case "image":
                            t = e.tpl.image.replace("{href}", r);
                            break;
                        case "swf":
                            t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', s = "", a.each(e.swf, function(e, a) {
                                t += '<param name="' + e + '" value="' + a + '"></param>', s += " " + e + '="' + a + '"'
                            }), t += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
                    }
                    d(t) && t.parent().is(e.inner) || e.inner.append(t), o.trigger("beforeShow"), e.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n), o._setDimension(), o.reposition(), o.isOpen = !1, o.coming = null, o.bindEvents(), o.isOpened ? c.prevMethod && o.transitions[c.prevMethod]() : a(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), o.transitions[o.isOpened ? e.nextMethod : e.openMethod](), o._preloadImages()
                }
            },
            _setDimension: function() {
                var e, t, i, n, r, s, l, c, u, d, p, f, v, y, _, w = o.getViewport(),
                    b = 0,
                    S = !1,
                    x = !1,
                    k = o.wrap,
                    C = o.skin,
                    D = o.inner,
                    T = o.current,
                    M = T.width,
                    F = T.height,
                    $ = T.minWidth,
                    P = T.minHeight,
                    I = T.maxWidth,
                    O = T.maxHeight,
                    E = T.scrolling,
                    A = T.scrollOutside ? T.scrollbarWidth : 0,
                    L = T.margin,
                    z = g(L[1] + L[3]),
                    j = g(L[0] + L[2]);
                if (k.add(C).add(D).width("auto").height("auto").removeClass("fancybox-tmp"), e = g(C.outerWidth(!0) - C.width()), t = g(C.outerHeight(!0) - C.height()), i = z + e, n = j + t, r = h(M) ? (w.w - i) * g(M) / 100 : M, s = h(F) ? (w.h - n) * g(F) / 100 : F, "iframe" === T.type) {
                    if (y = T.content, T.autoHeight && 1 === y.data("ready")) try {
                        y[0].contentWindow.document.location && (D.width(r).height(9999), _ = y.contents().find("body"), A && _.css("overflow-x", "hidden"), s = _.outerHeight(!0))
                    } catch (e) {}
                } else(T.autoWidth || T.autoHeight) && (D.addClass("fancybox-tmp"), T.autoWidth || D.width(r), T.autoHeight || D.height(s), T.autoWidth && (r = D.width()), T.autoHeight && (s = D.height()), D.removeClass("fancybox-tmp"));
                if (M = g(r), F = g(s), u = r / s, $ = g(h($) ? g($, "w") - i : $), I = g(h(I) ? g(I, "w") - i : I), P = g(h(P) ? g(P, "h") - n : P), O = g(h(O) ? g(O, "h") - n : O), l = I, c = O, T.fitToView && (I = Math.min(w.w - i, I), O = Math.min(w.h - n, O)), f = w.w - z, v = w.h - j, T.aspectRatio ? (M > I && (M = I, F = g(M / u)), F > O && (F = O, M = g(F * u)), $ > M && (M = $, F = g(M / u)), P > F && (F = P, M = g(F * u))) : (M = Math.max($, Math.min(M, I)), T.autoHeight && "iframe" !== T.type && (D.width(M), F = D.height()), F = Math.max(P, Math.min(F, O))), T.fitToView)
                    if (D.width(M).height(F), k.width(M + e), d = k.width(), p = k.height(), T.aspectRatio)
                        for (;
                            (d > f || p > v) && M > $ && F > P && !(b++ > 19);) F = Math.max(P, Math.min(O, F - 10)), M = g(F * u), $ > M && (M = $, F = g(M / u)), M > I && (M = I, F = g(M / u)), D.width(M).height(F), k.width(M + e), d = k.width(), p = k.height();
                    else M = Math.max($, Math.min(M, M - (d - f))), F = Math.max(P, Math.min(F, F - (p - v)));
                A && "auto" === E && s > F && f > M + e + A && (M += A), D.width(M).height(F), k.width(M + e), d = k.width(), p = k.height(), S = (d > f || p > v) && M > $ && F > P, x = T.aspectRatio ? l > M && c > F && r > M && s > F : (l > M || c > F) && (r > M || s > F), a.extend(T, {
                    dim: {
                        width: m(d),
                        height: m(p)
                    },
                    origWidth: r,
                    origHeight: s,
                    canShrink: S,
                    canExpand: x,
                    wPadding: e,
                    hPadding: t,
                    wrapSpace: p - C.outerHeight(!0),
                    skinSpace: C.height() - F
                }), !y && T.autoHeight && F > P && O > F && !x && D.height("auto")
            },
            _getPosition: function(e) {
                var t = o.current,
                    a = o.getViewport(),
                    i = t.margin,
                    n = o.wrap.width() + i[1] + i[3],
                    r = o.wrap.height() + i[0] + i[2],
                    s = {
                        position: "absolute",
                        top: i[0],
                        left: i[3]
                    };
                return t.autoCenter && t.fixed && !e && r <= a.h && n <= a.w ? s.position = "fixed" : t.locked || (s.top += a.y, s.left += a.x), s.top = m(Math.max(s.top, s.top + (a.h - r) * t.topRatio)), s.left = m(Math.max(s.left, s.left + (a.w - n) * t.leftRatio)), s
            },
            _afterZoomIn: function() {
                var e = o.current;
                e && (o.isOpen = o.isOpened = !0, o.wrap.css("overflow", "visible").addClass("fancybox-opened"), o.update(), (e.closeClick || e.nextClick && o.group.length > 1) && o.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    a(t.target).is("a") || a(t.target).parent().is("a") || (t.preventDefault(), o[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && a(e.tpl.closeBtn).appendTo(o.skin).bind("click.fb", function(e) {
                    e.preventDefault(), o.close()
                }), e.arrows && o.group.length > 1 && ((e.loop || e.index > 0) && a(e.tpl.prev).appendTo(o.outer).bind("click.fb", o.prev), (e.loop || e.index < o.group.length - 1) && a(e.tpl.next).appendTo(o.outer).bind("click.fb", o.next)), o.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? o.opts.autoPlay && !o.player.isActive && (o.opts.autoPlay = !1, o.play()) : o.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || o.current, a(".fancybox-wrap").trigger("onReset").remove(), a.extend(o, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), o.trigger("afterClose", e)
            }
        }), o.transitions = {
            getOrigPosition: function() {
                var e = o.current,
                    t = e.element,
                    a = e.orig,
                    i = {},
                    n = 50,
                    r = 50,
                    s = e.hPadding,
                    l = e.wPadding,
                    c = o.getViewport();
                return !a && e.isDom && t.is(":visible") && ((a = t.find("img:first")).length || (a = t)), d(a) ? (i = a.offset(), a.is("img") && (n = a.outerWidth(), r = a.outerHeight())) : (i.top = c.y + (c.h - r) * e.topRatio, i.left = c.x + (c.w - n) * e.leftRatio), ("fixed" === o.wrap.css("position") || e.locked) && (i.top -= c.y, i.left -= c.x), i = {
                    top: m(i.top - s * e.topRatio),
                    left: m(i.left - l * e.leftRatio),
                    width: m(n + l),
                    height: m(r + s)
                }
            },
            step: function(e, t) {
                var a, i, n, r = t.prop,
                    s = o.current,
                    l = s.wrapSpace,
                    c = s.skinSpace;
                ("width" === r || "height" === r) && (a = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), o.isClosing && (a = 1 - a), i = "width" === r ? s.wPadding : s.hPadding, n = e - i, o.skin[r](g("width" === r ? n : n - l * a)), o.inner[r](g("width" === r ? n : n - l * a - c * a)))
            },
            zoomIn: function() {
                var e = o.current,
                    t = e.pos,
                    i = e.openEffect,
                    n = "elastic" === i,
                    r = a.extend({
                        opacity: 1
                    }, t);
                delete r.position, n ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), o.wrap.css(t).animate(r, {
                    duration: "none" === i ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: n ? this.step : null,
                    complete: o._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = o.current,
                    t = e.closeEffect,
                    a = "elastic" === t,
                    i = {
                        opacity: .1
                    };
                a && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), o.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: a ? this.step : null,
                    complete: o._afterZoomOut
                })
            },
            changeIn: function() {
                var e, t = o.current,
                    a = t.nextEffect,
                    i = t.pos,
                    n = {
                        opacity: 1
                    },
                    r = o.direction,
                    s = 200;
                i.opacity = .1, "elastic" === a && (e = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (i[e] = m(g(i[e]) - s), n[e] = "+=200px") : (i[e] = m(g(i[e]) + s), n[e] = "-=200px")), "none" === a ? o._afterZoomIn() : o.wrap.css(i).animate(n, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: o._afterZoomIn
                })
            },
            changeOut: function() {
                var e = o.previous,
                    t = e.prevEffect,
                    i = {
                        opacity: .1
                    },
                    n = o.direction;
                "elastic" === t && (i["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"), e.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        a(this).trigger("onReset").remove()
                    }
                })
            }
        }, o.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !u,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: a("html"),
            create: function(e) {
                e = a.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = a('<div class="fancybox-overlay"></div>').appendTo(o.coming ? o.coming.parent : e.parent), this.fixed = !1, e.fixed && o.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = a.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (r.bind("resize.overlay", a.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    return a(e.target).hasClass("fancybox-overlay") ? (o.isActive ? o.close() : t.close(), !1) : void 0
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                var e, t;
                r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (a(".fancybox-margin").removeClass("fancybox-margin"), e = r.scrollTop(), t = r.scrollLeft(), this.el.removeClass("fancybox-lock"), r.scrollTop(e).scrollLeft(t)), a(".fancybox-overlay").remove().hide(), a.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var e, a = "100%";
                this.overlay.width(a).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), s.width() > e && (a = s.width())) : s.width() > r.width() && (a = s.width()), this.overlay.width(a).height(s.height())
            },
            onReady: function(e, t) {
                var i = this.overlay;
                a(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = s.height() > r.height() && a("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                var i, n;
                t.locked && (!1 !== this.margin && (a("*").filter(function() {
                    return "fixed" === a(this).css("position") && !a(this).hasClass("fancybox-overlay") && !a(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = r.scrollTop(), n = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(i).scrollLeft(n)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !o.coming && this.overlay.fadeOut(e.speedOut, a.proxy(this.close, this))
            }
        }, o.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t, i, n = o.current,
                    r = n.title,
                    s = e.type;
                if (a.isFunction(r) && (r = r.call(n.element, n)), p(r) && "" !== a.trim(r)) {
                    switch (t = a('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + r + "</div>"), s) {
                        case "inside":
                            i = o.skin;
                            break;
                        case "outside":
                            i = o.wrap;
                            break;
                        case "over":
                            i = o.inner;
                            break;
                        default:
                            i = o.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), o.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](i)
                }
            }
        }, a.fn.fancybox = function(e) {
            var t, i = a(this),
                n = this.selector || "",
                r = function(r) {
                    var s, l, c = a(this).blur(),
                        u = t;
                    r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || c.is(".fancybox-wrap") || (s = e.groupAttr || "data-fancybox-group", (l = c.attr(s)) || (s = "rel", l = c.get(0)[s]), l && "" !== l && "nofollow" !== l && (c = n.length ? a(n) : i, c = c.filter("[" + s + '="' + l + '"]'), u = c.index(this)), e.index = u, !1 !== o.open(c, e) && r.preventDefault())
                };
            return e = e || {}, t = e.index || 0, n && !1 !== e.live ? s.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : i.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, s.ready(function() {
            var t, r;
            a.scrollbarWidth === i && (a.scrollbarWidth = function() {
                var e = a('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    i = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), i
            }), a.support.fixedPosition === i && (a.support.fixedPosition = function() {
                var e = a('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                return e.remove(), t
            }()), a.extend(o.defaults, {
                scrollbarWidth: a.scrollbarWidth(),
                fixed: a.support.fixedPosition,
                parent: a("body")
            }), t = a(e).width(), n.addClass("fancybox-lock-test"), r = a(e).width(), n.removeClass("fancybox-lock-test"), a("<style type='text/css'>.fancybox-margin{margin-right:" + (r - t) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return pt.apply(null, arguments)
        }

        function t(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function a(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function i(e, t) {
            var a, i = [];
            for (a = 0; a < e.length; ++a) i.push(t(e[a], a));
            return i
        }

        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function r(e, t) {
            for (var a in t) n(t, a) && (e[a] = t[a]);
            return n(t, "toString") && (e.toString = t.toString), n(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function s(e, t, a, i) {
            return ke(e, t, a, i, !0).utc()
        }

        function o() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null
            }
        }

        function l(e) {
            return null == e._pf && (e._pf = o()), e._pf
        }

        function c(e) {
            if (null == e._isValid) {
                var t = l(e),
                    a = ht.call(t.parsedDateParts, function(e) {
                        return null != e
                    });
                e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
            }
            return e._isValid
        }

        function u(e) {
            var t = s(NaN);
            return null != e ? r(l(t), e) : l(t).userInvalidated = !0, t
        }

        function d(e) {
            return void 0 === e
        }

        function p(e, t) {
            var a, i, n;
            if (d(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), d(t._i) || (e._i = t._i), d(t._f) || (e._f = t._f), d(t._l) || (e._l = t._l), d(t._strict) || (e._strict = t._strict), d(t._tzm) || (e._tzm = t._tzm), d(t._isUTC) || (e._isUTC = t._isUTC), d(t._offset) || (e._offset = t._offset), d(t._pf) || (e._pf = l(t)), d(t._locale) || (e._locale = t._locale), ft.length > 0)
                for (a in ft) i = ft[a], n = t[i], d(n) || (e[i] = n);
            return e
        }

        function h(t) {
            p(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), !1 === gt && (gt = !0, e.updateOffset(this), gt = !1)
        }

        function f(e) {
            return e instanceof h || null != e && null != e._isAMomentObject
        }

        function g(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function m(e) {
            var t = +e,
                a = 0;
            return 0 !== t && isFinite(t) && (a = g(t)), a
        }

        function v(e, t, a) {
            var i, n = Math.min(e.length, t.length),
                r = Math.abs(e.length - t.length),
                s = 0;
            for (i = 0; n > i; i++)(a && e[i] !== t[i] || !a && m(e[i]) !== m(t[i])) && s++;
            return s + r
        }

        function y(t) {
            !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function _(t, a) {
            var i = !0;
            return r(function() {
                return null != e.deprecationHandler && e.deprecationHandler(null, t), i && (y(t + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), a.apply(this, arguments)
            }, a)
        }

        function w(t, a) {
            null != e.deprecationHandler && e.deprecationHandler(t, a), mt[t] || (y(a), mt[t] = !0)
        }

        function b(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function S(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function x(e, t) {
            var a, i = r({}, e);
            for (a in t) n(t, a) && (S(e[a]) && S(t[a]) ? (i[a] = {}, r(i[a], e[a]), r(i[a], t[a])) : null != t[a] ? i[a] = t[a] : delete i[a]);
            return i
        }

        function k(e) {
            null != e && this.set(e)
        }

        function C(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function D(e) {
            for (var t, a, i, n, r = 0; r < e.length;) {
                for (t = (n = C(e[r]).split("-")).length, a = (a = C(e[r + 1])) ? a.split("-") : null; t > 0;) {
                    if (i = T(n.slice(0, t).join("-"))) return i;
                    if (a && a.length >= t && v(n, a, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return null
        }

        function T(e) {
            var t = null;
            if (!wt[e] && "undefined" != typeof module && module && module.exports) try {
                t = yt._abbr, require("./locale/" + e), M(t)
            } catch (e) {}
            return wt[e]
        }

        function M(e, t) {
            var a;
            return e && (a = d(t) ? $(e) : F(e, t)) && (yt = a), yt._abbr
        }

        function F(e, t) {
            return null !== t ? (t.abbr = e, null != wt[e] ? (w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), t = x(wt[e]._config, t)) : null != t.parentLocale && (null != wt[t.parentLocale] ? t = x(wt[t.parentLocale]._config, t) : w("parentLocaleUndefined", "specified parentLocale is not defined yet")), wt[e] = new k(t), M(e), wt[e]) : (delete wt[e], null)
        }

        function $(e) {
            var a;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return yt;
            if (!t(e)) {
                if (a = T(e)) return a;
                e = [e]
            }
            return D(e)
        }

        function P(e, t) {
            var a = e.toLowerCase();
            bt[a] = bt[a + "s"] = bt[t] = e
        }

        function I(e) {
            return "string" == typeof e ? bt[e] || bt[e.toLowerCase()] : void 0
        }

        function O(e) {
            var t, a, i = {};
            for (a in e) n(e, a) && (t = I(a)) && (i[t] = e[a]);
            return i
        }

        function E(t, a) {
            return function(i) {
                return null != i ? (L(this, t, i), e.updateOffset(this, a), this) : A(this, t)
            }
        }

        function A(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function L(e, t, a) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](a)
        }

        function z(e, t) {
            var a;
            if ("object" == typeof e)
                for (a in e) this.set(a, e[a]);
            else if (e = I(e), b(this[e])) return this[e](t);
            return this
        }

        function j(e, t, a) {
            var i = "" + Math.abs(e),
                n = t - i.length;
            return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + i
        }

        function R(e, t, a, i) {
            var n = i;
            "string" == typeof i && (n = function() {
                return this[i]()
            }), e && (Ct[e] = n), t && (Ct[t[0]] = function() {
                return j(n.apply(this, arguments), t[1], t[2])
            }), a && (Ct[a] = function() {
                return this.localeData().ordinal(n.apply(this, arguments), e)
            })
        }

        function N(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function H(e) {
            var t, a, i = e.match(St);
            for (t = 0, a = i.length; a > t; t++) Ct[i[t]] ? i[t] = Ct[i[t]] : i[t] = N(i[t]);
            return function(t) {
                var n, r = "";
                for (n = 0; a > n; n++) r += i[n] instanceof Function ? i[n].call(t, e) : i[n];
                return r
            }
        }

        function Y(e, t) {
            return e.isValid() ? (t = B(t, e.localeData()), kt[t] = kt[t] || H(t), kt[t](e)) : e.localeData().invalidDate()
        }

        function B(e, t) {
            var a = 5;
            for (xt.lastIndex = 0; a >= 0 && xt.test(e);) e = e.replace(xt, function(e) {
                return t.longDateFormat(e) || e
            }), xt.lastIndex = 0, a -= 1;
            return e
        }

        function W(e, t, a) {
            Bt[e] = b(t) ? t : function(e, i) {
                return e && a ? a : t
            }
        }

        function U(e, t) {
            return n(Bt, e) ? Bt[e](t._strict, t._locale) : new RegExp(V(e))
        }

        function V(e) {
            return q(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, i, n) {
                return t || a || i || n
            }))
        }

        function q(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function G(e, t) {
            var a, i = t;
            for ("string" == typeof e && (e = [e]), "number" == typeof t && (i = function(e, a) {
                    a[t] = m(e)
                }), a = 0; a < e.length; a++) Wt[e[a]] = i
        }

        function X(e, t) {
            G(e, function(e, a, i, n) {
                i._w = i._w || {}, t(e, i._w, i, n)
            })
        }

        function K(e, t, a) {
            null != t && n(Wt, e) && Wt[e](t, a._a, a, e)
        }

        function J(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function Z(e, t, a) {
            var i, n, r, o = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i) r = s([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
            return a ? "MMM" === t ? -1 !== (n = _t.call(this._shortMonthsParse, o)) ? n : null : -1 !== (n = _t.call(this._longMonthsParse, o)) ? n : null : "MMM" === t ? -1 !== (n = _t.call(this._shortMonthsParse, o)) ? n : -1 !== (n = _t.call(this._longMonthsParse, o)) ? n : null : -1 !== (n = _t.call(this._longMonthsParse, o)) ? n : -1 !== (n = _t.call(this._shortMonthsParse, o)) ? n : null
        }

        function Q(e, t) {
            var a;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = m(t);
                else if ("number" != typeof(t = e.localeData().monthsParse(t))) return e;
            return a = Math.min(e.date(), J(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
        }

        function ee(t) {
            return null != t ? (Q(this, t), e.updateOffset(this, !0), this) : A(this, "Month")
        }

        function te() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, a, i = [],
                n = [],
                r = [];
            for (t = 0; 12 > t; t++) a = s([2e3, t]), i.push(this.monthsShort(a, "")), n.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
            for (i.sort(e), n.sort(e), r.sort(e), t = 0; 12 > t; t++) i[t] = q(i[t]), n[t] = q(n[t]), r[t] = q(r[t]);
            this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function ae(e) {
            var t, a = e._a;
            return a && -2 === l(e).overflow && (t = a[Vt] < 0 || a[Vt] > 11 ? Vt : a[qt] < 1 || a[qt] > J(a[Ut], a[Vt]) ? qt : a[Gt] < 0 || a[Gt] > 24 || 24 === a[Gt] && (0 !== a[Xt] || 0 !== a[Kt] || 0 !== a[Jt]) ? Gt : a[Xt] < 0 || a[Xt] > 59 ? Xt : a[Kt] < 0 || a[Kt] > 59 ? Kt : a[Jt] < 0 || a[Jt] > 999 ? Jt : -1, l(e)._overflowDayOfYear && (Ut > t || t > qt) && (t = qt), l(e)._overflowWeeks && -1 === t && (t = Zt), l(e)._overflowWeekday && -1 === t && (t = Qt), l(e).overflow = t), e
        }

        function ie(e) {
            var t, a, i, n, r, s, o = e._i,
                c = ra.exec(o) || sa.exec(o);
            if (c) {
                for (l(e).iso = !0, t = 0, a = la.length; a > t; t++)
                    if (la[t][1].exec(c[1])) {
                        n = la[t][0], i = !1 !== la[t][2];
                        break
                    } if (null == n) return void(e._isValid = !1);
                if (c[3]) {
                    for (t = 0, a = ca.length; a > t; t++)
                        if (ca[t][1].exec(c[3])) {
                            r = (c[2] || " ") + ca[t][0];
                            break
                        } if (null == r) return void(e._isValid = !1)
                }
                if (!i && null != r) return void(e._isValid = !1);
                if (c[4]) {
                    if (!oa.exec(c[4])) return void(e._isValid = !1);
                    s = "Z"
                }
                e._f = n + (r || "") + (s || ""), ve(e)
            } else e._isValid = !1
        }

        function ne(t) {
            var a = ua.exec(t._i);
            return null !== a ? void(t._d = new Date(+a[1])) : (ie(t), void(!1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t))))
        }

        function re(e, t, a, i, n, r, s) {
            var o = new Date(e, t, a, i, n, r, s);
            return 100 > e && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
        }

        function se(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function oe(e) {
            return le(e) ? 366 : 365
        }

        function le(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function ce(e, t, a) {
            var i = 7 + t - a;
            return -((7 + se(e, 0, i).getUTCDay() - t) % 7) + i - 1
        }

        function ue(e, t, a, i, n) {
            var r, s, o = 1 + 7 * (t - 1) + (7 + a - i) % 7 + ce(e, i, n);
            return 0 >= o ? (r = e - 1, s = oe(r) + o) : o > oe(e) ? (r = e + 1, s = o - oe(e)) : (r = e, s = o), {
                year: r,
                dayOfYear: s
            }
        }

        function de(e, t, a) {
            var i, n, r = ce(e.year(), t, a),
                s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
            return 1 > s ? (n = e.year() - 1, i = s + pe(n, t, a)) : s > pe(e.year(), t, a) ? (i = s - pe(e.year(), t, a), n = e.year() + 1) : (n = e.year(), i = s), {
                week: i,
                year: n
            }
        }

        function pe(e, t, a) {
            var i = ce(e, t, a),
                n = ce(e + 1, t, a);
            return (oe(e) - i + n) / 7
        }

        function he(e, t, a) {
            return null != e ? e : null != t ? t : a
        }

        function fe(t) {
            var a = new Date(e.now());
            return t._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
        }

        function ge(e) {
            var t, a, i, n, r = [];
            if (!e._d) {
                for (i = fe(e), e._w && null == e._a[qt] && null == e._a[Vt] && me(e), e._dayOfYear && (n = he(e._a[Ut], i[Ut]), e._dayOfYear > oe(n) && (l(e)._overflowDayOfYear = !0), a = se(n, 0, e._dayOfYear), e._a[Vt] = a.getUTCMonth(), e._a[qt] = a.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = r[t] = i[t];
                for (; 7 > t; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[Gt] && 0 === e._a[Xt] && 0 === e._a[Kt] && 0 === e._a[Jt] && (e._nextDay = !0, e._a[Gt] = 0), e._d = (e._useUTC ? se : re).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Gt] = 24)
            }
        }

        function me(e) {
            var t, a, i, n, r, s, o, c;
            null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, s = 4, a = he(t.GG, e._a[Ut], de(Ce(), 1, 4).year), i = he(t.W, 1), (1 > (n = he(t.E, 1)) || n > 7) && (c = !0)) : (r = e._locale._week.dow, s = e._locale._week.doy, a = he(t.gg, e._a[Ut], de(Ce(), r, s).year), i = he(t.w, 1), null != t.d ? (0 > (n = t.d) || n > 6) && (c = !0) : null != t.e ? (n = t.e + r, (t.e < 0 || t.e > 6) && (c = !0)) : n = r), 1 > i || i > pe(a, r, s) ? l(e)._overflowWeeks = !0 : null != c ? l(e)._overflowWeekday = !0 : (o = ue(a, i, n, r, s), e._a[Ut] = o.year, e._dayOfYear = o.dayOfYear)
        }

        function ve(t) {
            if (t._f !== e.ISO_8601) {
                t._a = [], l(t).empty = !0;
                var a, i, n, r, s, o = "" + t._i,
                    c = o.length,
                    u = 0;
                for (n = B(t._f, t._locale).match(St) || [], a = 0; a < n.length; a++) r = n[a], (i = (o.match(U(r, t)) || [])[0]) && ((s = o.substr(0, o.indexOf(i))).length > 0 && l(t).unusedInput.push(s), o = o.slice(o.indexOf(i) + i.length), u += i.length), Ct[r] ? (i ? l(t).empty = !1 : l(t).unusedTokens.push(r), K(r, i, t)) : t._strict && !i && l(t).unusedTokens.push(r);
                l(t).charsLeftOver = c - u, o.length > 0 && l(t).unusedInput.push(o), !0 === l(t).bigHour && t._a[Gt] <= 12 && t._a[Gt] > 0 && (l(t).bigHour = void 0), l(t).parsedDateParts = t._a.slice(0), l(t).meridiem = t._meridiem, t._a[Gt] = ye(t._locale, t._a[Gt], t._meridiem), ge(t), ae(t)
            } else ie(t)
        }

        function ye(e, t, a) {
            var i;
            return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((i = e.isPM(a)) && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
        }

        function _e(e) {
            var t, a, i, n, s;
            if (0 === e._f.length) return l(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (n = 0; n < e._f.length; n++) s = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[n], ve(t), c(t) && (s += l(t).charsLeftOver, s += 10 * l(t).unusedTokens.length, l(t).score = s, (null == i || i > s) && (i = s, a = t));
            r(e, a || t)
        }

        function we(e) {
            if (!e._d) {
                var t = O(e._i);
                e._a = i([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), ge(e)
            }
        }

        function be(e) {
            var t = new h(ae(Se(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function Se(e) {
            var i = e._i,
                n = e._f;
            return e._locale = e._locale || $(e._l), null === i || void 0 === n && "" === i ? u({
                nullInput: !0
            }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)), f(i) ? new h(ae(i)) : (t(n) ? _e(e) : n ? ve(e) : a(i) ? e._d = i : xe(e), c(e) || (e._d = null), e))
        }

        function xe(n) {
            var r = n._i;
            void 0 === r ? n._d = new Date(e.now()) : a(r) ? n._d = new Date(r.valueOf()) : "string" == typeof r ? ne(n) : t(r) ? (n._a = i(r.slice(0), function(e) {
                return parseInt(e, 10)
            }), ge(n)) : "object" == typeof r ? we(n) : "number" == typeof r ? n._d = new Date(r) : e.createFromInputFallback(n)
        }

        function ke(e, t, a, i, n) {
            var r = {};
            return "boolean" == typeof a && (i = a, a = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = n, r._l = a, r._i = e, r._f = t, r._strict = i, be(r)
        }

        function Ce(e, t, a, i) {
            return ke(e, t, a, i, !1)
        }

        function De(e, a) {
            var i, n;
            if (1 === a.length && t(a[0]) && (a = a[0]), !a.length) return Ce();
            for (i = a[0], n = 1; n < a.length; ++n)(!a[n].isValid() || a[n][e](i)) && (i = a[n]);
            return i
        }

        function Te(e) {
            var t = O(e),
                a = t.year || 0,
                i = t.quarter || 0,
                n = t.month || 0,
                r = t.week || 0,
                s = t.day || 0,
                o = t.hour || 0,
                l = t.minute || 0,
                c = t.second || 0,
                u = t.millisecond || 0;
            this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * o * 60 * 60, this._days = +s + 7 * r, this._months = +n + 3 * i + 12 * a, this._data = {}, this._locale = $(), this._bubble()
        }

        function Me(e) {
            return e instanceof Te
        }

        function Fe(e, t) {
            R(e, 0, 0, function() {
                var e = this.utcOffset(),
                    a = "+";
                return 0 > e && (e = -e, a = "-"), a + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
            })
        }

        function $e(e, t) {
            var a = (t || "").match(e) || [],
                i = ((a[a.length - 1] || []) + "").match(fa) || ["-", 0, 0],
                n = 60 * i[1] + m(i[2]);
            return "+" === i[0] ? n : -n
        }

        function Pe(t, i) {
            var n, r;
            return i._isUTC ? (n = i.clone(), r = (f(t) || a(t) ? t.valueOf() : Ce(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), e.updateOffset(n, !1), n) : Ce(t).local()
        }

        function Ie(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Oe() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function Ee(e, t) {
            var a, i, r, s = e,
                o = null;
            return Me(e) ? s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (o = ga.exec(e)) ? (a = "-" === o[1] ? -1 : 1, s = {
                y: 0,
                d: m(o[qt]) * a,
                h: m(o[Gt]) * a,
                m: m(o[Xt]) * a,
                s: m(o[Kt]) * a,
                ms: m(o[Jt]) * a
            }) : (o = ma.exec(e)) ? (a = "-" === o[1] ? -1 : 1, s = {
                y: Ae(o[2], a),
                M: Ae(o[3], a),
                w: Ae(o[4], a),
                d: Ae(o[5], a),
                h: Ae(o[6], a),
                m: Ae(o[7], a),
                s: Ae(o[8], a)
            }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = ze(Ce(s.from), Ce(s.to)), s = {}, s.ms = r.milliseconds, s.M = r.months), i = new Te(s), Me(e) && n(e, "_locale") && (i._locale = e._locale), i
        }

        function Ae(e, t) {
            var a = e && parseFloat(e.replace(",", "."));
            return (isNaN(a) ? 0 : a) * t
        }

        function Le(e, t) {
            var a = {
                milliseconds: 0,
                months: 0
            };
            return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
        }

        function ze(e, t) {
            var a;
            return e.isValid() && t.isValid() ? (t = Pe(t, e), e.isBefore(t) ? a = Le(e, t) : (a = Le(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : {
                milliseconds: 0,
                months: 0
            }
        }

        function je(e) {
            return 0 > e ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Re(e, t) {
            return function(a, i) {
                var n, r;
                return null === i || isNaN(+i) || (w(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), r = a, a = i, i = r), a = "string" == typeof a ? +a : a, n = Ee(a, i), Ne(this, n, e), this
            }
        }

        function Ne(t, a, i, n) {
            var r = a._milliseconds,
                s = je(a._days),
                o = je(a._months);
            t.isValid() && (n = null == n || n, r && t._d.setTime(t._d.valueOf() + r * i), s && L(t, "Date", A(t, "Date") + s * i), o && Q(t, A(t, "Month") + o * i), n && e.updateOffset(t, s || o))
        }

        function He(e, t) {
            var a, i, n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                r = e.clone().add(n, "months");
            return 0 > t - r ? (a = e.clone().add(n - 1, "months"), i = (t - r) / (r - a)) : (a = e.clone().add(n + 1, "months"), i = (t - r) / (a - r)), -(n + i) || 0
        }

        function Ye(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (null != (t = $(e)) && (this._locale = t), this)
        }

        function Be() {
            return this._locale
        }

        function We(e, t) {
            R(0, [e, e.length], 0, t)
        }

        function Ue(e, t, a, i, n) {
            var r;
            return null == e ? de(this, i, n).year : (r = pe(e, i, n), t > r && (t = r), Ve.call(this, e, t, a, i, n))
        }

        function Ve(e, t, a, i, n) {
            var r = ue(e, t, a, i, n),
                s = se(r.year, 0, r.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }

        function qe(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }

        function Ge(e, t, a) {
            var i, n, r, o = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i) r = s([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
            return a ? "dddd" === t ? -1 !== (n = _t.call(this._weekdaysParse, o)) ? n : null : "ddd" === t ? -1 !== (n = _t.call(this._shortWeekdaysParse, o)) ? n : null : -1 !== (n = _t.call(this._minWeekdaysParse, o)) ? n : null : "dddd" === t ? -1 !== (n = _t.call(this._weekdaysParse, o)) ? n : -1 !== (n = _t.call(this._shortWeekdaysParse, o)) ? n : -1 !== (n = _t.call(this._minWeekdaysParse, o)) ? n : null : "ddd" === t ? -1 !== (n = _t.call(this._shortWeekdaysParse, o)) ? n : -1 !== (n = _t.call(this._weekdaysParse, o)) ? n : -1 !== (n = _t.call(this._minWeekdaysParse, o)) ? n : null : -1 !== (n = _t.call(this._minWeekdaysParse, o)) ? n : -1 !== (n = _t.call(this._weekdaysParse, o)) ? n : -1 !== (n = _t.call(this._shortWeekdaysParse, o)) ? n : null
        }

        function Xe() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, a, i, n, r, o = [],
                l = [],
                c = [],
                u = [];
            for (t = 0; 7 > t; t++) a = s([2e3, 1]).day(t), i = this.weekdaysMin(a, ""), n = this.weekdaysShort(a, ""), r = this.weekdays(a, ""), o.push(i), l.push(n), c.push(r), u.push(i), u.push(n), u.push(r);
            for (o.sort(e), l.sort(e), c.sort(e), u.sort(e), t = 0; 7 > t; t++) l[t] = q(l[t]), c[t] = q(c[t]), u[t] = q(u[t]);
            this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
        }

        function Ke() {
            return this.hours() % 12 || 12
        }

        function Je(e, t) {
            R(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Ze(e, t) {
            return t._meridiemParse
        }

        function Qe(e) {
            return e
        }

        function et(e, t, a, i) {
            var n = $(),
                r = s().set(i, t);
            return n[a](r, e)
        }

        function tt(e, t, a) {
            if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return et(e, t, a, "month");
            var i, n = [];
            for (i = 0; 12 > i; i++) n[i] = et(e, i, a, "month");
            return n
        }

        function at(e, t, a, i) {
            "boolean" == typeof e ? ("number" == typeof t && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, "number" == typeof t && (a = t, t = void 0), t = t || "");
            var n = $(),
                r = e ? n._week.dow : 0;
            if (null != a) return et(t, (a + r) % 7, i, "day");
            var s, o = [];
            for (s = 0; 7 > s; s++) o[s] = et(t, (s + r) % 7, i, "day");
            return o
        }

        function it(e, t, a, i) {
            var n = Ee(t, a);
            return e._milliseconds += i * n._milliseconds, e._days += i * n._days, e._months += i * n._months, e._bubble()
        }

        function nt(e) {
            return 0 > e ? Math.floor(e) : Math.ceil(e)
        }

        function rt(e) {
            return 4800 * e / 146097
        }

        function st(e) {
            return 146097 * e / 4800
        }

        function ot(e) {
            return function() {
                return this.as(e)
            }
        }

        function lt(e) {
            return function() {
                return this._data[e]
            }
        }

        function ct(e, t, a, i, n) {
            return n.relativeTime(t || 1, !!a, e, i)
        }

        function ut(e, t, a) {
            var i = Ee(e).abs(),
                n = ii(i.as("s")),
                r = ii(i.as("m")),
                s = ii(i.as("h")),
                o = ii(i.as("d")),
                l = ii(i.as("M")),
                c = ii(i.as("y")),
                u = n < ni.s && ["s", n] || 1 >= r && ["m"] || r < ni.m && ["mm", r] || 1 >= s && ["h"] || s < ni.h && ["hh", s] || 1 >= o && ["d"] || o < ni.d && ["dd", o] || 1 >= l && ["M"] || l < ni.M && ["MM", l] || 1 >= c && ["y"] || ["yy", c];
            return u[2] = t, u[3] = +e > 0, u[4] = a, ct.apply(null, u)
        }

        function dt() {
            var e, t, a, i = ri(this._milliseconds) / 1e3,
                n = ri(this._days),
                r = ri(this._months);
            t = g((e = g(i / 60)) / 60), i %= 60, e %= 60;
            var s = a = g(r / 12),
                o = r %= 12,
                l = n,
                c = t,
                u = e,
                d = i,
                p = this.asSeconds();
            return p ? (0 > p ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (l ? l + "D" : "") + (c || u || d ? "T" : "") + (c ? c + "H" : "") + (u ? u + "M" : "") + (d ? d + "S" : "") : "P0D"
        }
        var pt, ht;
        ht = Array.prototype.some ? Array.prototype.some : function(e) {
            for (var t = Object(this), a = t.length >>> 0, i = 0; a > i; i++)
                if (i in t && e.call(this, t[i], i, t)) return !0;
            return !1
        };
        var ft = e.momentProperties = [],
            gt = !1,
            mt = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var vt;
        vt = Object.keys ? Object.keys : function(e) {
            var t, a = [];
            for (t in e) n(e, t) && a.push(t);
            return a
        };
        var yt, _t, wt = {},
            bt = {},
            St = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            xt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            kt = {},
            Ct = {},
            Dt = /\d/,
            Tt = /\d\d/,
            Mt = /\d{3}/,
            Ft = /\d{4}/,
            $t = /[+-]?\d{6}/,
            Pt = /\d\d?/,
            It = /\d\d\d\d?/,
            Ot = /\d\d\d\d\d\d?/,
            Et = /\d{1,3}/,
            At = /\d{1,4}/,
            Lt = /[+-]?\d{1,6}/,
            zt = /\d+/,
            jt = /[+-]?\d+/,
            Rt = /Z|[+-]\d\d:?\d\d/gi,
            Nt = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Ht = /[+-]?\d+(\.\d{1,3})?/,
            Yt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Bt = {},
            Wt = {},
            Ut = 0,
            Vt = 1,
            qt = 2,
            Gt = 3,
            Xt = 4,
            Kt = 5,
            Jt = 6,
            Zt = 7,
            Qt = 8;
        _t = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1
        }, R("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), R("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), R("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), P("month", "M"), W("M", Pt), W("MM", Pt, Tt), W("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }), W("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }), G(["M", "MM"], function(e, t) {
            t[Vt] = m(e) - 1
        }), G(["MMM", "MMMM"], function(e, t, a, i) {
            var n = a._locale.monthsParse(e, i, a._strict);
            null != n ? t[Vt] = n : l(a).invalidMonth = e
        });
        var ea = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            ta = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            aa = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            ia = Yt,
            na = Yt,
            ra = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            sa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            oa = /Z|[+-]\d\d(?::?\d\d)?/,
            la = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ca = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            ua = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = _("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), R("Y", 0, 0, function() {
            var e = this.year();
            return 9999 >= e ? "" + e : "+" + e
        }), R(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), W("Y", jt), W("YY", Pt, Tt), W("YYYY", At, Ft), W("YYYYY", Lt, $t), W("YYYYYY", Lt, $t), G(["YYYYY", "YYYYYY"], Ut), G("YYYY", function(t, a) {
            a[Ut] = 2 === t.length ? e.parseTwoDigitYear(t) : m(t)
        }), G("YY", function(t, a) {
            a[Ut] = e.parseTwoDigitYear(t)
        }), G("Y", function(e, t) {
            t[Ut] = parseInt(e, 10)
        }), e.parseTwoDigitYear = function(e) {
            return m(e) + (m(e) > 68 ? 1900 : 2e3)
        };
        var da = E("FullYear", !0);
        e.ISO_8601 = function() {};
        var pa = _("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Ce.apply(null, arguments);
                return this.isValid() && e.isValid() ? this > e ? this : e : u()
            }),
            ha = _("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Ce.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : u()
            });
        Fe("Z", ":"), Fe("ZZ", ""), W("Z", Nt), W("ZZ", Nt), G(["Z", "ZZ"], function(e, t, a) {
            a._useUTC = !0, a._tzm = $e(Nt, e)
        });
        var fa = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var ga = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
            ma = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        Ee.fn = Te.prototype;
        var va = Re(1, "add"),
            ya = Re(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var _a = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        R(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), R(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), We("gggg", "weekYear"), We("ggggg", "weekYear"), We("GGGG", "isoWeekYear"), We("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), W("G", jt), W("g", jt), W("GG", Pt, Tt), W("gg", Pt, Tt), W("GGGG", At, Ft), W("gggg", At, Ft), W("GGGGG", Lt, $t), W("ggggg", Lt, $t), X(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, i) {
            t[i.substr(0, 2)] = m(e)
        }), X(["gg", "GG"], function(t, a, i, n) {
            a[n] = e.parseTwoDigitYear(t)
        }), R("Q", 0, "Qo", "quarter"), P("quarter", "Q"), W("Q", Dt), G("Q", function(e, t) {
            t[Vt] = 3 * (m(e) - 1)
        }), R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), W("w", Pt), W("ww", Pt, Tt), W("W", Pt), W("WW", Pt, Tt), X(["w", "ww", "W", "WW"], function(e, t, a, i) {
            t[i.substr(0, 1)] = m(e)
        });
        var wa = {
            dow: 0,
            doy: 6
        };
        R("D", ["DD", 2], "Do", "date"), P("date", "D"), W("D", Pt), W("DD", Pt, Tt), W("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient
        }), G(["D", "DD"], qt), G("Do", function(e, t) {
            t[qt] = m(e.match(Pt)[0], 10)
        });
        var ba = E("Date", !0);
        R("d", 0, "do", "day"), R("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), R("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), R("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), W("d", Pt), W("e", Pt), W("E", Pt), W("dd", function(e, t) {
            return t.weekdaysMinRegex(e)
        }), W("ddd", function(e, t) {
            return t.weekdaysShortRegex(e)
        }), W("dddd", function(e, t) {
            return t.weekdaysRegex(e)
        }), X(["dd", "ddd", "dddd"], function(e, t, a, i) {
            var n = a._locale.weekdaysParse(e, i, a._strict);
            null != n ? t.d = n : l(a).invalidWeekday = e
        }), X(["d", "e", "E"], function(e, t, a, i) {
            t[i] = m(e)
        });
        var Sa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            xa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            ka = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Ca = Yt,
            Da = Yt,
            Ta = Yt;
        R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), W("DDD", Et), W("DDDD", Mt), G(["DDD", "DDDD"], function(e, t, a) {
            a._dayOfYear = m(e)
        }), R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Ke), R("k", ["kk", 2], 0, function() {
            return this.hours() || 24
        }), R("hmm", 0, 0, function() {
            return "" + Ke.apply(this) + j(this.minutes(), 2)
        }), R("hmmss", 0, 0, function() {
            return "" + Ke.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
        }), R("Hmm", 0, 0, function() {
            return "" + this.hours() + j(this.minutes(), 2)
        }), R("Hmmss", 0, 0, function() {
            return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
        }), Je("a", !0), Je("A", !1), P("hour", "h"), W("a", Ze), W("A", Ze), W("H", Pt), W("h", Pt), W("HH", Pt, Tt), W("hh", Pt, Tt), W("hmm", It), W("hmmss", Ot), W("Hmm", It), W("Hmmss", Ot), G(["H", "HH"], Gt), G(["a", "A"], function(e, t, a) {
            a._isPm = a._locale.isPM(e), a._meridiem = e
        }), G(["h", "hh"], function(e, t, a) {
            t[Gt] = m(e), l(a).bigHour = !0
        }), G("hmm", function(e, t, a) {
            var i = e.length - 2;
            t[Gt] = m(e.substr(0, i)), t[Xt] = m(e.substr(i)), l(a).bigHour = !0
        }), G("hmmss", function(e, t, a) {
            var i = e.length - 4,
                n = e.length - 2;
            t[Gt] = m(e.substr(0, i)), t[Xt] = m(e.substr(i, 2)), t[Kt] = m(e.substr(n)), l(a).bigHour = !0
        }), G("Hmm", function(e, t, a) {
            var i = e.length - 2;
            t[Gt] = m(e.substr(0, i)), t[Xt] = m(e.substr(i))
        }), G("Hmmss", function(e, t, a) {
            var i = e.length - 4,
                n = e.length - 2;
            t[Gt] = m(e.substr(0, i)), t[Xt] = m(e.substr(i, 2)), t[Kt] = m(e.substr(n))
        });
        var Ma = /[ap]\.?m?\.?/i,
            Fa = E("Hours", !0);
        R("m", ["mm", 2], 0, "minute"), P("minute", "m"), W("m", Pt), W("mm", Pt, Tt), G(["m", "mm"], Xt);
        var $a = E("Minutes", !1);
        R("s", ["ss", 2], 0, "second"), P("second", "s"), W("s", Pt), W("ss", Pt, Tt), G(["s", "ss"], Kt);
        var Pa = E("Seconds", !1);
        R("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), R(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), R(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), R(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), R(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), R(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), R(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), P("millisecond", "ms"), W("S", Et, Dt), W("SS", Et, Tt), W("SSS", Et, Mt);
        var Ia;
        for (Ia = "SSSS"; Ia.length <= 9; Ia += "S") W(Ia, zt);
        for (Ia = "S"; Ia.length <= 9; Ia += "S") G(Ia, function(e, t) {
            t[Jt] = m(1e3 * ("0." + e))
        });
        var Oa = E("Milliseconds", !1);
        R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
        var Ea = h.prototype;
        Ea.add = va, Ea.calendar = function(e, t) {
            var a = e || Ce(),
                i = Pe(a, this).startOf("day"),
                n = this.diff(i, "days", !0),
                r = -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse",
                s = t && (b(t[r]) ? t[r]() : t[r]);
            return this.format(s || this.localeData().calendar(r, this, Ce(a)))
        }, Ea.clone = function() {
            return new h(this)
        }, Ea.diff = function(e, t, a) {
            var i, n, r, s;
            return this.isValid() && (i = Pe(e, this)).isValid() ? (n = 6e4 * (i.utcOffset() - this.utcOffset()), "year" === (t = I(t)) || "month" === t || "quarter" === t ? (s = He(this, i), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (r = this - i, s = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - n) / 864e5 : "week" === t ? (r - n) / 6048e5 : r), a ? s : g(s)) : NaN
        }, Ea.endOf = function(e) {
            return void 0 === (e = I(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }, Ea.format = function(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var a = Y(this, t);
            return this.localeData().postformat(a)
        }, Ea.from = function(e, t) {
            return this.isValid() && (f(e) && e.isValid() || Ce(e).isValid()) ? Ee({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, Ea.fromNow = function(e) {
            return this.from(Ce(), e)
        }, Ea.to = function(e, t) {
            return this.isValid() && (f(e) && e.isValid() || Ce(e).isValid()) ? Ee({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, Ea.toNow = function(e) {
            return this.to(Ce(), e)
        }, Ea.get = z, Ea.invalidAt = function() {
            return l(this).overflow
        }, Ea.isAfter = function(e, t) {
            var a = f(e) ? e : Ce(e);
            return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = I(d(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
        }, Ea.isBefore = function(e, t) {
            var a = f(e) ? e : Ce(e);
            return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = I(d(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
        }, Ea.isBetween = function(e, t, a, i) {
            return ("(" === (i = i || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === i[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
        }, Ea.isSame = function(e, t) {
            var a, i = f(e) ? e : Ce(e);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = I(t || "millisecond")) ? this.valueOf() === i.valueOf() : (a = i.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
        }, Ea.isSameOrAfter = function(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }, Ea.isSameOrBefore = function(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }, Ea.isValid = function() {
            return c(this)
        }, Ea.lang = _a, Ea.locale = Ye, Ea.localeData = Be, Ea.max = ha, Ea.min = pa, Ea.parsingFlags = function() {
            return r({}, l(this))
        }, Ea.set = z, Ea.startOf = function(e) {
            switch (e = I(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }, Ea.subtract = ya, Ea.toArray = function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }, Ea.toObject = function() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }, Ea.toDate = function() {
            return this._offset ? new Date(this.valueOf()) : this._d
        }, Ea.toISOString = function() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? b(Date.prototype.toISOString) ? this.toDate().toISOString() : Y(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Y(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, Ea.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
        }, Ea.toString = function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, Ea.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
        }, Ea.valueOf = function() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, Ea.creationData = function() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }, Ea.year = da, Ea.isLeapYear = function() {
            return le(this.year())
        }, Ea.weekYear = function(e) {
            return Ue.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, Ea.isoWeekYear = function(e) {
            return Ue.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, Ea.quarter = Ea.quarters = function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }, Ea.month = ee, Ea.daysInMonth = function() {
            return J(this.year(), this.month())
        }, Ea.week = Ea.weeks = function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }, Ea.isoWeek = Ea.isoWeeks = function(e) {
            var t = de(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }, Ea.weeksInYear = function() {
            var e = this.localeData()._week;
            return pe(this.year(), e.dow, e.doy)
        }, Ea.isoWeeksInYear = function() {
            return pe(this.year(), 1, 4)
        }, Ea.date = ba, Ea.day = Ea.days = function(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = qe(e, this.localeData()), this.add(e - t, "d")) : t
        }, Ea.weekday = function(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }, Ea.isoWeekday = function(e) {
            return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN
        }, Ea.dayOfYear = function(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }, Ea.hour = Ea.hours = Fa, Ea.minute = Ea.minutes = $a, Ea.second = Ea.seconds = Pa, Ea.millisecond = Ea.milliseconds = Oa, Ea.utcOffset = function(t, a) {
            var i, n = this._offset || 0;
            return this.isValid() ? null != t ? ("string" == typeof t ? t = $e(Nt, t) : Math.abs(t) < 16 && (t *= 60), !this._isUTC && a && (i = Ie(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), n !== t && (!a || this._changeInProgress ? Ne(this, Ee(t - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? n : Ie(this) : null != t ? this : NaN
        }, Ea.utc = function(e) {
            return this.utcOffset(0, e)
        }, Ea.local = function(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ie(this), "m")), this
        }, Ea.parseZone = function() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset($e(Rt, this._i)), this
        }, Ea.hasAlignedHourOffset = function(e) {
            return !!this.isValid() && (e = e ? Ce(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }, Ea.isDST = function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, Ea.isDSTShifted = function() {
            if (!d(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (p(e, this), (e = Se(e))._a) {
                var t = e._isUTC ? s(e._a) : Ce(e._a);
                this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }, Ea.isLocal = function() {
            return !!this.isValid() && !this._isUTC
        }, Ea.isUtcOffset = function() {
            return !!this.isValid() && this._isUTC
        }, Ea.isUtc = Oe, Ea.isUTC = Oe, Ea.zoneAbbr = function() {
            return this._isUTC ? "UTC" : ""
        }, Ea.zoneName = function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, Ea.dates = _("dates accessor is deprecated. Use date instead.", ba), Ea.months = _("months accessor is deprecated. Use month instead", ee), Ea.years = _("years accessor is deprecated. Use year instead", da), Ea.zone = _("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        });
        var Aa = Ea,
            La = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            za = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            ja = /\d{1,2}/,
            Ra = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Na = k.prototype;
        Na._calendar = La, Na.calendar = function(e, t, a) {
            var i = this._calendar[e];
            return b(i) ? i.call(t, a) : i
        }, Na._longDateFormat = za, Na.longDateFormat = function(e) {
            var t = this._longDateFormat[e],
                a = this._longDateFormat[e.toUpperCase()];
            return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }, Na._invalidDate = "Invalid date", Na.invalidDate = function() {
            return this._invalidDate
        }, Na._ordinal = "%d", Na.ordinal = function(e) {
            return this._ordinal.replace("%d", e)
        }, Na._ordinalParse = ja, Na.preparse = Qe, Na.postformat = Qe, Na._relativeTime = Ra, Na.relativeTime = function(e, t, a, i) {
            var n = this._relativeTime[a];
            return b(n) ? n(e, t, a, i) : n.replace(/%d/i, e)
        }, Na.pastFuture = function(e, t) {
            var a = this._relativeTime[e > 0 ? "future" : "past"];
            return b(a) ? a(t) : a.replace(/%s/i, t)
        }, Na.set = function(e) {
            var t, a;
            for (a in e) t = e[a], b(t) ? this[a] = t : this["_" + a] = t;
            this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }, Na.months = function(e, a) {
            return t(this._months) ? this._months[e.month()] : this._months[ea.test(a) ? "format" : "standalone"][e.month()]
        }, Na._months = ta, Na.monthsShort = function(e, a) {
            return t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ea.test(a) ? "format" : "standalone"][e.month()]
        }, Na._monthsShort = aa, Na.monthsParse = function(e, t, a) {
            var i, n, r;
            if (this._monthsParseExact) return Z.call(this, e, t, a);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                if (n = s([2e3, i]), a && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), a || this._monthsParse[i] || (r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (a && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!a && this._monthsParse[i].test(e)) return i
            }
        }, Na._monthsRegex = na, Na.monthsRegex = function(e) {
            return this._monthsParseExact ? (n(this, "_monthsRegex") || te.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
        }, Na._monthsShortRegex = ia, Na.monthsShortRegex = function(e) {
            return this._monthsParseExact ? (n(this, "_monthsRegex") || te.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
        }, Na.week = function(e) {
            return de(e, this._week.dow, this._week.doy).week
        }, Na._week = wa, Na.firstDayOfYear = function() {
            return this._week.doy
        }, Na.firstDayOfWeek = function() {
            return this._week.dow
        }, Na.weekdays = function(e, a) {
            return t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(a) ? "format" : "standalone"][e.day()]
        }, Na._weekdays = Sa, Na.weekdaysMin = function(e) {
            return this._weekdaysMin[e.day()]
        }, Na._weekdaysMin = ka, Na.weekdaysShort = function(e) {
            return this._weekdaysShort[e.day()]
        }, Na._weekdaysShort = xa, Na.weekdaysParse = function(e, t, a) {
            var i, n, r;
            if (this._weekdaysParseExact) return Ge.call(this, e, t, a);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
                if (n = s([2e3, 1]).day(i), a && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(n, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
                if (a && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
                if (a && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
                if (!a && this._weekdaysParse[i].test(e)) return i
            }
        }, Na._weekdaysRegex = Ca, Na.weekdaysRegex = function(e) {
            return this._weekdaysParseExact ? (n(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
        }, Na._weekdaysShortRegex = Da, Na.weekdaysShortRegex = function(e) {
            return this._weekdaysParseExact ? (n(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
        }, Na._weekdaysMinRegex = Ta, Na.weekdaysMinRegex = function(e) {
            return this._weekdaysParseExact ? (n(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
        }, Na.isPM = function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }, Na._meridiemParse = Ma, Na.meridiem = function(e, t, a) {
            return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
        }, M("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === m(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        }), e.lang = _("moment.lang is deprecated. Use moment.locale instead.", M), e.langData = _("moment.langData is deprecated. Use moment.localeData instead.", $);
        var Ha = Math.abs,
            Ya = ot("ms"),
            Ba = ot("s"),
            Wa = ot("m"),
            Ua = ot("h"),
            Va = ot("d"),
            qa = ot("w"),
            Ga = ot("M"),
            Xa = ot("y"),
            Ka = lt("milliseconds"),
            Ja = lt("seconds"),
            Za = lt("minutes"),
            Qa = lt("hours"),
            ei = lt("days"),
            ti = lt("months"),
            ai = lt("years"),
            ii = Math.round,
            ni = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            ri = Math.abs,
            si = Te.prototype;
        return si.abs = function() {
                var e = this._data;
                return this._milliseconds = Ha(this._milliseconds), this._days = Ha(this._days), this._months = Ha(this._months), e.milliseconds = Ha(e.milliseconds), e.seconds = Ha(e.seconds), e.minutes = Ha(e.minutes), e.hours = Ha(e.hours), e.months = Ha(e.months), e.years = Ha(e.years), this
            }, si.add = function(e, t) {
                return it(this, e, t, 1)
            }, si.subtract = function(e, t) {
                return it(this, e, t, -1)
            }, si.as = function(e) {
                var t, a, i = this._milliseconds;
                if ("month" === (e = I(e)) || "year" === e) return t = this._days + i / 864e5, a = this._months + rt(t), "month" === e ? a : a / 12;
                switch (t = this._days + Math.round(st(this._months)), e) {
                    case "week":
                        return t / 7 + i / 6048e5;
                    case "day":
                        return t + i / 864e5;
                    case "hour":
                        return 24 * t + i / 36e5;
                    case "minute":
                        return 1440 * t + i / 6e4;
                    case "second":
                        return 86400 * t + i / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + i;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, si.asMilliseconds = Ya, si.asSeconds = Ba, si.asMinutes = Wa, si.asHours = Ua, si.asDays = Va, si.asWeeks = qa, si.asMonths = Ga, si.asYears = Xa, si.valueOf = function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * m(this._months / 12)
            }, si._bubble = function() {
                var e, t, a, i, n, r = this._milliseconds,
                    s = this._days,
                    o = this._months,
                    l = this._data;
                return r >= 0 && s >= 0 && o >= 0 || 0 >= r && 0 >= s && 0 >= o || (r += 864e5 * nt(st(o) + s), s = 0, o = 0), l.milliseconds = r % 1e3, e = g(r / 1e3), l.seconds = e % 60, t = g(e / 60), l.minutes = t % 60, a = g(t / 60), l.hours = a % 24, s += g(a / 24), n = g(rt(s)), o += n, s -= nt(st(n)), i = g(o / 12), o %= 12, l.days = s, l.months = o, l.years = i, this
            }, si.get = function(e) {
                return e = I(e), this[e + "s"]()
            }, si.milliseconds = Ka, si.seconds = Ja, si.minutes = Za, si.hours = Qa, si.days = ei, si.weeks = function() {
                return g(this.days() / 7)
            }, si.months = ti, si.years = ai, si.humanize = function(e) {
                var t = this.localeData(),
                    a = ut(this, !e, t);
                return e && (a = t.pastFuture(+this, a)), t.postformat(a)
            }, si.toISOString = dt, si.toString = dt, si.toJSON = dt, si.locale = Ye, si.localeData = Be, si.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", dt), si.lang = _a, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), W("x", jt), W("X", Ht), G("X", function(e, t, a) {
                a._d = new Date(1e3 * parseFloat(e, 10))
            }), G("x", function(e, t, a) {
                a._d = new Date(m(e))
            }), e.version = "2.13.0",
            function(e) {
                pt = e
            }(Ce), e.fn = Aa, e.min = function() {
                return De("isBefore", [].slice.call(arguments, 0))
            }, e.max = function() {
                return De("isAfter", [].slice.call(arguments, 0))
            }, e.now = function() {
                return Date.now ? Date.now() : +new Date
            }, e.utc = s, e.unix = function(e) {
                return Ce(1e3 * e)
            }, e.months = function(e, t) {
                return tt(e, t, "months")
            }, e.isDate = a, e.locale = M, e.invalid = u, e.duration = Ee, e.isMoment = f, e.weekdays = function(e, t, a) {
                return at(e, t, a, "weekdays")
            }, e.parseZone = function() {
                return Ce.apply(null, arguments).parseZone()
            }, e.localeData = $, e.isDuration = Me, e.monthsShort = function(e, t) {
                return tt(e, t, "monthsShort")
            }, e.weekdaysMin = function(e, t, a) {
                return at(e, t, a, "weekdaysMin")
            }, e.defineLocale = F, e.updateLocale = function(e, t) {
                if (null != t) {
                    var a;
                    null != wt[e] && (t = x(wt[e]._config, t)), (a = new k(t)).parentLocale = wt[e], wt[e] = a, M(e)
                } else null != wt[e] && (null != wt[e].parentLocale ? wt[e] = wt[e].parentLocale : null != wt[e] && delete wt[e]);
                return wt[e]
            }, e.locales = function() {
                return vt(wt)
            }, e.weekdaysShort = function(e, t, a) {
                return at(e, t, a, "weekdaysShort")
            }, e.normalizeUnits = I, e.relativeTimeThreshold = function(e, t) {
                return void 0 !== ni[e] && (void 0 === t ? ni[e] : (ni[e] = t, !0))
            }, e.prototype = Aa, e
    }),
    function(e, t, a) {
        "use strict";

        function i(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }

        function n() {
            var t;
            B = !1, V = e.devicePixelRatio, W = {}, U = {}, t = (V || 1) * F.xQuant, F.uT || (F.maxX = Math.max(1.3, F.maxX), t = Math.min(t, F.maxX), b.DPR = t), q.width = Math.max(e.innerWidth || 0, T.clientWidth), q.height = Math.max(e.innerHeight || 0, T.clientHeight), q.vw = q.width / 100, q.vh = q.height / 100, q.em = b.getEmValue(), q.rem = q.em, f = F.lazyFactor / 2, f = f * t + f, m = .4 + .1 * t, d = .5 + .2 * t, p = .5 + .25 * t, g = t + 1.3, (h = q.width > q.height) || (f *= .9), E && (f *= .9), w = [q.width, q.height, t].join("-")
        }

        function r(e, t, a) {
            var i = t * Math.pow(e - .4, 1.9);
            return h || (i /= 1.3), (e += i) > a
        }

        function s(e) {
            var t, a = b.getSet(e),
                i = !1;
            "pending" != a && (i = w, a && (t = b.setRes(a), i = b.applySetCandidate(t, e))), e[b.ns].evaled = i
        }

        function o(e, t) {
            return e.res - t.res
        }

        function l(e, t, a) {
            var i;
            return !a && t && (a = e[b.ns].sets, a = a && a[a.length - 1]), (i = c(t, a)) && (t = b.makeUrl(t), e[b.ns].curSrc = t, e[b.ns].curCan = i, i.res || Q(i, i.set.sizes)), i
        }

        function c(e, t) {
            var a, i, n;
            if (e && t)
                for (n = b.parseSet(t), e = b.makeUrl(e), a = 0; a < n.length; a++)
                    if (e == b.makeUrl(n[a].url)) {
                        i = n[a];
                        break
                    } return i
        }

        function u(e, t) {
            var a, i, n, r, s = e.getElementsByTagName("source");
            for (a = 0, i = s.length; i > a; a++) n = s[a], n[b.ns] = !0, (r = n.getAttribute("srcset")) && t.push({
                srcset: r,
                media: n.getAttribute("media"),
                type: n.getAttribute("type"),
                sizes: n.getAttribute("sizes")
            })
        }
        var d, p, h, f, g, m, v, y, _, w, b = {},
            S = function() {},
            x = t.createElement("img"),
            k = x.getAttribute,
            C = x.setAttribute,
            D = x.removeAttribute,
            T = t.documentElement,
            M = {},
            F = {
                xQuant: 1,
                lazyFactor: .4,
                maxX: 2
            },
            $ = "data-pfsrc",
            P = $ + "set",
            I = "webkitBackfaceVisibility" in T.style,
            O = navigator.userAgent,
            E = /rident/.test(O) || /ecko/.test(O) && O.match(/rv\:(\d+)/) && RegExp.$1 > 35,
            A = "currentSrc",
            L = /\s+\+?\d+(e\d+)?w/,
            z = /((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,
            j = /^([\+eE\d\.]+)(w|x)$/,
            R = /\s*\d+h\s*/,
            N = e.respimgCFG,
            H = (location.protocol, "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
            Y = "font-size:100%!important;",
            B = !0,
            W = {},
            U = {},
            V = e.devicePixelRatio,
            q = {
                px: 1,
                in: 96
            },
            G = t.createElement("a"),
            X = !1,
            K = function(e, t, a, i) {
                e.addEventListener ? e.addEventListener(t, a, i || !1) : e.attachEvent && e.attachEvent("on" + t, a)
            },
            J = function(e) {
                var t = {};
                return function(a) {
                    return a in t || (t[a] = e(a)), t[a]
                }
            },
            Z = function() {
                var e = /^([\d\.]+)(em|vw|px)$/,
                    t = function() {
                        for (var e = arguments, t = 0, a = e[0]; ++t in e;) a = a.replace(e[t], e[++t]);
                        return a
                    },
                    a = J(function(e) {
                        return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "")
                    });
                return function(t, i) {
                    var n;
                    if (!(t in W))
                        if (W[t] = !1, i && (n = t.match(e))) W[t] = n[1] * q[n[2]];
                        else try {
                            W[t] = new Function("e", a(t))(q)
                        } catch (e) {}
                    return W[t]
                }
            }(),
            Q = function(e, t) {
                return e.w ? (e.cWidth = b.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.x, e
            },
            ee = function(a) {
                var i, n, r, s = a || {};
                if (s.elements && 1 == s.elements.nodeType && ("IMG" == s.elements.nodeName.toUpperCase() ? s.elements = [s.elements] : (s.context = s.elements, s.elements = null)), s.reparse && (s.reevaluate = !0, e.console && console.warn && console.warn("reparse was renamed to reevaluate!")), i = s.elements || b.qsa(s.context || t, s.reevaluate || s.reselect ? b.sel : b.selShort), r = i.length) {
                    for (b.setupRun(s), X = !0, n = 0; r > n; n++) b.fillImg(i[n], s);
                    b.teardownRun(s)
                }
            },
            te = J(function(e) {
                var t = [1, "x"],
                    a = i(e || "");
                return a && (a = a.replace(R, ""), t = !!a.match(j) && [1 * RegExp.$1, RegExp.$2]), t
            });
        if (A in x || (A = "src"), M["image/jpeg"] = !0, M["image/gif"] = !0, M["image/png"] = !0, M["image/svg+xml"] = t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), b.ns = ("ri" + (new Date).getTime()).substr(0, 9), b.supSrcset = "srcset" in x, b.supSizes = "sizes" in x, b.supPicture = !!e.HTMLPictureElement, b.supSrcset && b.supPicture && !b.supSizes && function(e) {
                x.srcset = "data:,a", e.src = "data:,a", b.supSrcset = x.complete === e.complete, b.supPicture = b.supSrcset && b.supPicture
            }(t.createElement("img")), b.selShort = "picture>img,img[srcset]", b.sel = b.selShort, b.cfg = F, b.supSrcset && (b.sel += ",img[" + P + "]"), b.DPR = V || 1, b.u = q, b.types = M, y = b.supSrcset && !b.supSizes, b.setSize = S, b.makeUrl = J(function(e) {
                return G.href = e, G.href
            }), b.qsa = function(e, t) {
                return e.querySelectorAll(t)
            }, b.matchesMedia = function() {
                return b.matchesMedia = e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? function(e) {
                    return !e || matchMedia(e).matches
                } : b.mMQ, b.matchesMedia.apply(this, arguments)
            }, b.mMQ = function(e) {
                return !e || Z(e)
            }, b.calcLength = function(e) {
                var t = Z(e, !0) || !1;
                return 0 > t && (t = !1), t
            }, b.supportsType = function(e) {
                return !e || M[e]
            }, b.parseSize = J(function(e) {
                var t = (e || "").match(z);
                return {
                    media: t && t[1],
                    length: t && t[2]
                }
            }), b.parseSet = function(e) {
                if (!e.cands) {
                    var t, a, i, n, r, s = e.srcset;
                    for (e.cands = []; s;) s = s.replace(/^\s+/g, ""), t = s.search(/\s/g), i = null, -1 != t ? (a = s.slice(0, t), "," != a.charAt(a.length - 1) && a || (a = a.replace(/,+$/, ""), i = ""), s = s.slice(t + 1), null == i && (-1 != (n = s.indexOf(",")) ? (i = s.slice(0, n), s = s.slice(n + 1)) : (i = s, s = ""))) : (a = s, s = ""), a && (i = te(i)) && (r = {
                        url: a.replace(/^,+/, ""),
                        set: e
                    }, r[i[1]] = i[0], "x" == i[1] && 1 == i[0] && (e.has1x = !0), e.cands.push(r))
                }
                return e.cands
            }, b.getEmValue = function() {
                var e;
                if (!v && (e = t.body)) {
                    var a = t.createElement("div"),
                        i = T.style.cssText,
                        n = e.style.cssText;
                    a.style.cssText = H, T.style.cssText = Y, e.style.cssText = Y, e.appendChild(a), v = a.offsetWidth, e.removeChild(a), v = parseFloat(v, 10), T.style.cssText = i, e.style.cssText = n
                }
                return v || 16
            }, b.calcListLength = function(e) {
                if (!(e in U) || F.uT) {
                    var t, a, n, r, s, o, l = i(e).split(/\s*,\s*/),
                        c = !1;
                    for (s = 0, o = l.length; o > s && (t = l[s], a = b.parseSize(t), n = a.length, r = a.media, !n || !b.matchesMedia(r) || !1 === (c = b.calcLength(n))); s++);
                    U[e] = c || q.width
                }
                return U[e]
            }, b.setRes = function(e) {
                var t;
                if (e)
                    for (var a = 0, i = (t = b.parseSet(e)).length; i > a; a++) Q(t[a], e.sizes);
                return t
            }, b.setRes.res = Q, b.applySetCandidate = function(e, t) {
                if (e.length) {
                    var a, i, n, s, c, u, h, v, y, _, S, x, k, C = t[b.ns],
                        D = w,
                        T = f,
                        M = m;
                    if (v = C.curSrc || t[A], y = C.curCan || l(t, v, e[0].set), i = b.DPR, k = y && y.res, !h && v && ((x = E && !t.complete && y && k - .2 > i) || y && !(g > k) || (y && i > k && k > d && (p > k && (T *= .8, M += .04 * i), y.res += T * Math.pow(k - M, 2)), _ = !C.pic || y && y.set == e[0].set, y && _ && y.res >= i && (h = y))), !h)
                        for (k && (y.res = y.res - (y.res - k) / 2), e.sort(o), u = e.length, h = e[u - 1], n = 0; u > n; n++)
                            if ((a = e[n]).res >= i) {
                                h = e[s = n - 1] && (c = a.res - i) && (x || v != b.makeUrl(a.url)) && r(e[s].res, c, i) ? e[s] : a;
                                break
                            } return k && (y.res = k), h && (S = b.makeUrl(h.url), C.curSrc = S, C.curCan = h, S != v && b.setSrc(t, h), b.setSize(t)), D
                }
            }, b.setSrc = function(e, t) {
                var a;
                e.src = t.url, I && (a = e.style.zoom, e.style.zoom = "0.999", e.style.zoom = a)
            }, b.getSet = function(e) {
                var t, a, i, n = !1,
                    r = e[b.ns].sets;
                for (t = 0; t < r.length && !n; t++)
                    if ((a = r[t]).srcset && b.matchesMedia(a.media) && (i = b.supportsType(a.type))) {
                        "pending" == i && (a = i), n = a;
                        break
                    } return n
            }, b.parseSets = function(e, t, i) {
                var n, r, s, o, l = "PICTURE" == t.nodeName.toUpperCase(),
                    d = e[b.ns];
                (d.src === a || i.src) && (d.src = k.call(e, "src"), d.src ? C.call(e, $, d.src) : D.call(e, $)), (d.srcset === a || !b.supSrcset || e.srcset || i.srcset) && (n = k.call(e, "srcset"), d.srcset = n, o = !0), d.sets = [], l && (d.pic = !0, u(t, d.sets)), d.srcset ? (r = {
                    srcset: d.srcset,
                    sizes: k.call(e, "sizes")
                }, d.sets.push(r), (s = (y || d.src) && L.test(d.srcset || "")) || !d.src || c(d.src, r) || r.has1x || (r.srcset += ", " + d.src, r.cands.push({
                    url: d.src,
                    x: 1,
                    set: r
                }))) : d.src && d.sets.push({
                    srcset: d.src,
                    sizes: null
                }), d.curCan = null, d.curSrc = a, d.supported = !(l || r && !b.supSrcset || s), o && b.supSrcset && !d.supported && (n ? (C.call(e, P, n), e.srcset = "") : D.call(e, P)), d.supported && !d.srcset && (!d.src && e.src || e.src != b.makeUrl(d.src)) && (null == d.src ? e.removeAttribute("src") : e.src = d.src), d.parsed = !0
            }, b.fillImg = function(e, t) {
                var a, i, n = t.reselect || t.reevaluate;
                if (e[b.ns] || (e[b.ns] = {}), i = e[b.ns], n || i.evaled != w) {
                    if (!i.parsed || t.reevaluate) {
                        if (!(a = e.parentNode)) return;
                        b.parseSets(e, a, t)
                    }
                    i.supported ? i.evaled = w : s(e)
                }
            }, b.setupRun = function(t) {
                (!X || B || V != e.devicePixelRatio) && (n(), t.elements || t.context || clearTimeout(_))
            }, b.supPicture ? (ee = S, b.fillImg = S) : (t.createElement("picture"), function() {
                var a, i = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                    n = function() {
                        var e = t.readyState || "";
                        s = setTimeout(n, "loading" == e ? 200 : 999), t.body && (a = a || i.test(e), b.fillImgs(), a && clearTimeout(s))
                    },
                    r = function() {
                        b.fillImgs()
                    },
                    s = setTimeout(n, t.body ? 0 : 20);
                K(e, "resize", function() {
                    clearTimeout(_), B = !0, _ = setTimeout(r, 99)
                }), K(t, "readystatechange", n)
            }()), b.respimage = ee, b.fillImgs = ee, b.teardownRun = S, ee._ = b, e.respimage = e.picturefill || ee, !e.picturefill)
            for (e.respimgCFG = {
                    ri: b,
                    push: function(e) {
                        var t = e.shift();
                        "function" == typeof b[t] ? b[t].apply(b, e) : (F[t] = e[0], X && b.fillImgs({
                            reselect: !0
                        }))
                    }
                }; N && N.length;) e.respimgCFG.push(N.shift());
        e.picturefill || (e.picturefill = e.respimage, e.picturefillCFG || (e.picturefillCFG = e.respimgCFG))
    }(window, document),
    function(e) {
        window.lazySizes = e(), "function" == typeof define && define.amd && define(function() {
            return window.lazySizes
        })
    }(function() {
        "use strict";

        function e(e, t) {
            var a;
            window.picturefill ? picturefill({
                reevaluate: !0,
                reparse: !0,
                elements: [e]
            }) : window.respimage && !respimage._.observer ? (t && (a = e[respimage._.ns]) && (a[t.srcset ? "srcset" : "src"] = void 0), respimage({
                reparse: !0,
                elements: [e]
            })) : !window.HTMLPictureElement && window.console && "complete" == _.readyState && console.log("use a respimg polyfill: http://bit.ly/1FCts3P")
        }

        function t(e) {
            w++, e = n(e), F(e, Y), F(e, Y, !0), clearTimeout(O), O = setTimeout(Y, 5e3)
        }

        function a(e) {
            var t = _.createElement("script"),
                a = e.parentNode;
            return e.removeAttribute(c.srcAttr), a.insertBefore(t, e), T(function() {
                m(e, c.lazyClass)
            }), t
        }

        function i() {
            h = 0, clearTimeout(p)
        }

        function n(t, i) {
            var n, r, o, l, u, d, p, h, f;
            if (!P(t, "lazybeforeunveil", {
                    force: !!i
                }).defaultPrevented && (u = t.getAttribute(c.sizesAttr), d = t.getAttribute(c.srcAttr), p = t.getAttribute(c.srcsetAttr), h = t.parentNode, d || p)) {
                if (b.test(t.nodeName) && (t = a(t)), x.test(t.nodeName || "")) {
                    if (M[d]) return;
                    M[d] = !0
                } else if (k.test(t.nodeName || "")) {
                    if (f = S.test(h.nodeName || ""), !D && !f && !i && !t.complete && t.getAttribute("src") && t.src && !t.lazyload) return F(t, $), void F(t, $, !0);
                    if (f)
                        for (n = h.getElementsByTagName("source"), r = 0, o = n.length; o > r; r++)(l = n[r].getAttribute(c.srcsetAttr)) && n[r].setAttribute("srcset", l)
                }
                u && ("auto" == u ? s(t, !0) : t.setAttribute("sizes", u), t.removeAttribute(c.sizesAttr)), p ? (t.setAttribute("srcset", p), t.removeAttribute(c.srcsetAttr)) : d && (t.setAttribute("src", d), t.removeAttribute(c.srcAttr))
            }
            return T(function() {
                m(t, c.lazyClass), "auto" == u && g(t, c.autosizesClass), (p || u) && e(t, {
                    srcset: p,
                    src: d
                })
            }), t
        }

        function r() {
            d = 0, clearTimeout(u)
        }

        function s(t, a) {
            var i, n, r, s, o, l, u, d;
            if (s = t.parentNode) {
                if (i = s.offsetWidth, n = t.offsetWidth, !(r = n > i ? n : i) && !t._lazysizesWidth)
                    for (; s && s != _.body && !r;) r = s.offsetWidth, s = s.parentNode;
                if (!(d = P(t, "lazybeforesizes", {
                        width: r,
                        polyfill: !a
                    })).defaultPrevented && (r = d.details.width) && r !== t._lazysizesWidth && (!c.onlyLargerSizes || !t._lazysizesWidth || t._lazysizesWidth < r)) {
                    if (t._lazysizesWidth = r, r += "px", t.setAttribute("sizes", r), S.test(s.nodeName || ""))
                        for (o = s.getElementsByTagName("source"), l = 0, u = o.length; u > l; l++) o[l].setAttribute("sizes", r);
                    d.details.polyfill && e(t)
                }
            }
        }
        if (Date.now && window.document.getElementsByClassName) {
            var o, l, c, u, d, p, h, f, g, m, v, y, _ = window.document,
                w = 0,
                b = /^(?:span|div)$/i,
                S = /^picture$/i,
                x = /^script$/i,
                k = /^img$/i,
                C = 10,
                D = /rident|hrome/.test(navigator.userAgent || ""),
                T = window.setImmediate || window.setTimeout,
                M = {},
                F = function(e, t, a) {
                    var i = a ? "addEventListener" : "removeEventListener";
                    e[i]("load", t, !1), e[i]("error", t, !1)
                },
                $ = function(e) {
                    F(e.target, $), n(e.target, !0)
                },
                P = function(e, t, a) {
                    var i = _.createEvent("Event");
                    return i.initEvent(t, !0, !0), i.details = a || {}, e.dispatchEvent(i), i
                };
            _.documentElement.classList ? (g = function(e, t) {
                e.classList.add(t)
            }, m = function(e, t) {
                e.classList.remove(t)
            }, v = function(e, t) {
                return e.classList.contains(t)
            }) : (g = function(e, t) {
                v(e, t) || (e.className += " " + t)
            }, m = function(e, t) {
                var a;
                v(e, t) && (a = new RegExp("(\\s|^)" + t + "(\\s|$)"), e.className = e.className.replace(a, " "))
            }, v = function(e, t) {
                return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
            });
            var I, O, E, A, L, z, j, R, N, H = Date.now(),
                Y = function(e) {
                    w--, clearTimeout(O), e && e.target && F(e.target, Y), (!e || 0 > w || !e.target) && (w = 0)
                },
                B = function() {
                    var e, t, a = function() {
                            t = !1
                        },
                        n = function() {
                            clearTimeout(e), i(), W(), setTimeout(a)
                        };
                    return {
                        debounce: function() {
                            clearTimeout(e), clearTimeout(f), t = !0, e = setTimeout(n, 66)
                        },
                        throttled: function() {
                            var a;
                            t || (t = !0, clearTimeout(e), a = Date.now() - H, a = a > 300 ? 9 : 99, e = setTimeout(n, a))
                        }
                    }
                }(),
                W = function() {
                    var e, a, i;
                    if (I = o.length, H = Date.now(), I) {
                        for (E = window.innerWidth + C, A = window.innerHeight + C, N = -1 * C; I > h; h++)
                            if (e = o[h].getBoundingClientRect(), (R = e.bottom) >= N && (L = e.top) <= A && (j = e.right) >= N && (z = e.left) <= E && (R || j || z || L)) n(o[h]), i = !0;
                            else {
                                if (I - 1 > h && Date.now() - H > 9) {
                                    h++, a = !1, p = setTimeout(W, 4);
                                    break
                                }!i && y && !a && c.preloadAfterLoad && 2 > w && (R || j || z || L || "auto" != o[h].getAttribute(c.sizesAttr)) && (a = o[h])
                            } a && !i && t(a)
                    }
                },
                U = function() {
                    var e, t = function() {
                        clearTimeout(e), r(), V()
                    };
                    return function() {
                        clearTimeout(e), clearTimeout(u), e = setTimeout(t, 99)
                    }
                }(),
                V = function() {
                    var e, t, a, i = l.length;
                    if (i)
                        for (t = Date.now(), a = d || 0, e = a + 3, r(); i > a; a++)
                            if (s(l[a]), a > e && i - 1 > a && Date.now() - t > 9) {
                                d = a + 1, u = setTimeout(V, 4);
                                break
                            }
                },
                q = function() {
                    C = 400, clearTimeout(f), _.addEventListener("load", B.throttled, !0), y = !0
                },
                G = function() {
                    var e = _.body || _.documentElement;
                    c.mutation && (window.MutationObserver ? new MutationObserver(B.throttled).observe(_.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (e.addEventListener("DOMNodeInserted", B.throttled, !0), _.documentElement.addEventListener("DOMAttrModified", B.throttled, !0))), c.hover && _.addEventListener("mouseover", B.throttled, !0), _.addEventListener("focus", B.throttled, !0), window.addEventListener("hashchange", B.throttled, !0), "onmozfullscreenchange" in e ? window.addEventListener("mozfullscreenchange", B.throttled, !0) : "onwebkitfullscreenchange" in e ? window.addEventListener("webkitfullscreenchange", B.throttled, !0) : window.addEventListener("fullscreenchange", B.throttled, !0), c.cssanimation && (_.addEventListener("animationstart", B.throttled, !0), _.addEventListener("transitionstart", B.throttled, !0))
                };
            return setTimeout(function() {
                var e, t = {
                    mutation: !0,
                    hover: !0,
                    cssanimation: !0,
                    lazyClass: "lazyload",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    preloadAfterLoad: !1,
                    onlyLargerSizes: !0
                };
                c = window.lazySizesConfig || {};
                for (e in t) e in c || (c[e] = t[e]);
                o = _.getElementsByClassName(c.lazyClass), l = _.getElementsByClassName(c.autosizesClass), addEventListener("scroll", B.throttled, !1), (_.body || _.documentElement).addEventListener("scroll", B.throttled, !0), _.addEventListener("touchmove", B.throttled, !1), addEventListener("resize", B.debounce, !1), addEventListener("resize", U, !1), /^i|^loade|c/.test(_.readyState) ? G() : _.addEventListener("DOMContentLoaded", G, !1), "complete" == _.readyState ? q() : (addEventListener("load", q, !1), _.addEventListener("readystatechange", B.throttled, !1)), B.throttled(), "lazySizesConfig" in window && (window.lazySizesConfig = null)
            }, _.body ? 9 : 99), {
                updateAllSizes: U,
                updateAllLazy: B.throttled,
                unveilLazy: function(e) {
                    v(e, c.lazyClass) && n(e)
                },
                updateSizes: s,
                updatePolyfill: e
            }
        }
    }),
    function() {
        var e = this,
            t = e._,
            a = {},
            i = Array.prototype,
            n = Object.prototype,
            r = Function.prototype,
            s = i.push,
            o = i.slice,
            l = i.concat,
            c = n.toString,
            u = n.hasOwnProperty,
            d = i.forEach,
            p = i.map,
            h = i.reduce,
            f = i.reduceRight,
            g = i.filter,
            m = i.every,
            v = i.some,
            y = i.indexOf,
            _ = i.lastIndexOf,
            w = Array.isArray,
            b = Object.keys,
            S = r.bind,
            x = function(e) {
                return e instanceof x ? e : this instanceof x ? void(this._wrapped = e) : new x(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.6.0";
        var k = x.each = x.forEach = function(e, t, i) {
            if (null == e) return e;
            if (d && e.forEach === d) e.forEach(t, i);
            else if (e.length === +e.length) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (t.call(i, e[n], n, e) === a) return
            } else
                for (var s = x.keys(e), n = 0, r = s.length; r > n; n++)
                    if (t.call(i, e[s[n]], s[n], e) === a) return;
            return e
        };
        x.map = x.collect = function(e, t, a) {
            var i = [];
            return null == e ? i : p && e.map === p ? e.map(t, a) : (k(e, function(e, n, r) {
                i.push(t.call(a, e, n, r))
            }), i)
        };
        var C = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(e, t, a, i) {
            var n = arguments.length > 2;
            if (null == e && (e = []), h && e.reduce === h) return i && (t = x.bind(t, i)), n ? e.reduce(t, a) : e.reduce(t);
            if (k(e, function(e, r, s) {
                    n ? a = t.call(i, a, e, r, s) : (a = e, n = !0)
                }), !n) throw new TypeError(C);
            return a
        }, x.reduceRight = x.foldr = function(e, t, a, i) {
            var n = arguments.length > 2;
            if (null == e && (e = []), f && e.reduceRight === f) return i && (t = x.bind(t, i)), n ? e.reduceRight(t, a) : e.reduceRight(t);
            var r = e.length;
            if (r !== +r) {
                var s = x.keys(e);
                r = s.length
            }
            if (k(e, function(o, l, c) {
                    l = s ? s[--r] : --r, n ? a = t.call(i, a, e[l], l, c) : (a = e[l], n = !0)
                }), !n) throw new TypeError(C);
            return a
        }, x.find = x.detect = function(e, t, a) {
            var i;
            return D(e, function(e, n, r) {
                return t.call(a, e, n, r) ? (i = e, !0) : void 0
            }), i
        }, x.filter = x.select = function(e, t, a) {
            var i = [];
            return null == e ? i : g && e.filter === g ? e.filter(t, a) : (k(e, function(e, n, r) {
                t.call(a, e, n, r) && i.push(e)
            }), i)
        }, x.reject = function(e, t, a) {
            return x.filter(e, function(e, i, n) {
                return !t.call(a, e, i, n)
            }, a)
        }, x.every = x.all = function(e, t, i) {
            t || (t = x.identity);
            var n = !0;
            return null == e ? n : m && e.every === m ? e.every(t, i) : (k(e, function(e, r, s) {
                return (n = n && t.call(i, e, r, s)) ? void 0 : a
            }), !!n)
        };
        var D = x.some = x.any = function(e, t, i) {
            t || (t = x.identity);
            var n = !1;
            return null == e ? n : v && e.some === v ? e.some(t, i) : (k(e, function(e, r, s) {
                return n || (n = t.call(i, e, r, s)) ? a : void 0
            }), !!n)
        };
        x.contains = x.include = function(e, t) {
            return null != e && (y && e.indexOf === y ? -1 != e.indexOf(t) : D(e, function(e) {
                return e === t
            }))
        }, x.invoke = function(e, t) {
            var a = o.call(arguments, 2),
                i = x.isFunction(t);
            return x.map(e, function(e) {
                return (i ? t : e[t]).apply(e, a)
            })
        }, x.pluck = function(e, t) {
            return x.map(e, x.property(t))
        }, x.where = function(e, t) {
            return x.filter(e, x.matches(t))
        }, x.findWhere = function(e, t) {
            return x.find(e, x.matches(t))
        }, x.max = function(e, t, a) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var i = -1 / 0,
                n = -1 / 0;
            return k(e, function(e, r, s) {
                var o = t ? t.call(a, e, r, s) : e;
                o > n && (i = e, n = o)
            }), i
        }, x.min = function(e, t, a) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            var i = 1 / 0,
                n = 1 / 0;
            return k(e, function(e, r, s) {
                var o = t ? t.call(a, e, r, s) : e;
                n > o && (i = e, n = o)
            }), i
        }, x.shuffle = function(e) {
            var t, a = 0,
                i = [];
            return k(e, function(e) {
                t = x.random(a++), i[a - 1] = i[t], i[t] = e
            }), i
        }, x.sample = function(e, t, a) {
            return null == t || a ? (e.length !== +e.length && (e = x.values(e)), e[x.random(e.length - 1)]) : x.shuffle(e).slice(0, Math.max(0, t))
        };
        var T = function(e) {
            return null == e ? x.identity : x.isFunction(e) ? e : x.property(e)
        };
        x.sortBy = function(e, t, a) {
            return t = T(t), x.pluck(x.map(e, function(e, i, n) {
                return {
                    value: e,
                    index: i,
                    criteria: t.call(a, e, i, n)
                }
            }).sort(function(e, t) {
                var a = e.criteria,
                    i = t.criteria;
                if (a !== i) {
                    if (a > i || void 0 === a) return 1;
                    if (i > a || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var M = function(e) {
            return function(t, a, i) {
                var n = {};
                return a = T(a), k(t, function(r, s) {
                    var o = a.call(i, r, s, t);
                    e(n, o, r)
                }), n
            }
        };
        x.groupBy = M(function(e, t, a) {
            x.has(e, t) ? e[t].push(a) : e[t] = [a]
        }), x.indexBy = M(function(e, t, a) {
            e[t] = a
        }), x.countBy = M(function(e, t) {
            x.has(e, t) ? e[t]++ : e[t] = 1
        }), x.sortedIndex = function(e, t, a, i) {
            for (var n = (a = T(a)).call(i, t), r = 0, s = e.length; s > r;) {
                var o = r + s >>> 1;
                a.call(i, e[o]) < n ? r = o + 1 : s = o
            }
            return r
        }, x.toArray = function(e) {
            return e ? x.isArray(e) ? o.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
        }, x.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
        }, x.first = x.head = x.take = function(e, t, a) {
            return null == e ? void 0 : null == t || a ? e[0] : 0 > t ? [] : o.call(e, 0, t)
        }, x.initial = function(e, t, a) {
            return o.call(e, 0, e.length - (null == t || a ? 1 : t))
        }, x.last = function(e, t, a) {
            return null == e ? void 0 : null == t || a ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
        }, x.rest = x.tail = x.drop = function(e, t, a) {
            return o.call(e, null == t || a ? 1 : t)
        }, x.compact = function(e) {
            return x.filter(e, x.identity)
        };
        var F = function(e, t, a) {
            return t && x.every(e, x.isArray) ? l.apply(a, e) : (k(e, function(e) {
                x.isArray(e) || x.isArguments(e) ? t ? s.apply(a, e) : F(e, t, a) : a.push(e)
            }), a)
        };
        x.flatten = function(e, t) {
            return F(e, t, [])
        }, x.without = function(e) {
            return x.difference(e, o.call(arguments, 1))
        }, x.partition = function(e, t) {
            var a = [],
                i = [];
            return k(e, function(e) {
                (t(e) ? a : i).push(e)
            }), [a, i]
        }, x.uniq = x.unique = function(e, t, a, i) {
            x.isFunction(t) && (i = a, a = t, t = !1);
            var n = a ? x.map(e, a, i) : e,
                r = [],
                s = [];
            return k(n, function(a, i) {
                (t ? i && s[s.length - 1] === a : x.contains(s, a)) || (s.push(a), r.push(e[i]))
            }), r
        }, x.union = function() {
            return x.uniq(x.flatten(arguments, !0))
        }, x.intersection = function(e) {
            var t = o.call(arguments, 1);
            return x.filter(x.uniq(e), function(e) {
                return x.every(t, function(t) {
                    return x.contains(t, e)
                })
            })
        }, x.difference = function(e) {
            var t = l.apply(i, o.call(arguments, 1));
            return x.filter(e, function(e) {
                return !x.contains(t, e)
            })
        }, x.zip = function() {
            for (var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e), a = 0; e > a; a++) t[a] = x.pluck(arguments, "" + a);
            return t
        }, x.object = function(e, t) {
            if (null == e) return {};
            for (var a = {}, i = 0, n = e.length; n > i; i++) t ? a[e[i]] = t[i] : a[e[i][0]] = e[i][1];
            return a
        }, x.indexOf = function(e, t, a) {
            if (null == e) return -1;
            var i = 0,
                n = e.length;
            if (a) {
                if ("number" != typeof a) return i = x.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > a ? Math.max(0, n + a) : a
            }
            if (y && e.indexOf === y) return e.indexOf(t, a);
            for (; n > i; i++)
                if (e[i] === t) return i;
            return -1
        }, x.lastIndexOf = function(e, t, a) {
            if (null == e) return -1;
            var i = null != a;
            if (_ && e.lastIndexOf === _) return i ? e.lastIndexOf(t, a) : e.lastIndexOf(t);
            for (var n = i ? a : e.length; n--;)
                if (e[n] === t) return n;
            return -1
        }, x.range = function(e, t, a) {
            arguments.length <= 1 && (t = e || 0, e = 0), a = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / a), 0), n = 0, r = new Array(i); i > n;) r[n++] = e, e += a;
            return r
        };
        var $ = function() {};
        x.bind = function(e, t) {
            var a, i;
            if (S && e.bind === S) return S.apply(e, o.call(arguments, 1));
            if (!x.isFunction(e)) throw new TypeError;
            return a = o.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return e.apply(t, a.concat(o.call(arguments)));
                $.prototype = e.prototype;
                var n = new $;
                $.prototype = null;
                var r = e.apply(n, a.concat(o.call(arguments)));
                return Object(r) === r ? r : n
            }
        }, x.partial = function(e) {
            var t = o.call(arguments, 1);
            return function() {
                for (var a = 0, i = t.slice(), n = 0, r = i.length; r > n; n++) i[n] === x && (i[n] = arguments[a++]);
                for (; a < arguments.length;) i.push(arguments[a++]);
                return e.apply(this, i)
            }
        }, x.bindAll = function(e) {
            var t = o.call(arguments, 1);
            if (0 === t.length) throw new Error("bindAll must be passed function names");
            return k(t, function(t) {
                e[t] = x.bind(e[t], e)
            }), e
        }, x.memoize = function(e, t) {
            var a = {};
            return t || (t = x.identity),
                function() {
                    var i = t.apply(this, arguments);
                    return x.has(a, i) ? a[i] : a[i] = e.apply(this, arguments)
                }
        }, x.delay = function(e, t) {
            var a = o.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, a)
            }, t)
        }, x.defer = function(e) {
            return x.delay.apply(x, [e, 1].concat(o.call(arguments, 1)))
        }, x.throttle = function(e, t, a) {
            var i, n, r, s = null,
                o = 0;
            a || (a = {});
            var l = function() {
                o = !1 === a.leading ? 0 : x.now(), s = null, r = e.apply(i, n), i = n = null
            };
            return function() {
                var c = x.now();
                o || !1 !== a.leading || (o = c);
                var u = t - (c - o);
                return i = this, n = arguments, 0 >= u ? (clearTimeout(s), s = null, o = c, r = e.apply(i, n), i = n = null) : s || !1 === a.trailing || (s = setTimeout(l, u)), r
            }
        }, x.debounce = function(e, t, a) {
            var i, n, r, s, o, l = function() {
                var c = x.now() - s;
                t > c ? i = setTimeout(l, t - c) : (i = null, a || (o = e.apply(r, n), r = n = null))
            };
            return function() {
                r = this, n = arguments, s = x.now();
                var c = a && !i;
                return i || (i = setTimeout(l, t)), c && (o = e.apply(r, n), r = n = null), o
            }
        }, x.once = function(e) {
            var t, a = !1;
            return function() {
                return a ? t : (a = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, x.wrap = function(e, t) {
            return x.partial(t, e)
        }, x.compose = function() {
            var e = arguments;
            return function() {
                for (var t = arguments, a = e.length - 1; a >= 0; a--) t = [e[a].apply(this, t)];
                return t[0]
            }
        }, x.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, x.keys = function(e) {
            if (!x.isObject(e)) return [];
            if (b) return b(e);
            var t = [];
            for (var a in e) x.has(e, a) && t.push(a);
            return t
        }, x.values = function(e) {
            for (var t = x.keys(e), a = t.length, i = new Array(a), n = 0; a > n; n++) i[n] = e[t[n]];
            return i
        }, x.pairs = function(e) {
            for (var t = x.keys(e), a = t.length, i = new Array(a), n = 0; a > n; n++) i[n] = [t[n], e[t[n]]];
            return i
        }, x.invert = function(e) {
            for (var t = {}, a = x.keys(e), i = 0, n = a.length; n > i; i++) t[e[a[i]]] = a[i];
            return t
        }, x.functions = x.methods = function(e) {
            var t = [];
            for (var a in e) x.isFunction(e[a]) && t.push(a);
            return t.sort()
        }, x.extend = function(e) {
            return k(o.call(arguments, 1), function(t) {
                if (t)
                    for (var a in t) e[a] = t[a]
            }), e
        }, x.pick = function(e) {
            var t = {},
                a = l.apply(i, o.call(arguments, 1));
            return k(a, function(a) {
                a in e && (t[a] = e[a])
            }), t
        }, x.omit = function(e) {
            var t = {},
                a = l.apply(i, o.call(arguments, 1));
            for (var n in e) x.contains(a, n) || (t[n] = e[n]);
            return t
        }, x.defaults = function(e) {
            return k(o.call(arguments, 1), function(t) {
                if (t)
                    for (var a in t) void 0 === e[a] && (e[a] = t[a])
            }), e
        }, x.clone = function(e) {
            return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
        }, x.tap = function(e, t) {
            return t(e), e
        };
        var P = function(e, t, a, i) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
            var n = c.call(e);
            if (n != c.call(t)) return !1;
            switch (n) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var r = a.length; r--;)
                if (a[r] == e) return i[r] == t;
            var s = e.constructor,
                o = t.constructor;
            if (s !== o && !(x.isFunction(s) && s instanceof s && x.isFunction(o) && o instanceof o) && "constructor" in e && "constructor" in t) return !1;
            a.push(e), i.push(t);
            var l = 0,
                u = !0;
            if ("[object Array]" == n) {
                if (l = e.length, u = l == t.length)
                    for (; l-- && (u = P(e[l], t[l], a, i)););
            } else {
                for (var d in e)
                    if (x.has(e, d) && (l++, !(u = x.has(t, d) && P(e[d], t[d], a, i)))) break;
                if (u) {
                    for (d in t)
                        if (x.has(t, d) && !l--) break;
                    u = !l
                }
            }
            return a.pop(), i.pop(), u
        };
        x.isEqual = function(e, t) {
            return P(e, t, [], [])
        }, x.isEmpty = function(e) {
            if (null == e) return !0;
            if (x.isArray(e) || x.isString(e)) return 0 === e.length;
            for (var t in e)
                if (x.has(e, t)) return !1;
            return !0
        }, x.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, x.isArray = w || function(e) {
            return "[object Array]" == c.call(e)
        }, x.isObject = function(e) {
            return e === Object(e)
        }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            x["is" + e] = function(t) {
                return c.call(t) == "[object " + e + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(e) {
            return !(!e || !x.has(e, "callee"))
        }), "function" != typeof /./ && (x.isFunction = function(e) {
            return "function" == typeof e
        }), x.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, x.isNaN = function(e) {
            return x.isNumber(e) && e != +e
        }, x.isBoolean = function(e) {
            return !0 === e || !1 === e || "[object Boolean]" == c.call(e)
        }, x.isNull = function(e) {
            return null === e
        }, x.isUndefined = function(e) {
            return void 0 === e
        }, x.has = function(e, t) {
            return u.call(e, t)
        }, x.noConflict = function() {
            return e._ = t, this
        }, x.identity = function(e) {
            return e
        }, x.constant = function(e) {
            return function() {
                return e
            }
        }, x.property = function(e) {
            return function(t) {
                return t[e]
            }
        }, x.matches = function(e) {
            return function(t) {
                if (t === e) return !0;
                for (var a in e)
                    if (e[a] !== t[a]) return !1;
                return !0
            }
        }, x.times = function(e, t, a) {
            for (var i = Array(Math.max(0, e)), n = 0; e > n; n++) i[n] = t.call(a, n);
            return i
        }, x.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, x.now = Date.now || function() {
            return (new Date).getTime()
        };
        var I = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        I.unescape = x.invert(I.escape);
        var O = {
            escape: new RegExp("[" + x.keys(I.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(I.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(e) {
            x[e] = function(t) {
                return null == t ? "" : ("" + t).replace(O[e], function(t) {
                    return I[e][t]
                })
            }
        }), x.result = function(e, t) {
            if (null != e) {
                var a = e[t];
                return x.isFunction(a) ? a.call(e) : a
            }
        }, x.mixin = function(e) {
            k(x.functions(e), function(t) {
                var a = x[t] = e[t];
                x.prototype[t] = function() {
                    var e = [this._wrapped];
                    return s.apply(e, arguments), j.call(this, a.apply(x, e))
                }
            })
        };
        var E = 0;
        x.uniqueId = function(e) {
            var t = ++E + "";
            return e ? e + t : t
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var A = /(.)^/,
            L = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\t": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            z = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(e, t, a) {
            var i;
            a = x.defaults({}, a, x.templateSettings);
            var n = new RegExp([(a.escape || A).source, (a.interpolate || A).source, (a.evaluate || A).source].join("|") + "|$", "g"),
                r = 0,
                s = "__p+='";
            e.replace(n, function(t, a, i, n, o) {
                return s += e.slice(r, o).replace(z, function(e) {
                    return "\\" + L[e]
                }), a && (s += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), n && (s += "';\n" + n + "\n__p+='"), r = o + t.length, t
            }), s += "';\n", a.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                i = new Function(a.variable || "obj", "_", s)
            } catch (e) {
                throw e.source = s, e
            }
            if (t) return i(t, x);
            var o = function(e) {
                return i.call(this, e, x)
            };
            return o.source = "function(" + (a.variable || "obj") + "){\n" + s + "}", o
        }, x.chain = function(e) {
            return x(e).chain()
        };
        var j = function(e) {
            return this._chain ? x(e).chain() : e
        };
        x.mixin(x), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = i[e];
            x.prototype[e] = function() {
                var a = this._wrapped;
                return t.apply(a, arguments), "shift" != e && "splice" != e || 0 !== a.length || delete a[0], j.call(this, a)
            }
        }), k(["concat", "join", "slice"], function(e) {
            var t = i[e];
            x.prototype[e] = function() {
                return j.call(this, t.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function() {
            return x
        })
    }.call(this),
    function() {
        "use strict";
        var e, t, a, i, n = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            },
            r = function(t) {
                throw {
                    name: "SyntaxError",
                    message: t,
                    at: e,
                    text: a
                }
            },
            s = function() {
                return t = a.charAt(e), ++e, t
            },
            o = function() {
                var e, a = "";
                for ("-" === t && (a = "-", s()); t >= "0" && t <= "9";) a += t, s();
                if ("." === t)
                    for (a += "."; s() && t >= "0" && t <= "9";) a += t;
                if ("e" === t || "E" === t)
                    for (a += t, s(), "-" !== t && "+" !== t || (a += t, s()); t >= "0" && t <= "9";) a += t, s();
                if (e = +a, isFinite(e)) return e;
                r("Bad number")
            },
            l = function() {
                var e, a, i, o = "";
                if ('"' === t)
                    for (; s();) {
                        if ('"' === t) return s(), o;
                        if ("\\" === t)
                            if (s(), "u" === t) {
                                for (i = 0, a = 0; a < 4 && (e = parseInt(s(), 16), isFinite(e)); a += 1) i = 16 * i + e;
                                o += String.fromCharCode(i)
                            } else {
                                if ("string" != typeof n[t]) break;
                                o += n[t]
                            }
                        else o += t
                    }
                r("Bad string")
            },
            c = function() {
                for (; t && t <= " ";) s()
            },
            u = function() {
                switch (t) {
                    case "t":
                        return s(), s(), s(), s(), !0;
                    case "f":
                        return s(), s(), s(), s(), s(), !1;
                    case "n":
                        return s(), s(), s(), s(), null
                }
                r("Unexpected '" + t + "'")
            },
            d = function() {
                var e = [];
                if ("[" === t) {
                    if (s(), c(), "]" === t) return s(), e;
                    for (; t;) {
                        if (e.push(i()), c(), "]" === t) return s(), e;
                        s(), c()
                    }
                }
                r("Bad array")
            },
            p = function() {
                var e, a = {};
                if ("{" === t) {
                    if (s(), c(), "}" === t) return s(), a;
                    for (; t;) {
                        if (e = l(), c(), s(), a[e] = i(), c(), "}" === t) return s(), a;
                        s(), c()
                    }
                }
                r("Bad object")
            };
        i = function() {
            switch (c(), t) {
                case "{":
                    return p();
                case "[":
                    return d();
                case '"':
                    return l();
                case "-":
                    return o();
                default:
                    return t >= "0" && t <= "9" ? o() : u()
            }
        };
        var h = function(n, s) {
            var o;
            return a = n, e = 0, t = " ", o = i(), c(), t && r("Syntax error"), "function" == typeof s ? function e(t, a) {
                var i, n, r = t[a];
                if (r && "object" == typeof r)
                    for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (void 0 !== (n = e(r, i)) ? r[i] = n : delete r[i]);
                return s.call(t, a, r)
            }({
                "": o
            }, "") : o
        };
        "undefined" != typeof module && void 0 !== module.exports ? module.exports = h : window.json_parse = h
    }(),
    function(e, t, a) {
        var i = e,
            n = t,
            r = a;
        window.Store = window.Store || {
            translations: {}
        };
        var s = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iPhone: function() {
                return navigator.userAgent.match(/iPhone|iPod/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            Symbian: function() {
                return navigator.userAgent.match(/Symbian/i)
            },
            phone: function() {
                return s.Android() || s.BlackBerry() || s.iPhone() || s.Opera() || s.Windows() || s.Symbian()
            },
            any: function() {
                return s.Android() || s.BlackBerry() || s.iOS() || s.Opera() || s.Windows() || s.Symbian()
            }
        };
        window.isMobile = s;
        var o = {
            userFilters: {
                categories: [],
                price: [0, 0, 0, 0],
                colors: [],
                sizes: [],
                tags: {
                    default: [],
                    brand: []
                },
                properties: {},
                vat: null,
                extra: {},
                hide: !1,
                version: 6
            },
            backupInputs: {},
            filterMapNextId: 1,
            filterMapStringToId: {},
            filterMapIdToString: {},
            filterArrayMapStrings: [],
            filterPropertyOptionElementData: {},
            filterEnabledMap: {},
            filteredProducts: [],
            filteredVariationsMap: {},
            filteredProductsCountByFilter: {},
            filteredObjectAll: {},
            curIndex: 0,
            data: "",
            renderProductsCallCount: 0,
            $window: n(window),
            $document: n(document),
            $productList: void 0,
            productListOffsetSaveable: !0,
            registeredFilters: [],
            select2Loaded: !1,
            select2PaginationLoaded: !1,
            JSONToLoad: {
                count: 0,
                productList: !1,
                companyPrices: !1
            },
            JSONLoaded: {
                productList: !1,
                companyPrices: !1
            },
            JSONBuffer: {
                productList: void 0,
                companyPrices: void 0
            },
            complaints: [],
            columnsTemplatesCache: {},
            settings: {
                userFiltersVersion: 6,
                debug: !1,
                productsAtOnce: 16,
                pageReloadScrollProductsMax: 150,
                bufferPx: 1024,
                pixelsFromNavToBottom: void 0,
                ajaxLoaderSelector: "#ajax-loader",
                reachEndSelector: "#reach-end",
                noProductsSelector: "#no-products-info",
                noProductsFunction: void 0,
                paginationSelector: "#product-list-pagination",
                paginationTemplateSelector: "#percolator-pagination-template",
                endOfInit: void 0,
                emptyOptionValue: "",
                columnsQty: "qty3",
                columnsTemplates: {
                    qty1: "#percolator-product-template",
                    qty2: "#percolator-product-template",
                    qty3: "#percolator-product-template",
                    qty4: "#percolator-product-template"
                },
                dateFormat: "DD.MM.YYYY",
                lang: n("html").attr("lang"),
                useSessionStorage: !0,
                callBackBeforeRenderProducts: void 0,
                callBackBeforeRegisterFilter: void 0,
                callBackBeforeCreateFilter: void 0,
                callBackAfterRenderProducts: void 0,
                callBackAfterFiltersHaveBeenCreated: void 0,
                callBackAfterFiltersHaveBeenUpdated: void 0,
                callbackAfterUserFiltersLoadedFromStorage: void 0,
                callBackAfterProductsFiltered: void 0,
                productTemplateSelector: "#percolator-product-template",
                create$elForProducts: !1,
                sortingMode: "nameAsc",
                sortingSelector: "#percolator-sorting",
                sortType: "select",
                customSortingSelector: !1,
                callbackCustomSort: void 0,
                totalAmountSelector: "#percolator-total-amount",
                filterInputIdPrefix: "percolator-filter",
                categoriesSelector: "#percolator-categories",
                catBtnTemplateSelector: "#percolator-category-template",
                categoriesType: "checkbox",
                colorsSelector: "#percolator-colors",
                colorBtnTemplateSelector: "#percolator-color-template",
                colorsType: "checkbox",
                sizesSelector: "#percolator-sizes",
                sizeBtnTemplateSelector: "#percolator-size-template",
                sizesType: "checkbox",
                tagMode: "any",
                tagsSelector: "#tags",
                tagsSelectorBrand: "#tags-brand",
                tagBtnTemplateSelector: "#percolator-tag-template",
                tagsType: "select",
                propertiesSelector: "#percolator-properties",
                propertiesIdPrefix: "percolator-properties",
                propertiesBtnTemplateSelector: "#percolator-property-template",
                optionsBtnTemplateSelector: "#percolator-option-template",
                propertiesType: "checkbox",
                priceRangeSelector: "#percolator-price-range",
                priceHighSelector: "#percolator-price-high",
                priceLowSelector: "#percolator-price-low",
                priceSteps: 5,
                discountedSelector: "#percolator-discounted",
                discountedBtnTemplateSelector: "#percolator-discounted-template",
                discountedType: "checkbox",
                isNewSelector: "#percolator-isNew",
                isNewBtnTemplateSelector: "#percolator-isNew-template",
                isNewType: "checkbox",
                variationBuyableSelector: "#percolator-variationBuyable",
                variationBuyableBtnTemplateSelector: "#percolator-variationBuyable-template",
                variationBuyableType: "checkbox",
                customProductFilterSelector: "#percolator-customProductFilter",
                customProductFilterBtnTemplateSelector: "#percolator-customProductFilter-template",
                customProductFilterType: "checkbox",
                useDynamicExtraFilters: !1,
                useDefaultPriceSlider: !0,
                createPriceRange: void 0,
                customProductsFilters: [],
                customProductFilterFunctions: {},
                currencySign: "€",
                useDecimals: !0,
                decimalSeparator: ",",
                currencyBeforePrice: !1,
                currencySeparator: " ",
                useLocalCompanyPrices: !1,
                productListSelector: "#percolator-target",
                useChangeableColumns: !1,
                columnsSelector: "#viewMode",
                columnsSelectorType: "link",
                underscoreTemplateSymbols: "Mustache",
                priceWithVat: !0,
                vatSelector: ".vat-selector",
                vatSelectorType: "toggledLink",
                filterParentSelector: ".checkbox-label",
                useCompatibleAppend: !1,
                productLimit: [],
                currentAjaxUrl: void 0,
                currentBaseUri: "/",
                currentProductListContext: "category",
                currentProductListContextIds: [],
                dataAdapterPropertyClass: "percolator-properties-select",
                createDataAdaptersFor: {
                    properties: !1
                },
                dataAdapterYearListPropertyIds: [],
                disableInputsWhenFilterSelected: !1,
                removeSelectOptionsInsteadOfDisabling: !1,
                useInfiniteScroll: !0,
                showMoreScrollOffset: 50,
                showMoreSelector: "#product-list-show-more",
                showMoreSelectorBtn: "#product-list-show-more-button",
                showMoreBtnTemplateSelector: "#percolator-show-more-template",
                usePagination: !1,
                useMinHeightCalculationInProductList: !0,
                showFilteredProductsCount: !1
            },
            plugins: {
                percolatorDelayed: {
                    settings: {
                        request_ttl: 10,
                        verbosity: !1,
                        enabled: !1
                    },
                    delayedProductInformation: {},
                    delayedPollInformation: {},
                    displayCurrentPollQueue: function() {
                        console.log(o.plugins.percolatorDelayed.delayedPollInformation)
                    },
                    echoMessage: function(e) {
                        o.plugins.percolatorDelayed.settings.verbosity && console.log(e)
                    },
                    ajaxRequestErrorCallback: function() {
                        o.plugins.percolatorDelayed.echoMessage("PercolatorDelayed ajax error callback")
                    },
                    ajaxRequestSuccessCallback: function(e) {
                        o.plugins.percolatorDelayed.echoMessage("Percolatordelayed ajax success callback")
                    },
                    afterRequestUrlCreated: function(e) {},
                    configurePollCycle: function(e) {
                        var t = (new Date).getTime() / 1e3,
                            a = o.plugins.percolatorDelayed.settings.request_ttl;
                        return o.plugins.percolatorDelayed.delayedPollInformation[e.poll_identifier] instanceof Object ? (o.plugins.percolatorDelayed.delayedPollInformation[e.poll_identifier].poll_count++, t <= o.plugins.percolatorDelayed.delayedPollInformation[e.poll_identifier].end_ttl) : (void 0 !== e.poll_ttl && (a = e.poll_ttl), o.plugins.percolatorDelayed.delayedPollInformation[e.poll_identifier] = {
                            start_time: t,
                            end_ttl: t + a,
                            poll_url: e.poll_url,
                            poll_after: e.poll_after,
                            poll_count: 0
                        }, !0)
                    },
                    startPollCycle: function(e) {
                        o.plugins.percolatorDelayed.echoMessage("startPollCycle"), setTimeout(function() {
                            o.plugins.percolatorDelayed.echoMessage("...run poll"), o.plugins.percolatorDelayed.doFetchDetailedProductInformationAjax(e.poll_url)
                        }, 1e3 * e.poll_after, e)
                    },
                    doFetchDetailedProductInformationAjax: function(e) {
                        o.plugins.percolatorDelayed.echoMessage("fetchDetailedProductInfo", e), n.ajax({
                            method: "GET",
                            dataType: "json",
                            url: e
                        }).done(function(e) {
                            e.poll && e.poll.poll_identifier && o.plugins.percolatorDelayed.configurePollCycle(e.poll) && o.plugins.percolatorDelayed.startPollCycle(o.plugins.percolatorDelayed.delayedPollInformation[e.poll.poll_identifier]), o.plugins.percolatorDelayed.ajaxRequestSuccessCallback(e)
                        }).fail(function() {
                            o.plugins.percolatorDelayed.ajaxRequestErrorCallback()
                        })
                    },
                    fetchDetailedProductInformation: function(e, t) {
                        if (o.plugins.percolatorDelayed.settings.enabled) {
                            var a = o.plugins.percolatorDelayed.createRequestUrl(e, t);
                            o.plugins.percolatorDelayed.doFetchDetailedProductInformationAjax(a)
                        }
                    },
                    createRequestUrl: function(e, t) {
                        if (o.plugins.percolatorDelayed.settings.enabled) {
                            var a = e.map(function(e) {
                                    return e.id
                                }).sort(function(e, t) {
                                    return e - t
                                }).join(","),
                                i = t.sort(function(e, t) {
                                    return e - t
                                }).join(","),
                                n = o.functions.getCookie("company"),
                                r = {
                                    url: o.settings.currentBaseUri + "percolator/query?company_hash=" + n + "&pids=" + a + "&vids=" + i
                                };
                            return o.plugins.percolatorDelayed.afterRequestUrlCreated(r), r.url
                        }
                    }
                }
            }
        };
        o.beforeActionEvent = function() {
            this.allowDefault = !0
        }, o.beforeActionEvent.prototype.preventDefaultAction = function() {
            this.allowDefault = !1
        }, o.afterActionEvent = function() {
            this.defaultActionExecuted = !0
        }, o.functions = {
            changeUnderscoreTemplateSymbols: function() {
                "Mustache" === o.settings.underscoreTemplateSymbols ? i.templateSettings = {
                    evaluate: /\{\{(.+?)}}/g,
                    interpolate: /\{\{=(.+?)}}/g,
                    escape: /\{\{-(.+?)}}/g
                } : "Old" === o.settings.underscoreTemplateSymbols && (i.templateSettings = {
                    evaluate: /<#(.+?)#>/g,
                    interpolate: /<#=(.+?)#>/g,
                    escape: /<#-(.+?)#>/g
                })
            },
            setData: function(e) {
                return o.data = e, i.size(o.data) > 0
            },
            setSettings: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (t in o.settings ? o.settings[t] = e[t] : (o.settings.debug || e.debug) && console.log("No setting called: " + t));
                void 0 === o.$productList && (o.$productList = n(o.settings.productListSelector)), o.settings.useCompatibleAppend || HTMLElement.prototype.insertAdjacentHTML || (o.settings.useCompatibleAppend = !0)
            },
            getCurrentTimestampInSeconds: function() {
                return Math.floor(Date.now() / 1e3)
            },
            formatDateFromSeconds: function(e) {
                switch (o.settings.lang) {
                    case "FI":
                    case "fi":
                    case "SV":
                    case "sv":
                        t = ".";
                        break;
                    default:
                        var t = "/"
                }
                var a = new Date(1e3 * e);
                return ("0" + a.getDate()).slice(-2) + t + ("0" + (a.getMonth() + 1)).slice(-2) + t + a.getFullYear()
            },
            getUrlParameters: function(e, t, a) {
                var i = t.length ? t : window.location.search,
                    n = "",
                    r = !0;
                if (void 0 === i.split("?")[1]) return !1;
                n = i.split("?")[1].split("&");
                for (var s = 0; s < n.length; ++s) {
                    var o = n[s].split("=");
                    if (o[0] === e) return r = !0, a ? decodeURIComponent(o[1]) : o[1];
                    r = !1
                }
                return !!r && void 0
            },
            _getSearchParameters: void 0,
            getSearchParameters: function() {
                if (void 0 === o.functions._getSearchParameters) {
                    var e = window.location.search.substr(1);
                    o.functions._getSearchParameters = null !== e && "" !== e ? o.functions.transformToAssocArray(e) : {}
                }
                return o.functions._getSearchParameters
            },
            _getHashParameters: void 0,
            getHashParameters: function() {
                if (void 0 === o.functions._getHashParameters) {
                    var e = window.location.hash.substr(1);
                    o.functions._getHashParameters = null !== e && "" !== e ? o.functions.transformToAssocArray(e) : {}
                }
                return o.functions._getHashParameters
            },
            transformToAssocArray: function(e) {
                for (var t = {}, a = e.split("&"), i = 0; i < a.length; ++i) {
                    var n = a[i].split("=");
                    t[n[0]] = n[1]
                }
                return t
            },
            forceRefresh: function() {
                return !!o.settings.currentAjaxUrl && (n.ajax({
                    type: "GET",
                    url: o.settings.currentAjaxUrl + (o.settings.currentAjaxUrl.indexOf("?") > -1 ? "&" : "?") + "refresh=true",
                    dataType: "text",
                    success: function() {
                        location.reload(!1)
                    },
                    error: function(e, t, a) {
                        console.log(e.status + " " + a)
                    }
                }), !0)
            },
            getCookie: function(e) {
                for (var t = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; ++i) {
                    for (var n = a[i];
                        " " === n.charAt(0);) n = n.substring(1);
                    if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                }
                return ""
            },
            setVatCookie: function(e) {
                var t = new Date;
                t.setTime(t.getTime() + 6048e5);
                var a = "expires=" + t.toUTCString();
                document.cookie = "store_show_vat=" + e + "; " + a + ";path=/"
            },
            parseJSONObject: function(e) {
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return "debug" in o.functions.getSearchParameters() && alert(e.message), {}
                }
            },
            union: function() {
                var e, t, a, i = {},
                    n = 0,
                    r = 0;
                arguments.length > 0 && (r = arguments[0].length), e = new Array(r);
                for (var s = 0; s < arguments.length; ++s) {
                    t = arguments[s];
                    for (var o = 0; o < t.length; ++o)(a = t[o]) in i || (i[a] = !0, e[n++] = a)
                }
                return e.length = n, e
            },
            merge: function() {
                var e, t, a = 0,
                    i = 0;
                for (e = 0; e < arguments.length; ++e) a += arguments[e].length;
                var n, r, s = new Array(a);
                for (e = 0; e < arguments.length; ++e)
                    for (n = arguments[e], t = 0; t < n.length; ++t) r = n[t], s[i++] = r;
                return s
            },
            difference: function() {
                var e, t, a, i, n, r, s = {},
                    o = {},
                    l = 0,
                    c = [],
                    u = 0;
                if (arguments.length > 0 && (n = arguments[0]).length > 0) {
                    for (c = new Array(n.length), a = 0; a < n.length; ++a)(r = n[a]) in o || (o[r] = !0, c[u++] = r);
                    c.length = u
                }
                for (t = 1; t < arguments.length; ++t) {
                    for (n = arguments[t], s = {}, a = 0; a < n.length; ++a)(r = n[a]) in s || (s[r] = !0);
                    for (i = 0; i < c.length; ++i)(r = c[i]) in s && (o[r] = !1)
                }
                for (e = new Array(c.length), i = 0; i < c.length; ++i) o[r = c[i]] && (e[l++] = r);
                return e.length = l, e
            },
            intersection: function() {
                var e, t, a, i, n, r, s = [],
                    o = {};
                for (r = arguments.length - 1, a = arguments[0].length, t = 0, e = 0; e <= r; e++)(i = arguments[e].length) < a && (t = e, a = i);
                for (e = 0; e <= r; e++) {
                    n = arguments[i = e === t ? 0 : e || t].length;
                    for (var l = 0; l < n; l++) {
                        var c = arguments[i][l];
                        o[c] === e - 1 ? e === r ? (s.push(c), o[c] = 0) : o[c] = e : 0 === e && (o[c] = 0)
                    }
                }
                return s
            },
            each: function(e, t) {
                for (var a = {
                        value: void 0,
                        index0: 0,
                        index1: 1,
                        length: e.length
                    }; a.index0 < a.length; ++a.index0, ++a.index1) a.value = e[a.index0], t(a)
            },
            filterValuesByMap: function(e, t) {
                var a, i, n = [],
                    r = 0;
                if (e.length) {
                    for (n = new Array(e.length), a = 0; a < e.length; ++a)(i = e[a]) in t && (n[r++] = i);
                    n.length = r
                }
                return n
            },
            scrollTo: function(e) {
                e && (o.settings.useMinHeightCalculationInProductList && o.$productList.css("min-height", e + "px"), n("html, body").animate({
                    scrollTop: e
                }, 800, "swing"))
            },
            append: function(e, t) {
                o.settings.useCompatibleAppend ? e.append(t) : e[0].insertAdjacentHTML("beforeend", t)
            },
            render: function(e, t) {
                var a;
                if (t || (t = o.settings.productsAtOnce), o.settings.debug && console.log("*********** RENDER START  **********"), void 0 !== o.settings.ajaxLoaderSelector && n(o.settings.ajaxLoaderSelector).hide(), n(o.settings.totalAmountSelector).text(e.length + " " + (1 !== e.length ? Store.translations.products_amount_plural : Store.translations.products_amount_single)), -1 !== t) {
                    var i = 0;
                    if (o.settings.usePagination) {
                        var r = o.functions.getHashParameters();
                        void 0 !== r.page && (i = (parseInt(r.page) - 1) * t)
                    }
                    if (0 === o.curIndex || o.settings.usePagination) {
                        if (o.functions.removeOldTemplates(e), t >= e.length && e.length > 0 ? (n(o.settings.reachEndSelector).show(), o.settings.useInfiniteScroll || n(o.settings.showMoreSelector).hide()) : (n(o.settings.reachEndSelector).hide(), o.settings.useInfiniteScroll || n(o.settings.showMoreSelector).show()), o.$productList.empty(), 0 === e.length) return n(o.settings.noProductsSelector).show(), o.settings.useInfiniteScroll || n(o.settings.showMoreSelector).hide(), !1;
                        n(o.settings.noProductsSelector).hide(), o.settings.useInfiniteScroll || n(o.settings.showMoreSelector).show(), a = e.slice(i, i + t)
                    } else a = e.slice(o.curIndex, o.curIndex + t);
                    o.curIndex >= e.length ? (o.curIndex = e.length, e.length > 0 && (n(o.settings.reachEndSelector).show(), o.settings.useInfiniteScroll || n(o.settings.showMoreSelector).hide()), o.settings.debug && console.log("*********** RENDER END  **********")) : o.functions.renderProducts(a).done(function() {
                        if (o.settings.debug && console.log("*********** RENDER END **********"), o.settings.usePagination ? o.functions.createPagination(r) : o.settings.useInfiniteScroll || (o.functions.createShowMore(), o.curIndex >= e.length && e.length > 0 && n(o.settings.reachEndSelector).show()), 1 === o.renderProductsCallCount) {
                            var t = o.functions.readFromStorage(window.location.href) || null;
                            null !== t && o.functions.scrollTo(t)
                        }
                    })
                } else o.functions.renderProducts(e).done(function() {
                    o.settings.debug && console.log("*********** RENDER OF ALL END:  **********")
                })
            },
            removeOldTemplates: function(e) {
                for (var t = n.Deferred(), a = 0; a < e.length; ++a) e[a].hasOwnProperty("el") && delete e[a].el;
                return t.resolve(), t.promise()
            },
            enrichProduct: function(e) {
                var t = e;
                t.base_price_is_secondary_units ? (t.secondary_unit_price_discounted_with_vat = Math.round(null !== t.discounted_per_secondary_with_vat ? t.discounted_per_secondary_with_vat : t.original_per_secondary_with_vat), t.secondary_unit_price_discounted_no_vat = Math.round(null !== t.discounted_per_secondary_no_vat ? t.discounted_per_secondary_no_vat : t.original_per_secondary_no_vat), t.secondary_unit_price_original_with_vat = Math.round(t.original_per_secondary_with_vat), t.secondary_unit_price_original_no_vat = Math.round(t.original_per_secondary_no_vat)) : (t.secondary_unit_price_discounted_with_vat = Math.round((null !== t.discounted_with_vat ? t.discounted_with_vat : t.original_with_vat) / t.secondary_unit_multiplier), t.secondary_unit_price_discounted_no_vat = Math.round((null !== t.discounted_no_vat ? t.discounted_no_vat : t.original_no_vat) / t.secondary_unit_multiplier), t.secondary_unit_price_original_with_vat = Math.round(t.original_with_vat / t.secondary_unit_multiplier), t.secondary_unit_price_original_no_vat = Math.round(t.original_no_vat / t.secondary_unit_multiplier)), t.secondary_unit_price_lowest_discounted_with_vat = Math.round(t.discounted_lowest_price_with_vat / t.secondary_unit_multiplier), t.secondary_unit_price_lowest_discounted_no_vat = Math.round(t.discounted_lowest_price_no_vat / t.secondary_unit_multiplier), t.secondary_unit_price_lowest_original_with_vat = Math.round(t.original_lowest_price_with_vat / t.secondary_unit_multiplier), t.secondary_unit_price_lowest_original_no_vat = Math.round(t.original_lowest_price_no_vat / t.secondary_unit_multiplier), t.discount_percent = t.discounted_lowest_price_with_vat < t.original_lowest_price_with_vat ? Math.round(100 * (1 - t.discounted_lowest_price_with_vat / t.original_lowest_price_with_vat)) : 0, t.tagObjects = [], i.each(t.tags, function(e) {
                    t.tagObjects.push(o.data.tags[e])
                });
                var a, n = o.userFilters.colors.length > 0 || o.userFilters.sizes.length > 0,
                    r = {},
                    s = {},
                    l = 0,
                    c = 0;
                return i.each(t.option_groups, function(e) {
                    o.data.variation_option_groups[e].required && ++l
                }), t.variationObjects = [], i.each(t.variations, function(e) {
                    var l = i.clone(o.data.variations[e]);
                    l.is_buyable = l.buyable_out_of_stock || l.stock >= t.min_order_qty, a = n && e in o.filteredVariationsMap, l.matchesFilter = a, !a || l.option_group in r ? l.selected = !1 : (l.selected = !0, r[l.option_group] = !0), t.variationObjects.push(l), !l.is_buyable || !l.option_group_required || l.option_group in s || (s[l.option_group] = !0, ++c)
                }), t.billing_periodsObjects = [], i.each(t.billing_periods, function(e) {
                    t.billing_periodsObjects.push(o.data.billing_periods[e])
                }), t.is_buyable = t.variations.length ? l === c : t.buyable_out_of_stock || t.stock >= t.min_order_qty, t.propertyOptionObjects = [], i.each(t.options, function(e) {
                    t.propertyOptionObjects.push(o.data.category_property_options[e])
                }), t
            },
            renderProducts: function(e) {
                var t, a = n.Deferred(),
                    r = "",
                    s = !0;
                if (o.settings.callBackBeforeRenderProducts && ((t = new o.beforeActionEvent).products = e, o.settings.callBackBeforeRenderProducts(t), t.allowDefault || (s = !1)), s) {
                    var l = [];
                    i.each(e, function(e) {
                        for (var t = 0; t < e.variations.length; t++) l.push(e.variations[t])
                    }), o.plugins.percolatorDelayed.fetchDetailedProductInformation(e, l), i.each(e, function(e) {
                        e = o.functions.enrichProduct(e), o.functions.createProductMarkup(e).done(function() {
                            r += e.el
                        })
                    }), o.functions.append(o.$productList, r), o.curIndex += e.length
                }
                return ++o.renderProductsCallCount, o.settings.callBackAfterRenderProducts && ((t = new o.afterActionEvent).products = e, t.defaultActionExecuted = s, o.settings.callBackAfterRenderProducts(t)), a.resolve(), a.promise()
            },
            createProductMarkup: function(e) {
                var t, a, r, s = n.Deferred();
                (a = o.settings.useChangeableColumns ? o.settings.columnsQty + "" : "default") in o.columnsTemplatesCache ? r = o.columnsTemplatesCache[a] : (t = "default" === a ? n(o.settings.productTemplateSelector).html() : n(o.settings.columnsTemplates[a]).html(), r = i.template(t), o.columnsTemplatesCache[a] = r);
                var l = r({
                    product: e
                });
                return o.settings.create$elForProducts ? i.extend(e, {
                    el: l,
                    $el: n(l)
                }) : i.extend(e, {
                    el: l
                }), s.resolve(), s.promise()
            },
            changeColumnsQty: function(e) {
                var t = !1;
                return "number" == typeof e && e % 1 == 0 ? (o.settings.columnsQty = "qty" + e, t = !0) : o.settings.debug && console.log("Error:cannot change lineColumnsQty. Qty is not integer"), t
            },
            getUniqueArrayValuesWithAttribute: function(e, t) {
                var a = {},
                    n = [];
                return i.each(e, function(e) {
                    if (null !== e[t]) {
                        var i = e[t];
                        !i.length || i in a || (n.push(e), a[i] = !0)
                    }
                }), n
            },
            sortArrayByColumn: function(e, t) {
                e.sort(function(e, a) {
                    return e[t] < a[t] ? -1 : a[t] < e[t] ? 1 : 0
                })
            },
            sortArrayBy2Columns: function(e, t, a) {
                e.sort(function(e, i) {
                    return e[t] < i[t] ? -1 : i[t] < e[t] ? 1 : e[a] < i[a] ? -1 : i[a] < e[a] ? 1 : 0
                })
            },
            sortArray: function(e, t) {
                var a, i;
                switch ("search" === o.settings.currentProductListContext || "rankAsc" !== t && "rankDesc" !== t || (t = "rankAsc" === t ? "categoryAsc" : "categoryDesc"), t) {
                    case "priceDesc":
                        e.sort(function(e, t) {
                            return o.settings.priceWithVat ? (a = e.discounted_lowest_price_with_vat, i = t.discounted_lowest_price_with_vat) : (a = e.discounted_lowest_price_no_vat, i = t.discounted_lowest_price_no_vat), a < i ? -1 : a > i ? 1 : 0
                        }), e.reverse();
                        break;
                    case "priceAsc":
                        e.sort(function(e, t) {
                            return o.settings.priceWithVat ? (a = e.discounted_lowest_price_with_vat, i = t.discounted_lowest_price_with_vat) : (a = e.discounted_lowest_price_no_vat, i = t.discounted_lowest_price_no_vat), a < i ? -1 : a > i ? 1 : 0
                        });
                        break;
                    case "rankAsc":
                        e.sort(function(e, t) {
                            return e.search_sort_pos < t.search_sort_pos ? -1 : e.search_sort_pos > t.search_sort_pos ? 1 : 0
                        });
                        break;
                    case "rankDesc":
                        e.sort(function(e, t) {
                            return e.search_sort_pos < t.search_sort_pos ? -1 : e.search_sort_pos > t.search_sort_pos ? 1 : 0
                        }), e.reverse();
                        break;
                    case "categoryAsc":
                        e.sort(function(e, t) {
                            return e.category_sort_pos < t.category_sort_pos ? -1 : e.category_sort_pos > t.category_sort_pos ? 1 : 0
                        });
                        break;
                    case "categoryDesc":
                        e.sort(function(e, t) {
                            return e.category_sort_pos < t.category_sort_pos ? -1 : e.category_sort_pos > t.category_sort_pos ? 1 : 0
                        }), e.reverse();
                        break;
                    case "categoryInterleavedAsc":
                        e.sort(function(e, t) {
                            return e.category_sort_pos_interleaved < t.category_sort_pos_interleaved ? -1 : e.category_sort_pos_interleaved > t.category_sort_pos_interleaved ? 1 : 0
                        });
                        break;
                    case "categoryInterleavedDesc":
                        e.sort(function(e, t) {
                            return e.category_sort_pos_interleaved < t.category_sort_pos_interleaved ? -1 : e.category_sort_pos_interleaved > t.category_sort_pos_interleaved ? 1 : 0
                        }), e.reverse();
                        break;
                    case "codeAsc":
                        e.sort(function(e, t) {
                            return e.code < t.code ? -1 : e.code > t.code ? 1 : 0
                        });
                        break;
                    case "codeDesc":
                        e.sort(function(e, t) {
                            return e.code < t.code ? -1 : e.code > t.code ? 1 : 0
                        }), e.reverse();
                        break;
                    case "createdAsc":
                        e.sort(function(e, t) {
                            return e.created === t.created ? e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0 : e.created < t.created ? -1 : e.created > t.created ? 1 : 0
                        });
                        break;
                    case "createdDesc":
                        e.sort(function(e, t) {
                            return e.created === t.created ? e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0 : e.created < t.created ? -1 : e.created > t.created ? 1 : 0
                        }), e.reverse();
                        break;
                    case "modifiedAsc":
                        e.sort(function(e, t) {
                            return e.modified === t.modified ? e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0 : e.modified < t.modified ? -1 : e.modified > t.modified ? 1 : 0
                        });
                        break;
                    case "modifiedDesc":
                        e.sort(function(e, t) {
                            return e.modified === t.modified ? e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0 : e.modified < t.modified ? -1 : e.modified > t.modified ? 1 : 0
                        }), e.reverse();
                        break;
                    case "nameDesc":
                        e.sort(function(e, t) {
                            return e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0
                        }), e.reverse();
                        break;
                    case "newAsc":
                        e.sort(function(e, t) {
                            return e.is_new && t.is_new ? e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0 : e.is_new && !t.is_new ? -1 : !e.is_new && t.is_new ? 1 : e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0
                        });
                        break;
                    case "newDesc":
                        e.sort(function(e, t) {
                            return e.is_new && t.is_new ? e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0 : e.is_new && !t.is_new ? -1 : !e.is_new && t.is_new ? 1 : e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0
                        }), e.reverse();
                        break;
                    case "newPositionAsc":
                        e.sort(function(e, t) {
                            return e.is_new && t.is_new ? e.category_sort_pos < t.category_sort_pos ? -1 : e.category_sort_pos > t.category_sort_pos ? 1 : 0 : e.is_new && !t.is_new ? -1 : !e.is_new && t.is_new ? 1 : e.category_sort_pos < t.category_sort_pos ? -1 : e.category_sort_pos > t.category_sort_pos ? 1 : 0
                        });
                        break;
                    case "newPositionDesc":
                        e.sort(function(e, t) {
                            return e.is_new && t.is_new ? e.category_sort_pos < t.category_sort_pos ? -1 : e.category_sort_pos > t.category_sort_pos ? 1 : 0 : e.is_new && !t.is_new ? -1 : !e.is_new && t.is_new ? 1 : e.category_sort_pos < t.category_sort_pos ? -1 : e.category_sort_pos > t.category_sort_pos ? 1 : 0
                        }), e.reverse();
                        break;
                    case "stockAsc":
                        e.sort(function(e, t) {
                            return e.stock < t.stock ? -1 : e.stock > t.stock ? 1 : 0
                        });
                        break;
                    case "stockDesc":
                        e.sort(function(e, t) {
                            return e.stock < t.stock ? -1 : e.stock > t.stock ? 1 : 0
                        }), e.reverse();
                        break;
                    case "nameAsc":
                    default:
                        "custom" === t && o.settings.callbackCustomSort ? e.sort(o.settings.callbackCustomSort) : e.sort(function(e, t) {
                            return e.name_sort_pos < t.name_sort_pos ? -1 : e.name_sort_pos > t.name_sort_pos ? 1 : 0
                        })
                }
                return e
            },
            callAsync: function(e, t) {
                var a = n.Deferred();
                return t ? (e(), a.resolve()) : setTimeout(function() {
                    e(), a.resolve()
                }, 0), a.promise()
            },
            createFilters: function() {
                var e, t, a, r, s, l, c, u, d, p, h, f, g, m, v, y, _ = o.data,
                    w = _.ids_category.length,
                    b = 0,
                    S = _.ids_size.length,
                    x = _.ids_tag.length,
                    k = 0,
                    C = w + b + S + x + _.ids_category_property_option.length + _.ids_category_property_correlated_option.length + o.settings.customProductsFilters.length,
                    D = {},
                    T = [];
                for (t = 0, a = _.ids_variation.length; t < a; ++t) {
                    var M = _.ids_variation[t],
                        F = _.variations[M];
                    if (F.color_name.length) {
                        var $ = F.color_hex + "-" + F.color_name;
                        $ in D || (D[$] = !0, T.push({
                            key: $,
                            colorName: F.color_name,
                            colorPos: F.color_pos,
                            colorHex: F.color_hex
                        }))
                    }
                }
                o.functions.sortArrayBy2Columns(T, "colorPos", "colorHex"), C += b = T.length, o.filterMapMaxId = 0, o.filterMapIdToString = {}, o.filterMapStringToId = {}, o.filterArrayMapStrings = new Array(C), 0 === o.userFilters.price[0] && (o.userFilters.price[0] = o.data.settings.price_range.low_with_vat), 0 === o.userFilters.price[1] && (o.userFilters.price[1] = o.data.settings.price_range.high_with_vat), 0 === o.userFilters.price[2] && (o.userFilters.price[2] = o.data.settings.price_range.low_no_vat), 0 === o.userFilters.price[3] && (o.userFilters.price[3] = o.data.settings.price_range.high_no_vat), o.functions.createPriceRangeSlider();
                var P = {};
                if ("category" === o.settings.currentProductListContext)
                    for (var I = o.settings.currentProductListContextIds; I.length;) m = [], i.each(I, function(e) {
                        P[e] = !0, e in _.categories && (v = _.categories[e]).parent && m.push(v.parent)
                    }), I = m;
                var O = n(o.settings.categoriesSelector);
                if (O.length) {
                    var E = n(o.settings.catBtnTemplateSelector).html();
                    if (void 0 !== E) {
                        g = i.template(E), f = "";
                        for (var A = 0; A < w; ++A)(y = _.ids_category[A]) in P || (v = _.categories[y], s = "category-" + v.id, l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                            category: v,
                            mappedId: l,
                            mappedValue: s
                        }));
                        f.length > 0 && o.functions.append(O, f)
                    } else o.complaints.push("Can't create category filters, template Percolator.settings.catBtnTemplateSelector " + o.settings.catBtnTemplateSelector + " is missing.")
                }
                var L = n(o.settings.colorsSelector);
                if (L.length) {
                    var z = n(o.settings.colorBtnTemplateSelector).html();
                    if (void 0 !== z) {
                        for (f = "", g = i.template(z), t = 0; t < b; ++t) r = T[t], s = "color-" + r.key, l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                            color: {
                                name: r.colorName,
                                hex: r.colorHex
                            },
                            mappedId: l,
                            mappedValue: s
                        });
                        o.functions.append(L, f), b && n("#percolator-button-colors").show()
                    } else o.complaints.push("Can't create color filters, template Percolator.settings.colorBtnTemplateSelector " + o.settings.colorBtnTemplateSelector + " is missing.")
                }
                var j = n(o.settings.sizesSelector);
                if (j.length) {
                    var R = n(o.settings.sizeBtnTemplateSelector).html();
                    if (void 0 !== R) {
                        f = "", g = i.template(R);
                        for (var N = 0; N < S; ++N) h = _.ids_size[N], s = "size-0-" + h, l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                            size: {
                                name: h
                            },
                            mappedId: l,
                            mappedValue: s
                        });
                        o.functions.append(j, f), S && n("#percolator-button-sizes").show()
                    } else o.complaints.push("Can't create size filters, template Percolator.settings.sizeBtnTemplateSelector " + o.settings.sizeBtnTemplateSelector + " is missing.")
                }
                var H = {};
                "tag" === o.settings.currentProductListContext && i.each(o.settings.currentProductListContextIds, function(e) {
                    H[e] = !0
                });
                var Y, B, W, U = n(o.settings.tagsSelector),
                    V = n(o.settings.tagsSelectorBrand);
                if (U.length)
                    if (void 0 !== (Y = n(o.settings.tagBtnTemplateSelector).html())) {
                        for (f = "", g = i.template(Y), B = 0; B < x; ++B) W = _.ids_tag[B], e = _.tags[W], W in H || e.is_brand || (s = "tag-d-" + e.name, l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                            tag: e,
                            mappedId: l,
                            mappedValue: s
                        }));
                        f.length && (o.functions.append(U, f), n("#percolator-button-tags").show())
                    } else o.complaints.push("Can't create tag filters, template Percolator.settings.tagBtnTemplateSelector " + o.settings.tagBtnTemplateSelector + " is missing.");
                if (V.length)
                    if (void 0 !== (Y = n(o.settings.tagBtnTemplateSelector).html())) {
                        for (f = "", g = i.template(Y), B = 0; B < x; ++B) W = _.ids_tag[B], e = _.tags[W], W in H || !e.is_brand || (s = "tag-b-" + e.name, l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                            tag: e,
                            mappedId: l,
                            mappedValue: s
                        }));
                        f.length && (o.functions.append(V, f), n("#percolator-button-tags-brand").show())
                    } else o.complaints.push("Can't create tag filters, template Percolator.settings.tagBtnTemplateSelector " + o.settings.tagBtnTemplateSelector + " is missing.");
                var q, G = n(o.settings.propertiesSelector),
                    X = "properties" in o.settings.createDataAdaptersFor && o.settings.createDataAdaptersFor.properties,
                    K = !(X && o.settings.dataAdapterPropertyClass && o.settings.dataAdapterPropertyClass.length),
                    J = {};
                if (G.length) {
                    var Z, Q, ee, te = n(o.settings.optionsBtnTemplateSelector).html(),
                        ae = void 0,
                        ie = 1,
                        ne = _.ids_category_property.length;
                    i.each(_.ids_category_property, function(t) {
                        if ((d = _.category_properties[t]).is_filter) {
                            s = "property-" + t;
                            var a = {
                                property: d,
                                propertiesType: o.settings.propertiesType,
                                templateSelector: o.settings.propertiesBtnTemplateSelector,
                                optionTemplateSelector: o.settings.optionsBtnTemplateSelector,
                                skipOptionCreation: !1
                            };
                            o.settings.callBackBeforeCreateFilter && o.settings.callBackBeforeCreateFilter(a), a.templateSelector in J || void 0 !== (ae = n(a.templateSelector).html()) && (J[a.templateSelector] = i.template(ae)), Q = void 0, a.templateSelector in J ? Q = J[a.templateSelector] : o.complaints.push("Can't create property " + d.id + " filter, template " + a.templateSelector + " is missing."), !a.optionTemplateSelector || a.optionTemplateSelector in J || void 0 !== (te = n(a.optionTemplateSelector).html()) && (("checkbox" === a.propertiesType && -1 === te.indexOf("<input") && -1 === te.indexOf("checkbox") || "select" === a.propertiesType && -1 === te.indexOf("<option")) && o.complaints.push("Percolator.settings.propertiesType defined as " + a.propertiesType + " but couldn't find any such elements in the content of $(Percolator.settings.optionsBtnTemplateSelector)."), J[a.optionTemplateSelector] = i.template(te)), ee = void 0, a.optionTemplateSelector in J ? ee = J[a.optionTemplateSelector] : o.complaints.push("Can't create property " + d.id + " filter, option template " + a.optionTemplateSelector + " is missing.");
                            var r, c = a.skipOptionCreation,
                                u = "numeric" === d.type,
                                p = null,
                                g = null,
                                m = d.correlated_options.length > 0,
                                v = 0,
                                y = 1,
                                w = d.correlated_options.length > 0 ? d.correlated_options.length : d.options.length,
                                b = new Array(w),
                                S = t in o.userFilters.properties ? o.userFilters.properties[t] : [],
                                x = m ? d.correlated_options : d.options,
                                C = m ? _.category_property_correlated_options : _.category_property_options,
                                D = {};
                            i.each(S, function(e) {
                                D[e] = !0
                            }), f = "", i.each(x, function(a) {
                                e = C[a], h = e.name, s = "option-" + t + "-" + h, l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, X && (b[v++] = {
                                    mapString: s,
                                    text: h
                                }), !c && ee && (K || s in D) && (f += ee({
                                    option: e,
                                    property: d,
                                    propertyOptionIdx: y++,
                                    propertyOptionCount: w,
                                    mappedId: l,
                                    mappedValue: s
                                })), u && (r = parseInt(e.name), isNaN(r) || ((null === p || r < p) && (p = r), (null === g || r > g) && (g = r)))
                            }), o.filterPropertyOptionElementData[t] = b;
                            var T, M = null,
                                F = null,
                                $ = ("option-" + t + "-").length;
                            u && (t in o.userFilters.properties && (T = o.userFilters.properties[t], i.each(T, function(t) {
                                e = x[t], r = parseInt(t.substring($)), isNaN(r) || ((null === M || r < M) && (M = r), (null === F || r > F) && (F = r))
                            })), null === M && (M = p), null === F && (F = g)), q = "", Q && (q = Q({
                                property: d,
                                propertyIdx: ie++,
                                propertyCount: ne,
                                optionMinValue: p,
                                optionMaxValue: g,
                                currentMinValue: M,
                                currentMaxValue: F,
                                mappedId: s,
                                mappedValue: s
                            })), q.length && o.functions.append(G, q), q.length && f.length && ((Z = n("#" + o.settings.propertiesIdPrefix + "-" + t)).length || o.complaints.push("Missing property option container #" + o.settings.propertiesIdPrefix + "-" + t + ". Verify the container id is generated correctly in the template and Percolator.settings.propertiesIdPrefix (" + o.settings.propertiesIdPrefix + ") is set correctly."), o.functions.append(Z, f))
                        }
                    })
                } else o.complaints.push("Can't create property filters, container Percolator.settings.propertiesSelector " + o.settings.propertiesSelector + " is missing.");
                var re = o.functions.getExtraFilters(o.settings.useDynamicExtraFilters, o.data.ids_product),
                    se = n(o.settings.discountedSelector);
                if (re.indexOf("discounted-filter") > -1 && se.length) {
                    var oe = n(o.settings.discountedBtnTemplateSelector).html();
                    void 0 !== oe ? (f = "", g = i.template(oe), s = "discounted-filter", l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                        mappedId: l,
                        mappedValue: s
                    }), o.functions.append(se, f), n("#percolator-button-discounted").show()) : o.complaints.push("Can't create discounted filters, template Percolator.settings.discountedBtnTemplateSelector " + o.settings.discountedBtnTemplateSelector + " is missing.")
                }
                var le = n(o.settings.isNewSelector);
                if (re.indexOf("isNew-filter") > -1 && le.length) {
                    var ce = n(o.settings.isNewBtnTemplateSelector).html();
                    void 0 !== ce ? (f = "", g = i.template(ce), s = "isNew-filter", l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                        mappedId: l,
                        mappedValue: s
                    }), o.functions.append(le, f), n("#percolator-button-isNew").show()) : o.complaints.push("Can't create is_new filters, template Percolator.settings.isNewBtnTemplateSelector " + o.settings.isNewBtnTemplateSelector + " is missing.")
                }
                var ue = n(o.settings.variationBuyableSelector);
                if (re.indexOf("variationBuyable-filter") > -1 && ue.length) {
                    var de = n(o.settings.variationBuyableBtnTemplateSelector).html();
                    void 0 !== de ? (f = "", g = i.template(de), s = "variationBuyable-filter", l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                        mappedId: l,
                        mappedValue: s
                    }), o.functions.append(ue, f), n("#percolator-button-variationBuyable").show()) : o.complaints.push("Can't create variationBuyable filters, template Percolator.settings.variationBuyableBtnTemplateSelector " + o.settings.variationBuyableBtnTemplateSelector + " is missing.")
                }
                var pe = n(o.settings.customProductFilterSelector);
                if (pe.length) {
                    var he = n(o.settings.customProductFilterBtnTemplateSelector).html();
                    if (void 0 !== he) {
                        for (t = 0; t < o.settings.customProductsFilters.length; ++t) re.indexOf(o.settings.customProductsFilters[t]) > -1 && (f = "", g = i.template(he), s = o.settings.customProductsFilters[t], l = ++o.filterMapMaxId, o.filterMapStringToId[s] = l, o.filterMapIdToString[l] = s, o.filterArrayMapStrings[k++] = s, f += g({
                            mappedId: l,
                            mappedValue: s
                        }), o.functions.append(pe, f));
                        n("#percolator-button-customProductFilter").show()
                    } else o.complaints.push("Can't create customProductFilter filters, template Percolator.settings.customProductFilterBtnTemplateSelector " + o.settings.customProductFilterBtnTemplateSelector + " is missing.")
                }
                o.filterArrayMapStrings.length = k, (p = o.userFilters.categories).length && ("select" === o.settings.categoriesType ? n(o.settings.categoriesSelector).val(p) : "checkbox" === o.settings.categoriesType && o.handlers.checkInputs(p)), (p = o.userFilters.colors).length && ("select" === o.settings.colorsType ? n(o.settings.colorsSelector).val(p) : "checkbox" === o.settings.colorsType && o.handlers.checkInputs(p)), (p = o.userFilters.sizes).length && ("select" === o.settings.sizesType ? n(o.settings.sizesSelector).val(p) : "checkbox" === o.settings.sizesType && o.handlers.checkInputs(p));
                for (c in o.userFilters.tags) o.userFilters.tags.hasOwnProperty(c) && (p = o.userFilters.tags[c]).length && ("select" === o.settings.tagsType ? "default" === c ? n(o.settings.tagsSelector).val(p) : "brand" === c && n(o.settings.tagsSelectorBrand).val(p) : "checkbox" === o.settings.tagsType && o.handlers.checkInputs(p));
                for (u in o.userFilters.properties) o.userFilters.properties.hasOwnProperty(u) && (p = o.userFilters.properties[u]).length && ("select" === o.settings.propertiesType ? n("#" + o.settings.propertiesIdPrefix + "-" + u).val(p) : "checkbox" === o.settings.propertiesType && o.handlers.checkInputs(p));
                "discounted" in o.userFilters.extra && (p = o.userFilters.extra.discounted).length && ("select" === o.settings.discountedType ? n(o.settings.discountedSelector).val(p) : "checkbox" === o.settings.discountedType && o.handlers.checkInputs(p)), "isNew" in o.userFilters.extra && (p = o.userFilters.extra.isNew).length && ("select" === o.settings.isNewType ? n(o.settings.isNewSelector).val(p) : "checkbox" === o.settings.isNewType && o.handlers.checkInputs(p)), "variationBuyable" in o.userFilters.extra && (p = o.userFilters.extra.variationBuyable).length && ("select" === o.settings.variationBuyableType ? n(o.settings.variationBuyableSelector).val(p) : "checkbox" === o.settings.variationBuyableType && o.handlers.checkInputs(p)), "customProductFilter" in o.userFilters.extra && (p = o.userFilters.extra.customProductFilter).length && ("select" === o.settings.customProductFilterType ? n(o.settings.customProductFilterSelector).val(p) : "checkbox" === o.settings.customProductFilterType && o.handlers.checkInputs(p)), o.settings.callBackAfterFiltersHaveBeenCreated()
            },
            createPagination: function(e) {
                var t, a, r, s, l, c, u;
                void 0 !== (t = n(o.settings.paginationTemplateSelector).html()) ? (n(o.settings.paginationSelector).empty(), a = "", r = i.template(t), s = 1, void 0 !== e.page && (s = e.page), l = parseInt(s) - 1, c = parseInt(s) + 1, l <= 0 && (l = void 0), parseInt(s) * o.settings.productsAtOnce >= o.filteredProducts.length && (c = void 0), (a += r({
                    currentPageNumber: s,
                    prevPageNumber: l,
                    nextPageNumber: c,
                    maxAmountOfPages: u = Math.ceil(o.filteredProducts.length / o.settings.productsAtOnce)
                })).length && u > 1 && o.functions.append(n(o.settings.paginationSelector), a)) : o.complaints.push("Can't create pagination buttons, template Percolator.settings.paginationTemplateSelector " + o.settings.paginationTemplateSelector + " is missing.")
            },
            createInfiniteScroll: function() {
                var e = i.throttle(o.handlers.windowScrolled, 200);
                o.$window.on("scroll", e), o.handlers.windowScrolled()
            },
            createScrollListener: function() {
                var e = i.throttle(o.functions.saveLocationToSessionStorage, 200);
                o.$window.on("scroll", e), o.functions.saveLocationToSessionStorage()
            },
            createShowMore: function() {
                var e, t, a, r, s;
                void 0 !== (e = n(o.settings.showMoreBtnTemplateSelector).html()) ? (n(o.settings.showMoreSelector).empty(), t = "", a = i.template(e), r = o.filteredProducts.length, s = o.filteredProducts.length - o.curIndex, (t += a({
                    showNextAmount: o.settings.productsAtOnce > s ? s : o.settings.productsAtOnce,
                    totalAmount: r,
                    totalAmountLeft: s
                })).length && s > 0 && o.functions.append(n(o.settings.showMoreSelector), t)) : o.complaints.push("Can't create show more button, template Percolator.settings.showMoreBtnTemplateSelector " + o.settings.showMoreBtnTemplateSelector + " is missing.")
            },
            saveLocationToSessionStorage: function() {
                o.settings.useSessionStorage && o.productListOffsetSaveable && (o.curIndex < o.settings.pageReloadScrollProductsMax ? (o.functions.saveProductIndex(!1), o.functions.saveScrollTopToStorage(!1)) : (o.functions.saveProductIndex(!0), o.functions.saveScrollTopToStorage(!0)))
            },
            readFromStorage: function(e) {
                try {
                    return sessionStorage.getItem(e)
                } catch (e) {
                    return null
                }
            },
            writeToStorage: function(e, t) {
                try {
                    return sessionStorage.setItem(e, t), !0
                } catch (e) {
                    return !1
                }
            },
            deleteFromStorage: function(e) {
                try {
                    return sessionStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            },
            saveScrollTopToStorage: function(e) {
                if (e) o.functions.writeToStorage(window.location.href, 0);
                else {
                    var t = document.documentElement,
                        a = window.pageYOffset || t.scrollTop;
                    o.functions.writeToStorage(window.location.href, a)
                }
            },
            loadEverythingFromStorage: function() {
                var e = n.Deferred();
                return o.functions.loadUserFiltersFromStorage(), o.functions.loadColumnsQtyFromStorage(), o.functions.loadOrderByFromStorage(), e.resolve(), e.promise()
            },
            loadUserFiltersFromStorage: function() {
                if (o.settings.useSessionStorage && o.functions.readFromStorage(window.location.href + "-filter")) {
                    var e = o.functions.parseJSONObject(o.functions.readFromStorage(window.location.href + "-filter"));
                    if ("version" in e && e.version === o.settings.userFiltersVersion) {
                        for (var t in e.properties) e.properties.hasOwnProperty(t) && ({}, e.properties[t] = o.functions.filterValuesByMap(e.properties[t], t in o.data.category_properties && o.data.category_properties[t].correlated_options.length ? o.data.filter_localized_category_property_correlated_option_group : o.data.filter_localized_category_property_option_product), 0 === e.properties[t].length && delete e.properties[t]);
                        e.categories = o.functions.filterValuesByMap(e.categories, o.data.filter_mapped_category), e.colors = o.functions.filterValuesByMap(e.colors, o.data.filter_localized_color_variation), e.sizes = o.functions.filterValuesByMap(e.sizes, o.data.filter_localized_size_variation), e.tags.default = o.functions.filterValuesByMap(e.tags.default, o.data.filter_localized_tag_product), e.tags.brand = o.functions.filterValuesByMap(e.tags.brand, o.data.filter_localized_tag_product), e.price[0] < o.data.settings.price_range.low_with_vat && (e.price[0] = o.data.settings.price_range.low_with_vat), e.price[2] < o.data.settings.price_range.low_no_vat && (e.price[2] = o.data.settings.price_range.low_no_vat), (0 === e.price[1] || e.price[1] > o.data.settings.price_range.high_with_vat) && (e.price[1] = o.data.settings.price_range.high_with_vat), (0 === e.price[3] || e.price[3] > o.data.settings.price_range.high_no_vat) && (e.price[3] = o.data.settings.price_range.high_no_vat), o.userFilters = e
                    }
                }
            },
            saveUserFiltersToStorage: function() {
                o.settings.useSessionStorage && o.functions.writeToStorage(window.location.href + "-filter", JSON.stringify(o.userFilters))
            },
            saveColumnsQtyToStorage: function() {
                o.settings.useSessionStorage && o.functions.writeToStorage(window.location.href + "-columnsQty", o.settings.columnsQty)
            },
            loadColumnsQtyFromStorage: function() {
                o.settings.useSessionStorage && o.functions.readFromStorage(window.location.href + "-columnsQty") && (o.settings.columnsQty = o.functions.readFromStorage(window.location.href + "-columnsQty"))
            },
            saveOrderByToStorage: function() {
                o.settings.useSessionStorage && o.functions.writeToStorage(window.location.href + "-orderBy", o.settings.sortingMode)
            },
            loadOrderByFromStorage: function() {
                o.settings.useSessionStorage && o.functions.readFromStorage(window.location.href + "-orderBy") && (o.settings.sortingMode = o.functions.readFromStorage(window.location.href + "-orderBy"))
            },
            saveProductIndex: function(e) {
                o.settings.useSessionStorage && (e ? o.functions.writeToStorage(window.location.href + "-productIndex", o.settings.productsAtOnce) : o.functions.writeToStorage(window.location.href + "-productIndex", o.curIndex))
            },
            loadProductsAtOnceFromStorage: function() {
                return o.settings.useSessionStorage && o.functions.readFromStorage(window.location.href + "-productIndex") ? parseInt(o.functions.readFromStorage(window.location.href + "-productIndex"), 10) : 0
            },
            checkIfAllPluginsAreLoaded: function() {
                o.settings.debug && console.log("*********** Check plugins started **********"), void 0 === t && o.settings.debug && console.log("*********** Cannot find Jquery **********"), void 0 === i && o.settings.debug && console.log("*********** Cannot find Underscore **********"), void 0 === t.ui && o.settings.debug && console.log("*********** Cannot find Jquery UI **********"), o.settings.debug && console.log("*********** Check plugins ended **********")
            },
            toggleInputsOnOff: function(e, t) {
                var a;
                t ? (a = e.find(".filter-value.value-on").addClass("current"), e.find(".filter-value.value-off").removeClass("current"), a.is(":checkbox") && a.prop("checked", !0), e.addClass("value-on").removeClass("value-off")) : (e.find(".filter-value.value-off").addClass("current"), (a = e.find(".filter-value.value-on").removeClass("current")).is(":checkbox") && a.prop("checked", !1), e.addClass("value-off").removeClass("value-on"))
            },
            createMoneyString: function(e, t, a) {
                var i, n, r, s, l;
                return (i = e < 0) && (e = -e), n = e.toString(), t = void 0 === t || t, a = void 0 !== a && a, n.length < 3 && (n = String("00000" + n).slice(-3)), r = n.slice(0, -2), s = n.slice(-2), i && (r = "-" + r), l = r, t && (l += o.settings.decimalSeparator + s), a && (o.settings.currencyBeforePrice ? l = o.settings.currencySign + o.settings.currencySeparator + l : l += o.settings.currencySeparator + o.settings.currencySign), l
            },
            createImagePath: function(e, t) {
                var a = "original";
                switch (t) {
                    case "mini":
                    case "medium":
                    case "big":
                    case "tiny":
                        a = o.data.settings.image_sizes[t]
                }
                var i = e.substring(0, 2);
                return "ad" === i && (i = "xy"), "static/media/images/" + i + "/" + a + "/" + e
            },
            createPriceRangeSlider: function() {
                var e, t, a, i;
                if (o.settings.priceWithVat ? (e = o.data.settings.price_range.low_with_vat, t = o.data.settings.price_range.high_with_vat) : (e = o.data.settings.price_range.low_no_vat, t = o.data.settings.price_range.high_no_vat), a = o.userFilters.price[o.settings.priceWithVat ? 0 : 2], i = o.userFilters.price[o.settings.priceWithVat ? 1 : 3], o.settings.useDefaultPriceSlider) {
                    var r = n(o.settings.priceLowSelector),
                        s = n(o.settings.priceHighSelector);
                    r.html(o.functions.createMoneyString(a, o.settings.useDecimals, !0)), s.html(o.functions.createMoneyString(i, o.settings.useDecimals, !0)), n(o.settings.priceRangeSelector).slider({
                        range: !0,
                        min: e,
                        max: t,
                        step: o.settings.priceSteps,
                        values: [a, i],
                        slide: function(e, t) {
                            return t.values[0] !== t.values[1] && (n(o.settings.priceLowSelector).html(o.functions.createMoneyString(t.values[0], o.settings.useDecimals, !0)), n(o.settings.priceHighSelector).html(o.functions.createMoneyString(t.values[1], o.settings.useDecimals, !0)), !0)
                        },
                        stop: function(e, t) {
                            o.handlers.priceChange(t.values)
                        }
                    })
                } else {
                    var l = {
                        min: e,
                        max: t,
                        step: o.settings.priceSteps,
                        startMin: a,
                        startMax: i,
                        priceChangeEvent: o.handlers.priceChange,
                        currencySign: o.settings.currencySign
                    };
                    o.settings.createPriceRange(l)
                }
            },
            cleanInputValue: function(e, t, a) {
                var i = t ? e.data("value") : e.val(),
                    n = i;
                return void 0 === i || null === i ? (t && o.complaints.push("Missing data-value at " + a + "."), n = []) : "object" != typeof i && (n = [i]), n = o.functions.difference(n, [o.settings.emptyOptionValue])
            },
            readFiltersFromUI: function() {
                var e, t, a, r, s, l, c, u, d, p, h, f, g, m, v, y, _, w, b, S, x, k, C, D, T = !1,
                    M = 0,
                    F = 0;
                o.userFilters.hide = !1, o.settings.useDefaultPriceSlider && (C = n(o.settings.priceRangeSelector)).length && ((!(g = C.slider("option", "values")) || g.length < 2) && (g = [0, 0]), o.userFilters.price[o.settings.priceWithVat ? 0 : 2] === g[0] && o.userFilters.price[o.settings.priceWithVat ? 1 : 3] === g[1] || (o.userFilters.price[o.settings.priceWithVat ? 0 : 2] = g[0], o.userFilters.price[o.settings.priceWithVat ? 1 : 3] = g[1], T = !0)), i.each(o.registeredFilters, function(i) {
                    switch (r = i.selectorMainObj, s = i.inputType, a = r.find(i.selectorSub), D = [], i.selectorMain.length && D.push(i.selectorMain), i.selectorSub.length && D.push(i.selectorSub), D.join(" "), u = i.filterElementIdentification, c = [], s) {
                        case "select":
                            c = o.functions.cleanInputValue(r, !1, D);
                            break;
                        case "checkbox":
                        case "link":
                            a.each(function(e, t) {
                                l = o.functions.cleanInputValue(n(t), !0, D), n.each(l, function(e, t) {
                                    c.push(t)
                                })
                            });
                            break;
                        case "rangeSlider":
                            if (c = [], g = r.slider("option", "values"), m = r.slider("option", "min"), v = r.slider("option", "max"), (!g || g.length < 2) && (g = [0, 0]), w = g[0], b = g[1], "property" === u[0] && (g[0] !== m || g[1] !== v)) {
                                for (++M, d = u[1], p = o.data.category_properties[d], S = p.correlated_options.length ? p.correlated_options : p.options, x = p.correlated_options.length ? o.data.category_property_correlated_options : o.data.category_property_options, y = 0; y < S.length; ++y) h = x[S[y]], _ = parseInt(h.name), isNaN(_) || _ >= w && _ <= b && (k = "option-" + d + "-" + h.name, c.push(k));
                                c.length && ++F
                            }
                    }
                    switch (u[0]) {
                        case "vat-change":
                            (a = r.find(i.selectorSub)).length > 0 && (e = o.settings.priceWithVat, c[0] !== e && (o.settings.priceWithVat = c[0], T = !0, o.functions.toggleInputsOnOff(n(o.settings.vatSelector), o.settings.priceWithVat), o.functions.handleVatChange()));
                            break;
                        case "property":
                            d = u[1], e = d in o.userFilters.properties ? o.userFilters.properties[d] : [], e = JSON.stringify(e), t = JSON.stringify(c), e !== t && (0 === c.length ? delete o.userFilters.properties[d] : o.userFilters.properties[d] = c, T = !0);
                            break;
                        case "tags":
                            f = u[1], e = f in o.userFilters.tags ? o.userFilters.tags[f] : [], e = JSON.stringify(e), t = JSON.stringify(c), e !== t && (o.userFilters.tags[f] = c, T = !0);
                            break;
                        case "extra":
                            f = u[1], e = f in o.userFilters.extra ? o.userFilters.extra[f] : [], e = JSON.stringify(e), t = JSON.stringify(c), e !== t && (c.length ? o.userFilters.extra[f] = c : delete o.userFilters.extra[f], T = !0);
                            break;
                        default:
                            e = o.userFilters[u[0]], e = JSON.stringify(e), t = JSON.stringify(c), e !== t && (o.userFilters[u[0]] = c, T = !0)
                    }
                }), M > F && (T = !0, o.userFilters.hide = !0), T && o.handlers.filterChangeDoRefresh()
            },
            resetProductList: function(e) {
                o.curIndex = 0, o.$productList.empty(), o.settings.useMinHeightCalculationInProductList && o.$productList.css("min-height", "0px"), o.filteredProducts = o.functions.sortArray(o.filteredProducts, o.settings.sortingMode), e && o.functions.render(o.filteredProducts)
            },
            handleVatChange: function() {
                o.settings.priceWithVat ? n("body").addClass("show-vat").removeClass("hide-vat") : n("body").addClass("hide-vat").removeClass("show-vat"), o.userFilters.vat = o.settings.priceWithVat, o.functions.setVatCookie(o.settings.priceWithVat ? "1" : "0"), void 0 !== o.$productList && o.$productList.length > 0 && (o.functions.resetProductList(), o.functions.createPriceRangeSlider())
            },
            handleNonProductListPage: function() {
                for (var e = 0; e < o.registeredFilters.length; ++e) "vat-change" === o.registeredFilters[e].filterElementIdentification[0] && delete o.registeredFilters[e];
                o.handlers.createPropertyListener(["vat-change"], o.settings.vatSelector, o.settings.vatSelectorType, null, !0, !0)
            },
            _jsonNativeValueToken: function(e) {
                for (e.levelsToClose = 1, e.substrFrom = e.i, ++e.i; e.i < e.len; ++e.i) {
                    if (e.c = e.txt.charAt(e.i), "\\" === e.c && ++e.escapes, e.inStr) switch (e.c) {
                        case '"':
                            e.escapes % 2 == 0 && (e.inStr = !1)
                    } else switch (e.c) {
                        case "{":
                        case "[":
                            ++e.levelsToClose;
                            break;
                        case "}":
                        case "]":
                            if (0 == --e.levelsToClose) return;
                            break;
                        case '"':
                            e.inStr = !0
                    }
                    e.escapes && "\\" !== e.c && (e.escapes = 0)
                }
            },
            parseJSONLite: function(e, t) {
                if (t || ((t = {
                        i: 0,
                        escapes: 0,
                        substrFrom: 0,
                        result: {},
                        resultPointer: {},
                        levels: new Array(500),
                        li0: 0,
                        lv: [],
                        key: "",
                        jStr: "",
                        inStr: !1,
                        inKeySection: !0,
                        inValueSection: !1,
                        inValueStr: !1,
                        levelsToClose: 0,
                        len: e.length - 1,
                        txt: e,
                        c: e.charAt(0),
                        timeoutFunc: function() {},
                        freeCon: function() {
                            this.resultPointer = null, this.levels = null, this.lv = null, this.timeoutFunc = null, this.freeCon = null
                        },
                        deferred: n.Deferred(),
                        promised: void 0
                    }).resultPointer = t.result, t.levels[0] = [0, "{", t.resultPointer], t.promised = t.deferred.promise(), t.timeoutFunc = function() {
                        o.functions.parseJSONLite(void 0, t)
                    }), t.len >= 1 && (t.i > 0 || "{" === t.c)) {
                    for (++t.i; t.i < t.len; ++t.i) {
                        switch (t.c = t.txt.charAt(t.i), "\\" === t.c && ++t.escapes, t.c) {
                            case "{":
                                if (!t.inStr)
                                    if (t.li0 >= 1) {
                                        if (o.functions._jsonNativeValueToken(t), t.i >= t.length) return null;
                                        t.jStr = t.txt.substring(t.substrFrom, t.i + 1), t.resultPointer[t.key] = JSON.parse(t.jStr)
                                    } else t.levels[++t.li0] = [t.i, t.c, t.resultPointer], t.inKeySection = !0, t.resultPointer[t.key] = {}, t.resultPointer = t.resultPointer[t.key];
                                break;
                            case " ":
                            case ",":
                                !t.inStr && t.inValueStr && (t.lv = t.levels[t.li0], --t.li0, t.inValueStr = !1, t.resultPointer[t.key] = JSON.parse(t.txt.substring(t.lv[0], t.i))), "," === t.c && (t.inValueSection = !1, t.inKeySection = !0);
                                break;
                            case "}":
                                t.inStr || (t.lv = t.levels[t.li0], --t.li0, t.inValueStr && (t.inValueStr = !1, t.resultPointer[t.key] = JSON.parse(t.txt.substring(t.lv[0], t.i))), t.inValueSection = !1, t.inKeySection = !1, t.resultPointer = t.lv[2]);
                                break;
                            case ":":
                                t.inStr || (t.inKeySection = !1, t.inValueSection = !0);
                                break;
                            case "[":
                                if (!t.inStr) {
                                    if (o.functions._jsonNativeValueToken(t), t.i >= t.len) return null;
                                    t.resultPointer[t.key] = JSON.parse(t.txt.substring(t.substrFrom, t.i + 1))
                                }
                                break;
                            case '"':
                                t.inStr ? t.escapes % 2 == 0 && (t.inStr = !1, t.lv = t.levels[t.li0], --t.li0, t.inKeySection ? t.key = t.txt.substring(t.lv[0] + 1, t.i) : t.resultPointer[t.key] = t.i > t.lv[0] + 1 ? JSON.parse(t.txt.substring(t.lv[0] + 1, t.i)) : "") : (t.inStr = !0, t.levels[++t.li0] = [t.i, t.c, t.resultPointer]);
                                break;
                            default:
                                !t.inValueSection || t.inStr || t.inValueStr || (t.inValueStr = !0, t.levels[++t.li0] = [t.i, "", t.resultPointer])
                        }
                        if (t.escapes && "\\" !== t.c && (t.escapes = 0), t.i % 1e5 == 0) return setTimeout(t.timeoutFunc, 0), t.promised
                    }
                    return t.deferred.resolve(t.result), t.freeCon(), t.promised
                }
                return t.result = JSON.parse(t.txt), t.deferred.resolve(t.result), t.freeCon(), t.promised
            },
            getExtraFilters: function(e, t) {
                var a = [],
                    i = {},
                    n = {},
                    r = [],
                    s = null,
                    l = "",
                    c = "",
                    u = "",
                    d = 0,
                    p = 0,
                    h = 0,
                    f = 0;
                if (e)
                    for (d = 0; d < t.length; ++d) {
                        if (productId = t[d], n = o.data.products[productId], r = n.variations, "isNew-filter" in i || n.is_new && (a.push("isNew-filter"), i["isNew-filter"] = !0), !("discounted-filter" in i))
                            if (null !== n.discounted_no_vat && n.discounted_no_vat !== n.original_no_vat) a.push("discounted-filter"), i["discounted-filter"] = !0;
                            else
                                for (p = 0; p < r.length; ++p)
                                    if (null !== (s = o.data.variations[r[p]]).discounted_no_vat && s.discounted_no_vat !== s.original_no_vat) {
                                        a.push("discounted-filter"), i["discounted-filter"] = !0;
                                        break
                                    } if (!("variationBuyable-filter" in i) && r.length > 0)
                            for (h = 0; h < r.length; ++h)
                                if (o.data.filter_value_variation_product[r[h]], c = o.data.variations[r[h]], l = n.min_order_qty, c.buyable_out_of_stock || c.stock >= l) {
                                    a.push("variationBuyable-filter"), i["variationBuyable-filter"] = !0;
                                    break
                                } if (o.settings.customProductsFilters.length > 0) {
                            var g = o.settings.customProductsFilters;
                            for (f = 0; f < g.length; ++f)(u = g[f]) in i || o.settings.customProductFilterFunctions[u](n) && (a.push(u), i[u] = !0)
                        }
                    } else if (a = ["discounted-filter", "isNew-filter", "variationBuyable-filter"], o.settings.customProductsFilters.length > 0) {
                        var m = o.settings.customProductsFilters;
                        for (f = 0; f < m.length; ++f) u = m[f], a.push(u)
                    } return a
            },
            filterProductsAndVariations: function(e) {
                var t = 0 === o.userFilters.categories.length,
                    a = 0 === o.userFilters.colors.length,
                    i = 0 === o.userFilters.sizes.length,
                    n = !0,
                    r = !0;
                for (var s in o.userFilters.tags)
                    if (o.userFilters.tags.hasOwnProperty(s) && o.userFilters.tags[s].length > 0) {
                        n = !1;
                        break
                    } for (var l in o.userFilters.properties)
                    if (o.userFilters.properties.hasOwnProperty(l) && o.userFilters.properties[l].length > 0) {
                        r = !1;
                        break
                    } var c = null;
                return c = o.settings.priceWithVat ? o.userFilters.price[0] === o.data.settings.price_range.low_with_vat && o.userFilters.price[1] === o.data.settings.price_range.high_with_vat : o.userFilters.price[2] === o.data.settings.price_range.low_no_vat && o.userFilters.price[3] === o.data.settings.price_range.high_no_vat, (e = o.functions.filterVariations(e, a, i)).callParams.length > 1 && (e.filteredVariations = o.functions.intersection.apply(this, e.callParams)), e.callParams = [e.filteredProducts], o.userFilters.hide && e.callParams.push([]), r || (e = o.functions.filterProperties(e)), !t && o.userFilters.categories.length > 0 && (e = o.functions.filterCategories(e)), n || (e = o.functions.filterTags(e)), o.settings.productLimit.length && e.callParams.push(o.settings.productLimit), e = o.functions.filterVariationsAgain(e), e = o.functions.filterCorrelatedOptionGroups(e), (e = o.functions.filterExtraAndCustom(e)).callParams.length > 1 && (e.filteredProducts = o.functions.intersection.apply(this, e.callParams)), e = o.functions.filterVariationsInFilteredProducts(e), c || (e = o.functions.filterPrice(e)), e = o.functions.filterCorrelatedOptionGroupsByProducts(e)
            },
            filterVariations: function(e, t, a) {
                var i = e.filteredVariations,
                    n = [i],
                    r = [],
                    s = "",
                    l = "",
                    c = [],
                    u = {},
                    d = 0,
                    p = [],
                    h = 0;
                if (!t) {
                    for (r = [], h = 0; h < o.userFilters.colors.length; ++h) l = o.userFilters.colors[h], r.push(o.data.filter_localized_color_variation[l]);
                    r.length > 0 && (r = o.functions.union.apply(this, r), n.push(r))
                }
                if (!a) {
                    for (r = [], h = 0; h < o.userFilters.sizes.length; ++h) s = o.userFilters.sizes[h], r.push(o.data.filter_localized_size_variation[s]);
                    r.length > 0 && (r = o.functions.union.apply(this, r), n.push(r))
                }
                if ("variationBuyable" in o.userFilters.extra && i.length > 0) {
                    for (h = 0; h < i.length; ++h) c = o.data.filter_value_variation_product[i[h]], u = o.data.variations[i[h]], d = o.data.products[c[0]].min_order_qty, (u.buyable_out_of_stock || u.stock >= d) && p.push(i[h]);
                    n.push(p)
                }
                return e.callParams = n, e
            },
            filterVariationsAgain: function(e) {
                var t = [],
                    a = e.callParams,
                    i = e.filteredProducts,
                    n = e.filteredVariations,
                    r = 0;
                if (n.length < o.data.ids_variation.length) {
                    for (t = [], r = 0; r < n.length; ++r) t.push(o.data.filter_value_variation_product[n[r]]);
                    (t = o.functions.union.apply(this, t)).length < i.length && a.push(t)
                }
                return e.callParams = a, e
            },
            filterCorrelatedOptionGroups: function(e) {
                var t = [],
                    a = e.callParams,
                    i = e.filteredCorrelatedOptionGroups,
                    n = 0;
                if (i.length < o.data.ids_category_property_correlated_option_groups.length) {
                    for (t = [], n = 0; n < i.length; ++n) t.push(o.data.filter_value_category_property_correlated_option_group_product[i[n]]);
                    (t = o.functions.union.apply(this, t)).length < o.data.ids_product.length && a.push(t)
                }
                return e.callParams = a, e
            },
            filterCategories: function(e) {
                var t = [],
                    a = [],
                    i = [],
                    n = [],
                    r = {},
                    s = 0,
                    l = "",
                    c = e.callParams,
                    u = e.filteredProducts,
                    d = 0;
                for (d; d < o.userFilters.categories.length; ++d) l = o.userFilters.categories[d], i.push(o.data.filter_mapped_category[l]);
                for (; i.length > 0;) {
                    for (n = [], d = 0; d < i.length; ++d)(s = i[d]) in o.data.categories && (r = o.data.categories[s], a.push(r.id), n.push(r.child_categories));
                    i = o.functions.union.apply(this, n)
                }
                for (d = 0; d < a.length; ++d) t.push(o.data.filter_value_category_product[a[d]]);
                return (t = o.functions.union.apply(this, t)).length < u.length && c.push(t), e.callParams = c, e
            },
            filterProperties: function(e) {
                var t = e.filteredCorrelatedOptionGroups,
                    a = [t],
                    i = [],
                    n = 0,
                    r = [],
                    s = [],
                    l = "",
                    c = e.callParams,
                    u = e.filteredProducts,
                    d = 0,
                    p = 0;
                for (d; d < o.data.ids_category_property.length; ++d)
                    if (n = o.data.ids_category_property[d], o.userFilters.properties.hasOwnProperty(n))
                        if (i = o.userFilters.properties[n], o.data.category_properties[n].correlated_options.length > 0) {
                            for (r = [], p = 0; p < i.length; ++p)(l = i[p]) in o.data.filter_localized_category_property_correlated_option_group && r.push(o.data.filter_localized_category_property_correlated_option_group[l]);
                            r.length > 0 && (r = o.functions.union.apply(this, r)).length < t.length && a.push(r)
                        } else {
                            for (s = [], p = 0; p < i.length; ++p) l = i[p], s.push(o.data.filter_localized_category_property_option_product[l]);
                            s.length > 0 && (s = o.functions.union.apply(this, s)).length < u.length && c.push(s)
                        } return a.length > 1 && (t = o.functions.intersection.apply(this, a)), e.callParams = c, e.filteredCorrelatedOptionGroups = t, e
            },
            filterTags: function(e) {
                var t = [],
                    a = "",
                    i = "",
                    n = [],
                    r = [],
                    s = e.callParams,
                    l = e.filteredProducts,
                    c = 0;
                for (i in o.userFilters.tags)
                    if (o.userFilters.tags.hasOwnProperty(i) && (n = o.userFilters.tags[i]).length)
                        if ("any" === o.settings.tagMode) {
                            for (t = [], c = 0; c < n.length; ++c) a = n[c], r = o.data.filter_localized_tag_product[a], t.push(r);
                            (t = o.functions.union.apply(this, t)).length < l.length && s.push(t)
                        } else
                            for (c = 0; c < n.length; ++c) a = n[c], (r = o.data.filter_localized_tag_product[a]).length < l.length && s.push(r);
                return e.callParams = s, e
            },
            filterExtraAndCustom: function(e) {
                var t = [],
                    a = 0,
                    i = 0,
                    n = {},
                    r = [],
                    s = {},
                    l = "",
                    c = e.callParams,
                    u = 0,
                    d = 0;
                if ("isNew" in o.userFilters.extra) {
                    for (t = new Array(o.data.ids_product.length), a = 0, u = 0; u < o.data.ids_product.length; ++u) i = o.data.ids_product[u], (n = o.data.products[i]).is_new && (t[a++] = i);
                    t.length = a, t.length < o.data.ids_product.length && c.push(t)
                }
                if ("customProductFilter" in o.userFilters.extra) {
                    var p = o.functions.intersection(o.userFilters.extra.customProductFilter, o.settings.customProductsFilters);
                    for (u = 0; u < p.length; ++u) {
                        for (t = new Array(o.data.ids_product.length), a = 0, l = p[u], d = 0; d < o.data.ids_product.length; ++d) i = o.data.ids_product[d], n = o.data.products[i], o.settings.customProductFilterFunctions[l](n) && (t[a++] = i);
                        a < o.data.ids_product.length && (t.length = a, c.push(t))
                    }
                }
                if ("discounted" in o.userFilters.extra) {
                    for (t = new Array(o.data.ids_product.length), a = 0, u = 0; u < o.data.ids_product.length; ++u)
                        if (i = o.data.ids_product[u], null !== (n = o.data.products[i]).discounted_no_vat && n.discounted_no_vat !== n.original_no_vat) t[a++] = i;
                        else
                            for (r = n.variations, d = 0; d < r.length; ++d)
                                if (null !== (s = o.data.variations[r[d]]).discounted_no_vat && s.discounted_no_vat !== s.original_no_vat) {
                                    t[a++] = i;
                                    break
                                } t.length = a, t.length < o.data.ids_product.length && c.push(t)
                }
                return e.callParams = c, e
            },
            filterPrice: function(e) {
                var t = 0,
                    a = {},
                    i = 0,
                    n = e.productMap,
                    r = {},
                    s = 0,
                    l = [],
                    c = 0,
                    u = [],
                    d = e.filteredProducts,
                    p = e.filteredVariations,
                    h = [d],
                    f = new Array(d.length),
                    g = 0,
                    m = 0,
                    v = 0;
                for (m; m < d.length; ++m) i = d[m], a = o.data.products[i], (t = o.settings.priceWithVat ? a.discounted_lowest_price_with_vat : a.discounted_lowest_price_no_vat) >= o.userFilters.price[o.settings.priceWithVat ? 0 : 2] && t <= o.userFilters.price[o.settings.priceWithVat ? 1 : 3] && (f[g++] = i);
                if (f.length = g, f.length < d.length && h.push(f), h.length > 1) {
                    for (d = o.functions.intersection.apply(this, h), n = {}, m = 0; m < d.length; ++m) n[i = d[m]] = !0;
                    for (o.filteredVariationsMap = {}, r = o.filteredVariationsMap, s = 0, l = new Array(p.length), m = 0; m < p.length; ++m)
                        if (!((c = p[m]) in r))
                            for (u = o.data.filter_value_variation_product[c], v = 0; v < u.length; ++v)
                                if (u[v] in n) {
                                    r[c] = !0, l[s++] = c;
                                    break
                                } l.length = s, p = l
                }
                return e.callParams = h, e.filteredVariations = p, e.filteredProducts = d, e.productMap = n, e
            },
            filterVariationsInFilteredProducts: function(e) {
                var t = {},
                    a = 0,
                    i = 0,
                    n = 0,
                    r = 0,
                    s = [],
                    l = [],
                    c = [],
                    u = {},
                    d = {},
                    p = {},
                    h = {},
                    f = {},
                    g = null,
                    m = {},
                    v = null,
                    y = 0,
                    _ = 0,
                    w = 0,
                    b = 0,
                    S = 0,
                    x = 0,
                    k = 0,
                    C = e.callParams,
                    D = e.filteredProducts,
                    T = e.filteredVariations,
                    M = new Array(T.length),
                    F = 0,
                    $ = 0;
                for (F; F < D.length; ++F) d[i = D[F]] = !0;
                for (o.filteredVariationsMap = {}, t = o.filteredVariationsMap, F = 0; F < T.length; ++F)
                    if (!((r = T[F]) in t))
                        for (s = o.data.filter_value_variation_product[r], $ = 0; $ < s.length; ++$)
                            if (s[$] in d) {
                                t[r] = !0, M[a++] = r;
                                break
                            } for (M.length = a, T = M, F = 0; F < D.length; ++F) {
                    for (i = D[F], l = (u = o.data.products[i]).variations, h = {}, m = {}, $ = 0; $ < l.length; ++$) v = (p = o.data.variations[l[$]]).id in t, (g = p.option_group in m) && !v || (!g && v && delete h[p.option_group], x = null !== (y = p.prices[i]).discounted_with_vat ? y.discounted_with_vat : y.original_with_vat, k = null !== y.discounted_no_vat ? y.discounted_no_vat : y.original_no_vat, p.option_group in h && !(h[p.option_group].discounted_with_vat > x) || !(p.buyable_out_of_stock || p.stock >= u.min_order_qty) || (v && (m[p.option_group] = !0), h[p.option_group] = {
                        discounted_with_vat: x,
                        discounted_no_vat: k,
                        original_with_vat: y.original_with_vat,
                        original_no_vat: y.original_no_vat
                    }));
                    for (c = u.option_groups, _ = 0, w = 0, b = 0, S = 0, $ = 0; $ < c.length; ++$) n = c[$], o.data.variation_option_groups[n].required && n in h && (_ += (f = h[n]).discounted_with_vat, w += f.discounted_no_vat, b += f.original_with_vat, S += f.original_no_vat);
                    x = null !== u.discounted_with_vat ? u.discounted_with_vat : u.original_with_vat, k = null !== u.discounted_no_vat ? u.discounted_no_vat : u.original_no_vat, u.discounted_lowest_price_with_vat = x + _, u.discounted_lowest_price_no_vat = k + w, u.original_lowest_price_with_vat = u.original_with_vat + b, u.original_lowest_price_no_vat = u.original_no_vat + S
                }
                return e.callParams = C, e.filteredVariations = T, e.productMap = d, e
            },
            filterCorrelatedOptionGroupsByProducts: function(e) {
                var t = {},
                    a = 0,
                    i = [],
                    n = 0,
                    r = e.filteredCorrelatedOptionGroups,
                    s = e.productMap,
                    l = new Array(r.length),
                    c = 0,
                    u = 0;
                for (c; c < r.length; ++c)
                    if (!((a = r[c]) in t))
                        for (i = o.data.filter_value_category_property_correlated_option_group_product[a], u = 0; u < i.length; ++u)
                            if (i[u] in s) {
                                t[a] = !0, l[n++] = a;
                                break
                            } return l.length = n, r = l, e.filteredCorrelatedOptionGroups = r, e
            },
            filterProductCountsByFilter: function(e) {
                var t, a = {},
                    n = 0,
                    r = {},
                    s = [],
                    l = 0,
                    c = [],
                    u = [],
                    d = "",
                    p = "",
                    h = null,
                    f = null,
                    g = null,
                    m = "",
                    v = 0,
                    y = "",
                    _ = "",
                    w = "",
                    b = "",
                    S = [],
                    x = [],
                    k = [],
                    C = [],
                    D = {},
                    T = [],
                    M = 0,
                    F = o.settings.customProductsFilters,
                    $ = null,
                    P = null,
                    I = [],
                    O = "",
                    E = "",
                    A = "",
                    L = "",
                    z = "",
                    j = Object.keys(o.data.filter_value_category_product),
                    R = [],
                    N = 0,
                    H = [],
                    Y = 0,
                    B = {},
                    W = [],
                    U = [],
                    V = [],
                    q = [],
                    G = {},
                    X = [],
                    K = [],
                    J = 0,
                    Z = 0;
                (t = o.settings.priceWithVat ? o.userFilters.price[0] === o.data.settings.price_range.low_with_vat && o.userFilters.price[1] === o.data.settings.price_range.high_with_vat : o.userFilters.price[2] === o.data.settings.price_range.low_no_vat && o.userFilters.price[3] === o.data.settings.price_range.high_no_vat) || (o.functions.each(e, function(e) {
                    n = e.value, r = o.data.products[n], (l = o.settings.priceWithVat ? r.discounted_lowest_price_with_vat : r.discounted_lowest_price_no_vat) >= o.userFilters.price[o.settings.priceWithVat ? 0 : 2] && l <= o.userFilters.price[o.settings.priceWithVat ? 1 : 3] && c.push(n)
                }), e = o.functions.intersection(c, e)), a.categories = {}, o.functions.each(j, function(e) {
                    g = e.value, d = "category-" + g, o.data.filter_value_category_product.hasOwnProperty(g) && (u = t ? o.data.filter_value_category_product[g] : o.functions.intersection(c, o.data.filter_value_category_product[g]), a.categories[d] = u)
                }), j = e, o.functions.each(j, function(e) {
                    for (r = e.value, X = o.data.products[r].options, J = 0; J < X.length; J++) v = o.data.category_property_options[X[J]].category_property, y = o.data.category_property_options[X[J]].name, o.data.category_properties[v].is_filter && (m = "option-" + v + "-" + i.escape(y), d = m, void 0 === a[p = "property-group-" + v] && (a[p] = {}), void 0 === a[p][d] && (a[p][d] = []), a[p][d].push(r))
                }), j = e, o.functions.each(j, function(e) {
                    r = e.value, X = o.data.products[r].correlated_option_groups, o.functions.each(X, function(e) {
                        K = o.data.category_property_option_groups[e.value].correlated_options, o.functions.each(K, function(e) {
                            G = o.data.category_property_correlated_options[e.value], v = G.category_property, y = G.name, o.data.category_properties[v].is_filter && (d = "option-" + v + "-" + i.escape(y), p = "property-group-" + v, a.hasOwnProperty(p) || (a[p] = {}), a[p].hasOwnProperty(d) || (a[p][d] = []), a[p][d].push(r))
                        })
                    })
                }), j = Object.keys(o.data.filter_localized_tag_product), o.functions.each(j, function(e) {
                    _ = e.value, p = "tag-b" === _.substring(0, 5) ? "tags-brand" : "tags-default", d = i.escape(_), void 0 === a[p] && (a[p] = {}), o.data.filter_localized_tag_product.hasOwnProperty(_) && (u = t ? o.data.filter_localized_tag_product[_] : o.functions.intersection(c, o.data.filter_localized_tag_product[_]), a[p][d] = u)
                }), j = Object.keys(o.data.filter_localized_color_variation), a.colors = {}, o.functions.each(j, function(e) {
                    b = e.value, d = i.escape(b), W = [], V = [], o.userFilters.sizes.length > 0 ? o.functions.each(o.userFilters.sizes, function(e) {
                        U = o.functions.intersection(o.data.filter_localized_color_variation[b], o.data.filter_localized_size_variation[e.value]), V = o.functions.union(V, U), W = V
                    }) : W = o.data.filter_localized_color_variation[b], T = [], o.data.filter_localized_color_variation.hasOwnProperty(b) && (o.functions.each(W, function(e) {
                        o.userFilters.extra.hasOwnProperty("variationBuyable") ? (D = o.data.variations[e.value], M = o.data.products[o.data.filter_value_variation_product[D.id]].min_order_qty, (D.buyable_out_of_stock || D.stock >= M) && T.push(o.data.filter_value_variation_product[e.value])) : T.push(o.data.filter_value_variation_product[e.value])
                    }), T = o.functions.union.apply(this, T), u = t ? T : o.functions.intersection(c, T), a.colors[d] = u)
                }), j = Object.keys(o.data.filter_localized_size_variation), a.sizes = {}, o.functions.each(j, function(e) {
                    w = e.value, d = i.escape(w), W = [], q = [], o.userFilters.colors.length > 0 ? o.functions.each(o.userFilters.colors, function(e) {
                        U = o.functions.intersection(o.data.filter_localized_size_variation[w], o.data.filter_localized_color_variation[e.value]), q = o.functions.union(q, U), W = q
                    }) : W = o.data.filter_localized_size_variation[w], T = [], o.data.filter_localized_size_variation.hasOwnProperty(w) && (o.functions.each(W, function(e) {
                        o.userFilters.extra.hasOwnProperty("variationBuyable") ? (D = o.data.variations[e.value], M = o.data.products[o.data.filter_value_variation_product[D.id]].min_order_qty, (D.buyable_out_of_stock || D.stock >= M) && T.push(o.data.filter_value_variation_product[e.value])) : T.push(o.data.filter_value_variation_product[e.value])
                    }), T = o.functions.union.apply(this, T), u = t ? T : o.functions.intersection(c, T), a.sizes[d] = u)
                });
                var Q = [];
                for (var ee in a.sizes) a.sizes.hasOwnProperty(ee) && (Q = o.functions.union(Q, a.sizes[ee]));
                var te = [];
                for (var ae in a.colors) a.colors.hasOwnProperty(ae) && (te = o.functions.union(te, a.colors[ae]));
                t || (e = o.functions.intersection(c, e)), o.functions.each(e, function(e) {
                    if (r = o.data.products[e.value], n = r.id, s = r.variations, r.is_new && S.push(n), null !== r.discounted_no_vat && r.discounted_no_vat !== r.original_no_vat) x.push(n);
                    else if (void 0 !== s && s.length > 0)
                        for (J = 0; J < s.length; ++J)
                            if ((D = o.data.variations[s[J]]).id in o.filteredVariationsMap && null !== D.discounted_no_vat && D.discounted_no_vat !== D.original_no_vat) {
                                x.push(n);
                                break
                            } if (void 0 !== s && s.length > 0)
                        for (J = 0; J < s.length; ++J)
                            if (D = o.data.variations[s[J]], M = r.min_order_qty, D.id in o.filteredVariationsMap && (D.buyable_out_of_stock || D.stock >= M)) {
                                k.push(n);
                                break
                            } for (J = 0; J < F.length; ++J) $ = F[J], (P = o.settings.customProductFilterFunctions[$](r)) && (void 0 === C[$] && (C[$] = []), C[$].push(n))
                }), void 0 === a.extra && (a.extra = {}), a.extra["isNew-filter"] = S, a.extra["discounted-filter"] = x, a.extra["variationBuyable-filter"] = k, j = Object.keys(C), o.functions.each(j, function(e) {
                    h = e.value, d = h, a.extra[d] = C[h]
                }), j = Object.keys(o.userFilters), o.functions.each(j, function(e) {
                    if (h = e.value, O = h, void 0 !== (R = o.userFilters[h]) && null !== R)
                        if (N = R.length, -1 !== ["categories", "colors", "sizes"].indexOf(h)) {
                            if (N > 0) {
                                for (J = 0; J < N; ++J) void 0 === I[O] && (I[O] = []), I[O].push(a[O][i.escape(R[J])]);
                                I[O] = o.functions.union.apply(this, I[O])
                            }
                        } else if (-1 !== ["extra", "properties", "tags"].indexOf(h))
                        for (H = Object.keys(R), Y = H.length, J = 0; J < Y; ++J) {
                            for (E = H[J], Z = 0; Z < R[E].length; ++Z) "brand" === E ? O = "tags-brand" : "default" === E && (O = "tags-default"), "extra" === h && (O = R[E][Z]), "properties" === h && (O = "property-group-" + E), void 0 === I[O] && (I[O] = []), void 0 === a[O] && void 0 === a[h][O] || ("brand" === E || "default" === E || "properties" === h ? void 0 !== a[O][i.escape(R[E][Z])] && I[O].push(a[O][i.escape(R[E][Z])]) : void 0 !== a[h][i.escape(R[E][Z])] && I[O].push(a[h][i.escape(R[E][Z])]));
                            "tags" !== O && (I[O] = o.functions.union.apply(this, I[O])), O = ""
                        }
                }), j = Object.keys(I), R = Object.keys(a), N = R.length, o.functions.each(j, function(e) {
                    if ("" !== (A = e.value))
                        for (J = 0; J < N; ++J)
                            if (L = R[J], "variationBuyable-filter" === A && ("colors" === L || "sizes" === L) || "sizes" === A && "colors" === L || "colors" === A && "sizes" === L);
                            else if ("extra" === L || A !== L)
                        for (H = Object.keys(a[L]), Y = H.length, Z = 0; Z < Y; ++Z)("variationBuyable-filter" !== (z = H[Z]) || "sizes" !== A && "colors" !== A) && (a[L][z] = o.functions.intersection(I[A], a[L][z]))
                }), j = Object.keys(a), o.functions.each(j, function(e) {
                    if (h = e.value, void 0 !== a[h])
                        for (R = Object.keys(a[h]), N = R.length, J = 0; J < N; ++J) f = R[J], B[f] = a[h][f]
                }), o.filteredProductsCountByFilter = B
            },
            collectInputsFromFilteredProductsAndVariations: function(e, t, a) {
                var i = 0,
                    n = {},
                    r = "",
                    s = 0,
                    l = [],
                    c = {},
                    u = new Array(e.length),
                    d = 0,
                    p = new Array(e.length),
                    h = 0,
                    f = {},
                    g = [],
                    m = [],
                    v = [],
                    y = {},
                    _ = [],
                    w = [],
                    b = [],
                    S = new Array(o.data.ids_category_property_option.length + o.data.ids_category_property_correlated_option.length),
                    x = 0,
                    k = [],
                    C = {},
                    D = {},
                    T = {},
                    M = {},
                    F = null,
                    $ = [],
                    P = [],
                    I = [],
                    O = 0,
                    E = {},
                    A = 0,
                    L = 0;
                for (A; A < t.length; ++A) i = t[A], (r = "color-" + (n = o.data.variations[i]).color_hex + "-" + n.color_name) in C || (w.push(r), C[r] = !0), (r = "size-0-" + n.size_name) in D || (b.push(r), D[r] = !0);
                for (A = 0; A < a.length; ++A)
                    for (s = a[A], l = o.data.category_property_option_groups[s].correlated_options, L = 0; L < l.length; ++L)(r = "option-" + (c = o.data.category_property_correlated_options[l[L]]).category_property + "-" + c.name) in T || (S[x++] = r, T[r] = !0);
                for (A = 0; A < e.length; ++A) {
                    for (h = e[A], g = (f = o.data.products[h]).tags, m = f.options, v = f.categories, L = 0; L < g.length; ++L)(r = "tag-" + ((y = o.data.tags[g[L]]).is_brand ? "b-" : "d-") + y.name) in M || (k.push(r), M[r] = !0);
                    for (L = 0; L < m.length; ++L)(r = "option-" + (c = o.data.category_property_options[m[L]]).category_property + "-" + c.name) in o.data.filter_localized_category_property_correlated_option_group || r in T || (S[x++] = r, T[r] = !0);
                    p[d] = v, u[d++] = f
                }
                var z = o.settings.disableInputsWhenFilterSelected || o.settings.useDynamicExtraFilters,
                    j = o.functions.getExtraFilters(z, e);
                for (S.length = x, u.length = d, p.length = d, o.filteredProducts = u, o.settings.callBackAfterProductsFiltered && ((F = new o.afterActionEvent).products = u, o.settings.callBackAfterProductsFiltered(F)), P = p = o.functions.union.apply(this, p); P.length > 0;) {
                    for (I = [], A = 0; A < P.length; ++A)(O = P[A]) in o.data.categories && (E = o.data.categories[O], $.push([E.id]), E.parent && E.parent in o.data.categories && I.push([E.parent]));
                    P = o.functions.union.apply(this, I)
                }
                for (A = 0; A < $.length; ++A) r = "category-" + (O = $[A]), _.push(r);
                return o.functions.merge(_, w, b, k, S, j)
            },
            filterAllPropertyFiltersFromCertainYear: function(e) {
                for (var t = [], a = {}, i = o.settings.dataAdapterYearListPropertyIds, n = [], r = 0; r < i.length; ++r) {
                    n = o.filterPropertyOptionElementData[i[r]];
                    for (var s = 0; s < n.length; ++s) {
                        var l = n[s];
                        if ("" !== l.text) {
                            var c = l.text.split("-");
                            if (e >= parseInt(c[0]) && e <= parseInt(c[1])) {
                                var u = l.mapString;
                                u in a || (t.push(u), a[u] = !0)
                            }
                        }
                    }
                }
                return t
            }
        }, o.init = function(e, t) {
            t ? (o.functions.checkIfAllPluginsAreLoaded(), o.functions.setSettings(t)) : o.complaints.push("Percolator initialized with empty settings object"), o.settings.debug && console.log("*********** INIT Started *********"), e.ids_product && (o.JSONBuffer.productList = e, o.JSONLoaded.productList = !0, o.functions.setData(e)), o.handlers.startDataLoad(), o.handlers.afterDataLoad(), o.settings.usePagination && (window.onhashchange = function() {
                o.curIndex = 0, o.functions._getHashParameters = void 0, o.functions.resetProductList(!0)
            })
        }, o.handlers = {
            jsonLoaded: function() {
                if (!o.JSONToLoad.count) {
                    if (o.JSONLoaded.companyPrices) {
                        var e, t, a, i, n, r, s, l, c, u, d;
                        l = o.JSONBuffer.companyPrices.products, c = o.JSONBuffer.companyPrices.variations;
                        var p = o.JSONBuffer.productList;
                        for (e = 0; e < p.ids_product.length; ++e)(a = p.ids_product[e]) in l && (r = p.products[a], s = l[a], n = r.vat_percent, null !== s.fixed_price_no_vat ? (r.original_no_vat = s.fixed_price_no_vat, r.original_with_vat = Math.round(r.original_no_vat * (1e-4 * (1e4 + n))), r.discounted_no_vat = r.original_no_vat, r.discounted_with_vat = r.original_with_vat) : null !== s.discount_percent && (r.original_no_vat = Math.round(r.original_no_vat * (1e-4 * (1e4 - s.discount_percent))), r.original_with_vat = Math.round(r.original_no_vat * (1e-4 * (1e4 + n))), r.discounted_no_vat = r.original_no_vat, r.discounted_with_vat = r.original_with_vat));
                        for (e = 0; e < p.ids_variation.length; ++e)
                            if ((a = p.ids_variation[e]) in c)
                                for (d = c[a], u = p.filter_value_variation_product[a], t = 0; t < u.length; ++t)(i = u[t]) in d && (r = p.variations[a].prices[i], s = d[i], n = r.vat_percent, null !== s.fixed_price_no_vat ? (r.original_no_vat = s.fixed_price_no_vat, r.original_with_vat = Math.round(r.original_no_vat * (1e-4 * (1e4 + n))), r.discounted_no_vat = r.original_no_vat, r.discounted_with_vat = r.original_with_vat) : null !== s.discount_percent && (r.original_no_vat = Math.round(r.original_no_vat * (1e-4 * (1e4 - s.discount_percent))), r.original_with_vat = Math.round(r.original_no_vat * (1e-4 * (1e4 + n))), r.discounted_no_vat = r.original_no_vat, r.discounted_with_vat = r.original_with_vat))
                    }
                    o.functions.setData(o.JSONBuffer.productList), o.handlers.afterDataLoad()
                }
            },
            startDataLoad: function() {
                o.settings.debug && console.log("*********** Start data load *********");
                var e = o.$productList && o.$productList.length && (o.data.ids_product || o.settings.currentAjaxUrl),
                    t = o.functions.getCookie("company");
                e && t.length && !o.JSONToLoad.companyPrices && !o.JSONLoaded.companyPrices && o.settings.useLocalCompanyPrices && (o.JSONToLoad.companyPrices = !0, ++o.JSONToLoad.count, n.ajax({
                    type: "GET",
                    url: o.settings.currentBaseUri + "ajax/companyPrices?company=" + t,
                    dataType: "text",
                    success: function(e) {
                        o.JSONBuffer.companyPrices = o.functions.parseJSONObject(e), o.JSONToLoad.companyPrices = !1, o.JSONLoaded.companyPrices = !0, o.JSONToLoad.count--, o.handlers.jsonLoaded()
                    },
                    error: function(e, t, a) {
                        o.settings.debug && console.log(e.status + " " + a)
                    }
                })), !e || o.JSONToLoad.productList || o.JSONLoaded.productList || (o.JSONToLoad.productList = !0, ++o.JSONToLoad.count, n.ajax({
                    type: "GET",
                    url: o.settings.currentAjaxUrl,
                    dataType: "text",
                    success: function(e) {
                        s.iOS() ? o.JSONBuffer.productList = r(e) : o.JSONBuffer.productList = o.functions.parseJSONObject(e), o.JSONToLoad.productList = !1, o.JSONLoaded.productList = !0, o.JSONToLoad.count--, o.handlers.jsonLoaded()
                    },
                    error: function(e, t, a) {
                        o.settings.debug && console.log(e.status + " " + a)
                    }
                }))
            },
            afterFilterAllDataAndFilters: function() {
                o.functions.render(o.filteredProducts, o.settings.usePagination ? o.settings.productsAtOnce : o.functions.loadProductsAtOnceFromStorage()), void 0 !== o.settings.endOfInit && o.settings.endOfInit(), o.settings.useInfiniteScroll && !o.settings.usePagination ? o.functions.createInfiniteScroll() : o.functions.createScrollListener(), o.settings.debug && console.log("*********** INIT ENDED *********")
            },
            afterCreateFilters: function() {
                o.functions.toggleInputsOnOff(n(o.settings.vatSelector), o.settings.priceWithVat), o.registeredFilters = [], o.handlers.createPropertyListener(["categories"], o.settings.categoriesSelector, o.settings.categoriesType, null, !1, !1), o.handlers.createPropertyListener(["colors"], o.settings.colorsSelector, o.settings.colorsType, null, !1, !1), o.handlers.createPropertyListener(["sizes"], o.settings.sizesSelector, o.settings.sizesType, null, !1, !1), o.handlers.createPropertyListener(["tags", "default"], o.settings.tagsSelector, o.settings.tagsType, null, !1, !1), o.handlers.createPropertyListener(["tags", "brand"], o.settings.tagsSelectorBrand, o.settings.tagsType, null, !1, !1), o.handlers.createPropertyListener(["columns"], o.settings.columnsSelector, o.settings.columnsSelectorType, "columnsQtyChange", !0, !0), o.handlers.createPropertyListener(["vat-change"], o.settings.vatSelector, o.settings.vatSelectorType, null, !0, !0), i.each(o.data.category_properties, function(e) {
                    var t = {
                        filter: "property",
                        property: e,
                        propertiesType: o.settings.propertiesType
                    };
                    o.settings.callBackBeforeRegisterFilter && o.settings.callBackBeforeRegisterFilter(t), o.handlers.createPropertyListener(["property", e.id], "#" + o.settings.propertiesIdPrefix + "-" + e.id, t.propertiesType, -1 !== o.settings.dataAdapterYearListPropertyIds.indexOf(e.id) ? "yearPropertyRangeChange" : null, !1, !1)
                }), o.handlers.createPropertyListener(["extra", "discounted"], o.settings.discountedSelector, o.settings.discountedType, null, !0, !1), o.handlers.createPropertyListener(["extra", "isNew"], o.settings.isNewSelector, o.settings.isNewType, null, !0, !1), o.handlers.createPropertyListener(["extra", "variationBuyable"], o.settings.variationBuyableSelector, o.settings.variationBuyableType, null, !0, !1), o.handlers.createPropertyListener(["extra", "customProductFilter"], o.settings.customProductFilterSelector, o.settings.customProductFilterType, null, !0, !1), o.settings.customSortingSelector || n(o.settings.sortingSelector).val(o.settings.sortingMode).on("change", function() {
                    var e = n(this).val();
                    e !== o.settings.sortingMode && o.handlers.sortingChange(e)
                }), o.settings.useInfiniteScroll || n(document).on("click", o.settings.showMoreSelectorBtn, function() {
                    o.handlers.showMoreClicked()
                }), o.functions.callAsync(o.handlers.filterAllDataAndFilters).done(o.handlers.afterFilterAllDataAndFilters)
            },
            afterEverythingLoadedFromStorage: function() {
                o.settings.callbackAfterUserFiltersLoadedFromStorage && o.settings.callbackAfterUserFiltersLoadedFromStorage();
                var e = o.functions.getCookie("store_show_vat");
                o.data.settings.use_store_show_vat && "1" === o.data.settings.use_store_show_vat && ("" !== e ? o.userFilters.vat = o.settings.priceWithVat = "1" === e : (void 0 !== o.userFilters.vat && null !== o.userFilters.vat && (o.settings.priceWithVat = o.userFilters.vat), o.functions.setVatCookie(o.settings.priceWithVat ? "1" : "0"))), o.settings.priceWithVat ? n("body").addClass("show-vat").removeClass("hide-vat") : n("body").addClass("hide-vat").removeClass("show-vat"), o.functions.callAsync(o.functions.createFilters).done(o.handlers.afterCreateFilters)
            },
            afterDataLoad: function() {
                if (!o.JSONToLoad.count) {
                    if (o.settings.debug && console.log("*********** All data loaded, start processing *********"), !o.$productList || !o.$productList.length) return o.complaints.push("Percolator.settings.productListSelector " + o.settings.productListSelector + " not found, skipping rendering of products"), void o.functions.handleNonProductListPage();
                    if (!o.data.ids_product || !o.data.ids_product.length) return void 0 !== o.settings.noProductsFunction ? o.settings.noProductsFunction() : (n(o.settings.ajaxLoaderSelector).hide(), n(o.settings.noProductsSelector).show()), void o.functions.handleNonProductListPage();
                    n(o.settings.ajaxLoaderSelector).show(), o.functions.changeUnderscoreTemplateSymbols(), o.functions.loadEverythingFromStorage().done(o.handlers.afterEverythingLoadedFromStorage)
                }
            },
            productCardOpened: function() {
                o.productListOffsetSaveable = !1
            },
            filterChangeDoRefresh: function() {
                void 0 !== o.$productList && o.$productList.length && (o.functions.saveUserFiltersToStorage(), o.functions.callAsync(o.handlers.filterAllDataAndFilters, !0).done(function() {
                    o.settings.usePagination ? (window.location.hash = "#page=1", n(window).trigger("hashchange")) : (o.curIndex < o.settings.pageReloadScrollProductsMax ? o.functions.saveProductIndex(!1) : o.functions.saveProductIndex(!0), setTimeout(function() {
                        o.functions.render(o.filteredProducts)
                    }, 100))
                }))
            },
            filtersChange: function(e, t) {
                if ("property" === t[0]) {
                    var a = t[1];
                    0 === e.length ? delete o.userFilters.properties[a] : o.userFilters.properties[a] = e
                } else if ("tags" === t[0]) o.userFilters.tags[t[1]] = e;
                else if ("extra" === t[0]) e.length ? o.userFilters.extra[t[1]] = e : delete o.userFilters.extra[t[1]];
                else if ("vat-change" === t[0]) o.settings.priceWithVat = e.length > 0 && e[0], o.functions.handleVatChange();
                else {
                    if (!(t[0] in o.userFilters)) return void(o.settings.debug && console.log('ERROR! No filter called: "' + t[0] + '". Make sure the spelling is correct.'));
                    o.userFilters[t[0]] = e
                }
                o.handlers.filterChangeDoRefresh()
            },
            sortingChange: function(e) {
                o.settings.sortingMode = e, o.settings.usePagination ? (window.location.hash = "#page=1", n(window).trigger("hashchange")) : (o.functions.resetProductList(), o.functions.saveOrderByToStorage(), setTimeout(function() {
                    o.functions.render(o.filteredProducts)
                }, 100))
            },
            showMoreClicked: function() {
                setTimeout(function() {
                    var e = o.settings.productsAtOnce,
                        t = o.filteredProducts.length - o.curIndex,
                        a = n(o.settings.showMoreSelector).offset().top - o.settings.showMoreScrollOffset;
                    2 * e > t && (e = t), o.functions.scrollTo(a), o.functions.render(o.filteredProducts, e)
                }, 100)
            },
            columnsQtyChange: function(e) {
                o.functions.changeColumnsQty(e[0]) && (o.functions.resetProductList(), o.functions.render(o.filteredProducts), o.functions.saveColumnsQtyToStorage())
            },
            yearPropertyRangeChange: function(e, t) {
                if ("property" === t[0]) {
                    var a = t[1];
                    if (0 === e.length) delete o.userFilters.properties[a], o.settings.useSessionStorage && o.functions.deleteFromStorage(window.location.href + "-year-filter-" + a);
                    else {
                        var i = parseInt(e[0].replace("year-", "")),
                            n = o.functions.filterAllPropertyFiltersFromCertainYear(i);
                        o.settings.useSessionStorage && (isNaN(i) ? o.functions.deleteFromStorage(window.location.href + "-year-filter-" + a) : o.functions.writeToStorage(window.location.href + "-year-filter-" + a, i)), o.userFilters.properties[a] = n
                    }
                    o.handlers.filterChangeDoRefresh()
                } else o.settings.debug && console.log('ERROR! No filter called: "' + t[0] + '". Make sure the spelling is correct.')
            },
            priceChange: function(e) {
                2 === e.length ? (o.userFilters.price[o.settings.priceWithVat ? 0 : 2] = e[0], o.userFilters.price[o.settings.priceWithVat ? 1 : 3] = e[1], o.handlers.filterChangeDoRefresh()) : o.settings.debug && console.log("Provide an array of min and max prices [min, max].")
            },
            windowScrolled: function() {
                var e = o.$window.height() + o.$window.scrollTop() + o.settings.bufferPx;
                o.$productList.offset().top + o.$productList.height() < e && o.functions.render(o.filteredProducts), o.functions.saveLocationToSessionStorage()
            },
            createPropertyListener: function(e, t, a, r, s, l) {
                var c, u = n(t),
                    d = [];
                switch (t.length && d.push(t), a) {
                    case "select":
                        c = "", u.length > 0 && o.registeredFilters.push({
                            selectorMainObj: u,
                            selectorMain: t,
                            selectorSub: c,
                            inputType: a,
                            filterElementIdentification: e,
                            singular: s,
                            mustHaveValue: l
                        }), c.length && d.push(c), d.join(" "), u.on("change", function() {
                            var t = n(this);
                            if (t.is("disabled") || t.hasClass("disabled")) return !1;
                            var a = o.functions.cleanInputValue(t, !1, d);
                            r && r.length && i.isFunction(o.handlers[r + ""]) ? o.handlers[r + ""](a, e) : o.handlers.filtersChange(a, e)
                        });
                        break;
                    case "checkbox":
                        c = "input:checkbox:checked", u.length > 0 && o.registeredFilters.push({
                            selectorMainObj: u,
                            selectorMain: t,
                            selectorSub: c,
                            inputType: a,
                            filterElementIdentification: e,
                            singular: s,
                            mustHaveValue: l
                        }), c.length && d.push(c), d.join(" "), u.on("change", "input:checkbox", function() {
                            var t = n(this);
                            if (t.is("disabled") || t.hasClass("disabled")) return !1;
                            var a = [];
                            return u.find(c).each(function() {
                                var e = o.functions.cleanInputValue(n(this), !1, d);
                                e.length && a.push(e[0])
                            }), o.handlers.filtersChange(a, e), !0
                        });
                        break;
                    case "link":
                        c = ".filter-value.current", u.length > 0 && o.registeredFilters.push({
                            selectorMainObj: u,
                            selectorMain: t,
                            selectorSub: c,
                            inputType: a,
                            filterElementIdentification: e,
                            singular: s,
                            mustHaveValue: l
                        }), c.length && d.push(c), d.join(" "), u.on("click", ".filter-value", function(a) {
                            a.preventDefault();
                            var u, p = n(this),
                                h = n(t),
                                f = h.find(".filter-value"),
                                g = [],
                                m = p.hasClass("current");
                            l && s && m || (s ? (f.removeClass("current"), m || p.addClass("current")) : m ? p.removeClass("current") : p.addClass("current"), h.find(c).each(function() {
                                u = o.functions.cleanInputValue(n(this), !0, d), n.each(u, function(e, t) {
                                    g.push(t)
                                })
                            }), r && r.length && i.isFunction(o.handlers[r + ""]) ? o.handlers[r + ""](g, e) : o.handlers.filtersChange(g, e))
                        });
                        break;
                    case "toggledLink":
                        c = ".filter-value.current", u.length > 0 && o.registeredFilters.push({
                            selectorMainObj: u,
                            selectorMain: t,
                            selectorSub: c,
                            inputType: a,
                            filterElementIdentification: e,
                            singular: s,
                            mustHaveValue: l
                        }), c.length && d.push(c), d.join(" "), u.on("click", function(a) {
                            a.preventDefault();
                            var s = n(t),
                                l = s.find(c).hasClass("value-on"),
                                u = [!l];
                            o.functions.toggleInputsOnOff(s, !l), r && r.length && i.isFunction(o.handlers[r + ""]) ? o.handlers[r + ""](u, e) : o.handlers.filtersChange(u, e)
                        });
                        break;
                    case "rangeSlider":
                        u.length > 0 && o.registeredFilters.push({
                            selectorMainObj: u,
                            selectorMain: t,
                            selectorSub: "",
                            inputType: a,
                            filterElementIdentification: e,
                            singular: s,
                            mustHaveValue: l
                        });
                        break;
                    default:
                        return void(o.settings.debug && console.log("Make sure to provide changed filter values as an array to => Percolator.handlers.filtersChange(values," + e[0] + ")"))
                }
            },
            filterAllDataAndFilters: function() {
                o.filteredProducts = [], o.filteredVariationsMap = {}, o.settings.showFilteredProductsCount && (o.filteredProductsCountByFilter = {});
                var e = [],
                    t = {},
                    a = i.clone(o.data.ids_variation),
                    n = {
                        callParams: e,
                        filteredProducts: i.clone(o.data.ids_product),
                        filteredVariations: a,
                        filteredCorrelatedOptionGroups: i.clone(o.data.ids_category_property_correlated_option_groups),
                        productMap: t
                    },
                    r = n.filteredProducts;
                if (n = o.functions.filterProductsAndVariations(n), o.filteredObjectAll = n, o.settings.showFilteredProductsCount) {
                    var s = performance.now();
                    o.functions.filterProductCountsByFilter(r);
                    var l = performance.now();
                    o.settings.debug && console.log("Call to filterProductCountsByFilter took " + (l - s) + " milliseconds.")
                }
                var c = o.functions.collectInputsFromFilteredProductsAndVariations(n.filteredProducts, n.filteredVariations, n.filteredCorrelatedOptionGroups),
                    u = o.functions.difference(o.filterArrayMapStrings, c);
                o.settings.removeSelectOptionsInsteadOfDisabling && o.handlers.restoreInputs(), o.handlers.enableInputs(c), o.settings.disableInputsWhenFilterSelected && o.handlers.disableInputs(u), o.settings.removeSelectOptionsInsteadOfDisabling && o.handlers.backupInputs(), void 0 !== o.settings.callBackAfterFiltersHaveBeenUpdated && i.isFunction(o.settings.callBackAfterFiltersHaveBeenUpdated) && o.settings.callBackAfterFiltersHaveBeenUpdated(), o.functions.resetProductList()
            },
            backupInputs: function() {
                var e, t, a, n, r, s;
                i.each(o.registeredFilters, function(i) {
                    switch (t = i.selectorMainObj, a = i.inputType, e = t.find(i.selectorSub), r = i.filterElementIdentification, n = [], a) {
                        case "select":
                            "property" === r[0] && (s = r[1], o.backupInputs[s] = t.html(), t.find("option.disabled").remove())
                    }
                })
            },
            restoreInputs: function() {
                var e, t, a, n, r, s;
                i.each(o.registeredFilters, function(i) {
                    switch (t = i.selectorMainObj, a = i.inputType, e = t.find(i.selectorSub), r = i.filterElementIdentification, n = [], a) {
                        case "select":
                            "property" === r[0] && (s = r[1]) in o.backupInputs && t.html(o.backupInputs[s])
                    }
                })
            },
            disableInputs: function(e) {
                var t, a;
                i.each(e, function(e) {
                    t = o.filterMapStringToId[e], a = o.settings.filterInputIdPrefix + "-" + t, o.filterEnabledMap[e] = !1, n(document.getElementById(a)).not(":checked").prop("disabled", !0).addClass("disabled").parent(o.settings.filterParentSelector).addClass("disabled")
                })
            },
            enableInputs: function(e) {
                i.each(e, function(e) {
                    var t = o.filterMapStringToId[e],
                        a = o.settings.filterInputIdPrefix + "-" + t;
                    o.filterEnabledMap[e] = !0, n(document.getElementById(a)).prop("disabled", !1).removeClass("disabled").parent(o.settings.filterParentSelector).removeClass("disabled")
                })
            },
            checkInputs: function(e) {
                i.each(e, function(e) {
                    var t = o.filterMapStringToId[e];
                    n(document.getElementById(o.settings.filterInputIdPrefix + "-" + t)).prop("checked", !0).parent().addClass("checked")
                })
            }
        }, o.select2Loaded = n && n.fn && n.fn.select2, o.select2PaginationLoaded = o.select2Loaded && n.fn.select2.amd, o.select2PaginationLoaded && n.fn.select2.amd.define("select2/data/percolatorSelect2PaginatedAdapter", ["select2/data/array", "select2/utils"], function(e, t) {
            function a(e, t) {
                a.__super__.constructor.call(this, e, t)
            }

            function i(e, t) {
                return new RegExp(t, "i").test(e)
            }
            return t.Extend(a, e), a.prototype.query = function(e, t) {
                "page" in e || (e.page = 1), "term" in e || (e.term = "");
                var a, n = 0,
                    r = "" === e.term;
                if (o.settings.dataAdapterPropertyClass && o.settings.dataAdapterPropertyClass.length && this.$element.hasClass(o.settings.dataAdapterPropertyClass)) {
                    var s, l, c, u, d, p = this.$element[0].id.replace(o.settings.propertiesIdPrefix + "-", ""),
                        h = o.filterPropertyOptionElementData[p],
                        f = !1; - 1 !== o.settings.dataAdapterYearListPropertyIds.indexOf(parseInt(p)) && (f = !0);
                    var g = o.functions.readFromStorage(window.location.href + "-year-filter-" + p);
                    for (a = [], s = 0, l = h.length; s < l; ++s) {
                        u = (c = h[s]).text, d = c.mapString;
                        var m = f ? new RegExp(e.term).test(u) : new RegExp(e.term, "i").test(u);
                        if (o.filterEnabledMap[d] && (r || m))
                            if (f) {
                                if (g) {
                                    a.push({
                                        id: "year-" + g,
                                        text: g
                                    });
                                    break
                                }
                                var v = u.split("-"),
                                    y = v[0],
                                    _ = v[1];
                                new RegExp(e.term).test(y) ? 0 == a.filter(function(e) {
                                    return parseInt(e.text) === parseInt(y)
                                }).length && a.push({
                                    id: "year-" + y,
                                    text: y
                                }) : new RegExp(e.term).test(_) && 0 == a.filter(function(e) {
                                    return parseInt(e.text) === parseInt(_)
                                }).length && a.push({
                                    id: "year-" + _,
                                    text: _
                                })
                            } else if (a.push({
                                id: d,
                                text: u
                            }), ++n > 200 * e.page) break
                    }
                    f && a.sort(function(e, t) {
                        return e.text < t.text ? -1 : e.text > t.text ? 1 : 0
                    })
                } else a = this.$element.children().filter(":enabled").map(function(t, a) {
                    var n = a.textContent;
                    if ("" !== n && ("" === e.term || i(n, e.term))) return {
                        id: a.value,
                        text: n
                    }
                });
                t({
                    results: a.slice(200 * (e.page - 1), 200 * e.page),
                    pagination: {
                        more: a.length > 200 * e.page
                    }
                })
            }, a
        }), o.Utils = {
            select2PaginatedAdapter: o.select2PaginationLoaded ? n.fn.select2.amd.require("select2/data/percolatorSelect2PaginatedAdapter") : void 0
        }, window.Percolator = o
    }(_, $, json_parse);
var STORE_USER_DATA = {
        settings: {
            cookieValuesUISelector: ".js-cache-content",
            topcartContentSelector: ".js-top-cart-content",
            langMenuSelector: ".js-lang-menu",
            storeUserDataCookieName: "store_user_data2",
            userDataAjaxURL: "userData/get",
            topCartAjaxURL: "cart/read?ajax=1&json=1&include[ajax_content_top_cart]=ajax_content_top_cart",
            consentModalURL: "cart/read?ajax=1&include=user_consents_and_subscription_wrap",
            storeUserDataObj: {},
            askUserConsents: !0,
            deviceTimeOffset: 0
        },
        localStorageIsUsable: function() {
            var e = null;
            try {
                if ("object" == typeof localStorage) try {
                    localStorage.setItem("testLocalStorage", 1), localStorage.removeItem("testLocalStorage"), e = !0
                } catch (t) {
                    e = !1
                } else e = !1
            } catch (t) {
                e = !1
            }
            return e
        }(),
        init: function() {
            "use strict";
            !0 === this.localStorageIsUsable ? this.refreshStoreUserDataLocalStorageFlow() : this.refreshStoreUserDataNoLocalStorageFlow(), $(this.settings.langMenuSelector).length && $(this.settings.langMenuSelector).find('[data-language="' + $("html").attr("lang").toUpperCase() + '"]').addClass("active")
        },
        readCookie: function(e) {
            "use strict";
            for (var t = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; ++i) {
                for (var n = a[i];
                    " " === n.charAt(0);) n = n.substring(1, n.length);
                if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
            }
            return !1
        },
        refreshStoreUserDataLocalStorageFlow: function() {
            "use strict";
            var e = this,
                t = e.readCookie(e.settings.storeUserDataCookieName);
            t && (e.getFromStorage(e.settings.storeUserDataCookieName) !== t ? $.getJSON(e.settings.userDataAjaxURL, function(a) {
                return localStorage.setItem(e.settings.storeUserDataCookieName, t), a.data ? localStorage.setItem(e.settings.storeUserDataCookieName + "_json", JSON.stringify(a.data)) : localStorage.setItem(e.settings.storeUserDataCookieName + "_json", JSON.stringify(a)), a
            }).done(function(t) {
                e.settings.deviceTimeOffset = moment() - moment(1e3 * t.data.server_time), e.setStoreUserDataToUI()
            }) : e.setStoreUserDataToUI())
        },
        refreshStoreUserDataNoLocalStorageFlow: function() {
            "use strict";
            var e = this;
            $.getJSON(e.settings.userDataAjaxURL, function(t) {
                e.settings.storeUserDataObj = t.data, t.data.server_time && (e.settings.deviceTimeOffset = moment() - moment(1e3 * t.data.server_time))
            }).done(function() {
                e.setStoreUserDataToUI()
            })
        },
        setStoreUserDataToUI: function(e) {
            "use strict";
            var t = e ? $(e) : $doc.find(this.settings.cookieValuesUISelector),
                a = this,
                i = {};
            i = !0 === this.localStorageIsUsable ? a.getFromStorage(this.settings.storeUserDataCookieName + "_json", "json") : a.settings.storeUserDataObj, t.each(function() {
                var e = $(this),
                    t = e.data("store-user-data"),
                    n = "",
                    r = [];
                t && (t.indexOf(" ") > -1 ? (r = t.split(" ")).forEach(function(e, t) {
                    n += i[e], r.length > t && (n += " ")
                }) : n = i[t], e.find(".cart-size").length > 0 ? e.find(".cart-size").text(n) : "cart_timeout" === t && e.is("[data-init-timer]") ? a.cartTimeout(e, n) : "cart_timeout" === t ? n && e.text(a.showTimestamp(new Date(1e3 * n), e.data("date-format"))) : e.text(n), n && e.removeClass("hidden"))
            }), !0 === this.settings.askUserConsents && !1 === eraluvat.STORE.IS_CART_PAGE && !1 === eraluvat.STORE.IS_PROFILE_PAGE && this.getConsentModal()
        },
        getTopcart: function() {
            "use strict";
            var e = $(this.settings.topcartContentSelector),
                t = {},
                a = window.matchMedia("(min-width: 768px)").matches;
            t = !0 === this.localStorageIsUsable ? this.getFromStorage(this.settings.storeUserDataCookieName + "_json", "json") : this.settings.storeUserDataObj, !0 === a && t && t.cart_products > 0 && (0 === e.children().length ? $.getJSON(this.settings.topCartAjaxURL, function(t) {
                e.html(t.html.ajax_content_top_cart).slideDown()
            }) : e.slideToggle())
        },
        getFromStorage: function(e, t) {
            "use strict";
            return "json" === t ? JSON.parse(localStorage.getItem(e)) : localStorage.getItem(e)
        },
        cartTimeout: function(e, t) {
            "use strict";
            var a = null,
                i = {};
            t && (a = (eraluvat.app.settings.xhrTimeStamp, moment(1e3 * t) - (moment() - this.settings.deviceTimeOffset)), i = moment.duration(a, "ms"), $(e).removeClass("hidden").show(), i.asMilliseconds() > 0 ? eraluvat.app.settings.timer = setInterval(function() {
                (i = moment.duration(i.asMilliseconds() - 1e3, "ms")).asMilliseconds() > 0 ? 0 === i.get("hours") ? $(e).text(moment(i._data).format("mm:ss")) : $(e).text(moment(i._data).format("H:mm:ss")) : (clearInterval(eraluvat.app.settings.timer), $(e).text("00:00"), eraluvat.app.functions.showDialog(Store.translations.cart_reservation_time_ended, "/cart/restart"))
            }, 1e3) : ($(e).text("00:00"), eraluvat.app.functions.showDialog(Store.translations.cart_reservation_time_ended, "/cart/restart")))
        },
        getConsentModal: function() {
            "use strict";
            var e = {};
            !1 === (e = !0 === this.localStorageIsUsable ? this.getFromStorage(this.settings.storeUserDataCookieName + "_json", "json") : this.settings.storeUserDataObj).consents_saved && "" !== e.user_email && $.ajax({
                type: "GET",
                url: this.settings.consentModalURL + "&consent_email=" + this.encodeValue(e.user_email),
                dataType: "html",
                success: function(e) {
                    $("body").addClass("modal-visible").append(e)
                },
                error: function(e, t, a) {
                    console.log("Ajax error", e.status, a)
                }
            })
        },
        showTimestamp: function(e, t) {
            "use strict";
            var a = "en" === $("html").attr("lang").toLowerCase() ? "/" : ".";
            return t ? $.datepicker.formatDate(t, e) : this.padValue(e.getDate()) + a + this.padValue(parseInt(e.getMonth(), 10) + 1) + a + e.getFullYear()
        },
        padValue: function(e) {
            "use strict";
            var t = e;
            return parseInt(e, 10) < 10 && (t = "0" + e), t
        },
        encodeValue: function(e) {
            "use strict";
            return encodeURIComponent(e)
        }
    },
    eraluvat = eraluvat || {},
    $doc = $(document);
eraluvat.app = {
    settings: {
        SESSION_STORAGE_USABLE: void 0,
        IS_MOBILE: isMobile.any(),
        $searchElem: $(".autocomplete, #search ,#filter-search"),
        $searchContainer: $("#search,#filter-search").closest("div"),
        $topCart: $("#top-cart"),
        $topCartMobile: $("#cart-top-mobile"),
        $headerCart: $("#headercart"),
        $cartSize: $(".js-varnish-cartsize"),
        $userName: $(".js-varnish-username"),
        $modal: $(".modal"),
        $modalContent: $("#modal-content"),
        $cartForm: $("#cart-form"),
        $overlay: $("#overlay"),
        $redirectBoxID: $("#ask-to-redirect"),
        $timer: $(".js-timer"),
        timeout: null,
        timer: "",
        hasOldCart: Percolator.functions.getCookie("reservation") || "",
        cookieKeys: ["cart_rows", "cart_products", "cart_value", "cart_timeout", "user_email", "user_firstname", "user_lastname", "watchlist_product_count"],
        cookieValues: {},
        $productCard: $("#product"),
        $productCardAmountSelector: $("#productcard-amount"),
        $productCardTicketSelector: $(".js-productcard-ticket"),
        $ProductCardselectedDates: $(".selected-dates"),
        $productCardAddToCartButton: $("#product-form .add-to-cart"),
        $productCardInfoText: $("#product-form .booking-info-txt"),
        productSubmitSelector: ".js-add2cart",
        hourSlotSelectSelector: ".js-set-startslot",
        hourSlotEndTextSelector: ".js-slot-endtime-txt",
        productID: null,
        productCardTicketSelected: null,
        productCardDatepickerSelected: "undefined" != typeof DATE_FIRST_FREE ? DATE_FIRST_FREE : null,
        productDateSlots: [],
        productHourStartSlots: [],
        selectedBeginDate: "",
        selectedEndDate: "",
        days: 1,
        variationInitLoad: !0,
        productCardDatepickerSelectedDate: "",
        today: new Date,
        xhrTimeStamp: null,
        deviceTimeOffset: {},
        priceEstimationSelector: ".js-price-estimator",
        priceEstimationTargetSelector: ".js-price-estimator-ui"
    },
    functions: {
        checkHunterNumber: function(e) {
            var t = 0,
                a = 0,
                i = [7, 3, 1],
                n = "",
                r = 0,
                s = 8 === e.length && "number" == typeof parseInt(e, 10);
            if (s) {
                for (n = e.substr(0, 7), r = parseInt(e.substr(e.length - 1, 1), 10); t < n.length;) a += n.substr(n.length - t - 1, 1) * i[t % 3], t++;
                s = r === (10 - a % 10) % 10
            }
            return s
        },
        checkBookingStartDay: function(e) {
            if (void 0 !== $(".js-productcart-ticket").find("option:selected").data("start-weekday")) {
                var t = parseInt($(".js-productcart-ticket").find("option:selected").data("start-weekday"), 10);
                if (-1 !== e.indexOf(".")) a = e.split(".");
                else if (-1 !== e.indexOf("-")) a = e.split("-");
                else var a = e.split("/");
                var i = a[0],
                    n = a[1],
                    r = a[2];
                if (-1 !== e.indexOf(".")) s = r + "-" + n + "-" + i;
                else if (-1 !== e.indexOf("-")) s = r + "-" + n + "-" + i;
                else var s = r + "/" + n + "/" + i;
                var o = new Date(s).getDay();
                o !== t ? (eraluvat.app.functions.showDialog(Store.translations.booking_must_start_on + " " + Store.translations.weekdays[t] + "."), $(".slot").children().remove()) : o == t && 1 == $("#product").data("booking-by-hour") && eraluvat.app.settings.$productCardTicketSelector.trigger("change")
            }
        },
        dateFromString: function(e) {
            var t = e.split(/[^0-9]/).map(function(e) {
                return parseInt(e, 10)
            });
            return new Date(t[0], t[1] - 1 || 0, t[2] || 1, t[3] || 0, t[4] || 0, t[5] || 0, t[6] || 0)
        },
        getMondayOfTheWeek: function(e) {
            var t = e || new Date,
                a = (t.getDay() + 6) % 7,
                i = "",
                n = "",
                e = "";
            return t = new Date(t - 24 * a * 60 * 60 * 1e3), i = t.getFullYear(), n = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, e = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(), i + "-" + n + "-" + e
        },
        isSlotOnRange: function(e, t, a) {
            if (!e) return !1;
            var i = !1;
            return e >= t && e <= a && (i = !0), i
        },
        isSlotAvailable: function(e, t) {
            return e <= t
        },
        periodCheck: function(e, t, a, i) {
            return !("" != e && "" != i && "" != a && parseInt(e, 10) * parseInt(i, 10) > parseInt(a, 10))
        },
        changeDateFormat: function(e, t, a, i, n) {
            if (e) {
                if (10 !== e.length && 8 !== e.length && 9 !== e.length || -1 === e.indexOf(".")) {
                    if (19 === e.length && -1 !== e.indexOf("-")) {
                        e = (e = e.substring(0, 10)).split("-"), e = new Date(e[0], parseInt(e[1], 10) - 1, parseInt(e[2], 10), 0, 0, 0, 0)
                    }
                } else e = e.split("."), e = !0 !== a ? new Date(e[2], parseInt(e[1], 10), parseInt(e[0], 10), 0, 0, 0, 0) : new Date(e[2], parseInt(e[1], 10) - 1, parseInt(e[0], 10), 0, 0, 0, 0);
                t && e instanceof Date ? (!0 === i && e.setDate(1), e = e.getFullYear() + "-" + (parseInt(e.getMonth(), 10) > 9 ? e.getMonth() : "0" + e.getMonth()) + "-" + (parseInt(e.getDate(), 10) > 9 ? e.getDate() : "0" + e.getDate())) : !0 === n && e instanceof Date && (e = !0 !== a ? (parseInt(e.getDate(), 10) > 9 ? e.getDate() : "0" + e.getDate()) + "." + (parseInt(e.getMonth(), 10) > 9 ? e.getMonth() : "0" + e.getMonth()) + "." + e.getFullYear() : (parseInt(e.getDate(), 10) > 9 ? e.getDate() : "0" + e.getDate()) + "." + (parseInt(e.getMonth(), 10) >= 9 ? e.getMonth() + 1 : "0" + (e.getMonth() + 1)) + "." + e.getFullYear())
            }
            return e
        },
        addToCart: function(e, t) {
            var a = $.Deferred(),
                i = [];
            t.addClass("disabled").attr("disabled", "disabled");
            return $.ajax({
                url: "cart/add?ajax=1&include[modal]=add2cart_done",
                data: e,
                dataType: "json",
                type: "POST",
                beforeSend: function() {
                    eraluvat.app.functions.showLoadingAnimation()
                },
                success: function(e, n, r) {
                    var s = null;
                    if (eraluvat.app.settings.xhrTimeStamp = moment(new Date(r.getResponseHeader("date"))), s = new Date - eraluvat.app.settings.xhrTimeStamp, eraluvat.app.settings.deviceTimeOffset = s, e.hasOwnProperty("successful") && !0 === e.successful) {
                        if (STORE_USER_DATA.init(), clearInterval(eraluvat.app.settings.timer), eraluvat.app.settings.$cartSize.removeClass("hidden"), eraluvat.app.settings.$cartSize.closest(".js-is-empty").removeClass("js-is-empty is-empty"), $(".js-logout").addClass("js-alert-cartsize"), e.html.modal) {
                            var o = $(e.html.modal),
                                l = $(window).innerHeight() - 20;
                            o[0].style.maxHeight = l + "px", !0 === eraluvat.STORE.IS_PRODUCT_LIST && $(window).width() > 768 ? (o[0].classList.add("productadded-notification--productlist"), t.before(o[0])) : (o[0].classList.add("productadded-notification--productcard"), $("body").append(o[0]), $doc.find(".productadded-notification").outerHeight() >= l && $(e.html.modal).addClass("productadded-notification--overflow")), $("body").addClass("productadded-visible")
                        }
                        a.resolve(!0)
                    } else e.hasOwnProperty("errors") && e.errors.length > 0 ? i = e.errors : eraluvat.app.functions.showDialog(Store.translations.cannotAddProduct), a.resolve(i)
                },
                error: function(e, t, n) {
                    eraluvat.app.functions.consoleLogHandler("Ajax error: " + e.status + " " + n), a.resolve(i)
                },
                complete: function() {
                    eraluvat.app.functions.clearLoadingAnimation(), t.removeClass("disabled").removeAttr("disabled")
                }
            }), a.promise()
        },
        addToCartClearPreviousCart: function(e, t) {
            var a = $.Deferred(),
                i = [];
            t.addClass("disabled").attr("disabled", "disabled");
            return $.post("cart/restart", function() {
                eraluvat.app.functions.setCookie("reservation", eraluvat.app.settings.hasOldCart, -1), eraluvat.app.settings.hasOldCart = ""
            }).done(function() {
                $.ajax({
                    url: "cart/add?ajax=1&include[cart_top_header]=cart_top_header&include[modal]=add2cart_done",
                    data: e,
                    dataType: "json",
                    type: "POST",
                    beforeSend: function() {
                        eraluvat.app.functions.showLoadingAnimation()
                    },
                    success: function(e, n, r) {
                        var s = null;
                        if (eraluvat.app.settings.xhrTimeStamp = moment(new Date(r.getResponseHeader("date"))), s = new Date - eraluvat.app.settings.xhrTimeStamp, eraluvat.app.settings.deviceTimeOffset = s, e.hasOwnProperty("successful") && !0 === e.successful) {
                            if (STORE_USER_DATA.init(), clearInterval(eraluvat.app.settings.timer), eraluvat.app.settings.$cartSize.removeClass("hidden"), eraluvat.app.settings.$cartSize.closest(".js-is-empty").removeClass("js-is-empty is-empty"), $(".js-logout").addClass("js-alert-cartsize"), e.html.modal) {
                                var o = $(e.html.modal),
                                    l = $(window).innerHeight() - 20;
                                o[0].style.maxHeight = l + "px", !0 === eraluvat.STORE.IS_PRODUCT_LIST && $(window).width() > 768 ? (o[0].classList.add("productadded-notification--productlist"), t.before(o[0])) : (o[0].classList.add("productadded-notification--productcard"), $("body").append(o[0]), $doc.find(".productadded-notification").outerHeight() >= l && $(e.html.modal).addClass("productadded-notification--overflow")), $("body").addClass("productadded-visible")
                            }
                            a.resolve(!0)
                        } else e.hasOwnProperty("errors") && e.errors.length > 0 ? i = e.errors : eraluvat.app.functions.showDialog(Store.translations.cannotAddProduct), a.resolve(i)
                    },
                    error: function(e, t, n) {
                        eraluvat.app.functions.consoleLogHandler("Ajax error: " + e.status + " " + n), a.resolve(i)
                    },
                    complete: function() {
                        eraluvat.app.functions.clearLoadingAnimation(), t.removeClass("disabled").removeAttr("disabled")
                    }
                })
            }), a.promise()
        },
        select2Handler: function(e) {
            var t = e.data("theme"),
                a = e.data("placeholder"),
                i = e.data("min-results-search");
            if (void 0 !== t && "" !== t || (t = "theme-default"), void 0 !== a && "" !== a || (a = Store.translations.choose), void 0 !== i && "" !== t || (i = 1 / 0), e.hasClass("js-populate-options"))
                for (var n = 1; n < e.data("option-amount"); ++n) e.append('<option value="' + n + '">' + n + "</option>");
            e.select2({
                allowClear: !1,
                minimumResultsForSearch: i,
                placeholder: a,
                theme: t,
                templateResult: function(e) {
                    var t = "",
                        a = $(e.element).data("stock");
                    return void 0 !== a ? ("1" == $(e.element).data("tuvu") ? parseInt(a, 10) > 0 ? t += "ui-stock--manyleft" : t += "ui-stock--noneleft" : parseInt(a, 10) > 0 && parseInt(a, 10) < 5 ? t += "ui-stock--someleft" : parseInt(a, 10) >= 5 ? t += "ui-stock--manyleft" : parseInt(0 == a) ? t += "ui-stock--noneleft" : t += "ui-stock--unavailable", $('<i class="ui-stock ui-stock--icon ' + t + '"></i><span> ' + e.text + "</span>")) : e.text
                }
            })
        },
        datepickerHandler: function(e) {
            e.next("img").remove(), e.datepicker({
                firstDay: 1,
                dateFormat: e.data("dateformat") || "dd-mm-yy",
                minDate: e.data("min-date") || 0,
                maxDate: e.data("max-date") || null,
                defaultDate: "+1w",
                changeMonth: !0,
                numberOfMonths: 1,
                constrainInput: !0,
                showOn: "both",
                buttonImageOnly: !0,
                buttonImage: eraluvat.STORE.BASE_URI + "static/media/theme/respo-2019/img/icons/calendar.svg",
                monthNames: Store.calendarTranslations.months,
                monthNamesShort: Store.calendarTranslations.months,
                dayNames: Store.calendarTranslations.days,
                dayNamesShort: Store.calendarTranslations.days,
                dayNamesMin: Store.calendarTranslations.days,
                prevText: "",
                nextText: "",
                beforeShowDay: function() {
                    return [!0, "ui-many-in-stock"]
                },
                onSelect: function(e, t) {}
            })
        },
        datepickerGroupHandler: function(e, t) {
            function a(e) {
                var t;
                try {
                    t = $.datepicker.parseDate(n, e.value)
                } catch (e) {
                    t = null
                }
                return t
            }

            function i(e, t) {
                var a = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                    i = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
                return Math.floor((i - a) / 864e5 + 1)
            }
            var n = e.data("dateformat") || "dd-mm-yy";
            if (e.length > 0 && t.length > 0) {
                $.datepicker.setDefaults({
                    monthNames: Store.calendarTranslations.months,
                    monthNamesShort: Store.calendarTranslations.months,
                    dayNames: Store.calendarTranslations.days,
                    dayNamesShort: Store.calendarTranslations.days,
                    dayNamesMin: Store.calendarTranslations.days,
                    prevText: "",
                    nextText: ""
                }), t.attr("disabled", "disabled");
                var r = e.datepicker({
                        dateFormat: n,
                        firstDay: 1,
                        minDate: e.data("min-date") || 0,
                        maxDate: e.data("max-date") || null,
                        defaultDate: "+1w",
                        changeMonth: !0,
                        constrainInput: !0,
                        showOn: "both",
                        buttonImageOnly: !0,
                        buttonImage: eraluvat.STORE.BASE_URI + "static/media/theme/respo-2019/img/icons/calendar.svg",
                        numberOfMonths: 1,
                        beforeShowDay: function(e) {
                            var t = !0,
                                a = "";
                            return eraluvat.STORE.SERVER_TIME.setHours(0, 0, 0, 0) > e ? (t = !1, a = "ui-datepicker-unselectable") : a = "ui-many-in-stock", [t, a]
                        }
                    }).on("change", function() {
                        s.datepicker("option", "minDate", a(this)), t.attr("disabled") && t.removeAttr("disabled")
                    }),
                    s = t.datepicker({
                        dateFormat: n,
                        firstDay: 1,
                        minDate: t.data("min-date") || 0,
                        maxDate: t.data("max-date") || null,
                        defaultDate: "+1w",
                        changeMonth: !0,
                        constrainInput: !0,
                        showOn: "both",
                        buttonImageOnly: !0,
                        buttonImage: eraluvat.STORE.BASE_URI + "static/media/theme/respo-2019/img/icons/calendar.svg",
                        numberOfMonths: 1,
                        beforeShowDay: function(t) {
                            var a = !0,
                                i = "";
                            return eraluvat.STORE.SERVER_TIME > t || "" === e.val() ? (a = !1, i = "ui-datepicker-unselectable") : i = "ui-many-in-stock", [a, i]
                        }
                    }).on("change", function() {
                        var t = $("#datepicker-duration"),
                            s = $("#js-safari-time-wrap"),
                            o = 0,
                            l = $.datepicker.parseDate(n, e.val()),
                            c = $.datepicker.parseDate(n, this.value);
                        r.datepicker("option", "maxDate", a(this)), t.length > 0 && (o = i(l, c), t.val(o), t.hasClass("js-price-estimator") && eraluvat.app.functions.getEstimationPrice(".js-price-estimator", ".js-price-estimator-ui")), 1 === o ? s.length > 0 && s.show() : s.hide()
                    });
                s.datepicker("isDisabled")
            }
        },
        getProductDateSlotsFromDB: function(e) {
            var t = $.Deferred(),
                a = "",
                i = "";
            return i = e.year && e.month ? e.date ? e.year + "-" + eraluvat.app.functions.pad(e.month) + "-" + eraluvat.app.functions.pad(e.date) : e.year + "-" + eraluvat.app.functions.pad(e.month) + "-01" : eraluvat.app.functions.formatDateString({
                date: eraluvat.app.settings.productCardDatepickerSelected
            }), a = eraluvat.STORE.CURRENT_PRODUCT_TIMES_AJAX_URL + "?days=" + eraluvat.STORE.GET_DAYSLOTS + "&cal=" + i + "&ids=" + parseInt(eraluvat.app.settings.productID, 10) + "&variation=" + e.variation, void 0 !== e.misc && (a += "&" + e.misc), $.getJSON(a).done(function(e) {
                t.resolve(e)
            }), t.promise()
        },
        getProductDateSlots: function(e) {
            var t = $.Deferred();
            return eraluvat.app.functions.getProductDateSlotsFromDB({
                year: e.year,
                month: e.month,
                date: e.date,
                variation: e.variation,
                misc: e.misc
            }).then(function(e) {
                if (html = "", eraluvat.app.settings.productDateSlots = [], e && e[0])
                    for (var t in e[0]) t && (Percolator.eraluvat.daySlotsJSON[eraluvat.app.settings.productID] = e[0][t])
            }).then(function() {
                _.each(Percolator.eraluvat.daySlotsJSON[eraluvat.app.settings.productID], function(e) {
                    var t = e[_.keys(e)][0],
                        a = "";
                    !1 === _.isUndefined(t) && ((a = new Date(t.from)).setHours(0), a.setMinutes(0), a.setSeconds(0), t.dateString = a)
                })
            }).done(function() {
                t.resolve(Percolator.eraluvat.daySlotsJSON[eraluvat.app.settings.productID])
            }), t.promise()
        },
        buildDaySlotCalendar: function(e) {
            var t = "";
            $product = "", html = '<div class="swiper-container"><div class="swiper-wrapper">', _.each(e, function(e) {
                var t = _.keys(e),
                    a = "",
                    i = "",
                    n = "",
                    r = "",
                    s = "";
                t && e[t].length > 0 ? (a = e[t][0], r = new Date(a.from), i = a.free > 0 ? "slot--selectable" : "slot--disabled slot-disabled", n = Percolator.eraluvat.templateFunctions.stockClassString(a, "free", eraluvat.STORE.IS_TU_VU, "ui-stock--")) : (r = new Date(_.keys(e)), n = "ui-stock--unavailable", i = "slot--disabled slot-disabled"), s = Store.translations.days[r.getDay()], r = r.getDate() + "." + (r.getMonth() + 1) + ".", html += '<div class="swiper-slide"><div class="slot ' + i + ' js-slot" data-time-from="' + (a.from ? a.from : t + "T00:00:00") + '" data-id="' + a.id + '" data-free="' + (a.free > 0 ? a.free : 0) + '" data-max="' + a.max + '" data-perfree="' + a.perfree + '" data-perid="' + a.perid + '"><span class="slot-ui slot-ui--top slot-ui--default">' + s + '</span><span class="slot-ui slot-ui--bottom ui-stock ' + n + '">' + r + "</span></div>", !0 === eraluvat.STORE.IS_TU_VA && (html += '<div class="slot slot__additional"><span class="slot-ui slot-ui__additional ui-stock ' + n + '">', a.free > 0 ? html += a.free + " " + Store.translations.picsBed : html += "-", html += "</span></div>"), html += "</div>"
            }), html += '</div></div><button class="calendar-scroller calendar-scroller--next swiper-button-next"><i class="fa fa-caret-right" aria-hidden="true"></i></button><button class="calendar-scroller calendar-scroller--prev swiper-button-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>', eraluvat.app.settings.$productCard.find(".product-list-calendar").html("").append(html), t = eraluvat.app.settings.$productCard.find(".swiper-container"), t = new Swiper(t, {
                spaceBetween: 2,
                slidesPerView: 14,
                breakpoints: {
                    768: {
                        slidesPerView: 7
                    }
                },
                onTransitionEnd: function(e) {
                    $(e.container).find(".swiper-slide-active");
                    !1 === e.isBeginning && eraluvat.app.settings.$productCard.find(".swiper-button-prev").removeClass("calendar-scroller--disabled disabled"), !1 === e.isEnd && eraluvat.app.settings.$productCard.find(".swiper-button-next").removeClass("calendar-scroller--disabled disabled")
                },
                onReachBeginning: function() {
                    eraluvat.app.settings.$productCard.find(".swiper-button-prev").addClass("calendar-scroller--disabled disabled")
                },
                onReachEnd: function() {
                    eraluvat.app.settings.$productCard.find(".swiper-button-next").addClass("calendar-scroller--disabled disabled")
                }
            }), eraluvat.app.settings.$productCard.find(".swiper-button-next").on("click", function() {
                t.slideNext()
            }), eraluvat.app.settings.$productCard.find(".swiper-button-prev").on("click", function() {
                t.slidePrev()
            })
        },
        getProductHourSlotsFromDB: function(e) {
            var t = $.Deferred(),
                a = eraluvat.app.settings.$productCardTicketSelector.find("option:selected").val(),
                i = (eraluvat.app.settings.productCardDatepickerSelected, "");
            return "" === a && eraluvat.app.settings.$productCardTicketSelector.find("option").each(function() {
                var e = $(this);
                if ("" != e.val()) return a = e.val(), !1
            }), i = eraluvat.app.functions.getFajaxURL({
                slots: eraluvat.STORE.GET_HOURSLOTS,
                beginDate: DATE_FIRST_FREE,
                productIDArr: eraluvat.app.settings.productID
            }), $.getJSON(i, function(e) {
                e && (Percolator.eraluvat.daySlotsJSON = e)
            }).done(function() {
                t.resolve(Percolator.eraluvat.daySlotsJSON)
            }), t.promise()
        },
        getProductHourSlots: function(e) {
            var t = $.Deferred();
            return eraluvat.app.functions.getProductHourSlotsFromDB(e).done(function() {
                t.resolve()
            }), t.promise()
        },
        initHourTicketSelect: function(e, t) {
            if (e && t.productID && t.searchParam) {
                var a = e.closest(".product-list-item"),
                    i = a.data("tuvu") || !1,
                    n = [],
                    r = new Date(a.find(".js-hour-slot.ui-selected").eq(0).data("time-from").split("T")[0]);
                $.each(Percolator.eraluvat.daySlotsJSON[t.productID], function(e, t) {
                    $.each(t, function(e, t) {
                        var a = new Date(e);
                        if (a.valueOf() === r.valueOf()) n.push(t);
                        else if (a.valueOf() > r.valueOf()) return !1
                    })
                }), n.length && (e.children().remove(), e.append($('<option value="">' + Store.translations.choose + "</option>")), $.each(n, function(a, n) {
                    $.each(n, function(a, n) {
                        var r = n.from.split("T")[1].split(":"),
                            s = " ";
                        t.selected && t.selected === n.id && (s = " selected "), e.append($('<option value="' + n.id + '" data-stock="' + n.free + '"' + s + 'data-tuvu="' + i + '">' + r[0] + ":" + r[1] + "</option>"))
                    })
                }))
            }
        },
        selectSlotsOpts: function(e) {
            if (e) {
                var t = e.$product.find(".swiper-container"),
                    a = e.$product.find(eraluvat.app.settings.productSubmitSelector),
                    i = e.$product.find(".selected-slots"),
                    n = "",
                    r = "",
                    s = e.$product.data("is-hourproduct"),
                    o = e.$product.find(".control-amount").length > 0 ? parseInt(e.$product.find(".control-amount").val(), 10) : 1;
                if (e.slots > 0) {
                    if (t.find(".ui-selected").length > 0 ? n = t.find(".ui-selected").filter(function() {
                            return parseInt($(this).data("free"), 10) > 0
                        }).first() : (n = t.find(".js-slot").filter(function() {
                            if ($(this).data("time-from").split("T")[0] === e.selectedDateString && parseInt($(this).data("free"), 10) > 0) return parseInt($(this).data("free"), 10) > 0
                        })).length < 1 && (n = t.find(".js-slot").filter(function() {
                            return parseInt($(this).data("free"), 10) > 0
                        }).first()), n && n.length > 0)
                        if (a.removeClass("disabled"), r = eraluvat.app.functions.changeDateFormat(n.data("time-from")), !0 === s) {
                            var l = n.data("time-from").split("T"),
                                c = l[1].split(":");
                            l = l[0].split("-"), (r = new Date(parseInt(l[0]), parseInt(l[1] - 1), parseInt(l[2]))).setHours(parseInt(c[0])), r.setMinutes(parseInt(c[1])), r.setSeconds(parseInt(c[2])), eraluvat.app.functions.selectHourSlots({
                                $ui: t,
                                startSlotTime: r,
                                slots: e.slots,
                                amount: parseInt(o),
                                productID: e.$product.data("product")
                            }), i.find(".selected-slots-value").empty().text(e.slots.toString())
                        } else eraluvat.app.functions.selectSlots({
                            $ui: t,
                            startTime: r,
                            slots: e.slots,
                            amount: parseInt(o)
                        })
                } else t.find(".ui-selected").removeClass("ui-selected"), a.addClass("disabled"), i.hide()
            } else eraluvat.app.functions.consoleLogHandler("Missing mandatory param opts.")
        },
        selectSlots: function(e) {
            if (e) {
                var t = e.$ui.find(".slot"),
                    a = {},
                    i = new Date(e.startTime),
                    n = 0;
                a.times = [], e.$ui.find(".slot.ui-selected").removeClass("ui-selected"), n = parseInt(e.slots, 10), n -= 1, i = i.setDate(i.getDate() + n), t.each(function(t, r) {
                    var s = $(this),
                        o = s.data("time-from"),
                        l = s.data("free"),
                        c = s.data("perfree"),
                        u = s.data("perid"),
                        d = eraluvat.app.functions.changeDateFormat(o);
                    if (d > i) return !1;
                    !0 === eraluvat.app.functions.isSlotOnRange(d, e.startTime, i) && (eraluvat.app.functions.isSlotAvailable(parseInt(e.amount), l) ? eraluvat.app.functions.periodCheck(parseInt(e.amount), u, c, n + 1) ? s.addClass("ui-selected") : (a.type = "noPeriodCapacity", a.times.push({
                        max: c,
                        field: d
                    }), s.addClass("ui-selected")) : (a.type = "notAvailable", a.times.push({
                        max: l,
                        field: d
                    })))
                }), _.size(a.times) > 0 && eraluvat.app.functions.showUserUIErrors(e.$ui.closest(".product-list-item"), a, n)
            } else eraluvat.app.functions.consoleLogHandler("Missing opts param, also it should contain reference to calendar ($ui), dateObj of start date(startTime), how many slots is selected (slots)")
        },
        selectHourSlots: function(e) {
            function t(t) {
                var a = "",
                    i = t.valid_from.split(" ")[0],
                    s = t.valid_from.split(" ")[1];
                i = i.split("-"), s = s.split(":"), (a = new Date(parseInt(i[0]), parseInt(i[1] - 1), parseInt(i[2]), parseInt(s[0]), parseInt(s[1]), parseInt(s[2]))) >= e.startSlotTime && a < r && (t.available > 0 ? e.$ui.find('.slot[data-id="' + t.id + '"]').addClass("ui-selected") : (n.type = "notAvailable", n.times.push({
                    max: t.available,
                    field: eraluvat.app.functions.changeDateFormat(dateObj)
                })))
            }
            if (e) {
                var a = e.$ui.closest(".product-list-item"),
                    i = Percolator.eraluvat.hourSlotsOriginalJSON[e.productID],
                    n = {},
                    r = new Date(e.startSlotTime),
                    s = "",
                    o = !e.slotID,
                    l = 1 === e.slots ? e.slots : e.slots - 1;
                e.$ui.find(".slot:not(.slot-disabled)").removeClass("ui-selected"), r.setHours(r.getHours() + l), r.setMinutes(59), n.times = [], _.each(i, function(a) {
                    !1 === o ? e.slotID === a.id && (o = !0, t(a)) : t(a)
                }), s = eraluvat.app.functions.formatDateString({
                    date: r,
                    format: "dd.mm.yyyy"
                }), s += " " + eraluvat.app.functions.pad(r.getHours()).toString() + ":" + eraluvat.app.functions.pad(r.getMinutes()).toString(), a.find(".selected-slots-value").empty().text(a.find(".js-product-ticket").find("option:selected").data("min-length")), a.find(".js-show-selected-slots").show(), e.$ui.closest(".product-list-item").find(eraluvat.app.settings.hourSlotEndTextSelector).html('<div class="controller controller--label"><label class="nomargin">' + Store.translations.reservationEnds + '</label></div><div class="controller controller--txtfield">' + Store.calendarTranslations.days[r.getDay()] + " " + s + "</div>"), e.$ui.closest(".product-list-item").find(eraluvat.app.settings.hourSlotEndTextSelector).removeClass("hidden")
            } else eraluvat.app.functions.consoleLogHandler("Should contain params $ui (product calendar), amount (how many times), slots (how many slots selected(variation *data-min-lenght*)), startSlotTime (dateObj of start slot time)");
            return n || !0
        },
        showUserUIErrors: function(e, t, a) {
            var n = e.find(".button"),
                r = e.find(".selected-slots"),
                s = e.find(".control-amount option:selected").val();
            if (t && t.hasOwnProperty("times") && t.hasOwnProperty("type") && t.times.length > 0) {
                var o = "";
                if ("notAvailable" === t.type) {
                    for (o = Store.translations.licence_reservation_fails_not_enought_certain_days + " <br />", i = 0; i < t.times.length; ++i) o += '<p class="nomargin">' + eraluvat.app.functions.changeDateFormat(t.times[i].field, !1, !0, !1, !0) + "</p>";
                    o += "<br />" + Store.translations.licence_reservation_fails_suggestion, eraluvat.app.functions.showDialog(o)
                } else "noPeriodCapacity" === t.type && (n.addClass("disabled"), r.find(".selected-slots-value").html(a * parseInt(s, 10)), r.show())
            } else {
                parseInt(e.find(".ui-selected").data("perfree"), 10);
                r.find(".selected-slots-value").html(a * parseInt(s, 10)), r.show()
            }
            return !0
        },
        modifyStructure: function(e) {
            var t = "";
            if (e && e.length > 0)
                for (var a = 0; a < e.length; a++)
                    if ((t = _.keys(e[a])) && e[a][t].length > 0 && e[a][t][0] && e[a][t][0].hasOwnProperty("from")) {
                        var i = eraluvat.app.functions.changeDateFormat(e[a][t][0].from, !1, !0);
                        i.setHours(0), i.setMinutes(0), i.setSeconds(0), e[a] = e[a][t][0], e[a].dateString = i.toString()
                    } return e
        },
        getCapacityClassName: function(e, t) {
            var a = "";
            return void 0 !== eraluvat.STORE.is_TU_VU && !0 === eraluvat.STORE.is_TU_VU || !0 === t ? e && e.hasOwnProperty("free") && (a = parseInt(e.free, 10) > 0 ? "ui-many-in-stock" : "ui-out-of-stock") : e && e.hasOwnProperty("free") && (a = parseInt(e.free, 10) > 0 && parseInt(e.free, 10) < 5 ? "ui-some-in-stock" : parseInt(e.free, 10) >= 5 ? "ui-many-in-stock" : "ui-out-of-stock"), a
        },
        setSameHeights: function(e, t) {
            e && t && e instanceof jQuery && t instanceof jQuery && (e.height() > t.height() ? t.height(e.height()) : e.height(t.height()))
        },
        pad: function(e) {
            return e > 9 ? e : "0" + e
        },
        showErrors: function() {
            if ($("#ui-error").length) {
                var e = $("#ui-error div"),
                    t = "",
                    a = $("#ui-error").data("replace-content") || !1;
                a ? e.each(function() {
                    t += $(this).html()
                }) : e.length ? e.each(function() {
                    t += $(this).text() + "<br />"
                }) : t += $("#ui-error").text(), eraluvat.app.functions.showDialog(t, !1, a)
            }
        },
        showDialog: function(e, t, a, i) {
            a ? eraluvat.app.settings.$modal.find(".modal-bg").empty().html(e) : eraluvat.app.settings.$modal.find("#modal-content").empty().html(e), eraluvat.app.settings.$modal.addClass("modal-show"), i && eraluvat.app.settings.$modal.addClass(i), $("body").addClass("modal-visible"), t && eraluvat.app.settings.$modal.attr("data-redirect-url", t)
        },
        showLoadingAnimation: function() {
            eraluvat.app.settings.$overlay.addClass("show"), $.fancybox.showLoading()
        },
        clearLoadingAnimation: function() {
            eraluvat.app.settings.$overlay.removeClass("show"), $.fancybox.hideLoading()
        },
        readCookie: function(e) {
            for (var t = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
                for (var n = a[i];
                    " " == n.charAt(0);) n = n.substring(1, n.length);
                if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
            }
            return !1
        },
        checkIfMobileUser: function() {
            try {
                return window.matchMedia("only screen and (max-device-width: 1040px)").matches || !1
            } catch (e) {
                return !1
            }
        },
        checkIfSessionStorageIsWritable: function() {
            try {
                return sessionStorage.setItem("sessionStorageIsWritable", !0), sessionStorage.getItem("sessionStorageIsWritable") || !1
            } catch (e) {
                return !1
            }
        },
        getValuesFromCookie: function() {
            if (document.cookie.indexOf("store_user_data") >= 0 == !1) return !1;
            var e = eraluvat.app.functions.readCookie("store_user_data");
            if (e && eraluvat.app.settings.cookieKeys) {
                var t = decodeURIComponent(e).split(";"),
                    a = {};
                _.each(eraluvat.app.settings.cookieKeys, function(e, i) {
                    a[e] = i in t ? t[i] : null
                }), eraluvat.app.settings.cookieValues = a, parseInt(eraluvat.app.settings.cookieValues.cart_products) > 0 ? (eraluvat.app.settings.$cartSize.empty().text(eraluvat.app.settings.cookieValues.cart_products).removeClass("hidden"), eraluvat.app.settings.$cartSize.closest(".js-is-empty").removeClass("js-is-empty is-empty")) : eraluvat.app.settings.$cartSize.empty().text("0")
            }
            return !0
        },
        setCookie: function(e, t, a) {
            var i = "";
            if (e && t && a) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3), i = "; expires=" + n.toUTCString(), document.cookie = e + "=" + t + i + "; path=/"
            } else eraluvat.app.functions.consoleLogHandler("All params are mandatory. Name, value and days")
        },
        addCurrentClassesToMenu: function() {
            try {
                for (var e = $("body").attr("class").split(/\s+/), t = [], a = [], i = "", n = "", r = "", s = "", o = !1, l = e.length; l--;) /^cat-/.test(e[l]) ? t.push(e[l]) : /^curcat-/.test(e[l]) ? i = e[l].substr(3) : /^tag-/.test(e[l]) ? a.push(e[l]) : /^curpro-/.test(e[l]) ? n = e[l].substr(3) : /^curcms-/.test(e[l]) ? r = e[l].substr(3) : /^curcart-/.test(e[l]) ? s = e[l] : o = $("body").hasClass("idx");
                for (l = 0; l < t.length; ++l) {
                    var c = t[l];
                    $(".js-cached-menu ." + c).addClass("in-current-path").each(function() {
                        var e = $(this).find(".js-toggle-category").first().toggleClass("category-visible"),
                            t = e.data("toggle-category");
                        e.hasClass("category-visible") ? $("#" + t).slideDown("fast") : $("#" + t).slideUp("fast")
                    }), $(".categories-list li.cat ." + c).addClass("current")
                }
                "" !== i && ($("li.cat." + i).addClass("current"), $(".menuitem." + i).addClass("current")), "" !== n && $(".menuitem." + n).addClass("current"), "" !== r && ($(".menuitem." + r).addClass("current"), $(".menuitem." + r).length > 0 && $(".menupage").addClass("in-current-path")), "" != s && $(".curcart." + s).addClass("current");
                for (l = 0; l < a.length; ++l) {
                    var u = a[l];
                    $(".ptag." + u).addClass("current"), $(".menuitem." + u).addClass("current")
                }
                o && 0 === a.length && 0 === t.length && $(".idx").addClass("current"), $(".cat-" + eraluvat.STORE.ML_SAFARI_CATEGORY_ID + ".current").length > 0 && $(".cat-" + eraluvat.STORE.ML_CATEGORY_ID).removeClass("current in-current-path")
            } catch (e) {}
        },
        getProductSaleOpensDate: function() {
            var e = $.Deferred(),
                t = eraluvat.app.settings.FAJAX_URL_SALESOPENS + "";
            return $.getJSON(t).done(function(t, a, i) {
                t && t.length > 0 && t[0].hasOwnProperty("sale_opens_combined") && i.getResponseHeader("date") ? e.resolve({
                    today: i.getResponseHeader("date"),
                    sale_opens: t[0].sale_opens_combined
                }) : e.reject()
            }), e.promise()
        },
        isProductSaleOpeningLater: function() {
            var e = $.Deferred();
            return eraluvat.app.functions.getProductSaleOpensDate().always(function(t) {
                if (t && t.hasOwnProperty("today") && t.hasOwnProperty("sale_opens")) {
                    var a = new Date(t.today),
                        i = eraluvat.app.functions.changeDateFormat(t.sale_opens);
                    a < i ? e.resolve(i) : e.resolve(!1)
                } else e.resolve(!1)
            }), e.promise()
        },
        getPasswordStrength: function(e) {
            var t = 0;
            return e.length < 6 ? 0 : (e.length > 7 && (t += 1), e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (t += 1), e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (t += 1), e.match(/([!,%,&,@,#,$,^,*,?,_,~])/) && (t += 1), e.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/) && (t += 1), t < 2 ? 1 : 2 == t ? 2 : 3)
        },
        setInputComparison: function(e, t) {
            e.add(t).on("keyup", function() {
                var e, t, a, i = $(this),
                    n = i.data("slave") || "",
                    r = $(),
                    s = $(),
                    o = $(),
                    l = 0,
                    c = "field-error",
                    u = 0,
                    d = !1,
                    p = $(),
                    h = !1,
                    f = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i),
                    g = $(),
                    m = "";
                "password" !== i.attr("name") && "password_change1" !== i.attr("name") || ("" === i.val() ? $("#password-strenght").hide() : $("#password-strenght").show()), "" !== n ? (r = i, s = $(i.data("slave")) || $()) : (s = i, r = $(i.data("master")) || $()), l = r.val().length || 0, o = r.add(s).removeClass("field-success field-error"), r.filter("[data-password-strength]").length && (h = !0), d = (u = r.data("min-length") || 0) > 0, "email" == r.attr("type") ? r.val() === s.val() && l >= u && l > 0 && f.test(r.val()) && (c = "field-success") : r.val() === s.val() && l >= u && l > 0 && (c = "field-success"), r.val() === s.val() && l >= u && l > 0 && "email" == r.attr("type") && f.test(r.val()) && (c = "field-success"), o.addClass(c), h && (0 == (e = eraluvat.app.functions.getPasswordStrength(r.val()) || 0) && (t = Store.translations.passwordMsgTooWeak, a = '<i class="fa fa-frown-o fa-lg password-bad"></i>'), 1 == e && (t = Store.translations.passwordMsgWeak, a = '<i class="fa fa-frown-o fa-lg password-bad"></i>'), 2 == e && (t = Store.translations.passwordMsgFine, a = '<i class="fa fa-meh-o fa-lg password-meh"></i>'), 3 == e && (t = Store.translations.passwordMsgGreag, a = '<i class="fa fa-smile-o fa-lg password-great"></i>')), d && ((g = $(".js-password-strenght")) && g.length ? (p = g.children(".msg-minlength"), h && (m = t), p.length > 0 && g.find(".msg-minlength").remove(), g.append('<span class="msg-minlength">' + m + " " + a + "</span>")) : g = r.parent().find("label") || $())
            })
        },
        validatePhoneNumber: function(e) {
            var t = e.replace("+", ""),
                a = new RegExp("^[0-9]+$");
            return !(t.indexOf(" ") > -1 || !a.test(t) || t.length < 7)
        },
        validateRegForm: function(e) {
            function t(e) {
                var t = e.split("."),
                    a = eraluvat.STORE.SERVER_TIME,
                    i = new Date(a.getFullYear(), t[1] - 1, t[0]),
                    n = a.getFullYear() - t[2],
                    r = !0;
                return a < i && n--, n < eraluvat.STORE.ML_AGE_MIN && (r = !1), r
            }
            var a = $(e.selector),
                i = $(),
                n = $(),
                r = !0,
                s = $("#ui-error") || $(),
                o = "",
                l = new RegExp("^[0-9]+$"),
                c = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i),
                u = e.inputErrorSuffix ? e.inputErrorSuffix : "";
            if (a.length) return i = a.find("input[required], textarea[required], select[required], input.hidden-required"), a.removeClass("is-valid").find(".error-field, .has-error").removeClass("error-field has-error"), i.each(function() {
                var a = $(this),
                    i = a.prop("nodeName") || "",
                    s = "",
                    d = "",
                    p = a.closest(".js-validator-form-section").find("label").eq(0).text() || a.closest(".form-group").find("label").eq(0).text() || "",
                    h = 6,
                    f = a.data("slave") || "",
                    g = $();
                s = "input" === (i = i.toLowerCase()) ? a.attr("type") || "" : i, d = a.val() || "", p = p.replace(/:/g, "").replace(/\*/g, "").trim(), "text" === s || "textarea" === s ? "" === d ? (r = !1, n = n.add(a), o += '<div class="ui_error">' + p + " " + u + "</div>", "birthdate" !== a.attr("name") && "payer_birthdate" !== a.attr("name") || a.closest(".form-group").find("input, select").each(function() {
                    var t = $(this);
                    "" === $.trim(t.val()) && (e.errorClassOnField && t.addClass(e.errorClassOnField), e.errorClassOnRow && t.closest(".form-group").addClass(e.errorClassOnRow))
                })) : !0 === a.data("is-age") && a.data("age-min") && !1 === t(a.val()) && (a.closest("td").length > 0 ? (e.errorClassOnField && a.addClass(e.errorClassOnField), e.errorClassOnRow && a.closest("td").addClass(e.errorClassOnRow)) : (e.errorClassOnField && a.addClass(e.errorClassOnField), e.errorClassOnRow && a.closest(".form-group").addClass(e.errorClassOnRow)), r = !1, o += '<div class="ui_error">' + Store.translations.error_too_young + "</div>") : "tel" === s ? !1 === eraluvat.app.functions.validatePhoneNumber(d) && (r = !1, n = n.add(a), o += "" === d ? '<div class="ui_error">' + p + " " + u + "</div>" : '<div class="ui_error">' + Store.translations.phone_number_wrong_format + "</div>", e.errorClassOnField && a.addClass(e.errorClassOnField), e.errorClassOnRow && a.closest(".form-group").addClass(e.errorClassOnRow)) : "email" === s ? "" !== d && c.test(a.val()) || (r = !1, n = n.add(a), "" === d ? "email" !== a.attr("name") && "payer_email" !== a.attr("name") || (a.removeClass("field-success"), -1 === o.search(p) && (o += '<div class="ui_error">' + p + " " + u + "</div>")) : "" === d || c.test(a.val()) || "email" === a.attr("name") && (a.removeClass("field-success"), -1 === o.search(p) && (o += '<div class="ui_error">' + p + " " + Store.translations.fieldHasError + "</div>"))) : "password" === s ? (h = a.data("min-length") || 6, 0 === d.length ? (r = !1, n = n.add(a), "password" === a.attr("name") && (o += '<div class="ui_error">' + p + " " + u + "</div>")) : d.length > 0 && d.length < h && (r = !1, n = n.add(a), "password" === a.attr("name") && (o += '<div class="ui_error">' + p + " " + Store.translations.fieldHasError + "</div>"))) : "select" === s ? "" !== d && !0 !== _.isEmpty(d) || (r = !1, n = n.add(a), -1 === o.search(p) && (o += '<div class="ui_error">' + p + " " + u + "</div>")) : "number" === s ? "" === d && (r = !1, n = n.add(a), -1 === o.search(p) && (o += '<div class="ui_error">' + p + " " + u + "</div>")) : "checkbox" === s && !1 === a[0].checked && (r = !1, n = n.add(a), -1 === o.search(p) && (o += '<div class="ui_error">' + p + " " + u + "</div>")), "postal_code" !== a.attr("name") && "payer_postal_code" !== a.attr("name") || l.test(a.val()) || "" === a.val() || (r = !1, o += '<div class="ui_error">' + Store.translations.zipcode_wrong_format + "</div>", e.errorClassOnField && a.addClass(e.errorClassOnField), e.errorClassOnRow && a.closest(".form-group").addClass(e.errorClassOnRow)), "" !== f && (g = $(f).eq(0) || $()).length && (d === (g.val() || "") && "" !== d || (r = !1, n = n.add(a), "email" === s ? o += '<div class="ui_error">' + Store.translations.emailMisMatch + "</div>" : "password" === s && (o += '<div class="ui_error">' + Store.translations.passwordMisMacth + "</div>")))
            }), r && a.find(".js-hunter-number-input").length && a.find(".js-hunter-number-input").val() && ((r = eraluvat.app.functions.checkHunterNumber(a.find(".js-hunter-number-input").val())) || (o += '<div class="ui_error">' + a.find(".js-hunter-number-input").closest(".form-group").find("label").text().replace(":", "") + " " + Store.translations.fieldHasError, e.errorClassOnField && a.find(".js-hunter-number-input").addClass(e.errorClassOnField), e.errorClassOnRow && a.find(".js-hunter-number-input").closest(".form-group").addClass(e.errorClassOnRow))), !0 === r ? (a.addClass("is-valid"), $("#ui-error").empty(), !0) : ("" !== o && (s.length < 1 && (a.prepend('<div id="ui-error" class="ui-message"></div>'), s = a.find("#ui-error") || $()), e.errorMsgTitle && (o = '<div class="ui_error">' + e.errorMsgTitle + "</div>" + o), s.empty().append(o), eraluvat.app.functions.showErrors()), e.errorClassOnField && n.addClass(e.errorClassOnField), e.errorClassOnRow && n.closest(".form-group").addClass(e.errorClassOnRow), !1)
        },
        formatDateString: function(e) {
            var t = "",
                a = "",
                i = "",
                n = "";
            return e && e.date ? (a = e.startDate ? e.startDate.toString() : ("0" + e.date.getDate()).slice(-2), i = ("0" + (e.date.getMonth() + 1)).slice(-2), n = e.date.getFullYear(), t = "dd.mm.yyyy" == e.format ? a + "." + i + "." + n : "D dd.mm.yyyy" == e.format ? Store.calendarTranslations.days[e.date.getDay()] + " " + a + "." + i + "." + n : "D dd.mm.yyyy H:m:s" === e.format ? Store.calendarTranslations.days[e.date.getDay()] + " " + a + "." + i + "." + n + " " + e.date.getHours() + ":" + e.date.getMinutes() + ":" + e.date.getSeconds() : n + "-" + i + "-" + a, !0 === e.showTime && (t += " " + ("0" + e.date.getHours()).slice(-2) + ":" + ("0" + e.date.getMinutes()).slice(-2))) : (console.error("Missing mandatory param opts and or needed property date"), console.info('Also possible to send opts.startDate which set starting date for return value and opts.format only made to respond "dd.mm.yyyy"')), t
        },
        ajaxLogin: function(e) {
            $.ajax({
                url: e.attr("action"),
                method: e.attr("method"),
                data: e.serialize(),
                dataType: "json",
                beforeSend: function() {
                    eraluvat.app.functions.showLoadingAnimation()
                },
                success: function(e) {
                    void 0 !== e.successful && !0 === e.successful ? ("" + location).indexOf("/login/reset_password") > -1 ? window.location.href = eraluvat.STORE.BASE_URI + "profile" : location.reload(!0) : eraluvat.app.functions.showDialog(Store.translations.loginFailed)
                },
                error: function(e, t, a) {
                    eraluvat.app.functions.consoleLogHandler("Ajax error " + e.status + " " + a)
                },
                complete: function() {
                    eraluvat.app.functions.clearLoadingAnimation()
                }
            })
        },
        getHourStartSlotsURL: function(e) {
            var t = "",
                a = "",
                i = "",
                n = e.days ? parseInt(e.days) : parseInt(eraluvat.STORE.GET_HOURSLOTS);
            return e.dateObj && e.variationID && e.eventID && e.amount && e.productID ? (i = new Date(e.dateObj), a = "?valid_from=" + eraluvat.app.functions.formatDateString({
                date: e.dateObj
            }), i.setDate(i.getDate() + n), i = "&valid_before=" + eraluvat.app.functions.formatDateString({
                date: i
            }), t = eraluvat.STORE.BOOKING_START_SLOT_URL + "/" + e.variationID + "/" + e.eventID + "/" + e.amount + "/" + e.productID + "/" + a.toString() + i.toString(), e.misc && (t += "&" + e.misc)) : eraluvat.app.functions.consoleLogHandler("Missing mandatory property variationID and or eventID and or amount and or productID and or dateObj"), t
        },
        getFajaxURL: function(e) {
            var t = "",
                a = "";
            return e.slots && e.beginDate ? (a = eraluvat.app.functions.formatDateString({
                date: e.beginDate
            }), t = eraluvat.STORE.CURRENT_PRODUCT_TIMES_AJAX_URL + "?days=" + e.slots + "&cal=" + a + "&v=2", e.productIDArr && (t += "&ids=" + e.productIDArr.toString()), e.variationID && (t += "&variation=" + e.variationID.toString()), e.misc && (t += "&" + e.misc)) : eraluvat.app.functions.consoleLogHandler("Missing mandatory properties: slots (how many days should ajax return), beginDate (from what date should the slots start)"), t
        },
        fancyBoxStaticHTML: function(e) {
            $.fancybox({
                content: e.content,
                margin: 50,
                padding: 10,
                autoSize: !($(window).width() > 480),
                width: e.widthPercent ? e.widthPercent + "%" : "85%",
                height: "auto",
                closeClick: !!e.closeClick && e.closeClick,
                tpl: {
                    closeBtn: e.hideBtn ? "" : '<button title="' + Store.translations.close + '" class="fancybox-close"></button>'
                },
                helpers: {
                    overlay: {
                        locked: !!e.locked && e.locked,
                        closeClick: !!e.closeClick && e.closeClick
                    }
                },
                afterShow: function() {
                    var e = $(this.content).find('a[href^="#"]'),
                        t = window.location.href;
                    window.location.search && (t = t.replace(window.location.search, "")), "" !== window.location.hash && (t = t.replace(window.location.hash, "")), e.each(function() {
                        var e = $(this),
                            a = e.attr("href").substring(e.attr("href").indexOf("#"));
                        e.attr("href", t + a)
                    })
                }
            })
        },
        getEstimationPrice: function(e, t) {
            var a = {},
                i = "",
                n = {},
                r = [];
            a.drivers_are_from_same_family = !1, "undefined" != typeof estimateOffRoadTrafficPermitPrice && (a.offroad_drivers = [], $(e).each(function() {
                var e = $(this),
                    t = e.attr("name");
                !0 === e.is("table") ? e.find("tbody > tr").each(function() {
                    n = {
                        offroad_driver_domicile: $(this).find(".js-driver-domicile").val()
                    }, a.offroad_drivers.push(n)
                }) : (t = -1 === e.attr("name").toString().indexOf(".") ? e.attr("name") : e.attr("name").split(".")[1], a[t] = e.val())
            }), _.each(eraluvat.STORE.OFFROAD_PRODUCT_MAP, function(e, t) {
                e.product_code === eraluvat.STORE.CURRENT_PRODUCT_CODE && _.indexOf(eraluvat.STORE.OFFROAD_PRODUCTS_WHERE_PAYER_IS_ALWAYS_RIDER, t) > -1 && a.offroad_drivers.push({
                    offroad_driver_foo_data: 9999
                })
            }), $("table.js-is-family").length && (a.drivers_are_from_same_family = !0), i = estimateOffRoadTrafficPermitPrice(a), 1 === $("#kunnat-multiselect option:selected").length && ($(".js-driver-domicile").each(function() {
                $(this).val() === $("#kunnat-multiselect option:selected").val() ? r.push(!0) : r.push(!1)
            }), 0 === i.total_price_with_vat && -1 === _.indexOf(r, !1) ? $doc.find("#selected-kunnat .label").removeClass("hidden") : $doc.find("#selected-kunnat .label").addClass("hidden")), $(t).text(i.total_price_with_vat / 100 + " " + Store.translations.currency))
        },
        mlFormManager: function(e, t) {
            var a = $(t.mainInputs[0]),
                i = $(t.mainInputs[1]),
                n = t.domTargets ? $(t.domTargets[0]) : "",
                r = t.domTargets ? $(t.domTargets[1]) : "";
            "domicile" === e ? a.find("option:selected").length > 0 && i.find("li").length > 0 ? (n.slideDown(), r.find("input, select, textarea, button").attr("disabled", "disabled"), $("#drivers").slideUp(), $("#kotikuntalaiset, #ulkopaikkakuntalaiset").val("0"), a.find("option:selected").length > 1 ? ($("#kotikunta-info-wrap").hide(), $(".ulkopaikkakuntalainen-label-original").hide(), $(".ulkopaikkakuntalainen-label-alt").show()) : ($("#kotikunta-info-wrap").show(), $(".ulkopaikkakuntalainen-label-alt").hide(), $(".ulkopaikkakuntalainen-label-original").show()), $doc.find(".js-kunnat-tag + .label").addClass("hidden")) : (n.slideUp(), r.find("input, select, textarea, button").removeAttr("disabled"), $("#drivers").slideDown(), $("#kotikunta-info-wrap").show(), $(".ulkopaikkakuntalainen-label-alt").hide(), $(".ulkopaikkakuntalainen-label-original").show(), eraluvat.app.functions.mlFormManager("update driver inputs", {
                mainInputs: ["#kunnat-multiselect", ".js-driver-domicile"],
                domTargets: ["#kotikuntalaiset-hidden, #kotikuntalaiset", "#ulkopaikkakuntalaiset-hidden, #ulkopaikkakuntalaiset"]
            })) : "update driver inputs" === e ? 1 === a.find("option:selected").length ? (n.val("0"), r.val("0"), i.each(function() {
                var e = $(this),
                    t = "";
                e.val() && (e.val() === a.find("option:selected").val() ? (t = "" === n.val() ? 0 : n.val(), n.val(++t)) : (t = "" === r.val() ? 0 : r.val(), r.val(++t)))
            })) : (n.val("0"), r.val(i.length)) : eraluvat.app.functions.consoleLogHandler("Unknown task defined. taskStr: " + e)
        },
        inputUpdater: function(e, t) {
            var a = $doc.find(t.whatIsSelector),
                i = 0,
                n = 0;
            !0 === e && (a.length > 0 ? a.each(function() {
                parseInt($(this).val(), 10) === parseInt(t.whatHastoBe, 10) ? ++i : ++n
            }) : parseInt($("#kunnat-multiselect").data("user-domicile"), 10) === parseInt(t.whatHastoBe, 10) && ++i, $(t.trueCounterInputSelector).val(i), $(t.falseCounterInputSelector).val(n), 0 === n && 0 === $("#js-drivers-attachments li").length ? $doc.find(".js-kunnat-tag + .label").removeClass("hidden") : $doc.find(".js-kunnat-tag + .label").addClass("hidden"))
        },
        smoothScroller: function(e, t) {
            var a = t || $doc.find(".topbar:visible").innerHeight() + 10;
            $("html, body").animate({
                scrollTop: $doc.find(e).eq(0).offset().top - a
            }, 1e3, function() {
                $doc.find(e).eq(0).focus()
            })
        },
        consoleLogHandler: function(e) {
            try {
                console.log(e)
            } catch (e) {}
        },
        getContentViaAjax: function(e, t) {
            $.ajax({
                type: "GET",
                url: t,
                dataType: "html",
                success: function(t) {
                    e.html(t)
                },
                error: function(e, t, a) {
                    console.log("Ajax error: " + e.status + " " + a)
                }
            })
        },
        getAge: function(e) {
            var t = moment(e);
            return moment(eraluvat.STORE.SERVER_TIME).diff(t, "years")
        },
        productCalendarTemplateInit: function(e) {
            var t = $.Deferred(),
                a = e ? '.product-form[data-product="' + e + '"] ' : "",
                i = this.getMondayOfTheWeek(),
                n = e ? [e] : [],
                r = "";
            return i = a ? this.getMondayOfTheWeek($doc.find(a + ".hasDatepicker").datepicker("getDate")) : this.getMondayOfTheWeek(), 0 === n.length && $doc.find(".product-form").each(function(e, t) {
                n.push($(t).data("product"))
            }), r = this.getFajaxURL({
                slots: eraluvat.STORE.GET_DAYSLOTS,
                beginDate: new Date(i),
                productIDArr: n.toString()
            }), $.getJSON(r).then(function(e) {
                _.templateSettings = {
                    evaluate: /\{\{(.+?)}}/g,
                    interpolate: /\{\{=(.+?)}}/g,
                    escape: /\{\{-(.+?)}}/g
                }, $doc.find(a + ".js-insert-calendar").each(function(t, a) {
                    var i = $(a),
                        n = i.closest(".product-form"),
                        r = n.data("product"),
                        s = n.find(".js-product-ticket"),
                        o = {},
                        l = {},
                        c = [];
                    e[r] && e[r].length && (c = eraluvat.app.functions.eventMustStartDay(e[r], s.find("option:selected").data("start-weekday"), s.find("option:selected").data("min-length")), c = n.data("is-hourproduct") ? eraluvat.app.functions.eventMustTakePlaceHours(r, c) : eraluvat.app.functions.eventMustTakePlace(r, c), o = _.template($(i.data("template")).html()), i.html(o({
                        data: e[r]
                    }))), (l = i.find(".swiper-container")).length && l.find(".swiper-slide").length ? new Swiper(l, {
                        spaceBetween: 2,
                        slidesPerView: l.data("slidesperview"),
                        onTransitionEnd: function(e) {
                            $(e.container).find(".swiper-slide-active");
                            !1 === e.isBeginning && i.find(".swiper-button-prev").removeClass("calendar-scroller--disabled disabled"), !1 === e.isEnd && i.find(".swiper-button-next").removeClass("calendar-scroller--disabled disabled")
                        },
                        onReachBeginning: function() {
                            i.find(".swiper-button-prev").addClass("calendar-scroller--disabled disabled")
                        },
                        onReachEnd: function() {
                            i.find(".swiper-button-next").addClass("calendar-scroller--disabled disabled")
                        }
                    }) : l.closest(".product-list-calendar").html('<p class="font-weight-bold">' + Store.translations.noFreeTimesHourly + "</p>")
                })
            }).then(function() {
                $doc.find(".product-form option[data-min-length]:selected").each(function(e, t) {
                    var a = $(t),
                        i = a.closest(".product-form"),
                        n = i.data("is-hourproduct"),
                        r = n ? ".js-hour-slot" : ".js-slot",
                        s = null,
                        o = a.data("min-length"),
                        l = i.find(".hasDatepicker").datepicker("getDate").valueOf();
                    i.find(".calendar").length && i.find(".swiper-container").length && (i.find(r).each(function(e, t) {
                        var a = $(t),
                            i = null,
                            s = null,
                            c = 0,
                            u = eraluvat.app.functions.dateFromString(a.data("time-from"));
                        return u.setHours(0), u.setMinutes(0), u.setSeconds(0), !1 === a.hasClass("slot-disabled") && u.valueOf() >= l && (a.addClass("ui-selected"), n && a.next(r).length ? (i = a.next(r)).length && (s = i.data("time-from")) : n ? (i = a.closest(".swiper-slide").next(".swiper-slide")).length && (s = i.find(r).first().data("time-from")) : s = a.data("time-to"), c = eraluvat.app.functions.slotCount(n, a.data("time-from"), s), o -= 0 === c ? o : c), o > 0
                    }), (s = i.find(".swiper-container").find(r + ".ui-selected").first().closest(".swiper-slide")).length && (dateStartStr = s.data("slide-date"), i.find(".calendar").datepicker("setDate", new Date(dateStartStr)), i.find(".swiper-container")[0].swiper.slideTo(s.index())))
                })
            }).then(function() {
                eraluvat.app.functions.showHourProductStartSlots(a)
            }).then(function() {
                eraluvat.app.functions.showHourProductEndSlot(a)
            }).done(function() {
                t.resolve(!0)
            }), t
        },
        eventMustTakePlaceEndsNextDay: function(e, t) {
            var a = e,
                i = this.formatDateString({
                    date: a,
                    format: "yyyy-mm-dd"
                }),
                n = a.getHours();
            if (t && t[i].length)
                for (var r = 0; r < n; ++r) t[i][r] && (t[i][r].is_excluded = !0)
        },
        eventMustTakePlace: function(e, t) {
            var a = $doc.find('.product-form[data-product="' + e + '"] .js-product-ticket option:selected'),
                i = a.data("start-timespans"),
                n = a.data("min-length"),
                r = t.length,
                s = null,
                o = !1,
                l = null,
                c = eraluvat.STORE.IS_PRODUCT_PAGE ? "VARIATION_BOOKING_MUST_BEGIN" : "time_begin";
            if (r && n && i)
                for (var u = 0; u < r; ++u)
                    for (var d in t[u]) {
                        s = t[u][d].length, o = !1, l = u + 1;
                        for (var p = 0; p < s; ++p)
                            if (t[u][d][p].free && !t[u][d][p].is_excluded)
                                for (var h = this.dateFromString(t[u][d][p].from).valueOf(), f = this.dateFromString(t[u][d][p].to).valueOf(), g = 0; g < i.length; ++g) {
                                    var m = this.dateFromString(d + "T" + i[g][c]),
                                        v = new Date(m.valueOf()),
                                        y = m.getDay();
                                    o = h === (m = m.valueOf()) || o, v.setHours(v.getHours() + n).valueOf(), v.getDay() !== y && this.eventMustTakePlaceEndsNextDay(v, t[l]), (!1 === o || h < m.valueOf() || f > v.valueOf()) && (t[u][d][p].free = 0)
                                }
                    }
            return t
        },
        eventMustTakePlaceHours: function(e, t) {
            var a = $doc.find('.product-form[data-product="' + e + '"] .js-product-ticket option:selected'),
                i = a.data("start-timespans"),
                n = i && i.length ? i.length : 0,
                r = eraluvat.STORE.IS_PRODUCT_PAGE ? "VARIATION_BOOKING_MUST_BEGIN" : "time_begin",
                s = a.data("min-length"),
                o = t.length,
                l = null,
                c = null;
            if (o && s) {
                n && i.sort(function(e, t) {
                    return e[r] < t[r] ? -1 : e[r] > t[r] ? 1 : 0
                });
                for (var u = 0; u < o; ++u)
                    for (var d in t[u]) {
                        l = t[u][d].length;
                        for (var p = 0; p < l; ++p)
                            if (n)
                                for (var h = this.dateFromString(t[u][d][p].from).valueOf(), f = 0; f < n; ++f) {
                                    var g = new Date(h);
                                    g.setHours(parseInt(i[f][r], 10)), t[u][d][p].is_excluded = g.valueOf() !== h, t[u][d][p].is_excluded || (f = n)
                                } else if (c) t[u][d][p].is_excluded = !0, --c;
                                else {
                                    var m = this.dateFromString(t[u][d][p].to);
                                    m.setHours(m.getHours() + s + 2), t[u][d][p].to = m.toISOString(), c = s
                                }
                    }
            }
            return t
        },
        eventMustTakePlaceHoursExcluded: function(e, t) {
            for (var a = !1, i = eraluvat.STORE.IS_PRODUCT_PAGE ? "VARIATION_BOOKING_MUST_BEGIN" : "time_begin", n = e.length, r = 0; r < n; ++r) a ? r = n : a = e[r][i].toString() === t.from.substring(t.from.indexOf("T") + 1).toString();
            return a
        },
        eventMustStartDay: function(e, t, a) {
            var i = e.length,
                n = null,
                r = [],
                s = null;
            if (i && (t || 0 === t) && a) {
                for (u = 0; u < i; ++u)
                    for (var o in e[u]) {
                        var l = this.dateFromString(o);
                        if (l.getDay() === t && (r.push(o), a > 1))
                            for (s = 1; a > s;) {
                                var c = null;
                                l.setDate(l.getDate() + 1), c = l.getFullYear() + "-" + this.pad(l.getMonth() + 1) + "-" + this.pad(l.getDate()), r.push(c), ++s
                            }
                    }
                for (var u = 0; u < i; ++u)
                    for (var o in e[u])
                        if (-1 === r.indexOf(o)) {
                            n = e[u][o].length;
                            for (var d = 0; d < n; ++d) e[u][o][d].free = 0
                        }
            }
            return e
        },
        showHourProductStartSlots: function(e) {
            var t = $(e),
                a = null,
                i = null;
            t.length && t.data("is-hourproduct") && (i = t.find(".js-set-startslot").html(""), a = t.find(".js-hour-slot.ui-selected").first().data("id"), t.find(".js-hour-slot.ui-selected").first().closest(".swiper-slide").find(".js-hour-slot:not(.slot-disabled)").each(function(e, t) {
                var n = $(t),
                    r = n.data("time-from").split("T")[1].split(":"),
                    s = n.data("id") === a ? " selected" : "",
                    o = '<option value="' + n.data("id") + '"' + s + ">" + r[0] + ":" + r[1] + "</option>";
                i.html(i.html() + o)
            }))
        },
        showHourProductEndSlot: function(e) {
            var t = $(e),
                a = t.find(".js-slot-endtime-txt").removeClass("hidden"),
                i = null,
                n = "";
            t.length && t.data("is-hourproduct") && a.length && t.find(".js-hour-slot.ui-selected").length && ((i = eraluvat.app.functions.dateFromString(t.find(".js-hour-slot.ui-selected").first().data("time-from"))).setHours(i.getHours() + t.find(".js-product-ticket option:selected").data("min-length")), i.setSeconds(i.getSeconds() - 1), n = eraluvat.app.functions.formatDateString({
                date: i,
                format: "D dd.mm.yyyy H:m:s"
            }), a.html('<div class="controller controller--label font-weight-bold">' + Store.translations.reservationEnds + ':</div><div class="controller controller--txtfield">' + n + "</div>"))
        },
        beforeAddtoCart: function(e) {
            var t = "",
                a = e.find(".js-product-ticket option:selected").data("start-weekday"),
                i = e.find(".js-slot.ui-selected, .js-hour-slot.ui-selected").first(),
                n = e.find(".js-slot.slot-disabled.ui-selected, .js-hour-slot.slot-disabled.ui-selected"),
                r = [];
            return e.find("[required]").each(function(e, a) {
                var i = $(a);
                return "" === i.val() && (i.addClass("error-field"), t = i.closest(".controller").prev().find("label").text().replace(/:/g, "").trim() + " " + Store.translations.fieldIsRequired), "" !== i.val()
            }), "" !== t || !a && 0 !== a || this.dateFromString(i.data("time-from")).getDay() === a || (t = Store.translations.booking_must_start_on_weekday + ' "' + Store.translations.days[a].charAt(0).toUpperCase() + Store.translations.days[a].substring(1) + '"'), "" === t && n.length > 0 && (n.each(function(t, a) {
                var i = $(a).data("time-from").split("T");
                e.data("is-hourproduct") ? r.push(eraluvat.app.functions.changeDateFormat($(a).data("time-from"), !1, !0, !1, !0) + " " + i[1]) : r.push(eraluvat.app.functions.changeDateFormat($(a).data("time-from"), !1, !0, !1, !0))
            }), t = Store.translations.licence_reservation_fails_not_enought_certain_days + "<br>" + r.join("<br>")), t
        },
        productCalendarDatepicker: function(e) {
            $.datepicker.setDefaults({
                dateFormat: "D dd.mm.yyy",
                monthNames: Store.calendarTranslations.months,
                monthNamesShort: Store.calendarTranslations.months,
                dayNames: Store.calendarTranslations.days,
                dayNamesShort: Store.calendarTranslations.days,
                dayNamesMin: Store.calendarTranslations.days,
                prevText: "",
                nextText: ""
            }), $(e).each(function(e, t) {
                var a = $(t),
                    i = a.closest(".product-form"),
                    n = i.data("product"),
                    r = i.data("tuvu");
                a.datepicker({
                    firstDay: 1,
                    minDate: 0,
                    dateFormat: "D dd.mm.yy",
                    defaultDate: a.data("default-date") || "",
                    constrainInput: !0,
                    showOn: "both",
                    buttonImageOnly: !0,
                    buttonImage: "static/media/theme/respo-2019/img/icons/calendar.svg",
                    beforeShow: function(e) {
                        var t = $(e),
                            a = t.closest(".product-list-item"),
                            i = t.datepicker("getDate"),
                            n = eraluvat.app.functions.getFajaxURL({
                                slots: 42,
                                beginDate: new Date(i.getFullYear(), i.getMonth(), 1),
                                productIDArr: a.data("product")
                            });
                        $doc.find("#ui-datepicker-div").addClass("ui-datepicker-loading"), $.getJSON(n, function(e) {
                            eraluvat.STORE.CALENDAR_DATA = e
                        }).always(function() {
                            t.datepicker("refresh"), $doc.find("#ui-datepicker-div").removeClass("ui-datepicker-loading")
                        })
                    },
                    beforeShowDay: function(e) {
                        var t = "",
                            a = !1,
                            i = 0,
                            s = eraluvat.STORE.CALENDAR_DATA[n],
                            o = s && s.length ? s.length : 0,
                            l = (e.valueOf(), e.getFullYear() + "-" + eraluvat.app.functions.pad(e.getMonth() + 1) + "-" + eraluvat.app.functions.pad(e.getDate())),
                            c = !0;
                        if (s && o) {
                            for (var u = 0; u < o; ++u)
                                if (s[u][l] && s[u][l].length) {
                                    var d = s[u][l].length;
                                    c = !1;
                                    for (var p = 0; p < d; ++p) i += s[u][l][p].free
                                } t = i > 0 && i < 5 ? r ? "ui-many-in-stock" : "ui-some-in-stock" : i >= 5 ? "ui-many-in-stock" : c ? "ui-datepicker-unselectable ui-state-disabled" : "ui-out-of-stock"
                        } else t = "ui-datepicker-unselectable ui-state-disabled";
                        return a = -1 === t.indexOf("ui-state-disabled"), [a, t]
                    },
                    onChangeMonthYear: function(e, t, a) {
                        $("#" + a.id).closest(".product-list-item");
                        var i = eraluvat.app.functions.getFajaxURL({
                            slots: 42,
                            beginDate: new Date(e, parseInt(t - 1, 10), 1),
                            productIDArr: n
                        });
                        $doc.find("#ui-datepicker-div").addClass("ui-datepicker-loading"), $.getJSON(i, function(e) {
                            eraluvat.STORE.CALENDAR_DATA = e
                        }).always(function() {
                            $("#" + a.id).datepicker("refresh"), $doc.find("#ui-datepicker-div").removeClass("ui-datepicker-loading")
                        })
                    },
                    onSelect: function(e, t) {
                        $("#" + t.id).closest(".product-list-item").find(".js-insert-calendar").length && eraluvat.app.functions.productCalendarTemplateInit(n)
                    }
                })
            })
        },
        slotCount: function(e, t, a) {
            return e ? a ? Math.ceil((eraluvat.app.functions.dateFromString(a).valueOf() - eraluvat.app.functions.dateFromString(t).valueOf()) / 1e3 / 60 / 60) : 0 : 1
        },
        updateSafariTimes: function() {
            var e = $(".js-safari-start-time").val(),
                t = $(".js-safari-start-minutes").val();
            $("#safari-start-time").val(e + ":" + t);
            var a = $(".js-safari-end-time").val(),
                i = $(".js-safari-end-minutes").val();
            $("#safari-end-time").val(a + ":" + i)
        },
        init: function() {
            eraluvat.STORE && eraluvat.STORE.FORCED_REDIRECT && setTimeout(function() {
                window.location.href = eraluvat.STORE.FORCED_REDIRECT
            }, 1e4), eraluvat.app.handlers.initMoment(), STORE_USER_DATA.init(), eraluvat.app.settings.SESSION_STORAGE_USABLE = eraluvat.app.functions.checkIfSessionStorageIsWritable(), eraluvat.app.handlers.productCard(), eraluvat.app.functions.addCurrentClassesToMenu(), eraluvat.app.handlers.swiperHandler(), eraluvat.app.handlers.autoCompleteSearch(), eraluvat.app.handlers.cartPage(), eraluvat.app.handlers.tooltip(), eraluvat.app.handlers.registerationForm(), eraluvat.app.handlers.pageDefault(), $("#insert-content").length > 0 && eraluvat.app.functions.getContentViaAjax($("#insert-content"), $("#insert-content").data("content-from"))
        }
    },
    handlers: {
        productCard: function() {
            eraluvat.app.settings.productID = eraluvat.app.settings.$productCard.data("product"), eraluvat.app.functions.productCalendarDatepicker("#product #begin-date"), $doc.on("click", ".js-productadded-close", function(e) {
                e.preventDefault(), $(this).closest(".productadded-notification").remove(), eraluvat.app.settings.$overlay.removeClass("show")
            }), $doc.on("click", "#product-content .js-slot:not(.slot-disabled)", function() {
                var e = $(this),
                    t = eraluvat.app.settings.$productCard.find(eraluvat.app.settings.productSubmitSelector),
                    a = "",
                    i = e.data("time-from"),
                    n = e.data("id"),
                    r = !1,
                    s = eraluvat.app.settings.$productCard.data("is-hourproduct");
                if ("" !== eraluvat.app.settings.$productCardTicketSelector.val()) {
                    if (t.removeClass("disabled"), eraluvat.app.settings.$productCardTicketSelector.find(".error").removeClass("error"), !0 === s) {
                        var o = i.split("T"),
                            l = o[1].split(":");
                        if (a = eraluvat.app.settings.$productCard.find(eraluvat.app.settings.hourSlotSelectSelector), o = o[0].split("-"), (i = new Date(parseInt(o[0]), parseInt(o[1] - 1), parseInt(o[2]))).setHours(parseInt(l[0])), i.setMinutes(parseInt(l[1])), i.setSeconds(parseInt(l[2])), a.find("option").each(function() {
                                if ($(this).val() == n) return r = !0, !1
                            }), !1 === r) {
                            var c = _.findWhere(Percolator.eraluvat.daySlotsJSON[eraluvat.app.settings.productID], {
                                id: n
                            });
                            void 0 !== c && eraluvat.app.functions.initHourTicketSelect(eraluvat.app.settings.$productCard.find(eraluvat.app.settings.hourSlotSelectSelector), {
                                productID: eraluvat.app.settings.productID,
                                searchParam: c.valid_from_date,
                                selected: n
                            })
                        }
                        a.find("option").removeAttr("selected"), a.val(n).trigger("change"), eraluvat.app.functions.selectHourSlots({
                            $ui: eraluvat.app.settings.$productCard.find(".product-list-calendar"),
                            startSlotTime: i,
                            slots: eraluvat.app.settings.$productCardTicketSelector.find("option:selected").data("min-length"),
                            amount: parseInt(eraluvat.app.settings.$productCardAmountSelector.val()),
                            slotID: e.data("id"),
                            productID: eraluvat.app.settings.productID
                        })
                    } else i = eraluvat.app.functions.changeDateFormat(i, !1, !0), eraluvat.app.functions.selectSlots({
                        $ui: eraluvat.app.settings.$productCard.find(".product-list-calendar"),
                        startTime: i,
                        slots: eraluvat.app.settings.$productCardTicketSelector.find("option:selected").data("min-length"),
                        amount: parseInt($(".control-amount").val())
                    });
                    eraluvat.app.settings.$productCard.find(".ui-datepicker-value").empty().text(eraluvat.app.functions.formatDateString({
                        date: i,
                        format: "D dd.mm.yyyy"
                    }))
                } else t.removeClass("disabled"), eraluvat.app.settings.$productCardTicketSelector.addClass("error-field"), eraluvat.app.functions.showDialog(Store.translations.select_license_period)
            }), !0 === eraluvat.STORE.IS_PRODUCT_PAGE && eraluvat.STORE.CURRENT_PRODUCT_BUYABLE_DATE_AJAX_URL && $.getJSON(eraluvat.STORE.CURRENT_PRODUCT_BUYABLE_DATE_AJAX_URL, function(e) {
                var t = eraluvat.app.functions.dateFromString(e[0].sale_opens_combined);
                return e[0].is_buyable = !1, eraluvat.STORE.SERVER_TIME > t && (e[0].is_buyable = !0), e
            }).then(function(e) {
                !0 === e[0].is_buyable ? eraluvat.app.settings.$productCard.find(".js-insert-calendar").length && eraluvat.app.functions.productCalendarTemplateInit() : (eraluvat.app.settings.$productCard.find(".item-body:not(#not-on-sale)").remove(), eraluvat.app.settings.$productCard.find("#not-on-sale").find(".js-sale-opens").text(eraluvat.app.functions.formatDateString({
                    date: new Date(e[0].sale_opens_combined),
                    format: "D dd.mm.yyyy",
                    showTime: !0
                })), eraluvat.app.settings.$productCard.find("#not-on-sale").removeClass("hidden"), eraluvat.app.settings.$productCard.find(".item-productstock").addClass("hidden"))
            }).done(function() {
                eraluvat.app.settings.$productCard.removeClass("product-list-item--not-visible")
            })
        },
        swiperHandler: function() {
            var e = [];
            $(".swiper-container").each(function(t) {
                var a = $(this),
                    i = a.closest(".promo-list, .cms-group"),
                    n = a.find(".swiper-pagination") || "",
                    r = a.data("autoplay") || "",
                    s = a.data("loop") || !1,
                    o = a.data("slidesperview-mobile") || 1,
                    l = a.data("slidesperview-tablet") || 1,
                    c = a.data("slidesperview-desktop") || 1;
                e[t] = new Swiper(a, {
                    autoplay: r,
                    loop: s,
                    spaceBetween: 10,
                    pagintion: n,
                    slidesPerView: c,
                    breakpoints: {
                        480: {
                            slidesPerView: o,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: l,
                            spaceBetween: 10
                        }
                    }
                }), i.find(".swiper-button-next").on("click", function() {
                    e[t].slideNext()
                }), i.find(".swiper-button-prev").on("click", function() {
                    e[t].slidePrev()
                })
            })
        },
        autoCompleteSearch: function() {
            function e(e, t) {
                var a = new RegExp("(" + $.ui.autocomplete.escapeRegex(t) + ")", "ig");
                return e.replace(a, '<span class="highlight-color">$1</span>')
            }
            eraluvat.app.settings.$searchElem.autocomplete({
                position: {
                    offset: "0 -10"
                },
                open: function() {
                    eraluvat.app.settings.$searchContainer.addClass("is-open"), $(".ui-autocomplete:visible").css({
                        top: "-=2"
                    })
                },
                close: function() {
                    eraluvat.app.settings.$searchContainer.removeClass("is-open")
                },
                focus: function(e, t) {
                    $(e.currentTarget).find(".cart-product-row").removeClass("current"), $("#autocomplete-item-id-" + t.item.id).addClass("current")
                },
                source: function(e, t) {
                    $.ajax({
                        url: "ajax/autocomplete/",
                        dataType: "json",
                        data: {
                            maxRows: 10,
                            term: e.term
                        },
                        success: function(e) {
                            var a = e.length;
                            t($.map(e, function(e, t) {
                                return {
                                    value: e.value,
                                    image: e.image_tiny,
                                    link: e.link,
                                    id: e.id,
                                    last: t + 1 === a
                                }
                            }))
                        }
                    })
                }
            }), $.ui.autocomplete.prototype._renderItem = function(t, a) {
                return t.addClass("list"), $("<li" + (a.last ? ' class="last"' : "") + "></li>").data("item.autocomplete", a).append('<div id="autocomplete-item-id-' + a.id + '" class=""><a class="" href="' + a.link + '">' + e(a.value, this.term) + "</a></div>").appendTo(t)
            }, eraluvat.app.settings.$searchElem.data("ui-autocomplete")._resizeMenu = function() {
                this.menu.element.outerWidth(this.element.outerWidth())
            }, eraluvat.app.settings.$searchElem.keydown(function(e) {
                13 === e.keyCode && $(e.target).closest("form")
            })
        },
        cartPage: function() {
            eraluvat.app.handlers.clearAllPayerFields();
            var e = function() {
                var e = {},
                    t = {};
                return function(a) {
                    var i = a.form.id + "." + a.name;
                    return {
                        enqueue: function(n, r) {
                            if (t[i] != a.value && a.value) {
                                var s = t[i] = a.value;
                                clearTimeout(e[i]), e[i] = setTimeout(function() {
                                    s == a.value && r.apply(a)
                                }, n)
                            }
                        }
                    }
                }
            }();
            $doc.on("change", ".js-amount-change", function() {
                var t = $(this),
                    a = t.val(),
                    i = t.data("product-id"),
                    n = parseInt(t.attr("data-product-total-amount"), 10),
                    r = t.attr("data-product-buyable-out-of-stock"),
                    s = parseInt(t.attr("data-product-max-order-amount"), 10),
                    o = t.attr("data-product-has-events") || !1,
                    l = "";
                e(this).enqueue(300, function() {
                    a && (t.val(a.replace(/[^0-9]+/, "")), "" === a || 0 === parseInt(a, 10) ? $elem.val(1) : (!1 === o && a > n && !1 === r ? (l = l + Store.translations.productAvailableAmount + " " + n + " " + Store.translations.quantityShort, eraluvat.app.functions.showDialog(l), $elem.val(n)) : !1 === o && a > s && 0 !== s && (l = l + Store.translations.productAvailableAmount + " " + s + " " + Store.translations.quantityShort, eraluvat.app.functions.showDialog(l), t.val(s)), !0 === t.data("update-cart") && $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: "cart?save=1&amount[" + i + "]=" + t.val() + "&ajax=1&json=1&include[cart_form]=cart_form",
                        data: eraluvat.app.settings.$cartForm.find("form").serialize(),
                        beforeSend: function() {
                            eraluvat.app.functions.showLoadingAnimation()
                        },
                        success: function(e) {
                            STORE_USER_DATA.init(), eraluvat.app.settings.$cartSize.empty().text(eraluvat.app.settings.cookieValues.cart_products), eraluvat.app.settings.$cartForm.html(e.html.cart_form), 0 === parseInt(eraluvat.app.settings.cookieValues.cart_products) && eraluvat.app.settings.$cartSize.addClass("hidden"), eraluvat.app.settings.$cartForm.find("select:not(.select2-usenative)").each(function() {
                                eraluvat.app.functions.select2Handler($(this))
                            }), eraluvat.app.settings.$cartForm.find(".cart-extra").length > 0 && eraluvat.app.settings.$cartForm.find(".cart-extra").each(function() {
                                0 === $(this).children().length && $(this).remove()
                            }), eraluvat.app.settings.$cartForm.find(".js-toggle-required").length > 0 && parseInt(eraluvat.app.settings.$cartForm.find(".js-toggle-required").val()), eraluvat.app.settings.$cartForm.find(".datepicker-startdate").length > 0 && eraluvat.app.settings.$cartForm.find(".datepicker-startdate").each(function() {
                                var e = $(this),
                                    t = "";
                                e.datepicker({
                                    firstDay: 1,
                                    defaultDate: "+1w",
                                    numberOfMonths: 1,
                                    constrainInput: !0,
                                    showOn: "both",
                                    buttonImageOnly: !0,
                                    buttonImage: eraluvat.STORE.BASE_URI + "static/media/theme/respo-2019/img/icons/calendar.svg",
                                    monthNames: Store.calendarTranslations.months,
                                    monthNamesShort: Store.calendarTranslations.months,
                                    dayNames: Store.calendarTranslations.days,
                                    dayNamesShort: Store.calendarTranslations.days,
                                    dayNamesMin: Store.calendarTranslations.days,
                                    dateFormat: "yy-mm-dd",
                                    prevText: "",
                                    nextText: "",
                                    beforeShowDay: function() {
                                        return [!0, "ui-many-in-stock"]
                                    },
                                    onClose: function(e, t) {
                                        var a = new Date(t.selectedYear, parseInt(t.selectedMonth), t.selectedDay);
                                        $("#" + t.id).prev(".ui-datepicker-value").text(Store.calendarTranslations.days[a.getDay()] + " " + eraluvat.app.functions.pad(a.getDate()) + "." + eraluvat.app.functions.pad(a.getMonth() + 1) + "." + a.getFullYear())
                                    }
                                }), "" !== e.val() && (t = new Date(e.val().split("-")[0], e.val().split("-")[1], e.val().split("-")[2]), e.prev(".ui-datepicker-value").text(Store.calendarTranslations.days[t.getDay()] + " " + eraluvat.app.functions.pad(t.getDate()) + "." + eraluvat.app.functions.pad(t.getMonth() + 1) + "." + t.getFullYear()))
                            }), eraluvat.app.settings.$cartForm.find(".js-autofill-extrainputs").length > 0 && eraluvat.app.settings.$cartForm.find(".js-autofill-extrainputs").each(function() {
                                1 === parseInt($(this).val()) && $(this).trigger("change")
                            }), window.cartVue && window.cartVue()
                        },
                        error: function(e, t, a) {
                            eraluvat.app.functions.consoleLogHandler("Ajax error " + e.status + " " + a)
                        },
                        complete: function() {
                            eraluvat.app.functions.clearLoadingAnimation()
                        }
                    })))
                })
            }), $("#selected-pickup-point").is(":visible") && $("#edit-pickup-point").removeClass("visually-hidden"), $("#pickup-error").length && $("#pickup-points").show(), $("#js-retry-payment").on("click", function() {
                $("#epaymentform").submit()
            }), $(".js-redirect2payment").length > 0 && $("#epaymentform").length > 0 && $("#to-payment-button .button").trigger("click"), eraluvat.app.settings.$cartForm.find(".datepicker-startdate").length > 0 && eraluvat.app.settings.$cartForm.find(".datepicker-startdate").each(function() {
                var e = $(this),
                    t = "";
                e.datepicker({
                    firstDay: 1,
                    defaultDate: "+1w",
                    numberOfMonths: 1,
                    constrainInput: !0,
                    showOn: "both",
                    buttonImageOnly: !0,
                    buttonImage: eraluvat.STORE.BASE_URI + "static/media/theme/respo-2019/img/icons/calendar.svg",
                    monthNames: Store.calendarTranslations.months,
                    monthNamesShort: Store.calendarTranslations.months,
                    dayNames: Store.calendarTranslations.days,
                    dayNamesShort: Store.calendarTranslations.days,
                    dayNamesMin: Store.calendarTranslations.days,
                    dateFormat: "yy-mm-dd",
                    prevText: "",
                    nextText: "",
                    beforeShowDay: function() {
                        return [!0, "ui-many-in-stock"]
                    },
                    onClose: function(e, t) {
                        var a = new Date(t.selectedYear, parseInt(t.selectedMonth), t.selectedDay);
                        $("#" + t.id).prev(".ui-datepicker-value").text(Store.calendarTranslations.days[a.getDay()] + " " + eraluvat.app.functions.pad(a.getDate()) + "." + eraluvat.app.functions.pad(a.getMonth() + 1) + "." + a.getFullYear())
                    }
                }), "" !== e.val() && (t = new Date(e.val().split("-")[0], e.val().split("-")[1], e.val().split("-")[2]), e.prev(".ui-datepicker-value").text(Store.calendarTranslations.days[t.getDay()] + " " + eraluvat.app.functions.pad(t.getDate()) + "." + eraluvat.app.functions.pad(t.getMonth() + 1) + "." + t.getFullYear()))
            }), $(".js-add-default-email").click(function(e) {
                e.preventDefault();
                var t = $(this);
                if (t.closest("form").find("input[name='payer_email']").length > 0) {
                    var a = t.closest("form").find("input[name='payer_email']"),
                        i = a.data("dummy-email") || "";
                    a && i && a.val(i)
                }
            }), $doc.on("change", ".js-autofill-extrainputs", function() {
                var e = $(this),
                    t = e.closest(".cart-extra-container").find(".js-toggle-row"),
                    a = e.closest(".cart-extra").find(".input-group-txt"),
                    i = t.find('.bdate-input[data-validate-date="true"]'),
                    n = t.find('.bdate-input[data-validate-month="true"]'),
                    r = t.find('.bdate-input[data-validate-year="true"]'),
                    s = t.find(".bdate-input-value"),
                    o = "",
                    l = (t.find("input").length, e.find("option:selected").data());
                if (1 === parseInt(e.find("option:selected").val())) {
                    if (a.show(), (e.hasClass("has-all-profile-data") || e.hasClass("js-connect-order")) && t.hide(), !1 === _.isEmpty(l)) {
                        for (key in l)
                            if (t.find('input[data-name="' + key.toLowerCase() + '"]').val(l[key]), "bdate" === key.toLowerCase()) {
                                var c = t.parent().find('input[data-name="bdate"]');
                                t.find(".js-dateinput").each(function(e, t) {
                                    var a = "";
                                    a = "en" === $("html").attr("lang").toLowerCase() ? c.val().split("/") : c.val().split("."), console.log($(this), a[e]), $(this).val(a[e])
                                })
                            } i.length > 0 && (o = s.val().split("."), i.val(o[0]), n.val(o[1]), r.val(o[2]))
                    }
                } else a.hide(), t.show(), t.find("input, select"), t.find("input, select").val("");
                n.trigger("change"), $.ajax({
                    type: "POST",
                    url: "cart/?ajax=1&save=1",
                    data: e.closest("form").serialize(),
                    error: function(e, t, a) {
                        eraluvat.app.functions.consoleLogHandler("Ajax error " + e.status + " " + a)
                    }
                })
            }), $doc.on("submit", ".js-create-newuser", function(e) {
                e.preventDefault();
                var t = $(this),
                    a = t.serialize();
                t.attr("action");
                $.ajax({
                    type: "POST",
                    url: $(this).attr("action"),
                    data: a,
                    success: function() {
                        var e = Store.translations.cartStep5YouHaveMail + "<br /><strong>" + t.find('input[type="hidden"]').val() + "</strong>.";
                        eraluvat.app.functions.showDialog(e, "/", !1)
                    },
                    error: function(e, t, a) {
                        eraluvat.app.functions.consoleLogHandler("Ajax error: " + e.status + " " + a)
                    }
                })
            }), $doc.on("click", ".js-reservate-order", function(e) {
                e.preventDefault();
                var t = $(this),
                    a = $("#site-content"),
                    i = t.data("ajax-url"),
                    n = $("#js-determite-content-from-cookie").data("order-id");
                $.ajax({
                    type: "GET",
                    url: i,
                    dataType: "html",
                    beforeSend: function() {
                        eraluvat.app.functions.showLoadingAnimation()
                    },
                    success: function(e) {
                        eraluvat.app.functions.setCookie("reservation", n, 1), eraluvat.app.settings.hasOldCart = Percolator.functions.getCookie("reservation"), eraluvat.app.settings.hasOldCart == n && (a.html(e), $(".js-logout").removeClass("js-alert-cartsize"))
                    },
                    error: function(e, t, a) {
                        eraluvat.app.functions.consoleLogHandler("Ajax error " + e.status + " " + a)
                    },
                    complete: function() {
                        eraluvat.app.functions.clearLoadingAnimation()
                    }
                })
            }), $doc.on("click", ".js-clear-cart", function(e) {
                e.preventDefault(), eraluvat.app.functions.setCookie("reservation", eraluvat.app.settings.hasOldCart, -1), document.location.href = $(this).attr("href")
            }), $doc.on("change", ".js-toggle-cart-register", function() {
                var e = $(this),
                    t = $("#cart-register-form");
                e.is(":checked") ? (t.show(), t.find('input:not([type="submit"])').attr("required", "required")) : (t.hide(), t.find('input:not([type="submit"])').val("").removeAttr("required"))
            }), $doc.on("click", ".js-set-cookie", function(e) {
                e.preventDefault();
                var t = $(this),
                    a = t.data("cookie-name"),
                    i = t.data("cookie-value"),
                    n = t.data("cookie-valid");
                !0 === _.isObject(i) && (i = JSON.stringify(i)), "" !== Percolator.functions.getCookie(a) && eraluvat.app.functions.setCookie(a, "", -1), eraluvat.app.functions.setCookie(a, i, n), document.location.href = t.attr("href")
            }), $doc.on("keypress", ".js-no-entersubmit", function(e) {
                if (13 === e.which) return !1
            }), $("#js-determite-content-from-cookie").length > 0 && (parseInt(eraluvat.app.settings.hasOldCart) === $("#js-determite-content-from-cookie").data("order-id") ? $(".js-reservate-order").trigger("click") : (eraluvat.app.functions.setCookie("reservation", eraluvat.app.settings.hasOldCart, -1), $("#js-determite-content-from-cookie").css("visibility", "visible"))), eraluvat.app.settings.$cartForm.find(".cart-extra").length > 0 && eraluvat.app.settings.$cartForm.find(".cart-extra").each(function() {
                0 === $(this).find(".input-group").length && $(this).remove()
            }), eraluvat.app.settings.$cartForm.find(".js-toggle-required").length > 0 && parseInt(eraluvat.app.settings.$cartForm.find(".js-toggle-required").val()), eraluvat.app.settings.$cartForm.find(".js-autofill-extrainputs").length > 0 && eraluvat.app.settings.$cartForm.find(".js-autofill-extrainputs").each(function() {
                var e = $(this),
                    t = e.closest(".cart-extra").next(".cart-extra");
                1 === parseInt(e.val()) && (e.hasClass("js-connect-order") ? e.closest(".cart-extra").next(".cart-extra").hide() : (e.trigger("change"), t.find('input[data-name="bdate"]') && t.parent().find(".js-dateinput").each(function(e, a) {
                    var i = [];
                    i = "en" === $("html").attr("lang").toLowerCase() ? t.find('input[data-name="bdate"]').val().split("/") : t.find('input[data-name="bdate"]').val().split("."), $(this).val(i[e])
                })))
            })
        },
        tooltip: function() {
            $doc.on({
                mouseover: function() {
                    var e = $(this),
                        t = null,
                        a = null,
                        i = e.offset(),
                        n = $("#tooltip-bubble"),
                        r = 0,
                        s = 0;
                    n.removeClass("top"), e.is(".header-campaign-name") ? (a = e.next().html(), $("#tooltip").empty().html(a), r = 30, s = 10, n.addClass("top"), n.css({
                        left: i.left + e.width() - n.width() - s,
                        top: i.top + r
                    }).addClass("visible")) : (t = e.data("tooltip-id"), a = $("#tooltip-content-for-" + t).html(), $("#tooltip").empty().html(a), r = 15, n.css({
                        left: i.left + e.innerWidth() / 2 - n.outerWidth() / 2,
                        top: i.top - n.outerHeight() - r
                    }).addClass("visible"))
                },
                mouseleave: function() {
                    $("#tooltip-bubble").removeClass("visible")
                }
            }, ".tooltip, #header-campaigns .swiper-slide-visible span")
        },
        pageDefault: function() {
            $(".cms-page").each(function() {
                var e = $(this).find("table"),
                    t = $(this).find("iframe"),
                    a = $(this).find('a[href^="#"]'),
                    i = window.location.href;
                window.location.search && (i = i.replace(window.location.search, "")), "" !== window.location.hash && (i = i.replace(window.location.hash, "")), a.each(function() {
                    var e = $(this),
                        t = e.attr("href").substring(e.attr("href").indexOf("#"));
                    e.attr("href", i + t)
                }), e.each(function() {
                    $(this).wrap('<div class="table-responsive"></div>').addClass("table table-bordered")
                }), t.each(function() {
                    $(this).wrap('<div class="cms-iframe"></div>')
                })
            }), window.location.hash && $(window.location.hash).length > 0 && eraluvat.app.functions.smoothScroller(window.location.hash), $doc.on("submit", "#js-order-newsletter", function(e) {
                var t = $(this),
                    a = t.find('input:not([type="hidden"]), select'),
                    i = !0,
                    n = "",
                    r = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i),
                    s = t.serialize();
                if (t.find(".error-field, .has-error").removeClass("error-field has-error"), a.each(function() {
                        var e = $(this);
                        "email" === e.attr("name") ? "" !== e.val() && r.test(e.val()) || (e.addClass("error-field"), n = n + Store.translations.emailError + "<br>", i = !1) : "consent[]" !== e.attr("name") || e.is(":checked") ? "" === e.val() && (e.addClass("error-field"), n = n + Store.translations.missingMailerList + "<br>", i = !1) : (e.closest(".form-group").addClass("has-error"), n = n + Store.translations.marketing_consent_not_allowed + "<br>", i = !1)
                    }), !1 === i) return eraluvat.app.functions.showDialog(n), !1;
                $.ajax({
                    url: t.attr("action"),
                    method: "POST",
                    data: s,
                    complete: function(e) {}
                })
            }), $doc.on("click", "#modal-close, #overlay, .js-close-modal", function(e) {
                e.preventDefault(), $doc.find(".modal.modal-show").removeClass("modal-show"), $("body").removeClass("modal-visible"), eraluvat.app.settings.$modal.attr("data-redirect-url") && "" != eraluvat.app.settings.$modal.attr("data-redirect-url") && (window.location.href = eraluvat.app.settings.$modal.attr("data-redirect-url"), eraluvat.app.functions.showLoadingAnimation())
            }), $doc.find("select:not(.select2-usenative)").each(function() {
                eraluvat.app.functions.select2Handler($(this))
            }), $(".fancybox").fancybox({
                autoSize: !1,
                width: "65%",
                height: "95%",
                margin: [50, 0, 50, 0],
                padding: 10,
                openSpeed: 150,
                closeSpeed: 100,
                tpl: {
                    closeBtn: '<button title="' + Store.translations.close + '" class="button fancybox-close"></button>'
                }
            }), $(window).resize(function() {
                $.fancybox.close()
            }), $doc.on("click", '[data-open-window="true"]', function(e) {
                $.fancybox.helpers.overlay.open({
                    parent: "body"
                }), $.fancybox.showLoading(), e.preventDefault();
                var t = $(this),
                    a = t.data("ajax-url"),
                    i = t.data("include"),
                    n = t.data("box-width") || "";
                $.get(a + "?ajax=1&include=" + i, function(e) {
                    var a;
                    try {
                        a = jQuery.parseJSON(e).html
                    } catch (t) {
                        a = e
                    }
                    $.fancybox({
                        content: a,
                        margin: 50,
                        padding: 10,
                        autoSize: !($(window).width() > 480),
                        width: "85%",
                        height: "auto",
                        tpl: {
                            closeBtn: '<button title="' + Store.translations.close + '" class="fancybox-close"></button>'
                        },
                        afterLoad: function() {
                            n && (this.maxWidth = n)
                        },
                        beforeShow: function() {
                            $("#fancybox-inner").wrapInner('<div class="box-wrapper" />')
                        },
                        afterShow: function() {
                            function e(e, t) {
                                return t[0].clientHeight > e[0].clientHeight || t[0].clientWidth > e[0].clientWidth
                            }
                            var a = $("#fancybox-content");
                            t.data("payer-data") && (a.closest(".fancybox-inner").css("overflow", "hidden"), _.each(t.data("payer-data"), function(e, t) {
                                var i = "",
                                    n = "";
                                i = a.find('input[name="' + t + '"]').val(e).removeClass("error-field"), "birthdate" == t && (n = e.split("."), i.closest(".form-group").find("input:not(.bdate-input-value), select").each(function(e) {
                                    $(this).val(n[e]).removeClass("error-field")
                                }))
                            })), a.hasClass("js-form-validator") && eraluvat.app.handlers.registerationForm(), $(window).width() <= 480 && a.closest(".fancybox-inner").css("overflow-y", "scroll"), a.find("input").on("keyup", function() {
                                !0 === e(a.closest(".fancybox-inner"), a) && $.fancybox.update()
                            }), a.on("click", ".js-toggle-fancbybox", function(e) {
                                e.preventDefault();
                                var t = $(this).toggleClass("expand-menu");
                                $("#" + t.data("toggle-element")).slideToggle(500), setTimeout(function() {
                                    $.fancybox.update()
                                }, 600)
                            })
                        }
                    })
                })
            }), $doc.on("click", "#fancybox-inner .close-window", function() {
                $.fancybox.close()
            }), eraluvat.app.functions.showErrors(), $doc.on("click", ".productadded-visible", function(e) {
                0 == $(e.target).closest(".productadded-notification").length && ($doc.find(".productadded-notification").remove(), $("body").removeClass("productadded-visible body-fixed"))
            }), $doc.find("html").hasClass("ie9") || $doc.find("html").hasClass("ie8") ? $("a.fancy-content").click(function(e) {
                var t = $(this),
                    a = t.attr("href"),
                    i = a.indexOf("#"),
                    n = a.substring(0, -1 != i ? i : a.length);
                t.attr("href", n)
            }) : ($("a.cms-ajax").fancybox({
                type: "ajax",
                margin: 50,
                padding: 10,
                openSpeed: 150,
                closeSpeed: 100,
                maxWidth: 768,
                maxHeight: 600,
                fitToView: !0,
                closeClick: !1,
                tpl: {
                    closeBtn: '<button title="' + Store.translations.close + '" class="button fancybox-close"></button>'
                },
                beforeShow: function() {
                    $("#fancybox-inner").wrapInner('<div class="box-wrapper" />')
                }
            }), $("a.fancy-ml-safari").fancybox({
                type: "ajax",
                margin: 20,
                padding: 10,
                openSpeed: 150,
                closeSpeed: 100,
                maxWidth: 620,
                maxHeight: 830,
                fitToView: !0,
                autoSize: !0,
                closeClick: !1,
                closeBtn: !1,
                tpl: {
                    closeBtn: '<button title="' + Store.translations.close + '" class="button fancybox-close"></button>'
                },
                beforeShow: function() {
                    $("#fancybox-inner").wrapInner('<div class="box-wrapper" />')
                }
            })), $.fn.setAllToMaxHeight = function() {
                return this.height(Math.max.apply(this, $.map(this, function(e) {
                    return $(e).height()
                })))
            }, $("#other-sites").change(function(e) {
                $this = $(this), $this.val() && (eraluvat.app.functions.showLoadingAnimation(), window.location.href = $this.val())
            }), $doc.on("click", ".js-promo-add2cart", function(e) {
                e.preventDefault();
                var t = $(this).closest(".product-form").find("input, select, textarea").serialize();
                eraluvat.add2cart(t, $(this)).done(function(e) {
                    e instanceof Array && e.length > 0 && eraluvat.app.functions.showDialog(e.join("<br />"))
                })
            }), $doc.on("change", ".amount", function() {
                var e = $(this);
                e.val() >= e.data("max") && e.val(e.data("max")), e.val() <= e.data("min") && e.val(e.data("min"))
            }), $doc.on("click", ".js-amount-increase", function() {
                var e = $(this).closest(".nbrinput").find(".amount"),
                    t = parseInt(e.val()) + 1;
                e.val(t), e.trigger("change")
            }), $doc.on("click", ".js-amount-decrease", function() {
                var e = $(this).closest(".nbrinput").find(".amount"),
                    t = parseInt(e.val()) - 1;
                t < 1 ? e.val(1) : e.val(t), e.trigger("change")
            }), $doc.on("blur", ".js-dateinput", function() {
                var e = $(this),
                    t = e.parent().find(".bdate-input-value"),
                    a = e.parent().find("input:not(.bdate-input-value)"),
                    i = null;
                t.length > 0 && (a[0].value && a[1].value && a[2].value && parseInt(a[0].value, 10) && parseInt(a[1].value, 10) && parseInt(a[2].value, 10) ? (t.val(a[0].value + "." + a[1].value + "." + a[2].value).trigger("change"), t.data("min-age") && (i = eraluvat.app.functions.getAge(a[2].value + "-" + a[1].value + "-" + a[0].value), eraluvat.STORE.NOTIFY_IF_USER_AGE_LOWER > i && eraluvat.app.functions.showDialog(Store.translations.user_is_under_13_notice))) : t.val(""))
            }), $doc.find(".bdate-input-value").each(function() {
                var e = $(this);
                "" !== e.val() && e.trigger("change")
            }), $doc.on("click", ".js-alert-cartsize", function(e) {
                if ("" === eraluvat.app.settings.hasOldCart) {
                    e.preventDefault();
                    var t = "",
                        a = Store.translations.confirmLogout.split(".").join(".<br>");
                    t = '<div class="modal-content"><div class="modal-header"><h2 class="title">' + Store.translations.notice + '</h2></div><div class="modal-body"><p id="modal-content">' + a + '</p></div><div class="modal-foot"><div class="group group--even"><div class="element element--txt"><button class="button button--theme-default" id="modal-close" type="button">' + Store.translations.close + '</button></div><div class="element element--txt"><a class="button button--theme-main" href="' + $(this).attr("href") + '">' + Store.translations.logout + "</a></div></div></div></div>", eraluvat.app.functions.showDialog(t, !1, !0)
                }
            }), $doc.on("submit", ".js-ajax-login", function(e) {
                e.preventDefault(), eraluvat.app.functions.ajaxLogin($(this))
            }), null !== eraluvat.app.settings.IS_MOBILE ? $("body").addClass("is-touch") : $("body").addClass("no-touch"), !0 === eraluvat.STORE.IS_SINGLE_ORDER && "" !== eraluvat.app.settings.hasOldCart && $.post("cart/restart").done(function() {
                eraluvat.app.functions.setCookie("reservation", eraluvat.app.settings.hasOldCart, -1), eraluvat.app.settings.hasOldCart = ""
            }), $doc.on("click", ".swiper-wrapper a", function(e) {
                var t = $(e.target);
                t.length && "A" !== t[0].className && (t = t.parents("a")), t.length && "" !== t[0].href && (document.location = t[0].href)
            }), $doc.on("change", ".js-toggle-row-required input, .js-toggle-row-required select, .js-toggle-row-required textarea", function() {
                var e = $(this).closest(".js-toggle-row-required"),
                    t = !1;
                e.find("input, textarea, select").each(function() {
                    var e = $(this);
                    "checkbox" === e.attr("type") || "radio" === e.attr("type") ? e.is(":checked") && (t = !0) : "" !== e.val() && (t = !0)
                }), t ? e.find("input, select, textarea").removeAttr("required") : e.find("input, select, textarea").attr("required", "required")
            }), $doc.on("blur", ".js-get-marketing-consent-form", function() {
                var e = $(this),
                    t = $("#marketing-conset-empty"),
                    a = "cart/read?include=marketing_consent_ajax";
                "" !== e.val() && t.length > 0 && 0 === t.find(".checkbox").length && (a += "&email=" + encodeURIComponent(e.val()), $.ajax({
                    type: "GET",
                    url: a,
                    success: function(e) {
                        t.html(e)
                    },
                    error: function(e, t, a) {
                        console.log("Ajax error", e.status, a)
                    }
                }))
            }), $doc.on("click", ".js-ajax-form", function(e) {
                var t = $(this),
                    a = $(t.data("form-selector")),
                    i = !0;
                e.preventDefault(), e.stopPropagation(), a.find("[required]").closest(".form-group").removeClass("has-error"), a.find("[required]").each(function() {
                    var e = $(this),
                        t = e.closest(".form-group");
                    "radio" === e.attr("type") && 0 === t.find("input:checked").length && (t.addClass("has-error"), i = !1)
                }), !0 === i && $.ajax({
                    type: a.data("method"),
                    url: a.data("action") + "?ajax=1",
                    data: a.find("input").serialize(),
                    beforeSend: function() {
                        t.attr("disabled", "disabled"), a.find(".form-loader").show()
                    },
                    success: function(e) {
                        a.find(".form-success-msg").show()
                    },
                    error: function(e, t, i) {
                        a.find(".form-error-msg").show()
                    },
                    complete: function() {
                        a.find(".form-loader").hide(), a.find(".after-submit").show(), t.removeAttr("disabled")
                    }
                })
            }), $doc.on("submit", ".js-ajax-reset-password", function(e) {
                var t = $(this),
                    a = !0;
                if (e.preventDefault(), t.find("[required]").each(function() {
                        var e = $(this),
                            t = e.closest(".form-group");
                        "radio" === e.attr("type") && 0 === t.find("input:checked").length && (t.addClass("has-error"), a = !1)
                    }), !0 === a) {
                    var i = t.find('input[type="submit"]');
                    $.ajax({
                        type: t.attr("method"),
                        url: t.attr("action") + "?ajax=1",
                        data: t.serialize(),
                        dataType: "json",
                        beforeSend: function() {
                            i.attr("disabled", "disabled")
                        },
                        success: function(e) {
                            e.successful ? window.location.href = "login/reset_password/2" : (t.find(".form-error-msg").find(".alert").text(Store.translations.reset_password_not_allowed), t.find(".form-error-msg").show())
                        },
                        error: function(e, a, i) {
                            t.find(".form-error-msg").show()
                        },
                        complete: function() {
                            i.removeAttr("disabled")
                        }
                    })
                }
            })
        },
        clearAllPayerFields: function() {
            $(".clear-payer-data-fields").click(function() {
                $(this).closest("form").find('input:not([type="submit"]), select, textarea').val("")
            })
        },
        registerationForm: function() {
            var e, t, a, i, n = $(".js-form-validator");
            n.length && (e = n.find('input[name="email"]') || $(), t = n.find('input[name="email2"]') || $(), a = n.find('input[name="password"]:not(#current-password), input[name="password_change1"]') || $(), i = n.find('input[name="password2"], input[name="password_change2"]') || $(), e.length && t.length && eraluvat.app.functions.setInputComparison(e, t), a.length && i.length && eraluvat.app.functions.setInputComparison(a, i, !0, 6, a.closest(".form-group").find("label").eq(0)), $doc.on("submit", ".js-form-validator:not(.is-valid)", function(e) {
                if (!0 !== (eraluvat.app.functions.validateRegForm({
                        selector: ".js-form-validator",
                        inputErrorSuffix: Store.translations.fieldIsRequired,
                        errorClassOnField: "error-field"
                    }) || !1)) return e.preventDefault(), e.stopPropagation(), !1
            }))
        },
        cartTimer: function() {
            function e() {
                clearInterval(eraluvat.app.settings.timer), eraluvat.app.functions.showDialog(Store.translations.cart_reservation_time_ended, "/cart/restart")
            }
            var t = eraluvat.app.functions.dateFromString(eraluvat.app.settings.cookieValues.cart_timeout);
            eraluvat.app.settings.$timer = $doc.find(".js-timer").removeClass("hidden"), eraluvat.STORE.SERVER_TIME >= t ? e() : eraluvat.app.settings.timer = setInterval(function() {
                var a = Math.floor((t - (new Date - eraluvat.app.settings.deviceTimeOffset)) / 1e3);
                a > 0 ? eraluvat.app.settings.$timer.html(eraluvat.app.functions.pad(parseInt(a / 60, 10)) + ":" + eraluvat.app.functions.pad(a % 60)) : e()
            }, 1e3)
        },
        initMoment: function() {
            moment.locale("fi")
        }
    }
}, $(function() {
    eraluvat.app.functions.init(), !1 === _.isEmpty(eraluvat.app.settings.cookieValues) && eraluvat.app.settings.$userName.empty().text(eraluvat.app.settings.cookieValues.user_firstname.replace("+", " ") + " " + eraluvat.app.settings.cookieValues.user_lastname.replace("+", " ")), eraluvat.add2cart = "" !== eraluvat.app.settings.hasOldCart ? eraluvat.app.functions.addToCartClearPreviousCart : eraluvat.app.functions.addToCart, $(".datepicker-search").each(function() {
        var e = $(this),
            t = e.val();
        "" !== t && (t = new Date(t), e.prev(".ui-datepicker-value").text(Store.calendarTranslations.days[t.getDay()] + " " + eraluvat.app.functions.pad(t.getDate()) + "." + eraluvat.app.functions.pad(t.getMonth() + 1) + "." + t.getFullYear())), e.datepicker({
            firstDay: 1,
            defaultDate: "+1w",
            changeMonth: !0,
            numberOfMonths: 1,
            constrainInput: !0,
            showOn: "both",
            buttonImageOnly: !0,
            buttonImage: eraluvat.STORE.BASE_URI + "static/media/theme/respo-2019/img/icons/calendar.svg",
            monthNames: Store.calendarTranslations.months,
            monthNamesShort: Store.calendarTranslations.months,
            dayNames: Store.calendarTranslations.days,
            dayNamesShort: Store.calendarTranslations.days,
            dayNamesMin: Store.calendarTranslations.days,
            prevText: "",
            nextText: "",
            beforeShowDay: function() {
                return [!0, "ui-many-in-stock"]
            },
            onClose: function(e, t) {
                var a = new Date(t.selectedYear, parseInt(t.selectedMonth), t.selectedDay);
                $("#" + t.id).prev(".ui-datepicker-value").text(Percolator.eraluvat.localizedDayNames[a.getDay()] + " " + eraluvat.app.functions.pad(a.getDate()) + "." + eraluvat.app.functions.pad(a.getMonth() + 1) + "." + a.getFullYear()), "date-from" == t.id ? $("#date-to").datepicker("option", "minDate", e) : $("#date-from").datepicker("option", "maxDate", e)
            }
        })
    }), $doc.find(".datepicker-input").each(function() {
        var e = $(this);
        setTimeout(function() {
            !0 === e.data("is-group") ? eraluvat.app.functions.datepickerGroupHandler(e, $(e.data("group-to-input"))) : eraluvat.app.functions.datepickerHandler(e)
        }, 0)
    }), $doc.on("click", ".ui-datepicker-trigger", function() {
        $(this).closest(".calendarinput").find(".datepicker-input").trigger("click")
    }), $doc.on("click", ".js-fancy-content", function(e) {
        e.preventDefault();
        var t = $(this);
        eraluvat.app.functions.fancyBoxStaticHTML({
            content: $("#" + t.data("id")),
            widthPercent: t.data("fancybox-width")
        })
    }), $doc.on("change", ".js-fileinput", function() {
        var e = $(this),
            t = e.closest(".fileinput"),
            a = "";
        a = "" === e.val() ? Store.translations.fileInputText : (a = e.val().split("\\"))[a.length - 1], t.find(".fileinput-ui").text(a)
    }), $doc.on("click", ".js-toggle-loginform", function(e) {
        e.preventDefault();
        var t = $(this),
            a = $(this).closest(".form-login-header").parent(),
            i = a.find(".form-holder");
        a.find(".js-toggle-loginform").removeClass("active").addClass("inactive"), t.addClass("active"), i.hide(), $("#" + t.data("toggle-target")).show()
    }), $doc.on("submit", ".js-omariista-login", function(e) {
        e.preventDefault();
        var t = $(this);
        $.ajax({
            url: "OmariistaPlugin",
            method: t.attr("method"),
            data: t.serialize(),
            beforeSend: function() {
                eraluvat.app.functions.showLoadingAnimation()
            },
            success: function(e) {
                void 0 !== e.success && !0 === e.success ? void 0 !== e.account_upgraded && !0 === e.account_upgraded ? eraluvat.app.functions.showDialog(Store.translations.oma_riista_connect_modal_txt_1 + " " + e.email + " " + Store.translations.oma_riista_connect_modal_txt_2, t.data("profile-page"), null) : location.href = t.data("profile-page") : eraluvat.app.functions.showDialog(e.error)
            },
            error: function(e, t, a) {
                eraluvat.app.functions.consoleLogHandler("Ajax error: " + e.status + " " + a)
            },
            complete: function() {
                eraluvat.app.functions.clearLoadingAnimation()
            }
        })
    }), $doc.on("click", ".js-slot:not(.slot-disabled)", function() {
        var e = $(this),
            t = e.closest(".product-form"),
            a = t.find(".js-product-ticket option:selected").data("min-length"),
            i = !1,
            n = "";
        t.find(".error-field").removeClass("error-field"), t.find(".disabled").removeClass("disabled").removeAttr("disabled"), a ? (t.find(".ui-selected").removeClass("ui-selected"), t.find(".js-slot").each(function(t, n) {
            !1 === i && (i = parseInt(n.dataset.id, 10) === e.data("id")), i && a && ($(n).addClass("ui-selected"), a -= eraluvat.app.functions.slotCount(!1))
        }), n = t.find(".js-slot.ui-selected").eq(0).data("time-from").substring(0, t.find(".js-slot.ui-selected").eq(0).data("time-from").indexOf("T")), t.find(".calendar").val(eraluvat.app.functions.formatDateString({
            date: new Date(n),
            format: "D dd.mm.yyyy"
        }))) : (t.find(".js-product-ticket").addClass("error-field"), eraluvat.app.functions.showDialog(Store.translations.select_license_period))
    }), $doc.on("click", ".js-hour-slot:not(.slot-disabled)", function() {
        var e = $(this),
            t = e.closest(".product-form"),
            a = t.find(".js-product-ticket option:selected"),
            i = eraluvat.app.functions.dateFromString(e.data("time-from")),
            n = a.data("min-length"),
            r = null;
        n ? (t.find(".js-hour-slot").removeClass("ui-selected"), t.find(".js-hour-slot").each(function(e, t) {
            var a = $(t),
                r = null,
                s = null,
                o = 0;
            return eraluvat.app.functions.dateFromString(a.data("time-from").valueOf()) >= i.valueOf() && (a.addClass("ui-selected"), a.next(".js-hour-slot").length ? (r = a.next(".js-hour-slot")).length && (s = r.data("time-from")) : (r = a.closest(".swiper-slide").next(".swiper-slide")).length && (s = r.find(".js-hour-slot").first().data("time-from")), o = eraluvat.app.functions.slotCount(!0, a.data("time-from"), s), n -= 0 === o ? n : o), n > 0
        }), eraluvat.app.functions.showHourProductStartSlots(t), eraluvat.app.functions.showHourProductEndSlot(t), r = t.find(".js-hour-slot.ui-selected").eq(0).data("time-from").substring(0, t.find(".js-hour-slot.ui-selected").eq(0).data("time-from").indexOf("T")), t.find(".calendar").val(eraluvat.app.functions.formatDateString({
            date: new Date(r),
            format: "D dd.mm.yyyy"
        }))) : (t.find(".js-product-ticket").addClass("error-field"), eraluvat.app.functions.showDialog(Store.translations.select_license_period))
    }), $doc.on("change", ".js-set-startslot", function() {
        var e = $(this),
            t = e.closest(".product-form"),
            a = t.find(".js-hour-slot").removeClass("ui-selected"),
            i = t.find(".js-product-ticket option:selected").data("min-length"),
            n = e.find("option:selected"),
            r = eraluvat.app.functions.dateFromString(t.find('.js-hour-slot[data-id="' + n.val() + '"]').data("time-from"));
        t.find(".disabled").removeClass("disabled").removeAttr("disabled"), a.each(function(e, t) {
            var a = $(t),
                n = null,
                s = null,
                o = 0;
            return eraluvat.app.functions.dateFromString(a.data("time-from").valueOf()) >= r.valueOf() && (a.addClass("ui-selected"), a.next(".js-hour-slot").length ? (n = a.next(".js-hour-slot")).length && (s = n.data("time-from")) : (n = a.closest(".swiper-slide").next(".swiper-slide")).length && (s = n.find(".js-hour-slot").first().data("time-from")), o = eraluvat.app.functions.slotCount(!0, a.data("time-from"), s), i -= 0 === o ? i : o), i > 0
        }), eraluvat.app.functions.showHourProductEndSlot(t)
    }), $(".js-oma-riista-connect-accounts").on("submit", function(e) {
        e.preventDefault();
        var t = $(this),
            a = t.data("account-email");
        $("input[name=other_account_email]").val() === a ? eraluvat.app.functions.showDialog(Store.translations.oma_riista_connect_account_same_email) : $.ajax({
            url: t.attr("action"),
            method: t.attr("method"),
            data: t.serialize(),
            success: function(e) {
                void 0 !== e.success && !0 === e.success ? (eraluvat.app.functions.showDialog(Store.translations.oma_riista_connect_account_success), t.find("input").val("")) : void 0 !== e.error && e.error.length ? eraluvat.app.functions.showDialog(e.error) : eraluvat.app.functions.showDialog(Store.translations.oma_riista_connect_account_fail)
            }
        })
    }), $doc.on("click", ".js-toggle-element", function(e) {
        e.preventDefault();
        var t = $(this).toggleClass("expand-element"),
            a = $("#" + t.data("toggle-element")).toggleClass("toggle-active");
        !1 === a.hasClass("toggle-active") ? (t.removeClass("expand-element"), a.removeClass("toggle-active").slideUp("fast")) : a.addClass("toggle-active").slideDown("fast")
    }), $doc.on("click", ".js-toggle-category", function(e) {
        e.preventDefault();
        var t = $(this).toggleClass("category-visible"),
            a = $("#" + t.data("toggle-category"));
        t.hasClass("category-visible") ? a.slideDown("fast") : a.slideUp("fast")
    }), $doc.on("mouseup touchend", function(e) {
        var t = $(".js-toggle-element.expand-element"),
            a = $("#" + t.data("toggle-element"));
        !1 === $("body").hasClass("modal-visible") && (a.is(e.target) || 0 !== a.has(e.target).length || t.is(e.target) || 0 !== t.has(e.target).length || (a.hide(), a.removeClass("toggle-active").slideUp("fast"), $(".js-toggle-element.expand-element").removeClass("expand-element")))
    }), $doc.on("mouseup touchend", function(e) {
        var t = $(".js-toggle-categorys-sub-nav.open"),
            a = $(t.data("toggle"));
        !1 === $("body").hasClass("modal-visible") && window.matchMedia("(min-width: 992px)") && (a.is(e.target) || 0 !== a.has(e.target).length || t.is(e.target) || 0 !== t.has(e.target).length || (a.hide(), $(".js-toggle-categorys-sub-nav.open").removeClass("open")))
    }), $doc.on("click", ".js-toggle-modal", function(e) {
        e.preventDefault();
        var t = $(this),
            a = t.data("target");
        t.data("target-classes");
        "" !== a && (!1 === $(a).hasClass("modal-show") ? $(a).addClass("modal-show").show() : $(a).removeClass("modal-show"))
    }), $doc.on("click", ".js-toggle-fancy", function(e) {
        $.fancybox.close()
    }), $doc.on("click", ".js-toggle-lupahakemus", function(e) {
        e.preventDefault();
        var t = $(this),
            a = t.data("target"),
            i = t.data("href");
        t.data("target-classes");
        "" !== a && "" !== i && $.ajax({
            url: i,
            method: "GET",
            success: function(e) {
                if ($("#typeselectionModal").find(".modal-content").html(e), !1 === $(a).hasClass("modal-show")) {
                    var t = $("#typeselectionModal").height(),
                        i = $(window).height();
                    t + 20 > i ? ($("#typeselectionModal").css("max-height", i + "px"), $("#typeselectionModal").css("overflow-y", "scroll")) : ($("#typeselectionModal").css("max-height", "none"), $("#typeselectionModal").css("overflow-y", "hidden")), $(a).addClass("modal-show").show()
                } else $("#typeselectionModal").css("max-height", "none"), $("#typeselectionModal").css("overflow-y", "hidden"), $(a).removeClass("modal-show")
            }
        })
    }), $doc.on("click", ".js-is-empty", function(e) {
        e.preventDefault()
    }), $(".license-start-time-select").each(function() {
        updateValidityPeriod($(this))
    }), $(".license-start-time-select").on("change", function() {
        updateValidityPeriod($(this))
    }), $(".summary-product-row .license-valid-to").each(function() {
        if ("" != $(this).val()) {
            var e = $(this).closest(".summary-product-row"),
                t = $(this).val().toString(),
                a = e.find(".license-valid-thru");
            if (e.find(".license-duration").hasClass("duration-hours")) {
                var i = e.find(".license-duration.duration-hours").val();
                i = (i = i.split(":"))[0];
                var n = parseInt(60 * i, 10),
                    r = new Date(moment(t).format()),
                    s = new Date(moment(t).format());
                s.setMinutes(s.getMinutes() - n), setValidityPeriod(a, s, r)
            }
        }
    }), "-1" != window.location.href.indexOf("identify/vetuma") && "-1" == window.location.href.indexOf("cancel") && $("#redirect-link").length > 0 && (window.location = $("#redirect-link").attr("href")), $doc.find(eraluvat.app.settings.priceEstimationSelector).length > 0 && $.getScript("Eraluvat/estimateOffRoadTrafficPermitPrice").done(function(e, t) {
        "success" === t && ($doc.on("change", eraluvat.app.settings.priceEstimationSelector + "," + eraluvat.app.settings.priceEstimationSelector + " select", function() {
            var e = $(this);
            !1 === e.is("select[multiple]") && "" !== e.val() && eraluvat.app.functions.getEstimationPrice(eraluvat.app.settings.priceEstimationSelector, eraluvat.app.settings.priceEstimationTargetSelector)
        }), $doc.on("change", ".js-price-estimator-disabler", function() {
            var e = $(this),
                t = $(e.data("disable-selector"));
            "" === e.val().toString() ? t.addClass(eraluvat.app.settings.priceEstimationSelector.substring(1)) : t.removeClass(eraluvat.app.settings.priceEstimationSelector.substring(1)), eraluvat.app.functions.getEstimationPrice(eraluvat.app.settings.priceEstimationSelector, eraluvat.app.settings.priceEstimationTargetSelector)
        }))
    }), $doc.on("change", ".js-give-consent", function() {
        var e = $(this),
            t = e.closest("form, .form-horizontal"),
            a = t.find('.js-give-consent[value="1"]:checked').length > 0,
            i = 0 === t.find('.js-mailer-input[value="1"]:checked').length;
        e.is(":checked") && 1 === parseInt(e.val(), 10) ? (t.find(".js-mailer-input").prop("disabled", !1), t.find('[name="email_subscriptions_blocked"]').val(0)) : (t.find(".js-mailer-input").prop("disabled", "disabled"), t.find(".js-mailer-input:checked").prop("checked", !1), t.find('[name="email_subscriptions_blocked"]').val(1)), !0 === a && !0 === i ? t.find(".js-hidden-list-to-user").removeAttr("disabled") : t.find(".js-hidden-list-to-user").attr("disabled", "disabled")
    }), $doc.on("change", ".js-mailer-input", function() {
        var e = $(this).closest("form, .form-horizontal"),
            t = e.find('.js-give-consent[value="1"]:checked').length > 0,
            a = 0 === e.find('.js-mailer-input[value="1"]:checked').length;
        !0 === t && !0 === a ? e.find(".js-hidden-list-to-user").removeAttr("disabled") : e.find(".js-hidden-list-to-user").attr("disabled", "disabled")
    }), $doc.on("submit", ".js-submit-order", function(e) {
        var t = $(this),
            a = t.find("[required]"),
            i = [];
        t.find(".text-danger").removeClass("text-danger"), a.each(function() {
            var e = $(this),
                t = "",
                a = "";
            switch (e.attr("type")) {
                case "checkbox":
                    !1 === e.is(":checked") && (t = (a = e.closest("label").data("label") ? e.closest("label").data("label") : e.closest("label").text()).charAt(0).toUpperCase() + a.substring(1), i.push(t.replace(":", "") + " " + Store.translations.fieldIsRequired), e.closest("label").addClass("text-danger"))
            }
        }), i.length > 0 && (e.preventDefault(), eraluvat.app.functions.showDialog(i.join("<br>")), eraluvat.app.functions.smoothScroller(t.find(".text-danger").eq(0)))
    }), $doc.on("change", ".js-set-permit-for-user", function() {
        var e = $(this),
            t = e.find("option:selected"),
            a = e.closest(".extra-input-group-container"),
            i = t.data("json") || {};
        !1 === eraluvat.STORE.IS_LOGGED_IN ? 1 === parseInt(t.val(), 10) || 138 === parseInt(t.val(), 10) ? (a.find("input").val(""), a.find("input:not(.license-duration)").closest(".extra-input").addClass("hidden")) : a.find("input:not(.license-duration)").closest(".extra-input").removeClass("hidden") : $.isEmptyObject(i) ? (a.find("input").val(""), a.find("input:not(.license-duration)").closest(".hidden").removeClass("hidden"), a.find(".extra-input-sub-col-sm-8").addClass("hidden")) : ($.each(i, function(e, t) {
            switch (a.find('[data-name="' + e + '"]').val(t), e) {
                case "birthdate":
                    a.find('[data-name="' + e + '"]').closest(".extra-input").find(".js-dateinput").each(function(e, a) {
                        var i = t.indexOf("/") > -1 ? "/" : ".";
                        $(a).val(t.split(i)[e])
                    })
            }
        }), a.find(".extra-input-sub-col-sm-8").removeClass("hidden"), a.find("input:not(.license-duration)").closest(".extra-input").addClass("hidden")), $.post({
            url: "cart?ajax=1",
            data: e.closest("form").serialize()
        })
    }), $doc.on("click", ".js-show-hide-element", function(e) {
        var t = $(this).attr("href");
        e.preventDefault(), $(t).length > 0 && $(t).slideToggle("fast")
    }), $doc.on("click", ".js-show-nav", function() {
        $(this);
        var e = $("#primary-nav").addClass("animated");
        e.toggleClass("fadeOutUpBig fadeInDownBig open"), e.hasClass("open") ? e.fadeIn("fast") : e.fadeOut("fast"), $("body").toggleClass("no-scroll")
    }), $doc.on("click", ".js-toggle-categorys-sub-nav", function(e) {
        var t = $(this),
            a = (t.closest("li"), t.data("toggle"));
        window.matchMedia("(min-width: 992px)").matches && (e.preventDefault(), e.stopPropagation(), t.hasClass("open") ? $(a).slideUp("fast") : ($(".js-toggle-categorys-sub-nav.open").each(function(e, t) {
            var a = $(t).removeClass("open");
            $(a.data("toggle")).hide()
        }), $(a).slideToggle("fast")), t.toggleClass("open"))
    }), $doc.on("click", ".js-toggle-sub-categorys-sub-nav", function(e) {
        var t = $(this).toggleClass("open"),
            a = t.closest("li"),
            i = t.data("toggle");
        e.preventDefault(), window.matchMedia("(min-width: 992px)").matches ? $(i).slideToggle("fast") : ($(i).toggle(), a.find(".fa:visible").eq(0).length && a.find(".fa:visible").eq(0).toggleClass("fa-caret-right fa-caret-down"))
    }), $doc.on("click touchstart", ".js-menu-btn", function() {
        var e = $(this),
            t = e.closest(".js-cached-menu").find("> ul");
        e.closest(".js-cached-menu").hasClass("open") ? (t.removeClass("animated fadeInDownBig").addClass("animated fadeOutUpBig"), $("body").removeClass("no-scroll"), setTimeout(function() {
            e.closest(".js-cached-menu").removeClass("open")
        }, 800)) : (e.closest(".js-cached-menu").addClass("open"), t.removeClass("animated fadeOutUpBig").addClass("animated fadeInDownBig"), $("body").addClass("no-scroll"))
    }), $doc.on("change", ".js-extra-input-hunter-number", function() {
        var e = $(this),
            t = e.closest("form");
        0 === t.find("#ui-error").length ? t.prepend('<div id="ui-error"></div>') : t.find("#ui-error").html(""), e.val() && !1 === eraluvat.app.functions.checkHunterNumber(e.val()) ? (e.addClass("error-field"), t.find("#ui-error").append('<div class="ui_error">' + e.closest(".extra-input").find("label").text() + " " + Store.translations.fieldHasError + "</div>"), eraluvat.app.functions.showErrors()) : e.removeClass("error-field")
    }), $doc.on("change", ".js-safari-start-time", function() {
        var e = $(this).find("option:selected").index();
        $(".js-safari-end-time option").removeAttr("disabled").each(function(t, a) {
            var i = $(a);
            i.attr("disabled", e >= t), e === t - 1 && i.attr("selected", "selected")
        }), eraluvat.app.functions.updateSafariTimes()
    }), $doc.on("change", ".js-safari-start-minutes, .js-safari-end-time, .js-safari-end-minutes", function() {
        eraluvat.app.functions.updateSafariTimes()
    }), $doc.on("click", ".js-swipe-next:not(.disabled)", function() {
        var e = $(this).parent().find(".swiper-container");
        e.length && e[0].swiper.slideNext()
    }), $doc.on("click", ".js-swipe-prev:not(.disabled)", function() {
        var e = $(this).parent().find(".swiper-container");
        e.length && e[0].swiper.slidePrev()
    }), $doc.on("change", ".js-product-ticket", function() {
        var e = $(this),
            t = e.closest(".product-form"),
            a = e.find("option:selected");
        a.val() && a.data("min-length") ? (t.find(".js-insert-calendar").length && eraluvat.app.functions.productCalendarTemplateInit(a.data("product-id")), t.find(".js-add2cart").removeClass("disabled").removeAttr("disabled")) : (t.find(".js-slot.ui-selected").removeClass("ui-selected"), t.find(".js-add2cart").addClass("disabled").attr("disabled", "disabled"))
    }), $doc.on("click", eraluvat.app.settings.productSubmitSelector, function() {
        var e = $(this),
            t = e.closest(".product-list-item"),
            a = (t.find("input[required], select[required]"), ""),
            i = "";
        (a = eraluvat.app.functions.beforeAddtoCart(t)) ? eraluvat.app.functions.showDialog(a): (i = t.find("input, select").serialize(), t.find(".js-slot.ui-selected, .js-hour-slot.ui-selected").length && (i += "&ticket=" + t.find(".js-slot.ui-selected, .js-hour-slot.ui-selected").first().data("id"), i += "&ticket_options[seq_count]=" + t.find(".js-product-ticket option:selected").data("min-length")), eraluvat.add2cart(i, e).done(function(e) {
            e instanceof Array && e.length > 0 && eraluvat.app.functions.showDialog(e.join("<br />"))
        }))
    })
}), $(window).on("resize", function() {
    var e = $("select");
    if ($(window).width() > 768 && $("#menu-categories").removeAttr("style"), e.length > 0 && e.each(function() {
            !1 === $(this).hasClass("select2-usenative") && eraluvat.app.functions.select2Handler($(this))
        }), window.matchMedia("(min-width: 992px)") && $(".js-cached-menu").find(".animated").removeClass("animated"), $("#typeselectionModal").length > 0) {
        var t = $("#typeselectionModal").height(),
            a = $(window).height();
        t + 20 > a ? ($("#typeselectionModal").css("max-height", a + "px"), $("#typeselectionModal").css("overflow-y", "scroll")) : ($("#typeselectionModal").css("max-height", "none"), $("#typeselectionModal").css("overflow-y", "hidden"))
    }
}), $(function() {
    "use strict";
    Percolator.eraluvat = {
        daySlotsJSON: {},
        productListUserSelections: {
            productsSelectedVariations: null,
            datepickerSelectedDate: {}
        },
        productsSelectedDates: [],
        localizedDayNames: [Store.calendarTranslations.days[0], Store.calendarTranslations.days[1], Store.calendarTranslations.days[2], Store.calendarTranslations.days[3], Store.calendarTranslations.days[4], Store.calendarTranslations.days[5], Store.calendarTranslations.days[6]],
        today: new Date,
        categoryLevel: void 0 !== eraluvat.STORE.CATEGORY_LEVEL ? eraluvat.STORE.CATEGORY_LEVEL : 0,
        productLoop: 0,
        categoryAndProductsJSON: {},
        renderCategoryproductsTemplate: !1,
        templateFunctions: {
            collect2CustomJSON: function(e, t) {
                var a = 0,
                    i = Percolator.data.categories[e[a]],
                    n = Percolator.eraluvat.categoryLevel + 1,
                    r = !1;
                for (Percolator.eraluvat.productLoop = Percolator.eraluvat.productLoop + 1, n > i.level && (n = i.level); !1 === r;) void 0 === i ? (a += 1, i = Percolator.data.categories[e[a]]) : n > i.level ? i = Percolator.data.categories[i.parent] : (r = !0, void 0 === Percolator.eraluvat.categoryAndProductsJSON[i.id] && (Percolator.eraluvat.categoryAndProductsJSON[i.id] = {
                    id: i.id,
                    name: i.name,
                    url: i.url,
                    products: []
                }), Percolator.eraluvat.categoryAndProductsJSON[i.id].products.push(t), _.size(Percolator.data.products) === Percolator.eraluvat.productLoop && (Percolator.eraluvat.renderCategoryproductsTemplate = !0))
            },
            templateDateString: function(e) {
                var t = (e.getDate() < 10 ? "0" : "") + e.getDate(),
                    a = (e.getMonth() + 1 < 10 ? "0" : "") + (e.getMonth() + 1),
                    i = e.getFullYear();
                return t.toString() + "." + a.toString() + "." + i.toString()
            },
            stockClassString: function(e, t, a, i) {
                var n = "";
                return void 0 !== e && void 0 !== t ? (void 0 !== i && (n = i), !0 === a ? parseInt(e[t]) > 0 ? n += "manyleft" : n += "noneleft" : parseInt(e[t], 10) > 0 && parseInt(e[t], 10) < 5 ? n += "someleft" : parseInt(e[t], 10) >= 5 ? n += "manyleft" : parseInt(0 === e[t]) ? n += "noneleft" : n += "unavailable") : eraluvat.app.functions.consoleLogHandler("Missing mandatory params *obj* and or *propery*"), n
            }
        }
    };
    var e = {
        debug: !1,
        productListSelector: "#compact-product-list",
        categoryListSelector: "#compact-category-list",
        useDecimals: !0,
        productsAtOnce: 24,
        bufferPx: 600,
        pixelsFromNavToBottom: void 0,
        ajaxLoaderSelector: "#ajax-loader",
        currencySign: "€",
        moreTriggerSelector: "#compact-product-list article:last-child",
        reachEndSelector: "#reach-end",
        create$elForProducts: !1,
        totalAmountSelector: "#percolator-total-amount",
        tagMode: "any",
        tagsSelector: "#percolator-tags",
        tagsType: "checkbox",
        sortingMode: "rankAsc",
        sortingSelector: "#percolator-sorting",
        customSortingSelector: !1,
        sizesSelector: "#percolator-sizes",
        sizesType: "checkbox",
        colorsSelector: "#percolator-colors",
        colorsType: "checkbox",
        categoriesSelector: "#percolator-categories",
        categoriesType: "checkbox",
        propertiesSelector: "#percolator-properties",
        propertiesType: "checkbox",
        useDefaultPriceSlider: !0,
        priceSteps: 20,
        skipCategoryFiltering: !1,
        useChangeableColumns: !0,
        columnsSelector: "#viewMode",
        columnsSelectorType: "link",
        productDefaultImage: "medium",
        columnsTemplates: {
            qty1: "#percolator-product-template",
            qty2: "#percolator-product-template",
            qty3: "#percolator-product-template",
            qty4: "#percolator-product-template"
        },
        useCategoryTemplate: !1,
        variationSizesOrderByRanking: !0,
        endOfInit: void 0,
        noProductsFunction: void 0,
        createPriceRange: function(e) {},
        callBackAfterRenderProducts: function(t) {
            var a = $(e.productListSelector).find("select"),
                i = $(e.productListSelector).find(".js-init-product-ui"),
                n = $("#percolator-search-results"),
                r = window.location.search ? decodeURIComponent(window.location.search.replace("?q=", "").replace(/\+/g, "%20")) : "";
            n.length && !1 === _.isEmpty(Percolator.data.products) && r && ($("#q-field").val(r), n.html('<h2 class="mb-30 mt-30">' + Store.translations.search + ": " + r + " (" + _.size(Percolator.data.products) + " " + Store.translations.search_hits + ")</h2>")), $(e.productListSelector + " .js-insert-calendar").length && (eraluvat.app.functions.productCalendarDatepicker(e.productListSelector + " .datepicker"), eraluvat.app.functions.productCalendarTemplateInit()), a.each(function() {
                var t = $(this),
                    a = t.closest(".product-list-item").data("product"),
                    i = t.data("date-slots");
                void 0 !== i && e.initTicketSelect(t, {
                    productID: a,
                    searchParam: i
                }), eraluvat.app.functions.select2Handler($(this))
            }), i.each(function() {
                $(this).find(".js-slot.ui-selected").eq(0).trigger("click")
            })
        },
        callBackAfterFiltersHaveBeenCreated: function() {},
        callBackBeforeCreateFilter: function(e) {
            "slider" == e.property.filter_class && "numeric" === e.property.type && (e.propertiesType = "rangeSlider", e.templateSelector = "#percolator-slider-template", e.skipOptionCreation = !0)
        },
        callBackBeforeRegisterFilter: function(e) {
            "slider" == e.property.filter_class && "numeric" === e.property.type && (e.propertiesType = "rangeSlider")
        },
        callBackAfterFiltersHaveBeenUpdated: function() {
            if (Percolator.settings.useChangeableColumns && "qty1" != Percolator.settings.columnsQty) {
                for (var e = $(Percolator.settings.productListSelector).find("article").filter(function(e, t) {
                        return !$(t).parent().is(".product-list-wrapper")
                    }), t = 0, a = e.length; t < a; t += 3) e.slice(t, t + 3).wrapAll('<div class="product-list-wrapper"></div>');
                var i = $("#compact-product-list").find("div.product-list-wrapper"),
                    n = i.length;
                i.each(function(e) {
                    var t = $(this);
                    if (t.setAllToMaxHeight(), e + 1 === n)
                        for (var a = (3 - t.find("article").length) % 3, i = 0; i < a; i++) 0 === i ? t.append('<article class="product-list-item"></article>') : t.append('<article class="product-list-item empty-cell"></article>')
                })
            }
        },
        initTicketSelect: function(e, t) {
            if (e && t.productID && t.searchParam) {
                var a = e.closest(".product-list-item").data("tuvu") || !1,
                    i = _.where(Percolator.eraluvat.daySlotsJSON[t.productID], {
                        valid_from_date: t.searchParam
                    });
                i.length && (e.children().remove(), e.append($('<option value="">' + Store.translations.choose + "</option>")), _.each(i, function(t, i) {
                    var n = t.valid_from_datetime.split("T")[1].split(":");
                    e.append($('<option value="' + t.id + '" data-stock="' + t.free + '" data-tuvu="' + a + '">' + n[0] + ":" + n[1] + "</option>"))
                }))
            }
        },
        checkBookingStartDayPercolator: function(e, t, a) {
            var i = t.split("-"),
                n = i[2],
                r = i[1],
                s = i[0] + "-" + r + "-" + n;
            new Date(moment(s).format()).getDay() !== e && eraluvat.app.functions.showDialog(Store.translations.booking_must_start_on + " " + Store.translations.weekdays[e] + ".")
        }
    };
    $(e.productListSelector).length && eraluvat.STORE.CURRENT_AJAX_URL && $.ajax({
        type: "GET",
        url: eraluvat.STORE.CURRENT_AJAX_URL,
        dataType: "text",
        success: function(t) {
            Percolator.init(JSON.parse(t), e)
        },
        error: function(e, t, a) {
            console.log("Ajax error: " + e.status, a)
        }
    })
});