<template>
    <div class="multiselect" role="combobox" @click="togglePopup">
        <div class="multiselect-field" tabindex="0"></div>
        <div class="multiselect-popup" @keydown="keyDownHandler">
            <ul class="multiselect-list" role="listbox" aria-multiselectable="true" @click="listClickHandler">
                <!-- <content select="li"> -->
                <div class="content" select="li">
                    <li value="1" selected>Argentina</li>
                    <li value="2">Australia</li>
                    <li value="3">Brazil</li>
                    <li value="4">Canada</li>
                    <li value="5" selected>China</li>
                    <li value="6">France</li>
                    <li value="7">Germany</li>
                    <li value="8" selected>India</li>
                    <li value="9">Mexico</li>
                    <li value="10">Russia</li>
                    <li value="11" selected>United States</li>
                </div>
                <!-- </content> -->
            </ul>
        </div>
    </div>
</template>
<script setup>
    const isOpened = ref(false);
    const itemElements = () => {
          return document.querySelectorAll('li');
    }

    const refreshItems = () => {
        let itemElements = itemElements();
        itemElements.forEach((el)=>{
            el.setAttribute("role", "option")
            el.setAttribute("aria-selected", el.hasAttribute("selected"));

        })
    }

    const togglePopup =(show) => {
        isOpened.value = show;
        document.querySelector('.multiselect-popup').style.display = show ? 'block' : 'none';
        // set aria-expanded property
        document.querySelector('.multiselect-popup').setAttribute("aria-expanded", show);

    }   
    const selectItem = (item) => {
        if(!item.hasAttribute('selected')) {
            // set aria-selected property of selected item
            item.setAttribute('aria-selected', true);

            item.setAttribute('selected', 'selected');
            // fireChangeEvent();
            // refreshField();
        }
        // close();
        togglePopup(false);
    }
    const unselectItem  = (item) => {
        // set aria-selected property of unselected item
        item.setAttribute('aria-selected', false);

        item.removeAttribute('selected');
        // refreshField();
    }
</script>
    <style scoped>
        .multiselect {
            position: relative;
            box-sizing: border-box;
            display: inline-block;
            width: 20em;
        }

        .multiselect-field {
            overflow: hidden;
            padding: .2em .2em 0 .2em;
            border: 1px solid #adadad;
            border-radius: .2em;
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;
        }

        .multiselect-field-placeholder {
            padding: .25em .5em;
            margin-bottom: .2em;
            color: #888;
            line-height: 1;
        }

        .multiselect-tag {
            position: relative;
            display: inline-block;
            padding: .25em 1.5em .25em .5em;
            border: 1px solid #bdbdbd;
            border-radius: .2em;
            margin: 0 .2em .2em 0;
            line-height: 1;
            vertical-align: middle;
        }

        .multiselect-tag:last-child {
            margin-right: 0;
        }

        .multiselect-tag:hover {
            background: #efefef;
        }

        .multiselect-tag-text {
            min-height: 1em;
        }

        .multiselect-tag-remove-button {
            position: absolute;
            top: .25em;
            right: .25em;
            width: 1em;
            height: 1em;
            opacity: 0.3;
        }

        .multiselect-tag-remove-button:hover {
            opacity: 1;
        }

        .multiselect-tag-remove-button:before,
        .multiselect-tag-remove-button:after {
            content: ' ';
            position: absolute;
            left: .5em;
            width: 2px;
            height: 1em;
            background-color: #333;
        }

        .multiselect-tag-remove-button:before {
            transform: rotate(45deg);
        }

        .multiselect-tag-remove-button:after {
            transform: rotate(-45deg);
        }

        .multiselect-popup {
            position: absolute;
            z-index: 1000;
            display: none;
            overflow-y: auto;
            width: 100%;
            max-height: 300px;
            box-sizing: border-box;
            border: 1px solid #bdbdbd;
            border-radius: .2em;
            background: white;
        }

        .multiselect-list {
            padding: 0;
            margin: 0;
        }

        .content li {
            padding: .5em 1em;
            min-height: 1em;
            list-style: none;
            cursor: pointer;
        }

        .content li[selected] {
            background: #f3f3f3;
        }

        .content li:focus {
            outline: dotted 1px #333;
            background: #e9e9e9;
        }

        .content li:hover {
            background: #e9e9e9;
        }
    </style>
