const ctx = document.getElementById("canvas").getContext("2d");
ctx.font = "30px Arial";

/**
 * Write a text
 * 
 * @param text What you want to write
 * @param x Where you want to write it: x position
 * @param y Where you want to write it: y position 
 */
function DrawText(text, x, y) {
    ctx.fillText(text, x, y);
}

/**
 * Draw a line
 * 
 * @param x1 Start point: x position
 * @param y1 Start point: y position
 * @param x2 End point: x position
 * @param y2 End point: y position
 * @param lineWidth Width of line
 */
function DrawLine(x1, y1, x2, y2, lineWidth = 1) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

/**
 * Draw a rectangle
 */
function DrawRect(lefttop_x, lefttop_y, rightbottom_x, rightbottom_y) {
    ctx.fillRect(lefttop_x, lefttop_y, rightbottom_x-lefttop_x, rightbottom_y-lefttop_y);
}

/**
 * Draw a circle
 */
function DrawCircle(center_x, center_y, radius) {
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

/**
 * Set font for next text
 */
function SetFont(text) {
    ctx.font = text;
}

/**
 * Set color for next texture
 */
function SetColor(color) {
    ctx.fillStyle = color;
}

//------------------------------------
// Play here!!!
//------------------------------------