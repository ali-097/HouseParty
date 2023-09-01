import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8000", // Replace with your Django backend URL
	withCredentials: true, // This allows Axios to send cookies with the request
});

const Room = () => {
	const roomCode = useRef(useParams().roomCode);
	const [roomData, setRoomData] = useState({
		guest_can_pause: true,
		votes_to_skip: 2,
	});
	useEffect(() => {
		api.get(`/api/get-room?code=${roomCode.current}`).then((res) => {
			console.log(res.data);
			setRoomData(res.data);
		});
		console.log(roomData);
	}, []);
	return (
		<div>
			<h3>Room Code: {roomCode.current}</h3>
			<p>Votes: {roomData.votes_to_skip}</p>
			<p>Guests Can Pause: {roomData.guest_can_pause.toString()}</p>
		</div>
	);
};

export default Room;
