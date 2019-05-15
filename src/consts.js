/*
 * Daily Tarot
 * Authored by Benny Schmidt
 */

import { Dimensions } from 'react-native';

export const screen = Dimensions.get(`screen`);

export const screenHeight = screen.height;

export const screenWidth = screen.width;

export const cardStackStyle = {
  position: `absolute`,
  left: screenWidth * .075,
  top: `25%`
};

export const font = {
  src: require(`./assets/font/MedulaOne-Regular.ttf`),
  style: {
    fontFamily: `Medula One`
  }
};

export const text = {
  close: `Close`,
  draw: `Draw`,
  drawn: `You have drawn the`,
  getMeaning: '?',
  errorRetrieving: 'Error retrieving data.',
  errorSaving: 'Error saving data.',
  title: `Swipe to Draw`
};
