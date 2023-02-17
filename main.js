// ==UserScript==
// @name         sharing clicker
// @namespace    http://tampermonkey.net/
// @version      0.15
// @description  try to take over the world!
// @author       You
// @match        https://www.sharing.com.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function ClickStarBuck()
    {
        var nextfun = ClickStarBuck;
        document.title = "CheckPeople";
        try
        {
            if(document.querySelectorAll('.popup__inner__box__btn.books-popup-close').length > 0)
            {
                document.querySelectorAll('.popup__inner__box__btn.books-popup-close')[0].click();
                nextfun = TimeoutClick;
            }
        }
        catch( e)
        {
            //alert(e);
        }
        finally
        {
            //console.log(new Date);
            setTimeout(nextfun,50);
        }
    }
    function TimeoutClick()
    {
        var fun = TimeoutClick;
        document.title = "Clicking";
        try
        {
            if(document.querySelectorAll('.popup-redeem--redeem__container__btns__btn.popup-redeem--redeem__container__btns__btn--confirm')[0].checkVisibility() == true)
            {
                //alert("Click");
                //document.querySelectorAll('.popup-redeem--redeem__container__btns__btn.popup-redeem--redeem__container__btns__btn--confirm')[0].click();
                fun = ClickStarBuck;
                return;
            }

            if(document.querySelectorAll('.record-redeem.record__container')[0].children[4].onclick != null)
            {
                document.querySelectorAll('.record-redeem.record__container')[0].children[4].click();
                return;
            }

            console.log("Non entry");
        }
        catch( e)
        {
            //alert(e);
        }
        finally
        {
            setTimeout(fun,50);
        }

    }
    setTimeout(TimeoutClick,50);
    // Your code here...
})();
