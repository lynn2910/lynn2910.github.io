<script lang="ts">
	const {title, level = 2, subtitle}: { title: string, level?: number, subtitle: string } = $props();

	const headingTag = `h${level}`;
</script>

<div class="bg-mountbatten-pink py-1 px-2.5 flex flex-col items-start">
    <p class="m-0 text-old-lace font-title">{subtitle}</p>
    <svelte:element this={headingTag}
                    class="text-old-lace font-bold text-2xl text-left">{title}</svelte:element>
</div>