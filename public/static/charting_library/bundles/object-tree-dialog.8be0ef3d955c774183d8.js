;(window.webpackJsonp = window.webpackJsonp || []).push([
  ["object-tree-dialog"],
  {
    "+5L9": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
    },
    "+KIV": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>'
    },
    "+wZE": function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return l
      })
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("TSYQ"),
        s = n.n(a),
        c = n("Iivm"),
        u = n("WcWV")
      function l(e) {
        const { className: t, disabled: n } = e,
          o = Object(r.a)(e, ["className", "disabled"])
        return i.a.createElement(c.a, Object.assign({ className: s()(u.button, n && u.disabled, t) }, o))
      }
    },
    "/XZa": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areDirty = function (e, t) {
          if (e === o) return !1
          if (e === i || void 0 === t) return !0
          return (0, r.intersection)(t, e).length > 0
        }),
        (t.ALL = t.NONE = void 0)
      var r = n("rTKX"),
        o = []
      t.NONE = o
      var i = []
      ;(t.ALL = i), (o.__IS_NONE__ = !0), (i.__IS_ALL__ = !0)
    },
    "/yIc": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.END_DRAG = t.DROP = t.HOVER = t.PUBLISH_DRAG_SOURCE = t.BEGIN_DRAG = t.INIT_COORDS = void 0)
      t.INIT_COORDS = "dnd-core/INIT_COORDS"
      t.BEGIN_DRAG = "dnd-core/BEGIN_DRAG"
      t.PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE"
      t.HOVER = "dnd-core/HOVER"
      t.DROP = "dnd-core/DROP"
      t.END_DRAG = "dnd-core/END_DRAG"
    },
    "02pg": function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return a
      })
      var r = n("q1tI"),
        o = n("TSYQ"),
        i = n("XiJV")
      function a(e) {
        return r.createElement("div", { className: o(i.separator, e.className) })
      }
    },
    "1TyS": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getEmptyImage", {
          enumerable: !0,
          get: function () {
            return a.getEmptyImage
          }
        }),
        (t.NativeTypes = t.default = void 0)
      var r,
        o = (r = n("OLLy")) && r.__esModule ? r : { default: r },
        i = (function (e) {
          if (e && e.__esModule) return e
          var t = s()
          if (t && t.has(e)) return t.get(e)
          var n = {}
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null
                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o])
              }
          }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("DC3H"))
      t.NativeTypes = i
      var a = n("KMov")
      function s() {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      var c = function (e, t) {
        return new o.default(e, t)
      }
      t.default = c
    },
    "20cQ": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4A2.5 2.5 0 0 0 7 5.5V7h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V5.5a3.5 3.5 0 0 1 6.231-2.19c-.231.19-.73.69-.73.69zM13 8H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-2 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
    },
    "2H2i": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0)
      var r = u(n("IEa/")),
        o = u(n("QLaP")),
        i = n("Uyss"),
        a = u(n("TM5I")),
        s = n("iI3E"),
        c = n("GA2J")
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function d(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e))
              return
            var n = [],
              r = !0,
              o = !1,
              i = void 0
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (c) {
              ;(o = !0), (i = c)
            } finally {
              try {
                r || null == s.return || s.return()
              } finally {
                if (o) throw i
              }
            }
            return n
          })(e, t) ||
          (function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
          })()
        )
      }
      function f(e) {
        switch (e[0]) {
          case "S":
            return s.HandlerRole.SOURCE
          case "T":
            return s.HandlerRole.TARGET
          default:
            ;(0, o.default)(!1, "Cannot parse handler ID: ".concat(e))
        }
      }
      function h(e, t) {
        var n = e.entries(),
          r = !1
        do {
          var o = n.next(),
            i = o.done
          if (d(o.value, 2)[1] === t) return !0
          r = !!i
        } while (!r)
        return !1
      }
      var p = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t)
        }
        var t, n, u
        return (
          (t = e),
          (n = [
            {
              key: "addSource",
              value: function (e, t) {
                ;(0, c.validateType)(e), (0, c.validateSourceContract)(t)
                var n = this.addHandler(s.HandlerRole.SOURCE, e, t)
                return this.store.dispatch((0, i.addSource)(n)), n
              }
            },
            {
              key: "addTarget",
              value: function (e, t) {
                ;(0, c.validateType)(e, !0), (0, c.validateTargetContract)(t)
                var n = this.addHandler(s.HandlerRole.TARGET, e, t)
                return this.store.dispatch((0, i.addTarget)(n)), n
              }
            },
            {
              key: "containsHandler",
              value: function (e) {
                return h(this.dragSources, e) || h(this.dropTargets, e)
              }
            },
            {
              key: "getSource",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                ;(0, o.default)(this.isSourceId(e), "Expected a valid source ID.")
                var n = t && e === this.pinnedSourceId,
                  r = n ? this.pinnedSource : this.dragSources.get(e)
                return r
              }
            },
            {
              key: "getTarget",
              value: function (e) {
                return (
                  (0, o.default)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e)
                )
              }
            },
            {
              key: "getSourceType",
              value: function (e) {
                return (0, o.default)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e)
              }
            },
            {
              key: "getTargetType",
              value: function (e) {
                return (0, o.default)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e)
              }
            },
            {
              key: "isSourceId",
              value: function (e) {
                return f(e) === s.HandlerRole.SOURCE
              }
            },
            {
              key: "isTargetId",
              value: function (e) {
                return f(e) === s.HandlerRole.TARGET
              }
            },
            {
              key: "removeSource",
              value: function (e) {
                var t = this
                ;(0, o.default)(this.getSource(e), "Expected an existing source."),
                  this.store.dispatch((0, i.removeSource)(e)),
                  (0, r.default)(function () {
                    t.dragSources.delete(e), t.types.delete(e)
                  })
              }
            },
            {
              key: "removeTarget",
              value: function (e) {
                ;(0, o.default)(this.getTarget(e), "Expected an existing target."),
                  this.store.dispatch((0, i.removeTarget)(e)),
                  this.dropTargets.delete(e),
                  this.types.delete(e)
              }
            },
            {
              key: "pinSource",
              value: function (e) {
                var t = this.getSource(e)
                ;(0, o.default)(t, "Expected an existing source."),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t)
              }
            },
            {
              key: "unpinSource",
              value: function () {
                ;(0, o.default)(this.pinnedSource, "No source is pinned at the time."),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null)
              }
            },
            {
              key: "addHandler",
              value: function (e, t, n) {
                var r = (function (e) {
                  var t = (0, a.default)().toString()
                  switch (e) {
                    case s.HandlerRole.SOURCE:
                      return "S".concat(t)
                    case s.HandlerRole.TARGET:
                      return "T".concat(t)
                    default:
                      throw new Error("Unknown Handler Role: ".concat(e))
                  }
                })(e)
                return (
                  this.types.set(r, t),
                  e === s.HandlerRole.SOURCE
                    ? this.dragSources.set(r, n)
                    : e === s.HandlerRole.TARGET && this.dropTargets.set(r, n),
                  r
                )
              }
            }
          ]) && l(t.prototype, n),
          u && l(t, u),
          e
        )
      })()
      t.default = p
    },
    "4/GM": function (e, t, n) {
      e.exports = { dialog: "dialog-3q1-PXu-", button: "button-3q1-PXu-" }
    },
    "4ceR": function (e, t, n) {
      e.exports = {
        dropTargetInside: "dropTargetInside-3UxYcxls",
        dropTarget: "dropTarget-3UxYcxls",
        before: "before-3UxYcxls",
        after: "after-3UxYcxls"
      }
    },
    "6ccc": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useMonitorOutput = function (e, t, n) {
          var i =
              ((c = (0, o.useCollector)(e, t, n)),
              (u = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(c) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    "[object Arguments]" === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0
                    try {
                      for (
                        var a, s = e[Symbol.iterator]();
                        !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      ;(o = !0), (i = c)
                    } finally {
                      try {
                        r || null == s.return || s.return()
                      } finally {
                        if (o) throw i
                      }
                    }
                    return n
                  }
                })(c, u) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                })()),
            a = i[0],
            s = i[1]
          var c, u
          return (
            (0, r.useIsomorphicLayoutEffect)(
              function () {
                var t = e.getHandlerId()
                if (null != t) return e.subscribeToStateChange(s, { handlerIds: [t] })
              },
              [e, s]
            ),
            a
          )
        })
      var r = n("7bhs"),
        o = n("84ty")
    },
    "6joC": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useDragSourceMonitor = function () {
          var e = (0, s.useDragDropManager)(),
            t = (0, o.useMemo)(
              function () {
                return new c.DragSourceMonitorImpl(e)
              },
              [e]
            ),
            n = (0, o.useMemo)(
              function () {
                return new u.SourceConnector(e.getBackend())
              },
              [e]
            )
          return [t, n]
        }),
        (t.useDragHandler = function (e, t, n) {
          var r = (0, s.useDragDropManager)(),
            c = (0, o.useMemo)(function () {
              return {
                beginDrag: function () {
                  var n = e.current,
                    r = n.begin,
                    o = n.item
                  if (r) {
                    var a = r(t)
                    return (
                      (0, i.default)(
                        null == a || "object" === d(a),
                        "dragSpec.begin() must either return an object, undefined, or null"
                      ),
                      a || o || {}
                    )
                  }
                  return o || {}
                },
                canDrag: function () {
                  return "boolean" == typeof e.current.canDrag
                    ? e.current.canDrag
                    : "function" != typeof e.current.canDrag || e.current.canDrag(t)
                },
                isDragging: function (n, r) {
                  var o = e.current.isDragging
                  return o ? o(t) : r === n.getSourceId()
                },
                endDrag: function () {
                  var r = e.current.end
                  r && r(t.getItem(), t), n.reconnect()
                }
              }
            }, [])
          ;(0, l.useIsomorphicLayoutEffect)(function () {
            var o,
              i,
              s = (0, a.registerSource)(e.current.item.type, c, r),
              u =
                ((i = 2),
                (function (e) {
                  if (Array.isArray(e)) return e
                })((o = s)) ||
                  (function (e, t) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    ) {
                      var n = [],
                        r = !0,
                        o = !1,
                        i = void 0
                      try {
                        for (
                          var a, s = e[Symbol.iterator]();
                          !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                          r = !0
                        );
                      } catch (c) {
                        ;(o = !0), (i = c)
                      } finally {
                        try {
                          r || null == s.return || s.return()
                        } finally {
                          if (o) throw i
                        }
                      }
                      return n
                    }
                  })(o, i) ||
                  (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                  })()),
              l = u[0],
              d = u[1]
            return t.receiveHandlerId(l), n.receiveHandlerId(l), d
          }, [])
        })
      var r,
        o = n("q1tI"),
        i = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        a = n("lAcH"),
        s = n("gArw"),
        c = n("T+8Q"),
        u = n("GrOC"),
        l = n("7bhs")
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
    },
    "7bhs": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.useIsomorphicLayoutEffect = void 0)
      var r = n("q1tI"),
        o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect
      t.useIsomorphicLayoutEffect = o
    },
    "84ty": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useCollector = function (e, t, n) {
          var r =
              ((l = (0, i.useState)(function () {
                return t(e)
              })),
              (d = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(l) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    "[object Arguments]" === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0
                    try {
                      for (
                        var a, s = e[Symbol.iterator]();
                        !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      ;(o = !0), (i = c)
                    } finally {
                      try {
                        r || null == s.return || s.return()
                      } finally {
                        if (o) throw i
                      }
                    }
                    return n
                  }
                })(l, d) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                })()),
            s = r[0],
            c = r[1],
            u = (0, i.useCallback)(
              function () {
                var r = t(e)
                ;(0, o.default)(s, r) || (c(r), n && n())
              },
              [s, e, n]
            )
          var l, d
          return (0, a.useIsomorphicLayoutEffect)(u, []), [s, u]
        })
      var r,
        o = (r = n("Gytx")) && r.__esModule ? r : { default: r },
        i = n("q1tI"),
        a = n("7bhs")
    },
    "8QtF": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createDndContext = function (e, t, n, r) {
          return { dragDropManager: (0, o.createDragDropManager)(e, t, n, r) }
        }),
        (t.DndContext = void 0)
      var r = (function (e) {
          if (e && e.__esModule) return e
          var t = i()
          if (t && t.has(e)) return t.get(e)
          var n = {}
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o])
              }
          }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("q1tI")),
        o = n("Lvbb")
      function i() {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (i = function () {
            return e
          }),
          e
        )
      }
      var a = r.createContext({ dragDropManager: void 0 })
      t.DndContext = a
    },
    "8nTA": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = n("sAc8")
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e]
            }
          })
      })
      var o = n("O5am")
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e]
            }
          })
      })
      var i = n("cSMM")
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e]
            }
          })
      })
    },
    "Ag/1": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function () {
            if (e.getMonitor().isDragging()) return { type: r.PUBLISH_DRAG_SOURCE }
          }
        })
      var r = n("/yIc")
    },
    AmWu: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cloneWithRef = function (e, t) {
          var n = e.ref
          return (
            (0, i.default)(
              "string" != typeof n,
              "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"
            ),
            n
              ? (0, o.cloneElement)(e, {
                  ref: function (e) {
                    a(n, e), a(t, e)
                  }
                })
              : (0, o.cloneElement)(e, { ref: t })
          )
        })
      var r,
        o = n("q1tI"),
        i = (r = n("QLaP")) && r.__esModule ? r : { default: r }
      function a(e, t) {
        "function" == typeof e ? e(t) : (e.current = t)
      }
    },
    "B6/a": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.5 6C4.67 6 4 6.67 4 7.5V20.5c0 .83.67 1.5 1.5 1.5H16v-1H5.5a.5.5 0 0 1-.5-.5V12h16v1h1V9.5c0-.83-.67-1.5-1.5-1.5h-8.8L9.86 6.15 9.71 6H5.5zM21 11H5V7.5c0-.28.22-.5.5-.5h3.8l1.85 1.85.14.15h9.21c.28 0 .5.22.5.5V11zm1 11v-3h3v-1h-3v-3h-1v3h-3v1h3v3h1z"/></svg>'
    },
    D1HX: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = n.clientOffset
            s(t)
            var o = t.slice(0),
              a = e.getMonitor(),
              d = e.getRegistry()
            c(o, a, d)
            var f = a.getItemType()
            return (
              u(o, d, f), l(o, a, d), { type: i.HOVER, payload: { targetIds: o, clientOffset: r || null } }
            )
          }
        })
      var r = a(n("QLaP")),
        o = a(n("gGVb")),
        i = n("/yIc")
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e) {
        ;(0, r.default)(Array.isArray(e), "Expected targetIds to be an array.")
      }
      function c(e, t, n) {
        ;(0, r.default)(t.isDragging(), "Cannot call hover while not dragging."),
          (0, r.default)(!t.didDrop(), "Cannot call hover after drop.")
        for (var o = 0; o < e.length; o++) {
          var i = e[o]
          ;(0, r.default)(e.lastIndexOf(i) === o, "Expected targetIds to be unique in the passed array.")
          var a = n.getTarget(i)
          ;(0, r.default)(a, "Expected targetIds to be registered.")
        }
      }
      function u(e, t, n) {
        for (var r = e.length - 1; r >= 0; r--) {
          var i = e[r],
            a = t.getTargetType(i)
          ;(0, o.default)(a, n) || e.splice(r, 1)
        }
      }
      function l(e, t, n) {
        e.forEach(function (e) {
          n.getTarget(e).hover(t, e)
        })
      }
    },
    DC3H: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.TEXT = t.URL = t.FILE = void 0)
      t.FILE = "__NATIVE_FILE__"
      t.URL = "__NATIVE_URL__"
      t.TEXT = "__NATIVE_TEXT__"
    },
    DGxW: function (e, t, n) {
      e.exports = {
        separator: "separator-3U2Wf-wc",
        tree: "tree-3U2Wf-wc",
        overlayScrollWrap: "overlayScrollWrap-3U2Wf-wc",
        listContainer: "listContainer-3U2Wf-wc"
      }
    },
    Def4: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DragLayer = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return (
            (0, u.checkDecoratorArguments)("DragLayer", "collect[, options]", e, t),
            (0, a.default)(
              "function" == typeof e,
              'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',
              "Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",
              e
            ),
            (0, a.default)(
              (0, c.isPlainObject)(t),
              'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
              t
            ),
            function (n) {
              var c = n,
                l = t.arePropsEqual,
                d = void 0 === l ? o.default : l,
                p = c.displayName || c.name || "Component",
                m = (function (t) {
                  function n() {
                    var e
                    return (
                      h(this, n),
                      ((e = v(this, b(n).apply(this, arguments))).isCurrentlyMounted = !1),
                      (e.ref = r.createRef()),
                      (e.handleChange = function () {
                        if (e.isCurrentlyMounted) {
                          var t = e.getCurrentState()
                          ;(0, o.default)(t, e.state) || e.setState(t)
                        }
                      }),
                      e
                    )
                  }
                  return (
                    y(n, t),
                    g(n, [
                      {
                        key: "getDecoratedComponentInstance",
                        value: function () {
                          return (
                            (0, a.default)(
                              this.ref.current,
                              "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"
                            ),
                            this.ref.current
                          )
                        }
                      },
                      {
                        key: "shouldComponentUpdate",
                        value: function (e, t) {
                          return !d(e, this.props) || !(0, o.default)(t, this.state)
                        }
                      },
                      {
                        key: "componentDidMount",
                        value: function () {
                          ;(this.isCurrentlyMounted = !0), this.handleChange()
                        }
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          ;(this.isCurrentlyMounted = !1),
                            this.unsubscribeFromOffsetChange &&
                              (this.unsubscribeFromOffsetChange(),
                              (this.unsubscribeFromOffsetChange = void 0)),
                            this.unsubscribeFromStateChange &&
                              (this.unsubscribeFromStateChange(), (this.unsubscribeFromStateChange = void 0))
                        }
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this
                          return r.createElement(s.DndContext.Consumer, null, function (t) {
                            var n = t.dragDropManager
                            return void 0 === n
                              ? null
                              : (e.receiveDragDropManager(n),
                                e.isCurrentlyMounted
                                  ? r.createElement(
                                      c,
                                      Object.assign({}, e.props, e.state, {
                                        ref: (0, u.isRefable)(c) ? e.ref : null
                                      })
                                    )
                                  : null)
                          })
                        }
                      },
                      {
                        key: "receiveDragDropManager",
                        value: function (e) {
                          if (void 0 === this.manager) {
                            ;(this.manager = e),
                              (0, a.default)(
                                "object" === f(e),
                                "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                                p,
                                p
                              )
                            var t = this.manager.getMonitor()
                            ;(this.unsubscribeFromOffsetChange = t.subscribeToOffsetChange(
                              this.handleChange
                            )),
                              (this.unsubscribeFromStateChange = t.subscribeToStateChange(this.handleChange))
                          }
                        }
                      },
                      {
                        key: "getCurrentState",
                        value: function () {
                          if (!this.manager) return {}
                          var t = this.manager.getMonitor()
                          return e(t, this.props)
                        }
                      }
                    ]),
                    n
                  )
                })(r.Component)
              return (
                (m.displayName = "DragLayer(".concat(p, ")")),
                (m.DecoratedComponent = n),
                (0, i.default)(m, n)
              )
            }
          )
        })
      var r = (function (e) {
          if (e && e.__esModule) return e
          var t = d()
          if (t && t.has(e)) return t.get(e)
          var n = {}
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null
                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o])
              }
          }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("q1tI")),
        o = l(n("Gytx")),
        i = l(n("2mql")),
        a = l(n("QLaP")),
        s = n("Y4Oj"),
        c = n("GanS"),
        u = n("aDaG")
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function d() {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (d = function () {
            return e
          }),
          e
        )
      }
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      function h(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function g(e, t, n) {
        return t && p(e.prototype, t), n && p(e, n), e
      }
      function v(e, t) {
        return !t || ("object" !== f(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function y(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function")
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && m(e, t)
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
    },
    E9Q6: function (e, t, n) {
      "use strict"
      function r(e, t) {
        return { x: e.x + t.x, y: e.y + t.y }
      }
      function o(e, t) {
        return { x: e.x - t.x, y: e.y - t.y }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add = r),
        (t.subtract = o),
        (t.getSourceClientOffset = function (e) {
          var t = e.clientOffset,
            n = e.initialClientOffset,
            i = e.initialSourceClientOffset
          if (!t || !n || !i) return null
          return o(r(t, i), n)
        }),
        (t.getDifferenceFromInitialOffset = function (e) {
          var t = e.clientOffset,
            n = e.initialClientOffset
          if (!t || !n) return null
          return o(t, n)
        })
    },
    Ed17: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return (
            Object.keys(e).forEach(function (t) {
              ;(0, o.default)(
                s.indexOf(t) > -1,
                'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                s.join(", "),
                t
              ),
                (0, o.default)(
                  "function" == typeof e[t],
                  "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",
                  t,
                  t,
                  e[t]
                )
            }),
            function (t, n) {
              return new c(e, t, n)
            }
          )
        })
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        i = (n("GanS"), n("aDaG"))
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var s = ["canDrop", "hover", "drop"],
        c = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e),
              (this.props = null),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r)
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: "receiveProps",
                value: function (e) {
                  this.props = e
                }
              },
              {
                key: "receiveMonitor",
                value: function (e) {
                  this.monitor = e
                }
              },
              {
                key: "canDrop",
                value: function () {
                  return !this.spec.canDrop || this.spec.canDrop(this.props, this.monitor)
                }
              },
              {
                key: "hover",
                value: function () {
                  this.spec.hover &&
                    this.spec.hover(this.props, this.monitor, (0, i.getDecoratedComponent)(this.ref))
                }
              },
              {
                key: "drop",
                value: function () {
                  if (this.spec.drop) return this.spec.drop(this.props, this.monitor, this.ref.current)
                }
              }
            ]) && a(t.prototype, n),
            r && a(t, r),
            e
          )
        })()
    },
    EvtC: function (e, t, n) {
      e.exports = { button: "button-2YcRd2gv" }
    },
    FeGr: function (e, t, n) {
      "use strict"
      ;(function (t) {
        function n(e) {
          o.length || (r(), !0), (o[o.length] = e)
        }
        e.exports = n
        var r,
          o = [],
          i = 0
        function a() {
          for (; i < o.length; ) {
            var e = i
            if (((i += 1), o[e], i > 1024)) {
              for (var t = 0, n = o.length - i; t < n; t++) o[t] = o[t + i]
              ;(o.length -= i), (i = 0)
            }
          }
          ;(o.length = 0), (i = 0), !1
        }
        var s,
          c,
          u,
          l = void 0 !== t ? t : self,
          d = l.MutationObserver || l.WebKitMutationObserver
        function f(e) {
          return function () {
            var t = setTimeout(r, 0),
              n = setInterval(r, 50)
            function r() {
              clearTimeout(t), clearInterval(n), e()
            }
          }
        }
        "function" == typeof d
          ? ((s = 1),
            (c = new d(a)),
            (u = document.createTextNode("")),
            c.observe(u, { characterData: !0 }),
            (r = function () {
              ;(s = -s), (u.data = s)
            }))
          : (r = f(a)),
          (n.requestFlush = r),
          (n.makeRequestCallFromTimer = f)
      }.call(this, n("yLpj")))
    },
    "G/LZ": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload
          switch (t.type) {
            case r.BEGIN_DRAG:
              return s({}, e, {
                itemType: n.itemType,
                item: n.item,
                sourceId: n.sourceId,
                isSourcePublic: n.isSourcePublic,
                dropResult: null,
                didDrop: !1
              })
            case r.PUBLISH_DRAG_SOURCE:
              return s({}, e, { isSourcePublic: !0 })
            case r.HOVER:
              return s({}, e, { targetIds: n.targetIds })
            case o.REMOVE_TARGET:
              return -1 === e.targetIds.indexOf(n.targetId)
                ? e
                : s({}, e, { targetIds: (0, i.without)(e.targetIds, n.targetId) })
            case r.DROP:
              return s({}, e, { dropResult: n.dropResult, didDrop: !0, targetIds: [] })
            case r.END_DRAG:
              return s({}, e, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: []
              })
            default:
              return e
          }
        })
      var r = n("zLS0"),
        o = n("Uyss"),
        i = n("rTKX")
      function a(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var u = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null
      }
    },
    GA2J: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.validateSourceContract = function (e) {
          ;(0, o.default)("function" == typeof e.canDrag, "Expected canDrag to be a function."),
            (0, o.default)("function" == typeof e.beginDrag, "Expected beginDrag to be a function."),
            (0, o.default)("function" == typeof e.endDrag, "Expected endDrag to be a function.")
        }),
        (t.validateTargetContract = function (e) {
          ;(0, o.default)("function" == typeof e.canDrop, "Expected canDrop to be a function."),
            (0, o.default)("function" == typeof e.hover, "Expected hover to be a function."),
            (0, o.default)("function" == typeof e.drop, "Expected beginDrag to be a function.")
        }),
        (t.validateType = function e(t, n) {
          if (n && Array.isArray(t))
            return void t.forEach(function (t) {
              return e(t, !1)
            })
          ;(0, o.default)(
            "string" == typeof t || "symbol" === i(t),
            n
              ? "Type can only be a string, a symbol, or an array of either."
              : "Type can only be a string or a symbol."
          )
        })
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r }
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
    },
    GanS: function (e, t, n) {
      "use strict"
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFunction = function (e) {
          return "function" == typeof e
        }),
        (t.noop = function () {}),
        (t.isPlainObject = function (e) {
          if (
            !(function (e) {
              return "object" === r(e) && null !== e
            })(e)
          )
            return !1
          if (null === Object.getPrototypeOf(e)) return !0
          var t = e
          for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t)
          return Object.getPrototypeOf(e) === t
        })
    },
    GjMU: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>'
    },
    GrOC: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SourceConnector = void 0)
      var r = a(n("U8ip")),
        o = n("sSbr"),
        i = a(n("Gytx"))
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var c = (function () {
        function e(t) {
          var n = this
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.hooks = (0, r.default)({
              dragSource: function (e, t) {
                n.clearDragSource(),
                  (n.dragSourceOptions = t || null),
                  (0, o.isRef)(e) ? (n.dragSourceRef = e) : (n.dragSourceNode = e),
                  n.reconnectDragSource()
              },
              dragPreview: function (e, t) {
                n.clearDragPreview(),
                  (n.dragPreviewOptions = t || null),
                  (0, o.isRef)(e) ? (n.dragPreviewRef = e) : (n.dragPreviewNode = e),
                  n.reconnectDragPreview()
              }
            })),
            (this.handlerId = null),
            (this.dragSourceRef = null),
            (this.dragSourceOptionsInternal = null),
            (this.dragPreviewRef = null),
            (this.dragPreviewOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDragSource = null),
            (this.lastConnectedDragSourceOptions = null),
            (this.lastConnectedDragPreview = null),
            (this.lastConnectedDragPreviewOptions = null),
            (this.backend = t)
        }
        var t, n, a
        return (
          (t = e),
          (n = [
            {
              key: "receiveHandlerId",
              value: function (e) {
                this.handlerId !== e && ((this.handlerId = e), this.reconnect())
              }
            },
            {
              key: "reconnect",
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview()
              }
            },
            {
              key: "reconnectDragSource",
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange()
                t && this.disconnectDragSource(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragSource = e),
                        (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
                        (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                          this.handlerId,
                          e,
                          this.dragSourceOptions
                        )))
                      : (this.lastConnectedDragSource = e))
              }
            },
            {
              key: "reconnectDragPreview",
              value: function () {
                var e = this.dragPreview,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange()
                this.handlerId
                  ? this.dragPreview &&
                    t &&
                    ((this.lastConnectedHandlerId = this.handlerId),
                    (this.lastConnectedDragPreview = e),
                    (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
                    this.disconnectDragPreview(),
                    (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                      this.handlerId,
                      e,
                      this.dragPreviewOptions
                    )))
                  : this.disconnectDragPreview()
              }
            },
            {
              key: "didHandlerIdChange",
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId
              }
            },
            {
              key: "didConnectedDragSourceChange",
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource
              }
            },
            {
              key: "didConnectedDragPreviewChange",
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview
              }
            },
            {
              key: "didDragSourceOptionsChange",
              value: function () {
                return !(0, i.default)(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
              }
            },
            {
              key: "didDragPreviewOptionsChange",
              value: function () {
                return !(0, i.default)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
              }
            },
            {
              key: "disconnectDragSource",
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(), (this.dragSourceUnsubscribe = void 0))
              }
            },
            {
              key: "disconnectDragPreview",
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null))
              }
            },
            {
              key: "clearDragSource",
              value: function () {
                ;(this.dragSourceNode = null), (this.dragSourceRef = null)
              }
            },
            {
              key: "clearDragPreview",
              value: function () {
                ;(this.dragPreviewNode = null), (this.dragPreviewRef = null)
              }
            },
            {
              key: "connectTarget",
              get: function () {
                return this.dragSource
              }
            },
            {
              key: "dragSourceOptions",
              get: function () {
                return this.dragSourceOptionsInternal
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e
              }
            },
            {
              key: "dragPreviewOptions",
              get: function () {
                return this.dragPreviewOptionsInternal
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e
              }
            },
            {
              key: "dragSource",
              get: function () {
                return this.dragSourceNode || (this.dragSourceRef && this.dragSourceRef.current)
              }
            },
            {
              key: "dragPreview",
              get: function () {
                return this.dragPreviewNode || (this.dragPreviewRef && this.dragPreviewRef.current)
              }
            }
          ]) && s(t.prototype, n),
          a && s(t, a),
          e
        )
      })()
      t.SourceConnector = c
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0
        if (void 0 !== o) return !!o
        if (e === t) return !0
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1
        var i = Object.keys(e),
          a = Object.keys(t)
        if (i.length !== a.length) return !1
        for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
          var u = i[c]
          if (!s(u)) return !1
          var l = e[u],
            d = t[u]
          if (!1 === (o = n ? n.call(r, l, d, u) : void 0) || (void 0 === o && l !== d)) return !1
        }
        return !0
      }
    },
    "IEa/": function (e, t, n) {
      "use strict"
      var r = n("FeGr"),
        o = [],
        i = [],
        a = r.makeRequestCallFromTimer(function () {
          if (i.length) throw i.shift()
        })
      function s(e) {
        var t
        ;((t = o.length ? o.pop() : new c()).task = e), r(t)
      }
      function c() {
        this.task = null
      }
      ;(e.exports = s),
        (c.prototype.call = function () {
          try {
            this.task
          } catch (e) {
            s.onerror ? s.onerror(e) : (i.push(e), a())
          } finally {
            ;(this.task = null), (o[o.length] = this)
          }
        })
    },
    ItnF: function (e, t, n) {
      e.exports = { dialog: "dialog-2cMrvu9r", wrapper: "wrapper-2cMrvu9r", separator: "separator-2cMrvu9r" }
    },
    KMov: function (e, t, n) {
      "use strict"
      var r
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptyImage = function () {
          r ||
            ((r = new Image()).src =
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")
          return r
        })
    },
    Kj17: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createDragDropManager = function (e, t, n, r) {
          var i = new o.default(r),
            a = e(i, t, n)
          return i.receiveBackend(a), i
        })
      var r,
        o = (r = n("laIQ")) && r.__esModule ? r : { default: r }
    },
    Lvbb: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = n("iI3E")
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e]
            }
          })
      })
      var o = n("Kj17")
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e]
            }
          })
      })
    },
    NhaM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 11.5v8a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-8m-17 0v-4a1 1 0 0 1 1-1h4l2 2h9a1 1 0 0 1 1 1v2m-17 0h17"/></svg>'
    },
    O5am: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useDrop = function (e) {
          var t = (0, o.useRef)(e)
          ;(t.current = e), (0, i.default)(null != e.accept, "accept must be defined")
          var n =
              ((l = (0, c.useDropTargetMonitor)()),
              (d = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(l) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    "[object Arguments]" === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0
                    try {
                      for (
                        var a, s = e[Symbol.iterator]();
                        !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      ;(o = !0), (i = c)
                    } finally {
                      try {
                        r || null == s.return || s.return()
                      } finally {
                        if (o) throw i
                      }
                    }
                    return n
                  }
                })(l, d) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                })()),
            r = n[0],
            u = n[1]
          var l, d
          ;(0, c.useDropHandler)(t, r, u)
          var f = (0, a.useMonitorOutput)(
              r,
              t.current.collect ||
                function () {
                  return {}
                },
              function () {
                return u.reconnect()
              }
            ),
            h = (0, o.useMemo)(
              function () {
                return u.hooks.dropTarget()
              },
              [u]
            )
          return (
            (0, s.useIsomorphicLayoutEffect)(
              function () {
                ;(u.dropTargetOptions = e.options || null), u.reconnect()
              },
              [e.options]
            ),
            [f, h]
          )
        })
      var r,
        o = n("q1tI"),
        i = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        a = n("6ccc"),
        s = n("7bhs"),
        c = n("S0fd")
    },
    OLLy: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0)
      var r,
        o = (r = n("mIZF")) && r.__esModule ? r : { default: r },
        i = n("zAsM"),
        a = n("mGlc"),
        s = n("Okv0"),
        c = (function (e) {
          if (e && e.__esModule) return e
          var t = l()
          if (t && t.has(e)) return t.get(e)
          var n = {}
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null
                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o])
              }
          }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("DC3H")),
        u = n("bsf8")
      function l() {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (l = function () {
            return e
          }),
          e
        )
      }
      function d(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(n, !0).forEach(function (t) {
                h(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(n).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var g = (function () {
        function e(t, n) {
          var r = this
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.sourceNodes = new Map()),
            (this.sourceNodeOptions = new Map()),
            (this.dragStartSourceIds = null),
            (this.dropTargetIds = []),
            (this.dragEnterTargetIds = []),
            (this.currentNativeSource = null),
            (this.currentNativeHandle = null),
            (this.currentDragSourceNode = null),
            (this.altKeyPressed = !1),
            (this.mouseMoveTimeoutTimer = null),
            (this.asyncEndDragFrameId = null),
            (this.dragOverTargetIds = null),
            (this.getSourceClientOffset = function (e) {
              return (0, a.getNodeClientOffset)(r.sourceNodes.get(e))
            }),
            (this.endDragNativeItem = function () {
              r.isDraggingNativeItem() &&
                (r.actions.endDrag(),
                r.registry.removeSource(r.currentNativeHandle),
                (r.currentNativeHandle = null),
                (r.currentNativeSource = null))
            }),
            (this.isNodeInDocument = function (e) {
              return r.document && r.document.body && document.body.contains(e)
            }),
            (this.endDragIfSourceWasRemovedFromDOM = function () {
              var e = r.currentDragSourceNode
              r.isNodeInDocument(e) || (r.clearCurrentDragSourceNode() && r.actions.endDrag())
            }),
            (this.handleTopDragStartCapture = function () {
              r.clearCurrentDragSourceNode(), (r.dragStartSourceIds = [])
            }),
            (this.handleTopDragStart = function (e) {
              if (!e.defaultPrevented) {
                var t = r.dragStartSourceIds
                r.dragStartSourceIds = null
                var n = (0, a.getEventClientOffset)(e)
                r.monitor.isDragging() && r.actions.endDrag(),
                  r.actions.beginDrag(t || [], {
                    publishSource: !1,
                    getSourceClientOffset: r.getSourceClientOffset,
                    clientOffset: n
                  })
                var o = e.dataTransfer,
                  i = (0, s.matchNativeItemType)(o)
                if (r.monitor.isDragging()) {
                  if (o && "function" == typeof o.setDragImage) {
                    var c = r.monitor.getSourceId(),
                      u = r.sourceNodes.get(c),
                      l = r.sourcePreviewNodes.get(c) || u
                    if (l) {
                      var d = r.getCurrentSourcePreviewNodeOptions(),
                        f = { anchorX: d.anchorX, anchorY: d.anchorY },
                        h = { offsetX: d.offsetX, offsetY: d.offsetY },
                        p = (0, a.getDragPreviewOffset)(u, l, n, f, h)
                      o.setDragImage(l, p.x, p.y)
                    }
                  }
                  try {
                    o.setData("application/json", {})
                  } catch (g) {}
                  r.setCurrentDragSourceNode(e.target),
                    r.getCurrentSourcePreviewNodeOptions().captureDraggingState
                      ? r.actions.publishDragSource()
                      : setTimeout(function () {
                          return r.actions.publishDragSource()
                        }, 0)
                } else if (i) r.beginDragNativeItem(i)
                else {
                  if (
                    o &&
                    !o.types &&
                    ((e.target && !e.target.hasAttribute) || !e.target.hasAttribute("draggable"))
                  )
                    return
                  e.preventDefault()
                }
              }
            }),
            (this.handleTopDragEndCapture = function () {
              r.clearCurrentDragSourceNode() && r.actions.endDrag()
            }),
            (this.handleTopDragEnterCapture = function (e) {
              if (
                ((r.dragEnterTargetIds = []), r.enterLeaveCounter.enter(e.target) && !r.monitor.isDragging())
              ) {
                var t = e.dataTransfer,
                  n = (0, s.matchNativeItemType)(t)
                n && r.beginDragNativeItem(n)
              }
            }),
            (this.handleTopDragEnter = function (e) {
              var t = r.dragEnterTargetIds
              ;((r.dragEnterTargetIds = []), r.monitor.isDragging()) &&
                ((r.altKeyPressed = e.altKey),
                (0, i.isFirefox)() || r.actions.hover(t, { clientOffset: (0, a.getEventClientOffset)(e) }),
                t.some(function (e) {
                  return r.monitor.canDropOnTarget(e)
                }) &&
                  (e.preventDefault(),
                  e.dataTransfer && (e.dataTransfer.dropEffect = r.getCurrentDropEffect())))
            }),
            (this.handleTopDragOverCapture = function () {
              r.dragOverTargetIds = []
            }),
            (this.handleTopDragOver = function (e) {
              var t = r.dragOverTargetIds
              if (((r.dragOverTargetIds = []), !r.monitor.isDragging()))
                return e.preventDefault(), void (e.dataTransfer && (e.dataTransfer.dropEffect = "none"))
              ;(r.altKeyPressed = e.altKey),
                r.actions.hover(t || [], { clientOffset: (0, a.getEventClientOffset)(e) }),
                (t || []).some(function (e) {
                  return r.monitor.canDropOnTarget(e)
                })
                  ? (e.preventDefault(),
                    e.dataTransfer && (e.dataTransfer.dropEffect = r.getCurrentDropEffect()))
                  : r.isDraggingNativeItem()
                  ? e.preventDefault()
                  : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"))
            }),
            (this.handleTopDragLeaveCapture = function (e) {
              r.isDraggingNativeItem() && e.preventDefault(),
                r.enterLeaveCounter.leave(e.target) && r.isDraggingNativeItem() && r.endDragNativeItem()
            }),
            (this.handleTopDropCapture = function (e) {
              ;(r.dropTargetIds = []),
                e.preventDefault(),
                r.isDraggingNativeItem() &&
                  r.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer),
                r.enterLeaveCounter.reset()
            }),
            (this.handleTopDrop = function (e) {
              var t = r.dropTargetIds
              ;(r.dropTargetIds = []),
                r.actions.hover(t, { clientOffset: (0, a.getEventClientOffset)(e) }),
                r.actions.drop({ dropEffect: r.getCurrentDropEffect() }),
                r.isDraggingNativeItem() ? r.endDragNativeItem() : r.endDragIfSourceWasRemovedFromDOM()
            }),
            (this.handleSelectStart = function (e) {
              var t = e.target
              "function" == typeof t.dragDrop &&
                ("INPUT" === t.tagName ||
                  "SELECT" === t.tagName ||
                  "TEXTAREA" === t.tagName ||
                  t.isContentEditable ||
                  (e.preventDefault(), t.dragDrop()))
            }),
            (this.options = new u.OptionsReader(n)),
            (this.actions = t.getActions()),
            (this.monitor = t.getMonitor()),
            (this.registry = t.getRegistry()),
            (this.enterLeaveCounter = new o.default(this.isNodeInDocument))
        }
        var t, n, r
        return (
          (t = e),
          (n = [
            {
              key: "setup",
              value: function () {
                if (void 0 !== this.window) {
                  if (this.window.__isReactDndBackendSetUp)
                    throw new Error("Cannot have two HTML5 backends at the same time.")
                  ;(this.window.__isReactDndBackendSetUp = !0), this.addEventListeners(this.window)
                }
              }
            },
            {
              key: "teardown",
              value: function () {
                void 0 !== this.window &&
                  ((this.window.__isReactDndBackendSetUp = !1),
                  this.removeEventListeners(this.window),
                  this.clearCurrentDragSourceNode(),
                  this.asyncEndDragFrameId && this.window.cancelAnimationFrame(this.asyncEndDragFrameId))
              }
            },
            {
              key: "connectDragPreview",
              value: function (e, t, n) {
                var r = this
                return (
                  this.sourcePreviewNodeOptions.set(e, n),
                  this.sourcePreviewNodes.set(e, t),
                  function () {
                    r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e)
                  }
                )
              }
            },
            {
              key: "connectDragSource",
              value: function (e, t, n) {
                var r = this
                this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n)
                var o = function (t) {
                    return r.handleDragStart(t, e)
                  },
                  i = function (e) {
                    return r.handleSelectStart(e)
                  }
                return (
                  t.setAttribute("draggable", "true"),
                  t.addEventListener("dragstart", o),
                  t.addEventListener("selectstart", i),
                  function () {
                    r.sourceNodes.delete(e),
                      r.sourceNodeOptions.delete(e),
                      t.removeEventListener("dragstart", o),
                      t.removeEventListener("selectstart", i),
                      t.setAttribute("draggable", "false")
                  }
                )
              }
            },
            {
              key: "connectDropTarget",
              value: function (e, t) {
                var n = this,
                  r = function (t) {
                    return n.handleDragEnter(t, e)
                  },
                  o = function (t) {
                    return n.handleDragOver(t, e)
                  },
                  i = function (t) {
                    return n.handleDrop(t, e)
                  }
                return (
                  t.addEventListener("dragenter", r),
                  t.addEventListener("dragover", o),
                  t.addEventListener("drop", i),
                  function () {
                    t.removeEventListener("dragenter", r),
                      t.removeEventListener("dragover", o),
                      t.removeEventListener("drop", i)
                  }
                )
              }
            },
            {
              key: "addEventListeners",
              value: function (e) {
                e.addEventListener &&
                  (e.addEventListener("dragstart", this.handleTopDragStart),
                  e.addEventListener("dragstart", this.handleTopDragStartCapture, !0),
                  e.addEventListener("dragend", this.handleTopDragEndCapture, !0),
                  e.addEventListener("dragenter", this.handleTopDragEnter),
                  e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0),
                  e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0),
                  e.addEventListener("dragover", this.handleTopDragOver),
                  e.addEventListener("dragover", this.handleTopDragOverCapture, !0),
                  e.addEventListener("drop", this.handleTopDrop),
                  e.addEventListener("drop", this.handleTopDropCapture, !0))
              }
            },
            {
              key: "removeEventListeners",
              value: function (e) {
                e.removeEventListener &&
                  (e.removeEventListener("dragstart", this.handleTopDragStart),
                  e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0),
                  e.removeEventListener("dragend", this.handleTopDragEndCapture, !0),
                  e.removeEventListener("dragenter", this.handleTopDragEnter),
                  e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0),
                  e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0),
                  e.removeEventListener("dragover", this.handleTopDragOver),
                  e.removeEventListener("dragover", this.handleTopDragOverCapture, !0),
                  e.removeEventListener("drop", this.handleTopDrop),
                  e.removeEventListener("drop", this.handleTopDropCapture, !0))
              }
            },
            {
              key: "getCurrentSourceNodeOptions",
              value: function () {
                var e = this.monitor.getSourceId(),
                  t = this.sourceNodeOptions.get(e)
                return f({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {})
              }
            },
            {
              key: "getCurrentDropEffect",
              value: function () {
                return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect
              }
            },
            {
              key: "getCurrentSourcePreviewNodeOptions",
              value: function () {
                var e = this.monitor.getSourceId()
                return f(
                  { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                  this.sourcePreviewNodeOptions.get(e) || {}
                )
              }
            },
            {
              key: "isDraggingNativeItem",
              value: function () {
                var e = this.monitor.getItemType()
                return Object.keys(c).some(function (t) {
                  return c[t] === e
                })
              }
            },
            {
              key: "beginDragNativeItem",
              value: function (e) {
                this.clearCurrentDragSourceNode(),
                  (this.currentNativeSource = (0, s.createNativeDragSource)(e)),
                  (this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource)),
                  this.actions.beginDrag([this.currentNativeHandle])
              }
            },
            {
              key: "setCurrentDragSourceNode",
              value: function (e) {
                var t = this
                this.clearCurrentDragSourceNode(),
                  (this.currentDragSourceNode = e),
                  (this.mouseMoveTimeoutTimer = setTimeout(function () {
                    return (
                      t.window &&
                      t.window.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, !0)
                    )
                  }, 1e3))
              }
            },
            {
              key: "clearCurrentDragSourceNode",
              value: function () {
                return (
                  !!this.currentDragSourceNode &&
                  ((this.currentDragSourceNode = null),
                  this.window &&
                    (this.window.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                    this.window.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0)),
                  (this.mouseMoveTimeoutTimer = null),
                  !0)
                )
              }
            },
            {
              key: "handleDragStart",
              value: function (e, t) {
                e.defaultPrevented ||
                  (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                  this.dragStartSourceIds.unshift(t))
              }
            },
            {
              key: "handleDragEnter",
              value: function (e, t) {
                this.dragEnterTargetIds.unshift(t)
              }
            },
            {
              key: "handleDragOver",
              value: function (e, t) {
                null === this.dragOverTargetIds && (this.dragOverTargetIds = []),
                  this.dragOverTargetIds.unshift(t)
              }
            },
            {
              key: "handleDrop",
              value: function (e, t) {
                this.dropTargetIds.unshift(t)
              }
            },
            {
              key: "window",
              get: function () {
                return this.options.window
              }
            },
            {
              key: "document",
              get: function () {
                return this.options.document
              }
            }
          ]) && p(t.prototype, n),
          r && p(t, r),
          e
        )
      })()
      t.default = g
    },
    Okv0: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createNativeDragSource = function (e) {
          return new o.NativeDragSource(r.nativeTypesConfig[e])
        }),
        (t.matchNativeItemType = function (e) {
          if (!e) return null
          var t = Array.prototype.slice.call(e.types || [])
          return (
            Object.keys(r.nativeTypesConfig).filter(function (e) {
              return r.nativeTypesConfig[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1
              })
            })[0] || null
          )
        })
      var r = n("XyX9"),
        o = n("yupZ")
    },
    QLaP: function (e, t, n) {
      "use strict"
      e.exports = function (e, t, n, r, o, i, a, s) {
        if (!e) {
          var c
          if (void 0 === t)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            )
          else {
            var u = [n, r, o, i, a, s],
              l = 0
            ;(c = new Error(
              t.replace(/%s/g, function () {
                return u[l++]
              })
            )).name = "Invariant Violation"
          }
          throw ((c.framesToPop = 1), c)
        }
      }
    },
    "R4+T": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
    },
    "Rvb+": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t = e.getMonitor(),
              n = e.getRegistry()
            !(function (e) {
              ;(0, o.default)(e.isDragging(), "Cannot call endDrag while not dragging.")
            })(t)
            var r = t.getSourceId()
            return n.getSource(r, !0).endDrag(t, r), n.unpinSource(), { type: i.END_DRAG }
          }
        })
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        i = n("/yIc")
    },
    S0fd: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useDropTargetMonitor = function () {
          var e = (0, i.useDragDropManager)(),
            t = (0, r.useMemo)(
              function () {
                return new s.DropTargetMonitorImpl(e)
              },
              [e]
            ),
            n = (0, r.useMemo)(
              function () {
                return new a.TargetConnector(e.getBackend())
              },
              [e]
            )
          return [t, n]
        }),
        (t.useDropHandler = function (e, t, n) {
          var a = (0, i.useDragDropManager)(),
            s = (0, r.useMemo)(
              function () {
                return {
                  canDrop: function () {
                    var n = e.current.canDrop
                    return !n || n(t.getItem(), t)
                  },
                  hover: function () {
                    var n = e.current.hover
                    n && n(t.getItem(), t)
                  },
                  drop: function () {
                    var n = e.current.drop
                    if (n) return n(t.getItem(), t)
                  }
                }
              },
              [t]
            )
          ;(0, c.useIsomorphicLayoutEffect)(
            function () {
              var r,
                i,
                c = (0, o.registerTarget)(e.current.accept, s, a),
                u =
                  ((i = 2),
                  (function (e) {
                    if (Array.isArray(e)) return e
                  })((r = c)) ||
                    (function (e, t) {
                      if (
                        Symbol.iterator in Object(e) ||
                        "[object Arguments]" === Object.prototype.toString.call(e)
                      ) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0
                        try {
                          for (
                            var a, s = e[Symbol.iterator]();
                            !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                            r = !0
                          );
                        } catch (c) {
                          ;(o = !0), (i = c)
                        } finally {
                          try {
                            r || null == s.return || s.return()
                          } finally {
                            if (o) throw i
                          }
                        }
                        return n
                      }
                    })(r, i) ||
                    (function () {
                      throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    })()),
                l = u[0],
                d = u[1]
              return t.receiveHandlerId(l), n.receiveHandlerId(l), d
            },
            [t, n]
          )
        })
      var r = n("q1tI"),
        o = n("lAcH"),
        i = n("gArw"),
        a = n("Tw7s"),
        s = n("z3uI"),
        c = n("7bhs")
    },
    "T+8Q": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DragSourceMonitorImpl = void 0)
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var a = !1,
        s = !1,
        c = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e),
              (this.sourceId = null),
              (this.internalMonitor = t.getMonitor())
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.sourceId = e
                }
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.sourceId
                }
              },
              {
                key: "canDrag",
                value: function () {
                  ;(0, o.default)(
                    !a,
                    "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
                  )
                  try {
                    return (a = !0), this.internalMonitor.canDragSource(this.sourceId)
                  } finally {
                    a = !1
                  }
                }
              },
              {
                key: "isDragging",
                value: function () {
                  if (!this.sourceId) return !1
                  ;(0, o.default)(
                    !s,
                    "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
                  )
                  try {
                    return (s = !0), this.internalMonitor.isDraggingSource(this.sourceId)
                  } finally {
                    s = !1
                  }
                }
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t)
                }
              },
              {
                key: "isDraggingSource",
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e)
                }
              },
              {
                key: "isOverTarget",
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t)
                }
              },
              {
                key: "getTargetIds",
                value: function () {
                  return this.internalMonitor.getTargetIds()
                }
              },
              {
                key: "isSourcePublic",
                value: function () {
                  return this.internalMonitor.isSourcePublic()
                }
              },
              {
                key: "getSourceId",
                value: function () {
                  return this.internalMonitor.getSourceId()
                }
              },
              {
                key: "subscribeToOffsetChange",
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e)
                }
              },
              {
                key: "canDragSource",
                value: function (e) {
                  return this.internalMonitor.canDragSource(e)
                }
              },
              {
                key: "canDropOnTarget",
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e)
                }
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType()
                }
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem()
                }
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult()
                }
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop()
                }
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset()
                }
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset()
                }
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset()
                }
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset()
                }
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset()
                }
              }
            ]) && i(t.prototype, n),
            r && i(t, r),
            e
          )
        })()
      t.DragSourceMonitorImpl = c
    },
    TF3m: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return (
            Object.keys(e).forEach(function (t) {
              ;(0, o.default)(
                s.indexOf(t) > -1,
                'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                s.join(", "),
                t
              ),
                (0, o.default)(
                  "function" == typeof e[t],
                  "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
                  t,
                  t,
                  e[t]
                )
            }),
            c.forEach(function (t) {
              ;(0,
              o.default)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t])
            }),
            function (t, n) {
              return new u(e, t, n)
            }
          )
        })
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        i = (n("GanS"), n("aDaG"))
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var s = ["canDrag", "beginDrag", "isDragging", "endDrag"],
        c = ["beginDrag"],
        u = (function () {
          function e(t, n, r) {
            var o = this
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e),
              (this.props = null),
              (this.beginDrag = function () {
                if (o.props) return o.spec.beginDrag(o.props, o.monitor, o.ref.current)
              }),
              (this.spec = t),
              (this.monitor = n),
              (this.ref = r)
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: "receiveProps",
                value: function (e) {
                  this.props = e
                }
              },
              {
                key: "canDrag",
                value: function () {
                  return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor))
                }
              },
              {
                key: "isDragging",
                value: function (e, t) {
                  return (
                    !!this.props &&
                    (this.spec.isDragging
                      ? this.spec.isDragging(this.props, this.monitor)
                      : t === e.getSourceId())
                  )
                }
              },
              {
                key: "endDrag",
                value: function () {
                  this.props &&
                    this.spec.endDrag &&
                    this.spec.endDrag(this.props, this.monitor, (0, i.getDecoratedComponent)(this.ref))
                }
              }
            ]) && a(t.prototype, n),
            r && a(t, r),
            e
          )
        })()
    },
    TM5I: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          return r++
        })
      var r = 0
    },
    TNeT: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = n("vkAp")
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e]
            }
          })
      })
      var o = n("yfz3")
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e]
            }
          })
      })
      var i = n("Def4")
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e]
            }
          })
      })
    },
    Tw7s: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.TargetConnector = void 0)
      var r = a(n("Gytx")),
        o = a(n("U8ip")),
        i = n("sSbr")
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var c = (function () {
        function e(t) {
          var n = this
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.hooks = (0, o.default)({
              dropTarget: function (e, t) {
                n.clearDropTarget(),
                  (n.dropTargetOptions = t),
                  (0, i.isRef)(e) ? (n.dropTargetRef = e) : (n.dropTargetNode = e),
                  n.reconnect()
              }
            })),
            (this.handlerId = null),
            (this.dropTargetRef = null),
            (this.dropTargetOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDropTarget = null),
            (this.lastConnectedDropTargetOptions = null),
            (this.backend = t)
        }
        var t, n, a
        return (
          (t = e),
          (n = [
            {
              key: "reconnect",
              value: function () {
                var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange()
                e && this.disconnectDropTarget()
                var t = this.dropTarget
                this.handlerId &&
                  (t
                    ? e &&
                      ((this.lastConnectedHandlerId = this.handlerId),
                      (this.lastConnectedDropTarget = t),
                      (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                      (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                        this.handlerId,
                        t,
                        this.dropTargetOptions
                      )))
                    : (this.lastConnectedDropTarget = t))
              }
            },
            {
              key: "receiveHandlerId",
              value: function (e) {
                e !== this.handlerId && ((this.handlerId = e), this.reconnect())
              }
            },
            {
              key: "didHandlerIdChange",
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId
              }
            },
            {
              key: "didDropTargetChange",
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget
              }
            },
            {
              key: "didOptionsChange",
              value: function () {
                return !(0, r.default)(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
              }
            },
            {
              key: "disconnectDropTarget",
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0))
              }
            },
            {
              key: "clearDropTarget",
              value: function () {
                ;(this.dropTargetRef = null), (this.dropTargetNode = null)
              }
            },
            {
              key: "connectTarget",
              get: function () {
                return this.dropTarget
              }
            },
            {
              key: "dropTargetOptions",
              get: function () {
                return this.dropTargetOptionsInternal
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e
              }
            },
            {
              key: "dropTarget",
              get: function () {
                return this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current)
              }
            }
          ]) && s(t.prototype, n),
          a && s(t, a),
          e
        )
      })()
      t.TargetConnector = c
    },
    "U+QY": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.692 3.012l-12 12.277.715.699 12-12.277-.715-.699zM9.05 15.627a7.042 7.042 0 0 1-3.144-.741l.742-.76c.72.311 1.52.5 2.402.5 2.297 0 4.047-1.29 5.25-2.645a12.168 12.168 0 0 0 1.687-2.466l.007-.015-.007-.015A12.166 12.166 0 0 0 14.3 7.019c-.11-.124-.225-.247-.344-.37l.699-.715c.137.14.268.28.392.42a13.16 13.16 0 0 1 1.83 2.678 8.117 8.117 0 0 1 .119.243l.006.015.003.005v.001l-.456.204.456.203v.002l-.003.005-.006.015-.025.052a11.762 11.762 0 0 1-.461.857 13.158 13.158 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982zm7.5-6.127l.456-.203.09.203-.09.203-.456-.203zm-7.5 3.07c-.27 0-.53-.037-.778-.105l.879-.899c.999-.052 1.833-.872 1.895-1.938l.902-.923c.066.253.102.52.102.795 0 1.695-1.344 3.07-3 3.07zM6.15 10.294l.902-.923c.063-1.066.896-1.886 1.895-1.938l.879-.9a2.94 2.94 0 0 0-.777-.103c-1.657 0-3 1.374-3 3.069 0 .275.035.541.101.795zM9.05 4.373c.88 0 1.68.19 2.4.5l.743-.759a7.043 7.043 0 0 0-3.143-.74c-2.703 0-4.703 1.521-6 2.98a13.159 13.159 0 0 0-1.83 2.678 7.886 7.886 0 0 0-.118.243l-.007.015-.002.005v.001l.456.204-.457-.203-.09.203.09.203.457-.203-.456.203v.002l.002.005.007.015a4.5 4.5 0 0 0 .119.243 13.152 13.152 0 0 0 1.83 2.677c.124.14.255.28.392.42l.7-.715c-.12-.122-.235-.245-.345-.369a12.156 12.156 0 0 1-1.686-2.466L2.105 9.5l.007-.015a12.158 12.158 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373z"/></svg>'
    },
    U8ip: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = {}
          return (
            Object.keys(e).forEach(function (n) {
              var a = e[n]
              if (n.endsWith("Ref")) t[n] = e[n]
              else {
                var s = (function (e) {
                  return function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                    if (!(0, r.isValidElement)(t)) {
                      var a = t
                      return e(a, n), a
                    }
                    var s = t
                    i(s)
                    var c = n
                      ? function (t) {
                          return e(t, n)
                        }
                      : e
                    return (0, o.cloneWithRef)(s, c)
                  }
                })(a)
                t[n] = function () {
                  return s
                }
              }
            }),
            t
          )
        })
      var r = n("q1tI"),
        o = n("AmWu")
      function i(e) {
        if ("string" != typeof e.type) {
          var t = e.type.displayName || e.type.name || "the component"
          throw new Error(
            "Only native element nodes can now be passed to React DnD connectors." +
              "You can either wrap ".concat(t, " into a <div>, or turn it into a ") +
              "drag source or a drop target itself."
          )
        }
      }
    },
    Ux4w: function (e, t, n) {
      "use strict"
      function r() {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (r = function () {
            return e
          }),
          e
        )
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DragPreviewImage = void 0)
      var o = (function (e) {
        if (e && e.__esModule) return e
        var t = r()
        if (t && t.has(e)) return t.get(e)
        var n = {}
        if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null
              a && (a.get || a.set) ? Object.defineProperty(n, i, a) : (n[i] = e[i])
            }
        }
        ;(n.default = e), t && t.set(e, n)
        return n
      })(n("q1tI")).memo(function (e) {
        var t = e.connect,
          n = e.src
        if ("undefined" != typeof Image) {
          var r = new Image()
          ;(r.src = n),
            (r.onload = function () {
              return t(r)
            })
        }
        return null
      })
      ;(t.DragPreviewImage = o), (o.displayName = "DragPreviewImage")
    },
    Uyss: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addSource = function (e) {
          return { type: "dnd-core/ADD_SOURCE", payload: { sourceId: e } }
        }),
        (t.addTarget = function (e) {
          return { type: "dnd-core/ADD_TARGET", payload: { targetId: e } }
        }),
        (t.removeSource = function (e) {
          return { type: "dnd-core/REMOVE_SOURCE", payload: { sourceId: e } }
        }),
        (t.removeTarget = function (e) {
          return { type: "dnd-core/REMOVE_TARGET", payload: { targetId: e } }
        }),
        (t.REMOVE_TARGET = t.REMOVE_SOURCE = t.ADD_TARGET = t.ADD_SOURCE = void 0)
      t.ADD_SOURCE = "dnd-core/ADD_SOURCE"
      t.ADD_TARGET = "dnd-core/ADD_TARGET"
      t.REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE"
      t.REMOVE_TARGET = "dnd-core/REMOVE_TARGET"
    },
    UzDk: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return e + 1
        })
    },
    Vbka: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 12.5l4.59-4.59a2 2 0 0 1 2.83 0l3.17 3.17a2 2 0 0 0 2.83 0L22.5 6.5m-8 9.5v5.5M12 19l2.5 2.5L17 19m4.5 3v-5.5M19 19l2.5-2.5L24 19"/></svg>'
    },
    WcWV: function (e, t, n) {
      e.exports = { button: "button-2zRC9WmY", disabled: "disabled-2zRC9WmY" }
    },
    XiJV: function (e, t, n) {
      e.exports = { separator: "separator-3No0pWrk" }
    },
    XyX9: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.nativeTypesConfig = void 0)
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e
          var t = a()
          if (t && t.has(e)) return t.get(e)
          var n = {}
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null
                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o])
              }
          }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("DC3H")),
        i = n("uwyp")
      function a() {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (a = function () {
            return e
          }),
          e
        )
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var c =
        (s((r = {}), o.FILE, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files)
            },
            items: function (e) {
              return e.items
            }
          },
          matchesTypes: ["Files"]
        }),
        s(r, o.URL, {
          exposeProperties: {
            urls: function (e, t) {
              return (0, i.getDataFromDataTransfer)(e, t, "").split("\n")
            }
          },
          matchesTypes: ["Url", "text/uri-list"]
        }),
        s(r, o.TEXT, {
          exposeProperties: {
            text: function (e, t) {
              return (0, i.getDataFromDataTransfer)(e, t, "")
            }
          },
          matchesTypes: ["Text", "text/plain"]
        }),
        r)
      t.nativeTypesConfig = c
    },
    Y4Oj: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = n("vjmV")
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e]
            }
          })
      })
      var o = n("8nTA")
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e]
            }
          })
      })
      var i = n("TNeT")
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e]
            }
          })
      })
    },
    Z3xJ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M21.106 12.5H6.894a.5.5 0 0 1-.318-.886L14 5.5l7.424 6.114a.5.5 0 0 1-.318.886zM21.106 16.5H6.894a.5.5 0 0 0-.318.886L14 23.5l7.424-6.114a.5.5 0 0 0-.318-.886z"/></svg>'
    },
    ZzwE: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areCoordsEqual = function (e, t) {
          return (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y)
        }),
        (t.areArraysEqual = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r
          if (e.length !== t.length) return !1
          for (var o = 0; o < e.length; ++o) if (!n(e[o], t[o])) return !1
          return !0
        }),
        (t.strictEquality = void 0)
      var r = function (e, t) {
        return e === t
      }
      t.strictEquality = r
    },
    aDaG: function (e, t, n) {
      "use strict"
      function r(e) {
        return e && e.prototype && "function" == typeof e.prototype.render
      }
      function o(e) {
        return e && e.$$typeof && "Symbol(react.forward_ref)" === e.$$typeof.toString()
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDecoratedComponent = function (e) {
          var t = e.current
          return null == t ? null : t.decoratedRef ? t.decoratedRef.current : t
        }),
        (t.isClassComponent = r),
        (t.isRefForwardingComponent = o),
        (t.isRefable = function (e) {
          return r(e) || o(e)
        }),
        (t.checkDecoratorArguments = function (e, t) {
          0
        })
    },
    "ae+E": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.memoize = function (e) {
          var t = null
          return function () {
            return null == t && (t = e()), t
          }
        }),
        (t.without = function (e, t) {
          return e.filter(function (e) {
            return e !== t
          })
        }),
        (t.union = function (e, t) {
          var n = new Set(),
            r = function (e) {
              return n.add(e)
            }
          e.forEach(r), t.forEach(r)
          var o = []
          return (
            n.forEach(function (e) {
              return o.push(e)
            }),
            o
          )
        })
    },
    b4AZ: function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return y
      })
      var r = n("q1tI"),
        o = n("Eyy1"),
        i = n("Iivm"),
        a = n("zM7N"),
        s = n("oiZD"),
        c = n("YFKU"),
        u = n("txPx"),
        l = n("CW80"),
        d = n("gM3K"),
        f = n("ogJP"),
        h = n("jPOK"),
        p = n("leHx"),
        g = n("rlH3"),
        v = n("x5pF")
      const b = (e) =>
        Object(c.t)("{drawingsCount} drawing", { plural: "{drawingsCount} drawings", count: e }).format({
          drawingsCount: e.toString()
        })
      Object(u.getLogger)("Chart.ManageDrawings")
      class y extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._totalCount = 0),
            (this._model = null),
            (this._symbolDrawingsMap = null),
            (this._storageContent = null),
            (this._storageContentLoadingPromise = null),
            (this._onItemClick = (e) => {
              this.props.chartWidget.setSymbol(e),
                null !== this._model && this.setState({ currentSymbol: e }),
                this.props.onClose && this.props.onClose()
            }),
            (this._onRemove = async (e) => {
              if (this._model && this._symbolDrawingsMap) {
                const t = Object(c.t)("Remove all line tools for ") + e,
                  n = this._symbolDrawingsMap.get(e)
                if (n) {
                  const e = Array.from(n)
                    .map((e) => Object(o.ensureNotNull)(this._model).model().dataSourceForId(e))
                    .filter(f.notNull)
                  this._model.removeSources(e, !1, t), this._updateItems()
                }
              }
            }),
            (this._updateItems = async () => {
              if (null !== this._model) {
                const e = await this._getItems(this._model.model().dataSources())
                this.setState({ items: e })
              }
            }),
            (this._updateTheme = () => {
              const e = s.watchedTheme.value()
              this.setState({ theme: e })
            }),
            (this.state = { currentSymbol: null, items: null, theme: s.watchedTheme.value() })
        }
        componentDidMount() {
          this.props.chartWidget.withModel(this, async () => {
            ;(this._model = this.props.chartWidget.model()),
              this._model.model().dataSourceCollectionChanged().subscribe(this, this._updateItems)
            const e = await this._getItems(this._model.model().dataSources())
            this.setState({ currentSymbol: this._model.mainSeries().symbol(), items: e }, () => {
              var e, t
              return null === (t = (e = this.props).onInitialized) || void 0 === t ? void 0 : t.call(e)
            })
          }),
            s.watchedTheme.subscribe(this._updateTheme)
        }
        componentWillUnmount() {
          s.watchedTheme.unsubscribe(this._updateTheme),
            null !== this._model &&
              this._model.model().dataSourceCollectionChanged().unsubscribe(this, this._updateItems)
        }
        render() {
          const { isMobile: e } = this.props,
            { currentSymbol: t, items: n } = this.state,
            o = this._symbolDrawingsMap ? this._symbolDrawingsMap.size : 0,
            i = `${
              ((a = o),
              Object(c.t)("{symbolsCount} symbol", {
                plural: "{symbolsCount} symbols",
                context: "symbols_and_drawings_count",
                count: a
              }).format({ symbolsCount: a.toString() }))
            } ${((e) =>
              Object(c.t)("with {drawingsCount} drawing", {
                plural: "with {drawingsCount} drawings",
                context: "symbols_and_drawings_count",
                count: e
              }).format({ drawingsCount: e.toString() }))(this._totalCount)}`
          var a
          return r.createElement(
            r.Fragment,
            null,
            null === this._storageContent ? null : r.createElement("div", { className: v.title }, i),
            null === n || 0 === n.length
              ? this._renderEmptyContent()
              : n.map((n) =>
                  r.createElement(d.a, {
                    key: n.symbol,
                    title: n.symbol,
                    subtitle: b(n.drawingsCount),
                    removeBtnLabel: Object(c.t)("Remove all drawings for this symbol"),
                    isActive: n.symbol === t,
                    isMobile: e,
                    onClick: this._onItemClick.bind(this, n.symbol),
                    onClickRemove: this._onRemove.bind(this, n.symbol),
                    showFavorite: !1
                  })
                )
          )
        }
        _renderEmptyContent() {
          const { theme: e } = this.state,
            t = e === a.a.Dark ? g : p
          return null === this._storageContent
            ? r.createElement(h.a, null)
            : r.createElement(
                "div",
                { className: v.empty },
                r.createElement(i.a, { className: v.image, icon: t }),
                r.createElement("span", null, Object(c.t)("No drawings yet"))
              )
        }
        async _getStorageContent() {
          return new Map()
        }
        async _getItems(e) {
          const t = [],
            n = this._getSymbolDrawingsMap(e)
          return (
            (await this._getStorageContent()).forEach((e, t) => {
              const r = n.get(t) || new Set()
              e.forEach((e) => r.add(e)), n.set(t, r)
            }),
            (this._symbolDrawingsMap = n),
            (this._totalCount = 0),
            this._symbolDrawingsMap.forEach((e, n) => {
              t.push({ symbol: n, drawingsCount: e.size }), (this._totalCount = this._totalCount + e.size)
            }),
            t.sort((e, t) =>
              e.drawingsCount === t.drawingsCount
                ? e.symbol.localeCompare(t.symbol)
                : e.drawingsCount > t.drawingsCount
                ? -1
                : 1
            )
          )
        }
        _getSymbolDrawingsMap(e) {
          const t = new Map()
          return (
            e.forEach((e) => {
              if (Object(l.isLineTool)(e) && e.showInObjectTree()) {
                const n = t.get(e.symbol()) || new Set()
                n.add(e.id()), t.set(e.symbol(), n)
              }
            }),
            t
          )
        }
      }
    },
    bsf8: function (e, t, n) {
      "use strict"
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.OptionsReader = void 0)
      var o = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.globalContext = t)
        }
        var t, n, o
        return (
          (t = e),
          (n = [
            {
              key: "window",
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : "undefined" != typeof window
                  ? window
                  : void 0
              }
            },
            {
              key: "document",
              get: function () {
                if (this.window) return this.window.document
              }
            }
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        )
      })()
      t.OptionsReader = o
    },
    cSMM: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useDragLayer = function (e) {
          var t = (0, o.useDragDropManager)().getMonitor(),
            n =
              ((c = (0, i.useCollector)(t, e)),
              (u = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(c) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    "[object Arguments]" === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0
                    try {
                      for (
                        var a, s = e[Symbol.iterator]();
                        !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      ;(o = !0), (i = c)
                    } finally {
                      try {
                        r || null == s.return || s.return()
                      } finally {
                        if (o) throw i
                      }
                    }
                    return n
                  }
                })(c, u) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                })()),
            a = n[0],
            s = n[1]
          var c, u
          return (
            (0, r.useEffect)(function () {
              return t.subscribeToOffsetChange(s)
            }),
            (0, r.useEffect)(function () {
              return t.subscribeToStateChange(s)
            }),
            a
          )
        })
      var r = n("q1tI"),
        o = n("gArw"),
        i = n("84ty")
    },
    co4r: function (e, t, n) {
      e.exports = {
        wrap: "wrap-1a1_EyKG",
        selected: "selected-1a1_EyKG",
        childOfSelected: "childOfSelected-1a1_EyKG",
        disabled: "disabled-1a1_EyKG",
        expandHandle: "expandHandle-1a1_EyKG",
        expanded: "expanded-1a1_EyKG"
      }
    },
    dDxv: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>'
    },
    e7Vy: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setClientOffset = function (e, t) {
          return { type: r.INIT_COORDS, payload: { sourceClientOffset: t || null, clientOffset: e || null } }
        })
      var r = n("/yIc")
    },
    evKi: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { publishSource: !0 },
              r = n.publishSource,
              o = void 0 === r || r,
              a = n.clientOffset,
              h = n.getSourceClientOffset,
              p = e.getMonitor(),
              g = e.getRegistry()
            e.dispatch((0, i.setClientOffset)(a)), u(t, p, g)
            var v = f(t, p)
            if (null !== v) {
              var b = null
              a && (l(h), (b = h(v))), e.dispatch((0, i.setClientOffset)(a, b))
              var y = g.getSource(v),
                m = y.beginDrag(p, v)
              d(m), g.pinSource(v)
              var O = g.getSourceType(v)
              return {
                type: s.BEGIN_DRAG,
                payload: {
                  itemType: O,
                  item: m,
                  sourceId: v,
                  clientOffset: a || null,
                  sourceClientOffset: b || null,
                  isSourcePublic: !!o
                }
              }
            }
            e.dispatch(c)
          }
        })
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        i = n("e7Vy"),
        a = n("rTKX"),
        s = n("/yIc")
      var c = { type: s.INIT_COORDS, payload: { clientOffset: null, sourceClientOffset: null } }
      function u(e, t, n) {
        ;(0, o.default)(!t.isDragging(), "Cannot call beginDrag while dragging."),
          e.forEach(function (e) {
            ;(0, o.default)(n.getSource(e), "Expected sourceIds to be registered.")
          })
      }
      function l(e) {
        ;(0, o.default)(
          "function" == typeof e,
          "When clientOffset is provided, getSourceClientOffset must be a function."
        )
      }
      function d(e) {
        ;(0, o.default)((0, a.isObject)(e), "Item must be an object.")
      }
      function f(e, t) {
        for (var n = null, r = e.length - 1; r >= 0; r--)
          if (t.canDragSource(e[r])) {
            n = e[r]
            break
          }
        return n
      }
    },
    fZSZ: function (e, t, n) {
      "use strict"
      ;(function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DndProvider = void 0)
        var r = (function (e) {
            if (e && e.__esModule) return e
            var t = i()
            if (t && t.has(e)) return t.get(e)
            var n = {}
            if (null != e) {
              var r = Object.defineProperty && Object.getOwnPropertyDescriptor
              for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = r ? Object.getOwnPropertyDescriptor(e, o) : null
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o])
                }
            }
            ;(n.default = e), t && t.set(e, n)
            return n
          })(n("q1tI")),
          o = n("8QtF")
        function i() {
          if ("function" != typeof WeakMap) return null
          var e = new WeakMap()
          return (
            (i = function () {
              return e
            }),
            e
          )
        }
        function a(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              if (
                !(Symbol.iterator in Object(e)) &&
                "[object Arguments]" !== Object.prototype.toString.call(e)
              )
                return
              var n = [],
                r = !0,
                o = !1,
                i = void 0
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (c) {
                ;(o = !0), (i = c)
              } finally {
                try {
                  r || null == s.return || s.return()
                } finally {
                  if (o) throw i
                }
              }
              return n
            })(e, t) ||
            (function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
          )
        }
        function s(e, t) {
          if (null == e) return {}
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {}
              var n,
                r,
                o = {},
                i = Object.keys(e)
              for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
              return o
            })(e, t)
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
          }
          return o
        }
        var c = 0,
          u = (0, r.memo)(function (e) {
            var t = e.children,
              n = a(
                (function (e) {
                  if ("manager" in e) {
                    return [{ dragDropManager: e.manager }, !1]
                  }
                  var t = (function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = t
                      i[l] || (i[l] = (0, o.createDndContext)(e, t, n, r))
                      return i[l]
                    })(e.backend, e.context, e.options, e.debugMode),
                    n = !e.context
                  return [t, n]
                })(s(e, ["children"])),
                2
              ),
              i = n[0],
              u = n[1]
            return (
              r.useEffect(function () {
                return (
                  u && c++,
                  function () {
                    u && 0 === --c && (d()[l] = null)
                  }
                )
              }, []),
              r.createElement(o.DndContext.Provider, { value: i }, t)
            )
          })
        ;(t.DndProvider = u), (u.displayName = "DndProvider")
        var l = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__")
        function d() {
          return void 0 !== e ? e : window
        }
      }.call(this, n("yLpj")))
    },
    ffaL: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.605 14.089A10.052 10.052 0 0 1 4.56 14l.046-.089a17.18 17.18 0 0 1 2.329-3.327C8.58 8.758 10.954 7 14 7c3.046 0 5.421 1.757 7.066 3.585A17.18 17.18 0 0 1 23.44 14l-.046.089a17.18 17.18 0 0 1-2.329 3.327C19.42 19.242 17.046 21 14 21c-3.046 0-5.421-1.757-7.066-3.584a17.18 17.18 0 0 1-2.329-3.327zm19.848-.3L24 14l.453.212-.001.002-.003.005-.009.02a16.32 16.32 0 0 1-.662 1.195c-.44.72-1.1 1.684-1.969 2.65C20.08 20.008 17.454 22 14 22c-3.454 0-6.079-1.993-7.81-3.916a18.185 18.185 0 0 1-2.469-3.528 10.636 10.636 0 0 1-.161-.318l-.01-.019-.002-.005v-.002L4 14a55.06 55.06 0 0 1-.453-.212l.001-.002.003-.005.009-.02.033-.067a16.293 16.293 0 0 1 .629-1.126c.44-.723 1.1-1.686 1.969-2.652C7.92 7.993 10.546 6 14 6c3.454 0 6.079 1.993 7.81 3.916a18.183 18.183 0 0 1 2.469 3.528 10.588 10.588 0 0 1 .161.318l.01.019.002.005v.002zM24 14l.453-.211.099.211-.099.211L24 14zm-20.453-.211L4 14l-.453.211L3.448 14l.099-.211zM11 14a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>'
    },
    g89m: function (e, t, n) {
      "use strict"
      var r = n("q1tI"),
        o = n.n(r),
        i = n("Eyy1"),
        a = n("TSYQ"),
        s = n.n(a),
        c = n("/3z9"),
        u = n("d700"),
        l = n("WXjp"),
        d = n("02pg"),
        f = n("uhCe"),
        h = n("/KDZ"),
        p = n("pafz"),
        g = n("ZjKI"),
        v = n("FQhm"),
        b = n("Iivm")
      const y = o.a.createContext({ setHideClose: () => {} })
      var m = n("zztK"),
        O = n("px1m")
      function _(e) {
        const {
            title: t,
            subtitle: n,
            showCloseIcon: i = !0,
            onClose: a,
            renderBefore: c,
            renderAfter: u,
            draggable: l,
            className: d
          } = e,
          [f, h] = Object(r.useState)(!1)
        return o.a.createElement(
          y.Provider,
          { value: { setHideClose: h } },
          o.a.createElement(
            "div",
            { className: s()(O.container, d, n && O.unsetAlign) },
            c,
            o.a.createElement(
              "div",
              { "data-dragg-area": l, className: O.title },
              o.a.createElement("div", { className: O.ellipsis }, t),
              n && o.a.createElement("div", { className: s()(O.ellipsis, O.subtitle) }, n)
            ),
            u,
            i &&
              !f &&
              o.a.createElement(b.a, {
                className: O.close,
                icon: m,
                onClick: a,
                "data-name": "close",
                "data-role": "button"
              })
          )
        )
      }
      var S = n("ItnF")
      n.d(t, "a", function () {
        return T
      })
      const w = { vertical: 20 },
        D = { vertical: 0 }
      class T extends o.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._controller = null),
            (this._reference = null),
            (this._renderChildren = (e, t) => (
              (this._controller = e),
              this.props.render({
                requestResize: this._requestResize,
                centerAndFit: this._centerAndFit,
                isSmallWidth: t
              })
            )),
            (this._handleReference = (e) => (this._reference = e)),
            (this._handleClose = () => {
              this.props.onClose()
            }),
            (this._handleKeyDown = (e) => {
              var t
              if (!e.defaultPrevented)
                switch ((this.props.onKeyDown && this.props.onKeyDown(e), Object(c.hashFromEvent)(e))) {
                  case 27:
                    if (e.defaultPrevented) return
                    if (this.props.forceCloseOnEsc && this.props.forceCloseOnEsc())
                      return void this._handleClose()
                    const { activeElement: n } = document,
                      r = Object(i.ensureNotNull)(this._reference)
                    if (null !== n) {
                      if (
                        (e.preventDefault(),
                        "true" === (t = n).getAttribute("data-haspopup") &&
                          "true" !== t.getAttribute("data-expanded"))
                      )
                        return void this._handleClose()
                      if (Object(u.b)(n)) return void r.focus()
                      if (r.contains(n)) return void this._handleClose()
                    }
                }
            }),
            (this._requestResize = () => {
              null !== this._controller && this._controller.recalculateBounds()
            }),
            (this._centerAndFit = () => {
              null !== this._controller && this._controller.centerAndFit()
            })
        }
        componentDidMount() {
          v.subscribe(g.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null)
        }
        componentWillUnmount() {
          v.unsubscribe(g.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._handleClose, null)
        }
        focus() {
          Object(i.ensureNotNull)(this._reference).focus()
        }
        getElement() {
          return this._reference
        }
        contains(e) {
          var t, n
          return (
            null !== (n = null === (t = this._reference) || void 0 === t ? void 0 : t.contains(e)) &&
            void 0 !== n &&
            n
          )
        }
        render() {
          const {
              className: e,
              headerClassName: t,
              isOpened: n,
              title: r,
              dataName: i,
              onClickOutside: a,
              additionalElementPos: c,
              additionalHeaderElement: u,
              backdrop: g,
              shouldForceFocus: v = !0,
              showSeparator: b,
              subtitle: y,
              draggable: m = !0,
              fullScreen: O = !1,
              showCloseIcon: T = !0,
              rounded: j = !0,
              isAnimationEnabled: C,
              growPoint: E,
              dialogTooltip: M
            } = this.props,
            I = "after" !== c ? u : void 0,
            P = "after" === c ? u : void 0
          return o.a.createElement(h.a, { rule: f.a.SmallHeight }, (c) =>
            o.a.createElement(h.a, { rule: f.a.TabletSmall }, (u) =>
              o.a.createElement(
                l.a,
                {
                  rounded: !(u || O) && j,
                  className: s()(S.dialog, e),
                  isOpened: n,
                  reference: this._handleReference,
                  onKeyDown: this._handleKeyDown,
                  onClickOutside: a,
                  onClickBackdrop: a,
                  fullscreen: u || O,
                  guard: c ? D : w,
                  boundByScreen: u || O,
                  shouldForceFocus: v,
                  backdrop: g,
                  draggable: m,
                  isAnimationEnabled: C,
                  growPoint: E,
                  name: this.props.dataName,
                  dialogTooltip: M
                },
                o.a.createElement(
                  "div",
                  { className: S.wrapper, "data-name": i, "data-dialog-name": "string" == typeof r ? r : "" },
                  void 0 !== r &&
                    o.a.createElement(_, {
                      draggable: m && !(u || O),
                      onClose: this._handleClose,
                      renderAfter: P,
                      renderBefore: I,
                      subtitle: y,
                      title: r,
                      showCloseIcon: T,
                      className: t
                    }),
                  b && o.a.createElement(d.a, { className: S.separator }),
                  o.a.createElement(p.a.Consumer, null, (e) => this._renderChildren(e, u || O))
                )
              )
            )
          )
        }
      }
    },
    gArw: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useDragDropManager = function () {
          var e = (0, o.useContext)(a.DndContext).dragDropManager
          return (0, i.default)(null != e, "Expected drag drop context"), e
        })
      var r,
        o = n("q1tI"),
        i = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        a = n("8QtF")
    },
    gGVb: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          if (null === t) return null === e
          return Array.isArray(e)
            ? e.some(function (e) {
                return e === t
              })
            : e === t
        })
    },
    gSe6: function (e, t, n) {
      e.exports = {
        wrap: "wrap-3Onbn19L",
        dialog: "dialog-3Onbn19L",
        offset: "offset-3Onbn19L",
        title: "title-3Onbn19L",
        main: "main-3Onbn19L",
        disabled: "disabled-3Onbn19L",
        icon: "icon-3Onbn19L",
        textIcon: "textIcon-3Onbn19L",
        rightButtons: "rightButtons-3Onbn19L",
        twoButtons: "twoButtons-3Onbn19L",
        button: "button-3Onbn19L",
        viewButton: "viewButton-3Onbn19L",
        threeButtons: "threeButtons-3Onbn19L",
        lockButton: "lockButton-3Onbn19L",
        removeButton: "removeButton-3Onbn19L",
        warn: "warn-3Onbn19L",
        hover: "hover-3Onbn19L",
        expandHandle: "expandHandle-3Onbn19L",
        selected: "selected-3Onbn19L",
        childOfSelected: "childOfSelected-3Onbn19L",
        renameInput: "renameInput-3Onbn19L"
      }
    },
    gla1: function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n("q1tI")
      const o = () => {
        const [, e] = Object(r.useReducer)((e, t) => e + 1, 0)
        return e
      }
    },
    gpuc: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload
          switch (t.type) {
            case r.INIT_COORDS:
            case r.BEGIN_DRAG:
              return {
                initialSourceClientOffset: n.sourceClientOffset,
                initialClientOffset: n.clientOffset,
                clientOffset: n.clientOffset
              }
            case r.HOVER:
              return (0, o.areCoordsEqual)(e.clientOffset, n.clientOffset)
                ? e
                : a({}, e, { clientOffset: n.clientOffset })
            case r.END_DRAG:
            case r.DROP:
              return c
            default:
              return e
          }
        })
      var r = n("zLS0"),
        o = n("ZzwE")
      function i(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                s(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var c = { initialSourceClientOffset: null, initialClientOffset: null, clientOffset: null }
    },
    h5pj: function (e, t, n) {
      e.exports = { wrap: "wrap-3jZ5H2Ul", space: "space-3jZ5H2Ul", tree: "tree-3jZ5H2Ul" }
    },
    iI3E: function (e, t, n) {
      "use strict"
      var r
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HandlerRole = void 0),
        (t.HandlerRole = r),
        (function (e) {
          ;(e.SOURCE = "SOURCE"), (e.TARGET = "TARGET")
        })(r || (t.HandlerRole = r = {}))
    },
    iNL6: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0)
      var r = s(n("QLaP")),
        o = s(n("gGVb")),
        i = n("E9Q6"),
        a = n("/XZa")
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var u = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.store = t),
            (this.registry = n)
        }
        var t, n, s
        return (
          (t = e),
          (n = [
            {
              key: "subscribeToStateChange",
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
                  o = n.handlerIds
                ;(0, r.default)("function" == typeof e, "listener must be a function."),
                  (0, r.default)(
                    void 0 === o || Array.isArray(o),
                    "handlerIds, when specified, must be an array of strings."
                  )
                var i = this.store.getState().stateId,
                  s = function () {
                    var n = t.store.getState(),
                      r = n.stateId
                    try {
                      r === i || (r === i + 1 && !(0, a.areDirty)(n.dirtyHandlerIds, o)) || e()
                    } finally {
                      i = r
                    }
                  }
                return this.store.subscribe(s)
              }
            },
            {
              key: "subscribeToOffsetChange",
              value: function (e) {
                var t = this
                ;(0, r.default)("function" == typeof e, "listener must be a function.")
                var n = this.store.getState().dragOffset
                return this.store.subscribe(function () {
                  var r = t.store.getState().dragOffset
                  r !== n && ((n = r), e())
                })
              }
            },
            {
              key: "canDragSource",
              value: function (e) {
                if (!e) return !1
                var t = this.registry.getSource(e)
                return (
                  (0, r.default)(t, "Expected to find a valid source."),
                  !this.isDragging() && t.canDrag(this, e)
                )
              }
            },
            {
              key: "canDropOnTarget",
              value: function (e) {
                if (!e) return !1
                var t = this.registry.getTarget(e)
                if (
                  ((0, r.default)(t, "Expected to find a valid target."),
                  !this.isDragging() || this.didDrop())
                )
                  return !1
                var n = this.registry.getTargetType(e),
                  i = this.getItemType()
                return (0, o.default)(n, i) && t.canDrop(this, e)
              }
            },
            {
              key: "isDragging",
              value: function () {
                return Boolean(this.getItemType())
              }
            },
            {
              key: "isDraggingSource",
              value: function (e) {
                if (!e) return !1
                var t = this.registry.getSource(e, !0)
                return (
                  (0, r.default)(t, "Expected to find a valid source."),
                  !(!this.isDragging() || !this.isSourcePublic()) &&
                    this.registry.getSourceType(e) === this.getItemType() &&
                    t.isDragging(this, e)
                )
              }
            },
            {
              key: "isOverTarget",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 }
                if (!e) return !1
                var n = t.shallow
                if (!this.isDragging()) return !1
                var r = this.registry.getTargetType(e),
                  i = this.getItemType()
                if (i && !(0, o.default)(r, i)) return !1
                var a = this.getTargetIds()
                if (!a.length) return !1
                var s = a.indexOf(e)
                return n ? s === a.length - 1 : s > -1
              }
            },
            {
              key: "getItemType",
              value: function () {
                return this.store.getState().dragOperation.itemType
              }
            },
            {
              key: "getItem",
              value: function () {
                return this.store.getState().dragOperation.item
              }
            },
            {
              key: "getSourceId",
              value: function () {
                return this.store.getState().dragOperation.sourceId
              }
            },
            {
              key: "getTargetIds",
              value: function () {
                return this.store.getState().dragOperation.targetIds
              }
            },
            {
              key: "getDropResult",
              value: function () {
                return this.store.getState().dragOperation.dropResult
              }
            },
            {
              key: "didDrop",
              value: function () {
                return this.store.getState().dragOperation.didDrop
              }
            },
            {
              key: "isSourcePublic",
              value: function () {
                return this.store.getState().dragOperation.isSourcePublic
              }
            },
            {
              key: "getInitialClientOffset",
              value: function () {
                return this.store.getState().dragOffset.initialClientOffset
              }
            },
            {
              key: "getInitialSourceClientOffset",
              value: function () {
                return this.store.getState().dragOffset.initialSourceClientOffset
              }
            },
            {
              key: "getClientOffset",
              value: function () {
                return this.store.getState().dragOffset.clientOffset
              }
            },
            {
              key: "getSourceClientOffset",
              value: function () {
                return (0, i.getSourceClientOffset)(this.store.getState().dragOffset)
              }
            },
            {
              key: "getDifferenceFromInitialOffset",
              value: function () {
                return (0, i.getDifferenceFromInitialOffset)(this.store.getState().dragOffset)
              }
            }
          ]) && c(t.prototype, n),
          s && c(t, s),
          e
        )
      })()
      t.default = u
    },
    jPOK: function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return a
      })
      var r = n("q1tI"),
        o = n("TSYQ"),
        i = n("Owlf")
      n("SzKR")
      function a(e) {
        const t = o("tv-spinner", "tv-spinner--shown", "tv-spinner--size_" + (e.size || i.a))
        return r.createElement(
          "div",
          { className: t, style: e.style, role: "progressbar" },
          r.createElement(
            "div",
            { className: "tv-spinner__spinner-layer" },
            r.createElement("div", { className: "tv-spinner__background tv-spinner__width_element" }),
            r.createElement("div", {
              className:
                "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left"
            }),
            r.createElement("div", {
              className:
                "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right"
            })
          )
        )
      }
    },
    jcMs: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case r.ADD_SOURCE:
            case r.ADD_TARGET:
              return e + 1
            case r.REMOVE_SOURCE:
            case r.REMOVE_TARGET:
              return e - 1
            default:
              return e
          }
        })
      var r = n("Uyss")
    },
    lAcH: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.registerTarget = function (e, t, n) {
          var r = n.getRegistry(),
            o = r.addTarget(e, t)
          return [
            o,
            function () {
              return r.removeTarget(o)
            }
          ]
        }),
        (t.registerSource = function (e, t, n) {
          var r = n.getRegistry(),
            o = r.addSource(e, t)
          return [
            o,
            function () {
              return r.removeSource(o)
            }
          ]
        })
    },
    laIQ: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0)
      var r = n("ANjH"),
        o = c(n("uU4G")),
        i = c(n("zLS0")),
        a = c(n("iNL6")),
        s = c(n("2H2i"))
      function c(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function d(e) {
        var t = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__
        return (0, r.createStore)(o.default, e && t && t({ name: "dnd-core", instanceId: "dnd-core" }))
      }
      var f = (function () {
        function e() {
          var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          u(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
              var e = t.store.getState().refCount > 0
              t.backend &&
                (e && !t.isSetUp
                  ? (t.backend.setup(), (t.isSetUp = !0))
                  : !e && t.isSetUp && (t.backend.teardown(), (t.isSetUp = !1)))
            })
          var r = d(n)
          ;(this.store = r),
            (this.monitor = new a.default(r, new s.default(r))),
            r.subscribe(this.handleRefCountChange)
        }
        var t, n, r
        return (
          (t = e),
          (n = [
            {
              key: "receiveBackend",
              value: function (e) {
                this.backend = e
              }
            },
            {
              key: "getMonitor",
              value: function () {
                return this.monitor
              }
            },
            {
              key: "getBackend",
              value: function () {
                return this.backend
              }
            },
            {
              key: "getRegistry",
              value: function () {
                return this.monitor.registry
              }
            },
            {
              key: "getActions",
              value: function () {
                var e = this,
                  t = this.store.dispatch,
                  n = (0, i.default)(this)
                return Object.keys(n).reduce(function (r, o) {
                  var i,
                    a = n[o]
                  return (
                    (r[o] =
                      ((i = a),
                      function () {
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                          r[o] = arguments[o]
                        var a = i.apply(e, r)
                        void 0 !== a && t(a)
                      })),
                    r
                  )
                }, {})
              }
            },
            {
              key: "dispatch",
              value: function (e) {
                this.store.dispatch(e)
              }
            }
          ]) && l(t.prototype, n),
          r && l(t, r),
          e
        )
      })()
      t.default = f
    },
    leHx: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#avi4cgf11)"><path fill="#F0F3FA" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="url(#bvi4cgf11)" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#1E222D" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#1E222D" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><linearGradient gradientUnits="userSpaceOnUse" x1="49.73" x2="49.73" y1="34.29" y2="59.37" id="bvi4cgf11"><stop stop-color="#2196F3"/><stop offset="1" stop-color="#2196F3"/></linearGradient><clipPath id="avi4cgf11"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>'
    },
    lil0: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          ;(arguments.length > 0 && void 0 !== arguments[0]) || a.NONE
          var e = arguments.length > 1 ? arguments[1] : void 0
          switch (e.type) {
            case r.HOVER:
              break
            case o.ADD_SOURCE:
            case o.ADD_TARGET:
            case o.REMOVE_TARGET:
            case o.REMOVE_SOURCE:
              return a.NONE
            case r.BEGIN_DRAG:
            case r.PUBLISH_DRAG_SOURCE:
            case r.END_DRAG:
            case r.DROP:
            default:
              return a.ALL
          }
          var t = e.payload,
            n = t.targetIds,
            c = void 0 === n ? [] : n,
            u = t.prevTargetIds,
            l = void 0 === u ? [] : u,
            d = (0, s.xor)(c, l),
            f = d.length > 0 || !(0, i.areArraysEqual)(c, l)
          if (!f) return a.NONE
          var h = l[l.length - 1],
            p = c[c.length - 1]
          h !== p && (h && d.push(h), p && d.push(p))
          return d
        })
      var r = n("zLS0"),
        o = n("Uyss"),
        i = n("ZzwE"),
        a = n("/XZa"),
        s = n("rTKX")
    },
    mGlc: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getNodeClientOffset = a),
        (t.getEventClientOffset = function (e) {
          return { x: e.clientX, y: e.clientY }
        }),
        (t.getDragPreviewOffset = function (e, t, n, r, s) {
          var c =
              ((_ = t),
              "IMG" === _.nodeName && ((0, o.isFirefox)() || !document.documentElement.contains(_))),
            u = a(c ? e : t),
            l = { x: n.x - u.x, y: n.y - u.y },
            d = e.offsetWidth,
            f = e.offsetHeight,
            h = r.anchorX,
            p = r.anchorY,
            g = (function (e, t, n, r) {
              var i = e ? t.width : n,
                a = e ? t.height : r
              ;(0, o.isSafari)() && e && ((a /= window.devicePixelRatio), (i /= window.devicePixelRatio))
              return { dragPreviewWidth: i, dragPreviewHeight: a }
            })(c, t, d, f),
            v = g.dragPreviewWidth,
            b = g.dragPreviewHeight,
            y = s.offsetX,
            m = s.offsetY,
            O = 0 === m || m
          var _
          return {
            x:
              0 === y || y ? y : new i.default([0, 0.5, 1], [l.x, (l.x / d) * v, l.x + v - d]).interpolate(h),
            y: O
              ? m
              : ((S = new i.default([0, 0.5, 1], [l.y, (l.y / f) * b, l.y + b - f]).interpolate(p)),
                (0, o.isSafari)() && c && (S += (window.devicePixelRatio - 1) * b),
                S)
          }
          var S
        })
      var r,
        o = n("zAsM"),
        i = (r = n("z6MX")) && r.__esModule ? r : { default: r }
      function a(e) {
        var t = 1 === e.nodeType ? e : e.parentElement
        if (!t) return null
        var n = t.getBoundingClientRect(),
          r = n.top
        return { x: n.left, y: r }
      }
    },
    mIZF: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0)
      var r = n("ae+E")
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var i = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.entered = []),
            (this.isNodeInDocument = t)
        }
        var t, n, i
        return (
          (t = e),
          (n = [
            {
              key: "enter",
              value: function (e) {
                var t = this,
                  n = this.entered.length
                return (
                  (this.entered = (0, r.union)(
                    this.entered.filter(function (n) {
                      return t.isNodeInDocument(n) && (!n.contains || n.contains(e))
                    }),
                    [e]
                  )),
                  0 === n && this.entered.length > 0
                )
              }
            },
            {
              key: "leave",
              value: function (e) {
                var t = this.entered.length
                return (
                  (this.entered = (0, r.without)(this.entered.filter(this.isNodeInDocument), e)),
                  t > 0 && 0 === this.entered.length
                )
              }
            },
            {
              key: "reset",
              value: function () {
                this.entered = []
              }
            }
          ]) && o(t.prototype, n),
          i && o(t, i),
          e
        )
      })()
      t.default = i
    },
    nkjW: function (e, t, n) {
      e.exports = {
        title: "title-2PJRtZNU",
        withoutIcon: "withoutIcon-2PJRtZNU",
        buttons: "buttons-2PJRtZNU",
        button: "button-2PJRtZNU",
        disabled: "disabled-2PJRtZNU"
      }
    },
    "p0W+": function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return c
      })
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("TSYQ"),
        a = n("tU7i"),
        s = n("EvtC")
      const c = o.forwardRef((e, t) => {
        const { className: n } = e,
          c = Object(r.a)(e, ["className"])
        return o.createElement(a.b, Object.assign({}, c, { ref: t, className: i(n, s.button) }))
      })
    },
    px1m: function (e, t, n) {
      e.exports = {
        "small-height-breakpoint": "screen and (max-height: 360px)",
        container: "container-2sL5JydP",
        unsetAlign: "unsetAlign-2sL5JydP",
        title: "title-2sL5JydP",
        subtitle: "subtitle-2sL5JydP",
        ellipsis: "ellipsis-2sL5JydP",
        close: "close-2sL5JydP"
      }
    },
    "q/ea": function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SerialDisposable = t.CompositeDisposable = t.Disposable = void 0)
      var r = n("GanS")
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function a(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
      }
      var s = (function () {
        function e(t) {
          o(this, e), (this.isDisposed = !1), (this.action = (0, r.isFunction)(t) ? t : r.noop)
        }
        return (
          a(
            e,
            [
              {
                key: "dispose",
                value: function () {
                  this.isDisposed || (this.action(), (this.isDisposed = !0))
                }
              }
            ],
            [
              {
                key: "isDisposable",
                value: function (e) {
                  return e && (0, r.isFunction)(e.dispose)
                }
              },
              {
                key: "_fixup",
                value: function (t) {
                  return e.isDisposable(t) ? t : e.empty
                }
              },
              {
                key: "create",
                value: function (t) {
                  return new e(t)
                }
              }
            ]
          ),
          e
        )
      })()
      ;(t.Disposable = s), (s.empty = { dispose: r.noop })
      var c = (function () {
        function e() {
          o(this, e), (this.isDisposed = !1)
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
          this.disposables = n
        }
        return (
          a(e, [
            {
              key: "add",
              value: function (e) {
                this.isDisposed ? e.dispose() : this.disposables.push(e)
              }
            },
            {
              key: "remove",
              value: function (e) {
                var t = !1
                if (!this.isDisposed) {
                  var n = this.disposables.indexOf(e)
                  ;-1 !== n && ((t = !0), this.disposables.splice(n, 1), e.dispose())
                }
                return t
              }
            },
            {
              key: "clear",
              value: function () {
                if (!this.isDisposed) {
                  for (var e = this.disposables.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = this.disposables[n]
                  this.disposables = []
                  for (var r = 0; r < e; r++) t[r].dispose()
                }
              }
            },
            {
              key: "dispose",
              value: function () {
                if (!this.isDisposed) {
                  this.isDisposed = !0
                  for (var e = this.disposables.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = this.disposables[n]
                  this.disposables = []
                  for (var r = 0; r < e; r++) t[r].dispose()
                }
              }
            }
          ]),
          e
        )
      })()
      t.CompositeDisposable = c
      var u = (function () {
        function e() {
          o(this, e), (this.isDisposed = !1)
        }
        return (
          a(e, [
            {
              key: "getDisposable",
              value: function () {
                return this.current
              }
            },
            {
              key: "setDisposable",
              value: function (e) {
                var t = this.isDisposed
                if (!t) {
                  var n = this.current
                  ;(this.current = e), n && n.dispose()
                }
                t && e && e.dispose()
              }
            },
            {
              key: "dispose",
              value: function () {
                if (!this.isDisposed) {
                  this.isDisposed = !0
                  var e = this.current
                  ;(this.current = void 0), e && e.dispose()
                }
              }
            }
          ]),
          e
        )
      })()
      t.SerialDisposable = u
    },
    qvEB: function (e, t, n) {
      "use strict"
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isValidType = function e(t, n) {
          return (
            "string" == typeof t ||
            "symbol" === r(t) ||
            (!!n &&
              Array.isArray(t) &&
              t.every(function (t) {
                return e(t, !1)
              }))
          )
        })
    },
    rTKX: function (e, t, n) {
      "use strict"
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.get = function (e, t, n) {
          return t.split(".").reduce(function (e, t) {
            return e && e[t] ? e[t] : n || null
          }, e)
        }),
        (t.without = function (e, t) {
          return e.filter(function (e) {
            return e !== t
          })
        }),
        (t.isString = function (e) {
          return "string" == typeof e
        }),
        (t.isObject = function (e) {
          return "object" === r(e)
        }),
        (t.xor = function (e, t) {
          var n = new Map(),
            r = function (e) {
              return n.set(e, n.has(e) ? n.get(e) + 1 : 1)
            }
          e.forEach(r), t.forEach(r)
          var o = []
          return (
            n.forEach(function (e, t) {
              1 === e && o.push(t)
            }),
            o
          )
        }),
        (t.intersection = function (e, t) {
          return e.filter(function (e) {
            return t.indexOf(e) > -1
          })
        })
    },
    rlH3: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width="120" height="120" fill="none"><g clip-path="url(#a00y35lj1)"><path fill="#2A2E39" d="M16.01 71.1c10.54 13.42 34.92 11.86 54.46-3.48s26.85-38.65 16.3-52.08C76.25 2.12 51.87 3.68 32.33 19.02c-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.88-2.57 3.05-4.53 3.48a9.7 9.7 0 0 0-3.96 1.85C.5 52.94-.09 59.64 3.64 64.4a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="#1976D2" d="M28.3 35.56c1.8 3.42 12.08 10.65 25.62 16.88 6.36 2.93 12.38 5.3 17.37 6.93a172.7 172.7 0 0 0-18-12.68c-14.59-9.1-24.97-12.4-24.97-12.4-.18.3-.19.72-.01 1.27z"/><path stroke="#B2B5BE" stroke-width="1.5" d="M86.25 71.4c-.19.28-.54.53-1.17.69-.63.15-1.48.19-2.56.08-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.13-24.64-13.06-9.12-5.93-16.82-12.1-21.92-17.25-2.55-2.59-4.41-4.89-5.48-6.76a7.79 7.79 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.3.54-.55 1.17-.7a7.8 7.8 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.12 24.65 13.06 9.1 5.93 16.81 12.1 21.9 17.25 2.56 2.58 4.43 4.89 5.5 6.76.53.94.84 1.73.95 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M28.96 34.63c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52a193.2 193.2 0 0 1 6.66 4.15c10.56 6.88 19.12 13.86 22.97 18.45"/><path stroke="#B2B5BE" stroke-width="1.5" d="M83.79 65.59c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M74.96 21.24a6.08 6.08 0 0 1-2.58 2.3c-.9.39-1.69.35-2.23 0-.54-.36-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.29 6.07 6.07 0 0 1 2.58-2.29c.9-.4 1.69-.35 2.23 0s.9 1.05.9 2.04c.01.98-.32 2.17-1.05 3.28z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M42.7 23.62c1.25-.3 4.56-1.3 8.92-1.3M80.14 84.07C76.5 84.03 64.4 84 50 84s-26.5.03-30.14.07M24.7 59.33l5.77 5.32M32.05 56.05l.84 3.28"/></g><defs><clipPath id="a00y35lj1"><path fill="#fff" d="M0 0h100v100H0V0z"/></clipPath></defs></svg>'
    },
    sAc8: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useDrag = function (e) {
          var t = (0, o.useRef)(e)
          ;(t.current = e),
            (0, i.default)(null != e.item, "item must be defined"),
            (0, i.default)(null != e.item.type, "item type must be defined")
          var n =
              ((l = (0, c.useDragSourceMonitor)()),
              (d = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(l) ||
                (function (e, t) {
                  if (
                    Symbol.iterator in Object(e) ||
                    "[object Arguments]" === Object.prototype.toString.call(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0
                    try {
                      for (
                        var a, s = e[Symbol.iterator]();
                        !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (c) {
                      ;(o = !0), (i = c)
                    } finally {
                      try {
                        r || null == s.return || s.return()
                      } finally {
                        if (o) throw i
                      }
                    }
                    return n
                  }
                })(l, d) ||
                (function () {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                })()),
            r = n[0],
            u = n[1]
          var l, d
          ;(0, c.useDragHandler)(t, r, u)
          var f = (0, a.useMonitorOutput)(
              r,
              t.current.collect ||
                function () {
                  return {}
                },
              function () {
                return u.reconnect()
              }
            ),
            h = (0, o.useMemo)(
              function () {
                return u.hooks.dragSource()
              },
              [u]
            ),
            p = (0, o.useMemo)(
              function () {
                return u.hooks.dragPreview()
              },
              [u]
            )
          return (
            (0, s.useIsomorphicLayoutEffect)(
              function () {
                ;(u.dragSourceOptions = t.current.options || null), u.reconnect()
              },
              [u]
            ),
            (0, s.useIsomorphicLayoutEffect)(
              function () {
                ;(u.dragPreviewOptions = t.current.previewOptions || null), u.reconnect()
              },
              [u]
            ),
            [f, h, p]
          )
        })
      var r,
        o = n("q1tI"),
        i = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        a = n("6ccc"),
        s = n("7bhs"),
        c = n("6joC")
    },
    sSbr: function (e, t, n) {
      "use strict"
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isRef = function (e) {
          return null !== e && "object" === r(e) && e.hasOwnProperty("current")
        })
    },
    td7b: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.DecoratedComponent,
            n = e.createHandler,
            l = e.createMonitor,
            d = e.createConnector,
            v = e.registerHandler,
            b = e.containerDisplayName,
            y = e.getType,
            m = e.collect,
            O = e.options.arePropsEqual,
            _ = void 0 === O ? o.default : O,
            S = t,
            w = t.displayName || t.name || "Component",
            D = (function (e) {
              function t(e) {
                var n
                return (
                  (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  })(this, t),
                  ((n = (function (e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t)) return t
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                      return e
                    })(e)
                  })(this, p(t).call(this, e))).decoratedRef = r.createRef()),
                  (n.handleChange = function () {
                    var e = n.getCurrentState()
                    ;(0, o.default)(e, n.state) || n.setState(e)
                  }),
                  (n.disposable = new c.SerialDisposable()),
                  n.receiveProps(e),
                  n.dispose(),
                  n
                )
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function")
                  ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && g(e, t)
                })(t, e),
                (function (e, t, n) {
                  t && h(e.prototype, t)
                  n && h(e, n)
                })(t, [
                  {
                    key: "getHandlerId",
                    value: function () {
                      return this.handlerId
                    }
                  },
                  {
                    key: "getDecoratedComponentInstance",
                    value: function () {
                      return (
                        (0, i.default)(
                          this.decoratedRef.current,
                          "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"
                        ),
                        this.decoratedRef.current
                      )
                    }
                  },
                  {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                      return !_(e, this.props) || !(0, o.default)(t, this.state)
                    }
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      ;(this.disposable = new c.SerialDisposable()),
                        (this.currentType = void 0),
                        this.receiveProps(this.props),
                        this.handleChange()
                    }
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      _(this.props, e) || (this.receiveProps(this.props), this.handleChange())
                    }
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.dispose()
                    }
                  },
                  {
                    key: "receiveProps",
                    value: function (e) {
                      this.handler && (this.handler.receiveProps(e), this.receiveType(y(e)))
                    }
                  },
                  {
                    key: "receiveType",
                    value: function (e) {
                      if (
                        this.handlerMonitor &&
                        this.manager &&
                        this.handlerConnector &&
                        e !== this.currentType
                      ) {
                        this.currentType = e
                        var t,
                          n,
                          r = v(e, this.handler, this.manager),
                          o =
                            ((n = 2),
                            (function (e) {
                              if (Array.isArray(e)) return e
                            })((t = r)) ||
                              (function (e, t) {
                                if (
                                  Symbol.iterator in Object(e) ||
                                  "[object Arguments]" === Object.prototype.toString.call(e)
                                ) {
                                  var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0
                                  try {
                                    for (
                                      var a, s = e[Symbol.iterator]();
                                      !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
                                      r = !0
                                    );
                                  } catch (c) {
                                    ;(o = !0), (i = c)
                                  } finally {
                                    try {
                                      r || null == s.return || s.return()
                                    } finally {
                                      if (o) throw i
                                    }
                                  }
                                  return n
                                }
                              })(t, n) ||
                              (function () {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                              })()),
                          i = o[0],
                          a = o[1]
                        ;(this.handlerId = i),
                          this.handlerMonitor.receiveHandlerId(i),
                          this.handlerConnector.receiveHandlerId(i)
                        var s = this.manager
                          .getMonitor()
                          .subscribeToStateChange(this.handleChange, { handlerIds: [i] })
                        this.disposable.setDisposable(
                          new c.CompositeDisposable(new c.Disposable(s), new c.Disposable(a))
                        )
                      }
                    }
                  },
                  {
                    key: "dispose",
                    value: function () {
                      this.disposable.dispose(),
                        this.handlerConnector && this.handlerConnector.receiveHandlerId(null)
                    }
                  },
                  {
                    key: "getCurrentState",
                    value: function () {
                      return this.handlerConnector
                        ? m(this.handlerConnector.hooks, this.handlerMonitor, this.props)
                        : {}
                    }
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this
                      return r.createElement(s.DndContext.Consumer, null, function (t) {
                        var n = t.dragDropManager
                        return (
                          e.receiveDragDropManager(n),
                          "undefined" != typeof requestAnimationFrame &&
                            requestAnimationFrame(function () {
                              return e.handlerConnector.reconnect()
                            }),
                          r.createElement(
                            S,
                            Object.assign({}, e.props, e.getCurrentState(), {
                              ref: (0, u.isRefable)(S) ? e.decoratedRef : null
                            })
                          )
                        )
                      })
                    }
                  },
                  {
                    key: "receiveDragDropManager",
                    value: function (e) {
                      void 0 === this.manager &&
                        ((0, i.default)(
                          void 0 !== e,
                          "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                          w,
                          w
                        ),
                        void 0 !== e &&
                          ((this.manager = e),
                          (this.handlerMonitor = l(e)),
                          (this.handlerConnector = d(e.getBackend())),
                          (this.handler = n(this.handlerMonitor, this.decoratedRef))))
                    }
                  }
                ]),
                t
              )
            })(r.Component)
          return (
            (D.DecoratedComponent = t),
            (D.displayName = "".concat(b, "(").concat(w, ")")),
            (0, a.default)(D, t)
          )
        })
      var r = (function (e) {
          if (e && e.__esModule) return e
          var t = d()
          if (t && t.has(e)) return t.get(e)
          var n = {}
          if (null != e) {
            var r = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null
                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o])
              }
          }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("q1tI")),
        o = l(n("Gytx")),
        i = l(n("QLaP")),
        a = l(n("2mql")),
        s = n("Y4Oj"),
        c = (n("GanS"), n("q/ea")),
        u = n("aDaG")
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function d() {
        if ("function" != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (d = function () {
            return e
          }),
          e
        )
      }
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              })(e)
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
    },
    tyJc: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5a2.5 2.5 0 0 1 5 0V7H7V5.5zM6 7V5.5a3.5 3.5 0 1 1 7 0V7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm8 2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9zm-3 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
    },
    uU4G: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0
          return {
            dirtyHandlerIds: (0, a.default)(e.dirtyHandlerIds, {
              type: t.type,
              payload: d({}, t.payload, { prevTargetIds: (0, c.get)(e, "dragOperation.targetIds", []) })
            }),
            dragOffset: (0, r.default)(e.dragOffset, t),
            refCount: (0, i.default)(e.refCount, t),
            dragOperation: (0, o.default)(e.dragOperation, t),
            stateId: (0, s.default)(e.stateId)
          }
        })
      var r = u(n("gpuc")),
        o = u(n("G/LZ")),
        i = u(n("jcMs")),
        a = u(n("lil0")),
        s = u(n("UzDk")),
        c = n("rTKX")
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                f(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
    },
    uwyp: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDataFromDataTransfer = function (e, t, n) {
          var r = t.reduce(function (t, n) {
            return t || e.getData(n)
          }, "")
          return null != r ? r : n
        })
    },
    vjmV: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = n("8QtF")
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e]
            }
          })
      })
      var o = n("fZSZ")
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e]
            }
          })
      })
      var i = n("Ux4w")
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e]
            }
          })
      })
    },
    vkAp: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DragSource = function (e, t, n) {
          var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          ;(0, i.checkDecoratorArguments)("DragSource", "type, spec, collect[, options]", e, t, n, f)
          var h = e
          "function" != typeof e &&
            ((0, r.default)(
              (0, l.isValidType)(e),
              'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              e
            ),
            (h = function () {
              return e
            }))
          ;(0, r.default)(
            (0, o.isPlainObject)(t),
            'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            t
          )
          var p = (0, d.default)(t)
          return (
            (0, r.default)(
              "function" == typeof n,
              'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n
            ),
            (0, r.default)(
              (0, o.isPlainObject)(f),
              'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              n
            ),
            function (e) {
              return (0, a.default)({
                containerDisplayName: "DragSource",
                createHandler: p,
                registerHandler: s.registerSource,
                createConnector: function (e) {
                  return new u.SourceConnector(e)
                },
                createMonitor: function (e) {
                  return new c.DragSourceMonitorImpl(e)
                },
                DecoratedComponent: e,
                getType: h,
                collect: n,
                options: f
              })
            }
          )
        })
      var r = f(n("QLaP")),
        o = n("GanS"),
        i = n("aDaG"),
        a = f(n("td7b")),
        s = n("lAcH"),
        c = n("T+8Q"),
        u = n("GrOC"),
        l = n("qvEB"),
        d = f(n("TF3m"))
      function f(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    "x0D+": function (e, t, n) {
      var r, o, i
      ;(o = [t]),
        void 0 ===
          (i =
            "function" ==
            typeof (r = function (e) {
              "use strict"
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
                  return n
                }
                return Array.from(e)
              }
              Object.defineProperty(e, "__esModule", { value: !0 })
              var n = !1
              if ("undefined" != typeof window) {
                var r = {
                  get passive() {
                    n = !0
                  }
                }
                window.addEventListener("testPassive", null, r),
                  window.removeEventListener("testPassive", null, r)
              }
              var o =
                  "undefined" != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                i = [],
                a = !1,
                s = -1,
                c = void 0,
                u = void 0,
                l = function (e) {
                  return i.some(function (t) {
                    return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                  })
                },
                d = function (e) {
                  var t = e || window.event
                  return !!l(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                },
                f = function () {
                  setTimeout(function () {
                    void 0 !== u && ((document.body.style.paddingRight = u), (u = void 0)),
                      void 0 !== c && ((document.body.style.overflow = c), (c = void 0))
                  })
                }
              ;(e.disableBodyScroll = function (e, r) {
                if (o) {
                  if (!e)
                    return void console.error(
                      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                    )
                  if (
                    e &&
                    !i.some(function (t) {
                      return t.targetElement === e
                    })
                  ) {
                    var f = { targetElement: e, options: r || {} }
                    ;(i = [].concat(t(i), [f])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                      }),
                      (e.ontouchmove = function (t) {
                        var n, r, o, i
                        1 === t.targetTouches.length &&
                          ((r = e),
                          (i = (n = t).targetTouches[0].clientY - s),
                          !l(n.target) &&
                            ((r && 0 === r.scrollTop && 0 < i) ||
                            ((o = r) && o.scrollHeight - o.scrollTop <= o.clientHeight && i < 0)
                              ? d(n)
                              : n.stopPropagation()))
                      }),
                      a || (document.addEventListener("touchmove", d, n ? { passive: !1 } : void 0), (a = !0))
                  }
                } else {
                  ;(p = r),
                    setTimeout(function () {
                      if (void 0 === u) {
                        var e = !!p && !0 === p.reserveScrollBarGap,
                          t = window.innerWidth - document.documentElement.clientWidth
                        e &&
                          0 < t &&
                          ((u = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + "px"))
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow), (document.body.style.overflow = "hidden"))
                    })
                  var h = { targetElement: e, options: r || {} }
                  i = [].concat(t(i), [h])
                }
                var p
              }),
                (e.clearAllBodyScrollLocks = function () {
                  o
                    ? (i.forEach(function (e) {
                        ;(e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null)
                      }),
                      a &&
                        (document.removeEventListener("touchmove", d, n ? { passive: !1 } : void 0),
                        (a = !1)),
                      (i = []),
                      (s = -1))
                    : (f(), (i = []))
                }),
                (e.enableBodyScroll = function (e) {
                  if (o) {
                    if (!e)
                      return void console.error(
                        "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                      )
                    ;(e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (i = i.filter(function (t) {
                        return t.targetElement !== e
                      })),
                      a &&
                        0 === i.length &&
                        (document.removeEventListener("touchmove", d, n ? { passive: !1 } : void 0), (a = !1))
                  } else
                    1 === i.length && i[0].targetElement === e
                      ? (f(), (i = []))
                      : (i = i.filter(function (t) {
                          return t.targetElement !== e
                        }))
                })
            })
              ? r.apply(t, o)
              : r) || (e.exports = i)
    },
    x5pF: function (e, t, n) {
      e.exports = {
        title: "title-3eZ-_4gp",
        empty: "empty-3eZ-_4gp",
        image: "image-3eZ-_4gp",
        contentList: "contentList-3eZ-_4gp"
      }
    },
    xNz2: function (e, t, n) {
      "use strict"
      n.r(t)
      var r = n("q1tI"),
        o = n.n(r),
        i = n("i8i4")
      function a(e, t) {
        let n = Promise.reject()
        for (let r = 0; r < t; ++r) n = n.catch(e)
        return n
      }
      var s = n("txPx")
      const c = Object(s.getLogger)("DataSourcesIcons")
      let u = null
      function l() {
        const e = n.c.zxD0
        return e
          ? Promise.resolve(e.exports.lineToolsIcons)
          : n
              .e("line-tools-icons")
              .then(n.bind(null, "zxD0"))
              .then((e) => e.lineToolsIcons)
      }
      function d() {
        const e = n.c.EsZh
        return e
          ? Promise.resolve(e.exports.SERIES_ICONS)
          : n
              .e("series-icons-map")
              .then(n.bind(null, "EsZh"))
              .then((e) => e.SERIES_ICONS)
      }
      let f = null
      function h() {
        return (
          null === f &&
            (f = (function () {
              const e = a(l, 2)
                  .then((e) => e)
                  .catch((e) => (c.logWarn(e), {})),
                t = a(d, 2)
                  .then((e) => e)
                  .catch((e) => (c.logWarn(e), {}))
              return Promise.all([e, t])
            })()),
          f.then((e) => ((u = { linetool: e[0], series: e[1] }), u))
        )
      }
      var p = n("Sn4D"),
        g = n("mkWe"),
        v = n("/KDZ"),
        b = n("YFKU"),
        y = n("g89m"),
        m = n("uhCe"),
        O = n("b4AZ")
      var _ = n("cvc5"),
        S = n.n(_),
        w = n("5rFJ"),
        D = n("Eyy1"),
        T = n("TSYQ"),
        j = n.n(T),
        C = n("Iivm"),
        E = n("N5tr"),
        M = n("82wv"),
        I = n("gla1")
      const P = r.createContext(null)
      var k = n("p0W+"),
        x = n("+KIV"),
        N = n("Z3xJ"),
        R = n("B6/a"),
        A = n("nkjW"),
        L = n("JWMC")
      function B(e) {
        const { viewModel: t } = Object(D.ensureNotNull)(Object(r.useContext)(P)),
          n = Object(I.a)(),
          i = t.selection()
        Object(r.useEffect)(() => {
          const e = {}
          return (
            t.onChange().subscribe(e, () => n()),
            () => {
              t.onChange().unsubscribeAll(e)
            }
          )
        }, [t]),
          Object(r.useEffect)(() => {
            const e = {}
            return (
              i.onChange().subscribe(e, () => n()),
              () => {
                i.onChange().unsubscribeAll(e)
              }
            )
          }, [i])
        const a = !t.canSelectionBeUnmerged(),
          s = t.isSelectionCopiable(),
          c = t.isSelectionCloneable(),
          u = !s && !c,
          l = t.canSelectionBeGrouped()
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement("div", { className: T(A.title, A.withoutIcon) }, Object(b.t)("Object tree"), !1),
          o.a.createElement(
            "div",
            { className: A.buttons },
            o.a.createElement(k.a, {
              className: T(A.button, !l && A.disabled),
              icon: R,
              onClick: function () {
                t.createGroupFromSelection()
              },
              isDisabled: !l,
              title: Object(b.t)("Create a group of drawings"),
              "data-name": "group-button"
            }),
            o.a.createElement(
              M.a,
              {
                className: T(A.button, u && A.disabled),
                isDisabled: u,
                content: o.a.createElement(C.a, { icon: x }),
                title: Object(b.t)("Clone, Copy"),
                arrow: !1,
                isShowTooltip: !0,
                "data-name": "copy-clone-button"
              },
              s &&
                o.a.createElement(E.b, {
                  "data-name": "copy",
                  label: Object(b.t)("Copy"),
                  onClick: function () {
                    t.copySelection()
                  }
                }),
              c &&
                o.a.createElement(E.b, {
                  "data-name": "clone",
                  label: Object(b.t)("Clone"),
                  onClick: function () {
                    t.cloneSelection()
                  }
                })
            ),
            o.a.createElement(
              M.a,
              {
                className: T(A.button, a && A.disabled),
                isDisabled: a,
                content: o.a.createElement(C.a, { icon: N }),
                title: Object(b.t)("Move to"),
                arrow: !1,
                isShowTooltip: !0,
                "data-name": "move-to-button"
              },
              o.a.createElement(E.b, {
                "data-name": "new-pane-above",
                label: Object(b.t)("New pane above"),
                onClick: function () {
                  t.unmergeSelectionUp()
                }
              }),
              o.a.createElement(E.b, {
                "data-name": "new-pane-below",
                label: Object(b.t)("New pane below"),
                onClick: function () {
                  t.unmergeSelectionDown()
                }
              })
            )
          )
        )
      }
      var H,
        G = n("mrSG"),
        F = n("rRWa"),
        U = n("/MKj"),
        z = n("1TyS"),
        V = n.n(z)
      !(function (e) {
        ;(e.mouse = "mouse"), (e.touch = "touch"), (e.keyboard = "keyboard")
      })(H || (H = {}))
      var W = 1,
        K = 0
      function q(e) {
        return void 0 === e.button || e.button === K
      }
      function Q(e) {
        return !!e.targetTouches
      }
      function X(e, t) {
        return Q(e)
          ? (function (e, t) {
              return 1 === e.targetTouches.length
                ? X(e.targetTouches[0])
                : t && 1 === e.touches.length && e.touches[0].target === t.target
                ? X(e.touches[0])
                : void 0
            })(e, t)
          : { x: e.clientX, y: e.clientY }
      }
      var Z = (function () {
        var e = !1
        try {
          addEventListener(
            "test",
            function () {},
            Object.defineProperty({}, "passive", {
              get: function () {
                return (e = !0), !0
              }
            })
          )
        } catch (t) {}
        return e
      })()
      function Y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var J,
        $ = (function () {
          function e(t, n) {
            var r = this
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e),
              (this.enableTouchEvents = !0),
              (this.enableMouseEvents = !1),
              (this.enableKeyboardEvents = !1),
              (this.ignoreContextMenu = !1),
              (this.enableHoverOutsideTarget = !1),
              (this.touchSlop = 0),
              (this.scrollAngleRanges = void 0),
              (this.context = n),
              (this.delayTouchStart = t.delayTouchStart || t.delay || 0),
              (this.delayMouseStart = t.delayMouseStart || t.delay || 0),
              Object.keys(t).forEach(function (e) {
                null != t[e] && (r[e] = t[e])
              })
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: "window",
                get: function () {
                  return this.context && this.context.window
                    ? this.context.window
                    : "undefined" != typeof window
                    ? window
                    : void 0
                }
              },
              {
                key: "document",
                get: function () {
                  if (this.window) return this.window.document
                }
              }
            ]) && Y(t.prototype, n),
            r && Y(t, r),
            e
          )
        })()
      function ee(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function te(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var ne =
          (te((J = {}), H.mouse, {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
            contextmenu: "contextmenu"
          }),
          te(J, H.touch, { start: "touchstart", move: "touchmove", end: "touchend" }),
          te(J, H.keyboard, { keydown: "keydown" }),
          J),
        re = (function () {
          function e(t, n, r) {
            var o = this
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e),
              (this.getSourceClientOffset = function (e) {
                return (function (e) {
                  var t = 1 === e.nodeType ? e : e.parentElement
                  if (t) {
                    var n = t.getBoundingClientRect(),
                      r = n.top
                    return { x: n.left, y: r }
                  }
                })(o.sourceNodes[e])
              }),
              (this.handleTopMoveStartCapture = function (e) {
                q(e) && (o.moveStartSourceIds = [])
              }),
              (this.handleMoveStart = function (e) {
                Array.isArray(o.moveStartSourceIds) && o.moveStartSourceIds.unshift(e)
              }),
              (this.handleTopMoveStart = function (e) {
                if (q(e)) {
                  var t = X(e)
                  t && (Q(e) && (o.lastTargetTouchFallback = e.targetTouches[0]), (o._mouseClientOffset = t)),
                    (o.waitingForDelay = !1)
                }
              }),
              (this.handleTopMoveStartDelay = function (e) {
                if (q(e)) {
                  var t = e.type === ne.touch.start ? o.options.delayTouchStart : o.options.delayMouseStart
                  ;(o.timeout = setTimeout(o.handleTopMoveStart.bind(o, e), t)), (o.waitingForDelay = !0)
                }
              }),
              (this.handleTopMoveCapture = function () {
                o.dragOverTargetIds = []
              }),
              (this.handleMove = function (e, t) {
                o.dragOverTargetIds && o.dragOverTargetIds.unshift(t)
              }),
              (this.handleTopMove = function (e) {
                if ((o.timeout && clearTimeout(o.timeout), o.document && !o.waitingForDelay)) {
                  var t,
                    n,
                    r,
                    i,
                    a = o.moveStartSourceIds,
                    s = o.dragOverTargetIds,
                    c = o.options.enableHoverOutsideTarget,
                    u = X(e, o.lastTargetTouchFallback)
                  if (u)
                    if (
                      o._isScrolling ||
                      (!o.monitor.isDragging() &&
                        (function (e, t, n, r, o) {
                          if (!o) return !1
                          for (
                            var i = (180 * Math.atan2(r - t, n - e)) / Math.PI + 180, a = 0;
                            a < o.length;
                            ++a
                          )
                            if (
                              (null == o[a].start || i >= o[a].start) &&
                              (null == o[a].end || i <= o[a].end)
                            )
                              return !0
                          return !1
                        })(
                          o._mouseClientOffset.x || 0,
                          o._mouseClientOffset.y || 0,
                          u.x,
                          u.y,
                          o.options.scrollAngleRanges
                        ))
                    )
                      o._isScrolling = !0
                    else if (
                      (!o.monitor.isDragging() &&
                        o._mouseClientOffset.hasOwnProperty("x") &&
                        a &&
                        ((t = o._mouseClientOffset.x || 0),
                        (n = o._mouseClientOffset.y || 0),
                        (r = u.x),
                        (i = u.y),
                        Math.sqrt(Math.pow(Math.abs(r - t), 2) + Math.pow(Math.abs(i - n), 2)) >
                          (o.options.touchSlop ? o.options.touchSlop : 0)) &&
                        ((o.moveStartSourceIds = void 0),
                        o.actions.beginDrag(a, {
                          clientOffset: o._mouseClientOffset,
                          getSourceClientOffset: o.getSourceClientOffset,
                          publishSource: !1
                        })),
                      o.monitor.isDragging())
                    ) {
                      var l = o.sourceNodes[o.monitor.getSourceId()]
                      o.installSourceNodeRemovalObserver(l), o.actions.publishDragSource(), e.preventDefault()
                      var d = (s || []).map(function (e) {
                          return o.targetNodes[e]
                        }),
                        f = o.options.getDropTargetElementsAtPoint
                          ? o.options.getDropTargetElementsAtPoint(u.x, u.y, d)
                          : o.document.elementsFromPoint(u.x, u.y),
                        h = []
                      for (var p in f)
                        if (f.hasOwnProperty(p)) {
                          var g = f[p]
                          for (h.push(g); g; ) (g = g.parentElement), -1 === h.indexOf(g) && h.push(g)
                        }
                      var v = h
                        .filter(function (e) {
                          return d.indexOf(e) > -1
                        })
                        .map(function (e) {
                          for (var t in o.targetNodes) if (e === o.targetNodes[t]) return t
                        })
                        .filter(function (e) {
                          return !!e
                        })
                        .filter(function (e, t, n) {
                          return n.indexOf(e) === t
                        })
                      if (c)
                        for (var b in o.targetNodes)
                          if (o.targetNodes[b] && o.targetNodes[b].contains(l) && -1 === v.indexOf(b)) {
                            v.unshift(b)
                            break
                          }
                      v.reverse(), o.actions.hover(v, { clientOffset: u })
                    }
                }
              }),
              (this.handleTopMoveEndCapture = function (e) {
                ;(o._isScrolling = !1),
                  (o.lastTargetTouchFallback = void 0),
                  (function (e) {
                    return void 0 === e.buttons || 0 == (e.buttons & W)
                  })(e) &&
                    (o.monitor.isDragging() && !o.monitor.didDrop()
                      ? (e.preventDefault(),
                        (o._mouseClientOffset = {}),
                        o.uninstallSourceNodeRemovalObserver(),
                        o.actions.drop(),
                        o.actions.endDrag())
                      : (o.moveStartSourceIds = void 0))
              }),
              (this.handleCancelOnEscape = function (e) {
                "Escape" === e.key &&
                  o.monitor.isDragging() &&
                  ((o._mouseClientOffset = {}), o.uninstallSourceNodeRemovalObserver(), o.actions.endDrag())
              }),
              (this.options = new $(r, n)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.sourceNodes = {}),
              (this.sourcePreviewNodes = {}),
              (this.sourcePreviewNodeOptions = {}),
              (this.targetNodes = {}),
              (this.listenerTypes = []),
              (this._mouseClientOffset = {}),
              (this._isScrolling = !1),
              this.options.enableMouseEvents && this.listenerTypes.push(H.mouse),
              this.options.enableTouchEvents && this.listenerTypes.push(H.touch),
              this.options.enableKeyboardEvents && this.listenerTypes.push(H.keyboard)
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: "setup",
                value: function () {
                  this.window &&
                    ((function (e, t) {
                      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                        r[o - 2] = arguments[o]
                      if (!e) {
                        var i
                        if (void 0 === t)
                          i = new Error(
                            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                          )
                        else {
                          var a = 0
                          ;(i = new Error(
                            t.replace(/%s/g, function () {
                              return r[a++]
                            })
                          )).name = "Invariant Violation"
                        }
                        throw ((i.framesToPop = 1), i)
                      }
                    })(!e.isSetUp, "Cannot have two Touch backends at the same time."),
                    (e.isSetUp = !0),
                    this.addEventListener(this.window, "start", this.getTopMoveStartHandler()),
                    this.addEventListener(this.window, "start", this.handleTopMoveStartCapture, !0),
                    this.addEventListener(this.window, "move", this.handleTopMove),
                    this.addEventListener(this.window, "move", this.handleTopMoveCapture, !0),
                    this.addEventListener(this.window, "end", this.handleTopMoveEndCapture, !0),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.addEventListener(this.window, "contextmenu", this.handleTopMoveEndCapture),
                    this.options.enableKeyboardEvents &&
                      this.addEventListener(this.window, "keydown", this.handleCancelOnEscape, !0))
                }
              },
              {
                key: "teardown",
                value: function () {
                  this.window &&
                    ((e.isSetUp = !1),
                    (this._mouseClientOffset = {}),
                    this.removeEventListener(this.window, "start", this.handleTopMoveStartCapture, !0),
                    this.removeEventListener(this.window, "start", this.handleTopMoveStart),
                    this.removeEventListener(this.window, "move", this.handleTopMoveCapture, !0),
                    this.removeEventListener(this.window, "move", this.handleTopMove),
                    this.removeEventListener(this.window, "end", this.handleTopMoveEndCapture, !0),
                    this.options.enableMouseEvents &&
                      !this.options.ignoreContextMenu &&
                      this.removeEventListener(this.window, "contextmenu", this.handleTopMoveEndCapture),
                    this.options.enableKeyboardEvents &&
                      this.removeEventListener(this.window, "keydown", this.handleCancelOnEscape, !0),
                    this.uninstallSourceNodeRemovalObserver())
                }
              },
              {
                key: "addEventListener",
                value: function (e, t, n, r) {
                  var o = Z ? { capture: r, passive: !1 } : r
                  this.listenerTypes.forEach(function (r) {
                    var i = ne[r][t]
                    i && e.addEventListener(i, n, o)
                  })
                }
              },
              {
                key: "removeEventListener",
                value: function (e, t, n, r) {
                  var o = Z ? { capture: r, passive: !1 } : r
                  this.listenerTypes.forEach(function (r) {
                    var i = ne[r][t]
                    i && e.removeEventListener(i, n, o)
                  })
                }
              },
              {
                key: "connectDragSource",
                value: function (e, t) {
                  var n = this,
                    r = this.handleMoveStart.bind(this, e)
                  return (
                    (this.sourceNodes[e] = t),
                    this.addEventListener(t, "start", r),
                    function () {
                      delete n.sourceNodes[e], n.removeEventListener(t, "start", r)
                    }
                  )
                }
              },
              {
                key: "connectDragPreview",
                value: function (e, t, n) {
                  var r = this
                  return (
                    (this.sourcePreviewNodeOptions[e] = n),
                    (this.sourcePreviewNodes[e] = t),
                    function () {
                      delete r.sourcePreviewNodes[e], delete r.sourcePreviewNodeOptions[e]
                    }
                  )
                }
              },
              {
                key: "connectDropTarget",
                value: function (e, t) {
                  var n = this
                  if (!this.document)
                    return function () {
                      return null
                    }
                  var r = function (r) {
                    if (n.document && n.monitor.isDragging()) {
                      var o
                      switch (r.type) {
                        case ne.mouse.move:
                          o = { x: r.clientX, y: r.clientY }
                          break
                        case ne.touch.move:
                          o = { x: r.touches[0].clientX, y: r.touches[0].clientY }
                      }
                      var i = null != o ? n.document.elementFromPoint(o.x, o.y) : void 0,
                        a = i && t.contains(i)
                      return i === t || a ? n.handleMove(r, e) : void 0
                    }
                  }
                  return (
                    this.addEventListener(this.document.body, "move", r),
                    (this.targetNodes[e] = t),
                    function () {
                      n.document &&
                        (delete n.targetNodes[e], n.removeEventListener(n.document.body, "move", r))
                    }
                  )
                }
              },
              {
                key: "getTopMoveStartHandler",
                value: function () {
                  return this.options.delayTouchStart || this.options.delayMouseStart
                    ? this.handleTopMoveStartDelay
                    : this.handleTopMoveStart
                }
              },
              {
                key: "installSourceNodeRemovalObserver",
                value: function (e) {
                  var t = this
                  this.uninstallSourceNodeRemovalObserver(),
                    (this.draggedSourceNode = e),
                    (this.draggedSourceNodeRemovalObserver = new MutationObserver(function () {
                      e &&
                        !e.parentElement &&
                        (t.resurrectSourceNode(), t.uninstallSourceNodeRemovalObserver())
                    })),
                    e &&
                      e.parentElement &&
                      this.draggedSourceNodeRemovalObserver.observe(e.parentElement, { childList: !0 })
                }
              },
              {
                key: "resurrectSourceNode",
                value: function () {
                  this.document &&
                    this.draggedSourceNode &&
                    ((this.draggedSourceNode.style.display = "none"),
                    this.draggedSourceNode.removeAttribute("data-reactid"),
                    this.document.body.appendChild(this.draggedSourceNode))
                }
              },
              {
                key: "uninstallSourceNodeRemovalObserver",
                value: function () {
                  this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(),
                    (this.draggedSourceNodeRemovalObserver = void 0),
                    (this.draggedSourceNode = void 0)
                }
              },
              {
                key: "window",
                get: function () {
                  return this.options.window
                }
              },
              {
                key: "document",
                get: function () {
                  if (this.window) return this.window.document
                }
              }
            ]) && ee(t.prototype, n),
            r && ee(t, r),
            e
          )
        })(),
        oe = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          return new re(e, t, n)
        },
        ie = n("Y4Oj")
      const ae = ((se = "OBJECT_TREE"), (e) => se + "__" + e)
      var se
      const ce = ae("SET_NODES"),
        ue = ae("SYNC_NODES"),
        le = ae("UPDATE_NODE"),
        de = ae("UPDATE_NODES"),
        fe = ae("RESET_TREE"),
        he = ae("SET_SELECTED_IDS"),
        pe = ae("DROP_SELECTION"),
        ge = ae("SELECT_PREVIOUS"),
        ve = ae("SELECT_NEXT"),
        be = ae("MULTI_SELECT_PREVIOUS"),
        ye = ae("MULTI_SELECT_NEXT"),
        me = ae("PROCESS_DROP_TARGET"),
        Oe = ae("UPDATE_DROP_TARGET"),
        _e = ae("HIDE_DROP_TARGET"),
        Se = ae("START_MULTI_SELECT"),
        we = ae("STOP_MULTI_SELECT"),
        De = (ae("REMOVE_NODE"), ae("SET_FOCUSED_NODE")),
        Te = ae("SCROLL_TO_ID"),
        je = ae("SET_IS_SELECTED"),
        Ce = ae("SET_IS_EXPANDED"),
        Ee = ae("SET_DISABLED_NODES"),
        Me = ae("MOVE_NODES"),
        Ie = (ae("START_DRAG"), ae("END_DRAG")),
        Pe = () => ({ type: ge }),
        ke = () => ({ type: ve }),
        xe = () => ({ type: be }),
        Ne = () => ({ type: ye }),
        Re = (e, t, n, r, o) => ({
          type: me,
          dropTarget: e,
          dropType: t,
          isHoveredLeft: n,
          boundBox: r,
          isLastChild: o
        }),
        Ae = () => ({ type: pe }),
        Le = (e) => ({ type: he, ids: e }),
        Be = (e, t, n) => ({ type: Me, ids: e, targetId: t, dropType: n }),
        He = () => ({ type: Se }),
        Ge = () => ({ type: we }),
        Fe = (e) => ({ type: De, nodeId: e }),
        Ue = (e) => ({ type: Te, nodeId: e }),
        ze = (e, t, n = 0) => ({ type: je, nodeId: e, isSelected: t, mode: n }),
        Ve = (e, t) => ({ type: Ce, nodeId: e, isExpanded: t }),
        We = (e) => ({ type: Ee, ids: e }),
        Ke = () => ({ type: Ie })
      var qe = n("G4qV")
      const Qe = (e) => e.nodes,
        Xe = (e) => e.selection,
        Ze = (e) => e.dropTarget,
        Ye = (e) => e.expanded,
        Je = (e) => e.scrollToId,
        $e = (e, t) => t,
        et = Object(qe.a)([Qe, $e], (e, t) => e[t]),
        tt = Object(qe.a)([Xe, $e], (e, t) => e.ids.includes(t)),
        nt = Object(qe.a)([Ye, $e], (e, t) => e.includes(t)),
        rt = Object(qe.a)([(e) => e.disabled, Xe, $e], (e, t, n) => !t.ids.includes(n) && e.includes(n)),
        ot = Object(qe.a)(Qe, (e) => Object.keys(e)),
        it = Object(qe.a)(Xe, ({ ids: e }) => e),
        at = Object(qe.a)(Xe, ({ lastFocusedNodeId: e }) => e),
        st = Object(qe.a)(Xe, ({ isMultiSelecting: e }) => e),
        ct = Object(qe.a)([Qe, it], (e, t) => t.map((t) => e[t])),
        ut = Object(qe.a)(Qe, (e) => Object.values(e).filter((e) => 0 === e.level)),
        lt = Object(qe.a)([Qe, ut], (e, t) =>
          t.reduce((t, n) => [...t, ...dt(e, Object(D.ensureDefined)(n))], [])
        )
      function dt(e, t) {
        const n = []
        for (const r of t.children) n.push(e[r]), n.push(...dt(e, e[r]))
        return n
      }
      const ft = Object(qe.a)([Qe, ut, Ye], (e, t, n) => {
          const r = new Set(n)
          return t.reduce((t, n) => [...t, ...pt(e, Object(D.ensureDefined)(n), r)], [])
        }),
        ht = Object(qe.a)([Qe, it, Ye], (e, t, n) => {
          const r = new Set(n)
          return [{ id: "drag-list", level: -1, children: t }].reduce(
            (t, n) => [...t, ...pt(e, Object(D.ensureDefined)(n), r)],
            []
          )
        })
      function pt(e, t, n) {
        const r = []
        for (const o of t.children) {
          const t = e[o]
          void 0 !== t && (r.push(t), n.has(o) && r.push(...pt(e, t, n)))
        }
        return r
      }
      function* gt(e) {
        const { selectedIds: t, nodes: n } = yield Object(w.b)(e),
          r = n.reduce((e, t) => Object.assign(Object.assign({}, e), { [t.id]: t }), {})
        yield Object(w.e)(((e) => ({ type: ce, nodes: e }))(r)), yield Object(w.e)(Le(t))
        !at(yield Object(w.f)()) && t.length > 0 && (yield Object(w.e)(Fe(t[0])), yield Object(w.e)(Ue(t[0])))
      }
      function* vt(e) {
        for (;;) {
          if ((yield Object(w.g)([Se, we])).type === Se) {
            const t = ot(yield Object(w.f)()).filter((t) => !e(t))
            yield Object(w.e)(We(t))
          } else yield Object(w.e)(We([]))
        }
      }
      function* bt() {
        for (;;) {
          const { type: e } = yield Object(w.g)([ye, be]),
            t = yield Object(w.f)(),
            n = lt(t),
            r = n.length,
            o = at(t),
            i = n.findIndex((e) => e.id === o),
            a = [...it(t)]
          if ((e === be && 0 === i) || (e === ye && i === r - 1)) continue
          const s = Dt(t, e === ye ? "next" : "previous", n, i),
            { id: c } = s
          a.includes(c) && o
            ? (yield Object(w.e)(ze(o, !1, 1)), yield Object(w.e)(Fe(c)))
            : yield Object(w.e)(ze(c, !0, 1)),
            yield Object(w.e)(Ue(c))
        }
      }
      function* yt(e, t) {
        for (;;) {
          const { type: n } = yield Object(w.g)([ve, ge]),
            r = yield Object(w.f)(),
            o = lt(r),
            i = at(r),
            a = o.findIndex((e) => e.id === i),
            s = n === ve ? "next" : "previous",
            c = Dt(r, s, o, a),
            { id: u } = c
          e ? e([u], s) : yield Object(w.e)(Le([u])), t && t(u), yield Object(w.e)(Fe(u))
        }
      }
      function* mt(e, t = () => !0) {
        for (;;) {
          const { mode: n, nodeId: r, isSelected: o } = yield Object(w.g)(je)
          let i = [...it(yield Object(w.f)())]
          const a = lt(yield Object(w.f)())
          if (1 === n) o ? i.push(r) : i.splice(i.indexOf(r), 1)
          else if (2 === n && i.length > 0) {
            const e = at(yield Object(w.f)())
            let n = a.findIndex((t) => t.id === e)
            ;-1 === n && (n = a.reduce((e, t, n) => (i.includes(t.id) ? n : e), -1))
            const o = a.findIndex((e) => e.id === r)
            if (n !== o)
              for (let r = Math.min(n, o); r <= Math.max(n, o); r++) {
                const e = a[r].id
                !i.includes(e) && t(e) && i.push(e)
              }
          } else i = r ? [r] : []
          const s = new Set(i)
          ;(i = a.reduce((e, t) => (s.has(t.id) && e.push(t.id), e), [])),
            e ? e(i) : yield Object(w.e)(Le(i)),
            yield Object(w.e)(Fe(r))
        }
      }
      function* Ot(e = () => !0, t) {
        const { dropTarget: n, dropType: r, isHoveredLeft: o, boundBox: i, isLastChild: a } = t,
          s = Ze(yield Object(w.f)()),
          c = et(yield Object(w.f)(), Object(D.ensureDefined)(n.parentId)),
          u = a && "after" === r,
          l = ct(yield Object(w.f)()),
          d = !u || (!o && e(l, n, r)) ? n : c,
          f = (s.node && s.node.id !== d.id) || s.dropType !== r
        l.map((e) => e.id).includes(d.id)
          ? yield Object(w.e)({ type: _e })
          : f &&
            e(l, d, r) &&
            (yield Object(w.e)(((e, t, n) => ({ type: Oe, node: e, dropType: t, boundBox: n }))(d, r, i)))
      }
      function* _t(e) {
        yield Object(w.h)(0, me, Ot, e)
      }
      function* St(e) {
        for (;;) {
          yield Object(w.g)(pe)
          const t = ct(yield Object(w.f)()),
            { node: n, dropType: r } = Ze(yield Object(w.f)())
          if (n && r) {
            const o = new CustomEvent("tree-node-drop", { detail: { nodes: t, target: n.id, type: r } })
            if ((e && e(o), !o.defaultPrevented)) {
              const e = it(yield Object(w.f)())
              yield Object(w.e)(Be(e, n.id, r))
            }
          }
        }
      }
      function* wt(e) {
        for (;;) {
          yield Object(w.g)(Me)
          e(Qe(yield Object(w.f)()))
        }
      }
      function Dt(e, t, n, r) {
        const o = n.length
        let i,
          a = 0
        for (; !i || (Math.abs(a) < o && (s = i).level > 1 && !nt(e, Object(D.ensureDefined)(s.parentId))); )
          (a += "next" === t ? 1 : -1), (i = n[(r + a + o) % o])
        var s
        return i
      }
      function* Tt(e = {}) {
        const {
            saga: t,
            onDrop: n,
            canMove: r,
            onMove: o,
            onSelect: i,
            onKeyboardSelect: a,
            initState: s,
            canBeAddedToSelection: c
          } = e,
          u = [
            Object(w.d)(_t, r),
            Object(w.d)(St, n),
            Object(w.d)(mt, i, c),
            Object(w.d)(yt, i, a),
            Object(w.d)(bt)
          ]
        for (
          t && u.push(Object(w.d)(t)), o && u.push(Object(w.d)(wt, o)), c && u.push(Object(w.d)(vt, c));
          ;

        ) {
          s && (yield Object(w.b)(gt, s))
          const e = yield Object(w.a)(u)
          yield Object(w.g)(fe)
          for (const t of e) yield Object(w.c)(t)
        }
      }
      var jt = n("ANjH"),
        Ct = n("ogJP")
      const Et = Object(s.getLogger)("Platform.GUI.ObjectTree.CallApi")
      const Mt = { ids: [], lastFocusedNodeId: void 0, isMultiSelecting: !1 }
      const It = { node: void 0, dropType: void 0, boundBox: void 0 }
      const Pt = Object(jt.combineReducers)({
        nodes: function (e = {}, t) {
          switch (t.type) {
            case ce:
              return t.nodes
            case ue: {
              const { nodes: n } = t,
                r = n.map((e) => e.id),
                o = Object.assign({}, e)
              for (const t of Object.keys(e))
                if (!r.includes(t)) {
                  const { parentId: e } = o[t]
                  e &&
                    (o[e] = Object.assign(Object.assign({}, o[e]), {
                      children: o[e].children.filter((e) => e !== t)
                    })),
                    delete o[t]
                }
              for (const e of n) {
                const t = e.id
                if (o.hasOwnProperty(t)) {
                  !Object(Ct.deepEquals)(o[t].children, e.children)[0] &&
                    (o[t] = Object.assign(Object.assign({}, o[t]), { children: [...e.children] }))
                } else {
                  o[t] = e
                  const { parentId: n } = e
                  if (n && !o[n].children.includes(t)) throw new Error("Not implemented")
                }
              }
              return o
            }
            case le: {
              const { type: n, nodeId: r } = t,
                o = Object(G.a)(t, ["type", "nodeId"])
              return Object.assign(Object.assign({}, e), { [r]: Object.assign(Object.assign({}, e[r]), o) })
            }
            case de: {
              const { nodes: n } = t,
                r = Object.assign({}, e)
              return (
                Object.keys(n).forEach((e) => {
                  r[e] = Object.assign(Object.assign({}, r[e]), n[e])
                }),
                Object.assign(Object.assign({}, e), r)
              )
            }
            case Me: {
              const { ids: n, targetId: r, dropType: o } = t,
                i = Object(D.ensureDefined)(e[r].parentId),
                a = e[i],
                s = {}
              for (const t of n) {
                const n = e[t]
                if (n.parentId) {
                  const r = s[n.parentId] || e[n.parentId]
                  s[n.parentId] = Object.assign(Object.assign({}, r), {
                    children: r.children.filter((e) => e !== t)
                  })
                }
                s[t] = Object.assign(Object.assign({}, n), { parentId: i, level: a.level + 1 })
              }
              const c = a.children.filter((e) => !n.includes(e))
              return (
                c.splice(
                  ((e, t, n) => {
                    switch (n) {
                      case "before":
                        return e.indexOf(Object(D.ensureDefined)(t))
                      case "inside":
                        return e.length
                      case "after":
                        return e.indexOf(Object(D.ensureDefined)(t)) + 1
                      default:
                        return 0
                    }
                  })(c, r, o),
                  0,
                  ...n
                ),
                (s[i] = Object.assign(Object.assign({}, e[i]), { children: c, isExpanded: !0 })),
                Object.assign(Object.assign({}, e), s)
              )
            }
            default:
              return e
          }
        },
        selection: function (e = Mt, t) {
          switch (t.type) {
            case he: {
              const { ids: n } = t
              return Object.assign(Object.assign({}, e), {
                ids: n,
                lastFocusedNodeId: n.length > 0 ? e.lastFocusedNodeId : void 0
              })
            }
            case Se:
              return Object.assign(Object.assign({}, e), { isMultiSelecting: !0 })
            case we:
              return Object.assign(Object.assign({}, e), { isMultiSelecting: !1 })
            case De:
              return Object.assign(Object.assign({}, e), { lastFocusedNodeId: t.nodeId })
            case ue: {
              const n = new Set(t.nodes.map((e) => e.id))
              return (
                e.lastFocusedNodeId && !n.has(e.lastFocusedNodeId) && delete e.lastFocusedNodeId,
                Object.assign(Object.assign({}, e), { ids: e.ids.filter((e) => n.has(e)) })
              )
            }
            default:
              return e
          }
        },
        dropTarget: function (e = It, t) {
          switch (t.type) {
            case Oe: {
              const { node: n, dropType: r, boundBox: o } = t
              return Object.assign(Object.assign({}, e), { node: n, dropType: r, boundBox: o })
            }
            case _e:
            case Ie:
            case fe:
              return Object.assign({}, It)
            default:
              return e
          }
        },
        expanded: function (e = [], t) {
          switch (t.type) {
            case Ce: {
              const { nodeId: n, isExpanded: r } = t
              if (r) return [...e, n]
              const o = [...e]
              return o.splice(e.indexOf(n), 1), o
            }
            default:
              return e
          }
        },
        disabled: function (e = [], t) {
          switch (t.type) {
            case Ee:
              return [...t.ids]
            default:
              return e
          }
        },
        scrollToId: function (e = null, t) {
          switch (t.type) {
            case Te:
              return null === t.nodeId ? null : { id: t.nodeId }
            default:
              return e
          }
        }
      })
      var kt = n("iR1w"),
        xt = n("qFKp")
      var Nt = n("/3z9"),
        Rt = n("3F0O"),
        At = n("8d0Q")
      const Lt = r.createContext({ size: 0, smallSizeTreeNodeAction: 1 }),
        Bt = { [Nt.Modifiers.Mod]: 1, [Nt.Modifiers.Shift]: 2 }
      var Ht = n("+5L9"),
        Gt = n("co4r")
      const Ft = () => {}
      class Ut extends o.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._ref = null),
            (this._handleRef = (e) => {
              this._ref = e
              const { connectDragSource: t, connectDropTarget: n, connectDragPreview: r } = this.props
              Object(D.ensureDefined)(n)(this._ref),
                Object(D.ensureDefined)(t)(this._ref),
                Object(D.ensureDefined)(r)(Object(z.getEmptyImage)(), { captureDraggingState: !0 })
            }),
            (this._handleTouchStart = (e) => {
              const t = (e, t) => {
                  const n = (function (e, t) {
                    try {
                      const n = document.createEvent("TouchEvent")
                      return (
                        n.initTouchEvent(
                          e,
                          !0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          t.touches,
                          t.targetTouches,
                          t.changedTouches
                        ),
                        n
                      )
                    } catch (n) {
                      return null
                    }
                  })(e, t)
                  if (n) return n
                  const r = Array.from(t.changedTouches),
                    o = Array.from(t.touches),
                    i = Array.from(t.targetTouches)
                  return new TouchEvent(e, { bubbles: !0, changedTouches: r, touches: o, targetTouches: i })
                },
                n = e.target
              if (n instanceof Element) {
                const e = (e) => {
                    const r = e
                    if (!n.isConnected) {
                      r.preventDefault()
                      const e = t("touchmove", r)
                      document.body.dispatchEvent(e)
                    }
                  },
                  r = (o) => {
                    const i = o
                    if (!n.isConnected) {
                      i.preventDefault()
                      const e = t("touchend", i)
                      document.body.dispatchEvent(e)
                    }
                    n.removeEventListener("touchend", r), n.removeEventListener("touchmove", e)
                  }
                n.addEventListener("touchend", r), n.addEventListener("touchmove", e)
              }
            })
        }
        componentDidMount() {
          var e
          null === (e = this._ref) || void 0 === e || e.addEventListener("touchstart", this._handleTouchStart)
        }
        componentWillUnmount() {
          var e
          null === (e = this._ref) ||
            void 0 === e ||
            e.removeEventListener("touchstart", this._handleTouchStart)
        }
        render() {
          return o.a.createElement(zt, Object.assign({}, this.props, { reference: this._handleRef }))
        }
        getNode() {
          return Object(D.ensureNotNull)(this._ref)
        }
      }
      const zt = (e) => {
          const {
              id: t,
              isSelected: n,
              isOffset: i,
              isExpandable: a,
              setIsSelected: s,
              isDisabled: c,
              isExpanded: u,
              onClick: l,
              parentId: d,
              setIsExpanded: f,
              reference: h,
              isFirstListItem: p,
              isLastListItem: g,
              nodeRenderer: v,
              isChildOfSelected: b = !1
            } = e,
            { size: y, smallSizeTreeNodeAction: m } = Object(r.useContext)(Lt),
            O = Object(r.useRef)(null),
            _ = Object(Rt.a)((e) => (O.current = e), h)
          let [S, w] = Object(At.b)()
          return (
            xt.CheckMobile.any() && ((S = n), (w = { onMouseOut: Ft, onMouseOver: Ft })),
            o.a.createElement(
              "div",
              Object.assign(
                {
                  className: T(
                    Gt.wrap,
                    n && Gt.selected,
                    b && Gt.childOfSelected,
                    c && Gt.disabled,
                    a && Gt.expandable
                  ),
                  onClick:
                    1 === y && 0 === m
                      ? D
                      : function (e) {
                          if (e.defaultPrevented) return
                          const r = Bt[Object(Nt.modifiersFromEvent)(e)] || 0
                          !c && s && s(t, !n, r)
                          l && 0 === r && l(e, t)
                        },
                  onContextMenu: D,
                  ref: _
                },
                w
              ),
              a &&
                o.a.createElement(C.a, {
                  icon: Ht,
                  className: T(Gt.expandHandle, u && Gt.expanded),
                  onClick: function (e) {
                    e.preventDefault(), a && f(t, !u)
                  },
                  onMouseDown: function (e) {
                    e.preventDefault()
                  }
                }),
              v({
                id: t,
                isOffset: i,
                parentId: d,
                isDisabled: c,
                isSelected: n,
                isChildOfSelected: b,
                isHovered: S,
                isExpanded: u,
                isFirstListItem: p,
                isLastListItem: g
              })
            )
          )
          function D() {
            c || n || !s || s(t, !0)
          }
        },
        Vt = o.a.createContext({})
      function Wt(e, t) {
        const { id: n } = t,
          r = et(e, n),
          o = tt(e, n)
        let i = !1,
          a = r.parentId
        for (; a && !i; ) (i = tt(e, a)), (a = et(e, a).parentId)
        return Object.assign(Object.assign({}, r), {
          isSelected: o,
          isChildOfSelected: i,
          isExpanded: r.children.length > 0 && nt(e, n),
          isExpandable: r.children.length > 0,
          isDisabled: rt(e, n)
        })
      }
      function Kt(e) {
        return Object(jt.bindActionCreators)(
          {
            setIsExpanded: Ve,
            processDropTarget: Re,
            dropSelection: Ae,
            selectNext: ke,
            selectPrevious: Pe,
            setIsSelected: ze,
            endDrag: Ke
          },
          e
        )
      }
      const qt = Object(ie.DragSource)(
          "node",
          {
            beginDrag: (e) => {
              const { id: t, isDisabled: n, isSelected: r } = e
              return n || r || e.setIsSelected(t, !0), e
            },
            endDrag: (e) => e.endDrag()
          },
          (e) => ({ connectDragSource: e.dragSource(), connectDragPreview: e.dragPreview() })
        ),
        Qt = Object(ie.DropTarget)(
          "node",
          {
            hover: (e, t, n) => {
              if (!n) return
              const r = n.getNode(),
                o = r.getBoundingClientRect(),
                i = o.bottom - o.top,
                a = t.getClientOffset()
              if (a) {
                const t = a.y - o.top
                let n, s
                if (
                  ((n =
                    0 === e.children.length
                      ? t < i / 2
                        ? "before"
                        : "after"
                      : t < i / 3
                      ? "before"
                      : e.isExpanded || (t >= i / 3 && t < (2 * i) / 3)
                      ? "inside"
                      : "after"),
                  void 0 !== e.getContainerElement)
                ) {
                  const t = e.getContainerElement().getBoundingClientRect()
                  s = {
                    top: o.top - t.top,
                    left: o.left - t.left,
                    bottom: o.top - t.top + o.height,
                    right: o.left - t.left + o.width,
                    height: o.height,
                    width: o.width
                  }
                } else
                  s = {
                    top: r.offsetTop,
                    left: r.offsetLeft,
                    bottom: r.offsetTop + r.offsetHeight,
                    right: r.offsetLeft + r.offsetWidth,
                    height: r.offsetHeight,
                    width: r.offsetWidth
                  }
                e.processDropTarget(e, n, a.x - o.left < 48, s, e.isLastChild)
              }
            }
          },
          (e) => ({ connectDropTarget: e.dropTarget() })
        ),
        Xt = Object(U.b)(Wt, Kt, null, { context: Vt })(qt(Qt(Ut))),
        Zt = Object(U.b)(Wt, Kt, null, { context: Vt })(zt)
      var Yt = n("d700"),
        Jt = n("AiMB")
      function $t(e) {
        const t = e(),
          n = Object(r.useRef)(t)
        n.current = t
        const [o, i] = Object(r.useState)(n.current),
          a = Object(r.useRef)(null)
        return (
          Object(r.useEffect)(() => {
            null === a.current &&
              (a.current = requestAnimationFrame(() => {
                ;(a.current = null), i(n.current)
              }))
          }),
          Object(r.useEffect)(
            () => () => {
              a.current && cancelAnimationFrame(a.current)
            },
            []
          ),
          o
        )
      }
      function en(e) {
        const { dropTargetOffset: t, mousePosition: n } = e
        if (!t) return { display: "none" }
        const { x: r, y: o } = t,
          i = n && t ? n.y - t.y : 0,
          a = `translate(${r + (n && t ? n.x - t.x : 0)}px, ${o + i}px)`
        return { transform: a, WebkitTransform: a }
      }
      const tn = {
        top: 0,
        left: 0,
        position: "fixed",
        pointerEvents: "none",
        zIndex: 100,
        opacity: 0.5,
        width: 300,
        backgroundColor: "red"
      }
      const nn = Object(ie.DragLayer)(function (e) {
        return {
          isDragging: e.isDragging(),
          mousePosition: e.getClientOffset(),
          dropTargetOffset: e.getSourceClientOffset()
        }
      })(
        Object(U.b)(
          function (e) {
            return { items: ht(e) }
          },
          null,
          null,
          { context: Vt }
        )(function (e) {
          const { items: t, isDragging: n, nodeRenderer: r, dragPreviewRenderer: i } = e
          return $t(function () {
            return n
              ? o.a.createElement(
                  Jt.a,
                  null,
                  o.a.createElement(
                    "div",
                    { style: Object.assign(Object.assign({}, tn), en(e)) },
                    t.map((e) => {
                      if (i) {
                        const t = i
                        return o.a.createElement(t, Object.assign({ key: e.id }, e))
                      }
                      return o.a.createElement(Zt, {
                        id: e.id,
                        key: e.id,
                        nodeRenderer: r,
                        isDragPreview: !0,
                        isOffset: e.level > 1
                      })
                    })
                  )
                )
              : null
          })
        })
      )
      var rn = n("0lNN"),
        on = n("n9z6")
      const an = o.a.forwardRef((e, t) => {
          const n = Object(r.useRef)(null)
          return (
            e.connectDropTarget(n),
            Object(r.useImperativeHandle)(
              t,
              () => ({ getNode: () => Object(D.ensureNotNull)(n.current) }),
              []
            ),
            o.a.createElement("div", { ref: n, style: { height: "100%", width: "100%" } })
          )
        }),
        sn = Object(ie.DropTarget)(
          "node",
          {
            hover: (e, t, n) => {
              if (!n) return
              const r = t.getClientOffset()
              if (null === r) return
              const o = e.getOrderedNodes()
              if (0 === o.length) return
              const i = n.getNode().getBoundingClientRect(),
                a = e.getContainerElement().getBoundingClientRect()
              if ("first" === e.type) {
                const t = {
                  top: i.top - a.top + i.height,
                  left: i.left - a.left,
                  bottom: i.top - a.top + i.height,
                  right: i.left - a.left + i.width,
                  height: 0,
                  width: i.width
                }
                e.processDropTarget(o[0], "before", !1, t, !1)
              }
              if ("last" === e.type) {
                const t = r.x - i.left < 48,
                  n = o[o.length - 1],
                  s = t && 2 === n.level ? Object(D.ensureDefined)(o.find((e) => e.id === n.parentId)) : n,
                  c = {
                    top: i.top - a.top,
                    left: i.left - a.left,
                    bottom: i.top - a.top,
                    right: i.left - a.left + i.width,
                    height: i.height,
                    width: i.width
                  }
                e.processDropTarget(s, "after", t, c, !1)
              }
            }
          },
          (e) => ({ connectDropTarget: e.dropTarget() })
        )(an),
        cn = o.a.createContext({ isOver: !1, transform: void 0 })
      var un = n("4ceR")
      function ln(e) {
        const { dropType: t, boundBox: n } = e,
          { top: r, bottom: o, left: i } = Object(D.ensureDefined)(n)
        return [i, "before" === t || "inside" === t ? r : o]
      }
      const dn = Object(ie.DragLayer)(function (e) {
          return { isDragging: e.isDragging() }
        })(
          Object(U.b)(
            function (e) {
              const { boundBox: t, dropType: n, node: r } = Ze(e)
              return { boundBox: t, dropType: n, level: r ? r.level : void 0 }
            },
            null,
            null,
            { context: Vt }
          )(function (e) {
            const { dropType: t, boundBox: n, isDragging: o, level: i, transform: a = ln } = e
            return $t(function () {
              if (!o || !t || !n) return null
              const s = { [un.dropTarget]: "inside" !== t, [un.dropTargetInside]: "inside" === t },
                { width: c, height: u } = n,
                [l, d] = a(e),
                f = `translate(${l}px, ${d}px)`
              return r.createElement("div", {
                className: T(s),
                style: {
                  position: "absolute",
                  transform: f,
                  WebkitTransform: f,
                  top: 0,
                  left: 2 === i ? "46px" : 0,
                  width: 2 === i ? c - 46 + "px" : c,
                  height: "inside" === t ? u : "2px"
                }
              })
            })
          })
        ),
        fn = o.a.forwardRef((e, t) => {
          const n = Object(r.useContext)(cn)
          return o.a.createElement(
            "div",
            Object.assign({}, e, { ref: t }),
            e.children,
            n.isOver && o.a.createElement(dn, { transform: n.transform })
          )
        })
      var hn = n("Ialn"),
        pn = n("DGxW")
      const gn = 38 + Nt.Modifiers.Shift,
        vn = 40 + Nt.Modifiers.Shift
      const bn = o.a.forwardRef(function (e, t) {
          const {
              navigationKeys: n,
              renderList: i,
              stopMultiSelect: a,
              startMultiSelect: s,
              isMultiSelecting: c,
              nodeRenderer: u,
              dragPreviewRenderer: l,
              className: d,
              connectDropTarget: f,
              readOnly: h,
              onClick: p,
              dropLayerTransform: g,
              setFocusedNode: v,
              scrollToId: b,
              rowHeight: y,
              onMultiSelectPrevious: m,
              onMultiSelectNext: O,
              onMoveCursorToNext: _,
              onMoveCursorToPrevious: S,
              outerRef: w,
              width: T,
              height: C,
              isOver: E,
              processDropTarget: M
            } = e,
            I = Object(r.useContext)(P),
            k = Object(r.useRef)(null)
          Object(r.useEffect)(() => {
            const e = (e) => {
                ;[Nt.Modifiers.Mod, Nt.Modifiers.Shift].includes(Object(Nt.modifiersFromEvent)(e)) && s()
              },
              t = (e) => {
                c && ![Nt.Modifiers.Mod, Nt.Modifiers.Shift].includes(Object(Nt.modifiersFromEvent)(e)) && a()
              }
            return (
              document.addEventListener("keydown", e),
              document.addEventListener("keyup", t),
              document.addEventListener("mousemove", t),
              () => {
                document.removeEventListener("keydown", e),
                  document.removeEventListener("keyup", t),
                  document.removeEventListener("mousemove", t)
              }
            )
          }, [c]),
            (function (e) {
              Object(r.useEffect)(() => {
                if (xt.isEdge) {
                  let t = null
                  const n = Object(D.ensureNotNull)(e.current),
                    r = (e) => {
                      if (e.target instanceof Element) {
                        const n = Object(D.ensureNotNull)(e.target.closest("[draggable]"))
                        n instanceof HTMLElement &&
                          ((n.style.opacity = "0"),
                          (t = requestAnimationFrame(() => (n.style.opacity = "1"))))
                      }
                    }
                  return (
                    n.addEventListener("dragstart", r),
                    () => {
                      n.removeEventListener("dragstart", r), null !== t && cancelAnimationFrame(t)
                    }
                  )
                }
                return () => {}
              }, [])
            })(k)
          const x = Object(r.useCallback)(() => Object(D.ensureNotNull)(K.current), []),
            N = Object(r.useCallback)(() => i, [i]),
            R = Object(r.useMemo)(() => {
              const e = h ? Zt : Xt,
                t = []
              let n
              t.push({
                type: "padding",
                node: o.a.createElement(sn, {
                  type: "first",
                  key: "padding-top",
                  getContainerElement: x,
                  getOrderedNodes: N,
                  processDropTarget: M
                })
              })
              for (let r = 0; r < i.length; r++) {
                const a = i[r]
                1 === a.level &&
                  (void 0 !== n &&
                    n !== a.parentId &&
                    t.push({
                      type: "separator",
                      node: o.a.createElement("div", { key: n + "_separator", className: pn.separator })
                    }),
                  (n = a.parentId)),
                  t.push({
                    type: "node",
                    node: o.a.createElement(e, {
                      id: a.id,
                      key: a.id,
                      isFirstListItem: 0 === r,
                      isLastListItem: r === i.length - 1,
                      isExpandable: a.children.length > 0,
                      nodeRenderer: u,
                      readOnly: h,
                      onClick: p,
                      isOffset: a.level > 1,
                      getContainerElement: x
                    })
                  })
              }
              return (
                t.push({
                  type: "padding",
                  node: o.a.createElement(sn, {
                    type: "last",
                    key: "padding-bottom",
                    getContainerElement: x,
                    getOrderedNodes: N,
                    processDropTarget: M
                  })
                }),
                t
              )
            }, [i]),
            A = Object(r.useRef)([])
          A.current = R
          const L = Object(r.useCallback)((e) => {
              let { style: t } = e
              const { index: n } = e
              return (
                n === A.current.length - 1 &&
                  ((t = Object.assign(Object.assign({}, t), { bottom: 0, minHeight: t.height })),
                  delete t.height),
                o.a.createElement("div", { style: t }, A.current[n].node)
              )
            }, []),
            B = Object(r.useCallback)(
              (e) => {
                const t = A.current[e]
                return "padding" === t.type ? 6 : "function" == typeof y ? y(e, t) : y
              },
              [y]
            ),
            H = Object(r.useCallback)((e) => Object(D.ensure)(A.current[e].node.key), []),
            G = Object(r.useMemo)(
              () => (null === b ? { index: -1 } : { index: A.current.findIndex((e) => e.node.key === b.id) }),
              [b]
            )
          f(k)
          const [F, U, z, V] = Object(on.a)(),
            W = Object(r.useRef)(null)
          Object(r.useEffect)(() => Object(D.ensureNotNull)(W.current).resetAfterIndex(0, !0), [R]),
            Object(r.useEffect)(() => Object(D.ensureNotNull)(W.current).scrollToItem(G.index), [G])
          const K = Object(r.useRef)(null),
            q = Object(r.useMemo)(() => ({ isOver: E, transform: g }), [E, g]),
            Q = Object(r.useRef)(null),
            X = Object(r.useRef)({
              startScroll(e) {
                const t = () => {
                  null !== z.current &&
                    ((Q.current = requestAnimationFrame(t)), z.current.scrollBy({ top: e }))
                }
                this.stopScroll(), t()
              },
              stopScroll() {
                null !== Q.current && (cancelAnimationFrame(Q.current), (Q.current = null))
              },
              getListElement: () => z.current
            })
          return (
            Object(r.useImperativeHandle)(t, () => X.current, []),
            Object(r.useEffect)(() => () => X.current.stopScroll(), [E]),
            o.a.createElement(
              cn.Provider,
              { value: q },
              o.a.createElement(
                "div",
                Object.assign({}, U, {
                  className: j()(pn.tree, d),
                  ref: k,
                  tabIndex: -1,
                  onKeyDown: function (e) {
                    const t = Object(Nt.hashFromEvent)(e)
                    if (e.defaultPrevented || Object(Yt.a)(t, e.target)) return
                    I || t !== gn || (e.preventDefault(), m())
                    I || t !== vn || (e.preventDefault(), O())
                    ;(38 === t || (void 0 !== n && "previous" === n[t])) && (e.preventDefault(), S())
                    ;(40 === t || (void 0 !== n && "next" === n[t])) && (e.preventDefault(), _())
                    if ((8 === t || 46 === t) && I) {
                      const { viewModel: e } = I,
                        t = e.selection(),
                        n = t.selected()
                      if (1 !== n.length) return
                      const r = e.getNextNodeIdAfterRemove(n[0])
                      if (null === r) return
                      e.onChange().subscribe(
                        null,
                        () => {
                          if (t.selected().length) return
                          const n = e.entity(r)
                          n && (t.set([n]), v(r))
                        },
                        !0
                      )
                    }
                  }
                }),
                o.a.createElement(rn.a, Object.assign({}, F, { className: pn.overlayScrollWrap })),
                o.a.createElement(kt.b, {
                  ref: function (e) {
                    W.current = e
                  },
                  className: pn.listContainer,
                  width: T,
                  height: C,
                  itemCount: R.length,
                  itemSize: B,
                  children: L,
                  itemKey: H,
                  outerRef: function (e) {
                    ;(z.current = e), w && w(e)
                  },
                  innerRef: function (e) {
                    K.current = e
                  },
                  innerElementType: fn,
                  onItemsRendered: function () {
                    V()
                  },
                  overscanCount: 20,
                  direction: Object(hn.isRtl)() ? "rtl" : "ltr"
                }),
                o.a.createElement(nn, { dragPreviewRenderer: l, nodeRenderer: u })
              )
            )
          )
        }),
        yn = Object(ie.DropTarget)(
          "node",
          {
            drop: (e, t, n) => {
              ;("touch" === e.drag || xt.isFF) && n.stopScroll(), t.getItem().dropSelection()
            },
            hover: (e, t, n) => {
              if ("touch" !== e.drag && !xt.isFF) return
              const r = t.getClientOffset()
              if (null === r) return
              const o = n.getListElement()
              if (null === o) return
              const i = o.getBoundingClientRect()
              ;((t, r, o) => {
                const i = Math.abs(t - o),
                  a = Math.abs(t - r)
                if ((a > 40 && i > 40) || (i <= 40 && a <= 40)) return void n.stopScroll()
                var s, c, u, l
                ;(s = a > 20 && a <= 40),
                  (u = i <= 20),
                  (l = a <= 20),
                  (c = i > 20 && i <= 40) || s
                    ? "touch" === e.drag
                      ? n.startScroll(c ? -5 : 5)
                      : n.startScroll(c ? -2 : 2)
                    : (u || l) &&
                      ("touch" === e.drag ? n.startScroll(u ? -10 : 10) : n.startScroll(u ? -5 : 5))
              })(r.y, i.bottom, i.top)
            }
          },
          (e, t) => ({ connectDropTarget: e.dropTarget(), isOver: t.isOver() })
        )(bn)
      const mn = Object(U.b)(
          function (e) {
            return {
              renderList: ft(e),
              orderedNodes: lt(e),
              isMultiSelecting: st(e),
              selectedIds: it(e),
              scrollToId: Je(e)
            }
          },
          function (e) {
            return Object(jt.bindActionCreators)(
              {
                startMultiSelect: He,
                stopMultiSelect: Ge,
                setFocusedNode: Fe,
                processDropTarget: Re,
                onMoveCursorToNext: ke,
                onMoveCursorToPrevious: Pe,
                onMultiSelectPrevious: xe,
                onMultiSelectNext: Ne
              },
              e
            )
          },
          null,
          { context: Vt }
        )(yn),
        On = { delayTouchStart: 100 }
      function _n(e) {
        const {
            canBeAddedToSelection: t,
            initState: n,
            onSelect: i,
            canMove: a,
            onDrop: s,
            onMove: c,
            nodes: u,
            selectedIds: l,
            onKeyboardSelect: d,
            saga: f,
            lastFocusedNodeObject: h,
            lastSyncTimestampRef: p,
            scrollToId: g
          } = e,
          v = Object(G.a)(e, [
            "canBeAddedToSelection",
            "initState",
            "onSelect",
            "canMove",
            "onDrop",
            "onMove",
            "nodes",
            "selectedIds",
            "onKeyboardSelect",
            "saga",
            "lastFocusedNodeObject",
            "lastSyncTimestampRef",
            "scrollToId"
          ]),
          [b, y] = Object(r.useState)(null)
        return (
          Object(r.useEffect)(() => {
            const e = Object(F.b)()
            y(
              (function (e) {
                const t = Object(jt.applyMiddleware)(e)
                return Object(jt.createStore)(Pt, t)
              })(e)
            )
            const r = e.run(Tt, {
              initState: n,
              onKeyboardSelect: d,
              saga: f,
              canMove: a,
              onMove: c,
              onDrop: s,
              onSelect: i,
              canBeAddedToSelection: t
            })
            return () => r.cancel()
          }, []),
          Object(r.useEffect)(
            () => (
              null !== b &&
                u &&
                (p && (p.current = performance.now()), b.dispatch(((e) => ({ type: ue, nodes: e }))(u))),
              () => {}
            ),
            [b, u]
          ),
          Object(r.useEffect)(() => {
            null !== b && l && b.dispatch(Le(l))
          }, [b, l]),
          Object(r.useEffect)(() => {
            null !== b && (null == h ? void 0 : h.id) && b.dispatch(Fe(h.id))
          }, [b, h]),
          null === b ? null : o.a.createElement(Sn, Object.assign({ store: b, scrollToId: g }, v))
        )
      }
      const Sn = o.a.memo(function (e) {
        const { store: t, scrollToId: n } = e,
          i = Object(G.a)(e, ["store", "scrollToId"]),
          a = "touch" === e.drag ? oe : V.a
        return (
          Object(r.useEffect)(() => {
            var e
            t.dispatch(Ue(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : null))
          }, [n]),
          o.a.createElement(
            ie.DndProvider,
            { backend: a, options: On },
            o.a.createElement(U.a, { store: t, context: Vt }, o.a.createElement(mn, Object.assign({}, i)))
          )
        )
      })
      function wn(e, t) {
        Object(L.trackEvent)("Object Tree", e, t)
      }
      function Dn(e) {
        return e.length > 1 ? "Multi select" : e[0].gaLabel()
      }
      function Tn(e) {
        return Object(F.c)((t) => {
          const n = {}
          return (
            e.onChange().subscribe(n, () => t({ type: fe })),
            e.onGroupCreated().subscribe(n, (e) => t(Ve(e, !0))),
            e
              .selection()
              .onChange()
              .subscribe(n, (e) => t(Le(e))),
            () => {
              e.onChange().unsubscribeAll(n),
                e.selection().onChange().unsubscribeAll(n),
                e.onGroupCreated().unsubscribeAll(n)
            }
          )
        }, F.a.expanding())
      }
      function* jn() {
        for (;;) yield Object(w.g)([ve, ge]), wn("Select", "Arrow")
      }
      function* Cn() {
        for (;;) {
          const { mode: e } = yield Object(w.g)(je)
          1 === e && wn("Multi select", "Ctrl"), 2 === e && wn("Multi select", "Shift")
        }
      }
      function* En(e) {
        for (;;) {
          yield Object(w.g)(pe)
          const { node: t, dropType: n } = Ze(yield Object(w.f)())
          if (t) {
            const r = ct(yield Object(w.f)()),
              o = r.map((t) => Object(D.ensureNotNull)(e.entity(t.id)))
            let i = "Drag"
            1 === t.level && "inside" !== n && r.some((e) => 2 === e.level)
              ? (i = "From the group")
              : (2 !== t.level && "inside" !== n) || !r.some((e) => 1 === e.level)
              ? 1 === r.length && r[0].parentId !== t.parentId && (i = "Existing pane")
              : (i = "To the group"),
              wn(i, Dn(o))
          }
        }
      }
      function* Mn(e) {
        yield Object(w.d)(jn), yield Object(w.d)(Cn), yield Object(w.d)(En, e)
      }
      function* In(e) {
        yield Object(w.d)(Mn, e)
        const t = yield Object(w.b)(Tn, e)
        Et.logNormal("Opened object tree data source channel")
        try {
          for (;;) {
            const e = yield Object(w.g)(t)
            yield Object(w.e)(e)
          }
        } finally {
          Et.logNormal("Closed object tree data source channel"), t.close()
        }
      }
      var Pn = n("5VQP")
      const kn = r.createContext(null)
      var xn = n("XAms"),
        Nn = n("9S1y"),
        Rn = n("h5pj")
      const An = Modernizr.mobiletouch ? "touch" : "native"
      function Ln(e) {
        const { viewModel: t, showHeader: n = !0, nodeRenderer: i, isDialog: a = !1 } = e,
          s = Object(r.useRef)(null),
          c = (function (e) {
            const [t, n] = Object(r.useState)(e.getChartId()),
              o = Object(r.useRef)(t)
            return (
              (o.current = t),
              Object(r.useEffect)(() => {
                return (
                  e.onChange().subscribe(null, t),
                  () => {
                    e.onChange().unsubscribe(null, t)
                  }
                )
                function t() {
                  const t = e.getChartId()
                  o.current !== t && n(t)
                }
              }, []),
              t
            )
          })(t),
          [u, l] = Object(Nn.a)(),
          [d, f] = Object(r.useState)(null),
          h = Object(r.useMemo)(() => ({ isTouch: Modernizr.touch, isDialog: a }), [a])
        return o.a.createElement(
          kn.Provider,
          { value: h },
          o.a.createElement(
            P.Provider,
            { value: { viewModel: t } },
            o.a.createElement(
              "div",
              { className: Rn.wrap, onContextMenu: xn.b },
              n && o.a.createElement(B, null),
              o.a.createElement(
                S.a,
                { onMeasure: u },
                o.a.createElement(
                  "div",
                  {
                    className: Rn.space,
                    onClick: function (e) {
                      if (e.defaultPrevented) return
                      if (!(e.target instanceof Element) || null === s.current) return
                      e.target === s.current && t.selection().set([])
                    }
                  },
                  null !== l &&
                    o.a.createElement(_n, {
                      key: c,
                      height: l.height,
                      width: l.width,
                      canBeAddedToSelection: function (e) {
                        const n = t.entity(e)
                        return t.selection().canBeAddedToSelection(n)
                      },
                      nodeRenderer: i,
                      initState: function () {
                        const { nodes: e, selection: n } = t.getState()
                        return { selectedIds: n, nodes: e }
                      },
                      canMove: function (e, n, r) {
                        return t.isSelectionDropable(n.id, r)
                      },
                      drag: An,
                      rowHeight: Bn,
                      onSelect: function (e) {
                        const n = e.map((e) => t.entity(e)).filter((e) => null !== e)
                        t.selection().set(n)
                        const r = Pn.ContextMenuManager.getShown()
                        r && r.hide()
                      },
                      onDrop: function (e) {
                        e.preventDefault()
                        const {
                          detail: { target: n, type: r }
                        } = e
                        t.insertSelection(n, r)
                      },
                      scrollToId: d,
                      saga: function* () {
                        yield Object(w.d)(In, t)
                      },
                      onKeyboardSelect: function (e) {
                        f({ id: e })
                      },
                      outerRef: function (e) {
                        s.current = e
                      }
                    })
                )
              )
            )
          )
        )
      }
      function Bn(e, t) {
        switch (t.type) {
          case "node":
            return 38
          case "separator":
            return 13
        }
      }
      var Hn,
        Gn = n("Kxc7")
      !(function (e) {
        ;(e.Svg = "svg"), (e.Text = "text")
      })(Hn || (Hn = {}))
      var Fn = n("wHCJ"),
        Un = n("+wZE"),
        zn = n("To8B"),
        Vn = n("tyJc"),
        Wn = n("20cQ"),
        Kn = n("zn4F"),
        qn = n("U+QY"),
        Qn = n("gSe6")
      function Xn(e) {
        const { id: t } = e,
          n = Object(r.useContext)(P),
          { viewModel: i } = Object(D.ensureNotNull)(n),
          a = i.entity(t)
        return null === a ? null : o.a.createElement(Zn, Object.assign({}, e, { entity: a }))
      }
      function Zn(e) {
        const {
            id: t,
            isOffset: n,
            isDisabled: i,
            isSelected: a,
            isChildOfSelected: s,
            isHovered: c,
            parentId: u,
            entity: l,
            isExpanded: d
          } = e,
          f = Object(r.useContext)(P),
          h = Object(r.useContext)(kn),
          { size: p } = Object(r.useContext)(Lt),
          [g, v] = Object(r.useState)(!1),
          y = Object(r.useRef)(null),
          [m, O] = Object(r.useState)(l.title()),
          [_, S] = Object(r.useState)(l.isLocked()),
          [w, j] = Object(r.useState)(l.isVisible()),
          [E, M] = Object(r.useState)(l.isActualInterval()),
          [I, k] = Object(r.useState)(!1),
          [x, N] = Object(r.useState)(!1),
          R = Object(r.useRef)(null)
        Object(r.useEffect)(() => {
          const e = {}
          l.onLockChanged().subscribe(e, () => S(l.isLocked())),
            l.onVisibilityChanged().subscribe(e, () => j(l.isVisible()))
          const t = l.onTitleChanged()
          return (
            t && t.subscribe(e, () => O(l.title())),
            l.onIsActualIntervalChange().subscribe(e, () => M(l.isActualInterval())),
            () => {
              l.onIsActualIntervalChange().unsubscribeAll(e),
                l.onLockChanged().unsubscribeAll(e),
                l.onVisibilityChanged().unsubscribeAll(e),
                t && t.unsubscribeAll(e),
                R.current && clearTimeout(R.current)
            }
          )
        }, []),
          Object(r.useEffect)(() => {
            g && y.current && (y.current.focus(), y.current.setSelectionRange(0, m.length))
          }, [g]),
          Object(r.useEffect)(() => {
            const e = {}
            return (
              A.hoveredObjectChanged().subscribe(e, X),
              () => {
                A.hoveredObjectChanged().unsubscribeAll(e)
              }
            )
          }, [d]),
          Object(r.useEffect)(() => {
            A.setHoveredObject(c ? t : null)
          }, [c]),
          Object(r.useEffect)(() => {
            !a && R.current && (clearTimeout(R.current), (R.current = null)), v(!1)
          }, [a])
        const { viewModel: A } = Object(D.ensureNotNull)(f),
          L = !w || _,
          B = l.getIcon(),
          H = {}
        if (u) {
          const e = A.entity(u)
          e && (H["data-parent-name"] = e.title()),
            (H["data-type"] = l.hasChildren() ? "group" : "data-source")
        }
        const G = Gn.enabled("test_show_object_tree_debug") ? `<${l.id()}> (${l.zOrder()})` : l.title(),
          F = c || I,
          U = g && a,
          z = !!h && h.isTouch,
          V = !!h && h.isDialog,
          W = E && w ? Kn : qn,
          K = l.hasChildren()
            ? b.t("Group is hidden on current interval")
            : b.t("Drawing is hidden on current interval")
        return o.a.createElement(
          "span",
          {
            className: T(
              Qn.wrap,
              L && Qn.modifier,
              i && Qn.disabled,
              a && Qn.selected,
              n && Qn.offset,
              s && Qn.childOfSelected,
              I && !i && !a && !s && Qn.hover,
              V && !i && !a && !s && Qn.dialog
            ),
            onMouseDown: function (e) {
              g && !Object(D.ensureNotNull)(y.current).contains(e.target) && N(!0)
            },
            onClick:
              1 === p
                ? q
                : function (e) {
                    if (e.defaultPrevented) return
                    if (0 !== Object(Nt.modifiersFromEvent)(e)) return
                    if (R.current)
                      e.preventDefault(),
                        clearTimeout(R.current),
                        (R.current = null),
                        A.openProperties(l),
                        N(!1)
                    else {
                      const e = A.selection().selected()
                      R.current = setTimeout(() => {
                        ;(R.current = null), a && !x && 1 === e.length && A.rename(l, () => v(!0)), N(!1)
                      }, 500)
                    }
                  },
            onContextMenu: z ? void 0 : q
          },
          !U &&
            o.a.createElement(
              r.Fragment,
              null,
              B && B.type === Hn.Svg && o.a.createElement(C.a, { icon: B.content || "", className: Qn.icon }),
              B &&
                B.type === Hn.Text &&
                o.a.createElement("span", { className: T(Qn.icon, Qn.textIcon) }, B.content),
              o.a.createElement(
                "span",
                Object.assign(
                  {
                    className: T(Qn.title, A.isMain(l) && Qn.main, !l.isVisible() && Qn.disabled)
                  },
                  H
                ),
                G
              ),
              (F || _ || !w || z || !E) &&
                o.a.createElement(
                  "span",
                  {
                    className: T(
                      Qn.rightButtons,
                      l.canBeRemoved() && Qn.twoButtons,
                      l.canBeLocked() && (F || _) && Qn.threeButtons
                    )
                  },
                  l.canBeLocked() &&
                    (F || _) &&
                    o.a.createElement(Un.a, {
                      icon: _ ? Vn : Wn,
                      className: T(Qn.button, Qn.lockButton),
                      onClick: function (e) {
                        if (e.defaultPrevented) return
                        e.preventDefault(), A.setIsLocked(t, !l.isLocked())
                      },
                      "data-role": "button",
                      "data-name": "lock",
                      "data-active": _
                    }),
                  (F || !w || !E) &&
                    o.a.createElement(Un.a, {
                      icon: W,
                      className: T(Qn.button, Qn.viewButton, !E && [Qn.warn, "apply-common-tooltip"]),
                      onClick: E
                        ? function (e) {
                            if (e.defaultPrevented) return
                            e.preventDefault(), A.setIsVisible(t, !l.isVisible())
                          }
                        : void 0,
                      title: E ? void 0 : K,
                      disabled: !E,
                      "data-role": "button",
                      "data-name": "hide",
                      "data-active": !w
                    }),
                  l.canBeRemoved() &&
                    (z || F) &&
                    o.a.createElement(Un.a, {
                      icon: zn,
                      className: T(Qn.button, Qn.removeButton),
                      onClick: function (e) {
                        if (e.defaultPrevented) return
                        e.preventDefault(), A.remove(t)
                      },
                      "data-role": "button",
                      "data-name": "remove"
                    })
                )
            ),
          U &&
            o.a.createElement(Fn.a, {
              value: m,
              onChange: function (e) {
                O(e.currentTarget.value)
              },
              onClick: xn.a,
              className: Qn.renameInput,
              onKeyDown: function (e) {
                27 === Object(Nt.hashFromEvent)(e)
                  ? (e.preventDefault(), O(l.title()), v(!1))
                  : 13 === Object(Nt.hashFromEvent)(e) && (e.preventDefault(), Q())
              },
              reference: function (e) {
                y.current = e
              },
              onBlur: Q,
              onDragStart: function (e) {
                e.preventDefault(), e.stopPropagation()
              },
              draggable: !0,
              stretch: !0
            })
        )
        function q(e) {
          e.defaultPrevented || g || (e.preventDefault(), e.persist(), A.openContextMenu(l, () => v(!0), e))
        }
        function Q() {
          "" !== m && l.setName(m), O(l.title()), v(!1)
        }
        function X(e) {
          if (l.hasChildren() && !d) {
            const t = l.children(),
              n = Boolean(t.find((t) => t.id() === e))
            k(n)
          } else k(t === e)
        }
      }
      var Yn = n("4/GM")
      class Jn extends o.a.PureComponent {
        constructor(e) {
          super(e),
            (this._isMounted = !1),
            (this._dialogRef = o.a.createRef()),
            (this._renderChildren = (e) =>
              o.a.createElement($n, { isSmallTablet: e, viewModel: this.props.viewModel })),
            (this._handleMediaChange = () => {
              this.state.showDrawer &&
                !window.matchMedia(m.a.TabletSmall).matches &&
                this.setState({ showDrawer: !1 })
            }),
            (this._onManageDrawings = (e) => {
              throw new Error("not supported")
            }),
            (this._closeDrawer = () => {
              this.setState({ showDrawer: !1 })
            }),
            (this._handleContextMenuOpened = (e) => {
              this.setState({ isContextMenuOpened: e })
            }),
            (this._matchMedia = window.matchMedia(m.a.TabletSmall)),
            (this.state = { showDrawer: !1, showDialog: !1, isContextMenuOpened: !1 })
        }
        componentDidMount() {
          ;(this._isMounted = !0),
            this._matchMedia.addListener(this._handleMediaChange),
            this.props.viewModel.isContextMenuOpened().subscribe(this._handleContextMenuOpened)
        }
        componentWillUnmount() {
          ;(this._isMounted = !1),
            this._matchMedia.removeListener(this._handleMediaChange),
            this.props.viewModel.isContextMenuOpened().unsubscribe(this._handleContextMenuOpened)
        }
        render() {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(v.a, { rule: m.a.TabletSmall }, (e) =>
              o.a.createElement(y.a, {
                additionalElementPos: "after",
                additionalHeaderElement: !1,
                className: Yn.dialog,
                dataName: "object-tree-dialog",
                isOpened: !0,
                onClickOutside:
                  this.state.showDialog || e || this.state.isContextMenuOpened
                    ? () => {}
                    : this.props.onClose,
                onClose: this.props.onClose,
                ref: this._dialogRef,
                render: () => this._renderChildren(e),
                title: Object(b.t)("Object tree"),
                showSeparator: !0
              })
            ),
            o.a.createElement(
              g.b,
              null,
              this.state.showDrawer &&
                o.a.createElement(
                  p.a,
                  { onClose: this._closeDrawer, position: "Bottom" },
                  o.a.createElement(O.a, {
                    onClose: this._closeDrawer,
                    chartWidget: this.props.activeChartWidget,
                    isMobile: !0
                  })
                )
            )
          )
        }
      }
      function $n(e) {
        const { isSmallTablet: t, viewModel: n } = e,
          i = Object(r.useMemo)(() => ({ size: t ? 1 : 0, smallSizeTreeNodeAction: 0 }), [t])
        return o.a.createElement(
          Lt.Provider,
          { value: i },
          o.a.createElement(Ln, { nodeRenderer: Xn, showHeader: !1, viewModel: n, isDialog: !0 })
        )
      }
      var er = n("eqEH"),
        tr = n("vPbs"),
        nr = n("aIyQ"),
        rr = n.n(nr)
      function or(e) {
        return e
      }
      var ir = n("QrSB")
      class ar {
        constructor(e) {
          ;(this._onChange = new rr.a()),
            (this._recalculate = () => {
              const e = this._groupModel.groups().map((e) => e.id),
                t = this._selectionApi.allSources()
              ;(this._selected = this._selected.filter((n) => e.includes(n) || t.includes(n))),
                this._onChange.fire(this._selected)
            }),
            (this._model = e),
            (this._selectionApi = new ir.SelectionApi(this._model)),
            (this._groupModel = this._model.lineToolsGroupModel()),
            (this._selected = this._getSelectedIds()),
            this._selectionApi.onChanged().subscribe(this, () => {
              ;(this._selected = this._getSelectedIds()), this._onChange.fire(this._selected)
            }),
            this._groupModel.onChanged().subscribe(this, this._recalculate)
        }
        destroy() {
          this._selectionApi.onChanged().unsubscribeAll(this),
            this._groupModel.onChanged().unsubscribeAll(this)
        }
        set(e) {
          const t = []
          let n = e.map((e) => e.id())
          for (const r of e) {
            const e = r.children(),
              o = new Set(e.map((e) => e.id()))
            r.hasChildren()
              ? (t.push(...Array.from(o.values()).map(or)), (n = n.filter((e) => !o.has(e))))
              : t.push(r.id())
          }
          this._selectionApi.set(t), (this._selected = n), this._onChange.fire(this._selected)
        }
        canBeAddedToSelection(e) {
          return null !== e && e.canBeAddedToSelection()
        }
        onChange() {
          return this._onChange
        }
        selected() {
          return this._selected
        }
        _getSelectedIds() {
          return this._selectionApi.allSources().filter((e) => {
            const t = this._model.dataSourceForId(e)
            return null !== t && t.showInObjectTree()
          })
        }
      }
      var sr = n("CW80"),
        cr = n("3ClC"),
        ur = n("fgLi"),
        lr = n("HZKX"),
        dr = n("Vbka"),
        fr = n("dDxv"),
        hr = n("NhaM")
      const pr = Object(b.t)("Show {sourceTitle}"),
        gr = Object(b.t)("Hide {sourceTitle}"),
        vr = Object(b.t)("Lock {sourceTitle}"),
        br = Object(b.t)("Unlock {sourceTitle}"),
        yr = Object(b.t)("Change {sourceType} title to {newSourceTitle}")
      function mr(e, t) {
        return t.every((t) => !(t.pane() !== e && !t.allowsMovingbetweenPanes()))
      }
      function Or(e) {
        return e instanceof ur.DataSource && e.showInObjectTree() ? e.id() : null
      }
      const _r = new rr.a()
      class Sr {
        constructor(e, t) {
          ;(this._undoModel = e), (this._dataSource = t)
        }
        destroy() {}
        id() {
          return this._dataSource.id()
        }
        title() {
          return Object(sr.isLineTool)(this._dataSource)
            ? this._dataSource.properties().title.value() || this._dataSource.translatedType()
            : this._dataSource.title()
        }
        gaLabel() {
          return Object(cr.isStudy)(this._dataSource)
            ? "Study"
            : Object(sr.isLineTool)(this._dataSource)
            ? "Drawing"
            : "Symbol"
        }
        canBeLocked() {
          return Object(sr.isLineTool)(this._dataSource) && this._dataSource.userEditEnabled()
        }
        canBeRemoved() {
          return this._undoModel.mainSeries() !== this._dataSource && this._dataSource.isUserDeletable()
        }
        canBeHidden() {
          return this._dataSource.canBeHidden()
        }
        canBeRenamed() {
          return Object(sr.isLineTool)(this._dataSource)
        }
        isVisible() {
          return this._dataSource.properties().visible.value()
        }
        isActualInterval() {
          return !Object(sr.isLineTool)(this._dataSource) || this._dataSource.isActualInterval()
        }
        onIsActualIntervalChange() {
          return Object(sr.isLineTool)(this._dataSource) ? this._dataSource.onIsActualIntervalChange() : _r
        }
        isLocked() {
          return !!Object(sr.isLineTool)(this._dataSource) && this._dataSource.properties().frozen.value()
        }
        onVisibilityChanged() {
          return this._dataSource.properties().visible.listeners()
        }
        onLockChanged() {
          return Object(sr.isLineTool)(this._dataSource)
            ? this._dataSource.properties().frozen.listeners()
            : _r
        }
        getIcon() {
          const e = u,
            t = this._dataSource.getSourceIcon(),
            n = Object(cr.isStudyStrategy)(this._dataSource)
          let r = { type: Hn.Svg, content: n ? dr : fr }
          if (e && t)
            if ("loadSvg" === t.type) {
              const [n, o] = t.svgId.split("."),
                i = "linetool" === n ? e.linetool[o] : e.series[Number(o)]
              r = { type: Hn.Svg, content: i || fr }
            } else "text" === t.type && (r = { type: Hn.Text, content: t.text })
          return r
        }
        setVisible(e) {
          const t = (e ? pr : gr).format({ sourceTitle: this._dataSource.title() })
          this._undoModel.setProperty(this._dataSource.properties().visible, e, t)
        }
        setLocked(e) {
          if (Object(sr.isLineTool)(this._dataSource)) {
            const t = (e ? vr : br).format({ sourceTitle: this._dataSource.translatedType() })
            this._undoModel.setProperty(this._dataSource.properties().frozen, e, t)
          }
        }
        setName(e) {
          if (Object(sr.isLineTool)(this._dataSource)) {
            const t = yr.format({
              sourceType: this._dataSource.properties().title.value() || this._dataSource.title(),
              newSourceTitle: e
            })
            this._undoModel.setProperty(this._dataSource.properties().title, e, t)
          }
        }
        isCopiable() {
          return this._dataSource.copiable()
        }
        isClonable() {
          return this._dataSource.cloneable()
        }
        zOrder() {
          return this._dataSource.zorder()
        }
        remove() {
          this._undoModel.removeSource(this._dataSource, !1)
        }
        canBeAddedToSelection() {
          return this._undoModel.selection().canBeAddedToSelection(this._dataSource)
        }
        setAsSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.clearSelection(), e.addSourceToSelection(this._dataSource)
          })
        }
        addToSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.addSourceToSelection(this._dataSource)
          })
        }
        addSourcesToArray(e) {
          return e.push(this._dataSource), e
        }
        insertSourcesBeforeThis(e) {
          this._insertSources(e, (e) => this._undoModel.insertBefore(e, this._dataSource))
        }
        insertSourcesAfterThis(e) {
          this._insertSources(e, (e) => this._undoModel.insertAfter(e, this._dataSource))
        }
        children() {
          return []
        }
        hasChildren() {
          return !1
        }
        pane() {
          return Object(D.ensureNotNull)(this._undoModel.model().paneForSource(this._dataSource))
        }
        allowsMovingbetweenPanes() {
          return !Object(sr.isLineTool)(this._dataSource)
        }
        canBeAddedToGroup() {
          return Object(sr.isLineTool)(this._dataSource)
        }
        canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e)
        }
        canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e)
        }
        detachFromParent() {
          if (Object(sr.isLineTool)(this._dataSource)) {
            const e = this._undoModel.model(),
              t = this._undoModel.lineToolsGroupController(),
              n = e.lineToolsGroupModel().groupForLineTool(this._dataSource)
            null !== n && t.excludeLineToolFromGroup(n, this._dataSource)
          }
        }
        onTitleChanged() {
          const e = this._dataSource.properties().title
          return e ? e.listeners() : void 0
        }
        _canInsertBeforeOrAfter(e) {
          const t = this._undoModel.model()
          if (!mr(this.pane(), e)) return !1
          if (Object(sr.isLineTool)(this._dataSource)) {
            if (
              null !== t.lineToolsGroupModel().groupForLineTool(this._dataSource) &&
              e.some((e) => !e.canBeAddedToGroup())
            )
              return !1
          }
          return !0
        }
        _insertSources(e, t) {
          const n = this._undoModel.model(),
            r = this._undoModel.lineToolsGroupController()
          this._undoModel.beginUndoMacro("Insert source(s) after")
          const o = () => {
              e.forEach((e) => e.detachFromParent())
            },
            i = e.reduce((e, t) => t.addSourcesToArray(e), [])
          if (Object(sr.isLineTool)(this._dataSource)) {
            const t = n.lineToolsGroupModel().groupForLineTool(this._dataSource)
            null !== t
              ? (Object(D.assert)(!e.some((e) => e.hasChildren())),
                i.forEach((e) => {
                  Object(sr.isLineTool)(e) && (t.containsLineTool(e) || r.addLineToolToGroup(t, e))
                }))
              : o()
          } else o()
          t(i), this._undoModel.endUndoMacro()
        }
      }
      class wr {
        constructor(e, t) {
          ;(this._onTitleChanged = new rr.a()),
            (this._onVisibilityChanged = new rr.a()),
            (this._onLockChanged = new rr.a()),
            (this._onIsActualIntervalChanged = new rr.a()),
            (this._undoModel = e),
            (this._group = t),
            (this._lineTools = t.lineTools())
          const n = () => {
            this._lineTools.forEach((e) => {
              e
                .properties()
                .visible.listeners()
                .subscribe(this, () => this._onVisibilityChanged.fire()),
                e
                  .properties()
                  .frozen.listeners()
                  .subscribe(this, () => this._onLockChanged.fire()),
                e.onIsActualIntervalChange().subscribe(this, () => this._onIsActualIntervalChanged.fire())
            })
          }
          this._group.onChanged().subscribe(this, (e) => {
            this._unsubscribeFromAllLineTools(),
              (this._lineTools = this._group.lineTools()),
              n(),
              e.lockedChanged && this._onLockChanged.fire(),
              e.visibilityChanged && this._onVisibilityChanged.fire(),
              e.titleChanged && this._onTitleChanged.fire(),
              e.isActualIntervalChanged && this._onIsActualIntervalChanged.fire()
          }),
            n()
        }
        destroy() {
          this._unsubscribeFromAllLineTools(), this._group.onChanged().unsubscribeAll(this)
        }
        id() {
          return this._group.id
        }
        title() {
          return this._group.name()
        }
        gaLabel() {
          return "Group"
        }
        getIcon() {
          return { type: Hn.Svg, content: hr }
        }
        canBeRemoved() {
          return !0
        }
        canBeHidden() {
          return !0
        }
        canBeLocked() {
          return !0
        }
        canBeRenamed() {
          return !0
        }
        isVisible() {
          return "Invisible" !== this._group.visibility()
        }
        isActualInterval() {
          return this._group.lineTools().some((e) => e.isActualInterval())
        }
        onIsActualIntervalChange() {
          return this._onIsActualIntervalChanged
        }
        isLocked() {
          return "Locked" === this._group.locked()
        }
        onTitleChanged() {
          return this._onTitleChanged
        }
        onVisibilityChanged() {
          return this._onVisibilityChanged
        }
        onLockChanged() {
          return this._onLockChanged
        }
        setVisible(e) {
          this._undoModel.lineToolsGroupController().setGroupVisibility(this._group, e)
        }
        setLocked(e) {
          this._undoModel.lineToolsGroupController().setGroupLock(this._group, e)
        }
        setName(e) {
          this._undoModel.lineToolsGroupController().setGroupName(this._group, e)
        }
        isCopiable() {
          return !1
        }
        isClonable() {
          return !1
        }
        zOrder() {
          return 0 === this._group.lineTools().length ? null : this._group.lineTools()[0].zorder()
        }
        remove() {
          this._undoModel.lineToolsGroupController().removeGroup(this._group)
        }
        canBeAddedToSelection() {
          const e = this._undoModel.model()
          return this._group.lineTools().every((t) => e.selection().canBeAddedToSelection(t))
        }
        setAsSelection() {
          this._undoModel.model().selectionMacro((e) => {
            e.clearSelection(), this._group.lineTools().forEach((t) => e.addSourceToSelection(t))
          })
        }
        addToSelection() {
          this._undoModel.model().selectionMacro((e) => {
            this._group.lineTools().forEach((t) => e.addSourceToSelection(t))
          })
        }
        addSourcesToArray(e) {
          return e.push(...this._group.lineTools()), e
        }
        detachFromParent() {}
        insertSourcesBeforeThis(e) {
          const t = this._insertBeforeTarget()
          this._insertSources(e, (e) => this._undoModel.insertBefore(e, t))
        }
        insertSourcesAfterThis(e) {
          const t = this._insertAfterTarget()
          this._insertSources(e, (e) => this._undoModel.insertAfter(e, t))
        }
        children() {
          const e = [...this._group.lineTools()]
          return e.sort((e, t) => t.zorder() - e.zorder()), e.map((e) => new Sr(this._undoModel, e))
        }
        hasChildren() {
          return !0
        }
        pane() {
          return Object(D.ensureNotNull)(this._undoModel.model().paneForSource(this._group.lineTools()[0]))
        }
        allowsMovingbetweenPanes() {
          return !1
        }
        canBeAddedToGroup() {
          return !1
        }
        canInsertBeforeThis(e) {
          return this._canInsertBeforeOrAfter(e)
        }
        canInsertAfterThis(e) {
          return this._canInsertBeforeOrAfter(e)
        }
        _canInsertBeforeOrAfter(e) {
          return mr(this.pane(), e)
        }
        _insertSources(e, t) {
          this._undoModel.beginUndoMacro("Insert source(s) after")
          const n = e.reduce((e, t) => t.addSourcesToArray(e), [])
          e.forEach((e) => e.detachFromParent()), t(n), this._undoModel.endUndoMacro()
        }
        _insertBeforeTarget() {
          return Object(D.ensureNotNull)(
            this._group.lineTools().reduce((e, t) => (null === e ? t : e.zorder() < t.zorder() ? e : t), null)
          )
        }
        _insertAfterTarget() {
          return Object(D.ensureNotNull)(
            this._group.lineTools().reduce((e, t) => (null === e ? t : e.zorder() > t.zorder() ? e : t), null)
          )
        }
        _unsubscribeFromAllLineTools() {
          this._lineTools.forEach((e) => {
            e.properties().visible.listeners().unsubscribeAll(this),
              e.properties().frozen.listeners().unsubscribeAll(this),
              e.onIsActualIntervalChange().unsubscribeAll(this)
          })
        }
      }
      class Dr {
        constructor(e) {
          ;(this._hoveredObjectChanged = new rr.a()),
            (this._undoModel = e),
            this._undoModel.model().hoveredSourceChanged().subscribe(this, this._onModelHoveredSourceChanged)
        }
        getObjectById(e) {
          const t = this._undoModel.model(),
            n = t.dataSourceForId(e)
          if (null !== n) return new Sr(this._undoModel, n)
          const r = t.lineToolsGroupModel().groupForId(e)
          return null !== r ? new wr(this._undoModel, r) : null
        }
        canBeGroupped(e) {
          if (0 === e.length || (1 === e.length && e[0].hasChildren())) return !1
          const t = []
          if ((e.forEach((e) => e.addSourcesToArray(t)), t.some((e) => !Object(sr.isLineTool)(e)))) return !1
          const n = this._undoModel.model(),
            r = t.map((e) => n.paneForSource(e))
          return new Set(r).size < 2
        }
        contextMenuActions(e, t, n) {
          const r = new lr.ActionsProvider(e, n),
            o = []
          return t.forEach((e) => e.addSourcesToArray(o)), r.contextMenuActionsForSources(o)
        }
        insertBefore(e, t) {
          t.insertSourcesAfterThis(e)
        }
        insertAfter(e, t) {
          t.insertSourcesBeforeThis(e)
        }
        setHoveredObject(e) {
          const t = this._undoModel.model()
          if (null === e) return void t.setHoveredSource(null, null)
          const n = t.dataSourceForId(e)
          null !== n && t.setHoveredSource(n, null)
        }
        hoveredObjectId() {
          return Or(this._undoModel.model().hoveredSource())
        }
        hoveredObjectChanged() {
          return this._hoveredObjectChanged
        }
        _onModelHoveredSourceChanged(e) {
          this._hoveredObjectChanged.fire(Or(e))
        }
      }
      class Tr {
        constructor(e) {
          ;(this._controller = e),
            (this._facade = new Dr(e)),
            (this._groupModel = e.model().lineToolsGroupModel())
        }
        buildTree() {
          const e = {},
            t = {}
          for (const n of this._controller.model().panes()) {
            const r = n
              .sourcesByGroup()
              .all()
              .filter((e) => e.showInObjectTree())
            e[n.id()] = jr(n.id(), 0)
            for (const o of this._groupModel.groups()) {
              const r = Object(D.ensureNotNull)(this._facade.getObjectById(o.id))
              if (r.pane() === n) {
                t[r.id()] = r
                const i = [...o.lineTools()]
                  .sort((e, t) => (e.zorder() > t.zorder() ? -1 : 1))
                  .map((e) => e.id())
                ;(e[r.id()] = jr(r.id(), 1, n.id(), i)), e[n.id()].children.push(r.id())
                for (const n of i)
                  (t[n] = Object(D.ensureNotNull)(this._facade.getObjectById(n))), (e[n] = jr(n, 2, r.id()))
              }
            }
            for (const o of r)
              e[o.id()] ||
                ((e[o.id()] = jr(o.id(), 1, n.id())),
                e[n.id()].children.push(o.id()),
                (t[o.id()] = Object(D.ensureNotNull)(this._facade.getObjectById(o.id()))))
            e[n.id()].children.sort((e, n) =>
              Object(D.ensureNotNull)(t[e].zOrder()) > Object(D.ensureNotNull)(t[n].zOrder()) ? -1 : 1
            )
          }
          return { nodes: e, entities: t }
        }
      }
      function jr(e, t, n, r = []) {
        return { id: e, level: t, parentId: n, children: r }
      }
      var Cr = n("7ktv"),
        Er = n("7KDR"),
        Mr = n("zRdu"),
        Ir = n("hY0g"),
        Pr = n.n(Ir),
        kr = n("fs3R"),
        xr = n("qckB"),
        Nr = n("dmHa"),
        Rr = n("ffaL"),
        Ar = n("GjMU"),
        Lr = n("aVjL")
      const Br = Object(s.getLogger)("Platform.GUI.ObjectTree")
      function Hr(e) {
        return e instanceof Cr.PriceDataSource
      }
      class Gr {
        constructor(e) {
          ;(this._entitiesCache = {}),
            (this._nodes = {}),
            (this._onChange = new rr.a()),
            (this._onGroupCreated = new rr.a()),
            (this._subscriptions = []),
            (this._removeSourcesPromise = null),
            (this._timeout = null),
            (this._objects = []),
            (this._options = {
              general: !0,
              mainSeries: !0,
              mainSeriesTrade: !0,
              esdStudies: !0,
              fundamentals: !0,
              studies: !0,
              lineTools: !0,
              publishedCharts: !0,
              ordersAndPositions: !0,
              alerts: !1,
              chartEvents: !0,
              objectTree: !1
            }),
            (this._isContextMenuOpened = new Pr.a(!1)),
            (this._getObjectsToModify = (e) => {
              const t = this.selection().selected()
              return t.find((t) => t === e) ? t.map(this._ensuredEntity) : [this._ensuredEntity(e)]
            }),
            (this._onActiveChartChanged = () => {
              this._cleanup(), this._init()
            }),
            (this._cleanup = () => {
              null !== this._timeout && (clearTimeout(this._timeout), (this._timeout = null)),
                this._subscriptions.forEach((e) => {
                  e.unsubscribeAll(this)
                }),
                this._selection.destroy(),
                this._chart.unsubscribe(this._onActiveChartChanged)
              for (const e of Object.values(this._entitiesCache)) e.destroy()
              null !== this._removeSourcesPromise && this._removeSourcesPromise.cancel()
            }),
            (this._init = () => {
              ;(this._controller = this._chart.value().model()),
                (this._groupController = this._controller.lineToolsGroupController()),
                (this._model = this._controller.model()),
                (this._groupModel = this._model.lineToolsGroupModel()),
                (this._facade = new Dr(this._controller)),
                (this._subscriptions = [
                  this._model.mainSeries().onStyleChanged(),
                  this._model.mainSeries().dataEvents().symbolResolved(),
                  this._model.mainSeries().onIntervalChanged(),
                  this._model.panesCollectionChanged(),
                  this._model.dataSourceCollectionChanged(),
                  this._groupModel.onChanged()
                ]),
                this._subscriptions.forEach((e) => {
                  e.subscribe(this, this._update)
                }),
                this._chart.subscribe(this._onActiveChartChanged),
                (this._selection = new ar(this._model)),
                this._update()
            }),
            (this._update = () => {
              null === this._timeout &&
                (this._timeout = setTimeout(() => {
                  this._recalculateTree(), this._onChange.fire(), (this._timeout = null)
                }))
            }),
            (this._ensuredEntity = (e) => Object(D.ensureNotNull)(this._getEntityById(e))),
            (this._chart = e),
            this._init()
        }
        destroy() {
          this._cleanup()
        }
        getState() {
          return { nodes: Object.values(this._nodes), selection: this._selection.selected() }
        }
        getChartId() {
          return this._chart.value().id()
        }
        insertSelection(e, t) {
          const n = this._facade,
            r = this.selection().selected().map(this._ensuredEntity),
            [o, i] = this._normalizeTargetAndDropType(e, t)
          this._controller.withMacro(Object(b.t)("Move objects"), () => {
            switch (i) {
              case "before":
                n.insertBefore(r, o)
                break
              case "after":
                n.insertAfter(r, o)
            }
          }),
            this._update()
        }
        entity(e) {
          return this._entitiesCache[e] || null
        }
        isMain(e) {
          return e.id() === this._controller.mainSeries().id()
        }
        selection() {
          return this._selection
        }
        setIsLocked(e, t) {
          const n = this._getObjectsToModify(e),
            r = (t ? Object(b.t)("Lock") : Object(b.t)("Unlock")) + " " + Object(b.t)("objects")
          this._controller.withMacro(r, () => {
            for (const e of n) e.setLocked(t)
          }),
            wn("Lock", Dn(n))
        }
        setIsVisible(e, t) {
          const n = this._getObjectsToModify(e),
            r = (t ? Object(b.t)("Show") : Object(b.t)("Hide")) + " " + Object(b.t)("objects")
          this._controller.withMacro(r, () => {
            for (const e of n) e.setVisible(t)
          }),
            wn("Hide", Dn(n))
        }
        remove(e) {
          const t = () => {
              this._controller.withMacro(Object(b.t)("Remove objects"), () => {
                for (const e of n) e.remove(), delete this._entitiesCache[e.id()]
              }),
                wn("Delete", Dn(n)),
                this._update()
            },
            n = this._getObjectsToModify(e)
          t()
        }
        canSelectionBeGrouped() {
          const e = this._getSelectedEntities()
          return this._facade.canBeGroupped(e)
        }
        createGroupFromSelection() {
          const e = this._groupController.createGroupFromSelection()
          wn("Create Group"),
            this.selection().set([this._ensuredEntity(e.id)]),
            this._onGroupCreated.fire(e.id),
            this._update()
        }
        isSelectionDropable(e, t) {
          const n = this.selection().selected().map(this._ensuredEntity),
            [r, o] = this._normalizeTargetAndDropType(e, t)
          switch (o) {
            case "after":
              return r.canInsertAfterThis(n)
            case "before":
              return r.canInsertBeforeThis(n)
          }
        }
        onChange() {
          return this._onChange
        }
        onGroupCreated() {
          return this._onGroupCreated
        }
        isSelectionCloneable() {
          const e = this._getSelectedEntities()
          return e.length > 0 && e.every((e) => e.isClonable())
        }
        isSelectionCopiable() {
          const e = this._getSelectedEntities()
          return e.length > 0 && e.every((e) => e.isCopiable())
        }
        openProperties(e) {
          const t = this._model.dataSourceForId(e.id())
          this.selection().set([e]),
            null !== t &&
              (this._controller.mainSeries() === t
                ? this._chart.value().showGeneralChartProperties()
                : (Object(sr.isLineTool)(t) || Object(cr.isStudy)(t)) &&
                  this._chart.value().showChartPropertiesForSource(t))
        }
        canSelectionBeUnmerged() {
          const e = this._getSelectedEntities()
          return 1 === e.length && this.canNodeWithIdBeUnmerged(e[0].id())
        }
        canNodeWithIdBeUnmerged(e) {
          const t = this._model.dataSourceForId(e)
          return null !== t && Hr(t) && this._model.isUnmergeAvailableForSource(t)
        }
        unmergeSelectionUp() {
          this._unmergeSelection(0)
        }
        unmergeSelectionDown() {
          this._unmergeSelection(1)
        }
        copySelection() {
          const e = this._getSelectedEntities(),
            t = e.map((e) => Object(D.ensureNotNull)(this._model.dataSourceForId(e.id())))
          this._chart.value().chartWidgetCollection().clipboard.uiRequestCopy(t), wn("Copy", Dn(e))
        }
        cloneSelection() {
          const e = this._getSelectedEntities(),
            t = e.map((e) => Object(D.ensureNotNull)(this._model.dataSourceForId(e.id())))
          t.every(sr.isLineTool) && (this._controller.cloneLineTools([...t], !1), wn("Clone", Dn(e)))
        }
        rename(e, t) {
          const n = this._getObjectsToModify(e.id())
          1 === n.length && n.some((e) => e.canBeRenamed()) && (t(), wn("Rename", Dn(n)))
        }
        async openContextMenu(e, t, n) {
          this._objects = this._getObjectsToModify(e.id())
          const r = this._facade.canBeGroupped(this._objects)
          let o
          if (this._objects.some((e) => e.hasChildren())) o = this._getActionsForGroupItem(e, t, r)
          else {
            const e = await this._facade.contextMenuActions(this._chart.value(), this._objects, this._options)
            if (
              ((o = Array.from(e).filter(
                (e, t, n) => e.type !== Mr.a.Separator || !n[t + 1] || n[t + 1].type !== Mr.a.Separator
              )),
              1 === this._objects.length && this._objects[0].canBeRenamed())
            ) {
              const e = o.findIndex((e) => "Copy" === e.id)
              o.splice(-1 === e ? o.length : e + 1, 0, this._getRenameAction(t))
            }
            if (r) {
              const e = o.findIndex((e) => "Clone" === e.id)
              o.splice(-1 === e ? 0 : e, 0, this._getGroupAction())
            }
          }
          o.length > 0 &&
            Pn.ContextMenuManager.createMenu(o, { takeFocus: !0, returnFocus: !0 }, () => {
              this._isContextMenuOpened.setValue(!1)
            }).then((e) => {
              e.show(n), this._isContextMenuOpened.setValue(!0)
            })
        }
        setHoveredObject(e) {
          this._facade.setHoveredObject(e)
        }
        hoveredObjectChanged() {
          return this._facade.hoveredObjectChanged()
        }
        getNextNodeIdAfterRemove(e) {
          var t
          const { nodes: n } = this.getState(),
            r = n.find((t) => t.id === e),
            o = this.entity(e)
          if (!(r && r.parentId && o && o.canBeRemoved())) return null
          if (
            (null === (t = o.pane().mainDataSource()) || void 0 === t ? void 0 : t.id()) === e &&
            !this.canNodeWithIdBeUnmerged(e)
          ) {
            const e = n.filter((e) => 0 === e.level).map((e) => e.id),
              t = this._takeNextOrPrevElement(e, r.parentId)
            return Object(D.ensureDefined)(n.find((e) => e.id === t)).children[0]
          }
          const i = Object(D.ensureDefined)(n.find((e) => e.id === r.parentId)).children
          return 1 === i.length
            ? this.getNextNodeIdAfterRemove(r.parentId)
            : this._takeNextOrPrevElement(i, e)
        }
        isContextMenuOpened() {
          return this._isContextMenuOpened.readonly()
        }
        _takeNextOrPrevElement(e, t) {
          const n = e.indexOf(t)
          return e[n === e.length - 1 ? n - 1 : n + 1]
        }
        _getGroupAction() {
          return new Er.Action({
            label: Object(b.t)("Create a group of drawings"),
            icon: R,
            onExecute: () => {
              this.createGroupFromSelection()
            }
          })
        }
        _getRenameAction(e) {
          return new Er.Action({
            label: Object(b.t)("Rename"),
            icon: Ar,
            onExecute: () => {
              e(), wn("Context menu rename", Dn(this._objects))
            }
          })
        }
        _getActionsForGroupItem(e, t, n) {
          const r = [
            new Er.Action({
              label: e.isLocked() ? Object(b.t)("Unlock") : Object(b.t)("Lock"),
              icon: e.isLocked() ? kr : xr,
              onExecute: () => this.setIsLocked(e.id(), !e.isLocked())
            }),
            new Er.Action({
              label: e.isVisible() ? Object(b.t)("Hide") : Object(b.t)("Show"),
              icon: e.isVisible() ? Nr : Rr,
              onExecute: () => this.setIsVisible(e.id(), !e.isVisible())
            }),
            new Er.Action({
              label: Object(b.t)("Remove"),
              icon: Lr,
              onExecute: () => this.remove(e.id()),
              hotkeyHash: Nt.isMacKeyboard ? 8 : 46
            })
          ]
          return (
            1 === this._objects.length &&
              (r.unshift(new Er.Separator()), r.unshift(this._getRenameAction(t))),
            n && (r.unshift(new Er.Separator()), r.unshift(this._getGroupAction())),
            r
          )
        }
        _unmergeSelection(e) {
          const t = this._getSelectedEntities()
          if (1 !== t.length) throw new Error("Only one object can be unmerged")
          const n = t[0],
            r = Object(D.ensureNotNull)(this._model.dataSourceForId(n.id()))
          if (!Hr(r)) throw new Error("Entity is not IPriceDataSource")
          ;(0 === e ? this._controller.unmergeSourceUp : this._controller.unmergeSourceDown).call(
            this._controller,
            r
          )
          wn(0 === e ? "New pane above" : "New pane below", Dn([n]))
        }
        _recalculateTree() {
          const e = new Tr(this._controller),
            { nodes: t, entities: n } = e.buildTree()
          ;(this._nodes = t), (this._entitiesCache = n)
        }
        _normalizeTargetAndDropType(e, t) {
          let n = this._ensuredEntity(e)
          return (
            "inside" === t && ((t = "before"), (n = Object(D.ensureDefined)([...n.children()].shift()))),
            [n, t]
          )
        }
        _getSelectedEntities() {
          const { selected: e, removed: t } = this._selection.selected().reduce(
            (e, t) => {
              const n = this._getEntityById(t)
              return n ? (e.selected.push(n), e) : (e.removed.push(t), e)
            },
            { selected: [], removed: [] }
          )
          return (
            t.length &&
              Br.logWarn(
                "Detected dangling sources in selection. They will be ignored: " + JSON.stringify(t)
              ),
            e
          )
        }
        _getEntityById(e) {
          return this._entitiesCache[e] || this._facade.getObjectById(e)
        }
      }
      var Fr = n("sQaR")
      n.d(t, "ObjectTreeDialogRenderer", function () {
        return Ur
      })
      class Ur extends Fr.a {
        constructor() {
          super(),
            (this._handleClose = () => {
              i.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                null !== this._viewModel && (this._viewModel.destroy(), (this._viewModel = null))
            })
          const e = Object(er.service)(tr.CHART_WIDGET_COLLECTION_SERVICE)
          ;(this._activeChartWidget = e.activeChartWidget.value()),
            (this._viewModel = new Gr(e.activeChartWidget))
        }
        hide() {
          this._handleClose()
        }
        isVisible() {
          return this.visible().value()
        }
        show() {
          h().then(() => {
            null !== this._viewModel &&
              (i.render(
                r.createElement(Jn, {
                  onClose: this._handleClose,
                  viewModel: this._viewModel,
                  activeChartWidget: this._activeChartWidget
                }),
                this._container
              ),
              this._setVisibility(!0))
          })
        }
      }
    },
    yN0L: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.getMonitor(),
              r = e.getRegistry()
            l(n)
            var o = f(n)
            o.forEach(function (o, a) {
              var s = d(o, a, r, n),
                u = { type: i.DROP, payload: { dropResult: c({}, t, {}, s) } }
              e.dispatch(u)
            })
          }
        })
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r },
        i = n("/yIc"),
        a = n("rTKX")
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                u(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function l(e) {
        ;(0, o.default)(e.isDragging(), "Cannot call drop while not dragging."),
          (0, o.default)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
      }
      function d(e, t, n, r) {
        var i = n.getTarget(e),
          s = i ? i.drop(r, e) : void 0
        return (
          (function (e) {
            ;(0, o.default)(
              void 0 === e || (0, a.isObject)(e),
              "Drop result must either be an object or undefined."
            )
          })(s),
          void 0 === s && (s = 0 === t ? {} : r.getDropResult()),
          s
        )
      }
      function f(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e)
        return t.reverse(), t
      }
    },
    yfz3: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DropTarget = function (e, t, n) {
          var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          ;(0, u.checkDecoratorArguments)("DropTarget", "type, spec, collect[, options]", e, t, n, f)
          var h = e
          "function" != typeof e &&
            ((0, r.default)(
              (0, a.isValidType)(e, !0),
              'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              e
            ),
            (h = function () {
              return e
            }))
          ;(0, r.default)(
            (0, o.isPlainObject)(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t
          )
          var p = (0, d.default)(t)
          return (
            (0, r.default)(
              "function" == typeof n,
              'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              n
            ),
            (0, r.default)(
              (0, o.isPlainObject)(f),
              'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              n
            ),
            function (e) {
              return (0, l.default)({
                containerDisplayName: "DropTarget",
                createHandler: p,
                registerHandler: i.registerTarget,
                createMonitor: function (e) {
                  return new c.DropTargetMonitorImpl(e)
                },
                createConnector: function (e) {
                  return new s.TargetConnector(e)
                },
                DecoratedComponent: e,
                getType: h,
                collect: n,
                options: f
              })
            }
          )
        })
      var r = f(n("QLaP")),
        o = n("GanS"),
        i = n("lAcH"),
        a = n("qvEB"),
        s = n("Tw7s"),
        c = n("z3uI"),
        u = n("aDaG"),
        l = f(n("td7b")),
        d = f(n("Ed17"))
      function f(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    yupZ: function (e, t, n) {
      "use strict"
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NativeDragSource = void 0)
      var o = (function () {
        function e(t) {
          var n = this
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.config = t),
            (this.item = {}),
            Object.keys(this.config.exposeProperties).forEach(function (e) {
              Object.defineProperty(n.item, e, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return (
                    console.warn("Browser doesn't allow reading \"".concat(e, '" until the drop event.')),
                    null
                  )
                }
              })
            })
        }
        var t, n, o
        return (
          (t = e),
          (n = [
            {
              key: "mutateItemByReadingDataTransfer",
              value: function (e) {
                var t = this,
                  n = {}
                e &&
                  Object.keys(this.config.exposeProperties).forEach(function (r) {
                    n[r] = { value: t.config.exposeProperties[r](e, t.config.matchesTypes) }
                  }),
                  Object.defineProperties(this.item, n)
              }
            },
            {
              key: "canDrag",
              value: function () {
                return !0
              }
            },
            {
              key: "beginDrag",
              value: function () {
                return this.item
              }
            },
            {
              key: "isDragging",
              value: function (e, t) {
                return t === e.getSourceId()
              }
            },
            { key: "endDrag", value: function () {} }
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        )
      })()
      t.NativeDragSource = o
    },
    z3uI: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DropTargetMonitorImpl = void 0)
      var r,
        o = (r = n("QLaP")) && r.__esModule ? r : { default: r }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      var a = !1,
        s = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e),
              (this.targetId = null),
              (this.internalMonitor = t.getMonitor())
          }
          var t, n, r
          return (
            (t = e),
            (n = [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.targetId = e
                }
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.targetId
                }
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t)
                }
              },
              {
                key: "canDrop",
                value: function () {
                  if (!this.targetId) return !1
                  ;(0, o.default)(
                    !a,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"
                  )
                  try {
                    return (a = !0), this.internalMonitor.canDropOnTarget(this.targetId)
                  } finally {
                    a = !1
                  }
                }
              },
              {
                key: "isOver",
                value: function (e) {
                  return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e)
                }
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType()
                }
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem()
                }
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult()
                }
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop()
                }
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset()
                }
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset()
                }
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset()
                }
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset()
                }
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset()
                }
              }
            ]) && i(t.prototype, n),
            r && i(t, r),
            e
          )
        })()
      t.DropTargetMonitorImpl = s
    },
    z6MX: function (e, t, n) {
      "use strict"
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0)
      var o = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e)
          for (var r = t.length, o = [], i = 0; i < r; i++) o.push(i)
          o.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1
          })
          for (var a, s, c = [], u = [], l = [], d = 0; d < r - 1; d++)
            (a = t[d + 1] - t[d]), (s = n[d + 1] - n[d]), u.push(a), c.push(s), l.push(s / a)
          for (var f = [l[0]], h = 0; h < u.length - 1; h++) {
            var p = l[h],
              g = l[h + 1]
            if (p * g <= 0) f.push(0)
            else {
              a = u[h]
              var v = u[h + 1],
                b = a + v
              f.push((3 * b) / ((b + v) / p + (b + a) / g))
            }
          }
          f.push(l[l.length - 1])
          for (var y, m = [], O = [], _ = 0; _ < f.length - 1; _++) {
            y = l[_]
            var S = f[_],
              w = 1 / u[_],
              D = S + f[_ + 1] - y - y
            m.push((y - S - D) * w), O.push(D * w * w)
          }
          ;(this.xs = t), (this.ys = n), (this.c1s = f), (this.c2s = m), (this.c3s = O)
        }
        var t, n, o
        return (
          (t = e),
          (n = [
            {
              key: "interpolate",
              value: function (e) {
                var t = this.xs,
                  n = this.ys,
                  r = this.c1s,
                  o = this.c2s,
                  i = this.c3s,
                  a = t.length - 1
                if (e === t[a]) return n[a]
                for (var s, c = 0, u = i.length - 1; c <= u; ) {
                  var l = t[(s = Math.floor(0.5 * (c + u)))]
                  if (l < e) c = s + 1
                  else {
                    if (!(l > e)) return n[s]
                    u = s - 1
                  }
                }
                var d = e - t[(a = Math.max(0, u))],
                  f = d * d
                return n[a] + r[a] * d + o[a] * f + i[a] * d * f
              }
            }
          ]) && r(t.prototype, n),
          o && r(t, o),
          e
        )
      })()
      t.default = o
    },
    zAsM: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isSafari = t.isFirefox = void 0)
      var r = n("ae+E"),
        o = (0, r.memoize)(function () {
          return /firefox/i.test(navigator.userAgent)
        })
      t.isFirefox = o
      var i = (0, r.memoize)(function () {
        return Boolean(window.safari)
      })
      t.isSafari = i
    },
    zLS0: function (e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var r = {}
      t.default = function (e) {
        return {
          beginDrag: (0, o.default)(e),
          publishDragSource: (0, i.default)(e),
          hover: (0, a.default)(e),
          drop: (0, s.default)(e),
          endDrag: (0, c.default)(e)
        }
      }
      var o = l(n("evKi")),
        i = l(n("Ag/1")),
        a = l(n("D1HX")),
        s = l(n("yN0L")),
        c = l(n("Rvb+")),
        u = n("/yIc")
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e]
              }
            }))
      })
    },
    zn4F: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.448 10.124a10.82 10.82 0 0 1-.336-.609L2.105 9.5l.007-.015a12.159 12.159 0 0 1 1.686-2.466C5.002 5.665 6.752 4.373 9.05 4.373c2.297 0 4.047 1.292 5.25 2.646a12.166 12.166 0 0 1 1.687 2.466l.007.015-.007.015a12.163 12.163 0 0 1-1.686 2.466c-1.204 1.354-2.954 2.646-5.251 2.646-2.298 0-4.048-1.292-5.252-2.646a12.16 12.16 0 0 1-1.35-1.857zm14.558-.827l-.456.203.456.203v.002l-.003.005-.006.015-.025.052a11.813 11.813 0 0 1-.461.857 13.163 13.163 0 0 1-1.463 2.011c-1.296 1.46-3.296 2.982-5.998 2.982-2.703 0-4.703-1.522-6-2.982a13.162 13.162 0 0 1-1.83-2.677 7.883 7.883 0 0 1-.118-.243l-.007-.015-.002-.005v-.001l.456-.204-.456-.203v-.002l.002-.005.007-.015a4.66 4.66 0 0 1 .119-.243 13.158 13.158 0 0 1 1.83-2.677c1.296-1.46 3.296-2.982 5.999-2.982 2.702 0 4.702 1.522 5.998 2.981a13.158 13.158 0 0 1 1.83 2.678 8.097 8.097 0 0 1 .119.243l.006.015.003.005v.001zm-.456.203l.456-.203.09.203-.09.203-.456-.203zM1.092 9.297l.457.203-.457.203-.09-.203.09-.203zm9.958.203c0 1.164-.917 2.07-2 2.07-1.084 0-2-.906-2-2.07 0-1.164.916-2.07 2-2.07 1.083 0 2 .906 2 2.07zm1 0c0 1.695-1.344 3.07-3 3.07-1.657 0-3-1.375-3-3.07 0-1.695 1.343-3.07 3-3.07 1.656 0 3 1.375 3 3.07z"/></svg>'
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'
    }
  }
])
