import React from 'react';
import Post from '../../components/blog/post';
import Styled from './styled-injector';

export default ({ entry, widgetFor }) => (
  <Styled>
    <Post
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      tags={entry.getIn(['data', 'tags'])}
      subTags={entry.getIn(['data', 'subTags'])}
    />
  </Styled>
);
