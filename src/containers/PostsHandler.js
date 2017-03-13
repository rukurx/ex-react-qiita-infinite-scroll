import { connect } from 'react-redux';
import Posts from '../components/Posts';

const mapStateToProps = (state) => ({
    posts: state.posts
});

const PostsHandler = connect(
    mapStateToProps,
)(Posts);

export default PostsHandler;
