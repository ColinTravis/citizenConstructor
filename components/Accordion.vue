<template>
  <div class="">
    <div class="tab__header">
      <a
        href="#"
        class="tab__link p-4 bg-blue-600 hover:bg-blue-700 no-underline text-white border-b-2 border-white flex justify-between"
        @click.prevent="active = !active"
      >
        <strong>{{ title }}</strong>
        <span class="down-Arrow" v-show="!active">&#9660;</span>
        <span class="up-Arrow" v-show="active">&#9650;</span>
      </a>
    </div>
    <div class="tab__content p-2" v-show="active"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
      title: {type: String},
      active: { type: Boolean, default: true}
  }
};
</script>

<style></style>
