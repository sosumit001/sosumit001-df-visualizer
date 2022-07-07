
import Array from "../array/component.array.js";
import { Node, bstSvg } from "../binary/component.bst.js";
import LinkedListItem from "../linkedlist/component.linkedlist.js";
var btnActive = true;
var isLight = true;
var sideNav = true;

//editor
var userInput = `#include<iostream>
using namespace std;
int main()
{
    //write your logic
    
    return 0;
}
`

var editor = ace.edit("code-editor-display");

editor.setTheme("ace/theme/tomorrow_night_bright");
editor.session.setMode("ace/mode/c_cpp");
editor.setValue(userInput)
editor.gotoLine(6);



$('.run-user-code').on('click',()=>{
    $.ajax({
       
        url: "https://codex-api.herokuapp.com/",
        method:"POST",
        data: {
            code: editor.getSession().getValue(),
            language: "cpp",
            input: "Hello\nWorld",
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
     
        success: function (response) {
            console.log(response.output)
            $('#code-editor-output').text(response.output);
       
        }
    });
})

//in - out editor
$('.fa-code').on('click', () => {
    $('#arrayContainer').css("filter","brightness(30%)")
    if (sideNav) {
        $('#visualizer-codeEditor').animate({
            "right":630 + 'px',
            "background":"yellow"
        },600)
        $('#editorDataflow').animate({
            "right":10 + "px",
            "width": 600 + "px"
        })
    
        sideNav = false;
    }
    else {
        $('#arrayContainer').css("filter","brightness(100%)")
        $('#visualizer-codeEditor').animate({
            "right":30 + 'px',
        })
        $('#editorDataflow').animate({
            "right": -50 + "%",
            "width": 0 + "px"
        },600)
        sideNav = true;
    }
})






// loader animations
setTimeout(() => {
    $("#visualizer-loader").css({
        "opacity": 0
    })
    setTimeout(() => {
        $("#visualizer-loader").css({
            "display": "none"
        })
    }, 500);


}, 2500);
//theme-on-ff
$('.fa-moon').click(() => {
    if (isLight) {
        $(':root').css({
            '--text-color': "grey",
            '--background': 'var(--background_1)',
            '--array-display': 'var(--array-display_1)',
            '--common-page-theme-color': 'var(--common-page-theme-color_1)'
        })
        isLight = false;
    }
    else {
        $(':root').css({
            '--text-color': '#a39999ab',
            '--background': '#DCDCDC',
            '--array-display': '#ebebeb',
            '--common-page-theme-color': 'rgb(34,34,34)'
        })
        isLight = true;
    }
})
//left array content
$('.content-scroller-menu').on('click', () => {
    if (sideNav) {
        $('#arrayContainer').css("filter","brightness(30%)")
        $('.content-scroller-menu').animate({
            "right": 390 + "px"
        })
        $('#sideContentScroller').animate({
            "right": 0 + "%",
            "width": 373 + "px"
        })
        $('.content-scroller-menu').find('div').each((i, e) => {
            if (i == 0) e.style = "transform:rotate(40deg);"
            if (i == 1) e.style = "transform:rotate(-40deg);"
        })
        sideNav = false;
    }
    else {
        $('#arrayContainer').css("filter","brightness(100%)")
        $('.content-scroller-menu').animate({
            "right": 30 + "px"
        })
        $('#sideContentScroller').animate({
            "right": -50 + "%",
            "width": 0 + "px"
        })
        $('.content-scroller-menu').find('div').each((i, e) => {
            if (i == 0) e.style = "transform:rotate(0deg);"
            if (i == 1) e.style = "transform:rotate(0deg);"
        })
        sideNav = true;
    }
})

//1. array operationsss
$('.arrayOpToggle').on('click', () => {
    if (btnActive) {
        $("#array-operation").css("display", "flex")
        btnActive = false;
    }
    else {
        $("#array-operation").css("display", "none")
        btnActive = true;
    }
})
var arrayObj = new Array(300)

function printArrSvg(enterVal) {
    var arrL = $('#arrayDisplay svg').length;
  
    if(arrL <= 15)
    {
        $(".arrLen").html(arrL + 1)
        $('.array-index').append(`<li> [ ${arrL} ] </li>`);
       var svg = arrayObj.displayArrayEle(enterVal);
        $("#arrayDisplay").append(svg)
    }
    
    $(svg).animate({
        height: 300 + "px"
    }, 600)
    
}

//sorting of array
//1.(i) selection sort
$('.selection-sort').click(() => {
    var arrList = $('.array-svg');

})

$('.array-insert-ele').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        var enterVal = $('.array-insert-ele').val();

        if (enterVal) {
            printArrSvg(enterVal);
        }
        $('.array-insert-ele').val('');
    }

});

$(document).ready(() => {
    $('#arrayDisplay').find('svg').remove();
    $('.array-index').find('li').remove();
    for (let i = 0; i < parseInt(2 * Math.random() + 5); i++) {
        var input = parseInt(Math.random() * 90) + 1;
        printArrSvg(input);
    }
})
$(".array-rand").click(() => {
    $('#arrayDisplay').find('svg').remove();
    $('.array-index').find('li').remove();
    for (let i = 0; i < parseInt(2 * Math.random() + 5); i++) {
        var input = parseInt(Math.random() * 90) + 1;
        printArrSvg(input);
    }
})



//2. there comes bst part

//insert element
const testsvg = new bstSvg(45, 2);

//search element
$("#bst-insert-btn").on('click', () => {
    34
    var inpVal = parseInt($("#bst-input-ele").val());

    var svg = testsvg.insert(inpVal);

    //animate svg
    $("#bstDisplayFrame").append(svg);


    $("svgObject").find("svg").remove('.bst-svg-effect');

    $(".bst-svg").last().animate({
        opacity: 1,
        height: 45 + "px",
        width: 45 + "px",
        backgroundColor: "yellow"
    }, 800, () => { });
    if ($("#bstDisplayFrame svg").length > 1) {
        setTimeout(() => {
            var line = testsvg.creatLine("bst-svg-line");
            $("#bstDisplayFrame").append(line);


        }, 800);
    }


})

