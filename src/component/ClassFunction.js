import React, { Component, Fragment } from 'react';

export default class DateClass extends Component {
    render() {
        return (
            <Fragment>
                   <h1>Date Class</h1>
                   <p>{this.props.date.toDateString()}</p>
            </Fragment>
        );
    }
}