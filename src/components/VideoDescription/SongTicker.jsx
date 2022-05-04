import React from "react";
import MusicIcon from "../Icons/MusicIcon";
import styles from "./styles.module.css";

function SongTicker({ songTitle }) {
	return (
		<div className={styles.song}>
			<MusicIcon />
			<span>{songTitle}</span>
		</div>
	);
}

export default SongTicker;
