          
  // angular module registration
  angular.module('hangxman', [])
	
  // retrieve initial dependencies on application run
  .run(function(engine) {
    engine.requestSystemResources();
  });
