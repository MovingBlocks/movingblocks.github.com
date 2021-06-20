import os
import json
import requests
from github import Github

IndexDir="./meta-data/"
os.mkdir(IndexDir)

accessToken=os.environ.get('GIT_TOKEN')
g = Github(accessToken)

user= g.get_user('Terasology')
repo = user.get_repo("Index")
allModules= repo.get_contents("/distros/omega/gradle.properties")
getModules=allModules.decoded_content.decode()
filterData= getModules.split("\n",1)[1]
filterData= filterData.rsplit("\n",5)[0]
word1='extraModules='
word2='\n'
wordreplace=filterData.replace(word1, "")
wordreplace=wordreplace.replace(word2,"") 
Modules=wordreplace.split(",")

## Collect modules 
for module in range(len(Modules)):
    if(module<len(Modules)):
        repository=user.get_repo(Modules[module])

        #Fetch module Information
        try:
            moduleContent=repository.get_contents("module.txt")
            getModuleData=moduleContent.decoded_content.decode()
            parseModuleData=json.loads(getModuleData)
            ModuleName=parseModuleData['id']
            ModuleDir=os.mkdir(IndexDir+ModuleName)
            ModuleDirSrc=IndexDir+ModuleName
            ModuleFile= open(ModuleDirSrc+"/module.txt", "a")
            ModuleFile.write(getModuleData)
            ModuleFile.close()
        except:
            print("Repository is not a Module "+ModuleName)

        #Fetch Readme file
        try:
            readmeContent=repository.get_contents("README.md")
            getReadmeData=readmeContent.decoded_content.decode()
            ModuleReadmeFile= open(ModuleDirSrc+"/README.md", "a")
            ModuleReadmeFile.write(getReadmeData)
            ModuleReadmeFile.close()
        except:
            print("No Readme Found "+ModuleName)

        #Fetch banner image
        bannerImage="https://raw.githubusercontent.com/Terasology/"+ModuleName+"/develop/docs/_media/banner.png"
        response = requests.get(bannerImage)
        if(response.ok):
            imageFile = open(ModuleDirSrc+"/cover.png", "wb")
            imageFile.write(response.content)
            imageFile.close()
        else:
            print("No banner found on "+ ModuleName+",resolving with default banner")
            sourceImage=open("defaultBanner.png", "rb+")
            readSourceImage=sourceImage.read()
            defaultImageFile = open(ModuleDirSrc+"/cover.png", "wb+")
            defaultImageFile.write(readSourceImage)
            defaultImageFile.close()