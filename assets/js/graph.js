document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("network-container");

  // DataSets criados globalmente
  window.nodesDataSet = new vis.DataSet(rawNodes);
  window.edgesDataSet = new vis.DataSet(rawEdges);

  // Atualizar contadores
  document.getElementById("node-count").innerText = rawNodes.length;
  document.getElementById("edge-count").innerText = rawEdges.length;

  // Configuração do vis.js
  const options = {
    nodes: {
      shape: "dot",
      font: { color: "#c0caf5", size: 13, face: "sans-serif" },
      borderWidth: 2,
      shadow: true
    }
  };

  // Inicializar a rede
  const network = new vis.Network(container, {
    nodes: window.nodesDataSet,
    edges: window.edgesDataSet
  }, options);

  // Escutar as mensagens da extensão
  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "GEMINI_GRAPH_DATA") {
      const extraNodes = event.data.nodes;
      const extraEdges = event.data.edges;

      extraNodes.forEach(node => {
        if (!window.nodesDataSet.get(node.id)) {
          window.nodesDataSet.add(node);
        }
      });

      extraEdges.forEach(edge => {
        window.edgesDataSet.add(edge);
      });
    }
  });
});
