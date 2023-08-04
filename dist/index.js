'use strict';

var React = require('react');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;

	var b = "function" === typeof Symbol && Symbol.for,
	  c = b ? Symbol.for("react.element") : 60103,
	  d = b ? Symbol.for("react.portal") : 60106,
	  e = b ? Symbol.for("react.fragment") : 60107,
	  f = b ? Symbol.for("react.strict_mode") : 60108,
	  g = b ? Symbol.for("react.profiler") : 60114,
	  h = b ? Symbol.for("react.provider") : 60109,
	  k = b ? Symbol.for("react.context") : 60110,
	  l = b ? Symbol.for("react.async_mode") : 60111,
	  m = b ? Symbol.for("react.concurrent_mode") : 60111,
	  n = b ? Symbol.for("react.forward_ref") : 60112,
	  p = b ? Symbol.for("react.suspense") : 60113,
	  q = b ? Symbol.for("react.suspense_list") : 60120,
	  r = b ? Symbol.for("react.memo") : 60115,
	  t = b ? Symbol.for("react.lazy") : 60116,
	  v = b ? Symbol.for("react.block") : 60121,
	  w = b ? Symbol.for("react.fundamental") : 60117,
	  x = b ? Symbol.for("react.responder") : 60118,
	  y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;
	    switch (u) {
	      case c:
	        switch (a = a.type, a) {
	          case l:
	          case m:
	          case e:
	          case g:
	          case f:
	          case p:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k:
	              case n:
	              case t:
	              case r:
	              case h:
	                return a;
	              default:
	                return u;
	            }
	        }
	      case d:
	        return u;
	    }
	  }
	}
	function A(a) {
	  return z(a) === m;
	}
	reactIs_production_min.AsyncMode = l;
	reactIs_production_min.ConcurrentMode = m;
	reactIs_production_min.ContextConsumer = k;
	reactIs_production_min.ContextProvider = h;
	reactIs_production_min.Element = c;
	reactIs_production_min.ForwardRef = n;
	reactIs_production_min.Fragment = e;
	reactIs_production_min.Lazy = t;
	reactIs_production_min.Memo = r;
	reactIs_production_min.Portal = d;
	reactIs_production_min.Profiler = g;
	reactIs_production_min.StrictMode = f;
	reactIs_production_min.Suspense = p;
	reactIs_production_min.isAsyncMode = function (a) {
	  return A(a) || z(a) === l;
	};
	reactIs_production_min.isConcurrentMode = A;
	reactIs_production_min.isContextConsumer = function (a) {
	  return z(a) === k;
	};
	reactIs_production_min.isContextProvider = function (a) {
	  return z(a) === h;
	};
	reactIs_production_min.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	reactIs_production_min.isForwardRef = function (a) {
	  return z(a) === n;
	};
	reactIs_production_min.isFragment = function (a) {
	  return z(a) === e;
	};
	reactIs_production_min.isLazy = function (a) {
	  return z(a) === t;
	};
	reactIs_production_min.isMemo = function (a) {
	  return z(a) === r;
	};
	reactIs_production_min.isPortal = function (a) {
	  return z(a) === d;
	};
	reactIs_production_min.isProfiler = function (a) {
	  return z(a) === g;
	};
	reactIs_production_min.isStrictMode = function (a) {
	  return z(a) === f;
	};
	reactIs_production_min.isSuspense = function (a) {
	  return z(a) === p;
	};
	reactIs_production_min.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	reactIs_production_min.typeOf = z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function () {

	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	    // (unstable) APIs that have been removed. Can we remove the symbols?

	    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	    function isValidElementType(type) {
	      return typeof type === 'string' || typeof type === 'function' ||
	      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	    }
	    function typeOf(object) {
	      if (typeof object === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;
	            switch (type) {
	              case REACT_ASYNC_MODE_TYPE:
	              case REACT_CONCURRENT_MODE_TYPE:
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;
	                switch ($$typeofType) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	      return undefined;
	    } // AsyncMode is deprecated along with isAsyncMode

	    var AsyncMode = REACT_ASYNC_MODE_TYPE;
	    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;
	    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	        }
	      }
	      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	    }
	    function isConcurrentMode(object) {
	      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }
	    reactIs_development.AsyncMode = AsyncMode;
	    reactIs_development.ConcurrentMode = ConcurrentMode;
	    reactIs_development.ContextConsumer = ContextConsumer;
	    reactIs_development.ContextProvider = ContextProvider;
	    reactIs_development.Element = Element;
	    reactIs_development.ForwardRef = ForwardRef;
	    reactIs_development.Fragment = Fragment;
	    reactIs_development.Lazy = Lazy;
	    reactIs_development.Memo = Memo;
	    reactIs_development.Portal = Portal;
	    reactIs_development.Profiler = Profiler;
	    reactIs_development.StrictMode = StrictMode;
	    reactIs_development.Suspense = Suspense;
	    reactIs_development.isAsyncMode = isAsyncMode;
	    reactIs_development.isConcurrentMode = isConcurrentMode;
	    reactIs_development.isContextConsumer = isContextConsumer;
	    reactIs_development.isContextProvider = isContextProvider;
	    reactIs_development.isElement = isElement;
	    reactIs_development.isForwardRef = isForwardRef;
	    reactIs_development.isFragment = isFragment;
	    reactIs_development.isLazy = isLazy;
	    reactIs_development.isMemo = isMemo;
	    reactIs_development.isPortal = isPortal;
	    reactIs_development.isProfiler = isProfiler;
	    reactIs_development.isStrictMode = isStrictMode;
	    reactIs_development.isSuspense = isSuspense;
	    reactIs_development.isValidElementType = isValidElementType;
	    reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;

	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }
	  return Object(val);
	}
	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    }

	    // Detect buggy property enumeration order in older V8 versions.

	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
	    test1[5] = 'de';
	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test2 = {};
	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }
	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });
	    if (order2.join('') !== '0123456789') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });
	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }
	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}
	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;
	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);
	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }
	  return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function () {};
	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {/**/}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	          var stack = getStack ? getStack() : '';
	          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};
	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();
	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();
	var printWarning = function () {};
	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	function emptyFunctionThatReturnsNull() {
	  return null;
	}
	factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data : {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	    return chainedCheckType;
	  }
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
	          expectedType: expectedType
	        });
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
	        return emptyFunctionThatReturnsNull;
	      }
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
	  }
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	        return true;
	      default:
	        return false;
	    }
	  }
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var moment$1 = {exports: {}};

