import React from 'react';
// import { withRouter } from 'react-router-dom';

import * as api from '../../datastore/linkAPI';
import Comment from "../comment/comment";

export default class CommentList extends React.Component {

    render() {
        let items = this.props.comments.map((comment) => <Comment key={comment._id} comment={comment} deleteHandler={this.props.deleteHandler} replyHandler={this.props.replyHandler}/>);
        return (
            <div>
                {items}
            </div>
        );
    };
}