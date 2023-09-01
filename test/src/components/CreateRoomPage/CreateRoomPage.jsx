import {
	Button,
	Grid,
	Typography,
	TextField,
	FormHelperText,
	FormControl,
	Radio,
	RadioGroup,
	FormControlLabel,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/create-room/";

const CreateRoomPage = () => {
	const navigate = useNavigate();
	const [createRoomData, setCreateRoomData] = useState({
		guest_can_pause: true,
		votes_to_skip: 2,
	});

	const handleVotesToSkipChange = (e) => {
		setCreateRoomData({ ...createRoomData, votes_to_skip: e.target.value });
	};

	const handleGuestCanPauseChange = (e) => {
		setCreateRoomData({
			...createRoomData,
			guest_can_pause: e.target.value === "true" ? true : false,
		});
	};

	const handleCreateRoomButtonPressed = () => {
		axios.post(API_URL, createRoomData).then((res) => {
			navigate(`/room/${res.data.code}`);
		});
	};

	return (
		<Grid
			container
			spacing={1}
			align='center'
		>
			<Grid
				item
				xs={12}
				align='center'
			>
				<Typography variant='h4'>Create A Room</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				align='center'
			>
				<FormControl component='fieldset'>
					<FormHelperText align='center'>
						Guest Control of Playback State
					</FormHelperText>
					<RadioGroup
						row
						defaultValue='true'
						onChange={handleGuestCanPauseChange}
					>
						<FormControlLabel
							value='true'
							control={<Radio color='primary' />}
							label='Play/Pause'
							labelPlacement='bottom'
						/>
						<FormControlLabel
							value='false'
							control={<Radio color='secondary' />}
							label='No Control'
							labelPlacement='bottom'
						/>
					</RadioGroup>
				</FormControl>
			</Grid>
			<Grid
				item
				xs={12}
				align='center'
			>
				<FormControl>
					<TextField
						required={true}
						type='number'
						defaultValue={createRoomData.votes_to_skip}
						variant='standard'
						inputProps={{ min: 1, style: { textAlign: "center" } }}
						onChange={handleVotesToSkipChange}
					/>
					<FormHelperText align='center'>
						Votes Required To Skip Song
					</FormHelperText>
				</FormControl>
			</Grid>
			<Grid
				item
				xs={12}
				align='center'
			>
				<Button
					color='primary'
					variant='contained'
					onClick={handleCreateRoomButtonPressed}
				>
					Create A Room
				</Button>
			</Grid>
			<Grid
				item
				xs={12}
				align='center'
			>
				<Button
					color='secondary'
					variant='contained'
					to='/'
					component={Link}
				>
					Back
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreateRoomPage;
