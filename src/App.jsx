import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";

export const App = () => {
  const [step, setStep] = useState('form');

  const goToSummary = () => setStep('summary');

  return (
    <Container>
      {step === 'form' && (
        <>
          <Card>
            <h1>Welcome to our mushroom survey!</h1>
            <p>In this survey we would like you to answer a couple of questions regarding mushrooms.</p>
            <img src="/mushroom.jpg"></img>
            <input />
            <input />
          </Card>

          <Card>
            <p></p>
            <input name="test" type="radio" />
            <input name="test" type="radio" />
            <input name="test" type="radio" />
          </Card>

          <Card>
            <p></p>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </Card>

          <Card>
            <p></p>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </Card>

          <button onClick={goToSummary}>Submit</button>
        </>
      )}
      {step === 'summary' && (
        <p>Hej</p>
      )}
    </Container>
  );
};
