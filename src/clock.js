javascript:(
	function(){
		if(true){
			var now=new Date();
			alert(
				(1900+now.getYear())+'/'
				+(now.getMonth()+1)+'/'
				+now.getDate()+' '
				+now.getHours()+':'
				+now.getMinutes()+':'
				+now.getSeconds()
			);
		}
	}
)();
