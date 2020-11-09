import defaultValues from './constants/defaultValues';

const state = {
  isStashSidebarOpen: false,
  grid: {
    origin: {
      x: 0,
      y: 0,
    },
    resolution: defaultValues.gridResolution,
  },
  desk: {
    tiles: [],
  },
  stash: {
    tiles: [],
  },
};

export default state;
