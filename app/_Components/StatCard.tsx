type Props = {
  title: string
  value: string
}

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl shadow">
      <h3 className="text-gray-300">{title}</h3>
      <p className="text-xl font-bold mt-2 text-gray-300">{value}</p>
    </div>
  )
}