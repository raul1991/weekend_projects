# Flannel setup

- clone the repo
- install ansible, vagrant and vbox6
- run vagrant up in this directory
- Post run verify all nodes (3 worker, 1 master are in vbox)
- Copy the kubeconfig from the master -> ~/.kube/config to your local /path/to/new_config
- Now export KUBECONFIG=$KUBECONFIG:/path/to/new_config
- Now switch context as per newer_config 
```
kubectl config --kubeconfig=/path/to/newer_config use-context kubernetes-admin@kubernetes
```
- Now you should see the nodes
```
kubectl get nodes
```
