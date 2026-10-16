---
layout: default
title: "MJ-2: Mathematical Physics-I | Dr. Indrajeet Kumar"
heading: "MJ-2: Mathematical Physics-I"
kicker: "MJ-2 LECTURE NOTES"
subtitle: "Mathematical Physics-I"
permalink: /mj-2/
---

These notes introduce mathematical tools used throughout physics. Each topic starts
with the meaning of the symbols, then develops the main result and shows how to use it.
Read the worked steps in order, and check that units and assumptions make sense before
using a formula.


## UNIT-I: Vector Calculus (15 Lectures)

<a id="topic-001-scalar-and-vector-fields"></a>
### Scalar and vector fields

A **field** assigns a physical or mathematical quantity to every point in a region.
Temperature in a room is a scalar field: at each position it has one number. Wind
velocity is a vector field: at each position it has both a magnitude and a direction.
In three-dimensional Cartesian coordinates, a position is
<br>\\[\mathbf r = x\hat{\mathbf i}+y\hat{\mathbf j}+z\hat{\mathbf k}\\]<br>
and common field notations are
<br>\\[\phi(x,y,z) \quad\text{and}\quad \mathbf A(x,y,z)=A_x\hat{\mathbf i}+A_y\hat{\mathbf j}+A_z\hat{\mathbf k}\\]<br>
Here \\(\phi\\) is a scalar and \\(\mathbf A\\) is a vector. For example, the temperature
\\(T(x,y,z)\\) and the gravitational field \\(\mathbf g(x,y,z)\\) are fields. A field is
**steady** if it does not change with time, and **uniform** if it has the same value
everywhere. These are different ideas: a steady field may vary from place to place.

<a id="topic-002-vector-differentiation-directional-and-normal-derivatives"></a>
### Vector differentiation: directional and normal derivatives

Suppose a scalar field \\(\phi\\) is measured near a point. To find how rapidly it changes
in a specified direction, choose a unit vector \\(\hat{\mathbf n}\\) in that direction.
The directional derivative is the rate of change per unit distance:
<br>\\[D_{\hat{\mathbf n}}\phi = \lim_{h\to 0}\frac{\phi(\mathbf r+h\hat{\mathbf n})-\phi(\mathbf r)}{h} = \nabla\phi\cdot\hat{\mathbf n}\\]<br>
The gradient \\(\nabla\phi\\) will be developed in the next topic. The dot product selects
the component of the gradient along the chosen direction. For a surface described by
<br>\\[F(x,y,z)=0\,\text{,}\\]<br> the gradient \\(\nabla F\\) is perpendicular to the surface. Thus a
normal derivative is the directional derivative along a unit normal
\\(\hat{\mathbf n}\\):
<br>\\[\frac{\partial \phi}{\partial n}=\nabla\phi\cdot\hat{\mathbf n}\\]<br>
For <br>\\[\phi=x^2+y^2\,\text{,}\\]<br> the rate of change in the positive \\(x\\)-direction is
\\(2x\\), while in the positive \\(y\\)-direction it is \\(2y\\). A directional derivative
can be negative: that means the field decreases as we move in the chosen direction.

<a id="topic-003-gradient-of-a-scalar-field-and-its-geometrical-interpretatio"></a>
### Gradient of a scalar field and its geometrical interpretation

The **gradient** collects the three spatial rates of change of a scalar field into a
vector. In Cartesian coordinates,
<br>\\[\nabla\phi=\frac{\partial\phi}{\partial x}\hat{\mathbf i}+\frac{\partial\phi}{\partial y}\hat{\mathbf j}+\frac{\partial\phi}{\partial z}\hat{\mathbf k}\\]<br>
Its direction is the direction in which \\(\phi\\) increases most rapidly; its magnitude
is that maximum rate per unit distance. The gradient is perpendicular to a level
surface <br>\\[\phi=\text{constant}\,\text{,}\\]<br> because moving along that surface does not change
\\(\phi\\). The change for a small displacement \\(d\mathbf r\\) is
<br>\\[d\phi=\nabla\phi\cdot d\mathbf r\\]<br>
<figure class="lecture-figure">
  <img src="{{ '/images/lecture/vector-gradient.svg' | relative_url }}" alt="Nested scalar-field level curves with a gradient vector crossing one curve perpendicularly">
  <figcaption>The gradient is normal to a level curve and points toward increasing field value.</figcaption>
</figure>
**Example.** Let <br>\\[\phi=x^2+y^2+z^2\,\text{.}\\]<br> Then
<br>\\[\nabla\phi=2x\hat{\mathbf i}+2y\hat{\mathbf j}+2z\hat{\mathbf k}\\]<br>
At \\((1,0,0)\\), the gradient points along positive \\(x\\), normal to the spherical
level surface through that point. In electrostatics the electric field is the negative
gradient of electric potential: the field points toward decreasing potential.

<a id="topic-004-divergence-and-curl-of-a-vector-field-and-their-physical-int"></a>
### Divergence and curl of a vector field and their physical interpretation

For <br>\\[\mathbf A=A_x\hat{\mathbf i}+A_y\hat{\mathbf j}+A_z\hat{\mathbf k}\,\text{,}\\]<br> **divergence**
measures the net outward flow of the field from a tiny volume per unit volume.
**Curl** measures its local tendency to circulate. In Cartesian coordinates,
<br>\\[\nabla\cdot\mathbf A=\frac{\partial A_x}{\partial x}+\frac{\partial A_y}{\partial y}+\frac{\partial A_z}{\partial z}\\]<br>
<br>\\[\nabla\times\mathbf A=\left(\frac{\partial A_z}{\partial y}-\frac{\partial A_y}{\partial z}\right)\hat{\mathbf i}+\left(\frac{\partial A_x}{\partial z}-\frac{\partial A_z}{\partial x}\right)\hat{\mathbf j}+\left(\frac{\partial A_y}{\partial x}-\frac{\partial A_x}{\partial y}\right)\hat{\mathbf k}\\]<br>
For fluid velocity, positive divergence means local expansion, negative divergence
means compression, and zero divergence means incompressible flow. Curl is related to
the rotation of a small fluid element. For example, <br>\\[\mathbf A=(-y,x,0)\\]<br> circulates
about the \\(z\\)-axis and has curl \\(2\hat{\mathbf k}\\). The same field has zero
divergence: its circulation does not imply a net source.

<a id="topic-005-line"></a>
### Line

