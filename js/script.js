$(function () {
    var topBtn = $('#page-top');
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


var cls1 = document.querySelectorAll('.cls-1');
var anime = function(){
  new Vivus('svg-animation', {
    //type: 'scenario-sync',
    type:'oneByOne',
    duration: 120,
    start: 'autostart',
    forceRender: false,
    animTimingFunction:Vivus.EASE
  },function(obj){
    obj.el.classList.add('finished');
  });
}

anime();
