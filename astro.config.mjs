import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ForgeFluid',
			description: 'ForgeFluid transforms complex workflows into seamless, adaptive processes using advanced AI technologies, enabling efficient computational task management across diverse environments.',
			social: {
				github: 'https://github.com/forgefluid',
			},
			favicon: '/favicon.ico',
			sidebar: [
				{
					label: 'Introduction',
					slug: 'introduction'
				},
				{
					label: 'System',
					autogenerate: { directory: 'system' }
				},
				{
					label: 'Technology Stack',
					autogenerate: { directory: 'technology-stack' }
				},
				{
					label: 'Functionalities',
					autogenerate: { directory: 'functionalities' }
				},
				{
					label: 'Governance and Tokenomics',
					autogenerate: { directory: 'governance-and-tokenomics' }
				},
				{
					label: 'Roadmap',
					slug: 'roadmap'
				},
			],
		}),
	],
});
