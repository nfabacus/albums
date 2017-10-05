import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class AlbumList extends Component {
  state = {
    albums:[]
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({
          album: response.data
        })
      })
  }

  render(){
    const {album} = this.state
    return (
      <View>
        {
          album?
          album.map(item=>{
          const {artist, image, thumbnail, title, url} = item
          return (
              <View key={url}>
                <Text>Title: {title}</Text>
                <Text>Artist: {artist}</Text>
              </View>
            )
          }):
          <Text>Loading...</Text>
        }
      </View>
    )
  }
}

export default AlbumList