import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Bufi Tech
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
            Kamerat e Sigurisë me Instalim Profesional
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
            Ofrojmë vetëm paketa të integruara - shitje + instalim. 
            Brendet Tiandy, Hikvision, Dahua.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-blue-800 mb-2">Tiandy</h3>
              <p className="text-gray-600">Teknologji e avancuar</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-green-800 mb-2">Hikvision</h3>
              <p className="text-gray-600">Cilësi e lartë</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-purple-800 mb-2">Dahua</h3>
              <p className="text-gray-600">Zgjidhje profesionale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App