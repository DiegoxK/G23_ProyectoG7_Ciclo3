<template>
  <div>
    <center>
      <a href="/"
        ><img
          id="yey"
          src="../assets/images/Successfull/downloadassad.jpg"
          alt=""
          class="img-fluid"
      /></a>
    </center>
    <SPAN>Adopcion Successfully!!!!</SPAN>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "index",
  components: {
    Footer,
  },
};
</script>

<style>
#yey {
  border-radius: 150px;
  padding: 20px;
  height: 550px;
}
html {
  --color: red;
  display: grid;
  place-items: center;
  min-height: 100vh;
  font-family: "Dosis", monospace;
  font-weight: 900;
  font-size: min(10vw, 125px);
  text-align: center;
  background: radial-gradient(circle, var(--color) 2px, #111 2px);
  background-size: 20px 20px;
  color: #111;
  text-shadow: 0 0 1px gold, 0 0 1px gold, 0 0 1px gold, 0 0 1px gold,
    0 0 1px gold, 0 0 10px black;
  perspective: 600px;
  animation: colorSwap 2s linear infinite;
}

body {
  animation: tilt 10s linear infinite;
}
@keyframes tilt {
  25% {
    transform: rotateX(25deg) rotateY(25deg);
  }
  50% {
    transform: rotateX(25deg) rotateY(-25deg);
  }
  75% {
    transform: rotateX(-25deg) rotateY(25deg);
  }
}

span {
  display: block;
  font-size: min(30vw, 350px);
  line-height: 75%;
  color: transparent;
  text-shadow: 0 0 1px var(--color), 0 0 50px var(--color),
    0 0 100px var(--color);
  animation: colorSwap 2s linear infinite;
}
@keyframes colorSwap {
  25% {
    --color: cyan;
  }
  35% {
    --color: rgb(217, 255, 0);
  }
  45% {
    --color: rgb(255, 38, 0);
  }
  55% {
    --color: rgb(255, 181, 218);
  }
  50% {
    --color: magenta;
  }
  65% {
    --color: rgb(71, 219, 162);
  }
  75% {
    --color: lime;
  }
  85% {
    --color: rgb(0, 4, 255);
  }
  95% {
    --color: rgb(255, 145, 0);
  }
}
</style>
