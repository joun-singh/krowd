import React from "react";
import { Container, Stack } from "@mui/material";
import AuthButtons from "../components/welcome/AuthButtons";
import StepsNavigation from "../components/welcome/StepsNavigation";
import Step1 from "../components/welcome/Step1";
import "../styles/welcome.css";
import Step2 from "../components/welcome/Step2";
import Step3 from "../components/welcome/Step3";
import { useNavigate } from "react-router-dom";


const Welcome = () => {
  const [step, setStep] = React.useState(1);
  const route = useNavigate()

  const signup = () => {
       route("/create-account")
  }

  const changeStep = (stp = undefined) => {
    if (typeof stp === "number") {
      setStep(stp);
      return;
    }
    let st;
    if (stp === "next") {
      st = step + 1;
    } else {
      st = step - 1;
    }

    if (st > 0 && st <= 3) {
      setStep(st);
    } else {
      setStep(1);
    }
  };

  const stepCase = () => {
    switch (step) {
      case 1:
        return <Step1 />;

      case 2:
        return <Step2 />;

      case 3:
        return <Step3 />;

      default:
        return <Step1 />;
    }
  };

  return (
    <Container>
      <Stack className="vh-100" justifyContent="space-around">
        {stepCase()}
        <StepsNavigation stepChange={changeStep} step={step} />
        <AuthButtons click={signup}/>
      </Stack>
    </Container>
  );
};

export default Welcome;
