import arrayEle from "../array/components.array.js";
import {Node , bstSvg }from "../binary/component.bst.js";


// loader animations
setTimeout(() => {
    $("#visualizer-loader").css({
        "opacity":0
    })
   setTimeout(() => {
    $("#visualizer-loader").css({
        "display":"none"
    })
   }, 500);
    

}, 2500);


function arrEleOnScreen(val)
{
    var arrEle = new arrayEle(val,"black",0);
    var arrSvg = arrEle.display(0,"array-svg-element","array-rect")

    //display arrayElement
    $("#arrDisplayFrameContainer").append(arrSvg);
    $(".array-rect").last().animate({
        height:arrEle.height+"%"
    },200,()=>{
    })
    $("#array-enteries").val("")
}

//push()=> array
$("#array-add-btn").on('click',()=>{
    var arrayInp = parseInt($("#array-enteries").val());
        if(arrayInp <=80 && arrayInp > 0)
        {
            arrEleOnScreen(parseInt(arrayInp) + 10);
        }
        if(arrayInp > 80){
            $("#array-enteries").val("")
            alert("Please enter <= 80");
        }
})

//pop() => array
$("#array-remove-btn").on('click',()=>{
    if($(".array-rect")){
        $(".array-rect").last().animate({
            height:0+"%",
        },200,()=>{
        })
       setTimeout(()=>{
        $("#arrDisplayFrameContainer").find("svg:last").remove();
       },850)
    }
})

//genrate random array
$("#array-random-btn").on('click',()=>{
    $("#arrDisplayFrameContainer").find("svg").remove();
    var rArrayInp = [];
    for(let i = 0;i<5;i++){
        rArrayInp.push(70*Math.random()+10);
    }
    for(let i = 0;i<5;i++)
    {
        arrEleOnScreen(rArrayInp[i]);
    }
})

 //2. there comes bst part

 //insert element
 const testsvg = new bstSvg(45,2);

//search element
$("#bst-insert-btn").on('click',()=>{34
    var inpVal = parseInt($("#bst-input-ele").val());
  
    var svg = testsvg.insert(inpVal);
   
    //animate svg
    $("#bstDisplayFrame").append(svg);
    

    $("svgObject").find("svg").remove('.bst-svg-effect');

    $( ".bst-svg" ).last().animate({
        opacity: 1,
        height:45 + "px",
        width :45 + "px",
        backgroundColor:"yellow"
    }, 800,()=> {});
    if( $("#bstDisplayFrame svg").length>1){
        setTimeout(() => {
            var line = testsvg.creatLine("bst-svg-line");
            $("#bstDisplayFrame").append(line);
            

        }, 800);
    }
   
  
})

// ** aboutPage
$("#about-button").on('click',()=>{
    $(".nav-ul").css({
        "--navVar":-20+"%",
    })
})