var khronos = new Object();

khronos.leprops = new Object();
khronos.ledata = new Array();

khronos.setLifespan = function(lifespan) {
	if (typeof lifespan != "number") {
		throw "The time can only be measured in numbers here. Don't try to be smarter than me… now, go fix that horror";
	}
	khronos.leprops.lifespan = lifespan;
}

khronos.add = function(daObject, identifier, force, specialLife){
	
	if(typeof force != "boolean") {
		force = false;
	}
	
	if (typeof khronos.ledata[identifier] != "undefined" && force) {
		clearTimeout(khronos.ledata[identifier].timeoutID);
		delete khronos.ledata[identifier];
	} else if (typeof khronos.ledata[identifier] != "undefined") {
		return false;
	}
	
	if (typeof specialLife == "undefined") {
		specialLife = khronos.leprops.lifespan;
	}
	var toid = 	setTimeout( function () {
						delete khronos.ledata[identifier];
				}, specialLife*1000);
		
	var grain = {
		"data" : daObject,
		"timeoutID" : toid
	}
	
	khronos.ledata[identifier] = grain;
	
	return true;
}

khronos.get = function (identifier) {
	 if (typeof khronos.ledata[identifier] != "undefined") {
	 	return khronos.ledata[identifier];
	 }
	 return false;
}

khronos.delete = function (identifier) {
	if (typeof khronos.ledata[identifier] != "undefined") {
		clearTimeout(khronos.ledata[identifier].timeoutID);
		delete khronos.ledata[identifier];
	}
}

module.exports = khronos;