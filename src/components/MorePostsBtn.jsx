import React from 'react';

const MorePostsBtn = ({ actions }) => {
    return (
        <div>
            <a className="btn-read_more" onClick={e => {e.preventDefault();actions.getMorePosts()}}>もっと見る</a>
        </div>
    );
};

export default MorePostsBtn;
