# vibeCodingV1

Next.js 기반의 바이브 코딩 프로젝트입니다.

## 기술 스택

- **Framework:** [Next.js 16](https://nextjs.org)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Testing:** Jest + React Testing Library

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인하세요.

### 테스트 실행

```bash
npm test
```

### 빌드

```bash
npm run build
```

## 프로젝트 구조

```
├── app/
│   ├── page.tsx          # 메인 페이지
│   ├── page.test.tsx     # 페이지 테스트
│   └── layout.tsx        # 루트 레이아웃
├── public/               # 정적 파일
├── jest.config.ts        # Jest 설정
├── jest.setup.ts         # Jest 환경 설정
└── next.config.ts        # Next.js 설정
```

## 배포

[Vercel](https://vercel.com) 을 통해 간편하게 배포할 수 있습니다.