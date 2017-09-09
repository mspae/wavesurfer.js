# wavesurfer-js.org

## How to launch locally

Install Jekyll:

```
gem install jekyll
```

Build & launch a dev server:

```
jekyll serve
```

Go to http://127.0.0.1:4000/


## Setup frontend assets build pipeline

(Only required if you want to customise css/js)

```
npm install -g gulp
npm install
```

```
# minify css/js and builds your app into dist directory
gulp
# compiles and watch sass, start browser-sync, autoprefixer, concenates js
gulp serve
```
