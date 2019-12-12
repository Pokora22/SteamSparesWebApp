import React from 'react';
import _ from 'lodash';
import NewCommentForm from "../newCommentForm/newCommentForm";
// import { withRouter } from 'react-router-dom';

import * as api from '../../datastore/linkAPI';
import Comment from "../comment/comment";
import Header from "../header/header";
import CommentList from "../commentList/commentList";

// class Form extends React.Component {
//     state = { comment: '', author: ''};
//
//     handleCommentChange = (e) => {
//         this.setState({comment : e.target.value});
//     };
//
//     onSubmit = (e) => {
//         e.preventDefault();
//         let comment = this.state.comment.trim();
//         let author = this.state.author.trim();
//         if (!comment ) {
//             return;
//         }
//         this.props.commentHandler(comment,author );
//         this.setState({comment: '', author: ''});
//     };
//
//     render() {
//         return (
//             <form  style={{marginTop: '30px'}}>
//                 <h3>Add a new comment</h3>
//
//                 <div className="form-group">
//                     <input type="text"  className="form-control"
//                            placeholder="Comment" value={this.state.comment}
//                            onChange={this.handleCommentChange} ></input>
//                 </div>
//                 <div className="form-group">
//                     <input type="text"  className="form-control"
//                            placeholder="Your name" value={this.state.name}
//                            onChange={this.handleNameChange} ></input>
//                 </div>
//                 <button type="submit" className="btn btn-primary"
//                         onClick={this.onSubmit}>Submit</button>
//             </form>
//         );
//     }
// }

// class Comment extends React.Component {
//     handleVote = () => {
//         this.props.upvoteHandler(this.props.comment.id);
//     };
//     render() {
//         let lineStyle = {
//             fontSize: '20px', marginLeft: '10px'  };
//         return (
//             <div>
//                     <span className="glyphicon glyphicon-thumbs-up"
//                           onClick={this.handleVote}></span>
//                 {this.props.comment.upvotes} - by {this.props.comment.author}
//                 <span style={lineStyle} >
//                         {this.props.comment.comment}
//                     </span>
//             </div>
//         );
//     }
// }

class CommentView extends React.Component {
    state = {
        comments: []
    }
    addComment = (author, title, content) => {
        api.addComment(author, title, content );
        this.setState({});
    };

    deleteComment = (id) => {
        console.log('running delete in page for: ' + id)
        api.deleteComment(id).then(
            res => {
                console.log("delete response: " + res);
            }
        );
        this.setState({});
    };

    componentDidMount() {
    }

    render() {
        let allComments = api.getAllComments().then(resp =>{
            let comments = resp;
            comments = _.sortBy(comments, (comment) => comment.updated);
            this.setState({comments: comments})
        });

        return (
            <div className="container">
                <Header gamesUnused={0} gamesUsed={0} gamesTotal={0}/>
                <div className="row">
                    <div className="col-md-9 col-md-offset-1">
                        <h1>Comment Section</h1>
                        <CommentList comments={this.state.comments} deleteHandler={this.deleteComment}/>
                        <NewCommentForm commentHandler={this.addComment} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentView;