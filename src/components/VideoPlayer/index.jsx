import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "../VideoDescription";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer.js";

function VideoPlayer({
	users,
	description,
	albumImage,
	songTitle,
	src,
	likes,
	comments,
	shares,
}) {
	const video = useRef(null);
	const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

	const playerClassName = clsx(styles.player, {
		[styles.hidden]: playing,
	});

	return (
		<div className={styles.wrapper}>
			<video
				ref={video}
				className={styles.video}
				src={src}
				loop
				controls={false}
				onClick={handlePlay}
				muted={true}
			/>
			<i className={playerClassName} />
			<VideoPlayerActions
				username={users.username}
				avatar={users.avatar}
				likes={likes}
				comments={comments}
				shares={shares}
			/>
			<VideoDescription
				username={users.username}
				description={description}
				albumImage={albumImage}
				songTitle={songTitle}
			/>
		</div>
	);
}

export default VideoPlayer;
<button></button>;
