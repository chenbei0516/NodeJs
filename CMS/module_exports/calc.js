module.exports = {
	sum: function(){
		var results = 0;
		for (var i in arguments){
			if(!isNaN(arguments[i])){
				results += parseFloat(arguments[i]);
			}
		}
		return results;
	}
};