A **line integral** adds contributions along a curve. Let a curve \\(C\\) be described by
position \\(\mathbf r(t)\\), from <br>\\[t=a\\]<br> to <br>\\[t=b\,\text{.}\\]<br> Then a scalar-field line integral
adds the scalar value times each small length:
<br>\\[\int_C \phi\,ds=\int_a^b \phi(\mathbf r(t))\,\left|\frac{d\mathbf r}{dt}\right|dt\\]<br>
A vector-field line integral uses the displacement direction:
<br>\\[\int_C \mathbf A\cdot d\mathbf r=\int_a^b \mathbf A(\mathbf r(t))\cdot\frac{d\mathbf r}{dt}\,dt\\]<br>
The second integral is work when \\(\mathbf A\\) is a force. For a constant force
\\(\mathbf F\\) moving an object from \\(\mathbf r_1\\) to \\(\mathbf r_2\\), the work is
\\(\mathbf F\cdot(\mathbf r_2-\mathbf r_1)\\). Reversing the direction of travel reverses
the sign of a vector line integral. The result is independent of path for a
conservative field, such as an electrostatic force in a region without changing
magnetic fields.

<a id="topic-006-surface"></a>
### surface

A **surface integral** adds a quantity over a two-dimensional surface. A scalar surface
integral accumulates the field over area:
<br>\\[\iint_S \phi\,dS\\]<br>
A vector surface integral, or **flux**, counts how much of a vector field passes through
the surface. Choose a unit normal \\(\hat{\mathbf n}\\); the oriented area element is
<br>\\[d\mathbf S=\hat{\mathbf n}\,dS\,\text{,}\\]<br> so
<br>\\[\iint_S \mathbf A\cdot d\mathbf S=\iint_S \mathbf A\cdot\hat{\mathbf n}\,dS\\]<br>
The normal determines the sign. For a closed surface, the standard convention is to
point the normal outwards. A field tangent to a surface contributes no flux there;
a field perpendicular to it contributes its full normal component. For a flat surface
of area \\(S\\) in a uniform field making angle \\(\theta\\) with its normal, the flux is
\\(S|\mathbf A|\cos\theta\\).

<a id="topic-007-volume-integrals"></a>
### volume integrals

A **volume integral** adds a quantity throughout a three-dimensional region \\(V\\):
<br>\\[\iiint_V \phi\,dV\\]<br>
If \\(\phi\\) is mass density, the integral gives total mass; if it is charge density, it
gives total charge. In Cartesian coordinates, a small volume is
<br>\\[dV=dx\,dy\,dz\,\text{.}\\]<br> The limits must cover the region exactly once. For a rectangular
box with constant density \\(\rho\\), the total mass is density times volume:
<br>\\[M=\iiint_V \rho\,dV=\rho abc\\]<br>
for side lengths \\(a\\), \\(b\\), and \\(c\\). In cylindrical and spherical coordinates the
volume elements include geometric factors; omitting those factors is a common source
of error.

<a id="topic-008-gauss-divergence-theorem-and-its-applications"></a>
### Gauss' divergence theorem and its applications

Gauss' divergence theorem connects the outward flux through a closed surface to the
divergence inside the volume it encloses:
<br>\\[\iint_{\partial V}\mathbf A\cdot d\mathbf S=\iiint_V(\nabla\cdot\mathbf A)\,dV\\]<br>
Here \\(\partial V\\) is the closed boundary of volume \\(V\\). The theorem says that the
total amount flowing out is the sum of all local sources inside. The surface normal
must point outward. **Example:** for <br>\\[\mathbf A=(x,y,z)\,\text{,}\\]<br> the divergence is \\(3\\).
For a sphere of radius \\(R\\), the right side is \\(3\\) times its volume, or
\\(4\pi R^3\\). On the sphere, \\(\mathbf A\\) is normal and has magnitude \\(R\\), so the
surface flux is also <br>\\[R(4\pi R^2)=4\pi R^3\,\text{.}\\]<br> This is especially useful when the
surface is symmetric, as in Gauss' law for electric fields.

<a id="topic-009-green-s-and-stokes-theorems-and-their-applications"></a>
### Green's and Stokes' theorems and their applications

**Green's theorem** is the planar version of Stokes' theorem. For a positively
oriented closed curve \\(C\\) enclosing a flat region \\(D\\),
<br>\\[\oint_C(P\,dx+Q\,dy)=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA\\]<br>
It turns circulation around the boundary into the sum of local two-dimensional curl.
**Stokes' theorem** generalizes this relation to a surface \\(S\\) with boundary curve
\\(\partial S\\):
<br>\\[\oint_{\partial S}\mathbf A\cdot d\mathbf r=\iint_S(\nabla\times\mathbf A)\cdot d\mathbf S\\]<br>
The direction of travel around the boundary and the surface normal obey the
right-hand rule. For example, curl-free fields have zero circulation around any
contractible closed curve in a smooth region. Green's theorem is useful for converting
a difficult line integral into an area integral; Stokes' theorem can replace a
complicated surface by a simpler one with the same boundary.

<a id="topic-010-gradient"></a>
### Gradient

The symbol \\(\nabla\\), called **del** or **nabla**, is a differential operator. Applied
to a scalar field it gives the gradient. In Cartesian coordinates,
<br>\\[\nabla=\hat{\mathbf i}\frac{\partial}{\partial x}+\hat{\mathbf j}\frac{\partial}{\partial y}+\hat{\mathbf k}\frac{\partial}{\partial z}\\]<br>
**Worked example.** For <br>\\[\phi=xy+z^2\,\text{,}\\]<br> differentiate with respect to one coordinate
at a time:
<br>\\[\nabla\phi=y\hat{\mathbf i}+x\hat{\mathbf j}+2z\hat{\mathbf k}\\]<br>
At \\((2,3,1)\\), this is \\(3\hat{\mathbf i}+2\hat{\mathbf j}+2\hat{\mathbf k}\\). Its
magnitude is the steepest increase of \\(\phi\\), and the unit vector in its direction
is the direction of steepest ascent. If <br>\\[\nabla\phi=0\,\text{,}\\]<br> the point is stationary;
it may be a maximum, minimum, or saddle point, so further analysis is needed.

<a id="topic-011-divergence"></a>
### divergence

The divergence is a scalar formed by applying \\(\nabla\\) to a vector field using a dot
product. In Cartesian coordinates,
<br>\\[\nabla\cdot\mathbf A=\frac{\partial A_x}{\partial x}+\frac{\partial A_y}{\partial y}+\frac{\partial A_z}{\partial z}\\]<br>
Imagine a tiny box placed in a flowing fluid. The divergence is the net outward flow
through its faces per unit volume as the box shrinks to a point. For
<br>\\[\mathbf A=(x^2,y^2,z^2)\,\text{,}\\]<br>
<br>\\[\nabla\cdot\mathbf A=2x+2y+2z\\]<br>
At the origin it is zero; where the sum is positive, the field has local net outflow.
Zero divergence everywhere does not mean the field itself is zero: a uniform flow is
also divergence-free. In electromagnetism, Gauss' law relates electric-field
divergence to charge density.

<a id="topic-012-curl"></a>
### curl

