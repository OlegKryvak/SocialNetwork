import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  
  return (
    <div className={s.content}>
      <div>
        <img className={s.content_img} src="https://th.bing.com/th/id/OIP.ZsCCTNSzrS4-cqMFIdmWdwAAAA?w=205&h=134&c=7&o=5&dpr=1.25&pid=1.7" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        Ava + description
      </div>



    </div>
  )
}

export default ProfileInfo;