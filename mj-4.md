---
layout: default
title: "MJ-4: Waves and Optics | Dr. Indrajeet Kumar"
heading: "MJ-4: Waves and Optics"
kicker: "MJ-4 LECTURE NOTES"
subtitle: "Waves and Optics"
permalink: /mj-4/
---

These notes introduce mechanical and electromagnetic waves, geometrical optics,
interference, diffraction, and polarization from first principles. Angles are small
where a paraxial approximation is stated; otherwise use the exact geometry. Equations
are displayed separately so that each symbol and assumption can be read clearly.


## UNIT-I: Wave Basics (15 Lectures)

<a id="topic-001-plane-and-spherical-waves-longitudinal-and-transverse-waves"></a>
### Plane and spherical waves; longitudinal and transverse waves; progressive waves and the wave equation

A wave is a traveling disturbance that transfers energy and momentum without
transporting matter overall. A **plane wave** has parallel wavefronts; a
**spherical wave** spreads from a point source. In a longitudinal wave, particles
oscillate along the direction of travel; in a transverse wave, they oscillate
perpendicular to it. A progressive one-dimensional harmonic wave traveling in the
positive \\(x\\)-direction can be written
<br>\\[y(x,t)=A\cos(kx-\omega t+\phi)\\]<br>
Here \\(A\\) is amplitude, <br>\\[k=\frac{2\pi}{\lambda}\\]<br> is wave number,
<br>\\[\omega=2\pi f\\]<br> is angular frequency, and \\(\phi\\) is phase. Its speed is
<br>\\[v=f\lambda=\frac{\omega}{k}\,\text{.}\\]<br> For small transverse vibrations of a uniform string,
<br>\\[\frac{\partial^2 y}{\partial t^2}=v^2\frac{\partial^2y}{\partial x^2}\\]<br>
A spherical wave has approximately
<br>\\[\psi(r,t)=\frac{A_0}{r}\cos(kr-\omega t+\phi)\\]<br>
far from its source in three dimensions; its amplitude falls as distance grows.

<a id="topic-002-particle-and-wave-velocities"></a>
### Particle and wave velocities

The **wave velocity** is the speed at which a phase point travels; the **particle
velocity** is the instantaneous motion of the medium. For
<br>\\[y=A\cos(kx-\omega t)\,\text{,}\\]<br> particle velocity is
<br>\\[v_y=\frac{\partial y}{\partial t}=\omega A\sin(kx-\omega t)\\]<br>
while phase speed is <br>\\[v_p=\frac{\omega}{k}\,\text{.}\\]<br> They are different quantities and usually
have different units: particle velocity is displacement per time; phase speed is
distance per time. A point on a string oscillates about equilibrium even as the
wave pattern travels along it.

<a id="topic-003-linearity"></a>
### linearity

The wave equation is linear: if \\(y_1\\) and \\(y_2\\) are solutions, then any
weighted sum is also a solution:
<br>\\[y=a y_1+b y_2\\]<br>
This follows because the equation contains the field and its derivatives only to the
first power. Linearity is an approximation for small disturbances in ordinary
elastic media. At large amplitudes, nonlinear effects can alter speed, generate
harmonics, and make waves interact.

<a id="topic-004-superposition"></a>
### superposition

The **principle of superposition** says that overlapping linear waves add their
displacements. If two waves meet, the resultant displacement is their algebraic
sum; after crossing, each continues approximately unchanged. Constructive
interference occurs when phases reinforce, and destructive interference when they
oppose. Energy does not disappear during destructive interference; it is
redistributed in space.

<a id="topic-005-superposition-of-collinear-oscillations-with-equal-or-differ"></a>
### Superposition of collinear oscillations with equal or different frequencies; beats and Lissajous figures

