import { useState, useEffect, useCallback } from 'react';
import {
  kapaatSchedules,
  getActiveUpdates,
  formatUpdateDate,
  formatKapaatDate,
  getKapaatStatus,
  getCategoryLabel,
  getSeverityColor,
  verifiedSources,
} from '../data/travelUpdates';
import type { TravelUpdate } from '../data/travelUpdates';

type CategoryFilter = TravelUpdate['category'] | 'all';

const REFRESH_INTERVAL = 30 * 60 * 1000; // 30 minutes

function formatRefreshTime(date: Date): string {
  return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}

export default function TravelUpdates() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [kapaatOpen, setKapaatOpen] = useState(false);
  const [updates, setUpdates] = useState(() => getActiveUpdates());
  const [lastRefreshed, setLastRefreshed] = useState(() => new Date());
  const [refreshing, setRefreshing] = useState(false);

  const refreshUpdates = useCallback(() => {
    setRefreshing(true);
    // Simulate network fetch delay, re-read data source
    setTimeout(() => {
      setUpdates(getActiveUpdates());
      setLastRefreshed(new Date());
      setRefreshing(false);
    }, 1200);
  }, []);

  // Auto-refresh every 30 minutes
  useEffect(() => {
    const interval = setInterval(refreshUpdates, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [refreshUpdates]);

  const filteredUpdates = categoryFilter === 'all'
    ? updates
    : updates.filter(u => u.category === categoryFilter);

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All Updates' },
    { value: 'road', label: '🛣️ Road' },
    { value: 'weather', label: '🌦️ Weather' },
    { value: 'advisory', label: '📋 Advisory' },
    { value: 'temple', label: '🛕 Temple' },
    { value: 'permit', label: '📄 Permit' },
    { value: 'general', label: 'ℹ️ General' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-title">Uttarakhand Travel Updates</h1>
          <p className="hero-subtitle mb-8">
            Live verified updates on road conditions, weather, temple openings, permits,
            and travel advisories — sourced from government and official channels.
          </p>
        </div>
      </section>

      {/* Moving Ticker */}
      <div className="bg-primary-dark overflow-hidden whitespace-nowrap relative">
        {refreshing && (
          <div className="absolute inset-0 bg-primary-dark/80 z-10 flex items-center justify-center">
            <span className="text-secondary text-sm animate-pulse">🔄 Refreshing updates…</span>
          </div>
        )}
        <div className="animate-marquee py-2.5 text-secondary text-sm font-medium">
          {/* ── First copy ── */}
          <span className="mx-8 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            LIVE — Last refreshed: {formatRefreshTime(lastRefreshed)}
          </span>
          <span className="mx-8"> Latest: {updates[0]?.title || 'No updates'}</span>
          <span className="mx-8">🛕 Kapaat Schedule 2026 available</span>
          <span className="mx-8">🛣️ Live road & weather updates for Uttarakhand</span>
          <span className="mx-8">🔔 {updates.length} active update{updates.length !== 1 ? 's' : ''} from {new Set(updates.map(u => u.source)).size} sources</span>
          {/* ── Duplicate copy for seamless loop ── */}
          <span className="mx-8 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            LIVE — Last refreshed: {formatRefreshTime(lastRefreshed)}
          </span>
          <span className="mx-8"> Latest: {updates[0]?.title || 'No updates'}</span>
          <span className="mx-8">🛕 Kapaat Schedule 2026 available</span>
          <span className="mx-8">🛣️ Live road & weather updates for Uttarakhand</span>
          <span className="mx-8">🔔 {updates.length} active update{updates.length !== 1 ? 's' : ''} from {new Set(updates.map(u => u.source)).size} sources</span>
        </div>
      </div>

      <section className="section-py px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">

          {/* ═══ Main Content ═══ */}
          <div className="lg:col-span-2 space-y-8">

            {/* ── Kapaat Schedule Section (Dropdown) ── */}
            <section>
              <button
                onClick={() => setKapaatOpen(!kapaatOpen)}
                className="w-full flex items-center justify-between gap-3 card p-5"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="text-3xl">🛕</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      Kapaat Schedule 2026
                    </h2>
                    <p className="text-gray-500 text-sm">Temple door opening & closing dates for Uttarakhand's major shrines</p>
                  </div>
                </div>
                <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${kapaatOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {kapaatOpen && (
              <div className="space-y-4 mt-4">
                {kapaatSchedules.map((temple) => {
                  const statusText = getKapaatStatus(temple);
                  const isOpen = statusText === 'Currently Open';
                  const isClosed = statusText === 'Closed for Season';

                  return (
                    <div
                      key={temple.id}
                      className={`card border-l-4 p-5 ${
                        isOpen ? 'border-green-500' :
                        isClosed ? 'border-red-400' :
                        'border-amber-400'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{temple.templeName}</h3>
                          <p className="text-sm text-gray-500">{temple.location} • {temple.altitude}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap ${
                          isOpen ? 'bg-green-100 text-green-700' :
                          isClosed ? 'bg-red-100 text-red-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${
                            isOpen ? 'bg-green-500' : isClosed ? 'bg-red-500' : 'bg-amber-500'
                          }`} />
                          {statusText}
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 text-lg">🔓</span>
                          <div>
                            <p className="text-xs text-gray-400 font-medium">Opening Date</p>
                            <p className="text-sm font-bold text-gray-900">{formatKapaatDate(temple.openingDate)}</p>
                            {temple.openingTime && (
                              <p className="text-xs text-green-600 font-medium">{temple.openingTime}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-500 text-lg">🔒</span>
                          <div>
                            <p className="text-xs text-gray-400 font-medium">Closing Date</p>
                            <p className="text-sm font-bold text-gray-900">{formatKapaatDate(temple.closingDate)}</p>
                            {temple.closingTime && (
                              <p className="text-xs text-red-500 font-medium">{temple.closingTime}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {temple.notes && (
                        <p className="mt-3 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                          📌 {temple.notes}
                        </p>
                      )}

                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-xs text-gray-400">
                          Source: {temple.sourceUrl ? (
                            <a href={temple.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{temple.source}</a>
                          ) : temple.source}
                        </p>
                        <p className="text-xs text-gray-400">Updated: {formatUpdateDate(temple.lastUpdated)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              )}
            </section>

            {/* ── Travel Updates Section ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📡</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Live Travel Updates
                  </h2>
                  <p className="text-gray-500 text-sm">Road conditions, weather alerts, and travel advisories</p>
                </div>
              </div>

              {/* Refresh bar */}
              <div className="flex items-center justify-between mb-4 bg-white border border-gray-100 rounded-lg px-4 py-2">
                <span className="text-xs text-gray-500">
                  Last refreshed: {formatRefreshTime(lastRefreshed)} &bull; Auto-refreshes every 30 min
                </span>
                <button
                  onClick={refreshUpdates}
                  disabled={refreshing}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-secondary hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  <span className={refreshing ? 'animate-spin' : ''}>🔄</span>
                  {refreshing ? 'Refreshing…' : 'Refresh Now'}
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setCategoryFilter(cat.value)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      categoryFilter === cat.value
                        ? 'bg-primary text-secondary'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Updates List */}
              <div className="space-y-4">
                {filteredUpdates.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <p className="text-4xl mb-2">📭</p>
                    <p>No updates in this category</p>
                  </div>
                ) : (
                  filteredUpdates.map((update) => (
                    <div
                      key={update.id}
                      className={`card border p-5 ${getSeverityColor(update.severity)}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                              {getCategoryLabel(update.category)}
                            </span>
                            {update.severity === 'warning' && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">⚠️ Warning</span>
                            )}
                            {update.severity === 'critical' && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-200 text-red-900">🚨 Critical</span>
                            )}
                            {update.region && (
                              <span className="text-xs text-gray-500">📍 {update.region}</span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{update.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{update.description}</p>
                        </div>
                        <p className="text-xs text-gray-400 whitespace-nowrap font-medium sm:text-right">
                          {formatUpdateDate(update.date)}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-xs text-gray-400">
                          Source: {update.sourceUrl ? (
                            <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{update.source}</a>
                          ) : update.source}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          {/* ═══ Sidebar ═══ */}
          <aside className="mt-8 lg:mt-0 space-y-6">
            {/* Important Notice */}
            <div className="card p-6 bg-amber-50 border border-amber-200">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
                <span>⚠️</span> Important Notice
              </h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Dates and schedules are based on official announcements and may change due to
                weather, natural calamities, or administrative decisions. Always verify with
                official sources before planning your trip.
              </p>
            </div>

            {/* Quick Kapaat Summary */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span>🗓️</span> Char Dham Quick View
              </h3>
              <div className="space-y-3">
                {kapaatSchedules.filter(t =>
                  ['yamunotri', 'gangotri', 'kedarnath', 'badrinath'].includes(t.id)
                ).map((temple) => {
                  const status = getKapaatStatus(temple);
                  const isOpen = status === 'Currently Open';
                  return (
                    <div key={temple.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{temple.templeName.replace('Shri ', '')}</p>
                        <p className="text-xs text-gray-500">{formatKapaatDate(temple.openingDate).split(',')[0]}, {formatKapaatDate(temple.openingDate).split(' ').slice(-2).join(' ')}</p>
                      </div>
                      <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-green-500' : 'bg-amber-400'}`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span>🆘</span> Emergency Contacts
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">SDRF Uttarakhand</span>
                  <a href="tel:1070" className="font-bold text-primary">1070</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disaster Helpline</span>
                  <a href="tel:1078" className="font-bold text-primary">1078</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Police (Uttarakhand)</span>
                  <a href="tel:112" className="font-bold text-primary">112</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Medical Emergency</span>
                  <a href="tel:108" className="font-bold text-primary">108</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Garhwal Hikes</span>
                  <a href="tel:+917455062107" className="font-bold text-primary">+91 74550 62107</a>
                </div>
              </div>
            </div>

            {/* Verified Sources */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span>✅</span> Verified Sources
              </h3>
              <div className="space-y-3">
                {verifiedSources.map((source) => (
                  <a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-xs mt-0.5">
                        {source.type === 'government' ? '🏛️' : source.type === 'official' ? '🛕' : '📰'}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{source.name}</p>
                        <p className="text-xs text-gray-500">{source.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="card p-6 bg-gray-50 text-xs text-gray-500 leading-relaxed">
              <p className="font-bold text-gray-700 mb-1">Disclaimer</p>
              <p>
                Information on this page is compiled from official government sources, news portals,
                and verified channels. Garhwal Hikes does not guarantee the absolute accuracy of
                third-party information. Always cross-verify critical travel details with the
                respective official authorities before your journey.
              </p>
            </div>
          </aside>

        </div>
        </div>
      </section>
    </main>
  );
}