The curl is the vector obtained from the cross product of \\(\nabla\\) with a vector
field. Its direction is the local rotation axis, and its magnitude measures
circulation per unit area in the perpendicular plane:
<br>\\[\nabla\times\mathbf A=\left(\frac{\partial A_z}{\partial y}-\frac{\partial A_y}{\partial z}\right)\hat{\mathbf i}+\left(\frac{\partial A_x}{\partial z}-\frac{\partial A_z}{\partial x}\right)\hat{\mathbf j}+\left(\frac{\partial A_y}{\partial x}-\frac{\partial A_x}{\partial y}\right)\hat{\mathbf k}\\]<br>
For <br>\\[\mathbf A=(-y,x,0)\,\text{,}\\]<br> the curl is \\(2\hat{\mathbf k}\\), indicating
counter-clockwise rotation in the \\(xy\\)-plane when viewed from positive \\(z\\).
For a gradient field, <br>\\[\nabla\times(\nabla\phi)=0\\]<br> if the derivatives are smooth.
This identity helps identify conservative fields and is central to Faraday's law.

<a id="topic-013-laplacian-in-cartesian"></a>
### Laplacian in Cartesian

The **Laplacian** of a scalar field is the divergence of its gradient. It measures
how the value at a point compares with nearby values:
<br>\\[\nabla^2\phi=\nabla\cdot\nabla\phi=\frac{\partial^2\phi}{\partial x^2}+\frac{\partial^2\phi}{\partial y^2}+\frac{\partial^2\phi}{\partial z^2}\\]<br>
For <br>\\[\phi=x^2+y^2+z^2\,\text{,}\\]<br> the Laplacian is \\(6\\). A positive value indicates a
local average curvature that is positive under the usual convention; it does not by
itself prove the point is a minimum in every direction. The Laplace equation
<br>\\[\nabla^2\phi=0\\]<br> describes source-free regions in electrostatics and steady-state
heat conduction. The Poisson equation
<br>\\[\nabla^2\phi=-\frac{\rho}{\epsilon_0}\\]<br>
describes electrostatic potential produced by charge density \\(\rho\\).

<a id="topic-014-spherical"></a>
### spherical

Spherical coordinates \\((r,\theta,\varphi)\\) use distance \\(r\\) from the origin,
polar angle \\(\theta\\) measured down from the positive \\(z\\)-axis, and azimuth
\\(\varphi\\) in the \\(xy\\)-plane. The Cartesian relations are
<br>\\[x=r\sin\theta\cos\varphi,\quad y=r\sin\theta\sin\varphi,\quad z=r\cos\theta\\]<br>
The volume element is
<br>\\[dV=r^2\sin\theta\,dr\,d\theta\,d\varphi\\]<br>
For a scalar \\(\phi\\), the Laplacian is
<br>\\[\nabla^2\phi=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\phi}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\phi}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2\phi}{\partial\varphi^2}\\]<br>
If the field depends only on radius, the angular derivatives vanish:
<br>\\[\nabla^2\phi=\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{d\phi}{dr}\right)\\]<br>
This symmetry reduction is useful for point charges, spherical masses, and isolated
heat sources.

<a id="topic-015-cylindrical-coordinate-systems"></a>
### cylindrical coordinate systems

Cylindrical coordinates \\((s,\varphi,z)\\) describe distance \\(s\\) from the
\\(z\\)-axis, azimuth \\(\varphi\\), and height \\(z\\). They are convenient for pipes,
wires, and rotation about an axis:
<br>\\[x=s\cos\varphi,\quad y=s\sin\varphi,\quad z=z\\]<br>
The volume element is
<br>\\[dV=s\,ds\,d\varphi\,dz\\]<br>
and the scalar Laplacian is
<br>\\[\nabla^2\phi=\frac{1}{s}\frac{\partial}{\partial s}\left(s\frac{\partial\phi}{\partial s}\right)+\frac{1}{s^2}\frac{\partial^2\phi}{\partial\varphi^2}+\frac{\partial^2\phi}{\partial z^2}\\]<br>
For an axisymmetric field independent of \\(\varphi\\), the middle term vanishes. For
a field independent of both \\(\varphi\\) and \\(z\\), only the radial term remains.
The factor \\(s\\) in \\(dV\\) and the \\(\frac{1}{s}\\) in the Laplacian come from the fact
that circles farther from the axis have greater circumference.

## UNIT-II: Differential Equations (15 Lectures)

<a id="topic-016-first-order-differential-equations-homogeneous"></a>
### First-order differential equations: homogeneous

A differential equation relates an unknown function to one or more of its
derivatives. A first-order equation contains only the first derivative. A common
**homogeneous first-order** form is
<br>\\[\frac{dy}{dx}=F\left(\frac{y}{x}\right)\\]<br>
where the right side depends only on the ratio \\(\frac{y}{x}\\). Use the substitution
<br>\\[v=\frac{y}{x}\,\text{,}\\]<br> so <br>\\[y=vx\\]<br> and <br>\\[\frac{dy}{dx}=v+x\,\frac{dv}{dx}\,\text{.}\\]<br> The equation becomes
separable in \\(v\\) and \\(x\\). **Example:**
<br>\\[\frac{dy}{dx}=1+\frac{y}{x}\\]<br>
Put <br>\\[y=vx\,\text{.}\\]<br> Then
<br>\\[v+x\,\frac{dv}{dx}=1+v\\]<br>
so <br>\\[\frac{dv}{dx}=\frac{1}{x}\,\text{.}\\]<br> Integrating gives
<br>\\[v=\ln|x|+C\,\text{,}\\]<br> and therefore
<br>\\[y=x\bigl(\ln|x|+C\bigr)\\]<br>
This solution is valid on an interval that does not cross <br>\\[x=0\,\text{.}\\]<br> Always
substitute a proposed solution into the original equation to check it.

<a id="topic-017-non-homogeneous"></a>
### non-homogeneous

In many introductory problems, **non-homogeneous first-order equations** are linear:
<br>\\[\frac{dy}{dx}+P(x)y=Q(x)\\]<br>
The term \\(Q(x)\\) is the forcing term. If it is nonzero, the equation is
non-homogeneous. Multiply by the integrating factor
<br>\\[\mu(x)=e^{\int P(x)\,dx}\\]<br>
The left side becomes a product derivative:
<br>\\[\frac{d}{dx}\bigl(\mu y\bigr)=\mu Q\\]<br>
Integrate, then divide by \\(\mu\\). **Example:** solve
<br>\\[\frac{dy}{dx}+2y=4\\]<br>
Here <br>\\[\mu=e^{2x}\,\text{,}\\]<br> so
<br>\\[\frac{d}{dx}(e^{2x}y)=4e^{2x}\\]<br>
Integration gives <br>\\[e^{2x}y=2e^{2x}+C\,\text{,}\\]<br> hence
<br>\\[y=2+Ce^{-2x}\\]<br>
The constant \\(C\\) is fixed by an initial condition such as <br>\\[y(0)=y_0\,\text{.}\\]<br>

Another useful first-order type is **separable**: rearrange it to
<br>\\[g(y)\,dy=f(x)\,dx\,\text{,}\\]<br> integrate both sides, and solve for \\(y\\) when possible.
Separable equations need not be linear.

