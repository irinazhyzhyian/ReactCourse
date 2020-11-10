import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments){
        if(comments==null)
            return(
                <div></div>
            );
        else {
            return( comments.map((com) => {
                return (
                    <div key={com.id}>
                        <h6>{com.comment}</h6>
                        <p>-- {com.author}   {com.date}</p>
                    </div>
                );
            }));
        }
    }

    renderDetails(dish){
        if(dish==null)
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

    render() {
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                {this.renderDetails(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish.comments)}
               </div>
            </div>
        );
    }
}

export default DishDetail;