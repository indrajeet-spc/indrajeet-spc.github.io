---
layout: default
title: "MJ-1: Mechanics and Properties of Matter | Dr. Indrajeet Kumar"
heading: "MJ-1: Mechanics and Properties of Matter"
kicker: "MJ-1 LECTURE NOTES"
subtitle: "Mechanics and Properties of Matter"
permalink: /mj-1/
---

These notes begin with everyday observations and build toward the equations. Read the
definitions first, follow each derivation in order, and keep track of units. In this paper,
\\(g\\) is the acceleration due to gravity, \\(\rho\\) is mass per unit volume, and SI units are
used unless stated otherwise.

### A few tools used throughout this paper

- A **scalar** has size only (for example, mass or temperature); a **vector** has size
  and direction (for example, force or velocity).
- A change is often written as <br>\\[\Delta x = x_{\mathrm{final}} - x_{\mathrm{initial}}\,\text{.}\\]<br> A rate of change with
  time is written \\(\frac{dx}{dt}\\).
- In an equation, both sides must have the same physical dimensions. For example,
  force has units \\(\mathrm{kg\,m\,s^{-2}}\\), also called a newton (N).
- A model is an approximation. Whenever we use one, we state its assumptions—for
  example, “small oscillations” or “steady flow.”

The three units below connect elasticity and fluids, orbital and oscillatory motion, and
the changes to space and time described by special relativity.


## UNIT-I: General Properties of Matter (15 Lectures)

<a id="topic-001-hooke-s-law"></a>
### Hooke's law

When a material is pulled or pushed, its particles shift slightly from their equilibrium
positions. For a small deformation, the restoring force is proportional to the
deformation: <br>\\[F = -kx\,\text{.}\\]<br> Here \\(k\\) is the stiffness and the minus sign says that the force
points back toward equilibrium.

For a uniform wire of original length \\(L\\) and cross-sectional area \\(A\\), a tensile force
\\(F\\) produces an extension \\(\Delta L\\). **Stress** is force per area, <br>\\[\sigma = F/A\,\text{;}\\]<br>
**longitudinal strain** is fractional extension, <br>\\[\epsilon = \Delta L/L\,\text{.}\\]<br> In the elastic
range, <br>\\[\sigma = Y \epsilon\,\text{,}\\]<br> where \\(Y\\) is Young's modulus. The statement is valid only
while the material returns to its original shape when unloaded. A spring is not
necessary: this law describes the small-deformation behaviour of many solids.

**Example.** A \\(1\,\mathrm{m}\\) wire extends \\(1 \mathrm{mm}\\) under a load. Its strain is
<br>\\[0.001/1 = 0.001\\]<br> (dimensionless). If the stress is \\(2 \times 10^8 \mathrm{Pa}\\), then
<br>\\[Y = \frac{\text{stress}}{\text{strain}} = 2 \times 10^11 \mathrm{Pa}\,\text{.}\\]<br>

<figure class="lecture-figure">
  <img src="{{ '/images/lecture/elasticity.svg' | relative_url }}" alt="A wire extending under equal outward forces alongside a typical stress-strain graph showing the elastic and plastic regions">
  <figcaption>A tensile load produces a small extension in the elastic region; the graph shows how a specimen responds as strain increases.</figcaption>
</figure>

<a id="topic-002-stress-strain-diagram"></a>
### Stress-strain diagram

The stress-strain graph records how a specimen responds as it is stretched. Stress is
plotted vertically and strain horizontally. At first, the graph is usually a straight
line: stress is proportional to strain, and the slope is Young's modulus.

The **proportional limit** marks where that straight-line relation ends. The **elastic
limit** is the greatest stress for which unloading restores the original dimensions.
Beyond it, **plastic deformation** remains after unloading. With further stretching,
the material may strengthen, reach a maximum stress (ultimate tensile strength), form a
neck, and finally fracture. These are distinct points: the proportional limit need not
equal the elastic limit.

The area under the graph is work done per unit volume, because
<br>\\[\frac{\text{work}}{\text{volume}} = (\text{force} \times \text{extension})/(\text{area} \times \text{original length}) = \text{stress} \times \text{strain}\,\text{.}\\]<br>
This area is the elastic energy stored per volume when the loading and unloading path is
reversible. Brittle materials fracture with little plastic deformation; ductile materials
can stretch considerably first.

<a id="topic-003-elastic-moduli"></a>
### Elastic moduli

An **elastic modulus** measures how much stress is needed for a given strain. A larger
modulus means a stiffer material, not necessarily a stronger one. Three moduli describe
three common deformations:

- **Young's modulus**, <br>\\[Y = \frac{\text{longitudinal stress}}{\text{longitudinal strain}}\,\text{,}\\]<br> for stretching
  or compression.
- **Bulk modulus**, <br>\\[K = \text{pressure increase} / \text{fractional volume decrease}\\]<br>
  (<br>\\[K = -\Delta p/(\Delta V/V)\\]<br>), for uniform compression. The minus sign makes \\(K\\)
  positive because volume decreases when pressure rises.
- **Shear modulus**, <br>\\[G = \frac{\text{shear stress}}{\text{shear strain}}\,\text{,}\\]<br> for changing shape at nearly
  constant volume.

All three moduli have units of pressure, pascal (Pa); strain itself has no units. For a
wire, <br>\\[\Delta L = FL/(AY)\,\text{.}\\]<br> This predicts that a longer or more heavily loaded wire
stretches more, a thicker wire stretches less, and a material with larger \\(Y\\) stretches
less. These relations assume small deformations and uniform material properties.

<a id="topic-004-poisson-s-ratio"></a>
### Poisson's ratio

Stretching a rod makes it longer and, usually, slightly narrower. **Poisson's ratio**
measures this sideways response:

\\[
\nu = -\frac{\text{lateral strain}}{\text{longitudinal strain}}
\\]

The minus sign is conventional: ordinary materials contract sideways when stretched,
so the two strains have opposite signs and \\(\nu\\) is positive. For a rod stretched along
\\(x\\), lateral strain is the change in a transverse dimension divided by its original
dimension.

For an isotropic, linearly elastic material (same properties in every direction), the
elastic constants are related by
<br>\\[Y = 2G(1 + \nu) = 3K(1 - 2\nu)\,\text{.}\\]<br> Thus
<br>\\[\nu = Y/(2G) - 1 = (3K - Y)/(6K)\,\text{.}\\]<br> These formulae follow from combining the normal
and shear responses of a small element under load. They are not independent
measurements: measuring any two of \\(Y\\), \\(G\\), \\(K\\), and \\(\nu\\) determines the others.
For stable ordinary isotropic solids, <br>\\[-1 < \nu < 1/2\,\text{;}\\]<br> most familiar solids have a
positive value.

<a id="topic-005-including-its-expression-in-terms-of-elastic-constants-and-r"></a>
### including its expression in terms of elastic constants and relations between them

