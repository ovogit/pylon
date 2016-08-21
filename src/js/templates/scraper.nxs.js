import React from 'react';
import * as calendarActions from '../actions/calendar';
import calendarCollection from '../collections/calendar';

class Scraper extends React.Component {

    constructor(){
        super();
        this.state = {
            events: calendarCollection.getAll()
        };
        console.log(this.col);
    }

    render(){
        const { events } = this.state;
        const eventComponents = events.map((_event) => {
            return <div id={_event.id}>{_event.text}</div>;
        });
        return (
<div class="container container-fluid"> 
    <div class="row">
        <div class="col-md-12">
        {eventComponents}
        </div>
    </div>
</div>
                );

    }

}
export default Scraper;
