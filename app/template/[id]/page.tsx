import { notFound } from 'next/navigation'
import LifeCoachPremium from '@/components/templates/life-coach-premium'
import PersonalTrainerPremium from '@/components/templates/personal-trainer-premium'
import AuthorPremium from '@/components/templates/author-premium'
import PhotographerPremium from '@/components/templates/photographer-premium'
import InteriorDesignPremium from '@/components/templates/interior-design-premium'

// Simple fallback component for templates that don't have premium versions yet
function ComingSoonTemplate({ templateName }: { templateName: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{templateName}</h1>
        <p className="text-xl text-slate-600 mb-8">Premium template coming soon!</p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <p className="text-slate-700">
            This template is currently being developed. Check back soon for the full premium version.
          </p>
        </div>
      </div>
    </div>
  )
}

const templateComponents: Record<string, React.ComponentType> = {
  'life-coach': LifeCoachPremium,
  'personal-trainer': PersonalTrainerPremium,
  'author': AuthorPremium,
  'photographer': PhotographerPremium,
  'luxe-interior-design': InteriorDesignPremium,
  // Fallback templates for the ones not yet implemented
  'architect': () => <ComingSoonTemplate templateName="Architect" />,
  'chef': () => <ComingSoonTemplate templateName="Chef" />,
  'therapist': () => <ComingSoonTemplate templateName="Therapist" />,
  'consultant': () => <ComingSoonTemplate templateName="Business Consultant" />,
  'designer': () => <ComingSoonTemplate templateName="Interior Designer" />,
  'musician': () => <ComingSoonTemplate templateName="Musician" />,
}

interface TemplatePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params
  const TemplateComponent = templateComponents[id]
  
  if (!TemplateComponent) {
    notFound()
  }

  return <TemplateComponent />
}

export function generateStaticParams() {
  return Object.keys(templateComponents).map((id) => ({
    id,
  }))
}
