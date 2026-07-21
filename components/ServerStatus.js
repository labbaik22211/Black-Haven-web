import { useEffect, useState } from "react";

export default function ServerStatus({ ip }) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!ip || ip === "SERVER_IP") return;
    const url = `https://api.mcsrvstat.us/2/${ip}`;
    fetch(url)
      .then((r) => r.json())
      .then((d) => setStatus(d))
      .catch(() => setStatus({ online: false }));
  }, [ip]);

  if (!ip || ip === "SERVER_IP") {
    return (
      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 my-4 rounded">
        <strong>Server IP Not Set:</strong> Add your real SERVER_IP in <code>pages/index.js</code> to show live status.
      </div>
    );
  }

  if (!status) {
    return <div className="p-4 text-center text-gray-500">Loading server status...</div>;
  }

  return (
    <div className="p-4 bg-white shadow rounded-lg border text-center my-4">
      <h3 className="font-bold text-lg">Server: {ip}</h3>
      <p className={`font-semibold ${status.online ? "text-green-600" : "text-red-600"}`}>
        {status.online ? "🟢 Online" : "🔴 Offline"}
      </p>
      {status.online && (
        <p className="text-sm text-gray-600 mt-1">
          {status.players?.online ?? 0} / {status.players?.max ?? 0} Players Online
        </p>
      )}
    </div>
  );
}