/**
 * Created by miguelplazas on 19/03/16.
 */
app.controller('MainCtrl',[
	'$scope',
	'$mdBottomSheet',
	'$mdSidenav',
	'$mdDialog',
	function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog){		
		
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
		
		$scope.menu = [
			{
				link: '/#/category',
				title: 'Categories',
				icon: 'dashboard'
			}
		];
	}
]);

app.controller('CategoryCtrl',
    [
        '$scope',
		'$mdDialog',
		'$mdMedia',
		'$location',
		'Category',
        function ($scope, mdDialog, $mdMedia, $location, Category) {
			
			$scope.title = 'Categorias';
			
			$scope.query = {
				order: name,
				limit: 5,
				page: 1
			};
			$scope.categories = Category.query();
						
			$scope.rsCategory = {};
			
			$scope.saveCategory = function(rsCategory){
				var newRecord = new Category(rsCategory);
				
				newRecord.$save(function(resp, headers){
					$location.path('/category')
					console.log('Record saved!');
				})
			};
			
			$scope.deleteCategory = function(id){
				
				for (var i = 0, len = $scope.categories.length; i < len; i++) {
				                if ($scope.categories[i].id === id) {

				                    Category.delete({id: id}) ;
				                    $scope.categories.splice(i, 1);
				                    break;
				                }
				            }
				
				console.log('Category it\'s deleted.');
			}
			
			$scope.fields = Category.new();
						

        }
    ])