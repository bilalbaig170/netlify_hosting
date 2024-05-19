
import Button from '@mui/material/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup'

function Form3(props) {

  console.log(props)

  return (

    <>
      <div style={{ width: 500 + "px", margin: "auto",padding:80+"px"}}>


        <Formik
          initialValues={{ Age: "", Gender: "" }}
          validationSchema={Yup.object({
            Age: Yup.string().required("Required"),
            Gender: Yup.string().required("enetr email")

          })}
          onSubmit={(value) => {
            console.log("ok")
          }}
        >
          <Form >

            <label>Age </label>
            <Field type="text" name="Age" />
            <ErrorMessage name="Age" />
            <br />
            <label>Gender</label>
            <select name="" id="Gender" >

              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

            </select>
            <br />

          </Form>


        </Formik>




        <Button type="submit" onClick={() => props.handleBack()}>Back</Button>
        <Button type="submit">submit</Button>

      </div>

    </>

  )

}
export default Form3