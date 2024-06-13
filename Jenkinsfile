pipeline {
    agent {
        docker {
            image 'jenkins/jenkins:latest'
            args '-p 3000:3000'
        }
    }
    tools {nodejs "Nodejs"}
      
    stages {
        stage('Install Dependecies') { 
            steps {
                sh 'npm install'
            }
        }

        stage('Build'){
             steps {
                    sh 'npm run build' // Build the React project
                    sh 'ls -l' // List files to ensure build directory exists
                
            }
        }

        stage('Deploy'){
            steps {
               sh 'cp -r build /usr/src/app'
               sh 'npm start'
            }
        }
    }
}