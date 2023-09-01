import { Button, Grid, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
	baseURL: "http://localhost:8000", // Replace with your Django backend URL
	withCredentials: true, // This allows Axios to send cookies with the request
});

const RoomJoinPage = () => {
	const navigate = useNavigate();
	const [roomInfo, setRoomInfo] = useState({
		roomCode: "",
		error: "",
	});

	const handleRoomCodeChange = (e) => {
		setRoomInfo({ ...roomInfo, roomCode: e.target.value });
	};

	const handleEnterRoomButtonPressed = () => {
		api.post("/api/join-room/", {
			code: roomInfo.roomCode,
		})
			.then((res) => {
				console.log(res.OK);
				if (res.status === 200) {
					navigate(`/room/${roomInfo.roomCode}`);
				} else {
					setRoomInfo({ ...roomInfo, error: "Room not found." });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Grid
			container
			spacing={1}
		>
			<Grid
				item
				xs={12}
				align='center'
			>
				<Typography variant='h4'>Join a Room</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				align='center'
			>
				<TextField
					error={roomInfo.error ? true : false}
					label={"Code"}
					placeholder='Enter a Room code'
					value={roomInfo.roomCode}
					helperText={roomInfo.error}
					variant='outlined'
					onChange={handleRoomCodeChange}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				align='center'
			>
				<Button
					variant='contained'
					color='primary'
					// to='/'
					component={Link}
					onClick={handleEnterRoomButtonPressed}
				>
					Enter Room
				</Button>
			</Grid>
			<Grid
				item
				xs={12}
				align='center'
			>
				<Button
					variant='contained'
					color='secondary'
					to='/'
					component={Link}
				>
					Back
				</Button>
			</Grid>
		</Grid>
	);
};

export default RoomJoinPage;
