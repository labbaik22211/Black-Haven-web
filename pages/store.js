export default function Store() {
  const items = [
    { name: "Diamond Sword", price: "50 tk", desc: "Sharpness V + Strength Boost" },
    { name: "Lucky Crate Key", price: "30 tk", desc: "Open at spawn for random epic loot" }
  ];

  return (
    <div className="space-y-6 py-6">
      <h1 className="text-3xl font-bold text-center">In-Game Store</h1>
      
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((i) => (
          <div key={i.name} className="p-4 bg-white rounded border flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{i.name}</h3>
              <p className="text-sm text-gray-600">{i.desc}</p>
              <span className="font-bold text-bhGreen mt-1 inline-block">{i.price}</span>
            </div>
            <a 
              href="TEBEX_STORE_URL" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-bhBlue text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-600"
            >
              Purchase
            </a>
          </div>
        ))}
      </div>
      
      <p className="text-center text-xs text-gray-500 mt-6">
        * Standard store links go through Tebex. Create your packages on Tebex and link them here.
      </p>
    </div>
  );
}