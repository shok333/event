import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addReviewAction, textareaEditionAction, addCreateEventAction, removeCreateEventAction } from '../redux/actions';

import Review from '../components/Review';

class ReviewContainer extends React.Component{
    constructor(props){
        super(props);
        this.editionTextareaSuccess = this.editionTextareaSuccess.bind(this);
    }
    openReviewForm() {
        this.reviewForm.classList.toggle('hidden');
        this.textarea.focus();
        this.props.addCreateEvent({eventId: this.props.eventId, text: ''});
    }
    openEditionTextarea(event) {
        this.editionTextarea.classList.remove('hidden');
        this.editionTextarea.focus();
        this.textReview.classList.add('hidden');
        event.target.classList.add('hidden');
    }
    editionTextareaSuccess(event){
        this.props.textareaEdition({ text: event.target.value, eventId: this.props.eventId });
    }

    render(){
        const { review, eventId } = this.props;
        return <Review
            addNewReview={this.props.addReview}
            eventId={eventId}
            review={review}
            openReviewForm={this.openReviewForm}
            openEditionTextarea={this.openEditionTextarea}
            editionTextareaSuccess={this.editionTextareaSuccess}
            addCreateEvent={this.props.addCreateEvent}
            createEvents={this.props.createEvents}
            removeCreateEvent={this.props.removeCreateEvent}
        />;
    }
}

function mapStateToProps(state) {
    return {
        createEvents: state.createEvents
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeCreateEvent: bindActionCreators(removeCreateEventAction, dispatch),
        addReview: function () {
            this.props.removeCreateEvent(this.stars.props.eventId)
            const review = {
                text: this.textarea.value,
                rating: this.stars.props.rating,
                eventId: this.stars.props.eventId
            }
            if(review.text !== '' && review.rating !== 0){
                bindActionCreators(addReviewAction, dispatch)(review);
            }
        },
        textareaEdition: bindActionCreators(textareaEditionAction, dispatch),
        addCreateEvent: bindActionCreators(addCreateEventAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);

