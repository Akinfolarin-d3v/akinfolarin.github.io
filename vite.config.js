// Import "three"
import * as THREE from 'three';

// Your code using THREE goes here
const scene = new THREE.Scene();

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  include: ["three"],
})
