docker build -t beesoo/cpcpro-fe-hub:$1 -f ./Dockerfile .
docker push beesoo/cpcpro-fe-hub:$1
docker rmi beesoo/cpcpro-fe-hub:$1