import styled from "styled-components";
import Slider from "@mui/material/Slider";
import Card from "./Card";
import { levelToParty, levelToParty2 } from "./data/levelConverter";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex: 1;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
`;

const SliderContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 2rem;
  color: ivory;
  background-color: #222;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
`;

const Question = ({ level, setLevel, setView, plus }) => {
  return (
    <Card>
      {!plus ? (
        <Layout>
          <H2>På en skala från 0 till 7, hur emot SD är du?</H2>
          <SliderContainer>
            <H2>{level}</H2>
            <Slider
              aria-label="Temperature"
              orientation="vertical"
              value={level}
              valueLabelDisplay="auto"
              color={levelToParty(level)}
              step={1}
              marks
              min={0}
              max={7}
              onChange={(e) => setLevel(e.target.value)}
              size="large"
            />
          </SliderContainer>
          <ButtonContainer>
            <Button
              onClick={() => {
                localStorage.setItem(levelToParty(level), true);
                setView("result");
              }}
            >
              Nästa
            </Button>
          </ButtonContainer>
        </Layout>
      ) : (
        <Layout>
          <H2>
            På en skala från -1 till 10, hur emot SD är du? Utanför Riksdagen
            Edition
          </H2>
          <SliderContainer className="Plus-slider-container">
            <H2>{level}</H2>
            <Slider
              aria-label="Temperature"
              orientation="vertical"
              value={level}
              valueLabelDisplay="auto"
              color={levelToParty2(level)}
              step={null}
              marks={[
                {
                  value: -1,
                },
                {
                  value: 0,
                },
                {
                  value: 4,
                },
                {
                  value: 9,
                },
                {
                  value: 10,
                },
              ]}
              min={-1}
              max={10}
              onChange={(e) => setLevel(e.target.value)}
              size="large"
            />
          </SliderContainer>
          <ButtonContainer>
            <Button
              onClick={() => {
                localStorage.setItem(levelToParty(level), true);
                setView("result_plus");
              }}
            >
              Nästa
            </Button>
          </ButtonContainer>
        </Layout>
      )}
    </Card>
  );
};

export default Question;
