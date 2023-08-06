import { useState } from "react";

import { Content } from "./Components/Content";
import { Title } from "./Components/Title";
import { Footer } from "./Components/Footer";

export const Posting = () => {

    const [step, setStep] = useState({
        now : 0,
        steps: [
            {
                step: "title",
                no: 1,
                title: "",
                introduction: "",
            }
        ]
    });

    const nextStep = (type, data) => {
        if (step.length === 1) {
            setStep({
                ...step,
                now: step.now + 1,
                steps: [
                    ...step.steps,
                    {
                        step: "content",
                        no: 2,
                        title: "",
                        content: "",
                    }
                ]
            })
        }
        else {
            setStep({
                ...step,
                now: step.now + 1,
            });
        }
    }

    return (
        <div>
            {
                step.now === 0
                    ? <Title nextStep={nextStep} />
                    : <Content no={step.now} />   
            }
        </div>
    )
};