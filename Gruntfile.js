module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-bower-task');
	
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: 'app/lib',
					layout: 'byComponent',
					install: true,
					verbos: true,
					cleanBowerDir: true
				}
			}
		}
		
	});
};

// loadNpmTasks
grunt.loadNpmTasks('grunt-bower-task');