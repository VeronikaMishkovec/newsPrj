import { StyleSheet } from 'react-native';
import { NewsCardStylesTypes } from './types';

export const styles = StyleSheet.create<NewsCardStylesTypes>({
  container: {
    paddingBottom: 15,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderStyle: 'solid',
    color: '#fff',
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  subtitle: {
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    flexDirection: 'row',
    fontSize: 12,
    justifyContent: 'space-between',
  },
  text: {
    color: '#72a2ac',
    fontFamily: 'NotoSansJP-Regular',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
});
