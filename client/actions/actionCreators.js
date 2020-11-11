//Actions and their types and parameters are defined here
//Has a lot to do with dispatch because this shows what type of action is done in the app

//increment likes on a post
export function increment (index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comments to a post
export function addComment (postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comments from a post
export function removeComment (postId, index){
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}