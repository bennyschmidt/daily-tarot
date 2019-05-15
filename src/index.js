/*
 * Daily Tarot
 * Authored by Benny Schmidt
 */

import { KeepAwake, registerRootComponent } from 'expo';
import { Main } from './containers';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(Main);
