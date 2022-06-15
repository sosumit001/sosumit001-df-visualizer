class arrayEle{
    constructor(
        height,
        color,
        index,
    )
    {
        this.height = height,
        this.color = color,
        this.index = index
        this.arrArrayEle = [];
    }

    //method to update height 
    setHeight(val){
        this.height = val;
    }
    decIndex(){
        this.inIndex-=1;
    }
    display(height,svgId,rectClass){
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id",svgId)
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("class",rectClass)
        rect.style.height = height + "%";
        svg.append(rect);
        return svg;
    }
    //fill elements in array
    

}


export default arrayEle;