(function (module, exports) {
	(function (global, factory) {
	  module.exports = factory() ;
	})(commonjsGlobal, function () {

	  var hookCallback;
	  function hooks() {
	    return hookCallback.apply(null, arguments);
	  }

	  // This is done to register the method called with moment()
	  // without creating circular dependencies.
	  function setHookCallback(callback) {
	    hookCallback = callback;
	  }
	  function isArray(input) {
	    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	  }
	  function isObject(input) {
	    // IE8 will treat undefined and null as object if it wasn't for
	    // input != null
	    return input != null && Object.prototype.toString.call(input) === '[object Object]';
	  }
	  function hasOwnProp(a, b) {
	    return Object.prototype.hasOwnProperty.call(a, b);
	  }
	  function isObjectEmpty(obj) {
	    if (Object.getOwnPropertyNames) {
	      return Object.getOwnPropertyNames(obj).length === 0;
	    } else {
	      var k;
	      for (k in obj) {
	        if (hasOwnProp(obj, k)) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }
	  function isUndefined(input) {
	    return input === void 0;
	  }
	  function isNumber(input) {
	    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
	  }
	  function isDate(input) {
	    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	  }
	  function map(arr, fn) {
	    var res = [],
	      i,
	      arrLen = arr.length;
	    for (i = 0; i < arrLen; ++i) {
	      res.push(fn(arr[i], i));
	    }
	    return res;
	  }
	  function extend(a, b) {
	    for (var i in b) {
	      if (hasOwnProp(b, i)) {
	        a[i] = b[i];
	      }
	    }
	    if (hasOwnProp(b, 'toString')) {
	      a.toString = b.toString;
	    }
	    if (hasOwnProp(b, 'valueOf')) {
	      a.valueOf = b.valueOf;
	    }
	    return a;
	  }
	  function createUTC(input, format, locale, strict) {
	    return createLocalOrUTC(input, format, locale, strict, true).utc();
	  }
	  function defaultParsingFlags() {
	    // We need to deep clone this object.
	    return {
	      empty: false,
	      unusedTokens: [],
	      unusedInput: [],
	      overflow: -2,
	      charsLeftOver: 0,
	      nullInput: false,
	      invalidEra: null,
	      invalidMonth: null,
	      invalidFormat: false,
	      userInvalidated: false,
	      iso: false,
	      parsedDateParts: [],
	      era: null,
	      meridiem: null,
	      rfc2822: false,
	      weekdayMismatch: false
	    };
	  }
	  function getParsingFlags(m) {
	    if (m._pf == null) {
	      m._pf = defaultParsingFlags();
	    }
	    return m._pf;
	  }
	  var some;
	  if (Array.prototype.some) {
	    some = Array.prototype.some;
	  } else {
	    some = function (fun) {
	      var t = Object(this),
	        len = t.length >>> 0,
	        i;
	      for (i = 0; i < len; i++) {
	        if (i in t && fun.call(this, t[i], i, t)) {
	          return true;
	        }
	      }
	      return false;
	    };
	  }
	  function isValid(m) {
	    if (m._isValid == null) {
	      var flags = getParsingFlags(m),
	        parsedParts = some.call(flags.parsedDateParts, function (i) {
	          return i != null;
	        }),
	        isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
	      if (m._strict) {
	        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
	      }
	      if (Object.isFrozen == null || !Object.isFrozen(m)) {
	        m._isValid = isNowValid;
	      } else {
	        return isNowValid;
	      }
	    }
	    return m._isValid;
	  }
	  function createInvalid(flags) {
	    var m = createUTC(NaN);
	    if (flags != null) {
	      extend(getParsingFlags(m), flags);
	    } else {
	      getParsingFlags(m).userInvalidated = true;
	    }
	    return m;
	  }

	  // Plugins that add properties should also add the key here (null value),
	  // so we can properly clone ourselves.
	  var momentProperties = hooks.momentProperties = [],
	    updateInProgress = false;
	  function copyConfig(to, from) {
	    var i,
	      prop,
	      val,
	      momentPropertiesLen = momentProperties.length;
	    if (!isUndefined(from._isAMomentObject)) {
	      to._isAMomentObject = from._isAMomentObject;
	    }
	    if (!isUndefined(from._i)) {
	      to._i = from._i;
	    }
	    if (!isUndefined(from._f)) {
	      to._f = from._f;
	    }
	    if (!isUndefined(from._l)) {
	      to._l = from._l;
	    }
	    if (!isUndefined(from._strict)) {
	      to._strict = from._strict;
	    }
	    if (!isUndefined(from._tzm)) {
	      to._tzm = from._tzm;
	    }
	    if (!isUndefined(from._isUTC)) {
	      to._isUTC = from._isUTC;
	    }
	    if (!isUndefined(from._offset)) {
	      to._offset = from._offset;
	    }
	    if (!isUndefined(from._pf)) {
	      to._pf = getParsingFlags(from);
	    }
	    if (!isUndefined(from._locale)) {
	      to._locale = from._locale;
	    }
	    if (momentPropertiesLen > 0) {
	      for (i = 0; i < momentPropertiesLen; i++) {
	        prop = momentProperties[i];
	        val = from[prop];
	        if (!isUndefined(val)) {
	          to[prop] = val;
	        }
	      }
	    }
	    return to;
	  }

	  // Moment prototype object
	  function Moment(config) {
	    copyConfig(this, config);
	    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	    if (!this.isValid()) {
	      this._d = new Date(NaN);
	    }
	    // Prevent infinite loop in case updateOffset creates new moment
	    // objects.
	    if (updateInProgress === false) {
	      updateInProgress = true;
	      hooks.updateOffset(this);
	      updateInProgress = false;
	    }
	  }
	  function isMoment(obj) {
	    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
	  }
	  function warn(msg) {
	    if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
	      console.warn('Deprecation warning: ' + msg);
	    }
	  }
	  function deprecate(msg, fn) {
	    var firstTime = true;
	    return extend(function () {
	      if (hooks.deprecationHandler != null) {
	        hooks.deprecationHandler(null, msg);
	      }
	      if (firstTime) {
	        var args = [],
	          arg,
	          i,
	          key,
	          argLen = arguments.length;
	        for (i = 0; i < argLen; i++) {
	          arg = '';
	          if (typeof arguments[i] === 'object') {
	            arg += '\n[' + i + '] ';
	            for (key in arguments[0]) {
	              if (hasOwnProp(arguments[0], key)) {
	                arg += key + ': ' + arguments[0][key] + ', ';
	              }
	            }
	            arg = arg.slice(0, -2); // Remove trailing comma and space
	          } else {
	            arg = arguments[i];
	          }
	          args.push(arg);
	        }
	        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
	        firstTime = false;
	      }
	      return fn.apply(this, arguments);
	    }, fn);
	  }
	  var deprecations = {};
	  function deprecateSimple(name, msg) {
	    if (hooks.deprecationHandler != null) {
	      hooks.deprecationHandler(name, msg);
	    }
	    if (!deprecations[name]) {
	      warn(msg);
	      deprecations[name] = true;
	    }
	  }
	  hooks.suppressDeprecationWarnings = false;
	  hooks.deprecationHandler = null;
	  function isFunction(input) {
	    return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	  }
	  function set(config) {
	    var prop, i;
	    for (i in config) {
	      if (hasOwnProp(config, i)) {
	        prop = config[i];
	        if (isFunction(prop)) {
	          this[i] = prop;
	        } else {
	          this['_' + i] = prop;
	        }
	      }
	    }
	    this._config = config;
	    // Lenient ordinal parsing accepts just a number in addition to
	    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
	    // TODO: Remove "ordinalParse" fallback in next major release.
	    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
	  }
	  function mergeConfigs(parentConfig, childConfig) {
	    var res = extend({}, parentConfig),
	      prop;
	    for (prop in childConfig) {
	      if (hasOwnProp(childConfig, prop)) {
	        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	          res[prop] = {};
	          extend(res[prop], parentConfig[prop]);
	          extend(res[prop], childConfig[prop]);
	        } else if (childConfig[prop] != null) {
	          res[prop] = childConfig[prop];
	        } else {
	          delete res[prop];
	        }
	      }
	    }
	    for (prop in parentConfig) {
	      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
	        // make sure changes to properties don't modify parent config
	        res[prop] = extend({}, res[prop]);
	      }
	    }
	    return res;
	  }
	  function Locale(config) {
	    if (config != null) {
	      this.set(config);
	    }
	  }
	  var keys;
	  if (Object.keys) {
	    keys = Object.keys;
	  } else {
	    keys = function (obj) {
	      var i,
	        res = [];
	      for (i in obj) {
	        if (hasOwnProp(obj, i)) {
	          res.push(i);
	        }
	      }
	      return res;
	    };
	  }
	  var defaultCalendar = {
	    sameDay: '[Today at] LT',
	    nextDay: '[Tomorrow at] LT',
	    nextWeek: 'dddd [at] LT',
	    lastDay: '[Yesterday at] LT',
	    lastWeek: '[Last] dddd [at] LT',
	    sameElse: 'L'
	  };
	  function calendar(key, mom, now) {
	    var output = this._calendar[key] || this._calendar['sameElse'];
	    return isFunction(output) ? output.call(mom, now) : output;
	  }
	  function zeroFill(number, targetLength, forceSign) {
	    var absNumber = '' + Math.abs(number),
	      zerosToFill = targetLength - absNumber.length,
	      sign = number >= 0;
	    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	  }
	  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
	    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	    formatFunctions = {},
	    formatTokenFunctions = {};

	  // token:    'M'
	  // padded:   ['MM', 2]
	  // ordinal:  'Mo'
	  // callback: function () { this.month() + 1 }
	  function addFormatToken(token, padded, ordinal, callback) {
	    var func = callback;
	    if (typeof callback === 'string') {
	      func = function () {
	        return this[callback]();
	      };
	    }
	    if (token) {
	      formatTokenFunctions[token] = func;
	    }
	    if (padded) {
	      formatTokenFunctions[padded[0]] = function () {
	        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	      };
	    }
	    if (ordinal) {
	      formatTokenFunctions[ordinal] = function () {
	        return this.localeData().ordinal(func.apply(this, arguments), token);
	      };
	    }
	  }
	  function removeFormattingTokens(input) {
	    if (input.match(/\[[\s\S]/)) {
	      return input.replace(/^\[|\]$/g, '');
	    }
	    return input.replace(/\\/g, '');
	  }
	  function makeFormatFunction(format) {
	    var array = format.match(formattingTokens),
	      i,
	      length;
	    for (i = 0, length = array.length; i < length; i++) {
	      if (formatTokenFunctions[array[i]]) {
	        array[i] = formatTokenFunctions[array[i]];
	      } else {
	        array[i] = removeFormattingTokens(array[i]);
	      }
	    }
	    return function (mom) {
	      var output = '',
	        i;
	      for (i = 0; i < length; i++) {
	        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
	      }
	      return output;
	    };
	  }

	  // format date using native date object
	  function formatMoment(m, format) {
	    if (!m.isValid()) {
	      return m.localeData().invalidDate();
	    }
	    format = expandFormat(format, m.localeData());
	    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	    return formatFunctions[format](m);
	  }
	  function expandFormat(format, locale) {
	    var i = 5;
	    function replaceLongDateFormatTokens(input) {
	      return locale.longDateFormat(input) || input;
	    }
	    localFormattingTokens.lastIndex = 0;
	    while (i >= 0 && localFormattingTokens.test(format)) {
	      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	      localFormattingTokens.lastIndex = 0;
	      i -= 1;
	    }
	    return format;
	  }
	  var defaultLongDateFormat = {
	    LTS: 'h:mm:ss A',
	    LT: 'h:mm A',
	    L: 'MM/DD/YYYY',
	    LL: 'MMMM D, YYYY',
	    LLL: 'MMMM D, YYYY h:mm A',
	    LLLL: 'dddd, MMMM D, YYYY h:mm A'
	  };
	  function longDateFormat(key) {
	    var format = this._longDateFormat[key],
	      formatUpper = this._longDateFormat[key.toUpperCase()];
	    if (format || !formatUpper) {
	      return format;
	    }
	    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
	      if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
	        return tok.slice(1);
	      }
	      return tok;
	    }).join('');
	    return this._longDateFormat[key];
	  }
	  var defaultInvalidDate = 'Invalid date';
	  function invalidDate() {
	    return this._invalidDate;
	  }
	  var defaultOrdinal = '%d',
	    defaultDayOfMonthOrdinalParse = /\d{1,2}/;
	  function ordinal(number) {
	    return this._ordinal.replace('%d', number);
	  }
	  var defaultRelativeTime = {
	    future: 'in %s',
	    past: '%s ago',
	    s: 'a few seconds',
	    ss: '%d seconds',
	    m: 'a minute',
	    mm: '%d minutes',
	    h: 'an hour',
	    hh: '%d hours',
	    d: 'a day',
	    dd: '%d days',
	    w: 'a week',
	    ww: '%d weeks',
	    M: 'a month',
	    MM: '%d months',
	    y: 'a year',
	    yy: '%d years'
	  };
	  function relativeTime(number, withoutSuffix, string, isFuture) {
	    var output = this._relativeTime[string];
	    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
	  }
	  function pastFuture(diff, output) {
	    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	  }
	  var aliases = {};
	  function addUnitAlias(unit, shorthand) {
	    var lowerCase = unit.toLowerCase();
	    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	  }
	  function normalizeUnits(units) {
	    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	  }
	  function normalizeObjectUnits(inputObject) {
	    var normalizedInput = {},
	      normalizedProp,
	      prop;
	    for (prop in inputObject) {
	      if (hasOwnProp(inputObject, prop)) {
	        normalizedProp = normalizeUnits(prop);
	        if (normalizedProp) {
	          normalizedInput[normalizedProp] = inputObject[prop];
	        }
	      }
	    }
	    return normalizedInput;
	  }
	  var priorities = {};
	  function addUnitPriority(unit, priority) {
	    priorities[unit] = priority;
	  }
	  function getPrioritizedUnits(unitsObj) {
	    var units = [],
	      u;
	    for (u in unitsObj) {
	      if (hasOwnProp(unitsObj, u)) {
	        units.push({
	          unit: u,
	          priority: priorities[u]
	        });
	      }
	    }
	    units.sort(function (a, b) {
	      return a.priority - b.priority;
	    });
	    return units;
	  }
	  function isLeapYear(year) {
	    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	  }
	  function absFloor(number) {
	    if (number < 0) {
	      // -0 -> 0
	      return Math.ceil(number) || 0;
	    } else {
	      return Math.floor(number);
	    }
	  }
	  function toInt(argumentForCoercion) {
	    var coercedNumber = +argumentForCoercion,
	      value = 0;
	    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	      value = absFloor(coercedNumber);
	    }
	    return value;
	  }
	  function makeGetSet(unit, keepTime) {
	    return function (value) {
	      if (value != null) {
	        set$1(this, unit, value);
	        hooks.updateOffset(this, keepTime);
	        return this;
	      } else {
	        return get(this, unit);
	      }
	    };
	  }
	  function get(mom, unit) {
	    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	  }
	  function set$1(mom, unit, value) {
	    if (mom.isValid() && !isNaN(value)) {
	      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
	        value = toInt(value);
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
	      } else {
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	      }
	    }
	  }

	  // MOMENTS

	  function stringGet(units) {
	    units = normalizeUnits(units);
	    if (isFunction(this[units])) {
	      return this[units]();
	    }
	    return this;
	  }
	  function stringSet(units, value) {
	    if (typeof units === 'object') {
	      units = normalizeObjectUnits(units);
	      var prioritized = getPrioritizedUnits(units),
	        i,
	        prioritizedLen = prioritized.length;
	      for (i = 0; i < prioritizedLen; i++) {
	        this[prioritized[i].unit](units[prioritized[i].unit]);
	      }
	    } else {
	      units = normalizeUnits(units);
	      if (isFunction(this[units])) {
	        return this[units](value);
	      }
	    }
	    return this;
	  }
	  var match1 = /\d/,
	    //       0 - 9
	    match2 = /\d\d/,
	    //      00 - 99
	    match3 = /\d{3}/,
	    //     000 - 999
	    match4 = /\d{4}/,
	    //    0000 - 9999
	    match6 = /[+-]?\d{6}/,
	    // -999999 - 999999
	    match1to2 = /\d\d?/,
	    //       0 - 99
	    match3to4 = /\d\d\d\d?/,
	    //     999 - 9999
	    match5to6 = /\d\d\d\d\d\d?/,
	    //   99999 - 999999
	    match1to3 = /\d{1,3}/,
	    //       0 - 999
	    match1to4 = /\d{1,4}/,
	    //       0 - 9999
	    match1to6 = /[+-]?\d{1,6}/,
	    // -999999 - 999999
	    matchUnsigned = /\d+/,
	    //       0 - inf
	    matchSigned = /[+-]?\d+/,
	    //    -inf - inf
	    matchOffset = /Z|[+-]\d\d:?\d\d/gi,
	    // +00:00 -00:00 +0000 -0000 or Z
	    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
	    // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
	    // 123456789 123456789.123
	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
	    regexes;
	  regexes = {};
	  function addRegexToken(token, regex, strictRegex) {
	    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	      return isStrict && strictRegex ? strictRegex : regex;
	    };
	  }
	  function getParseRegexForToken(token, config) {
	    if (!hasOwnProp(regexes, token)) {
	      return new RegExp(unescapeFormat(token));
	    }
	    return regexes[token](config._strict, config._locale);
	  }

	  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	  function unescapeFormat(s) {
	    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	      return p1 || p2 || p3 || p4;
	    }));
	  }
	  function regexEscape(s) {
	    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	  }
	  var tokens = {};
	  function addParseToken(token, callback) {
	    var i,
	      func = callback,
	      tokenLen;
	    if (typeof token === 'string') {
	      token = [token];
	    }
	    if (isNumber(callback)) {
	      func = function (input, array) {
	        array[callback] = toInt(input);
	      };
	    }
	    tokenLen = token.length;
	    for (i = 0; i < tokenLen; i++) {
	      tokens[token[i]] = func;
	    }
	  }
	  function addWeekParseToken(token, callback) {
	    addParseToken(token, function (input, array, config, token) {
	      config._w = config._w || {};
	      callback(input, config._w, config, token);
	    });
	  }
	  function addTimeToArrayFromToken(token, input, config) {
	    if (input != null && hasOwnProp(tokens, token)) {
	      tokens[token](input, config._a, config, token);
	    }
	  }
	  var YEAR = 0,
	    MONTH = 1,
	    DATE = 2,
	    HOUR = 3,
	    MINUTE = 4,
	    SECOND = 5,
	    MILLISECOND = 6,
	    WEEK = 7,
	    WEEKDAY = 8;
	  function mod(n, x) {
	    return (n % x + x) % x;
	  }
	  var indexOf;
	  if (Array.prototype.indexOf) {
	    indexOf = Array.prototype.indexOf;
	  } else {
	    indexOf = function (o) {
	      // I know
	      var i;
	      for (i = 0; i < this.length; ++i) {
	        if (this[i] === o) {
	          return i;
	        }
	      }
	      return -1;
	    };
	  }
	  function daysInMonth(year, month) {
	    if (isNaN(year) || isNaN(month)) {
	      return NaN;
	    }
	    var modMonth = mod(month, 12);
	    year += (month - modMonth) / 12;
	    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
	  }

	  // FORMATTING

	  addFormatToken('M', ['MM', 2], 'Mo', function () {
	    return this.month() + 1;
	  });
	  addFormatToken('MMM', 0, 0, function (format) {
	    return this.localeData().monthsShort(this, format);
	  });
	  addFormatToken('MMMM', 0, 0, function (format) {
	    return this.localeData().months(this, format);
	  });

	  // ALIASES

	  addUnitAlias('month', 'M');

	  // PRIORITY

	  addUnitPriority('month', 8);

	  // PARSING

	  addRegexToken('M', match1to2);
	  addRegexToken('MM', match1to2, match2);
	  addRegexToken('MMM', function (isStrict, locale) {
	    return locale.monthsShortRegex(isStrict);
	  });
	  addRegexToken('MMMM', function (isStrict, locale) {
	    return locale.monthsRegex(isStrict);
	  });
	  addParseToken(['M', 'MM'], function (input, array) {
	    array[MONTH] = toInt(input) - 1;
	  });
	  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	    var month = config._locale.monthsParse(input, token, config._strict);
	    // if we didn't find a month name, mark the date as invalid.
	    if (month != null) {
	      array[MONTH] = month;
	    } else {
	      getParsingFlags(config).invalidMonth = input;
	    }
	  });

	  // LOCALES

	  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
	    defaultMonthsShortRegex = matchWord,
	    defaultMonthsRegex = matchWord;
	  function localeMonths(m, format) {
	    if (!m) {
	      return isArray(this._months) ? this._months : this._months['standalone'];
	    }
	    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	  }
	  function localeMonthsShort(m, format) {
	    if (!m) {
	      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
	    }
	    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	  }
	  function handleStrictParse(monthName, format, strict) {
	    var i,
	      ii,
	      mom,
	      llc = monthName.toLocaleLowerCase();
	    if (!this._monthsParse) {
	      // this is not used
	      this._monthsParse = [];
	      this._longMonthsParse = [];
	      this._shortMonthsParse = [];
	      for (i = 0; i < 12; ++i) {
	        mom = createUTC([2000, i]);
	        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	      }
	    }
	    if (strict) {
	      if (format === 'MMM') {
	        ii = indexOf.call(this._shortMonthsParse, llc);
	        return ii !== -1 ? ii : null;
	      } else {
	        ii = indexOf.call(this._longMonthsParse, llc);
	        return ii !== -1 ? ii : null;
	      }
	    } else {
	      if (format === 'MMM') {
	        ii = indexOf.call(this._shortMonthsParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._longMonthsParse, llc);
	        return ii !== -1 ? ii : null;
	      } else {
	        ii = indexOf.call(this._longMonthsParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._shortMonthsParse, llc);
	        return ii !== -1 ? ii : null;
	      }
	    }
	  }
	  function localeMonthsParse(monthName, format, strict) {
	    var i, mom, regex;
	    if (this._monthsParseExact) {
	      return handleStrictParse.call(this, monthName, format, strict);
	    }
	    if (!this._monthsParse) {
	      this._monthsParse = [];
	      this._longMonthsParse = [];
	      this._shortMonthsParse = [];
	    }

	    // TODO: add sorting
	    // Sorting makes sure if one month (or abbr) is a prefix of another
	    // see sorting in computeMonthsParse
	    for (i = 0; i < 12; i++) {
	      // make the regex if we don't have it already
	      mom = createUTC([2000, i]);
	      if (strict && !this._longMonthsParse[i]) {
	        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	      }
	      if (!strict && !this._monthsParse[i]) {
	        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	      }
	      // test the regex
	      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	        return i;
	      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	        return i;
	      } else if (!strict && this._monthsParse[i].test(monthName)) {
	        return i;
	      }
	    }
	  }

	  // MOMENTS

	  function setMonth(mom, value) {
	    var dayOfMonth;
	    if (!mom.isValid()) {
	      // No op
	      return mom;
	    }
	    if (typeof value === 'string') {
	      if (/^\d+$/.test(value)) {
	        value = toInt(value);
	      } else {
	        value = mom.localeData().monthsParse(value);
	        // TODO: Another silent failure?
	        if (!isNumber(value)) {
	          return mom;
	        }
	      }
	    }
	    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	    return mom;
	  }
	  function getSetMonth(value) {
	    if (value != null) {
	      setMonth(this, value);
	      hooks.updateOffset(this, true);
	      return this;
	    } else {
	      return get(this, 'Month');
	    }
	  }
	  function getDaysInMonth() {
	    return daysInMonth(this.year(), this.month());
	  }
	  function monthsShortRegex(isStrict) {
	    if (this._monthsParseExact) {
	      if (!hasOwnProp(this, '_monthsRegex')) {
	        computeMonthsParse.call(this);
	      }
	      if (isStrict) {
	        return this._monthsShortStrictRegex;
	      } else {
	        return this._monthsShortRegex;
	      }
	    } else {
	      if (!hasOwnProp(this, '_monthsShortRegex')) {
	        this._monthsShortRegex = defaultMonthsShortRegex;
	      }
	      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
	    }
	  }
	  function monthsRegex(isStrict) {
	    if (this._monthsParseExact) {
	      if (!hasOwnProp(this, '_monthsRegex')) {
	        computeMonthsParse.call(this);
	      }
	      if (isStrict) {
	        return this._monthsStrictRegex;
	      } else {
	        return this._monthsRegex;
	      }
	    } else {
	      if (!hasOwnProp(this, '_monthsRegex')) {
	        this._monthsRegex = defaultMonthsRegex;
	      }
	      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
	    }
	  }
	  function computeMonthsParse() {
	    function cmpLenRev(a, b) {
	      return b.length - a.length;
	    }
	    var shortPieces = [],
	      longPieces = [],
	      mixedPieces = [],
	      i,
	      mom;
	    for (i = 0; i < 12; i++) {
	      // make the regex if we don't have it already
	      mom = createUTC([2000, i]);
	      shortPieces.push(this.monthsShort(mom, ''));
	      longPieces.push(this.months(mom, ''));
	      mixedPieces.push(this.months(mom, ''));
	      mixedPieces.push(this.monthsShort(mom, ''));
	    }
	    // Sorting makes sure if one month (or abbr) is a prefix of another it
	    // will match the longer piece.
	    shortPieces.sort(cmpLenRev);
	    longPieces.sort(cmpLenRev);
	    mixedPieces.sort(cmpLenRev);
	    for (i = 0; i < 12; i++) {
	      shortPieces[i] = regexEscape(shortPieces[i]);
	      longPieces[i] = regexEscape(longPieces[i]);
	    }
	    for (i = 0; i < 24; i++) {
	      mixedPieces[i] = regexEscape(mixedPieces[i]);
	    }
	    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	    this._monthsShortRegex = this._monthsRegex;
	    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	  }

	  // FORMATTING

	  addFormatToken('Y', 0, 0, function () {
	    var y = this.year();
	    return y <= 9999 ? zeroFill(y, 4) : '+' + y;
	  });
	  addFormatToken(0, ['YY', 2], 0, function () {
	    return this.year() % 100;
	  });
	  addFormatToken(0, ['YYYY', 4], 0, 'year');
	  addFormatToken(0, ['YYYYY', 5], 0, 'year');
	  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	  // ALIASES

	  addUnitAlias('year', 'y');

	  // PRIORITIES

	  addUnitPriority('year', 1);

	  // PARSING

	  addRegexToken('Y', matchSigned);
	  addRegexToken('YY', match1to2, match2);
	  addRegexToken('YYYY', match1to4, match4);
	  addRegexToken('YYYYY', match1to6, match6);
	  addRegexToken('YYYYYY', match1to6, match6);
	  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	  addParseToken('YYYY', function (input, array) {
	    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
	  });
	  addParseToken('YY', function (input, array) {
	    array[YEAR] = hooks.parseTwoDigitYear(input);
	  });
	  addParseToken('Y', function (input, array) {
	    array[YEAR] = parseInt(input, 10);
	  });

	  // HELPERS

	  function daysInYear(year) {
	    return isLeapYear(year) ? 366 : 365;
	  }

	  // HOOKS

	  hooks.parseTwoDigitYear = function (input) {
	    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	  };

	  // MOMENTS

	  var getSetYear = makeGetSet('FullYear', true);
	  function getIsLeapYear() {
	    return isLeapYear(this.year());
	  }
	  function createDate(y, m, d, h, M, s, ms) {
	    // can't just apply() to create a date:
	    // https://stackoverflow.com/q/181348
	    var date;
	    // the date constructor remaps years 0-99 to 1900-1999
	    if (y < 100 && y >= 0) {
	      // preserve leap years using a full 400 year cycle, then reset
	      date = new Date(y + 400, m, d, h, M, s, ms);
	      if (isFinite(date.getFullYear())) {
	        date.setFullYear(y);
	      }
	    } else {
	      date = new Date(y, m, d, h, M, s, ms);
	    }
	    return date;
	  }
	  function createUTCDate(y) {
	    var date, args;
	    // the Date.UTC function remaps years 0-99 to 1900-1999
	    if (y < 100 && y >= 0) {
	      args = Array.prototype.slice.call(arguments);
	      // preserve leap years using a full 400 year cycle, then reset
	      args[0] = y + 400;
	      date = new Date(Date.UTC.apply(null, args));
	      if (isFinite(date.getUTCFullYear())) {
	        date.setUTCFullYear(y);
	      }
	    } else {
	      date = new Date(Date.UTC.apply(null, arguments));
	    }
	    return date;
	  }

	  // start-of-first-week - start-of-year
	  function firstWeekOffset(year, dow, doy) {
	    var
	      // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	      fwd = 7 + dow - doy,
	      // first-week day local weekday -- which local weekday is fwd
	      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	    return -fwdlw + fwd - 1;
	  }

	  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	    var localWeekday = (7 + weekday - dow) % 7,
	      weekOffset = firstWeekOffset(year, dow, doy),
	      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	      resYear,
	      resDayOfYear;
	    if (dayOfYear <= 0) {
	      resYear = year - 1;
	      resDayOfYear = daysInYear(resYear) + dayOfYear;
	    } else if (dayOfYear > daysInYear(year)) {
	      resYear = year + 1;
	      resDayOfYear = dayOfYear - daysInYear(year);
	    } else {
	      resYear = year;
	      resDayOfYear = dayOfYear;
	    }
	    return {
	      year: resYear,
	      dayOfYear: resDayOfYear
	    };
	  }
	  function weekOfYear(mom, dow, doy) {
	    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	      resWeek,
	      resYear;
	    if (week < 1) {
	      resYear = mom.year() - 1;
	      resWeek = week + weeksInYear(resYear, dow, doy);
	    } else if (week > weeksInYear(mom.year(), dow, doy)) {
	      resWeek = week - weeksInYear(mom.year(), dow, doy);
	      resYear = mom.year() + 1;
	    } else {
	      resYear = mom.year();
	      resWeek = week;
	    }
	    return {
	      week: resWeek,
	      year: resYear
	    };
	  }
	  function weeksInYear(year, dow, doy) {
	    var weekOffset = firstWeekOffset(year, dow, doy),
	      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	  }

	  // FORMATTING

	  addFormatToken('w', ['ww', 2], 'wo', 'week');
	  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	  // ALIASES

	  addUnitAlias('week', 'w');
	  addUnitAlias('isoWeek', 'W');

	  // PRIORITIES

	  addUnitPriority('week', 5);
	  addUnitPriority('isoWeek', 5);

	  // PARSING

	  addRegexToken('w', match1to2);
	  addRegexToken('ww', match1to2, match2);
	  addRegexToken('W', match1to2);
	  addRegexToken('WW', match1to2, match2);
	  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	    week[token.substr(0, 1)] = toInt(input);
	  });

	  // HELPERS

	  // LOCALES

	  function localeWeek(mom) {
	    return weekOfYear(mom, this._week.dow, this._week.doy).week;
	  }
	  var defaultLocaleWeek = {
	    dow: 0,
	    // Sunday is the first day of the week.
	    doy: 6 // The week that contains Jan 6th is the first week of the year.
	  };

	  function localeFirstDayOfWeek() {
	    return this._week.dow;
	  }
	  function localeFirstDayOfYear() {
	    return this._week.doy;
	  }

	  // MOMENTS

	  function getSetWeek(input) {
	    var week = this.localeData().week(this);
	    return input == null ? week : this.add((input - week) * 7, 'd');
	  }
	  function getSetISOWeek(input) {
	    var week = weekOfYear(this, 1, 4).week;
	    return input == null ? week : this.add((input - week) * 7, 'd');
	  }

	  // FORMATTING

	  addFormatToken('d', 0, 'do', 'day');
	  addFormatToken('dd', 0, 0, function (format) {
	    return this.localeData().weekdaysMin(this, format);
	  });
	  addFormatToken('ddd', 0, 0, function (format) {
	    return this.localeData().weekdaysShort(this, format);
	  });
	  addFormatToken('dddd', 0, 0, function (format) {
	    return this.localeData().weekdays(this, format);
	  });
	  addFormatToken('e', 0, 0, 'weekday');
	  addFormatToken('E', 0, 0, 'isoWeekday');

	  // ALIASES

	  addUnitAlias('day', 'd');
	  addUnitAlias('weekday', 'e');
	  addUnitAlias('isoWeekday', 'E');

	  // PRIORITY
	  addUnitPriority('day', 11);
	  addUnitPriority('weekday', 11);
	  addUnitPriority('isoWeekday', 11);

	  // PARSING

	  addRegexToken('d', match1to2);
	  addRegexToken('e', match1to2);
	  addRegexToken('E', match1to2);
	  addRegexToken('dd', function (isStrict, locale) {
	    return locale.weekdaysMinRegex(isStrict);
	  });
	  addRegexToken('ddd', function (isStrict, locale) {
	    return locale.weekdaysShortRegex(isStrict);
	  });
	  addRegexToken('dddd', function (isStrict, locale) {
	    return locale.weekdaysRegex(isStrict);
	  });
	  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	    var weekday = config._locale.weekdaysParse(input, token, config._strict);
	    // if we didn't get a weekday name, mark the date as invalid
	    if (weekday != null) {
	      week.d = weekday;
	    } else {
	      getParsingFlags(config).invalidWeekday = input;
	    }
	  });
	  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	    week[token] = toInt(input);
	  });

	  // HELPERS

	  function parseWeekday(input, locale) {
	    if (typeof input !== 'string') {
	      return input;
	    }
	    if (!isNaN(input)) {
	      return parseInt(input, 10);
	    }
	    input = locale.weekdaysParse(input);
	    if (typeof input === 'number') {
	      return input;
	    }
	    return null;
	  }
	  function parseIsoWeekday(input, locale) {
	    if (typeof input === 'string') {
	      return locale.weekdaysParse(input) % 7 || 7;
	    }
	    return isNaN(input) ? null : input;
	  }

	  // LOCALES
	  function shiftWeekdays(ws, n) {
	    return ws.slice(n, 7).concat(ws.slice(0, n));
	  }
	  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	    defaultWeekdaysRegex = matchWord,
	    defaultWeekdaysShortRegex = matchWord,
	    defaultWeekdaysMinRegex = matchWord;
	  function localeWeekdays(m, format) {
	    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
	    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
	  }
	  function localeWeekdaysShort(m) {
	    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
	  }
	  function localeWeekdaysMin(m) {
	    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
	  }
	  function handleStrictParse$1(weekdayName, format, strict) {
	    var i,
	      ii,
	      mom,
	      llc = weekdayName.toLocaleLowerCase();
	    if (!this._weekdaysParse) {
	      this._weekdaysParse = [];
	      this._shortWeekdaysParse = [];
	      this._minWeekdaysParse = [];
	      for (i = 0; i < 7; ++i) {
	        mom = createUTC([2000, 1]).day(i);
	        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	      }
	    }
	    if (strict) {
	      if (format === 'dddd') {
	        ii = indexOf.call(this._weekdaysParse, llc);
	        return ii !== -1 ? ii : null;
	      } else if (format === 'ddd') {
	        ii = indexOf.call(this._shortWeekdaysParse, llc);
	        return ii !== -1 ? ii : null;
	      } else {
	        ii = indexOf.call(this._minWeekdaysParse, llc);
	        return ii !== -1 ? ii : null;
	      }
	    } else {
	      if (format === 'dddd') {
	        ii = indexOf.call(this._weekdaysParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._shortWeekdaysParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._minWeekdaysParse, llc);
	        return ii !== -1 ? ii : null;
	      } else if (format === 'ddd') {
	        ii = indexOf.call(this._shortWeekdaysParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._weekdaysParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._minWeekdaysParse, llc);
	        return ii !== -1 ? ii : null;
	      } else {
	        ii = indexOf.call(this._minWeekdaysParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._weekdaysParse, llc);
	        if (ii !== -1) {
	          return ii;
	        }
	        ii = indexOf.call(this._shortWeekdaysParse, llc);
	        return ii !== -1 ? ii : null;
	      }
	    }
	  }
	  function localeWeekdaysParse(weekdayName, format, strict) {
	    var i, mom, regex;
	    if (this._weekdaysParseExact) {
	      return handleStrictParse$1.call(this, weekdayName, format, strict);
	    }
	    if (!this._weekdaysParse) {
	      this._weekdaysParse = [];
	      this._minWeekdaysParse = [];
	      this._shortWeekdaysParse = [];
	      this._fullWeekdaysParse = [];
	    }
	    for (i = 0; i < 7; i++) {
	      // make the regex if we don't have it already

	      mom = createUTC([2000, 1]).day(i);
	      if (strict && !this._fullWeekdaysParse[i]) {
	        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
	        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
	        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
	      }
	      if (!this._weekdaysParse[i]) {
	        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	      }
	      // test the regex
	      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	        return i;
	      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	        return i;
	      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	        return i;
	      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	        return i;
	      }
	    }
	  }

	  // MOMENTS

	  function getSetDayOfWeek(input) {
	    if (!this.isValid()) {
	      return input != null ? this : NaN;
	    }
	    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	    if (input != null) {
	      input = parseWeekday(input, this.localeData());
	      return this.add(input - day, 'd');
	    } else {
	      return day;
	    }
	  }
	  function getSetLocaleDayOfWeek(input) {
	    if (!this.isValid()) {
	      return input != null ? this : NaN;
	    }
	    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	    return input == null ? weekday : this.add(input - weekday, 'd');
	  }
	  function getSetISODayOfWeek(input) {
	    if (!this.isValid()) {
	      return input != null ? this : NaN;
	    }

	    // behaves the same as moment#day except
	    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	    // as a setter, sunday should belong to the previous week.

	    if (input != null) {
	      var weekday = parseIsoWeekday(input, this.localeData());
	      return this.day(this.day() % 7 ? weekday : weekday - 7);
	    } else {
	      return this.day() || 7;
	    }
	  }
	  function weekdaysRegex(isStrict) {
	    if (this._weekdaysParseExact) {
	      if (!hasOwnProp(this, '_weekdaysRegex')) {
	        computeWeekdaysParse.call(this);
	      }
	      if (isStrict) {
	        return this._weekdaysStrictRegex;
	      } else {
	        return this._weekdaysRegex;
	      }
	    } else {
	      if (!hasOwnProp(this, '_weekdaysRegex')) {
	        this._weekdaysRegex = defaultWeekdaysRegex;
	      }
	      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
	    }
	  }
	  function weekdaysShortRegex(isStrict) {
	    if (this._weekdaysParseExact) {
	      if (!hasOwnProp(this, '_weekdaysRegex')) {
	        computeWeekdaysParse.call(this);
	      }
	      if (isStrict) {
	        return this._weekdaysShortStrictRegex;
	      } else {
	        return this._weekdaysShortRegex;
	      }
	    } else {
	      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	      }
	      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	    }
	  }
	  function weekdaysMinRegex(isStrict) {
	    if (this._weekdaysParseExact) {
	      if (!hasOwnProp(this, '_weekdaysRegex')) {
	        computeWeekdaysParse.call(this);
	      }
	      if (isStrict) {
	        return this._weekdaysMinStrictRegex;
	      } else {
	        return this._weekdaysMinRegex;
	      }
	    } else {
	      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	      }
	      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	    }
	  }
	  function computeWeekdaysParse() {
	    function cmpLenRev(a, b) {
	      return b.length - a.length;
	    }
	    var minPieces = [],
	      shortPieces = [],
	      longPieces = [],
	      mixedPieces = [],
	      i,
	      mom,
	      minp,
	      shortp,
	      longp;
	    for (i = 0; i < 7; i++) {
	      // make the regex if we don't have it already
	      mom = createUTC([2000, 1]).day(i);
	      minp = regexEscape(this.weekdaysMin(mom, ''));
	      shortp = regexEscape(this.weekdaysShort(mom, ''));
	      longp = regexEscape(this.weekdays(mom, ''));
	      minPieces.push(minp);
	      shortPieces.push(shortp);
	      longPieces.push(longp);
	      mixedPieces.push(minp);
	      mixedPieces.push(shortp);
	      mixedPieces.push(longp);
	    }
	    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	    // will match the longer piece.
	    minPieces.sort(cmpLenRev);
	    shortPieces.sort(cmpLenRev);
	    longPieces.sort(cmpLenRev);
	    mixedPieces.sort(cmpLenRev);
	    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	    this._weekdaysShortRegex = this._weekdaysRegex;
	    this._weekdaysMinRegex = this._weekdaysRegex;
	    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	  }

	  // FORMATTING

	  function hFormat() {
	    return this.hours() % 12 || 12;
	  }
	  function kFormat() {
	    return this.hours() || 24;
	  }
	  addFormatToken('H', ['HH', 2], 0, 'hour');
	  addFormatToken('h', ['hh', 2], 0, hFormat);
	  addFormatToken('k', ['kk', 2], 0, kFormat);
	  addFormatToken('hmm', 0, 0, function () {
	    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	  });
	  addFormatToken('hmmss', 0, 0, function () {
	    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
	  });
	  addFormatToken('Hmm', 0, 0, function () {
	    return '' + this.hours() + zeroFill(this.minutes(), 2);
	  });
	  addFormatToken('Hmmss', 0, 0, function () {
	    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
	  });
	  function meridiem(token, lowercase) {
	    addFormatToken(token, 0, 0, function () {
	      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	    });
	  }
	  meridiem('a', true);
	  meridiem('A', false);

	  // ALIASES

	  addUnitAlias('hour', 'h');

	  // PRIORITY
	  addUnitPriority('hour', 13);

	  // PARSING

	  function matchMeridiem(isStrict, locale) {
	    return locale._meridiemParse;
	  }
	  addRegexToken('a', matchMeridiem);
	  addRegexToken('A', matchMeridiem);
	  addRegexToken('H', match1to2);
	  addRegexToken('h', match1to2);
	  addRegexToken('k', match1to2);
	  addRegexToken('HH', match1to2, match2);
	  addRegexToken('hh', match1to2, match2);
	  addRegexToken('kk', match1to2, match2);
	  addRegexToken('hmm', match3to4);
	  addRegexToken('hmmss', match5to6);
	  addRegexToken('Hmm', match3to4);
	  addRegexToken('Hmmss', match5to6);
	  addParseToken(['H', 'HH'], HOUR);
	  addParseToken(['k', 'kk'], function (input, array, config) {
	    var kInput = toInt(input);
	    array[HOUR] = kInput === 24 ? 0 : kInput;
	  });
	  addParseToken(['a', 'A'], function (input, array, config) {
	    config._isPm = config._locale.isPM(input);
	    config._meridiem = input;
	  });
	  addParseToken(['h', 'hh'], function (input, array, config) {
	    array[HOUR] = toInt(input);
	    getParsingFlags(config).bigHour = true;
	  });
	  addParseToken('hmm', function (input, array, config) {
	    var pos = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos));
	    array[MINUTE] = toInt(input.substr(pos));
	    getParsingFlags(config).bigHour = true;
	  });
	  addParseToken('hmmss', function (input, array, config) {
	    var pos1 = input.length - 4,
	      pos2 = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos1));
	    array[MINUTE] = toInt(input.substr(pos1, 2));
	    array[SECOND] = toInt(input.substr(pos2));
	    getParsingFlags(config).bigHour = true;
	  });
	  addParseToken('Hmm', function (input, array, config) {
	    var pos = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos));
	    array[MINUTE] = toInt(input.substr(pos));
	  });
	  addParseToken('Hmmss', function (input, array, config) {
	    var pos1 = input.length - 4,
	      pos2 = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos1));
	    array[MINUTE] = toInt(input.substr(pos1, 2));
	    array[SECOND] = toInt(input.substr(pos2));
	  });

	  // LOCALES

	  function localeIsPM(input) {
	    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	    // Using charAt should be more compatible.
	    return (input + '').toLowerCase().charAt(0) === 'p';
	  }
	  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour they want. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    getSetHour = makeGetSet('Hours', true);
	  function localeMeridiem(hours, minutes, isLower) {
	    if (hours > 11) {
	      return isLower ? 'pm' : 'PM';
	    } else {
	      return isLower ? 'am' : 'AM';
	    }
	  }
	  var baseConfig = {
	    calendar: defaultCalendar,
	    longDateFormat: defaultLongDateFormat,
	    invalidDate: defaultInvalidDate,
	    ordinal: defaultOrdinal,
	    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
	    relativeTime: defaultRelativeTime,
	    months: defaultLocaleMonths,
	    monthsShort: defaultLocaleMonthsShort,
	    week: defaultLocaleWeek,
	    weekdays: defaultLocaleWeekdays,
	    weekdaysMin: defaultLocaleWeekdaysMin,
	    weekdaysShort: defaultLocaleWeekdaysShort,
	    meridiemParse: defaultLocaleMeridiemParse
	  };

	  // internal storage for locale config files
	  var locales = {},
	    localeFamilies = {},
	    globalLocale;
	  function commonPrefix(arr1, arr2) {
	    var i,
	      minl = Math.min(arr1.length, arr2.length);
	    for (i = 0; i < minl; i += 1) {
	      if (arr1[i] !== arr2[i]) {
	        return i;
	      }
	    }
	    return minl;
	  }
	  function normalizeLocale(key) {
	    return key ? key.toLowerCase().replace('_', '-') : key;
	  }

	  // pick the locale from the array
	  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	  function chooseLocale(names) {
	    var i = 0,
	      j,
	      next,
	      locale,
	      split;
	    while (i < names.length) {
	      split = normalizeLocale(names[i]).split('-');
	      j = split.length;
	      next = normalizeLocale(names[i + 1]);
	      next = next ? next.split('-') : null;
	      while (j > 0) {
	        locale = loadLocale(split.slice(0, j).join('-'));
	        if (locale) {
	          return locale;
	        }
	        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
	          //the next array item is better than a shallower substring of this one
	          break;
	        }
	        j--;
	      }
	      i++;
	    }
	    return globalLocale;
	  }
	  function isLocaleNameSane(name) {
	    // Prevent names that look like filesystem paths, i.e contain '/' or '\'
	    return name.match('^[^/\\\\]*$') != null;
	  }
	  function loadLocale(name) {
	    var oldLocale = null,
	      aliasedRequire;
	    // TODO: Find a better way to register and load all the locales in Node
	    if (locales[name] === undefined && 'object' !== 'undefined' && module && module.exports && isLocaleNameSane(name)) {
	      try {
	        oldLocale = globalLocale._abbr;
	        aliasedRequire = commonjsRequire;
	        aliasedRequire('./locale/' + name);
	        getSetGlobalLocale(oldLocale);
	      } catch (e) {
	        // mark as not found to avoid repeating expensive file require call causing high CPU
	        // when trying to find en-US, en_US, en-us for every format call
	        locales[name] = null; // null means not found
	      }
	    }

	    return locales[name];
	  }

	  // This function will load locale and then set the global locale.  If
	  // no arguments are passed in, it will simply return the current global
	  // locale key.
	  function getSetGlobalLocale(key, values) {
	    var data;
	    if (key) {
	      if (isUndefined(values)) {
	        data = getLocale(key);
	      } else {
	        data = defineLocale(key, values);
	      }
	      if (data) {
	        // moment.duration._locale = moment._locale = data;
	        globalLocale = data;
	      } else {
	        if (typeof console !== 'undefined' && console.warn) {
	          //warn user if arguments are passed but the locale could not be set
	          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
	        }
	      }
	    }
	    return globalLocale._abbr;
	  }
	  function defineLocale(name, config) {
	    if (config !== null) {
	      var locale,
	        parentConfig = baseConfig;
	      config.abbr = name;
	      if (locales[name] != null) {
	        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	        parentConfig = locales[name]._config;
	      } else if (config.parentLocale != null) {
	        if (locales[config.parentLocale] != null) {
	          parentConfig = locales[config.parentLocale]._config;
	        } else {
	          locale = loadLocale(config.parentLocale);
	          if (locale != null) {
	            parentConfig = locale._config;
	          } else {
	            if (!localeFamilies[config.parentLocale]) {
	              localeFamilies[config.parentLocale] = [];
	            }
	            localeFamilies[config.parentLocale].push({
	              name: name,
	              config: config
	            });
	            return null;
	          }
	        }
	      }
	      locales[name] = new Locale(mergeConfigs(parentConfig, config));
	      if (localeFamilies[name]) {
	        localeFamilies[name].forEach(function (x) {
	          defineLocale(x.name, x.config);
	        });
	      }

	      // backwards compat for now: also set the locale
	      // make sure we set the locale AFTER all child locales have been
	      // created, so we won't end up with the child locale set.
	      getSetGlobalLocale(name);
	      return locales[name];
	    } else {
	      // useful for testing
	      delete locales[name];
	      return null;
	    }
	  }
	  function updateLocale(name, config) {
	    if (config != null) {
	      var locale,
	        tmpLocale,
	        parentConfig = baseConfig;
	      if (locales[name] != null && locales[name].parentLocale != null) {
	        // Update existing child locale in-place to avoid memory-leaks
	        locales[name].set(mergeConfigs(locales[name]._config, config));
	      } else {
	        // MERGE
	        tmpLocale = loadLocale(name);
	        if (tmpLocale != null) {
	          parentConfig = tmpLocale._config;
	        }
	        config = mergeConfigs(parentConfig, config);
	        if (tmpLocale == null) {
	          // updateLocale is called for creating a new locale
	          // Set abbr so it will have a name (getters return
	          // undefined otherwise).
	          config.abbr = name;
	        }
	        locale = new Locale(config);
	        locale.parentLocale = locales[name];
	        locales[name] = locale;
	      }

	      // backwards compat for now: also set the locale
	      getSetGlobalLocale(name);
	    } else {
	      // pass null for config to unupdate, useful for tests
	      if (locales[name] != null) {
	        if (locales[name].parentLocale != null) {
	          locales[name] = locales[name].parentLocale;
	          if (name === getSetGlobalLocale()) {
	            getSetGlobalLocale(name);
	          }
	        } else if (locales[name] != null) {
	          delete locales[name];
	        }
	      }
	    }
	    return locales[name];
	  }

	  // returns locale data
	  function getLocale(key) {
	    var locale;
	    if (key && key._locale && key._locale._abbr) {
	      key = key._locale._abbr;
	    }
	    if (!key) {
	      return globalLocale;
	    }
	    if (!isArray(key)) {
	      //short-circuit everything else
	      locale = loadLocale(key);
	      if (locale) {
	        return locale;
	      }
	      key = [key];
	    }
	    return chooseLocale(key);
	  }
	  function listLocales() {
	    return keys(locales);
	  }
	  function checkOverflow(m) {
	    var overflow,
	      a = m._a;
	    if (a && getParsingFlags(m).overflow === -2) {
	      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
	      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	        overflow = DATE;
	      }
	      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	        overflow = WEEK;
	      }
	      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	        overflow = WEEKDAY;
	      }
	      getParsingFlags(m).overflow = overflow;
	    }
	    return m;
	  }

	  // iso 8601 regex
	  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
	    isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
	    // iso time formats and regexes
	    isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
	    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
	    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
	    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
	    obsOffsets = {
	      UT: 0,
	      GMT: 0,
	      EDT: -4 * 60,
	      EST: -5 * 60,
	      CDT: -5 * 60,
	      CST: -6 * 60,
	      MDT: -6 * 60,
	      MST: -7 * 60,
	      PDT: -7 * 60,
	      PST: -8 * 60
	    };

	  // date from iso format
	  function configFromISO(config) {
	    var i,
	      l,
	      string = config._i,
	      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	      allowTime,
	      dateFormat,
	      timeFormat,
	      tzFormat,
	      isoDatesLen = isoDates.length,
	      isoTimesLen = isoTimes.length;
	    if (match) {
	      getParsingFlags(config).iso = true;
	      for (i = 0, l = isoDatesLen; i < l; i++) {
	        if (isoDates[i][1].exec(match[1])) {
	          dateFormat = isoDates[i][0];
	          allowTime = isoDates[i][2] !== false;
	          break;
	        }
	      }
	      if (dateFormat == null) {
	        config._isValid = false;
	        return;
	      }
	      if (match[3]) {
	        for (i = 0, l = isoTimesLen; i < l; i++) {
	          if (isoTimes[i][1].exec(match[3])) {
	            // match[2] should be 'T' or space
	            timeFormat = (match[2] || ' ') + isoTimes[i][0];
	            break;
	          }
	        }
	        if (timeFormat == null) {
	          config._isValid = false;
	          return;
	        }
	      }
	      if (!allowTime && timeFormat != null) {
	        config._isValid = false;
	        return;
	      }
	      if (match[4]) {
	        if (tzRegex.exec(match[4])) {
	          tzFormat = 'Z';
	        } else {
	          config._isValid = false;
	          return;
	        }
	      }
	      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	      configFromStringAndFormat(config);
	    } else {
	      config._isValid = false;
	    }
	  }
	  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
	    var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];
	    if (secondStr) {
	      result.push(parseInt(secondStr, 10));
	    }
	    return result;
	  }
	  function untruncateYear(yearStr) {
	    var year = parseInt(yearStr, 10);
	    if (year <= 49) {
	      return 2000 + year;
	    } else if (year <= 999) {
	      return 1900 + year;
	    }
	    return year;
	  }
	  function preprocessRFC2822(s) {
	    // Remove comments and folding whitespace and replace multiple-spaces with a single space
	    return s.replace(/\([^()]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	  }
	  function checkWeekday(weekdayStr, parsedInput, config) {
	    if (weekdayStr) {
	      // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
	      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
	        weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
	      if (weekdayProvided !== weekdayActual) {
	        getParsingFlags(config).weekdayMismatch = true;
	        config._isValid = false;
	        return false;
	      }
	    }
	    return true;
	  }
	  function calculateOffset(obsOffset, militaryOffset, numOffset) {
	    if (obsOffset) {
	      return obsOffsets[obsOffset];
	    } else if (militaryOffset) {
	      // the only allowed military tz is Z
	      return 0;
	    } else {
	      var hm = parseInt(numOffset, 10),
	        m = hm % 100,
	        h = (hm - m) / 100;
	      return h * 60 + m;
	    }
	  }

	  // date and time from ref 2822 format
	  function configFromRFC2822(config) {
	    var match = rfc2822.exec(preprocessRFC2822(config._i)),
	      parsedArray;
	    if (match) {
	      parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
	      if (!checkWeekday(match[1], parsedArray, config)) {
	        return;
	      }
	      config._a = parsedArray;
	      config._tzm = calculateOffset(match[8], match[9], match[10]);
	      config._d = createUTCDate.apply(null, config._a);
	      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	      getParsingFlags(config).rfc2822 = true;
	    } else {
	      config._isValid = false;
	    }
	  }

	  // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
	  function configFromString(config) {
	    var matched = aspNetJsonRegex.exec(config._i);
	    if (matched !== null) {
	      config._d = new Date(+matched[1]);
	      return;
	    }
	    configFromISO(config);
	    if (config._isValid === false) {
	      delete config._isValid;
	    } else {
	      return;
	    }
	    configFromRFC2822(config);
	    if (config._isValid === false) {
	      delete config._isValid;
	    } else {
	      return;
	    }
	    if (config._strict) {
	      config._isValid = false;
	    } else {
	      // Final attempt, use Input Fallback
	      hooks.createFromInputFallback(config);
	    }
	  }
	  hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
	    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	  });

	  // Pick the first defined of two or three arguments.
	  function defaults(a, b, c) {
	    if (a != null) {
	      return a;
	    }
	    if (b != null) {
	      return b;
	    }
	    return c;
	  }
	  function currentDateArray(config) {
	    // hooks is actually the exported moment object
	    var nowValue = new Date(hooks.now());
	    if (config._useUTC) {
	      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	    }
	    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	  }

	  // convert an array to a date.
	  // the array should mirror the parameters below
	  // note: all values past the year are optional and will default to the lowest possible value.
	  // [year, month, day , hour, minute, second, millisecond]
	  function configFromArray(config) {
	    var i,
	      date,
	      input = [],
	      currentDate,
	      expectedWeekday,
	      yearToUse;
	    if (config._d) {
	      return;
	    }
	    currentDate = currentDateArray(config);

	    //compute day of the year from weeks and weekdays
	    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	      dayOfYearFromWeekInfo(config);
	    }

	    //if the day of the year is set, figure out what it is
	    if (config._dayOfYear != null) {
	      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
	        getParsingFlags(config)._overflowDayOfYear = true;
	      }
	      date = createUTCDate(yearToUse, 0, config._dayOfYear);
	      config._a[MONTH] = date.getUTCMonth();
	      config._a[DATE] = date.getUTCDate();
	    }

	    // Default to current date.
	    // * if no year, month, day of month are given, default to today
	    // * if day of month is given, default month and year
	    // * if month is given, default only year
	    // * if year is given, don't default anything
	    for (i = 0; i < 3 && config._a[i] == null; ++i) {
	      config._a[i] = input[i] = currentDate[i];
	    }

	    // Zero out whatever was not defaulted, including time
	    for (; i < 7; i++) {
	      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
	    }

	    // Check for 24:00:00.000
	    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
	      config._nextDay = true;
	      config._a[HOUR] = 0;
	    }
	    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

	    // Apply timezone offset from input. The actual utcOffset can be changed
	    // with parseZone.
	    if (config._tzm != null) {
	      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	    }
	    if (config._nextDay) {
	      config._a[HOUR] = 24;
	    }

	    // check for mismatching day of week
	    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
	      getParsingFlags(config).weekdayMismatch = true;
	    }
	  }
	  function dayOfYearFromWeekInfo(config) {
	    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
	    w = config._w;
	    if (w.GG != null || w.W != null || w.E != null) {
	      dow = 1;
	      doy = 4;

	      // TODO: We need to take the current isoWeekYear, but that depends on
	      // how we interpret now (local, utc, fixed offset). So create
	      // a now version of current config (take local/utc/offset flags, and
	      // create now).
	      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
	      week = defaults(w.W, 1);
	      weekday = defaults(w.E, 1);
	      if (weekday < 1 || weekday > 7) {
	        weekdayOverflow = true;
	      }
	    } else {
	      dow = config._locale._week.dow;
	      doy = config._locale._week.doy;
	      curWeek = weekOfYear(createLocal(), dow, doy);
	      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

	      // Default to current week.
	      week = defaults(w.w, curWeek.week);
	      if (w.d != null) {
	        // weekday -- low day numbers are considered next week
	        weekday = w.d;
	        if (weekday < 0 || weekday > 6) {
	          weekdayOverflow = true;
	        }
	      } else if (w.e != null) {
	        // local weekday -- counting starts from beginning of week
	        weekday = w.e + dow;
	        if (w.e < 0 || w.e > 6) {
	          weekdayOverflow = true;
	        }
	      } else {
	        // default to beginning of week
	        weekday = dow;
	      }
	    }
	    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	      getParsingFlags(config)._overflowWeeks = true;
	    } else if (weekdayOverflow != null) {
	      getParsingFlags(config)._overflowWeekday = true;
	    } else {
	      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	      config._a[YEAR] = temp.year;
	      config._dayOfYear = temp.dayOfYear;
	    }
	  }

	  // constant that refers to the ISO standard
	  hooks.ISO_8601 = function () {};

	  // constant that refers to the RFC 2822 form
	  hooks.RFC_2822 = function () {};

	  // date from string and format string
	  function configFromStringAndFormat(config) {
	    // TODO: Move this to another part of the creation flow to prevent circular deps
	    if (config._f === hooks.ISO_8601) {
	      configFromISO(config);
	      return;
	    }
	    if (config._f === hooks.RFC_2822) {
	      configFromRFC2822(config);
	      return;
	    }
	    config._a = [];
	    getParsingFlags(config).empty = true;

	    // This array is used to make a Date, either with `new Date` or `Date.UTC`
	    var string = '' + config._i,
	      i,
	      parsedInput,
	      tokens,
	      token,
	      skipped,
	      stringLength = string.length,
	      totalParsedInputLength = 0,
	      era,
	      tokenLen;
	    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	    tokenLen = tokens.length;
	    for (i = 0; i < tokenLen; i++) {
	      token = tokens[i];
	      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	      if (parsedInput) {
	        skipped = string.substr(0, string.indexOf(parsedInput));
	        if (skipped.length > 0) {
	          getParsingFlags(config).unusedInput.push(skipped);
	        }
	        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	        totalParsedInputLength += parsedInput.length;
	      }
	      // don't parse if it's not a known token
	      if (formatTokenFunctions[token]) {
	        if (parsedInput) {
	          getParsingFlags(config).empty = false;
	        } else {
	          getParsingFlags(config).unusedTokens.push(token);
	        }
	        addTimeToArrayFromToken(token, parsedInput, config);
	      } else if (config._strict && !parsedInput) {
	        getParsingFlags(config).unusedTokens.push(token);
	      }
	    }

	    // add remaining unparsed input length to the string
	    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	    if (string.length > 0) {
	      getParsingFlags(config).unusedInput.push(string);
	    }

	    // clear _12h flag if hour is <= 12
	    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
	      getParsingFlags(config).bigHour = undefined;
	    }
	    getParsingFlags(config).parsedDateParts = config._a.slice(0);
	    getParsingFlags(config).meridiem = config._meridiem;
	    // handle meridiem
	    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

	    // handle era
	    era = getParsingFlags(config).era;
	    if (era !== null) {
	      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
	    }
	    configFromArray(config);
	    checkOverflow(config);
	  }
	  function meridiemFixWrap(locale, hour, meridiem) {
	    var isPm;
	    if (meridiem == null) {
	      // nothing to do
	      return hour;
	    }
	    if (locale.meridiemHour != null) {
	      return locale.meridiemHour(hour, meridiem);
	    } else if (locale.isPM != null) {
	      // Fallback
	      isPm = locale.isPM(meridiem);
	      if (isPm && hour < 12) {
	        hour += 12;
	      }
	      if (!isPm && hour === 12) {
	        hour = 0;
	      }
	      return hour;
	    } else {
	      // this is not supposed to happen
	      return hour;
	    }
	  }

	  // date from string and array of format strings
	  function configFromStringAndArray(config) {
	    var tempConfig,
	      bestMoment,
	      scoreToBeat,
	      i,
	      currentScore,
	      validFormatFound,
	      bestFormatIsValid = false,
	      configfLen = config._f.length;
	    if (configfLen === 0) {
	      getParsingFlags(config).invalidFormat = true;
	      config._d = new Date(NaN);
	      return;
	    }
	    for (i = 0; i < configfLen; i++) {
	      currentScore = 0;
	      validFormatFound = false;
	      tempConfig = copyConfig({}, config);
	      if (config._useUTC != null) {
	        tempConfig._useUTC = config._useUTC;
	      }
	      tempConfig._f = config._f[i];
	      configFromStringAndFormat(tempConfig);
	      if (isValid(tempConfig)) {
	        validFormatFound = true;
	      }

	      // if there is any input that was not parsed add a penalty for that format
	      currentScore += getParsingFlags(tempConfig).charsLeftOver;

	      //or tokens
	      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	      getParsingFlags(tempConfig).score = currentScore;
	      if (!bestFormatIsValid) {
	        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
	          scoreToBeat = currentScore;
	          bestMoment = tempConfig;
	          if (validFormatFound) {
	            bestFormatIsValid = true;
	          }
	        }
	      } else {
	        if (currentScore < scoreToBeat) {
	          scoreToBeat = currentScore;
	          bestMoment = tempConfig;
	        }
	      }
	    }
	    extend(config, bestMoment || tempConfig);
	  }
	  function configFromObject(config) {
	    if (config._d) {
	      return;
	    }
	    var i = normalizeObjectUnits(config._i),
	      dayOrDate = i.day === undefined ? i.date : i.day;
	    config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	      return obj && parseInt(obj, 10);
	    });
	    configFromArray(config);
	  }
	  function createFromConfig(config) {
	    var res = new Moment(checkOverflow(prepareConfig(config)));
	    if (res._nextDay) {
	      // Adding is smart enough around DST
	      res.add(1, 'd');
	      res._nextDay = undefined;
	    }
	    return res;
	  }
	  function prepareConfig(config) {
	    var input = config._i,
	      format = config._f;
	    config._locale = config._locale || getLocale(config._l);
	    if (input === null || format === undefined && input === '') {
	      return createInvalid({
	        nullInput: true
	      });
	    }
	    if (typeof input === 'string') {
	      config._i = input = config._locale.preparse(input);
	    }
	    if (isMoment(input)) {
	      return new Moment(checkOverflow(input));
	    } else if (isDate(input)) {
	      config._d = input;
	    } else if (isArray(format)) {
	      configFromStringAndArray(config);
	    } else if (format) {
	      configFromStringAndFormat(config);
	    } else {
	      configFromInput(config);
	    }
	    if (!isValid(config)) {
	      config._d = null;
	    }
	    return config;
	  }
	  function configFromInput(config) {
	    var input = config._i;
	    if (isUndefined(input)) {
	      config._d = new Date(hooks.now());
	    } else if (isDate(input)) {
	      config._d = new Date(input.valueOf());
	    } else if (typeof input === 'string') {
	      configFromString(config);
	    } else if (isArray(input)) {
	      config._a = map(input.slice(0), function (obj) {
	        return parseInt(obj, 10);
	      });
	      configFromArray(config);
	    } else if (isObject(input)) {
	      configFromObject(config);
	    } else if (isNumber(input)) {
	      // from milliseconds
	      config._d = new Date(input);
	    } else {
	      hooks.createFromInputFallback(config);
	    }
	  }
	  function createLocalOrUTC(input, format, locale, strict, isUTC) {
	    var c = {};
	    if (format === true || format === false) {
	      strict = format;
	      format = undefined;
	    }
	    if (locale === true || locale === false) {
	      strict = locale;
	      locale = undefined;
	    }
	    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
	      input = undefined;
	    }
	    // object construction must be done this way.
	    // https://github.com/moment/moment/issues/1423
	    c._isAMomentObject = true;
	    c._useUTC = c._isUTC = isUTC;
	    c._l = locale;
	    c._i = input;
	    c._f = format;
	    c._strict = strict;
	    return createFromConfig(c);
	  }
	  function createLocal(input, format, locale, strict) {
	    return createLocalOrUTC(input, format, locale, strict, false);
	  }
	  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
	      var other = createLocal.apply(null, arguments);
	      if (this.isValid() && other.isValid()) {
	        return other < this ? this : other;
	      } else {
	        return createInvalid();
	      }
	    }),
	    prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
	      var other = createLocal.apply(null, arguments);
	      if (this.isValid() && other.isValid()) {
	        return other > this ? this : other;
	      } else {
	        return createInvalid();
	      }
	    });

	  // Pick a moment m from moments so that m[fn](other) is true for all
	  // other. This relies on the function fn to be transitive.
	  //
	  // moments should either be an array of moment objects or an array, whose
	  // first element is an array of moment objects.
	  function pickBy(fn, moments) {
	    var res, i;
	    if (moments.length === 1 && isArray(moments[0])) {
	      moments = moments[0];
	    }
	    if (!moments.length) {
	      return createLocal();
	    }
	    res = moments[0];
	    for (i = 1; i < moments.length; ++i) {
	      if (!moments[i].isValid() || moments[i][fn](res)) {
	        res = moments[i];
	      }
	    }
	    return res;
	  }

	  // TODO: Use [].sort instead?
	  function min() {
	    var args = [].slice.call(arguments, 0);
	    return pickBy('isBefore', args);
	  }
	  function max() {
	    var args = [].slice.call(arguments, 0);
	    return pickBy('isAfter', args);
	  }
	  var now = function () {
	    return Date.now ? Date.now() : +new Date();
	  };
	  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
	  function isDurationValid(m) {
	    var key,
	      unitHasDecimal = false,
	      i,
	      orderLen = ordering.length;
	    for (key in m) {
	      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
	        return false;
	      }
	    }
	    for (i = 0; i < orderLen; ++i) {
	      if (m[ordering[i]]) {
	        if (unitHasDecimal) {
	          return false; // only allow non-integers for smallest unit
	        }

	        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
	          unitHasDecimal = true;
	        }
	      }
	    }
	    return true;
	  }
	  function isValid$1() {
	    return this._isValid;
	  }
	  function createInvalid$1() {
	    return createDuration(NaN);
	  }
	  function Duration(duration) {
	    var normalizedInput = normalizeObjectUnits(duration),
	      years = normalizedInput.year || 0,
	      quarters = normalizedInput.quarter || 0,
	      months = normalizedInput.month || 0,
	      weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
	      days = normalizedInput.day || 0,
	      hours = normalizedInput.hour || 0,
	      minutes = normalizedInput.minute || 0,
	      seconds = normalizedInput.second || 0,
	      milliseconds = normalizedInput.millisecond || 0;
	    this._isValid = isDurationValid(normalizedInput);

	    // representation for dateAddRemove
	    this._milliseconds = +milliseconds + seconds * 1e3 +
	    // 1000
	    minutes * 6e4 +
	    // 1000 * 60
	    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	    // Because of dateAddRemove treats 24 hours as different from a
	    // day when working around DST, we need to store them separately
	    this._days = +days + weeks * 7;
	    // It is impossible to translate months into days without knowing
	    // which months you are are talking about, so we have to store
	    // it separately.
	    this._months = +months + quarters * 3 + years * 12;
	    this._data = {};
	    this._locale = getLocale();
	    this._bubble();
	  }
	  function isDuration(obj) {
	    return obj instanceof Duration;
	  }
	  function absRound(number) {
	    if (number < 0) {
	      return Math.round(-1 * number) * -1;
	    } else {
	      return Math.round(number);
	    }
	  }

	  // compare two arrays, return the number of differences
	  function compareArrays(array1, array2, dontConvert) {
	    var len = Math.min(array1.length, array2.length),
	      lengthDiff = Math.abs(array1.length - array2.length),
	      diffs = 0,
	      i;
	    for (i = 0; i < len; i++) {
	      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
	        diffs++;
	      }
	    }
	    return diffs + lengthDiff;
	  }

	  // FORMATTING

	  function offset(token, separator) {
	    addFormatToken(token, 0, 0, function () {
	      var offset = this.utcOffset(),
	        sign = '+';
	      if (offset < 0) {
	        offset = -offset;
	        sign = '-';
	      }
	      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
	    });
	  }
	  offset('Z', ':');
	  offset('ZZ', '');

	  // PARSING

	  addRegexToken('Z', matchShortOffset);
	  addRegexToken('ZZ', matchShortOffset);
	  addParseToken(['Z', 'ZZ'], function (input, array, config) {
	    config._useUTC = true;
	    config._tzm = offsetFromString(matchShortOffset, input);
	  });

	  // HELPERS

	  // timezone chunker
	  // '+10:00' > ['10',  '00']
	  // '-1530'  > ['-15', '30']
	  var chunkOffset = /([\+\-]|\d\d)/gi;
	  function offsetFromString(matcher, string) {
	    var matches = (string || '').match(matcher),
	      chunk,
	      parts,
	      minutes;
	    if (matches === null) {
	      return null;
	    }
	    chunk = matches[matches.length - 1] || [];
	    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	    minutes = +(parts[1] * 60) + toInt(parts[2]);
	    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
	  }

	  // Return a moment from input, that is local/utc/zone equivalent to model.
	  function cloneWithOffset(input, model) {
	    var res, diff;
	    if (model._isUTC) {
	      res = model.clone();
	      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
	      // Use low-level api, because this fn is low-level api.
	      res._d.setTime(res._d.valueOf() + diff);
	      hooks.updateOffset(res, false);
	      return res;
	    } else {
	      return createLocal(input).local();
	    }
	  }
	  function getDateOffset(m) {
	    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	    // https://github.com/moment/moment/pull/1871
	    return -Math.round(m._d.getTimezoneOffset());
	  }

	  // HOOKS

	  // This function will be called whenever a moment is mutated.
	  // It is intended to keep the offset in sync with the timezone.
	  hooks.updateOffset = function () {};

	  // MOMENTS

	  // keepLocalTime = true means only change the timezone, without
	  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	  // +0200, so we adjust the time as needed, to be valid.
	  //
	  // Keeping the time actually adds/subtracts (one hour)
	  // from the actual represented time. That is why we call updateOffset
	  // a second time. In case it wants us to change the offset again
	  // _changeInProgress == true case, then we have to adjust, because
	  // there is no such time in the given timezone.
	  function getSetOffset(input, keepLocalTime, keepMinutes) {
	    var offset = this._offset || 0,
	      localAdjust;
	    if (!this.isValid()) {
	      return input != null ? this : NaN;
	    }
	    if (input != null) {
	      if (typeof input === 'string') {
	        input = offsetFromString(matchShortOffset, input);
	        if (input === null) {
	          return this;
	        }
	      } else if (Math.abs(input) < 16 && !keepMinutes) {
	        input = input * 60;
	      }
	      if (!this._isUTC && keepLocalTime) {
	        localAdjust = getDateOffset(this);
	      }
	      this._offset = input;
	      this._isUTC = true;
	      if (localAdjust != null) {
	        this.add(localAdjust, 'm');
	      }
	      if (offset !== input) {
	        if (!keepLocalTime || this._changeInProgress) {
	          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
	        } else if (!this._changeInProgress) {
	          this._changeInProgress = true;
	          hooks.updateOffset(this, true);
	          this._changeInProgress = null;
	        }
	      }
	      return this;
	    } else {
	      return this._isUTC ? offset : getDateOffset(this);
	    }
	  }
	  function getSetZone(input, keepLocalTime) {
	    if (input != null) {
	      if (typeof input !== 'string') {
	        input = -input;
	      }
	      this.utcOffset(input, keepLocalTime);
	      return this;
	    } else {
	      return -this.utcOffset();
	    }
	  }
	  function setOffsetToUTC(keepLocalTime) {
	    return this.utcOffset(0, keepLocalTime);
	  }
	  function setOffsetToLocal(keepLocalTime) {
	    if (this._isUTC) {
	      this.utcOffset(0, keepLocalTime);
	      this._isUTC = false;
	      if (keepLocalTime) {
	        this.subtract(getDateOffset(this), 'm');
	      }
	    }
	    return this;
	  }
	  function setOffsetToParsedOffset() {
	    if (this._tzm != null) {
	      this.utcOffset(this._tzm, false, true);
	    } else if (typeof this._i === 'string') {
	      var tZone = offsetFromString(matchOffset, this._i);
	      if (tZone != null) {
	        this.utcOffset(tZone);
	      } else {
	        this.utcOffset(0, true);
	      }
	    }
	    return this;
	  }
	  function hasAlignedHourOffset(input) {
	    if (!this.isValid()) {
	      return false;
	    }
	    input = input ? createLocal(input).utcOffset() : 0;
	    return (this.utcOffset() - input) % 60 === 0;
	  }
	  function isDaylightSavingTime() {
	    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
	  }
	  function isDaylightSavingTimeShifted() {
	    if (!isUndefined(this._isDSTShifted)) {
	      return this._isDSTShifted;
	    }
	    var c = {},
	      other;
	    copyConfig(c, this);
	    c = prepareConfig(c);
	    if (c._a) {
	      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
	      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
	    } else {
	      this._isDSTShifted = false;
	    }
	    return this._isDSTShifted;
	  }
	  function isLocal() {
	    return this.isValid() ? !this._isUTC : false;
	  }
	  function isUtcOffset() {
	    return this.isValid() ? this._isUTC : false;
	  }
	  function isUtc() {
	    return this.isValid() ? this._isUTC && this._offset === 0 : false;
	  }

	  // ASP.NET json date format regex
	  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
	  function createDuration(input, key) {
	    var duration = input,
	      // matching against regexp is expensive, do it on demand
	      match = null,
	      sign,
	      ret,
	      diffRes;
	    if (isDuration(input)) {
	      duration = {
	        ms: input._milliseconds,
	        d: input._days,
	        M: input._months
	      };
	    } else if (isNumber(input) || !isNaN(+input)) {
	      duration = {};
	      if (key) {
	        duration[key] = +input;
	      } else {
	        duration.milliseconds = +input;
	      }
	    } else if (match = aspNetRegex.exec(input)) {
	      sign = match[1] === '-' ? -1 : 1;
	      duration = {
	        y: 0,
	        d: toInt(match[DATE]) * sign,
	        h: toInt(match[HOUR]) * sign,
	        m: toInt(match[MINUTE]) * sign,
	        s: toInt(match[SECOND]) * sign,
	        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
	      };
	    } else if (match = isoRegex.exec(input)) {
	      sign = match[1] === '-' ? -1 : 1;
	      duration = {
	        y: parseIso(match[2], sign),
	        M: parseIso(match[3], sign),
	        w: parseIso(match[4], sign),
	        d: parseIso(match[5], sign),
	        h: parseIso(match[6], sign),
	        m: parseIso(match[7], sign),
	        s: parseIso(match[8], sign)
	      };
	    } else if (duration == null) {
	      // checks for null or undefined
	      duration = {};
	    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
	      duration = {};
	      duration.ms = diffRes.milliseconds;
	      duration.M = diffRes.months;
	    }
	    ret = new Duration(duration);
	    if (isDuration(input) && hasOwnProp(input, '_locale')) {
	      ret._locale = input._locale;
	    }
	    if (isDuration(input) && hasOwnProp(input, '_isValid')) {
	      ret._isValid = input._isValid;
	    }
	    return ret;
	  }
	  createDuration.fn = Duration.prototype;
	  createDuration.invalid = createInvalid$1;
	  function parseIso(inp, sign) {
	    // We'd normally use ~~inp for this, but unfortunately it also
	    // converts floats to ints.
	    // inp may be undefined, so careful calling replace on it.
	    var res = inp && parseFloat(inp.replace(',', '.'));
	    // apply sign while we're at it
	    return (isNaN(res) ? 0 : res) * sign;
	  }
	  function positiveMomentsDifference(base, other) {
	    var res = {};
	    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
	    if (base.clone().add(res.months, 'M').isAfter(other)) {
	      --res.months;
	    }
	    res.milliseconds = +other - +base.clone().add(res.months, 'M');
	    return res;
	  }
	  function momentsDifference(base, other) {
	    var res;
	    if (!(base.isValid() && other.isValid())) {
	      return {
	        milliseconds: 0,
	        months: 0
	      };
	    }
	    other = cloneWithOffset(other, base);
	    if (base.isBefore(other)) {
	      res = positiveMomentsDifference(base, other);
	    } else {
	      res = positiveMomentsDifference(other, base);
	      res.milliseconds = -res.milliseconds;
	      res.months = -res.months;
	    }
	    return res;
	  }

	  // TODO: remove 'name' arg after deprecation is removed
	  function createAdder(direction, name) {
	    return function (val, period) {
	      var dur, tmp;
	      //invert the arguments, but complain about it
	      if (period !== null && !isNaN(+period)) {
	        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	        tmp = val;
	        val = period;
	        period = tmp;
	      }
	      dur = createDuration(val, period);
	      addSubtract(this, dur, direction);
	      return this;
	    };
	  }
	  function addSubtract(mom, duration, isAdding, updateOffset) {
	    var milliseconds = duration._milliseconds,
	      days = absRound(duration._days),
	      months = absRound(duration._months);
	    if (!mom.isValid()) {
	      // No op
	      return;
	    }
	    updateOffset = updateOffset == null ? true : updateOffset;
	    if (months) {
	      setMonth(mom, get(mom, 'Month') + months * isAdding);
	    }
	    if (days) {
	      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
	    }
	    if (milliseconds) {
	      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	    }
	    if (updateOffset) {
	      hooks.updateOffset(mom, days || months);
	    }
	  }
	  var add = createAdder(1, 'add'),
	    subtract = createAdder(-1, 'subtract');
	  function isString(input) {
	    return typeof input === 'string' || input instanceof String;
	  }

	  // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
	  function isMomentInput(input) {
	    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
	  }
	  function isMomentInputObject(input) {
	    var objectTest = isObject(input) && !isObjectEmpty(input),
	      propertyTest = false,
	      properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
	      i,
	      property,
	      propertyLen = properties.length;
	    for (i = 0; i < propertyLen; i += 1) {
	      property = properties[i];
	      propertyTest = propertyTest || hasOwnProp(input, property);
	    }
	    return objectTest && propertyTest;
	  }
	  function isNumberOrStringArray(input) {
	    var arrayTest = isArray(input),
	      dataTypeTest = false;
	    if (arrayTest) {
	      dataTypeTest = input.filter(function (item) {
	        return !isNumber(item) && isString(input);
	      }).length === 0;
	    }
	    return arrayTest && dataTypeTest;
	  }
	  function isCalendarSpec(input) {
	    var objectTest = isObject(input) && !isObjectEmpty(input),
	      propertyTest = false,
	      properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
	      i,
	      property;
	    for (i = 0; i < properties.length; i += 1) {
	      property = properties[i];
	      propertyTest = propertyTest || hasOwnProp(input, property);
	    }
	    return objectTest && propertyTest;
	  }
	  function getCalendarFormat(myMoment, now) {
	    var diff = myMoment.diff(now, 'days', true);
	    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
	  }
	  function calendar$1(time, formats) {
	    // Support for single parameter, formats only overload to the calendar function
	    if (arguments.length === 1) {
	      if (!arguments[0]) {
	        time = undefined;
	        formats = undefined;
	      } else if (isMomentInput(arguments[0])) {
	        time = arguments[0];
	        formats = undefined;
	      } else if (isCalendarSpec(arguments[0])) {
	        formats = arguments[0];
	        time = undefined;
	      }
	    }
	    // We want to compare the start of today, vs this.
	    // Getting start-of-today depends on whether we're local/utc/offset or not.
	    var now = time || createLocal(),
	      sod = cloneWithOffset(now, this).startOf('day'),
	      format = hooks.calendarFormat(this, sod) || 'sameElse',
	      output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
	    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
	  }
	  function clone() {
	    return new Moment(this);
	  }
	  function isAfter(input, units) {
	    var localInput = isMoment(input) ? input : createLocal(input);
	    if (!(this.isValid() && localInput.isValid())) {
	      return false;
	    }
	    units = normalizeUnits(units) || 'millisecond';
	    if (units === 'millisecond') {
	      return this.valueOf() > localInput.valueOf();
	    } else {
	      return localInput.valueOf() < this.clone().startOf(units).valueOf();
	    }
	  }
	  function isBefore(input, units) {
	    var localInput = isMoment(input) ? input : createLocal(input);
	    if (!(this.isValid() && localInput.isValid())) {
	      return false;
	    }
	    units = normalizeUnits(units) || 'millisecond';
	    if (units === 'millisecond') {
	      return this.valueOf() < localInput.valueOf();
	    } else {
	      return this.clone().endOf(units).valueOf() < localInput.valueOf();
	    }
	  }
	  function isBetween(from, to, units, inclusivity) {
	    var localFrom = isMoment(from) ? from : createLocal(from),
	      localTo = isMoment(to) ? to : createLocal(to);
	    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
	      return false;
	    }
	    inclusivity = inclusivity || '()';
	    return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
	  }
	  function isSame(input, units) {
	    var localInput = isMoment(input) ? input : createLocal(input),
	      inputMs;
	    if (!(this.isValid() && localInput.isValid())) {
	      return false;
	    }
	    units = normalizeUnits(units) || 'millisecond';
	    if (units === 'millisecond') {
	      return this.valueOf() === localInput.valueOf();
	    } else {
	      inputMs = localInput.valueOf();
	      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	    }
	  }
	  function isSameOrAfter(input, units) {
	    return this.isSame(input, units) || this.isAfter(input, units);
	  }
	  function isSameOrBefore(input, units) {
	    return this.isSame(input, units) || this.isBefore(input, units);
	  }
	  function diff(input, units, asFloat) {
	    var that, zoneDelta, output;
	    if (!this.isValid()) {
	      return NaN;
	    }
	    that = cloneWithOffset(input, this);
	    if (!that.isValid()) {
	      return NaN;
	    }
	    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	    units = normalizeUnits(units);
	    switch (units) {
	      case 'year':
	        output = monthDiff(this, that) / 12;
	        break;
	      case 'month':
	        output = monthDiff(this, that);
	        break;
	      case 'quarter':
	        output = monthDiff(this, that) / 3;
	        break;
	      case 'second':
	        output = (this - that) / 1e3;
	        break;
	      // 1000
	      case 'minute':
	        output = (this - that) / 6e4;
	        break;
	      // 1000 * 60
	      case 'hour':
	        output = (this - that) / 36e5;
	        break;
	      // 1000 * 60 * 60
	      case 'day':
	        output = (this - that - zoneDelta) / 864e5;
	        break;
	      // 1000 * 60 * 60 * 24, negate dst
	      case 'week':
	        output = (this - that - zoneDelta) / 6048e5;
	        break;
	      // 1000 * 60 * 60 * 24 * 7, negate dst
	      default:
	        output = this - that;
	    }
	    return asFloat ? output : absFloor(output);
	  }
	  function monthDiff(a, b) {
	    if (a.date() < b.date()) {
	      // end-of-month calculations work correct when the start month has more
	      // days than the end month.
	      return -monthDiff(b, a);
	    }
	    // difference in months
	    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
	      // b is in (anchor - 1 month, anchor + 1 month)
	      anchor = a.clone().add(wholeMonthDiff, 'months'),
	      anchor2,
	      adjust;
	    if (b - anchor < 0) {
	      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	      // linear across the month
	      adjust = (b - anchor) / (anchor - anchor2);
	    } else {
	      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	      // linear across the month
	      adjust = (b - anchor) / (anchor2 - anchor);
	    }

	    //check for negative zero, return zero if negative zero
	    return -(wholeMonthDiff + adjust) || 0;
	  }
	  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	  function toString() {
	    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	  }
	  function toISOString(keepOffset) {
	    if (!this.isValid()) {
	      return null;
	    }
	    var utc = keepOffset !== true,
	      m = utc ? this.clone().utc() : this;
	    if (m.year() < 0 || m.year() > 9999) {
	      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
	    }
	    if (isFunction(Date.prototype.toISOString)) {
	      // native implementation is ~50x faster, use it when we can
	      if (utc) {
	        return this.toDate().toISOString();
	      } else {
	        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
	      }
	    }
	    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
	  }

	  /**
	   * Return a human readable representation of a moment that can
	   * also be evaluated to get a new moment which is the same
	   *
	   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	   */
	  function inspect() {
	    if (!this.isValid()) {
	      return 'moment.invalid(/* ' + this._i + ' */)';
	    }
	    var func = 'moment',
	      zone = '',
	      prefix,
	      year,
	      datetime,
	      suffix;
	    if (!this.isLocal()) {
	      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
	      zone = 'Z';
	    }
	    prefix = '[' + func + '("]';
	    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
	    datetime = '-MM-DD[T]HH:mm:ss.SSS';
	    suffix = zone + '[")]';
	    return this.format(prefix + year + datetime + suffix);
	  }
	  function format(inputString) {
	    if (!inputString) {
	      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
	    }
	    var output = formatMoment(this, inputString);
	    return this.localeData().postformat(output);
	  }
	  function from(time, withoutSuffix) {
	    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
	      return createDuration({
	        to: this,
	        from: time
	      }).locale(this.locale()).humanize(!withoutSuffix);
	    } else {
	      return this.localeData().invalidDate();
	    }
	  }
	  function fromNow(withoutSuffix) {
	    return this.from(createLocal(), withoutSuffix);
	  }
	  function to(time, withoutSuffix) {
	    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
	      return createDuration({
	        from: this,
	        to: time
	      }).locale(this.locale()).humanize(!withoutSuffix);
	    } else {
	      return this.localeData().invalidDate();
	    }
	  }
	  function toNow(withoutSuffix) {
	    return this.to(createLocal(), withoutSuffix);
	  }

	  // If passed a locale key, it will set the locale for this
	  // instance.  Otherwise, it will return the locale configuration
	  // variables for this instance.
	  function locale(key) {
	    var newLocaleData;
	    if (key === undefined) {
	      return this._locale._abbr;
	    } else {
	      newLocaleData = getLocale(key);
	      if (newLocaleData != null) {
	        this._locale = newLocaleData;
	      }
	      return this;
	    }
	  }
	  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
	    if (key === undefined) {
	      return this.localeData();
	    } else {
	      return this.locale(key);
	    }
	  });
	  function localeData() {
	    return this._locale;
	  }
	  var MS_PER_SECOND = 1000,
	    MS_PER_MINUTE = 60 * MS_PER_SECOND,
	    MS_PER_HOUR = 60 * MS_PER_MINUTE,
	    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

	  // actual modulo - handles negative numbers (for dates before 1970):
	  function mod$1(dividend, divisor) {
	    return (dividend % divisor + divisor) % divisor;
	  }
	  function localStartOfDate(y, m, d) {
	    // the date constructor remaps years 0-99 to 1900-1999
	    if (y < 100 && y >= 0) {
	      // preserve leap years using a full 400 year cycle, then reset
	      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
	    } else {
	      return new Date(y, m, d).valueOf();
	    }
	  }
	  function utcStartOfDate(y, m, d) {
	    // Date.UTC remaps years 0-99 to 1900-1999
	    if (y < 100 && y >= 0) {
	      // preserve leap years using a full 400 year cycle, then reset
	      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
	    } else {
	      return Date.UTC(y, m, d);
	    }
	  }
	  function startOf(units) {
	    var time, startOfDate;
	    units = normalizeUnits(units);
	    if (units === undefined || units === 'millisecond' || !this.isValid()) {
	      return this;
	    }
	    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
	    switch (units) {
	      case 'year':
	        time = startOfDate(this.year(), 0, 1);
	        break;
	      case 'quarter':
	        time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
	        break;
	      case 'month':
	        time = startOfDate(this.year(), this.month(), 1);
	        break;
	      case 'week':
	        time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
	        break;
	      case 'isoWeek':
	        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
	        break;
	      case 'day':
	      case 'date':
	        time = startOfDate(this.year(), this.month(), this.date());
	        break;
	      case 'hour':
	        time = this._d.valueOf();
	        time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
	        break;
	      case 'minute':
	        time = this._d.valueOf();
	        time -= mod$1(time, MS_PER_MINUTE);
	        break;
	      case 'second':
	        time = this._d.valueOf();
	        time -= mod$1(time, MS_PER_SECOND);
	        break;
	    }
	    this._d.setTime(time);
	    hooks.updateOffset(this, true);
	    return this;
	  }
	  function endOf(units) {
	    var time, startOfDate;
	    units = normalizeUnits(units);
	    if (units === undefined || units === 'millisecond' || !this.isValid()) {
	      return this;
	    }
	    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
	    switch (units) {
	      case 'year':
	        time = startOfDate(this.year() + 1, 0, 1) - 1;
	        break;
	      case 'quarter':
	        time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
	        break;
	      case 'month':
	        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
	        break;
	      case 'week':
	        time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
	        break;
	      case 'isoWeek':
	        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
	        break;
	      case 'day':
	      case 'date':
	        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
	        break;
	      case 'hour':
	        time = this._d.valueOf();
	        time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
	        break;
	      case 'minute':
	        time = this._d.valueOf();
	        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
	        break;
	      case 'second':
	        time = this._d.valueOf();
	        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
	        break;
	    }
	    this._d.setTime(time);
	    hooks.updateOffset(this, true);
	    return this;
	  }
	  function valueOf() {
	    return this._d.valueOf() - (this._offset || 0) * 60000;
	  }
	  function unix() {
	    return Math.floor(this.valueOf() / 1000);
	  }
	  function toDate() {
	    return new Date(this.valueOf());
	  }
	  function toArray() {
	    var m = this;
	    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	  }
	  function toObject() {
	    var m = this;
	    return {
	      years: m.year(),
	      months: m.month(),
	      date: m.date(),
	      hours: m.hours(),
	      minutes: m.minutes(),
	      seconds: m.seconds(),
	      milliseconds: m.milliseconds()
	    };
	  }
	  function toJSON() {
	    // new Date(NaN).toJSON() === null
	    return this.isValid() ? this.toISOString() : null;
	  }
	  function isValid$2() {
	    return isValid(this);
	  }
	  function parsingFlags() {
	    return extend({}, getParsingFlags(this));
	  }
	  function invalidAt() {
	    return getParsingFlags(this).overflow;
	  }
	  function creationData() {
	    return {
	      input: this._i,
	      format: this._f,
	      locale: this._locale,
	      isUTC: this._isUTC,
	      strict: this._strict
	    };
	  }
	  addFormatToken('N', 0, 0, 'eraAbbr');
	  addFormatToken('NN', 0, 0, 'eraAbbr');
	  addFormatToken('NNN', 0, 0, 'eraAbbr');
	  addFormatToken('NNNN', 0, 0, 'eraName');
	  addFormatToken('NNNNN', 0, 0, 'eraNarrow');
	  addFormatToken('y', ['y', 1], 'yo', 'eraYear');
	  addFormatToken('y', ['yy', 2], 0, 'eraYear');
	  addFormatToken('y', ['yyy', 3], 0, 'eraYear');
	  addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
	  addRegexToken('N', matchEraAbbr);
	  addRegexToken('NN', matchEraAbbr);
	  addRegexToken('NNN', matchEraAbbr);
	  addRegexToken('NNNN', matchEraName);
	  addRegexToken('NNNNN', matchEraNarrow);
	  addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
	    var era = config._locale.erasParse(input, token, config._strict);
	    if (era) {
	      getParsingFlags(config).era = era;
	    } else {
	      getParsingFlags(config).invalidEra = input;
	    }
	  });
	  addRegexToken('y', matchUnsigned);
	  addRegexToken('yy', matchUnsigned);
	  addRegexToken('yyy', matchUnsigned);
	  addRegexToken('yyyy', matchUnsigned);
	  addRegexToken('yo', matchEraYearOrdinal);
	  addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
	  addParseToken(['yo'], function (input, array, config, token) {
	    var match;
	    if (config._locale._eraYearOrdinalRegex) {
	      match = input.match(config._locale._eraYearOrdinalRegex);
	    }
	    if (config._locale.eraYearOrdinalParse) {
	      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
	    } else {
	      array[YEAR] = parseInt(input, 10);
	    }
	  });
	  function localeEras(m, format) {
	    var i,
	      l,
	      date,
	      eras = this._eras || getLocale('en')._eras;
	    for (i = 0, l = eras.length; i < l; ++i) {
	      switch (typeof eras[i].since) {
	        case 'string':
	          // truncate time
	          date = hooks(eras[i].since).startOf('day');
	          eras[i].since = date.valueOf();
	          break;
	      }
	      switch (typeof eras[i].until) {
	        case 'undefined':
	          eras[i].until = +Infinity;
	          break;
	        case 'string':
	          // truncate time
	          date = hooks(eras[i].until).startOf('day').valueOf();
	          eras[i].until = date.valueOf();
	          break;
	      }
	    }
	    return eras;
	  }
	  function localeErasParse(eraName, format, strict) {
	    var i,
	      l,
	      eras = this.eras(),
	      name,
	      abbr,
	      narrow;
	    eraName = eraName.toUpperCase();
	    for (i = 0, l = eras.length; i < l; ++i) {
	      name = eras[i].name.toUpperCase();
	      abbr = eras[i].abbr.toUpperCase();
	      narrow = eras[i].narrow.toUpperCase();
	      if (strict) {
	        switch (format) {
	          case 'N':
	          case 'NN':
	          case 'NNN':
	            if (abbr === eraName) {
	              return eras[i];
	            }
	            break;
	          case 'NNNN':
	            if (name === eraName) {
	              return eras[i];
	            }
	            break;
	          case 'NNNNN':
	            if (narrow === eraName) {
	              return eras[i];
	            }
	            break;
	        }
	      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
	        return eras[i];
	      }
	    }
	  }
	  function localeErasConvertYear(era, year) {
	    var dir = era.since <= era.until ? +1 : -1;
	    if (year === undefined) {
	      return hooks(era.since).year();
	    } else {
	      return hooks(era.since).year() + (year - era.offset) * dir;
	    }
	  }
	  function getEraName() {
	    var i,
	      l,
	      val,
	      eras = this.localeData().eras();
	    for (i = 0, l = eras.length; i < l; ++i) {
	      // truncate time
	      val = this.clone().startOf('day').valueOf();
	      if (eras[i].since <= val && val <= eras[i].until) {
	        return eras[i].name;
	      }
	      if (eras[i].until <= val && val <= eras[i].since) {
	        return eras[i].name;
	      }
	    }
	    return '';
	  }
	  function getEraNarrow() {
	    var i,
	      l,
	      val,
	      eras = this.localeData().eras();
	    for (i = 0, l = eras.length; i < l; ++i) {
	      // truncate time
	      val = this.clone().startOf('day').valueOf();
	      if (eras[i].since <= val && val <= eras[i].until) {
	        return eras[i].narrow;
	      }
	      if (eras[i].until <= val && val <= eras[i].since) {
	        return eras[i].narrow;
	      }
	    }
	    return '';
	  }
	  function getEraAbbr() {
	    var i,
	      l,
	      val,
	      eras = this.localeData().eras();
	    for (i = 0, l = eras.length; i < l; ++i) {
	      // truncate time
	      val = this.clone().startOf('day').valueOf();
	      if (eras[i].since <= val && val <= eras[i].until) {
	        return eras[i].abbr;
	      }
	      if (eras[i].until <= val && val <= eras[i].since) {
	        return eras[i].abbr;
	      }
	    }
	    return '';
	  }
	  function getEraYear() {
	    var i,
	      l,
	      dir,
	      val,
	      eras = this.localeData().eras();
	    for (i = 0, l = eras.length; i < l; ++i) {
	      dir = eras[i].since <= eras[i].until ? +1 : -1;

	      // truncate time
	      val = this.clone().startOf('day').valueOf();
	      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
	        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
	      }
	    }
	    return this.year();
	  }
	  function erasNameRegex(isStrict) {
	    if (!hasOwnProp(this, '_erasNameRegex')) {
	      computeErasParse.call(this);
	    }
	    return isStrict ? this._erasNameRegex : this._erasRegex;
	  }
	  function erasAbbrRegex(isStrict) {
	    if (!hasOwnProp(this, '_erasAbbrRegex')) {
	      computeErasParse.call(this);
	    }
	    return isStrict ? this._erasAbbrRegex : this._erasRegex;
	  }
	  function erasNarrowRegex(isStrict) {
	    if (!hasOwnProp(this, '_erasNarrowRegex')) {
	      computeErasParse.call(this);
	    }
	    return isStrict ? this._erasNarrowRegex : this._erasRegex;
	  }
	  function matchEraAbbr(isStrict, locale) {
	    return locale.erasAbbrRegex(isStrict);
	  }
	  function matchEraName(isStrict, locale) {
	    return locale.erasNameRegex(isStrict);
	  }
	  function matchEraNarrow(isStrict, locale) {
	    return locale.erasNarrowRegex(isStrict);
	  }
	  function matchEraYearOrdinal(isStrict, locale) {
	    return locale._eraYearOrdinalRegex || matchUnsigned;
	  }
	  function computeErasParse() {
	    var abbrPieces = [],
	      namePieces = [],
	      narrowPieces = [],
	      mixedPieces = [],
	      i,
	      l,
	      eras = this.eras();
	    for (i = 0, l = eras.length; i < l; ++i) {
	      namePieces.push(regexEscape(eras[i].name));
	      abbrPieces.push(regexEscape(eras[i].abbr));
	      narrowPieces.push(regexEscape(eras[i].narrow));
	      mixedPieces.push(regexEscape(eras[i].name));
	      mixedPieces.push(regexEscape(eras[i].abbr));
	      mixedPieces.push(regexEscape(eras[i].narrow));
	    }
	    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
	    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
	    this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
	  }

	  // FORMATTING

	  addFormatToken(0, ['gg', 2], 0, function () {
	    return this.weekYear() % 100;
	  });
	  addFormatToken(0, ['GG', 2], 0, function () {
	    return this.isoWeekYear() % 100;
	  });
	  function addWeekYearFormatToken(token, getter) {
	    addFormatToken(0, [token, token.length], 0, getter);
	  }
	  addWeekYearFormatToken('gggg', 'weekYear');
	  addWeekYearFormatToken('ggggg', 'weekYear');
	  addWeekYearFormatToken('GGGG', 'isoWeekYear');
	  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	  // ALIASES

	  addUnitAlias('weekYear', 'gg');
	  addUnitAlias('isoWeekYear', 'GG');

	  // PRIORITY

	  addUnitPriority('weekYear', 1);
	  addUnitPriority('isoWeekYear', 1);

	  // PARSING

	  addRegexToken('G', matchSigned);
	  addRegexToken('g', matchSigned);
	  addRegexToken('GG', match1to2, match2);
	  addRegexToken('gg', match1to2, match2);
	  addRegexToken('GGGG', match1to4, match4);
	  addRegexToken('gggg', match1to4, match4);
	  addRegexToken('GGGGG', match1to6, match6);
	  addRegexToken('ggggg', match1to6, match6);
	  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	    week[token.substr(0, 2)] = toInt(input);
	  });
	  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	    week[token] = hooks.parseTwoDigitYear(input);
	  });

	  // MOMENTS

	  function getSetWeekYear(input) {
	    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
	  }
	  function getSetISOWeekYear(input) {
	    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
	  }
	  function getISOWeeksInYear() {
	    return weeksInYear(this.year(), 1, 4);
	  }
	  function getISOWeeksInISOWeekYear() {
	    return weeksInYear(this.isoWeekYear(), 1, 4);
	  }
	  function getWeeksInYear() {
	    var weekInfo = this.localeData()._week;
	    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	  }
	  function getWeeksInWeekYear() {
	    var weekInfo = this.localeData()._week;
	    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
	  }
	  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	    var weeksTarget;
	    if (input == null) {
	      return weekOfYear(this, dow, doy).year;
	    } else {
	      weeksTarget = weeksInYear(input, dow, doy);
	      if (week > weeksTarget) {
	        week = weeksTarget;
	      }
	      return setWeekAll.call(this, input, week, weekday, dow, doy);
	    }
	  }
	  function setWeekAll(weekYear, week, weekday, dow, doy) {
	    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	      date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	    this.year(date.getUTCFullYear());
	    this.month(date.getUTCMonth());
	    this.date(date.getUTCDate());
	    return this;
	  }

	  // FORMATTING

	  addFormatToken('Q', 0, 'Qo', 'quarter');

	  // ALIASES

	  addUnitAlias('quarter', 'Q');

	  // PRIORITY

	  addUnitPriority('quarter', 7);

	  // PARSING

	  addRegexToken('Q', match1);
	  addParseToken('Q', function (input, array) {
	    array[MONTH] = (toInt(input) - 1) * 3;
	  });

	  // MOMENTS

	  function getSetQuarter(input) {
	    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	  }

	  // FORMATTING

	  addFormatToken('D', ['DD', 2], 'Do', 'date');

	  // ALIASES

	  addUnitAlias('date', 'D');

	  // PRIORITY
	  addUnitPriority('date', 9);

	  // PARSING

	  addRegexToken('D', match1to2);
	  addRegexToken('DD', match1to2, match2);
	  addRegexToken('Do', function (isStrict, locale) {
	    // TODO: Remove "ordinalParse" fallback in next major release.
	    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
	  });
	  addParseToken(['D', 'DD'], DATE);
	  addParseToken('Do', function (input, array) {
	    array[DATE] = toInt(input.match(match1to2)[0]);
	  });

	  // MOMENTS

	  var getSetDayOfMonth = makeGetSet('Date', true);

	  // FORMATTING

	  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	  // ALIASES

	  addUnitAlias('dayOfYear', 'DDD');

	  // PRIORITY
	  addUnitPriority('dayOfYear', 4);

	  // PARSING

	  addRegexToken('DDD', match1to3);
	  addRegexToken('DDDD', match3);
	  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	    config._dayOfYear = toInt(input);
	  });

	  // HELPERS

	  // MOMENTS

	  function getSetDayOfYear(input) {
	    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
	  }

	  // FORMATTING

	  addFormatToken('m', ['mm', 2], 0, 'minute');

	  // ALIASES

	  addUnitAlias('minute', 'm');

	  // PRIORITY

	  addUnitPriority('minute', 14);

	  // PARSING

	  addRegexToken('m', match1to2);
	  addRegexToken('mm', match1to2, match2);
	  addParseToken(['m', 'mm'], MINUTE);

	  // MOMENTS

	  var getSetMinute = makeGetSet('Minutes', false);

	  // FORMATTING

	  addFormatToken('s', ['ss', 2], 0, 'second');

	  // ALIASES

	  addUnitAlias('second', 's');

	  // PRIORITY

	  addUnitPriority('second', 15);

	  // PARSING

	  addRegexToken('s', match1to2);
	  addRegexToken('ss', match1to2, match2);
	  addParseToken(['s', 'ss'], SECOND);

	  // MOMENTS

	  var getSetSecond = makeGetSet('Seconds', false);

	  // FORMATTING

	  addFormatToken('S', 0, 0, function () {
	    return ~~(this.millisecond() / 100);
	  });
	  addFormatToken(0, ['SS', 2], 0, function () {
	    return ~~(this.millisecond() / 10);
	  });
	  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	  addFormatToken(0, ['SSSS', 4], 0, function () {
	    return this.millisecond() * 10;
	  });
	  addFormatToken(0, ['SSSSS', 5], 0, function () {
	    return this.millisecond() * 100;
	  });
	  addFormatToken(0, ['SSSSSS', 6], 0, function () {
	    return this.millisecond() * 1000;
	  });
	  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	    return this.millisecond() * 10000;
	  });
	  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	    return this.millisecond() * 100000;
	  });
	  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	    return this.millisecond() * 1000000;
	  });

	  // ALIASES

	  addUnitAlias('millisecond', 'ms');

	  // PRIORITY

	  addUnitPriority('millisecond', 16);

	  // PARSING

	  addRegexToken('S', match1to3, match1);
	  addRegexToken('SS', match1to3, match2);
	  addRegexToken('SSS', match1to3, match3);
	  var token, getSetMillisecond;
	  for (token = 'SSSS'; token.length <= 9; token += 'S') {
	    addRegexToken(token, matchUnsigned);
	  }
	  function parseMs(input, array) {
	    array[MILLISECOND] = toInt(('0.' + input) * 1000);
	  }
	  for (token = 'S'; token.length <= 9; token += 'S') {
	    addParseToken(token, parseMs);
	  }
	  getSetMillisecond = makeGetSet('Milliseconds', false);

	  // FORMATTING

	  addFormatToken('z', 0, 0, 'zoneAbbr');
	  addFormatToken('zz', 0, 0, 'zoneName');

	  // MOMENTS

	  function getZoneAbbr() {
	    return this._isUTC ? 'UTC' : '';
	  }
	  function getZoneName() {
	    return this._isUTC ? 'Coordinated Universal Time' : '';
	  }
	  var proto = Moment.prototype;
	  proto.add = add;
	  proto.calendar = calendar$1;
	  proto.clone = clone;
	  proto.diff = diff;
	  proto.endOf = endOf;
	  proto.format = format;
	  proto.from = from;
	  proto.fromNow = fromNow;
	  proto.to = to;
	  proto.toNow = toNow;
	  proto.get = stringGet;
	  proto.invalidAt = invalidAt;
	  proto.isAfter = isAfter;
	  proto.isBefore = isBefore;
	  proto.isBetween = isBetween;
	  proto.isSame = isSame;
	  proto.isSameOrAfter = isSameOrAfter;
	  proto.isSameOrBefore = isSameOrBefore;
	  proto.isValid = isValid$2;
	  proto.lang = lang;
	  proto.locale = locale;
	  proto.localeData = localeData;
	  proto.max = prototypeMax;
	  proto.min = prototypeMin;
	  proto.parsingFlags = parsingFlags;
	  proto.set = stringSet;
	  proto.startOf = startOf;
	  proto.subtract = subtract;
	  proto.toArray = toArray;
	  proto.toObject = toObject;
	  proto.toDate = toDate;
	  proto.toISOString = toISOString;
	  proto.inspect = inspect;
	  if (typeof Symbol !== 'undefined' && Symbol.for != null) {
	    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
	      return 'Moment<' + this.format() + '>';
	    };
	  }
	  proto.toJSON = toJSON;
	  proto.toString = toString;
	  proto.unix = unix;
	  proto.valueOf = valueOf;
	  proto.creationData = creationData;
	  proto.eraName = getEraName;
	  proto.eraNarrow = getEraNarrow;
	  proto.eraAbbr = getEraAbbr;
	  proto.eraYear = getEraYear;
	  proto.year = getSetYear;
	  proto.isLeapYear = getIsLeapYear;
	  proto.weekYear = getSetWeekYear;
	  proto.isoWeekYear = getSetISOWeekYear;
	  proto.quarter = proto.quarters = getSetQuarter;
	  proto.month = getSetMonth;
	  proto.daysInMonth = getDaysInMonth;
	  proto.week = proto.weeks = getSetWeek;
	  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
	  proto.weeksInYear = getWeeksInYear;
	  proto.weeksInWeekYear = getWeeksInWeekYear;
	  proto.isoWeeksInYear = getISOWeeksInYear;
	  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
	  proto.date = getSetDayOfMonth;
	  proto.day = proto.days = getSetDayOfWeek;
	  proto.weekday = getSetLocaleDayOfWeek;
	  proto.isoWeekday = getSetISODayOfWeek;
	  proto.dayOfYear = getSetDayOfYear;
	  proto.hour = proto.hours = getSetHour;
	  proto.minute = proto.minutes = getSetMinute;
	  proto.second = proto.seconds = getSetSecond;
	  proto.millisecond = proto.milliseconds = getSetMillisecond;
	  proto.utcOffset = getSetOffset;
	  proto.utc = setOffsetToUTC;
	  proto.local = setOffsetToLocal;
	  proto.parseZone = setOffsetToParsedOffset;
	  proto.hasAlignedHourOffset = hasAlignedHourOffset;
	  proto.isDST = isDaylightSavingTime;
	  proto.isLocal = isLocal;
	  proto.isUtcOffset = isUtcOffset;
	  proto.isUtc = isUtc;
	  proto.isUTC = isUtc;
	  proto.zoneAbbr = getZoneAbbr;
	  proto.zoneName = getZoneName;
	  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
	  function createUnix(input) {
	    return createLocal(input * 1000);
	  }
	  function createInZone() {
	    return createLocal.apply(null, arguments).parseZone();
	  }
	  function preParsePostFormat(string) {
	    return string;
	  }
	  var proto$1 = Locale.prototype;
	  proto$1.calendar = calendar;
	  proto$1.longDateFormat = longDateFormat;
	  proto$1.invalidDate = invalidDate;
	  proto$1.ordinal = ordinal;
	  proto$1.preparse = preParsePostFormat;
	  proto$1.postformat = preParsePostFormat;
	  proto$1.relativeTime = relativeTime;
	  proto$1.pastFuture = pastFuture;
	  proto$1.set = set;
	  proto$1.eras = localeEras;
	  proto$1.erasParse = localeErasParse;
	  proto$1.erasConvertYear = localeErasConvertYear;
	  proto$1.erasAbbrRegex = erasAbbrRegex;
	  proto$1.erasNameRegex = erasNameRegex;
	  proto$1.erasNarrowRegex = erasNarrowRegex;
	  proto$1.months = localeMonths;
	  proto$1.monthsShort = localeMonthsShort;
	  proto$1.monthsParse = localeMonthsParse;
	  proto$1.monthsRegex = monthsRegex;
	  proto$1.monthsShortRegex = monthsShortRegex;
	  proto$1.week = localeWeek;
	  proto$1.firstDayOfYear = localeFirstDayOfYear;
	  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
	  proto$1.weekdays = localeWeekdays;
	  proto$1.weekdaysMin = localeWeekdaysMin;
	  proto$1.weekdaysShort = localeWeekdaysShort;
	  proto$1.weekdaysParse = localeWeekdaysParse;
	  proto$1.weekdaysRegex = weekdaysRegex;
	  proto$1.weekdaysShortRegex = weekdaysShortRegex;
	  proto$1.weekdaysMinRegex = weekdaysMinRegex;
	  proto$1.isPM = localeIsPM;
	  proto$1.meridiem = localeMeridiem;
	  function get$1(format, index, field, setter) {
	    var locale = getLocale(),
	      utc = createUTC().set(setter, index);
	    return locale[field](utc, format);
	  }
	  function listMonthsImpl(format, index, field) {
	    if (isNumber(format)) {
	      index = format;
	      format = undefined;
	    }
	    format = format || '';
	    if (index != null) {
	      return get$1(format, index, field, 'month');
	    }
	    var i,
	      out = [];
	    for (i = 0; i < 12; i++) {
	      out[i] = get$1(format, i, field, 'month');
	    }
	    return out;
	  }

	  // ()
	  // (5)
	  // (fmt, 5)
	  // (fmt)
	  // (true)
	  // (true, 5)
	  // (true, fmt, 5)
	  // (true, fmt)
	  function listWeekdaysImpl(localeSorted, format, index, field) {
	    if (typeof localeSorted === 'boolean') {
	      if (isNumber(format)) {
	        index = format;
	        format = undefined;
	      }
	      format = format || '';
	    } else {
	      format = localeSorted;
	      index = format;
	      localeSorted = false;
	      if (isNumber(format)) {
	        index = format;
	        format = undefined;
	      }
	      format = format || '';
	    }
	    var locale = getLocale(),
	      shift = localeSorted ? locale._week.dow : 0,
	      i,
	      out = [];
	    if (index != null) {
	      return get$1(format, (index + shift) % 7, field, 'day');
	    }
	    for (i = 0; i < 7; i++) {
	      out[i] = get$1(format, (i + shift) % 7, field, 'day');
	    }
	    return out;
	  }
	  function listMonths(format, index) {
	    return listMonthsImpl(format, index, 'months');
	  }
	  function listMonthsShort(format, index) {
	    return listMonthsImpl(format, index, 'monthsShort');
	  }
	  function listWeekdays(localeSorted, format, index) {
	    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	  }
	  function listWeekdaysShort(localeSorted, format, index) {
	    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	  }
	  function listWeekdaysMin(localeSorted, format, index) {
	    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	  }
	  getSetGlobalLocale('en', {
	    eras: [{
	      since: '0001-01-01',
	      until: +Infinity,
	      offset: 1,
	      name: 'Anno Domini',
	      narrow: 'AD',
	      abbr: 'AD'
	    }, {
	      since: '0000-12-31',
	      until: -Infinity,
	      offset: 1,
	      name: 'Before Christ',
	      narrow: 'BC',
	      abbr: 'BC'
	    }],
	    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	    ordinal: function (number) {
	      var b = number % 10,
	        output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	      return number + output;
	    }
	  });

	  // Side effect imports

	  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
	  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
	  var mathAbs = Math.abs;
	  function abs() {
	    var data = this._data;
	    this._milliseconds = mathAbs(this._milliseconds);
	    this._days = mathAbs(this._days);
	    this._months = mathAbs(this._months);
	    data.milliseconds = mathAbs(data.milliseconds);
	    data.seconds = mathAbs(data.seconds);
	    data.minutes = mathAbs(data.minutes);
	    data.hours = mathAbs(data.hours);
	    data.months = mathAbs(data.months);
	    data.years = mathAbs(data.years);
	    return this;
	  }
	  function addSubtract$1(duration, input, value, direction) {
	    var other = createDuration(input, value);
	    duration._milliseconds += direction * other._milliseconds;
	    duration._days += direction * other._days;
	    duration._months += direction * other._months;
	    return duration._bubble();
	  }

	  // supports only 2.0-style add(1, 's') or add(duration)
	  function add$1(input, value) {
	    return addSubtract$1(this, input, value, 1);
	  }

	  // supports only 2.0-style subtract(1, 's') or subtract(duration)
	  function subtract$1(input, value) {
	    return addSubtract$1(this, input, value, -1);
	  }
	  function absCeil(number) {
	    if (number < 0) {
	      return Math.floor(number);
	    } else {
	      return Math.ceil(number);
	    }
	  }
	  function bubble() {
	    var milliseconds = this._milliseconds,
	      days = this._days,
	      months = this._months,
	      data = this._data,
	      seconds,
	      minutes,
	      hours,
	      years,
	      monthsFromDays;

	    // if we have a mix of positive and negative values, bubble down first
	    // check: https://github.com/moment/moment/issues/2166
	    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
	      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	      days = 0;
	      months = 0;
	    }

	    // The following code bubbles up values, see the tests for
	    // examples of what that means.
	    data.milliseconds = milliseconds % 1000;
	    seconds = absFloor(milliseconds / 1000);
	    data.seconds = seconds % 60;
	    minutes = absFloor(seconds / 60);
	    data.minutes = minutes % 60;
	    hours = absFloor(minutes / 60);
	    data.hours = hours % 24;
	    days += absFloor(hours / 24);

	    // convert days to months
	    monthsFromDays = absFloor(daysToMonths(days));
	    months += monthsFromDays;
	    days -= absCeil(monthsToDays(monthsFromDays));

	    // 12 months -> 1 year
	    years = absFloor(months / 12);
	    months %= 12;
	    data.days = days;
	    data.months = months;
	    data.years = years;
	    return this;
	  }
	  function daysToMonths(days) {
	    // 400 years have 146097 days (taking into account leap year rules)
	    // 400 years have 12 months === 4800
	    return days * 4800 / 146097;
	  }
	  function monthsToDays(months) {
	    // the reverse of daysToMonths
	    return months * 146097 / 4800;
	  }
	  function as(units) {
	    if (!this.isValid()) {
	      return NaN;
	    }
	    var days,
	      months,
	      milliseconds = this._milliseconds;
	    units = normalizeUnits(units);
	    if (units === 'month' || units === 'quarter' || units === 'year') {
	      days = this._days + milliseconds / 864e5;
	      months = this._months + daysToMonths(days);
	      switch (units) {
	        case 'month':
	          return months;
	        case 'quarter':
	          return months / 3;
	        case 'year':
	          return months / 12;
	      }
	    } else {
	      // handle milliseconds separately because of floating point math errors (issue #1867)
	      days = this._days + Math.round(monthsToDays(this._months));
	      switch (units) {
	        case 'week':
	          return days / 7 + milliseconds / 6048e5;
	        case 'day':
	          return days + milliseconds / 864e5;
	        case 'hour':
	          return days * 24 + milliseconds / 36e5;
	        case 'minute':
	          return days * 1440 + milliseconds / 6e4;
	        case 'second':
	          return days * 86400 + milliseconds / 1000;
	        // Math.floor prevents floating point math errors here
	        case 'millisecond':
	          return Math.floor(days * 864e5) + milliseconds;
	        default:
	          throw new Error('Unknown unit ' + units);
	      }
	    }
	  }

	  // TODO: Use this.as('ms')?
	  function valueOf$1() {
	    if (!this.isValid()) {
	      return NaN;
	    }
	    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
	  }
	  function makeAs(alias) {
	    return function () {
	      return this.as(alias);
	    };
	  }
	  var asMilliseconds = makeAs('ms'),
	    asSeconds = makeAs('s'),
	    asMinutes = makeAs('m'),
	    asHours = makeAs('h'),
	    asDays = makeAs('d'),
	    asWeeks = makeAs('w'),
	    asMonths = makeAs('M'),
	    asQuarters = makeAs('Q'),
	    asYears = makeAs('y');
	  function clone$1() {
	    return createDuration(this);
	  }
	  function get$2(units) {
	    units = normalizeUnits(units);
	    return this.isValid() ? this[units + 's']() : NaN;
	  }
	  function makeGetter(name) {
	    return function () {
	      return this.isValid() ? this._data[name] : NaN;
	    };
	  }
	  var milliseconds = makeGetter('milliseconds'),
	    seconds = makeGetter('seconds'),
	    minutes = makeGetter('minutes'),
	    hours = makeGetter('hours'),
	    days = makeGetter('days'),
	    months = makeGetter('months'),
	    years = makeGetter('years');
	  function weeks() {
	    return absFloor(this.days() / 7);
	  }
	  var round = Math.round,
	    thresholds = {
	      ss: 44,
	      // a few seconds to seconds
	      s: 45,
	      // seconds to minute
	      m: 45,
	      // minutes to hour
	      h: 22,
	      // hours to day
	      d: 26,
	      // days to month/week
	      w: null,
	      // weeks to month
	      M: 11 // months to year
	    };

	  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	  }
	  function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
	    var duration = createDuration(posNegDuration).abs(),
	      seconds = round(duration.as('s')),
	      minutes = round(duration.as('m')),
	      hours = round(duration.as('h')),
	      days = round(duration.as('d')),
	      months = round(duration.as('M')),
	      weeks = round(duration.as('w')),
	      years = round(duration.as('y')),
	      a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];
	    if (thresholds.w != null) {
	      a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
	    }
	    a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
	    a[2] = withoutSuffix;
	    a[3] = +posNegDuration > 0;
	    a[4] = locale;
	    return substituteTimeAgo.apply(null, a);
	  }

	  // This function allows you to set the rounding function for relative time strings
	  function getSetRelativeTimeRounding(roundingFunction) {
	    if (roundingFunction === undefined) {
	      return round;
	    }
	    if (typeof roundingFunction === 'function') {
	      round = roundingFunction;
	      return true;
	    }
	    return false;
	  }

	  // This function allows you to set a threshold for relative time strings
	  function getSetRelativeTimeThreshold(threshold, limit) {
	    if (thresholds[threshold] === undefined) {
	      return false;
	    }
	    if (limit === undefined) {
	      return thresholds[threshold];
	    }
	    thresholds[threshold] = limit;
	    if (threshold === 's') {
	      thresholds.ss = limit - 1;
	    }
	    return true;
	  }
	  function humanize(argWithSuffix, argThresholds) {
	    if (!this.isValid()) {
	      return this.localeData().invalidDate();
	    }
	    var withSuffix = false,
	      th = thresholds,
	      locale,
	      output;
	    if (typeof argWithSuffix === 'object') {
	      argThresholds = argWithSuffix;
	      argWithSuffix = false;
	    }
	    if (typeof argWithSuffix === 'boolean') {
	      withSuffix = argWithSuffix;
	    }
	    if (typeof argThresholds === 'object') {
	      th = Object.assign({}, thresholds, argThresholds);
	      if (argThresholds.s != null && argThresholds.ss == null) {
	        th.ss = argThresholds.s - 1;
	      }
	    }
	    locale = this.localeData();
	    output = relativeTime$1(this, !withSuffix, th, locale);
	    if (withSuffix) {
	      output = locale.pastFuture(+this, output);
	    }
	    return locale.postformat(output);
	  }
	  var abs$1 = Math.abs;
	  function sign(x) {
	    return (x > 0) - (x < 0) || +x;
	  }
	  function toISOString$1() {
	    // for ISO strings we do not use the normal bubbling rules:
	    //  * milliseconds bubble up until they become hours
	    //  * days do not bubble at all
	    //  * months bubble up until they become years
	    // This is because there is no context-free conversion between hours and days
	    // (think of clock changes)
	    // and also not between days and months (28-31 days per month)
	    if (!this.isValid()) {
	      return this.localeData().invalidDate();
	    }
	    var seconds = abs$1(this._milliseconds) / 1000,
	      days = abs$1(this._days),
	      months = abs$1(this._months),
	      minutes,
	      hours,
	      years,
	      s,
	      total = this.asSeconds(),
	      totalSign,
	      ymSign,
	      daysSign,
	      hmsSign;
	    if (!total) {
	      // this is the same as C#'s (Noda) and python (isodate)...
	      // but not other JS (goog.date)
	      return 'P0D';
	    }

	    // 3600 seconds -> 60 minutes -> 1 hour
	    minutes = absFloor(seconds / 60);
	    hours = absFloor(minutes / 60);
	    seconds %= 60;
	    minutes %= 60;

	    // 12 months -> 1 year
	    years = absFloor(months / 12);
	    months %= 12;

	    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
	    totalSign = total < 0 ? '-' : '';
	    ymSign = sign(this._months) !== sign(total) ? '-' : '';
	    daysSign = sign(this._days) !== sign(total) ? '-' : '';
	    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
	    return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
	  }
	  var proto$2 = Duration.prototype;
	  proto$2.isValid = isValid$1;
	  proto$2.abs = abs;
	  proto$2.add = add$1;
	  proto$2.subtract = subtract$1;
	  proto$2.as = as;
	  proto$2.asMilliseconds = asMilliseconds;
	  proto$2.asSeconds = asSeconds;
	  proto$2.asMinutes = asMinutes;
	  proto$2.asHours = asHours;
	  proto$2.asDays = asDays;
	  proto$2.asWeeks = asWeeks;
	  proto$2.asMonths = asMonths;
	  proto$2.asQuarters = asQuarters;
	  proto$2.asYears = asYears;
	  proto$2.valueOf = valueOf$1;
	  proto$2._bubble = bubble;
	  proto$2.clone = clone$1;
	  proto$2.get = get$2;
	  proto$2.milliseconds = milliseconds;
	  proto$2.seconds = seconds;
	  proto$2.minutes = minutes;
	  proto$2.hours = hours;
	  proto$2.days = days;
	  proto$2.weeks = weeks;
	  proto$2.months = months;
	  proto$2.years = years;
	  proto$2.humanize = humanize;
	  proto$2.toISOString = toISOString$1;
	  proto$2.toString = toISOString$1;
	  proto$2.toJSON = toISOString$1;
	  proto$2.locale = locale;
	  proto$2.localeData = localeData;
	  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
	  proto$2.lang = lang;

	  // FORMATTING

	  addFormatToken('X', 0, 0, 'unix');
	  addFormatToken('x', 0, 0, 'valueOf');

	  // PARSING

	  addRegexToken('x', matchSigned);
	  addRegexToken('X', matchTimestamp);
	  addParseToken('X', function (input, array, config) {
	    config._d = new Date(parseFloat(input) * 1000);
	  });
	  addParseToken('x', function (input, array, config) {
	    config._d = new Date(toInt(input));
	  });

	  //! moment.js

	  hooks.version = '2.29.4';
	  setHookCallback(createLocal);
	  hooks.fn = proto;
	  hooks.min = min;
	  hooks.max = max;
	  hooks.now = now;
	  hooks.utc = createUTC;
	  hooks.unix = createUnix;
	  hooks.months = listMonths;
	  hooks.isDate = isDate;
	  hooks.locale = getSetGlobalLocale;
	  hooks.invalid = createInvalid;
	  hooks.duration = createDuration;
	  hooks.isMoment = isMoment;
	  hooks.weekdays = listWeekdays;
	  hooks.parseZone = createInZone;
	  hooks.localeData = getLocale;
	  hooks.isDuration = isDuration;
	  hooks.monthsShort = listMonthsShort;
	  hooks.weekdaysMin = listWeekdaysMin;
	  hooks.defineLocale = defineLocale;
	  hooks.updateLocale = updateLocale;
	  hooks.locales = listLocales;
	  hooks.weekdaysShort = listWeekdaysShort;
	  hooks.normalizeUnits = normalizeUnits;
	  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
	  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
	  hooks.calendarFormat = getCalendarFormat;
	  hooks.prototype = proto;

	  // currently HTML5 input type only supports 24-hour formats
	  hooks.HTML5_FMT = {
	    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
	    // <input type="datetime-local" />
	    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
	    // <input type="datetime-local" step="1" />
	    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
	    // <input type="datetime-local" step="0.001" />
	    DATE: 'YYYY-MM-DD',
	    // <input type="date" />
	    TIME: 'HH:mm',
	    // <input type="time" />
	    TIME_SECONDS: 'HH:mm:ss',
	    // <input type="time" step="1" />
	    TIME_MS: 'HH:mm:ss.SSS',
	    // <input type="time" step="0.001" />
	    WEEK: 'GGGG-[W]WW',
	    // <input type="week" />
	    MONTH: 'YYYY-MM' // <input type="month" />
	  };

	  return hooks;
	}); 
} (moment$1));

