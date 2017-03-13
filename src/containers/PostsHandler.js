import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(actionCreators, dispatch) };
};

const PostsHandler = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);

export default PostsHandler;
