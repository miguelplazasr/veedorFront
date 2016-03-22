/**
 * Created by miguelplazas on 21/03/16.
 */

app.controller('CategoryCtrl',
    function ($scope, $mdDialog, $mdMedia, $location, $mdToast, Category) {

        $scope.title = 'Categorias';

        $scope.categories = Category.query();

        function updateCategories() {
            Category.query(function (data) {
                $scope.categories = data;
            });
        };

        $scope.rsCategory = {};

        $scope.goToCategory = function (rowCategory, ev) {

            $scope.category = Category.get({id: rowCategory});

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tpl/categories_show.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    category: $scope.category
                }
            });

        }



        $scope.showAdd = function (ev) {

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tpl/categories_new.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    category: null
                }
            });

        };

        function DialogController($scope, $mdDialog, category) {
            $scope.category = category;
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
            $scope.saveCategory = function (rsCategory) {
                var newRecord = new Category(rsCategory);
                newRecord.$save(function (resp, headers) {
                    console.log(rsCategory);
                    updateCategories();
                    $mdDialog.hide();
                })
            };
        }


        $scope.deleteCategory = function (id) {

            for (var i = 0, len = $scope.categories.length; i < len; i++) {
                if ($scope.categories[i].id === id) {

                    Category.delete({id: id});
                    $scope.categories.splice(i, 1);
                    $mdToast.show($mdToast.simple().textContent('Category was deleted!'));
                    break;
                }
            }
        }

        $scope.fields = Category.new();


    }
)