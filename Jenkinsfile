pipeline {
    agent any
  
    environment {
        productizedApps = 'retail,business,wealth'    
    }
    stages {
      stage("build") {
        steps {
          echo 'building the application'
        }
      }
      stage("test") {
         steps {
          echo 'testing the application'
        }
      }
      stage("deploy") {
         steps {
          echo 'deploying the application'
        }
      }
      stage("Hello") {
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
