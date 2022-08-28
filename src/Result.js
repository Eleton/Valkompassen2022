import styled from "styled-components";
import Card from "./Card";
import Bar from "./Bar";

const parties = [
  {
    party: "sd",
    description: "Jimmie Åkesson, tjala lala la~",
    color: "rgb(251, 199, 0)",
  },
  {
    party: "kd",
    description:
      "Du är kristdemokrat. SDs förslag kan ibland kännas lite väl hårda, men om man strusslar formuleringarna med lite kristen värdegrund så låter dom ju ganska kitschiga!",
    color: "rgb(0, 94, 161)",
  },
  {
    party: "m",
    description:
      "Du är moderat. En gång i tiden var SD paria men kärleken till makten tog till slut överhanden. Dom funkar dock bra som frontlinje för din favoritpolitik, låt SD gå ut med ett förslag först och se om det flyger och sen lanserar ni ett snarlikt förslag tre månader senare.",
    color: "rgb(82, 189, 236)",
  },
  {
    party: "l",
    description:
      "Du är liberal. SD står för allt du inte står för, men en av sakerna du står för att man ska kunna prata med alla. Så nu står vi här.",
    color: "rgb(0, 106, 179)",
  },
  {
    party: "s",
    description:
      "Du är socialdemokrat. Det absolut värsta med SD, det är att dom har tagit så många av era väljare. Vissa spekulanter hävdar att S+SD kommer bilda en solid regering om några mandatperioder, men just nu håller vi dom på dubbel armlängds avstånd.",
    color: "rgb(237, 27, 52)",
  },
  {
    party: "v",
    description:
      "Du är vänsterpartist. I regel så är det väldigt angeläget att inte tycka likadant som SD, men man kan såklart göra undantag i hjärtefrågor. Typ som att rösta bort en S-regering.",
    color: "rgb(218, 41, 28)",
  },
  {
    party: "c",
    description:
      "Du är centerpartist. För dig finns det ingen fråga som är så viktig att den går att tycka om SD också tycker den. Förutom kanske att ni båda ogillar Vänsterpartiet.",
    color: "rgb(17, 72, 56)",
  },
  {
    party: "mp",
    description:
      "Du är miljöpartist. Om SD är äpplen så är du päron. Det går helt enkelt inte att jämföra er.",
    color: "rgb(83, 160, 69)",
  },
];

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 12px;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
`;

const P = styled.p`
  font-size: 1.4rem;
  text-align: center;
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
  padding: 0.5rem 4rem;
  width: 100%;
`;

const Result = ({ level, setView }) => {
  const data = parties.map((p, i) => ({
    ...p,
    percentage: Math.floor(100 / 2 ** Math.abs(i - level)),
  }));
  return (
    <Card>
      <Layout>
        <H2>Resultat</H2>
        <P>{parties[level].description}</P>
        <BarContainer style={{ height: 160 }}>
          {data.map(({ percentage, party, color }) => (
            <Bar percentage={percentage} party={party} color={color} />
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