var momentExports = moment$1.exports;
var moment = /*@__PURE__*/getDefaultExportFromCjs(momentExports);

/* eslint-disable react/prop-types */
function BodyTemplate(props) {
  var data = props.data,
    datatype = props.datatype,
    _props$link = props.link,
    link = _props$link === void 0 ? false : _props$link;
  if (!data) return /*#__PURE__*/React.createElement("span", null); //If data is null , undefined , ""

  if (datatype === 'date') {
    return /*#__PURE__*/React.createElement("span", {
      className: "table-data"
    }, moment(data).format('MM/DD/yyyy'));
  }
  if (link) {
    return /*#__PURE__*/React.createElement("div", {
      className: "table-data link",
      dangerouslySetInnerHTML: {
        __html: data
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "table-data",
    dangerouslySetInnerHTML: {
      __html: data
    }
  });
}

var img$6 = "data:image/png;base64,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";

var img$5 = "data:image/png;base64,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q7uMDrJuFACYh6+tnj46BMzUrZpuEc4WUgBgHn62+T21Eubk9Ooho0OsEwUAxnt4dZ/RIWAFvGB0gHWiAMB4TxkdAFbE/aovHx1iXSgAMNYRudYZNuObRgdYFwoAjPWVTdc7Axvz9aMDrAsFAMa65+gAsGL8zmwRBQDGOmV0AFgxJzc9K4PDpADAWB7rC5uzqzp2dIh1oADAWFeNDgAr6IrRAdaBAgBj/dPoALBiPl99bnSIdaAAwFjnjQ4AK+b9owOsCwUAxnp7tXd0CFgh54wOsC4UABjrY9W7R4eAFfKG0QHWhQIA471qdABYEZdXZ44OsS4UABjvZdVnR4eAFfDy6rLRIdaFAgDjfbL6pdEhYOYur35qdIh1ogDAPDy/+sjoEDBjz6/+cXSIdaIAwDxcWj02hwLgxry2evHoEOtGAYD5+KvqSbksEL7Qe5p+L/aMDrJuFACYl9dU35VbnULV26qHV5eMDrKOFACYn1+vHlJ9fHQQGOhVTb8HHxsdZF0pADBPb63uVb20unJwFthJF1Rn7Bv3/N9GCgDM14XVM6t7VL9WfWZsHNhWb6+eXt0lN8faEUeMDgAc1Aeq76meUd2/ekB1t+qkavfAXHA4LqvOr95Vvan6h6FpFkgBgNVxRXXWvgE4LA4BAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIwxt7B2981ePsADKYAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACHTE6ALBht6oeUt2/Oq06sdo9NBEjfLb6cPWu6qzqnGrPyECsJgUA5u+B1bOrb6huOjgL83NB9evVS6sLB2dhhTgEAPN15+p11dnVN2fx58adUj2vOr/6werIsXFY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";

var img$4 = "data:image/png;base64,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";

/* eslint-disable react/prop-types */
function Sorting(props) {
  var column = props.column,
    setSorting = props.setSorting,
    sorting = props.sorting; //column - to get the particular column while sorting

  var handleSort = function handleSort(column) {
    var order = 0;
    var sortOrder = sorting === null || sorting === void 0 ? void 0 : sorting.sortOrder;
    if (!sortOrder) {
      order = 1;
    } else if (sortOrder === 1) {
      order = -1;
    } else if (sortOrder === -1) {
      order = 0;
    }
    setSorting({
      sortOrder: order,
      sortBy: column
    });
  };
  var sortIcon = React.useMemo(function () {
    var sortOrder = sorting === null || sorting === void 0 ? void 0 : sorting.sortOrder;
    if (!sortOrder) {
      return /*#__PURE__*/React.createElement("img", {
        src: img$6,
        alt: "default_sort",
        style: {
          height: "20px"
        }
      });
    } else if (sortOrder === 1) {
      return /*#__PURE__*/React.createElement("img", {
        src: img$5,
        alt: "sort_asc",
        style: {
          height: "20px"
        }
      });
    } else if (sortOrder === -1) {
      return /*#__PURE__*/React.createElement("img", {
        src: img$4,
        alt: "sort_desc",
        style: {
          height: "20px"
        }
      });
    } else {
      return /*#__PURE__*/React.createElement("img", {
        src: img$6,
        alt: "default_sort",
        style: {
          height: "20px"
        }
      });
    }
  }, [sorting, column]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onClick: function onClick() {
      return handleSort(column);
    }
  }, sortIcon));
}