For equal-frequency oscillations along the same line,
<br>\\[x_1=A_1\cos\omega t,\qquad x_2=A_2\cos(\omega t+\delta)\\]<br>
the sum is one oscillation at frequency \\(\omega\\), with amplitude
<br>\\[A=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\delta}\\]<br>
For equal amplitudes and nearby angular frequencies, the sum produces beats:
<br>\\[x=2A\cos\left(\frac{\omega_1-\omega_2}{2}t\right)\cos\left(\frac{\omega_1+\omega_2}{2}t\right)\\]<br>
The loudness envelope varies at beat frequency <br>\\[f_b=|f_1-f_2|\,\text{.}\\]<br> Perpendicular
oscillations at related frequencies trace **Lissajous figures** on an oscilloscope;
their shapes reveal frequency ratios and phase differences. For equal frequencies
and equal amplitudes, changing the phase changes a line into an ellipse or circle.

<a id="topic-006-standing-waves-on-strings-with-fixed-and-free-ends-phase-and"></a>
### Standing waves on strings with fixed and free ends; phase and group velocities

Two equal waves traveling in opposite directions form a standing wave. On a string
of length \\(L\\) fixed at both ends,
<br>\\[y(x,t)=2A\sin(kx)\cos(\omega t)\\]<br>
Nodes remain still and adjacent nodes are separated by \\(\frac{\lambda}{2}\\). Allowed
frequencies are <br>\\[f_n=\frac{nv}{2L}\,\text{.}\\]<br> A free end has zero transverse force, so it is
a displacement antinode; a fixed end is a displacement node. **Phase velocity**
tracks a constant phase, <br>\\[v_p=\frac{\omega}{k}\,\text{.}\\]<br> **Group velocity** tracks a narrow
wave packet, <br>\\[v_g=\frac{d\omega}{dk}\,\text{,}\\]<br> and in many media is the velocity of energy
transport. In a nondispersive string, phase and group speeds are equal.

<a id="topic-007-energy-and-energy-transfer-in-a-vibrating-string"></a>
### Energy and energy transfer in a vibrating string

A vibrating string stores kinetic energy as its elements move and elastic potential
energy as it bends and stretches. For a small-slope transverse wave, the mean
power carried along a string of tension \\(\mathcal T\\) is
<br>\\[P_{\mathrm{avg}}=\frac{1}{2}\mu\omega^2 A^2v\\]<br>
where \\(\mu\\) is mass per unit length. The result shows that power increases with
the square of amplitude and frequency. Energy travels with the wave; string
elements mainly oscillate about their equilibrium positions.

<a id="topic-008-electromagnetic-nature-of-light"></a>
### Electromagnetic nature of light

Light is an electromagnetic wave. In vacuum, changing electric and magnetic fields
sustain one another and propagate at
<br>\\[c=\frac{1}{\sqrt{\mu_0\epsilon_0}}\\]<br>
The fields are transverse to the direction of propagation and to each other.
<figure class="lecture-figure">
  <img src="{{ '/images/lecture/em-wave.svg' | relative_url }}" alt="Electromagnetic wave traveling along x with transverse electric and magnetic field oscillations">
  <figcaption>The electric field, magnetic field, and propagation direction are mutually perpendicular.</figcaption>
</figure>
In a simple transparent medium with refractive index \\(n\\), the phase speed is
<br>\\[v=\frac{c}{n}\,\text{.}\\]<br> Light carries energy and momentum; its electric field drives most
optical interactions with matter.

<a id="topic-009-wavefronts"></a>
### wavefronts

A **wavefront** is a surface on which the phase is constant. Rays indicate the
direction of propagation and are perpendicular to wavefronts in an isotropic
medium. A point source produces spherical wavefronts; a distant source produces
nearly plane wavefronts. Wavefront geometry helps explain reflection, refraction,
and diffraction.

<a id="topic-010-huygens-principle"></a>
### Huygens' principle

Huygens' principle treats every point on a wavefront as a source of secondary
wavelets. The later wavefront is the common forward envelope of these wavelets.
It predicts straight-line propagation in uniform media and, with boundary
construction, reflection and refraction. Diffraction occurs because wavelets spread
into regions geometrical rays would leave dark. The wavelet idea must be combined
with phase and amplitude addition to calculate detailed intensities.

