import posts from './posts';

const reducer = (state, action) => ({
    posts: posts(state.posts, action)
});

export default reducer;