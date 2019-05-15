/*
 * Daily Tarot
 * Authored by Benny Schmidt
 */

import { Font } from 'expo';
import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import PropTypes from 'prop-types';

import CardStack, { Card } from 'react-native-card-stack-swiper';

import {
  CardFace,
  CardAnimation,
  CardImage,
  CardStackWrapper,
  Notification,
  NotificationText,
  Overlay,
  OverlayText,
  Screen,
  Title,
  TouchableCard,
  TouchableClose,
  TouchableCloseText,
  TouchableInfo,
  TouchableInfoText
} from '../../assets';

import { cardStackStyle, font, text } from '../../consts';
import { cards, getCardByName } from '../../data';

class Main extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  };

  static defaultProps = {
    cards
  };

  /*
   * Fisher-Yates shuffle algorithm
   * Credit: http://sedition.com/perl/javascript-fy.html
   */
  static shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  state = {
    animateCard: false,
    hasDrawn: false,
    isAssetsLoaded: false,
    lastCardIndex: 0,
    notifications: []
  };

  get date() {
    return new Date().toString().substring(0, 15);
  }

  async componentWillMount() {
    const {
      date,
      onAnimate,
      onNotify,

      props: {
        cards
      }
    } = this;

    let hasDrawn = false;

    await Font.loadAsync({
      [font.style.fontFamily]: font.src
    });

    try {
      const cardIdData = JSON.parse(await AsyncStorage.getItem('@DailyTarot:cardIdData'));

      if (cardIdData && cardIdData.id && cardIdData.date && cardIdData.date == date) {
        hasDrawn = true;
        onAnimate(cardIdData.id);
        onNotify(cardIdData.id);
      }
      else {
        AsyncStorage.clear();
      }
    } catch (error) {
      console.log(text.errorRetrieving, error);
    }

    this.setState({
      hasDrawn,
      isAssetsLoaded: true
    });
  }

  onAnimate = id => {
    const { cards } = this.props;
    const card = cards.filter(c => c.id === id)[0];

    if (card) {
      this.setState({
        animateCard: card
      });
    }
  };

  onNotify = id => {
    const {
      props: {
        cards
      },

      state: {
        notifications
      }
    } = this;

    const card = cards.filter(c => c.id === id)[0];
    const message = `${text.drawn} [${card.name}].`;

    notifications.push(message);

    this.setState({
      notifications
    });
  };

  onPressClose = event => this.setState({ isOverlaying: false });

  onPressInfo = event => this.setState({ isOverlaying: true });

  onReveal = id => {
    const {
      date,
      onAnimate,
      onNotify,

      props: {
        cards
      },

      state: {
        hasDrawn,
        lastCardIndex,
        notifications
      }
    } = this;

    if (!hasDrawn) {
      onAnimate(id);
      onNotify(id);

      try {
        AsyncStorage.setItem('@DailyTarot:cardIdData', JSON.stringify({ id, date }));
      } catch (error) {
        console.log(text.errorSaving, error);
      }
    }
  };

  onSwipe = event => {
    const {
      onReveal,

      props: {
        cards
      }
    } = this;

    const id = Main.shuffle(cards.filter(c => c.id)).pop().id;

    onReveal(id);
  };

  render() {
    const {
      onPressClose,
      onPressInfo,
      onSwipe,

      props: {
        cards
      },
      state: {
        animateCard,
        isAssetsLoaded,
        isOverlaying,
        notifications
      }
    } = this;

    const fontStyle = isAssetsLoaded ? font.style : {};
    const hasNotifications = notifications.length > 0;

    const notificationJsx = hasNotifications ? (
      <Notification>
        <NotificationText style={fontStyle}>{notifications[0]}</NotificationText>
      </Notification>
    ) : null;

    const overlayJsx = isOverlaying ? (
      <Overlay>
        <OverlayText style={fontStyle}>{animateCard.meaning}</OverlayText>
        <TouchableClose onPress={onPressClose}>
          <TouchableCloseText>
            {text.close}
          </TouchableCloseText>
        </TouchableClose>
      </Overlay>
    ) : null;

    return (
      <Screen>
        {overlayJsx}
        {notificationJsx}
        {
          animateCard ? (
            <TouchableInfo onPress={onPressInfo} disabled={isOverlaying}>
              <TouchableInfoText>{text.getMeaning}</TouchableInfoText>
            </TouchableInfo>
          ) : null
        }
        {
          animateCard ? (
            <CardAnimation>
              <CardFace key={animateCard.id}>
                <TouchableCard>
                  <CardImage source={getCardByName(animateCard.name).image} />
                </TouchableCard>
              </CardFace>
            </CardAnimation>
          ) : (
            <CardStackWrapper>
              <Title style={fontStyle}>
                {text.title}
              </Title>
              <CardStack horizontalSwipe={false} style={cardStackStyle} onSwiped={onSwipe}>
                <Card>
                  <CardFace key={animateCard.id}>
                    <TouchableCard>
                      <CardImage source={getCardByName(`CardBack`).image} />
                    </TouchableCard>
                  </CardFace>
                </Card>
                <Card>
                  <CardFace key={animateCard.id}>
                    <TouchableCard>
                      <CardImage source={getCardByName(`CardBack`).image} />
                    </TouchableCard>
                  </CardFace>
                </Card>
              </CardStack>
            </CardStackWrapper>
          )
        }
      </Screen>
    );
  }
}

export { Main }
