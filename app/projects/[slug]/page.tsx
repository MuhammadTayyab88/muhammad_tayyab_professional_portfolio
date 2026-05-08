import projects from '../../../utils/projects'
import CaseStudy from '../../../components/CaseStudy'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return <div className="py-8">Project not found</div>

  return (
    <section className="py-4 sm:py-6 min-w-0">
      <CaseStudy project={project} />
    </section>
  )
}
