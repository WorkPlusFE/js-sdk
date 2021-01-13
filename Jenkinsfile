// Instead of annotating an unnecessary import statement, the symbol _ is annotated, according to the annotation pattern.
def repoName = "JS-SDK"
def version = env.BRANCH_NAME

pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage("Root Bootstrap && Build") {
            agent {
                docker {
                    image 'node:10.23.0-alpine3.10' 
                    args '-e HOME=/tmp -e NPM_CONFIG_PREFIX=/tmp/.npm'
                }
            }
            steps {
                sh 'npm config set registry https://registry.npm.taobao.org'
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run build'
            }
        }

        stage("SDK Deploy") {
            steps {
                sh 'npm run release:version'
                sh 'rsync --delete -avz -e ssh ${WORKSPACE}@2/dist/sdk.*.js root@106.13.212.147:/data/workplus/websites/open.workplus.io/temp/v4'
            }
        }

        stage("Demo Build") {
            agent {
                docker {
                    image 'node:10.23.0-alpine3.10' 
                    args '-e HOME=/tmp -e NPM_CONFIG_PREFIX=/tmp/.npm'
                }
            }
            steps {
                sh 'cd example'
                sh 'npm config set registry https://registry.npm.taobao.org'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage("Demo Deploy") {
            steps {
                sh 'rsync --delete -avz -e ssh ${WORKSPACE}@3/example/dist/* root@106.13.212.147:/data/workplus/websites/open.workplus.io/temp/v4'
            }
        }
    }

    post {
        always {
            emailext(subject: '$DEFAULT_SUBJECT', body: '$DEFAULT_CONTENT', to: 'hejianxian@foreverht.com')
            cleanWs deleteDirs: true
        }
    }
}