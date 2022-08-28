import * as React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Home";
import Question from "./Question";
import Result from "./Result";

const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: #222;
  padding: 20px;
`;

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
    },
    sd: {
      main: "rgb(251, 199, 0)",
    },
    kd: {
      main: "rgb(0, 94, 161)",
    },
    m: {
      main: "rgb(82, 189, 236)",
    },
    l: {
      main: "rgb(0, 106, 179)",
    },
    s: {
      main: "rgb(237, 27, 52)",
    },
    v: {
      main: "rgb(218, 41, 28)",
    },
    c: {
      main: "rgb(17, 72, 56)",
    },
    mp: {
      main: "rgb(83, 160, 69)",
    },
  },
});

const levelToParty = (level) => {
  switch (level) {
    case 0:
      return "sd";
    case 1:
      return "kd";
    case 2:
      return "m";
    case 3:
      return "l";
    case 4:
      return "s";
    case 5:
      return "v";
    case 6:
      return "c";
    case 7:
      return "mp";
    default:
      return "sd";
  }
};

export default function App() {
  const [view, setView] = React.useState("home");
  const [level, setLevel] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {view === "home" && <Home setView={setView} />}
        {view === "question" && (
          <Question
            level={level}
            setLevel={setLevel}
            levelToParty={levelToParty}
            setView={setView}
          />
        )}
        {view === "result" && (
          <Result level={level} levelToParty={levelToParty} setView={setView} />
        )}
      </Container>
    </ThemeProvider>
  );
}
