import React, { useEffect, useState } from "react";
import { getVideos } from "../../services/index";
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
		src: "https://v16-webapp.tiktok.com/3f58732c018158a6210209621e1be21c/62740a6f/video/tos/maliva/tos-maliva-ve-0068c799-us/8e9047058b0042beb28a98784a094da5/?a=1988&br=4154&bt=2077&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZvQXjwe2Nwhoyl7Gb&l=2022050511325601022309914303688E17&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajt5amg6ZnhpPDMzZzczNEApOWQzM2VlZjxlNzY0OTxpM2doYWZmcjQwMm1gLS1kMS9zc2AvL2E2NTJgYF5gMjReLl86Yw%3D%3D&vl=&vr=",
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
		src: "https://v16-webapp.tiktok.com/cbc3d583111c20326cd7d0950300ed61/62740a5b/video/tos/useast2a/tos-useast2a-ve-0068c003/aab2996fcd144abea0298f2d4e7e324d/?a=1988&br=1160&bt=580&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZvQXjwe2Nwhoyl7Gb&l=2022050511325601022309914303688E17&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3B0cmc6Zm07PDMzNzczM0ApOGYzaDQ5NWU6NzM6OTc2Omc1ajNkcjRnZGZgLS1kMTZzczYwMjMzMl9gLzJhYTViMTI6Yw%3D%3D&vl=&vr=",
	},
];

function FeedVideos() {
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState(null);
	useEffect(() => {
		getVideos().then(([error, data]) => {
			if (error) return setError(error);
			setVideos(data);
		});
	}, []);

	if (error) return <span>{error}</span>;

	return videos.map((video) => {
		return (
			<div className={styles.item} key={video.id}>
				<VideoPlayer {...video} />
			</div>
		);
	});
}

export default FeedVideos;
