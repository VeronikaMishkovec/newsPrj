import React, { FC } from 'react';
import moment from 'moment';

import { NewsCardTypes } from './types';
import { NewsCardView } from './view';

export const NewsCard: FC<NewsCardTypes> = props => {
  const { title, src, subtitle, published_date, section, author, url } = props;

  const date = moment(published_date).format('DD.MM.YYYY');

  return (
    <NewsCardView
      title={title}
      src={src}
      subtitle={subtitle}
      published_date={date}
      section={section}
      author={author}
      url={url}
    />
  );
};
