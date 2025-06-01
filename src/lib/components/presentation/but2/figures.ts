export interface Figure {
	url: string;
	id: number;
	text?: string;
}

export let figures: Figure[] = [];

export let show_figures: boolean = $state(false);
export let selected_figure: string | null = $state(null);

export function open_single_figure(figure_id: string) {
}