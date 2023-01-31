import './share.css';
import {PermMedia ,Label,Room,EmojiEmotions} from '@mui/icons-material'

const Share = () => {
  return (
    <div className="share">
      <div className='shareWrapper'>

          <div className="shareTop">
            <img className='shareProfileImg' src="assets/profile.jpg" alt="" />
            <input placeholder='Whats in your Mind' className='shareInput' />
          </div>
          <hr className='shareHr'/>

        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon'/>
              <span className='shareOptionText'>Photo or video</span>
            </div>
            <div  className="shareOption">
              <Label htmlColor='blue' className='shareIcon'/>
              <span className='shareOptionText'>Tags</span>
            </div>
            <div  className="shareOption">
              <Room htmlColor='green' className='shareIcon'/>
              <span className='shareOptionText'>Location</span>
            </div>
            <div  className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
              <span className='shareOptionText'>Emoji</span>
            </div>
          </div>
          <button className="shareButton">
            share
          </button>
        </div>
    
     </div>
    </div>
  )
}

export default Share