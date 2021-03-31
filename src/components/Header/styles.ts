import { StyleSheet } from "react-native";
import { HeaderStylesTypes } from './types';

export const styles = StyleSheet.create<HeaderStylesTypes>({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginHorizontal: 15,
  },
});