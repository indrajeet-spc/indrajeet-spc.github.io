---
layout: default
title: "MJ-7: Semiconductor Devices | Dr. Indrajeet Kumar"
heading: "MJ-7: Semiconductor Devices"
kicker: "MJ-7 LECTURE NOTES"
subtitle: "Semiconductor Devices"
permalink: /mj-7/
---

Semiconductor devices form the foundation of modern electronics: they enable switching, amplification, regulation, signal detection, and energy conversion. The essential physics lies in band structure, carrier transport, and the controlled formation of junctions between p-type and n-type materials.

## UNIT-I: Semiconductor Fundamentals (15 Lectures)

<a id="topic-001-semiconductor-materials"></a>
### Semiconductor materials

Semiconductors are materials whose electrical conductivity lies between that of conductors and insulators. Common examples are silicon, germanium, and gallium arsenide. Their conductivity can be controlled by temperature, light, and impurity doping. This tunability is what makes semiconductor devices indispensable in technology.

<a id="topic-002-intrinsic-and-extrinsic-semiconductors"></a>
### intrinsic and extrinsic semiconductors

An intrinsic semiconductor is a nearly pure crystal in which the number of electrons in the conduction band equals the number of holes in the valence band. Extrinsic semiconductors are doped with donor or acceptor atoms to create excess electrons or holes. Doping makes it possible to engineer the conductivity and build p-n junctions and transistors.

<a id="topic-003-charge-carriers"></a>
### charge carriers

In a semiconductor, the two dominant charge carriers are electrons and holes. Electrons are negatively charged and move in the conduction band, while holes behave as mobile positive charge carriers in the valence band. The net current is the sum of electron and hole drift due to an applied electric field. The carrier concentration depends strongly on temperature and doping.

<a id="topic-004-direct-and-indirect-band-gaps-and-heavily-doped-semiconducto"></a>
### Direct and indirect band gaps and heavily doped semiconductors

A direct band-gap semiconductor allows electronic transitions with minimal change in crystal momentum, making it efficient for optical emission and absorption. An indirect band-gap semiconductor requires a phonon-assisted transition. Heavily doped semiconductors can exhibit degenerate statistics, altered Fermi levels, and reduced effective band gaps, which strongly affect device behavior.

<a id="topic-005-carrier-concentration"></a>
### Carrier concentration

Carrier concentration is the number of mobile electrons or holes per unit volume. For intrinsic semiconductors, \(n_i\) is the intrinsic carrier concentration. In extrinsic semiconductors, doping shifts the balance between electrons and holes. The concentration of carriers is often computed from the Fermi level and the density of states. This quantity directly influences conductivity and junction characteristics.

<a id="topic-006-mobility"></a>
### mobility

Carrier mobility \(\mu\) measures how quickly carriers drift in an electric field: \[v_d = \mu E.\] Mobilities depend on scattering mechanisms such as lattice vibrations, impurities, and defects. Higher mobility leads to larger current for a given electric field. Mobility is one of the central parameters in the design of semiconductor devices.

<a id="topic-007-equilibrium-electron-and-hole-concentrations"></a>
### equilibrium electron and hole concentrations

Under thermal equilibrium, the electron and hole concentrations satisfy the mass action law: \[np = n_i^2.\] In n-type semiconductors, electrons are the majority carriers; in p-type semiconductors, holes are the majority carriers. The Fermi level moves toward the conduction band in n-type material and toward the valence band in p-type material. These concentrations determine current flow and junction properties.

<a id="topic-008-energy-bands"></a>
### Energy bands

In a crystal, allowed electron energies form bands separated by forbidden gaps. The valence band is the highest filled band at zero temperature, while the conduction band is the next available band. The band gap decides whether the material behaves as an insulator, semiconductor, or conductor. The structure of these bands is determined by the crystal lattice and the periodic potential.

<a id="topic-009-density-of-states"></a>
### density of states

The density of states describes how many electron states exist in a given energy range. In semiconductors, it depends on the band structure and effective mass of carriers. The density of states near the band edges plays a central role in determining the carrier concentration. It is a key concept in connecting microscopic theory to device physics.

<a id="topic-010-fermi-level"></a>
### Fermi level

The Fermi level is the energy at which the probability of occupation is 1/2 at finite temperature. In intrinsic semiconductors it lies near the middle of the band gap; in doped semiconductors it shifts toward the conduction or valence band. The position of the Fermi level governs carrier injection and the built-in potential in junction devices.

<a id="topic-011-fermi-dirac-distribution"></a>
### Fermi-Dirac distribution

