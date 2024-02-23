import { create } from "zustand";

interface TaskItem {
  id: string;
  label: string;
  isChecked: boolean;
}

interface ToDoListState {
  toDoList: TaskItem[];
  addToDo: (newTask: TaskItem) => void;
  deleteTask: (id: string) => void;
  toggleCheck: (id: string) => void;
  countCompletedTasks: () => number;
}

const useToDoListStore = create<ToDoListState>((set, get) => ({
  toDoList: [],

  addToDo: (newTask) => {
    set((state) => ({ toDoList: [...state.toDoList, newTask] }));
  },

  deleteTask: (id) =>
    set((state) => ({
      toDoList: state.toDoList.filter((task) => task.id !== id),
    })),

  toggleCheck: (id) => {
    set((state) => ({
      toDoList: state.toDoList.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      ),
    }));
  },

  countCompletedTasks: () => {
    return get().toDoList.filter((task) => task.isChecked).length;
  },
}));

export default useToDoListStore;
