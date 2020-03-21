import Highway from "@dogstudio/highway";
import Fade from "./transition";

const h = new Highway.Core({
  transitions: {
    default: Fade
  }
});
