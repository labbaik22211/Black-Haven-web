import ServerStatus from "../components/ServerStatus";

export default function Home() {
  const SERVER_IP = "SERVER_IP"; // এখানে আপনার আসল Server IP দিন (যেমন: play.blackhaven.com)

  return (
    <div className="space-y-8 py-6">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Black Haven</h1>
        <p className="text-gray-600">A cozy SMP where everyone can build, fight, and have fun.</p>
      </div>

      <ServerStatus ip={SERVER_IP} />

      <div className="bg-white p-6 rounded-lg border shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Monthly Membership</h2>
          <p className="text-sm text-gray-600">Get full perks, monthly crate keys, and priority queue access.</p>
          <span className="inline-block mt-2 font-bold text-bhBlue text-lg">100 tk / month</span>
        </div>
        <a 
          href="/store"
          
          className="bg-bhGreen hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition"
        >
          Subscribe Now
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-white border rounded">
          <h3 className="font-bold mb-1">Friendly Community</h3>
          <p className="text-xs text-gray-600">Active and welcoming players everyday.</p>
        </div>
        <div className="p-4 bg-white border rounded">
          <h3 className="font-bold mb-1">Active Staff</h3>
          <p className="text-xs text-gray-600">24/7 moderation for safe gameplay.</p>
        </div>
        <div className="p-4 bg-white border rounded">
          <h3 className="font-bold mb-1">Secure Payments</h3>
          <p className="text-xs text-gray-600">Powered by Tebex official integration.</p>
        </div>
      </div>
    </div>
  );
}