import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Lumina AI</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary">Soluções</a>
            <a href="#" className="text-gray-600 hover:text-primary">Preços</a>
            <a href="#" className="text-gray-600 hover:text-primary">Sobre</a>
            <a href="#" className="text-gray-600 hover:text-primary">Contato</a>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
            Começar Agora
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme seu negócio com IA
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluções inteligentes para automatizar e otimizar seus processos
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-secondary transition-colors">
                Agende uma Demo
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg hover:bg-primary hover:text-white transition-colors">
                Saiba Mais
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automação Inteligente</h3>
              <p className="text-gray-600">Automatize tarefas repetitivas e aumente a produtividade da sua equipe.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise de Dados</h3>
              <p className="text-gray-600">Insights poderosos para tomar decisões baseadas em dados.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento IA</h3>
              <p className="text-gray-600">Atendimento ao cliente 24/7 com inteligência artificial.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary text-white rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Comece agora e veja os resultados em semanas.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors">
              Comece a Automatizar seu trabalho
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Lumina AI</h4>
              <p className="text-gray-400">
                Transformando negócios com inteligência artificial
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Produto</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Soluções</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Preços</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Empresa</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Suporte</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Vendas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Demo</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lumina AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
