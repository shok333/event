import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setEventRatingAction, setLocalEventRatingAction } from '../redux/actions';
import Stars from '../components/Stars';


class StarsContainer extends React.Component{
    constructor(props){
        super(props);
        const { rating } = this.props;
        this.ratingSelected = this.ratingSelected.bind(this);
    }
    ratingSelected(event){
        const rating = event.currentTarget.dataset.rating;
        const {eventId} = this.props;
        if (event.currentTarget.dataset.id){
            this.props.setEventRating({eventId: eventId, rating: rating});
        }
        else {
            this.props.setLocalEventRating({eventId: eventId, rating: rating});
        }

    }
    render(){
        const { rating, id } = this.props;
        return <Stars rating={rating} id={id} ratingSelected={this.ratingSelected}/>
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        setEventRating: bindActionCreators(setEventRatingAction, dispatch),
        setLocalEventRating: bindActionCreators(setLocalEventRatingAction, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(StarsContainer);