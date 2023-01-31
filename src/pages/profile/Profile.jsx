import "./profile.css"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />

     <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">
        <img className="profileCoverImg" src="assets/profile/pp8.jpg" alt="" />
          <img className="profileUserImg" src="assets/profile/pp2.jpg" alt="" />
        </div>

        <div className="profileInfo">
            <h4 className="profileInfoName">Ramarao Mastani</h4>
            <h4 className="profileInfoDesc">Just an another Introvert</h4>
        </div>
         
    </div>
    <div className="profileRightButtom">
    <Feed />
    <Rightbar profile />
    </div>
</div>
    
    </div>
   
    </>

  )
}

export default Profile