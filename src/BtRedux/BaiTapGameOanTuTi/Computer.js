import React, { Component } from 'react';
import {connect} from 'react-redux';


class Computer extends Component {


    render() {

        //định nghĩa 1 keyframe
        //! mỗi lần load tạo 1 keyframe mới, vì nếu mỗi lần laod lại mà trùng keyframe thì sẽ không thực hiện animation đó
        let keyframe = `@keyframes randomItem${Date.now()} {
            0%   {top: 0px;}
            25%  {top: -50px;}
            50%  {top: 0px;}
            75%  {top: 50px;}
            100% {top: 0px;}
          }`

        let {computer} = this.props;
        return (
            <div className = "playerGame">
                {/* nhúng keyframe mỗi lần load lại component */}
                <style>
                    {keyframe}
                </style>
                <div className="thought" style = {{position: "relative"}}>
                    <img src = {computer.hinhAnh} style ={{position: 'absolute', transform: 'rotate(120deg)', animation: `randomItem${Date.now()} 0.1s`}} className="mt-3" width = {100}/>
                </div>
                <div className="speech-bubble"></div>
                <img style = {{width: 100, height: 100}} src = "./img/gameOanTuTi/playerComputer.png" alt="computer"/>
            </div>
        );
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        computer: rootReducer.BaiTapGameOanTuTiReducer.computer,
    }
}


export default connect(mapStateToProps) (Computer);