The probability that an electron occupies an energy level \(E\) is given by \[f(E)=\frac{1}{1+e^{(E-E_F)/kT}}.\] This distribution is fundamental in semiconductor statistics. It tells us how the occupation of states changes with temperature and how the conduction and valence bands are filled. The Fermi-Dirac function is central to the derivation of carrier concentrations and current mechanisms.

## UNIT-II: p-n Junction Diodes and Applications (15 Lectures)

<a id="topic-012-p-n-junction-formation"></a>
### p-n junction formation

A p-n junction is formed by joining p-type and n-type semiconductors. At the interface, diffusion of electrons and holes creates a region with depleted mobile carriers. This leads to an electric field due to fixed ionized dopants. The junction becomes the basic building block of diodes and many transistor structures.

<a id="topic-013-depletion-region"></a>
### depletion region

The depletion region is the space-charge region near the junction where mobile carriers are largely removed. It contains ionized donor and acceptor atoms, creating an internal electric field. Because there are almost no free carriers there, the region behaves as an insulating barrier. The width of the depletion region depends on doping concentrations and applied voltage.

<a id="topic-014-barrier-potential"></a>
### barrier potential

The barrier potential arises from the electric field in the depletion region. It opposes further diffusion of majority carriers and yields a built-in potential \(V_{bi}\) across the junction. At equilibrium, the drift current due to the field balances the diffusion current. This built-in potential is the reason the p-n junction supports rectification and diode behavior.

<a id="topic-015-forward-and-reverse-bias"></a>
### forward and reverse bias

Under forward bias, the p-side is connected to a higher potential than the n-side, reducing the barrier and allowing current to flow. Under reverse bias, the barrier increases and only a small saturation current flows. The diode therefore acts as a directional conductor, allowing current in one direction and blocking it in the other. This is the essential property used in rectification.

<a id="topic-016-diode-characteristics"></a>
### diode characteristics

The current-voltage relation of a diode is approximately \[I = I_s\left(e^{qV/nkT} - 1\right),\] where \(I_s\) is the saturation current and \(n\) is the ideality factor. In forward bias, current rises sharply after a threshold voltage; in reverse bias, the current remains small until breakdown. The I-V curve is the key characteristic used to design diode circuits.

<a id="topic-017-junction-capacitance"></a>
### Junction capacitance

A p-n junction behaves as a capacitance because charge separation in the depletion region stores electric charge. The capacitance depends on the junction area and the width of the depletion region. Under reverse bias, the depletion width increases and capacitance decreases. This capacitance is important in switching circuits and high-frequency applications.

<a id="topic-018-diode-current-mechanisms"></a>
### diode current mechanisms

The diode current is caused by the diffusion of carriers across the junction and the drift of minority carriers across the depletion region. In forward bias, diffusion dominates; in reverse bias, a small saturation current flows due to thermally generated carriers. The balance between these mechanisms sets the rectifying behavior and the temperature dependence of the device.

<a id="topic-019-static-and-dynamic-resistance"></a>
### static and dynamic resistance

The static resistance is defined as \(R_{DC} = V/I\), while the dynamic or small-signal resistance is \[r_d = \frac{dV}{dI}.\] The latter is more relevant for AC analysis because it describes how the diode responds to small fluctuations around a bias point. These resistances help model the diode in circuit design and signal processing.

<a id="topic-020-half-wave"></a>
### Half-wave

A half-wave rectifier allows only one half-cycle of an AC waveform to pass through a diode. During the forward half-cycle, the diode conducts; during the reverse half-cycle, it blocks. The output is therefore pulsating DC with a large ripple component. Simple half-wave rectifiers are useful but inefficient compared with full-wave versions.

<a id="topic-021-centre-tapped"></a>
### centre-tapped

A center-tapped full-wave rectifier uses a transformer with a midpoint tap and two diodes. Each half-cycle drives one of the diodes, so both halves of the AC input are converted to DC. This arrangement provides smoother output than a half-wave rectifier. It is a standard technique in power supplies for low-to-medium power applications.

<a id="topic-022-bridge-full-wave-rectifiers-load-line"></a>
### bridge full-wave rectifiers; load line

A bridge rectifier uses four diodes arranged in a bridge configuration so that both halves of the input cycle are rectified without a center-tapped transformer. The output waveform has a lower ripple frequency and better efficiency than a half-wave rectifier. A load line is a graphical method for analyzing the operating point of a diode or transistor in a circuit by plotting the device characteristic and the circuit equation together.

<a id="topic-023-q-point"></a>
### Q-point

The Q-point, or quiescent point, is the DC operating point of a transistor or diode around which small-signal variations occur. It is determined by the supply voltage, biasing resistors, and device characteristics. Proper selection of the Q-point ensures that the device operates in the desired region, such as active or cutoff mode, without excessive distortion.

