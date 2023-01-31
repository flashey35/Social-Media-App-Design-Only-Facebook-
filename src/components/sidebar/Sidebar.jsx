import './sidebar.css';
import {RssFeed,Chat,PlayCircleFilled,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from '@mui/icons-material';
import { Users } from '../../dummy';
import Closefriend from '../closefriends/Closefriend';


const Sidebar = () => {



  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <RssFeed className='sidebarIcon' />
                <span className="siderbarListItemText">Feed</span>
              </li>
              <li className="sidebarListItem">
                <Chat className='sidebarIcon' />
                <span className="siderbarListItemText">Chat</span>
              </li>
              <li className="sidebarListItem">
                <PlayCircleFilled className='sidebarIcon'/>
                <span className="siderbarListItemText">Videos</span>
              </li>
              <li className="sidebarListItem">
                <Group className='sidebarIcon' />
                <span className="siderbarListItemText">Group</span>
              </li>
              <li className="sidebarListItem">
                <Bookmark className='sidebarIcon'/>
                <span className="siderbarListItemText">Bookmarks</span>
              </li>
              <li className="sidebarListItem">
                <HelpOutline className='sidebarIcon'/>
                <span className="siderbarListItemText">Questions</span>
              </li>
              <li className="sidebarListItem">
                <WorkOutline className='sidebarIcon' />
                <span className="siderbarListItemText">jobs</span>
              </li>
              <li className="sidebarListItem">
                <Event className='sidebarIcon' />
                <span className="siderbarListItemText">Event</span>
              </li>
              <li className="sidebarListItem">
                <School className='sidebarIcon' />
                <span className="siderbarListItemText">Courses</span>
              </li>
            </ul>

            <button className="sidebarButton">
              Show More
            </button>
            <hr className='sidebarhr'/>
            <ul className="sidebarFriendList">
                  {Users.map((u)=>(
                    <Closefriend key={u.id} user={u} />
                  ))}
            </ul>
        </div>
        </div>
  )
}

export default Sidebar