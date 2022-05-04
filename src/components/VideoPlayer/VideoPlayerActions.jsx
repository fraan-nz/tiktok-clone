import React from "react";
import { Comment } from "../Icons/Comments";
import { Heart } from "../Icons/Heart";
import { Share } from "../Icons/Share";
import styles from "./styles.module.css";

function VideoPlayerActions({
	likes = 12305,
	comments = 240,
	shares = 1022,
	hearted = false,
}) {
	const handleLike = () => {
		alert("like");
	};
	const handleComment = () => {
		alert("comment");
	};
	const handleShare = () => {
		alert("share");
	};

	return (
		<aside className={styles.actions}>
			<button className={styles.action} onClick={handleLike}>
				<Heart />
				<strong title="like">{likes}</strong>
			</button>

			<button className={styles.action} onClick={handleComment}>
				<Comment />
				<strong title="comments">{comments}</strong>
			</button>

			<button className={styles.action} onClick={handleShare}>
				<Share />
				<strong title="shares">{shares}</strong>
			</button>
		</aside>
	);
}

export default VideoPlayerActions;
