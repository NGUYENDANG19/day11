// Lấy các button và container của toast
const successButton = document.querySelector('.success');
const warningButton = document.querySelector('.warning');
const errorButton = document.querySelector('.error');
const toastContainer = document.getElementById('toasts');

// Hàm tạo toast
function createToast(message, type) {
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Xử lý sự kiện khi click vào các button
successButton.addEventListener('click', () => {
  createToast('Success!', 'success');
});

warningButton.addEventListener('click', () => {
  createToast('Warning!', 'warning');
});

errorButton.addEventListener('click', () => {
  createToast('Error!', 'error');
});
