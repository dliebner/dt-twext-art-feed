import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
	input: './js/imports.js', // point to imports.js
	output: {
		file: './zip/js/bundle.js', // point to bundle.js
		format: 'es',
		exports: 'named',
	},
	plugins: [
		typescript(),
		nodeResolve(),
		commonjs(),
		terser()
	]
};
