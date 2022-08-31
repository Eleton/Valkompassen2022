import { useState, useRef } from "react";
import styled from "styled-components";
import Card from "./Card";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`;

const H1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 0;
`;

const P = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

const P2 = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
`;
const ConsentButton = styled.button`
  font-size: 2rem;
  color: #222;
  border-radius: 9999px;
  background-color: ivory;
  padding: 0.5rem 1rem;
  width: 100%;
  border: 2px solid black;
  box-sizing: border-box;
  cursor: pointer;
`;
const Button = styled.button`
  font-size: 2rem;
  color: ivory;
  background-color: #222;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  cursor: pointer;
`;

const Home = ({ setView, setLevel }) => {
  const consentCookie =
    localStorage.getItem("consent") === "false" ? false : true;
  const [consent, setConsent] = useState(consentCookie);
  const timeout = useRef(null);
  const plus = ["sd", "kd", "m", "l", "s", "v", "c", "mp"]
    .map((p) => localStorage.getItem(p))
    .every((b) => b === "true");

  return (
    <Card>
      <Layout>
        <H1>Aimans Valkompass</H1>
        <P>
          Gör Aimans Valkompass™ och ta reda på vilket parti du borde rösta på i
          valet 2022!
        </P>
        <div />
        {consent ? (
          <div>
            <P2>Vill du att vi sparar data om dig?</P2>
            <ButtonContainer>
              <ConsentButton
                onClick={() => {
                  localStorage.setItem("consent", false);
                  setConsent(false);
                }}
              >
                Nej tack
              </ConsentButton>
            </ButtonContainer>
          </div>
        ) : (
          <div>
            <P2>
              Vi har nu sparat data att du inte vill att vi sparar data om dig!
              :)
            </P2>
          </div>
        )}
        <ButtonContainer>
          <Button
            onClick={() => {
              setView("question");
              setLevel(0);
            }}
            onTouchStart={(e) => {
              timeout.current = setTimeout(() => localStorage.clear(), 2000);
            }}
            onTouchEnd={() => {
              clearTimeout(timeout.current);
            }}
          >
            Start
          </Button>
        </ButtonContainer>
        {plus && (
          <ButtonContainer>
            <Button
              onClick={() => {
                setView("question_plus");
                setLevel(-1);
              }}
            >
              Start+
            </Button>
          </ButtonContainer>
        )}
      </Layout>
    </Card>
  );
};

export default Home;
