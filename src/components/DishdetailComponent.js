/* IMPORTS*/
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state={

        }
    }
/*Render dish using dish passed in as props from the Menu component*/

    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

/*Render comments using dish passed in as props from the Menu component*/
/* map thru array of dishes using props and set comment and details to 'comments'*/
    renderComments(dish){
        const comments = this.props.dish.comments.map ((comments) => {
            return (
                <li style={{ listStyleType: "none", backgroundColor: "green", color: "white"}} key={comments.id}>
                {comments.comment}<br/><br/>--{comments.author} {comments.date}<br/><br/>
                </li>
            );
        });

        if (this.props.dish.comments != null){
            return(
                <div className = "col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    render(){
        if (this.props.dish != null){
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}


export default DishDetail;