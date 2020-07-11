import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'constructedCitizen',
      reducer: (state) => ({
        roles: state.roles,
        character: state.character,
      }),
    }).plugin(store);
  });
};
