import defaultValues from '../constants/defaultValues';
import localStorageItemNames from '../constants/localStorageItemNames';

export function initializeGridResolution() {
  const gridResolutionString = localStorage.getItem(localStorageItemNames.gridResolustion);
  if (gridResolutionString) return Number(gridResolutionString);
  localStorage.setItem(localStorageItemNames.gridResolustion, defaultValues.gridResolution);
  return defaultValues.gridResolution;
}

export default initializeGridResolution;
