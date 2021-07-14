import os
import json

scrapeDataDir = "./scrape-data/"
moduleDst = "./modules/"
os.mkdir(moduleDst)

for moduleDir in os.listdir(scrapeDataDir):
    moduleFile = scrapeDataDir+moduleDir+"/module.txt"
    with open(moduleFile, mode="r") as moduleMetadataFile:
        moduleMetadata = moduleMetadataFile.read()
        module = json.loads(moduleMetadata)

    # Fetch module information and write on index.md file
    try:
        moduleName = module['id']
        moduleDescription = module['description']
        os.mkdir(moduleDst+moduleName)
        with open(moduleDst+moduleName+"/index.md", mode="a+") as indexMd:
            indexMd.write('---\n')
            indexMd.write('posttype: "module" \n')
            indexMd.write('title: '+moduleName+'\n')
            indexMd.write('description: "'+moduleDescription+'"\n')

            # get module cover image, write on index.md file and copy to paticular module folder
            moduleLogo = scrapeDataDir+moduleDir+"/cover.png"
            indexMd.write('cover: "./cover.png"'+'\n')
            with open(moduleLogo, mode="rb") as sourceImage:
                readSourceImage = sourceImage.read()
                with open(moduleDst+moduleName+"/cover.png", mode="wb") as imageFile:
                    imageFile.write(readSourceImage)

            # collect tags and append to index.md
            Tags = []
            if "isGameplay" in module:
                if (module['isGameplay']):
                    Tags.append("Gameplay")

            if "isServerSideOnly" in module:
                if(module['isServerSideOnly']):
                    Tags.append("Server")

            if "isWorld" in module:
                if (module['isWorld']):
                    Tags.append("World")

            if "isAugmentation" in module:
                if (module['isAugmentation']):
                    Tags.append("Augment")

            if "isLibrary" in module:
                if(module['isLibrary']):
                    Tags.append("Library")

            if "isAsset" in module:
                if(module['isAsset']):
                    Tags.append("Asset")

            if "isSpecific" in module:
                if(module['isSpecific']):
                    Tags.append("Specific")

            indexMd.write("tags: "+"["+','.join(f'"{w}"' for w in Tags)+"]\n")
            indexMd.write('---\n')

            # append readme information to module
            moduleReadme = scrapeDataDir+moduleDir+"/README.md"
            with open(moduleReadme, mode="r") as readmeData:
                indexMd.write(readmeData.read())
    except Exception as e:
        print(e)
