import os
import json
import requests
from github import Github

IndexDir="./meta-data/"
os.mkdir(IndexDir)

accessToken=os.environ.get('GIT_CREDS')
g = Github(accessToken)


user= g.get_user('Terasology')
repo = user.get_repo("Index")

contents = repo.get_contents("/distros/omega/gradle.properties")
x=contents.decoded_content.decode()

# Filter Modules and Convert it to array
f = open('Modules.txt', 'w')
f.write(x)
f.close()
f = open("Modules.txt", "r")
lines=f.readlines()
line=lines[1]
word1='extraModules='
word2='\n'
wordreplace=line.replace(word1, "")
wordreplace=wordreplace.replace(word2,"")
Modules=wordreplace.split(",")


# Collect Modules
for i in range(0,len(Modules)):
   if(i<len(Modules)):
      repository= user.get_repo(Modules[i])
      con=repository.get_contents("")
      for content_file in con:
          if(content_file.path=="module.txt"):
              getModuleCon=repository.get_contents("module.txt")
              getData=getModuleCon.decoded_content.decode()
              parseData=json.loads(getData)
              ModuleName=parseData['id']
              ModuleDir=os.mkdir(IndexDir+ModuleName)
              ModuleDirSrc=IndexDir+ModuleName

              # write module.txt in module directory

              ModuleFile= open(ModuleDirSrc+"/module.txt", "a")
              ModuleFile.write(getData)
              ModuleFile.close()

              # search for readme files
              readmeFound=0
              for Readme in con:
                  if(Readme.path=="README.md" or Readme.path=="README.MD" or Readme.path=="README.markdown"):
                      print("Readme Found")
                      readmeFound+=1
                      ModuleReadmeCon=repository.get_contents(Readme.path)
                      getReadmeData=ModuleReadmeCon.decoded_content.decode()
                      ModuleReadmeFile= open(ModuleDirSrc+"/README.md", "a")
                      ModuleReadmeFile.write(getReadmeData)
                      ModuleReadmeFile.close()
                   
              if(readmeFound==0):
                  print("No Readme found")
              
              bannerFound=0
              for banner in con:
                  if(banner.type=="dir"):
                      bannerCon=con.extend(repository.get_contents(banner.path))
                  else:
                      if(banner.path=="docs/_media/banner.png" or banner.path=="docs/_media/banner.jpg"):
                          bannerFound+=1
                          bannerImage="https://raw.githubusercontent.com/Terasology/"+ModuleName+"/develop/"+banner.path
                          response = requests.get(bannerImage)
                          imageFile = open(ModuleDirSrc+"/logo.jpg", "wb")
                          imageFile.write(response.content)
                          imageFile.close()

              if(bannerFound==0):
                  print("Resloving with default image")
                  defaultImage="https://avatars.githubusercontent.com/u/4554375?s=200&v=4"
                  response = requests.get(defaultImage)
                  defaultImageFile = open(ModuleDirSrc+"/logo.jpg", "wb")
                  defaultImageFile.write(response.content)
                  defaultImageFile.close()
                  

                      

                          
                        
                          

                     

                     
                          
            
              

                  
                   

                      


              

          
       
    




    


