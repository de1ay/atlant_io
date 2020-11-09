import { v4 as uuidv4 } from 'uuid';

import { randomIntFromInterval } from '@/core/helpers';

import defaultValues from '../constants/defaultValues';
import localStorageItemNames from '../constants/localStorageItemNames';

function getTilesFromLocalStorage(itemName) {
  const tilesString = localStorage.getItem(itemName);
  return tilesString ? JSON.parse(tilesString) : [];
}

function saveTilesToLocalStorage(tiles, itemName) {
  localStorage.setItem(itemName, JSON.stringify(tiles));
}

export function getDeskTilesFromLocalStorage() {
  return getTilesFromLocalStorage(localStorageItemNames.deskTiles);
}

export function getStashTilesFromLocalStorage() {
  return getTilesFromLocalStorage(localStorageItemNames.stashTiles);
}

export function saveDeskTilesToLocalStorage(deskTiles) {
  return saveTilesToLocalStorage(deskTiles, localStorageItemNames.deskTiles);
}

export function saveStashTilesToLocalStorage(stashTiles) {
  return saveTilesToLocalStorage(stashTiles, localStorageItemNames.stashTiles);
}

export function generateTile(origin) {
  const translateXMax = origin.x - defaultValues.tileWidth / 2;
  const translateYMax = origin.y - defaultValues.tileHeight / 2;
  return {
    uuid: uuidv4(),
    width: defaultValues.tileWidth,
    height: defaultValues.tileHeight,
    translateX: randomIntFromInterval(-translateXMax, translateXMax),
    translateY: randomIntFromInterval(-translateYMax, translateYMax),
  };
}

export function generateTiles(origin, count = defaultValues.tilesCount) {
  const tiles = [];
  for (let i = count; i > 0; i -= 1) {
    tiles.push(generateTile(origin));
  }
  return tiles;
}
