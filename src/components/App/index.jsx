import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'


class App extends Component {
    constructor () {
        super()

        this.state = {
            user: {
                fotoURL: 'https://pbs.twimg.com/profile_images/920335353491476480/Im_sdPXN_400x400.jpg',
                email: 'luis.alvaradofcb@gmail.com',
                onOpenText: false

            }
        }
    }
    render () {
        return (
            <div>
                <Header />
                <Main user={this.state.user} />
            </div>
        )
    }
}

export default App