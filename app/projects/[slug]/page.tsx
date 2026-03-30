import projects from '../../../utils/projects'
import CaseStudy from '../../../components/CaseStudy'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return <div className="py-8">Project not found</div>

  return (
    <section className="py-6">
      <CaseStudy project={project} />
    </section>
  )
}
