// ============== 모달팝업 작업 시작 ==============

const pageHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

// header 수정 모달 관련 요소 정보
const header_modal = document.querySelector('.header-modal');
const header_modalOpen = document.querySelector('.header-icon');
const header_modalClose = document.querySelector('.header-close_btn');

// 사이드 menu 정보 관련 요소 정보
const menu_modal = document.querySelector('.menu-modal');
const menu_modalOpen = document.querySelector('.menu-icon');
const menu_modalClose = document.querySelector('.menu-close_btn');



// ================= header 모달 함수 ====================
//열기 버튼을 눌렀을 때 모달팝업이 열림
header_modalOpen.addEventListener('click',function(){
    header_modal.style.display = 'block';
    header_modal.style.height = (pageHeight+200) + 'px';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
header_modalClose.addEventListener('click',function(){
    header_modal.style.display = 'none';
});
// ================= header 모달 함수 종료 ====================


// ================= menu 모달 함수 ====================
menu_modalOpen.addEventListener('click',function(){
    menu_modal.style.display = 'block';
    menu_modal.style.height = (pageHeight+200) + 'px';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
menu_modalClose.addEventListener('click',function(){
    menu_modal.style.display = 'none';
});
// ================= menu 모달 함수 종료 ====================