The previous topic's relations are useful in calculations. From
<br>\\[Y = 2G(1 + \nu)\,\text{,}\\]<br> we get <br>\\[G = Y/[2(1 + \nu)]\,\text{.}\\]<br> From <br>\\[Y = 3K(1 - 2\nu)\,\text{,}\\]<br> we get
<br>\\[K = Y/[3(1 - 2\nu)]\,\text{.}\\]<br> Combining these gives
<br>\\[Y = 9KG/(3K + G)\\]<br> and <br>\\[\nu = (3K - 2G)/[2(3K + G)]\,\text{.}\\]<br>

**Worked example.** Suppose an isotropic solid has <br>\\[Y = 200 \mathrm{GPa}\\]<br> and <br>\\[\nu = 0.25\,\text{.}\\]<br>
Then <br>\\[G = 200/[2(1.25)] = 80 \mathrm{GPa}\,\text{,}\\]<br> and
<br>\\[K = 200/[3(0.5)] = 133.3 \mathrm{GPa}\,\text{.}\\]<br> The units remain GPa because the ratios and Poisson's
ratio are dimensionless.

These identities rely on small-strain linear elasticity and isotropy. A crystal can
respond differently along different directions; in that case one pair of scalar moduli
does not fully describe it.

<a id="topic-006-kinematics-of-moving-fluids-viscous-fluids"></a>
### Kinematics of moving fluids: viscous fluids

Fluids (liquids and gases) flow rather than maintaining a fixed shape. To describe
motion, imagine a velocity vector assigned to every point in the fluid. The resulting
**velocity field** tells us both how fast the fluid moves and in which direction.

Flow is **steady** if the velocity at a fixed point does not change with time, and
**laminar** if fluid layers slide smoothly past one another. In laminar flow through a
pipe, fluid at the wall is nearly stationary while the central layers move faster. This
friction between layers is **viscosity**. For a Newtonian fluid, shear stress is
proportional to the velocity gradient: <br>\\[\tau = \mu (\frac{du}{dy})\,\text{,}\\]<br> where \\(\mu\\) is dynamic
viscosity, in \\(\mathrm{Pa\,s}\\).

For an incompressible fluid, conservation of mass gives <br>\\[A_{1} v_{1} = A_{2} v_{2}\\]<br> in a pipe:
the fluid speeds up where the pipe narrows. Viscosity dissipates organized mechanical
energy as heat, so pressure must drive a viscous flow. A key assumption in the
capillary formulas that follow is fully developed laminar flow.

<a id="topic-007-poiseuille-s-equation-for-liquid-flow-through-a-capillary-tu"></a>
### Poiseuille's equation for liquid flow through a capillary tube (with correction)

Consider a straight circular tube of radius \\(r\\) and length \\(L\\). Let the pressure fall
from \\(p_{1}\\) to \\(p_{2}\\) along it, and write <br>\\[\Delta p = p_{1} - p_{2}\,\text{.}\\]<br> For steady laminar flow, the
pressure force on a cylindrical layer balances the viscous shear at its surface. The
result is a parabolic speed profile: <br>\\[u(s) = \Delta p (r^2 - s^2)/(4 \mu L)\,\text{,}\\]<br> where \\(s\\)
is distance from the tube's axis.

Integrating this speed over concentric rings gives the volume flow per second:
<br>\\[Q = \pi r^4 \Delta p/(8 \mu L)\,\text{.}\\]<br> This is **Poiseuille's law**. It shows that flow is
extremely sensitive to tube radius (\\(Q\\) varies as \\(r^4\\)), increases with pressure
difference, and decreases with viscosity and length. Its assumptions are a rigid,
circular, uniform tube; Newtonian incompressible fluid; no-slip at the wall; steady,
laminar, fully developed flow.

**Practical correction.** Real measurements can differ because of entrance and exit
effects, finite tube length, temperature changes, leaks, and non-laminar flow. Use the
effective pressure drop along the developed-flow section, not pressure lost in fittings;
measure the internal radius carefully and keep temperature constant, since viscosity
depends on temperature. The formula is not a universal correction for every apparatus.

<figure class="lecture-figure">
  <img src="{{ '/images/lecture/poiseuille-flow.svg' | relative_url }}" alt="Laminar fluid moving through a capillary from high pressure to low pressure, with a parabolic speed profile that is fastest at the centre and zero at the walls">
  <figcaption>In Poiseuille flow, the pressure difference drives the fluid and viscosity creates a parabolic velocity profile across the tube.</figcaption>
</figure>

<a id="topic-008-flow-of-compressible-fluid-through-a-capillary-tube"></a>
### flow of compressible fluid through a capillary tube

For a gas, density changes with pressure, so the incompressible formula cannot be used
unchanged over a large pressure drop. Consider isothermal, steady, laminar flow of an
ideal gas through a capillary. At each position the local flow follows the Poiseuille
relation, but the volume occupied by a given mass changes as pressure changes.

Combining the local Poiseuille relation with mass conservation gives the mass flow rate
<br>\\[\dot{m} = \pi r^4 (p_{1}^2 - p_{2}^2)/(16 \mu L R_{\mathrm{s}} T)\,\text{.}\\]<br> Here \\(R_{\mathrm{s}}\\) is the gas's specific gas
constant in \\(\mathrm{J\,kg^{-1}\,K^{-1}}\\), and \\(T\\) is absolute temperature in kelvin. If the volume
flow is quoted at the inlet pressure, then
<br>\\[Q_{1} = \pi r^4 (p_{1}^2 - p_{2}^2)/(16 \mu L p_{1})\,\text{.}\\]<br>

Pressures must be absolute, not gauge pressures. The result assumes ideal-gas
behaviour, constant temperature and viscosity, and laminar flow. If the pressure drop
is small compared with the mean pressure, density changes little and an incompressible
approximation using a representative density can be reasonable.

<a id="topic-009-rankine-s-methods-for-measuring-gas-viscosity"></a>
### Rankine's methods for measuring gas viscosity

One way to determine a gas's viscosity is to make it flow steadily through a narrow
capillary of known radius and length, then measure its pressure difference and the
amount of gas passing in a known time. This is the capillary-flow idea associated with
Rankine's method in this syllabus.

For an appreciable pressure drop, use the compressible-flow relation from the previous
topic. For measured mass \\(m\\) collected in time \\(t\\), set <br>\\[\dot{m} = m/t\\]<br> and rearrange:
<br>\\[\mu = \pi r^4 (p_{1}^2 - p_{2}^2)/(16 L R_{\mathrm{s}} T \dot{m})\,\text{.}\\]<br> Every quantity on the right must be
measured or known. The radius is particularly important: the inferred viscosity varies
as \\(r^4\\), so a small radius error can cause a large result error.

Keep the gas at a known, stable temperature; measure absolute pressures; check for
leaks; and ensure the flow is laminar and steady. Repeat measurements at different
flow rates. Agreement supports the assumptions; systematic disagreement can indicate
temperature drift, entrance losses, or departure from laminar flow.

<a id="topic-010-surface-tension"></a>
### Surface tension

