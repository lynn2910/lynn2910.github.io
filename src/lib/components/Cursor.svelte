<script lang="ts">
	import { onMount } from "svelte";

	let x = $state(-50);
	let y = $state(-50);
	let isClicked = $state(false);
	let isHoveringLink = $state(false);

	const hoverable_tags = ['a', 'button'];

	function onMouseMove(mouse_event: MouseEvent) {
		x = mouse_event.x;
		y = mouse_event.y;

		const target = mouse_event.target as HTMLElement;
		if (target && typeof target.closest === 'function') {
			isHoveringLink = !!target.closest('a');
        } else {
			let el = target;
			let found = false;
			while (el && el !== document.body) {
				if (hoverable_tags.includes(el.tagName.toLowerCase())) {
					found = true;
					break;
				}
				el = el.parentElement as HTMLElement;
			}
			isHoveringLink = found;
        }
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
        class="fixed pointer-events-none box-border bg-alabaster border-2 border-brown-coffee w-5 h-5 rounded-4xl z-50
           transition-transform duration-100 ease-out
           {isHoveringLink ? 'bg-mountbatten-pink link_hover_effect' : ''}
           {isClicked ? 'clicked-effect' : ''}"
        style="top: calc({y}px - 0.75rem); left: calc({x}px - 0.75rem);">
</div>

<style>
    .clicked-effect {
        transform: scale(1.5);
    }

    .link_hover_effect {
        transform: scale(1.3);
    }
</style>