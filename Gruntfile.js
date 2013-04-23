module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      testModels: {
        src: 'src/*.js',
        options: {
          specs: 'spec/*Spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

};