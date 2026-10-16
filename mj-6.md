---
layout: default
title: "MJ-6: Heat and Thermodynamics | Dr. Indrajeet Kumar"
heading: "MJ-6: Heat and Thermodynamics"
kicker: "MJ-6 LECTURE NOTES"
subtitle: "Heat and Thermodynamics"
permalink: /mj-6/
---

Thermodynamics studies how energy, heat, and work transform in physical systems. The central idea is that macroscopic properties such as temperature, pressure, and volume are related by equations of state, while the direction of natural processes is governed by entropy and the second law.

## UNIT-I: Fundamentals of Gases and Thermodynamic Variables (10 Lectures)

<a id="topic-001-kinetic-theory-maxwell-boltzmann-velocity-distribution"></a>
### Kinetic theory: Maxwell-Boltzmann velocity distribution

The kinetic theory of gases describes pressure as the result of molecules colliding with the walls of a container. The molecular speeds are not all equal; they follow a distribution obtained from statistical mechanics. For a gas in equilibrium, the Maxwell-Boltzmann distribution gives the probability of a molecule having a speed between \\(v\\) and \\(v+dv\\): <br>\[f(v) = 4\pi \left(\frac{m}{2\pi kT}\right)^{3/2} v^2 e^{-mv^2/2kT}.\]<br> This is the basis of gas properties such as pressure, temperature, and diffusion.

<a id="topic-002-degrees-of-freedom"></a>
### degrees of freedom

A degree of freedom is an independent quadratic mode of energy storage. For a monatomic gas, each atom has three translational degrees of freedom. For a diatomic molecule, rotational and vibrational modes can contribute depending on temperature. The number of active degrees of freedom determines how energy is partitioned among translational, rotational, and vibrational motion.

<a id="topic-003-equipartition-of-energy"></a>
### equipartition of energy

The equipartition theorem states that in thermal equilibrium, each quadratic degree of freedom contributes \\(\tfrac{1}{2}kT\\) to the average energy per molecule. Thus the internal energy of a gas can be estimated from the number of active modes. This theorem works well at moderate temperatures when quantum effects are not important. It explains why monatomic gases have \\(C_V = \tfrac{3}{2}R\\) and why diatomic gases have larger heat capacities at higher temperatures.

<a id="topic-004-specific-heats-of-gases"></a>
### specific heats of gases

The specific heat at constant volume, \\(C_V\\), is the heat needed to raise the temperature by one kelvin while keeping volume fixed. At constant pressure, \\(C_P\\) is larger because extra energy is required to do expansion work. For ideal gases, \\(C_P - C_V = R\\). The ratio \\(\gamma = C_P/C_V\\) is important in adiabatic processes and sound propagation.

<a id="topic-005-real-gases"></a>
### Real gases

Real gases deviate from the ideal-gas law because molecules have finite size and interact through intermolecular forces. At low pressure and high temperature, deviations are small; at high pressure or low temperature, they become significant. The behavior of real gases is described by van der Waals and virial equations. The study of real gases is essential because all actual gases at ordinary conditions are to some extent non-ideal.

<a id="topic-006-virial-equation"></a>
### virial equation

The virial equation represents the equation of state as a power series in inverse volume or density: <br>\[\frac{PV}{RT} = 1 + \frac{B(T)}{V} + \frac{C(T)}{V^2}+\cdots.\]<br> The coefficients \\(B(T), C(T),\dots\\) are virial coefficients, describing deviations from ideality. They encode the effect of intermolecular forces and are increasingly important in dense gases and liquids.

<a id="topic-007-critical-constants"></a>
### critical constants

The critical point is the end of the liquid-gas coexistence curve, where the distinction between liquid and gas disappears. At this point the critical temperature \\(T_c\\), critical pressure \\(P_c\\), and critical volume \\(V_c\\) are defined. Near the critical point, large density fluctuations occur and the compressibility becomes very high. The critical constants are central to understanding phase transitions and the liquid state.

<a id="topic-008-boyle-temperature"></a>
### Boyle temperature

The Boyle temperature is the temperature at which a real gas obeys Boyle's law over a wide range of pressures. At this temperature, the attractions and repulsions effectively balance so that the first virial coefficient nearly vanishes. It marks the crossover between gas behavior dominated by attraction and behavior dominated by repulsion. Boyle temperature is a useful property for analyzing the non-ideal behavior of gases.

<a id="topic-009-van-der-waals-equation-of-state"></a>
### van der Waals equation of state

