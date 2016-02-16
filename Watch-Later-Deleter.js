// ==UserScript==
// @name         YouTube Watch Later Deleter
// @namespace    https://github.com/GlavVlad
// @version      0.1
// @description  Automatically delete watched videos (-1) from your "Watch Later" playlist (need some time)
// @license      WTFPl
// @author       GlavVlad
// @match        https://www.youtube.com/playlist?list=WL
// @grant        none
// @updateURL    https://raw.githubusercontent.com/GlavVlad/YouTube-Watch-Later-Deleter/master/Watch-Later-Deleter.js
// ==/UserScript==

var collection = document.getElementsByClassName('playlist-actions');
var btn = document.createElement('input');
btn.setAttribute('type', 'button');
btn.setAttribute('name', 'button');
btn.setAttribute('value', 'Del Watched');
btn.addEventListener('click', function del() {
    var el = document.getElementsByClassName('pl-video-edit-remove');
    var watched = document.getElementsByClassName('watched-badge');
    var i = watched.length;
    if (i > 1) {
        el[0].click();
        setTimeout(del, 500);
    }
});
collection.item(0).appendChild(btn);