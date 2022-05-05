import React, { useRef, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoDescription from "../VideoDescription";

function VideoPlayer({ users, description, albumImage, songTitle, src }) {
	const [playing, setPlaying] = useState(false);
	const video = useRef(null);

	const handlePlay = () => {
		playing ? video.current.pause() : video.current.play();

		setPlaying(!playing);
	};

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
			/>
			<i className={playerClassName} onClick={handlePlay} />
			<VideoPlayerActions username={users.username} avatar={users.avatar} />
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