The van der Waals equation, <br>\[\left(P + \frac{a}{V^2}\right)(V-b)=RT,\]<br> corrects the ideal gas law by accounting for finite molecular volume and intermolecular attraction. The parameter \\(b\\) reflects excluded volume, and \\(a\\) reflects cohesion. This equation captures many qualitative features of real gases, including condensation and critical behavior. It is a simple but powerful model for understanding non-ideal gas properties.

## UNIT-II: Laws of Thermodynamics and Applications (20 Lectures)

<a id="topic-010-zeroth-and-first-laws-thermodynamic-variables"></a>
### Zeroth and first laws; thermodynamic variables

The zeroth law introduces the idea of thermal equilibrium and temperature: if two systems are each in equilibrium with a third, then they are in equilibrium with one another. The first law is the conservation of energy in thermodynamic form: <br>\[\Delta U = Q - W.\]<br> Here \\(U\\) is internal energy, \\(Q\\) is heat added, and \\(W\\) is work done by the system. The thermodynamic variables include temperature, pressure, volume, entropy, internal energy, and chemical potential.

<a id="topic-011-equilibrium"></a>
### equilibrium

A system at equilibrium has no net macroscopic flows of energy or matter. Thermodynamic equilibrium includes thermal, mechanical, and chemical equilibrium. In equilibrium, variables such as pressure and temperature are well-defined and spatially uniform. The concept of equilibrium is essential because it allows us to define state functions and derive relations among them.

<a id="topic-012-work"></a>
### work

In thermodynamics, work is the energy transferred by generalized forces acting through displacements. For a gas, mechanical work is <br>\[W = \int P\,dV.\]<br> Work depends on the path taken between states, so it is not a state function. This distinction between path dependence and state dependence is central to thermodynamic reasoning.

<a id="topic-013-heat"></a>
### heat

Heat is energy transferred because of a temperature difference. It is not a stored property of a system; rather, it is a process variable. A system may have internal energy, but heat is only defined during a transfer. Heat can be transferred by conduction, convection, and radiation, and it always flows from a higher-temperature body to a lower-temperature one.

<a id="topic-014-state-functions"></a>
### state functions

State functions depend only on the current state of the system and not on the path used to reach that state. Examples include internal energy, enthalpy, entropy, temperature, pressure, and volume. Their path independence makes them especially useful in thermodynamics because they allow us to compare states and derive exact equations of state.

<a id="topic-015-internal-energy"></a>
### internal energy

The internal energy \\(U\\) is the total microscopic energy of a system, including molecular kinetic and potential energy. It is a state function and changes when heat enters or when work is done. In an ideal gas, the internal energy depends only on temperature, not on volume or pressure separately. Internal energy is therefore a key quantity in the first law and in many thermodynamic transformations.

<a id="topic-016-relation-between-cp-and-cv-work-in-isothermal-and-adiabatic"></a>
### Relation between Cp and Cv; work in isothermal and adiabatic processes; compressibility and expansion coefficient

For an ideal gas, \\(C_P - C_V = R\\). The work done in an isothermal expansion is <br>\[W = nRT\ln\left(\frac{V_2}{V_1}\right),\]<br> while in an adiabatic process the relation \\(PV^\gamma = \text{constant}\\) holds. Compressibility and expansion coefficients describe how volume responds to pressure and temperature. These quantities connect microscopic interactions with macroscopic observables.

<a id="topic-017-reversible-and-irreversible-processes"></a>
### Reversible and irreversible processes

A reversible process occurs through a continuous sequence of equilibrium states; it can be retraced without leaving net changes in the surroundings. In contrast, an irreversible process involves dissipative effects such as friction, heat flow across a finite temperature difference, or free expansion. Real processes are usually irreversible; the concept of reversibility is idealized but extremely useful because it gives the maximum possible efficiency.

<a id="topic-018-heat-engines"></a>
### heat engines

A heat engine converts heat into work by operating in a cyclic process. Its efficiency is defined as <br>\[\eta = \frac{W}{Q_H}.\]<br> The engine absorbs heat from a hot reservoir, rejects some heat to a cold reservoir, and performs work. The design of heat engines is central to thermodynamics because it shows how energy can be converted while being constrained by physical laws.

<a id="topic-019-carnot-cycle-and-efficiency"></a>
### Carnot cycle and efficiency

