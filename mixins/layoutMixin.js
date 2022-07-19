import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('core', ['setDeviceWidth']),
    _setDeviceWidth() {
      this.setDeviceWidth(window.innerWidth);
    },
  },
  mounted() {
    this._setDeviceWidth();
    window.addEventListener('resize', this._setDeviceWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._setDeviceWidth);
  },
};
