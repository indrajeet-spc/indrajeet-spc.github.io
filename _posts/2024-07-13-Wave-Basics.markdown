---
layout: post
title:  "UG-III: Wave Basics"
date:   2024-07-13 10:47:26 +0530
categories: lecture
---

## Wave Equation

The wave equation is a second-order linear partial differential equation for the description of waves. The general form of the wave equation is given by

$$ \nabla^2 \psi = \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2} $$

where $$v$$ is the speed of the wave and $$\psi$$ is the wave function. $$\nabla$$ is the Laplacian operator.

- Laplacian in Rectangular Coordinates

  $$ \nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} $$

  where $$x, y, z$$ are the spatial coordinates as shown in figure below:

  <img src="/MCD/assets/img/Math/Rectangular-C.png" alt="Interaction Process" class="my-custom-class" style="max-width:100%; height:auto;">

- Laplacian in Cylindrical Coordinates

  $$ \nabla^2 = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial }{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2}{\partial \phi^2} + \frac{\partial^2}{\partial z^2} $$

  where $$r, \phi, z$$ are the spatial coordinates as shown in figure below:

  <img src="/MCD/assets/img/Math/Cylindirical-C.png" alt="Interaction Process" class="my-custom-class" style="max-width:100%; height:auto;">

- Laplacian in Spherical Coordinates

  $$ \nabla^2 = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial }{\partial r} \right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial }{\partial \theta} \right) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi^2} $$

  where $$r, \theta, \phi$$ are the spatial coordinates as shown in figure below:

  <img src="/MCD/assets/img/Math/Spherical-C.png" alt="Interaction Process" class="my-custom-class" style="max-width:100%; height:auto;">

## Types of Waves

- **Mechanical Waves**: These waves require a medium for their propagation. Examples include sound waves, water waves, and seismic waves.

- **Electromagnetic Waves**: These waves do not require a medium for their propagation. Examples include light waves, radio waves, and microwaves.

- **Transverse Waves**: In these waves, the particles of the medium vibrate perpendicular to the direction of wave propagation. Examples include light waves and water waves. Figure below shows the transverse wave:

  <img src="/MCD/assets/img/Waves/Transverse.png" alt="Wave Properties" class="my-custom-class" style="max-width:100%; height:auto;">

- **Longitudinal Waves**: In these waves, the particles of the medium vibrate parallel to the direction of wave propagation. Examples include sound waves and seismic waves. Figure below shows the longitudinal wave:

    <img src="/MCD/assets/img/Waves/Longitudinal.png" alt="Wave Properties" class="my-custom-class" style="max-width:100%; height:auto;">

- **Progressive Waves**: These waves propagate in a single direction. Examples include plane waves and spherical waves.

- **Standing Waves**: These waves are formed by the superposition of two waves of the same frequency and amplitude traveling in opposite directions. Examples include the vibrations of a guitar string and the resonance of a wine glass.

- **Damped Waves**: These waves decrease in amplitude over time due to the loss of energy. Examples include the vibrations of a guitar string with a damper and the oscillations of a pendulum in a viscous medium.

- **Resonant Waves**: These waves are characterized by a specific frequency at which they resonate. Examples include the vibrations of a tuning fork and the oscillations of a pendulum at its natural frequency.

- **Polarized Waves**: These waves have oscillations in a specific direction. Examples include light waves and water waves. Figure below shows the polarized wave:

  <img src="/MCD/assets/img/Waves/Polarized-Light.png" alt="Wave Properties" class="my-custom-class" style="max-width:100%; height:auto;">


## Wave Properties


- **Amplitude**: The maximum displacement of a wave from its equilibrium position.

- **Wavelength**: The distance between two consecutive points in a wave that are in phase.

- **Frequency**: The number of complete cycles of a wave that occur in one second.

- **Period**: The time taken for one complete cycle of a wave.

- **Phase**: The position of a point in a wave relative to its cycle.

- **Speed**: The rate at which a wave propagates through a medium.

- **Direction of Propagation**: The direction in which a wave travels.

- **Polarization**: The orientation of the oscillations of a wave.

- **Interference**: The superposition of two or more waves to form a new wave.

- **Diffraction**: The bending of waves around obstacles and through openings.

- **Refraction**: The change in the direction of a wave as it passes from one medium to another.

- **Reflection**: The bouncing back of a wave when it encounters a boundary.


## Plane and Spherical Waves

Plane waves are waves that propagate in a direction perpendicular to the wavefront. Spherical waves are waves that propagate in all directions from a point source. 

The wave equation for plane waves is given by

$$ \psi(x, t) = A \sin(kx - \omega t + \phi) $$

where $$A$$ is the amplitude, $$k$$ is the wave number, $$\omega$$ is the angular frequency, and $$\phi$$ is the phase angle.

Another general form of the wave equation in terms of imaginary numbers is given by

$$ \psi(x, t) = A e^{i(kx - \omega t + \phi)} $$

where $$i=\sqrt{-1}$$ is the imaginary unit. These waves are called Plane Waves as they propagate in a single direction making a plane wavefront as shown in figure below:

<img src="/MCD/assets/img/Waves/Plane.png" alt="Wave Properties" class="my-custom-class" style="max-width:100%; height:auto;">

The wave equation for spherical waves is given by

$$ \psi(r, t) = \frac{A}{r} e^{i(kr - \omega t + \phi)} $$

where $$r$$ is the distance from the source. These waves are called Spherical Waves as they propagate in all directions from a point source as shown in figure below:

<img src="/MCD/assets/img/Waves/Spherical.png" alt="Wave Properties" class="my-custom-class" style="max-width:100%; height:auto;">



---
