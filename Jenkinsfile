pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Шаг для клонирования репозитория из Git
                git branch: 'main', url: 'https://github.com/Zebrooo/Chineese-Delivery.git'
            }
        }
        
        stage('Build') {
            steps {
                // Шаг для установки зависимостей с помощью npm
                sh 'npm install'
                
                // Шаг для сборки проекта с помощью npm
                sh 'npm run build'
            }
        }
    }
}