import React from 'react';
import Event from  './Event';

class EventList extends React.Component{
   render(){
       const { eventList } = this.props;
       const events = eventList.map((item) => {
           return <Event key={item.id} id={item.id} photo={item.photo} title={item.title} review={item.review} />
       });
       return <div ref={(input) => { this.eventListObject = input; }}>
           {events}
       </div>;
   }
   componentDidMount(){
       this.test = 0;
       window.onscroll=this.props.scroll.bind(this);
   }
}

export default EventList;