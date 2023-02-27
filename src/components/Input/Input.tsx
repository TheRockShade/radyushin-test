import { FORM_INPUT } from "../../types/form";
import Label from "../Label/Label";
import s from "./Input.module.scss";

type Props = {
  field: FORM_INPUT;
  onChange?: React.ChangeEventHandler;
};

const Input = ({ field, onChange }: Props) => {
  return (
    <Label label={field.label} error={field.error}>
      <input
        className={s.container}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required}
        onChange={onChange}
      />
    </Label>
  );
};

export default Input;
