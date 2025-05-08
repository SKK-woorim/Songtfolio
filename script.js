// 모달 열기
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.getElementById(id).classList.add('flex');
}

// 모달 닫기
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.getElementById(id).classList.remove('flex');
}

// 모바일 메뉴 토글 (햄버거 → 슬라이드 메뉴)
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = !menu.classList.contains('translate-x-full');

  // 메뉴 및 오버레이 토글
  menu.classList.toggle('translate-x-full');
  menu.classList.toggle('translate-x-0');
  overlay.classList.toggle('hidden');
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let modal of modals) {
    if (event.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }
}
