import { minTabletWidth, minDesktopWidth } from '@/const/displayWidth';

export const state = () => ({
  deviceWidth: null,
});

export const getters = {
  deviceIs: ({ deviceWidth }) => {
    if (deviceWidth < minTabletWidth) return 'mobile';
    if (deviceWidth >= minTabletWidth && deviceWidth < minDesktopWidth)
      return 'tablet';
    return 'desktop';
  },
  isMobile: (state, { deviceIs }) => {
    return deviceIs === 'mobile';
  },
  isTablet: (state, { deviceIs }) => {
    return deviceIs === 'tablet';
  },
  isDesktop: (state, { deviceIs }) => {
    return deviceIs === 'desktop';
  },
};

export const mutations = {
  setDeviceWidth: (state, payload) => {
    state.deviceWidth = payload;
  },
};
