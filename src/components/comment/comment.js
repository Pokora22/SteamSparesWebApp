import React, { Component, Fragment } from 'react';
import './comment.css';
import * as api from '../../datastore/linkAPI';
import CommentList from '../commentList/commentList'

export default class Comment extends Component {
    handleDelete = (e) => {
        console.log('running delete in comment')
        e.preventDefault();
        this.props.deleteHandler(this.props.comment._id);
    }

    handleReply = (e) => {
        e.preventDefault();
        this.props.replyHandler(this.props.comment._id);
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">{this.props.comment.title}</h2>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <img src="https://image.ibb.co/jw55Ex/def_face.jpg"
                                     className="img img-rounded img-fluid"/>
                                <p className="text-secondary text-center">{this.props.comment.updated}</p>
                            </div>
                            <div className="col-md-10">
                                <p>
                                    <a className="float-left"
                                       href="#"><strong>{this.props.comment.author}
                                       </strong>
                                    </a>
                                </p>
                                <div className="clearfix"></div>
                                <p>{this.props.comment.content}</p>
                                <p>
                                    <button className="float-right btn btn-outline-primary ml-2" onClick={this.handleReply}>Reply</button>
                                    <button className="float-right btn text-white btn-danger" onClick={this.handleDelete}>Delete</button>
                                </p>
                            </div>
                        </div>
                        <CommentList comments={this.props.comment.comments} />
                    </div>
                </div>
            </div>
        );
    }
}