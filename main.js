/**
 * (주)제온스(ZEONS) B2B 프리미엄 LED 디스플레이 솔루션 랜딩 페이지
 * Client-Side Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initHeroSlider();
  initTechShowcase();
  initProductTabs();
  initPricingCalculator();
  initReferenceGallery();
  initQuoteForm();
  initMobileMenu();
});

/* ---------------- 00. 헤더 스크롤 및 활성 메뉴 ---------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy 활성 링크 감지
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ---------------- 01. 히어로 슬라이더 (Hero Slider) ---------------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  const progressBar = document.querySelector('.slider-progress-bar');
  if (!slides.length) return;

  let currentIndex = 0;
  const slideInterval = 5500;
  let timer = null;
  let progressAnim = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentIndex = index;
    resetProgress();
  }

  function nextSlide() {
    let next = (currentIndex + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function resetProgress() {
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      setTimeout(() => {
        progressBar.style.transition = `width ${slideInterval}ms linear`;
        progressBar.style.width = '100%';
      }, 50);
    }
  }

  function startAutoplay() {
    stopAutoplay();
    resetProgress();
    timer = setInterval(nextSlide, slideInterval);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  const container = document.querySelector('.hero-slider-container');
  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
  }

  showSlide(0);
  startAutoplay();
}

/* ---------------- 02. COB vs SMD 기술 쇼케이스 ---------------- */
function initTechShowcase() {
  const tabBtns = document.querySelectorAll('.showcase-tab-btn');
  const cobRow = document.querySelectorAll('.spec-cob');
  const smdRow = document.querySelectorAll('.spec-smd');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.tech;
      if (target === 'cob') {
        cobRow.forEach(el => el.closest('.tech-spec-row').classList.add('highlight'));
      } else {
        cobRow.forEach(el => el.closest('.tech-spec-row').classList.remove('highlight'));
      }
    });
  });
}