The Carnot cycle is an idealized reversible cycle between two temperatures, consisting of two isothermal and two adiabatic processes. Its efficiency is <br>\[\eta_{Carnot} = 1 - \frac{T_C}{T_H}.\]<br> This maximum efficiency depends only on reservoir temperatures and not on the working substance. The Carnot engine establishes the benchmark for all real engines and demonstrates the fundamental limitations imposed by the second law.

<a id="topic-020-refrigerators"></a>
### refrigerators

A refrigerator extracts heat from a cold reservoir and rejects it to a hot reservoir by consuming external work. Its performance is measured by the coefficient of performance (COP): <br>\[COP = \frac{Q_C}{W}.\]<br> Unlike a heat engine, the goal is not to convert heat into work but to pump heat from cold to hot. Refrigeration is an application of the second law and of the principles of thermodynamic cycles.

<a id="topic-021-kelvin-planck-and-clausius-statements"></a>
### Kelvin-Planck and Clausius statements

The Kelvin-Planck statement says that no cyclic device can convert all absorbed heat into work; some heat must be rejected. The Clausius statement says that heat cannot flow spontaneously from cold to hot without external work. These two statements are equivalent formulations of the second law and lead to the impossibility of perpetual motion machines of the second kind.

<a id="topic-022-carnot-s-theorem"></a>
### Carnot's theorem

Carnot's theorem states that no engine operating between two reservoirs can be more efficient than a reversible engine operating between the same temperatures. All reversible engines working between the same reservoirs have the same efficiency. This theorem underlies the importance of the ideal Carnot cycle as a limiting case and provides a universal bound on practical energy conversion.

<a id="topic-023-clausius-inequality"></a>
### Clausius inequality

The Clausius inequality gives a general criterion for spontaneity: <br>\[\Delta S \ge \frac{Q}{T}.\]<br> For a reversible process, the equality holds; for an irreversible process, entropy increases. It provides a compact and powerful statement of the second law and allows us to identify whether a transformation is allowed in a given thermodynamic environment.

<a id="topic-024-applications-of-the-second-law"></a>
### applications of the second law

The second law governs the direction of natural processes: heat flows from hot to cold, gases expand to fill available volume, and systems tend toward equilibrium. It also limits the efficiency of engines, the functioning of refrigerators, and the extraction of work from thermal gradients. The broad applicability of the second law makes it one of the central principles of physics.

<a id="topic-025-entropy"></a>
### Entropy

Entropy \\(S\\) measures the number of microscopic arrangements compatible with a macroscopic state. It is a state function and is central to the second law. In statistical mechanics, entropy is related to multiplicity by <br>\[S = k_B \ln \Omega.\]<br> In thermodynamics, entropy change is defined by reversible heat exchange: <br>\[dS = \frac{\delta Q_{rev}}{T}.\]<br>

<a id="topic-026-clausius-theorem"></a>
### Clausius theorem

The Clausius theorem states that for any cyclic process, the integral of \\(\delta Q/T\\) is less than or equal to zero for an irreversible cycle and equal to zero for a reversible cycle. This theorem establishes entropy as a state function and provides a formal connection between the second law and cyclic thermodynamic processes.

<a id="topic-027-entropy-of-a-perfect-gas"></a>
### entropy of a perfect gas

For an ideal gas, the entropy change during a process is <br>\[\Delta S = n C_V \ln\left(\frac{T_2}{T_1}\right) + n R \ln\left(\frac{V_2}{V_1}\right).\]<br> This relation shows how entropy increases when temperature and volume change in ways that increase the number of accessible microstates. It is one of the most useful formulas in thermal physics.

<a id="topic-028-entropy-changes-in-reversible-and-irreversible-processes"></a>
### entropy changes in reversible and irreversible processes

For reversible processes, entropy change can be computed exactly from the heat transferred divided by temperature. For irreversible processes, entropy is generated internally, so the total entropy of the universe increases. This makes entropy a diagnostic of irreversibility: the more irreversible a process, the greater the irreversible entropy production.

<a id="topic-029-entropy-of-mixing"></a>
### Entropy of mixing

When different gases mix without doing work, the entropy of the system increases because the number of macrostates accessible to the molecules increases. This is independent of the detailed molecular interaction and is a statistical manifestation of the second law. Mixing is therefore a natural process: it occurs spontaneously because it raises the overall multiplicity.

<a id="topic-030-entropy-of-the-universe"></a>
### entropy of the universe

The entropy of the universe is a measure of overall thermodynamic disorder. For isolated systems, it tends to increase until equilibrium is reached. This statement connects thermodynamics to the large-scale evolution of physical systems and is one of the strongest general descriptions of the arrow of time.

