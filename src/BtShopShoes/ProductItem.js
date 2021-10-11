
import React, { Component } from 'react'


export default class ProductItem extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="col-4 mt-4 ">
                <div className="card border-primary">
                    <img src= {item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                       <strong>Gía: </strong>{item.price}
                    </p>
                    <div className = "d-flex justify-content-center">

                        <button className="btn btn-success">
                            Add to cart
                        </button>
                        <button className="btn btn-primary ml-3" data-toggle="modal" data-target="#detailModal"
                            onClick= { () => {this.props.changeDetailShoes(item)}}
                            >
                            Show details
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
