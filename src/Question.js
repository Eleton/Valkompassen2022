import styled from "styled-components";
import Slider from "@mui/material/Slider";
import Card from "./Card";

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
  padding: 0.5rem 4rem;
  width: 100%;
`;

const Question = ({ level, levelToParty, setLevel, setView }) => {
  return (
    <Card>
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
          <Button onClick={() => setView("result")}>Nästa</Button>
        </ButtonContainer>
      </Layout>
    </Card>
  );
};

export default Question;
