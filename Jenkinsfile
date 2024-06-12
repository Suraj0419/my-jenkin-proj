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
                 sh 'npm install -g serve'
                 sh 'npx serve -s build -l 3000' 
            }
        }
    }
}