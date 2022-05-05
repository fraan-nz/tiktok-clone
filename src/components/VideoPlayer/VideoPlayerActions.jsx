import React from "react";
import { Comment } from "../Icons/Comments";
import { Heart } from "../Icons/Heart";
import { Share } from "../Icons/Share";
import styles from "./styles.module.css";

function VideoPlayerActions({
	username,
	avatar,
	likes,
	comments,
	shares,
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
			<div className={styles.user}>
				<img src={avatar} alt={username} />
				<img
					src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg"
					width="24"
				/>
			</div>
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
