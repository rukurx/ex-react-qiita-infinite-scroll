const posts = (state = {}, action) => {
    switch(action.type) {

    case 'SUCCESS_GET_MORE_POSTS':
        let posts = [].concat(state);
        action.posts.forEach(function(post) {
            let targetIndex = posts.findIndex(item => item.id === post.id);
            if (targetIndex === -1) {
                posts.push(post);
            }
        });

        return posts;

    default:
        return state;
    }
};

export default posts;