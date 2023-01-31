import React from 'react'
import './online.css'

const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
    <div className="rightbarprofileImgContainer">
      <img className="rightbarProfileImg"  src={user.profilePicture} alt=""  />
      <span className="rightbarOnline"></span>
    </div>
    <span className='rightbarUsername' > {user.userName} </span>
  </li>

  )
}

export default Online