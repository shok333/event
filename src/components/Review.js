import React from 'react';
import Styled from 'styled-components';
import StarsContainer from '../containers/StarsContainer';

const Container = Styled.div`
  display: flex;
  flex-direction: column
`;
const Text = Styled.p`
  margin: 0;
`;
const TextAnButton = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;


class Review extends React.Component{
    render(){
        const { review, eventId, createEvents } = this.props;
        let { openReviewForm, addNewReview, openEditionTextarea, editionTextareaSuccess, addCreateEvent } = this.props;
        openReviewForm = openReviewForm.bind(this);
        addNewReview = addNewReview.bind(this);
        openEditionTextarea = openEditionTextarea.bind(this);
        const addDefaultStation = () => {
            if(this.textReview){
                if(this.textReview.classList.contains('hidden')) {
                    this.textReview.classList.remove('hidden');
                }
            }
            if(this.editionButton){
                if(this.editionButton.classList.contains('hidden')) {
                    this.editionButton.classList.remove('hidden');
                }
            }
            if(this.editionTextarea){
                if(!this.editionTextarea.classList.contains('hidden')) {
                    this.editionTextarea.classList.add('hidden');
                }
            }

        }
        if(review.id){
            const { id, rating, text } = review;
            return <Container>
                <TextAnButton>
                    <div ref={(input) => { this.textReview = input; }}>
                        <Text>{text}</Text>
                    </div>
                    <button
                        ref={(input) => { this.editionButton = input; }}
                        onClick={openEditionTextarea}
                        className="btn glyphicon glyphicon-pencil"
                    />
                </TextAnButton>
                <textarea
                    className="hidden"
                    ref={(input) => { this.editionTextarea = input; }}
                    rows="3"
                    defaultValue={text}
                    onBlur={editionTextareaSuccess}
                />
                <StarsContainer rating={rating} id={id} eventId={eventId}/>
                {addDefaultStation()}
            </Container>
        }
        else {
            const { rating, id  } = review;

            let componentForRender = null;

            createEvents.forEach((item) => {
                if(item.eventId === eventId){
                    componentForRender =  <Container>
                        <div>
                            <button className="btn hidden" onClick={openReviewForm}>Оставить отзыв</button>
                        </div>
                        <div ref={(input) => { this.reviewForm = input; }}>
                            <Container>
                                <StarsContainer ref={(input) => { this.stars = input; }}  rating={rating} id={id} eventId={eventId} />
                                <textarea
                                    ref={(input) => { this.textarea = input; }}
                                    rows="3"
                                    defaultValue={item.text}
                                    onChange={()=>{ addCreateEvent({eventId: eventId, text: this.textarea.value})}}
                                />
                                <button className="btn" onClick={addNewReview}>Опубликовать отзыв</button>
                            </Container>
                        </div>
                    </Container>
                }
            });

            if(componentForRender){
                return componentForRender;
            }
            return <Container>
                <div>
                    <button className="btn" onClick={openReviewForm}>Оставить отзыв</button>
                </div>
                <div className="hidden" ref={(input) => { this.reviewForm = input; }}>
                    <Container>
                        <StarsContainer ref={(input) => { this.stars = input; }}  rating={rating} id={id} eventId={eventId} />
                        <textarea ref={(input) => { this.textarea = input; }} name="" id="" rows="3"></textarea>
                        <button className="btn" onClick={addNewReview}>Опубликовать отзыв</button>
                    </Container>
                </div>
            </Container>
        }
    }
}

export default Review;