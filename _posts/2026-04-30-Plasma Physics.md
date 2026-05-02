---
layout: post
title: "Plasma Physics"
date: 2026-04-30
author: "Dr. Indrajeet Kumar"
description: "Basic of Plasma Physics for M.Sc. Physics Semester I."
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

The Boltzmann equation describes the time evolution of the distribution function  

$$
f(\mathbf{r}, \mathbf{v}, t)
$$  

of particles in phase space, where $$ \mathbf{r} $$ is position, $$ \mathbf{v} $$ is velocity, and $$ t $$ is time.  
These variables define a six-dimensional phase space ($$\mu$$-space).

The distribution function $$ f_\alpha(\mathbf{r}, \mathbf{v}, t) $$ gives the density of particles of species $$\alpha$$.  
The number of particles in a phase space element is:

$$
d^6 N_\alpha = f_\alpha(\mathbf{r}, \mathbf{v}, t)\, d^3r\, d^3v
$$

Under an external force $ \mathbf{F} $, the motion of particles in phase space is given by:

$$
\mathbf{r}' = \mathbf{r} + \mathbf{v}\, dt
$$

$$
\mathbf{v}' = \mathbf{v} + \mathbf{a}\, dt
$$

In the absence of collisions, the number of particles is conserved:

$$
f_\alpha(\mathbf{r}', \mathbf{v}', t + dt)\, d^3r'\, d^3v'
=
f_\alpha(\mathbf{r}, \mathbf{v}, t)\, d^3r\, d^3v
$$

The Jacobian of transformation satisfies:

$$
|J| = 1
$$

so that:

$$
d^3r'\, d^3v' = d^3r\, d^3v
$$

Thus,

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
=
f_\alpha(\mathbf{r}, \mathbf{v}, t)
$$

Expanding using Taylor series:

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt) 
= 
f_\alpha(\mathbf{r},\; \mathbf{v}.\; t) 
+ \left[
  \frac{\partial f_\alpha}{\partial t}
+ (v_x \frac{\partial f_alpha}{\partial x}) + (v_y \frac{\partial f_alpha}{\partial y}) + (v_z \frac{\partial f_alpha}{\partial z})
+ (a_x \frac{\partial f_alpha}{\partial v_x}) + (a_y \frac{\partial f_alpha}{\partial v_y}) + (a_z \frac{\partial f_alpha}{\partial v_z})
\right] dt
$$

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
\approx
f_\alpha + \left[
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
\right] dt
$$

Cancelling terms, we obtain:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
= 0
$$

This is the **collisionless Boltzmann equation**.

When collisions are included, the equation becomes:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
=
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
$$