At a liquid surface, molecules have fewer neighbouring liquid molecules above them
than below them. The net effect is that the surface tends to shrink. **Surface tension**
\\(T\\) (often written \\(\gamma\\)) is the tangential force per unit length along a line in the
surface: <br>\\[T = F/l\,\text{.}\\]<br> Its SI unit is \\(\mathrm{N\,m^{-1}}\\).

Equivalently, surface tension is energy needed to create unit area of new surface:
<br>\\[T = \Delta E/\Delta A\,\text{,}\\]<br> in \\(\mathrm{J\,m^{-2}}\\) (the units are equivalent). A small wire frame with
a movable side of length \\(l\\) covered by a soap film has two surfaces, front and back.
The film therefore pulls the movable side with force <br>\\[F = 2Tl\,\text{,}\\]<br> and work \\(F dx\\)
increases area by \\(2l dx\\), giving energy per area \\(T\\).

Surface tension explains why small droplets tend to be round and why a clean needle
may rest on water without sinking, even though its material is denser than water.
Surface-active substances such as soap change the value of \\(T\\).

<a id="topic-011-surface-energy"></a>
### surface energy

Creating extra liquid surface requires work. If surface tension is uniform, increasing
the surface area by \\(\Delta A\\) changes surface energy by
<br>\\[\Delta E = T \Delta A\,\text{.}\\]<br> This is why a freely suspended liquid drop tends to become
spherical: for a fixed volume, a sphere has the smallest surface area.

A soap film has two surfaces, so increasing each by \\(\Delta A\\) costs
<br>\\[\Delta E = 2T \Delta A\,\text{.}\\]<br> In experiments, remember to count the number of interfaces.
For example, pulling a wire a distance \\(x\\) on a rectangular soap film creates
\\(2lx\\) of new area (two sides), and the work is \\(2Tlx\\).

This energy viewpoint is equivalent to the force-per-length viewpoint. It is often
easier to find a force from the change in energy: if a movable boundary shifts by \\(dx\\),
then <br>\\[F dx = dE\\]<br> for a quasistatic displacement.

<a id="topic-012-angle-of-contact"></a>
### angle of contact

The **angle of contact** \\(\theta\\) is measured through the liquid between the solid
surface and the tangent to the liquid surface at the point where liquid, solid, and air
meet. A small angle means the liquid wets the solid (water on clean glass); an angle
greater than 90 degrees indicates poor wetting (water on a waxed surface).

At equilibrium, horizontal surface forces balance. If \\(T_{SA}\\), \\(T_{SL}\\), and \\(T_{LA}\\) are
the solid-air, solid-liquid, and liquid-air surface tensions, respectively, then
Young's equation is <br>\\[T_{SA} = T_{SL} + T_{LA} \cos(\theta)\,\text{.}\\]<br> The contact angle affects
capillary rise: for a tube of radius \\(r\\), liquid density \\(\rho\\), and vertical rise \\(h\\),
<br>\\[h = 2 T_{LA} \cos(\theta)/(\rho g r)\,\text{.}\\]<br>

When <br>\\[\theta < 90 ^\circ\,\text{,}\\]<br> \\(\cos(\theta)\\) is positive and the liquid rises. When
<br>\\[\theta > 90 ^\circ\,\text{,}\\]<br> it is negative and the liquid level is depressed. The tube must
be narrow for a large rise; this is why water can travel through fine soil pores.

<a id="topic-013-expression-for-excess-pressure"></a>
### expression for excess pressure

Curving a liquid surface creates a pressure difference across it. For two perpendicular
principal radii of curvature \\(R_{1}\\) and \\(R_{2}\\), the Young-Laplace relation is
<br>\\[\Delta p = T(1/R_{1} + 1/R_{2})\,\text{,}\\]<br> with the sign depending on which side is at higher
pressure.

For a spherical liquid drop, <br>\\[R_{1} = R_{2} = r\,\text{,}\\]<br> so the pressure inside exceeds the outside
pressure by \\(2T/r\\). A soap bubble has both an inner and an outer surface, so its excess
pressure is \\(4T/r\\). A cylindrical liquid surface has one finite radius and one infinite
radius, giving \\(T/r\\).

The smaller the radius, the larger the excess pressure. **Example:** if a water drop
has radius \\(1 \mathrm{mm}\\) and surface tension \\(0.072 \mathrm{N\,m^{-1}}\\), its excess pressure is
<br>\\[2(0.072)/(0.001) = 144 \mathrm{Pa}\,\text{.}\\]<br> Confusing a liquid drop with a soap bubble leads to a
factor-of-two error.

<figure class="lecture-figure">
  <img src="{{ '/images/lecture/surface-pressure.svg' | relative_url }}" alt="A spherical liquid drop with excess pressure 2T over r and a soap bubble with excess pressure 4T over r because it has two surfaces">
  <figcaption>Curvature creates excess pressure. A soap bubble has two interfaces, so its excess pressure is twice that of a liquid drop of the same radius.</figcaption>
</figure>

<a id="topic-014-principle-of-virtual-work"></a>
### principle of virtual work

The **principle of virtual work** is a way to test mechanical equilibrium. Imagine an
infinitesimal, hypothetical displacement (a virtual displacement) consistent with the
constraints. If the system is in equilibrium, the total work by all applied forces for
every allowed virtual displacement is zero: <br>\\[sum(F_i . \delta r_i) = 0\,\text{.}\\]<br>

For a movable boundary of a liquid film, increasing area costs surface energy. A
quasistatic virtual displacement \\(dx\\) changes the energy by <br>\\[dE = T dA\,\text{;}\\]<br> the opposing
surface force must therefore do work <br>\\[F dx = T dA\,\text{.}\\]<br> This reproduces the surface-force
results without separately balancing every molecular force.

Virtual does not mean the object actually moves. It is a calculation tool: choose a
small possible displacement, write each force's work with its sign, and impose zero
total work. Constraints such as a fixed pivot determine which displacements are allowed.

<a id="topic-015-ripples"></a>
### ripples

Ripples are small disturbances travelling over a liquid surface. A point on the surface
moves up and down, while the disturbance—and its energy—travels outward. For small
amplitude waves on deep water, gravity and surface tension both act as restoring
influences.

Let <br>\\[k = 2 \pi/\lambda\\]<br> be the wave number and <br>\\[\omega = 2 \pi f\\]<br> the angular frequency.
For a liquid of density \\(\rho\\) and surface tension \\(T\\), the deep-water dispersion
relation is <br>\\[\omega^2 = gk + (T/\rho) k^3\,\text{.}\\]<br> The first term dominates long waves; the
second dominates very short capillary ripples. Since phase speed is \\(\omega/k\\), different
wavelengths generally travel at different speeds: the waves are dispersive.

For water, gravity-capillary effects are comparable near a wavelength of a few
centimetres. The precise crossover depends on the liquid's density and surface tension.
The formula assumes small disturbances and water depth large compared with the
wavelength scale.

<a id="topic-016-gravity-waves"></a>
### gravity waves

