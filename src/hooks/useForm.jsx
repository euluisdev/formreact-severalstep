import React, { useState } from 'react';

function useForm() {
    const [currentStep, setCurrentStep] = useState(0);

    return {
        currentStep,
        currentComponent: steps[currentStep],
    }
};

export default useForm;
