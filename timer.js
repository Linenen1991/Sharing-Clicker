// ==UserScript==
// @name         Sharing timer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.sharing.com.tw/share/main
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function Ticker()
    {
        if(new Date().getTime() < 1672365600030)
            setTimeout(Ticker,10);
        else
            document.querySelectorAll('.record__btns__btn.record__btns__btn--green')[0].click();
    }
    setTimeout(Ticker,10);
})();
