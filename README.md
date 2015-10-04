# meteor-crypto-lib-typedarrays

Typed arrays component from [CryptoJS](https://code.google.com/p/crypto-js/).

Dependency
----------
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).

Install
-------

Inside your project folder run:
```
$ meteor add incocode:crypto-lib-typedarrays
```

Example
-------
Encode file using SHA256:
```js
function sha256Blob(blob) {

  return new Promise(function (resolve, reject) {

    var reader = new FileReader();

    reader.onloadend = function (evt) {
      if (evt.target.readyState == FileReader.DONE) {

        var wordArray = CryptoJS.lib.WordArray.create(evt.target.result);
        var hash = CryptoJS.SHA256(wordArray).toString(CryptoJS.enc.Hex);
        resolve(hash);
      }
    };

    reader.readAsArrayBuffer(blob);

  });

}
```
