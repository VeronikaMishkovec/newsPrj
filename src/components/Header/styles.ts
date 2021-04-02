import { StyleSheet } from "react-native";
import { HeaderStylesTypes } from './types';

export const MARGIN_HEADER = 15;

export const styles = StyleSheet.create<HeaderStylesTypes>({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: MARGIN_HEADER,
    marginHorizontal: MARGIN_HEADER,
  },
});