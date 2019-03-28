const Check = {
	id: function(id){
		return id !== "" && id.length === 24;
	},
	randomCount: function(count){
		return !isNaN(Number(count)) && Number(count) > 0 && Number(count) <= 5000;
	},
};

module.exports = Check;