
class LinkedListItem {
    constructor(
        val
    ){
     
        this.val = val,
        this.head = null;
        this.size = 0;
        this.prevCord = {x : null,y:null};
    }



    creatNode(val){
        var node = {val :val, next: null};
        return node;
    }
    svgItem(val){
        var g = document.createElementNS('http://www.w3.org/2000/svg','g');
        g.setAttribute("id","linkedlist-g");

        var text = document.createElementNS('http://www.w3.org/2000/svg','text');
        text.append(val)
      
        text.setAttribute("x","7.5%"),
        text.setAttribute("y","80"),
        text.setAttribute("class","small");

        var rect_1 = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect_1.setAttribute("x","5%"),
        rect_1.setAttribute("y","50"),
        rect_1.setAttribute("class","link-rect");

        var rect_2 = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect_2.setAttribute("x","5%"),
        rect_2.setAttribute("y","100"),
        rect_2.setAttribute("class","link-rect");

       
        g.append(rect_1);
        g.append(rect_2);
        g.append(text);

        return g;
    }
    insertEle(val)
    {
        var newNode = this.creatNode(val);
        if(this.head == null)
        { 
            this.head = newNode
            return this.svgItem(val);
        }
        
        else
        {
            var temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
           
            temp.next = newNode;
            return this.svgItem(val);

        }
    }
}



export default LinkedListItem;