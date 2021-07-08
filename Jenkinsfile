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
        println('some modules are updated.')
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
                sh 'rm -R modules'
                sh 'python3 ./module-generation/scrape.py'
                sh 'python3 ./module-generation/frontmatter.py'
            }
        }

        stage('Check Data') {
            steps {
                sh 'mkdir -p artifacts'

                script {
                    try {
                        copyArtifacts(projectName: currentBuild.projectName,
                            target: 'artifacts',
                            selector: lastSuccessful())

                        def value = archive()
                        if (value == true) {
                            println('Archiving new meta-data...')
                            archiveArtifacts artifacts: 'modules/**/*.*', fingerprint: true
                            sh 'bash ./module-generation/loadModules.sh'
                           }else {
                            println('None of the required files were updated. Skipping archiving meta-data...')
                            archiveArtifacts artifacts: 'modules/**/*.*', fingerprint: true
                        }
                    } catch (err) {
                        println("$err")
                        archiveArtifacts artifacts: 'modules/**/*.*', fingerprint: true
                        sh 'bash ./module-generation/loadModules.sh'
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
