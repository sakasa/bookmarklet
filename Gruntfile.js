module.exports = function (grunt) {
 
  grunt.registerTask('hello', 'description here', function () {
    grunt.log.writeln('Hello Grunt !!');
  });
 
  grunt.registerTask('default', [ 'hello' ]);
 
};
