<script lang="ts">
	import {onMount} from "svelte";

	let x = $state(-50);
	let y = $state(-50);
	let initiated = false;
	let isClicked = $state(false);
	let isHoveringLink = $state(false);
	let isHoveredElementDisabled = $state(false);

	const hoverable_tags = ['a', 'button'];

	function onMouseMove(mouse_event: MouseEvent) {
		x = mouse_event.x;
		y = mouse_event.y;

		if (!initiated && x > 0 && y > 0) {
			document.body.style['cursor'] = 'none !important';
			initiated = true;
		}

		const target = mouse_event.target as HTMLElement;
		isHoveredElementDisabled = ((target as any)['disabled'] || target.classList.contains('cursor-disabled')) ?? false;

		if (target && (typeof target.closest === 'function' || target.classList.contains('cursor-pointer'))) {
			isHoveringLink = !!hoverable_tags.some(ht => target.closest(ht));
		} else {
			let el = target;
			let found = false;
			while (el && el !== document.body) {
				if (el.classList.contains('cursor-pointer') || hoverable_tags.includes(el.tagName.toLowerCase())) {
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
        class="fixed pointer-events-none box-border bg-alabaster border-2 border-brown-coffee w-5 h-5 rounded-4xl z-[999999]
           transition-transform duration-100 ease-out
           {isHoveringLink ? 'bg-mountbatten-pink link_hover_effect' : ''}
           {isClicked ? 'clicked-effect' : ''}"
        style="top: calc({y}px - 0.75rem); left: calc({x}px - 0.75rem);">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
         class:hidden={!isHoveredElementDisabled}
         class="fill-brown-coffee w-full h-full">
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/>
    </svg>
</div>

<style>
    .clicked-effect {
        transform: scale(1.5);
    }

    .link_hover_effect {
        transform: scale(1.3);
    }
</style>