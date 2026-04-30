---
layout: post
title: "Plasma Physics"
date: 2026-04-30
author: "Dr. Indrajeet Kumar."
description: "Basic of Plasma Physics for M.Sc. Physics Semester V."
tags: [Physics, Plasma Physics, MSc Notes]
---

# 📘 Derivation of Plasma Frequency

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
# 📘 Derivation of the Boltzmann Equation in Plasma

## 🔷 1. Phase Space and Distribution Function

The state of a particle is defined by:
- Position vector: $\mathbf{r}$
- Velocity vector: $\mathbf{v}$

These define a 6D phase space ($\mu$-space).

The distribution function $f_\alpha(\mathbf{r}, \mathbf{v}, t)$ gives the density of particles of species $\alpha$ in phase space.

The number of particles in a small phase space volume is:

$$
d^6 N_\alpha = f_\alpha(\mathbf{r}, \mathbf{v}, t)\, d^3r\, d^3v
$$

---

## 🔷 2. Particle Motion in Phase Space

Under an external force $\mathbf{F}$:

$$
\mathbf{r}' = \mathbf{r} + \mathbf{v}\, dt
$$

$$
\mathbf{v}' = \mathbf{v} + \mathbf{a}\, dt
\quad \text{where} \quad \mathbf{a} = \frac{\mathbf{F}}{m_\alpha}
$$

---

## 🔷 3. Conservation of Particles (Collisionless Case)

In absence of collisions, number of particles is conserved:

$$
f_\alpha(\mathbf{r}', \mathbf{v}', t + dt)\, d^3r'\, d^3v'
=
f_\alpha(\mathbf{r}, \mathbf{v}, t)\, d^3r\, d^3v
$$

---

## 🔷 4. Jacobian and Phase Volume Conservation

The transformation from $(\mathbf{r}, \mathbf{v})$ to $(\mathbf{r}', \mathbf{v}')$ has Jacobian:

$$
|J| = 1
$$

(neglecting higher-order terms in $dt$)

Thus:

$$
d^3r'\, d^3v' = d^3r\, d^3v
$$

So we get:

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
=
f_\alpha(\mathbf{r}, \mathbf{v}, t)
$$

---

## 🔷 5. Taylor Expansion

Expanding the LHS using Taylor series:

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
\approx
f_\alpha + \left[
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
\right] dt
$$

Substituting and cancelling terms:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
= 0
$$

This is the **collisionless Boltzmann equation**  
(or **Liouville’s theorem**).

---

## 🔷 6. Inclusion of Collisions

Collisions introduce a change in particle number inside phase space:

$$
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
$$

Thus, the full equation becomes:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
=
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
$$

---

## 🔷 7. Boltzmann Collision Integral

For binary elastic collisions:

$$
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
=
\sum_\beta \iint
\left( f_\alpha' f_{\beta1}' - f_\alpha f_{\beta1} \right)
\, g\, \sigma(\Omega)\, d\Omega\, d^3 v_1
$$

### Where:

- $f_\alpha, f_{\beta1}$ → before collision  
- $f_\alpha', f_{\beta1}'$ → after collision  
- $g = |\mathbf{v} - \mathbf{v}_1|$ → relative velocity  
- $\sigma(\Omega)$ → differential cross-section  
- $d\Omega$ → solid angle element  

---

## 🔷 8. Final Form of Boltzmann Equation

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
=
\sum_\beta \iint
\left( f_\alpha' f_{\beta1}' - f_\alpha f_{\beta1} \right)
\, g\, \sigma(\Omega)\, d\Omega\, d^3 v_1
$$

---

## 🔷 9. Conclusion

- The Boltzmann equation governs the evolution of particle distributions in plasma  
- LHS → deterministic motion (transport + force)  
- RHS → stochastic effects (collisions)  
- Fundamental to kinetic theory and plasma physics  

---


