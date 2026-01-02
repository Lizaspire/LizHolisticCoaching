export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: mode === 'production' && process.env.CF_PAGES
      ? '/'
      : '/LizHolisticCoaching/',
    plugins: [react()],
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
