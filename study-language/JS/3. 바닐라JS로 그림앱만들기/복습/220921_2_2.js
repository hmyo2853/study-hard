const lineWidth = document.getElementById("lineWidth");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.height = 800;
canvas.width = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMouseMove(event){
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting(){
  isPainting = true;
}
function stopPainting() {
  isPainting = false;
}
function changeLineWidth(event) {
  ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", changeLineWidth);