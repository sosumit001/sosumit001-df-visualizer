
class Array{
    constructor(
        svgHeight
        )
    {
        
        this.svgHeight = svgHeight
    }
    displayArrayEle(eleHeight)
    {
        var yTop = this.svgHeight-eleHeight;
        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute("class","array-svg");
        var g = document.createElementNS('http://www.w3.org/2000/svg','g');
        g.setAttribute('class','bar');
        var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute('class','array-rect');
        rect.setAttribute('y',yTop-60)
        rect.setAttribute('height',eleHeight+60);
        var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
        circle.setAttribute('class','array-circle');
        circle.setAttribute('cx',50+"%")
        circle.setAttribute('cy',yTop - 85);
        circle.setAttribute('r',18);

        var text = document.createElementNS('http://www.w3.org/2000/svg','text');
        text.innerHTML = eleHeight;
        text.setAttribute('x',25+"%");
        text.setAttribute('y',yTop - 85);
        text.setAttribute("stroke-width",0.3);
        text.setAttribute('dy',0.3+"em");

       svg.append(rect);
       svg.append(circle);
       svg.append(text);

        return svg;
    }
}

export default Array;