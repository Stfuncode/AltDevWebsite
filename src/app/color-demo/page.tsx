export default function ColorDemo() {
  const colorScales = {
    primary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    accent: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    secondary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-primary-500 mb-4">
            AltDev Website
          </h1>
          <p className="text-xl text-gray-600">Brand Color Palette</p>
          <p className="text-sm text-gray-500 mt-2">
            Professional colors for data, AI, and development services
          </p>
        </div>

        {/* Primary Colors (Deep Teal) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Primary Colors - Deep Teal
          </h2>
          <p className="text-gray-600 mb-6">
            Main brand color (#0B4251) with full scale for various use cases
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-4">
            {colorScales.primary.map((shade) => (
              <div key={shade} className="text-center">
                <div
                  className={`h-24 w-full rounded-lg border-2 border-gray-200 shadow-md bg-primary-${shade}`}
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {shade}
                </p>
                <p className="text-xs text-gray-500">primary-{shade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accent Colors (Gold) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Accent Colors - Gold
          </h2>
          <p className="text-gray-600 mb-6">
            Accent color (#F2C864) for CTAs and highlights
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {colorScales.accent.map((shade) => (
              <div key={shade} className="text-center">
                <div
                  className={`h-24 w-full rounded-lg border-2 border-gray-200 shadow-md bg-accent-${shade}`}
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {shade}
                </p>
                <p className="text-xs text-gray-500">accent-{shade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Button Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Button Examples
          </h2>
          <div className="space-y-6">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Primary (Deep Teal)
              </h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
                  Primary Button
                </button>
                <button className="px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-medium">
                  Primary Outline
                </button>
                <button className="px-6 py-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors font-medium">
                  Primary Subtle
                </button>
              </div>
            </div>

            {/* Accent Buttons */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Accent (Gold)
              </h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-accent-500 text-gray-900 rounded-lg hover:bg-accent-600 transition-colors font-medium">
                  Accent Button
                </button>
                <button className="px-6 py-3 border-2 border-accent-500 text-accent-700 rounded-lg hover:bg-accent-50 transition-colors font-medium">
                  Accent Outline
                </button>
                <button className="px-6 py-3 bg-accent-50 text-accent-800 rounded-lg hover:bg-accent-100 transition-colors font-medium">
                  Accent Subtle
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Card Examples
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary-500 text-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Deep Teal Card</h3>
              <p className="text-primary-50">
                Perfect for headers and hero sections. Professional and
                trustworthy.
              </p>
            </div>
            <div className="p-6 bg-primary-300 text-gray-900 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Light Blue Card</h3>
              <p className="text-primary-900">
                Great for backgrounds and content sections. Calming and modern.
              </p>
            </div>
            <div className="p-6 bg-accent-500 text-gray-900 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Gold Accent Card</h3>
              <p className="text-accent-900">
                Use for CTAs and important highlights. Premium and valuable.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Hero Section Example
          </h2>
          <div className="bg-primary-500 text-white rounded-2xl p-12 shadow-2xl border-t-8 border-accent-500">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">
                Transform Your Business with Data & AI
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Expert data strategy, AI solutions, and custom development services
                to accelerate your digital transformation journey.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-accent-500 text-gray-900 rounded-lg hover:bg-accent-600 transition-colors font-bold text-lg">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-primary-600 transition-colors font-bold text-lg">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Usage Guide
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              How to Use These Colors
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong className="text-primary-600">Primary Actions:</strong>{' '}
                Use <code className="bg-gray-100 px-2 py-1 rounded">bg-primary-500</code> or{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">text-primary-500</code>
              </li>
              <li>
                <strong className="text-accent-600">CTAs & Highlights:</strong>{' '}
                Use <code className="bg-gray-100 px-2 py-1 rounded">bg-accent-500</code> for
                attention-grabbing elements
              </li>
              <li>
                <strong className="text-gray-700">Backgrounds:</strong> Use{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">bg-primary-50</code> for subtle
                sections
              </li>
              <li>
                <strong className="text-gray-700">Text:</strong> Use{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">text-primary-600</code> or{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">text-primary-700</code> for
                headings
              </li>
              <li>
                <strong className="text-gray-700">Borders:</strong> Use{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">border-primary-300</code> for
                subtle borders
              </li>
            </ul>
          </div>
        </section>

        {/* Color Psychology */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Color Psychology
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border-2 border-primary-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-primary-700 mb-2">
                Deep Teal
              </h3>
              <p className="text-gray-600">
                Professional, trustworthy, and stable. Perfect for establishing
                credibility in data and technology services.
              </p>
            </div>
            <div className="p-6 bg-white border-2 border-primary-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-primary-700 mb-2">
                Light Blue-Gray
              </h3>
              <p className="text-gray-600">
                Calming, approachable, and modern. Creates a welcoming tech-forward
                atmosphere that&apos;s not intimidating.
              </p>
            </div>
            <div className="p-6 bg-white border-2 border-accent-200 rounded-xl">
              <div className="w-12 h-12 bg-accent-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-accent-700 mb-2">
                Gold
              </h3>
              <p className="text-gray-600">
                Premium, innovative, and optimistic. Perfect for highlighting AI insights,
                data-driven results, and CTAs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
