#quick start:
# express --view ejs --css sass --git
# npm install

default:
	./refresh.sh

#build: compile_all

#compile_babel:
#	-babel --plugins transform-react-jsx src/app.jsx > src/app.js

#compile_sass:
#	-sass style/style.scss > style/style.css

#compile_all: compile_babel compile_sass

view:
	google-chrome index.html

push:
	git add *
	echo -n "Message: "
	read msg; \
	echo "git commit -am" $$msg; \
	git commit -am "$$msg";
	git push origin master

update_all: update push



