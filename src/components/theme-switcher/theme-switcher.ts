import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
	classicThemeIcon,
	darkThemeIcon,
	earthThemeIcon,
	blueThemeIcon,
	orangeThemeIcon,
} from './icons';

const themes = [
  {
    name: 'default',
    icon: classicThemeIcon,
    label: 'Classic',
  },
  {
    name: 'dark',
    icon: darkThemeIcon,
    label: 'Dark',
  },
  {
    name: 'earth',
    icon: earthThemeIcon,
    label: 'Earth',
  },
  {
    name: 'ocean',
    icon: blueThemeIcon,
    label: 'Ocean',
  },
  {
    name: 'sand',
    icon: orangeThemeIcon,
    label: 'Sand',
  }
]

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

	@property({ type: String })
	theme: string | null = null;

	private _getCurrentTheme() {
		// check for a local storage theme first
		const localStorageTheme = localStorage.getItem('theme');
		if (localStorageTheme !== null) {
			this._setTheme(localStorageTheme);
		} else {
    	// Set default theme to dark if the operating system specifies this preference
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				this._setTheme('dark');
			} else{ // Set to default/light theme if no specification, or light theme is specified
				this._setTheme('default');
			}
    		
    }
	}

  firstUpdated() {
    this._getCurrentTheme();
  }

	private _setTheme(theme) {
		this._doc.setAttribute('data-theme', theme);

    const _heroImage = document.querySelector('#home-hero-image') as HTMLImageElement;
		if (theme === 'default') {
			_heroImage.src = '/assets/images/home/classic-hero.jpg';
		}
		if (theme === 'dark') {
			_heroImage.src = '/assets/images/home/dark-hero.jpg';
		}
		if (theme === 'earth') {
			_heroImage.src = '/assets/images/home/earth-hero.jpg';
		}
		if (theme === 'ocean') {
			_heroImage.src = '/assets/images/home/ocean-hero.jpg';
		}
		if (theme === 'sand') {
			_heroImage.src = '/assets/images/home/sand-hero.jpg';
		}
		localStorage.setItem('theme', theme);
		this.theme = theme;
	}

	render() {
    const themeButtons = html`${themes.map((theme) => {
      return html`
      <div class="theme-select__container">
        <button
          @click=${() => this._setTheme(theme.name)}
          ?active=${this.theme === theme.name}
          title=${`Enable ${theme.label} Theme`}
        >
          ${theme.icon}
        </button>
        <p>${theme.label}</p>
        </div>
      `
    })}`

		return html`
			<div class="theme-switcher__container">
				${themeButtons}
			</div>
		`;
	}
}