<a id="topic-011-coherence"></a>
### coherence

Two sources are **coherent** if their phase difference remains constant over the
observation time. Stable interference requires coherence and overlapping waves.
Monochromatic light has a long coherence time; a broad spectrum generally has a
shorter one. Temporal coherence describes phase stability over time; spatial
coherence describes phase correlation across different parts of a wavefront.
Interference fringes disappear if the path difference exceeds the coherence length.

<a id="topic-012-fermat-s-principle"></a>
### Fermat's principle

Fermat's principle states that a light ray follows a path for which the optical
travel time is stationary to small path changes. Optical path length is
<br>\\[\mathrm{OPL}=\int n\,ds\\]<br>
In a uniform medium, this gives a straight path. At an interface, minimizing travel
time gives Snell's law. "Stationary" does not always mean the absolute shortest
path; it means the first-order change in travel time vanishes.

<a id="topic-013-lens-and-mirror-formulae"></a>
### Lens and mirror formulae

For paraxial rays, a thin lens in air obeys the lens-maker relation
<br>\\[\frac{1}{f}=(n-1)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)\\]<br>
and the thin-lens imaging equation (using the real-is-positive convention)
<br>\\[\frac{1}{f}=\frac{1}{u}+\frac{1}{v}\\]<br>
For a spherical mirror, with the corresponding Cartesian sign convention,
<br>\\[\frac{1}{f}=\frac{1}{u}+\frac{1}{v},\qquad f=\frac{R}{2}\\]<br>
Magnification is <br>\\[m=-\frac{v}{u}\\]<br> for a thin lens or mirror under this convention.
Always state the sign convention before substituting distances; mixing conventions
is a common source of wrong signs.

<a id="topic-014-laws-of-reflection-and-refraction"></a>
### laws of reflection and refraction

Reflection keeps the ray in the incident medium; the angle of reflection equals
the angle of incidence, measured from the normal. Refraction changes direction
because light speed changes at a boundary. Snell's law is
<br>\\[n_1\sin\theta_1=n_2\sin\theta_2\\]<br>
When light travels from a higher-index to a lower-index medium, total internal
reflection occurs above the critical angle
<br>\\[\sin\theta_c=\frac{n_2}{n_1}\,\text{.}\\]<br> At normal incidence the ray changes speed and
wavelength but not direction or frequency.

<a id="topic-015-cardinal-points"></a>
### cardinal points

The **cardinal points** summarize paraxial imaging by a thick lens or optical
system: two focal points, two principal points, and two nodal points. Parallel
incoming rays converge to the image focal point; rays aimed at the object focal
point emerge parallel. The principal planes let a thick system be treated like
a thin lens for first-order imaging, with object and image distances measured from
the appropriate principal planes. In the same surrounding medium, nodal rays
emerge with the same direction they entered.

## UNIT-II: Interference and Diffraction (20 Lectures)

<a id="topic-016-interference-by-division-of-amplitude-and-wavefront-thin-fil"></a>
### Interference by division of amplitude and wavefront; thin films and Haidinger and Fizeau fringes

