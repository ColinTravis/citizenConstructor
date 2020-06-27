<template>
  <div class="container">
    <accordion title="Intro Stuff">
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
    <accordion title="Role">
      <div class="block">
        <span class="text-gray-700">Select Role</span>
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio text-red-600"
                name="radio-colors"
                value="netrunner"
                v-model="role"
              />
              <span class="ml-2">Netrunner</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio text-red-600"
                name="radio-colors"
                value="solo"
                v-model="role"
              />
              <span class="ml-2">Solo</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio text-red-600"
                name="radio-colors"
                value="fixer"
                v-model="role"
              />
              <span class="ml-2">Fixer</span>
            </label>
          </div>
        </div>
      </div>
    </accordion>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapFields(['character.handle', 'character.age', 'character.role', 'character.charPoints']),
    // ...mapState(['questions', 'questionIndex', 'character']),
  },
};
</script>

<style></style>
