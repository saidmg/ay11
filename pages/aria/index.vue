<template>
  <!-- <h1>ARIA Roles and Attributes</h1> -->
  <Head>
    <Title>Aria - Overview</Title>
  </Head>
  <div class="content rounded">
    <div class="max-w-5xl rounded overflow-hidden shadow-lg">
      <div class="px-8 m-5 py-4">
        <div class="content rounded">
          <div class="px-8 text-gray-700 text-base">
            <h2 class="font-bold text-xl mb-2 text-gray-700">
              What Does Web Component Accessibility Entail?
            </h2>
            <h3 class="font-bold text-xl mb-2 text-gray-700 mt-5">Markup Semantics</h3>
            <p>
              When an element receives focus, the screen reader offers information about
              it to the user. Thus when an HTML <code>&lt;input type="text"&gt;</code> is
              focused the user knows from the screen reader that they are dealing with
              text field (and can input something). But if the element is just a bare
              <code>&lt;div&gt;</code>, the screen reader has nothing to say about it.
            </p>
            <p>
              To solve this issue we can use
              <a class="font-bold" href="https://www.w3.org/WAI/intro/aria">WAI-ARIA</a>
              (Web Accessibility Initiative – Accessible Rich Internet Applications) to
              add special ARIA attributes to extend the semantics of the component markup.
              These additional semantics help assistive technologies to identify
              properties, relationships, and states in your user interfaces. The practical
              guidelines for using ARIA can be found here:
              <a class="font-bold" href="https://www.w3.org/TR/wai-aria-practices-1.1/"
                >WAI-ARIA Authoring Practices</a
              >, alternatively (for a quick refresher) you could read
              <a class="font-bold" href="https://www.sitepoint.com/introduction-wai-aria/"
                >Introduction to WAI-ARIA</a
              >.
            </p>

            <h3 class="font-bold text-xl mb-2 text-gray-700 mt-5">Keyboard Support</h3>
            <p>
              The goal is to make it possible to interact with a component using only the
              <a
                class="font-bold"
                href="https://www.sitepoint.com/best-mechanical-keyboards/"
                >keyboard</a
              >. WAI-ARIA defines behavior and the keyboard interactions for
              <a
                class="font-bold"
                href="https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex"
                >many UI controls</a
              >. To know which keys should be supported by which component, find the
              description of your component or a similar one in the specification and use
              that. For instance, the multiselect is similar to the
              <a
                class="font-bold"
                href="https://www.w3.org/TR/wai-aria-practices-1.1/#combobox"
                >combobox</a
              >.
            </p>

            <p>
              Even with keyboard accessibility in place, it’s good practice to let users
              know which keys/key combos to use to interact with the component (for
              example by providing some instructions in the application) since this might
              not be obvious.
            </p>

            <h3 class="font-bold text-xl mb-2 text-gray-700 mt-5">
              Visual accessibility
            </h3>
            <p>
              Here we are talking about accessibility aspects related to the component’s
              appearance. Ensure that you can answer ‘yes’ to the following questions:
            </p>
            <ul class="pb-2 px-6">
              <li>Are the elements and text big enough to clearly see them?</li>
              <li>Does your component look as expected in high contrast mode?</li>
              <li>Is it possible to use your component without colors?</li>
            </ul>
            <p>
              Remember, not all visually impaired users are
              <a
                class="font-bold"
                href="http://www.allaboutvision.com/lowvision/legally-blind.htm"
                >legally blind</a
              >. There are many users out there who (for example) have low vision or color
              blindness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
