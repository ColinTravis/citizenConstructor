<template>
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
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapFields(['roles', 'character.charRole']),
  },
};
</script>

<style></style>
