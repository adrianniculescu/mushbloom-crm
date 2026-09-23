import React from 'react';
import { COVERAGE_GROUPS } from '@/data/leadStreams';

const DataCoverageTable: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {COVERAGE_GROUPS.map((group) => (
      <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <h3 className="text-lg font-semibold text-white mb-1 font-['Space_Grotesk']">
          {group.title}
        </h3>
        <p className="text-xs text-gray-400 mb-4">{group.note}</p>
        <div className="max-h-80 overflow-y-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">{group.title} — indicative record counts</caption>
            <thead className="text-gray-200">
              <tr>
                <th scope="col" className="py-2 font-semibold">Source / market</th>
                <th scope="col" className="py-2 font-semibold text-right">Indicative records</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {group.rows.map((row) => (
                <tr key={row.name}>
                  <th scope="row" className="py-2 font-normal">{row.name}</th>
                  <td className="py-2 text-right tabular-nums">{row.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

export default DataCoverageTable;
