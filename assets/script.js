	
	var myLine = document.getElementById("line");
	//var myContainer = document.getElementById("container");

	
	for (var i = 0; i < 20; i++) {
		//var changeAngle = (360/i);
		var myLines = "";
		//myContainer.innerHTML += '<div class="patternUnit" style="transform: rotate(45deg);"></div>'
		//var changeColor = 255-(i/19)*255;
		//var changeTriColor = 255-(j/19)*255;
		// var myTri = `<div class="triangle-right" style="background-color:rgb(${changColor},0,0);"></div>`;
			//myLine.innerHTML += '<div class="triangle-right" style="background-color: rgb(${changingTriColor},0,${changingTriColor}; transform: rotate('+ (90 + (10*i)) +'deg);"></div>';
			for(var j=0; j<19; j++){
				var changeColor = (j/19)*255;
				var changeAngle = 90 + (10*j);
				myLines += `<div class="patternUnit" style="background-color: rgb(${255-changeColor},0,${changeColor}); transform: rotate(${changeAngle}deg);"></div>`;
			}
		
		// myLine.innerHTML += '<div class="patternUnit" style="background-color: rgb(${changingColor},0,${changingColor}; transform: rotate('+ (90 + (10*i)) +'deg);"></div>';
			var myCollection = `<div class="myCollection" style="transform: rotate(${i*180}deg);">${myLines}</div>`;
			myLine.innerHTML += myCollection;
	}


