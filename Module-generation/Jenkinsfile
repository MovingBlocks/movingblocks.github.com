
def archive() {
    def changes = false
    def equals = sh(
        script: '''
      #!/bin/bash

     DIFF=$(diff -r modules/ artifacts/modules/ > /dev/null 2>&1)
     ''', returnStatus:true)

    if ( equals == 0) {
        println('same as old artifact.')
    } else {
        println('some files are updated.')
        changes = true
    }

    return changes
}

pipeline {
    agent any
    environment {
        GIT_CREDS = credentials('GIT_TOKEN')
    }
    stages {
        stage('gather data') {
            steps {
                sh 'python3 ./scrape.py'
                sh 'python3 ./frontmatter.py'
            }
        }

        stage('Check Data') {
            when {
                expression { currentBuild.previousBuild }
            }
            steps {
                sh 'mkdir -p artifacts'
            }

            post {
                always {
                    script {
                            copyArtifacts(projectName: currentBuild.projectName,
                            target: 'artifacts',
                            selector: lastSuccessful())

                        def value = archive()
                        if (value == true) {
                            println('Archiving new meta-data...')
                            archiveArtifacts artifacts: 'modules/**/*.*', fingerprint: true
                            sh 'bash ./loadModules.sh'
                           }else {
                            println('None of the required files were updated. Skipping archiving meta-data...')
                            archiveArtifacts artifacts: 'modules/**/*.*', fingerprint: true
                        }
                    }
                }
                failure {
                    script {
                        println("$err")
                        archiveArtifacts artifacts: 'modules/**/*.*', fingerprint: true
                        sh 'bash ./loadModules.sh'
                    }
                }
            }
        }

        stage('clean workspace') {
            steps {
                cleanWs()
            }
        }
    }
}
