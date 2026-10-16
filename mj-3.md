---
layout: default
title: "MJ-3: Electricity and Magnetism | Dr. Indrajeet Kumar"
heading: "MJ-3: Electricity and Magnetism"
kicker: "MJ-3 LECTURE NOTES"
subtitle: "Electricity and Magnetism"
permalink: /mj-3/
---

These notes build the ideas of electricity and magnetism from charge, fields, and
energy to induction and practical circuits. Symbols use SI units unless stated
otherwise. Every formula is accompanied by the physical conditions under which it
applies.


## UNIT-I: Electric Field and Electric Potential (15 Lectures)

<a id="topic-001-electric-flux-and-gauss-law-in-integral-and-differential-for"></a>
### Electric flux and Gauss' law in integral and differential forms and applications

An electric field \\(\mathbf E\\) describes the force per unit positive test charge.
Electric **flux** through a surface measures how much field passes through it:
<br>\\[\Phi_E=\iint_S\mathbf E\cdot d\mathbf A\\]<br>
The vector area element points along the chosen surface normal. For a closed surface,
the normal is outward. Gauss' law says the net outward flux equals enclosed charge
divided by the permittivity of free space:
<br>\\[\iint_S\mathbf E\cdot d\mathbf A=\frac{Q_{\mathrm{enc}}}{\epsilon_0}\\]<br>
In differential form,
<br>\\[\nabla\cdot\mathbf E=\frac{\rho}{\epsilon_0}\\]<br>
where \\(\rho\\) is volume charge density. The differential form applies locally;
the integral form is often easier when symmetry is high. For a point charge \\(q\\),
spherical symmetry gives <br>\\[E(4\pi r^2)=\frac{q}{\epsilon_0}\,\text{,}\\]<br> hence
<br>\\[\mathbf E=\frac{q}{4\pi\epsilon_0r^2}\hat{\mathbf r}\\]<br>
For an infinite uniformly charged plane with surface density \\(\sigma\\), a
pillbox Gaussian surface gives field magnitude \\(\frac{\sigma}{2\epsilon_0}\\) on each
side. Gauss' law always holds, but it is most useful for calculating a field when
symmetry makes the field constant on parts of a Gaussian surface.

<a id="topic-002-conservative-electrostatic-fields-laplace-s-and-poisson-s-eq"></a>
### Conservative electrostatic fields; Laplace's and Poisson's equations; uniqueness theorem

In electrostatics, charges are stationary and the electric field is conservative:
the work around any closed path is zero. Therefore a scalar potential \\(V\\) can
describe the field:
<br>\\[\mathbf E=-\nabla V\\]<br>
Since the curl of a gradient vanishes, <br>\\[\nabla\times\mathbf E=0\,\text{.}\\]<br> Combining
this with Gauss' law gives Poisson's equation:
<br>\\[\nabla^2 V=-\frac{\rho}{\epsilon_0}\\]<br>
In a charge-free region, <br>\\[\rho=0\,\text{,}\\]<br> and the equation becomes Laplace's equation:
<br>\\[\nabla^2 V=0\\]<br>
The **uniqueness theorem** states that a solution of Poisson's or Laplace's equation
is uniquely determined inside a region once the potential is specified on its
boundary (with the usual regularity assumptions). Thus any function satisfying the
equation and boundary values is the physical solution. This justifies methods such
as images, separation of variables, and numerical relaxation without separately
reconstructing every charge.

<a id="topic-003-electric-field-and-potential-of-electric-dipoles-and-quadrup"></a>
### Electric field and potential of electric dipoles and quadrupoles

A dipole consists of charges \\(+q\\) and \\(-q\\) separated by displacement
\\(\mathbf d\\). Its dipole moment points from negative to positive charge:
<br>\\[\mathbf p=q\mathbf d\\]<br>
At distances much greater than the separation, its potential is approximately
<br>\\[V(\mathbf r)=\frac{1}{4\pi\epsilon_0}\frac{\mathbf p\cdot\hat{\mathbf r}}{r^2}\\]<br>
<figure class="lecture-figure">
  <img src="{{ '/images/lecture/electric-dipole.svg' | relative_url }}" alt="Electric dipole with field lines directed from positive to negative charge and dipole moment directed from negative to positive">
  <figcaption>The dipole moment points from negative to positive charge, opposite to the direction of the field lines.</figcaption>
</figure>
and its field is
<br>\\[\mathbf E(\mathbf r)=\frac{1}{4\pi\epsilon_0r^3}\left[3(\mathbf p\cdot\hat{\mathbf r})\hat{\mathbf r}-\mathbf p\right]\\]<br>
These are far-field expressions; close to the charges, use Coulomb's law and
superposition. In a uniform field, a dipole experiences torque
<br>\\[\boldsymbol{\tau}=\mathbf p\times\mathbf E\\]<br> and potential energy
<br>\\[U=-\mathbf p\cdot\mathbf E\,\text{.}\\]<br> A quadrupole is the next term in a multipole
description after the net charge and dipole moment. It describes distributions whose
net charge and dipole moment both vanish. Its far field falls faster with distance
than a dipole's. The exact numerical quadrupole formula depends on the tensor
convention; the key idea is the systematic far-field expansion of a localized
charge distribution.

