import { FORM_TYPE_INPUT } from "../../data/formFields";
import Label from "../Label/Label";
import s from "./Radio.module.scss";

const Radio = (props: FORM_TYPE_INPUT) => {
  return (
    <Label label={props.label}>
      <ul className={s.list}>
        {props.children?.map((child) => (
          <li className={s.item} key={child.value}>
            <label>
              <input
                type={props.type}
                name={props.name}
                value={child.value}
                defaultChecked={child.defaultChecked}
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
