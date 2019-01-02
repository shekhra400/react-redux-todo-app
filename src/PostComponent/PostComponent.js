import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEqual} from 'lodash/fp';
import { getCurrentPostsAction } from "../actions/commonAction";

export class PostComponent extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.getCurrentPostData(id);
  }

  componentWillReceiveProps(nextProps){
    if(!isEqual(nextProps.match.params,this.props.match.params)){
      const { id } = nextProps.match.params;
      this.props.getCurrentPostData(id);
    }
  }

  render(){
    const { error: errorMsg,data:currentPost } = this.props.currentPost;
    return (
      <div>
        <h2>PostComponent</h2>
        {errorMsg &&
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>}
        <div className="card">
            <ul className="list-group list-group-flush ">
                <li className="list-group-item">
                    <strong>Title</strong>
                </li>
                <li className="list-group-item">
                  {currentPost.title}
                </li>
                <li className="list-group-item" >
                    <strong>Description</strong>
                </li>
                <li className="list-group-item" >
                  {currentPost.body}
                </li>
            </ul>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    currentPost : state.currentPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentPostData : (id) => { dispatch(getCurrentPostsAction(id)) },
  }
}

PostComponent.propTypes = {
  getCurrentPostData: PropTypes.func,
  post: PropTypes.object,
};

PostComponent.defaultProps = {
  post: {},
};

export default connect(mapStateToProps,mapDispatchToProps)(PostComponent);

