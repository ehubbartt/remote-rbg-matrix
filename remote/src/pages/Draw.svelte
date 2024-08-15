<script>
  import { onMount } from "svelte";
  import { firebaseDb } from "../stores/firebase";
  import { ref, set } from "firebase/database";

  let canvas;
  let ctx;
  let db;
  let isDrawing = false;
  let currentColor = "red";
  const scale = 5; // Updated scale factor to 5 for easier drawing
  let includeBackground = false;
  let lastPos = null; // Store the last position to draw continuous lines

  // Set up the Firebase database reference
  onMount(() => {
    const unsubscribe = firebaseDb.subscribe((value) => {
      db = value;
    });

    ctx = canvas.getContext("2d");
    clearCanvas();

    return () => unsubscribe();
  });

  function startDrawing(event) {
    event.preventDefault(); // Prevent default touch actions like scrolling
    isDrawing = true;
    lastPos = getCanvasPos(event); // Initialize the last position
    draw(event); // Draw the initial point
  }

  function stopDrawing() {
    isDrawing = false;
    lastPos = null; // Reset the last position
  }

  function draw(event) {
    if (!isDrawing) return;
    event.preventDefault(); // Prevent default touch actions while drawing

    const pos = getCanvasPos(event);

    // Draw a line from the last position to the current position
    drawLine(lastPos, pos);
    lastPos = pos; // Update the last position
  }

  function drawLine(from, to) {
    const dx = Math.abs(to.x - from.x);
    const dy = Math.abs(to.y - from.y);
    const sx = from.x < to.x ? 1 : -1;
    const sy = from.y < to.y ? 1 : -1;
    let err = dx - dy;

    while (true) {
      ctx.fillStyle = currentColor;
      ctx.fillRect(from.x, from.y, 1, 1);

      if (from.x === to.x && from.y === to.y) break;
      const e2 = err * 2;
      if (e2 > -dy) {
        err -= dy;
        from.x += sx;
      }
      if (e2 < dx) {
        err += dx;
        from.y += sy;
      }
    }
  }

  function getCanvasPos(event) {
    const rect = canvas.getBoundingClientRect();
    const x =
      (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
    const y =
      (event.touches ? event.touches[0].clientY : event.clientY) - rect.top;

    // Adjust the coordinates based on the scale factor
    return {
      x: Math.floor(x / scale),
      y: Math.floor(y / scale),
    };
  }

  function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function sendDrawing() {
    const imageData = ctx.getImageData(0, 0, 64, 64);
    const pixels = imageData.data;
    const matrixData = [];

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      // If excluding the background, replace white pixels with black
      if (includeBackground || r !== 255 || g !== 255 || b !== 255) {
        matrixData.push([r, g, b]);
      } else {
        matrixData.push([0, 0, 0]); // Black for the background
      }
    }

    const dbRef = ref(db, "matrixData");
    set(dbRef, matrixData);
  }

  function toggleBackground() {
    includeBackground = !includeBackground;
  }

  function setColor(color) {
    currentColor = color;
  }
</script>

<main>
  <h1>Draw on the Canvas</h1>

  <!-- Color Selection -->
  <div class="color-buttons">
    {#each ["red", "orange", "yellow", "green", "blue", "indigo", "violet"] as color}
      <button
        class="color-button"
        style="background-color: {color};"
        on:click={() => setColor(color)}
      ></button>
    {/each}
  </div>

  <!-- Canvas Element -->
  <canvas
    bind:this={canvas}
    width="64"
    height="64"
    style="width: {64 * scale}px; height: {64 *
      scale}px; border: 1px solid black;"
    on:mousedown={startDrawing}
    on:mouseup={stopDrawing}
    on:mouseleave={stopDrawing}
    on:mousemove={draw}
    on:touchstart={startDrawing}
    on:touchend={stopDrawing}
    on:touchmove={draw}
  >
  </canvas>

  <button on:click={sendDrawing}>Send Drawing</button>
  <button on:click={clearCanvas}>Clear Canvas</button>
  <button on:click={toggleBackground} class:active={includeBackground}>
    {includeBackground ? "Exclude Background" : "Include Background"}
  </button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    overflow: hidden;
  }

  .color-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .color-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #000;
    cursor: pointer;
    margin: 5px;
  }

  canvas {
    touch-action: none; /* Prevent default touch actions like scrolling */
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    margin-right: 10px;
  }

  .active {
    background-color: #007bff;
    color: white;
  }
</style>