When the water is deep compared with the wavelength, the gravity-wave limit of the
previous relation is <br>\\[\omega^2 = gk\,\text{,}\\]<br> so <br>\\[\omega = \sqrt{gk}\\]<br> and the phase speed is
<br>\\[v_p = \omega/k = \sqrt{g/k}\,\text{.}\\]<br> Long gravity waves therefore have a larger phase speed
than short ones. For a layer of finite depth \\(h\\), gravity and surface tension together
give <br>\\[\omega^2 = (gk + T k^3/\rho) \tanh(kh)\,\text{.}\\]<br>

At small \\(kh\\) (shallow water), \\(\tanh(kh)\\) is approximately \\(kh\\), so pure gravity waves
travel at approximately \\(\sqrt{gh}\\), nearly independent of wavelength. At large \\(kh\\),
\\(\tanh(kh)\\) approaches one and the deep-water expression is recovered.

Ocean surface waves are not all simple sinusoidal gravity waves: depth, wind, breaking,
and nonlinear effects can matter. The dispersion relations here describe small,
idealised waves and help explain how waves change speed as their wavelength changes.


## UNIT-II: Central Force Motion and Oscillation (15 Lectures)

<a id="topic-017-motion-of-a-particle-under-a-central-force-field-and-conserv"></a>
### Motion of a particle under a central force field and conservation of angular momentum

For a central force, the force always points toward or away from a fixed centre and its
magnitude depends only on distance \\(r\\): <br>\\[F = f(r) \hat{\mathbf{r}}\,\text{.}\\]<br> Gravity and the ideal
electrostatic force are examples. The torque about the centre is zero because force and
position are parallel: <br>\\[\tau = \mathbf{r} \times \mathbf{F} = 0\,\text{.}\\]<br>

Newton's rotational law says <br>\\[\frac{dL}{dt} = \tau\,\text{,}\\]<br> where angular momentum is
<br>\\[L = \mathbf{r} \times \mathbf{p}\,\text{.}\\]<br> Thus <br>\\[\frac{dL}{dt} = 0\,\text{:}\\]<br> angular momentum is conserved in both magnitude and
direction. For a particle of mass \\(m\\) in plane polar coordinates,
<br>\\[L = m r^2 d(\theta)/dt\,\text{.}\\]<br> A constant \\(L\\) also means equal areas are swept out in equal
times, because the area rate is <br>\\[(1/2)r^2 d(\theta)/dt = L/(2m)\,\text{.}\\]<br>

<figure class="lecture-figure">
  <img src="{{ '/images/lecture/central-orbit.svg' | relative_url }}" alt="An elliptical orbit with the attracting body at one focus, inward central-force arrows, and two shaded areas illustrating area swept over time">
  <figcaption>A central force produces zero torque about the focus, conserving angular momentum and making the swept areas equal for equal time intervals.</figcaption>
</figure>

This result is useful before solving the full orbit: it restricts motion to a plane and
relates radial distance to angular speed. In a conservative central force, mechanical
energy is also conserved.

<a id="topic-018-kepler-s-laws-of-planetary-motion-and-their-derivations"></a>
### Kepler's laws of planetary motion and their derivations

Kepler described planetary motion; Newtonian gravity explains why the laws hold. A
planet of mass \\(m\\) moving around a much heavier Sun of mass \\(M\\) feels
<br>\\[F = GMm/r^2\\]<br> toward the Sun. The central-force result above immediately gives equal
areas in equal times—Kepler's second law.

The orbit shape can also be derived. Write <br>\\[u = 1/r\\]<br> and let
<br>\\[h = r^2 d(\theta)/dt\\]<br> be the angular momentum per unit mass, which is constant. The
radial equation of motion under gravity becomes
<br>\\[\frac{d^2u}{d\theta^2} + u = GM/h^2\,\text{.}\\]<br> Its solution is
<br>\\[r = p/[1 + e \cos(\theta)]\,\text{,}\\]<br> where <br>\\[p = h^2/(GM)\\]<br> and \\(e\\) is the eccentricity. This is
a conic section with the Sun at a focus; a bound planetary orbit has <br>\\[0 \le e < 1\,\text{,}\\]<br> so
the path is an ellipse. This gives Kepler's first law.

For a circular orbit, gravity supplies centripetal acceleration:
<br>\\[GMm/r^2 = mv^2/r\,\text{.}\\]<br> Hence <br>\\[v^2 = GM/r\\]<br> and the period is <br>\\[P = 2 \pi r/v\,\text{.}\\]<br> Substitution
gives <br>\\[P^2 = 4 \pi^2 r^3/(GM)\,\text{,}\\]<br> or <br>\\[P^2 \propto r^3\,\text{:}\\]<br> Kepler's third law for
circular orbits. For an ellipse with semi-major axis \\(a\\) and semi-minor axis \\(b\\), the
area is \\(\pi ab\\). Since areal velocity is \\(h/2\\), one period is
<br>\\[P = 2 \pi ab/h\,\text{.}\\]<br> The orbit equation gives <br>\\[h^2 = GM a(1 - e^2)\\]<br> and
<br>\\[b = a \sqrt{1 - e^2}\,\text{;}\\]<br> substituting yields <br>\\[P^2 = 4 \pi^2 a^3/(GM)\,\text{.}\\]<br> This is the
third law for elliptical as well as circular orbits.

Kepler's first law says planets move in ellipses with the Sun at one focus. Their
varying speed follows from conservation of angular momentum: a planet moves faster
near the Sun and slower farther away. For two bodies of comparable mass, use the
relative orbit and replace \\(M\\) in the period formula by \\(M + m\\).

<a id="topic-019-satellites-in-circular-orbits-and-their-applications"></a>
### Satellites in circular orbits and their applications

An artificial satellite in a circular orbit is continually falling toward Earth, but its
sideways speed makes it keep missing the surface. At orbital radius <br>\\[r = R_E + h\,\text{,}\\]<br>
gravity provides the required centripetal force:
<br>\\[GM_E m/r^2 = mv^2/r\,\text{.}\\]<br> Therefore <br>\\[v = \sqrt{GM_E/r}\\]<br> and
<br>\\[P = 2 \pi \sqrt{r^3/(GM_E)}\,\text{.}\\]<br> The satellite mass cancels: at the same radius, all
satellites have the same ideal orbital speed and period.

The gravitational potential energy is <br>\\[U = -GM_E m/r\,\text{,}\\]<br> and the total energy of a
circular orbit is <br>\\[E = -GM_E m/(2r)\,\text{.}\\]<br> A negative total energy means the satellite is
bound. To escape from radius \\(r\\) in the ideal model, it needs speed
<br>\\[v_escape = \sqrt{2GM_E/r}\,\text{,}\\]<br> which is \\(\sqrt{2}\\) times circular orbital speed there.

Applications include communications, weather observation, navigation, and Earth
observation. Real orbits are affected by atmospheric drag, Earth's non-spherical shape,
and the gravity of the Moon and Sun.

<a id="topic-020-including-centrifugal-force"></a>
### including centrifugal force

In an inertial frame, Newton's laws work without adding fictitious forces. A frame
rotating with a satellite is not inertial. From that rotating viewpoint, an object seems
to be pushed outward; to use Newton's laws in that frame we introduce the **centrifugal
force**.

