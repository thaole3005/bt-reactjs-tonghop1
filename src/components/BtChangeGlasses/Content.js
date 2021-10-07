import React, { Component } from 'react';
import styleModule from './BtChangeGlasses.module.css';
import './StyleBtChangeGlasses.css';
import glassList from '../../data/bt-changeGlasses/bt-changeGlasses.json';

export default class Content extends Component {


    state = {
        url: './img/glassesImage/v6.png',
    }



    changeGlass = (postfix) => {
        this.setState({
            url: `./img${postfix}`,
        })
    }




    renderGlasses = () => {
        return glassList.map((item, index) => {
            return <div className ="col">
                <button className="btn border border-primary"
                    onClick={() => {this.changeGlass(item.url)}}
                >
                <img src = {`./img${item.url}`} className="img-fluid"/>
            </button>
            </div>
        })
    }




    render() {
        return (
            <div className = "container-fluid my-5">
           
          
                    <div className = " bt-content">
                        <div className = "item_content mr-4">
                            <img src = "./img/glassesImage/model.jpg" style = {{maxHeight: '100%', width: '100%'}}/>
                            <img src= {this.state.url} className="glassItem"/>
                            <div className = "item_infor p-2">
                                <h5 className ="text-primary">GUCCI G8759H</h5>
                                <p className="my-0" style ={{fontSize: 15}}>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                            </div>
                        </div>
                    
                    
                        <div className = "item_content ml-4">
                                <img src = "./img/glassesImage/model.jpg" style = {{maxHeight: '100%', width: '100%'}}/>
                            
                        </div>

                    </div>
               
                    <div className="container bg-white p-5 mt-5 glassList">
                        <h4 className="text-primary mb-4">Choose your glass</h4>
                        <div className="row">
                            {this.renderGlasses()}
                        </div>
                    </div>

            </div>
       








        )
    }
}
