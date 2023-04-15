# az-frontend

## 로컬에서 프로젝트 실행

```shell
yarn
yarn dev
```

- http://localhost:3000 으로 접속

## 도커로 실행

```shell
# build image
docker build -t az-frontend .

# run container
docker run -d -p 3000:3000 --name az-fron
tend az-frontend
```
