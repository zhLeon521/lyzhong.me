import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const GaScript = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  )
}

export default GaScript

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (options) => {
  window.gtag?.('event', options.action, {
    event_category: options.category,
    event_label: options.label,
    value: options.value,
  })
}
