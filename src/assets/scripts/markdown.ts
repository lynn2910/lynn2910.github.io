const REGEX_EXTRACTOR: RegExp = /#{1,6}.+(?=\n)/g;

import markdownit from 'markdown-it';
import hljs from 'highlight.js';

const md = markdownit({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (_) { /* empty */ }
    }

    return '';
  }
});

function render(source: string): string {
  return md.render(source);
}

function get_headers(source: string): string[] {
  return (source.match(REGEX_EXTRACTOR) || []).map((e) => e.trim());
}

export { get_headers, render }