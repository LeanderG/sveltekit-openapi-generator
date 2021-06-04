<script context="module" lang="ts">
	export const prerender = true;
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<a sveltekit:prefetch href="/pet">TODOs</a>
</section>
