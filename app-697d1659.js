!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},r={},n={},a={}.hasOwnProperty,i=/^\.\.?(\/|$)/,u=function(t,e){for(var r,n=[],a=(i.test(e)?t+"/"+e:e).split("/"),u=0,o=a.length;u<o;u++)r=a[u],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},l=function(e){return function(r){var n=u(o(e),r);return t.require(n,e)}},s=function(t,e){var n=null;n=y&&y.createHot(t);var a={id:t,exports:{},hot:n};return r[t]=a,e(a.exports,l(t),a),a.exports},c=function(t){return n[t]?c(n[t]):t},f=function(t,e){return c(u(o(t),e))},d=function(t,n){null==n&&(n="/");var i=c(t);if(a.call(r,i))return r[i].exports;if(a.call(e,i))return s(i,e[i]);throw new Error("Cannot find module '"+t+"' from '"+n+"'")};d.alias=function(t,e){n[e]=t};var v=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,h=function(t){if(v.test(t)){var e=t.replace(v,"");a.call(n,e)&&n[e].replace(v,"")!==e+"/index"||(n[e]=t)}if(p.test(t)){var r=t.replace(p,"");a.call(n,r)||(n[r]=t)}};d.register=d.define=function(t,n){if("object"==typeof t)for(var i in t)a.call(t,i)&&d.register(i,t[i]);else e[t]=n,delete r[t],h(t)},d.list=function(){var t=[];for(var r in e)a.call(e,r)&&t.push(r);return t};var y=t._hmr&&new t._hmr(f,d,e,r);d._cache=r,d.hmr=y&&y.wrap,d.brunch=!0,t.require=d}}(),function(){var t;window;require.register("app.js",function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var i=function(){function t(t,e){var r=[],n=!0,a=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(n=(u=o.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(l){a=!0,i=l}finally{try{!n&&o["return"]&&o["return"]()}finally{if(a)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=e("jquery"),o=n(u);e("bootstrap");var l=e("./lib/utils");(0,o["default"])(document).ready(function(){(0,o["default"])("form").submit(function(t){t.preventDefault(),(0,o["default"])("#alternative-download-link").addClass("hidden"),(0,o["default"])("#ics-anchor button").attr("disabled","").removeClass("btn-success").removeClass("btn-danger").text("請稍等");var e=[],r=(0,o["default"])("form #raw-input-textarea").val().match(/[A-Z\d]{9}/g);if(!r)return void(0,o["default"])("#ics-anchor button").addClass("btn-danger").text("課程代碼錯誤");var n=(0,o["default"])("#school-value").attr("value"),i=(0,o["default"])("#semester-value").attr("value"),u=0,s=r.length;r.forEach(function(t){o["default"].getJSON("./data/"+i+"/"+n+"/"+t+".json",function(t){if("undefined"!=typeof t?(e=[].concat(a(e),[t]),u+=1):s-=1,u==s){var r=(0,l.icsGenerate)(e);o["default"].post("https://api.github.com/gists",JSON.stringify({files:{"calendar.ics":{content:r}}}),function(t){var e=t.files["calendar.ics"].raw_url;(0,o["default"])("#ics-anchor").attr("href",e),(0,o["default"])("#ics-anchor button").addClass("btn-success").removeAttr("disabled").text("下載"),(0,o["default"])("#alternative-download-link").removeClass("hidden").attr("href",e)})}})})}),(0,o["default"])("#school-dropdown .dropdown-menu a").click(function(){(0,o["default"])("#school-value").text((0,o["default"])(this).attr("value").toUpperCase()).attr("value",(0,o["default"])(this).attr("value"))}),(0,o["default"])("#semester-dropdown .dropdown-menu a").click(function(){var t=(0,o["default"])(this).attr("value").split("-"),e=i(t,2),r=e[0],n=e[1];(0,o["default"])("#semester-value").text(""+(r-1911)+n).attr("value",(0,o["default"])(this).attr("value"))})})}),require.register("lib/utils.js",function(t,e,r){"use strict";function n(t,e){return t.setDate(t.getDate()+(e+(7-t.getDay()))%7),t}function a(t){var e={1:"MO",2:"TU",3:"WE",4:"TH",5:"FR",6:"SA",7:"SU"},r=t.map(function(t){return Array.isArray(t.periods)&&t.periods.map(function(r){var a=r.time.split("-").map(function(t){return n(new Date(u+"T"+t+":00+08:00"),r.day)}),o=i(a,2),l=o[0],s=o[1],c=[l,s].map(function(t){return t.toISOString().slice(0,19).replace(/[-:]/g,"")}),f=i(c,2),d=f[0],v=f[1];return"BEGIN:VEVENT\nDTSTART;TZID=UTC:"+d+"\nDTEND;TZID=UTC:"+v+"\nRRULE:FREQ=WEEKLY;COUNT=18;BYDAY="+e[n(l,r.day).getDay()]+"\nSUMMARY:"+t.name+"\nLOCATION:"+r.location+"\nDESCRIPTION:授課教師:"+t.lecturer+"; 課程代碼:"+t.code+"\nEND:VEVENT"}).join("\n")}).join("\n");return("BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:yukaii.tw\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:課程表\nX-WR-TIMEZONE:Asia/Taipei\nX-WR-CALDESC:\nBEGIN:VTIMEZONE\nTZID:Asia/Taipei\nX-LIC-LOCATION:Asia/Taipei\nBEGIN:STANDARD\nTZOFFSETFROM:+0800\nTZOFFSETTO:+0800\nTZNAME:CST\nDTSTART:19700101T000000\nEND:STANDARD\nEND:VTIMEZONE\n"+r+"\nEND:VCALENDAR").replace(/\n/g,"\r\n")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function t(t,e){var r=[],n=!0,a=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(n=(u=o.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(l){a=!0,i=l}finally{try{!n&&o["return"]&&o["return"]()}finally{if(a)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.icsGenerate=a;var u="2016-09-12"}),require.alias("process/browser.js","process"),t=require("process"),require.register("___globals___",function(t,e,r){window.$=e("jquery"),window.jQuery=e("jquery"),window.Tether=e("tether")})}(),require("___globals___");