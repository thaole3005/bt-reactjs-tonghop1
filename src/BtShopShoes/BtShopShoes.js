import React, { Component } from 'react'
import ProductList from './ProductList';
import ShoesModal from './ShoesModal';
import shoesData from '../data/BtShopShoes/BtShopShoes.json';


export default class BtShopShoes extends Component {

    state = {
        detailShoes: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
          },
    }



    changeShoesModal = (choosenShoes) => {
        this.setState({
            detailShoes: choosenShoes,
        })
    }


    render() {
        return (
            <div>
                <h2 className="bg-dark text-white text-center mt-5 p-3">Shoes Shop</h2>
                <ProductList shoesList = {shoesData} changeDetailShoes = {this.changeShoesModal}/>
                <ShoesModal detailShoes = {this.state.detailShoes}/>
            </div>
        )
    }
}
