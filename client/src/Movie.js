import React, {Component} from 'react';
import './Movie.css';


class Movie extends Component {
    render(){
        console.log(this.props)
        return (

            <div className = "Movie">
                <div className = "Container">
                    <div className = "Poster">
                        {this.props.poster_path !== "0" && (
                            <img src={this.props.poster_path} alt = {this.props.title}/>
                        )}
                    </div>
                    <div className = "Info" >
                        <div className = "Title Info-inner" style={{color: "black", fontWeight: 'bold'}}>{this.props.title}</div>
                        <div className = "Info-inner"> Year of Release : {this.props.release_year} </div>
                        <div className = "Info-inner"> Genres : {this.props.genres.map(genre => genre + ' ') } </div>
                        <div className = "Info-inner"> Vote Average : {this.props.vote_avg} </div>
                        <div className = "Info-inner"> Vote Count : {this.props.vote_count} </div>
                        <div className = "Info-inner"> Movie Overview  </div>
                        <div className = "Info-inner"> {this.props.overview} </div>
                    </div>
                </div>
                <div className = "Rec"> 
                    Recommendations : {this.props.recommendations.map(movie => movie.title + ' | ')} 
                </div> 
            </div>
        );
        
    }

}
export default Movie;