import {  useFormik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikYupPage = () => {


  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
      initialValues: {
          firstName: '',
          lastName: '',
          email: '',
      },
      onSubmit: (values) => {
          console.log(values)
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
                    .max(15, 'Must have 15 characters or less')
                    .required('First name is Required'),
        lastName: Yup.string()
                    .max(12, 'Must have 12 characters or less')
                    .required('Last name is Required'),
        email: Yup.string()
                    .required('Email is required')
                    .email('Email is not valid')
      })
  });


  return (
    <div>
        <h1>FormikYupPage</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>
            <input type="text" { ...getFieldProps('firstName') } />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" { ...getFieldProps('lastName') } />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email</label>
            <input type="email" { ...getFieldProps('email') } />
            { touched.email && errors.email && <span>{ errors.email }</span>}

            <button type="submit">Submit</button>

        </form>
    </div>
  )
}
