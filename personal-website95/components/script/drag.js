dragElement(document.getElementById('draggable-elem'));

function dragElement(elm){
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;
    if(document.getElementById(elm.id + 'drag')){
        document.getElementById(elm.id + 'drag').onmousedown = DragMouseDown;
    }
    else{
        elm.onmousedown = DragMouseDown;
    }

    function DragMouseDown(e){
        e = e || window.event;
        e.preventDefault;

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

   function elementDrag(e){
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elm.style.top = (elm.offsetTop - pos2) + "px";
        elm.style.left = (elm.offsetLeft - pos1) + "px";
    }

    function closeDragElement(){
        document.onmouseup = null;
        document.onmousemove = null;
    }

}