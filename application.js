/*jslint browser: true*/
/*global $, jQuery*/
var main = function () {
    'use strict';
    $('.anchorLink').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1300);
        return false;
    });
};
$(document).ready(main);
