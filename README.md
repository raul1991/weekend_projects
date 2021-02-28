# Overview

This project is way to get started with multiple softwares/technologies during my weekends. Ill be trying to create many applications including the softwares Ill pick every weekend.

# Project structure

- At the root of this repo will be all the things I will learn. For example, you might see ansible, vagrant etc. Let's call them `software`. 

- Every `software` may contain one or more project folders since I might need to create multiple projects to understand the application of the software. 

- Inside every `project` folder, there will the following files
	- tags - a bunch of keywords related to what all is used in this project.
	- readme - project explanation
	- project-name - some_name_for_this_project

The file structure would look like this

```
|____ ansible
	|____ run_ping
		|____ tags
		|____ README.md
		|____ project specific folders...
	|____ setup_k8s
|____ vagrant
    |____ create_vm
    |____ create_docker_containers
|____ redis
    |____ use_redis_cli
    |____ use_with_flask
```

# Softwares explored or started to explore

1. [Ansible](/ansible)

2. [Vagrant](/vagrant)