<a id="topic-031-t-s-diagrams"></a>
### T-S diagrams

A temperature-entropy diagram is a useful way to visualize thermodynamic cycles and processes. The area under a curve in a T-S graph represents heat exchanged during a process, <br>\[Q = \int T \, dS.\]<br> T-S diagrams are particularly helpful for comparing engine cycles, refrigeration cycles, and phase transitions. They make the role of entropy in energy transfer visually clear.

<a id="topic-032-the-third-law-and-unattainability-of-absolute-zero"></a>
### the third law and unattainability of absolute zero

The third law states that the entropy of a perfect crystal approaches zero as the temperature approaches absolute zero. This implies that no finite sequence of operations can bring a system to exactly 0 K. The unattainability of absolute zero is a profound statement about the limits of cooling and is closely connected to quantum mechanics and statistical physics.

## UNIT-III: Thermodynamic Potentials and Transport Phenomena (15 Lectures)

<a id="topic-033-internal-energy"></a>
### Internal energy

The internal energy is the total microscopic energy of a system and is a natural starting point for deriving thermodynamic potentials. In differential form, for a simple compressible system, <br>\[dU = T dS - P dV + \mu dN.\]<br> Internal energy therefore connects entropy, volume, and composition. It is one of the core quantities from which other potentials are constructed.

<a id="topic-034-enthalpy"></a>
### enthalpy

Enthalpy is defined as <br>\[H = U + PV.\]<br> It is useful for processes at constant pressure, such as many chemical and engineering transformations. In differential form, <br>\[dH = T dS + V dP + \mu dN.\]<br> Enthalpy is especially important in heat-engine cycles and phase-change calculations.

<a id="topic-035-helmholtz-free-energy"></a>
### Helmholtz free energy

The Helmholtz free energy is defined as <br>\[F = U - TS.\]<br> It is the thermodynamic potential appropriate to constant temperature and volume conditions. The change in free energy tells us whether a process is spontaneous under those constraints: a decrease in free energy indicates spontaneity. It plays a major role in statistical mechanics and equilibrium thermodynamics.

<a id="topic-036-gibbs-free-energy"></a>
### Gibbs free energy

Gibbs free energy is defined as <br>\[G = H - TS = U + PV - TS.\]<br> It is the relevant potential for processes at constant temperature and pressure, which are common in chemistry and material science. A process is spontaneous when it lowers Gibbs free energy, so it is central to phase equilibrium and chemical reactions.

<a id="topic-037-first-and-second-order-phase-transitions-clausius-clapeyron"></a>
### First- and second-order phase transitions; Clausius-Clapeyron and Ehrenfest equations

In a first-order transition, such as melting or boiling, latent heat is absorbed or released and the first derivative of the free energy is discontinuous. In a second-order transition, no latent heat is involved, but the second derivative changes discontinuously. The Clausius-Clapeyron equation, <br>\[\frac{dP}{dT} = \frac{L}{T\Delta V},\]<br> describes the pressure-temperature relation at phase boundaries, while Ehrenfest's equations analyze continuous phase transitions.

<a id="topic-038-maxwell-relations-and-applications"></a>
### Maxwell relations and applications

Maxwell relations are identities obtained from the exact differentials of thermodynamic potentials. For example, <br>\[\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V.\]<br> These relations connect measurable quantities such as temperature, pressure, volume, and entropy. They are powerful tools for deriving equations of state and for understanding the behavior of real systems.

<a id="topic-039-cp-cv"></a>
### Cp-Cv

The difference between the heat capacities at constant pressure and constant volume is fundamental in thermodynamics: <br>\[C_P - C_V = \left[P + \left(\frac{\partial U}{\partial V}\right)_T\right]\left(\frac{\partial V}{\partial T}\right)_P.\]<br> For ideal gases, this reduces to \\(C_P - C_V = R\\). The ratio of these capacities influences sound propagation, adiabatic compression, and the response of gases to heating.

<a id="topic-040-t-ds-equations"></a>
### T-dS equations

The fundamental relation in entropy form is <br>\[T dS = dU + P dV\]<br> for a simple compressible system. In practice, the T-dS equations connect entropy changes to temperature, pressure, and volume: <br>\[T dS = C_V dT + T\left(\frac{\partial P}{\partial T}\right)_V dV,\]<br> and <br>\[T dS = C_P dT - T\left(\frac{\partial V}{\partial T}\right)_P dP.\]<br> These equations are indispensable for deriving many thermodynamic properties.

