
//create node ..
class Node {
    constructor(
        data
    ){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//bst structure
class bstStruct{
    constructor(svg)
    {
        this.svg = svg;
        this.left = null;
        this.right = null;
    }
}

//create bst
class bstSvg{
    constructor(
        marginLeft,
        positionTop
    )
    {
       this.currentNode = null;
       this.marginLeft = marginLeft;
       this.positionTop = positionTop;
       this.root = null;
       this.structure = null;
       this.cordnates = {x1:this.marginLeft,y1:this.positionTop, x2: "", y2:"" };
  
    }
    creatSvg(intVal){
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
        svg.setAttribute("class","bst-svg");
        svg.setAttribute("id",`node_id=${intVal}`);
        svg.style.cssText = `margin-left:${this.marginLeft}%; top:${this.positionTop}%`;
        var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.innerHTML = intVal;
      if(intVal>10)
      {
        text.setAttribute("x","30%");
        text.setAttribute("y","60%");
      }
      else
      {
        text.setAttribute("x","40%");
        text.setAttribute("y","60%");
      }
        
        svg.append(text);
        this.currentNode = svg;
        return this.currentNode;
    }
    
    creatLine(commonClass){
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
        svg.setAttribute("class",commonClass);
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("x1",`${this.cordnates.x1}%`);
        line.setAttribute("y1",`${this.cordnates.y1}%`);
        line.setAttribute("x2",`${this.cordnates.x2}%`);
        line.setAttribute("y2",`${this.cordnates.y2}%`);
        line.setAttribute("id","bstSvgLine");
        svg.append(line);
        return svg;
    }

    //displaceLeft 
   
    insertNode(node,newNode,newBranch)
    {
      
     //insert in left
     if(newNode.data < node.data)
     {

         if(node.left === null)
         {
            this.cordnates.y1 = this.positionTop;
            this.cordnates.x1 = this.marginLeft;
            this.positionTop +=9;
            this.cordnates.y2 = this.positionTop;
            if(this.positionTop == 11){
                this.cordnates.y2 = this.positionTop;
                 this.marginLeft -= 9;
                 this.cordnates.x2 =this.marginLeft;
            }
            this.marginLeft -= 7;
            this.cordnates.x2 =this.marginLeft;
             node.left = newNode;
             newBranch.left= new bstStruct(this.currentNode);
             return;
         }
         else 
         {
            this.positionTop +=9;
            if(this.positionTop == 11)
            this.marginLeft -= 9;
            this.marginLeft -= 7;
            
            this.insertNode(node.left,newNode,newBranch.left);
         }
     }
     //insert in right
      //insert in left
      if(newNode.data > node.data)
      {
     
          if(node.right === null)
          {
           
            this.cordnates.y1 = this.positionTop;
            this.cordnates.x1 = this.marginLeft;
            this.positionTop +=9;
            this.cordnates.y2 = this.positionTop;
            if(this.positionTop == 11){
                this.cordnates.y2 = this.positionTop;
                 this.marginLeft += 9;
                 this.cordnates.x2 =this.marginLeft;
            }
            this.marginLeft += 7;
            this.cordnates.x2 =this.marginLeft;
              node.right = newNode;
              newBranch.right = new bstStruct(this.currentNode)
              return;
          }
          else 
          {
            this.positionTop +=9;
            if(this.positionTop == 11)
            this.marginLeft += 9;
            this.marginLeft += 7;
              this.insertNode(node.right,newNode,newBranch.right);
          }
      }
     
    }
    //insert data 
   insert(data){
    var newNode = new Node(data);
    this.currentNode = this.creatSvg(data);
    var newBranch = new bstStruct(this.currentNode);
    if(this.root == null)
    {
        this.root = newNode;
        this.structure = newBranch;
        return this.currentNode;
    }
    else 
    {
        
        this.insertNode(this.root,newNode,this.structure)
        var svg = this.creatSvg(data);
        this.marginLeft = 45;
        this.positionTop = 2;
        return svg;
    }
   }
   
    
}

export { Node, bstSvg}