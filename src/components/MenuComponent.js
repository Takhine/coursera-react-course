import React,{Component} from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

// child component
import DishDetail from './DishdetailComponent';
class Menu extends Component{
	constructor(props){
		super(props);
		this.state={
			selectedDish: null
		}
		console.log('Menu component constructor is invoked');
	}
	componentDidMount(){
		console.log('Menu component componentDidMount is invoked');
	}
	onDishSelect(dish){
		this.setState({selectedDish: dish});
	}
	renderDish(dish){
		if(dish !=null){
			return(
				<DishDetail dish={dish} />
			);
		}
		else{
			return(
				<div></div>
			)
		}
	}
	render(){
		const menu=this.props.dishes.map((dish)=>{
			return(
				<div 
					key={dish.id}
					className="col-12 col-md-5 m-1"			
				>
					<Card onClick={()=>this.onDishSelect(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name}/>							
						<CardImgOverlay className="ml-5">
						 <CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
				);
		});
		console.log('Menu component render is invoked');
		return(
			<div className="container">
				<div className="row">
						{menu}
				</div>
				<div className="row">
					{this.renderDish(this.state.selectedDish)}
				</div>
			</div>
		);
	}
}

export default Menu;