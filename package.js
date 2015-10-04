Package.describe({
  name: 'incocode:crypto-lib-typedarrays',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Typed arrays component for CryptoJS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/IncoCode/meteor-crypto-lib-typedarrays.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('ecmascript');

  api.use('jparker:crypto-core@0.1.0', ['client', 'server']);

  api.imply('jparker:crypto-core', ['client', 'server']);

  api.addFiles('lib/crypto-lib-typedarrays.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('crypto-lib-typedarrays');
  api.addFiles('tests/crypto-lib-typedarrays-tests.js');
});
