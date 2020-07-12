<template>
  <div class="">
    <div class="tab__header">
      <a
        href="#"
        class="tab__link p-4 bg-blue-600 hover:bg-blue-700 no-underline text-white border-b-2 border-white flex justify-between"
        @click.prevent="expanded = !expanded"
      >
        <strong>{{ title }}</strong>
        <span class="down-Arrow" v-show="!expanded">&#9660;</span>
        <span class="up-Arrow" v-show="expanded">&#9650;</span>
      </a>
    </div>
    <div class="tab__content p-2" v-show="expanded"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
      title: {type: String},
      expanded: { type: Boolean, default: false}
  }
};
</script>

<style></style>
