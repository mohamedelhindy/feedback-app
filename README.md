# For Later

A modern feedback platform built to make collecting, managing, and reviewing user feedback simple and intuitive.

Users can submit feedback by rating their experience, writing a detailed message, and optionally attaching images. Submitted feedback is stored in Supabase and displayed through a clean dashboard where users can search, filter, and sort responses.

## ✨ Features

- 📝 Submit user feedback
- ⭐ Rate experiences from Very Bad to Excellent
- 🖼️ Upload images with feedback
- 🔎 Search through submitted feedback
- ⭐ Filter feedback by rating
- ↕️ Sort feedback by newest or oldest
- 📄 View individual feedback details
- 🎉 Feedback submission success page
- 📱 Responsive and modern UI
- ☁️ Deployed with Vercel
- 🗄️ Supabase database integration
- 🔐 Supabase Storage for feedback images

## 🛠️ Tech Stack

- **Next.js** — React framework
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Styling and responsive UI
- **Supabase** — Database and file storage
- **Vercel** — Deployment

## 📂 Project Structure

```text
app/
├── api/
│   └── feedbacks/
│       └── route.ts
│
├── feedback/
│   └── page.tsx
│
├── submit-feedback/
│   └── page.tsx
│
├── feedback-success/
│   └── page.tsx
│
└── about/
    └── page.tsx

public/
├── assets/
│   └── images/
│
└── components/
    ├── About/
    ├── Feedbacks/
    ├── FeedbackSubmit/
    ├── Home/
    └── Navbar.tsx

lib/
└── supabase/
    ├── client.ts
    └── test.ts
```