Interference occurs when coherent waves overlap. **Division of wavefront** splits
different portions of one wavefront and brings them together (Young's double slit);
**division of amplitude** splits one beam by partial reflection and later recombines
it (thin films and interferometers). For two beams with intensities \\(I_1,I_2\\)
and phase difference \\(\delta\\),
<br>\\[I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta\\]<br>
<figure class="lecture-figure">
  <img src="{{ '/images/lecture/double-slit.svg' | relative_url }}" alt="Two coherent slits emit overlapping wavelets that form bright and dark fringes on a screen">
  <figcaption>Alternating fringes occur because the path difference changes across the screen.</figcaption>
</figure>
In a thin film, the two reflected rays acquire an optical path difference and may
also acquire a phase reversal at reflection. **Haidinger fringes** are equal-
inclination fringes, typically circular for plane-parallel surfaces. **Fizeau
fringes** are equal-thickness fringes, localized near a wedge or film whose
thickness varies across the field. Determine reflection phase changes before
assigning bright and dark conditions.

<a id="topic-017-newton-s-rings-for-measuring-wavelength-and-refractive-index"></a>
### Newton's rings for measuring wavelength and refractive index

Newton's rings are concentric interference fringes formed by a thin film between
a plano-convex lens and a flat plate. For a lens of radius of curvature \\(R\\),
the film thickness at radius \\(r\\) is approximately <br>\\[t=\frac{r^2}{2R}\,\text{.}\\]<br> In
reflected light with one phase reversal, dark-ring radii satisfy
<br>\\[r_m^2=m\lambda R\\]<br>
For diameters <br>\\[D_m=2r_m\,\text{,}\\]<br>
<br>\\[D_m^2=4m\lambda R\\]<br>
The central spot is dark in reflected light. Measuring the difference of squared
diameters reduces zero-setting errors:
<br>\\[\lambda=\frac{D_{m+p}^2-D_m^2}{4pR}\\]<br>
If a liquid of refractive index \\(n\\) fills the gap, the ring diameters contract;
comparing the same order in air and liquid gives
<br>\\[n=\frac{D_{\mathrm{air}}^2}{D_{\mathrm{liquid}}^2}\\]<br>

<a id="topic-018-michelson-interferometer-and-michelson-morley-experiment-wav"></a>
### Michelson interferometer and Michelson-Morley experiment; wavelength

A Michelson interferometer divides a beam into two perpendicular arms, reflects
them, and recombines the beams. Moving one mirror by \\(d\\) changes the round-trip
path by \\(2d\\), so the number of fringes crossing a reference point is
<br>\\[N=\frac{2d}{\lambda}\\]<br>
Thus wavelength can be measured from mirror displacement and fringe count.
The Michelson-Morley experiment compared light travel times in perpendicular arms
as the apparatus rotated. Its expected fringe shift from motion through a
hypothetical stationary ether was not observed; the null result helped motivate
the modern theory of relativity. It did not show that light has no wave properties.

<a id="topic-019-wavelength-difference"></a>
### wavelength difference

Two close wavelengths \\(\lambda_1,\lambda_2\\) produce slowly moving visibility
envelopes as their fringes drift relative to one another. A common-path interferometer
can count the number \\(N\\) of visibility recurrences as a mirror moves through
distance \\(d\\). The associated path change is \\(2d\\), approximately the beat
length, so
<br>\\[|\lambda_1-\lambda_2|\approx\frac{\lambda_1\lambda_2}{2dN}\\]<br>
For close wavelengths near mean \\(\bar\lambda\\), this is approximately
\\(\frac{\bar\lambda^2}{2dN}\\). Exact instrument formulas depend on the motion and
counting convention; the measured beat length must correspond to the same optical
path change in both arms.

<a id="topic-020-refractive-index"></a>
### refractive index

A medium changes optical path because light travels more slowly in it. If inserting
a plate of thickness \\(t\\) and refractive index \\(n\\) into one interferometer
arm causes \\(N\\) fringes to pass, the extra optical path is \\((n-1)t\\):
<br>\\[N\lambda=(n-1)t\\]<br>
Therefore
<br>\\[n=1+\frac{N\lambda}{t}\\]<br>
The relation assumes normal incidence and a known fringe count. For oblique
incidence, account for the angle within the plate.

<a id="topic-021-fringe-visibility"></a>
### fringe visibility

Fringe **visibility** measures contrast between bright and dark fringes:
<br>\\[\mathcal V=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}\\]<br>
For two perfectly coherent beams,
<br>\\[\mathcal V=\frac{2\sqrt{I_1I_2}}{I_1+I_2}\\]<br>
Visibility is largest when intensities are equal and coherence is high. Unequal
beam intensities, polarization mismatch, spectral bandwidth, vibration, or poor
spatial overlap reduce the contrast.

