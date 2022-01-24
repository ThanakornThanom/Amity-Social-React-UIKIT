import React from 'react'
import { Container} from 'react-bootstrap'
import Card from '../../../components/Card'
import {Link} from 'react-router-dom'
import ProfileHeader from '../../../components/profile-header'


import {ReactFlvPlayer} from 'react-flv-player'
const LiveStream =() =>{
    return(
        <div>
        <ReactFlvPlayer
          url = "http://live-stream.upstra-china.cc/5fca0b4aa6a6c18d7615886c/764bc4cb93d83fe1292c5851bf731270.flv?auth_key=1643022343-0-0-3b9cda5e686ea160d221852ac657625c"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
      </div>

  )

}

export default LiveStream;