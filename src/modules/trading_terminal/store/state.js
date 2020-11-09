import defaultValues from './constants/defaultValues';

const state = {
  isStashSidebarOpen: false,
  grid: {
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
