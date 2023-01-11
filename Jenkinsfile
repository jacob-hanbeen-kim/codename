pipeline {
  agent any
  
  stages {
    stage('Hello') {
      steps {
        echo 'Hello World'
      }
    }
    stage('Install Dependencies') {
      steps {
        npm install
      }
    }
  }
}
