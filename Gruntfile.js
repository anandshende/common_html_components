
module.exports = function (grunt) {
    var indexPath = `./${grunt.option('folder')}/index.css`;
    var destPath = `./${grunt.option('folder')}/index.css`;
    grunt.initConfig({
        autoprefixer: {
            dist: {
                src: indexPath,
                dest: destPath
            }
        },
        watch: {
            styles: {
                files: ['index.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};