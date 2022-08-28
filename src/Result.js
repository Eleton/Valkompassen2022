import styled from "styled-components";
import Card from "./Card";
import Bar from "./Bar";

const parties = [
  {
    party: "sd",
    intro: "Du är sverigedemokrat",
    description: "Jimmie Åkesson, tjala lala la~",
    color: "rgb(251, 199, 0)",
  },
  {
    party: "kd",
    intro: "Du är kristdemokrat",
    description:
      "SDs förslag kan ibland kännas lite väl hårda, men om man strösslar formuleringarna med lite kristen värdegrund så låter dom ju ganska fräcka!",
    color: "rgb(0, 94, 161)",
  },
  {
    party: "m",
    intro: "Du är moderat",
    description:
      "En gång i tiden var SD paria men längtan efter makten tog till slut överhanden. Dom funkar dock bra som frontlinje för din favoritpolitik, låt SD gå ut med ett förslag först och se om det flyger och sen lanserar ni ett snarlikt förslag tre månader senare.",
    color: "rgb(82, 189, 236)",
  },
  {
    party: "l",
    intro: "Du är liberal",
    description:
      "SD står för allt du inte står för, men en av sakerna du står för är att man ska kunna prata med alla. Så nu står vi här.",
    color: "rgb(0, 106, 179)",
  },
  {
    party: "s",
    intro: "Du är socialdemokrat",
    description:
      "Det absolut värsta med SD, det är att dom har tagit så många S-väljare. Vissa spekulanter hävdar att S+SD kan ingå regeringssamarbete inom några mandatperioder, men till dess håller vi dom på dubbel armlängds avstånd.",
    color: "rgb(237, 27, 52)",
  },
  {
    party: "v",
    intro: "Du är vänsterpartist",
    description:
      "I regel så är det väldigt angeläget att inte tycka likadant som SD, men man kan såklart göra undantag i hjärtefrågor. Typ som att rösta bort en S-regering.",
    color: "rgb(218, 41, 28)",
  },
  {
    party: "c",
    intro: "Du är centerpartist",
    description:
      "För dig finns det ingen fråga som är så viktig att den går att tycka om SD också tycker den. Förutom det gemensamma föraktet emot Vänsterpartiet.",
    color: "rgb(17, 72, 56)",
  },
  {
    party: "mp",
    intro: "Du är miljöpartist",
    description:
      "Om SD är äpplen så är du päron. Det går helt enkelt inte att jämföra er. Du vill vara så långt ifrån Sverigedemokraterna som det bara går, och då är det bara Miljöpartiet eller Danmarkfascisterna som går att välja på.",
    color: "rgb(83, 160, 69)",
  },
];

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 12px;
  flex: 1;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
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
        {/* <H2>Resultat</H2> */}
        <Intro>{parties[level].intro}</Intro>
        <P>{parties[level].description}</P>
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
