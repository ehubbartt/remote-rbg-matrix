<script>
  import { onMount } from "svelte";
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, set } from "firebase/database";

  let imageInput;
  let canvas;

  // Firebase configuration (replace with your actual config)
  const firebaseConfig = {
    type: import.meta.env.VITE_TYPE,
    project_id: import.meta.env.VITE_PROJECT_ID,
    private_key_id: import.meta.env.VITE_PRIVATE_KEY_ID,
    private_key: import.meta.env.VITE_PRIVATE_KEY,
    client_email: import.meta.env.VITE_CLIENT_EMAIL,
    client_id: import.meta.env.VITE_CLIENT_ID,
    auth_uri: import.meta.env.VITE_AUTH_URI,
    token_uri: import.meta.env.VITE_TOKEN_URI,
    auth_provider_x509_cert_url: import.meta.env
      .VITE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: import.meta.env.VITE_CLIENT_X509_CERT_URL,
    universe_domain: import.meta.env.VITE_UNIVERSE_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
  };

  console.log(firebaseConfig);

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  function clearMatrix() {
    const matrixSize = 64 * 64;
    const blackColor = [0, 0, 0];
    const matrixData = Array(matrixSize).fill(blackColor);

    const dbRef = ref(db, "matrixData");
    set(dbRef, matrixData)
      .then(() => {
        console.log("Matrix cleared successfully!");
      })
      .catch((error) => {
        console.error("Error clearing matrix:", error);
      });
  }

  function handleImageUpload(event) {
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
        set(dbRef, matrixData)
          .then(() => {
            console.log("Matrix updated successfully!");
          })
          .catch((error) => {
            console.error("Error updating matrix:", error);
          });
      };
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
  <button on:click={clearMatrix}>Clear Matrix</button>
  <canvas bind:this={canvas} style="display:none;"></canvas>
</main>

<style>
</style>
