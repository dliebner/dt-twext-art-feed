#!/bin/bash

terser ./js/main.js --compress -m reserved=[\
'Portal',\
] -o ./zip/js/main.min.js

npx tailwindcss -i ./css/main.css -o ./zip/css/main-out.css