var OPERATOR = [{
  label: "Match All",
  value: "AND"
}, {
  label: "Match Any",
  value: "OR"
}];
var STR_MATCH_MODE = [{
  label: "Starts with",
  value: "startsWith"
}, {
  label: "Contains",
  value: "contains"
}, {
  label: "Not contains",
  value: "notContains"
}, {
  label: "Ends with",
  value: "endsWith"
}, {
  label: "Equals",
  value: "equals"
}, {
  label: "Not equals",
  value: "notEquals"
}];
var NUM_MATCH_MODE = [{
  label: "Equals",
  value: "equals"
}, {
  label: "Not equals",
  value: "notEquals"
}, {
  label: "Less than",
  value: "lt"
}, {
  label: "Less than or equal to",
  value: "lte"
}, {
  label: "Greater than",
  value: "gt"
}, {
  label: "Greater than or equal to",
  value: "gte"
}];
var DATE_MATCH_MODE = [{
  value: "dateIs",
  label: "Date is"
}, {
  value: "dateIsNot",
  label: "Date is not"
}, {
  value: "dateBefore",
  label: "Date before"
}, {
  value: "dateAfter",
  label: "Date after"
}];
var BOOLEAN_MATCH_MODE = [{
  label: "Yes",
  value: "yes"
}, {
  label: "No",
  value: "no"
}];

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
  nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map$1 || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
