<template>
    <div :className="className" :style="containerStyle">
      <canvas :id="id" ref="spline" :style="canvasStyle"></canvas>
    </div>
</template>
<script>
import "../data/three.js";
import { SpeRuntime } from  "../data/spline-runtime.js";

export default {
  props: {
    id: {
      type: String,
    },
    scene: {
      type: Object,
    },
    className: {
      type: String,
    },
    canvasStyle: {
      type: Object,
      default: () => {
        return { height: "100%", width: "100%", outline: "none" };
      },
    },
    containerStyle: {
      type: Object,
      default: () => {
        return {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        };
      },
    },
  },
  mounted() {
    new SpeRuntime(this.scene, {} ,{}, this.$refs.spline).run();
  },
};

</script>