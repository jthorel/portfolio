var portfolio = new Portfolio();
var Router = ReactRouter.Router;
var Route = ReactRouter.Route, DefaultRoute = ReactRouter.DefaultRoute,
  Link=ReactRouter.Link, RouteHandler = ReactRouter.RouteHandler, HashHistory = ReactRouter.hashHistory,
  IndexRoute = ReactRouter.IndexRoute;



// COMMENTVIEW
//-------------------------------------------------
var Comment = React.createClass({

	render: function() {
		return (
			<div className="commentbox">
				<p className="comment">{this.props.children} <i className="pull-right">-{this.props.author}</i></p>
				<p className="comment">Rated it: {this.props.rating}</p>
			</div>
		);
	}

});


var CommentList = React.createClass({

	render: function() {

		var comments = this.props.data.map(function(c){
			return (
				<Comment key={c.id} author={c.author} rating={c.rating}>
					{c.text}
				</Comment>
			);
		});

		return (
			<div>
				{comments}
			</div>
		);
	}

});

var CommentForm = React.createClass({
	getInitialState: function(){
		return {
			text:'',
			author:'',
			rating:''
		};
	},

	handleSubmit: function(e){
		e.preventDefault();
		var obj = {
			text: this.state.text,
			author: this.state.author,
			rating: this.state.rating
		};

		this.props.submitMethod(this.props.videoId, obj);
		this.setState({
			text:'',
			author:'',
			rating:''
		});
	},

	handleAuthorChange: function(e) {
    	this.setState({author: e.target.value});
  	},
  	
  	handleTextChange: function(e) {
    	this.setState({text: e.target.value});
  	},

  	handleRatingChange: function(e) {
  		this.setState({rating: e.target.value});
  	},

	render: function(){
		return (
			<div>

				<form onSubmit={this.handleSubmit}>
					<textarea rows="3" 
						value={this.state.text} 
						placeholder="Add new comment..."
						onChange={this.handleTextChange}/>
					<input type="text" 
						value={this.state.author} 
						placeholder="Your name..."
						onChange={this.handleAuthorChange} />
					Rate it between 1 and 5: <input type="number" 
						value={this.state.rating} min="1" max="5"
						onChange={this.handleRatingChange}/>
					<input type="submit" className="btn btn-positive" value="Add comment"/>
				</form>
			</div>
		);

	}

});


var CommentsView = React.createClass({
	render: function() {

		return (
			<div className="content-padded">
				<h4>Comments</h4>
				<CommentList data={this.props.data.comments}/>
				<CommentForm submitMethod={this.props.submitMethod} videoId={this.props.data.id}/>
			</div>
		);
	}

});


// ADDVIDEOVIEW
//-------------------------------------------------
var AddVideoView = React.createClass({
	handleSubmit() {
		var obj = {
			title: this.refs.title.value,
			link: this.refs.link.value,
			category: this.refs.category.value,
		};
		console.log(obj);
		this.props.submitMethod(obj);
	},

	render: function() {

		return (
			<div className="content-padded">
				<form>
					<input type="text" ref="title" placeholder="Title..."/>
					<input type="text" ref="link" placeholder="Youtube code..."/>
					<input type="text" ref="category" placeholder="Category..."/>
					<button className="btn btn-positive" onClick={this.handleSubmit}>Submit</button>
				</form>
			</div>
		);

	}
});


// HEADERCOMPONENT
//-------------------------------------------------
var Header = React.createClass({

	render: function(){
		return (
			<header className="bar bar-nav">
				<a href="#/" className={this.props.back ? "icon icon-left-nav pull-left" : ""}></a>
				<a href="#/" onClick={this.props.trash ? this.props.deleteMethod : ""} className={this.props.trash ? "icon icon-trash pull-right" : ""}></a>
				<h1 className="title">{this.props.text}</h1>
			</header>
		);
	}
});



// VIDEOVIEW
//-------------------------------------------------
var VideoView = React.createClass({
	render: function() {
		var source = "http://www.youtube.com/embed/" + this.props.data.link;
		return (
			<div>
				<iframe width="100%" height="400"
					src={source}
					frameborder="0" 
					allowfullscreen>
				</iframe>

				<CommentsView data={this.props.data} submitMethod={this.props.submitMethod}/>
			</div>
		);
	}
});



// TABLEVIEW
//-------------------------------------------------
var TableCellView = React.createClass({
	render: function() {
		return (
			<li className="table-view-cell media">
				<a className="push-right" href={"#/video/" + this.props.data.id}>
					<img className="media-object pull-left" width="74" height="42" src={this.props.data.thumb}/>
					<div className="media-body">
						{this.props.data.title}
						<p>{this.props.data.category}</p> 
					</div>
				</a>
			</li>
		);
	}
});


