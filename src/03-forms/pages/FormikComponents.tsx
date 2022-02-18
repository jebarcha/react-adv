import {  Formik, Field, Form, ErrorMessage } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

export const FormikComponents = () => {

  return (
    <div>
        <h1>FormikComponnts</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
          }}
          onSubmit={ (values) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
                        .max(15, 'Must have 15 characters or less')
                        .required('First name is Required'),
            lastName: Yup.string()
                        .max(12, 'Must have 12 characters or less')
                        .required('Last name is Required'),
            email: Yup.string()
                        .required('Email is required')
                        .email('Email is not valid'),
            terms: Yup.boolean()
                        .oneOf([true], 'Must accept the conditions'),
            jobType: Yup.string()
                        .notOneOf(['it-jr'], 'This option is not allowed')
                        .required('Job Type is Required'),
          })
        }>

          { (formik) => (
              <Form noValidate>
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" type="text" placeholder="First name"/>
                  <ErrorMessage name="firstName" component="span"/>

                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" type="text"/>
                  <ErrorMessage name="lastName" component="span"/>

                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email"/>
                  <ErrorMessage name="email" component="span"/>

                  <label htmlFor="jobType">Job Type</label>
                  <Field name="jobType" as="select">
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">IT Senior</option>
                    <option value="it-jr">IT Junior</option>
                  </Field>
                  <ErrorMessage name="jobType" component="span"/>

                  <label>
                    <Field name="terms" type="checkbox"/>
                    Terms and conditions
                  </label>
                  <ErrorMessage name="terms" component="span"/>

                  <button type="submit">Submit</button>

              </Form>
            )

          }

        </Formik>

        
    </div>
  )
}
