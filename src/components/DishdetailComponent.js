import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import moment from 'moment';
    function RenderDish({dish}){
        return(
		<Card>
             <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    function RenderComments({dish}){
        if(dish.comments !=null){
            const comments=dish.comments.map((comment)=>{
                return(
                    <div 
                        key={comment.id}
                        className="list-unstyled"
                    >
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {moment(comment.date).format("MMM Do, YYYY")}</p>
                </div>
                );
            });
            return comments;
        }
        else{
             return(
                <div></div>
            );
        }
    }
    const DishDetail=(props)=>{
            if(props.dish !=null){
                return(
                    <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments dish={props.dish} />
                    </div>
                    </div>
                </div>
                );
            }
            else{
                return(
                    <div></div>
                )
            }
    }

export default DishDetail;