#!/usr/bin/env node
require('shelljs/global');
config.fatal = true;
config.silent = true;

var path = require('path');
var nunjucks = require('nunjucks');

/*
Nunjucks settings and custom filters
==========================================
*/
var env = nunjucks.configure(new nunjucks.FileSystemLoader('views'))

env.addFilter('thumbnail', function(image_path) {
	var path_ext = image_path.split("."),
		path = path_ext[0],
		pathParts = path.split("/"),
		partsTotal = pathParts.length,
		name = pathParts[partsTotal - 1]
		
	pathParts[partsTotal - 1] = ""
	return pathParts.join("/")+"/"+name+"."+path_ext[1];
});


/*
Main code
==========================================
*/
rm('-rf', 'build');
mkdir('build');

var a = ['src/assets/fonts', 'src/assets/images', 'src/assets/js'];
a.forEach(dir => cp('-r', dir, 'build'));

cp('-r', 'src/assets/styles/compiled', 'build/styles')

b = ls('-R', 'src/pages').filter(file => file.slice(-5) === '.html')

b.forEach(page => {
	mkdir('-p', path.join('build', path.dirname(page)));
	const str = cat(path.join('src/pages', page)).toString();
	const out = env.renderString(str, getContext(path.basename(page, '.html')));
	out.to(path.join('build', page));
});



/*
Helper functions
==========================================
*/
function getContext (pageName) {
  	const defaultContext = {
    	__DEV__: (typeof process.env.DEV === 'string') ? process.env.DEV.trim() === '1' : process.env.NODE_ENV !== 'production',
  	};

	const pagesContexts = {
		// "index":{
		// 	"software": require('./src/data/software.json'),
		// 	"3d": require('./src/data/3d.json')
		// }
	}

	return Object.assign({}, defaultContext, pagesContexts[pageName]);
}
