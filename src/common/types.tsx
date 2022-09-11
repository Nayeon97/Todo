export interface ButtonProps {
  name: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface RouteProps {
  component: JSX.Element;
  isToken?: boolean;
}