<a id="topic-024-current-and-voltage"></a>
### current and voltage

The current through a diode or transistor is influenced by the applied voltage and the internal charge distribution. In a diode, voltage across the junction influences the depletion width and carrier injection. In transistor circuits, both current and voltage are used to set the bias and determine amplification. These variables are central to device operation and practical circuit design.

<a id="topic-025-regulation"></a>
### regulation

Voltage regulation describes how well a power supply maintains a nearly constant output voltage despite changes in load or input conditions. Ripple, diode drops, and transformer characteristics affect regulation. Good regulation is essential for stable electronic circuits and is often improved by using filter capacitors or active regulators.

<a id="topic-026-ripple"></a>
### ripple

Ripple is the residual AC component remaining after rectification. It appears because the output is pulsating rather than perfectly constant. Larger capacitor filters reduce ripple by charging during peaks and discharging between them. Ripple is an important specification for power supplies, especially in audio and digital electronics.

<a id="topic-027-efficiency"></a>
### efficiency

Rectifier efficiency measures the fraction of AC input power converted to DC output. For a half-wave rectifier, efficiency is relatively low because half the input is discarded. Full-wave rectification improves efficiency significantly. Device loss and transformer losses reduce the actual power conversion efficiency below the ideal value.

<a id="topic-028-filters"></a>
### filters

Filters smooth the rectified waveform by attenuating ripple components while allowing the DC component to pass. Common filter types include capacitor filters, inductive filters, and L-section or Pi-section networks. Filters are essential in power supplies and signal-conditioning circuits because many electronic systems require low-ripple DC.

<a id="topic-029-zener-and-avalanche-breakdown-and-the-zener-voltage-regulato"></a>
### Zener and avalanche breakdown and the Zener voltage regulator

A Zener diode is designed to operate in reverse breakdown; in this region the voltage across the diode remains nearly constant over a range of current. Avalanche breakdown occurs when carriers accelerated by the electric field ionize atoms in the depletion region. A Zener voltage regulator uses this nearly constant voltage to stabilize a power supply. This is a key application of semiconductor junction physics.

<a id="topic-030-leds"></a>
### LEDs

Light-emitting diodes (LEDs) are p-n junction devices that emit light when electrons and holes recombine. In direct-band-gap materials, this recombination can generate photons efficiently. The emitted wavelength depends on the band gap and material composition. LEDs are widely used in indicators, displays, communication systems, and solid-state lighting.

<a id="topic-031-photodiodes"></a>
### photodiodes

A photodiode is a reverse-biased p-n junction that converts incident light into current. Photons with energy greater than the band gap generate electron-hole pairs in the depletion region, causing photocurrent. Photodiodes are used in optical communication, light sensing, and instrumentation. Their operation depends on material choice, geometry, and reverse-bias conditions.

<a id="topic-032-solar-cells"></a>
### solar cells

A solar cell is a p-n junction that converts sunlight directly into electrical power via the photovoltaic effect. Photons absorbed near the junction generate electron-hole pairs, which are separated by the built-in electric field. This produces a current in an external circuit. Solar cells are a major example of semiconductor devices connecting materials science, optics, and energy conversion.

<a id="topic-033-semiconductor-lasers"></a>
### semiconductor lasers

Semiconductor lasers use stimulated emission in a p-n junction or a more complex heterostructure. The active region has a direct band gap, allowing efficient optical transitions. Population inversion is achieved by carrier injection, and mirrors or distributed feedback provide optical feedback. Semiconductor lasers are essential in optical communication, sensing, and compact laser systems.

## UNIT-III: Bipolar Junction Transistors (15 Lectures)

<a id="topic-034-bjt-operation-in-n-p-n-and-p-n-p-transistors-cb"></a>
### BJT operation in n-p-n and p-n-p transistors; CB

A bipolar junction transistor (BJT) consists of three regions: emitter, base, and collector. In an n-p-n transistor, electrons are the majority carriers; in a p-n-p transistor, holes are the majority carriers. The common-base (CB) configuration is used to study transistor action, current gain, and input-output characteristics. A small change in emitter current produces a larger collector current, which is the basis of transistor amplification.

<a id="topic-035-ce"></a>
### CE

In the common-emitter (CE) configuration, the emitter is common to both input and output circuits. This configuration provides high current gain and voltage gain, making it the most common BJT amplifier arrangement. The transistor operates in active mode when the base-emitter junction is forward biased and the collector-base junction is reverse biased. CE characteristics are crucial for biasing and amplification design.

<a id="topic-036-cc-characteristics-and-current-gains"></a>
### CC characteristics and current gains

