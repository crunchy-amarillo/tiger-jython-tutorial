function init() {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = $(this).data('include');
        $(this).load(file, function () {
            $('ul.nav li.nav-item.active').each(function () { $(this).removeClass('active'); });
            const page = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            $('ul.nav li.nav-item a').each(function () {
                if (page === $(this).attr('href')) {
                    $(this).addClass('active');
                }
            });
        });
    });
}

function docReady() {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(init, 1);
    } else {
        document.addEventListener("DOMContentLoaded", init);
    }
}

docReady();
