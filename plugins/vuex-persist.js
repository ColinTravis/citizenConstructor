import VuexPersistence from 'vuex-persistence';

export default ({ store }) => {
  new VuexPersistence({
    /* your options */
  }).plugin(store);
};
