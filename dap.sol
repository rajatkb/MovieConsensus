pragma solidity ^0.4.0;

contract movie{
    
    struct Comment{
        uint id;
        string commentContent;
        string commenterName;
    }
    
    
    struct Movie{
        uint id;
        string name;
        string imdbLink;
        string imageLink;
    }
    
    Movie[] public movies;
    mapping(uint => Comment[]) public comments;
    
    event resAddNewMovie(string _name , string _imdbLink , string _imageLink , uint _id);
    function addNewMovie(string _name , string _imdbLink , string _imageLink) public {
        movies.push(Movie(movies.length ,_name ,_imdbLink ,_imageLink));
        resAddNewMovie(_name , _imdbLink , _imageLink , movies.length);
    }
    
    function getMoviesLength()public constant returns(uint){
        return movies.length;
    }
    
    event resAddNewComment(uint _movieId , uint commentId, string name , string content);
    function addComment(uint _movieId , string _commentContent , string _commenterName) public{
        comments[_movieId].push(Comment(comments[_movieId].length, _commentContent , _commenterName ));
        resAddNewComment(_movieId , comments[_movieId].length , _commenterName , _commentContent);
    }
    
    function getCommentsLength(uint _movieId) public constant returns(uint){
        return comments[_movieId].length;
    }
    
}