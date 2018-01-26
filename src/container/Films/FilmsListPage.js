import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import {connect}  from "react-redux";
import {fetchFilmsList} from "../../actions";

class FilmsListPage extends Component{
    componentDidMount(){
        this.props.fetchFilmsList();
    }
    render(){
        let tableList = this.props.filmsList.length>0? this.props.filmsList.map((film,index)=>{
            return ( <div className="col-lg-3 col-md-4 col-sm-6">
                        <article className="card">
                            <header className="title-header">
                                <h3>{film.title}</h3>
                            </header>
                            <div className="card-block">
                                <div className="img-card">
                                    <img src={film.images.image[0].src} alt="Movie"  />
                                </div>
                                <p className="tagline card-text text-xs-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="#" className="btn btn-primary btn-block"><i className="fa fa-eye"></i> Watch Now</a>
                            </div>
                        </article>
                    </div>) 
    }):(<div>Loading..</div>) ;
        return(
            <div className="row">
                {tableList}
            </div>
        )

    }
}

FilmsListPage.propTypes={
    filmsList:PropTypes.array.isRequired,
    fetchFilmsList:PropTypes.func.isRequired
}

function mapSatesToProps(state){
    return {
        filmsList :state.filmsList,
   }
}

export default connect(mapSatesToProps,{fetchFilmsList})(FilmsListPage);