<a id="topic-022-fabry-perot-interferometer"></a>
### Fabry-Perot interferometer

A Fabry-Perot interferometer uses two parallel partially reflecting surfaces.
Multiple reflected beams interfere. For plate spacing \\(d\\), refractive index
\\(n\\), and internal angle \\(\theta\\), successive transmitted beams differ in
phase by \\(2kn d\cos\theta\\), where <br>\\[k=\frac{2\pi}{\lambda}\,\text{.}\\]<br> Transmission maxima
occur when
<br>\\[2nd\cos\theta=m\lambda\\]<br>
High reflectivity gives narrow, sharp transmission peaks and high resolving power.
The free spectral range is the frequency spacing of successive orders; resolving
power depends on finesse and the number of effective interfering beams.

<a id="topic-023-fresnel-half-period-zones"></a>
### Fresnel half-period zones

For a point source and observation point separated by distance \\(r_1\\) and
\\(r_2\\) from an aperture plane, regions with successive path differences of
\\(\frac{\lambda}{2}\\) are Fresnel half-period zones. Neighboring zones contribute with
nearly opposite phase, so their amplitudes partially cancel. The radius of the
\\(m\\)-th zone for a plane wave and an observation point a distance \\(z\\) away,
when \\(r_m\ll z\\), is approximately
<br>\\[r_m^2\approx m\lambda z\\]<br>
This construction explains why an unobstructed wave can propagate in straight
lines approximately while still diffracting around edges.

<a id="topic-024-rectilinear-propagation"></a>
### rectilinear propagation

Geometrical optics treats light as rays traveling in straight lines in a uniform
medium. This approximation works when apertures and obstacles are large compared
with the wavelength. Fresnel zones show why: contributions from many zones largely
cancel except near boundaries. When dimensions are comparable to wavelength,
diffraction becomes important and ray-only predictions fail.

<a id="topic-025-zone-plates"></a>
### zone plates

A zone plate focuses light by alternately transmitting and blocking Fresnel
half-period zones so transmitted contributions add constructively. For a plane
wave and focal length \\(f\\), the boundary radius of zone \\(m\\) approximately
satisfies
<br>\\[r_m^2=m\lambda f\\]<br>
The plate has multiple foci because phase addition repeats at other axial positions.
Unlike a conventional lens, it focuses by diffraction rather than refraction and
can therefore be designed for wavelengths where ordinary lenses are difficult.

<a id="topic-026-fresnel-integrals-and-diffraction-by-a-straight-edge"></a>
### Fresnel integrals and diffraction by a straight edge

Near an aperture edge, observation distance is not large enough to neglect wavefront
curvature. **Fresnel diffraction** accounts for this curvature by summing complex
amplitudes across the aperture. The standard Fresnel integrals are
<br>\\[C(u)=\int_0^u\cos\left(\frac{\pi t^2}{2}\right)dt,\qquad S(u)=\int_0^u\sin\left(\frac{\pi t^2}{2}\right)dt\\]<br>
For a straight edge, intensity varies smoothly across the geometric shadow
boundary; it is not an abrupt light-dark step. The detailed curve depends on the
dimensionless distance parameter and wavelength. This is a near-field phenomenon,
in contrast to the Fraunhofer far-field pattern.

<a id="topic-027-slit"></a>
### slit

For a long slit of width \\(a\\), Fraunhofer diffraction has amplitude proportional
to \\(\frac{\sin\beta}{\beta}\\), where <br>\\[\beta=\frac{\pi a\sin\theta}{\lambda}\,\text{.}\\]<br> The intensity is
<br>\\[I(\theta)=I_0\left(\frac{\sin\beta}{\beta}\right)^2\\]<br>
Dark minima occur at
<br>\\[a\sin\theta=m\lambda,\qquad m=\pm1,\pm2,\ldots\\]<br>
The central maximum is twice as wide as each adjacent secondary maximum. A narrower
slit produces a wider diffraction pattern.

