
import Button from '@mui/material/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup'

function Form1(props) {

  console.log(props)

  return (

    <>
      <div style={{ width: 500+"px", margin: "auto", padding:80+"px" }}>

        <Formik
          initialValues={{ firstName: "", email: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string().min(7, "Enter Atlesat 7 letters").max(10, "you can enter only 10 letters").required("Required"),
            email: Yup.string().email("Invalid Email").required("enetr email")

          })}
          onSubmit={(value) => {
            console.log("ok")
          }}
        >
          <Form >

            <label>firstName </label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" />
            <br />
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
            <br />
            <Button type="submit" onClick={() => props.handlenext()}>Next</Button>
          </Form>


        </Formik>

      </div>
    </>

  )

}
export default Form1