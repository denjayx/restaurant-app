class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <h1 class="tagline">Indonesian Flavors, Endless Choices</h1>
    </section>
    `;
  }
}

customElements.define('hero-banner', Hero);
