pipeline {
    agent any

    environment {
        NODE_VERSION = 'v21.7.2'  // Node.js version installed on your system
        ANGULAR_REPO = 'https://github.com/Eamll/practico3-front.git'
    }

    stages {
        stage('Build Angular Frontend') {
            stages {
                stage('Clone Angular Repository') {
                    steps {
                        dir('frontend') {
                            // Cloning the Angular repository from GitHub
                            git branch: 'main', url: "${ANGULAR_REPO}"
                        }
                    }
                }
                stage('Install Angular Dependencies') {
                    steps {
                        dir('frontend') {
                            // Install Node.js dependencies
                            bat 'npm install'
                        }
                    }
                }
                stage('Build Angular Project') {
                    steps {
                        dir('frontend') {
                            // Build the Angular project
                            bat 'npm run build --prod'
                        }
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Frontend build completed successfully!'
        }
        failure {
            echo 'Frontend build failed!'
        }
    }
}
