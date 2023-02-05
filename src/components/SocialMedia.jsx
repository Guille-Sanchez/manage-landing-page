import React from 'react'

function SocialMedia () {
  const SOCIAL_MEDIA = [{ src: '/icon-facebook.svg', alt: 'Facebook Logo', href: 'https://es-la.facebook.com/' },
    { src: '/icon-youtube.svg', alt: 'Youtube Logo', href: 'https://www.youtube.com/' },
    { src: '/icon-twitter.svg', alt: 'Twitter Logo', href: 'https://twitter.com/' },
    { src: '/icon-pinterest.svg', alt: 'Pinterest Logo', href: 'https://www.pinterest.en/' },
    { src: '/icon-instagram.svg', alt: 'Instagram Logo', href: 'https://www.instagram.com/' }
  ]
  return (
    <section aria-label="Social Media Links" className="flex justify-evenly items-center md:gap-5 pt-10"
  >
    {SOCIAL_MEDIA.map((item) => {
      return (
        <a key={item.alt} href= { item.href }>
          <img className="w-8" src={ item.src } alt={ item.alt } />
        </a>
      )
    })}
  </section>
  )
}

export default SocialMedia
