import FORM_FIELDS, { FORM_TYPE_INPUT } from "../../data/formFields";
import Button from "../Button/Button";
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
		console.log(e.target);
		
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {FORM_FIELDS.map((field) => getField(field))}
      <Button>Продолжить</Button>
    </form>
  );
};

export default Form;
