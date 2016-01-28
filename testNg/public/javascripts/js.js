/**
 * Created by 37DU on 2015/11/4.
 */

/*$(document).ready(function(){
    var $nav_a=$('nav ul a');
    for(var i=0;i<$nav_a.length;++i)
    {
        $nav_a.eq(i).width()+32;
       // $nav_a.eq(i).css("backgroundImage","url(../images/nav_cur_bg.gif)");
    }
});*/
/*

window.onload=initAll;
var i=1;
var lenImg=4;
//var oSliderImg=document.getElementById('slider_img');

function initAll(){
    //var oSliderImg=document.getElementById('slider_img');
    document.getElementsByClassName('prev_img')[0].onclick=prev_img;
    document.getElementsByClassName('next_img')[0].onclick=next_img;

}
//{

function prev_img(){
    if(i==1){
        i=lenImg+1;
    }
    --i;
    var oSliderImg=document.getElementById('slider_img');

    oSliderImg.firstElementChild.src='images/slider'+ i.toString()+'.jpg';
    //return false;
    }
function next_img(){
    ++i;
    if(i==lenImg+1){
        i=1;
    }
    var oSliderImg=document.getElementById('slider_img');
    oSliderImg.firstElementChild.src='images/slider'+ i.toString()+'.jpg';
    //return false;
    }
//};
*/



$(document).ready(function(){

    NengJi.initNav();//导航栏效果
    NengJi.initSlider();//图片翻转效果

});

NengJi={};

NengJi.initNav=function() {
    $('nav > ul > li').mouseenter(function()
    {
        $(this).find('ul').stop().slideDown(200);
    }).mouseleave(function()
    {
        $(this).find('ul').stop().slideUp(200);
    });
};

NengJi.initSlider=function(){
    var lenImg=4;
    var i=1;
    var $oSliderImg=$("#slider_img img");
    var $oPrevImg=$('.prev_img')[0];
    var $oNextImg=$('.next_img')[0];

    $oPrevImg.onclick=function () {
        --i;
        if(i==0){
            i=lenImg;
        }
        $oSliderImg.attr({'src':'images/slider'+ i.toString()+'.jpg','alt':'slider'+ i.toString()});
    };
    $oNextImg.onclick=function(){
        ++i;
        if(i==lenImg+1){
            i=1;
        }
        $oSliderImg.attr({'src':'images/slider'+ i.toString()+'.jpg','alt':'slider'+ i.toString()});
    };
};