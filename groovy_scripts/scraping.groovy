import groovy.json.JsonSlurper

moduleFile = new File("./module.txt")
indexDir = "../../" // Needs to be changed according to workspace setting

if(moduleFile.exists()) {
	moduleJson = new JsonSlurper().parseText(moduleFile.text)
	moduleName = moduleJson.get("id")
	println "Scraping data from " + moduleName

	moduleDir = new File(indexDir + moduleName)
	println "Creating module directory"
	moduleDir.mkdir()

	moduleSrc = moduleFile
	moduleDst = new File(moduleDir.toString() + "/module.txt")
	moduleDst << moduleSrc.text
	println "Fetched module data"

	println "Searching for README file..."
	readmeFind = new FileNameFinder().getFileNames('./', '**.md **.MD **.markdown **.MARKDOWN')
	if(readmeFind) {
		readmeRoute = "./" + readmeFind[0].split("/").last()
		readmeSrc = new File(readmeRoute)
		readmeDst = new File(moduleDir.toString() + "/README.md")
		readmeDst << readmeSrc.text		
		println "Fetched README data"
	} else {
		println "README file not found, skipping the current step."
	}

	println "Searching for logo image..."
	logoSrc = new File("./logo.png")
	if(logoSrc.exists()) {
		logoDst = new File(moduleDir.toString() + "/logo.png")
		logoDst << logoSrc.bytes
		println "Fetched logo image"
	} else {
		println "Logo image not found, skipping the current step."	
	}

	println "Searching for cover image..."
	logoSrc = new File("./cover.png")
	if(logoSrc.exists()) {
		logoDst = new File(moduleDir.toString() + "/cover.png")
		logoDst << logoSrc.bytes
		println "Fetched cover image"
	} else {
		println "Cover image not found, skipping the current step."
	}
	
	println "Finished scrapping " + moduleName
} else {
	println "The following repository is not a module."
}
