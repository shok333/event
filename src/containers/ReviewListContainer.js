import React from 'react';
import Review from '../components/Review';



class ReviewListContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { review } = this.props;
        const reviewList = review.map(item => <Review key={item.id} id={item.id} rating={item.rating} text={item.text} />)
        return reviewList;
    }
}

export default ReviewListContainer;