<a id="topic-041-joule-kelvin-coefficient-for-ideal-and-van-der-waals-gases"></a>
### Joule-Kelvin coefficient for ideal and van der Waals gases

The Joule-Kelvin coefficient is defined as <br>\[\mu_{JK} = \left(\frac{\partial T}{\partial P}\right)_H.\]<br> It describes temperature change during throttling (isenthalpic expansion). For an ideal gas, \\(\mu_{JK}=0\\). For a van der Waals gas, it can be positive or negative depending on temperature and pressure. This phenomenon is used in refrigeration and liquefaction.

<a id="topic-042-molecular-collisions"></a>
### Molecular collisions

Molecular collisions are responsible for the transfer of momentum, energy, and matter. In gases, collisions determine pressure, viscosity, thermal conductivity, and diffusion. The rate and nature of collisions depend on molecular speed, concentration, and interaction potential. Statistical analysis of collisions is therefore central to kinetic theory.

<a id="topic-043-mean-free-path"></a>
### mean free path

The mean free path is the average distance a molecule travels between collisions. It is roughly <br>\[\lambda \approx \frac{1}{\sqrt{2} \pi d^2 n},\]<br> where \\(d\\) is the molecular diameter and \\(n\\) is the number density. Mean free path is large in dilute gases and small in dense gases. It controls the transport properties of gases and the validity of continuum approximations.

<a id="topic-044-collision-probability"></a>
### collision probability

Collision probability depends on the relative speed of molecules and their effective cross-sectional area. In a gas, the number of collisions per unit time is proportional to the molecular density and the mean relative speed. This tells us why transport phenomena become stronger at higher temperatures and pressures. Probability-based kinetic theory is a convenient route to macroscopic transport coefficients.

<a id="topic-045-transport-in-ideal-gases"></a>
### transport in ideal gases

Transport in gases occurs through random molecular motion. The macroscopic coefficients of viscosity, thermal conductivity, and diffusion are all tied to molecular motion and collisions. In the ideal-gas approximation, transport coefficients can often be expressed in terms of mean free path and molecular speed. These processes are the microscopic basis of how gradients are smoothed out in a fluid.

<a id="topic-046-viscosity"></a>
### Viscosity

Viscosity is the property of a fluid that resists relative motion between adjacent layers. In a gas, it arises from the transfer of momentum across molecular collisions. The dynamic viscosity is often estimated from kinetic theory as <br>\[\eta \sim \tfrac{1}{3} n m \bar{v} \lambda.\]<br> Viscosity is essential in fluid flow, lubrication, and the damping of motion in gases and liquids.

<a id="topic-047-thermal-conductivity"></a>
### thermal conductivity

Thermal conductivity measures how efficiently heat is transported through a material due to temperature differences. In a gas, it arises from the transfer of molecular kinetic energy during collisions. Fourier's law, <br>\[q = -k \nabla T,\]<br> states that heat flux is proportional to the temperature gradient. The coefficient \\(k\\) depends on the mean free path, molecular speed, and heat capacity.

<a id="topic-048-diffusion"></a>
### diffusion

Diffusion is the net transport of particles from regions of higher concentration to regions of lower concentration. In gases, this is driven by random molecular motion and concentration gradients. Fick's law, <br>\[J = -D \nabla n,\]<br> expresses the particle flux in terms of the diffusion coefficient \\(D\\). Diffusion is critical in chemical kinetics, gas mixing, and many transport problems.

<a id="topic-049-brownian-motion"></a>
### Brownian motion

Brownian motion is the irregular jittering of microscopic particles suspended in a fluid due to random collisions with molecules. Einstein showed that the mean-square displacement grows linearly with time: <br>\[\langle x^2 \rangle = 2Dt.\]<br> This observation played a major role in establishing the molecular nature of matter and linking microscopic randomness with macroscopic observable motion.

<a id="topic-050-heat-conduction-in-a-metal-rod-and-conductivity-by-the-perio"></a>
### Heat conduction in a metal rod and conductivity by the periodic-flow method

Heat conduction in a solid, especially a metal rod, is often studied by measuring the steady-state temperature gradient along the rod. Fourier's law gives the heat flow per unit time as proportional to the thermal gradient. In practical experiments, a periodic-flow method can be used to determine thermal conductivity by comparing phase and amplitude of temperature oscillations. This method is valuable because it reduces errors due to stray heat losses and gives a more precise estimate of thermal transport.

