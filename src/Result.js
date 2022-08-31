import styled from "styled-components";
import Card from "./Card";
import Bar from "./Bar";
import parties from "./data/parties.js";
import newParties from "./data/newParties.js";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 12px;
  flex: 1;
`;

const Intro = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 0;
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
  cursor: pointer;
`;

const Result = ({ level, setView, plus }) => {
  const data = (plus ? newParties : parties).map((p, i) => ({
    ...p,
    percentage: Math.floor(100 / 2 ** Math.abs(p.level - level)),
  }));
  return (
    <Card>
      <Layout>
        <Intro>{data.find((d) => d.level === level).intro}</Intro>
        <P>{data.find((d) => d.level === level).description}</P>
        <BarContainer style={{ height: 160 }}>
          {data.map(({ percentage, party, color }) => (
            <Bar
              key={party}
              percentage={percentage}
              party={party}
              color={color}
            />
          ))}
        </BarContainer>
        <ButtonContainer>
          <Button onClick={() => setView("home")}>Gör om</Button>
        </ButtonContainer>
      </Layout>
    </Card>
  );
};

export default Result;
