import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            messages: [
                {
                    text: 'Mensaje del Tweet',
                    picture: 'https://pbs.twimg.com/profile_images/920335353491476480/Im_sdPXN_400x400.jpg',
                    displayName: 'Luis Alvarado',
                    username: 'lalvarado_cl',
                    date: Date.now() - 180000
                },

                {
                    text: 'Este es un nuevo mensaje',
                    picture: 'https://pbs.twimg.com/profile_images/920335353491476480/Im_sdPXN_400x400.jpg',
                    displayName: 'Luis Alvarado',
                    username: 'lalvarado_cl',
                    date: Date.now() - 1800000
                }
            ]
        }
    }

    render () {
        return <MessageList messages={this.state.messages} />
    }
}

export default Main