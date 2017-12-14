import React from 'react';
import Styled from 'styled-components';
import Review from './Review';
import ReviewContainer from "../containers/ReviewContainer";

const Image = Styled.span`
  width: 200px;
  height: 100px;
  display: inline-block;
  background: url(${props => props.theme.url}) no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Container = Styled.div`
  display: flex;
  align-items: flex-start
`;

const Header = Styled.h3`
  margin: 5px 20px; 
`;

const EventContainer = Styled.div`
    margin-bottom: 40px;
    padding: 20px 0;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
`;

const Event = (props) => {
    const { id, photo, title, review } = props;
    return <EventContainer className="row" key={id}>
        <Container className="col-xs-12 col-sm-6 col-lg-6">
            <Image theme={{url: photo}}/>
            <Header>{title}</Header>
        </Container>
        <Container className="col-xs-12 col-sm-6 col-lg-6">
            <ReviewContainer  eventId={id} review={review} />
        </Container>
    </EventContainer>
}

export default Event;