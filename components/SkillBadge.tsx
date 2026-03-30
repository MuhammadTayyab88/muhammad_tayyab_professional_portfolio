export function SkillBadge({ name, progress = 0 }: { name: string; progress?: number }) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm">
        <div>{name}</div>
        <div className="opacity-80">{progress}%</div>
      </div>
      <div className="mt-2 h-2 bg-neutral-800 rounded">
        <div className="h-2 rounded bg-gradient-to-r from-accent to-purple-600" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
