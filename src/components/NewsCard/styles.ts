import { StyleSheet } from 'react-native';
import {
  COLOR,
  CONTAINER_PADDING,
  FONT,
  FONT_SIZE,
  PADDING,
} from '../constants';
import { NewsCardStylesTypes } from './types';

export const styles = StyleSheet.create<NewsCardStylesTypes>({
  container: {
    paddingBottom: CONTAINER_PADDING,
  },
  textContainer: {
    paddingHorizontal: PADDING,
    paddingVertical: CONTAINER_PADDING,
  },
  title: {
    backgroundColor: COLOR.TEXT_BG,
    borderStyle: 'solid',
    color: COLOR.LIGHT_TEXT,
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.TITLE,
    paddingHorizontal: PADDING,
    paddingVertical: CONTAINER_PADDING,
  },
  subtitle: {
    fontFamily: FONT.REGULAR,
    fontSize: FONT_SIZE.TEXT,
    marginBottom: PADDING,
  },
  info: {
    flexDirection: 'row',
    fontSize: FONT_SIZE.OPTION_INFO,
    justifyContent: 'space-between',
  },
  text: {
    color: COLOR.BTN,
    fontFamily: FONT.REGULAR,
    marginBottom: PADDING,
  },
  image: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
});
