
import Button from '@mui/material/Button';
import { Formik, Form,ErrorMessage } from 'formik';
import *as Yup from 'yup'


function Form2(props) {

  console.log(props)

  return (

    <>
      <div style={{ width: 500 + "px", margin: "auto",padding:80+"px"}}>
        <Formik
          initialValues={{ Education: "" }}
          validationSchema={Yup.object({
            Education: Yup.string().required("Required"),

          })}
          onSubmit={(value) => {
            console.log("ok")
          }}
        >
          <Form>

            <label>Education </label>
            <select name="" id="Education" >

              <option value=""></option>
              <option value="matric">matric</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Graduate">Graduate</option>
              <option value="Masters">Masters</option>
            </select>

            {/* <Field type="text" name="Education"/> */}
            <ErrorMessage name="Education" />
            <br />



          </Form>

        </Formik>

        <Button type="submit" onClick={() => props.handleBack()}>Back</Button>
        <Button type="submit" onClick={() => props.handlenext()}>Next</Button>
      </div>

    </>

  )

}
export default Form2