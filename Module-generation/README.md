# Module Generation Automation

The automation focuses on automating the [ModuleSite](https://github.com/MovingBlocks/ModuleSite) for gathering information about modules from [Index repository](https://github.com/Terasology/Index/blob/master/distros/omega/gradle.properties) and exhibit their generated information on ModuleSite.This uses an automation tool called [Jenkins](https://www.jenkins.io/), which provides stages and steps in the Jenkins pipeline to perform different operations

### Jenkins Job

This will be a [Pipeline](https://www.jenkins.io/doc/book/pipeline/) job that will run periodically so that if there will be any changes in module information present in the Terasology Organization that information can be updated on ModuleSite easily.
A pipeline job includes a Jenkinsfile which consist of several stages which define a conceptually distinct subset of tasks performed through the entire Pipeline
which is used to visualize the pipeline status and stage include a step that performs several operations

### File Structure

```
├── Jenkinsfile           - Jenkins pipeline text file
├── scrape.py             - File to scrape and sort modules and Non modules repository and to collect require information
├── frontMatter.py        - File to generate frontmatter form scraped modules
├── loadModules.sh        - supporting bash script to perform git operations
```

### Module Generation Diagram

<img src="./Module-Generation.png" width="450" height="500">

### Module generation pipeline

#### Gather data

Gather data stage executes the `scrape.py` which is a python script to collect all the repository present in the Index repository by creating API calls to Github.
The python script `scrape.py` uses [PyGithub](https://pygithub.readthedocs.io/en/latest/) python library to create API calls and to perform other operations
related to Github. After collecting Modules are stored in a directory called `meta-data` and Modules are stored as subdirectories
`meta-data\AdditionalFruits`.Each Module directory contains `Module.txt, cover image, Readme file`
which will help us to exhibit the information that will be displayed on ModuleSite

The next step after gathering Modules is to get all the require information that will be use to display modules on ModuleSite
This Step executes the `frontmatter.py` python script that will generate require information such as Module Name,Module Description,Module tags,cover Image,and
Module information from readme file

#### Check Data

This stage tries to copy the [artifact](https://www.jenkins.io/doc/pipeline/tour/tests-and-artifacts/) of last successful build, if it does not found any artifact it create
new artifact of current build and create pull request to the ModuleSite using the supporting bash script `loadModules.sh`. If it gets the last successful build
, it compares the current build and the last successful build, if their is ant changes between the build, the last successful build is removed and current build is archived and create pull request to ModuleSite.
.At last the workspace is cleared so that we don't run into errors next time when the pipeline is executed.The same process is repeated periodically
