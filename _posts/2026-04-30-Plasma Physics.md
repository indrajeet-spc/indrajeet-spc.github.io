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

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
-
f_\alpha(\mathbf{r}, \mathbf{v}, t)
= 0
$$

Expanding using Taylor series:

$$
\begin{aligned}
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
&= f_\alpha(\mathbf{r},\; \mathbf{v},\; t) \\
&\quad + \Bigg[
\frac{\partial f_\alpha}{\partial t}
+ v_x \frac{\partial f_\alpha}{\partial x}
+ v_y \frac{\partial f_\alpha}{\partial y}
+ v_z \frac{\partial f_\alpha}{\partial z} \\
&\qquad + a_x \frac{\partial f_\alpha}{\partial v_x}
+ a_y \frac{\partial f_\alpha}{\partial v_y}
+ a_z \frac{\partial f_\alpha}{\partial v_z}
\Bigg] dt
\end{aligned}
$$

neglecting the terms of $$ (dt)^2 $$ and higher terms.

Using del operator notation 

$$
\nabla = \hat{x} \frac{\partial}{\partial x} + \hat{y} \frac{\partial}{\partial y} + \hat{z} \frac{\partial}{\partial z}
$$

del operator in velocity space

$$
\nabla_v = \hat{x} \frac{\partial}{\partial v_x} + \hat{y} \frac{\partial}{\partial v_y} + \hat{z} \frac{\partial}{\partial v_z}
$$

We may write,

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)\\
\approx
f_\alpha (\mathbf{r},\; \mathbf{v},\;t) + \left[
\frac{\partial f_\alpha (\mathbf{r},\; \mathbf{v},\;t)}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\ (\mathbf{r},\; \mathbf{v},\;t)
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha (\mathbf{r},\; \mathbf{v},\;t)
\right] dt
$$

Now,

$$
f_\alpha(\mathbf{r} + \mathbf{v}dt,\; \mathbf{v} + \mathbf{a}dt,\; t + dt)
- f_\alpha(\mathbf{r}, \mathbf{v}, t) =0
$$

$$
f_\alpha (\mathbf{r},\; \mathbf{v},\;t) + \left[
\frac{\partial f_\alpha (\mathbf{r},\; \mathbf{v},\;t)}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\ (\mathbf{r},\; \mathbf{v},\;t)
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha (\mathbf{r},\; \mathbf{v},\;t)
\right] dt
- f_\alpha(\mathbf{r}, \mathbf{v}, t) = 0
$$

$$
\left[
\frac{\partial f_\alpha (\mathbf{r},\; \mathbf{v},\;t)}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\ (\mathbf{r},\; \mathbf{v},\;t)
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha (\mathbf{r},\; \mathbf{v},\;t)
\right] dt = 0
$$

$$
\frac{\partial f_\alpha (\mathbf{r},\; \mathbf{v},\;t)}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\ (\mathbf{r},\; \mathbf{v},\;t)
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha (\mathbf{r},\; \mathbf{v},\;t) = 0
$$

This is the **collisionless Boltzmann equation**.

We can also write this as:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
=0
$$

When collisions are included, the equation becomes:

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \mathbf{a} \cdot \nabla_{\mathbf{v}} f_\alpha
=
\left( \frac{\partial f_\alpha}{\partial t} \right)_{\text{coll}}
$$

# 📘 The Vlasov Equation

The motion of plasma is governed by externally applied fields as well as by the macroscopic, self-consistent internal fields that arise due to the collective behavior of charged particles. These internal fields are averaged over space and time, thereby smoothing out microscopic fluctuations. The dynamics of such a system are described by the **Vlasov equation**, which is a partial differential equation governing the time evolution of the distribution function in phase space. This equation explicitly incorporates the influence of the self-consistent macroscopic electromagnetic fields.

$$
\frac{\partial f_\alpha}{\partial t}
+ \mathbf{v} \cdot \nabla_{\mathbf{r}} f_\alpha
+ \frac{q_\alpha}{m_\alpha}
\left(
\mathbf{E} + \mathbf{v} \times \mathbf{B}
\right)
\cdot \nabla_{\mathbf{v}} f_\alpha
= 0
$$

---

## Component Form

$$
\begin{aligned}
\frac{\partial f_\alpha}{\partial t}
&+ v_x \frac{\partial f_\alpha}{\partial x}
+ v_y \frac{\partial f_\alpha}{\partial y}
+ v_z \frac{\partial f_\alpha}{\partial z} \\
&+ \frac{q_\alpha}{m_\alpha}
\Big[
(E_x + (\mathbf{v} \times \mathbf{B})_x)\frac{\partial f_\alpha}{\partial v_x} \\
&\quad + (E_y + (\mathbf{v} \times \mathbf{B})_y)\frac{\partial f_\alpha}{\partial v_y} \\
&\quad + (E_z + (\mathbf{v} \times \mathbf{B})_z)\frac{\partial f_\alpha}{\partial v_z}
\Big]
= 0
\end{aligned}
$$

---

## Meaning of Terms

- \( f_\alpha(\mathbf{r}, \mathbf{v}, t) \): distribution function  
- \( q_\alpha, m_\alpha \): charge and mass  
- \( \mathbf{E}, \mathbf{B} \): electromagnetic fields  
- \( \nabla_{\mathbf{r}} \): spatial gradient  
- \( \nabla_{\mathbf{v}} \): velocity-space gradient  

---

## Key Insight

- This is the **collisionless Boltzmann equation with Lorentz force**
- Fundamental equation of **kinetic plasma theory**
