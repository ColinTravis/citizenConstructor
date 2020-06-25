<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title font-krona">citizenRegistration</h1>
      <div class="demo" augmented-ui="tl-clip br-clip exe">Test</div>
      <div>
        <h1>QuestionIndex:</h1>
        <p>{{ questionIndex }}</p>
        <h1>Questions:</h1>
        <p>{{ questions }}</p>
      </div>
      <div>
        <!-- <button @click="testAlert">Fill PDF</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import pdfFiller from 'pdffiller';
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['questions', 'questionIndex'])
  },
  methods: {
    
  },
  mounted() {}
};
</script>

<style>
div.demo {
  display: inline-block;
  width: 110px;
  height: 110px;
  margin: 10px;
  --aug-border: 5px;
  --aug-inset: 5px;
  padding: 10px; /* mind the gap */
  text-align: center;
  --aug-border-bg: gold;
  --aug-inset-bg: gold;
}
</style>
