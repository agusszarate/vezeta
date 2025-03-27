# Veta Solutions - Website

This is a website developed for "Veta Solutions," where users can learn about IT services offered and contact the company through WhatsApp for custom solutions.

## Technologies Used

- **React**
- **TypeScript**
- **Vite**
- **Material UI**
- **Tailwind CSS**
- **Lucide React** (for icons)

## Features

- Information about IT services including custom software development, marketing solutions, and 24/7 support
- Multi-language support (English and Spanish)
- Responsive design with mobile navigation
- WhatsApp integration for direct customer contact
- Smooth scrolling navigation

## Installation and Usage

### Prerequisites

- Node.js 18+
- npm or yarn

### Steps to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone <REPO_URL>
   cd vezeta
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open in the browser: [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
  ├── App.tsx            # Main application component
  ├── main.tsx           # Entry point
  ├── index.css          # Global styles
  └── utils/
      ├── LanguageContext.tsx  # Language provider for i18n
      ├── translations.ts      # Language string resources
      ├── whatsapp.ts          # WhatsApp integration
      └── scrollTo.ts          # Smooth scrolling utility
```

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Deployment

The site is deployed on **Vercel**. The production version is available at:
[https://vezeta.vercel.app/](https://vezeta.vercel.app/)

## License

This project is licensed under the MIT License.
