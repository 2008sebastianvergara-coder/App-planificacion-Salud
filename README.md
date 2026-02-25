<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Z95b8H2GrEq8I6_fHrEvlHnWdPdDld6O

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env` and set the `VITE_GEMINI_API_KEY`:
   `cp .env.example .env`
   Then edit `.env` and paste your Gemini API key.
3. Run the app:
   `npm run dev`

## Security

**WARNING: Client-Side API Key Exposure**

This application is a client-side only React application. The `VITE_GEMINI_API_KEY` is bundled with the application and exposed to the browser.

*   **Risk:** Anyone with access to the deployed application can extract your API key.
*   **Mitigation:**
    *   **Restrict your API Key:** Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and restrict your API key to only accept requests from your specific domain (e.g., `your-username.github.io`).
    *   **Backend Proxy (Recommended for Production):** For higher security, implement a backend server that handles the API calls and stores the API key securely. The frontend should then call your backend instead of the Gemini API directly.

## Optimizations

*   **History Truncation:** The `geminiService.ts` sends the full chat history to the API. For long conversations, this might hit token limits. Consider truncating the history to the last N messages.
*   **Lazy Loading:** If the content (chapters, images) grows significantly, consider using `React.lazy` and `Suspense` to load components only when needed.
*   **Image Optimization:** Ensure images are optimized for web (WebP format, proper sizing) to improve load times.
