import React, { useState } from 'react';

function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep (i, e) {
        if (e) e.preventDefault(); //previne o comp default do evento 

        if (i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep, 
        isLastStep: currentStep + 1 === steps.length ? true : false, 
        isFirstStep: currentStep === 0 ? true : false, 
    }
};

export default useForm;
