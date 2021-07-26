import React from 'react'
import imageInSrc from "./imageInSrc.jpg";
import "./styleProfile.css"

const ProfilePhoto = () => {
    return (
        <div className="ProfilePhoto">
            <img width={300} height={240} src = {imageInSrc} alt="imageInSrc"/>
        </div>
    )
}
export default ProfilePhoto;
