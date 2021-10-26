import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { AuthContext } from "./AuthContext";

const UserContext = createContext();

function UserContextProvider(props) {
	const [isShowing, setIsShowing] = useState("Navigation");
	const [sidebarSocialList, setSidebarSocialList] = useState([]);
	const { user } = useContext(AuthContext);

	// useEffect(() => {
	// 	//axios chatlog/notifications
	// }, []);

	useEffect(() => {
		const fetch = async () => {
			if (isShowing === "People") {
				// axios get all followed
				const result = await axios.get(`/user/${user.id}/allFollowing`);
				// console.log(result.data.folllowingUsers);
				setSidebarSocialList(result.data.followingUsers);
			} else if (isShowing === "Community") {
				// axios get all joined
				const result = await axios.get(`/user/${user.id}/allJoinedCommunities`);
				// console.log(result.data.folllowingUsers);
				setSidebarSocialList(result.data.communitiesJoined);
			}
		};
		fetch();
	}, [isShowing]);

	console.log("socialList", sidebarSocialList);

	return (
		<UserContext.Provider value={{ isShowing, setIsShowing, sidebarSocialList }}>
			{props.children}
		</UserContext.Provider>
	);
}
export { UserContext, UserContextProvider };
