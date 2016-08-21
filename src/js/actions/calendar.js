import dispatcher from '../dispatcher';


export function createEvent(text){
    dispatcher.dispatch({
        type: "CREATE_EVENT",
        text
    });
}
