app.filter('to_trusted', ['$sce', function($sce){
	console.log("foo")
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);