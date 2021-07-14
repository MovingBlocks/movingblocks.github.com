#!/bin/bash

# Supporting script
MODULEDIR="./module-site"
MODULES="./modules"
mkdir $MODULEDIR
git clone https://github.com/MovingBlocks/ModuleSite.git $MODULEDIR/ModuleSite
pushd $MODULEDIR/ModuleSite
rm -R modules
popd
cp -r $MODULES $MODULEDIR/ModuleSite
cd $MODULEDIR/ModuleSite
git config --global user.email "example@gmail.com"
git config --global user.name "userName"
git checkout -b module_gen
git add .
git commit -m "chore: update module information"
git push https://${GIT_CREDS}@github.com/MovingBlocks/ModuleSite.git module_gen 
curl -i -H "Authorization: token $GIT_CREDS" -X POST "https://api.github.com/repos/MovingBlocks/ModuleSite/pulls" -d '{ "title": "chore: automated update of module information",
 "base": "master",
 "head": "module_gen",
 "body": "Module information collected and generated using Jenkins pipeline"}'
