import React, { Component } from 'react';
import {connect} from 'react-redux';


class KetQuaTroChoi extends Component {
    render() {
        let {ketQua, soBanThang, soBanChoi} = this.props.BaiTapGameOanTuTiReducer;
        return (
            <div>
                <div className="display-4 text-warning">{ketQua}</div>
                <h2 className="text-success">
                    Số bàn thắng: <span className="text-warning">{soBanThang}</span>
                </h2>
                <h2 className="text-success">
                    Tổng lần chơi: <span className="text-warning">{soBanChoi}</span>
                </h2>
            </div>
        );
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        BaiTapGameOanTuTiReducer: rootReducer.BaiTapGameOanTuTiReducer,
    }
}



export default connect(mapStateToProps) (KetQuaTroChoi);