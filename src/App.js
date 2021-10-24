import logo from './logo.svg';
import './App.css';
import BtChangeGlasses from './components/BtChangeGlasses/BtChangeGlasses';
import BtShopShoes from './BtShopShoes/BtShopShoes';
import BaiTapGameOanTuTi from './BtRedux/BaiTapGameOanTuTi/BaiTapGameOanTuTi';
import BaiTapBookingTicket from './BtRedux/BaiTapBookingTicket/BaiTapBookingTicket';

function App() {
  return (
    <div className="App">
      {/* <BtChangeGlasses/> */}
      {/* <BtShopShoes/> */}

      {/* <BaiTapGameOanTuTi/> */}

      <BaiTapBookingTicket/>
    </div>
  );
}

export default App;