For rotation at angular speed \\(\omega\\), a mass \\(m\\) at distance \\(r\\) experiences an
outward centrifugal force of magnitude \\(m \omega^2 r\\). It is not an extra physical
interaction; it appears because the frame itself accelerates. The real inward force
needed for circular motion is centripetal force, supplied here by gravity. In a circular
orbit, the orbiting object is weightless in its own freely falling frame even though
gravity is acting.

Do not confuse centripetal and centrifugal forces: in an inertial frame, only the
inward net force is needed to curve the path. In the rotating frame, centrifugal force
balances it for an object at rest relative to that frame.

<a id="topic-021-simple-harmonic-oscillations-shm-differential-equation-of-sh"></a>
### Simple harmonic oscillations (SHM): differential equation of SHM and its solution; kinetic

An oscillation repeats around an equilibrium position. In **simple harmonic motion**
(SHM), the acceleration is proportional to displacement and points toward equilibrium:
<br>\\[a = -\omega^2 x\,\text{.}\\]<br> Newton's law then gives the differential equation
<br>\\[\frac{d^2x}{dt^2} + \omega^2 x = 0\,\text{.}\\]<br>

Its solution is <br>\\[x(t) = A \cos(\omega t + \phi)\,\text{.}\\]<br> Here \\(A\\) is amplitude, \\(\phi\\) is initial
phase, angular frequency \\(\omega\\) is in \\(\mathrm{rad\,s^{-1}}\\), and period is <br>\\[T = 2 \pi/\omega\,\text{.}\\]<br>
Differentiating gives <br>\\[v = -A \omega \sin(\omega t + \phi)\\]<br> and
<br>\\[a = -A \omega^2 \cos(\omega t + \phi) = -\omega^2 x\,\text{,}\\]<br> confirming the equation.

**Example.** A mass on a spring has restoring force <br>\\[F = -kx\,\text{.}\\]<br> Newton's law gives
<br>\\[m \frac{d^2x}{dt^2} = -kx\,\text{,}\\]<br> so <br>\\[\omega = \sqrt{k/m}\\]<br> and
<br>\\[T = 2 \pi \sqrt{m/k}\,\text{.}\\]<br> Doubling the mass increases the period by \\(\sqrt{2}\\); doubling
the spring stiffness decreases it by \\(\sqrt{2}\\).

<figure class="lecture-figure">
  <img src="{{ '/images/lecture/shm-pendulum.svg' | relative_url }}" alt="An animated small-angle pendulum swinging about equilibrium beside a sinusoidal displacement-time graph">
  <figcaption>The pendulum swings about equilibrium while the dot moves along the displacement-time curve. The small-angle approximation makes its motion simple harmonic.</figcaption>
</figure>

<a id="topic-022-potential"></a>
### potential

For a spring with force <br>\\[F = -kx\,\text{,}\\]<br> potential energy is defined so that
<br>\\[F = -dU/dx\,\text{.}\\]<br> Integrating gives <br>\\[U = (1/2)kx^2\\]<br> if zero potential energy is chosen
at equilibrium. Since <br>\\[k = m \omega^2\,\text{,}\\]<br> this is also
<br>\\[U = (1/2)m \omega^2 x^2\,\text{.}\\]<br>

At the turning points, speed is zero and displacement is \\(+A\\) or \\(-A\\); all the
oscillator's mechanical energy is potential:
<br>\\[E = (1/2)m \omega^2 A^2\,\text{.}\\]<br> At equilibrium, displacement and spring potential energy
are zero, so the energy is kinetic. Between these points the energy continuously
changes form, while their sum stays constant if there is no damping.

The same method works for any stable equilibrium: approximate its potential near the
minimum by a parabola, <br>\\[U(x) \approx U(0) + (1/2)kx^2\,\text{.}\\]<br> Small motions then
behave like SHM.

<a id="topic-023-total-energy-along-with-their-time-average-values"></a>
### total energy along with their time-average values

The kinetic energy of an SHM oscillator is <br>\\[K = (1/2)mv^2\,\text{.}\\]<br> Using
<br>\\[v^2 = \omega^2(A^2 - x^2)\,\text{,}\\]<br> we get <br>\\[K = (1/2)m \omega^2(A^2 - x^2)\,\text{.}\\]<br>
The potential energy is <br>\\[U = (1/2)m \omega^2 x^2\,\text{,}\\]<br> so \\(K + U\\) is the constant
\\((1/2)m \omega^2 A^2\\).

Over a full cycle, <br>\\[x = A \cos(\omega t + \phi)\,\text{.}\\]<br> The time average of \\(\cos^2\\) over a
cycle is \\(1/2\\), so average potential energy is \\(E/2\\); average kinetic energy is also
\\(E/2\\). The average displacement and average velocity over a full cycle are zero.

These are time averages, not claims that kinetic and potential energy are equal at
every instant. They are equal on average over complete cycles for ideal SHM.

<a id="topic-024-physical-systems-executing-shm-simple-pendulum"></a>
### Physical systems executing SHM: simple pendulum

A simple pendulum is a small bob of mass \\(m\\) suspended by a light, inextensible string
of length \\(l\\). At angle \\(\theta\\), gravity has a tangential restoring component
\\(-mg \sin(\theta)\\). For small angles measured in radians, \\(\sin(\theta) \approx
\theta\\); the torque equation becomes <br>\\[m l^2 \frac{d^2\theta}{dt^2} = -mgl \theta\,\text{.}\\]<br>

Thus <br>\\[\frac{d^2\theta}{dt^2} + (g/l)\theta = 0\,\text{,}\\]<br> which is SHM with
<br>\\[\omega = \sqrt{g/l}\\]<br> and <br>\\[T = 2 \pi \sqrt{l/g}\,\text{.}\\]<br> The bob's mass does not appear in the
period. A pendulum's period increases with length and decreases when gravitational
acceleration is larger.

The small-angle approximation is essential. Large swings are not exactly SHM and
their period is slightly longer. **Example:** for <br>\\[l = 1\,\mathrm{m}\\]<br> and <br>\\[g = 9.8 \mathrm{m\,s^{-2}}\,\text{,}\\]<br>
<br>\\[T \approx 2 \pi/\sqrt{9.8} = 2.01 s\,\text{.}\\]<br>

<a id="topic-025-compound-pendulum"></a>
### compound pendulum

Unlike a simple pendulum, a **compound (physical) pendulum** is a rigid body swinging
about a fixed horizontal axis. Let its mass be \\(m\\), the centre of mass be distance \\(d\\)
from the pivot, and its moment of inertia about the pivot be \\(I\\). Gravity gives torque
\\(-mgd \sin(\theta)\\). For small angles, <br>\\[I \frac{d^2\theta}{dt^2} = -mgd \theta\,\text{.}\\]<br>

