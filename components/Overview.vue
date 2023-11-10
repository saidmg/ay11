<template>
  <div
    class="content rounded"
    id="overview-content"
    style="background: #0f172a; height: 100%; overflow-y: auto"
  >
    <div class="px-8" style="background: #0f172a; height: 100%; position: relative">
      <div class="flex items-center justify-center w-full mb-12"></div>
      <div class="lamp-wrapper-main noShowSmallScreen">
        <div class="lamp-rope"></div>
        <div class="lamp-inner">
          <div class="lamp-main top-wrapper">
            <div class="lamp-main top-left-wrapper"></div>
            <div class="lamp-main top-right-wrapper right-wrapper"></div>
          </div>
          <div class="lamp-main lamp-center-left"></div>
          <div class="lamp-main lamp-center-right"></div>
          <div class="lamp-main lamp-bottom"></div>
          <div class="lamp-blub"></div>
        </div>
        <div class="lamp-lamp-shadow"></div>
      </div>
      <div style="position: absolute; top: 10px; right: 50px">
        <p class="text-white text-center">Let's make it Accessible!</p>
        <form @input="setLight" class="lamp-input">
          <div class="icon-sun">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-sun"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1
                 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 
                 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 
                 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 
                 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </div>
          <input type="range" id="slider" value="0" min="0" max="10" />
        </form>
      </div>
      <div class="mt-10">&nbsp;</div>
      <div
        ref="infoBox"
        class="mt-5 p-5"
        style="color: #0f172a; z-index: 111111111111; position: relative"
      >
        <div class="mt-10">
          <strong class="font-bold ml-5">Fun fact: </strong>
          <span class="block sm:inline"
            >16% of the world identifies as having a disability. More than 6.2 million
            Canadians live with some form of disability!</span
          >
        </div>
        <div class="px-5" style="color: #0f172a; z-index: 111111111111">
          <p class="font-bold text-xl mb-2 mt-8">
            Web accessibility brings positive outcomes for:
          </p>
          <ul class="text-base mx-6">
            <li>
              <strong>SEO:</strong> Semantic HTML allows you to optimize SEO by making
              your site visible to search engine crawlers.
            </li>
            <li>
              <strong>User trust:</strong> Compliance with all the practices that
              determine web accessibility indicates to visitors that the website owners
              exercise a high degree of care.
            </li>
            <li>
              <strong>Sales funnel:</strong> When it comes to eCommerce sites, the
              convenient location of the components allows you to quickly and efficiently
              guide users through the stages of the sales funnel.
            </li>
            <li>
              <strong>Human rights and equality:</strong> By reducing the level of
              complexity of interfaces, people with disabilities do not experience any
              particular difficulties in finding the functionality they need within the
              website.
            </li>
            <li>
              <strong>Website traffic:</strong> Thanks to the comfortable interface, new
              users naturally become regular visitors.
            </li>
            <li>
              <strong>Protection from legal proceedings:</strong> Since in Canada web
              accessibility is regulated by law, sites that do not achieve web
              accessibility standards are liable to penalties.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const setLight = (e) => {
  document.getElementById("overview-content").setAttribute("data-light", slider.value);
};
</script>
<style scoped>
#overview-content {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
  overflow: hidden;
}
.lamp-wrapper-main {
  position: relative;
  width: 100%;
  justify-content: center;
  display: flex;
}
.lamp-rope {
  position: absolute;
  width: 8px;
  height: 1200px;
  background: #fff;
  bottom: 100%;
  margin: auto;
}
.lamp-inner {
  position: relative;
  width: 140px;
  height: 100px;
  z-index: 2;
}
.lamp-main {
  background-color: #fff;
  transform: skewX(-5deg);
  height: 100px;
  width: 60%;
  position: absolute;
  top: 0;
  left: 0;
}
.lamp-main.top-wrapper {
  background: transparent;
  position: absolute;
  width: 130px;
  height: 20px;
  left: 6px;
  top: -17px;
}
.lamp-main.top-left-wrapper {
  width: 50%;
  height: 20px;
  left: 0;
  top: 0;
  transform: skewX(-5deg);
  border-radius: 80% 0 0 0;
}
.lamp-main.top-right-wrapper {
  width: 50%;
  height: 20px;
  left: 0;
  top: 0;
  transform: skewX(-5deg);
  border-radius: 80% 0 0 0;
}
.lamp-main.right-wrapper {
  transform: skewX(5deg);
  left: auto;
  right: 1px;
  border-radius: 0 80% 0 0;
}
.lamp-main.lamp-center-right {
  transform: skewX(5deg);
  left: auto;
  right: 0;
}
.lamp-main.lamp-bottom:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.lamp-main.lamp-bottom {
  background: linear-gradient(#fffffa, #fdffb2);
  height: 30px;
  width: 150px;
  position: absolute;
  top: auto;
  bottom: -18px;
  left: -5px;
  border-radius: 50%;
  border-top: 3px solid #000;
  border-bottom: 2px solid #000;
}
.lamp-blub {
  position: absolute;
  width: 120px;
  height: 80px;
  top: 10px;
  left: 10px;
  border-radius: 5% 3% 38% 40%;
  background-color: #fdffb2;
  -webkit-filter: blur(15px);
  filter: blur(15px);
  z-index: 2;
  opacity: 0;
  transition: all 300ms;
}
.lamp-lamp-shadow {
  background: linear-gradient(#f0f0d2, #ffffff 30%);
  width: 200vh;
  min-height: 600px;
  position: absolute;
  top: 150%;
  left: auto;
  border-radius: 50% 50% 0 0;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  z-index: 1111111;

  opacity: 0;
  transition: all 300ms;
}
.lamp-input {
  width: 180px;
  padding: 12px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 1px 1px 25px rgb(0 0 0 / 10%);
}
.lamp-input .icon-sun i {
  font-size: 20px;
}
input {
  --c: #0f172a;
  /* active color */
  --g: 2px;
  /* the gap */
  --l: 5px;
  /* line thickness*/
  --s: 20px;
  /* thumb size*/

  width: 100%;
  height: var(--s);
  /* needed for Firefox*/
  --_c: color-mix(in srgb, var(--c), #000 var(--p, 0%));
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
  overflow: hidden;
}

input:focus-visible,
input:hover {
  --p: 25%;
}

input:active,
input:focus-visible {
  --_b: var(--s);
}

/* chromium */
input[type="range" i]::-webkit-slider-thumb {
  height: var(--s);
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 0 0 var(--_b, var(--l)) inset var(--_c);
  border-image: linear-gradient(90deg, var(--_c) 50%, #ababab 0) 1/0 100vw/0
    calc(100vw + var(--g));
  clip-path: polygon(
    0 calc(50% + var(--l) / 2),
    -100vw calc(50% + var(--l) / 2),
    -100vw calc(50% - var(--l) / 2),
    0 calc(50% - var(--l) / 2),
    0 0,
    100% 0,
    100% calc(50% - var(--l) / 2),
    100vw calc(50% - var(--l) / 2),
    100vw calc(50% + var(--l) / 2),
    100% calc(50% + var(--l) / 2),
    100% 100%,
    0 100%
  );
  -webkit-appearance: none;
  appearance: none;
  transition: 0.3s;
}

/* Firefox */
input[type="range"]::-moz-range-thumb {
  height: var(--s);
  width: var(--s);
  background: none;
  border-radius: 50%;
  box-shadow: 0 0 0 var(--_b, var(--l)) inset var(--_c);
  border-image: linear-gradient(90deg, var(--_c) 50%, #ababab 0) 1/0 100vw/0
    calc(100vw + var(--g));
  clip-path: polygon(
    0 calc(50% + var(--l) / 2),
    -100vw calc(50% + var(--l) / 2),
    -100vw calc(50% - var(--l) / 2),
    0 calc(50% - var(--l) / 2),
    0 0,
    100% 0,
    100% calc(50% - var(--l) / 2),
    100vw calc(50% - var(--l) / 2),
    100vw calc(50% + var(--l) / 2),
    100% calc(50% + var(--l) / 2),
    100% 100%,
    0 100%
  );
  -moz-appearance: none;
  appearance: none;
  transition: 0.3s;
}

@supports not (color: color-mix(in srgb, red, red)) {
  input {
    --_c: var(--c);
  }
}

#overview-content[data-light^="1"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.1;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.9;
  }
}

#overview-content[data-light^="2"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.2;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.8;
  }
}

#overview-content[data-light^="3"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.3;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.7;
  }
}

#overview-content[data-light^="4"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.4;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.6;
  }
}

#overview-content[data-light^="5"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.5;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.5;
  }
}

#overview-content[data-light^="6"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.6;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.4;
  }
}

#overview-content[data-light^="7"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.7;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.3;
  }
}

#overview-content[data-light^="8"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.8;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.2;
  }
}

#overview-content[data-light^="9"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 0.9;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0.1;
  }
}

#overview-content[data-light="10"] {
  .lamp-blub,
  .lamp-lamp-shadow {
    opacity: 1;
  }
  .lamp-main.lamp-bottom:before {
    opacity: 0;
  }
}
</style>
