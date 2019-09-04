var git = require('simple-git')
var fs = require('fs-extra')

var repoLink = "" // Repository link for metadata
var branchName = "" // Branch containing formatted metadata
var metaDir = "modules" // Directory containing module data to build the website

// Deletes boilerplate data while deploying to render
fs.remove(metaDir, err => {
  if(err) {
    console.log(err)
  } else {
    console.log("Deleted default boilerplate data...")
  }
})

// Fetches formatted data from github repository
git.clone(repoLink, metaDir, ["--single-branch", "--branch", branchName], err => {
  if(err) {
    console.log(err)
  } else {
    console.log("Fetched repository for metadata!")
  }
})