<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Upload from "./pages/Upload.svelte";
  import Draw from "./pages/Draw.svelte";
  import Presets from "./pages/Presets.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="upload" component={Upload} />
  <Route path="draw" component={Draw} />
  <Route path="presets" component={Presets} />
</Router>
