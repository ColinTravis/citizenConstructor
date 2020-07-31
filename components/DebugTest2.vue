<template>
  <div class="my-10 mb-20">
    <h1 class="text-3xl">DEBUG DUMP</h1>
    <!-- <div v-for="skill in skills">
      {{ skill.name }}
      {{ skill.points }}
    </div> -->
    <accordion title="TEST">
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
              v-if="getIndex(skills, roleSkill) >= 0"
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
              <!-- v-model="skills[0].skillList[1]" -->
              <!-- v-model="
                  masterSkills[getIndex(masterSkills, roleSkill)[0]][
                    getIndex(masterSkills, roleSkill)[1]
                  ].points
                " -->
              <!-- {{ roleSkill }} -->
              <!-- <p
                v-if="masterSkills[0][getIndex(masterSkills[0], roleSkill)]"
                class="text-blue-200"
              >
                {{ masterSkills[0][getIndex(masterSkills[0], roleSkill)].name }}
              </p> -->
              <!-- {{getIndex(masterSkills[0], roleSkill)}} -->
            </label>
          </div>
        </div>
      </div>
    </accordion>
    <accordion>
      <div v-for="(skill, skillName) in skills" :key="skillName">
        <label class="inline-flex items-center">
          <span class="ml-2 text-orange-500">{{skill.name}}</span>
          <input
            class="form-input mt-1 block w-full"
            type="number"
            v-model="skill.points"
            required
          />
        </label>
      </div>
    </accordion>
    <Slideup @close="modalVisible = false" />
  </div>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields';
import { mapGetters, mapState } from 'vuex';
export default {
  data() {
    return {
      testForm: {},
      modalVisible: false,
    };
  },
  computed: {
    //         answers(state) {
    //     return [...state.questions]
    //       .map(question => {
    //         return {
    //           id: question.id,
    //           type: question.answerType,
    //           answer: question.answer !== undefined ? question.answer : null
    //         }
    //       })
    //   },
    ...mapMultiRowFields(['skills']),
    ...mapState(['roles']),
  },
  methods: {
    triggerModal(value) {
      this.modalVisible = value;
    },
    getIndex(item, skill) {
      return item.findIndex((i) => i.name === skill);
      // console.log(item.findIndex((i) => i.name === skill));
    },
    // getIndex(item, skill) {
    //   function getIndexOfK(arr, k) {
    //     if (!arr) {
    //       return [];
    //     }
    //     for (var i = 0; i < arr.length; i++) {
    //       var index = arr[i].findIndex((i) => i.name === skill);
    //       for (var s = 0; s < arr[i].length; s++) {
    //         if (index > -1) {
    //           return [i, index];
    //         }
    //       }
    //     }

    //     return [];
    //   }

    //   console.log('Found indexes: ', getIndexOfK(item, skill));

    //   console.log('What to search in ', item);
    //   console.log('term to search for: ', skill);
    //   return getIndexOfK(item, skill);
    // },
  },
};
</script>
