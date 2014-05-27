module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/header.js': [
            'js/vendor/modernizr-2.6.2-respond-1.1.0.min.js',
            'js/vendor/purl.js',
            'js/vendor/phpjs/functions/datetime/strtotime.js',
            'js/vendor/phpjs/functions/datetime/date.js',
            'js/vendor/phpjs/functions/datetime/gmdate.js'],
          'js/footer.js': [
            'js/vendor/jquery-1.11.0.min.js',
            'js/vendor/ion.sound/ion.sound.min.js',
            //'js/vendor/bootstrap.min.js',
            'js/main.js',
          ]
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/styles.css': [
            'css/bootstrap.min.css',
            'css/bootstrap-theme.min.css',
            'css/main.css'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: 'js/main.js',
        tasks: ['uglify'],
        options: {
          interrupt: false
        }
      },
      css: {
        files: 'css/main.css',
        tasks: ['cssmin'],
        options: {
          interrupt: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify', 'cssmin']);
}