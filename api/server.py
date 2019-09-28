# import the Flask class from the flask module
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import Flask, render_template, request, url_for 
# Use a service account
cred = credentials.Certificate('key.json')
firebase_admin.initialize_app(cred)
db = firestore.client() 

app = Flask(__name__)
user = ''

def isUser(username):
    users = db.collection('users').get()
    if username not in users:
        return False
    else:
        return True


@app.route('/', methods = ['GET', 'POST'])
def welcome():
    if request.method=='GET':
        return render_template('index.html')  # render a template
    else:
        user = request.form['username']
        if isUser(user):
            data = db.collection('users').document(user).get().to_dict()
            return render_template('THANKS')
        else:
            return render_template('index.html')


def getCareTakers():
    return data['CareTakers']

def getChildName():
    return data['ChildName']

def getAge():
    return data['Age']

def getGender():
    return data['Gender']

def getRace():
    return data['Race']


@app.route('/howdy')
def howdy():
    return str(data)







# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
