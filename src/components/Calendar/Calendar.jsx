/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: (moment().toDate()),
        end: moment()
          .add(0, 'days')
          .toDate(),
        title: 'Some title',
      },
      // {
      //   start: moment().toDate(),
      //   end: moment()
      //     .add(1, 'days')
      //     .toDate(),
      //   title: 'Second Date Test',
      // },
    ],
  };

  render() {
    const { events } = this.state;
    return (
      <div className="Calendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: '100vh' }}
        />
      </div>
    );
  }
}

export default MyCalendar;