Therefore <br>\\[\omega = \sqrt{mgd/I}\\]<br> and <br>\\[T = 2 \pi \sqrt{I/(mgd)}\,\text{.}\\]<br> By the parallel-axis
theorem, <br>\\[I = I_{\mathrm{cm}} + md^2\,\text{,}\\]<br> where \\(I_{\mathrm{cm}}\\) is the moment of inertia about a parallel axis
through the centre of mass. The length of an equivalent simple pendulum is
<br>\\[l_{\mathrm{eq}} = I/(md)\,\text{.}\\]<br>

This formula assumes a rigid body, fixed pivot, and small oscillations. Moving the
pivot changes both \\(I\\) and \\(d\\), so the period changes.

<a id="topic-026-torsional-pendulum"></a>
### torsional pendulum

In a torsional pendulum, a body is suspended by a thin wire. Twisting it through angle
\\(\theta\\) produces a restoring torque <br>\\[\tau = -\kappa \theta\,\text{,}\\]<br> where \\(\kappa\\) is the
torsional constant of the wire. If the body has moment of inertia \\(I\\), its rotational
equation is <br>\\[I \frac{d^2\theta}{dt^2} = -\kappa \theta\,\text{.}\\]<br>

This is SHM with angular frequency <br>\\[\omega = \sqrt{\kappa/I}\\]<br> and period
<br>\\[T = 2 \pi \sqrt{I/\kappa}\,\text{.}\\]<br> A larger moment of inertia makes oscillations slower; a
stiffer wire (larger \\(\kappa\\)) makes them faster. The units of \\(\kappa\\) are \\(\mathrm{N\,m\,rad^{-1}}\\)
(radian is dimensionless in SI).

The approximation assumes the wire twists elastically and torque is proportional to
angle. A torsion balance uses this principle to detect very small torques.

<a id="topic-027-lc-circuit"></a>
### LC circuit

An ideal LC circuit contains an inductor \\(L\\) and capacitor \\(C\\) with negligible
resistance. A charged capacitor discharges through the inductor; magnetic energy builds
up in the inductor, then drives current that charges the capacitor with the opposite
polarity. Energy moves back and forth between electric and magnetic forms.

If \\(q\\) is capacitor charge and <br>\\[i = \frac{dq}{dt}\,\text{,}\\]<br> Kirchhoff's voltage law gives
<br>\\[L d^2q/dt^2 + q/C = 0\,\text{.}\\]<br> Hence the charge executes SHM with
<br>\\[\omega = 1/\sqrt{LC}\\]<br> and <br>\\[T = 2 \pi \sqrt{LC}\,\text{.}\\]<br> Current is a quarter-cycle out of phase
with charge. The stored energy is \\(q^2/(2C) + Li^2/2\\), constant in the ideal circuit.

Resistance in a real circuit dissipates energy, so the oscillations decay. The LC model
is a useful first approximation when resistance is small.

<a id="topic-028-damped-and-forced-oscillations-resonance"></a>
### Damped and forced oscillations: resonance

