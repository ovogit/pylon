import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class CalendarCollection extends EventEmitter {
    constructor(){
        super();
        this.collection = [
            {
                id: 123,
                text: 'calendar event text',
            }
        ]
    }

    getAll(){
        return this.collection;
    }

    createEvent(text){
        const id = Date.now();

        this.collection.push({
            id,
            text
        });
        console.log(this.collection);
        this.emit("change");
    }

    handleActions(action){
        switch (action.type) {
            case 'CREATE_EVENT':{
                this.createEvent(action.text);
                break;
            }
            case 'LOAD_EVENTS':{
                this.collection = action.collection;
                this.emit("change");
                break;
            }
        }
    }
}

const calendarCollection = new CalendarCollection;
dispatcher.register(calendarCollection.handleActions.bind(calendarCollection));

export default calendarCollection;
