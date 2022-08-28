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
  width: 30px;
  height: 30px;
  text-transform: uppercase;
  color: ivory;
  justify-self: center;
`;

const Bar = ({ percentage, party, color }) => {
  console.log(color);
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