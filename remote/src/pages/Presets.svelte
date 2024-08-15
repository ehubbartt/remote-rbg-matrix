<script>
  import { firebaseDb } from "../stores/firebase";
  import { ref, set } from "firebase/database";
  import { onMount } from "svelte";

  let db;

  // Subscribe to the Firebase database reference
  onMount(() => {
    const unsubscribe = firebaseDb.subscribe((value) => {
      db = value;
    });

    return () => unsubscribe();
  });

  function sendPreset(presetData) {
    const dbRef = ref(db, "matrixData");
    set(dbRef, presetData);
  }

  const presets = [
    { name: "Preset 1", data: "/* matrix data for preset 1 */" },
    { name: "Preset 2", data: "/* matrix data for preset 2 */" },
    // Add more presets as needed
  ];
</script>

<main>
  <h1>Choose a Preset</h1>
  {#each presets as preset}
    <button on:click={() => sendPreset(preset.data)}>{preset.name}</button>
  {/each}
</main>
