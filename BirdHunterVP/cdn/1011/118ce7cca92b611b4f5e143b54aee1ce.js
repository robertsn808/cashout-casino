var __reflect = this && this.__reflect || function(t, e, i) {
        t.__class__ = e, i ? i.push(e) : i = [e], t.__types__ = t.__types__ ? i.concat(t.__types__) : i
    },
    __extends = this && this.__extends || function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
        i.prototype = e.prototype, t.prototype = new i
    },
    __awaiter = this && this.__awaiter || function(t, e, i, s) {
        return new(i || (i = Promise))(function(n, o) {
            function a(t) {
                try {
                    h(s.next(t))
                } catch (e) {
                    o(e)
                }
            }

            function r(t) {
                try {
                    h(s["throw"](t))
                } catch (e) {
                    o(e)
                }
            }

            function h(t) {
                t.done ? n(t.value) : new i(function(e) {
                    e(t.value)
                }).then(a, r)
            }
            h((s = s.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        function i(t) {
            return function(e) {
                return s([t, e])
            }
        }

        function s(i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (n = 1, o && (a = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(a = a.call(o, i[1])).done) return a;
                switch (o = 0, a && (i = [0, a.value]), i[0]) {
                    case 0:
                    case 1:
                        a = i;
                        break;
                    case 4:
                        return h.label++, {
                            value: i[1],
                            done: !1
                        };
                    case 5:
                        h.label++, o = i[1], i = [0];
                        continue;
                    case 7:
                        i = h.ops.pop(), h.trys.pop();
                        continue;
                    default:
                        if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                            h.label = i[1];
                            break
                        }
                        if (6 === i[0] && h.label < a[1]) {
                            h.label = a[1], a = i;
                            break
                        }
                        if (a && h.label < a[2]) {
                            h.label = a[2], h.ops.push(i);
                            break
                        }
                        a[2] && h.ops.pop(), h.trys.pop();
                        continue
                }
                i = e.call(t, h)
            } catch (s) {
                i = [6, s], o = 0
            } finally {
                n = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {
                value: i[0] ? i[1] : void 0,
                done: !0
            }
        }
        var n, o, a, r, h = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: i(0),
            "throw": i(1),
            "return": i(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r
    },
    Vector2 = function() {
        function t(t, e) {
            this.x = t || 0, this.y = e || 0
        }
        return t.prototype.sub = function(e) {
            return new t(this.x - e.x, this.y - e.y)
        }, t.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y
        }, t
    }();
__reflect(Vector2.prototype, "Vector2");
var Fish = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._uid = 0, e._rate = 0, e._type = 0, e._state = 0, e._routeid = 0, e.frameIdx = 0, e.createTime = 0, e.disappearedTime = 0, e.lastTime = 0, e.caughtBySpecial = null, e.bombType = 0, e.fishConfig = null, e
    }
    return __extends(e, t), e.prototype.init = function(t) {
        if (this._uid = t.uid, this._routeid = t.routeid, this._type = t.classid, this._rate = t.rate, this._offsetType = t.offsettype, this._offsetX = t.offsetx, this._offsetY = t.offsety, this._offsetR = t.offsetr, this._state = e.FREE, this.frameIdx = 0, this.bombType = 0, this.fishConfig = GameUtil.getFishConfig(this._type), this.fishConfig || LogManager.Error("cannot find fish config which fishtype = " + this._type), 3 != this._offsetType && 4 != this._offsetType) {
             var i = RES.getRes("routes_json")[this._routeid - 1];
/*var rt=Math.floor(Math.random() * (30 - 10 + 1)) + 10;
			i.line[i.line.length-1].t=rt*1000;
			i.alivetime=rt*1000;*/
            this.originalLine = i.line, this.line = this.originalLine.concat()
        }
        this.createTime = t.born_time, this.disappearedTime = t.dead_time, this.lastTime = Game.instance.serverTime;
        var s;
        s = Game.instance.freezeEndTime > Game.instance.serverTime && Game.instance.serverTime > Game.instance.freezeStartTime + GameUtil.FREEZEBUFFERTIME ? this.getFishActualState(Game.instance.freezeStartTime + GameUtil.FREEZEBUFFERTIME) : this.getFishActualState(Game.instance.serverTime), this.x = s.x, this.y = s.y, this.rotation = s.r, this.alpha = 1, this.filters = [], this.scaleX = 1, this.scaleY = 1
    }, e.prototype.handleOffset = function(t, e, i) {
        if (1 === this._offsetType) t += this._offsetX, e += this._offsetY;
        else if (2 === this._offsetType) {
            var s = t - this._offsetX,
                n = e - this._offsetY,
                o = GameUtil.calculateRotation(0, 0, s, n),
                a = (this._offsetR + o) * Math.PI / 180,
                r = Math.sqrt(s * s + n * n);
            t = r * Math.cos(a) + this._offsetX, e = r * Math.sin(a) + this._offsetY, i += this._offsetR
        }
        return {
            x: t,
            y: e,
            r: i
        }
    }, e.prototype.curveCoordinate3 = function(t) {
        if (t > 0) {
            var e = .05238 * t * .01,
                i = 0,
                s = 0,
                n = 0,
                o = 0,
                a = 0,
                r = 0,
                h = 0,
                c = 0;
            return 3.17 > e ? (i = 27 * e, s = i * Math.sin(e), n = i * Math.cos(e), h = (this._offsetR + 270) * Math.PI / 180, r = this._offsetR + 270) : 5.6 > e ? (i = 27 * (e - 3.17), 60 >= i ? (s = Math.sqrt(3600 - i * i) - 60, n = -i - 83) : 120 >= i && (s = -Math.sqrt(i * i - 3600) - 60, n = -203 + i), h = (GameUtil.calculateRotation(0, 0, s, n) + this._offsetR) * Math.PI / 180, e += .01, i = 27 * (e - 3.17), 60 >= i ? (o = Math.sqrt(3600 - i * i) - 60, a = -i - 83) : 120 >= i && (o = -Math.sqrt(i * i - 3600) - 60, a = -203 + i), r = GameUtil.calculateRotation(s, n, o, a) + this._offsetR) : (i = 29 * e, s = i * Math.sin(e), n = i * Math.cos(e), h = (GameUtil.calculateRotation(0, 0, s, n) + this._offsetR + 108) * Math.PI / 180, e += .01, i = 29 * e, o = i * Math.sin(e), a = i * Math.cos(e), r = GameUtil.calculateRotation(s, n, o, a) + this._offsetR + 108), c = Math.sqrt(s * s + n * n), s = c * Math.cos(h), n = c * Math.sin(h), {
                x: Math.floor(s) + GameUtil.STAGEWIDTHHALF,
                y: Math.floor(n) + GameUtil.STAGEHEIGHTHALF,
                r: r
            }
        }
        return {
            x: -200,
            y: -200,
            r: 0
        }
    }, e.prototype.curveCoordinate4 = function(t) {
        if (t > 0) {
            var e = (-90 / 35e3 * t + 90) * Math.PI / 180,
                i = GameUtil.QUEUERADIUS4 * Math.cos(e),
                s = GameUtil.QUEUERADIUS4 * Math.sin(e),
                n = -90 / 35e3 * t + this._offsetR,
                o = i - 0,
                a = s - GameUtil.QUEUERADIUS4,
                r = Math.sqrt(o * o + a * a),
                h = GameUtil.calculateRotation(0, 0, o, a);
            return e = (this._offsetR + h) * Math.PI / 180, i = r * Math.cos(e) + 0, s = r * Math.sin(e) + GameUtil.QUEUERADIUS4, {
                x: Math.floor(i) + GameUtil.STAGEWIDTHHALF,
                y: Math.floor(s) - 280,
                r: n
            }
        }
        return {
            x: -200,
            y: -200,
            r: 0
        }
    }, e.prototype.getFishActualState = function(t) {
        var e = t - this.createTime;
        if (3 === this._offsetType) return this.curveCoordinate3(e);
        if (4 === this._offsetType) return this.curveCoordinate4(e);
        if (e >= 0) {
            for (; this.line.length;) {
                var i = this.line[0];
                if (!(i.t <= e)) {
                    if (this.lastTerm) {
                        var s = i.t - this.lastTerm.t;
                        if (0 >= s) return this.lineError();
                        var n = e - this.lastTerm.t;
                        return this.handleOffset(this.lastTerm.x + Math.floor((i.x - this.lastTerm.x) / s * n), this.lastTerm.y + Math.floor((i.y - this.lastTerm.y) / s * n), this.lastTerm.r + Math.floor((i.r - this.lastTerm.r) / s * n))
                    }
                    return this.lineError()
                }
                this.lastTerm = i, this.line.shift()
            }
            return this.lastTerm && this.lastTerm.t > 0 ? this.handleOffset(this.lastTerm.x, this.lastTerm.y, this.lastTerm.r) : this.lineError()
        }
        if (this.line && this.line.length) {
            var i = this.line[0];
            return this.handleOffset(i.x, i.y, i.r)
        }
        return this.lineError()
    }, e.prototype.getFishFutureState = function(t) {
        var e = t - this.createTime;
        if (3 === this._offsetType) return this.curveCoordinate3(e);
        if (4 === this._offsetType) return this.curveCoordinate4(e);
        if (e >= 0) {
            for (var i = null, s = this.originalLine.concat(); s.length;) {
                var n = s[0];
                if (!(n.t <= e)) {
                    if (i) {
                        var o = n.t - i.t;
                        if (0 >= o) return this.lineError();
                        var a = e - i.t;
                        return this.handleOffset(i.x + Math.floor((n.x - i.x) / o * a), i.y + Math.floor((n.y - i.y) / o * a), i.r + Math.floor((n.r - i.r) / o * a))
                    }
                    return this.lineError()
                }
                i = n, s.shift()
            }
            var r = this.originalLine[this.originalLine.length - 1];
            return this.handleOffset(r.x, r.y, r.r)
        }
        var r = this.originalLine[0];
        return this.handleOffset(r.x, r.y, r.r)
    }, e.prototype.lineError = function() {
        return LogManager.Error("曲线配置错误", this._routeid, this.line), alert("曲线配置错误，请检查id=" + this._routeid + "的曲线"), {
            x: this.x,
            y: this.y,
            r: this.rotation
        }
    }, e.prototype.escape = function(t) {
        if (this._state = e.ESCAPE, this.alpha <= .01) return !0;
        if (this.createTime > Game.instance.changeMapTime) return !0;
        var i = this.getFishActualState(t);
        this.x = i.x, this.y = i.y, this.rotation = i.r;
        var s = t - Game.instance.changeMapTime;
        return this.alpha = 1 - Math.max(Math.min(s / GameUtil.ESCAPTIME, 1), 0), !1
    }, e.prototype.freeUpdate = function(t) {
        if (t < this.createTime) return Game.instance.sceneState === GameUtil.CHANGEMAPING ? !0 : !1;
        if (Game.instance.sceneState === GameUtil.CHANGEMAPING) return this.updateFrame(t), this.escape(t);
        if (this.disappearedTime <= t && !(Game.instance.freezeEndTime > t && t > Game.instance.freezeStartTime + GameUtil.FREEZEBUFFERTIME)) return !0;
        if (this._state == e.ESCAPE) return !0;
        if (this.updateFrame(t), Game.instance.freezeEndTime > t && t > Game.instance.freezeStartTime + GameUtil.FREEZEBUFFERTIME) return !1;
        var i = this.getFishActualState(t);
        return this.x = i.x, this.y = i.y, this.rotation = i.r, !1
    }, e.prototype.changeRate = function(t) {}, e.prototype.updateFrame = function(t) {}, e.prototype.caughtedUpdate = function(t) {
        return !0
    }, e.prototype.beCaught = function(t, i, s) {
        void 0 === s && (s = null), this.frameIdx = 0, this._state = e.CAPTURED, this.disappearedTime = Game.instance.serverTime + t, this.caughtBySpecial = s
    }, e.prototype.beCaughtByBomb = function(t, i, s) {
        this.frameIdx = 0, this._state = e.CAPTURED, this.disappearedTime = Game.instance.serverTime + t, this.bombType = s
    }, e.prototype.getAtlasIndex = function(t, i, s) {
        if (null == t) return -1;
        var n = 0;
        i = s === e.FREE ? i : i + t.freeFrames;
        for (var o = t.frameAtlas, a = 0; a < o.length && !(o[a].frame > i); ++a) n = a;
        return o[n].atlas
    }, e.prototype.getRealTimeModel = function() {
        return []
    }, Object.defineProperty(e.prototype, "uid", {
        get: function() {
            return this._uid
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "type", {
        get: function() {
            return this._type
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "routeid", {
        get: function() {
            return this._routeid
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "config", {
        get: function() {
            return this.fishConfig
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
        get: function() {
            return this._state
        },
        set: function(t) {
            this._state = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "rate", {
        get: function() {
            return this._rate
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.resetCreateTime = function(t) {
        this.createTime += t, this.disappearedTime += t
    }, e.prototype.lock = function() {}, e.prototype.unLock = function() {}, e.prototype.beClicked = function(t, e) {
        return !1
    }, Object.defineProperty(e.prototype, "body", {
        get: function() {
            return this.bitmap
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.getObbs = function() {
        for (var t = this.getRealTimeModel(), e = [], i = t.length - 1; i >= 0; --i) {
            var s = t[i],
                n = new Obb(new Vector2(s.x, s.y), s.cw, s.ch, s.r);
            e.push(n)
        }
        return e
    }, e.prototype.isOutOfBounds = function(t) {
        var e = new Obb(new Vector2(this.x, this.y), this.width, this.height, this.rotation),
            i = CollisionDetector.detectorOBBvsOBB(t, e);
        return !i
    }, Object.defineProperty(e.prototype, "sonType", {
        get: function() {
            return 0
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.rangeLevel = function() {
        switch (this._type) {
            case 28:
            case 29:
            case 27:
            case 25:
                return 1;
            case 26:
                return 3;
            case 24:
                return 2;
            case 21:
            case 22:
            case 23:
                return 4;
            default:
                return 0
        }
    }, e.prototype.release = function() {
        this._state = e.DIE, this.caughtBySpecial = null, this.parent && this.parent.removeChild(this)
    }, e.ID = 0, e.FREE = 1, e.CAPTURED = 2, e.DIE = 3, e.ESCAPE = 4, e
}(egret.Sprite);
__reflect(Fish.prototype, "Fish", ["ObjectInterface"]);
var Obb = function() {
    function t(t, e, i, s) {
        this.centerPoint = t, this.extents = [e / 2, i / 2];
        var n = s * Math.PI / 180;
        this.axes = [new Vector2(Math.cos(n), Math.sin(n)), new Vector2(-1 * Math.sin(n), Math.cos(n))], this._width = e, this._height = i, this._rotation = s
    }
    return Object.defineProperty(t.prototype, "x", {
        get: function() {
            return this.centerPoint.x
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "y", {
        get: function() {
            return this.centerPoint.y
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rotation", {
        get: function() {
            return this._rotation
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "width", {
        get: function() {
            return this._width
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "height", {
        get: function() {
            return this._height
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getProjectionRadius = function(t) {
        return this.extents[0] * Math.abs(t.dot(this.axes[0])) + this.extents[1] * Math.abs(t.dot(this.axes[1]))
    }, t
}();
__reflect(Obb.prototype, "Obb");
var Effect = function() {
    function t() {
        this._clientID = 0, this._bombID = 0
    }
    return t.prototype.init = function(t, e, i) {
        this._clientID = Game.instance.clientUID, this._bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), i.addChild(this._bitmap), this._bitmap.x = t, this._bitmap.y = e
    }, t.prototype.trigger = function() {}, Object.defineProperty(t.prototype, "pos", {
        get: function() {
            return this._pos
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "clientID", {
        get: function() {
            return this._clientID
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bombID", {
        get: function() {
            return this._bombID
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.update = function(t) {
        return !0
    }, t.prototype.release = function() {
        this._bitmap.texture = null, DisplayObjectPool.instance.putInPool(this._bitmap), this._bitmap = null
    }, t
}();
__reflect(Effect.prototype, "Effect", ["ObjectInterface"]);
var GameUtil = function() {
    function t() {}
    return t.arrayToChar = function(t) {
        for (var e = "", i = t.length, s = 0; i > s; ++s) e += String.fromCharCode(t[s]);
        return e
    }, t.ChargeScore = function(t) {
        return Math.floor(t * this.COINRATE / 1e3)
    }, t.getFishConfig = function(t) {
        for (var e = 0, i = this.FISHCONFIGS; e < i.length; e++) {
            var s = i[e];
            if (t == s.type) return s
        }
        return null
    }, t.getEffectAtlasByIndex = function(t, e) {
        if (null == t) return -1;
        for (var i = 0, s = t.atlas, n = 0; n < s.length && !(s[n].frame > e); ++n) i = n;
        return s[i].atlas
    }, t.getEffectConfig = function(t) {
        if ("number" == typeof t) return this.EFFECTCONFIG[t];
        for (var e = 0, i = this.EFFECTCONFIG; e < i.length; e++) {
            var s = i[e];
            if (s.name == t) return s
        }
        return null
    }, t.calculateRotation = function(t, e, i, s) {
        var n = 0;
        if (i - t === 0) n = s > e ? 90 : 270;
        else {
            var o = 180 * Math.atan(Math.abs(s - e) / Math.abs(i - t)) / Math.PI;
            n = s > e ? i > t ? o : 180 - o : i > t ? (360 - o) % 360 : 180 + o
        }
        return n
    }, t.getElasticOut = function(t, e) {
        void 0 === e && (e = -4.5);
        var i = 2 * Math.PI,
            s = .3,
            n = 1,
            o = s / i * Math.asin(1 / n);
        return n * Math.pow(2, e * t) * Math.sin((t - o) * i / s) + 1
    }, t.getBackOut = function(t, e) {
        return void 0 === e && (e = 10), --t * t * ((e + 1) * t + e) + 1
    }, t.getBackIn = function(t, e) {
        return void 0 === e && (e = 10), t * t * ((e + 1) * t - e)
    }, t.getQuadIn = function(t) {
        return egret.Ease.quadIn(t)
    }, t.getQuadOut = function(t) {
        return egret.Ease.quadOut(t)
    }, t.getBounceOut = function(t) {
        return 1 / 2.75 > t ? 1 - 7.5625 * (t -= .5 / 2.75) * t * 4 : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, t.randomInt = function(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = 100), Math.floor(Math.random() * (e - t) + t)
    }, t.angle2Radian = function(t) {
        return t * Math.PI / 180
    }, t.calculateDistance = function(t, e, i, s) {
        var n = i - t,
            o = s - e;
        return Math.sqrt(n * n + o * o)
    }, t.getPoint = function(e, i, s) {
        var n = e.getBoundingClientRect();
        return document.body.clientWidth > document.body.clientHeight ? {
            x: (i - n.left) / (n.width / t.STAGEWIDTH),
            y: (s - n.top) / (n.height / t.STAGEHEIGHT)
        } : {
            x: (s - n.top) / (n.height / t.STAGEWIDTH),
            y: -(i - n.left) / (n.width / t.STAGEHEIGHT) + t.STAGEHEIGHT
        }
    }, t.getQueryVariable = function(t) {
        for (var e = window.location.search.substring(1), i = e.split("&"), s = 0; s < i.length; s++) {
            var n = i[s].split("=");
            if (n[0] == t) return n[1]
        }
        return "0"
    }, t.splicingText = function(t, e) {
        for (var i = e.length, s = 0; i > s; ++s) t = t.replace("{" + s + "}", e[s]);
        return t
    }, Object.defineProperty(t, "token", {
        get: function() {
            var t = window.sessionToken;
            return t
        },
        enumerable: !0,
        configurable: !0
    }), t.toHome = function(t) {
        window.skdm ? (window.skdm.Home(), Music.instance.closeBGM()) : BannerFactory.instance.showText(Lang.getTextByKey(t))
    }, t.showDialog = function(t, e, i) {
        window.skdm && window.skdm.Msg(t, function() {
            e && i && e.call(i)
        })
    }, t.replaceString = function(t, e, i) {
        void 0 === e && (e = null), void 0 === i && (i = "$");
        var s = 1,
            n = i,
            o = "";
        if (e && e.length > 0)
            for (var a = void 0, r = 0; r < e.length; r++) o = n + s, a = e[r], t = t.replace(o, a), s++;
        return t
    }, t.STAGEWIDTH = 1136, t.STAGEHEIGHT = 640, t.STAGEWIDTHHALF = 568, t.STAGEHEIGHTHALF = 320, t.BULLETSPEED = .8, t.COINSPEED = .8, t.SquirrelSpeed = .8, t.RESETFILTERS = [], t.DEEPFILTER = new egret.ColorMatrixFilter([1, 0, 0, 0, -25, 0, 1, 0, 0, -25, 0, 0, 1, 0, -25, 0, 0, 0, 1, 0]), t.DEEPENFILTERS = [t.DEEPFILTER], t.GameOBB = new Obb(new Vector2(t.STAGEWIDTHHALF, t.STAGEHEIGHTHALF), t.STAGEWIDTH, t.STAGEHEIGHT, 0), t.GLOWFILTER = new egret.GlowFilter(3394815, 1, 15, 15, 2, 3, !1, !1), t.STRUGGLETIME = 1200, t.SPECIALTIME = 800, t.SCALETIME = 700, t.COINRATE = 1, t.COLORFILTER = new egret.ColorMatrixFilter([1, 0, 0, 0, 130, 0, 1, 0, 0, 130, 0, 0, 1, 0, 130, 0, 0, 0, 1, 0]), t.TRISTARRADIUS = 96, t.TRISTARANGLES = [0, 120, 240], t.FOURUNITRADIUS = 108, t.FOURUNITANGLES = [0, 90, 180, 270], t.FISHATLAS = 6, t.FISHCONFIGS = [{
        type: 1,
        kind: 0,
        freeFrames: 10,
        capturedFrames: 4,
        frameTime: 40,
        cx: 47,
        cy: 77,
        unit: 1,
        layer: 1,
        scale: 1,
        unitScale: 5,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 47,
                y: 77,
                w: 75,
                h: 46
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 2,
        kind: 0,
        freeFrames: 7,
        capturedFrames: 4,
        frameTime: 40,
        cx: 64,
        cy: 71,
        unit: 1,
        layer: 3,
        scale: 1,
        unitScale: 4.2,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 64,
                y: 71,
                w: 94,
                h: 54
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 3
        }]
    }, {
        type: 3,
        kind: 0,
        freeFrames: 19,
        capturedFrames: 4,
        frameTime: 40,
        cx: 61,
        cy: 101,
        unit: 1,
        layer: 4,
        scale: 1,
        unitScale: 3.9,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 61,
                y: 101,
                w: 100,
                h: 58
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 4
        }]
    }, {
        type: 4,
        kind: 0,
        freeFrames: 11,
        capturedFrames: 4,
        frameTime: 40,
        cx: 68,
        cy: 88,
        unit: 1,
        layer: 5,
        scale: 1,
        unitScale: 3,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 68,
                y: 88,
                w: 108,
                h: 82
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 5
        }]
    }, {
        type: 5,
        kind: 0,
        freeFrames: 4,
        capturedFrames: 4,
        frameTime: 40,
        cx: 87,
        cy: 139,
        unit: 1,
        layer: 0,
        scale: 1,
        unitScale: 2.3,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 87,
                y: 139,
                w: 148,
                h: 106
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 0
        }]
    }, {
        type: 6,
        kind: 0,
        freeFrames: 12,
        capturedFrames: 4,
        frameTime: 40,
        cx: 80,
        cy: 129,
        unit: 1,
        layer: 1,
        scale: 1,
        unitScale: 2.6,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 80,
                y: 129,
                w: 104,
                h: 76
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 7,
        kind: 0,
        freeFrames: 15,
        capturedFrames: 4,
        frameTime: 40,
        cx: 100,
        cy: 130,
        unit: 1,
        layer: 5,
        scale: 1,
        unitScale: 2.7,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 100,
                y: 130,
                w: 128,
                h: 76
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 5
        }]
    }, {
        type: 8,
        kind: 0,
        freeFrames: 19,
        capturedFrames: 4,
        frameTime: 40,
        cx: 95,
        cy: 177,
        unit: 1,
        layer: 3,
        scale: 1,
        unitScale: 2.1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 95,
                y: 177,
                w: 152,
                h: 90
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 3
        }]
    }, {
        type: 9,
        kind: 1,
        freeFrames: 16,
        capturedFrames: 4,
        frameTime: 40,
        cx: 119,
        cy: 171,
        unit: 1,
        layer: 5,
        scale: 1,
        unitScale: 2.1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 119,
                y: 171,
                w: 136,
                h: 84
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 5
        }]
    }, {
        type: 10,
        kind: 1,
        freeFrames: 15,
        capturedFrames: 4,
        frameTime: 40,
        cx: 85,
        cy: 151,
        unit: 1,
        layer: 0,
        scale: 1,
        unitScale: 2.4,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 85,
                y: 151,
                w: 126,
                h: 62
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 0
        }]
    }, {
        type: 11,
        kind: 1,
        freeFrames: 14,
        capturedFrames: 4,
        frameTime: 40,
        cx: 94,
        cy: 143,
        unit: 1,
        layer: 1,
        scale: 1,
        unitScale: 2.1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 94,
                y: 143,
                w: 124,
                h: 76
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 12,
        kind: 1,
        freeFrames: 15,
        capturedFrames: 4,
        frameTime: 40,
        cx: 110,
        cy: 157,
        unit: 1,
        layer: 5,
        scale: 1,
        unitScale: 1.6,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 110,
                y: 157,
                w: 172,
                h: 92
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 5
        }]
    }, {
        type: 13,
        kind: 1,
        freeFrames: 15,
        capturedFrames: 4,
        frameTime: 40,
        cx: 119,
        cy: 182,
        unit: 1,
        layer: 3,
        scale: 1,
        unitScale: 1.7,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 119,
                y: 182,
                w: 144,
                h: 86
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 3
        }]
    }, {
        type: 14,
        kind: 1,
        freeFrames: 15,
        capturedFrames: 4,
        frameTime: 40,
        cx: 117,
        cy: 188,
        unit: 1,
        layer: 5,
        scale: 1,
        unitScale: 2,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 117,
                y: 188,
                w: 80,
                h: 160
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 5
        }]
    }, {
        type: 15,
        kind: 2,
        freeFrames: 15,
        capturedFrames: 4,
        frameTime: 40,
        cx: 124,
        cy: 180,
        unit: 1,
        layer: 1,
        scale: 1,
        unitScale: 1.5,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 124,
                y: 180,
                w: 166,
                h: 74
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 16,
        kind: 2,
        freeFrames: 15,
        capturedFrames: 4,
        frameTime: 40,
        cx: 127,
        cy: 160,
        unit: 1,
        layer: 5,
        scale: 1,
        unitScale: 1.5,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 127,
                y: 160,
                w: 176,
                h: 74
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 5
        }]
    }, {
        type: 17,
        kind: 2,
        freeFrames: 12,
        capturedFrames: 4,
        frameTime: 40,
        cx: 202,
        cy: 197,
        unit: 1,
        layer: 3,
        scale: 1,
        unitScale: 1.2,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 202,
                y: 197,
                w: 132,
                h: 114
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 3
        }]
    }, {
        type: 18,
        kind: 2,
        freeFrames: 12,
        capturedFrames: 4,
        frameTime: 40,
        cx: 223,
        cy: 261,
        unit: 1,
        layer: 0,
        scale: 1,
        unitScale: 1.3,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 223,
                y: 261,
                w: 178,
                h: 114
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 0
        }]
    }, {
        type: 19,
        kind: 3,
        freeFrames: 12,
        capturedFrames: 2,
        frameTime: 40,
        cx: 253,
        cy: 243,
        unit: 1,
        layer: 1,
        scale: 1,
        unitScale: 1.1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 253,
                y: 243,
                w: 234,
                h: 160
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 20,
        kind: 3,
        freeFrames: 12,
        capturedFrames: 2,
        frameTime: 40,
        cx: 362,
        cy: 388,
        unit: 1,
        layer: 3,
        scale: 1,
        unitScale: .9,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 362,
                y: 388,
                w: 264,
                h: 256
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 3
        }]
    }, {
        type: 21,
        kind: 4,
        freeFrames: 19,
        capturedFrames: 0,
        frameTime: 40,
        cx: 569,
        cy: 575,
        unit: 1,
        layer: 4,
        scale: 2,
        unitScale: .4,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 569,
                y: 575,
                w: 549,
                h: 519
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 4
        }]
    }, {
        type: 22,
        kind: 5,
        freeFrames: 1,
        capturedFrames: 0,
        frameTime: 40,
        cx: 127,
        cy: 127,
        unit: 3,
        layer: 1,
        scale: 1,
        unitScale: 1.5,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 166,
                y: 127,
                w: 160,
                h: 64
            }, {
                x: 94,
                y: 127,
                w: 86,
                h: 196
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 23,
        kind: 5,
        freeFrames: 1,
        capturedFrames: 0,
        frameTime: 40,
        cx: 125,
        cy: 126,
        unit: 4,
        layer: 1,
        scale: 1,
        unitScale: 1.1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 125,
                y: 126,
                w: 250,
                h: 74
            }, {
                x: 125,
                y: 126,
                w: 74,
                h: 252
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 24,
        kind: 5,
        freeFrames: 14,
        capturedFrames: 0,
        frameTime: 40,
        cx: 111,
        cy: 111,
        unit: 2,
        layer: 5,
        scale: 1,
        unitScale: 1.7,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 111,
                y: 111,
                w: 160,
                h: 160
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 5
        }]
    }, {
        type: 25,
        kind: 5,
        freeFrames: 38,
        capturedFrames: 32,
        frameTime: 40,
        cx: 231,
        cy: 240,
        unit: 1,
        layer: 2,
        scale: 2,
        unitScale: 1.3,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 231,
                y: 240,
                w: 216,
                h: 212
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 3
        }, {
            frame: 9,
            atlas: 2
        }]
    }, {
        type: 26,
        kind: 5,
        freeFrames: 11,
        capturedFrames: 0,
        frameTime: 40,
        cx: 240,
        cy: 386,
        unit: 1,
        layer: 0,
        scale: 1,
        unitScale: 1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 240,
                y: 386,
                w: 204,
                h: 350
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 0
        }, {
            frame: 8,
            atlas: 1
        }]
    }, {
        type: 27,
        kind: 5,
        freeFrames: 3,
        capturedFrames: 0,
        frameTime: 90,
        cx: 125,
        cy: 151,
        unit: 1,
        layer: 1,
        scale: 1,
        unitScale: 1.5,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 125,
                y: 151,
                w: 178,
                h: 236
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 28,
        kind: 5,
        freeFrames: 0,
        capturedFrames: 0,
        frameTime: 40,
        cx: 90,
        cy: 90,
        unit: 2,
        layer: 1,
        scale: 1,
        unitScale: 1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 90,
                y: 90,
                w: 180,
                h: 180
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        type: 29,
        kind: 5,
        freeFrames: 0,
        capturedFrames: 0,
        frameTime: 40,
        cx: 50,
        cy: 50,
        unit: 2,
        layer: 1,
        scale: 1,
        unitScale: 1,
        frameCollides: [{
            frame: 0,
            rects: [{
                x: 50,
                y: 50,
                w: 100,
                h: 100
            }]
        }],
        frameAtlas: [{
            frame: 0,
            atlas: 1
        }]
    }], t.BULLETCONFIG = [{
        id: 1,
        cx: 52,
        cy: 38,
        cw: 53,
        ch: 20,
        atlas: 0
    }, {
        id: 2,
        cx: 52,
        cy: 38,
        cw: 53,
        ch: 28,
        atlas: 0
    }, {
        id: 3,
        cx: 52,
        cy: 38,
        cw: 53,
        ch: 35,
        atlas: 0
    }, {
        id: 4,
        cx: 52,
        cy: 38,
        cw: 53,
        ch: 50,
        atlas: 1
    }], t.EFFECTCONFIG = [{
        id: 0,
        name: "bossEffect",
        frame: 45,
        frameTime: 70,
        scale: 3,
        atlas: [{
            frame: 0,
            atlas: 0
        }]
    }, {
        id: 1,
        name: "bombCoin",
        frame: 16,
        frameTime: 50,
        scale: 2,
        atlas: [{
            frame: 0,
            atlas: 0
        }, {
            frame: 11,
            altas: 1
        }]
    }, {
        id: 2,
        name: "bombDrum",
        frame: 35,
        frameTime: 70,
        scale: 2,
        atlas: [{
            frame: 0,
            atlas: 1
        }]
    }, {
        id: 3,
        name: "bombBarrel",
        frame: 20,
        frameTime: 100,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 1
        }, {
            frame: 6,
            atlas: 2
        }]
    }, {
        id: 4,
        name: "bombBarrelFire",
        frame: 20,
        frameTime: 100,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 5,
        name: "batteryBomb",
        frame: 5,
        frameTime: 70,
        scale: 2,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 6,
        name: "batteryFire",
        frame: 6,
        frameTime: 70,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 7,
        name: "uiScoreBG",
        frame: 12,
        frameTime: 50,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 8,
        name: "hitFish_1",
        frame: 6,
        frameTime: 70,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }, {
            frame: 5,
            atlas: 3
        }]
    }, {
        id: 9,
        name: "flySquirrel_0",
        frame: 7,
        frameTime: 70,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 10,
        name: "flySquirrel_1",
        frame: 7,
        frameTime: 70,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 11,
        name: "flySquirrel_2",
        frame: 7,
        frameTime: 70,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 12,
        name: "flySquirrel_3",
        frame: 7,
        frameTime: 70,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 13,
        name: "flySquirrel_4",
        frame: 7,
        frameTime: 70,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 2
        }]
    }, {
        id: 14,
        name: "bombScreen",
        frame: 57,
        frameTime: 50,
        scale: 3,
        atlas: [{
            frame: 0,
            atlas: 3
        }, {
            frame: 53,
            atlas: 4
        }]
    }, {
        id: 15,
        name: "firePhoenix",
        frame: 10,
        frameTime: 50,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 4
        }]
    }, {
        id: 16,
        name: "fireCircle",
        frame: 1,
        frameTime: 50,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 4
        }]
    }, {
        id: 17,
        name: "burnPhoenix",
        frame: 2,
        frameTime: 2e3,
        scale: 1,
        atlas: [{
            frame: 0,
            atlas: 4
        }]
    }], t.ROOMRATE = [1, 10, 100], t.maxBulletCount = 15, t.ESCAPTIME = 2500, t.FREEZETIME = 7e3, t.FREEZEBUFFERTIME = 0, t.FISHGROUP = 0, t.MAPNORMAL = 1, t.CHANGEMAPING = 2, t.QUEUERADIUS4 = 600, t.HALFSCREEN = 480, t.BATTERYLOCATIONS = [{
        x: 216,
        y: 605,
        angle: 0
    }, {
        x: 568,
        y: 605,
        angle: 0
    }, {
        x: 920,
        y: 605,
        angle: 0
    }, {
        x: 216,
        y: 35,
        angle: 180
    }, {
        x: 568,
        y: 35,
        angle: 180
    }, {
        x: 920,
        y: 35,
        angle: 180
    }], t.gameid = 125, t
}();
__reflect(GameUtil.prototype, "GameUtil");
var OrdinaryEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e._frameIdx = 0, e._lastTime = 0, e._loop = 0, e._curTimes = 0, e._disappearedTime = 0, e._isShowing = !1, e._createTime = 0, e._thoughtTimes = 0, e
    }
    return __extends(e, t), Object.defineProperty(e.prototype, "isShowing", {
        get: function() {
            return this._isShowing
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.init = function(e, i, s) {
        t.prototype.init.call(this, e, i, s), this._bitmap.visible = !1, this._isShowing = !1
    }, Object.defineProperty(e.prototype, "frameIdx", {
        get: function() {
            return this._frameIdx
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.setEffect = function(t, e, i) {
        if (void 0 === i && (i = 0), 0 == i ? this._createTime = Game.instance.serverTime : this._createTime = i, this._pos = e, this._config = GameUtil.getEffectConfig(t), !this._config) return void LogManager.Error("config not exit the effect's name or id is " + t);
        this._frameIdx = Math.max(Math.floor((Game.instance.serverTime - this._createTime) / this._config.frameTime), 0), this._thoughtTimes = Math.floor(this._frameIdx / this._config.frame), this._frameIdx = this._frameIdx % this._config.frame;
        var s = this.getAtlasByIndex(this._frameIdx);
        this._bitmap.texture = RES.getRes("effect" + s + "_json#" + this._config.name + "_" + this._frameIdx + "_png"), this._bitmap.anchorOffsetX = this._bitmap.texture.textureWidth / 2, this._bitmap.anchorOffsetY = this._bitmap.texture.textureHeight / 2, this._bitmap.scaleX = this._config.scale, this._bitmap.scaleY = this._config.scale
    }, e.prototype.show = function(t, e, i, s) {
        void 0 === i && (i = null), void 0 === s && (s = 0), this._bitmap.visible = !0, this._bitmap.rotation = s, this._isShowing = !0, this._loop = t - this._thoughtTimes, this._curTimes = t - this._thoughtTimes, this._lastTime = Game.instance.serverTime, this._frameIdx = 0, this._disappearedTime = this._lastTime + e, i && (this._bitmap.x = i.x, this._bitmap.y = i.y)
    }, e.prototype.getAtlasByIndex = function(t) {
        if (null == this._config) return -1;
        for (var e = 0, i = this._config.atlas, s = 0; s < i.length && !(i[s].frame > t); ++s) e = s;
        return i[e].atlas
    }, e.prototype.update = function(t) {
        if (this._isShowing) {
            if (this._disappearedTime < t) return !0;
            if (t - this._lastTime > this._config.frameTime) {
                if (this._frameIdx = this._frameIdx % this._config.frame, this._loop > 0 && 0 == this._frameIdx && (this._curTimes--, this._curTimes < 0)) return !0;
                var e = this.getAtlasByIndex(this._frameIdx);
                this._bitmap.texture = RES.getRes("effect" + e + "_json#" + this._config.name + "_" + this._frameIdx + "_png"), this._frameIdx++, this._lastTime = t
            }
        }
        return !1
    }, e.prototype.release = function() {
        t.prototype.release.call(this)
    }, e
}(Effect);
__reflect(OrdinaryEffect.prototype, "OrdinaryEffect");
var Battery = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        i._coinGroups = new Array, i.launchNum = 10, i.info = null, i._gunId = 1, i._rate = 0, i._score = 0, i._curFeatherCount = -1, i._coinGroupCount = 0, i._goldenEggEffid = 0, i._isEnergy = !1, i._bulletNum = 0, i.lastTime = 0, i._pos = e;
        var s = GameUtil.BATTERYLOCATIONS[i._pos];
        i.x = s.x, i.y = s.y, i.rotation = s.angle;
        var n;
        n = RES.getRes("battery_json#launch_png"), i.launch = new egret.Bitmap(n), i.launch.anchorOffsetX = n.textureWidth / 2, i.launch.anchorOffsetY = n.textureHeight / 2, i.launch.x = 0, i.launch.y = 0, i.addChild(i.launch), n = RES.getRes("battery_json#feather_0_png"), i.feathers = [];
        for (var o = 0; 5 > o; o++) {
            var a = new egret.Bitmap;
            a.anchorOffsetX = n.textureWidth / 2, a.anchorOffsetY = n.textureHeight / 2, i.addChild(a), a.x = 75 + 27 * o, a.y = -30, i.feathers.push(a)
        }
        n = RES.getRes("battery_json#scorePanel_" + e + "_png"), i.scorePanel = new egret.Bitmap(n), i.scorePanel.anchorOffsetX = n.textureWidth / 2, i.scorePanel.anchorOffsetY = n.textureHeight / 2, i.scorePanel.x = 130, i.scorePanel.y = 5, i.addChild(i.scorePanel), i.scoreLB = new NewBitmapText, i.scoreLB.x = 80, i.scoreLB.y = -8, i.scoreLB.width = 100, i.scoreLB.font = "playerScore", i.scoreLB.letterSpacing = -5, i.scoreLB.textAlign = egret.HorizontalAlign.CENTER, i.addChild(i.scoreLB), i.gunParent = new egret.DisplayObjectContainer, i.gunParent.y = 0, i.gunParent.x = 0, i.addChild(i.gunParent), n = RES.getRes("battery_json#gun_1_0_png"), i.gunBarrel = new egret.Bitmap(n), i.gunBarrel.anchorOffsetX = n.textureWidth / 2, i.gunBarrel.anchorOffsetY = n.textureHeight / 2, i.gunBarrel.x = 0, i.gunBarrel.y = 0, i.gunParent.addChild(i.gunBarrel), n = RES.getRes("battery_json#gunRotate_png");
        var r = new egret.Bitmap(n);
        r.anchorOffsetX = n.textureWidth / 2, r.anchorOffsetY = n.textureHeight / 2, r.x = 0, r.y = 0, i.gunParent.addChild(r), n = RES.getRes("battery_json#fire_1_0_png"), i.gunFire = new egret.Bitmap(n), i.gunFire.anchorOffsetX = n.textureWidth / 2, i.gunFire.anchorOffsetY = n.textureHeight / 2, i.gunFire.x = 0, i.gunFire.y = -80, i.gunParent.addChild(i.gunFire), i.gunFire.visible = !1, n = RES.getRes("battery_json#gunLevelBG_png");
        var h = new egret.Bitmap(n);
        return h.anchorOffsetX = n.textureWidth / 2, h.anchorOffsetY = n.textureHeight / 2, h.x = 0, h.y = 8, i.addChild(h), i.multipleLB = new NewBitmapText, i.multipleLB.width = 100, i.multipleLB.x = -51.5, i.multipleLB.y = -8, i.multipleLB.font = "gunLevel", i.multipleLB.textAlign = egret.HorizontalAlign.CENTER, i.addChild(i.multipleLB), i
    }
    return __extends(e, t), Object.defineProperty(e.prototype, "lockFish", {
        get: function() {
            return this._lockFish
        },
        set: function(t) {
            this._lockFish = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "IsEnergy", {
        get: function() {
            return this._isEnergy
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.getGunByPower = function(t) {
        var e = t / GameUtil.ROOMRATE[User.myself.roomType];
        return 10 > e ? 1 : 50 > e ? 2 : 100 > e ? 3 : 4
    }, e.prototype.init = function(t, e) {
        this.info = e, this.gunParent.visible = !0, this.launch.visible = !0;
        for (var i = 0, s = this.feathers; i < s.length; i++) {
            var n = s[i];
            n.visible = !0
        }
        this._score = this.info.score, this.scoreLB.text = this._score.toString(), this._rate != this.info.reward_rate && (this._rate = this.info.reward_rate, this.multipleLB.text = this._rate.toString()), this.changeGunTexture()
    }, Object.defineProperty(e.prototype, "uid", {
        get: function() {
            return this.info ? this.info.uid : null
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.setFeatherCount = function(t) {
        if (t = t > 5 ? 5 : t, this._curFeatherCount != t)
            if (this._curFeatherCount = t, 0 > t)
                for (var e = 0, i = this.feathers; e < i.length; e++) {
                    var s = i[e];
                    s.texture = null
                } else {
                    for (var n = RES.getRes("battery_json#feather_1_png"), o = RES.getRes("battery_json#feather_0_png"), a = 0; a < this.feathers.length; a++) {
                        var s = this.feathers[a];
                        t > a ? s.texture = n : s.texture = o
                    }
                    if (5 == t) {
                        var r = EffectFactory.instance.showGoldenEggEffect(this._pos);
                        LogManager.Log("触发砸蛋：", r), this._goldenEggEffid = r.clientID
                    }
                }
    }, e.prototype.triggerGoldenEgg = function(t, e) {
        EffectFactory.instance.triggerEggEffect(this._goldenEggEffid, t, e), this._goldenEggEffid = 0
    }, e.prototype.changeGunTexture = function() {
        var t = this.getGunByPower(this._rate);
        if (this._gunId != t) {
            this._gunId = t;
            var e = void 0;
            e = RES.getRes("battery_json#gun_" + this._gunId + "_0_png"), this.gunBarrel.texture = e, this.gunBarrel.anchorOffsetX = e.textureWidth / 2, this.gunBarrel.anchorOffsetY = e.textureHeight / 2, this.launchNum = 10
        }
    }, e.prototype.clear = function() {
        this.info = null, this._rate = 0, this.launchNum = 10, this._coinGroupCount = 0, this._gunId = 1, this._lockFish = null, this._isEnergy = !1, this.gunParent.rotation = 0;
        var t = RES.getRes("battery_json#gun_1_0_png");
        this.gunBarrel.texture = t, this.gunBarrel.anchorOffsetX = t.textureWidth / 2, this.gunBarrel.anchorOffsetY = t.textureHeight / 2, this.gunFire.visible = !1;
        for (var e = 0, i = this.feathers; e < i.length; e++) {
            var s = i[e];
            s.visible = !1
        }
        this._coinGroups.forEach(function(t) {
            return t.clearAll()
        }), this._coinGroups.length = 0, this.scoreLB.text = "", this.multipleLB.text = "", this._location = null, this.setFeatherCount(-1), EffectFactory.instance.goldEggsPosArr.length = 0
    }, e.prototype.changeSeat = function(t) {
        var e = GameUtil.BATTERYLOCATIONS[t];
        this.x = e.x, this.y = e.y, this.rotation = e.angle, this.scoreLB.textAlign = egret.HorizontalAlign.CENTER, this.scorePanel.texture = RES.getRes("battery_json#scorePanel_" + t + "_png"), this._pos = t
    }, e.prototype.playerUpdate = function(t, e) {
        2 === t ? this.clear() : this.init(t, e)
    }, e.prototype.launchBullet = function(t) {
        this.launchNum = 0, this._lockFish || (this.gunParent.rotation = t.angel);
        var e = (t.angel - 90 + this.rotation) * Math.PI / 180,
            i = 80 * Math.cos(e) + this.x,
            s = 80 * Math.sin(e) + this.y,
            n = {
                uid: t.uid,
                pos: t.pos,
                rate: t.rate,
                gunId: this.getGunByPower(t.rate),
                born_time: t.born_time,
                fromX: i,
                fromY: s,
                refX: this.x,
                refY: this.y
            };
        BulletFactory.instance.createBullet(n)
    }, e.prototype.getGunAngle = function() {
        return this.gunParent.rotation
    }, e.prototype.setGunAngle = function(t) {
        this.gunParent.rotation = t
    }, e.prototype.updateFireAni = function(t) {
        t - this.lastTime > 35 && (this.launchNum < 10 && (this.launchNum < 5 ? this.gunBarrel.texture = RES.getRes("battery_json#gun_" + this._gunId + "_" + this.launchNum + "_png") : this.gunBarrel.texture = RES.getRes("battery_json#gun_" + this._gunId + "_0_png"), this.launchNum >= 1 && this.launchNum < 6 ? (this.gunFire.visible = !0, this.gunFire.texture = RES.getRes("battery_json#fire_" + this._gunId + "_" + (this.launchNum - 1) + "_png")) : this.gunFire.visible = !1, this.launchNum++), this.lastTime = t)
    }, e.prototype.update = function(t) {
        if (this._lockFish)
            if (!this._lockFish.parent || this._lockFish.state != Fish.FREE || this._lockFish.isOutOfBounds(GameUtil.GameOBB)) this._lockFish = null;
            else {
                var e = GameUtil.calculateRotation(this.x, this.y, this._lockFish.x, this._lockFish.y);
                this.gunParent.rotation = e + this.rotation + 90
            } this.updateFireAni(t), this.updateCoinGroup(t)
    }, e.prototype.changeGunType = function(t, e) {
        void 0 === e && (e = 0), 2 == t ? (this._isEnergy = !0, this._pos == User.myself.pos && Music.instance.playSound(Music.changeToPower)) : (this._isEnergy = !1, this._pos == User.myself.pos && Music.instance.playSound(Music.changeToNormal)), this._bulletNum = e, this.changeGunTexture()
    }, e.prototype.createCoinGroup = function(t) {
        if (!(0 >= t)) {
            this._coinGroupCount++;
            var e = ObjectPool.instance.getObjectByClass(CoinGroup);
            e.init(t, this._coinGroupCount), e.x = -32 * this._coinGroups.length - 55, e.y = 32, e.rotation = 180, this._coinGroups.push(e), this.addChild(e), this._coinGroups.length > 5 && (e = this._coinGroups.shift(), e.clearAll())
        }
    }, e.prototype.updateCoinGroup = function(t) {
        for (var e = this._coinGroups.length - 1; e >= 0; --e) {
            var i = this._coinGroups[e];
            i.x = -32 * e - 55, i.update(t) && this._coinGroups.splice(e, 1)
        }
    }, e.prototype.setPaotongAngel = function(t, e) {
        var i;
        this.rotation ? (t = GameUtil.STAGEWIDTH - t, e = GameUtil.STAGEHEIGHT - e, i = this.y - 8, e = i > e ? i : e) : (i = this.y + 8, e = e > i ? i : e);
        var s = GameUtil.calculateRotation(this.x, i, t, e);
        this.gunParent.rotation = s + this.rotation + 90
    }, e.prototype.getPaotongPos = function() {
        return this.gunParent.localToGlobal(0, -this.gunBarrel.height / 2 + 30)
    }, e.prototype.getLocalPoint = function(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0);
        var i = this.localToGlobal(t, e);
        return this.parent.globalToLocal(i.x, i.y)
    }, Object.defineProperty(e.prototype, "location", {
        get: function() {
            if (!this._location) {
                var t = this.localToGlobal(0, 8);
                this._location = this.parent.globalToLocal(t.x, t.y)
            }
            return this._location
        },
        enumerable: !0,
        configurable: !0
    }), e
}(egret.DisplayObjectContainer);
__reflect(Battery.prototype, "Battery");
var PluralFish = function(t) {
    function e(e, i, s) {
        var n = t.call(this) || this;
        return n._sonFishes = [], n._sonCount = 0, n._radius = 0, n._sonType = 0, n.sonFishConfig = null, n.sonLastTime = 0, n.sonFrameIdx = 0, n._sonCount = e, n._offsetAngels = i, n._radius = s, n
    }
    return __extends(e, t), e.prototype.init = function(e) {
        t.prototype.init.call(this, e);
        var i = this.getAtlasIndex(this.fishConfig, this.frameIdx, this.state);
        this.bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.addChild(this.bitmap), this.bitmap.texture = RES.getRes("birds" + i + "_json#bird" + this.fishConfig.type + "_" + this.frameIdx + "_png"), this.bitmap.anchorOffsetX = this.fishConfig.cx / this.fishConfig.scale, this.bitmap.anchorOffsetY = this.fishConfig.cy / this.fishConfig.scale, this.bitmap.scaleX = this.fishConfig.scale, this.bitmap.scaleY = this.fishConfig.scale, this._bg = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.addChild(this._bg);
        var s = RES.getRes("birds" + i + "_json#bird_plural_bg_png");
        this._bg.texture = s, this._bg.anchorOffsetX = s.textureWidth / 2, this._bg.anchorOffsetY = s.textureHeight / 2, this._bg.scaleX = this.fishConfig.scale, this._bg.scaleY = this.fishConfig.scale, this._sonFishes = [], this._sonType = e.fishid, this.sonFrameIdx = 0, this.sonFishConfig = GameUtil.getFishConfig(this.sonType), i = this.getAtlasIndex(this.sonFishConfig, this.sonFrameIdx, this.state);
        for (var n = 0; n < this._sonCount; ++n) {
            var o = Math.cos(this._offsetAngels[n] * Math.PI / 180) * this._radius,
                a = Math.sin(this._offsetAngels[n] * Math.PI / 180) * this._radius,
                r = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP);
            r.x = o, r.y = a, r.texture = RES.getRes("birds" + i + "_json#bird" + this.sonFishConfig.type + "_" + this.sonFrameIdx + "_png"), r.anchorOffsetX = this.sonFishConfig.cx / this.sonFishConfig.scale, r.anchorOffsetY = this.sonFishConfig.cy / this.sonFishConfig.scale, r.scaleX = this.sonFishConfig.scale, r.scaleY = this.sonFishConfig.scale, this.addChild(r), this._sonFishes.push(r)
        }
    }, e.prototype.updateFrame = function(t) {
        if (!(t < this.createTime || this.width + this.x < 0 && this.height + this.x < 0 || this.x - this.width > GameUtil.STAGEWIDTH && this.x - this.height > GameUtil.STAGEWIDTH || this.height + this.y < 0 && this.width + this.y < 0 || this.y - this.height > GameUtil.STAGEHEIGHT && this.y - this.width > GameUtil.STAGEHEIGHT)) {
            if (t - this.lastTime > this.fishConfig.frameTime) {
                this.frameIdx = ++this.frameIdx % this.fishConfig.freeFrames;
                var e = this.getAtlasIndex(this.fishConfig, this.frameIdx, this.state);
                this.bitmap.texture = RES.getRes("birds" + e + "_json#bird" + this.fishConfig.type + "_" + this.frameIdx + "_png"), this.lastTime = t
            }
            if (t - this.sonLastTime > this.sonFishConfig.frameTime) {
                this.sonFrameIdx = ++this.sonFrameIdx % this.sonFishConfig.freeFrames;
                for (var e = this.getAtlasIndex(this.sonFishConfig, this.sonFrameIdx, this.state), i = 0; i < this._sonCount; i++) this._sonFishes[i].texture = RES.getRes("birds" + e + "_json#bird" + this.sonFishConfig.type + "_" + this.sonFrameIdx + "_png");
                this.sonLastTime = t
            }
        }
    }, e.prototype.caughtedUpdate = function(t) {
        if (this.disappearedTime <= t) return !0;
        if (this.fishConfig.capturedFrames > 0 && t - this.lastTime > this.fishConfig.frameTime) {
            this.frameIdx = ++this.frameIdx % this.fishConfig.freeFrames;
            var e = this.getAtlasIndex(this.fishConfig, this.frameIdx, this.state);
            this.bitmap.texture = RES.getRes("birds" + e + "_json#bird" + this.fishConfig.type + "_" + this.frameIdx + "_png"), this.lastTime = t
        }
        if (this.sonFishConfig.capturedFrames > 0 && t - this.sonLastTime > this.sonFishConfig.frameTime) {
            this.sonFrameIdx = ++this.sonFrameIdx % this.sonFishConfig.freeFrames;
            for (var e = this.getAtlasIndex(this.sonFishConfig, this.sonFrameIdx, this.state), i = 0; i < this._sonCount; i++) this._sonFishes[i].texture = RES.getRes("birds" + e + "_json#bird" + this.sonFishConfig.type + "_" + this.sonFrameIdx + "_png");
            this.sonLastTime = t
        }
        return !1
    }, e.prototype.getRealTimeModel = function() {
        for (var t = this, e = 0, i = this.fishConfig.frameCollides, s = 0; s < i.length && !(i[s].frame > this.frameIdx); ++s) e = s;
        var n = [],
            o = 0,
            a = 0,
            r = 0,
            h = 0;
        return i[e].rects.forEach(function(e) {
            o = e.x - t.bitmap.anchorOffsetX * t.bitmap.scaleX, a = e.y - t.bitmap.anchorOffsetY * t.bitmap.scaleY, r = GameUtil.calculateDistance(0, 0, o, a), h = GameUtil.angle2Radian(GameUtil.calculateRotation(0, 0, o, a) + t.rotation), n.push({
                x: r * Math.cos(h) + t.x,
                y: r * Math.sin(h) + t.y,
                r: t.rotation,
                cw: e.w,
                ch: e.h
            })
        }), n
    }, e.prototype.lock = function() {}, e.prototype.unLock = function() {}, e.prototype.beClicked = function(t, e) {
        return this.bitmap.hitTestPoint(t, e, !0)
    }, e.prototype.release = function() {
        t.prototype.release.call(this);
        for (var e = 0; e < this._sonCount; e++) {
            var i = this._sonFishes[e];
            i.texture = null, DisplayObjectPool.instance.putInPool(i), i = null
        }
        this._sonFishes.length = 0, this._bg.texture = null, DisplayObjectPool.instance.putInPool(this._bg), this._bg = null, this.bitmap.texture = null, DisplayObjectPool.instance.putInPool(this.bitmap), this.bitmap = null
    }, Object.defineProperty(e.prototype, "sonType", {
        get: function() {
            return this._sonType
        },
        enumerable: !0,
        configurable: !0
    }), e
}(Fish);
__reflect(PluralFish.prototype, "PluralFish");
var UnitaryFish = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.isCreated = !1, e.specialType = -1, e.specialPoint = null, e.startPoint = null, e.doMoveTime = 0, e.dieToDoScaleTime = 0, e
    }
    return __extends(e, t), e.prototype.init = function(e) {
        t.prototype.init.call(this, e), this.bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.addChild(this.bitmap);
        var i = this.getAtlasIndex(this.fishConfig, this.frameIdx, this.state);
        this.bitmap.texture = RES.getRes("birds" + i + "_json#bird" + this.fishConfig.type + "_" + this.frameIdx + "_png"), this.bitmap.anchorOffsetX = this.fishConfig.cx / this.fishConfig.scale, this.bitmap.anchorOffsetY = this.fishConfig.cy / this.fishConfig.scale, this.bitmap.scaleX = this.fishConfig.scale, this.bitmap.scaleY = this.fishConfig.scale, this.createTime > Game.instance.serverTime && (this.isCreated = !1, this.visible = !1)
    }, e.prototype.freeUpdate = function(e) {
        var i = t.prototype.freeUpdate.call(this, e);
        return e >= this.createTime && (this.isCreated = !0, this.visible = !0), i
    }, e.prototype.updateFrame = function(t) {
        if (!(t < this.createTime || this.width + this.x < 0 && this.height + this.x < 0 || this.x - this.width > GameUtil.STAGEWIDTH && this.x - this.height > GameUtil.STAGEWIDTH || this.height + this.y < 0 && this.width + this.y < 0 || this.y - this.height > GameUtil.STAGEHEIGHT && this.y - this.width > GameUtil.STAGEHEIGHT || !(t - this.lastTime > this.fishConfig.frameTime))) {
            this.frameIdx = ++this.frameIdx % this.fishConfig.freeFrames;
            var e = this.getAtlasIndex(this.fishConfig, this.frameIdx, this.state);
            this.bitmap.texture = RES.getRes("birds" + e + "_json#bird" + this.fishConfig.type + "_" + this.frameIdx + "_png"), this.lastTime = t
        }
    }, e.prototype.beCaught = function(e, i, s) {
        void 0 === s && (s = null), t.prototype.beCaught.call(this, e, i, s), this.dieToDoScaleTime = GameUtil.SCALETIME, this.caughtBySpecial && (this.specialType = this.caughtBySpecial.type, 24 == this.specialType && (this.specialPoint = new egret.Point(this.caughtBySpecial.x, this.caughtBySpecial.y), this.startPoint = new egret.Point(this.x, this.y), this.disappearedTime += GameUtil.SPECIALTIME, this.doMoveTime = e + GameUtil.SPECIALTIME - this.dieToDoScaleTime))
    }, e.prototype.beCaughtByBomb = function(e, i, s) {
        t.prototype.beCaughtByBomb.call(this, e, i, s), this.dieToDoScaleTime = GameUtil.SCALETIME;
        var n = "",
            o = 1;
        if (27 == this.bombType ? (n = "hitFish_1", o = 2 / this.config.unitScale) : 29 == this.bombType && (n = "fireCircle", o = 3 / this.config.unitScale), this.effectConfig = GameUtil.getEffectConfig(n), this.effectConfig) {
            this.effectFrameIdx = 0, this.effectLastTime = Game.instance.serverTime, this.caughtEffect = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.addChildAt(this.caughtEffect, 0);
            var a = GameUtil.getEffectAtlasByIndex(this.effectConfig, this.effectFrameIdx),
                r = RES.getRes("effect" + a + "_json#" + this.effectConfig.name + "_" + this.effectFrameIdx + "_png");
            this.caughtEffect.texture = r, this.caughtEffect.anchorOffsetX = r.textureWidth / 2, this.caughtEffect.anchorOffsetY = r.textureHeight / 2, this.caughtEffect.scaleX = o, this.caughtEffect.scaleY = o
        }
    }, e.prototype.caughtedUpdate = function(t) {
        if (this.disappearedTime <= t) return !0;
        if (24 == this.specialType) {
            var e = (this.disappearedTime - this.dieToDoScaleTime - t) / this.doMoveTime;
            e = 1 - Math.max(Math.min(1, e), 0), this.x = this.startPoint.x + (this.specialPoint.x - this.startPoint.x) * e, this.y = this.startPoint.y + (this.specialPoint.y - this.startPoint.y) * e, this.rotation -= 6
        }
        if (this.effectConfig)
            if (27 == this.bombType) {
                if (t > this.effectLastTime + this.effectConfig.frameTime) {
                    this.effectLastTime = t, this.effectFrameIdx++, this.effectFrameIdx = this.effectFrameIdx % this.effectConfig.frame;
                    var i = GameUtil.getEffectAtlasByIndex(this.effectConfig, this.effectFrameIdx),
                        s = RES.getRes("effect" + i + "_json#" + this.effectConfig.name + "_" + this.effectFrameIdx + "_png");
                    this.caughtEffect.texture = s
                }
            } else 29 == this.bombType && (this.caughtEffect.rotation -= 6);
        if (t < this.disappearedTime - this.dieToDoScaleTime) {
            if (t - this.lastTime > this.fishConfig.frameTime / 2) {
                this.frameIdx = ++this.frameIdx % this.fishConfig.freeFrames;
                var n = this.getAtlasIndex(this.fishConfig, this.frameIdx, Fish.FREE);
                this.bitmap.texture = RES.getRes("birds" + n + "_json#bird" + this.fishConfig.type + "_" + this.frameIdx + "_png"), this.lastTime = t
            }
        } else {
            if (this.fishConfig.capturedFrames > 0 && t - this.lastTime > this.fishConfig.frameTime) {
                this.frameIdx = ++this.frameIdx % this.fishConfig.capturedFrames;
                var n = this.getAtlasIndex(this.fishConfig, this.frameIdx, this.state);
                this.bitmap.texture = RES.getRes("birds" + n + "_json#bird" + this.fishConfig.type + "_die_" + this.frameIdx + "_png"), this.lastTime = t
            }
            var o = (this.disappearedTime - t) / this.dieToDoScaleTime;
            o = Math.max(Math.min(1, o), 0), this.scaleX = o, this.scaleY = o, this.rotation -= 6
        }
        return !1
    }, e.prototype.getRealTimeModel = function() {
        var t = this;
        if (0 == this.isCreated) return [];
        for (var e = 0, i = this.fishConfig.frameCollides, s = 0; s < i.length && !(i[s].frame > this.frameIdx); ++s) e = s;
        var n = [],
            o = 0,
            a = 0,
            r = 0,
            h = 0;
        return i[e].rects.forEach(function(e) {
            o = e.x - t.bitmap.anchorOffsetX * t.bitmap.scaleX, a = e.y - t.bitmap.anchorOffsetY * t.bitmap.scaleY, r = GameUtil.calculateDistance(0, 0, o, a), h = GameUtil.angle2Radian(GameUtil.calculateRotation(0, 0, o, a) + t.rotation), n.push({
                x: r * Math.cos(h) + t.x,
                y: r * Math.sin(h) + t.y,
                r: t.rotation,
                cw: e.w,
                ch: e.h
            })
        }), n
    }, e.prototype.lock = function() {}, e.prototype.unLock = function() {}, e.prototype.beClicked = function(t, e) {
        return this.bitmap.hitTestPoint(t, e, !0)
    }, e.prototype.release = function() {
        this.specialType = -1, this.effectConfig = null, this.bitmap.texture = null, DisplayObjectPool.instance.putInPool(this.bitmap), this.bitmap = null, this.caughtEffect && (this.caughtEffect.texture = null, DisplayObjectPool.instance.putInPool(this.caughtEffect), this.caughtEffect = null), t.prototype.release.call(this)
    }, e
}(Fish);
__reflect(UnitaryFish.prototype, "UnitaryFish");
var Banner = function() {
    function t() {
        this.deadline = 0
    }
    return t.prototype.init = function(t, e, i) {
        this.deadline = Game.instance.serverTime + i
    }, t.prototype.update = function(t) {
        return t > this.deadline ? !0 : !1
    }, t.prototype.release = function() {
        this._bitmapBG.texture = null, DisplayObjectPool.instance.putInPool(this._bitmapBG), this._bitmapBG = null, DisplayObjectPool.instance.putInPool(this._container), this._container = null
    }, t
}();
__reflect(Banner.prototype, "Banner", ["ObjectInterface"]);
var ModalWin = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.graphics.beginFill(0, .5), e.graphics.drawRect(0, 0, GameUtil.STAGEWIDTH, GameUtil.STAGEHEIGHT), e.graphics.endFill(), e.touchEnabled = !0, e.addEventListener(egret.TouchEvent.TOUCH_TAP, e.clickPanel, e), e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoveFromStage, e), e
    }
    return __extends(e, t), e.prototype.clickPanel = function(t) {
        t.stopPropagation()
    }, e.prototype.onRemoveFromStage = function(t) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPanel, this), this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
    }, e.prototype.show = function() {
        Main.instance.addToUILayer(this)
    }, e.prototype.onClose = function(t) {
        var e = this;
        setTimeout(function() {
            return e.parent.removeChild(e)
        }, 10)
    }, e
}(egret.Sprite);
__reflect(ModalWin.prototype, "ModalWin");
var NewBitmapText = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._letterSpacing = 0, e._textAlign = egret.HorizontalAlign.LEFT, e._fontJson = "font_json", e._bitmaps = new Array, e
    }
    return __extends(e, t), Object.defineProperty(e.prototype, "letterSpacing", {
        set: function(t) {
            this._letterSpacing = t, this.layout()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "fontJson", {
        set: function(t) {
            this._fontJson = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "font", {
        set: function(t) {
            this._font = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "textAlign", {
        set: function(t) {
            this._textAlign = t, this.layout()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "text", {
        set: function(t) {
            this._text = t, this.rendering(), this.layout()
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.rendering = function() {
        var t, i, s, n = this._text.length;
        for (t = 0; n > t; ++t) {
            i = this._text.charAt(t), i = e.SPECIALCHARACTERS[i] || i;
            var o = RES.getRes(this._fontJson + ("#" + this._font + "_" + i));
            o ? (t >= this._bitmaps.length && (s = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._bitmaps.push(s)), s = this._bitmaps[t], s.texture = o) : console.warn(this._fontJson + ("#" + this._font + " font don't have this char '" + i + "'"))
        }
        for (; t < this._bitmaps.length;) DisplayObjectPool.instance.putInPool(this._bitmaps.pop())
    }, e.prototype.layout = function() {
        var t = this;
        if (this._bitmaps.length) {
            var e = 0,
                i = 0;
            if (this._bitmaps.forEach(function(t) {
                    i += t.texture.textureWidth
                }), this._textAlign !== egret.HorizontalAlign.LEFT) {
                var s = this._bitmaps.length > 1 ? (this._bitmaps.length - 1) * this._letterSpacing : 0;
                e = this.width - i - s, this._textAlign === egret.HorizontalAlign.CENTER && (e /= 2)
            }
            this._bitmaps.forEach(function(i) {
                i.x = e, e = e + i.texture.textureWidth + t._letterSpacing, t.addChild(i)
            })
        }
    }, e.prototype.dispose = function() {
        this._bitmaps.forEach(function(t) {
            return DisplayObjectPool.instance.putInPool(t)
        }), this._bitmaps.length = 0
    }, e.SPECIALCHARACTERS = {
        ":": "colon",
        "\\": "slash",
        "/": "slash1",
        "*": "star",
        "<": "less",
        ">": "greater",
        '"': "quotation",
        "?": "question",
        "|": "vertical"
    }, e
}(egret.DisplayObjectContainer);
__reflect(NewBitmapText.prototype, "NewBitmapText");
var PhaseScore = function() {
    function t() {
        this.startHideTime = 0, this.id = 0
    }
    return t.prototype.init = function(t, e, i) {
        if (this.startPoint = new egret.Point(t, e), this.lastFrameTime = Game.instance.serverTime, this.frameIdx = 0, this.score = 0, this.startHideTime = 0, this.container = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.DISPLAYOBJECTCONTAINER), i.addChild(this.container), this.container.x = t, this.container.y = e, this.config = GameUtil.getEffectConfig("uiScoreBG"), !this.config) return void LogManager.Error("not found effect(uiScoreBG) config");
        var s = this.getAtlasByIndex(this.frameIdx);
        this.bg = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.container.addChild(this.bg);
        var n = RES.getRes("effect" + s + "_json#" + this.config.name + "_" + this.frameIdx + "_png");
        this.bg.texture = n, this.bg.anchorOffsetX = n.textureWidth / 2, this.bg.anchorOffsetY = n.textureHeight / 2, this._bitmapFont = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.NEWBITMAPTEXT), this.container.addChild(this._bitmapFont), this._bitmapFont.font = "birdScore_10", this._bitmapFont.width = 150, this._bitmapFont.anchorOffsetX = 75, this._bitmapFont.textAlign = egret.HorizontalAlign.CENTER, this._bitmapFont.letterSpacing = -2, this._bitmapFont.text = this.score.toString()
    }, t.prototype.setInfo = function(t, e, i) {
        this.container.rotation = t, this.id = e, this.pos = i
    }, Object.defineProperty(t.prototype, "scoreID", {
        get: function() {
            return this.id
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "totalScore", {
        get: function() {
            return this.score
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getAtlasByIndex = function(t) {
        if (null == this.config) return -1;
        for (var e = 0, i = this.config.atlas, s = 0; s < i.length && !(i[s].frame > t); ++s) e = s;
        return i[e].atlas
    }, t.prototype.setScore = function(t) {
        this.score = t, this._bitmapFont.text = this.score.toString()
    }, t.prototype.addScore = function(t) {
        this.score += t, this._bitmapFont.text = this.score.toString()
    }, t.prototype.hide = function(t, e, i) {
        this.startHideTime = Game.instance.serverTime, this.toPoint = t, this.hideDelay = i, this.toPoint || (this.toPoint = this.startPoint), e && (this.bg.visible = !1)
    }, t.prototype.update = function(t) {
        if (this.bg.visible && t - this.lastFrameTime > this.config.frameTime) {
            this.lastFrameTime = t, this.frameIdx++, this.frameIdx = this.frameIdx % this.config.frame;
            var e = this.getAtlasByIndex(this.frameIdx);
            this.bg.texture = RES.getRes("effect" + e + "_json#" + this.config.name + "_" + this.frameIdx + "_png")
        }
        if (0 != this.startHideTime) {
            if (t < this.startHideTime + this.hideDelay + 50) {
                var i = (t - this.startHideTime) / this.hideDelay;
                return i = Math.max(Math.min(i, 1), 0), this.container.x = (this.toPoint.x - this.startPoint.x) * i + this.startPoint.x, this.container.y = (this.toPoint.y - this.startPoint.y) * i + this.startPoint.y, !1
            }
            return !0
        }
        return !1
    }, Object.defineProperty(t.prototype, "_pos", {
        get: function() {
            return this.pos
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.release = function() {
        DisplayObjectPool.instance.putInPool(this.container), this.container = null, this._bitmapFont.dispose(), DisplayObjectPool.instance.putInPool(this._bitmapFont), this._bitmapFont = null, this.bg.texture = null, DisplayObjectPool.instance.putInPool(this.bg), this.bg = null
    }, t
}();
__reflect(PhaseScore.prototype, "PhaseScore", ["ObjectInterface"]);
var Blast = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.frame = 5, e.frameTime = 50, e.frameIdx = 0, e.lastFrameTime = 0, e._pos = 0, e._gunid = 0, e._atlas = 0, e.net = new egret.Bitmap, e.addChild(e.net), e
    }
    return __extends(e, t), e.prototype.init = function(t, e, i, s, n) {
        this.x = t, this.y = e, this.frameIdx = 0, this._pos = i, this._gunid = s, this.disappearedTime = n, this.lastFrameTime = Game.instance.serverTime, this._atlas = GameUtil.BULLETCONFIG[s - 1].atlas, this.net.texture = RES.getRes("bullet_" + this._atlas + "_json#net_" + this._pos + "_" + this._gunid + "_" + this.frameIdx + "_png"), this.net.anchorOffsetX = this.net.texture.textureWidth / 2, this.net.anchorOffsetY = this.net.texture.textureHeight / 2, this.net.x = 0, this.net.y = 0, this.net.visible = !0
    }, e.prototype.update = function(t) {
        if (t - this.lastFrameTime > this.frameTime) {
            if (this.lastFrameTime = t, this.frameIdx++, this.frameIdx >= this.frame) return !0;
            this.net.texture = RES.getRes("bullet_" + this._atlas + "_json#net_" + this._pos + "_" + this._gunid + "_" + this.frameIdx + "_png")
        }
        return t > this.disappearedTime ? !0 : !1
    }, e
}(egret.DisplayObjectContainer);
__reflect(Blast.prototype, "Blast");
var BlastFactory = function() {
    function t() {
        this.blasts = new Array, this.pool = new Array, this.layer = new egret.DisplayObjectContainer, Main.instance.addToSceneLayer(this.layer)
    }
    return t.prototype.clear = function() {
        var t = this;
        this.blasts.forEach(function(e) {
            e.parent && e.parent.removeChild(e), t.putInPool(e)
        }), this.blasts.length = 0
    }, t.prototype.detectorBulletVSFish = function(t, e) {
        for (var i = e.length - 1; i >= 0; --i) {
            var s = e[i];
            if (CollisionDetector.detectorOBBvsOBB(t, s)) return !0
        }
        return null
    }, t.prototype.obbToPolygon = function(t) {
        var e = t.width / 2,
            i = t.height / 2,
            s = new Array;
        return s.push(new egret.Point(-e, -i), new egret.Point(e, -i), new egret.Point(e, i), new egret.Point(-e, i)), new Polygon(t.x, t.y, s, t.rotation)
    }, t.prototype.onTimer = function() {
        if (Game.instance.inScene && Game.instance.sceneState !== GameUtil.CHANGEMAPING) {
            var t, e, i, s = (Game.instance.serverTime, BulletFactory.instance.bullets),
                n = FishFactory.instance.fishes,
                o = [],
                a = s.length,
                r = [];
            for (t = a - 1; t >= 0; --t) e = s[t], i = e.getRealTimeModel(), r.push({
                collider: e,
                obb: new Obb(new Vector2(i.x, i.y), i.cw, i.ch, i.r)
            });
            if (r.length) {
                var h, c = [];
                for (a = n.length, t = 0; a > t; ++t) h = n[t], h.visible && c.push({
                    collider: h,
                    obbs: h.getObbs()
                });
                var l, u, p, m;
                for (t = r.length - 1; t >= 0; --t)
                    for (u = r[t], l = c.length - 1; l >= 0; --l)
                        if (p = c[l], u.collider.lockFish) {
                            if (p.collider === u.collider.lockFish && this.detectorBulletVSFish(u.obb, p.obbs)) {
                                r.splice(t, 1), u.collider.pos === User.myself.pos ? this.hitHandle(o, u.collider.id, [p], c) : BulletFactory.instance.destroyBullet(u.collider.id);
                                break
                            }
                        } else if (this.detectorBulletVSFish(u.obb, p.obbs)) {
                    r.splice(t, 1), u.collider.pos === User.myself.pos ? (m = this.inspectionArea(u, c), this.hitHandle(o, u.collider.id, m, c)) : BulletFactory.instance.destroyBullet(u.collider.id);
                    break
                }
                if(o[0]!=undefined){o[0].subType=p.collider.fishConfig.layer;}o.length && UserController.c2shit(o)
            }
        }
    }, t.prototype.inspectionArea = function(t, e) {
        var i, s, n = [],
            o = 26.625 * (t.collider.rate - Game.instance.minRate) / (Game.instance.maxRate - Game.instance.minRate) + 63.25,
            a = new Obb(new Vector2(t.obb.x, t.obb.y), 2 * o, 2 * o, 0);
        for (i = e.length - 1; i >= 0; --i) s = e[i], this.detectorBulletVSFish(a, s.obbs) && (s.dis = GameUtil.calculateDistance(a.x, a.y, s.obbs[0].x, s.obbs[0].y), n.push(s));
        for (n.sort(function(t, e) {
                return e.collider.rangeLevel() - t.collider.rangeLevel()
            }), i = n.length - 1; i >= 0; --i)
            if (n[i].collider.rangeLevel()) {
                if (1 === n.length) return n;
                if (Math.random() > .2) return [n[i]];
                n.splice(i, 1)
            } n.sort(function(t, e) {
            return t.dis - e.dis
        });
        var r = n.length,
            h = Math.random();
        return r = .47 > h ? r > 1 ? 1 : r : .85 > h ? r > 2 ? 2 : r : r > 3 ? 3 : r, 2 === r ? n[0].collider.rate + n[1].collider.rate > 18 && (r = 1) : 3 === r && n[0].collider.rate + n[1].collider.rate + n[2].collider.rate > 30 && (r = 2, n[0].collider.rate + n[1].collider.rate > 18 && (r = 1)), n.slice(0, r)
    }, t.prototype.hitHandle = function(t, e, i, s) {
        var n = {
            fishids: [],
            bulletid: e
        };
        if (i.forEach(function(t) {
                n.fishids.push(t.collider.uid)
            }), BulletFactory.instance.destroyBullet(e), 20 === i[0].collider.type)
            for (var o = void 0, a = s.length - 1; a >= 0; --a) o = s[a], o.collider.type < 13 && GameUtil.calculateDistance(i[0].obbs[0].x, i[0].obbs[0].y, o.obbs[0].x, o.obbs[0].y) < GameUtil.HALFSCREEN && n.fishids.push(o.collider.uid);
        t.push(n)
    }, t.prototype.onEnterFrame = function(t) {
        var e, i, s;
        for (e = this.blasts.length - 1; e >= 0; --e) i = this.blasts[e], s = i.update(t), s ? (i.parent && i.parent.removeChild(i), this.blasts.splice(e, 1), this.putInPool(i)) : i.parent || this.layer.addChild(i);
        this.onTimer()
    }, t.prototype.createBlast = function(t) {
        var e = Game.instance.serverTime + 600,
            i = this.getFreeBlast();
        i.init(t.x, t.y, t.type, t.gunId, e), this.blasts.push(i)
    }, t.prototype.separateSprites = function(t) {
        if (--t.pos, BulletFactory.instance.destroyBullet(t.bulletid), t.fishes.length) {
            var e = FishFactory.instance.getAliveFishById(t.fishes[0].uid);
            if (e) {
                var i = 0,
                    s = -1,
                    n = e.config;
                if (5 == n.kind) {
                    for (var o = t.fishes.length - 1; o >= 0; o--) {
                        var a = t.fishes[o];
                        i += a.score
                    }
                    s = e.type
                }
                for (var o = t.fishes.length - 1; o >= 0; --o) {
                    var a = t.fishes[o]; - 1 != s ? FishFactory.instance.beCaughtSpecial(a, t.pos, e, i) : FishFactory.instance.beCaught(a, t.pos, a.rate)
                }
            }
        }
    }, t.prototype.getAreaFishes = function(t, e, i, s, n) {
        if (!Game.instance.inScene || Game.instance.sceneState === GameUtil.CHANGEMAPING) return null;
        var o, a, r = (Game.instance.serverTime, FishFactory.instance.fishes),
            h = r.length,
            c = new Obb(new Vector2(t, e), i, s, n),
            l = [];
        for (o = 0; h > o; ++o) a = r[o], this.detectorBulletVSFish(c, a.getObbs()) && l.push(a);
        return l.length > 0 ? l : null
    }, t.prototype.onSendBombArea = function(t, e, i, s, n, o) {
        if (Game.instance.inScene && Game.instance.sceneState !== GameUtil.CHANGEMAPING) {
            var a, r, h = (Game.instance.serverTime, FishFactory.instance.fishes),
                c = [],
                l = h.length;
            for (a = 0; l > a; ++a) r = h[a], r.visible && c.push({
                collider: r,
                obbs: r.getObbs()
            });
            var u, p = new Obb(new Vector2(t, e), i, s, n),
                m = [];
            for (l = c.length, a = 0; l > a; a++) u = c[a], this.detectorBulletVSFish(p, u.obbs) && m.push(u);
            var f = {
                fishids: [],
                bombid: o,
                angle: n
            };
            for (l = m.length, a = 0; l > a; a++) u = m[a], u.collider.type < 12 && f.fishids.push(u.collider.uid);
            f.fishids.length > 0 && SceneController.c2sbombhit(f)
        }
    }, t.prototype.sendBombList = function(t, e, i) {
        var s = {
            fishids: t,
            bombid: e,
            angle: i
        };
        SceneController.c2sbombhit(s)
    }, t.prototype.bombOtherFish = function(t) {
        var e = t.pos - 1,
            i = t.bomb.type,
            s = t.bombid;
        if (t.fishes.length) {
            for (var n = 0, o = 0; o < t.fishes.length; o++) {
                var a = t.fishes[o];
                n += a.score, FishFactory.instance.beCaughtByBomb(a, s, i, e)
            }
            n > 0 && (25 == i || 26 == i || 28 == i) && ScoreFactory.instance.showBigWinScore(n, e)
        }
    }, t.prototype.getFreeBlast = function() {
        return this.pool.length ? this.pool.shift() : new Blast
    }, t.prototype.putInPool = function(t) {
        this.pool.push(t)
    }, t
}();
__reflect(BlastFactory.prototype, "BlastFactory");
var Bullet = function() {
    function t() {
        this._pos = 0, this._gunId = 0, this._rate = 0, this._birthTime = 0, this._speedX = 0, this._speedY = 0, this._fromX = 0, this._fromY = 0, this._config = null, this._lastTime = 0, this._frameIdx = 0
    }
    return t.prototype.init = function(t, e) {
        this._uid = t.uid, this._pos = t.pos, this._gunId = t.gunId, this._rate = t.rate, this._birthTime = t.born_time, this._fromX = Math.floor(t.fromX), this._fromY = Math.floor(t.fromY), this._config = GameUtil.BULLETCONFIG[this._gunId - 1], this._bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._bitmap.texture = RES.getRes("bullet_" + this._config.atlas + "_json#bullet_" + this._pos + "_" + this._gunId + "_png"), this._bitmap.anchorOffsetX = this._bitmap.texture.textureWidth / 2, this._bitmap.anchorOffsetY = this._bitmap.texture.textureHeight / 2, e.addChild(this._bitmap), this._pos === User.myself.pos && (1 == this._gunId || 2 == this._gunId ? Music.instance.playSound(Music.BatteryFandS) : Music.instance.playSound(Music.BatteryTandF)), this._lockFish = SceneOther.instance.getLockFishByPos(t.pos);
        var i;
        if (this._lockFish) i = this.calcLockingCondition(Game.instance.serverTime);
        else {
            var s = GameUtil.calculateRotation(t.refX, t.refY, this._fromX, this._fromY);
            s = GameUtil.angle2Radian(s), this._speedX = GameUtil.BULLETSPEED * Math.cos(s), this._speedY = GameUtil.BULLETSPEED * Math.sin(s), i = this.calcActualCondition(Game.instance.serverTime)
        }
        this._bitmap.x = i.x, this._bitmap.y = i.y, this._bitmap.rotation = i.r
    }, t.prototype.update = function(t) {
        if (this._lockFish && (this._lockFish.state != Fish.FREE || this._lockFish != SceneOther.instance.getLockFishByPos(this._pos))) {
            this._lockFish = null, this._fromX = this.x, this._fromY = this.y;
            var e = GameUtil.angle2Radian(this._bitmap.rotation);
            this._speedX = GameUtil.BULLETSPEED * Math.cos(e), this._speedY = GameUtil.BULLETSPEED * Math.sin(e), this._birthTime = t
        }
        var i;
        return i = this._lockFish ? this.calcLockingCondition(t) : this.calcActualCondition(t), this._bitmap.x = i.x, this._bitmap.y = i.y, this._bitmap.rotation = i.r, !1
    }, t.prototype.calcLockingCondition = function(t) {
        var e = t - this._birthTime;
        e = e >= 0 ? e : 0;
        var i = GameUtil.BULLETSPEED * e,
            s = GameUtil.calculateDistance(this._fromX, this._fromY, this._lockFish.x, this._lockFish.y);
        i = i > s ? s : i;
        var n = GameUtil.calculateRotation(this._fromX, this._fromY, this._lockFish.x, this._lockFish.y),
            o = GameUtil.angle2Radian(n);
        return {
            x: i * Math.cos(o) + this._fromX,
            y: i * Math.sin(o) + this._fromY,
            r: n
        }
    }, t.prototype.calcActualCondition = function(t) {
        var e = t - this._birthTime;
        e = e >= 0 ? e : 0;
        var i = Math.abs(this._fromX + this._speedX * e),
            s = Math.abs(this._fromY + this._speedY * e),
            n = Math.floor(i / GameUtil.STAGEWIDTH) % 2,
            o = Math.floor(s / GameUtil.STAGEHEIGHT) % 2;
        n ? i = GameUtil.STAGEWIDTH - i % GameUtil.STAGEWIDTH : i %= GameUtil.STAGEWIDTH, o ? s = GameUtil.STAGEHEIGHT - s % GameUtil.STAGEHEIGHT : s %= GameUtil.STAGEHEIGHT, Math.abs(this._speedX * e) > this._fromX && this._speedX < 0 && (n = (n + 1) % 2), Math.abs(this._speedY * e) > this._fromY && this._speedY < 0 && (o = (o + 1) % 2);
        var a = n > 0 ? -this._speedX : this._speedX,
            r = o > 0 ? -this._speedY : this._speedY,
            h = GameUtil.calculateRotation(i, s, Math.floor(1e3 * a + i), Math.floor(1e3 * r + s));
        return {
            x: Math.floor(i),
            y: Math.floor(s),
            r: Math.floor(h)
        }
    }, t.prototype.getRealTimeModel = function() {
        return {
            x: this._bitmap.x,
            y: this._bitmap.y,
            r: this._bitmap.rotation,
            cw: this._config.cw,
            ch: this._config.ch
        }
    }, t.prototype.release = function() {
        this._bitmap.texture = null, DisplayObjectPool.instance.putInPool(this._bitmap), this._bitmap = null
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this._uid
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "pos", {
        get: function() {
            return this._pos
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "gunId", {
        get: function() {
            return this._gunId
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rate", {
        get: function() {
            return this._rate
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "x", {
        get: function() {
            return this._bitmap.x
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "y", {
        get: function() {
            return this._bitmap.y
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "rotation", {
        get: function() {
            return this._bitmap.rotation
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bornTime", {
        get: function() {
            return this._birthTime
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lockFish", {
        get: function() {
            return this._lockFish
        },
        enumerable: !0,
        configurable: !0
    }), t
}();
__reflect(Bullet.prototype, "Bullet", ["ObjectInterface"]);
var BulletFactory = function() {
    function t() {
        this.bullets = new Array, this.layer = new egret.DisplayObjectContainer, Main.instance.addToSceneLayer(this.layer), this.colliderLayer = new egret.DisplayObjectContainer, Main.instance.addToSceneLayer(this.colliderLayer), this.colliders = new Array
    }
    return t.prototype.clear = function() {
        this.bullets.forEach(function(t) {
            ObjectPool.instance.putInPool(t)
        }), this.bullets.length = 0
    }, t.prototype.onEnterFrame = function(t) {
        var e, i, s;
        for (e = this.bullets.length - 1; e >= 0; --e) i = this.bullets[e], s = i.update(t), s && (BlastFactory.instance.createBlast({
            x: i.x,
            y: i.y,
            type: i.pos,
            gunId: i.gunId
        }), this.bullets.splice(e, 1), ObjectPool.instance.putInPool(i))
    }, t.prototype.drawCollider = function(t) {
        for (var e, i, s, n = 0, o = this.bullets.length - 1; o >= 0; o--) e = this.bullets[o], i = e.getRealTimeModel(), s = this.colliders[n], s || (s = new egret.Shape, s.alpha = .4, this.colliderLayer.addChild(s), this.colliders.push(s)), s.visible = !0, s.x = i.x, s.y = i.y, s.rotation = i.r, s.anchorOffsetX = i.cw / 2, s.anchorOffsetY = i.ch / 2, s.graphics.clear(), s.graphics.beginFill(15790080), s.graphics.drawRect(0, 0, i.cw, i.ch), n++;
        for (; n < this.colliders.length; n++) {
            var a = this.colliders[n];
            a.visible = !1
        }
    }, t.prototype.createBullet = function(t) {
        var e = ObjectPool.instance.getObjectByClass(Bullet);
        e.init(t, this.layer), this.bullets.push(e), t.pos == User.myself.pos && User.myself.bulletCount++
    }, t.prototype.destroyBullet = function(t) {
        for (var e = this.bullets.length - 1; e >= 0; --e) {
            var i = this.bullets[e];
            if (i.id === t) {
                i.pos == User.myself.pos && User.myself.bulletCount--, BlastFactory.instance.createBlast({
                    x: i.x,
                    y: i.y,
                    type: i.pos,
                    gunId: i.gunId
                }), this.bullets.splice(e, 1), ObjectPool.instance.putInPool(i);
                break
            }
        }
    }, t.prototype.changeBackstage = function() {
        for (var e = this.bullets.length, i = e - 1; i >= 0; --i) {
            var s = this.bullets[i];
            s.pos === User.myself.pos && t.instance.destroyBullet(s.id)
        }
        UserController.c2schangbackstage()
    }, t
}();
__reflect(BulletFactory.prototype, "BulletFactory");
var LockSign = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i._frameIdx = 0, i.angle = 0, i.radius = 3, i._canLockFishes = [16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27], i._pos = e, i.texParent = new egret.DisplayObjectContainer, i._frame = new egret.Bitmap, i._fishIcon = new egret.Bitmap, i.addChild(i.texParent), i.texParent.addChild(i._frame), i.texParent.addChild(i._fishIcon), i.visible = !1, i
    }
    return __extends(e, t), e.prototype.showLockFish = function(t) {
        if (this._fishType != t) {
            if (this._fishType = t, -1 == this._canLockFishes.indexOf(this._fishType)) return void(this.visible = !1);
            this._startTime = Game.instance.serverTime, this.visible = !0, this.angle = 0;
            var e = RES.getRes("battery_json#icon_lock_" + this._fishType + "_png"),
                i = RES.getRes("battery_json#lockFrame_" + this._pos + "_" + this._frameIdx + "_png");
            this._frame.texture = i, this._frame.anchorOffsetX = i.textureWidth / 2, this._frame.anchorOffsetY = i.textureHeight / 2, this._fishIcon.texture = e, this._fishIcon.anchorOffsetX = e.textureWidth / 2, this._fishIcon.anchorOffsetY = e.textureHeight / 2, this._fishIcon.x = 0, this._fishIcon.y = -10
        }
    }, e.prototype.hide = function() {
        this.angle = 0, this.visible = !1, this._fishType = -1
    }, e.prototype.update = function(t) {
        if (this.visible) {
            this.angle -= 10;
            var e = Math.sin(this.angle * Math.PI / 180) * this.radius,
                i = Math.cos(this.angle * Math.PI / 180) * this.radius;
            this.texParent.x = i, this.texParent.y = e, t - this._startTime > 500 && (this._frameIdx = (this._frameIdx + 1) % 2, this._frame.texture = RES.getRes("battery_json#lockFrame_" + this._pos + "_" + this._frameIdx + "_png"), this._startTime = t)
        }
    }, e.prototype.clear = function() {
        this.hide()
    }, e
}(egret.DisplayObjectContainer);
__reflect(LockSign.prototype, "LockSign");
var MyBattery = function(t) {
    function e(e) {
        var i = t.call(this, e) || this;
        return i.lastFireTime = 0, i.isStopSendFire = !1, i.isStopLock = !1, i.bombID = 0, i.shotTime = 0, i.guideScaleSpeed = .01, i.guide = new egret.Bitmap(RES.getRes("battery_json#guide_png")), i.guide.anchorOffsetX = 35, i.guide.anchorOffsetY = 100, i.guide.y = -120, egret.Capabilities.isMobile || (i.bindMousemove = i.onMousemove.bind(i)), i.clickButton = new egret.Shape, i.clickButton.width = 80, i.clickButton.height = 50, i.clickButton.x = -38, i.clickButton.y = -20, i.clickButton.alpha = 0, i.clickButton.graphics.beginFill(16711680), i.clickButton.graphics.drawRect(0, 0, 80, 50), i.addChild(i.clickButton), i.clickButton.touchEnabled = !0, i.clickButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, i.autoAddPower, i), i.clickButton.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, i.stopAutoAddPower, i), i.clickButton.addEventListener(egret.TouchEvent.TOUCH_END, i.stopAutoAddPower, i), GameEventDispatcher.instance.addEventListener(GameEvent.SELECTFISH, i.onSelectFish, i), i
    }
    return __extends(e, t), e.prototype.init = function(e, i) {
        if (t.prototype.init.call(this, e, i), 1 === e)
            if (this.addChild(this.guide), Main.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Main.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), Main.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.bindMousemove) {
                var s = document.getElementsByTagName("CANVAS")[0];
                s.addEventListener("mousemove", this.bindMousemove)
            } else Main.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMousemove, this)
    }, e.prototype.clear = function() {
        if (t.prototype.clear.call(this), Main.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), Main.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), Main.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.bindMousemove) {
            var e = document.getElementsByTagName("CANVAS")[0];
            e.removeEventListener("mousemove", this.bindMousemove)
        } else Main.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMousemove, this);
        this.gunParent.rotation = 0, this.guide.parent && this.removeChild(this.guide), this.isStopSendFire = !1, this.isStopLock = !1
    }, e.prototype.onSelectFish = function(t) {
        t.data ? this.info.pos == t.data.pos && (this.selectedFish = t.data.fish) : this.selectedFish = null
    }, e.prototype.onAddScore = function(t) {
        this.info.score = t.data, this.scoreLB.text = this.info.score.toString()
    }, e.prototype.onMousemove = function(t) {
        if (!this.selectedFish) {
            var e = void 0;
            e = egret.Capabilities.isMobile ? new egret.Point(t.stageX, t.stageY) : GameUtil.getPoint(t.target, t.clientX, t.clientY), this.setPaotongAngel(e.x, e.y)
        }
    }, e.prototype.onTouchBegin = function(t) {
        t.target === Main.stage && (this.selectedFish || this.touchToFire(t.stageX, t.stageY, !0), User.myself.pressDown = !0)
    }, e.prototype.touchToFire = function(t, e, i) {
        this.setPaotongAngel(t, e), this.c2sfire(i)
    }, e.prototype.onTouchEnd = function() {
        User.myself.pressDown = !1
    }, e.prototype.stopSendFire = function(t) {
        this.isStopSendFire = t
    }, e.prototype.setStopLock = function(t) {
        this.isStopLock = t, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SETLOCK)), t && UserController.c2scanclelocking()
    }, e.prototype.getIsStopLock = function() {
        return this.isStopLock
    }, e.prototype.isSendFire = function() {
        var t = !1;
        return User.myself.lock && this.isStopLock && (t = !0), t
    }, e.prototype.setBombID = function(t) {
        this.bombID = t
    }, e.prototype.setShotTime = function(t) {
        this.shotTime = t
    }, e.prototype.c2sfire = function(t) {
        if (this.guide.parent && this.removeChild(this.guide), 0 != this.bombID && (BlastFactory.instance.sendBombList([], this.bombID, 0), this.bombID = 0), !this.isStopSendFire)
            if (this.info.score < this._rate) BannerFactory.instance.showText(Lang.getTextByKey("coinNotEnough"));
            else if (Game.instance.sceneState != GameUtil.CHANGEMAPING && User.myself.bulletCount < GameUtil.maxBulletCount && Game.instance.serverTime - this.lastFireTime >= (t ? User.myself.fastInterval : User.myself.fireInterval)) {
            this.lastFireTime = Game.instance.serverTime;
            var e = User.myself.getUniquenessCode();
            UserController.c2sfire(this.gunParent.rotation, e);
            var i = {
                uid: e,
                pos: User.myself.pos,
                angel: this.gunParent.rotation,
                born_time: Game.instance.serverTime,
                rate: this._rate
            };
            this._score -= this._rate, this.scoreLB.text = this._score.toString(), this.launchBullet(i)
        }
    }, e.prototype.addPower = function() {
        var t;
        return t = this._rate >= Game.instance.maxRate ? Game.instance.minRate : this._rate < 10 ? this._rate + 1 : this._rate < 100 ? this._rate + 10 : this._rate < 1e3 ? this._rate + 100 : this._rate < 5e3 ? this._rate + 500 : this._rate < 1e4 ? this._rate + 1e3 : this._rate + 1e4, UserController.c2schangerate(t), t
    }, e.prototype.autoAddPower = function() {
        var t = this;
        this._isEnergy || (this.addPowerTimer = new egret.Timer(20, 0), this.addPowerTimer.addEventListener(egret.TimerEvent.TIMER, function() {
            var e = t.addPower();
            10 == e || 100 == e || 1e3 == e || 5e3 == e || 1e4 == e ? t.addPowerTimer.delay = 2e3 : t.addPowerTimer.delay = 100, e >= Game.instance.maxRate && t.stopAutoAddPower()
        }, this), this.addPowerTimer.start())
    }, e.prototype.stopAutoAddPower = function() {
        this._isEnergy || this.addPowerTimer && (this.addPowerTimer.stop(), this.addPowerTimer = null)
    }, e.prototype.minusPower = function() {
        var t;
        return t = this._rate <= Game.instance.minRate ? Game.instance.maxRate : this._rate <= 10 ? this._rate - 1 : this._rate <= 100 ? this._rate - 10 : this._rate <= 1e3 ? this._rate - 100 : this._rate <= 5e3 ? this._rate - 500 : this._rate <= 1e4 ? this._rate - 1e3 : this._rate - 1e4, UserController.c2schangerate(t), t
    }, e.prototype.autoMinusPower = function() {
        var t = this;
        this.minusPowerTimer = new egret.Timer(20, 0), this.minusPowerTimer.addEventListener(egret.TimerEvent.TIMER, function() {
            var e = t.minusPower();
            10 == e || 100 == e || 1e3 == e || 5e3 == e || 1e4 == e ? t.minusPowerTimer.delay = 2e3 : t.minusPowerTimer.delay = 100, e <= Game.instance.minRate && t.stopAutoMinusPower()
        }, this), this.minusPowerTimer.start()
    }, e.prototype.stopAutoMinusPower = function() {
        this.minusPowerTimer && (this.minusPowerTimer.stop(), this.minusPowerTimer = null)
    }, e.prototype.update = function(e) {
        if (t.prototype.update.call(this, e), this.guide && (this.guide.scaleX += this.guideScaleSpeed, this.guide.scaleY += this.guideScaleSpeed, (this.guide.scaleX >= 1.2 || this.guide.scaleX <= .8) && (this.guideScaleSpeed = -this.guideScaleSpeed)), !User.myself.lock || this.selectedFish || this.isStopLock || FishFactory.instance.changeSelectFish(), this.selectedFish && this.selectedFish.parent && this.selectedFish.state == Fish.FREE && 0 == this.isSendFire()) {
            var i = this.selectedFish.x - this.x,
                s = this.selectedFish.y - this.y,
                n = Math.sqrt(i * i + s * s),
                o = n / GameUtil.BULLETSPEED + Game.instance.serverTime;
            Game.instance.freezeEndTime > e && e > Game.instance.freezeStartTime + GameUtil.FREEZEBUFFERTIME && (o = Game.instance.freezeStartTime + GameUtil.FREEZEBUFFERTIME);
            var a = this.selectedFish.getFishFutureState(o),
                r = this.selectedFish.parent.localToGlobal(a.x, a.y);
            this.setPaotongAngel(r.x, r.y), this.c2sfire()
        } else(User.myself.auto || User.myself.pressDown || 1 == this.isSendFire()) && this.c2sfire()
    }, e.prototype.playerUpdate = function(e, i) {
        3 === e && this._rate != i.reward_rate && Music.instance.playSound(Music.ChangeValue), t.prototype.playerUpdate.call(this, e, i)
    }, e.prototype.launchBullet = function(t) {
        this._isEnergy && this._bulletNum > 0 && (--this._bulletNum, 0 == this._bulletNum && SceneController.c2schangegun()), this.launchNum = 0;
        var e = (t.angel - 90 + this.rotation) * Math.PI / 180,
            i = 80 * Math.cos(e) + this.x,
            s = 80 * Math.sin(e) + this.y,
            n = {
                uid: t.uid,
                pos: t.pos,
                rate: t.rate,
                gunId: this.getGunByPower(t.rate),
                born_time: t.born_time,
                fromX: i,
                fromY: s,
                refX: this.x,
                refY: this.y
            };
        BulletFactory.instance.createBullet(n)
    }, e
}(Battery);
__reflect(MyBattery.prototype, "MyBattery");
var SceneOther = function() {
    function t() {
        this.lastAutoTime = 0, this.lastLockTime = 0, this.lastAddTime = 0, this.lastMinusTime = 0, this.r = 0, this.icons = new Array, this.lockIcon = new Array, this.layer = new egret.DisplayObjectContainer, this.pool = new Array, this.lockFishes = [], this.autoButton = new egret.Bitmap(RES.getRes("ui_" + Game.instance.lang + "_json#auto")), this.autoButton.touchEnabled = !0, this.autoButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAuto, this), this.autoButton.x = 1025, this.autoButton.y = 110, this.autoButton.alpha = .5, this.lockButton = new egret.Bitmap(RES.getRes("ui_" + Game.instance.lang + "_json#lock")), this.lockButton.touchEnabled = !0, this.lockButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickLock, this), this.lockButton.x = 1025, this.lockButton.y = 215, this.lockButton.alpha = .5, this.addButton = new egret.Bitmap(RES.getRes("ui_" + Game.instance.lang + "_json#add")), this.addButton.touchEnabled = !0, this.addButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.clickAdd, this), this.addButton.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.releaseAdd, this), this.addButton.addEventListener(egret.TouchEvent.TOUCH_END, this.releaseAdd, this), this.addButton.x = 1025, this.addButton.y = 320, this.addButton.alpha = .5, this.minusButton = new egret.Bitmap(RES.getRes("ui_" + Game.instance.lang + "_json#minus")), this.minusButton.touchEnabled = !0, this.minusButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.clickMinus, this), this.minusButton.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.releaseMinus, this), this.minusButton.addEventListener(egret.TouchEvent.TOUCH_END, this.releaseMinus, this), this.minusButton.x = 1025, this.minusButton.y = 425, this.minusButton.alpha = .5, this.anchoro = new egret.Bitmap, this.anchoro.anchorOffsetX = 32, this.anchoro.anchorOffsetY = 32, this.anchoro.x = -100, this.anchoro.y = -100, egret.Capabilities.isMobile && (this.anchoro.visible = !1), this.layer.addChild(this.autoButton), this.layer.addChild(this.lockButton), this.layer.addChild(this.addButton), this.layer.addChild(this.minusButton), this.layer.addChildAt(this.anchoro, 0), this.bindMousemove = this.onMousemove.bind(this), Main.instance.addToUILayer(this.layer, 0)
    }
    return t.prototype.init = function() {
        this.anchoro.texture = RES.getRes("battery_json#anchoro" + User.myself.pos + "_png");
        var t = document.getElementsByTagName("CANVAS")[0];
        t.addEventListener("mousemove", this.bindMousemove), this.lastLockTime = Game.instance.serverTime, this.lastAutoTime = Game.instance.serverTime, this.lastAddTime = Game.instance.serverTime, this.lastMinusTime = Game.instance.serverTime
    }, t.prototype.clear = function() {
        var t = this;
        this.selectedFish = null, this.icons.forEach(function(e) {
            e.parent.removeChild(e), t.putInPool(e)
        }), this.icons.length = 0, this.lockIcon.forEach(function(e) {
            e.parent.removeChild(e), t.putInPool(e)
        }), this.lockIcon.length = 0, this.lockFishes.length = 0, this.r = 0, this.autoButton.filters = [], this.lockButton.filters = [], this.lockButton.touchEnabled = !0;
        var e = document.getElementsByTagName("CANVAS")[0];
        e.removeEventListener("mousemove", this.bindMousemove)
    }, t.prototype.addLockFish = function(t) {
        t.fish = FishFactory.instance.getAliveFishById(t.fishid);
        var e, i = this.lockFishes.length;
        for (e = 0; i > e; ++e)
            if (this.lockFishes[e].pos === t.pos) {
                this.lockFishes[e] = t;
                break
            } e === i && this.lockFishes.push(t), GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH, t));
        var s = BatteryFactory.instance.getBatteryByPos(t.pos);
        s && (s.lockFish = t.fish)
    }, t.prototype.getLockFishByPos = function(t) {
        var e = null;
        if (this.lockFishes)
            for (var i = 0, s = this.lockFishes; i < s.length; i++) {
                var n = s[i];
                if (n.pos === t) {
                    e = n.fish;
                    break
                }
            }
        return e
    }, t.prototype.removeLockFish = function(t) {
        var e, i = this.lockFishes.length;
        for (e = i - 1; e >= 0; --e) this.lockFishes[e].pos === t && this.lockFishes.splice(e, 1);
        BatteryFactory.instance.getBatteryByPos(t).lockFish = null
    }, t.prototype.removeAllLockFishes = function() {
        var t = this;
        this.icons.forEach(function(e) {
            e.parent.removeChild(e), t.putInPool(e)
        }), this.icons.length = 0, this.lockIcon.forEach(function(e) {
            e.parent.removeChild(e), t.putInPool(e)
        }), this.lockIcon.length = 0, this.lockFishes.length = 0, this.r = 0
    }, t.prototype.onMousemove = function(t) {
        var e = GameUtil.getPoint(t.target, t.clientX, t.clientY);
        this.autoButton.hitTestPoint(e.x, e.y) ? this.anchoro.visible = !1 : this.lockButton.hitTestPoint(e.x, e.y) ? this.anchoro.visible = !1 : this.addButton.hitTestPoint(e.x, e.y) ? this.anchoro.visible = !1 : this.minusButton.hitTestPoint(e.x, e.y) ? this.anchoro.visible = !1 : Setting.instance.anchoroHitTest(e.x, e.y) ? this.anchoro.visible = !1 : BatteryFactory.instance.anchoroHitTest(e.x, e.y) ? this.anchoro.visible = !1 : (this.anchoro.visible = !0, e = this.layer.globalToLocal(e.x, e.y), this.anchoro.x = e.x, this.anchoro.y = e.y)
    }, t.prototype.clickAuto = function(t) {
        t.stopPropagation(), User.myself.auto = !User.myself.auto, this.autoButton.filters = User.myself.auto ? [GameUtil.GLOWFILTER] : [], this.autoButton.alpha = 1, User.myself.auto || (this.lastAutoTime = Game.instance.serverTime)
    }, t.prototype.clickLock = function(t) {
        this.lockButton.alpha = 1, t.stopPropagation(), User.myself.lock = !User.myself.lock, this.lockButton.filters = User.myself.lock ? [GameUtil.GLOWFILTER] : [], GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SETLOCK)), User.myself.lock || (UserController.c2scanclelocking(), this.lastLockTime = Game.instance.serverTime)
    }, t.prototype.enableLockBtn = function(t) {
        this.lockButton.touchEnabled = 1 == t
    }, t.prototype.clickMinus = function(t) {
        t.stopPropagation(), BatteryFactory.instance.getMyBattery().IsEnergy || (this.minusButton.alpha = 1, this.lastMinusTime = Game.instance.serverTime, this.minusButton.filters = [GameUtil.GLOWFILTER], BatteryFactory.instance.getMyBattery().autoMinusPower())
    }, t.prototype.releaseMinus = function(t) {
        t.stopPropagation(), BatteryFactory.instance.getMyBattery().IsEnergy || (this.minusButton.alpha = 1, this.lastMinusTime = Game.instance.serverTime, this.minusButton.filters = [], BatteryFactory.instance.getMyBattery().stopAutoMinusPower())
    }, t.prototype.clickAdd = function(t) {
        t.stopPropagation(), BatteryFactory.instance.getMyBattery().IsEnergy || (this.addButton.alpha = 1, this.lastAddTime = Game.instance.serverTime, this.addButton.filters = [GameUtil.GLOWFILTER], BatteryFactory.instance.getMyBattery().autoAddPower())
    }, t.prototype.releaseAdd = function(t) {
        t.stopPropagation(), BatteryFactory.instance.getMyBattery().IsEnergy || (this.addButton.alpha = 1, this.lastAddTime = Game.instance.serverTime, this.addButton.filters = [], BatteryFactory.instance.getMyBattery().stopAutoAddPower())
    }, t.prototype.onEnterFrame = function(t) {
        var e = this;
        this.autoButton.alpha > .5 && !User.myself.auto && t - this.lastAutoTime > 3e4 && (this.autoButton.alpha -= .1, this.autoButton.alpha = Math.max(.5, this.autoButton.alpha)), this.lockButton.alpha > .5 && !User.myself.lock && t - this.lastLockTime > 3e4 && (this.lockButton.alpha -= .1, this.lockButton.alpha = Math.max(.5, this.lockButton.alpha)), this.addButton.alpha > .5 && t - this.lastAddTime > 3e4 && (this.addButton.alpha -= .1, this.addButton.alpha = Math.max(.5, this.addButton.alpha)), this.minusButton.alpha > .5 && t - this.lastMinusTime > 3e4 && (this.minusButton.alpha -= .1, this.minusButton.alpha = Math.max(.5, this.minusButton.alpha)), this.icons.forEach(function(t) {
            t.parent.removeChild(t), e.putInPool(t)
        }), this.icons = [], this.lockIcon.forEach(function(t) {
            t.parent.removeChild(t), e.putInPool(t)
        }), this.lockIcon = [], t > 100 && (this.r += 10);
        for (var i, s = this.lockFishes.length, n = s - 1; n >= 0; --n) i = this.lockFishes[n], i && i.fish && i.fish.state === Fish.FREE && null != i.fish.parent ? this.addLockAnchoro(i) : this.lockFishes.splice(n, 1)
    }, t.prototype.addLockAnchoro = function(t) {
        var e = t.fish.localToGlobal(0, 0),
            i = BatteryFactory.instance.getBatteryByPos(t.pos).getPaotongPos(),
            s = e.x - i.x,
            n = e.y - i.y,
            o = 60,
            a = Math.ceil(Math.sqrt(s * s + n * n) / o),
            r = Math.atan2(n, s),
            h = Math.cos(r) * o,
            c = Math.sin(r) * o,
            l = i.x,
            u = i.y,
            p = t.pos % 2,
            m = RES.getRes("battery_json#fish_line_lock_" + p + "_png"),
            f = new egret.Bitmap;
        f.texture = m, f.anchorOffsetX = f.texture.textureWidth / 2, f.anchorOffsetY = f.texture.textureHeight / 2, f.x = e.x, f.y = e.y, f.rotation = this.r, this.layer.addChild(f), this.lockIcon.push(f);
        for (var d = RES.getRes("battery_json#fish_line_pot_" + p + "_png"), g = 0; a - 1 > g; ++g) {
            var _ = this.getFreeIcon();
            _.texture = d, _.anchorOffsetX = d.textureWidth / 2, _.anchorOffsetY = d.textureHeight / 2, _.rotation = 180 * r / Math.PI, _.x = l, _.y = u, this.layer.addChild(_), this.icons.push(_), l += h, u += c
        }
    }, t.prototype.getFreeIcon = function() {
        if (this.pool.length) return this.pool.shift();
        var t = new egret.Bitmap;
        return t.anchorOffsetX = 27, t.anchorOffsetY = 27, t.scaleX = .8, t.scaleY = .8, t
    }, t.prototype.putInPool = function(t) {
        this.pool.push(t)
    }, t
}();
__reflect(SceneOther.prototype, "SceneOther");
var CollisionDetector = function() {
    function t() {}
    return t.detectorOBBvsOBB = function(t, e) {
        var i = t.centerPoint.sub(e.centerPoint),
            s = t.axes[0];
        if (t.getProjectionRadius(s) + e.getProjectionRadius(s) <= Math.abs(i.dot(s))) return !1;
        var n = t.axes[1];
        if (t.getProjectionRadius(n) + e.getProjectionRadius(n) <= Math.abs(i.dot(n))) return !1;
        var o = e.axes[0];
        if (t.getProjectionRadius(o) + e.getProjectionRadius(o) <= Math.abs(i.dot(o))) return !1;
        var a = e.axes[1];
        return t.getProjectionRadius(a) + e.getProjectionRadius(a) <= Math.abs(i.dot(a)) ? !1 : !0
    }, t.detectorPolygonVSPolygon = function(t, e) {
        var i, s = t.edges,
            n = e.edges,
            o = {
                pt1: new egret.Point(0, t.y),
                pt2: new egret.Point(t.x, t.y),
                k: 0,
                b: t.y
            };
        if (i = this.detectorPointInpolygon(n, o)) return i;
        if (o.pt1 = new egret.Point(0, e.y), o.pt2 = new egret.Point(e.x, e.y), o.k = 0, o.b = e.y, i = this.detectorPointInpolygon(s, o)) return i;
        for (var a = 0; a < s.length; ++a)
            for (var r = s[a], h = 0; h < n.length; ++h) {
                var c = n[h];
                if (i = this.detectorLineVSLine(r, c)) return i
            }
        return null
    }, t.detectorPointInpolygon = function(t, e) {
        for (var i = 0, s = 0; s < t.length; ++s) this.detectorLineVSLine(t[s], e) && ++i;
        return i % 2 === 1 ? e.pt2 : !1
    }, t.detectorLineVSLine = function(t, e) {
        return t.k === 1 / 0 ? e.k === 1 / 0 ? this.detectorVerticalLineVSVerticalLine(t, e) : this.detectorVerticalLineVSGeneralLine(t, e) : e.k === 1 / 0 ? this.detectorVerticalLineVSGeneralLine(e, t) : this.detectorGeneralLineVSGeneralLine(t, e)
    }, t.detectorVerticalLineVSVerticalLine = function(t, e) {
        if (t.pt1.x === e.pt1.x) {
            if (this.detectorDotVSEdge(t.pt1.y, e.pt1.y, e.pt2.y)) return t.pt1;
            if (this.detectorDotVSEdge(t.pt2.y, e.pt1.y, e.pt2.y)) return t.pt2
        }
        return !1
    }, t.detectorVerticalLineVSGeneralLine = function(t, e) {
        if (this.detectorDotVSEdge(t.pt1.x, e.pt1.x, e.pt2.x)) {
            var i = e.k * t.pt1.x + e.b;
            if (this.detectorDotVSEdge(i, t.pt1.y, t.pt2.y), this.detectorDotVSEdge(i, e.pt1.y, e.pt2.y)) return new egret.Point(t.pt1.x, i)
        }
        return !1
    }, t.detectorGeneralLineVSGeneralLine = function(t, e) {
        var i = (e.b - t.b) / (t.k - e.k);
        if (this.detectorDotVSEdge(i, t.pt1.x, t.pt2.x) && this.detectorDotVSEdge(i, e.pt1.x, e.pt2.x)) {
            var s = t.k * i + t.b;
            if (this.detectorDotVSEdge(s, t.pt1.y, t.pt2.y) && this.detectorDotVSEdge(s, e.pt1.y, e.pt2.y)) return new egret.Point(i, s)
        }
        return !1
    }, t.detectorDotVSEdge = function(t, e, i) {
        return t >= e && i >= t || t >= i && e >= t
    }, t
}();
__reflect(CollisionDetector.prototype, "CollisionDetector");
var DebugPlatform = function() {
    function t() {}
    return t.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }, t.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, t
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new DebugPlatform);
var Polygon = function() {
    function t(t, e, i, s) {
        this._actualPoints = new Array, this._edges = new Array, this._x = t, this._y = e, this._points = i, this._rotation = s;
        for (var n, o, a = this._points.length, r = 0; a > r; ++r) {
            var h = this._points[r],
                c = Math.sqrt(h.x * h.x + h.y * h.y),
                l = GameUtil.calculateRotation(0, 0, h.x, h.y),
                u = (s + l) * Math.PI / 180,
                p = new egret.Point(c * Math.cos(u) + this._x, c * Math.sin(u) + this._y);
            this._actualPoints.push(p), r > 0 && (n = this._actualPoints[r - 1], o = this._actualPoints[r], this.addEdge(n, o))
        }
        n = this._actualPoints[a - 1], o = this._actualPoints[0], this.addEdge(n, o)
    }
    return t.prototype.addEdge = function(t, e) {
        var i = e.x - t.x,
            s = e.y - t.y,
            n = {
                pt1: t,
                pt2: e,
                k: 0,
                b: 0
            };
        0 === i ? n.k = 1 / 0 : (n.k = s / i, n.b = -s / i * t.x + t.y), this._edges.push(n)
    }, t.prototype.draw = function(t) {
        var e = this._actualPoints[0];
        t.moveTo(e.x, e.y);
        for (var i = this._actualPoints.length, s = 1; i > s; ++s) e = this._actualPoints[s], t.lineTo(e.x, e.y), t.moveTo(e.x, e.y);
        e = this._actualPoints[0], t.lineTo(e.x, e.y), t.endFill()
    }, Object.defineProperty(t.prototype, "edges", {
        get: function() {
            return this._edges
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "x", {
        get: function() {
            return this._x
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "y", {
        get: function() {
            return this._y
        },
        enumerable: !0,
        configurable: !0
    }), t
}();
__reflect(Polygon.prototype, "Polygon");
var LogonController = function() {
    function t() {}
    return t.addAllListeners = function() {
        Main.socket.addListener({
            type: "login",
            callBack: t.s2clogin
        }), Main.socket.addListener({
            type: "logout",
            callBack: t.s2clogout
        })
    }, t.c2sroomTypeInfo = function() {
        Main.socket && Main.socket.closeSocket(), Loading.show(), (new ChooseScoreWin).show();
        var e = window.SELSVRURL + encodeURIComponent("/?func=fishRoomTypeInfo&uid=" + localStorage.getItem("USERID") + "&gameid=1011"),
            i = new egret.HttpRequest;
        i.responseType = egret.HttpResponseType.TEXT, i.open(e, egret.HttpMethod.GET), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(), i.addEventListener(egret.Event.COMPLETE, t.s2croomTypeInfo, this), i.addEventListener(egret.IOErrorEvent.IO_ERROR, t.s2croomTypeInfoErr, this)
    }, t.s2croomTypeInfo = function(t) {
        LoadingUI.instance && LoadingUI.instance.removeFromStage(), Loading.hide();
        var e = t.currentTarget,
            i = JSON.parse(e.response);
        i.Data ? (Game.instance.fishRoomMod = i.Data.fishRoomMod, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.CHOOSESCORE, i.Data.roomTypeInfo))) : PopupView.instance.setPopupData(11005)
    }, t.s2croomTypeInfoErr = function() {
        PopupView.instance.setPopupData(11005)
    }, t.c2sselsvr = function(e) {
        if (Loading.show(), Game.instance.fishRoomMod || (new ChooseTableWin).show(), User.myself.roomType = e, window.PLATFORMSELSVR) Main.socket = new MySocket, Main.socket.initWebSocket(window.WEBSOCKETURL + window.PLATFORMSELSVR);
        else {
            var i = [1011, 1111, 1211],
                s = window.SELSVRURL + encodeURIComponent("/?func=servids&uid=" + localStorage.getItem("USERID") + "&gameid=" + i[e]),
                n = new egret.HttpRequest;
            n.responseType = egret.HttpResponseType.TEXT, n.open(s, egret.HttpMethod.GET), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(), n.addEventListener(egret.Event.COMPLETE, t.s2cselsvr, this), n.addEventListener(egret.IOErrorEvent.IO_ERROR, t.s2cselsvrErr, this)
        }
    }, t.s2cselsvr = function(t) {
        var e = t.currentTarget,
            i = JSON.parse(e.response);
        i.Data && i.Data.res && i.Data.res.length ? (Main.socket = new MySocket, Main.socket.initWebSocket(window.WEBSOCKETURL + i.Data.res[0].servid)) : PopupView.instance.setPopupData(11004)
    }, t.s2cselsvrErr = function() {
        PopupView.instance.setPopupData(11004)
    }, t.c2slogin = function() {
        var t = {
            type: "login",
            message: {
                token: GameUtil.token,
                gameid: GameUtil.gameid
            }
        };
        Main.socket.sendData(t)
    }, t.s2clogin = function(e) {
        e.succ && e.message.issucc && (User.myself.uid = e.message.uid, Game.instance.fishRoomMod ? (Main.socket.addListener({
            type: "enterroom",
            callBack: SceneController.s2centerroom
        }), t.c2squickenterroom()) : (Main.socket.addListener({
            type: "roomlist",
            callBack: t.s2cchoosetable
        }), Main.socket.addListener({
            type: "roomdetail",
            callBack: t.s2cchoosetable
        }), Main.socket.addListener({
            type: "enterroom",
            callBack: t.s2cchoosetable
        }), t.c2sroomlist(1)))
    }, t.c2sroomlist = function(t) {
        Main.socket.sendData({
            type: "roomlist",
            message: {
                roomtype: User.myself.roomType,
                pagenum: t
            }
        })
    }, t.c2sroomdetail = function(t) {
        Main.socket.sendData({
            type: "roomdetail",
            message: {
                roomid: t
            }
        })
    }, t.c2senterroom = function(t, e) {
        Main.socket.sendData({
            type: "enterroom",
            message: {
                roomid: t,
                pos: e
            }
        })
    }, t.s2cchoosetable = function(t) {
        Loading.hide(), GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.CHOOSETABLE, t))
    }, t.c2squickenterroom = function() {
        Main.socket.sendData({
            type: "quickenterroom",
            message: {
                roomtype: User.myself.roomType
            }
        })
    }, t.c2slogout = function() {
        Main.socket.sendData({
            type: "logout",
            message: {}
        })
    }, t.s2clogout = function() {}, t
}();
__reflect(LogonController.prototype, "LogonController");
var BombCoinEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.startTime = 0, e.fireTime = 500, e.waveTime = 1e3, e.scale_wave = 7, e.scale_fire = 5, e._score = 0, e
    }
    return __extends(e, t), e.prototype.init = function(e, i, s) {
        t.prototype.init.call(this, e, i, s), this.bombFire = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), s.addChild(this.bombFire);
        var n = RES.getRes("effect0_json#bombCoin_fire_png");
        this.bombFire.texture = n, this.bombFire.anchorOffsetX = n.textureWidth / 2, this.bombFire.anchorOffsetY = n.textureHeight / 2, this.bombFire.x = e, this.bombFire.y = i, this.bombFire.scaleX = 0, this.bombFire.scaleY = 0, this.whiteWave = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), s.addChild(this.whiteWave), n = RES.getRes("effect0_json#bombCoin_wave_1_png"), this.whiteWave.texture = n, this.whiteWave.anchorOffsetX = n.textureWidth / 2, this.whiteWave.anchorOffsetY = n.textureHeight / 2, this.whiteWave.x = e, this.whiteWave.y = i, this.whiteWave.scaleX = 0, this.whiteWave.scaleY = 0, this.bombWave = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), s.addChild(this.bombWave), n = RES.getRes("effect0_json#bombCoin_wave_0_png"), this.bombWave.texture = n, this.bombWave.anchorOffsetX = n.textureWidth / 2, this.bombWave.anchorOffsetY = n.textureHeight / 2, this.bombWave.x = e, this.bombWave.y = i, this.bombWave.scaleX = 0, this.bombWave.scaleY = 0
    }, e.prototype.setEffect = function(e, i, s) {
        void 0 === s && (s = 0), this.startTime = s, t.prototype.setEffect.call(this, e, i, this.startTime), this.show(1, this.waveTime + 200)
    }, e.prototype.setInfo = function(t) {
        this._score = t
    }, e.prototype.update = function(e) {
        if (this.startTime < e && e < this.startTime + this.fireTime + 50) {
            var i = (e - this.startTime) / this.fireTime;
            i = Math.max(Math.min(1, i), 0), i = Math.sin(i * Math.PI) * this.scale_fire, this.bombFire.scaleX = i, this.bombFire.scaleY = i;
            var s = (this.startTime + this.fireTime - e) / 120;
            s = Math.max(Math.min(1, s), 0), this.bombFire.alpha = s
        }
        if (this.startTime < e && e < this.startTime + this.waveTime + 50) {
            var i = (e - this.startTime) / this.waveTime;
            i = Math.max(Math.min(1, i), 0), i = GameUtil.getQuadOut(i) * this.scale_wave, this.bombWave.scaleX = i, this.bombWave.scaleY = i, this.whiteWave.scaleX = i, this.whiteWave.scaleY = i;
            var s = (this.startTime + this.waveTime - e) / 300;
            s = Math.max(Math.min(1, s), 0), this.bombWave.alpha = s, this.whiteWave.alpha = s
        }
        var n = t.prototype.update.call(this, e);
        return n
    }, e.prototype.release = function() {
        t.prototype.release.call(this), this.bombFire.texture = null, DisplayObjectPool.instance.putInPool(this.bombFire), this.bombFire = null, this.bombWave.texture = null, DisplayObjectPool.instance.putInPool(this.bombWave), this.bombWave = null, this.whiteWave.texture = null, DisplayObjectPool.instance.putInPool(this.whiteWave), this.whiteWave = null
    }, e
}(OrdinaryEffect);
__reflect(BombCoinEffect.prototype, "BombCoinEffect");
var BombDrumEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.bombid = 0, e
    }
    return __extends(e, t), e.prototype.setBombID = function(t) {
        this.bombid = t
    }, e.prototype.update = function(e) {
        var i = this.frameIdx,
            s = t.prototype.update.call(this, e);
        if (30 == this.frameIdx && i != this.frameIdx && this._pos == User.myself.pos) {
            var n = this._bitmap.x,
                o = this._bitmap.y;
            BlastFactory.instance.onSendBombArea(n, o, GameUtil.HALFSCREEN, GameUtil.HALFSCREEN, 0, this.bombid)
        }
        return s
    }, e
}(OrdinaryEffect);
__reflect(BombDrumEffect.prototype, "BombDrumEffect");
var BombHugeBirdEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.bombid = 0, e
    }
    return __extends(e, t), e.prototype.setBombID = function(t) {
        this.bombid = t
    }, e.prototype.update = function(e) {
        var i = this.frameIdx,
            s = t.prototype.update.call(this, e);
        if (50 == this.frameIdx && i != this.frameIdx && this._pos == User.myself.pos) {
            var n = GameUtil.STAGEWIDTHHALF,
                o = GameUtil.STAGEHEIGHTHALF;
            BlastFactory.instance.onSendBombArea(n, o, GameUtil.HALFSCREEN, GameUtil.HALFSCREEN, 0, this.bombid)
        }
        return s
    }, e
}(OrdinaryEffect);
__reflect(BombHugeBirdEffect.prototype, "BombHugeBirdEffect");
var BombPhoenix = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.bombid = 0, e.startTime = 0, e.disappearTime = 0, e.shakeTime = 2e3, e.swordTime = 800, e.phoenixFlyTime = 3e3, e.startBombTime = 0, e.bombTime = 3200, e.lastCreateBombTime = 0, e.hasSendBomb = !1, e.leftCount = 1, e.leftX = -400, e.rightX = GameUtil.STAGEWIDTH + 400, e.endScale = 8, e.startScale = 1, e.playsoundFlag1 = !1, e.playsoundFlag2 = !1, e.playsoundFlag3 = !1, e
    }
    return __extends(e, t), e.prototype.init = function(t, e, i) {
        this.effectLayer = i, this._bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._bitmap.x = t, this._bitmap.y = e, i.addChild(this._bitmap);
        var s = RES.getRes("effect2_json#bombBarrel_shake_0_png");
        this._bitmap.texture = s, this._bitmap.anchorOffsetX = s.textureWidth / 2, this._bitmap.anchorOffsetY = s.textureHeight / 2, this.moveSword = [];
        for (var n = 0; 3 > n; n++) {
            var o = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP);
            this.effectLayer.addChild(o), this.moveSword.push(o)
        }
        this.bombList = [], this.curSword = "", this.hasSendBomb = !1
    }, e.prototype.setInfo = function(t, e, i, s) {
        this._bitmap.rotation = t, this.bombid = i, this._pos = s, this.startTime = e, this.disappearTime = this.startTime + this.shakeTime + this.swordTime + this.phoenixFlyTime + this.bombTime, this.startBombTime = this.startTime + this.shakeTime + this.swordTime + this.phoenixFlyTime / 2, this.leftCount = 1, Math.random() > .5 && (this.leftCount = 2), ShakeTool.instance().shakeObj(this._bitmap, this.shakeTime / 1e3, 15, 5)
    }, e.prototype.setSwordStartPosition = function(t) {
        var e = RES.getRes("effect2_json#bombBarrel_" + t + "_png");
        if (!e) return void LogManager.Error("can not find texture name = " + t);
        for (var i = 0; 3 > i; i++) {
            var s = this.moveSword[i];
            s.texture = e, s.anchorOffsetX = e.textureWidth / 2, s.anchorOffsetY = e.textureHeight / 2, s.scaleX = 1, s.scaleY = 1
        }
        var n = 130;
        if ("sword" == t && (n = 160), 1 == this.leftCount) {
            var o = this.leftX,
                a = GameUtil.STAGEHEIGHT / 2;
            this.moveSword[0].x = o, this.moveSword[0].y = a, o = this.rightX, a = n, this.moveSword[1].x = o, this.moveSword[1].y = a, this.moveSword[1].rotation = 180, a = GameUtil.STAGEHEIGHT - n, this.moveSword[2].x = o, this.moveSword[2].y = a, this.moveSword[2].rotation = 180
        } else {
            var o = this.leftX,
                a = n;
            this.moveSword[0].x = o, this.moveSword[0].y = a, a = GameUtil.STAGEHEIGHT - n, this.moveSword[1].x = o, this.moveSword[1].y = a, o = this.rightX, a = GameUtil.STAGEHEIGHT / 2, this.moveSword[2].x = o, this.moveSword[2].y = a, this.moveSword[2].rotation = 180
        }
    }, e.prototype.update = function(t) {
        if (this.disappearTime < t) {
            if (0 == this.hasSendBomb && (this.hasSendBomb = !0, this._pos == User.myself.pos)) {
                var e = GameUtil.STAGEWIDTHHALF,
                    i = GameUtil.STAGEHEIGHTHALF,
                    s = GameUtil.STAGEWIDTH,
                    n = GameUtil.STAGEHEIGHT;
                BlastFactory.instance.onSendBombArea(e, i, s, n, 0, this.bombid)
            }
            return !0
        }
        var o = this.startTime;
        if (t > o && t < o + this.shakeTime + 50) {
            var a = Math.floor(2 * Math.random());
            this._bitmap.texture = RES.getRes("effect2_json#bombBarrel_shake_" + a + "_png");
            var r = (this.startTime + this.shakeTime - t) / 100;
            r = Math.max(Math.min(r, 1), 0), this._bitmap.alpha = r
        }
        if (o += this.shakeTime, t > o && t < o + this.swordTime + 50) {
            this.playsoundFlag1 || (Music.instance.playSound(Music.BombBirdFlyOver), this.playsoundFlag1 = !0), "sword" != this.curSword && (this.setSwordStartPosition("sword"), this.curSword = "sword");
            var h = (t - o) / this.swordTime;
            h = Math.max(Math.min(h, 1), 0);
            for (var c = this.startScale + (this.endScale - this.startScale) * h, l = 0; 3 > l; l++) {
                var u = this.moveSword[l];
                if (u.scaleX = c, u.scaleY = c, l < this.leftCount) {
                    var e = (this.rightX - this.leftX) * h + this.leftX;
                    u.x = e
                } else {
                    var e = (this.leftX - this.rightX) * h + this.rightX;
                    u.x = e
                }
            }
        }
        if (o += this.swordTime, t > o && t < o + this.phoenixFlyTime + 50) {
            this.playsoundFlag2 || (Music.instance.playSound(Music.BombBirdFlyOver), this.playsoundFlag2 = !0), "phoenix" != this.curSword && (this.setSwordStartPosition("phoenix"), this.curSword = "phoenix");
            var h = (t - o) / this.phoenixFlyTime;
            h = Math.max(Math.min(h, 1), 0);
            for (var l = 0; 3 > l; l++) {
                var u = this.moveSword[l];
                if (l < this.leftCount) {
                    var e = (this.rightX - this.leftX) * h + this.leftX;
                    u.x = e
                } else {
                    var e = (this.leftX - this.rightX) * h + this.rightX;
                    u.x = e
                }
            }
        }
        if (this.startBombTime < t && t < this.startBombTime + this.bombTime + 50) {
            var h = (t - this.startBombTime) / this.bombTime;
            if (h = Math.max(Math.min(h, 1), 0), .3 > h && t - this.lastCreateBombTime > 100) {
                this.lastCreateBombTime = t;
                var p = ObjectPool.instance.getObjectByClass(OrdinaryEffect),
                    m = .8 * (2 * Math.random() - 1),
                    f = .7 * (2 * Math.random() - 1),
                    e = GameUtil.STAGEWIDTHHALF + GameUtil.STAGEWIDTHHALF * m,
                    i = GameUtil.STAGEHEIGHTHALF + GameUtil.STAGEHEIGHTHALF * f;
                Math.random() < .5 && (e = GameUtil.STAGEWIDTHHALF - GameUtil.STAGEWIDTHHALF * m, i = GameUtil.STAGEHEIGHTHALF - GameUtil.STAGEHEIGHTHALF * f), p.init(e, i, this.effectLayer), p.setEffect("bombBarrel", this._pos, t), p.show(1, 3e3), this.bombList.push(p), this.playsoundFlag3 || (Music.instance.playSound(Music.BombFall), this.playsoundFlag3 = !0)
            }
            if (h > .3 && .8 > h) {
                var p = ObjectPool.instance.getObjectByClass(OrdinaryEffect),
                    m = .9 * (2 * Math.random() - 1),
                    f = .8 * (2 * Math.random() - 1),
                    e = GameUtil.STAGEWIDTHHALF + GameUtil.STAGEWIDTHHALF * m,
                    i = GameUtil.STAGEHEIGHTHALF + GameUtil.STAGEHEIGHTHALF * f;
                Math.random() < .5 && (e = GameUtil.STAGEWIDTHHALF - GameUtil.STAGEWIDTHHALF * m, i = GameUtil.STAGEHEIGHTHALF - GameUtil.STAGEHEIGHTHALF * f), p.init(e, i, this.effectLayer), p.setEffect("bombBarrelFire", this._pos, t), p.show(1, 3e3), this.bombList.push(p), Music.instance.playSound(Music.BombExplode)
            }
        }
        for (var l = this.bombList.length - 1; l >= 0; l--) {
            var p = this.bombList[l];
            p.update(t) && (this.bombList.splice(l, 1), ObjectPool.instance.putInPool(p))
        }
        return !1
    }, e.prototype.release = function() {
        if (t.prototype.release.call(this), this.moveSword) {
            for (var e = 0, i = this.moveSword; e < i.length; e++) {
                var s = i[e];
                s.texture = null, DisplayObjectPool.instance.putInPool(s)
            }
            this.moveSword.length = 0
        }
        if (this.bombList) {
            for (var n = 0, o = this.bombList; n < o.length; n++) {
                var a = o[n];
                ObjectPool.instance.putInPool(a)
            }
            this.bombList.length = 0
        }
        this.playsoundFlag1 = !1, this.playsoundFlag2 = !1, this.playsoundFlag3 = !1
    }, e
}(Effect);
__reflect(BombPhoenix.prototype, "BombPhoenix");
var BombStormEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.startTime = 0, e.waveTime1 = 400, e.waveScale1 = 6, e.waveTime2 = 1e3, e.waveScale2 = 7, e
    }
    return __extends(e, t), e.prototype.init = function(t, e, i) {
        this._bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP);
        var s = RES.getRes("effect0_json#bombStorm_0_png");
        this._bitmap.texture = s, this._bitmap.anchorOffsetX = s.textureWidth / 2, this._bitmap.anchorOffsetY = s.textureHeight / 2, this._bitmap.x = t, this._bitmap.y = e, this._bitmap.scaleX = 0, this._bitmap.scaleY = 0, i.addChild(this._bitmap), this._bombWave = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), s = RES.getRes("effect1_json#bombStorm_1_png"), this._bombWave.texture = s, this._bombWave.anchorOffsetX = s.textureWidth / 2, this._bombWave.anchorOffsetY = s.textureHeight / 2, this._bombWave.x = t, this._bombWave.y = e, this._bombWave.scaleX = 0, this._bombWave.scaleY = 0, i.addChild(this._bombWave), this.startTime = Game.instance.serverTime
    }, e.prototype.update = function(t) {
        if (this.startTime + this.waveTime2 < t) return !0;
        if (this.startTime < t && t < this.startTime + this.waveTime1 + 50) {
            var e = (t - this.startTime) / this.waveTime1;
            e = Math.max(Math.min(e, 1), 0) * Math.PI, e = Math.sin(e) * this.waveScale1, this._bitmap.scaleX = e, this._bitmap.scaleY = e;
            var i = (this.startTime + this.waveTime1 - t) / 100;
            i = Math.max(Math.min(1, i), 0), this._bitmap.alpha = i
        }
        if (this.startTime < t && t < this.startTime + this.waveTime2 + 50) {
            var e = (t - this.startTime) / this.waveTime2;
            e = Math.max(Math.min(e, 1), 0), e = GameUtil.getQuadOut(e) * this.waveScale2, this._bombWave.scaleX = e, this._bombWave.scaleY = e;
            var i = (this.startTime + this.waveTime2 - t) / 100;
            i = Math.max(Math.min(1, i), 0), this._bombWave.alpha = i
        }
        return !1
    }, e.prototype.release = function() {
        t.prototype.release.call(this), this._bombWave.texture = null, DisplayObjectPool.instance.putInPool(this._bombWave), this._bombWave = null
    }, e
}(Effect);
__reflect(BombStormEffect.prototype, "BombStormEffect");
var BossEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.startTime = 0, e.alphaTime = 290, e.moveTime = 1e3, e.startPos = {
            x: 0,
            y: 0
        }, e.endPos = {
            x: 0,
            y: 0
        }, e._score = 0, e.flyPoints = [{
            startX: -390,
            startY: -230,
            endX: 568,
            endY: 320,
            rotation: 30
        }, {
            startX: -390,
            startY: 870,
            endX: 568,
            endY: 320,
            rotation: 330
        }, {
            startX: 1530,
            startY: 870,
            endX: 568,
            endY: 320,
            rotation: 210
        }, {
            startX: 1530,
            startY: -230,
            endX: 568,
            endY: 320,
            rotation: 150
        }], e.playSoundFlag2 = !1, e.playSoundFlag = !1, e
    }
    return __extends(e, t), e.prototype.init = function(e, i, s) {
        t.prototype.init.call(this, e, i, s), this.bitmap_rotate = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), s.addChild(this.bitmap_rotate);
        var n = RES.getRes("effect0_json#boss_rotate_png");
        this.bitmap_rotate.texture = n, this.bitmap_rotate.anchorOffsetX = n.textureWidth / 2, this.bitmap_rotate.anchorOffsetY = n.textureHeight / 2, this.bitmap_rotate.x = e, this.bitmap_rotate.y = i, this.bitmap_rotate.scaleX = 3, this.bitmap_rotate.scaleY = 3, this.bitmap_fly = [], n = RES.getRes("effect0_json#boss_fly_png");
        for (var o = 0, a = this.flyPoints; o < a.length; o++) {
            var r = a[o],
                h = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP);
            h.texture = n, h.anchorOffsetX = n.textureWidth / 2, h.anchorOffsetY = n.textureHeight / 2, h.x = r.startX, h.y = r.startY, h.rotation = r.rotation, h.scaleX = 3, h.scaleY = 3, s.addChild(h), this.bitmap_fly.push(h)
        }
        this.startPos.x = e, this.startPos.y = i, this.endPos.x = GameUtil.STAGEWIDTHHALF, this.endPos.y = GameUtil.STAGEHEIGHTHALF
    }, e.prototype.setEffect = function(e, i, s) {
        void 0 === s && (s = 0), this.startTime = s, t.prototype.setEffect.call(this, e, i, s + 2 * this.moveTime)
    }, e.prototype.setInfo = function(t, e) {
        this.bitmap_rotate.rotation = t, this._score = e
    }, e.prototype.update = function(e) {
        if (this.startTime < e && e < this.startTime + this.moveTime + 50) {
            this.playSoundFlag2 || (Music.instance.playSound(Music.FireWorks), this.playSoundFlag2 = !0);
            var i = (e - this.startTime) / this.moveTime;
            i = Math.max(Math.min(1, i), 0);
            var s = (this.endPos.x - this.startPos.x) * i + this.startPos.x,
                n = (this.endPos.y - this.startPos.y) * i + this.startPos.y;
            this.bitmap_rotate.x = s, this.bitmap_rotate.y = n, this.bitmap_rotate.rotation -= 6, this.bitmap_rotate.scaleX -= .1, this.bitmap_rotate.scaleY -= .1;
            var o = (this.startTime + this.moveTime - e) / this.alphaTime;
            o = Math.max(Math.min(1, o), 0), this.bitmap_rotate.alpha = o, 0 >= o && (this.bitmap_rotate.visible = !1)
        } else e > this.startTime + this.moveTime + 50 && (this.bitmap_rotate.visible = !0);
        var a = this.startTime + this.moveTime - 70;
        if (e > a && e < a + this.moveTime + 50) {
            this.playSoundFlag || (Music.instance.playSound(Music.BirdFlyCenter), this.playSoundFlag = !0);
            var i = (e - a) / this.moveTime;
            i = Math.max(Math.min(1, i), 0);
            var o = (a + this.moveTime - e) / this.alphaTime;
            o = Math.max(Math.min(1, o), 0);
            for (var r = 0; r < this.flyPoints.length; r++) {
                var h = this.flyPoints[r],
                    c = this.bitmap_fly[r];
                c.x = (h.endX - h.startX) * i + h.startX, c.y = (h.endY - h.startY) * i + h.startY, c.alpha = o, 0 >= o && (c.visible = !1)
            }
            0 >= o && !this.isShowing && this.show(1, 1e4, new egret.Point(GameUtil.STAGEWIDTHHALF, GameUtil.STAGEHEIGHTHALF))
        } else if (e > a + this.moveTime + 50)
            for (var l = 0, u = this.bitmap_fly; l < u.length; l++) {
                var c = u[l];
                c.visible = !1
            }
        var p = t.prototype.update.call(this, e);
        if (p) {
            ScoreFactory.instance.showBigWinScore(this._score, this._pos);
            var m = BatteryFactory.instance.getBatteryByPos(this._pos);
            m && m.createCoinGroup(this._score)
        }
        return p
    }, e.prototype.release = function() {
        if (t.prototype.release.call(this), this.bitmap_rotate.texture = null, DisplayObjectPool.instance.putInPool(this.bitmap_rotate), this.bitmap_rotate = null, this.bitmap_fly) {
            for (var e = 0, i = this.bitmap_fly; e < i.length; e++) {
                var s = i[e];
                s.texture = null, DisplayObjectPool.instance.putInPool(s)
            }
            this.bitmap_fly.length = 0
        }
        this.playSoundFlag = !1, this.playSoundFlag2 = !1
    }, e
}(OrdinaryEffect);
__reflect(BossEffect.prototype, "BossEffect");
var Coin = function() {
    function t() {
        this._frameIdx = 0, this._fromX = 0, this._fromY = 0, this._toX = 0, this._toY = 0, this._speedX = 0, this._speedY = 0, this._createTime = 0, this._resName = "", this._lastTime = 0, this._bounceTime = 1e3, this._amplitude = 100
    }
    return t.prototype.init = function(t, e, i, s, n, o) {
        this.bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._resName = 5 === t ? "gold" : "silvery", this._frameIdx = n % 12;
        var a = RES.getRes("battery_json#" + this._resName + "_" + this._frameIdx + "_png");
        if (this.bitmap.texture = a, this.bitmap.anchorOffsetX = a.textureWidth / 2, this.bitmap.anchorOffsetY = a.textureHeight / 2, this.bitmap.x = e, this.bitmap.y = i, this._fromX = e, this._fromY = i, this._battery = BatteryFactory.instance.getBatteryByPos(s), this._toX = this._battery.location.x, this._toY = this._battery.location.y, this.bitmap.rotation = this._battery.rotation, this._toX === this.bitmap.x) this._speedX = 0, this._speedY = this._toY > this.bitmap.y ? GameUtil.COINSPEED : -GameUtil.COINSPEED;
        else {
            var r = (this._toY - this.bitmap.y) / (this._toX - this.bitmap.x),
                h = this._toX > this.bitmap.x ? GameUtil.COINSPEED : -GameUtil.COINSPEED;
            this._speedX = h / Math.sqrt(r * r + 1), this._speedY = this._speedX * r
        }
        this._createTime = Game.instance.serverTime, this._lastTime = this._createTime, o.addChild(this.bitmap)
    }, t.prototype.update = function(t) {
        if (t - this._lastTime > 60 && (this._frameIdx = (this._frameIdx + 1) % 12, this.bitmap.texture = RES.getRes("battery_json#" + this._resName + "_" + this._frameIdx + "_png"), this._lastTime = t), t > this._createTime && t < this._createTime + this._bounceTime + 20) {
            var e = (t - this._createTime) / this._bounceTime,
                i = GameUtil.getBounceOut(Math.max(Math.min(e, 1), 0));
            this.bitmap.rotation ? this.bitmap.y = this._fromY + i * this._amplitude : this.bitmap.y = this._fromY + -i * this._amplitude
        }
        if (t > this._createTime + this._bounceTime) {
            var s = t - this._createTime - this._bounceTime;
            if (this.bitmap.x = this._speedX * s + this._fromX, this.bitmap.y = this._speedY * s + this._fromY, this._speedX > 0) {
                if (this.bitmap.x > this._toX) return !0
            } else if (this.bitmap.x < this._toX) return !0;
            if (this.bitmap.y < -40 || this.bitmap.y > GameUtil.STAGEHEIGHT + 40) return !0
        }
    }, t.prototype.release = function() {
        this.bitmap.texture = null, DisplayObjectPool.instance.putInPool(this.bitmap), this.bitmap = null
    }, t
}();
__reflect(Coin.prototype, "Coin", ["ObjectInterface"]);
var CoinFactory = function() {
    function t() {
        this.coins = new Array, this.layer = new egret.DisplayObjectContainer
    }
    return t.prototype.init = function() {
        Main.instance.addToSceneLayer(this.layer)
    }, t.prototype.clear = function() {
        this.coins.forEach(function(t) {
            ObjectPool.instance.putInPool(t)
        }), this.coins.length = 0
    }, t.prototype.createCoins = function(t) {
        var e, i;
        0 == t.rate ? (e = t.score / GameUtil.ROOMRATE[User.myself.roomType] / 10, i = e >= 5 ? 5 : 1, e /= i, e = e > 8 ? 8 : e) : (i = t.score >= 50 ? 5 : 1, e = t.rate <= 2 ? 2 : t.rate < 15 ? 3 : t.rate < 30 ? 5 : t.rate < 40 ? 7 : t.rate < 50 ? 8 : Math.floor((t.rate / 10 + 60) / 2), e >= 15 && (e = 15 * Math.floor(e / 15)));
        for (var s = -2.5 * e / 2 + 1.25 + 270, n = 5 === i ? 1500 : 900, o = 0; e > o; ++o) {
            var a = s * Math.PI / 180,
                r = n * Math.cos(a),
                h = n * Math.sin(a),
                c = ObjectPool.instance.getObjectByClass(Coin);
            c.init(i, t.x + r, t.y + h + n, t.pos, o, this.layer), this.coins.push(c), s += 2.5
        }
    }, t.prototype.onEnterFrame = function(t) {
        var e, i, s;
        for (e = this.coins.length - 1; e >= 0; --e) i = this.coins[e], s = i.update(t), s && (i.parent && i.parent.removeChild(i), this.coins.splice(e, 1), ObjectPool.instance.putInPool(i))
    }, t
}();
__reflect(CoinFactory.prototype, "CoinFactory");
var CoinGroup = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._frameIdx = 0, e._coinIdx = 0, e._coinNum = 0, e._groupIdx = 0, e._coins = new Array, e
    }
    return __extends(e, t), e.prototype.init = function(t, e) {
        var i = RES.getRes("battery_json#chipPile_green_png");
        if (this._scoreBG = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._scoreBG.texture = i, this._scoreBG.anchorOffsetX = i.textureWidth / 2, this._scoreBG.anchorOffsetY = i.textureHeight / 2, this._myBitmapText = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.NEWBITMAPTEXT), this._myBitmapText.font = "chipPile", this._myBitmapText.letterSpacing = 0, this._myBitmapText.width = 100, this._myBitmapText.anchorOffsetX = 50, this._myBitmapText.rotation = 180, this._myBitmapText.textAlign = egret.HorizontalAlign.CENTER, this._coinIdx = 0, this._frameIdx = 0, this._groupIdx = e, 100 > t) this._coinNum = 5;
        else {
            this._coinNum = 5;
            for (var s = t / 100; s > 10;) this._coinNum += 9, s = Math.floor(s / 10);
            this._coinNum += s
        }
        var n = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP);
        n.y = 3, this.setIconTexture(n, this._frameIdx), this.addChild(n), this._coins.push(n), this._myBitmapText.text = t.toString(), this.alpha = 1;
        var o = this._groupIdx % 2 == 0 ? "green" : "red";
        this._scoreBG.texture = RES.getRes("battery_json#chipPile_" + o + "_png")
    }, e.prototype.setIconTexture = function(t, e) {
        t.texture = RES.getRes("battery_json#chipPile_coin_" + e + "_png"), t.anchorOffsetX = t.texture.textureWidth / 2, t.anchorOffsetY = t.texture.textureHeight / 2
    }, e.prototype.update = function(t) {
        if (this._coinIdx < this._coinNum) {
            ++this._frameIdx;
            var e = this._coins[this._coinIdx];
            return e.y += 2, this.setIconTexture(e, this._frameIdx % 5), 4 === this._frameIdx && (e.y = 5 * this._coinIdx, ++this._coinIdx, this._frameIdx = 0, this._coinIdx < this._coinNum ? (e = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), e.y = 5 * this._coinIdx + 5, this.setIconTexture(e, this._frameIdx), this.addChild(e), this._coins.push(e)) : (this._myBitmapText.y = 5 * this._coinIdx + 10, this._scoreBG.y = 5 * this._coinIdx + 10, this.addChild(this._scoreBG), this.addChild(this._myBitmapText))), !1
        }
        return this.alpha > .5 ? (this.alpha -= .02, !1) : (this.clearAll(), !0)
    }, e.prototype.clearAll = function() {
        ObjectPool.instance.putInPool(this)
    }, e.prototype.release = function() {
        this._scoreBG.texture = null, DisplayObjectPool.instance.putInPool(this._scoreBG), this._scoreBG = null, this._myBitmapText.dispose(), DisplayObjectPool.instance.putInPool(this._myBitmapText), this._myBitmapText = null, this._coins.forEach(function(t) {
            t.texture = null, DisplayObjectPool.instance.putInPool(t)
        }), this._coins.length = 0
    }, e
}(egret.DisplayObjectContainer);
__reflect(CoinGroup.prototype, "CoinGroup", ["ObjectInterface"]);
var OtherController = function() {
    function t() {}
    return t.addAllListeners = function() {
        Main.socket.addListener({
            type: "heart",
            callBack: t.s2cheart
        }), Main.socket.addListener({
            type: "addscore",
            callBack: t.s2caddscore
        }), Main.socket.addListener({
            type: "hook_program_inout",
            callBack: t.s2chookprograminout
        })
    }, t.s2cheart = function(t) {
        Game.instance.serverTime = t.message.time
    }, t.c2saddscore = function(t) {
        Main.socket.sendData({
            type: "addscore",
            message: {
                score: t
            }
        })
    }, t.s2caddscore = function(t) {
        t.succ && t.message.res && BannerFactory.instance.showText("充值成功！")
    }, t.s2chookprograminout = function(t) {
        GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SHOWDEBUG, t))
    }, t
}();
__reflect(OtherController.prototype, "OtherController");
var EffectFactory = function() {
    function t() {
        this.goldEggsPosArr = [], this.effects = new Array, this.layer = new egret.DisplayObjectContainer, this.topEffLayer = new egret.DisplayObjectContainer, Main.instance.addToSceneLayer(this.layer)
    }
    return t.prototype.setTopEffectLayer = function() {
        Main.instance.addToSceneLayer(this.topEffLayer)
    }, t.prototype.clear = function() {
        this.effects.forEach(function(t) {
            ObjectPool.instance.putInPool(t)
        }), this.effects.length = 0
    }, t.prototype.clearByPos = function(t) {
        if (this.effects && !(this.effects.length <= 0))
            for (var e = this.effects.length - 1; e >= 0; e--) {
                var i = this.effects[e];
                i.pos == t && (ObjectPool.instance.putInPool(i), this.effects.splice(e, 1))
            }
    }, t.prototype.showBombCoin = function(t, e, i) {
        var s = ObjectPool.instance.getObjectByClass(BombCoinEffect);
        s.init(t.x, t.y, this.topEffLayer), s.setEffect("bombCoin", e, Game.instance.serverTime), s.setInfo(i), this.effects.push(s)
    }, t.prototype.showBossEffect = function(t, e, i) {
        var s = ObjectPool.instance.getObjectByClass(BossEffect);
        s.init(t.x, t.y, this.topEffLayer), s.setEffect("bossEffect", e, Game.instance.serverTime), s.setInfo(t.rotation, i), this.effects.push(s)
    }, t.prototype.showBombStorm = function(t) {
        var e = ObjectPool.instance.getObjectByClass(BombStormEffect);
        e.init(t.x, t.y, this.topEffLayer), this.effects.push(e)
    }, t.prototype.showBombEffect = function(t, e, i) {
        var s = ObjectPool.instance.getObjectByClass(BombDrumEffect);
        s.init(t.x, t.y, this.layer), s.setEffect("bombDrum", e, Game.instance.serverTime), s.show(1, 1e4), s.setBombID(i), this.effects.push(s)
    }, t.prototype.showPhoenixEffect = function(t, e, i) {
        var s = ObjectPool.instance.getObjectByClass(BombPhoenix);
        s.init(t.x, t.y, this.layer), s.setInfo(t.rotation, Game.instance.serverTime, i, e), this.effects.push(s)
    }, t.prototype.showSquirrelEffect = function(t, e, i) {
        var s = ObjectPool.instance.getObjectByClass(FlySquirrelEffect);
        s.init(t.x, t.y, this.topEffLayer), s.setInfo(i, t.rotation, e), this.effects.push(s)
    }, t.prototype.triggerEffect = function(t) {
        for (var e = 0, i = this.effects; e < i.length; e++) {
            var s = i[e];
            s.bombID == t && s.trigger()
        }
    }, t.prototype.showHugeBirdEffect = function(t, e, i) {
        var s = ObjectPool.instance.getObjectByClass(BombHugeBirdEffect);
        s.init(GameUtil.STAGEWIDTHHALF, GameUtil.STAGEHEIGHTHALF, this.layer), s.setEffect("bombScreen", e, Game.instance.serverTime), s.show(1, 1e4), s.setBombID(i), this.effects.push(s)
    }, t.prototype.showFirePhoenix = function(t, e, i) {
        var s = BatteryFactory.instance.getBatteryByPos(e);
        if (s) {
            var n = s.getLocalPoint(0, -80),
                o = ObjectPool.instance.getObjectByClass(FirePhoenixEffect);
            o.init(n.x, n.y, this.topEffLayer), o.setInfo(e, i), this.effects.push(o)
        }
    }, t.prototype.showGoldenEggEffect = function(t) {
        var e = BatteryFactory.instance.getBatteryByPos(t);
        if (e) {
            if (this.goldEggsPosArr.indexOf(t) > -1) return void LogManager.Log("posArr:", this.goldEggsPosArr);
            this.goldEggsPosArr.push(t);
            var i = ObjectPool.instance.getObjectByClass(GoldenEggsEffect),
                s = e.getLocalPoint(0, -80);
            return i.init(s.x, s.y, this.topEffLayer), i.setInfo(t), this.effects.push(i), i
        }
    }, t.prototype.triggerEggEffect = function(t, e, i) {
        for (var s = 0, n = this.effects; s < n.length; s++) {
            var o = n[s];
            if (o.clientID == t) {
                var a = o;
                if (a) {
                    a.showEggEffect(e, i);
                    var r = this.goldEggsPosArr.indexOf(o.pos);
                    r >= 0 && this.goldEggsPosArr.splice(r, 1)
                }
            }
        }
    }, t.prototype.showEffect = function(t, e, i, s, n, o, a, r) {
        void 0 === a && (a = 0), void 0 === r && (r = 0);
        var h = ObjectPool.instance.getObjectByClass(OrdinaryEffect),
            c = this.layer;
        return o && (c = this.topEffLayer), h.init(i.x, i.y, c), h.setEffect(t, e, a), h.show(s, n, i, r), this.effects.push(h), h
    }, t.prototype.hideEffect = function(t) {
        if (t)
            for (var e = this.effects.length - 1; e >= 0; --e) {
                var i = this.effects[e];
                i.clientID == t.clientID && (this.effects.splice(e, 1), ObjectPool.instance.putInPool(t))
            }
    }, t.prototype.onEnterFrame = function(t) {
        for (var e = this.effects.length - 1; e >= 0; --e) {
            var i = this.effects[e];
            i.update(t) && (this.effects.splice(e, 1), ObjectPool.instance.putInPool(i))
        }
    }, t
}();
__reflect(EffectFactory.prototype, "EffectFactory");
var FirePhoenixEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.startTime = 0, e.shakeTime = 2e3, e.changeTime = 1300, e.hideTime = 300, e.flyTime = 3e3, e._bombid = 0, e.hitBoxWidth = 300, e.hitBoxHeight = 100, e.hasHideScore = !1, e.playSoundFlag = !1, e
    }
    return __extends(e, t), e.prototype.init = function(e, i, s) {
        t.prototype.init.call(this, e, i, s), this.hasHideScore = !1, this.shakePhoenix = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP);
        var n = RES.getRes("effect4_json#burnPhoenix_0_png");
        this.shakePhoenix.texture = n, this.shakePhoenix.anchorOffsetX = n.textureWidth / 2, this.shakePhoenix.anchorOffsetY = n.textureHeight / 2, this.shakePhoenix.x = e, this.shakePhoenix.y = i, s.addChild(this.shakePhoenix)
    }, e.prototype.setInfo = function(e, i) {
        this._bombid = i, this._pos = e, t.prototype.setEffect.call(this, "firePhoenix", e), ShakeTool.instance().shakeObj(this.shakePhoenix, this.shakeTime / 1e3, 15, 3);
        var s = BatteryFactory.instance.getBatteryByPos(this._pos);
        this.startPoint = s.getLocalPoint(0, 250), this.endPoint = s.getLocalPoint(0, -GameUtil.STAGEHEIGHT - 100), this.startTime = Game.instance.serverTime, this._bitmap.rotation = s.rotation, this.shakePhoenix.rotation = s.rotation, ScoreFactory.instance.showPhaseScore(0, this._bombid, this._pos)
    }, e.prototype.update = function(e) {
        var i = t.prototype.update.call(this, e),
            s = this.startTime;
        if (e > s && e < s + this.shakeTime && !this.isShowing) {
            if (s + this.changeTime < e) {
                var n = RES.getRes("effect4_json#burnPhoenix_1_png");
                this.shakePhoenix.texture = n
            }
            var o = (s + this.shakeTime - 50 - e) / this.hideTime;
            if (o = Math.max(Math.min(1, o), 0), this.shakePhoenix.alpha = o, 0 >= o) {
                var a = BatteryFactory.instance.getBatteryByPos(this._pos);
                this.show(0, this.flyTime + 100, this.startPoint, a.rotation)
            }
        }
        if (s += this.shakeTime, e > s && e < s + this.flyTime + 50) {
            this.playSoundFlag || (Music.instance.playSound(Music.FireBird), this.playSoundFlag = !0);
            var r = (e - s) / this.flyTime;
            r = Math.max(Math.min(1, r), 0), this._bitmap.x = (this.endPoint.x - this.startPoint.x) * r + this.startPoint.x, this._bitmap.y = (this.endPoint.y - this.startPoint.y) * r + this.startPoint.y, this._pos == User.myself.pos && this.updateCollider()
        }
        if (s += this.flyTime, e > s && !this.hasHideScore) {
            this.hasHideScore = !0;
            var a = BatteryFactory.instance.getBatteryByPos(this._pos);
            ScoreFactory.instance.hidePhaseScore(this._bombid, a.getLocalPoint(0, -150), !0, 600), egret.setTimeout(function(t, e) {
                var i = ScoreFactory.instance.getPhaseScore(t);
                ScoreFactory.instance.showBigWinScore(i, e)
            }, this, 500, this._bombid, this._pos)
        }
        return i
    }, e.prototype.updateCollider = function() {
        var t = this._bitmap.x,
            e = this._bitmap.y,
            i = BlastFactory.instance.getAreaFishes(t, e, this.hitBoxWidth, this.hitBoxHeight, 0);
        if (i && i.length > 0) {
            var s = [],
                n = i.length - 1;
            for (this.hitFishes || (this.hitFishes = []); n >= 0; n--) {
                var o = i[n].uid; - 1 == this.hitFishes.indexOf(o) && (s.push(o), this.hitFishes.push(o))
            }
            BlastFactory.instance.sendBombList(s, this._bombid, 0)
        }
    }, e.prototype.release = function() {
        t.prototype.release.call(this), this.shakePhoenix.texture = null, DisplayObjectPool.instance.putInPool(this.shakePhoenix), this.shakePhoenix = null, this.hitFishes = null, this.startPoint = null, this.endPoint = null, this.playSoundFlag = !1
    }, e
}(OrdinaryEffect);
__reflect(FirePhoenixEffect.prototype, "FirePhoenixEffect");
var FlySquirrelEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.shakeAngle = 10, e.startAngle = 0, e.shakeTime = 1800, e.moveTime1 = 1500, e.endAngle = 720, e.endScale = .25, e.stayTime = 700, e.moveTime2 = 500, e.haveFly = !1, e.flyTime = 5e3, e.timeDown = 3e4, e.passTime = 0, e.setBatteryBomb = !1, e
    }
    return __extends(e, t), e.prototype.init = function(t, e, i) {
        this.startPoint = new egret.Point(t, e), this.layer = i, this._bitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), i.addChild(this._bitmap), this._bitmap.x = t, this._bitmap.y = e;
        var s = RES.getRes("birds1_json#bird27_2_png");
        this._bitmap.texture = s, this._bitmap.anchorOffsetX = s.textureWidth / 2, this._bitmap.anchorOffsetY = s.textureHeight / 2, this.downTimeLabel = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.NEWBITMAPTEXT), this.downTimeLabel.width = 200, this.downTimeLabel.anchorOffsetX = 100, this.downTimeLabel.font = "bombTimeDown", this.downTimeLabel.letterSpacing = -5, this.downTimeLabel.textAlign = egret.HorizontalAlign.CENTER, this.squirrels = null, this.hitFishes = null, this.haveFly = !1, this.passTime = 0, this._clientID = Game.instance.clientUID, this.setBatteryBomb = !1
    }, e.prototype.trigger = function() {
        t.prototype.trigger.call(this), this.startFly()
    }, e.prototype.setInfo = function(t, e, i) {
        this._bombid = t, this._bombID = t, this.startAngle = e, this._pos = i, this.startTime = Game.instance.serverTime, this._bitmap.rotation = e;
        var s = BatteryFactory.instance.getBatteryByPos(this._pos);
        this.endPoint = s.getLocalPoint(-115, -63), this.endAngle += s.rotation, s instanceof MyBattery && (s.stopSendFire(!0), s.setStopLock(!0))
    }, e.prototype.startFly = function() {
        if (1 != this.haveFly && this.squirrels) {
            for (var t = 0, e = this.squirrels; t < e.length; t++) {
                var i = e[t];
                i.startFly(this.flyTime)
            }
            ScoreFactory.instance.showPhaseScore(0, this._bombid, this._pos);
            var s = BatteryFactory.instance.getBatteryByPos(this._pos);
            this.fireEffect = EffectFactory.instance.showEffect("batteryFire", this._pos, s.getLocalPoint(), 0, 5e4, !1, 0, s.rotation), this.haveFly = !0, this.downTimeLabel.text = ""
        }
    }, e.prototype.update = function(t) {
        this.updateSquirrel(t);
        var e = this.startTime;
        if (t > e && t < e + this.shakeTime) {
            var i = (t - e) / this.shakeTime;
            i = Math.max(Math.min(1, i), 0);
            var s = this.startAngle + this.shakeAngle * Math.sin(10 * i * Math.PI);
            this._bitmap.rotation = s
        }
        if (e += this.shakeTime, t > e && t < e + this.moveTime1 + 50) {
            var i = (t - e) / this.moveTime1;
            i = Math.max(Math.min(i, 1), 0), i = GameUtil.getQuadIn(i), this._bitmap.x = (this.endPoint.x - this.startPoint.x) * i + this.startPoint.x, this._bitmap.y = (this.endPoint.y - this.startPoint.y) * i + this.startPoint.y;
            var n = (this.endScale - 1) * i + 1;
            this._bitmap.scaleX = n, this._bitmap.scaleY = n;
            var o = BatteryFactory.instance.getBatteryByPos(this._pos),
                s = (o.rotation - this.startAngle) * i + this.startAngle;
            this._bitmap.rotation = s
        }
        if (e += this.moveTime1, t > e && t < e + this.stayTime && t > e + 50 && this.startPoint.x != this._bitmap.x) {
            this.createSquirrel();
            var o = BatteryFactory.instance.getBatteryByPos(this._pos);
            EffectFactory.instance.showEffect("batteryBomb", this._pos, o.getLocalPoint(), 1, 2e3, !0, 0, o.rotation), this.layer.addChild(this._bitmap), this.layer.addChild(this.downTimeLabel), this.downTimeLabel.x = this.endPoint.x, this.downTimeLabel.y = this.endPoint.y, this.downTimeLabel.rotation = o.rotation, this.downTimeLabel.text = "", this.startPoint = new egret.Point(this._bitmap.x, this._bitmap.y), this.endPoint = o.getLocalPoint(0, -63), this._bitmap.rotation = o.rotation
        }
        if (e += this.stayTime, t > e && t < e + this.moveTime2 + 50) {
            var i = (t - e) / this.moveTime2;
            i = Math.max(Math.min(i, 1), 0), this._bitmap.x = (this.endPoint.x - this.startPoint.x) * i + this.startPoint.x, this._bitmap.y = (this.endPoint.y - this.startPoint.y) * i + this.startPoint.y
        }
        if (e += this.moveTime2, t > e && t < e + this.stayTime, e += this.stayTime, t > e && t < e + this.moveTime2 + 50) {
            var i = (t - e) / this.moveTime2;
            if (i = 1 - Math.max(Math.min(i, 1), 0), this._bitmap.alpha = i, !this.setBatteryBomb && this._pos == User.myself.pos && !this.haveFly) {
                var o = BatteryFactory.instance.getMyBattery();
                o instanceof MyBattery && o.setBombID(this._bombid), this.setBatteryBomb = !0
            }
        }
        if (t > e && t < e + this.timeDown && !this.haveFly) {
            this.passTime = t - e;
            var a = (e + this.timeDown - t) / 1e3;
            a = Math.floor(a), this.downTimeLabel.text = a.toString()
        } else e + this.timeDown < t && (this.downTimeLabel.text = "", this.haveFly || this.startFly());
        if (e = e + this.passTime + this.flyTime, t > e) {
            var o = BatteryFactory.instance.getBatteryByPos(this._pos);
            return o instanceof MyBattery && (o.stopSendFire(!1), o.setStopLock(!1)), ScoreFactory.instance.hidePhaseScore(this._bombid, o.getLocalPoint(0, -150), !0, 600), EffectFactory.instance.hideEffect(this.fireEffect), egret.setTimeout(function(t, e) {
                var i = ScoreFactory.instance.getPhaseScore(t);
                ScoreFactory.instance.showBigWinScore(i, e)
            }, this, 500, this._bombid, this._pos), !0
        }
        return !1
    }, e.prototype.updateSquirrel = function(t) {
        if (this.squirrels) {
            for (var e = this.squirrels.length - 1; e >= 0; e--) {
                var i = this.squirrels[e],
                    s = i.update(t);
                s && (ObjectPool.instance.putInPool(i), this.squirrels.splice(e, 1))
            }
            if (this._pos == User.myself.pos) {
                e = this.squirrels.length - 1, this.hitFishes || (this.hitFishes = []);
                for (var n = []; e >= 0; e--) {
                    var i = this.squirrels[e],
                        o = i.getRealTimeModel();
                    if (o) {
                        var a = BlastFactory.instance.getAreaFishes(o.x, o.y, o.cw, o.ch, o.r);
                        a && n.push.apply(n, a)
                    }
                }
                if (n.length > 0) {
                    var r = [];
                    for (e = n.length - 1; e >= 0; e--) {
                        var h = n[e].uid; - 1 == this.hitFishes.indexOf(h) && (r.push(h), this.hitFishes.push(h))
                    }
                    BlastFactory.instance.sendBombList(r, this._bombid, 0)
                }
            }
        }
    }, e.prototype.createSquirrel = function() {
        if (!this.squirrels) {
            var t = BatteryFactory.instance.getBatteryByPos(this._pos);
            this.squirrels = [];
            for (var e = t.getLocalPoint(), i = [0, -35, 35, -70, 70], s = 4; s >= 0; s--) {
                var n = i[s] + t.rotation,
                    o = ObjectPool.instance.getObjectByClass(Squirrel);
                o.init(e.x, e.y, s, n, this.layer), this.squirrels.push(o)
            }
        }
    }, e.prototype.release = function() {
        if (t.prototype.release.call(this), this.layer = null, this.hitFishes = null, this.startPoint = null, this.endPoint = null, this.fireEffect = null, this.downTimeLabel.dispose(), DisplayObjectPool.instance.putInPool(this.downTimeLabel), this.downTimeLabel = null, this.squirrels)
            for (var e = 0, i = this.squirrels; e < i.length; e++) {
                var s = i[e];
                s.release()
            }
    }, e
}(Effect);
__reflect(FlySquirrelEffect.prototype, "FlySquirrelEffect");
var Squirrel = function() {
    function t() {
        this.start = !1, this.index = 0, this.rotation = 0, this.startFlyTime = 0, this.disappearTime = 5e3, this.hideDelay = 500, this.frameIdx = 0, this.lastFrameTime = 0, this.config = null, this.speedX = 0, this.speedY = 0, this.fromX = 0, this.fromY = 0, this.rotateSpeed = .4, this.endScale = 7, this.modelWidth = 150, this.modelHeight = 150
    }
    return t.prototype.init = function(t, e, i, s, n) {
        if (this.index = i, this.rotation = s, this.frameIdx = 0, this.fromX = t, this.fromY = e, this.speedX = GameUtil.SquirrelSpeed * Math.cos(GameUtil.angle2Radian(s - 90)), this.speedY = GameUtil.SquirrelSpeed * Math.sin(GameUtil.angle2Radian(s - 90)), this.config = GameUtil.getEffectConfig("flySquirrel_" + this.index), !this.config) return void LogManager.Error("fly squirrel index = " + this.index + " is not found");
        this.container = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.DISPLAYOBJECTCONTAINER), this.container.x = this.fromX, this.container.y = this.fromY, this.container.rotation = s, n.addChild(this.container);
        var o = this.getAtlasByIndex(this.frameIdx);
        this.bitmap_squirrel = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.container.addChild(this.bitmap_squirrel);
        var a = RES.getRes("effect" + o + "_json#" + this.config.name + "_" + this.frameIdx + "_png");
        this.bitmap_squirrel.texture = a, this.bitmap_squirrel.anchorOffsetX = a.textureWidth / 2, this.bitmap_squirrel.anchorOffsetY = a.textureHeight / 2, this.bitmap_squirrel.scaleX = this.config.scale, this.bitmap_squirrel.scaleY = this.config.scale
    }, t.prototype.getAtlasByIndex = function(t) {
        if (null == this.config) return -1;
        for (var e = 0, i = this.config.atlas, s = 0; s < i.length && !(i[s].frame > t); ++s) e = s;
        return i[e].atlas
    }, t.prototype.startFly = function(t) {
        this.disappearTime = t, this.startFlyTime = Game.instance.serverTime, this.lastFrameTime = this.startFlyTime, this.frameIdx = 0, this.start = !0, this.effect_circle = ObjectPool.instance.getObjectByClass(OrdinaryEffect), this.effect_circle.init(0, 0, this.container), this.effect_circle.setEffect("hitFish_1", -1), this.effect_circle.show(0, t - this.hideDelay), this.container.addChild(this.bitmap_squirrel), Music.instance.playSound(Music.ShootSquirrel)
    }, t.prototype.update = function(t) {
        if (this.effect_circle) {
            var e = this.effect_circle.update(t);
            e && (ObjectPool.instance.putInPool(this.effect_circle), this.effect_circle = null)
        }
        if (this.start) {
            if (t > this.startFlyTime + this.disappearTime) return !0;
            var i = this.calcActualCondition(t);
            if (this.container.x = i.x, this.container.y = i.y, this.container.rotation = this.rotation + (t - this.startFlyTime) * this.rotateSpeed, t - this.lastFrameTime > this.config.frameTime && this.frameIdx < this.config.frame) {
                this.lastFrameTime = t;
                var s = this.getAtlasByIndex(this.frameIdx);
                this.bitmap_squirrel.texture = RES.getRes("effect" + s + "_json#flySquirrel_" + this.index + "_" + this.frameIdx + "_png"), this.frameIdx++
            }
            var n = this.startFlyTime + this.disappearTime - this.hideDelay;
            if (t > n && t < this.startFlyTime + this.disappearTime + 50) {
                var o = (t - n) / this.hideDelay;
                o = Math.max(Math.min(o, 1), 0);
                var a = (this.endScale - this.config.scale) * o + this.config.scale;
                this.bitmap_squirrel.scaleX = a, this.bitmap_squirrel.scaleY = a, this.bitmap_squirrel.alpha = 1 - o
            }
        }
        return !1
    }, t.prototype.calcActualCondition = function(t) {
        var e = t - this.startFlyTime;
        e = e >= 0 ? e : 0;
        var i = Math.abs(this.fromX + this.speedX * e),
            s = Math.abs(this.fromY + this.speedY * e),
            n = Math.floor(i / GameUtil.STAGEWIDTH) % 2,
            o = Math.floor(s / GameUtil.STAGEHEIGHT) % 2;
        return n ? i = GameUtil.STAGEWIDTH - i % GameUtil.STAGEWIDTH : i %= GameUtil.STAGEWIDTH, o ? s = GameUtil.STAGEHEIGHT - s % GameUtil.STAGEHEIGHT : s %= GameUtil.STAGEHEIGHT, {
            x: Math.floor(i),
            y: Math.floor(s)
        }
    }, t.prototype.getRealTimeModel = function() {
        return this.start ? {
            x: this.container.x,
            y: this.container.y,
            r: 0,
            cw: this.modelWidth,
            ch: this.modelHeight
        } : null
    }, t.prototype.release = function() {
        ObjectPool.instance.putInPool(this.effect_circle), this.effect_circle = null, this.bitmap_squirrel.texture = null, DisplayObjectPool.instance.putInPool(this.bitmap_squirrel), this.bitmap_squirrel = null, DisplayObjectPool.instance.putInPool(this.container), this.container = null, this.start = !1
    }, t
}();
__reflect(Squirrel.prototype, "Squirrel", ["ObjectInterface"]);
var GoldenEggsEffect = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.isInitEgg = !1, e.isShowTimeLabel = !0, e.curSelectEgg = -1, e.frameTime = 50, e.frameIdx = 0, e.lastFrameTime = 0, e.startTime = 0, e.points = [{
            x: -80,
            y: 0
        }, {
            x: 0,
            y: 0
        }, {
            x: 80,
            y: 0
        }], e.scoreEndPoint = [{
            x: -80,
            y: -100
        }, {
            x: 0,
            y: -100
        }, {
            x: 80,
            y: -100
        }], e.score = 0, e.scoreUpTime = 500, e.scoreDelayTime = 2e3, e.scoreHideTime = 500, e.timeDown = 3e4, e.startDownTime = 0, e
    }
    return __extends(e, t), e.prototype.init = function(t, e, i) {
        this._clientID = Game.instance.clientUID, this.container = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.DISPLAYOBJECTCONTAINER), i.addChild(this.container), this.container.x = t, this.container.y = e, this.eggs = [];
        for (var s = RES.getRes("effect4_json#goldenEggs_0_png"), n = 0; 3 > n; n++) {
            var o = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP);
            this.container.addChild(o), o.texture = s, o.anchorOffsetX = s.textureWidth / 2, o.anchorOffsetY = s.textureHeight / 2, o.x = this.points[n].x, o.y = this.points[n].y, this.eggs.push(o)
        }
        s = RES.getRes("effect4_json#starEffect_0_png"), this.star = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.star.texture = s, this.star.anchorOffsetX = s.textureWidth / 2, this.star.anchorOffsetY = s.textureHeight / 2, this.container.addChild(this.star), this.star.visible = !1, this.scoreLabel = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.NEWBITMAPTEXT), this.scoreLabel.width = 200, this.scoreLabel.anchorOffsetX = 100, this.scoreLabel.font = "eggScore", this.scoreLabel.textAlign = egret.HorizontalAlign.CENTER, this.scoreLabel.letterSpacing = -5, this.scoreLabel.text = "", this.container.addChild(this.scoreLabel), this.downTimeLabel = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.NEWBITMAPTEXT), this.downTimeLabel.width = 200, this.downTimeLabel.anchorOffsetX = 100, this.downTimeLabel.font = "bombTimeDown", this.downTimeLabel.letterSpacing = -5, this.downTimeLabel.textAlign = egret.HorizontalAlign.CENTER, this.container.addChild(this.downTimeLabel)
    }, e.prototype.setInfo = function(t) {
        this._pos = t;
        var e = BatteryFactory.instance.getBatteryByPos(this._pos);
        if (e) {
            if (this.container.rotation = e.rotation, this.curSelectEgg = -1, this._pos == User.myself.pos && !this.isInitEgg) {
                for (var i = 0, s = this.eggs; i < s.length; i++) {
                    var n = s[i];
                    n.touchEnabled = !0, n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEgg, this)
                }
                e.stopSendFire(!0), e.setStopLock(!0), this.isInitEgg = !0
            }
            this.downTimeLabel.text = "", this.startDownTime = Game.instance.serverTime
        }
    }, e.prototype.getIsInitEgg = function() {
        return this.isInitEgg
    }, e.prototype.onClickEgg = function(t) {
        t.stopPropagation();
        var e = this.eggs.indexOf(t.currentTarget); - 1 != e && this.sendClickEgg(e)
    }, e.prototype.sendClickEgg = function(t) {
        for (var e = 0, i = this.eggs; e < i.length; e++) {
            var s = i[e];
            s.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEgg, this), s.touchEnabled = !1
        }
        this._pos == User.myself.pos && SceneController.c2szadando(t), this.startDownTime = 0, this.downTimeLabel.text = "", this.isShowTimeLabel = !1
    }, e.prototype.showEggEffect = function(t, e) {
        this.curSelectEgg = t, this.startTime = 0, this.lastFrameTime = Game.instance.serverTime, this.score = e, this.frameIdx = 0, this.startDownTime = 0, this.downTimeLabel.text = ""
    }, e.prototype.update = function(t) {
        if (0 != this.startDownTime) {
            var e = this.startDownTime + this.timeDown - t;
            if (0 >= e) {
                var i = GameUtil.randomInt(0, 3);
                this.sendClickEgg(i)
            } else e = Math.floor(e / 1e3), this.downTimeLabel.text = e.toString()
        }
        if (-1 != this.curSelectEgg) {
            var s = this.eggs[this.curSelectEgg];
            if (!s) return !0;
            if (t > this.lastFrameTime + this.frameTime) {
                if (this.frameIdx++, this.lastFrameTime = t, this.frameIdx < 73) s.texture = RES.getRes("effect4_json#goldenEggs_" + this.frameIdx + "_png");
                else {
                    var i = (this.frameIdx - 73) % 15;
                    i += 58, s.texture = RES.getRes("effect4_json#goldenEggs_" + i + "_png")
                }
                58 == this.frameIdx && (this.startTime = t, this.scoreLabel.text = this.score.toString(), this.scoreLabel.x = this.points[this.curSelectEgg].x, this.scoreLabel.y = this.points[this.curSelectEgg].y, this.star.x = this.scoreEndPoint[this.curSelectEgg].x, this.star.y = this.scoreEndPoint[this.curSelectEgg].y, this.star.visible = !0), this.startTime + this.scoreUpTime < t && (this.star.texture = RES.getRes("effect4_json#starEffect_" + this.frameIdx % 6 + "_png"))
            }
            if (0 != this.startTime) {
                var n = this.startTime;
                if (t > n && t < n + this.scoreUpTime + 50) {
                    var o = (t - n) / this.scoreUpTime;
                    o = Math.max(Math.min(o, 1), 0), this.scoreLabel.alpha = o, this.scoreLabel.scaleX = .5 + .5 * o, this.scoreLabel.scaleY = .5 + .5 * o;
                    var a = this.points[this.curSelectEgg],
                        r = this.scoreEndPoint[this.curSelectEgg];
                    this.scoreLabel.x = (r.x - a.x) * o + a.x, this.scoreLabel.y = (r.y - a.y) * o + a.y
                }
                if (n += this.scoreUpTime, t > n && t < n + this.scoreDelayTime, n += this.scoreDelayTime, t > n && t < n + this.scoreHideTime + 50) {
                    var o = (t - n) / this.scoreHideTime;
                    o = 1 - Math.max(Math.min(1, o), 0), this.scoreLabel.alpha = o, this.star.alpha = o
                }
                if (n + this.scoreHideTime < t) return this._pos == User.myself.pos && (BatteryFactory.instance.getMyBattery().stopSendFire(!1), BatteryFactory.instance.getMyBattery().setStopLock(!1), this.isInitEgg = !1, this.isShowTimeLabel = !0), !0
            }
        }
        return !1
    }, e.prototype.release = function() {
        for (var t = 0, e = this.eggs; t < e.length; t++) {
            var i = e[t];
            i.texture = null, DisplayObjectPool.instance.putInPool(i), i = null
        }
        this.eggs.length = 0, this.star.texture = null, DisplayObjectPool.instance.putInPool(this.star), this.star = null, this.downTimeLabel.dispose(), DisplayObjectPool.instance.putInPool(this.downTimeLabel), this.downTimeLabel = null, this.scoreLabel.dispose(), DisplayObjectPool.instance.putInPool(this.scoreLabel), DisplayObjectPool.instance.putInPool(this.container), this.scoreLabel = null, this.isInitEgg = !1
    }, e
}(Effect);
__reflect(GoldenEggsEffect.prototype, "GoldenEggsEffect");
var SceneController = function() {
    function t() {}
    return t.addAllListeners = function() {
        Main.socket.addListener({
            type: "increasesprites",
            callBack: t.s2cincreasesprites
        }), Main.socket.addListener({
            type: "decreasesprites",
            callBack: t.s2cdecreasesprites
        }), Main.socket.addListener({
            type: "hitsprites",
            callBack: t.s2chitsprites
        }), Main.socket.addListener({
            type: "broadplayer",
            callBack: t.s2cbroadbroadplayer
        }), Main.socket.addListener({
            type: "changescene",
            callBack: t.s2cchangescene
        }), Main.socket.addListener({
            type: "changeimmob",
            callBack: t.s2cchangeimmob
        }), Main.socket.addListener({
            type: "changelock",
            callBack: t.s2cchangelock
        }), Main.socket.addListener({
            type: "changegun",
            callBack: t.s2cchangegun
        }), Main.socket.addListener({
            type: "increasebomb",
            callBack: t.s2cincreasebomb
        }), Main.socket.addListener({
            type: "bombhit",
            callBack: t.s2cbombhit
        }), Main.socket.addListener({
            type: "feather",
            callBack: t.s2cfeather
        }), Main.socket.addListener({
            type: "zadando",
            callBack: t.s2czadando
        })
    }, t.removeAllListeners = function() {
        Main.socket.removeListener("increasesprites"), Main.socket.removeListener("decreasesprites"), Main.socket.removeListener("hitsprites"), Main.socket.removeListener("broadplayer"), Main.socket.removeListener("changescene"), Main.socket.removeListener("changeimmob"), Main.socket.removeListener("changelock"), Main.socket.removeListener("changegun"), Main.socket.addListener("increasebomb"), Main.socket.addListener("bombhit"), Main.socket.addListener("feather"), Main.socket.addListener("zadando")
    }, t.s2centerroom = function(e) {
        Loading.hide(), e.message.result ? (Game.instance.inScene = !0, Game.instance.sceneState = e.message.scenestate, GameUtil.COINRATE = e.message.coinrate, Game.instance.changeMapTime = e.message.scenetime, Game.instance.changeMapTime > Game.instance.serverTime && (Game.instance.serverTime = Game.instance.changeMapTime), e.message.isimmob ? Game.instance.freezeTime = e.message.immobstarttime : Game.instance.clearFreeze(), Game.instance.maxRate = e.message.max, Game.instance.minRate = e.message.min, Map.instance.enterRoom(e.message.sceneid), CoinFactory.instance.init(), BatteryFactory.instance.initFeather(e.message.feathers), BatteryFactory.instance.init(e.message.players), SceneOther.instance.init(), t.increasesprites(e.message.sprites, !0), t.addAllListeners(), Music.instance.playBGMByMapID(Map.instance.mapId)) : BannerFactory.instance.showText(e.errinfo)
    }, t.c2sleaveroom = function() {
        Game.instance.inScene && (t.clearRoom(), Main.socket.sendData({
            type: "leaveroom",
            message: {}
        })), LogonController.c2sroomTypeInfo(), Music.instance.stopAllSound()
    }, t.clearRoom = function() {
        FishFactory.instance.clear(), BlastFactory.instance.clear(), BulletFactory.instance.clear(), EffectFactory.instance.clear(), BatteryFactory.instance.clear(), SceneOther.instance.clear(), BannerFactory.instance.clear(), ScoreFactory.instance.clear(), Map.instance.clearMap(), Game.instance.inScene = !1, User.myself.clear()
    }, t.s2cincreasesprites = function(e) {
        t.increasesprites(e.message)
    }, t.s2cfeather = function(t) {
        var e = BatteryFactory.instance.getBatteryByPos(t.message.pos - 1);
        e && (e.setFeatherCount(t.message.num), LogManager.Log("羽毛数量：", t.message.num))
    }, t.c2szadando = function(t) {
        var e = {
            type: "zadando",
            message: {
                nth: t
            }
        };
        Main.socket.sendData(e), LogManager.Log("c=>s  前端发送砸蛋信息:", e)
    }, t.s2czadando = function(t) {
        if (LogManager.Log("s=>c  后端返回砸蛋信息:", t), t.message) {
            var e = t.message.pos - 1,
                i = t.message.nth,
                s = t.message.score,
                n = (t.message.rate, BatteryFactory.instance.getBatteryByPos(e));
            if (!n) return;
            n.triggerGoldenEgg(i, s)
        }
    }, t.s2cincreasebomb = function(t) {
        LogManager.Log(t);
        var e = t.message.bombs[0];
        if (!e) return void LogManager.Error("Bomb info is null");
        var i = e.id,
            s = e.fish_id,
            n = e.ext,
            o = e.pos - 1,
            a = e.type,
            r = 1;
        FishFactory.instance.beCaughtBomb(i, s, n, r, o, a)
    }, t.c2sbombhit = function(t) {
        Main.socket.sendData({
            type: "bombhit",
            message: t
        })
    }, t.s2cbombhit = function(t) {
        LogManager.Log("============DATA===============", t), BlastFactory.instance.bombOtherFish(t.message), 0 != t.message.bomb.shot_time && EffectFactory.instance.triggerEffect(t.message.bombid)
    }, t.s2cdecreasesprites = function(t) {
        t.message.forEach(function(t) {
            return BulletFactory.instance.destroyBullet(t.uid)
        })
    }, t.increasesprites = function(t, e) {
        void 0 === e && (e = !1);
        var i = [],
            s = [];
        t.forEach(function(t) {
            if (1 === t.type) i.push(t);
            else if (2 === t.type) {
                var n = {
                    uid: t.uid,
                    rate: t.rate,
                    born_time: e ? t.born_time : Game.instance.serverTime,
                    pos: t.pos - 1,
                    angel: t.angel
                };
                s.push(n)
            }
        }), FishFactory.instance.createFishes(i), BatteryFactory.instance.launchBullets(s)
    }, t.s2chitsprites = function(t) {
        BlastFactory.instance.separateSprites(t.message)
    }, t.s2cbroadbroadplayer = function(t) {
        BatteryFactory.instance.playerUpdate(t.message.type, t.message.player)
    }, t.s2cchangescene = function(t) {
        LogManager.Log("s2cchangescene", t);
        var e = t.message.state,
            i = t.message.servtime,
            s = t.message.sceneid;
        Game.instance.sceneState = e, e === GameUtil.MAPNORMAL ? (Music.instance.closeBGM(), Map.instance.changeMapEnd()) : e == GameUtil.FISHGROUP ? (User.myself.lock && FishFactory.instance.setLock(), SceneOther.instance.enableLockBtn(!0)) : e === GameUtil.CHANGEMAPING && (Game.instance.changeMapTime = i, Game.instance.serverTime = i, Game.instance.clearFreeze(), Map.instance.changeMap(s), BannerFactory.instance.showText(Lang.getTextByKey("fishesComing")), FishFactory.instance.unLock(), SceneOther.instance.enableLockBtn(!1), SceneOther.instance.removeAllLockFishes())
    }, t.s2cchangeimmob = function(t) {
        Game.instance.serverTime = t.message.server_time, Game.instance.clearFreeze()
    }, t.s2cchangelock = function(t) {
        --t.message.pos, t.message.fishid ? SceneOther.instance.addLockFish(t.message) : SceneOther.instance.removeLockFish(t.message.pos)
    }, t.c2schangegun = function() {
        Main.socket.sendData({
            type: "changegun",
            message: {
                gunid: 1
            }
        })
    }, t.s2cchangegun = function(t) {
        var e = BatteryFactory.instance.getBatteryByPos(t.message.pos - 1);
        e.changeGunType(t.message.gunid, t.message.gunnum)
    }, t
}();
__reflect(SceneController.prototype, "SceneController");
var OrdinaryScore = function() {
    function t() {}
    return t.prototype.init = function(t, e, i, s, n, o) {
        this._container = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.DISPLAYOBJECTCONTAINER), n.addChild(this._container);
        var a = 2 * Math.PI * Math.random();
        this._container.x = 25 * Math.cos(a) + t, this._container.y = 25 * Math.sin(a) + e, this._container.rotation = GameUtil.BATTERYLOCATIONS[s].angle, this._bitMapFont = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.NEWBITMAPTEXT), this._container.addChild(this._bitMapFont), this._bitMapFont.x = 0, this._bitMapFont.y = 0, this._bitMapFont.width = 0, this._bitMapFont.letterSpacing = 0, this._bitMapFont.textAlign = egret.HorizontalAlign.CENTER;
        var r = this.getFont(o);
        this._bitMapFont.font = r, this._bitMapFont.text = i.toString(), this._bitMapFont.scaleX = 1.3, this._bitMapFont.scaleY = 1.3, this._bitMapFont.alpha = 1, this._startTime = Game.instance.serverTime, this._doScaleTime = 500, this._stayTime = 800, this._displayTime = 2e3, this._doHideTime = 500
    }, t.prototype.getFont = function(t) {
        return 10 >= t ? "birdScore_10" : 15 >= t ? "birdScore_15" : 30 >= t ? "birdScore_30" : 100 >= t ? "birdScore_100" : 200 >= t ? "birdScore_200" : 400 >= t ? "birdScore_400" : "birdScore_max"
    }, t.prototype.update = function(t) {
        if (t > this._startTime + this._displayTime) return !0;
        var e = this._startTime;
        if (t > e && t < e + this._doScaleTime + 50) {
            var i = (t - e) / this._doScaleTime,
                s = this.scaleAni(i);
            this._bitMapFont.scaleX = s, this._bitMapFont.scaleY = s
        }
        if (e += this._doScaleTime, t > e && t < e + this._stayTime, e += this._stayTime, t > e && t < e + this._doHideTime + 50) {
            var i = (t - e) / this._doHideTime;
            i = Math.max(Math.min(1, i), 0), this._bitMapFont.y = -100 * i, this._bitMapFont.alpha = 1 - i
        }
        return !1
    }, t.prototype.scaleAni = function(t) {
        if (0 > t) return 1.3;
        if (t >= 1) return 1;
        var e = 0;
        return e = .75 > t ? 1.3 + .5 * Math.abs(Math.sin(2 * t * Math.PI)) : -3.2 * t + 4.2
    }, t.prototype.release = function() {
        this._bitMapFont.dispose(), DisplayObjectPool.instance.putInPool(this._bitMapFont), this._bitMapFont = null, DisplayObjectPool.instance.putInPool(this._container)
    }, t
}();
__reflect(OrdinaryScore.prototype, "OrdinaryScore", ["ObjectInterface"]);
var Main = function(t) {
    function e() {
        var i = t.call(this) || this;
        return i.noBehaveTime = 0, e.instance = i, i.addEventListener(egret.Event.ADDED_TO_STAGE, i.onAddToStage, i), i
    }
    return __extends(e, t), e.prototype.test = function() {
        LogManager.Error("Test Function");
        var t = Math.atan(1);
        LogManager.Log(180 * t / Math.PI), t = Math.atan(-1), LogManager.Log(180 * t / Math.PI), t = Math.atan2(10, -10), LogManager.Log(180 * t / Math.PI), t = Math.atan2(-10, -10), LogManager.Log(180 * t / Math.PI)
    }, e.prototype.onAddToStage = function(t) {
        egret.lifecycle.onPause = function() {
            Game.instance.inScene && BulletFactory.instance.changeBackstage()
        }, egret.lifecycle.onResume = function() {}, e.stage = this.stage, this.sceneLayer = new egret.DisplayObjectContainer, this.sceneLayer.anchorOffsetX = GameUtil.STAGEWIDTHHALF, this.sceneLayer.anchorOffsetY = GameUtil.STAGEHEIGHTHALF, this.sceneLayer.x = GameUtil.STAGEWIDTHHALF, this.sceneLayer.y = GameUtil.STAGEHEIGHTHALF, this.addChild(this.sceneLayer), this.uiLayer = new egret.DisplayObjectContainer, this.addChild(this.uiLayer), this.uiLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.eventStop, this), this.uiLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.eventStop, this), this.tipsLayer = new egret.DisplayObjectContainer, this.addChild(this.tipsLayer), this.tipsLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.eventStop, this), this.tipsLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.eventStop, this), e.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageTouch, this), this.runGame()["catch"](function(t) {
            LogManager.Log(t)
        })
    }, e.prototype.resetNoBehaveTime = function() {
        this.noBehaveTime = egret.getTimer() + 18e4
    }, e.prototype.onStageTouch = function(t) {
        this.resetNoBehaveTime()
    }, e.prototype.eventStop = function(t) {
        t.stopPropagation(), this.resetNoBehaveTime()
    }, e.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return Game.instance.lang = window.lang || "cn", [4, this.loadResource()];
                    case 1:
                        return i.sent(), t = new GmPanel, this.addChild(t), Lang.init(), Music.instance.init(), FishFactory.instance = new FishFactory, Map.instance.init(), BlastFactory.instance = new BlastFactory, BulletFactory.instance = new BulletFactory, EffectFactory.instance = new EffectFactory, CoinFactory.instance = new CoinFactory, BatteryFactory.instance = new BatteryFactory, FishFactory.instance.setCaughtedLayerDepth(), ScoreFactory.instance = new ScoreFactory, EffectFactory.instance.setTopEffectLayer(), SceneOther.instance = new SceneOther, Setting.instance.init(), BannerFactory.instance.init(), FishFactory.instance.correctLines(), e.stage.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this), this.resetNoBehaveTime(), [2]
                }
            })
        })
    }, e.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e, i, s, n, o, a, r, n, h;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return c.trys.push([0, 8, , 9]), egret.ImageLoader.crossOrigin = "anonymous", [4, RES.loadConfig(window['CDNADDRESS'] + 'public/public.res.json', window['CDNADDRESS'] + 'public/')];
                    case 1:
                        return c.sent(), [4, RES.loadConfig(window['CDNADDRESS'] + 'fishPublic/fishPublic.res.json', window['CDNADDRESS'] + 'fishPublic/')];
                    case 2:
                        return c.sent(), [4, RES.loadConfig(window['CDNADDRESS'] + '1011/c0d35c8725d61aebd7a65925e7aa2c2c.json', window['CDNADDRESS'] + '1011/')];
                    case 3:
                        for (c.sent(), t = ["preload_" + Game.instance.lang, "public", "music", "fishPublic"], e = 0, i = 0, s = t; i < s.length; i++) n = s[i], o = RES.getGroupByName(n), e += o.length;
                        LoadingUI.instance.init(e), LoadingUI.instance.addToStage(), a = 0, r = t, c.label = 4;
                    case 4:
                        return a < r.length ? (n = r[a], [4, RES.loadGroup(n)]) : [3, 7];
                    case 5:
                        c.sent(), c.label = 6;
                    case 6:
                        return a++, [3, 4];
                    case 7:
                        return [3, 9];
                    case 8:
                        return h = c.sent(), LogManager.Error(h), [3, 9];
                    case 9:
                        return [2]
                }
            })
        })
    }, e.prototype.onFrame = function() {
        var t = Game.instance.serverTime;
        BannerFactory.instance.onEnterFrame(t), Map.instance.onEnterFrame(t), Game.instance.inScene && (FishFactory.instance.onEnterFrame(t), BulletFactory.instance.onEnterFrame(t), BlastFactory.instance.onEnterFrame(t), BatteryFactory.instance.onEnterFrame(t), EffectFactory.instance.onEnterFrame(t), ScoreFactory.instance.onEnterFrame(t), SceneOther.instance.onEnterFrame(t), CoinFactory.instance.onEnterFrame(t)), egret.getTimer() > this.noBehaveTime && (this.resetNoBehaveTime(), PopupView.instance.setPopupData(11001))
    }, e.prototype.addToSceneLayer = function(t, e) {
        void 0 === e && (e = -1), e >= 0 ? this.sceneLayer.addChildAt(t, e) : this.sceneLayer.addChild(t)
    }, e.prototype.addToUILayer = function(t, e) {
        void 0 === e && (e = -1), e >= 0 ? this.uiLayer.addChildAt(t, e) : this.uiLayer.addChild(t)
    }, e.prototype.addToTipsLayer = function(t, e) {
        void 0 === e && (e = -1), e >= 0 ? this.tipsLayer.addChildAt(t, e) : this.tipsLayer.addChild(t)
    }, e.prototype.adjustAngle = function(t) {
        this.sceneLayer.rotation = t
    }, e
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var ScoreFactory = function() {
    function t() {
        this.scores = new Array, this.specialScores = new Array, this.phaseScores = new Array, this.layer = new egret.DisplayObjectContainer, Main.instance.addToSceneLayer(this.layer)
    }
    return t.prototype.clear = function() {
        this.scores.forEach(function(t) {
            ObjectPool.instance.putInPool(t)
        }), this.scores.length = 0, this.specialScores.forEach(function(t) {
            ObjectPool.instance.putInPool(t)
        }), this.specialScores.length = 0, this.phaseScores.forEach(function(t) {
            ObjectPool.instance.putInPool(t)
        }), this.phaseScores.length = 0
    }, t.prototype.clearByPos = function(t) {
        if (this.phaseScores && !(this.phaseScores.length <= 0))
            for (var e = this.phaseScores.length - 1; e >= 0; e--) {
                var i = this.phaseScores[e];
                i._pos == t && (ObjectPool.instance.putInPool(i), this.phaseScores.splice(e, 1))
            }
    }, t.prototype.showBigWinScore = function(t, e) {
        if (!(0 > t || !t || isNaN(t))) {
            var i = BatteryFactory.instance.getBatteryByPos(e),
                s = i.getLocalPoint(0, -150),
                n = ObjectPool.instance.getObjectByClass(SpecialScore);
            n.init(s.x, s.y, t, e, this.layer), this.specialScores.push(n), Music.instance.playSound(Music.WinPrize)
        }
    }, t.prototype.showScore = function(t, e, i, s, n) {
        if (void 0 === n && (n = 1), !(0 > i)) {
            var o = ObjectPool.instance.getObjectByClass(OrdinaryScore);
            o.init(t, e, i, s, this.layer, n), this.scores.push(o)
        }
    }, t.prototype.showPhaseScore = function(t, e, i) {
        var s = ObjectPool.instance.getObjectByClass(PhaseScore),
            n = BatteryFactory.instance.getBatteryByPos(i);
        if (n) {
            var o = n.getLocalPoint(100, -60);
            s.init(o.x, o.y, this.layer), s.setInfo(n.rotation, e, i), s.setScore(t), this.phaseScores.push(s)
        }
    }, t.prototype.addPhaseScore = function(t, e) {
        for (var i = 0, s = this.phaseScores; i < s.length; i++) {
            var n = s[i];
            if (n.scoreID == e) {
                n.addScore(t);
                break
            }
        }
    }, t.prototype.getPhaseScore = function(t) {
        for (var e = 0, i = this.phaseScores; e < i.length; e++) {
            var s = i[e];
            if (s.scoreID == t) return s.totalScore
        }
    }, t.prototype.hidePhaseScore = function(t, e, i, s) {
        for (var n = 0, o = this.phaseScores; n < o.length; n++) {
            var a = o[n];
            a.scoreID == t && a.hide(e, i, s)
        }
    }, t.prototype.onEnterFrame = function(t) {
        var e, i;
        for (e = this.scores.length - 1; e >= 0; --e) i = this.scores[e], i.update(t) && (ObjectPool.instance.putInPool(i), this.scores.splice(e, 1));
        for (e = this.specialScores.length - 1; e >= 0; --e) i = this.specialScores[e], i.update(t) && (ObjectPool.instance.putInPool(i), this.specialScores.splice(e, 1));
        for (e = this.phaseScores.length - 1; e >= 0; --e) i = this.phaseScores[e], i.update(t) && (ObjectPool.instance.putInPool(i), this.phaseScores.splice(e, 1))
    }, t
}();
__reflect(ScoreFactory.prototype, "ScoreFactory");
var ShakeTool = function() {
    function t() {
        this.count = 0, this.timer = new egret.Timer(1e3)
    }
    return t.instance = function() {
        return null == this._instance && (this._instance = new t), this._instance
    }, t.prototype.shakeObj = function(t, e, i, s) {
        this.stop(), this.target = t, this.initX = t.x, this.initY = t.y, this.maxDis = s, this.count = e * i, this.rate = i, this.timer.delay = 1e3 / i, this.timer.repeatCount = this.count, this.timer.addEventListener(egret.TimerEvent.TIMER, this.shaking, this), this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this), this.timer.reset(), this.timer.start()
    }, t.prototype.shaking = function() {
        egret.Tween.removeTweens(this.target), this.target.x = this.initX - this.maxDis + Math.random() * this.maxDis * 2, this.target.y = this.initY - this.maxDis + Math.random() * this.maxDis * 2, egret.Tween.get(this.target).to({
            x: this.initX,
            y: this.initY
        }, 999 / this.rate)
    }, t.prototype.shakeComplete = function() {
        this.target && (egret.Tween.removeTweens(this.target), this.target.x = this.initX, this.target.y = this.initY, this.target = null), this.timer.removeEventListener(egret.TimerEvent.TIMER, this.shaking, this), this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this)
    }, t.prototype.stop = function(t) {
        t ? this.target == t && this.shakeComplete() : this.shakeComplete()
    }, t
}();
__reflect(ShakeTool.prototype, "ShakeTool");
var SpecialScore = function() {
    function t() {
        this._startTime = 0, this._doAlphaTime = 1e3, this._displayTime = 7e3, this._doHideTime = 2e3, this._angularVelocity = 300
    }
    return t.prototype.init = function(t, e, i, s, n) {
        this._container = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.DISPLAYOBJECTCONTAINER), n.addChild(this._container), this._container.x = t, this._container.y = e, this._container.rotation = GameUtil.BATTERYLOCATIONS[s].angle;
        var o = RES.getRes("battery_json#bigWin_roll_1_png");
        this._bg0 = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._bg0.texture = o, this._bg0.anchorOffsetX = o.textureWidth / 2, this._bg0.anchorOffsetY = o.textureHeight / 2, this._container.addChild(this._bg0), this._bg0.x = 0, this._bg0.y = 0, o = RES.getRes("battery_json#bigWin_roll_0_png"), this._bg1 = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._bg1.texture = o, this._bg1.anchorOffsetX = o.textureWidth / 2, this._bg1.anchorOffsetY = o.textureHeight / 2, this._container.addChild(this._bg1), this._bg1.x = 0, this._bg1.y = 0, o = RES.getRes("battery_json#bigWin_center_1_png"), this._bg0_center = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._bg0_center.texture = o, this._bg0_center.anchorOffsetX = o.textureWidth / 2, this._bg0_center.anchorOffsetY = o.textureHeight / 2, this._container.addChild(this._bg0_center), this._bg0_center.x = 0, this._bg0_center.y = 0, o = RES.getRes("battery_json#bigWin_center_0_png"), this._bg1_center = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this._bg1_center.texture = o, this._bg1_center.anchorOffsetX = o.textureWidth / 2, this._bg1_center.anchorOffsetY = o.textureHeight / 2, this._container.addChild(this._bg1_center), this._bg1_center.x = 0, this._bg1_center.y = 0, this._bitMapFont = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.NEWBITMAPTEXT), this._bitMapFont.font = "bigWin", this._bitMapFont.width = 100, this._bitMapFont.anchorOffsetX = 50, this._container.addChild(this._bitMapFont), this._bitMapFont.x = 0, this._bitMapFont.y = 0, this._bitMapFont.letterSpacing = -5, this._bitMapFont.textAlign = egret.HorizontalAlign.CENTER, this._bitMapFont.text = i.toString(), this._startTime = Game.instance.serverTime
    }, t.prototype.update = function(t) {
        if (this._startTime + this._displayTime < t) return !0;
        var e = (t - this._startTime) / 1e3 * this._angularVelocity;
        this._bg0.rotation = e, this._bg1.rotation = e, e = 20 * Math.sin((t - this._startTime) / 1e3 * 2 * Math.PI), this._bitMapFont.rotation = e, e = Math.abs(Math.sin((t - this._startTime) / 1e3 * 2 * Math.PI)), this._bg1.alpha = e, this._bg1_center.alpha = e, this._startTime < t && t < this._startTime + this._doAlphaTime + 50 && (e = (t - this._startTime) / this._doAlphaTime, e = Math.max(Math.min(1, e), 0), this._bitMapFont.alpha = e), this._startTime + this._displayTime - this._doHideTime < t && (e = (this._startTime + this._displayTime - t) / this._doHideTime, e = Math.max(Math.min(1, e), 0), this._container.alpha = e)
    }, t.prototype.release = function() {
        this._bitMapFont.dispose(), DisplayObjectPool.instance.putInPool(this._bitMapFont), this._bitMapFont = null, this._bg0.texture = null, DisplayObjectPool.instance.putInPool(this._bg0), this._bg0 = null, this._bg1.texture = null, DisplayObjectPool.instance.putInPool(this._bg1), this._bg1 = null, this._bg0_center.texture = null, DisplayObjectPool.instance.putInPool(this._bg0_center), this._bg0_center = null, this._bg1_center.texture = null, DisplayObjectPool.instance.putInPool(this._bg1_center), this._bg1_center = null, DisplayObjectPool.instance.putInPool(this._container)
    }, t
}();
__reflect(SpecialScore.prototype, "SpecialScore", ["ObjectInterface"]);
var GameEvent = function(t) {
    function e(e, i, s, n) {
        void 0 === i && (i = null), void 0 === s && (s = !1), void 0 === n && (n = !1);
        var o = t.call(this, e, s, n) || this;
        return o.data = i, o
    }
    return __extends(e, t), e.SETLOCK = "setLock", e.SELECTFISH = "selectFish", e.ADDSCORE = "addScore", e.SHOWDEBUG = "showDebug", e.CHOOSETABLE = "chooseTable", e.CHOOSESCORE = "chooseScore", e
}(egret.Event);
__reflect(GameEvent.prototype, "GameEvent");
var GameEventDispatcher = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t), e.instance = new e, e
}(egret.EventDispatcher);
__reflect(GameEventDispatcher.prototype, "GameEventDispatcher");
var BinaryFish = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._sonType = 0, e._sonFrameIdx = 0, e._sonLastTime = 0, e._sonConfig = null, e
    }
    return __extends(e, t), e.prototype.init = function(e) {
        t.prototype.init.call(this, e), this._sonType = e.fishid, this._sonConfig = GameUtil.getFishConfig(this._sonType), this._sonConfig || LogManager.Error("cannot find son fish config which fish type = " + this._sonType), this._sonFrameIdx = 0, this._sonLastTime = Game.instance.serverTime;
        var i = this.getAtlasIndex(this._sonConfig, this._sonFrameIdx, this.state);
        this.sonBitmap = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), this.addChild(this.sonBitmap), this.sonBitmap.texture = RES.getRes("birds" + i + "_json#bird" + this._sonConfig.type + "_" + this._sonFrameIdx + "_png"), this.sonBitmap.anchorOffsetX = this._sonConfig.cx / this._sonConfig.scale, this.sonBitmap.anchorOffsetY = this._sonConfig.cy / this._sonConfig.scale, this.sonBitmap.scaleX = this._sonConfig.scale, this.sonBitmap.scaleY = this._sonConfig.scale
    }, e.prototype.updateFrame = function(e) {
        if (t.prototype.updateFrame.call(this, e), !(e < this.createTime || this.width + this.x < 0 && this.height + this.x < 0 || this.x - this.width > GameUtil.STAGEWIDTH && this.x - this.height > GameUtil.STAGEWIDTH || this.height + this.y < 0 && this.width + this.y < 0 || this.y - this.height > GameUtil.STAGEHEIGHT && this.y - this.width > GameUtil.STAGEHEIGHT || !(e - this._sonLastTime > this._sonConfig.frameTime))) {
            this._sonFrameIdx = ++this._sonFrameIdx % this._sonConfig.freeFrames;
            var i = this.getAtlasIndex(this._sonConfig, this._sonFrameIdx, this.state);
            this.sonBitmap.texture = RES.getRes("birds" + i + "_json#bird" + this._sonConfig.type + "_" + this._sonFrameIdx + "_png"), this._sonLastTime = e
        }
    }, e.prototype.caughtedUpdate = function(e) {
        if (e < this.disappearedTime - this.dieToDoScaleTime) {
            if (e - this.lastTime > this._sonConfig.frameTime / 2) {
                this._sonFrameIdx = ++this._sonFrameIdx % this._sonConfig.freeFrames;
                var i = this.getAtlasIndex(this._sonConfig, this._sonFrameIdx, Fish.FREE);
                this.sonBitmap.texture = RES.getRes("birds" + i + "_json#bird" + this._sonConfig.type + "_" + this._sonFrameIdx + "_png"), this.lastTime = e
            }
        } else if (this._sonConfig.capturedFrames > 0 && e - this.lastTime > this._sonConfig.frameTime) {
            this._sonFrameIdx = ++this._sonFrameIdx % this._sonConfig.capturedFrames;
            var i = this.getAtlasIndex(this._sonConfig, this._sonFrameIdx, this.state);
            this.sonBitmap.texture = RES.getRes("birds" + i + "_json#bird" + this._sonConfig.type + "_die_" + this._sonFrameIdx + "_png"), this.lastTime = e
        }
        var s = t.prototype.caughtedUpdate.call(this, e);
        return s
    }, e.prototype.beCaught = function(e, i, s) {
        void 0 === s && (s = null), t.prototype.beCaught.call(this, e, i, s), this._sonFrameIdx = 0
    }, e.prototype.lock = function() {}, e.prototype.unLock = function() {}, e.prototype.beClicked = function(t, e) {
        return this.sonBitmap.hitTestPoint(t, e, !0)
    }, Object.defineProperty(e.prototype, "sonType", {
        get: function() {
            return this._sonType
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.release = function() {
        t.prototype.release.call(this), this.sonBitmap.texture = null, DisplayObjectPool.instance.putInPool(this.sonBitmap), this.sonBitmap = null
    }, e
}(UnitaryFish);
__reflect(BinaryFish.prototype, "BinaryFish");
var TipsController = function() {
    function t() {}
    return t.addAllListeners = function() {
        Main.socket.addListener({
            type: "tips",
            callBack: t.s2ctips
        })
    }, t.s2ctips = function(t) {
        BannerFactory.instance.showText(t.message.notice)
    }, t
}();
__reflect(TipsController.prototype, "TipsController");
var FishFactory = function() {
    function t() {
        this.fishes = new Array, this.caughtedFishes = [], this.fishColliders = [], this.fishInfos = [], this.caughtedLayer = new egret.DisplayObjectContainer, this.layers = [];
        for (var t = 0; t < GameUtil.FISHATLAS; ++t) {
            var e = new egret.DisplayObjectContainer;
            Main.instance.addToSceneLayer(e), this.layers.push(e)
        }
        GameEventDispatcher.instance.addEventListener(GameEvent.SETLOCK, this.onSetLock, this)
    }
    return t.prototype.clear = function() {
        this.unLock(), this.fishes.forEach(function(t) {
            t.parent.removeChild(t), t.state = Fish.DIE, ObjectPool.instance.putInPool(t)
        }), this.fishes.length = 0, this.caughtedFishes.forEach(function(t) {
            t.parent.removeChild(t), t.state = Fish.DIE, ObjectPool.instance.putInPool(t)
        }), this.caughtedFishes.length = 0
    }, t.prototype.setCaughtedLayerDepth = function() {
        Main.instance.addToSceneLayer(this.caughtedLayer)
    }, t.prototype.onSetLock = function(t) {
        User.myself.lock ? this.setLock() : this.unLock()
    }, t.prototype.setLock = function() {
        var t = this;
        this.layers.forEach(function(e) {
            e.touchEnabled = !0, e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.clickFish, t)
        })
    }, t.prototype.unLock = function() {
        var t = this;
        this.layers.forEach(function(e) {
            e.touchEnabled = !1, e.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, t.clickFish, t)
        }), this.selectFish && (this.selectFish.unLock(), this.selectFish = null, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH)))
    }, Object.defineProperty(t.prototype, "topLayer", {
        get: function() {
            return this.caughtedLayer
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.changeMap = function() {
        Game.instance.sceneState === GameUtil.CHANGEMAPING ? this.unLock() : User.myself.lock && this.setLock()
    }, t.prototype.clickFish = function(t) {
        for (var e = !1, i = this.layers.indexOf(t.target); i >= 0; i--) {
            for (var s = this.layers[i], n = s.numChildren, o = BatteryFactory.instance.getMyBattery(), a = o.getIsStopLock(), r = n - 1; r >= 0; --r) {
                var h = s.getChildAt(r);
                if (h.state == Fish.FREE) {
                    if (1 == a) break;
                    if (h.hitTestPoint(t.stageX, t.stageY) && h.hitTestPoint(t.stageX, t.stageY, !0)) {
                        this.selectFish && this.selectFish.unLock(), this.selectFish = h, this.selectFish.lock();
                        var c = {
                            pos: User.myself.pos,
                            fishid: h.uid
                        };
                        SceneOther.instance.addLockFish(c), UserController.c2schangelocking(h.uid), e = !0, User.myself.resetFireInterval();
                        break
                    }
                }
            }
            if (e) break
        }
        if (!e && !this.selectFish) {
            var o = BatteryFactory.instance.getMyBattery();
            o.touchToFire(t.stageX, t.stageY, !0), User.myself.pressDown = !0
        }
    }, t.prototype.onEnterFrame = function(t) {
        var e, i, s = 0;
        for (s = this.fishes.length - 1; s >= 0; --s) e = this.fishes[s], i = e.freeUpdate(t), i && (e === this.selectFish && (this.selectFish.unLock(), this.selectFish = null, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH))), this.fishes.splice(s, 1), ObjectPool.instance.putInPool(e));
        this.selectFish && this.selectFish.isOutOfBounds(GameUtil.GameOBB) && (this.selectFish.unLock(), this.selectFish = null, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH)), UserController.c2scanclelocking()), this.caughtupdate(t)
    }, t.prototype.caughtupdate = function(t) {
        var e, i, s = 0;
        for (s = this.caughtedFishes.length - 1; s >= 0; --s) e = this.caughtedFishes[s], i = e.caughtedUpdate(t), i && (e.parent && e.parent.removeChild(e), this.caughtedFishes.splice(s, 1), e.state = Fish.DIE, ObjectPool.instance.putInPool(e))
    }, t.prototype.drawCollider = function() {
        for (var t, e = 0, i = this.fishes.length - 1; i >= 0; --i) {
            t = this.fishes[i];
            for (var s = t.getObbs(), n = 0; n < s.length; n++) {
                var o = s[n],
                    a = this.fishColliders[e];
                a || (a = new egret.Shape, a.alpha = .4, this.caughtedLayer.addChild(a), this.fishColliders.push(a)), a.visible = !0, a.x = o.x, a.y = o.y, a.rotation = o.rotation, a.anchorOffsetX = o.width / 2, a.anchorOffsetY = o.height / 2, a.graphics.clear(), a.graphics.beginFill(16711680), a.graphics.drawRect(0, 0, o.width, o.height), e++
            }
        }
        for (; e < this.fishColliders.length; e++) {
            var a = this.fishColliders[e];
            a.visible = !1
        }
    }, t.prototype.drawInfo = function() {
        for (var t, e, i = 0, s = this.fishes.length - 1; s >= 0; --s) t = this.fishes[s], e = this.fishInfos[i], e || (e = new egret.TextField, e.size = 20, this.caughtedLayer.addChild(e), this.fishInfos.push(e)), e.visible = !0, e.text = t.routeid + ", " + t.type + ", " + t.uid, e.x = t.x, e.y = t.y, e.anchorOffsetX = e.width / 2, e.anchorOffsetY = e.height / 2, i++;
        for (; i < this.fishInfos.length; i++) e = this.fishInfos[i], e.visible = !1
    }, t.prototype.createFishes = function(t) {
        for (var e = 0, i = 0, s = t; i < s.length; i++) {
            var n = s[i],
                o = this.getFreeFish(n.classid);
            o ? (o.init(n), Game.instance.sceneState === GameUtil.FISHGROUP ? this.layers[0].addChild(o) : (e = o.config.layer, this.layers[e].addChild(o)), this.fishes.push(o)) : LogManager.Error("con't find fish by type " + n.classid)
        }
    }, t.prototype.getAliveFishById = function(t) {
        for (var e = this.fishes.length - 1; e >= 0; --e)
            if (this.fishes[e].uid === t) return this.fishes[e];
        return null
    }, t.prototype.beCaught = function(t, e, i) {
        for (var s, n = t.uid, o = t.score, a = t.rate, r = this.fishes.length - 1; r >= 0; --r)
            if (s = this.fishes[r], s.uid === n) {
                var h = BatteryFactory.instance.getBatteryByPos(e);
                if (h) {
                    var c = {
                        x: s.x,
                        y: s.y,
                        rate: a,
                        pos: e,
                        score: o
                    };
                    21 == s.type ? (s.beCaught(0, e), EffectFactory.instance.showBossEffect(s, e, o)) : (s.beCaught(GameUtil.STRUGGLETIME, e), Music.instance.playSound(Music.HitNormalFish), CoinFactory.instance.createCoins(c), ScoreFactory.instance.showScore(s.x, s.y, o, e, i), h.createCoinGroup(o)), (19 == s.type || 20 == s.type) && ScoreFactory.instance.showBigWinScore(o, e), e == User.myself.pos && Music.instance.playSound(Music.GetCoin)
                }
                return s === this.selectFish && (this.selectFish.unLock(), this.selectFish = null, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH))), this.fishes.splice(r, 1), this.caughtedLayer.addChild(s), this.caughtedFishes.push(s), s
            } return null
    }, t.prototype.beCaughtSpecial = function(t, e, i, s) {
        var n = i.type;
        if (25 == n || 26 == n || 27 == n) return void LogManager.Error("do not in special " + n);
        for (var o, a = t.uid, r = t.score, h = (t.rate, this.fishes.length - 1); h >= 0; --h)
            if (o = this.fishes[h], o.uid === a) {
                var c = BatteryFactory.instance.getBatteryByPos(e);
                return c && (22 == n || 23 == n ? (o.beCaught(GameUtil.STRUGGLETIME, e, i), c.createCoinGroup(r), ScoreFactory.instance.showBigWinScore(r, e), EffectFactory.instance.showBombCoin(o, e, r), 22 == n ? Music.instance.playSound(Music.HitTristArRadius) : Music.instance.playSound(Music.HitFourUnitRadius)) : 24 == n && (o.beCaught(GameUtil.STRUGGLETIME, e, i), c.createCoinGroup(r), o.type == n && (ScoreFactory.instance.showBigWinScore(s, e), EffectFactory.instance.showBombStorm(o), Music.instance.playSound(Music.HitCleanSweep)))), o === this.selectFish && (this.selectFish.unLock(), this.selectFish = null, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH))), this.fishes.splice(h, 1), this.caughtedLayer.addChild(o), this.caughtedFishes.push(o), o
            } return null
    }, t.prototype.beCaughtBomb = function(t, e, i, s, n, o) {
        var a = BatteryFactory.instance.getBatteryByPos(n);
        if (a)
            for (var r = this.fishes.length - 1; r >= 0; r--) {
                var h = this.fishes[r];
                if (h.uid == e) {
                    if (25 == h.type ? (h.beCaught(0, n, h), EffectFactory.instance.showBombEffect(h, n, t), Music.instance.playSound(Music.HitDrum)) : 26 == h.type ? (h.beCaught(0, n, h), EffectFactory.instance.showPhoenixEffect(h, n, t)) : 27 == h.type ? (h.beCaught(0, n, h), EffectFactory.instance.showSquirrelEffect(h, n, t), Music.instance.playSound(Music.HitSquirrel)) : 28 == h.type ? (h.beCaught(0, n, h), EffectFactory.instance.showHugeBirdEffect(h, n, t)) : 29 == h.type && (h.beCaught(GameUtil.STRUGGLETIME, n, h), EffectFactory.instance.showFirePhoenix(h, n, t)), i > 0) {
                        var c = {
                            x: h.x,
                            y: h.y,
                            rate: s,
                            pos: n,
                            score: i
                        };
                        25 != h.type && 26 != h.type && 27 != h.type && (ScoreFactory.instance.showScore(h.x, h.y, i, n, s), CoinFactory.instance.createCoins(c), a.createCoinGroup(i))
                    }
                    return h === this.selectFish && (this.selectFish.unLock(), this.selectFish = null, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH))), this.fishes.splice(r, 1), this.caughtedLayer.addChild(h), this.caughtedFishes.push(h), h
                }
            }
    }, t.prototype.beCaughtByBomb = function(t, e, i, s) {
        var n = t.uid,
            o = t.score,
            a = t.rate,
            r = BatteryFactory.instance.getBatteryByPos(s);
        if (r) {
            for (var h, c = this.fishes.length - 1; c >= 0; --c)
                if (h = this.fishes[c], h.uid === n) {
                    var l = {
                        x: h.x,
                        y: h.y,
                        rate: a,
                        pos: s,
                        score: o
                    };
                    return h.beCaughtByBomb(GameUtil.STRUGGLETIME, s, i), CoinFactory.instance.createCoins(l), ScoreFactory.instance.showScore(h.x, h.y, o, s, a), r.createCoinGroup(o), (27 == i || 29 == i) && ScoreFactory.instance.addPhaseScore(o, e), s == User.myself.pos && Music.instance.playSound(Music.GetCoin), h === this.selectFish && (this.selectFish.unLock(), this.selectFish = null, GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH))), this.fishes.splice(c, 1), this.caughtedLayer.addChild(h), this.caughtedFishes.push(h), h
                } return null
        }
    }, t.prototype.getFreeFish = function(t) {
        var e = GameUtil.getFishConfig(t);
        if (e) switch (e.unit) {
            case 1:
                return ObjectPool.instance.getObjectByClass(UnitaryFish);
            case 2:
                return ObjectPool.instance.getObjectByClass(BinaryFish);
            case 3:
                return ObjectPool.instance.getObjectByClass(TristarFish);
            case 4:
                return ObjectPool.instance.getObjectByClass(FourUnitFish)
        }
        return null
    }, t.prototype.getSelectFish = function() {
        return this.selectFish
    }, t.prototype.changeSelectFish = function() {
        var t = this.getRandomFish(1);
        if (t || (t = this.getRandomFish(0)), t) {
            this.selectFish && this.selectFish.unLock(), this.selectFish = t, this.selectFish.lock();
            var e = {
                pos: User.myself.pos,
                fishid: this.selectFish.uid
            };
            SceneOther.instance.addLockFish(e), UserController.c2schangelocking(this.selectFish.uid), GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.SELECTFISH, e)), User.myself.resetFireInterval()
        }
    }, t.prototype.getRandomFish = function(t) {
        for (var e = [], i = 0, s = this.fishes; i < s.length; i++) {
            var n = s[i];
            n.state == Fish.FREE && (n.isOutOfBounds(GameUtil.GameOBB) || n.config.kind == t && e.push(n))
        }
        if (e.length > 0) {
            var o = Math.floor(Math.random() * e.length);
            return e[o]
        }
        return null
    }, t.prototype.resetCreateTime = function(t) {
        for (var e = this.fishes.length - 1; e >= 0; --e) {
            var i = this.fishes[e];
            i.resetCreateTime(t)
        }
    }, t.prototype.correctLines = function() {
        for (var t = RES.getRes("routes_json"), e = t.length, i = 0; e > i; ++i) 203 == i || 204 == i ? this.correctLine(t[i].line, 1) : this.correctLine(t[i].line)
    }, t.prototype.correctLine = function(t, e) {
        if (void 0 === e && (e = 0), t.length < 2) return alert("曲线至少需要两个点");
        if (1 == e) {
            var i = t.length,
                s = t[0],
                n = t[1];
            s.r = Math.floor(100 * GameUtil.calculateRotation(s.x, s.y, n.x, n.y)) / 100;
            for (var o = 0; i - 1 > o; ++o) {
                var a = t[o];
                a.r = s.r
            }
            t[t.length - 1].r = t[t.length - 2].r
        } else {
            for (var i = t.length, o = 0; i - 1 > o; ++o)
                for (var s = t[o], r = o + 1; i > r; ++r) {
                    var n = t[r];
                    if (s.x != n.x || s.y != n.y) {
                        s.r = Math.floor(100 * GameUtil.calculateRotation(s.x, s.y, n.x, n.y)) / 100;
                        break
                    }
                }
            t[t.length - 1].r = t[t.length - 2].r;
            for (var o = 0; o < t.length - 1; ++o) {
                var s = t[o],
                    n = t[o + 1];
                n.r = this.correctAngel(s.r, n.r)
            }
        }
    }, t.prototype.correctAngel = function(t, e) {
        var i = t % 360;
        i = 0 > i ? 360 + i : i;
        var s = e % 360;
        s = 0 > s ? 360 + s : s;
        var n = s - i,
            o = s > i ? 360 - s + i : 360 - i + s;
        return Math.abs(n) < Math.abs(o) ? t + n : s > i ? t - o : t + o
    }, t
}();
__reflect(FishFactory.prototype, "FishFactory");
var FourUnitFish = function(t) {
    function e() {
        var e = t.call(this, 4, GameUtil.FOURUNITANGLES, GameUtil.FOURUNITRADIUS) || this;
        return e.rollSpeed = 0, e.startTime = 0, e
    }
    return __extends(e, t), e.prototype.init = function(e) {
        this._sonCount = 4, this._offsetAngels = GameUtil.FOURUNITANGLES, this._radius = GameUtil.FOURUNITRADIUS, t.prototype.init.call(this, e), this.rollSpeed = 120, this.startTime = Game.instance.serverTime
    }, e.prototype.updateFrame = function(e) {
        t.prototype.updateFrame.call(this, e);
        var i = (e - this.startTime) / 1e3 * this.rollSpeed;
        this._bg.rotation = i
    }, e.prototype.caughtedUpdate = function(e) {
        var i = (e - this.startTime) / 1e3 * this.rollSpeed;
        if (this._bg.rotation = i, this._sonFishes)
            for (var s = 0, n = this._sonFishes; s < n.length; s++) {
                var o = n[s];
                o.visible = !1
            }
        var a = t.prototype.caughtedUpdate.call(this, e);
        return a
    }, e
}(PluralFish);
__reflect(FourUnitFish.prototype, "FourUnitFish");
var UserController = function() {
    function t() {}
    return t.addAllListeners = function() {
        Main.socket.addListener({
            type: "userinfo",
            callBack: t.s2cuserinfo
        }), Main.socket.addListener({
            type: "changerate",
            callBack: t.s2cchangerate
        }), Main.socket.addListener({
            type: "fire",
            callBack: t.s2cfire
        }), Main.socket.addListener({
            type: "hit",
            callBack: t.s2chit
        }), Main.socket.addListener({
            type: "user_kick",
            callBack: t.s2cuserkick
        }), Main.socket.addListener({
            type: "errorcode",
            callBack: t.s2cerror
        }), Main.socket.addListener({
            type: "marquee",
            callBack: t.s2cmarquee
        }), Main.socket.addListener({
            type: "electrichit",
            callBack: t.s2celectrichit
        })
    }, t.c2suserinfo = function() {
        Main.socket.sendData({
            type: "userinfo",
            message: {}
        })
    }, t.s2cuserinfo = function(t) {
        t.succ ? User.myself.init(t.message) : (LoadingUI.instance && LoadingUI.instance.removeFromStage(), BannerFactory.instance.showText(t.errinfo))
    }, t.c2schangerate = function(t) {
        Main.socket.sendData({
            type: "changerate",
            message: {
                rewardrate: t
            }
        })
    }, t.s2cchangerate = function(t) {
        1 != t.message.result && BannerFactory.instance.showText(t.errinfo)
    }, t.c2sfire = function(t, e) {
        Main.instance.resetNoBehaveTime(), t = parseFloat(t.toFixed(2)), Main.socket.sendData({
            type: "fire",
            message: {
                angel: t,
                bid: e
            }
        })
    }, t.s2cfire = function(t) {}, t.c2shit = function(t) {
        Main.socket.sendData({
            type: "hit",
            message: {
                fblist: t
            }
        })
    }, t.s2chit = function(t) {}, t.s2cuserkick = function(t) {}, t.s2cerror = function(t) {
        LoadingUI.instance && LoadingUI.instance.removeFromStage(), PopupView.instance.setPopupData(t.message.code, t.message.args)
    }, t.s2cmarquee = function(t) {
        NoticeView.instance.noticeHandler(t.message)
    }, t.c2schangbackstage = function() {
        Main.socket.sendData({
            type: "changbackstage",
            message: {}
        })
    }, t.c2schangelocking = function(t) {
        Main.socket.sendData({
            type: "changelocking",
            message: {
                fishid: t
            }
        })
    }, t.c2scanclelocking = function() {
        Main.socket.sendData({
            type: "canclelocking",
            message: {}
        })
    }, t.c2selectrichit = function(t) {
        Main.socket.sendData({
            type: "electrichit",
            message: {
                fishids: t
            }
        })
    }, t.s2celectrichit = function(t) {}, t
}();
__reflect(UserController.prototype, "UserController");
var TristarFish = function(t) {
    function e() {
        var e = t.call(this, 3, GameUtil.TRISTARANGLES, GameUtil.TRISTARRADIUS) || this;
        return e.rollSpeed = 0, e.startTime = 0, e
    }
    return __extends(e, t), e.prototype.init = function(e) {
        this._sonCount = 3, this._offsetAngels = GameUtil.TRISTARANGLES, this._radius = GameUtil.TRISTARRADIUS, t.prototype.init.call(this, e), this.rollSpeed = 100, this.startTime = Game.instance.serverTime
    }, e.prototype.updateFrame = function(e) {
        t.prototype.updateFrame.call(this, e);
        var i = (e - this.startTime) / 1e3 * this.rollSpeed;
        this._bg.rotation = i
    }, e.prototype.caughtedUpdate = function(e) {
        var i = (e - this.startTime) / 1e3 * this.rollSpeed;
        if (this._bg.rotation = i, this._sonFishes)
            for (var s = 0, n = this._sonFishes; s < n.length; s++) {
                var o = n[s];
                o.visible = !1
            }
        var a = t.prototype.caughtedUpdate.call(this, e);
        return a
    }, e
}(PluralFish);
__reflect(TristarFish.prototype, "TristarFish");
var DisplayObjectPool = function() {
    function t() {
        this._pool = {}
    }
    return t.prototype.getElementByName = function(t) {
        var e = t.prototype.__class__;
        return this._pool[e] && this._pool[e].length ? this._pool[e].pop() : new t
    }, t.prototype.putInPool = function(t) {
        t.parent && t.parent.removeChild(t), t.x = 0, t.y = 0, t.skewX = 0, t.skewY = 0, t.alpha = 1, t.scaleX = 1, t.scaleY = 1, t.rotation = 0, t.anchorOffsetX = 0, t.anchorOffsetY = 0, t.mask = null, t.width = void 0, t.height = void 0, t.visible = !0;
        var e = t.__proto__.__class__;
        this._pool[e] || (this._pool[e] = []), this._pool[e].indexOf(t) > -1 ? console.error("重复了") : this._pool[e].push(t)
    }, t.instance = new t, t.BITMAP = egret.Bitmap, t.SHAPE = egret.Shape, t.DISPLAYOBJECTCONTAINER = egret.DisplayObjectContainer, t.NEWBITMAPTEXT = NewBitmapText, t
}();
__reflect(DisplayObjectPool.prototype, "DisplayObjectPool");
var GmPanel = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.init(), e
    }
    return __extends(e, t), e.prototype.init = function() {
        this.textField0 = new egret.TextField, this.textField0.y = 50, this.textField0.width = 365, this.textField0.height = 540, this.textField0.size = 20, this.textField0.strokeColor = 255, this.textField0.stroke = 2, this.addChild(this.textField0), this.textField1 = new egret.TextField, this.textField1.x = 385, this.textField1.y = 50, this.textField1.width = 365, this.textField1.height = 540, this.textField1.size = 20, this.textField1.strokeColor = 255, this.textField1.stroke = 2, this.addChild(this.textField1), this.textField2 = new egret.TextField, this.textField2.x = 770, this.textField2.y = 50, this.textField2.width = 365, this.textField2.height = 540, this.textField2.size = 20, this.textField2.strokeColor = 255, this.textField2.stroke = 2, this.addChild(this.textField2), GameEventDispatcher.instance.addEventListener(GameEvent.SHOWDEBUG, this.addDebugMsg, this)
    }, e.prototype.addDebugMsg = function(t) {
        var e = t.data.message,
            i = "";
        if (0 === e.type) i = this.joinMsg(e.args);
        else
            for (var s = e.args.length, n = 0; s > n; ++n) i += this.joinMsg(e.args[n]);
        this["textField" + e.type].text = i
    }, e.prototype.joinMsg = function(t) {
        var e = "";
        for (var i in t) e += i + "：" + t[i] + "\n";
        return e
    }, e
}(egret.DisplayObjectContainer);
__reflect(GmPanel.prototype, "GmPanel");
var LayerManager = function() {
    function t() {
        this.__layers = new Array, this.__sceneLayer = new egret.DisplayObjectContainer, this.__sceneLayer.anchorOffsetX = GameUtil.STAGEWIDTHHALF, this.__sceneLayer.anchorOffsetY = GameUtil.STAGEHEIGHTHALF, this.__sceneLayer.x = GameUtil.STAGEWIDTHHALF, this.__sceneLayer.y = GameUtil.STAGEHEIGHTHALF, Main.instance.addChild(this.__sceneLayer);
        for (var t, e = 12 + GameUtil.FISHATLAS; e;) t = new egret.DisplayObjectContainer, this.__layers.push(t), this.__sceneLayer.addChild(t), --e;
        this.__uiLayer = new egret.DisplayObjectContainer, Main.instance.addChild(this.__uiLayer), this.__tipsLayer = new egret.DisplayObjectContainer, Main.instance.addChild(this.__tipsLayer)
    }
    return t.prototype.adjustAngle = function(t) {
        this.__sceneLayer.rotation = t
    }, t.prototype.addToSceneLayer = function(t, e) {
        this.__layers[e].addChild(t)
    }, t.prototype.addToUILayer = function(t) {
        this.__uiLayer.addChild(t)
    }, t.prototype.addToTipsLayer = function(t) {
        this.__tipsLayer.addChild(t)
    }, t.MAPLAYER = 0, t.FISHLAYER = 1, t.NAMEPLATELAYER = t.FISHLAYER + GameUtil.FISHATLAS, t.NETLAYER = t.NAMEPLATELAYER + 1, t.BULLETLAYER = t.NAMEPLATELAYER + 2, t.SENIORBULLETLAYER = t.NAMEPLATELAYER + 3, t.CATCHLAYER = t.NAMEPLATELAYER + 4, t.EFFECTLAYER = t.NAMEPLATELAYER + 5, t.COINLAYER = t.NAMEPLATELAYER + 6, t.SCORELAYER = t.NAMEPLATELAYER + 7, t.CUTSCENESLAYER = t.NAMEPLATELAYER + 8, t.BATTERYLAYER = t.NAMEPLATELAYER + 9, t.SENIORBATTERYLAYER = t.NAMEPLATELAYER + 10, t
}();
__reflect(LayerManager.prototype, "LayerManager");
var Map = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._mapId = 0, e.starPos = [{
            x: 260,
            y: -315
        }, {
            x: 210,
            y: -225
        }, {
            x: 165,
            y: -135
        }, {
            x: 145,
            y: -45
        }, {
            x: 145,
            y: 45
        }, {
            x: 165,
            y: 135
        }, {
            x: 210,
            y: 225
        }, {
            x: 260,
            y: 315
        }], e.moveing = !1, e.frameIdx = 0, e.frameTime = 50, e.lastFrame = 0, e.waveFrame = 8, e.starFrame = 24, e.speedX = 0, e.moveFromX = 0, e
    }
    return __extends(e, t), e.prototype.init = function() {
        var t = RES.getRes("map_" + this._mapId + "_jpg");
        this.map = new egret.Bitmap(t), this.addChild(this.map), t = RES.getRes("mapEff_json#blackMask_png"), this.blackMask = new egret.Bitmap(t), this.blackMask.width = this.map.width, this.blackMask.height = this.map.height, this.blackMask.scale9Grid = new egret.Rectangle(2, 2, 4, 4), this.addChild(this.blackMask), this.blackMask.visible = !1, this.moveContainer = new egret.DisplayObjectContainer, this.moveContainer.x = 0, this.moveContainer.y = this.map.height / 2, this.addChild(this.moveContainer), this.moveContainer.visible = !1, t = RES.getRes("map_change_png"), this.waterSki = new egret.Bitmap(t), this.moveContainer.addChild(this.waterSki), this.waterSki.anchorOffsetY = t.textureHeight / 2, this.waterSki.x = 0, this.waterSki.y = 0, t = RES.getRes("mapEff_json#mapEff_0_png"), this.wave = new egret.Bitmap(t), this.moveContainer.addChild(this.wave), this.wave.anchorOffsetY = t.textureHeight / 2, this.wave.x = 0, this.wave.y = 0, this.stars = [], t = RES.getRes("mapEff_json#mapStar_0_png");
        for (var e = 0, i = this.starPos; e < i.length; e++) {
            var s = i[e],
                n = new egret.Bitmap(t);
            n.x = s.x, n.y = s.y, n.anchorOffsetX = t.textureWidth / 2, n.anchorOffsetY = t.textureHeight / 2, this.moveContainer.addChild(n), this.stars.push(n)
        }
        t = RES.getRes("mapEff_json#map_logo_png"), this.logo = new egret.Bitmap(t), this.logo.anchorOffsetX = t.textureWidth / 2, this.logo.anchorOffsetY = t.textureHeight / 2, this.addChild(this.logo), this.logo.visible = !1, this.logo.x = .8 * GameUtil.STAGEWIDTH, this.logo.y = GameUtil.STAGEHEIGHTHALF, Main.instance.addToSceneLayer(this, 0)
    }, e.prototype.clearMap = function() {
        this.moveing = !1, this.moveContainer.visible = !1, this.logo.visible = !1, this.blackMask.alpha = 0, Music.instance.closeBGM()
    }, e.prototype.enterRoom = function(t) {
        Game.instance.sceneState === GameUtil.CHANGEMAPING ? this.changeMap(t) : (this._mapId = t, this.map.texture = RES.getRes("map_" + this._mapId + "_jpg"), Music.instance.playBGMByMapID(this._mapId))
    }, e.prototype.changeMap = function(t) {
        if (this._mapId = t, this.moveing) LogManager.Error("当前正在切换场景中");
        else {
            this.moveing = !0, Music.instance.playSound(Music.changeScene), User.myself.angel ? (this.speedX = .3, this.moveFromX = 0, this.moveContainer.rotation = 180, this.logo.rotation = 180) : (this.speedX = -.3, this.moveFromX = GameUtil.STAGEWIDTH, this.moveContainer.rotation = 0, this.logo.rotation = 0);
            var e = Game.instance.serverTime - Game.instance.changeMapTime;
            this.moveContainer.x = e * this.speedX + this.moveFromX, this.moveContainer.visible = !0, this.blackMask.visible = !0, this.blackMask.alpha = 0, this.frameIdx = 0, this.logo.x = 4 * GameUtil.STAGEWIDTH / 5, this.logo.visible = !0, this.logo.alpha = 0, Music.instance.closeBGM(), Music.instance.playSound(Music.ChangeMap, Game.instance.serverTime - Game.instance.changeMapTime)
        }
    }, e.prototype.onEnterFrame = function(t) {
        if (this.moveing) {
            var e = Game.instance.serverTime - Game.instance.changeMapTime,
                i = e * this.speedX + this.moveFromX;
            if (this.moveContainer.x = i, t - this.lastFrame > this.frameTime) {
                this.frameIdx++, this.lastFrame = t;
                var s = RES.getRes("mapEff_json#mapEff_" + this.frameIdx % this.waveFrame + "_png");
                this.wave.texture = s, s = RES.getRes("mapEff_json#mapStar_" + this.frameIdx % this.starFrame + "_png");
                for (var n = 0, o = this.stars; n < o.length; n++) {
                    var a = o[n];
                    a.texture = s
                }
            }
            var r = Math.abs(i - this.moveFromX);
            if (r > 0 && r <= .5 * GameUtil.STAGEWIDTH + 30) {
                var h = r / (.5 * GameUtil.STAGEWIDTH);
                h = Math.max(Math.min(1, h), 0), this.blackMask.alpha = h, h >= 1 && (this.map.texture = RES.getRes("map_" + this._mapId + "_jpg"))
            }
            var c = 1.5 * GameUtil.STAGEWIDTH;
            if (r > c && r < c + .5 * GameUtil.STAGEWIDTH + 30) {
                var h = (r - c) / (.5 * GameUtil.STAGEWIDTH);
                h = Math.max(Math.min(1, 1 - h), 0), this.blackMask.alpha = h, h >= 1 && (this.map.texture = RES.getRes("map_" + this._mapId + "_jpg"))
            }
            if (c = .9 * GameUtil.STAGEWIDTH, r > c && r < c + .9 * GameUtil.STAGEWIDTH + 30) {
                var l = (r - c) / (.9 * GameUtil.STAGEWIDTH);
                l = 1 - Math.max(Math.min(1, l), 0), this.logo.x = GameUtil.STAGEWIDTH * (.3 + .4 * l), User.myself.angel ? this.logo.rotation = 180 : this.logo.rotation = 0
            }
            if (r > c && r < c + .25 * GameUtil.STAGEWIDTH + 30) {
                var l = (r - c) / (.25 * GameUtil.STAGEWIDTH);
                l = Math.max(Math.min(1, l), 0), this.logo.alpha = l
            }
            if (c = 1.6 * GameUtil.STAGEWIDTH, r > c && r < c + .25 * GameUtil.STAGEWIDTH + 30) {
                var l = (r - c) / (.25 * GameUtil.STAGEWIDTH);
                l = 1 - Math.max(Math.min(1, l), 0), this.logo.alpha = l
            }
            r > this.waterSki.width + GameUtil.STAGEWIDTH && this.changeMapEnd()
        }
    }, e.prototype.changeMapEnd = function() {
        this.moveing = !1, this.moveContainer.visible = !1, this.logo.visible = !1, this.map.texture = RES.getRes("map_" + this._mapId + "_jpg"), Music.instance.playBGMByMapID(this._mapId)
    }, e.prototype.shakeMap = function(t, e, i) {
        void 0 === t && (t = 1), void 0 === e && (e = 15), void 0 === i && (i = 3), ShakeTool.instance().shakeObj(this.map, t, e, i)
    }, Object.defineProperty(e.prototype, "mapId", {
        get: function() {
            return this._mapId
        },
        enumerable: !0,
        configurable: !0
    }), e.instance = new e, e
}(egret.DisplayObjectContainer);
__reflect(Map.prototype, "Map");
var Music = function() {
    function t() {
        this._soundInfos = []
    }
    return t.prototype.init = function() {
        var t = this;
        this.pool = new Array, setInterval(function() {
            return t.update()
        }, 10)
    }, t.prototype.update = function() {
        for (var t = egret.getTimer(), e = this._soundInfos.length, i = e - 1; i >= 0; --i) {
            var s = this._soundInfos[i];
            t >= s.endTime && (s.channel.stop(), this.putInPool(s), this._soundInfos.splice(i, 1))
        }
    }, t.prototype.playBGMByMapID = function(t) {
        return this.closeBGM(), this._curBGM = "bg_" + t + "_mp3", this.playBGM(this._curBGM)
    }, t.prototype.playBGMByName = function(t) {
        return this._curBGM = t, this.playBGM(this._curBGM)
    }, t.prototype.continueCurBGM = function() {
        return this.playBGM(this._curBGM)
    }, t.prototype.playBGM = function(t, e, i) {
        if (void 0 === e && (e = -1), void 0 === i && (i = 0), !t || "" == t) return null;
        var s = RES.getRes(t);
        return s && !Game.instance.mute ? (this.closeBGM(), this._bgmChannel = s.play(i, e), this._bgmChannel) : null
    }, t.prototype.closeBGM = function() {
        this._bgmChannel && (this._bgmChannel.stop(), this._bgmChannel = null)
    }, t.prototype.playSound = function(e, i) {
        if (void 0 === i && (i = 0), !Game.instance.mute) {
            var s = t.SOUNDEFFECTCONFIG[e];
            i = i < s.duration ? i : s.duration;
            var n = this.getFreeSound(s.source);
            n.endTime = egret.getTimer() + s.duration - i, n.sound && (n.channel = n.sound.play((s.startTime + i) / 1e3, 1), this._soundInfos.push(n))
        }
    }, t.prototype.recoveryAllSound = function() {
        Game.instance.inScene && this.playBGMByName(this._curBGM)
    }, t.prototype.stopAllSound = function() {
        var t = this;
        this.closeBGM(), this._soundInfos.forEach(function(e) {
            e.channel.stop(), t.putInPool(e)
        }), this._soundInfos = []
    }, t.prototype.getFreeSound = function(t) {
        if (this.pool.length)
            for (var e = 0; e < this.pool.length; e++) {
                var i = this.pool[e];
                if (i.source === t) return this.pool.splice(e, 1), i
            }
        return {
            source: t,
            sound: RES.getRes(t),
            channel: null,
            endTime: 0
        }
    }, t.prototype.putInPool = function(t) {
        this.pool.push(t)
    }, t.SOUNDEFFECTCONFIG = [{
        source: "functionSound_mp3",
        startTime: 0,
        duration: 4e3
    }, {
        source: "functionSound_mp3",
        startTime: 5e3,
        duration: 800
    }, {
        source: "functionSound_mp3",
        startTime: 6e3,
        duration: 200
    }, {
        source: "functionSound_mp3",
        startTime: 7e3,
        duration: 1200
    }, {
        source: "functionSound_mp3",
        startTime: 9e3,
        duration: 3e3
    }, {
        source: "functionSound_mp3",
        startTime: 12e3,
        duration: 2e3
    }, {
        source: "functionSound_mp3",
        startTime: 15e3,
        duration: 4200
    }, {
        source: "functionSound_mp3",
        startTime: 20200,
        duration: 200
    }, {
        source: "functionSound_mp3",
        startTime: 21e3,
        duration: 400
    }, {
        source: "functionSound_mp3",
        startTime: 22e3,
        duration: 5400
    }, {
        source: "functionSound1_mp3",
        startTime: 0,
        duration: 5e3
    }, {
        source: "functionSound1_mp3",
        startTime: 5400,
        duration: 1700
    }, {
        source: "functionSound1_mp3",
        startTime: 7600,
        duration: 1900
    }, {
        source: "functionSound1_mp3",
        startTime: 1e4,
        duration: 3e3
    }, {
        source: "functionSound1_mp3",
        startTime: 13500,
        duration: 2e3
    }, {
        source: "functionSound1_mp3",
        startTime: 16e3,
        duration: 1700
    }, {
        source: "functionSound1_mp3",
        startTime: 18e3,
        duration: 1200
    }, {
        source: "functionSound1_mp3",
        startTime: 19800,
        duration: 500
    }, {
        source: "functionSound1_mp3",
        startTime: 20700,
        duration: 500
    }, {
        source: "functionSound1_mp3",
        startTime: 21500,
        duration: 2e3
    }, {
        source: "functionSound1_mp3",
        startTime: 24e3,
        duration: 500
    }, {
        source: "functionSound1_mp3",
        startTime: 25e3,
        duration: 700
    }, {
        source: "functionSound1_mp3",
        startTime: 26e3,
        duration: 1e3
    }, {
        source: "functionSound1_mp3",
        startTime: 27500,
        duration: 2200
    }, {
        source: "functionSound1_mp3",
        startTime: 30100,
        duration: 1500
    }, {
        source: "functionSound1_mp3",
        startTime: 32e3,
        duration: 600
    }, {
        source: "functionSound1_mp3",
        startTime: 33e3,
        duration: 500
    }, {
        source: "functionSound1_mp3",
        startTime: 34e3,
        duration: 500
    }, {
        source: "functionSound1_mp3",
        startTime: 34800,
        duration: 4200
    }], t.ChangeMap = 0, t.ChangeMutiple = 1, t.Fire = 2, t.GetCoin = 3, t.changeToPower = 4, t.changeToNormal = 5, t.ColourScore = 6, t.ClickButton = 7, t.SwitchRoom = 8, t.HitBomb = 9, t.WinPrize = 10, t.SmashEggs = 11, t.BombFall = 12, t.BombBirdFlyOver = 13, t.BombExplode = 14, t.FireWorks = 15, t.BirdFlyCenter = 16, t.HitCleanSweep = 17, t.HitNormalFish = 18, t.HitDrum = 19, t.HitSquirrel = 20, t.HitFourUnitRadius = 21, t.HitTristArRadius = 22, t.FireBird = 23, t.ChangeValue = 24, t.ShootSquirrel = 25, t.BatteryFandS = 26, t.BatteryTandF = 27, t.changeScene = 28, t.instance = new t, t
}();
__reflect(Music.prototype, "Music");
var BannerFactory = function() {
    function t() {}
    return t.prototype.init = function() {
        this.banners = [], this.layer = new egret.DisplayObjectContainer, Main.instance.addToTipsLayer(this.layer)
    }, t.prototype.clear = function() {
        this.banners.forEach(function(t) {
            ObjectPool.instance.putInPool(t)
        }), this.banners.length = 0
    }, t.prototype.showText = function(t) {
        var e = ObjectPool.instance.getObjectByClass(TextBanner);
        e.init(this.layer, t), this.banners.push(e)
    }, t.prototype.onEnterFrame = function(t) {
        for (var e = this.banners.length - 1; e >= 0; --e) {
            var i = this.banners[e],
                s = i.update(t);
            s && (ObjectPool.instance.putInPool(i), this.banners.splice(e, 1))
        }
    }, t.instance = new t, t
}();
__reflect(BannerFactory.prototype, "BannerFactory");
var Loading = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.__idx = 0, e.x = GameUtil.STAGEWIDTHHALF, e.y = GameUtil.STAGEHEIGHTHALF, e.__ring = new egret.Bitmap, e.__ring.texture = RES.getRes("common_json#ring"), e.__ring.anchorOffsetX = 37.5, e.__ring.anchorOffsetY = 37.5, e.addChild(e.__ring), e.__v = new egret.Bitmap, e.__v.texture = RES.getRes("common_json#v_0"), e.__v.anchorOffsetX = 16, e.__v.anchorOffsetY = 15, e.addChild(e.__v), e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemovedFromStage, e), e
    }
    return __extends(e, t), e.prototype.onAddToStage = function() {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
    }, e.prototype.onRemovedFromStage = function() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
    }, e.prototype.onFrame = function() {
        ++this.__idx, this.__ring.rotation += 6, this.__v.texture = RES.getRes("common_json#v_" + this.__idx % 15)
    }, e.show = function() {
        e.__instance || (e.__instance = new e), Main.instance.addToTipsLayer(e.__instance)
    }, e.hide = function() {
        e.__instance && e.__instance.parent && e.__instance.parent.removeChild(e.__instance)
    }, e
}(egret.DisplayObjectContainer);
__reflect(Loading.prototype, "Loading");
var TextBanner = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t), e.prototype.init = function(e, i, s) {
        void 0 === s && (s = 3e3), t.prototype.init.call(this, e, i, s), this._container = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.DISPLAYOBJECTCONTAINER), this._bitmapBG = DisplayObjectPool.instance.getElementByName(DisplayObjectPool.BITMAP), e.addChild(this._container);
        var n = RES.getRes("common_json#tips");
        this._bitmapBG.texture = n, this._bitmapBG.scale9Grid = new egret.Rectangle(90, 36, 55, 30), this._container.addChild(this._bitmapBG), this.textField = new egret.TextField, this.textField.size = 20, this.textField.x = 90, this.textField.y = 40, this._container.addChild(this.textField), this.textField.text = i, this._bitmapBG.width = this.textField.width + 178, this._container.x = -this._bitmapBG.width / 2 + GameUtil.STAGEWIDTHHALF, this._container.y = GameUtil.STAGEHEIGHTHALF - 41
    }, e.prototype.release = function() {
        this._bitmapBG.scale9Grid = null, this._container.removeChildren(), this.textField = null, t.prototype.release.call(this)
    }, e
}(Banner);
__reflect(TextBanner.prototype, "TextBanner");
var BitmapButton = function(t) {
    function e(e) {
        var i = t.call(this, e) || this;
        return i.touchEnabled = !0, i.addEventListener(egret.Event.ADDED_TO_STAGE, i.onAddedToStage, i), i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.onRemoveFromStage, i), i
    }
    return __extends(e, t), e.prototype.onAddedToStage = function(t) {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
    }, e.prototype.onTouchBegin = function(t) {
        this.filters = GameUtil.DEEPENFILTERS
    }, e.prototype.onTouchTap = function(t) {
        this.filters = GameUtil.RESETFILTERS, Music.instance.playSound(Music.ClickButton)
    }, e.prototype.onTouchEnd = function(t) {
        this.filters = GameUtil.RESETFILTERS
    }, e.prototype.onRemoveFromStage = function(t) {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
    }, e
}(egret.Bitmap);
__reflect(BitmapButton.prototype, "BitmapButton");
var BitmapsButton = function(t) {
    function e(e, i) {
        var s = t.call(this) || this,
            n = new egret.Bitmap(i);
        return n.anchorOffsetX = n.width / 2, n.anchorOffsetY = n.height / 2, s.addChild(n), s._icon = new egret.Bitmap(e), s._icon.anchorOffsetX = e.textureWidth / 2, s._icon.anchorOffsetY = e.textureHeight / 2, s.addChild(s._icon), s.touchEnabled = !0, s.addEventListener(egret.Event.ADDED_TO_STAGE, s.onAddedToStage, s), s.addEventListener(egret.Event.REMOVED_FROM_STAGE, s.onRemoveFromStage, s), s
    }
    return __extends(e, t), e.prototype.onAddedToStage = function(t) {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
    }, Object.defineProperty(e.prototype, "texture", {
        set: function(t) {
            this._icon.texture = t, this._icon.anchorOffsetX = t.textureWidth / 2, this._icon.anchorOffsetY = t.textureHeight / 2
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.setIconXY = function(t, e) {
        this._icon.x = t, this._icon.y = e
    }, e.prototype.onTouchBegin = function(t) {
        this.filters = GameUtil.DEEPENFILTERS
    }, e.prototype.onTouchTap = function(t) {
        this.filters = GameUtil.RESETFILTERS, Music.instance.playSound(Music.ClickButton)
    }, e.prototype.onTouchEnd = function(t) {
        this.filters = GameUtil.RESETFILTERS
    }, e.prototype.onRemoveFromStage = function(t) {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
    }, e
}(egret.DisplayObjectContainer);
__reflect(BitmapsButton.prototype, "BitmapsButton");
var ChooseScoreWin = function(t) {
    function e() {
        var e = t.call(this) || this;
        e._buttons = [], e._texts = [];
        var i = Game.instance.lang,
            s = RES.getRes("common_json#chooseScorePanel"),
            n = new egret.Bitmap(s);
        n.width = 954, n.height = 613;
        var o = -n.width / 2 + GameUtil.STAGEWIDTHHALF,
            a = -n.height / 2 + GameUtil.STAGEHEIGHTHALF;
        n.x = o, n.y = a, e.addChild(n), s = RES.getRes("ui_" + i + "_json#chooseScoreTitle"), n = new egret.Bitmap(s), n.x = -n.width / 2 + GameUtil.STAGEWIDTHHALF, n.y = a + 6, e.addChild(n), s = RES.getRes("common_json#return_" + i), e._backButton = new BitmapButton(s), e._backButton.x = o + 824, e._backButton.y = 80, e._backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onBack, e), e.addChild(e._backButton);
        var r, h;
        return s = RES.getRes("common_json#frame_" + i), r = new BitmapButton, r.texture = RES.getRes("ui_" + i + "_json#hundred"), r.x = -r.width / 2 + GameUtil.STAGEWIDTHHALF - 275, r.y = 130, r.id = 0, e.addChild(r), e._buttons.push(r), n = new egret.Bitmap(s), n.x = r.x + 15, n.y = r.y + r.height + 28, e.addChild(n), h = new NewBitmapText, h.x = n.x + 170, h.y = n.y + 6, h.fontJson = "common_json", h.font = "golden", h.textAlign = "center", e.addChild(h), e._texts.push(h), r = new BitmapButton(s), r.texture = RES.getRes("ui_" + i + "_json#thousand"), r.x = -r.width / 2 + GameUtil.STAGEWIDTHHALF, r.y = 130, r.id = 1, e.addChild(r), e._buttons.push(r), n = new egret.Bitmap(s), n.x = r.x + 20, n.y = r.y + r.height + 28, e.addChild(n), h = new NewBitmapText, h.x = n.x + 170, h.y = n.y + 6, h.fontJson = "common_json", h.font = "golden", h.textAlign = "center", e.addChild(h), e._texts.push(h), r = new BitmapButton, r.texture = RES.getRes("ui_" + i + "_json#tenThousand"), r.x = -r.width / 2 + GameUtil.STAGEWIDTHHALF + 275, r.y = 130, r.id = 2, e.addChild(r), e._buttons.push(r), n = new egret.Bitmap(s), n.x = r.x + 20, n.y = r.y + r.height + 28, e.addChild(n), h = new NewBitmapText, h.x = n.x + 170, h.y = n.y + 6, h.fontJson = "common_json", h.font = "golden", h.textAlign = "center", e.addChild(h), e._texts.push(h), GameEventDispatcher.instance.addEventListener(GameEvent.CHOOSESCORE, e.init, e), e
    }
    return __extends(e, t), e.prototype.init = function(t) {
        var e = this;
        this._roomInfos = t.data;
        var i = this._roomInfos.limit;
        this._texts[0].text = Math.floor(i[0].limitBalance / 1e3).toString(), this._texts[1].text = Math.floor(i[1].limitBalance / 1e3).toString(), this._texts[2].text = Math.floor(i[2].limitBalance / 1e3).toString(), this._buttons.forEach(function(t) {
            t.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onChoose, e)
        })
    }, e.prototype.onChoose = function(e) {
        var i = this;
        this._roomInfos.money < this._roomInfos.limit[e.target.id].limitBalance ? BannerFactory.instance.showText(Lang.getTextByKey("coinNotEnough")) : (t.prototype.onClose.call(this, e), e.stopPropagation(), this._buttons.forEach(function(t) {
            t.removeEventListener(egret.TouchEvent.TOUCH_TAP, i.onChoose, i)
        }), this._backButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this), LogonController.c2sselsvr(e.target.id), GameEventDispatcher.instance.removeEventListener(GameEvent.CHOOSESCORE, this.init, this))
    }, e.prototype.onBack = function(t) {
        GameUtil.toHome("")
    }, e
}(ModalWin);
__reflect(ChooseScoreWin.prototype, "ChooseScoreWin");
var CircleBitmapText = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._radian = 100, e._startAngle = -90, e._textAlign = egret.HorizontalAlign.CENTER, e
    }
    return __extends(e, t), Object.defineProperty(e.prototype, "radian", {
        set: function(t) {
            this._radian = t, this.layout()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "startAngle", {
        set: function(t) {
            this._startAngle = t, this.layout()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "spaceAngle", {
        set: function(t) {
            this._spaceAngle = t, this.layout()
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.layout = function() {
        var t = this;
        if (this._bitmaps.length) {
            var e = 0;
            this._bitmaps.forEach(function(i) {
                i.anchorOffsetX = i.texture.textureWidth / 2, i.anchorOffsetY = i.texture.textureHeight / 2, i.x = t._radian * Math.cos(e / 180 * Math.PI), i.y = t._radian * Math.sin(e / 180 * Math.PI), i.rotation = e + 90, t.addChild(i), e += t._spaceAngle
            }), e -= this._spaceAngle;
            var i = this._startAngle;
            this._textAlign == egret.HorizontalAlign.CENTER ? i = this._startAngle - e / 2 : this._textAlign == egret.HorizontalAlign.RIGHT && (i = this._startAngle - e), this.rotation = i
        }
    }, e
}(NewBitmapText);
__reflect(CircleBitmapText.prototype, "CircleBitmapText");
var IntroduceWin = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        i.callBack = e;
        var s = "ui_" + Game.instance.lang + "_json#",
            n = RES.getRes(s + "introduce"),
            o = new egret.Bitmap(n),
            a = -o.width / 2 + GameUtil.STAGEWIDTHHALF,
            r = -o.height / 2 + GameUtil.STAGEHEIGHTHALF;
        o.x = a, o.y = r, i.addChild(o), n = RES.getRes(s + "close");
        var h = new BitmapButton(n);
        return h.x = a + 1015, h.y = r + 40, h.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onClose, i), i.addChild(h), i
    }
    return __extends(e, t), e.prototype.onClose = function(e) {
        t.prototype.onClose.call(this, e), e.stopPropagation(), e.target.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this), this.callBack(), Music.instance.playSound(Music.ClickButton)
    }, e
}(ModalWin);
__reflect(IntroduceWin.prototype, "IntroduceWin");
var ObjectPool = function() {
    function t() {
        this._pool = {}
    }
    return t.prototype.getObjectByClass = function(t) {
        var e = t.prototype.__class__;
        return this._pool[e] && this._pool[e].length ? this._pool[e].pop() : new t
    }, t.prototype.putInPool = function(t) {
        if (t) {
            t.release();
            var e = t.__proto__.__class__;
            this._pool[e] || (this._pool[e] = []), this._pool[e].indexOf(t) >= 0 && LogManager.Error("aaa"), this._pool[e].push(t)
        }
    }, t.instance = new t, t
}();
__reflect(ObjectPool.prototype, "ObjectPool");
var MyBitmapText = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._fontName = "coin", e
    }
    return __extends(e, t), Object.defineProperty(e.prototype, "fontName", {
        set: function(t) {
            this._fontName = t
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.setText = function(t) {
        this.text = this.getResName(t)
    }, e.prototype.getResName = function(t) {
        for (var i = t.length, s = "", n = e.FONTDICT[this._fontName], o = 0; i > o; ++o) s += n[t.charAt(o)];
        return s
    }, e.FONTDICT = {
        coin: {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9"
        },
        multiple: {
            0: "α",
            1: "β",
            2: "γ",
            3: "δ",
            4: "ε",
            5: "ζ",
            6: "η",
            7: "θ",
            8: "ι",
            9: "κ"
        },
        yellowScore: {
            0: "o",
            1: "①",
            2: "②",
            3: "③",
            4: "④",
            5: "⑤",
            6: "⑥",
            7: "⑦",
            8: "⑧",
            9: "⑨"
        },
        redScore: {
            0: "⁰",
            1: "¹",
            2: "²",
            3: "³",
            4: "⁴",
            5: "⁵",
            6: "⁶",
            7: "⁷",
            8: "⁸",
            9: "⁹"
        }
    }, e
}(egret.BitmapText);
__reflect(MyBitmapText.prototype, "MyBitmapText");
var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.preloadEnd = !1, e
    }
    return __extends(e, t), e.prototype.init = function(t) {
        this.totalCount = t, this.loadedCount = 0, this.textField = new egret.TextField, this.addChild(this.textField), this.textField.y = 255, this.textField.width = 960, this.textField.height = 30, this.textField.textAlign = "center", this.textField.text = ""
    }, e.prototype.onLoadError = function(t) {
        LogManager.Error("onLoadError", t)
    }, e.prototype.onGroupProgress = function(t) {
        if (this.loadedCount++, window.skdm) {
            var e = this.loadedCount / (this.totalCount + 1) * 100;
            window.skdm.Loading(e.toFixed())
        } else this.textField.text = "Loading..." + this.loadedCount + "/" + this.totalCount;
        this.loadedCount === this.totalCount && LogonController.c2sroomTypeInfo()
    }, e.prototype.onGroupComplete = function(t) {
        "preload" === t.groupName && (this.preloadEnd = !0)
    }, e.prototype.addToStage = function() {
        Main.instance.addChild(this), RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onLoadError, this), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadError, this), RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this), RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this)
    }, e.prototype.removeFromStage = function() {
        window.skdm && window.skdm.Loading(100), this.parent.removeChild(this), RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onLoadError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onLoadError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this), e.instance = null, Game.instance.init()
    }, e.instance = new e, e
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI");
var NoticeView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.__noticeList = [], e.__delay = 14e3, e.__stepp = 3.5, e.createFun(), e
    }
    return __extends(e, t), Object.defineProperty(e, "instance", {
        get: function() {
            return this.__instance || (this.__instance = new e), this.__instance
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.createFun = function() {
        this.y = 110, this.width = 1280, this.height = 49, this.scaleX = GameUtil.STAGEWIDTH / this.width, this.scaleY = GameUtil.STAGEWIDTH / this.width, this.visible = !1, this.__sprite = new egret.Sprite, this.__sprite.x = this.width, this.__sprite.height = 67, this.addChild(this.__sprite), this.__bitmapBg = new egret.Bitmap, this.__bitmapBg.x = 0, this.__bitmapBg.y = 0, this.__bitmapBg.scale9Grid = new egret.Rectangle(29, 17, 2, 2), this.__bitmapBg.height = 49, this.__bitmapBg.texture = RES.getRes("popup_json#noticeBg"), this.__sprite.addChild(this.__bitmapBg), this.__bitmapIcon = new egret.Bitmap, this.__bitmapIcon.x = 10, this.__sprite.addChild(this.__bitmapIcon), this.___textField = new egret.TextField, this.___textField.y = 0, this.___textField.height = 49, this.___textField.size = 32, this.___textField.textColor = 16777215, this.___textField.verticalAlign = "middle", this.__sprite.addChild(this.___textField), Main.instance.addToTipsLayer(this), this.scaleX = GameUtil.STAGEWIDTH / this.width, this.scaleY = GameUtil.STAGEWIDTH / this.width
    }, e.prototype.addNotice = function(t, e, i) {
        var s = RES.getRes("Announcement_json");
        if (s) {
            var n = s[t];
            if (n) {
                var o = [t, n.power, e, i];
                this.__noticeList.push(o), this.__noticeList.sort(function(t, e) {
                    return e[1] - t[1]
                }), this.visible || (this.visible = !0, this.setNotice())
            }
        }
    }, e.prototype.setNotice = function() {
        if (this.__noticeList.length <= 0) return this.__sprite.x = this.width, this.visible = !1, void this.removeEventListener(egret.Event.ENTER_FRAME, this.changeXVal, this);
        var t = this.__noticeList.shift();
        this.__times = t[3];
        var e = RES.getRes("popup_json#notice" + t[0]);
        e ? (this.__bitmapIcon.texture = e, this.__bitmapIcon.visible = !0, this.__bitmapIcon.y = (this.__bitmapBg.height - this.__bitmapIcon.height) / 2, this.___textField.x = this.__bitmapIcon.x + this.__bitmapIcon.width + 5) : (this.__bitmapIcon.visible = !1, this.___textField.x = 10);
        var i = RES.getRes("Announcement_json")[t[0]],
            s = GameUtil.replaceString(i[Game.instance.lang], t[2]);
        this.___textField.textFlow = (new egret.HtmlTextParser).parser(s), this.__bitmapBg.width = this.___textField.x + this.___textField.width + 10, this.showNotice(), this.addEventListener(egret.Event.ENTER_FRAME, this.changeXVal, this)
    }, e.prototype.showNotice = function() {
        this.__sprite.x = this.width
    }, e.prototype.changeXVal = function() {
        this.__sprite.x -= this.__stepp, this.__sprite.x < -this.__sprite.width && (this.__times--, this.__times > 0 ? this.showNotice() : this.setNotice())
    }, e.prototype.noticeHandler = function(t) {
        switch (t.code) {
            case 20001:
                break;
            default:
                this.addNotice(t.code, t.args.match, t.rollcount)
        }
    }, e
}(egret.DisplayObjectContainer);
__reflect(NoticeView.prototype, "NoticeView");
var PopupView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._serverArgs = [], e.timer = new egret.Timer(1e3, 0), e.createFun(), e
    }
    return __extends(e, t), Object.defineProperty(e, "instance", {
        get: function() {
            return this._instance || (this._instance = new e), this._instance
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.createFun = function() {
        this.width = 1280, this.height = 720, this._shape = new egret.Shape, this._shape.graphics.beginFill(0), this._shape.graphics.drawRoundRect(0, 0, this.width, this.height, 0, 0), this._shape.alpha = .7, this._shape.graphics.endFill(), this.addChild(this._shape), this._bitmapBg = new egret.Bitmap;
        var t = new egret.Rectangle(105, 105, 5, 6);
        this._bitmapBg.scale9Grid = t, this._bitmapBg.x = 249, this._bitmapBg.y = 123;
        var e = RES.getRes("popup_json#popup_bg");
        this._bitmapBg.texture = e, this.addChild(this._bitmapBg), this._bitmapContentBg = new egret.Bitmap, this._bitmapContentBg.width = 721, this._bitmapContentBg.height = 324, this._bitmapContentBg.x = 279.5, this._bitmapContentBg.y = 148;
        var i = RES.getRes("popup_json#popup_bg2");
        this._bitmapContentBg.texture = i, this.addChild(this._bitmapContentBg), this._textField = new egret.TextField, this._textField.x = 330, this._textField.y = 195, this._textField.width = 620, this._textField.height = 200, this._textField.size = 36, this._textField.textColor = 16777215, this._textField.multiline = !0, this._textField.lineSpacing = 3, this._textField.verticalAlign = "middle", this._textField.textAlign = "center", this.addChild(this._textField), this._button0 = new egret.Bitmap, this._button0.y = 420, this._button0.visible = !1, this._button0.touchEnabled = !0, this.addChild(this._button0), this._button1 = new egret.Bitmap, this._button1.y = 420, this._button1.visible = !1, this._button1.touchEnabled = !0, this.addChild(this._button1)
    }, e.prototype.setPopupData = function(t, e) {
        if (void 0 === e && (e = null), this.isOpen) {
            var i = RES.getRes("popupConfig_json");
            if (!i) return;
            var s = i[t];
            if (!s) return;
            var n = i[this._key].power,
                o = i[t].power;
            o > n && (this._key = t, this._serverArgs = e, this.updataView())
        } else this._key = t, this._serverArgs = e, Main.instance.addToTipsLayer(this), this.onEventListener(), this.init()
    }, e.prototype.init = function() {
        this.isOpen = !0, this.scaleX = GameUtil.STAGEWIDTH / this.width, this.scaleY = GameUtil.STAGEHEIGHT / this.height, this.updataView()
    }, e.prototype.updataView = function() {
        var t = RES.getRes("popupConfig_json");
        if (t) {
            if (this._popupConifg = t[this._key], !this._popupConifg) return void LogManager.Error("config undefine id:", this._key);
            var e = Game.instance.lang;
            this.time = this._popupConifg.time, this.text = this._popupConifg[e], 1 == this._popupConifg.type ? this.time > 0 ? (this.timer.start(), this._textField.text = GameUtil.replaceString(this.text, [this.time])) : (this.timer.stop(), this._textField.text = GameUtil.replaceString(this.text)) : 2 == this._popupConifg.type && (this.timer.stop(), this._textField.text = GameUtil.replaceString(this.text, this._serverArgs)), this.timeOutCallBackIndex = this._popupConifg.timeout, this._popupConifg[e];
            for (var i = this._popupConifg.button.length, s = 0, n = 0; i > n; n++) {
                var o = this["_button" + n];
                if (o) {
                    var a = this._popupConifg.button[n].state;
                    if (a > 0) {
                        var r = RES.getRes("popup_" + e + a + "_1");
                        o.texture = r, o.visible = !0, s++
                    } else o.visible = !1
                }
            }
            switch (s) {
                case 1:
                    this._button0.x = 547.5;
                    break;
                case 2:
                    this._button0.x = 400, this._button1.x = 695
            }
        }
    }, e.prototype.timerFun = function() {
        this.time--, this._textField.text = GameUtil.replaceString(this.text, [this.time]), this.time <= 0 && (this.timer.stop(), 0 == this.timeOutCallBackIndex ? this.end1Fun() : 1 == this.timeOutCallBackIndex && this.end2Fun())
    }, e.prototype.onEventListener = function() {
        this._button0.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin1, this, !0), this._button0.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd1, this), this._button0.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd1, this), this._button1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin2, this), this._button1.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd2, this), this._button1.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd2, this), this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFun, this)
    }, e.prototype.onTouchBegin1 = function(t) {
        t.stopPropagation();
        var e = RES.getRes("popup_" + Game.instance.lang + this._popupConifg.button[0].state + "_2");
        this._button0.texture = e
    }, e.prototype.end1Fun = function() {
        var t = this._popupConifg.button[0].operate;
        t > -1 && GameUtil.showDialog(t), this.closeView()
    }, e.prototype.onTouchEnd1 = function(t) {
        t.stopPropagation();
        var e = RES.getRes("popup_" + Game.instance.lang + this._popupConifg.button[0].state + "_1");
        this._button0.texture = e, this.end1Fun()
    }, e.prototype.onTouchBegin2 = function(t) {
        t.stopPropagation();
        var e = RES.getRes("popup_" + Game.instance.lang + this._popupConifg.button[1].state + "_2");
        this._button1.texture = e
    }, e.prototype.end2Fun = function() {
        var t = this._popupConifg.button[1].operate;
        t > -1 && GameUtil.showDialog(t), this.closeView()
    }, e.prototype.onTouchEnd2 = function(t) {
        t.stopPropagation();
        var e = RES.getRes("popup_" + Game.instance.lang + this._popupConifg.button[1].state + "_1");
        this._button1.texture = e, this.end2Fun()
    }, e.prototype.closeView = function() {
        this.offEventListener(), this.parent && this.parent.removeChild(this)
    }, e.prototype.offEventListener = function() {
        this._button0.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin1, this), this._button0.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd1, this), this._button0.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd1, this), this._button1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin2, this), this._button1.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd2, this), this._button1.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd2, this), this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFun, this)
    }, e.prototype.destory = function() {
        this.isOpen = !1, this.timer.stop(), this.offEventListener()
    }, e
}(egret.DisplayObjectContainer);
__reflect(PopupView.prototype, "PopupView");
var Setting = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.isSpread = !1, e.bIntroduce = !1, e.hitTestBtns = new Array, e
    }
    return __extends(e, t), e.prototype.init = function() {
        var t = "ui_" + Game.instance.lang + "_json#",
            e = RES.getRes(t + "leave"),
            i = RES.getRes(t + "bubble");
        this.leaveButton = new BitmapsButton(e, i), this.leaveButton.x = 65, this.leaveButton.y = GameUtil.STAGEHEIGHTHALF - 90, this.leaveButton.scaleX = .5, this.leaveButton.scaleY = .5, this.leaveButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickLeave, this), e = RES.getRes(t + "volume"), this.volumeButton = new BitmapsButton(e, i), this.volumeButton.x = 110, this.volumeButton.y = GameUtil.STAGEHEIGHTHALF, this.volumeButton.scaleX = .5, this.volumeButton.scaleY = .5, this.volumeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickVolume, this), e = RES.getRes(t + "mute"), this.mute = new egret.Bitmap(e), this.mute.x = 5, this.mute.y = 5, e = RES.getRes(t + "help"), this.helpButton = new BitmapsButton(e, i), this.helpButton.x = 65, this.helpButton.y = GameUtil.STAGEHEIGHTHALF + 90, this.helpButton.scaleX = .5, this.helpButton.scaleY = .5, this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHelp, this), e = RES.getRes(t + "spread"), this.switchButton = new BitmapsButton(e, i), this.switchButton.x = 10, this.switchButton.y = GameUtil.STAGEHEIGHTHALF, this.switchButton.setIconXY(5, 0), this.switchButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSwitch, this), this.addChild(this.switchButton), Main.instance.addToUILayer(this, 1), this.hitTestBtns.push(this.leaveButton, this.volumeButton, this.helpButton, this.switchButton)
    }, e.prototype.clickSwitch = function(t) {
        var e = this;
        t.stopPropagation(), this.isSpread = !this.isSpread, egret.Tween.removeTweens(this.leaveButton), egret.Tween.removeTweens(this.volumeButton), egret.Tween.removeTweens(this.helpButton);
        var i = "ui_" + Game.instance.lang + "_json#";
        this.isSpread ? (this.switchButton.texture = RES.getRes(i + "fold"), this.switchButton.setIconXY(10, 0), Game.instance.mute && this.volumeButton.addChild(this.mute), this.addChild(this.leaveButton), egret.Tween.get(this.leaveButton).to({
            scaleX: 1,
            scaleY: 1
        }, 100, egret.Ease.bounceInOut).to({
            scaleX: .8,
            scaleY: .8
        }, 100, egret.Ease.bounceInOut), egret.Tween.get(this.volumeButton).wait(200).call(function() {
            return e.addChild(e.volumeButton)
        }).to({
            scaleX: 1,
            scaleY: 1
        }, 100, egret.Ease.bounceInOut).to({
            scaleX: .8,
            scaleY: .8
        }, 100, egret.Ease.bounceInOut), egret.Tween.get(this.helpButton).wait(400).call(function() {
            return e.addChild(e.helpButton)
        }).to({
            scaleX: 1,
            scaleY: 1
        }, 100, egret.Ease.bounceInOut).to({
            scaleX: .8,
            scaleY: .8
        }, 100, egret.Ease.bounceInOut)) : (this.switchButton.texture = RES.getRes(i + "spread"), this.switchButton.setIconXY(5, 0), egret.Tween.get(this.leaveButton).to({
            scaleX: .5,
            scaleY: .5
        }, 100, egret.Ease.backInOut).call(function() {
            e.leaveButton.parent && e.removeChild(e.leaveButton)
        }), egret.Tween.get(this.volumeButton).to({
            scaleX: .5,
            scaleY: .5
        }, 100, egret.Ease.backInOut).call(function() {
            e.volumeButton.parent && e.removeChild(e.volumeButton)
        }), egret.Tween.get(this.helpButton).to({
            scaleX: .5,
            scaleY: .5
        }, 100, egret.Ease.backInOut).call(function() {
            e.helpButton.parent && e.removeChild(e.helpButton)
        })), Music.instance.playSound(Music.ClickButton)
    }, e.prototype.clickLeave = function(t) {
        t.stopPropagation(), Music.instance.playSound(Music.ClickButton), SceneController.c2sleaveroom()
    }, e.prototype.clickVolume = function(t) {
        t.stopPropagation(), Game.instance.mute = !Game.instance.mute, Game.instance.mute ? this.volumeButton.addChild(this.mute) : this.mute.parent && this.volumeButton.removeChild(this.mute), Music.instance.playSound(Music.ClickButton)
    }, e.prototype.clickHelp = function(t) {
        var e = this;
        t.stopPropagation(), this.bIntroduce || (this.bIntroduce = !0, new IntroduceWin(function() {
            e.bIntroduce = !1
        }).show()), Music.instance.playSound(Music.ClickButton)
    }, e.prototype.anchoroHitTest = function(t, e) {
        if (this.bIntroduce) return !0;
        for (var i = this.hitTestBtns.length, s = 0; i > s; ++s)
            if (this.hitTestBtns[s].parent && this.hitTestBtns[s].hitTestPoint(t, e)) return !0;
        return !1
    }, e.instance = new e, e
}(egret.DisplayObjectContainer);
__reflect(Setting.prototype, "Setting");
var ChooseTableWin = function(t) {
    function e() {
        var i = t.call(this) || this;
        i.__roomid = 0, i.__chooseIndex = 0, i.__currentPage = 0, i.__maxPage = 1, i.__tables = new Array, i.__tableItems = new Array, i.__oper = 0, i.__press = !1, i.__lastX = 0, i.__cdTime = 0;
        var s = new egret.Sprite;
        s.scaleX = GameUtil.STAGEWIDTH / e.TABLEWIDTH, s.scaleY = GameUtil.STAGEHEIGHT / e.TABLEHEIGHT, i.addChild(s);
        var n = new egret.Bitmap;
        n.texture = RES.getRes("chooseTable_json#bg"), s.addChild(n);
        for (var o = 0; 3 > o; ++o) {
            var a = new Table;
            a.x = -e.TABLEWIDTH + o * e.TABLEWIDTH, s.addChild(a), i.__tables.push(a)
        }
        egret.Capabilities.isMobile && (i.__boundaryRect = new egret.Shape, i.__boundaryRect.graphics.lineStyle(150, 16711680, 0), i.__boundaryRect.graphics.moveTo(0, 0), i.__boundaryRect.graphics.lineTo(e.TABLEWIDTH, 0), i.__boundaryRect.graphics.moveTo(0, e.TABLEHEIGHT), i.__boundaryRect.graphics.lineTo(e.TABLEWIDTH, e.TABLEHEIGHT), i.__boundaryRect.graphics.lineStyle(300, 16711680, 0), i.__boundaryRect.graphics.moveTo(0, 0), i.__boundaryRect.graphics.lineTo(0, e.TABLEHEIGHT), i.__boundaryRect.graphics.moveTo(e.TABLEWIDTH, 0), i.__boundaryRect.graphics.lineTo(e.TABLEWIDTH, e.TABLEHEIGHT), i.__boundaryRect.touchEnabled = !0, s.addChild(i.__boundaryRect));
        var r = new BitmapButton;
        r = new BitmapButton, r.texture = RES.getRes("chooseTable_json#back"), r.x = 22, r.y = 17, s.addChild(r), i.__backBtn = r, n = new egret.Bitmap, n.texture = RES.getRes("chooseTable_json#plate"), n.x = 523, n.y = 0, s.addChild(n);
        var h = new egret.TextField;
        h.textAlign = egret.HorizontalAlign.CENTER, h.textColor = 16777215, h.text = "", h.width = 233, h.x = 523, h.y = 30, s.addChild(h), i.__tableLable = h, n = new egret.Bitmap, n.texture = RES.getRes("chooseTable_json#input"), n.x = 1010, n.y = 109, s.addChild(n), h = new egret.TextField, h.size = 25, h.textAlign = egret.HorizontalAlign.CENTER, h.textColor = 16777215, h.text = Lang.getTextByKey("chooseTable"), h.width = 261, h.x = 1010, h.y = 120, s.addChild(h);
        var c = new egret.Sprite;
        c.x = 1010, c.y = 150, c.touchEnabled = !0, s.addChild(c), i.__choosePanel = c, n = new egret.Bitmap, n.texture = RES.getRes("chooseTable_json#list_bg"), c.addChild(n);
        for (var o = 0; 7 > o; ++o)
            for (var l = 0; 2 > l; ++l) {
                var u = new TableItem(2 * o + l);
                u.x = 125 * l + 5, u.y = 67 * o + 5, c.addChild(u), i.__tableItems.push(u)
            }
        return r = new BitmapButton, r.texture = RES.getRes("chooseTable_json#previous_btn"), r.x = 48, r.y = 469, r.visible = !1, c.addChild(r), i.__previousBtn = r, r = new BitmapButton, r.texture = RES.getRes("chooseTable_json#next_btn"), r.x = 170, r.y = 469, r.visible = !1, c.addChild(r), i.__nextBtn = r, h = new egret.TextField, h.size = 20, h.textAlign = egret.HorizontalAlign.CENTER, h.text = "1/1", h.width = 83, h.x = 85, h.y = 477, c.addChild(h), i.__pageLable = h, e.ISCLICKCHAIR = !1, i
    }
    return __extends(e, t), e.prototype.show = function() {
        if (t.prototype.show.call(this), egret.Capabilities.isMobile) this.__boundaryRect.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        else {
            this.__mouseOutFunc = this.onTouchEnd.bind(this);
            var e = document.getElementsByTagName("CANVAS")[0];
            e.addEventListener("mouseout", this.__mouseOutFunc)
        }
        this.__choosePanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseTable, this), this.__previousBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPrevious, this), this.__nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this), this.__backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this), this.__curTable = this.__tables[1], GameEventDispatcher.instance.addEventListener(GameEvent.CHOOSETABLE, this.s2cmessages, this)
    }, e.prototype.s2cmessages = function(t) {
        var e = t.data;
        this["s2c" + e.type](e)
    }, e.prototype.s2croomlist = function(t) {
        if (t.succ) {
            var e = this.__tableItems,
                i = t.message,
                s = i.roomlist,
                n = s.length;
            if (n) {
                for (var o = 0; 14 > o; ++o) e[o].updateView(n > o ? s[o] : null);
                this.__pageLable.text = i.pagenum + "/" + i.maxpage, this.__currentPage = i.pagenum - 1, this.__maxPage = i.maxpage, this.__maxPage > 1 && (this.__previousBtn.visible = !0, this.__nextBtn.visible = !0), e[this.__chooseIndex % 14].setUnSelected(), 0 === this.__oper ? this.__chooseIndex = 14 * this.__currentPage : this.__chooseIndex % 14 === 0 ? this.__chooseIndex = 14 * this.__currentPage + 13 : this.__chooseIndex = 14 * this.__currentPage;
                var a = this.__chooseIndex % 14;
                this.__roomid = s[a].tableid, this.__tableLable.text = GameUtil.arrayToChar(s[a].tablename), e[a].setSelected();
                var r = 0 === a ? i.roomdetail[0] : i.roomdetail[1];
                this.__curTable.updateView(this.__roomid, r), this.__tables.forEach(function(t) {
                    return t.visible = !0
                }), this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
            }
        } else BannerFactory.instance.showText(t.errinfo)
    }, e.prototype.s2croomdetail = function(t) {
        if (t.succ) {
            this.__curTable.updateView(this.__roomid, t.message.roomdetail);
            var e = this.__tableItems[this.__chooseIndex % 14];
            e.data.playernum = t.message.roomdetail.length, e.updateView(e.data)
        } else BannerFactory.instance.showText(t.errinfo)
    }, e.prototype.s2centerroom = function(t) {
        t.succ && t.message.result ? (SceneController.s2centerroom(t), this.onClose(null)) : (BannerFactory.instance.showText(Lang.getTextByKey("positionOccupied")), LogonController.c2sroomdetail(this.__roomid), e.ISCLICKCHAIR = !1)
    }, e.prototype.onTouchBegin = function(t) {
        (t.target === this || "Table" === t.target.parent.__proto__.__class__) && Date.now() > this.__cdTime && (this.__cdTime = Number.MAX_VALUE, this.__press = !0, this.__lastX = t.stageX)
    }, e.prototype.onTouchMove = function(t) {
        if (this.__press) {
            for (var i = (t.stageX - this.__lastX) * e.TABLEWIDTH / GameUtil.STAGEWIDTH, s = 0; 3 > s; ++s) {
                var n = this.__tables[s];
                n.visible = !0, n.x += i
            }
            0 === this.__chooseIndex && (this.__tables[0].visible = !1);
            var o = this.__chooseIndex % 14;
            this.__currentPage + 1 !== this.__maxPage || 13 !== o && this.__tableItems[o + 1].visible || (this.__tables[2].visible = !1), this.__lastX = t.stageX, e.DRAGTIME = Date.now()
        }
    }, e.prototype.onTouchEnd = function() {
        if (this.__press) {
            this.__press = !1;
            var t = this.__chooseIndex % 14,
                i = this.slideEnd,
                s = this.__tables[1].x,
                n = this.__tableItems;
            0 > s ? 13 === t ? this.__currentPage + 1 === this.__maxPage ? (LogonController.c2sroomdetail(this.__roomid), s = -s, i = null) : (this.__oper = 1, this.__curTable = this.__tables[2], LogonController.c2sroomlist(this.__currentPage + 2), s = -e.TABLEWIDTH - s) : n[t + 1].visible ? (n[t].setUnSelected(), ++this.__chooseIndex, t = this.__chooseIndex % 14, this.__roomid = n[t].data.tableid, LogonController.c2sroomdetail(this.__roomid), n[t].setSelected(), this.__tableLable.text = GameUtil.arrayToChar(n[t].data.tablename), this.__curTable = this.__tables[2], s = -e.TABLEWIDTH - s) : (LogonController.c2sroomdetail(this.__roomid), s = -s, i = null) : s > 0 && (0 === this.__chooseIndex ? (LogonController.c2sroomdetail(this.__roomid), s = -s, i = null) : this.__chooseIndex % 14 === 0 ? (this.__oper = 1, this.__curTable = this.__tables[0], LogonController.c2sroomlist(this.__currentPage), s = e.TABLEWIDTH - s) : (n[t].setUnSelected(), --this.__chooseIndex, t = this.__chooseIndex % 14, this.__roomid = n[t].data.tableid, LogonController.c2sroomdetail(this.__roomid), n[t].setSelected(), this.__tableLable.text = GameUtil.arrayToChar(n[t].data.tablename), this.__curTable = this.__tables[0], s = e.TABLEWIDTH - s)), this.__cdTime = Date.now() + 205, this.slide(i, s)
        }
    }, e.prototype.slide = function(t, e) {
        for (var i = 0; 3 > i; ++i) {
            var s = this.__tables[i],
                n = egret.Tween.get(s);
            t ? n.to({
                x: s.x + e
            }, 195).call(t, s, [this.__tables]) : n.to({
                x: s.x + e
            }, 195)
        }
    }, e.prototype.slideEnd = function(t) {
        var i;
        this.x < -e.TABLEWIDTH ? (this.x = e.TABLEWIDTH, i = t.shift(), t.push(i)) : this.x > e.TABLEWIDTH && (this.x = -e.TABLEWIDTH, i = t.pop(), t.unshift(i))
    }, e.prototype.chooseTable = function(t) {
        if (t.target instanceof TableItem && Date.now() > this.__cdTime) {
            var i = t.target;
            this.__roomid = i.data.tableid, this.__tableLable.text = GameUtil.arrayToChar(i.data.tablename), this.__tableItems[this.__chooseIndex % 14].setUnSelected();
            var s = 14 * this.__currentPage + i.index;
            this.__tables.forEach(function(t) {
                return t.visible = !0
            }), s < this.__chooseIndex ? (this.__curTable = this.__tables[0], this.slide(this.slideEnd, e.TABLEWIDTH - this.__tables[1].x)) : (this.__curTable = this.__tables[2], this.slide(this.slideEnd, -e.TABLEWIDTH - this.__tables[1].x)), this.__cdTime = Date.now() + 205, this.__chooseIndex = s, i.setSelected(), LogonController.c2sroomdetail(this.__roomid), Music.instance.playSound(Music.ClickButton)
        }
    }, e.prototype.onPrevious = function(t) {
        t.stopPropagation(), this.__currentPage > 0 && Date.now() > this.__cdTime && (this.__oper = 0, --this.__currentPage, LogonController.c2sroomlist(this.__currentPage + 1), this.__curTable = this.__tables[0], this.slide(this.slideEnd, e.TABLEWIDTH - this.__tables[1].x), this.__cdTime = Date.now() + 205)
    }, e.prototype.onNext = function(t) {
        t.stopPropagation(), this.__currentPage + 1 < this.__maxPage && Date.now() > this.__cdTime && (this.__oper = 0, ++this.__currentPage, LogonController.c2sroomlist(this.__currentPage + 1), this.__curTable = this.__tables[2], this.slide(this.slideEnd, -e.TABLEWIDTH - this.__tables[1].x), this.__cdTime = Date.now() + 205)
    }, e.prototype.onBack = function(t) {
        this.onClose(t), LogonController.c2sroomTypeInfo()
    }, e.prototype.onClose = function(e) {
        if (t.prototype.onClose.call(this, e), this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), egret.Capabilities.isMobile) this.__boundaryRect.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        else {
            var i = document.getElementsByTagName("CANVAS")[0];
            i.removeEventListener("mouseout", this.__mouseOutFunc)
        }
        this.__choosePanel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseTable, this), this.__previousBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPrevious, this), this.__nextBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this), this.__backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this), GameEventDispatcher.instance.removeEventListener(GameEvent.CHOOSETABLE, this.s2cmessages, this)
    }, e.ISCLICKCHAIR = !1, e.DRAGTIME = 0, e.TABLEWIDTH = 1280, e.TABLEHEIGHT = 720, e
}(ModalWin);
__reflect(ChooseTableWin.prototype, "ChooseTableWin");
var Table = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.__seats = [{
            cx: 664,
            cy: 456,
            px: 707,
            py: 404
        }, {
            cx: 765,
            cy: 384,
            px: 812,
            py: 337
        }, {
            cx: 848,
            cy: 335,
            px: 876,
            py: 309
        }, {
            cx: 135,
            cy: 328,
            px: 210,
            py: 283
        }, {
            cx: 331,
            cy: 288,
            px: 386,
            py: 240
        }, {
            cx: 480,
            cy: 260,
            px: 521,
            py: 220
        }], e.__arrowSpeed = .8, e.__id = 0, e.visible = !1;
        for (var i, s, n = 0; 6 > n; ++n) {
            var o = e.__seats[n];
            s = new BitmapButton, s.name = n.toString(), s.texture = RES.getRes("chooseTable_json#chair" + n), s.x = o.cx, s.y = o.cy, e.addChild(s), o.chair = s, i = new egret.Bitmap, i.texture = RES.getRes("chooseTable_json#people" + n), i.x = o.px, i.y = o.py, i.visible = !1, e.addChild(i), o.people = i, s = new BitmapButton, s.name = n.toString(), s.texture = RES.getRes("chooseTable_json#arrow" + n % 3), s.x = 3 > n ? o.cx + .6 * o.chair.width - s.width / 2 : o.cx + o.chair.width / 4 - s.width / 2, s.y = -o.chair.height / 2 + o.cy, e.addChild(s), o.arrow = s
        }
        i = new egret.Bitmap, i.texture = RES.getRes("chooseTable_json#table"), i.x = 237, i.y = 289, e.addChild(i);
        for (var n = 2; n >= 0; --n) {
            var o = e.__seats[n];
            e.addChild(o.chair), e.addChild(o.people), e.addChild(o.arrow)
        }
        return e.__seats.forEach(function(t) {
            t.chair.addEventListener(egret.TouchEvent.TOUCH_TAP, e.choosePos, e), t.arrow.addEventListener(egret.TouchEvent.TOUCH_TAP, e.choosePos, e)
        }), e.addEventListener(egret.Event.ENTER_FRAME, e.onFrame, e), e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoveFromStage, e), e
    }
    return __extends(e, t), e.prototype.onFrame = function() {
        for (var t, e = 0; 6 > e; ++e) t = this.__seats[e].arrow, t.anchorOffsetY += this.__arrowSpeed;
        (t.anchorOffsetY >= 15 || t.anchorOffsetY <= 0) && (this.__arrowSpeed = -this.__arrowSpeed)
    }, e.prototype.updateView = function(t, e) {
        var i = this;
        this.__id = t, this.__seats.forEach(function(t) {
            t.people.visible = !1, t.arrow.visible = !0
        }), e && e.forEach(function(t) {
            var e = i.__seats[t.pos - 1];
            e.people.visible = !0, e.arrow.visible = !1
        })
    }, e.prototype.choosePos = function(t) {
        if (!ChooseTableWin.ISCLICKCHAIR && Date.now() - ChooseTableWin.DRAGTIME > 10) {
            var e = parseInt(t.target.name);
            this.__seats[e].arrow.visible ? (LogonController.c2senterroom(this.__id, e + 1), ChooseTableWin.ISCLICKCHAIR = !0) : BannerFactory.instance.showText(Lang.getTextByKey("positionOccupied"))
        }
    }, e.prototype.onRemoveFromStage = function() {
        var t = this;
        this.__seats.forEach(function(e) {
            e.chair.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.choosePos, t), e.arrow.removeEventListener(egret.TouchEvent.TOUCH_TAP, t.choosePos, t)
        }), this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this), this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
    }, e
}(egret.Sprite);
__reflect(Table.prototype, "Table");
var TableItem = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.__index = e, i.visible = !1, i.touchEnabled = !0, i.__bg = new egret.Bitmap, i.__bg.texture = RES.getRes("chooseTable_json#item"), i.addChild(i.__bg), i.__nameInput = new egret.TextField, i.__nameInput.textAlign = egret.HorizontalAlign.CENTER, i.__nameInput.width = 124, i.__nameInput.x = 0, i.__nameInput.y = 9, i.__nameInput.size = 18, i.__nameInput.text = "", i.addChild(i.__nameInput), i.__numInput = new egret.TextField, i.__numInput.textColor = 652869, i.__numInput.textAlign = egret.HorizontalAlign.RIGHT, i.__numInput.width = 104, i.__numInput.x = 10, i.__numInput.y = 32, i.__numInput.size = 18, i.__numInput.text = "（1/6）", i.addChild(i.__numInput), i
    }
    return __extends(e, t), e.prototype.updateView = function(t) {
        t ? (this.visible = !0, this.__nameInput.text = GameUtil.arrayToChar(t.tablename), t.playernum < t.maxnum ? (this.__numInput.textColor = 652869, this.__numInput.text = t.playernum + "/" + t.maxnum) : (this.__numInput.textColor = 16711680, this.__numInput.text = Lang.getTextByKey("full"))) : this.visible = !1, this.__data = t
    }, e.prototype.setSelected = function() {
        this.__bg.texture = RES.getRes("chooseTable_json#select_item")
    }, e.prototype.setUnSelected = function() {
        this.__bg.texture = RES.getRes("chooseTable_json#item")
    }, Object.defineProperty(e.prototype, "index", {
        get: function() {
            return this.__index
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "data", {
        get: function() {
            return this.__data
        },
        enumerable: !0,
        configurable: !0
    }), e
}(egret.Sprite);
__reflect(TableItem.prototype, "TableItem");
var Game = function() {
    function t() {
        this._serverTime = 0, this._referenceTime = 0, this._inScene = !1, this._mute = !1, this._sceneState = 0, this._changeMapTime = 0, this._maxRate = 100, this._minRate = 1, this._freezeStartTime = 0, this._freezeEndTime = 0, this._gameType = parseInt(GameUtil.getQueryVariable("type")) || 1, this._lang = "cn", this._clientUID = 0, this._fishRoomMod = 0
    }
    return t.prototype.init = function() {
        var t = localStorage.getItem("musicSwitch");
        this._mute = "false" == t, this._clientUID = GameUtil.randomInt(100, 1e3)
    }, Object.defineProperty(t.prototype, "clientUID", {
        get: function() {
            return this._clientUID++, this._clientUID
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "serverTime", {
        get: function() {
            return egret.getTimer() - this._referenceTime + this._serverTime
        },
        set: function(t) {
            this._referenceTime = egret.getTimer(), this._serverTime = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "inScene", {
        get: function() {
            return this._inScene
        },
        set: function(t) {
            this._inScene = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "mute", {
        get: function() {
            return this._mute
        },
        set: function(t) {
            this._mute = t, t ? Music.instance.stopAllSound() : Music.instance.recoveryAllSound(), this.saveSetting()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "sceneState", {
        get: function() {
            return this._sceneState
        },
        set: function(t) {
            this._sceneState = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "changeMapTime", {
        get: function() {
            return this._changeMapTime
        },
        set: function(t) {
            this._changeMapTime = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "maxRate", {
        get: function() {
            return this._maxRate
        },
        set: function(t) {
            this._maxRate = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "minRate", {
        get: function() {
            return this._minRate
        },
        set: function(t) {
            this._minRate = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "freezeTime", {
        set: function(t) {
            this._freezeEndTime <= t && (this._freezeStartTime = t), this._freezeEndTime = 5 * GameUtil.FREEZETIME + t
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.clearFreeze = function() {
        this._freezeEndTime > this._serverTime && (this._serverTime > this._freezeStartTime + GameUtil.FREEZEBUFFERTIME && FishFactory.instance.resetCreateTime(this._serverTime - this._freezeStartTime - GameUtil.FREEZEBUFFERTIME), this._freezeEndTime = 0, this._freezeStartTime = 0)
    }, Object.defineProperty(t.prototype, "freezeStartTime", {
        get: function() {
            return this._freezeStartTime
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "freezeEndTime", {
        get: function() {
            return this._freezeEndTime
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.saveSetting = function() {
        localStorage.setItem("musicSwitch", this._mute ? "false" : "true")
    }, Object.defineProperty(t.prototype, "gameType", {
        get: function() {
            return this._gameType
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lang", {
        get: function() {
            return this._lang
        },
        set: function(t) {
            this._lang = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "fishRoomMod", {
        get: function() {
            return this._fishRoomMod
        },
        set: function(t) {
            this._fishRoomMod = t
        },
        enumerable: !0,
        configurable: !0
    }), t.instance = new t, t
}();
__reflect(Game.prototype, "Game");
var User = function() {
    function t() {
        this._uid = 0, this._money = 0, this._angel = 0, this._pos = 0, this._roomType = 0, this._auto = !1, this._lock = !1, this._pressDown = !1, this._fireInterval = 100, this._bulletCount = 0, this.lastCode = -1
    }
    return Object.defineProperty(t.prototype, "fastInterval", {
        get: function() {
            return 100
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bulletCount", {
        get: function() {
            return this._bulletCount
        },
        set: function(t) {
            this._bulletCount = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "uid", {
        get: function() {
            return this._uid
        },
        set: function(t) {
            this._uid = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "angel", {
        get: function() {
            return this._angel
        },
        set: function(t) {
            this._angel = t, Main.instance.adjustAngle(t)
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "pos", {
        get: function() {
            return this._pos
        },
        set: function(t) {
            this._pos = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "auto", {
        get: function() {
            return this._auto
        },
        set: function(t) {
            this._auto = t, this.resetFireInterval()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "roomType", {
        get: function() {
            return this._roomType
        },
        set: function(t) {
            this._roomType = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lock", {
        get: function() {
            return this._lock
        },
        set: function(t) {
            this._lock = t, this.resetFireInterval()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "pressDown", {
        get: function() {
            return this._pressDown
        },
        set: function(t) {
            this._pressDown = t, this.resetFireInterval()
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.resetFireInterval = function() {
        this._pressDown || this._auto || this._lock ? (this._fireInterval = 333, BatteryFactory.instance.getMyBattery().lockFish || this._pressDown || this._auto || (this._fireInterval = this.fastInterval)) : this._fireInterval = this.fastInterval
    }, Object.defineProperty(t.prototype, "fireInterval", {
        get: function() {
            return this._fireInterval
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.init = function(t) {
        this._money = GameUtil.ChargeScore(t.money), Game.instance.inScene && GameEventDispatcher.instance.dispatchEvent(new GameEvent(GameEvent.ADDSCORE, this._money))
    }, t.prototype.clear = function() {
        this.lastCode = -1, this._bulletCount = 0, this._money = 0, this._angel = 0, this._roomType = 0, this._auto = !1, this._lock = !1, this._pressDown = !1, this._fireInterval = 100
    }, t.prototype.getUniquenessCode = function() {
        return this.lastCode = this.lastCode < 9999 ? this.lastCode + 1 : 0, this.lastCode
    }, t.myself = new t, t
}();
__reflect(User.prototype, "User");
var MySocket = function() {
    function t() {
        this.listeners = new Object
    }
    return t.prototype.initWebSocket = function(t) {
        LogonController.addAllListeners(), TipsController.addAllListeners(), OtherController.addAllListeners(), UserController.addAllListeners(), this.socket = new egret.WebSocket, this.socket.type = egret.WebSocket.TYPE_BINARY, this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this), this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this), this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this), this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this), this.socket.connectByUrl(t)
    }, t.prototype.closeSocket = function() {
        this.socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this), this.socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this), this.socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this), this.socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this), this.socket.close(), this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.c2sheart, this), this.timer.stop()), this.socket = null
    }, t.prototype.onSocketOpen = function(t) {
        LogManager.Log("onSocketOpen"), this.c2sheart(), this.timer = new egret.Timer(2e4), this.timer.addEventListener(egret.TimerEvent.TIMER, this.c2sheart, this), this.timer.start(), LogonController.c2slogin()
    }, t.prototype.c2sheart = function() {
        Main.socket.sendData({
            type: "heart",
            message: {
                time: Game.instance.serverTime
            }
        })
    }, t.prototype.onReceiveMessage = function(t) {
        var e = new egret.ByteArray;
        this.socket.readBytes(e);
        var i = this.unzip(e.bytes),
            s = JSON.parse(i);
        this.listeners[s.type] && this.listeners[s.type](s)
    }, t.prototype.unzip = function(t) {
        for (var e = "", i = t.length, s = 0; i > s; ++s) e += String.fromCharCode(t[s]);
		return e;
        var n = atob(e),
            o = n.split("").map(function(t) {
                return t.charCodeAt(0)
            }),
            a = new Uint8Array(o),
            r = pako.inflate(a);
        n = String.fromCharCode.apply(null, new Uint16Array(r));
        var h = decodeURIComponent(n),
            c = "";
        i = h.length;
        for (var s = 0; i > s; ++s) {
            var l = h.charCodeAt(s);
            c += String.fromCharCode(~-l)
        }
        return c
    }, t.prototype.onSocketClose = function(t) {
        LoadingUI.instance && LoadingUI.instance.removeFromStage(), LogManager.Error("onSocketClose", t), this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.c2sheart, this), this.timer.stop()), SceneController.clearRoom(), Music.instance.closeBGM(), PopupView.instance.setPopupData(11e3)
    }, t.prototype.onSocketError = function(t) {
        LogManager.Error("onSocketError", t), this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.c2sheart, this), this.timer.stop())
    }, t.prototype.sendData = function(t) {
		var tmpPar=JSON.parse('{"sessionId":'+sessionStorage.getItem('sessionId')+',"gameData":'+JSON.stringify(t)+',"cookie":"'+document.cookie+'","gameName":"BirdHunterVP"}');
        this.socket.writeBytes(this.encode(tmpPar)), this.socket.flush()
    }, t.prototype.encode = function(t) {
        for (var e = new egret.ByteArray, i = JSON.stringify(t), s = i.length, n = 0; s > n; ++n) {
            var o = i.charCodeAt(n);
            e.writeByte(o)
        }
        return e
    }, t.prototype.addListener = function(t) {
        this.listeners[t.type] = t.callBack
    }, t.prototype.removeListener = function(t) {
        delete this.listeners[t]
    }, t
}();
__reflect(MySocket.prototype, "MySocket");
var BatteryFactory = function() {
    function t() {
        this.feathers = null, this.batteries = [], this.layer = new egret.DisplayObjectContainer, this.myBattery = new MyBattery(0), this.layer.addChild(this.myBattery), this.batteries.push(this.myBattery);
        var t, e;
        for (t = 1; 6 > t; ++t) e = new Battery(t), this.layer.addChild(e), this.batteries.push(e);
        Main.instance.addToSceneLayer(this.layer)
    }
    return t.prototype.initFeather = function(t) {
        this.feathers = t
    }, t.prototype.init = function(t) {
        var e = this;
        t.forEach(function(t) {
            if (--t.pos, t.uid === User.myself.uid) {
                if (t.pos !== User.myself.pos) {
                    var i = e.batteries[t.pos];
                    e.batteries[t.pos] = e.myBattery, e.batteries[User.myself.pos] = i, i.changeSeat(User.myself.pos), e.myBattery.changeSeat(t.pos)
                }
                User.myself.pos = t.pos, User.myself.angel = t.pos >= 3 ? 180 : 0
            }
            t.score = GameUtil.ChargeScore(t.score), e.batteries[t.pos].init(1, t);
            var s = e.getFeatherCount(t.uid);
            e.batteries[t.pos].setFeatherCount(s)
        })
    }, t.prototype.getFeatherCount = function(t) {
        for (var e = 0, i = 0, s = this.feathers; i < s.length; i++) {
            var n = s[i];
            n.k == t && null != n.v && (e = n.v)
        }
        return e
    }, t.prototype.clear = function() {
        this.batteries.forEach(function(t) {
            return t.clear()
        })
    }, t.prototype.playerUpdate = function(t, e) {
        e.pos -= 1, e.score = GameUtil.ChargeScore(e.score);
        var i = this.batteries[e.pos];
        i.playerUpdate(t, e), 2 == t && (SceneOther.instance.removeLockFish(e.pos), EffectFactory.instance.clearByPos(e.pos), ScoreFactory.instance.clearByPos(e.pos), ShakeTool.instance().stop(i))
    }, t.prototype.onEnterFrame = function(t) {
        this.batteries.forEach(function(e) {
            e.update(t)
        })
    }, t.prototype.launchBullets = function(t) {
        var e = this;
        t.forEach(function(t) {
            t.pos != User.myself.pos && e.batteries[t.pos].launchBullet(t)
        })
    }, t.prototype.anchoroHitTest = function(t, e) {
        return this.myBattery.hitTestPoint(t, e)
    }, t.prototype.getBatteryByPos = function(t) {
        return this.batteries[t]
    }, t.prototype.getBatteryByUID = function(t) {
        for (var e = 0, i = this.batteries; e < i.length; e++) {
            var s = i[e];
            if (s.uid == t) return s
        }
        return null
    }, t.prototype.getAliveBattery = function(t) {
        var e = this.batteries[t];
        return e && e.info ? e : null
    }, t.prototype.getMyBattery = function() {
        return this.myBattery
    }, t
}();
__reflect(BatteryFactory.prototype, "BatteryFactory");
var Lang = function() {
    function t() {}
    return t.init = function() {
        t.config = RES.getRes("lang_" + Game.instance.lang + "_json")
    }, t.getTextByKey = function(e) {
        return t.config[e]
    }, t
}();
__reflect(Lang.prototype, "Lang");
var LogManager = function() {
    function t() {}
    return t.getTimeStr = function() {
        var t = new Date,
            e = t.toLocaleString(),
            i = t.getMilliseconds().toString();
        return 1 == i.length ? i = "00" + i : 2 == i.length && (i = "0" + i), e + "." + i
    }, t.Log = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        if (this.isOutLog) {
            var s = this.getTimeStr();
            egret.log.apply(egret, [s, t].concat(e))
        }
    }, t.Error = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        if (this.isOutError) {
            var s = this.getTimeStr();
            egret.error.apply(egret, [s, t].concat(e))
        }
    }, t.Warning = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        if (this.isOutWarning) {
            var s = this.getTimeStr();
            egret.warn.apply(egret, [s, t].concat(e))
        }
    }, t.isOutLog = !0, t.isOutError = !0, t.isOutWarning = !0, t
}();
__reflect(LogManager.prototype, "LogManager");