<template>
  <teleport to="#modal">
    <div class="generic-modal" :class="{ visible: isOpened }">
      <div class="container">
        <div class="title">
          {{ title }}
        </div>
        <div class="content">
          {{ content }}
        </div>
        <div class="buttons">
          <button v-if="button1" @click="buttonHandler1">{{ button1 }}</button>
          <button v-if="button2" @click="buttonHandler2">{{ button2 }}</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductSelector",
  components: {},
  props: {
    title: { type: String, default: "Generic Modal" },
    content: { type: String, default: "Content" },
    button1: { type: String, default: "Action Button" },
    button2: { type: String },
    action1: { type: Function },
    action2: { type: Function },
  },
  setup(props) {
    const isOpened = ref(false);

    /**
     * Opens the generic modal
     */
    const open = (): void => {
      isOpened.value = true;
    };

    /**
     * Closes the generic modal
     */
    const close = (): void => {
      isOpened.value = false;
    };

    /**
     * Handles the click of the first button
     */
    const buttonHandler1 = (): void => {
      close();
      if (props.action1) {
        props.action1();
      }
    };

    /**
     * Handles the click of the second button
     */
    const buttonHandler2 = (): void => {
      close();
      if (props.action2) {
        props.action2();
      }
    };

    // exposed template variables
    return { isOpened, open, close, buttonHandler1, buttonHandler2 };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

div.generic-modal {
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $app-background-color-modal;
  transition: opacity 0.1s ease-in, visibility 0.1s;

  div.container {
    display: flex;
    flex-direction: column;
    background-color: $app-background-color-white;
    width: 80%;
    padding: 1rem;
    border-radius: 0.25rem;

    div.title {
      font-weight: bold;
      margin-bottom: 1rem;
    }

    div.content {
      margin-bottom: 1rem;
    }

    div.buttons {
      text-align: right;

      button {
        font-family: "Roboto Regular";
        font-size: 0.875rem;
        font-weight: bold;
        background-color: transparent;
        padding: 0.5rem 0.75rem;
        margin-left: 0.5rem;
        border-radius: 0.25rem;
        border: none;
        transition: all 50ms ease-out;

        &:hover {
          cursor: pointer;
        }

        &:active {
          cursor: pointer;
          color: white;
          background-color: $app-modal-button-primary-active;
        }
      }
    }
  }

  &.visible {
    visibility: visible;
    opacity: 1;
  }
}
</style>
