import React from 'react';
import { Card, Button, Icon } from 'antd'

const { Meta } = Card;

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200/'

const MovieList = props => {
    const { movies, onRemoveMovie } = props;
    return movies.map(movie => {
        return (
            <Card
                key={movie.id}
                cover={
                    <img
                        src={IMAGE_PATH + movie.poster_path}
                        alt={`Poster of ${movie.title}`}
                    />
                }
                actions={[

                    
                    <Button type="danger" shape="round"  onClick={() => onRemoveMovie(movie.id)}>
                       <Icon type="delete" theme="filled" />Delete 
                       
          </Button>
          
                ]}
            >
                <Meta title={movie.title} description={movie.overview} />
            </Card>
        );
    });
};

export default MovieList;