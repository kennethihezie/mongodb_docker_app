# commands

## create docker network
docker network create <network-name>

## start mongodb
docker run  -p 27017:27017 \
-d -e MONGO_INITDB_ROOT_USERNAME=admin \ 
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongodb \
--net mongo-express-network \
mongo

 
## start mongo-express
docker run -d \                                                             
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
--net mongo-express-network \
--name mongo-express-ui \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
mongo-express