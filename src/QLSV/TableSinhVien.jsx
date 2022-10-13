import React, { Component } from 'react'

import { connect } from 'react-redux'

class TableSinhVien extends Component {
  state = {
    mangSV: this.props.mangSV
  }

  inputChange = (event) => {
    let { value } = event.target;
    let mangTK = this.props.mangSV.filter((sv) => {
      return sv.hoTen.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      mangSV: mangTK
    })
  }

  renderMangSV = () => {
    return this.state.mangSV.map((sv) => {
      return <tr key={sv.maSV}>
        <td>{sv.maSV}</td>
        <td>{sv.hoTen}</td>
        <td>{sv.sdt}</td>
        <td>{sv.email}</td>
        <td>
          <button onClick={() => {
            let action = {
              type: "XOA_SV",
              maSVXoa: sv.maSV
            }
            this.props.dispatch(action)
          }} className='btn btn-danger'>Xóa</button>
          <button onClick={() => {
            let action = {
              type: "XEM_CT",
              svChiTiet: sv
            }
            this.props.dispatch(action)
          }} className='btn btn-info mx-2'>Xem</button>
        </td>
      </tr>
    })
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      mangSV: newProps.mangSV
    })
  }

  render() {
    return (
      <div className='py-5'>
        <div className="row mb-3">
          <div className="col">
            <div className="input-group">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name="search" className="form-control" placeholder="Tìm tên sinh viên" />
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-search" /></span>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead className='text-light bg-dark'>
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderMangSV()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangSV: rootReducer.QLSVReducer.mangSV
  }
}

export default connect(mapStateToProps)(TableSinhVien)