import React, { Component } from "react";

export default class ShoesModal extends Component {
  render() {
      let {detailShoes} = this.props;
    return (
      <div
        className="modal fade"
        id="detailModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {detailShoes.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
                <img src = {detailShoes["image"]}/>
                <h3 className ="text-success text-center">Thông tin sản phẩm</h3>
                <h5> <strong>Giá:</strong> {detailShoes.price}</h5>
                <h5> <strong>Mô tả: </strong> {detailShoes.shortDescription}</h5>
                <h5><strong>Số lượng: </strong>{detailShoes.quantity}</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
