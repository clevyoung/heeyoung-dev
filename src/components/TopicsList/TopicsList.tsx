import { Link } from 'gatsby';
import React from 'react';

import { TopicsWrapper, TagsList } from './TopicsList.styles';

interface Props {
  topics: any;
}

const TopicsList: React.VFC<Props> = ({ topics }) => {
  return (
    <TopicsWrapper>
      <TagsList>
        {topics.map((topic, index) => {
          const { totalCount, fieldValue } = topic;

          return (
            <Link to={`/topic/${fieldValue}`} key={index}>
              <span>{fieldValue}</span>
              <div>{totalCount} posts</div>
            </Link>
          );
        })}
      </TagsList>
    </TopicsWrapper>
  );
};

export default TopicsList;
