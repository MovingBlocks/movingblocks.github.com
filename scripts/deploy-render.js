/* eslint-disable no-console */

const git = require('simple-git')
const fs = require('fs-extra')

const repoLink = process.env.META // Repository link for metadata
const branchName = process.env.BRANCH // Branch containing formatted metadata
const metaDir = "modules" // Directory containing module data to build the website

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
