import React from 'react';

//TODO 
// trying to make an event emitter
//import EventEmitter from 'events';


class Navigation extends React.Component {

    constructor(){
        super();
    }
    _handleClick( {link} ){
        let _link = link;
    }
    render(){
        return (

<nav class="navbar navbar-default">
    <div class="container container-fluid">
        <div class="nxs-nav">
            <div class="nxs-button" onClick={() => {this._handleClick({link: 'calendar'})}}>
                <span class="glyphicon glyphicon-calendar" aria-hidden="true" ></span>
            </div>
            <div class="nxs-button">
                <span class="glyphicon glyphicon-th-list" aria-hidden="true" ></span>
            </div>
        </div>
    </div>
</nav>
                );

    }

}

export default Navigation;
