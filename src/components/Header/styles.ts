import { StyleSheet } from "react-native";
import { FONT, MARGIN_HEADER } from "../constants";
import { HeaderStylesTypes } from './types';


export const styles = StyleSheet.create<HeaderStylesTypes>({
  header: {
    fontSize: 18,
    fontFamily: FONT.BOLD,
    marginBottom: MARGIN_HEADER,
    marginHorizontal: MARGIN_HEADER,
  },
});