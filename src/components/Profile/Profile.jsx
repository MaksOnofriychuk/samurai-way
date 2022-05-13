import React from "react";
import contentImg from "../../assets/img/content-img.jpeg";

const Profile = () => {
  return (
    <div className="content">
      <div className="content__img">
        <img src={contentImg} alt="content-img" />
      </div>
      <div>ava + desrc</div>
      <div>My post</div>
      <div>New post</div>
      <div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  );
};

export default Profile;
