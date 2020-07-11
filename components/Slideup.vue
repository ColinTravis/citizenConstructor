<template>
  <div class="modal-mask" :class="[expanded ? 'active' : '']">
    <div
      :class="[expanded ? 'expanded-sheet' : 'collapsed-sheet']"
      class="full-sheet mx-auto w-2/3 bg-green-500 bottom-0"
    >
      <div class="modal-container text-white">
        <div @click="triggerExpand(true)">
          Character Sheet slide up
        </div>
        <div v-if="expanded">
          <div class="modal-body">
            <h1>Character Handle: {{ character.handle }}</h1>
            <h1>Character Age: {{character.age}}</h1>
            <h1>Character Role: {{character.charRole}}</h1>
            <h1>Character Points: {{character.charPoints}}</h1>
            {{character}}
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="triggerExpand(close)">
              OK
            </button>
            <button class="modal-default-button" @click="reset">
              Reset Character
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['character']),
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    triggerExpand(expandStatus) {
      this.expanded = expandStatus;
    },
    ...mapActions(['reset'])
  },
};
</script>

<style lang="postcss" scoped>
.expanded-sheet {
  @apply h-screen;
}
.collapsed-sheet {
  @apply h-16;
}
.full-sheet {
  @apply fixed;
  left: 50%;
  transform: translateX(-50%);
  @apply transition-height;
  @apply duration-1000;
  @apply ease-ease-in-cubic;
}
.modal-mask.active::before {
  opacity: 1;
  @apply pointer-events-auto;
}
.modal-mask::before {
  content: '';
  background-color: rgba(0, 0, 0, 0.8);
  @apply opacity-0;
  @apply fixed;
  @apply z-0;
  @apply top-0;
  @apply left-0;
  @apply h-screen;
  @apply w-screen;
  @apply transition-opacity;
  @apply duration-1000;
  @apply ease-ease-in-cubic;
  @apply pointer-events-none;
}
</style>
