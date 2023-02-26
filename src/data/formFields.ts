const FORM_FIELDS = [
  { name: "firstName", placeholder: "Владислав", label: "Имя", id: 1 },
  { name: "secondName", placeholder: "Быков", label: "Фамилия", id: 2 },
  {
    name: "sex",
    type: "radio",
    label: "Пол",
    id: 3,
    children: [
      { value: 1, label: "Мужчина" },
      { value: 2, label: "Женщина" },
    ],
  },
  { name: "phone", placeholder: "+7", label: "Телефон", type: "tel", id: 4 },
  {
    name: "email",
    placeholder: "therockshade@gmail.com",
    label: "E-mail",
    type: "email",
    id: 5,
  },
  { name: "birthDate", label: "Дата рождения", type: "date", id: 6 },
  {
    name: "country",
    label: "Страна",
    type: "select",
    id: 7,
    children: [
      { name: "russia", value: 1, label: "Россия" },
      { name: "usa", value: 2, label: "США" },
      { name: "australia", value: 3, label: "Австралия" },
    ],
  },
  {
    name: "address",
    placeholder: "г. Москва, Ул. Пушкина",
    label: "Адрес",
    id: 8,
  },
];

export type FORM_TYPE_INPUT = {
  name: string;
  label: string;
  id: number;
  placeholder?: string;
  type?: string;
  children?: { value: number; label: string }[];
};

export default FORM_FIELDS;