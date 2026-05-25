# Nimbus

> AI-powered cloud media management — upload, transform, and download images/videos using Cloudinary's AI transformation pipeline and Next.js full-stack architecture.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Cloudinary](https://img.shields.io/badge/Cloudinary-AI%20Media-blue?style=for-the-badge&logo=cloudinary)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?style=for-the-badge&logo=vercel)
![Status](https://img.shields.io/badge/Status-Engineering%20Prototype-purple?style=for-the-badge)

---

# About The Project

Nimbus is a full-stack cloud media management platform that lets users upload, browse, and apply AI-powered transformations to images and videos — all within a single interface, without requiring custom machine learning infrastructure.

The core architectural decision was to use Cloudinary as:

- Media storage layer
- CDN delivery layer
- AI transformation engine

Instead of provisioning GPU infrastructure or training models manually, Nimbus composes Cloudinary's transformation APIs to deliver:

- AI background removal
- Generative background replacement
- Smart auto-cropping
- Grayscale conversion
- Video transformation workflows

This project explores:

- Next.js full-stack architecture
- API route design
- AI API composition
- Media-centric frontend UX
- Cloud-based transformation pipelines

---

# Live Demo

| Resource | Link |
|---|---|
| Frontend | [Live Demo](https://nimbus-navy.vercel.app/) |

---

# Project Type

Full-Stack AI-Integrated Media Platform

- Frontend: React SPA with Next.js
- Backend: Next.js API Routes
- Storage & AI: Cloudinary
- Deployment: Vercel

---

# Project Status

**Experimental Prototype / Portfolio Project**

Core features are functional. Known issues exist around authentication, validation, and async video retry logic. These are documented transparently below as part of the engineering review process.

---

# Why I Built This

I built Nimbus to explore how modern full-stack applications can integrate third-party AI services without requiring custom ML infrastructure.

The project helped me practice:

- Next.js full-stack architecture
- API route development
- Cloudinary media pipelines
- AI transformation workflows
- Async state management
- Media-focused frontend engineering

I also wanted hands-on experience building a product that felt closer to a real-world SaaS workflow rather than a traditional CRUD application.

---

# Features

## Core Features

- Upload images and videos
- Browse media library
- Search assets by name
- Download transformed assets

---

## AI Image Transformations

- Background removal
- Grayscale conversion
- Generative AI background replacement
- Smart auto-crop

---

## Video Features

- Video playback
- Async processing retry handling
- Smart crop transformation
- Original video download

---

## Developer Experience

- Path aliasing via `jsconfig.json`
- ESLint configuration
- Modular component architecture
- Reusable card components

---

# Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI rendering |
| Next.js 15 | Full-stack framework |
| next-cloudinary | Cloudinary React integration |
| CSS | Styling and layout |

---

## Backend

| Technology | Purpose |
|---|---|
| Next.js API Routes | Serverless backend |
| Cloudinary Node SDK | Search and transformation API access |

---

## Storage & AI

| Service | Role |
|---|---|
| Cloudinary | Media storage, CDN, AI transformations |

---

## Utilities

| Package | Purpose |
|---|---|
| file-saver | Client-side downloads |

---

## Deployment

| Tool | Purpose |
|---|---|
| Vercel | Hosting and serverless deployment |

---

# Architecture

```text
Browser Client
      │
      ▼
Next.js Frontend
      │
      ├── Upload Widget
      ├── Dashboard
      ├── ImageCard
      └── VideoCard
      │
      ▼
Next.js API Route
/api/assets
      │
      ▼
Cloudinary SDK
      │
      ▼
Cloudinary Platform
      ├── Storage
      ├── Search API
      ├── AI Transformations
      └── CDN Delivery
```

---

## Request Lifecycle — Image Transformation

```text
User toggles transformation
        │
        ▼
React state updates
        │
        ▼
CldImage re-renders
        │
        ▼
Cloudinary transformation URL generated
        │
        ▼
Browser fetches transformed asset from CDN
        │
        ▼
Cloudinary caches result
        │
        ▼
Image renders in browser
```

---

## Request Lifecycle — Asset Search

```text
User types search query
        │
        ▼
useEffect triggers fetch()
        │
        ▼
GET /api/assets
        │
        ▼
Cloudinary Search API
        │
        ▼
Results returned
        │
        ▼
React re-renders asset grid
```

---

# Folder Structure

```text
nimbus/
├── public/
│   └── icon.png
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Header.jsx
│   │   ├── ImageCard.jsx
│   │   ├── Sidebar.jsx
│   │   └── VideoCard.jsx
│   │
│   ├── pages/
│   │   ├── _app.jsx
│   │   ├── _document.jsx
│   │   ├── index.jsx
│   │   └── api/
│   │       └── assets.js
│   │
│   └── styles/
│       └── globals.css
│
├── jsconfig.json
├── next.config.mjs
├── eslint.config.mjs
└── package.json
```

---

# Installation

## Prerequisites

- Node.js 18+
- npm
- Cloudinary account

---

## Clone Repository

```bash
git clone https://github.com/your-username/nimbus.git
cd nimbus
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

```bash
cp .env.example .env.local
```

---

## Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

> Never expose `CLOUDINARY_API_SECRET` using the `NEXT_PUBLIC_` prefix.

---

# Usage

## Uploading Media

1. Click **+ New**
2. Upload image/video
3. Asset appears in dashboard

---

## Applying AI Transformations

- Toggle background removal
- Enable grayscale
- Enter generative prompt
- Apply smart crop

---

## Searching

Use the search input to filter assets through Cloudinary's search API.

---

# API Documentation

## GET `/api/assets`

Returns assets from Cloudinary.

### Example Request

```http
GET /api/assets?my_photo
```

### Example Response

```json
[
  {
    "asset_id": "abc123",
    "public_id": "folder/my_photo",
    "resource_type": "image"
  }
]
```

---

# Screenshots

| View | Preview |
|---|---|
| Dashboard |<img width="1901" height="865" alt="image" src="https://github.com/user-attachments/assets/efcc8609-e2bf-4e5b-beb9-9392916d345d" /> |
| Image Transformation | <img width="324" height="661" alt="image" src="https://github.com/user-attachments/assets/a340f3a6-1db9-4359-b805-1b3af88ec997" /> |
| Upload Widget | <img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/0c2a8a14-53d2-4a3c-aae1-c617817b1180" /> |
| Video Player | <img width="324" height="653" alt="image" src="https://github.com/user-attachments/assets/ef5d5802-53de-4438-969d-5c34723fab38" /> |
| Mobile View | <img width="364" height="741" alt="image" src="https://github.com/user-attachments/assets/c7f1e2ee-7fdd-4fa5-90d1-f9105ef51e8d" /> |

---

# Performance Considerations

## What Works Well

- Cloudinary CDN caching
- React 19 automatic batching
- Cached AI transformations

---

## Known Bottlenecks

| Issue | Fix |
|---|---|
| No search debouncing | Add `useDebounce` |
| No request cancellation | Add `AbortController` |
| No pagination | Use Cloudinary `next_cursor` |
| No virtualization | Use `react-window` |

---

# Security Considerations

## Current Prototype State

| Concern | Status |
|---|---|
| Authentication | Not implemented |
| Input sanitization | Missing |
| Upload authorization | Public preset |
| Rate limiting | Missing |

---

# Tradeoffs & Limitations

| Decision | Tradeoff |
|---|---|
| Cloudinary AI backend | Vendor lock-in |
| Pages Router | No React Server Components |
| No database | No user ownership model |
| No TypeScript | Reduced type safety |

---

# Known Issues

| Issue | Severity |
|---|---|
| `clearInterveral` typo | High |
| Duplicate checkbox IDs | Medium |
| DOM querying for download | Medium |
| Missing error UI | Medium |
| `useEffect` dependency issues | Low |

---

# Technical Debt

## Immediate Priority

- Fix interval cleanup typo
- Fix API secret naming
- Remove debug logs

---

## Short-Term

- Add TypeScript
- Add search debouncing
- Add request cancellation
- Add loading skeletons

---

## Medium-Term

- App Router migration
- Authentication
- Pagination
- Error boundaries

---

# Scalability Discussion

## Current Scale

Suitable for:

- Personal projects
- Portfolio demos
- Small-scale usage

---

## Required Improvements for Scale

| Scale | Requirement |
|---|---|
| 100 users | Request caching |
| 1,000 users | User isolation |
| 10,000+ users | Redis + database |

---

# Challenges Faced

- Async video processing state
- Transformation URL composition
- Cross-origin download constraints
- Next.js environment variable scoping

---

# What I Learned

- Next.js full-stack execution model
- Cloudinary transformation architecture
- React async state complexity
- Environment variable security
- AI API composition patterns

---

# Future Scope

- Authentication
- Per-user libraries
- Search pagination
- Upload progress tracking
- Folder organization
- TypeScript migration
- Redis caching

---

# License

MIT License

---

# Contact

**Heramb Chaudhari**

[![GitHub](https://img.shields.io/badge/GitHub-Heramb1221-black?style=for-the-badge&logo=github)](https://github.com/Heramb1221)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Heramb%20Chaudhari-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/heramb-chaudhari)

[![Email](https://img.shields.io/badge/Email-hchaudhari1221%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:hchaudhari1221@gmail.com)
---

Built to explore full-stack AI-powered media workflows using Next.js and Cloudinary.
