import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEventListAction } from '../redux/actions';
import EventList from  '../components/EventList';

class EventListContainer extends React.Component{
    constructor(props) {
        super(props);
        this.props.getEventList();
    }
    render(){
        const { previous, next, scroll, requestAllow, eventList } = this.props;
        return <EventList
            eventList={eventList}
            scroll={scroll}
            requestAllow={requestAllow}
            previous={previous}
            next={next}
        />;
    }
}

function mapStateToProps(state) {
    return {
        eventList: state.results,
        requestAllow: state.requestAllow,
        next: state.next,
        previous: state.previous,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getEventList: bindActionCreators(getEventListAction, dispatch),
        scroll: function () {
            if(this.props.requestAllow){
                if((this.eventListObject.offsetHeight+this.eventListObject.offsetTop)-window.pageYOffset<990){
                    const { next, previous } = this.props;
                    bindActionCreators(getEventListAction, dispatch)({
                        next: next,
                        previous: previous
                    });
                }

            }
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
