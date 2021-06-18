import os
import json



DIR="./meta-data/"
DST="./modules/"

os.mkdir(DST)

for folders in  os.listdir(DIR):
    moduleFile=DIR+folders+"/module.txt"
    if(os.path.isfile(moduleFile)):
        getModuledata = open(moduleFile,"r")
        readModuleData=getModuledata.read()
        parseData=json.loads(readModuleData)
        
    
        moduleName=parseData['id']
        moduleDescription=parseData['description']
        
       
        

        if "isGameplay" in parseData:
            gameplay=parseData['isGameplay']
        else:
            gameplay=False

        if "isServerSideOnly" in parseData:
            serverside=parseData['isServerSideOnly']
        else:
            serverside=False

        if "isWorld" in parseData:
            world=parseData['isWorld']
        else:
            world=False

        if "isAugmentation" in parseData:
            augment=parseData['isAugmentation']
        else:
            augment=False
        
        if "isLibrary" in parseData:
            library=parseData['isLibrary']
        else:
            library=False
        if "isAsset" in parseData:
            asset=parseData['isAsset']
        else:
            asset=False

        if "isSpecific" in parseData:
            specific=parseData['isSpecific']
        else:
            specific=False


        moduleLogo="./logo.jpg"
        moduleReadme=DIR+folders+"/README.md"

        os.mkdir(DST+moduleName)
        IndexMd=open(DST+moduleName+"/index.md","a+")
        IndexMd.write('---\n')
        IndexMd.write('posttype: module \n')
        IndexMd.write('title: '+moduleName+'\n')
        IndexMd.write('description: '+moduleDescription+'\n')

        if(os.path.isfile(moduleFile)):
            IndexMd.write('cover: '+moduleLogo+'\n')
        
        Tags=[]
        if(serverside):
            Tags.append("Server")
        if (gameplay):
            Tags.append("Gameplay")
        if (world):
            Tags.append("World")
        if (augment):
            Tags.append("Augment")
        if (library):
            Tags.append("Library")
        if (asset):
            Tags.append("Asset")
        if (specific):
            Tags.append("Specific")
        
        IndexMd.write("tags: "+"["+','.join(f'"{w}"' for w in Tags)+"]\n")
        
        IndexMd.write('---\n')

        if(os.path.isfile(moduleReadme)):
            readmedata=open(moduleReadme,"r")
            IndexMd.write(readmedata.read())
        else:
            IndexMd.write("No info available")





