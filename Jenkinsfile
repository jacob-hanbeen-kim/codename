pipeline {

  agent any

  stages {
    stage("Install dependencies") {
      steps {
        sh 'yarn install'
      }
    }
    stage("Build") {
      steps {
          sh 'docker build -t $DOCKERHUB_FOR_FE:dev -f ./Dockerfile .'
      }
    }

    stage('Login') {
			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

    stage("Push") {
      steps {
      sh 'docker push $DOCKERHUB_FOR_FE:dev'
      }
    }

    stage("Clean") {
      steps {
				sh 'docker rmi $DOCKERHUB_FOR_FE:dev'
			}
    }

    stage("Release") {
        steps {
            sh script: """\
            docker-compose down --rmi all -v --remove-orphans
            docker-compose up -d
            """, returnStdout: true
        }
    }
  }
}