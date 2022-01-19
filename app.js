const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const buyBtns = $$('.js-buy-ticket')
const modal = $('.js-modal')
const modalContainer = $('.js-modal-container')
const modalClose = $('.js-modal-close')
const modalCloseBtn = $('.js-modal-footer-close')
const mobileMenu = $('.mobile-menu-btn')
const header = $('#header')
const headerHeight = header.clientHeight
// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}
// Hàm ẩn modal mua vé (xóa class open của modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

// Lặp qua từng thẻ button và nghe hành vi click
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Lắng nghe hành vi click vào close
modalClose.addEventListener('click', hideBuyTickets)
modalCloseBtn.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
})

// Đóng mở mobile menu
mobileMenu.onclick = function() {
    const isClosed = header.clientHeight === headerHeight;
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
const menuItems = $$('.nav li a[href*="#"]')
for(let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]
    
    menuItem.onclick = function(e) {
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(!isParentMenu) {
            header.style.height = null;
        } else {
            e.preventDefault();
            // header.style.overflow = 'unset';
        }
    }
}