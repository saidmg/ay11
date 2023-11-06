<template>
https://www.sitepoint.com/accessible-web-components/
<h2 id="makingthemultiselectwebcomponentaccessible">Making the Multiselect Web Component Accessible</h2>
<p>Now we’re going to make the multiselect more accessible using all of the techniques outlined above. Specifically, we’re going to:</p>
<ul>
<li>extend the markup semantics</li>
<li>add keyboard support</li>
<li>validate its visual accessibility</li>
</ul>

<h3 id="extendingmarkupsemantics">Extending Markup Semantics</h3>
<p>The accessibility rule of thumb is to use native HTML elements over custom ones. This means, if you can use a native HTML control with built-in accessibility, do so. Add ARIA attributes only if you really need to create a custom component. If you’d like to find out more about this, read <a href="https://www.sitepoint.com/avoiding-redundancy-wai-aria-html-pages/">Avoiding Redundancy with WAI-ARIA in HTML Pages</a>.</p>
<p>In our case the multiselect is a custom component, so we need to add ARIA attributes. First, let’s find a component similar to the multiselect in the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">ARIA specification</a>. After a little research, it appears that the combobox looks and behaves similarly. Great, now let’s see which ARIA attributes we need to add according to the <a href="http://w3c.github.io/aria/practices/aria-practices.html#combobox">combobox description</a>.</p>
<p>From guidelines we can see that we need to add the following roles:</p>
<ol>
<li><code>role="combobox"</code> to the root element of the component</li>
<li><code>role="listbox"</code> to the list of items in the popup</li>
<li><code>role="option"</code> to each item of the dropdown list</li>
</ol>
<p>The aria state attributes to be added:</p>
<p>The roles <code>combobox</code> and <code>listbox</code> can be added directly to the markup of the component:</p>
<pre class="language-javascript"><code class="javascript language-javascript">multiselectPrototype<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">selectItem</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow">if</span><span class="token punctuation">(</span><span class="token operator">!</span>item<span class="token punctuation">.</span><span class="token method function property-access">hasAttribute</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// set aria-selected property of selected item</span>
    item<span class="token punctuation">.</span><span class="token method function property-access">setAttribute</span><span class="token punctuation">(</span><span class="token string">'aria-selected'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    item<span class="token punctuation">.</span><span class="token method function property-access">setAttribute</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> <span class="token string">'selected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">fireChangeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">refreshField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

multiselectPrototype<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">unselectItem</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// set aria-selected property of unselected item</span>
  item<span class="token punctuation">.</span><span class="token method function property-access">setAttribute</span><span class="token punctuation">(</span><span class="token string">'aria-selected'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  item<span class="token punctuation">.</span><span class="token method function property-access">removeAttribute</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">fireChangeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">refreshField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</template>
<script setup>
import componentsData from '~~/componentsData'
const route = useRoute()

const component = componentsData.components.find(
(component) => component.slug === route.params.componentSlug
);

const option = component.options.find(
(component) => component.slug === route.params.optionSlug
);
</script>