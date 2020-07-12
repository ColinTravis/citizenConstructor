<template>
  <!-- --------------- -->
  <!-- Basic Character -->
  <!-- --------------- -->
  <accordion title="Intro Stuff" :expanded="true">
    <label class="block">
      <span class="text-gray-700">Handle</span>
      <input class="form-input mt-1 block w-full" v-model="handle" />
    </label>
    <label class="block">
      <span class="text-gray-700">Age</span>
      <input
        class="form-input mt-1 block w-full"
        type="number"
        placeholder="20"
        v-model="age"
      />
    </label>
  </accordion>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapFields(['character.handle', 'character.age']),
  },
};

</script>

<style></style>
