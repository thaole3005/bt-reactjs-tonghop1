import React, { Component } from 'react';
import {connect} from 'react-redux';
import { rootReducer } from './../../redux/configStore';
import { BaiTapGameOanTuTiReducer } from './../../redux/BaiTapGameOanTuTiReducer';

class Player extends Component {
    render() {
        const {mangDatCuoc} = this.props
        console.log("mangDatCuoc", mangDatCuoc);
        return (
            <div className = "playerGame">
                <div className="thought">
                    <img src = {mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} className="mt-3" style ={{transform: 'rotate(120deg)'}} width = {100}/>
                </div>
                <div className="speech-bubble"></div>
                <img style = {{width: 100, height: 100}} src = "./img/gameOanTuTi/player.png" alt="player"/>

                <div className="row">
                        {
                            mangDatCuoc.map((item, index) => {
                                //thêm viền cho item có thuộc tính datCuoc là true
                                let border = {};
                                if(item.datCuoc === true) {
                                    border = {border: '3px solid orange'}
                                }

                                return <div className="col-4" key = {index}>
                                            <button className="btnItemGame" style = {border}
                                                onClick = {() => {
                                                    this.props.datCuoc(item.ma);
                                                }}
                                            >
                                            <img src = {item.hinhAnh} style = {{width: 50, height: 50}} alt = "./img/gameOanTuTi/bao.png"/>
                                            </button>
                                        </div>
                            })
                        }

                </div>
            </div>
        );
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        mangDatCuoc: rootReducer.BaiTapGameOanTuTiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'DAT_CUOC_KEO_BUA_BAO',
                maCuoc,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Player);