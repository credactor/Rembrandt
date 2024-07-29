M.AutoInit();

$('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: Infinity
});

$(document).ready(function () {
    $('.carousel').carousel();
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
});