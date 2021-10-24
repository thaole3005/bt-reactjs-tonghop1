import React, { Component } from "react";
import {connect} from 'react-redux';
import { huyGheAction } from "../../redux/action/BaiTapBookingTicketAction";


class ThongTinGhe extends Component {
  render() {
    return (
      <div>


        <div className="text-left mt-5">
          <button className="gheDuocChon"></button> <span>Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button> <span>Ghế đang đặt</span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>{" "}
          <span>Ghế chưa đặt</span>
        </div>

        <div className = "mt-5" >
            <table className="table" border = "2">
                <thead>
                    <tr className="text-light">
                        <th>Số ghê</th>
                        <th>Gía</th>
                        <th>Hủy</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index} className = "text-warning">
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia.toLocaleString()}</td>
                                <td>
                                    <button className ="btn btn-danger"
                                        onClick = {() => {
                                                this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                            }
                                        }
                                    >Xóa</button>
                                </td>
                            </tr>
                        })
                    }

               
                </tbody>
                
                <tfoot>
                    <tr className = "text-success">
                        <td></td>
                        <td>Tổng tiền:</td>
                        <td>
                            {
                                (this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia;
                                },0)).toLocaleString()
                            }
                        </td>
                    </tr>
                </tfoot>

            </table>

        </div>
      </div>
    );
  }
}


const mapStateToProps = rootReducer => {
    return {
        danhSachGheDangDat: rootReducer.BaiTapBookingTicketReducer.danhSachGheDangDat,
    }
}
 
export default connect(mapStateToProps) (ThongTinGhe);
