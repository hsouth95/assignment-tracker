var chrome = typeof chrome !== "undefined" ? chrome : {};

var chromeApi = typeof chromeApi !== "undefined" ? chromeApi : {};

/**
 * Retrieves all of the assignments created
 * @param {function(data)} callback - Function to call on success
 */
chromeApi.getAssignments = function(callback){
	chrome.storage.sync.get("assignments", function(data) {
		callback(data);
	});
}

/**
 * Adds an assignment into storage
 * @param {Object} assignment - The assignment to add
 * @param {function(data)} callback - Function to call on success
 */
chromeApi.addAssignments = function(assignment, callback) {
	var assignments = chromeApi.getAssignments(function(data){
		if (data.items) {
			var appendedData = data.items;
			appendedData.push(assignment);
			data.items = appendedData;
		} else {
			data.items = [assignment];
		}

		chrome.storage.sync.set({"assignments": data}, function(data){
			callback(data);
		});
	});
}

if(typeof module !== "undefined"){
	module.exports = chromeApi;	
}