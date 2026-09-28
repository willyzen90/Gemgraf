document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("network-container");

  // DataSets
  const nodesDataSet = new vis.DataSet(rawNodes);
  const edgesDataSet = new vis.DataSet(rawEdges);

  // Actualizar contadores
  document.getElementById("node-count").innerText = `${rawNodes.length} Nodos`;
  document.getElementById("edge-count").innerText = `${rawEdges.length} Enlaces`;

  // Configuración de estilo de vis.js estilo Obsidian
  const options = {
    nodes: {
      shape: "dot",
      font: {
        color: "#c0caf5",
        size: 13,
        face: "sans-serif"
      },
      borderWidth: 2,
      shadow: true
    },
    edges: {
      width: 1.5,
      color: { color: "#3b4261", highlight: "#7aa2f7" },
      smooth: { type: "continuous" }
    },
    groups: {
      core: { color: { background: "#bb9af7", border: "#7aa2f7" } },
      tech: { color: { background: "#7aa2f7", border: "#2ac3de" } },
      science: { color: { background: "#73daca", border: "#b4f9f8" } },
      tools: { color: { background: "#ff9e64", border: "#f7768e" } }
    },
    physics: {
      solver: "forceAtlas2Based",
      forceAtlas2Based: {
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springLength: 110,
        springConstant: 0.08
      },
      maxVelocity: 50,
      stabilization: { iterations: 100 }
    },
    interaction: {
      hover: true
    }
  };

  const network = new vis.Network(container, { nodes: nodesDataSet, edges: edgesDataSet }, options);

  // Modal Interactive Event
  const modal = document.getElementById("detail-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalTag = document.getElementById("modal-tag");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  network.on("click", (params) => {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      const selectedNode = rawNodes.find(n => n.id === nodeId);

      if (selectedNode) {
        modalTitle.innerText = selectedNode.label;
        modalTag.innerText = selectedNode.group.toUpperCase();
        modalBody.innerHTML = `<p>${selectedNode.summary}</p>`;
        modal.classList.remove("hidden");
      }
    }
  });

  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Filtro de búsqueda
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filteredNodes = rawNodes.filter(node => node.label.toLowerCase().includes(term));
    
    // Resaltar nodo buscado
    if (filteredNodes.length > 0 && term.trim() !== "") {
      network.focus(filteredNodes[0].id, { scale: 1.2, animation: true });
    }
  });

  // Slider de Gravedad
  const gravitySlider = document.getElementById("gravity-slider");
  gravitySlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    network.setOptions({
      physics: {
        forceAtlas2Based: { gravitationalConstant: val }
      }
    });
  });
});
