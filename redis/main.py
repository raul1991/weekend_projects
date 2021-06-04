import json

from flask import Flask
from flask import request
from flask import render_template
import redis
import time
# use redis api here
app = Flask(__name__)


class ActivityTracker(object):

    def __init__(self) -> None:
        # url to a running redis server
        self.r = redis.Redis(host='127.0.0.1', port=6379, db=0)
        print(self.r)

    def track(self, event: {}):
        print(event['x'], event['y'])
        ts = time.time()
        print(ts)
        self.r.set(str(ts), json.dumps(event))


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/activity', methods=['POST'])
def activity():
    activity_tracker.track(request.get_json())
    return json.dumps({'status': 'ok'})


if __name__ == "__main__":
    activity_tracker = ActivityTracker()
    app.run(host='0.0.0.0')
