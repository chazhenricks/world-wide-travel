module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js:{
        //for concat - sources need to be in an array. Can use *.js to grab all the files that end in .js in the javascripts folder
        src:'../app/**/*.js',
        //dest is where that newly concatinated file will go
        dest: '../build/app.js'
        }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": true}
      },
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/styles.css' : '../sass/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint','watch']);
};

