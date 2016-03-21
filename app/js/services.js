/**
 * Created by miguelplazas on 19/03/16.
 */

var domain = 'http://localhost:8000';

app.factory('Category', function($resource) {

    var url = domain + '/api/categories/';

    var category = $resource(url + ':id', {
    	id: '@id'
    }, 
	{
        save: {
            method : 'POST',
            transformRequest: function(data, headers){
                headers = angular.extend({}, headers, {'Content-Type': 'application/json'});
                return angular.toJson(data); // this will go in the body request
            }
        },
		new: {
			method: 'GET',
			url: url + 'new.json'
		},
		delete: {
			method: 'DELETE',
			params: {
				id: '@id'
			}
		}
    });

    return category;

});