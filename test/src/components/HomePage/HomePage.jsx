import { Grid, Typography, Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<Grid
				container
				spacing={3}
			>
				<Grid
					item
					xs={12}
					align='center'
				>
					<Typography variant='h3'>House Party</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					align='center'
				>
					<ButtonGroup
						disableElevation
						variant='contained'
						color='primary'
					>
						<Button
							color='primary'
							to='/join'
							component={Link}
						>
							Join a Room
						</Button>
						<Button
							color='secondary'
							to='/create'
							component={Link}
						>
							create a Room
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
		</div>
	);
};

export default HomePage;
