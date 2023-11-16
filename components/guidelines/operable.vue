<template>
  <div class="my-5 rounded">
    <h2 class="font-bold text-xl mb-2 text-gray-700 text-center  dark:text-white">Operable</h2>
    <div>
      <div class="px-1 mx-1 py-2">
        <nav class="accordion arrows">
          <input type="radio" name="accordion" id="cb1" />
          <section class="box">
            <label class="box-title dark:text-slate-900" for="cb1" style="width: 100%"
              >Guideline 2.1 Keyboard Accessible</label
            >
            <label class="box-close" for="acc-close"></label>
            <div class="box-content m-2">
              <span class="text-gray-700">
                Make all functionality available from a keyboard.</span
              >
              <ul class="text-gray-700 mt-5">
                <li>
                  Some people use specialized keyboards with ergonomic layouts, on-screen
                  keyboards, or switch devices. Others use the keyboard through speech
                  input or other means of interaction, such as brain computer interfaces.
                </li>
                <li>
                  For example, when activating a dialog box, the focus may remain on the
                  initial content that is not visible anymore, or close button for the
                  dialog box may not be reachable via keyboard. In such cases, the user is
                  "trapped."
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section class="box">
            <label class="box-title dark:text-slate-900" for="cb2" style="width: 100%"
              >Guideline 2.2 Enough Time</label
            >
            <label class="box-close" for="acc-close"></label>
            <div class="box-content m-2">
              <span class="text-gray-700">
                Provide users enough time to read and use content.</span
              >
              <ul class="text-gray-700 mt-5">
                <li>
                  For example in a carousel component, have a button to stop the
                  movement, and other controls to allow users to navigate through the
                  items at their own pace:
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section class="box">
            <label class="box-title dark:text-slate-900" for="cb3" style="width: 100%"
              >Guideline 2.3 Seizures</label
            >
            <label class="box-close" for="acc-close"></label>
            <div class="box-content m-2">
              <span class="text-gray-700">
                Do not design content in a way that is known to cause seizures or physical
                reactions</span
              >
              <ul class="text-gray-700 mt-5">
                <li>
                  Some animations and moving content can also cause discomfort, nausea,
                  and other physical reactions. Animated media must not auto-play for more
                  than five seconds. If you plan to have animations go on longer than five
                  seconds or play on an infinite loop, provide a way for users to pause
                  the animation. An animation that cannot be paused can be extremely
                  distracting for people with different types of cognitive disabilities
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb4" />
          <section class="box">
            <label class="box-title dark:text-slate-900" for="cb4" style="width: 100%"
              >Guideline 2.4 Navigation
            </label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content m-2">
              <span class="text-gray-700">
                Provide ways to help users navigate, find content, and determine where
                they are</span
              >
              <ul class="text-gray-700 mt-5">
                <li>Navigating by using page titles</li>
                <li>
                  Adding headings and labels to your content. This is about separating
                  large blocks of content, such as long text passages, into smaller ones
                  and adding headings to each. Or dividing long forms into a series of
                  smaller ones. This does not only support more effective navigation but
                  should also make your content easier to understand and use.
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb5" />
          <section class="box">
            <label class="box-title dark:text-slate-900" for="cb5" style="width: 100%"
              >Guideline 2.5 Input</label
            >
            <label class="box-close" for="acc-close"></label>
            <div class="box-content m-2">
              <span class="text-gray-700">
                Make it easier for users to operate functionality through various inputs
                beyond keyboard</span
              >
              <ul class="text-gray-700 mt-5">
                <li>
                  Generally, providing larger click-areas around buttons, links, and other
                  controls helps people with low dexterity using a mouse as well as touch
                  screens.
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
  font-weight:bolder;
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