The common-collector (CC) configuration, also called an emitter follower, has the collector terminal common to both input and output. It provides high input resistance and low output resistance, with voltage gain close to one. Current gain is large, and it is used as a buffer stage. The transistor current gains in different configurations are denoted by \(\alpha\), \(\beta\), and \(\gamma\), depending on the arrangement.

<a id="topic-037-transistor-load-line-analysis"></a>
### Transistor load-line analysis

A load line is the graphical relationship between collector current and collector-emitter voltage determined by the external circuit. The transistor characteristic curve intersects the load line at the operating point. Load-line analysis helps determine whether the transistor is in active, cutoff, or saturation regions for a given biasing condition. It is an intuitive method for circuit design.

<a id="topic-038-q-point"></a>
### Q-point

The Q-point is the DC operating point of the transistor, selected by the bias network. It must lie in the active region for amplification. If the Q-point is too close to cutoff or saturation, waveform distortion appears. Proper biasing stabilizes the operating point against temperature and component variations.

<a id="topic-039-current-flow"></a>
### current flow

In a BJT, the emitter injects carriers into the base region, where they are transported toward the collector. The collector current is controlled by the base-emitter voltage and the transistor geometry. The flow of current in a BJT is therefore a minority-carrier transport process, making device physics closely tied to junction dynamics and diffusion.

<a id="topic-040-active"></a>
### active

The active region is the mode in which a BJT acts as an amplifier. In this region, the base-emitter junction is forward biased while the base-collector junction is reverse biased. The transistor current is controlled by the input current at the base, and the collector current is approximately proportional to it. Small-signal amplification relies on operation in this region.

<a id="topic-041-cutoff"></a>
### cutoff

In cutoff, both junctions are reverse biased or no significant base current flows. The transistor then carries almost no collector current, acting like an open switch. This operating region is used in digital and switching circuits to represent the OFF state. The current is close to zero in the ideal approximation.

<a id="topic-042-saturation-regions"></a>
### saturation regions

In saturation, both junctions are forward biased and the transistor can conduct a large current with little control from the base. It behaves like a closed switch. The collector-emitter voltage drops to a small value. In switching circuits, saturation is used to represent the ON state, while cutoff represents OFF.

<a id="topic-043-jfet-operation"></a>
### JFET operation

A junction field-effect transistor (JFET) uses an electric field to control the channel current. The gate-to-channel junction is reverse biased, so no significant current flows into the gate. Modulating the gate voltage changes the width of the depletion region and hence the channel cross-sectional area. JFETs are voltage-controlled devices with high input impedance.

<a id="topic-044-characteristics"></a>
### characteristics

The JFET has transfer and output characteristics. The output characteristic shows drain current as a function of drain-source voltage for different gate-source voltages. The transfer characteristic relates drain current to gate voltage and is approximately quadratic in the saturation region. These curves are used to determine the operating region and the design of amplifier circuits.

<a id="topic-045-parameters"></a>
### parameters

JFET parameters include transconductance, drain resistance, and gate leakage current. Transconductance is a measure of how strongly the drain current responds to a small gate voltage change: \[g_m = \frac{\partial I_D}{\partial V_{GS}}.\] These parameters are used in equivalent-circuit models for small-signal analysis and design. They also allow us to compare JFETs with BJTs and MOSFETs.

<a id="topic-046-ideal-and-real-mos-capacitors"></a>
### Ideal and real MOS capacitors

A MOS capacitor consists of a metal-oxide-semiconductor sandwich, where the oxide acts as a dielectric. In the ideal model, the gate voltage controls the surface charge without leakage or interface traps. In real devices, defects, fixed charge, and oxide traps lead to non-ideal capacitance-voltage behavior. Understanding these effects is important because MOS capacitors form the basis of MOSFET operation.

<a id="topic-047-mosfet-threshold-voltage"></a>
### MOSFET threshold voltage

The threshold voltage \(V_T\) is the gate voltage required to create an inversion layer in the channel. Below this voltage, the channel is depleted and current is minimal. Above threshold, the channel forms and current can flow. The threshold is controlled by gate material, oxide thickness, doping, and interface properties. It is a central design parameter for digital and analog circuits.

<a id="topic-048-output-and-transfer-characteristics"></a>
### output and transfer characteristics

The output characteristic of a MOSFET shows drain current as a function of drain-source voltage for different gate-source voltages, while the transfer characteristic relates drain current to gate voltage. These curves reveal the linear and saturation regions of operation. For digital circuits, the MOSFET is used as a switch; for analog circuits, it acts as a transconductance device. Characteristic curves are essential for device selection and bias design.

