const getters = {
  gridResolution: (state) => state.grid.resolution,
  deskTiles: (state) => state.desk.tiles,
  stashTiles: (state) => state.stash.tiles,
  isAnyTileStashed: (state) => state.stash.tiles.length > 0,
};

export default getters;
