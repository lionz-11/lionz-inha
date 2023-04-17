import React from 'react';
import Flex from '../Flex/Flex';
import TagBox from './TagBox';

const TagContainer = ({ tag }) => (
  <Flex flexCenter justify='flex-start' style={{ flexWrap: 'wrap', gap: '10px' }}>
    {tag.map((t) => (
      <TagBox key={t}>{t}</TagBox>
    ))}
  </Flex>
);

export default TagContainer;
