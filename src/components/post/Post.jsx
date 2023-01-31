import './post.css'
import {MoreVert} from '@mui/icons-material'
import { Users} from '../../dummy';
import { useState } from 'react';

const Post = ({post}) => {


    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);


    const likeHandler = ()=>{
        setLike(isLiked ? like - 1: like + 1)
        setIsLiked(!isLiked)
    }


  return (
    <div className='post'>
 <div className="postwrapper">

        {/* top area  */}
        <div className="postTop">
<div className="postTopLeft">
    <img className='postProfileImg' 
    src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
    <span className="postUsername">{Users.filter((u)=> u.id === post?.userId)[0].userName }</span>
    <span className="postDate">{post.date}</span>

</div>
<div className="PostTopRight">
    <MoreVert />


</div>

        </div>

         {/* center area */}
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img className='postImg' src={post.photo} alt="" />
        </div>


        {/* buttom area  */}
        <div className="postButtom">
            <div className="postButtomLeft">
                {/* Like img  */}
                <img className='likeicon' src="assets/like.jpg"  onClick={likeHandler}  alt="" />
                {/* Love Img  */}
                <img className='likeicon' src="assets/love.jpg" onClick={likeHandler}  alt="" />
             <span className="postLikeCounter">{like} </span>
            </div>

            <div className="postButtomRight">
                <div className="postCommentText"> {post.comment} comments</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Post