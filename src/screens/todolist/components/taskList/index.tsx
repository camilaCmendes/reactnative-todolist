import { Task } from "@/components";
import { FlatList } from "react-native";
import { EmptyList } from "../emptyList";
import { ToDoListState } from "./taskList.interface";

interface TaskListProps extends Omit<ToDoListState, "addToDo"> {}

export const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <FlatList
      data={props.toDoList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Task
          key={item.id}
          id={item.id}
          label={item.label}
          handleDelete={props.deleteTask}
          handleCheckChange={props.toggleCheck}
          isChecked={item.isChecked}
        />
      )}
      ListEmptyComponent={EmptyList}
    />
  );
};
