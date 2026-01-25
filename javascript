function getAIResponse(question) {
    const q = question.toLowerCase().trim();

    // ───────────────────────────────────────────────
    // Existing handlers (keep them as-is)
    // ───────────────────────────────────────────────
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q === '') {
        return "Hello! 👋 I'm your AI Assistant of Ten Solutions.<br>Ask me anything from CBSE/NCERT Classes 9 to 12 — chapter explanations, formulas, derivations, solved examples, definitions, key points, diagrams description, exam tips... I'm here to help! 📚";
    }
    if (q.includes('help') || q.includes('what can you') || q.includes('who are you') || q.includes('can you')) {
        return "I can help with almost any NCERT/CBSE topic from Classes 9–12:<br>• Full chapter summaries & explanations<br>• Step-by-step solutions to exercises & examples<br>• Derivations, formulas, reactions<br>• Important definitions & key points<br>• Diagram descriptions<br>• Exam-oriented notes & tips<br>• Comparison tables, differences, flowcharts<br><br>Just ask your question!";
    }
    if (q.includes('ray optics') || q.includes('optics') || q.includes('lens') || q.includes('mirror') || q.includes('human eye') || q.includes('prism') || q.includes('dispersion')) {
        return `<b>Ray Optics & Optical Instruments (Class 12 Physics)</b><br><br>
        <b>Key formulas:</b><br>
        • Mirror formula: 1/f = 1/v + 1/u<br>
        • Lens formula: 1/f = 1/v – 1/u<br>
        • Magnification (mirror): m = –v/u<br>
        • Lens magnification: m = v/u<br>
        • Power: P = 1/f (f in meters)<br>
        • Snell’s law: n₁ sin i = n₂ sin r<br>
        • Critical angle: sin C = 1/μ<br><br>
        Covers: reflection/refraction, lens maker’s formula, prism deviation, defects of vision, microscope/telescope ray diagrams.<br><br>Ask for any derivation or numerical!`;
    }
    if (q.includes('electromagnetic induction') || q.includes('emi') || q.includes('faraday') || q.includes('lenz') || q.includes('inductance')) {
        return `<b>Electromagnetic Induction (Class 12 Physics)</b><br><br>
        • Faraday’s law: ε = – dΦ/dt<br>
        • Lenz’s law: opposes change in flux<br>
        • Motional emf: ε = Bℓv<br>
        • Self-inductance: ε = –L (di/dt)<br>
        • Energy in inductor: ½ LI²<br><br>
        Key: eddy currents, damping, mutual inductance.<br><br>Need a derivation?`;
    }
    if (q.includes('chemical reactions') || q.includes('balancing') || q.includes('combination') || q.includes('decomposition') || q.includes('displacement') || q.includes('redox')) {
        return `<b>Chemical Reactions & Equations (Class 10 Chemistry)</b><br><br>
        Types: Combination, Decomposition, Displacement, Double displacement, Redox.<br>
        Important: balancing equations, corrosion, rancidity.<br><br>Send any equation — I'll balance + explain type!`;
    }
    if (q.includes('carbon') || q.includes('covalent') || q.includes('allotropes') || q.includes('soap') || q.includes('micelle')) {
        return `<b>Carbon and its Compounds (Class 10 Chemistry)</b><br><br>
        • Catenation & tetravalency<br>
        • Allotropes: Diamond, Graphite, Fullerenes<br>
        • Hydrocarbons: Alkanes (CnH₂ₙ₊₂), Alkenes (CnH₂ₙ), Alkynes (CnH₂ₙ₋₂)<br>
        • Functional groups: –OH, –CHO, >C=O, –COOH<br>
        • Soaps: micelle formation<br><br>Ask about naming, reactions, or isomers!`;
    }
    if (q.includes('photosynthesis') || q.includes('respiration') || q.includes('life processes') || q.includes('nutrition') || q.includes('transportation')) {
        return `<b>Life Processes – Photosynthesis (Class 10 Biology)</b><br><br>
        Equation: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O<br>
        Stages: Light reaction (ATP, NADPH, O₂), Dark reaction (Calvin cycle)<br>
        Key: C3 vs C4 plants, factors affecting rate.<br><br>Want stomata diagram or respiration comparison?`;
    }
    if (q.includes('quadratic') || q.includes('x²') || q.match(/solve.*=/i) || q.includes('roots') || q.includes('discriminant')) {
        return `<b>Quadratic Equations (Class 10 Maths)</b><br><br>
        ax² + bx + c = 0<br>
        • D = b² – 4ac<br>
        • Roots: x = [–b ± √D] / (2a)<br>
        Nature: D>0 (distinct), D=0 (equal), D<0 (no real)<br><br>Send your equation — step-by-step solution coming!`;
    }

    // ───────────────────────────────────────────────
    // NEW TOPICS – High-priority additions
    // ───────────────────────────────────────────────

    // Class 10 Science – Very high weightage
    if (q.includes('electricity') || q.includes('current') || q.includes('ohm') || q.includes('resistance') || q.includes('circuit')) {
        return `<b>Electricity (Class 10 Physics – Very Important!)</b><br><br>
        • Ohm’s law: V = IR<br>
        • Resistance: R = ρℓ/A<br>
        • Series: Req = R1 + R2 + ...<br>
        • Parallel: 1/Req = 1/R1 + 1/R2 + ...<br>
        • Power: P = VI = I²R = V²/R<br>
        • Heating effect: H = I²Rt<br><br>
        Diagrams: series/parallel circuits, electric fuse.<br>Most asked: numericals on resistance combination & bill calculation.<br>Ask for solved example!`;
    }

    if (q.includes('acid') || q.includes('base') || q.includes('salt') || q.includes('ph') || q.includes('neutralization')) {
        return `<b>Acids, Bases and Salts (Class 10 Chemistry – High scoring)</b><br><br>
        • pH scale: 0–14 (acid <7, base >7)<br>
        • Indicators: litmus, phenolphthalein, methyl orange<br>
        • Neutralization: Acid + Base → Salt + Water<br>
        • Common salts: NaCl, NaHCO₃, CaOCl₂, plaster of Paris<br><br>
        Important reactions: HCl + NaOH, baking soda + acid.<br>Want pH calculation or lab prep tips?`;
    }

    if (q.includes('heredity') || q.includes('evolution') || q.includes('mendel') || q.includes('gene') || q.includes('dna')) {
        return `<b>Heredity and Evolution (Class 10 Biology – Diagram heavy)</b><br><br>
        • Mendel’s laws: Segregation, Independent assortment<br>
        • Monohybrid cross: 3:1 ratio<br>
        • Dihybrid: 9:3:3:1<br>
        • Sex determination: XX/XY<br>
        • Evolution: Darwin, speciation, fossils<br><br>
        Must-draw: Punnett square, homologous organs.<br>Ask for any cross or difference table!`;
    }

    // Class 12 – Board favorites
    if (q.includes('electrostatics') || q.includes('electric field') || q.includes('potential') || q.includes('capacitor') || q.includes('gauss')) {
        return `<b>Electrostatics (Class 12 Physics – High weightage)</b><br><br>
        • Coulomb’s law: F = k q₁q₂/r²<br>
        • Electric field: E = F/q = kQ/r²<br>
        • Potential: V = kQ/r<br>
        • Capacitance: C = Q/V, parallel plate C = ε₀A/d<br>
        • Gauss’s law: Φ = Q/ε₀<br><br>
        Key derivations: field due to dipole, equipotential surfaces.<br>Want numerical or diagram explanation?`;
    }

    if (q.includes('coordination') || q.includes('nervous') || q.includes('hormone') || q.includes('endocrine') || q.includes('reflex')) {
        return `<b>Control and Coordination (Class 10) / Human Physiology (Class 11–12)</b><br><br>
        • Nervous system: neurons, synapse, reflex arc<br>
        • Brain parts: cerebrum, cerebellum, medulla<br>
        • Hormones: Insulin (pancreas), Thyroxine (thyroid), Adrenaline<br>
        • Feedback mechanism<br><br>
        Diagram: neuron, reflex arc, brain — very important for 3–5 markers.<br>Ask for difference: nervous vs endocrine!`;
    }

    if (q.includes('coordinate') || q.includes('geometry') || q.includes('distance') || q.includes('section') || q.includes('area')) {
        return `<b>Coordinate Geometry (Class 10 & 11 Maths – Numericals heavy)</b><br><br>
        • Distance: √[(x₂–x₁)² + (y₂–y₁)²]<br>
        • Section formula: internal (m:n), external<br>
        • Area of triangle: ½|x₁(y₂–y₃) + x₂(y₃–y₁) + x₃(y₁–y₂)|<br>
        • Mid-point, centroid, collinearity<br><br>
        Send points — I'll find distance, area, or equation!`;
    }

    if (q.includes('organic') || q.includes('haloalkane') || q.includes('alcohol') || q.includes('aldehyde') || q.includes('carboxylic')) {
        return `<b>Organic Chemistry (Class 12 – Reactions & conversions)</b><br><br>
        • Haloalkanes: SN1, SN2<br>
        • Alcohols → Aldehydes → Carboxylic acids<br>
        • Named reactions: Cannizzaro, Aldol, Clemmensen, Wolff-Kishner<br>
        • Tests: iodoform, Tollens’, Fehling’s<br><br>
        Want conversion map or mechanism?`;
    }

    if (q.includes('biomolecule') || q.includes('protein') || q.includes('carbohydrate') || q.includes('enzyme') || q.includes('vitamin')) {
        return `<b>Biomolecules (Class 12 Biology – Important for 5 markers)</b><br><br>
        • Carbohydrates: glucose, sucrose, starch, cellulose<br>
        • Proteins: peptide bond, denaturation<br>
        • Enzymes: lock & key, factors affecting activity<br>
        • Vitamins: A, B, C, D – deficiency diseases<br><br>
        Table: Vitamin | Source | Deficiency<br>Ask for any!`;
    }

    // More quick additions (expand as needed)
    if (q.includes('motion') || q.includes('force') || q.includes('newton') || q.includes('law of motion')) {
        return `<b>Force and Laws of Motion (Class 9) / Moving charges (Class 12)</b><br><br>
        Newton’s laws, momentum, inertia, friction.<br>F = ma, impulse = Δp<br>Want free body diagram or numerical?`;
    }

    if (q.includes('periodic') || q.includes('classification') || q.includes('element') || q.includes('group') || q.includes('period')) {
        return `<b>Periodic Classification (Class 10/11 Chemistry)</b><br><br>
        Modern periodic table: groups 1–18, periods 1–7<br>Trends: atomic radius ↓ across period, ↑ down group<br>Ionization energy, electronegativity.<br>Ask for trend explanation!`;
    }

    // Default – improved
    return `Got your question! 🤔<br><br>
    I'm strong on NCERT Class 9–12 topics — especially Physics, Chemistry, Biology & Maths for board exams 2026.<br><br>
    Try asking:<br>• "Explain human eye defects with diagram"<br>• "Solve quadratic equation x² - 5x + 6 = 0"<br>• "Derive lens maker formula"<br>• "Difference between mitosis and meiosis"<br>• "Balance Fe + H₂O → Fe₃O₄ + H₂"<br><br>
    Tell me more details — chapter name, class, or exact doubt! 📖`;
}
