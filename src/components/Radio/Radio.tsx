import { FORM_TYPE_INPUT } from "../../data/formFields";
import Label from "../Label/Label";
import s from "./Radio.module.scss";

const Radio = (props: FORM_TYPE_INPUT) => {
  return (
    <Label label={props.label}>
      <ul className={s.list}>
        {props.children?.map((child) => (
          <li>
            <input
              type={props.type}
              name={props.name}
              value={child.value}
              key={child.value}
            />
						<span>{child.label}</span>
          </li>
        ))}
      </ul>
    </Label>
  );
};

export default Radio;
