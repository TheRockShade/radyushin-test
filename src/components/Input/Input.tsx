import { FORM_TYPE_INPUT } from "../../data/formFields";
import Label from "../Label/Label";
import s from "./Input.module.scss";

const Input = (props: FORM_TYPE_INPUT) => {
  return (
    <Label label={props.label}>
      <input
        className={s.container}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
    </Label>
  );
};

export default Input;
