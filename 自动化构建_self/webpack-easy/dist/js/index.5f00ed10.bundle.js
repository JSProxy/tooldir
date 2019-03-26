/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}


jQuery(document).ready(function($) {
    $(".left-label").attr('contenteditable', 'false');
    $(".label-value").attr('contenteditable', 'false');
    $(".info-title").attr('contenteditable', 'false');
    $("h3").attr('contenteditable', 'false');
    $("p").attr('contenteditable', 'false');
    $(".right-paragraph p").attr('contenteditable', 'false');
    $("#username").attr('contenteditable', 'false');
    $("#persona-tag").attr('contenteditable', 'false');
    $(".info-unit ul li").append('<span class="item-remove"><i class="iconfont icon-delete"></i></span>');
    
    $(".info-unit").filter(function(index) {
        return ($(this).children('ul').length);
    }).children("h2").append('<span class="item-add"><i class="iconfont icon-playlistadd"></i></span>');

    $(".info-unit h2").append('<span class="unit-remove"><i class="iconfont icon-delete"></i></span>');
    

    var portrait_modal = $('[data-remodal-id=portrait-modal]').remodal();
    $(".portrait").click(function(event) {
        portrait_modal.open();
    });
    $('[data-remodal-id=portrait-modal] button').click(function(event) {
        $(".portrait").css('background-image', 'url("{0}")'.format($("#avatar-url").val()));
    });
    var weixin_modal = $('[data-remodal-id=weixin-modal]').remodal();
    $(".weixin").click(function(event) {
        weixin_modal.open();
    });
    $('[data-remodal-id=weixin-modal] button').click(function(event) {
        $(".weixin img").attr('src', $("#weixin-url").val());
    });

    // $('.info-header').hover(function() {
    //     /* Stuff to do when the mouse enters the element */
    //     $(this).children('.unit-remove').css('visibility', 'visible');
    //     $(this).children('.item-add').css('visibility', 'visible');

    // }, function() {
    //     /* Stuff to do when the mouse leaves the element */
    //     $(this).children('.unit-remove').css('visibility', 'hidden');
    //     $(this).children('.item-add').css('visibility', 'hidden');
    // });

    // $('.info-unit ul li').hover(function() {
    //     /* Stuff to do when the mouse enters the element */
    //     $(this).children('.item-remove').css('visibility', 'visible');

    // }, function() {
    //     /* Stuff to do when the mouse leaves the element */
    //     $(this).children('.item-remove').css('visibility', 'hidden');
    // });

    $('.unit-remove').click(function(event) {
        $(this).closest(".info-unit").remove();
    });

    $('.item-remove').click(function(event) {
        // 获取第一个祖先元素 然后删除
        $(this).closest("li").remove();
    });

    $('.item-add').click(function(event) {
        var unit = $(this).closest(".info-unit");
        if (unit.children('ul')){
            var list = unit.children('ul');
            var clone = list.children('li:first-child').clone(true);
            list.append(clone);
        }

    });
    $("progress").click(function(event) {
        $(this).attr("value", event.offsetX/$(this).width()/0.8 * $(this).attr("max"));
    });
    // $("*").removeAttr('contenteditable');
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNLDZCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzREFBc0QsRUFBRTtBQUN4RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMiLCJmaWxlIjoianMvaW5kZXguNWYwMGVkMTAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBGaXJzdCwgY2hlY2tzIGlmIGl0IGlzbid0IGltcGxlbWVudGVkIHlldC5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQpIHtcbiAgU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC97KFxcZCspfS9nLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyKSB7IFxuICAgICAgcmV0dXJuIHR5cGVvZiBhcmdzW251bWJlcl0gIT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBhcmdzW251bWJlcl1cbiAgICAgICAgOiBtYXRjaFxuICAgICAgO1xuICAgIH0pO1xuICB9O1xufVxuXG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuICAgICQoXCIubGVmdC1sYWJlbFwiKS5hdHRyKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAkKFwiLmxhYmVsLXZhbHVlXCIpLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgICQoXCIuaW5mby10aXRsZVwiKS5hdHRyKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAkKFwiaDNcIikuYXR0cignY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgJChcInBcIikuYXR0cignY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgJChcIi5yaWdodC1wYXJhZ3JhcGggcFwiKS5hdHRyKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcbiAgICAkKFwiI3VzZXJuYW1lXCIpLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICAgICQoXCIjcGVyc29uYS10YWdcIikuYXR0cignY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gICAgJChcIi5pbmZvLXVuaXQgdWwgbGlcIikuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIml0ZW0tcmVtb3ZlXCI+PGkgY2xhc3M9XCJpY29uZm9udCBpY29uLWRlbGV0ZVwiPjwvaT48L3NwYW4+Jyk7XG4gICAgXG4gICAgJChcIi5pbmZvLXVuaXRcIikuZmlsdGVyKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoJCh0aGlzKS5jaGlsZHJlbigndWwnKS5sZW5ndGgpO1xuICAgIH0pLmNoaWxkcmVuKFwiaDJcIikuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIml0ZW0tYWRkXCI+PGkgY2xhc3M9XCJpY29uZm9udCBpY29uLXBsYXlsaXN0YWRkXCI+PC9pPjwvc3Bhbj4nKTtcblxuICAgICQoXCIuaW5mby11bml0IGgyXCIpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJ1bml0LXJlbW92ZVwiPjxpIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1kZWxldGVcIj48L2k+PC9zcGFuPicpO1xuICAgIFxuXG4gICAgdmFyIHBvcnRyYWl0X21vZGFsID0gJCgnW2RhdGEtcmVtb2RhbC1pZD1wb3J0cmFpdC1tb2RhbF0nKS5yZW1vZGFsKCk7XG4gICAgJChcIi5wb3J0cmFpdFwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICBwb3J0cmFpdF9tb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gICAgJCgnW2RhdGEtcmVtb2RhbC1pZD1wb3J0cmFpdC1tb2RhbF0gYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgJChcIi5wb3J0cmFpdFwiKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiezB9XCIpJy5mb3JtYXQoJChcIiNhdmF0YXItdXJsXCIpLnZhbCgpKSk7XG4gICAgfSk7XG4gICAgdmFyIHdlaXhpbl9tb2RhbCA9ICQoJ1tkYXRhLXJlbW9kYWwtaWQ9d2VpeGluLW1vZGFsXScpLnJlbW9kYWwoKTtcbiAgICAkKFwiLndlaXhpblwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICB3ZWl4aW5fbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICAgICQoJ1tkYXRhLXJlbW9kYWwtaWQ9d2VpeGluLW1vZGFsXSBidXR0b24nKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkKFwiLndlaXhpbiBpbWdcIikuYXR0cignc3JjJywgJChcIiN3ZWl4aW4tdXJsXCIpLnZhbCgpKTtcbiAgICB9KTtcblxuICAgIC8vICQoJy5pbmZvLWhlYWRlcicpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAvKiBTdHVmZiB0byBkbyB3aGVuIHRoZSBtb3VzZSBlbnRlcnMgdGhlIGVsZW1lbnQgKi9cbiAgICAvLyAgICAgJCh0aGlzKS5jaGlsZHJlbignLnVuaXQtcmVtb3ZlJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAvLyAgICAgJCh0aGlzKS5jaGlsZHJlbignLml0ZW0tYWRkJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgIC8vIH0sIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAvKiBTdHVmZiB0byBkbyB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGVsZW1lbnQgKi9cbiAgICAvLyAgICAgJCh0aGlzKS5jaGlsZHJlbignLnVuaXQtcmVtb3ZlJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgIC8vICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaXRlbS1hZGQnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAkKCcuaW5mby11bml0IHVsIGxpJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIC8qIFN0dWZmIHRvIGRvIHdoZW4gdGhlIG1vdXNlIGVudGVycyB0aGUgZWxlbWVudCAqL1xuICAgIC8vICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaXRlbS1yZW1vdmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG4gICAgLy8gfSwgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIC8qIFN0dWZmIHRvIGRvIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgZWxlbWVudCAqL1xuICAgIC8vICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuaXRlbS1yZW1vdmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgLy8gfSk7XG5cbiAgICAkKCcudW5pdC1yZW1vdmUnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuaW5mby11bml0XCIpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLml0ZW0tcmVtb3ZlJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8g6I635Y+W56ys5LiA5Liq56WW5YWI5YWD57SgIOeEtuWQjuWIoOmZpFxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgICQoJy5pdGVtLWFkZCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciB1bml0ID0gJCh0aGlzKS5jbG9zZXN0KFwiLmluZm8tdW5pdFwiKTtcbiAgICAgICAgaWYgKHVuaXQuY2hpbGRyZW4oJ3VsJykpe1xuICAgICAgICAgICAgdmFyIGxpc3QgPSB1bml0LmNoaWxkcmVuKCd1bCcpO1xuICAgICAgICAgICAgdmFyIGNsb25lID0gbGlzdC5jaGlsZHJlbignbGk6Zmlyc3QtY2hpbGQnKS5jbG9uZSh0cnVlKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG4gICAgJChcInByb2dyZXNzXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICQodGhpcykuYXR0cihcInZhbHVlXCIsIGV2ZW50Lm9mZnNldFgvJCh0aGlzKS53aWR0aCgpLzAuOCAqICQodGhpcykuYXR0cihcIm1heFwiKSk7XG4gICAgfSk7XG4gICAgLy8gJChcIipcIikucmVtb3ZlQXR0cignY29udGVudGVkaXRhYmxlJyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=