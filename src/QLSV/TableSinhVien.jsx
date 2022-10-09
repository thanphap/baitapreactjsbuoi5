import React, { Component } from 'react'

export default class TableSinhVien extends Component {
  render() {
    return (
        <div className='py-5'>
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
            </tbody>
        </table>
    </div>
    )
  }
}
