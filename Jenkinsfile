pipeline {
  agent any
  
  stages {
    stage('build docker image') {
      script {
        sh 'docker build -t beesoo/cpcpro-fe-hub .'
      }
    }
  }
}
