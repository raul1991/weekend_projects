# Introduction

This project is just to see if we can post events like mouse movements on a [webpage](templates/index.html)

# Setup
Use python3 and run the following commands
```
# create a new virtualenv
mkvirtualenv redis

# switch to virtual env
workon redis

# Install requirements in the virtual env
pip install -r requirements.txt
```

# How to run this
- Start redis server
    ```
    docker run -p 6379:6379 --name redis -d redis
    ```
- Start redis cli and connect to the running redis-server on 127.0.0.1
    ```
    docker run -it --network host --rm redis redis-cli -h 127.0.0.1
    ```
- Start python app
    ```
    python main.py
    ```
  
# How to use this application

- Open the application on the [browser](http://localhost:5000/)
- Now just keep moving your mouse on this page to generate events in redis.
- To view it, run the following in **redis-cli**
    ```
    # To see all the events stored so far
    KEYS [0-9]*
    ```