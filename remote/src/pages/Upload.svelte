<script>
  import { onMount } from "svelte";
  import { firebaseDb } from "../stores/firebase";
  import { ref, set } from "firebase/database";
  let imageInput;
  let canvas;
  let db;

  // Subscribe to the Firebase database reference
  onMount(() => {
    const unsubscribe = firebaseDb.subscribe((value) => {
      db = value;
    });

    return () => unsubscribe();
  });

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const ctx = canvas.getContext("2d");
        canvas.width = 64;
        canvas.height = 64;
        ctx.drawImage(img, 0, 0, 64, 64);

        const imageData = ctx.getImageData(0, 0, 64, 64);
        const pixels = imageData.data;
        const matrixData = [];

        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          matrixData.push([r, g, b]);
        }

        const dbRef = ref(db, "matrixData");
        set(dbRef, matrixData);
      };
      // @ts-ignore
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
</script>

<main>
  <h1>Upload a 64x64 Image</h1>
  <input
    type="file"
    bind:this={imageInput}
    accept="image/*"
    on:change={handleImageUpload}
  />
  <canvas bind:this={canvas} style="display:none;"></canvas>
</main>
