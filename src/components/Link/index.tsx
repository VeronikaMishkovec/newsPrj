import React, { FC, useCallback } from 'react';
import { Alert, Linking } from 'react-native';

import { LinkView } from './LinkView';
import { LinkTypes } from './types';

export const Link: FC<LinkTypes> = props => {
  const { url } = props;
  
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <LinkView handlePress={handlePress}>Read more</LinkView>;
};
