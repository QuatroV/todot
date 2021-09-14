import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import supabase from "../../client";

import GlassContainer from "../GlassContainer";
import Header from "../Header";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

import { getTasks } from "../../assets/utils";

const TasksContainer: FC = () => {
  const [tasks, setTasks] = useState<any[] | undefined>();

  const synchronizeTasks = async () => {
    const newState = await getTasks();
    setTasks(newState);
  };

  useEffect(() => {
    synchronizeTasks();
  }, []);

  const tasksSubscription = supabase
    .from("tasks")
    .on("*", (payload) => {
      console.log(payload);
      synchronizeTasks();
    })
    .subscribe();

  return (
    <StyledContainer>
      <StyledWrapper>
        <Header />
        <StyledGlassContainer>
          <TaskForm />
          {tasks?.map((task) => (
            <Task
              text={task.text}
              created_at={task.created_at}
              tags={task.tags}
              isDone={task.isDone}
            />
          ))}
        </StyledGlassContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 700px;
  max-height: calc(100% - 32px);
`;

const StyledGlassContainer = styled(GlassContainer)`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  overflow: auto;
  scrollbar-color: #6969dd #e0e0e0;
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 2px;
  }
`;

export default TasksContainer;
