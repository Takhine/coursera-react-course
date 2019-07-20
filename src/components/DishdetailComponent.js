import React,{Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import moment from 'moment';
class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
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
    renderComments(dish){
        if(dish.comments !=null){
            const comments=dish.comments.map((comment)=>{
                return(
                    <div 
                        key={comment.id}
                        className="list-unstyled"
                    >
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {moment(comment.date). format("MMM Do, YYYY")}</p>
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
    render(){
        return(
            <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                {this.renderComments(this.props.dish)}
                </div>
            </React.Fragment>
        );
    }
}

export default DishDetail;