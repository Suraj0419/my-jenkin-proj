pipeline {
    agent any
    tools {nodejs "Node Js 20"}
      
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

        stage('Build'){
             steps {
                    sh 'npm run build' // Build the React project
                    sh 'ls -l' // List files to ensure build directory exists
                
            }
        }

         stage('Deploy'){
            steps {
               sh 'cp -r build /usr/src/app'
                sh 'npm install -g serve'
                // Serve the build directory
                sh 'serve -s build -l 3000 &'
            }
        } 
       
    }
}