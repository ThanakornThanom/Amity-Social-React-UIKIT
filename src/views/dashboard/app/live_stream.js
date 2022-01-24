import React from 'react'
import { Container} from 'react-bootstrap'
import Card from '../../../components/Card'
import {Link} from 'react-router-dom'
import ProfileHeader from '../../../components/profile-header'

// images
import gi1 from '../../../assets/images/page-img/gi-1.jpg'
import gi2 from '../../../assets/images/page-img/gi-2.jpg'
import gi3 from '../../../assets/images/page-img/gi-3.jpg'
import gi4 from '../../../assets/images/page-img/gi-4.jpg'
import gi5 from '../../../assets/images/page-img/gi-5.jpg'
import gi6 from '../../../assets/images/page-img/gi-6.jpg'
import gi7 from '../../../assets/images/page-img/gi-7.jpg'
import gi8 from '../../../assets/images/page-img/gi-8.jpg'
import gi9 from '../../../assets/images/page-img/gi-9.jpg'
import user05 from '../../../assets/images/user/05.jpg'
import user06 from '../../../assets/images/user/06.jpg'
import user07 from '../../../assets/images/user/07.jpg'
import user08 from '../../../assets/images/user/08.jpg'
import user09 from '../../../assets/images/user/09.jpg'
import user10 from '../../../assets/images/user/10.jpg'
import img1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/page-img/profile-bg2.jpg'
import img3 from '../../../assets/images/page-img/profile-bg3.jpg'
import img4 from '../../../assets/images/page-img/profile-bg4.jpg'
import img5 from '../../../assets/images/page-img/profile-bg5.jpg'
import img6 from '../../../assets/images/page-img/profile-bg6.jpg'
import img7 from '../../../assets/images/page-img/profile-bg7.jpg'
import img9 from '../../../assets/images/page-img/profile-bg9.jpg'
import {ReactFlvPlayer} from 'react-flv-player'
const LiveStream =() =>{
    return(
        <div>
        <ReactFlvPlayer
          url = "http://live-stream.upstra-china.cc/5fca0b4aa6a6c18d7615886c/d92b833bfc1d2c632a13ed445464a9b6.flv?auth_key=1643019900-0-0-6eebc6153d881600d98ea063ff090c04"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
      </div>

  )

}

export default LiveStream;