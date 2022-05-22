(function () {
	function l(a, b, c) { return Function.prototype.call.apply(Array.prototype.slice, arguments) } function m(a, b, c) { var e = l(arguments, 2); return function () { return b.apply(a, e) } } function n(a, b) { var c = new p(b); for (c.h = [a]; c.h.length;) { var e = c, d = c.h.shift(); e.i(d); for (d = d.firstChild; d; d = d.nextSibling)1 == d.nodeType && e.h.push(d) } } function p(a) { this.i = a } function q(a) { a.style.display = "" } function r(a) { a.style.display = "none" }; var t = /\s*;\s*/; function u(a, b) { this.l.apply(this, arguments) } u.prototype.l = function (a, b) { this.a || (this.a = {}); if (b) { var c = this.a, e = b.a; for (d in e) c[d] = e[d] } else { var d = this.a; e = v; for (c in e) d[c] = e[c] } this.a.$this = a; this.a.$context = this; this.f = "undefined" != typeof a && null != a ? a : ""; b || (this.a.$top = this.f) }; var v = { $default: null }, w = []; function x(a) { for (var b in a.a) delete a.a[b]; a.f = null; w.push(a) } function y(a, b, c) { try { return b.call(c, a.a, a.f) } catch (e) { return v.$default } }
	u.prototype.clone = function (a, b, c) { if (0 < w.length) { var e = w.pop(); u.call(e, a, this); a = e } else a = new u(a, this); a.a.$index = b; a.a.$count = c; return a }; var z; window.trustedTypes && (z = trustedTypes.createPolicy("jstemplate", { createScript: function (a) { return a } })); var A = {}; function B(a) { if (!A[a]) try { var b = "(function(a_, b_) { with (a_) with (b_) return " + a + " })", c = window.trustedTypes ? z.createScript(b) : b; A[a] = window.eval(c) } catch (e) { } return A[a] }
	function E(a) { var b = []; a = a.split(t); for (var c = 0, e = a.length; c < e; ++c) { var d = a[c].indexOf(":"); if (!(0 > d)) { var g = a[c].substr(0, d).replace(/^\s+/, "").replace(/\s+$/, ""); d = B(a[c].substr(d + 1)); b.push(g, d) } } return b }; function F() { } var G = 0, H = { 0: {} }, I = {}, J = {}, K = []; function L(a) { a.__jstcache || n(a, function (b) { M(b) }) } var N = [["jsselect", B], ["jsdisplay", B], ["jsvalues", E], ["jsvars", E], ["jseval", function (a) { var b = []; a = a.split(t); for (var c = 0, e = a.length; c < e; ++c)if (a[c]) { var d = B(a[c]); b.push(d) } return b }], ["transclude", function (a) { return a }], ["jscontent", B], ["jsskip", B]];
	function M(a) {
		if (a.__jstcache) return a.__jstcache; var b = a.getAttribute("jstcache"); if (null != b) return a.__jstcache = H[b]; b = K.length = 0; for (var c = N.length; b < c; ++b) { var e = N[b][0], d = a.getAttribute(e); J[e] = d; null != d && K.push(e + "=" + d) } if (0 == K.length) return a.setAttribute("jstcache", "0"), a.__jstcache = H[0]; var g = K.join("&"); if (b = I[g]) return a.setAttribute("jstcache", b), a.__jstcache = H[b]; var h = {}; b = 0; for (c = N.length; b < c; ++b) { d = N[b]; e = d[0]; var f = d[1]; d = J[e]; null != d && (h[e] = f(d)) } b = "" + ++G; a.setAttribute("jstcache",
			b); H[b] = h; I[g] = b; return a.__jstcache = h
	} function P(a, b) { a.j.push(b); a.o.push(0) } function Q(a) { return a.c.length ? a.c.pop() : [] }
	F.prototype.g = function (a, b) {
		var c = R(b), e = c.transclude; if (e) (c = S(e)) ? (b.parentNode.replaceChild(c, b), e = Q(this), e.push(this.g, a, c), P(this, e)) : b.parentNode.removeChild(b); else if (c = c.jsselect) {
			c = y(a, c, b); var d = b.getAttribute("jsinstance"); var g = !1; d && ("*" == d.charAt(0) ? (d = parseInt(d.substr(1), 10), g = !0) : d = parseInt(d, 10)); var h = null != c && "object" == typeof c && "number" == typeof c.length; e = h ? c.length : 1; var f = h && 0 == e; if (h) if (f) d ? b.parentNode.removeChild(b) : (b.setAttribute("jsinstance", "*0"), r(b)); else if (q(b),
				null === d || "" === d || g && d < e - 1) { g = Q(this); d = d || 0; for (h = e - 1; d < h; ++d) { var k = b.cloneNode(!0); b.parentNode.insertBefore(k, b); T(k, c, d); f = a.clone(c[d], d, e); g.push(this.b, f, k, x, f, null) } T(b, c, d); f = a.clone(c[d], d, e); g.push(this.b, f, b, x, f, null); P(this, g) } else d < e ? (g = c[d], T(b, c, d), f = a.clone(g, d, e), g = Q(this), g.push(this.b, f, b, x, f, null), P(this, g)) : b.parentNode.removeChild(b); else null == c ? r(b) : (q(b), f = a.clone(c, 0, 1), g = Q(this), g.push(this.b, f, b, x, f, null), P(this, g))
		} else this.b(a, b)
	};
	F.prototype.b = function (a, b) {
		var c = R(b), e = c.jsdisplay; if (e) { if (!y(a, e, b)) { r(b); return } q(b) } if (e = c.jsvars) for (var d = 0, g = e.length; d < g; d += 2) { var h = e[d], f = y(a, e[d + 1], b); a.a[h] = f } if (e = c.jsvalues) for (d = 0, g = e.length; d < g; d += 2)if (f = e[d], h = y(a, e[d + 1], b), "$" == f.charAt(0)) a.a[f] = h; else if ("." == f.charAt(0)) { f = f.substr(1).split("."); for (var k = b, O = f.length, C = 0, U = O - 1; C < U; ++C) { var D = f[C]; k[D] || (k[D] = {}); k = k[D] } k[f[O - 1]] = h } else f && ("boolean" == typeof h ? h ? b.setAttribute(f, f) : b.removeAttribute(f) : b.setAttribute(f, "" + h));
		if (e = c.jseval) for (d = 0, g = e.length; d < g; ++d)y(a, e[d], b); e = c.jsskip; if (!e || !y(a, e, b)) if (c = c.jscontent) { if (c = "" + y(a, c, b), b.innerHTML != c) { for (; b.firstChild;)e = b.firstChild, e.parentNode.removeChild(e); b.appendChild(this.m.createTextNode(c)) } } else { c = Q(this); for (e = b.firstChild; e; e = e.nextSibling)1 == e.nodeType && c.push(this.g, a, e); c.length && P(this, c) }
	}; function R(a) { if (a.__jstcache) return a.__jstcache; var b = a.getAttribute("jstcache"); return b ? a.__jstcache = H[b] : M(a) }
	function S(a, b) { var c = document; if (b) { var e = c.getElementById(a); if (!e) { e = b(); var d = c.getElementById("jsts"); d || (d = c.createElement("div"), d.id = "jsts", r(d), d.style.position = "absolute", c.body.appendChild(d)); var g = c.createElement("div"); d.appendChild(g); g.innerHTML = e; e = c.getElementById(a) } c = e } else c = c.getElementById(a); return c ? (L(c), c = c.cloneNode(!0), c.removeAttribute("id"), c) : null } function T(a, b, c) { c == b.length - 1 ? a.setAttribute("jsinstance", "*" + c) : a.setAttribute("jsinstance", "" + c) }; window.jstGetTemplate = S; window.JsEvalContext = u; window.jstProcess = function (a, b) { var c = new F; L(b); c.m = b ? 9 == b.nodeType ? b : b.ownerDocument || document : document; var e = m(c, c.g, a, b), d = c.j = [], g = c.o = []; c.c = []; e(); for (var h, f, k; d.length;)h = d[d.length - 1], e = g[g.length - 1], e >= h.length ? (e = c, f = d.pop(), f.length = 0, e.c.push(f), g.pop()) : (f = h[e++], k = h[e++], h = h[e++], g[g.length - 1] = e, f.call(c, k, h)) };
})()// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview This file defines a singleton which provides access to all data
 * that is available as soon as the page's resources are loaded (before DOM
 * content has finished loading). This data includes both localized strings and
 * any data that is important to have ready from a very early stage (e.g. things
 * that must be displayed right away).
 *
 * Note that loadTimeData is not guaranteed to be consistent between page
 * refreshes (https://crbug.com/740629) and should not contain values that might
 * change if the page is re-opened later.
 */

/** @type {!LoadTimeData} */
// eslint-disable-next-line no-var
var loadTimeData;

class LoadTimeData {
	constructor() {
		/** @type {?Object} */
		this.data_ = null;
	}

	/**
	 * Sets the backing object.
	 *
	 * Note that there is no getter for |data_| to discourage abuse of the form:
	 *
	 *     var value = loadTimeData.data()['key'];
	 *
	 * @param {Object} value The de-serialized page data.
	 */
	set data(value) {
		expect(!this.data_, 'Re-setting data.');
		this.data_ = value;
	}

	/**
	 * @param {string} id An ID of a value that might exist.
	 * @return {boolean} True if |id| is a key in the dictionary.
	 */
	valueExists(id) {
		return id in this.data_;
	}

	/**
	 * Fetches a value, expecting that it exists.
	 * @param {string} id The key that identifies the desired value.
	 * @return {*} The corresponding value.
	 */
	getValue(id) {
		expect(this.data_, 'No data. Did you remember to include strings.js?');
		const value = this.data_[id];
		expect(typeof value !== 'undefined', 'Could not find value for ' + id);
		return value;
	}

	/**
	 * As above, but also makes sure that the value is a string.
	 * @param {string} id The key that identifies the desired string.
	 * @return {string} The corresponding string value.
	 */
	getString(id) {
		const value = this.getValue(id);
		expectIsType(id, value, 'string');
		return /** @type {string} */ (value);
	}

	/**
	 * Returns a formatted localized string where $1 to $9 are replaced by the
	 * second to the tenth argument.
	 * @param {string} id The ID of the string we want.
	 * @param {...(string | number)} var_args The extra values to include in the
	 *     formatted output.
	 * @return {string} The formatted string.
	 */
	getStringF(id, var_args) {
		const value = this.getString(id);
		if (!value) {
			return '';
		}

		const args = Array.prototype.slice.call(arguments);
		args[0] = value;
		return this.substituteString.apply(this, args);
	}

	/**
	 * Returns a formatted localized string where $1 to $9 are replaced by the
	 * second to the tenth argument. Any standalone $ signs must be escaped as
	 * $$.
	 * @param {string} label The label to substitute through.
	 *     This is not an resource ID.
	 * @param {...(string | number)} var_args The extra values to include in the
	 *     formatted output.
	 * @return {string} The formatted string.
	 */
	substituteString(label, var_args) {
		const varArgs = arguments;
		return label.replace(/\$(.|$|\n)/g, function (m) {
			expect(m.match(/\$[$1-9]/), 'Unescaped $ found in localized string.');
			return m === '$$' ? '$' : varArgs[m[1]];
		});
	}

	/**
	 * Returns a formatted string where $1 to $9 are replaced by the second to
	 * tenth argument, split apart into a list of pieces describing how the
	 * substitution was performed. Any standalone $ signs must be escaped as $$.
	 * @param {string} label A localized string to substitute through.
	 *     This is not an resource ID.
	 * @param {...(string | number)} var_args The extra values to include in the
	 *     formatted output.
	 * @return {!Array < !{ value: string, arg: (null | string) } >} The formatted
	 *     string pieces.
	 */
	getSubstitutedStringPieces(label, var_args) {
		const varArgs = arguments;
		// Split the string by separately matching all occurrences of $1-9 and of
		// non $1-9 pieces.
		const pieces = (label.match(/(\$[1-9])|(([^$]|\$([^1-9]|$))+)/g) ||
			[]).map(function (p) {
				// Pieces that are not $1-9 should be returned after replacing $$
				// with $.
				if (!p.match(/^\$[1-9]$/)) {
					expect(
						(p.match(/\$/g) || []).length % 2 === 0,
						'Unescaped $ found in localized string.');
					return { value: p.replace(/\$\$/g, '$'), arg: null };
				}

				// Otherwise, return the substitution value.
				return { value: varArgs[p[1]], arg: p };
			});

		return pieces;
	}

	/**
	 * As above, but also makes sure that the value is a boolean.
	 * @param {string} id The key that identifies the desired boolean.
	 * @return {boolean} The corresponding boolean value.
	 */
	getBoolean(id) {
		const value = this.getValue(id);
		expectIsType(id, value, 'boolean');
		return /** @type {boolean} */ (value);
	}

	/**
	 * As above, but also makes sure that the value is an integer.
	 * @param {string} id The key that identifies the desired number.
	 * @return {number} The corresponding number value.
	 */
	getInteger(id) {
		const value = this.getValue(id);
		expectIsType(id, value, 'number');
		expect(value === Math.floor(value), 'Number isn\'t integer: ' + value);
		return /** @type {number} */ (value);
	}

	/**
	 * Override values in loadTimeData with the values found in |replacements|.
	 * @param {Object} replacements The dictionary object of keys to replace.
	 */
	overrideValues(replacements) {
		expect(
			typeof replacements === 'object',
			'Replacements must be a dictionary object.');
		for (const key in replacements) {
			this.data_[key] = replacements[key];
		}
	}

	/**
	 * Reset loadTimeData's data. Should only be used in tests.
	 * @param {? Object} newData The data to restore to, when null restores to
	 *    unset state.
	 */
	resetForTesting(newData = null) {
		this.data_ = newData;
	}

	/**
	 * @return {boolean} Whether loadTimeData.data has been set.
	 */
	isInitialized() {
		return this.data_ !== null;
	}
}

/**
 * Checks condition, throws error message if expectation fails.
 * @param {*} condition The condition to check for truthiness.
 * @param {string} message The message to display if the check fails.
 */
function expect(condition, message) {
	if (!condition) {
		throw new Error(
			'Unexpected condition on ' + document.location.href + ': ' + message);
	}
}

/**
 * Checks that the given value has the given type.
 * @param {string} id The id of the value (only used for error message).
 * @param {*} value The value to check the type on.
 * @param {string} type The type we expect |value| to be.
 */
function expectIsType(id, value, type) {
	expect(
		typeof value === type, '[' + value + '] (' + id + ') is not a ' + type);
}

expect(!loadTimeData, 'should only include this file once');
loadTimeData = new LoadTimeData;

// Expose |loadTimeData| directly on |window|, since within a JS module the
// scope is local and not all files have been updated to import the exported
// |loadTimeData| explicitly.
window.loadTimeData = loadTimeData;

console.warn('crbug/1173575, non-JS module files deprecated.');