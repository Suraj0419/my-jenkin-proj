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
                 sh 'serve -s build -l 4200' 
            }
        }
    }
}