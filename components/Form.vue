<template>
  <div class="container">
    <!-- --------------- -->
    <!-- Basic Character -->
    <!-- --------------- -->
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
    <!-- -------------- -->
    <!-- ROLE SELECTION -->
    <!-- -------------- -->
    <accordion title="Role">
      <div class="block">
        <span class="text-gray-700">Select Role:</span>
        <div v-for="(role, roleValue) in roles" :key="roleValue" class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio text-red-600"
                name="role-selection"
                :value="role.name"
                v-model="charRole"
              />
              <span class="ml-2">{{ role.name }}</span>
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
    ...mapFields([
      'character.handle',
      'character.age',
      'character.charRole',
      'character.charPoints',
      'roles',
    ]),
    // ...mapState(['questions', 'questionIndex', 'character']),
  },
};
</script>

<style></style>
