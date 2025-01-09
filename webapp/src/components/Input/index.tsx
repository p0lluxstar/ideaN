import cn from 'classnames';
import { FormikProps } from 'formik';
import css from './index.module.scss';

type FormValues = {
  name?: string;
  nick: string;
  description?: string;
  text?: string;
  password?: string;
  passwordAgain?: string;
  type?: string;
};

export const Input = ({
  name,
  label,
  formik,
  maxWidth,
  type = 'text',
}: {
  name: keyof FormValues;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
  maxWidth?: number;
  type?: 'text' | 'password';
}) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;
  const touched = formik.touched[name];
  const disabled = formik.isSubmitting;
  const invalid = !!touched && !!error;

  return (
    <div className={cn({ [css.field]: true, [css.disabled]: disabled })}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={cn({
          [css.input]: true,
          [css.invalid]: invalid,
        })}
        style={{ maxWidth }}
        type={type}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        onBlur={() => {
          formik.setFieldTouched(name);
        }}
        value={value}
        name={name}
        id={name}
        disabled={formik.isSubmitting}
      />
      {<div className={css.error}>{error}</div>}
    </div>
  );
};
