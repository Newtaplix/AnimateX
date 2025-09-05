import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://animatex.vercel.app'
  
  // Get all component pages dynamically
  const componentCategories = [
    'Buttons', 'Images', 'Navigations', 'Stacks', 'Texts'
  ]
  
  const uiComponents = [
    'accordion', 'aerobtn', 'arrowbtn', 'aurabutton', 'avatar', 'cards2', 
    'circular', 'confirm', 'contentalert', 'deleteBtn', 'fade', 'feedback',
    'gooey', 'hoveraura', 'incrementer', 'infinite', 'meteo', 'otp', 
    'pill', 'pressbtn', 'pulse', 'shimmerbtn', 'squishy', 'stars', 
    'subCard', 'swipecards', 'textblur', 'tiltcard', 'zoop'
  ]

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/components`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/components/docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/components/docs/introduction`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/components/docs/setup`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Generate component category pages
  const categoryPages = componentCategories.map(category => ({
    url: `${baseUrl}/components/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Generate UI component pages
  const uiComponentPages = uiComponents.map(component => ({
    url: `${baseUrl}/components/ui/${component}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...uiComponentPages]
}
