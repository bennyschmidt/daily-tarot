/*
 * Daily Tarot
 * Authored by Benny Schmidt
 */

import { Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import styled from 'styled-components';

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CardAnimation = styled.View`
  position: absolute;
  width: ${Dimensions.get('screen').width};
  height: ${Dimensions.get('screen').height};
  top: 20%;
  left: ${Dimensions.get('screen').width * .075};
  margin-left: auto;
  margin-right: auto;
  z-index: 1000;
`;

export const CardFace = styled.View`
  border: 1px solid black;
  border-radius: 10px;
  width: ${Dimensions.get('screen').width * .85};
  height: ${Dimensions.get('screen').width * .85 * 1.6};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const CardImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const CardStackWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Notification = styled.View`
  position: absolute;
  z-index: 1010;
  width: ${Dimensions.get('screen').width * .9};
  height: 60;
  background-color: #111;
  border-color: #d7bc85;
  border-width: .5px;
  border-style: solid;
  border-radius: 1;
  left: ${Dimensions.get('screen').width * .05};
  top: 36;
`;

export const NotificationText = styled.Text`
  position: absolute;
  z-index: 1011;
  color: white;
  font-size: 22;
  text-align: center;
  text-shadow: 0 2px 0 black;
  width: 100%;
  height: 60;
  left: 0;
  top: 0;
  line-height: 60;
  padding-left: 10;
  padding-right: 10;
`;

export const Overlay = styled.View`
  position: absolute;
  z-index: 2000;
  background-color: #111;
  border-color: #d7bc85;
  border-width: .5px;
  border-style: solid;
  border-radius: 1;
  width: ${Dimensions.get('screen').width * .85};
  height: ${Dimensions.get('screen').width * .425 * 1.75};
  top: ${Dimensions.get('screen').width * .85 / 2};
  padding: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 1);
`;

export const OverlayText = styled.Text`
  width: 100%;
  height: 100%;
  font-size: 22;
  color: white;
  text-align: center;
  line-height: ${Dimensions.get('screen').width * .425 * 1.75 - 60};
`;

export const Screen = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${isIphoneX() ? '20%' : '10%'};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30;
  color: rgba(255, 255, 255, 0.25);
  margin-top: 50;
`;

export const TouchableCard = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const TouchableClose = styled.TouchableOpacity`
  position: absolute;
  bottom: ${Dimensions.get('screen').width * .05};
  width: ${Dimensions.get('screen').width * .85 * .9};
  height: 40;
  left: ${Dimensions.get('screen').width * .05};
  margin: 0 auto;
  background-color: white;
`;

export const TouchableCloseText = styled.Text`
  color: black;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 40;
`;

export const TouchableInfo = styled.TouchableOpacity`
  position: absolute;
  z-index: 1002;
  width: 50;
  height: 50;
  bottom: 50;
  border-color: #d7bc85;
  border-width: .5px;
  border-style: solid;
  border-radius: 1;
  transform: rotate(45deg);
`;

export const TouchableInfoText = styled.Text`
  text-align: center;
  transform: rotate(-45deg);
  font-size: 24;
  font-weight: 200;
  color: #d7bc85;
  line-height: 50;
`;
