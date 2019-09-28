# import the Flask class from the flask module

from flask import Flask, render_template, request, url_for 
# Use a service account
'''
firebase_admin.initialize_app(cred)
db = firestore.client() 
'''
# password = generate_password_hash('TimCode007')
# db.collection('password').document('password').set({'password': password})
# password = db.collection('password').document('password').get().to_dict()['password']
# print(password)
# storage_client = storage.Client()
# bucket = storage_client.get_bucket('<INSERT_BUCKET_HERE>')
# create the application object
app = Flask(__name__)


@app.route('/')
def welcome():
    '''    
    datastore={"files":[]}
    docs = db.collection('files').get()
    for doc in docs:
        datastore['files'].append(doc.to_dict())
    ''' 

    return render_template('index.html')  # render a template





# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
