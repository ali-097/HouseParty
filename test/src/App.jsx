import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateRoomPage from "./components/CreateRoomPage/CreateRoomPage";
import RoomJoinPage from "./components/RoomJoinPage/RoomJoinPage";
import HomePage from "./components/HomePage/HomePage";
import RoomPage from "./components/RoomPage/RoomPage";
import "./App.css";

const App = () => {
	return (
		<div className='app--container'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/join'
						element={<RoomJoinPage />}
					/>
					<Route
						path='/create'
						element={<CreateRoomPage />}
					/>
					<Route
						path='/room/:roomCode'
						element={<RoomPage />}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
