<template>
  <div class="placeholder-view">
    <p>Esta página ainda não foi implementada 😢</p>
    <p>
      Contate o desenvolvedor do app para dar ideias do que poderia estar nesta
      página 🤙
    </p>
    <p>
      <a href="whatsapp://send?phone=+5519994115113"
        ><Button :label="'Chamar no Whatsapp'"></Button
      ></a>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "PlaceholderView",
  components: {
    Button,
  },
});
</script>

<style>
div.placeholder-view {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
}
</style>