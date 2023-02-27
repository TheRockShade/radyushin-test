import { FORM_INPUT } from "../../types/form";
import Label from "../Label/Label";
import s from "./Radio.module.scss";

type Props = {
  field: FORM_INPUT;
  onChange?: React.ChangeEventHandler;
};

const Radio = ({ field, onChange }: Props) => {
  return (
    <Label label={field.label} error={field.error}>
      <ul className={s.list}>
        {field.children?.map((child) => (
          <li className={s.item} key={child.value}>
            <label>
              <input
                type={field.type}
                name={field.name}
                value={child.value}
                defaultChecked={child.defaultChecked}
                onChange={onChange}
              />
              <span className={s.label}>{child.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </Label>
  );
};

export default Radio;
