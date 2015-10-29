module.exports = function (grunt) {
    // package.jsonを読み込み、pkg変数にキャッシュ
    var pkg = grunt.file.readJSON('package.json');
    // Gruntの設定
    grunt.initConfig({
        uglify: { // タスク名
            dist: { // ターゲット名
                // ファイルの出力/入力設定
                files: {
                    // 圧縮後のファイル: 圧縮前のファイル
                    'jquery.higher.min.js': 'jquery.higher.js'
                }
            }
        },
        watch: { // タスク名
            js: { // ターゲット名
                // 監視したいファイル
                files: ['jquery.higher.js'],
                // 変更を感知した時に実行するタスク
                tasks: ['uglify']
                }
            }
        }
    }

    // 実行するタスクのGruntプラグインの読み込み
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // デフォルトタスクの登録（Gruntコマンドをそのまま叩いたときに実行される）
    grunt.registerTask('default', ['uglify']);
};