<a id="topic-028-wire"></a>
### wire

Babinet's principle states that complementary opaque and transparent patterns have
the same diffraction intensity away from the undeviated beam. Therefore a thin wire
of diameter \\(d\\) produces the same fringe spacings as a slit of width \\(d\\):
<br>\\[d\sin\theta=m\lambda\\]<br>
This provides a way to measure a small wire diameter from its diffraction pattern.
The approximation assumes a far-field observation and a sufficiently long,
uniform wire.

<a id="topic-029-fraunhofer-diffraction-by-single-and-double-slits"></a>
### Fraunhofer diffraction by single and double slits

Fraunhofer diffraction is the far-field limit, or the pattern formed using lenses
so incident and observed waves are effectively plane. A single slit gives the
\\(\operatorname{sinc}^2\\) envelope described above. Two narrow slits separated
by distance \\(d\\) produce interference maxima at
<br>\\[d\sin\theta=m\lambda\\]<br>
If each slit has finite width \\(a\\), the two-slit fringes are modulated by the
single-slit envelope:
<br>\\[I(\theta)=I_{\max}\left(\frac{\sin\beta}{\beta}\right)^2\cos^2\delta,\qquad \delta=\frac{\pi d\sin\theta}{\lambda}\\]<br>
Some interference orders are missing when an interference maximum coincides with
a single-slit minimum.

<a id="topic-030-circular-apertures"></a>
### circular apertures

A circular aperture produces an Airy diffraction pattern. For aperture diameter
\\(D\\), the first dark ring is at the small angle
<br>\\[\theta\approx1.22\frac{\lambda}{D}\\]<br>
The central bright disk is the Airy disk. Its finite size limits the resolution
of telescopes and cameras even with perfect lenses. Increasing aperture diameter
or decreasing wavelength narrows the central maximum.

<a id="topic-031-multiple-slits"></a>
### multiple slits

For \\(N\\) equally spaced narrow slits with separation \\(d\\), principal
interference maxima occur at <br>\\[d\sin\theta=m\lambda\,\text{.}\\]<br> The interference factor
is
<br>\\[I(\theta)\propto\left(\frac{\sin(N\delta)}{\sin\delta}\right)^2,\qquad \delta=\frac{\pi d\sin\theta}{\lambda}\\]<br>
As slit number increases, principal maxima become narrower and brighter, with weak
secondary maxima between them. A finite slit width adds the single-slit envelope.
This is the basis of a diffraction grating.

<a id="topic-032-resolving-power-of-telescopes-and-gratings-gratings-as-sourc"></a>
### Resolving power of telescopes and gratings; gratings as sources of monochromatic light

The **Rayleigh criterion** for a circular telescope aperture says two point sources
are just resolved when their angular separation is approximately
<br>\\[\theta_{\min}=1.22\frac{\lambda}{D}\\]<br>
A grating's resolving power is
<br>\\[\mathcal R=\frac{\lambda}{\Delta\lambda}=mN\\]<br>
where \\(m\\) is spectral order and \\(N\\) is the number of illuminated grooves.
More grooves and higher usable order improve wavelength discrimination. A grating
selects wavelengths by constructive interference; a narrow isolated spectral line
can be selected with a slit and used as approximately monochromatic light.

## UNIT-III: Polarization (10 Lectures)

<a id="topic-033-polarization-by-reflection-and-brewster-s-law-double-refract"></a>
### Polarization by reflection and Brewster's law; double refraction and Nicol prism

Polarization describes the direction in which the electric field of a transverse
light wave oscillates. Unpolarized light has rapidly varying transverse directions;
a polarizer selects one component. At the **Brewster angle**, reflected light is
fully plane-polarized for an ideal dielectric interface:
<br>\\[\tan\theta_B=\frac{n_2}{n_1}\\]<br>
The reflected and refracted rays are then perpendicular. In a birefringent crystal,
an incident beam can split into ordinary and extraordinary rays with different
refractive indices. A Nicol prism uses calcite and a cemented interface to transmit
one polarized ray and remove the other by total internal reflection.

