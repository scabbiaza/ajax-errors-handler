import time
from flask import Flask, abort, render_template, Response


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('base.html')


@app.route('/noerrors')
def noerrors():
    return 'ok'


@app.route('/error/<error>')
def error(error):
    if error == 'parsererror':
        return Response('{"bad": "JSON", }',  mimetype='application/json')
    if error == 'timeout':
        time.sleep(5)
    else:
        error = int(error)
        abort(error)


if __name__ == '__main__':
    app.run(debug=True)