<a id="topic-018-exact"></a>
### exact

An equation
<br>\\[M(x,y)\,dx+N(x,y)\,dy=0\\]<br>
is **exact** if it is the total differential of some potential function \\(\Psi(x,y)\\):
<br>\\[d\Psi=\Psi_x\,dx+\Psi_y\,dy\,\text{.}\\]<br> Thus <br>\\[M=\Psi_x\\]<br> and <br>\\[N=\Psi_y\,\text{.}\\]<br> For
smooth functions on a simply connected region, a practical test is
<br>\\[\frac{\partial M}{\partial y}=\frac{\partial N}{\partial x}\\]<br>
When this holds, the solution is <br>\\[\Psi(x,y)=C\,\text{.}\\]<br> **Example:** for
<br>\\[(2x+y)\,dx+(x+2y)\,dy=0\,\text{,}\\]<br> the cross derivatives are both \\(1\\). Integrate
\\(M\\) with respect to \\(x\\):
<br>\\[\Psi=x^2+xy+g(y)\\]<br>
Differentiate with respect to \\(y\\) and match <br>\\[N=x+2y\,\text{.}\\]<br> This gives
<br>\\[g'(y)=2y\,\text{,}\\]<br> so <br>\\[g(y)=y^2\\]<br> (an additive constant is absorbed into \\(C\\)).
The implicit solution is
<br>\\[x^2+xy+y^2=C\\]<br>

<a id="topic-019-inexact-equations-integrating-factors"></a>
### inexact equations; integrating factors

If the cross-derivative test fails, the equation is **inexact**: no potential
\\(\Psi\\) directly generates its two coefficients. Sometimes multiplying by a
nonzero function \\(\mu\\), called an **integrating factor**, makes it exact:
<br>\\[\mu M\,dx+\mu N\,dy=0\\]<br>
For example, <br>\\[y\,dx+2x\,dy=0\\]<br> is not exact since the cross derivatives are
\\(1\\) and \\(2\\). On the region <br>\\[x>0\,\text{,}\\]<br> multiply by the integrating factor
<br>\\[\mu(x)=\frac{1}{\sqrt{x}}\,\text{.}\\]<br> The new coefficients are \\(\frac{y}{\sqrt{x}}\\) and
\\(2\sqrt{x}\\), whose cross derivatives both equal \\(\frac{1}{\sqrt{x}}\\). A potential
function is <br>\\[\Psi=2y\sqrt{x}\,\text{,}\\]<br> so the solution is
<br>\\[2y\sqrt{x}=C\\]<br>
In general, if \\(\frac{M_y-N_x}{N}\\) depends only on \\(x\\), then an integrating factor
depending only on \\(x\\) is
<br>\\[\mu(x)=e^{\int \frac{M_y-N_x}{N}\,dx}\\]<br>
An analogous test gives an integrating factor depending only on \\(y\\). Check the
region where the factor is defined; multiplying or dividing by an expression that
can be zero may add or remove solutions.

<a id="topic-020-homogeneous-equations-with-constant-coefficients"></a>
### Homogeneous equations with constant coefficients

For a linear differential equation with constant coefficients, replace each derivative
operator by a power of a trial exponent. For the second-order homogeneous equation
<br>\\[a\frac{d^2y}{dx^2}+b\frac{dy}{dx}+cy=0\\]<br>
try <br>\\[y=e^{rx}\,\text{.}\\]<br> This gives the **characteristic equation**
<br>\\[ar^2+br+c=0\\]<br>
The roots determine the form of the solution:

- Distinct real roots \\(r_1,r_2\\): <br>\\[y=C_1e^{r_1x}+C_2e^{r_2x}\,\text{.}\\]<br>
- A repeated real root \\(r\\): <br>\\[y=(C_1+C_2x)e^{rx}\,\text{.}\\]<br>
- Complex roots <br>\\[r=\alpha\pm i\beta\,\text{:}\\]<br>
  <br>\\[y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)\,\text{.}\\]<br>

