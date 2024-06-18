pipeline {
    agent any
    tools { nodejs 'Node Js 20' }
    environment {
        HOST_IP = sh(script: 'ip route show default | awk \'/default/ {print $3}\'', returnStdout: true).trim()
    }
    stages {
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

        stage('Deploy') {
            steps {
                //sh 'cp -r build /usr/src/app'
                sh 'npm install -g serve'
                // Serve the build directory
                script {
                    sh 'npm install pm2 -g' // Install pm2 globally if not already installed
                    sh 'pm2 start npm -- start -- --host ${HOST_IP}' // Start server with pm2
                     sleep time: 20, unit: 'SECONDS' // Wait for server to start (adjust as needed)
                    sh 'pm2 show 0' // Show pm2 process details for troubleshooting
                }
            }
        }
    }
}