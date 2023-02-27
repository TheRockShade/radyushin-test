export type FORM_TYPES = FORM_INPUT[];

export type FORM_INPUT = {
  name: string;
  label: string;
  id: number;
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange?: React.ChangeEvent<HTMLInputElement>;
	value?: string;
	error?: string | null;
  children?: {
    value: string;
    label: string;
    name?: string;
    defaultChecked?: boolean;
		checked?: boolean;
    selected?: boolean;
  }[];
};
