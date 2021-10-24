const initialState = {
    mangDatCuoc: [
        {ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: false },
        {ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: true },
        {ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: false },
    ],

    ketQua: "Hòa nhau !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: "keo", hinhAnh: "./img/gameOanTuTi/bua.png"},
}

export const BaiTapGameOanTuTiReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'DAT_CUOC_KEO_BUA_BAO': {
            // console.log(action);
            //tạo ra mảng cuwjowcj mới từ mảng cược cũ
            //mọi phần tử trừ phần tử vs maCuoc đc gửi lên thì thành true, còn lại đổi thành false
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if(item.ma === action.maCuoc) {
                    return {...item, datCuoc: true};
                }
                return {...item, datCuoc: false};
            })
            
            //!c2:
            // //tìm ra index của item được chọn nhờ maCuoc đc gửi lên
            // let index = mangCuocUpdate.findIndex(item => item.ma === action.maCuoc);
            // if(index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true;
            // }
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state}
        }


        case 'PLAY_GAME': {
            let soNgauNhien = Math.floor(Math.random() *3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return { ...state};
        }


        case 'END_GAME': {
            //tìm ra quân cờ đc đặt cược
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            //so sánh người chơi và máy tính chơi
            switch(player.ma) {
                case 'keo': {
                    if(computer.ma === 'keo') {
                        state.ketQua = " Hòa nhau !!!";
                    } else if (computer.ma === 'bua') {
                        state.ketQua = "Bạn đã thua sml !!!";
                    } else {
                        state.ketQua = "You win, I love U 3000 !!!";
                        state.soBanThang += 1;
                    }

                    break;
                }

                case 'bua': {
                    if(computer.ma === 'keo') {
                        state.ketQua = " You win, I love U 3000 !!!";
                        state.soBanThang += 1;

                    } else if (computer.ma === 'bua') {
                        state.ketQua = "Hòa nhau !!!";
                    } else {
                        state.ketQua = "Bạn đã thua sml !!!";
                    }

                    break;
                }

                case 'bao': {
                    if(computer.ma === 'keo') {
                        state.ketQua = " Bạn đã thua sml !!!";
                    } else if (computer.ma === 'bua') {
                        state.ketQua = "You win, I love U 3000 !!!";
                        state.soBanThang += 1;

                    } else {
                        state.ketQua = "Hòa nhau !!!";
                    }

                    break;
                }

                default: {
                    state.ketQua = " You win, I love U 3000 !!!";
                    state.soBanThang += 1;
                    
                }
            }

            //mỗi lần chơi dispatch hành động END_GAME  thì +1 số bàn chơi
            state.soBanChoi += 1;
            return { ...state};
        }


        default:
            return { ...state};
        }
}
