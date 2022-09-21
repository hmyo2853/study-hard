const colorP = document.getElementById("color");
const colorCheaps = Array.from(document.getElementsByClassName("color_option"));
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

function onColorChange(event) {
  ctx.fillStyle = event.target.value;
  ctx.strokeStyle = event.target.value;
}

function onColorClick(event) {
  const colorData = event.target.dataset.color
  ctx.fillStyle = colorData;
  ctx.strokeStyle = colorData;
  colorP.value = colorData;
}
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", changeLineWidth);

colorP.addEventListener("change", onColorChange);
colorCheaps.forEach((color) => color.addEventListener("click", onColorClick));