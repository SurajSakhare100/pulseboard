# PulseBoard

## Overview
PulseBoard is a lightweight client update portal built for freelancers and small studios. It replaces scattered emails, Notion pages, and status calls with a single, branded link where clients can view real-time project progress, updates, and shared files — no logins, no friction. Freelancers stay in control, reduce inbox noise, and build trust, while clients feel consistently informed without needing to ask, "Any update?"

## Features

*   **Branded Client Boards**: Share a unique link per client/project. Customize with logo, colors, and project name.
*   **Live Project Updates**: Add quick updates (text, status, files). Timeline view — no messy threads or replies.
*   **Secure Communication**: Clients just click and view — no passwords, no setup. Optional password protection for privacy.
*   **Smart File Sharing**: Upload files (PDFs, mockups, deliverables). Clients can preview or download instantly.
*   **Weekly Summary Emails**: Auto-sends clients a digest of updates. Optional check-in reminders for freelancers.
*   **Activity Tracking**: See when a client viewed the board.

## Getting Started

Follow these steps to get PulseBoard up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1.  **Clone the repository (if not already done):**
    ```bash
    git clone <repository_url>
    cd pulseboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will usually run the app on `http://localhost:3000`. If that port is in use, Next.js will automatically try another port (e.g., `http://localhost:3001`).

## Project Structure

-   `src/app/page.tsx`: Main landing page component.
-   `src/app/layout.tsx`: Root layout and metadata configuration.
-   `src/app/globals.css`: Global Tailwind CSS styles.
-   `src/components/Navbar.tsx`: Navigation bar component.
-   `src/components/Footer.tsx`: Footer component.
-   `src/components/WaitlistForm.tsx`: Waitlist form for the CTA section.
-   `src/components/HeroWaitlistForm.tsx`: Separate waitlist form for the hero section.
-   `next.config.js`: Next.js configuration.
-   `postcss.config.js`: PostCSS configuration for Tailwind CSS.
-   `tailwind.config.ts`: Tailwind CSS configuration.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
