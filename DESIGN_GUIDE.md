# 🌌 ZEONS IP 위치정보 서비스 디자인 가이드 (Design System Guide)

> **Supanova Design System Specifications**  
> 본 문서는 주식회사 제온스(ZEONS, Inc.)의 **"IP 위치정보 서비스(Near-IP)"** 웹 애플리케이션 및 브랜딩을 위한 공식 디자인 가이드라인입니다.

---

## 📑 목차
1. [디자인 철학 & 원칙](#1-디자인-철학--원칙)
2. [컬러 시스템 (Color Palette)](#2-컬러-시스템-color-palette)
3. [타이포그래피 (Typography)](#3-타이포그래피-typography)
4. [글래스모피즘 & 레이아웃 (Glassmorphism & Depth)](#4-글래스모피즘--레이아웃-glassmorphism--depth)
5. [UI 컴포넌트 규격 (Components)](#5-ui-컴포넌트-규격-components)
6. [모션 & 인터랙션 가이드 (Motion & Interaction)](#6-모션--인터랙션-가이드-motion--interaction)
7. [아이콘 & 에셋 규격 (Icons & Assets)](#7-아이콘--에셋-규격-icons--assets)

---

## 1. 디자인 철학 & 원칙

**"Deep Cosmic Space meets Precision Intelligence"**  
ZEONS IP 위치정보 서비스는 방대한 인터넷 네트워크 데이터를 초고속으로 분석하는 기술의 신뢰성과 미래지향적 감각을 전달하기 위해 **Supanova 디자인 스타일**을 지향합니다.

- **High Precision (초정밀)**: 5ms 초저지연 API와 실시간 데이터의 정확성을 차분한 다크 배경과 사이버네틱 하이라이트로 시각화.
- **Dimensional Depth (공간적 깊이감)**: 유리 질감(Glassmorphism), 다중 레이어 블러, 앰비언트 라이트 오로라로 입체적인 UI 구현.
- **Functional Cleanliness (기능적 명료성)**: 복잡한 기술 스펙과 코드를 개발자와 의사결정자가 한눈에 파악할 수 있는 고대비 컴포넌트 설계.

---

## 2. 컬러 시스템 (Color Palette)

### 2.1 Primary & Background Colors
| 역할 | 이름 | HEX 코드 | RGB / Tailwind | 설명 |
| :--- | :--- | :--- | :--- | :--- |
| **Deep Space Canvas** | Navy 950 | `#040711` | `rgb(4, 7, 17)` | 최하단 기본 배경색 |
| **Surface Dark** | Navy 900 | `#090E1C` | `rgb(9, 14, 28)` | 입력 폼 및 터미널 윈도우 배경 |
| **Glass Card Surface** | Slate 900 / 65% | `#0F172A` | `rgba(15, 23, 42, 0.65)` | 글래스모피즘 기본 카드 배경 |
| **Border Translucent** | White / 10% | `#FFFFFF` | `rgba(255, 255, 255, 0.10)` | 유리 테두리 기본 선 |

### 2.2 Cybernetic Accent Colors (Brand Neon)
| 역할 | 이름 | HEX 코드 | 용도 |
| :--- | :--- | :--- | :--- |
| **Primary Cyan Glow** | Cyan 400 | `#22D3EE` | 핵심 CTA 버튼 보더, 레이더 빔, 강조 텍스트 |
| **Deep Cyan** | Brand 500 | `#06B6D4` | 메인 브랜드 포인트, 배지 배경, 프로그레스 바 |
| **Cyber Blue** | Blue 500 | `#3B82F6` | 통신사 및 인프라 강조, 그라데이션 서브 톤 |
| **Success Emerald** | Emerald 400 | `#34D399` | 신뢰도 98%+, 보안 준수, 시스템 정상 가동 표시 |
| **Dynamic Violet** | Purple 400 | `#C084FC` | 타겟 마케팅, 고유 코드 및 파라미터 하이라이트 |
| **Alert Red** | Red 500 | `#EF4444` | 이상 징후 감지, FDS 보안 차단, 에러 상태 |

---

## 3. 타이포그래피 (Typography)

### 3.1 폰트 패밀리
- **단일 전역 시스템 폰트**: `Paperlogy` (모든 한글, 영문, 숫자, 코드, IP 주소, 터미널 100% 단일 서체 통일)
- **보조 폴백 폰트**: `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `Roboto`, `sans-serif`

### 3.2 공식 글자 굵기 (Font Weight) 계층 규격
| 굵기 (Weight) | 명칭 (Name) | 적용 대상 및 UI 요소 | Tailwind 클래스 |
| :--- | :--- | :--- | :--- |
| **700 (권장 굵기)** | **Bold** | **페이지 제목 (H1), 중요 영역 제목 (H2, H3), 모달 제목** | `font-bold` |
| **700** | **Bold** | **핵심 실행 버튼 (CTA, 분석/신청), 선택된 탭 (Active Tab)** | `font-bold` |
| **600** | **SemiBold** | **상태 배지, 보조 버튼, 비선택 탭, 입력 라벨 (`<label>`), 중간 강조** | `font-semibold` |
| **500** | **Medium** | **설명, 출처, 서브 카피, 본문 보조 정보, 캡션, 메트릭 라벨** | `font-medium` |
| **400** | **Regular** | **일반 본문, 카드 설명 문단, 긴 텍스트 (장식 목적의 과도한 굵기 지양)** | `font-normal` |

### 3.3 계층 구조 (Type Scale)
| 레벨 | 폰트 크기 | 굵기 (Weight) | 행간 (Line Height) | 적용 대상 |
| :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | 48px ~ 60px (`3rem~3.75rem`) | Bold (700) | 1.15 | 메인 히어로 타이틀 |
| **Section H2**| 30px ~ 36px (`1.875rem~2.25rem`)| Bold (700) | 1.25 | 섹션 주요 헤드라인 |
| **Card H3** | 18px ~ 20px (`1.125rem~1.25rem`)| Bold (700) | 1.35 | 기능 카드 및 모달 타이틀 |
| **Body Large** | 18px (`1.125rem`) | Medium (500) | 1.6 | 히어로 서브 카피 |
| **Body Base** | 14px ~ 15px (`0.875rem~0.9375rem`) | Regular (400) / Medium (500) | 1.6 | 일반 본문 및 기능 설명 |
| **Code / Data**| 12px ~ 13px (`0.75rem~0.8125rem`) | Medium (500) / Bold (700) | 1.5 | IP 주소, API 패킷, 파라미터 (Paperlogy) |
| **Badge / Tag**| 10px ~ 11px (`0.625rem~0.6875rem`)| SemiBold (600) | 1.0 | 상태 태그, 카테고리 칩 |

---

## 4. 글래스모피즘 & 레이아웃 (Glassmorphism & Depth)

### 4.1 유리 질감 CSS 표준 규칙
```css
/* 기본 글래스 카드 */
.glass-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem; /* 24px */
}

/* 마우스 호버 시 네온 빔 발광 */
.glass-card-hover:hover {
  border-color: rgba(34, 211, 238, 0.4);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.25), inset 0 0 15px rgba(6, 182, 212, 0.05);
  transform: translateY(-4px);
}
```

### 4.2 앰비언트 오로라 라이트
- 배경에 `blur(140px~160px)`가 적용된 반경 500~600px의 원형 그라데이션 오브젝트를 배치하여 우주적 깊이감 조성.
- 배경 그리드(`cyber-grid`): 50px 간격의 `rgba(255, 255, 255, 0.03)` 1px 선형 격자.

---

## 5. UI 컴포넌트 규격 (Components)

### 5.1 네온 글로우 버튼 (Neon Button)
```html
<button class="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] hover:-translate-y-0.5 transition-all">
  버튼 텍스트
</button>
```

### 5.2 상태 칩 및 배지 (Status Badges)
- **온라인/정상**: `bg-emerald-500/20 text-emerald-300 border-emerald-500/30`
- **시안 브랜드 태그**: `bg-cyan-500/20 text-cyan-300 border-cyan-500/30`
- **모노 코드 태그**: `bg-slate-900 text-cyan-300 font-mono border-white/10`

### 5.3 입력 폼 (Input Controls)
- 배경: `bg-slate-950/80`
- 테두리: `border border-white/15 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20`
- 모서리: `rounded-xl (12px)`

---

## 6. 모션 & 인터랙션 가이드 (Motion & Interaction)

1. **3D 레이더 스캔 회전**:
   - `conic-gradient` 빔 + `animation: radarSpin 3s linear infinite`
   - 스캔 시작 시 1.4초간 가상 전봇대 패킷 라우팅 카운트업
2. **원형 SVG 게이지 차트**:
   - `stroke-dasharray="314.159"` + `stroke-dashoffset` 전환으로 0%에서 목표 수치(92%, 78%, 99.9%)까지 부드럽게 채워짐
3. **스크롤 리빌 (Scroll Reveal)**:
   - `IntersectionObserver`를 통해 뷰포트 진입 시 `opacity: 0 -> 1`, `translateY(28px) -> 0` (0.8s bezier)

---

## 7. 아이콘 & 에셋 규격 (Icons & Assets)

- **아이콘 세트**: `Iconify Solar Icons (Bold & Duotone)`
- **공식 로고**: `assets/zeons-logo.png` (화이트 단색 벡터 기반 고화질 PNG)
- **파비콘 에셋**:
  - `assets/favicon-32x32.png` (32px 표준)
  - `assets/favicon-16x16.png` (16px 스몰)
  - `assets/favicon-196x196.png` (196px HD/모바일)
  - `assets/apple-touch-icon.png` (152px iOS)

---

© 2026 주식회사 제온스 (ZEONS, Inc.) Design System. All rights reserved.
