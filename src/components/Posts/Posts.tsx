import React from 'react';

import PostItem from '../PostItem';
import Banner from '../Banner';
import { PostsWrapper, PostsCenter, PostsTitle } from './Posts.styles';

interface Props {
  posts: any;
  title: string;
  isAboutVisible?: boolean;
}

const Posts: React.FC<Props> = ({ posts, title, isAboutVisible }) => {
  return (
    <PostsWrapper>
      <PostsTitle>{title}</PostsTitle>
      <PostsCenter>
        <article>
          {posts.map((post) => {
            console.log(post.id);

            return <PostItem key={post.id} {...post} />;
          })}
        </article>
        <article>
          <Banner isAboutVisible={isAboutVisible} />
        </article>
      </PostsCenter>
    </PostsWrapper>
  );
};

export default Posts;
