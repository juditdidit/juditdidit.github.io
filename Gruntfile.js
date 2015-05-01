module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
        },
        files: [{
          expand: true,
          cwd: 'enervee/assets/',
          src: 'css-*.less',
          ext: '.css',
          dest: 'enervee/assets/'
        },{
          expand: true,
          cwd: 'energizect/assets/',
          src: 'css-*.less',
          ext: '.css',
          dest: 'energizect/assets/'
        },
        {
          expand: true,
          cwd: 'pge/assets/',
          src: 'css-*.less',
          ext: '.css',
          dest: 'pge/assets/'
        }]
      }
    },

    watch: {
      files: '**/*.less',
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);
};