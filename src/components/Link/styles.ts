import { StyleSheet } from "react-native";
import { COLOR, FONT, FONT_SIZE, BORDER_RADIUS, PADDING } from "../constants";

import { LinkStylesTypes } from "./types";

export const styles = StyleSheet.create<LinkStylesTypes>({
  button: {
    alignItems: 'center',
    backgroundColor: COLOR.BTN,
    borderRadius: BORDER_RADIUS,
    paddingVertical: PADDING,
  },
  buttonText: {
    color: COLOR.LIGHT_TEXT,
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.HEADER,
  },
})