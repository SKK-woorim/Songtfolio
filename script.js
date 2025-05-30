// 모달 열기
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("flex");
}

// 모달 닫기
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // iframe이 있으면 src를 리셋해서 영상 멈춤
  const iframe = modal.querySelector("iframe");
  if (iframe) {
    const src = iframe.src;
    iframe.src = "";
    iframe.src = src;
  }
}

// 모바일 메뉴 토글
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileOverlay");
  const isOpen = !menu.classList.contains("translate-x-full");

  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");
  overlay.classList.toggle("hidden");
}

// 모달 외부 클릭 시 닫기 + 영상 정지 포함
window.onclick = function (event) {
  const modals = document.getElementsByClassName("modal");
  for (let modal of modals) {
    if (event.target === modal) {
      const modalId = modal.id;
      closeModal(modalId); // 여기서도 closeModal() 호출
    }
  }
};
