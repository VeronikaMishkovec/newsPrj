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
    color: '#fff',
    borderStyle: 'solid',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#72a2ac',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    height: 200,
  },
  button: {
    backgroundColor: '#72a2ac',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
