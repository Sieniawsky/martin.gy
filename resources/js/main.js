$(function() {
    'use strict';

    // Find the root insertion point and all template scripts.
    var root = $('#root');
    var indexTemplate = $('#index-template');
    var aboutTemplate = $('#about-template');
    var contactTemplate = $('#contact-template');

    var addIndexListeners = function() {
        $('#about-button').click(renderAbout);
        $('#contact-button').click(renderContact);
    };

    var addBackListener = function() {
        $('#back-button').click(renderIndex);
    };

    var animateOnce = function(next) {
        root.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', next);
    };

    var renderAbout = function() {
        animateOnce(function() {
            root.empty();
            root.append(aboutTemplate.html());
            animateOnce(addBackListener);
            root.removeClass('fadeOut');
            root.addClass('fadeIn');
        });
        root.addClass('fadeOut');
    };

    var renderContact = function() {
        animateOnce(function() {
            root.empty();
            root.append(contactTemplate.html());
            animateOnce(addBackListener);
            root.removeClass('fadeOut');
            root.addClass('fadeIn');
        });
        root.addClass('fadeOut');
    };

    var renderIndex = function() {
        animateOnce(function() {
            root.empty();
            root.append(indexTemplate.html());
            animateOnce(addIndexListeners);
            root.removeClass('fadeOut');
            root.addClass('fadeIn');
        });
        root.addClass('fadeOut');
    };

    // First time load, render the index without animations
    root.append(indexTemplate.html());
    addIndexListeners();
});
