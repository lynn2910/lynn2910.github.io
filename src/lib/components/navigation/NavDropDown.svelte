<script lang="ts">
	interface NavItem {
		url: string,
		label: string,
		target?: string
	}

	const {title, items}: { title: string, items: NavItem[] } = $props();
</script>

<details class="w-fit">
    <summary class="flex items-center justify-between select-none list-none cursor-pointer w-fit gap-1.5 font-semibold">
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
             class="fill-current transition-transform [details[open]_&]:rotate-180">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <div class="absolute bg-tan py-2 px-2 mt-1 rounded-lg">
        {#each items as item}

            <a href={item.url} target={item.target || '_parent'} class="hover:bg-white/20 p-1 px-2 rounded">
                {item.label}
            </a>

        {/each}
    </div>
</details>