import posts from './posts';
import loading from './loading';

const reducer = (state, action) => ({
    posts: posts(state.posts, action),
    loading: loading(state.loading, action),
});

export default reducer;