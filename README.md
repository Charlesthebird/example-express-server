This can be used as an example node.js express server app.

You can build this app yourself by changing the tag and context here and running the following. Make sure that you are logged in to docker with `docker login`.

```sh
export IMAGE_NAME=docker_username/example-server-app
export REMOTE_CONTEXT=your-remote-context
export REMOTE_CLUSTER=your-remote-cluster
```

```sh
docker build . -t $IMAGE_NAME && \
docker push $IMAGE_NAME && \
kubectl apply --context=$REMOTE_CONTEXT -f ./kubernetes/namespace.yaml && \
cat ./kubernetes/deployment.yaml | \
    envsubst | \
    kubectl apply --context=$REMOTE_CONTEXT -f -
kubectl apply --context=$REMOTE_CONTEXT -f ./kubernetes/service.yaml && \
cat ./kubernetes/route_table.yaml | \
    envsubst | \
    kubectl apply --context=$REMOTE_CONTEXT -f -
```
