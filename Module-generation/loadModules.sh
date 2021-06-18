 #!/bin/bash

# Supporting script

MODULEDIR="./module-site"
MODULES="./modules"
mkdir $MODULEDIR
cd $MODULEDIR
git clone https://github.com/MovingBlocks/ModuleSite.git
cd ModuleSite
rm -R modules
cd .. 
cd ..
cp -r $MODULES  ./module-site/ModuleSite