var lodash_memoize = memoize;

var memoize$1 = /*@__PURE__*/getDefaultExportFromCjs(lodash_memoize);

function resolver(options) {
  return JSON.stringify(options);
}
function isString(el) {
  return typeof el === 'string';
}
function isUnique(el, index, arr) {
  return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
  return el.toLowerCase() === el;
}
function fixCommas(el) {
  return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
  if (!locale) {
    return locale;
  }
  if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {
    return 'en-US';
  }
  // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
  if (locale.indexOf('.') !== -1) {
    var _a = locale.split('.')[0],
      actualLocale = _a === void 0 ? '' : _a;
    return normalizeLocale(actualLocale);
  }
  // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
  if (locale.indexOf('@') !== -1) {
    var _b = locale.split('@')[0],
      actualLocale = _b === void 0 ? '' : _b;
    return normalizeLocale(actualLocale);
  }
  // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
  if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {
    return locale;
  }
  var _c = locale.split('-'),
    splitEl1 = _c[0],
    _d = _c[1],
    splitEl2 = _d === void 0 ? '' : _d;
  return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.useFallbackLocale,
    useFallbackLocale = _c === void 0 ? true : _c,
    _d = _b.fallbackLocale,
    fallbackLocale = _d === void 0 ? 'en-US' : _d;
  var languageList = [];
  if (typeof navigator !== 'undefined') {
    var rawLanguages = navigator.languages || [];
    var languages = [];
    for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
      var rawLanguagesItem = rawLanguages_1[_i];
      languages = languages.concat(fixCommas(rawLanguagesItem));
    }
    var rawLanguage = navigator.language;
    var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
    languageList = languageList.concat(languages, language);
  }
  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }
  return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = memoize$1(getUserLocalesInternal, resolver);
function getUserLocaleInternal(options) {
  return getUserLocales(options)[0] || null;
}
var getUserLocale = memoize$1(getUserLocaleInternal, resolver);

/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}
function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}
function makeGetRange(getStart, getEnd) {
  return function makeGetRangeInternal(date) {
    return [getStart(date), getEnd(date)];
  };
}
/**
 * Simple getters - getting a property of a given point in time
 */
/**
 * Gets year from a given date.
 *
 * @param {DateLike} date Date to get year from
 * @returns {number} Year
 */
function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }
  if (typeof date === 'number') {
    return date;
  }
  var year = parseInt(date, 10);
  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from a given date.
 *
 * @param {Date} date Date to get month from
 * @returns {number} Month
 */
function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
  throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets day of the month from a given date.
 *
 * @param {Date} date Date to get day of the month from
 * @returns {number} Day of the month
 */
function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Century
 */
/**
 * Gets century start date from a given date.
 *
 * @param {DateLike} date Date to get century start from
 * @returns {Date} Century start date
 */
function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
/**
 * Gets previous century start date from a given date.
 *
 * @param {DateLike} date Date to get previous century start from
 * @returns {Date} Previous century start date
 */
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
/**
 * Gets next century start date from a given date.
 *
 * @param {DateLike} date Date to get next century start from
 * @returns {Date} Next century start date
 */
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
/**
 * Gets century end date from a given date.
 *
 * @param {DateLike} date Date to get century end from
 * @returns {Date} Century end date
 */
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
/**
 * Gets previous century end date from a given date.
 *
 * @param {DateLike} date Date to get previous century end from
 * @returns {Date} Previous century end date
 */
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
/**
 * Gets century start and end dates from a given date.
 *
 * @param {DateLike} date Date to get century start and end from
 * @returns {[Date, Date]} Century start and end dates
 */
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
/**
 * Decade
 */
/**
 * Gets decade start date from a given date.
 *
 * @param {DateLike} date Date to get decade start from
 * @returns {Date} Decade start date
 */
function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
/**
 * Gets previous decade start date from a given date.
 *
 * @param {DateLike} date Date to get previous decade start from
 * @returns {Date} Previous decade start date
 */
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
/**
 * Gets next decade start date from a given date.
 *
 * @param {DateLike} date Date to get next decade start from
 * @returns {Date} Next decade start date
 */
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
/**
 * Gets decade end date from a given date.
 *
 * @param {DateLike} date Date to get decade end from
 * @returns {Date} Decade end date
 */
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
/**
 * Gets previous decade end date from a given date.
 *
 * @param {DateLike} date Date to get previous decade end from
 * @returns {Date} Previous decade end date
 */
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
/**
 * Gets decade start and end dates from a given date.
 *
 * @param {DateLike} date Date to get decade start and end from
 * @returns {[Date, Date]} Decade start and end dates
 */
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
/**
 * Year
 */
/**
 * Gets year start date from a given date.
 *
 * @param {DateLike} date Date to get year start from
 * @returns {Date} Year start date
 */
function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
/**
 * Gets previous year start date from a given date.
 *
 * @param {DateLike} date Date to get previous year start from
 * @returns {Date} Previous year start date
 */
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
/**
 * Gets next year start date from a given date.
 *
 * @param {DateLike} date Date to get next year start from
 * @returns {Date} Next year start date
 */
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
/**
 * Gets year end date from a given date.
 *
 * @param {DateLike} date Date to get year end from
 * @returns {Date} Year end date
 */
var getYearEnd = makeGetEnd(getNextYearStart);
/**
 * Gets previous year end date from a given date.
 *
 * @param {DateLike} date Date to get previous year end from
 * @returns {Date} Previous year end date
 */
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
/**
 * Gets year start and end dates from a given date.
 *
 * @param {DateLike} date Date to get year start and end from
 * @returns {[Date, Date]} Year start and end dates
 */
var getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
/**
 * Gets month start date from a given date.
 *
 * @param {DateLike} date Date to get month start from
 * @returns {Date} Month start date
 */
function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
/**
 * Gets previous month start date from a given date.
 *
 * @param {DateLike} date Date to get previous month start from
 * @returns {Date} Previous month start date
 */
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
/**
 * Gets next month start date from a given date.
 *
 * @param {DateLike} date Date to get next month start from
 * @returns {Date} Next month start date
 */
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
/**
 * Gets month end date from a given date.
 *
 * @param {DateLike} date Date to get month end from
 * @returns {Date} Month end date
 */
var getMonthEnd = makeGetEnd(getNextMonthStart);
/**
 * Gets previous month end date from a given date.
 *
 * @param {DateLike} date Date to get previous month end from
 * @returns {Date} Previous month end date
 */
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
/**
 * Gets month start and end dates from a given date.
 *
 * @param {DateLike} date Date to get month start and end from
 * @returns {[Date, Date]} Month start and end dates
 */
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
/**
 * Gets day start date from a given date.
 *
 * @param {DateLike} date Date to get day start from
 * @returns {Date} Day start date
 */
function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
/**
 * Gets next day start date from a given date.
 *
 * @param {DateLike} date Date to get next day start from
 * @returns {Date} Next day start date
 */
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
/**
 * Gets day end date from a given date.
 *
 * @param {DateLike} date Date to get day end from
 * @returns {Date} Day end date
 */
var getDayEnd = makeGetEnd(getNextDayStart);
/**
 * Gets day start and end dates from a given date.
 *
 * @param {DateLike} date Date to get day start and end from
 * @returns {[Date, Date]} Day start and end dates
 */
var getDayRange = makeGetRange(getDayStart, getDayEnd);
/**
 * Other
 */
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date
 * @returns {number} Number of days in a month
 */
function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

var _a$1;
var CALENDAR_TYPES = {
  GREGORY: 'gregory',
  HEBREW: 'hebrew',
  ISLAMIC: 'islamic',
  ISO_8601: 'iso8601'
};
var DEPRECATED_CALENDAR_TYPES = {
  ARABIC: 'Arabic',
  HEBREW: 'Hebrew',
  ISO_8601: 'ISO 8601',
  US: 'US'
};
var CALENDAR_TYPE_LOCALES = (_a$1 = {}, _a$1[CALENDAR_TYPES.GREGORY] = ['en-CA', 'en-US', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-SV', 'es-VE', 'pt-BR'], _a$1[CALENDAR_TYPES.HEBREW] = ['he', 'he-IL'], _a$1[CALENDAR_TYPES.ISLAMIC] = [
// ar-LB, ar-MA intentionally missing
'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LY', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-YE', 'dv', 'dv-MV', 'ps', 'ps-AR'], _a$1);
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

var formatterCache = new Map();
function getFormatter(options) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || getUserLocale();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */
function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}
var formatDayOptions = {
  day: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatYearOptions = {
  year: 'numeric'
};
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
/* Simple getters - getting a property of a given point in time */
/**
 * Gets day of the week of a given date.
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Day of the week.
 */
function getDayOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;
    case CALENDAR_TYPES.ISLAMIC:
      return (weekday + 1) % 7;
    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.GREGORY:
      return weekday;
    default:
      throw new Error('Unsupported calendar type.');
  }
}
/**
 * Century
 */
