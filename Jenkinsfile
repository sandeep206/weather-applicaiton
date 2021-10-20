pipeline {
    agent any
  
    environment {
        productizedApps = 'retail,business,wealth'    
    }
    stages {
      stage('build') {
      }
      stage('test') {
      }
      stage('test') {
      }
      stage('Hello') {
        steps {
          script {
            def apps = env.productizedApps.tokenize(',');
            echo "producticed apps ${env.productizedApps}"
            echo "apps: ${apps} and length ${apps.size()}"

            echo 'Hello World'
          }
        }
      }
    }
}
