const compilerOptions = require('./tsconfig.json').compilerOptions; 
 
module.exports = function(wallaby) { 
  // var path = require('path'); 
 
  // process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'src'); 
 
  return { 
    debug: true, 
 
    files: [ 
      { pattern: 'tsconfig.json', instrument: false }, 
      { pattern: 'src/**/*.ts' }, 
      { pattern: 'spec/testConfig/**/*.ts' }, 
      { pattern: '!spec/unit/**/*spec.ts' } 
      // { pattern: '!spec/**/*.spec.ts' } 
    ], 
 
    tests: ['spec/unit/**/*spec.ts'], 
 
    compilers: { 
      '**/*.+(t|j)s': wallaby.compilers.typeScript(compilerOptions) 
    }, 
 
    testFramework: 'mocha', 
 
    env: { 
      type: 'node', 
      runner: 'node' 
    }, 
 
    // setup: function(w) { 
    //   var mocha = w.testFramework; 
    //   mocha.timeout(600000); 
    // } 
 
    // compilers: { 
    //   '**/*.ts': wallaby.compilers.typeScript({ 
    //     module: 'commonjs' 
    //   }) 
    // } 
  }; 
};