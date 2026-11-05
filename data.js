function page(pageNumber, title, content) {
  return { page: pageNumber, title: title, content: content };
}

window.SECTIONS = [
  {
    id: "crash-course",
    title: "Crash Course",
    file: "Crash course.pdf",
    subtitle: "Fourier transforms, probability, random variables, and characteristic functions.",
    pages: [
      page(1, "Fourier transform — continuous time", `
        <p><strong>Fourier-transform / continuous time.</strong></p>
        <p>For <span class="math">f: ℝ → ℂ</span>, define</p>
        <div class="formula">f̂(ω) = (ℱf)(ω) = ∫<sub>−∞</sub><sup>∞</sup> e<sup>−jωx</sup> f(x) dx, &nbsp; j² = −1.</div>
        <p>The inverse transform is</p>
        <div class="formula">f(x) = (ℱ<sup>−1</sup>f̂)(x) = (1/2π) ∫<sub>−∞</sub><sup>∞</sup> e<sup>jωx</sup> f̂(ω) dω.</div>
        <p>For <span class="math">f: ℝⁿ → ℂ</span>,</p>
        <div class="formula">f̂(ω₁,…,ωₙ) = ∫⋯∫ e<sup>−j(ω₁x₁+⋯+ωₙxₙ)</sup> f(x₁,…,xₙ) dx₁⋯dxₙ.</div>
        <p>The inverse is</p>
        <div class="formula">f(x₁,…,xₙ) = (1/(2π)ⁿ) ∫⋯∫ e<sup>j(ω₁x₁+⋯+ωₙxₙ)</sup> f̂(ω₁,…,ωₙ) dω₁⋯dωₙ.</div>
        <p><strong>Example: Gaussian.</strong> If <span class="math">f(x) = (1/(√(2π)σ)) exp(−(x−μ)²/(2σ²))</span>, completing the square in the Fourier integral gives</p>
        <div class="formula">f̂(ω) = exp(−jωμ − (1/2)ω²σ²).</div>
        <p><strong>Example: exponential.</strong> If <span class="math">f(x)=λe<sup>−λx</sup></span> for <span class="math">x≥0</span> and is zero for <span class="math">x&lt;0</span>, then</p>
        <div class="formula">f̂(ω) = ∫<sub>0</sub><sup>∞</sup> λe<sup>−(λ+jω)x</sup> dx = λ/(λ+jω).</div>
        <p><strong>Properties.</strong></p>
        <div class="formula">ℱ[f(x−x₀)](ω) = e<sup>−jωx₀</sup>(ℱf)(ω)</div>
        <div class="formula">ℱ[e<sup>jω₀x</sup>f(x)](ω) = (ℱf)(ω−ω₀)</div>
        <div class="formula">ℱ[f(−x)](ω) = (ℱf)(−ω)</div>
        <div class="formula">ℱ[f′(x)](ω) = jω(ℱf)(ω).</div>`),
      page(2, "Fourier transform — discrete time", `
        <p><strong>Fourier-transform / discrete time.</strong> For <span class="math">f: ℤ → ℂ</span>,</p>
        <div class="formula">f̂(ω) = (ℱf)(ω) = Σ<sub>k=−∞</sub><sup>∞</sup> e<sup>−jωk</sup> f(k),</div>
        <p>with inverse</p>
        <div class="formula">f(k) = (1/2π) ∫<sub>−π</sub><sup>π</sup> e<sup>jωk</sup> f̂(ω) dω.</div>
        <p>The shift, modulation, and reversal properties are</p>
        <div class="formula">ℱ[f(k−k₀)](ω) = e<sup>−jωk₀</sup>(ℱf)(ω)</div>
        <div class="formula">ℱ[e<sup>jω₀k</sup>f(k)](ω) = (ℱf)(ω−ω₀)</div>
        <div class="formula">ℱ[f(−k)](ω) = (ℱf)(−ω).</div>
        <p><strong>Example: Poisson probabilities.</strong> For <span class="math">f(k)=λ<sup>k</sup>e<sup>−λ</sup>/k!</span>, <span class="math">k=0,1,2,…</span>,</p>
        <div class="formula">f̂(ω) = Σ<sub>k=0</sub><sup>∞</sup> (λe<sup>−jω</sup>)<sup>k</sup>e<sup>−λ</sup>/k! = exp(λ(e<sup>−jω</sup>−1)).</div>
        <p><strong>Delta functions.</strong> The discrete Kronecker delta <span class="math">δ(k)</span> equals 1 for <span class="math">k=0</span> and 0 otherwise. The continuous Dirac delta is a distribution satisfying</p>
        <div class="formula">∫ f(x)δ(x) dx = f(0).</div>
        <p>The Dirac delta is the distributional derivative of the Heaviside function <span class="math">θ(x)=0</span> for <span class="math">x&lt;0</span> and <span class="math">θ(x)=1</span> for <span class="math">x≥0</span>. The distributional derivative satisfies</p>
        <div class="formula">∫ f(x)δ′(x) dx = −f′(0).</div>
        <p>In both cases, <span class="math">(ℱδ)(ω)=1</span>.</p>`),
      page(3, "Convolution and probability axioms", `
        <p><strong>Convolution.</strong> For continuous time,</p>
        <div class="formula">(f*g)(x) = ∫<sub>−∞</sub><sup>∞</sup> f(x−y)g(y)dy = ∫<sub>−∞</sub><sup>∞</sup> g(x−y)f(y)dy = (g*f)(x).</div>
        <p>For discrete time,</p>
        <div class="formula">(f*g)(k) = Σ<sub>ℓ=−∞</sub><sup>∞</sup> f(k−ℓ)g(ℓ) = Σ<sub>ℓ=−∞</sub><sup>∞</sup> g(k−ℓ)f(ℓ) = (g*f)(k).</div>
        <p>Fourier transformation turns convolution into multiplication:</p>
        <div class="formula">ℱ(f*g)(ω) = (ℱf)(ω)(ℱg)(ω).</div>
        <p>Convolving two Gaussian densities gives a Gaussian density whose means and variances add. In particular, two identical Gaussians with variance <span class="math">σ²</span> convolve to a Gaussian with variance <span class="math">2σ²</span>.</p>
        <p><strong>Axioms of Probability Theory.</strong> Let <span class="math">S</span> be the sample space and let subsets <span class="math">A⊂S</span> be events. A probability measure satisfies</p>
        <div class="formula">P(∅)=0, &nbsp; P(S)=1, &nbsp; P(A)≥0,</div>
        <div class="formula">P(A∪B)=P(A)+P(B) &nbsp; when &nbsp; A∩B=∅.</div>`),
      page(4, "Probability rules and random variables", `
        <p>The probability axioms imply</p>
        <div class="formula">P(A<sup>c</sup>)=1−P(A), &nbsp; A⊂B ⇒ P(A)≤P(B), &nbsp; P(A)≤1.</div>
        <div class="formula">P(A∪B)=P(A)+P(B)−P(A∩B).</div>
        <p>If <span class="math">A₁,A₂,…</span> are pairwise disjoint, then <span class="math">P(∪<sub>i=1</sub><sup>∞</sup>Aᵢ)=Σ<sub>i=1</sub><sup>∞</sup>P(Aᵢ)</span>. Events are independent if <span class="math">P(A∩B)=P(A)P(B)</span>, and <span class="math">P(A|B)=P(A∩B)/P(B)</span>.</p>
        <p>If <span class="math">{Aᵢ}</span> partitions <span class="math">S</span>, then the law of total probability is</p>
        <div class="formula">P(B)=ΣᵢP(B|Aᵢ)P(Aᵢ).</div>
        <p>A random variable is <span class="math">X:S→ℝ</span>; a pair is <span class="math">(X,Y):S→ℝ²</span>. Their CDFs are</p>
        <div class="formula">F<sub>X</sub>(x)=P(X≤x), &nbsp; F<sub>X,Y</sub>(x,y)=P(X≤x,Y≤y).</div>
        <p>The CDF is between 0 and 1, nondecreasing, tends to 1 as <span class="math">x→∞</span>, tends to 0 as <span class="math">x→−∞</span>, and <span class="math">P(a&lt;X≤b)=F<sub>X</sub>(b)−F<sub>X</sub>(a)</span>.</p>
        <p>The joint CDF is nondecreasing in each argument and satisfies <span class="math">F<sub>X,Y</sub>(x,∞)=F<sub>X</sub>(x)</span> and <span class="math">F<sub>X,Y</sub>(∞,y)=F<sub>Y</sub>(y)</span>. Moreover,</p>
        <div class="formula">P(x₁&lt;X≤x₂,y₁&lt;Y≤y₂)=F(x₂,y₂)−F(x₁,y₂)−F(x₂,y₁)+F(x₁,y₁).</div>
        <p><span class="math">X</span> and <span class="math">Y</span> are independent if <span class="math">P(X∈A,Y∈B)=P(X∈A)P(Y∈B)</span> for all <span class="math">A,B⊂ℝ</span>.</p>`),
      page(5, "Continuous random variables", `
        <p><span class="math">X</span> and <span class="math">Y</span> are independent exactly when <span class="math">F<sub>X,Y</sub>(x,y)=F<sub>X</sub>(x)F<sub>Y</sub>(y)</span>. A continuous random variable has infinitely many possible values and a probability density function (PDF).</p>
        <div class="formula">f<sub>X</sub>(x)=dF<sub>X</sub>(x)/dx, &nbsp; f<sub>X,Y</sub>(x,y)=∂²F<sub>X,Y</sub>(x,y)/(∂x∂y).</div>
        <p>The density is nonnegative and integrates to 1:</p>
        <div class="formula">P(a≤X≤b)=∫<sub>a</sub><sup>b</sup>f<sub>X</sub>(x)dx, &nbsp; P(X∈A)=∫<sub>A</sub>f<sub>X</sub>(x)dx.</div>
        <div class="formula">P((X,Y)∈A)=∫∫<sub>A</sub>f<sub>X,Y</sub>(x,y)dxdy.</div>
        <p>Marginals are found by integration:</p>
        <div class="formula">f<sub>X</sub>(x)=∫f<sub>X,Y</sub>(x,y)dy, &nbsp; f<sub>Y</sub>(y)=∫f<sub>X,Y</sub>(x,y)dx.</div>
        <p>Independence is equivalent to <span class="math">f<sub>X,Y</sub>(x,y)=f<sub>X</sub>(x)f<sub>Y</sub>(y)</span>.</p>
        <p>Examples include the Gaussian density <span class="math">(1/(√(2π)σ))e<sup>−(x−μ)²/(2σ²)</sup></span>, the exponential density <span class="math">λe<sup>−λx</sup></span> for <span class="math">x≥0</span>, and the uniform density <span class="math">1/(b−a)</span> on <span class="math">[a,b]</span>.</p>
        <p>Expectation is</p>
        <div class="formula">E(X)=∫xf<sub>X</sub>(x)dx, &nbsp; E(g(X))=∫g(x)f<sub>X</sub>(x)dx, &nbsp; E(g(X,Y))=∫∫g(x,y)f<sub>X,Y</sub>(x,y)dxdy.</div>
        <p>The conditional density and conditional expectation are</p>
        <div class="formula">f<sub>X|Y</sub>(x|y)=f<sub>X,Y</sub>(x,y)/f<sub>Y</sub>(y), &nbsp; E(X|Y=y)=∫x f<sub>X|Y</sub>(x|y)dx.</div>
        <div class="formula">P(X∈A)=∫P(X∈A|Y=y)f<sub>Y</sub>(y)dy, &nbsp; E(X)=∫E(X|Y=y)f<sub>Y</sub>(y)dy.</div>`),
      page(6, "Discrete random variables", `
        <p>A discrete random variable has finitely or countably infinitely many possible values and a probability mass function (PMF):</p>
        <div class="formula">p<sub>X</sub>(x)=P(X=x), &nbsp; p<sub>X,Y</sub>(x,y)=P(X=x,Y=y).</div>
        <p>The PMF is nonnegative, sums to 1, and <span class="math">P(X∈A)=Σ<sub>x∈A</sub>p<sub>X</sub>(x)</span>. For a joint PMF,</p>
        <div class="formula">p<sub>X</sub>(x)=Σ<sub>y</sub>p<sub>X,Y</sub>(x,y), &nbsp; p<sub>Y</sub>(y)=Σ<sub>x</sub>p<sub>X,Y</sub>(x,y).</div>
        <p>Independence means <span class="math">p<sub>X,Y</sub>(x,y)=p<sub>X</sub>(x)p<sub>Y</sub>(y)</span>.</p>
        <p><strong>Bernoulli:</strong> possible values <span class="math">{0,1}</span>, with <span class="math">p<sub>X</sub>(0)=1−p</span> and <span class="math">p<sub>X</sub>(1)=p</span>.</p>
        <p><strong>Binomial:</strong> possible values <span class="math">{0,…,n}</span>, with <span class="math">p<sub>X</sub>(k)=C(n,k)p<sup>k</sup>(1−p)<sup>n−k</sup></span>.</p>
        <p><strong>Poisson:</strong> possible values <span class="math">ℕ</span>, with <span class="math">p<sub>X</sub>(k)=e<sup>−λ</sup>λ<sup>k</sup>/k!</span>.</p>
        <p><strong>Geometric:</strong> <span class="math">p<sub>X</sub>(k)=(1−p)<sup>k−1</sup>p</span> for <span class="math">k=1,2,…</span>; it is the waiting time until the first 1 occurs.</p>
        <div class="formula">E(X)=Σ<sub>x</sub>x p<sub>X</sub>(x), &nbsp; E(g(X))=Σ<sub>x</sub>g(x)p<sub>X</sub>(x), &nbsp; E(g(X,Y))=Σ<sub>x,y</sub>g(x,y)p<sub>X,Y</sub>(x,y).</div>`),
      page(7, "Conditional PMFs, variance, covariance, and normal vectors", `
        <p>The conditional PMF is <span class="math">p<sub>X|Y</sub>(x|y)=p<sub>X,Y</sub>(x,y)/p<sub>Y</sub>(y)</span>. Linearity gives</p>
        <div class="formula">E(Σa<sub>i</sub>X<sub>i</sub>)=Σa<sub>i</sub>E(X<sub>i</sub>).</div>
        <p>Variance and covariance are</p>
        <div class="formula">Var(X)=E[(X−E(X))²]=E(X²)−E(X)²,</div>
        <div class="formula">Cov(X,Y)=E[(X−E(X))(Y−E(Y))]=E(XY)−E(X)E(Y).</div>
        <p>Thus <span class="math">Var(Y)=Cov(Y,Y)</span>; uncorrelated means covariance zero, and independence implies uncorrelatedness. Bilinearity gives</p>
        <div class="formula">Cov(Σa<sub>i</sub>X<sub>i</sub>,Σb<sub>j</sub>Y<sub>j</sub>)=ΣΣa<sub>i</sub>b<sub>j</sub>Cov(X<sub>i</sub>,Y<sub>j</sub>).</div>
        <div class="formula">Var(Σa<sub>i</sub>X<sub>i</sub>)=ΣΣa<sub>i</sub>a<sub>j</sub>Cov(X<sub>i</sub>,X<sub>j</sub>).</div>
        <p>The bivariate normal density is</p>
        <div class="formula">f<sub>X,Y</sub>(x,y)=1/(2πσ<sub>X</sub>σ<sub>Y</sub>√(1−ρ²)) · exp(−[u²−2ρuv+v²]/[2(1−ρ²)]),</div>
        <p>where <span class="math">u=(x−μ<sub>X</sub>)/σ<sub>X</sub></span> and <span class="math">v=(y−μ<sub>Y</sub>)/σ<sub>Y</sub></span>. The n-variate normal density is</p>
        <div class="formula">f<sub>X₁,…,Xₙ</sub>(x)=1/((2π)<sup>n/2</sup>√det K) · exp(−(1/2)(x−μ)<sup>T</sup>K<sup>−1</sup>(x−μ)),</div>
        <p>where <span class="math">μ<sub>i</sub>=E(X<sub>i</sub>)</span> and <span class="math">K<sub>ij</sub>=Cov(X<sub>i</sub>,X<sub>j</sub>)</span>.</p>`),
      page(8, "Functions of random variables and characteristic functions", `
        <p>If <span class="math">Y=g(X)</span> with increasing differentiable <span class="math">g</span>, then</p>
        <div class="formula">f<sub>Y</sub>(y)=f<sub>X</sub>(g<sup>−1</sup>(y)) d(g<sup>−1</sup>(y))/dy.</div>
        <p>If <span class="math">Z=g(X,Y)</span>, compute <span class="math">F<sub>Z</sub>(z)=P(g(X,Y)≤z)</span> by integrating <span class="math">f<sub>X,Y</sub></span> over the region <span class="math">g(x,y)≤z</span>, then differentiate.</p>
        <p>The characteristic function is</p>
        <div class="formula">ψ<sub>X</sub>(ω)=E(e<sup>jωX</sup>)=∫e<sup>jωx</sup>f<sub>X</sub>(x)dx,</div>
        <div class="formula">f<sub>X</sub>(x)=(1/2π)∫e<sup>−jωx</sup>ψ<sub>X</sub>(ω)dω.</div>
        <p>The joint characteristic function and inverse are</p>
        <div class="formula">ψ<sub>X,Y</sub>(ω₁,ω₂)=E(e<sup>j(ω₁X+ω₂Y)</sup>)=∫∫e<sup>j(ω₁x+ω₂y)</sup>f<sub>X,Y</sub>(x,y)dxdy,</div>
        <div class="formula">f<sub>X,Y</sub>(x,y)=(1/(2π)²)∫∫e<sup>−j(ω₁x+ω₂y)</sup>ψ<sub>X,Y</sub>(ω₁,ω₂)dω₁dω₂.</div>`)
    ]
  },
  {
    id: "hsu-51-54",
    title: "Hsu 5.1-5.4",
    file: "Hsu_51-54(1).pdf",
    subtitle: "Random processes, stationarity, and Gaussian processes.",
    pages: [
      page(1, "Random processes", `
        <p><strong>Definition.</strong> A random process, also called a stochastic process, is a family <span class="math">X(t)=X(t,ω)</span> of random variables indexed by time <span class="math">t∈T</span>.</p>
        <p>The time parameter <span class="math">T</span> can be discrete, such as <span class="math">ℕ, ℤ, {0,1,…,n}</span>, or continuous, such as <span class="math">ℝ, ℝ⁺, [a,b]</span>.</p>
        <p>The CDF <span class="math">F<sub>X(t)</sub>(x)</span> can be used to study the random variables making up a process. Knowing the CDF of <span class="math">X(t)</span> at each time says a lot about the process, but it is not enough.</p>
        <p><strong>Example 1.</strong> Let <span class="math">X(t)</span>, for all <span class="math">t∈T</span>, be independent and <span class="math">N(0,1)</span>-distributed.</p>
        <p><strong>Example 2.</strong> Let <span class="math">X(t)=Y∼N(0,1)</span> for all <span class="math">t</span>. The first process fluctuates independently while the second is constant.</p>
        <p>Both processes have CDF <span class="math">F<sub>X(t)</sub>(x)=Φ(x)</span> for each <span class="math">t∈T</span>, but they are totally different in behavior.</p>`),
      page(2, "Means, correlations, and stationarity", `
        <p><strong>Definitions.</strong></p>
        <div class="formula">m<sub>X</sub>(t)=E(X(t))</div>
        <div class="formula">R<sub>X</sub>(t₁,t₂)=E(X(t₁)X(t₂))</div>
        <div class="formula">K<sub>X</sub>(t₁,t₂)=Cov(X(t₁),X(t₂))</div>
        <div class="formula">R<sub>X,Y</sub>(t₁,t₂)=E(X(t₁)Y(t₂)), &nbsp; K<sub>X,Y</sub>(t₁,t₂)=Cov(X(t₁),Y(t₂)).</div>
        <p><strong>Example.</strong> For <span class="math">X(t)=U cos(ωt)+V sin(ωt)</span>, where <span class="math">U,V</span> are zero-mean, uncorrelated, and have variance <span class="math">σ²</span>,</p>
        <div class="formula">m<sub>X</sub>(t)=0,</div>
        <div class="formula">R<sub>X</sub>(s,t)=K<sub>X</sub>(s,t)=E(U²)cos(ωs)cos(ωt)+E(V²)sin(ωs)sin(ωt)=σ²cos(ω(s−t)).</div>
        <p>This is the cosine process.</p>
        <p><strong>Example.</strong> For <span class="math">X(t)=a sin(ωt+Θ)</span>, with <span class="math">Θ</span> uniformly distributed over <span class="math">[0,2π]</span>,</p>
        <div class="formula">m<sub>X</sub>(t)=0, &nbsp; R<sub>X</sub>(s,t)=a²E[sin(ωs+Θ)sin(ωt+Θ)]=(a²/2)cos(ω(s−t)).</div>
        <p><strong>Definition.</strong> A process is strictly stationary if</p>
        <div class="formula">F<sub>X(t₁),…,X(tₙ)</sub>(x₁,…,xₙ)=F<sub>X(t₁+h),…,X(tₙ+h)</sub>(x₁,…,xₙ)</div>
        <p>for all allowed <span class="math">n,t₁,…,tₙ,h</span>.</p>`),
      page(3, "Properties of WSS processes", `
        <p>The two trigonometric processes above are both stationary.</p>
        <p><strong>Definition.</strong> A process is weak-sense stationary, or WSS, if</p>
        <div class="formula">m<sub>X</sub>(t)=μ<sub>X</sub>, &nbsp; R<sub>X</sub>(t,t+τ) does not depend on t.</div>
        <p>Strict stationarity implies WSS. For WSS <span class="math">X(t)</span>, write <span class="math">R<sub>X</sub>(t,t+τ)=R<sub>X</sub>(τ)</span>. The notes remark that both trigonometric processes are WSS and leave two additional examples as prompts.</p>
        <p><strong>Properties of autocorrelation for WSS X(t).</strong></p>
        <div class="formula">|R<sub>X</sub>(τ)|≤R<sub>X</sub>(0), &nbsp; R<sub>X</sub>(−τ)=R<sub>X</sub>(τ), &nbsp; R<sub>X</sub>(0)=E[X²(t)].</div>
        <p>The first inequality follows from the non-negativity of a square, for example</p>
        <div class="formula">E[(X(t)/√R<sub>X</sub>(0)+X(t+τ)/√R<sub>X</sub>(0))²]≥0.</div>
        <p><strong>Definition.</strong> A process is Gaussian if <span class="math">Σ<sub>i=1</sub><sup>n</sup>a<sub>i</sub>X(t<sub>i</sub>)</span> is normal for all <span class="math">a<sub>i</sub>,t<sub>i</sub></span>. Gaussian one-time values alone do not necessarily make a process Gaussian.</p>
        <p><strong>Example.</strong> If <span class="math">U,V∼N(0,σ²)</span> are independent, then <span class="math">X(t)=U cos(ωt)+V sin(ωt)</span> is Gaussian.</p>`),
      page(4, "Gaussian processes", `
        <p><strong>Fact.</strong> A Gaussian process is determined entirely, probabilistically, by its mean function and autocorrelation function.</p>
        <div class="formula">ψ<sub>X(t₁),…,X(tₙ)</sub>(ω₁,…,ωₙ)=E(exp(jΣ<sub>i=1</sub><sup>n</sup>ω<sub>i</sub>X(t<sub>i</sub>))).</div>
        <p>If <span class="math">Z=Σω<sub>i</sub>X(t<sub>i</sub>)</span>, then</p>
        <div class="formula">E(Z)=Σω<sub>i</sub>μ<sub>X</sub>(t<sub>i</sub>), &nbsp; Var(Z)=Σ<sub>i</sub>Σ<sub>j</sub>ω<sub>i</sub>ω<sub>j</sub>K<sub>X</sub>(t<sub>i</sub>,t<sub>j</sub>).</div>
        <p>Thus the characteristic function is determined by <span class="math">R<sub>X,X</sub></span> and <span class="math">μ<sub>X</sub></span>. A Gaussian process is stationary if and only if it is WSS. Two Gaussian variables <span class="math">X(s),X(t)</span> are independent if and only if they are uncorrelated.</p>
        <p><strong>Example.</strong> For the cosine process with Gaussian <span class="math">U,V</span>, let <span class="math">Z=X(1)+2X(2)</span>. Then <span class="math">Z∼N(0,σ<sub>Z</sub>²)</span>, with</p>
        <div class="formula">σ<sub>Z</sub>²=σ²+4σ²cos(1)+4σ²=5σ²+4σ²cos(1).</div>
        <div class="formula">P(X(1)+2X(2)≥3)=1−Φ(3/√(5σ²+4σ²cos(1))).</div>`),
      page(5, "Stationary independent increments", `
        <p>We do not discuss subsection 5.4.C about independent processes as uninteresting. This was one of our first examples of a random process.</p>
        <p>We discuss discrete-valued Markov processes called Markov chains in Section 5.5, so we jump subsection 5.4.E as well.</p>
        <p>We do not discuss subsection 5.4.G on ergodic processes, as it is better suited to a second, more advanced random-process course.</p>
        <p><strong>Subsection 5.4.D.</strong> A process <span class="math">{X(t)}<sub>t≥0</sub></span> has stationary independent increments, also called a Lévy process, if</p>
        <div class="formula">X(0)=0;</div>
        <div class="formula">the distribution of X(t+s)−X(s) depends on t only, not on s, for s,t≥0;</div>
        <div class="formula">X(t)−X(s) is independent of {X(u):u∈[0,s]} for 0≤s&lt;t.</div>
        <p>The two most important stationary independent-increment processes are the Poisson process and the Wiener process, met in Hsu Sections 5.6–5.7.</p>`)
    ]
  },
  {
    id: "hsu-55",
    title: "Hsu 5.5",
    file: "Hsu_55.pdf",
    subtitle: "Discrete-time Markov chains and classification of states.",
    pages: [
      page(1, "Markov chains and transition matrices", `
        <p><strong>Definition.</strong> A discrete-time, discrete-valued random process <span class="math">{X<sub>n</sub>}<sub>n=0</sub><sup>∞</sup></span> is a Markov chain if</p>
        <div class="formula">P(X<sub>n+1</sub>=x<sub>n+1</sub>|X<sub>n</sub>=x<sub>n</sub>,…,X₀=x₀)=P(X<sub>n+1</sub>=x<sub>n+1</sub>|X<sub>n</sub>=x<sub>n</sub>).</div>
        <p>Markov chains are the discrete-time special case of more general Markov processes. We study discrete time and discrete values, and assume without loss that the chain is integer-valued, since other values can be coded this way.</p>
        <p><strong>Definition.</strong> The transition probabilities are <span class="math">p<sub>ij</sub>=P(X<sub>n+1</sub>=j|X<sub>n</sub>=i)</span>, the entries of <span class="math">P=(p<sub>ij</sub>)</span>. We assume time homogeneity: <span class="math">p<sub>ij</sub></span> does not depend on <span class="math">n</span>.</p>
        <p><strong>Example: kid collecting superhero figures.</strong> With states 0,…,4, where <span class="math">X<sub>n</sub></span> is the number of different figures out of four collected after <span class="math">n</span> restaurant visits,</p>
        <div class="formula">P=[[1,0,0,0,0],[0,1/4,3/4,0,0],[0,0,1/2,1/2,0],[0,0,0,3/4,1/4],[0,0,0,0,1]].</div>`),
      page(2, "Random walk and Chapman–Kolmogorov", `
        <p><strong>Example: random walk.</strong> Let <span class="math">X₀=0</span>, <span class="math">X<sub>n</sub>=Σ<sub>i=1</sub><sup>n</sup>Y<sub>i</sub></span>, and let the iid increments satisfy <span class="math">P(Y<sub>i</sub>=1)=p</span>, <span class="math">P(Y<sub>i</sub>=−1)=q=1−p</span>. Then <span class="math">p<sub>i,i+1</sub>=p</span>, <span class="math">p<sub>i,i−1</sub>=q</span>, and <span class="math">p<sub>ij</sub>=0</span> otherwise.</p>
        <p><strong>Example: gambler’s ruin.</strong> A gambler initially has <span class="math">d</span> dollars and the house has <span class="math">b−d</span>; the states 0 and <span class="math">b</span> are absorbing.</p>
        <p>The distribution at time <span class="math">n</span> is the row matrix <span class="math">p(n)</span> with entries <span class="math">p<sub>j</sub>(n)=P(X<sub>n</sub>=j)</span>. The <span class="math">n</span>-step transition probabilities are</p>
        <div class="formula">p<sub>ij</sub><sup>(n)</sup>=P(X<sub>m+n</sub>=j|X<sub>m</sub>=i), &nbsp; P<sup>(n)</sup>=(p<sub>ij</sub><sup>(n)</sup>).</div>
        <p><strong>Chapman–Kolmogorov:</strong> <span class="math">P<sup>(n)</sup>=Pⁿ</span> and</p>
        <div class="formula">p<sub>ij</sub><sup>(m+n)</sup>=Σ<sub>k</sub>p<sub>ik</sub><sup>(m)</sup>p<sub>kj</sub><sup>(n)</sup>, &nbsp; P<sup>(m+n)</sup>=P<sup>(m)</sup>P<sup>(n)</sup>.</div>
        <p>The proof inserts an intermediate state <span class="math">k</span>, uses conditional probability, and then applies the Markov property.</p>`),
      page(3, "Stationary distributions", `
        <p>For the two-step case, summing over the intermediate state gives</p>
        <div class="formula">P(X<sub>n+2</sub>=y|X<sub>n</sub>=x<sub>n</sub>,…,X₀=x₀)=Σ<sub>x</sub>p<sub>xy</sub>p<sub>xₙx</sub>=(P²)<sub>xₙy</sub>.</div>
        <p><strong>Theorem.</strong> <span class="math">p(m+n)=p(m)Pⁿ=p(m)P<sup>(n)</sup></span>.</p>
        <p><strong>Definition.</strong> A row matrix <span class="math">p̂</span> is a stationary distribution if</p>
        <div class="formula">p̂P=p̂, &nbsp; p̂<sub>i</sub>≥0, &nbsp; Σ<sub>i</sub>p̂<sub>i</sub>=1.</div>
        <p>If <span class="math">p(m)=p̂</span>, then <span class="math">p(m+n)=p̂</span> for all <span class="math">n≥1</span>.</p>
        <p>For the original superhero chain, <span class="math">p̂=(1,0,0,0,0)</span>. For the modified chain, solving <span class="math">p̂P=p̂</span> yields</p>
        <div class="formula">p̂₄=p̂₀, &nbsp; p̂₁=(4/3)p̂₀, &nbsp; p̂₂=2p̂₀, &nbsp; p̂₃=4p̂₀, &nbsp; p̂₄=p̂₀.</div>
        <div class="formula">p̂=p̂₀(1+4/3+2+4+1)=p̂₀(28/3)=(3/28,4/28,6/28,12/28,3/28).</div>`),
      page(4, "Recurrence, accessibility, and periodicity", `
        <p><strong>Definition.</strong> The mean time to return to state <span class="math">i</span> is</p>
        <div class="formula">μ<sub>i</sub>=E(min{n≥1:X<sub>n</sub>=i}|X₀=i).</div>
        <p>For an irreducible aperiodic chain, a stationary distribution exists exactly when <span class="math">μ<sub>i</sub>&lt;∞</span> for all states, and then <span class="math">p̂<sub>i</sub>=1/μ<sub>i</sub></span>.</p>
        <p>For the modified superhero chain, <span class="math">μ₀=1/p̂₀=28/3</span>. The original superhero example also gives the mean waiting time to state 4 as <span class="math">1+4/3+2+4=25/3</span>.</p>
        <p>State <span class="math">j</span> is accessible from <span class="math">i</span>, written <span class="math">i→j</span>, if <span class="math">p<sub>ij</sub><sup>(n)</sup>&gt;0</span> for some <span class="math">n</span>. They communicate, <span class="math">i↔j</span>, if both directions hold. The chain is irreducible if all states communicate.</p>
        <p>Random walk and the modified superhero chain are irreducible; the original superhero chain is not.</p>
        <p><strong>Definition.</strong> The period is <span class="math">d(i)=gcd{n≥1:p<sub>ii</sub><sup>(n)</sup>&gt;0}</span>. A chain is aperiodic if every state has period 1. Random walk has period 2; modified superheroes have period 1.</p>
        <p>A state is transient if <span class="math">P(X<sub>n</sub>=i for some n≥1|X₀=i)&lt;1</span>, and recurrent if this probability is 1.</p>`),
      page(5, "Random-walk recurrence", `
        <p><strong>Theorem.</strong> State <span class="math">i</span> is recurrent if and only if <span class="math">Σ<sub>n=1</sub><sup>∞</sup>p<sub>ii</sub><sup>(n)</sup>=∞</span>. For the random walk,</p>
        <div class="formula">p<sub>ii</sub><sup>(n)</sup>=C(n,n/2)p<sup>n/2</sup>(1−p)<sup>n/2</sup> for even n, and p<sub>ii</sub><sup>(n)</sup>=0 for odd n.</div>
        <p>Using Stirling’s formula <span class="math">n!∼√(2πn)nⁿe<sup>−n</sup></span>,</p>
        <div class="formula">p<sub>ii</sub><sup>(2n)</sup>∼[4p(1−p)]ⁿ/√(πn).</div>
        <p>Hence the return series diverges if and only if <span class="math">p=1/2</span>. The symmetric one-dimensional walk is recurrent; the biased walk is transient.</p>`)
    ]
  },
  {
    id: "hsu-56-57",
    title: "Hsu 5.6-5.7",
    file: "Hsu_56-57.pdf",
    subtitle: "Poisson processes and Wiener processes.",
    pages: [
      page(1, "Poisson process", `
        <p><strong>Definition.</strong> A Poisson process <span class="math">X(t)</span>, <span class="math">t≥0</span>, satisfies</p>
        <div class="formula">X(0)=0;</div>
        <div class="formula">X(t+s)−X(s)∼Po(λt), for s,t≥0;</div>
        <div class="formula">X(t+s)−X(s) is independent of {X(u):u∈[0,s]}.</div>
        <p>The sample paths have independent exponentially distributed waiting times with mean <span class="math">1/λ</span>.</p>
        <p><strong>Example.</strong> <span class="math">μ<sub>X</sub>(t)=λt</span>, and</p>
        <div class="formula">R<sub>X</sub>(t,t+τ)=E[X(t)X(t+τ)] = E[X(t)(X(t+τ)−X(t))]+E[X(t)²]</div>
        <div class="formula">=E(Po(λt))E(Po(λτ))+E(Po(λt))²+Var(Po(λt))=λ²t(t+τ)+λt.</div>
        <p><strong>Conditional example.</strong></p>
        <div class="formula">P(X(1)=1|X(2)=2)=P(X(1)=1)P(X(2)−X(1)=1)/P(X(2)=2)=1/2.</div>`),
      page(2, "Wiener process / Brownian motion", `
        <p><strong>Definition.</strong> A process <span class="math">{X(t)}<sub>t≥0</sub></span> is a Wiener process, also called Brownian motion, if it is a stationary independent-increment process with</p>
        <div class="formula">X(t)−X(s)∼Normal(0,σ²(t−s)) for 0≤s≤t.</div>
        <p><strong>Theorem.</strong> A Wiener process is a zero-mean Gaussian process with</p>
        <div class="formula">R<sub>X</sub>(s,t)=K<sub>X</sub>(s,t)=σ²min(s,t).</div>
        <p><strong>Proof.</strong> Since <span class="math">X(t)=(X(t)−X(0))+X(0)=N(0,σ²t)</span>, it is zero-mean with variance <span class="math">σ²t</span>. For <span class="math">0≤t₁≤⋯≤tₙ</span>, write any finite linear combination as</p>
        <div class="formula">Σa<sub>i</sub>X(t<sub>i</sub>)=a<sub>n</sub>(X(t<sub>n</sub>)−X(t<sub>n−1</sub>))+(a<sub>n</sub>+a<sub>n−1</sub>)(X(t<sub>n−1</sub>)−X(t<sub>n−2</sub>))+⋯+(a<sub>n</sub>+⋯+a₁)X(t₁).</div>
        <p>This is a sum of independent normal random variables, hence normal.</p>`)
    ]
  },
  {
    id: "hsu-58",
    title: "Hsu 5.8",
    file: "Hsu_58.pdf",
    subtitle: "Conditional expectation, filtrations, martingales, and stopping times.",
    pages: [
      page(1, "Conditional expectation", `
        <p>For continuous random variables, the conditional expectation of <span class="math">Y</span> given <span class="math">X=x</span> is</p>
        <div class="formula">E(Y|X=x)=∫<sub>−∞</sub><sup>∞</sup>y f<sub>Y|X</sub>(y|x)dy.</div>
        <p>For a discrete random variable,</p>
        <div class="formula">E(Y|X=x)=Σ<sub>y</sub>y p<sub>Y|X</sub>(y|x).</div>
        <p>When a joint density exists,</p>
        <div class="formula">f<sub>Y|X</sub>(y|x)=f<sub>X,Y</sub>(x,y)/f<sub>X</sub>(x), &nbsp; f<sub>X</sub>(x)&gt;0.</div>
        <p>If <span class="math">Y=g(X<sub>0</sub>,…,X<sub>n</sub>)</span>, then the conditional expectation is a function of the observed values:</p>
        <div class="formula">E(Y|X<sub>0</sub>,…,X<sub>n</sub>)=g(X<sub>0</sub>,…,X<sub>n</sub>).</div>
        <p>More generally, <span class="math">E(Y|X<sub>0</sub>,…,X<sub>n</sub>)</span> means conditioning on the information generated by those variables.</p>`),
      page(2, "Properties of conditional expectation", `
        <p>Let <span class="math">F<sub>n</sub>=σ(X<sub>0</sub>,…,X<sub>n</sub>)</span>. Then</p>
        <div class="formula">E(Y|X<sub>0</sub>,…,X<sub>n</sub>)=E(Y|σ(X<sub>0</sub>,…,X<sub>n</sub>))=E(Y|F<sub>n</sub>).</div>
        <p>The conditional expectation is <span class="math">F<sub>n</sub></span>-measurable. Its main properties are:</p>
        <ol>
          <li><strong>Linearity:</strong> <span class="math">E(aX+bY|F)=aE(X|F)+bE(Y|F)</span>.</li>
          <li><strong>Positivity:</strong> if <span class="math">X≥0</span>, then <span class="math">E(X|F)≥0</span>.</li>
          <li><strong>Measurable pull-out:</strong> if <span class="math">Z</span> is <span class="math">F</span>-measurable, then <span class="math">E(ZX|F)=ZE(X|F)</span>.</li>
          <li><strong>Independence:</strong> if <span class="math">X</span> is independent of <span class="math">F</span>, then <span class="math">E(X|F)=E(X)</span>.</li>
          <li><strong>Tower property:</strong> if <span class="math">F⊂G</span>, then <span class="math">E(E(X|G)|F)=E(X|F)</span>.</li>
          <li><strong>Expectation:</strong> <span class="math">E(E(X|F))=E(X)</span>.</li>
          <li><strong>Jensen:</strong> for convex <span class="math">g</span>, <span class="math">g(E(X|F))≤E(g(X)|F)</span>.</li>
        </ol>
        <p>A filtration is an increasing family of sigma-fields: <span class="math">F<sub>0</sub>⊂F<sub>1</sub>⊂⋯</span>. It represents the information available over time.</p>
        <p><strong>Definition.</strong> A process <span class="math">{X<sub>n</sub>}</span> is a martingale with respect to <span class="math">{F<sub>n</sub>}</span> if <span class="math">E|X<sub>n</sub>|&lt;∞</span>, <span class="math">X<sub>n</sub></span> is <span class="math">F<sub>n</sub></span>-measurable, and</p>
        <div class="formula">E(X<sub>n+1</sub>|F<sub>n</sub>)=X<sub>n</sub>.</div>`),
      page(3, "Martingales and stopping times", `
        <p>A submartingale satisfies <span class="math">E(X<sub>n+1</sub>|F<sub>n</sub>)≥X<sub>n</sub></span>; a supermartingale satisfies the reverse inequality.</p>
        <p><strong>Martingale theorem.</strong> If <span class="math">{X<sub>n</sub>}</span> is a martingale, then:</p>
        <div class="formula">E(X<sub>n</sub>)=E(X<sub>0</sub>), &nbsp; E(X<sub>m+n</sub>|F<sub>n</sub>)=X<sub>n</sub>.</div>
        <p>If <span class="math">g</span> is convex, then <span class="math">{g(X<sub>n</sub>)}</span> is a submartingale by Jensen's inequality.</p>
        <p><strong>Definition.</strong> A random time <span class="math">T</span> is a stopping time if <span class="math">{T≤n}∈F<sub>n</sub></span> for every <span class="math">n</span>. Thus the decision whether stopping has occurred can be made using the information available at that time.</p>
        <p><strong>Optional stopping theorem.</strong> Under the stated integrability conditions <span class="math">E(T)&lt;∞</span>, <span class="math">E|X<sub>T</sub>|&lt;∞</span>, and <span class="math">lim<sub>n→∞</sub>E(|X<sub>n</sub>|1<sub>{T&gt;n}</sub>)=0</span>, a martingale satisfies</p>
        <div class="formula">E(X<sub>T</sub>)=E(X<sub>0</sub>).</div>`),
      page(4, "Optional stopping example", `
        <p>Let <span class="math">X<sub>0</sub>=100</span> and <span class="math">X<sub>n</sub>=X<sub>0</sub>+Σ<sub>i=1</sub><sup>n</sup>Y<sub>i</sub></span>, where</p>
        <div class="formula">P(Y<sub>i</sub>=4)=1/5, &nbsp; P(Y<sub>i</sub>=−1)=4/5.</div>
        <p>Since <span class="math">E(Y<sub>i</sub>)=4(1/5)−1(4/5)=0</span>, the process is a martingale.</p>
        <p>Let <span class="math">T=min{n≥1:X<sub>n</sub>=0 or X<sub>n</sub>≥200}</span>. Optional stopping gives</p>
        <div class="formula">100=E(X<sub>0</sub>)=E(X<sub>T</sub>).</div>
        <p>At stopping, <span class="math">X<sub>T</sub></span> is either 0 or lies between 200 and 203, because the upward jump is at most 4. Hence</p>
        <div class="formula">200P(X<sub>T</sub>≥200)≤100≤203P(X<sub>T</sub>≥200),</div>
        <p>so</p>
        <div class="formula">100/203≤P(X<sub>T</sub>≥200)≤1/2.</div>`),
      page(5, "Continuous-time martingales", `
        <p>For a continuous-time process, let <span class="math">F<sub>t</sub>=σ({X(s):0≤s≤t})</span>. The process is a martingale if <span class="math">E|X(t)|&lt;∞</span>, <span class="math">X(t)</span> is <span class="math">F<sub>t</sub></span>-measurable, and for <span class="math">0≤s≤t</span>,</p>
        <div class="formula">E[X(t)|F<sub>s</sub>]=X(s).</div>
        <p>The same consequences hold in continuous time: <span class="math">E[X(t)]=E[X(0)]</span>, and convex transformations of martingales are submartingales.</p>`)
    ]
  },
  {
    id: "hsu-61-63b",
    title: "Hsu 6.1-6.3B",
    file: "Hsu_61-63B.pdf",
    subtitle: "Mean-square convergence, differentiation, integration, and cross-correlation.",
    pages: [
      page(1, "Mean-square convergence", `
        <p><strong>Definition.</strong> <span class="math">X<sub>n</sub>→X</span> in mean square if</p>
        <div class="formula">E[(X<sub>n</sub>−X)²]→0.</div>
        <p><strong>Theorem.</strong> Mean-square convergence implies convergence of means, second moments, and products whenever the relevant moments exist. In particular, by Jensen and Cauchy–Schwarz,</p>
        <div class="formula">|E(X<sub>n</sub>−X)|≤√E[(X<sub>n</sub>−X)²]→0.</div>
        <p>A process is mean-square continuous at <span class="math">t<sub>0</sub></span> if <span class="math">E[(X(t)−X(t<sub>0</sub>))²]→0</span> as <span class="math">t→t<sub>0</sub></span>. This is equivalent to continuity of the mean and of the autocorrelation at <span class="math">(t<sub>0</sub>,t<sub>0</sub>)</span>, since</p>
        <div class="formula">E[(X(t)−X(t<sub>0</sub>))²]=R<sub>X</sub>(t,t)−2R<sub>X</sub>(t,t<sub>0</sub>)+R<sub>X</sub>(t<sub>0</sub>,t<sub>0</sub>).</div>`),
      page(2, "Mean-square derivative and integral", `
        <p>A stationary independent-increment process with mean <span class="math">E[X(1)]</span> and variance <span class="math">Var(X(1))</span> has</p>
        <div class="formula">R<sub>X</sub>(s,t)=Var(X(1))min(s,t)+[E X(1)]²st.</div>
        <p>The Poisson process is mean-square continuous even though its sample paths jump.</p>
        <p><strong>Definition.</strong> A mean-square derivative at <span class="math">t</span> is a random variable <span class="math">X′(t)</span> such that</p>
        <div class="formula">E[ ((X(t+h)−X(t))/h)−X′(t) ]²→0.</div>
        <p><strong>Theorem.</strong> A mean-square derivative exists when the appropriate mixed derivative of the autocorrelation exists; formally,</p>
        <div class="formula">R<sub>X′</sub>(s,t)=∂²R<sub>X</sub>(s,t)/(∂s∂t).</div>
        <p>Stationary independent-increment processes are not mean-square differentiable because the <span class="math">min(s,t)</span> term has a corner on <span class="math">s=t</span>.</p>
        <p>The mean-square integral is the mean-square limit of Riemann sums. Its covariance is obtained by integrating the covariance kernel twice:</p>
        <div class="formula">E[(∫<sub>a</sub><sup>b</sup>X(t)dt)(∫<sub>c</sub><sup>d</sup>X(s)ds)]=∫<sub>a</sub><sup>b</sup>∫<sub>c</sub><sup>d</sup>R<sub>X</sub>(t,s)dtds.</div>`),
      page(3, "Cross-correlation inequalities", `
        <p>For jointly wide-sense stationary processes, the cross-correlation depends only on the lag: <span class="math">R<sub>XY</sub>(τ)=E[X(t)Y(t+τ)]</span>.</p>
        <p>The basic identities and bounds are</p>
        <div class="formula">R<sub>XY</sub>(−τ)=R<sub>YX</sub>(τ),</div>
        <div class="formula">|R<sub>XY</sub>(τ)|≤√(R<sub>X</sub>(0)R<sub>Y</sub>(0)),</div>
        <div class="formula">|R<sub>XY</sub>(τ)|≤½(R<sub>X</sub>(0)+R<sub>Y</sub>(0)).</div>
        <p>The first bound follows from Cauchy–Schwarz. The second follows by applying nonnegativity to the mean square of <span class="math">X(t)±Y(t+τ)</span> and choosing the sign that gives the desired bound.</p>`)
    ]
  },
  {
    id: "hsu-63c-65",
    title: "Hsu 6.3C-6.5",
    file: "Hsu_63C-65.pdf",
    subtitle: "Power spectral density, white noise, ARMA models, and LTI systems.",
    pages: [
      page(1, "Continuous-time power spectra", `
        <p>For a continuous-time wide-sense stationary process, the power spectral density is the Fourier transform of the autocorrelation:</p>
        <div class="formula">S<sub>X</sub>(ω)=∫<sub>−∞</sub><sup>∞</sup>R<sub>X</sub>(τ)e<sup>−jωτ</sup>dτ, &nbsp; R<sub>X</sub>(τ)=1/(2π)∫<sub>−∞</sub><sup>∞</sup>S<sub>X</sub>(ω)e<sup>jωτ</sup>dω.</div>
        <p>For a random-phase sinusoid <span class="math">X(t)=A cos(ω₀t+Θ)</span>, with a phase uniformly distributed over a full period,</p>
        <div class="formula">R<sub>X</sub>(τ)=½E(A²)cos(ω₀τ).</div>
        <p>Therefore</p>
        <div class="formula">S<sub>X</sub>(ω)=πE(A²)/2 [δ(ω−ω₀)+δ(ω+ω₀)].</div>
        <p>For <span class="math">R<sub>X</sub>(τ)=e<sup>−α|τ|</sup></span>, split the Fourier integral at zero:</p>
        <div class="formula">S<sub>X</sub>(ω)=∫<sub>0</sub><sup>∞</sup>e<sup>−(α+jω)τ</sup>dτ+∫<sub>−∞</sub><sup>0</sup>e<sup>(α−jω)τ</sup>dτ=2α/(α²+ω²).</div>`),
      page(2, "Discrete-time spectra", `
        <p>For a discrete-time WSS process,</p>
        <div class="formula">S<sub>X</sub>(ω)=Σ<sub>k=−∞</sub><sup>∞</sup>R<sub>X</sub>(k)e<sup>−jωk</sup>, &nbsp; R<sub>X</sub>(k)=1/(2π)∫<sub>−π</sub><sup>π</sup>S<sub>X</sub>(ω)e<sup>jωk</sup>dω.</div>
        <p>The spectrum is nonnegative, real, and even for a real-valued process. The mean-square value is the area under the spectrum:</p>
        <div class="formula">E[X²(n)]=R<sub>X</sub>(0)=1/(2π)∫<sub>−π</sub><sup>π</sup>S<sub>X</sub>(ω)dω.</div>
        <p>For two jointly WSS processes, the cross-spectral density is the Fourier transform of the cross-correlation. The bandwidth describes the frequency interval containing the significant spectral power.</p>`),
      page(3, "White noise and ARMA models", `
        <p>A discrete white-noise sequence <span class="math">ε[n]</span> has independent, identically distributed samples with zero mean and variance <span class="math">σ²</span>:</p>
        <div class="formula">R<sub>ε</sub>(k)=σ²δ[k], &nbsp; S<sub>ε</sub>(ω)=σ².</div>
        <p>An ARMA(<span class="math">p,q</span>) model combines autoregression and a moving average:</p>
        <div class="formula">Y[n]+a<sub>1</sub>Y[n−1]+⋯+a<sub>p</sub>Y[n−p]=ε[n]+b<sub>1</sub>ε[n−1]+⋯+b<sub>q</sub>ε[n−q].</div>
        <p>MA and AR processes are the special cases obtained by setting the autoregressive or moving-average terms to zero.</p>
        <p>For the AR(1) process <span class="math">Y[n]=aY[n−1]+ε[n]</span>, with <span class="math">|a|&lt;1</span>,</p>
        <div class="formula">R<sub>Y</sub>(0)=σ²/(1−a²), &nbsp; R<sub>Y</sub>(k)=a<sup>|k|</sup>σ²/(1−a²).</div>`),
      page(4, "Linear time-invariant systems", `
        <p>A system <span class="math">T</span> is linear if <span class="math">T(aX+bY)=aT(X)+bT(Y)</span>, and time invariant if a shift in the input produces the same shift in the output.</p>
        <p>The impulse response is <span class="math">h=Tδ</span>. The output of an LTI system is the convolution</p>
        <div class="formula">Y(t)=∫<sub>−∞</sub><sup>∞</sup>h(u)X(t−u)du.</div>
        <p>If the input is WSS and the system is stable, the output has mean</p>
        <div class="formula">μ<sub>Y</sub>=μ<sub>X</sub>∫h(u)du</div>
        <p>and autocorrelation</p>
        <div class="formula">R<sub>Y</sub>(τ)=∫∫h(u)h(v)R<sub>X</sub>(τ+u−v)dudv.</div>`),
      page(5, "Frequency response", `
        <p>Let <span class="math">H(ω)</span> be the Fourier transform of the impulse response. In the frequency domain,</p>
        <div class="formula">Y(ω)=H(ω)X(ω), &nbsp; S<sub>Y</sub>(ω)=|H(ω)|²S<sub>X</sub>(ω).</div>
        <p>The cross-spectra are</p>
        <div class="formula">S<sub>XY</sub>(ω)=H(ω)S<sub>X</sub>(ω), &nbsp; S<sub>YX</sub>(ω)=H*(ω)S<sub>X</sub>(ω).</div>
        <p>For the AR(1) model, the transfer function from white noise to <span class="math">Y</span> is</p>
        <div class="formula">H(ω)=1/(1−ae<sup>−jω</sup>),</div>
        <p>so</p>
        <div class="formula">S<sub>Y</sub>(ω)=σ²/(1+a²−2a cosω).</div>`)
    ]
  },
  {
    id: "hsu-9",
    title: "Hsu 9",
    file: "Hsu_9.pdf",
    subtitle: "Exponential waiting times, birth-death processes, and queueing theory.",
    pages: [
      page(1, "Exponential random variables", `
        <p>If <span class="math">T≥0</span> is exponential with parameter <span class="math">λ&gt;0</span>, write <span class="math">T∼Exp(λ)</span> and</p>
        <div class="formula">f<sub>T</sub>(t)=λe<sup>−λt</sup>, &nbsp; t≥0.</div>
        <p>For independent <span class="math">T<sub>i</sub>∼Exp(λ<sub>i</sub>)</span>, the minimum is exponential:</p>
        <div class="formula">min(T<sub>1</sub>,…,T<sub>n</sub>)∼Exp(Σλ<sub>i</sub>).</div>
        <p>Moreover, the probability that the minimum is attained by <span class="math">T<sub>i</sub></span> is</p>
        <div class="formula">P(T<sub>i</sub>=min<sub>j</sub>T<sub>j</sub>)=λ<sub>i</sub>/(Σλ<sub>j</sub>).</div>
        <p>Both results follow by multiplying the survival probabilities of the independent exponentials.</p>`),
      page(2, "Memorylessness and birth-death processes", `
        <p>The exponential distribution is memoryless:</p>
        <div class="formula">P(T&gt;t+s|T&gt;s)=P(T&gt;t).</div>
        <p>The converse also holds: a nonnegative continuous random variable with the memoryless property is exponential.</p>
        <p>A birth-death process takes values in the nonnegative integers. When it is in state <span class="math">n</span>, it waits an exponential time with parameter <span class="math">μ<sub>n</sub>+λ<sub>n</sub></span>, then moves to <span class="math">n−1</span> with probability <span class="math">μ<sub>n</sub>/(μ<sub>n</sub>+λ<sub>n</sub>)</span> or to <span class="math">n+1</span> with probability <span class="math">λ<sub>n</sub>/(μ<sub>n</sub>+λ<sub>n</sub>)</span>. Set <span class="math">μ<sub>0</sub>=0</span>; rates are nonnegative, and <span class="math">λ<sub>n</sub>=0</span> means no upward transition.</p>`),
      page(3, "Steady-state birth-death probabilities", `
        <p>Let <span class="math">p<sub>n</sub>=P(X(t)=n)</span> in steady state. The flow-balance equations are</p>
        <div class="formula">p<sub>n</sub>(μ<sub>n</sub>+λ<sub>n</sub>)=p<sub>n−1</sub>λ<sub>n−1</sub>+p<sub>n+1</sub>μ<sub>n+1</sub>, &nbsp; n≥1,</div>
        <div class="formula">p<sub>0</sub>λ<sub>0</sub>=p<sub>1</sub>μ<sub>1</sub>.</div>
        <p>Solving recursively gives</p>
        <div class="formula">p<sub>n</sub>=p<sub>0</sub> (λ<sub>0</sub>λ<sub>1</sub>⋯λ<sub>n−1</sub>)/(μ<sub>1</sub>μ<sub>2</sub>⋯μ<sub>n</sub>),</div>
        <div class="formula">p<sub>0</sub>=[1+Σ<sub>n=1</sub><sup>∞</sup>(λ<sub>0</sub>⋯λ<sub>n−1</sub>)/(μ<sub>1</sub>⋯μ<sub>n</sub>)]<sup>−1</sup>.</div>`),
      page(4, "M/M/s/K queues", `
        <p>The notation <span class="math">M/M/s/K</span>, also written <span class="math">M(λ)/M(μ)/s/K</span>, describes Poisson arrivals, exponential service, <span class="math">s</span> servers, and capacity <span class="math">K</span>. Here <span class="math">λ,μ&gt;0</span>, <span class="math">s∈{1,2,…}</span>, and <span class="math">K≥s</span>; <span class="math">K=∞</span> gives <span class="math">M/M/s</span>.</p>
        <p>The birth-death rates are</p>
        <div class="formula">λ<sub>n</sub>=λ for n=0,…,K−1, &nbsp; λ<sub>n</sub>=0 for n≥K,</div>
        <div class="formula">μ<sub>n</sub>=nμ for 1≤n≤s, &nbsp; μ<sub>n</sub>=sμ for s≤n≤K.</div>
        <p>The state <span class="math">X(t)=n</span> is the number of customers in the system, including those in service and those waiting.</p>`),
      page(5, "Queue transitions", `
        <p>Interarrival times are independent <span class="math">Exp(λ)</span> variables. Each server has an independent <span class="math">Exp(μ)</span> service time. There are <span class="math">K−s</span> waiting places; when a finite-capacity system is full, an attempted arrival is lost.</p>
        <p>When <span class="math">X(t)=n</span>, the next transition is a race between an arrival with rate <span class="math">λ<sub>n</sub></span> and a departure with rate <span class="math">μ<sub>n</sub></span>. The time to the next transition is <span class="math">Exp(λ<sub>n</sub>+μ<sub>n</sub>)</span>, and</p>
        <div class="formula">P(n→n+1)=λ<sub>n</sub>/(λ<sub>n</sub>+μ<sub>n</sub>), &nbsp; P(n→n−1)=μ<sub>n</sub>/(λ<sub>n</sub>+μ<sub>n</sub>).</div>`),
      page(6, "Queueing performance measures", `
        <p>In steady state, define:</p>
        <ul>
          <li><span class="math">L</span>: mean number of customers in the system;</li>
          <li><span class="math">L<sub>q</sub></span>: mean number waiting for service;</li>
          <li><span class="math">L<sub>s</sub></span>: mean number in service;</li>
          <li><span class="math">W</span>: mean time in the system;</li>
          <li><span class="math">W<sub>q</sub></span>: mean waiting time before service;</li>
          <li><span class="math">W<sub>s</sub></span>: mean time in service.</li>
        </ul>
        <p>The mean time between attempted arrivals is <span class="math">1/λ</span>. For finite capacity, the effective arrival rate is</p>
        <div class="formula">λ<sub>e</sub>=λ(1−p<sub>K</sub>).</div>
        <p>For an infinite-capacity queue, the traffic intensity is <span class="math">ρ=λ/(μs)</span>, and stability requires <span class="math">ρ&lt;1</span>.</p>`),
      page(7, "Little's law and M/M/1", `
        <p>Little's law gives</p>
        <div class="formula">L<sub>q</sub>=λ<sub>e</sub>W<sub>q</sub>, &nbsp; L<sub>s</sub>=λ<sub>e</sub>W<sub>s</sub>, &nbsp; L=L<sub>q</sub>+L<sub>s</sub>, &nbsp; W=W<sub>q</sub>+W<sub>s</sub>.</div>
        <p>For exponential service, <span class="math">W<sub>s</sub>=1/μ</span>. For an <span class="math">M/M/1</span> queue with <span class="math">λ&lt;μ</span>,</p>
        <div class="formula">p<sub>n</sub>=(1−λ/μ)(λ/μ)<sup>n</sup>,</div>
        <div class="formula">L=λ/(μ−λ), &nbsp; L<sub>s</sub>=λ/μ, &nbsp; L<sub>q</sub>=λ²/[μ(μ−λ)],</div>
        <div class="formula">W<sub>q</sub>=λ/[μ(μ−λ)], &nbsp; W=1/(μ−λ).</div>`)
    ]
  },
  {
    id: "gs-61-64",
    title: "GS 6.1-6.4",
    file: "GS_61-64.pdf",
    subtitle: "Markov chains, recurrence, classification, and stationary distributions.",
    pages: [
      page(1, "Markov property", `
        <p>A process with state space <span class="math">S</span> is a Markov chain if its future, conditional on the present, is independent of the past:</p>
        <div class="formula">P(X<sub>n+1</sub>=j|X<sub>0</sub>=i<sub>0</sub>,…,X<sub>n</sub>=i)=P(X<sub>n+1</sub>=j|X<sub>n</sub>=i).</div>
        <p>Equivalently, for any <span class="math">m&gt;0</span>,</p>
        <div class="formula">P(X<sub>n+m</sub>=j|X<sub>0</sub>,…,X<sub>n</sub>)=P(X<sub>n+m</sub>=j|X<sub>n</sub>).</div>
        <p>The one-step transition probability is <span class="math">p<sub>ij</sub>(n)=P(X<sub>n+1</sub>=j|X<sub>n</sub>=i)</span>. A discrete-time Markov chain has a countable state space and is described by these transition probabilities.</p>`),
      page(2, "Transition matrices", `
        <p>A chain is time homogeneous when <span class="math">p<sub>ij</sub>(n)</span> does not depend on <span class="math">n</span>. Write it as <span class="math">p<sub>ij</sub></span>, and form the transition matrix</p>
        <div class="formula">P=(p<sub>ij</sub>), &nbsp; p<sub>ij</sub>≥0, &nbsp; Σ<sub>j</sub>p<sub>ij</sub>=1.</div>
        <p>Thus <span class="math">P</span> is a stochastic matrix. Let <span class="math">p<sub>ij</sub><sup>(n)</sup>=P(X<sub>n</sub>=j|X<sub>0</sub>=i)</span>. The Chapman–Kolmogorov relation gives</p>
        <div class="formula">p<sub>ij</sub><sup>(m+n)</sup>=Σ<sub>k</sub>p<sub>ik</sub><sup>(m)</sup>p<sub>kj</sub><sup>(n)</sup>.</div>
        <p>In matrix form, the <span class="math">n</span>-step transition matrix is</p>
        <div class="formula">P(0,n)=P<sup>n</sup>.</div>
        <p>More generally, <span class="math">P(m,m+n)=P<sup>n</sup></span> for a time-homogeneous chain.</p>`),
      page(3, "Distributions and random walk", `
        <p>Let <span class="math">μ<sup>(n)</sup></span> be the row-vector distribution at time <span class="math">n</span>:</p>
        <div class="formula">μ<sub>j</sub><sup>(n)</sup>=P(X<sub>n</sub>=j).</div>
        <p>Then</p>
        <div class="formula">μ<sup>(m+n)</sup>=μ<sup>(m)</sup>P<sup>n</sup>, &nbsp; μ<sup>(n)</sup>=μ<sup>(0)</sup>P<sup>n</sup>.</div>
        <p>For the random walk on <span class="math">S=ℤ</span>, let <span class="math">p=P(X<sub>n+1</sub>−X<sub>n</sub>=1)</span> and <span class="math">q=1−p</span>. Then</p>
        <div class="formula">p<sub>ij</sub>=p if j=i+1, &nbsp; q if j=i−1, &nbsp; 0 otherwise.</div>
        <p>After <span class="math">n</span> steps, if <span class="math">n+j−i</span> is even,</p>
        <div class="formula">p<sub>ij</sub><sup>(n)</sup>=C(n,(n+j−i)/2)p<sup>(n+j−i)/2</sup>q<sup>(n−j+i)/2</sup>,</div>
        <p>and it is zero otherwise. This counts the required number of upward and downward steps.</p>`),
      page(4, "First passage and generating functions", `
        <p>State <span class="math">i</span> is recurrent (persistent) if</p>
        <div class="formula">P(X<sub>n</sub>=i for some n≥1|X<sub>0</sub>=i)=1;</div>
        <p>otherwise it is transient.</p>
        <p>Define the first-passage probabilities</p>
        <div class="formula">f<sub>ij</sub>(n)=P(X<sub>n</sub>=j, X<sub>1</sub>≠j,…,X<sub>n−1</sub>≠j|X<sub>0</sub>=i),</div>
        <p>with <span class="math">f<sub>ij</sub>(0)=0</span>. Let</p>
        <div class="formula">f<sub>ij</sub>=Σ<sub>n≥0</sub>f<sub>ij</sub>(n), &nbsp; p<sub>ij</sub>(s)=Σ<sub>n≥0</sub>s<sup>n</sup>p<sub>ij</sub><sup>(n)</sup>, &nbsp; F<sub>ij</sub>(s)=Σ<sub>n≥0</sub>s<sup>n</sup>f<sub>ij</sub>(n).</div>
        <p>Since <span class="math">p<sub>ij</sub>(0)=δ<sub>ij</sub></span>, first passage decomposition gives</p>
        <div class="formula">p<sub>ii</sub>(s)=1+F<sub>ii</sub>(s)p<sub>ii</sub>(s), &nbsp; p<sub>ij</sub>(s)=F<sub>ij</sub>(s)p<sub>jj</sub>(s) for i≠j.</div>`),
      page(5, "Recurrence criteria", `
        <p><strong>Theorem.</strong> State <span class="math">j</span> is persistent if and only if</p>
        <div class="formula">Σ<sub>n=0</sub><sup>∞</sup>p<sub>jj</sub><sup>(n)</sup>=∞.</div>
        <p>If <span class="math">f<sub>ij</sub>&gt;0</span>, then <span class="math">Σ<sub>n≥0</sub>p<sub>ij</sub><sup>(n)</sup>=∞</span> whenever <span class="math">j</span> is persistent. If <span class="math">j</span> is transient, the sum is finite for every <span class="math">i</span>.</p>
        <p>For a transient state,</p>
        <div class="formula">lim<sub>n→∞</sub>p<sub>ij</sub><sup>(n)</sup>=0.</div>
        <p>The mean recurrence time is</p>
        <div class="formula">μ<sub>j</sub>=E(T<sub>j</sub>|X<sub>0</sub>=j)=Σ<sub>n≥1</sub>n f<sub>jj</sub>(n),</div>
        <p>when <span class="math">f<sub>jj</sub>=1</span>, and is infinite if the state is transient. A recurrent state can also be null recurrent, with <span class="math">μ<sub>j</sub>=∞</span>.</p>`),
      page(6, "Periods and communication", `
        <p>A persistent state is positive recurrent (non-null) if <span class="math">μ<sub>j</sub>&lt;∞</span>; otherwise it is null recurrent. Its period is</p>
        <div class="formula">d(j)=gcd{n≥1:p<sub>jj</sub><sup>(n)</sup>&gt;0}.</div>
        <p>It is aperiodic if <span class="math">d(j)=1</span>, and ergodic if it is positive recurrent and aperiodic.</p>
        <p>State <span class="math">i</span> communicates with <span class="math">j</span>, written <span class="math">i↔j</span>, when each is accessible from the other; accessibility means <span class="math">p<sub>ij</sub><sup>(n)</sup>&gt;0</span> for some <span class="math">n≥0</span>.</p>
        <p>Communicating states have the same period and the same classification: if one is recurrent, all states in its communicating class are recurrent; likewise for transience.</p>`),
      page(7, "Closed classes and decomposition", `
        <p>A set <span class="math">C</span> is closed if no transition leaves it:</p>
        <div class="formula">p<sub>ij</sub>=0 for i∈C, j∉C.</div>
        <p>A class is irreducible if every pair of states in it communicates. The state space decomposes into a transient part <span class="math">T</span> and closed irreducible persistent classes <span class="math">C<sub>1</sub>,C<sub>2</sub>,…</span>:</p>
        <div class="formula">S=T∪C<sub>1</sub>∪C<sub>2</sub>∪⋯.</div>
        <p>The decomposition is unique up to the order of the classes. If the state space is finite, at least one persistent class exists, and every persistent state is positive recurrent.</p>`),
      page(8, "Stationary distributions and limits", `
        <p>A row probability vector <span class="math">Π</span> is stationary if</p>
        <div class="formula">Π=ΠP, &nbsp; Π<sub>i</sub>≥0, &nbsp; Σ<sub>i</sub>Π<sub>i</sub>=1.</div>
        <p>Then <span class="math">ΠP<sup>n</sup>=Π</span> for every <span class="math">n</span>. For an irreducible chain, a stationary distribution exists if and only if all states are positive recurrent, and</p>
        <div class="formula">Π<sub>i</sub>=1/μ<sub>i</sub>.</div>
        <p>If the chain is also aperiodic, then</p>
        <div class="formula">lim<sub>n→∞</sub>p<sub>jj</sub><sup>(n)</sup>=1/μ<sub>j</sub>, &nbsp; lim<sub>n→∞</sub>p<sub>ij</sub><sup>(n)</sup>=1/μ<sub>j</sub>.</div>`)
    ]
  },
  {
    id: "gs-65-611",
    title: "GS 6.5-6.11",
    file: "GS_65-611.pdf",
    subtitle: "Reversibility and continuous-time Markov chains.",
    pages: [
      page(1, "Reverse chains and detailed balance", `
        <p>Suppose <span class="math">{X<sub>n</sub>}</span> is irreducible, positive recurrent, and has stationary distribution <span class="math">Π</span>. For the reversed chain <span class="math">Y<sub>n</sub>=X<sub>N−n</sub></span>,</p>
        <div class="formula">p<sub>ij</sub><sup>Y</sup>=P(Y<sub>n+1</sub>=j|Y<sub>n</sub>=i)=Π<sub>j</sub>p<sub>ji</sub><sup>X</sup>/Π<sub>i</sub>.</div>
        <p>The chain is reversible if the reverse and forward transition probabilities agree. Equivalently, the detailed-balance equations hold:</p>
        <div class="formula">Π<sub>i</sub>p<sub>ij</sub><sup>X</sup>=Π<sub>j</sub>p<sub>ji</sub><sup>X</sup>.</div>
        <p><strong>Theorem.</strong> Detailed balance implies both stationarity and reversibility, because summing over <span class="math">i</span> gives <span class="math">Σ<sub>i</sub>Π<sub>i</sub>p<sub>ij</sub>=Π<sub>j</sub></span>.</p>`),
      page(2, "Continuous-time Markov chains", `
        <p>A continuous-time Markov chain has discrete state values and satisfies the Markov property at every time. Define</p>
        <div class="formula">p<sub>ij</sub>(t)=P(X(s+t)=j|X(s)=i)=P(X(t)=j|X(0)=i).</div>
        <p>Let <span class="math">P<sub>t</sub>=(p<sub>ij</sub>(t))</span>. The semigroup equations are</p>
        <div class="formula">P<sub>s</sub>P<sub>t</sub>=P<sub>s+t</sub>, &nbsp; μ<sup>(s+t)</sup>=μ<sup>(s)</sup>P<sub>t</sub>.</div>
        <p>The generator is</p>
        <div class="formula">G=P′<sub>0</sub>=lim<sub>ε↓0</sub>(P<sub>ε</sub>−I)/ε.</div>
        <p><strong>Theorem.</strong></p>
        <div class="formula">P′<sub>t</sub>=P<sub>t</sub>G=GP<sub>t</sub>, &nbsp; P<sub>t</sub>=e<sup>tG</sup>=Σ<sub>k=0</sub><sup>∞</sup>(t<sup>k</sup>/k!)G<sup>k</sup>.</div>`),
      page(3, "Generators and stationary laws", `
        <p>The generator entries satisfy</p>
        <div class="formula">g<sub>ii</sub>≤0, &nbsp; g<sub>ij</sub>≥0 (i≠j), &nbsp; Σ<sub>j</sub>g<sub>ij</sub>=0.</div>
        <p>When the chain is in state <span class="math">i</span>, it stays there for an exponential time with parameter <span class="math">−g<sub>ii</sub></span>, then jumps to <span class="math">j≠i</span> with probability</p>
        <div class="formula">g<sub>ij</sub>/(−g<sub>ii</sub>).</div>
        <p>A stationary distribution satisfies <span class="math">ΠG=0</span>. The chain is irreducible if for every pair <span class="math">i,j</span> there is a <span class="math">t&gt;0</span> with <span class="math">p<sub>ij</sub>(t)&gt;0</span>.</p>
        <p>For an irreducible continuous-time chain, either there is a unique stationary distribution and <span class="math">p<sub>ij</sub>(t)→Π<sub>j</sub></span>, or no stationary distribution exists and <span class="math">p<sub>ij</sub>(t)→0</span>.</p>`),
      page(4, "Birth-death generators", `
        <p>For a continuous-time birth-death process, the generator has</p>
        <div class="formula">g<sub>i,i+1</sub>=λ<sub>i</sub>; &nbsp; g<sub>i,i−1</sub>=μ<sub>i</sub>; &nbsp; g<sub>ii</sub>=−(λ<sub>i</sub>+μ<sub>i</sub>).</div>
        <p>All other off-diagonal entries are zero; at state 0, <span class="math">g<sub>00</sub>=−λ<sub>0</sub></span>. When a stationary distribution exists, it is</p>
        <div class="formula">Π<sub>i</sub>=Π<sub>0</sub> (λ<sub>0</sub>λ<sub>1</sub>⋯λ<sub>i−1</sub>)/(μ<sub>1</sub>μ<sub>2</sub>⋯μ<sub>i</sub>).</div>`)
    ]
  }
];
