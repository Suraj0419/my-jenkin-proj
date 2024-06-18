pipeline {
    agent any
    tools { nodejs 'Node Js 20' }
    environment {
        HOST_IP = sh(script: 'ip route show default | awk \'/default/ {print $3}\'', returnStdout: true).trim()
    }
    stages {
       
       stage('Clean the workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Clone the github repo') {
            steps {
                git 'https://github.com/Suraj0419/my-jenkin-proj.git'
            }
        }

        stage('Install Dependecies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                    sh 'npm run build' // Build the React project
                    sh 'ls -l' // List files to ensure build directory exists
            }
        }

        stage('Deploy to Development') {
            steps {
               sh 'npm run dev-build'
               sh 'cp -r dev-build /usr/src/app'

            }
        }

        stage('Deploy to Production') {
            steps {
                 sh 'npm run build'
                  sh 'cp -r build /usr/src/app'
                
              
              // sh 'HOST_IP=${HOST_IP} serve -s build -l tcp://${HOST_IP}:4000'
            }
        }
    }

     post {
        success {
            echo 'Build and server startup succeeded!'
            
        }
        failure {
            echo 'Build or server startup failed.'
        }
    }
}