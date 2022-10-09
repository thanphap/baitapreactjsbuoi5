import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableSinhVien from './TableSinhVien'

export default class QLSV extends Component {
  render() {
    return (
      <div className='container py-5'>
        <FormDangKy/>
        <TableSinhVien/>
      </div>
    )
  }
}
