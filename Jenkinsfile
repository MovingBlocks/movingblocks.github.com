pipeline {
    agent any 
	 tools {nodejs "Nodejs"}
   
    stages {
         stage('Requirement install') { 
            steps {
                sh 'npm install -g gatsby-cli'
                sh 'npm install -g yarn'
            }
        }
        stage('build checks') { 
            steps {
                   echo 'build checks'
                   sh'yarn install'   
            }
        }
        stage('Deploy') { 
		environment{
		 GIT_CREDS = credentials('GIT_TOKEN')
	 
		}
            steps {
	
		    sh "yarn run build"
            sh "bash ./scripts/check-cname.sh"

            sh '''

	        cd public
	        git config --global user.email "<user mail id>"
            git config --global user.name "<username>"
	    
	        git init
            git add .              
	        git commit -m "push build to git deploy Repository"
            git push https://${GIT_CREDS}@github.com/MovingBlocks/<respository>.git  <branch> -f
            '''
                
		    cleanWs()
     
            }
            }
        }
        
        
    }