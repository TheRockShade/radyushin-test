import FORM_FIELDS, { FORM_TYPE_INPUT } from "../../data/formFields";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import Select from "../Select/Select";

const Form = () => {
  const getField = (field: FORM_TYPE_INPUT): JSX.Element => {
    let Component;

    switch (field.type) {
      case "radio":
        Component = <Radio {...field} key={field.id} />;
        break;
      case "select":
        Component = <Select {...field} key={field.id} />;
        break;
      default:
        Component = <Input {...field} key={field.id} />;
    }

    return Component;
  };

  return <form>{FORM_FIELDS.map((field) => getField(field))}</form>;
};

export default Form;
