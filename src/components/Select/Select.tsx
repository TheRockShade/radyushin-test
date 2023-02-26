import { FORM_TYPE_INPUT } from "../../data/formFields";
import Label from "../Label/Label";
import s from "./Select.module.scss";

const Select = (props: FORM_TYPE_INPUT) => {
  return (
    <Label label={props.label}>
      <select>
        {props.children?.map((child) => (
          <option>{child.label}</option>
        ))}
      </select>
    </Label>
  );
};

export default Select;
