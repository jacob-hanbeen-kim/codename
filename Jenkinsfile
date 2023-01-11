pipeline {
  agent any
  
  stages {
    stage('build docker image') {
      steps {
        sh 'docker build -t beesoo/cpcpro-fe-hub .'
      }
    }
  }
}
