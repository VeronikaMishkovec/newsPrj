import React, { FC } from 'react';
import { NewsCardTypes } from './types';
import { NewsCardView } from './view';

export const NewsCard: FC<NewsCardTypes> = props => {
  const { title, src, subtitle, published_date, section, author, url } = props;

  return (
    <NewsCardView
      title={title}
      src={src}
      subtitle={subtitle}
      published_date={published_date}
      section={section}
      author={author}
      url={url}
    />
  );
};
