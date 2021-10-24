import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import HangGhe from './HangGhe';
import ThongTinGhe from './ThongTinGhe';
import danhSachGheData from '../../data/BaiTapBookingTicket/danhSachGhe.json';

class BaiTapBookingTicket extends Component {


    renderHangGhe = () => {
        //render ra từng hàng ghế
        return danhSachGheData.map((hangGhe, index) => {
            return (
                <React.Fragment key ={index}>
                    <HangGhe hangGhe = {hangGhe} soHangGhe = {index}/>
                </React.Fragment>
            )
        })
    }



    render() {
        return (
            <div className="bookingMovie" style = {{position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url("./img/bookingTicket/bgmovie.jpg")', backgroundSize: 'cover',}}>
               <div style = {{position: 'fixed', width: '100%', height: '100%' ,backgroundColor: 'rgba(0,0,0,0.6',}}></div>

            <div className="container-fluid text-light mt-1">
                <div className="row">
                        <div className="col-8">
                            <h1 className="text-warning"> Bài tập đặt vé </h1>
                            <div style = {{fontSize: '25px'}} >Màn hình</div>
                            <div className = "d-flex flex-column justify-content-center mt-1">
                                <div className="screen"></div>
                                {this.renderHangGhe()}
                            </div>

                        </div>

                        <div className="col-4">
                            <h2 className="text-primary"> Danh sách ghê bạn chọn </h2>
                            <ThongTinGhe/>

                        </div>
                </div>
            </div>

               

            </div>
        );
    }
}

export default BaiTapBookingTicket;