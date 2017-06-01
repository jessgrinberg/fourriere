$('#myTab').tabCollapse();

var selectIds = $('#collapseOne,#collapseTwo,#collapseThree');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
});
