export interface Figure {
	url: string;
	id: number;
	text?: string;
}

let _figures_list: Figure[] = $state([]);
let _show_figures: boolean = $state(false);
let _figure_selection_list: number[] | null = $state(null);

let _active_figure_index: number = $state(0);

//
//
// --- Getters ---
//
//


export function get_show_figures(): boolean {
	return _show_figures;
}

export function get_figure_selection_list(): number[] | null {
	return _figure_selection_list;
}

export function get_figures(): Figure[] {
	return _figures_list;
}

export function get_active_figure_index(): number {
	return _active_figure_index;
}

export function get_active_figure(): Figure | undefined {
	if (!_show_figures || !_figure_selection_list || _figure_selection_list.length === 0) {
		return undefined;
	}

	const selectedFigures = _figures_list.filter(figure => _figure_selection_list!.includes(figure.id));

	if (selectedFigures.length === 0) {
		return undefined;
	}

	const effectiveIndex = _active_figure_index % selectedFigures.length; // Handle wrap-around
	return selectedFigures[effectiveIndex >= 0 ? effectiveIndex : effectiveIndex + selectedFigures.length];
}

export function can_navigate_prev(): boolean {
	if (!_show_figures || !_figure_selection_list) return false;
	const selectedFiguresCount = _figures_list.filter(figure => _figure_selection_list!.includes(figure.id)).length;
	return selectedFiguresCount > 1;
}

export function can_navigate_next(): boolean {
	return can_navigate_prev();
}

//
//
// --- Getters ---
//
//


/**
 * Define the new list of figures that are available.
 * @param {Figure[]} new_figures
 */
export function set_figures(new_figures: Figure[]) {
	_figures_list = new_figures;
}

function open_figure_popup() {
	_show_figures = true;
	_active_figure_index = 0;
	document.body.style['overflow'] = 'hidden';
}

export function close_figure_popup() {
	_figure_selection_list = null;
	_show_figures = false;
	_active_figure_index = 0;
	document.body.style['overflow'] = '';
}

export function open_single_figure(figure_id: number) {
	_figure_selection_list = [figure_id];
	open_figure_popup();
}

export function open_figures(figures: number[]) {
	_figure_selection_list = figures;
	open_figure_popup();
}

export function set_show_figures(should_show_figures: boolean) {
	_show_figures = should_show_figures;
	if (!should_show_figures) {
		close_figure_popup();
	}
}

export function navigate_prev() {
	if (!can_navigate_prev()) return;

	const selectedFigures = _figures_list.filter(figure => _figure_selection_list!.includes(figure.id));
	if (selectedFigures.length > 0) {
		_active_figure_index = (_active_figure_index - 1 + selectedFigures.length) % selectedFigures.length;
	}
}

export function navigate_next() {
	if (!can_navigate_next()) return;

	const selectedFigures = _figures_list.filter(figure => _figure_selection_list!.includes(figure.id));
	if (selectedFigures.length > 0) {
		_active_figure_index = (_active_figure_index + 1) % selectedFigures.length;
	}
}