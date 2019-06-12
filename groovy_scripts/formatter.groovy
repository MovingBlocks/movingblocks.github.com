import groovy.json.JsonSlurper

indexRepo = new File("./")
gatsbyRepo = "../terasology.github.io" // Needs to be changes according to workspace setting

indexRepo.eachFile {
	if(it.isDirectory()) {
		moduleFile = new File("${it.toString()}/module.txt")
		if(moduleFile.exists()) {		
			moduleJson = new JsonSlurper().parseText(moduleFile.text)
			moduleName = moduleJson.get("id")
			println "Formatting data from " + moduleName

			readmeFile = new File("${it.toString()}/README.md").text

			moduleDir = new File("${gatsbyRepo}/modules/${moduleName}")
			println "Creating module directory "
			moduleDir.mkdir()
			dependencies = []
			displayName = moduleJson.get("displayName")

			println "Started working on ${displayName}"
			println "Fetching meta data..."
			description = moduleJson.get("description")
			dependenciesQuery = moduleJson.get("dependencies")
			dependenciesQuery.each{ it.each{ key, value -> if(key == "id") { dependencies.add(value) } }}
			gameplayTemplate = moduleJson.get("isGameplay")
			fmSeparator = "---"

			println "Checking for cover image..."
			coverSrc = new File("${it.toString()}/cover.png")
			if(coverSrc.exists()) {
				coverDst = new File("${moduleDir.toString()}/cover.png")
				coverDst << coverSrc.bytes
				print "Cover image exist!"
			} else {
				println "Cover image doesn't exist, opting for fallback."
				coverDst = "fallback link"
			}

			println "Checking for logo image..."
			logoSrc = new File("${it.toString()}/logo.png")
			if(logoSrc.exists()) {
				logoDst = new File("${moduleDir.toString()}/logo.png")
				logoDst << logoSrc.bytes
				print "Logo image exist!"
			} else {
				println "Logo image doesn't exist, opting for fallback."
				logoDst = "fallback link"
			}

			println "Writing front-matter to module page..."
			gatsbyPage = new File("${moduleDir.toString()}/${moduleName}.md")
			gatsbyPage.write(fmSeparator)
			gatsbyPage.append("\nposttype: \"module\"")
			gatsbyPage.append("\ntitle: ${displayName}")
			gatsbyPage.append("\nlogo: ./logo.png")
			gatsbyPage.append("\ncover: ./cover.png")
			gatsbyPage.append("\ntags:\n\t-${gameplayTemplate}")
			gatsbyPage.append("\ndependencies:")
			dependencies.each{gatsbyPage.append("\n\t-${it}")}
			gatsbyPage.append("\n${fmSeparator}")

			println "Writing page content..."
			gatsbyPage.append("\n${readmeFile}")
			println "Done!"

		}
	}
}
