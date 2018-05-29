import React, { Component } from 'react'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            openText: false,
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

    handleOpenText (event) {
        event.preventDefault()
        this.setState({ openText: true })
    }
    renderOpenText () {
        if (this.state.openText) {
            return <InputText />
        }
    }
    render () {
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.fotoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.props.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        ) 
    }
}

export default Main