var TableView = React.createClass({

	render: function() {
		var rows = [];
		this.props.data.forEach(function(item){
			rows.push(<TableCellView data={item} key={item.id}/>);
		});

		return (
			<ul className="table-view">
				{rows}
			</ul>
		);
	}
});




// PAGES/CONTROLLERS
//-------------------------------------------------

var HomePage = React.createClass({
	getInitialState: function(){
		return {
			videos: []
		};
	},

	componentWillMount: function(){
		this.setState({
			videos: this.props.model.getVideos()
		});
	},

	render: function() {



		return (
			<div>
				<Header text="Instructional videos to make instructional videos"/>
				<div className="content">
					<p className="content-padded" style={{textAlign: 'center'}}>
						<a href="#/add/video"><button className="btn">Add video</button></a>
					</p>
					<TableView data={this.state.videos} />
					
				</div>
			</div>
			);
	}
});

var AddVideoPage = React.createClass({

	submitMethod: function(obj){

		var sendobj = 
		{	
			id: null, 
			title: obj.title, 
			link: obj.link, 
			thumb: "http://i3.ytimg.com/vi/"+obj.link+"/mqdefault.jpg", 
			category: obj.category, 
			comments: []
		};

		this.props.model.addVideo(sendobj);
		this.props.model.save();

		router.load('/');
		
	},

	render: function(){
		return(
			<div>
				<Header text="Add new video" back="true" />
				<div className="content">
					<AddVideoView submitMethod={this.submitMethod} />
				</div>
			</div>
		);
	}
});

var VideoPage = React.createClass({

	getInitialState: function(){
		return {
			videoObj: this.props.model.findVideoById(this.props.videoId)
		};
	},

	submitComment: function(id, commentObj) {
		console.log(commentObj)
		this.props.model.addComment(id, commentObj);
		this.props.model.save();

		//CALLBACK HÄR i framtiden
		/*this.props.model.findVideoById(this.props.videoId, function(data){
			this.setState({
				videoObj: data
			});
		}*/

		this.setState({
			videoObj: this.props.model.findVideoById(this.props.videoId)
		});
	},

	removeVideo: function(){
		this.props.model.removeVideo(this.props.videoId);
		this.props.model.save();
		router.load('/');
	},

	render: function(){
		return(
			<div>
				<Header 
					text={this.state.videoObj.title} 
					back="true" 
					trash="true" 
					id={this.state.videoObj.id}
					deleteMethod={this.removeVideo}
					/>

				<div className="content">
					<VideoView data={this.state.videoObj} submitMethod={this.submitComment} delete={this.removeVideo}/>
				</div>
			</div>
		);
	}
})

var NavLink = React.createClass({

	render: function(){
		return (
			<Link {...this.props} className="nav-link" activeClassName="active"/>
		);
	}
});


class App extends React.Component {
	render() {
		return (
			<div>
				<center>
					<div className="skele" id="skele">
						<NavLink to="/a/about">
							<img className="img-fluid img-skele" src="assets/skele.png"/>
						</NavLink>
					</div>
				</center>
				{/*<h1><center>Johan Thorell</center></h1>*/}
				<ul className="nav justify-content-center header-menu" id="navbar">
					<li className="nav-item">
						<NavLink to="/a/about">about</NavLink>
					</li> /
					<li className="nav-item">
						<NavLink to="/a/portfolio">portfolio</NavLink>
					</li> / 
					<li className="nav-item">
						<NavLink to="/a/blog">blog</NavLink>
					</li> / 
					<li className="nav-item">
						<NavLink to="/a/contact">contact</NavLink>
					</li>
				</ul>
				<center><small className="text-muted">Johan Thorell - jthorel@kth.se</small></center>
				<hr width="50%"/>
				
				{this.props.children}
				
			</div>
			
		);
	}

};

class AboutView extends React.Component {
	render() {
		return (
			<div>
				<center>
					<p><img className="img-johan" src="assets/johan.jpg"/></p>
					<p>
						<span className="boldhaas">Based in Stockholm</span>
					</p>
					<p>
						<span className="boldhaas">education</span><br/>
						Currently doing a master´s degree in Interactive Media Technology at the Royal Institute of Technology<br/>
						Bachelor´s degree in Media Technology from the Royal Institute of Technology
						
					</p>

					<p>
						<span className="boldhaas">misc</span><br/>
						Enjoy creating and tinkering. Physically and digitally. "Art" and functional.<br/>
						Studied film, played drums, and played guitar in a blues band.<br/>
						Enjoy climbing, snowboard, cross-country skiing, general outdoors.
					</p>
					<p>
						<span className="boldhaas">computer skills</span><br/>
						Unreal Engine, Unity3D, Python, C/C++/C#, HTML, JavaScript (React/Redux etc), SQL, Matlab, Pure Data, Excel (modeling, vba, etc.), Photoshop, Premiere, After Effects ...
					</p>

				</center>
			</div>
		);
	}
};