Real oscillators lose energy. A common model is a restoring force \\(-kx\\) and a damping
force proportional to velocity, \\(-b \frac{dx}{dt}\\). With an external periodic drive
\\(F_{0} \cos(\omega_d t)\\), Newton's law gives
<br>\\[m x'' + b x' + kx = F_{0} \cos(\omega_d t)\,\text{.}\\]<br>

Without the drive, the amplitude decays approximately as \\(\exp(-bt/(2m))\\) when damping
is weak. With a drive, the system eventually oscillates at the **driving frequency**,
not its natural frequency. Its steady amplitude is
<br>\\[A = (F_{0}/m)/\sqrt{(\omega_0^2 - \omega_d^2)^2 + (b \omega_d/m)^2}\,\text{,}\\]<br>
where <br>\\[\omega_0 = \sqrt{k/m}\,\text{.}\\]<br>

The amplitude is largest near resonance, when the driving frequency is close to the
natural frequency. Damping limits the peak; without damping an ideal oscillator driven
exactly at its natural frequency would gain energy without bound in this mathematical
model.

<a id="topic-029-sharpness-of-resonance"></a>
### sharpness of resonance

**Sharpness of resonance** describes how narrow or broad the response peak is around
the resonant frequency. A lightly damped oscillator has a tall, narrow peak and a
sharply defined preferred frequency; a heavily damped oscillator has a lower, broader
peak.

For weak damping, let \\(\Delta \omega\\) be the bandwidth between the frequencies where
the average power is half its maximum. The quality factor is approximately
<br>\\[Q = \omega_0/\Delta \omega\,\text{.}\\]<br> Larger \\(Q\\) means sharper resonance and slower energy loss.
For the mass-spring-damper model, <br>\\[Q = m \omega_0/b\\]<br> when damping is weak.

Resonance is useful in selecting radio frequencies and in musical instruments, but
large resonant amplitudes can damage structures. Real systems have damping and their
resonance frequency can differ slightly from the undamped natural frequency.

<a id="topic-030-power-dissipation"></a>
### power dissipation

In a driven oscillator, energy supplied by the driving force is partly stored and
returned each cycle, and partly dissipated by damping. The **average power** measures
the net energy converted to heat or other irreversible forms per second.

For <br>\\[m x'' + b x' + kx = F_{0} \cos(\omega_d t)\,\text{,}\\]<br> the steady velocity has amplitude
\\(\omega_d A\\) and lags the drive by a phase \\(\delta\\). Average input power is
<br>\\[P_{\mathrm{avg}} = (1/2)F_{0} \omega_d A \sin(\delta)\,\text{.}\\]<br> Using the response amplitude, this can also be
written <br>\\[P_{\mathrm{avg}} = (1/2)b \omega_d^2 A^2\,\text{.}\\]<br> The second form shows that the power supplied
balances viscous dissipation.

Power is greatest near resonance, where velocity and driving force are most nearly in
phase. Do not confuse stored energy (joules) with power (watts = joules per second).

<a id="topic-031-quality-factor"></a>
### quality factor

The **quality factor** \\(Q\\) compares energy stored with energy lost in one cycle:
<br>\\[Q = 2 \pi x (\text{energy stored})/(\text{energy lost per cycle})\,\text{.}\\]<br> A high-\\(Q\\) oscillator loses only
a small fraction of its energy per cycle and rings for a long time. A low-\\(Q\\)
oscillator dies away quickly.

For a weakly damped mass-spring oscillator,
<br>\\[Q = m \omega_0/b = \omega_0/(2 \beta)\,\text{,}\\]<br> where <br>\\[\beta = b/(2m)\,\text{.}\\]<br> It is also approximately
\\(\omega_0/\Delta \omega\\), the resonant frequency divided by the half-power bandwidth.
These definitions agree in the weak-damping limit; at strong damping the simple
bandwidth approximation needs care.

**Example.** If <br>\\[\omega_0 = 100 \mathrm{rad\,s^{-1}}\\]<br> and the half-power bandwidth is \\(5 \mathrm{rad\,s^{-1}}\\),
<br>\\[Q \approx 20\,\text{.}\\]<br> This indicates a relatively sharp resonance.


## UNIT-III: Special Theory of Relativity (15 Lectures)

<a id="topic-032-inertial-and-non-inertial-frames"></a>
### Inertial and non-inertial frames

An **inertial frame** is one in which a body with no net force remains at rest or moves
in a straight line at constant speed. Newton's laws hold in this frame. Any frame
moving at constant velocity relative to an inertial frame is also inertial in classical
mechanics.

A frame that accelerates or rotates is **non-inertial**. In it, an object may appear
to accelerate even when no real force explains that motion in the frame. We can still
use Newton's laws if we introduce appropriate fictitious forces, such as centrifugal
force in a rotating frame or \\(-m a_{\mathrm{frame}}\\) in a linearly accelerating frame.

In special relativity, inertial frames are central: the laws of physics have the same
form in every inertial frame, and no inertial frame is privileged. Accelerated observers
can be studied too, but the simple Lorentz transformations below relate inertial frames.

<a id="topic-033-michelson-morley-experiment-and-its-outcome"></a>
### Michelson-Morley experiment and its outcome

In the late nineteenth century, physicists proposed that light travelled through an
invisible stationary medium called the **ether**. If Earth moved through it, an
experiment comparing light along and across Earth's motion should detect an “ether
wind.”

Michelson and Morley split a light beam into two perpendicular paths, reflected the
beams, and recombined them. A change in travel times would shift the interference
fringes as the apparatus rotated. The expected shift was not observed: the result was
null within experimental precision.

The experiment did not by itself prove every statement of relativity, but it strongly
challenged simple ether theories. Together with other evidence and the consistency of
electromagnetism, it motivated a new account of space and time. The lesson is not that
the apparatus detected “no light”; it detected no expected orientation-dependent
fringe shift.

<a id="topic-034-postulates-of-the-special-theory-of-relativity-and-lorentz-t"></a>
### Postulates of the special theory of relativity and Lorentz transformations

Einstein's special theory of relativity starts with two postulates:

1. The laws of physics are the same in all inertial frames.
2. The speed of light in vacuum, \\(c\\), has the same value for every inertial observer,
   independent of the motion of the source.

Consider frame \\(S'\\) moving at speed \\(v\\) along the \\(x\\) direction relative to frame \\(S\\),
with their origins coinciding at <br>\\[t = t' = 0\,\text{.}\\]<br> Define
<br>\\[\gamma = 1/\sqrt{1 - v^2/c^2}\,\text{.}\\]<br> The Lorentz transformations are
<br>\\[x' = \gamma(x - vt)\,\text{,}\\]<br> <br>\\[t' = \gamma(t - vx/c^2)\,\text{,}\\]<br> with <br>\\[y' = y\\]<br> and <br>\\[z' = z\,\text{.}\\]<br>
The inverse is obtained by replacing \\(v\\) with \\(-v\\).

Unlike Galilean transformations, time depends on both position and time. For speeds
much smaller than \\(c\\), <br>\\[\gamma \approx 1\\]<br> and \\(vx/c^2\\) is tiny, recovering the
classical approximation <br>\\[x' \approx x - vt\,\text{,}\\]<br> <br>\\[t' \approx t\,\text{.}\\]<br>

<figure class="lecture-figure">
  <img src="{{ '/images/lecture/spacetime.svg' | relative_url }}" alt="A spacetime diagram with light rays at 45 degrees, a moving observer's worldline, and differently tilted simultaneity lines for frames S and S prime">
  <figcaption>Light follows the 45-degree lines. Because moving frames have differently tilted simultaneity lines, distant events simultaneous in one frame need not be simultaneous in another.</figcaption>
</figure>

<a id="topic-035-lorentz-contraction"></a>
### Lorentz contraction

Take a rod at rest in frame \\(S'\\); its **proper length** is <br>\\[L_{0} = x_{2}' - x_{1}'\,\text{,}\\]<br> measured
at the same time in that frame. An observer in frame \\(S\\), where the rod moves along
its length at speed \\(v\\), must record both endpoints at the same \\(t\\). Applying the
inverse Lorentz transformation to the two endpoint events gives
<br>\\[L = L_{0}/\gamma = L_{0} \sqrt{1 - v^2/c^2}\,\text{.}\\]<br>

This is **length contraction**. Only the dimension parallel to the relative motion
contracts; perpendicular lengths do not. The rod is not being crushed in its own rest
frame. Different observers measure different lengths because they select
simultaneous endpoint events differently.

**Example.** At <br>\\[v = 0.6c\,\text{,}\\]<br> <br>\\[\gamma = 1.25\,\text{.}\\]<br> A rod of proper length \\(10\,\mathrm{m}\\) is measured
as \\(8\,\mathrm{m}\\) by an observer relative to whom it moves along its length.

<a id="topic-036-time-dilation"></a>
### time dilation

The **proper time** \\(\Delta \tau\\) is the time between two events measured by a clock
present at both events (so both occur at the same place in that clock's rest frame).
If the clock moves at speed \\(v\\) relative to an observer, the observer measures a
longer interval:
<br>\\[\Delta t = \gamma \Delta \tau = \Delta \tau/\sqrt{1 - v^2/c^2}\,\text{.}\\]<br>

This is time dilation. It is not a clock mechanism running badly; it is a difference
between time intervals measured in different inertial frames. It is reciprocal: each
inertial observer finds the other observer's moving clock runs slow, with no
contradiction because comparisons of distant clocks also involve relativity of
simultaneity.

**Example.** A particle's proper lifetime is \\(2 \mathrm{\mu s}\\). At <br>\\[v = 0.8c\,\text{,}\\]<br>
<br>\\[\gamma = 1/0.6 = 1.667\,\text{,}\\]<br> so an observer in the laboratory measures about
\\(3.33 \mathrm{\mu s}\\).

<a id="topic-037-simultaneity"></a>
### simultaneity

In everyday life, two distant events that happen at the same time for one observer
usually seem simultaneous for everyone. Relativity changes this because deciding
“same time” at distant places requires synchronised clocks, and different inertial
frames synchronise clocks differently.

For two events, subtracting the Lorentz time transformation gives
<br>\\[\Delta t' = \gamma(\Delta t - v \Delta x/c^2)\,\text{.}\\]<br> If <br>\\[\Delta t = 0\\]<br> but \\(\Delta x\\) is not
zero, then generally \\(\Delta t'\\) is not zero. Thus simultaneity is relative. Events at
the same place (<br>\\[\Delta x = 0\\]<br>) that are simultaneous in one frame remain simultaneous
in every inertial frame.

This effect is essential to length contraction: to measure a moving rod's length, the
observer must record its two endpoints simultaneously in their own frame. The two
endpoint events are not simultaneous in the rod's rest frame.

<a id="topic-038-order-of-events"></a>
### order of events

An **event** is specified by where and when something happens. The order of two events
can be frame-independent or frame-dependent. From the Lorentz transformation,
<br>\\[\Delta t' = \gamma(\Delta t - v \Delta x/c^2)\,\text{.}\\]<br>

If the separation is **timelike**, <br>\\[c^2 \Delta t^2 > \Delta x^2\,\text{,}\\]<br> all inertial observers
agree on which event came first; a signal travelling no faster than light could
connect them. If it is **spacelike**, <br>\\[c^2 \Delta t^2 < \Delta x^2\,\text{,}\\]<br> their order can
reverse between frames, but neither event can cause the other without faster-than-light
communication. If it is **lightlike**, <br>\\[c^2 \Delta t^2 = \Delta x^2\,\text{,}\\]<br> light can connect
the events and all observers agree on the light-speed causal relation.

This causal structure prevents relativity from allowing an effect to precede its cause.
The interval \\(c^2 \Delta t^2 - \Delta x^2\\) is invariant under Lorentz transformations.

<a id="topic-039-relativistic-addition-of-velocities"></a>
### Relativistic addition of velocities

Velocity must transform consistently with the Lorentz transformations. If an object
moves at speed \\(u\\) along \\(x\\) in frame \\(S\\), and frame \\(S'\\) moves at speed \\(v\\) in the
same direction, differentiating \\(x'\\) and \\(t'\\) gives
<br>\\[u' = (u - v)/(1 - uv/c^2)\,\text{.}\\]<br> For velocities in opposite directions, keep signs
consistent; the inverse formula is <br>\\[u = (u' + v)/(1 + u'v/c^2)\,\text{.}\\]<br>

This rule guarantees that combining two speeds less than \\(c\\) never produces a speed
greater than \\(c\\). For example, two same-direction speeds of \\(0.8c\\) and \\(0.8c\\) combine
to <br>\\[(1.6c)/(1 + 0.64) \approx 0.976c\,\text{,}\\]<br> not \\(1.6c\\).

When both speeds are much less than \\(c\\), the denominator is nearly one and ordinary
addition or subtraction is recovered. The simple formula is for motion along one
straight line; perpendicular velocity components require the full transformation.

<a id="topic-040-variation-of-mass-with-velocity"></a>
### variation of mass with velocity

Older textbooks sometimes describe a “relativistic mass”
<br>\\[m_{\mathrm{rel}} = \gamma m_{0}\,\text{,}\\]<br> which increases with speed. Modern treatments usually keep
**invariant (rest) mass** \\(m_{0}\\) constant and say that momentum and energy increase:
<br>\\[p = \gamma m_{0} v\\]<br> and <br>\\[E = \gamma m_{0} c^2\,\text{.}\\]<br> Here
<br>\\[\gamma = 1/\sqrt{1 - v^2/c^2}\,\text{.}\\]<br>

At low speed, <br>\\[\gamma \approx 1 + v^2/(2c^2)\,\text{.}\\]<br> Therefore
<br>\\[E \approx m_{0} c^2 + (1/2)m_{0} v^2\,\text{:}\\]<br> rest energy plus familiar Newtonian kinetic
energy. This limit explains why classical mechanics works so well at ordinary speeds.
As \\(v\\) approaches \\(c\\), \\(\gamma\\) grows without bound, so accelerating an object with
nonzero rest mass to light speed would require unlimited energy.

The phrase “mass increases with velocity” refers to the older relativistic-mass
convention, not a change in an object's invariant mass. State which convention is used
when reading older sources.

<a id="topic-041-massless-particles"></a>
### massless particles

Photons are particles of light. In modern physics a photon has zero invariant mass but
nonzero energy and momentum. The relativistic energy-momentum relation is
<br>\\[E^2 = p^2 c^2 + m_{0}^2 c^4\,\text{.}\\]<br> For a photon (<br>\\[m_{0} = 0\\]<br>), this reduces to <br>\\[E = pc\,\text{.}\\]<br>

A photon cannot be at rest: in vacuum it travels at speed \\(c\\). Its energy is
<br>\\[E = h f\,\text{,}\\]<br> where \\(h\\) is Planck's constant and \\(f\\) is frequency; its momentum is
<br>\\[p = h f/c = h/\lambda\,\text{.}\\]<br> Zero rest mass does not mean zero energy or zero gravitational
effects. Light can transfer momentum, exert radiation pressure, and be deflected by
gravity.

Massless particles follow lightlike paths in spacetime. They are distinct from
massive particles, whose speed is always less than \\(c\\) in every inertial frame.

<a id="topic-042-mass-energy-equivalence"></a>
### mass-energy equivalence

The energy of a body at rest is <br>\\[E_{0} = m_{0} c^2\,\text{.}\\]<br> A change in mass \\(\Delta m\\) corresponds
to a change in rest energy <br>\\[\Delta E = \Delta m c^2\,\text{.}\\]<br> This is **mass-energy
equivalence**, not a rule that all an object's mass can automatically be converted
into useful energy.

For a moving object, total energy is <br>\\[E = \gamma m_{0} c^2\,\text{;}\\]<br> kinetic energy is
<br>\\[K = (\gamma - 1)m_{0} c^2\,\text{.}\\]<br> At low speed this becomes <br>\\[K \approx (1/2)m_{0} v^2\,\text{.}\\]<br>
In nuclear reactions, the products can have a slightly smaller total rest mass than
the reactants; the difference appears as kinetic energy and radiation.

**Scale check.** One gram of mass corresponds to \\(0.001 \times (3 \times 10^8)^2 =
9 \times 10^13 J\\) of rest energy. The large value comes from squaring the speed of light.
In an isolated system, total energy and momentum are conserved together.

<a id="topic-043-relativistic-doppler-effect"></a>
### Relativistic Doppler effect

The **relativistic Doppler effect** is the change in observed light frequency caused
by relative motion along the line of sight. Let \\(f_{0}\\) be the frequency measured in the
source's rest frame and <br>\\[\beta = v/c\,\text{,}\\]<br> with <br>\\[v > 0\\]<br> denoting recession. For recession,
<br>\\[f_{\mathrm{obs}} = f_{0} \sqrt{(1 - \beta)/(1 + \beta)}\,\text{;}\\]<br> for approach, the frequency is increased:
<br>\\[f_{\mathrm{obs}} = f_{0} \sqrt{(1 + \beta)/(1 - \beta)}\,\text{.}\\]<br>

For small speeds, the fractional shift is approximately <br>\\[\Delta f/f_{0} = -v/c\\]<br> for a
receding source and \\(+v/c\\) for an approaching source. Redshift means lower observed
frequency (longer wavelength); blueshift means higher frequency (shorter wavelength).

**Example.** For a receding source at \\(0.1c\\),
<br>\\[f_{\mathrm{obs}}/f_{0} = \sqrt{0.9/1.1} \approx 0.905\,\text{:}\\]<br> the observed frequency is about
9.5% lower. These formulas assume motion directly toward or away from the observer;
transverse motion also has a relativistic Doppler shift.


## Further reading

These notes are original explanations written for self-study. For complementary
background on classical dynamics and relativity, see Richard Feynman's *The Feynman
Lectures on Physics*, especially [Volume I, Chapter 9: Newton's Laws of Dynamics](https://www.feynmanlectures.caltech.edu/I_09.html)
and [Volume I, Chapter 17: Space-Time](https://www.feynmanlectures.caltech.edu/I_17.html).
The [Feynman Lectures website](https://www.feynmanlectures.caltech.edu/) provides the
complete online collection.
