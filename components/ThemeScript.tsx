// Renders an inline script that runs before React hydration to set the
// correct data-theme attribute, preventing a flash of the wrong theme.
export default function ThemeScript() {
  const script = `
    (function() {
      try {
        var t = localStorage.getItem('vp-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', t);
      } catch(e) {}
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