class PortfolioView extends React.Component {
	
	render() {
		return (
			<div className="masonry">
				{
					portfolio.getProjects().map(item => {
						return (<div className="item"><ProjectCard data={item} key={item.id}/></div>);
					})
				}
			</div>
		);
	}
};



class ProjectCard extends React.Component {	
	render() {
		return (			
			<div>
				<Link to={"/a/project/"+this.props.data.id} className="cardlink">
					<div className="new-card">
						<div className="img-hover">
							{this.props.data.thumb ? <img className="card-img-top img-fluid" src={"assets/"+this.props.data.thumb} alt={this.props.data.title}/>:""}
							<div className="hover-parent">
								<div className="desc">
									{this.props.data.shortdesc}
									<p className="tags">
										<small className="text-muted">
											{this.props.data.tags.map((tag,i) => {
												return (<span className="badge badge-danger" key={i}>{tag}</span>) })}
										</small>
									</p>
								</div>
							</div>
						</div>	
						<div className="card-block">
							<h4 className="card-title">{this.props.data.title}</h4>
						</div>
					</div>
				</Link>
			</div>
		);
	}
};



class SingleProjectView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: portfolio.findProjectById(this.props.params.id)
		};
	}

	goBack(e) {
		e.preventDefault();
		window.history.back();
	}


	
	render() {
		const project = this.state.project;
		return (
			<div>
			<h1 className="single-project">
				<a href="" onClick={this.goBack}>&lt;</a>&nbsp;
				 {project.title}
			</h1>
			<div className="single-proj-grid">
				<div className="single-proj-column">
					{
						project.videos ?
						project.videos.map((video, i) => {
							return <div key={i}>
										<video width="100%" autoPlay muted loop>
											<source src={"assets/"+video+".mp4"} type="video/mp4"/>
										</video>
									</div>
						}) : ""
					}

					{
						project.images ?
						project.images.map(function(image){
							return <div><p><img className="img-fluid" style={{maxWidth: '100%'}} src={"assets/"+image}/></p><br/></div>
						}) : ""
					}
				
					{
						project.embed ?
						project.embed.map(function(video){
							return <p><iframe src={video} width="100%" frameBorder="0" 
										webkitAllowFullscreen mozAllowFullscreen allowFullscreen/></p>
						}) : ""
					}
				</div>
				<div className="single-proj-column">
					<div className="tags">
						<small className="text-muted">
							{project.tags.map((tag,i) => {
								return (<span className="badge badge-danger" key={i}>{tag}</span>) })}
						</small>
					</div>
					<p>
						{project.desc}
					</p>
					{
						project.link ?
							<p><a href={project.link.url} target="_blank">{project.link.text}</a></p>
						: ""
					}
				</div>
			</div>
			</div>
		);
	}
};


class BlogView extends React.Component {
	render(){
		return(
			<div>
				Lorem ipsum 
			</div>
		);
	}
};

class ContactView extends React.Component {
	render(){
		return(
			<div>
				<center>
					<p>jthorel@kth.se</p>
					<p><a href="https://www.linkedin.com/in/johan-torell" target="_blank">linkedin</a></p>
					<p><a href="https://github.com/jthorel" target="_blank">jthorel @ github</a></p>
				</center>
			</div>
		);
	}
}


class Bridge extends React.Component {
	componentDidMount() {
		document.getElementById("skele").classList.add("skeleTransition");
	}

	render() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
	}
};


// ROUTER
//-------------------------------------------------
ReactDOM.render(
		(
			<Router history={HashHistory}>
				<Route path="/" component={App}>
					<Route path="/a" component={Bridge}>
						<Route path="/a/about" component={AboutView}/>
						<Route path="/a/portfolio" component={PortfolioView}/>
						<Route path="/a/project/:id" component={SingleProjectView}/>
						<Route path="/a/blog" component={BlogView}/>
						<Route path="/a/contact" component={ContactView}/>
					</Route>
				</Route>
				
			</Router>
		), document.getElementById('content')
);


/*
router.addRoute('', function(){
	ReactDOM.render(
	  	<HomePage model={videoModel} />, document.getElementById('content')
	);
});

router.addRoute('/', function(){
	ReactDOM.render(
	  	<HomePage model={videoModel} />, document.getElementById('content')
	);
});

router.addRoute('/video/:id', function(id){
	ReactDOM.render(
		<VideoPage model={videoModel} videoId={id} />, document.getElementById('content')
	);
});

router.addRoute('/add/video', function(){
	ReactDOM.render(
		<AddVideoPage model={videoModel} />, document.getElementById('content')
	);
})


// START THE APP
//-------------------------------------------------
router.start();
*/