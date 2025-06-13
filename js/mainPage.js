// ============== 모달팝업 작업 시작 ==============

const pageHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.write-post-icon');
const modalClose = document.querySelector('.close_btn');

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click',function(){
    //alert("테스트");
    
    modal.style.display = 'block';
    modal.style.height = pageHeight + 'px';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
    modal.style.display = 'none';
});

// ============== 모달팝업 작업 종료 ==============