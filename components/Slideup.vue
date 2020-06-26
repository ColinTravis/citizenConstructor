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
            {{character}}
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="triggerExpand(close)">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';

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
  transition: height cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
}
.modal-mask.active::before {
  opacity: 1;
  @apply pointer-events-auto;
}
.modal-mask::before {
  content: '';
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  @apply z-0;
  @apply absolute;
  @apply top-0;
  @apply left-0;
  @apply h-screen;
  @apply w-screen;
  transition: opacity cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
  @apply pointer-events-none;
}
</style>
