#!/bin/sh

if [ "$1" = "" ]; then
	echo 'commit message is not set'
	exit 1
fi

git add *
git commit -m \""$1"\" 
git push