npm i

.env.development { 
    REACT_APP_API_URL=https://api.gohardstudy.gq
    REACT_APP_NAME=GohardStudy
}

.production.env { 
    REACT_APP_API_URL=https://api.gohardstudy.gq
    PUBLIC_URL=https://gohardstudy.gq
    REACT_APP_NAME=GohardStudy
}

npm run build

docker build -t arziburst/gohard-frontend .

docker push arziburst/gohard-frontend

docker pull arziburst/gohard-frontend

docker tag arziburst/gohard-frontend dokku/frontend

dokku tags:deploy frontend