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
