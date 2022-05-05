import React from "react";
import MusicIcon from "../Icons/MusicIcon";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

function SongTicker({ songTitle }) {
	return (
		<div className={styles.song}>
			<MusicIcon />
			<Marquee className={styles.songTitle} gradient={false} speed={100}>
				{songTitle}
			</Marquee>
		</div>
	);
}

export default SongTicker;
