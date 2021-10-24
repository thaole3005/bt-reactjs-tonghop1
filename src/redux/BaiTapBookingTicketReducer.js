import { DAT_GHE, HUY_GHE } from './constants/BaiTapBookingTicketType';
const initialState = {
    danhSachGheDangDat:[
        {"soGhe":"B2","gia":75000},
        {"soGhe":"E6","gia":75000},
    ]
}

export const BaiTapBookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {

    case DAT_GHE: {
        let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);

        if(index !== -1) {
            //ghế này đã có trong mảng ghế đc chọn => hủy ghế đã đc chọn
            danhSachGheDangDatUpdate.splice(index, 1);
            
        } else {
            //ghế này chưa có trong mảng ghế đc chọn => thêm 1 ghế mới
            danhSachGheDangDatUpdate.push(action.ghe);
        }
        state.danhSachGheDangDat = danhSachGheDangDatUpdate;
        return { ...state}
    }


    case HUY_GHE: {
        let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
        if(index !== -1) {
            danhSachGheDangDatUpdate.splice(index, 1);
        }
        state.danhSachGheDangDat = danhSachGheDangDatUpdate;
        return { ...state}
    }


    default:
        return state
    }
}
