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
              sh 'docker cp jenkins-workspace:/path/to/build/directory "C:\\Users\\dccpl\\source\\my-jenkins-app"'
            }
        }
    }
}