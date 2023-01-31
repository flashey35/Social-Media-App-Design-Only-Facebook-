import './rightbar.css';
import { Users} from '../../dummy';
import Online from '../online/Online';


const Rightbar = ({profile}) => {

  const HomeRightBar = ()=> {
return (
  <>
  <div className="birthdayContainer">
        <img className='birthdayImg' src="assets/profile/pp2.jpg" alt=""  />
          <span className="birthdayText">
              <b>paul </b> and <b>5 others</b> have birthday Today 
          </span>
      </div>
      <img className='rightbarAd' src="assets/ads.jpg" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
  </>
)
}

const ProfileRightBar =()=>{
  return(
    <>
    <h4 className='rightbarTitle'>User Infomation</h4>
    <div className="rightbarInfo">
      <div className="rightbarinfoItem">
        <span className="rightbarInfoKey">City</span>
        <span className="rightbarInfoValue">Newyork</span>
        </div>

        <div className="rightbarinfoItem">
        <span className="rightbarInfoKey">From</span>
        <span className="rightbarInfoValue">Barcelona</span>
        </div>

        <div className="rightbarinfoItem">
        <span className="rightbarInfoKey">RelationShip</span>
        <span className="rightbarInfoValue">Single</span>
        </div>
 </div>
 <h4 >UserFriends</h4>
 <div className="righrbarFollowings">
  <div className="rightbarFollowing">
    <img src="assets/profile/pp2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">
      Jogn cater
    </span>
  </div>

  <div className="rightbarFollowing">
    <img src="assets/profile/pp2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">
      Jogn cater
    </span>
  </div>

  <div className="rightbarFollowing">
    <img src="assets/profile/pp2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">
      Jogn cater
    </span>
  </div>

  <div className="rightbarFollowing">
    <img src="assets/profile/pp2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">
      Busan
    </span>
  </div>

  <div className="rightbarFollowing">
    <img src="assets/profile/pp2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">
      Ace
    </span>
  </div>

  <div className="rightbarFollowing">
    <img src="assets/profile/pp2.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">
      Nezuko
    </span>
  </div>
 </div>
    </>
  )
}
  return (
    <div className='rightbar'>
    <div className="rightbarWrapper">
      {profile? <ProfileRightBar /> : <HomeRightBar />}
    </div>
    </div>
  )
}

export default Rightbar