import s from "./Button.module.scss";

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return <button className={s.container}>{children}</button>;
};

export default Button;
