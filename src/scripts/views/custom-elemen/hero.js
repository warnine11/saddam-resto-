class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
      <div class="jumbotron" style="background-image: url('images/heros/hero-image_4.jpg');">
        <h1>Met Dateng Di Saddam Resto </h1>
        <p>Mau Mangan Apa Bang Hari ini?</p>
      </div>

    `;
  }
}

customElements.define('hero-section', Hero);
