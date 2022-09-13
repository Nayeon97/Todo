export interface ButtonProps {
  name: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface RouteProps {
  component: JSX.Element;
  isToken?: boolean;
}

export interface TodoId {
  id: string | undefined;
}

export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoProps {
  todo: Todo;
}
