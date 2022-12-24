import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (params.id == 'hey') {
		return {
			title: 'hello wrold',
			content: 'hello world!!!!'
		};
	} else throw error(404, 'Not found');
}) satisfies PageLoad;
