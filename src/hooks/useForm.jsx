import React, { useState } from 'react';

function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep (index, e) {
        e.preventDefault();

        if (i < 0 | i >= steps.length) return;

        setCurrentStep(index)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep, 
    }
};

export default useForm;
