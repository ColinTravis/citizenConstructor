import character from './modules/character';
import roles from './modules/roles';
import skills from './modules/skills';

import { getField, updateField } from 'vuex-map-fields';

const isDev = process.env.NODE_ENV === 'development';

function initialState() {
  return {
    character: character,
    roles: roles,
    skills: skills.masterSkillList,
    stepIndex: 0,
    questionIndex: 0,
    answers: [],
    questions: [
      {
        title: 'Question 1',
        answers: ['A', 'B', 'C'],
      },
    ],
  };
}

export const state = () => initialState();

export const actions = {
  reset({ commit }) {
    window.localStorage.removeItem('constructedCitizen');
    commit('RESET');
  },
};

export const mutations = {
  updateField,
  NEXT_STEP(state) {
    state.stepIndex = state.stepIndex + 1;
  },

  updateMessage(state, message) {
    state.character = message;
  },

  NEXT_QUESTION(state, answerIndex) {
    state.answers.push(
      state.questions[state.questionIndex]['answers'][answerIndex]
    );
    state.questionIndex = state.questionIndex + 1;
    if (state.questionIndex === state.questions.length) {
      this.commit('NEXT_STEP');
    }
  },

  UPDATE_STEP(state, index) {
    state.stepIndex = index;
  },

  RESTART(state) {
    state.stepIndex = 0;
    state.questionIndex = 0;
    state.answers = [];
  },
  RESET(state) {
    const s = initialState();
    Object.keys(s).forEach((key) => {
      state[key] = s[key];
    });
  },
};

export const getters = {
  getField,
  progress(state) {
    if (state.questionIndex === state.questions.length) {
      return '100%';
    } else return `${(state.questionIndex / state.questions.length) * 133.32}%`;
  },

  currentStep(state) {
    switch (state.answers[2]) {
      case 'First':
        return 1;
      case 'Second':
        return 2;
      case 'Third':
        return 3;
      default:
        return 1;
    }
  },
};
