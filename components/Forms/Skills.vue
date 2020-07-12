<template>
  <accordion title="Skills">
    <div class="block">
      <div v-for="(role, roleName) in roles" :key="roleName">
        <h1 class="text-xl font-bold">{{ role.name }}</h1>
        <div
          v-for="(roleSkill, roleSkillName) in role.careerSkills"
          :key="roleSkillName"
        >
          <label class="inline-flex items-center" v-if="roleSkillName == 0">
            <span class="ml-2 text-green-500 font-bold text-2xl">{{
              roleSkill
            }}</span>
            <input
              v-if="getIndex(skills, roleSkill)"
              class="form-input mt-1 block w-full"
              type="number"
              v-model="skills[getIndex(skills, roleSkill)].points"
              required
            />
          </label>

          <label class="inline-flex items-center" v-else>
            <span class="ml-2 text-orange-500">{{ roleSkill }}</span>
            <input
              v-if="getIndex(skills, roleSkill)"
              class="form-input mt-1 block w-full"
              type="number"
              v-model="skills[getIndex(skills, roleSkill)].points"
            />
          </label>
        </div>
      </div>
    </div>
  </accordion>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields';
import { mapGetters, mapState } from 'vuex';
export default {
  data() {
    return {
      testForm: {},
    };
  },
  computed: {
    ...mapMultiRowFields(['skills']),
    ...mapState(['roles']),
  },
  methods: {
    getIndex(item, skill) {
      return item.findIndex((i) => i.name === skill);
    },
  },
};
</script>
