<script lang="ts">
	export interface Tab {
		name: string;
		id: string;
	}

	const {
		tabs,
		on_tab_clicked,
		activeTabId
	}: {
		tabs: Tab[],
		on_tab_clicked: (tab_id: string) => void,
		activeTabId: string
	} = $props();

	function handle_tab_click(tab_id: string) {
		on_tab_clicked(tab_id);
	}
</script>

<div class="w-full">
    <div class="flex border-b border-light-gray mb-4">
        {#each tabs as tab (tab.id)}
            <button
                    type="button"
                    onclick={() => handle_tab_click(tab.id)}
                    class="
                    py-2 px-4
                    text-lg font-display
                    border-b-2
                    transition-colors duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-brown-coffee focus:ring-opacity-50
                    {activeTabId === tab.id
                        ? 'border-sepia text-sepia font-bold'
                        : 'border-transparent text-gray-600 hover:text-sepia hover:border-sepia/50'}
                "
            >
                {tab.name}
            </button>
        {/each}
    </div>

    <div>
        <slot/>
    </div>
</div>