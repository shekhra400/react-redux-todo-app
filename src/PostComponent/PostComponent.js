import React from "react";
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getAllPostsAction } from "../actions/commonAction";

export class PostComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <h2>PostComponent</h2>
        <div>Current Post</div>
      </div>
    )
  }

}

PostComponent.propTypes = {
  onComponentMount: PropTypes.func,
  posts: PropTypes.object,
};

PostComponent.defaultProps = {
  posts: {
    data:[],
    error:null
  },
};

export default PostComponent;
