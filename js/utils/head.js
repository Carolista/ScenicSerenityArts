/**
 * Head utilities
 * Dynamically inject common head elements
 */

/**
 * Setup common head elements
 * @param {Object} options - Configuration options
 * @param {string} options.title - Page title
 * @param {boolean} [options.includeAnalytics=false] - Whether to include Google Analytics
 */
export function setUpHead(options = {}) {
	const { title = 'Scenic Serenity Arts', includeAnalytics = false } =
		options;

	const head = document.head;

	// Add Google Analytics if requested (typically for index page)
	if (includeAnalytics) {
		const gtagScript = document.createElement('script');
		gtagScript.async = true;
		gtagScript.src =
			'https://www.googletagmanager.com/gtag/js?id=G-YHZKZ8TB6S';
		head.appendChild(gtagScript);

		const gtagConfig = document.createElement('script');
		gtagConfig.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-YHZKZ8TB6S');
        `;
		head.appendChild(gtagConfig);
	}

	// Add meta tags
	const metaCharset = document.createElement('meta');
	metaCharset.setAttribute('charset', 'UTF-8');
	head.appendChild(metaCharset);

	const metaViewport = document.createElement('meta');
	metaViewport.setAttribute('name', 'viewport');
	metaViewport.setAttribute(
		'content',
		'width=device-width, initial-scale=1.0'
	);
	head.appendChild(metaViewport);

	// Add Google Fonts preconnects
	const preconnect1 = document.createElement('link');
	preconnect1.rel = 'preconnect';
	preconnect1.href = 'https://fonts.googleapis.com';
	head.appendChild(preconnect1);

	const preconnect2 = document.createElement('link');
	preconnect2.rel = 'preconnect';
	preconnect2.href = 'https://fonts.gstatic.com';
	preconnect2.crossOrigin = 'anonymous';
	head.appendChild(preconnect2);

	// Add Google Fonts stylesheet
	const googleFonts = document.createElement('link');
	googleFonts.href =
		'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Tenor+Sans&family=Cookie&display=swap';
	googleFonts.rel = 'stylesheet';
	head.appendChild(googleFonts);

	// Add FontAwesome CSS
	const fontAwesomeCSS = document.createElement('link');
	fontAwesomeCSS.rel = 'stylesheet';
	fontAwesomeCSS.href =
		'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
	head.appendChild(fontAwesomeCSS);

	// Add FontAwesome Kit
	const fontAwesomeKit = document.createElement('script');
	fontAwesomeKit.src = 'https://kit.fontawesome.com/679a59d672.js';
	fontAwesomeKit.crossOrigin = 'anonymous';
	head.appendChild(fontAwesomeKit);

	// Add CSS stylesheets
	const variablesCSS = document.createElement('link');
	variablesCSS.rel = 'stylesheet';
	variablesCSS.href = 'css/variables.css';
	head.appendChild(variablesCSS);

	const globalCSS = document.createElement('link');
	globalCSS.rel = 'stylesheet';
	globalCSS.href = 'css/global.css';
	head.appendChild(globalCSS);

	// Set page title last (after all other head elements)
	document.title = title;
}
