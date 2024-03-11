"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import FormTextarea from "./FormTextArea";

export interface FormValues {
  selectOne: string;
  name: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  selectOne: Yup.string(),
  name: Yup.string().required("Please enter your name"),
  company: Yup.string().required("This is a required field"),
  position: Yup.string().required("This is a required field"),
  phone: Yup.string(),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  message: Yup.string().required("Please enter your message"),
});

const initialValues: FormValues = {
  selectOne: "",
  name: "",
  company: "",
  position: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const handleSubmit = async (values: FormValues, actions: any) => {
    try {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(values),
      });

      actions.resetForm();
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F7F7F7] lg:p-10 p-4">
      <div className="lg:px-[68px] px-5 py-[71px] bg-white rounded-md">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full">
                  <FormField
                    label="Select One"
                    name="selectOne"
                    placeholder="Become a Client"
                  />
                  <FormField label="* First and Last Name:" name="name" />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                  <FormField label="* Company:" name="company" />
                  <FormField label="* Title or Position:" name="position" />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                  <FormField label="Phone Number:" name="phone" />
                  <FormField label="* Email:" name="email" type="email" />
                </div>

                <FormTextarea
                  label="* Elaborate on Your Inquiry:"
                  name="message"
                />
              </div>

              <div className="mt-[50px]">
                <button
                  type="submit"
                  className="py-6 px-[74px] text-custom-black rounded-2xl border border-custom-black text-20xl font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
