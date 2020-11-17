import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native' 
import PostCard from '../../components/PostCard'
import Header from '../../components/Header'
import ColorSchema from '../../constants/ColorSchema'
import {useSelector, useDispatch} from 'react-redux'
import * as postActions from '../../store/actions/posts'
import * as tagActions from '../../store/actions/tags'
import * as LikeActions from '../../store/actions/likes'
import * as DislikeActions from '../../store/actions/dislikes'
import * as UserActions from '../../store/actions/users'

const MainFeedScreen = (props) => {

const dispatch = useDispatch()
const posts = useSelector(state => state.posts)
const tags = useSelector(state => state.tags)
const likes = useSelector(state => state.likes)
const dislikes = useSelector(state => state.dislikes)
const users = useSelector(state => state.users )

console.log(posts, "posts")
console.log(tags, "tags")
console.log(likes, "likes")
console.log(dislikes, "dislikes")
console.log(users, "users")

    const fetchUsers = () => {
        fetch('http://localhost:3001/api/v1/users')
        .then(r => r.json())
        .then(users => {
            dispatch(UserActions.setUsers(users))
        })
    }

    const fetchLikes = () => {
        fetch('http://localhost:3001/api/v1/likes')
        .then(r => r.json())
        .then(likes => {
            dispatch(LikeActions.setLikes(likes))
        })
    }

    const fetchDislikes= () => {
        fetch('http://localhost:3001/api/v1/dislikes')
        .then(r => r.json())
        .then(dislikes => {
            dispatch(DislikeActions.setDislikes(dislikes))
        })
    }

  const fetchPosts = () => {
    fetch('http://localhost:3001/api/v1/posts')
    .then(r => r.json())
    .then(posts => {
      dispatch(postActions.setPosts(posts))
    })
  }

  const fetchTags = () => {
      fetch('http://localhost:3001/api/v1/tags')
      .then(r => r.json())
      .then(tags => {
          dispatch(tagActions.setTags(tags))
      })
  }

  const sortContent = () => {
      const mutatablePosts = [...posts]
      mutatablePosts.map(post => {
        tags.forEach(tag => {
            if (tag.id === post.tag_id){
                post.tag = tag.prop 
            }
        })
      })
      mutatablePosts.map(post => {
        post.likes = []
          likes.forEach(like => {
              if (post.id === like.post_id){
                  post.likes.push(like)
              }
          })
      })
      mutatablePosts.map(post => {
          post.dislikes = []
        dislikes.forEach(dislike => {
            if (post.id === dislike.post_id){
                post.dislikes.push(dislike)
            }
        })
    })
    mutatablePosts.map(post => {
        users.forEach(user => {
            if (post.user_id ===  user.id){
                post.user = user 
            }
        })
    })
      console.log('mutatableposts', mutatablePosts)
      return mutatablePosts
  }

  useEffect(() => {
    fetchUsers()
    fetchPosts()
    fetchTags()
    fetchLikes()
    fetchDislikes()
    sortContent()
  }, [])

    return ( 
        <View style={{flex: 1, backgroundColor: ColorSchema.sky.sharp}}>
         <View style={{alignItems: 'center', height: '7%', marginBottom: 40}}>
                 <Header />
        </View>
        <FlatList 
        data={sortContent()} 
        keyExtractor={item => item.id} 
        renderItem={itemData => <PostCard image={itemData.item.image_url} tag={itemData.item.tag} likes={itemData.item.likes.length} dislikes={itemData.item.dislikes.length} user={itemData.item.user} />}
        />
    </View>
     );
}
 
export default MainFeedScreen;