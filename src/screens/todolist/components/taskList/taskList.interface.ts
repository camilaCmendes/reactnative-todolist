export interface TaskItem {
  id: string;
  label: string;
  isChecked: boolean;
}

export interface ToDoListState {
  toDoList: TaskItem[];
  addToDo: (newTask: TaskItem) => void;
  deleteTask: (id: string) => void;
  toggleCheck: (id: string) => void;
}
