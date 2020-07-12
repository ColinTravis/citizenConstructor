<template>
  <div class="my-10 mb-20">
    <h1 class="text-3xl">DEBUG DUMP</h1>
    <!-- {{getIndex(allSkills[0], "Credibility") }} -->
    <!-- {{masterSkills[getIndex(masterSkills, 'Library Search')[0]][getIndex(masterSkills, 'Library Search')[1]].points}} -->
    <!-- {{ getIndex(masterSkills, 'Library Search')[0] }} -->
    <!-- {{ getIndex(masterSkills, 'Library Search')[1] }} -->
    <!-- {{masterSkills}} -->
    <!-- {{ masterSkills[3] }} -->
    <!-- {{ allSkills[0].skillList}} -->
    <!-- <hr /> -->
    {{ masterSkills }}
    <hr />
    {{ skills[0].skillList[1] }}
    <!-- {{ masterSkills[0][0].name }} -->
    <!-- {{ masterSkills[0][0].points }} -->

    <!-- TURN OFF -->
    <div
      class="my-8"
      v-for="(skillCategory, skillType) in skills"
      :key="skillType"
    >
      <h1 v-if="skillCategory.name" class="uppercase font-bold text-xl">
        {{ skillCategory.name }}
      </h1>

      <p class="text-4xl text-green-500">
        <!-- {{ skillCategory.skillList }} -->
        <!-- {{ getIndex(skillCategory.skillList, skillCategory.name) }} -->
      </p>
    </div>
    <!-- END TURN OFF -->
    <!-- <div
      v-for="(skillCategory, skillTestIndex) in skills"
      :key="skillTestIndex"
    >
      <h1>{{ skillCategory.name }}</h1>
      <div v-for="(skill, skillIndex) in skillCategory.skillList" :key="skillIndex">
          <p>{{skill.name}}</p>
          <p>{{skill.points}}</p>
      </div>
    </div> -->
    <accordion title="TEST">
      <div class="block">
        <div v-for="(role, roleName) in roles" :key="roleName">
          <h1 class="text-xl font-bold">{{ role.name }}</h1>
          <div
            v-for="(roleSkill, roleSkillName) in role.careerSkills"
            :key="roleSkillName"
          >
            <!-- <p>{{ roleSkill }}</p> -->

            <label class="inline-flex items-center">
              <span class="ml-2 text-orange-500">{{ roleSkill }}</span>
              <input
                class="form-input mt-1 block w-full"
                type="number"
                v-model="skills[0].skillList[1]"
              />
              <!-- v-model="
                  masterSkills[getIndex(masterSkills, roleSkill)[0]][
                    getIndex(masterSkills, roleSkill)[1]
                  ].points
                " -->
              {{ roleSkill }}
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
        <div v-for="(skill, index) in skills" :key="index"></div>
      </div>
    </accordion>
  </div>
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
    masterSkills() {
      return this.skills.map((value) =>
        value.skillList.map((skill) => {
          return { name: skill.name, points: skill.points };
        })
      );
    },
    //   .map(value => value.map(number => number * 2));

    //   .map((skillTest, index) => {
    //     return {
    //       index,
    //       ...skillTest,
    //     };
    //   });
    // careerRoles() {
    //   return this.roles.map((roleTest, index) => {
    //     return {
    //       index,
    //       ...roleTest.careerSkills,
    //     };
    //   });
    //   // .filter(question => question.hintUsed)
    // },
  },
  methods: {
    getIndex(item, skill) {
      function getIndexOfK(arr, k) {
        if (!arr) {
          return [];
        }
        for (var i = 0; i < arr.length; i++) {
          var index = arr[i].findIndex((i) => i.name === skill);
          for (var s = 0; s < arr[i].length; s++) {
            if (index > -1) {
              return [i, index];
            }
          }
        }

        return [];
      }

      console.log('Found indexes: ', getIndexOfK(item, skill));

      console.log('What to search in ', item);
      console.log('term to search for: ', skill);
      return getIndexOfK(item, skill);
    },
  },
};
</script>
