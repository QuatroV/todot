import supabase from "../client";

/**
 * Fetch tasks from db and order them by timestamp
 */
export const getTasks = async () => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
    return data;
  }
};

/**
 * Add new task to the tasks table
 */
export const addTask = async (text: string) => {
  const { data, error } = await supabase.from("tasks").insert([{ text: text }]);
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
    return data;
  }
};

/**
 * Add new task to the tasks table
 */
export const changeIsTaskDone = async (state: boolean) => {
  const { data, error } = await supabase.from("tasks").insert([{ text: text }]);
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
    return data;
  }
};
