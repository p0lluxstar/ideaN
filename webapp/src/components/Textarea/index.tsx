import { FormikProps } from 'formik';

type FormValues = {
  name: string;
  nick: string;
  description: string;
  text: string;
};

export const Textarea = ({
  name,
  label,
  formik,
}: {
  name: keyof FormValues;
  label: string;
  formik: FormikProps<FormValues>;
}) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;
  const touched = formik.touched[name];

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        onBlur={() => {
          formik.setFieldTouched(name);
        }}
        value={value}
        name={name}
        id={name}
      />
      {!!touched && !!error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};
