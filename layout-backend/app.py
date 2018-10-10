import flask, json, flask_cors

app = flask.Flask(__name__)
flask_cors.CORS(app)


@app.route('/user/<id>/')
def load_layouts(id):
	with open('configs/user_' + id + '/widgets.json') as f:
		config = json.loads(f.read())
	with open('configs/user_' + id + '/user_details.json') as f:
		user_details = json.loads(f.read())

	return flask.jsonify({"user_id": id, "widgets": config, "user_details": user_details})


@app.route('/user/<id>/', methods=['POST'])
def post_layouts(id):

	file_path = 'configs/user_' + id + '/widgets.json'
	config = json.loads(flask.request.data.decode('utf-8'))
	widgets = config['widgets']
	print(widgets)

	with open(file_path, 'w') as f:
		f.write(json.dumps(widgets))

	print("return response")
	return flask.jsonify({"widgets": widgets})


if __name__ == '__main__':
    app.run('127.0.0.1', port=8080, debug=False)
