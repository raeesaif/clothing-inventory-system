import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Outerwear", value: 28, color: "#f59e0b" },
  { name: "Dresses", value: 22, color: "#1d4ed8" },
  { name: "Blazers", value: 18, color: "#2f855a" },
  { name: "Shirts", value: 15, color: "#9333ea" },
  { name: "Knitwear", value: 10, color: "#ef4444" },
  { name: "Accessories", value: 7, color: "#0ea5a4" }
]

export default function CategoryChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">

      <h2 className="text-lg font-semibold mb-6">
        Categories
      </h2>

      <div className="flex flex-col items-center">

        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 mt-6">

          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-sm text-gray-600">

              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              {item.name}

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
