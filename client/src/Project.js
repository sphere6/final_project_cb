import React, {Component} from 'react';
import './Project.css';
import matrix_img from './matrix.GIF';
import most_rated_movies from './most_rated_movies_netflix.GIF';
import plot_rating_distribution from './rating_distribution_netflix.gif';

class Project extends Component {
    render(){
        console.log(this.props)
        return (

            <div className = "Project">
                <div className = "Project-inner">
                <h2>Project</h2>  
                <h3>Description</h3>
                <p>Create a movie recommender with the available data.</p>
                <h3>Data Collection</h3>
                <ul>
                    <li>
                        <div>
                            <h4><a href="https://www.kaggle.com/netflix-inc/netflix-prize-data">Netlfix dataset</a></h4>
                            <ul>
                                <li>Movie ids and titles</li>
                                <li>User ids and movie ratings on a scale of 1 to 5</li>
                                <li>More than 17 000 movies in the dataset</li>
                                <li>More than 100 million reviews in the dataset</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4><a href="https://www.kaggle.com/netflix-inc/netflix-prize-data">The Movie Database API</a></h4>
                            <ul>
                                <li>Movie ids</li>
                                <li>Movie titles</li>
                                <li>Movie overviews</li>
                                <li>Movie genres</li>
                                <li>etc.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                
                <h3>Exploratory Data Analysis on the Netflix Dataset</h3>
                <p><b>Most rated movies in Netflix dataset</b></p>               
                <img src={most_rated_movies} alt='most_rated'/>
                <p><b>Rating distribution on Netflix dataset</b></p>               
                <img src={plot_rating_distribution} alt='rating_distribution'/>

                <h3>Recommender system</h3>
                <p><b>Recommendation based on the users movie review</b></p>
                <p>The concept consists of making suggestions based on the similarity between user's preference and the rated movies.</p>
                <ul>
                    <li>Matrix Factorization with Surpr!se library</li>
                    <li>K nearest neighbors with Surpr!se library item to item (Recommendations made on  the concept of similar movies based on the ratings as oppose to similar users based on the ratings)</li>
                </ul>
                <p><b>Recommendation based on the movie overviews, genres and titles</b></p>
                <p>The concept consists of making suggestion based on similar movie overviews and genres.</p>
                <ul>
                    <p>Natural Language Processing</p>
                    <li>Extract keyphrases in movie overviews with Rake-nltk algorithm</li>
                    <li>Concatenate titles, genders, overviews</li>
                    <li>Create embeddings with countvectorizer from scikit-learn library</li>
                    <li>Use cosine similarity to compare the distance between each vectors</li>
                    <li>Keep n closest recommendations to a given movie</li>
                </ul>
                <h3>Challenges and Opportunities for Improvement</h3>
                <ul>
                    <li>Netflix data seemed imbalanced.</li>
                    <li>For matrix factorization, there is no embedding for the new movies.</li>
                    <li>Other methodologies could be considered.(ex: Neural Networks)</li>
                    <li>A subset of the data was used. The solution could be updated and scaled to consider more data.</li>
                    <li>Testing procedure for recommendation engine remains challenging. (Concept of ROI, etc.) </li>
                </ul>

                <h3>Results from Recommendations based on Movie Overviews, Genres and Titles</h3>
                <p><b>Example with The Matrix</b></p>               
                <img src={matrix_img} alt='matrix'/>
                <h3>Movie Recommendations</h3>
                </div>

            </div>
        );
        
    }

}
export default Project;