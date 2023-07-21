export interface InitialTodoTypes {
  id: number;
  text: string;
  completed: boolean;
  color: string;
}
export interface InitialFilterTypes {
  status: string | { color: string; changeType: string };
  colors: string[];
}

export type TodoTypes = InitialTodoTypes;
export type FilterTypes = InitialFilterTypes;

export interface RootState {
  todos: TodoTypes[];
  filter: FilterTypes;
}
