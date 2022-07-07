// ** aboutPage
$("#about-button").on('click',()=>{
    $(".nav-ul").css({
        "--navVar":-20+"%",
    })
})


//**Home page
$("#menu-button").on("click",()=>{
    $(".nav-ul").css({
        "--navVar":-79+"%",
    })
})


// ** visualizer page
$("#visualizer-button").on('click',()=>{
   
    $("#algoListPage").css({
        "top":0+"%",
   
    })
    $("#algo-header").css({
        "width":80+"%",
    })
    $(".nav-ul").css({
        "--navVar":100+"%",
    })
})
// ** viualizer to home
$("#BacktoHome").on('click',()=>{
    $("#algo-header").css({
        "width":60+"%",
    })
    $("#algoListPage").css({
        "top":105+"%",
  
    })
    $(".nav-ul").css({
        "--navVar":-79+"%",
    })
})



$("#code-editor-button").on("click",()=>{
    console.log("asdf")
    $(".nav-ul").css({
        "--navVar":-40+"%",
    })
})

// controls on visualizer page
$("#data-list-header-ul").hover(()=>{
   $("#algo-data-list-scroller").css({
    "opacity":0.9
   })
   $("#data-list-header-ul").on('mouseleave',()=>{
    $("#algo-data-list-scroller").css({
        "opacity":0.4
       })
   })
})