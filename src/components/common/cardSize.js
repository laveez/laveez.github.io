// Kept in a file of its own because card.js and vite.config.js load it outside the app:
// anything imported here runs in plain Node too.

// The size link previews expect
export const CARD_SIZE = { width: 1200, height: 630 };

// A README shows the image about 560px wide; at this height it stays a strip, not a poster
export const BANNER_SIZE = { width: 1200, height: 300 };
