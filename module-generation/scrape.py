import os
import json
import requests
from github import Github

scrapeDir = "./scrape-data/"
os.mkdir(scrapeDir)

accessToken = os.environ.get('GIT_TOKEN')
g = Github(accessToken)

user = g.get_user('Terasology')
repo = user.get_repo("Index")
content = repo.get_contents("/distros/omega/gradle.properties").decoded_content.decode()
for line in content.split():
    if line.startswith('extraModules='):
        modules = line[13:].split(",")

# Collect modules
for module in modules:
    repository = user.get_repo(module)

    # Fetch module information
    try:
        moduleContent = repository.get_contents("module.txt"). decoded_content.decode()
        moduleData = json.loads(moduleContent)
        moduleName = moduleData['id']
        moduleDir = os.mkdir(scrapeDir+moduleName)
        moduleDirSrc = scrapeDir+moduleName
        with open(moduleDirSrc+"/module.txt", mode="a") as moduleFile:
            moduleFile.write(moduleContent)
    except Exception as e:
        print("Repository is not a Module "+moduleName+":"+ e)

    # Fetch readme file
    try:
        readmeContent = repository.get_contents("README.md").decoded_content.decode()
        with open(moduleDirSrc+"/README.md", mode="a") as moduleReadmeFile:
            moduleReadmeFile.write(readmeContent)
    except Exception as e:
        print("Couldn't fetch README.md"+moduleName+": "+e)
        with open(moduleDirSrc+"/README.md", mode="a") as moduleDefaultReadme:
            moduleDefaultReadme.write(
                "This is a module for Terasology. It is currently lacking a README.md for documenting its purpose, usage, and contribution to Terasology.")

    # Fetch banner image
    bannerImage = "https://raw.githubusercontent.com/Terasology/"+moduleName+"/develop/docs/_media/banner.png"
    response = requests.get(bannerImage)
    if(response.ok):
        with open(moduleDirSrc+"/cover.png", mode="wb") as imageFile:
            imageFile.write(response.content)
    else:
        print("Couldn't fetch cover image on " + moduleName +",error code:"+ response.status_code + ",resolving with default cover image")
        with open("./module-generation/defaultBanner.png", mode="rb+") as sourceImage:
            readSourceImage = sourceImage.read()
            with open(moduleDirSrc+"/cover.png", mode="wb") as defaultImageFile:
                defaultImageFile.write(readSourceImage)
