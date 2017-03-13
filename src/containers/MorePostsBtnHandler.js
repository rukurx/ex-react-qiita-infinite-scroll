import { connect } from 'react-redux';
import MorePostsBtn from '../components/MorePostsBtn';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(actionCreators, dispatch) };
};

const MorePostsBtnHandler = connect(
    mapStateToProps,
    mapDispatchToProps
)(MorePostsBtn);

export default MorePostsBtnHandler;
