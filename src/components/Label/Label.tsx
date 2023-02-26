import s from './Label.module.scss'

type Props = {
  label: string;
  children: JSX.Element;
};

const Label = ({ label, children }: Props) => {
  return (
    <label className={s.container}>
      <span className={s.name}>{label}</span>
      {children}
    </label>
  );
};

export default Label;
