import React, { FC } from "react";
import { FieldAttributes, useField } from "formik";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
}

const FormTextarea: FC<FormTextareaProps & FieldAttributes<any>> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={props.id || props.name}
        className="block text-custom-lightgray text-lg mb-2"
      >
        {label}
      </label>

      <textarea
        {...field}
        {...props}
        className="block text-custom-lightgray py-4 px-[30px] rounded-2xl border border-custom-black text-lg placeholder:text-[#989898] w-full min-h-40 resize-y"
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

export default FormTextarea;
