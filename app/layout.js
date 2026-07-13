
import './globals.css'

export const metadata = {
  metadataBase: new URL("https://yashamishra.in"),
  title: "Best Software Developer in Bihar | Top Software Engineer in Rangra, Katihar & Bhagalpur | Yash Ankush Mishra",
  description: "Yash Ankush Mishra is the best software developer in Rangra, Katihar, Bhagalpur & Bihar. Ranked #1 for custom software, mobile apps, and AI solutions near you. Expert Django & Next.js Consultant.",
  keywords: "best software developer in rangra, rangra developer, best software developer in katihar, best software developer in bhagalpur, best software developer in Bihar, top software engineer Patna, best software developer near me, freelance web developer in Bhagalpur, Django consultant India, custom software developer Bihar, affordable web developer Patna, Yash Ankush Mishra, yashankushmishra, yashamishra",
  authors: [{ name: "Yash Ankush Mishra" }],
  creator: "Yash Ankush Mishra",
  publisher: "Yash Ankush Mishra",
  alternates: {
    canonical: "https://yashamishra.in/",
    languages: {
      "en-IN": "https://yashamishra.in/",
    },
  },
  openGraph: {
    title: "Yash Ankush Mishra | Best Software Developer in Bhagalpur & Bihar",
    description: "Expert Django & Next.js Developer for startups. Custom software solutions in Jaipur & Bihar. Creator of 5+ live products.",
    url: "https://yashamishra.in/",
    siteName: "Yash Ankush Mishra Portfolio",
    images: [
      {
        url: "https://yashamishra.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Ankush Mishra - Top Software Developer in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Ankush Mishra | Top Software Developer India",
    description: "Freelance Web Developer in Bihar | Next.js & Django Specialist. Creator of Y.S.M AI.",
    siteId: "@yashankush",
    creator: "@yashankush",
    images: ["https://yashamishra.in/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "GA6m3KC-4pJb01",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Yash AI",
  },
  other: {
    "msapplication-navbutton-color": "#05050f",
    "theme-color": "#05050f",
    "geo.region": "IN-BR",
    "geo.placename": "Rangra, Bhagalpur, Patna, Bihar, Jaipur",
    "geo.position": "25.3789;87.1643",
    "ICBM": "25.3789, 87.1643",
    "DC.title": "Yash Ankush Mishra - Best Software Developer in Bhagalpur & Bihar",
    "DC.creator": "Yash Ankush Mishra",
    "DC.subject": "Software Development, Django, Next.js, AI, Bihar Tech",
    "DC.description": "Elite software developer specialized in AI, Django and Next.js. Serving all districts of Bihar.",
    "DC.publisher": "Yash Ankush Mishra",
    "DC.language": "en",
    "twitter:label1": "Expertise",
    "twitter:data1": "Django & Next.js",
    "twitter:label2": "Location",
    "twitter:data2": "India",
  }
}

export const viewport = {
  themeColor: '#05050f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        
        <link rel="stylesheet" href="/style.css" />
        <link rel="icon" href="/yash.jpg" type="image/jpeg" />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://yashamishra.in/#person",
        "name": "Yash Ankush Mishra",
        "alternateName": ["Yash A. Mishra", "yashankushmishra", "yashamishra", "Rangra Developer", "YSM"],
        "url": "https://yashamishra.in/",
        "image": "https://yashamishra.in/yash.jpg",
        "jobTitle": "Lead Software Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Telepathy Infotech Pvt. Ltd."
        },
        "knowsAbout": ["Python", "Django", "React", "Next.js", "Mobile App Development", "AI/ML", "FinTech", "EdTech", "Cybersecurity", "DevOps"],
        "description": "Yash Ankush Mishra is a top-rated software developer in Bihar and Rajasthan, specializing in AI-driven ERP systems and scalable web applications.",
        "sameAs": [
          "https://linkedin.com/in/yash-kumar-342330213",
          "https://github.com/yashkumaryk066",
          "https://twitter.com/yashankush",
          "https://www.wikidata.org/wiki/Q1156",
          "https://www.wikidata.org/wiki/Q131330",
          "https://www.wikidata.org/wiki/Q845188"
        ]
      },
      {
        "@type": "ImageObject",
        "url": "https://yashamishra.in/yash.jpg",
        "width": "800",
        "height": "800",
        "caption": "Yash Ankush Mishra - Best Software Developer in Rangra, Katihar, Bhagalpur & Bihar",
        "representativeOfPage": "true"
      },
      {
        "@type": "LocalBusiness",
        "name": "Yash Ankush Mishra - Best Software Developer in Rangra, Katihar, Bhagalpur & Bihar",
        "image": "https://yashamishra.in/yash.jpg",
        "@id": "https://yashamishra.in/",
        "url": "https://yashamishra.in/",
        "telephone": "+918356926231",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rangra Chowk",
          "addressLocality": "Rangra",
          "addressRegion": "Bihar",
          "postalCode": "853205",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.3789,
          "longitude": 87.1643
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Telepathy Infotech" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Exceptional skill in Django and AI integration. Yash is our top developer for complex products."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Aman Raj" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Best software developer in Bhagalpur. Delivered my app in record time with perfect UI."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram Singh" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Highly professional Django expert. Recommended for startups in Patna and Bihar."
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Custom Software Development Bihar & Rajasthan",
        "serviceType": "Software Engineering",
        "provider": { "@id": "https://yashamishra.in/#person" },
        "areaServed": [
          "Patna", "Bhagalpur", "Muzaffarpur", "Purnia", "Gaya", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger", "Rangra", "Saharsa", "Sasaram", "Hajipur", "Bettiah", "Motihari", "Siwan", "Chapra", "Jehanabad", "Aurangabad", "Banka", "Jamui", "Kishanganj", "Madhepura", "Madhubani", "Nawada", "Rohtas", "Samastipur", "Sheohar", "Sitamarhi", "Supaul", "Vaishali", "West Champaran", "East Champaran", "Jaipur", "Rajasthan", "Mumbai"
        ],
        "description": "High-end software development services including Django backends, Next.js frontends, and AI-powered automation for startups and enterprises."
      },
      {
        "@type": "WebSite",
        "@id": "https://yashamishra.in/#website",
        "url": "https://yashamishra.in/",
        "name": "Yash Ankush Mishra Portfolio",
        "description": "Elite Software Developer in Bihar | AI & Full Stack Specialist",
        "publisher": { "@id": "https://yashamishra.in/#person" },
        "potentialAction": [{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://yashamishra.in/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".hero-name", ".section-title", ".ranking-card p"]
        }
      },
      {
        "@type": "Organization",
        "name": "Yash Ankush Mishra - Tech Solutions",
        "logo": "https://yashamishra.in/yash.jpg",
        "url": "https://yashamishra.in/"
      },
      {
        "@type": "SiteNavigationElement",
        "name": ["About", "Projects", "Skills", "Experience", "Contact", "Blog"],
        "url": [
          "https://yashamishra.in/#about",
          "https://yashamishra.in/#projects",
          "https://yashamishra.in/#skills",
          "https://yashamishra.in/#experience",
          "https://yashamishra.in/#contact",
          "https://yashamishra.in/blog.html"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Y.S.M AI + Advance Education System",
        "operatingSystem": "Web",
        "applicationCategory": "EducationalApplication, BusinessApplication",
        "softwareVersion": "2.1.0",
        "featureList": "AI-powered profit tracking, automated attendance, dynamic fee management, real-time ROI analytics",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "128" },
        "url": "https://yashamishra.pythonanywhere.com/"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Scan Khana",
        "operatingSystem": "Web",
        "applicationCategory": "HealthApplication, MultimediaApplication",
        "softwareVersion": "1.5.2",
        "featureList": "Computer Vision food detection, automated calorie calculation, macro-nutrient breakdown",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "95" },
        "url": "https://scan-khana.vercel.app/"
      },
      {
        "@type": "SoftwareApplication",
        "name": "SettleStack",
        "operatingSystem": "Android, iOS, Web",
        "applicationCategory": "FinanceApplication",
        "softwareVersion": "1.0.5",
        "featureList": "Real-time ledger sync, multi-currency support, automated debt reconciliation",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "15" },
        "url": "https://splitbalance-b552b.web.app/login"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is the best software developer in Rangra and Katihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yash Ankush Mishra (Rangra Developer) is highly rated as the best software developer in Rangra and Katihar, specializing in local business automation and advanced web apps."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the best software developer in Bhagalpur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yash Ankush Mishra is widely recognized as the best software developer in Bhagalpur, specialized in Django, Next.js, and AI-powered custom software solutions."
            }
          },
          {
            "@type": "Question",
            "name": "How to hire a freelance web developer in Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can hire Yash Ankush Mishra, a top freelance web developer in Bihar, by contacting him via his portfolio at yashamishra.in for scalable web and mobile applications."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yashamishra.in/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://yashamishra.in/blog.html" }
        ]
      }
    ]
  }) }}
        />
    </head>
      <body suppressHydrationWarning>
        {children}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.2/dist/lottie-player.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js" defer></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
        <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js" defer></script>
        <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js" defer></script>
        <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js" defer></script>
        
        <script src="/main.js" defer></script>
      </body>
    </html>
  )
}
