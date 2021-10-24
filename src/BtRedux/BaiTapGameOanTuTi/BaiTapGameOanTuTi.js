import React, { Component } from 'react';
import './BaiTapGameOanTuTi.css';
import Player from './Player';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import {connect} from 'react-redux';


class BaiTapGameOanTuTi extends Component {


    render() {
        return (
            <div className="gameOanTuTi">

                <div className = "row mt-5">
                    <div className = "col-4">
                        <Player/>
                    </div>
                    <div className = "col-4 text-center">
                        <KetQuaTroChoi/>
                        <button className="btn btn-primary mt-5"
                            onClick = {() => {
                                //mỗi lần click nút play game thì dispatch lên redux 10 lần để random quân cược 10 lần
                                //khai báo hàm lặp đi lặp lại 10 lần
                                let count = 0;
                                let randomComputerItem = setInterval(()=> {
                                    this.props.dispatch({
                                        type: 'PLAY_GAME',
                                    });
                                    count ++;
                                    if(count >= 15) {
                                        clearInterval(randomComputerItem);
                                        //ở lần  cuối cùng thì dispatch action endgame
                                        this.props.dispatch({
                                            type: 'END_GAME',
                                            
                                        })
                                    }
                                }, 100)

                              
                            }}
                        >Play game</button>

                    </div>
                    <div className = "col-4">
                        <Computer/>
                    </div>

                </div>
            </div>
        );
    }
}



export default connect () (BaiTapGameOanTuTi);