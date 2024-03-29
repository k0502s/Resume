import { ExperienceDataType } from "@@types/Experience";

export const EXPERIENCE_LIST: ExperienceDataType[] = [
  {
    company: {
      companyName: "AfreecaTV Corp.",
      companyStartPeriod: "2023.12",
      companyEndPeriod: "현재 재직중",
      companyPosition: "Front-End\n서비스 개발/운영/유지보수",
      companyDescription: "AfreecaTV 프론트엔드 개발자로 입사하였습니다.",
      blogLink: "",
    },
    projects: [
      {
        title: "AfreecaTV Global 서비스 개발/운영/유지보수",
        projectStartPeriod: "2023.12",
        projectEndPeriod: "Current",
        projectTechs: [],
        projectDescription:
          "현재는 AfreecaTV Global 신규 서비스 개발중 입니다.",
        projectSummaryList: [],
        linkUrl: "",
        imgs: [],
      },
    ],
  },
  {
    company: {
      companyName: "SUMMITS Corp.",
      companyStartPeriod: "2022.6",
      companyEndPeriod: "2023.11",
      companyPosition: "Front-End\n서비스 개발/운영/유지보수",
      companyDescription:
        "Summits에서 인도네시아 최초 O2O 뷰티 앱 플랫폼 글로벌 서비스 MyVenus를 프론트엔드 개발자로서 개발/운영하였습니다.\n\n과거 MyVenus 외주 프로젝트를 메인으로 도맡게 되었고 서비스 런칭에 성공하고 프로젝트 일정이 끝난 이후 좋은 인연을 계기로 정식으로 입사하게 되었습니다.\n\n저에게 좋은 인연, 좋은 기회로 시작된 MyVenus 서비스는 개발/운영을 통해 개발자로서 할 수 있는 다양한 경험들을 통해 많은 성장을 하게 되었습니다.",
      blogLink: "https://k0502s.tistory.com",
    },
    projects: [
      {
        title: "마이 비너스 인도네시아 뷰티 플랫폼 서비스 APP",
        projectStartPeriod: "2022.6",
        projectEndPeriod: "2023.11",
        projectTechs: [
          "Typescript",
          "React Native",
          "Redux Tool Kit",
          "Firebase",
          "i18n",
          "Code Push",
          "Fastlane",
          "Sentry",
          "Google Analytics",
          "Detox (E2E)",
        ],
        projectDescription:
          "서비스 런칭을 위한 초기 프로젝트 개발 및 런칭 성공을 시작으로 개발/운영을 하였습니다. 실제 사용자들이 직접 이용하는 O2O 플랫폼답게 결제, 상품 탐색, 검색, 지도, 채팅 등등 다양한 대다수의 기능(약 90%)을 메인 리드하여 개발/운영을 맡았습니다.\n\n단순 기능 개발을 넘어 실제 서비스 중인 동남아 현지 인프라를 고려하여 저성능 디바이스를 대응한 사용성 및 성능 최적화, 서비스 운영 이슈 트러블 슈팅 및 대응, 더 나은 서비스 개발 환경을 위한 다양한 DevOps 구축 및 적용 등등을 경험 하게되었습니다.\n\n운영 측면에서도 App 다운로드 횟수 15만 달성, 회원가입 수 5만 달성, 회원가입 수 대비 결제 유저 전환율 4% 달성 등등 많은 성과를 이루고 경험해 보기도 하였습니다.",
        projectSummaryList: [
          "React Native을 통해 구축된 iOS, AOS 앱의 초기 런칭 성공과 지속적인 서비스 개발/운영",
          "뷰티 / 시술 상품 동남아 현지 결제 시스템, 쿠폰, 친구 초대, 이벤트 운영 시스템 구현",
          "상품 리스트, 상세, 정보제공 고시 등 상품 페이지 개발",
          "동남아 국가 인프라를 고려한 성능 최적화 / 서비스 운영 이슈 트러블 슈팅 및 대응",
          "i18n을 적용한 글로벌 서비스 다국어 지원 / 글로벌 서비스 멀티 타임존 구축",
          "Google Map 위치 기반 지도 서비스",
          "Sendbird SaaS을 활용한 의료 실시간 상담 채팅 및 화상통화 서비스 구현",
          "Code Push 구축 및 배포 대응 / Fastlane을 통한 배포 자동화",
          "Detox을 통한 React Native E2E 테스트 시스템 구축",
          "Sentry 적용을 통한 장애 감지 및 대응",
          "Google Analytics를 통한 이벤트 페이지 지표 측정 / Firebase을 활용한 A/B 테스트 구축",
        ],
        linkUrl: "https://play.google.com/store/apps/details?id=io.myvenus",
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B5%E1%86%A8%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_1800x1200.jpg",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.4.4+main_friends.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.1.1+%E1%84%89%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.2+%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5_%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A9%E1%86%AB%E1%84%86%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%89%E1%85%B5.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.1+%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A7%E1%86%AB%E1%84%90%E1%85%A2%E1%86%B8.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.2.1+%E1%84%8F%E1%85%A5%E1%84%86%E1%85%B2%E1%84%82%E1%85%B5%E1%84%90%E1%85%B5_01_Talks+Ui_01.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.5+OpenChat+UI-007(%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AB%E1%84%8E%E1%85%A2%E1%84%90%E1%85%B5%E1%86%BC%E1%84%87%E1%85%A1%E1%86%BC).png",
        ],
      },
      {
        title: "마이 비너스 서비스 커뮤니티 WEB",
        projectStartPeriod: "2023.4",
        projectEndPeriod: "2023.11",
        projectTechs: [
          "Typescript",
          "NextJs",
          "Redux Tool Kit",
          "React-query",
          "Styled-components",
          "Jenkins",
          "Sentry",
          "Google Analytics",
        ],
        projectDescription:
          "비즈니스 활성화를 위한 검색 노출 증진 목표로 NextJs의 SSR 및 다양한 종류의 SEO 최적화 세팅을 적용한 커뮤니티 웹을 개발/운영하였습니다. 초기 개발 시작부터 배포까지 100% 리드하여 개발/운영을 맡았습니다.\n\nNextJs을 다루는데 많은 경험을 쌓아보는 계기가 되었으며 웹의 다양한 방향성의 최적화들을 해보는 좋은 경험이었습니다.\n\nSEO를 통한 MyVenus 앱 서비스의 오가닉한 유저 유입을 통해 회원수를 효율적으로 모으는 데 많은 도움이 되었습니다. 어떻게 보면 개발자가 마케팅에 일조할 수 있게 한 매우 의미가 깊은 프로젝트였습니다.",
        projectSummaryList: [
          "NextJs SSR, SSG, ISR 상활별 적절한 사용을 통한 페이지 개발",
          "SEO 최적화를 위한 종류별 세팅",
          "Sentry 적용을 통한 장애 감지 및 대응",
          "Google Analytics를 통한 이벤트 페이지 지표 측정",
        ],
        linkUrl: "https://www.myvenus.io/community",
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.40.23.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-01+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+10.04.25.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.40.38.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.41.27.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.42.08.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.47.23.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.47.35.png",
        ],
      },
      {
        title: "마이 비너스 서비스 소개/고객 상담 신청/클리닉 입점신청 WEB",
        projectStartPeriod: "2023.6",
        projectEndPeriod: "2023.11",
        projectTechs: [
          "Typescript",
          "NextJs",
          "React-hook-form",
          "Styled-components",
          "Jenkins",
          "Sentry",
          "Google Analytics",
        ],
        projectDescription:
          "과거 웹사이트 템플릿으로 운영했던 MyVenus 서비스 소개 웹 사이트를 사내에서 더 효율적으로 페이지를 유지보수하기 위하여 직접 NextJs 프로젝트로 SEO 최적화를 통해 새롭게 리뉴얼 하게 되었습니다.\n\n초기 개발 시작부터 배포까지 100% 리드하여 개발/운영을 맡았으며 비즈니스 서비스를 소개하는 페이지이다 보니 첫인상이 중요함을 생각하여 디자인 퍼블리싱에 더욱더 신경을 썼던 프로젝트였습니다.\n\n이 프로젝트 또한 SEO을 통한 MyVenus 앱 서비스 활성화 일조에 필요한 비지니스 파트너들을 모으는데 많은 도움이 되었습니다.",
        projectSummaryList: [
          "랜딩 페이지 디자인 퍼블리싱 / 마크업 작업",
          "Mobile 디바이스를 대응한 반응형 구현",
          "비즈니스 파트너 입점 페이지 구축",
          "고객 상담 신청 Form 입력 기능 및 페이지 구축",
          "NextJs SSR, SSG, ISR 상활별 적절한 사용을 통한 페이지 개발",
          "SEO 최적화를 위한 종류별 세팅",
        ],
        linkUrl: "https://www.myvenus.io/",
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.39.22.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.39.59.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.42.35.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.43.02.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.43.42.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+7.44.05.png",
        ],
      },
      {
        title: "마이 비너스 for 어드민/파트너스 WEB",
        projectStartPeriod: "2022.6",
        projectEndPeriod: "2023.11",
        projectTechs: [
          "Typescript",
          "ReactJs",
          "Redux Tool Kit",
          "Ant-Design",
          "Styled-components",
          "i18n",
          "Jenkins",
        ],
        projectDescription:
          "회사 내 운영팀이 서비스의 원활한 운영을 위하여 CMS 웹 또한 담당 일원으로 참여하여 개발/운영에 기여하였습니다.\n\n회사 내부 운영뿐만 아니라 더 나아가 비즈니스 파트너들을 위한 Web/App 서비스를 따로 제공해 주며 B2B 사업 확장 스타트를 진행하기도 하였습니다.\n\n약 30% 리드하여 개발/운영을 맡았으며 ReactJs 사용 및 글로벌 서비스를 고려한 설계 및 개발/운영을 진행하였습니다.",
        projectSummaryList: [
          "상품 / 결제 관리 기능 개발 및 유지보수",
          "비즈니스 파트너 운영 기능 개발 및 유지보수",
          "Sendbird SaaS을 이용한 비즈니스 파트너용 의료 실시간 채팅 및 화상통화 기능 구현",
        ],
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-01+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+10.16.13.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-01+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+10.15.16.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-01+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+10.26.43.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-01+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+10.26.28.png",
        ],
      },
    ],
  },
  {
    company: {
      companyName: "ACTBASE Corp.",
      companyStartPeriod: "2021.7",
      companyEndPeriod: "2022.06",
      companyPosition: "Front-End\nSI 개발/유지보수",
      companyDescription:
        "첫 직장, 첫 개발 프로젝트, 모든 게 새롭게 느껴지는 시기였습니다. 개발 업계의 환경과 분위기를 알게 된 뜻깊은 시간이었습니다.\n\n길지 않은 시기 임에도 다양한 프로젝트들을 경험했던 것이 개발에 대한 기본역량과 시야를 넓히게 되었던 거 같습니다.",
      blogLink: "https://k0502s.tistory.com",
    },
    projects: [
      {
        title: "홈그릿 인테리어 쇼핑 서비스 APP",
        projectStartPeriod: "2022.4",
        projectEndPeriod: "2022.6",
        projectTechs: ["Javascript", "React Native", "Redux", "Firebase"],
        projectDescription:
          "오늘의 집 서비스와 같은 인테리어 가구 상품들을 판매하는 마켓 플랫폼 앱을 개발하였습니다.\n\n결제, 배송, 장바구니, 상품 상세, 커뮤니티 등등 제대로 된 마켓 플랫폼 기능을 개발해 보는 귀중한 경험을 해본 프로젝트였습니다. 아직 서비스 런칭 준비중입니다.",
        projectSummaryList: [
          "결제 모듈 연동 구축 및 개발",
          "고객의 상품 장바구니 그리고 구매부터 시작하여 배송 완료까지의 프로세스 설계 및 개발 구현",
          "Firebase Push 알림 구축",
          "React Native 크로스 플램폼 개발 및 앱 스토어 배포 대응",
        ],
        linkUrl:
          "https://play.google.com/store/apps/details?id=com.gangnkim.homegrit",
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2023-10-06-20-39-41.jpeg",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2023-10-06-20-39-26.jpeg",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2023-10-06-20-39-32.jpeg",
        ],
      },
      {
        title: "마이 비너스 인도네시아 뷰티 플랫폼 서비스 APP",
        projectStartPeriod: "2021.12",
        projectEndPeriod: "2022.04",
        projectTechs: [
          "Typescript",
          "React Native",
          "Redux Tool Kit",
          "Firebase",
          "i18n",
        ],
        projectDescription:
          "인도네시아 최초 O2O 뷰티 앱 플랫폼 글로벌 앱 서비스 MyVenus의 스타팅 프로젝트 개발을 맡게 되어 처음부터 Front-End 파트를 메인 리드하여 개발하게 되었습니다.\n\n서비스의 스케일에 비해 길지 않은 개발 기간임에도 불구하고 공식 서비스 런칭 날짜까지 무사히 앱 스토어 배포 및 서비스 런칭 성공하며 성공적으로 프로젝트를 마무리하였습니다.",
        projectSummaryList: [
          "프로젝트 초기 스타트 개발 진행 및 Front-End 파트 메인 리드 역할 수행",
          "서비스 런칭 성공",
          "상품 리스트, 상세, 정보제공 고시 등 상품 페이지 개발",
          "글로벌 서비스를 고려한 기술적 대응 (결제 모듈, 언어, 인증)",
          "Firebase Push 알림 구축",
          "React Native 크로스 플램폼 개발 및 앱 스토어 배포 대응",
        ],
        linkUrl: "https://play.google.com/store/apps/details?id=io.myvenus",
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%91%E1%85%B5%E1%86%A8%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_1800x1200.jpg",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.4.4+main_friends.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.1.1+%E1%84%89%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.2+%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5_%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A9%E1%86%AB%E1%84%86%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%89%E1%85%B5.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.1+%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A7%E1%86%AB%E1%84%90%E1%85%A2%E1%86%B8.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.2.1+%E1%84%8F%E1%85%A5%E1%84%86%E1%85%B2%E1%84%82%E1%85%B5%E1%84%90%E1%85%B5_01_Talks+Ui_01.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/v1.5+OpenChat+UI-007(%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AB%E1%84%8E%E1%85%A2%E1%84%90%E1%85%B5%E1%86%BC%E1%84%87%E1%85%A1%E1%86%BC).png",
        ],
      },
      {
        title: "뱅크몰 주택담보대출비교 서비스 WEB",
        projectStartPeriod: "2021.10",
        projectEndPeriod: "2021.12",
        projectTechs: ["Typescript", "NextJs", "Redux", "Styled-components"],
        projectDescription:
          "주택담보대출비교 서비스 프로젝트의 Front-End 파트 개발 일원으로 참여한 프로젝트입니다.\n\n주로 고객들의 대출 비교를 위한 Form 페이지 UI를 주로 개발 담당하였고 NextJs 프로젝트를 처음 접해보고 경험해본 계기가 되었습니다.\n\n금융 관련 데이터를 가공하고 상태 관리를 최적화하는 경험들이 매우 특별하고 신선한 경험들이었습니다.",
        projectSummaryList: [
          "대출 비교를 위한 Form 페이지 UI 개발",
          "금융 정보 데이터 가공 및 상태 관리",
          "NextJs SSR 최적화",
        ],
        linkUrl: "https://www.bank-mall.co.kr/",
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/og-image.jpg",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.11.27.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.11.47.png",
        ],
      },
      {
        title: "투자의 달인 비상장 주식 거래 서비스(유료 고객용) APP",
        projectStartPeriod: "2021.7",
        projectEndPeriod: "2021.10",
        projectTechs: [
          "Javascript",
          "React Native",
          "Redux",
          "Socket",
          "Firebase",
        ],
        projectDescription:
          "개발자 첫 프로젝트였으며 Front-End 개발자로서 첫 메인 리드 역할을 부여받은 뜻깊은 프로젝트였습니다. 유료 고객 전용 비상장 주식 거래 서비스 App를 개발하였습니다.\n\n기존에 존재했던 비상장 주식 거래 관련 외부 API 기능 및 주식 종목 데이터를 활용하여 App에서 주식 거래를 할 수 있게 하는 서비스 개발이었습니다.\n\n서비스 기획이 외부 API, 외부 결제 모듈을 이용하다 보니 App과 Web이 서로 통신하는 형식이 많아 WebView 기능을 자주 사용하고 개발하였고 그 외 주식 상품의 리스트, 상세 페이지, Socket을 이용한 종목 거래 채팅방 UI 시스템 등등을 구현하였습니다.",
        projectSummaryList: [
          "주식 종목 상품 리스트, 상세, 정보제공 고시 등 상품 페이지 개발",
          "Socket을 이용한 주식 종목 거래 채팅방 UI 시스템 구현",
          "App 내 WebView을 이용한 외부 결제 모듈 Web과의 통신 환경 구축",
          "주식 종목 거래 관련 Firebase Push 알림 구축",
          "React Native 크로스 플랫폼 개발 및 앱 스토어 배포 대응",
        ],
        linkUrl:
          "https://play.google.com/store/apps/details?id=com.tudal.tp&hl=ko&gl=US",
        imgs: [
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.27.56.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2022-04-28-00-04-06+008.png",
          "https://jinsoek-individual-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-10-06+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.18.26.png",
        ],
      },
    ],
  },
];
