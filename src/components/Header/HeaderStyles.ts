import { StyleSheet } from "react-native";
import { THeaderStyles } from './HeaderTypes';

export const styles = StyleSheet.create<THeaderStyles>({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginHorizontal: 15,
  },
});