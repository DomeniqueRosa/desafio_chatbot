export default function Bottom({mensagem, setMensagem, carregando, enviarMensagem}){
    return(
        <>
        <div className="w-[100%] bottom-0 p-4 border-t border-gray-200">
        <div className="relative">
          <input
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            type="text"
            placeholder="Reply to LeadBot..."
            className="w-full pl-4 pr-16 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-sm text-gray-500">
            
            <button onClick={enviarMensagem} disabled={carregando || !mensagem}>
              {carregando ? "..." : "Enviar"}
            </button>
          </div>
        </div>
      </div>
        </>
    )
}