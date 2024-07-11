import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Layouts } from "../components/Layouts/Layouts";

const router = createBrowserRouter([
	{
		element: <Layouts />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

export default router;
