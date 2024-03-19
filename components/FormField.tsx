import React, { FC } from "react";
import { FieldAttributes, useField } from "formik";

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
}

const FormField: FC<FormFieldProps & FieldAttributes<any>> = ({
  label,
  type = "text",
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={props.name}
        className="block text-custom-lightgray text-lg mb-2"
      >
        {label}
      </label>

      <input
        type={type}
        {...field}
        {...props}
        className="block text-custom-lightgray py-4 px-[30px] rounded-2xl border border-custom-black text-lg placeholder:text-[#989898] w-full"
        placeholder={placeholder ?? ""}
        id={props.name}
        name={props.name}
      />

      {meta.touched && meta.error ? (
        <p className="text-xs text-red-500">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default FormField;
