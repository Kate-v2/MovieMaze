/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _dom_tools = __webpack_require__(1);

	var _dom_tools2 = _interopRequireDefault(_dom_tools);

	var _nav_bar = __webpack_require__(2);

	var _nav_bar2 = _interopRequireDefault(_nav_bar);

	var _welcome = __webpack_require__(7);

	var _welcome2 = _interopRequireDefault(_welcome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var tool = new _dom_tools2.default(); // This file is in the entry point in your webpack config.

	var navBar = new _nav_bar2.default();

	var welcome = new _welcome2.default();

	navBar.loadNav();

	welcome.loadWelcome();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DOMTools = function () {
	  function DOMTools() {
	    _classCallCheck(this, DOMTools);
	  }

	  _createClass(DOMTools, [{
	    key: 'getElement',
	    value: function getElement(id) {
	      return document.getElementById(id);
	    }
	  }, {
	    key: 'newElement',
	    value: function newElement(type) {
	      return document.createElement(type);
	    }
	  }, {
	    key: 'elementNames',
	    value: function elementNames(element) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      if (id) {
	        element.id = id;
	      }
	      if (className) {
	        element.className = className;
	      }
	    }
	  }, {
	    key: 'clearElement',
	    value: function clearElement(element) {
	      element.innerHTML = '';
	    }
	  }]);

	  return DOMTools;
	}();

	exports.default = DOMTools;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom_tools = __webpack_require__(1);

	var _dom_tools2 = _interopRequireDefault(_dom_tools);

	var _session_tools = __webpack_require__(3);

	var _session_tools2 = _interopRequireDefault(_session_tools);

	var _search_titles = __webpack_require__(4);

	var _search_titles2 = _interopRequireDefault(_search_titles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import TitleResults from '../classes/title_results.js'

	var NavBar = function () {
	  function NavBar() {
	    _classCallCheck(this, NavBar);

	    this.tool = new _dom_tools2.default();
	    this.session = new _session_tools2.default();
	    // this.search  = new SearchTitles
	    // this.results = new TitleResults
	  }

	  _createClass(NavBar, [{
	    key: 'loadNav',
	    value: function loadNav() {
	      var div = this.tool.getElement('navbar');
	      this.tool.clearElement(div);
	      var home = this.homeButton();
	      div.appendChild(home);
	      var search = this.searchArea();
	      div.appendChild(search);
	      var register = this.registerButton();
	      div.appendChild(register);
	      var sesh = this.sessionButton();
	      div.appendChild(sesh);
	    }

	    // ---- Home ----

	  }, {
	    key: 'homeButton',
	    value: function homeButton() {
	      var span = this.navButton('home');
	      var p = this.buttonText("MovieMaze", "homeTitle");
	      span.appendChild(p);
	      return span;
	    }

	    // ---- Search ----

	  }, {
	    key: 'searchArea',
	    value: function searchArea() {
	      var span = this.tool.newElement('span');
	      this.tool.elementNames(span, 'searchContainer');

	      var bar = this.searchBar();
	      span.appendChild(bar);

	      var button = this.navButton('searchButton');
	      var go = this.buttonText("Search", 'searchButtonText');
	      button.appendChild(go);
	      span.appendChild(button);

	      button.addEventListener('click', function () {
	        var titles = new _search_titles2.default();
	        titles.get_titles();
	      });
	      return span;
	    }
	  }, {
	    key: 'searchBar',
	    value: function searchBar() {
	      var bar = this.tool.newElement('input');
	      bar.type = 'text';
	      this.tool.elementNames(bar, 'search-bar', null);
	      bar.placeholder = 'Search a Title';
	      return bar;
	    }
	  }, {
	    key: 'searchTerm',
	    value: function searchTerm() {
	      var term = this.tool.getElement('search-bar').value;
	      return term;
	    }

	    // ---- Register ----

	  }, {
	    key: 'registerButton',
	    value: function registerButton() {
	      if (this.session.isLoggedIn()) {
	        return null;
	      }
	      var span = this.navButton('register');
	      var p = this.buttonText('Register', 'registerText');
	      span.appendChild(p);
	      return span;
	    }

	    // ---- Login ----

	  }, {
	    key: 'sessionButton',
	    value: function sessionButton() {
	      var span = this.navButton('register');
	      if (this.session.isLoggedIn()) {
	        var p = this.buttonText('Logout', 'registerText');
	      } else {
	        var p = this.buttonText('Login', 'registerText');
	      }
	      span.appendChild(p);
	      return span;
	    }

	    // ---- Tools ----

	  }, {
	    key: 'navButton',
	    value: function navButton() {
	      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'navButton';

	      var span = this.tool.newElement('span');
	      this.tool.elementNames(span, id, className);
	      return span;
	    }
	  }, {
	    key: 'buttonText',
	    value: function buttonText(text) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var p = this.tool.newElement('p');
	      this.tool.elementNames(p, id, "navButtonText");
	      p.innerHTML = text;
	      return p;
	    }
	  }]);

	  return NavBar;
	}();

	exports.default = NavBar;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SessionTools = function () {
	  function SessionTools() {
	    _classCallCheck(this, SessionTools);
	  }

	  _createClass(SessionTools, [{
	    key: 'token',
	    value: function token() {
	      return sessionStorage['token'] || null;
	    }
	  }, {
	    key: 'isLoggedIn',
	    value: function isLoggedIn() {
	      return this.token() != null || this.token() != undefined;
	    }
	  }]);

	  return SessionTools;
	}();

	exports.default = SessionTools;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _title_results = __webpack_require__(5);

	var _title_results2 = _interopRequireDefault(_title_results);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SearchTitles = function () {
	  function SearchTitles() {
	    _classCallCheck(this, SearchTitles);

	    this.url = 'https://movie-maze.herokuapp.com/api/v1/search';
	  }

	  _createClass(SearchTitles, [{
	    key: 'get_titles',
	    value: function get_titles() {
	      var title = document.getElementById('search-bar').value;
	      var obj = { "term": title };
	      var body = JSON.stringify(obj);
	      var blob = new Blob([body], { type: 'application/json' });
	      // let url  = `https://movie-maze.herokuapp.com/api/v1/search`
	      var url = 'https://movie-maze.herokuapp.com/api/v1/search?term=' + title;

	      var results = new _title_results2.default();

	      var data;
	      var req = new XMLHttpRequest();
	      req.open('GET', url, true);
	      req.setRequestHeader("Content-Type", "application/json");
	      req.setRequestHeader("Accept", "application/json");
	      // req.setRequestHeader("CONTENT-TYPE", "application/json")
	      // req.setRequestHeader("ACCEPT",        "application/json")
	      req.onload = function () {
	        var stat = this.status;
	        var valid = stat >= 200 && stat < 300;
	        if (valid) {
	          data = JSON.parse(this.responseText)['data']['attributes'];
	          results.loadResults(data);
	        }
	        // else { console.log(this.error) }
	      };
	      // var blob = new Blob([ JSON.stringify(body)], {type : 'application/json'});
	      // var blob = new Blob([ JSON.stringify(obj)], {type : 'application/json'});
	      // req.send(blob)
	      // req.send( body )
	      req.send();
	    }

	    // fetch(url, {
	    //   method: 'GET',
	    //   headers: {
	    //               "Content-Type": "application/json",
	    //               "Accept":       "application/json",
	    //             }
	    // })
	    // .request( blob )
	    // .then( data => JSON.parse(data)['data']['attributes'])
	    // .then( parseFunc(data))


	  }]);

	  return SearchTitles;
	}();

	exports.default = SearchTitles;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom_tools = __webpack_require__(1);

	var _dom_tools2 = _interopRequireDefault(_dom_tools);

	var _movie = __webpack_require__(6);

	var _movie2 = _interopRequireDefault(_movie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TitleResults = function () {
	  function TitleResults() {
	    _classCallCheck(this, TitleResults);

	    this.tool = new _dom_tools2.default();
	  }

	  _createClass(TitleResults, [{
	    key: 'loadResults',
	    value: function loadResults(data) {
	      var div = this.tool.getElement('content');
	      this.tool.clearElement(div);
	      this.render_term(data['term'], div);
	      this.render_titles(data['results'], div);
	    }

	    // ---- Search Term ----

	  }, {
	    key: 'render_term',
	    value: function render_term(term, element) {
	      var title = this.tool.newElement('div');
	      this.tool.elementNames(title, 'ResultsPageSearchTerm');

	      var p = this.tool.newElement('p');
	      this.tool.elementNames(p, 'SearchTerm');
	      var text = 'Search Term: ' + term;
	      p.innerHTML = text;

	      title.appendChild(p);
	      element.appendChild(title);
	    }

	    // ---- Search Results ----

	  }, {
	    key: 'render_titles',
	    value: function render_titles(data, element) {
	      var _this = this;

	      var div = this.tool.newElement('div');
	      this.tool.elementNames(div, 'ResultsContainer');
	      var elements = data.map(function (r) {
	        return _this.media_card(r, div);
	      });
	      element.appendChild(div);
	    }
	  }, {
	    key: 'media_card',
	    value: function media_card(data, container) {
	      var span = this.tool.newElement('span');
	      var id = data['title'].replace(/ /g, '');
	      this.tool.elementNames(span, id, 'mediaCard');
	      var img = this.addMediaImage(data['picture'], span);
	      var title = this.addMediaTitle(data['title'], span);

	      // span.onClick = function() { new Movie(data).loadMovie() }
	      //
	      // This has to be a service callback

	      container.appendChild(span);
	    }

	    // ---- Image ----

	  }, {
	    key: 'addMediaImage',
	    value: function addMediaImage(src, element) {
	      var span = this.tool.newElement('span');
	      this.tool.elementNames(span, null, 'imgContainer');
	      if (src) {
	        var img = this.tool.newElement('img');
	        img.src = src;
	      } else {
	        var img = this.tool.newElement('span');
	        var p = this.tool.newElement('p');
	        p.innerHTML = "No Image";
	        img.appendChild(p);
	      }
	      img.className = "mediaPoster";
	      span.appendChild(img);
	      element.appendChild(span);
	      return img;
	    }

	    // ---- Title ----

	  }, {
	    key: 'addMediaTitle',
	    value: function addMediaTitle(title, element) {
	      var span = this.tool.newElement('span');
	      this.tool.elementNames(span, null, "mediaTitle");

	      var p = this.tool.newElement('p');
	      p.innerHTML = title;
	      span.appendChild(p);

	      element.appendChild(span);
	      return span;
	    }
	  }]);

	  return TitleResults;
	}();

	exports.default = TitleResults;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom_tools = __webpack_require__(1);

	var _dom_tools2 = _interopRequireDefault(_dom_tools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Movie = function () {
	  function Movie(data) {
	    _classCallCheck(this, Movie);

	    this.data = data;
	    this.streams = data['streams'];
	    this.title = data['title'];
	    this.img = data['picture'];

	    this.tool = new _dom_tools2.default();
	  }

	  _createClass(Movie, [{
	    key: 'loadMovie',
	    value: function loadMovie() {
	      var div = this.tool.getElement('content').bind(this);
	      this.tool.clearElement(div);
	    }
	  }]);

	  return Movie;
	}();

	exports.default = Movie;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom_tools = __webpack_require__(1);

	var _dom_tools2 = _interopRequireDefault(_dom_tools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Welcome = function () {
	  function Welcome() {
	    _classCallCheck(this, Welcome);

	    this.tool = new _dom_tools2.default();
	  }

	  _createClass(Welcome, [{
	    key: 'loadWelcome',
	    value: function loadWelcome() {
	      var div = this.tool.getElement('content');
	      this.tool.clearElement(div);

	      var p1 = this.welcomeText(this.p1(), 'p1');
	      div.appendChild(p1);

	      var p2 = this.welcomeText(this.p2(), 'p2');
	      div.appendChild(p2);

	      var p3 = this.welcomeText(this.p3(), 'p3');
	      div.appendChild(p3);

	      var p4 = this.welcomeText(this.p4(), 'p4');
	      div.appendChild(p4);
	    }
	  }, {
	    key: 'welcomeText',
	    value: function welcomeText(text) {
	      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var p = this.tool.newElement('p');
	      p.innerHTML = text;
	      this.tool.elementNames(p, id, 'WelcomeText');
	      return p;
	    }
	  }, {
	    key: 'p1',
	    value: function p1() {
	      return "Welcome to MovieMaze!";
	    }
	  }, {
	    key: 'p2',
	    value: function p2() {
	      return "Use this app to find movies/shows by title, see details about them, and find out where they're streaming!";
	    }
	  }, {
	    key: 'p3',
	    value: function p3() {
	      return "Register or Login to create favorites & a watchlist.";
	    }
	  }, {
	    key: 'p4',
	    value: function p4() {
	      return "To get started, use the search bar to find a movie or show title. When you get to the results, please pick the correct title.";
	    }
	  }]);

	  return Welcome;
	}();

	exports.default = Welcome;

/***/ })
/******/ ]);