/**
 * Gets the year of the beginning of a century of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a century.
 */
function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
/**
 * Decade
 */
/**
 * Gets the year of the beginning of a decade of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a decade.
 */
function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
/**
 * Week
 */
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {Date} Beginning of a given week.
 */
function getBeginOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var year = getYear(date);
  var monthIndex = getMonth(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Week number.
 */
function getWeekNumber(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.GREGORY ? CALENDAR_TYPES.GREGORY : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarType);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek;
  // Look for the first week one that does not come after a given date
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
    year -= 1;
  } while (date < beginOfFirstWeek);
  return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
/**
 * Others
 */
/**
 * Returns the beginning of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a given range.
 */
function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyStart(date);
    case 'decade':
      return getDecadeStart(date);
    case 'year':
      return getYearStart(date);
    case 'month':
      return getMonthStart(date);
    case 'day':
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the beginning of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a previous given range.
 */
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getPreviousCenturyStart(date);
    case 'decade':
      return getPreviousDecadeStart(date);
    case 'year':
      return getPreviousYearStart(date);
    case 'month':
      return getPreviousMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the beginning of a next given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a next given range.
 */
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getNextCenturyStart(date);
    case 'decade':
      return getNextDecadeStart(date);
    case 'year':
      return getNextYearStart(date);
    case 'month':
      return getNextMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getPreviousDecadeStart(date, -100);
    case 'year':
      return getPreviousYearStart(date, -10);
    case 'month':
      return getPreviousMonthStart(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getNextDecadeStart(date, 100);
    case 'year':
      return getNextYearStart(date, 10);
    case 'month':
      return getNextMonthStart(date, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a given range.
 */
function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyEnd(date);
    case 'decade':
      return getDecadeEnd(date);
    case 'year':
      return getYearEnd(date);
    case 'month':
      return getMonthEnd(date);
    case 'day':
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns the end of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a previous given range.
 */
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getPreviousCenturyEnd(date);
    case 'decade':
      return getPreviousDecadeEnd(date);
    case 'year':
      return getPreviousYearEnd(date);
    case 'month':
      return getPreviousMonthEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getPreviousDecadeEnd(date, -100);
    case 'year':
      return getPreviousYearEnd(date, -10);
    case 'month':
      return getPreviousMonthEnd(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyRange(date);
    case 'decade':
      return getDecadeRange(date);
    case 'year':
      return getYearRange(date);
    case 'month':
      return getMonthRange(date);
    case 'day':
      return getDayRange(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a.getTime() - b.getTime();
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear$1, dates) {
  if (formatYear$1 === void 0) {
    formatYear$1 = formatYear;
  }
  return dates.map(function (date) {
    return formatYear$1(locale, date);
  }).join(' – ');
}
/**
 * @callback FormatYear
 * @param {string} locale Locale.
 * @param {Date} date Date.
 * @returns {string} Formatted year.
 */
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a century of a given date.
 */
function getCenturyLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, getCenturyRange(date));
}
/**
 * Returns a string labelling a decade of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a decade of a given date.
 */
function getDecadeLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, getDecadeRange(date));
}
/**
 * Returns a boolean determining whether a given date is the current day of the week.
 *
 * @param {Date} date Date.
 * @returns {boolean} Whether a given date is the current day of the week.
 */
function isCurrentDayOfWeek(date) {
  return date.getDay() === new Date().getDay();
}
/**
 * Returns a boolean determining whether a given date is a weekend day.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {boolean} Whether a given date is a weekend day.
 */
function isWeekend(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISLAMIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;
    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.GREGORY:
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error('Unsupported calendar type.');
  }
}

var className$6 = 'react-calendar__navigation';
function Navigation(_a) {
  var activeStartDate = _a.activeStartDate,
    drillUp = _a.drillUp,
    _b = _a.formatMonthYear,
    formatMonthYear$1 = _b === void 0 ? formatMonthYear : _b,
    _c = _a.formatYear,
    formatYear$1 = _c === void 0 ? formatYear : _c,
    locale = _a.locale,
    maxDate = _a.maxDate,
    minDate = _a.minDate,
    _d = _a.navigationAriaLabel,
    navigationAriaLabel = _d === void 0 ? '' : _d,
    navigationAriaLive = _a.navigationAriaLive,
    navigationLabel = _a.navigationLabel,
    _e = _a.next2AriaLabel,
    next2AriaLabel = _e === void 0 ? '' : _e,
    _f = _a.next2Label,
    next2Label = _f === void 0 ? '»' : _f,
    _g = _a.nextAriaLabel,
    nextAriaLabel = _g === void 0 ? '' : _g,
    _h = _a.nextLabel,
    nextLabel = _h === void 0 ? '›' : _h,
    _j = _a.prev2AriaLabel,
    prev2AriaLabel = _j === void 0 ? '' : _j,
    _k = _a.prev2Label,
    prev2Label = _k === void 0 ? '«' : _k,
    _l = _a.prevAriaLabel,
    prevAriaLabel = _l === void 0 ? '' : _l,
    _m = _a.prevLabel,
    prevLabel = _m === void 0 ? '‹' : _m,
    setActiveStartDate = _a.setActiveStartDate,
    showDoubleView = _a.showDoubleView,
    view = _a.view,
    views = _a.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== 'century';
  var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginPrevious2(view, activeStartDate) : undefined;
  var nextActiveStartDate = getBeginNext(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginNext2(view, activeStartDate) : undefined;
  var prevButtonDisabled = function () {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate, 'prev');
  }
  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2, 'prev2');
  }
  function onClickNext() {
    setActiveStartDate(nextActiveStartDate, 'next');
  }
  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2, 'next2');
  }
  function renderLabel(date) {
    var label = function () {
      switch (view) {
        case 'century':
          return getCenturyLabel(locale, formatYear$1, date);
        case 'decade':
          return getDecadeLabel(locale, formatYear$1, date);
        case 'year':
          return formatYear$1(locale, date);
        case 'month':
          return formatMonthYear$1(locale, date);
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    return navigationLabel ? navigationLabel({
      date: date,
      label: label,
      locale: locale || getUserLocale() || undefined,
      view: view
    }) : label;
  }
  function renderButton() {
    var labelClassName = "".concat(className$6, "__label");
    return /*#__PURE__*/React.createElement("button", {
      "aria-label": navigationAriaLabel,
      "aria-live": navigationAriaLive,
      className: labelClassName,
      disabled: !drillUpAvailable,
      onClick: drillUp,
      style: {
        flexGrow: 1
      },
      type: "button"
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from")
    }, renderLabel(activeStartDate)), showDoubleView ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "".concat(labelClassName, "__divider")
    }, " \u2013 "), /*#__PURE__*/React.createElement("span", {
      className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to")
    }, renderLabel(nextActiveStartDate))) : null);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className$6
  }, prev2Label !== null && shouldShowPrevNext2Buttons ? /*#__PURE__*/React.createElement("button", {
    "aria-label": prev2AriaLabel,
    className: "".concat(className$6, "__arrow ").concat(className$6, "__prev2-button"),
    disabled: prev2ButtonDisabled,
    onClick: onClickPrevious2,
    type: "button"
  }, prev2Label) : null, prevLabel !== null && /*#__PURE__*/React.createElement("button", {
    "aria-label": prevAriaLabel,
    className: "".concat(className$6, "__arrow ").concat(className$6, "__prev-button"),
    disabled: prevButtonDisabled,
    onClick: onClickPrevious,
    type: "button"
  }, prevLabel), renderButton(), nextLabel !== null && /*#__PURE__*/React.createElement("button", {
    "aria-label": nextAriaLabel,
    className: "".concat(className$6, "__arrow ").concat(className$6, "__next-button"),
    disabled: nextButtonDisabled,
    onClick: onClickNext,
    type: "button"
  }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons ? /*#__PURE__*/React.createElement("button", {
    "aria-label": next2AriaLabel,
    className: "".concat(className$6, "__arrow ").concat(className$6, "__next2-button"),
    disabled: next2ButtonDisabled,
    onClick: onClickNext2,
    type: "button"
  }, next2Label) : null);
}

var __assign$e = undefined && undefined.__assign || function () {
  __assign$e = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$e.apply(this, arguments);
};
var __rest$a = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function toPercent(num) {
  return "".concat(num, "%");
}
function Flex(_a) {
  var children = _a.children,
    className = _a.className,
    count = _a.count,
    direction = _a.direction,
    offset = _a.offset,
    style = _a.style,
    wrap = _a.wrap,
    otherProps = __rest$a(_a, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return /*#__PURE__*/React.createElement("div", __assign$e({
    className: className,
    style: __assign$e({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'nowrap'
    }, style)
  }, otherProps), React.Children.map(children, function (child, index) {
    var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
    return /*#__PURE__*/React.cloneElement(child, __assign$e(__assign$e({}, child.props), {
      style: {
        flexBasis: toPercent(100 / count),
        flexShrink: 0,
        flexGrow: 0,
        overflow: 'hidden',
        marginLeft: marginInlineStart,
        marginInlineStart: marginInlineStart,
        marginInlineEnd: 0
      }
    }));
  }));
}

var isProduction = process.env.NODE_ENV === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== 'undefined') {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {}
  }
}

var _a;
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];
  if (isRange) {
    classes.push(baseClassName);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
    if (isRangeStart) {
      classes.push("".concat(baseClassName, "Start"));
    }
    if (isRangeEnd) {
      classes.push("".concat(baseClassName, "End"));
    }
    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName, "BothEnds"));
    }
  }
  return classes;
}
function isCompleteValue(value) {
  if (Array.isArray(value)) {
    return value[0] !== null && value[1] !== null;
  }
  return value !== null;
}
function getTileClasses(args) {
  if (!args) {
    throw new Error('args is required');
  }
  var value = args.value,
    date = args.date,
    hover = args.hover;
  var className = 'react-calendar__tile';
  var classes = [className];
  if (!date) {
    return classes;
  }
  var now = new Date();
  var dateRange = function () {
    if (Array.isArray(date)) {
      return date;
    }
    var dateType = args.dateType;
    if (!dateType) {
      throw new Error('dateType is required when date is not an array of two dates');
    }
    return getRange(dateType, date);
  }();
  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className, "--now"));
  }
  if (!value || !isCompleteValue(value)) {
    return classes;
  }
  var valueRange = function () {
    if (Array.isArray(value)) {
      return value;
    }
    var valueType = args.valueType;
    if (!valueType) {
      throw new Error('valueType is required when value is not an array of two dates');
    }
    return getRange(valueType, value);
  }();
  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className, "--hasActive"));
  }
  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = Array.isArray(value) ? value : [value];
  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
    classes.push.apply(classes, hoverRangeClassNames);
  }
  return classes;
}
var calendarTypeMap = (_a = {}, _a[DEPRECATED_CALENDAR_TYPES.ARABIC] = CALENDAR_TYPES.ISLAMIC, _a[DEPRECATED_CALENDAR_TYPES.HEBREW] = CALENDAR_TYPES.HEBREW, _a[DEPRECATED_CALENDAR_TYPES.ISO_8601] = CALENDAR_TYPES.ISO_8601, _a[DEPRECATED_CALENDAR_TYPES.US] = CALENDAR_TYPES.GREGORY, _a);
function isDeprecatedCalendarType(calendarType) {
  return calendarType !== undefined && calendarType in DEPRECATED_CALENDAR_TYPES;
}
var warned = false;
function mapCalendarType(calendarTypeOrDeprecatedCalendarType) {
  if (isDeprecatedCalendarType(calendarTypeOrDeprecatedCalendarType)) {
    var calendarType = calendarTypeMap[calendarTypeOrDeprecatedCalendarType];
    warning(warned, "Specifying calendarType=\"".concat(calendarTypeOrDeprecatedCalendarType, "\" is deprecated. Use calendarType=\"").concat(calendarType, "\" instead."));
    warned = true;
    return calendarType;
  }
  return calendarTypeOrDeprecatedCalendarType;
}

function TileGroup(_a) {
  var className = _a.className,
    _b = _a.count,
    count = _b === void 0 ? 3 : _b,
    dateTransform = _a.dateTransform,
    dateType = _a.dateType,
    end = _a.end,
    hover = _a.hover,
    offset = _a.offset,
    renderTile = _a.renderTile,
    start = _a.start,
    _c = _a.step,
    step = _c === void 0 ? 1 : _c,
    value = _a.value,
    valueType = _a.valueType;
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(renderTile({
      classes: getTileClasses({
        date: date,
        dateType: dateType,
        hover: hover,
        value: value,
        valueType: valueType
      }),
      date: date
    }));
  }
  return /*#__PURE__*/React.createElement(Flex, {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
}

function Tile(props) {
  var activeStartDate = props.activeStartDate,
    children = props.children,
    classes = props.classes,
    date = props.date,
    formatAbbr = props.formatAbbr,
    locale = props.locale,
    maxDate = props.maxDate,
    maxDateTransform = props.maxDateTransform,
    minDate = props.minDate,
    minDateTransform = props.minDateTransform,
    onClick = props.onClick,
    onMouseOver = props.onMouseOver,
    style = props.style,
    tileClassNameProps = props.tileClassName,
    tileContentProps = props.tileContent,
    tileDisabled = props.tileDisabled,
    view = props.view;
  var tileClassName = React.useMemo(function () {
    var args = {
      activeStartDate: activeStartDate,
      date: date,
      view: view
    };
    return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
  }, [activeStartDate, date, tileClassNameProps, view]);
  var tileContent = React.useMemo(function () {
    var args = {
      activeStartDate: activeStartDate,
      date: date,
      view: view
    };
    return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
  }, [activeStartDate, date, tileContentProps, view]);
  return /*#__PURE__*/React.createElement("button", {
    className: clsx(classes, tileClassName),
    disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
      activeStartDate: activeStartDate,
      date: date,
      view: view
    }),
    onClick: onClick ? function (event) {
      return onClick(date, event);
    } : undefined,
    onFocus: onMouseOver ? function () {
      return onMouseOver(date);
    } : undefined,
    onMouseOver: onMouseOver ? function () {
      return onMouseOver(date);
    } : undefined,
    style: style,
    type: "button"
  }, formatAbbr ? /*#__PURE__*/React.createElement("abbr", {
    "aria-label": formatAbbr(locale, date)
  }, children) : children, tileContent);
}

var __assign$d = undefined && undefined.__assign || function () {
  __assign$d = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$d.apply(this, arguments);
};
var __rest$9 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __spreadArray$3 = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className$5 = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
  var _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    _c = _a.formatYear,
    formatYear$1 = _c === void 0 ? formatYear : _c,
    otherProps = __rest$9(_a, ["classes", "formatYear"]);
  var date = otherProps.date,
    locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, __assign$d({}, otherProps, {
    classes: __spreadArray$3(__spreadArray$3([], classes, true), [className$5], false),
    maxDateTransform: getDecadeEnd,
    minDateTransform: getDecadeStart,
    view: "century"
  }), getDecadeLabel(locale, formatYear$1, date));
}

var __assign$c = undefined && undefined.__assign || function () {
  __assign$c = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$c.apply(this, arguments);
};
var __rest$8 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Decades(props) {
  var activeStartDate = props.activeStartDate,
    hover = props.hover,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$8(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + 99;
  return /*#__PURE__*/React.createElement(TileGroup, {
    className: "react-calendar__century-view__decades",
    dateTransform: getDecadeStart,
    dateType: "decade",
    end: end,
    hover: hover,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$8(_a, ["date"]);
      return /*#__PURE__*/React.createElement(Decade, __assign$c({
        key: date.getTime()
      }, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        date: date
      }));
    },
    start: start,
    step: 10,
    value: value,
    valueType: valueType
  });
}

var __spreadArray$2 = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var calendarTypes = Object.values(CALENDAR_TYPES);
var deprecatedCalendarTypes = Object.values(DEPRECATED_CALENDAR_TYPES);
var allViews$1 = ['century', 'decade', 'year', 'month'];
var isCalendarType = PropTypes.oneOf(__spreadArray$2(__spreadArray$2([], calendarTypes, true), deprecatedCalendarTypes, true));
var isClassName = PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]);
var isMinDate = function isMinDate(props, propName, componentName) {
  var _a = props,
    _b = propName,
    minDate = _a[_b];
  if (!minDate) {
    return null;
  }
  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var maxDate = props.maxDate;
  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }
  return null;
};
var isMaxDate = function isMaxDate(props, propName, componentName) {
  var _a = props,
    _b = propName,
    maxDate = _a[_b];
  if (!maxDate) {
    return null;
  }
  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var minDate = props.minDate;
  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }
  return null;
};
var isRef = PropTypes.oneOfType([PropTypes.func, PropTypes.exact({
  current: PropTypes.any
})]);
var isRange = PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf([null])]).isRequired);
var isValue$1 = PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf([null]), isRange]);
PropTypes.arrayOf(PropTypes.oneOf(allViews$1));
var isView = function isView(props, propName, componentName) {
  var _a = props,
    _b = propName,
    view = _a[_b];
  if (view !== undefined && (typeof view !== 'string' || allViews$1.indexOf(view) === -1)) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allViews$1.map(function (a) {
      return "\"".concat(a, "\"");
    }).join(', '), "]."));
  }
  // Everything is fine
  return null;
};
isView.isRequired = function isViewIsRequired(props, propName, componentName, location, propFullName) {
  var _a = props,
    _b = propName,
    view = _a[_b];
  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }
  return isView(props, propName, componentName);
};
var rangeOf = function (type) {
  return PropTypes.arrayOf(type);
};
var tileGroupProps = {
  activeStartDate: PropTypes.instanceOf(Date).isRequired,
  hover: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  tileClassName: PropTypes.oneOfType([PropTypes.func, isClassName]),
  tileContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  value: isValue$1,
  valueType: PropTypes.oneOf(['century', 'decade', 'year', 'month', 'day']).isRequired
};
({
  activeStartDate: PropTypes.instanceOf(Date).isRequired,
  classes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  locale: PropTypes.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  tileClassName: PropTypes.oneOfType([PropTypes.func, isClassName]),
  tileContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  tileDisabled: PropTypes.func
});

var __assign$b = undefined && undefined.__assign || function () {
  __assign$b = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$b.apply(this, arguments);
};
var CenturyView = function CenturyView(props) {
  function renderDecades() {
    return /*#__PURE__*/React.createElement(Decades, __assign$b({}, props));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "react-calendar__century-view"
  }, renderDecades());
};
CenturyView.propTypes = __assign$b({}, tileGroupProps);
var CenturyView$1 = CenturyView;

var __assign$a = undefined && undefined.__assign || function () {
  __assign$a = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$a.apply(this, arguments);
};
var __rest$7 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __spreadArray$1 = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className$4 = 'react-calendar__decade-view__years__year';
function Year(_a) {
  var _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    _c = _a.formatYear,
    formatYear$1 = _c === void 0 ? formatYear : _c,
    otherProps = __rest$7(_a, ["classes", "formatYear"]);
  var date = otherProps.date,
    locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, __assign$a({}, otherProps, {
    classes: __spreadArray$1(__spreadArray$1([], classes, true), [className$4], false),
    maxDateTransform: getYearEnd,
    minDateTransform: getYearStart,
    view: "decade"
  }), formatYear$1(locale, date));
}

var __assign$9 = undefined && undefined.__assign || function () {
  __assign$9 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$9.apply(this, arguments);
};
var __rest$6 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Years(props) {
  var activeStartDate = props.activeStartDate,
    hover = props.hover,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$6(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + 9;
  return /*#__PURE__*/React.createElement(TileGroup, {
    className: "react-calendar__decade-view__years",
    dateTransform: getYearStart,
    dateType: "year",
    end: end,
    hover: hover,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$6(_a, ["date"]);
      return /*#__PURE__*/React.createElement(Year, __assign$9({
        key: date.getTime()
      }, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        date: date
      }));
    },
    start: start,
    value: value,
    valueType: valueType
  });
}

var __assign$8 = undefined && undefined.__assign || function () {
  __assign$8 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$8.apply(this, arguments);
};
var DecadeView = function DecadeView(props) {
  function renderYears() {
    return /*#__PURE__*/React.createElement(Years, __assign$8({}, props));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "react-calendar__decade-view"
  }, renderYears());
};
DecadeView.propTypes = __assign$8({}, tileGroupProps);
var DecadeView$1 = DecadeView;

var __assign$7 = undefined && undefined.__assign || function () {
  __assign$7 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$7.apply(this, arguments);
};
var __rest$5 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className$3 = 'react-calendar__year-view__months__month';
function Month(_a) {
  var _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    _c = _a.formatMonth,
    formatMonth$1 = _c === void 0 ? formatMonth : _c,
    _d = _a.formatMonthYear,
    formatMonthYear$1 = _d === void 0 ? formatMonthYear : _d,
    otherProps = __rest$5(_a, ["classes", "formatMonth", "formatMonthYear"]);
  var date = otherProps.date,
    locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, __assign$7({}, otherProps, {
    classes: __spreadArray(__spreadArray([], classes, true), [className$3], false),
    formatAbbr: formatMonthYear$1,
    maxDateTransform: getMonthEnd,
    minDateTransform: getMonthStart,
    view: "year"
  }), formatMonth$1(locale, date));
}

var __assign$6 = undefined && undefined.__assign || function () {
  __assign$6 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$6.apply(this, arguments);
};
var __rest$4 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Months(props) {
  var activeStartDate = props.activeStartDate,
    hover = props.hover,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$4(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return /*#__PURE__*/React.createElement(TileGroup, {
    className: "react-calendar__year-view__months",
    dateTransform: function (monthIndex) {
      var date = new Date();
      date.setFullYear(year, monthIndex, 1);
      return getMonthStart(date);
    },
    dateType: "month",
    end: end,
    hover: hover,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$4(_a, ["date"]);
      return /*#__PURE__*/React.createElement(Month, __assign$6({
        key: date.getTime()
      }, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        date: date
      }));
    },
    start: start,
    value: value,
    valueType: valueType
  });
}

var __assign$5 = undefined && undefined.__assign || function () {
  __assign$5 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$5.apply(this, arguments);
};
var YearView = function YearView(props) {
  function renderMonths() {
    return /*#__PURE__*/React.createElement(Months, __assign$5({}, props));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "react-calendar__year-view"
  }, renderMonths());
};
YearView.propTypes = __assign$5({}, tileGroupProps);
var YearView$1 = YearView;

var __assign$4 = undefined && undefined.__assign || function () {
  __assign$4 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$4.apply(this, arguments);
};
var __rest$3 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var className$2 = 'react-calendar__month-view__days__day';
function Day(_a) {
  var calendarTypeOrDeprecatedCalendarType = _a.calendarType,
    _b = _a.classes,
    classes = _b === void 0 ? [] : _b,
    currentMonthIndex = _a.currentMonthIndex,
    _c = _a.formatDay,
    formatDay$1 = _c === void 0 ? formatDay : _c,
    _d = _a.formatLongDate,
    formatLongDate$1 = _d === void 0 ? formatLongDate : _d,
    otherProps = __rest$3(_a, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var date = otherProps.date,
    locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className$2) {
    classesProps.push(className$2);
  }
  if (isWeekend(date, calendarType)) {
    classesProps.push("".concat(className$2, "--weekend"));
  }
  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push("".concat(className$2, "--neighboringMonth"));
  }
  return /*#__PURE__*/React.createElement(Tile, __assign$4({}, otherProps, {
    classes: classesProps,
    formatAbbr: formatLongDate$1,
    maxDateTransform: getDayEnd,
    minDateTransform: getDayStart,
    view: "month"
  }), formatDay$1(locale, date));
}

var __assign$3 = undefined && undefined.__assign || function () {
  __assign$3 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$3.apply(this, arguments);
};
var __rest$2 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Days(props) {
  var activeStartDate = props.activeStartDate,
    calendarTypeOrDeprecatedCalendarType = props.calendarType,
    hover = props.hover,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
    showNeighboringMonth = props.showNeighboringMonth,
    value = props.value,
    valueType = props.valueType,
    otherProps = __rest$2(props, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var year = getYear(activeStartDate);
  var monthIndex = getMonth(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
   * Defines on which day of the month the grid shall start. If we simply show current
   * month, we obviously start on day one, but if showNeighboringMonth is set to
   * true, we need to find the beginning of the week the first day of the month is in.
   */
  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
   * Defines on which day of the month the grid shall end. If we simply show current
   * month, we need to stop on the last day of the month, but if showNeighboringMonth
   * is set to true, we need to find the end of the week the last day of the month is in.
   */
  var end = function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }
    var daysInMonth = getDaysInMonth(activeStartDate);
    if (showNeighboringMonth) {
      var activeEndDate = new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }
    return daysInMonth;
  }();
  return /*#__PURE__*/React.createElement(TileGroup, {
    className: "react-calendar__month-view__days",
    count: 7,
    dateTransform: function (day) {
      var date = new Date();
      date.setFullYear(year, monthIndex, day);
      return getDayStart(date);
    },
    dateType: "day",
    hover: hover,
    end: end,
    renderTile: function (_a) {
      var date = _a.date,
        otherTileProps = __rest$2(_a, ["date"]);
      return /*#__PURE__*/React.createElement(Day, __assign$3({
        key: date.getTime()
      }, otherProps, otherTileProps, {
        activeStartDate: activeStartDate,
        currentMonthIndex: monthIndex,
        date: date
      }));
    },
    offset: offset,
    start: start,
    value: value,
    valueType: valueType
  });
}

var className$1 = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className$1, "__weekday");
function Weekdays(props) {
  var calendarTypeOrDeprecatedCalendarType = props.calendarType,
    _a = props.formatShortWeekday,
    formatShortWeekday$1 = _a === void 0 ? formatShortWeekday : _a,
    _b = props.formatWeekday,
    formatWeekday$1 = _b === void 0 ? formatWeekday : _b,
    locale = props.locale,
    onMouseLeave = props.onMouseLeave;
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var anyDate = new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday$1(locale, weekdayDate);
    weekdays.push( /*#__PURE__*/React.createElement("div", {
      key: weekday,
      className: clsx(weekdayClassName, isCurrentDayOfWeek(weekdayDate) && "".concat(weekdayClassName, "--current"), isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend"))
    }, /*#__PURE__*/React.createElement("abbr", {
      "aria-label": abbr,
      title: abbr
    }, formatShortWeekday$1(locale, weekdayDate).replace('.', ''))));
  }
  return /*#__PURE__*/React.createElement(Flex, {
    className: className$1,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave
  }, weekdays);
}

var __assign$2 = undefined && undefined.__assign || function () {
  __assign$2 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var className = 'react-calendar__tile';
function WeekNumber(props) {
  var onClickWeekNumber = props.onClickWeekNumber,
    weekNumber = props.weekNumber;
  var children = /*#__PURE__*/React.createElement("span", null, weekNumber);
  if (onClickWeekNumber) {
    var date_1 = props.date,
      onClickWeekNumber_1 = props.onClickWeekNumber,
      weekNumber_1 = props.weekNumber,
      otherProps = __rest$1(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return /*#__PURE__*/React.createElement("button", __assign$2({}, otherProps, {
      className: className,
      onClick: function (event) {
        return onClickWeekNumber_1(weekNumber_1, date_1, event);
      },
      type: "button"
    }), children);
  } else {
    props.date;
      props.onClickWeekNumber;
      props.weekNumber;
      var otherProps = __rest$1(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return /*#__PURE__*/React.createElement("div", __assign$2({}, otherProps, {
      className: className
    }), children);
  }
}

function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate,
    calendarTypeOrDeprecatedCalendarType = props.calendarType,
    onClickWeekNumber = props.onClickWeekNumber,
    onMouseLeave = props.onMouseLeave,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var numberOfWeeks = function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }
    var numberOfDays = getDaysInMonth(activeStartDate);
    var startWeekday = getDayOfWeek(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();
  var dates = function () {
    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var day = getDate(activeStartDate);
    var result = [];
    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
    }
    return result;
  }();
  var weekNumbers = dates.map(function (date) {
    return getWeekNumber(date, calendarType);
  });
  return /*#__PURE__*/React.createElement(Flex, {
    className: "react-calendar__month-view__weekNumbers",
    count: numberOfWeeks,
    direction: "column",
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0
    }
  }, weekNumbers.map(function (weekNumber, weekIndex) {
    var date = dates[weekIndex];
    if (!date) {
      throw new Error('date is not defined');
    }
    return /*#__PURE__*/React.createElement(WeekNumber, {
      key: weekNumber,
      date: date,
      onClickWeekNumber: onClickWeekNumber,
      weekNumber: weekNumber
    });
  }));
}

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function getCalendarTypeFromLocale(locale) {
  if (locale) {
    for (var _i = 0, _a = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a.length; _i++) {
      var _b = _a[_i],
        calendarType = _b[0],
        locales = _b[1];
      if (locales.includes(locale)) {
        return calendarType;
      }
    }
  }
  return CALENDAR_TYPES.ISO_8601;
}
var MonthView = function MonthView(props) {
  var activeStartDate = props.activeStartDate,
    locale = props.locale,
    onMouseLeave = props.onMouseLeave,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var _a = props.calendarType,
    calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a,
    formatShortWeekday = props.formatShortWeekday,
    formatWeekday = props.formatWeekday,
    onClickWeekNumber = props.onClickWeekNumber,
    showWeekNumbers = props.showWeekNumbers,
    childProps = __rest(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function renderWeekdays() {
    return /*#__PURE__*/React.createElement(Weekdays, {
      calendarType: calendarType,
      formatShortWeekday: formatShortWeekday,
      formatWeekday: formatWeekday,
      locale: locale,
      onMouseLeave: onMouseLeave
    });
  }
  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }
    return /*#__PURE__*/React.createElement(WeekNumbers, {
      activeStartDate: activeStartDate,
      calendarType: calendarType,
      onClickWeekNumber: onClickWeekNumber,
      onMouseLeave: onMouseLeave,
      showFixedNumberOfWeeks: showFixedNumberOfWeeks
    });
  }
  function renderDays() {
    return /*#__PURE__*/React.createElement(Days, __assign$1({
      calendarType: calendarType
    }, childProps));
  }
  var className = 'react-calendar__month-view';
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : '')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, renderWeekNumbers(), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1,
      width: '100%'
    }
  }, renderWeekdays(), renderDays())));
};
MonthView.propTypes = __assign$1(__assign$1({}, tileGroupProps), {
  calendarType: isCalendarType,
  formatDay: PropTypes.func,
  formatLongDate: PropTypes.func,
  formatShortWeekday: PropTypes.func,
  formatWeekday: PropTypes.func,
  onClickWeekNumber: PropTypes.func,
  onMouseLeave: PropTypes.func,
  showFixedNumberOfWeeks: PropTypes.bool,
  showNeighboringMonth: PropTypes.bool,
  showWeekNumbers: PropTypes.bool
});
var MonthView$1 = MonthView;

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = ['decade', 'year', 'month', 'day'];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */
function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */
function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */
function getView(view, minDetail, maxDetail) {
  if (!view) {
    return maxDetail;
  }
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }
  return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */
