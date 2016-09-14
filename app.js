!function(){"use strict";var r="undefined"==typeof window?global:window;if("function"!=typeof r.require){var e={},n={},t={},i={}.hasOwnProperty,a=/^\.\.?(\/|$)/,u=function(r,e){for(var n,t=[],i=(a.test(e)?r+"/"+e:e).split("/"),u=0,o=i.length;u<o;u++)n=i[u],".."===n?t.pop():"."!==n&&""!==n&&t.push(n);return t.join("/")},o=function(r){return r.split("/").slice(0,-1).join("/")},c=function(e){return function(n){var t=u(o(e),n);return r.require(t,e)}},f=function(r,e){var t=null;t=A&&A.createHot(r);var i={id:r,exports:{},hot:t};return n[r]=i,e(i.exports,c(r),i),i.exports},l=function(r){return t[r]?l(t[r]):r},s=function(r,e){return l(u(o(r),e))},p=function(r,t){null==t&&(t="/");var a=l(r);if(i.call(n,a))return n[a].exports;if(i.call(e,a))return f(a,e[a]);throw new Error("Cannot find module '"+r+"' from '"+t+"'")};p.alias=function(r,e){t[e]=r};var T=/\.[^.\/]+$/,E=/\/index(\.[^\/]+)?$/,d=function(r){if(T.test(r)){var e=r.replace(T,"");i.call(t,e)&&t[e].replace(T,"")!==e+"/index"||(t[e]=r)}if(E.test(r)){var n=r.replace(E,"");i.call(t,n)||(t[n]=r)}};p.register=p.define=function(r,t){if("object"==typeof r)for(var a in r)i.call(r,a)&&p.register(a,r[a]);else e[r]=t,delete n[r],d(r)},p.list=function(){var r=[];for(var n in e)i.call(e,n)&&r.push(n);return r};var A=r._hmr&&new r._hmr(s,p,e,n);p._cache=n,p.hmr=A&&A.wrap,p.brunch=!0,r.require=p}}(),function(){var r;window;require.register("app.js",function(r,e,n){"use strict";function t(r){return r&&r.__esModule?r:{"default":r}}function i(r){if(Array.isArray(r)){for(var e=0,n=Array(r.length);e<r.length;e++)n[e]=r[e];return n}return Array.from(r)}var a=e("jquery"),u=t(a);e("bootstrap");var o=e("file-saver"),c=e("./lib/utils");(0,u["default"])(document).ready(function(){(0,u["default"])("form").submit(function(r){r.preventDefault();var e=[],n=(0,u["default"])("form #raw-input-textarea").val().match(/[A-Z\d]{9}/g),t=0,a=n.length;n.forEach(function(r){u["default"].getJSON("./data/ntust/"+r+".json",function(r){if("undefined"!=typeof r?(e=[].concat(i(e),[r]),t+=1):a-=1,t==a){var n=new Blob([(0,c.icsGenerate)(e)],{type:"text/plain;charset=utf-8"});(0,o.saveAs)(n,"calendar.ics",!0)}})})})})}),require.register("lib/utils.js",function(r,e,n){"use strict";function t(r,e){return r.setDate(r.getDate()+(e+(7-r.getDay()))%7),r}function i(r){var e={1:"MO",2:"TU",3:"WE",4:"TH",5:"FR",6:"SA",7:"SU"},n=r.map(function(r){return Array.isArray(r.periods)&&r.periods.map(function(n){var i=n.time.split("-").map(function(r){return t(new Date(u+"T"+r+":00+08:00"),n.day)}),o=a(i,2),c=o[0],f=o[1],l=[c,f].map(function(r){return r.toISOString().slice(0,19).replace(/[-:]/g,"")}),s=a(l,2),p=s[0],T=s[1];return"BEGIN:VEVENT\nDTSTART;TZID=UTC:"+p+"\nDTEND;TZID=UTC:"+T+"\nRRULE:FREQ=WEEKLY;COUNT=18;BYDAY="+e[t(c,n.day).getDay()]+"\nSUMMARY:"+r.name+"\nLOCATION:"+n.location+"\nDESCRIPTION:授課教師:"+r.lecturer+"\nEND:VEVENT"}).join("\n")}).join("\n");return("BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:yukaii.tw\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:課程表\nX-WR-TIMEZONE:Asia/Taipei\nX-WR-CALDESC:\nBEGIN:VTIMEZONE\nTZID:Asia/Taipei\nX-LIC-LOCATION:Asia/Taipei\nBEGIN:STANDARD\nTZOFFSETFROM:+0800\nTZOFFSETTO:+0800\nTZNAME:CST\nDTSTART:19700101T000000\nEND:STANDARD\nEND:VTIMEZONE\n"+n+"\nEND:VCALENDAR").replace(/\n/g,"\r\n")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function r(r,e){var n=[],t=!0,i=!1,a=void 0;try{for(var u,o=r[Symbol.iterator]();!(t=(u=o.next()).done)&&(n.push(u.value),!e||n.length!==e);t=!0);}catch(c){i=!0,a=c}finally{try{!t&&o["return"]&&o["return"]()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r.icsGenerate=i;var u="2016-09-12"}),require.alias("process/browser.js","process"),r=require("process"),require.register("___globals___",function(r,e,n){window.$=e("jquery"),window.jQuery=e("jquery"),window.Tether=e("tether")})}(),require("___globals___");