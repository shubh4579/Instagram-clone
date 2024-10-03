import React, { useState } from "react";
import "./postInteraction.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const PostInteraction = ({ username, status }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  const WORD_BREAK = 40

  status = 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'


  const handleLike = () => {
    if (liked) {
      setLikedCount(likedCount - 1);
    } else {
      setLikedCount(likedCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="interaction">
      <div className="container">
        <div className="like" onClick={handleLike}>
          {liked ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>
        <div className="comment">
          <CommentIcon />
        </div>
        <div className="share">
          <ShareIcon />
        </div>
        <div className="savePost">
          <BookmarkBorderIcon />
        </div>
      </div>
      <div className="likeCount">{likedCount} Likes</div>
      <div className="username">
        <div>
          {username}
        </div>
        <div className="status">
            {status.length > WORD_BREAK ? (
              <>
                {status.slice(0, WORD_BREAK)} {!isExpanded && <span className="moreButton" onClick={()=>setIsExpanded(!isExpanded)}>more...</span>}
              </>
            ) : (
              status
            )}
        </div>
      </div>
         {isExpanded && status.length>WORD_BREAK && <div>
            <div className="status top-padding">{status.slice(WORD_BREAK,)}</div>
          </div>}
    </div>
  );
};

export default PostInteraction;
