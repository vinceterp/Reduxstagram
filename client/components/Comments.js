import React from 'react';

const Comments= React.createClass({
    renderComments (comment, index) {
        return (
            <div className= "comment" key= {index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick= {this.props.removeComment.bind(null, this.props.params.postId, index)} >&times;</button>
                </p>
            </div>
        );
    },

    handleSubmit (event) {
        event.preventDefault();
        const {postId} = this.props.params;
        const user= this.refs.author.value;
        const text= this.refs.comment.value;
        this.props.addComment(postId, user, text);
        this.refs.commentForm.reset();
    },

    render() {
        return (
            <div className= "comment">
                {this.props.postComments.map(this.renderComments)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
});

export default Comments;