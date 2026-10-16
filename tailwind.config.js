/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          DEFAULT: '#FF6433',
          dark: '#E04F20',
          light: '#FFF2ED',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8F9FA',
          subtle: '#F1F3F5',
          border: '#E9ECEF',
        },
        food: {
          veg: '#16A34A',
          nonveg: '#DC2626',
          gold: '#EAB308',
          star: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'hover': '0 12px 30px -4px rgba(0, 0, 0, 0.12)',
        'floating': '0 20px 40px -6px rgba(234, 88, 12, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
