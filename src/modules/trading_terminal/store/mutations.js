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

    let deskTiles = getDeskTilesFromLocalStorage();
    const stashTiles = getStashTilesFromLocalStorage();

    if (deskTiles.length === 0) {
      deskTiles = generateTiles(gridOrigin, defaultValues.tilesCount - stashTiles.length);
    }

    saveDeskTilesToLocalStorage(deskTiles);
    saveStashTilesToLocalStorage(stashTiles);

    state.grid = {
      origin: gridOrigin,
      resolution: gridResolution,
    };
    state.desk.tiles = deskTiles;
    state.stash.tiles = stashTiles;
  },
  [mutationNames.switchStashState](state) {
    state.isStashOpen = !state.isStashOpen;
  },
};

export default mutations;
