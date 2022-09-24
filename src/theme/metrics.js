import { Dimensions, PixelRatio } from "react-native";

const figmaWidth = 390;

const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100;
  const screenWidth = Dimensions.get("window").width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

export { px };
