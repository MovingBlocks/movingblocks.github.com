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
            steps {
                script {
                    try {
                        sh 'bash ./loadModules.sh'
                    } catch (err) {
                        println("$err")
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
