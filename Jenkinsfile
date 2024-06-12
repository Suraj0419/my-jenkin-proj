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
                sh 'npm run build'
            }
        }

        stage('Deploy'){
            steps {
               sh 'npm install -g http-server'
                // Bind the server to all network interfaces
                sh 'http-server build -p 3000 -a 0.0.0.0 &'
            }
        }
    }
}