import defaultValues from './constants/defaultValues';
import mutationNames from './constants/mutationNames';
import {
  computeOriginCoordinates,
  initializeGridResolution,
} from './helpers/gridHelper';
import {
  getDeskTilesFromLocalStorage,
  getStashTilesFromLocalStorage,
  generateTiles,
  saveDeskTilesToLocalStorage,
  saveStashTilesToLocalStorage,
} from './helpers/tilesHelper';

const mutations = {
  [mutationNames.initializeStore](state) {
    const gridOrigin = computeOriginCoordinates();
    const gridResolution = initializeGridResolution();

    const deskTiles = getDeskTilesFromLocalStorage();
    const stashTiles = getStashTilesFromLocalStorage();

    const currentTilesCount = deskTiles.length + stashTiles.length;
    if (currentTilesCount < defaultValues.tilesCount) {
      const newDeskTiles = generateTiles(gridOrigin, defaultValues.tilesCount - currentTilesCount);
      deskTiles.push(...newDeskTiles);
    }

    state.grid = {
      origin: gridOrigin,
      resolution: gridResolution,
    };
    state.desk.tiles = deskTiles;
    state.stash.tiles = stashTiles;

    saveDeskTilesToLocalStorage(deskTiles);
    saveStashTilesToLocalStorage(stashTiles);
  },
  [mutationNames.moveTileToTop](state, deskTileIndex) {
    if (deskTileIndex === state.desk.tiles.length - 1) return;
    const tile = state.desk.tiles[deskTileIndex];
    const tiles = state.desk.tiles.filter((_, index) => index !== deskTileIndex);
    tiles.push(tile);
    state.desk.tiles = tiles;

    saveDeskTilesToLocalStorage(state.desk.tiles);
  },
  [mutationNames.updateDeskTileTranslate](state, { deskTileIndex, translate }) {
    if (!deskTileIndex || !translate || !translate.x || !translate.y) return;
    state.desk.tiles[deskTileIndex].translateX = translate.x;
    state.desk.tiles[deskTileIndex].translateY = translate.y;

    saveDeskTilesToLocalStorage(state.desk.tiles);
  },
  [mutationNames.stashTile](state, deskTileIndex) {
    const tile = state.desk.tiles[deskTileIndex];
    const tiles = state.desk.tiles.filter((_, index) => index !== deskTileIndex);
    state.desk.tiles = tiles;
    state.stash.tiles.push(tile);

    saveDeskTilesToLocalStorage(state.desk.tiles);
    saveStashTilesToLocalStorage(state.stash.tiles);
  },
  [mutationNames.unstashTile](state, stashTileIndex) {
    const tile = state.desk.stash[stashTileIndex];
    const tiles = state.desk.stash.filter((_, index) => index !== stashTileIndex);
    state.stash.tiles = tiles;
    state.desk.tiles.push(tile);

    saveDeskTilesToLocalStorage(state.desk.tiles);
    saveStashTilesToLocalStorage(state.stash.tiles);
  },
  [mutationNames.uiSwitchStashSdiebarState](state) {
    state.isStashSidebarOpen = !state.isStashSidebarOpen;
  },
};

export default mutations;
