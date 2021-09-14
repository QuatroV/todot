// Third-party libs
import type { NextPage } from "next";

// Store
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

// Components
import TasksContainer from "../components/Tasks/TasksContainer";
import LoginContainer from "../components/Login/LoginContainer";

const Home: NextPage = () => {
  const user = useSelector((state: RootState) => state.user.email);
  return <>{user ? <TasksContainer /> : <LoginContainer />}</>;
};

export default Home;