For instance, <br>\\[y''-3y'+2y=0\\]<br> has characteristic roots \\(1\\) and \\(2\\), so
<br>\\[y=C_1e^x+C_2e^{2x}\\]<br>
Two independent constants are expected because the equation is second order. Initial
values determine them. Higher-order equations use the same idea with a higher-degree
characteristic polynomial.

<a id="topic-021-cauchy-euler-differential-equation"></a>
### Cauchy-Euler differential equation

The **Cauchy-Euler** (or equidimensional) equation has powers of the independent
variable matching the derivative order:
<br>\\[x^2y''+a x y'+b y=0,\qquad x\ne0\\]<br>
Because differentiating a power of \\(x\\) preserves this pattern, try
<br>\\[y=x^m\,\text{.}\\]<br> Substitution produces the auxiliary equation
<br>\\[m(m-1)+am+b=0\\]<br>
For distinct roots \\(m_1,m_2\\), the solution is
\\(C_1x^{m_1}+C_2x^{m_2}\\) on an interval of fixed sign of \\(x\\). A repeated
root gives \\(x^m(C_1+C_2\ln|x|)\\). For complex roots <br>\\[m=\alpha\pm i\beta\,\text{,}\\]<br>
the real solution is
<br>\\[y=|x|^\alpha\left(C_1\cos(\beta\ln|x|)+C_2\sin(\beta\ln|x|)\right)\\]<br>
**Example:** for <br>\\[x^2y''-xy'+y=0\,\text{,}\\]<br> the auxiliary equation is
<br>\\[m(m-1)-m+1=(m-1)^2=0\,\text{.}\\]<br> Thus
<br>\\[y=x(C_1+C_2\ln|x|)\\]<br>
The point <br>\\[x=0\\]<br> is generally a singular point of this equation.

<a id="topic-022-simultaneous-first-and-second-order-differential-equations"></a>
### Simultaneous first- and second-order differential equations

When several unknown functions are coupled, their differential equations must be
solved together. A typical pair is
<br>\\[\frac{dx}{dt}=y,\qquad \frac{dy}{dt}=-\omega^2x\\]<br>
Differentiate the first equation and use the second:
<br>\\[\frac{d^2x}{dt^2}=-\omega^2x\\]<br>
This is the simple harmonic oscillator equation. Its solution is
<br>\\[x=A\cos(\omega t+\phi),\qquad y=\frac{dx}{dt}=-A\omega\sin(\omega t+\phi)\\]<br>
The two first-order equations describe the same motion as one second-order equation,
but also track both position and velocity. More generally, eliminate one variable by
differentiating and substituting, or write the system in matrix form and find its
eigenvalues. For a first-order variable \\(u\\) coupled to a second-order variable
\\(x\\), first rewrite the second-order equation using velocity
<br>\\[v=\frac{dx}{dt}\,\text{;}\\]<br> the complete system then contains three first-order equations.
Initial values are needed for every independent dynamical variable.

<a id="topic-023-partial-differential-equations-in-two-or-three-independent-v"></a>
### Partial differential equations in two or three independent variables using separation of variables

A **partial differential equation (PDE)** contains partial derivatives of a function
of several variables. For example, temperature \\(u(x,t)\\) depends on position and
time. **Separation of variables** seeks solutions that are products of simpler
single-variable functions. For a two-variable function, assume
<br>\\[u(x,t)=X(x)T(t)\\]<br>
Substitute this form into the PDE, divide by \\(XT\\), and arrange so a function of
\\(x\\) equals a function of \\(t\\). Since the variables vary independently, each
side must equal a constant. The PDE becomes ordinary differential equations, then
boundary and initial conditions select allowed constants and modes.

For example, the one-dimensional wave equation
<br>\\[u_{tt}=c^2u_{xx}\\]<br> gives
<br>\\[\frac{T''}{c^2T}=\frac{X''}{X}=-k^2\\]<br>
Thus <br>\\[X''+k^2X=0\\]<br> and <br>\\[T''+c^2k^2T=0\,\text{.}\\]<br> A boundary condition such as fixed
ends determines the permitted values of \\(k\\). In three variables, use a product
such as \\(X(x)Y(y)T(t)\\), assigning a separation constant to each independent
coordinate. Separation finds important building-block solutions; a general solution
is often a sum of modes.

<a id="topic-024-laplace-s-equation-for-rectangular-geometry"></a>
### Laplace's equation for rectangular geometry

Laplace's equation describes a source-free potential or a steady temperature:
<br>\\[\nabla^2u=0\\]<br>
In a two-dimensional rectangle with coordinates \\(x,y\\), it is
<br>\\[\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0\\]<br>
Assume <br>\\[u=X(x)Y(y)\,\text{.}\\]<br> Dividing by \\(XY\\) yields
<br>\\[\frac{X''}{X}=-\frac{Y''}{Y}=-k^2\\]<br>
so <br>\\[X''+k^2X=0\\]<br> and <br>\\[Y''-k^2Y=0\,\text{.}\\]<br> The solutions are sinusoidal in one
coordinate and hyperbolic or exponential in the other. Boundary conditions determine
the coefficients. For example, if the vertical edges are held at zero potential,
<br>\\[X(0)=X(a)=0\\]<br> selects <br>\\[k_n=\frac{n\pi}{a}\,\text{,}\\]<br> giving terms proportional to
\\(\sin(\frac{n\pi x}{a})\sinh(\frac{n\pi y}{a})\\) or
\\(\sin(\frac{n\pi x}{a})\cosh(\frac{n\pi y}{a})\\). A full boundary-value solution is a sum of
such terms chosen to match the prescribed values on the remaining edges.

<a id="topic-025-wave-equation-solutions-for-vibrational-modes-of-stretched-s"></a>
### Wave equation solutions for vibrational modes of stretched strings and rectangular and circular membranes (equations are not to be derived)

The wave equation models small transverse vibrations. For a stretched string of
length \\(L\\), tension \\(\mathcal T\\), and linear mass density \\(\mu\\),
the wave speed is <br>\\[c=\sqrt{\frac{\mathcal T}{\mu}}\,\text{.}\\]<br> If both ends are fixed, the allowed
standing-wave modes are
<br>\\[u_n(x,t)=A_n\sin\left(\frac{n\pi x}{L}\right)\cos(\omega_n t+\phi_n)\\]<br>
with <br>\\[n=1,2,3,\ldots\\]<br> and
<br>\\[f_n=\frac{nc}{2L}\\]<br>
The fundamental is the lowest frequency; higher modes have nodes, points that remain
at rest, between the ends. For a rectangular membrane with sides \\(a\\) and \\(b\\),
the mode shapes are
<br>\\[u_{mn}(x,y,t)=A_{mn}\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right)\cos(\omega_{mn}t+\phi_{mn})\\]<br>
where positive integers \\(m,n\\) count half-wavelengths across the two directions.
For a circular membrane of radius \\(R\\), the radial dependence is a Bessel function
\\(J_m\\), a special function that plays a role similar to sine and cosine in circular
geometry. If \\(\alpha_{mn}\\) is the \\(n\\)-th positive zero of \\(J_m\\), the
fixed-edge condition gives
<br>\\[k_{mn}=\frac{\alpha_{mn}}{R},\qquad \omega_{mn}=c k_{mn}=\frac{c\alpha_{mn}}{R}\\]<br>
Here \\(c\\) is the wave speed in the membrane.
The angular patterns vary as \\(\cos(m\varphi)\\) or \\(\sin(m\varphi)\\). These
equations are provided as results here, as specified by the syllabus. The key idea
is that boundaries restrict a continuous range of possible vibrations to discrete
normal modes.

<a id="topic-026-one-dimensional-heat-flow-equation-equation-is-not-to-be-der"></a>
### One-dimensional heat-flow equation (equation is not to be derived)

Let \\(u(x,t)\\) be temperature along a thin uniform rod. The one-dimensional heat
equation is
<br>\\[\frac{\partial u}{\partial t}=\alpha\frac{\partial^2u}{\partial x^2}\\]<br>
where \\(\alpha\\) is the **thermal diffusivity**, a positive material property with
units of area per time. The second spatial derivative measures curvature of the
temperature profile. If a point is hotter than the average of its neighbors, heat
flows away and its temperature falls; a cooler point tends to warm. Boundary
temperatures and the initial temperature profile are required to determine a
particular solution.

For a rod of length \\(L\\) held at zero temperature at both ends, separated modes
decay in time:
<br>\\[u_n(x,t)=A_n\sin\left(\frac{n\pi x}{L}\right)e^{-\alpha\left(\frac{n\pi}{L}\right)^2t}\\]<br>
Shorter-wavelength modes have larger \\(n\\) and decay faster. Unlike the wave
equation, the heat equation smooths temperature differences rather than transporting
them as persistent oscillations. The syllabus requires recognition and use of the
equation, not its derivation.


## UNIT-III: Complex Analysis (15 Lectures)

<a id="topic-027-complex-numbers"></a>
### Complex numbers

A **complex number** has a real part and an imaginary part:
<br>\\[z=x+iy,\qquad i^2=-1\\]<br>
Here <br>\\[x=\operatorname{Re}z\,\text{,}\\]<br> <br>\\[y=\operatorname{Im}z\,\text{,}\\]<br> and \\(i\\) is the
imaginary unit. Add complex numbers by adding their real and imaginary parts;
multiply by expanding and using <br>\\[i^2=-1\,\text{.}\\]<br> The **complex conjugate** is
<br>\\[\bar z=x-iy\,\text{,}\\]<br> and the modulus is the nonnegative distance from the origin:
<br>\\[|z|=\sqrt{x^2+y^2},\qquad z\bar z=|z|^2\\]<br>
For division, multiply numerator and denominator by the conjugate of the
denominator. For example,
<br>\\[\frac{1+i}{1-i}=\frac{(1+i)^2}{(1-i)(1+i)}=i\\]<br>
Complex numbers allow equations such as <br>\\[x^2+1=0\\]<br> to have solutions
<br>\\[x=\pm i\,\text{,}\\]<br> and are essential in oscillations, waves, and quantum physics.

<a id="topic-028-graphical-representation"></a>
### graphical representation

Represent <br>\\[z=x+iy\\]<br> as the point \\((x,y)\\) in the **complex plane**: the
horizontal axis is the real axis and the vertical axis is the imaginary axis. The
modulus \\(|z|\\) is the distance from the origin. The argument \\(\arg z\\) is the
angle \\(\theta\\) from the positive real axis, measured with a stated orientation.
Thus polar form is
<br>\\[z=r(\cos\theta+i\sin\theta),\qquad r=|z|\\]<br>
<figure class="lecture-figure">
  <img src="{{ '/images/lecture/complex-plane.svg' | relative_url }}" alt="Complex plane showing z equals x plus iy, with modulus r and argument theta">
  <figcaption>The modulus is the distance from the origin; the argument is the angle from the positive real axis.</figcaption>
</figure>
For nonzero \\(z\\), the argument is not unique: adding any integer multiple of
\\(2\pi\\) gives the same point. A chosen interval, often \\((-\pi,\pi]\\), defines a
principal argument. **Example:** <br>\\[z=-1+i\\]<br> has modulus \\(\sqrt{2}\\) and
principal argument \\(\frac{3\pi}{4}\\). Its point lies in the second quadrant, which helps
choose the correct angle. The complex plane turns addition into vector addition and
multiplication into multiplication of lengths plus addition of angles.

<a id="topic-029-euler-s-formula"></a>
### Euler's formula

Euler's formula relates trigonometry to the complex exponential:
<br>\\[e^{i\theta}=\cos\theta+i\sin\theta\\]<br>
It follows from the power series for the exponential, sine, and cosine. Polar form
can therefore be written compactly as
<br>\\[z=re^{i\theta}\\]<br>
This form makes multiplication and division simple. If
<br>\\[z_1=r_1e^{i\theta_1}\\]<br> and <br>\\[z_2=r_2e^{i\theta_2}\,\text{,}\\]<br> then
<br>\\[z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)}\\]<br>
Multiplication scales lengths and adds angles; division divides lengths and subtracts
angles. Euler's formula also gives
<br>\\[\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2},\qquad \sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}\\]<br>
These identities let us rewrite real oscillations using exponentials, which makes
differentiation and solving linear equations much easier.