function getValueType(view) {
  var index = allViews.indexOf(view);
  return allValueTypes[index];
}
function getValue(value, index) {
  var rawValue = Array.isArray(value) ? value[index] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate(rawValue);
  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue(_a, index) {
  var value = _a.value,
    minDate = _a.minDate,
    maxDate = _a.maxDate,
    maxDetail = _a.maxDetail;
  var valuePiece = getValue(value, index);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType(maxDetail);
  var detailValueFrom = function () {
    switch (index) {
      case 0:
        return getBegin(valueType, valuePiece);
      case 1:
        return getEnd(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index));
    }
  }();
  return between(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function (args) {
  return getDetailValue(args, 0);
};
var getDetailValueTo = function (args) {
  return getDetailValue(args, 1);
};
var getDetailValueArray = function (args) {
  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
    return fn(args);
  });
};
function getActiveStartDate(_a) {
  var maxDate = _a.maxDate,
    maxDetail = _a.maxDetail,
    minDate = _a.minDate,
    minDetail = _a.minDetail,
    value = _a.value,
    view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value: value,
    minDate: minDate,
    maxDate: maxDate,
    maxDetail: maxDetail
  }) || new Date();
  return getBegin(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
  var activeStartDate = _a.activeStartDate,
    defaultActiveStartDate = _a.defaultActiveStartDate,
    defaultValue = _a.defaultValue,
    defaultView = _a.defaultView,
    maxDate = _a.maxDate,
    maxDetail = _a.maxDetail,
    minDate = _a.minDate,
    minDetail = _a.minDetail,
    value = _a.value,
    view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;
  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }
  return getActiveStartDate({
    maxDate: maxDate,
    maxDetail: maxDetail,
    minDate: minDate,
    minDetail: minDetail,
    value: value || defaultValue,
    view: view || defaultView
  });
}
function getIsSingleValue(value) {
  return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
  return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = /*#__PURE__*/React.forwardRef(function Calendar(props, ref) {
  var activeStartDateProps = props.activeStartDate,
    allowPartialRange = props.allowPartialRange,
    calendarType = props.calendarType,
    className = props.className,
    defaultActiveStartDate = props.defaultActiveStartDate,
    defaultValue = props.defaultValue,
    defaultView = props.defaultView,
    formatDay = props.formatDay,
    formatLongDate = props.formatLongDate,
    formatMonth = props.formatMonth,
    formatMonthYear = props.formatMonthYear,
    formatShortWeekday = props.formatShortWeekday,
    formatWeekday = props.formatWeekday,
    formatYear = props.formatYear,
    _a = props.goToRangeStartOnSelect,
    goToRangeStartOnSelect = _a === void 0 ? true : _a,
    inputRef = props.inputRef,
    locale = props.locale,
    _b = props.maxDate,
    maxDate = _b === void 0 ? defaultMaxDate : _b,
    _c = props.maxDetail,
    maxDetail = _c === void 0 ? 'month' : _c,
    _d = props.minDate,
    minDate = _d === void 0 ? defaultMinDate : _d,
    _e = props.minDetail,
    minDetail = _e === void 0 ? 'century' : _e,
    navigationAriaLabel = props.navigationAriaLabel,
    navigationAriaLive = props.navigationAriaLive,
    navigationLabel = props.navigationLabel,
    next2AriaLabel = props.next2AriaLabel,
    next2Label = props.next2Label,
    nextAriaLabel = props.nextAriaLabel,
    nextLabel = props.nextLabel,
    onActiveStartDateChange = props.onActiveStartDateChange,
    onChangeProps = props.onChange,
    onClickDay = props.onClickDay,
    onClickDecade = props.onClickDecade,
    onClickMonth = props.onClickMonth,
    onClickWeekNumber = props.onClickWeekNumber,
    onClickYear = props.onClickYear,
    onDrillDown = props.onDrillDown,
    onDrillUp = props.onDrillUp,
    onViewChange = props.onViewChange,
    prev2AriaLabel = props.prev2AriaLabel,
    prev2Label = props.prev2Label,
    prevAriaLabel = props.prevAriaLabel,
    prevLabel = props.prevLabel,
    _f = props.returnValue,
    returnValue = _f === void 0 ? 'start' : _f,
    selectRange = props.selectRange,
    showDoubleView = props.showDoubleView,
    showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
    _g = props.showNavigation,
    showNavigation = _g === void 0 ? true : _g,
    _h = props.showNeighboringMonth,
    showNeighboringMonth = _h === void 0 ? true : _h,
    showWeekNumbers = props.showWeekNumbers,
    tileClassName = props.tileClassName,
    tileContent = props.tileContent,
    tileDisabled = props.tileDisabled,
    valueProps = props.value,
    viewProps = props.view;
  var _j = React.useState(defaultActiveStartDate),
    activeStartDateState = _j[0],
    setActiveStartDateState = _j[1];
  var _k = React.useState(null),
    hoverState = _k[0],
    setHoverState = _k[1];
  var _l = React.useState(Array.isArray(defaultValue) ? defaultValue.map(function (el) {
      return el !== null ? toDate(el) : null;
    }) : defaultValue !== null && defaultValue !== undefined ? toDate(defaultValue) : null),
    valueState = _l[0],
    setValueState = _l[1];
  var _m = React.useState(defaultView),
    viewState = _m[0],
    setViewState = _m[1];
  var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
    activeStartDate: activeStartDateProps,
    defaultActiveStartDate: defaultActiveStartDate,
    defaultValue: defaultValue,
    defaultView: defaultView,
    maxDate: maxDate,
    maxDetail: maxDetail,
    minDate: minDate,
    minDetail: minDetail,
    value: valueProps,
    view: viewProps
  });
  var value = function () {
    var rawValue = function () {
      // In the middle of range selection, use value from state
      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }
      return valueProps !== undefined ? valueProps : valueState;
    }();
    if (!rawValue) {
      return null;
    }
    return Array.isArray(rawValue) ? rawValue.map(function (el) {
      return el !== null ? toDate(el) : null;
    }) : rawValue !== null ? toDate(rawValue) : null;
  }();
  var valueType = getValueType(maxDetail);
  var view = getView(viewProps || viewState, minDetail, maxDetail);
  var views = getLimitedViews(minDetail, maxDetail);
  var hover = selectRange ? hoverState : null;
  var drillDownAvailable = views.indexOf(view) < views.length - 1;
  var drillUpAvailable = views.indexOf(view) > 0;
  var getProcessedValue = React.useCallback(function (value) {
    var processFunction = function () {
      switch (returnValue) {
        case 'start':
          return getDetailValueFrom;
        case 'end':
          return getDetailValueTo;
        case 'range':
          return getDetailValueArray;
        default:
          throw new Error('Invalid returnValue.');
      }
    }();
    return processFunction({
      maxDate: maxDate,
      maxDetail: maxDetail,
      minDate: minDate,
      value: value
    });
  }, [maxDate, maxDetail, minDate, returnValue]);
  var setActiveStartDate = React.useCallback(function (nextActiveStartDate, action) {
    setActiveStartDateState(nextActiveStartDate);
    var args = {
      action: action,
      activeStartDate: nextActiveStartDate,
      value: value,
      view: view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
  }, [activeStartDate, onActiveStartDateChange, value, view]);
  var onClickTile = React.useCallback(function (value, event) {
    var callback = function () {
      switch (view) {
        case 'century':
          return onClickDecade;
        case 'decade':
          return onClickYear;
        case 'year':
          return onClickMonth;
        case 'month':
          return onClickDay;
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    if (callback) callback(value, event);
  }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
  var drillDown = React.useCallback(function (nextActiveStartDate, event) {
    if (!drillDownAvailable) {
      return;
    }
    onClickTile(nextActiveStartDate, event);
    var nextView = views[views.indexOf(view) + 1];
    if (!nextView) {
      throw new Error('Attempted to drill down from the lowest view.');
    }
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: 'drillDown',
      activeStartDate: nextActiveStartDate,
      value: value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillDown) {
      onDrillDown(args);
    }
  }, [activeStartDate, drillDownAvailable, onActiveStartDateChange, onClickTile, onDrillDown, onViewChange, value, view, views]);
  var drillUp = React.useCallback(function () {
    if (!drillUpAvailable) {
      return;
    }
    var nextView = views[views.indexOf(view) - 1];
    if (!nextView) {
      throw new Error('Attempted to drill up from the highest view.');
    }
    var nextActiveStartDate = getBegin(nextView, activeStartDate);
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: 'drillUp',
      activeStartDate: nextActiveStartDate,
      value: value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillUp) {
      onDrillUp(args);
    }
  }, [activeStartDate, drillUpAvailable, onActiveStartDateChange, onDrillUp, onViewChange, value, view, views]);
  var onChange = React.useCallback(function (rawNextValue, event) {
    var previousValue = value;
    onClickTile(rawNextValue, event);
    var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
    var nextValue;
    if (selectRange) {
      // Range selection turned on
      if (isFirstValueInRange) {
        // Value has 0 or 2 elements - either way we're starting a new array
        // First value
        nextValue = getBegin(valueType, rawNextValue);
      } else {
        if (!previousValue) {
          throw new Error('previousValue is required');
        }
        if (Array.isArray(previousValue)) {
          throw new Error('previousValue must not be an array');
        }
        // Second value
        nextValue = getValueRange(valueType, previousValue, rawNextValue);
      }
    } else {
      // Range selection turned off
      nextValue = getProcessedValue(rawNextValue);
    }
    var nextActiveStartDate =
    // Range selection turned off
    !selectRange ||
    // Range selection turned on, first value
    isFirstValueInRange ||
    // Range selection turned on, second value, goToRangeStartOnSelect toggled on
    goToRangeStartOnSelect ? getActiveStartDate({
      maxDate: maxDate,
      maxDetail: maxDetail,
      minDate: minDate,
      minDetail: minDetail,
      value: nextValue,
      view: view
    }) : null;
    event.persist();
    setActiveStartDateState(nextActiveStartDate);
    setValueState(nextValue);
    var args = {
      action: 'onChange',
      activeStartDate: nextActiveStartDate,
      value: nextValue,
      view: view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onChangeProps) {
      if (selectRange) {
        var isSingleValue = getIsSingleValue(nextValue);
        if (!isSingleValue) {
          onChangeProps(nextValue || null, event);
        } else if (allowPartialRange) {
          if (Array.isArray(nextValue)) {
            throw new Error('value must not be an array');
          }
          onChangeProps([nextValue || null, null], event);
        }
      } else {
        onChangeProps(nextValue || null, event);
      }
    }
  }, [activeStartDate, allowPartialRange, getProcessedValue, goToRangeStartOnSelect, maxDate, maxDetail, minDate, minDetail, onActiveStartDateChange, onChangeProps, onClickTile, selectRange, value, valueType, view]);
  function onMouseOver(nextHover) {
    setHoverState(nextHover);
  }
  function onMouseLeave() {
    setHoverState(null);
  }
  React.useImperativeHandle(ref, function () {
    return {
      activeStartDate: activeStartDate,
      drillDown: drillDown,
      drillUp: drillUp,
      onChange: onChange,
      setActiveStartDate: setActiveStartDate,
      value: value,
      view: view
    };
  }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
  function renderContent(next) {
    var currentActiveStartDate = next ? getBeginNext(view, activeStartDate) : getBegin(view, activeStartDate);
    var onClick = drillDownAvailable ? drillDown : onChange;
    var commonProps = {
      activeStartDate: currentActiveStartDate,
      hover: hover,
      locale: locale,
      maxDate: maxDate,
      minDate: minDate,
      onClick: onClick,
      onMouseOver: selectRange ? onMouseOver : undefined,
      tileClassName: tileClassName,
      tileContent: tileContent,
      tileDisabled: tileDisabled,
      value: value,
      valueType: valueType
    };
    switch (view) {
      case 'century':
        {
          return /*#__PURE__*/React.createElement(CenturyView$1, __assign({
            formatYear: formatYear
          }, commonProps));
        }
      case 'decade':
        {
          return /*#__PURE__*/React.createElement(DecadeView$1, __assign({
            formatYear: formatYear
          }, commonProps));
        }
      case 'year':
        {
          return /*#__PURE__*/React.createElement(YearView$1, __assign({
            formatMonth: formatMonth,
            formatMonthYear: formatMonthYear
          }, commonProps));
        }
      case 'month':
        {
          return /*#__PURE__*/React.createElement(MonthView$1, __assign({
            calendarType: calendarType,
            formatDay: formatDay,
            formatLongDate: formatLongDate,
            formatShortWeekday: formatShortWeekday,
            formatWeekday: formatWeekday,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: selectRange ? onMouseLeave : undefined,
            showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined' ? showFixedNumberOfWeeks : showDoubleView,
            showNeighboringMonth: showNeighboringMonth,
            showWeekNumbers: showWeekNumbers
          }, commonProps));
        }
      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }
  function renderNavigation() {
    if (!showNavigation) {
      return null;
    }
    return /*#__PURE__*/React.createElement(Navigation, {
      activeStartDate: activeStartDate,
      drillUp: drillUp,
      formatMonthYear: formatMonthYear,
      formatYear: formatYear,
      locale: locale,
      maxDate: maxDate,
      minDate: minDate,
      navigationAriaLabel: navigationAriaLabel,
      navigationAriaLive: navigationAriaLive,
      navigationLabel: navigationLabel,
      next2AriaLabel: next2AriaLabel,
      next2Label: next2Label,
      nextAriaLabel: nextAriaLabel,
      nextLabel: nextLabel,
      prev2AriaLabel: prev2AriaLabel,
      prev2Label: prev2Label,
      prevAriaLabel: prevAriaLabel,
      prevLabel: prevLabel,
      setActiveStartDate: setActiveStartDate,
      showDoubleView: showDoubleView,
      view: view,
      views: views
    });
  }
  var valueArray = Array.isArray(value) ? value : [value];
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
    ref: inputRef
  }, renderNavigation(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "__viewContainer"),
    onBlur: selectRange ? onMouseLeave : undefined,
    onMouseLeave: selectRange ? onMouseLeave : undefined
  }, renderContent(), showDoubleView ? renderContent(true) : null));
});
var isActiveStartDate = PropTypes.instanceOf(Date);
var isValue = PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]);
var isValueOrValueArray = PropTypes.oneOfType([isValue, rangeOf(isValue)]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  allowPartialRange: PropTypes.bool,
  calendarType: isCalendarType,
  className: isClassName,
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isValueOrValueArray,
  defaultView: isView,
  formatDay: PropTypes.func,
  formatLongDate: PropTypes.func,
  formatMonth: PropTypes.func,
  formatMonthYear: PropTypes.func,
  formatShortWeekday: PropTypes.func,
  formatWeekday: PropTypes.func,
  formatYear: PropTypes.func,
  goToRangeStartOnSelect: PropTypes.bool,
  inputRef: isRef,
  locale: PropTypes.string,
  maxDate: isMaxDate,
  maxDetail: PropTypes.oneOf(allViews),
  minDate: isMinDate,
  minDetail: PropTypes.oneOf(allViews),
  navigationAriaLabel: PropTypes.string,
  navigationAriaLive: PropTypes.oneOf(['off', 'polite', 'assertive']),
  navigationLabel: PropTypes.func,
  next2AriaLabel: PropTypes.string,
  next2Label: PropTypes.node,
  nextAriaLabel: PropTypes.string,
  nextLabel: PropTypes.node,
  onActiveStartDateChange: PropTypes.func,
  onChange: PropTypes.func,
  onClickDay: PropTypes.func,
  onClickDecade: PropTypes.func,
  onClickMonth: PropTypes.func,
  onClickWeekNumber: PropTypes.func,
  onClickYear: PropTypes.func,
  onDrillDown: PropTypes.func,
  onDrillUp: PropTypes.func,
  onViewChange: PropTypes.func,
  prev2AriaLabel: PropTypes.string,
  prev2Label: PropTypes.node,
  prevAriaLabel: PropTypes.string,
  prevLabel: PropTypes.node,
  returnValue: PropTypes.oneOf(['start', 'end', 'range']),
  selectRange: PropTypes.bool,
  showDoubleView: PropTypes.bool,
  showFixedNumberOfWeeks: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showNeighboringMonth: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  tileClassName: PropTypes.oneOfType([PropTypes.func, isClassName]),
  tileContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  tileDisabled: PropTypes.func,
  value: isValueOrValueArray,
  view: isView
};
var Calendar$1 = Calendar;

var img$3 = "data:image/png;base64,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";

function DateFilter(props) {
  var _onChange = props.onChange,
    value = props.value;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    dateShow = _useState2[0],
    setDateshow = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "date-input",
    onClick: function onClick() {
      setDateshow(!dateShow);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    defaultValue: value && moment(value).format("YYYY-MM-DD"),
    placeholder: "yyyy-mm-dd",
    className: "filter-input-date"
  }), /*#__PURE__*/React.createElement("img", {
    src: img$3,
    className: "calendar-icon",
    alt: "calendar"
  })), dateShow && /*#__PURE__*/React.createElement(Calendar$1, {
    value: value,
    onChange: function onChange(event) {
      _onChange(event);
      setDateshow(false);
    },
    maxDate: new Date()
  }));
}

function generateUID() {
  // I generate the UID from two parts here 
  // to ensure the random number provide enough bits.
  var firstPart = Math.random() * 46656 | 0;
  var secondPart = Math.random() * 46656 | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

var img$2 = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,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";

var img = "data:image/png;base64,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";

function TablecolumnFilter(props) {
  var datatype = props.datatype,
    applyFilter = props.applyFilter,
    clearFilter = props.clearFilter,
    column = props.column,
    _props$matchModeSelec = props.matchModeSelected,
    matchModeSelected = _props$matchModeSelec === void 0 ? [] : _props$matchModeSelec,
    setMatchModeSelected = props.setMatchModeSelected;
  var wrapperRef = React.useRef();
  var operatorRef = React.useRef();
  var matchModeRef = React.useRef();
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showOperator = _useState4[0],
    setShowoperator = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showMatchMode = _useState6[0],
    setShowMatchMode = _useState6[1];
  var _useState7 = React.useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataTypeMode = _useState8[0],
    setDataTypeMode = _useState8[1];
  var _useState9 = React.useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    page = _useState10[0],
    setPage = _useState10[1];
  var _useState11 = React.useState({
      label: "Match All",
      value: "AND"
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    operatorSelected = _useState12[0],
    setOperatorselected = _useState12[1];

  // Default matchmodes which will be used while adding the rule or while clearing the filter
  // Basically this and useEffect on parent or kinda same
  var matchModes = React.useMemo(function () {
    switch (datatype) {
      case 'date':
        return {
          id: generateUID(),
          matchMode: "dateIs",
          query: null,
          column: column
        };
      case 'number':
        return {
          id: generateUID(),
          matchMode: "equals",
          query: '',
          column: column
        };
      case 'boolean':
        return {
          id: generateUID(),
          matchMode: "equals",
          query: 'yes',
          column: column
        };
      default:
        return {
          id: generateUID(),
          matchMode: "contains",
          query: '',
          column: column
        };
    }
  }, [datatype, column]);

  // Need to find different solution for col filter highlight while applied
  // const { column_filters } = useSelector(state => state.query);
  // const isFiltered = column_filters[column]?.constraints?.[0]?.value || false;

  // To hide col filter when clicked outside
  var useOutsideAlerter = function useOutsideAlerter(ref) {
    React.useEffect(function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // To remove the active class for filter icon
          // let elementList = document.getElementsByClassName("filter-icon");
          // Array.from(elementList)?.forEach(e => {
          //     // if (!isFiltered) {
          //     //     e.classList.remove("active");
          //     // }
          // });
          setShow(false);
          setShowMatchMode(false);
          setShowoperator(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return function () {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]); //isFiltered
  };

  useOutsideAlerter(wrapperRef);

  // To show col filter
  var showColumnFilter = function showColumnFilter(event) {
    setShow(!show);
  };

  // To set options in dropdown 
  React.useEffect(function () {
    if (datatype === "text") {
      setDataTypeMode(STR_MATCH_MODE);
    } else if (datatype === "number") {
      setDataTypeMode(NUM_MATCH_MODE);
    } else if (datatype === "date") {
      setDataTypeMode(DATE_MATCH_MODE);
    } else if (datatype === "boolean") {
      setDataTypeMode(BOOLEAN_MATCH_MODE);
    }
  }, [datatype, column]);

  // To type the input in input box
  var InputString = function InputString(event, id, dataType) {
    var _matchModeSelected = structuredClone(matchModeSelected);
    var item = _matchModeSelected.find(function (a) {
      return a.id === id;
    });
    item.query = dataType === "text" ? event.target.value : dataType === "number" ? event.target.value.replace(new RegExp(/[^\d]/, 'ig'), "") : event;
    setMatchModeSelected(_matchModeSelected);
  };
  var Inputbox = function Inputbox(value, id) {
    if (datatype === "number") {
      return /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: value,
        onChange: function onChange(event) {
          return InputString(event, id, "number");
        },
        className: "filter-input-text",
        onKeyDown: handleKeyDown
      });
    } else if (datatype === "date") {
      return /*#__PURE__*/React.createElement(DateFilter, {
        onChange: function onChange(event) {
          InputString(event, id, "date");
        },
        value: value
      });
    } else {
      return /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: value,
        onChange: function onChange(event) {
          InputString(event, id, "text");
        },
        className: "filter-input-text",
        onKeyDown: handleKeyDown
      });
    }
  };

  // To select option from match all/any dropdown 
  var selectOperatorMode = function selectOperatorMode(event, option) {
    setOperatorselected(option);
    setShowoperator(false);
  };

  // To select option from 2nd dropdown 
  var selectMatchMode = function selectMatchMode(option, id) {
    var _matchModeSelected = structuredClone(matchModeSelected);
    var item = _matchModeSelected.find(function (a) {
      return a.id === id;
    });
    item.matchMode = option.value;
    setMatchModeSelected(_matchModeSelected);
    setShowMatchMode(false);
  };

  // To show and hide match all and any dropdown
  var showOperatorDrop = function showOperatorDrop() {
    setShowoperator(!showOperator);
  };

  // To show and hide 2nd dropdown
  var showMatchDrop = function showMatchDrop() {
    setShowoperator(false);
    setShowMatchMode(!showMatchMode);
  };

  // While applying col filter
  var columnFilter = function columnFilter() {
    var _matchModeSelected$fi;
    setShow(false);
    setShowMatchMode(false);
    setShowoperator(false);
    return {
      "operator": operatorSelected.value,
      "constraints": matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi = matchModeSelected.filter(function (a) {
        return a.column === column;
      })) === null || _matchModeSelected$fi === void 0 ? void 0 : _matchModeSelected$fi.map(function (item) {
        return {
          "value": item.query,
          "matchMode": item.matchMode
        };
      })
    };
  };

  // While clearing col filter
  var emptyFilter = function emptyFilter() {
    var _matchModeSelected$fi2;
    setShow(false);
    setShowMatchMode(false);
    setShowoperator(false);
    var _finalMatchmode = [];
    var originalMatchmodeslected = structuredClone(matchModeSelected);
    var _matchModeSelected = matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi2 = matchModeSelected.filter(function (a) {
      return a.column === column;
    })) === null || _matchModeSelected$fi2 === void 0 || (_matchModeSelected$fi2 = _matchModeSelected$fi2.map(function (a) {
      return {
        id: generateUID(),
        matchMode: datatype === "text" ? "contains" : datatype === "date" ? "dateIs" : "equals",
        query: datatype === "text" ? "" : datatype === "date" ? null : datatype === "number" ? "" : "yes",
        column: a.column
      };
    })) === null || _matchModeSelected$fi2 === void 0 ? void 0 : _matchModeSelected$fi2[0];
    var clonedMatchmode = structuredClone([_matchModeSelected]);
    originalMatchmodeslected === null || originalMatchmodeslected === void 0 ? void 0 : originalMatchmodeslected.forEach(function (a) {
      var index = clonedMatchmode === null || clonedMatchmode === void 0 ? void 0 : clonedMatchmode.findIndex(function (b) {
        return a.column === b.column;
      });
      if (index === -1) {
        _finalMatchmode === null || _finalMatchmode === void 0 ? void 0 : _finalMatchmode.push(a);
      }
    });
    var _final = [].concat(_finalMatchmode, _toConsumableArray(clonedMatchmode));
    setMatchModeSelected(_final);
    return {
      "operator": 'AND',
      "constraints": [matchModes]
    };
  };

  // Apply col filter by clicking enter
  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Enter') {
      applyFilter(column, columnFilter());
    }
  };

  // 2nd dropdown and remove rule
  var multiSelectionSection = React.useMemo(function () {
    var _matchModeSelected$fi3;
    return /*#__PURE__*/React.createElement("div", {
      className: "Multi-section"
    }, matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi3 = matchModeSelected.filter(function (a) {
      return a.column === column;
    })) === null || _matchModeSelected$fi3 === void 0 ? void 0 : _matchModeSelected$fi3.map(function (_ref) {
      var _dataTypeMode$find, _BOOLEAN_MATCH_MODE$f, _matchModeSelected$fi6;
      var query = _ref.query,
        matchMode = _ref.matchMode,
        id = _ref.id;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: id
      }, /*#__PURE__*/React.createElement("div", {
        className: "section-alignment"
      }, /*#__PURE__*/React.createElement("div", {
        className: "Matchmode-Section"
      }, datatype !== 'boolean' && /*#__PURE__*/React.createElement("div", {
        className: "custom-dropdown"
      }, /*#__PURE__*/React.createElement("div", {
        ref: matchModeRef,
        onClick: function onClick() {
          return showMatchDrop();
        },
        className: "dropdown-input"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dropdown-selected-value"
      }, (_dataTypeMode$find = dataTypeMode.find(function (a) {
        return a.value === matchMode;
      })) === null || _dataTypeMode$find === void 0 ? void 0 : _dataTypeMode$find.label), /*#__PURE__*/React.createElement("div", {
        className: "dropdown-tools"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dropdown-tool"
      }, /*#__PURE__*/React.createElement("img", {
        src: img$2,
        alt: "dropdown",
        className: "dropdown-Icon"
      })))), showMatchMode && /*#__PURE__*/React.createElement("div", {
        className: "dropdown-menu"
      }, dataTypeMode.map(function (option) {
        return /*#__PURE__*/React.createElement("div", {
          className: matchMode === option.value ? " option-label selected" : "option-label",
          key: option.value,
          onClick: function onClick() {
            return selectMatchMode(option, id);
          }
        }, /*#__PURE__*/React.createElement("span", null, option.label));
      })))), datatype !== 'boolean' ? Inputbox(query, id) : /*#__PURE__*/React.createElement("div", {
        className: "custom-dropdown"
      }, /*#__PURE__*/React.createElement("div", {
        ref: matchModeRef,
        onClick: function onClick() {
          return showMatchDrop();
        },
        className: "dropdown-input"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dropdown-selected-value"
      }, (_BOOLEAN_MATCH_MODE$f = BOOLEAN_MATCH_MODE.find(function (a) {
        var _matchModeSelected$fi4;
        return a.value === ((_matchModeSelected$fi4 = matchModeSelected.find(function (a) {
          return a.id === id;
        })) === null || _matchModeSelected$fi4 === void 0 ? void 0 : _matchModeSelected$fi4.query);
      })) === null || _BOOLEAN_MATCH_MODE$f === void 0 ? void 0 : _BOOLEAN_MATCH_MODE$f.label), /*#__PURE__*/React.createElement("div", {
        className: "dropdown-tools"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dropdown-tool"
      }, /*#__PURE__*/React.createElement("img", {
        src: img$2,
        alt: "dropdown",
        className: "dropdown-Icon"
      })))), showMatchMode && /*#__PURE__*/React.createElement("div", {
        className: "dropdown-menu"
      }, BOOLEAN_MATCH_MODE.map(function (option) {
        var _matchModeSelected$fi5;
        return /*#__PURE__*/React.createElement("div", {
          className: ((_matchModeSelected$fi5 = matchModeSelected.find(function (a) {
            return a.id === id;
          })) === null || _matchModeSelected$fi5 === void 0 ? void 0 : _matchModeSelected$fi5.query) === option.value ? " option-label selected" : "option-label",
          key: option.label,
          onClick: function onClick() {
            var _matchModeSelected = structuredClone(matchModeSelected);
            var item = _matchModeSelected.find(function (a) {
              return a.id === id;
            });
            item.query = option.value;
            setMatchModeSelected(_matchModeSelected);
            setShowMatchMode(false);
          }
        }, /*#__PURE__*/React.createElement("span", null, option.label));
      })))), (matchModeSelected === null || matchModeSelected === void 0 || (_matchModeSelected$fi6 = matchModeSelected.filter(function (a) {
        return (a === null || a === void 0 ? void 0 : a.column) === column;
      })) === null || _matchModeSelected$fi6 === void 0 ? void 0 : _matchModeSelected$fi6.length) > 1 && /*#__PURE__*/React.createElement("div", {
        className: "section-alignment"
      }, /*#__PURE__*/React.createElement("button", {
        className: "remove-rule",
        type: "button",
        onClick: function onClick() {
          var _matchModeSelected = structuredClone(matchModeSelected);
          var index = _matchModeSelected.findIndex(function (a) {
            return a.id === id;
          });
          _matchModeSelected.splice(index, 1);
          setMatchModeSelected(_matchModeSelected);
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "remove-icon"
      }, /*#__PURE__*/React.createElement("img", {
        src: img,
        alt: "remove",
        style: {
          height: "15px",
          width: "15px"
        }
      })), /*#__PURE__*/React.createElement("span", null, "Remove Rule"))));
    }));
  }, [matchModeSelected, showMatchMode, showOperator, dataTypeMode]);
  return /*#__PURE__*/React.createElement("div", {
    className: "column-filter-main",
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "filter-icon-section",
    id: "filter-icon",
    onClick: function onClick(event) {
      var elem = event.target.parentNode;
      var elemRect = elem.getBoundingClientRect();

      // temp - only for btx-search project
      var sidebar = document.getElementById('sidebar');
      setPage({
        pageX: elemRect.left - ((sidebar === null || sidebar === void 0 ? void 0 : sidebar.offsetWidth) || 0),
        pageY: elemRect.top
      });
      showColumnFilter();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img$1,
    alt: "col_Filter",
    className: "filter-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-dropdown",
    style: {
      position: 'fixed',
      display: show ? "block" : 'none',
      left: page === null || page === void 0 ? void 0 : page.pageX,
      top: 40,
      height: datatype !== "boolean" ? "250px" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "operator-dropdown-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "custom-dropdown"
  }, /*#__PURE__*/React.createElement("div", {
    ref: operatorRef,
    onClick: function onClick() {
      return showOperatorDrop();
    },
    className: "dropdown-input"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-selected-value"
  }, operatorSelected.label), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-tools"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-tool"
  }, /*#__PURE__*/React.createElement("img", {
    src: img$2,
    alt: "dropdown",
    className: "dropdown-Icon"
  })))), showOperator && /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu"
  }, OPERATOR.map(function (option) {
    return /*#__PURE__*/React.createElement("div", {
      className: operatorSelected.value === option.value ? " option-label selected" : "option-label",
      onClick: function onClick(event) {
        return selectOperatorMode(event, option);
      },
      key: option.value
    }, /*#__PURE__*/React.createElement("span", null, option.label));
  })))), multiSelectionSection, datatype !== 'boolean' && /*#__PURE__*/React.createElement("div", {
    className: "section-alignment"
  }, /*#__PURE__*/React.createElement("button", {
    className: "add-rule",
    onClick: function onClick() {
      setMatchModeSelected([].concat(_toConsumableArray(matchModeSelected), [_objectSpread2(_objectSpread2({}, matchModes), {}, {
        id: generateUID()
      })]));
    },
    type: "button"
  }, /*#__PURE__*/React.createElement("span", null, "+"), /*#__PURE__*/React.createElement("span", null, "Add Rule"))), /*#__PURE__*/React.createElement("div", {
    className: "column-footer-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "filter-footer-button",
    type: "button",
    onClick: function onClick() {
      return clearFilter(column, emptyFilter());
    }
  }, "Clear"), /*#__PURE__*/React.createElement("button", {
    className: "filter-footer-button primary",
    onClick: function onClick() {
      return applyFilter(column, columnFilter());
    }
  }, " Apply"))));
}

