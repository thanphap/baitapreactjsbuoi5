import React, { Component } from 'react'

export default class FormDangKy extends Component {
    render() {
        return (
            <form className='text-left'>
                <h3 className='text-light bg-dark p-2'>Thông tin sinh viên</h3>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="masv">Mã SV</label>
                        <input type="text" className="form-control" id="masv" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="hoten">Họ tên</label>
                        <input type="text" className="form-control" id="hoten" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="std">Số điện thoại</label>
                        <input type="text" className="form-control" id="std" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="std">Email</label>
                        <input type="text" className="form-control" id="std" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <button className="btn btn-success" type="submit">Thêm sinh viên</button>
            </form>
        )
    }
}
