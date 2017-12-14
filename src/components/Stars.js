import React from 'react';
import Styled from 'styled-components';

const GreyStar = Styled.button`
  color: grey;
  width: 50px;
  height: 50px;
  padding: 0;
  font-size: 30px;
  background-color: rgba(0,0,0,0);
`;
const GreenStar = Styled.button`
  color: green;
  width: 50px;
  height: 50px;
  padding: 0;
  font-size: 30px;
  background-color: rgba(0,0,0,0);
`;

const Stars = (props) => {
    let { ratingSelected, rating, id } = props;

    let starArray = [];
    for (let i = 1; i <= 5; i++){
        if(i <= rating){
            starArray.push(<GreenStar key={i} data-id={id} data-rating={i} onClick={ratingSelected} className="glyphicon glyphicon-star btn" />);
        }
        else {
            starArray.push(<GreyStar key={i} data-id={id} data-rating={i} onClick={ratingSelected} className="glyphicon glyphicon-star btn" />);
        }
    }
    return <div>{starArray}</div>;
}

export default Stars;