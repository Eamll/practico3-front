pipeline {
    agent any

    environment {
        NODE_VERSION = 'v20.18.0'  // Node.js version installed on your system
        ANGULAR_REPO = 'https://github.com/Eamll/practico3-front.git'
        XAMPP_PATH = 'C:\\xampp\\htdocs'  // XAMPP htdocs directory with backslashes
    }

    stages {
        stage('Build Angular Frontend') {
            stages {
                stage('Clone Angular Repository') {
                    steps {
                        dir('frontend') {
                            // Clone the Angular repository from GitHub
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
                stage('Archive Angular Build') {
                    steps {
                        dir('frontend/dist') {
                            // Archive the Angular build output as an artifact
                            archiveArtifacts artifacts: '**', allowEmptyArchive: false
                        }
                    }
                }
                stage('Deploy to XAMPP') {
                  steps {
                      // Clear previous build from XAMPP htdocs if it exists
                      bat "if exist ${XAMPP_PATH}\\angular-app rmdir /S /Q ${XAMPP_PATH}\\angular-app"
                      // Recreate the directory in XAMPP htdocs
                      bat "mkdir ${XAMPP_PATH}\\angular-app"
                      // Copy the entire contents of the dist folder to the angular-app folder in XAMPP
                      bat "xcopy /E /I /Y frontend\\dist\\* ${XAMPP_PATH}\\angular-app"
                  }
              }
            }
        }
    }

    post {
        success {
            echo 'Frontend build and deployment completed successfully!'
        }
        failure {
            echo 'Frontend build or deployment failed!'
        }
    }
}
