---
layout: post
title:  "PG-III: Digital Electronics"
date:   2024-12-06 10:47:26 +0530
categories: lecture
---

# Wave Equation

The wave equation is a second-order linear partial differential equation used to describe the propagation of waves such as sound, light, and water waves.

---

## 1. General Form of the Wave Equation

The three-dimensional wave equation is given by:

$$
\nabla^2 \psi = \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}
$$

where:

- $$\psi(x, y, z, t)$$ = wave function  
- $$v$$ = velocity of the wave  
- $$\nabla^2$$ = Laplacian operator  

---

## 2. Expansion of the Laplacian Operator

In rectangular (Cartesian) coordinates, the Laplacian operator is defined as:

$$
\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}
$$

---

## 3. Substituting Laplacian into Wave Equation

Substitute the expression of $$\nabla^2$$ into the wave equation:

$$
\left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} \right)\psi
= \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}
$$

---

## 4. Expanded Form

Applying the operator to $$\psi$$:

$$
\frac{\partial^2 \psi}{\partial x^2}
+ \frac{\partial^2 \psi}{\partial y^2}
+ \frac{\partial^2 \psi}{\partial z^2}
= \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}
$$

---

## 5. One-Dimensional Wave Equation (Special Case)

If the wave propagates only along the x-direction, then:

$$
\frac{\partial^2 \psi}{\partial x^2}
= \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}
$$

---

## 6. Standard Solution (D’Alembert Form)

A general solution of the 1D wave equation is:

$$
\psi(x,t) = f(x - vt) + g(x + vt)
$$

where:

- $$f(x - vt)$$ represents a wave traveling in the +x direction  
- $$g(x + vt)$$ represents a wave traveling in the −x direction  

---

## 7. Physical Interpretation

- The equation shows how the spatial variation of the wave relates to its time evolution.
- The speed $$v$$ determines how fast the disturbance propagates.
- The equation applies to many physical systems such as:
  - Vibrating strings
  - Sound waves
  - Electromagnetic waves

---

<!-- Optional figure placeholder -->
<!-- <img src="/assets/css/FILE/" alt="Wave propagation diagram" style="max-width:100%; height:auto;"> -->