import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        if((dish === null) || (dish === undefined))
        return(
            <div></div>
        );
    else 
        return(
            <Card key={dish.id}>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    function RenderComments({comments}) {
        if((comments === null) || (comments === undefined))
        return(
            <div></div>
        );
    else {
        return( comments.map((com) => {
            return (
                <div key={com.id}>
                    <h6>{com.comment}</h6>
                    <p>-- {com.author}   {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p>
                </div>
            );
        }));
    }
}

    const  DishDetail = (props) => {
        if (props.dish != null){
        return(
            <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <RenderDish dish = {props.dish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={ props.dish.comments } />
               </div>
            </div>
            </div>
        );
        }else {

            return(
            
            <div></div>
            
            );
            
            }
      
    }

export default DishDetail;