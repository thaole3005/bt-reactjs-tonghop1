import React, { Component } from 'react'
import ProductItem from './ProductItem';



export default class ProductList extends Component {



    renderShoesList = () => {
        const {shoesList, changeDetailShoes} = this.props;
        return shoesList.map((item, index) => {
            return <ProductItem key = {index} item = {item} changeDetailShoes = {changeDetailShoes} />
        })
    }



    render() {
        return (
            <div className = "container my-5">
                <div className = "row">
                    {this.renderShoesList()}
                </div>
        </div>
        )
    }
}
