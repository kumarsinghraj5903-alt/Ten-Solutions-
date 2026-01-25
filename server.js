// Modal handling
document.querySelectorAll('.close').forEach(el => {
    el.onclick = () => el.closest('.modal').style.display = 'none';
});
window.onclick = e => {
    if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};
// Switch login ↔ register
document.getElementById('toRegister').onclick = () => {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'flex';
};
document.getElementById('toLogin').onclick = () => {
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'flex';
};
// LocalStorage auth
function updateUI(user) {
    document.getElementById('userActions').innerHTML = `
        <span class="welcome-msg">Welcome, ${user.name}</span>
        <button class="logout-btn" id="logoutBtn">Logout</button>
    `;
    document.getElementById('logoutBtn').onclick = () => {
        localStorage.removeItem('currentUser');
        location.reload();
    };
}
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) updateUI(currentUser);
document.getElementById('loginSubmit').onclick = () => {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value;
    const stored = JSON.parse(localStorage.getItem(email));
    if (stored && stored.password === pass) {
        localStorage.setItem('currentUser', JSON.stringify({name: stored.name, email}));
        updateUI({name: stored.name});
        document.getElementById('loginModal').style.display = 'none';
    } else {
        alert('Invalid email or password');
    }
};
document.getElementById('registerSubmit').onclick = () => {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPassword').value;
    if (localStorage.getItem(email)) {
        alert('Email already registered');
        return;
    }
    localStorage.setItem(email, JSON.stringify({name, password: pass}));
    localStorage.setItem('currentUser', JSON.stringify({name, email}));
    updateUI({name});
    document.getElementById('registerModal').style.display = 'none';
};
// === Even More Expanded AI Chat Bot – Deep Coverage for Class 11 & 12 Physics + Maths ===
const chatHistory = document.getElementById('chatHistory');
const aiForm = document.getElementById('aiForm');
const aiInput = document.getElementById('aiInput');
function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `message ${type}-msg`;
    msg.innerHTML = text;
    chatHistory.appendChild(msg);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
