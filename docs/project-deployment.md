## What are Github Action?

[Github Actions](https://github.com/features/actions) is a service offered by github that allow you to automate task that commonly happen withing software development.The service is event driven that means, whenever an event is triggered you are able to execute a set of instruction that you define so whenever you define, push a change to remote branch or open up a PR, create issue
those are all considered events, anything you can do with a repository inside the github website.You can probably programmatically trigger those events.

## What is Continous Deployment?

[Continous Deployment](https://en.wikipedia.org/wiki/Continuous_deployment) is the automated process of releasing any changes made to a code base, whenever a programmer pushes any changes to their code base, continous deployment
take those changes build them and release it again.

## GitHub Pages

[Github pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) is static site hosting service, which lets you turn you github repository into website to showcase your documentaion, projects, portfolio etc.No databases to steup
and no servers to configure. It takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website

## ModuleSite Deployment

[ModuleSite](https://github.com/MovingBlocks/ModuleSite) uses a Github actions to automate the deployment process on github pages.On every push Github actions are triggered and the action runs a [Gatsby publish
template](https://github.com/marketplace/actions/gatsby-publish).This template provides fews options and configurations which is need to deploy the ModuleSite. `.github\workflows` directory in ModuleSite which contains
deployment pipeline `deploy.yml` .

The first part of pipeline includes the name of our Github action and the event, which will decide when our job will trigger and on which branch.In our case it is master.
The Second half of pipeline contains on which environment our job will trigger and the steps which includes templates. we have used two templates `actions/checkout`
which allows our `deploy.yml` file to have access to our ModuleSite and another template is our gatsby publish template which will help us to build our gatsby ModuleSite
and realease it.Their are some argument which is required by the gatsby publish template in order to work.The first argument is access token which will allow the template
to push changes when it is done building and second argument is deploy branch.In our case branch name is `deploy`

Above we saw what is our workflow for Deployment. Now let's understand how Gatsby Publish template works behind the scenes
During every push the gatsby template runs a `gatsby build` command which outputs the `public` directory and the template initialize a new repository inside
the public directoy, commit it and push it into the deploy branch mentioned above

### CNAME

A Canonical Name or [CNAME](https://en.wikipedia.org/wiki/CNAME_record) record is a type of DNS record that maps an alias name to a true or canonical domain name.
CNAME records are typically used to map a subdomain
such as www or mail to the domain hosting that subdomain's content.This will be file inside our ModuleSite which contain our domain name, during ModuleSite building
process gatsby template copies the CNAME file into public directory and Github pages will automatically detect the domain name host our ModuleSite
