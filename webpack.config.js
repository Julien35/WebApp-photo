var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .cleanupOutputBeforeBuild()

    .autoProvidejQuery()

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()
    // parameters are not mandatory, only if webpack build is slow with bootstrap (http://symfony.com/doc/current/frontend/encore/bootstrap.html)
    // .enableSassLoader(function(sassOptions) {}, {
    //     resolveUrlLoader: false,
    // })

    .enableSourceMaps(!Encore.isProduction())

    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .enableVueLoader()

    // uncomment to define the assets of the project
    .addEntry('index',
        [
            './assets/vuejs/main.js',
            './assets/scss/index.scss'
        ])

    // .addEntry('logo', './assets/images/logo-ludo.jpg')

    // this creates a 'vendor.js' file with jquery and the bootstrap JS module
    // these modules will *not* be included in page1.js or page2.js anymore
    .createSharedEntry('vendors', [
        'jquery',
        'popper.js',
        'bootstrap',
        // '@fortawesome/fontawesome',
        // '@fortawesome/vue-fontawesome',
        // '@fortawesome/fontawesome-free-brands',
        // '@fortawesome/fontawesome-free-solid',
        // '@fortawesome/fontawesome-free-webfonts',

        'bootstrap/scss/bootstrap.scss',
        '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
        '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
        '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
        '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css',
    ])
;

module.exports = Encore.getWebpackConfig();