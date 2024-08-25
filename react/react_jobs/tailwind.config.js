// Type annotation for Tailwind's configuration, helpful for editors with TypeScript support.
/** @type {import('tailwindcss').Config} */
export default {
  
  // Specify the files that Tailwind will scan to generate styles.
  // This helps Tailwind to remove unused CSS in production (purging).
  content: [
    // Includes all JavaScript, TypeScript, and JSX/TSX files in the 'src' directory.
    "./src/**/*.{js,jsx,ts,tsx}",
    
    // Also includes the root index.html file.
    "./index.html"
  ],
  
  // Customize or extend Tailwind's default theme settings.
  theme: {
    extend: {
      // Define a custom font family.
      fontFamily: {
        // 'sans' is a custom font family that uses 'Roboto' as the primary font,
        // and falls back to the system's default sans-serif font if 'Roboto' is unavailable.
        sans: ['Roboto', 'sans-serif'],
      },
      
      // Add a custom grid template for layouts.
      gridTemplateColumns: {
        // Custom grid layout called '70/30', 
        // which defines columns with 70% width for the first column and 30% for the second.
        '70/30': '70% 30%',
      },
    },
  },

  // An array for adding custom Tailwind plugins (none used here).
  plugins: [],
}
