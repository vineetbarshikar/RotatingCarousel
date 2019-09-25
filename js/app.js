const style = require('../css/style.css');
const Carousel = require('../lib/carousel');

const thumbnails = [
	"https://i.ibb.co/d41zXxL/loveit.png",
	"https://i.ibb.co/gWsKN7x/nailedit.png",
	"https://i.ibb.co/HY7yXx5/welcome.png",
	"https://i.ibb.co/xspCXrp/lol.png",
	"https://i.ibb.co/48V3TB0/face.png",
];
const c = new Carousel("#carousel", thumbnails);