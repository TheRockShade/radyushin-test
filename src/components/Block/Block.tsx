import s from "./Block.module.scss";

type Props = {
  children: JSX.Element;
};

const Block = ({ children }: Props) => (
  <div className={s.container}>{children}</div>
);
export default Block;
