class NothingLikedResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="container restos">
        <span id="nothingLiked" class="nothing-liked-restaurant">Nothing Liked Restaurant</span>
      </section>
    `;
  }
}

customElements.define('nothing-liked', NothingLikedResto);
