import React from 'react';
import Video from '../../components/blog/video';
import Styled from './styled-injector';
import { getVideoId } from '../../utils/youtube';

export default ({ entry, widgetFor }) => (
  <Styled>
    <Video
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      videoId={getVideoId(entry.getIn(['data', 'videoUrl']))}
    />
  </Styled>
);
