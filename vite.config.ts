import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	appType: 'mpa',
	build: {
		emptyOutDir: true,
		rollupOptions: {
			output: {
				manualChunks: {
					react: ['react', 'react-dom'],
					animation_lib: ['framer-motion'],
					firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
				},
			},
		},
	},
});
