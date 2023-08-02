import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from './components/button';


const AnimatedPolygon = Animated.createAnimatedComponent(View);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const Polygon = styled(AnimatedPolygon)`
  width: 50px;
  height: 50px;
`;

const AppAnimated: React.FC = ({ navigation }) => {

  const goBack = () => {
    navigation.navigate('home');
  };

  const polygon1Animation = useRef(new Animated.Value(0)).current;
  const polygon2Animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(polygon1Animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(polygon2Animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.delay(2000),
        Animated.timing(polygon1Animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(polygon2Animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start();
    };

    startAnimation();
  }, [polygon1Animation, polygon2Animation]);

  return (
    <Container>
      <Button text={'button'} onPress={goBack}></Button>
      <Polygon
        style={[
          styles.polygon,
          {
            backgroundColor: 'green',
            transform: [
              {
                translateX: polygon1Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
              {
                translateY: polygon1Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
              {
                scaleX: polygon1Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
              {
                scaleY: polygon1Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
            ],
          },
        ]}
      />
      <Polygon
        style={[
          styles.polygon,
          {
            backgroundColor: 'blue',
            transform: [
              {
                translateX: polygon2Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
              {
                translateY: polygon2Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
              {
                scaleX: polygon2Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
              {
                scaleY: polygon2Animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
            ],
          },
        ]}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  polygon: {
    width: 50,
    height: 50,
  },
});

export default AppAnimated;