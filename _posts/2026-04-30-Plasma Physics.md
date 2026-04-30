---
layout: post
title: "Plasma Physics"
date: 2026-04-30
author: "Dr. Indrajeet Kumar"
description: "Basic of Plasma Physics for M.Sc. Physics Semester V."
tags: [Physics, Plasma Physics, MSc Notes]
---

# 📘 Plasma Frequency

Plasma frequency is the natural frequency of oscillation of free electrons in a conducting medium (such as metals or plasma) when displaced from their equilibrium positions.

- Consider a system of free electrons of number density $$n$$
- Each electron has charge $$-e$$ and mass $$m$$
- A small displacement $$x$$ of electrons relative to the positive ion background is assumed

When electrons are displaced by a distance $$x$$, a charge imbalance is created.

The Charge density is given by
  
  $$ \rho = -n e $$

- This displacement produces an electric field $$E$$ given by Gauss's Law:

  $$ E = \frac{n e x}{\varepsilon_0} $$

The force acting on an electron due to the electric field is:

$$ F = -eE $$

Substituting $$E$$:

$$ F = -e \left( \frac{n e x}{\varepsilon_0} \right) $$

Using Newton’s second law:

$$ m \frac{d^2 x}{dt^2} = - \frac{n e^2}{\varepsilon_0} x $$

Rewriting:

$$ \frac{d^2 x}{dt^2} + \frac{n e^2}{m \varepsilon_0} x = 0 $$

This is the equation of a simple harmonic oscillator:

$$ \frac{d^2 x}{dt^2} + \omega_p^2 x = 0 $$

Comparing both equations:

$$ \omega_p^2 = \frac{n e^2}{m \varepsilon_0} $$

Therefore, the plasma frequency is:

$$ \omega_p = \sqrt{\frac{n e^2}{m \varepsilon_0}} $$

- Plasma frequency depends on electron density $n$
- It determines the optical properties of metals
- Electromagnetic waves with frequency below $\omega_p$ are reflected

---
# 📘 Boltzmann Equation in Plasma

<div style="background-color:#0f172a; padding:20px; border-radius:10px; border:2px solid #38bdf8;">

<h1 style="color:#38bdf8; text-align:center;">

The Boltzmann equation describes the time evolution of the distribution function  

$$
f(\mathbf{r}, \mathbf{v}, t)
$$  

of particles in phase space, where $ \mathbf{r} $ is position, $ \mathbf{v} $ is velocity, and $ t $ is time.  
The six variables define a 6D phase space ($\mu$-space).

</div>

<br>

<div style="background-color:#111827; padding:15px; border-left:5px solid #eab308; border-radius:8px;">

The distribution function $ f_\alpha(\mathbf{r}, \mathbf{v}, t) $ gives the density of particles of species $\alpha$.  
The number of particles in a phase space element is:

$$
d^6 N_\alpha = f_\alpha(\mathbf{r}, \mathbf{v}, t)\, d^3r\, d^3v
$$

</div>

<br>

<div style="background-color:#111827; padding:15px; border-left:5px solid #f97316; border-radius:8px;">

Particle motion under force $ \mathbf{F} $:

$$
\mathbf{r}' = \mathbf{r} + \mathbf{v}\, dt
$$

$$
\mathbf{v}' = \mathbf{v} + \mathbf{a}\, dt
$$

$$
\mathbf{a} = \frac{\mathbf{F}}{m_\alpha}
$$

</div>

<br>

<div style="background-color:#111827; padding:15px; border-left:5px solid #a855f7; border-radius:8px;">

Conservation of particles (collisionless case):

$$
f_\alpha(\mathbf{r}', \mathbf{v}', t + dt)\, d^3r'\, d^3v'
=
f_\alpha(\mathbf{r}, \mathbf{v}, t)\, d^3r\, d^3v
$$

Using Jacobian:

$$
|J| = 1
$$

$$
d^3r'\, d^3v' = d^3r\, d^3v
$$

Thus:

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
=
f_\alpha(\mathbf{r}, \mathbf{v}, t)
$$

</div>

<br>

<div style="background-color:#111827; padding:15px; border-left:5px solid #ef4444; border-radius:8px;">

Taylor expansion:

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
\approx
f_\alpha + \left[
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
\right] dt
$$

Cancelling terms:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
= 0
$$

</div>

<br>

<div style="background-color:#111827; padding:15px; border-left:5px solid #06b6d4; border-radius:8px;">

Including collisions:

$$
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
$$

Full Boltzmann equation:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
=
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
$$

</div>

<br>

<div style="background-color:#111827; padding:15px; border-left:5px solid #84cc16; border-radius:8px;">

Collision integral:

$$
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
=
\sum_\beta \iint
\left( f_\alpha' f_{\beta1}' - f_\alpha f_{\beta1} \right)
\, g\, \sigma(\Omega)\, d\Omega\, d^3 v_1
$$

where  
$ g = |\mathbf{v} - \mathbf{v}_1| $ is relative velocity,  
$ \sigma(\Omega) $ is differential cross-section.

</div>

<br>

<div style="background-color:#020617; padding:15px; border:2px dashed #38bdf8; border-radius:8px; text-align:center;">

<strong style="color:#38bdf8;">Final Boltzmann Equation</strong>

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
=
\sum_\beta \iint
\left( f_\alpha' f_{\beta1}' - f_\alpha f_{\beta1} \right)
\, g\, \sigma(\Omega)\, d\Omega\, d^3 v_1
$$

</div>

</div>
