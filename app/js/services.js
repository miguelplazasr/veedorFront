/**
 * Created by miguelplazas on 19/03/16.
 */

var domain = 'http://localhost:8000';

app.factory('Category', function($resource) {

    var url = domain + '/api/category:id';

    var category = $resource(url, {}, {});

    return category;

});