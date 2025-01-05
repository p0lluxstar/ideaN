import { FormikProps } from 'formik';

type FormValues = {
  name: string;
  nick: string;
  description: string;
  text: string;
};

export const Input = ({
  name,
  label,
  formik,
}: {
  name: keyof FormValues;
  label: string;
  formik: FormikProps<FormValues>;
}) => {
  const value = formik.values[name];

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        value={value}
        name={name}
        id={name}
      />
    </div>
  );
};
