
function main(n) {
	var i = "1";
	var espacio = " ";
	var hastag = "#";
    for(; i <= n; i++){
        console.log(espacio.repeat(n-i) + hastag.repeat(i));
    };   
}


/*function main(n) {
   for(var i =0;i < n; i++){
       var resultado="";
       for(var j =0; j < n; j++){
           if(n -i - 2 < j){
               resultado += "#";
           }else{
               resultado += " ";
           }
       }
       console.log(resultado);
   }
}*/

function main(time) {
    var horas = time.split(':');
    var hrs = Number(horas[0]);
    var min = horas[1];
    var sec = horas[2].substr(0,2);
    var meridiano = horas[2].substr(2);

    if (meridiano.toLowerCase() === 'pm') {
    	hrs += 12;
    }
    else if (hrs < 10) {
    	hrs = '0' + hrs;
    }
    else if(meridiano.toLowerCase() === 'am'){
        if(hrs === 12){
            hrs = 0;
        }
    }
    console.log([hrs,min,sec].join(':'));
}
