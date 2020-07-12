<template>
  <div class="container">
    <BasicCharacter/>
    <CharPoints />
    <Roles/>
    <Skills />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapFields([

    ]),
    // ...mapState(['questions', 'questionIndex', 'character']),
  },
};
</script>

<style></style>
