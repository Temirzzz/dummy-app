import React from "react";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, hidePosts } from "../../store/actions";
import Button from "../../UI/Button/Button";
import { GeneralBlock } from "../../styled-components";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <GeneralBlock
      stGeneralDirect="column"
      stGeneralAlign="center"
      stGeneralJusth="center"
    >
      <Button stBtnMargin="35px 0 5px 0 " onClick={() => dispatch(getPosts())}>
        Fetch
      </Button>
      <Button stBtnMargin="0 0 30px 0 " onClick={() => dispatch(hidePosts())}>
        Unfetch
      </Button>
      {posts.data ? (
        posts.data.map((post) => (
          <Post key={post.id} title={post.title} body={posts.body} />
        ))
      ) : (
        <GeneralBlock
          stGeneralWidth="350px"
          stGeneralBack="darkcyan"
          stGeneralHeight="60px"
          stGeneralRad="5px"
          stGeneralColor="#fff"
          stGeneralSize="24px"
        >
          No Posts yet!
        </GeneralBlock>
      )}
    </GeneralBlock>
  );
};

export default Posts;
