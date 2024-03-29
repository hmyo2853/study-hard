const saveBtn = document.getElementById("save-btn");
const textInput = document.getElementById("text");
const modeBtn = document.getElementById("mode-btn");
const eraserBtn = document.getElementById("erase-btn");
const colorP = document.getElementById("color");
const fileInput = document.getElementById("file-input")
const colorCheaps = Array.from(document.getElementsByClassName("color_option"));
const lineWidth = document.getElementById("lineWidth");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.height = CANVAS_WIDTH;
canvas.width = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;

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

function onModeChange() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function setFillCanvas() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onEraser() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function() {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  }
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    const saveLine = ctx.lineWidth;
    ctx.lineWidth = 1;
    ctx.font = "48px serif"
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.lineWidth = saveLine;
  }
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mousedown", setFillCanvas);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", changeLineWidth);

colorP.addEventListener("change", onColorChange);
colorCheaps.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeChange);
eraserBtn.addEventListener("click", onEraser);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);