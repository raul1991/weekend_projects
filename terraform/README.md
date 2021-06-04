# Introduction
Terraform makes creating infrastructure easy by letting you write code for it too.

# Overview

- terrafrom init -> downloads the provider softwares from terrform registries.
- terraform apply -> Applies the configurations to a provider infrastructure
- terraform validate -> Validates the configuration files
- terrafrom fmt -> formats the files
- terraform destroy -> destroys the infrastructure using the state file

# Using variables

- By default, terraform looks for terraform.tfvars file or \*.auto.tfvars file.
- We can also, create variables in a separate file (say variables.tf) with the following code

  ```
  region = "us-east-2"
  ```
  Then we can use the above variable in our terraform file (say main.tf) as

  ```
  provider "aws" {
    profile = "default"
    region = var.region
  }
  ```
  > you can now run terraform validate to check if this is valid or not.
