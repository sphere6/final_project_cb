from flask import Flask
import pandas as pd

app = Flask(__name__)

def extract_data():
    db = pd.read_csv('data/db_rec.csv.gz', compression = 'gzip')
    res = db.to_json(orient = 'records')
    return res

@app.route('/data')
def get_data():
    data_json = extract_data()
    return data_json
