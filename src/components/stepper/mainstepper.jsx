

import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import Form1 from './Form/Form1';
import Form2 from './Form/Form2';
import Form3 from './Form/Form3';


function getStepContent(activeStep, handlenext, handleBack) {

    switch (activeStep) {

        case 0:
            return <Form1 handlenext={handlenext} />
        case 1:
            return <Form2 handlenext={handlenext} handleBack={handleBack} />
        case 2:
            return <Form3 handleBack={handleBack} />


    }
}

function StepperForm() {
    <>
        <h1>Admission Form</h1>
    </>

    const [activestep, setActiveStep] = useState(0)

    const stepsInfo = [
        "personal Info",
        "Education Info",
        "General Info"
    ]
    const handlenext = () => {
        setActiveStep(activestep + 1)
    }
    const handleBack = () => {
        setActiveStep(activestep - 1)
    }

    return (
        <div>
            <Stepper activeStep={activestep} alternativeLabel>
                {stepsInfo.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {
                activestep == stepsInfo.length ?
                    "submit" :
                    <Typography> {getStepContent(activestep, handlenext, handleBack)} </Typography>
            }
        </div>
    );






}
export default StepperForm