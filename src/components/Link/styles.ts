import { StyleSheet } from "react-native";

import { LinkStylesTypes } from "./types";

export const styles = StyleSheet.create<LinkStylesTypes>({
  button: {
    alignItems: 'center',
    backgroundColor: '#72a2ac',
    borderRadius: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
})