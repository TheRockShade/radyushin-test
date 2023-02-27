import s from "./Label.module.scss";

type Props = {
  label: string;
  error?: string | null;
  children: JSX.Element;
};

const Label = ({ label, error, children }: Props) => {
  return (
    <label className={s.container}>
      <span className={s.name}>{label}</span>
      {children}
      <span className={s.error}>{error}</span>
    </label>
  );
};

export default Label;
