module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
    // Configuration
    const files = [{
        src: 'index.js',
        dest: 'dist/excel.js'
    }];
    const minifiedFiles = [{
        src: 'index.js',
        dest: 'dist/excel.min.js'
    }];
    grunt.initConfig({
        browserify: {
            dev: {
                files,
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugins: [
                    ],
                    watch: true,
                    keepAlive: true,
                }
            },
            minify: {
                files: minifiedFiles,
                options: {
                    browserifyOptions: { debug: false },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugin: [
                        ["minifyify", { map: false }]
                    ],
                    watch: true,
                    keepAlive: true,
                }
            }
        },
        clean: {
            built: ['dist']
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');

    // Register tasks
    grunt.registerTask("build:dev", ['browserify:dev']);
    grunt.registerTask("build:minify", ['browserify:minify']);
    grunt.registerTask('clean:all', ['clean:built']);
};