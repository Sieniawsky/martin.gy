$(function() {
    'use strict';

    // Find the root insertion point and all template scripts.
    var root = $('#root');
    var indexTemplate = $('#index-template');
    var aboutTemplate = $('#about-template');
    var contactTemplate = $('#contact-template');

    var noOp = function() {};

    var animateOnce = function(next) {
        root.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', next);
    };

    var render = function(template, listenerAdder) {
        animateOnce(function() {
            root.empty();
            root.append(template.html());
            animateOnce(noOp);
            root.removeClass('fadeOut');
            listenerAdder();
            root.addClass('fadeIn');
        });
        root.addClass('fadeOut');
    };

    var addIndexListeners = function() {
        $('#about-button').click(function() {
            render(aboutTemplate, addBackListener);
        });
        $('#contact-button').click(function() {
            render(contactTemplate, addBackListener);
        });
    };

    var addBackListener = function() {
        $('#back-button').click(function() {
            render(indexTemplate, addIndexListeners);
        });
    };

    // First time load, render the index without animations
    root.append(indexTemplate.html());
    addIndexListeners();
});
