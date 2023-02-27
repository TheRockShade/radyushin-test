import { FORM_INPUT } from "../../types/form";
import Label from "../Label/Label";
import s from "./Select.module.scss";

type Props = {
  field: FORM_INPUT;
  onChange?: React.ChangeEventHandler;
};

const Select = ({ field, onChange }: Props) => {
  return (
    <Label label={field.label}>
      <select className={s.container} onChange={onChange}>
        {field.children?.map((child) => (
          <option
            selected={child.selected}
            value={child.value}
            key={child.value}
          >
            {child.label}
          </option>
        ))}
      </select>
    </Label>
  );
};

export default Select;
