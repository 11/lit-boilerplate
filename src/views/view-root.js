import { LitElement, html, css } from 'lit-element'
import { Router } from '@vaadin/router'
import { ROUTING_TABLE } from 'src/routes'


class Root extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 1rem;
        width: 100%;
        height: 100%;
      }
    `
  }

  setRoutes = () => {
    const slot = this.shadowRoot.querySelector('slot')
    const router = new Router(slot)
    router.setRoutes(ROUTING_TABLE)
  }

  firstUpdated() {
    super.firstUpdated()
    this.setRoutes()
  }

  render() {
    return html`
      <slot></slot>
    `
  }
}

customElements.define('view-root', Root)

