          
  // angular module registration
  angular.module('hangxmen', [])
	
  // retrieve initial dependencies on application run
  .run(function(engine) {
    engine.requestSystemResources();
  });
