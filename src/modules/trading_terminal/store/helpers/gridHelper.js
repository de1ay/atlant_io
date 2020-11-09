import scssVariables from '@/assets/scss/_variables.scss';
import defaultValues from '../constants/defaultValues';
import localStorageItemNames from '../constants/localStorageItemNames';

export function computeOriginCoordinates() {
  const navbarHeight = Number(scssVariables.navbarHeight);
  return {
    x: window.innerWidth / 2,
    y: (window.innerHeight - navbarHeight) / 2,
  };
}

export function initializeGridResolution() {
  const gridResolutionString = localStorage.getItem(localStorageItemNames.gridResolustion);
  if (gridResolutionString) return Number(gridResolutionString);
  localStorage.setItem(localStorageItemNames.gridResolustion, defaultValues.gridResolution);
  return defaultValues.gridResolution;
}