function MultiSorting(props) {
  var column = props.column,
    setSorting = props.setSorting,
    sorting = props.sorting; //column - to get the particular column while sorting

  var handleSort = function handleSort(column) {
    var _sorting$index;
    var order = 0;
    var index = sorting === null || sorting === void 0 ? void 0 : sorting.findIndex(function (a) {
      return a.sortBy === column;
    });
    var sortOrder = sorting === null || sorting === void 0 || (_sorting$index = sorting[index]) === null || _sorting$index === void 0 ? void 0 : _sorting$index.sortOrder;
    if (!sortOrder) {
      order = 1;
    } else if (sortOrder === 1) {
      order = -1;
    } else if (sortOrder === -1) {
      order = 0;
    }
    var _sorting = structuredClone(sorting);
    if (index === -1) {
      // new one
      _sorting.push({
        sortOrder: order,
        sortBy: column
      });
    } else {
      // Existing one
      _sorting[index] = {
        sortOrder: order,
        sortBy: column
      };
    }
    setSorting(_toConsumableArray(_sorting));
  };
  var sortIcon = React.useMemo(function () {
    var _sorting$find;
    var sortOrder = sorting === null || sorting === void 0 || (_sorting$find = sorting.find(function (a) {
      return a.sortBy === column;
    })) === null || _sorting$find === void 0 ? void 0 : _sorting$find.sortOrder;
    if (!sortOrder) {
      return /*#__PURE__*/React.createElement("img", {
        src: img$6,
        alt: "default_sort",
        style: {
          height: "20px"
        }
      });
    } else if (sortOrder === 1) {
      return /*#__PURE__*/React.createElement("img", {
        src: img$5,
        alt: "sort_asc",
        style: {
          height: "20px"
        }
      });
    } else if (sortOrder === -1) {
      return /*#__PURE__*/React.createElement("img", {
        src: img$4,
        alt: "sort_desc",
        style: {
          height: "20px"
        }
      });
    } else {
      return /*#__PURE__*/React.createElement("img", {
        src: img$6,
        alt: "default_sort",
        style: {
          height: "20px"
        }
      });
    }
  }, [sorting, column]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      verticalAlign: "middle",
      cursor: "pointer"
    },
    onClick: function onClick() {
      return handleSort(column);
    }
  }, sortIcon));
}

var ProgressLoader = function ProgressLoader(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-content-center flex-column loader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infinite_loader"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      marginTop: '20px'
    }
  }, message));
};
ProgressLoader.propTypes = {
  message: PropTypes.string
};

var ErrorDetail = function ErrorDetail(props) {
  var title = props.title,
    subTitle = props.subTitle;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-column justify-content-center mb-3 align-items-center"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "m-0 text-xl"
  }, title), subTitle && /*#__PURE__*/React.createElement("span", {
    className: "text-sm mt-2"
  }, subTitle));
};
ErrorDetail.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

function DTable(props) {
  var columns = props.columns,
    data = props.data,
    sorting = props.sorting,
    setSorting = props.setSorting,
    sortable = props.sortable,
    sortMode = props.sortMode,
    resizableColumns = props.resizableColumns,
    filterable = props.filterable,
    applyFilter = props.applyFilter,
    clearFilter = props.clearFilter,
    scrollable = props.scrollable,
    actions = props.actions,
    loading = props.loading,
    error = props.error,
    status = props.status,
    refetch = props.refetch,
    selectedMode = props.selectedMode,
    rowxpansion = props.rowxpansion,
    onColumnResizeEnd = props.onColumnResizeEnd,
    onCellClick = props.onCellClick,
    mainAllTab = props.mainAllTab,
    selectable = props.selectable,
    selectionMode = props.selectionMode,
    allRowSelection = props.allRowSelection,
    onRowSelection = props.onRowSelection,
    selectedRows = props.selectedRows,
    onAllRowSelection = props.onAllRowSelection,
    dataKey = props.dataKey,
    infinitescroll = props.infinitescroll,
    infiniteChange = props.infiniteChange,
    totalRecords = props.totalRecords,
    rowExpansionTemplate = props.rowExpansionTemplate,
    filters = props.filters;
  var tableFootRef = React.useRef();
  var _useState = React.useState(""),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setTemp = _useState2[1];
  var _useState3 = React.useState(columns),
    _useState4 = _slicedToArray(_useState3, 2),
    _columns = _useState4[0],
    setColumns = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    colResize = _useState6[0],
    setColResize = _useState6[1];
  var _useState7 = React.useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    rowExpand = _useState8[0],
    setRowExpand = _useState8[1];
  var _useState9 = React.useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showcustomLoader = _useState10[0],
    setShowCustomLoader = _useState10[1];

  // To maintain the matchmode during at first time for column filter
  var defaultmatchmode = function defaultmatchmode() {
    var _matchModeSelected = [];
    columns === null || columns === void 0 ? void 0 : columns.forEach(function (column) {
      var _filters$column$field;
      var defaultValue = (_filters$column$field = filters[column.field]) === null || _filters$column$field === void 0 ? void 0 : _filters$column$field.constraints;
      switch (column.filterType) {
        case 'date':
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref) {
              var matchMode = _ref.matchMode,
                value = _ref.value;
              _matchModeSelected.push({
                id: generateUID(),
                matchMode: matchMode || "dateIs",
                query: value || null,
                column: column.field
              });
            });
            break;
          }
        case 'number':
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref2) {
              var matchMode = _ref2.matchMode,
                value = _ref2.value;
              _matchModeSelected.push({
                id: generateUID(),
                matchMode: matchMode || "equals",
                query: value || "",
                column: column.field
              });
            });
            break;
          }
        case 'boolean':
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref3) {
              var matchMode = _ref3.matchMode;
              _matchModeSelected.push({
                id: generateUID(),
                matchMode: matchMode || "equals",
                query: "true",
                column: column.field
              });
            });
            break;
          }
        default:
          {
            defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.forEach(function (_ref4) {
              var matchMode = _ref4.matchMode,
                value = _ref4.value;
              _matchModeSelected.push({
                id: generateUID(),
                matchMode: matchMode || "contains",
                query: value || "",
                column: column.field
              });
            });
            break;
          }
      }
    });
    return _matchModeSelected;
  };
  var _useState11 = React.useState(defaultmatchmode()),
    _useState12 = _slicedToArray(_useState11, 2),
    matchModeSelected = _useState12[0],
    _setMatchModeSelected = _useState12[1];

  // To maintain columns during reorder orhide/show
  React.useEffect(function () {
    // To get the columns if they are hidden or re-ordered
    setColumns(columns);
    // To render the col filter for that particular column
    var _matchModeSelected = structuredClone(matchModeSelected);
    _setMatchModeSelected(_matchModeSelected);
  }, [columns]);

  // Added this useEffect to trigger cleanup of col filter while switching between on mode to other
  // Applicable only for historical . Selectedmode and mainalltab is sent as an props from the parent
  // Need to make this in an generic way for all applications if there is any mode changes then filter needs to be removed
  // Basically if no filter is applied it should have a default value
  React.useEffect(function () {
    var _matchModeSelected = [];
    columns === null || columns === void 0 ? void 0 : columns.forEach(function (column) {
      switch (column.filterType) {
        case 'date':
          {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: "dateIs",
              query: null,
              column: column.field
            });
            break;
          }
        case 'number':
          {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: "equals",
              query: "",
              column: column.field
            });
            break;
          }
        case 'boolean':
          {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: "equals",
              query: 'yes',
              column: column.field
            });
            break;
          }
        default:
          {
            _matchModeSelected.push({
              id: generateUID(),
              matchMode: "contains",
              query: '',
              column: column.field
            });
            break;
          }
      }
    });
    _setMatchModeSelected(_matchModeSelected);
  }, [selectedMode, mainAllTab]);
  var columnTempWidth = '';
  var tempField = '';
  React.useEffect(function () {
    var tables = document.getElementsByClassName('resizable-table');
    for (var i = 0; i < tables.length; i++) {
      resizableGrid(tables[i]);
    }
    function resizableGrid(table) {
      var row = table.getElementsByTagName('tr')[0],
        cols = row ? row.children : undefined;
      if (!cols) return;

      // table.style.overflow = 'hidden';

      table.offsetHeight;
      for (var i = 0; i < cols.length; i++) {
        var div = createDiv(45);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
        setListeners(div);
      }
      function setListeners(div) {
        var pageX, curCol, curColWidth, tableWidth;
        div.addEventListener('mousedown', function (e) {
          tableWidth = document.getElementById('datatable').offsetWidth;
          curCol = e.target.parentElement;
          curCol.nextElementSibling;
          pageX = e.pageX;
          var padding = paddingDiff(curCol);
          curColWidth = curCol.offsetWidth - padding;
          //  if (nxtCol)
          //nxtColWidth = nxtCol.offsetWidth - padding;
        });

        div.addEventListener('mouseover', function (e) {
          e.target.style.borderRight = '2px solid #0000ff';
        });
        div.addEventListener('mouseout', function (e) {
          e.target.style.borderRight = '';
        });
        document.addEventListener('mousemove', function (e) {
          if (curCol) {
            var diffX = e.pageX - pageX;

            // if (nxtCol)
            //nxtCol.style.width = (nxtColWidth - (diffX)) + 'px'

            tempField = curCol.innerText;
            columnTempWidth = curColWidth + diffX < 250 ? 250 : curColWidth + diffX;
            setTemp(columnTempWidth);
            curCol.style.width = columnTempWidth + 'px';
            curCol.style.minWidth = columnTempWidth + 'px';
            curCol.style.maxWidth = columnTempWidth + 'px';
            document.getElementById('datatable').style.width = tableWidth + diffX + "px";
          }
        });
        document.addEventListener('mouseup', function (e) {
          setColResize({
            field: tempField,
            width: columnTempWidth
          });
          curCol = undefined;
          pageX = undefined;
          curColWidth = undefined;
        });
      }
      function createDiv(height) {
        var div = document.createElement('div');
        div.className = 'custom-resizer';
        div.style.top = 0;
        div.style.right = 0;
        div.style.width = '5px';
        div.style.position = 'absolute';
        div.style.cursor = 'col-resize';
        div.style.userSelect = 'none';
        div.style.height = height + 'px';
        return div;
      }
      function paddingDiff(col) {
        if (getStyleVal(col, 'box-sizing') == 'border-box') {
          return 0;
        }
        var padLeft = getStyleVal(col, 'padding-left');
        var padRight = getStyleVal(col, 'padding-right');
        return parseInt(padLeft) + parseInt(padRight);
      }
      function getStyleVal(elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
      }
    }
  }, [_columns]);

  // For column resize storage in api added debounce to avoid multiple api calls during column resize
  React.useEffect(function () {
    if (resizableColumns) {
      if (colResize !== null && colResize !== void 0 && colResize.width && colResize !== null && colResize !== void 0 && colResize.field) {
        var getData = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return onColumnResizeEnd(colResize);
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })), 1000);
        return function () {
          return clearTimeout(getData);
        };
      }
    }
  }, [colResize]);
  var handleIntersect = React.useCallback(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        infiniteChange();
        setShowCustomLoader(true);
      }
    });
  }, []);
  React.useEffect(function () {
    if (!tableFootRef.current) return;
    var observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.8 //Making it as 0.8 rather than 0 show atleast somepart of px to appear rather as 0 will trigger as soon as some px is visible
    });

    //To observe the place where the change needed for infinite scroll to work
    observer.observe(tableFootRef.current);
    return function () {
      observer.disconnect();
    };
  }, [handleIntersect]);
  var expandRow = function expandRow(event, id) {
    if (event.target.className.includes('expanded')) {
      // take action :: collapse 
      event.target.style.transform = 'rotate(0deg)';
      event.target.classList.remove('expanded');
      var keys = Object.keys(rowExpand);
      var index = keys.findIndex(function (a) {
        return a === String(id);
      });
      if (index > -1) {
        var _keys$index;
        var _rowExpand = structuredClone(rowExpand);
        delete _rowExpand[(_keys$index = keys[index]) === null || _keys$index === void 0 ? void 0 : _keys$index.toString()];
        setRowExpand(_objectSpread2({}, _rowExpand));
      }
    } else {
      // take action :: expand 
      event.target.style.transform = 'rotate(90deg)';
      event.target.classList.add('expanded');
      setRowExpand(_objectSpread2(_objectSpread2({}, rowExpand), {}, _defineProperty({}, id, true)));
    }
  };
  var tableBody = React.useMemo(function () {
    return data.length > 0 ? data === null || data === void 0 ? void 0 : data.map(function (row, rowIndex) {
      var _columns$filter, _columns$filter2;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: rowIndex
      }, /*#__PURE__*/React.createElement("tr", {
        key: "row-".concat(rowIndex),
        id: "row-".concat(rowIndex),
        style: {
          overflow: 'hidden'
        }
      }, rowxpansion ? /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick(event) {
          return expandRow(event, "row-".concat(rowIndex));
        }
      }, "\u203A")) : "", selectable && (selectionMode === "checkbox" ? /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
        className: "datatable-checkbox",
        type: "checkbox",
        id: "row-".concat(rowIndex),
        onChange: function onChange(event) {
          return onRowSelection(event, row);
        },
        checked: selectedRows.findIndex(function (a) {
          return a[dataKey] === row[dataKey];
        }) > -1,
        name: "DataTable-row-checkbox"
      })) : selectionMode === "radio" ? /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
        className: "datatable-radio",
        type: "radio",
        id: "row-".concat(rowIndex),
        onChange: function onChange(event) {
          return onRowSelection(event, row);
        },
        checked: selectedRows[dataKey] === row[dataKey],
        name: "DataTable-row-radio"
      })) : ""), _columns === null || _columns === void 0 || (_columns$filter = _columns.filter(function (a) {
        return a.visible;
      })) === null || _columns$filter === void 0 ? void 0 : _columns$filter.map(function (_ref6, tbodyIndex) {
        var field = _ref6.field,
          filterType = _ref6.filterType,
          isLink = _ref6.isLink,
          width = _ref6.width;
        return /*#__PURE__*/React.createElement("td", {
          key: tbodyIndex,
          className: "table-data",
          style: {
            minWidth: width,
            width: width,
            maxWidth: width
          },
          onClick: function onClick() {
            return onCellClick(field, row);
          }
        }, /*#__PURE__*/React.createElement(BodyTemplate, {
          data: row[field],
          datatype: filterType,
          link: isLink
        }));
      }), (_columns === null || _columns === void 0 ? void 0 : _columns.length) > 0 && (actions === null || actions === void 0 ? void 0 : actions.map(function (a, key) {
        return /*#__PURE__*/React.createElement("td", {
          className: "action-template",
          key: key
        }, /*#__PURE__*/React.createElement("span", null, a.icon), /*#__PURE__*/React.createElement("span", {
          className: "action-label",
          style: {
            cursor: a.link ? "pointer" : "default"
          },
          onClick: function onClick() {
            return a.onClick(row);
          }
        }, a.label));
      }))), rowExpand[row[dataKey]] && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: (columns === null || columns === void 0 || (_columns$filter2 = columns.filter(function (a) {
          return a.visible;
        })) === null || _columns$filter2 === void 0 ? void 0 : _columns$filter2.length) + 2 || 5
      }, rowExpansionTemplate(row))));
    }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "no-datatable",
      colSpan: 5
    }, /*#__PURE__*/React.createElement("h4", null, "No records found")));
  }, [data, _columns, actions, rowExpand]);
  var tableHead = React.useMemo(function () {
    var _columns$filter3;
    return /*#__PURE__*/React.createElement("tr", null, rowxpansion ? /*#__PURE__*/React.createElement("th", null) : "", selectable && selectionMode === "checkbox" ? /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("input", {
      className: "datatable-checkbox",
      type: "checkbox",
      style: {
        visibility: allRowSelection ? "" : "hidden"
      },
      id: "Datatable-header-checkbox",
      onChange: function onChange(event) {
        return onAllRowSelection(event, data);
      },
      checked: selectedRows.length === data.length,
      name: "Datatable-header-checkbox"
    })) : selectable && selectionMode === "radio" ? /*#__PURE__*/React.createElement("th", null) : "", _columns === null || _columns === void 0 || (_columns$filter3 = _columns.filter(function (a) {
      return a.visible;
    })) === null || _columns$filter3 === void 0 ? void 0 : _columns$filter3.map(function (_ref7, theadIndex) {
      var header = _ref7.header,
        field = _ref7.field,
        width = _ref7.width,
        filterType = _ref7.filterType;
      return /*#__PURE__*/React.createElement("th", {
        key: theadIndex,
        style: {
          minWidth: width,
          width: width,
          maxWidth: width,
          borderRight: "2px solid #fff"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          verticalAlign: "middle"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          whiteSpace: 'nowrap'
        }
      }, header), sortable && sortMode === "single" && /*#__PURE__*/React.createElement(Sorting, {
        column: field,
        setSorting: setSorting,
        sorting: field === (sorting === null || sorting === void 0 ? void 0 : sorting.sortBy) ? sorting : null
      }), sortable && sortMode === "multi" && /*#__PURE__*/React.createElement(MultiSorting, {
        column: field,
        setSorting: setSorting,
        sorting: sorting
      })), filterable && /*#__PURE__*/React.createElement(TablecolumnFilter, {
        datatype: filterType,
        clearFilter: clearFilter,
        applyFilter: applyFilter,
        column: field,
        matchModeSelected: matchModeSelected,
        setMatchModeSelected: function setMatchModeSelected(_data) {
          _setMatchModeSelected(_data);
        }
      })));
    }), (_columns === null || _columns === void 0 ? void 0 : _columns.length) > 0 && (actions === null || actions === void 0 ? void 0 : actions.map(function (a, key) {
      return /*#__PURE__*/React.createElement("th", {
        className: "action-header",
        style: {
          minWidth: a.width,
          width: a.width,
          maxWidth: a.width
        },
        key: key
      }, a === null || a === void 0 ? void 0 : a.header);
    })));
  }, [_columns, actions, matchModeSelected, data]);
  return /*#__PURE__*/React.createElement("div", {
    id: scrollable ? "dataTable-parent_Freeze" : "dataTable-parent"
  }, /*#__PURE__*/React.createElement("table", {
    id: "datatable",
    className: scrollable ? "dataTable Header_freeze resizable-table" : "dataTable resizable-table",
    style: {
      display: (_columns === null || _columns === void 0 ? void 0 : _columns.length) > 0 ? 'table-cell' : "table"
    } //Added this condition for this style due to config issue
  }, /*#__PURE__*/React.createElement("thead", {
    className: "datatable-head-parent"
  }, tableHead), /*#__PURE__*/React.createElement("tbody", {
    className: "datatable-body-parent"
  }, loading ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '0 !important'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.5)",
      height: "calc(110vh - 258px)",
      width: "100%",
      top: 0,
      left: 0
    },
    className: "flex justify-content-center flex-column align-items-center loader-empty-message"
  }, /*#__PURE__*/React.createElement(ProgressLoader, {
    message: "Loading..."
  })))) : status === "error" ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '0 !important'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      height: "calc(110vh - 258px)",
      width: "100%",
      top: 0,
      left: 0
    },
    className: "flex justify-content-center flex-column align-items-center loader-empty-message"
  }, /*#__PURE__*/React.createElement(ErrorDetail, {
    title: error.error,
    subTitle: error.message
  }), /*#__PURE__*/React.createElement("button", {
    className: "filter-footer-button",
    onClick: refetch
  }, "Refetch")))) : tableBody), infinitescroll && /*#__PURE__*/React.createElement("tfoot", {
    ref: tableFootRef
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 && showcustomLoader && totalRecords !== data.length && /*#__PURE__*/React.createElement(ProgressLoader, null))))));
}

function DataTable(props) {
  var _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    _props$dataKey = props.dataKey,
    dataKey = _props$dataKey === void 0 ? "id" : _props$dataKey,
    _props$columns = props.columns,
    columns = _props$columns === void 0 ? [] : _props$columns,
    _props$sorting = props.sorting,
    sorting = _props$sorting === void 0 ? [] : _props$sorting,
    setSorting = props.setSorting,
    _props$sortable = props.sortable,
    sortable = _props$sortable === void 0 ? false : _props$sortable,
    _props$sortmode = props.sortmode,
    sortmode = _props$sortmode === void 0 ? "single" : _props$sortmode,
    setFilters = props.setFilters,
    filters = props.filters,
    _props$filterable = props.filterable,
    filterable = _props$filterable === void 0 ? false : _props$filterable,
    _props$totalRecords = props.totalRecords,
    totalRecords = _props$totalRecords === void 0 ? 0 : _props$totalRecords;
    props.rows;
    props.pageNo;
    var setPageNo = props.setPageNo;
    props.setRows;
    var _props$scrollable = props.scrollable,
    scrollable = _props$scrollable === void 0 ? false : _props$scrollable,
    mainAllTab = props.mainAllTab,
    error = props.error,
    status = props.status,
    refetch = props.refetch,
    _props$actions = props.actions,
    actions = _props$actions === void 0 ? [] : _props$actions,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    onCellClick = props.onCellClick,
    onColumnResizeEnd = props.onColumnResizeEnd,
    selectedMode = props.selectedMode,
    onRowSelection = props.onRowSelection,
    _props$selectedRows = props.selectedRows,
    selectedRows = _props$selectedRows === void 0 ? [] : _props$selectedRows,
    onAllRowSelection = props.onAllRowSelection,
    _props$infinitescroll = props.infinitescroll,
    infinitescroll = _props$infinitescroll === void 0 ? false : _props$infinitescroll,
    infiniteChange = props.infiniteChange,
    showcustomLoader = props.showcustomLoader,
    setShowCustomLoader = props.setShowCustomLoader,
    _props$resizableColum = props.resizableColumns,
    resizableColumns = _props$resizableColum === void 0 ? false : _props$resizableColum,
    _props$allRowSelectio = props.allRowSelection,
    allRowSelection = _props$allRowSelectio === void 0 ? false : _props$allRowSelectio,
    _props$selectable = props.selectable,
    selectable = _props$selectable === void 0 ? false : _props$selectable,
    _props$selectionMode = props.selectionMode,
    selectionMode = _props$selectionMode === void 0 ? "checkbox" : _props$selectionMode;
  var updateFilters = function updateFilters(field, value) {
    setPageNo(0);
    var _filters = structuredClone(filters); //Changed this from const to let
    _filters[field] = value;
    setFilters(_filters);
  };

  // Added this for clear filters as adding null directly made page go blank
  var updateClearFilters = function updateClearFilters(field, value) {
    setPageNo(0);
    var _filters = structuredClone(filters);
    _filters[field] = value;
    setFilters(_filters);
  };

  // Commented it out but it would be additional functionality we can provide via props if needed
  // const scrollLeft = () => {
  //   document.getElementById('dataTable-parent_Freeze').scrollLeft -= 100
  // }

  // const scrollRight = () => {
  //   document.getElementById('dataTable-parent_Freeze').scrollLeft += 100
  // }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      transform: "scale(1)"
    }
  }, /*#__PURE__*/React.createElement(DTable, {
    dataKey: dataKey,
    data: data,
    columns: columns,
    setSorting: setSorting,
    sorting: sorting,
    sortable: sortable,
    sortMode: sortmode,
    resizableColumns: resizableColumns,
    scrollable: scrollable,
    filterable: filterable,
    setFilters: setFilters,
    filters: filters,
    applyFilter: updateFilters,
    clearFilter: updateClearFilters,
    actions: actions,
    onCellClick: onCellClick,
    loading: loading,
    status: status,
    error: error,
    refetch: refetch,
    onColumnResizeEnd: onColumnResizeEnd,
    selectedMode: selectedMode,
    mainAllTab: mainAllTab,
    onRowSelection: onRowSelection,
    selectedRows: selectedRows,
    onAllRowSelection: onAllRowSelection,
    infinitescroll: infinitescroll,
    infiniteChange: infiniteChange,
    totalRecords: totalRecords,
    showcustomLoader: showcustomLoader,
    setShowCustomLoader: setShowCustomLoader,
    allRowSelection: allRowSelection,
    selectionMode: selectionMode,
    selectable: selectable
  }));
}
DataTable.propTypes = {
  data: PropTypes.array,
  dataKey: PropTypes.string,
  columns: PropTypes.array,
  sorting: PropTypes.any,
  setSorting: PropTypes.func,
  setFilters: PropTypes.func,
  filters: PropTypes.object,
  totalRecords: PropTypes.number,
  rows: PropTypes.number,
  pageNo: PropTypes.number,
  setPageNo: PropTypes.func,
  setRows: PropTypes.func,
  mainAllTab: PropTypes.bool,
  error: PropTypes.any,
  status: PropTypes.any,
  refetch: PropTypes.func,
  actions: PropTypes.any,
  loading: PropTypes.bool,
  onCellClick: PropTypes.func,
  onColumnResizeEnd: PropTypes.func,
  selectedMode: PropTypes.any,
  onRowSelection: PropTypes.func,
  selectedRows: PropTypes.any,
  onAllRowSelection: PropTypes.func,
  sortable: PropTypes.bool,
  sortMode: PropTypes.string,
  sortmode: PropTypes.string,
  infinitescroll: PropTypes.bool,
  infiniteChange: PropTypes.func,
  showcustomLoader: PropTypes.bool,
  setShowCustomLoader: PropTypes.func,
  filterable: PropTypes.bool,
  scrollable: PropTypes.bool,
  resizableColumns: PropTypes.bool,
  allRowSelection: PropTypes.bool,
  selectable: PropTypes.bool,
  selectionMode: PropTypes.string
};

module.exports = DataTable;
