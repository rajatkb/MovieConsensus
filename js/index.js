/*
*/


$(document).ready(function(){
	if(typeof web3 !== 'undefined'){
		web3 = new Web3(web3.currentProvider);
	}else{
		web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		web3.eth.defaultAccount = web3.eth.accounts[0];
	}

	var movieContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getMoviesLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_movieId","type":"uint256"},{"name":"_commentContent","type":"string"},{"name":"_commenterName","type":"string"}],"name":"addComment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movies","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"imdbLink","type":"string"},{"name":"imageLink","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_movieId","type":"uint256"}],"name":"getCommentsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_imdbLink","type":"string"},{"name":"_imageLink","type":"string"}],"name":"addNewMovie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"comments","outputs":[{"name":"id","type":"uint256"},{"name":"commentContent","type":"string"},{"name":"commenterName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_imdbLink","type":"string"},{"indexed":false,"name":"_imageLink","type":"string"},{"indexed":false,"name":"_id","type":"uint256"}],"name":"resAddNewMovie","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_movieId","type":"uint256"},{"indexed":false,"name":"commentId","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"content","type":"string"}],"name":"resAddNewComment","type":"event"}]);


	var movieContract = movieContract.at("0xb90397990c6e6ce6df76bba14bed15b7925f70bb");

	let movieName = $('#movieName');
	let imdbLink = $('#imdbLink');
	let imageLink = $('#imageLink');
	let movieContainer = $('#movieContainer');
	let movieLength = 0;
	let movieIds = [];

	$('#movieSubmission').submit(function(event){
		event.preventDefault();
		console.log("submitting");
		movieContract.addNewMovie( movieName.val() , imdbLink.val() , imageLink.val() , function(error , response){
			if(error){
				alert("Oops Payment failed !!");
				console.log(error);
			}else{
				spawnMainLoader();
				movieName.val("");
				imdbLink.val("");
				imageLink.val("");
			}
		});
	});

	$('#movieContainer').on('submit','.commentSubmission',function(event){
		event.preventDefault();
		let name = $(this).find('input').val();
		let comment = $(this).find('textarea').val();
		let movieId = $(this).parent().attr('data');
		$(this).find('input').val("");
		$(this).find('textarea').val("");
		movieContract.addComment(movieId , comment , name , function(err , res){
			if(err){
				alert("Opps Payment failed !!");
				console.log(err);
			}
		});
	});


	movieContract.resAddNewMovie().watch(function(error , result){
		if(error){
			console.log(error);
		}else{
			vanishMainLoader();
			console.log("Added new movie to inerface");
			let name = result.args._name;
			let imdbLink = result.args._imdbLink;
			let imageLink = result.args._imageLink;
			let movieId  = BigNumber(result.args._id).toString(10);
			movieAppend(movieId , name , imdbLink , imageLink);
		}
	});

	movieContract.resAddNewComment().watch(function(error , result){
		if(error){
			console.log(error);
		}else{
			console.log("Adding new comment");
			console.log(result.args);
			let movieId = BigNumber(result.args._movieId).toString(10);
			let commentId = BigNumber(result.args.commentId).toString(10);
			let commentName = result.args.name;
			let commentContent = result.args.content;
			let commentBox = $('.movie_box[data='+movieId+'] .comment_box');
			
			commentAppend(commentBox , commentId , commentName , commentContent );
			
		}
	});


	movieContract.getMoviesLength(function(err , res){
		movieLength = res;
		movieLength = Number(BigNumber(movieLength).toString(10));
		console.log("Recieved Movies number is:" , movieLength);
		appendMovieList();
	});

	let asyncCall = 0;
	function appendMovieList(){
		for(let i=0; i < movieLength; i++){
			asyncCall++;
			console.log("Getting Movie no. " , i);
			movieContract.movies(i , function(err , res){
				let id = BigNumber(res[0]).toString(10);
				let name = res[1];
				let imdbLink = res[2];
				let imageLink = res[3];
				let commentLength = 0;
				movieIds.push(id);
				movieAppend(id , name , imdbLink , imageLink);

				// async call finishes for getting all movies and then the comments
				if((--asyncCall) == 0){
					appendCommentList();
				}
			});
		}
	}


	function appendCommentList(){
		let async = 0;
		movieIds.forEach(function(id){
						movieContract.getCommentsLength(id , function(err , res){
								let commentLength = BigNumber(res).toString(10);
								console.log("movie: " , id , "comment length: " , commentLength );
								
								for(let j=0; j < commentLength ; j++ ){
										async++;
										movieContract.comments(id , j , function(err , res){
											console.log("comment for movie:",id," ",res);
											let commentBox = $('.movie_box[data='+id+'] .comment_box');		
											let commentId = BigNumber(res[0]).toString(10);
											let content = res[1];
											let name = res[2];
											commentAppend(commentBox , commentId , name , content ); 
											
											if((--async) == 0){
												vanishMainLoader();
											}

									});
								}								
							});
					});
	}

	function commentAppend(domCommentElement , id , name , content ){
				domCommentElement.append('<div class="comment_container" data='+id+'>'+
										'<h4 class="commenter_name">'+name+' says</h4>'+
										'<p class="comment_content">" '+content+' "</p>'+
									'</div>');
	}

	
	function movieAppend(id , name , imdbLink , imageLink){
		movieContainer.append('<div class="col-md-6" >'+
				'<div class="movie_box" data="'+id+'">'+
					'<img src="'+imageLink+'" class="img-fluid rounded">'+
					'<h3>Name : <span class="name"> '+name+' </span></h3>'+
					'<a href="'+imdbLink+'"> IMDB link</a>'+
					'<div class="comment_box">'+
					'</div>'+
					'<div class="comment_submit" data="'+id+'">'+
						'<form class="commentSubmission">'+
							'<h4><b>comment down here</b></h4>'+
							'<input type="text" placeholder="Name" name="comment_name" id="commenterName" class="form-control" required="">'+
							'<br>'+
							'<textarea rows="5" cols="52"></textarea>'+
							'<button class="btn btn-primary">comment</button>'+
						'</form>'+
					'</div>'+
				'</div>'+
			'</div>');
	};


	//// UI related stuff /////

	function vanishMainLoader(){
		$('#mainLoader').hide();
	}

	function spawnMainLoader(){
		$('#mainLoader').show();
	}


});