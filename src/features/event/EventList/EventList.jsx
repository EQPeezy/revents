import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { event, deleteEvent } = this.props;
    return (
      <div>
          {event.map((event) => (
            <EventListItem key={event.id} event={event}  deleteEvent={deleteEvent}/>
          ))}
      </div>
    );
  }
}

export default EventList;
