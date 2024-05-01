import React, { useState } from 'react';

function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep (index, e) {
        if (e) e.preventDefault();

        if (index < 0 | index >= steps.length) return;

        setCurrentStep(index)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep, 
    }
};

export default useForm;
