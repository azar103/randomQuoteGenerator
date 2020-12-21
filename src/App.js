import "./App.css";
import { useState } from "react";
import axios from "axios";
import QuotesGenerator from "./components/QuotesGenerator";
import styled from "styled-components";
function App() {
  const [quote, setQuote] = useState([]);
  const getRandomIndex = (quotes) => {
    return Math.floor(Math.random() * quotes.length);
  };
  const FOOTER = styled.p`
    text-align: center;
    color: white;
    margin-top: 30px;
  `;
  const LINK = styled.a`
    color: white;
  `;

  const loadQuote = async () => {
    const res = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const index = getRandomIndex(res.data.quotes);
    setQuote(res.data.quotes[index]);
  };

  return (
    <>
      <QuotesGenerator quote={quote} onClickHandler={loadQuote} />
      <FOOTER>
        By{" "}
        <LINK
          target="_blank"
          href="https://github.com/azar103?tab=repositories"
        >
          Anis Zarrouk{" "}
        </LINK>
      </FOOTER>
    </>
  );
}

export default App;
