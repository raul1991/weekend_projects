# Pre requisites

- install ansible
- add your pub keys on the hosts you are trying to setup.

# Creating an inventory file for ansible

```
[tag]
user@host_name
```

# how to use it on multiple machines from the inventory ?

ansible [tag] -a /bin/date -i inventory.inf