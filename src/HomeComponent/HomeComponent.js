import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { getAllPostsAction, saveAddData } from "../actions/commonAction";
import PostComponent from '../PostComponent/PostComponent';


export class HomeComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialPosts:[],
      finalPosts:[],
      error:null,
      showAddForm: false,
      form:{
        title:'',
        body:'',
      }
    };
  }

  componentDidMount(){
    this.props.onComponentMount();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.posts !== nextProps.posts){
      const { data } = nextProps.posts;
      this.setState({initialPosts: data, finalPosts: data})
    }
  }

  changehandler = (e) => {
    let updatedPosts = this.state.initialPosts;
    console.log(e.target.value,updatedPosts);
    updatedPosts = updatedPosts.filter(post => {
      return post.title.includes(e.target.value);

    });
    this.setState({finalPosts:updatedPosts})
  }

  deleteHandler = (id) => {
    let updatedPosts = this.state.finalPosts;
    updatedPosts = updatedPosts.filter((post) => {
      // return post.title.includes(e.target.value);
      return (post.id !== id);

    });
    this.setState({finalPosts:updatedPosts})
  }

  addPostHandler = () => {
    this.setState({showAddForm:true});
  }

  handleChange = (e)=> {
    var form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form:form});
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    this.props.submitAddForm(this.state.form);
    this.setState({showAddForm:false, form:{
      title:'',
      body:'',
    }});
    
  }

  render(){
    const { error: errorMsg } = this.props.posts;
    return (
      <div>
        <h2>HomeComponent</h2>
        <div>
          Item Counts : <span  className="font-weight-bold">{this.state.finalPosts.length}</span>
          <button onClick={this.addPostHandler}  type="button" className="btn btn-primary float-right mb-2">Add Post</button>
        </div>
        {this.state.showAddForm &&
        <div className="">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" name='title' className="form-control" value={this.state.form.title} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Body:</label>
              <input type="text" name='body' className="form-control" value={this.state.form.body} onChange={this.handleChange} />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" onClick={this.submitFormHandler} />
          </form>
        </div>}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Search</span>
          </div>
          <input onChange={this.changehandler} type="text" className="form-control" placeholder="Search Posts..." />
        </div>
        {errorMsg &&
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>}
        <div className="container">
          <div className="row">
            <ul className="list-group text-left col-md-6">
              {
                this.state.finalPosts.map((item,index) => {
                  return (<li className="list-group-item" key={item.id}>
                      <Link className="" to={'/posts/'+item.id}>{item.title}</Link>
                      <button onClick={() => this.deleteHandler(item.id)} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </li>)
                })
              }
            </ul>
            <div className="col-md-6">
              <Route exact path='/posts/:id' component={PostComponent}/>
            </div>
            </div>
          </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentMount : () => { dispatch(getAllPostsAction()) },
    submitAddForm:(formData) => {dispatch(saveAddData(formData))}
  }
}

HomeComponent.propTypes = {
  onComponentMount: PropTypes.func,
  posts: PropTypes.object,
};

HomeComponent.defaultProps = {
  posts: {
    data:[],
    error:null
  },
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
