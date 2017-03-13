import React from 'react';
import Post from './Post';
import InfiniteScroll from 'react-infinite-scroller';

class Posts extends React.Component {

    render() {
        const { posts, actions } = this.props;
        const loader = <div className="loader">Loading ...</div>;
        let items = [];

        items = posts.map((post, i) => {
           return <Post key={i} post={post} />
        });

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={actions.getMorePosts}
                hasMore={true}
                loader={loader}>
                <div className="posts">
                    {items}
                </div>
            </InfiniteScroll>
        );
    }
};

export default Posts;
