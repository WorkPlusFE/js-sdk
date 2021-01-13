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
                    reuseNode true
                }
            }
            steps {
                sh 'npm config set registry https://registry.npm.taobao.org'
                sh 'npm config set puppeteer_download_host https://npm.taobao.org/mirrors'
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run build'
                sh 'npm run release:version'
            }
        }

        stage("SDK Deploy") {
            steps {
                sh 'rsync --delete -avz -e ssh ${WORKSPACE}/dist/sdk.*.js root@106.13.212.147:/data/workplus/websites/open.workplus.io/temp/v4'
            }
        }

        stage("Demo Build") {
            agent {
                docker {
                    image 'node:10.23.0-alpine3.10' 
                    args '-e HOME=/tmp -e NPM_CONFIG_PREFIX=/tmp/.npm'
                    reuseNode true
                }
            }
            steps {
                sh 'cd ${WORKSPACE}/example'
                sh 'npm config set registry https://registry.npm.taobao.org'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage("Demo Deploy") {
            steps {
                sh 'rsync --delete -avz -e ssh ${WORKSPACE}/example/dist/* root@106.13.212.147:/data/workplus/websites/open.workplus.io/temp/v4'
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