<script lang="ts">
	import { onMount } from "svelte";

	let x = $state(-50);
	let y = $state(-50);
	let isClicked = $state(false);

	function onMouseMove(mouse_event: MouseEvent) {
		x = mouse_event.x;
		y = mouse_event.y;
	}

	function onMouseDown() {
		isClicked = true;
	}

	function onMouseUp() {
		isClicked = false;
	}

	onMount(() => {
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);

		return function () {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mouseup", onMouseUp);
		}
	});
</script>

<div
        class="fixed bg-alabaster border-2 border-brown-coffee w-5 h-5 rounded-4xl z-50
           transition-transform duration-100 ease-out
           {isClicked ? 'clicked-effect' : ''}"
        style="top: calc({y}px - 0.75rem); left: calc({x}px - 0.75rem);">
</div>

<style>
    .clicked-effect {
        transform: scale(1.5);

    }
</style>