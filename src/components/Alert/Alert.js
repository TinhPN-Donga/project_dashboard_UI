import Swal from "sweetalert2";

// success
export const Alert = (title, message, icon, confirmButtonText,timer) => {
  return Swal.fire({
    timer: timer || 1500, //1500
    title: title, //'Đăng nhập'
    text: message, //'Thành công'
    icon: icon, //'success' or 'error' or 'warning'
    confirmButtonText: confirmButtonText, //'OK'
  });
};

// delete
export const DeleteAlert = (onDelete) => {
  Swal.fire({
    title: "Bạn chắc chắn muốn xóa?",
    text: "Bạn sẽ không nhìn thấy sản phẩm này nữa!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete(); // gọi hàm xóa
      Swal.fire({
        title: "Đã xóa!",
        icon: "success",
      });
    }
  });
};