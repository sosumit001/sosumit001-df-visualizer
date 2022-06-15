import arrayEle from "./components/components.array.js";

//draw array element on screen
var ArrIndx = 0;
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

       

