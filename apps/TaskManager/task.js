function showTab(id) {
  document.querySelectorAll(".tab").forEach(tab => tab.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Detect hardware
document.getElementById('cpu').textContent = navigator.hardwareConcurrency + " cores";
document.getElementById('ram').textContent = Math.round(navigator.deviceMemory || 4) + " GB";

// Get GPU Info
let gl = document.createElement('canvas').getContext('webgl');
let debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
let gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
document.getElementById('gpu').textContent = gpu;

// Simulated running apps
const apps = ['ZebGX', 'Zeb Store', 'Theme Manager'];
let appList = document.getElementById('app-list');
apps.forEach(app => {
  let li = document.createElement('li');
  li.textContent = `${app} — CPU: ${(Math.random()*10).toFixed(1)}% | RAM: ${(Math.random()*200).toFixed(0)}MB`;
  appList.appendChild(li);
});

// 3D Benchmark
let canvas = document.getElementById("glCanvas");
let glctx = canvas.getContext("webgl");

let fpsElem = document.getElementById("fps");
let ratingElem = document.getElementById("rating");
let frames = 0;
let start = performance.now();

function renderCube() {
  glctx.clearColor(Math.random(), Math.random(), Math.random(), 1);
  glctx.clear(glctx.COLOR_BUFFER_BIT);
  frames++;
  if (performance.now() - start >= 1000) {
    let fps = frames;
    fpsElem.textContent = fps;
    ratingElem.textContent = ratePerformance(fps);
    frames = 0;
    start = performance.now();
  }
  requestAnimationFrame(renderCube);
}

function ratePerformance(fps) {
  if (fps > 50) return "🟢 High (Gaming/Multitasking Ready)";
  if (fps > 30) return "🟡 Medium (Usable for Zeb11)";
  return "🔴 Low (Consider Lite Mode)";
}

renderCube();
