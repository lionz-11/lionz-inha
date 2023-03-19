import React from 'react';
import Flex from '../Flex/Flex';
import TagBox from './TagBox';

const TagContainer = ({ tag }) => (
  <Flex flexCenter align='flex-start'>
    {tag.map((t) => (
      <TagBox key={t}>{t}</TagBox>
    ))}
  </Flex>
);

export default TagContainer;
