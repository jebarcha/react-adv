import {  Formik, Form } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            password2: ''
          }}
          onSubmit={ (values) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            name: Yup.string()
                        .min(2, "Must have at least 2 characters")
                        .max(15, "Must have maximum of 15 characters")
                        .required('Username is Required'),
            email: Yup.string()
                        .required('Email is required')
                        .email('Email is not valid'),
            password: Yup.string()
                        .min(6, "Must have at least 6 characters")
                        .required('Password is Required'),
            password2: Yup.string()
                        .oneOf([ Yup.ref('password')], 'Passwords do not match')
                        .required('Password repeat is Required'),
          })
        }>

          { ( { handleReset }) => (
              <Form noValidate>
                  <MyTextInput 
                    label="User name" 
                    name="name" 
                    placeholder="User name"
                  />
                 
                  <MyTextInput 
                    label="Email Address" 
                    name="email"
                    type="email"
                    placeholder="Email@email.com"
                  />

                  <MyTextInput 
                    label="Password" 
                    name="password"
                    type="password" 
                    placeholder="******"
                  />

                  <MyTextInput 
                    label="Repeat Password" 
                    name="password2"
                    type="password" 
                    placeholder="******"
                  />

                  <button type="submit">Submit</button>
                  <button type="button" onClick={ handleReset }>Reset</button>

              </Form>
            )

          }

        </Formik>

        
    </div>
  )
}
