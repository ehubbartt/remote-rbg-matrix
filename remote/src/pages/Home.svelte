<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, get, set } from "firebase/database";
  import { firebaseDb } from "../stores/firebase";
  let isOn = false;

  let db;

  onMount(() => {
    const unsubscribe = firebaseDb.subscribe((value) => {
      db = value;
    });

    const fetchIsOnState = async () => {
      const isOnRef = ref(db, "isOn");
      const snapshot = await get(isOnRef);
      isOn = snapshot.exists() ? snapshot.val() : false;
    };

    fetchIsOnState();

    return () => unsubscribe();
  });

  async function toggleOnOff() {
    const isOnRef = ref(db, "isOn");
    isOn = !isOn;
    await set(isOnRef, isOn);
  }
</script>

<main>
  <div class="button-container">
    <button class="button" on:click={toggleOnOff}>
      {isOn ? "Turn Off" : "Turn On"}
    </button>
    <Link to="upload" class="button">Upload Image</Link>
    <Link to="draw" class="button">Draw Image</Link>
    <!-- <Link to="presets" class="button">Choose Preset</Link> -->
  </div>
</main>

<style>
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .button {
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }

  .button:active {
    background-color: #0056b3;
  }
</style>
