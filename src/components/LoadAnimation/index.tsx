import React from "react";
import LottieView from "lottie-react-native";
import { Container } from "./styles";
import loadingCar from "../../assets/load_animated.json";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{ height: 1600 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
