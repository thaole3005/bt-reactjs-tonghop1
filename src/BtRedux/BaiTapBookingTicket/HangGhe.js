import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datGheAction } from './../../redux/action/BaiTapBookingTicketAction';


class HangGhe extends Component {

    renderGhe = () => {
        //hàm render ra từng ghế
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disable = false;

            //ghế đã bị người khác đặt (ghế màu vàng)
            if(ghe.daDat === true) {
                cssGheDaDat = 'gheDuocChon';
                disable = true;
            }


            //ghế mình đang chọn (màu xanh)
            let cssGheDangChon = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if(indexGheDangDat !== -1) {
                cssGheDangChon = 'gheDangChon';
            }


            return <button className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} disabled={disable} key = {index}
                onClick = {() => {
                    this.props.dispatch(datGheAction(ghe))
                }}
            > 
                {ghe.soGhe}
            </button>
        })
    }
   

    renderHangNumber = () => {
        return this.props.hangGhe.danhSachGhe.map((number, index) => {
            return <button className ="rowNumber" key = {index}>{number.soGhe}</button>
        })
    }


    renderHangGhe = () => {
       
        {/* nếu là hàng đầu tiên thì chỉ render ra số 1, 2, 3, 4.... */}
        if(this.props.soHangGhe === 0) {
            return <React.Fragment>
                {
                   this.renderHangNumber()
                }
            </React.Fragment>
        } else {
            return <React.Fragment>
                        {this.props.hangGhe.hang}
                        {this.renderGhe()}
                    </React.Fragment>
            }
    }



    render() {
        return (
            <div className="text-light text-left ml-3 mt-2" style ={{fontSize: 20,}}> 
            {/* render ra từng hàng ghế */}
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = rootReducer => {
    return {
        danhSachGheDangDat: rootReducer.BaiTapBookingTicketReducer.danhSachGheDangDat,
    }
}




export default connect(mapStateToProps) (HangGhe);