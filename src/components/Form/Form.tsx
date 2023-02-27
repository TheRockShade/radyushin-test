import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  formSetErrors,
  formUpdateInput,
  formUpdateRadio,
  formUpdateSelect,
} from "../../store/slices/formSlice";
import { RootState } from "../../store/store";
import { FORM_INPUT } from "../../types/form";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import Select from "../Select/Select";
import s from './Form.module.scss'

const Form = () => {
  const [status, setStatus] = useState<{
    text: string;
    isCompleted: boolean;
  } | null>(null);
  const { form } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const getField = (field: FORM_INPUT): JSX.Element => {
    let Component;

    switch (field.type) {
      case "radio":
        Component = (
          <Radio
            field={field}
            key={field.id}
            onChange={(e) => onChangeRadio(e, field)}
          />
        );
        break;
      case "select":
        Component = (
          <Select
            field={field}
            key={field.id}
            onChange={(e) => onChangeSelect(e, field)}
          />
        );
        break;
      default:
        Component = (
          <Input
            field={field}
            key={field.id}
            onChange={(e) => onChangeInput(e, field)}
          />
        );
    }

    return Component;
  };

  const onChangeRadio = (e: React.ChangeEvent<Element>, field: FORM_INPUT) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;

    dispatch(formUpdateRadio({ id: field.id, value }));
  };

  const onChangeSelect = (e: React.ChangeEvent<Element>, field: FORM_INPUT) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;

    dispatch(formUpdateSelect({ id: field.id, value }));
  };

  const onChangeInput = (e: React.ChangeEvent<Element>, field: FORM_INPUT) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;

    dispatch(formUpdateInput({ id: field.id, value }));
  };

  const validate = () => {
    const newForm = [...form];
    const errors: { id: number; error: string }[] = [];

    const checkName = (name: string) =>
      name.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);

    const checkTelephone = (telephone: string) =>
      telephone.match(/^(\s*)?(\+)?([-_():=+]?\d[- _():=+]?){10,14}(\s*)?$/);

    const checkEmail = (email: string) =>
      email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);

    newForm.forEach((field) => {
      if (field.name === "firstName") {
        field.value &&
          !checkName(field.value) &&
          errors.push({ id: field.id, error: "Введите корректное имя" });
      }

      if (field.name === "secondName") {
        field.value &&
          !checkName(field.value) &&
          errors.push({ id: field.id, error: "Введите корректную фамилию" });
      }

      if (field.name === "phone") {
        field.value &&
          !checkTelephone(field.value) &&
          errors.push({ id: field.id, error: "Введите корректный телефон" });
      }

      if (field.name === "email") {
        field.value &&
          !checkEmail(field.value) &&
          errors.push({ id: field.id, error: "Введите корректный E-mail" });
      }
    });

    return errors;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();

    if (errors.length) {
      dispatch(formSetErrors(errors));
    } else {
      setStatus(
        !!Math.floor(Math.random() * 2)
          ? { text: "Успешно отправлено", isCompleted: true }
          : { text: "Что-то пошло не так, попробуйте повторить", isCompleted: false }
      );
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {form.map((field) => getField(field))}
      <Button>Продолжить</Button>
      {status ? <h2 className={s.status}>{status.text}</h2> : null}
    </form>
  );
};

export default Form;