<a id="topic-030-de-moivre-s-theorem"></a>
### De Moivre's theorem

Repeatedly multiplying a polar-form complex number gives **De Moivre's theorem**:
<br>\\[(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)\\]<br>
for every integer \\(n\\). With radius \\(r\\),
<br>\\[(re^{i\theta})^n=r^ne^{in\theta}\\]<br>
For example, squaring \\(\cos\theta+i\sin\theta\\) and comparing real parts gives
<br>\\[\cos(2\theta)=\cos^2\theta-\sin^2\theta\,\text{;}\\]<br> comparing imaginary parts gives
<br>\\[\sin(2\theta)=2\sin\theta\cos\theta\,\text{.}\\]<br> Negative integer powers work for nonzero
numbers by taking reciprocals. The theorem is useful for powers, trigonometric
identities, and finding roots. For non-integer complex powers, the multi-valued
argument must be handled explicitly; the integer theorem alone does not settle that
choice.

<a id="topic-031-roots-of-complex-numbers"></a>
### roots of complex numbers

To solve <br>\\[w^n=z\,\text{,}\\]<br> write the nonzero number \\(z\\) in polar form
<br>\\[z=re^{i\theta}\,\text{.}\\]<br> Its \\(n\\) distinct roots are
<br>\\[w_k=r^{\frac{1}{n}}e^{i\frac{\theta+2\pi k}{n}},\qquad k=0,1,\ldots,n-1\\]<br>
All roots have the same modulus and are equally spaced around a circle. The
\\(2\pi k\\) terms matter: omitting them finds only one root. **Example:** the cube
roots of \\(8\\) have modulus \\(2\\) and arguments \\(0\\), \\(\frac{2\pi}{3}\\), and
\\(\frac{4\pi}{3}\\):
<br>\\[w=2,\qquad w=-1+i\sqrt{3},\qquad w=-1-i\sqrt{3}\\]<br>
For <br>\\[z=0\,\text{,}\\]<br> the only root is zero. Roots are useful for solving polynomial
equations and for describing rotational symmetry.

<a id="topic-032-functions-of-complex-variables"></a>
### Functions of complex variables

A complex function maps a complex input to a complex output:
<br>\\[f:\mathbb C\to\mathbb C,\qquad z=x+iy,\qquad f(z)=u(x,y)+iv(x,y)\\]<br>
The real functions \\(u\\) and \\(v\\) describe the output's real and imaginary parts.
For example, if <br>\\[f(z)=z^2\,\text{,}\\]<br> then
<br>\\[f(z)=(x^2-y^2)+i(2xy)\\]<br>
The function has a domain where it is defined. A complex function is continuous at a
point when its value approaches the same limit from every direction in the plane.
Complex differentiability is stricter than ordinary real differentiability: the
difference quotient must have the same limit as the input approaches from any
direction. Functions differentiable throughout an open region are called analytic
there. This strong condition leads to powerful integral and series theorems.

<a id="topic-033-analyticity"></a>
### analyticity

A complex function is **analytic** at a point if it is complex differentiable in a
neighborhood of that point. It is analytic in a region if this holds at every point
of the region. A function analytic everywhere in the finite complex plane is called
**entire**; polynomials and \\(e^z\\) are entire. The rational function
\\(\frac{1}{z}\\) is analytic except at <br>\\[z=0\,\text{.}\\]<br> Complex differentiability requires more
than having separate real partial derivatives: changes in the quotient must agree
for every direction of approach. When the real and imaginary parts have continuous
first partial derivatives, the Cauchy-Riemann equations provide the practical test
developed next. Analytic functions are infinitely differentiable and locally
representable by power series. These facts explain why complex analysis can determine
a function throughout a region from information on its boundary.

<a id="topic-034-cauchy-riemann-equations"></a>
### Cauchy-Riemann equations

