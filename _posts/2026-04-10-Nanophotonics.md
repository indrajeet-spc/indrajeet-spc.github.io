---
layout: post
title:  "PG: Nanophotonics"
date:   2026-04-06 14:30:00 +0530
categories: lecture
---

<div style="background-color:#f9fbff; padding:20px; border-radius:12px; border:2px solid #6a5acd;">

<h1 style="color:#4b0082; text-align:center;">Nanophotonics: Concepts and Mathematical Framework</h1>

<!-- ===================== HEADING 1 ===================== -->

<div style="background-color:#ffffff; padding:18px; border-left:6px solid #4b0082; margin-top:15px; border-radius:8px;">

<h2 style="color:#4b0082;">1. Introduction to Nanophotonics</h2>

<p>
Nanophotonics is the study of the behavior of light at the nanometer scale and its interaction with nanostructured materials. At this scale, classical optics merges with quantum mechanics, leading to unique optical properties such as confinement of light beyond the diffraction limit, enhancement of electromagnetic fields, and strong light–matter interactions.
</p>

<p>
It plays a crucial role in modern technologies including optical communication, biosensing, photovoltaics, and quantum computing. Structures such as quantum dots, plasmonic nanoparticles, and photonic crystals are central to nanophotonics. The key idea is that when the dimensions of a system become comparable to or smaller than the wavelength of light, new physical phenomena emerge that cannot be explained by classical optics alone.
</p>

<p>
Understanding nanophotonics requires a strong mathematical foundation, primarily based on Maxwell’s equations, wave propagation, and electromagnetic boundary conditions.
</p>

</div>

<!-- ===================== HEADING 2 ===================== -->

<div style="background-color:#eef0ff; padding:18px; border:2px solid #6a5acd; margin-top:20px; border-radius:8px;">

<h2 style="color:#1a237e; text-align:center;">2. Mathematical Description of Nanophotonics</h2>

<p><b>Maxwell’s Equations in Material Medium</b></p>

<br>

$$
\nabla \cdot \vec{D} = \rho
$$

<br>

$$
\nabla \cdot \vec{B} = 0
$$

<br>

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

<br>

$$
\nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t}
$$

<br>

<p>
Where $ \vec{D} = \epsilon \vec{E} $ and $ \vec{B} = \mu \vec{H} $ describe the response of the medium.
</p>

<p><b>Wave Equation in Dielectric Medium</b></p>

<br>

$$
\nabla^2 \vec{E} - \mu \epsilon \frac{\partial^2 \vec{E}}{\partial t^2} = 0
$$

<br>

<p><b>Refractive Index Relation</b></p>

<br>

$$
n = \sqrt{\epsilon_r \mu_r}
$$

<br>

<p><b>Dispersion Relation</b></p>

<br>

$$
k = \frac{\omega}{v} = \frac{n\omega}{c}
$$

<br>

<p><b>Surface Plasmon Resonance Condition</b></p>

<br>

$$
\epsilon_m(\omega) = -\epsilon_d
$$

<br>

<p>
This condition explains resonance at metal–dielectric interfaces.
</p>

<p><b>Localized Surface Plasmon Frequency</b></p>

<br>

$$
\omega_p = \sqrt{\frac{Ne^2}{m\epsilon_0}}
$$

<br>

<p><b>Intensity of Electromagnetic Wave</b></p>

<br>

$$
I = \frac{1}{2} c \epsilon_0 E^2
$$

<br>

<p><b>Boundary Conditions</b></p>

<br>

$$
E_{1t} = E_{2t}
$$

<br>

$$
\epsilon_1 E_{1n} = \epsilon_2 E_{2n}
$$

<br>

<p><b>Diffraction Limit</b></p>

<br>

$$
d = \frac{\lambda}{2n \sin\theta}
$$

<br>

<p><b>Evanescent Wave Decay</b></p>

<br>

$$
E(z) = E_0 e^{-kz}
$$

<br>

</div>

<!-- ===================== HEADING 3 ===================== -->

<div style="background-color:#ffffff; padding:18px; border-left:6px solid #4b0082; margin-top:20px; border-radius:8px;">

<h2 style="color:#4b0082;">3. Applications and Physical Interpretation</h2>

<p>
The above mathematical framework explains several important nanophotonic phenomena. Maxwell’s equations govern the propagation and confinement of electromagnetic waves in nanostructures. The wave equation describes how light behaves inside materials, while the refractive index determines how light bends and slows down in different media.
</p>

<p>
Surface plasmon resonance plays a vital role in sensing applications, where even small changes in the surrounding environment lead to measurable shifts in resonance conditions. The dispersion relation helps understand how wavevector and frequency are related, especially in engineered materials such as metamaterials.
</p>

<p>
The diffraction limit sets a fundamental bound on resolution in optical systems, but nanophotonics techniques such as near-field optics and plasmonics overcome this limitation. Evanescent waves, which decay exponentially, are essential in near-field scanning optical microscopy (NSOM).
</p>

<p>
Overall, nanophotonics bridges the gap between optics and nanotechnology, enabling the development of compact, efficient, and high-speed optical devices.
</p>

</div>

</div>