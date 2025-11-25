    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }
	var serverString='';

    var XmlHttpRequest = new XMLHttpRequest();
    XmlHttpRequest.overrideMimeType("application/json");
    XmlHttpRequest.open('GET', '/arcade_config.json', false);
    XmlHttpRequest.onreadystatechange = function ()
    {
        if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200")
        {
            var serverConfig = JSON.parse(XmlHttpRequest.responseText);
            serverString=serverConfig.prefix_ws+serverConfig.host_ws+':'+serverConfig.port;
          
        }
    }
    XmlHttpRequest.send(null);


var __reflect = this && this.__reflect || function(t, e, i) {
        t.__class__ = e, i ? i.push(e) : i = [e], t.__types__ = t.__types__ ? i.concat(t.__types__) : i
    },
    __extends = this && this.__extends || function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        i.prototype = e.prototype, t.prototype = new i
    };
if ("undefined" == typeof global) var global = window;
if ("undefined" == typeof __global) var __global = global;
var __define = this && this.__define || function(t, e, i, r) {
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !0,
            get: i,
            set: r
        })
    },
    egret;
! function(t) {
    t.$hashCount = 1;
    var e = function() {
        function e() {
            this.$hashCode = t.$hashCount++
        }
        return Object.defineProperty(e.prototype, "hashCode", {
            get: function() {
                return this.$hashCode
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.HashObject = e, __reflect(e.prototype, "egret.HashObject", ["egret.IHashObject"])
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = [],
        i = function(i) {
            function r(t) {
                void 0 === t && (t = null);
                var e = i.call(this) || this;
                return e.$EventDispatcher = {
                    0: t ? t : e,
                    1: {},
                    2: {},
                    3: 0
                }, e
            }
            return __extends(r, i), r.prototype.$getEventMap = function(t) {
                var e = this.$EventDispatcher,
                    i = t ? e[2] : e[1];
                return i
            }, r.prototype.addEventListener = function(t, e, i, r, n) {
                this.$addListener(t, e, i, r, n)
            }, r.prototype.once = function(t, e, i, r, n) {
                this.$addListener(t, e, i, r, n, !0)
            }, r.prototype.$addListener = function(t, e, i, r, n, a) {
                var o = this.$EventDispatcher,
                    s = r ? o[2] : o[1],
                    h = s[t];
                h ? 0 !== o[3] && (s[t] = h = h.concat()) : h = s[t] = [], this.$insertEventBin(h, t, e, i, r, n, a)
            }, r.prototype.$insertEventBin = function(t, e, i, r, n, a, o) {
                a = 0 | +a;
                for (var s = -1, h = t.length, c = 0; h > c; c++) {
                    var l = t[c];
                    if (l.listener == i && l.thisObject == r && l.target == this) return !1; - 1 == s && l.priority < a && (s = c)
                }
                var u = {
                    type: e,
                    listener: i,
                    thisObject: r,
                    priority: a,
                    target: this,
                    useCapture: n,
                    dispatchOnce: !!o
                };
                return -1 !== s ? t.splice(s, 0, u) : t.push(u), !0
            }, r.prototype.removeEventListener = function(t, e, i, r) {
                var n = this.$EventDispatcher,
                    a = r ? n[2] : n[1],
                    o = a[t];
                o && (0 !== n[3] && (a[t] = o = o.concat()), this.$removeEventBin(o, e, i), 0 == o.length && (a[t] = null))
            }, r.prototype.$removeEventBin = function(t, e, i) {
                for (var r = t.length, n = 0; r > n; n++) {
                    var a = t[n];
                    if (a.listener == e && a.thisObject == i && a.target == this) return t.splice(n, 1), !0
                }
                return !1
            }, r.prototype.hasEventListener = function(t) {
                var e = this.$EventDispatcher;
                return !(!e[1][t] && !e[2][t])
            }, r.prototype.willTrigger = function(t) {
                return this.hasEventListener(t)
            }, r.prototype.dispatchEvent = function(t) {
                return t.$currentTarget = this.$EventDispatcher[0], t.$setTarget(t.$currentTarget), this.$notifyListener(t, !1)
            }, r.prototype.$notifyListener = function(t, i) {
                var r = this.$EventDispatcher,
                    n = i ? r[2] : r[1],
                    a = n[t.$type];
                if (!a) return !0;
                var o = a.length;
                if (0 == o) return !0;
                var s = e;
                r[3]++;
                for (var h = 0; o > h; h++) {
                    var c = a[h];
                    if (c.listener.call(c.thisObject, t), c.dispatchOnce && s.push(c), t.$isPropagationImmediateStopped) break
                }
                for (r[3]--; s.length;) {
                    var c = s.pop();
                    c.target.removeEventListener(c.type, c.listener, c.thisObject, c.useCapture)
                }
                return !t.$isDefaultPrevented
            }, r.prototype.dispatchEventWith = function(e, i, r, n) {
                if (i || this.hasEventListener(e)) {
                    var a = t.Event.create(t.Event, e, i, n);
                    a.data = r;
                    var o = this.dispatchEvent(a);
                    return t.Event.release(a), o
                }
                return !0
            }, r
        }(t.HashObject);
    t.EventDispatcher = i, __reflect(i.prototype, "egret.EventDispatcher", ["egret.IEventDispatcher"])
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.type = null, i.$id = null, i.paddingTop = 0, i.paddingBottom = 0, i.paddingLeft = 0, i.paddingRight = 0, i.$uniforms = {}, t.nativeRender && egret_native.NativeDisplayObject.createFilter(i), i
        }
        return __extends(i, e), i.prototype.$toJson = function() {
            return ""
        }, i.prototype.updatePadding = function() {}, i.prototype.onPropertyChange = function() {
            var e = this;
            e.updatePadding(), t.nativeRender && (egret_native.NativeDisplayObject.setFilterPadding(e.$id, e.paddingTop, e.paddingBottom, e.paddingLeft, e.paddingRight), egret_native.NativeDisplayObject.setDataToFilter(e))
        }, i
    }(t.HashObject);
    t.Filter = e, __reflect(e.prototype, "egret.Filter")
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t) {
        return t %= 360, t > 180 ? t -= 360 : -180 > t && (t += 360), t
    }
    var i = function(i) {
        function r() {
            var e = i.call(this) || this;
            return e.$children = null, e.$name = "", e.$parent = null, e.$stage = null, e.$nestLevel = 0, e.$useTranslate = !1, e.$matrix = new t.Matrix, e.$matrixDirty = !1, e.$x = 0, e.$y = 0, e.$scaleX = 1, e.$scaleY = 1, e.$rotation = 0, e.$skewX = 0, e.$skewXdeg = 0, e.$skewY = 0, e.$skewYdeg = 0, e.$explicitWidth = 0 / 0, e.$explicitHeight = 0 / 0, e.$anchorOffsetX = 0, e.$anchorOffsetY = 0, e.$visible = !0, e.$displayList = null, e.$cacheAsBitmap = !1, e.$cacheDirty = !1, e.$alpha = 1, e.$touchEnabled = r.defaultTouchEnabled, e.$scrollRect = null, e.$blendMode = 0, e.$maskedObject = null, e.$mask = null, e.$maskRect = null, e.$parentDisplayList = null, e.$renderNode = null, e.$renderDirty = !1, e.$renderMode = null, t.nativeRender && e.createNativeDisplayObject(), e
        }
        return __extends(r, i), r.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(0)
        }, Object.defineProperty(r.prototype, "name", {
            get: function() {
                return this.$name
            },
            set: function(t) {
                this.$name = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "parent", {
            get: function() {
                return this.$parent
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setParent = function(t) {
            this.$parent = t
        }, r.prototype.$onAddToStage = function(e, i) {
            var r = this;
            r.$stage = e, r.$nestLevel = i, r.$hasAddToStage = !0, t.Sprite.$EVENT_ADD_TO_STAGE_LIST.push(r)
        }, r.prototype.$onRemoveFromStage = function() {
            var e = this;
            e.$nestLevel = 0, t.Sprite.$EVENT_REMOVE_FROM_STAGE_LIST.push(e)
        }, r.prototype.$updateUseTransform = function() {
            var t = this;
            1 == t.$scaleX && 1 == t.$scaleY && 0 == t.$skewX && 0 == t.$skewY ? t.$useTranslate = !1 : t.$useTranslate = !0
        }, Object.defineProperty(r.prototype, "stage", {
            get: function() {
                return this.$stage
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "matrix", {
            get: function() {
                return this.$getMatrix().clone()
            },
            set: function(t) {
                this.$setMatrix(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getMatrix = function() {
            var t = this;
            return t.$matrixDirty && (t.$matrixDirty = !1, t.$matrix.$updateScaleAndRotation(t.$scaleX, t.$scaleY, t.$skewX, t.$skewY)), t.$matrix.tx = t.$x, t.$matrix.ty = t.$y, t.$matrix
        }, r.prototype.$setMatrix = function(i, r) {
            void 0 === r && (r = !0);
            var n = this,
                a = n.$matrix;
            a.a = i.a, a.b = i.b, a.c = i.c, a.d = i.d, n.$x = i.tx, n.$y = i.ty, n.$matrixDirty = !1, 1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d ? n.$useTranslate = !1 : n.$useTranslate = !0, r && (n.$scaleX = a.$getScaleX(), n.$scaleY = a.$getScaleY(), n.$skewX = i.$getSkewX(), n.$skewY = i.$getSkewY(), n.$skewXdeg = e(180 * n.$skewX / Math.PI), n.$skewYdeg = e(180 * n.$skewY / Math.PI), n.$rotation = e(180 * n.$skewY / Math.PI)), t.nativeRender && n.$nativeDisplayObject.setMatrix(i.a, i.b, i.c, i.d, i.tx, i.ty)
        }, r.prototype.$getConcatenatedMatrix = function() {
            var e = this,
                i = e.$concatenatedMatrix;
            i || (i = e.$concatenatedMatrix = new t.Matrix), e.$parent ? e.$parent.$getConcatenatedMatrix().$preMultiplyInto(e.$getMatrix(), i) : i.copyFrom(e.$getMatrix());
            var r = e.$anchorOffsetX,
                n = e.$anchorOffsetY,
                a = e.$scrollRect;
            return a ? i.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -a.x - r, -a.y - n), i) : (0 != r || 0 != n) && i.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -r, -n), i), e.$concatenatedMatrix
        }, r.prototype.$getInvertedConcatenatedMatrix = function() {
            var e = this;
            return e.$invertedConcatenatedMatrix || (e.$invertedConcatenatedMatrix = new t.Matrix), e.$getConcatenatedMatrix().$invertInto(e.$invertedConcatenatedMatrix), e.$invertedConcatenatedMatrix
        }, Object.defineProperty(r.prototype, "x", {
            get: function() {
                return this.$getX()
            },
            set: function(t) {
                this.$setX(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getX = function() {
            return this.$x
        }, r.prototype.$setX = function(e) {
            var i = this;
            if (i.$x == e) return !1;
            if (i.$x = e, t.nativeRender) i.$nativeDisplayObject.setX(e);
            else {
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
            return !0
        }, Object.defineProperty(r.prototype, "y", {
            get: function() {
                return this.$getY()
            },
            set: function(t) {
                this.$setY(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getY = function() {
            return this.$y
        }, r.prototype.$setY = function(e) {
            var i = this;
            if (i.$y == e) return !1;
            if (i.$y = e, t.nativeRender) i.$nativeDisplayObject.setY(e);
            else {
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
            return !0
        }, Object.defineProperty(r.prototype, "scaleX", {
            get: function() {
                return this.$getScaleX()
            },
            set: function(t) {
                this.$setScaleX(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getScaleX = function() {
            return this.$scaleX
        }, r.prototype.$setScaleX = function(e) {
            var i = this;
            if (i.$scaleX != e)
                if (i.$scaleX = e, i.$matrixDirty = !0, i.$updateUseTransform(), t.nativeRender) i.$nativeDisplayObject.setScaleX(e);
                else {
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "scaleY", {
            get: function() {
                return this.$getScaleY()
            },
            set: function(t) {
                this.$setScaleY(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getScaleY = function() {
            return this.$scaleY
        }, r.prototype.$setScaleY = function(e) {
            var i = this;
            if (i.$scaleY != e)
                if (i.$scaleY = e, i.$matrixDirty = !0, i.$updateUseTransform(), t.nativeRender) i.$nativeDisplayObject.setScaleY(e);
                else {
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "rotation", {
            get: function() {
                return this.$getRotation()
            },
            set: function(t) {
                this.$setRotation(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getRotation = function() {
            return this.$rotation
        }, r.prototype.$setRotation = function(i) {
            i = e(i);
            var r = this;
            if (i != r.$rotation) {
                var n = i - r.$rotation,
                    a = n / 180 * Math.PI;
                if (r.$skewX += a, r.$skewY += a, r.$rotation = i, r.$matrixDirty = !0, r.$updateUseTransform(), t.nativeRender) r.$nativeDisplayObject.setRotation(i);
                else {
                    var o = r.$parent;
                    o && !o.$cacheDirty && (o.$cacheDirty = !0, o.$cacheDirtyUp());
                    var s = r.$maskedObject;
                    s && !s.$cacheDirty && (s.$cacheDirty = !0, s.$cacheDirtyUp())
                }
            }
        }, Object.defineProperty(r.prototype, "skewX", {
            get: function() {
                return this.$skewXdeg
            },
            set: function(t) {
                this.$setSkewX(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setSkewX = function(i) {
            var r = this;
            if (i != r.$skewXdeg)
                if (r.$skewXdeg = i, i = e(i), i = i / 180 * Math.PI, r.$skewX = i, r.$matrixDirty = !0, r.$updateUseTransform(), t.nativeRender) r.$nativeDisplayObject.setSkewX(r.$skewXdeg);
                else {
                    var n = r.$parent;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
                    var a = r.$maskedObject;
                    a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "skewY", {
            get: function() {
                return this.$skewYdeg
            },
            set: function(t) {
                this.$setSkewY(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setSkewY = function(i) {
            var r = this;
            if (i != r.$skewYdeg)
                if (r.$skewYdeg = i, i = e(i), i = (i + r.$rotation) / 180 * Math.PI, r.$skewY = i, r.$matrixDirty = !0, r.$updateUseTransform(), t.nativeRender) r.$nativeDisplayObject.setSkewY(r.$skewYdeg);
                else {
                    var n = r.$parent;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
                    var a = r.$maskedObject;
                    a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "width", {
            get: function() {
                return this.$getWidth()
            },
            set: function(t) {
                this.$setWidth(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getWidth = function() {
            var t = this;
            return isNaN(t.$explicitWidth) ? t.$getOriginalBounds().width : t.$explicitWidth
        }, r.prototype.$setWidth = function(t) {
            t = isNaN(t) ? 0 / 0 : t, this.$explicitWidth != t && (this.$explicitWidth = t)
        }, Object.defineProperty(r.prototype, "height", {
            get: function() {
                return this.$getHeight()
            },
            set: function(t) {
                this.$setHeight(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getHeight = function() {
            var t = this;
            return isNaN(t.$explicitHeight) ? t.$getOriginalBounds().height : t.$explicitHeight
        }, r.prototype.$setHeight = function(t) {
            t = isNaN(t) ? 0 / 0 : t, this.$explicitHeight != t && (this.$explicitHeight = t)
        }, Object.defineProperty(r.prototype, "measuredWidth", {
            get: function() {
                return this.$getOriginalBounds().width
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "measuredHeight", {
            get: function() {
                return this.$getOriginalBounds().height
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "anchorOffsetX", {
            get: function() {
                return this.$anchorOffsetX
            },
            set: function(t) {
                this.$setAnchorOffsetX(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setAnchorOffsetX = function(e) {
            var i = this;
            if (i.$anchorOffsetX != e)
                if (i.$anchorOffsetX = e, t.nativeRender) i.$nativeDisplayObject.setAnchorOffsetX(e);
                else {
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "anchorOffsetY", {
            get: function() {
                return this.$anchorOffsetY
            },
            set: function(t) {
                this.$setAnchorOffsetY(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setAnchorOffsetY = function(e) {
            var i = this;
            if (i.$anchorOffsetY != e)
                if (i.$anchorOffsetY = e, t.nativeRender) i.$nativeDisplayObject.setAnchorOffsetY(e);
                else {
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "visible", {
            get: function() {
                return this.$visible
            },
            set: function(t) {
                this.$setVisible(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setVisible = function(e) {
            var i = this;
            if (i.$visible != e)
                if (i.$visible = e, t.nativeRender) i.$nativeDisplayObject.setVisible(e);
                else {
                    i.$updateRenderMode();
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "cacheAsBitmap", {
            get: function() {
                return this.$cacheAsBitmap
            },
            set: function(e) {
                var i = this;
                i.$cacheAsBitmap = e, t.nativeRender ? i.$nativeDisplayObject.setCacheAsBitmap(e) : i.$setHasDisplayList(e)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setHasDisplayList = function(e) {
            var i = this,
                r = !!i.$displayList;
            if (r != e)
                if (e) {
                    var n = t.sys.DisplayList.create(i);
                    n && (i.$displayList = n, i.$cacheDirty = !0)
                } else i.$displayList = null
        }, r.prototype.$cacheDirtyUp = function() {
            var t = this.$parent;
            t && !t.$cacheDirty && (t.$cacheDirty = !0, t.$cacheDirtyUp())
        }, Object.defineProperty(r.prototype, "alpha", {
            get: function() {
                return this.$alpha
            },
            set: function(t) {
                this.$setAlpha(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setAlpha = function(e) {
            var i = this;
            if (i.$alpha != e)
                if (i.$alpha = e, t.nativeRender) i.$nativeDisplayObject.setAlpha(e);
                else {
                    i.$updateRenderMode();
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
        }, Object.defineProperty(r.prototype, "touchEnabled", {
            get: function() {
                return this.$getTouchEnabled()
            },
            set: function(t) {
                this.$setTouchEnabled(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$getTouchEnabled = function() {
            return this.$touchEnabled
        }, r.prototype.$setTouchEnabled = function(t) {
            this.$touchEnabled = !!t
        }, Object.defineProperty(r.prototype, "scrollRect", {
            get: function() {
                return this.$scrollRect
            },
            set: function(t) {
                this.$setScrollRect(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setScrollRect = function(e) {
            var i = this;
            if (!e && !i.$scrollRect) return void i.$updateRenderMode();
            if (e ? (i.$scrollRect || (i.$scrollRect = new t.Rectangle), i.$scrollRect.copyFrom(e), t.nativeRender && i.$nativeDisplayObject.setScrollRect(e.x, e.y, e.width, e.height)) : (i.$scrollRect = null, t.nativeRender && i.$nativeDisplayObject.setScrollRect(0, 0, 0, 0)), !t.nativeRender) {
                i.$updateRenderMode();
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
        }, Object.defineProperty(r.prototype, "blendMode", {
            get: function() {
                return t.sys.numberToBlendMode(this.$blendMode)
            },
            set: function(e) {
                var i = this,
                    r = t.sys.blendModeToNumber(e);
                if (i.$blendMode != r)
                    if (i.$blendMode = r, t.nativeRender) i.$nativeDisplayObject.setBlendMode(r);
                    else {
                        i.$updateRenderMode();
                        var n = i.$parent;
                        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
                        var a = i.$maskedObject;
                        a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp())
                    }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "mask", {
            get: function() {
                var t = this;
                return t.$mask ? t.$mask : t.$maskRect
            },
            set: function(e) {
                var i = this;
                if (e !== i) {
                    if (e)
                        if (e instanceof r) {
                            if (e == i.$mask) return;
                            e.$maskedObject && (e.$maskedObject.mask = null), e.$maskedObject = i, i.$mask = e, t.nativeRender || e.$updateRenderMode(), i.$maskRect && (t.nativeRender && i.$nativeDisplayObject.setMaskRect(0, 0, 0, 0), i.$maskRect = null), t.nativeRender && i.$nativeDisplayObject.setMask(e.$nativeDisplayObject.id)
                        } else i.$maskRect || (i.$maskRect = new t.Rectangle), i.$maskRect.copyFrom(e), t.nativeRender && i.$nativeDisplayObject.setMaskRect(e.x, e.y, e.width, e.height), i.$mask && (i.$mask.$maskedObject = null, t.nativeRender || i.$mask.$updateRenderMode()), i.mask && (t.nativeRender && i.$nativeDisplayObject.setMask(-1), i.$mask = null);
                    else i.$mask && (i.$mask.$maskedObject = null, t.nativeRender || i.$mask.$updateRenderMode()), i.mask && (t.nativeRender && i.$nativeDisplayObject.setMask(-1), i.$mask = null), i.$maskRect && (t.nativeRender && i.$nativeDisplayObject.setMaskRect(0, 0, 0, 0), i.$maskRect = null);
                    t.nativeRender || i.$updateRenderMode()
                }
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$setMaskRect = function(e) {
            var i = this;
            (e || i.$maskRect) && (e ? (i.$maskRect || (i.$maskRect = new t.Rectangle), i.$maskRect.copyFrom(e)) : i.$maskRect = null)
        }, Object.defineProperty(r.prototype, "filters", {
            get: function() {
                return this.$filters
            },
            set: function(e) {
                var i = this,
                    r = i.$filters;
                if (r || e) {
                    if (e && e.length ? (e = e.concat(), i.$filters = e, t.nativeRender && i.$nativeDisplayObject.setFilters(e)) : (i.$filters = e, t.nativeRender && i.$nativeDisplayObject.setFilters(null)), !t.nativeRender) {
                        i.$updateRenderMode();
                        var n = i.$parent;
                        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
                        var a = i.$maskedObject;
                        a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp())
                    }
                } else if (i.$filters = e, t.nativeRender) i.$nativeDisplayObject.setFilters(null);
                else {
                    i.$updateRenderMode();
                    var n = i.$parent;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
                    var a = i.$maskedObject;
                    a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp())
                }
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.getTransformedBounds = function(t, e) {
            return t = t || this, this.$getTransformedBounds(t, e)
        }, r.prototype.getBounds = function(t, e) {
            void 0 === e && (e = !0);
            var i = this;
            return t = i.$getTransformedBounds(i, t), e && (0 != i.$anchorOffsetX && (t.x -= i.$anchorOffsetX), 0 != i.$anchorOffsetY && (t.y -= i.$anchorOffsetY)), t
        }, r.prototype.$getTransformedBounds = function(e, i) {
            var r = this,
                n = r.$getOriginalBounds();
            if (i || (i = new t.Rectangle), i.copyFrom(n), e == r) return i;
            var a;
            if (e) {
                a = t.$TempMatrix;
                var o = e.$getInvertedConcatenatedMatrix();
                o.$preMultiplyInto(r.$getConcatenatedMatrix(), a)
            } else a = r.$getConcatenatedMatrix();
            return a.$transformBounds(i), i
        }, r.prototype.globalToLocal = function(e, i, r) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), t.nativeRender) {
                egret_native.updateNativeRender();
                var n = egret_native.nrGlobalToLocal(this.$nativeDisplayObject.id, e, i),
                    a = n.split(","),
                    o = parseFloat(a[0]),
                    s = parseFloat(a[1]);
                return r ? r.setTo(o, s) : r = new t.Point(o, s), r
            }
            var h = this.$getInvertedConcatenatedMatrix();
            return h.transformPoint(e, i, r)
        }, r.prototype.localToGlobal = function(e, i, r) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), t.nativeRender) {
                egret_native.updateNativeRender();
                var n = egret_native.nrLocalToGlobal(this.$nativeDisplayObject.id, e, i),
                    a = n.split(","),
                    o = parseFloat(a[0]),
                    s = parseFloat(a[1]);
                return r ? r.setTo(o, s) : r = new t.Point(o, s), r
            }
            var h = this.$getConcatenatedMatrix();
            return h.transformPoint(e, i, r)
        }, r.prototype.$getOriginalBounds = function() {
            var t = this,
                e = t.$getContentBounds();
            t.$measureChildBounds(e);
            var i = t.$measureFiltersOffset(!1);
            return i && (e.x += i.minX, e.y += i.minY, e.width += -i.minX + i.maxX, e.height += -i.minY + i.maxY), e
        }, r.prototype.$measureChildBounds = function(t) {}, r.prototype.$getContentBounds = function() {
            var e = t.$TempRectangle;
            return e.setEmpty(), this.$measureContentBounds(e), e
        }, r.prototype.$measureContentBounds = function(t) {}, r.prototype.$getRenderNode = function() {
            var t = this,
                e = t.$renderNode;
            return e ? (t.$renderDirty && (e.cleanBeforeRender(), t.$updateRenderNode(), t.$renderDirty = !1, e = t.$renderNode), e) : null
        }, r.prototype.$updateRenderMode = function() {
            var t = this;
            !t.$visible || t.$alpha <= 0 || t.$maskedObject ? t.$renderMode = 1 : t.filters && t.filters.length > 0 ? t.$renderMode = 2 : 0 !== t.$blendMode || t.$mask && t.$mask.$stage ? t.$renderMode = 3 : t.$scrollRect || t.$maskRect ? t.$renderMode = 4 : t.$renderMode = null
        }, r.prototype.$measureFiltersOffset = function(e) {
            for (var i = this, r = 0, n = 0, a = 0, o = 0; i;) {
                var s = i.$filters;
                if (s && s.length)
                    for (var h = s.length, c = 0; h > c; c++) {
                        var l = s[c];
                        if ("blur" == l.type) {
                            var u = l.blurX,
                                p = l.blurY;
                            r -= u, n -= p, a += u, o += p
                        } else if ("glow" == l.type) {
                            var u = l.blurX,
                                p = l.blurY;
                            r -= u, n -= p, a += u, o += p;
                            var d = l.distance || 0,
                                f = l.angle || 0,
                                g = 0,
                                $ = 0;
                            0 != d && (g = d * t.NumberUtils.cos(f), g = g > 0 ? Math.ceil(g) : Math.floor(g), $ = d * t.NumberUtils.sin(f), $ = $ > 0 ? Math.ceil($) : Math.floor($), r += g, a += g, n += $, o += $)
                        } else if ("custom" == l.type) {
                            var y = l.padding;
                            r -= y, n -= y, a += y, o += y
                        }
                    }
                i = e ? i.$parent : null
            }
            return r = Math.min(r, 0), n = Math.min(n, 0), a = Math.max(a, 0), o = Math.max(o, 0), {
                minX: r,
                minY: n,
                maxX: a,
                maxY: o
            }
        }, r.prototype.$getConcatenatedMatrixAt = function(e, i) {
            var r = e.$getInvertedConcatenatedMatrix();
            if (0 === r.a || 0 === r.d) {
                var n = this,
                    a = e.$nestLevel;
                for (i.identity(); n.$nestLevel > a;) {
                    var o = n.$scrollRect;
                    o && i.concat(t.$TempMatrix.setTo(1, 0, 0, 1, -o.x, -o.y)), i.concat(n.$getMatrix()), n = n.$parent
                }
            } else r.$preMultiplyInto(i, i)
        }, r.prototype.$updateRenderNode = function() {}, r.prototype.$hitTest = function(e, i) {
            var r = this;
            if (!t.nativeRender && !r.$renderNode || !r.$visible || 0 == r.$scaleX || 0 == r.$scaleY) return null;
            var n = r.$getInvertedConcatenatedMatrix();
            if (0 == n.a && 0 == n.b && 0 == n.c && 0 == n.d) return null;
            var a = r.$getContentBounds(),
                o = n.a * e + n.c * i + n.tx,
                s = n.b * e + n.d * i + n.ty;
            if (a.contains(o, s)) {
                if (!r.$children) {
                    var h = r.$scrollRect ? r.$scrollRect : r.$maskRect;
                    if (h && !h.contains(o, s)) return null;
                    if (r.$mask && !r.$mask.$hitTest(e, i)) return null
                }
                return r
            }
            return null
        }, r.prototype.hitTestPoint = function(e, i, r) {
            var n = this;
            if (r) {
                var a = n.$getInvertedConcatenatedMatrix(),
                    o = a.a * e + a.c * i + a.tx,
                    s = a.b * e + a.d * i + a.ty,
                    h = void 0;
                if (t.nativeRender) {
                    var c = t.sys.customHitTestBuffer;
                    c.resize(3, 3), egret_native.forHitTest = !0, egret_native.activateBuffer(c), egret_native.updateNativeRender(), egret_native.nrRenderDisplayObject2(n.$nativeDisplayObject.id, 1 - o, 1 - s, !0);
                    try {
                        h = new Uint8Array(4), egret_native.nrGetPixels(1, 1, 1, 1, h)
                    } catch (l) {
                        throw new Error(t.sys.tr(1039))
                    }
                    return egret_native.activateBuffer(null), egret_native.forHitTest = !1, 0 === h[3] ? !1 : !0
                }
                var u = n.$displayList;
                if (u) {
                    var c = u.renderBuffer;
                    try {
                        h = c.getPixels(o - u.offsetX, s - u.offsetY)
                    } catch (l) {
                        throw new Error(t.sys.tr(1039))
                    }
                } else {
                    var c = t.sys.customHitTestBuffer;
                    c.resize(3, 3);
                    var p = t.Matrix.create();
                    p.identity(), p.translate(1 - o, 1 - s), t.sys.systemRenderer.render(this, c, p, !0), t.Matrix.release(p);
                    try {
                        h = c.getPixels(1, 1)
                    } catch (l) {
                        throw new Error(t.sys.tr(1039))
                    }
                }
                return 0 === h[3] ? !1 : !0
            }
            if (0 == n.$scaleX || 0 == n.$scaleY) return !1;
            var a = n.$getInvertedConcatenatedMatrix(),
                d = n.getBounds(null, !1),
                o = a.a * e + a.c * i + a.tx,
                s = a.b * e + a.d * i + a.ty;
            if (d.contains(o, s)) {
                var f = n.$scrollRect ? n.$scrollRect : n.$maskRect;
                return f && !f.contains(o, s) ? !1 : !0
            }
            return !1
        }, r.prototype.$addListener = function(e, n, a, o, s, h) {
            i.prototype.$addListener.call(this, e, n, a, o, s, h);
            var c = e == t.Event.ENTER_FRAME;
            if (c || e == t.Event.RENDER) {
                var l = c ? r.$enterFrameCallBackList : r.$renderCallBackList; - 1 == l.indexOf(this) && l.push(this)
            }
        }, r.prototype.removeEventListener = function(e, n, a, o) {
            i.prototype.removeEventListener.call(this, e, n, a, o);
            var s = e == t.Event.ENTER_FRAME;
            if ((s || e == t.Event.RENDER) && !this.hasEventListener(e)) {
                var h = s ? r.$enterFrameCallBackList : r.$renderCallBackList,
                    c = h.indexOf(this); - 1 !== c && h.splice(c, 1)
            }
        }, r.prototype.dispatchEvent = function(t) {
            if (!t.$bubbles) return i.prototype.dispatchEvent.call(this, t);
            var e = this.$getPropagationList(this),
                r = .5 * e.length;
            return t.$setTarget(this), this.$dispatchPropagationEvent(t, e, r), !t.$isDefaultPrevented
        }, r.prototype.$getPropagationList = function(t) {
            for (var e = []; t;) e.push(t), t = t.$parent;
            var i = e.concat();
            return i.reverse(), e = i.concat(e)
        }, r.prototype.$dispatchPropagationEvent = function(t, e, i) {
            for (var r = e.length, n = i - 1, a = 0; r > a; a++) {
                var o = e[a];
                if (t.$currentTarget = o, n > a ? t.$eventPhase = 1 : a == i || a == n ? t.$eventPhase = 2 : t.$eventPhase = 3, o.$notifyListener(t, i > a), t.$isPropagationStopped || t.$isPropagationImmediateStopped) return
            }
        }, r.prototype.willTrigger = function(t) {
            for (var e = this; e;) {
                if (e.hasEventListener(t)) return !0;
                e = e.$parent
            }
            return !1
        }, r.defaultTouchEnabled = !1, r.$enterFrameCallBackList = [], r.$renderCallBackList = [], r
    }(t.EventDispatcher);
    t.DisplayObject = i, __reflect(i.prototype, "egret.DisplayObject")
}(egret || (egret = {}));
var egret;
! function(t) {
    t.$TextureScaleFactor = 1;
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.disposeBitmapData = !0, t.$bitmapX = 0, t.$bitmapY = 0, t.$bitmapWidth = 0, t.$bitmapHeight = 0, t.$offsetX = 0, t.$offsetY = 0, t.$textureWidth = 0, t.$textureHeight = 0, t.$sourceWidth = 0, t.$sourceHeight = 0, t.$bitmapData = null, t.$rotated = !1, t
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "textureWidth", {
            get: function() {
                return this.$getTextureWidth()
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$getTextureWidth = function() {
            return this.$textureWidth
        }, Object.defineProperty(i.prototype, "textureHeight", {
            get: function() {
                return this.$getTextureHeight()
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$getTextureHeight = function() {
            return this.$textureHeight
        }, i.prototype.$getScaleBitmapWidth = function() {
            return this.$bitmapWidth * t.$TextureScaleFactor
        }, i.prototype.$getScaleBitmapHeight = function() {
            return this.$bitmapHeight * t.$TextureScaleFactor
        }, Object.defineProperty(i.prototype, "bitmapData", {
            get: function() {
                return this.$bitmapData
            },
            set: function(t) {
                this._setBitmapData(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype._setBitmapData = function(e) {
            this.$bitmapData = e;
            var i = t.$TextureScaleFactor,
                r = e.width * i,
                n = e.height * i;
            this.$initData(0, 0, r, n, 0, 0, r, n, e.width, e.height)
        }, i.prototype.$initData = function(e, i, r, n, a, o, s, h, c, l, u) {
            void 0 === u && (u = !1);
            var p = t.$TextureScaleFactor;
            this.$bitmapX = e / p, this.$bitmapY = i / p, this.$bitmapWidth = r / p, this.$bitmapHeight = n / p, this.$offsetX = a, this.$offsetY = o, this.$textureWidth = s, this.$textureHeight = h, this.$sourceWidth = c, this.$sourceHeight = l, this.$rotated = u, t.BitmapData.$invalidate(this.$bitmapData)
        }, i.prototype.getPixel32 = function(t, e) {
            throw new Error
        }, i.prototype.getPixels = function(t, e, i, r) {
            throw void 0 === i && (i = 1), void 0 === r && (r = 1), new Error
        }, i.prototype.toDataURL = function(t, e, i) {
            throw new Error
        }, i.prototype.saveToFile = function(t, e, i) {
            throw new Error
        }, i.prototype.dispose = function() {
            this.$bitmapData && (this.disposeBitmapData && this.$bitmapData.$dispose(), this.$bitmapData = null)
        }, i
    }(t.HashObject);
    t.Texture = e, __reflect(e.prototype, "egret.Texture")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e(e, i, r, n) {
            var a = t.call(this) || this;
            return a.$eventPhase = 2, a.$currentTarget = null, a.$target = null, a.$isDefaultPrevented = !1, a.$isPropagationStopped = !1, a.$isPropagationImmediateStopped = !1, a.$type = e, a.$bubbles = !!i, a.$cancelable = !!r, a.data = n, a
        }
        return __extends(e, t), Object.defineProperty(e.prototype, "type", {
            get: function() {
                return this.$type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bubbles", {
            get: function() {
                return this.$bubbles
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "cancelable", {
            get: function() {
                return this.$cancelable
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventPhase", {
            get: function() {
                return this.$eventPhase
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "currentTarget", {
            get: function() {
                return this.$currentTarget
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "target", {
            get: function() {
                return this.$target
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.$setTarget = function(t) {
            return this.$target = t, !0
        }, e.prototype.isDefaultPrevented = function() {
            return this.$isDefaultPrevented
        }, e.prototype.preventDefault = function() {
            this.$cancelable && (this.$isDefaultPrevented = !0)
        }, e.prototype.stopPropagation = function() {
            this.$bubbles && (this.$isPropagationStopped = !0)
        }, e.prototype.stopImmediatePropagation = function() {
            this.$bubbles && (this.$isPropagationImmediateStopped = !0)
        }, e.prototype.clean = function() {
            this.data = this.$currentTarget = null, this.$setTarget(null)
        }, e.dispatchEvent = function(t, i, r, n) {
            void 0 === r && (r = !1);
            var a = e.create(e, i, r),
                o = e._getPropertyData(e);
            void 0 != n && (o.data = n);
            var s = t.dispatchEvent(a);
            return e.release(a), s
        }, e._getPropertyData = function(t) {
            var e = t._props;
            return e || (e = t._props = {}), e
        }, e.create = function(t, e, i, r) {
            var n, a = t.hasOwnProperty("eventPool");
            if (a && (n = t.eventPool), n || (n = t.eventPool = []), n.length) {
                var o = n.pop();
                return o.$type = e, o.$bubbles = !!i, o.$cancelable = !!r, o.$isDefaultPrevented = !1, o.$isPropagationStopped = !1, o.$isPropagationImmediateStopped = !1, o.$eventPhase = 2, o
            }
            return new t(e, i, r)
        }, e.release = function(t) {
            t.clean();
            var e = Object.getPrototypeOf(t).constructor;
            e.eventPool.push(t)
        }, e.ADDED_TO_STAGE = "addedToStage", e.REMOVED_FROM_STAGE = "removedFromStage", e.ADDED = "added", e.REMOVED = "removed", e.ENTER_FRAME = "enterFrame", e.RENDER = "render", e.RESIZE = "resize", e.CHANGE = "change", e.CHANGING = "changing", e.COMPLETE = "complete", e.LOOP_COMPLETE = "loopComplete", e.FOCUS_IN = "focusIn", e.FOCUS_OUT = "focusOut", e.ENDED = "ended", e.ACTIVATE = "activate", e.DEACTIVATE = "deactivate", e.CLOSE = "close", e.CONNECT = "connect", e.LEAVE_STAGE = "leaveStage", e.SOUND_COMPLETE = "soundComplete", e
    }(t.HashObject);
    t.Event = e, __reflect(e.prototype, "egret.Event")
}(egret || (egret = {}));
var egret;
! function(t) {
    function e() {
        return ""
    }

    function i(t) {
        throw new Error("#" + t)
    }

    function r() {}

    function n() {}
    t.getString = e, t.$error = i, t.$warn = r, t.$markCannotUse = n
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = [],
        i = Math.PI / 180,
        r = function(r) {
            function n(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0);
                var i = r.call(this) || this;
                return i.x = t, i.y = e, i
            }
            return __extends(n, r), n.release = function(t) {
                t && e.push(t)
            }, n.create = function(t, i) {
                var r = e.pop();
                return r || (r = new n), r.setTo(t, i)
            }, Object.defineProperty(n.prototype, "length", {
                get: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.setTo = function(t, e) {
                return this.x = t, this.y = e, this
            }, n.prototype.clone = function() {
                return new n(this.x, this.y)
            }, n.prototype.equals = function(t) {
                return this.x == t.x && this.y == t.y
            }, n.distance = function(t, e) {
                return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
            }, n.prototype.copyFrom = function(t) {
                this.x = t.x, this.y = t.y
            }, n.prototype.add = function(t) {
                return new n(this.x + t.x, this.y + t.y)
            }, n.interpolate = function(t, e, i) {
                var r = 1 - i;
                return new n(t.x * i + e.x * r, t.y * i + e.y * r)
            }, n.prototype.normalize = function(t) {
                if (0 != this.x || 0 != this.y) {
                    var e = t / this.length;
                    this.x *= e, this.y *= e
                }
            }, n.prototype.offset = function(t, e) {
                this.x += t, this.y += e
            }, n.polar = function(e, r) {
                return new n(e * t.NumberUtils.cos(r / i), e * t.NumberUtils.sin(r / i))
            }, n.prototype.subtract = function(t) {
                return new n(this.x - t.x, this.y - t.y)
            }, n.prototype.toString = function() {
                return "(x=" + this.x + ", y=" + this.y + ")"
            }, n
        }(t.HashObject);
    t.Point = r, __reflect(r.prototype, "egret.Point"), t.$TempPoint = new r
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.$touchChildren = !0, t.$children = [], t
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "numChildren", {
            get: function() {
                return this.$children.length
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.addChild = function(t) {
            var e = this.$children.length;
            return t.$parent == this && e--, this.$doAddChild(t, e)
        }, i.prototype.addChildAt = function(t, e) {
            return e = 0 | +e, (0 > e || e >= this.$children.length) && (e = this.$children.length, t.$parent == this && e--), this.$doAddChild(t, e)
        }, i.prototype.$doAddChild = function(e, r, n) {
            void 0 === n && (n = !0);
            var a = this,
                o = e.$parent;
            if (o == a) return a.doSetChildIndex(e, r), e;
            o && o.removeChild(e), a.$children.splice(r, 0, e), e.$setParent(a), t.nativeRender && a.$nativeDisplayObject.addChildAt(e.$nativeDisplayObject.id, r);
            var s = a.$stage;
            if (s && e.$onAddToStage(s, a.$nestLevel + 1), n && e.dispatchEventWith(t.Event.ADDED, !0), s)
                for (var h = i.$EVENT_ADD_TO_STAGE_LIST; h.length;) {
                    var c = h.shift();
                    c.$stage && n && c.dispatchEventWith(t.Event.ADDED_TO_STAGE)
                }
            if (!t.nativeRender && (e.$maskedObject && e.$maskedObject.$updateRenderMode(), !a.$cacheDirty)) {
                a.$cacheDirty = !0;
                var l = a.$parent;
                l && !l.$cacheDirty && (l.$cacheDirty = !0, l.$cacheDirtyUp());
                var u = a.$maskedObject;
                u && !u.$cacheDirty && (u.$cacheDirty = !0, u.$cacheDirtyUp())
            }
            return this.$childAdded(e, r), e
        }, i.prototype.contains = function(t) {
            for (; t;) {
                if (t == this) return !0;
                t = t.$parent
            }
            return !1
        }, i.prototype.getChildAt = function(t) {
            return t = 0 | +t, t >= 0 && t < this.$children.length ? this.$children[t] : null
        }, i.prototype.getChildIndex = function(t) {
            return this.$children.indexOf(t)
        }, i.prototype.getChildByName = function(t) {
            for (var e, i = this.$children, r = i.length, n = 0; r > n; n++)
                if (e = i[n], e.name == t) return e;
            return null
        }, i.prototype.removeChild = function(t) {
            var e = this.$children.indexOf(t);
            return e >= 0 ? this.$doRemoveChild(e) : null
        }, i.prototype.removeChildAt = function(t) {
            return t = 0 | +t, t >= 0 && t < this.$children.length ? this.$doRemoveChild(t) : null
        }, i.prototype.$doRemoveChild = function(e, r) {
            void 0 === r && (r = !0), e = 0 | +e;
            var n = this,
                a = this.$children,
                o = a[e];
            if (this.$childRemoved(o, e), r && o.dispatchEventWith(t.Event.REMOVED, !0), this.$stage) {
                o.$onRemoveFromStage();
                for (var s = i.$EVENT_REMOVE_FROM_STAGE_LIST; s.length > 0;) {
                    var h = s.shift();
                    r && h.$hasAddToStage && (h.$hasAddToStage = !1, h.dispatchEventWith(t.Event.REMOVED_FROM_STAGE)), h.$hasAddToStage = !1, h.$stage = null
                }
            }
            this.$displayList || this.$parentDisplayList;
            o.$setParent(null);
            var c = a.indexOf(o);
            if (-1 != c && a.splice(c, 1), t.nativeRender) n.$nativeDisplayObject.removeChild(o.$nativeDisplayObject.id);
            else if (o.$maskedObject && o.$maskedObject.$updateRenderMode(), !n.$cacheDirty) {
                n.$cacheDirty = !0;
                var l = n.$parent;
                l && !l.$cacheDirty && (l.$cacheDirty = !0, l.$cacheDirtyUp());
                var u = n.$maskedObject;
                u && !u.$cacheDirty && (u.$cacheDirty = !0, u.$cacheDirtyUp())
            }
            return o
        }, i.prototype.setChildIndex = function(t, e) {
            e = 0 | +e, (0 > e || e >= this.$children.length) && (e = this.$children.length - 1), this.doSetChildIndex(t, e)
        }, i.prototype.doSetChildIndex = function(e, i) {
            var r = this,
                n = this.$children.indexOf(e);
            if (n != i)
                if (this.$childRemoved(e, n), this.$children.splice(n, 1), this.$children.splice(i, 0, e), this.$childAdded(e, i), t.nativeRender) this.$nativeDisplayObject.removeChild(e.$nativeDisplayObject.id), this.$nativeDisplayObject.addChildAt(e.$nativeDisplayObject.id, i);
                else if (!r.$cacheDirty) {
                r.$cacheDirty = !0;
                var a = r.$parent;
                a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp());
                var o = r.$maskedObject;
                o && !o.$cacheDirty && (o.$cacheDirty = !0, o.$cacheDirtyUp())
            }
        }, i.prototype.swapChildrenAt = function(t, e) {
            t = 0 | +t, e = 0 | +e, t >= 0 && t < this.$children.length && e >= 0 && e < this.$children.length && this.doSwapChildrenAt(t, e)
        }, i.prototype.swapChildren = function(t, e) {
            var i = this.$children.indexOf(t),
                r = this.$children.indexOf(e); - 1 == i || -1 == r || this.doSwapChildrenAt(i, r)
        }, i.prototype.doSwapChildrenAt = function(e, i) {
            var r = this;
            if (e > i) {
                var n = i;
                i = e, e = n
            } else if (e == i) return;
            var a = this.$children,
                o = a[e],
                s = a[i];
            if (this.$childRemoved(o, e), this.$childRemoved(s, i), a[e] = s, a[i] = o, this.$childAdded(s, e), this.$childAdded(o, i), t.nativeRender) this.$nativeDisplayObject.swapChild(e, i);
            else if (!r.$cacheDirty) {
                r.$cacheDirty = !0;
                var h = r.$parent;
                h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp());
                var c = r.$maskedObject;
                c && !c.$cacheDirty && (c.$cacheDirty = !0, c.$cacheDirtyUp())
            }
        }, i.prototype.removeChildren = function() {
            for (var t = this.$children, e = t.length - 1; e >= 0; e--) this.$doRemoveChild(e)
        }, i.prototype.$childAdded = function(t, e) {}, i.prototype.$childRemoved = function(t, e) {}, i.prototype.$onAddToStage = function(t, i) {
            e.prototype.$onAddToStage.call(this, t, i);
            var r = this.$children,
                n = r.length;
            i++;
            for (var a = 0; n > a; a++) {
                var o = this.$children[a];
                o.$onAddToStage(t, i), o.$maskedObject && o.$maskedObject.$updateRenderMode()
            }
        }, i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this);
            for (var t = this.$children, i = t.length, r = 0; i > r; r++) {
                var n = t[r];
                n.$onRemoveFromStage()
            }
        }, i.prototype.$measureChildBounds = function(e) {
            var i = this.$children,
                r = i.length;
            if (0 != r) {
                for (var n = 0, a = 0, o = 0, s = 0, h = !1, c = -1; r > c; c++) {
                    var l = void 0; - 1 == c ? l = e : (i[c].getBounds(t.$TempRectangle), i[c].$getMatrix().$transformBounds(t.$TempRectangle), l = t.$TempRectangle), l.isEmpty() || (h ? (n = Math.min(n, l.x), a = Math.max(a, l.x + l.width), o = Math.min(o, l.y), s = Math.max(s, l.y + l.height)) : (h = !0, n = l.x, a = n + l.width, o = l.y, s = o + l.height))
                }
                e.setTo(n, o, a - n, s - o)
            }
        }, Object.defineProperty(i.prototype, "touchChildren", {
            get: function() {
                return this.$getTouchChildren()
            },
            set: function(t) {
                this.$setTouchChildren(!!t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$getTouchChildren = function() {
            return this.$touchChildren
        }, i.prototype.$setTouchChildren = function(t) {
            return this.$touchChildren == t ? !1 : (this.$touchChildren = t, !0)
        }, i.prototype.$hitTest = function(t, i) {
            if (!this.$visible) return null;
            var r = this.$getInvertedConcatenatedMatrix(),
                n = r.a * t + r.c * i + r.tx,
                a = r.b * t + r.d * i + r.ty,
                o = this.$scrollRect ? this.$scrollRect : this.$maskRect;
            if (o && !o.contains(n, a)) return null;
            if (this.$mask && !this.$mask.$hitTest(t, i)) return null;
            for (var s = this.$children, h = !1, c = null, l = s.length - 1; l >= 0; l--) {
                var u = s[l];
                if (!u.$maskedObject && (c = u.$hitTest(t, i))) {
                    if (h = !0, c.$touchEnabled) break;
                    c = null
                }
            }
            return c ? this.$touchChildren ? c : this : h ? this : e.prototype.$hitTest.call(this, t, i)
        }, i.$EVENT_ADD_TO_STAGE_LIST = [], i.$EVENT_REMOVE_FROM_STAGE_LIST = [], i
    }(t.DisplayObject);
    t.DisplayObjectContainer = e, __reflect(e.prototype, "egret.DisplayObjectContainer")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(i) {
            var r = e.call(this) || this;
            return r._bitmapX = 0, r._bitmapY = 0, r._textureMap = t.createMap(), r.$texture = i, r._bitmapX = i.$bitmapX - i.$offsetX, r._bitmapY = i.$bitmapY - i.$offsetY, r
        }
        return __extends(i, e), i.prototype.getTexture = function(t) {
            return this._textureMap[t]
        }, i.prototype.createTexture = function(e, i, r, n, a, o, s, h, c) {
            void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === h && (h = o + n), void 0 === c && (c = s + a);
            var l = new t.Texture;
            return l.disposeBitmapData = !1, l.$bitmapData = this.$texture.$bitmapData, l.$initData(this._bitmapX + i, this._bitmapY + r, n, a, o, s, h, c, this.$texture.$sourceWidth, this.$texture.$sourceHeight), this._textureMap[e] = l, l
        }, i.prototype.dispose = function() {
            this.$texture && this.$texture.dispose()
        }, i
    }(t.HashObject);
    t.SpriteSheet = e, __reflect(e.prototype, "egret.SpriteSheet")
}(egret || (egret = {}));
var egret;
! function(t) {
    t.$locale_strings = t.$locale_strings || {}, t.$language = "en_US"
}(egret || (egret = {})),
function(t) {
    var e;
    ! function(e) {
        function i(e) {
            for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
            var n = t.$locale_strings[t.$language][e];
            if (!n) return "{" + e + "}";
            for (var a = i.length, o = 0; a > o; o++) n = n.replace("{" + o + "}", i[o]);
            return n
        }
        e.tr = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(r) {
            var n = e.call(this) || this;
            return n.$texture = null, n.$bitmapData = null, n.$bitmapX = 0, n.$bitmapY = 0, n.$bitmapWidth = 0, n.$bitmapHeight = 0, n.$offsetX = 0, n.$offsetY = 0, n.$textureWidth = 0, n.$textureHeight = 0, n.$sourceWidth = 0, n.$sourceHeight = 0, n.$smoothing = i.defaultSmoothing, n.$explicitBitmapWidth = 0 / 0, n.$explicitBitmapHeight = 0 / 0, n.$scale9Grid = null, n.$fillMode = "scale", n._pixelHitTest = !1, n.$renderNode = new t.sys.NormalBitmapNode, n.$setTexture(r), r && (n.$renderNode.rotated = r.$rotated), n
        }
        return __extends(i, e), i.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(1)
        }, i.prototype.$onAddToStage = function(i, r) {
            e.prototype.$onAddToStage.call(this, i, r);
            var n = this.$texture;
            n && n.$bitmapData && t.BitmapData.$addDisplayObject(this, n.$bitmapData)
        }, i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this);
            var i = this.$texture;
            i && t.BitmapData.$removeDisplayObject(this, i.$bitmapData)
        }, Object.defineProperty(i.prototype, "texture", {
            get: function() {
                return this.$texture
            },
            set: function(t) {
                var e = this;
                e.$setTexture(t), t && e.$renderNode && (e.$renderNode.rotated = t.$rotated)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setTexture = function(e) {
            var i = this,
                r = i.$texture;
            if (e == r) return !1;
            if (i.$texture = e, !e) {
                r && t.BitmapData.$removeDisplayObject(i, r.$bitmapData), i.setImageData(null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), i.$renderDirty = !0;
                var n = i.$parent;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
                var a = i.$maskedObject;
                return a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp()), t.nativeRender && this.setBitmapDataToWasm(null), !0
            }
            if (i.$refreshImageData(), i.$stage) {
                if (r && r.$bitmapData) {
                    var o = r.$bitmapData.hashCode,
                        s = e.$bitmapData ? e.$bitmapData.hashCode : -1;
                    if (o == s) {
                        i.$renderDirty = !0;
                        var h = i.$parent;
                        h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp());
                        var c = i.$maskedObject;
                        return c && !c.$cacheDirty && (c.$cacheDirty = !0, c.$cacheDirtyUp()), !0
                    }
                    t.BitmapData.$removeDisplayObject(i, r.$bitmapData)
                }
                t.BitmapData.$addDisplayObject(i, e.$bitmapData)
            }
            i.$renderDirty = !0;
            var l = i.$parent;
            l && !l.$cacheDirty && (l.$cacheDirty = !0, l.$cacheDirtyUp());
            var u = i.$maskedObject;
            return u && !u.$cacheDirty && (u.$cacheDirty = !0, u.$cacheDirtyUp()), !0
        }, i.prototype.$setBitmapData = function(t) {
            this.$setTexture(t)
        }, i.prototype.setBitmapDataToWasm = function(t) {
            this.$nativeDisplayObject.setTexture(t)
        }, i.prototype.$refreshImageData = function() {
            var e = this.$texture;
            e ? (t.nativeRender && this.setBitmapDataToWasm(e), this.setImageData(e.$bitmapData, e.$bitmapX, e.$bitmapY, e.$bitmapWidth, e.$bitmapHeight, e.$offsetX, e.$offsetY, e.$getTextureWidth(), e.$getTextureHeight(), e.$sourceWidth, e.$sourceHeight)) : t.nativeRender && this.setBitmapDataToWasm(null)
        }, i.prototype.setImageData = function(t, e, i, r, n, a, o, s, h, c, l) {
            this.$bitmapData = t, this.$bitmapX = e, this.$bitmapY = i, this.$bitmapWidth = r, this.$bitmapHeight = n, this.$offsetX = a, this.$offsetY = o, this.$textureWidth = s, this.$textureHeight = h, this.$sourceWidth = c, this.$sourceHeight = l
        }, Object.defineProperty(i.prototype, "scale9Grid", {
            get: function() {
                return this.$scale9Grid
            },
            set: function(t) {
                this.$setScale9Grid(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setScale9Grid = function(e) {
            var i = this;
            if (i.$scale9Grid = e, i.$renderDirty = !0, t.nativeRender) e ? i.$nativeDisplayObject.setScale9Grid(e.x, e.y, e.width, e.height) : i.$nativeDisplayObject.setScale9Grid(0, 0, -1, -1);
            else {
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
        }, Object.defineProperty(i.prototype, "fillMode", {
            get: function() {
                return this.$fillMode
            },
            set: function(t) {
                this.$setFillMode(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setFillMode = function(e) {
            var i = this;
            if (e == i.$fillMode) return !1;
            if (i.$fillMode = e, t.nativeRender) i.$nativeDisplayObject.setBitmapFillMode(i.$fillMode);
            else {
                i.$renderDirty = !0;
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
            return !0
        }, Object.defineProperty(i.prototype, "smoothing", {
            get: function() {
                return this.$smoothing
            },
            set: function(e) {
                var i = this;
                if (e != this.$smoothing && (this.$smoothing = e, this.$renderNode.smoothing = e, !t.nativeRender)) {
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setWidth = function(e) {
            var i = this;
            if (0 > e || e == i.$explicitBitmapWidth) return !1;
            if (i.$explicitBitmapWidth = e, i.$renderDirty = !0, t.nativeRender) i.$nativeDisplayObject.setWidth(e);
            else {
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
            return !0
        }, i.prototype.$setHeight = function(e) {
            var i = this;
            if (0 > e || e == i.$explicitBitmapHeight) return !1;
            if (i.$explicitBitmapHeight = e, i.$renderDirty = !0, t.nativeRender) i.$nativeDisplayObject.setHeight(e);
            else {
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
            return !0
        }, i.prototype.$getWidth = function() {
            return isNaN(this.$explicitBitmapWidth) ? this.$getContentBounds().width : this.$explicitBitmapWidth
        }, i.prototype.$getHeight = function() {
            return isNaN(this.$explicitBitmapHeight) ? this.$getContentBounds().height : this.$explicitBitmapHeight
        }, i.prototype.$measureContentBounds = function(t) {
            if (this.$bitmapData) {
                var e = isNaN(this.$explicitBitmapWidth) ? this.$textureWidth : this.$explicitBitmapWidth,
                    i = isNaN(this.$explicitBitmapHeight) ? this.$textureHeight : this.$explicitBitmapHeight;
                t.setTo(0, 0, e, i)
            } else {
                var e = isNaN(this.$explicitBitmapWidth) ? 0 : this.$explicitBitmapWidth,
                    i = isNaN(this.$explicitBitmapHeight) ? 0 : this.$explicitBitmapHeight;
                t.setTo(0, 0, e, i)
            }
        }, i.prototype.$updateRenderNode = function() {
            if (this.$texture) {
                var e = isNaN(this.$explicitBitmapWidth) ? this.$textureWidth : this.$explicitBitmapWidth,
                    i = isNaN(this.$explicitBitmapHeight) ? this.$textureHeight : this.$explicitBitmapHeight,
                    r = this.scale9Grid || this.$texture.scale9Grid;
                r ? (this.$renderNode instanceof t.sys.NormalBitmapNode && (this.$renderNode = new t.sys.BitmapNode), t.sys.BitmapNode.$updateTextureDataWithScale9Grid(this.$renderNode, this.$bitmapData, r, this.$bitmapX, this.$bitmapY, this.$bitmapWidth, this.$bitmapHeight, this.$offsetX, this.$offsetY, this.$textureWidth, this.$textureHeight, e, i, this.$sourceWidth, this.$sourceHeight, this.$smoothing)) : (this.fillMode == t.BitmapFillMode.REPEAT && this.$renderNode instanceof t.sys.NormalBitmapNode && (this.$renderNode = new t.sys.BitmapNode), t.sys.BitmapNode.$updateTextureData(this.$renderNode, this.$bitmapData, this.$bitmapX, this.$bitmapY, this.$bitmapWidth, this.$bitmapHeight, this.$offsetX, this.$offsetY, this.$textureWidth, this.$textureHeight, e, i, this.$sourceWidth, this.$sourceHeight, this.$fillMode, this.$smoothing))
            }
        }, Object.defineProperty(i.prototype, "pixelHitTest", {
            get: function() {
                return this._pixelHitTest
            },
            set: function(t) {
                this._pixelHitTest = !!t
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$hitTest = function(t, i) {
            var r = e.prototype.$hitTest.call(this, t, i);
            if (r && this._pixelHitTest) {
                var n = this.hitTestPoint(t, i, !0);
                n || (r = null)
            }
            return r
        }, i.defaultSmoothing = !0, i
    }(t.DisplayObject);
    t.Bitmap = e, __reflect(e.prototype, "egret.Bitmap")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {
                this.type = 0, this.drawData = [], this.renderCount = 0
            }
            return t.prototype.cleanBeforeRender = function() {
                this.drawData.length = 0, this.renderCount = 0
            }, t.prototype.$getRenderCount = function() {
                return this.renderCount
            }, t
        }();
        t.RenderNode = e, __reflect(e.prototype, "egret.sys.RenderNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        var e = function() {
            function t() {
                this.type = 0, this.$commands = [], this.$data = [], this.commandPosition = 0, this.dataPosition = 0, this.$lastX = 0, this.$lastY = 0
            }
            return t.prototype.moveTo = function(t, e) {
                this.$commands[this.commandPosition++] = 1;
                var i = this.dataPosition;
                this.$data[i++] = t, this.$data[i++] = e, this.dataPosition = i
            }, t.prototype.lineTo = function(t, e) {
                this.$commands[this.commandPosition++] = 2;
                var i = this.dataPosition;
                this.$data[i++] = t, this.$data[i++] = e, this.dataPosition = i
            }, t.prototype.curveTo = function(t, e, i, r) {
                this.$commands[this.commandPosition++] = 3;
                var n = this.dataPosition;
                this.$data[n++] = t, this.$data[n++] = e, this.$data[n++] = i, this.$data[n++] = r, this.dataPosition = n
            }, t.prototype.cubicCurveTo = function(t, e, i, r, n, a) {
                this.$commands[this.commandPosition++] = 4;
                var o = this.dataPosition;
                this.$data[o++] = t, this.$data[o++] = e, this.$data[o++] = i, this.$data[o++] = r, this.$data[o++] = n, this.$data[o++] = a, this.dataPosition = o
            }, t.prototype.drawRect = function(t, e, i, r) {
                var n = t + i,
                    a = e + r;
                this.moveTo(t, e), this.lineTo(n, e), this.lineTo(n, a), this.lineTo(t, a), this.lineTo(t, e)
            }, t.prototype.drawRoundRect = function(t, e, i, r, n, a) {
                var o = .5 * n | 0,
                    s = a ? .5 * a | 0 : o;
                if (!o || !s) return void this.drawRect(t, e, i, r);
                var h = .5 * i,
                    c = .5 * r;
                if (o > h && (o = h), s > c && (s = c), h === o && c === s) return void(o === s ? this.drawCircle(t + o, e + s, o) : this.drawEllipse(t, e, 2 * o, 2 * s));
                var l = t + i,
                    u = e + r,
                    p = t + o,
                    d = l - o,
                    f = e + s,
                    g = u - s;
                this.moveTo(l, g), this.curveTo(l, u, d, u), this.lineTo(p, u), this.curveTo(t, u, t, g), this.lineTo(t, f), this.curveTo(t, e, p, e), this.lineTo(d, e), this.curveTo(l, e, l, f), this.lineTo(l, g)
            }, t.prototype.drawCircle = function(t, e, i) {
                this.arcToBezier(t, e, i, i, 0, 2 * Math.PI)
            }, t.prototype.drawEllipse = function(t, e, i, r) {
                var n = .5 * i,
                    a = .5 * r;
                t += n, e += a, this.arcToBezier(t, e, n, a, 0, 2 * Math.PI)
            }, t.prototype.drawArc = function(t, e, i, r, n, a) {
                a ? n >= r && (n -= 2 * Math.PI) : r >= n && (n += 2 * Math.PI), this.arcToBezier(t, e, i, i, r, n, a)
            }, t.prototype.arcToBezier = function(t, e, i, r, n, a, o) {
                var s = .5 * Math.PI,
                    h = n,
                    c = h;
                o ? (c += -s - h % s, a > c && (c = a)) : (c += s - h % s, c > a && (c = a));
                var l = t + Math.cos(h) * i,
                    u = e + Math.sin(h) * r;
                (this.$lastX != l || this.$lastY != u) && this.moveTo(l, u);
                for (var p = Math.cos(h), d = Math.sin(h), f = 0; 4 > f; f++) {
                    var g = c - h,
                        $ = 4 * Math.tan(g / 4) / 3,
                        y = l - d * $ * i,
                        v = u + p * $ * r;
                    p = Math.cos(c), d = Math.sin(c), l = t + p * i, u = e + d * r;
                    var b = l + d * $ * i,
                        m = u - p * $ * r;
                    if (this.cubicCurveTo(y, v, b, m, l, u), c === a) break;
                    h = c, o ? (c = h - s, a > c && (c = a)) : (c = h + s, c > a && (c = a))
                }
            }, t
        }();
        t.Path2D = e, __reflect(e.prototype, "egret.sys.Path2D")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    t.fontMapping = {}
}(egret || (egret = {}));
var egret;
! function(t) {
    function e() {
        var t = Object.create(null);
        return t.__v8__ = void 0, delete t.__v8__, t
    }
    t.createMap = e
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e(e, i, r, n, a, o, s, h) {
            void 0 === e && (e = 16711680), void 0 === i && (i = 1), void 0 === r && (r = 6), void 0 === n && (n = 6), void 0 === a && (a = 2), void 0 === o && (o = 1), void 0 === s && (s = !1), void 0 === h && (h = !1);
            var c = t.call(this) || this,
                l = c;
            return l.type = "glow", l.$color = e, l.$blue = 255 & e, l.$green = (65280 & e) >> 8, l.$red = e >> 16, l.$alpha = i, l.$blurX = r, l.$blurY = n, l.$strength = a, l.$quality = o, l.$inner = s, l.$knockout = h, l.$uniforms.color = {
                x: c.$red / 255,
                y: c.$green / 255,
                z: c.$blue / 255,
                w: 1
            }, l.$uniforms.alpha = i, l.$uniforms.blurX = r, l.$uniforms.blurY = n, l.$uniforms.strength = a, l.$uniforms.inner = s ? 1 : 0, l.$uniforms.knockout = h ? 0 : 1, l.$uniforms.dist = 0, l.$uniforms.angle = 0, l.$uniforms.hideObject = 0, l.onPropertyChange(), c
        }
        return __extends(e, t), Object.defineProperty(e.prototype, "color", {
            get: function() {
                return this.$color
            },
            set: function(t) {
                this.$color != t && (this.$color = t, this.$blue = 255 & t, this.$green = (65280 & t) >> 8, this.$red = t >> 16, this.$uniforms.color.x = this.$red / 255, this.$uniforms.color.y = this.$green / 255, this.$uniforms.color.z = this.$blue / 255)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "alpha", {
            get: function() {
                return this.$alpha
            },
            set: function(t) {
                this.$alpha != t && (this.$alpha = t, this.$uniforms.alpha = t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "blurX", {
            get: function() {
                return this.$blurX
            },
            set: function(t) {
                var e = this;
                e.$blurX != t && (e.$blurX = t, e.$uniforms.blurX = t, e.onPropertyChange())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "blurY", {
            get: function() {
                return this.$blurY
            },
            set: function(t) {
                var e = this;
                e.$blurY != t && (e.$blurY = t, e.$uniforms.blurY = t, e.onPropertyChange())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "strength", {
            get: function() {
                return this.$strength
            },
            set: function(t) {
                this.$strength != t && (this.$strength = t, this.$uniforms.strength = t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "quality", {
            get: function() {
                return this.$quality
            },
            set: function(t) {
                this.$quality != t && (this.$quality = t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "inner", {
            get: function() {
                return this.$inner
            },
            set: function(t) {
                this.$inner != t && (this.$inner = t, this.$uniforms.inner = t ? 1 : 0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "knockout", {
            get: function() {
                return this.$knockout
            },
            set: function(t) {
                this.$knockout != t && (this.$knockout = t, this.$uniforms.knockout = t ? 0 : 1)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.$toJson = function() {
            return '{"color": ' + this.$color + ', "red": ' + this.$red + ', "green": ' + this.$green + ', "blue": ' + this.$blue + ', "alpha": ' + this.$alpha + ', "blurX": ' + this.$blurX + ', "blurY": ' + this.blurY + ', "strength": ' + this.$strength + ', "quality": ' + this.$quality + ', "inner": ' + this.$inner + ', "knockout": ' + this.$knockout + "}"
        }, e.prototype.updatePadding = function() {
            var t = this;
            t.paddingLeft = t.blurX, t.paddingRight = t.blurX, t.paddingTop = t.blurY, t.paddingBottom = t.blurY
        }, e
    }(t.Filter);
    t.GlowFilter = e, __reflect(e.prototype, "egret.GlowFilter")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.NORMAL = "normal", t.ADD = "add", t.ERASE = "erase", t
    }();
    t.BlendMode = e, __reflect(e.prototype, "egret.BlendMode")
}(egret || (egret = {})),
function(t) {
    var e;
    ! function(t) {
        function e(t) {
            var e = n[t];
            return void 0 === e ? 0 : e
        }

        function i(t) {
            var e = r[t];
            return void 0 === e ? "normal" : e
        }
        for (var r = ["normal", "add", "erase"], n = {}, a = r.length, o = 0; a > o; o++) {
            var s = r[o];
            n[s] = o
        }
        t.blendModeToNumber = e, t.numberToBlendMode = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    t.CapsStyle = {
        NONE: "none",
        ROUND: "round",
        SQUARE: "square"
    }
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function e() {}
        return e.compileProgram = function(i, r, n) {
            var a = e.compileFragmentShader(i, n),
                o = e.compileVertexShader(i, r),
                s = i.createProgram();
            return i.attachShader(s, o), i.attachShader(s, a), i.linkProgram(s), i.getProgramParameter(s, i.LINK_STATUS) || t.$warn(1020), s
        }, e.compileFragmentShader = function(t, i) {
            return e._compileShader(t, i, t.FRAGMENT_SHADER)
        }, e.compileVertexShader = function(t, i) {
            return e._compileShader(t, i, t.VERTEX_SHADER)
        }, e._compileShader = function(t, e, i) {
            var r = t.createShader(i);
            return t.shaderSource(r, e), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : null
        }, e.checkCanUseWebGL = function() {
            if (void 0 == e.canUseWebGL) try {
                var t = document.createElement("canvas");
                e.canUseWebGL = !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
            } catch (i) {
                e.canUseWebGL = !1
            }
            return e.canUseWebGL
        }, e.deleteWebGLTexture = function(t) {
            if (t) {
                var e = t.glContext;
                e && e.deleteTexture(t)
            }
        }, e
    }();
    t.WebGLUtils = e, __reflect(e.prototype, "egret.WebGLUtils")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e(e, i, r) {
            return void 0 === i && (i = !1), void 0 === r && (r = !1), t.call(this, e, i, r) || this
        }
        return __extends(e, t), e.FOCUS_IN = "focusIn", e.FOCUS_OUT = "focusOut", e
    }(t.Event);
    t.FocusEvent = e, __reflect(e.prototype, "egret.FocusEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t), e.PERMISSION_DENIED = "permissionDenied", e.UNAVAILABLE = "unavailable", e
    }(t.Event);
    t.GeolocationEvent = e, __reflect(e.prototype, "egret.GeolocationEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i, r) {
            void 0 === i && (i = !1), void 0 === r && (r = !1);
            var n = e.call(this, t, i, r) || this;
            return n._status = 0, n
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "status", {
            get: function() {
                return this._status
            },
            enumerable: !0,
            configurable: !0
        }), i.dispatchHTTPStatusEvent = function(e, r) {
            var n = t.Event.create(i, i.HTTP_STATUS);
            n._status = r;
            var a = e.dispatchEvent(n);
            return t.Event.release(n), a
        }, i.HTTP_STATUS = "httpStatus", i
    }(t.Event);
    t.HTTPStatusEvent = e, __reflect(e.prototype, "egret.HTTPStatusEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i, r) {
            return void 0 === i && (i = !1), void 0 === r && (r = !1), e.call(this, t, i, r) || this
        }
        return __extends(i, e), i.dispatchIOErrorEvent = function(e) {
            var r = t.Event.create(i, i.IO_ERROR),
                n = e.dispatchEvent(r);
            return t.Event.release(r), n
        }, i.IO_ERROR = "ioError", i
    }(t.Event);
    t.IOErrorEvent = e, __reflect(e.prototype, "egret.IOErrorEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t), e
    }(t.Event);
    t.MotionEvent = e, __reflect(e.prototype, "egret.MotionEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t), e
    }(t.Event);
    t.OrientationEvent = e, __reflect(e.prototype, "egret.OrientationEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i, r, n, a) {
            void 0 === i && (i = !1), void 0 === r && (r = !1), void 0 === n && (n = 0), void 0 === a && (a = 0);
            var o = e.call(this, t, i, r) || this;
            return o.bytesLoaded = 0, o.bytesTotal = 0, o.bytesLoaded = n, o.bytesTotal = a, o
        }
        return __extends(i, e), i.dispatchProgressEvent = function(e, r, n, a) {
            void 0 === n && (n = 0), void 0 === a && (a = 0);
            var o = t.Event.create(i, r);
            o.bytesLoaded = n, o.bytesTotal = a;
            var s = e.dispatchEvent(o);
            return t.Event.release(o), s
        }, i.PROGRESS = "progress", i.SOCKET_DATA = "socketData", i
    }(t.Event);
    t.ProgressEvent = e, __reflect(e.prototype, "egret.ProgressEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i, r) {
            return void 0 === i && (i = !1), void 0 === r && (r = !1), e.call(this, t, i, r) || this
        }
        return __extends(i, e), i.dispatchStageOrientationEvent = function(e, r) {
            var n = t.Event.create(i, r),
                a = e.dispatchEvent(n);
            return t.Event.release(n), a
        }, i.ORIENTATION_CHANGE = "orientationChange", i
    }(t.Event);
    t.StageOrientationEvent = e, __reflect(e.prototype, "egret.StageOrientationEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i, r, n) {
            void 0 === i && (i = !1), void 0 === r && (r = !1), void 0 === n && (n = "");
            var a = e.call(this, t, i, r) || this;
            return a.text = n, a
        }
        return __extends(i, e), i.dispatchTextEvent = function(e, r, n) {
            var a = t.Event.create(i, r);
            a.text = n;
            var o = e.dispatchEvent(a);
            return t.Event.release(a), o
        }, i.LINK = "link", i
    }(t.Event);
    t.TextEvent = e, __reflect(e.prototype, "egret.TextEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i, r) {
            return e.call(this, t, i, r) || this
        }
        return __extends(i, e), i.prototype.updateAfterEvent = function() {
            t.sys.$requestRenderingFlag = !0
        }, i.dispatchTimerEvent = function(e, r, n, a) {
            var o = t.Event.create(i, r, n, a),
                s = e.dispatchEvent(o);
            return t.Event.release(o), s
        }, i.TIMER = "timer", i.TIMER_COMPLETE = "timerComplete", i
    }(t.Event);
    t.TimerEvent = e, __reflect(e.prototype, "egret.TimerEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(i) {
            var r = e.call(this) || this;
            if (r.format = "image", r.$deleteSource = !0, t.nativeRender) {
                var n = new egret_native.NativeBitmapData;
                n.$init(), r.$nativeBitmapData = n
            }
            return r.source = i, r.width = i.width, r.height = i.height, r
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "source", {
            get: function() {
                return this.$source
            },
            set: function(e) {
                this.$source = e, t.nativeRender && egret_native.NativeDisplayObject.setSourceToNativeBitmapData(this.$nativeBitmapData, e)
            },
            enumerable: !0,
            configurable: !0
        }), i.create = function(e, r, n) {
            var a = "";
            a = "arraybuffer" === e ? t.Base64Util.encode(r) : r;
            var o = "image/png";
            "/" === a.charAt(0) ? o = "image/jpeg" : "R" === a.charAt(0) ? o = "image/gif" : "i" === a.charAt(0) && (o = "image/png");
            var s = new Image;
            s.src = "data:" + o + ";base64," + a, s.crossOrigin = "*";
            var h = new i(s);
            return s.onload = function() {
                s.onload = void 0, h.source = s, h.height = s.height, h.width = s.width, n && n(h)
            }, h
        }, i.prototype.$dispose = function() {
            "webgl" == t.Capabilities.renderMode && this.webGLTexture && (t.WebGLUtils.deleteWebGLTexture(this.webGLTexture), this.webGLTexture = null), this.source && this.source.dispose && this.source.dispose(), this.source && this.source.src && (this.source.src = ""), this.source = null, t.nativeRender && egret_native.NativeDisplayObject.disposeNativeBitmapData(this.$nativeBitmapData), i.$dispose(this)
        }, i.$addDisplayObject = function(t, e) {
            if (e) {
                var r = e.hashCode;
                if (r) {
                    if (!i._displayList[r]) return void(i._displayList[r] = [t]);
                    var n = i._displayList[r];
                    n.indexOf(t) < 0 && n.push(t)
                }
            }
        }, i.$removeDisplayObject = function(t, e) {
            if (e) {
                var r = e.hashCode;
                if (r && i._displayList[r]) {
                    var n = i._displayList[r],
                        a = n.indexOf(t);
                    a >= 0 && n.splice(a, 1)
                }
            }
        }, i.$invalidate = function(e) {
            if (e) {
                var r = e.hashCode;
                if (r && i._displayList[r])
                    for (var n = i._displayList[r], a = 0; a < n.length; a++) {
                        n[a] instanceof t.Bitmap && n[a].$refreshImageData();
                        var o = n[a];
                        o.$renderDirty = !0;
                        var s = o.$parent;
                        s && !s.$cacheDirty && (s.$cacheDirty = !0, s.$cacheDirtyUp());
                        var h = o.$maskedObject;
                        h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp())
                    }
            }
        }, i.$dispose = function(e) {
            if (e) {
                var r = e.hashCode;
                if (r && i._displayList[r]) {
                    for (var n = i._displayList[r], a = 0, o = n; a < o.length; a++) {
                        var s = o[a];
                        s instanceof t.Bitmap && (s.$bitmapData = null), s.$renderDirty = !0;
                        var h = s.$parent;
                        h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp());
                        var c = s.$maskedObject;
                        c && !c.$cacheDirty && (c.$cacheDirty = !0, c.$cacheDirtyUp())
                    }
                    delete i._displayList[r]
                }
            }
        }, i._displayList = t.createMap(), i
    }(t.HashObject);
    t.BitmapData = e, __reflect(e.prototype, "egret.BitmapData")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = new t.Point,
        i = function(i) {
            function r(t, e, r, n, a, o) {
                var s = i.call(this, t, e, r) || this;
                return s.targetChanged = !0, s.touchDown = !1, s.$initTo(n, a, o), s
            }
            return __extends(r, i), r.prototype.$initTo = function(t, e, i) {
                this.touchPointID = +i || 0, this.$stageX = +t || 0, this.$stageY = +e || 0
            }, Object.defineProperty(r.prototype, "stageX", {
                get: function() {
                    return this.$stageX
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "stageY", {
                get: function() {
                    return this.$stageY
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "localX", {
                get: function() {
                    return this.targetChanged && this.getLocalXY(), this._localX
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "localY", {
                get: function() {
                    return this.targetChanged && this.getLocalXY(), this._localY
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.getLocalXY = function() {
                this.targetChanged = !1;
                var t = this.$target.$getInvertedConcatenatedMatrix();
                t.transformPoint(this.$stageX, this.$stageY, e), this._localX = e.x, this._localY = e.y
            }, r.prototype.$setTarget = function(t) {
                return this.$target = t, this.targetChanged = !!t, !0
            }, r.prototype.updateAfterEvent = function() {
                t.sys.$requestRenderingFlag = !0
            }, r.dispatchTouchEvent = function(e, i, n, a, o, s, h, c) {
                if (void 0 === c && (c = !1), !n && !e.hasEventListener(i)) return !0;
                var l = t.Event.create(r, i, n, a);
                l.$initTo(o, s, h), l.touchDown = c;
                var u = e.dispatchEvent(l);
                return t.Event.release(l), u
            }, r.TOUCH_MOVE = "touchMove", r.TOUCH_BEGIN = "touchBegin", r.TOUCH_END = "touchEnd", r.TOUCH_CANCEL = "touchCancel", r.TOUCH_TAP = "touchTap", r.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside", r
        }(t.Event);
    t.TouchEvent = i, __reflect(i.prototype, "egret.TouchEvent")
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function n(t, n, a) {
            void 0 === t && (t = 4), void 0 === n && (n = 4), void 0 === a && (a = 1);
            var o = e.call(this) || this,
                s = o;
            return s.type = "blur", s.$blurX = t, s.$blurY = n, s.$quality = a, s.blurXFilter = new i(t), s.blurYFilter = new r(n), s.onPropertyChange(), o
        }
        return __extends(n, e), Object.defineProperty(n.prototype, "blurX", {
            get: function() {
                return this.$blurX
            },
            set: function(t) {
                var e = this;
                e.$blurX != t && (e.$blurX = t, e.blurXFilter.blurX = t, e.onPropertyChange())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "blurY", {
            get: function() {
                return this.$blurY
            },
            set: function(t) {
                var e = this;
                e.$blurY != t && (e.$blurY = t, e.blurYFilter.blurY = t, e.onPropertyChange())
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.$toJson = function() {
            return '{"blurX": ' + this.$blurX + ', "blurY": ' + this.$blurY + ', "quality": 1}'
        }, n.prototype.updatePadding = function() {
            var t = this;
            t.paddingLeft = t.blurX, t.paddingRight = t.blurX, t.paddingTop = t.blurY, t.paddingBottom = t.blurY
        }, n.prototype.onPropertyChange = function() {
            var e = this;
            e.updatePadding(), t.nativeRender && (egret_native.NativeDisplayObject.setFilterPadding(e.blurXFilter.$id, 0, 0, e.paddingLeft, e.paddingRight), egret_native.NativeDisplayObject.setFilterPadding(e.blurYFilter.$id, e.paddingTop, e.paddingBottom, 0, 0), egret_native.NativeDisplayObject.setDataToFilter(e))
        }, n
    }(t.Filter);
    t.BlurFilter = e, __reflect(e.prototype, "egret.BlurFilter");
    var i = function(e) {
        function i(i) {
            void 0 === i && (i = 4);
            var r = e.call(this) || this;
            return t.nativeRender ? r.type = "blur" : r.type = "blurX", r.$uniforms.blur = {
                x: i,
                y: 0
            }, r.onPropertyChange(), r
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "blurX", {
            get: function() {
                return this.$uniforms.blur.x
            },
            set: function(t) {
                this.$uniforms.blur.x = t
            },
            enumerable: !0,
            configurable: !0
        }), i
    }(t.Filter);
    __reflect(i.prototype, "BlurXFilter", ["egret.IBlurXFilter"]);
    var r = function(e) {
        function i(i) {
            void 0 === i && (i = 4);
            var r = e.call(this) || this;
            return t.nativeRender ? r.type = "blur" : r.type = "blurY", r.$uniforms.blur = {
                x: 0,
                y: i
            }, r.onPropertyChange(), r
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "blurY", {
            get: function() {
                return this.$uniforms.blur.y
            },
            set: function(t) {
                this.$uniforms.blur.y = t
            },
            enumerable: !0,
            configurable: !0
        }), i
    }(t.Filter);
    __reflect(r.prototype, "BlurYFilter", ["egret.IBlurYFilter"])
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return i.$matrix = [], i.matrix2 = [], i.type = "colorTransform", i.$uniforms.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], i.$uniforms.colorAdd = {
                x: 0,
                y: 0,
                z: 0,
                w: 0
            }, i.setMatrix(e), i.onPropertyChange(), i
        }
        return __extends(e, t), Object.defineProperty(e.prototype, "matrix", {
            get: function() {
                for (var t = 0; 20 > t; t++) this.matrix2[t] = this.$matrix[t];
                return this.matrix2
            },
            set: function(t) {
                this.setMatrix(t)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setMatrix = function(t) {
            if (t)
                for (var e = 0; 20 > e; e++) this.$matrix[e] = t[e];
            else
                for (var e = 0; 20 > e; e++) this.$matrix[e] = 0 == e || 6 == e || 12 == e || 18 == e ? 1 : 0;
            for (var i = this.$matrix, r = this.$uniforms.matrix, n = this.$uniforms.colorAdd, e = 0, a = 0; e < i.length; e++) 4 === e ? n.x = i[e] / 255 : 9 === e ? n.y = i[e] / 255 : 14 === e ? n.z = i[e] / 255 : 19 === e ? n.w = i[e] / 255 : (r[a] = i[e], a++);
            this.onPropertyChange()
        }, e.prototype.$toJson = function() {
            return '{"matrix": [' + this.$matrix.toString() + "]}"
        }, e
    }(t.Filter);
    t.ColorMatrixFilter = e, __reflect(e.prototype, "egret.ColorMatrixFilter")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e, i = {},
        r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        n = new Array(36),
        a = 0,
        o = function() {
            for (var t = 0; 36 > t; t++) 8 === t || 13 === t || 18 === t || 23 === t ? n[t] = "-" : 14 === t ? n[t] = "4" : (2 >= a && (a = 33554432 + 16777216 * Math.random() | 0), e = 15 & a, a >>= 4, n[t] = r[19 === t ? 3 & e | 8 : e]);
            return n.join("")
        },
        s = function(e) {
            function r(t, r, n) {
                void 0 === n && (n = {});
                var a = e.call(this) || this;
                a.$padding = 0, a.$vertexSrc = t, a.$fragmentSrc = r;
                var s = t + r;
                return i[s] || (i[s] = o()), a.$shaderKey = i[s], a.$uniforms = n, a.type = "custom", a
            }
            return __extends(r, e), Object.defineProperty(r.prototype, "padding", {
                get: function() {
                    return this.$padding
                },
                set: function(t) {
                    var e = this;
                    e.$padding != t && (e.$padding = t, e.onPropertyChange())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "uniforms", {
                get: function() {
                    return this.$uniforms
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.onPropertyChange = function() {
                if (t.nativeRender) {
                    var e = this;
                    egret_native.NativeDisplayObject.setFilterPadding(e.$id, e.$padding, e.$padding, e.$padding, e.$padding), egret_native.NativeDisplayObject.setDataToFilter(e)
                }
            }, r
        }(t.Filter);
    t.CustomFilter = s, __reflect(s.prototype, "egret.CustomFilter")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i, r, n, a, o, s, h, c, l, u) {
            void 0 === t && (t = 4), void 0 === i && (i = 45), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === a && (a = 4), void 0 === o && (o = 4), void 0 === s && (s = 1), void 0 === h && (h = 1), void 0 === c && (c = !1), void 0 === l && (l = !1), void 0 === u && (u = !1);
            var p = e.call(this, r, n, a, o, s, h, c, l) || this,
                d = p;
            return d.$distance = t, d.$angle = i, d.$hideObject = u, d.$uniforms.dist = t, d.$uniforms.angle = i / 180 * Math.PI, d.$uniforms.hideObject = u ? 1 : 0, d.onPropertyChange(), p
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "distance", {
            get: function() {
                return this.$distance
            },
            set: function(t) {
                var e = this;
                e.$distance != t && (e.$distance = t, e.$uniforms.dist = t, e.onPropertyChange())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "angle", {
            get: function() {
                return this.$angle
            },
            set: function(t) {
                var e = this;
                e.$angle != t && (e.$angle = t, e.$uniforms.angle = t / 180 * Math.PI, e.onPropertyChange())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "hideObject", {
            get: function() {
                return this.$hideObject
            },
            set: function(t) {
                this.$hideObject != t && (this.$hideObject = t, this.$uniforms.hideObject = t ? 1 : 0)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$toJson = function() {
            return '{"distance": ' + this.$distance + ', "angle": ' + this.$angle + ', "color": ' + this.$color + ', "red": ' + this.$red + ', "green": ' + this.$green + ', "blue": ' + this.$blue + ', "alpha": ' + this.$alpha + ', "blurX": ' + this.$blurX + ', "blurY": ' + this.blurY + ', "strength": ' + this.$strength + ', "quality": ' + this.$quality + ', "inner": ' + this.$inner + ', "knockout": ' + this.$knockout + ', "hideObject": ' + this.$hideObject + "}"
        }, i.prototype.updatePadding = function() {
            var e = this;
            e.paddingLeft = e.blurX, e.paddingRight = e.blurX, e.paddingTop = e.blurY, e.paddingBottom = e.blurY;
            var i = e.distance || 0,
                r = e.angle || 0,
                n = 0,
                a = 0;
            0 != i && (n = i * t.NumberUtils.cos(r), n = n > 0 ? Math.ceil(n) : Math.floor(n), a = i * t.NumberUtils.sin(r), a = a > 0 ? Math.ceil(a) : Math.floor(a), e.paddingLeft += n, e.paddingRight += n, e.paddingTop += a, e.paddingBottom += a)
        }, i
    }(t.GlowFilter);
    t.DropShadowFilter = e, __reflect(e.prototype, "egret.DropShadowFilter")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.LINEAR = "linear", t.RADIAL = "radial", t
    }();
    t.GradientType = e, __reflect(e.prototype, "egret.GradientType")
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function i(t, e) {
        for (var i = [], n = 0; e > n; n++) {
            var a = r(t, n / e);
            a && i.push(a)
        }
        return i
    }

    function r(e, i) {
        var r = 0,
            o = 0,
            s = 0,
            h = e.length;
        if (h / 2 == 3) {
            var c = e[r++],
                l = e[r++],
                u = e[r++],
                p = e[r++],
                d = e[r++],
                f = e[r++];
            o = n(c, u, d, i), s = n(l, p, f, i)
        } else if (h / 2 == 4) {
            var c = e[r++],
                l = e[r++],
                u = e[r++],
                p = e[r++],
                d = e[r++],
                f = e[r++],
                g = e[r++],
                $ = e[r++];
            o = a(c, u, d, g, i), s = a(l, p, f, $, i)
        }
        return t.Point.create(o, s)
    }

    function n(t, e, i, r) {
        var n = Math.pow(1 - r, 2) * t + 2 * r * (1 - r) * e + Math.pow(r, 2) * i;
        return n
    }

    function a(t, e, i, r, n) {
        var a = Math.pow(1 - n, 3) * t + 3 * n * Math.pow(1 - n, 2) * e + 3 * (1 - n) * Math.pow(n, 2) * i + Math.pow(n, 3) * r;
        return a
    }
    var o = function(r) {
        function n() {
            var e = r.call(this) || this;
            return e.lastX = 0, e.lastY = 0, e.fillPath = null, e.strokePath = null, e.topLeftStrokeWidth = 0, e.bottomRightStrokeWidth = 0, e.minX = 1 / 0, e.minY = 1 / 0, e.maxX = -(1 / 0), e.maxY = -(1 / 0), e.includeLastPosition = !0, e.$renderNode = new t.sys.GraphicsNode, e
        }
        return __extends(n, r), n.prototype.$setTarget = function(e) {
            this.$targetDisplay && (this.$targetDisplay.$renderNode = null), e.$renderNode = this.$renderNode, this.$targetDisplay = e, this.$targetIsSprite = e instanceof t.Sprite
        }, n.prototype.setStrokeWidth = function(t) {
            switch (t) {
                case 1:
                    this.topLeftStrokeWidth = 0, this.bottomRightStrokeWidth = 1;
                    break;
                case 3:
                    this.topLeftStrokeWidth = 1, this.bottomRightStrokeWidth = 2;
                    break;
                default:
                    var e = 0 | Math.ceil(.5 * t);
                    this.topLeftStrokeWidth = e, this.bottomRightStrokeWidth = e
            }
        }, n.prototype.beginFill = function(e, i) {
            void 0 === i && (i = 1), e = +e || 0, i = +i || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setBeginFill(e, i), this.fillPath = this.$renderNode.beginFill(e, i, this.strokePath), this.$renderNode.drawData.length > 1 && this.fillPath.moveTo(this.lastX, this.lastY)
        }, n.prototype.beginGradientFill = function(e, i, r, n, a) {
            void 0 === a && (a = null), t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setBeginGradientFill(e, i, r, n, a), this.fillPath = this.$renderNode.beginGradientFill(e, i, r, n, a, this.strokePath), this.$renderNode.drawData.length > 1 && this.fillPath.moveTo(this.lastX, this.lastY)
        }, n.prototype.endFill = function() {
            t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setEndFill(), this.fillPath = null
        }, n.prototype.lineStyle = function(e, i, r, n, a, o, s, h, c) {
            void 0 === e && (e = 0 / 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = !1), void 0 === a && (a = "normal"), void 0 === o && (o = null), void 0 === s && (s = null), void 0 === h && (h = 3), e = +e || 0, i = +i || 0, r = +r || 0, h = +h || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setLineStyle(e, i, r, n, a, o, s, h), 0 >= e ? (this.strokePath = null, this.setStrokeWidth(0)) : (this.setStrokeWidth(e), this.strokePath = this.$renderNode.lineStyle(e, i, r, o, s, h, c), this.$renderNode.drawData.length > 1 && this.strokePath.moveTo(this.lastX, this.lastY))
        }, n.prototype.drawRect = function(e, i, r, n) {
            e = +e || 0, i = +i || 0, r = +r || 0, n = +n || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawRect(e, i, r, n);
            var a = this.fillPath,
                o = this.strokePath;
            a && a.drawRect(e, i, r, n), o && o.drawRect(e, i, r, n), this.extendBoundsByPoint(e + r, i + n), this.updatePosition(e, i), this.dirty()
        }, n.prototype.drawRoundRect = function(e, i, r, n, a, o) {
            e = +e || 0, i = +i || 0, r = +r || 0, n = +n || 0, a = +a || 0, o = +o || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawRoundRect(e, i, r, n, a, o);
            var s = this.fillPath,
                h = this.strokePath;
            s && s.drawRoundRect(e, i, r, n, a, o), h && h.drawRoundRect(e, i, r, n, a, o);
            var c = .5 * a | 0,
                l = o ? .5 * o | 0 : c,
                u = e + r,
                p = i + n,
                d = p - l;
            this.extendBoundsByPoint(e, i), this.extendBoundsByPoint(u, p), this.updatePosition(u, d), this.dirty()
        }, n.prototype.drawCircle = function(e, i, r) {
            e = +e || 0, i = +i || 0, r = +r || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawCircle(e, i, r);
            var n = this.fillPath,
                a = this.strokePath;
            n && n.drawCircle(e, i, r), a && a.drawCircle(e, i, r), this.extendBoundsByPoint(e - r - 1, i - r - 1), this.extendBoundsByPoint(e + r + 2, i + r + 2), this.updatePosition(e + r, i), this.dirty()
        }, n.prototype.drawEllipse = function(e, i, r, n) {
            e = +e || 0, i = +i || 0, r = +r || 0, n = +n || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawEllipse(e, i, r, n);
            var a = this.fillPath,
                o = this.strokePath;
            a && a.drawEllipse(e, i, r, n), o && o.drawEllipse(e, i, r, n), this.extendBoundsByPoint(e - 1, i - 1), this.extendBoundsByPoint(e + r + 2, i + n + 2), this.updatePosition(e + r, i + .5 * n), this.dirty()
        }, n.prototype.moveTo = function(e, i) {
            e = +e || 0, i = +i || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setMoveTo(e, i);
            var r = this.fillPath,
                n = this.strokePath;
            r && r.moveTo(e, i), n && n.moveTo(e, i), this.includeLastPosition = !1, this.lastX = e, this.lastY = i, this.dirty()
        }, n.prototype.lineTo = function(e, i) {
            e = +e || 0, i = +i || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setLineTo(e, i);
            var r = this.fillPath,
                n = this.strokePath;
            r && r.lineTo(e, i), n && n.lineTo(e, i), this.updatePosition(e, i), this.dirty()
        }, n.prototype.curveTo = function(e, r, n, a) {
            e = +e || 0, r = +r || 0, n = +n || 0, a = +a || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setCurveTo(e, r, n, a);
            var o = this.fillPath,
                s = this.strokePath;
            o && o.curveTo(e, r, n, a), s && s.curveTo(e, r, n, a);
            for (var h = this.lastX || 0, c = this.lastY || 0, l = i([h, c, e, r, n, a], 50), u = 0; u < l.length; u++) {
                var p = l[u];
                this.extendBoundsByPoint(p.x, p.y), t.Point.release(p)
            }
            this.extendBoundsByPoint(n, a), this.updatePosition(n, a), this.dirty()
        }, n.prototype.cubicCurveTo = function(e, r, n, a, o, s) {
            e = +e || 0, r = +r || 0, n = +n || 0, a = +a || 0, o = +o || 0, s = +s || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setCubicCurveTo(e, r, n, a, o, s);
            var h = this.fillPath,
                c = this.strokePath;
            h && h.cubicCurveTo(e, r, n, a, o, s), c && c.cubicCurveTo(e, r, n, a, o, s);
            for (var l = this.lastX || 0, u = this.lastY || 0, p = i([l, u, e, r, n, a, o, s], 50), d = 0; d < p.length; d++) {
                var f = p[d];
                this.extendBoundsByPoint(f.x, f.y), t.Point.release(f)
            }
            this.extendBoundsByPoint(o, s), this.updatePosition(o, s), this.dirty()
        }, n.prototype.drawArc = function(i, r, n, a, o, s) {
            if (!(0 > n || a === o)) {
                i = +i || 0, r = +r || 0, n = +n || 0, a = +a || 0, o = +o || 0, s = !!s, a = e(a), o = e(o), t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawArc(i, r, n, a, o, s);
                var h = this.fillPath,
                    c = this.strokePath;
                h && (h.$lastX = this.lastX, h.$lastY = this.lastY, h.drawArc(i, r, n, a, o, s)), c && (c.$lastX = this.lastX, c.$lastY = this.lastY, c.drawArc(i, r, n, a, o, s)), s ? this.arcBounds(i, r, n, o, a) : this.arcBounds(i, r, n, a, o);
                var l = i + Math.cos(o) * n,
                    u = r + Math.sin(o) * n;
                this.updatePosition(l, u), this.dirty()
            }
        }, n.prototype.dirty = function() {
            var e = this;
            if (e.$renderNode.dirtyRender = !0, !t.nativeRender) {
                var i = e.$targetDisplay;
                i.$cacheDirty = !0;
                var r = i.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = i.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
        }, n.prototype.arcBounds = function(t, e, i, r, n) {
            var a = Math.PI;
            if (Math.abs(r - n) < .01) return this.extendBoundsByPoint(t - i, e - i), void this.extendBoundsByPoint(t + i, e + i);
            r > n && (n += 2 * a);
            for (var o = Math.cos(r) * i, s = Math.cos(n) * i, h = Math.min(o, s), c = Math.max(o, s), l = Math.sin(r) * i, u = Math.sin(n) * i, p = Math.min(l, u), d = Math.max(l, u), f = r / (.5 * a), g = n / (.5 * a), $ = Math.ceil(f); g >= $; $++) switch ($ % 4) {
                case 0:
                    c = i;
                    break;
                case 1:
                    d = i;
                    break;
                case 2:
                    h = -i;
                    break;
                case 3:
                    p = -i
            }
            h = Math.floor(h), p = Math.floor(p), c = Math.ceil(c), d = Math.ceil(d), this.extendBoundsByPoint(h + t, p + e), this.extendBoundsByPoint(c + t, d + e)
        }, n.prototype.clear = function() {
            t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setGraphicsClear(), this.$renderNode.clear(), this.updatePosition(0, 0), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0), this.dirty()
        }, n.prototype.extendBoundsByPoint = function(t, e) {
            this.extendBoundsByX(t), this.extendBoundsByY(e)
        }, n.prototype.extendBoundsByX = function(t) {
            this.minX = Math.min(this.minX, t - this.topLeftStrokeWidth), this.maxX = Math.max(this.maxX, t + this.bottomRightStrokeWidth), this.updateNodeBounds()
        }, n.prototype.extendBoundsByY = function(t) {
            this.minY = Math.min(this.minY, t - this.topLeftStrokeWidth), this.maxY = Math.max(this.maxY, t + this.bottomRightStrokeWidth), this.updateNodeBounds()
        }, n.prototype.updateNodeBounds = function() {
            var t = this.$renderNode;
            t.x = this.minX, t.y = this.minY, t.width = Math.ceil(this.maxX - this.minX), t.height = Math.ceil(this.maxY - this.minY)
        }, n.prototype.updatePosition = function(t, e) {
            this.includeLastPosition || (this.extendBoundsByPoint(this.lastX, this.lastY), this.includeLastPosition = !0), this.lastX = t, this.lastY = e, this.extendBoundsByPoint(t, e)
        }, n.prototype.$measureContentBounds = function(t) {
            this.minX === 1 / 0 ? t.setEmpty() : t.setTo(this.minX, this.minY, this.maxX - this.minX, this.maxY - this.minY)
        }, n.prototype.$hitTest = function(e, i) {
            var r = this.$targetDisplay,
                n = r.$getInvertedConcatenatedMatrix(),
                a = n.a * e + n.c * i + n.tx,
                o = n.b * e + n.d * i + n.ty,
                s = t.sys.canvasHitTestBuffer;
            s.resize(3, 3);
            var h = this.$renderNode,
                c = t.Matrix.create();
            c.identity(), c.translate(1 - a, 1 - o), t.sys.canvasRenderer.drawNodeToBuffer(h, s, c, !0), t.Matrix.release(c);
            try {
                var l = s.getPixels(1, 1);
                if (0 === l[3]) return null
            } catch (u) {
                throw new Error(t.sys.tr(1039))
            }
            return r
        }, n.prototype.$onRemoveFromStage = function() {
            this.$renderNode && this.$renderNode.clean(), t.nativeRender && egret_native.NativeDisplayObject.disposeGraphicData(this)
        }, n
    }(t.HashObject);
    t.Graphics = o, __reflect(o.prototype, "egret.Graphics")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = Math.PI,
        i = 2 * e,
        r = e / 180,
        n = [],
        a = function(a) {
            function o(t, e, i, r, n, o) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0);
                var s = a.call(this) || this;
                return s.a = t, s.b = e, s.c = i, s.d = r, s.tx = n, s.ty = o, s
            }
            return __extends(o, a), o.release = function(t) {
                t && n.push(t)
            }, o.create = function() {
                var t = n.pop();
                return t || (t = new o), t
            }, o.prototype.clone = function() {
                return new o(this.a, this.b, this.c, this.d, this.tx, this.ty)
            }, o.prototype.concat = function(t) {
                var e = this.a * t.a,
                    i = 0,
                    r = 0,
                    n = this.d * t.d,
                    a = this.tx * t.a + t.tx,
                    o = this.ty * t.d + t.ty;
                (0 !== this.b || 0 !== this.c || 0 !== t.b || 0 !== t.c) && (e += this.b * t.c, n += this.c * t.b, i += this.a * t.b + this.b * t.d, r += this.c * t.a + this.d * t.c, a += this.ty * t.c, o += this.tx * t.b), this.a = e, this.b = i, this.c = r, this.d = n, this.tx = a, this.ty = o
            }, o.prototype.copyFrom = function(t) {
                return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
            }, o.prototype.identity = function() {
                this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0
            }, o.prototype.invert = function() {
                this.$invertInto(this)
            }, o.prototype.$invertInto = function(t) {
                var e = this.a,
                    i = this.b,
                    r = this.c,
                    n = this.d,
                    a = this.tx,
                    o = this.ty;
                if (0 == i && 0 == r) return t.b = t.c = 0, void(0 == e || 0 == n ? t.a = t.d = t.tx = t.ty = 0 : (e = t.a = 1 / e, n = t.d = 1 / n, t.tx = -e * a, t.ty = -n * o));
                var s = e * n - i * r;
                if (0 == s) return void t.identity();
                s = 1 / s;
                var h = t.a = n * s;
                i = t.b = -i * s, r = t.c = -r * s, n = t.d = e * s, t.tx = -(h * a + r * o), t.ty = -(i * a + n * o)
            }, o.prototype.rotate = function(e) {
                if (e = +e, 0 !== e) {
                    e /= r;
                    var i = t.NumberUtils.cos(e),
                        n = t.NumberUtils.sin(e),
                        a = this.a,
                        o = this.b,
                        s = this.c,
                        h = this.d,
                        c = this.tx,
                        l = this.ty;
                    this.a = a * i - o * n, this.b = a * n + o * i, this.c = s * i - h * n, this.d = s * n + h * i, this.tx = c * i - l * n, this.ty = c * n + l * i
                }
            }, o.prototype.scale = function(t, e) {
                1 !== t && (this.a *= t, this.c *= t, this.tx *= t), 1 !== e && (this.b *= e, this.d *= e, this.ty *= e)
            }, o.prototype.setTo = function(t, e, i, r, n, a) {
                return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = a, this
            }, o.prototype.transformPoint = function(e, i, r) {
                var n = this.a * e + this.c * i + this.tx,
                    a = this.b * e + this.d * i + this.ty;
                return r ? (r.setTo(n, a), r) : new t.Point(n, a)
            }, o.prototype.translate = function(t, e) {
                this.tx += t, this.ty += e
            }, o.prototype.equals = function(t) {
                return this.a == t.a && this.b == t.b && this.c == t.c && this.d == t.d && this.tx == t.tx && this.ty == t.ty
            }, o.prototype.prepend = function(t, e, i, r, n, a) {
                var o = this.tx;
                if (1 != t || 0 != e || 0 != i || 1 != r) {
                    var s = this.a,
                        h = this.c;
                    this.a = s * t + this.b * i, this.b = s * e + this.b * r, this.c = h * t + this.d * i, this.d = h * e + this.d * r
                }
                return this.tx = o * t + this.ty * i + n, this.ty = o * e + this.ty * r + a, this
            }, o.prototype.append = function(t, e, i, r, n, a) {
                var o = this.a,
                    s = this.b,
                    h = this.c,
                    c = this.d;
                return (1 != t || 0 != e || 0 != i || 1 != r) && (this.a = t * o + e * h, this.b = t * s + e * c, this.c = i * o + r * h, this.d = i * s + r * c), this.tx = n * o + a * h + this.tx, this.ty = n * s + a * c + this.ty, this
            }, o.prototype.deltaTransformPoint = function(e) {
                var i = this,
                    r = i.a * e.x + i.c * e.y,
                    n = i.b * e.x + i.d * e.y;
                return new t.Point(r, n)
            }, o.prototype.toString = function() {
                return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
            }, o.prototype.createBox = function(e, i, n, a, o) {
                void 0 === n && (n = 0), void 0 === a && (a = 0), void 0 === o && (o = 0);
                var s = this;
                if (0 !== n) {
                    n /= r;
                    var h = t.NumberUtils.cos(n),
                        c = t.NumberUtils.sin(n);
                    s.a = h * e, s.b = c * i, s.c = -c * e, s.d = h * i
                } else s.a = e, s.b = 0, s.c = 0, s.d = i;
                s.tx = a, s.ty = o
            }, o.prototype.createGradientBox = function(t, e, i, r, n) {
                void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), this.createBox(t / 1638.4, e / 1638.4, i, r + t / 2, n + e / 2)
            }, o.prototype.$transformBounds = function(t) {
                var e = this.a,
                    i = this.b,
                    r = this.c,
                    n = this.d,
                    a = this.tx,
                    o = this.ty,
                    s = t.x,
                    h = t.y,
                    c = s + t.width,
                    l = h + t.height,
                    u = e * s + r * h + a,
                    p = i * s + n * h + o,
                    d = e * c + r * h + a,
                    f = i * c + n * h + o,
                    g = e * c + r * l + a,
                    $ = i * c + n * l + o,
                    y = e * s + r * l + a,
                    v = i * s + n * l + o,
                    b = 0;
                u > d && (b = u, u = d, d = b), g > y && (b = g, g = y, y = b), t.x = Math.floor(g > u ? u : g), t.width = Math.ceil((d > y ? d : y) - t.x), p > f && (b = p, p = f, f = b), $ > v && (b = $, $ = v, v = b), t.y = Math.floor($ > p ? p : $), t.height = Math.ceil((f > v ? f : v) - t.y)
            }, o.prototype.getDeterminant = function() {
                return this.a * this.d - this.b * this.c
            }, o.prototype.$getScaleX = function() {
                var t = this;
                if (0 == t.b) return t.a;
                var e = Math.sqrt(t.a * t.a + t.b * t.b);
                return this.getDeterminant() < 0 ? -e : e
            }, o.prototype.$getScaleY = function() {
                var t = this;
                if (0 == t.c) return t.d;
                var e = Math.sqrt(t.c * t.c + t.d * t.d);
                return this.getDeterminant() < 0 ? -e : e
            }, o.prototype.$getSkewX = function() {
                return this.d < 0 ? Math.atan2(this.d, this.c) + e / 2 : Math.atan2(this.d, this.c) - e / 2
            }, o.prototype.$getSkewY = function() {
                return this.a < 0 ? Math.atan2(this.b, this.a) - e : Math.atan2(this.b, this.a)
            }, o.prototype.$updateScaleAndRotation = function(e, n, a, o) {
                if (!(0 != a && a != i || 0 != o && o != i)) return this.a = e, this.b = this.c = 0, void(this.d = n);
                a /= r, o /= r;
                var s = t.NumberUtils.cos(a),
                    h = t.NumberUtils.sin(a);
                a == o ? (this.a = s * e, this.b = h * e) : (this.a = t.NumberUtils.cos(o) * e, this.b = t.NumberUtils.sin(o) * e), this.c = -h * n, this.d = s * n
            }, o.prototype.$preMultiplyInto = function(t, e) {
                var i = t.a * this.a,
                    r = 0,
                    n = 0,
                    a = t.d * this.d,
                    o = t.tx * this.a + this.tx,
                    s = t.ty * this.d + this.ty;
                (0 !== t.b || 0 !== t.c || 0 !== this.b || 0 !== this.c) && (i += t.b * this.c, a += t.c * this.b, r += t.a * this.b + t.b * this.d, n += t.c * this.a + t.d * this.c, o += t.ty * this.c, s += t.tx * this.b), e.a = i, e.b = r, e.c = n, e.d = a, e.tx = o, e.ty = s
            }, o
        }(t.HashObject);
    t.Matrix = a, __reflect(a.prototype, "egret.Matrix"), t.$TempMatrix = new a
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = [],
        i = function(i) {
            function r(t, e, r, n) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0);
                var a = i.call(this) || this;
                return a.x = t, a.y = e, a.width = r, a.height = n, a
            }
            return __extends(r, i), r.release = function(t) {
                t && e.push(t)
            }, r.create = function() {
                var t = e.pop();
                return t || (t = new r), t
            }, Object.defineProperty(r.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                set: function(t) {
                    this.width = t - this.x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                set: function(t) {
                    this.height = t - this.y
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "left", {
                get: function() {
                    return this.x
                },
                set: function(t) {
                    this.width += this.x - t, this.x = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "top", {
                get: function() {
                    return this.y
                },
                set: function(t) {
                    this.height += this.y - t, this.y = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "topLeft", {
                get: function() {
                    return new t.Point(this.left, this.top)
                },
                set: function(t) {
                    this.top = t.y, this.left = t.x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "bottomRight", {
                get: function() {
                    return new t.Point(this.right, this.bottom)
                },
                set: function(t) {
                    this.bottom = t.y, this.right = t.x
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.copyFrom = function(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
            }, r.prototype.setTo = function(t, e, i, r) {
                return this.x = t, this.y = e, this.width = i, this.height = r, this
            }, r.prototype.contains = function(t, e) {
                return this.x <= t && this.x + this.width >= t && this.y <= e && this.y + this.height >= e
            }, r.prototype.intersection = function(t) {
                return this.clone().$intersectInPlace(t)
            }, r.prototype.inflate = function(t, e) {
                this.x -= t, this.width += 2 * t, this.y -= e, this.height += 2 * e
            }, r.prototype.$intersectInPlace = function(t) {
                var e = this.x,
                    i = this.y,
                    r = t.x,
                    n = t.y,
                    a = Math.max(e, r),
                    o = Math.min(e + this.width, r + t.width);
                if (o >= a) {
                    var s = Math.max(i, n),
                        h = Math.min(i + this.height, n + t.height);
                    if (h >= s) return this.setTo(a, s, o - a, h - s), this
                }
                return this.setEmpty(), this
            }, r.prototype.intersects = function(t) {
                return Math.max(this.x, t.x) <= Math.min(this.right, t.right) && Math.max(this.y, t.y) <= Math.min(this.bottom, t.bottom)
            }, r.prototype.isEmpty = function() {
                return this.width <= 0 || this.height <= 0
            }, r.prototype.setEmpty = function() {
                this.x = 0, this.y = 0, this.width = 0, this.height = 0
            }, r.prototype.clone = function() {
                return new r(this.x, this.y, this.width, this.height)
            }, r.prototype.containsPoint = function(t) {
                return this.x <= t.x && this.x + this.width > t.x && this.y <= t.y && this.y + this.height > t.y ? !0 : !1
            }, r.prototype.containsRect = function(t) {
                var e = t.x + t.width,
                    i = t.y + t.height,
                    r = this.x + this.width,
                    n = this.y + this.height;
                return t.x >= this.x && t.x < r && t.y >= this.y && t.y < n && e > this.x && r >= e && i > this.y && n >= i
            }, r.prototype.equals = function(t) {
                return this === t ? !0 : this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height
            }, r.prototype.inflatePoint = function(t) {
                this.inflate(t.x, t.y)
            }, r.prototype.offset = function(t, e) {
                this.x += t, this.y += e
            }, r.prototype.offsetPoint = function(t) {
                this.offset(t.x, t.y)
            }, r.prototype.toString = function() {
                return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
            }, r.prototype.union = function(t) {
                var e = this.clone();
                if (t.isEmpty()) return e;
                if (e.isEmpty()) return e.copyFrom(t), e;
                var i = Math.min(e.x, t.x),
                    r = Math.min(e.y, t.y);
                return e.setTo(i, r, Math.max(e.right, t.right) - i, Math.max(e.bottom, t.bottom) - r), e
            }, r.prototype.$getBaseWidth = function(t) {
                var e = Math.abs(Math.cos(t)),
                    i = Math.abs(Math.sin(t));
                return e * this.width + i * this.height
            }, r.prototype.$getBaseHeight = function(t) {
                var e = Math.abs(Math.cos(t)),
                    i = Math.abs(Math.sin(t));
                return i * this.width + e * this.height
            }, r
        }(t.HashObject);
    t.Rectangle = i, __reflect(i.prototype, "egret.Rectangle"), t.$TempRectangle = new i
}(egret || (egret = {}));
var egret;
! function(t) {
    t.$locale_strings = t.$locale_strings || {}, t.$locale_strings.en_US = t.$locale_strings.en_US || {};
    var e = t.$locale_strings.en_US;
    e[1001] = "Could not find Egret entry class: {0}。", e[1002] = "Egret entry class '{0}' must inherit from egret.DisplayObject.", e[1003] = "Parameter {0} must be non-null.", e[1004] = "An object cannot be added as a child to one of it's children (or children's children, etc.).", e[1005] = "An object cannot be added as a child of itself.", e[1006] = "The supplied DisplayObject must be a child of the caller.", e[1007] = "An index specified for a parameter was out of range.", e[1008] = "Instantiate singleton error，singleton class {0} can not create multiple instances.", e[1009] = 'the Class {0} cannot use the property "{1}"', e[1010] = 'the property "{1}" of the Class "{0}" is readonly', e[1011] = "Stream Error. URL: {0}", e[1012] = "The type of parameter {0} must be Class.", e[1013] = "Variable assignment is NaN, please see the code!", e[1014] = 'the constant "{1}" of the Class "{0}" is read-only', e[1015] = "xml not found!", e[1016] = "{0}has been obsoleted", e[1017] = "The format of JSON file is incorrect: {0}\ndata: {1}", e[1018] = "the scale9Grid is not correct", e[1019] = "Network ab:{0}", e[1020] = "Cannot initialize Shader", e[1021] = "Current browser does not support webgl", e[1022] = "{0} ArgumentError", e[1023] = "This method is not available in the ScrollView!", e[1025] = "end of the file", e[1026] = "! EncodingError The code point {0} could not be encoded.", e[1027] = "DecodingError", e[1028] = ". called injection is not configured rule: {0}, please specify configuration during its initial years of injection rule, and then call the corresponding single case.", e[1029] = "Function.prototype.bind - what is trying to be bound is not callable", e[1033] = "Photos can not be used across domains toDataURL to convert base64", e[1034] = 'Music file decoding failed: "{0}", please use the standard conversion tool reconversion under mp3.', e[1035] = "Native does not support this feature!", e[1036] = "Sound has stopped, please recall Sound.play () to play the sound!", e[1037] = "Non-load the correct blob!", e[1038] = "XML format error!", e[1039] = "Cross domains pictures can not get pixel information!", e[1040] = "hitTestPoint can not detect crossOrigin images! Please check if the display object has crossOrigin elements.", e[1041] = "{0} is deprecated, please use {1} replace", e[1042] = "The parameters passed in the region needs is an integer in drawToTexture method. Otherwise, some browsers will draw abnormal.", e[1043] = "Compile errors in {0}, the attribute name: {1}, the attribute value: {2}.", e[1044] = "The current version of the Runtime does not support video playback, please use the latest version", e[1045] = "The resource url is not found", e[1046] = "BitmapText no corresponding characters: {0}, please check the configuration file", e[1047] = "egret.localStorage.setItem save failed,key={0}&value={1}", e[1048] = "Video loading failed", e[1049] = "In the absence of sound is not allowed to play after loading", e[1050] = "ExternalInterface calls the method without js registration: {0}", e[1051] = "runtime only support webgl render mode", e[1052] = "network request timeout{0}", e[3e3] = "Theme configuration file failed to load: {0}", e[3001] = "Cannot find the skin name which is configured in Theme: {0}", e[3002] = 'Index:"{0}" is out of the collection element index range', e[3003] = "Cannot be available in this component. If this component is container, please continue to use", e[3004] = "addChild(){0}addElement() replace", e[3005] = "addChildAt(){0}addElementAt() replace", e[3006] = "removeChild(){0}removeElement() replace", e[3007] = "removeChildAt(){0}removeElementAt() replace", e[3008] = "setChildIndex(){0}setElementIndex() replace", e[3009] = "swapChildren(){0}swapElements() replace", e[3010] = "swapChildrenAt(){0}swapElementsAt() replace", e[3011] = 'Index:"{0}" is out of the visual element index range', e[3012] = "This method is not available in Scroller component!", e[3013] = "UIStage is GUI root container, and only one such instant is in the display list！", e[3014] = "set fullscreen error", e[3100] = "Current browser does not support WebSocket", e[3101] = "Please connect Socket firstly", e[3102] = "Please set the type of binary type", e[3200] = "getResByUrl must be called after loadConfig", e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)", e[4001] = "Abstract class can not be instantiated!", e[4002] = "Unnamed data!", e[4003] = "Nonsupport version!", e[4500] = "The platform does not support {0} adapter mode and has been automatically replaced with {1} mode, please modify your code adapter logic"
}(egret || (egret = {}));
var egret;
! function(t) {
    t.JointStyle = {
        BEVEL: "bevel",
        MITER: "miter",
        ROUND: "round"
    }
}(egret || (egret = {}));
var egret;
! function(t) {
    t.$locale_strings = t.$locale_strings || {}, t.$locale_strings.zh_CN = t.$locale_strings.zh_CN || {};
    var e = t.$locale_strings.zh_CN;
    e[1001] = "找不到Egret入口类: {0}。", e[1002] = "Egret入口类 {0} 必须继承自egret.DisplayObject。", e[1003] = "参数 {0} 不能为 null。", e[1004] = "无法将对象添加为它的一个子对象（或子对象的子对象等）的子对象。", e[1005] = "不能将对象添加为其自身的子对象。", e[1006] = "提供的 DisplayObject 必须是调用者的子级。", e[1007] = "为参数指定的索引不在范围内。", e[1008] = "实例化单例出错，不允许实例化多个 {0} 对象。", e[1009] = "类 {0} 不可以使用属性 {1}", e[1010] = "类 {0} 属性 {1} 是只读的", e[1011] = "流错误。URL: {0}", e[1012] = "参数 {0} 的类型必须为 Class。", e[1013] = "变量赋值为NaN，请查看代码！", e[1014] = "类 {0} 常量 {1} 是只读的", e[1015] = "xml not found!", e[1016] = "{0}已经废弃", e[1017] = "JSON文件格式不正确: {0}\ndata: {1}", e[1018] = "9宫格设置错误", e[1019] = "网络异常:{0}", e[1020] = "无法初始化着色器", e[1021] = "当前浏览器不支持webgl", e[1022] = "{0} ArgumentError", e[1023] = "此方法在ScrollView内不可用!", e[1025] = "遇到文件尾", e[1026] = "EncodingError! The code point {0} could not be encoded.", e[1027] = "DecodingError", e[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。", e[1029] = "Function.prototype.bind - what is trying to be bound is not callable", e[1033] = "跨域图片不可以使用toDataURL来转换成base64", e[1034] = '音乐文件解码失败："{0}"，请使用标准的转换工具重新转换下mp3。', e[1035] = "Native 下暂未实现此功能！", e[1036] = "声音已停止，请重新调用 Sound.play() 来播放声音！", e[1037] = "非正确的blob加载！", e[1038] = "XML 格式错误!", e[1039] = "跨域图片不能获取像素信息!", e[1040] = "hitTestPoint 不能对跨域图片进行检测! 请检查该显示对象内是否含有跨域元素", e[1041] = "{0} 已废弃,请使用 {1} 代替", e[1042] = "drawToTexture方法传入的区域各个参数需要为整数,否则某些浏览器绘制会出现异常", e[1043] = "{0} 中存在编译错误，属性名 : {1}，属性值 : {2}", e[1044] = "当前的 runtime 版本不支持视频播放,请使用最新的版本", e[1045] = "没有设置要加载的资源地址", e[1046] = "BitmapText 找不到对应字符:{0}，请检查配置文件", e[1047] = "egret.localStorage.setItem保存失败,key={0}&value={1}", e[1048] = "视频加载失败", e[1049] = "声音在没有加载完之前不允许播放", e[1050] = "ExternalInterface调用了js没有注册的方法: {0}", e[1051] = "runtime 只支持 webgl 渲染模式", e[1052] = "网络请求超时:{0}", e[3e3] = "主题配置文件加载失败: {0}", e[3001] = "找不到主题中所配置的皮肤类名: {0}", e[3002] = '索引:"{0}"超出集合元素索引范围', e[3003] = "在此组件中不可用，若此组件为容器类，请使用", e[3004] = "addChild(){0}addElement()代替", e[3005] = "addChildAt(){0}addElementAt()代替", e[3006] = "removeChild(){0}removeElement()代替", e[3007] = "removeChildAt(){0}removeElementAt()代替", e[3008] = "setChildIndex(){0}setElementIndex()代替", e[3009] = "swapChildren(){0}swapElements()代替", e[3010] = "swapChildrenAt(){0}swapElementsAt()代替", e[3011] = '索引:"{0}"超出可视元素索引范围', e[3012] = "此方法在Scroller组件内不可用!", e[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！", e[3014] = "设置全屏模式失败", e[3100] = "当前浏览器不支持WebSocket", e[3101] = "请先连接WebSocket", e[3102] = "请先设置type为二进制类型", e[3200] = "getResByUrl 必须在 loadConfig 之后调用", e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)", e[4001] = "Abstract class can not be instantiated!", e[4002] = "Unnamed data!", e[4003] = "Nonsupport version!", e[4500] = "该平台不支持 {0} 适配模式，已经自动替换为 {1} 模式，请修改您的代码适配逻辑"
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {}(e = t.localStorage || (t.localStorage = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        function e(t) {
            r.indexOf(t) < 0 && r.push(t)
        }

        function i(t) {
            var e = r.indexOf(t);
            return e >= 0 ? (r.splice(e, 1), !0) : !1
        }
        var r = [];
        t.$pushSoundChannel = e, t.$popSoundChannel = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {})),
function(t) {}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        t.GET = "GET", t.POST = "POST"
    }(e = t.HttpMethod || (t.HttpMethod = {}))
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.TEXT = "text", t.ARRAY_BUFFER = "arraybuffer", t
    }();
    t.HttpResponseType = e, __reflect(e.prototype, "egret.HttpResponseType")
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var i = function(i) {
            function r(r) {
                var n = i.call(this) || this;
                return n.isStage = !1, n.$renderNode = new e.BitmapNode, n.renderBuffer = null, n.offsetX = 0, n.offsetY = 0, n.offsetMatrix = new t.Matrix, n.$canvasScaleX = 1, n.$canvasScaleY = 1, n.root = r, n.isStage = r instanceof t.Stage, n
            }
            return __extends(r, i), r.create = function(i) {
                var r = new t.sys.DisplayList(i);
                try {
                    var n = new e.RenderBuffer;
                    r.renderBuffer = n
                } catch (a) {
                    return null
                }
                return r.root = i, r
            }, r.prototype.$getRenderNode = function() {
                return this.$renderNode
            }, r.prototype.setClipRect = function(t, e) {
                t *= r.$canvasScaleX, e *= r.$canvasScaleY, this.renderBuffer.resize(t, e)
            }, r.prototype.drawToSurface = function() {
                var i = 0;
                this.$canvasScaleX = this.offsetMatrix.a = r.$canvasScaleX, this.$canvasScaleY = this.offsetMatrix.d = r.$canvasScaleY, this.isStage || this.changeSurfaceSize();
                var n = this.renderBuffer;
                if (n.clear(), i = e.systemRenderer.render(this.root, n, this.offsetMatrix), !this.isStage) {
                    var a = n.surface,
                        o = this.$renderNode;
                    o.drawData.length = 0;
                    var s = a.width,
                        h = a.height;
                    this.bitmapData ? (this.bitmapData.source = a, this.bitmapData.width = s, this.bitmapData.height = h) : this.bitmapData = new t.BitmapData(a), o.image = this.bitmapData, o.imageWidth = s, o.imageHeight = h, o.drawImage(0, 0, s, h, -this.offsetX, -this.offsetY, s / this.$canvasScaleX, h / this.$canvasScaleY)
                }
                return i
            }, r.prototype.changeSurfaceSize = function() {
                var t = (this.root, this.offsetX),
                    e = this.offsetY,
                    i = this.root.$getOriginalBounds(),
                    r = this.$canvasScaleX,
                    n = this.$canvasScaleY;
                this.offsetX = -i.x, this.offsetY = -i.y, this.offsetMatrix.setTo(this.offsetMatrix.a, 0, 0, this.offsetMatrix.d, this.offsetX, this.offsetY);
                var a = this.renderBuffer,
                    o = Math.max(257, i.width * r),
                    s = Math.max(257, i.height * n);
                (this.offsetX != t || this.offsetY != e || a.surface.width != o || a.surface.height != s) && a.resize(o, s)
            }, r.$setCanvasScale = function(e, i) {
                r.$canvasScaleX = e, r.$canvasScaleY = i, t.nativeRender && egret_native.nrSetCanvasScaleFactor(r.$canvasScaleFactor, e, i)
            }, r.$canvasScaleFactor = 1, r.$canvasScaleX = 1, r.$canvasScaleY = 1, r
        }(t.HashObject);
        e.DisplayList = i, __reflect(i.prototype, "egret.sys.DisplayList")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        function i(t) {
            for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
            return e
        }
        var r = function(r) {
            function h(e, i, n) {
                var a = r.call(this) || this;
                return a.isPlaying = !1, a.entryClassName = n, a.stage = i, a.screenDisplayList = a.createDisplayList(i, e), a.showFPS = !1, a.showLog = !1, a.stageDisplayList = null, t.nativeRender && (egret_native.rootWebGLBuffer = e), a
            }
            return __extends(h, r), h.prototype.createDisplayList = function(t, i) {
                var r = new e.DisplayList(t);
                return r.renderBuffer = i, t.$displayList = r, r
            }, h.prototype.start = function() {
                !this.isPlaying && this.stage && (e.$TempStage = e.$TempStage || this.stage, this.isPlaying = !0, this.root || this.initialize(), t.ticker.$addPlayer(this))
            }, h.prototype.initialize = function() {
                var e;
                if (this.entryClassName && (e = t.getDefinitionByName(this.entryClassName)), e) {
                    var i = new e;
                    this.root = i, i instanceof t.DisplayObject && this.stage.addChild(i)
                }
            }, h.prototype.stop = function() {
                this.pause(), this.stage = null
            }, h.prototype.pause = function() {
                this.isPlaying && (this.isPlaying = !1, t.ticker.$removePlayer(this))
            }, h.prototype.$render = function(e, i) {
                if (t.nativeRender) return egret_native.updateNativeRender(), void egret_native.nrRender();
                var r = this.stage,
                    a = t.getTimer(),
                    o = r.$displayList.drawToSurface(),
                    s = t.getTimer();
                e && this.showFPS && n.update(o, s - a, i)
            }, h.prototype.updateStageSize = function(e, i) {
                var r = this.stage;
                r.$stageWidth = e, r.$stageHeight = i, t.nativeRender ? egret_native.nrResize(e, i) : (this.screenDisplayList.setClipRect(e, i), this.stageDisplayList && this.stageDisplayList.setClipRect(e, i)), r.dispatchEventWith(t.Event.RESIZE)
            }, h.prototype.displayFPS = function(r, h, c, l) {
                if (h = !!h, h && (t.log = function() {
                        for (var t = arguments.length, r = "", n = 0; t > n; n++) r += arguments[n] + " ";
                        e.$logToFPS(r), console.log.apply(console, i(arguments))
                    }, t.warn = function() {
                        for (var t = arguments.length, r = "", n = 0; t > n; n++) r += arguments[n] + " ";
                        e.$warnToFPS(r), console.warn.apply(console, i(arguments))
                    }, t.error = function() {
                        for (var t = arguments.length, r = "", n = 0; t > n; n++) r += arguments[n] + " ";
                        e.$errorToFPS(r), console.error.apply(console, i(arguments))
                    }), this.showFPS = !!r, this.showLog = h, !n) {
                    n = new FPS(this.stage, r, h, c, l);
                    for (var u = a.length, p = 0; u > p; p++) n.updateInfo(a[p]);
                    a = null;
                    for (var d = o.length, p = 0; d > p; p++) n.updateWarn(o[p]);
                    o = null;
                    for (var f = s.length, p = 0; f > p; p++) n.updateError(s[p]);
                    s = null
                }
            }, h
        }(t.HashObject);
        e.Player = r, __reflect(r.prototype, "egret.sys.Player");
        var n, a = [],
            o = [],
            s = [];
        e.$logToFPS = function(t) {
            return n ? void n.updateInfo(t) : void a.push(t)
        }, e.$warnToFPS = function(t) {
            return n ? void n.updateWarn(t) : void o.push(t)
        }, e.$errorToFPS = function(t) {
            return n ? void n.updateError(t) : void s.push(t)
        };
        var h = function() {
            function e(e, i, r, n, a) {
                this.showFPS = i, this.showLog = r, this.logFilter = n, this.styles = a, this.infoLines = [], this.totalTime = 0, this.totalTick = 0, this.lastTime = 0, this.drawCalls = 0, this.costRender = 0, this.costTicker = 0, this.infoLines = [], this.totalTime = 0, this.totalTick = 0, this.lastTime = 0, this.drawCalls = 0, this.costRender = 0, this.costTicker = 0, this._stage = e, this.showFPS = i, this.showLog = r, this.logFilter = n, this.styles = a, this.fpsDisplay = new t.FPSDisplay(e, i, r, n, a);
                var o;
                try {
                    o = n ? new RegExp(n) : null
                } catch (s) {
                    t.log(s)
                }
                this.filter = function(t) {
                    return o ? o.test(t) : !n || 0 == t.indexOf(n)
                }
            }
            return e.prototype.update = function(e, i, r) {
                var n = t.getTimer();
                if (this.totalTime += n - this.lastTime, this.lastTime = n, this.totalTick++, this.drawCalls += e, this.costRender += i, this.costTicker += r, this.totalTime >= 1e3) {
                    var a = Math.min(Math.ceil(1e3 * this.totalTick / this.totalTime), t.ticker.$frameRate),
                        o = Math.round(this.drawCalls / this.totalTick),
                        s = Math.round(this.costRender / this.totalTick),
                        h = Math.round(this.costTicker / this.totalTick);
                    this.fpsDisplay.update({
                        fps: a,
                        draw: o,
                        costTicker: h,
                        costRender: s
                    }), this.totalTick = 0, this.totalTime = this.totalTime % 1e3, this.drawCalls = 0, this.costRender = 0, this.costTicker = 0
                }
            }, e.prototype.updateInfo = function(t) {
                t && this.showLog && this.filter(t) && this.fpsDisplay.updateInfo(t)
            }, e.prototype.updateWarn = function(t) {
                t && this.showLog && this.filter(t) && (this.fpsDisplay.updateWarn ? this.fpsDisplay.updateWarn(t) : this.fpsDisplay.updateInfo("[Warning]" + t))
            }, e.prototype.updateError = function(t) {
                t && this.showLog && this.filter(t) && (this.fpsDisplay.updateError ? this.fpsDisplay.updateError(t) : this.fpsDisplay.updateInfo("[Error]" + t))
            }, e
        }();
        __reflect(h.prototype, "FPSImpl"), __global.FPS = h, t.warn = function() {
            console.warn.apply(console, i(arguments))
        }, t.error = function() {
            console.error.apply(console, i(arguments))
        }, t.assert = function() {
            console.assert.apply(console, i(arguments))
        }, t.log = function() {
            console.log.apply(console, i(arguments))
        }
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {})),
function(t) {
    if (t.nativeRender = __global.nativeRender, t.nativeRender) {
        var e = egret_native.nrABIVersion,
            i = egret_native.nrMinEgretVersion,
            r = 5;
        if (r > e) {
            t.nativeRender = !1;
            var n = "需要升级微端版本到 0.1.14 才可以开启原生渲染加速";
            t.sys.$warnToFPS(n), t.warn(n)
        } else if (e > r) {
            t.nativeRender = !1;
            var n = "需要升级引擎版本到 " + i + " 才可以开启原生渲染加速";
            t.sys.$warnToFPS(n), t.warn(n)
        }
    }
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i(i) {
            var r = e.call(this, i) || this;
            return r._verticesDirty = !0, r._bounds = new t.Rectangle, r.$renderNode = new t.sys.MeshNode, r
        }
        return __extends(i, e), i.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(12)
        }, i.prototype.setBitmapDataToWasm = function(t) {
            this.$nativeDisplayObject.setBitmapDataToMesh(t)
        }, i.prototype.$updateRenderNode = function() {
            var e = this.$bitmapData;
            if (e) {
                var i = (t.$TextureScaleFactor, this.$renderNode);
                i.smoothing = this.$smoothing, i.image = e, i.imageWidth = this.$sourceWidth, i.imageHeight = this.$sourceHeight;
                var r = isNaN(this.$explicitBitmapWidth) ? this.$textureWidth : this.$explicitBitmapWidth,
                    n = isNaN(this.$explicitBitmapHeight) ? this.$textureHeight : this.$explicitBitmapHeight,
                    a = r / this.$textureWidth,
                    o = n / this.$textureHeight,
                    s = this.$bitmapWidth,
                    h = this.$bitmapHeight;
                i.drawMesh(this.$bitmapX, this.$bitmapY, s, h, this.$offsetX * a, this.$offsetY * o, a * s, o * h)
            }
        }, i.prototype.$updateVertices = function() {
            var e = this;
            if (e._verticesDirty = !0, e.$renderDirty = !0, t.nativeRender) {
                var i = this.$renderNode;
                this.$nativeDisplayObject.setDataToMesh(i.vertices, i.indices, i.uvs)
            } else {
                var r = e.$parent;
                r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                var n = e.$maskedObject;
                n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
            }
        }, i.prototype.$measureContentBounds = function(t) {
            if (this._verticesDirty) {
                this._verticesDirty = !1;
                var e = this.$renderNode,
                    i = e.vertices;
                if (i.length) {
                    this._bounds.setTo(Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                    for (var r = 0, n = i.length; n > r; r += 2) {
                        var a = i[r],
                            o = i[r + 1];
                        this._bounds.x > a && (this._bounds.x = a), this._bounds.width < a && (this._bounds.width = a), this._bounds.y > o && (this._bounds.y = o), this._bounds.height < o && (this._bounds.height = o)
                    }
                    this._bounds.width -= this._bounds.x, this._bounds.height -= this._bounds.y
                } else this._bounds.setTo(0, 0, 0, 0);
                e.bounds.copyFrom(this._bounds)
            }
            t.copyFrom(this._bounds)
        }, i
    }(t.Bitmap);
    t.Mesh = e, __reflect(e.prototype, "egret.Mesh")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var i = function(e) {
            function i() {
                return e.call(this) || this
            }
            return __extends(i, e), i.prototype.calculateStageSize = function(e, i, r, n, a) {
                var o = i,
                    s = r,
                    h = n,
                    c = a,
                    l = i / h || 0,
                    u = r / c || 0;
                switch (e) {
                    case t.StageScaleMode.EXACT_FIT:
                        break;
                    case t.StageScaleMode.FIXED_HEIGHT:
                        h = Math.round(i / u);
                        break;
                    case t.StageScaleMode.FIXED_WIDTH:
                        c = Math.round(r / l);
                        break;
                    case t.StageScaleMode.NO_BORDER:
                        l > u ? s = Math.round(c * l) : o = Math.round(h * u);
                        break;
                    case t.StageScaleMode.SHOW_ALL:
                        l > u ? o = Math.round(h * u) : s = Math.round(c * l);
                        break;
                    case t.StageScaleMode.FIXED_NARROW:
                        l > u ? h = Math.round(i / u) : c = Math.round(r / l);
                        break;
                    case t.StageScaleMode.FIXED_WIDE:
                        l > u ? c = Math.round(r / l) : h = Math.round(i / u);
                        break;
                    default:
                        h = i, c = r
                }
                return t.Capabilities.runtimeType != t.RuntimeType.WXGAME && (h % 2 != 0 && (h += 1), c % 2 != 0 && (c += 1), o % 2 != 0 && (o += 1), s % 2 != 0 && (s += 1)), {
                    stageWidth: h,
                    stageHeight: c,
                    displayWidth: o,
                    displayHeight: s
                }
            }, i
        }(t.HashObject);
        e.DefaultScreenAdapter = i, __reflect(i.prototype, "egret.sys.DefaultScreenAdapter", ["egret.sys.IScreenAdapter"])
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.NO_SCALE = "noScale", t.SHOW_ALL = "showAll", t.NO_BORDER = "noBorder", t.EXACT_FIT = "exactFit", t.FIXED_WIDTH = "fixedWidth", t.FIXED_HEIGHT = "fixedHeight", t.FIXED_NARROW = "fixedNarrow", t.FIXED_WIDE = "fixedWide", t
    }();
    t.StageScaleMode = e, __reflect(e.prototype, "egret.StageScaleMode")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {}(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        e.$START_TIME = 0, e.$invalidateRenderFlag = !1, e.$requestRenderingFlag = !1;
        var i = function() {
            function i() {
                this.playerList = [], this.callBackList = [], this.thisObjectList = [], this.$frameRate = 30, this.lastTimeStamp = 0, this.costEnterFrame = 0, this.isPaused = !1, e.$START_TIME = Date.now(), this.frameDeltaTime = 1e3 / this.$frameRate, this.lastCount = this.frameInterval = Math.round(6e4 / this.$frameRate)
            }
            return i.prototype.$addPlayer = function(t) {
                -1 == this.playerList.indexOf(t) && (this.playerList = this.playerList.concat(), this.playerList.push(t))
            }, i.prototype.$removePlayer = function(t) {
                var e = this.playerList.indexOf(t);
                if (-1 !== e) {
                    this.playerList = this.playerList.concat(), this.playerList.splice(e, 1)
                }
            }, i.prototype.$startTick = function(t, e) {
                var i = this.getTickIndex(t, e); - 1 == i && (this.concatTick(), this.callBackList.push(t), this.thisObjectList.push(e))
            }, i.prototype.$stopTick = function(t, e) {
                var i = this.getTickIndex(t, e); - 1 != i && (this.concatTick(), this.callBackList.splice(i, 1), this.thisObjectList.splice(i, 1))
            }, i.prototype.getTickIndex = function(t, e) {
                for (var i = this.callBackList, r = this.thisObjectList, n = i.length - 1; n >= 0; n--)
                    if (i[n] == t && r[n] == e) return n;
                return -1
            }, i.prototype.concatTick = function() {
                this.callBackList = this.callBackList.concat(), this.thisObjectList = this.thisObjectList.concat()
            }, i.prototype.$setFrameRate = function(t) {
                return 0 >= t ? !1 : this.$frameRate == t ? !1 : (this.$frameRate = t, t > 60 && (t = 60), this.frameDeltaTime = 1e3 / t, this.lastCount = this.frameInterval = Math.round(6e4 / t), !0)
            }, i.prototype.pause = function() {
                this.isPaused = !0
            }, i.prototype.resume = function() {
                this.isPaused = !1
            }, i.prototype.update = function(i) {
                for (var r = t.getTimer(), n = this.callBackList, a = this.thisObjectList, o = n.length, s = e.$requestRenderingFlag, h = t.getTimer(), c = t.lifecycle.contexts, l = 0, u = c; l < u.length; l++) {
                    var p = u[l];
                    p.onUpdate && p.onUpdate()
                }
                if (this.isPaused) return void(this.lastTimeStamp = h);
                this.callLaterAsyncs();
                for (var d = 0; o > d; d++) n[d].call(a[d], h) && (s = !0);
                var f = t.getTimer(),
                    g = h - this.lastTimeStamp;
                if (this.lastTimeStamp = h, g >= this.frameDeltaTime || i) this.lastCount = this.frameInterval;
                else {
                    if (this.lastCount -= 1e3, this.lastCount > 0) return void(s && this.render(!1, this.costEnterFrame + f - r));
                    this.lastCount += this.frameInterval
                }
                this.render(!0, this.costEnterFrame + f - r);
                var $ = t.getTimer();
                this.broadcastEnterFrame();
                var y = t.getTimer();
                this.costEnterFrame = y - $
            }, i.prototype.render = function(t, i) {
                var r = this.playerList,
                    n = r.length;
                if (0 != n) {
                    this.callLaters(), e.$invalidateRenderFlag && (this.broadcastRender(), e.$invalidateRenderFlag = !1);
                    for (var a = 0; n > a; a++) r[a].$render(t, i);
                    e.$requestRenderingFlag = !1
                }
            }, i.prototype.broadcastEnterFrame = function() {
                var e = t.DisplayObject.$enterFrameCallBackList,
                    i = e.length;
                if (0 != i) {
                    e = e.concat();
                    for (var r = 0; i > r; r++) e[r].dispatchEventWith(t.Event.ENTER_FRAME)
                }
            }, i.prototype.broadcastRender = function() {
                var e = t.DisplayObject.$renderCallBackList,
                    i = e.length;
                if (0 != i) {
                    e = e.concat();
                    for (var r = 0; i > r; r++) e[r].dispatchEventWith(t.Event.RENDER)
                }
            }, i.prototype.callLaters = function() {
                var e, i, r;
                if (t.$callLaterFunctionList.length > 0 && (e = t.$callLaterFunctionList, t.$callLaterFunctionList = [], i = t.$callLaterThisList, t.$callLaterThisList = [], r = t.$callLaterArgsList, t.$callLaterArgsList = []), e)
                    for (var n = e.length, a = 0; n > a; a++) {
                        var o = e[a];
                        null != o && o.apply(i[a], r[a])
                    }
            }, i.prototype.callLaterAsyncs = function() {
                if (t.$callAsyncFunctionList.length > 0) {
                    var e = t.$callAsyncFunctionList,
                        i = t.$callAsyncThisList,
                        r = t.$callAsyncArgsList;
                    t.$callAsyncFunctionList = [], t.$callAsyncThisList = [], t.$callAsyncArgsList = [];
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        null != a && a.apply(i[n], r[n])
                    }
                }
            }, i
        }();
        e.SystemTicker = i, __reflect(i.prototype, "egret.sys.SystemTicker")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {})),
function(t) {
    var e;
    ! function(e) {
        function i(t) {
            var i = new n;
            e.contexts.push(i), t(i)
        }
        e.contexts = [];
        var r = !0,
            n = function() {
                function i() {}
                return i.prototype.pause = function() {
                    r && (r = !1, e.stage.dispatchEvent(new t.Event(t.Event.DEACTIVATE)), e.onPause && e.onPause())
                }, i.prototype.resume = function() {
                    r || (r = !0, e.stage.dispatchEvent(new t.Event(t.Event.ACTIVATE)), e.onResume && e.onResume())
                }, i
            }();
        e.LifecycleContext = n, __reflect(n.prototype, "egret.lifecycle.LifecycleContext"), e.addLifecycleListener = i
    }(e = t.lifecycle || (t.lifecycle = {})), t.ticker = new t.sys.SystemTicker
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var i = function(e) {
            function i(t) {
                var i = e.call(this) || this;
                return i.maxTouches = 0, i.useTouchesCount = 0, i.touchDownTarget = {}, i.lastTouchX = -1, i.lastTouchY = -1, i.stage = t, i
            }
            return __extends(i, e), i.prototype.$initMaxTouches = function() {
                this.maxTouches = this.stage.$maxTouches
            }, i.prototype.onTouchBegin = function(e, i, r) {
                if (!(this.useTouchesCount >= this.maxTouches)) {
                    this.lastTouchX = e, this.lastTouchY = i;
                    var n = this.findTarget(e, i);
                    null == this.touchDownTarget[r] && (this.touchDownTarget[r] = n, this.useTouchesCount++), t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_BEGIN, !0, !0, e, i, r, !0)
                }
            }, i.prototype.onTouchMove = function(e, i, r) {
                if (null != this.touchDownTarget[r] && (this.lastTouchX != e || this.lastTouchY != i)) {
                    this.lastTouchX = e, this.lastTouchY = i;
                    var n = this.findTarget(e, i);
                    t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_MOVE, !0, !0, e, i, r, !0)
                }
            }, i.prototype.onTouchEnd = function(e, i, r) {
                if (null != this.touchDownTarget[r]) {
                    var n = this.findTarget(e, i),
                        a = this.touchDownTarget[r];
                    delete this.touchDownTarget[r], this.useTouchesCount--, t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_END, !0, !0, e, i, r, !1), a == n ? t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_TAP, !0, !0, e, i, r, !1) : t.TouchEvent.dispatchTouchEvent(a, t.TouchEvent.TOUCH_RELEASE_OUTSIDE, !0, !0, e, i, r, !1)
                }
            }, i.prototype.findTarget = function(t, e) {
                var i = this.stage.$hitTest(t, e);
                return i || (i = this.stage), i
            }, i
        }(t.HashObject);
        e.TouchHandler = i, __reflect(i.prototype, "egret.sys.TouchHandler")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var i = function(e) {
            function i() {
                var t = e.call(this) || this;
                return t.image = null, t.smoothing = !0, t.blendMode = null, t.alpha = 0 / 0, t.filter = null, t.rotated = !1, t.type = 1, t
            }
            return __extends(i, e), i.prototype.drawImage = function(t, e, i, r, n, a, o, s) {
                this.drawData.push(t, e, i, r, n, a, o, s), this.renderCount++
            }, i.prototype.cleanBeforeRender = function() {
                e.prototype.cleanBeforeRender.call(this), this.image = null, this.matrix = null, this.blendMode = null, this.alpha = 0 / 0, this.filter = null
            }, i.$updateTextureData = function(e, r, n, a, o, s, h, c, l, u, p, d, f, g, $, y) {
                if (r) {
                    var v = t.$TextureScaleFactor;
                    if (e.smoothing = y, e.image = r, e.imageWidth = f, e.imageHeight = g, $ == t.BitmapFillMode.SCALE) {
                        var b = p / l * v,
                            m = d / u * v;
                        e.drawImage(n, a, o, s, b * h, m * c, b * o, m * s)
                    } else if ($ == t.BitmapFillMode.CLIP) {
                        var x = Math.min(l, p),
                            T = Math.min(u, d),
                            _ = o * v,
                            D = s * v;
                        i.drawClipImage(e, v, n, a, _, D, h, c, x, T)
                    } else
                        for (var _ = o * v, D = s * v, O = 0; p > O; O += l)
                            for (var w = 0; d > w; w += u) {
                                var x = Math.min(p - O, l),
                                    T = Math.min(d - w, u);
                                i.drawClipImage(e, v, n, a, _, D, h, c, x, T, O, w)
                            }
                }
            }, i.$updateTextureDataWithScale9Grid = function(e, i, r, n, a, o, s, h, c, l, u, p, d, f, g, $) {
                e.smoothing = $, e.image = i, e.imageWidth = f, e.imageHeight = g;
                var y = o,
                    v = s;
                p -= l - o * t.$TextureScaleFactor, d -= u - s * t.$TextureScaleFactor;
                var b = r.x - h,
                    m = r.y - c,
                    x = b / t.$TextureScaleFactor,
                    T = m / t.$TextureScaleFactor,
                    _ = r.width / t.$TextureScaleFactor,
                    D = r.height / t.$TextureScaleFactor;
                0 == D && (D = 1, T >= v && T--), 0 == _ && (_ = 1, x >= y && x--);
                var O = n,
                    w = O + x,
                    E = w + _,
                    R = y - x - _,
                    S = a,
                    F = S + T,
                    P = F + D,
                    C = v - T - D,
                    M = R * t.$TextureScaleFactor,
                    j = C * t.$TextureScaleFactor;
                if ((x + R) * t.$TextureScaleFactor > p || (T + C) * t.$TextureScaleFactor > d) return void e.drawImage(n, a, o, s, h, c, p, d);
                var A = h,
                    B = A + b,
                    N = A + (p - M),
                    k = p - b - M,
                    L = c,
                    I = L + m,
                    U = L + d - j,
                    X = d - m - j;
                T > 0 && (x > 0 && e.drawImage(O, S, x, T, A, L, b, m), _ > 0 && e.drawImage(w, S, _, T, B, L, k, m), R > 0 && e.drawImage(E, S, R, T, N, L, M, m)), D > 0 && (x > 0 && e.drawImage(O, F, x, D, A, I, b, X), _ > 0 && e.drawImage(w, F, _, D, B, I, k, X), R > 0 && e.drawImage(E, F, R, D, N, I, M, X)), C > 0 && (x > 0 && e.drawImage(O, P, x, C, A, U, b, j), _ > 0 && e.drawImage(w, P, _, C, B, U, k, j), R > 0 && e.drawImage(E, P, R, C, N, U, M, j))
            }, i.drawClipImage = function(t, e, i, r, n, a, o, s, h, c, l, u) {
                void 0 === l && (l = 0), void 0 === u && (u = 0);
                var p = o + n - h;
                p > 0 && (n -= p), p = s + a - c, p > 0 && (a -= p), t.drawImage(i, r, n / e, a / e, l + o, u + s, n, a)
            }, i
        }(e.RenderNode);
        e.BitmapNode = i, __reflect(i.prototype, "egret.sys.BitmapNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var i = ["none", "round", "square"],
            r = ["bevel", "miter", "round"],
            n = function(n) {
                function a() {
                    var t = n.call(this) || this;
                    return t.dirtyRender = !0, t.type = 3, t
                }
                return __extends(a, n), a.prototype.beginFill = function(t, i, r) {
                    void 0 === i && (i = 1);
                    var n = new e.FillPath;
                    if (n.fillColor = t, n.fillAlpha = i, r) {
                        var a = this.drawData.lastIndexOf(r);
                        this.drawData.splice(a, 0, n)
                    } else this.drawData.push(n);
                    return this.renderCount++, n
                }, a.prototype.beginGradientFill = function(i, r, n, a, o, s) {
                    var h = new t.Matrix;
                    o ? (h.a = 819.2 * o.a, h.b = 819.2 * o.b, h.c = 819.2 * o.c, h.d = 819.2 * o.d, h.tx = o.tx, h.ty = o.ty) : (h.a = 100, h.d = 100);
                    var c = new e.GradientFillPath;
                    if (c.gradientType = i, c.colors = r, c.alphas = n, c.ratios = a, c.matrix = h, s) {
                        var l = this.drawData.lastIndexOf(s);
                        this.drawData.splice(l, 0, c)
                    } else this.drawData.push(c);
                    return this.renderCount++, c
                }, a.prototype.lineStyle = function(n, a, o, s, h, c, l) {
                    void 0 === o && (o = 1), void 0 === c && (c = 3), void 0 === l && (l = []), -1 == i.indexOf(s) && (s = "round"), -1 == r.indexOf(h) && (h = "round");
                    var u = new e.StrokePath;
                    return u.lineWidth = n, u.lineColor = a, u.lineAlpha = o, u.caps = s || t.CapsStyle.ROUND, u.joints = h, u.miterLimit = c, u.lineDash = l, this.drawData.push(u), this.renderCount++, u
                }, a.prototype.clear = function() {
                    this.drawData.length = 0, this.dirtyRender = !0, this.renderCount = 0
                }, a.prototype.cleanBeforeRender = function() {}, a.prototype.clean = function() {
                    this.$texture && (t.WebGLUtils.deleteWebGLTexture(this.$texture), this.$texture = null, this.dirtyRender = !0)
                }, a
            }(e.RenderNode);
        e.GraphicsNode = n, __reflect(n.prototype, "egret.sys.GraphicsNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 4, e
            }
            return __extends(e, t), e.prototype.addNode = function(t) {
                this.drawData.push(t)
            }, e.prototype.cleanBeforeRender = function() {
                for (var t = this.drawData, e = t.length - 1; e >= 0; e--) t[e].cleanBeforeRender()
            }, e.prototype.$getRenderCount = function() {
                for (var t = 0, e = this.drawData, i = e.length - 1; i >= 0; i--) t += e[i].$getRenderCount();
                return t
            }, e
        }(t.RenderNode);
        t.GroupNode = e, __reflect(e.prototype, "egret.sys.GroupNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var i = function(e) {
            function i() {
                var i = e.call(this) || this;
                return i.image = null, i.smoothing = !0, i.bounds = new t.Rectangle, i.blendMode = null, i.alpha = 0 / 0, i.filter = null, i.rotated = !1, i.type = 5, i.vertices = [], i.uvs = [], i.indices = [], i
            }
            return __extends(i, e), i.prototype.drawMesh = function(t, e, i, r, n, a, o, s) {
                this.drawData.push(t, e, i, r, n, a, o, s), this.renderCount++
            }, i.prototype.cleanBeforeRender = function() {
                e.prototype.cleanBeforeRender.call(this), this.image = null, this.matrix = null
            }, i
        }(e.RenderNode);
        e.MeshNode = i, __reflect(i.prototype, "egret.sys.MeshNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.image = null, e.smoothing = !0, e.rotated = !1, e.type = 6, e
            }
            return __extends(e, t), e.prototype.drawImage = function(t, e, i, r, n, a, o, s) {
                var h = this;
                h.sourceX = t, h.sourceY = e, h.sourceW = i, h.sourceH = r, h.drawX = n, h.drawY = a, h.drawW = o, h.drawH = s, h.renderCount = 1
            }, e.prototype.cleanBeforeRender = function() {
                t.prototype.cleanBeforeRender.call(this), this.image = null
            }, e
        }(t.RenderNode);
        t.NormalBitmapNode = e, __reflect(e.prototype, "egret.sys.NormalBitmapNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    t.OrientationMode = {
        AUTO: "auto",
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape",
        LANDSCAPE_FLIPPED: "landscapeFlipped"
    }
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var i = function(e) {
            function i() {
                var t = e.call(this) || this;
                return t.textColor = 16777215, t.strokeColor = 0, t.size = 30, t.stroke = 0, t.bold = !1, t.italic = !1, t.fontFamily = "Arial", t.dirtyRender = !0, t.type = 2, t
            }
            return __extends(i, e), i.prototype.drawText = function(t, e, i, r) {
                this.drawData.push(t, e, i, r), this.renderCount++, this.dirtyRender = !0
            }, i.prototype.clean = function() {
                this.$texture && (t.WebGLUtils.deleteWebGLTexture(this.$texture), this.$texture = null, this.dirtyRender = !0)
            }, i.prototype.cleanBeforeRender = function() {
                e.prototype.cleanBeforeRender.call(this), this.dirtyRender = !0
            }, i
        }(e.RenderNode);
        e.TextNode = i, __reflect(i.prototype, "egret.sys.TextNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 1, e
            }
            return __extends(e, t), e
        }(t.Path2D);
        t.FillPath = e, __reflect(e.prototype, "egret.sys.FillPath")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 2, e
            }
            return __extends(e, t), e
        }(t.Path2D);
        t.GradientFillPath = e, __reflect(e.prototype, "egret.sys.GradientFillPath")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.$renderBuffer = new t.sys.RenderBuffer;
            var r = new t.BitmapData(i.$renderBuffer.surface);
            return r.$deleteSource = !1, i._setBitmapData(r), i
        }
        return __extends(i, e), i.prototype.drawToTexture = function(e, i, r) {
            if (void 0 === r && (r = 1), i && (0 == i.width || 0 == i.height)) return !1;
            var n = i || e.$getOriginalBounds();
            if (0 == n.width || 0 == n.height) return !1;
            r /= t.$TextureScaleFactor;
            var a = (n.x + n.width) * r,
                o = (n.y + n.height) * r;
            i && (a = n.width * r, o = n.height * r);
            var s = this.$renderBuffer;
            if (!s) return !1;
            if (s.resize(a, o), this.$bitmapData.width = a, this.$bitmapData.height = o, t.nativeRender) {
                egret_native.activateBuffer(this.$renderBuffer);
                var h = !1,
                    c = 0,
                    l = 0,
                    u = 0,
                    p = 0;
                i && (h = !0, c = i.x, l = i.y, u = i.width, p = i.height), egret_native.updateNativeRender(), egret_native.nrRenderDisplayObject(e.$nativeDisplayObject.id, r, h, c, l, u, p), egret_native.activateBuffer(null)
            } else {
                var d = t.Matrix.create();
                d.identity(), d.scale(r, r), i && d.translate(-i.x, -i.y), t.sys.systemRenderer.render(e, s, d, !0), t.Matrix.release(d)
            }
            return this.$initData(0, 0, a, o, 0, 0, a, o, a, o), !0
        }, i.prototype.getPixel32 = function(e, i) {
            var r;
            if (this.$renderBuffer) {
                var n = t.$TextureScaleFactor;
                e = Math.round(e / n), i = Math.round(i / n), r = this.$renderBuffer.getPixels(e, i, 1, 1)
            }
            return r
        }, i.prototype.dispose = function() {
            e.prototype.dispose.call(this), this.$renderBuffer = null
        }, i
    }(t.Texture);
    t.RenderTexture = e, __reflect(e.prototype, "egret.RenderTexture")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 3, e
            }
            return __extends(e, t), e
        }(t.Path2D);
        t.StrokePath = e, __reflect(e.prototype, "egret.sys.StrokePath")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t, e) {
        var i = null == e.italic ? t.italic : e.italic,
            r = null == e.bold ? t.bold : e.bold,
            n = null == e.size ? t.size : e.size,
            a = e.fontFamily || t.fontFamily,
            o = i ? "italic " : "normal ";
        return o += r ? "bold " : "normal ", o += n + "px " + a
    }

    function i(t, e) {
        var i = t >> 16,
            r = t >> 8 & 255,
            n = 255 & t;
        return "rgba(" + i + "," + r + "," + n + "," + e + ")"
    }

    function r(e, r, n, a, o, s) {
        var h;
        h = r == t.GradientType.LINEAR ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(0, 0, 0, 0, 0, 1);
        for (var c = n.length, l = 0; c > l; l++) h.addColorStop(o[l] / 255, i(n[l], a[l]));
        return h
    }

    function n(t, e, i) {
        void 0 === i && (i = 0);
        for (var r = 0, n = e.length; n > r; r++) t[r + i] = e[r]
    }

    function a(t, e, i, r) {
        for (var n = r[0], a = r[1], o = r[2], s = r[3], h = r[4], c = r[5], l = r[6], u = r[7], p = r[8], d = r[9], f = r[10], g = r[11], $ = r[12], y = r[13], v = r[14], b = r[15], m = r[16], x = r[17], T = r[18], _ = r[19], D = 0, O = e * i * 4; O > D; D += 4) {
            var w = t[D + 0],
                E = t[D + 1],
                R = t[D + 2],
                S = t[D + 3];
            t[D + 0] = n * w + a * E + o * R + s * S + h, t[D + 1] = c * w + l * E + u * R + p * S + d, t[D + 2] = f * w + g * E + $ * R + y * S + v, t[D + 3] = b * w + m * E + x * R + T * S + _
        }
    }

    function o(t, e, i, r, n) {
        s(t, e, i, r), h(t, e, i, n)
    }

    function s(t, e, i, r) {
        var a;
        a = _ ? new Uint8ClampedArray(4 * e) : new Array(4 * e);
        for (var o = 4 * e, s = 2 * r + 1, h = 0; i > h; h++) {
            for (var c = h * o, l = 0, u = 0, p = 0, d = 0, f = 0, g = 0, $ = 4 * -r, y = 4 * r + 4; y > $; $ += 4) {
                var v = c + $;
                c > v || v >= c + o || (f = t[v + 3], l += t[v + 0] * f, u += t[v + 1] * f, p += t[v + 2] * f, d += f)
            }
            for (var $ = c, y = c + o, b = 0, m = $ - 4 * r, x = $ + 4 * (r + 1); y > $; $ += 4, b += 4, x += 4, m += 4) 0 === d ? (a[b + 0] = 0, a[b + 1] = 0, a[b + 2] = 0, a[b + 3] = 0) : (a[b + 0] = l / d, a[b + 1] = u / d, a[b + 2] = p / d, a[b + 3] = d / s), f = t[x + 3], g = t[m + 3], f || 0 == f ? g || 0 == g ? (l += t[x + 0] * f - t[m + 0] * g, u += t[x + 1] * f - t[m + 1] * g, p += t[x + 2] * f - t[m + 2] * g, d += f - g) : (l += t[x + 0] * f, u += t[x + 1] * f, p += t[x + 2] * f, d += f) : (g || 0 == g) && (l += -t[m + 0] * g, u += -t[m + 1] * g, p += -t[m + 2] * g, d += -g);
            _ ? t.set(a, c) : n(t, a, c)
        }
    }

    function h(t, e, i, r) {
        var n;
        n = _ ? new Uint8ClampedArray(4 * i) : new Array(4 * i);
        for (var a = 4 * e, o = 2 * r + 1, s = 0; e > s; s++) {
            for (var h = 4 * s, c = 0, l = 0, u = 0, p = 0, d = 0, f = 0, g = -r * a, $ = r * a + a; $ > g; g += a) {
                var y = h + g;
                h > y || y >= h + i * a || (d = t[y + 3], c += t[y + 0] * d, l += t[y + 1] * d, u += t[y + 2] * d, p += d)
            }
            for (var g = h, $ = h + i * a, v = 0, b = h - r * a, m = h + (r + 1) * a; $ > g; g += a, v += 4, m += a, b += a) 0 === p ? (n[v + 0] = 0, n[v + 1] = 0, n[v + 2] = 0, n[v + 3] = 0) : (n[v + 0] = c / p, n[v + 1] = l / p, n[v + 2] = u / p, n[v + 3] = p / o), d = t[m + 3], f = t[b + 3], d || 0 == d ? f || 0 == f ? (c += t[m + 0] * d - t[b + 0] * f, l += t[m + 1] * d - t[b + 1] * f, u += t[m + 2] * d - t[b + 2] * f, p += d - f) : (c += t[m + 0] * d, l += t[m + 1] * d, u += t[m + 2] * d, p += d) : (f || 0 == f) && (c += -t[b + 0] * f, l += -t[b + 1] * f, u += -t[b + 2] * f, p += -f);
            for (var x = 4 * s, $ = x + i * a, T = 0; $ > x; x += a, T += 4) t[x + 0] = n[T + 0], t[x + 1] = n[T + 1], t[x + 2] = n[T + 2], t[x + 3] = n[T + 3]
        }
    }

    function c(t, e, i, r, a, s, h, c, f) {
        var g = l(t, r);
        u(g, e, i, h, c), o(g, e, i, a, s), p(g, f), d(g, t), t.set(g), _ ? t.set(g) : n(t, g)
    }

    function l(t, e) {
        e || (e = [0, 0, 0, 0]);
        var i;
        _ ? i = new Uint8ClampedArray(t) : (i = new Array(t.length), n(i, t));
        for (var r = e[0], a = e[1], o = e[2], s = e[3], h = 0, c = i.length; c > h; h += 4) {
            var l = i[h + 3];
            i[h + 0] = r * l, i[h + 1] = a * l, i[h + 2] = o * l, i[h + 3] = s * l
        }
        return i
    }

    function u(t, e, i, r, a) {
        var o, s, h = Math.sin(r) * a | 0,
            c = Math.cos(r) * a | 0;
        if (_) {
            o = new Int32Array(t.buffer), s = new Int32Array(o.length);
            for (var l = 0; i > l; l++) {
                var u = l + h;
                if (!(0 > u || u > i))
                    for (var p = 0; e > p; p++) {
                        var d = p + c;
                        0 > d || d > e || (s[u * e + d] = o[l * e + p])
                    }
            }
            o.set(s)
        } else {
            o = t, s = new Array(o.length);
            for (var l = 0; i > l; l++) {
                var u = l + h;
                if (!(0 > u || u > i))
                    for (var p = 0; e > p; p++) {
                        var d = p + c;
                        0 > d || d > e || (s[4 * (u * e + d) + 0] = o[4 * (l * e + p) + 0], s[4 * (u * e + d) + 1] = o[4 * (l * e + p) + 1], s[4 * (u * e + d) + 2] = o[4 * (l * e + p) + 2], s[4 * (u * e + d) + 3] = o[4 * (l * e + p) + 3])
                    }
            }
            n(o, s)
        }
    }

    function p(t, e) {
        for (var i = 0, r = t.length; r > i; i += 4) t[i + 3] *= e
    }

    function d(t, e) {
        for (var i = 0, r = t.length; r > i; i += 4) {
            var n = t[i + 0],
                a = t[i + 1],
                o = t[i + 2],
                s = t[i + 3] / 255,
                h = e[i + 0],
                c = e[i + 1],
                l = e[i + 2],
                u = e[i + 3] / 255;
            t[i + 0] = h + n * (1 - u), t[i + 1] = c + a * (1 - u), t[i + 2] = l + o * (1 - u), t[i + 3] = 255 * (u + s * (1 - u))
        }
    }

    function f(t, e, i) {
        return t * (1 - i) + e * i
    }

    function g(t, e, i, r, a, o, s, h, c, l, u, p) {
        var d;
        d = _ ? new Uint8ClampedArray(t.length) : new Array(t.length);
        for (var g, $, y = r[3], v = 0, b = 0, m = h * Math.cos(s), x = h * Math.sin(s), T = 7, D = 12, O = 3.141592653589793, w = a / T, E = o / T, R = 0; e > R; R++)
            for (var S = 0; i > S; S++) {
                for (var F = 0, P = S * e * 4 + 4 * R, C = 0, M = 0, j = t[P + 0] / 255, A = t[P + 1] / 255, B = t[P + 2] / 255, N = t[P + 3] / 255, k = 0; 2 * O >= k; k += 2 * O / D) {
                    g = Math.cos(k + F), $ = Math.sin(k + F);
                    for (var L = 0; T > L; L++) {
                        v = L * w * g, b = L * E * $;
                        var I = Math.round(R + v - m),
                            U = Math.round(S + b - x),
                            X = 0;
                        if (I >= e || 0 > I || 0 > U || U >= i) X = 0;
                        else {
                            var H = U * e * 4 + 4 * I;
                            X = t[H + 3] / 255
                        }
                        C += (T - L) * X, M += T - L
                    }
                }
                N = Math.max(N, 1e-4);
                var Y = C / M * c * y * (1 - l) * Math.max(Math.min(p, u), 1 - N),
                    W = (M - C) / M * c * y * l * N;
                N = Math.max(N * u * (1 - p), 1e-4);
                var G = W / (W + N),
                    z = f(j, r[0], G),
                    V = f(A, r[1], G),
                    q = f(B, r[2], G),
                    J = Y / (W + N + Y),
                    K = f(z, r[0], J),
                    Q = f(V, r[1], J),
                    Z = f(q, r[2], J),
                    te = Math.min(N + Y + W, 1);
                d[P + 0] = 255 * K, d[P + 1] = 255 * Q, d[P + 2] = 255 * Z, d[P + 3] = 255 * te
            }
        _ ? t.set(d) : n(t, d)
    }
    var $ = ["source-over", "lighter", "destination-out"],
        y = "source-over",
        v = "#000000",
        b = {
            none: "butt",
            square: "square",
            round: "round"
        },
        m = [],
        x = [],
        T = function() {
            function n() {
                this.nestLevel = 0, this.renderingMask = !1
            }
            return n.prototype.render = function(e, i, r, n) {
                this.nestLevel++;
                var a = i.context;
                a.transform(r.a, r.b, r.c, r.d, 0, 0);
                var o = this.drawDisplayObject(e, a, r.tx, r.ty, !0),
                    s = t.Matrix.create();
                if (r.$invertInto(s), a.transform(s.a, s.b, s.c, s.d, 0, 0), t.Matrix.release(s), this.nestLevel--, 0 === this.nestLevel) {
                    m.length > 6 && (m.length = 6);
                    for (var h = m.length, c = 0; h > c; c++) m[c].resize(0, 0)
                }
                return o
            }, n.prototype.drawDisplayObject = function(e, i, r, n, a) {
                var o, s = 0,
                    h = e.$displayList;
                if (h && !a ? ((e.$cacheDirty || e.$renderDirty || h.$canvasScaleX != t.sys.DisplayList.$canvasScaleX || h.$canvasScaleY != t.sys.DisplayList.$canvasScaleY) && (s += h.drawToSurface()), o = h.$renderNode) : o = e.$renderDirty ? e.$getRenderNode() : e.$renderNode, e.$cacheDirty = !1, o) {
                    switch (s++, i.$offsetX = r, i.$offsetY = n, o.type) {
                        case 1:
                            this.renderBitmap(o, i);
                            break;
                        case 2:
                            this.renderText(o, i);
                            break;
                        case 3:
                            this.renderGraphics(o, i);
                            break;
                        case 4:
                            this.renderGroup(o, i);
                            break;
                        case 5:
                            this.renderMesh(o, i);
                            break;
                        case 6:
                            this.renderNormalBitmap(o, i)
                    }
                    i.$offsetX = 0, i.$offsetY = 0
                }
                if (h && !a) return s;
                var c = e.$children;
                if (c)
                    for (var l = c.length, u = 0; l > u; u++) {
                        var p = c[u],
                            d = void 0,
                            f = void 0;
                        if (p.$useTranslate) {
                            var g = p.$getMatrix();
                            d = r + p.$x, f = n + p.$y, i.save(), i.transform(g.a, g.b, g.c, g.d, d, f), d = -p.$anchorOffsetX, f = -p.$anchorOffsetY
                        } else d = r + p.$x - p.$anchorOffsetX, f = n + p.$y - p.$anchorOffsetY;
                        var $ = void 0;
                        switch (1 != p.$alpha && ($ = i.globalAlpha, i.globalAlpha *= p.$alpha), p.$renderMode) {
                            case 1:
                                break;
                            case 2:
                                s += this.drawWithFilter(p, i, d, f);
                                break;
                            case 3:
                                s += this.drawWithClip(p, i, d, f);
                                break;
                            case 4:
                                s += this.drawWithScrollRect(p, i, d, f);
                                break;
                            default:
                                s += this.drawDisplayObject(p, i, d, f)
                        }
                        p.$useTranslate ? i.restore() : $ && (i.globalAlpha = $)
                    }
                return s
            }, n.prototype.drawWithFilter = function(t, e, i, r) {
                if (t.$children && 0 == t.$children.length && (!t.$renderNode || 0 == t.$renderNode.$getRenderCount())) return 0;
                var n, s = 0,
                    h = t.$filters,
                    l = h.length,
                    u = 0 !== t.$blendMode;
                u && (n = $[t.$blendMode], n || (n = y));
                var p = t.$getOriginalBounds(),
                    d = p.x,
                    f = p.y,
                    v = p.width,
                    b = p.height;
                if (0 >= v || 0 >= b) return s;
                var m = this.createRenderBuffer(v - d, b - f, !0),
                    T = m.context;
                if (s += t.$mask ? this.drawWithClip(t, T, -d, -f) : t.$scrollRect || t.$maskRect ? this.drawWithScrollRect(t, T, -d, -f) : this.drawDisplayObject(t, T, -d, -f), s > 0) {
                    u && (e.globalCompositeOperation = n), s++;
                    for (var _ = T.getImageData(0, 0, m.surface.width, m.surface.height), D = 0; l > D; D++) {
                        var O = h[D];
                        if ("colorTransform" == O.type) a(_.data, m.surface.width, m.surface.height, O.$matrix);
                        else if ("blur" == O.type) o(_.data, m.surface.width, m.surface.height, O.$blurX, O.$blurY);
                        else if ("glow" == O.type) {
                            var w = O.$red,
                                E = O.$green,
                                R = O.$blue,
                                S = O.$alpha;
                            O.$inner || O.$knockout || O.$hideObject ? g(_.data, m.surface.width, m.surface.height, [w / 255, E / 255, R / 255, S], O.$blurX, O.$blurY, O.$angle ? O.$angle / 180 * Math.PI : 0, O.$distance || 0, O.$strength, O.$inner ? 1 : 0, O.$knockout ? 0 : 1, O.$hideObject ? 1 : 0) : c(_.data, m.surface.width, m.surface.height, [w / 255, E / 255, R / 255, S], O.$blurX, O.$blurY, O.$angle ? O.$angle / 180 * Math.PI : 0, O.$distance || 0, O.$strength)
                        } else "custom" == O.type
                    }
                    T.putImageData(_, 0, 0), e.drawImage(m.surface, i + d, r + f), u && (e.globalCompositeOperation = y)
                }
                return x.push(m), s
            }, n.prototype.drawWithClip = function(e, i, r, n) {
                var a, o = 0,
                    s = 0 !== e.$blendMode;
                s && (a = $[e.$blendMode], a || (a = y));
                var h = e.$scrollRect ? e.$scrollRect : e.$maskRect,
                    c = e.$mask;
                if (c) {
                    var l = c.$getMatrix();
                    if (0 == l.a && 0 == l.b || 0 == l.c && 0 == l.d) return o
                }
                if (!(c || e.$children && 0 != e.$children.length)) return h && (i.save(), i.beginPath(), i.rect(h.x + r, h.y + n, h.width, h.height), i.clip()), s && (i.globalCompositeOperation = a), o += this.drawDisplayObject(e, i, r, n), s && (i.globalCompositeOperation = y), h && i.restore(), o;
                if (c) {
                    var u = c.$getRenderNode();
                    if ((!c.$children || 0 == c.$children.length) && u && 3 == u.type && 1 == u.drawData.length && 1 == u.drawData[0].type && 1 == u.drawData[0].fillAlpha) {
                        this.renderingMask = !0, i.save();
                        var p = t.Matrix.create();
                        p.copyFrom(c.$getConcatenatedMatrix()), c.$getConcatenatedMatrixAt(e, p), p.prepend(1, 0, 0, 1, r, n), i.transform(p.a, p.b, p.c, p.d, p.tx, p.ty);
                        var d = this.drawDisplayObject(c, i, 0, 0);
                        return this.renderingMask = !1, p.$invertInto(p), i.transform(p.a, p.b, p.c, p.d, p.tx, p.ty), t.Matrix.release(p), h && (i.beginPath(), i.rect(h.x + r, h.y + n, h.width, h.height), i.clip()), d += this.drawDisplayObject(e, i, r, n), i.restore(), d
                    }
                }
                var f = e.$getOriginalBounds(),
                    g = f.x,
                    v = f.y,
                    b = f.width,
                    x = f.height;
                if (0 >= b || 0 >= x) return o;
                var T = this.createRenderBuffer(b, x),
                    _ = T.context;
                if (!_) return o += this.drawDisplayObject(e, i, r, n);
                if (o += this.drawDisplayObject(e, _, -g, -v), c) {
                    var u = c.$getRenderNode(),
                        p = t.Matrix.create();
                    if (p.copyFrom(c.$getConcatenatedMatrix()), c.$getConcatenatedMatrixAt(e, p), p.translate(-g, -v), u && 1 == u.$getRenderCount() || c.$displayList) _.globalCompositeOperation = "destination-in", _.save(), _.setTransform(p.a, p.b, p.c, p.d, p.tx, p.ty), o += this.drawDisplayObject(c, _, 0, 0), _.restore();
                    else {
                        var D = this.createRenderBuffer(b, x),
                            O = D.context;
                        O.setTransform(p.a, p.b, p.c, p.d, p.tx, p.ty), o += this.drawDisplayObject(c, O, 0, 0), _.globalCompositeOperation = "destination-in", _.drawImage(D.surface, 0, 0), m.push(D)
                    }
                    t.Matrix.release(p)
                }
                return o > 0 && (o++, s && (i.globalCompositeOperation = a), h && (i.save(), i.beginPath(), i.rect(h.x + r, h.y + n, h.width, h.height), i.clip()), i.drawImage(T.surface, r + g, n + v), h && i.restore(), s && (i.globalCompositeOperation = y)), m.push(T), o
            }, n.prototype.drawWithScrollRect = function(t, e, i, r) {
                var n = 0,
                    a = t.$scrollRect ? t.$scrollRect : t.$maskRect;
                return a.isEmpty() ? n : (t.$scrollRect && (i -= a.x, r -= a.y), e.save(), e.beginPath(), e.rect(a.x + i, a.y + r, a.width, a.height), e.clip(), n += this.drawDisplayObject(t, e, i, r), e.restore(), n)
            }, n.prototype.drawNodeToBuffer = function(t, e, i, r) {
                var n = e.context;
                n.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), this.renderNode(t, n, r)
            }, n.prototype.drawDisplayToBuffer = function(t, e, i) {
                var r = e.context;
                i && r.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty);
                var n;
                n = t.$renderDirty ? t.$getRenderNode() : t.$renderNode;
                var a = 0;
                if (n) switch (a++, n.type) {
                    case 1:
                        this.renderBitmap(n, r);
                        break;
                    case 2:
                        this.renderText(n, r);
                        break;
                    case 3:
                        this.renderGraphics(n, r);
                        break;
                    case 4:
                        this.renderGroup(n, r);
                        break;
                    case 5:
                        this.renderMesh(n, r);
                        break;
                    case 6:
                        this.renderNormalBitmap(n, r)
                }
                var o = t.$children;
                if (o)
                    for (var s = o.length, h = 0; s > h; h++) {
                        var c = o[h];
                        switch (c.$renderMode) {
                            case 1:
                                break;
                            case 2:
                                a += this.drawWithFilter(c, r, 0, 0);
                                break;
                            case 3:
                                a += this.drawWithClip(c, r, 0, 0);
                                break;
                            case 4:
                                a += this.drawWithScrollRect(c, r, 0, 0);
                                break;
                            default:
                                a += this.drawDisplayObject(c, r, 0, 0)
                        }
                    }
                return a
            }, n.prototype.renderNode = function(t, e, i) {
                var r = 0;
                switch (t.type) {
                    case 1:
                        r = this.renderBitmap(t, e);
                        break;
                    case 2:
                        r = 1, this.renderText(t, e);
                        break;
                    case 3:
                        r = this.renderGraphics(t, e, i);
                        break;
                    case 4:
                        r = this.renderGroup(t, e);
                        break;
                    case 5:
                        r = this.renderMesh(t, e);
                        break;
                    case 6:
                        r += this.renderNormalBitmap(t, e)
                }
                return r
            }, n.prototype.renderNormalBitmap = function(t, e) {
                var i = t.image;
                if (!i || !i.source) return 0;
                if (e.$imageSmoothingEnabled != t.smoothing && (e.imageSmoothingEnabled = t.smoothing, e.$imageSmoothingEnabled = t.smoothing), t.rotated) {
                    var r = t.sourceX,
                        n = t.sourceY,
                        a = t.sourceW,
                        o = t.sourceH,
                        s = t.drawX,
                        h = t.drawY,
                        c = t.drawW,
                        l = t.drawH;
                    e.save(), e.transform(0, -1, 1, 0, 0, l), e.drawImage(i.source, r, n, o, a, s + e.$offsetX, h + e.$offsetY, l, c), e.restore()
                } else e.drawImage(i.source, t.sourceX, t.sourceY, t.sourceW, t.sourceH, t.drawX + e.$offsetX, t.drawY + e.$offsetY, t.drawW, t.drawH);
                return 1
            }, n.prototype.renderBitmap = function(t, e) {
                var i = t.image;
                if (!i || !i.source) return 0;
                e.$imageSmoothingEnabled != t.smoothing && (e.imageSmoothingEnabled = t.smoothing, e.$imageSmoothingEnabled = t.smoothing);
                var r, n, o = t.drawData,
                    s = o.length,
                    h = 0,
                    c = t.matrix,
                    l = t.blendMode,
                    u = t.alpha,
                    p = !1;
                c && (e.save(), p = !0, (0 != e.$offsetX || 0 != e.$offsetY) && (e.translate(e.$offsetX, e.$offsetY), r = e.$offsetX, n = e.$offsetY, e.$offsetX = e.$offsetY = 0), e.transform(c.a, c.b, c.c, c.d, c.tx, c.ty)), l && (e.globalCompositeOperation = $[l]);
                var d;
                u == u && (d = e.globalAlpha, e.globalAlpha *= u);
                var f = 0,
                    g = t.filter;
                if (g && 8 == s) {
                    var v = o[0],
                        b = o[1],
                        x = o[2],
                        T = o[3],
                        _ = o[4],
                        D = o[5],
                        O = o[6],
                        w = o[7];
                    t.rotated && (x = o[3], T = o[2], O = o[7], w = o[6]);
                    var E = this.createRenderBuffer(O, w),
                        R = E.context;
                    f++, t.rotated && e.transform(0, -1, 1, 0, 0, O), R.drawImage(i.source, v, b, x, T, 0, 0, O, w), f++;
                    var S = R.getImageData(0, 0, O, w);
                    a(S.data, O, w, g.$matrix), R.putImageData(S, 0, 0), e.drawImage(E.surface, 0, 0, O, w, _ + e.$offsetX, D + e.$offsetY, O, w), m.push(E)
                } else
                    for (; s > h;)
                        if (f++, t.rotated) {
                            var v = o[h++],
                                b = o[h++],
                                T = o[h++],
                                x = o[h++],
                                F = o[h++],
                                P = o[h++],
                                w = o[h++],
                                O = o[h++];
                            e.save(), e.transform(0, -1, 1, 0, 0, O), e.drawImage(i.source, v, b, x, T, F + e.$offsetX, P + e.$offsetY, O, w), e.restore()
                        } else e.drawImage(i.source, o[h++], o[h++], o[h++], o[h++], o[h++] + e.$offsetX, o[h++] + e.$offsetY, o[h++], o[h++]);
                return p ? e.restore() : (l && (e.globalCompositeOperation = y), u == u && (e.globalAlpha = d)), r && (e.$offsetX = r), n && (e.$offsetY = n), f
            }, n.prototype.renderMesh = function(t, e) {
                return 0
            }, n.prototype.renderText = function(i, r) {
                r.textAlign = "left", r.textBaseline = "middle", r.lineJoin = "round";
                for (var n = i.drawData, a = n.length, o = 0; a > o;) {
                    var s = n[o++],
                        h = n[o++],
                        c = n[o++],
                        l = n[o++];
                    r.font = e(i, l);
                    var u = null == l.textColor ? i.textColor : l.textColor,
                        p = null == l.strokeColor ? i.strokeColor : l.strokeColor,
                        d = null == l.stroke ? i.stroke : l.stroke;
                    r.fillStyle = t.toColorString(u), r.strokeStyle = t.toColorString(p), d && (r.lineWidth = 2 * d, r.strokeText(c, s + r.$offsetX, h + r.$offsetY)), r.fillText(c, s + r.$offsetX, h + r.$offsetY)
                }
            }, n.prototype.renderGraphics = function(t, e, n) {
                var a = t.drawData,
                    o = a.length;
                n = !!n;
                for (var s = 0; o > s; s++) {
                    var h = a[s];
                    switch (h.type) {
                        case 1:
                            var c = h;
                            e.fillStyle = n ? v : i(c.fillColor, c.fillAlpha), this.renderPath(h, e), this.renderingMask ? e.clip() : e.fill();
                            break;
                        case 2:
                            var l = h;
                            e.fillStyle = n ? v : r(e, l.gradientType, l.colors, l.alphas, l.ratios, l.matrix), e.save();
                            var u = l.matrix;
                            this.renderPath(h, e), e.transform(u.a, u.b, u.c, u.d, u.tx, u.ty), e.fill(), e.restore();
                            break;
                        case 3:
                            var p = h,
                                d = p.lineWidth;
                            e.lineWidth = d, e.strokeStyle = n ? v : i(p.lineColor, p.lineAlpha), e.lineCap = b[p.caps], e.lineJoin = p.joints, e.miterLimit = p.miterLimit, e.setLineDash && e.setLineDash(p.lineDash);
                            var f = 1 === d || 3 === d;
                            f && e.translate(.5, .5), this.renderPath(h, e), e.stroke(), f && e.translate(-.5, -.5)
                    }
                }
                return 0 == o ? 0 : 1
            }, n.prototype.renderPath = function(t, e) {
                e.beginPath();
                for (var i = t.$data, r = t.$commands, n = r.length, a = 0, o = 0; n > o; o++) {
                    var s = r[o];
                    switch (s) {
                        case 4:
                            e.bezierCurveTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY, i[a++] + e.$offsetX, i[a++] + e.$offsetY, i[a++] + e.$offsetX, i[a++] + e.$offsetY);
                            break;
                        case 3:
                            e.quadraticCurveTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY, i[a++] + e.$offsetX, i[a++] + e.$offsetY);
                            break;
                        case 2:
                            e.lineTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY);
                            break;
                        case 1:
                            e.moveTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY)
                    }
                }
            }, n.prototype.renderGroup = function(t, e) {
                var i, r, n = t.matrix,
                    a = !1;
                n && (e.save(), a = !0, (0 != e.$offsetX || 0 != e.$offsetY) && (e.translate(e.$offsetX, e.$offsetY), i = e.$offsetX, r = e.$offsetY, e.$offsetX = e.$offsetY = 0), e.transform(n.a, n.b, n.c, n.d, n.tx, n.ty));
                for (var o = 0, s = t.drawData, h = s.length, c = 0; h > c; c++) {
                    var l = s[c];
                    o += this.renderNode(l, e)
                }
                return a && e.restore(), i && (e.$offsetX = i), r && (e.$offsetY = r), o
            }, n.prototype.createRenderBuffer = function(e, i, r) {
                var n = r ? x.pop() : m.pop();
                return n ? n.resize(e, i, !0) : n = new t.sys.CanvasRenderBuffer(e, i), n
            }, n
        }();
    t.CanvasRenderer = T, __reflect(T.prototype, "egret.CanvasRenderer"), t.getFontString = e, t.getRGBAString = i;
    var _ = !1;
    try {
        _ = void 0 !== typeof Uint8ClampedArray
    } catch (D) {}
}(egret || (egret = {}));
var egret;
! function(t) {
    t.DeviceOrientation = null
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {
        t.WEB = "web", t.NATIVE = "native", t.RUNTIME2 = "runtime2", t.WXGAME = "wxgame", t.BAIDUGAME = "baidugame", t.QGAME = "qgame", t.OPPOGAME = "oppogame"
    }(e = t.RuntimeType || (t.RuntimeType = {}));
    var i = function() {
        function e() {}
        return e.language = "zh-CN", e.os = "Unknown", e.runtimeType = t.RuntimeType.WEB, e.engineVersion = "5.2.19", e.renderMode = "Unknown", e.boundingClientWidth = 0, e.boundingClientHeight = 0, e
    }();
    t.Capabilities = i, __reflect(i.prototype, "egret.Capabilities")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$graphics = new t.Graphics, i.$graphics.$setTarget(i), i
        }
        return __extends(i, e), i.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(8)
        }, Object.defineProperty(i.prototype, "graphics", {
            get: function() {
                return this.$graphics
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$measureContentBounds = function(t) {
            this.$graphics.$measureContentBounds(t)
        }, i.prototype.$hitTest = function(t, i) {
            var r = e.prototype.$hitTest.call(this, t, i);
            return r == this && (r = this.$graphics.$hitTest(t, i)), r
        }, i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this), this.$graphics && this.$graphics.$onRemoveFromStage()
        }, i
    }(t.DisplayObject);
    t.Shape = e, __reflect(e.prototype, "egret.Shape")
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t, e) {
        r[t] = e
    }

    function i(t) {
        return r[t]
    }
    var r = {};
    t.registerImplementation = e, t.getImplementation = i
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$graphics = new t.Graphics, i.$graphics.$setTarget(i), i
        }
        return __extends(i, e), i.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(9)
        }, Object.defineProperty(i.prototype, "graphics", {
            get: function() {
                return this.$graphics
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$hitTest = function(e, i) {
            if (!this.$visible) return null;
            var r = this.$getInvertedConcatenatedMatrix(),
                n = r.a * e + r.c * i + r.tx,
                a = r.b * e + r.d * i + r.ty,
                o = this.$scrollRect ? this.$scrollRect : this.$maskRect;
            if (o && !o.contains(n, a)) return null;
            if (this.$mask && !this.$mask.$hitTest(e, i)) return null;
            for (var s = this.$children, h = !1, c = null, l = s.length - 1; l >= 0; l--) {
                var u = s[l];
                if (!u.$maskedObject && (c = u.$hitTest(e, i))) {
                    if (h = !0, c.$touchEnabled) break;
                    c = null
                }
            }
            return c ? this.$touchChildren ? c : this : h ? this : (c = t.DisplayObject.prototype.$hitTest.call(this, e, i), c && (c = this.$graphics.$hitTest(e, i)), c)
        }, i.prototype.$measureContentBounds = function(t) {
            this.$graphics.$measureContentBounds(t)
        }, i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this), this.$graphics && this.$graphics.$onRemoveFromStage()
        }, i
    }(t.DisplayObjectContainer);
    t.Sprite = e, __reflect(e.prototype, "egret.Sprite")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e(e, i) {
            var r = t.call(this, e) || this;
            return r.firstCharHeight = 0, "string" == typeof i ? r.charList = r.parseConfig(i) : i && i.hasOwnProperty("frames") ? r.charList = i.frames : r.charList = {}, r
        }
        return __extends(e, t), e.prototype.getTexture = function(t) {
            var e = this._textureMap[t];
            if (!e) {
                var i = this.charList[t];
                if (!i) return null;
                e = this.createTexture(t, i.x, i.y, i.w, i.h, i.offX, i.offY, i.sourceW, i.sourceH), this._textureMap[t] = e
            }
            return e
        }, e.prototype.getConfig = function(t, e) {
            return this.charList[t] ? this.charList[t][e] : 0
        }, e.prototype._getFirstCharHeight = function() {
            if (0 == this.firstCharHeight)
                for (var t in this.charList) {
                    var e = this.charList[t];
                    if (e) {
                        var i = e.sourceH;
                        if (void 0 === i) {
                            var r = e.h;
                            void 0 === r && (r = 0);
                            var n = e.offY;
                            void 0 === n && (n = 0), i = r + n
                        }
                        if (0 >= i) continue;
                        this.firstCharHeight = i;
                        break
                    }
                }
            return this.firstCharHeight
        }, e.prototype.parseConfig = function(t) {
            t = t.split("\r\n").join("\n");
            for (var e = t.split("\n"), i = this.getConfigByKey(e[3], "count"), r = {}, n = 4; 4 + i > n; n++) {
                var a = e[n],
                    o = String.fromCharCode(this.getConfigByKey(a, "id")),
                    s = {};
                r[o] = s, s.x = this.getConfigByKey(a, "x"), s.y = this.getConfigByKey(a, "y"), s.w = this.getConfigByKey(a, "width"), s.h = this.getConfigByKey(a, "height"), s.offX = this.getConfigByKey(a, "xoffset"), s.offY = this.getConfigByKey(a, "yoffset"), s.xadvance = this.getConfigByKey(a, "xadvance")
            }
            return r
        }, e.prototype.getConfigByKey = function(t, e) {
            for (var i = t.split(" "), r = 0, n = i.length; n > r; r++) {
                var a = i[r];
                if (e == a.substring(0, e.length)) {
                    var o = a.substring(e.length + 1);
                    return parseInt(o)
                }
            }
            return 0
        }, e
    }(t.SpriteSheet);
    t.BitmapFont = e, __reflect(e.prototype, "egret.BitmapFont")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$smoothing = t.Bitmap.defaultSmoothing, i.$text = "", i.$textFieldWidth = 0 / 0, i.$textLinesChanged = !1, i.$textFieldHeight = 0 / 0, i.$font = null, i.$fontStringChanged = !1, i.$lineSpacing = 0, i.$letterSpacing = 0, i.$textAlign = t.HorizontalAlign.LEFT, i.$verticalAlign = t.VerticalAlign.TOP, i.$textWidth = 0 / 0, i.$textHeight = 0 / 0, i.$textOffsetX = 0, i.$textOffsetY = 0, i.$textStartX = 0, i.$textStartY = 0, i.textLines = [], i.$lineHeights = [], t.nativeRender || (i.$renderNode = new t.sys.BitmapNode), i
        }
        return __extends(i, e), i.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(11)
        }, Object.defineProperty(i.prototype, "smoothing", {
            get: function() {
                return this.$smoothing
            },
            set: function(e) {
                var i = this;
                if (e != i.$smoothing && (i.$smoothing = e, !t.nativeRender)) {
                    var r = i.$parent;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
                    var n = i.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this.$text
            },
            set: function(t) {
                this.$setText(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setText = function(t) {
            t = null == t ? "" : String(t);
            var e = this;
            return t == e.$text ? !1 : (e.$text = t, e.$invalidateContentBounds(), !0)
        }, i.prototype.$getWidth = function() {
            var t = this,
                e = t.$textFieldWidth;
            return isNaN(e) ? t.$getContentBounds().width : e
        }, i.prototype.$setWidth = function(t) {
            var e = this;
            return 0 > t || t == e.$textFieldWidth ? !1 : (e.$textFieldWidth = t, e.$invalidateContentBounds(), !0)
        }, i.prototype.$invalidateContentBounds = function() {
            this.$renderDirty = !0, this.$textLinesChanged = !0, this.$updateRenderNode()
        }, i.prototype.$getHeight = function() {
            var t = this,
                e = t.$textFieldHeight;
            return isNaN(e) ? t.$getContentBounds().height : e
        }, i.prototype.$setHeight = function(t) {
            var e = this;
            return 0 > t || t == e.$textFieldHeight ? !1 : (e.$textFieldHeight = t, e.$invalidateContentBounds(), !0)
        }, Object.defineProperty(i.prototype, "font", {
            get: function() {
                return this.$font
            },
            set: function(t) {
                this.$setFont(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setFont = function(t) {
            var e = this;
            return e.$font == t ? !1 : (e.$font = t, e.$fontStringChanged = !0, this.$invalidateContentBounds(), !0)
        }, Object.defineProperty(i.prototype, "lineSpacing", {
            get: function() {
                return this.$lineSpacing
            },
            set: function(t) {
                this.$setLineSpacing(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setLineSpacing = function(t) {
            var e = this;
            return e.$lineSpacing == t ? !1 : (e.$lineSpacing = t, e.$invalidateContentBounds(), !0)
        }, Object.defineProperty(i.prototype, "letterSpacing", {
            get: function() {
                return this.$letterSpacing
            },
            set: function(t) {
                this.$setLetterSpacing(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setLetterSpacing = function(t) {
            var e = this;
            return e.$letterSpacing == t ? !1 : (e.$letterSpacing = t, e.$invalidateContentBounds(), !0)
        }, Object.defineProperty(i.prototype, "textAlign", {
            get: function() {
                return this.$textAlign
            },
            set: function(t) {
                this.$setTextAlign(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setTextAlign = function(t) {
            var e = this;
            return e.$textAlign == t ? !1 : (e.$textAlign = t, e.$invalidateContentBounds(), !0)
        }, Object.defineProperty(i.prototype, "verticalAlign", {
            get: function() {
                return this.$verticalAlign
            },
            set: function(t) {
                this.$setVerticalAlign(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$setVerticalAlign = function(t) {
            var e = this;
            return e.$verticalAlign == t ? !1 : (e.$verticalAlign = t, e.$invalidateContentBounds(), !0)
        }, i.prototype.$updateRenderNode = function() {
            var e = this,
                r = this.$getTextLines(),
                n = r.length;
            if (0 == n) return void(t.nativeRender && e.$font && (e.$nativeDisplayObject.setDataToBitmapNode(e.$nativeDisplayObject.id, e.$font.$texture, []), e.$nativeDisplayObject.setWidth(0), e.$nativeDisplayObject.setHeight(0)));
            var a, o = [],
                s = this.$textLinesWidth,
                h = e.$font;
            t.nativeRender || (a = this.$renderNode, h.$texture && (a.image = h.$texture.$bitmapData), a.smoothing = e.$smoothing);
            for (var c = h._getFirstCharHeight(), l = Math.ceil(c * i.EMPTY_FACTOR), u = !isNaN(e.$textFieldHeight), p = e.$textWidth, d = e.$textFieldWidth, f = e.$textFieldHeight, g = e.$textAlign, $ = this.$textOffsetY + this.$textStartY, y = this.$lineHeights, v = 0; n > v; v++) {
                var b = y[v];
                if (u && v > 0 && $ + b > f) break;
                var m = r[v],
                    x = m.length,
                    T = this.$textOffsetX;
                if (g != t.HorizontalAlign.LEFT) {
                    var _ = d > p ? d : p;
                    g == t.HorizontalAlign.RIGHT ? T += _ - s[v] : g == t.HorizontalAlign.CENTER && (T += Math.floor((_ - s[v]) / 2))
                }
                for (var D = 0; x > D; D++) {
                    var O = m.charAt(D),
                        w = h.getTexture(O);
                    if (w) {
                        var E = w.$bitmapWidth,
                            R = w.$bitmapHeight;
                        t.nativeRender ? o.push(w.$bitmapX, w.$bitmapY, E, R, T + w.$offsetX, $ + w.$offsetY, w.$getScaleBitmapWidth(), w.$getScaleBitmapHeight(), w.$sourceWidth, w.$sourceHeight) : (a.imageWidth = w.$sourceWidth, a.imageHeight = w.$sourceHeight, a.drawImage(w.$bitmapX, w.$bitmapY, E, R, T + w.$offsetX, $ + w.$offsetY, w.$getScaleBitmapWidth(), w.$getScaleBitmapHeight())), T += (h.getConfig(O, "xadvance") || w.$getTextureWidth()) + e.$letterSpacing
                    } else " " == O ? T += l : t.$warn(1046, O)
                }
                $ += b + e.$lineSpacing
            }
            if (t.nativeRender) {
                e.$nativeDisplayObject.setDataToBitmapNode(e.$nativeDisplayObject.id, h.$texture, o);
                var S = e.$getContentBounds();
                e.$nativeDisplayObject.setWidth(S.width), e.$nativeDisplayObject.setHeight(S.height)
            }
        }, i.prototype.$measureContentBounds = function(t) {
            var e = this.$getTextLines();
            0 == e.length ? t.setEmpty() : t.setTo(this.$textOffsetX + this.$textStartX, this.$textOffsetY + this.$textStartY, this.$textWidth - this.$textOffsetX, this.$textHeight - this.$textOffsetY)
        }, Object.defineProperty(i.prototype, "textWidth", {
            get: function() {
                return this.$getTextLines(), this.$textWidth
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "textHeight", {
            get: function() {
                return this.$getTextLines(), this.$textHeight
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.$getTextLines = function() {
            function e(t) {
                return b && n.length > 0 && f > b ? !1 : (f += c + u, s || h || (l -= p), n.push(t), o.push(c), a.push(l), d = Math.max(l, d), !0)
            }
            var r = this;
            if (!r.$textLinesChanged) return r.textLines;
            var n = [];
            r.textLines = n;
            var a = [];
            r.$textLinesWidth = a, r.$textLinesChanged = !1;
            var o = [];
            if (r.$lineHeights = o, !r.$text || !r.$font) return r.$textWidth = 0, r.$textHeight = 0, n;
            for (var s, h, c, l, u = r.$lineSpacing, p = r.$letterSpacing, d = 0, f = 0, g = 0, $ = 0, y = !isNaN(r.$textFieldWidth), v = r.$textFieldWidth, b = r.$textFieldHeight, m = r.$font, x = m._getFirstCharHeight(), T = Math.ceil(x * i.EMPTY_FACTOR), _ = r.$text, D = _.split(/(?:\r\n|\r|\n)/), O = D.length, w = !0, E = 0; O > E; E++) {
                var R = D[E],
                    S = R.length;
                c = 0, l = 0, s = !0, h = !1;
                for (var F = 0; S > F; F++) {
                    s || (l += p);
                    var P = R.charAt(F),
                        C = void 0,
                        M = void 0,
                        j = 0,
                        A = 0,
                        B = m.getTexture(P);
                    if (B) C = B.$getTextureWidth(), M = B.$getTextureHeight(), j = B.$offsetX, A = B.$offsetY;
                    else {
                        if (" " != P) {
                            t.$warn(1046, P), s && (s = !1);
                            continue
                        }
                        C = T, M = x
                    }
                    if (s && (s = !1), w && (w = !1), y && F > 0 && l + C > v) {
                        if (!e(R.substring(0, F))) break;
                        R = R.substring(F), S = R.length, F = 0, l = F == S - 1 ? C : m.getConfig(P, "xadvance") || C, c = M
                    } else l += F == S - 1 ? C : m.getConfig(P, "xadvance") || C, c = Math.max(M, c)
                }
                if (b && E > 0 && f > b) break;
                if (h = !0, !e(R)) break
            }
            f -= u, r.$textWidth = d, r.$textHeight = f, this.$textOffsetX = g, this.$textOffsetY = $, this.$textStartX = 0, this.$textStartY = 0;
            var N;
            return v > d && (N = r.$textAlign, N == t.HorizontalAlign.RIGHT ? this.$textStartX = v - d : N == t.HorizontalAlign.CENTER && (this.$textStartX = Math.floor((v - d) / 2))), b > f && (N = r.$verticalAlign, N == t.VerticalAlign.BOTTOM ? this.$textStartY = b - f : N == t.VerticalAlign.MIDDLE && (this.$textStartY = Math.floor((b - f) / 2))), n
        }, i.EMPTY_FACTOR = .33, i
    }(t.DisplayObject);
    t.BitmapText = e, __reflect(e.prototype, "egret.BitmapText")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.LEFT = "left", t.RIGHT = "right", t.CENTER = "center", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t
    }();
    t.HorizontalAlign = e, __reflect(e.prototype, "egret.HorizontalAlign")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function e() {
            this.replaceArr = [], this.resutlArr = [], this.initReplaceArr()
        }
        return e.prototype.initReplaceArr = function() {
            this.replaceArr = [], this.replaceArr.push([/&lt;/g, "<"]), this.replaceArr.push([/&gt;/g, ">"]), this.replaceArr.push([/&amp;/g, "&"]), this.replaceArr.push([/&quot;/g, '"']), this.replaceArr.push([/&apos;/g, "'"])
        }, e.prototype.replaceSpecial = function(t) {
            for (var e = 0; e < this.replaceArr.length; e++) {
                var i = this.replaceArr[e][0],
                    r = this.replaceArr[e][1];
                t = t.replace(i, r)
            }
            return t
        }, e.prototype.parse = function(e) {
            this.stackArray = [], this.resutlArr = [];
            for (var i = 0, r = e.length; r > i;) {
                var n = e.indexOf("<", i);
                if (0 > n) this.addToResultArr(e.substring(i)), i = r;
                else {
                    this.addToResultArr(e.substring(i, n));
                    var a = e.indexOf(">", n); - 1 == a ? (t.$error(1038), a = n) : "/" == e.charAt(n + 1) ? this.stackArray.pop() : this.addToArray(e.substring(n + 1, a)), i = a + 1
                }
            }
            return this.resutlArr
        }, e.prototype.parser = function(t) {
            return this.parse(t)
        }, e.prototype.addToResultArr = function(t) {
            "" != t && (t = this.replaceSpecial(t), this.stackArray.length > 0 ? this.resutlArr.push({
                text: t,
                style: this.stackArray[this.stackArray.length - 1]
            }) : this.resutlArr.push({
                text: t
            }))
        }, e.prototype.changeStringToObject = function(t) {
            t = t.trim();
            var e = {},
                i = [];
            if ("i" == t.charAt(0) || "b" == t.charAt(0) || "u" == t.charAt(0)) this.addProperty(e, t, "true");
            else if (i = t.match(/^(font|a)\s/)) {
                t = t.substring(i[0].length).trim();
                for (var r = 0, n = void 0; n = t.match(this.getHeadReg());) {
                    var a = n[0],
                        o = "";
                    t = t.substring(a.length).trim(), '"' == t.charAt(0) ? (r = t.indexOf('"', 1), o = t.substring(1, r), r += 1) : "'" == t.charAt(0) ? (r = t.indexOf("'", 1), o = t.substring(1, r), r += 1) : (o = t.match(/(\S)+/)[0], r = o.length), this.addProperty(e, a.substring(0, a.length - 1).trim(), o.trim()), t = t.substring(r).trim()
                }
            }
            return e
        }, e.prototype.getHeadReg = function() {
            return /^(color|textcolor|strokecolor|stroke|b|bold|i|italic|u|size|fontfamily|href|target)(\s)*=/
        }, e.prototype.addProperty = function(t, e, i) {
            switch (e.toLowerCase()) {
                case "color":
                case "textcolor":
                    i = i.replace(/#/, "0x"), t.textColor = parseInt(i);
                    break;
                case "strokecolor":
                    i = i.replace(/#/, "0x"), t.strokeColor = parseInt(i);
                    break;
                case "stroke":
                    t.stroke = parseInt(i);
                    break;
                case "b":
                case "bold":
                    t.bold = "true" == i;
                    break;
                case "u":
                    t.underline = "true" == i;
                    break;
                case "i":
                case "italic":
                    t.italic = "true" == i;
                    break;
                case "size":
                    t.size = parseInt(i);
                    break;
                case "fontfamily":
                    t.fontFamily = i;
                    break;
                case "href":
                    t.href = this.replaceSpecial(i);
                    break;
                case "target":
                    t.target = this.replaceSpecial(i)
            }
        }, e.prototype.addToArray = function(t) {
            var e = this.changeStringToObject(t);
            if (0 == this.stackArray.length) this.stackArray.push(e);
            else {
                var i = this.stackArray[this.stackArray.length - 1];
                for (var r in i) null == e[r] && (e[r] = i[r]);
                this.stackArray.push(e)
            }
        }, e
    }();
    t.HtmlTextParser = e, __reflect(e.prototype, "egret.HtmlTextParser")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.stageTextAdded = !1, t._text = null, t._isFocus = !1, t
        }
        return __extends(i, e), i.prototype.init = function(e) {
            this._text = e, this.stageText = new t.StageText, this.stageText.$setTextField(this._text)
        }, i.prototype._addStageText = function() {
            this.stageTextAdded || (this._text.$inputEnabled || (this._text.$touchEnabled = !0), this.tempStage = this._text.stage, this.stageText.$addToStage(), this.stageText.addEventListener("updateText", this.updateTextHandler, this), this._text.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this), this.stageText.addEventListener("blur", this.blurHandler, this), this.stageText.addEventListener("focus", this.focusHandler, this), this.stageTextAdded = !0)
        }, i.prototype._removeStageText = function() {
            this.stageTextAdded && (this._text.$inputEnabled || (this._text.$touchEnabled = !1), this.stageText.$removeFromStage(), this.stageText.removeEventListener("updateText", this.updateTextHandler, this), this._text.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this), this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), this.stageText.removeEventListener("blur", this.blurHandler, this), this.stageText.removeEventListener("focus", this.focusHandler, this), this.stageTextAdded = !1)
        }, i.prototype._getText = function() {
            return this.stageText.$getText()
        }, i.prototype._setText = function(t) {
            this.stageText.$setText(t)
        }, i.prototype._setColor = function(t) {
            this.stageText.$setColor(t)
        }, i.prototype.focusHandler = function(e) {
            this._isFocus || (this._isFocus = !0, e.showing || this._text.$setIsTyping(!0), this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_IN, !0)))
        }, i.prototype.blurHandler = function(e) {
            this._isFocus && (this._isFocus = !1, this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), this._text.$setIsTyping(!1), this.stageText.$onBlur(), this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_OUT, !0)))
        }, i.prototype.onMouseDownHandler = function(t) {
            this.$onFocus()
        }, i.prototype.$onFocus = function() {
            var e = this;
            this._text.visible && (this._isFocus || (this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), t.callLater(function() {
                e.tempStage.addEventListener(t.TouchEvent.TOUCH_BEGIN, e.onStageDownHandler, e)
            }, this), t.nativeRender && this.stageText.$setText(this._text.$TextField[13]), this.stageText.$show()))
        }, i.prototype.onStageDownHandler = function(t) {
            t.$target != this._text && this.stageText.$hide()
        }, i.prototype.updateTextHandler = function(e) {
            var i, r, n = this._text.$TextField,
                a = this.stageText.$getText(),
                o = !1;
            null != n[35] && (i = new RegExp("[" + n[35] + "]", "g"), r = a.match(i), a = r ? r.join("") : "", o = !0), null != n[36] && (i = new RegExp("[^" + n[36] + "]", "g"), r = a.match(i), a = r ? r.join("") : "", o = !0), o && this.stageText.$getText() != a && this.stageText.$setText(a), this.resetText(), this._text.dispatchEvent(new t.Event(t.Event.CHANGE, !0))
        }, i.prototype.resetText = function() {
            this._text.$setBaseText(this.stageText.$getText())
        }, i.prototype._hideInput = function() {
            this.stageText.$removeFromStage()
        }, i.prototype.updateInput = function() {
            !this._text.$visible && this.stageText && this._hideInput()
        }, i.prototype._updateProperties = function() {
            return this._isFocus ? (this.stageText.$resetStageText(), void this.updateInput()) : (this.stageText.$setText(this._text.$TextField[13]), this.stageText.$resetStageText(), void this.updateInput())
        }, i
    }(t.HashObject);
    t.InputController = e, __reflect(e.prototype, "egret.InputController")
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e, i, n) {
        n = n || {};
        var a = null == n.italic ? i[16] : n.italic,
            o = null == n.bold ? i[15] : n.bold,
            s = null == n.size ? i[0] : n.size,
            h = n.fontFamily || i[8] || r.default_fontFamily;
        return t.sys.measureText(e, h, s, o, a)
    }
    var i = new RegExp("(?=[\\u00BF-\\u1FFF\\u2C00-\\uD7FF]|\\b|\\s)(?![。，！、》…）)}”】\\.\\,\\!\\?\\]\\:])"),
        r = function(r) {
            function n() {
                var e = r.call(this) || this;
                e.$inputEnabled = !1, e.inputUtils = null, e.$graphicsNode = null, e.isFlow = !1, e.textArr = [], e.linesArr = [], e.$isTyping = !1;
                var i = new t.sys.TextNode;
                return i.fontFamily = n.default_fontFamily, e.textNode = i, e.$renderNode = i, e.$TextField = {
                    0: n.default_size,
                    1: 0,
                    2: n.default_textColor,
                    3: 0 / 0,
                    4: 0 / 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: n.default_fontFamily,
                    9: "left",
                    10: "top",
                    11: "#ffffff",
                    12: "",
                    13: "",
                    14: [],
                    15: !1,
                    16: !1,
                    17: !0,
                    18: !1,
                    19: !1,
                    20: !1,
                    21: 0,
                    22: 0,
                    23: 0,
                    24: t.TextFieldType.DYNAMIC,
                    25: 0,
                    26: "#000000",
                    27: 0,
                    28: -1,
                    29: 0,
                    30: !1,
                    31: !1,
                    32: 0,
                    33: !1,
                    34: 16777215,
                    35: null,
                    36: null,
                    37: t.TextFieldInputType.TEXT,
                    38: !1
                }, e
            }
            return __extends(n, r), n.prototype.createNativeDisplayObject = function() {
                this.$nativeDisplayObject = new egret_native.NativeDisplayObject(7)
            }, n.prototype.isInput = function() {
                return this.$TextField[24] == t.TextFieldType.INPUT
            }, n.prototype.$setTouchEnabled = function(t) {
                r.prototype.$setTouchEnabled.call(this, t), this.isInput() && (this.$inputEnabled = !0)
            }, Object.defineProperty(n.prototype, "fontFamily", {
                get: function() {
                    return this.$TextField[8]
                },
                set: function(t) {
                    this.$setFontFamily(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setFontFamily = function(e) {
                var i = this.$TextField;
                return i[8] == e ? !1 : (i[8] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setFontFamily(e), !0)
            }, Object.defineProperty(n.prototype, "size", {
                get: function() {
                    return this.$TextField[0]
                },
                set: function(t) {
                    this.$setSize(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setSize = function(e) {
                var i = this.$TextField;
                return i[0] == e ? !1 : (i[0] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setFontSize(e), !0)
            }, Object.defineProperty(n.prototype, "bold", {
                get: function() {
                    return this.$TextField[15]
                },
                set: function(t) {
                    this.$setBold(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setBold = function(e) {
                var i = this.$TextField;
                return e == i[15] ? !1 : (i[15] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setBold(e), !0)
            }, Object.defineProperty(n.prototype, "italic", {
                get: function() {
                    return this.$TextField[16]
                },
                set: function(t) {
                    this.$setItalic(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setItalic = function(e) {
                var i = this.$TextField;
                return e == i[16] ? !1 : (i[16] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setItalic(e), !0)
            }, n.prototype.invalidateFontString = function() {
                this.$TextField[17] = !0, this.$invalidateTextField()
            }, Object.defineProperty(n.prototype, "textAlign", {
                get: function() {
                    return this.$TextField[9]
                },
                set: function(t) {
                    this.$setTextAlign(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setTextAlign = function(e) {
                var i = this.$TextField;
                return i[9] == e ? !1 : (i[9] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setTextAlign(e), !0)
            }, Object.defineProperty(n.prototype, "verticalAlign", {
                get: function() {
                    return this.$TextField[10]
                },
                set: function(t) {
                    this.$setVerticalAlign(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setVerticalAlign = function(e) {
                var i = this.$TextField;
                return i[10] == e ? !1 : (i[10] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setVerticalAlign(e), !0)
            }, Object.defineProperty(n.prototype, "lineSpacing", {
                get: function() {
                    return this.$TextField[1]
                },
                set: function(t) {
                    this.$setLineSpacing(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setLineSpacing = function(e) {
                var i = this.$TextField;
                return i[1] == e ? !1 : (i[1] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setLineSpacing(e), !0)
            }, Object.defineProperty(n.prototype, "textColor", {
                get: function() {
                    return this.$TextField[2]
                },
                set: function(t) {
                    this.$setTextColor(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setTextColor = function(e) {
                var i = this.$TextField;
                return i[2] == e ? !1 : (i[2] = e, this.inputUtils && this.inputUtils._setColor(this.$TextField[2]), this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setTextColor(e), !0)
            }, Object.defineProperty(n.prototype, "wordWrap", {
                get: function() {
                    return this.$TextField[19]
                },
                set: function(t) {
                    this.$setWordWrap(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setWordWrap = function(e) {
                var i = this.$TextField;
                e != i[19] && (i[20] || (i[19] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setWordWrap(e)))
            }, Object.defineProperty(n.prototype, "type", {
                get: function() {
                    return this.$TextField[24]
                },
                set: function(t) {
                    this.$setType(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setType = function(e) {
                var i = this.$TextField;
                return i[24] != e ? (i[24] = e, t.nativeRender && this.$nativeDisplayObject.setType(e), e == t.TextFieldType.INPUT ? (isNaN(i[3]) && this.$setWidth(100), isNaN(i[4]) && this.$setHeight(30), this.$setTouchEnabled(!0), null == this.inputUtils && (this.inputUtils = new t.InputController), this.inputUtils.init(this), this.$invalidateTextField(), this.$stage && this.inputUtils._addStageText()) : (this.inputUtils && (this.inputUtils._removeStageText(), this.inputUtils = null), this.$setTouchEnabled(!1)), !0) : !1
            }, Object.defineProperty(n.prototype, "inputType", {
                get: function() {
                    return this.$TextField[37]
                },
                set: function(e) {
                    this.$TextField[37] != e && (this.$TextField[37] = e, t.nativeRender && this.$nativeDisplayObject.setInputType(e))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "text", {
                get: function() {
                    return this.$getText()
                },
                set: function(t) {
                    this.$setText(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$getText = function() {
                return this.$TextField[24] == t.TextFieldType.INPUT ? this.inputUtils._getText() : this.$TextField[13]
            }, n.prototype.$setBaseText = function(e) {
                e = null == e ? "" : e.toString(), this.isFlow = !1;
                var i = this.$TextField;
                if (i[13] != e) {
                    this.$invalidateTextField(), i[13] = e;
                    var r = "";
                    return r = i[20] ? this.changeToPassText(e) : e, t.nativeRender && this.$nativeDisplayObject.setText(r), this.setMiddleStyle([{
                        text: r
                    }]), !0
                }
                return !1
            }, n.prototype.$setText = function(t) {
                null == t && (t = "");
                var e = this.$setBaseText(t);
                return this.inputUtils && this.inputUtils._setText(this.$TextField[13]), e
            }, Object.defineProperty(n.prototype, "displayAsPassword", {
                get: function() {
                    return this.$TextField[20]
                },
                set: function(t) {
                    this.$setDisplayAsPassword(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setDisplayAsPassword = function(e) {
                var i = this.$TextField;
                if (i[20] != e) {
                    i[20] = e, this.$invalidateTextField();
                    var r = "";
                    return r = e ? this.changeToPassText(i[13]) : i[13], t.nativeRender && this.$nativeDisplayObject.setText(r), this.setMiddleStyle([{
                        text: r
                    }]), !0
                }
                return !1
            }, Object.defineProperty(n.prototype, "strokeColor", {
                get: function() {
                    return this.$TextField[25]
                },
                set: function(t) {
                    this.$setStrokeColor(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setStrokeColor = function(e) {
                var i = this.$TextField;
                return i[25] != e ? (this.$invalidateTextField(), i[25] = e, t.nativeRender && this.$nativeDisplayObject.setStrokeColor(e), i[26] = t.toColorString(e), !0) : !1
            }, Object.defineProperty(n.prototype, "stroke", {
                get: function() {
                    return this.$TextField[27]
                },
                set: function(t) {
                    this.$setStroke(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setStroke = function(e) {
                return this.$TextField[27] != e ? (this.$invalidateTextField(), this.$TextField[27] = e, t.nativeRender && this.$nativeDisplayObject.setStroke(e), !0) : !1
            }, Object.defineProperty(n.prototype, "maxChars", {
                get: function() {
                    return this.$TextField[21]
                },
                set: function(t) {
                    this.$setMaxChars(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setMaxChars = function(e) {
                return this.$TextField[21] != e ? (this.$TextField[21] = e, t.nativeRender && this.$nativeDisplayObject.setMaxChars(e), !0) : !1
            }, Object.defineProperty(n.prototype, "scrollV", {
                get: function() {
                    return Math.min(Math.max(this.$TextField[28], 1), this.maxScrollV)
                },
                set: function(e) {
                    e = Math.max(e, 1), e != this.$TextField[28] && (this.$TextField[28] = e, t.nativeRender && this.$nativeDisplayObject.setScrollV(e), this.$invalidateTextField())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "maxScrollV", {
                get: function() {
                    return this.$getLinesArr(), Math.max(this.$TextField[29] - t.TextFieldUtils.$getScrollNum(this) + 1, 1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "selectionBeginIndex", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "selectionEndIndex", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "caretIndex", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setSelection = function(t, e) {
                return !1
            }, n.prototype.$getLineHeight = function() {
                return this.$TextField[1] + this.$TextField[0]
            }, Object.defineProperty(n.prototype, "numLines", {
                get: function() {
                    return this.$getLinesArr(), this.$TextField[29]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "multiline", {
                get: function() {
                    return this.$TextField[30]
                },
                set: function(t) {
                    this.$setMultiline(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setMultiline = function(e) {
                return this.$TextField[30] == e ? !1 : (this.$TextField[30] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setMultiline(e), !0)
            }, Object.defineProperty(n.prototype, "restrict", {
                get: function() {
                    var t = this.$TextField,
                        e = null;
                    return null != t[35] && (e = t[35]), null != t[36] && (null == e && (e = ""), e += "^" + t[36]), e
                },
                set: function(t) {
                    var e = this.$TextField;
                    if (null == t) e[35] = null, e[36] = null;
                    else {
                        for (var i = -1; i < t.length && (i = t.indexOf("^", i), 0 != i) && i > 0 && "\\" == t.charAt(i - 1);) i++;
                        0 == i ? (e[35] = null, e[36] = t.substring(i + 1)) : i > 0 ? (e[35] = t.substring(0, i), e[36] = t.substring(i + 1)) : (e[35] = t, e[36] = null)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setWidth = function(e) {
                t.nativeRender && this.$nativeDisplayObject.setTextFieldWidth(e);
                var i = this.$TextField;
                if (isNaN(e)) {
                    if (isNaN(i[3])) return !1;
                    i[3] = 0 / 0
                } else {
                    if (i[3] == e) return !1;
                    i[3] = e
                }
                return e = +e, 0 > e ? !1 : (this.$invalidateTextField(), !0)
            }, n.prototype.$setHeight = function(e) {
                t.nativeRender && this.$nativeDisplayObject.setTextFieldHeight(e);
                var i = this.$TextField;
                if (isNaN(e)) {
                    if (isNaN(i[4])) return !1;
                    i[4] = 0 / 0
                } else {
                    if (i[4] == e) return !1;
                    i[4] = e
                }
                return e = +e, 0 > e ? !1 : (this.$invalidateTextField(), !0)
            }, n.prototype.$getWidth = function() {
                var t = this.$TextField;
                return isNaN(t[3]) ? this.$getContentBounds().width : t[3]
            }, n.prototype.$getHeight = function() {
                var t = this.$TextField;
                return isNaN(t[4]) ? this.$getContentBounds().height : t[4]
            }, Object.defineProperty(n.prototype, "border", {
                get: function() {
                    return this.$TextField[31]
                },
                set: function(t) {
                    this.$setBorder(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setBorder = function(e) {
                e = !!e, this.$TextField[31] != e && (this.$TextField[31] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBorder(e))
            }, Object.defineProperty(n.prototype, "borderColor", {
                get: function() {
                    return this.$TextField[32]
                },
                set: function(t) {
                    this.$setBorderColor(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setBorderColor = function(e) {
                e = +e || 0, this.$TextField[32] != e && (this.$TextField[32] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBorderColor(e))
            }, Object.defineProperty(n.prototype, "background", {
                get: function() {
                    return this.$TextField[33]
                },
                set: function(t) {
                    this.$setBackground(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setBackground = function(e) {
                this.$TextField[33] != e && (this.$TextField[33] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBackground(e))
            }, Object.defineProperty(n.prototype, "backgroundColor", {
                get: function() {
                    return this.$TextField[34]
                },
                set: function(t) {
                    this.$setBackgroundColor(t)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.$setBackgroundColor = function(e) {
                this.$TextField[34] != e && (this.$TextField[34] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBackgroundColor(e))
            }, n.prototype.fillBackground = function(e) {
                var i = this.$graphicsNode;
                i && i.clear();
                var r = this.$TextField;
                if (r[33] || r[31] || e && e.length > 0) {
                    if (!i)
                        if (i = this.$graphicsNode = new t.sys.GraphicsNode, t.nativeRender) this.$renderNode = this.textNode;
                        else {
                            var n = new t.sys.GroupNode;
                            n.addNode(i), n.addNode(this.textNode), this.$renderNode = n
                        } var a = void 0,
                        o = void 0;
                    if (r[33] && (a = i.beginFill(r[34]), a.drawRect(0, 0, this.$getWidth(), this.$getHeight())), r[31] && (o = i.lineStyle(1, r[32]), o.drawRect(0, 0, this.$getWidth() - 1, this.$getHeight() - 1)), e && e.length > 0)
                        for (var s = r[2], h = -1, c = e.length, l = 0; c > l; l += 4) {
                            var u = e[l],
                                p = e[l + 1],
                                d = e[l + 2],
                                f = e[l + 3] || s;
                            (0 > h || h != f) && (h = f, o = i.lineStyle(2, f, 1, t.CapsStyle.NONE)), o.moveTo(u, p), o.lineTo(u + d, p)
                        }
                }
                if (i) {
                    var g = this.$getRenderBounds();
                    i.x = g.x, i.y = g.y, i.width = g.width, i.height = g.height, t.Rectangle.release(g)
                }
            }, n.prototype.setFocus = function() {
                this.type == t.TextFieldType.INPUT && this.$stage && this.inputUtils.$onFocus()
            }, n.prototype.$onRemoveFromStage = function() {
                r.prototype.$onRemoveFromStage.call(this), this.removeEvent(), this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._removeStageText(), this.textNode && (this.textNode.clean(), t.nativeRender && egret_native.NativeDisplayObject.disposeTextData(this))
            }, n.prototype.$onAddToStage = function(e, i) {
                r.prototype.$onAddToStage.call(this, e, i), this.addEvent(), this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._addStageText()
            }, n.prototype.$invalidateTextField = function() {
                var e = this;
                if (e.$renderDirty = !0, e.$TextField[18] = !0, e.$TextField[38] = !0, t.nativeRender);
                else {
                    var i = e.$parent;
                    i && !i.$cacheDirty && (i.$cacheDirty = !0, i.$cacheDirtyUp());
                    var r = e.$maskedObject;
                    r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp())
                }
            }, n.prototype.$getRenderBounds = function() {
                var e = this.$getContentBounds(),
                    i = t.Rectangle.create();
                i.copyFrom(e), this.$TextField[31] && (i.width += 2, i.height += 2);
                var r = 2 * this.$TextField[27];
                return r > 0 && (i.width += 2 * r, i.height += 2 * r), i.x -= r + 2, i.y -= r + 2, i.width = Math.ceil(i.width) + 4, i.height = Math.ceil(i.height) + 4, i
            }, n.prototype.$measureContentBounds = function(e) {
                this.$getLinesArr();
                var i = 0,
                    r = 0;
                t.nativeRender ? (i = egret_native.nrGetTextFieldWidth(this.$nativeDisplayObject.id), r = egret_native.nrGetTextFieldHeight(this.$nativeDisplayObject.id)) : (i = isNaN(this.$TextField[3]) ? this.$TextField[5] : this.$TextField[3], r = isNaN(this.$TextField[4]) ? t.TextFieldUtils.$getTextHeight(this) : this.$TextField[4]), e.setTo(0, 0, i, r)
            }, n.prototype.$updateRenderNode = function() {
                if (this.$TextField[24] == t.TextFieldType.INPUT) {
                    if (this.inputUtils._updateProperties(), this.$isTyping) return void this.fillBackground()
                } else if (0 == this.$TextField[3]) {
                    var e = this.$graphicsNode;
                    return void(e && e.clear())
                }
                var i = this.drawText();
                this.fillBackground(i);
                var r = this.$getRenderBounds(),
                    n = this.textNode;
                n.x = r.x, n.y = r.y, n.width = Math.ceil(r.width), n.height = Math.ceil(r.height), t.Rectangle.release(r)
            }, Object.defineProperty(n.prototype, "textFlow", {
                get: function() {
                    return this.textArr
                },
                set: function(e) {
                    this.isFlow = !0;
                    var i = "";
                    null == e && (e = []);
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        i += n.text
                    }
                    this.$TextField[20] ? this.$setBaseText(i) : (this.$TextField[13] = i, this.setMiddleStyle(e), t.nativeRender && this.$nativeDisplayObject.setTextFlow(e))
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.changeToPassText = function(t) {
                if (this.$TextField[20]) {
                    for (var e = "", i = 0, r = t.length; r > i; i++) switch (t.charAt(i)) {
                        case "\n":
                            e += "\n";
                            break;
                        case "\r":
                            break;
                        default:
                            e += "*"
                    }
                    return e
                }
                return t
            }, n.prototype.setMiddleStyle = function(t) {
                this.$TextField[18] = !0, this.$TextField[38] = !0, this.textArr = t, this.$invalidateTextField()
            }, Object.defineProperty(n.prototype, "textWidth", {
                get: function() {
                    return this.$getLinesArr(), t.nativeRender ? egret_native.nrGetTextWidth(this.$nativeDisplayObject.id) : this.$TextField[5]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "textHeight", {
                get: function() {
                    return this.$getLinesArr(), t.nativeRender ? egret_native.nrGetTextHeight(this.$nativeDisplayObject.id) : t.TextFieldUtils.$getTextHeight(this)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.appendText = function(t) {
                this.appendElement({
                    text: t
                })
            }, n.prototype.appendElement = function(e) {
                var i = this.$TextField[13] + e.text;
                return t.nativeRender ? (this.textArr.push(e), this.$TextField[13] = i, this.$TextField[18] = !0, this.$TextField[38] = !0, void this.$nativeDisplayObject.setTextFlow(this.textArr)) : void(this.$TextField[20] ? this.$setBaseText(i) : (this.$TextField[13] = i, this.textArr.push(e), this.setMiddleStyle(this.textArr)))
            }, n.prototype.$getLinesArr = function() {
                var e = this.$TextField;
                return t.nativeRender && e[38] ? (egret_native.updateNativeRender(), void(e[38] = !1)) : this.$getLinesArr2()
            }, n.prototype.$getLinesArr2 = function() {
                var r = this.$TextField;
                if (!r[18]) return this.linesArr;
                r[18] = !1;
                var n = this.textArr;
                this.linesArr.length = 0, r[6] = 0, r[5] = 0;
                var a = r[3];
                if (!isNaN(a) && 0 == a) return r[29] = 0, [{
                    width: 0,
                    height: 0,
                    charNum: 0,
                    elements: [],
                    hasNextLine: !1
                }];
                for (var o, s = this.linesArr, h = 0, c = 0, l = 0, u = 0, p = 0, d = n.length; d > p; p++) {
                    var f = n[p];
                    if (f.text) {
                        f.style = f.style || {};
                        for (var g = f.text.toString(), $ = g.split(/(?:\r\n|\r|\n)/), y = 0, v = $.length; v > y; y++) {
                            null == s[u] && (o = {
                                width: 0,
                                height: 0,
                                elements: [],
                                charNum: 0,
                                hasNextLine: !1
                            }, s[u] = o, h = 0, l = 0, c = 0), l = r[24] == t.TextFieldType.INPUT ? r[0] : Math.max(l, f.style.size || r[0]);
                            var b = !0;
                            if ("" == $[y]) y == v - 1 && (b = !1);
                            else {
                                var m = e($[y], r, f.style);
                                if (isNaN(a)) h += m, c += $[y].length, o.elements.push({
                                    width: m,
                                    text: $[y],
                                    style: f.style
                                }), y == v - 1 && (b = !1);
                                else if (a >= h + m) o.elements.push({
                                    width: m,
                                    text: $[y],
                                    style: f.style
                                }), h += m, c += $[y].length, y == v - 1 && (b = !1);
                                else {
                                    var x = 0,
                                        T = 0,
                                        _ = $[y],
                                        D = void 0;
                                    D = r[19] ? _.split(i) : _.match(/./g);
                                    for (var O = D.length, w = 0; O > x; x++) {
                                        var E = D[x].length,
                                            R = !1;
                                        if (1 == E && O - 1 > x) {
                                            var S = D[x].charCodeAt(0),
                                                F = D[x + 1].charCodeAt(0);
                                            if (S >= 55296 && 56319 >= S && 56320 == (64512 & F)) {
                                                var P = D[x] + D[x + 1];
                                                E = 2, R = !0, m = e(P, r, f.style)
                                            } else m = e(D[x], r, f.style)
                                        } else m = e(D[x], r, f.style);
                                        if (0 != h && h + m > a && h + x != 0) break;
                                        if (T + m > a)
                                            for (var C = D[x].match(/./g), M = 0, j = C.length; j > M; M++) {
                                                var E = C[M].length,
                                                    A = !1;
                                                if (1 == E && j - 1 > M) {
                                                    var S = C[M].charCodeAt(0),
                                                        F = C[M + 1].charCodeAt(0);
                                                    if (S >= 55296 && 56319 >= S && 56320 == (64512 & F)) {
                                                        var P = C[M] + C[M + 1];
                                                        E = 2, A = !0, m = e(P, r, f.style)
                                                    } else m = e(C[M], r, f.style)
                                                } else m = e(C[M], r, f.style);
                                                if (M > 0 && h + m > a) break;
                                                w += E, T += m, h += m, c += w, A && M++
                                            } else w += E, T += m, h += m, c += w;
                                        R && x++
                                    }
                                    if (x > 0) {
                                        o.elements.push({
                                            width: T,
                                            text: _.substring(0, w),
                                            style: f.style
                                        });
                                        var B = _.substring(w),
                                            N = void 0,
                                            k = B.length;
                                        for (N = 0; k > N && " " == B.charAt(N); N++);
                                        $[y] = B.substring(N)
                                    }
                                    "" != $[y] && (y--, b = !1)
                                }
                            }
                            b && (c++, o.hasNextLine = !0), y < $.length - 1 && (o.width = h, o.height = l, o.charNum = c, r[5] = Math.max(r[5], h), r[6] += l, u++)
                        }
                        p == n.length - 1 && o && (o.width = h, o.height = l, o.charNum = c, r[5] = Math.max(r[5], h), r[6] += l)
                    } else o && (o.width = h, o.height = l, o.charNum = c, r[5] = Math.max(r[5], h), r[6] += l)
                }
                return r[29] = s.length, s
            }, n.prototype.$setIsTyping = function(e) {
                this.$isTyping = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setIsTyping(e)
            }, n.prototype.drawText = function() {
                var e = this.textNode,
                    i = this.$TextField;
                e.bold = i[15], e.fontFamily = i[8] || n.default_fontFamily, e.italic = i[16], e.size = i[0], e.stroke = i[27], e.strokeColor = i[25], e.textColor = i[2];
                var r = this.$getLinesArr();
                if (0 == i[5]) return [];
                var a = isNaN(i[3]) ? i[5] : i[3],
                    o = t.TextFieldUtils.$getTextHeight(this),
                    s = 0,
                    h = t.TextFieldUtils.$getStartLine(this),
                    c = i[4];
                if (!isNaN(c) && c > o) {
                    var l = t.TextFieldUtils.$getValign(this);
                    s += l * (c - o)
                }
                s = Math.round(s);
                for (var u = t.TextFieldUtils.$getHalign(this), p = 0, d = [], f = h, g = i[29]; g > f; f++) {
                    var $ = r[f],
                        y = $.height;
                    if (s += y / 2, f != h) {
                        if (i[24] == t.TextFieldType.INPUT && !i[30]) break;
                        if (!isNaN(c) && s > c) break
                    }
                    p = Math.round((a - $.width) * u);
                    for (var v = 0, b = $.elements.length; b > v; v++) {
                        var m = $.elements[v],
                            x = m.style.size || i[0];
                        e.drawText(p, s + (y - x) / 2, m.text, m.style), m.style.underline && d.push(p, s + y / 2, m.width, m.style.textColor), p += m.width
                    }
                    s += y / 2 + i[1]
                }
                return d
            }, n.prototype.addEvent = function() {
                this.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
            }, n.prototype.removeEvent = function() {
                this.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
            }, n.prototype.onTapHandler = function(e) {
                if (this.$TextField[24] != t.TextFieldType.INPUT) {
                    var i = t.TextFieldUtils.$getTextElement(this, e.localX, e.localY);
                    if (null != i) {
                        var r = i.style;
                        if (r && r.href)
                            if (r.href.match(/^event:/)) {
                                var n = r.href.match(/^event:/)[0];
                                t.TextEvent.dispatchTextEvent(this, t.TextEvent.LINK, r.href.substring(n.length))
                            } else open(r.href, r.target || "_blank")
                    }
                }
            }, n.default_fontFamily = "Arial", n.default_size = 30, n.default_textColor = 16777215, n
        }(t.DisplayObject);
    t.TextField = r, __reflect(r.prototype, "egret.TextField")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.TEXT = "text", t.TEL = "tel", t.PASSWORD = "password", t
    }();
    t.TextFieldInputType = e, __reflect(e.prototype, "egret.TextFieldInputType")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.DYNAMIC = "dynamic", t.INPUT = "input", t
    }();
    t.TextFieldType = e, __reflect(e.prototype, "egret.TextFieldType")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function e() {}
        return e.$getStartLine = function(t) {
            var i = t.$TextField,
                r = e.$getTextHeight(t),
                n = 0,
                a = i[4];
            return isNaN(a) || (a > r || r > a && (n = Math.max(i[28] - 1, 0), n = Math.min(i[29] - 1, n)), i[30] || (n = Math.max(i[28] - 1, 0), i[29] > 0 && (n = Math.min(i[29] - 1, n)))), n
        }, e.$getHalign = function(e) {
            var i = e.$getLinesArr2(),
                r = 0;
            return e.$TextField[9] == t.HorizontalAlign.CENTER ? r = .5 : e.$TextField[9] == t.HorizontalAlign.RIGHT && (r = 1), e.$TextField[24] == t.TextFieldType.INPUT && !e.$TextField[30] && i.length > 1 && (r = 0), r
        }, e.$getTextHeight = function(e) {
            var i = t.TextFieldType.INPUT != e.$TextField[24] || e.$TextField[30] ? e.$TextField[6] + (e.$TextField[29] - 1) * e.$TextField[1] : e.$TextField[0];
            return i
        }, e.$getValign = function(i) {
            var r = e.$getTextHeight(i),
                n = i.$TextField[4];
            if (!isNaN(n) && n > r) {
                var a = 0;
                return i.$TextField[10] == t.VerticalAlign.MIDDLE ? a = .5 : i.$TextField[10] == t.VerticalAlign.BOTTOM && (a = 1), a
            }
            return 0
        }, e.$getTextElement = function(t, i, r) {
            var n = e.$getHit(t, i, r),
                a = t.$getLinesArr2();
            return n && a[n.lineIndex] && a[n.lineIndex].elements[n.textElementIndex] ? a[n.lineIndex].elements[n.textElementIndex] : null
        }, e.$getHit = function(t, i, r) {
            var n = t.$getLinesArr2();
            if (0 == t.$TextField[3]) return null;
            var a = 0,
                o = e.$getTextHeight(t),
                s = 0,
                h = t.$TextField[4];
            if (!isNaN(h) && h > o) {
                var c = e.$getValign(t);
                s = c * (h - o), 0 != s && (r -= s)
            }
            for (var l = e.$getStartLine(t), u = 0, p = l; p < n.length; p++) {
                var d = n[p];
                if (u + d.height >= r) {
                    r > u && (a = p + 1);
                    break
                }
                if (u += d.height, u + t.$TextField[1] > r) return null;
                u += t.$TextField[1]
            }
            if (0 == a) return null;
            var f = n[a - 1],
                g = t.$TextField[3];
            isNaN(g) && (g = t.textWidth);
            var $ = e.$getHalign(t);
            i -= $ * (g - f.width);
            for (var y = 0, p = 0; p < f.elements.length; p++) {
                var v = f.elements[p];
                if (y + v.width <= i) y += v.width;
                else if (i > y) return {
                    lineIndex: a - 1,
                    textElementIndex: p
                }
            }
            return null
        }, e.$getScrollNum = function(t) {
            var e = 1;
            if (t.$TextField[30]) {
                var i = t.height,
                    r = t.size,
                    n = t.lineSpacing;
                e = Math.floor(i / (r + n));
                var a = i - (r + n) * e;
                a > r / 2 && e++
            }
            return e
        }, e
    }();
    t.TextFieldUtils = e, __reflect(e.prototype, "egret.TextFieldUtils")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {}(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.TOP = "top", t.BOTTOM = "bottom", t.MIDDLE = "middle", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t
    }();
    t.VerticalAlign = e, __reflect(e.prototype, "egret.VerticalAlign")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.encode = function(t) {
            for (var e = new Uint8Array(t), i = e.length, r = "", n = 0; i > n; n += 3) r += chars[e[n] >> 2], r += chars[(3 & e[n]) << 4 | e[n + 1] >> 4], r += chars[(15 & e[n + 1]) << 2 | e[n + 2] >> 6], r += chars[63 & e[n + 2]];
            return i % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r
        }, t.decode = function(t) {
            var e = .75 * t.length,
                i = t.length,
                r = 0,
                n = 0,
                a = 0,
                o = 0,
                s = 0;
            "=" === t[t.length - 1] && (e--, "=" === t[t.length - 2] && e--);
            for (var h = new ArrayBuffer(e), c = new Uint8Array(h), l = 0; i > l; l += 4) n = lookup[t.charCodeAt(l)], a = lookup[t.charCodeAt(l + 1)], o = lookup[t.charCodeAt(l + 2)], s = lookup[t.charCodeAt(l + 3)], c[r++] = n << 2 | a >> 4, c[r++] = (15 & a) << 4 | o >> 2, c[r++] = (3 & o) << 6 | 63 & s;
            return h
        }, t
    }();
    t.Base64Util = e, __reflect(e.prototype, "egret.Base64Util")
}(egret || (egret = {}));
for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = new Uint8Array(256), i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.LITTLE_ENDIAN = "littleEndian", t.BIG_ENDIAN = "bigEndian", t
    }();
    t.Endian = e, __reflect(e.prototype, "egret.Endian");
    var i = function() {
        function i(t, i) {
            void 0 === i && (i = 0), this.bufferExtSize = 0, this.EOF_byte = -1, this.EOF_code_point = -1, 0 > i && (i = 0), this.bufferExtSize = i;
            var r, n = 0;
            if (t) {
                var a = void 0;
                if (t instanceof Uint8Array ? (a = t, n = t.length) : (n = t.byteLength, a = new Uint8Array(t)), 0 == i) r = new Uint8Array(n);
                else {
                    var o = (n / i | 0) + 1;
                    r = new Uint8Array(o * i)
                }
                r.set(a)
            } else r = new Uint8Array(i);
            this.write_position = n, this._position = 0, this._bytes = r, this.data = new DataView(r.buffer), this.endian = e.BIG_ENDIAN
        }
        return Object.defineProperty(i.prototype, "endian", {
            get: function() {
                return 0 == this.$endian ? e.LITTLE_ENDIAN : e.BIG_ENDIAN
            },
            set: function(t) {
                this.$endian = t == e.LITTLE_ENDIAN ? 0 : 1
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.setArrayBuffer = function(t) {}, Object.defineProperty(i.prototype, "readAvailable", {
            get: function() {
                return this.write_position - this._position
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "buffer", {
            get: function() {
                return this.data.buffer.slice(0, this.write_position)
            },
            set: function(t) {
                var e, i = t.byteLength,
                    r = new Uint8Array(t),
                    n = this.bufferExtSize;
                if (0 == n) e = new Uint8Array(i);
                else {
                    var a = (i / n | 0) + 1;
                    e = new Uint8Array(a * n)
                }
                e.set(r), this.write_position = i, this._bytes = e, this.data = new DataView(e.buffer)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "rawBuffer", {
            get: function() {
                return this.data.buffer
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "bytes", {
            get: function() {
                return this._bytes
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "dataView", {
            get: function() {
                return this.data
            },
            set: function(t) {
                this.buffer = t.buffer
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "bufferOffset", {
            get: function() {
                return this.data.byteOffset
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "position", {
            get: function() {
                return this._position
            },
            set: function(t) {
                this._position = t, t > this.write_position && (this.write_position = t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "length", {
            get: function() {
                return this.write_position
            },
            set: function(t) {
                this.write_position = t, this.data.byteLength > t && (this._position = t), this._validateBuffer(t)
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype._validateBuffer = function(t) {
            if (this.data.byteLength < t) {
                var e = this.bufferExtSize,
                    i = void 0;
                if (0 == e) i = new Uint8Array(t);
                else {
                    var r = ((t / e >> 0) + 1) * e;
                    i = new Uint8Array(r)
                }
                i.set(this._bytes), this._bytes = i, this.data = new DataView(i.buffer)
            }
        }, Object.defineProperty(i.prototype, "bytesAvailable", {
            get: function() {
                return this.data.byteLength - this._position
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.clear = function() {
            var t = new ArrayBuffer(this.bufferExtSize);
            this.data = new DataView(t), this._bytes = new Uint8Array(t), this._position = 0, this.write_position = 0
        }, i.prototype.readBoolean = function() {
            return this.validate(1) ? !!this._bytes[this.position++] : void 0
        }, i.prototype.readByte = function() {
            return this.validate(1) ? this.data.getInt8(this.position++) : void 0
        }, i.prototype.readBytes = function(e, i, r) {
            if (void 0 === i && (i = 0), void 0 === r && (r = 0), e) {
                var n = this._position,
                    a = this.write_position - n;
                if (0 > a) return void t.$error(1025);
                if (0 == r) r = a;
                else if (r > a) return void t.$error(1025);
                var o = e._position;
                e._position = 0, e.validateBuffer(i + r), e._position = o, e._bytes.set(this._bytes.subarray(n, n + r), i), this.position += r
            }
        }, i.prototype.readDouble = function() {
            if (this.validate(8)) {
                var t = this.data.getFloat64(this._position, 0 == this.$endian);
                return this.position += 8, t
            }
        }, i.prototype.readFloat = function() {
            if (this.validate(4)) {
                var t = this.data.getFloat32(this._position, 0 == this.$endian);
                return this.position += 4, t
            }
        }, i.prototype.readInt = function() {
            if (this.validate(4)) {
                var t = this.data.getInt32(this._position, 0 == this.$endian);
                return this.position += 4, t
            }
        }, i.prototype.readShort = function() {
            if (this.validate(2)) {
                var t = this.data.getInt16(this._position, 0 == this.$endian);
                return this.position += 2, t
            }
        }, i.prototype.readUnsignedByte = function() {
            return this.validate(1) ? this._bytes[this.position++] : void 0
        }, i.prototype.readUnsignedInt = function() {
            if (this.validate(4)) {
                var t = this.data.getUint32(this._position, 0 == this.$endian);
                return this.position += 4, t
            }
        }, i.prototype.readUnsignedShort = function() {
            if (this.validate(2)) {
                var t = this.data.getUint16(this._position, 0 == this.$endian);
                return this.position += 2, t
            }
        }, i.prototype.readUTF = function() {
            var t = this.readUnsignedShort();
            return t > 0 ? this.readUTFBytes(t) : ""
        }, i.prototype.readUTFBytes = function(t) {
            if (this.validate(t)) {
                var e = this.data,
                    i = new Uint8Array(e.buffer, e.byteOffset + this._position, t);
                return this.position += t, this.decodeUTF8(i)
            }
        }, i.prototype.writeBoolean = function(t) {
            this.validateBuffer(1), this._bytes[this.position++] = +t
        }, i.prototype.writeByte = function(t) {
            this.validateBuffer(1), this._bytes[this.position++] = 255 & t
        }, i.prototype.writeBytes = function(t, e, i) {
            void 0 === e && (e = 0), void 0 === i && (i = 0);
            var r;
            0 > e || 0 > i || (r = 0 == i ? t.length - e : Math.min(t.length - e, i), r > 0 && (this.validateBuffer(r), this._bytes.set(t._bytes.subarray(e, e + r), this._position), this.position = this._position + r))
        }, i.prototype.writeDouble = function(t) {
            this.validateBuffer(8), this.data.setFloat64(this._position, t, 0 == this.$endian), this.position += 8
        }, i.prototype.writeFloat = function(t) {
            this.validateBuffer(4), this.data.setFloat32(this._position, t, 0 == this.$endian), this.position += 4
        }, i.prototype.writeInt = function(t) {
            this.validateBuffer(4), this.data.setInt32(this._position, t, 0 == this.$endian), this.position += 4
        }, i.prototype.writeShort = function(t) {
            this.validateBuffer(2), this.data.setInt16(this._position, t, 0 == this.$endian), this.position += 2
        }, i.prototype.writeUnsignedInt = function(t) {
            this.validateBuffer(4), this.data.setUint32(this._position, t, 0 == this.$endian), this.position += 4
        }, i.prototype.writeUnsignedShort = function(t) {
            this.validateBuffer(2), this.data.setUint16(this._position, t, 0 == this.$endian), this.position += 2
        }, i.prototype.writeUTF = function(t) {
            var e = this.encodeUTF8(t),
                i = e.length;
            this.validateBuffer(2 + i), this.data.setUint16(this._position, i, 0 == this.$endian), this.position += 2, this._writeUint8Array(e, !1)
        }, i.prototype.writeUTFBytes = function(t) {
            this._writeUint8Array(this.encodeUTF8(t))
        }, i.prototype.toString = function() {
            return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
        }, i.prototype._writeUint8Array = function(t, e) {
            void 0 === e && (e = !0);
            var i = this._position,
                r = i + t.length;
            e && this.validateBuffer(r), this.bytes.set(t, i), this.position = r
        }, i.prototype.validate = function(e) {
            var i = this._bytes.length;
            return i > 0 && this._position + e <= i ? !0 : void t.$error(1025)
        }, i.prototype.validateBuffer = function(t) {
            this.write_position = t > this.write_position ? t : this.write_position, t += this._position, this._validateBuffer(t)
        }, i.prototype.encodeUTF8 = function(t) {
            for (var e = 0, i = this.stringToCodePoints(t), r = []; i.length > e;) {
                var n = i[e++];
                if (this.inRange(n, 55296, 57343)) this.encoderError(n);
                else if (this.inRange(n, 0, 127)) r.push(n);
                else {
                    var a = void 0,
                        o = void 0;
                    for (this.inRange(n, 128, 2047) ? (a = 1, o = 192) : this.inRange(n, 2048, 65535) ? (a = 2, o = 224) : this.inRange(n, 65536, 1114111) && (a = 3, o = 240), r.push(this.div(n, Math.pow(64, a)) + o); a > 0;) {
                        var s = this.div(n, Math.pow(64, a - 1));
                        r.push(128 + s % 64), a -= 1
                    }
                }
            }
            return new Uint8Array(r)
        }, i.prototype.decodeUTF8 = function(t) {
            for (var e, i = !1, r = 0, n = "", a = 0, o = 0, s = 0, h = 0; t.length > r;) {
                var c = t[r++];
                if (c == this.EOF_byte) e = 0 != o ? this.decoderError(i) : this.EOF_code_point;
                else if (0 == o) this.inRange(c, 0, 127) ? e = c : (this.inRange(c, 194, 223) ? (o = 1, h = 128, a = c - 192) : this.inRange(c, 224, 239) ? (o = 2, h = 2048, a = c - 224) : this.inRange(c, 240, 244) ? (o = 3, h = 65536, a = c - 240) : this.decoderError(i), a *= Math.pow(64, o), e = null);
                else if (this.inRange(c, 128, 191))
                    if (s += 1, a += (c - 128) * Math.pow(64, o - s), s !== o) e = null;
                    else {
                        var l = a,
                            u = h;
                        a = 0, o = 0, s = 0, h = 0, e = this.inRange(l, u, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(i, c)
                    }
                else a = 0, o = 0, s = 0, h = 0, r--, e = this.decoderError(i, c);
                null !== e && e !== this.EOF_code_point && (65535 >= e ? e > 0 && (n += String.fromCharCode(e)) : (e -= 65536, n += String.fromCharCode(55296 + (e >> 10 & 1023)), n += String.fromCharCode(56320 + (1023 & e))))
            }
            return n
        }, i.prototype.encoderError = function(e) {
            t.$error(1026, e)
        }, i.prototype.decoderError = function(e, i) {
            return e && t.$error(1027), i || 65533
        }, i.prototype.inRange = function(t, e, i) {
            return t >= e && i >= t
        }, i.prototype.div = function(t, e) {
            return Math.floor(t / e)
        }, i.prototype.stringToCodePoints = function(t) {
            for (var e = [], i = 0, r = t.length; i < t.length;) {
                var n = t.charCodeAt(i);
                if (this.inRange(n, 55296, 57343))
                    if (this.inRange(n, 56320, 57343)) e.push(65533);
                    else if (i == r - 1) e.push(65533);
                else {
                    var a = t.charCodeAt(i + 1);
                    if (this.inRange(a, 56320, 57343)) {
                        var o = 1023 & n,
                            s = 1023 & a;
                        i += 1, e.push(65536 + (o << 10) + s)
                    } else e.push(65533)
                } else e.push(n);
                i += 1
            }
            return e
        }, i
    }();
    t.ByteArray = i, __reflect(i.prototype, "egret.ByteArray")
}(egret || (egret = {}));
var egret;
! function(t) {
    t.BitmapFillMode = {
        REPEAT: "repeat",
        SCALE: "scale",
        CLIP: "clip"
    }
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t, e, i) {
        var r = t.prototype;
        Object.defineProperty(r, "__class__", {
            value: e,
            enumerable: !1,
            writable: !0
        });
        var n = [e];
        i && (n = n.concat(i));
        var a = r.__types__;
        if (r.__types__)
            for (var o = a.length, s = 0; o > s; s++) {
                var h = a[s]; - 1 == n.indexOf(h) && n.push(h)
            }
        Object.defineProperty(r, "__types__", {
            value: n,
            enumerable: !1,
            writable: !0
        })
    }
    t.registerClass = e
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$stageWidth = 0, i.$stageHeight = 0, i.$scaleMode = t.StageScaleMode.SHOW_ALL, i.$orientation = t.OrientationMode.AUTO, i.$maxTouches = 99, i.$stage = i, i.$nestLevel = 1, i
        }
        return __extends(i, e), i.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(13)
        }, Object.defineProperty(i.prototype, "frameRate", {
            get: function() {
                return t.ticker.$frameRate
            },
            set: function(e) {
                t.ticker.$setFrameRate(e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "stageWidth", {
            get: function() {
                return this.$stageWidth
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "stageHeight", {
            get: function() {
                return this.$stageHeight
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.invalidate = function() {
            t.sys.$invalidateRenderFlag = !0
        }, i.prototype.registerImplementation = function(e, i) {
            t.registerImplementation(e, i)
        }, i.prototype.getImplementation = function(e) {
            return t.getImplementation(e)
        }, Object.defineProperty(i.prototype, "scaleMode", {
            get: function() {
                return this.$scaleMode
            },
            set: function(t) {
                this.$scaleMode != t && (this.$scaleMode = t, this.$screen.updateScreenSize())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "orientation", {
            get: function() {
                return this.$orientation
            },
            set: function(t) {
                this.$orientation != t && (this.$orientation = t, this.$screen.updateScreenSize())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "textureScaleFactor", {
            get: function() {
                return t.$TextureScaleFactor
            },
            set: function(e) {
                t.$TextureScaleFactor = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "maxTouches", {
            get: function() {
                return this.$maxTouches
            },
            set: function(t) {
                this.$maxTouches != t && (this.$maxTouches = t, this.$screen.updateMaxTouches())
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.setContentSize = function(t, e) {
            this.$screen.setContentSize(t, e)
        }, i
    }(t.DisplayObjectContainer);
    t.Stage = e, __reflect(e.prototype, "egret.Stage")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return Object.defineProperty(t, "logLevel", {
            set: function(t) {},
            enumerable: !0,
            configurable: !0
        }), t.ALL = "all", t.DEBUG = "debug", t.INFO = "info", t.WARN = "warn", t.ERROR = "error", t.OFF = "off", t
    }();
    t.Logger = e, __reflect(e.prototype, "egret.Logger")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.isNumber = function(t) {
            return "number" == typeof t && !isNaN(t)
        }, t.sin = function(e) {
            var i = Math.floor(e),
                r = i + 1,
                n = t.sinInt(i);
            if (i == e) return n;
            var a = t.sinInt(r);
            return (e - i) * a + (r - e) * n
        }, t.sinInt = function(t) {
            return t %= 360, 0 > t && (t += 360), egret_sin_map[t]
        }, t.cos = function(e) {
            var i = Math.floor(e),
                r = i + 1,
                n = t.cosInt(i);
            if (i == e) return n;
            var a = t.cosInt(r);
            return (e - i) * a + (r - e) * n
        }, t.cosInt = function(t) {
            return t %= 360, 0 > t && (t += 360), egret_cos_map[t]
        }, t
    }();
    t.NumberUtils = e, __reflect(e.prototype, "egret.NumberUtils")
}(egret || (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, DEG_TO_RAD = Math.PI / 180, NumberUtils_i = 0; 360 > NumberUtils_i; NumberUtils_i++) egret_sin_map[NumberUtils_i] = Math.sin(NumberUtils_i * DEG_TO_RAD), egret_cos_map[NumberUtils_i] = Math.cos(NumberUtils_i * DEG_TO_RAD);
egret_sin_map[90] = 1, egret_cos_map[90] = 0, egret_sin_map[180] = 0, egret_cos_map[180] = -1, egret_sin_map[270] = -1, egret_cos_map[270] = 0, Function.prototype.bind || (Function.prototype.bind = function(t) {
    "function" != typeof this && egret.$error(1029);
    var e = Array.prototype.slice.call(arguments, 1),
        i = this,
        r = function() {},
        n = function() {
            return i.apply(this instanceof r && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
    return r.prototype = this.prototype, n.prototype = new r, n
});
var egret;
! function(t) {
    var e = function(e) {
        function i(t, i) {
            void 0 === i && (i = 0);
            var r = e.call(this) || this;
            return r._delay = 0, r._currentCount = 0, r._running = !1, r.updateInterval = 1e3, r.lastCount = 1e3, r.lastTimeStamp = 0, r.delay = t, r.repeatCount = 0 | +i, r
        }
        return __extends(i, e), Object.defineProperty(i.prototype, "delay", {
            get: function() {
                return this._delay
            },
            set: function(t) {
                1 > t && (t = 1), this._delay != t && (this._delay = t, this.lastCount = this.updateInterval = Math.round(60 * t))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "currentCount", {
            get: function() {
                return this._currentCount
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "running", {
            get: function() {
                return this._running
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.reset = function() {
            this.stop(), this._currentCount = 0
        }, i.prototype.start = function() {
            this._running || (this.lastCount = this.updateInterval, this.lastTimeStamp = t.getTimer(), t.ticker.$startTick(this.$update, this), this._running = !0)
        }, i.prototype.stop = function() {
            this._running && (t.stopTick(this.$update, this), this._running = !1)
        }, i.prototype.$update = function(e) {
            var i = e - this.lastTimeStamp;
            if (i >= this._delay) this.lastCount = this.updateInterval;
            else {
                if (this.lastCount -= 1e3, this.lastCount > 0) return !1;
                this.lastCount += this.updateInterval
            }
            this.lastTimeStamp = e, this._currentCount++;
            var r = this.repeatCount > 0 && this._currentCount >= this.repeatCount;
            return (0 == this.repeatCount || this._currentCount <= this.repeatCount) && t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER), r && (this.stop(), t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER_COMPLETE)), !1
        }, i
    }(t.EventDispatcher);
    t.Timer = e, __reflect(e.prototype, "egret.Timer")
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e, i) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        t.$callLaterFunctionList.push(e), t.$callLaterThisList.push(i), t.$callLaterArgsList.push(r)
    }

    function i(e, i) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        t.$callAsyncFunctionList.push(e), t.$callAsyncThisList.push(i), t.$callAsyncArgsList.push(r)
    }
    t.$callLaterFunctionList = [], t.$callLaterThisList = [], t.$callLaterArgsList = [], t.callLater = e, t.$callAsyncFunctionList = [], t.$callAsyncThisList = [], t.$callAsyncArgsList = [], t.$callAsync = i
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t, e, i) {
        for (var r = [], n = 3; n < arguments.length; n++) r[n - 3] = arguments[n];
        var a, o = t.prototype;
        t.hasOwnProperty("__sets__") || Object.defineProperty(t, "__sets__", {
            value: {}
        }), a = t.__sets__;
        var s = a[i];
        if (s) return s.apply(e, r);
        var h = Object.getPrototypeOf(o);
        if (null != h) {
            for (; !h.hasOwnProperty(i);)
                if (h = Object.getPrototypeOf(h), null == h) return;
            s = Object.getOwnPropertyDescriptor(h, i).set, a[i] = s, s.apply(e, r)
        }
    }

    function i(t, e, i) {
        var r, n = t.prototype;
        t.hasOwnProperty("__gets__") || Object.defineProperty(t, "__gets__", {
            value: {}
        }), r = t.__gets__;
        var a = r[i];
        if (a) return a.call(e);
        var o = Object.getPrototypeOf(n);
        if (null != o) {
            for (; !o.hasOwnProperty(i);)
                if (o = Object.getPrototypeOf(o), null == o) return;
            return a = Object.getOwnPropertyDescriptor(o, i).get, r[i] = a, a.call(e)
        }
    }
    t.superSetter = e, t.superGetter = i
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t) {
        if (!t) return null;
        var e = i[t];
        if (e) return e;
        var r = t.split("."),
            n = r.length;
        e = global;
        for (var a = 0; n > a; a++) {
            var o = r[a];
            if (e = e[o], !e) return null
        }
        return i[t] = e, e
    }
    var i = {};
    t.getDefinitionByName = e
}(egret || (egret = {}));
var egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t) {
        var e = typeof t;
        if (!t || "object" != e && !t.prototype) return e;
        var i = t.prototype ? t.prototype : Object.getPrototypeOf(t);
        if (i.hasOwnProperty("__class__")) return i.__class__;
        var r = i.constructor.toString().trim(),
            n = r.indexOf("("),
            a = r.substring(9, n);
        return Object.defineProperty(i, "__class__", {
            value: a,
            enumerable: !1,
            writable: !0
        }), a
    }
    t.getQualifiedClassName = e
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e) {
        if (!e || "object" != typeof e && !e.prototype) return null;
        var i = e.prototype ? e.prototype : Object.getPrototypeOf(e),
            r = Object.getPrototypeOf(i);
        if (!r) return null;
        var n = t.getQualifiedClassName(r.constructor);
        return n ? n : null
    }
    t.getQualifiedSuperclassName = e
}(egret || (egret = {}));
var egret;
! function(t) {
    function e() {
        return Date.now() - t.sys.$START_TIME
    }
    t.getTimer = e
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e) {
        var i = t.getDefinitionByName(e);
        return i ? !0 : !1
    }
    t.hasDefinition = e
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t, e) {
        if (!t || "object" != typeof t) return !1;
        var i = Object.getPrototypeOf(t),
            r = i ? i.__types__ : null;
        return r ? -1 !== r.indexOf(e) : !1
    }
    t.is = e
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e, i) {
        t.ticker.$startTick(e, i)
    }
    t.startTick = e
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e, i) {
        t.ticker.$stopTick(e, i)
    }
    t.stopTick = e
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(t) {
        0 > t && (t = 0), t > 16777215 && (t = 16777215);
        for (var e = t.toString(16).toUpperCase(); e.length > 6;) e = e.slice(1, e.length);
        for (; e.length < 6;) e = "0" + e;
        return "#" + e
    }
    t.toColorString = e
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(t) {}(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var __reflect = this && this.__reflect || function(e, t, r) {
        e.__class__ = t, r ? r.push(t) : r = [t], e.__types__ = e.__types__ ? r.concat(e.__types__) : r
    },
    __extends = this && this.__extends || function(e, t) {
        function r() {
            this.constructor = e
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        r.prototype = t.prototype, e.prototype = new r
    },
    egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e) {
            if (window.location) {
                var t = location.search;
                if ("" == t) return "";
                t = t.slice(1);
                for (var r = t.split("&"), i = r.length, n = 0; i > n; n++) {
                    var a = r[n],
                        o = a.split("=");
                    if (o[0] == e) return o[1]
                }
            }
            return ""
        }
        t.getOption = r, e.getOption = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function e() {}
            return e.call = function(e, t) {}, e.addCallback = function(e, t) {}, e
        }();
        t.WebExternalInterface = r, __reflect(r.prototype, "egret.web.WebExternalInterface", ["egret.ExternalInterface"]);
        var i = navigator.userAgent.toLowerCase();
        i.indexOf("egretnative") < 0 && (e.ExternalInterface = r)
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})),
function(e) {
    var t;
    ! function(t) {
        function r(t) {
            var r = JSON.parse(t),
                n = r.functionName,
                a = i[n];
            if (a) {
                var o = r.value;
                a.call(null, o)
            } else e.$warn(1050, n)
        }
        var i = {},
            n = function() {
                function e() {}
                return e.call = function(e, t) {
                    var r = {};
                    r.functionName = e, r.value = t, egret_native.sendInfoToPlugin(JSON.stringify(r))
                }, e.addCallback = function(e, t) {
                    i[e] = t
                }, e
            }();
        t.NativeExternalInterface = n, __reflect(n.prototype, "egret.web.NativeExternalInterface", ["egret.ExternalInterface"]);
        var a = navigator.userAgent.toLowerCase();
        a.indexOf("egretnative") >= 0 && (e.ExternalInterface = n, egret_native.receivedPluginInfo = r)
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})),
function(e) {
    var t;
    ! function(t) {
        var r = {},
            i = function() {
                function t() {}
                return t.call = function(e, t) {
                    __global.ExternalInterface.call(e, t)
                }, t.addCallback = function(e, t) {
                    r[e] = t
                }, t.invokeCallback = function(t, i) {
                    var n = r[t];
                    n ? n.call(null, i) : e.$warn(1050, t)
                }, t
            }();
        t.WebViewExternalInterface = i, __reflect(i.prototype, "egret.web.WebViewExternalInterface", ["egret.ExternalInterface"]);
        var n = navigator.userAgent.toLowerCase();
        n.indexOf("egretwebview") >= 0 && (e.ExternalInterface = i)
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i() {
                var e = r.call(this) || this;
                return e.loaded = !1, e
            }
            return __extends(i, r), Object.defineProperty(i.prototype, "length", {
                get: function() {
                    if (this.originAudio) return this.originAudio.duration;
                    throw new Error("sound not loaded!")
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.load = function(t) {
                function r() {
                    i.$recycle(this.url, s), a(), c.indexOf("firefox") >= 0 && (s.pause(), s.muted = !1), l && document.body.appendChild(s), o.loaded = !0, o.dispatchEventWith(e.Event.COMPLETE)
                }

                function n() {
                    a(), o.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }

                function a() {
                    s.removeEventListener("canplaythrough", r), s.removeEventListener("error", n), l && document.body.removeChild(s)
                }
                var o = this;
                this.url = t;
                var s = new Audio(t);
                s.addEventListener("canplaythrough", r), s.addEventListener("error", n);
                var c = navigator.userAgent.toLowerCase();
                c.indexOf("firefox") >= 0 && (s.autoplay = !0, s.muted = !0);
                var l = c.indexOf("edge") >= 0 || c.indexOf("trident") >= 0;
                l && document.body.appendChild(s), s.load(), this.originAudio = s, i.clearAudios[this.url] && delete i.clearAudios[this.url]
            }, i.prototype.play = function(r, n) {
                r = +r || 0, n = +n || 0;
                var a = i.$pop(this.url);
                null == a && (a = this.originAudio.cloneNode()), a.autoplay = !0;
                var o = new t.HtmlSoundChannel(a);
                return o.$url = this.url, o.$loops = n, o.$startTime = r, o.$play(), e.sys.$pushSoundChannel(o), o
            }, i.prototype.close = function() {
                0 == this.loaded && this.originAudio && (this.originAudio.src = ""), this.originAudio && (this.originAudio = null), i.$clear(this.url)
            }, i.$clear = function(e) {
                i.clearAudios[e] = !0;
                var t = i.audios[e];
                t && (t.length = 0)
            }, i.$pop = function(e) {
                var t = i.audios[e];
                return t && t.length > 0 ? t.pop() : null
            }, i.$recycle = function(e, t) {
                if (!i.clearAudios[e]) {
                    var r = i.audios[e];
                    null == i.audios[e] && (r = i.audios[e] = []), r.push(t)
                }
            }, i.MUSIC = "music", i.EFFECT = "effect", i.audios = {}, i.clearAudios = {}, i
        }(e.EventDispatcher);
        t.HtmlSound = r, __reflect(r.prototype, "egret.web.HtmlSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i(t) {
                var i = r.call(this) || this;
                return i.$startTime = 0, i.audio = null, i.isStopped = !1, i.canPlay = function() {
                    i.audio.removeEventListener("canplay", i.canPlay);
                    try {
                        i.audio.currentTime = i.$startTime
                    } catch (e) {} finally {
                        i.audio.play()
                    }
                }, i.onPlayEnd = function() {
                    return 1 == i.$loops ? (i.stop(), void i.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (i.$loops > 0 && i.$loops--, void i.$play())
                }, i._volume = 1, t.addEventListener("ended", i.onPlayEnd), i.audio = t, i
            }
            return __extends(i, r), i.prototype.$play = function() {
                if (this.isStopped) return void e.$error(1036);
                try {
                    this.audio.volume = this._volume, this.audio.currentTime = this.$startTime
                } catch (t) {
                    return void this.audio.addEventListener("canplay", this.canPlay)
                }
                this.audio.play()
            }, i.prototype.stop = function() {
                if (this.audio) {
                    this.isStopped || e.sys.$popSoundChannel(this), this.isStopped = !0;
                    var r = this.audio;
                    r.removeEventListener("ended", this.onPlayEnd), r.removeEventListener("canplay", this.canPlay), r.volume = 0, this._volume = 0, this.audio = null;
                    var i = this.$url;
                    window.setTimeout(function() {
                        r.pause(), t.HtmlSound.$recycle(i, r)
                    }, 200)
                }
            }, Object.defineProperty(i.prototype, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(t) {
                    return this.isStopped ? void e.$error(1036) : (this._volume = t, void(this.audio && (this.audio.volume = t)))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "position", {
                get: function() {
                    return this.audio ? this.audio.currentTime : 0
                },
                enumerable: !0,
                configurable: !0
            }), i
        }(e.EventDispatcher);
        t.HtmlSoundChannel = r, __reflect(r.prototype, "egret.web.HtmlSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function t() {}
            return t.decodeAudios = function() {
                if (!(t.decodeArr.length <= 0 || t.isDecoding)) {
                    t.isDecoding = !0;
                    var r = t.decodeArr.shift();
                    t.ctx.decodeAudioData(r.buffer, function(e) {
                        r.self.audioBuffer = e, r.success && r.success(), t.isDecoding = !1, t.decodeAudios()
                    }, function() {
                        e.log("sound decode error"), r.fail && r.fail(), t.isDecoding = !1, t.decodeAudios()
                    })
                }
            }, t.decodeArr = [], t.isDecoding = !1, t
        }();
        t.WebAudioDecode = r, __reflect(r.prototype, "egret.web.WebAudioDecode");
        var i = function(i) {
            function n() {
                var e = i.call(this) || this;
                return e.loaded = !1, e
            }
            return __extends(n, i), Object.defineProperty(n.prototype, "length", {
                get: function() {
                    if (this.audioBuffer) return this.audioBuffer.duration;
                    throw new Error("sound not loaded!")
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.load = function(t) {
                function i() {
                    a.loaded = !0, a.dispatchEventWith(e.Event.COMPLETE)
                }

                function n() {
                    a.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }
                var a = this;
                this.url = t;
                var o = new XMLHttpRequest;
                o.open("GET", t, !0), o.responseType = "arraybuffer", o.addEventListener("load", function() {
                    var t = o.status >= 400;
                    t ? a.dispatchEventWith(e.IOErrorEvent.IO_ERROR) : (r.decodeArr.push({
                        buffer: o.response,
                        success: i,
                        fail: n,
                        self: a,
                        url: a.url
                    }), r.decodeAudios())
                }), o.addEventListener("error", function() {
                    a.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }), o.send()
            }, n.prototype.play = function(r, i) {
                r = +r || 0, i = +i || 0;
                var n = new t.WebAudioSoundChannel;
                return n.$url = this.url, n.$loops = i, n.$audioBuffer = this.audioBuffer, n.$startTime = r, n.$play(), e.sys.$pushSoundChannel(n), n
            }, n.prototype.close = function() {}, n.MUSIC = "music", n.EFFECT = "effect", n
        }(e.EventDispatcher);
        t.WebAudioSound = i, __reflect(i.prototype, "egret.web.WebAudioSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i() {
                var i = r.call(this) || this;
                return i.$startTime = 0, i.bufferSource = null, i.context = t.WebAudioDecode.ctx, i.isStopped = !1, i._currentTime = 0, i._volume = 1, i.onPlayEnd = function() {
                    return 1 == i.$loops ? (i.stop(), void i.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (i.$loops > 0 && i.$loops--, void i.$play())
                }, i._startTime = 0, i.context.createGain ? i.gain = i.context.createGain() : i.gain = i.context.createGainNode(), i
            }
            return __extends(i, r), i.prototype.$play = function() {
                if (this.isStopped) return void e.$error(1036);
                this.bufferSource && (this.bufferSource.onended = null, this.bufferSource = null);
                var t = this.context,
                    r = this.gain,
                    i = t.createBufferSource();
                this.bufferSource = i, i.buffer = this.$audioBuffer, i.connect(r), r.connect(t.destination), i.onended = this.onPlayEnd, this._startTime = Date.now(), this.gain.gain.value = this._volume, i.start(0, this.$startTime), this._currentTime = 0
            }, i.prototype.stop = function() {
                if (this.bufferSource) {
                    var t = this.bufferSource;
                    t.stop ? t.stop(0) : t.noteOff(0), t.onended = null, t.disconnect(), this.bufferSource = null, this.$audioBuffer = null
                }
                this.isStopped || e.sys.$popSoundChannel(this), this.isStopped = !0
            }, Object.defineProperty(i.prototype, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(t) {
                    return this.isStopped ? void e.$error(1036) : (this._volume = t, void(this.gain.gain.value = t))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "position", {
                get: function() {
                    return this.bufferSource ? (Date.now() - this._startTime) / 1e3 + this.$startTime : 0
                },
                enumerable: !0,
                configurable: !0
            }), i
        }(e.EventDispatcher);
        t.WebAudioSoundChannel = r, __reflect(r.prototype, "egret.web.WebAudioSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(r, i) {
                void 0 === i && (i = !0);
                var n = t.call(this) || this;
                return n.loaded = !1, n.closed = !1, n.heightSet = 0 / 0, n.widthSet = 0 / 0, n.waiting = !1, n.userPause = !1, n.userPlay = !1, n.isPlayed = !1, n.screenChanged = function(t) {
                    var r = document.fullscreenEnabled || document.webkitIsFullScreen;
                    r || (n.checkFullScreen(!1), e.Capabilities.isMobile || (n._fullscreen = r))
                }, n._fullscreen = !0, n.onVideoLoaded = function() {
                    n.video.removeEventListener("canplay", n.onVideoLoaded);
                    var t = n.video;
                    n.loaded = !0, n.posterData && (n.posterData.width = n.getPlayWidth(), n.posterData.height = n.getPlayHeight()), t.width = t.videoWidth, t.height = t.videoHeight, window.setTimeout(function() {
                        n.dispatchEventWith(e.Event.COMPLETE)
                    }, 200)
                }, n.$renderNode = new e.sys.BitmapNode, n.src = r, n.once(e.Event.ADDED_TO_STAGE, n.loadPoster, n), r && n.load(), n
            }
            return __extends(r, t), r.prototype.createNativeDisplayObject = function() {
                this.$nativeDisplayObject = new egret_native.NativeDisplayObject(1)
            }, r.prototype.load = function(t, r) {
                var i = this;
                if (void 0 === r && (r = !0), t = t || this.src, this.src = t, !this.video || this.video.src != t) {
                    var n;
                    !this.video || e.Capabilities.isMobile ? (n = document.createElement("video"), this.video = n, n.controls = null) : n = this.video, n.src = t, n.setAttribute("autoplay", "autoplay"), n.setAttribute("webkit-playsinline", "true"), n.addEventListener("canplay", this.onVideoLoaded), n.addEventListener("error", function() {
                        return i.onVideoError()
                    }), n.addEventListener("ended", function() {
                        return i.onVideoEnded()
                    });
                    var a = !1;
                    n.addEventListener("canplay", function() {
                        i.waiting = !1, a ? i.userPause ? i.pause() : i.userPlay && i.play() : (a = !0, n.pause())
                    }), n.addEventListener("waiting", function() {
                        i.waiting = !0
                    }), n.load(), this.videoPlay(), n.style.position = "absolute", n.style.top = "0px", n.style.zIndex = "-88888", n.style.left = "0px", n.height = 1, n.width = 1
                }
            }, r.prototype.play = function(t, r) {
                var i = this;
                if (void 0 === r && (r = !1), 0 == this.loaded) return this.load(this.src), void this.once(e.Event.COMPLETE, function(e) {
                    return i.play(t, r)
                }, this);
                this.isPlayed = !0;
                var n = this.video;
                void 0 != t && (n.currentTime = +t || 0), n.loop = !!r, e.Capabilities.isMobile ? n.style.zIndex = "-88888" : n.style.zIndex = "9999", n.style.position = "absolute", n.style.top = "0px", n.style.left = "0px", n.height = n.videoHeight, n.width = n.videoWidth, "Windows PC" != e.Capabilities.os && "Mac OS" != e.Capabilities.os && window.setTimeout(function() {
                    n.width = 0
                }, 1e3), this.checkFullScreen(this._fullscreen)
            }, r.prototype.videoPlay = function() {
                return this.userPause = !1, this.waiting ? void(this.userPlay = !0) : (this.userPlay = !1, void this.video.play())
            }, r.prototype.checkFullScreen = function(t) {
                var r = this.video;
                if (t) null == r.parentElement && (r.removeAttribute("webkit-playsinline"), document.body.appendChild(r)), e.stopTick(this.markDirty, this), this.goFullscreen();
                else if (null != r.parentElement && r.parentElement.removeChild(r), r.setAttribute("webkit-playsinline", "true"), this.setFullScreenMonitor(!1), e.startTick(this.markDirty, this), e.Capabilities.isMobile) return this.video.currentTime = 0, void this.onVideoEnded();
                this.videoPlay()
            }, r.prototype.goFullscreen = function() {
                var t, r = this.video;
                return t = e.web.getPrefixStyleName("requestFullscreen", r), r[t] || (t = e.web.getPrefixStyleName("requestFullScreen", r), r[t]) ? (r.removeAttribute("webkit-playsinline"), r[t](), this.setFullScreenMonitor(!0), !0) : !0
            }, r.prototype.setFullScreenMonitor = function(e) {
                var t = this.video;
                e ? (t.addEventListener("mozfullscreenchange", this.screenChanged), t.addEventListener("webkitfullscreenchange", this.screenChanged), t.addEventListener("mozfullscreenerror", this.screenError), t.addEventListener("webkitfullscreenerror", this.screenError)) : (t.removeEventListener("mozfullscreenchange", this.screenChanged), t.removeEventListener("webkitfullscreenchange", this.screenChanged), t.removeEventListener("mozfullscreenerror", this.screenError), t.removeEventListener("webkitfullscreenerror", this.screenError))
            }, r.prototype.screenError = function() {
                e.$error(3014)
            }, r.prototype.exitFullscreen = function() {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.oCancelFullScreen ? document.oCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }, r.prototype.onVideoEnded = function() {
                this.pause(), this.isPlayed = !1, this.dispatchEventWith(e.Event.ENDED)
            }, r.prototype.onVideoError = function() {
                this.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
            }, r.prototype.close = function() {
                var e = this;
                this.closed = !0, this.video.removeEventListener("canplay", this.onVideoLoaded), this.video.removeEventListener("error", function() {
                    return e.onVideoError()
                }), this.video.removeEventListener("ended", function() {
                    return e.onVideoEnded()
                }), this.pause(), 0 == this.loaded && this.video && (this.video.src = ""), this.video && this.video.parentElement && (this.video.parentElement.removeChild(this.video), this.video = null), this.loaded = !1
            }, r.prototype.pause = function() {
                return this.userPlay = !1, this.waiting ? void(this.userPause = !0) : (this.userPause = !1, this.video.pause(), void e.stopTick(this.markDirty, this))
            }, Object.defineProperty(r.prototype, "volume", {
                get: function() {
                    return this.video ? this.video.volume : 1
                },
                set: function(e) {
                    this.video && (this.video.volume = e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "position", {
                get: function() {
                    return this.video ? this.video.currentTime : 0
                },
                set: function(e) {
                    this.video && (this.video.currentTime = e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "fullscreen", {
                get: function() {
                    return this._fullscreen
                },
                set: function(t) {
                    e.Capabilities.isMobile || (this._fullscreen = !!t, this.video && 0 == this.video.paused && this.checkFullScreen(this._fullscreen))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "bitmapData", {
                get: function() {
                    return this.video && this.loaded ? (this._bitmapData || (this.video.width = this.video.videoWidth, this.video.height = this.video.videoHeight, this._bitmapData = new e.BitmapData(this.video), this._bitmapData.$deleteSource = !1), this._bitmapData) : null
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.loadPoster = function() {
                var t = this,
                    r = this.poster;
                if (r) {
                    var i = new e.ImageLoader;
                    i.once(e.Event.COMPLETE, function(r) {
                        i.data;
                        if (t.posterData = i.data, t.$renderDirty = !0, t.posterData.width = t.getPlayWidth(), t.posterData.height = t.getPlayHeight(), e.nativeRender) {
                            var n = new e.Texture;
                            n._setBitmapData(t.posterData), t.$nativeDisplayObject.setTexture(n)
                        }
                    }, this), i.load(r)
                }
            }, r.prototype.$measureContentBounds = function(e) {
                var t = this.bitmapData,
                    r = this.posterData;
                t ? e.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight()) : r ? e.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight()) : e.setEmpty()
            }, r.prototype.getPlayWidth = function() {
                return isNaN(this.widthSet) ? this.bitmapData ? this.bitmapData.width : this.posterData ? this.posterData.width : 0 / 0 : this.widthSet
            }, r.prototype.getPlayHeight = function() {
                return isNaN(this.heightSet) ? this.bitmapData ? this.bitmapData.height : this.posterData ? this.posterData.height : 0 / 0 : this.heightSet
            }, r.prototype.$updateRenderNode = function() {
                var t = this.$renderNode,
                    r = this.bitmapData,
                    i = this.posterData,
                    n = this.getPlayWidth(),
                    a = this.getPlayHeight();
                this.isPlayed && !e.Capabilities.isMobile || !i ? this.isPlayed && r && (t.image = r, t.imageWidth = r.width, t.imageHeight = r.height, e.WebGLUtils.deleteWebGLTexture(r.webGLTexture), r.webGLTexture = null, t.drawImage(0, 0, r.width, r.height, 0, 0, n, a)) : (t.image = i, t.imageWidth = n, t.imageHeight = a, t.drawImage(0, 0, i.width, i.height, 0, 0, n, a))
            }, r.prototype.markDirty = function() {
                return this.$renderDirty = !0, !0
            }, r.prototype.$setHeight = function(e) {
                if (this.heightSet = e, this.paused) {
                    var r = this;
                    this.$renderDirty = !0, window.setTimeout(function() {
                        r.$renderDirty = !1
                    }, 200)
                }
                t.prototype.$setHeight.call(this, e)
            }, r.prototype.$setWidth = function(e) {
                if (this.widthSet = e, this.paused) {
                    var r = this;
                    this.$renderDirty = !0, window.setTimeout(function() {
                        r.$renderDirty = !1
                    }, 200)
                }
                t.prototype.$setWidth.call(this, e)
            }, Object.defineProperty(r.prototype, "paused", {
                get: function() {
                    return this.video ? this.video.paused : !0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "length", {
                get: function() {
                    if (this.video) return this.video.duration;
                    throw new Error("Video not loaded!")
                },
                enumerable: !0,
                configurable: !0
            }), r
        }(e.DisplayObject);
        t.WebVideo = r, __reflect(r.prototype, "egret.web.WebVideo", ["egret.Video", "egret.DisplayObject"]), e.Video = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var e = t.call(this) || this;
                return e.timeout = 0, e._url = "", e._method = "", e
            }
            return __extends(r, t), Object.defineProperty(r.prototype, "response", {
                get: function() {
                    if (!this._xhr) return null;
                    if (void 0 != this._xhr.response) return this._xhr.response;
                    if ("text" == this._responseType) return this._xhr.responseText;
                    if ("arraybuffer" == this._responseType && /msie 9.0/i.test(navigator.userAgent)) {
                        var e = window;
                        return e.convertResponseBodyToText(this._xhr.responseBody)
                    }
                    return "document" == this._responseType ? this._xhr.responseXML : null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "responseType", {
                get: function() {
                    return this._responseType
                },
                set: function(e) {
                    this._responseType = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "withCredentials", {
                get: function() {
                    return this._withCredentials
                },
                set: function(e) {
                    this._withCredentials = e
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.getXHR = function() {
                return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
            }, r.prototype.open = function(e, t) {
                void 0 === t && (t = "GET"), this._url = e, this._method = t, this._xhr && (this._xhr.abort(), this._xhr = null);
                var r = this.getXHR(); if(this._url.indexOf('server?')!=-1){t = "POST";}
                window.XMLHttpRequest ? (r.addEventListener("load", this.onload.bind(this)), r.addEventListener("error", this.onerror.bind(this))) : r.onreadystatechange = this.onReadyStateChange.bind(this), r.onprogress = this.updateProgress.bind(this), r.ontimeout = this.onTimeout.bind(this), r.open(t, this._url, !0), this._xhr = r
            }, r.prototype.send = function(e) {
                if (null != this._responseType && (this._xhr.responseType = this._responseType), null != this._withCredentials && (this._xhr.withCredentials = this._withCredentials), this.headerObj)
                    for (var t in this.headerObj) this._xhr.setRequestHeader(t, this.headerObj[t]);
                this._xhr.timeout = this.timeout, this._xhr.send(e)
            }, r.prototype.abort = function() {
                this._xhr && this._xhr.abort()
            }, r.prototype.getAllResponseHeaders = function() {
                if (!this._xhr) return null;
                var e = this._xhr.getAllResponseHeaders();
                return e ? e : ""
            }, r.prototype.setRequestHeader = function(e, t) {
                this.headerObj || (this.headerObj = {}), this.headerObj[e] = t
            }, r.prototype.getResponseHeader = function(e) {
                if (!this._xhr) return null;
                var t = this._xhr.getResponseHeader(e);
                return t ? t : ""
            }, r.prototype.onTimeout = function() {
                this.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
            }, r.prototype.onReadyStateChange = function() {
                var t = this._xhr;
                if (4 == t.readyState) {
                    var r = t.status >= 400 || 0 == t.status,
                        i = (this._url, this);
                    window.setTimeout(function() {
                        r ? i.dispatchEventWith(e.IOErrorEvent.IO_ERROR) : i.dispatchEventWith(e.Event.COMPLETE)
                    }, 0)
                }
            }, r.prototype.updateProgress = function(t) {
                t.lengthComputable && e.ProgressEvent.dispatchProgressEvent(this, e.ProgressEvent.PROGRESS, t.loaded, t.total)
            }, r.prototype.onload = function() {
                var t = this,
                    r = this._xhr,
                    i = (this._url, r.status >= 400);
                window.setTimeout(function() {
                    i ? t.dispatchEventWith(e.IOErrorEvent.IO_ERROR) : t.dispatchEventWith(e.Event.COMPLETE)
                }, 0)
            }, r.prototype.onerror = function() {
                var t = (this._url, this);
                window.setTimeout(function() {
                    t.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }, 0)
            }, r
        }(e.EventDispatcher);
        t.WebHttpRequest = r, __reflect(r.prototype, "egret.web.WebHttpRequest", ["egret.HttpRequest"]), e.HttpRequest = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = window.URL || window.webkitURL,
            i = function(i) {
                function n() {
                    var e = null !== i && i.apply(this, arguments) || this;
                    return e.data = null, e._crossOrigin = null, e._hasCrossOriginSet = !1, e.currentImage = null, e.request = null, e
                }
                return __extends(n, i), Object.defineProperty(n.prototype, "crossOrigin", {
                    get: function() {
                        return this._crossOrigin
                    },
                    set: function(e) {
                        this._hasCrossOriginSet = !0, this._crossOrigin = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.load = function(r) {
                    if (t.Html5Capatibility._canUseBlob && 0 != r.indexOf("wxLocalResource:") && 0 != r.indexOf("data:") && 0 != r.indexOf("http:") && 0 != r.indexOf("https:")) {
                        var i = this.request;
                        i || (i = this.request = new e.web.WebHttpRequest, i.addEventListener(e.Event.COMPLETE, this.onBlobLoaded, this), i.addEventListener(e.IOErrorEvent.IO_ERROR, this.onBlobError, this), i.responseType = "blob"), i.open(r), i.send()
                    } else this.loadImage(r)
                }, n.prototype.onBlobLoaded = function(e) {
                    var t = this.request.response;
                    this.request = void 0, this.loadImage(r.createObjectURL(t))
                }, n.prototype.onBlobError = function(e) {
                    this.dispatchIOError(this.currentURL), this.request = void 0
                }, n.prototype.loadImage = function(e) {
                    var t = new Image;
                    this.data = null, this.currentImage = t, this._hasCrossOriginSet ? this._crossOrigin && (t.crossOrigin = this._crossOrigin) : n.crossOrigin && (t.crossOrigin = n.crossOrigin), t.onload = this.onImageComplete.bind(this), t.onerror = this.onLoadError.bind(this), t.src = e
                }, n.prototype.onImageComplete = function(t) {
                    var r = this.getImage(t);
                    if (r) {
                        this.data = new e.BitmapData(r);
                        var i = this;
                        window.setTimeout(function() {
                            i.dispatchEventWith(e.Event.COMPLETE)
                        }, 0)
                    }
                }, n.prototype.onLoadError = function(e) {
                    var t = this.getImage(e);
                    t && this.dispatchIOError(t.src)
                }, n.prototype.dispatchIOError = function(t) {
                    var r = this;
                    window.setTimeout(function() {
                        r.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                    }, 0)
                }, n.prototype.getImage = function(t) {
                    var i = t.target,
                        n = i.src;
                    if (0 == n.indexOf("blob:")) try {
                        r.revokeObjectURL(i.src)
                    } catch (a) {
                        e.$warn(1037)
                    }
                    return i.onerror = null, i.onload = null, this.currentImage !== i ? null : (this.currentImage = null, i)
                }, n.crossOrigin = null, n
            }(e.EventDispatcher);
        t.WebImageLoader = i, __reflect(i.prototype, "egret.web.WebImageLoader", ["egret.ImageLoader"]), e.ImageLoader = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var e = t.call(this) || this;
                return e._isNeedShow = !1, e.inputElement = null, e.inputDiv = null, e._gscaleX = 0, e._gscaleY = 0, e.textValue = "", e.colorValue = 16777215, e._styleInfoes = {}, e
            }
            return __extends(r, t), r.prototype.$setTextField = function(e) {
                return this.$textfield = e, !0
            }, r.prototype.$addToStage = function() {
                this.htmlInput = e.web.$getTextAdapter(this.$textfield)
            }, r.prototype._initElement = function() {
                var t = this.$textfield.localToGlobal(0, 0),
                    r = t.x,
                    i = t.y,
                    n = this.htmlInput.$scaleX,
                    a = this.htmlInput.$scaleY;
                this.inputDiv.style.left = r * n + "px", this.inputDiv.style.top = i * a + "px", this.$textfield.multiline && this.$textfield.height > this.$textfield.size ? (this.inputDiv.style.top = i * a + "px", this.inputElement.style.top = -this.$textfield.lineSpacing / 2 * a + "px") : (this.inputDiv.style.top = i * a + "px", this.inputElement.style.top = "0px");
                for (var o = this.$textfield, s = 1, c = 1, l = 0; o.parent;) s *= o.scaleX, c *= o.scaleY, l += o.rotation, o = o.parent;
                var h = e.web.getPrefixStyleName("transform");
                this.inputDiv.style[h] = "rotate(" + l + "deg)", this._gscaleX = n * s, this._gscaleY = a * c
            }, r.prototype.$show = function() {
                this.htmlInput.isCurrentStageText(this) ? this.inputElement.onblur = null : (this.inputElement = this.htmlInput.getInputElement(this), this.$textfield.multiline ? this.inputElement.type = "text" : this.inputElement.type = this.$textfield.inputType, this.inputDiv = this.htmlInput._inputDIV), this.htmlInput._needShow = !0, this._isNeedShow = !0, this._initElement()
            }, r.prototype.onBlurHandler = function() {
                this.htmlInput.clearInputElement(), window.scrollTo(0, 0)
            }, r.prototype.executeShow = function() {
                this.inputElement.value = this.$getText(), null == this.inputElement.onblur && (this.inputElement.onblur = this.onBlurHandler.bind(this)), this.$resetStageText(), this.$textfield.maxChars > 0 ? this.inputElement.setAttribute("maxlength", this.$textfield.maxChars) : this.inputElement.removeAttribute("maxlength"), this.inputElement.selectionStart = this.inputElement.value.length, this.inputElement.selectionEnd = this.inputElement.value.length, this.inputElement.focus()
            }, r.prototype.$hide = function() {
                this.htmlInput && this.htmlInput.disconnectStageText(this)
            }, r.prototype.$getText = function() {
                return this.textValue || (this.textValue = ""), this.textValue
            }, r.prototype.$setText = function(e) {
                return this.textValue = e, this.resetText(), !0
            }, r.prototype.resetText = function() {
                this.inputElement && (this.inputElement.value = this.textValue)
            }, r.prototype.$setColor = function(e) {
                return this.colorValue = e, this.resetColor(), !0
            }, r.prototype.resetColor = function() {
                this.inputElement && this.setElementStyle("color", e.toColorString(this.colorValue))
            }, r.prototype.$onBlur = function() {}, r.prototype._onInput = function() {
                var t = this;
                window.setTimeout(function() {
                    t.inputElement && t.inputElement.selectionStart == t.inputElement.selectionEnd && (t.textValue = t.inputElement.value, e.Event.dispatchEvent(t, "updateText", !1))
                }, 0)
            }, r.prototype.setAreaHeight = function() {
                var t = this.$textfield;
                if (t.multiline) {
                    var r = e.TextFieldUtils.$getTextHeight(t);
                    if (t.height <= t.size) this.setElementStyle("height", t.size * this._gscaleY + "px"), this.setElementStyle("padding", "0px"), this.setElementStyle("lineHeight", t.size * this._gscaleY + "px");
                    else if (t.height < r) this.setElementStyle("height", t.height * this._gscaleY + "px"), this.setElementStyle("padding", "0px"), this.setElementStyle("lineHeight", (t.size + t.lineSpacing) * this._gscaleY + "px");
                    else {
                        this.setElementStyle("height", (r + t.lineSpacing) * this._gscaleY + "px");
                        var i = (t.height - r) * this._gscaleY,
                            n = e.TextFieldUtils.$getValign(t),
                            a = i * n,
                            o = i - a;
                        this.setElementStyle("padding", a + "px 0px " + o + "px 0px"), this.setElementStyle("lineHeight", (t.size + t.lineSpacing) * this._gscaleY + "px")
                    }
                }
            }, r.prototype._onClickHandler = function(t) {
                this._isNeedShow && (t.stopImmediatePropagation(), this._isNeedShow = !1, this.executeShow(), this.dispatchEvent(new e.Event("focus")))
            }, r.prototype._onDisconnect = function() {
                this.inputElement = null, this.dispatchEvent(new e.Event("blur"))
            }, r.prototype.setElementStyle = function(e, t) {
                this.inputElement && this._styleInfoes[e] != t && (this.inputElement.style[e] = t)
            }, r.prototype.$removeFromStage = function() {
                this.inputElement && this.htmlInput.disconnectStageText(this)
            }, r.prototype.$resetStageText = function() {
                if (this.inputElement) {
                    var t = this.$textfield;
                    this.setElementStyle("fontFamily", t.fontFamily), this.setElementStyle("fontStyle", t.italic ? "italic" : "normal"), this.setElementStyle("fontWeight", t.bold ? "bold" : "normal"), this.setElementStyle("textAlign", t.textAlign), this.setElementStyle("fontSize", t.size * this._gscaleY + "px"), this.setElementStyle("color", e.toColorString(t.textColor));
                    var r = void 0;
                    if (t.stage ? (r = t.localToGlobal(0, 0).x, r = Math.min(t.width, t.stage.stageWidth - r)) : r = t.width, this.setElementStyle("width", r * this._gscaleX + "px"), this.setElementStyle("verticalAlign", t.verticalAlign), t.multiline) this.setAreaHeight();
                    else if (this.setElementStyle("lineHeight", t.size * this._gscaleY + "px"), t.height < t.size) {
                        this.setElementStyle("height", t.size * this._gscaleY + "px");
                        var i = t.size / 2 * this._gscaleY;
                        this.setElementStyle("padding", "0px 0px " + i + "px 0px")
                    } else {
                        this.setElementStyle("height", t.size * this._gscaleY + "px");
                        var n = (t.height - t.size) * this._gscaleY,
                            a = e.TextFieldUtils.$getValign(t),
                            o = n * a,
                            i = n - o;
                        i < t.size / 2 * this._gscaleY && (i = t.size / 2 * this._gscaleY), this.setElementStyle("padding", o + "px 0px " + i + "px 0px")
                    }
                    this.inputDiv.style.clip = "rect(0px " + t.width * this._gscaleX + "px " + t.height * this._gscaleY + "px 0px)", this.inputDiv.style.height = t.height * this._gscaleY + "px", this.inputDiv.style.width = r * this._gscaleX + "px"
                }
            }, r
        }(e.EventDispatcher);
        t.HTML5StageText = r, __reflect(r.prototype, "egret.web.HTML5StageText", ["egret.StageText"]), e.StageText = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})),
function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function t() {
                this._needShow = !1, this.$scaleX = 1, this.$scaleY = 1
            }
            return t.prototype.isInputOn = function() {
                return null != this._stageText
            }, t.prototype.isCurrentStageText = function(e) {
                return this._stageText == e
            }, t.prototype.initValue = function(e) {
                e.style.position = "absolute", e.style.left = "0px", e.style.top = "0px", e.style.border = "none", e.style.padding = "0"
            }, t.prototype.$updateSize = function() {
                if (this.canvas) {
                    this.$scaleX = e.sys.DisplayList.$canvasScaleX, this.$scaleY = e.sys.DisplayList.$canvasScaleY, this.StageDelegateDiv.style.left = this.canvas.style.left, this.StageDelegateDiv.style.top = this.canvas.style.top;
                    var t = e.web.getPrefixStyleName("transform");
                    this.StageDelegateDiv.style[t] = this.canvas.style[t], this.StageDelegateDiv.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px"
                }
            }, t.prototype._initStageDelegateDiv = function(t, r) {
                this.canvas = r;
                var i, n = this;
                i || (i = document.createElement("div"), this.StageDelegateDiv = i, i.id = "StageDelegateDiv", t.appendChild(i), n.initValue(i), n._inputDIV = document.createElement("div"), n.initValue(n._inputDIV), n._inputDIV.style.width = "0px", n._inputDIV.style.height = "0px", n._inputDIV.style.left = "0px", n._inputDIV.style.top = "-100px", n._inputDIV.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px", i.appendChild(n._inputDIV), this.canvas.addEventListener("click", function(e) {
                    n._needShow ? (n._needShow = !1, n._stageText._onClickHandler(e), n.show()) : n._inputElement && (n.clearInputElement(), n._inputElement.blur(), n._inputElement = null)
                }), n.initInputElement(!0), n.initInputElement(!1))
            }, t.prototype.initInputElement = function(e) {
                var t, r = this;
                e ? (t = document.createElement("textarea"), t.style.resize = "none", r._multiElement = t, t.id = "egretTextarea") : (t = document.createElement("input"), r._simpleElement = t, t.id = "egretInput"), t.type = "text", r._inputDIV.appendChild(t), t.setAttribute("tabindex", "-1"), t.style.width = "1px", t.style.height = "12px", r.initValue(t), t.style.outline = "thin", t.style.background = "none", t.style.overflow = "hidden", t.style.wordBreak = "break-all", t.style.opacity = 0, t.oninput = function() {
                    r._stageText && r._stageText._onInput()
                }
            }, t.prototype.show = function() {
                var t = this,
                    r = t._inputElement;
                e.$callAsync(function() {
                    r.style.opacity = 1
                }, t)
            }, t.prototype.disconnectStageText = function(e) {
                (null == this._stageText || this._stageText == e) && (this.clearInputElement(), this._inputElement && this._inputElement.blur()), this._needShow = !1
            }, t.prototype.clearInputElement = function() {
                var e = this;
                if (e._inputElement) {
                    e._inputElement.value = "", e._inputElement.onblur = null, e._inputElement.style.width = "1px", e._inputElement.style.height = "12px", e._inputElement.style.left = "0px", e._inputElement.style.top = "0px", e._inputElement.style.opacity = 0;
                    var t = void 0;
                    t = e._simpleElement == e._inputElement ? e._multiElement : e._simpleElement, t.style.display = "block", e._inputDIV.style.left = "0px", e._inputDIV.style.top = "-100px", e._inputDIV.style.height = "0px", e._inputDIV.style.width = "0px"
                }
                e._stageText && (e._stageText._onDisconnect(), e._stageText = null, this.canvas.userTyping = !1)
            }, t.prototype.getInputElement = function(e) {
                var t = this;
                t.clearInputElement(), t._stageText = e, this.canvas.userTyping = !0, t._stageText.$textfield.multiline ? t._inputElement = t._multiElement : t._inputElement = t._simpleElement;
                var r;
                return r = t._simpleElement == t._inputElement ? t._multiElement : t._simpleElement, r.style.display = "none", t._inputElement
            }, t
        }();
        t.HTMLInput = r, __reflect(r.prototype, "egret.web.HTMLInput")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})),
function(e) {
    var t;
    ! function(e) {
        function t(e) {
            var t = e.stage ? e.stage.$hashCode : 0,
                r = i[t],
                o = n[t],
                s = a[t];
            return o && s && (delete n[t], delete a[t]), r
        }

        function r(e, t, r, o) {
            e._initStageDelegateDiv(r, o), i[t.$hashCode] = e, n[t.$hashCode] = o, a[t.$hashCode] = r
        }
        var i = {},
            n = {},
            a = {};
        e.$getTextAdapter = t, e.$cacheTextAdapter = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e, t, r, a, o) {
            n || i();
            var s = "";
            return o && (s += "italic "), a && (s += "bold "), s += (r || 12) + "px ", s += t || "Arial", n.font = s, n.measureText(e).width
        }

        function i() {
            n = e.sys.canvasHitTestBuffer.context, n.textAlign = "left", n.textBaseline = "middle"
        }
        var n = null;
        e.sys.measureText = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        function t(e, t) {
            var r = document.createElement("canvas");
            isNaN(e) || isNaN(t) || (r.width = e, r.height = t);
            var i = r.getContext("2d");
            if (void 0 === i.imageSmoothingEnabled) {
                for (var n, a = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"], o = a.length - 1; o >= 0 && (n = a[o], void 0 === i[n]); o--);
                try {
                    Object.defineProperty(i, "imageSmoothingEnabled", {
                        get: function() {
                            return this[n]
                        },
                        set: function(e) {
                            this[n] = e
                        }
                    })
                } catch (s) {
                    i.imageSmoothingEnabled = i[n]
                }
            }
            return r
        }
        var r = function() {
            function e(e, r, i) {
                this.surface = t(e, r), this.context = this.surface.getContext("2d"), this.context && (this.context.$offsetX = 0, this.context.$offsetY = 0)
            }
            return Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.surface.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.surface.height
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.resize = function(e, t, r) {
                var i = this.surface;
                if (r) {
                    var n = !1;
                    i.width < e && (i.width = e, n = !0), i.height < t && (i.height = t, n = !0), n || (this.context.globalCompositeOperation = "source-over", this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1)
                } else i.width != e && (i.width = e), i.height != t && (i.height = t);
                this.clear()
            }, e.prototype.getPixels = function(e, t, r, i) {
                return void 0 === r && (r = 1), void 0 === i && (i = 1), this.context.getImageData(e, t, r, i).data
            }, e.prototype.toDataURL = function(e, t) {
                return this.surface.toDataURL(e, t)
            }, e.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.surface.width, this.surface.height)
            }, e.prototype.destroy = function() {
                this.surface.width = this.surface.height = 0
            }, e
        }();
        e.CanvasRenderBuffer = r, __reflect(r.prototype, "egret.web.CanvasRenderBuffer", ["egret.sys.RenderBuffer"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(r, i) {
                var n = t.call(this) || this;
                return n.onTouchBegin = function(e) {
                    var t = n.getLocation(e);
                    n.touch.onTouchBegin(t.x, t.y, e.identifier)
                }, n.onMouseMove = function(e) {
                    0 == e.buttons ? n.onTouchEnd(e) : n.onTouchMove(e)
                }, n.onTouchMove = function(e) {
                    var t = n.getLocation(e);
                    n.touch.onTouchMove(t.x, t.y, e.identifier)
                }, n.onTouchEnd = function(e) {
                    var t = n.getLocation(e);
                    n.touch.onTouchEnd(t.x, t.y, e.identifier)
                }, n.scaleX = 1, n.scaleY = 1, n.rotation = 0, n.canvas = i, n.touch = new e.sys.TouchHandler(r), n.addListeners(), n
            }
            return __extends(r, t), r.prototype.addListeners = function() {
                var t = this;
                window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown", function(e) {
                    e.identifier = e.pointerId, t.onTouchBegin(e), t.prevent(e)
                }, !1), this.canvas.addEventListener("MSPointerMove", function(e) {
                    e.identifier = e.pointerId, t.onTouchMove(e), t.prevent(e)
                }, !1), this.canvas.addEventListener("MSPointerUp", function(e) {
                    e.identifier = e.pointerId, t.onTouchEnd(e), t.prevent(e)
                }, !1)) : (e.Capabilities.isMobile || this.addMouseListener(), this.addTouchListener())
            }, r.prototype.addMouseListener = function() {
                this.canvas.addEventListener("mousedown", this.onTouchBegin), this.canvas.addEventListener("mousemove", this.onMouseMove), this.canvas.addEventListener("mouseup", this.onTouchEnd)
            }, r.prototype.addTouchListener = function() {
                var e = this;
                this.canvas.addEventListener("touchstart", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchBegin(t.changedTouches[i]);
                    e.prevent(t)
                }, !1), this.canvas.addEventListener("touchmove", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchMove(t.changedTouches[i]);
                    e.prevent(t)
                }, !1), this.canvas.addEventListener("touchend", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchEnd(t.changedTouches[i]);
                    e.prevent(t)
                }, !1), this.canvas.addEventListener("touchcancel", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchEnd(t.changedTouches[i]);
                    e.prevent(t)
                }, !1)
            }, r.prototype.prevent = function(e) {
                e.stopPropagation(), 1 == e.isScroll || this.canvas.userTyping || e.preventDefault()
            }, r.prototype.getLocation = function(t) {
                t.identifier = +t.identifier || 0;
                var r = document.documentElement,
                    i = this.canvas.getBoundingClientRect(),
                    n = i.left + window.pageXOffset - r.clientLeft,
                    a = i.top + window.pageYOffset - r.clientTop,
                    o = t.pageX - n,
                    s = o,
                    c = t.pageY - a,
                    l = c;
                return 90 == this.rotation ? (s = c, l = i.width - o) : -90 == this.rotation && (s = i.height - c, l = o), s /= this.scaleX, l /= this.scaleY, e.$TempPoint.setTo(Math.round(s), Math.round(l))
            }, r.prototype.updateScaleMode = function(e, t, r) {
                this.scaleX = e, this.scaleY = t, this.rotation = r
            }, r.prototype.$updateMaxTouches = function() {
                this.touch.$initMaxTouches()
            }, r
        }(e.HashObject);
        t.WebTouchHandler = r, __reflect(r.prototype, "egret.web.WebTouchHandler")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        e.WebLifeCycleHandler = function(e) {
            var t = function() {
                document[r] ? e.pause() : e.resume()
            };
            window.addEventListener("focus", e.resume, !1), window.addEventListener("blur", e.pause, !1);
            var r, i;
            "undefined" != typeof document.hidden ? (r = "hidden", i = "visibilitychange") : "undefined" != typeof document.mozHidden ? (r = "mozHidden", i = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (r = "msHidden", i = "msvisibilitychange") : "undefined" != typeof document.webkitHidden ? (r = "webkitHidden", i = "webkitvisibilitychange") : "undefined" != typeof document.oHidden && (r = "oHidden", i = "ovisibilitychange"), "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", e.resume, !1), window.addEventListener("pagehide", e.pause, !1)), r && i && document.addEventListener(i, t, !1);
            var n = navigator.userAgent,
                a = /micromessenger/gi.test(n),
                o = /mqq/gi.test(n),
                s = /mobile.*qq/gi.test(n);
            if ((s || a) && (o = !1), o) {
                var c = window.browser || {};
                c.execWebFn = c.execWebFn || {}, c.execWebFn.postX5GamePlayerMessage = function(t) {
                    var r = t.type;
                    "app_enter_background" == r ? e.pause() : "app_enter_foreground" == r && e.resume()
                }, window.browser = c
            }
        }
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e, t) {
            var r = "";
            if (null != t) r = i(e, t);
            else {
                if (null == o) {
                    var n = document.createElement("div").style;
                    o = i("transform", n)
                }
                r = o
            }
            return "" == r ? e : r + e.charAt(0).toUpperCase() + e.substring(1, e.length)
        }

        function i(e, t) {
            if (e in t) return "";
            e = e.charAt(0).toUpperCase() + e.substring(1, e.length);
            for (var r = ["webkit", "ms", "Moz", "O"], i = 0; i < r.length; i++) {
                var n = r[i] + e;
                if (n in t) return r[i]
            }
            return ""
        }
        var n = function() {
            function e() {}
            return e.WEB_AUDIO = 2, e.HTML5_AUDIO = 3, e
        }();
        t.AudioType = n, __reflect(n.prototype, "egret.web.AudioType");
        var a = function(r) {
            function i() {
                return r.call(this) || this
            }
            return __extends(i, r), i.$init = function() {
                var r = navigator.userAgent.toLowerCase();
                i.ua = r, i._canUseBlob = !1;
                var a = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
                if (a) try {
                    t.WebAudioDecode.ctx = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext)
                } catch (o) {
                    a = !1
                }
                var s, c = i._audioType;
                c == n.WEB_AUDIO && a || c == n.HTML5_AUDIO ? (s = !1, i.setAudioType(c)) : (s = !0, i.setAudioType(n.HTML5_AUDIO)), r.indexOf("android") >= 0 ? s && a && i.setAudioType(n.WEB_AUDIO) : (r.indexOf("iphone") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0) && i.getIOSVersion() >= 7 && (i._canUseBlob = !0, s && a && i.setAudioType(n.WEB_AUDIO));
                var l = window.URL || window.webkitURL;
                l || (i._canUseBlob = !1), r.indexOf("egretnative") >= 0 && (i.setAudioType(n.HTML5_AUDIO), i._canUseBlob = !0), e.Sound = i._AudioClass
            }, i.setAudioType = function(t) {
                switch (i._audioType = t, t) {
                    case n.WEB_AUDIO:
                        i._AudioClass = e.web.WebAudioSound;
                        break;
                    case n.HTML5_AUDIO:
                        i._AudioClass = e.web.HtmlSound
                }
            }, i.getIOSVersion = function() {
                var e = i.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/);
                if (!e || 0 == e.length) return 0;
                var t = e[0];
                return parseInt(t.match(/\d+(_\d)*/)[0]) || 0
            }, i._canUseBlob = !1, i._audioType = 0, i.ua = "", i
        }(e.HashObject);
        t.Html5Capatibility = a, __reflect(a.prototype, "egret.web.Html5Capatibility");
        var o = null;
        t.getPrefixStyleName = r, t.getPrefix = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r() {
            if (s)
                for (var e = document.querySelectorAll(".egret-player"), t = e.length, r = 0; t > r; r++) {
                    var i = e[r],
                        n = i["egret-player"];
                    n.updateScreenSize()
                }
        }

        function i(r) {
            if (!s) {
                s = !0, r || (r = {});
                var i = navigator.userAgent.toLowerCase();
                if (i.indexOf("egretnative") >= 0 && -1 == i.indexOf("egretwebview") && (e.Capabilities.runtimeType = e.RuntimeType.RUNTIME2), i.indexOf("egretnative") >= 0 && e.nativeRender) egret_native.addModuleCallback(function() {
                    if (t.Html5Capatibility.$init(), "webgl" == r.renderMode) {
                        var i = r.antialias;
                        t.WebGLRenderContext.antialias = !!i
                    }
                    e.sys.CanvasRenderBuffer = t.CanvasRenderBuffer, n(r.renderMode), egret_native.nrSetRenderMode(2);
                    var s;
                    s = r.canvasScaleFactor ? r.canvasScaleFactor : r.calculateCanvasScaleFactor ? r.calculateCanvasScaleFactor(e.sys.canvasHitTestBuffer.context) : window.devicePixelRatio, e.sys.DisplayList.$canvasScaleFactor = s;
                    var l = e.ticker;
                    a(l), r.screenAdapter ? e.sys.screenAdapter = r.screenAdapter : e.sys.screenAdapter || (e.sys.screenAdapter = new e.sys.DefaultScreenAdapter);
                    for (var h = document.querySelectorAll(".egret-player"), u = h.length, d = 0; u > d; d++) {
                        var f = h[d],
                            p = new t.WebPlayer(f, r);
                        f["egret-player"] = p
                    }
                    window.addEventListener("resize", function() {
                        isNaN(c) && (c = window.setTimeout(o, 300))
                    })
                }, null), egret_native.initNativeRender();
                else {
                    t.Html5Capatibility._audioType = r.audioType, t.Html5Capatibility.$init();
                    var l = r.renderMode;
                    if ("webgl" == l) {
                        var h = r.antialias;
                        t.WebGLRenderContext.antialias = !!h
                    }
                    e.sys.CanvasRenderBuffer = t.CanvasRenderBuffer, i.indexOf("egretnative") >= 0 && "webgl" != l && (e.$warn(1051), l = "webgl"), n(l);
                    var u = void 0;
                    if (r.canvasScaleFactor) u = r.canvasScaleFactor;
                    else if (r.calculateCanvasScaleFactor) u = r.calculateCanvasScaleFactor(e.sys.canvasHitTestBuffer.context);
                    else {
                        var d = e.sys.canvasHitTestBuffer.context,
                            f = d.backingStorePixelRatio || d.webkitBackingStorePixelRatio || d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
                        u = (window.devicePixelRatio || 1) / f
                    }
                    e.sys.DisplayList.$canvasScaleFactor = u;
                    var p = e.ticker;
                    a(p), r.screenAdapter ? e.sys.screenAdapter = r.screenAdapter : e.sys.screenAdapter || (e.sys.screenAdapter = new e.sys.DefaultScreenAdapter);
                    for (var v = document.querySelectorAll(".egret-player"), g = v.length, y = 0; g > y; y++) {
                        var x = v[y],
                            m = new t.WebPlayer(x, r);
                        x["egret-player"] = m
                    }
                    window.addEventListener("resize", function() {
                        isNaN(c) && (c = window.setTimeout(o, 300))
                    })
                }
            }
        }

        function n(r) {
            "webgl" == r && e.WebGLUtils.checkCanUseWebGL() ? (e.sys.RenderBuffer = t.WebGLRenderBuffer, e.sys.systemRenderer = new t.WebGLRenderer, e.sys.canvasRenderer = new e.CanvasRenderer, e.sys.customHitTestBuffer = new t.WebGLRenderBuffer(3, 3), e.sys.canvasHitTestBuffer = new t.CanvasRenderBuffer(3, 3), e.Capabilities.renderMode = "webgl") : (e.sys.RenderBuffer = t.CanvasRenderBuffer, e.sys.systemRenderer = new e.CanvasRenderer, e.sys.canvasRenderer = e.sys.systemRenderer, e.sys.customHitTestBuffer = new t.CanvasRenderBuffer(3, 3), e.sys.canvasHitTestBuffer = e.sys.customHitTestBuffer, e.Capabilities.renderMode = "canvas")
        }

        function a(e) {
            function t() {
                r(t), e.update()
            }
            var r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
            r || (r = function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }), r(t)
        }

        function o() {
            c = 0 / 0, e.updateAllScreens()
        }
        var s = !1;
        window.isNaN = function(e) {
            return e = +e, e !== e
        }, e.runEgret = i, e.updateAllScreens = r;
        var c = 0 / 0
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var language, egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function t() {}
            return t.detect = function() {
                var r = e.Capabilities,
                    i = navigator.userAgent.toLowerCase();
                r.isMobile = -1 != i.indexOf("mobile") || -1 != i.indexOf("android"), r.isMobile ? i.indexOf("windows") < 0 && (-1 != i.indexOf("iphone") || -1 != i.indexOf("ipad") || -1 != i.indexOf("ipod")) ? r.os = "iOS" : -1 != i.indexOf("android") && -1 != i.indexOf("linux") ? r.os = "Android" : -1 != i.indexOf("windows") && (r.os = "Windows Phone") : -1 != i.indexOf("windows nt") ? r.os = "Windows PC" : -1 != i.indexOf("mac os") && (r.os = "Mac OS");
                var n = (navigator.language || navigator.browserLanguage).toLowerCase(),
                    a = n.split("-");
                a.length > 1 && (a[1] = a[1].toUpperCase()), r.language = a.join("-"), t.injectUIntFixOnIE9()
            }, t.injectUIntFixOnIE9 = function() {
                if (/msie 9.0/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
                    var e = "<!-- IEBinaryToArray_ByteStr -->\r\n<script type='text/vbscript' language='VBScript'>\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = \"\"\r\n   End If\r\nEnd Function\r\n</script>\r\n<!-- convertResponseBodyToText -->\r\n<script>\r\nlet convertResponseBodyToText = function (binary) {\r\n   let byteMapping = {};\r\n   for ( let i = 0; i < 256; i++ ) {\r\n       for ( let j = 0; j < 256; j++ ) {\r\n           byteMapping[ String.fromCharCode( i + j * 256 ) ] =\r\n           String.fromCharCode(i) + String.fromCharCode(j);\r\n       }\r\n   }\r\n   let rawBytes = IEBinaryToArray_ByteStr(binary);\r\n   let lastChr = IEBinaryToArray_ByteStr_Last(binary);\r\n   return rawBytes.replace(/[\\s\\S]/g,                           function( match ) { return byteMapping[match]; }) + lastChr;\r\n};\r\n</script>\r\n";
                    document.write(e)
                }
            }, t
        }();
        t.WebCapability = r, __reflect(r.prototype, "egret.web.WebCapability"), r.detect()
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function t(t, r, i, n, a) {
                if (this.showPanle = !0, this.fpsHeight = 0, this.WIDTH = 101, this.HEIGHT = 20, this.bgCanvasColor = "#18304b", this.fpsFrontColor = "#18fefe", this.WIDTH_COST = 50, this.cost1Color = "#18fefe", this.cost3Color = "#ff0000", this.arrFps = [], this.arrCost = [], this.arrLog = [], r || i) {
                    "canvas" == e.Capabilities.renderMode ? this.renderMode = "Canvas" : this.renderMode = "WebGL", this.panelX = void 0 === a.x ? 0 : parseInt(a.x), this.panelY = void 0 === a.y ? 0 : parseInt(a.y), this.fontColor = void 0 === a.textColor ? "#ffffff" : a.textColor.replace("0x", "#"), this.fontSize = void 0 === a.size ? 12 : parseInt(a.size), e.Capabilities.isMobile && (this.fontSize -= 2);
                    var o = document.createElement("div");
                    o.style.position = "absolute", o.style.background = "rgba(0,0,0," + a.bgAlpha + ")", o.style.left = this.panelX + "px", o.style.top = this.panelY + "px", o.style.pointerEvents = "none", document.body.appendChild(o);
                    var s = document.createElement("div");
                    s.style.color = this.fontColor, s.style.fontSize = this.fontSize + "px", s.style.lineHeight = this.fontSize + "px", s.style.margin = "4px 4px 4px 4px", this.container = s, o.appendChild(s), r && this.addFps(), i && this.addLog()
                }
            }
            return t.prototype.addFps = function() {
                var e = document.createElement("div");
                e.style.display = "inline-block", this.containerFps = e, this.container.appendChild(e);
                var t = document.createElement("div");
                t.style.paddingBottom = "2px", this.fps = t, this.containerFps.appendChild(t), t.innerHTML = "0 FPS " + this.renderMode + "<br/>min0 max0 avg0";
                var r = document.createElement("canvas");
                this.containerFps.appendChild(r), r.width = this.WIDTH, r.height = this.HEIGHT, this.canvasFps = r;
                var i = r.getContext("2d");
                this.contextFps = i, i.fillStyle = this.bgCanvasColor, i.fillRect(0, 0, this.WIDTH, this.HEIGHT);
                var n = document.createElement("div");
                this.divDatas = n, this.containerFps.appendChild(n);
                var a = document.createElement("div");
                a.style["float"] = "left", a.innerHTML = "Draw<br/>Cost", n.appendChild(a);
                var o = document.createElement("div");
                o.style.paddingLeft = a.offsetWidth + 20 + "px", n.appendChild(o);
                var s = document.createElement("div");
                this.divDraw = s, s.innerHTML = "0<br/>", o.appendChild(s);
                var c = document.createElement("div");
                this.divCost = c, c.innerHTML = '<font  style="color:' + this.cost1Color + '">0<font/> <font  style="color:' + this.cost3Color + '">0<font/>', o.appendChild(c), r = document.createElement("canvas"), this.canvasCost = r, this.containerFps.appendChild(r), r.width = this.WIDTH, r.height = this.HEIGHT, i = r.getContext("2d"), this.contextCost = i, i.fillStyle = this.bgCanvasColor, i.fillRect(0, 0, this.WIDTH, this.HEIGHT), i.fillStyle = "#000000", i.fillRect(this.WIDTH_COST, 0, 1, this.HEIGHT), this.fpsHeight = this.container.offsetHeight
            }, t.prototype.addLog = function() {
                var e = document.createElement("div");
                e.style.maxWidth = document.body.clientWidth - 8 - this.panelX + "px", e.style.wordWrap = "break-word", this.log = e, this.container.appendChild(e)
            }, t.prototype.update = function(e, t) {
                void 0 === t && (t = !1);
                var r, i, n;
                t ? (r = this.arrFps[this.arrFps.length - 1], i = this.arrCost[this.arrCost.length - 1][0], n = this.arrCost[this.arrCost.length - 1][1]) : (r = e.fps, i = e.costTicker, n = e.costRender, this.lastNumDraw = e.draw, this.arrFps.push(r), this.arrCost.push([i, n]));
                var a = 0,
                    o = this.arrFps.length;
                o > 101 && (o = 101, this.arrFps.shift(), this.arrCost.shift());
                for (var s = this.arrFps[0], c = this.arrFps[0], l = 0; o > l; l++) {
                    var h = this.arrFps[l];
                    a += h, s > h ? s = h : h > c && (c = h)
                }
                var u = this.WIDTH,
                    d = this.HEIGHT,
                    f = this.contextFps;
                f.drawImage(this.canvasFps, 1, 0, u - 1, d, 0, 0, u - 1, d), f.fillStyle = this.bgCanvasColor, f.fillRect(u - 1, 0, 1, d);
                var p = Math.floor(r / 60 * 20);
                1 > p && (p = 1), f.fillStyle = this.fpsFrontColor, f.fillRect(u - 1, 20 - p, 1, p);
                var v = this.WIDTH_COST;
                f = this.contextCost, f.drawImage(this.canvasCost, 1, 0, v - 1, d, 0, 0, v - 1, d), f.drawImage(this.canvasCost, v + 2, 0, v - 1, d, v + 1, 0, v - 1, d);
                var g = Math.floor(i / 2);
                1 > g ? g = 1 : g > 20 && (g = 20);
                var y = Math.floor(n / 2);
                1 > y ? y = 1 : y > 20 && (y = 20), f.fillStyle = this.bgCanvasColor, f.fillRect(v - 1, 0, 1, d), f.fillRect(2 * v, 0, 1, d), f.fillRect(3 * v + 1, 0, 1, d), f.fillStyle = this.cost1Color, f.fillRect(v - 1, 20 - g, 1, g), f.fillStyle = this.cost3Color, f.fillRect(2 * v, 20 - y, 1, y);
                var x = Math.floor(a / o),
                    m = r + " FPS " + this.renderMode;
                this.showPanle && (m += "<br/>min" + s + " max" + c + " avg" + x, this.divDraw.innerHTML = this.lastNumDraw + "<br/>", this.divCost.innerHTML = '<font  style="color:#18fefe">' + i + '<font/> <font  style="color:#ff0000">' + n + "<font/>"), this.fps.innerHTML = m
            }, t.prototype.updateInfo = function(e) {
                this.arrLog.push(e), this.updateLogLayout()
            }, t.prototype.updateWarn = function(e) {
                this.arrLog.push("[Warning]" + e), this.updateLogLayout()
            }, t.prototype.updateError = function(e) {
                this.arrLog.push("[Error]" + e), this.updateLogLayout()
            }, t.prototype.updateLogLayout = function() {
                for (this.log.innerHTML = this.arrLog.join("<br/>"); document.body.clientHeight < this.log.offsetHeight + this.fpsHeight + this.panelY + 2 * this.fontSize;) this.arrLog.shift(), this.log.innerHTML = this.arrLog.join("<br/>")
            }, t
        }();
        t.WebFps = r, __reflect(r.prototype, "egret.web.WebFps", ["egret.FPSDisplay"]), e.FPSDisplay = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r;
        ! function(r) {
            function i(e) {
                return window.localStorage.getItem(e)
            }

            function n(t, r) {
                try {
                    return window.localStorage.setItem(t, r), !0
                } catch (i) {
                    return e.$warn(1047, t, r), !1
                }
            }

            function a(e) {
                window.localStorage.removeItem(e)
            }

            function o() {
                window.localStorage.clear()
            }
            t.getItem = i, t.setItem = n, t.removeItem = a, t.clear = o
        }(r = t.web || (t.web = {}))
    }(t = e.localStorage || (e.localStorage = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i(e, t) {
                var i = r.call(this) || this;
                return i.init(e, t), i.initOrientation(), i
            }
            return __extends(i, r), i.prototype.init = function(r, i) {
                var n = this.readOption(r, i),
                    a = new e.Stage;
                a.$screen = this, a.$scaleMode = n.scaleMode, a.$orientation = n.orientation, a.$maxTouches = n.maxTouches, a.frameRate = n.frameRate, a.textureScaleFactor = n.textureScaleFactor;
                var o = new e.sys.RenderBuffer(void 0, void 0, !0),
                    s = o.surface;
                this.attachCanvas(r, s);
                var c = new t.WebTouchHandler(a, s),
                    l = new e.sys.Player(o, a, n.entryClassName);
                e.lifecycle.stage = a, e.lifecycle.addLifecycleListener(t.WebLifeCycleHandler);
                var h = new t.HTMLInput;
                (n.showFPS || n.showLog) && (e.nativeRender || l.displayFPS(n.showFPS, n.showLog, n.logFilter, n.fpsStyles)), this.playerOption = n, this.container = r, this.canvas = s, this.stage = a, this.player = l, this.webTouchHandler = c, this.webInput = h, e.web.$cacheTextAdapter(h, a, r, s), this.updateScreenSize(), this.updateMaxTouches(), l.start()
            }, i.prototype.initOrientation = function() {
                var t = this;
                window.addEventListener("orientationchange", function() {
                    window.setTimeout(function() {
                        e.StageOrientationEvent.dispatchStageOrientationEvent(t.stage, e.StageOrientationEvent.ORIENTATION_CHANGE)
                    }, 350)
                })
            }, i.prototype.readOption = function(t, r) {
                var i = {};
                i.entryClassName = t.getAttribute("data-entry-class"), i.scaleMode = t.getAttribute("data-scale-mode") || e.StageScaleMode.NO_SCALE, i.frameRate = +t.getAttribute("data-frame-rate") || 30, i.contentWidth = +t.getAttribute("data-content-width") || 480, i.contentHeight = +t.getAttribute("data-content-height") || 800, i.orientation = t.getAttribute("data-orientation") || e.OrientationMode.AUTO, i.maxTouches = +t.getAttribute("data-multi-fingered") || 2, i.textureScaleFactor = +t.getAttribute("texture-scale-factor") || 1, i.showFPS = "true" == t.getAttribute("data-show-fps");
                for (var n = t.getAttribute("data-show-fps-style") || "", a = n.split(","), o = {}, s = 0; s < a.length; s++) {
                    var c = a[s].split(":");
                    o[c[0]] = c[1]
                }
                return i.fpsStyles = o, i.showLog = "true" == t.getAttribute("data-show-log"), i.logFilter = t.getAttribute("data-log-filter"), i
            }, i.prototype.attachCanvas = function(e, t) {
                var r = t.style;
                r.cursor = "inherit", r.position = "absolute", r.top = "0", r.bottom = "0", r.left = "0", r.right = "0", e.appendChild(t), r = e.style, r.overflow = "hidden", r.position = "absolute"
            }, i.prototype.updateScreenSize = function() {
                var t = this.canvas;
                if (!t.userTyping) {
                    var r = this.playerOption,
                        i = this.container.getBoundingClientRect(),
                        n = 0,
                        a = i.width,
                        o = i.height;
                    if (0 != a && 0 != o) {
                        i.top < 0 && (o += i.top, n = -i.top);
                        var s = !1,
                            c = this.stage.$orientation;
                        c != e.OrientationMode.AUTO && (s = c != e.OrientationMode.PORTRAIT && o > a || c == e.OrientationMode.PORTRAIT && a > o);
                        var l = s ? o : a,
                            h = s ? a : o;
                        e.Capabilities.boundingClientWidth = l, e.Capabilities.boundingClientHeight = h;
                        var u = e.sys.screenAdapter.calculateStageSize(this.stage.$scaleMode, l, h, r.contentWidth, r.contentHeight),
                            d = u.stageWidth,
                            f = u.stageHeight,
                            p = u.displayWidth,
                            v = u.displayHeight;
                        t.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px", t.width != d && (t.width = d), t.height != f && (t.height = f);
                        var g = 0;
                        s ? c == e.OrientationMode.LANDSCAPE ? (g = 90, t.style.top = n + (o - p) / 2 + "px", t.style.left = (a + v) / 2 + "px") : (g = -90, t.style.top = n + (o + p) / 2 + "px", t.style.left = (a - v) / 2 + "px") : (t.style.top = n + (o - v) / 2 + "px", t.style.left = (a - p) / 2 + "px");
                        var y = p / d,
                            x = v / f,
                            m = y * e.sys.DisplayList.$canvasScaleFactor,
                            b = x * e.sys.DisplayList.$canvasScaleFactor;
                        "canvas" == e.Capabilities.renderMode && (m = Math.ceil(m), b = Math.ceil(b));
                        var w = e.Matrix.create();
                        w.identity(), w.scale(y / m, x / b), w.rotate(g * Math.PI / 180);
                        var E = "matrix(" + w.a + "," + w.b + "," + w.c + "," + w.d + "," + w.tx + "," + w.ty + ")";
                        e.Matrix.release(w), t.style[e.web.getPrefixStyleName("transform")] = E, e.sys.DisplayList.$setCanvasScale(m, b), this.webTouchHandler.updateScaleMode(y, x, g), this.webInput.$updateSize(), this.player.updateStageSize(d, f), e.nativeRender && (t.width = d * m, t.height = f * b)
                    }
                }
            }, i.prototype.setContentSize = function(e, t) {
                var r = this.playerOption;
                r.contentWidth = e, r.contentHeight = t, this.updateScreenSize()
            }, i.prototype.updateMaxTouches = function() {
                this.webTouchHandler.$updateMaxTouches()
            }, i
        }(e.HashObject);
        t.WebPlayer = r, __reflect(r.prototype, "egret.web.WebPlayer", ["egret.sys.Screen"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(t, r) {
            s || (s = document.createElement("canvas"), c = s.getContext("2d"));
            var i = t.$getTextureWidth(),
                n = t.$getTextureHeight();
            null == r && (r = e.$TempRectangle, r.x = 0, r.y = 0, r.width = i, r.height = n), r.x = Math.min(r.x, i - 1), r.y = Math.min(r.y, n - 1), r.width = Math.min(r.width, i - r.x), r.height = Math.min(r.height, n - r.y);
            var a = r.width,
                o = r.height,
                l = s;
            if (l.style.width = a + "px", l.style.height = o + "px", s.width = a, s.height = o, "webgl" == e.Capabilities.renderMode) {
                var h = void 0;
                t.$renderBuffer ? h = t : (h = new e.RenderTexture, h.drawToTexture(new e.Bitmap(t)));
                for (var u = h.$renderBuffer.getPixels(r.x, r.y, a, o), d = new ImageData(a, o), f = 0; f < u.length; f++) d.data[f] = u[f];
                return c.putImageData(d, 0, 0), t.$renderBuffer || h.dispose(), l
            }
            var p = t,
                v = Math.round(p.$offsetX),
                g = Math.round(p.$offsetY),
                y = p.$bitmapWidth,
                x = p.$bitmapHeight;
            return c.drawImage(p.$bitmapData.source, p.$bitmapX + r.x / e.$TextureScaleFactor, p.$bitmapY + r.y / e.$TextureScaleFactor, y * r.width / i, x * r.height / n, v, g, r.width, r.height), l
        }

        function i(t, i, n) {
            try {
                var a = r(this, i),
                    o = a.toDataURL(t, n);
                return o
            } catch (s) {
                e.$error(1033)
            }
            return null
        }

        function n(e, t, r, n) {
            var a = i.call(this, e, r, n);
            if (null != a) {
                var o = a.replace(/^data:image[^;]*/, "data:image/octet-stream"),
                    s = document.createElement("a");
                s.download = t, s.href = o;
                var c = document.createEvent("MouseEvents");
                c.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), s.dispatchEvent(c)
            }
        }

        function a(t, r) {
            return e.$warn(1041, "getPixel32", "getPixels"), this.getPixels(t, r)
        }

        function o(t, i, n, a) {
            if (void 0 === n && (n = 1), void 0 === a && (a = 1), "webgl" == e.Capabilities.renderMode) {
                var o = void 0;
                this.$renderBuffer ? o = this : (o = new e.RenderTexture, o.drawToTexture(new e.Bitmap(this)));
                var s = o.$renderBuffer.getPixels(t, i, n, a);
                return s
            }
            try {
                var l = (r(this), c.getImageData(t, i, n, a).data);
                return l
            } catch (h) {
                e.$error(1039)
            }
        }
        var s, c;
        e.Texture.prototype.toDataURL = i, e.Texture.prototype.saveToFile = n, e.Texture.prototype.getPixel32 = a, e.Texture.prototype.getPixels = o
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e) {
            for (var t = s.parseFromString(e, "text/xml"), r = t.childNodes.length, n = 0; r > n; n++) {
                var a = t.childNodes[n];
                if (1 == a.nodeType) return i(a, null)
            }
            return null
        }

        function i(e, t) {
            if ("parsererror" == e.localName) throw new Error(e.textContent);
            for (var r = new a(e.localName, t, e.prefix, e.namespaceURI, e.nodeName), n = e.attributes, s = r.attributes, c = n.length, l = 0; c > l; l++) {
                var h = n[l],
                    u = h.name;
                0 != u.indexOf("xmlns:") && (s[u] = h.value, r["$" + u] = h.value)
            }
            var d = e.childNodes;
            c = d.length;
            for (var f = r.children, l = 0; c > l; l++) {
                var p = d[l],
                    v = p.nodeType,
                    g = null;
                if (1 == v) g = i(p, r);
                else if (3 == v) {
                    var y = p.textContent.trim();
                    y && (g = new o(y, r))
                }
                g && f.push(g)
            }
            return r
        }
        var n = function() {
            function e(e, t) {
                this.nodeType = e, this.parent = t
            }
            return e
        }();
        t.XMLNode = n, __reflect(n.prototype, "egret.web.XMLNode");
        var a = function(e) {
            function t(t, r, i, n, a) {
                var o = e.call(this, 1, r) || this;
                return o.attributes = {}, o.children = [], o.localName = t, o.prefix = i, o.namespace = n, o.name = a, o
            }
            return __extends(t, e), t
        }(n);
        t.XML = a, __reflect(a.prototype, "egret.web.XML");
        var o = function(e) {
            function t(t, r) {
                var i = e.call(this, 3, r) || this;
                return i.text = t, i
            }
            return __extends(t, e), t
        }(n);
        t.XMLText = o, __reflect(o.prototype, "egret.web.XMLText");
        var s = new DOMParser;
        e.XML = {
            parse: r
        }
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var r = null !== t && t.apply(this, arguments) || this;
                return r.onChange = function(t) {
                    var i = new e.OrientationEvent(e.Event.CHANGE);
                    i.beta = t.beta, i.gamma = t.gamma, i.alpha = t.alpha, r.dispatchEvent(i)
                }, r
            }
            return __extends(r, t), r.prototype.start = function() {
                window.addEventListener("deviceorientation", this.onChange)
            }, r.prototype.stop = function() {
                window.removeEventListener("deviceorientation", this.onChange)
            }, r
        }(e.EventDispatcher);
        t.WebDeviceOrientation = r, __reflect(r.prototype, "egret.web.WebDeviceOrientation", ["egret.DeviceOrientation"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})), egret.DeviceOrientation = egret.web.WebDeviceOrientation;
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(r) {
                var i = t.call(this) || this;
                return i.onUpdate = function(t) {
                    var r = new e.GeolocationEvent(e.Event.CHANGE),
                        n = t.coords;
                    r.altitude = n.altitude, r.heading = n.heading, r.accuracy = n.accuracy, r.latitude = n.latitude, r.longitude = n.longitude, r.speed = n.speed, r.altitudeAccuracy = n.altitudeAccuracy, i.dispatchEvent(r)
                }, i.onError = function(t) {
                    var r = e.GeolocationEvent.UNAVAILABLE;
                    t.code == t.PERMISSION_DENIED && (r = e.GeolocationEvent.PERMISSION_DENIED);
                    var n = new e.GeolocationEvent(e.IOErrorEvent.IO_ERROR);
                    n.errorType = r, n.errorMessage = t.message, i.dispatchEvent(n)
                }, i.geolocation = navigator.geolocation, i
            }
            return __extends(r, t), r.prototype.start = function() {
                var t = this.geolocation;
                t ? this.watchId = t.watchPosition(this.onUpdate, this.onError) : this.onError({
                    code: 2,
                    message: e.sys.tr(3004),
                    PERMISSION_DENIED: 1,
                    POSITION_UNAVAILABLE: 2
                })
            }, r.prototype.stop = function() {
                var e = this.geolocation;
                e.clearWatch(this.watchId)
            }, r
        }(e.EventDispatcher);
        t.WebGeolocation = r, __reflect(r.prototype, "egret.web.WebGeolocation", ["egret.Geolocation"]), e.Geolocation = e.web.WebGeolocation
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var r = null !== t && t.apply(this, arguments) || this;
                return r.onChange = function(t) {
                    var i = new e.MotionEvent(e.Event.CHANGE),
                        n = {
                            x: t.acceleration.x,
                            y: t.acceleration.y,
                            z: t.acceleration.z
                        },
                        a = {
                            x: t.accelerationIncludingGravity.x,
                            y: t.accelerationIncludingGravity.y,
                            z: t.accelerationIncludingGravity.z
                        },
                        o = {
                            alpha: t.rotationRate.alpha,
                            beta: t.rotationRate.beta,
                            gamma: t.rotationRate.gamma
                        };
                    i.acceleration = n, i.accelerationIncludingGravity = a, i.rotationRate = o, r.dispatchEvent(i)
                }, r
            }
            return __extends(r, t), r.prototype.start = function() {
                window.addEventListener("devicemotion", this.onChange)
            }, r.prototype.stop = function() {
                window.removeEventListener("devicemotion", this.onChange)
            }, r
        }(e.EventDispatcher);
        t.WebMotion = r, __reflect(r.prototype, "egret.web.WebMotion", ["egret.Motion"]), e.Motion = e.web.WebMotion
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {}(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {
                this.drawData = [], this.drawDataLen = 0
            }
            return e.prototype.pushDrawRect = function() {
                if (0 == this.drawDataLen || 1 != this.drawData[this.drawDataLen - 1].type) {
                    var e = this.drawData[this.drawDataLen] || {};
                    e.type = 1, e.count = 0, this.drawData[this.drawDataLen] = e, this.drawDataLen++
                }
                this.drawData[this.drawDataLen - 1].count += 2
            }, e.prototype.pushDrawTexture = function(e, t, r, i, n) {
                if (void 0 === t && (t = 2), r) {
                    var a = this.drawData[this.drawDataLen] || {};
                    a.type = 0, a.texture = e, a.filter = r, a.count = t, a.textureWidth = i, a.textureHeight = n, this.drawData[this.drawDataLen] = a, this.drawDataLen++
                } else {
                    if (0 == this.drawDataLen || 0 != this.drawData[this.drawDataLen - 1].type || e != this.drawData[this.drawDataLen - 1].texture || this.drawData[this.drawDataLen - 1].filter) {
                        var a = this.drawData[this.drawDataLen] || {};
                        a.type = 0, a.texture = e, a.count = 0, this.drawData[this.drawDataLen] = a, this.drawDataLen++
                    }
                    this.drawData[this.drawDataLen - 1].count += t
                }
            }, e.prototype.pushChangeSmoothing = function(e, t) {
                e.smoothing = t;
                var r = this.drawData[this.drawDataLen] || {};
                r.type = 10, r.texture = e, r.smoothing = t, this.drawData[this.drawDataLen] = r, this.drawDataLen++
            }, e.prototype.pushPushMask = function(e) {
                void 0 === e && (e = 1);
                var t = this.drawData[this.drawDataLen] || {};
                t.type = 2, t.count = 2 * e, this.drawData[this.drawDataLen] = t, this.drawDataLen++
            }, e.prototype.pushPopMask = function(e) {
                void 0 === e && (e = 1);
                var t = this.drawData[this.drawDataLen] || {};
                t.type = 3, t.count = 2 * e, this.drawData[this.drawDataLen] = t, this.drawDataLen++
            }, e.prototype.pushSetBlend = function(e) {
                for (var t = this.drawDataLen, r = !1, i = t - 1; i >= 0; i--) {
                    var n = this.drawData[i];
                    if (n) {
                        if ((0 == n.type || 1 == n.type) && (r = !0), !r && 4 == n.type) {
                            this.drawData.splice(i, 1), this.drawDataLen--;
                            continue
                        }
                        if (4 == n.type) {
                            if (n.value == e) return;
                            break
                        }
                    }
                }
                var a = this.drawData[this.drawDataLen] || {};
                a.type = 4, a.value = e, this.drawData[this.drawDataLen] = a, this.drawDataLen++
            }, e.prototype.pushResize = function(e, t, r) {
                var i = this.drawData[this.drawDataLen] || {};
                i.type = 5, i.buffer = e, i.width = t, i.height = r, this.drawData[this.drawDataLen] = i, this.drawDataLen++
            }, e.prototype.pushClearColor = function() {
                var e = this.drawData[this.drawDataLen] || {};
                e.type = 6, this.drawData[this.drawDataLen] = e, this.drawDataLen++
            }, e.prototype.pushActivateBuffer = function(e) {
                for (var t = this.drawDataLen, r = !1, i = t - 1; i >= 0; i--) {
                    var n = this.drawData[i];
                    !n || (4 != n.type && 7 != n.type && (r = !0), r || 7 != n.type) || (this.drawData.splice(i, 1), this.drawDataLen--)
                }
                var a = this.drawData[this.drawDataLen] || {};
                a.type = 7, a.buffer = e, a.width = e.rootRenderTarget.width, a.height = e.rootRenderTarget.height, this.drawData[this.drawDataLen] = a, this.drawDataLen++
            }, e.prototype.pushEnableScissor = function(e, t, r, i) {
                var n = this.drawData[this.drawDataLen] || {};
                n.type = 8, n.x = e, n.y = t, n.width = r, n.height = i, this.drawData[this.drawDataLen] = n, this.drawDataLen++
            }, e.prototype.pushDisableScissor = function() {
                var e = this.drawData[this.drawDataLen] || {};
                e.type = 9, this.drawData[this.drawDataLen] = e, this.drawDataLen++
            }, e.prototype.clear = function() {
                for (var e = 0; e < this.drawDataLen; e++) {
                    var t = this.drawData[e];
                    t.type = 0, t.count = 0, t.texture = null, t.filter = null, t.uv = null, t.value = "", t.buffer = null, t.width = 0, t.height = 0
                }
                this.drawDataLen = 0
            }, e
        }();
        e.WebGLDrawCmdManager = t, __reflect(t.prototype, "egret.web.WebGLDrawCmdManager")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {
                this.size = 2e3, this.vertexMaxSize = 4 * this.size, this.indicesMaxSize = 6 * this.size, this.vertSize = 5, this.vertices = null, this.indices = null, this.indicesForMesh = null, this.vertexIndex = 0, this.indexIndex = 0, this.hasMesh = !1;
                var e = this.vertexMaxSize * this.vertSize,
                    t = this.indicesMaxSize;
                this.vertices = new Float32Array(e), this.indices = new Uint16Array(t), this.indicesForMesh = new Uint16Array(t);
                for (var r = 0, i = 0; t > r; r += 6, i += 4) this.indices[r + 0] = i + 0, this.indices[r + 1] = i + 1, this.indices[r + 2] = i + 2, this.indices[r + 3] = i + 0, this.indices[r + 4] = i + 2, this.indices[r + 5] = i + 3
            }
            return e.prototype.reachMaxSize = function(e, t) {
                return void 0 === e && (e = 4), void 0 === t && (t = 6), this.vertexIndex > this.vertexMaxSize - e || this.indexIndex > this.indicesMaxSize - t
            }, e.prototype.getVertices = function() {
                var e = this.vertices.subarray(0, this.vertexIndex * this.vertSize);
                return e
            }, e.prototype.getIndices = function() {
                return this.indices
            }, e.prototype.getMeshIndices = function() {
                return this.indicesForMesh
            }, e.prototype.changeToMeshIndices = function() {
                if (!this.hasMesh) {
                    for (var e = 0, t = this.indexIndex; t > e; ++e) this.indicesForMesh[e] = this.indices[e];
                    this.hasMesh = !0
                }
            }, e.prototype.isMesh = function() {
                return this.hasMesh
            }, e.prototype.cacheArrays = function(e, t, r, i, n, a, o, s, c, l, h, u, d, f, p) {
                var v = e.globalAlpha,
                    g = e.globalMatrix,
                    y = g.a,
                    x = g.b,
                    m = g.c,
                    b = g.d,
                    w = g.tx,
                    E = g.ty,
                    T = e.$offsetX,
                    S = e.$offsetY;
                if ((0 != T || 0 != S) && (w = T * y + S * m + w, E = T * x + S * b + E), !d) {
                    (0 != a || 0 != o) && (w = a * y + o * m + w, E = a * x + o * b + E);
                    var _ = s / i;
                    1 != _ && (y = _ * y, x = _ * x);
                    var R = c / n;
                    1 != R && (m = R * m, b = R * b)
                }
                if (d) {
                    var C = this.vertices,
                        L = this.vertexIndex * this.vertSize,
                        D = 0,
                        $ = 0,
                        M = 0,
                        A = 0,
                        I = 0,
                        B = 0,
                        O = 0;
                    for (D = 0, M = u.length; M > D; D += 2) $ = L + 5 * D / 2, B = d[D], O = d[D + 1], A = u[D], I = u[D + 1], C[$ + 0] = y * B + m * O + w, C[$ + 1] = x * B + b * O + E, p ? (C[$ + 2] = (t + (1 - I) * n) / l, C[$ + 3] = (r + A * i) / h) : (C[$ + 2] = (t + A * i) / l, C[$ + 3] = (r + I * n) / h), C[$ + 4] = v;
                    if (this.hasMesh)
                        for (var P = 0, W = f.length; W > P; ++P) this.indicesForMesh[this.indexIndex + P] = f[P] + this.vertexIndex;
                    this.vertexIndex += u.length / 2, this.indexIndex += f.length
                } else {
                    var F = l,
                        G = h,
                        H = i,
                        k = n;
                    t /= F, r /= G;
                    var C = this.vertices,
                        L = this.vertexIndex * this.vertSize;
                    if (p) {
                        var N = i;
                        i = n / F, n = N / G, C[L++] = w, C[L++] = E, C[L++] = i + t, C[L++] = r, C[L++] = v, C[L++] = y * H + w, C[L++] = x * H + E, C[L++] = i + t, C[L++] = n + r, C[L++] = v, C[L++] = y * H + m * k + w, C[L++] = b * k + x * H + E, C[L++] = t, C[L++] = n + r, C[L++] = v, C[L++] = m * k + w, C[L++] = b * k + E, C[L++] = t, C[L++] = r, C[L++] = v
                    } else i /= F, n /= G, C[L++] = w, C[L++] = E, C[L++] = t, C[L++] = r, C[L++] = v, C[L++] = y * H + w, C[L++] = x * H + E, C[L++] = i + t, C[L++] = r, C[L++] = v, C[L++] = y * H + m * k + w, C[L++] = b * k + x * H + E, C[L++] = i + t, C[L++] = n + r, C[L++] = v, C[L++] = m * k + w, C[L++] = b * k + E, C[L++] = t, C[L++] = n + r, C[L++] = v;
                    if (this.hasMesh) {
                        var U = this.indicesForMesh;
                        U[this.indexIndex + 0] = 0 + this.vertexIndex, U[this.indexIndex + 1] = 1 + this.vertexIndex, U[this.indexIndex + 2] = 2 + this.vertexIndex, U[this.indexIndex + 3] = 0 + this.vertexIndex, U[this.indexIndex + 4] = 2 + this.vertexIndex, U[this.indexIndex + 5] = 3 + this.vertexIndex
                    }
                    this.vertexIndex += 4, this.indexIndex += 6
                }
            }, e.prototype.clear = function() {
                this.hasMesh = !1, this.vertexIndex = 0, this.indexIndex = 0
            }, e
        }();
        e.WebGLVertexArrayObject = t, __reflect(t.prototype, "egret.web.WebGLVertexArrayObject")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(e, r, i) {
                var n = t.call(this) || this;
                return n.clearColor = [0, 0, 0, 0], n.useFrameBuffer = !0, n.gl = e, n._resize(r, i), n
            }
            return __extends(r, t), r.prototype._resize = function(e, t) {
                e = e || 1, t = t || 1, 1 > e && (e = 1), 1 > t && (t = 1), this.width = e, this.height = t
            }, r.prototype.resize = function(e, t) {
                this._resize(e, t);
                var r = this.gl;
                this.frameBuffer && (r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, this.width, this.height, 0, r.RGBA, r.UNSIGNED_BYTE, null)), this.stencilBuffer && (r.deleteRenderbuffer(this.stencilBuffer), this.stencilBuffer = null)
            }, r.prototype.activate = function() {
                var e = this.gl;
                e.bindFramebuffer(e.FRAMEBUFFER, this.getFrameBuffer())
            }, r.prototype.getFrameBuffer = function() {
                return this.useFrameBuffer ? this.frameBuffer : null
            }, r.prototype.initFrameBuffer = function() {
                if (!this.frameBuffer) {
                    var e = this.gl;
                    this.texture = this.createTexture(), this.frameBuffer = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture, 0)
                }
            }, r.prototype.createTexture = function() {
                var e = this.gl,
                    t = e.createTexture();
                return t.glContext = e, e.bindTexture(e.TEXTURE_2D, t), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this.width, this.height, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), t
            }, r.prototype.clear = function(e) {
                var t = this.gl;
                e && this.activate(), t.colorMask(!0, !0, !0, !0), t.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]), t.clear(t.COLOR_BUFFER_BIT)
            }, r.prototype.enabledStencil = function() {
                if (this.frameBuffer && !this.stencilBuffer) {
                    var e = this.gl;
                    e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), this.stencilBuffer = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, this.stencilBuffer), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, this.width, this.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, this.stencilBuffer)
                }
            }, r.prototype.dispose = function() {
                e.WebGLUtils.deleteWebGLTexture(this.texture)
            }, r
        }(e.HashObject);
        t.WebGLRenderTarget = r, __reflect(r.prototype, "egret.web.WebGLRenderTarget")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e, t) {
            var r = document.createElement("canvas");
            return isNaN(e) || isNaN(t) || (r.width = e, r.height = t), r
        }
        var i = function() {
            function i(i, n) {
                if (this.glID = null, this.projectionX = 0 / 0, this.projectionY = 0 / 0, this.contextLost = !1, this.$scissorState = !1, this.vertSize = 5, this.surface = r(i, n), !e.nativeRender) {
                    this.initWebGL(), this.$bufferStack = [];
                    var a = this.context;
                    this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), this.drawCmdManager = new t.WebGLDrawCmdManager, this.vao = new t.WebGLVertexArrayObject, this.setGlobalCompositeOperation("source-over")
                }
            }
            return i.getInstance = function(e, t) {
                return this.instance ? this.instance : (this.instance = new i(e, t), this.instance)
            }, i.prototype.pushBuffer = function(e) {
                this.$bufferStack.push(e), e != this.currentBuffer && (this.currentBuffer, this.drawCmdManager.pushActivateBuffer(e)), this.currentBuffer = e
            }, i.prototype.popBuffer = function() {
                if (!(this.$bufferStack.length <= 1)) {
                    var e = this.$bufferStack.pop(),
                        t = this.$bufferStack[this.$bufferStack.length - 1];
                    e != t && this.drawCmdManager.pushActivateBuffer(t), this.currentBuffer = t
                }
            }, i.prototype.activateBuffer = function(e, t, r) {
                e.rootRenderTarget.activate(), this.bindIndices || this.uploadIndicesArray(this.vao.getIndices()), e.restoreStencil(), e.restoreScissor(), this.onResize(t, r)
            }, i.prototype.uploadVerticesArray = function(e) {
                var t = this.context;
                t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW)
            }, i.prototype.uploadIndicesArray = function(e) {
                var t = this.context;
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW), this.bindIndices = !0
            }, i.prototype.destroy = function() {
                this.surface.width = this.surface.height = 0
            }, i.prototype.onResize = function(e, t) {
                e = e || this.surface.width, t = t || this.surface.height, this.projectionX = e / 2, this.projectionY = -t / 2, this.context && this.context.viewport(0, 0, e, t)
            }, i.prototype.resize = function(e, t, r) {
                var i = this.surface;
                r ? (i.width < e && (i.width = e), i.height < t && (i.height = t)) : (i.width != e && (i.width = e), i.height != t && (i.height = t)), this.onResize()
            }, i.prototype.initWebGL = function() {
                this.onResize(), this.surface.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1), this.surface.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1), this.getWebGLContext();
                var e = this.context;
                this.$maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE)
            }, i.prototype.handleContextLost = function() {
                this.contextLost = !0
            }, i.prototype.handleContextRestored = function() {
                this.initWebGL(), this.contextLost = !1
            }, i.prototype.getWebGLContext = function() {
                for (var t, r = {
                        antialias: i.antialias,
                        stencil: !0
                    }, n = ["webgl", "experimental-webgl"], a = 0; a < n.length; a++) {
                    try {
                        t = this.surface.getContext(n[a], r)
                    } catch (o) {}
                    if (t) break
                }
                t || e.$error(1021), this.setContext(t)
            }, i.prototype.setContext = function(e) {
                this.context = e, e.id = i.glContextId++, this.glID = e.id, e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.enable(e.BLEND), e.colorMask(!0, !0, !0, !0), e.activeTexture(e.TEXTURE0)
            }, i.prototype.enableStencilTest = function() {
                var e = this.context;
                e.enable(e.STENCIL_TEST)
            }, i.prototype.disableStencilTest = function() {
                var e = this.context;
                e.disable(e.STENCIL_TEST)
            }, i.prototype.enableScissorTest = function(e) {
                var t = this.context;
                t.enable(t.SCISSOR_TEST), t.scissor(e.x, e.y, e.width, e.height)
            }, i.prototype.disableScissorTest = function() {
                var e = this.context;
                e.disable(e.SCISSOR_TEST)
            }, i.prototype.getPixels = function(e, t, r, i, n) {
                var a = this.context;
                a.readPixels(e, t, r, i, a.RGBA, a.UNSIGNED_BYTE, n)
            }, i.prototype.createTexture = function(e) {
                var t = this.context,
                    r = t.createTexture();
                return r ? (r.glContext = t, t.bindTexture(t.TEXTURE_2D, r), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), r) : void(this.contextLost = !0)
            }, i.prototype.createTextureFromCompressedData = function(e, t, r, i, n) {
                return null
            }, i.prototype.updateTexture = function(e, t) {
                var r = this.context;
                r.bindTexture(r.TEXTURE_2D, e), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t)
            }, i.prototype.getWebGLTexture = function(e) {
                return e.webGLTexture || ("image" == e.format ? e.webGLTexture = this.createTexture(e.source) : "pvr" == e.format && (e.webGLTexture = this.createTextureFromCompressedData(e.source.pvrtcData, e.width, e.height, e.source.mipmapsCount, e.source.format)), e.$deleteSource && e.webGLTexture && (e.source = null), e.webGLTexture && (e.webGLTexture.smoothing = !0)), e.webGLTexture
            }, i.prototype.clearRect = function(e, t, r, i) {
                if (0 != e || 0 != t || r != this.surface.width || i != this.surface.height) {
                    var n = this.currentBuffer;
                    if (n.$hasScissor) this.setGlobalCompositeOperation("destination-out"), this.drawRect(e, t, r, i), this.setGlobalCompositeOperation("source-over");
                    else {
                        var a = n.globalMatrix;
                        0 == a.b && 0 == a.c ? (e = e * a.a + a.tx, t = t * a.d + a.ty, r *= a.a, i *= a.d, this.enableScissor(e, -t - i + n.height, r, i), this.clear(), this.disableScissor()) : (this.setGlobalCompositeOperation("destination-out"), this.drawRect(e, t, r, i), this.setGlobalCompositeOperation("source-over"))
                    }
                } else this.clear()
            }, i.prototype.setGlobalCompositeOperation = function(e) {
                this.drawCmdManager.pushSetBlend(e)
            }, i.prototype.drawImage = function(e, t, r, i, n, a, o, s, c, l, h, u, d) {
                var f = this.currentBuffer;
                if (!this.contextLost && e && f) {
                    var p, v, g;
                    if (e.texture || e.source && e.source.texture) p = e.texture || e.source.texture, f.saveTransform(), v = f.$offsetX, g = f.$offsetY, f.useOffset(), f.transform(1, 0, 0, -1, 0, c + 2 * o);
                    else {
                        if (!e.source && !e.webGLTexture) return;
                        p = this.getWebGLTexture(e)
                    }
                    p && (this.drawTexture(p, t, r, i, n, a, o, s, c, l, h, void 0, void 0, void 0, void 0, u, d), e.source && e.source.texture && (f.$offsetX = v, f.$offsetY = g, f.restoreTransform()))
                }
            }, i.prototype.drawMesh = function(e, t, r, i, n, a, o, s, c, l, h, u, d, f, p, v, g) {
                var y = this.currentBuffer;
                if (!this.contextLost && e && y) {
                    var x, m, b;
                    if (e.texture || e.source && e.source.texture) x = e.texture || e.source.texture, y.saveTransform(), m = y.$offsetX, b = y.$offsetY, y.useOffset(), y.transform(1, 0, 0, -1, 0, c + 2 * o);
                    else {
                        if (!e.source && !e.webGLTexture) return;
                        x = this.getWebGLTexture(e)
                    }
                    x && (this.drawTexture(x, t, r, i, n, a, o, s, c, l, h, u, d, f, p, v, g), (e.texture || e.source && e.source.texture) && (y.$offsetX = m, y.$offsetY = b, y.restoreTransform()))
                }
            }, i.prototype.drawTexture = function(e, t, r, i, n, a, o, s, c, l, h, u, d, f, p, v, g) {
                var y = this.currentBuffer;
                if (!this.contextLost && e && y) {
                    d && f ? this.vao.reachMaxSize(d.length / 2, f.length) && this.$drawWebGL() : this.vao.reachMaxSize() && this.$drawWebGL(), void 0 != g && e.smoothing != g && this.drawCmdManager.pushChangeSmoothing(e, g), u && this.vao.changeToMeshIndices();
                    var x = f ? f.length / 3 : 2;
                    this.drawCmdManager.pushDrawTexture(e, x, this.$filter, l, h), this.vao.cacheArrays(y, t, r, i, n, a, o, s, c, l, h, u, d, f, v)
                }
            }, i.prototype.drawRect = function(e, t, r, i) {
                var n = this.currentBuffer;
                !this.contextLost && n && (this.vao.reachMaxSize() && this.$drawWebGL(), this.drawCmdManager.pushDrawRect(), this.vao.cacheArrays(n, 0, 0, r, i, e, t, r, i, r, i))
            }, i.prototype.pushMask = function(e, t, r, i) {
                var n = this.currentBuffer;
                !this.contextLost && n && (n.$stencilList.push({
                    x: e,
                    y: t,
                    width: r,
                    height: i
                }), this.vao.reachMaxSize() && this.$drawWebGL(), this.drawCmdManager.pushPushMask(), this.vao.cacheArrays(n, 0, 0, r, i, e, t, r, i, r, i))
            }, i.prototype.popMask = function() {
                var e = this.currentBuffer;
                if (!this.contextLost && e) {
                    var t = e.$stencilList.pop();
                    this.vao.reachMaxSize() && this.$drawWebGL(), this.drawCmdManager.pushPopMask(), this.vao.cacheArrays(e, 0, 0, t.width, t.height, t.x, t.y, t.width, t.height, t.width, t.height)
                }
            }, i.prototype.clear = function() {
                this.drawCmdManager.pushClearColor()
            }, i.prototype.enableScissor = function(e, t, r, i) {
                var n = this.currentBuffer;
                this.drawCmdManager.pushEnableScissor(e, t, r, i), n.$hasScissor = !0
            }, i.prototype.disableScissor = function() {
                var e = this.currentBuffer;
                this.drawCmdManager.pushDisableScissor(), e.$hasScissor = !1
            }, i.prototype.$drawWebGL = function() {
                if (0 != this.drawCmdManager.drawDataLen && !this.contextLost) {
                    this.uploadVerticesArray(this.vao.getVertices()), this.vao.isMesh() && this.uploadIndicesArray(this.vao.getMeshIndices());
                    for (var e = this.drawCmdManager.drawDataLen, t = 0, r = 0; e > r; r++) {
                        var i = this.drawCmdManager.drawData[r];
                        t = this.drawData(i, t), 7 == i.type && (this.activatedBuffer = i.buffer), (0 == i.type || 1 == i.type || 2 == i.type || 3 == i.type) && this.activatedBuffer && this.activatedBuffer.$computeDrawCall && this.activatedBuffer.$drawCalls++
                    }
                    this.vao.isMesh() && this.uploadIndicesArray(this.vao.getIndices()), this.drawCmdManager.clear(), this.vao.clear()
                }
            }, i.prototype.drawData = function(e, r) {
                if (e) {
                    var i, n = this.context,
                        a = e.filter;
                    switch (e.type) {
                        case 0:
                            a ? "custom" === a.type ? i = t.EgretWebGLProgram.getProgram(n, a.$vertexSrc, a.$fragmentSrc, a.$shaderKey) : "colorTransform" === a.type ? i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.colorTransform_frag, "colorTransform") : "blurX" === a.type ? i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.blur_frag, "blur") : "blurY" === a.type ? i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.blur_frag, "blur") : "glow" === a.type && (i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.glow_frag, "glow")) : i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.texture_frag, "texture"), this.activeProgram(n, i), this.syncUniforms(i, a, e.textureWidth, e.textureHeight), r += this.drawTextureElements(e, r);
                            break;
                        case 1:
                            i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.primitive_frag, "primitive"), this.activeProgram(n, i), this.syncUniforms(i, a, e.textureWidth, e.textureHeight), r += this.drawRectElements(e, r);
                            break;
                        case 2:
                            i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.primitive_frag, "primitive"), this.activeProgram(n, i), this.syncUniforms(i, a, e.textureWidth, e.textureHeight), r += this.drawPushMaskElements(e, r);
                            break;
                        case 3:
                            i = t.EgretWebGLProgram.getProgram(n, t.EgretShaderLib.default_vert, t.EgretShaderLib.primitive_frag, "primitive"), this.activeProgram(n, i), this.syncUniforms(i, a, e.textureWidth, e.textureHeight), r += this.drawPopMaskElements(e, r);
                            break;
                        case 4:
                            this.setBlendMode(e.value);
                            break;
                        case 5:
                            e.buffer.rootRenderTarget.resize(e.width, e.height), this.onResize(e.width, e.height);
                            break;
                        case 6:
                            if (this.activatedBuffer) {
                                var o = this.activatedBuffer.rootRenderTarget;
                                (0 != o.width || 0 != o.height) && o.clear(!0)
                            }
                            break;
                        case 7:
                            this.activateBuffer(e.buffer, e.width, e.height);
                            break;
                        case 8:
                            var s = this.activatedBuffer;
                            s && (s.rootRenderTarget && s.rootRenderTarget.enabledStencil(), s.enableScissor(e.x, e.y, e.width, e.height));
                            break;
                        case 9:
                            s = this.activatedBuffer, s && s.disableScissor();
                            break;
                        case 10:
                            n.bindTexture(n.TEXTURE_2D, e.texture), e.smoothing ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST))
                    }
                    return r
                }
            }, i.prototype.activeProgram = function(e, t) {
                if (t != this.currentProgram) {
                    e.useProgram(t.id);
                    var r = t.attributes;
                    for (var i in r) "aVertexPosition" === i ? (e.vertexAttribPointer(r.aVertexPosition.location, 2, e.FLOAT, !1, 20, 0), e.enableVertexAttribArray(r.aVertexPosition.location)) : "aTextureCoord" === i ? (e.vertexAttribPointer(r.aTextureCoord.location, 2, e.FLOAT, !1, 20, 8), e.enableVertexAttribArray(r.aTextureCoord.location)) : "aColor" === i && (e.vertexAttribPointer(r.aColor.location, 1, e.FLOAT, !1, 20, 16), e.enableVertexAttribArray(r.aColor.location));
                    this.currentProgram = t
                }
            }, i.prototype.syncUniforms = function(e, t, r, i) {
                var n = e.uniforms;
                t && "custom" === t.type;
                for (var a in n)
                    if ("projectionVector" === a) n[a].setValue({
                        x: this.projectionX,
                        y: this.projectionY
                    });
                    else if ("uTextureSize" === a) n[a].setValue({
                    x: r,
                    y: i
                });
                else if ("uSampler" === a);
                else {
                    var o = t.$uniforms[a];
                    void 0 !== o && n[a].setValue(o)
                }
            }, i.prototype.drawTextureElements = function(e, t) {
                var r = this.context;
                r.bindTexture(r.TEXTURE_2D, e.texture);
                var i = 3 * e.count;
                return r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), i
            }, i.prototype.drawRectElements = function(e, t) {
                var r = this.context,
                    i = 3 * e.count;
                return r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), i
            }, i.prototype.drawPushMaskElements = function(e, t) {
                var r = this.context,
                    i = 3 * e.count,
                    n = this.activatedBuffer;
                if (n) {
                    n.rootRenderTarget && n.rootRenderTarget.enabledStencil(), 0 == n.stencilHandleCount && (n.enableStencil(), r.clear(r.STENCIL_BUFFER_BIT));
                    var a = n.stencilHandleCount;
                    n.stencilHandleCount++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, a, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR), r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), r.stencilFunc(r.EQUAL, a + 1, 255), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
                }
                return i
            }, i.prototype.drawPopMaskElements = function(e, t) {
                var r = this.context,
                    i = 3 * e.count,
                    n = this.activatedBuffer;
                if (n)
                    if (n.stencilHandleCount--, 0 == n.stencilHandleCount) n.disableStencil();
                    else {
                        var a = n.stencilHandleCount;
                        r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, a + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR), r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), r.stencilFunc(r.EQUAL, a, 255), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
                    } return i
            }, i.prototype.setBlendMode = function(e) {
                var t = this.context,
                    r = i.blendModesForGL[e];
                r && t.blendFunc(r[0], r[1])
            }, i.prototype.drawTargetWidthFilters = function(e, r) {
                var i, n = r,
                    a = e.length;
                if (a > 1)
                    for (var o = 0; a - 1 > o; o++) {
                        var s = e[o],
                            c = r.rootRenderTarget.width,
                            l = r.rootRenderTarget.height;
                        i = t.WebGLRenderBuffer.create(c, l), i.setTransform(1, 0, 0, 1, 0, 0), i.globalAlpha = 1, this.drawToRenderTarget(s, r, i), r != n && t.WebGLRenderBuffer.release(r), r = i
                    }
                var h = e[a - 1];
                this.drawToRenderTarget(h, r, this.currentBuffer), r != n && t.WebGLRenderBuffer.release(r)
            }, i.prototype.drawToRenderTarget = function(e, r, i) {
                if (!this.contextLost) {
                    this.vao.reachMaxSize() && this.$drawWebGL(), this.pushBuffer(i);
                    var n, a = r,
                        o = r.rootRenderTarget.width,
                        s = r.rootRenderTarget.height;
                    if ("blur" == e.type) {
                        var c = e.blurXFilter,
                            l = e.blurYFilter;
                        0 != c.blurX && 0 != l.blurY ? (n = t.WebGLRenderBuffer.create(o, s), n.setTransform(1, 0, 0, 1, 0, 0), n.globalAlpha = 1, this.drawToRenderTarget(e.blurXFilter, r, n), r != a && t.WebGLRenderBuffer.release(r), r = n, e = l) : e = 0 === c.blurX ? l : c
                    }
                    i.saveTransform(), i.transform(1, 0, 0, -1, 0, s), this.vao.cacheArrays(i, 0, 0, o, s, 0, 0, o, s, o, s), i.restoreTransform(), this.drawCmdManager.pushDrawTexture(r.rootRenderTarget.texture, 2, e, o, s), r != a && t.WebGLRenderBuffer.release(r), this.popBuffer()
                }
            }, i.initBlendMode = function() {
                i.blendModesForGL = {}, i.blendModesForGL["source-over"] = [1, 771], i.blendModesForGL.lighter = [1, 1], i.blendModesForGL["lighter-in"] = [770, 771], i.blendModesForGL["destination-out"] = [0, 771], i.blendModesForGL["destination-in"] = [0, 770]
            }, i.glContextId = 0, i.blendModesForGL = null, i
        }();
        t.WebGLRenderContext = i, __reflect(i.prototype, "egret.web.WebGLRenderContext"), i.initBlendMode()
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function n(i, n, a) {
                var o = r.call(this) || this;
                if (o.globalAlpha = 1, o.stencilState = !1, o.$stencilList = [], o.stencilHandleCount = 0, o.$scissorState = !1, o.scissorRect = new e.Rectangle, o.$hasScissor = !1, o.$drawCalls = 0, o.$computeDrawCall = !1, o.globalMatrix = new e.Matrix, o.savedGlobalMatrix = new e.Matrix, o.$offsetX = 0, o.$offsetY = 0, o.context = t.WebGLRenderContext.getInstance(i, n), e.nativeRender) return a ? o.surface = o.context.surface : o.surface = new egret_native.NativeRenderSurface(o, i, n, a), o.rootRenderTarget = null, o;
                if (o.rootRenderTarget = new t.WebGLRenderTarget(o.context.context, 3, 3), i && n && o.resize(i, n), o.root = a, o.root) o.context.pushBuffer(o), o.surface = o.context.surface, o.$computeDrawCall = !0;
                else {
                    var s = o.context.activatedBuffer;
                    s && s.rootRenderTarget.activate(), o.rootRenderTarget.initFrameBuffer(), o.surface = o.rootRenderTarget
                }
                return o
            }
            return __extends(n, r), n.prototype.enableStencil = function() {
                this.stencilState || (this.context.enableStencilTest(), this.stencilState = !0)
            }, n.prototype.disableStencil = function() {
                this.stencilState && (this.context.disableStencilTest(), this.stencilState = !1)
            }, n.prototype.restoreStencil = function() {
                this.stencilState ? this.context.enableStencilTest() : this.context.disableStencilTest()
            }, n.prototype.enableScissor = function(e, t, r, i) {
                this.$scissorState || (this.$scissorState = !0, this.scissorRect.setTo(e, t, r, i), this.context.enableScissorTest(this.scissorRect))
            }, n.prototype.disableScissor = function() {
                this.$scissorState && (this.$scissorState = !1, this.scissorRect.setEmpty(), this.context.disableScissorTest())
            }, n.prototype.restoreScissor = function() {
                this.$scissorState ? this.context.enableScissorTest(this.scissorRect) : this.context.disableScissorTest()
            }, Object.defineProperty(n.prototype, "width", {
                get: function() {
                    return e.nativeRender ? this.surface.width : this.rootRenderTarget.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "height", {
                get: function() {
                    return e.nativeRender ? this.surface.height : this.rootRenderTarget.height
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.resize = function(t, r, i) {
                return t = t || 1, r = r || 1, e.nativeRender ? void this.surface.resize(t, r) : (this.context.pushBuffer(this), (t != this.rootRenderTarget.width || r != this.rootRenderTarget.height) && (this.context.drawCmdManager.pushResize(this, t, r), this.rootRenderTarget.width = t, this.rootRenderTarget.height = r), this.root && this.context.resize(t, r, i), this.context.clear(), void this.context.popBuffer())
            }, n.prototype.getPixels = function(t, r, i, n) {
                void 0 === i && (i = 1), void 0 === n && (n = 1);
                var a = new Uint8Array(4 * i * n);
                if (e.nativeRender) egret_native.activateBuffer(this), egret_native.nrGetPixels(t, r, i, n, a), egret_native.activateBuffer(null);
                else {
                    var o = this.rootRenderTarget.useFrameBuffer;
                    this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.context.getPixels(t, r, i, n, a), this.rootRenderTarget.useFrameBuffer = o, this.rootRenderTarget.activate()
                }
                for (var s = new Uint8Array(4 * i * n), c = 0; n > c; c++)
                    for (var l = 0; i > l; l++) {
                        var h = 4 * (i * (n - c - 1) + l),
                            u = 4 * (i * c + l),
                            d = a[u + 3];
                        s[h] = Math.round(a[u] / d * 255), s[h + 1] = Math.round(a[u + 1] / d * 255), s[h + 2] = Math.round(a[u + 2] / d * 255), s[h + 3] = a[u + 3]
                    }
                return s
            }, n.prototype.toDataURL = function(e, t) {
                return this.context.surface.toDataURL(e, t)
            }, n.prototype.destroy = function() {
                this.context.destroy()
            }, n.prototype.onRenderFinish = function() {
                this.$drawCalls = 0
            }, n.prototype.drawFrameBufferToSurface = function(e, t, r, i, n, a, o, s, c) {
                void 0 === c && (c = !1), this.rootRenderTarget.useFrameBuffer = !1, this.rootRenderTarget.activate(), this.context.disableStencilTest(), this.context.disableScissorTest(), this.setTransform(1, 0, 0, 1, 0, 0), this.globalAlpha = 1, this.context.setGlobalCompositeOperation("source-over"), c && this.context.clear(), this.context.drawImage(this.rootRenderTarget, e, t, r, i, n, a, o, s, r, i, !1), this.context.$drawWebGL(), this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.restoreStencil(), this.restoreScissor()
            }, n.prototype.drawSurfaceToFrameBuffer = function(e, t, r, i, n, a, o, s, c) {
                void 0 === c && (c = !1), this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.context.disableStencilTest(), this.context.disableScissorTest(), this.setTransform(1, 0, 0, 1, 0, 0), this.globalAlpha = 1, this.context.setGlobalCompositeOperation("source-over"), c && this.context.clear(), this.context.drawImage(this.context.surface, e, t, r, i, n, a, o, s, r, i, !1), this.context.$drawWebGL(), this.rootRenderTarget.useFrameBuffer = !1, this.rootRenderTarget.activate(), this.restoreStencil(), this.restoreScissor()
            }, n.prototype.clear = function() {
                this.context.pushBuffer(this), this.context.clear(), this.context.popBuffer()
            }, n.prototype.setTransform = function(e, t, r, i, n, a) {
                var o = this.globalMatrix;
                o.a = e, o.b = t, o.c = r, o.d = i, o.tx = n, o.ty = a
            }, n.prototype.transform = function(e, t, r, i, n, a) {
                var o = this.globalMatrix,
                    s = o.a,
                    c = o.b,
                    l = o.c,
                    h = o.d;
                (1 != e || 0 != t || 0 != r || 1 != i) && (o.a = e * s + t * l, o.b = e * c + t * h, o.c = r * s + i * l, o.d = r * c + i * h), o.tx = n * s + a * l + o.tx, o.ty = n * c + a * h + o.ty
            }, n.prototype.useOffset = function() {
                var e = this;
                (0 != e.$offsetX || 0 != e.$offsetY) && (e.globalMatrix.append(1, 0, 0, 1, e.$offsetX, e.$offsetY), e.$offsetX = e.$offsetY = 0)
            }, n.prototype.saveTransform = function() {
                var e = this.globalMatrix,
                    t = this.savedGlobalMatrix;
                t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t.tx = e.tx, t.ty = e.ty
            }, n.prototype.restoreTransform = function() {
                var e = this.globalMatrix,
                    t = this.savedGlobalMatrix;
                e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e.tx = t.tx, e.ty = t.ty
            }, n.create = function(e, t) {
                var r = i.pop();
                if (r) {
                    r.resize(e, t);
                    var a = r.globalMatrix;
                    a.a = 1, a.b = 0, a.c = 0, a.d = 1, a.tx = 0, a.ty = 0, r.globalAlpha = 1, r.$offsetX = 0, r.$offsetY = 0
                } else r = new n(e, t), r.$computeDrawCall = !1;
                return r
            }, n.release = function(e) {
                i.push(e)
            }, n.autoClear = !0, n
        }(e.HashObject);
        t.WebGLRenderBuffer = r, __reflect(r.prototype, "egret.web.WebGLRenderBuffer", ["egret.sys.RenderBuffer"]);
        var i = []
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = ["source-over", "lighter", "destination-out"],
            i = "source-over",
            n = [],
            a = function() {
                function a() {
                    this.nestLevel = 0
                }
                return a.prototype.render = function(t, r, i, a) {
                    this.nestLevel++;
                    var o = r,
                        s = o.context;
                    s.pushBuffer(o), o.transform(i.a, i.b, i.c, i.d, 0, 0), this.drawDisplayObject(t, o, i.tx, i.ty, !0), s.$drawWebGL();
                    var c = o.$drawCalls;
                    o.onRenderFinish(), s.popBuffer();
                    var l = e.Matrix.create();
                    if (i.$invertInto(l), o.transform(l.a, l.b, l.c, l.d, 0, 0), e.Matrix.release(l), this.nestLevel--, 0 === this.nestLevel) {
                        n.length > 6 && (n.length = 6);
                        for (var h = n.length, u = 0; h > u; u++) n[u].resize(0, 0)
                    }
                    return c
                }, a.prototype.drawDisplayObject = function(t, r, i, n, a) {
                    var o, s = 0,
                        c = t.$displayList;
                    if (c && !a ? ((t.$cacheDirty || t.$renderDirty || c.$canvasScaleX != e.sys.DisplayList.$canvasScaleX || c.$canvasScaleY != e.sys.DisplayList.$canvasScaleY) && (s += c.drawToSurface()), o = c.$renderNode) : o = t.$renderDirty ? t.$getRenderNode() : t.$renderNode, t.$cacheDirty = !1, o) {
                        switch (s++, r.$offsetX = i, r.$offsetY = n, o.type) {
                            case 1:
                                this.renderBitmap(o, r);
                                break;
                            case 2:
                                this.renderText(o, r);
                                break;
                            case 3:
                                this.renderGraphics(o, r);
                                break;
                            case 4:
                                this.renderGroup(o, r);
                                break;
                            case 5:
                                this.renderMesh(o, r);
                                break;
                            case 6:
                                this.renderNormalBitmap(o, r)
                        }
                        r.$offsetX = 0, r.$offsetY = 0
                    }
                    if (c && !a) return s;
                    var l = t.$children;
                    if (l)
                        for (var h = l.length, u = 0; h > u; u++) {
                            var d = l[u],
                                f = void 0,
                                p = void 0,
                                v = void 0;
                            1 != d.$alpha && (v = r.globalAlpha, r.globalAlpha *= d.$alpha);
                            var g = void 0;
                            if (d.$useTranslate) {
                                var y = d.$getMatrix();
                                f = i + d.$x, p = n + d.$y;
                                var x = r.globalMatrix;
                                g = e.Matrix.create(), g.a = x.a, g.b = x.b, g.c = x.c, g.d = x.d, g.tx = x.tx, g.ty = x.ty, r.transform(y.a, y.b, y.c, y.d, f, p), f = -d.$anchorOffsetX, p = -d.$anchorOffsetY
                            } else f = i + d.$x - d.$anchorOffsetX, p = n + d.$y - d.$anchorOffsetY;
                            switch (d.$renderMode) {
                                case 1:
                                    break;
                                case 2:
                                    s += this.drawWithFilter(d, r, f, p);
                                    break;
                                case 3:
                                    s += this.drawWithClip(d, r, f, p);
                                    break;
                                case 4:
                                    s += this.drawWithScrollRect(d, r, f, p);
                                    break;
                                default:
                                    s += this.drawDisplayObject(d, r, f, p)
                            }
                            if (v && (r.globalAlpha = v), g) {
                                var y = r.globalMatrix;
                                y.a = g.a, y.b = g.b, y.c = g.c, y.d = g.d, y.tx = g.tx, y.ty = g.ty, e.Matrix.release(g)
                            }
                        }
                    return s
                }, a.prototype.drawWithFilter = function(t, a, o, s) {
                    var c = 0;
                    if (t.$children && 0 == t.$children.length && (!t.$renderNode || 0 == t.$renderNode.$getRenderCount())) return c;
                    var l, h = t.$filters,
                        u = 0 !== t.$blendMode;
                    u && (l = r[t.$blendMode], l || (l = i));
                    var d = t.$getOriginalBounds(),
                        f = d.x,
                        p = d.y,
                        v = d.width,
                        g = d.height;
                    if (0 >= v || 0 >= g) return c;
                    if (!t.mask && 1 == h.length && ("colorTransform" == h[0].type || "custom" === h[0].type && 0 === h[0].padding)) {
                        var y = this.getRenderCount(t);
                        if (!t.$children || 1 == y) return u && a.context.setGlobalCompositeOperation(l), a.context.$filter = h[0], c += t.$mask ? this.drawWithClip(t, a, o, s) : t.$scrollRect || t.$maskRect ? this.drawWithScrollRect(t, a, o, s) : this.drawDisplayObject(t, a, o, s), a.context.$filter = null, u && a.context.setGlobalCompositeOperation(i), c
                    }
                    var x = this.createRenderBuffer(v, g);
                    if (x.context.pushBuffer(x), c += t.$mask ? this.drawWithClip(t, x, -f, -p) : t.$scrollRect || t.$maskRect ? this.drawWithScrollRect(t, x, -f, -p) : this.drawDisplayObject(t, x, -f, -p), x.context.popBuffer(), c > 0) {
                        u && a.context.setGlobalCompositeOperation(l), c++, a.$offsetX = o + f, a.$offsetY = s + p;
                        var m = e.Matrix.create(),
                            b = a.globalMatrix;
                        m.a = b.a, m.b = b.b, m.c = b.c, m.d = b.d, m.tx = b.tx, m.ty = b.ty, a.useOffset(), a.context.drawTargetWidthFilters(h, x), b.a = m.a, b.b = m.b, b.c = m.c, b.d = m.d, b.tx = m.tx, b.ty = m.ty, e.Matrix.release(m), u && a.context.setGlobalCompositeOperation(i)
                    }
                    return n.push(x), c
                }, a.prototype.getRenderCount = function(e) {
                    var t = 0,
                        r = e.$getRenderNode();
                    if (r && (t += r.$getRenderCount()), e.$children)
                        for (var i = 0, n = e.$children; i < n.length; i++) {
                            var a = n[i],
                                o = a.$filters;
                            if (o && o.length > 0) return 2;
                            if (a.$children) t += this.getRenderCount(a);
                            else {
                                var s = a.$getRenderNode();
                                s && (t += s.$getRenderCount())
                            }
                        }
                    return t
                }, a.prototype.drawWithClip = function(t, a, o, s) {
                    var c, l = 0,
                        h = 0 !== t.$blendMode;
                    h && (c = r[t.$blendMode], c || (c = i));
                    var u = t.$scrollRect ? t.$scrollRect : t.$maskRect,
                        d = t.$mask;
                    if (d) {
                        var f = d.$getMatrix();
                        if (0 == f.a && 0 == f.b || 0 == f.c && 0 == f.d) return l
                    }
                    if (d || t.$children && 0 != t.$children.length) {
                        var p = t.$getOriginalBounds(),
                            v = p.x,
                            g = p.y,
                            y = p.width,
                            x = p.height;
                        if (0 >= y || 0 >= x) return l;
                        var m = this.createRenderBuffer(y, x);
                        if (m.context.pushBuffer(m), l += this.drawDisplayObject(t, m, -v, -g), d) {
                            var b = this.createRenderBuffer(y, x);
                            b.context.pushBuffer(b);
                            var w = e.Matrix.create();
                            w.copyFrom(d.$getConcatenatedMatrix()), d.$getConcatenatedMatrixAt(t, w), w.translate(-v, -g), b.setTransform(w.a, w.b, w.c, w.d, w.tx, w.ty), e.Matrix.release(w), l += this.drawDisplayObject(d, b, 0, 0), b.context.popBuffer(), m.context.setGlobalCompositeOperation("destination-in"), m.setTransform(1, 0, 0, -1, 0, b.height);
                            var E = b.rootRenderTarget.width,
                                T = b.rootRenderTarget.height;
                            m.context.drawTexture(b.rootRenderTarget.texture, 0, 0, E, T, 0, 0, E, T, E, T), m.setTransform(1, 0, 0, 1, 0, 0), m.context.setGlobalCompositeOperation("source-over"), b.setTransform(1, 0, 0, 1, 0, 0), n.push(b)
                        }
                        if (m.context.setGlobalCompositeOperation(i), m.context.popBuffer(), l > 0) {
                            l++, h && a.context.setGlobalCompositeOperation(c), u && a.context.pushMask(u.x + o, u.y + s, u.width, u.height);
                            var S = e.Matrix.create(),
                                _ = a.globalMatrix;
                            S.a = _.a, S.b = _.b, S.c = _.c, S.d = _.d, S.tx = _.tx, S.ty = _.ty, _.append(1, 0, 0, -1, o + v, s + g + m.height);
                            var R = m.rootRenderTarget.width,
                                C = m.rootRenderTarget.height;
                            a.context.drawTexture(m.rootRenderTarget.texture, 0, 0, R, C, 0, 0, R, C, R, C), u && m.context.popMask(), h && a.context.setGlobalCompositeOperation(i);
                            var L = a.globalMatrix;
                            L.a = S.a, L.b = S.b, L.c = S.c, L.d = S.d, L.tx = S.tx, L.ty = S.ty, e.Matrix.release(S)
                        }
                        return n.push(m), l
                    }
                    return u && a.context.pushMask(u.x + o, u.y + s, u.width, u.height), h && a.context.setGlobalCompositeOperation(c), l += this.drawDisplayObject(t, a, o, s), h && a.context.setGlobalCompositeOperation(i), u && a.context.popMask(), l
                }, a.prototype.drawWithScrollRect = function(e, t, r, i) {
                    var n = 0,
                        a = e.$scrollRect ? e.$scrollRect : e.$maskRect;
                    if (a.isEmpty()) return n;
                    e.$scrollRect && (r -= a.x, i -= a.y);
                    var o = t.globalMatrix,
                        s = t.context,
                        c = !1;
                    if (t.$hasScissor || 0 != o.b || 0 != o.c) t.context.pushMask(a.x + r, a.y + i, a.width, a.height);
                    else {
                        var l = o.a,
                            h = o.d,
                            u = o.tx,
                            d = o.ty,
                            f = a.x + r,
                            p = a.y + i,
                            v = f + a.width,
                            g = p + a.height,
                            y = void 0,
                            x = void 0,
                            m = void 0,
                            b = void 0;
                        if (1 == l && 1 == h) y = f + u, x = p + d, m = v + u, b = g + d;
                        else {
                            var w = l * f + u,
                                E = h * p + d,
                                T = l * v + u,
                                S = h * p + d,
                                _ = l * v + u,
                                R = h * g + d,
                                C = l * f + u,
                                L = h * g + d,
                                D = 0;
                            w > T && (D = w, w = T, T = D), _ > C && (D = _, _ = C, C = D), y = _ > w ? w : _, m = T > C ? T : C, E > S && (D = E, E = S, S = D), R > L && (D = R, R = L, L = D), x = R > E ? E : R, b = S > L ? S : L
                        }
                        s.enableScissor(y, -b + t.height, m - y, b - x), c = !0
                    }
                    return n += this.drawDisplayObject(e, t, r, i), c ? s.disableScissor() : s.popMask(), n
                }, a.prototype.drawNodeToBuffer = function(e, t, r, i) {
                    var n = t;
                    n.context.pushBuffer(n), n.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), this.renderNode(e, t, 0, 0, i), n.context.$drawWebGL(), n.onRenderFinish(), n.context.popBuffer()
                }, a.prototype.drawDisplayToBuffer = function(e, t, r) {
                    t.context.pushBuffer(t), r && t.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty);
                    var i;
                    i = e.$renderDirty ? e.$getRenderNode() : e.$renderNode;
                    var n = 0;
                    if (i) switch (n++, i.type) {
                        case 1:
                            this.renderBitmap(i, t);
                            break;
                        case 2:
                            this.renderText(i, t);
                            break;
                        case 3:
                            this.renderGraphics(i, t);
                            break;
                        case 4:
                            this.renderGroup(i, t);
                            break;
                        case 5:
                            this.renderMesh(i, t);
                            break;
                        case 6:
                            this.renderNormalBitmap(i, t)
                    }
                    var a = e.$children;
                    if (a)
                        for (var o = a.length, s = 0; o > s; s++) {
                            var c = a[s];
                            switch (c.$renderMode) {
                                case 1:
                                    break;
                                case 2:
                                    n += this.drawWithFilter(c, t, 0, 0);
                                    break;
                                case 3:
                                    n += this.drawWithClip(c, t, 0, 0);
                                    break;
                                case 4:
                                    n += this.drawWithScrollRect(c, t, 0, 0);
                                    break;
                                default:
                                    n += this.drawDisplayObject(c, t, 0, 0)
                            }
                        }
                    return t.context.$drawWebGL(), t.onRenderFinish(), t.context.popBuffer(), n
                }, a.prototype.renderNode = function(e, t, r, i, n) {
                    switch (t.$offsetX = r, t.$offsetY = i, e.type) {
                        case 1:
                            this.renderBitmap(e, t);
                            break;
                        case 2:
                            this.renderText(e, t);
                            break;
                        case 3:
                            this.renderGraphics(e, t, n);
                            break;
                        case 4:
                            this.renderGroup(e, t);
                            break;
                        case 5:
                            this.renderMesh(e, t);
                            break;
                        case 6:
                            this.renderNormalBitmap(e, t)
                    }
                }, a.prototype.renderNormalBitmap = function(e, t) {
                    var r = e.image;
                    r && t.context.drawImage(r, e.sourceX, e.sourceY, e.sourceW, e.sourceH, e.drawX, e.drawY, e.drawW, e.drawH, e.imageWidth, e.imageHeight, e.rotated, e.smoothing)
                }, a.prototype.renderBitmap = function(t, n) {
                    var a = t.image;
                    if (a) {
                        var o, s, c, l = t.drawData,
                            h = l.length,
                            u = 0,
                            d = t.matrix,
                            f = t.blendMode,
                            p = t.alpha;
                        if (d) {
                            o = e.Matrix.create();
                            var v = n.globalMatrix;
                            o.a = v.a, o.b = v.b, o.c = v.c, o.d = v.d, o.tx = v.tx, o.ty = v.ty, s = n.$offsetX, c = n.$offsetY, n.useOffset(), n.transform(d.a, d.b, d.c, d.d, d.tx, d.ty)
                        }
                        f && n.context.setGlobalCompositeOperation(r[f]);
                        var g;
                        if (p == p && (g = n.globalAlpha, n.globalAlpha *= p), t.filter) {
                            for (n.context.$filter = t.filter; h > u;) n.context.drawImage(a, l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], t.imageWidth, t.imageHeight, t.rotated, t.smoothing);
                            n.context.$filter = null
                        } else
                            for (; h > u;) n.context.drawImage(a, l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], t.imageWidth, t.imageHeight, t.rotated, t.smoothing);
                        if (f && n.context.setGlobalCompositeOperation(i), p == p && (n.globalAlpha = g), d) {
                            var y = n.globalMatrix;
                            y.a = o.a, y.b = o.b, y.c = o.c, y.d = o.d, y.tx = o.tx, y.ty = o.ty, n.$offsetX = s, n.$offsetY = c, e.Matrix.release(o)
                        }
                    }
                }, a.prototype.renderMesh = function(t, n) {
                    var a, o, s, c = t.image,
                        l = t.drawData,
                        h = l.length,
                        u = 0,
                        d = t.matrix,
                        f = t.blendMode,
                        p = t.alpha;
                    if (d) {
                        a = e.Matrix.create();
                        var v = n.globalMatrix;
                        a.a = v.a, a.b = v.b, a.c = v.c, a.d = v.d, a.tx = v.tx, a.ty = v.ty, o = n.$offsetX, s = n.$offsetY, n.useOffset(), n.transform(d.a, d.b, d.c, d.d, d.tx, d.ty)
                    }
                    f && n.context.setGlobalCompositeOperation(r[f]);
                    var g;
                    if (p == p && (g = n.globalAlpha, n.globalAlpha *= p), t.filter) {
                        for (n.context.$filter = t.filter; h > u;) n.context.drawMesh(c, l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], t.imageWidth, t.imageHeight, t.uvs, t.vertices, t.indices, t.bounds, t.rotated, t.smoothing);
                        n.context.$filter = null
                    } else
                        for (; h > u;) n.context.drawMesh(c, l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], l[u++], t.imageWidth, t.imageHeight, t.uvs, t.vertices, t.indices, t.bounds, t.rotated, t.smoothing);
                    if (f && n.context.setGlobalCompositeOperation(i), p == p && (n.globalAlpha = g), d) {
                        var y = n.globalMatrix;
                        y.a = a.a, y.b = a.b, y.c = a.c, y.d = a.d, y.tx = a.tx, y.ty = a.ty, n.$offsetX = o, n.$offsetY = s, e.Matrix.release(a)
                    }
                }, a.prototype.renderText = function(r, i) {
                    var n = r.width - r.x,
                        a = r.height - r.y;
                    if (!(0 >= n || 0 >= a) && n && a && 0 != r.drawData.length) {
                        var o = e.sys.DisplayList.$canvasScaleX,
                            s = e.sys.DisplayList.$canvasScaleY,
                            c = i.context.$maxTextureSize;
                        n * o > c && (o *= c / (n * o)), a * s > c && (s *= c / (a * s)), n *= o, a *= s;
                        var l = r.x * o,
                            h = r.y * s;
                        if ((r.$canvasScaleX != o || r.$canvasScaleY != s) && (r.$canvasScaleX = o, r.$canvasScaleY = s, r.dirtyRender = !0), this.canvasRenderBuffer && this.canvasRenderBuffer.context ? r.dirtyRender && this.canvasRenderBuffer.resize(n, a) : (this.canvasRenderer = new e.CanvasRenderer, this.canvasRenderBuffer = new t.CanvasRenderBuffer(n, a)), this.canvasRenderBuffer.context) {
                            if ((1 != o || 1 != s) && this.canvasRenderBuffer.context.setTransform(o, 0, 0, s, 0, 0), l || h ? (r.dirtyRender && this.canvasRenderBuffer.context.setTransform(o, 0, 0, s, -l, -h), i.transform(1, 0, 0, 1, l / o, h / s)) : (1 != o || 1 != s) && this.canvasRenderBuffer.context.setTransform(o, 0, 0, s, 0, 0), r.dirtyRender) {
                                var u = this.canvasRenderBuffer.surface;
                                this.canvasRenderer.renderText(r, this.canvasRenderBuffer.context);
                                var d = r.$texture;
                                d ? i.context.updateTexture(d, u) : (d = i.context.createTexture(u), r.$texture = d), r.$textureWidth = u.width, r.$textureHeight = u.height
                            }
                            var f = r.$textureWidth,
                                p = r.$textureHeight;
                            i.context.drawTexture(r.$texture, 0, 0, f, p, 0, 0, f / o, p / s, f, p), (l || h) && (r.dirtyRender && this.canvasRenderBuffer.context.setTransform(o, 0, 0, s, 0, 0), i.transform(1, 0, 0, 1, -l / o, -h / s)), r.dirtyRender = !1
                        }
                    }
                }, a.prototype.renderGraphics = function(r, i, n) {
                    var a = r.width,
                        o = r.height;
                    if (!(0 >= a || 0 >= o) && a && o && 0 != r.drawData.length) {
                        var s = e.sys.DisplayList.$canvasScaleX,
                            c = e.sys.DisplayList.$canvasScaleY;
                        (1 > a * s || 1 > o * c) && (s = c = 1), (r.$canvasScaleX != s || r.$canvasScaleY != c) && (r.$canvasScaleX = s, r.$canvasScaleY = c, r.dirtyRender = !0), a *= s, o *= c;
                        var l = Math.ceil(a),
                            h = Math.ceil(o);
                        if (s *= l / a, c *= h / o, a = l, o = h, this.canvasRenderBuffer && this.canvasRenderBuffer.context ? (r.dirtyRender || n) && this.canvasRenderBuffer.resize(a, o) : (this.canvasRenderer = new e.CanvasRenderer, this.canvasRenderBuffer = new t.CanvasRenderBuffer(a, o)), this.canvasRenderBuffer.context) {
                            (1 != s || 1 != c) && this.canvasRenderBuffer.context.setTransform(s, 0, 0, c, 0, 0), (r.x || r.y) && ((r.dirtyRender || n) && this.canvasRenderBuffer.context.translate(-r.x, -r.y), i.transform(1, 0, 0, 1, r.x, r.y));
                            var u = this.canvasRenderBuffer.surface;
                            if (n) {
                                this.canvasRenderer.renderGraphics(r, this.canvasRenderBuffer.context, !0), e.WebGLUtils.deleteWebGLTexture(u);
                                var d = i.context.getWebGLTexture(u);
                                i.context.drawTexture(d, 0, 0, a, o, 0, 0, a, o, u.width, u.height)
                            } else {
                                if (r.dirtyRender) {
                                    this.canvasRenderer.renderGraphics(r, this.canvasRenderBuffer.context);
                                    var d = r.$texture;
                                    d ? i.context.updateTexture(d, u) : (d = i.context.createTexture(u), r.$texture = d), r.$textureWidth = u.width, r.$textureHeight = u.height
                                }
                                var f = r.$textureWidth,
                                    p = r.$textureHeight;
                                i.context.drawTexture(r.$texture, 0, 0, f, p, 0, 0, f / s, p / c, f, p)
                            }(r.x || r.y) && ((r.dirtyRender || n) && this.canvasRenderBuffer.context.translate(r.x, r.y), i.transform(1, 0, 0, 1, -r.x, -r.y)), n || (r.dirtyRender = !1)
                        }
                    }
                }, a.prototype.renderGroup = function(t, r) {
                    var i, n, a, o = t.matrix;
                    if (o) {
                        i = e.Matrix.create();
                        var s = r.globalMatrix;
                        i.a = s.a, i.b = s.b, i.c = s.c, i.d = s.d, i.tx = s.tx, i.ty = s.ty, n = r.$offsetX, a = r.$offsetY, r.useOffset(), r.transform(o.a, o.b, o.c, o.d, o.tx, o.ty)
                    }
                    for (var c = t.drawData, l = c.length, h = 0; l > h; h++) {
                        var u = c[h];
                        this.renderNode(u, r, r.$offsetX, r.$offsetY)
                    }
                    if (o) {
                        var d = r.globalMatrix;
                        d.a = i.a, d.b = i.b, d.c = i.c, d.d = i.d, d.tx = i.tx, d.ty = i.ty, r.$offsetX = n, r.$offsetY = a, e.Matrix.release(i)
                    }
                }, a.prototype.createRenderBuffer = function(e, r) {
                    var i = n.pop();
                    return i ? i.resize(e, r) : (i = new t.WebGLRenderBuffer(e, r), i.$computeDrawCall = !1), i
                }, a
            }();
        t.WebGLRenderer = a, __reflect(a.prototype, "egret.web.WebGLRenderer", ["egret.sys.SystemRenderer"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e(e, t, r) {
                this.gl = e, this.name = r.name, this.type = r.type, this.size = r.size, this.location = e.getAttribLocation(t, this.name), this.count = 0, this.initCount(e), this.format = e.FLOAT, this.initFormat(e)
            }
            return e.prototype.initCount = function(e) {
                var t = this.type;
                switch (t) {
                    case 5126:
                    case 5120:
                    case 5121:
                    case 5123:
                        this.count = 1;
                        break;
                    case 35664:
                        this.count = 2;
                        break;
                    case 35665:
                        this.count = 3;
                        break;
                    case 35666:
                        this.count = 4
                }
            }, e.prototype.initFormat = function(e) {
                var t = this.type;
                switch (t) {
                    case 5126:
                    case 35664:
                    case 35665:
                    case 35666:
                        this.format = e.FLOAT;
                        break;
                    case 5121:
                        this.format = e.UNSIGNED_BYTE;
                        break;
                    case 5123:
                        this.format = e.UNSIGNED_SHORT;
                        break;
                    case 5120:
                        this.format = e.BYTE
                }
            }, e
        }();
        e.EgretWebGLAttribute = t, __reflect(t.prototype, "egret.web.EgretWebGLAttribute")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        function t(e, t, r) {
            var i = e.createShader(t);
            e.shaderSource(i, r), e.compileShader(i);
            var n = e.getShaderParameter(i, e.COMPILE_STATUS);
            return n || (console.log("shader not compiled!"), console.log(e.getShaderInfoLog(i))), i
        }

        function r(e, t, r) {
            var i = e.createProgram();
            return e.attachShader(i, t), e.attachShader(i, r), e.linkProgram(i), i
        }

        function i(t, r) {
            for (var i = {}, n = t.getProgramParameter(r, t.ACTIVE_ATTRIBUTES), a = 0; n > a; a++) {
                var o = t.getActiveAttrib(r, a),
                    s = o.name,
                    c = new e.EgretWebGLAttribute(t, r, o);
                i[s] = c
            }
            return i
        }

        function n(t, r) {
            for (var i = {}, n = t.getProgramParameter(r, t.ACTIVE_UNIFORMS), a = 0; n > a; a++) {
                var o = t.getActiveUniform(r, a),
                    s = o.name,
                    c = new e.EgretWebGLUniform(t, r, o);
                i[s] = c
            }
            return i
        }
        var a = function() {
            function e(e, a, o) {
                this.vshaderSource = a, this.fshaderSource = o, this.vertexShader = t(e, e.VERTEX_SHADER, this.vshaderSource), this.fragmentShader = t(e, e.FRAGMENT_SHADER, this.fshaderSource), this.id = r(e, this.vertexShader, this.fragmentShader), this.uniforms = n(e, this.id), this.attributes = i(e, this.id)
            }
            return e.getProgram = function(t, r, i, n) {
                return this.programCache[n] || (this.programCache[n] = new e(t, r, i)), this.programCache[n]
            }, e.deleteProgram = function(e, t, r, i) {}, e.programCache = {}, e
        }();
        e.EgretWebGLProgram = a, __reflect(a.prototype, "egret.web.EgretWebGLProgram")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e(e, t, r) {
                this.gl = e, this.name = r.name, this.type = r.type, this.size = r.size, this.location = e.getUniformLocation(t, this.name), this.setDefaultValue(), this.generateSetValue(), this.generateUpload()
            }
            return e.prototype.setDefaultValue = function() {
                var e = this.type;
                switch (e) {
                    case 5126:
                    case 35678:
                    case 35680:
                    case 35670:
                    case 5124:
                        this.value = 0;
                        break;
                    case 35664:
                    case 35671:
                    case 35667:
                        this.value = [0, 0];
                        break;
                    case 35665:
                    case 35672:
                    case 35668:
                        this.value = [0, 0, 0];
                        break;
                    case 35666:
                    case 35673:
                    case 35669:
                        this.value = [0, 0, 0, 0];
                        break;
                    case 35674:
                        this.value = new Float32Array([1, 0, 0, 1]);
                        break;
                    case 35675:
                        this.value = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                        break;
                    case 35676:
                        this.value = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            }, e.prototype.generateSetValue = function() {
                var e = this.type;
                switch (e) {
                    case 5126:
                    case 35678:
                    case 35680:
                    case 35670:
                    case 5124:
                        this.setValue = function(e) {
                            var t = this.value !== e;
                            this.value = e, t && this.upload()
                        };
                        break;
                    case 35664:
                    case 35671:
                    case 35667:
                        this.setValue = function(e) {
                            var t = this.value[0] !== e.x || this.value[1] !== e.y;
                            this.value[0] = e.x, this.value[1] = e.y, t && this.upload()
                        };
                        break;
                    case 35665:
                    case 35672:
                    case 35668:
                        this.setValue = function(e) {
                            this.value[0] = e.x, this.value[1] = e.y, this.value[2] = e.z, this.upload()
                        };
                        break;
                    case 35666:
                    case 35673:
                    case 35669:
                        this.setValue = function(e) {
                            this.value[0] = e.x, this.value[1] = e.y, this.value[2] = e.z, this.value[3] = e.w, this.upload()
                        };
                        break;
                    case 35674:
                    case 35675:
                    case 35676:
                        this.setValue = function(e) {
                            this.value.set(e), this.upload()
                        }
                }
            }, e.prototype.generateUpload = function() {
                var e = this.gl,
                    t = this.type,
                    r = this.location;
                switch (t) {
                    case 5126:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform1f(r, t)
                        };
                        break;
                    case 35664:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform2f(r, t[0], t[1])
                        };
                        break;
                    case 35665:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform3f(r, t[0], t[1], t[2])
                        };
                        break;
                    case 35666:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform4f(r, t[0], t[1], t[2], t[3])
                        };
                        break;
                    case 35678:
                    case 35680:
                    case 35670:
                    case 5124:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform1i(r, t)
                        };
                        break;
                    case 35671:
                    case 35667:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform2i(r, t[0], t[1])
                        };
                        break;
                    case 35672:
                    case 35668:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform3i(r, t[0], t[1], t[2])
                        };
                        break;
                    case 35673:
                    case 35669:
                        this.upload = function() {
                            var t = this.value;
                            e.uniform4i(r, t[0], t[1], t[2], t[3])
                        };
                        break;
                    case 35674:
                        this.upload = function() {
                            var t = this.value;
                            e.uniformMatrix2fv(r, !1, t)
                        };
                        break;
                    case 35675:
                        this.upload = function() {
                            var t = this.value;
                            e.uniformMatrix3fv(r, !1, t)
                        };
                        break;
                    case 35676:
                        this.upload = function() {
                            var t = this.value;
                            e.uniformMatrix4fv(r, !1, t)
                        }
                }
            }, e
        }();
        e.EgretWebGLUniform = t, __reflect(t.prototype, "egret.web.EgretWebGLUniform")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {}
            return e.blur_frag = "precision mediump float;\r\nuniform vec2 blur;\r\nuniform sampler2D uSampler;\r\nvarying vec2 vTextureCoord;\r\nuniform vec2 uTextureSize;\r\nvoid main()\r\n{\r\n    const int sampleRadius = 5;\r\n    const int samples = sampleRadius * 2 + 1;\r\n    vec2 blurUv = blur / uTextureSize;\r\n    vec4 color = vec4(0, 0, 0, 0);\r\n    vec2 uv = vec2(0.0, 0.0);\r\n    blurUv /= float(sampleRadius);\r\n\r\n    for (int i = -sampleRadius; i <= sampleRadius; i++) {\r\n        uv.x = vTextureCoord.x + float(i) * blurUv.x;\r\n        uv.y = vTextureCoord.y + float(i) * blurUv.y;\r\n        color += texture2D(uSampler, uv);\r\n    }\r\n\r\n    color /= float(samples);\r\n    gl_FragColor = color;\r\n}", e.colorTransform_frag = "precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\nuniform mat4 matrix;\r\nuniform vec4 colorAdd;\r\nuniform sampler2D uSampler;\r\n\r\nvoid main(void) {\r\n    vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n    if(texColor.a > 0.) {\r\n        // 抵消预乘的alpha通道\r\n        texColor = vec4(texColor.rgb / texColor.a, texColor.a);\r\n    }\r\n    vec4 locColor = clamp(texColor * matrix + colorAdd, 0., 1.);\r\n    gl_FragColor = vColor * vec4(locColor.rgb * locColor.a, locColor.a);\r\n}", e.default_vert = "attribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\nattribute vec2 aColor;\r\n\r\nuniform vec2 projectionVector;\r\n// uniform vec2 offsetVector;\r\n\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\n\r\nconst vec2 center = vec2(-1.0, 1.0);\r\n\r\nvoid main(void) {\r\n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\r\n   vTextureCoord = aTextureCoord;\r\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\r\n}", e.glow_frag = "precision highp float;\r\nvarying vec2 vTextureCoord;\r\n\r\nuniform sampler2D uSampler;\r\n\r\nuniform float dist;\r\nuniform float angle;\r\nuniform vec4 color;\r\nuniform float alpha;\r\nuniform float blurX;\r\nuniform float blurY;\r\n// uniform vec4 quality;\r\nuniform float strength;\r\nuniform float inner;\r\nuniform float knockout;\r\nuniform float hideObject;\r\n\r\nuniform vec2 uTextureSize;\r\n\r\nfloat random(vec2 scale)\r\n{\r\n    return fract(sin(dot(gl_FragCoord.xy, scale)) * 43758.5453);\r\n}\r\n\r\nvoid main(void) {\r\n    vec2 px = vec2(1.0 / uTextureSize.x, 1.0 / uTextureSize.y);\r\n    // TODO 自动调节采样次数？\r\n    const float linearSamplingTimes = 7.0;\r\n    const float circleSamplingTimes = 12.0;\r\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\r\n    vec4 curColor;\r\n    float totalAlpha = 0.0;\r\n    float maxTotalAlpha = 0.0;\r\n    float curDistanceX = 0.0;\r\n    float curDistanceY = 0.0;\r\n    float offsetX = dist * cos(angle) * px.x;\r\n    float offsetY = dist * sin(angle) * px.y;\r\n\r\n    const float PI = 3.14159265358979323846264;\r\n    float cosAngle;\r\n    float sinAngle;\r\n    float offset = PI * 2.0 / circleSamplingTimes * random(vec2(12.9898, 78.233));\r\n    float stepX = blurX * px.x / linearSamplingTimes;\r\n    float stepY = blurY * px.y / linearSamplingTimes;\r\n    for (float a = 0.0; a <= PI * 2.0; a += PI * 2.0 / circleSamplingTimes) {\r\n        cosAngle = cos(a + offset);\r\n        sinAngle = sin(a + offset);\r\n        for (float i = 1.0; i <= linearSamplingTimes; i++) {\r\n            curDistanceX = i * stepX * cosAngle;\r\n            curDistanceY = i * stepY * sinAngle;\r\n            if (vTextureCoord.x + curDistanceX - offsetX >= 0.0 && vTextureCoord.y + curDistanceY + offsetY <= 1.0){\r\n                curColor = texture2D(uSampler, vec2(vTextureCoord.x + curDistanceX - offsetX, vTextureCoord.y + curDistanceY + offsetY));\r\n                totalAlpha += (linearSamplingTimes - i) * curColor.a;\r\n            }\r\n            maxTotalAlpha += (linearSamplingTimes - i);\r\n        }\r\n    }\r\n\r\n    ownColor.a = max(ownColor.a, 0.0001);\r\n    ownColor.rgb = ownColor.rgb / ownColor.a;\r\n\r\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha) * strength * alpha * (1. - inner) * max(min(hideObject, knockout), 1. - ownColor.a);\r\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * strength * alpha * inner * ownColor.a;\r\n\r\n    ownColor.a = max(ownColor.a * knockout * (1. - hideObject), 0.0001);\r\n    vec3 mix1 = mix(ownColor.rgb, color.rgb, innerGlowAlpha / (innerGlowAlpha + ownColor.a));\r\n    vec3 mix2 = mix(mix1, color.rgb, outerGlowAlpha / (innerGlowAlpha + ownColor.a + outerGlowAlpha));\r\n    float resultAlpha = min(ownColor.a + outerGlowAlpha + innerGlowAlpha, 1.);\r\n    gl_FragColor = vec4(mix2 * resultAlpha, resultAlpha);\r\n}", e.primitive_frag = "precision lowp float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\n\r\nvoid main(void) {\r\n    gl_FragColor = vColor;\r\n}", e.texture_frag = "precision lowp float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\nuniform sampler2D uSampler;\r\n\r\nvoid main(void) {\r\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\r\n}", e
        }();
        e.EgretShaderLib = t, __reflect(t.prototype, "egret.web.EgretShaderLib")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var __reflect = this && this.__reflect || function(t, e, r) {
        t.__class__ = e, r ? r.push(e) : r = [e], t.__types__ = t.__types__ ? r.concat(t.__types__) : r
    },
    __extends = this && this.__extends || function(t, e) {
        function r() {
            this.constructor = t
        }
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        r.prototype = e.prototype, t.prototype = new r
    },
    egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.BINARY = "binary", t.TEXT = "text", t.VARIABLES = "variables", t.TEXTURE = "texture", t.SOUND = "sound", t
    }();
    t.URLLoaderDataFormat = e, __reflect(e.prototype, "egret.URLLoaderDataFormat")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e(e, r, i) {
            var o = t.call(this) || this;
            return o._name = e, o._frame = 0 | r, i && (o._end = 0 | i), o
        }
        return __extends(e, t), Object.defineProperty(e.prototype, "name", {
            get: function() {
                return this._name
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "frame", {
            get: function() {
                return this._frame
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "end", {
            get: function() {
                return this._end
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.clone = function() {
            return new e(this._name, this._frame, this._end)
        }, e
    }(t.EventDispatcher);
    t.FrameLabel = e, __reflect(e.prototype, "egret.FrameLabel")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r() {
            var t = e.call(this) || this;
            return t.$mcData = null, t.numFrames = 1, t.frames = [], t.labels = null, t.events = [], t.frameRate = 0, t.textureData = null, t.spriteSheet = null, t
        }
        return __extends(r, e), r.prototype.$init = function(t, e, r) {
            this.textureData = e, this.spriteSheet = r, this.setMCData(t)
        }, r.prototype.getKeyFrameData = function(t) {
            var e = this.frames[t - 1];
            return e.frame && (e = this.frames[e.frame - 1]), e
        }, r.prototype.getTextureByFrame = function(t) {
            var e = this.getKeyFrameData(t);
            if (e.res) {
                var r = this.getTextureByResName(e.res);
                return r
            }
            return null
        }, r.prototype.$getOffsetByFrame = function(t, e) {
            var r = this.getKeyFrameData(t);
            r.res && e.setTo(0 | r.x, 0 | r.y)
        }, r.prototype.getTextureByResName = function(t) {
            if (null == this.spriteSheet) return null;
            var e = this.spriteSheet.getTexture(t);
            if (!e) {
                var r = this.textureData[t];
                e = this.spriteSheet.createTexture(t, r.x, r.y, r.w, r.h)
            }
            return e
        }, r.prototype.$isDataValid = function() {
            return this.frames.length > 0
        }, r.prototype.$isTextureValid = function() {
            return null != this.textureData && null != this.spriteSheet
        }, r.prototype.$fillMCData = function(t) {
            this.frameRate = t.frameRate || 24, this.fillFramesData(t.frames), this.fillFrameLabelsData(t.labels), this.fillFrameEventsData(t.events)
        }, r.prototype.fillFramesData = function(t) {
            for (var e, r = this.frames, i = t ? t.length : 0, o = 0; i > o; o++) {
                var n = t[o];
                if (r.push(n), n.duration) {
                    var s = parseInt(n.duration);
                    if (s > 1) {
                        e = r.length;
                        for (var a = 1; s > a; a++) r.push({
                            frame: e
                        })
                    }
                }
            }
            this.numFrames = r.length
        }, r.prototype.fillFrameLabelsData = function(e) {
            if (e) {
                var r = e.length;
                if (r > 0) {
                    this.labels = [];
                    for (var i = 0; r > i; i++) {
                        var o = e[i];
                        this.labels.push(new t.FrameLabel(o.name, o.frame, o.end))
                    }
                }
            }
        }, r.prototype.fillFrameEventsData = function(t) {
            if (t) {
                var e = t.length;
                if (e > 0) {
                    this.events = [];
                    for (var r = 0; e > r; r++) {
                        var i = t[r];
                        this.events[i.frame] = i.name
                    }
                }
            }
        }, Object.defineProperty(r.prototype, "mcData", {
            get: function() {
                return this.$mcData
            },
            set: function(t) {
                this.setMCData(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setMCData = function(t) {
            this.$mcData != t && (this.$mcData = t, t && this.$fillMCData(t))
        }, r
    }(t.HashObject);
    t.MovieClipData = e, __reflect(e.prototype, "egret.MovieClipData")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r(t, r) {
            var i = e.call(this) || this;
            return i.enableCache = !0, i.$mcDataCache = {}, i.$mcDataSet = t, i.setTexture(r), i
        }
        return __extends(r, e), r.prototype.clearCache = function() {
            this.$mcDataCache = {}
        }, r.prototype.generateMovieClipData = function(e) {
            if (void 0 === e && (e = ""), "" == e && this.$mcDataSet)
                for (e in this.$mcDataSet.mc) break;
            if ("" == e) return null;
            var r = this.findFromCache(e, this.$mcDataCache);
            return r || (r = new t.MovieClipData, this.fillData(e, r, this.$mcDataCache)), r
        }, r.prototype.findFromCache = function(t, e) {
            return this.enableCache && e[t] ? e[t] : null
        }, r.prototype.fillData = function(t, e, r) {
            if (this.$mcDataSet) {
                var i = this.$mcDataSet.mc[t];
                i && (e.$init(i, this.$mcDataSet.res, this.$spriteSheet), this.enableCache && (r[t] = e))
            }
        }, Object.defineProperty(r.prototype, "mcDataSet", {
            get: function() {
                return this.$mcDataSet
            },
            set: function(t) {
                this.$mcDataSet = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "texture", {
            set: function(t) {
                this.setTexture(t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "spriteSheet", {
            get: function() {
                return this.$spriteSheet
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setTexture = function(e) {
            this.$spriteSheet = e ? new t.SpriteSheet(e) : null
        }, r
    }(t.EventDispatcher);
    t.MovieClipDataFactory = e, __reflect(e.prototype, "egret.MovieClipDataFactory")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r(t, r, i, o) {
            void 0 === r && (r = !1), void 0 === i && (i = !1), void 0 === o && (o = null);
            var n = e.call(this, t, r, i) || this;
            return n.frameLabel = null, n.frameLabel = o, n
        }
        return __extends(r, e), r.dispatchMovieClipEvent = function(e, i, o) {
            void 0 === o && (o = null);
            var n = t.Event.create(r, i);
            n.frameLabel = o;
            var s = e.dispatchEvent(n);
            return t.Event.release(n), s
        }, r.FRAME_LABEL = "frame_label", r
    }(t.Event);
    t.MovieClipEvent = e, __reflect(e.prototype, "egret.MovieClipEvent")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function e() {
            t.$error(1014)
        }
        return e.get = function(t) {
            return -1 > t && (t = -1), t > 1 && (t = 1),
                function(e) {
                    return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
                }
        }, e.getPowOut = function(t) {
            return function(e) {
                return 1 - Math.pow(1 - e, t)
            }
        }, e.quintOut = e.getPowOut(5), e.quartOut = e.getPowOut(4), e
    }();
    t.ScrollEase = e, __reflect(e.prototype, "egret.ScrollEase");
    var r = function(e) {
        function r(t, r, i) {
            var o = e.call(this) || this;
            return o._target = null, o._useTicks = !1, o.ignoreGlobalPause = !1, o.loop = !1, o.pluginData = null, o._steps = null, o._actions = null, o.paused = !1, o.duration = 0, o._prevPos = -1, o.position = null, o._prevPosition = 0, o._stepPosition = 0, o.passive = !1, o.initialize(t, r, i), o
        }
        return __extends(r, e), r.get = function(t, e, i, o) {
            return void 0 === e && (e = null), void 0 === i && (i = null), void 0 === o && (o = !1), o && r.removeTweens(t), new r(t, e, i)
        }, r.removeTweens = function(t) {
            if (t.tween_count) {
                for (var e = r._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !0, e.splice(i, 1));
                t.tween_count = 0
            }
        }, r.tick = function(t, e) {
            void 0 === e && (e = !1);
            var i = t - r._lastTime;
            r._lastTime = t;
            for (var o = r._tweens.concat(), n = o.length - 1; n >= 0; n--) {
                var s = o[n];
                e && !s.ignoreGlobalPause || s.paused || s.tick(s._useTicks ? 1 : i)
            }
            return !1
        }, r._register = function(e, i) {
            var o = e._target,
                n = r._tweens;
            if (i) o && (o.tween_count = o.tween_count > 0 ? o.tween_count + 1 : 1), n.push(e), r._inited || (r._lastTime = t.getTimer(), t.ticker.$startTick(r.tick, null), r._inited = !0);
            else {
                o && o.tween_count--;
                for (var s = n.length; s--;)
                    if (n[s] == e) return void n.splice(s, 1)
            }
        }, r.prototype.initialize = function(t, e, i) {
            this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && r.removeTweens(t)), this.pluginData = i || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], e && e.paused ? this.paused = !0 : r._register(this, !0), e && null != e.position && this.setPosition(e.position)
        }, r.prototype.setPosition = function(t, e) {
            void 0 === e && (e = 1), 0 > t && (t = 0);
            var r = t,
                i = !1;
            if (r >= this.duration && (this.loop ? r %= this.duration : (r = this.duration, i = !0)), r == this._prevPos) return i;
            var o = this._prevPos;
            if (this.position = this._prevPos = r, this._prevPosition = t, this._target)
                if (i) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                var n = void 0,
                    s = this._steps.length;
                for (n = 0; s > n && !(this._steps[n].t > r); n++);
                var a = this._steps[n - 1];
                this._updateTargetProps(a, (this._stepPosition = r - a.t) / a.d)
            }
            return i && this.setPaused(!0), 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(r, r) : 1 == e && o > r ? (o != this.duration && this._runActions(o, this.duration), this._runActions(0, r, !0)) : this._runActions(o, r)), this.dispatchEventWith("change"), i
        }, r.prototype._runActions = function(t, e, r) {
            void 0 === r && (r = !1);
            var i = t,
                o = e,
                n = -1,
                s = this._actions.length,
                a = 1;
            for (t > e && (i = e, o = t, n = s, s = a = -1);
                (n += a) != s;) {
                var c = this._actions[n],
                    l = c.t;
                (l == o || l > i && o > l || r && l == t) && c.f.apply(c.o, c.p)
            }
        }, r.prototype._updateTargetProps = function(t, e) {
            var i, o, n, s, a, c;
            if (t || 1 != e) {
                if (this.passive = !!t.v, this.passive) return;
                t.e && (e = t.e(e, 0, 1, 1)), i = t.p0, o = t.p1
            } else this.passive = !1, i = o = this._curQueueProps;
            for (var l in this._initQueueProps) {
                null == (s = i[l]) && (i[l] = s = this._initQueueProps[l]), null == (a = o[l]) && (o[l] = a = s), n = s == a || 0 == e || 1 == e || "number" != typeof s ? 1 == e ? a : s : s + (a - s) * e;
                var h = !1;
                if (c = r._plugins[l])
                    for (var u = 0, p = c.length; p > u; u++) {
                        var _ = c[u].tween(this, l, n, i, o, e, !!t && i == o, !t);
                        _ == r.IGNORE ? h = !0 : n = _
                    }
                h || (this._target[l] = n)
            }
        }, r.prototype.setPaused = function(t) {
            return this.paused = t, r._register(this, !t), this
        }, r.prototype._cloneProps = function(t) {
            var e = {};
            for (var r in t) e[r] = t[r];
            return e
        }, r.prototype._addStep = function(t) {
            return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
        }, r.prototype._appendQueueProps = function(t) {
            var e, i, o, n, s;
            for (var a in t)
                if (void 0 === this._initQueueProps[a]) {
                    if (i = this._target[a], e = r._plugins[a])
                        for (o = 0, n = e.length; n > o; o++) i = e[o].init(this, a, i);
                    this._initQueueProps[a] = this._curQueueProps[a] = void 0 === i ? null : i
                } else i = this._curQueueProps[a];
            for (var a in t) {
                if (i = this._curQueueProps[a], e = r._plugins[a])
                    for (s = s || {}, o = 0, n = e.length; n > o; o++) e[o].step && e[o].step(this, a, i, t[a], s);
                this._curQueueProps[a] = t[a]
            }
            return s && this._appendQueueProps(s), this._curQueueProps
        }, r.prototype._addAction = function(t) {
            return t.t = this.duration, this._actions.push(t), this
        }, r.prototype.to = function(t, e, r) {
            return void 0 === r && (r = void 0), (isNaN(e) || 0 > e) && (e = 0), this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: r,
                p1: this._cloneProps(this._appendQueueProps(t))
            })
        }, r.prototype.call = function(t, e, r) {
            return void 0 === e && (e = void 0), void 0 === r && (r = void 0), this._addAction({
                f: t,
                p: r ? r : [],
                o: e ? e : this._target
            })
        }, r.prototype.tick = function(t) {
            this.paused || this.setPosition(this._prevPosition + t)
        }, r._tweens = [], r.IGNORE = {}, r._plugins = {}, r._inited = !1, r._lastTime = 0, r
    }(t.EventDispatcher);
    t.ScrollTween = r, __reflect(r.prototype, "egret.ScrollTween")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r(r) {
            void 0 === r && (r = null);
            var i = e.call(this) || this;
            return i.scrollBeginThreshold = 10, i.scrollSpeed = 1, i._content = null, i.delayTouchBeginEvent = null, i.touchBeginTimer = null, i.touchEnabled = !0, i._ScrV_Props_ = new t.ScrollViewProperties, r && i.setContent(r), i
        }
        return __extends(r, e), Object.defineProperty(r.prototype, "bounces", {
            get: function() {
                return this._ScrV_Props_._bounces
            },
            set: function(t) {
                this._ScrV_Props_._bounces = !!t
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setContent = function(t) {
            this._content !== t && (this.removeContent(), t && (this._content = t, e.prototype.addChild.call(this, t), this._addEvents()))
        }, r.prototype.removeContent = function() {
            this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this, 0)), this._content = null
        }, Object.defineProperty(r.prototype, "verticalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._verticalScrollPolicy
            },
            set: function(t) {
                t != this._ScrV_Props_._verticalScrollPolicy && (this._ScrV_Props_._verticalScrollPolicy = t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "horizontalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._horizontalScrollPolicy
            },
            set: function(t) {
                t != this._ScrV_Props_._horizontalScrollPolicy && (this._ScrV_Props_._horizontalScrollPolicy = t)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "scrollLeft", {
            get: function() {
                return this._ScrV_Props_._scrollLeft
            },
            set: function(t) {
                t != this._ScrV_Props_._scrollLeft && (this._ScrV_Props_._scrollLeft = t, this._validatePosition(!1, !0), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "scrollTop", {
            get: function() {
                return this._ScrV_Props_._scrollTop
            },
            set: function(t) {
                t != this._ScrV_Props_._scrollTop && (this._ScrV_Props_._scrollTop = t, this._validatePosition(!0, !1), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setScrollPosition = function(t, e, r) {
            if (void 0 === r && (r = !1), (!r || 0 != t || 0 != e) && (r || this._ScrV_Props_._scrollTop != t || this._ScrV_Props_._scrollLeft != e)) {
                var i = this._ScrV_Props_._scrollTop,
                    o = this._ScrV_Props_._scrollLeft;
                if (r) {
                    var n = this.getMaxScrollLeft(),
                        s = this.getMaxScrollTop();
                    (0 >= i || i >= s) && (t /= 2), (0 >= o || o >= n) && (e /= 2);
                    var a = i + t,
                        c = o + e,
                        l = this._ScrV_Props_._bounces;
                    l || ((0 >= a || a >= s) && (a = Math.max(0, Math.min(a, s))), (0 >= c || c >= n) && (c = Math.max(0, Math.min(c, n)))), this._ScrV_Props_._scrollTop = a, this._ScrV_Props_._scrollLeft = c
                } else this._ScrV_Props_._scrollTop = t, this._ScrV_Props_._scrollLeft = e;
                this._validatePosition(!0, !0), this._updateContentPosition()
            }
        }, r.prototype._validatePosition = function(t, e) {
            if (void 0 === t && (t = !1), void 0 === e && (e = !1), t) {
                var r = this.height,
                    i = this._getContentHeight();
                this._ScrV_Props_._scrollTop = Math.max(this._ScrV_Props_._scrollTop, (0 - r) / 2), this._ScrV_Props_._scrollTop = Math.min(this._ScrV_Props_._scrollTop, i > r ? i - r / 2 : r / 2)
            }
            if (e) {
                var o = this.width,
                    n = this._getContentWidth();
                this._ScrV_Props_._scrollLeft = Math.max(this._ScrV_Props_._scrollLeft, (0 - o) / 2), this._ScrV_Props_._scrollLeft = Math.min(this._ScrV_Props_._scrollLeft, n > o ? n - o / 2 : o / 2)
            }
        }, r.prototype.$setWidth = function(t) {
            this.$explicitWidth != t && (e.prototype.$setWidth.call(this, t), this._updateContentPosition())
        }, r.prototype.$setHeight = function(t) {
            this.$explicitHeight != t && (e.prototype.$setHeight.call(this, t), this._updateContentPosition())
        }, r.prototype._updateContentPosition = function() {
            var e = this.height,
                r = this.width;
            this.scrollRect = new t.Rectangle(Math.round(this._ScrV_Props_._scrollLeft), Math.round(this._ScrV_Props_._scrollTop), r, e), this.dispatchEvent(new t.Event(t.Event.CHANGE))
        }, r.prototype._checkScrollPolicy = function() {
            var t = this._ScrV_Props_._horizontalScrollPolicy,
                e = this.__checkScrollPolicy(t, this._getContentWidth(), this.width);
            this._ScrV_Props_._hCanScroll = e;
            var r = this._ScrV_Props_._verticalScrollPolicy,
                i = this.__checkScrollPolicy(r, this._getContentHeight(), this.height);
            return this._ScrV_Props_._vCanScroll = i, e || i
        }, r.prototype.__checkScrollPolicy = function(t, e, r) {
            return "on" == t ? !0 : "off" == t ? !1 : e > r
        }, r.prototype._addEvents = function() {
            this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), this.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        }, r.prototype._removeEvents = function() {
            this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), this.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        }, r.prototype._onTouchBegin = function(e) {
            if (!e.$isDefaultPrevented) {
                var r = this._checkScrollPolicy();
                r && (this._ScrV_Props_._touchStartPosition.x = e.stageX, this._ScrV_Props_._touchStartPosition.y = e.stageY, (this._ScrV_Props_._isHTweenPlaying || this._ScrV_Props_._isVTweenPlaying) && this._onScrollFinished(), this._tempStage = this.stage, this._tempStage.addEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this._tempStage.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this), this._tempStage.addEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(e), e.preventDefault())
            }
        }, r.prototype._onTouchBeginCapture = function(e) {
            var r = this._checkScrollPolicy();
            if (r) {
                for (var i = e.target; i != this;) {
                    if ("_checkScrollPolicy" in i && (r = i._checkScrollPolicy())) return;
                    i = i.parent
                }
                e.stopPropagation();
                var o = this.cloneTouchEvent(e);
                this.delayTouchBeginEvent = o, this.touchBeginTimer || (this.touchBeginTimer = new t.Timer(100, 1), this.touchBeginTimer.addEventListener(t.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this)), this.touchBeginTimer.start(), this._onTouchBegin(e)
            }
        }, r.prototype._onTouchEndCapture = function(e) {
            var r = this;
            if (this.delayTouchBeginEvent) {
                this._onTouchBeginTimer(), e.stopPropagation();
                var i = this.cloneTouchEvent(e);
                t.callLater(function() {
                    r.stage && r.dispatchPropagationEvent(i)
                }, this)
            }
        }, r.prototype._onTouchBeginTimer = function() {
            this.touchBeginTimer.stop();
            var t = this.delayTouchBeginEvent;
            this.delayTouchBeginEvent = null, this.stage && this.dispatchPropagationEvent(t)
        }, r.prototype.dispatchPropagationEvent = function(e) {
            for (var r = e.$target, i = this.$getPropagationList(r), o = i.length, n = .5 * i.length, s = -1, a = 0; o > a; a++)
                if (i[a] === this._content) {
                    s = a;
                    break
                } i.splice(0, s + 1), n -= s + 1, this.$dispatchPropagationEvent(e, i, n), t.Event.release(e)
        }, r.prototype._onTouchMove = function(t) {
            if (this._ScrV_Props_._lastTouchPosition.x != t.stageX || this._ScrV_Props_._lastTouchPosition.y != t.stageY) {
                if (!this._ScrV_Props_._scrollStarted) {
                    var e = t.stageX - this._ScrV_Props_._touchStartPosition.x,
                        r = t.stageY - this._ScrV_Props_._touchStartPosition.y,
                        i = Math.sqrt(e * e + r * r);
                    if (i < this.scrollBeginThreshold) return void this._logTouchEvent(t)
                }
                this._ScrV_Props_._scrollStarted = !0, this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop()), this.touchChildren = !1;
                var o = this._getPointChange(t);
                this.setScrollPosition(o.y, o.x, !0), this._calcVelocitys(t), this._logTouchEvent(t)
            }
        }, r.prototype._onTouchEnd = function(e) {
            this.touchChildren = !0, this._ScrV_Props_._scrollStarted = !1, this._tempStage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this._tempStage.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this), this._tempStage.removeEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.removeEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this), this._moveAfterTouchEnd()
        }, r.prototype._onEnterFrame = function(e) {
            var r = t.getTimer();
            r - this._ScrV_Props_._lastTouchTime > 100 && r - this._ScrV_Props_._lastTouchTime < 300 && this._calcVelocitys(this._ScrV_Props_._lastTouchEvent)
        }, r.prototype._logTouchEvent = function(e) {
            this._ScrV_Props_._lastTouchPosition.x = e.stageX, this._ScrV_Props_._lastTouchPosition.y = e.stageY, this._ScrV_Props_._lastTouchEvent = this.cloneTouchEvent(e), this._ScrV_Props_._lastTouchTime = t.getTimer()
        }, r.prototype._getPointChange = function(t) {
            return {
                x: this._ScrV_Props_._hCanScroll === !1 ? 0 : this._ScrV_Props_._lastTouchPosition.x - t.stageX,
                y: this._ScrV_Props_._vCanScroll === !1 ? 0 : this._ScrV_Props_._lastTouchPosition.y - t.stageY
            }
        }, r.prototype._calcVelocitys = function(e) {
            var r = t.getTimer();
            if (0 == this._ScrV_Props_._lastTouchTime) return void(this._ScrV_Props_._lastTouchTime = r);
            var i = this._getPointChange(e),
                o = r - this._ScrV_Props_._lastTouchTime;
            i.x /= o, i.y /= o, this._ScrV_Props_._velocitys.push(i), this._ScrV_Props_._velocitys.length > 5 && this._ScrV_Props_._velocitys.shift(), this._ScrV_Props_._lastTouchPosition.x = e.stageX, this._ScrV_Props_._lastTouchPosition.y = e.stageY
        }, r.prototype._getContentWidth = function() {
            return this._content.$explicitWidth || this._content.width
        }, r.prototype._getContentHeight = function() {
            return this._content.$explicitHeight || this._content.height
        }, r.prototype.getMaxScrollLeft = function() {
            var t = this._getContentWidth() - this.width;
            return Math.max(0, t)
        }, r.prototype.getMaxScrollTop = function() {
            var t = this._getContentHeight() - this.height;
            return Math.max(0, t)
        }, r.prototype._moveAfterTouchEnd = function() {
            if (0 != this._ScrV_Props_._velocitys.length) {
                for (var t = {
                        x: 0,
                        y: 0
                    }, e = 0, i = 0; i < this._ScrV_Props_._velocitys.length; i++) {
                    var o = this._ScrV_Props_._velocitys[i],
                        n = r.weight[i];
                    t.x += o.x * n, t.y += o.y * n, e += n
                }
                this._ScrV_Props_._velocitys.length = 0, this.scrollSpeed <= 0 && (this.scrollSpeed = 1);
                var s = t.x / e * this.scrollSpeed,
                    a = t.y / e * this.scrollSpeed,
                    c = Math.abs(s),
                    l = Math.abs(a),
                    h = this.getMaxScrollLeft(),
                    u = this.getMaxScrollTop(),
                    p = c > .02 ? this.getAnimationDatas(s, this._ScrV_Props_._scrollLeft, h) : {
                        position: this._ScrV_Props_._scrollLeft,
                        duration: 1
                    },
                    _ = l > .02 ? this.getAnimationDatas(a, this._ScrV_Props_._scrollTop, u) : {
                        position: this._ScrV_Props_._scrollTop,
                        duration: 1
                    };
                this.setScrollLeft(p.position, p.duration), this.setScrollTop(_.position, _.duration)
            }
        }, r.prototype.onTweenFinished = function(t) {
            t == this._ScrV_Props_._vScrollTween && (this._ScrV_Props_._isVTweenPlaying = !1), t == this._ScrV_Props_._hScrollTween && (this._ScrV_Props_._isHTweenPlaying = !1), 0 == this._ScrV_Props_._isHTweenPlaying && 0 == this._ScrV_Props_._isVTweenPlaying && this._onScrollFinished()
        }, r.prototype._onScrollStarted = function() {}, r.prototype._onScrollFinished = function() {
            t.ScrollTween.removeTweens(this), this._ScrV_Props_._hScrollTween = null, this._ScrV_Props_._vScrollTween = null, this._ScrV_Props_._isHTweenPlaying = !1, this._ScrV_Props_._isVTweenPlaying = !1, this.dispatchEvent(new t.Event(t.Event.COMPLETE))
        }, r.prototype.setScrollTop = function(e, r) {
            void 0 === r && (r = 0);
            var i = Math.min(this.getMaxScrollTop(), Math.max(e, 0));
            if (0 == r) return void(this.scrollTop = i);
            0 == this._ScrV_Props_._bounces && (e = i);
            var o = t.ScrollTween.get(this).to({
                scrollTop: e
            }, r, t.ScrollEase.quartOut);
            i != e && o.to({
                scrollTop: i
            }, 300, t.ScrollEase.quintOut), this._ScrV_Props_._isVTweenPlaying = !0, this._ScrV_Props_._vScrollTween = o, o.call(this.onTweenFinished, this, [o]), this._ScrV_Props_._isHTweenPlaying || this._onScrollStarted()
        }, r.prototype.setScrollLeft = function(e, r) {
            void 0 === r && (r = 0);
            var i = Math.min(this.getMaxScrollLeft(), Math.max(e, 0));
            if (0 == r) return void(this.scrollLeft = i);
            0 == this._ScrV_Props_._bounces && (e = i);
            var o = t.ScrollTween.get(this).to({
                scrollLeft: e
            }, r, t.ScrollEase.quartOut);
            i != e && o.to({
                scrollLeft: i
            }, 300, t.ScrollEase.quintOut), this._ScrV_Props_._isHTweenPlaying = !0, this._ScrV_Props_._hScrollTween = o, o.call(this.onTweenFinished, this, [o]), this._ScrV_Props_._isVTweenPlaying || this._onScrollStarted()
        }, r.prototype.getAnimationDatas = function(t, e, r) {
            var i = Math.abs(t),
                o = .95,
                n = 0,
                s = .998,
                a = .02,
                c = e + 500 * t;
            if (0 > c || c > r)
                for (c = e; Math.abs(t) != 1 / 0 && Math.abs(t) > a;) c += t, t *= 0 > c || c > r ? s * o : s, n++;
            else n = 500 * -Math.log(a / i);
            var l = {
                position: Math.min(r + 50, Math.max(c, -50)),
                duration: n
            };
            return l
        }, r.prototype.cloneTouchEvent = function(e) {
            var r = new t.TouchEvent(e.type, e.bubbles, e.cancelable);
            return r.touchPointID = e.touchPointID, r.$stageX = e.stageX, r.$stageY = e.stageY, r.touchDown = e.touchDown, r.$isDefaultPrevented = !1, r.$target = e.target, r
        }, r.prototype.throwNotSupportedError = function() {
            t.$error(1023)
        }, r.prototype.addChild = function(t) {
            return this.throwNotSupportedError(), null
        }, r.prototype.addChildAt = function(t, e) {
            return this.throwNotSupportedError(), null
        }, r.prototype.removeChild = function(t) {
            return this.throwNotSupportedError(), null
        }, r.prototype.removeChildAt = function(t) {
            return this.throwNotSupportedError(), null
        }, r.prototype.setChildIndex = function(t, e) {
            this.throwNotSupportedError()
        }, r.prototype.swapChildren = function(t, e) {
            this.throwNotSupportedError()
        }, r.prototype.swapChildrenAt = function(t, e) {
            this.throwNotSupportedError()
        }, r.weight = [1, 1.33, 1.66, 2, 2.33], r
    }(t.DisplayObjectContainer);
    t.ScrollView = e, __reflect(e.prototype, "egret.ScrollView")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function e() {
            this._verticalScrollPolicy = "auto", this._horizontalScrollPolicy = "auto", this._scrollLeft = 0, this._scrollTop = 0, this._hCanScroll = !1, this._vCanScroll = !1, this._lastTouchPosition = new t.Point(0, 0), this._touchStartPosition = new t.Point(0, 0), this._scrollStarted = !1, this._lastTouchTime = 0, this._lastTouchEvent = null, this._velocitys = [], this._isHTweenPlaying = !1, this._isVTweenPlaying = !1, this._hScrollTween = null, this._vScrollTween = null, this._bounces = !0
        }
        return e
    }();
    t.ScrollViewProperties = e, __reflect(e.prototype, "egret.ScrollViewProperties")
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e) {
        var r = e.url;
        return -1 == r.indexOf("?") && e.method == t.URLRequestMethod.GET && e.data && e.data instanceof t.URLVariables && (r = r + "?" + e.data.toString()), r
    }
    var r = function(r) {
        function i(e) {
            void 0 === e && (e = null);
            var i = r.call(this) || this;
            return i.dataFormat = t.URLLoaderDataFormat.TEXT, i.data = null, i._request = null, i._status = -1, e && i.load(e), i
        }
        return __extends(i, r), i.prototype.load = function(r) {
            this._request = r, this.data = null;
            var i = this;
            if (i.dataFormat == t.URLLoaderDataFormat.TEXTURE) return void this.loadTexture(i);
            if (i.dataFormat == t.URLLoaderDataFormat.SOUND) return void this.loadSound(i);
            var o = e(r),
                n = new t.HttpRequest;
            n.open(o, r.method == t.URLRequestMethod.POST ? t.HttpMethod.POST : t.HttpMethod.GET);
            var s;
            if (r.method != t.URLRequestMethod.GET && r.data)
                if (r.data instanceof t.URLVariables) {
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    var a = r.data;
                    s = a.toString()
                } else n.setRequestHeader("Content-Type", "multipart/form-data"), s = r.data;
            else;
            for (var c = r.requestHeaders.length, l = 0; c > l; l++) {
                var h = r.requestHeaders[l];
                n.setRequestHeader(h.name, h.value)
            }
            n.addEventListener(t.Event.COMPLETE, function() {
                i.data = n.response, t.Event.dispatchEvent(i, t.Event.COMPLETE)
            }, this), n.addEventListener(t.IOErrorEvent.IO_ERROR, function() {
                t.IOErrorEvent.dispatchIOErrorEvent(i)
            }, this), n.responseType = i.dataFormat == t.URLLoaderDataFormat.BINARY ? t.HttpResponseType.ARRAY_BUFFER : t.HttpResponseType.TEXT, n.send(s)
        }, i.prototype.getResponseType = function(e) {
            switch (e) {
                case t.URLLoaderDataFormat.TEXT:
                case t.URLLoaderDataFormat.VARIABLES:
                    return t.URLLoaderDataFormat.TEXT;
                case t.URLLoaderDataFormat.BINARY:
                    return "arraybuffer";
                default:
                    return e
            }
        }, i.prototype.loadSound = function(e) {
            function r(t) {
                e.dispatchEvent(t)
            }

            function i(t) {
                n(), e.dispatchEvent(t)
            }

            function o(r) {
                n(), e.data = c, window.setTimeout(function() {
                    e.dispatchEventWith(t.Event.COMPLETE)
                }, 0)
            }

            function n() {
                c.removeEventListener(t.Event.COMPLETE, o, s), c.removeEventListener(t.IOErrorEvent.IO_ERROR, i, s), c.removeEventListener(t.ProgressEvent.PROGRESS, r, s)
            }
            var s = this,
                a = e._request.url,
                c = new t.Sound;
            c.addEventListener(t.Event.COMPLETE, o, s), c.addEventListener(t.IOErrorEvent.IO_ERROR, i, s), c.addEventListener(t.ProgressEvent.PROGRESS, r, s), c.load(a)
        }, i.prototype.loadTexture = function(e) {
            function r(t) {
                e.dispatchEvent(t)
            }

            function i(t) {
                n(), e.dispatchEvent(t)
            }

            function o(r) {
                n();
                var i = c.data;
                i.source.setAttribute("bitmapSrc", a);
                var o = new t.Texture;
                o._setBitmapData(i), e.data = o, window.setTimeout(function() {
                    e.dispatchEventWith(t.Event.COMPLETE)
                }, 0)
            }

            function n() {
                c.removeEventListener(t.Event.COMPLETE, o, s), c.removeEventListener(t.IOErrorEvent.IO_ERROR, i, s), c.removeEventListener(t.ProgressEvent.PROGRESS, r, s)
            }
            var s = this,
                a = e._request.url,
                c = new t.ImageLoader;
            c.addEventListener(t.Event.COMPLETE, o, s), c.addEventListener(t.IOErrorEvent.IO_ERROR, i, s), c.addEventListener(t.ProgressEvent.PROGRESS, r, s), c.load(a)
        }, i.prototype.__recycle = function() {
            this._request = null, this.data = null
        }, i
    }(t.EventDispatcher);
    t.URLLoader = r, __reflect(r.prototype, "egret.URLLoader")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r(r) {
            var i = e.call(this) || this;
            return i.$texture = null, i.offsetPoint = t.Point.create(0, 0), i.$movieClipData = null, i.frames = null, i.$totalFrames = 0, i.frameLabels = null, i.$frameLabelStart = 0, i.$frameLabelEnd = 0, i.frameEvents = null, i.frameIntervalTime = 0, i.$eventPool = null, i.$isPlaying = !1, i.isStopped = !0, i.playTimes = 0, i.$currentFrameNum = 0, i.$nextFrameNum = 1, i.displayedKeyFrameNum = 0, i.passedTime = 0, i.$frameRate = 0 / 0, i.lastTime = 0, i.$smoothing = t.Bitmap.defaultSmoothing, i.setMovieClipData(r), t.nativeRender || (i.$renderNode = new t.sys.NormalBitmapNode), i
        }
        return __extends(r, e), r.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(11)
        }, Object.defineProperty(r.prototype, "smoothing", {
            get: function() {
                return this.$smoothing
            },
            set: function(t) {
                t != this.$smoothing && (this.$smoothing = t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$init = function() {
            this.$reset();
            var t = this.$movieClipData;
            t && t.$isDataValid() && (this.frames = t.frames, this.$totalFrames = t.numFrames, this.frameLabels = t.labels, this.frameEvents = t.events, this.$frameRate = t.frameRate, this.frameIntervalTime = 1e3 / this.$frameRate, this._initFrame())
        }, r.prototype.$reset = function() {
            this.frames = null, this.playTimes = 0, this.$isPlaying = !1, this.setIsStopped(!0), this.$currentFrameNum = 0, this.$nextFrameNum = 1, this.displayedKeyFrameNum = 0, this.passedTime = 0, this.$eventPool = []
        }, r.prototype._initFrame = function() {
            this.$movieClipData.$isTextureValid() && (this.advanceFrame(), this.constructFrame())
        }, r.prototype.$updateRenderNode = function() {
            var e = this.$texture;
            if (e) {
                var r = Math.round(this.offsetPoint.x),
                    i = Math.round(this.offsetPoint.y),
                    o = e.$bitmapWidth,
                    n = e.$bitmapHeight,
                    s = e.$getTextureWidth(),
                    a = e.$getTextureHeight(),
                    c = Math.round(e.$getScaleBitmapWidth()),
                    l = Math.round(e.$getScaleBitmapHeight()),
                    h = e.$sourceWidth,
                    u = e.$sourceHeight;
                t.sys.BitmapNode.$updateTextureData(this.$renderNode, e.$bitmapData, e.$bitmapX, e.$bitmapY, o, n, r, i, s, a, c, l, h, u, t.BitmapFillMode.SCALE, this.$smoothing)
            }
        }, r.prototype.$measureContentBounds = function(t) {
            var e = this.$texture;
            if (e) {
                var r = this.offsetPoint.x,
                    i = this.offsetPoint.y,
                    o = e.$getTextureWidth(),
                    n = e.$getTextureHeight();
                t.setTo(r, i, o, n)
            } else t.setEmpty()
        }, r.prototype.$onAddToStage = function(t, r) {
            e.prototype.$onAddToStage.call(this, t, r), this.$isPlaying && this.$totalFrames > 1 && this.setIsStopped(!1)
        }, r.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this), this.setIsStopped(!0)
        }, r.prototype.getFrameLabelByName = function(t, e) {
            void 0 === e && (e = !1), e && (t = t.toLowerCase());
            var r = this.frameLabels;
            if (r)
                for (var i = null, o = 0; o < r.length; o++)
                    if (i = r[o], e ? i.name.toLowerCase() == t : i.name == t) return i;
            return null
        }, r.prototype.getFrameStartEnd = function(t) {
            var e = this.frameLabels;
            if (e)
                for (var r = null, i = 0; i < e.length; i++)
                    if (r = e[i], t == r.name) {
                        this.$frameLabelStart = r.frame, this.$frameLabelEnd = r.end;
                        break
                    }
        }, r.prototype.getFrameLabelByFrame = function(t) {
            var e = this.frameLabels;
            if (e)
                for (var r = null, i = 0; i < e.length; i++)
                    if (r = e[i], r.frame == t) return r;
            return null
        }, r.prototype.getFrameLabelForFrame = function(t) {
            var e = null,
                r = null,
                i = this.frameLabels;
            if (i)
                for (var o = 0; o < i.length; o++) {
                    if (r = i[o], r.frame > t) return e;
                    e = r
                }
            return e
        }, r.prototype.play = function(e) {
            void 0 === e && (e = 0), this.lastTime = t.getTimer(), this.passedTime = 0, this.$isPlaying = !0, this.setPlayTimes(e), this.$totalFrames > 1 && this.$stage && this.setIsStopped(!1)
        }, r.prototype.stop = function() {
            this.$isPlaying = !1, this.setIsStopped(!0)
        }, r.prototype.prevFrame = function() {
            this.gotoAndStop(this.$currentFrameNum - 1)
        }, r.prototype.nextFrame = function() {
            this.gotoAndStop(this.$currentFrameNum + 1)
        }, r.prototype.gotoAndPlay = function(e, r) {
            void 0 === r && (r = 0), (0 == arguments.length || arguments.length > 2) && t.$error(1022, "MovieClip.gotoAndPlay()"), "string" == typeof e ? this.getFrameStartEnd(e) : (this.$frameLabelStart = 0, this.$frameLabelEnd = 0), this.play(r), this.gotoFrame(e)
        }, r.prototype.gotoAndStop = function(e) {
            1 != arguments.length && t.$error(1022, "MovieClip.gotoAndStop()"), this.stop(), this.gotoFrame(e)
        }, r.prototype.gotoFrame = function(e) {
            var r;
            "string" == typeof e ? r = this.getFrameLabelByName(e).frame : (r = parseInt(e + "", 10), r != e && t.$error(1022, "Frame Label Not Found")), 1 > r ? r = 1 : r > this.$totalFrames && (r = this.$totalFrames), r != this.$nextFrameNum && (this.$nextFrameNum = r, this.advanceFrame(), this.constructFrame(), this.handlePendingEvent())
        }, r.prototype.advanceTime = function(e) {
            var r = this,
                i = e - r.lastTime;
            r.lastTime = e;
            var o = r.frameIntervalTime,
                n = r.passedTime + i;
            r.passedTime = n % o;
            var s = n / o;
            if (1 > s) return !1;
            for (; s >= 1;) {
                if (s--, r.$nextFrameNum++, r.$nextFrameNum > r.$totalFrames || r.$frameLabelStart > 0 && r.$nextFrameNum > r.$frameLabelEnd)
                    if (-1 == r.playTimes) r.$eventPool.push(t.Event.LOOP_COMPLETE), r.$nextFrameNum = 1;
                    else {
                        if (r.playTimes--, !(r.playTimes > 0)) {
                            r.$nextFrameNum = r.$totalFrames, r.$eventPool.push(t.Event.COMPLETE), r.stop();
                            break
                        }
                        r.$eventPool.push(t.Event.LOOP_COMPLETE), r.$nextFrameNum = 1
                    } r.$currentFrameNum == r.$frameLabelEnd && (r.$nextFrameNum = r.$frameLabelStart), r.advanceFrame()
            }
            return r.constructFrame(), r.handlePendingEvent(), !1
        }, r.prototype.advanceFrame = function() {
            this.$currentFrameNum = this.$nextFrameNum;
            var e = this.frameEvents[this.$nextFrameNum];
            e && "" != e && t.MovieClipEvent.dispatchMovieClipEvent(this, t.MovieClipEvent.FRAME_LABEL, e)
        }, r.prototype.constructFrame = function() {
            var e = this,
                r = e.$currentFrameNum;
            if (e.displayedKeyFrameNum != r) {
                var i = e.$movieClipData.getTextureByFrame(r);
                if (e.$texture = i, e.$movieClipData.$getOffsetByFrame(r, e.offsetPoint), e.displayedKeyFrameNum = r, e.$renderDirty = !0, t.nativeRender) e.$nativeDisplayObject.setDataToBitmapNode(e.$nativeDisplayObject.id, i, [i.$bitmapX, i.$bitmapY, i.$bitmapWidth, i.$bitmapHeight, e.offsetPoint.x, e.offsetPoint.y, i.$getScaleBitmapWidth(), i.$getScaleBitmapHeight(), i.$sourceWidth, i.$sourceHeight]), e.$nativeDisplayObject.setWidth(i.$getTextureWidth() + e.offsetPoint.x), e.$nativeDisplayObject.setHeight(i.$getTextureHeight() + e.offsetPoint.y);
                else {
                    var o = e.$parent;
                    o && !o.$cacheDirty && (o.$cacheDirty = !0, o.$cacheDirtyUp());
                    var n = e.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
            }
        }, r.prototype.$renderFrame = function() {
            var t = this;
            t.$texture = t.$movieClipData.getTextureByFrame(t.$currentFrameNum), t.$renderDirty = !0;
            var e = t.$parent;
            e && !e.$cacheDirty && (e.$cacheDirty = !0, e.$cacheDirtyUp());
            var r = t.$maskedObject;
            r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp())
        }, r.prototype.handlePendingEvent = function() {
            if (0 != this.$eventPool.length) {
                this.$eventPool.reverse();
                for (var e = this.$eventPool, r = e.length, i = !1, o = !1, n = 0; r > n; n++) {
                    var s = e.pop();
                    s == t.Event.LOOP_COMPLETE ? o = !0 : s == t.Event.COMPLETE ? i = !0 : this.dispatchEventWith(s)
                }
                o && this.dispatchEventWith(t.Event.LOOP_COMPLETE), i && this.dispatchEventWith(t.Event.COMPLETE)
            }
        }, Object.defineProperty(r.prototype, "totalFrames", {
            get: function() {
                return this.$totalFrames
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "currentFrame", {
            get: function() {
                return this.$currentFrameNum
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "currentFrameLabel", {
            get: function() {
                var t = this.getFrameLabelByFrame(this.$currentFrameNum);
                return t && t.name
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "currentLabel", {
            get: function() {
                var t = this.getFrameLabelForFrame(this.$currentFrameNum);
                return t ? t.name : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "frameRate", {
            get: function() {
                return this.$frameRate
            },
            set: function(t) {
                t != this.$frameRate && (this.$frameRate = t, this.frameIntervalTime = 1e3 / this.$frameRate)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "isPlaying", {
            get: function() {
                return this.$isPlaying
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "movieClipData", {
            get: function() {
                return this.$movieClipData
            },
            set: function(t) {
                this.setMovieClipData(t)
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setMovieClipData = function(t) {
            this.$movieClipData != t && (this.$movieClipData = t, this.$init())
        }, r.prototype.setPlayTimes = function(t) {
            (0 > t || t >= 1) && (this.playTimes = 0 > t ? -1 : Math.floor(t))
        }, r.prototype.setIsStopped = function(e) {
            this.isStopped != e && (this.isStopped = e, e ? t.ticker.$stopTick(this.advanceTime, this) : (this.playTimes = 0 == this.playTimes ? 1 : this.playTimes, this.lastTime = t.getTimer(), t.ticker.$startTick(this.advanceTime, this)))
        }, r
    }(t.DisplayObject);
    t.MovieClip = e, __reflect(e.prototype, "egret.MovieClip")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r(r) {
            void 0 === r && (r = null);
            var i = e.call(this) || this;
            return i.data = null, i.method = t.URLRequestMethod.GET, i.url = "", i.requestHeaders = [], i.url = r, i
        }
        return __extends(r, e), r
    }(t.HashObject);
    t.URLRequest = e, __reflect(e.prototype, "egret.URLRequest")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t(t, e) {
            this.name = "", this.value = "", this.name = t, this.value = e
        }
        return t
    }();
    t.URLRequestHeader = e, __reflect(e.prototype, "egret.URLRequestHeader")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function() {
        function t() {}
        return t.GET = "get", t.POST = "post", t
    }();
    t.URLRequestMethod = e, __reflect(e.prototype, "egret.URLRequestMethod")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return r.variables = null, null !== e && r.decode(e), r
        }
        return __extends(e, t), e.prototype.decode = function(t) {
            this.variables || (this.variables = {}), t = t.split("+").join(" ");
            for (var e, r = /[?&]?([^=]+)=([^&]*)/g; e = r.exec(t);) {
                var i = decodeURIComponent(e[1]),
                    o = decodeURIComponent(e[2]);
                if (i in this.variables != 0) {
                    var n = this.variables[i];
                    n instanceof Array ? n.push(o) : this.variables[i] = [n, o]
                } else this.variables[i] = o
            }
        }, e.prototype.toString = function() {
            if (!this.variables) return "";
            var t = this.variables,
                e = [];
            for (var r in t) e.push(this.encodeValue(r, t[r]));
            return e.join("&")
        }, e.prototype.encodeValue = function(t, e) {
            return e instanceof Array ? this.encodeArray(t, e) : encodeURIComponent(t) + "=" + encodeURIComponent(e)
        }, e.prototype.encodeArray = function(t, e) {
            return t ? 0 == e.length ? encodeURIComponent(t) + "=" : e.map(function(e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }).join("&") : ""
        }, e
    }(t.HashObject);
    t.URLVariables = e, __reflect(e.prototype, "egret.URLVariables")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r() {
            var i = e.call(this) || this;
            return i._timeScale = 1, i._paused = !1, i._callIndex = -1, i._lastTime = 0, i.callBackList = [], null != r.instance, t.ticker.$startTick(i.update, i), i._lastTime = t.getTimer(), i
        }
        return __extends(r, e), r.prototype.update = function(t) {
            var e = t - this._lastTime;
            if (this._lastTime = t, this._paused) return !1;
            var r = e * this._timeScale;
            for (this._callList = this.callBackList.concat(), this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
                var i = this._callList[this._callIndex];
                i.listener.call(i.thisObject, r)
            }
            return this._callIndex = -1, this._callList = null, !1
        }, r.prototype.register = function(t, e, r) {
            void 0 === r && (r = 0), this.$insertEventBin(this.callBackList, "", t, e, !1, r, !1)
        }, r.prototype.unregister = function(t, e) {
            this.$removeEventBin(this.callBackList, t, e)
        }, r.prototype.setTimeScale = function(t) {
            this._timeScale = t
        }, r.prototype.getTimeScale = function() {
            return this._timeScale
        }, r.prototype.pause = function() {
            this._paused = !0
        }, r.prototype.resume = function() {
            this._paused = !1
        }, r.getInstance = function() {
            return null == r.instance && (r.instance = new r), r.instance
        }, r
    }(t.EventDispatcher);
    t.Ticker = e, __reflect(e.prototype, "egret.Ticker")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function r() {
            return e.call(this) || this
        }
        return __extends(r, e), Object.defineProperty(r.prototype, "stage", {
            get: function() {
                return t.sys.$TempStage
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r, "instance", {
            get: function() {
                return null == r._instance && (r._instance = new r), r._instance
            },
            enumerable: !0,
            configurable: !0
        }), r.deviceType = null, r.DEVICE_PC = "web", r.DEVICE_MOBILE = "native", r
    }(t.EventDispatcher);
    t.MainContext = e, __reflect(e.prototype, "egret.MainContext")
}(egret || (egret = {})), egret.testDeviceType1 = function() {
    if (!window.navigator || !navigator) return !0;
    var t = navigator.userAgent.toLowerCase();
    return -1 != t.indexOf("mobile") || -1 != t.indexOf("android")
}, egret.MainContext.deviceType = egret.testDeviceType1() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC, delete egret.testDeviceType1;
var egret;
! function(t) {
    var e = function(e) {
        function r(t) {
            void 0 === t && (t = 300);
            var r = e.call(this) || this;
            return r.objectPool = [], r._length = 0, 1 > t && (t = 1), r.autoDisposeTime = t, r.frameCount = 0, r
        }
        return __extends(r, e), r.$init = function() {
            t.ticker.$startTick(r.onUpdate, r)
        }, r.onUpdate = function(t) {
            for (var e = r._callBackList, i = e.length - 1; i >= 0; i--) e[i].$checkFrame();
            return !1
        }, r.prototype.$checkFrame = function() {
            this.frameCount--, this.frameCount <= 0 && this.dispose()
        }, Object.defineProperty(r.prototype, "length", {
            get: function() {
                return this._length
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.push = function(t) {
            var e = this.objectPool; - 1 == e.indexOf(t) && (e.push(t), t.__recycle && t.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, r._callBackList.push(this)))
        }, r.prototype.pop = function() {
            return 0 == this._length ? null : (this._length--, this.objectPool.pop())
        }, r.prototype.dispose = function() {
            this._length > 0 && (this.objectPool = [], this._length = 0), this.frameCount = 0;
            var t = r._callBackList,
                e = t.indexOf(this); - 1 != e && t.splice(e, 1)
        }, r._callBackList = [], r
    }(t.HashObject);
    t.Recycler = e, __reflect(e.prototype, "egret.Recycler"), e.$init()
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e, r, c) {
        for (var l = [], h = 3; h < arguments.length; h++) l[h - 3] = arguments[h];
        var u = {
            listener: e,
            thisObject: r,
            delay: c,
            originDelay: c,
            params: l
        };
        return s++, 1 == s && (a = t.getTimer(), t.ticker.$startTick(i, null)), n++, o[n] = u, n
    }

    function r(e) {
        o[e] && (s--, delete o[e], 0 == s && t.ticker.$stopTick(i, null))
    }

    function i(t) {
        var e = t - a;
        a = t;
        for (var r in o) {
            var i = o[r];
            i.delay -= e, i.delay <= 0 && (i.delay = i.originDelay, i.listener.apply(i.thisObject, i.params))
        }
        return !1
    }
    var o = {},
        n = 0,
        s = 0,
        a = 0;
    t.setInterval = e, t.clearInterval = r
}(egret || (egret = {}));
var egret;
! function(t) {
    function e(e, r, c) {
        for (var l = [], h = 3; h < arguments.length; h++) l[h - 3] = arguments[h];
        var u = {
            listener: e,
            thisObject: r,
            delay: c,
            params: l
        };
        return s++, 1 == s && t.ticker && (a = t.getTimer(), t.ticker.$startTick(i, null)), n++, o[n] = u, n
    }

    function r(e) {
        o[e] && (s--, delete o[e], 0 == s && t.ticker && t.ticker.$stopTick(i, null))
    }

    function i(t) {
        var e = t - a;
        a = t;
        for (var i in o) {
            var n = i,
                s = o[n];
            s.delay -= e, s.delay <= 0 && (r(n), s.listener.apply(s.thisObject, s.params))
        }
        return !1
    }
    var o = {},
        n = 0,
        s = 0,
        a = 0;
    t.setTimeout = e, t.clearTimeout = r
}(egret || (egret = {}));
var __reflect = this && this.__reflect || function(t, e, n) {
        t.__class__ = e, n ? n.push(e) : n = [e], t.__types__ = t.__types__ ? n.concat(t.__types__) : n
    },
    __extends = this && this.__extends || function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        n.prototype = e.prototype, t.prototype = new n
    },
    egret;
! function(t) {
    var e = function() {
        function e() {
            t.$error(1014)
        }
        return e.get = function(t) {
            return -1 > t && (t = -1), t > 1 && (t = 1),
                function(e) {
                    return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
                }
        }, e.getPowIn = function(t) {
            return function(e) {
                return Math.pow(e, t)
            }
        }, e.getPowOut = function(t) {
            return function(e) {
                return 1 - Math.pow(1 - e, t)
            }
        }, e.getPowInOut = function(t) {
            return function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
            }
        }, e.sineIn = function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, e.sineOut = function(t) {
            return Math.sin(t * Math.PI / 2)
        }, e.sineInOut = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, e.getBackIn = function(t) {
            return function(e) {
                return e * e * ((t + 1) * e - t)
            }
        }, e.getBackOut = function(t) {
            return function(e) {
                return --e * e * ((t + 1) * e + t) + 1
            }
        }, e.getBackInOut = function(t) {
            return t *= 1.525,
                function(e) {
                    return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
        }, e.circIn = function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }, e.circOut = function(t) {
            return Math.sqrt(1 - --t * t)
        }, e.circInOut = function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, e.bounceIn = function(t) {
            return 1 - e.bounceOut(1 - t)
        }, e.bounceOut = function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, e.bounceInOut = function(t) {
            return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
        }, e.getElasticIn = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var s = e / n * Math.asin(1 / t);
                return -(t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e))
            }
        }, e.getElasticOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var s = e / n * Math.asin(1 / t);
                return t * Math.pow(2, -10 * i) * Math.sin((i - s) * n / e) + 1
            }
        }, e.getElasticInOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                var s = e / n * Math.asin(1 / t);
                return (i *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e)) : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - s) * n / e) * .5 + 1
            }
        }, e.quadIn = e.getPowIn(2), e.quadOut = e.getPowOut(2), e.quadInOut = e.getPowInOut(2), e.cubicIn = e.getPowIn(3), e.cubicOut = e.getPowOut(3), e.cubicInOut = e.getPowInOut(3), e.quartIn = e.getPowIn(4), e.quartOut = e.getPowOut(4), e.quartInOut = e.getPowInOut(4), e.quintIn = e.getPowIn(5), e.quintOut = e.getPowOut(5), e.quintInOut = e.getPowInOut(5), e.backIn = e.getBackIn(1.7), e.backOut = e.getBackOut(1.7), e.backInOut = e.getBackInOut(1.7), e.elasticIn = e.getElasticIn(1, .3), e.elasticOut = e.getElasticOut(1, .3), e.elasticInOut = e.getElasticInOut(1, .3 * 1.5), e
    }();
    t.Ease = e, __reflect(e.prototype, "egret.Ease")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function n(t, n, i) {
            var s = e.call(this) || this;
            return s._target = null, s._useTicks = !1, s.ignoreGlobalPause = !1, s.loop = !1, s.pluginData = null, s._steps = null, s.paused = !1, s.duration = 0, s._prevPos = -1, s.position = null, s._prevPosition = 0, s._stepPosition = 0, s.passive = !1, s.initialize(t, n, i), s
        }
        return __extends(n, e), n.get = function(t, e, i, s) {
            return void 0 === i && (i = null), void 0 === s && (s = !1), s && n.removeTweens(t), new n(t, e, i)
        }, n.removeTweens = function(t) {
            if (t.tween_count) {
                for (var e = n._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !0, e.splice(i, 1));
                t.tween_count = 0
            }
        }, n.pauseTweens = function(e) {
            if (e.tween_count)
                for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !0)
        }, n.resumeTweens = function(e) {
            if (e.tween_count)
                for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !1)
        }, n.tick = function(t, e) {
            void 0 === e && (e = !1);
            var i = t - n._lastTime;
            n._lastTime = t;
            for (var s = n._tweens.concat(), r = s.length - 1; r >= 0; r--) {
                var o = s[r];
                e && !o.ignoreGlobalPause || o.paused || o.$tick(o._useTicks ? 1 : i)
            }
            return !1
        }, n._register = function(e, i) {
            var s = e._target,
                r = n._tweens;
            if (i) s && (s.tween_count = s.tween_count > 0 ? s.tween_count + 1 : 1), r.push(e), n._inited || (n._lastTime = t.getTimer(), t.ticker.$startTick(n.tick, null), n._inited = !0);
            else {
                s && s.tween_count--;
                for (var o = r.length; o--;)
                    if (r[o] == e) return void r.splice(o, 1)
            }
        }, n.removeAllTweens = function() {
            for (var t = n._tweens, e = 0, i = t.length; i > e; e++) {
                var s = t[e];
                s.paused = !0, s._target.tween_count = 0
            }
            t.length = 0
        }, n.prototype.initialize = function(t, e, i) {
            this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && n.removeTweens(t)), this.pluginData = i || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], e && e.paused ? this.paused = !0 : n._register(this, !0), e && null != e.position && this.setPosition(e.position, n.NONE)
        }, n.prototype.setPosition = function(t, e) {
            void 0 === e && (e = 1), 0 > t && (t = 0);
            var n = t,
                i = !1;
            if (n >= this.duration)
                if (this.loop) {
                    var s = n % this.duration;
                    n = n > 0 && 0 === s ? this.duration : s
                } else n = this.duration, i = !0;
            if (n == this._prevPos) return i;
            i && this.setPaused(!0);
            var r = this._prevPos;
            if (this.position = this._prevPos = n, this._prevPosition = t, this._target && this._steps.length > 0) {
                for (var o = this._steps.length, u = -1, a = 0; o > a && !("step" == this._steps[a].type && (u = a, this._steps[a].t <= n && this._steps[a].t + this._steps[a].d >= n)); a++);
                for (var a = 0; o > a; a++)
                    if ("action" == this._steps[a].type) 0 != e && (this._useTicks ? this._runAction(this._steps[a], n, n) : 1 == e && r > n ? (r != this.duration && this._runAction(this._steps[a], r, this.duration), this._runAction(this._steps[a], 0, n, !0)) : this._runAction(this._steps[a], r, n));
                    else if ("step" == this._steps[a].type && u == a) {
                    var p = this._steps[u];
                    this._updateTargetProps(p, Math.min((this._stepPosition = n - p.t) / p.d, 1))
                }
            }
            return this.dispatchEventWith("change"), i
        }, n.prototype._runAction = function(t, e, n, i) {
            void 0 === i && (i = !1);
            var s = e,
                r = n;
            e > n && (s = n, r = e);
            var o = t.t;
            (o == r || o > s && r > o || i && o == e) && t.f.apply(t.o, t.p)
        }, n.prototype._updateTargetProps = function(t, e) {
            var i, s, r, o, u, a;
            if (t || 1 != e) {
                if (this.passive = !!t.v, this.passive) return;
                t.e && (e = t.e(e, 0, 1, 1)), i = t.p0, s = t.p1
            } else this.passive = !1, i = s = this._curQueueProps;
            for (var p in this._initQueueProps) {
                null == (o = i[p]) && (i[p] = o = this._initQueueProps[p]), null == (u = s[p]) && (s[p] = u = o), r = o == u || 0 == e || 1 == e || "number" != typeof o ? 1 == e ? u : o : o + (u - o) * e;
                var h = !1;
                if (a = n._plugins[p])
                    for (var c = 0, _ = a.length; _ > c; c++) {
                        var f = a[c].tween(this, p, r, i, s, e, !!t && i == s, !t);
                        f == n.IGNORE ? h = !0 : r = f
                    }
                h || (this._target[p] = r)
            }
        }, n.prototype.setPaused = function(t) {
            return this.paused == t ? this : (this.paused = t, n._register(this, !t), this)
        }, n.prototype._cloneProps = function(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e
        }, n.prototype._addStep = function(t) {
            return t.d > 0 && (t.type = "step", this._steps.push(t), t.t = this.duration, this.duration += t.d), this
        }, n.prototype._appendQueueProps = function(t) {
            var e, i, s, r, o;
            for (var u in t)
                if (void 0 === this._initQueueProps[u]) {
                    if (i = this._target[u], e = n._plugins[u])
                        for (s = 0, r = e.length; r > s; s++) i = e[s].init(this, u, i);
                    this._initQueueProps[u] = this._curQueueProps[u] = void 0 === i ? null : i
                } else i = this._curQueueProps[u];
            for (var u in t) {
                if (i = this._curQueueProps[u], e = n._plugins[u])
                    for (o = o || {}, s = 0, r = e.length; r > s; s++) e[s].step && e[s].step(this, u, i, t[u], o);
                this._curQueueProps[u] = t[u]
            }
            return o && this._appendQueueProps(o), this._curQueueProps
        }, n.prototype._addAction = function(t) {
            return t.t = this.duration, t.type = "action", this._steps.push(t), this
        }, n.prototype._set = function(t, e) {
            for (var n in t) e[n] = t[n]
        }, n.prototype.wait = function(t, e) {
            if (null == t || 0 >= t) return this;
            var n = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: t,
                p0: n,
                p1: n,
                v: e
            })
        }, n.prototype.to = function(t, e, n) {
            return void 0 === n && (n = void 0), (isNaN(e) || 0 > e) && (e = 0), this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: n,
                p1: this._cloneProps(this._appendQueueProps(t))
            }), this.set(t)
        }, n.prototype.call = function(t, e, n) {
            return void 0 === e && (e = void 0), void 0 === n && (n = void 0), this._addAction({
                f: t,
                p: n ? n : [],
                o: e ? e : this._target
            })
        }, n.prototype.set = function(t, e) {
            return void 0 === e && (e = null), this._appendQueueProps(t), this._addAction({
                f: this._set,
                o: this,
                p: [t, e ? e : this._target]
            })
        }, n.prototype.play = function(t) {
            return t || (t = this), this.call(t.setPaused, t, [!1])
        }, n.prototype.pause = function(t) {
            return t || (t = this), this.call(t.setPaused, t, [!0])
        }, n.prototype.$tick = function(t) {
            this.paused || this.setPosition(this._prevPosition + t)
        }, n.NONE = 0, n.LOOP = 1, n.REVERSE = 2, n._tweens = [], n.IGNORE = {}, n._plugins = {}, n._inited = !1, n._lastTime = 0, n
    }(t.EventDispatcher);
    t.Tween = e, __reflect(e.prototype, "egret.Tween")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        function n(e) {
            if ("function" == typeof e) return e;
            var n = t.Ease[e];
            return "function" == typeof n ? n : null
        }

        function i(t, e, n, i) {
            var s = t.prototype;
            s.__meta__ = s.__meta__ || {}, s.__meta__[e] = n, i && (s.__defaultProperty__ = e)
        }
        var s = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "", e
            }
            return __extends(e, t), e
        }(t.EventDispatcher);
        e.BasePath = s, __reflect(s.prototype, "egret.tween.BasePath");
        var r = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.props = void 0, e.duration = 500, e.ease = void 0, e
            }
            return __extends(e, t), e
        }(s);
        e.To = r, __reflect(r.prototype, "egret.tween.To");
        var o = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.duration = 500, e.passive = void 0, e
            }
            return __extends(e, t), e
        }(s);
        e.Wait = o, __reflect(o.prototype, "egret.tween.Wait");
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.props = void 0, e
            }
            return __extends(e, t), e
        }(s);
        e.Set = u, __reflect(u.prototype, "egret.tween.Set");
        var a = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.delta = 0, e
            }
            return __extends(e, t), e
        }(s);
        e.Tick = a, __reflect(a.prototype, "egret.tween.Tick");
        var p = function(e) {
            function i() {
                var t = e.call(this) || this;
                return t.isStop = !1, t
            }
            return __extends(i, e), Object.defineProperty(i.prototype, "props", {
                get: function() {
                    return this._props
                },
                set: function(t) {
                    this._props = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "target", {
                get: function() {
                    return this._target
                },
                set: function(t) {
                    this._target = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "paths", {
                get: function() {
                    return this._paths
                },
                set: function(t) {
                    this._paths = t || []
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.play = function(t) {
                this.tween ? (this.tween.setPaused(!1), this.isStop && void 0 == t && (t = 0, this.isStop = !1), void 0 !== t && null !== t && this.tween.setPosition(t)) : this.createTween(t)
            }, i.prototype.pause = function() {
                this.tween && this.tween.setPaused(!0)
            }, i.prototype.stop = function() {
                this.pause(), this.isStop = !0
            }, i.prototype.createTween = function(e) {
                this.tween = t.Tween.get(this._target, this._props), this._paths && this.applyPaths(), void 0 !== e && null !== e && this.tween.setPosition(e)
            }, i.prototype.applyPaths = function() {
                for (var t = 0; t < this._paths.length; t++) {
                    var e = this._paths[t];
                    this.applyPath(e)
                }
            }, i.prototype.applyPath = function(t) {
                var e = this;
                t instanceof r ? this.tween.to(t.props, t.duration, n(t.ease)) : t instanceof o ? this.tween.wait(t.duration, t.passive) : t instanceof u ? this.tween.set(t.props) : t instanceof a && this.tween.$tick(t.delta), this.tween.call(function() {
                    return e.pathComplete(t)
                })
            }, i.prototype.pathComplete = function(t) {
                t.dispatchEventWith("complete"), this.dispatchEventWith("pathComplete", !1, t);
                var e = this._paths.indexOf(t);
                e >= 0 && e === this._paths.length - 1 && this.dispatchEventWith("complete")
            }, i
        }(t.EventDispatcher);
        e.TweenItem = p, __reflect(p.prototype, "egret.tween.TweenItem"), i(p, "paths", "Array", !0);
        var h = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.completeCount = 0, e
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "items", {
                get: function() {
                    return this._items
                },
                set: function(t) {
                    this.completeCount = 0, this.registerEvent(!1), this._items = t, this.registerEvent(!0)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.registerEvent = function(t) {
                var e = this;
                this._items && this._items.forEach(function(n) {
                    t ? n.addEventListener("complete", e.itemComplete, e) : n.removeEventListener("complete", e.itemComplete, e)
                })
            }, e.prototype.play = function(t) {
                if (this._items)
                    for (var e = 0; e < this._items.length; e++) {
                        var n = this._items[e];
                        n.play(t)
                    }
            }, e.prototype.pause = function() {
                if (this._items)
                    for (var t = 0; t < this._items.length; t++) {
                        var e = this._items[t];
                        e.pause()
                    }
            }, e.prototype.stop = function() {
                if (this._items)
                    for (var t = 0; t < this._items.length; t++) {
                        var e = this._items[t];
                        e.stop()
                    }
            }, e.prototype.itemComplete = function(t) {
                var e = t.currentTarget;
                this.completeCount++, this.dispatchEventWith("itemComplete", !1, e), this.completeCount === this.items.length && (this.dispatchEventWith("complete"), this.completeCount = 0)
            }, e
        }(t.EventDispatcher);
        e.TweenGroup = h, __reflect(h.prototype, "egret.tween.TweenGroup"), i(h, "items", "Array", !0)
    }(e = t.tween || (t.tween = {}))
}(egret || (egret = {}));
var __reflect = this && this.__reflect || function(e, r, t) {
        e.__class__ = r, t ? t.push(r) : t = [r], e.__types__ = e.__types__ ? t.concat(e.__types__) : t
    },
    __extends = this && this.__extends || function(e, r) {
        function t() {
            this.constructor = e
        }
        for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
        t.prototype = r.prototype, e.prototype = new t
    },
    __decorate = this && this.__decorate || function(e, r, t, o) {
        var n, i = arguments.length,
            s = 3 > i ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, t) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, r, t, o);
        else
            for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (3 > i ? n(s) : i > 3 ? n(r, t, s) : n(r, t)) || s);
        return i > 3 && s && Object.defineProperty(r, t, s), s
    },
    RES;
! function(e) {}(RES || (RES = {}));
var RES;
! function(e) {
    var r = function() {
        function r() {
            this.groupTotalDic = {}, this.numLoadedDic = {}, this.groupErrorDic = {}, this.retryTimesDic = {}, this.maxRetryTimes = 3, this.reporterDic = {}, this.dispatcherDic = {}, this.failedList = new Array, this.loadItemErrorDic = {}, this.errorDic = {}, this.itemListPriorityDic = {}, this.itemLoadDic = {}, this.promiseHash = {}, this.lazyLoadList = new Array, this.loadingCount = 0, this.thread = 4
        }
        return r.prototype.pushResItem = function(e) {
            if (this.promiseHash[e.root + e.name]) return this.promiseHash[e.root + e.name];
            this.lazyLoadList.push(e), this.itemListPriorityDic[Number.NEGATIVE_INFINITY] = this.lazyLoadList, this.updatelistPriority(this.lazyLoadList, Number.NEGATIVE_INFINITY);
            var r = new egret.EventDispatcher;
            this.dispatcherDic[e.root + e.name] = r;
            var t = new Promise(function(e, t) {
                r.addEventListener("complete", function(r) {
                    e(r.data)
                }, null), r.addEventListener("error", function(e) {
                    t(e.data)
                }, null)
            });
            return this.promiseHash[e.root + e.name] = t, this.loadNextResource(), t
        }, r.prototype.pushResGroup = function(e, r, t, o) {
            if (this.promiseHash[r]) return this.promiseHash[r];
            for (var n = e.length, i = 0; n > i; i++) {
                var s = e[i];
                s.groupNames || (s.groupNames = []), s.groupNames.push(r)
            }
            this.groupTotalDic[r] = e.length, this.numLoadedDic[r] = 0, this.updatelistPriority(e, t), this.reporterDic[r] = o;
            var a = new egret.EventDispatcher;
            this.dispatcherDic[r] = a;
            var u = new Promise(function(e, r) {
                a.addEventListener("complete", e, null), a.addEventListener("error", function(e) {
                    r(e.data)
                }, null)
            });
            return this.promiseHash[r] = u, this.loadNextResource(), u
        }, r.prototype.updatelistPriority = function(e, r) {
            void 0 == this.itemListPriorityDic[r] && (this.itemListPriorityDic[r] = []);
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t];
                if (1 != this.itemLoadDic[n.root + n.name]) {
                    var i = this.findPriorityInDic(n);
                    if (void 0 == i) this.itemListPriorityDic[r].push(n);
                    else if (r > i) {
                        this.itemListPriorityDic[r].push(n);
                        var s = this.itemListPriorityDic[i].indexOf(n);
                        this.itemListPriorityDic[i].splice(s, 1)
                    }
                }
            }
        }, r.prototype.findPriorityInDic = function(e) {
            for (var r in this.itemListPriorityDic)
                if (this.itemListPriorityDic[r].indexOf(e) > -1) return parseInt(r)
        }, r.prototype.loadNextResource = function() {
            for (; this.loadingCount < this.thread;) {
                var e = this.loadSingleResource();
                if (!e) break
            }
        }, r.prototype.loadSingleResource = function() {
            var r = this,
                t = this.getOneResourceInfoInGroup();
            return t ? (this.itemLoadDic[t.root + t.name] = 1, this.loadingCount++, this.loadResource(t).then(function(o) {
                if (r.loadingCount--, delete r.itemLoadDic[t.root + t.name], e.host.save(t, o), r.promiseHash[t.root + t.name]) {
                    var n = r.deleteDispatcher(t.root + t.name);
                    n.dispatchEventWith("complete", !1, o)
                }
                var i = t.groupNames;
                if (i) {
                    delete t.groupNames;
                    for (var s = 0, a = i; s < a.length; s++) {
                        var u = a[s];
                        r.setGroupProgress(u, t) && r.loadGroupEnd(u)
                    }
                }
                r.loadNextResource()
            })["catch"](function(o) {
                if (!o) throw t.name + " load fail";
                if (!o.__resource_manager_error__) throw o;
                delete r.itemLoadDic[t.root + t.name], r.loadingCount--, delete e.host.state[t.root + t.name];
                var n = r.retryTimesDic[t.name] || 1;
                if (!(n > r.maxRetryTimes)) return r.retryTimesDic[t.name] = n + 1, r.failedList.push(t), void r.loadNextResource();
                if (delete r.retryTimesDic[t.name], r.promiseHash[t.root + t.name]) {
                    var i = r.deleteDispatcher(t.root + t.name);
                    i.dispatchEventWith("error", !1, {
                        r: t,
                        error: o
                    })
                }
                var s = t.groupNames;
                if (s) {
                    delete t.groupNames;
                    for (var a = 0, u = s; a < u.length; a++) {
                        var c = u[a];
                        r.loadItemErrorDic[c] || (r.loadItemErrorDic[c] = []), -1 == r.loadItemErrorDic[c].indexOf(t) && r.loadItemErrorDic[c].push(t), r.groupErrorDic[c] = !0, r.setGroupProgress(c, t) ? r.loadGroupEnd(c, o) : r.errorDic[c] = o
                    }
                }
                r.loadNextResource()
            }), !0) : !1
        }, r.prototype.getOneResourceInfoInGroup = function() {
            if (this.failedList.length > 0) return this.failedList.shift();
            var e = Number.NEGATIVE_INFINITY;
            for (var r in this.itemListPriorityDic) e = Math.max(e, r);
            var t = this.itemListPriorityDic[e];
            if (t) return 0 == t.length ? (delete this.itemListPriorityDic[e], this.getOneResourceInfoInGroup()) : t.shift()
        }, r.prototype.setGroupProgress = function(e, r) {
            var t = this.reporterDic[e];
            this.numLoadedDic[e]++;
            var o = this.numLoadedDic[e],
                n = this.groupTotalDic[e];
            return t && t.onProgress && t.onProgress(o, n, r), o == n
        }, r.prototype.loadGroupEnd = function(e, r) {
            delete this.groupTotalDic[e], delete this.numLoadedDic[e], delete this.reporterDic[e];
            var t = this.deleteDispatcher(e);
            if (r) {
                delete this.groupErrorDic[e];
                var o = this.loadItemErrorDic[e];
                delete this.loadItemErrorDic[e], t.dispatchEventWith("error", !1, {
                    itemList: o,
                    lastError: r
                })
            } else {
                var n = this.groupErrorDic[e];
                if (delete this.groupErrorDic[e], n) {
                    var o = this.loadItemErrorDic[e];
                    delete this.loadItemErrorDic[e];
                    var i = this.errorDic[e];
                    delete this.errorDic[e], t.dispatchEventWith("error", !1, {
                        itemList: o,
                        error: i
                    })
                } else t.dispatchEventWith("complete")
            }
        }, r.prototype.deleteDispatcher = function(e) {
            delete this.promiseHash[e];
            var r = this.dispatcherDic[e];
            return delete this.dispatcherDic[e], r
        }, r.prototype.loadResource = function(r, t) {
            if (!t) {
                if (1 == e.FEATURE_FLAG.FIX_DUPLICATE_LOAD) {
                    var o = e.host.state[r.root + r.name];
                    if (2 == o) return Promise.resolve(e.host.get(r));
                    if (1 == o) return r.promise
                }
                t = e.processor.isSupport(r)
            }
            if (!t) throw new e.ResourceManagerError(2001, r.name, r.type);
            e.host.state[r.root + r.name] = 1;
            var n = t.onLoadStart(e.host, r);
            return r.promise = n, n
        }, r.prototype.unloadResource = function(r) {
            var t = e.host.get(r);
            if (!t) return console.warn("尝试释放不存在的资源:", r.name), !1;
            var o = e.processor.isSupport(r);
            return o ? (o.onRemoveStart(e.host, r), e.host.remove(r), 1 == r.extra && e.config.removeResourceData(r), !0) : !0
        }, r
    }();
    e.ResourceLoader = r, __reflect(r.prototype, "RES.ResourceLoader")
}(RES || (RES = {}));
var RES;
! function(e) {
    e.checkNull = function(e, r, t) {
        var o = t.value;
        t.value = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return e[0] ? o.apply(this, e) : (console.warn("方法" + r + "的参数不能为null"), null)
        }
    }, e.FEATURE_FLAG = {
        FIX_DUPLICATE_LOAD: 1
    };
    var r;
    ! function(e) {
        function r(e) {
            t = e
        }
        var t = "warning";
        e.setUpgradeGuideLevel = r
    }(r = e.upgrade || (e.upgrade = {}))
}(RES || (RES = {}));
var RES;
! function(e) {
    function r(r) {
        var t = e.config.config.fileSystem.getFile(r);
        return t || (r = e.resourceNameSelector(r), t = e.config.config.fileSystem.getFile(r)), t
    }

    function t(e, r) {
        var t;
        t = e.indexOf(".json") >= 0 ? "legacyResourceConfig" : "resourceConfig", o = {
            type: t,
            root: r,
            url: e,
            name: e
        }
    }
    e.resourceNameSelector = function(e) {
        return e
    }, e.getResourceInfo = r;
    var o;
    e.setConfigURL = t;
    var n = function() {
        function t() {}
        return t.prototype.init = function() {
            return this.config || (this.config = {
                alias: {},
                groups: {},
                resourceRoot: o.root,
                mergeSelector: null,
                fileSystem: null,
                loadGroup: []
            }), e.queue.pushResItem(o)["catch"](function(r) {
                return e.isCompatible || r.__resource_manager_error__ || (r.error ? console.error(r.error.stack) : console.error(r.stack), r = new e.ResourceManagerError(1002)), e.host.remove(o), Promise.reject(r)
            })
        }, t.prototype.getGroupByName = function(r) {
            var t = this.config.groups[r],
                o = [];
            if (!t) return o;
            for (var n = 0, i = t; n < i.length; n++) {
                var s = i[n],
                    a = void 0;
                if (a = e.config.getResourceWithSubkey(s), null != a) {
                    var u = a.r,
                        c = a.key;
                    if (null == u) throw new e.ResourceManagerError(2005, c); - 1 == o.indexOf(u) && o.push(u)
                }
            }
            return o
        }, t.prototype.__temp__get__type__via__url = function(r) {
            var t = this.config.alias[r];
            if (t || (t = r), e.typeSelector) {
                var o = e.typeSelector(t);
                if (!o) throw new e.ResourceManagerError(2004, t);
                return o
            }
            return console.warn("RES.mapConfig 并未设置 typeSelector"), "unknown"
        }, t.prototype.getResourceWithSubkey = function(e) {
            e = this.getKeyByAlias(e);
            var r = e.indexOf("#"),
                t = "";
            r >= 0 && (t = e.substr(r + 1), e = e.substr(0, r));
            var o = this.getResource(e);
            return o ? {
                r: o,
                key: e,
                subkey: t
            } : null
        }, t.prototype.getKeyByAlias = function(e) {
            return this.config.alias[e] ? this.config.alias[e] : e
        }, t.prototype.getResource = function(e) {
            var t = this.config.alias[e];
            t || (t = e);
            var o = r(t);
            return o ? o : null
        }, t.prototype.createGroup = function(e, r, t) {
            if (void 0 === t && (t = !1), !t && this.config.groups[e] || !r || 0 == r.length) return !1;
            for (var o = [], n = 0, i = r; n < i.length; n++) {
                var s = i[n];
                if (this.config.groups[s]) {
                    var a = this.config.groups[s];
                    o = o.concat(a)
                } else o.push(s)
            }
            return this.config.groups[e] = o, !0
        }, t.prototype.addSubkey = function(e, r) {
            this.addAlias(e, r + "#" + e)
        }, t.prototype.addAlias = function(e, r) {
            this.config.alias[r] && (r = this.config.alias[r]), this.config.alias[e] = r
        }, t.prototype.addResourceData = function(r) {
            e.hasRes(r.name) || (r.type || (r.type = this.__temp__get__type__via__url(r.url)), e.config.config.fileSystem.addFile(r))
        }, t.prototype.removeResourceData = function(r) {
            e.hasRes(r.name) && (e.config.config.fileSystem.removeFile(r.url), this.config.alias[r.name] && delete this.config.alias[r.name])
        }, t
    }();
    e.ResourceConfig = n, __reflect(n.prototype, "RES.ResourceConfig")
}(RES || (RES = {}));
var RES;
! function(e) {
    function r(r) {
        return e.path.basename(r).split(".").join("_")
    }

    function t(r) {
        var t, o = r.substr(r.lastIndexOf(".") + 1);
        switch (o) {
            case e.ResourceItem.TYPE_XML:
            case e.ResourceItem.TYPE_JSON:
            case e.ResourceItem.TYPE_SHEET:
                t = o;
                break;
            case "png":
            case "jpg":
            case "gif":
            case "jpeg":
            case "bmp":
                t = e.ResourceItem.TYPE_IMAGE;
                break;
            case "fnt":
                t = e.ResourceItem.TYPE_FONT;
                break;
            case "txt":
                t = e.ResourceItem.TYPE_TEXT;
                break;
            case "mp3":
            case "ogg":
            case "mpeg":
            case "wav":
            case "m4a":
            case "mp4":
            case "aiff":
            case "wma":
            case "mid":
                t = e.ResourceItem.TYPE_SOUND;
                break;
            case "mergeJson":
            case "zip":
            case "pvr":
                t = o;
                break;
            default:
                t = e.ResourceItem.TYPE_BIN
        }
        return t
    }

    function o(r, t) {
        throw new e.ResourceManagerError(2002)
    }

    function n(r) {
        e.isCompatible = r
    }

    function i(r, t) {
        if (t.indexOf("://") >= 0) {
            var o = t.split("://");
            t = o[0] + "://" + e.path.normalize(o[1] + "/"), r = r.replace(t, "")
        } else t = e.path.normalize(t + "/"), r = r.replace(t, "");
        return e.setConfigURL(r, t), P || (P = new D), s(P.loadConfig())
    }

    function s(r) {
        return e.isCompatible ? void r["catch"](function(e) {}).then() : r
    }

    function a(e, r, t) {
        return void 0 === r && (r = 0), s(P.loadGroup(e, r, t))
    }

    function u(e) {
        return P.isGroupLoaded(e)
    }

    function c(r) {
        return P.getGroupByName(r).map(function(r) {
            return e.ResourceItem.convertToResItem(r)
        })
    }

    function l(e, r, t) {
        return void 0 === t && (t = !1), P.createGroup(e, r, t)
    }

    function f(e) {
        return P.hasRes(e)
    }

    function p(e) {
        return P.getRes(e)
    }

    function g(e, r, t) {
        return s(P.getResAsync.apply(P, arguments))
    }

    function d(e, r, t, o) {
        if (void 0 === o && (o = ""), !P) {
            var n = egret.sys.tr(3200);
            return egret.warn(n), Promise.reject(n)
        }
        return s(P.getResByUrl(e, r, t, o))
    }

    function h(e, r) {
        return P.destroyRes(e, r)
    }

    function v(e) {
        P || (P = new D), P.setMaxLoadingThread(e)
    }

    function m(e) {
        P.setMaxRetryTimes(e)
    }

    function R(e, r, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = 0), P || (P = new D), P.addEventListener(e, r, t, o, n)
    }

    function y(e, r, t, o) {
        void 0 === o && (o = !1), P.removeEventListener(e, r, t, o)
    }

    function E(e) {
        P.addResourceData(e)
    }

    function _() {
        return P || (P = new D), P.vcs
    }

    function S(e) {
        P || (P = new D), P.registerVersionController(e)
    }

    function L(e) {
        return P.vcs ? P.vcs.getVirtualUrl(e) : e
    }
    e.nameSelector = r, e.typeSelector = t, e.registerAnalyzer = o, e.setIsCompatible = n, e.isCompatible = !1, e.loadConfig = i, e.loadGroup = a, e.isGroupLoaded = u, e.getGroupByName = c, e.createGroup = l, e.hasRes = f, e.getRes = p, e.getResAsync = g, e.getResByUrl = d, e.destroyRes = h, e.setMaxLoadingThread = v, e.setMaxRetryTimes = m, e.addEventListener = R, e.removeEventListener = y, e.$addResourceData = E, e.getVersionController = _, e.registerVersionController = S, e.getVirtualUrl = L;
    var D = function(r) {
        function t() {
            var t = r.call(this) || this;
            return t.isVcsInit = !1, t.normalLoadConfig = function() {
                return e.config.init().then(function(r) {
                    e.ResourceEvent.dispatchResourceEvent(t, e.ResourceEvent.CONFIG_COMPLETE)
                }, function(r) {
                    return e.ResourceEvent.dispatchResourceEvent(t, e.ResourceEvent.CONFIG_LOAD_ERROR), Promise.reject(r)
                })
            }, e.VersionController && (t.vcs = new e.VersionController), t
        }
        return __extends(t, r), t.prototype.registerVersionController = function(e) {
            this.vcs = e, this.isVcsInit = !1
        }, t.prototype.loadConfig = function() {
            var e = this;
            return !this.isVcsInit && this.vcs ? (this.isVcsInit = !0, this.vcs.init().then(function() {
                return e.normalLoadConfig()
            })) : this.normalLoadConfig()
        }, t.prototype.isGroupLoaded = function(r) {
            var t = e.config.getGroupByName(r);
            return t.every(function(r) {
                return null != e.host.get(r)
            })
        }, t.prototype.getGroupByName = function(r) {
            return e.config.getGroupByName(r)
        }, t.prototype.loadGroup = function(r, t, o) {
            var n = this;
            void 0 === t && (t = 0);
            var i = {
                onProgress: function(t, i, s) {
                    o && o.onProgress && o.onProgress(t, i, s), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_PROGRESS, r, s, t, i)
                }
            };
            return this._loadGroup(r, t, i).then(function(t) {
                -1 == e.config.config.loadGroup.indexOf(r) && e.config.config.loadGroup.push(r), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_COMPLETE, r)
            }, function(t) {
                if (-1 == e.config.config.loadGroup.indexOf(r) && e.config.config.loadGroup.push(r), t.itemList)
                    for (var o = t.itemList, i = o.length, s = 0; i > s; s++) {
                        var a = o[s];
                        delete a.promise, e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.ITEM_LOAD_ERROR, r, a)
                    }
                return e.isCompatible && console.warn(t.error.message), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_LOAD_ERROR, r), Promise.reject(t.error)
            })
        }, t.prototype._loadGroup = function(r, t, o) {
            void 0 === t && (t = 0);
            var n = e.config.getGroupByName(r);
            return 0 == n.length ? new Promise(function(t, o) {
                o({
                    error: new e.ResourceManagerError(2005, r)
                })
            }) : e.queue.pushResGroup(n, r, t, o)
        }, t.prototype.createGroup = function(r, t, o) {
            return void 0 === o && (o = !1), e.config.createGroup(r, t, o)
        }, t.prototype.hasRes = function(r) {
            return null != e.config.getResourceWithSubkey(r)
        }, t.prototype.getRes = function(r) {
            var t = e.config.getResourceWithSubkey(r);
            if (t) {
                var o = t.r,
                    n = t.key,
                    i = t.subkey,
                    s = e.processor.isSupport(o);
                return s && s.getData && i ? s.getData(e.host, o, n, i) : e.host.get(o)
            }
            return null
        }, t.prototype.getResAsync = function(r, t, o) {
            var n = this,
                i = r,
                s = e.config.getResourceWithSubkey(r);
            if (null == s) return t && t.call(o, null, i), Promise.reject(new e.ResourceManagerError(2006, r));
            var a = s.r,
                u = s.subkey;
            return e.queue.pushResItem(a).then(function(n) {
                e.host.save(a, n);
                var s = e.processor.isSupport(a);
                return s && s.getData && u && (n = s.getData(e.host, a, r, u)), t && t.call(o, n, i), n
            }, function(r) {
                return e.host.remove(a), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.ITEM_LOAD_ERROR, "", a), t ? (t.call(o, null, i), Promise.reject(null)) : Promise.reject(r)
            })
        }, t.prototype.getResByUrl = function(r, t, o, n) {
            var i = this;
            void 0 === n && (n = "");
            var s = e.config.getResource(r);
            if (!s && (n || (n = e.config.__temp__get__type__via__url(r)), s = {
                    name: r,
                    url: r,
                    type: n,
                    root: "",
                    extra: 1
                }, e.config.addResourceData(s), s = e.config.getResource(r), !s)) throw "never";
            return e.queue.pushResItem(s).then(function(r) {
                return e.host.save(s, r), t && s && t.call(o, r, s.url), r
            }, function(n) {
                return e.host.remove(s), e.ResourceEvent.dispatchResourceEvent(i, e.ResourceEvent.ITEM_LOAD_ERROR, "", s), t ? (t.call(o, null, r), Promise.reject(null)) : Promise.reject(n)
            })
        }, t.prototype.destroyRes = function(r, t) {
            void 0 === t && (t = !0);
            var o = e.config.getGroupByName(r);
            if (o && o.length > 0) {
                var n = e.config.config.loadGroup.indexOf(r);
                if (-1 == n) return !1;
                if (t || 1 == e.config.config.loadGroup.length && e.config.config.loadGroup[0] == r) {
                    for (var i = 0, s = o; i < s.length; i++) {
                        var a = s[i];
                        e.queue.unloadResource(a)
                    }
                    e.config.config.loadGroup.splice(n, 1)
                } else {
                    for (var u = {}, c = 0, l = e.config.config.loadGroup; c < l.length; c++) {
                        var f = l[c];
                        for (var p in e.config.config.groups[f]) {
                            var g = e.config.config.groups[f][p];
                            u[g] ? u[g]++ : u[g] = 1
                        }
                    }
                    for (var d = 0, h = o; d < h.length; d++) {
                        var a = h[d];
                        u[a.name] && 1 == u[a.name] && e.queue.unloadResource(a)
                    }
                    e.config.config.loadGroup.splice(n, 1)
                }
                return !0
            }
            var a = e.config.getResource(r);
            return a ? e.queue.unloadResource(a) : (console.warn("在内存" + r + "资源不存在"), !1)
        }, t.prototype.setMaxLoadingThread = function(r) {
            1 > r && (r = 1), e.queue.thread = r
        }, t.prototype.setMaxRetryTimes = function(r) {
            r = Math.max(r, 0), e.queue.maxRetryTimes = r
        }, t.prototype.addResourceData = function(r) {
            r.root = "", e.config.addResourceData(r)
        }, __decorate([e.checkNull], t.prototype, "hasRes", null), __decorate([e.checkNull], t.prototype, "getRes", null), __decorate([e.checkNull], t.prototype, "getResAsync", null), __decorate([e.checkNull], t.prototype, "getResByUrl", null), t
    }(egret.EventDispatcher);
    e.Resource = D, __reflect(D.prototype, "RES.Resource");
    var P
}(RES || (RES = {}));
var RES;
! function(e) {
    var r;
    ! function(e) {
        function r(e) {
            var r = e.split("/");
            return r.filter(function(e, t) {
                return !!e || t == r.length - 1
            }).join("/")
        }

        function t(e) {
            return e.substr(e.lastIndexOf("/") + 1)
        }

        function o(e) {
            return e.substr(0, e.lastIndexOf("/"))
        }
        e.normalize = r, e.basename = t, e.dirname = o
    }(r = e.path || (e.path = {}))
}(RES || (RES = {}));
var RES;
! function(e) {
    function r() {
        e.config.config.fileSystem.profile(), console.log(t);
        var r = 0;
        for (var o in t) {
            var n = t[o];
            n instanceof egret.Texture && (r += n.$bitmapWidth * n.$bitmapHeight * 4)
        }
        console.log("gpu size : " + (r / 1024).toFixed(3) + "kb")
    }
    var t = {};
    e.profile = r, e.host = {
        state: {},
        get resourceConfig() {
            return e.config
        },
        load: function(r, t) {
            var o = "string" == typeof t ? e.processor._map[t] : t;
            return e.queue.loadResource(r, o)
        },
        unload: function(r) {
            return e.queue.unloadResource(r)
        },
        save: function(r, o) {
            e.host.state[r.root + r.name] = 2, delete r.promise, t[r.root + r.name] = o
        },
        get: function(e) {
            return t[e.root + e.name]
        },
        remove: function(r) {
            delete e.host.state[r.root + r.name], delete t[r.root + r.name]
        }
    }, e.config = new e.ResourceConfig, e.queue = new e.ResourceLoader;
    var o = function(e) {
        function r(t, o, n) {
            var i = e.call(this) || this;
            return i.__resource_manager_error__ = !0, i.name = t.toString(), i.message = r.errorMessage[t].replace("{0}", o).replace("{1}", n), i
        }
        return __extends(r, e), r.errorMessage = {
            1001: "文件加载失败:{0}",
            1002: "ResourceManager 初始化失败：配置文件加载失败",
            2001: "{0}解析失败,不支持指定解析类型:'{1}'，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
            2002: "Analyzer 相关API 在 ResourceManager 中不再支持，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
            2003: "{0}解析失败,错误原因:{1}",
            2004: "无法找到文件类型:{0}",
            2005: 'RES加载了不存在或空的资源组:"{0}"',
            2006: "资源配置文件中无法找到特定的资源:{0}"
        }, r
    }(Error);
    e.ResourceManagerError = o, __reflect(o.prototype, "RES.ResourceManagerError")
}(RES || (RES = {}));
var RES;
! function(e) {
    var r;
    ! function(r) {
        function t(e) {
            return r._map[e.type]
        }

        function o(e, t) {
            r._map[e] = t
        }

        function n(r, t) {
            var o = this;
            return new Promise(function(n, i) {
                var s = function() {
                        var e = r.data ? r.data : r.response;
                        n(e)
                    },
                    a = function() {
                        var r = new e.ResourceManagerError(1001, t.url);
                        i(r)
                    };
                r.addEventListener(egret.Event.COMPLETE, s, o), r.addEventListener(egret.IOErrorEvent.IO_ERROR, a, o)
            })
        }

        function i(e, r) {
            if (-1 != r.indexOf("://")) return r;
            e = e.split("\\").join("/");
            var t = e.match(/#.*|\?.*/),
                o = "";
            t && (o = t[0]);
            var n = e.lastIndexOf("/");
            return e = -1 != n ? e.substring(0, n + 1) + r : r, e + o
        }
        r.isSupport = t, r.map = o, r.getRelativePath = i, r.ImageProcessor = {
            onLoadStart: function(r, t) {
                var o = new egret.ImageLoader;
                return o.load(e.getVirtualUrl(t.root + t.url)), n(o, t).then(function(e) {
                    var o = new egret.Texture;
                    o._setBitmapData(e);
                    var n = r.resourceConfig.getResource(t.name);
                    if (n && n.scale9grid) {
                        var i = n.scale9grid.split(",");
                        o.scale9Grid = new egret.Rectangle(parseInt(i[0]), parseInt(i[1]), parseInt(i[2]), parseInt(i[3]))
                    }
                    return o
                })
            },
            onRemoveStart: function(e, r) {
                var t = e.get(r);
                t.dispose()
            }
        }, r.BinaryProcessor = {
            onLoadStart: function(r, t) {
                var o = new egret.HttpRequest;
                return o.responseType = egret.HttpResponseType.ARRAY_BUFFER, o.open(e.getVirtualUrl(t.root + t.url), "get"), o.send(), n(o, t)
            },
            onRemoveStart: function(e, r) {}
        }, r.TextProcessor = {
            onLoadStart: function(r, t) {
                var o = new egret.HttpRequest;
                return o.responseType = egret.HttpResponseType.TEXT, o.open(e.getVirtualUrl(t.root + t.url), "get"), o.send(), n(o, t)
            },
            onRemoveStart: function(e, r) {
                return !0
            }
        }, r.JsonProcessor = {
            onLoadStart: function(e, r) {
                return e.load(r, "text").then(function(e) {
                    var r = JSON.parse(e);
                    return r
                })
            },
            onRemoveStart: function(e, r) {}
        }, r.XMLProcessor = {
            onLoadStart: function(e, r) {
                return e.load(r, "text").then(function(e) {
                    var r = egret.XML.parse(e);
                    return r
                })
            },
            onRemoveStart: function(e, r) {
                return !0
            }
        }, r.CommonJSProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "text").then(function(r) {
                    var o = new Function("require", "exports", r),
                        n = function() {},
                        i = {};
                    try {
                        o(n, i)
                    } catch (s) {
                        throw new e.ResourceManagerError(2003, t.name, s.message)
                    }
                    return i
                })
            },
            onRemoveStart: function(e, r) {}
        }, r.SheetProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "json").then(function(o) {
                    var n = r.resourceConfig.getResource(e.nameSelector(o.file));
                    if (!n) {
                        var s = i(t.url, o.file);
                        n = {
                            name: s,
                            url: s,
                            type: "image",
                            root: t.root
                        }
                    }
                    return r.load(n).then(function(e) {
                        var t = o.frames,
                            i = new egret.SpriteSheet(e);
                        i.$resourceInfo = n;
                        for (var s in t) {
                            var a = t[s],
                                u = i.createTexture(s, a.x, a.y, a.w, a.h, a.offX, a.offY, a.sourceW, a.sourceH);
                            if (a.scale9grid) {
                                var c = a.scale9grid,
                                    l = c.split(",");
                                u.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3]))
                            }
                        }
                        return r.save(n, e), i
                    }, function(e) {
                        throw r.remove(n), e
                    })
                })
            },
            getData: function(e, r, t, o) {
                var n = e.get(r);
                return n ? n.getTexture(o) : null
            },
            onRemoveStart: function(e, r) {
                var t = e.get(r),
                    o = t.$resourceInfo;
                t.dispose(), e.unload(o)
            }
        };
        var s = function(e, r) {
            var t = "",
                o = r.split("\n"),
                n = o[2],
                i = n.indexOf('file="'); - 1 != i && (n = n.substring(i + 6), i = n.indexOf('"'), t = n.substring(0, i)), e = e.split("\\").join("/");
            var i = e.lastIndexOf("/");
            return e = -1 != i ? e.substring(0, i + 1) + t : t
        };
        r.FontProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "text").then(function(o) {
                    var n;
                    try {
                        n = JSON.parse(o)
                    } catch (a) {
                        n = o
                    }
                    var u;
                    u = "string" == typeof n ? s(t.url, n) : i(t.url, n.file);
                    var c = r.resourceConfig.getResource(e.nameSelector(u));
                    return c || (c = {
                        name: u,
                        url: u,
                        type: "image",
                        root: t.root
                    }), r.load(c).then(function(e) {
                        var t = new egret.BitmapFont(e, n);
                        return t.$resourceInfo = c, r.save(c, e), t
                    }, function(e) {
                        throw r.remove(c), e
                    })
                })
            },
            onRemoveStart: function(e, r) {
                var t = e.get(r),
                    o = t.$resourceInfo;
                e.unload(o)
            }
        }, r.SoundProcessor = {
            onLoadStart: function(r, t) {
                var o = new egret.Sound;
                return o.load(e.getVirtualUrl(t.root + t.url)), n(o, t).then(function() {
                    return o
                })
            },
            onRemoveStart: function(e, r) {}
        }, r.MovieClipProcessor = {
            onLoadStart: function(r, t) {
                var o, n;
                return r.load(t, "json").then(function(i) {
                    o = i;
                    var s = t.name,
                        a = s.substring(0, s.lastIndexOf(".")) + ".png";
                    if (n = r.resourceConfig.getResource(a), !n) throw new e.ResourceManagerError(1001, a);
                    return r.load(n)
                }).then(function(e) {
                    r.save(n, e);
                    var t = e,
                        i = new egret.MovieClipDataFactory(o, t);
                    return i
                })
            },
            onRemoveStart: function(e, r) {
                var t = e.get(r);
                t.clearCache(), t.$spriteSheet.dispose();
                var o = r.name,
                    n = o.substring(0, o.lastIndexOf(".")) + ".png",
                    i = e.resourceConfig.getResource(n);
                i && e.unload(i)
            }
        }, r.MergeJSONProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "json").then(function(r) {
                    for (var o in r) e.config.addSubkey(o, t.name);
                    return r
                })
            },
            getData: function(e, r, t, o) {
                var n = e.get(r);
                return n ? n[o] : (console.error("missing resource :" + r.name), null)
            },
            onRemoveStart: function(e, r) {}
        }, r.LegacyResourceConfigProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "json").then(function(o) {
                    var n = e.config.config,
                        i = t.root,
                        s = n.fileSystem;
                    s || (s = {
                        fsData: {},
                        getFile: function(e) {
                            return p[e]
                        },
                        addFile: function(e) {
                            e.type || (e.type = ""), void 0 == i && (e.root = ""), p[e.name] = e
                        },
                        profile: function() {
                            console.log(p)
                        },
                        removeFile: function(e) {
                            delete p[e]
                        }
                    }, n.fileSystem = s);
                    for (var a = n.groups, u = 0, c = o.groups; u < c.length; u++) {
                        var l = c[u];
                        "" == l.keys ? a[l.name] = [] : a[l.name] = l.keys.split(",")
                    }
                    for (var f = n.alias, p = s.fsData, g = function(e) {
                            p[e.name] = e, p[e.name].root = i, e.subkeys && e.subkeys.split(",").forEach(function(r) {
                                f[r] = e.name + "#" + r, f[e.name + "." + r] = e.name + "#" + r
                            })
                        }, d = 0, h = o.resources; d < h.length; d++) {
                        var v = h[d];
                        g(v)
                    }
                    return r.save(t, o), o
                })
            },
            onRemoveStart: function() {}
        }, r._map = {
            image: r.ImageProcessor,
            json: r.JsonProcessor,
            text: r.TextProcessor,
            xml: r.XMLProcessor,
            sheet: r.SheetProcessor,
            font: r.FontProcessor,
            bin: r.BinaryProcessor,
            commonjs: r.CommonJSProcessor,
            sound: r.SoundProcessor,
            movieclip: r.MovieClipProcessor,
            mergeJson: r.MergeJSONProcessor,
            legacyResourceConfig: r.LegacyResourceConfigProcessor
        }
    }(r = e.processor || (e.processor = {}))
}(RES || (RES = {}));
var RES;
! function(e) {
    var r = function(r) {
        function t(e, t, o) {
            void 0 === t && (t = !1), void 0 === o && (o = !1);
            var n = r.call(this, e, t, o) || this;
            return n.itemsLoaded = 0, n.itemsTotal = 0, n.groupName = "", n
        }
        return __extends(t, r), t.dispatchResourceEvent = function(r, o, n, i, s, a) {
            void 0 === n && (n = ""), void 0 === i && (i = void 0), void 0 === s && (s = 0), void 0 === a && (a = 0);
            var u = egret.Event.create(t, o);
            u.groupName = n, i && (u.resItem = e.ResourceItem.convertToResItem(i)), u.itemsLoaded = s, u.itemsTotal = a;
            var c = r.dispatchEvent(u);
            return egret.Event.release(u), c
        }, t.ITEM_LOAD_ERROR = "itemLoadError", t.CONFIG_COMPLETE = "configComplete", t.CONFIG_LOAD_ERROR = "configLoadError", t.GROUP_PROGRESS = "groupProgress", t.GROUP_COMPLETE = "groupComplete", t.GROUP_LOAD_ERROR = "groupLoadError", t
    }(egret.Event);
    e.ResourceEvent = r, __reflect(r.prototype, "RES.ResourceEvent")
}(RES || (RES = {}));
var RES;
! function(e) {
    var r;
    ! function(r) {
        function t(r) {
            var t = r.name;
            if (e.config.config)
                for (var o in e.config.config.alias) e.config.config.alias[o] == r.url && (t = o);
            else t = r.url;
            var n = {
                name: t,
                url: r.url,
                type: r.type,
                data: r,
                root: r.root
            };
            return n
        }
        r.TYPE_XML = "xml", r.TYPE_IMAGE = "image", r.TYPE_BIN = "bin", r.TYPE_TEXT = "text", r.TYPE_JSON = "json", r.TYPE_SHEET = "sheet", r.TYPE_FONT = "font", r.TYPE_SOUND = "sound", r.convertToResItem = t
    }(r = e.ResourceItem || (e.ResourceItem = {}))
}(RES || (RES = {}));
var RES;
! function(e) {
    var r = function() {
        function r(e) {
            this.data = e
        }
        return r.prototype.profile = function() {
            console.log(this.data)
        }, r.prototype.addFile = function(r, t) {
            t || (t = ""), r = e.path.normalize(r);
            var o = e.path.basename(r),
                n = e.path.dirname(r);
            this.exists(n) || this.mkdir(n);
            var i = this.resolve(n);
            i[o] = {
                url: r,
                type: t
            }
        }, r.prototype.getFile = function(e) {
            var r = this.resolve(e);
            return r && (r.name = e), r
        }, r.prototype.resolve = function(r) {
            if ("" == r) return this.data;
            r = e.path.normalize(r);
            for (var t = r.split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
                var s = i[n];
                if (!o) return o;
                o = o[s]
            }
            return o
        }, r.prototype.mkdir = function(r) {
            r = e.path.normalize(r);
            for (var t = r.split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
                var s = i[n];
                o[s] || (o[s] = {}), o = o[s]
            }
        }, r.prototype.exists = function(r) {
            if ("" == r) return !0;
            r = e.path.normalize(r);
            for (var t = r.split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
                var s = i[n];
                if (!o[s]) return !1;
                o = o[s]
            }
            return !0
        }, r
    }();
    e.NewFileSystem = r, __reflect(r.prototype, "RES.NewFileSystem")
}(RES || (RES = {}));
var RES;
! function(e) {
    var r = function() {
        function e() {}
        return e.prototype.init = function() {
            return this.versionInfo = this.getLocalData("all.manifest"), Promise.resolve()
        }, e.prototype.getVirtualUrl = function(e) {
            return e
        }, e.prototype.getLocalData = function(e) {
            if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
                var r = egret_native.readUpdateFileSync(e);
                if (null != r) return JSON.parse(r);
                if (r = egret_native.readResourceFileSync(e), null != r) return JSON.parse(r)
            }
            return null
        }, e
    }();
    e.NativeVersionController = r, __reflect(r.prototype, "RES.NativeVersionController", ["RES.IVersionController"]), egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE && (e.VersionController = r)
}(RES || (RES = {}));
var __reflect = this && this.__reflect || function(t, e, n) {
        t.__class__ = e, n ? n.push(e) : n = [e], t.__types__ = t.__types__ ? n.concat(t.__types__) : n
    },
    __extends = this && this.__extends || function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        n.prototype = e.prototype, t.prototype = new n
    },
    egret;
! function(t) {}(egret || (egret = {}));
var egret;
! function(t) {
    var e = function(e) {
        function n(o, i) {
            void 0 === o && (o = ""), void 0 === i && (i = 0);
            var s = e.call(this) || this;
            return s._writeMessage = "", s._readMessage = "", s._connected = !1, s._connecting = !1, s._isReadySend = !1, s._bytesWrite = !1, s._type = n.TYPE_STRING, s._connected = !1, s._writeMessage = "", s._readMessage = "", s.socket = new t.ISocket, s.socket.addCallBacks(s.onConnect, s.onClose, s.onSocketData, s.onError, s), s
        }
        return __extends(n, e), n.prototype.connect = function(t, e) {
            this._connecting || this._connected || (this._connecting = !0, this.socket.connect(t, e))
        }, n.prototype.connectByUrl = function(t) {
            this._connecting || this._connected || (this._connecting = !0, this.socket.connectByUrl(t))
        }, n.prototype.close = function() {
            this._connected && this.socket.close()
        }, n.prototype.onConnect = function() {
            this._connected = !0, this._connecting = !1, this.dispatchEventWith(t.Event.CONNECT)
        }, n.prototype.onClose = function() {
            this._connected = !1, this.dispatchEventWith(t.Event.CLOSE)
        }, n.prototype.onError = function() {
            this._connecting && (this._connecting = !1), this.dispatchEventWith(t.IOErrorEvent.IO_ERROR)
        }, n.prototype.onSocketData = function(e) {
            "string" == typeof e ? this._readMessage += e : this._readByte._writeUint8Array(new Uint8Array(e)), t.ProgressEvent.dispatchProgressEvent(this, t.ProgressEvent.SOCKET_DATA)
        }, n.prototype.flush = function() {
            return this._connected ? (this._writeMessage && (this.socket.send(this._writeMessage), this._writeMessage = ""), this._bytesWrite && (this.socket.send(this._writeByte.buffer), this._bytesWrite = !1, this._writeByte.clear()), void(this._isReadySend = !1)) : void t.$warn(3101)
        }, n.prototype.writeUTF = function(e) {
            return this._connected ? (this._type == n.TYPE_BINARY ? (this._bytesWrite = !0, this._writeByte.writeUTF(e)) : this._writeMessage += e, void this.flush()) : void t.$warn(3101)
        }, n.prototype.readUTF = function() {
            var t;
            return this._type == n.TYPE_BINARY ? (this._readByte.position = 0, t = this._readByte.readUTF(), this._readByte.clear()) : (t = this._readMessage, this._readMessage = ""), t
        }, n.prototype.writeBytes = function(e, n, o) {
            return void 0 === n && (n = 0), void 0 === o && (o = 0), this._connected ? this._writeByte ? (this._bytesWrite = !0, this._writeByte.writeBytes(e, n, o), void this.flush()) : void t.$warn(3102) : void t.$warn(3101)
        }, n.prototype.readBytes = function(e, n, o) {
            return void 0 === n && (n = 0), void 0 === o && (o = 0), this._readByte ? (this._readByte.position = 0, this._readByte.readBytes(e, n, o), void this._readByte.clear()) : void t.$warn(3102)
        }, Object.defineProperty(n.prototype, "connected", {
            get: function() {
                return this._connected
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(e) {
                this._type = e, e != n.TYPE_BINARY || this._writeByte || (this._readByte = new t.ByteArray, this._writeByte = new t.ByteArray)
            },
            enumerable: !0,
            configurable: !0
        }), n.TYPE_STRING = "webSocketTypeString", n.TYPE_BINARY = "webSocketTypeBinary", n
    }(t.EventDispatcher);
    t.WebSocket = e, __reflect(e.prototype, "egret.WebSocket")
}(egret || (egret = {}));
var egret;
! function(t) {
    var e;
    ! function(e) {
        var n = function() {
            function e() {
                this.host = "", this.port = 0, window.WebSocket || t.$error(3100)
            }
            return e.prototype.addCallBacks = function(t, e, n, o, i) {
                this.onConnect = t, this.onClose = e, this.onSocketData = n, this.onError = o, this.thisObject = i
            }, e.prototype.connect = function(t, e) {
                this.host = t, this.port = e;
                var n = "ws://" + this.host + ":" + this.port;
                this.socket = new window.WebSocket(), this.socket.binaryType = "arraybuffer", this._bindEvent()
            }, e.prototype.connectByUrl = function(t) {
                this.socket = new window.WebSocket(serverString), this.socket.binaryType = "arraybuffer", this._bindEvent()
            }, e.prototype._bindEvent = function() {
                var t = this,
                    e = this.socket;
                e.onopen = function() {
                    t.onConnect && t.onConnect.call(t.thisObject)
                }, e.onclose = function(e) {
                    t.onClose && t.onClose.call(t.thisObject)
                }, e.onerror = function(e) {
                    t.onError && t.onError.call(t.thisObject)
                }, e.onmessage = function(e) {
                    t.onSocketData && t.onSocketData.call(t.thisObject, e.data)
                }
            }, e.prototype.send = function(t) {
                this.socket.send(t)
            }, e.prototype.close = function() {
                this.socket.close()
            }, e.prototype.disconnect = function() {
                this.socket.disconnect && this.socket.disconnect()
            }, e
        }();
        e.HTML5WebSocket = n, __reflect(n.prototype, "egret.web.HTML5WebSocket", ["egret.ISocket"]), t.ISocket = n
    }(e = t.web || (t.web = {}))
}(egret || (egret = {}));
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e()
}(this, function() {
    "use strict";

    function t(t) {
        return "function" == typeof t || "object" == typeof t && null !== t
    }

    function e(t) {
        return "function" == typeof t
    }

    function n(t) {
        I = t
    }

    function r(t) {
        J = t
    }

    function o() {
        return function() {
            return process.nextTick(a)
        }
    }

    function i() {
        return "undefined" != typeof H ? function() {
            H(a)
        } : c()
    }

    function s() {
        var t = 0,
            e = new V(a),
            n = document.createTextNode("");
        return e.observe(n, {
                characterData: !0
            }),
            function() {
                n.data = t = ++t % 2
            }
    }

    function u() {
        var t = new MessageChannel;
        return t.port1.onmessage = a,
            function() {
                return t.port2.postMessage(0)
            }
    }

    function c() {
        var t = setTimeout;
        return function() {
            return t(a, 1)
        }
    }

    function a() {
        for (var t = 0; G > t; t += 2) {
            var e = $[t],
                n = $[t + 1];
            e(n), $[t] = void 0, $[t + 1] = void 0
        }
        G = 0
    }

    function f() {
        try {
            var t = require,
                e = t("vertx");
            return H = e.runOnLoop || e.runOnContext, i()
        } catch (n) {
            return c()
        }
    }

    function l(t, e) {
        var n = arguments,
            r = this,
            o = new this.constructor(p);
        void 0 === o[ee] && k(o);
        var i = r._state;
        return i ? ! function() {
            var t = n[i - 1];
            J(function() {
                return x(i, o, t, r._result)
            })
        }() : E(r, o, t, e), o
    }

    function h(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e) return t;
        var n = new e(p);
        return w(n, t), n
    }

    function p() {}

    function v() {
        return new TypeError("You cannot resolve a promise with itself")
    }

    function d() {
        return new TypeError("A promises callback cannot return that same promise.")
    }

    function _(t) {
        try {
            return t.then
        } catch (e) {
            return ie.error = e, ie
        }
    }

    function y(t, e, n, r) {
        try {
            t.call(e, n, r)
        } catch (o) {
            return o
        }
    }

    function m(t, e, n) {
        J(function(t) {
            var r = !1,
                o = y(n, e, function(n) {
                    r || (r = !0, e !== n ? w(t, n) : S(t, n))
                }, function(e) {
                    r || (r = !0, j(t, e))
                }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, j(t, o))
        }, t)
    }

    function b(t, e) {
        e._state === re ? S(t, e._result) : e._state === oe ? j(t, e._result) : E(e, void 0, function(e) {
            return w(t, e)
        }, function(e) {
            return j(t, e)
        })
    }

    function g(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === ie ? j(t, ie.error) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n)
    }

    function w(e, n) {
        e === n ? j(e, v()) : t(n) ? g(e, n, _(n)) : S(e, n)
    }

    function A(t) {
        t._onerror && t._onerror(t._result), P(t)
    }

    function S(t, e) {
        t._state === ne && (t._result = e, t._state = re, 0 !== t._subscribers.length && J(P, t))
    }

    function j(t, e) {
        t._state === ne && (t._state = oe, t._result = e, J(A, t))
    }

    function E(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null, o[i] = e, o[i + re] = n, o[i + oe] = r, 0 === i && t._state && J(P, t)
    }

    function P(t) {
        var e = t._subscribers,
            n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i);
            t._subscribers.length = 0
        }
    }

    function T() {
        this.error = null
    }

    function M(t, e) {
        try {
            return t(e)
        } catch (n) {
            return se.error = n, se
        }
    }

    function x(t, n, r, o) {
        var i = e(r),
            s = void 0,
            u = void 0,
            c = void 0,
            a = void 0;
        if (i) {
            if (s = M(r, o), s === se ? (a = !0, u = s.error, s = null) : c = !0, n === s) return void j(n, d())
        } else s = o, c = !0;
        n._state !== ne || (i && c ? w(n, s) : a ? j(n, u) : t === re ? S(n, s) : t === oe && j(n, s))
    }

    function C(t, e) {
        try {
            e(function(e) {
                w(t, e)
            }, function(e) {
                j(t, e)
            })
        } catch (n) {
            j(t, n)
        }
    }

    function O() {
        return ue++
    }

    function k(t) {
        t[ee] = ue++, t._state = void 0, t._result = void 0, t._subscribers = []
    }

    function Y(t, e) {
        this._instanceConstructor = t, this.promise = new t(p), this.promise[ee] || k(this.promise), B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q())
    }

    function q() {
        return new Error("Array Methods must be provided an Array")
    }

    function F(t) {
        return new Y(this, t).promise
    }

    function D(t) {
        var e = this;
        return new e(B(t) ? function(n, r) {
            for (var o = t.length, i = 0; o > i; i++) e.resolve(t[i]).then(n, r)
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."))
        })
    }

    function K(t) {
        var e = this,
            n = new e(p);
        return j(n, t), n
    }

    function L() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function N() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function U(t) {
        this[ee] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && L(), this instanceof U ? C(this, t) : N())
    }

    function W() {
        var t = void 0;
        if ("undefined" != typeof global) t = global;
        else if ("undefined" != typeof self) t = self;
        else try {
            t = Function("return this")()
        } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var n = t.Promise;
        if ("undefined" != typeof egret_native && egret_native.capability && !egret_native.capability("Promise") && (n = void 0), n) {
            var r = null;
            try {
                r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return
        }
        t.Promise = U
    }
    var z = void 0;
    z = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };
    var B = z,
        G = 0,
        H = void 0,
        I = void 0,
        J = function(t, e) {
            $[G] = t, $[G + 1] = e, G += 2, 2 === G && (I ? I(a) : te())
        },
        Q = "undefined" != typeof window ? window : void 0,
        R = Q || {},
        V = R.MutationObserver || R.WebKitMutationObserver,
        X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        $ = new Array(1e3),
        te = void 0;
    te = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == typeof require ? f() : c();
    var ee = Math.random().toString(36).substring(16),
        ne = void 0,
        re = 1,
        oe = 2,
        ie = new T,
        se = new T,
        ue = 0;
    return Y.prototype._enumerate = function() {
        for (var t = this.length, e = this._input, n = 0; this._state === ne && t > n; n++) this._eachEntry(e[n], n)
    }, Y.prototype._eachEntry = function(t, e) {
        var n = this._instanceConstructor,
            r = n.resolve;
        if (r === h) {
            var o = _(t);
            if (o === l && t._state !== ne) this._settledAt(t._state, e, t._result);
            else if ("function" != typeof o) this._remaining--, this._result[e] = t;
            else if (n === U) {
                var i = new n(p);
                g(i, t, o), this._willSettleAt(i, e)
            } else this._willSettleAt(new n(function(e) {
                return e(t)
            }), e)
        } else this._willSettleAt(r(t), e)
    }, Y.prototype._settledAt = function(t, e, n) {
        var r = this.promise;
        r._state === ne && (this._remaining--, t === oe ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result)
    }, Y.prototype._willSettleAt = function(t, e) {
        var n = this;
        E(t, void 0, function(t) {
            return n._settledAt(re, e, t)
        }, function(t) {
            return n._settledAt(oe, e, t)
        })
    }, U.all = F, U.race = D, U.resolve = h, U.reject = K, U._setScheduler = n, U._setAsap = r, U._asap = J, U.prototype = {
        constructor: U,
        then: l,
        "catch": function(t) {
            return this.then(null, t)
        }
    }, U.polyfill = W, U.Promise = U, U
}), ES6Promise.polyfill();
! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).pako = t()
    }
}(function() {
    return function r(s, o, l) {
        function h(e, t) {
            if (!o[e]) {
                if (!s[e]) {
                    var a = "function" == typeof require && require;
                    if (!t && a) return a(e, !0);
                    if (d) return d(e, !0);
                    var i = new Error("Cannot find module '" + e + "'");
                    throw i.code = "MODULE_NOT_FOUND", i
                }
                var n = o[e] = {
                    exports: {}
                };
                s[e][0].call(n.exports, function(t) {
                    return h(s[e][1][t] || t)
                }, n, n.exports, r, s, o, l)
            }
            return o[e].exports
        }
        for (var d = "function" == typeof require && require, t = 0; t < l.length; t++) h(l[t]);
        return h
    }({
        1: [function(t, e, a) {
            "use strict";
            var s = t("./zlib/deflate"),
                o = t("./utils/common"),
                l = t("./utils/strings"),
                n = t("./zlib/messages"),
                r = t("./zlib/zstream"),
                h = Object.prototype.toString,
                d = 0,
                f = -1,
                _ = 0,
                u = 8;

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                this.options = o.assign({
                    level: f,
                    method: u,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: _,
                    to: ""
                }, t || {});
                var e = this.options;
                e.raw && 0 < e.windowBits ? e.windowBits = -e.windowBits : e.gzip && 0 < e.windowBits && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new r, this.strm.avail_out = 0;
                var a = s.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                if (a !== d) throw new Error(n[a]);
                if (e.header && s.deflateSetHeader(this.strm, e.header), e.dictionary) {
                    var i;
                    if (i = "string" == typeof e.dictionary ? l.string2buf(e.dictionary) : "[object ArrayBuffer]" === h.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (a = s.deflateSetDictionary(this.strm, i)) !== d) throw new Error(n[a]);
                    this._dict_set = !0
                }
            }

            function i(t, e) {
                var a = new c(e);
                if (a.push(t, !0), a.err) throw a.msg || n[a.err];
                return a.result
            }
            c.prototype.push = function(t, e) {
                var a, i, n = this.strm,
                    r = this.options.chunkSize;
                if (this.ended) return !1;
                i = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? n.input = l.string2buf(t) : "[object ArrayBuffer]" === h.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;
                do {
                    if (0 === n.avail_out && (n.output = new o.Buf8(r), n.next_out = 0, n.avail_out = r), 1 !== (a = s.deflate(n, i)) && a !== d) return this.onEnd(a), !(this.ended = !0);
                    0 !== n.avail_out && (0 !== n.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(l.buf2binstring(o.shrinkBuf(n.output, n.next_out))) : this.onData(o.shrinkBuf(n.output, n.next_out)))
                } while ((0 < n.avail_in || 0 === n.avail_out) && 1 !== a);
                return 4 === i ? (a = s.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === d) : 2 !== i || (this.onEnd(d), !(n.avail_out = 0))
            }, c.prototype.onData = function(t) {
                this.chunks.push(t)
            }, c.prototype.onEnd = function(t) {
                t === d && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
            }, a.Deflate = c, a.deflate = i, a.deflateRaw = function(t, e) {
                return (e = e || {}).raw = !0, i(t, e)
            }, a.gzip = function(t, e) {
                return (e = e || {}).gzip = !0, i(t, e)
            }
        }, {
            "./utils/common": 3,
            "./utils/strings": 4,
            "./zlib/deflate": 8,
            "./zlib/messages": 13,
            "./zlib/zstream": 15
        }],
        2: [function(t, e, a) {
            "use strict";
            var f = t("./zlib/inflate"),
                _ = t("./utils/common"),
                u = t("./utils/strings"),
                c = t("./zlib/constants"),
                i = t("./zlib/messages"),
                n = t("./zlib/zstream"),
                r = t("./zlib/gzheader"),
                b = Object.prototype.toString;

            function s(t) {
                if (!(this instanceof s)) return new s(t);
                this.options = _.assign({
                    chunkSize: 16384,
                    windowBits: 0,
                    to: ""
                }, t || {});
                var e = this.options;
                e.raw && 0 <= e.windowBits && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(0 <= e.windowBits && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), 15 < e.windowBits && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new n, this.strm.avail_out = 0;
                var a = f.inflateInit2(this.strm, e.windowBits);
                if (a !== c.Z_OK) throw new Error(i[a]);
                if (this.header = new r, f.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = u.string2buf(e.dictionary) : "[object ArrayBuffer]" === b.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (a = f.inflateSetDictionary(this.strm, e.dictionary)) !== c.Z_OK)) throw new Error(i[a])
            }

            function o(t, e) {
                var a = new s(e);
                if (a.push(t, !0), a.err) throw a.msg || i[a.err];
                return a.result
            }
            s.prototype.push = function(t, e) {
                var a, i, n, r, s, o = this.strm,
                    l = this.options.chunkSize,
                    h = this.options.dictionary,
                    d = !1;
                if (this.ended) return !1;
                i = e === ~~e ? e : !0 === e ? c.Z_FINISH : c.Z_NO_FLUSH, "string" == typeof t ? o.input = u.binstring2buf(t) : "[object ArrayBuffer]" === b.call(t) ? o.input = new Uint8Array(t) : o.input = t, o.next_in = 0, o.avail_in = o.input.length;
                do {
                    if (0 === o.avail_out && (o.output = new _.Buf8(l), o.next_out = 0, o.avail_out = l), (a = f.inflate(o, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && h && (a = f.inflateSetDictionary(this.strm, h)), a === c.Z_BUF_ERROR && !0 === d && (a = c.Z_OK, d = !1), a !== c.Z_STREAM_END && a !== c.Z_OK) return this.onEnd(a), !(this.ended = !0);
                    o.next_out && (0 !== o.avail_out && a !== c.Z_STREAM_END && (0 !== o.avail_in || i !== c.Z_FINISH && i !== c.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = u.utf8border(o.output, o.next_out), r = o.next_out - n, s = u.buf2string(o.output, n), o.next_out = r, o.avail_out = l - r, r && _.arraySet(o.output, o.output, n, r, 0), this.onData(s)) : this.onData(_.shrinkBuf(o.output, o.next_out)))), 0 === o.avail_in && 0 === o.avail_out && (d = !0)
                } while ((0 < o.avail_in || 0 === o.avail_out) && a !== c.Z_STREAM_END);
                return a === c.Z_STREAM_END && (i = c.Z_FINISH), i === c.Z_FINISH ? (a = f.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === c.Z_OK) : i !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(o.avail_out = 0))
            }, s.prototype.onData = function(t) {
                this.chunks.push(t)
            }, s.prototype.onEnd = function(t) {
                t === c.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = _.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
            }, a.Inflate = s, a.inflate = o, a.inflateRaw = function(t, e) {
                return (e = e || {}).raw = !0, o(t, e)
            }, a.ungzip = o
        }, {
            "./utils/common": 3,
            "./utils/strings": 4,
            "./zlib/constants": 6,
            "./zlib/gzheader": 9,
            "./zlib/inflate": 11,
            "./zlib/messages": 13,
            "./zlib/zstream": 15
        }],
        3: [function(t, e, a) {
            "use strict";
            var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            a.assign = function(t) {
                for (var e, a, i = Array.prototype.slice.call(arguments, 1); i.length;) {
                    var n = i.shift();
                    if (n) {
                        if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                        for (var r in n) e = n, a = r, Object.prototype.hasOwnProperty.call(e, a) && (t[r] = n[r])
                    }
                }
                return t
            }, a.shrinkBuf = function(t, e) {
                return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
            };
            var n = {
                    arraySet: function(t, e, a, i, n) {
                        if (e.subarray && t.subarray) t.set(e.subarray(a, a + i), n);
                        else
                            for (var r = 0; r < i; r++) t[n + r] = e[a + r]
                    },
                    flattenChunks: function(t) {
                        var e, a, i, n, r, s;
                        for (e = i = 0, a = t.length; e < a; e++) i += t[e].length;
                        for (s = new Uint8Array(i), e = n = 0, a = t.length; e < a; e++) r = t[e], s.set(r, n), n += r.length;
                        return s
                    }
                },
                r = {
                    arraySet: function(t, e, a, i, n) {
                        for (var r = 0; r < i; r++) t[n + r] = e[a + r]
                    },
                    flattenChunks: function(t) {
                        return [].concat.apply([], t)
                    }
                };
            a.setTyped = function(t) {
                t ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, n)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, r))
            }, a.setTyped(i)
        }, {}],
        4: [function(t, e, a) {
            "use strict";
            var l = t("./common"),
                n = !0,
                r = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (t) {
                n = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (t) {
                r = !1
            }
            for (var h = new l.Buf8(256), i = 0; i < 256; i++) h[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;

            function d(t, e) {
                if (e < 65534 && (t.subarray && r || !t.subarray && n)) return String.fromCharCode.apply(null, l.shrinkBuf(t, e));
                for (var a = "", i = 0; i < e; i++) a += String.fromCharCode(t[i]);
                return a
            }
            h[254] = h[254] = 1, a.string2buf = function(t) {
                var e, a, i, n, r, s = t.length,
                    o = 0;
                for (n = 0; n < s; n++) 55296 == (64512 & (a = t.charCodeAt(n))) && n + 1 < s && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (a = 65536 + (a - 55296 << 10) + (i - 56320), n++), o += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
                for (e = new l.Buf8(o), n = r = 0; r < o; n++) 55296 == (64512 & (a = t.charCodeAt(n))) && n + 1 < s && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (a = 65536 + (a - 55296 << 10) + (i - 56320), n++), a < 128 ? e[r++] = a : (a < 2048 ? e[r++] = 192 | a >>> 6 : (a < 65536 ? e[r++] = 224 | a >>> 12 : (e[r++] = 240 | a >>> 18, e[r++] = 128 | a >>> 12 & 63), e[r++] = 128 | a >>> 6 & 63), e[r++] = 128 | 63 & a);
                return e
            }, a.buf2binstring = function(t) {
                return d(t, t.length)
            }, a.binstring2buf = function(t) {
                for (var e = new l.Buf8(t.length), a = 0, i = e.length; a < i; a++) e[a] = t.charCodeAt(a);
                return e
            }, a.buf2string = function(t, e) {
                var a, i, n, r, s = e || t.length,
                    o = new Array(2 * s);
                for (a = i = 0; a < s;)
                    if ((n = t[a++]) < 128) o[i++] = n;
                    else if (4 < (r = h[n])) o[i++] = 65533, a += r - 1;
                else {
                    for (n &= 2 === r ? 31 : 3 === r ? 15 : 7; 1 < r && a < s;) n = n << 6 | 63 & t[a++], r--;
                    1 < r ? o[i++] = 65533 : n < 65536 ? o[i++] = n : (n -= 65536, o[i++] = 55296 | n >> 10 & 1023, o[i++] = 56320 | 1023 & n)
                }
                return d(o, i)
            }, a.utf8border = function(t, e) {
                var a;
                for ((e = e || t.length) > t.length && (e = t.length), a = e - 1; 0 <= a && 128 == (192 & t[a]);) a--;
                return a < 0 ? e : 0 === a ? e : a + h[t[a]] > e ? a : e
            }
        }, {
            "./common": 3
        }],
        5: [function(t, e, a) {
            "use strict";
            e.exports = function(t, e, a, i) {
                for (var n = 65535 & t | 0, r = t >>> 16 & 65535 | 0, s = 0; 0 !== a;) {
                    for (a -= s = 2e3 < a ? 2e3 : a; r = r + (n = n + e[i++] | 0) | 0, --s;);
                    n %= 65521, r %= 65521
                }
                return n | r << 16 | 0
            }
        }, {}],
        6: [function(t, e, a) {
            "use strict";
            e.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        }, {}],
        7: [function(t, e, a) {
            "use strict";
            var o = function() {
                for (var t, e = [], a = 0; a < 256; a++) {
                    t = a;
                    for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                    e[a] = t
                }
                return e
            }();
            e.exports = function(t, e, a, i) {
                var n = o,
                    r = i + a;
                t ^= -1;
                for (var s = i; s < r; s++) t = t >>> 8 ^ n[255 & (t ^ e[s])];
                return -1 ^ t
            }
        }, {}],
        8: [function(t, e, a) {
            "use strict";
            var l, _ = t("../utils/common"),
                h = t("./trees"),
                u = t("./adler32"),
                c = t("./crc32"),
                i = t("./messages"),
                d = 0,
                f = 4,
                b = 0,
                g = -2,
                m = -1,
                w = 4,
                n = 2,
                p = 8,
                v = 9,
                r = 286,
                s = 30,
                o = 19,
                k = 2 * r + 1,
                y = 15,
                x = 3,
                z = 258,
                B = z + x + 1,
                S = 42,
                E = 113,
                A = 1,
                Z = 2,
                R = 3,
                C = 4;

            function N(t, e) {
                return t.msg = i[e], e
            }

            function O(t) {
                return (t << 1) - (4 < t ? 9 : 0)
            }

            function D(t) {
                for (var e = t.length; 0 <= --e;) t[e] = 0
            }

            function I(t) {
                var e = t.state,
                    a = e.pending;
                a > t.avail_out && (a = t.avail_out), 0 !== a && (_.arraySet(t.output, e.pending_buf, e.pending_out, a, t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0))
            }

            function U(t, e) {
                h._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, I(t.strm)
            }

            function T(t, e) {
                t.pending_buf[t.pending++] = e
            }

            function F(t, e) {
                t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
            }

            function L(t, e) {
                var a, i, n = t.max_chain_length,
                    r = t.strstart,
                    s = t.prev_length,
                    o = t.nice_match,
                    l = t.strstart > t.w_size - B ? t.strstart - (t.w_size - B) : 0,
                    h = t.window,
                    d = t.w_mask,
                    f = t.prev,
                    _ = t.strstart + z,
                    u = h[r + s - 1],
                    c = h[r + s];
                t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);
                do {
                    if (h[(a = e) + s] === c && h[a + s - 1] === u && h[a] === h[r] && h[++a] === h[r + 1]) {
                        r += 2, a++;
                        do {} while (h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && r < _);
                        if (i = z - (_ - r), r = _ - z, s < i) {
                            if (t.match_start = e, o <= (s = i)) break;
                            u = h[r + s - 1], c = h[r + s]
                        }
                    }
                } while ((e = f[e & d]) > l && 0 != --n);
                return s <= t.lookahead ? s : t.lookahead
            }

            function H(t) {
                var e, a, i, n, r, s, o, l, h, d, f = t.w_size;
                do {
                    if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= f + (f - B)) {
                        for (_.arraySet(t.window, t.window, f, f, 0), t.match_start -= f, t.strstart -= f, t.block_start -= f, e = a = t.hash_size; i = t.head[--e], t.head[e] = f <= i ? i - f : 0, --a;);
                        for (e = a = f; i = t.prev[--e], t.prev[e] = f <= i ? i - f : 0, --a;);
                        n += f
                    }
                    if (0 === t.strm.avail_in) break;
                    if (s = t.strm, o = t.window, l = t.strstart + t.lookahead, h = n, d = void 0, d = s.avail_in, h < d && (d = h), a = 0 === d ? 0 : (s.avail_in -= d, _.arraySet(o, s.input, s.next_in, d, l), 1 === s.state.wrap ? s.adler = u(s.adler, o, d, l) : 2 === s.state.wrap && (s.adler = c(s.adler, o, d, l)), s.next_in += d, s.total_in += d, d), t.lookahead += a, t.lookahead + t.insert >= x)
                        for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + x - 1]) & t.hash_mask, t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < x)););
                } while (t.lookahead < B && 0 !== t.strm.avail_in)
            }

            function j(t, e) {
                for (var a, i;;) {
                    if (t.lookahead < B) {
                        if (H(t), t.lookahead < B && e === d) return A;
                        if (0 === t.lookahead) break
                    }
                    if (a = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== a && t.strstart - a <= t.w_size - B && (t.match_length = L(t, a)), t.match_length >= x)
                        if (i = h._tr_tally(t, t.strstart - t.match_start, t.match_length - x), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= x) {
                            for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, 0 != --t.match_length;);
                            t.strstart++
                        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                    else i = h._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                    if (i && (U(t, !1), 0 === t.strm.avail_out)) return A
                }
                return t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (U(t, !0), 0 === t.strm.avail_out ? R : C) : t.last_lit && (U(t, !1), 0 === t.strm.avail_out) ? A : Z
            }

            function K(t, e) {
                for (var a, i, n;;) {
                    if (t.lookahead < B) {
                        if (H(t), t.lookahead < B && e === d) return A;
                        if (0 === t.lookahead) break
                    }
                    if (a = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = x - 1, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - B && (t.match_length = L(t, a), t.match_length <= 5 && (1 === t.strategy || t.match_length === x && 4096 < t.strstart - t.match_start) && (t.match_length = x - 1)), t.prev_length >= x && t.match_length <= t.prev_length) {
                        for (n = t.strstart + t.lookahead - x, i = h._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - x), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 != --t.prev_length;);
                        if (t.match_available = 0, t.match_length = x - 1, t.strstart++, i && (U(t, !1), 0 === t.strm.avail_out)) return A
                    } else if (t.match_available) {
                        if ((i = h._tr_tally(t, 0, t.window[t.strstart - 1])) && U(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return A
                    } else t.match_available = 1, t.strstart++, t.lookahead--
                }
                return t.match_available && (i = h._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (U(t, !0), 0 === t.strm.avail_out ? R : C) : t.last_lit && (U(t, !1), 0 === t.strm.avail_out) ? A : Z
            }

            function M(t, e, a, i, n) {
                this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = i, this.func = n
            }

            function P() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = p, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new _.Buf16(2 * k), this.dyn_dtree = new _.Buf16(2 * (2 * s + 1)), this.bl_tree = new _.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new _.Buf16(y + 1), this.heap = new _.Buf16(2 * r + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new _.Buf16(2 * r + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
            }

            function Y(t) {
                var e;
                return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = n, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? S : E, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = d, h._tr_init(e), b) : N(t, g)
            }

            function q(t) {
                var e, a = Y(t);
                return a === b && ((e = t.state).window_size = 2 * e.w_size, D(e.head), e.max_lazy_match = l[e.level].max_lazy, e.good_match = l[e.level].good_length, e.nice_match = l[e.level].nice_length, e.max_chain_length = l[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = x - 1, e.match_available = 0, e.ins_h = 0), a
            }

            function G(t, e, a, i, n, r) {
                if (!t) return g;
                var s = 1;
                if (e === m && (e = 6), i < 0 ? (s = 0, i = -i) : 15 < i && (s = 2, i -= 16), n < 1 || v < n || a !== p || i < 8 || 15 < i || e < 0 || 9 < e || r < 0 || w < r) return N(t, g);
                8 === i && (i = 9);
                var o = new P;
                return (t.state = o).strm = t, o.wrap = s, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = n + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + x - 1) / x), o.window = new _.Buf8(2 * o.w_size), o.head = new _.Buf16(o.hash_size), o.prev = new _.Buf16(o.w_size), o.lit_bufsize = 1 << n + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new _.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = e, o.strategy = r, o.method = a, q(t)
            }
            l = [new M(0, 0, 0, 0, function(t, e) {
                var a = 65535;
                for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);;) {
                    if (t.lookahead <= 1) {
                        if (H(t), 0 === t.lookahead && e === d) return A;
                        if (0 === t.lookahead) break
                    }
                    t.strstart += t.lookahead, t.lookahead = 0;
                    var i = t.block_start + a;
                    if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, U(t, !1), 0 === t.strm.avail_out)) return A;
                    if (t.strstart - t.block_start >= t.w_size - B && (U(t, !1), 0 === t.strm.avail_out)) return A
                }
                return t.insert = 0, e === f ? (U(t, !0), 0 === t.strm.avail_out ? R : C) : (t.strstart > t.block_start && (U(t, !1), t.strm.avail_out), A)
            }), new M(4, 4, 8, 4, j), new M(4, 5, 16, 8, j), new M(4, 6, 32, 32, j), new M(4, 4, 16, 16, K), new M(8, 16, 32, 32, K), new M(8, 16, 128, 128, K), new M(8, 32, 128, 256, K), new M(32, 128, 258, 1024, K), new M(32, 258, 258, 4096, K)], a.deflateInit = function(t, e) {
                return G(t, e, p, 15, 8, 0)
            }, a.deflateInit2 = G, a.deflateReset = q, a.deflateResetKeep = Y, a.deflateSetHeader = function(t, e) {
                return t && t.state ? 2 !== t.state.wrap ? g : (t.state.gzhead = e, b) : g
            }, a.deflate = function(t, e) {
                var a, i, n, r;
                if (!t || !t.state || 5 < e || e < 0) return t ? N(t, g) : g;
                if (i = t.state, !t.output || !t.input && 0 !== t.avail_in || 666 === i.status && e !== f) return N(t, 0 === t.avail_out ? -5 : g);
                if (i.strm = t, a = i.last_flush, i.last_flush = e, i.status === S)
                    if (2 === i.wrap) t.adler = 0, T(i, 31), T(i, 139), T(i, 8), i.gzhead ? (T(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), T(i, 255 & i.gzhead.time), T(i, i.gzhead.time >> 8 & 255), T(i, i.gzhead.time >> 16 & 255), T(i, i.gzhead.time >> 24 & 255), T(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), T(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (T(i, 255 & i.gzhead.extra.length), T(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = c(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (T(i, 0), T(i, 0), T(i, 0), T(i, 0), T(i, 0), T(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), T(i, 3), i.status = E);
                    else {
                        var s = p + (i.w_bits - 8 << 4) << 8;
                        s |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (s |= 32), s += 31 - s % 31, i.status = E, F(i, s), 0 !== i.strstart && (F(i, t.adler >>> 16), F(i, 65535 & t.adler)), t.adler = 1
                    } if (69 === i.status)
                    if (i.gzhead.extra) {
                        for (n = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > n && (t.adler = c(t.adler, i.pending_buf, i.pending - n, n)), I(t), n = i.pending, i.pending !== i.pending_buf_size));) T(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                        i.gzhead.hcrc && i.pending > n && (t.adler = c(t.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73)
                    } else i.status = 73;
                if (73 === i.status)
                    if (i.gzhead.name) {
                        n = i.pending;
                        do {
                            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = c(t.adler, i.pending_buf, i.pending - n, n)), I(t), n = i.pending, i.pending === i.pending_buf_size)) {
                                r = 1;
                                break
                            }
                            T(i, r = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0)
                        } while (0 !== r);
                        i.gzhead.hcrc && i.pending > n && (t.adler = c(t.adler, i.pending_buf, i.pending - n, n)), 0 === r && (i.gzindex = 0, i.status = 91)
                    } else i.status = 91;
                if (91 === i.status)
                    if (i.gzhead.comment) {
                        n = i.pending;
                        do {
                            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = c(t.adler, i.pending_buf, i.pending - n, n)), I(t), n = i.pending, i.pending === i.pending_buf_size)) {
                                r = 1;
                                break
                            }
                            T(i, r = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0)
                        } while (0 !== r);
                        i.gzhead.hcrc && i.pending > n && (t.adler = c(t.adler, i.pending_buf, i.pending - n, n)), 0 === r && (i.status = 103)
                    } else i.status = 103;
                if (103 === i.status && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && I(t), i.pending + 2 <= i.pending_buf_size && (T(i, 255 & t.adler), T(i, t.adler >> 8 & 255), t.adler = 0, i.status = E)) : i.status = E), 0 !== i.pending) {
                    if (I(t), 0 === t.avail_out) return i.last_flush = -1, b
                } else if (0 === t.avail_in && O(e) <= O(a) && e !== f) return N(t, -5);
                if (666 === i.status && 0 !== t.avail_in) return N(t, -5);
                if (0 !== t.avail_in || 0 !== i.lookahead || e !== d && 666 !== i.status) {
                    var o = 2 === i.strategy ? function(t, e) {
                        for (var a;;) {
                            if (0 === t.lookahead && (H(t), 0 === t.lookahead)) {
                                if (e === d) return A;
                                break
                            }
                            if (t.match_length = 0, a = h._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (U(t, !1), 0 === t.strm.avail_out)) return A
                        }
                        return t.insert = 0, e === f ? (U(t, !0), 0 === t.strm.avail_out ? R : C) : t.last_lit && (U(t, !1), 0 === t.strm.avail_out) ? A : Z
                    }(i, e) : 3 === i.strategy ? function(t, e) {
                        for (var a, i, n, r, s = t.window;;) {
                            if (t.lookahead <= z) {
                                if (H(t), t.lookahead <= z && e === d) return A;
                                if (0 === t.lookahead) break
                            }
                            if (t.match_length = 0, t.lookahead >= x && 0 < t.strstart && (i = s[n = t.strstart - 1]) === s[++n] && i === s[++n] && i === s[++n]) {
                                r = t.strstart + z;
                                do {} while (i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && n < r);
                                t.match_length = z - (r - n), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                            }
                            if (t.match_length >= x ? (a = h._tr_tally(t, 1, t.match_length - x), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = h._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (U(t, !1), 0 === t.strm.avail_out)) return A
                        }
                        return t.insert = 0, e === f ? (U(t, !0), 0 === t.strm.avail_out ? R : C) : t.last_lit && (U(t, !1), 0 === t.strm.avail_out) ? A : Z
                    }(i, e) : l[i.level].func(i, e);
                    if (o !== R && o !== C || (i.status = 666), o === A || o === R) return 0 === t.avail_out && (i.last_flush = -1), b;
                    if (o === Z && (1 === e ? h._tr_align(i) : 5 !== e && (h._tr_stored_block(i, 0, 0, !1), 3 === e && (D(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), I(t), 0 === t.avail_out)) return i.last_flush = -1, b
                }
                return e !== f ? b : i.wrap <= 0 ? 1 : (2 === i.wrap ? (T(i, 255 & t.adler), T(i, t.adler >> 8 & 255), T(i, t.adler >> 16 & 255), T(i, t.adler >> 24 & 255), T(i, 255 & t.total_in), T(i, t.total_in >> 8 & 255), T(i, t.total_in >> 16 & 255), T(i, t.total_in >> 24 & 255)) : (F(i, t.adler >>> 16), F(i, 65535 & t.adler)), I(t), 0 < i.wrap && (i.wrap = -i.wrap), 0 !== i.pending ? b : 1)
            }, a.deflateEnd = function(t) {
                var e;
                return t && t.state ? (e = t.state.status) !== S && 69 !== e && 73 !== e && 91 !== e && 103 !== e && e !== E && 666 !== e ? N(t, g) : (t.state = null, e === E ? N(t, -3) : b) : g
            }, a.deflateSetDictionary = function(t, e) {
                var a, i, n, r, s, o, l, h, d = e.length;
                if (!t || !t.state) return g;
                if (2 === (r = (a = t.state).wrap) || 1 === r && a.status !== S || a.lookahead) return g;
                for (1 === r && (t.adler = u(t.adler, e, d, 0)), a.wrap = 0, d >= a.w_size && (0 === r && (D(a.head), a.strstart = 0, a.block_start = 0, a.insert = 0), h = new _.Buf8(a.w_size), _.arraySet(h, e, d - a.w_size, a.w_size, 0), e = h, d = a.w_size), s = t.avail_in, o = t.next_in, l = t.input, t.avail_in = d, t.next_in = 0, t.input = e, H(a); a.lookahead >= x;) {
                    for (i = a.strstart, n = a.lookahead - (x - 1); a.ins_h = (a.ins_h << a.hash_shift ^ a.window[i + x - 1]) & a.hash_mask, a.prev[i & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = i, i++, --n;);
                    a.strstart = i, a.lookahead = x - 1, H(a)
                }
                return a.strstart += a.lookahead, a.block_start = a.strstart, a.insert = a.lookahead, a.lookahead = 0, a.match_length = a.prev_length = x - 1, a.match_available = 0, t.next_in = o, t.input = l, t.avail_in = s, a.wrap = r, b
            }, a.deflateInfo = "pako deflate (from Nodeca project)"
        }, {
            "../utils/common": 3,
            "./adler32": 5,
            "./crc32": 7,
            "./messages": 13,
            "./trees": 14
        }],
        9: [function(t, e, a) {
            "use strict";
            e.exports = function() {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            }
        }, {}],
        10: [function(t, e, a) {
            "use strict";
            e.exports = function(t, e) {
                var a, i, n, r, s, o, l, h, d, f, _, u, c, b, g, m, w, p, v, k, y, x, z, B, S;
                a = t.state, i = t.next_in, B = t.input, n = i + (t.avail_in - 5), r = t.next_out, S = t.output, s = r - (e - t.avail_out), o = r + (t.avail_out - 257), l = a.dmax, h = a.wsize, d = a.whave, f = a.wnext, _ = a.window, u = a.hold, c = a.bits, b = a.lencode, g = a.distcode, m = (1 << a.lenbits) - 1, w = (1 << a.distbits) - 1;
                t: do {
                    c < 15 && (u += B[i++] << c, c += 8, u += B[i++] << c, c += 8), p = b[u & m];
                    e: for (;;) {
                        if (u >>>= v = p >>> 24, c -= v, 0 === (v = p >>> 16 & 255)) S[r++] = 65535 & p;
                        else {
                            if (!(16 & v)) {
                                if (0 == (64 & v)) {
                                    p = b[(65535 & p) + (u & (1 << v) - 1)];
                                    continue e
                                }
                                if (32 & v) {
                                    a.mode = 12;
                                    break t
                                }
                                t.msg = "invalid literal/length code", a.mode = 30;
                                break t
                            }
                            k = 65535 & p, (v &= 15) && (c < v && (u += B[i++] << c, c += 8), k += u & (1 << v) - 1, u >>>= v, c -= v), c < 15 && (u += B[i++] << c, c += 8, u += B[i++] << c, c += 8), p = g[u & w];
                            a: for (;;) {
                                if (u >>>= v = p >>> 24, c -= v, !(16 & (v = p >>> 16 & 255))) {
                                    if (0 == (64 & v)) {
                                        p = g[(65535 & p) + (u & (1 << v) - 1)];
                                        continue a
                                    }
                                    t.msg = "invalid distance code", a.mode = 30;
                                    break t
                                }
                                if (y = 65535 & p, c < (v &= 15) && (u += B[i++] << c, (c += 8) < v && (u += B[i++] << c, c += 8)), l < (y += u & (1 << v) - 1)) {
                                    t.msg = "invalid distance too far back", a.mode = 30;
                                    break t
                                }
                                if (u >>>= v, c -= v, (v = r - s) < y) {
                                    if (d < (v = y - v) && a.sane) {
                                        t.msg = "invalid distance too far back", a.mode = 30;
                                        break t
                                    }
                                    if (z = _, (x = 0) === f) {
                                        if (x += h - v, v < k) {
                                            for (k -= v; S[r++] = _[x++], --v;);
                                            x = r - y, z = S
                                        }
                                    } else if (f < v) {
                                        if (x += h + f - v, (v -= f) < k) {
                                            for (k -= v; S[r++] = _[x++], --v;);
                                            if (x = 0, f < k) {
                                                for (k -= v = f; S[r++] = _[x++], --v;);
                                                x = r - y, z = S
                                            }
                                        }
                                    } else if (x += f - v, v < k) {
                                        for (k -= v; S[r++] = _[x++], --v;);
                                        x = r - y, z = S
                                    }
                                    for (; 2 < k;) S[r++] = z[x++], S[r++] = z[x++], S[r++] = z[x++], k -= 3;
                                    k && (S[r++] = z[x++], 1 < k && (S[r++] = z[x++]))
                                } else {
                                    for (x = r - y; S[r++] = S[x++], S[r++] = S[x++], S[r++] = S[x++], 2 < (k -= 3););
                                    k && (S[r++] = S[x++], 1 < k && (S[r++] = S[x++]))
                                }
                                break
                            }
                        }
                        break
                    }
                } while (i < n && r < o);
                i -= k = c >> 3, u &= (1 << (c -= k << 3)) - 1, t.next_in = i, t.next_out = r, t.avail_in = i < n ? n - i + 5 : 5 - (i - n), t.avail_out = r < o ? o - r + 257 : 257 - (r - o), a.hold = u, a.bits = c
            }
        }, {}],
        11: [function(t, e, a) {
            "use strict";
            var Z = t("../utils/common"),
                R = t("./adler32"),
                C = t("./crc32"),
                N = t("./inffast"),
                O = t("./inftrees"),
                D = 1,
                I = 2,
                U = 0,
                T = -2,
                F = 1,
                i = 852,
                n = 592;

            function L(t) {
                return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
            }

            function r() {
                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Z.Buf16(320), this.work = new Z.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            function s(t) {
                var e;
                return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = F, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Z.Buf32(i), e.distcode = e.distdyn = new Z.Buf32(n), e.sane = 1, e.back = -1, U) : T
            }

            function o(t) {
                var e;
                return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, s(t)) : T
            }

            function l(t, e) {
                var a, i;
                return t && t.state ? (i = t.state, e < 0 ? (a = 0, e = -e) : (a = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || 15 < e) ? T : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = a, i.wbits = e, o(t))) : T
            }

            function h(t, e) {
                var a, i;
                return t ? (i = new r, (t.state = i).window = null, (a = l(t, e)) !== U && (t.state = null), a) : T
            }
            var d, f, _ = !0;

            function H(t) {
                if (_) {
                    var e;
                    for (d = new Z.Buf32(512), f = new Z.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;
                    for (; e < 256;) t.lens[e++] = 9;
                    for (; e < 280;) t.lens[e++] = 7;
                    for (; e < 288;) t.lens[e++] = 8;
                    for (O(D, t.lens, 0, 288, d, 0, t.work, {
                            bits: 9
                        }), e = 0; e < 32;) t.lens[e++] = 5;
                    O(I, t.lens, 0, 32, f, 0, t.work, {
                        bits: 5
                    }), _ = !1
                }
                t.lencode = d, t.lenbits = 9, t.distcode = f, t.distbits = 5
            }

            function j(t, e, a, i) {
                var n, r = t.state;
                return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new Z.Buf8(r.wsize)), i >= r.wsize ? (Z.arraySet(r.window, e, a - r.wsize, r.wsize, 0), r.wnext = 0, r.whave = r.wsize) : (i < (n = r.wsize - r.wnext) && (n = i), Z.arraySet(r.window, e, a - i, n, r.wnext), (i -= n) ? (Z.arraySet(r.window, e, a - i, i, 0), r.wnext = i, r.whave = r.wsize) : (r.wnext += n, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += n))), 0
            }
            a.inflateReset = o, a.inflateReset2 = l, a.inflateResetKeep = s, a.inflateInit = function(t) {
                return h(t, 15)
            }, a.inflateInit2 = h, a.inflate = function(t, e) {
                var a, i, n, r, s, o, l, h, d, f, _, u, c, b, g, m, w, p, v, k, y, x, z, B, S = 0,
                    E = new Z.Buf8(4),
                    A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return T;
                12 === (a = t.state).mode && (a.mode = 13), s = t.next_out, n = t.output, l = t.avail_out, r = t.next_in, i = t.input, o = t.avail_in, h = a.hold, d = a.bits, f = o, _ = l, x = U;
                t: for (;;) switch (a.mode) {
                    case F:
                        if (0 === a.wrap) {
                            a.mode = 13;
                            break
                        }
                        for (; d < 16;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        if (2 & a.wrap && 35615 === h) {
                            E[a.check = 0] = 255 & h, E[1] = h >>> 8 & 255, a.check = C(a.check, E, 2, 0), d = h = 0, a.mode = 2;
                            break
                        }
                        if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                            t.msg = "incorrect header check", a.mode = 30;
                            break
                        }
                        if (8 != (15 & h)) {
                            t.msg = "unknown compression method", a.mode = 30;
                            break
                        }
                        if (d -= 4, y = 8 + (15 & (h >>>= 4)), 0 === a.wbits) a.wbits = y;
                        else if (y > a.wbits) {
                            t.msg = "invalid window size", a.mode = 30;
                            break
                        }
                        a.dmax = 1 << y, t.adler = a.check = 1, a.mode = 512 & h ? 10 : 12, d = h = 0;
                        break;
                    case 2:
                        for (; d < 16;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        if (a.flags = h, 8 != (255 & a.flags)) {
                            t.msg = "unknown compression method", a.mode = 30;
                            break
                        }
                        if (57344 & a.flags) {
                            t.msg = "unknown header flags set", a.mode = 30;
                            break
                        }
                        a.head && (a.head.text = h >> 8 & 1), 512 & a.flags && (E[0] = 255 & h, E[1] = h >>> 8 & 255, a.check = C(a.check, E, 2, 0)), d = h = 0, a.mode = 3;
                    case 3:
                        for (; d < 32;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        a.head && (a.head.time = h), 512 & a.flags && (E[0] = 255 & h, E[1] = h >>> 8 & 255, E[2] = h >>> 16 & 255, E[3] = h >>> 24 & 255, a.check = C(a.check, E, 4, 0)), d = h = 0, a.mode = 4;
                    case 4:
                        for (; d < 16;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        a.head && (a.head.xflags = 255 & h, a.head.os = h >> 8), 512 & a.flags && (E[0] = 255 & h, E[1] = h >>> 8 & 255, a.check = C(a.check, E, 2, 0)), d = h = 0, a.mode = 5;
                    case 5:
                        if (1024 & a.flags) {
                            for (; d < 16;) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            a.length = h, a.head && (a.head.extra_len = h), 512 & a.flags && (E[0] = 255 & h, E[1] = h >>> 8 & 255, a.check = C(a.check, E, 2, 0)), d = h = 0
                        } else a.head && (a.head.extra = null);
                        a.mode = 6;
                    case 6:
                        if (1024 & a.flags && (o < (u = a.length) && (u = o), u && (a.head && (y = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), Z.arraySet(a.head.extra, i, r, u, y)), 512 & a.flags && (a.check = C(a.check, i, u, r)), o -= u, r += u, a.length -= u), a.length)) break t;
                        a.length = 0, a.mode = 7;
                    case 7:
                        if (2048 & a.flags) {
                            if (0 === o) break t;
                            for (u = 0; y = i[r + u++], a.head && y && a.length < 65536 && (a.head.name += String.fromCharCode(y)), y && u < o;);
                            if (512 & a.flags && (a.check = C(a.check, i, u, r)), o -= u, r += u, y) break t
                        } else a.head && (a.head.name = null);
                        a.length = 0, a.mode = 8;
                    case 8:
                        if (4096 & a.flags) {
                            if (0 === o) break t;
                            for (u = 0; y = i[r + u++], a.head && y && a.length < 65536 && (a.head.comment += String.fromCharCode(y)), y && u < o;);
                            if (512 & a.flags && (a.check = C(a.check, i, u, r)), o -= u, r += u, y) break t
                        } else a.head && (a.head.comment = null);
                        a.mode = 9;
                    case 9:
                        if (512 & a.flags) {
                            for (; d < 16;) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            if (h !== (65535 & a.check)) {
                                t.msg = "header crc mismatch", a.mode = 30;
                                break
                            }
                            d = h = 0
                        }
                        a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), t.adler = a.check = 0, a.mode = 12;
                        break;
                    case 10:
                        for (; d < 32;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        t.adler = a.check = L(h), d = h = 0, a.mode = 11;
                    case 11:
                        if (0 === a.havedict) return t.next_out = s, t.avail_out = l, t.next_in = r, t.avail_in = o, a.hold = h, a.bits = d, 2;
                        t.adler = a.check = 1, a.mode = 12;
                    case 12:
                        if (5 === e || 6 === e) break t;
                    case 13:
                        if (a.last) {
                            h >>>= 7 & d, d -= 7 & d, a.mode = 27;
                            break
                        }
                        for (; d < 3;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        switch (a.last = 1 & h, d -= 1, 3 & (h >>>= 1)) {
                            case 0:
                                a.mode = 14;
                                break;
                            case 1:
                                if (H(a), a.mode = 20, 6 !== e) break;
                                h >>>= 2, d -= 2;
                                break t;
                            case 2:
                                a.mode = 17;
                                break;
                            case 3:
                                t.msg = "invalid block type", a.mode = 30
                        }
                        h >>>= 2, d -= 2;
                        break;
                    case 14:
                        for (h >>>= 7 & d, d -= 7 & d; d < 32;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        if ((65535 & h) != (h >>> 16 ^ 65535)) {
                            t.msg = "invalid stored block lengths", a.mode = 30;
                            break
                        }
                        if (a.length = 65535 & h, d = h = 0, a.mode = 15, 6 === e) break t;
                    case 15:
                        a.mode = 16;
                    case 16:
                        if (u = a.length) {
                            if (o < u && (u = o), l < u && (u = l), 0 === u) break t;
                            Z.arraySet(n, i, r, u, s), o -= u, r += u, l -= u, s += u, a.length -= u;
                            break
                        }
                        a.mode = 12;
                        break;
                    case 17:
                        for (; d < 14;) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        if (a.nlen = 257 + (31 & h), h >>>= 5, d -= 5, a.ndist = 1 + (31 & h), h >>>= 5, d -= 5, a.ncode = 4 + (15 & h), h >>>= 4, d -= 4, 286 < a.nlen || 30 < a.ndist) {
                            t.msg = "too many length or distance symbols", a.mode = 30;
                            break
                        }
                        a.have = 0, a.mode = 18;
                    case 18:
                        for (; a.have < a.ncode;) {
                            for (; d < 3;) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            a.lens[A[a.have++]] = 7 & h, h >>>= 3, d -= 3
                        }
                        for (; a.have < 19;) a.lens[A[a.have++]] = 0;
                        if (a.lencode = a.lendyn, a.lenbits = 7, z = {
                                bits: a.lenbits
                            }, x = O(0, a.lens, 0, 19, a.lencode, 0, a.work, z), a.lenbits = z.bits, x) {
                            t.msg = "invalid code lengths set", a.mode = 30;
                            break
                        }
                        a.have = 0, a.mode = 19;
                    case 19:
                        for (; a.have < a.nlen + a.ndist;) {
                            for (; m = (S = a.lencode[h & (1 << a.lenbits) - 1]) >>> 16 & 255, w = 65535 & S, !((g = S >>> 24) <= d);) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            if (w < 16) h >>>= g, d -= g, a.lens[a.have++] = w;
                            else {
                                if (16 === w) {
                                    for (B = g + 2; d < B;) {
                                        if (0 === o) break t;
                                        o--, h += i[r++] << d, d += 8
                                    }
                                    if (h >>>= g, d -= g, 0 === a.have) {
                                        t.msg = "invalid bit length repeat", a.mode = 30;
                                        break
                                    }
                                    y = a.lens[a.have - 1], u = 3 + (3 & h), h >>>= 2, d -= 2
                                } else if (17 === w) {
                                    for (B = g + 3; d < B;) {
                                        if (0 === o) break t;
                                        o--, h += i[r++] << d, d += 8
                                    }
                                    d -= g, y = 0, u = 3 + (7 & (h >>>= g)), h >>>= 3, d -= 3
                                } else {
                                    for (B = g + 7; d < B;) {
                                        if (0 === o) break t;
                                        o--, h += i[r++] << d, d += 8
                                    }
                                    d -= g, y = 0, u = 11 + (127 & (h >>>= g)), h >>>= 7, d -= 7
                                }
                                if (a.have + u > a.nlen + a.ndist) {
                                    t.msg = "invalid bit length repeat", a.mode = 30;
                                    break
                                }
                                for (; u--;) a.lens[a.have++] = y
                            }
                        }
                        if (30 === a.mode) break;
                        if (0 === a.lens[256]) {
                            t.msg = "invalid code -- missing end-of-block", a.mode = 30;
                            break
                        }
                        if (a.lenbits = 9, z = {
                                bits: a.lenbits
                            }, x = O(D, a.lens, 0, a.nlen, a.lencode, 0, a.work, z), a.lenbits = z.bits, x) {
                            t.msg = "invalid literal/lengths set", a.mode = 30;
                            break
                        }
                        if (a.distbits = 6, a.distcode = a.distdyn, z = {
                                bits: a.distbits
                            }, x = O(I, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, z), a.distbits = z.bits, x) {
                            t.msg = "invalid distances set", a.mode = 30;
                            break
                        }
                        if (a.mode = 20, 6 === e) break t;
                    case 20:
                        a.mode = 21;
                    case 21:
                        if (6 <= o && 258 <= l) {
                            t.next_out = s, t.avail_out = l, t.next_in = r, t.avail_in = o, a.hold = h, a.bits = d, N(t, _), s = t.next_out, n = t.output, l = t.avail_out, r = t.next_in, i = t.input, o = t.avail_in, h = a.hold, d = a.bits, 12 === a.mode && (a.back = -1);
                            break
                        }
                        for (a.back = 0; m = (S = a.lencode[h & (1 << a.lenbits) - 1]) >>> 16 & 255, w = 65535 & S, !((g = S >>> 24) <= d);) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        if (m && 0 == (240 & m)) {
                            for (p = g, v = m, k = w; m = (S = a.lencode[k + ((h & (1 << p + v) - 1) >> p)]) >>> 16 & 255, w = 65535 & S, !(p + (g = S >>> 24) <= d);) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            h >>>= p, d -= p, a.back += p
                        }
                        if (h >>>= g, d -= g, a.back += g, a.length = w, 0 === m) {
                            a.mode = 26;
                            break
                        }
                        if (32 & m) {
                            a.back = -1, a.mode = 12;
                            break
                        }
                        if (64 & m) {
                            t.msg = "invalid literal/length code", a.mode = 30;
                            break
                        }
                        a.extra = 15 & m, a.mode = 22;
                    case 22:
                        if (a.extra) {
                            for (B = a.extra; d < B;) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            a.length += h & (1 << a.extra) - 1, h >>>= a.extra, d -= a.extra, a.back += a.extra
                        }
                        a.was = a.length, a.mode = 23;
                    case 23:
                        for (; m = (S = a.distcode[h & (1 << a.distbits) - 1]) >>> 16 & 255, w = 65535 & S, !((g = S >>> 24) <= d);) {
                            if (0 === o) break t;
                            o--, h += i[r++] << d, d += 8
                        }
                        if (0 == (240 & m)) {
                            for (p = g, v = m, k = w; m = (S = a.distcode[k + ((h & (1 << p + v) - 1) >> p)]) >>> 16 & 255, w = 65535 & S, !(p + (g = S >>> 24) <= d);) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            h >>>= p, d -= p, a.back += p
                        }
                        if (h >>>= g, d -= g, a.back += g, 64 & m) {
                            t.msg = "invalid distance code", a.mode = 30;
                            break
                        }
                        a.offset = w, a.extra = 15 & m, a.mode = 24;
                    case 24:
                        if (a.extra) {
                            for (B = a.extra; d < B;) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            a.offset += h & (1 << a.extra) - 1, h >>>= a.extra, d -= a.extra, a.back += a.extra
                        }
                        if (a.offset > a.dmax) {
                            t.msg = "invalid distance too far back", a.mode = 30;
                            break
                        }
                        a.mode = 25;
                    case 25:
                        if (0 === l) break t;
                        if (u = _ - l, a.offset > u) {
                            if ((u = a.offset - u) > a.whave && a.sane) {
                                t.msg = "invalid distance too far back", a.mode = 30;
                                break
                            }
                            u > a.wnext ? (u -= a.wnext, c = a.wsize - u) : c = a.wnext - u, u > a.length && (u = a.length), b = a.window
                        } else b = n, c = s - a.offset, u = a.length;
                        for (l < u && (u = l), l -= u, a.length -= u; n[s++] = b[c++], --u;);
                        0 === a.length && (a.mode = 21);
                        break;
                    case 26:
                        if (0 === l) break t;
                        n[s++] = a.length, l--, a.mode = 21;
                        break;
                    case 27:
                        if (a.wrap) {
                            for (; d < 32;) {
                                if (0 === o) break t;
                                o--, h |= i[r++] << d, d += 8
                            }
                            if (_ -= l, t.total_out += _, a.total += _, _ && (t.adler = a.check = a.flags ? C(a.check, n, _, s - _) : R(a.check, n, _, s - _)), _ = l, (a.flags ? h : L(h)) !== a.check) {
                                t.msg = "incorrect data check", a.mode = 30;
                                break
                            }
                            d = h = 0
                        }
                        a.mode = 28;
                    case 28:
                        if (a.wrap && a.flags) {
                            for (; d < 32;) {
                                if (0 === o) break t;
                                o--, h += i[r++] << d, d += 8
                            }
                            if (h !== (4294967295 & a.total)) {
                                t.msg = "incorrect length check", a.mode = 30;
                                break
                            }
                            d = h = 0
                        }
                        a.mode = 29;
                    case 29:
                        x = 1;
                        break t;
                    case 30:
                        x = -3;
                        break t;
                    case 31:
                        return -4;
                    case 32:
                    default:
                        return T
                }
                return t.next_out = s, t.avail_out = l, t.next_in = r, t.avail_in = o, a.hold = h, a.bits = d, (a.wsize || _ !== t.avail_out && a.mode < 30 && (a.mode < 27 || 4 !== e)) && j(t, t.output, t.next_out, _ - t.avail_out) ? (a.mode = 31, -4) : (f -= t.avail_in, _ -= t.avail_out, t.total_in += f, t.total_out += _, a.total += _, a.wrap && _ && (t.adler = a.check = a.flags ? C(a.check, n, _, t.next_out - _) : R(a.check, n, _, t.next_out - _)), t.data_type = a.bits + (a.last ? 64 : 0) + (12 === a.mode ? 128 : 0) + (20 === a.mode || 15 === a.mode ? 256 : 0), (0 === f && 0 === _ || 4 === e) && x === U && (x = -5), x)
            }, a.inflateEnd = function(t) {
                if (!t || !t.state) return T;
                var e = t.state;
                return e.window && (e.window = null), t.state = null, U
            }, a.inflateGetHeader = function(t, e) {
                var a;
                return t && t.state ? 0 == (2 & (a = t.state).wrap) ? T : ((a.head = e).done = !1, U) : T
            }, a.inflateSetDictionary = function(t, e) {
                var a, i = e.length;
                return t && t.state ? 0 !== (a = t.state).wrap && 11 !== a.mode ? T : 11 === a.mode && R(1, e, i, 0) !== a.check ? -3 : j(t, e, i, i) ? (a.mode = 31, -4) : (a.havedict = 1, U) : T
            }, a.inflateInfo = "pako inflate (from Nodeca project)"
        }, {
            "../utils/common": 3,
            "./adler32": 5,
            "./crc32": 7,
            "./inffast": 10,
            "./inftrees": 12
        }],
        12: [function(t, e, a) {
            "use strict";
            var D = t("../utils/common"),
                I = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                U = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                T = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                F = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            e.exports = function(t, e, a, i, n, r, s, o) {
                var l, h, d, f, _, u, c, b, g, m = o.bits,
                    w = 0,
                    p = 0,
                    v = 0,
                    k = 0,
                    y = 0,
                    x = 0,
                    z = 0,
                    B = 0,
                    S = 0,
                    E = 0,
                    A = null,
                    Z = 0,
                    R = new D.Buf16(16),
                    C = new D.Buf16(16),
                    N = null,
                    O = 0;
                for (w = 0; w <= 15; w++) R[w] = 0;
                for (p = 0; p < i; p++) R[e[a + p]]++;
                for (y = m, k = 15; 1 <= k && 0 === R[k]; k--);
                if (k < y && (y = k), 0 === k) return n[r++] = 20971520, n[r++] = 20971520, o.bits = 1, 0;
                for (v = 1; v < k && 0 === R[v]; v++);
                for (y < v && (y = v), w = B = 1; w <= 15; w++)
                    if (B <<= 1, (B -= R[w]) < 0) return -1;
                if (0 < B && (0 === t || 1 !== k)) return -1;
                for (C[1] = 0, w = 1; w < 15; w++) C[w + 1] = C[w] + R[w];
                for (p = 0; p < i; p++) 0 !== e[a + p] && (s[C[e[a + p]]++] = p);
                if (0 === t ? (A = N = s, u = 19) : 1 === t ? (A = I, Z -= 257, N = U, O -= 257, u = 256) : (A = T, N = F, u = -1), w = v, _ = r, z = p = E = 0, d = -1, f = (S = 1 << (x = y)) - 1, 1 === t && 852 < S || 2 === t && 592 < S) return 1;
                for (;;) {
                    for (c = w - z, s[p] < u ? (b = 0, g = s[p]) : s[p] > u ? (b = N[O + s[p]], g = A[Z + s[p]]) : (b = 96, g = 0), l = 1 << w - z, v = h = 1 << x; n[_ + (E >> z) + (h -= l)] = c << 24 | b << 16 | g | 0, 0 !== h;);
                    for (l = 1 << w - 1; E & l;) l >>= 1;
                    if (0 !== l ? (E &= l - 1, E += l) : E = 0, p++, 0 == --R[w]) {
                        if (w === k) break;
                        w = e[a + s[p]]
                    }
                    if (y < w && (E & f) !== d) {
                        for (0 === z && (z = y), _ += v, B = 1 << (x = w - z); x + z < k && !((B -= R[x + z]) <= 0);) x++, B <<= 1;
                        if (S += 1 << x, 1 === t && 852 < S || 2 === t && 592 < S) return 1;
                        n[d = E & f] = y << 24 | x << 16 | _ - r | 0
                    }
                }
                return 0 !== E && (n[_ + E] = w - z << 24 | 64 << 16 | 0), o.bits = y, 0
            }
        }, {
            "../utils/common": 3
        }],
        13: [function(t, e, a) {
            "use strict";
            e.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        }, {}],
        14: [function(t, e, a) {
            "use strict";
            var l = t("../utils/common"),
                o = 0,
                h = 1;

            function i(t) {
                for (var e = t.length; 0 <= --e;) t[e] = 0
            }
            var d = 0,
                s = 29,
                f = 256,
                _ = f + 1 + s,
                u = 30,
                c = 19,
                g = 2 * _ + 1,
                m = 15,
                n = 16,
                b = 7,
                w = 256,
                p = 16,
                v = 17,
                k = 18,
                y = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                x = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                S = new Array(2 * (_ + 2));
            i(S);
            var E = new Array(2 * u);
            i(E);
            var A = new Array(512);
            i(A);
            var Z = new Array(256);
            i(Z);
            var R = new Array(s);
            i(R);
            var C, N, O, D = new Array(u);

            function I(t, e, a, i, n) {
                this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = i, this.max_length = n, this.has_stree = t && t.length
            }

            function r(t, e) {
                this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
            }

            function U(t) {
                return t < 256 ? A[t] : A[256 + (t >>> 7)]
            }

            function T(t, e) {
                t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
            }

            function F(t, e, a) {
                t.bi_valid > n - a ? (t.bi_buf |= e << t.bi_valid & 65535, T(t, t.bi_buf), t.bi_buf = e >> n - t.bi_valid, t.bi_valid += a - n) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a)
            }

            function L(t, e, a) {
                F(t, a[2 * e], a[2 * e + 1])
            }

            function H(t, e) {
                for (var a = 0; a |= 1 & t, t >>>= 1, a <<= 1, 0 < --e;);
                return a >>> 1
            }

            function j(t, e, a) {
                var i, n, r = new Array(m + 1),
                    s = 0;
                for (i = 1; i <= m; i++) r[i] = s = s + a[i - 1] << 1;
                for (n = 0; n <= e; n++) {
                    var o = t[2 * n + 1];
                    0 !== o && (t[2 * n] = H(r[o]++, o))
                }
            }

            function K(t) {
                var e;
                for (e = 0; e < _; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < u; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < c; e++) t.bl_tree[2 * e] = 0;
                t.dyn_ltree[2 * w] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
            }

            function M(t) {
                8 < t.bi_valid ? T(t, t.bi_buf) : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
            }

            function P(t, e, a, i) {
                var n = 2 * e,
                    r = 2 * a;
                return t[n] < t[r] || t[n] === t[r] && i[e] <= i[a]
            }

            function Y(t, e, a) {
                for (var i = t.heap[a], n = a << 1; n <= t.heap_len && (n < t.heap_len && P(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !P(e, i, t.heap[n], t.depth));) t.heap[a] = t.heap[n], a = n, n <<= 1;
                t.heap[a] = i
            }

            function q(t, e, a) {
                var i, n, r, s, o = 0;
                if (0 !== t.last_lit)
                    for (; i = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], n = t.pending_buf[t.l_buf + o], o++, 0 === i ? L(t, n, e) : (L(t, (r = Z[n]) + f + 1, e), 0 !== (s = y[r]) && F(t, n -= R[r], s), L(t, r = U(--i), a), 0 !== (s = x[r]) && F(t, i -= D[r], s)), o < t.last_lit;);
                L(t, w, e)
            }

            function G(t, e) {
                var a, i, n, r = e.dyn_tree,
                    s = e.stat_desc.static_tree,
                    o = e.stat_desc.has_stree,
                    l = e.stat_desc.elems,
                    h = -1;
                for (t.heap_len = 0, t.heap_max = g, a = 0; a < l; a++) 0 !== r[2 * a] ? (t.heap[++t.heap_len] = h = a, t.depth[a] = 0) : r[2 * a + 1] = 0;
                for (; t.heap_len < 2;) r[2 * (n = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1, t.depth[n] = 0, t.opt_len--, o && (t.static_len -= s[2 * n + 1]);
                for (e.max_code = h, a = t.heap_len >> 1; 1 <= a; a--) Y(t, r, a);
                for (n = l; a = t.heap[1], t.heap[1] = t.heap[t.heap_len--], Y(t, r, 1), i = t.heap[1], t.heap[--t.heap_max] = a, t.heap[--t.heap_max] = i, r[2 * n] = r[2 * a] + r[2 * i], t.depth[n] = (t.depth[a] >= t.depth[i] ? t.depth[a] : t.depth[i]) + 1, r[2 * a + 1] = r[2 * i + 1] = n, t.heap[1] = n++, Y(t, r, 1), 2 <= t.heap_len;);
                t.heap[--t.heap_max] = t.heap[1],
                    function(t, e) {
                        var a, i, n, r, s, o, l = e.dyn_tree,
                            h = e.max_code,
                            d = e.stat_desc.static_tree,
                            f = e.stat_desc.has_stree,
                            _ = e.stat_desc.extra_bits,
                            u = e.stat_desc.extra_base,
                            c = e.stat_desc.max_length,
                            b = 0;
                        for (r = 0; r <= m; r++) t.bl_count[r] = 0;
                        for (l[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; a < g; a++) c < (r = l[2 * l[2 * (i = t.heap[a]) + 1] + 1] + 1) && (r = c, b++), l[2 * i + 1] = r, h < i || (t.bl_count[r]++, s = 0, u <= i && (s = _[i - u]), o = l[2 * i], t.opt_len += o * (r + s), f && (t.static_len += o * (d[2 * i + 1] + s)));
                        if (0 !== b) {
                            do {
                                for (r = c - 1; 0 === t.bl_count[r];) r--;
                                t.bl_count[r]--, t.bl_count[r + 1] += 2, t.bl_count[c]--, b -= 2
                            } while (0 < b);
                            for (r = c; 0 !== r; r--)
                                for (i = t.bl_count[r]; 0 !== i;) h < (n = t.heap[--a]) || (l[2 * n + 1] !== r && (t.opt_len += (r - l[2 * n + 1]) * l[2 * n], l[2 * n + 1] = r), i--)
                        }
                    }(t, e), j(r, h, t.bl_count)
            }

            function X(t, e, a) {
                var i, n, r = -1,
                    s = e[1],
                    o = 0,
                    l = 7,
                    h = 4;
                for (0 === s && (l = 138, h = 3), e[2 * (a + 1) + 1] = 65535, i = 0; i <= a; i++) n = s, s = e[2 * (i + 1) + 1], ++o < l && n === s || (o < h ? t.bl_tree[2 * n] += o : 0 !== n ? (n !== r && t.bl_tree[2 * n]++, t.bl_tree[2 * p]++) : o <= 10 ? t.bl_tree[2 * v]++ : t.bl_tree[2 * k]++, r = n, (o = 0) === s ? (l = 138, h = 3) : n === s ? (l = 6, h = 3) : (l = 7, h = 4))
            }

            function W(t, e, a) {
                var i, n, r = -1,
                    s = e[1],
                    o = 0,
                    l = 7,
                    h = 4;
                for (0 === s && (l = 138, h = 3), i = 0; i <= a; i++)
                    if (n = s, s = e[2 * (i + 1) + 1], !(++o < l && n === s)) {
                        if (o < h)
                            for (; L(t, n, t.bl_tree), 0 != --o;);
                        else 0 !== n ? (n !== r && (L(t, n, t.bl_tree), o--), L(t, p, t.bl_tree), F(t, o - 3, 2)) : o <= 10 ? (L(t, v, t.bl_tree), F(t, o - 3, 3)) : (L(t, k, t.bl_tree), F(t, o - 11, 7));
                        r = n, (o = 0) === s ? (l = 138, h = 3) : n === s ? (l = 6, h = 3) : (l = 7, h = 4)
                    }
            }
            i(D);
            var J = !1;

            function Q(t, e, a, i) {
                var n, r, s, o;
                F(t, (d << 1) + (i ? 1 : 0), 3), r = e, s = a, o = !0, M(n = t), o && (T(n, s), T(n, ~s)), l.arraySet(n.pending_buf, n.window, r, s, n.pending), n.pending += s
            }
            a._tr_init = function(t) {
                J || (function() {
                    var t, e, a, i, n, r = new Array(m + 1);
                    for (i = a = 0; i < s - 1; i++)
                        for (R[i] = a, t = 0; t < 1 << y[i]; t++) Z[a++] = i;
                    for (Z[a - 1] = i, i = n = 0; i < 16; i++)
                        for (D[i] = n, t = 0; t < 1 << x[i]; t++) A[n++] = i;
                    for (n >>= 7; i < u; i++)
                        for (D[i] = n << 7, t = 0; t < 1 << x[i] - 7; t++) A[256 + n++] = i;
                    for (e = 0; e <= m; e++) r[e] = 0;
                    for (t = 0; t <= 143;) S[2 * t + 1] = 8, t++, r[8]++;
                    for (; t <= 255;) S[2 * t + 1] = 9, t++, r[9]++;
                    for (; t <= 279;) S[2 * t + 1] = 7, t++, r[7]++;
                    for (; t <= 287;) S[2 * t + 1] = 8, t++, r[8]++;
                    for (j(S, _ + 1, r), t = 0; t < u; t++) E[2 * t + 1] = 5, E[2 * t] = H(t, 5);
                    C = new I(S, y, f + 1, _, m), N = new I(E, x, 0, u, m), O = new I(new Array(0), z, 0, c, b)
                }(), J = !0), t.l_desc = new r(t.dyn_ltree, C), t.d_desc = new r(t.dyn_dtree, N), t.bl_desc = new r(t.bl_tree, O), t.bi_buf = 0, t.bi_valid = 0, K(t)
            }, a._tr_stored_block = Q, a._tr_flush_block = function(t, e, a, i) {
                var n, r, s = 0;
                0 < t.level ? (2 === t.strm.data_type && (t.strm.data_type = function(t) {
                    var e, a = 4093624447;
                    for (e = 0; e <= 31; e++, a >>>= 1)
                        if (1 & a && 0 !== t.dyn_ltree[2 * e]) return o;
                    if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return h;
                    for (e = 32; e < f; e++)
                        if (0 !== t.dyn_ltree[2 * e]) return h;
                    return o
                }(t)), G(t, t.l_desc), G(t, t.d_desc), s = function(t) {
                    var e;
                    for (X(t, t.dyn_ltree, t.l_desc.max_code), X(t, t.dyn_dtree, t.d_desc.max_code), G(t, t.bl_desc), e = c - 1; 3 <= e && 0 === t.bl_tree[2 * B[e] + 1]; e--);
                    return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                }(t), n = t.opt_len + 3 + 7 >>> 3, (r = t.static_len + 3 + 7 >>> 3) <= n && (n = r)) : n = r = a + 5, a + 4 <= n && -1 !== e ? Q(t, e, a, i) : 4 === t.strategy || r === n ? (F(t, 2 + (i ? 1 : 0), 3), q(t, S, E)) : (F(t, 4 + (i ? 1 : 0), 3), function(t, e, a, i) {
                    var n;
                    for (F(t, e - 257, 5), F(t, a - 1, 5), F(t, i - 4, 4), n = 0; n < i; n++) F(t, t.bl_tree[2 * B[n] + 1], 3);
                    W(t, t.dyn_ltree, e - 1), W(t, t.dyn_dtree, a - 1)
                }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1), q(t, t.dyn_ltree, t.dyn_dtree)), K(t), i && M(t)
            }, a._tr_tally = function(t, e, a) {
                return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & a, t.last_lit++, 0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (Z[a] + f + 1)]++, t.dyn_dtree[2 * U(e)]++), t.last_lit === t.lit_bufsize - 1
            }, a._tr_align = function(t) {
                var e;
                F(t, 2, 3), L(t, w, S), 16 === (e = t).bi_valid ? (T(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
            }
        }, {
            "../utils/common": 3
        }],
        15: [function(t, e, a) {
            "use strict";
            e.exports = function() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
        }, {}],
        "/": [function(t, e, a) {
            "use strict";
            var i = {};
            (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = i
        }, {
            "./lib/deflate": 1,
            "./lib/inflate": 2,
            "./lib/utils/common": 3,
            "./lib/zlib/constants": 6
        }]
    }, {}, [])("/")
});