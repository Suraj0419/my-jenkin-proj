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
               powershell '''
                $source = "build/*"
                $destination = "C:\\Users\\dccpl\\source\\my-jenkins-app"
                Copy-Item -Path $source -Destination $destination -Recurse -Force
                '''
            }
        }
    }
}