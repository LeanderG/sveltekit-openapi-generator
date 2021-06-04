<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
  import { getPetApi } from '../lib/api';
	export const load: Load = async ({ fetch }) => {
  
    const petApi = getPetApi(fetch);
		const pet = await petApi.getPetById({petId: 100});

    return {
				props: { pet }
			};
		// if (res.ok) {
		// 	const pet = await res.json();

		// 	console.log({ pet });
		// 	return {
		// 		props: { pet }
		// 	};
		// }

		// const { message } = await res.json();

		return {
			error: new Error("error")
		};
	};
</script>

<script lang="ts">
	import type { Pet } from '$lib/generated/openapi';

	export let pet: Pet;
</script>

Hello!
{JSON.stringify(pet)}
