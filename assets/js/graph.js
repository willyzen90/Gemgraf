document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("network-container");

  // DataSets creados globalmente
  window.nodesDataSet = new vis.DataSet(rawNodes);
  window.edgesDataSet = new vis.DataSet(rawEdges);

  // Escuchar las búsquedas enviadas por la extensión
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

      // Actualizar contadores del panel superior
      const nodeCountElem = document.getElementById("node-count");
      const edgeCountElem = document.getElementById("edge-count");

      if (nodeCountElem) nodeCountElem.innerText = window.nodesDataSet.length;
      if (edgeCountElem) edgeCountElem.innerText = window.edgesDataSet.length;
    }
  });

  // Configuración del estilo de vis.js
  const options = {
    nodes: {
      shape: "dot",
      font: { color: "#c0caf5", size: 13, face: "sans-serif" },
      borderWidth: 2,
      shadow: true
    }
  };

  // Inicializar la red
  const network = new vis.Network(container, {
    nodes: window.nodesDataSet,
    edges: window.edgesDataSet
  }, options);
});
