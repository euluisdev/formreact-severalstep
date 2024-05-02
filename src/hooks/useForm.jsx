import React, { useState } from 'react';

function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep (i, e) {
        if (e) e.preventDefault();

        if (i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep, 
    }
};

export default useForm;
