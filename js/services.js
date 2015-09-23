app.factory('AuthId', function() {
	var authId = {};
	authId.uid = null;
	authId.set = function (gottenId) {
		authId.uid = gottenId;
	}
	return authId;
})