/* ---------------- 03. 제품 라인업 탭 전환 ---------------- */
function initProductTabs() {
  const tabBtns = document.querySelectorAll('.product-tab-btn');
  const tabContents = document.querySelectorAll('.product-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

/* ---------------- 04. 실시간 맞춤 견적 계산기 ---------------- */
function initPricingCalculator() {
  const spaceRadios = document.querySelectorAll('input[name="calc_space"]');
  const packageRadios = document.querySelectorAll('input[name="calc_package"]');
  const chkAudio = document.getElementById('calc_opt_audio');
  const chkAcoustic = document.getElementById('calc_opt_acoustic');

  const totalRangeEl = document.getElementById('calc_total_display');
  const summarySpaceEl = document.getElementById('calc_summary_space');
  const summarySpecsEl = document.getElementById('calc_summary_specs');
  const summaryAddonsEl = document.getElementById('calc_summary_addons');
  const applyBtn = document.getElementById('calc_apply_btn');

  // 기준 데이터
  const pricingData = {
    office: {
      name: '스마트 회의실 / 세미나룸',
      standard: { min: 2800, max: 3500, spec: 'COB AIO 108" FHD, 올인원 스탠드' },
      premium: { min: 3800, max: 4800, spec: 'COB AIO 135" FHD, ±2mm IR 터치, 무선 미러링' },
      flagship: { min: 5500, max: 7200, spec: 'COB AIO 163"~216" 4K UHD 패키지' }
    },
    auditorium: {
      name: '대형 강당 / 컨벤션 홀',
      standard: { min: 6500, max: 8000, spec: '실내용 고해상도 비디오월 (~2000 수준)' },
      premium: { min: 8500, max: 12000, spec: 'P1.2~P1.5 Ultra-Fine Pitch 비디오월 (~2500 수준)' },
      flagship: { min: 13000, max: 19000, spec: '초대형 와이드 COB 비디오월 + 이중화 백업 시스템' }
    },
    landmark: {
      name: '건물 외벽 / 랜드마크 파사드',
      standard: { min: 18000, max: 23000, spec: '외벽 투명 LED (투과율 65%+, 방수 내후성)' },
      premium: { min: 24000, max: 31000, spec: 'P5.0mm 1440x2700 8EA 초대형 미디어 파사드' },
      flagship: { min: 33000, max: 48000, spec: '건축 일체형 코너 곡면 투명/옥외 초대형 턴키' }
    }
  };

  function updateCalculator() {
    let currentSpace = 'office';
    spaceRadios.forEach(r => { if (r.checked) currentSpace = r.value; });

    let currentPkg = 'premium';
    packageRadios.forEach(r => { if (r.checked) currentPkg = r.value; });

    const base = pricingData[currentSpace][currentPkg];
    let minPrice = base.min;
    let maxPrice = base.max;

    let addons = [];
    if (chkAudio && chkAudio.checked) {
      if (currentSpace === 'office') {
        minPrice += 300; maxPrice += 600;
        addons.push('회의용 통합 AV 마이크/사운드바');
      } else if (currentSpace === 'auditorium') {
        minPrice += 1200; maxPrice += 2200;
        addons.push('프로페셔널 PA 라인어레이 & 믹서');
      } else {
        minPrice += 800; maxPrice += 1500;
        addons.push('외부 음향 연동 옥외 스피커');
      }
    }

    if (chkAcoustic && chkAcoustic.checked) {
      if (currentSpace === 'office') {
        minPrice += 400; maxPrice += 800;
        addons.push('소음 차단 및 흡음 패널');
      } else if (currentSpace === 'auditorium') {
        minPrice += 2000; maxPrice += 3800;
        addons.push('강당 전문 어쿠스틱 흡음·구조 보강 공사');
      } else {
        minPrice += 1500; maxPrice += 3000;
        addons.push('외벽 구조안전 하중 보강 프레임');
      }
    }

    // 화면 반영
    if (totalRangeEl) {
      const minFormatted = (minPrice / 10000).toFixed(1) === '0.0' ? `${minPrice.toLocaleString()}만 원` : `${(minPrice / 10000).toFixed(2).replace(/\.?0+$/, '')}억 원`;
      const maxFormatted = (maxPrice / 10000).toFixed(1) === '0.0' ? `${maxPrice.toLocaleString()}만 원` : `${(maxPrice / 10000).toFixed(2).replace(/\.?0+$/, '')}억 원`;
      
      // 만원 단위 표시 최적화
      let displayText = '';
      if (minPrice < 10000 && maxPrice < 10000) {
        displayText = `약 ${minPrice.toLocaleString()}만 ~ ${maxPrice.toLocaleString()}만 원`;
      } else if (minPrice < 10000 && maxPrice >= 10000) {
        displayText = `약 ${minPrice.toLocaleString()}만 ~ ${(maxPrice/10000).toFixed(1)}억 원`;
      } else {
        displayText = `약 ${(minPrice/10000).toFixed(1)}억 ~ ${(maxPrice/10000).toFixed(1)}억 원`;
      }
      totalRangeEl.innerText = displayText;
    }

    if (summarySpaceEl) summarySpaceEl.innerText = pricingData[currentSpace].name;
    if (summarySpecsEl) summarySpecsEl.innerText = base.spec;
    if (summaryAddonsEl) {
      summaryAddonsEl.innerText = addons.length ? addons.join(', ') : '선택 안 됨 (디스플레이 단독)';
    }
  }

  // 리스너 연결
  spaceRadios.forEach(r => r.addEventListener('change', updateCalculator));
  packageRadios.forEach(r => r.addEventListener('change', updateCalculator));
  if (chkAudio) chkAudio.addEventListener('change', updateCalculator);
  if (chkAcoustic) chkAcoustic.addEventListener('change', updateCalculator);

  // 이 조건으로 견적 폼 채우고 스크롤 이동
  if (applyBtn) {
    applyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let currentSpace = 'office';
      spaceRadios.forEach(r => { if (r.checked) currentSpace = r.value; });

      const spaceSelect = document.getElementById('quote_space_type');
      if (spaceSelect) {
        if (currentSpace === 'office') spaceSelect.value = 'meeting_room';
        else if (currentSpace === 'auditorium') spaceSelect.value = 'auditorium';
        else spaceSelect.value = 'facade';
      }

      const quoteSpec = document.getElementById('quote_desired_spec');
      if (quoteSpec && summarySpecsEl) {
        quoteSpec.value = summarySpecsEl.innerText;
      }

      const formChkAudio = document.getElementById('opt_audio_system');
      const formChkAcoustic = document.getElementById('opt_acoustic_interior');
      if (formChkAudio && chkAudio) formChkAudio.checked = chkAudio.checked;
      if (formChkAcoustic && chkAcoustic) formChkAcoustic.checked = chkAcoustic.checked;

      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  updateCalculator();
}

/* ---------------- 05. 주요 시공 사례 갤러리 및 라이트박스 ---------------- */
function initReferenceGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-card');
  const modalBackdrop = document.getElementById('gallery-lightbox-modal');
  const modalImg = document.getElementById('modal-lightbox-img');
  const modalTitle = document.getElementById('modal-lightbox-title');
  const modalDesc = document.getElementById('modal-lightbox-desc');
  const modalClose = document.getElementById('modal-lightbox-close');

  // 필터링
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 라이트박스 클릭 열기
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('.gallery-card-img');
      const title = card.querySelector('.gallery-card-title');
      const desc = card.querySelector('.gallery-card-subtitle');
      const detailInfo = card.dataset.details || '';

      if (modalImg && img) modalImg.src = img.src;
      if (modalTitle && title) modalTitle.innerText = title.innerText;
      if (modalDesc && desc) {
        modalDesc.innerHTML = `<p style="margin-bottom:8px; color:#fff; font-weight:600;">${desc.innerText}</p><p style="color:#94a3b8; font-size:0.875rem; line-height:1.6;">${detailInfo}</p>`;
      }

      if (modalBackdrop) modalBackdrop.classList.add('active');
    });
  });

  // 모달 닫기
  if (modalClose && modalBackdrop) {
    modalClose.addEventListener('click', () => modalBackdrop.classList.remove('active'));
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('active');
    });
  }
}