function getAIResponse(question) {
    const q = question.toLowerCase().trim();

    // ────────────────────────────── Greetings & General Help ──────────────────────────────
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q === '' || q.includes('namaste') || q.includes('raj')) {
        return "नमस्ते Raj! 👋 Welcome back to Ten Solutions AI. <br>Ready for Physics or Maths (Class 11–12)? Ask chapter name, formula derivation, numerical solve, important PYQs, board tips — anything! 📚🔥";
    }
    if (q.includes('help') || q.includes('what can you') || q.includes('topics') || q.includes('chapters') || q.includes('syllabus')) {
        return "Deep help for CBSE 2025-26 Class 11 & 12:<br>• Physics: Full coverage of Mechanics, Electrostatics, Magnetism, Optics, Modern Physics + derivations & numericals<br>• Maths: Calculus (biggest weightage), Vectors/3D, Algebra, Probability, etc.<br><br>Examples: 'derive lens maker formula', 'solve projectile numerical 45 degree', 'maxima minima application', 'bayes theorem example'<br>Just ask — I'll explain step-by-step! 🚀";
    }

    // ───────────────────────────────────── CLASS 11 PHYSICS ─────────────────────────────────────
    if (q.includes('class 11 physics') || q.includes('11th physics') || q.includes('mechanics class 11')) {
        return `<b>Class 11 Physics (2025-26 CBSE) – Key Units</b><br><br>
        Unit I: Physical World & Measurement (Units, Dimensions, Errors)<br>
        Unit II: Kinematics (Straight line, Projectile)<br>
        Unit III: Laws of Motion (Newton, Friction, Circular)<br>
        Unit IV: Work Energy Power (Collisions, Conservative forces)<br>
        Unit V: System of Particles & Rigid Body (COM, Torque, MI)<br>
        Unit VI: Gravitation (Satellites, Escape velocity)<br>
        Unit VII: Properties of Bulk Matter (Elasticity, Fluid, Thermal)<br>
        Unit VIII: Thermodynamics (Laws, Heat engines)<br>
        Unit IX: Kinetic Theory<br>
        Unit X: Oscillations & Waves (SHM, Doppler, Beats)<br><br>
        High marks: Kinematics, Laws, Gravitation, Thermodynamics, Waves (~60% weightage).<br>Ask any chapter or concept!`;
    }
    if (q.includes('units') || q.includes('measurement') || q.includes('dimension') || q.includes('error')) {
        return `<b>Physical World & Measurement / Units & Dimensions</b><br><br>
        Key points:<br>• Fundamental & Derived units (SI)<br>• Dimensional analysis (checking equations, finding relations)<br>• Significant figures & Errors (absolute, relative, percentage)<br>• Order of magnitude<br><br>Important: Use dimensions to check correctness of equations like v² = u² + 2as.<br>Want formula list or numerical example?`;
    }
    if (q.includes('dimensional analysis') || q.includes('error') || q.includes('significant figures')) {
        return `<b>Units, Dimensions & Errors</b><br><br>
        • Dimensional formula examples: [Force] = [M¹L¹T⁻²]<br>• Check equation correctness using dimensions<br>• Errors: Δx/x (relative), percentage error in product/quotient add up<br><br>Board tip: Always asked in 2–3 mark questions. Want example of finding relation using dimensions?`;
    }
    if (q.includes('kinematics') || q.includes('projectile') || q.includes('straight line') || q.includes('motion in straight line')) {
        return `<b>Kinematics (Class 11)</b><br><br>
        Equations:<br>• v = u + at<br>• s = ut + ½at²<br>• v² = u² + 2as<br>• Projectile: Range = (u² sin2θ)/g, Max height = (u² sin²θ)/(2g), Time of flight = (2u sinθ)/g<br><br>Graphs: v-t, s-t, acceleration.<br>Ask: "solve projectile at 30° with 50 m/s" for step-by-step!`;
    }
    if (q.includes('projectile') || q.includes('range') || q.includes('maximum height') || q.includes('trajectory')) {
        return `<b>Projectile Motion</b><br><br>
        Key formulas:<br>• Time of flight T = (2u sinθ)/g<br>• Max height H = (u² sin²θ)/(2g)<br>• Range R = (u² sin2θ)/g (max at 45°)<br>• Equation of trajectory: y = x tanθ – (gx²)/(2u² cos²θ)<br><br>Board favorite: Horizontal/angled projection from height. Send values for step-by-step solve!`;
    }
    if (q.includes('newton') || q.includes('laws of motion') || q.includes('friction') || q.includes('pseudo force')) {
        return `<b>Laws of Motion</b><br><br>
        • Newton’s 1st: Inertia<br>• 2nd: F = ma<br>• 3rd: Action-Reaction<br>• Free body diagram is must!<br>• Friction: static ≤ μN, kinetic = μN<br>• Banking of roads: tanθ = v²/rg<br><br>Common board questions: Atwood machine, wedge problems.<br>Send your numerical!`;
    }
    if (q.includes('friction') || q.includes('banking') || q.includes('centripetal')) {
        return `<b>Friction & Circular Motion</b><br><br>
        • Static friction ≤ μ_s N, kinetic = μ_k N<br>• Banking: tanθ = v²/(rg) (no friction case)<br>• Max speed on banked road with friction: √[rg(μ+tanθ)/(1–μ tanθ)]<br><br>Common PYQ: Vehicle on inclined banked curve. Ask for numerical!`;
    }
    if (q.includes('work') || q.includes('energy') || q.includes('power') || q.includes('collision')) {
        return `<b>Work, Energy & Power</b><br><br>
        • Work = F·s cosθ<br>• Kinetic energy = ½mv²<br>• Work-energy theorem<br>• Conservative vs non-conservative forces<br>• Power = F·v = dW/dt<br>• Elastic & inelastic collisions (momentum + energy conservation)<br><br>Ask for coefficient of restitution or variable force work!`;
    }
    if (q.includes('collision') || q.includes('elastic') || q.includes('inelastic') || q.includes('coefficient of restitution')) {
        return `<b>Collisions</b><br><br>
        • Momentum conserved always<br>• Elastic: KE conserved, e=1<br>• Inelastic: e<1, perfectly inelastic e=0 (stick together)<br>• Coefficient e = (v₂–v₁)/(u₁–u₂)<br><br>Board tip: 1D elastic collision velocities exchange if equal mass. Want solved example?`;
    }
    if (q.includes('gravitation') || q.includes('kepler') || q.includes('satellite') || q.includes('escape')) {
        return `<b>Gravitation</b><br><br>
        • Universal law: F = GMm/r²<br>• g = GM/R², Variation: height, depth, latitude<br>• Orbital velocity = √(GM/r), Escape = √(2GM/r)<br>• Kepler’s 3 laws<br>• Geostationary satellite period = 24 hr<br><br>Want derivation of orbital velocity?`;
    }
    if (q.includes('escape velocity') || q.includes('orbital velocity') || q.includes('geostationary')) {
        return `<b>Gravitation – Satellites</b><br><br>
        • Escape v_e = √(2GM/R) ≈ 11.2 km/s<br>• Orbital v_o = √(GM/r) ≈ 7.9 km/s (low earth)<br>• Geostationary: T=24h, r ≈ 42,000 km<br>• Weightlessness in satellite: free fall<br><br>Board loves variation of g & satellite problems. Numerical?`;
    }
    if (q.includes('thermodynamics') || q.includes('heat engine') || q.includes('carnot') || q.includes('entropy')) {
        return `<b>Thermodynamics (Class 11)</b><br><br>
        • Zeroth law → Temperature<br>• 1st law: ΔU = Q – W<br>• 2nd law: Entropy increases, Kelvin-Planck & Clausius statements<br>• Carnot engine efficiency = 1 – T₂/T₁<br>• Specific heats Cp – Cv = R<br><br>Boards love PV diagrams & processes (isothermal, adiabatic). Ask any!`;
    }
    if (q.includes('adiabatic') || q.includes('isothermal') || q.includes('carnot engine')) {
        return `<b>Thermodynamics</b><br><br>
        • 1st law: ΔU = Q – W<br>• Adiabatic: Q=0, PV^γ = const<br>• Isothermal: ΔU=0, W = nRT ln(V_f/V_i)<br>• Carnot efficiency η = 1 – T_c/T_h<br><br>PYQ trend: PV diagram interpretation & efficiency calc. Ask any process!`;
    }
    if (q.includes('shm') || q.includes('simple harmonic') || q.includes('oscillation') || q.includes('wave')) {
        return `<b>Oscillations & Waves</b><br><br>
        • SHM: x = A sin(ωt + φ), ω = √(k/m) or √(g/l)<br>• Energy in SHM: ½kA² constant<br>• Wave: v = fλ, Standing waves on string (p/2L), organ pipes<br>• Doppler: f' = f(v±vd)/(v±vs)<br><br>Important graphs & beats. Ask for pendulum or Doppler numerical!`;
    }
    if (q.includes('doppler') || q.includes('beats') || q.includes('standing wave')) {
        return `<b>Waves & Doppler</b><br><br>
        • Doppler f' = f (v ± v_o)/(v ± v_s)<br>• Beats frequency = |f1 – f2|<br>• Standing wave on string: λ = 2L/n, fundamental f = v/(2L)<br>• Open pipe vs closed pipe harmonics<br><br>Board tip: Source/observer moving cases. Want calculation?`;
    }

    // ───────────────────────────────────── CLASS 12 PHYSICS ─────────────────────────────────────
    if (q.includes('class 12 physics') || q.includes('12th physics') || q.includes('electrostatics') || q.includes('optics class 12')) {
        return `<b>Class 12 Physics (2025-26) – Units</b><br><br>
        Unit I: Electrostatics<br>
        Unit II: Current Electricity<br>
        Unit III: Magnetic Effects & Magnetism<br>
        Unit IV: EMI & AC<br>
        Unit V: EM Waves<br>
        Unit VI: Optics (Ray + Wave)<br>
        Unit VII: Dual Nature<br>
        Unit VIII: Atoms & Nuclei<br>
        Unit IX: Semiconductors<br><br>
        Highest weightage: Optics (~14 marks), Electrostatics + Current + Magnetism (~25–30 marks), Modern Physics.<br>Name chapter or topic!`;
    }
    if (q.includes('electrostatic') || q.includes('charge') || q.includes('coulomb') || q.includes('capacitance') || q.includes('gauss')) {
        return `<b>Electrostatics</b><br><br>
        • Coulomb: F = k q₁q₂/r²<br>• Electric field E = F/q, Gauss law Φ = q/ε₀<br>• Potential V = kq/r, Capacitance C = Q/V<br>• Series/parallel capacitors, Energy = ½CV²<br>• Dielectrics: K increases C<br><br>Derivations: Field due to dipole, torque on dipole.<br>Ask for numerical or Gauss application!`;
    }
    if (q.includes('gauss law') || q.includes('dipole') || q.includes('capacitor')) {
        return `<b>Electrostatics – Advanced</b><br><br>
        • Gauss: ∫E⋅dA = q_enclosed/ε₀<br>• Electric dipole field (axial/equatorial), torque τ = pE sinθ<br>• Capacitors in series/parallel, energy ½QV = ½CV²<br>• Dielectric effect: C' = KC, E' = E/K<br><br>Derivations asked: Field due to infinite sheet, spherical shell. Ask one!`;
    }
    if (q.includes('current') || q.includes('kirchhoff') || q.includes('wheatstone') || q.includes('drift')) {
        return `<b>Current Electricity</b><br><br>
        • I = V/R, Drift velocity vd = eEτ/m<br>• Resistivity ρ = m/ne²τ<br>• Kirchhoff’s laws (junction & loop)<br>• Wheatstone bridge balanced when P/Q = R/S<br>• Potentiometer (comparison of emf)<br><br>Boards ask meter bridge & sensitivity. Send circuit!`;
    }
    if (q.includes('wheatstone') || q.includes('potentiometer') || q.includes('kirchhoff law')) {
        return `<b>Current Electricity – Instruments</b><br><br>
        • Kirchhoff: Junction (ΣI=0), Loop (ΣV=0)<br>• Wheatstone balanced: P/Q = R/S<br>• Potentiometer: Null point for emf comparison, sensitivity<br>• Meter bridge for unknown resistance<br><br>PYQ favorite: Sensitivity improvement & error calculation. Circuit problem?`;
    }
    if (q.includes('magnetic') || q.includes('biot') || q.includes('ampere') || q.includes('force on charge') || q.includes('cyclotron')) {
        return `<b>Magnetic Effects</b><br><br>
        • Biot-Savart: dB = (μ₀/4π) (I dl sinθ)/r²<br>• Force on charge: F = q(v×B)<br>• Torque on loop: τ = m×B (m = IA)<br>• Cyclotron frequency ω = qB/m<br>• Moving coil galvanometer<br><br>Important: Ampere’s circuital law applications (solenoid, toroid). Want derivation?`;
    }
    if (q.includes('ampere law') || q.includes('solenoid') || q.includes('toroid') || q.includes('galvanometer')) {
        return `<b>Magnetic Effects</b><br><br>
        • Ampere: ∫B⋅dl = μ₀ I_enclosed<br>• Solenoid B = μ₀ nI, Toroid B = μ₀ NI/(2πr)<br>• Force on wire F = I(L×B)<br>• Moving coil galvanometer: current sensitivity = NAB/k<br><br>Derivation asked: Torque on current loop in uniform B. Want it?`;
    }
    if (q.includes('emi') || q.includes('faraday') || q.includes('lenz') || q.includes('inductance') || q.includes('ac')) {
        return `<b>EMI & Alternating Current</b><br><br>
        • Faraday: ε = –dΦ/dt<br>• Lenz: opposes change<br>• Self/mutual inductance<br>• AC: V = Vm sinωt, Reactance XL = ωL, XC = 1/ωC<br>• Power factor cosφ, Resonance ω = 1/√LC<br>• Transformer: Vs/Vp = Ns/Np<br><br>Ask for phasor diagram or LCR numerical!`;
    }
    if (q.includes('lcr') || q.includes('resonance') || q.includes('transformer') || q.includes('power factor')) {
        return `<b>AC Circuits</b><br><br>
        • Impedance Z = √(R² + (X_L – X_C)²)<br>• Resonance ω = 1/√(LC), Z min = R<br>• Power P = V_rms I_rms cosφ<br>• Transformer: V_s/V_p = N_s/N_p, step up/down<br><br>Board loves phasor diagrams & power calc. Ask numerical!`;
    }
    if (q.includes('optics') || q.includes('ray optics') || q.includes('wave optics') || q.includes('young') || q.includes('diffraction')) {
        return `<b>Optics (Ray + Wave)</b><br><br>
        • Mirror/lens formula: 1/f = 1/v ± 1/u<br>• Power P = 1/f (m)<br>• Prism deviation δ = (μ–1)A<br>• Young’s double slit: fringe width β = λD/d<br>• Diffraction single slit: θ = λ/a<br>• Polarisation by Brewster<br><br>High marks: microscope, telescope magnification. Ask any!`;
    }
    if (q.includes('microscope') || q.includes('telescope') || q.includes('interference') || q.includes('polarisation')) {
        return `<b>Optics – Instruments & Wave</b><br><br>
        • Compound microscope m = v_o/u_o × D/v_e<br>• Astronomical telescope m = f_o/f_e (normal adjustment)<br>• Interference fringe width β = λD/d<br>• Diffraction min angle θ = 1.22λ/a (circular)<br>• Brewster law: tan i_p = μ<br><br>Highest marks unit! Ask for ray diagram description or numerical.`;
    }
    if (q.includes('modern') || q.includes('dual nature') || q.includes('photoelectric') || q.includes('atom') || q.includes('nucleus')) {
        return `<b>Modern Physics</b><br><br>
        • Photoelectric: E = hν – φ, stopping potential<br>• de Broglie λ = h/p<br>• Bohr: r = n²h²/4πεmkZe², E = –13.6 Z²/n² eV<br>• Radioactivity: N = N₀ e^–λt, half-life T½ = ln2/λ<br>• Nuclear binding energy<br><br>Boards love graphs & threshold frequency. Ask numerical!`;
    }
    if (q.includes('photoelectric') || q.includes('compton') || q.includes('bohr model') || q.includes('radioactivity')) {
        return `<b>Modern Physics</b><br><br>
        • Photoelectric: K_max = hν – φ, threshold ν₀ = φ/h<br>• de Broglie λ = h/p<br>• Bohr radius r_n = 0.529 n²/Z Å, E_n = –13.6 Z²/n² eV<br>• Decay law N = N₀ e^{-λt}, T_{1/2} = 0.693/λ<br><br>PYQs: Graph-based, binding energy curve. Numerical help?`;
    }

    // ───────────────────────────────────── CLASS 11 MATHS ─────────────────────────────────────
    if (q.includes('class 11 maths') || q.includes('11th maths')) {
        return `<b>Class 11 Maths (2025-26) – Units</b><br><br>
        I: Sets & Functions (23 marks)<br>II: Algebra (25 marks)<br>III: Coordinate Geometry (12 marks)<br>IV: Calculus (Limits & Derivatives) (10 marks)<br>V: Statistics & Probability (10 marks)<br><br>Focus: Algebra + Sets/Functions + Coordinate Geo.<br>Ask chapter!`;
    }
    if (q.includes('trigonometric') || q.includes('trig') || q.includes('sin') || q.includes('cos') || q.includes('height and distance')) {
        return `<b>Trigonometric Functions</b><br><br>
        • sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, etc.<br>• General solution: sinθ = sinα → θ = nπ + (–1)^n α<br>• Sum to product, multiple/sub-multiple angles<br>• Heights & distances (angle of elevation/depression)<br><br>Ask for proving identities or numerical!`;
    }
    if (q.includes('complex') || q.includes('i²') || q.includes('arg') || q.includes('modulus')) {
        return `<b>Complex Numbers & Quadratic Equations</b><br><br>
        • z = x + iy, |z| = √(x²+y²), arg(z) = tan⁻¹(y/x)<br>• Polar: z = r (cosθ + i sinθ)<br>• De Moivre: [r(cosθ + i sinθ)]^n = r^n (cos nθ + i sin nθ)<br>• Quadratic: roots = [–b ± √(b²–4ac)] / 2a<br><br>Important: cube roots of unity. Want locus or rotation?`;
    }
    if (q.includes('sequence') || q.includes('ap') || q.includes('gp') || q.includes('series')) {
        return `<b>Sequences & Series</b><br><br>
        • AP: an = a + (n–1)d, Sn = n/2 [2a + (n–1)d]<br>• GP: an = ar^(n–1), Sn = a(r^n –1)/(r–1)<br>• Arithmetic mean, Geometric mean<br>• Special series: Σn, Σn², Σn³<br><br>Ask for sum to infinity or AM-GM application!`;
    }
    if (q.includes('conic section') || q.includes('parabola') || q.includes('ellipse') || q.includes('hyperbola')) {
        return `<b>Conic Sections</b><br><br>
        • Parabola: y² = 4ax, focus (a,0)<br>• Ellipse: x²/a² + y²/b² = 1, e = √(1–b²/a²)<br>• Hyperbola: x²/a² – y²/b² = 1, e = √(1+b²/a²)<br>• Standard forms & parametric equations<br><br>Board tip: Equation from focus/directrix. Want example?`;
    }
    if (q.includes('limit') || q.includes('continuity') || q.includes('derivative')) {
        return `<b>Limits & Derivatives (Class 11 Calculus intro)</b><br><br>
        • lim (x→a) f(x), standard limits (sinx/x →1, etc.)<br>• Derivative: f'(x) = lim h→0 [f(x+h)–f(x)]/h<br>• Rules: product, quotient, chain<br>• Derivatives of sin, cos, tan, e^x, ln x, x^n<br><br>Boards ask implicit & logarithmic differentiation. Give equation!`;
    }

    // ───────────────────────────────────── CLASS 12 MATHS ─────────────────────────────────────
    if (q.includes('class 12 maths') || q.includes('12th maths')) {
        return `<b>Class 12 Maths (2025-26) – Units</b><br><br>
        I: Relations & Functions (8 marks)<br>II: Algebra (10 marks)<br>III: Calculus (35 marks – highest!)<br>IV: Vectors & 3D (14 marks)<br>V: Linear Programming (5 marks)<br>VI: Probability (8 marks)<br><br>Calculus dominates – focus on applications & integrals!<br>Which topic?`;
    }
    if (q.includes('inverse trigonometric') || q.includes('principal value')) {
        return `<b>Inverse Trig Functions</b><br><br>
        • sin⁻¹x domain [-1,1], range [-π/2, π/2]<br>• Properties: sin⁻¹(-x) = –sin⁻¹x<br>• Formulas like sin⁻¹x + cos⁻¹x = π/2<br><br>Common: Simplify expressions like tan⁻¹(1/x). Ask!`;
    }
    if (q.includes('matrix') || q.includes('determinant') || q.includes('adjoint')) {
        return `<b>Matrices & Determinants</b><br><br>
        • Inverse: A⁻¹ = adj(A)/|A|<br>• Solving system AX=B using inverse<br>• Properties of determinants (row operations)<br>• Area of triangle using det<br><br>PYQ: Non-singular matrix proof. Want solved system?`;
    }
    if (q.includes('continuity') || q.includes('differentiability') || q.includes('application of derivative')) {
        return `<b>Continuity, Differentiability & Applications of Derivatives</b><br><br>
        • Continuous if lim = f(a) = f'(a) exists<br>• Rolle’s, LMVT<br>• Increasing/decreasing: f'(x) >0 / <0<br>• Tangent/normal, maxima/minima (f'' test)<br>• Rate of change, approximation<br><br>Ask for monotonicity or max/min problem!`;
    }
    if (q.includes('maxima') || q.includes('minima') || q.includes('rolle') || q.includes('lmvt')) {
        return `<b>Applications of Derivatives</b><br><br>
        • Increasing: f'(x) ≥ 0<br>• Maxima: f'(x)=0, f''(x)<0<br>• Rolle’s: c where f'(c)=0 if f(a)=f(b)<br>• LMVT: f'(c) = [f(b)–f(a)]/(b–a)<br>• Rate: dy/dt = (dy/dx)(dx/dt)<br><br>Board loves word problems (max area, min cost). Give one!`;
    }
    if (q.includes('integral') || q.includes('integration') || q.includes('area')) {
        return `<b>Integrals & Applications</b><br><br>
        • ∫ f(x) dx, standard forms (sin, cos, tan⁻¹, log, e^x)<br>• Substitution, by parts, partial fractions<br>• Definite integral properties<br>• Area under curve: ∫ y dx<br>• Area between curves<br><br>Boards love tricky substitution & area questions. Send integral!`;
    }
    if (q.includes('indefinite') || q.includes('definite integral') || q.includes('by parts') || q.includes('area under curve')) {
        return `<b>Integrals</b><br><br>
        • By parts: ∫u dv = uv – ∫v du<br>• Substitution common for √(ax²+bx+c)<br>• Definite: ∫_a^b f(x) dx = F(b) – F(a)<br>• Area between curves: ∫|f(x)–g(x)| dx<br><br>High marks: Tricky integrals & bounded region area. Send integral to solve!`;
    }
    if (q.includes('differential equation') || q.includes('order') || q.includes('degree')) {
        return `<b>Differential Equations</b><br><br>
        • Order & degree<br>• Variable separable: dy/dx = f(x)g(y)<br>• Homogeneous: dy/dx = f(y/x)<br>• Linear: dy/dx + Py = Q<br>• Integrating factor e^∫P dx<br><br>Common: dy/dx = (x+y)/(x-y), orthogonal trajectories. Try one!`;
    }
    if (q.includes('vector') || q.includes('scalar triple') || q.includes('section formula')) {
        return `<b>Vectors & 3D Geometry</b><br><br>
        • Dot product a·b = |a||b|cosθ<br>• Cross product |a×b| = |a||b|sinθ<br>• Scalar triple [a b c] = a·(b×c)<br>• Line: r = a + λb<br>• Plane: ax+by+cz+d=0<br>• Angle, distance, coplanarity<br><br>Ask for shortest distance or section formula!`;
    }
    if (q.includes('vector') || q.includes('coplanar') || q.includes('shortest distance')) {
        return `<b>Vectors & 3D</b><br><br>
        • Scalar triple product [a b c] = volume<br>• Plane: ax+by+cz+d=0<br>• Shortest distance between lines: | (P₂–P₁) · (d₁×d₂) | / |d₁×d₂|<br>• Angle between plane & line<br><br>PYQ trend: Coplanarity condition & distance. Ask problem!`;
    }
    if (q.includes('probability') || q.includes('bayes') || q.includes('random variable')) {
        return `<b>Probability</b><br><br>
        • P(A∪B) = P(A) + P(B) – P(A∩B)<br>• Bayes’ theorem<br>• Random variable: mean = Σx P(x), variance = E(X²) – [E(X)]²<br>• Binomial: P(x) = ⁿCₓ p^x q^(n-x)<br><br>Boards ask conditional & variance. Give problem!`;
    }

    // ───────────────────────────────────────────────
    //          Original Responses (Kept for Compatibility)
    // ───────────────────────────────────────────────
    if (q.includes('ray optics') || q.includes('optics') || q.includes('lens') || q.includes('mirror') || q.includes('human eye') || q.includes('prism') || q.includes('dispersion')) {
        return `<b>Ray Optics & Optical Instruments</b><br><br>
        <b>Key formulas:</b><br>
        • Mirror formula: 1/f = 1/v + 1/u<br>
        • Lens formula: 1/f = 1/v – 1/u<br>
        • Magnification (mirror): m = –v/u<br>
        • Lens magnification: m = v/u<br>
        • Lens power: P = 1/f (f in meters)<br>
        • Snell’s law: n₁ sin i = n₂ sin r<br>
        • Critical angle: sin C = 1/μ<br><br>
        Covers: reflection/refraction on spherical surfaces, lens maker’s formula, prism deviation & dispersion, defects of vision (myopia, hypermetropia, presbyopia), optical instruments (microscope, telescope).<br><br>Need any part explained in detail?`;
    }
    if (q.includes('electromagnetic induction') || q.includes('emi') || q.includes('faraday') || q.includes('lenz') || q.includes('inductance')) {
        return `<b>Electromagnetic Induction</b><br><br>
        • Faraday’s law: Induced emf = – rate of change of magnetic flux (ε = – dΦ/dt)<br>
        • Lenz’s law: Induced current opposes change in flux<br>
        • Motional emf in rod: ε = Bℓv<br>
        • Self-inductance: ε = –L (di/dt)<br>
        • Energy stored in inductor: ½ LI²<br><br>
        Key concepts: Faraday & Henry experiments, eddy currents, damping, mutual inductance.<br><br>Want derivation of any formula or numerical help?`;
    }
    if (q.includes('chemical reactions') || q.includes('balancing') || q.includes('combination') || q.includes('decomposition') || q.includes('displacement') || q.includes('redox')) {
        return `<b>Chemical Reactions & Equations</b><br><br>
        Five major types:<br>
        1. Combination<br>
        2. Decomposition (thermal / electrolytic / photochemical)<br>
        3. Displacement<br>
        4. Double displacement<br>
        5. Oxidation-Reduction (Redox)<br><br>
        Also important: corrosion, rancidity, balancing chemical equations step-by-step.<br><br>Want help balancing any equation or understanding any type?`;
    }
    if (q.includes('carbon') || q.includes('covalent') || q.includes('allotropes') || q.includes('soap') || q.includes('micelle')) {
        return `<b>Carbon and its Compounds</b><br><br>
        • Carbon shows catenation and tetravalency<br>
        • Allotropes: Diamond (hard, insulator), Graphite (soft, conductor), Fullerenes, Graphene<br>
        • Covalent bonds: single, double, triple<br>
        • Saturated hydrocarbons: Alkanes (CnH2n+2)<br>
        • Unsaturated: Alkenes (CnH2n), Alkynes (CnH2n-2)<br>
        • Functional groups: alcohol (–OH), aldehyde (–CHO), ketone (>C=O), carboxylic acid (–COOH)<br>
        • Soaps & detergents form micelles in water<br><br>
        Ask about any compound, reaction or concept!`;
    }
    if (q.includes('photosynthesis') || q.includes('respiration') || q.includes('life processes') || q.includes('nutrition') || q.includes('transportation')) {
        return `<b>Photosynthesis / Life Processes</b><br><br>
        Equation: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O<br><br>
        Two stages:<br>
        1. Light reaction: occurs in thylakoid, produces ATP, NADPH, oxygen (photolysis of water)<br>
        2. Dark reaction / Calvin cycle: fixes CO₂ into glucose using RuBisCO<br><br>
        Important: C3 vs C4 pathway, photorespiration, factors affecting rate.<br><br>Want detailed explanation of any part or diagram description?`;
    }
    if (q.includes('quadratic') || q.includes('x²') || q.match(/solve.*=/i) || q.includes('roots') || q.includes('discriminant')) {
        return `<b>Quadratic Equations</b><br><br>
        Standard form: ax² + bx + c = 0<br><br>
        • Discriminant: D = b² – 4ac<br>
        • Roots: x = [–b ± √D] / (2a)<br>
        • Nature of roots:<br>
           D > 0 → two distinct real roots<br>
           D = 0 → repeated root<br>
           D < 0 → no real roots<br><br>
        Send your equation — I'll solve it step-by-step with explanation!`;
    }
    if (q.includes('moment of inertia') || q.includes('torque') || q.includes('angular momentum')) {
        return `<b>Rotational Motion</b><br><br>
        • Torque τ = r × F = Iα<br>• Angular momentum L = Iω conserved if τ=0<br>• MI theorems: Parallel & Perpendicular axis<br>• MI common bodies: Ring (MR²), Disc (½MR²), Rod (ML²/12)<br><br>High marks derivation: MI of disc about diameter. Ask!`;
    }

    // Fallback for anything else
    return `Got it! 🤔<br>
    I'm ready to answer your question from NCERT/CBSE syllabus (Classes 9–12).<br><br>
    Just tell me what you want to know — chapter explanation, formula derivation, solved example, definition, key points, diagram description, exam tip... anything!<br><br>Go ahead! 📖`;
}
// Submit handler
aiForm.onsubmit = e => {
    e.preventDefault();
    const question = aiInput.value.trim();
    if (!question) return;
    addMessage(question, 'user');
    const answer = getAIResponse(question);
    setTimeout(() => {
        addMessage(answer, 'ai');
    }, 600 + Math.random() * 900);
    aiInput.value = '';
};
// Open/close AI modal
document.getElementById('aiBtn').onclick = () => {
    document.getElementById('aiModal').style.display = 'flex';
    aiInput.focus();
};
document.getElementById('aiClose').onclick = () => {
    document.getElementById('aiModal').style.display = 'none';
};
// First open message
let firstOpen = true;
document.getElementById('aiBtn').addEventListener('click', () => {
    if (firstOpen) {
        setTimeout(() => {
            addMessage("I'm ready to answer any question from your NCERT books — board exam mode activated! 🔥", 'ai');
        }, 1400);
        firstOpen = false;
    }
});
// Login / Register modals
document.getElementById('loginBtn').onclick = () => document.getElementById('loginModal').style.display = 'flex';
document.getElementById('registerBtn').onclick = () => document.getElementById('registerModal').style.display = 'flex';
