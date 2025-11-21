// Landing / Hero page for SIGAMA Vision
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Atualmente aceitamos qualquer email/senha localmente para demonstrar o fluxo.
    // Substituir por autenticação real (validação no backend, tokens seguros e tratamento de erros).
    try {
      localStorage.setItem("sigama_demo_auth", "true");
    } catch (e) {
      /* ignore */
    }
    navigate("/monitoring");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">

      {/* Mobile top: centered big logo, no CTA (shown only on small screens) */}
      <div className="md:hidden text-center py-6">
        <img
          src="/logos/sigama_big_logo.png"
          alt="SIGAMA Logo"
          className="mx-auto w-40 max-w-[70%]"
          style={{ transform: "scale(0.8)" }}
        />
      </div>

      {/* Desktop header (small logo left + CTA) */}
      <header className="hidden md:flex container mx-auto px-6 py-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logos/sigama_small_logo.png"
            alt="SIGAMA Logo"
            className="w-14 h-14 rounded-md shadow-sm"
            aria-hidden="true"
          />
          <div>
            <h1 className="text-lg font-bold">SIGAMA Vision</h1>
            <p className="text-sm text-muted-foreground">Monitoramento inteligente para processos</p>
          </div>
        </div>
        <nav>
          <Link
            to="/analytics"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:brightness-95"
          >
            Acessar Dashboard
          </Link>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4">Monitoramento Inteligente de GTAs</h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-3 md:mb-4">
              IA + Tempo Real · Detecção de Fraudes
            </p>
            {/* Cards removed as requested - keep only explanatory text and the signup/login block */}
          </div>

          <aside className="flex flex-col items-center w-full mt-4 md:mt-0">
            <div className="w-full bg-muted rounded-lg overflow-hidden shadow p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-4">Acesse sua conta</h3>
              <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <label className="text-sm">Email</label>
                <input type="email" name="email" required className="w-full rounded-md border px-3 py-2 bg-background" />

                <label className="text-sm">Senha</label>
                <input type="password" name="password" required className="w-full rounded-md border px-3 py-2 bg-background" />

                <button type="submit" className="mt-2 w-full rounded-md bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow">Entrar</button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Não tem uma conta ainda?</p>
                <Link to="/register" className="inline-block mt-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">Cadastre-se agora</Link>
              </div>
            </div>

            {/* Mini KPI badges */}
            <div className="mt-4 flex gap-3">
              <div className="flex items-center gap-2 bg-white/80 border rounded-md px-3 py-2 text-sm">
                <span>🎯</span>
                <div>
                  <div className="font-semibold text-sm">342 GTAs</div>
                  <div className="text-xs text-muted-foreground">hoje</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/80 border rounded-md px-3 py-2 text-sm">
                <span>⚡</span>
                <div>
                  <div className="font-semibold text-sm">8.4 min</div>
                  <div className="text-xs text-muted-foreground">médio</div>
                </div>
              </div>
            </div>

            {/* Logout area removed from landing (logout belongs to dashboard) */}
          </aside>
        </section>
      </main>

      <footer className="py-6 border-t">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          Projeto PTG • AGED/FAPEMA 2025 — SIGAMA Vision
        </div>
      </footer>
    </div>
  );
};

export default Index;
