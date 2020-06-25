export const state = () => ({
  stepIndex: 0,
  questionIndex: 0,
  answers: [],
  questions: [
    {
      title: 'Question 1',
      answers: ['A', 'B', 'C'],
    }
  ],
});

export const mutations = {
  NEXT_STEP(state) {
    state.stepIndex = state.stepIndex + 1;
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
};

export const getters = {
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
