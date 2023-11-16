<template>
  <div class="my-5 rounded">
    <h2 class="font-bold text-xl mb-2 text-gray-700 text-center dark:text-white">Perceivable</h2>
    <div>
      <div class="px-1 mx-1 py-2">
        <nav class="accordion arrows">
          <input type="radio" name="accordion" id="cb1" />
          <section class="box">
            <label class="box-title dark:text-slate-900" for="cb1" style="width: 100%"
              >Guideline 1.1 Text Alternatives</label
            >
            <label class="box-close" for="acc-close"></label>
            <div class="box-content m-2">
              <span class="text-gray-700">
                Provide text alternatives for any non-text content so that it can be
                changed into other forms people need, such as large print, braille,
                speech, symbols, or simpler language.</span
              >
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section class="box">
            <label class="box-title dark:text-slate-900" for="cb2" style="width: 100%"
              >Guideline 1.4 Distinguishable</label
            >
            <label class="box-close" for="acc-close"></label>
            <div class="box-content m-2">
              <span class="text-gray-700">
                Make it easier for users to see and hear content including separating
                foreground from background.</span
              >
              <ul class="text-gray-700 mt-5">
                <li>
                  Color is not used as the only way of conveying information or
                  identifying content
                </li>
                <li>
                  Default foreground and background color combinations provide sufficient
                  contrast
                </li>
                <li>
                  When users resize text up to 200% or change text spacing, no information
                  is lost
                </li>
                <li>
                  Text reflows in small windows ("viewports") and when users make the text
                  larger
                </li>
                <li>
                  Images of text are resizable, replaced with actual text, or avoided
                  where possible
                </li>
                <li>
                  Users can pause, stop, or adjust the volume of audio that is played on a
                  website
                </li>
                <li>
                  Background audio is low or can be turned off, to avoid interference or
                  distraction
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
li {
  list-style: square;
}

[role="listitem"] {
  display: list-item;
}

.pretend-ul [role="listitem"] {
  list-style: disc; /* default bullet */
}

/* a nested list should have a different glyph */
.pretend-ul [role="listitem"] [role="listitem"] {
  list-style: circle;
}

/* and etc. */
.pretend-ul [role="listitem"] [role="listitem"] [role="listitem"] {
  list-style: square;
}

.accordion {
  margin: auto;
  width: 100%;
}
.accordion input {
  display: none;
}
.box {
  position: relative;
  background: white;
  height: 64px;
  transition: all 0.15s ease-in-out;
}
.box::before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
}
header.box {
  background: #00bcd4;
  z-index: 100;
  cursor: initial;
  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px -2px rgba(0, 0, 0, 0.12),
    0 2px 4px -4px rgba(0, 0, 0, 0.24);
}
header .box-title {
  margin: 0;
  font-weight: normal;
  font-size: 16pt;
  color: white;
  cursor: initial;
}
.box-title {
  width: calc(100% - 40px);
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
  display: inline-block;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.box-content {
  width: calc(100% - 40px);
  padding: 30px 20px;
  padding-top: 0px;
  font-size: 11pt;
  color: rgba(0, 0, 0, 0.54);
  display: none;
}
.box-close {
  position: absolute;
  height: 64px;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  display: none;
}
input:checked + .box {
  height: auto;
  margin: 16px 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.32);
}
input:checked + .box .box-title {
  font-weight: bolder;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
}
input:checked + .box .box-content,
input:checked + .box .box-close {
  display: inline-block;
}
.arrows section .box-title {
  padding-left: 44px;
  width: calc(100% - 64px);
}
.arrows section .box-title:before {
  position: absolute;
  display: block;
  content: "\203a";
  font-size: 18pt;
  left: 20px;
  top: -2px;
  transition: transform 0.15s ease-in-out;
  color: rgba(0, 0, 0, 0.54);
}
input:checked + section.box .box-title:before {
  transform: rotate(90deg);
}
</style>
