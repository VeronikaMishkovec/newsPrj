import React, { FC } from 'react';
import moment from 'moment';

import { NewsCardTypes } from './types';
import { NewsCardView } from './NewsCardView';

export const NewsCard: FC<NewsCardTypes> = props => {
  const { author, published_date, section, src, subtitle, title, url } = props;

  const date = moment(published_date).format('DD.MM.YYYY');

  return (
    <NewsCardView
      author={author}
      published_date={date}
      section={section}
      src={src}
      subtitle={subtitle}
      title={title}
      url={url}
    />
  );
};
