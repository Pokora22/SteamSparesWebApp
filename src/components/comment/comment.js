import React, { Component, Fragment } from 'react';
import './comment.css';
import * as api from '../../datastore/linkAPI';
import CommentList from '../commentList/commentList'

export default class Comment extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Bootstrap 4 User Rating Form / Comment Form</h2>
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
                                       href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>{this.props.comment.author}
                                       </strong>
                                    </a>
                                    <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                                    <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                                    <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                                    <span className="float-right"><i className="text-warning fa fa-star"></i></span>

                                </p>
                                <div className="clearfix"></div>
                                <p>{this.props.comment.content}</p>
                                <p>
                                    <a className="float-right btn btn-outline-primary ml-2"> <i
                                        className="fa fa-reply"></i> Reply</a>
                                    <a className="float-right btn text-white btn-danger"> <i
                                        className="fa fa-heart"></i> Like</a>
                                </p>
                            </div>
                        </div>
                        {/*<CommentList comments={this.props.comment.comments} />*/}
                    </div>
                </div>
            </div>
        );
    }
}