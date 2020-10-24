import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postAction';
import { connect } from 'react-redux'


class Posts extends Component {
  componentDidMount(){
    console.log('hi');
    this.props.fetchPosts()
  }

  componentWillReceiveProps(next){
    if(next.newPost){
      this.props.posts.unshift(next.newPost)
    }
  }
  render(){
    const postItems = this.props.posts.map(post => (
     <div key={post.id}>
       <h3>{post.title}</h3>
       <p>{post.body}</p>
     </div>
     ))

    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts : state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
