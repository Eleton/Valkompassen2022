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
    afs: {
      main: "rgb(249, 197, 53)",
    },
    med: {
      main: "rgb(43, 79, 122)",
    },
    pp: {
      main: "rgb(81, 36, 131)",
    },
    fi: {
      main: "rgb(217, 50, 138)",
    },
    pn: {
      main: "rgb(237, 124, 48)",
    },
  },
});

export default function App() {
  const [view, setView] = React.useState("home");
  const [level, setLevel] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {view === "home" && <Home setView={setView} setLevel={setLevel} />}
        {view === "question" && (
          <Question level={level} setLevel={setLevel} setView={setView} />
        )}
        {view === "question_plus" && (
          <Question level={level} setLevel={setLevel} setView={setView} plus />
        )}
        {view === "result" && <Result level={level} setView={setView} />}
        {view === "result_plus" && (
          <Result level={level} setView={setView} plus />
        )}
      </Container>
    </ThemeProvider>
  );
}
