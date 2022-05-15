import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
	classicThemeIcon,
	darkThemeIcon,
	earthThemeIcon,
	blueThemeIcon,
	orangeThemeIcon,
} from './icons';

export const tagName = 'theme-switcher';

@customElement('theme-switcher')
export class ThemeSwitcher extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
			button {
				display: inline-flex;
				outline: none;
				border: none;
				background-color: transparent;
				border: 2px solid transparent;
				border-radius: 20rem;
				padding: 1px;
				cursor: pointer;
				transition: border var(--theme-transition);
			}
			button[active] {
				border: 2px solid var(--theme-primary);
        box-shadow: 0 0 12px 1px var(--theme-primary);
			}
			button:hover {
				border: 2px solid var(--theme-primary);
			}
			.theme-switcher__container {
				margin: 2rem 0;
				display: grid;
				grid-template-columns: repeat(5, 1fr);
			}
			.theme-select__container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.theme-select__container p {
				font-size: var(--font-size-sm);
			}
		`,
	];

	// set the _doc element
	private _doc = document.firstElementChild;

	private _heroImage: HTMLImageElement =
		document.querySelector('#home-hero-image');

	@property({ type: String })
	theme: string = 'default';

	private _getCurrentTheme() {
		// check for a local storage theme first
		const localStorageTheme = localStorage.getItem('theme');
		if (localStorageTheme !== null) {
			this._setTheme(localStorageTheme);
		}
	}

	connectedCallback() {
		super.connectedCallback();
		this._getCurrentTheme();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	private _setTheme(theme) {
		this._doc.setAttribute('data-theme', theme);
		if (theme === 'default') {
			this._heroImage.src = '/assets/images/home/classic-hero.jpg';
		}
		if (theme === 'dark') {
			this._heroImage.src = '/assets/images/home/dark-hero.jpg';
		}
		if (theme === 'earth') {
			this._heroImage.src = '/assets/images/home/earth-hero.jpg';
		}
		if (theme === 'ocean') {
			this._heroImage.src = '/assets/images/home/ocean-hero.jpg';
		}
		if (theme === 'sand') {
			this._heroImage.src = '/assets/images/home/sand-hero.jpg';
		}
		localStorage.setItem('theme', theme);
		this.theme = theme;
	}

	render() {
		return html`
			<div class="theme-switcher__container">
				<div class="theme-select__container">
					<button
						@click=${() => this._setTheme('default')}
						?active=${this.theme === 'default'}
					>
						${classicThemeIcon}
					</button>
					<p>Classic</p>
				</div>
				<div class="theme-select__container">
					<button
						@click=${() => this._setTheme('dark')}
						?active=${this.theme === 'dark'}
					>
						${darkThemeIcon}
					</button>
					<p>Dark</p>
				</div>
				<div class="theme-select__container">
					<button
						@click=${() => this._setTheme('earth')}
						?active=${this.theme === 'earth'}
					>
						${earthThemeIcon}
					</button>
					<p>Earth</p>
				</div>
				<div class="theme-select__container">
					<button
						@click=${() => this._setTheme('ocean')}
						?active=${this.theme === 'ocean'}
					>
						${blueThemeIcon}
					</button>
					<p>Ocean</p>
				</div>
				<div class="theme-select__container">
					<button
						@click=${() => this._setTheme('sand')}
						?active=${this.theme === 'sand'}
					>
						${orangeThemeIcon}
					</button>
					<p>Sand</p>
				</div>
			</div>
		`;
	}
}
