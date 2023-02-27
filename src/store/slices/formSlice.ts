import { FORM_TYPES } from "./../../types/form";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FORM_TYPES = [
  {
    name: "firstName",
    placeholder: "Владислав",
    label: "Имя",
    id: 1,
    required: true,
  },
  { name: "secondName", placeholder: "Быков", label: "Фамилия", id: 2 },
  {
    name: "sex",
    type: "radio",
    label: "Пол",
    id: 3,
    children: [
      { value: "1", label: "Мужчина", defaultChecked: true },
      { value: "2", label: "Женщина" },
    ],
  },
  { name: "phone", placeholder: "+7", label: "Телефон", type: "tel", id: 4 },
  {
    name: "email",
    placeholder: "therockshade@gmail.com",
    label: "E-mail",
    type: "email",
    id: 5,
    required: true,
  },
  { name: "birthDate", label: "Дата рождения", type: "date", id: 6 },
  {
    name: "country",
    label: "Страна",
    type: "select",
    id: 7,
    children: [
      { value: "russia", label: "Россия" },
      { value: "usa", label: "США" },
      { value: "australia", label: "Австралия", selected: true },
    ],
  },
  {
    name: "address",
    placeholder: "г. Москва, Ул. Пушкина",
    label: "Адрес",
    id: 8,
  },
];

export const FormSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    formSetErrors: (state, action) => {
      action.payload.forEach((error: { id: number; error: string | null }) => {
        const item = state.find((field) => field.id === error.id);
        if (item) item.error = error.error;
      });
    },

    formUpdateInput: (state, action) => {
      const index = state.findIndex((field) => field.id === action.payload.id);
      state[index].value = action.payload.value;
      state[index].error = null;
    },

    formUpdateRadio: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      state[index]?.children?.forEach((child) => {
        child.checked = action.payload.value === child.value;
      });
    },

    formUpdateSelect: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      state[index]?.children?.forEach((child) => {
        child.selected = action.payload.value === child.value;
      });
    },
  },
});

export const {
  formSetErrors,
  formUpdateInput,
  formUpdateRadio,
  formUpdateSelect,
} = FormSlice.actions;

export default FormSlice.reducer;
