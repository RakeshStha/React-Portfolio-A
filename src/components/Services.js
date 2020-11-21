import React from 'react';
import {Card, CardImg} from 'react-bootstrap';


import Data from './shared/data.json';



function Services(){
        function clickHandler() {
          
            return (
              console.log("Clicked in Card")
            );
          }
          
         
 

return(
    <div className="row">
    { Data.map(post => {
        return(
            
            <div key= {post.id}className="col-12 col-md-5 m-1">
                    <Card onClick={clickHandler}>
                        <CardImg width="100%" src={post.image} alt={post.name} />
                        <Card.Body>
                            <Card.Title> {post.name} </Card.Title>
                            <Card.Text> {post.description} </Card.Text>
                        </Card.Body>
                    </Card>
              </div>
              
        )
    })
}
</div>
    
);
    
}

export default Services;
