function openModal(size, template_url) {
            $uibModal.open({
                templateUrl: template_url,
                controller: ['$uibModalInstance', function($uibModalInstance) {
                    this.close = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                }],
                controllerAs: 'modalCntrl',
                size: size
            });
        }
        /*
         * Create my modal information
         */
        $scope.openMyModal = function(size) {
            openModal(size, '/html/modal/myModal.html');
        };
/* TEST*/
describe('Modal Test', function() {
    beforeEach(module('myProfileApp'));
    var modalCtrl, scope, modalInstance;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        modalInstance = jasmine.createSpyObj('modalInstance', ['close']);
        modalCtrl = $controller('HomeController', {
            $scope: scope,
            $uibModalInstance: modalInstance,
        });
    }));
    it('Verify open and closing the modal', function() {
        scope.openEhrModal('lg');
        expect(uibModalInstance.close).toBeDefined();
        modalInstance.close();
        expect(modalInstance.close).toHaveBeenCalled();
    });
});