$(document).ready(function(){
    $('.tab_content').hide();
    $('.tab_content:first-child').show();
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active_1');
        $(this).addClass('active_1');
        const current_tab=$(this).attr('data-attr');
        $('.tab_content').hide();
        $('.'+current_tab).show();
        
    });
});
var video = document.querySelector("#video1");
function playpause() {
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}

var video2 = document.querySelector("#videoo1");
function playpausee() {
    if(video2.paused){
        video2.play();
    }
    else{
        video2.pause();
    }
}