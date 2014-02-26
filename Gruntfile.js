module.exports = function(grunt) {
	grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      compile: {
        files: {
          'css/styles.css': 'css/src/styles.sass'
        }
      }
    },

    watch: {
      styles: {
        files: ['css/src/*.sass'],
        tasks: ['sass']
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true
        }
      }
    },

    concurrent: {
      dev: {
        options: { logConcurrentOutput: true },
        tasks: ['connect', 'sass', 'watch']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', 'concurrent');
};
