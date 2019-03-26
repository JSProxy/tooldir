// (function(doc, win) {
//         var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function() {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             if (clientWidth >= 375) { //750这个值，根据设计师的psd宽度来修改，是多少就写多少，现在手机端一般是750px的设计稿，如果设计师给的1920的psd，自己用Photoshop等比例缩小
//                 docEl.style.fontSize = '16px';
//             } else {
//                 docEl.style.fontSize = (clientWidth / 375)*16 + 'px'; //750这个值，根据设计师的psd宽度来修改，是多少就写多少，现在手机端一般是750px的设计稿，如果设计师给的1920的psd，自己用Photoshop等比例缩小
//             }
//         };
 		
//     if (!doc.addEventListener) return;
//     //浏览器宽度高度变化的时候
//     win.addEventListener(resizeEvt, recalc, false);
//     //浏览器开始渲染的时候
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);


// add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
// contains(value)：表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false。
// remove(value)：从列表中删除给定的字符串。
// toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它