<a id="topic-034-ordinary-and-extraordinary-refractive-indices-half-wave-and"></a>
### Ordinary and extraordinary refractive indices; half-wave and quarter-wave plates; Babinet compensator

In a uniaxial crystal, the ordinary index \\(n_o\\) is direction-independent; the
extraordinary index \\(n_e\\) depends on propagation direction relative to the optic
axis. A **wave plate** uses the resulting phase delay between two orthogonal
components. A plate of thickness \\(d\\) introduces retardance
<br>\\[\delta=\frac{2\pi}{\lambda}(n_e-n_o)d\\]<br>
A half-wave plate has <br>\\[\delta=\pi\\]<br> and rotates linear polarization by twice
the angle between the incident polarization and its principal axis. A quarter-wave
plate has <br>\\[\delta=\frac{\pi}{2}\\]<br> and can convert linear to circular polarization when
the input is at 45 degrees to its axes. A Babinet compensator uses adjustable
oppositely oriented birefringent wedges to vary retardance continuously.

<a id="topic-035-linear"></a>
### Linear

In linearly polarized light, the electric field oscillates along one fixed transverse
direction. Two perpendicular components with the same frequency and phase difference
\\(0\\) or \\(\pi\\) combine to give a straight-line tip trajectory. A polarizer
transmits the component along its transmission axis. Malus' law gives transmitted
intensity for polarized input:
<br>\\[I=I_0\cos^2\theta\\]<br>
where \\(\theta\\) is the angle between the incident polarization and analyzer axis.

<a id="topic-036-circular"></a>
### circular

Circular polarization is produced by two perpendicular components of equal
amplitude with phase difference \\(\pm\frac{\pi}{2}\\). The electric-field tip rotates
with constant magnitude. The sign determines the handedness, which must be defined
relative to the direction of propagation. A quarter-wave plate converts linear
polarization at 45 degrees to one of its axes into circular polarization; reversing
the input angle or plate orientation reverses the handedness.

<a id="topic-037-elliptical-polarization-production-and-detection"></a>
### elliptical polarization: production and detection

In general, perpendicular components of different amplitudes or arbitrary phase
difference produce **elliptical polarization**. Linear and circular states are
special cases of the ellipse. A quarter-wave plate followed by a rotating analyzer
can diagnose the state: choose the plate orientation to convert an elliptical state
to linear, then find extinction with the analyzer. Circular polarization has no
extinction angle through a lone ideal rotating linear analyzer; its transmitted
intensity remains one-half of the incident value.

<a id="topic-038-optical-activity"></a>
### Optical activity

Optically active materials rotate the plane of linearly polarized light. The
rotation in a uniform sample is approximately
<br>\\[\theta=\alpha_{\mathrm{sp}}\,l\\]<br>
where \\(l\\) is path length and \\(\alpha_{\mathrm{sp}}\\) is the specific
rotation, which depends on wavelength, temperature, concentration, and material.
For solutions, rotation is also proportional to concentration under dilute
conditions. Optical activity arises because left- and right-circularly polarized
components travel at slightly different phase speeds; their recombination yields a
rotated linear polarization.

## Further study

These notes are original explanations prepared for this syllabus. For supplementary
reading and alternative derivations:

- [The Feynman Lectures on Physics, Volume II](https://www.feynmanlectures.caltech.edu/II_toc.html) — electricity, magnetism, and electromagnetic waves.
- [The Feynman Lectures on Physics, Volume I](https://www.feynmanlectures.caltech.edu/I_toc.html) — oscillations, waves, and introductory optics.
- [IGNOU eGyanKosh](https://egyankosh.ac.in/) — search for *Waves and Optics*, *Optics*, or the relevant syllabus topics.
