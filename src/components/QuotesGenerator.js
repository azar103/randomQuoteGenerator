import React from "react";
import styled from "styled-components";

const GENERATORCONTAINER = styled.div`
  max-width: 550px;
  border-radius: 3px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  padding: 35px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;
const CITATION = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-right: 5px;
  margin-left: 5px;
  font-family: "Indie Flower";
  transition: visiblity 3s linear;
`;
const BUTTON = styled.button`
  margin-top: 10px;
  width: 100px;
  background-color: #1da1f2;
  color: #fff;
  outline: none;
  border: none;
  padding: 15px;
  line-height: 3px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const GENERATORFOOTER = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const AUTHOR = styled.div`
  text-align: right;
  margin-top: 15px;
  margin-right: 50px;
  color: #556567;
`;
const SOCIALBUTTONS = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SOCIALBUTTON = styled.a`
  padding: 10px;
  background-color: #1da1f2;
  border: none;
  outline: none;
  margin-left: 5px;
  color: #ffff;
  width: 30px;
  height: 20px;
  font-size: 20px;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const QUOTE = styled.i`
  font-size: 20px;
  margin-bottom: 5px;
`;

const TWITTERHREF =
  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

const QuotesGenerator = ({ quote, onClickHandler }) => {
  return (
    <GENERATORCONTAINER>
      <QUOTE className="fa fa-quote-left"></QUOTE>
      <CITATION>{quote.quote}</CITATION>
      <AUTHOR>
        {quote.author && (
          <span>
            {" "}
            <i>-{quote.author} </i>
          </span>
        )}
      </AUTHOR>
      <GENERATORFOOTER>
        <SOCIALBUTTONS>
          <SOCIALBUTTON
            target="_blank"
            href={`${TWITTERHREF}${encodeURIComponent(
              '"' + quote.quote + '" ' + quote.author
            )} `}
          >
            <i className="fa fa-twitter" aria-hidden={true}></i>
          </SOCIALBUTTON>
        </SOCIALBUTTONS>
        <BUTTON onClick={onClickHandler}>New Quote</BUTTON>
      </GENERATORFOOTER>
    </GENERATORCONTAINER>
  );
};

export default QuotesGenerator;
