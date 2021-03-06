import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'constructedCitizen',
      reducer: (state) => ({
        character: state.character,
        skills: state.skills
      }),
    }).plugin(store);
  });
};