/* ---------------- 06. B2B 간편 견적 문의 폼 처리 ---------------- */
function initQuoteForm() {
  const quoteForm = document.getElementById('b2b-quote-form');
  const fileDropzone = document.getElementById('file-dropzone');
  const fileInput = document.getElementById('quote-file-input');
  const fileListContainer = document.getElementById('uploaded-files-list');
  const successModal = document.getElementById('quote-success-modal');
  const modalCloseBtn = document.getElementById('quote-modal-close');
  const confirmBtn = document.getElementById('quote-modal-confirm-btn');

  let uploadedFiles = [];

  // 파일 업로드 드래그 앤 드롭
  if (fileDropzone && fileInput) {
    fileDropzone.addEventListener('click', () => fileInput.click());

    fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileDropzone.classList.add('dragover');
    });

    fileDropzone.addEventListener('dragleave', () => {
      fileDropzone.classList.remove('dragover');
    });

    fileDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      fileDropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length) {
        handleFiles(e.dataTransfer.files);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
        handleFiles(fileInput.files);
      }
    });
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      uploadedFiles.push(files[i]);
    }
    renderFileList();
  }

  function renderFileList() {
    if (!fileListContainer) return;
    fileListContainer.innerHTML = '';
    uploadedFiles.forEach((file, index) => {
      const chip = document.createElement('div');
      chip.className = 'uploaded-file-chip';
      chip.innerHTML = `
        <span>📄 ${file.name} (${(file.size / 1024).toFixed(1)} KB)</span>
        <button type="button" class="file-remove-btn" data-index="${index}">✕</button>
      `;
      fileListContainer.appendChild(chip);
    });

    // 삭제 버튼 리스너
    document.querySelectorAll('.file-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index, 10);
        uploadedFiles.splice(idx, 1);
        renderFileList();
      });
    });
  }

  // 폼 제출 이벤트
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const company = document.getElementById('quote_company').value.trim();
      const name = document.getElementById('quote_name').value.trim();
      const phone = document.getElementById('quote_phone').value.trim();
      const email = document.getElementById('quote_email').value.trim();
      const privacy = document.getElementById('quote_privacy_agree').checked;

      if (!company || !name || !phone || !email) {
        alert('필수 입력 항목(회사명, 담당자명, 연락처, 이메일)을 모두 작성해 주세요.');
        return;
      }

      if (!privacy) {
        alert('개인정보 수집 및 상담 안내에 동의해 주세요.');
        return;
      }

      // 접수 번호 난수 생성
      const orderNum = 'ZEONS-' + new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + Math.floor(1000 + Math.random() * 9000);
      const orderNumEl = document.getElementById('success-order-id');
      if (orderNumEl) orderNumEl.innerText = orderNum;

      const clientInfoEl = document.getElementById('success-client-info');
      if (clientInfoEl) {
        clientInfoEl.innerText = `${company} (${name} 담당자님 / ${phone})`;
      }

      // 성공 모달 오픈
      if (successModal) {
        successModal.classList.add('active');
      }

      // 폼 리셋
      quoteForm.reset();
      uploadedFiles = [];
      renderFileList();
    });
  }

  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => successModal.classList.remove('active'));
  }
  if (confirmBtn && successModal) {
    confirmBtn.addEventListener('click', () => successModal.classList.remove('active'));
  }
}

/* ---------------- 07. 모바일 메뉴 ---------------- */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    if (isOpen) {
      navMenu.style.display = '';
    } else {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '80px';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = 'rgba(4, 7, 17, 0.98)';
      navMenu.style.padding = '24px';
      navMenu.style.borderBottom = '1px solid rgba(34, 211, 238, 0.3)';
    }
  });

  // 메뉴 클릭 시 닫기
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.style.display = '';
      }
    });
  });
}
