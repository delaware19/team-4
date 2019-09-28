# import the Flask class from the flask module
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import Flask, render_template, request, url_for 
# Use a service account
cred = credentials.Certificate('key.json')
firebase_admin.initialize_app(cred)
db = firestore.client() 
# password = generate_password_hash('TimCode007')
data = db.collection('users').document('shreyshah33@gmail.com').get().to_dict()


# password = db.collection('password').document('password').get().to_dict()['password']
# print(password)
# storage_client = storage.Client()
# bucket = storage_client.get_bucket('<INSERT_BUCKET_HERE>')
# create the application object

def getCareTakers():
    return data['CareTakers']


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

@app.route('/howdy')
def howdy():
    return str(data)







# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
