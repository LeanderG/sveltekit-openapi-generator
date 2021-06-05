<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { getPetApi } from '$lib/api';
	export const load: Load = async ({ fetch, page }) => {
		const petApi = getPetApi(fetch);
		const petResponse = await petApi.getPetByIdRaw({ petId: +page.params.id });

		if (petResponse.raw.ok) {
			const pet = await petResponse.value();
			return {
				props: { pet }
			};
		}

		return {
			status: petResponse.raw.status,
			error: new Error(`Could not load Pet ${page.params.id}`)
		};
	};
</script>

<script lang="ts">
	import type { Pet } from '$lib/generated/openapi';

	export let pet: Pet;
</script>

<ul>
	<li>Name: {pet.name}</li>
	<li>Id: {pet.id}</li>
	<li>Category: {pet.category.name}</li>
	<li>Status: {pet.status}</li>
</ul>
