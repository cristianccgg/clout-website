/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        "very-light-blue": "#e0f7fa",
        "main-blue": "#28587B",
        "header-color": "#565995",
        "p-color": "#49454F",
      },
      fontSize: {
        "nav-links": "24px",
        btns: "20px",
        headers: "32px",
        p: "14px",
        h2: "18px",
        h3: "12px",
        h4: "7.2px",
        h5: "6.3px",
        h6: "0.5rem",
        "ws-40": "40px",
      },
      fontWeight: {
        "nav-links": "400",
        headers: "400",
        p: "400",
        btns: "400",
        h2: "400",
        h3: "400",
        h4: "400",
        h5: "400",
        h6: "400",
        span: "600",
      },
      lineHeight: {
        "nav-links": "20px",
        headers: "32px",
        p: "16.8px",
        btns: "24px",
        h2: "24px",
        h3: "16px",
        h4: "12px",
        h5: "9px",
        h6: "3px",
      },
      letterSpacing: {
        h2: "0.5px",
        h3: "0.25px",
        "h3-smaller": "0.09px",
        h4: "0.15px",
        h5: "0.11px",
        h6: "0.11px",
      },
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(50% 184.6% at 50% 50%, rgba(86, 181, 214, 0.05) 0%, rgba(86, 181, 214, 0.25) 100%)",
      },
    },
  },
  plugins: [],
};
