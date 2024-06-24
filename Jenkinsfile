pipeline {
    agent any
    tools { nodejs 'Node Js 20' }
    environment {
        HOST_IP = sh(script: 'ip route show default | awk \'/default/ {print $3}\'', returnStdout: true).trim()
        DB_CREDENTIALS=credentials('db-credentials')
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
          stage('Provide Config File') {
            steps {
                // Use the config file provided by Config File Provider plugin
                configFileProvider([configFile(fileId: '451fd959-9819-4f8a-a672-6e47cff6974c', variable: 'CONFIG_FILE_PATH')]) {
                    sh 'cp $CONFIG_FILE_PATH public/config.json'
                     sh 'cp $CONFIG_FILE_PATH /usr/src/app/public/config.json'
                      sh '''
                    sed -i "s|\\${DB_USERNAME}|${DB_CREDENTIALS_USR}|g" public/config.json'
                    sed -i "s|\\${DB_PASSWORD}|${DB_CREDENTIALS_PSW}|g" /usr/src/app/public/config.json'
                    '''
                }
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