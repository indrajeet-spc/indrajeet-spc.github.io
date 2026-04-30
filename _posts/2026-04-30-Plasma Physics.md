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

The Boltzmann equation is the fundamental equation of **kinetic theory of plasma**, describing how particle distributions evolve under:
- motion  
- electromagnetic forces  
- collisions  

The Boltzmann equation describes the time evolution of the **distribution function**  
$f(\mathbf{r}, \mathbf{v}, t)$ of particles in phase space.

- $\mathbf{r}$ → position  
- $\mathbf{v}$ → velocity  
- $t$ → time  

---

## 🔷 2. Distribution Function

Let:
- $f(\mathbf{r}, \mathbf{v}, t)\, d^3r\, d^3v$  
  = number of particles in phase space element

---

## 🔷 3. Total Time Rate of Change

The total derivative of $f$ is:

$$
\frac{df}{dt}
= \frac{\partial f}{\partial t}
+ \frac{d\mathbf{r}}{dt} \cdot \nabla_{\mathbf{r}} f
+ \frac{d\mathbf{v}}{dt} \cdot \nabla_{\mathbf{v}} f
$$

---

## 🔷 4. Equations of Motion

From classical mechanics:

- Velocity:
  
  $$
  \frac{d\mathbf{r}}{dt} = \mathbf{v}
  $$

- Acceleration (Lorentz force):

  $$
  m \frac{d\mathbf{v}}{dt} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})
  $$

So:

$$
\frac{d\mathbf{v}}{dt} = \frac{q}{m}(\mathbf{E} + \mathbf{v} \times \mathbf{B})
$$

---

## 🔷 5. Substituting into Total Derivative

$$
\frac{df}{dt}
=
\frac{\partial f}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f
+ \frac{q}{m}(\mathbf{E} + \mathbf{v} \times \mathbf{B}) \cdot \nabla_{\mathbf{v}} f
$$

---

## 🔷 6. Effect of Collisions

In plasma, collisions change the distribution function.

So we write:

$$
\left( \frac{df}{dt} \right)_{\text{collisions}}
$$

---

## 🔷 7. Boltzmann Equation

Equating total change to collision effects:

$$
\frac{\partial f}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f
+ \frac{q}{m}(\mathbf{E} + \mathbf{v} \times \mathbf{B}) \cdot \nabla_{\mathbf{v}} f
=
\left( \frac{\partial f}{\partial t} \right)_{\text{coll}}
$$

---

## 🔷 8. Special Case: Collisionless Plasma

If collisions are negligible:

$$
\frac{\partial f}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f
+ \frac{q}{m}(\mathbf{E} + \mathbf{v} \times \mathbf{B}) \cdot \nabla_{\mathbf{v}} f
= 0
$$

This is called the **Vlasov Equation**.

---

## 🔷 9. Physical Interpretation

- First term → time evolution  
- Second term → spatial transport  
- Third term → acceleration due to EM fields  
- RHS → collisions  

---

