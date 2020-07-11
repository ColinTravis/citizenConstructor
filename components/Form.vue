<template>
  <div class="container">
    <BasicCharacter/>
    <Roles/>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapFields([
      'character.charPoints',
    ]),
    // ...mapState(['questions', 'questionIndex', 'character']),
  },
};
</script>

<style></style>
