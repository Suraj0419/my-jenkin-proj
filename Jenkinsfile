pipeline {
    agent any
    tools {nodejs "Node Js 20"}
    stages {
        stage('Build') { 
            steps {
                bat 'npm install'
            }
        }
    }
}