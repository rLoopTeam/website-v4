# portfolio-v2
Version 1 of the portfolio uses Django to manage assets and serve the site. Version 2 (this repo) is static and based on NodeJS. Doesn't rely on any Javascript.

Features:

* Static HTML

* Folder watch/auto build when changes are detected

* Nunjucks for templating

* LESS for CSS

* Minimal Javascript

# Instructions
`npm install`

`npm run dev`

Optional:

Run generate_thumbs.py to generate thumbnails automatically

Requires PIL library

`python generate_thumbs.py`
