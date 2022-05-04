import React from "react";
import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
	{
		id: 1,
		author: "emoticon",
		description: "Estadio temblando",
		likes: 321,
		shares: 123,
		comments: 221,
		songTitle: "Coldplay - Yellow",
		albumImage:
			"https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/f2ba0427e945424c90a0600954c7e23d~c5_200x200.jpeg",
		src: "https://v16-webapp.tiktok.com/0dc269b5b1007986928955f517361788/6272b8cd/video/tos/maliva/tos-maliva-ve-0068c799-us/8e7c6aee89ad44ac9af25429eecc12dc/?a=1988&br=2598&bt=1299&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZjB4jwe2NwyTyl7Gb&l=20220504113249010189085138219D570A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2w6cDw6Zmt4PDMzZzczNEApODo1Nzc2OTw6Nzw2Zzs2ZmdtcWMvcjQwb2FgLS1kMS9zcy81YTQyYzYvMDMyNi5gMzA6Yw%3D%3D&vl=&vr=",
	},
	{
		id: 2,
		author: "leandro",
		description: "gg preparando para pintar, limpiando todo... gg",
		likes: 321,
		shares: 123,
		comments: 221,
		songTitle: "Coldplay - Yellow",
		albumImage:
			"https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/f2ba0427e945424c90a0600954c7e23d~c5_200x200.jpeg",
		src: "https://v16-webapp.tiktok.com/7df6de0bfc8bad6fbe69a885eaa14f5e/6272b8d6/video/tos/useast2a/tos-useast2a-ve-0068c001/9fb6b0817cbd48eabfb21f7d40974717/?a=1988&br=2386&bt=1193&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZjB4jwe2NwyTyl7Gb&l=20220504113249010189085138219D570A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzg4N2Q6ZmRxPDMzNzczM0ApZ2Q5aTg0OWU7N2ZmM2czNWdhNWBpcjRfNGVgLS1kMTZzc2A0YjJjYTUuNmAyXl4uY2A6Yw%3D%3D&vl=&vr=",
	},
];

function FeedVideos() {
	return VIDEOS.map((video) => {
		return (
			<div className={styles.item} key={video.id}>
				<VideoPlayer {...video} />
			</div>
		);
	});
}

export default FeedVideos;
