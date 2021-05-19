-	Project : Movie Recommender
-	Goal : Provide movie recommendations based on available data.
-	Data : The Movie Database API and Netflix Dataset
-	Implemented Solution : Movie recommendations made with the use of Natural Language Processing and similarity concept between movie overviews, genres and titles 
-	Server : Flask
-	Front-end : React


Netflix Dataset:
Collaborative filtering technique on user movie ratings

Files :

1.	final_project_data_preparation_netflix
	Creates a balanced subset of the netflix dataset
	Input files: Data from https://www.kaggle.com/netflix-inc/netflix-prize-data
	Output files : Create file : 'movies_subset_balanced.csv.gz'

2.	final_project_eda_subset_netflix
	Exploratory data analysis on subset
	Input files : 'movies_subset_balanced.csv.gz'
	
3.	final_project_recommender_movie_ratings
	Test of recommendations based on Matrix Factorization and KNN item-item
	Input files  : 'movies_subset_balanced.csv.gz'

The Movie Database API:

4.	final_project_data_movie_database_api
	Input files : movies_subset_balanced.csv.gz, movie_titles.csv
	Output files : mvdb.csv.gz

5.	final_project_merge_movid_db_netflix_data
	Input files : movies_subset_balanced.csv.gz, movie_titles.csv
	Output file : data/db.csv.gz

6.	final_project_recommender_nlp
	Returns recommendations for each movie in subset based on nlp and similarity concept
	Input files : db.csv.gz
	Output files : db_rec.csv.gz'

## Server

7.	api file
	Send recommendations (db_rec) to end point with the help of flask.

	To install and run server:
	```
	cd server
	pipenv shell
	pipenv install
	export FLASK_APP=api.py
	python -m flask run

	```

## Front-End

8. client folder (React)

	To install and run front-end:
	```
	cd client
	npm install
	npm start

	```