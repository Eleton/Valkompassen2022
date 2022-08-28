import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  gap: 4px;
`;

const Percentage = styled.div`
  justify-self: center;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20px;
  border-radius: 9999px;
  align-self: stretch;
  background-color: #ccc;
  justify-self: center;
  overflow: hidden;
`;

const Front = styled.div`
  width: 100%;
  height: ${({ percentage }) => percentage}%;
  background-color: ${({ color }) => color};
`;

const PartyEmblem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  text-transform: uppercase;
  color: ivory;
  justify-self: center;
  font-size: 0.8rem;
`;

const Bar = ({ percentage, party, color }) => {
  return (
    <Container>
      <Percentage>{percentage}</Percentage>
      <Back>
        <Front percentage={percentage} color={color} />
      </Back>
      <PartyEmblem color={color}>{party}</PartyEmblem>
    </Container>
  );
};

export default Bar;
