import "./card.css";
import Heart from "../../assets/heart.svg";
import HeartFilled from "../../assets/heartFilled.svg";
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";
import { useState } from "react";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked)
  }
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" srcset="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img src={HeartFilled} alt="" className="cardIcon" />
        ) : (
          <img src={Heart} alt="" className="cardIcon" />
        )}
        <img src={Comment} alt="" className="cardIcon" />
        <img src={Share} alt="" className="cardIcon" />
      </div>
    </div>
  );
};

export default Card;