<a id="topic-004-conductors-in-electrostatic-fields"></a>
### Conductors in electrostatic fields

In electrostatic equilibrium, mobile charges in a conductor have finished moving.
If an internal electric field remained, they would continue to accelerate. Therefore
the field inside the conducting material is zero and the potential is constant
throughout each connected conductor. Any excess charge resides on its surface.
Immediately outside a smooth conductor the field is normal to the surface; a
tangential component would drive surface charges.

A small Gaussian pillbox across the surface gives
<br>\\[E_{\perp,\mathrm{out}}-E_{\perp,\mathrm{in}}=\frac{\sigma}{\epsilon_0}\\]<br>
Since <br>\\[E_{\perp,\mathrm{in}}=0\,\text{,}\\]<br> the normal field just outside is
\\(\frac{\sigma}{\epsilon_0}\\). Cavities inside conductors are shielded from external
electrostatic fields when enclosed by a continuous conductor. Sharp points have
large surface charge density and correspondingly large fields, explaining corona
discharge and lightning conductors.

<a id="topic-005-surface-charge-and-force"></a>
### surface charge and force

Surface charge density is charge per unit area:
<br>\\[\sigma=\frac{dq}{dA}\\]<br>
The field acting on a charged surface element in computing its force is the average
of the fields on its two sides, not the full field on one side (which includes the
element's own field). For a conductor in vacuum, this gives the outward
electrostatic pressure
<br>\\[p_{\mathrm{el}}=\frac{\sigma^2}{2\epsilon_0}=\frac{\epsilon_0 E^2}{2}\\]<br>
The pressure has units of force per area. It tends to push charged conductors
outward. **Example:** doubling \\(\sigma\\) makes the pressure four times greater.
This result assumes a locally flat surface and electrostatic equilibrium; near
edges, the field can vary rapidly, though the local stress idea remains useful.

<a id="topic-006-capacitance-of-charged-conductors"></a>
### capacitance of charged conductors

Capacitance measures how much charge a conductor stores per change in its potential:
<br>\\[C=\frac{Q}{V}\\]<br>
The unit is the farad. For an isolated conducting sphere of radius \\(R\\) in vacuum,
<br>\\[V=\frac{Q}{4\pi\epsilon_0R}\,\text{,}\\]<br> so
<br>\\[C=4\pi\epsilon_0R\\]<br>
For parallel plates of area \\(A\\), separation \\(d\\), with edge effects negligible,
<br>\\[C=\frac{\epsilon_0 A}{d}\\]<br>
Capacitors store energy:
<br>\\[U=\frac{1}{2}CV^2=\frac{Q^2}{2C}=\frac{1}{2}QV\\]<br>
For capacitors connected in parallel, capacitances add because each has the same
voltage. In series, reciprocals add because each carries the same magnitude of charge.
Capacitance depends on geometry and the material between conductors, not on the
charge in the linear regime.

<a id="topic-007-method-of-images-for-an-infinite-plane-sheet-and-a-sphere"></a>
### Method of images for an infinite plane sheet and a sphere

The **method of images** replaces a conductor and its induced charge by fictitious
charges placed outside the physical region. They are chosen so the required
conducting boundary is an equipotential; uniqueness then guarantees that the
resulting field in the physical region is correct.

For a point charge \\(q\\) a distance \\(a\\) above an infinite grounded conducting
plane, replace the plane by an image charge \\(-q\\) the same distance below it.
Above the plane,
<br>\\[V(\rho,z)=\frac{q}{4\pi\epsilon_0}\left[\frac{1}{\sqrt{\rho^2+(z-a)^2}}-\frac{1}{\sqrt{\rho^2+(z+a)^2}}\right]\\]<br>
At <br>\\[z=0\,\text{,}\\]<br> the two terms cancel, so the plane is grounded. The image is a
calculation device, not a real charge. A grounded conducting sphere also has a
known image-charge construction for an external point charge; its image location
and magnitude follow by enforcing zero potential on the spherical surface. Always
check the boundary potential and use uniqueness; the construction changes for
isolated conductors with fixed net charge or nonzero prescribed potential.


## UNIT-II: Dielectric and Magnetic Properties of Matter (15 Lectures)

<a id="topic-008-electric-field-in-matter"></a>
### Electric field in matter

Matter responds to an applied electric field because its charges can shift or its
molecules can rotate. The microscopic field acts on individual charges, while the
macroscopic field \\(\mathbf E\\) is an average over many atoms. A dielectric is an
insulator whose response is described by polarization. In a linear, homogeneous,
isotropic dielectric,
<br>\\[\mathbf P=\epsilon_0\chi_e\mathbf E\\]<br>
where \\(\mathbf P\\) is dipole moment per unit volume and \\(\chi_e\\) is electric
susceptibility. The field inside a material need not equal the externally applied
field: it depends on bound surface and volume charges as well as free charges.

<a id="topic-009-polarization"></a>
### polarization

**Polarization** \\(\mathbf P\\) is the electric dipole moment per unit volume.
An applied field can separate positive and negative charge centers slightly
(induced polarization) or align permanent molecular dipoles. Bound charges appear
where polarization varies or ends:
<br>\\[\rho_b=-\nabla\cdot\mathbf P,\qquad \sigma_b=\mathbf P\cdot\hat{\mathbf n}\\]<br>
Here \\(\rho_b\\) is bound volume charge density and \\(\hat{\mathbf n}\\) is the
outward normal. Uniform polarization in a bulk region has no bound volume charge,
but can have surface charge.

<a id="topic-010-polarizability"></a>
### polarizability

For a small atom or molecule in a weak field, its induced dipole moment is
approximately proportional to the local field:
<br>\\[\mathbf p=\alpha\mathbf E_{\mathrm{local}}\\]<br>
The constant \\(\alpha\\) is the molecular **polarizability**. It depends on the
structure of the particle and has SI units \\(\mathrm{C\,m^2\,V^{-1}}\\). The
macroscopic field and local field need not be identical: nearby dipoles also
contribute. At strong fields, the proportionality may fail and higher-order
response terms can become important.

<a id="topic-011-susceptibility"></a>
### susceptibility

Electric susceptibility describes the average response of a material:
<br>\\[\mathbf P=\epsilon_0\chi_e\mathbf E\\]<br>
For a linear isotropic material, \\(\chi_e\\) is a dimensionless scalar; in
anisotropic crystals it is a tensor. Positive susceptibility means polarization
generally aligns with the field. Susceptibility can depend on frequency and
temperature. A static value should not automatically be used for rapidly varying
fields.

<a id="topic-012-dielectric-constant"></a>
### dielectric constant

The relative permittivity, often called the **dielectric constant**, compares a
material's permittivity with that of vacuum:
<br>\\[\epsilon_r=\frac{\epsilon}{\epsilon_0}\\]<br>
For a linear dielectric, <br>\\[\epsilon_r=1+\chi_e\,\text{.}\\]<br> In a parallel-plate capacitor
completely filled by the dielectric,
<br>\\[C=\frac{\epsilon_r\epsilon_0 A}{d}\\]<br>
The capacitance increases because polarization reduces the internal field for a
given free charge, or equivalently allows more free charge for the same voltage.
Real dielectrics can have losses and frequency-dependent permittivity.

<a id="topic-013-displacement-vector-and-relations-between-electric-field"></a>
### Displacement vector and relations between electric field

The electric displacement \\(\mathbf D\\) is defined to separate free charge from
bound charge in Maxwell's equations:
<br>\\[\mathbf D=\epsilon_0\mathbf E+\mathbf P\\]<br>
Its divergence is determined by free charge density:
<br>\\[\nabla\cdot\mathbf D=\rho_f\\]<br>
In a linear isotropic dielectric,
<br>\\[\mathbf D=\epsilon\mathbf E=\epsilon_0\epsilon_r\mathbf E\\]<br>
Thus \\(\mathbf E\\), \\(\mathbf D\\), and \\(\mathbf P\\) are related but are not
interchangeable: \\(\mathbf E\\) is the field, \\(\mathbf P\\) describes dipoles,
and \\(\mathbf D\\) is a convenient field whose sources are free charges.

<a id="topic-014-polarization"></a>
### polarization

Bound charge is the charge associated with displaced or aligned microscopic
constituents; it is not charge freely supplied by a battery. For a polarized object,
the total dipole moment is
<br>\\[\mathbf p_{\mathrm{total}}=\iiint_V\mathbf P\,dV\\]<br>
The bound charges satisfy
<br>\\[Q_b=\iiint_V\rho_b\,dV+\iint_S\sigma_b\,dA\\]<br>
For a finite polarized body, positive and negative bound charges commonly appear on
opposite faces, while the total bound charge of the entire isolated body is zero.
The surface and volume formulas follow by treating polarization as a continuum of
small dipoles.

<a id="topic-015-displacement-clausius-mossotti-equation"></a>
### displacement; Clausius-Mossotti equation

For a dilute gas of number density \\(N\\), if each molecule has polarizability
\\(\alpha\\), then approximately <br>\\[\mathbf P=N\alpha\mathbf E_{\mathrm{local}}\,\text{.}\\]<br>
In a simple cubic or isotropic local-field model,
<br>\\[\mathbf E_{\mathrm{local}}=\mathbf E+\frac{\mathbf P}{3\epsilon_0}\\]<br>
Combining this model with the macroscopic dielectric response gives the
Clausius-Mossotti relation:
<br>\\[\frac{\epsilon_r-1}{\epsilon_r+2}=\frac{N\alpha}{3\epsilon_0}\\]<br>
It links a microscopic molecular property to bulk permittivity. Its assumptions
include a linear response and a suitable local-field approximation; dense,
anisotropic, or strongly interacting materials may not obey it accurately.

<a id="topic-016-gauss-law-in-dielectrics"></a>
### Gauss' law in dielectrics

Gauss' law for the displacement field uses **free** charge:
<br>\\[\iint_{\partial V}\mathbf D\cdot d\mathbf A=Q_{f,\mathrm{enc}}\\]<br>
In differential form, <br>\\[\nabla\cdot\mathbf D=\rho_f\,\text{.}\\]<br> For a flat interface,
the normal component obeys
<br>\\[D_{2\perp}-D_{1\perp}=\sigma_f\\]<br>
where \\(\sigma_f\\) is free surface charge. The tangential component of
\\(\mathbf E\\) is continuous in electrostatics. These boundary conditions are
useful for layered dielectrics. In a parallel stack with no free charge at the
internal interface, normal \\(D\\) stays the same while <br>\\[E=\frac{D}{\epsilon}\\]<br> changes
from layer to layer.

<a id="topic-017-magnetization"></a>
### Magnetization

Magnetic materials contain microscopic magnetic dipoles, mainly associated with
electron orbital and spin angular momentum. **Magnetization** \\(\mathbf M\\) is
magnetic dipole moment per unit volume. A uniform magnetization can be modeled by
bound currents on the surface; in general,
<br>\\[\mathbf J_b=\nabla\times\mathbf M,\qquad \mathbf K_b=\mathbf M\times\hat{\mathbf n}\\]<br>
where \\(\mathbf J_b\\) is bound volume current density and \\(\mathbf K_b\\) is
bound surface current density. Magnetization is a material response, not the same
quantity as the magnetic induction \\(\mathbf B\\).

<a id="topic-018-magnetic-field-intensity"></a>
### magnetic field intensity

The magnetic field intensity \\(\mathbf H\\) is defined by
<br>\\[\mathbf H=\frac{\mathbf B}{\mu_0}-\mathbf M\\]<br>
In SI units, \\(\mathbf H\\) is measured in amperes per metre. It is useful because
its circulation is sourced by free current:
<br>\\[\oint_C\mathbf H\cdot d\mathbf l=I_{f,\mathrm{enc}}\\]<br>
This macroscopic relation is magnetostatic; time-varying electric fields add the
displacement-current term to Ampere-Maxwell law.

<a id="topic-019-susceptibility"></a>
### susceptibility

For a linear isotropic magnetic material,
<br>\\[\mathbf M=\chi_m\mathbf H\\]<br>
The dimensionless magnetic susceptibility \\(\chi_m\\) describes how strongly and
in which direction the material responds. A small negative value characterizes
diamagnetism; a small positive value often characterizes paramagnetism; large,
nonlinear response and domain behavior characterize ferromagnetism. Susceptibility
depends on temperature and field in many materials.

<a id="topic-020-permeability"></a>
### permeability

Magnetic permeability relates \\(\mathbf B\\) to \\(\mathbf H\\). For a linear
isotropic material,
<br>\\[\mathbf B=\mu\mathbf H,\qquad \mu=\mu_0(1+\chi_m)\\]<br>
The relative permeability is <br>\\[\mu_r=\frac{\mu}{\mu_0}\,\text{.}\\]<br> In ferromagnets the response is
nonlinear and history-dependent, so a single constant permeability is only an
approximation over a limited range.

<a id="topic-021-relations-between-b"></a>
### relations between B

The magnetic induction combines the vacuum contribution and material
magnetization:
<br>\\[\mathbf B=\mu_0(\mathbf H+\mathbf M)\\]<br>
For a linear medium this becomes <br>\\[\mathbf B=\mu_0(1+\chi_m)\mathbf H\,\text{.}\\]<br> At an
interface, the normal component of \\(\mathbf B\\) is continuous because
<br>\\[\nabla\cdot\mathbf B=0\,\text{.}\\]<br> The tangential component of \\(\mathbf H\\) changes by
the free surface current:
<br>\\[\hat{\mathbf n}\times(\mathbf H_2-\mathbf H_1)=\mathbf K_f\\]<br>
These conditions follow from Maxwell's equations and help solve fields in layered
magnetic materials.

<a id="topic-022-h"></a>
### H

In free space, <br>\\[\mathbf M=0\,\text{,}\\]<br> so <br>\\[\mathbf B=\mu_0\mathbf H\,\text{.}\\]<br> In matter,
\\(\mathbf H\\) describes the field associated with free currents after subtracting
the material magnetization from \\(\frac{\mathbf B}{\mu_0}\\). In a long solenoid with
\\(n\\) turns per unit length and current \\(I\\),
<br>\\[H=nI\\]<br>
under the ideal long-solenoid approximation. This form is convenient for comparing
the externally applied magnetizing field with a material's response.

<a id="topic-023-m"></a>
### M

The magnetization vector is magnetic dipole moment per unit volume:
<br>\\[\mathbf M=\frac{d\mathbf m}{dV}\\]<br>
For a linear material <br>\\[\mathbf M=\chi_m\mathbf H\,\text{;}\\]<br> for a ferromagnet this
proportionality generally fails. A magnetized body can produce magnetic fields even
when no free current passes through the material, because microscopic bound currents
contribute.

<a id="topic-024-b-h-curve"></a>
### B-H curve

A **B-H curve** plots magnetic induction \\(B\\) against applied field intensity
\\(H\\). In a linear material it is a straight line with slope \\(\mu\\). In a
ferromagnet, the curve is nonlinear: domains move and rotate as the field grows,
and the response depends on previous magnetization. The slope at a point represents
differential permeability. The loop obtained when \\(H\\) is cycled is the
hysteresis loop.

<a id="topic-025-hysteresis"></a>
### hysteresis

**Hysteresis** means that magnetization lags behind a changing applied field. A
ferromagnetic hysteresis loop has saturation, remanence (residual induction at
zero applied field), and coercivity (reverse field needed to reduce induction to
zero). The loop area gives energy dissipated per unit volume per cycle:
<br>\\[W_{\mathrm{loss}}=\oint H\,dB\\]<br>
Soft magnetic materials have narrow loops and suit transformer cores; hard
magnetic materials have large coercivity and suit permanent magnets. Heating and
repeated cycling can change magnetic properties.

<a id="topic-026-dia"></a>
### dia-

**Diamagnetic** materials acquire a weak magnetization opposite to the applied
field, so <br>\\[\chi_m<0\,\text{.}\\]<br> This response arises from induced microscopic currents
that oppose the change in magnetic flux. It is present in all materials but is
often masked by stronger paramagnetic or ferromagnetic effects. For weak
diamagnetism, the susceptibility is nearly independent of temperature. A diamagnetic
sample is repelled from regions of stronger field.

<a id="topic-027-para"></a>
### para-

**Paramagnetic** materials contain permanent atomic or molecular magnetic moments.
Without a field, thermal motion randomizes their directions. An applied field
partially aligns them, so <br>\\[\chi_m>0\,\text{;}\\]<br> the response is usually weak and
decreases as temperature rises. In the simple Curie law,
<br>\\[\chi_m=\frac{C}{T}\\]<br>
where \\(C\\) is the Curie constant and \\(T\\) is absolute temperature. The law is
an approximation valid when interactions and saturation are small.

<a id="topic-028-ferromagnetism"></a>
### ferromagnetism

In ferromagnets, exchange interactions make neighboring magnetic moments align
within domains. An unmagnetized specimen can have domains pointing in different
directions, so its net moment is small. An applied field grows and reorients domains,
leading to strong magnetization and eventual saturation. Above the Curie temperature,
long-range ferromagnetic order disappears and the material becomes paramagnetic.
Hysteresis and domain-wall motion explain why the response depends on magnetic
history.

<a id="topic-029-langevin-s-theory"></a>
### Langevin's theory

Classical Langevin theory models independent permanent magnetic dipoles of moment
\\(\mu_d\\) in thermal equilibrium. Their energies favor alignment with a field,
while thermal agitation randomizes them. The average magnetization is
<br>\\[M=N\mu_d\left(\coth a-\frac{1}{a}\right),\qquad a=\frac{\mu_d B}{k_B T}\\]<br>
where \\(N\\) is number density and \\(k_B\\) is Boltzmann's constant. At weak
fields, \\(a\ll1\\), expansion gives Curie's law, <br>\\[\chi_m\propto\frac{1}{T}\,\text{;}\\]<br> at strong
fields, the magnetization approaches saturation. This classical model explains
paramagnetism, not cooperative ferromagnetic domain ordering.

<a id="topic-030-measurement-of-magnetic-susceptibility-by-quincke-s-method"></a>
### Measurement of magnetic susceptibility by Quincke's method

Quincke's method measures the rise or fall of a liquid in a nonuniform magnetic
field. A paramagnetic liquid is drawn toward stronger field; a diamagnetic liquid
is pushed away. At equilibrium, the magnetic force balances the hydrostatic
pressure difference. In SI units, for a weakly magnetic liquid in air,
<br>\\[\Delta h=\frac{\chi_m B^2}{2\mu_0\rho g}\\]<br>
where \\(\rho\\) is liquid density, \\(g\\) is gravitational acceleration, and \\(B\\)
is the field at the meniscus relative to the negligible-field region. Hence
<br>\\[\chi_m=\frac{2\mu_0\rho g\Delta h}{B^2}\\]<br>
Measure \\(B\\), \\(\Delta h\\), and density carefully; the sign of the height
change reveals the sign of susceptibility. The formula assumes small susceptibility
and a field that varies mainly along the tube.

## UNIT-III: Electromagnetic Induction and Electrical Circuits (15 Lectures)

<a id="topic-031-faraday-s-and-lenz-s-laws"></a>
### Faraday's and Lenz's laws

The magnetic flux through a loop is <br>\\[\Phi_B=\iint_S\mathbf B\cdot d\mathbf A\,\text{.}\\]<br>
Faraday's law says a changing flux induces an electromotive force (emf):
<br>\\[\mathcal E=-\frac{d\Phi_B}{dt}\\]<br>
For a coil of \\(N\\) turns, <br>\\[\mathcal E=-N\,\frac{d\Phi_B}{dt}\,\text{.}\\]<br> The minus sign is
**Lenz's law**: the induced current produces a field opposing the change in flux,
not necessarily opposing the original field. A generator changes flux mechanically;
a transformer changes it through another coil. For a moving rod of length \\(l\\)
cutting a uniform field at right angles with speed \\(v\\), the motional emf is
<br>\\[\mathcal E=Blv\,\text{.}\\]<br> The law is consistent with conservation of energy: an external
agent must do work to maintain the change that produces current.

<a id="topic-032-self-and-mutual-inductance"></a>
### self- and mutual inductance

Current in a circuit produces magnetic flux. The **self-inductance** \\(L\\) relates
the flux linkage to current:
<br>\\[N\Phi_B=LI\\]<br>
If current changes, the circuit's induced emf is
<br>\\[\mathcal E_L=-L\frac{dI}{dt}\\]<br>
Two nearby coils can also couple: current \\(I_1\\) in coil 1 produces flux linkage
in coil 2 equal to \\(M I_1\\), where \\(M\\) is the mutual inductance. Changing
that current induces
<br>\\[\mathcal E_2=-M\frac{dI_1}{dt}\\]<br>
For linear reciprocal coils, the mutual inductance is the same in either direction.
Inductance is measured in henries; one henry gives one volt when current changes at
one ampere per second.

<a id="topic-033-reciprocity-theorem"></a>
### reciprocity theorem

For a linear, passive, reciprocal magnetic system, interchanging the source and
measurement locations leaves the mutual inductance unchanged:
<br>\\[M_{12}=M_{21}\\]<br>
In circuit language, the voltage response measured at port 2 due to a current at
port 1 equals the corresponding response after source and detector are exchanged,
with the same reference directions. The theorem follows from linear field equations
and energy symmetry. It does not generally apply to nonlinear or actively driven
systems, or to media that break reciprocity. It is useful when calculating or
measuring mutual inductance.

<a id="topic-034-energy-stored-in-a-magnetic-field"></a>
### energy stored in a magnetic field

An inductor stores energy while its current is built up. The energy is
<br>\\[U_B=\frac{1}{2}LI^2\\]<br>
In a linear medium, the energy per unit volume in a magnetic field is
<br>\\[u_B=\frac{B^2}{2\mu}\\]<br>
where \\(\mu\\) is permeability. In vacuum, <br>\\[\mu=\mu_0\,\text{.}\\]<br> This energy is stored
in the field and can be returned to the circuit. For nonlinear magnetic materials,
the energy density must be found from the measured relation between \\(H\\) and
\\(B\\); a simple quadratic formula may not apply.

<a id="topic-035-charge-conservation"></a>
### Charge conservation

Charge cannot be created or destroyed in ordinary electromagnetic processes. The
continuity equation expresses local conservation:
<br>\\[\frac{\partial\rho}{\partial t}+\nabla\cdot\mathbf J=0\\]<br>
If more current flows out of a small volume than flows in, the charge stored there
decreases. Integrating over a fixed volume gives
<br>\\[\frac{dQ_{\mathrm{inside}}}{dt}=-\iint_{\partial V}\mathbf J\cdot d\mathbf A\\]<br>
At a circuit junction in steady state, this becomes Kirchhoff's current law: total
current entering equals total current leaving. The continuity equation is also a
consistency requirement for Maxwell's equations.

<a id="topic-036-displacement-current"></a>
### displacement current

Between the plates of a charging capacitor, conduction current does not cross the
gap, yet the magnetic field around the circuit must be consistent with current
conservation. Maxwell resolved this by adding **displacement current**, associated
with changing electric flux:
<br>\\[I_D=\epsilon_0\frac{d\Phi_E}{dt}\\]<br>
Ampere-Maxwell law is
<br>\\[\nabla\times\mathbf B=\mu_0\mathbf J+\mu_0\epsilon_0\frac{\partial\mathbf E}{\partial t}\\]<br>
The displacement current is not generally a stream of charges crossing empty space;
it is the field term required by changing electric fields. It allows electromagnetic
waves to propagate in vacuum.

<a id="topic-037-torque-on-a-current-loop"></a>
### torque on a current loop

A current loop has magnetic dipole moment <br>\\[\mathbf m=NI A\hat{\mathbf n}\,\text{,}\\]<br>
where \\(N\\) is turn count, \\(I\\) current, \\(A\\) loop area, and
\\(\hat{\mathbf n}\\) follows the right-hand rule. In a uniform magnetic field,
<br>\\[\boldsymbol{\tau}=\mathbf m\times\mathbf B\\]<br>
The potential energy is <br>\\[U=-\mathbf m\cdot\mathbf B\,\text{.}\\]<br> The torque tends to align
the loop's magnetic moment with the field. The force on a magnetic dipole in a
nonuniform field can be nonzero; in a uniform field the net force on a closed loop
is zero even though the torque may not be.

<a id="topic-038-ballistic-galvanometer-sensitivity"></a>
### ballistic galvanometer sensitivity

A ballistic galvanometer measures a brief charge impulse by observing the first
angular throw of a suspended coil. During a short pulse, the charge
<br>\\[q=\int I\,dt\\]<br> gives the coil angular impulse. If the coil has \\(N\\) turns,
area \\(A\\), magnetic field \\(B\\), and moment of inertia \\(J\\), then
<br>\\[NABq=J\omega_0\\]<br>
where \\(\omega_0\\) is the angular speed immediately after the impulse. If the
torsional constant is \\(\kappa\\), the first throw is \\(\theta_0\\), and damping
is small,
<br>\\[q=\frac{\sqrt{J\kappa}}{NAB}\theta_0\\]<br>
The charge sensitivity is \\(\frac{\theta_0}{q}\\); current sensitivity also depends on
the time interval. Calibration requires accounting for damping and the instrument's
time period.

<a id="topic-039-electromagnetic-and-logarithmic-damping"></a>
### Electromagnetic and logarithmic damping

In a moving-coil instrument, induced currents can oppose coil motion and produce
**electromagnetic damping**. For an underdamped galvanometer, successive maxima
decrease approximately geometrically. The logarithmic decrement is
<br>\\[\lambda=\ln\left(\frac{\theta_n}{\theta_{n+1}}\right)\\]<br>
For small damping, the ratio of the first throw to the steady deflection includes
the correction factor
<br>\\[1+\frac{\lambda}{2}+\frac{\lambda^2}{8}+\cdots\\]<br>
The exact correction depends on the measurement procedure and damping model. More
damping reduces oscillation and speeds settling, but excessive damping can reduce
the observed ballistic throw.

<a id="topic-040-ac-circuits-kirchhoff-s-laws"></a>
### AC circuits: Kirchhoff's laws

For sinusoidal alternating current, circuit quantities vary with time, but
Kirchhoff's laws still apply to lumped circuits: current is conserved at a node and
the sum of potential changes around a loop is zero. Use instantaneous values or
phasors, but do not mix the two conventions. For a resistor, voltage and current
are in phase. For an inductor, voltage leads current by a quarter-cycle; for a
capacitor, current leads voltage by a quarter-cycle. In steady sinusoidal operation,
phasors turn differential equations into algebraic equations. Kirchhoff's laws
assume circuit dimensions are small compared with the electromagnetic wavelength
and that propagation delays can be neglected.

<a id="topic-041-complex-reactance-and-impedance"></a>
### complex reactance and impedance

In sinusoidal steady state with angular frequency \\(\omega\\), a resistor,
inductor, and capacitor have impedances
<br>\\[Z_R=R,\qquad Z_L=i\omega L,\qquad Z_C=\frac{1}{i\omega C}=-\frac{i}{\omega C}\\]<br>
Impedance is the complex ratio of voltage phasor to current phasor:
<br>\\[Z=\frac{\widetilde V}{\widetilde I}\\]<br>
Its real part represents resistance; its imaginary part represents reactance.
The magnitude sets the voltage-to-current amplitude ratio, while the argument gives
their phase difference. Complex notation is a calculation tool for sinusoids; the
measurable voltage and current are real.

<a id="topic-042-series-and-parallel-lcr-circuits"></a>
### series and parallel LCR circuits

In a series resistor-inductor-capacitor circuit, the same current passes through
each element, so impedances add:
<br>\\[Z=R+i\left(\omega L-\frac{1}{\omega C}\right)\\]<br>
In parallel, admittances <br>\\[Y=\frac{1}{Z}\\]<br> add. For a parallel ideal LCR network,
<br>\\[Y=\frac{1}{R}+i\left(\omega C-\frac{1}{\omega L}\right)\\]<br>
The impedance is the reciprocal of total admittance. Series resonance minimizes
impedance; parallel resonance maximizes it in the ideal model. Real inductors and
capacitors have losses, so practical circuits do not reach infinite or zero
impedance.

<a id="topic-043-lcr-resonance"></a>
### LCR resonance

In a series LCR circuit, resonance occurs when inductive and capacitive reactances
cancel:
<br>\\[\omega_0 L=\frac{1}{\omega_0 C}\\]<br>
Hence
<br>\\[\omega_0=\frac{1}{\sqrt{LC}},\qquad f_0=\frac{1}{2\pi\sqrt{LC}}\\]<br>
At resonance the impedance is \\(R\\), current is largest, and voltage and current
are in phase. Above resonance the circuit is inductive; below it, capacitive.
Resonance is used in tuning, filters, and oscillators. The ideal result assumes
constant component values and sinusoidal steady state.

<a id="topic-044-power-dissipation"></a>
### power dissipation

For sinusoidal voltage and current with phase difference \\(\phi\\), average real
power is
<br>\\[P_{\mathrm{avg}}=V_{\mathrm{rms}}I_{\mathrm{rms}}\cos\phi\\]<br>
For a pure resistor, this is \\(I_{\mathrm{rms}}^2R\\); ideal inductors and
capacitors exchange stored energy with the source but dissipate no average power.
The factor \\(\cos\phi\\) is the power factor. Low power factor means more current
is needed to deliver the same useful power, increasing resistive losses in supply
lines.

<a id="topic-045-quality-factor"></a>
### quality factor

The **quality factor** measures how lightly damped and selective a resonator is.
For a series LCR circuit at resonance,
<br>\\[Q=\frac{\omega_0L}{R}=\frac{1}{\omega_0CR}\\]<br>
It is also \\(2\pi\\) times energy stored divided by energy lost per cycle.
Large \\(Q\\) gives a narrow resonance and a large current response near
\\(\omega_0\\). Real component losses limit the attainable value.

<a id="topic-046-bandwidth"></a>
### bandwidth

Bandwidth is the frequency interval between the two half-power frequencies:
<br>\\[\Delta\omega=\omega_2-\omega_1\\]<br>
For a lightly damped series LCR circuit,
<br>\\[\Delta\omega=\frac{R}{L},\qquad Q=\frac{\omega_0}{\Delta\omega}\\]<br>
Half power means the power is half its peak value, so current amplitude is
\\(\frac{1}{\sqrt{2}}\\) of its resonant value. A narrow bandwidth means strong frequency
selectivity; a wider bandwidth means a more broadly responsive circuit.

<a id="topic-047-anderson-s"></a>
### Anderson's

Anderson's bridge is an AC bridge used to measure an unknown self-inductance using
a standard capacitor, resistors, and a variable resistor. At balance, detector
current is zero; the two detector nodes have equal complex potential. Applying
Kirchhoff's laws to the balanced network yields the unknown inductance and its
series resistance from the known component values. The exact balance expressions
depend on the bridge's labeled arm arrangement, so use the circuit diagram supplied
in the laboratory manual rather than memorizing an unlabeled formula. The method is
accurate but involves more components and adjustment than a simple Maxwell bridge.

<a id="topic-048-de-sauty"></a>
### De-Sauty

The De-Sauty bridge compares an unknown capacitance with a standard capacitance
using a null detector. For ideal lossless capacitors and resistive ratio arms,
balance gives
<br>\\[\frac{C_x}{C_s}=\frac{R_2}{R_1}\\]<br>
where the resistor labels follow the chosen bridge diagram. It is simple for
comparing nearly ideal capacitors, but cannot accurately measure a lossy capacitor:
dielectric loss prevents simultaneous balance of both real and imaginary
components. A modified bridge is needed for practical capacitors with appreciable
leakage or loss.

<a id="topic-049-carey-foster-bridges-equivalent-circuits-and-vector-diagrams"></a>
### Carey Foster bridges; equivalent circuits and vector diagrams

The Carey Foster bridge is a null method for comparing two nearly equal resistances.
It uses a uniform bridge wire and a known standard resistance. Interchanging the
unknown and standard and measuring the shift in balance point cancels many systematic
errors. For a uniform wire of resistance per unit length \\(\lambda\\), if the
balance point shifts by \\(\Delta l\\), the resistance difference is
<br>\\[R_x-R_s=\lambda\,\Delta l\\]<br>
The sign depends on the interchange and length convention. Contact resistance and
wire nonuniformity are important errors.

Equivalent circuits replace a real element by an ideal model plus parasitic
resistance, capacitance, or inductance. Vector (phasor) diagrams represent
sinusoidal voltages and currents as rotating vectors; the horizontal and vertical
components correspond to in-phase and quadrature parts. Draw a consistent reference
phasor and add voltages head-to-tail to visualize phase and apply Kirchhoff's
voltage law.

<a id="topic-050-transformers-and-transformer-losses"></a>
### Transformers and transformer losses

A transformer transfers energy between coils through changing magnetic flux. For
an ideal transformer with primary and secondary turns \\(N_p,N_s\\),
<br>\\[\frac{V_s}{V_p}=\frac{N_s}{N_p},\qquad \frac{I_s}{I_p}=\frac{N_p}{N_s}\\]<br>
The ideal input and output powers are equal. Increasing voltage reduces current
for the same power, which is useful for efficient transmission. Real transformers
lose energy through winding resistance (copper loss), eddy currents, hysteresis,
magnetic leakage, and imperfect coupling. Laminated cores reduce eddy currents;
soft magnetic materials reduce hysteresis loss.

## Further study

These notes are original explanations. For additional treatments and source material:

- [The Feynman Lectures on Physics, Volume II](https://www.feynmanlectures.caltech.edu/II_toc.html) — electromagnetism and electromagnetic fields.
- [The Feynman Lectures on Physics, Volume I](https://www.feynmanlectures.caltech.edu/I_toc.html) — waves and optics foundations.
- [IGNOU eGyanKosh](https://egyankosh.ac.in/) — search for *Electricity and Magnetism*, *Electromagnetic Theory*, or the relevant syllabus topics.
