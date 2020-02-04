// images
import friendConnect from "./project-img/friendconnet.png";
import lyrica from "./project-img/lyrica.png";
import moviedb from "./project-img/moviedb.png";
import twitterLike from "./project-img/twitterLike.png";


const datas = [
	{
		title: "twitterLike",
		subTitle: "MERN Stack Application",
		image: twitterLike,
		icons: {
         github: '',
         link: ''
      },
      githubLink:"https://github.com/olufemi424/socialConnet",
      liveHostLink:"https://socialconnect-ad8d3.firebaseapp.com/",
		desc:
			"twitterLike is a twitter like clone application. Basic CRUD application with some notifications functionality, built purely with react front end and firebase cloud funtions. And also hosted on firebase.",
		tools: [
			"HTML",
			"XML",
			"CSS",
			"Material UI",
			"Javascript",
			"React",
			"React-Redux",
			"Firebase - Firestore"
		]
	},
	{
		title: "DevFConnect",
		subTitle: "MERN Stack Application",
		image: friendConnect,
      icons: {
         github:'',
         link:''
      },
      githubLink:"https://github.com/olufemi424/friendConnect",
      liveHostLink:"https://lit-fortress-87525.herokuapp.com/",
		desc:
			"Currently working on DevFConnect, which is a social media application,where developers can create an account, and connect with other developers. The idea of this app is to provide a platform where developers can make friends with other developers.",
		tools: [
			"HTML",
			"CSS",
			"SASS",
			"Javascript",
			"React",
			"React Redux",
			"Passport",
			"JWT Token",
			"MongoDb",
			"Mongoose"
		]
	},
	{
		title: "Moviedb",
		subTitle: "Moviedb API React App",
		image: moviedb,
      icons: {
         github:'',
         link:''
      },
      githubLink:"https://github.com/olufemi424/movie-database",
      liveHostLink:"https://dreamy-bohr-8faae8.netlify.com/",
		desc:
			"The idea of Moviedb app, is to create a platform where the app users can check recent movies or shows and also, see what is trending with regards to movies or shows. Users can see details about each movie/show and also search for their movie of choice. New features will be added such as movie thrillers and movie suggestions based on what movie you are checking its details.",
		tools: [
			"HTML",
			"CSS",
			"SASS",
			"Javascript",
			"React",
			"React Redux",
			"JSX",
			"React-Styled-Components"
		]
	},
	{
		title: "Lyrica lyrics App",
		subTitle: "",
		image: lyrica,
      icons: {
         github:'',
         link:''
      },
      githubLink:"https://github.com/olufemi424/lyricsApp",
      liveHostLink:"https://lyricsappfirebaseauth.herokuapp.com/login",
		desc:
			"Lyrics finder app with Firebase-Auth, React. This little project shows firebase login and pulling data from a third API.",
		tools: [
			"HTML",
			"CSS",
			"SASS",
			"Javascript",
			"React",
			"React Redux",
			"Firebase Auth",
			"Firestore",
			"React-Styled-Components"
		]
	}
];

export default datas;
