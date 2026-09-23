import React, { useMemo, useState } from 'react';
import { STREAM_ROWS } from '@/data/leadStreams';

const LeadStreamsTable: React.FC = () => {
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return STREAM_ROWS;
    return STREAM_ROWS.filter(
      (r) => r.name.toLowerCase().includes(q) || r.group.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div>
      <div className="mb-6 max-w-md">
        <label htmlFor="stream-search" className="block text-sm font-medium text-gray-200 mb-2">
          Search verticals
        </label>
        <input
          id="stream-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="For example: solar, mortgage, B2B"
          className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Indicative availability ranges by lead vertical. Volumes are typical ranges, not
            guaranteed delivery.
          </caption>
          <thead className="bg-white/5 text-gray-200">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Vertical</th>
              <th scope="col" className="px-4 py-3 font-semibold">Category</th>
              <th scope="col" className="px-4 py-3 font-semibold">Frequency</th>
              <th scope="col" className="px-4 py-3 font-semibold">Indicative volume</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-gray-300">
            {rows.map((r) => (
              <tr key={r.name} className="hover:bg-white/5">
                <th scope="row" className="px-4 py-3 font-medium text-white">{r.name}</th>
                <td className="px-4 py-3">{r.group}</td>
                <td className="px-4 py-3">{r.frequency}</td>
                <td className="px-4 py-3">{r.volume}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-400">
                  No verticals match that search. Ask us — availability changes regularly.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadStreamsTable;
