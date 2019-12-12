import React, {Component} from "react"
import './newComment.css';

export default class newCommentForm extends Component {
    state = { title: '', content: ''};

    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleContentChange = (e) => this.setState({content: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        let author = '(Taken from e-mail at some point)'
        let title = this.state.title.trim();
        let content = this.state.content.trim();
        if (!title || !content) {
            return;
        }
        this.props.commentHandler(author, title, content);
        this.setState({title: '', content: ''});
    }

    render() {
        return (

            <form style={{marginTop: '30px'}}>
                <h3>Add a new comment</h3>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           value={this.state.title}
                           placeholder="Title" onChange={this.handleTitleChange}></input>
                </div>
                <div className="form-group">
                    <textarea type="text"
                           className="form-control"
                           value={this.state.content}
                           placeholder="Content" onChange={this.handleContentChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
            </form>


        );
    }
}