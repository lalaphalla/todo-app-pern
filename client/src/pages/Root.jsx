import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Main";

export default function RootLayout(){
	return (
		<>
			<MainNavigation />
			<Outlet/>
		</>
	)
}