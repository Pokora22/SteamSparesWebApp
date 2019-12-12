import React, { Component, Fragment } from 'react';
import './comment.css';

export default class Comment extends Component {
    render() {
        return (
            <div >
                <span className="newsitem" >{this.props.comment.title}
                    <span>{this.props.comment.content}</span>
                </span>
            </div>
        );
    }
}