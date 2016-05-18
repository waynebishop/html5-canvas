var photoCanvas = document.querySelector('#photo');
var photoCtx = photoCanvas.getContext('2d');

// Get an image from Flickr
var image = new Image();

image.src = 'http://loremflickr.com/200/200';

image.onload = function() {

	// Image is ready to be manipulated / used

	photoCtx.drawImage( image, 0, 0 );

} 

Caman('#filters', 'img/cat.jpeg', function(){

	this.brightness(+5);
	this.sinCity();
	
	this.render();
});






