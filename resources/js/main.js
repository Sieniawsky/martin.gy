$(function() {

    // Find the root insertion point and
    // all template scripts.
    var root = $('#root');
    var indexTemplate = $('#index-template');
    var aboutTemplate = $('#about-template');
    var contactTemplate = $('#contact-template');

    var addBackListener = function() {
        $('#back-button').click(function() {
            renderIndex();
        });
    };

    var renderAbout = function() {
        root.empty();
        root.append(aboutTemplate.html());
        addBackListener();
    };

    var renderContact = function() {
        root.empty();
        root.append(contactTemplate.html());
        addBackListener();
    };

    var renderIndex = function() {
        root.empty();
        root.append(indexTemplate.html());

        $('#about-button').click(function() {
            renderAbout();
        });

        $('#contact-button').click(function() {
            renderContact();
        });
    };

    // First time load, render the index
    renderIndex();
});