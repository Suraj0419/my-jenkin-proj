pipeline {
    agent any
    tools {nodejs "Node Js 20"}
    stages {
        stage('Install Dependecies') { 
            steps {
                sh 'npm install'
            }
        }

              stage('Check for Outdated Dependencies') {
            steps {
                script {
                    def outdated = sh(script: 'npm outdated', returnStatus: true)
                    if (outdated != 0) {
                        echo "Outdated dependencies found"
                        sh 'npm update'
                    }
                }
            }
        }

        stage('Build'){
             steps {
                sh 'npm run build'
            }
        }

        stage('Deploy'){
            steps {
                 sh 'npm install -g serve'
                 sh 'serve -s build -l 3000 &' 
            }
        }
    }
}