pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone your GitHub repo
                git branch: 'main', url: 'https://github.com/codeInterpreter05/calculator-app.git'
            }
        }

        stage('Build') {
            steps {
                echo 'No build step needed for static site.'
            }
        }

        stage('Test') {
            steps {
                echo 'No tests defined for static HTML site.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying static site...'
                // Example: copy files to web server or S3 bucket
                sh '''
                rsync -avz --delete ./ /var/www/html/
                '''
            }
        }
    }

    post {
        success {
            echo 'Static website deployed successfully!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
