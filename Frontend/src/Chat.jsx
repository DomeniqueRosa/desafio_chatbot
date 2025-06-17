import React, { useState } from "react";
import axios from "axios";
import Message from "./components/Message";
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import { use } from "react";
function Chat() {
  const [mensagem, setMensagem] = useState("");
  const [respostas, setResposta] = useState([
    { user: "bot", msg: "Nice!", id: 1 },
    { user: "bot", msg: "What is your role at Acme Corp?", id: 2 },
  ]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  const enviarMensagem = async () => {
    setCarregando(true);
    setErro(null);
    setResposta((prev) => [
      ...prev,
      { user: "user", msg: mensagem, id: Date.now() },
    ]);
    console.log(respostas);
    try {
      const res = await axios.post("http://localhost:5062/api/coherechat/ask", {
        message: mensagem,
      });

      setResposta((prev) => [
        ...prev,
        { user: "bot", msg: res.data.response, id: Date.now() },
      ]);
    } catch (error) {
      setErro("Erro ao chamar API" + error);
      setResposta((prev) => [
        ...prev,
        { user: "bot", msg: error, id: Date.now() },
      ]);

      console.error(error);
    } finally {
      setCarregando(false);
      setMensagem("");
    }
  };

  return (
    <div className="flex flex-col h-screen border-gray-50 shadow m-4">
      <div className="shrink-0">
        <Header />
      </div>

      {/* mensagens com scroll */}
      <div className="flex-1 overflow-y-auto ">
        {respostas.map((e) => (
          <Message key={e.id} msg={e} />
        ))}
      </div>

      <div className="shrink-0 border-t border-gray-300">
        <Bottom
          enviarMensagem={enviarMensagem}
          mensagem={mensagem}
          setMensagem={setMensagem}
          carregando={carregando}
        />
      </div>
    </div>
  );
}

export default Chat;
