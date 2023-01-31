import './closefriend.css'

const Closefriend = ({user}) => {
  return (
    <li className="sidebarFriends">
     <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
    <span className="sidebarFriendName">{user.userName} </span>
    </li>
  )
}

export default Closefriend