Write <br>\\[f(z)=u(x,y)+iv(x,y)\,\text{.}\\]<br> If \\(f\\) is complex differentiable, the real
functions satisfy the **Cauchy-Riemann equations**
<br>\\[\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},\qquad \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}\\]<br>
When the first partial derivatives are continuous in a neighborhood, these equations
also guarantee analyticity there. **Example:** for <br>\\[f(z)=z^2\,\text{,}\\]<br>
<br>\\[u=x^2-y^2\\]<br> and <br>\\[v=2xy\,\text{.}\\]<br> Then <br>\\[u_x=2x=v_y\\]<br> and
<br>\\[u_y=-2y=-v_x\,\text{,}\\]<br> so the test is satisfied everywhere. For <br>\\[f(z)=\bar z=x-iy\,\text{,}\\]<br>
the equations fail except at isolated points; the function is not analytic in any
open region. The derivative, when the equations hold, can be calculated as
<br>\\[f'(z)=u_x+iv_x=v_y-iu_y\\]<br>
The continuity condition matters: the equations alone at a single point do not
generally prove analyticity around it.

<a id="topic-035-examples-of-analytic-functions"></a>
### Examples of analytic functions

Polynomials in \\(z\\), such as \\(z^3-2z+1\\), are analytic everywhere. The
exponential \\(e^z\\), sine, and cosine are also entire. A reciprocal such as
\\(\frac{1}{z}\\) is analytic wherever its denominator is nonzero. By contrast,
<br>\\[|z|^2=x^2+y^2\\]<br> is not analytic on an open region: its real and imaginary parts
do not satisfy the Cauchy-Riemann equations there.

To check a candidate, separate it into \\(u\\) and \\(v\\), calculate the four first
partial derivatives, and apply the equations. For <br>\\[f(z)=e^z\,\text{,}\\]<br> use
<br>\\[e^{x+iy}=e^x(\cos y+i\sin y)\,\text{.}\\]<br> Thus <br>\\[u=e^x\cos y\\]<br> and
<br>\\[v=e^x\sin y\,\text{;}\\]<br> direct differentiation verifies both equations. The derivative is
<br>\\[f'(z)=e^z\\]<br>
Real and imaginary parts of an analytic function are harmonic wherever they are
twice differentiable:
<br>\\[\nabla^2u=0,\qquad \nabla^2v=0\\]<br>
This connects complex analysis with two-dimensional electrostatic potentials and
steady heat flow.

<a id="topic-036-singularities-poles"></a>
### Singularities: poles

A **singularity** is a point where a function fails to be analytic, although it may
be analytic nearby. A point \\(z_0\\) is a **pole of order \\(m\\)** if the function
grows like \\(\frac{1}{(z-z_0)^m}\\) near it. Equivalently,
\\((z-z_0)^m f(z)\\) approaches a finite nonzero value at \\(z_0\\). For example,
<br>\\[f(z)=\frac{1}{(z-2)^3}\\]<br> has a third-order pole at <br>\\[z=2\,\text{.}\\]<br> A simple pole has order one.
For a rational function, first factor and cancel common factors, then inspect the
remaining denominator zeros. A pole is isolated if there is a small neighborhood
containing no other singularities. The order tells how many negative powers appear
in the local Laurent series and helps determine the residue used in contour
integration.

<a id="topic-037-removable-and-essential-singularities"></a>
### removable and essential singularities

An isolated singularity at \\(z_0\\) is **removable** if the function has a finite
limit there; defining the value to be that limit makes the function analytic.
For example, \\(\frac{\sin z}{z}\\) appears undefined at zero, but its limit is \\(1\\), so
the singularity is removable. A pole diverges in a controlled, finite-order way.
An isolated singularity is **essential** if it is neither removable nor a pole.
For example, \\(e^{\frac{1}{z}}\\) has an essential singularity at zero because its Laurent
series contains infinitely many negative powers. Near an essential singularity, the
function takes values in a highly irregular way: in every punctured neighborhood it
comes arbitrarily close to every complex value, with at most one exception. The
classification is important because it predicts the local series and contour
behavior.

<a id="topic-038-branch-points"></a>
### branch points

Some complex functions are **multi-valued** because their values depend on a choice
of argument. For example, if <br>\\[z=re^{i\theta}\,\text{,}\\]<br> then its square roots are
\\(\sqrt r\,e^{i\frac{\theta+2\pi k}{2}}\\); for a square root there are two values.
A **branch point** is a point around which continuing the function once around a
closed loop changes its value. For \\(\sqrt z\\), circling the origin changes the
sign, so zero is a branch point. For \\(\log z\\), increasing the angle by \\(2\pi\\)
changes the logarithm by \\(2\pi i\\), so zero is also a branch point. Branch points
are not ordinary isolated poles. To work with a single-valued branch, restrict the
domain so that loops cannot encircle the branch point.

<a id="topic-039-branch-cuts"></a>
### branch cuts

A **branch cut** is a curve removed from the complex plane to prevent paths from
circling a branch point. For the principal logarithm, remove the nonpositive real
axis and choose the argument in \\((-\pi,\pi)\\). Then
<br>\\[\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z\\]<br>
is single-valued on the cut plane. For a principal square root, the same cut makes
<br>\\[\sqrt z=\sqrt{|z|}\,e^{i\frac{\operatorname{Arg}z}{2}}\\]<br> single-valued. A cut is a
convenient convention, not a physical discontinuity forced at that exact curve;
another cut can be chosen if it avoids the branch point and gives a suitable
single-valued domain. Values on opposite sides of a cut may differ, which is
important when integrating around it.

<a id="topic-040-complex-integration"></a>
### Complex integration

A complex line integral adds the values of a complex function along an oriented
curve. If the curve is \\(z(t)\\), from <br>\\[t=a\\]<br> to <br>\\[t=b\,\text{,}\\]<br> then
<br>\\[\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt\\]<br>
Both the path and its direction matter in general. **Example:** integrate <br>\\[f(z)=z\\]<br>
along the straight line from \\(0\\) to \\(1+i\\). Set <br>\\[z(t)=t(1+i)\,\text{,}\\]<br> for
<br>\\[0\le t\le1\,\text{;}\\]<br> then <br>\\[dz=(1+i)\,dt\,\text{,}\\]<br> giving
<br>\\[\int_C z\,dz=\int_0^1 t(1+i)^2\,dt=i\\]<br>
Complex integrals obey linearity and path reversal changes their sign. If
\\(f\\) has an antiderivative \\(F\\) throughout the region, the integral depends
only on the endpoints:
<br>\\[\int_C f(z)\,dz=F(z_{\mathrm{end}})-F(z_{\mathrm{start}})\\]<br>
The major contour theorems state when this path independence or closed-loop
cancellation occurs.

<a id="topic-041-cauchy-goursat-theorem"></a>
### Cauchy-Goursat theorem

The **Cauchy-Goursat theorem** says that if \\(f\\) is analytic on and inside a
simple closed contour \\(C\\), then its integral around that contour is zero:
<br>\\[\oint_C f(z)\,dz=0\\]<br>
The contour is usually taken counter-clockwise. This result is stronger than ordinary
real-variable intuition: the integral around every such loop vanishes even when the
path is not retraced. It implies that integrals of analytic functions are path
independent in simply connected regions and that analytic functions have
antiderivatives there. The assumptions matter: a hole or singularity inside the
contour can make the integral nonzero. For example, \\(\frac{1}{z}\\) is analytic along the
unit circle, but not inside it, and
<br>\\[\oint_{|z|=1}\frac{1}{z}\,dz=2\pi i\\]<br>
This exception is explained by the residue theorem.

<a id="topic-042-cauchy-s-inequality"></a>
### Cauchy's inequality

Cauchy's inequality, often called the **Cauchy estimate**, bounds derivatives of an
analytic function using its largest boundary value. If \\(f\\) is analytic on and
inside a circle of radius \\(R\\) centered at \\(z_0\\), and
<br>\\[|f(z)|\le M\\]<br> on the circle, then
<br>\\[|f^{(n)}(z_0)|\le\frac{n!M}{R^n}\\]<br>
The result follows from Cauchy's integral formula for derivatives and the length of
the circle. It says that a function bounded on a larger circle cannot have
arbitrarily large derivatives at its center. **Example:** if <br>\\[|f(z)|\le 3\\]<br> on a
circle of radius \\(2\\), then <br>\\[|f'(z_0)|\le \frac{3}{2}\,\text{.}\\]<br> Cauchy's estimate is also a
key step in proving that a bounded entire function must be constant: let \\(R\\)
grow without bound and the first derivative bound tends to zero.

<a id="topic-043-cauchy-s-integral-formula-and-simply-and-multiply-connected"></a>
### Cauchy's integral formula and simply and multiply connected regions

If \\(f\\) is analytic on and inside a positively oriented simple contour \\(C\\), and
\\(z_0\\) lies inside it, then
<br>\\[f(z_0)=\frac{1}{2\pi i}\oint_C\frac{f(z)}{z-z_0}\,dz\\]<br>
The value at an interior point is determined by values all around the boundary.
Differentiating gives
<br>\\[f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz\\]<br>
A region is **simply connected** if every closed loop can be continuously shrunk to
a point without leaving the region; it has no holes. A **multiply connected**
region has one or more holes. For a multiply connected region, contour boundaries
include the outer boundary and inner boundaries; when oriented consistently with the
region, the inner boundaries run clockwise. Cauchy's theorem applies to the total
oriented boundary when the function is analytic throughout the region. The distinction
prevents incorrectly treating a loop around a missing point as contractible.

<a id="topic-044-laurent-and-taylor-expansions"></a>
### Laurent and Taylor expansions

A function analytic near \\(z_0\\) has a **Taylor series**:
<br>\\[f(z)=\sum_{n=0}^{\infty}\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n\\]<br>
It converges inside the nearest singularity. For example,
<br>\\[e^z=1+z+\frac{z^2}{2!}+\frac{z^3}{3!}+\cdots\\]<br>
Near an isolated singularity, a **Laurent series** may also have negative powers:
<br>\\[f(z)=\sum_{n=-\infty}^{\infty}a_n(z-z_0)^n\\]<br>
The negative-power part describes the singularity. A pole of order \\(m\\) has only
finitely many negative powers; an essential singularity has infinitely many.
For example,
<br>\\[\frac{1}{z(z-1)}=-\frac{1}{z}-1-z-z^2-\cdots,\qquad 0<|z|<1\\]<br>
The annulus of convergence matters: the same expression can have different Laurent
series in different regions. The coefficient of \\((z-z_0)^{-1}\\) is the residue.

<a id="topic-045-residues"></a>
### Residues

The **residue** of \\(f\\) at an isolated singularity \\(z_0\\) is the coefficient
of \\((z-z_0)^{-1}\\) in its Laurent expansion:
<br>\\[\operatorname{Res}(f,z_0)=a_{-1}\\]<br>
At a simple pole,
<br>\\[\operatorname{Res}(f,z_0)=\lim_{z\to z_0}(z-z_0)f(z)\\]<br>
For a pole of order \\(m\\),
<br>\\[\operatorname{Res}(f,z_0)=\frac{1}{(m-1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\left((z-z_0)^m f(z)\right)\\]<br>
**Example:** for <br>\\[f(z)=\frac{1}{z(z-1)}\,\text{,}\\]<br> the residue at zero is
<br>\\[\lim_{z\to0}\frac{1}{z-1}=-1\,\text{;}\\]<br> at one it is
<br>\\[\lim_{z\to1}\frac{1}{z}=1\,\text{.}\\]<br> For complicated expressions, partial fractions or a
Laurent expansion may be simpler than the higher-order formula. The residue
summarizes the part of a singularity that contributes to a closed contour integral.

<a id="topic-046-residue-theorem"></a>
### residue theorem

The **residue theorem** evaluates a contour integral by summing the residues of the
singularities inside it:
<br>\\[\oint_C f(z)\,dz=2\pi i\sum_k \operatorname{Res}(f,z_k)\\]<br>
Here \\(C\\) is a positively oriented closed contour, \\(f\\) is analytic on it,
and \\(z_k\\) are the isolated singularities inside. **Example:** for
<br>\\[f(z)=\frac{1}{z(z-1)}\\]<br> and a circle containing both poles, the residues \\(-1\\)
and \\(1\\) cancel, so the integral is zero. If the contour encloses only zero, the
integral is \\(-2\pi i\\). First identify which singularities are inside the contour,
then compute only those residues. If the path is clockwise, the integral has the
opposite sign.

<a id="topic-047-contour-integration-to-evaluate-definite-integrals"></a>
### contour integration to evaluate definite integrals

Real definite integrals can sometimes be evaluated by extending their integrand to
the complex plane and closing a contour. Consider
<br>\\[I=\int_{-\infty}^{\infty}\frac{dx}{x^2+1}\\]<br>
Use <br>\\[f(z)=\frac{1}{z^2+1}\\]<br> and a large upper semicircle. The pole inside is <br>\\[z=i\,\text{,}\\]<br>
with residue
<br>\\[\operatorname{Res}(f,i)=\lim_{z\to i}\frac{z-i}{(z-i)(z+i)}=\frac{1}{2i}\\]<br>
The residue theorem gives a contour integral of \\(\pi\\). The integral over the
large arc tends to zero because the integrand decreases quadratically while the arc
length grows linearly. Therefore
<br>\\[\int_{-\infty}^{\infty}\frac{dx}{x^2+1}=\pi\\]<br>
For rational functions, choose an upper or lower semicircle according to which
decays and which poles are enclosed. Trigonometric integrals may use the substitution
<br>\\[z=e^{i\theta}\,\text{,}\\]<br> turning sine and cosine into rational expressions. Always check
the arc contribution and singularities on the real axis before applying the theorem.

## Further study

These free courses provide additional lessons and practice problems:

- [IGNOU eGyanKosh digital repository](https://egyankosh.ac.in/) - search for
  mathematical physics, vector calculus, differential equations, or complex analysis
  for related study material.
- [MIT OpenCourseWare: Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/)
- [MIT OpenCourseWare: Differential Equations](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/)
- [MIT OpenCourseWare: Complex Variables with Applications](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/)
