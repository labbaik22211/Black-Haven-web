export default function Pricing() {
  const ranks = [
    { name: "VIP", price: "200 tk", perks: ["Priority join", "Custom prefix in chat", "Exclusive commands"] },
    { name: "Elite", price: "500 tk", perks: ["All VIP perks", "Monthly keys", "Special kit access", "Fly in lobby"] }
  ];

  return (
    <div className="space-y-6 py-6">
      <h1 className="text-3xl font-bold text-center">Pricing & Ranks</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {ranks.map((r) => (
          <div key={r.name} className="p-6 bg-white rounded-lg border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{r.name}</h2>
                <span className="text-lg font-semibold text-bhBlue">{r.price}</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {r.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-bhGreen">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href="TEBEX_STORE_URL" 
              target="_blank" 
              rel="noreferrer" 
              className="block text-center bg-bhBlue hover:bg-blue-600 text-white font-bold py-2 rounded transition"
            >
              Buy {r.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}