import React from "react";
// import Home from './pages/Home';
import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import {Main} from "./components/index";

function App() {
	return (
		<div>
			<Main />
		</div>
		// <div className="App overflow-y-hidden flex flex-col items-center  p-4 md:p-7 ">
		// 	<div className="bg-gray-200 rounded-3xl  md:w-[92vw]">
		// 		<Navbar />
		// 	</div>
		// 	<div className=" flex flex-col md:flex-row p-4 md:gap-5 justify-center items-center">
		// 		<div className="bg-gray-200 rounded-3xl w-full md:w-auto">
		// 			<Feed />
		// 		</div>
		// 		<div className="bg-gray-200 rounded-3xl w-full md:w-auto">
		// 			<Profile />
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default App;
