import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => (
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      console.log("Form submitted:", values);
      resetForm(); // reset fields after submit
    }}
  >
    {() => (
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
