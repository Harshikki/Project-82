canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent="empty";
var last_position_of_x,last_position_of_y

colour = "red";
width_of_line = 2;
radius = 7;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    colour = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius")
    mouseEvent = "mouseDown";
    
}
canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e) 
  {
     mouseEvent = "mouseUP"; 
    } 
    canvas.addEventListener("mouseleave", my_mouseleave);
     function my_mouseleave(e) 
     {
          mouseEvent = "mouseleave";
     }
     canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
   current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
   current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}