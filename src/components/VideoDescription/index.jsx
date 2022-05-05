import React from "react";
import AlbumDisk from "./AlbumDisk";
import SongTicker from "./SongTicker";
import styles from "./styles.module.css";

function VideoDescription({ username, description, albumImage, songTitle }) {
	return (
		<footer className={styles.description}>
			<div className={styles.textWrapper}>
				<strong>
					<a className={styles.username} href={`/user/${username}`}>
						@{username}
					</a>
				</strong>
				<p className={styles.text}>{description}</p>
				<SongTicker songTitle={songTitle} />
			</div>
			<div>
				<AlbumDisk albumImage={albumImage} />
			</div>
		</footer>
	);
}

export default VideoDescription;
