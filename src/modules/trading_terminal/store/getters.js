const getters = {
  gridOrigin: (state) => state.grid.origin,
  gridResolution: (state) => state.grid.resolution,
  deskTiles: (state) => state.desk.tiles,
  stashTiles: (state) => state.stash.tiles,
};

export default getters;
