import { StyleSheet } from 'react-native';
import { FONT, MARGINS, FONT_SIZE } from '../constants';
import { HeaderStylesTypes } from './types';

export const styles = StyleSheet.create<HeaderStylesTypes>({
  header: {
    fontFamily: FONT.BLACK,
    fontSize: FONT_SIZE.HEADER,
    marginBottom: MARGINS.HEADER,
    marginHorizontal: MARGINS.HEADER,
  },
});
