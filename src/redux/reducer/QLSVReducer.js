const initialState = {
    mangSV: [
        { maSV: "SV01", hoTen: "Nguyễn Thị A", sdt: "0914344333", email: "test1@gmail.com" },
        { maSV: "SV02", hoTen: "Nguyễn Văn B", sdt: "0914344657", email: "test2@gmail.com" },
    ],
    svChiTiet: {
        maSV: "",
        hoTen: "",
        sdt: "",
        email: "",
    }
}

export const QLSVReducer = (state = initialState, action) => {
    switch (action.type) {
        case "THEM_SV":
            state.mangSV = [...state.mangSV, action.sinhVien]
            state.svChiTiet = {
                maSV: "",
                hoTen: "",
                sdt: "",
                email: "",
            }
            return { ...state }
        case "XOA_SV":
            console.log(action.maSVXoa)
            state.mangSV = state.mangSV.filter((sv) => {
                return sv.maSV !== action.maSVXoa
            })
            return { ...state }
        case "XEM_CT":
            console.log(action.svChiTiet)
            state.svChiTiet = action.svChiTiet
            return { ...state }
        case "CAPNHAP_SV":
            let svIndex = state.mangSV.findIndex((sv) => {
                return sv.maSV === action.sinhVien.maSV
            })
            if(svIndex !== -1){
                state.mangSV[svIndex] = action.sinhVien
            }
            state.mangSV = [...state.mangSV]
            state.svChiTiet = {
                maSV: "",
                hoTen: "",
                sdt: "",
                email: "",
            }
            return { ...state }
        default:
            return state
    }
}
