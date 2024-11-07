pipeline {
    agent any

    parameters {
        string(name: 'NODE_VERSION', defaultValue: 'v20.18.0', description: 'Node.js version installed on your system')
        string(name: 'ANGULAR_REPO', defaultValue: 'https://github.com/Eamll/practico3-front.git', description: 'URL of the Angular repository')
        string(name: 'XAMPP_PATH', defaultValue: 'C:\\xampp\\htdocs', description: 'XAMPP htdocs directory with backslashes')
        string(name: 'API_URL', defaultValue: 'http://localhost:3000/laravel-app/public/api', description: 'API URL to be used in the Angular environment file')
        booleanParam(name: 'INSTALL_DEPENDENCIES', defaultValue: true, description: 'Whether to run npm install')
    }

    environment {
        NODE_VERSION = "${params.NODE_VERSION}"
        ANGULAR_REPO = "${params.ANGULAR_REPO}"
        XAMPP_PATH = "${params.XAMPP_PATH}"
        API_URL = "${params.API_URL}"
    }

    stages {
        stage('Build Angular Frontend') {
            stages {
                stage('Clone Angular Repository') {
                    steps {
                        dir('frontend') {
                            git branch: 'main', url: "${ANGULAR_REPO}"
                        }
                    }
                }
                stage('Install Angular Dependencies') {
                    when {
                        expression { return params.INSTALL_DEPENDENCIES }
                    }
                    steps {
                        dir('frontend') {
                            bat 'npm install'
                        }
                    }
                }
                stage('Set API URL') {
                    steps {
                        dir('frontend') {
                            script {
                                def envFilePath = 'src\\app\\environments\\enviroment.ts'
                                def content = readFile(envFilePath)
                                content = content.replaceFirst(/apiUrl: '.*'/, "apiUrl: '${API_URL}'")
                                writeFile(file: envFilePath, text: content)
                            }
                        }
                    }
                }
                stage('Build Angular Project') {
                    steps {
                        dir('frontend') {
                            bat 'npm run build --prod -- --base-href "./"'
                        }
                    }
                }
                stage('Archive Angular Build') {
                    steps {
                        dir('frontend/dist') {
                            archiveArtifacts artifacts: '**', allowEmptyArchive: false
                        }
                    }
                }
                stage('Deploy to XAMPP') {
                    steps {
                        bat "if exist ${XAMPP_PATH}\\angular-app rmdir /S /Q ${XAMPP_PATH}\\angular-app"
                        bat "mkdir ${XAMPP_PATH}\\angular-app"
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
