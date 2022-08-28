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

const Home = ({ setView }) => {
  return (
    <Card>
      <Layout>
        <H1>Aimans Valkompass</H1>
        <P>
          Gör Aimans Valkompass™ och ta reda på vilket parti du borde rösta på i
          valet 2022!
        </P>
        <div />
        <ButtonContainer>
          <Button onClick={() => setView("question")}>Start</Button>
        </ButtonContainer>
      </Layout>
    </Card>
  );
};

export default Home;
