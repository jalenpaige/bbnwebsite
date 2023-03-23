
import React from 'react';
import '../../App.css'
import './Calendar.css'
import Footer from '../Footer';

function Calendar () {
    return (
        <div className ="calendarDiv">    
          <iframe src="https://calendar.google.com/calendar/embed?src=c_hrbadcleatbkpg2tp16k9a48hs%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: "0", width : "100%", height : "600px", frameborder : "0", scrolling : "no"}}></iframe>
          <Footer />
        </div>

    )
}

export default Calendar;

/*
import { google } from 'googleapis';
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { google } from 'googleapis';

const apiKey = 'YOUR_API_KEY';
const calendar = google.calendar({ version: 'v3', auth: apiKey });

const response = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });
  const events = response.data.items;

  const localizer = momentLocalizer(moment);

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });
      const events = response.data.items.map((event) => ({
        title: event.summary,
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime),
      }));
      setEvents(events);
    }
    fetchEvents();
  }, []);

  return (
    <div>
      <Calendar localizer={localizer} events={events} />
    </div>
  );
}

export default Calendar;
*/