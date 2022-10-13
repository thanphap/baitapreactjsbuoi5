import React, { Component } from 'react'

import { connect } from 'react-redux'

class FormDangKy extends Component {
    state = {
        values: {
            maSV: "",
            hoTen: "",
            sdt: "",
            email: ""
        },
        errors: {
            maSV: "",
            hoTen: "",
            sdt: "",
            email: ""
        }
    }

    inputChange = (event) => {
        let { value, name } = event.target;
        let newValues = { ...this.state.values, [name]: value }
        let newErrors = { ...this.state.errors }
        let errorMsg = "";

        let typeVal = event.target.getAttribute("typeinput");
        if (typeVal === "maso") {
            let isExist = false;
            isExist = this.props.mangReducer.mangSV.some(function (sv) {
                return sv.maSV.toLowerCase() === value.replaceAll(" ", "").toLowerCase();
            });
            if (isExist) {
                errorMsg = "Mã sinh viên đã tồn tại!"
            }
        }

        if (typeVal === "string") {
            let pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
            if (!value.match(pattern)) {
                errorMsg = "Tên sinh viên chỉ chứa ký tự chữ"
            }
        }

        if (typeVal === "email") {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regex.test(value)) {
                errorMsg = "Email không đúng định dạng!"
            }

        }

        if (typeVal === "number") {
            let pattern = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
            if (!value.match(pattern)) {
                errorMsg = "Số điện thoại không đúng định dạng! Ví dụ: 0981234567"
            }
        }

        if (value.trim() === "") {
            errorMsg = "Vui lòng nhập dữ liệu vào trường này!"
        }

        newErrors[name] = errorMsg

        this.setState({
            values: newValues,
            errors: newErrors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let isValid = true;
        for (const key in this.state.errors) {
            if (this.state.errors[key] !== "") {
                isValid = false;
                break;
            }
        }
        for (const key in this.state.values) {
            if (this.state.values[key] === "") {
                isValid = false;
                break;
            }
        }

        let isExist = false;
        let {maSV} = this.state.values 
        isExist = this.props.mangReducer.mangSV.some(function (sv) {
            return sv.maSV.toLowerCase() === maSV.replaceAll(" ", "").toLowerCase();
        });

        if (isExist) {
            isValid = false;
        }

        if (!isValid) {
            alert("Dữ liệu nhập vào không hợp lệ");
            return;
        }
        let action = {
            type: "THEM_SV",
            sinhVien: this.state.values
        }
        this.props.dispatch(action)
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        this.setState({
            values: newProps.mangReducer.svChiTiet
        })
    }

    render() {
        let { maSV, hoTen, sdt, email } = this.state.values
        return (
            <form onSubmit={(event) => {
                this.handleSubmit(event)
            }} className='text-left'>
                <h3 className='text-light bg-dark p-2'>Thông tin sinh viên</h3>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="masv">Mã SV</label>
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={maSV} typeinput='maso' type="text" name='maSV' className="form-control" id="masv" />
                        <p className="text-danger">
                            {this.state.errors.maSV}
                        </p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="hoten">Họ tên</label>
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={hoTen} typeinput='string' type="text" name='hoTen' className="form-control" id="hoten" />
                        <p className="text-danger">
                            {this.state.errors.hoTen}
                        </p>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="std">Số điện thoại</label>
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={sdt} typeinput='number' type="text" name='sdt' className="form-control" id="std" />
                        <p className="text-danger">
                            {this.state.errors.sdt}
                        </p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="std">Email</label>
                        <input onChange={(event) => {
                            this.inputChange(event)
                        }} value={email} typeinput='email' type="text" name='email' className="form-control" id="std" />
                        <p className="text-danger">
                            {this.state.errors.email}
                        </p>
                    </div>
                </div>
                <button className="btn btn-success" type="submit">Thêm sinh viên</button>
                <button onClick={() => {
                    let action = {
                        type: "CAPNHAP_SV",
                        sinhVien: this.state.values
                    }
                    this.props.dispatch(action)
                }} className="btn btn-info mx-2" type='button'>Cập nhập</button>
            </form>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangReducer: rootReducer.QLSVReducer
    }
}

export default connect(mapStateToProps)(FormDangKy)