
function gezogenekarten(){

var i = 0;

var beedingung = 1;


while (beedingung = 1){


	switch (karte[0]){

		case i: 
			document.all.bildfeld2.src = bild.src;
			beedingung = 2;
			i = 0;
			break;

		default:
			beedingung = 1;



}

}

}



function gezogenekarten(){
var bild = new Image();

karte[0] = getRandom(1,52);
	
bild.src = "bilder/"+karte[0]+".jpg";

var i = 0;

var beedingung = 1;
var n = karte[0];

while (beedingung = 1){


	if (n = i){ 
			document.all.bildfeld2.src = bild.src;
			beedingung = 2;
			i = 0;
	}else{


		beedingung = 1;
		i = i + 1;
	}



}

}

}
