import React from "react";
import styles from "./styles.module.css";

function AlbumDisk({ albumImage }) {
	return (
		<div className={styles.album}>
			<img src={albumImage} className={styles.albumImage} alt="Album Image" />
		</div>
	);
}

export default AlbumDisk;
