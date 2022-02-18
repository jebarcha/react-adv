import {  Formik, Form } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>FormikAbstraction</h1>

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
                  <MyTextInput 
                    label="First Name" 
                    name="firstName" 
                    placeholder="First Name"
                  />
                  {/* <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" type="text" placeholder="First name"/>
                  <ErrorMessage name="firstName" component="span"/> */}

                  <MyTextInput 
                    label="Last Name" 
                    name="lastName" 
                    placeholder="Last Name"
                  />

                  <MyTextInput 
                    label="Email Address" 
                    name="email" 
                    placeholder="Email@email.com"
                  />

                  <MySelect label="Job Type" name="jobType" >
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">IT Senior</option>
                    <option value="it-jr">IT Junior</option>
                  </MySelect>

                  <MyCheckbox label={'Terms & Conditions'} name={'terms'} />

                  <button type="submit">Submit</button>

              </Form>
            )

          }

        </Formik>

        
    </div>
  )
}
