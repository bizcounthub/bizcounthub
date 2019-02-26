import { h } from 'preact';

/**
 * Inserts links into strings with placeholders for open and close tags.
 * @param {string} str
 * @param {Array<tagBegin, tagEnd, attrs>}
 * @return {string|Array<any>} highlightedResult
 */
export class LinksWithPlaceholders {
  /**
   * constructor
   * @param {string} text
   */
  constructor(text) {
    this.text = text;
    this.linkPlaceholders = [];
  }

  addPlaceholder(tagBegin, tagEnd, props) {
    const start = this.text.indexOf(tagBegin);
    const end = this.text.indexOf(tagEnd);
    if (start !== -1 && end !== -1) {
      this.linkPlaceholders.push({
        start,
        end,
        tagBegin,
        tagEnd,
        props,
      });
    }
    return this;
  }

  render() {
    if (!this.linkPlaceholders.length) {
      return this.text;
    }

    this.linkPlaceholders.sort((a, b) => a.start - b.start);

    const content = [];
    let pos = 0;
    this.linkPlaceholders.forEach(({ start, end, tagBegin, tagEnd, props }) => {
      if (start > pos) {
        content.push(this.text.substring(pos, start));
      }
      if (end > start) {
        content.push(
          <a
            id={props.id}
            className={props.className}
            href={props.url}
            onClick={props.onClick}
            data-bhw={props.bhw}
          >
            {this.text.substring(start + tagBegin.length, end)}
          </a>
        );
      }
      pos = end + tagEnd.length;
    });
    if (pos < this.text.length) {
      content.push(this.text.substring(pos)); // tail
    }

    return content;
  }
}

export default {
  load(text) {
    return new LinksWithPlaceholders(text);
  },
};
