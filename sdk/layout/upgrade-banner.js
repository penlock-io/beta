export class UpgradeBanner extends El {
    render(html) {
        return html`
            <a href="https://v1.penlock.io">V1 now live, check it out!</a>
            <p>This is a deprecated beta version. Please use the V1 instead.</p>
        `
    }

    styles(css) {
        return css`
            :host {
                padding: 2.6em 0.6em;
                background: orange;
                font-size: 1.6em;
                text-align: center;
                top: 0;
            }

            a {
                font-size: 1.6em;
            }

            p {
                margin-top: 2em;
                font-size: 1em;
                font-style: italic;
            }
        `
    }
}

customElements.define("upgrade-banner", UpgradeBanner)
