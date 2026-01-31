# JobPortal Frontend Guide

## 🚀 Overview
The frontend of the JobPortal application is a modern, responsive Single Page Application (SPA) built with **React** and **TypeScript**. It delivers a premium user experience using the **Mantine** UI library, offering features like dark mode, rich text editing, and smooth animations.

This guide provides a comprehensive overview of the architecture, technology stack, and setup instructions for developers and recruiters.

---

## 🛠 Tech Stack
The project leverages a robust set of modern web technologies:

*   **Core**: [React 18](https://react.dev/) with **TypeScript** for type-safe component development.
*   **UI Framework**: [Mantine v7](https://mantine.dev/) - A fully featured React component library.
*   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) - For managing global application state (User Auth, etc.).
*   **Styling**:
    *   **TailwindCSS**: For utility-first custom styling.
    *   **Mantine Modules**: For component-specific overrides.
    *   **Tabler Icons**: For consistent SVG iconography.
*   **Routing**: [React Router DOM v6](https://reactrouter.com/) for client-side navigation.
*   **HTTP Client**: [Axios](https://axios-http.com/) for API communication with Interceptors for JWT handling.
*   **Form & Validation**: Mantine Form.
*   **Rich Text Editor**: [TipTap](https://tiptap.dev/) for creating formatted job descriptions/resumes.
*   **Animations**: [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) for engaging page transitions.
*   **Build Tool**: React Scripts (Create React App).

---

## 📂 Project Structure
The `src` directory is organized for scalability and maintainability:

```
src/
├── Components/    # Reusable UI components (Buttons, Headers, Cards)
├── Pages/         # Full application views (Home, JobDetails, Login)
├── Services/      # API integration logic (AuthService, JobService)
├── Slices/        # Redux Toolkit slices (State logic)
├── Interceptor/   # Axios interceptors for attaching JWT tokens
├── DTO/           # Data Transfer Objects / TypeScript Interfaces
├── Utils/         # Helper functions and constants
└── App.tsx        # Main entry point with Theme & Router setup
```

---

## ✨ Key Features
*   **Adaptive Dark Mode**: Built-in support for dark/light themes via Mantine Provider.
*   **Custom Theming**:
    *   **Font**: *Poppins* (Google Fonts).
    *   **Colors**: Custom `brightSun` (Gold/Yellow brand color) and `mineShaft` (Dark Greys) palettes.
*   **Responsive Design**: Mobile-first approach ensuring compatibility across all devices.
*   **Role-Based UI**: Dynamic interface changes based on user role (`APPLICANT` vs `EMPLOYER`).
*   **Interactive Notifications**: Toast notifications for success/error feedback.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v16 or higher)
*   npm or yarn

### Installation
1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally
Start the development server:
```bash
npm start
```
The app will launch at `http://localhost:3000`.

### Building for Production
Create an optimized build for deployment:
```bash
npm run build
```

---

## 🔗 State Management & API
*   **Redux Store**: Located in `Store.tsx`. It combines reducers from the `Slices/` directory to manage global states like `userProfile` and `authStatus`.
*   **API Services**: All backend calls are centralized in `Services/`.
    *   **Base URL**: Configured to point to the backend (Local: `http://localhost:8080` or Production).
    *   **Interceptor**: Automatically attaches the `Authorization: Bearer <token>` header to requests if a user is logged in.

---

## 🧪 Testing
The project includes setup for testing with **Jest** and **React Testing Library**.
Run tests using:
```bash
npm test
```
