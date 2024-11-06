pipeline {
    agent any

    parameters {
        string(name: 'NODE_VERSION', defaultValue: 'v20.18.0', description: 'Node.js version installed on your system')
        string(name: 'ANGULAR_REPO', defaultValue: 'https://github.com/Eamll/practico3-front.git', description: 'URL of the Angular repository')
        string(name: 'XAMPP_PATH', defaultValue: 'C:\\xampp\\htdocs', description: 'XAMPP htdocs directory with backslashes')
    }

    environment {
        NODE_VERSION = "${params.NODE_VERSION}"
        ANGULAR_REPO = "${params.ANGULAR_REPO}"
        XAMPP_PATH = "${params.XAMPP_PATH}"
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
                            // Build the Angular project with a base href of "./"
                            bat 'npm run build --prod -- --base-href "./"'
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
