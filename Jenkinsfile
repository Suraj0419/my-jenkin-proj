pipeline {
    agent any
    tools {nodejs "Node Js 20"}
    stages {
        stage('Install Dependecies') { 
            steps {
                sh 'npm install'
            }
        }

        stage('Build'){
             steps {
                 dir('/usr/src/app') {
                    sh 'npm install' // Install dependencies
                    sh 'npm run build' // Build the React project
                    sh 'ls -l' // List files to ensure build directory exists
                }
            }
        }

        stage('Deploy'){
            steps {
               sh 'cp -r build/* /usr/src/app/build'
            }
        }
    }
}