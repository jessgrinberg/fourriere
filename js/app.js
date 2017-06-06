$('#myTab').tabCollapse();

var selectIds = $('#collapseOne,#collapseTwo,#collapseThree');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    var x = $(this).width();
    if (y > 300 && x < 415) {
        $('.cta-bottom').fadeIn();
    } else {
        $('.cta-bottom').fadeOut();
    }

});

var contactBoxTimeout = window.setTimeout(function() {
    var x = $(this).width();
    if(x > 415) {
        document.getElementById('alert-box').style.display = "block";
    }
}, 4500); 
