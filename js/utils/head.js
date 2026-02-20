/**
 * Head utilities
 * Dynamically inject common head elements
 */

/**
 * Setup common head elements
 * @param {Object} options - Configuration options
 * @param {string} options.title - Page title
 * @param {string} [options.description] - Meta description for SEO
 * @param {boolean} [options.includeAnalytics=true] - Whether to include Google Analytics
 */
export function setUpHead(options = {}) {
	const {
		title = 'Scenic Serenity Arts',
		description = '',
		includeAnalytics = true,
	} = options;

	const head = document.head;

	// Add Google Analytics unless not requested
	if (includeAnalytics) {
		const gtagScript = document.createElement('script');
		gtagScript.async = true;
		gtagScript.src =
			'https://www.googletagmanager.com/gtag/js?id=G-D2Y0WLNB10';
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

		// Add Meta Pixel
		const metaPixelScript = document.createElement('script');
		metaPixelScript.textContent = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2086562512130229');
            fbq('track', 'PageView');
        `;
		head.appendChild(metaPixelScript);

		// Add Meta Pixel noscript fallback
		const metaPixelNoscript = document.createElement('noscript');
		const metaPixelImg = document.createElement('img');
		metaPixelImg.height = 1;
		metaPixelImg.width = 1;
		metaPixelImg.style.display = 'none';
		metaPixelImg.src =
			'https://www.facebook.com/tr?id=2086562512130229&ev=PageView&noscript=1';
		metaPixelNoscript.appendChild(metaPixelImg);
		head.appendChild(metaPixelNoscript);
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

	// Add meta description for SEO if provided
	if (description) {
		const metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		head.appendChild(metaDescription);
	}

	// Add canonical URL
	const canonical = document.createElement('link');
	canonical.rel = 'canonical';
	canonical.href = window.location.href;
	head.appendChild(canonical);

	// Add Open Graph tags for social media sharing
	if (title) {
		const ogTitle = document.createElement('meta');
		ogTitle.setAttribute('property', 'og:title');
		ogTitle.setAttribute('content', title);
		head.appendChild(ogTitle);
	}

	if (description) {
		const ogDescription = document.createElement('meta');
		ogDescription.setAttribute('property', 'og:description');
		ogDescription.setAttribute('content', description);
		head.appendChild(ogDescription);
	}

	const ogImage = document.createElement('meta');
	ogImage.setAttribute('property', 'og:image');
	ogImage.setAttribute(
		'content',
		`${window.location.origin}/assets/images/og-image.png`
	);
	head.appendChild(ogImage);

	const ogUrl = document.createElement('meta');
	ogUrl.setAttribute('property', 'og:url');
	ogUrl.setAttribute('content', window.location.href);
	head.appendChild(ogUrl);

	const ogType = document.createElement('meta');
	ogType.setAttribute('property', 'og:type');
	ogType.setAttribute('content', 'website');
	head.appendChild(ogType);

	// Add structured data (JSON-LD) for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Artist',
		name: 'Caroline Jones',
		url: window.location.origin,
		sameAs: [
			'https://www.etsy.com/shop/ScenicSerenityArts',
			'https://www.facebook.com/ScenicSerenityArts/',
			'https://www.instagram.com/scenicserenityarts/',
		],
		image: `${window.location.origin}/assets/images/crj-headshot-art.jpg`,
		description:
			'Software developer and artist creating original watercolor paintings, fiber arts, and functional decor.',
	};

	const structuredDataScript = document.createElement('script');
	structuredDataScript.type = 'application/ld+json';
	structuredDataScript.textContent = JSON.stringify(structuredData);
	head.appendChild(structuredDataScript);

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

	// Preload critical CSS for performance
	const preloadVariablesCSS = document.createElement('link');
	preloadVariablesCSS.rel = 'preload';
	preloadVariablesCSS.as = 'style';
	preloadVariablesCSS.href = 'css/variables.css';
	head.appendChild(preloadVariablesCSS);

	const preloadGlobalCSS = document.createElement('link');
	preloadGlobalCSS.rel = 'preload';
	preloadGlobalCSS.as = 'style';
	preloadGlobalCSS.href = 'css/global.css';
	head.appendChild(preloadGlobalCSS);

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
